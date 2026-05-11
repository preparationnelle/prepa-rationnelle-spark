import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';

const data: GeopoliticsCard[] = [
  {
    term: "Jus ad bellum",
    definition: "Droit de faire la guerre selon l'École de Salamanque (XVIe-XVIIe). Partie du droit international définissant les conditions légales pour déclencher un conflit armé.",
    category: "Droit de la guerre"
  },
  {
    term: "Jus in bello",
    definition: "Droit dans la guerre selon l'École de Salamanque. Partie du droit international définissant comment mener la guerre (manière de combattre).",
    category: "Droit de la guerre"
  },
  {
    term: "Traités de Westphalie (1648)",
    definition: "Accords fondateurs du droit international moderne : souveraineté étatique, droit des nations à s'allier, fin de la suprématie impériale.",
    category: "Droit international"
  },
  {
    term: "Société des Nations (SDN)",
    definition: "Première organisation internationale créée en 1919, inaboutie en raison de l'absence américaine et de son incapacité à prévenir l'agression japonaise en Mandchourie.",
    category: "Organisations internationales"
  },
  {
    term: "Organisation des Nations Unies (ONU)",
    definition: "Créée en 1945 par la Charte de San Francisco, chargée du maintien de la paix internationale après l'échec de la SDN.",
    category: "Organisations internationales"
  },
  {
    term: "Convention de Genève (1949)",
    definition: "Socle du Droit International Humanitaire (DIH) : protection des civils et prisonniers de guerre, interdiction de la torture et des armes inhumaines.",
    category: "Droit humanitaire"
  },
  {
    term: "Protocoles additionnels (1977)",
    definition: "Complètent les Conventions de Genève : protection étendue des civils en temps de guerre, prohibition des armes causant des maux superflus.",
    category: "Droit humanitaire"
  },
  {
    term: "Arme nucléaire",
    definition: "Inhibition de l'affrontement direct entre grandes puissances, déplacement des conflits vers des guerres de basse intensité et conflits asymétriques.",
    category: "Dissuasion nucléaire"
  },
  {
    term: "Guerre par procuration",
    definition: "Selon Zbigniew Brzezinski : affrontement indirect entre puissances via des acteurs soutenus (États, groupes armés, proxies).",
    category: "Stratégies indirectes"
  },
  {
    term: "Complexe militaro-industriel",
    definition: "Système d'interdépendance entre forces armées, industries d'armement et décideurs politiques. Exemple : financement et maîtrise aux États-Unis.",
    category: "Économie de guerre"
  },
  {
    term: "Dilemme de sécurité",
    definition: "Plus une puissance accroît sa sécurité nationale, plus elle accroît l'insécurité globale pour les autres acteurs.",
    category: "Théories stratégiques"
  },
  {
    term: "Théorie de la paix démocratique",
    definition: "Selon Michael Doyle : les démocraties ne se font pas la guerre entre elles, favorisant la stabilité internationale.",
    category: "Théories stratégiques"
  },
  {
    term: "Terrorisme international",
    definition: "Attaques du 11 septembre 2001 (2 977 victimes), dissémination d'armes post-URSS, traité de non-prolifération (TNP) et dénucléarisation ukrainienne.",
    category: "Menaces asymétriques"
  },
  {
    term: "Guerres intra-étatiques",
    definition: "Conflits internes à un État, plus fréquents que les guerres interétatiques depuis la fin de la Seconde Guerre mondiale.",
    category: "Typologie des guerres"
  },
  {
    term: "Guerres asymétriques",
    definition: "Conflits entre acteurs de puissance très différente : État vs groupes armés, terroristes, guérillas...",
    category: "Typologie des guerres"
  },
  {
    term: "Guerres hybrides",
    definition: "Combinaison de méthodes conventionnelles, irrégulières et cybernétiques dans un même conflit.",
    category: "Typologie des guerres"
  },
  {
    term: "4e génération de guerre",
    definition: "Selon William S. Lind : guerre de l'information, mobilisation de tous les domaines (médias, économie, société civile...).",
    category: "Évolutions stratégiques"
  },
  {
    term: "Netwar",
    definition: "Selon Arquilla et Ronfeldt : guerre des réseaux, utilisant les technologies de l'information pour la coordination et la désinformation.",
    category: "Guerre numérique"
  },
  {
    term: "Guerre préventive vs préemptive",
    definition: "Préventive (illégale) : attaquer avant une menace imminente. Préemptive (légitime) : attaquer en réponse à une menace immédiate. Exemple : Irak 2003 présenté comme préemptive.",
    category: "Doctrine militaire"
  },
  {
    term: "Doctrine zéro mort",
    definition: "Guerre propre utilisant drones et robotisation pour minimiser les pertes humaines, créant un monde post-héroïque selon Edward Luttwak.",
    category: "Évolutions technologiques"
  },
  {
    term: "RMA (Révolution dans les Affaires Militaires)",
    definition: "Transformation des forces armées par les NTIC (Nouvelles Technologies de l'Information et de la Communication), créant un 'gap technologique'.",
    category: "Évolutions technologiques"
  },
  {
    term: "Privatisation de la guerre",
    definition: "Recours à des sociétés militaires privées (SMP) comme DynCorp, Academi/Blackwater ou Groupe Wagner (paramilitaire russe en Afrique et Ukraine).",
    category: "Économie de guerre"
  },
  {
    term: "Guerre économique",
    definition: "Selon Ali Laïdi : transposition de la géoéconomie au niveau des entreprises, contrôle des ressources rares comme avantage concurrentiel.",
    category: "Géoéconomie"
  },
  {
    term: "Cyberconflits",
    definition: "Le cyberspace comme 5e domaine de guerre : propagande, sabotage industriel, rançongiciels. Exemples : Stuxnet (2010), Pegasus, Wannacry/NotPetya (2017).",
    category: "Guerre numérique"
  },
  {
    term: "Guerre spatiale",
    definition: "Militarisation de l'espace extra-atmosphérique avec programmes comme Helios (France), Skynet (Royaume-Uni), FSW (États-Unis), Yaogan (Chine).",
    category: "Nouveaux domaines"
  },
  {
    term: "Nouveau cycle nucléaire",
    definition: "Essais nord-coréens, retrait américain du JCPoA (Plan d'Action Global Conjoints), égalisation des arsenaux et instabilités accrues.",
    category: "Armes de destruction massive"
  }
];

export const GeopoliticsFlashcardsGuerres: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire des guerres et conflits"
    subject="Géopolitique - Les guerres"
    idOffset={400}
  />
);

export default GeopoliticsFlashcardsGuerres;
