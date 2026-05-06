import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Languages, Globe, BookOpen, Calculator, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

type Formation = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  link: string;
  cta: string;
  featured?: boolean;
};

const formations: Formation[] = [
  {
    title: 'Maths ECG',
    icon: Calculator,
    description: 'Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.',
    features: ['20 chapitres progressifs', 'Exercices type concours', 'Méthodes et astuces de prépa'],
    link: '/formation/maths',
    cta: 'Découvrir la formation',
  },
  {
    title: 'Python ECG',
    icon: Code,
    description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.',
    features: ['54 commandes essentielles', 'Exercices type concours', '+3 à 5 points garantis'],
    link: '/formation',
    cta: 'Commencer le module',
    featured: true,
  },
  {
    title: 'Anglais ECG',
    icon: Languages,
    description: 'Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.',
    features: ['Grammaire systématique', 'Thèmes et versions', 'Essais et synthèses'],
    link: '/formation/anglais',
    cta: 'Voir la formation',
  },
  {
    title: 'Culture Générale',
    icon: BookOpen,
    description: "Développez votre culture générale avec méthodes et outils pour réussir les épreuves de synthèse et d'essai.",
    features: ['Méthodes de synthèse', 'Analyse de textes', "Épreuves d'essai"],
    link: '/formation/culture-generale',
    cta: 'Voir la formation',
  },
  {
    title: 'Géopolitique',
    icon: Globe,
    description: 'Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.',
    features: ['Enjeux contemporains', "Méthodes d'analyse", 'Actualité stratégique'],
    link: '/formation/geopolitique',
    cta: 'Voir la formation',
  },
  {
    title: 'ESH ECG',
    icon: GraduationCap,
    description: "Maîtrisez l'économie et les sciences humaines avec méthodes ciblées et études de cas pratiques.",
    features: ['Première et deuxième année', 'Méthodologie spécialisée', 'Études de cas concrètes'],
    link: '/formation/esh',
    cta: 'Voir la formation',
  },
  {
    title: 'Espagnol ECG',
    icon: Languages,
    description: 'Perfectionnez votre espagnol avec méthodes ciblées, grammaire avancée et préparation intensive aux concours.',
    features: ['Grammaire et conjugaison', 'Thèmes et versions', 'Expression écrite et orale'],
    link: '/formation/espagnol',
    cta: 'Voir la formation',
  },
  {
    title: 'Allemand ECG',
    icon: Languages,
    description: "Maîtrisez les déclinaisons, la grammaire complexe et les techniques d'expression écrite et orale.",
    features: ['Déclinaisons et cas', 'Structures complexes', 'Essais méthodiques'],
    link: '/formation/allemand',
    cta: 'Voir la formation',
  },
  {
    title: 'Synthèse de Texte ECG',
    icon: FileText,
    description: "Maîtrisez l'épreuve de synthèse de texte avec méthodes éprouvées, analyse de sujets et organisation annuelle complète.",
    features: ['Méthodologie détaillée 4h', 'Types de sujets économiques', 'Travail annuel structuré'],
    link: '/formation/synthese-texte',
    cta: 'Voir la formation',
  },
];

const FormationsOverviewPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="9 Formations Prépa ECG : Maths, Python, Langues, Géopolitique"
        description="Découvrez nos 9 formations spécialisées pour prépa ECG : Maths, Python, Anglais, Espagnol, Allemand, Géopolitique, ESH, Culture Générale, Synthèse de Texte. Méthodes éprouvées et exercices type concours."
        canonical="/formations"
      />

      {/* Trait orange signature en haut de page */}
      <div className="h-[3px] bg-pr-orange"></div>

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-pr-gray-light">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center font-dm-sans text-[11px] uppercase tracking-[0.08em] text-pr-gray-mid">
            <Link to="/" className="hover:text-pr-orange-dark transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-pr-gray-light">/</span>
            <span className="text-pr-black font-semibold">Toutes nos formations</span>
          </div>
        </div>
      </nav>

      {/* En-tête */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-pr-gray-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-5">
              9 formations spécialisées
            </span>
            <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl text-pr-black leading-[1.05] mb-5">
              Nos <em className="text-pr-orange not-italic">9 formations</em>
            </h1>
            <div className="flex justify-center mb-6">
              <div className="h-[2px] w-16 bg-pr-orange"></div>
            </div>
            <p className="font-dm-sans text-base sm:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-[1.7]">
              Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
            </p>
          </div>

          {/* Grille des 9 formations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <Link
                  key={formation.title}
                  to={formation.link}
                  className={`group relative rounded-xl p-7 border transition-all duration-300 overflow-hidden ${
                    formation.featured
                      ? 'bg-white border-pr-orange shadow-sm'
                      : 'bg-white border-pr-gray-light hover:border-pr-orange'
                  }`}
                >
                  {/* Trait orange top : permanent si featured, sinon hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-pr-orange transition-opacity duration-300 ${
                      formation.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  ></div>

                  {/* Badge featured */}
                  {formation.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="font-dm-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft px-2 py-1 rounded-full">
                        Populaire
                      </span>
                    </div>
                  )}

                  {/* Header de la carte : Numéro, Icône, Titre */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-dm-serif text-4xl text-pr-orange leading-none">{num}</span>
                      <div className="flex items-center gap-2">
                        <formation.icon className="h-4 w-4 text-pr-orange-dark" />
                        <h2 className="font-dm-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                          {formation.title}
                        </h2>
                      </div>
                    </div>
                    <div className="h-[2px] w-6 bg-pr-orange hidden sm:block"></div>
                  </div>

                  {/* Description */}
                  <p className="font-dm-sans text-[15px] text-pr-gray-dark leading-[1.65] mb-5">
                    {formation.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 pt-5 border-t border-pr-gray-light">
                    {formation.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-dm-sans text-[13px] text-pr-gray-dark"
                      >
                        <span className="text-pr-orange mt-0.5">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1 font-dm-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark group-hover:text-pr-orange transition-colors">
                    {formation.cta}{' '}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-pr-gray-light">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block font-dm-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-5">
            Besoin d'aide pour choisir ?
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black leading-[1.1] mb-5">
            Discutons de ton <em className="text-pr-orange not-italic">parcours</em>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-16 bg-pr-orange"></div>
          </div>
          <p className="font-dm-sans text-base sm:text-lg text-pr-gray-dark max-w-xl mx-auto leading-[1.7] mb-10">
            Premier cours offert. Diagnostic gratuit de ton niveau et conseil sur la formation la plus adaptée à tes objectifs.
          </p>
          <Link to="/contact">
            <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold py-6 px-8 rounded-full">
              Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FormationsOverviewPage;
