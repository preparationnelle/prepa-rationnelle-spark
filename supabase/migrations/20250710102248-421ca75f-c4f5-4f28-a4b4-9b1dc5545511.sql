-- Ajouter une colonne pour stocker l'accès aux modules Python
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS python_access_granted BOOLEAN DEFAULT FALSE;

-- Créer une table pour les codes d'accès validés par utilisateur
CREATE TABLE IF NOT EXISTS public.user_access_codes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    module_name TEXT NOT NULL,
    access_code TEXT NOT NULL,
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, module_name)
);

-- Activer RLS
ALTER TABLE public.user_access_codes ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs ne voient que leurs propres accès
CREATE POLICY "Users can view their own access codes" 
ON public.user_access_codes 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own access codes" 
ON public.user_access_codes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own access codes" 
ON public.user_access_codes 
FOR UPDATE 
USING (auth.uid() = user_id);