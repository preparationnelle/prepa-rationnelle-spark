import React from 'react';
import { Languages } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRChapterRow } from '@/components/formation/PRChapterRow';

const FormationAnglaisGrammairePage = () => {
  const chapters = [
    { slug: 'temps-verbaux', title: 'Temps Verbaux', description: 'Maîtrisez tous les temps verbaux anglais essentiels pour les concours.' },
    { slug: 'conditionnels', title: 'Conditionnels', description: 'Les structures conditionnelles et leur utilisation en contexte.' },
    { slug: 'voix-passives', title: 'Voix Passives', description: 'Formation et utilisation des voix passives en anglais.' },
    { slug: 'discours-indirect', title: 'Discours Indirect', description: 'Transformation du discours direct en discours indirect.' },
    { slug: 'modaux', title: 'Modaux et Auxiliaires', description: 'Maîtrisez can, could, may, might, must, should, will, would et leurs nuances.' },
    { slug: 'prepositions', title: 'Prépositions et Particules', description: 'Emploi des prépositions et phrasal verbs essentiels.' },
    { slug: 'articles', title: 'Articles et Déterminants', description: 'Usage des articles a/an/the et déterminants some, any, much, many.' },
    { slug: 'relatives', title: 'Subordonnées Relatives', description: 'Propositions relatives avec who, which, that, whose, where, when.' },
    { slug: 'gerondif-infinitif', title: 'Gérondif et Infinitif', description: "Quand utiliser -ing ou to + infinitif selon les verbes et contextes." },
    { slug: 'comparatifs', title: 'Comparatifs et Superlatifs', description: 'Formation et usage des degrés de comparaison en anglais.' },
    { slug: 'questions', title: 'Questions et Interrogatifs', description: 'Formation des questions avec who, what, where, when, why, how.' },
    { slug: 'expressions-temps', title: 'Expressions de Temps', description: 'Since, for, ago, already, yet, still, just et autres marqueurs temporels.' },
    { slug: 'concordance', title: 'Concordance des Temps', description: 'Règles de concordance dans les subordonnées et le discours indirect.' },
    { slug: 'quantifieurs', title: 'Quantifieurs', description: 'Much, many, little, few, a lot of, plenty of et expressions de quantité.' },
    { slug: 'subjunctif', title: 'Subjunctif et Structures Subjectives', description: 'I suggest that he be, If I were you, et structures hypothétiques.' },
    { slug: 'inversions', title: 'Inversions et Emphase', description: 'Never have I seen, So beautiful was she, structures emphatiques.' },
    { slug: 'connecteurs', title: 'Connecteurs Logiques', description: 'However, therefore, nevertheless, furthermore pour structurer vos idées.' },
    { slug: 'verbes-irreguliers', title: 'Verbes Irréguliers', description: 'Liste complète des verbes irréguliers essentiels avec exercices.' },
    { slug: 'causatives', title: 'Structures Causatives', description: 'Have something done, get someone to do, make/let structures.' },
    { slug: 'nuances-lexicales', title: 'Nuances Lexicales', description: 'Confusions fréquentes : affect/effect, advice/advise, complement/compliment.' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Grammaire' },
      ]}
      badge="Grammaire · ECG"
      title="Grammaire"
      titleAccent="Anglaise"
      subtitle="Formation complète de grammaire anglaise pour maîtriser les épreuves des concours des Grandes Écoles de Commerce."
      Icon={Languages}
    >
      <div className="space-y-4 max-w-4xl mx-auto">
        {chapters.map((c, i) => {
          const base = `/formation/anglais/grammaire/${c.slug}`;
          return (
            <PRChapterRow
              key={c.slug}
              number={i + 1}
              to={base}
              title={c.title}
              description={c.description}
              actions={[
                { label: 'Exercices', to: `${base}/exercices` },
                { label: 'Quiz', to: `${base}/quiz` },
                { label: 'Flashcards', to: `${base}/flashcards` },
              ]}
            />
          );
        })}
      </div>
    </PRFormationLayout>
  );
};

export default FormationAnglaisGrammairePage;
