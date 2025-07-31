import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Play, Target, ArrowRight } from 'lucide-react';
import { FaRuler } from 'react-icons/fa'; // Pour le logo 📐
import { useState } from 'react';

const BG_MAIN = 'bg-[#EEF3FC]';
const COLOR_PRIMARY = 'text-[#2D5BFF]';
const COLOR_ORANGE = 'text-[#FF5C1B]';
const COLOR_LILAC = 'text-[#9370FF]';
const GRADIENT_HEADER = 'bg-gradient-to-r from-[#6B5FFF] to-[#29E3F5]';

const SEMESTRE_1 = [
  { id: 0, slug: 'methodologie', title: 'Méthodologie', isMethodology: true },
  { id: 1, slug: 'elements-de-logique', title: 'Éléments de logique' },
  { id: 2, slug: 'ensembles-et-applications', title: 'Ensembles et applications' },
  { id: 3, slug: 'sommes-produits-coefficients-binomiaux', title: 'Sommes, produits & coefficients binomiaux' },
  { id: 4, slug: 'suites-numeriques', title: 'Suites numériques' },
  { id: 5, slug: 'fonctions-d-une-variable-reelle', title: 'Fonctions d\'une variable réelle' },
  { id: 6, slug: 'derivation', title: 'Dérivation' },
  { id: 7, slug: 'integration-sur-un-segment', title: 'Intégration sur un segment' },
  { id: 8, slug: 'polynomes', title: 'Polynômes' },
  { id: 9, slug: 'matrices-espaces-vectoriels', title: 'Matrices & espaces vectoriels' },
  { id: 10, slug: 'probabilites-conditionnement', title: 'Probabilités & conditionnement' },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'applications-lineaires-structures-vectorielles', title: 'Applications linéaires & structures vectorielles' },
  { id: 12, slug: 'comparaison-negligeabilite-equivalence', title: 'Comparaison — négligeabilité & équivalence' },
  { id: 13, slug: 'series-numeriques', title: 'Séries numériques' },
  { id: 14, slug: 'developpements-limites-formule-de-taylor', title: 'Développements limités & formule de Taylor' },
  { id: 15, slug: 'integrales-impropres-criteres-de-convergence', title: 'Intégrales impropres & critères de convergence' },
  { id: 16, slug: 'espaces-probabilises-conditionnement', title: 'Espaces probabilisés & conditionnement' },
  { id: 17, slug: 'variables-aleatoires-discretes-lois', title: 'Variables aléatoires discrètes & lois' },
  { id: 18, slug: 'convergences-theoremes-limites', title: 'Convergences & théorèmes limites' },
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

        {/* Grille chapitres */}
        <div className="container mx-auto px-4 pb-16">
          {/* Semestre 1 */}
          <h2 className="text-2xl font-bold mb-6 text-[#2D5BFF] text-center">Chapitres — Semestre 1</h2>
          <div className="flex flex-col gap-4">
            {SEMESTRE_1.map((chap) => (
              <div
                key={chap.id}
                className={`group relative flex items-center bg-white rounded-2xl shadow p-3 md:p-4 border border-[#F5F7FF] transition hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer focus-within:ring-2 focus-within:ring-[#2D5BFF] ${
                  chap.isMethodology ? 'border-orange-200 bg-orange-50/30' : ''
                }`}
                tabIndex={0}
                onClick={() => window.location.href = chap.isMethodology ? '/formation/maths-methodologie' : `/formation/maths-${chap.slug}`}
                onKeyDown={e => { 
                  if (e.key === 'Enter') window.location.href = chap.isMethodology ? '/formation/maths-methodologie' : `/formation/maths-${chap.slug}`; 
                }}
                aria-label={`Accéder au cours ${chap.title}`}
              >
                {/* Badge numéro */}
                <span className={`flex-shrink-0 w-10 h-10 rounded-full shadow text-lg font-bold border-2 flex items-center justify-center mr-4 ${
                  chap.isMethodology 
                    ? 'bg-orange-100 text-orange-600 border-orange-200' 
                    : 'bg-[#F5F7FF] text-[#2D5BFF] border-[#E0E7FF]'
                }`}>
                  {chap.id}
                </span>
                {/* Titre chapitre */}
                <span className={`text-base md:text-lg font-semibold flex-1 group-hover:underline ${
                  chap.isMethodology ? 'text-orange-700' : 'text-[#2D5BFF]'
                }`}>
                  {chap.title}
                </span>
                {/* Boutons Cours et Exercice - seulement pour les chapitres non-méthodologie */}
                {!chap.isMethodology && (
                  <>
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
                  </>
                )}
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