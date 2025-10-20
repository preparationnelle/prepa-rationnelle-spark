export interface ParentRequest {
  id: string;
  created_at: string;
  requester_first_name: string;
  requester_last_name: string;
  requester_email: string;
  requester_phone: string;
  is_for_self: boolean;
  student_first_name?: string;
  student_last_name?: string;
  student_phone?: string;
  student_email?: string;
  relationship?: string;
  student_level: string;
  subject: string;
  needs_description: string;
  action_choice: 'call' | 'choose_teacher';
  status: 'pending' | 'processing' | 'completed';
}

export interface TeacherApplication {
  id: string;
  created_at: string;
  teacher_name: string;
  teacher_email: string;
  teacher_phone: string;
  subjects: string[]; // Changé pour accepter plusieurs matières
  background_description: string; // Ajout du champ description de parcours
  availability_schedule: string;
  hours_per_week: number;
  hourly_rate: number;
  status: 'pending' | 'approved' | 'rejected';
}

// Types pour les formulaires
export interface ParentRequestForm {
  requester_first_name: string;
  requester_last_name: string;
  requester_email: string;
  requester_phone: string;
  is_for_self: boolean;
  student_first_name: string;
  student_last_name: string;
  student_phone: string;
  student_email: string;
  relationship: string;
  student_level: string;
  subject: string;
  needs_description: string;
  action_choice: 'call' | 'choose_teacher';
}

export interface TeacherApplicationForm {
  teacher_name: string;
  teacher_email: string;
  teacher_phone: string;
  subjects: string[]; // Changé pour accepter plusieurs matières
  background_description: string; // Ajout du champ description de parcours
  availability_schedule: string;
  hours_per_week: number;
  hourly_rate: number;
}

// Options pour les selects
export const STUDENT_LEVELS = [
  '1re année ECG',
  '2e année ECG', 
  'Cube',
  'Terminale'
] as const;

export const SUBJECTS = [
  'Maths',
  'Python',
  'Anglais',
  'Espagnol',
  'Allemand',
  'Géopolitique',
  'ESH'
] as const;

export const RELATIONSHIPS = [
  'Parent',
  'Professeur',
  'Autre'
] as const;
