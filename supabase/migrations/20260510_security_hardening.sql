-- Security hardening migration. Closes findings 4, 5, 8, 10 from the
-- 2026-05-09 CSO audit. Each section is idempotent (DROP IF EXISTS / CREATE).
--
-- Findings addressed:
--   #4  contact_leads: ensure RLS + admin-only SELECT/UPDATE
--   #5  parent_requests, teacher_applications: tighten SELECT/UPDATE to admins
--   #8  course_purchases: lock INSERT/UPDATE to service_role
--   #10 access_codes: deactivate the PRDIMITAR row leaked in git history

-- =========================================================================
-- 1. contact_leads — admin-only read/update; service_role-only insert.
-- The table is created via the dashboard; ensure RLS is on regardless.
-- =========================================================================
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'contact_leads') THEN
    EXECUTE 'ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY';

    EXECUTE 'DROP POLICY IF EXISTS "Anyone can read leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Authenticated can read leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Anyone can insert leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Authenticated can update leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can read leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can update leads" ON public.contact_leads';
    EXECUTE 'DROP POLICY IF EXISTS "Service role can manage leads" ON public.contact_leads';

    EXECUTE 'CREATE POLICY "Admins can read leads" ON public.contact_leads
      FOR SELECT TO authenticated
      USING (public.has_role(auth.uid(), ''admin''::user_role) OR public.has_role(auth.uid(), ''super_admin''::user_role))';

    EXECUTE 'CREATE POLICY "Admins can update leads" ON public.contact_leads
      FOR UPDATE TO authenticated
      USING (public.has_role(auth.uid(), ''admin''::user_role) OR public.has_role(auth.uid(), ''super_admin''::user_role))
      WITH CHECK (public.has_role(auth.uid(), ''admin''::user_role) OR public.has_role(auth.uid(), ''super_admin''::user_role))';

    EXECUTE 'CREATE POLICY "Service role can manage leads" ON public.contact_leads
      FOR ALL TO service_role
      USING (true) WITH CHECK (true)';
  END IF;
END $$;

-- =========================================================================
-- 2. parent_requests — admin-only SELECT/UPDATE. Public INSERT (for the form).
-- =========================================================================
DROP POLICY IF EXISTS "Allow authenticated users to read parent requests" ON public.parent_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update parent requests" ON public.parent_requests;
DROP POLICY IF EXISTS "Admins can read parent requests" ON public.parent_requests;
DROP POLICY IF EXISTS "Admins can update parent requests" ON public.parent_requests;

CREATE POLICY "Admins can read parent requests" ON public.parent_requests
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role));

CREATE POLICY "Admins can update parent requests" ON public.parent_requests
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role));

-- =========================================================================
-- 3. teacher_applications — admin-only SELECT/UPDATE. Public INSERT (apply form).
-- =========================================================================
DROP POLICY IF EXISTS "Allow authenticated users to read teacher applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Allow authenticated users to update teacher applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Admins can read teacher applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Admins can update teacher applications" ON public.teacher_applications;

CREATE POLICY "Admins can read teacher applications" ON public.teacher_applications
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role));

CREATE POLICY "Admins can update teacher applications" ON public.teacher_applications
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::user_role) OR public.has_role(auth.uid(), 'super_admin'::user_role));

-- =========================================================================
-- 4. course_purchases — service_role-only writes (mirrors the access_codes
--    fix from migration 20250814). Users can still SELECT their own row.
-- =========================================================================
DROP POLICY IF EXISTS "Insert purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Update purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Service role can manage purchases" ON public.course_purchases;

CREATE POLICY "Service role can manage purchases" ON public.course_purchases
  FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- (the existing "Users can view their own purchases" SELECT policy is kept)

-- =========================================================================
-- 5. PRDIMITAR free access code — deactivate. The active=false flag means
--    redemption attempts will fail. To reactivate, do it via the dashboard
--    (the row stays in the table for audit purposes).
-- =========================================================================
UPDATE public.access_codes
   SET active = false
 WHERE code = 'PRDIMITAR';
