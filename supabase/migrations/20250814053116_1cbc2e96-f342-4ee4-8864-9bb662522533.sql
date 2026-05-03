-- Fix security vulnerability in access_codes table
-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Insert access codes" ON public.access_codes;
DROP POLICY IF EXISTS "Update access codes" ON public.access_codes;

-- Create new restrictive policies for INSERT and UPDATE
-- Only admins and super_admins can create access codes
CREATE POLICY "Admins can insert access codes" 
ON public.access_codes 
FOR INSERT 
WITH CHECK (
  has_role(auth.uid(), 'admin'::user_role) OR 
  has_role(auth.uid(), 'super_admin'::user_role)
);

-- Only admins and super_admins can update access codes
CREATE POLICY "Admins can update access codes" 
ON public.access_codes 
FOR UPDATE 
USING (
  has_role(auth.uid(), 'admin'::user_role) OR 
  has_role(auth.uid(), 'super_admin'::user_role)
);

-- Allow service role (for edge functions like Stripe webhook) to manage access codes
CREATE POLICY "Service role can manage access codes" 
ON public.access_codes 
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);