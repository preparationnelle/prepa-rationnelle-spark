import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const GouvernanceMondialePage: React.FC = () => {
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
            <span className="text-gray-800 font-medium">Gouvernance mondiale</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Gouvernance mondiale</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p>Quand le monde était bipolaire (guerre froide) et unipolaire (domination exclusive des États‑Unis en 1991), les rapports de force paraissaient bordés par un jeu d’alliances bien défini (OTAN, Pacte de Varsovie…). Depuis l’émergence d’un monde multipolaire, voire apolaire, les rapports de force se sont complexifiés.</p>
              <p className="mt-2">Si des gouvernances régionales semblent avoir acquis une certaine maturité (UE ou ZIR comme le Mercosur), la gouvernance mondiale apparaît en retard (financement, pratiques – consensus laborieux…).</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Définitions et cadres</h2>
              <p><strong>Gouvernance mondiale</strong> : ensemble des règles qui permettent d’assurer le bon fonctionnement d’un État, d’une institution, d’une organisation (ONG…) à l’échelle régionale, nationale ou planétaire.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Volonté de mettre en place un nouveau système de régulation international susceptible de garantir la paix.</li>
                <li>Volonté d’ordonner le monde dans un schéma supranational.</li>
              </ul>
              <p className="mt-3">B. Badie, <em>La diplomatie de connivence</em> : « diplomatie de clubs » (G8, G20) risquant d’établir une oligarchie mondiale; féodalisme international avec une « noblesse occidentale » utilisant la démocratie comme critère de distinction et justification d’ingérence.</p>
              <p className="mt-2">Vieux dessein : Kant (paix perpétuelle), SDN (1919)… mais projet inabouti (défis alimentaires, climatiques, justice mondiale). Le contexte renforce l’urgence d’une approche globale concertée (mafias, terrorisme, paradis fiscaux, cyberattaques, trafics, guerres…), multiplication des populismes (Rosanvallon : « totalitarismes du XXIe siècle »), mouvements alter/anti/démondialistes.</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Limites et réussites</h2>
              <h3 className="text-xl font-semibold mb-2">Limites de la gouvernance actuelle</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Conseil de sécurité : aucun acteur africain; Brésil non permanent; Japon et Allemagne candidats; Russie écartée.</li>
                <li>FMI/PAS vécus comme instrument de contrainte (ex : Grèce, troïka); coûts sociaux en Amérique latine.</li>
                <li>Traités bafoués (TNP, Corée du Nord); sanctions contre l’Iran et dénucléarisation sinueuse.</li>
                <li>Échec de K. Annan sur la réunification de Chypre.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Succès de la gouvernance</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Guerre d’Irak (1990‑1991) : coalition contre Saddam Hussein.</li>
                <li>OMC dotée de l’ORD; adhésion Chine (2001) et Russie (2012).</li>
                <li>OMS : dispositif Covax et devoir de solidarité.</li>
                <li>G7 : accord historique sur la taxe minimale de 15% pour les multinationales.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Architecture historique de la gouvernance</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Monétaire : Bretton Woods (1944) → BIRD, FMI.</li>
                <li>Financière : Banque mondiale; Club de Paris.</li>
                <li>Commerciale : GATT (1947) → OMC (1995), ORD, CNUCED.</li>
                <li>Géopolitique : ONU (Charte de San Francisco, 26 juin 1945); OTAN (1949).</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Environnement et social</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>1992 Rio; 2005 Kyoto; 2015 Paris (COP21).</li>
                <li>1996 initiative PPTE; OMD/ODD (ONU, 2000).</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Plans d’analyse</h2>
              <ol className="list-decimal list-inside space-y-1">
                <li>Processus historique adaptatif de la gouvernance mondiale (crises et réformes).</li>
                <li>Gouvernance menacée par des « égoïsmes sacrés » (B. Badie, <em>Le retournement du monde</em>).</li>
                <li>Des progrès réels selon les périmètres : la gouvernance n’est pas obsolète partout.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GouvernanceMondialePage;


