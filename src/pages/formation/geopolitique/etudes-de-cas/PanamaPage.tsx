import React from 'react';
import { Anchor } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const PanamaPage = () => (
  <EtudeDeCasFiche
    titre="Canal de Panama"
    icon={Anchor}
    accroche="Voie d'eau de 80 km qui relie deux océans et porte 5 % du commerce mondial : entre crise climatique, leverage américain et présence chinoise contestée."
    miseEnContexte="Inauguré en 1914, rétrocédé par les États-Unis au Panama en 1999 (traités Torrijos-Carter), le canal a doublé sa capacité avec l'extension Néo-Panamax (2016). Il porte environ 5 % du commerce maritime mondial. La sécheresse historique de 2023-2024 a fait baisser le lac Gatún et forcé l'autorité du canal à réduire les transits de 29 % et à limiter les tonnages. Trump, dès janvier 2025, a menacé de « reprendre » le canal au prétexte d'une supposée prise de contrôle chinoise (Hutchison Ports gère deux ports d'extrémité). Sous pression américaine, Panama a quitté les Routes de la Soie en mars 2025."
    chiffres={[
      { value: '~5 %', label: 'du commerce maritime mondial transite par Panama' },
      { value: '80 km', label: 'de longueur, 26 m de tirant d\'eau Néo-Panamax' },
      { value: '−29 %', label: 'de transits en année fiscale 2024 (sécheresse)' },
      { value: '+20 %', label: 'de transits en 2025 (rebond), 5,7 Mds$ de revenus' },
      { value: '2 ports', label: 'd\'extrémité gérés par Hutchison Ports (CK Hutchison, HK)' },
    ]}
    noms={[
      { nom: 'José Raúl Mulino', detail: 'président panaméen depuis juillet 2024' },
      { nom: 'Donald Trump', detail: 'menace de « reprendre » le canal (janvier 2025)' },
      { nom: 'Traités Torrijos-Carter (1977)', detail: 'rétrocession du canal effective en 1999' },
      { nom: 'Marco Rubio', detail: 'Secrétaire d\'État, négocie le retrait BRI' },
      { nom: 'Hutchison Ports', detail: 'opérateur hongkongais contesté par Trump' },
      { nom: 'Lac Gatún', detail: 'réservoir d\'eau douce vital, à sec en 2023-2024' },
    ]}
    tensions={[
      { a: 'Souveraineté panaméenne', b: 'Leverage américain (Trump)' },
      { a: 'Influence chinoise (BRI, Hutchison)', b: 'Reprise en main US' },
      { a: 'Croissance du trafic', b: 'Limites hydriques climatiques' },
    ]}
    sujets={[
      { theme: 'Espaces maritimes & choke points', angle: 'Panama, Suez, Malacca, Ormuz' },
      { theme: 'Réchauffement climatique', angle: 'sécheresse comme arme géopo de facto' },
      { theme: 'Désoccidentalisation', angle: 'recul chinois sous pression US' },
      { theme: 'Retour de la doctrine Monroe', angle: 'Trump et l\'« hémisphère occidental »' },
      { theme: 'Petits États & souveraineté', angle: 'asymétrie Panama-États-Unis' },
      { theme: 'Mondialisation', angle: 'fragilité des chaînes logistiques' },
      { theme: 'Puissance américaine', angle: 'pivot vers les Amériques, Groenland-Panama' },
    ]}
    phraseTiroir="En 2025, Trump menace de « reprendre » le canal de Panama — par lequel transite 5 % du commerce mondial — au prétexte d'une présence chinoise, après une sécheresse historique de 2023-2024 qui avait déjà fait chuter le trafic de 29 % : un canal pris en tenaille entre climat et géopolitique."
  />
);

export default PanamaPage;
