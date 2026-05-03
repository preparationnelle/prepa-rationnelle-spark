import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { parapersosHumanite } from '@/data/parapersosHumanite';

const ReferencesParapersosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Références
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight mb-5">
              Références
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Banque de parapersos sur le thème <em>l&apos;humanité</em>. Chaque
              titre ouvre un paragraphe autonome et puissant, prêt à être
              mobilisé en dissertation.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-7">
              <span className="px-3 py-1 bg-white border border-pr-gray-light text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                {parapersosHumanite.length} paragraphes
              </span>
              <span className="px-3 py-1 bg-pr-orange-pale text-pr-orange-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                À apprendre par cœur
              </span>
            </div>
          </div>

          {/* Liste */}
          <div className="space-y-5">
            {parapersosHumanite.map((p) => (
              <Link
                key={p.slug}
                to={`/formation/culture-generale/references/${p.slug}`}
                className="block group"
              >
                <article className="relative bg-white rounded-2xl p-6 md:p-7 border border-pr-gray-light hover:border-pr-orange hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <div className="flex items-start gap-5 md:flex-1">
                      <span className="font-dm-serif text-pr-orange text-5xl leading-none flex-shrink-0 w-14">
                        {String(p.number).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-1.5">
                          {p.sousTheme}
                        </p>
                        <h3 className="font-dm-serif text-xl md:text-2xl text-pr-black leading-tight mb-2">
                          {p.title}
                        </h3>
                        <p className="text-sm text-pr-gray-dark leading-relaxed italic">
                          {p.glose}
                        </p>
                      </div>
                    </div>
                    <div
                      className="md:ml-auto md:pl-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                        Lire le paragraphe →
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Retour */}
          <div className="mt-12 text-center">
            <Link
              to="/formation/culture-generale"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark hover:text-pr-orange transition-colors"
            >
              ← Retour à la culture générale
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesParapersosPage;
