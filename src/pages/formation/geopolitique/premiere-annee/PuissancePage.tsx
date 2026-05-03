import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const PuissancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-800 font-medium">La puissance</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">La puissance</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. Définir la puissance</h2>
              <h3 className="text-xl font-semibold mb-2">A. Définition classique</h3>
              <p>La puissance représente la capacité d’action des acteurs sur la scène internationale, souvent entendue comme le moyen d’imposer sa volonté à un autre acteur.</p>
              <p className="mt-2">Serge Sur, <em>Les Relations internationales</em> (1995) : « la capacité de faire, de faire faire, d’empêcher de faire, de refuser de faire ».</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Notion relative et évolutive</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Relative : elle se mesure à l’aune des autres (France/GB : plus riches et mieux équipés qu’au XIXe siècle, mais poids relatif moindre).</li>
                <li>Évolutive : aucune suprématie n’est pérenne — successions (Pays‑Bas → Espagne → France/GB → USA → Chine?).</li>
                <li>Nuance : Kissinger (1973) voyait déjà 5 pôles : USA, URSS, Europe, Japon, Chine.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. L’« impuissance » de la puissance</h3>
              <p>Bertrand Badie, <em>L’impuissance de la puissance</em> (2004) : maîtriser tous les attributs n’exclut pas l’échec (ex : USA en Afghanistan).</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. Les critères de la puissance</h2>
              <p>Hans Morgenthau, <em>Politics among Nations</em> (1947) : base géographique, base géopolitique, puissance économique, influence culturelle, mobilisation de l’opinion.</p>
              <p>Pierre Buhler, <em>La puissance au XXIe</em> (2011) : variables multiples — État/force militaire, droit/légitimité, géographie/ressources, démographie, finance/endettement, réseaux/connectivité/soft power.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">A. Critère militaire</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Plus aisé de « militariser » une puissance économique (Japon) que l’inverse (Russie).</li>
                <li>Effectifs moins décisifs que qualité/sophistication technologique (IA), C2 efficace et interopérabilité (difficultés russes en Ukraine).</li>
                <li>Alliances : article 5 de l’OTAN (défense collective).</li>
                <li>Puissance ≠ sécurité absolue (11/09) ; mésusage affaiblissant (Irak 2003).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">B. Démographie</h3>
              <p>Population importante = marché/poids (Chine). Mais double tranchant : politique de l’enfant unique (vieillissement), « revanche des berceaux » (Canada FR vs colons anglais), enjeu éducation/emploi.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">C. Étendue territoriale</h3>
              <p>Maîtrise du territoire (Russie/Sibérie) et facteur K (pôles de compétitivité) comptent.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">D. Ressources naturelles</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Pétrole et rente du Golfe (OPEP) vs pays riches sans ressources (Japon, Corée du Sud).</li>
                <li>URSS vs Japon : l’avantage final au pays initialement moins doté.</li>
                <li>Risque « syndrome hollandais » (Venezuela, Angola).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">E. Puissance économique (critère majeur)</h3>
              <p>Temporalité : puissance éco → stratégique (et inversement). Chine (montée), Singapour (éco sans poids démographique), Russie (limites).</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">F. Maîtrise technologique</h3>
              <p>Industries d’avenir = knowledge. Alvin Toffler : facteur « K » (knowledge). NTIC → inégalités (fracture numérique). USA (GAFA), Chine (BATX, big data), UE en retard. Séquence des facteurs : terre/usine → IA/données.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">G. Éducation et formation</h3>
              <p><em>Brain drain</em> vers les USA = source de puissance et d’influence.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">H. Cohésion nationale et sociale</h3>
              <p>Ciment de la résilience et de la projection internationale.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">I. Le droit</h3>
              <p>Droit international largement d’origine anglo‑saxonne. Extraterritorialité du droit US (Ali Laïdi, 2021) — nouvelle arme de guerre économique.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">J. Hard/Soft/Smart/Sharp power</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>J. Nye (1990) : <em>hard power</em> (militaire/éco) vs <em>soft power</em> (attraction : valeurs, universités, culture).</li>
                <li>S. Nossel : <em>smart power</em> = articulation intelligente hard/soft.</li>
                <li>C. Walker/J. Ludwig : <em>sharp power</em> (usage trompeur de l’info à des fins hostiles).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">K. Contrôle des espaces (maritimes/terrestres)</h3>
              <p>Raleigh : « qui commande la mer commande le commerce… ». Mahan : bases mondiales + marine robuste. Mackinder : Heartland (Eurasie) ⇒ île mondiale. Spykman : Rimland ⇒ containment.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Points complémentaires</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Souveraineté énergétique vs dépendance.</li>
                <li>Ralf Bläser (2005) — trois modèles : relationnel / savoir / cadrage (agenda‑setting).</li>
                <li>Finlandisation : influence d’une grande puissance sur un voisin.</li>
                <li>Hégémonie (non consentie) vs leadership (consenti).</li>
                <li>Superpuissance (GF) et hyperpuissance (H. Védrine, USA 1991‑2001).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuissancePage;


