import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Building2,
  TreePine,
  Sun,
  Flag,
  Mountain,
  Compass,
  GraduationCap,
} from 'lucide-react';
import FormationLayout from '@/components/formation/shared/FormationLayout';
import FormationHero from '@/components/formation/shared/FormationHero';
import FormationSectionHeader from '@/components/formation/shared/FormationSectionHeader';
import FormationChapterListRow, {
  buildGeopoRegionActions,
} from '@/components/formation/shared/FormationChapterListRow';

const regions = [
  {
    id: 1,
    slug: 'union-europeenne',
    title: 'Union européenne',
    description: 'Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.',
    icon: Building2,
    overrides: { chronologie: '/formation/geopolitique/chronologie-europe' },
  },
  {
    id: 2,
    slug: 'continent-africain',
    title: 'Continent africain',
    description: "États, territoires, cultures, développement et enjeux géopolitiques de l'Afrique contemporaine.",
    icon: TreePine,
  },
  {
    id: 3,
    slug: 'proche-moyen-orient',
    title: 'Proche et Moyen-Orient',
    description: "États, territoires, cultures et géopolitique d'une région au cœur des enjeux mondiaux.",
    icon: Sun,
  },
  {
    id: 4,
    slug: 'amerique-nord',
    title: 'Amérique du Nord',
    description: 'États-Unis, Canada, Mexique : société, politique et puissance dans un espace intégré.',
    icon: Flag,
  },
  {
    id: 5,
    slug: 'amerique-latine',
    title: 'Amérique latine',
    description: 'Émergences, crises, intégrations régionales et géopolitique du sous-continent latino-américain.',
    icon: Mountain,
  },
  {
    id: 6,
    slug: 'asie',
    title: 'Asie',
    description: "Géopolitique d'une région multipolaire : Chine, Inde, puissances émergentes et mondialisation asiatique.",
    icon: Compass,
  },
];

const GeopolitiqueDeuxiemeAnneePage = () => {
  return (
    <FormationLayout
      seo={{
        title: 'Géopolitique · Deuxième année ECG',
        description:
          'Programme complet de géopolitique 2ᵉ année ECG : 6 aires régionales (UE, Afrique, Proche-Moyen-Orient, Amérique du Nord, Amérique latine, Asie) avec cours, chronologies, flashcards, études de cas et auteurs.',
        canonical: '/formation/geopolitique/deuxieme-annee',
      }}
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'Géopolitique', to: '/formation/geopolitique' },
        { label: 'Deuxième année' },
      ]}
    >
      <FormationHero
        eyebrow="Géopolitique · Deuxième année ECG"
        Icon={Globe}
        title="Deuxième"
        titleAccent="année."
        subtitle={
          <>
            6 aires régionales pour analyser les <span className="carnet-hl font-lora italic">géodynamiques contemporaines</span> : UE, Afrique, Proche et Moyen-Orient, Amérique du Nord, Amérique latine, Asie.
          </>
        }
        tags={[
          { label: '2ᵉ année ECG', icon: GraduationCap },
          { label: '6 aires régionales', variant: 'outline' },
        ]}
        annotation="↓ aires régionales"
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <FormationSectionHeader
              number={1}
              title="Aires régionales"
              description="Pour chaque région : cours, chronologie, flashcards, études de cas et auteurs de référence."
            />

            <div className="space-y-4">
              {regions.map((r, idx) => {
                const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
                return (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                    className={tilt}
                  >
                    <FormationChapterListRow
                      number={r.id}
                      title={r.title}
                      description={r.description}
                      Icon={r.icon}
                      actions={buildGeopoRegionActions(r.slug, r.overrides)}
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

export default GeopolitiqueDeuxiemeAnneePage;
