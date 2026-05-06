import React from 'react';
import { Compass } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const ArctiquePage = () => (
  <EtudeDeCasFiche
    titre="L'Arctique"
    icon={Compass}
    accroche="Océan partiellement gelé devenu théâtre majeur de la rivalité sino-américano-russe : militarisation, route maritime du Nord, terres rares."
    miseEnContexte="L'Arctique se réchauffe quatre fois plus vite que la moyenne mondiale, ouvrant la Route Maritime du Nord (Shanghai-Rotterdam par les côtes russes) et la Route du Nord-Ouest (par le Canada). Cinq États riverains (Russie, Canada, US, Norvège, Danemark via le Groenland), plus l'Islande, la Suède et la Finlande, forment le Conseil de l'Arctique (1996). La Russie y a redéployé 40 000 hommes en 2025 et rouvert 50 bases. La Chine se déclare « État proche de l'Arctique » et a effectué en octobre 2025 sa première traversée commerciale escortée par brise-glaces nucléaires russes. L'OTAN répond par les opérations Arctic / Baltic Sentry depuis janvier 2025."
    chiffres={[
      { value: '× 4', label: 'vitesse de réchauffement Arctique vs reste du monde' },
      { value: '13 % / 30 %', label: 'des réserves mondiales de pétrole / gaz non découvert (USGS)' },
      { value: '40 000', label: 'soldats russes déployés en Arctique en 2025 (+15 000)' },
      { value: '50+', label: 'bases militaires russes rouvertes dans le Grand Nord' },
      { value: 'Oct. 2025', label: '1ʳᵉ traversée commerciale chinoise par RMN escortée' },
    ]}
    noms={[
      { nom: 'Conseil de l\'Arctique (1996)', detail: '8 États, gouvernance gelée depuis l\'invasion de l\'Ukraine' },
      { nom: 'Route Maritime du Nord (RMN)', detail: 'Shanghai-Rotterdam par les côtes russes' },
      { nom: 'Pituffik (ex-Thulé)', detail: 'base spatiale américaine au Groenland' },
      { nom: 'Arctic / Baltic Sentry (OTAN, janv. 2025)', detail: 'surveillance de la flotte fantôme russe' },
      { nom: 'Vladimir Poutine', detail: 'doctrines arctiques 2020 et 2023, priorité stratégique' },
      { nom: 'Suède (2024) et Finlande (2023)', detail: 'adhésions OTAN — l\'Arctique devient « lac OTAN »' },
    ]}
    tensions={[
      { a: 'Gouvernance multilatérale (Conseil de l\'Arctique)', b: 'Militarisation bilatérale' },
      { a: 'Souveraineté russe sur la RMN', b: 'Liberté de navigation US' },
      { a: 'Exploitation des hydrocarbures', b: 'Préservation climatique' },
    ]}
    sujets={[
      { theme: 'Espaces maritimes', angle: 'RMN, Nord-Ouest, choke points polaires' },
      { theme: 'Ressources stratégiques', angle: 'hydrocarbures, terres rares, pêche' },
      { theme: 'Réchauffement climatique', angle: 'paradoxe « climat = opportunité géopo »' },
      { theme: 'Désoccidentalisation', angle: 'Chine « État proche de l\'Arctique »' },
      { theme: 'Puissance navale', angle: 'brise-glaces nucléaires russes (40+), retard occidental' },
      { theme: 'Frontières', angle: 'revendications du plateau continental, dorsale Lomonossov' },
      { theme: 'Peuples autochtones', angle: 'Inuits, Samis, gouvernance circumpolaire' },
    ]}
    phraseTiroir="L'Arctique se réchauffe quatre fois plus vite que la planète : la Russie y a redéployé 40 000 soldats et rouvert 50 bases, tandis que la Chine effectuait en octobre 2025 sa première traversée commerciale escortée par brise-glaces nucléaires — le Grand Nord est devenu le nouveau théâtre de la rivalité mondiale."
  />
);

export default ArctiquePage;
