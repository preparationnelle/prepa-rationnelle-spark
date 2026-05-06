import React from 'react';
import { Ship } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const MerRougePage = () => (
  <EtudeDeCasFiche
    titre="Mer Rouge & Houthis"
    icon={Ship}
    accroche="12 % du commerce mondial passe par Bab el-Mandeb : depuis fin 2023, les Houthis y interdisent le passage et obligent les armateurs à contourner l'Afrique."
    miseEnContexte="La mer Rouge relie Bab el-Mandeb au canal de Suez et constitue l'axe maritime Asie-Europe. Depuis novembre 2023, en soutien au Hamas, les Houthis (milice yéménite chiite soutenue par l'Iran) attaquent les navires liés à Israël, aux États-Unis ou au Royaume-Uni. Résultat : effondrement du trafic à Suez (−70 % en mai 2025 vs 2023), détournement massif par le Cap de Bonne-Espérance, opérations US « Prosperity Guardian » et frappes 2024-2025. Le cessez-le-feu de Gaza d'octobre 2025 a suspendu les attaques, mais la confiance des armateurs n'est pas revenue."
    chiffres={[
      { value: '12 %', label: 'du commerce mondial transite par la mer Rouge' },
      { value: '40 %', label: 'du commerce Asie-Europe / 30 % du fret conteneurisé mondial' },
      { value: '−70 %', label: 'de trafic au canal de Suez en mai 2025 (vs 2023)' },
      { value: '800 M$/mois', label: 'de pertes de revenus pour l\'Égypte (mars 2025)' },
      { value: '+80 %', label: 'de tarifs de fret entre janvier et octobre 2025' },
    ]}
    noms={[
      { nom: 'Houthis / Ansar Allah (Abdul-Malik al-Houthi)', detail: 'milice yéménite zaydite chiite, soutenue par l\'Iran' },
      { nom: 'Bab el-Mandeb', detail: '« porte des lamentations », détroit clé entre Yémen et Djibouti' },
      { nom: 'Opération Prosperity Guardian (US, déc. 2023)', detail: 'coalition maritime occidentale' },
      { nom: 'Cap de Bonne-Espérance', detail: 'route alternative (+10 jours, +30 % de coût)' },
      { nom: 'Cessez-le-feu Gaza (octobre 2025)', detail: 'suspension partielle des attaques' },
      { nom: 'Iran', detail: 'parrain des Houthis dans l\'« axe de la résistance »' },
    ]}
    tensions={[
      { a: 'Liberté de navigation', b: 'Leverage des proxies iraniens' },
      { a: 'Économie de Suez (Égypte)', b: 'Détournement par le Cap' },
      { a: 'Frappes occidentales', b: 'Résilience asymétrique des Houthis' },
    ]}
    sujets={[
      { theme: 'Espaces maritimes & choke points', angle: 'Bab el-Mandeb, Suez, vulnérabilité mondiale' },
      { theme: 'Mondialisation des échanges', angle: 'fragilité des chaînes logistiques' },
      { theme: 'Conflits du Moyen-Orient', angle: 'axe iranien, proxies, prolongement de Gaza' },
      { theme: 'Acteurs non étatiques', angle: 'milice qui paralyse une route mondiale' },
      { theme: 'Désoccidentalisation', angle: 'limite de la puissance navale américaine' },
      { theme: 'Climat & environnement', angle: 'surcoût carbone du contournement africain' },
      { theme: 'Inégalités Nord-Sud', angle: 'Égypte qui perd des recettes vitales' },
    ]}
    phraseTiroir="Depuis novembre 2023, les Houthis du Yémen ont fait chuter de 70 % le trafic du canal de Suez et coûté 800 millions de dollars par mois à l'Égypte : un acteur non étatique de quelques milliers d'hommes paralyse 12 % du commerce mondial."
  />
);

export default MerRougePage;
