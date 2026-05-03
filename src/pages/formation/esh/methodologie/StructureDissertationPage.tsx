import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Layers3, ArrowRight } from 'lucide-react';

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-white rounded-xl shadow-sm border p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
  </section>
);

const StructureDissertationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh" className="hover:text-gray-800 transition-colors">Formation ESH ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh/methodologie" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Structure de la dissertation</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <Layers3 className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">La structure d’une dissertation d’économie : du plan à la conclusion</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rigueur et clarté: une méthode pas-à-pas pour annoncer le plan, construire trois parties solides, et conclure efficacement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Block title="1. L’annonce du plan">
            <ul>
              <li>Bannir « dans un premier temps… ».</li>
              <li>Utiliser des enchaînements logiques: « Si…, alors…, cependant… » ou « Nous montrerons d’abord…, puis nous examinerons…, avant d’envisager… ».</li>
              <li>Plan clair et progressif; sous-parties précises et argumentées.</li>
              <li>Si une sous-partie est faible, privilégier deux sous-parties fortes plutôt que d’en ajouter une artificielle.</li>
            </ul>
          </Block>

          <Block title="2. Le type de plan à privilégier">
            <p>Une dissertation d’économie comporte toujours <strong>trois parties</strong>. Différentes structures sont possibles:</p>
            <ul>
              <li><strong>Historique</strong>: évolution d’un phénomène.</li>
              <li><strong>Dialectique</strong>: thèse, antithèse, puis dépassement/conditions de validité.</li>
              <li><strong>Thématique</strong>: dimensions différentes (nationale, européenne, mondiale…).</li>
              <li><strong>Analytique</strong>: une même dimension déclinée selon plusieurs échelles (micro/macro, social/environnemental/économique…).</li>
            </ul>
          </Block>

          <Block title="3. La première partie : poser la thèse">
            <ul>
              <li>Reformuler l’idée annoncée dans le plan et la développer en 4–5 lignes minimum.</li>
              <li>Mobiliser un mécanisme ou un auteur avec référence complète et explication.</li>
              <li>Ajouter un fait précis: chiffre, date, événement historique.</li>
              <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 mt-1 text-blue-600" />Transition: mini-bilan (1–2 lignes) ouvrant logiquement vers la II.</li>
            </ul>
          </Block>

          <Block title="4. La deuxième partie : nuancer et problématiser">
            <p>Introduire limites, contradictions et débats. Montrer la complexité et l’ambivalence de l’objet économique. On affine et on problématise.</p>
          </Block>

          <Block title="5. La troisième partie : dépasser et enrichir">
            <ul>
              <li>Aller au-delà du couple thèse/antithèse et proposer une réponse nuancée.</li>
              <li>Mobiliser des données précises, des auteurs/courants, des faits historiques, des comparaisons.</li>
              <li>Rester strictement lié à la problématique: dépasser ≠ hors-sujet.</li>
            </ul>
          </Block>

          <Block title="6. La conclusion">
            <ul>
              <li><strong>Bilan</strong>: 2–3 phrases (≤ 5 lignes) synthétisant la réponse.</li>
              <li><strong>Ouverture</strong>: 5–10 lignes élargissant la réflexion (dimension non traitée, recommandation d’un économiste/institution, etc.) avec référence précise et expliquée.</li>
            </ul>
          </Block>
        </div>
      </div>
    </div>
  );
};

export default StructureDissertationPage;


