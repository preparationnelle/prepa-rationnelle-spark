import React from 'react';
import { Crosshair } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const UkrainePage = () => (
  <EtudeDeCasFiche
    titre="Ukraine"
    icon={Crosshair}
    accroche="Première guerre conventionnelle de haute intensité en Europe depuis 1945 : depuis février 2022, l'Ukraine combat sur 1 200 km de front pour son existence."
    miseEnContexte="Le 24 février 2022, la Russie envahit l'Ukraine, prolongeant un conflit ouvert depuis 2014 (annexion de la Crimée, guerre du Donbass). Quatre ans plus tard, la Russie contrôle la Crimée, 78 % du Donetsk, 99 % du Louhansk, 75 % du Zaporijia et 72 % du Kherson. Le front s'est largement stabilisé en guerre d'usure faite de drones, d'artillerie et de frappes sur les infrastructures énergétiques. Avec le retour de Trump (2025), la médiation américaine relance les pourparlers (Genève, février 2026), Moscou exigeant le retrait total ukrainien du Donbass."
    chiffres={[
      { value: '1 200 km', label: 'de ligne de front entre Russie et Ukraine' },
      { value: '1,2 M', label: 'de pertes russes (tués, blessés, disparus) entre 2022 et 2025 (CSIS)' },
      { value: '~20 %', label: 'du territoire ukrainien sous contrôle russe' },
      { value: '6,7 M', label: 'de réfugiés ukrainiens en Europe' },
      { value: '275 Mds$', label: 'd\'aide cumulée (UE 100+, US 175) jusqu\'en 2025' },
    ]}
    noms={[
      { nom: 'Volodymyr Zelensky', detail: 'président ukrainien depuis 2019' },
      { nom: 'Vladimir Poutine', detail: 'ordonne l\'invasion en février 2022, refuse tout retrait' },
      { nom: 'Donald Trump', detail: 'médiation forcée 2025-2026, posture critique envers Kiev' },
      { nom: 'Memorandum de Budapest (1994)', detail: 'garanties de sécurité bafouées' },
      { nom: 'Accords de Minsk I & II (2014-15)', detail: 'cadre du Donbass, dénoncés en 2022' },
      { nom: 'OTAN', detail: 'aide militaire massive, élargissement Finlande (2023) et Suède (2024)' },
      { nom: 'Négociations de Genève (fév. 2026)', detail: 'sous médiation américaine, encalminées' },
    ]}
    tensions={[
      { a: 'Souveraineté territoriale ukrainienne', b: 'Annexions russes (Crimée, Donbass)' },
      { a: 'Soutien occidental', b: 'Essoufflement (Trump 2025)' },
      { a: 'Front gelé', b: 'Guerre d\'usure interminable' },
    ]}
    sujets={[
      { theme: 'Retour de la guerre en Europe', angle: 'conflit conventionnel de haute intensité depuis 1945' },
      { theme: 'Frontières', angle: 'annexions, contestation, Memorandum de Budapest' },
      { theme: 'Désoccidentalisation', angle: 'neutralité Inde / Brésil / Sud global' },
      { theme: 'Énergie', angle: 'sortie européenne du gaz russe, Nord Stream, GNL américain' },
      { theme: 'Migrations', angle: '6,7 M de réfugiés, plus grande crise européenne depuis 1945' },
      { theme: 'Gouvernance mondiale', angle: 'paralysie de l\'ONU, droit international bafoué' },
      { theme: 'Industrie de défense', angle: 'réveil européen, économie de guerre, drones' },
    ]}
    phraseTiroir="En février 2026, après quatre ans de guerre et 1,2 million de pertes russes, l'Ukraine reste fixée sur un front de 1 200 km : le retour de Trump à la Maison-Blanche force Kiev à négocier sous pression la cession du Donbass."
  />
);

export default UkrainePage;
