import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { englishGrammarFlashcards } from '@/data/englishGrammarFlashcardsData';

// Map slugs to chapter numbers and titles (reusing the logic/data if possible, or re-declaring for safety)
// Ideally this should be centralized, but for now we mirror what's in EnglishQuizPage or creates a localized map.

const chapterMetadata: Record<string, { title: string; number: number; description: string }> = {
    'temps-verbaux': { title: "Temps Verbaux", number: 1, description: "Maîtrisez tous les temps verbaux anglais essentiels pour les concours" },
    'conditionnels': { title: "Conditionnels", number: 2, description: "Les structures conditionnelles et leur utilisation en contexte" },
    'voix-passives': { title: "Voix Passives", number: 3, description: "Formation et utilisation des voix passives en anglais" },
    'discours-indirect': { title: "Discours Indirect", number: 4, description: "Transformation du discours direct en discours indirect" },
    'modaux': { title: "Modaux et Auxiliaires", number: 5, description: "Maîtrisez can, could, may, might, must, should... et leurs nuances" },
    'prepositions': { title: "Prépositions et Particules", number: 6, description: "Emploi des prépositions et phrasal verbs essentiels" },
    'articles': { title: "Articles et Déterminants", number: 7, description: "Usage des articles a/an/the et déterminants" },
    'relatives': { title: "Subordonnées Relatives", number: 8, description: "Propositions relatives avec who, which, that, whose..." },
    'gerondif-infinitif': { title: "Gérondif et Infinitif", number: 9, description: "Quand utiliser -ing ou to + infinitif" },
    'comparatifs': { title: "Comparatifs et Superlatifs", number: 10, description: "Formation et usage des degrés de comparaison" },
    'questions': { title: "Questions et Interrogatifs", number: 11, description: "Formation des questions avec who, what, where..." },
    'expressions-temps': { title: "Expressions de Temps", number: 12, description: "Since, for, ago, already, yet, still, just..." },
    'concordance': { title: "Concordance des Temps", number: 13, description: "Règles de concordance dans les subordonnées" },
    'quantifieurs': { title: "Quantifieurs", number: 14, description: "Much, many, little, few, a lot of..." },
    'subjunctif': { title: "Subjunctif et Structures Subjectives", number: 15, description: "I suggest that he be, If I were you..." },
    'inversions': { title: "Inversions et Emphase", number: 16, description: "Never have I seen, So beautiful was she..." },
    'connecteurs': { title: "Connecteurs Logiques", number: 17, description: "However, therefore, nevertheless, furthermore..." },
    'verbes-irreguliers': { title: "Verbes Irréguliers", number: 18, description: "Liste et usage des verbes irréguliers" },
    'causatives': { title: "Structures Causatives", number: 19, description: "Make/Have/Get someone do/to do something" },
    'nuances-lexicales': { title: "Nuances Lexicales", number: 20, description: "Say vs Tell, Make vs Do, Rise vs Raise..." }
};

const EnglishFlashcardsPage = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    // Expected path: /formation/anglais/grammaire/SLUG/flashcards
    const slug = pathParts[4];

    const metadata = chapterMetadata[slug];
    const flashcards = englishGrammarFlashcards[slug];

    if (!metadata) {
        return <Navigate to="/formation/anglais/grammaire" replace />;
    }

    return (
        <MathChapterTemplate
            chapterTitle={metadata.title}
            chapterNumber={metadata.number}
            description={metadata.description}
            slug={slug}
            subject="anglais/grammaire"
            activeSection="flashcards"
            previousChapter={metadata.number > 1 ? { slug: 'precedent', title: 'Précédent' } : undefined}
            nextChapter={metadata.number < 20 ? { slug: 'suivant', title: 'Suivant' } : undefined}
        >
            <div className="py-8">
                <MathFlashcards
                    flashcards={flashcards || []}
                    title={`Flashcards - ${metadata.title}`}
                    chapterNumber={metadata.number}
                />
            </div>
        </MathChapterTemplate>
    );
};

export default EnglishFlashcardsPage;
