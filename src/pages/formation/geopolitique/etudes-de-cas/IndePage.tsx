import React from 'react';
import { Globe2 } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const IndePage = () => (
  <EtudeDeCasFiche
    titre="Inde"
    icon={Globe2}
    accroche="1ʳᵉ population mondiale (1,44 Md), 5ᵉ PIB mondial, championne d'une « neutralité active » qui défie les blocs."
    miseEnContexte="L'Inde est devenue en 2023 le pays le plus peuplé du monde (1,44 milliard, dépassant la Chine), 5ᵉ PIB mondial avec une croissance de 6,5-7 %/an. Sous Narendra Modi (BJP, depuis 2014), elle pratique une « neutralité active » : membre des BRICS+ et du QUAD, elle achète du pétrole russe sanctionné tout en se rapprochant de Washington. Objectif affiché : Viksit Bharat (Inde développée) en 2047, centenaire de l'indépendance. Mais elle reste fragile : PIB/habitant le plus bas du G20, début de fin du « dividende démographique » (2025), tensions persistantes avec Pakistan et Chine, dépendance énergétique massive."
    chiffres={[
      { value: '1,44 Md', label: 'd\'habitants — 1ʳᵉ population mondiale depuis 2023' },
      { value: '5e', label: 'PIB mondial (~4 000 Mds$ en 2025)' },
      { value: '6,5-7 %/an', label: 'de croissance attendue jusqu\'en 2030' },
      { value: '~2 800 $', label: 'de PIB/habitant — le plus bas du G20' },
      { value: '2047', label: 'objectif Viksit Bharat (Inde développée), centenaire de l\'indépendance' },
    ]}
    noms={[
      { nom: 'Narendra Modi', detail: 'Premier ministre depuis 2014, BJP, hindouisme politique' },
      { nom: 'BRICS+ et QUAD', detail: 'double appartenance assumée — neutralité active' },
      { nom: 'Make in India (2014)', detail: 'politique industrielle volontariste' },
      { nom: 'LAC (Ligne de Contrôle Actuelle)', detail: 'frontière disputée avec la Chine (Galwan 2020)' },
      { nom: 'Pakistan', detail: 'rival historique, conflit du Cachemire' },
      { nom: 'Viksit Bharat 2047', detail: 'objectif Inde développée pour le centenaire' },
    ]}
    tensions={[
      { a: 'Émergence économique', b: 'PIB/habitant le plus bas du G20' },
      { a: 'QUAD (anti-Chine)', b: 'BRICS (avec Chine et Russie)' },
      { a: 'Démocratie hindoue', b: 'Nationalisme religieux excluant' },
    ]}
    sujets={[
      { theme: 'Désoccidentalisation', angle: 'Sud global, neutralité active, BRICS+' },
      { theme: 'Démographie', angle: 'fin du dividende démographique, vieillissement asiatique' },
      { theme: 'Inégalités', angle: 'pauvreté massive vs émergence d\'une middle class' },
      { theme: 'Puissance & émergence', angle: '5e économie, ambition 2047' },
      { theme: 'Mondialisation des chaînes', angle: 'Make in India, friend-shoring américain' },
      { theme: 'Énergie', angle: '3e consommateur mondial, dépendance pétrole russe sanctionné' },
      { theme: 'Frontières', angle: 'LAC avec Chine, Cachemire avec Pakistan' },
    ]}
    phraseTiroir="Avec 1,44 milliard d'habitants depuis 2023 et 7 % de croissance, l'Inde de Modi vise le statut de pays développé en 2047 tout en pratiquant une neutralité active assumée — membre du QUAD pro-américain et des BRICS+ avec Pékin et Moscou."
  />
);

export default IndePage;
