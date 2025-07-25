import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Play } from 'lucide-react';
import { FaRuler } from 'react-icons/fa'; // Pour le logo 📐
import { useState } from 'react';

const BG_MAIN = 'bg-[#EEF3FC]';
const COLOR_PRIMARY = 'text-[#2D5BFF]';
const COLOR_ORANGE = 'text-[#FF5C1B]';
const COLOR_LILAC = 'text-[#9370FF]';
const GRADIENT_HEADER = 'bg-gradient-to-r from-[#6B5FFF] to-[#29E3F5]';

const SEMESTRE_1 = [
  { id: 1, slug: 'logique', title: 'Logique & raisonnement fondamentaux' },
  { id: 2, slug: 'ensembles', title: 'Ensembles et applications' },
  { id: 3, slug: 'entiers', title: 'Entiers' },
  { id: 4, slug: 'suites', title: 'Suites numériques' },
  { id: 5, slug: 'fonctions', title: 'Fonctions réelles — continuité' },
  { id: 6, slug: 'derivation', title: 'Dérivation' },
  { id: 7, slug: 'integration', title: 'Intégration' },
  { id: 8, slug: 'polynomes', title: 'Polynômes et trigonométrie' },
  { id: 9, slug: 'espaces-vectoriels', title: 'Matrices, systèmes linéaires et espaces vectoriels' },
  { id: 10, slug: 'probabilites-finies', title: 'Espaces probabilisés et conditionnement' },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'espaces-vectoriels-complements', title: 'Applications linéaires et structures vectorielles' },
  { id: 12, slug: 'comparaisons', title: 'Négligeabilité et équivalence asymptotique' },
  { id: 13, slug: 'series', title: 'Séries numériques et convergence' },
  { id: 14, slug: 'developpements-limites', title: 'Développements limités et formule de Taylor' },
  { id: 15, slug: 'fonctions-complements', title: 'Compléments sur l\'étude de fonctions' },
  { id: 16, slug: 'integration-intervalle', title: 'Intégrales impropres et critères de convergence' },
  { id: 17, slug: 'probabilites-univers', title: 'Espaces probabilisés et probabilités conditionnelles' },
  { id: 18, slug: 'variables-aleatoires', title: 'Variables aléatoires discrètes et lois de probabilité' },
  { id: 19, slug: 'inegalites', title: 'Convergences et théorèmes limites' },
  { id: 20, slug: 'python', title: 'Python' },
];

const MathsApprofondiesPage = () => {
  const [filter, setFilter] = useState<'appro' | 'appli'>('appro');
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Maths Approfondies</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Maths Approfondies
            </h1>
            <p className="text-slate-600 text-lg">
              Formation mathématiques approfondie pour la prépa ECG, avec focus sur les concepts théoriques et les démonstrations
            </p>
          </div>
        </Card>

        {/* Contenu existant */}
        {/* Breadcrumb tout en haut à gauche */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Formation Maths ECG</span>
            </div>
          </div>
        </nav>

        {/* Header principal */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className={`rounded-3xl shadow-xl p-8 mb-8 flex flex-col items-center justify-center ${GRADIENT_HEADER} relative overflow-hidden`}>
            <div className="absolute left-4 top-4 text-5xl opacity-30"><FaRuler className={COLOR_LILAC} /></div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2 flex items-center gap-3 z-10">
              <span>Formation Maths ECG</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4 z-10">
              Sommaire complet de la formation Maths ECG. Cliquez sur "Cours" ou "Exercice" pour chaque chapitre.
            </p>
            {/* Switch Appro/Appli */}
            <div className="flex gap-2 mt-2 z-10">
              <button
                className={`px-5 py-2 rounded-full font-semibold text-sm shadow transition-all duration-200 border-2 ${filter==='appro' ? 'bg-white text-[#2D5BFF] border-[#2D5BFF] scale-105' : 'bg-white/60 text-[#6B5FFF] border-transparent hover:border-[#2D5BFF]'}`}
                onClick={()=>setFilter('appro')}
              >Approfondies</button>
              <button
                className={`px-5 py-2 rounded-full font-semibold text-sm shadow transition-all duration-200 border-2 ${filter==='appli' ? 'bg-white text-[#29E3F5] border-[#29E3F5] scale-105' : 'bg-white/60 text-[#29E3F5] border-transparent hover:border-[#29E3F5]'}`}
                onClick={()=>setFilter('appli')}
              >Applications</button>
            </div>
          </div>
        </div>

        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          {/* Semestre 1 */}
          <h2 className="text-2xl font-bold mb-6 text-[#2D5BFF] text-center">Chapitres — Semestre 1</h2>
          <div className="flex flex-col gap-4">
            {SEMESTRE_1.map((chap) => (
              <div
                key={chap.id}
                className="group relative flex items-center bg-white rounded-2xl shadow p-3 md:p-4 border border-[#F5F7FF] transition hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer focus-within:ring-2 focus-within:ring-[#2D5BFF]"
                tabIndex={0}
                onClick={() => window.location.href = `/formation/maths-${chap.slug}`}
                onKeyDown={e => { if (e.key === 'Enter') window.location.href = `/formation/maths-${chap.slug}`; }}
                aria-label={`Accéder au cours ${chap.title}`}
              >
                {/* Badge numéro */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F7FF] shadow text-lg font-bold text-[#2D5BFF] border-2 border-[#E0E7FF] flex items-center justify-center mr-4">{chap.id}</span>
                {/* Titre chapitre */}
                <span className="text-base md:text-lg font-semibold text-[#2D5BFF] flex-1 group-hover:underline">
                  {chap.title}
                </span>
                {/* Bouton Cours */}
                <Link
                  to={`/formation/maths-${chap.slug}`}
                  className="ml-4 z-10"
                  tabIndex={0}
                  aria-label={`Accéder au cours de ${chap.title}`}
                  onClick={e => e.stopPropagation()}
                  onKeyDown={e => e.stopPropagation()}
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2D5BFF] text-white font-semibold shadow hover:bg-[#6B5FFF] transition">
                    <BookOpen className="h-5 w-5" /> Cours
                  </button>
                </Link>
                {/* Bouton Exercice */}
                <Link
                  to={`/formation/maths-${chap.slug}-exercices`}
                  className="ml-4 z-10"
                  tabIndex={0}
                  aria-label={`Accéder aux exercices de ${chap.title}`}
                  onClick={e => e.stopPropagation()}
                  onKeyDown={e => e.stopPropagation()}
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF5C1B] text-white font-semibold shadow hover:bg-[#FF7C4D] transition">
                    <Play className="h-5 w-5" /> Exercice
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Semestre 2 */}
          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#6B5FFF] text-center">Chapitres — Semestre 2</h2>
          <div className="flex flex-col gap-4">
            {SEMESTRE_2.map((chap) => (
              <div
                key={chap.id}
                className="group relative flex items-center bg-white rounded-2xl shadow p-3 md:p-4 border border-[#F5F7FF] transition hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer focus-within:ring-2 focus-within:ring-[#6B5FFF]"
                tabIndex={0}
                onClick={() => window.location.href = `/formation/maths-${chap.slug}`}
                onKeyDown={e => { if (e.key === 'Enter') window.location.href = `/formation/maths-${chap.slug}`; }}
                aria-label={`Accéder au cours ${chap.title}`}
              >
                {/* Badge numéro */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F7FF] shadow text-lg font-bold text-[#6B5FFF] border-2 border-[#E0E7FF] flex items-center justify-center mr-4">{chap.id}</span>
                {/* Titre chapitre */}
                <span className="text-base md:text-lg font-semibold text-[#6B5FFF] flex-1 group-hover:underline">
                  {chap.title}
                </span>
                {/* Bouton Cours */}
                <Link
                  to={`/formation/maths-${chap.slug}`}
                  className="ml-4 z-10"
                  tabIndex={0}
                  aria-label={`Accéder au cours de ${chap.title}`}
                  onClick={e => e.stopPropagation()}
                  onKeyDown={e => e.stopPropagation()}
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2D5BFF] text-white font-semibold shadow hover:bg-[#6B5FFF] transition">
                    <BookOpen className="h-5 w-5" /> Cours
                  </button>
                </Link>
                {/* Bouton Exercice */}
                <Link
                  to={`/formation/maths-${chap.slug}-exercices`}
                  className="ml-4 z-10"
                  tabIndex={0}
                  aria-label={`Accéder aux exercices de ${chap.title}`}
                  onClick={e => e.stopPropagation()}
                  onKeyDown={e => e.stopPropagation()}
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF5C1B] text-white font-semibold shadow hover:bg-[#FF7C4D] transition">
                    <Play className="h-5 w-5" /> Exercice
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsApprofondiesPage;