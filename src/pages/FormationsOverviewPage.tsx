import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Languages, Globe, BookOpen, Calculator, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const formations = [
  {
    to: '/formation/maths',
    Icon: Calculator,
    title: 'Maths ECG',
    description: 'Tout le programme de maths : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes.',
    bullets: ['20 chapitres progressifs', 'Exercices type concours', 'Méthodes et astuces de prépa'],
    cta: 'Découvrir la formation',
  },
  {
    to: '/formation',
    Icon: Code,
    title: 'Python ECG',
    description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices et coaching personnalisé.',
    bullets: ['54 commandes essentielles', 'Exercices type concours', '+3 à 5 points garantis'],
    cta: 'Commencer le module',
  },
  {
    to: '/formation/anglais',
    Icon: Languages,
    title: 'Anglais ECG',
    description: 'Méthodes ciblées, grammaire avancée et préparation aux épreuves.',
    bullets: ['Grammaire systématique', 'Thèmes et versions', 'Essais et synthèses'],
  },
  {
    to: '/formation/culture-generale',
    Icon: BookOpen,
    title: 'Culture générale',
    description: 'Méthodes et outils pour réussir les épreuves de synthèse et d’essai.',
    bullets: ['Méthodes de synthèse', 'Analyse de textes', 'Épreuves d’essai'],
  },
  {
    to: '/formation/geopolitique',
    Icon: Globe,
    title: 'Géopolitique',
    description: 'Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.',
    bullets: ['Enjeux contemporains', 'Méthodes d’analyse', 'Actualité stratégique'],
  },
  {
    to: '/formation/esh',
    Icon: GraduationCap,
    title: 'ESH ECG',
    description: 'Économie et sciences humaines avec méthodes ciblées et études de cas pratiques.',
    bullets: ['Première et deuxième année', 'Méthodologie spécialisée', 'Études de cas concrètes'],
  },
  {
    to: '/formation/espagnol',
    Icon: Languages,
    title: 'Espagnol ECG',
    description: 'Méthodes ciblées, grammaire avancée et préparation intensive aux concours.',
    bullets: ['Grammaire et conjugaison', 'Thèmes et versions', 'Expression écrite et orale'],
  },
  {
    to: '/formation/allemand',
    Icon: Languages,
    title: 'Allemand ECG',
    description: 'Déclinaisons, grammaire complexe et techniques d’expression écrite et orale.',
    bullets: ['Déclinaisons et cas', 'Structures complexes', 'Essais méthodiques'],
  },
  {
    to: '/formation/synthese-texte',
    Icon: FileText,
    title: 'Synthèse de texte ECG',
    description: 'Méthodes éprouvées, analyse de sujets et organisation annuelle complète.',
    bullets: ['Méthodologie détaillée 4h', 'Types de sujets économiques', 'Travail annuel structuré'],
  },
];

const FormationsOverviewPage = () => {
  return (
    <>
      <SEOHead
        title="9 Formations Prépa ECG : Maths, Python, Langues, Géopolitique"
        description="Découvrez nos 9 formations spécialisées pour prépa ECG : Maths, Python, Anglais, Espagnol, Allemand, Géopolitique, ESH, Culture Générale, Synthèse de Texte. Méthodes éprouvées et exercices type concours."
        canonical="/formations"
      />
      <PRFormationLayout
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Toutes nos formations' },
        ]}
        eyebrow="Prépa Rationnelle · Formations"
        title="Nos"
        titleAccent="9 formations"
        subtitle="Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé."
        tags={[
          { label: 'Prépa ECG' },
          { label: '9 disciplines' },
          { label: 'Cours particuliers', highlight: true },
        ]}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {formations.map((f, idx) => (
            <PRHubCard key={f.to} number={idx + 1} {...f} />
          ))}
        </div>

        <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-3">
            Besoin d’aide pour choisir ?
          </p>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
            Discutons de ton{' '}
            <span className="text-pr-orange">parcours</span>
          </h2>
          <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-5" />
          <p className="text-base text-pr-gray-dark/80 max-w-xl mx-auto mb-8">
            Premier cours offert. Diagnostic gratuit de ton niveau et conseil sur la formation la plus adaptée à tes objectifs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(244,132,95,0.25)]"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </PRFormationLayout>
    </>
  );
};

export default FormationsOverviewPage;
