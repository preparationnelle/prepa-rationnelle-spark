import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const EspacesMaritimesTensionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-800 transition-colors">Géopolitique</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/geopolitique/premiere-annee" className="hover:text-gray-800 transition-colors">Première année</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Espaces maritimes – tensions et conflits</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Les espaces maritimes, objets de tensions et de conflits entre États</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="max-w-none text-gray-900 space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. Attribut classique de la puissance, la maîtrise d’un espace maritime a pu engendrer des tensions latentes tout autant que des conflits manifestes</h2>

              <h3 className="text-xl font-semibold mb-2">A. La possession d’un vaste espace maritime peut être vue comme un attribut de la puissance nationale</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>J. Nye : « hard power » (pouvoir politique, puissance militaire, force économique).</li>
                <li>Royaume‑Uni, thalassocratie : large flotte militaire, « two power standard ».</li>
                <li>Forte étendue maritime sous souveraineté = ressources, accès privilégié aux routes commerciales.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Pour en ouvrir l’accès ou les exploiter, espaces maritimes deviennent sources de tensions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Grands canaux : Suez (1869), Panama (1914) — pays enclavés reculent en influence, les autres accèdent mieux aux échanges mondiaux.</li>
                <li>Guerre du Pacifique (1879‑84) : Chili vainqueur // Bolivie privée du littoral d’Atacama.</li>
                <li>Compétition halieutique : « guerres de la morue » entre Islande et Royaume‑Uni (1958‑1976).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Les espaces maritimes sont des zones de conflits armés directs</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Bataille de l’Atlantique entre Alliés et forces de l’Axe (U‑Boot allemands).</li>
                <li>Bataille du Pacifique : États‑Unis vs Japon après Pearl Harbor (1941).</li>
                <li>Guerre des Malouines (1982) : Royaume‑Uni vs Argentine.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. En raison de leur nouvelle importance économique, les espaces maritimes suscitent un renouveau juridique et théorique pour mieux en appréhender la conflictualité</h2>

              <h3 className="text-xl font-semibold mb-2">A. Mondialisation : hausse des échanges qui bouleverse la géopolitique</h3>
              <p>Les espaces maritimes jouent un rôle déterminant par le transport maritime (≈ 80% du commerce mondial).</p>
              <p>Certains États profitent des failles : pavillons de complaisance (Panama, Îles Marshall) — immatriculation étrangère et législations de « dumping », attirant les grands armateurs.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. La montée du transport maritime accroît l’importance de la régulation</h3>
              <p>Convention de Montego Bay (1982) : ZEE (droits d’exploitation sur 200 milles) ⇒ litiges entre États pour élargissement.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. La géopolitique replace les espaces maritimes au cœur de son analyse</h3>
              <p>Y. Lacoste, <em>Géopolitique de la Méditerranée</em> : « carrefour des civilisations », « enjeu stratégique majeur ».</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">III. Dans ce contexte, ces zones géographiques cristallisent de nouvelles tensions pour leurs ressources et leur sécurité…</h2>

              <h3 className="text-xl font-semibold mb-2">A. Raréfaction des ressources : volonté accrue d’exploiter le sous‑sol maritime</h3>
              <p>Hausse de population ⇒ hausse de la consommation. « Peak oil » : point où les découvertes ne compensent plus l’exploitation (Rapport Meadows, 1972).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Enjeu de sécurité : militarisation croissante</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Bases à déploiement maritime pour sécuriser routes et approvisionnements : Djibouti, Diego Garcia (USA)…</li>
                <li>Acquisition/modernisation de porte‑avions (ex : CDG) — course aux armements maritimes.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Prospective : deux dynamiques de conflictualité</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Montée des revendications territoriales : appétits des pays limitrophes (Chine, Vietnam, Philippines) pour Spratleys et Paracels (hydrocarbures, position stratégique).</li>
                <li>Aggravation des problématiques environnementales : pollution (embouchure du Gange, du Yang‑Tsé) ⇒ révisions des politiques publiques environnementales.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Conclusion et ouverture</h3>
              <p>
                Tonalité ironique à l’aphorisme du poète : « Homme libre, toujours tu chériras la mer ! » (Baudelaire, Les Fleurs du Mal, « L’homme et la mer »).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspacesMaritimesTensionsPage;


