import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Server } from 'lucide-react';

const formations = [
  { label: 'Python ECG', to: '/formations' },
  { label: 'Anglais ECG', to: '/formations' },
  { label: 'Espagnol ECG', to: '/formations' },
  { label: 'Allemand ECG', to: '/formations' },
  { label: 'Géopolitique', to: '/formations' },
  { label: 'ESH ECG', to: '/formations' },
  { label: 'Mathématiques', to: '/formations' },
];

const offres = [
  { label: 'Cours gratuit', to: '/offre/gratuite' },
  { label: 'Coaching Maths', to: '/offre/coaching-maths' },
  { label: 'Coaching Python', to: '/offre/coaching-python' },
  { label: 'Organisation Été', to: '/offre/organisation-ete' },
  { label: 'Préparation CUBE', to: '/offre/preparation-cube' },
];

const liens = [
  { label: 'Toutes nos formations', to: '/formations' },
  { label: 'Contact', to: '/contact' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Articles & Conseils', to: '/articles' },
  { label: 'Avis Superprof', to: '/avis' },
  { label: 'Conseils en vidéo', to: '/conseils-videos' },
];

const legales = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-confidentialite' },
  { label: "Conditions générales d'utilisation", to: '/cgu' },
  { label: 'Conditions générales de vente', to: '/cgv' },
];

const columnTitleClass =
  'font-dm-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-pr-orange mb-4';

const linkClass =
  'font-dm-sans text-sm text-white/80 hover:text-pr-orange transition-colors duration-200';

type LinkItem = { label: string; to: string };

const Column = ({ title, items }: { title: string; items: LinkItem[] }) => (
  <div>
    <h4 className={columnTitleClass}>{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className={linkClass}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-pr-black border-t-[3px] border-pr-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA — cours gratuit */}
        <div className="py-12 text-center border-b border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-pr-orange-pale text-pr-orange-dark font-dm-sans text-[10px] font-semibold uppercase tracking-[0.08em] mb-5">
            Offre étudiants ECG
          </span>
          <h3 className="font-dm-serif text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-snug mb-6">
            Un cours gratuit pour chaque suggestion utile sur le site.
          </h3>
          <p className="font-dm-sans text-sm text-white/70 max-w-2xl mx-auto mb-7 leading-relaxed">
            Tu es en prépa ECG&nbsp;? Aide-nous à améliorer la plateforme et reçois ta première séance offerte.
          </p>
          <a
            href="https://calendly.com/preparationnelle/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-3 rounded-md font-dm-sans font-semibold text-sm transition-colors duration-200"
          >
            <Calendar className="h-4 w-4" />
            Réserver mon premier cours gratuit
          </a>
        </div>

        {/* Colonnes de liens */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Column title="Nos formations" items={formations} />
          <Column title="Offres spéciales" items={offres} />
          <Column title="Liens utiles" items={liens} />
          <Column title="Informations légales" items={legales} />
        </div>

        {/* Pied de page : marque + copyright + hébergeur */}
        <div className="py-7 border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-dm-sans text-pr-orange font-semibold uppercase tracking-[0.12em] text-sm">
              Prépa Rationnelle
            </span>
            <span className="hidden md:inline-block w-6 h-px bg-pr-orange" />
            <span className="font-dm-sans text-xs text-white/50">
              © 2025 — Tous droits réservés
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-dm-sans text-xs text-white/50">
            <Server className="h-3 w-3" />
            <span>Hébergeur&nbsp;: Vercel Inc. —</span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pr-orange transition-colors"
            >
              vercel.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
