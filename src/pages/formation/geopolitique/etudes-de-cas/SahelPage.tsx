import React from 'react';
import { Sun } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const SahelPage = () => (
  <EtudeDeCasFiche
    titre="Le Sahel"
    icon={Sun}
    accroche="Bande sahélienne de 5 000 km où se conjuguent jihadisme, juntes militaires et bascule vers la Russie après le départ de la France."
    miseEnContexte="Le Sahel s'étire du Sénégal à la Corne de l'Afrique, mais l'épicentre crisique est la zone des « trois frontières » (Mali, Burkina Faso, Niger). Depuis les coups d'État (Mali 2020-21, Burkina 2022, Niger 2023), trois juntes militaires ont quitté la CEDEAO pour fonder l'AES (Alliance des États du Sahel, 2023), expulsé l'armée française (fin de Barkhane 2022, départ Niger 2023), et fait appel à Wagner — désormais Africa Corps depuis juin 2025. Les groupes jihadistes (JNIM affilié AQMI, EIGS) contrôlent des pans entiers du territoire."
    chiffres={[
      { value: '3 États', label: 'en rupture (Mali, Burkina, Niger) — AES créée en 2023' },
      { value: '5 100 morts', label: 'au Burkina Faso en 2024 (Acled), pays le plus touché par le terrorisme' },
      { value: '~40 000 h', label: 'effectifs Africa Corps + ex-Wagner sur le théâtre africain' },
      { value: '5 %', label: 'des réserves mondiales d\'uranium au Niger (Orano historiquement)' },
      { value: '4 M', label: 'de déplacés dans la région' },
    ]}
    noms={[
      { nom: 'Assimi Goïta, Ibrahim Traoré, Abdourahamane Tiani', detail: 'chefs des juntes (Mali 2020-21, Burkina 2022, Niger 2023)' },
      { nom: 'JNIM (Iyad Ag Ghali)', detail: 'principal front jihadiste, affilié à AQMI' },
      { nom: 'Opération Barkhane (2014-2022)', detail: 'force française, fin actée par expulsion' },
      { nom: 'Africa Corps (juin 2025)', detail: 'successeur étatisé de Wagner, sous tutelle du ministère russe de la Défense' },
      { nom: 'AES (Alliance des États du Sahel, 2023)', detail: 'rupture avec la CEDEAO' },
      { nom: 'CEDEAO', detail: 'sortie effective Mali / Burkina / Niger en janvier 2025' },
    ]}
    tensions={[
      { a: 'Souveraineté affichée', b: 'Dépendance militaire russe' },
      { a: 'Lutte antiterroriste', b: 'Prédation des ressources (or, uranium)' },
      { a: 'Présence française historique', b: 'Bascule vers Moscou et Pékin' },
    ]}
    sujets={[
      { theme: 'Désoccidentalisation', angle: 'recul français en Afrique, montée russe et chinoise' },
      { theme: 'Guerres asymétriques', angle: 'jihadisme, contre-insurrection, faillite étatique' },
      { theme: 'Ressources stratégiques', angle: 'uranium nigérien, or malien, dépendance européenne' },
      { theme: 'Migrations', angle: 'route saharienne vers la Méditerranée, pression sur l\'UE' },
      { theme: 'Frontières', angle: 'porosité, zone des trois frontières, États failed' },
      { theme: 'Acteurs privés de la guerre', angle: 'Wagner / Africa Corps, mercenariat 2.0' },
      { theme: 'Gouvernance mondiale', angle: 'coups d\'État en série, fin de la CEDEAO' },
    ]}
    phraseTiroir="Au Sahel, le départ français acté en 2022-2023 a laissé place à un triumvirat de juntes (Mali, Burkina, Niger) liées à Africa Corps depuis juin 2025 : laboratoire grandeur nature de la désoccidentalisation et de la privatisation russe de la guerre."
  />
);

export default SahelPage;
