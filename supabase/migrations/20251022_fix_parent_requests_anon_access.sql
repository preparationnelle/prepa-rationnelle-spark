-- Migration pour permettre aux utilisateurs anonymes de soumettre le formulaire
-- et rendre le téléphone optionnel

-- 1. Supprimer l'ancienne politique qui nécessitait l'authentification
DROP POLICY IF EXISTS "Allow authenticated users to insert parent requests" ON parent_requests;

-- 2. Créer une nouvelle politique qui permet aux utilisateurs anonymes ET authentifiés de soumettre
CREATE POLICY "Allow anyone to insert parent requests" ON parent_requests
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

-- 3. Rendre le champ requester_phone optionnel (pas obligatoire)
ALTER TABLE parent_requests 
ALTER COLUMN requester_phone DROP NOT NULL;

-- 4. S'assurer que la politique de lecture existe pour les utilisateurs authentifiés
-- (pour voir les formulaires dans le dashboard admin)
DROP POLICY IF EXISTS "Allow authenticated users to read parent requests" ON parent_requests;

CREATE POLICY "Allow authenticated users to read parent requests" ON parent_requests
    FOR SELECT TO authenticated
    USING (true);

-- 5. S'assurer que la politique de mise à jour existe pour les admins
DROP POLICY IF EXISTS "Allow authenticated users to update parent requests" ON parent_requests;

CREATE POLICY "Allow authenticated users to update parent requests" ON parent_requests
    FOR UPDATE TO authenticated
    USING (true)
    WITH CHECK (true);

