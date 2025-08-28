import { LucideIcon } from 'lucide-react';

export interface ChapterData {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description?: string;
}

export interface SemesterData {
  title: string;
  description: string;
  chapters: ChapterData[];
}

export interface MathsAppliqueesData {
  semestre1: SemesterData;
  semestre2: SemesterData;
}

export type ChapterType = 'cours' | 'exercices' | 'quiz';

export interface ChapterPageProps {
  chapterNumber: number;
  chapterTitle: string;
  chapterSlug: string;
  type: ChapterType;
}

// Constantes spécifiques à Maths Appliquées
export const MATHS_APPLIQUEES_COLORS = {
  primary: 'bg-green-600',
  secondary: 'bg-green-700',
  light: 'bg-green-50',
  border: 'border-green-200',
  text: 'text-green-600',
  textLight: 'text-green-700'
} as const;

export const MATHS_APPLIQUEES_PATHS = {
  main: '/formation/maths-appliquees',
  choix: '/formation/maths-choix'
} as const;
