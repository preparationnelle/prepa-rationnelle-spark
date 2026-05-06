import React from 'react';
import { Crown } from 'lucide-react';
import EtudeDeCasFiche from '@/components/formation/geopolitique/EtudeDeCasFiche';

const TurquiePage = () => (
  <EtudeDeCasFiche
    titre="Turquie"
    icon={Crown}
    accroche="Membre de l'OTAN candidat aux BRICS : sous Erdogan, la Turquie incarne le pivot par excellence d'un monde multipolaire et joue les fauteurs d'équilibre."
    miseEnContexte="2ᵉ armée de l'OTAN, candidate à l'UE depuis 1987 (gelée), partenaire des BRICS depuis 2025. Sous Recep Tayyip Erdogan (AKP, Premier ministre puis président depuis 2003), la Turquie pratique un « néo-ottomanisme » qui projette son influence dans les Balkans, le Caucase, l'Asie centrale et le Moyen-Orient. Joue un rôle central dans la guerre d'Ukraine (vente de Bayraktar TB2, médiation grain), la chute d'Assad (décembre 2024) et l'accueil de 3,5 M de réfugiés syriens. Mais inflation à 50 %, lira en chute libre, dérive autoritaire (purges post-2016)."
    chiffres={[
      { value: '2e armée', label: 'de l\'OTAN (~425 000 actifs)' },
      { value: '85 M', label: 'd\'habitants' },
      { value: '50 %', label: 'd\'inflation en 2024 (record), retour à 35 % en 2025' },
      { value: '3,5 M', label: 'de réfugiés syriens accueillis' },
      { value: '38 ans', label: 'que la candidature à l\'UE est gelée (depuis 1987)' },
    ]}
    noms={[
      { nom: 'Recep Tayyip Erdogan', detail: 'président depuis 2014 (Premier ministre 2003-2014), AKP' },
      { nom: 'Bayraktar TB2', detail: 'drones turcs vendus à 30+ pays (Ukraine, Azerbaïdjan)' },
      { nom: 'HTC / Ahmad al-Charaa', detail: 'prise de Damas (déc. 2024) sous influence turque' },
      { nom: 'Convention de Montreux (1936)', detail: 'contrôle turc des Détroits du Bosphore et des Dardanelles' },
      { nom: 'Tentative de coup d\'État (juillet 2016)', detail: 'tournant autoritaire, purges massives' },
      { nom: 'Partenariat BRICS (2025)', detail: 'membre OTAN candidat aux BRICS — inédit' },
    ]}
    tensions={[
      { a: 'Membre OTAN', b: 'Candidat BRICS (équilibre revendiqué)' },
      { a: 'Néo-ottomanisme régional', b: 'Réalisme économique (FMI possible)' },
      { a: 'Dérive autoritaire interne', b: 'Ambitions démocratiques affichées' },
    ]}
    sujets={[
      { theme: 'Désoccidentalisation', angle: 'pivot OTAN-BRICS, multipolarité assumée' },
      { theme: 'Conflits du Moyen-Orient', angle: 'Syrie post-Assad, Kurdes, axe sunnite' },
      { theme: 'Migrations', angle: '3,5 M de Syriens, accord UE-Turquie de 2016' },
      { theme: 'Puissance & soft power', angle: 'Bayraktar, séries TV, écoles religieuses' },
      { theme: 'Espaces maritimes', angle: 'Convention de Montreux, Détroits, Méditerranée orientale' },
      { theme: 'Industries de défense', angle: 'drones, modèle low cost / haute tech' },
      { theme: 'Frontières', angle: 'disputes maritimes Grèce/Chypre, Caucase, Nagorny-Karabakh' },
    ]}
    phraseTiroir="Membre de l'OTAN devenu partenaire des BRICS en 2025, la Turquie d'Erdogan — appuyée sur sa 2ᵉ armée de l'Alliance, ses drones Bayraktar et son influence post-Assad en Syrie — incarne le pivot par excellence d'un monde multipolaire."
  />
);

export default TurquiePage;
