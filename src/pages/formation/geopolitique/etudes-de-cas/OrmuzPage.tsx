import React from 'react';
import { Droplet } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const OrmuzPage = () => (
  <EtudeDeCasFiche
    titre="Détroit d'Ormuz"
    icon={Droplet}
    accroche="Bras de mer de 38 km au plus étroit qui voit transiter 20 % du pétrole mondial : leverage permanent de l'Iran et talon d'Achille de l'économie globale."
    miseEnContexte="Le détroit d'Ormuz relie le golfe Persique à la mer d'Oman. Étroit (38 km au plus serré), il est l'unique débouché maritime des hydrocarbures saoudiens, irakiens, iraniens, koweïtiens, qataris et émiratis. Téhéran menace régulièrement de le fermer pour faire pression sur l'Occident. La crise de février-avril 2026 (« crise du détroit d'Ormuz ») a vu le trafic s'effondrer (800 navires en 2 mois contre 7 100 l'année précédente), faisant flamber le Brent à 126 $/baril, du jamais vu depuis 2022."
    chiffres={[
      { value: '20 %', label: 'du pétrole mondial transite par Ormuz / 25 % du GNL' },
      { value: '20,1 mb/j', label: 'de pétrole en 2025 (record absolu)' },
      { value: '38 km', label: 'de large au point le plus étroit' },
      { value: '80 %', label: 'du brut d\'Ormuz à destination de l\'Asie' },
      { value: '126 $/baril', label: 'de Brent en mars 2026 (crise du détroit)' },
    ]}
    noms={[
      { nom: 'Ali Khamenei', detail: 'guide suprême iranien, arbitre des menaces de fermeture' },
      { nom: 'Vᵉ flotte américaine (Bahreïn)', detail: 'surveille et sécurise le détroit' },
      { nom: 'Pasdaran (CGRI)', detail: 'marine des Gardiens de la révolution, harcèlement asymétrique' },
      { nom: 'Petroline saoudien', detail: 'pipeline de contournement (5 mb/j) — capacité limitée' },
      { nom: 'JCPOA (2015)', detail: 'accord nucléaire iranien, dénoncé par Trump en 2018' },
      { nom: 'Crise d\'Ormuz (2026)', detail: '−90 % de trafic en 2 mois (800 navires vs 7 100)' },
    ]}
    tensions={[
      { a: 'Liberté de navigation', b: 'Souveraineté côtière iranienne' },
      { a: 'Dépendance occidentale au pétrole', b: 'Leverage iranien' },
      { a: 'Asie consommatrice (Chine)', b: 'Puissance navale US' },
    ]}
    sujets={[
      { theme: 'Espaces maritimes & choke points', angle: 'Ormuz, Bab el-Mandeb, Malacca, Suez' },
      { theme: 'Énergie', angle: 'géopolitique du pétrole, GNL, dépendance asiatique' },
      { theme: 'Conflits du Moyen-Orient', angle: 'Iran-Israël, JCPOA, axe de la résistance' },
      { theme: 'Mondialisation', angle: 'prix du baril, inflation importée, fragilité des chaînes' },
      { theme: 'Désoccidentalisation', angle: 'Chine 1ʳᵉ acheteur de brut iranien' },
      { theme: 'Puissance navale', angle: 'Vᵉ flotte US, dilemme du blocus' },
      { theme: 'Acteurs non étatiques / proxies', angle: 'Pasdaran, harcèlement asymétrique' },
    ]}
    phraseTiroir="Avec 20 % du pétrole mondial et 80 % à destination de l'Asie, le détroit d'Ormuz — large de 38 km au plus serré — constitue un choke point dont la crise de 2026 a fait flamber le Brent à 126 $/baril : le talon d'Achille permanent de la mondialisation énergétique."
  />
);

export default OrmuzPage;
