import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Languages, Globe, Users, ArrowRight } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const formations = [
  {
    to: '/pourquoi-python-prepa-ecg',
    Icon: Code,
    title: 'Python ECG',
    description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices et coaching.',
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
    to: '/formation/allemand',
    Icon: Languages,
    title: 'Allemand ECG',
    description: 'Déclinaisons, grammaire complexe et techniques d’expression écrite et orale.',
    bullets: ['Déclinaisons et cas', 'Structures complexes', 'Essais méthodiques'],
  },
  {
    to: '/formation/geopolitique',
    Icon: Globe,
    title: 'Géopolitique',
    description: 'Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.',
    bullets: ['Enjeux contemporains', 'Méthodes d’analyse', 'Actualité stratégique'],
  },
];

const FormationOverviewPage = () => {
  return (
    <PRFormationLayout
      eyebrow="Prépa Rationnelle · Formations"
      title="Vue d’ensemble"
      titleAccent="des formations"
      subtitle="Découvrez toutes nos formations spécialisées pour maximiser vos chances aux concours des écoles de commerce."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {formations.map((f, idx) => (
          <PRHubCard key={f.to} number={idx + 1} {...f} />
        ))}
      </div>

      <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-3">
            Préparation aux entretiens
          </p>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
            Entretiens de personnalité
          </h2>
          <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-5" />
          <p className="text-base text-pr-gray-dark/80 mb-8">
            Méthodologie, outils de préparation, et fiches écoles détaillées pour réussir vos entretiens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left sm:text-center">
            {[
              { value: '9', label: 'Écoles détaillées' },
              { value: '8', label: 'Modules méthodologie' },
              { value: '∞', label: 'Questions générées IA' },
            ].map((s) => (
              <div key={s.label} className="flex sm:flex-col items-center sm:items-center justify-center gap-2 sm:gap-1">
                <span className="font-dm-serif text-3xl text-pr-orange">{s.value}</span>
                <span className="text-sm text-pr-gray-dark">{s.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/methodologie/entretiens-personnalite"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <Users className="h-4 w-4" />
            <span>Voir la formation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mt-16 text-center">
        <h3 className="font-dm-serif text-2xl text-pr-black mb-3">Prêt à commencer ta préparation ?</h3>
        <p className="text-pr-gray-dark/80 mb-6">
          Rejoins des milliers d’étudiants qui maximisent leurs chances de réussite.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-colors"
          >
            Commencer gratuitement
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange text-pr-black font-semibold text-sm transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default FormationOverviewPage;
