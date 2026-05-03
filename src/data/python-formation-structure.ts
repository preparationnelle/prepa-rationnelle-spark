import { Code, Calculator, TrendingUp, BarChart3, LucideIcon } from 'lucide-react';

export interface PythonChapter {
    id: string;
    title: string;
    type: 'cours' | 'exercice' | 'qcm' | 'flashcards';
    link: string;
    duration?: string; // e.g. "15 min"
}

export interface PythonModule {
    id: number; // 0, 1, 2...
    title: string;
    description: string;
    icon: LucideIcon;
    slug: string; // e.g. "fondamentaux"
    chapters: PythonChapter[];
    exerciseCount: number; // Number of exercises for weighted progress
}

export const pythonFormationStructure: PythonModule[] = [
    {
        id: 0,
        title: "Les Fondamentaux",
        description: "Bases essentielles : variables, types, opérateurs, fonctions et structures de contrôle.",
        icon: Code,
        slug: "fondamentaux",
        exerciseCount: 15, // 15 exercises in PythonFondamentauxExercicesPage
        chapters: [
            { id: "python-0-cours", title: "Cours Complet", type: 'cours', link: "/formation/python-fondamentaux" },
            { id: "python-0-qcm", title: "Quiz de validation", type: 'qcm', link: "/formation/python-fondamentaux-exercices?quiz=true" },
            { id: "python-0-exos", title: "Exercices d'application", type: 'exercice', link: "/formation/python-fondamentaux-exercices" },
            { id: "python-0-flashcards", title: "Flashcards", type: 'flashcards', link: "/python-flashcards" },
        ]
    },
    {
        id: 1,
        title: "Les Matrices NumPy",
        description: "Calcul scientifique avec NumPy : création, manipulation et analyse de matrices.",
        icon: Calculator,
        slug: "numpy",
        exerciseCount: 10, // Exercises in PythonMatricesExercicesPage
        chapters: [
            { id: "python-1-cours", title: "Cours Complet", type: 'cours', link: "/formation/python-matrices" },
            { id: "python-1-qcm", title: "Quiz de validation", type: 'qcm', link: "/formation/python-matrices-exercices?quiz=true" },
            { id: "python-1-exos", title: "Exercices d'application", type: 'exercice', link: "/formation/python-matrices-exercices" },
        ]
    },
    {
        id: 2,
        title: "Analyse Numérique",
        description: "Méthodes numériques : suites, approximation et visualisation des données.",
        icon: TrendingUp,
        slug: "analyse",
        exerciseCount: 10, // Exercises in PythonAnalyseExercicesPage
        chapters: [
            { id: "python-2-cours", title: "Cours Complet", type: 'cours', link: "/formation/python-analyse" },
            { id: "python-2-qcm", title: "Quiz de validation", type: 'qcm', link: "/formation/python-analyse-exercices?quiz=true" },
            { id: "python-2-exos", title: "Exercices d'application", type: 'exercice', link: "/formation/python-analyse-exercices" },
        ]
    },
    {
        id: 3,
        title: "Probabilités & Simulation",
        description: "Simulation Monte-Carlo et statistiques avec NumPy & Matplotlib.",
        icon: BarChart3,
        slug: "probas",
        exerciseCount: 10, // Exercises in PythonProbabilitesExercicesPage
        chapters: [
            { id: "python-3-cours", title: "Cours Complet", type: 'cours', link: "/formation/python-probabilites" },
            { id: "python-3-qcm", title: "Quiz de validation", type: 'qcm', link: "/formation/python-probabilites-exercices?quiz=true" },
            { id: "python-3-exos", title: "Exercices d'application", type: 'exercice', link: "/formation/python-probabilites-exercices" },
        ]
    }
];

export const getTotalPythonChapters = () => {
    return pythonFormationStructure.reduce((acc, module) => acc + module.chapters.length, 0);
};

export const getChapterById = (id: string) => {
    for (const module of pythonFormationStructure) {
        const chapter = module.chapters.find(c => c.id === id);
        if (chapter) return chapter;
    }
    return null;
};

export const getModuleExerciseCount = (moduleId: number): number => {
    const module = pythonFormationStructure.find(m => m.id === moduleId);
    return module?.exerciseCount ?? 0;
};

