import React from 'react';
import { Cpu } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const TaiwanPage = () => (
  <EtudeDeCasFiche
    titre="Taïwan"
    icon={Cpu}
    accroche="Île de 24 millions d'habitants qui produit 90 % des semi-conducteurs avancés du monde : centre nerveux de l'économie numérique et épicentre du duel sino-américain."
    miseEnContexte="République de Chine (Taïwan), démocratie séparée du continent depuis 1949, revendiquée par Pékin au titre de la « réunification ». Depuis l'élection de Lai Ching-te (DPP, mai 2024) et le retour de Trump (2025), les tensions s'intensifient : 200+ incursions aériennes chinoises par mois, exercices simulant un blocus, effritement de l'« ambiguïté stratégique » américaine. L'enjeu dépasse l'île — TSMC fabrique 90 % des puces avancées mondiales, base de l'IA, du smartphone, du F-35."
    chiffres={[
      { value: '90 %', label: 'des semi-conducteurs avancés mondiaux fabriqués par TSMC' },
      { value: '24 M', label: 'd\'habitants sur l\'île' },
      { value: '200+/mois', label: 'incursions aériennes chinoises (mai 2025)' },
      { value: '100 Mds$', label: 'd\'investissement TSMC aux États-Unis (2025)' },
      { value: '22 000', label: 'réservistes mobilisés pour Han Kuang 2025' },
    ]}
    noms={[
      { nom: 'Lai Ching-te', detail: 'président DPP depuis mai 2024, indépendantiste' },
      { nom: 'Xi Jinping', detail: '« réunification inéluctable », horizon 2049' },
      { nom: 'TSMC (Morris Chang, 1987)', detail: '« bouclier de silicium » de Taïwan' },
      { nom: 'Han Kuang', detail: 'exercices militaires annuels, 41ᵉ édition 2025 (la plus large depuis 1984)' },
      { nom: 'Loi anti-sécession (2005)', detail: 'justifie l\'usage de la force par Pékin' },
      { nom: 'Détroit de Taïwan', detail: '50 % du trafic conteneurisé mondial passe à proximité' },
      { nom: 'Stratégie du porc-épic', detail: 'défense asymétrique : drones, mines, sous-marins de poche' },
    ]}
    tensions={[
      { a: 'Statu quo de facto', b: 'Réunification voulue par Pékin' },
      { a: 'Bouclier de silicium', b: 'Relocalisation US (effritement)' },
      { a: 'Ambiguïté stratégique américaine', b: 'Engagement explicite' },
    ]}
    sujets={[
      { theme: 'Puissance & rivalités', angle: 'duel Chine-US, piège de Thucydide, hégémonie technologique' },
      { theme: 'Espaces maritimes', angle: 'détroit de Taïwan, blocus, mer de Chine méridionale' },
      { theme: 'Mondialisation des chaînes', angle: 'choke point semi-conducteurs, friend-shoring' },
      { theme: 'Démocratie vs autoritarisme', angle: 'modèle politique en première ligne' },
      { theme: 'Frontières contestées', angle: 'frontière de facto, ligne médiane du détroit' },
      { theme: 'Désoccidentalisation', angle: 'dérisquage chinois, dépendance taïwanaise' },
      { theme: 'Sciences & technologies', angle: 'course à l\'IA, contrôle des choke points industriels' },
    ]}
    phraseTiroir="TSMC concentre à Taïwan 90 % de la production mondiale de semi-conducteurs avancés : une île de 24 millions d'habitants tient en main les organes vitaux de l'économie numérique, faisant du détroit l'épicentre du duel sino-américain."
  />
);

export default TaiwanPage;
