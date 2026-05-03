import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  parapersosHumanite,
  getParapersoBySlug,
} from '@/data/parapersosHumanite';

const ParapersoDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const paraperso = getParapersoBySlug(slug);

  if (!paraperso) {
    return <Navigate to="/formation/culture-generale/references" replace />;
  }

  const currentIndex = parapersosHumanite.findIndex(
    (p) => p.slug === paraperso.slug
  );
  const previous =
    currentIndex > 0 ? parapersosHumanite[currentIndex - 1] : undefined;
  const next =
    currentIndex < parapersosHumanite.length - 1
      ? parapersosHumanite[currentIndex + 1]
      : undefined;

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Fil d'Ariane */}
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.12em] text-pr-gray-dark">
            <Link
              to="/formation/culture-generale"
              className="hover:text-pr-orange transition-colors"
            >
              Culture générale
            </Link>
            <span className="mx-2 text-pr-gray-light">/</span>
            <Link
              to="/formation/culture-generale/references"
              className="hover:text-pr-orange transition-colors"
            >
              Références
            </Link>
            <span className="mx-2 text-pr-gray-light">/</span>
            <span className="text-pr-orange-dark">
              {String(paraperso.number).padStart(2, '0')}
            </span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              {paraperso.sousTheme}
            </p>

            <div className="flex items-start gap-5 mb-5">
              <span className="font-dm-serif text-pr-orange text-6xl leading-none flex-shrink-0">
                {String(paraperso.number).padStart(2, '0')}
              </span>
              <h1 className="font-dm-serif text-3xl md:text-4xl text-pr-black leading-tight">
                {paraperso.title}
              </h1>
            </div>

            <div className="h-[3px] w-16 bg-pr-orange mb-5" />

            <p className="text-base md:text-lg text-pr-gray-dark italic leading-relaxed">
              {paraperso.glose}
            </p>
          </div>

          {/* Carte paragraphe */}
          <Card className="relative bg-white rounded-2xl p-7 md:p-10 border border-pr-gray-light overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange" />

            <div className="text-pr-black text-base md:text-lg leading-[1.85] [&_p]:mb-4 [&_p:last-child]:mb-0 [&_em]:italic [&_em]:text-pr-orange-dark">
              {paraperso.body}
            </div>

            {/* Métadonnées */}
            <div className="mt-8 pt-6 border-t border-pr-gray-light grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-dark mb-2">
                  Références mobilisées
                </p>
                <ul className="space-y-1.5">
                  {paraperso.references.map((ref) => (
                    <li key={ref} className="text-pr-black">
                      <span className="text-pr-orange mr-2">→</span>
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-dark mb-2">
                  Sous-thème
                </p>
                <p className="text-pr-black mb-3">{paraperso.sousTheme}</p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-dark mb-2">
                  Date
                </p>
                <p className="text-pr-black">{paraperso.date}</p>
              </div>
            </div>
          </Card>

          {/* Navigation prev/next */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {previous ? (
              <Link
                to={`/formation/culture-generale/references/${previous.slug}`}
                className="group block bg-white rounded-2xl p-5 border border-pr-gray-light hover:border-pr-orange hover:shadow-md transition-all"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-2">
                  ← Précédent
                </p>
                <p className="font-dm-serif text-base text-pr-black leading-snug">
                  {previous.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/formation/culture-generale/references/${next.slug}`}
                className="group block bg-white rounded-2xl p-5 border border-pr-gray-light hover:border-pr-orange hover:shadow-md transition-all md:text-right"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-2">
                  Suivant →
                </p>
                <p className="font-dm-serif text-base text-pr-black leading-snug">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Retour liste */}
          <div className="mt-10 text-center">
            <Link to="/formation/culture-generale/references">
              <Button
                variant="outline"
                className="border-pr-gray-light text-pr-gray-dark hover:border-pr-orange hover:text-pr-orange-dark px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]"
              >
                ← Retour à toutes les références
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParapersoDetailPage;
