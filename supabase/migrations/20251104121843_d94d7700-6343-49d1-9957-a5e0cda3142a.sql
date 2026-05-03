-- Fix 1: Add DELETE policy to progress table
CREATE POLICY "Users can delete their own progress"
ON public.progress
FOR DELETE
USING (auth.uid() = user_id);

-- Fix 2: Secure has_role() function against schema attacks
CREATE OR REPLACE FUNCTION public.has_role(user_id uuid, required_role user_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = $1 AND role = $2
  );
$function$;

-- Fix 3: Secure get_user_role() function against schema attacks
CREATE OR REPLACE FUNCTION public.get_user_role(user_id uuid)
RETURNS user_role
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT role FROM public.user_roles 
  WHERE user_roles.user_id = $1 
  ORDER BY 
    CASE role
      WHEN 'super_admin' THEN 4
      WHEN 'admin' THEN 3
      WHEN 'prof' THEN 2
      WHEN 'user' THEN 1
    END DESC
  LIMIT 1;
$function$;