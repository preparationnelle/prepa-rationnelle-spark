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
  { id: 1, slug: 'logique', title: 'Éléments de logique' },
  { id: 2, slug: 'ensembles', title: 'Ensembles et applications' },
  { id: 3, slug: 'entiers', title: 'Entiers' },
  { id: 4, slug: 'suites', title: 'Suites numériques' },
  { id: 5, slug: 'fonctions', title: 'Fonctions réelles — continuité' },
  { id: 6, slug: 'derivation', title: 'Dérivation' },
  { id: 7, slug: 'integration', title: 'Intégration' },
  { id: 8, slug: 'polynomes', title: 'Polynômes et trigonométrie' },
  { id: 9, slug: 'espaces-vectoriels', title: 'Espaces vectoriels' },
  { id: 10, slug: 'probabilites-finies', title: 'Probabilités sur un univers fini' },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'espaces-vectoriels-complements', title: 'Espaces vectoriels : compléments' },
  { id: 12, slug: 'comparaisons', title: 'Comparaisons' },
  { id: 13, slug: 'series', title: 'Séries numériques' },
  { id: 14, slug: 'developpements-limites', title: 'Développements limités' },
  { id: 15, slug: 'fonctions-complements', title: 'Compléments sur l’étude de fonctions' },
  { id: 16, slug: 'integration-intervalle', title: 'Intégration sur un intervalle quelconque' },
  { id: 17, slug: 'probabilites-univers', title: 'Probabilités sur un univers quelconque' },
  { id: 18, slug: 'variables-aleatoires', title: 'Variables aléatoires réelles discrètes' },
  { id: 19, slug: 'inegalites', title: 'Inégalités et convergences' },
  { id: 20, slug: 'python', title: 'Python' },
];

const MathsFormationPage = () => {
  const [filter, setFilter] = useState<'appro' | 'appli'>('appro');
  return (
    <div className={`min-h-screen ${BG_MAIN}`}>
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
        <h2 className="text-2xl font-bold mb-6 text-[#2D5BFF] text-center">Semestre 1</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SEMESTRE_1.map((chap) => (
            <div key={chap.id} className="rounded-3xl bg-white shadow-xl p-6 flex flex-col gap-4 items-center border border-[#F5F7FF] transition-transform hover:scale-[1.025] hover:shadow-2xl">
              {/* Header chapitre */}
              <div className="flex flex-col items-center w-full mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FF] shadow text-lg font-bold text-[#2D5BFF] border-2 border-[#E0E7FF]">{chap.id}</span>
                  <span className="text-lg md:text-xl font-bold text-[#2D5BFF] text-center">{chap.title}</span>
                </div>
              </div>
              {/* Actions */}
              <div className="flex gap-4 w-full">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-1/2">
                  <button className="w-full py-2 rounded-2xl bg-[#2D5BFF] text-white font-semibold shadow-lg text-base flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#6B5FFF] hover:shadow-xl">
                    <BookOpen className="h-5 w-5" /> Cours
                  </button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-1/2">
                  <button className="w-full py-2 rounded-2xl bg-[#FF5C1B] text-white font-semibold shadow-lg text-base flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#FF7C4D] hover:shadow-xl">
                    <Play className="h-5 w-5" /> Exercice
                  </button>
                    </Link>
                  </div>
            </div>
            ))}
        </div>

        {/* Semestre 2 */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-[#6B5FFF] text-center">Semestre 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SEMESTRE_2.map((chap) => (
            <div key={chap.id} className="rounded-3xl bg-white shadow-xl p-6 flex flex-col gap-4 items-center border border-[#F5F7FF] transition-transform hover:scale-[1.025] hover:shadow-2xl">
              {/* Header chapitre */}
              <div className="flex flex-col items-center w-full mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F7FF] shadow text-lg font-bold text-[#6B5FFF] border-2 border-[#E0E7FF]">{chap.id}</span>
                  <span className="text-lg md:text-xl font-bold text-[#6B5FFF] text-center">{chap.title}</span>
                </div>
              </div>
              {/* Actions */}
              <div className="flex gap-4 w-full">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-1/2">
                  <button className="w-full py-2 rounded-2xl bg-[#2D5BFF] text-white font-semibold shadow-lg text-base flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#6B5FFF] hover:shadow-xl">
                    <BookOpen className="h-5 w-5" /> Cours
                  </button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-1/2">
                  <button className="w-full py-2 rounded-2xl bg-[#FF5C1B] text-white font-semibold shadow-lg text-base flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#FF7C4D] hover:shadow-xl">
                    <Play className="h-5 w-5" /> Exercice
                  </button>
                    </Link>
                  </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MathsFormationPage; 