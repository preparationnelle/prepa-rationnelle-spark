import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const RessourcesStrategiquesPage: React.FC = () => {
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
            <span className="text-gray-800 font-medium">Ressources stratégiques</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Les ressources stratégiques</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Typologie</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Productions agricoles</li>
                <li>Minerais (or, argent, étain, zinc…) et métaux rares (cobalt, lithium…), dont terres rares</li>
                <li>Ressources énergétiques (charbon, hydrocarbures – gaz et pétrole)</li>
                <li>Eau</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Conflits et ressources</h3>
              <p>Si les conflits existent à toutes les échelles, le caractère stratégique des ressources favorise d’abord la coopération : dans un monde où nul n’est autosuffisant, instabilités et conflits perturbent l’approvisionnement et l’exploitation.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Approche géographique</strong> : ressources liées aux territoires, inégalement réparties.</li>
                <li><strong>Approche historique</strong> : tournant avec les révolutions industrielles; conquêtes et mises en valeur.</li>
              </ul>
              <div className="mt-3 grid md:grid-cols-2 gap-3">
                <div className="bg-white border border-blue-100 rounded p-3">
                  <h4 className="font-semibold text-blue-700 mb-1">Pressions accrues</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Besoins en hausse (industrialisation, émergences)</li>
                    <li>Croissance démographique</li>
                    <li>Défi environnemental (Rapport Meadows, 1972), risques d’épuisement</li>
                  </ul>
                </div>
                <div className="bg-white border border-blue-100 rounded p-3">
                  <h4 className="font-semibold text-blue-700 mb-1">Interdépendances</h4>
                  <p className="text-sm">Économies imbriquées ⇒ coopérations nécessaires sur les flux et la sécurité d’approvisionnement.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. Rivalités</h2>
              <p className="mb-2">Ressources inégalement réparties et au cœur des stratégies de puissance/développement ⇒ conflits à toutes les échelles.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nombreux conflits de basse/moyenne intensité pour le contrôle local; les guerres ouvertes restent plus rares.</li>
                <li>À l’échelle des États, « malédiction des ressources » : rentes suscitant convoitises, corruption, conflits armés.</li>
                <li>Ressources utilisées comme instruments de conflit, levier d’indépendance, contrôle de populations, outil de négociation.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. Coopération</h2>
              <p className="mb-2">Aucun acteur n’est autosuffisant : importateurs et exportateurs redoutent les conflits car ils menacent recettes et approvisionnements.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Coopérations entre acteurs supposés hostiles lorsque les coûts d’interruption sont trop élevés.</li>
                <li>Forums et associations régionales spécialisées pour stabiliser marchés et flux.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">III. Perspectives</h2>
              <p className="mb-2">Ressources et enjeux géopolitiques se recomposent.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>« 3e révolution industrielle » (J. Rifkin) : rend stratégiques de nouveaux matériaux, rebat les hiérarchies.</li>
                <li>Guillaume Pitron, <em>La Guerre des métaux rares</em> (2018) :
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Économique</strong> : prépondérance chinoise (gisements + raffinage).</li>
                    <li><strong>Géopolitique</strong> : tensions accrues pour l’appropriation des gisements.</li>
                    <li><strong>Environnementale</strong> : transition « verte » ⇒ extraction plus intense et impacts potentiellement supérieurs aux fossiles.</li>
                  </ul>
                </li>
                <li>Transition énergétique : exacerbe la géopolitique de l’énergie.</li>
                <li>Climat, épuisement, démographie : renforcent à la fois risques de conflits et besoins de coopération.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Études de cas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700">Hydrocarbures non conventionnels – Bassin permien (Texas/Nouveau‑Mexique)</h4>
                  <p className="text-sm">Gisement majeur de schistes. Collusions politiques/industrie; remodelage paysager, économique et environnemental.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>ExxonMobil, Chevron, ConocoPhillips…</li>
                    <li>Dynastie Bush liée au pétrole (G.H.W. Bush; G.W. Bush).</li>
                    <li>Fracturation hydraulique : 9 000 m³ d’eau/km de conduite; jusqu’à 15 000 tonnes de sable/forage ⇒ épuisement/pollutions; micro‑séismes (avril 2022, M 4.5); risques sanitaires (méthane, benzène…).</li>
                    <li>« Dividendes du Permien » : ~136 Mds$ de prélèvements en 10 ans; ~10% des recettes fiscales directes du Texas.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Orpaillage en Guyane française</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Marché mondial : ~4 000 t/an (50% bijouterie, 40% lingots, 10% usages techniques).</li>
                    <li>Prix : ~10 €/g (2000‑2006) → 30‑40 €/g (2019).</li>
                    <li>Production légale : pic 4 t (2001) → ~1,5 t depuis 2015 (protections environnementales accrues : PAG 2007, interdiction du mercure 2004…).</li>
                    <li>Orpaillage illégal : ~9 000 orpailleurs; déboisement, pollutions; mercure ~1,5 kg/kg d’or (~15 t/an); filières clandestines, trafics; lutte multi‑agences (FAG, PAF, douanes, ONF, gardes‑côtes).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Front pionnier agro‑désertique égyptien</h4>
                  <p className="text-sm">Objectif : maîtriser foncier et eau pour répondre à la croissance démographique et diversifier l’agriculture.</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Historique : Nasser (bonification; Assouan) → Sadate (Est du Delta) → Moubarak (Toshka, 1997, échec) → Sissi (1,5 M de feddans, « New Delta »).</li>
                    <li>Leviers : grands transferts/irrigation; villages ex nihilo; pompage, irrigation de précision, fertigation, semences améliorées, retraitement des eaux.</li>
                    <li>Principales cultures : blé, coton (fibres de qualité); objectif de diversification.</li>
                    <li>Vision : « s’extirper de l’étroite vallée » (Sadate) — rareté de terres arables + croissance rapide (104 M hab. en 2021).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourcesStrategiquesPage;


