import React from 'react';
import { Snowflake } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const GroenlandPage = () => (
  <EtudeDeCasFiche
    titre="Le Groenland"
    icon={Snowflake}
    accroche="Île arctique de 57 000 habitants devenue un nœud stratégique mondial sous l'effet conjugué de la fonte des glaces et du retour de la rivalité Est-Ouest."
    miseEnContexte="Le Groenland est un territoire autonome rattaché au Royaume du Danemark, situé entre Atlantique Nord et océan Arctique. Longtemps périphérique, il revient au premier plan depuis 2010 sous l'effet de trois dynamiques : la fonte de la calotte glaciaire qui ouvre de nouvelles routes maritimes, des gisements massifs de terres rares et d'hydrocarbures, et les ambitions américaines (offres Trump 2019 et 2025) face à la pénétration russo-chinoise dans l'Arctique."
    chiffres={[
      { value: '2,17 M km²', label: '4 fois la France pour 57 000 habitants' },
      { value: '25 %', label: 'des réserves mondiales connues de terres rares' },
      { value: '50 % du PIB', label: 'subventions versées par le Danemark' },
      { value: '5 100 Mds t', label: 'de glace perdues entre 1992 et 2020' },
    ]}
    noms={[
      { nom: 'Múte Bourup Egede', detail: 'Premier ministre indépendantiste (jusqu\'en 2025)' },
      { nom: 'Donald Trump', detail: 'offres de rachat 2019 puis 2025, menace d\'usage de la force' },
      { nom: 'Self-Government Act (2009)', detail: 'autonomie élargie + droit à l\'autodétermination' },
      { nom: 'Conseil de l\'Arctique (1996)', detail: '8 États, gouvernance circumpolaire' },
      { nom: 'Pituffik (ex-Thulé)', detail: 'base spatiale américaine, à 1 200 km du pôle Nord' },
      { nom: 'Kvanefjeld', detail: 'gisement de terres rares — projet bloqué en 2021' },
    ]}
    tensions={[
      { a: 'Indépendance politique', b: 'Dépendance économique au Danemark' },
      { a: 'Exploitation minière', b: 'Préservation environnementale' },
      { a: 'Influence US / OTAN', b: 'Convoitises russo-chinoises' },
    ]}
    sujets={[
      { theme: 'Espaces maritimes & routes', angle: 'route du Nord-Ouest, militarisation arctique' },
      { theme: 'Ressources stratégiques', angle: 'terres rares, monopole chinois, souveraineté minérale' },
      { theme: 'Réchauffement climatique', angle: 'paradoxe « climat = opportunité géopo »' },
      { theme: 'Désoccidentalisation', angle: 'convoitises russes et chinoises sur le Grand Nord' },
      { theme: 'Peuples autochtones', angle: 'Inuits, post-colonialisme nordique' },
      { theme: 'Retour de la puissance américaine', angle: 'Trump, doctrine Monroe étendue' },
      { theme: 'Petits États & souveraineté', angle: 'viabilité d\'un micro-État dépendant' },
    ]}
    phraseTiroir="En 2025, le Groenland — île de 57 000 habitants administrée par le Danemark — concentre 25 % des réserves mondiales de terres rares et fait l'objet d'une seconde offre de rachat de Trump : la fonte arctique transforme un confetti polaire en nœud de la rivalité sino-américaine."
  />
);

export default GroenlandPage;
