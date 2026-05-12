import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type ArticleItem = {
  number: number;
  title: string;
  description: string;
  route: string;
};

const articles: ArticleItem[] = [
  {
    number: 1,
    title: 'Définir l\'humanité — entre essence et indétermination',
    description: 'Aristote, Pic de la Mirandole, Sartre : qu\'est-ce qui fait de nous des humains ?',
    route: '/formation/culture-generale/articles/definir-humanite',
  },
  {
    number: 2,
    title: 'L\'inhumain au cœur de l\'humain',
    description: 'Banalité du mal, zone grise, soumission à l\'autorité : Arendt, Levi, Milgram.',
    route: '/formation/culture-generale/articles/inhumain-coeur-humain',
  },
  {
    number: 3,
    title: 'L\'humanité face à la technique',
    description: 'Heidegger, Anders, transhumanisme : promesse d\'augmentation ou perte de soi ?',
    route: '/formation/culture-generale/articles/humanite-face-technique',
  },
  {
    number: 4,
    title: 'L\'humain et l\'animal — où passe la frontière ?',
    description: 'Descartes, Montaigne, Derrida : tracer ou effacer la ligne qui sépare l\'humain de la bête.',
    route: '/formation/culture-generale/articles/humain-animal',
  },
  {
    number: 5,
    title: 'La dignité humaine',
    description: 'Kant, 1948, Habermas : du concept moral au principe juridique inviolable.',
    route: '/formation/culture-generale/articles/dignite-humaine',
  },
  {
    number: 6,
    title: 'L\'altérité et la rencontre de l\'autre',
    description: 'Lévi-Strauss, Todorov, Levinas : l\'humanité au miroir de l\'étranger.',
    route: '/formation/culture-generale/articles/alterite-autre',
  },
  {
    number: 7,
    title: 'La perfectibilité et l\'idée de progrès',
    description: 'Rousseau, Kant, Condorcet : l\'humain est-il un être en devenir ?',
    route: '/formation/culture-generale/articles/perfectibilite-progres',
  },
  {
    number: 8,
    title: 'L\'humanité face à la nature — l\'anthropocène',
    description: 'Jonas, Descola, Latour : sortir du grand partage moderne nature/culture.',
    route: '/formation/culture-generale/articles/humanite-nature-anthropocene',
  },
  {
    number: 9,
    title: 'Le corps humain',
    description: 'Mauss, Merleau-Ponty, Foucault : objet biologique, sujet vécu, construction sociale.',
    route: '/formation/culture-generale/articles/corps-humain',
  },
  {
    number: 10,
    title: 'L\'humain et le langage',
    description: 'Saussure, Benveniste, Wittgenstein : un être qui parle, ou un être parlé ?',
    route: '/formation/culture-generale/articles/humain-langage',
  },
  {
    number: 11,
    title: 'L\'humain face à la mort',
    description: 'Épicure, Heidegger, Jankélévitch : la mortalité comme épreuve de l\'humanité.',
    route: '/formation/culture-generale/articles/humain-mort',
  },
  {
    number: 12,
    title: 'L\'humanisme et ses critiques',
    description: 'Renaissance, Nietzsche, Foucault : naissance, apogée, déconstruction.',
    route: '/formation/culture-generale/articles/humanisme-critiques',
  },
  {
    number: 13,
    title: 'Devenir humain — éducation et culture',
    description: 'Rousseau, Kant, Arendt : l\'humanité ne se donne pas, elle se transmet.',
    route: '/formation/culture-generale/articles/devenir-humain-education',
  },
];

const ArticlesCultureGeneralePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Articles
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight mb-5">
              Articles
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Fiches et analyses thématiques sur <em>l&apos;humanité</em>. Sélectionnez une fiche pour la découvrir.
            </p>
          </div>

          <div className="space-y-5">
            {articles.map((a) => {
              const isActive = a.route !== '#';
              const Wrapper: React.ElementType = isActive ? Link : 'div';
              const wrapperProps = isActive ? { to: a.route } : {};

              return (
                <Wrapper
                  key={a.number}
                  {...wrapperProps}
                  className="block group"
                >
                  <article className="relative bg-white rounded-2xl p-6 md:p-7 border border-pr-gray-light hover:border-pr-black hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-black opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="flex items-start gap-5 md:w-2/3">
                        <span className="font-dm-serif text-pr-black text-5xl leading-none flex-shrink-0 w-14">
                          {String(a.number).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-dm-serif text-xl md:text-2xl text-pr-black leading-tight mb-2">
                            {a.title}
                          </h3>
                          <p className="text-sm text-pr-gray-dark leading-relaxed">
                            {a.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:ml-auto md:w-auto md:pl-4">
                        <Button
                          className="bg-pr-black hover:bg-pr-black-dark text-white px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]"
                          disabled={!isActive}
                        >
                          Découvrir la fiche →
                        </Button>
                      </div>
                    </div>
                  </article>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesCultureGeneralePage;
