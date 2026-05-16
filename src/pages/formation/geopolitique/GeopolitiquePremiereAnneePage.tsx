import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Ship,
  Anchor,
  Zap,
  Globe,
  Swords,
  Users,
  Crown,
  Layers,
  GraduationCap,
} from 'lucide-react';
import FormationLayout from '@/components/formation/shared/FormationLayout';
import FormationHero from '@/components/formation/shared/FormationHero';
import FormationSectionHeader from '@/components/formation/shared/FormationSectionHeader';
import FormationChapterListRow, {
  buildGeopoModuleActions,
} from '@/components/formation/shared/FormationChapterListRow';

const modules = [
  {
    id: 1,
    slug: 'espaces-maritimes',
    title: 'Les espaces maritimes',
    description:
      "Territorialisation, maritimisation de l'économie mondiale et nouveaux rapports de puissance.",
    icon: Ship,
  },
  {
    id: 2,
    slug: 'espaces-maritimes-tensions',
    title: 'Espaces maritimes — tensions et conflits',
    description: 'Puissance, conflits historiques, renouveau juridique et militarisation.',
    icon: Anchor,
  },
  {
    id: 3,
    slug: 'energies',
    title: 'Géopolitique des énergies',
    description: 'Dépendances, matières premières critiques et transition énergétique européenne.',
    icon: Zap,
  },
  {
    id: 4,
    slug: 'gouvernance-mondiale',
    title: 'Gouvernance mondiale',
    description: 'Institutions, limites, réussites et nouveaux défis de la régulation globale.',
    icon: Globe,
  },
  {
    id: 5,
    slug: 'guerres',
    title: 'Les guerres',
    description: 'Évolutions des formes de guerre, cyberconflits et résurgence des rivalités.',
    icon: Swords,
  },
  {
    id: 6,
    slug: 'migrations',
    title: 'Les migrations',
    description: 'Causes, gouvernance, effets contrastés et migrations climatiques/démographiques.',
    icon: Users,
  },
  {
    id: 7,
    slug: 'puissance',
    title: 'La puissance',
    description: 'Définitions, critères (hard/soft/smart/sharp), ressources et technologies.',
    icon: Crown,
  },
  {
    id: 8,
    slug: 'ressources-strategiques',
    title: 'Ressources stratégiques',
    description: 'Typologie, rivalités/coopérations, métaux rares et études de cas.',
    icon: Layers,
  },
];

const GeopolitiquePremiereAnneePage = () => {
  return (
    <FormationLayout
      seo={{
        title: 'Géopolitique · Première année ECG',
        description:
          'Programme complet de géopolitique 1ʳᵉ année ECG : 8 modules thématiques (espaces maritimes, énergies, gouvernance, guerres, migrations, puissance, ressources stratégiques) avec cours, chronologies et flashcards.',
        canonical: '/formation/geopolitique/premiere-annee',
      }}
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'Géopolitique', to: '/formation/geopolitique' },
        { label: 'Première année' },
      ]}
    >
      <FormationHero
        eyebrow="Géopolitique · Première année ECG"
        Icon={BookOpen}
        title="Première"
        titleAccent="année."
        subtitle={
          <>
            8 modules thématiques pour bâtir vos <span className="carnet-hl font-lora italic">fondamentaux</span> en géopolitique : maritimes, énergies, puissance, guerres, migrations, gouvernance, ressources stratégiques.
          </>
        }
        tags={[
          { label: '1ʳᵉ année ECG', icon: GraduationCap },
          { label: '8 modules thématiques', variant: 'outline' },
        ]}
        annotation="↓ programme par module"
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormationSectionHeader
              number={1}
              title="Modules thématiques"
              description="Chaque module : cours synthétique, chronologie associée et flashcards de révision."
            />

            <div className="space-y-4">
              {modules.map((m, idx) => {
                const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
                return (
                  <motion.div
                    key={m.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                    className={tilt}
                  >
                    <FormationChapterListRow
                      number={m.id}
                      title={m.title}
                      description={m.description}
                      Icon={m.icon}
                      actions={buildGeopoModuleActions(m.slug)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </FormationLayout>
  );
};

export default GeopolitiquePremiereAnneePage;
