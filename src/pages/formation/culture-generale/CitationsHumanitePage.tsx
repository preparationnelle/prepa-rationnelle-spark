import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  citationsHumanite,
  sousThemesCitations,
  type SousThemeKey,
} from '@/data/citationsHumanite';

type Filter = 'all' | SousThemeKey;

const CitationsHumanitePage: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return citationsHumanite.filter((c) => {
      if (filter !== 'all' && c.sousTheme !== filter) return false;
      if (!q) return true;
      return (
        c.citation.toLowerCase().includes(q) ||
        c.auteur.toLowerCase().includes(q) ||
        c.oeuvre.toLowerCase().includes(q) ||
        c.glose.toLowerCase().includes(q)
      );
    });
  }, [filter, search]);

  const countBySousTheme = useMemo(() => {
    const map = new Map<SousThemeKey, number>();
    citationsHumanite.forEach((c) => {
      map.set(c.sousTheme, (map.get(c.sousTheme) ?? 0) + 1);
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Citations
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight mb-5">
              Banque de citations — L&apos;humanité
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Citations classées par sous-thème, chacune accompagnée d&apos;une
              glose pour la mobiliser le jour J. Quand un paraperso de la
              banque mobilise déjà l&apos;auteur, le lien est affiché.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-7">
              <span className="px-3 py-1 bg-white border border-pr-gray-light text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                {citationsHumanite.length} citations
              </span>
              <span className="px-3 py-1 bg-pr-gray-bg text-pr-black rounded-full text-xs font-semibold uppercase tracking-wider">
                À mémoriser
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Rechercher une citation, un auteur, une œuvre…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 bg-white border border-pr-gray-light rounded-xl text-sm text-pr-gray-dark placeholder-pr-gray-medium focus:outline-none focus:border-pr-black transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                filter === 'all'
                  ? 'bg-pr-black text-white border border-pr-black'
                  : 'bg-white text-pr-gray-dark border border-pr-gray-light hover:border-pr-black'
              }`}
            >
              Toutes ({citationsHumanite.length})
            </button>
            {sousThemesCitations.map((st) => (
              <button
                type="button"
                key={st.key}
                onClick={() => setFilter(st.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === st.key
                    ? 'bg-pr-black text-white border border-pr-black'
                    : 'bg-white text-pr-gray-dark border border-pr-gray-light hover:border-pr-black'
                }`}
              >
                {st.label} ({countBySousTheme.get(st.key) ?? 0})
              </button>
            ))}
          </div>

          {/* Liste */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <p className="text-center text-pr-gray-dark py-10">
                Aucune citation ne correspond à cette recherche.
              </p>
            )}
            {filtered.map((c) => {
              const sousTheme = sousThemesCitations.find(
                (s) => s.key === c.sousTheme,
              );
              return (
                <article
                  key={c.slug}
                  className="bg-white rounded-2xl p-6 md:p-7 border border-pr-gray-light hover:border-pr-black hover:shadow-md transition-all duration-300"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black mb-3">
                    {sousTheme?.label}
                  </p>
                  <blockquote className="font-dm-serif text-xl md:text-2xl text-pr-black leading-snug mb-3 italic">
                    «&nbsp;{c.citation}&nbsp;»
                  </blockquote>
                  <p className="text-sm text-pr-gray-dark mb-4">
                    <span className="font-semibold">{c.auteur}</span>
                    {', '}
                    <em>{c.oeuvre}</em>
                    {', '}
                    {c.date}
                  </p>
                  <p className="text-sm text-pr-gray-dark leading-relaxed">
                    {c.glose}
                  </p>
                  {c.parapersoSlug && (
                    <Link
                      to={`/formation/culture-generale/references/${c.parapersoSlug}`}
                      className="inline-flex items-center mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-pr-black hover:text-pr-black transition-colors"
                    >
                      Voir le paraperso lié →
                    </Link>
                  )}
                </article>
              );
            })}
          </div>

          {/* Retour */}
          <div className="mt-12 text-center">
            <Link
              to="/formation/culture-generale"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black hover:text-pr-black transition-colors"
            >
              ← Retour à la culture générale
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CitationsHumanitePage;
