-- Migration pour le système Parent-Professeur-Gestion
-- Création des tables pour gérer les demandes des parents et candidatures des professeurs

-- Table pour les demandes des parents
CREATE TABLE parent_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    requester_first_name TEXT NOT NULL,
    requester_last_name TEXT NOT NULL,
    requester_email TEXT NOT NULL,
    requester_phone TEXT NOT NULL,
    is_for_self BOOLEAN NOT NULL DEFAULT false,
    student_first_name TEXT,
    student_last_name TEXT,
    student_phone TEXT,
    student_email TEXT,
    relationship TEXT CHECK (relationship IN ('Parent', 'Professeur', 'Autre')),
    student_level TEXT NOT NULL, -- "1re année ECG", "2e année ECG", "Cube", "Terminale"
    subject TEXT NOT NULL, -- matière d'aide
    needs_description TEXT NOT NULL, -- description des besoins
    action_choice TEXT NOT NULL CHECK (action_choice IN ('call', 'choose_teacher')), -- "call" ou "choose_teacher"
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed'))
);

-- Table pour les candidatures des professeurs
CREATE TABLE teacher_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    teacher_name TEXT NOT NULL,
    teacher_email TEXT NOT NULL,
    teacher_phone TEXT NOT NULL,
    subjects TEXT[] NOT NULL, -- matières enseignées (array)
    background_description TEXT NOT NULL, -- description du parcours
    availability_schedule TEXT NOT NULL, -- créneaux horaires
    hours_per_week INTEGER NOT NULL CHECK (hours_per_week > 0),
    hourly_rate NUMERIC(10,2) NOT NULL CHECK (hourly_rate > 0),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'))
);

-- Index pour améliorer les performances des requêtes
CREATE INDEX idx_parent_requests_created_at ON parent_requests(created_at DESC);
CREATE INDEX idx_parent_requests_status ON parent_requests(status);
CREATE INDEX idx_teacher_applications_created_at ON teacher_applications(created_at DESC);
CREATE INDEX idx_teacher_applications_status ON teacher_applications(status);

-- RLS (Row Level Security) - pour l'instant, on permet l'accès à tous les utilisateurs authentifiés
-- À ajuster selon les besoins de sécurité
ALTER TABLE parent_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_applications ENABLE ROW LEVEL SECURITY;

-- Politiques RLS basiques (à affiner selon les besoins)
CREATE POLICY "Allow authenticated users to insert parent requests" ON parent_requests
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to insert teacher applications" ON teacher_applications
    FOR INSERT TO authenticated
    WITH CHECK (true);

-- Politiques pour la lecture (pour la page de gestion)
-- À restreindre selon les rôles utilisateur
CREATE POLICY "Allow authenticated users to read parent requests" ON parent_requests
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to read teacher applications" ON teacher_applications
    FOR SELECT TO authenticated
    USING (true);

-- Politiques pour la mise à jour (pour la page de gestion)
CREATE POLICY "Allow authenticated users to update parent requests" ON parent_requests
    FOR UPDATE TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to update teacher applications" ON teacher_applications
    FOR UPDATE TO authenticated
    USING (true);
