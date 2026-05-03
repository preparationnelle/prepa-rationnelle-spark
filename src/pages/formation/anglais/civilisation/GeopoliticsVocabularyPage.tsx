import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const GeopoliticsVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "Diplomatie climatique", english: "Climate diplomacy", category: "Diplomatie et Coopération" },
    { id: 2, french: "Coopération internationale", english: "International cooperation", category: "Diplomatie et Coopération" },
    { id: 3, french: "Accord multilatéral", english: "Multilateral agreement", category: "Diplomatie et Coopération" },
    { id: 4, french: "Coopération bilatérale", english: "Bilateral cooperation", category: "Diplomatie et Coopération" },
    { id: 5, french: "Coopération régionale", english: "Regional cooperation", category: "Diplomatie et Coopération" },
    { id: 6, french: "Coopération transfrontalière", english: "Cross-border cooperation", category: "Diplomatie et Coopération" },
    { id: 7, french: "Coopération scientifique", english: "Scientific cooperation", category: "Diplomatie et Coopération" },
    { id: 8, french: "Coopération énergétique", english: "Energy cooperation", category: "Diplomatie et Coopération" },
    { id: 9, french: "Coopération multilatérale", english: "Multilateral cooperation", category: "Diplomatie et Coopération" },
    { id: 10, french: "Coopération humanitaire", english: "Humanitarian cooperation", category: "Diplomatie et Coopération" },

    { id: 11, french: "Souveraineté", english: "Sovereignty", category: "Souveraineté et Conflits" },
    { id: 12, french: "Conflit environnemental", english: "Environmental conflict", category: "Souveraineté et Conflits" },
    { id: 13, french: "Conflit hydrique", english: "Water conflict", category: "Souveraineté et Conflits" },
    { id: 14, french: "Conflit territorial", english: "Territorial conflict", category: "Souveraineté et Conflits" },
    { id: 15, french: "Conflit climatique", english: "Climate conflict", category: "Souveraineté et Conflits" },
    { id: 16, french: "Conflit économique", english: "Economic conflict", category: "Souveraineté et Conflits" },
    { id: 17, french: "Conflit de ressources", english: "Resource conflict", category: "Souveraineté et Conflits" },
    { id: 18, french: "Tensions géopolitiques", english: "Geopolitical tensions", category: "Souveraineté et Conflits" },
    { id: 19, french: "Crise migratoire", english: "Migration crisis", category: "Souveraineté et Conflits" },
    { id: 20, french: "Crise alimentaire", english: "Food crisis", category: "Souveraineté et Conflits" },

    { id: 21, french: "Géopolitique de l'énergie", english: "Energy geopolitics", category: "Énergie et Ressources" },
    { id: 22, french: "Ressources stratégiques", english: "Strategic resources", category: "Énergie et Ressources" },
    { id: 23, french: "Accès à l'eau", english: "Water access", category: "Énergie et Ressources" },
    { id: 24, french: "Sécurité énergétique", english: "Energy security", category: "Énergie et Ressources" },
    { id: 25, french: "Gestion des ressources", english: "Resource management", category: "Énergie et Ressources" },
    { id: 26, french: "Compétition énergétique", english: "Energy competition", category: "Énergie et Ressources" },
    { id: 27, french: "Géopolitique de l'eau", english: "Water geopolitics", category: "Énergie et Ressources" },
    { id: 28, french: "Ressources partagées", english: "Shared resources", category: "Énergie et Ressources" },
    { id: 29, french: "Accès aux ressources", english: "Resource access", category: "Énergie et Ressources" },
    { id: 30, french: "Sécurité hydrique", english: "Water security", category: "Énergie et Ressources" },

    { id: 31, french: "Sécurité alimentaire", english: "Food security", category: "Sécurité et Gouvernance" },
    { id: 32, french: "Sécurité environnementale", english: "Environmental security", category: "Sécurité et Gouvernance" },
    { id: 33, french: "Sécurité climatique", english: "Climate security", category: "Sécurité et Gouvernance" },
    { id: 34, french: "Sécurité globale", english: "Global security", category: "Sécurité et Gouvernance" },
    { id: 35, french: "Sécurité des ressources", english: "Resource security", category: "Sécurité et Gouvernance" },
    { id: 36, french: "Gouvernance mondiale", english: "Global governance", category: "Sécurité et Gouvernance" },
    { id: 37, french: "Gouvernance régionale", english: "Regional governance", category: "Sécurité et Gouvernance" },
    { id: 38, french: "Régulation mondiale", english: "Global regulation", category: "Sécurité et Gouvernance" },
    { id: 39, french: "Régimes internationaux", english: "International regimes", category: "Sécurité et Gouvernance" },
    { id: 40, french: "Gestion des crises", english: "Crisis management", category: "Sécurité et Gouvernance" },

    { id: 41, french: "Soft power", english: "Soft power", category: "Influence et Pouvoir" },
    { id: 42, french: "Hard power", english: "Hard power", category: "Influence et Pouvoir" },
    { id: 43, french: "Influence géopolitique", english: "Geopolitical influence", category: "Influence et Pouvoir" },
    { id: 44, french: "Influence régionale", english: "Regional influence", category: "Influence et Pouvoir" },
    { id: 45, french: "Influence environnementale", english: "Environmental influence", category: "Influence et Pouvoir" },
    { id: 46, french: "Influence mondiale", english: "Global influence", category: "Influence et Pouvoir" },
    { id: 47, french: "Leadership climatique", english: "Climate leadership", category: "Influence et Pouvoir" },
    { id: 48, french: "Leadership régional", english: "Regional leadership", category: "Influence et Pouvoir" },
    { id: 49, french: "Compétition économique", english: "Economic competition", category: "Influence et Pouvoir" },
    { id: 50, french: "Compétition technologique", english: "Technological competition", category: "Influence et Pouvoir" },

    { id: 51, french: "Organisations internationales", english: "International organizations", category: "Organisations et Accords" },
    { id: 52, french: "Sommet climatique", english: "Climate summit", category: "Organisations et Accords" },
    { id: 53, french: "Traité international", english: "International treaty", category: "Organisations et Accords" },
    { id: 54, french: "Accord régional", english: "Regional agreement", category: "Organisations et Accords" },
    { id: 55, french: "Accords commerciaux", english: "Trade agreements", category: "Organisations et Accords" },
    { id: 56, french: "Partenariat international", english: "International partnership", category: "Organisations et Accords" },
    { id: 57, french: "Alliances stratégiques", english: "Strategic alliances", category: "Organisations et Accords" },
    { id: 58, french: "Partenariat stratégique", english: "Strategic partnership", category: "Organisations et Accords" },
    { id: 59, french: "Accord de coopération", english: "Cooperation agreement", category: "Organisations et Accords" },
    { id: 60, french: "Pacte environnemental", english: "Environmental pact", category: "Organisations et Accords" },

    { id: 61, french: "Agenda 2030", english: "Agenda 2030", category: "Développement et Objectifs" },
    { id: 62, french: "Objectifs de développement durable", english: "Sustainable Development Goals (SDGs)", category: "Développement et Objectifs" },
    { id: 63, french: "Développement durable", english: "Sustainable development", category: "Développement et Objectifs" },
    { id: 64, french: "Transition écologique", english: "Ecological transition", category: "Développement et Objectifs" },
    { id: 65, french: "Gestion des catastrophes", english: "Disaster management", category: "Développement et Objectifs" },
    { id: 66, french: "Gestion des migrations", english: "Migration management", category: "Développement et Objectifs" },
    { id: 67, french: "Gestion transnationale", english: "Transnational management", category: "Développement et Objectifs" },
    { id: 68, french: "Gestion des risques", english: "Risk management", category: "Développement et Objectifs" },
    { id: 69, french: "Gestion des tensions", english: "Tension management", category: "Développement et Objectifs" },
    { id: 70, french: "Planification écologique", english: "Ecological planning", category: "Développement et Objectifs" },

    { id: 71, french: "Solidarité internationale", english: "International solidarity", category: "Solidarité et Équité" },
    { id: 72, french: "Solidarité climatique", english: "Climate solidarity", category: "Solidarité et Équité" },
    { id: 73, french: "Solidarité régionale", english: "Regional solidarity", category: "Solidarité et Équité" },
    { id: 74, french: "Équité climatique", english: "Climate equity", category: "Solidarité et Équité" },
    { id: 75, french: "Équité internationale", english: "International equity", category: "Solidarité et Équité" },
    { id: 76, french: "Équité environnementale", english: "Environmental equity", category: "Solidarité et Équité" },
    { id: 77, french: "Inégalités environnementales", english: "Environmental inequalities", category: "Solidarité et Équité" },
    { id: 78, french: "Partenariats Nord-Sud", english: "North-South partnerships", category: "Solidarité et Équité" },
    { id: 79, french: "Dialogue Nord-Sud", english: "North-South dialogue", category: "Solidarité et Équité" },
    { id: 80, french: "Résilience géopolitique", english: "Geopolitical resilience", category: "Solidarité et Équité" },

    { id: 81, french: "Diplomatie économique", english: "Economic diplomacy", category: "Diplomatie et Dialogue" },
    { id: 82, french: "Diplomatie multilatérale", english: "Multilateral diplomacy", category: "Diplomatie et Dialogue" },
    { id: 83, french: "Diplomatie verte", english: "Green diplomacy", category: "Diplomatie et Dialogue" },
    { id: 84, french: "Diplomatie scientifique", english: "Scientific diplomacy", category: "Diplomatie et Dialogue" },
    { id: 85, french: "Diplomatie culturelle", english: "Cultural diplomacy", category: "Diplomatie et Dialogue" },
    { id: 86, french: "Diplomatie énergétique", english: "Energy diplomacy", category: "Diplomatie et Dialogue" },
    { id: 87, french: "Négociations climatiques", english: "Climate negotiations", category: "Diplomatie et Dialogue" },
    { id: 88, french: "Dialogue multilatéral", english: "Multilateral dialogue", category: "Diplomatie et Dialogue" },
    { id: 89, french: "Dialogue international", english: "International dialogue", category: "Diplomatie et Dialogue" },
    { id: 90, french: "Dialogue climatique", english: "Climate dialogue", category: "Diplomatie et Dialogue" },

    { id: 91, french: "Crise écologique", english: "Ecological crisis", category: "Crise et Résolution" },
    { id: 92, french: "Crise humanitaire", english: "Humanitarian crisis", category: "Crise et Résolution" },
    { id: 93, french: "Sécurité alimentaire mondiale", english: "Global food security", category: "Crise et Résolution" },
    { id: 94, french: "Réfugiés climatiques", english: "Climate refugees", category: "Crise et Résolution" },
    { id: 95, french: "Frontières écologiques", english: "Ecological borders", category: "Crise et Résolution" },
    { id: 96, french: "Médiation internationale", english: "International mediation", category: "Crise et Résolution" },
    { id: 97, french: "Résolution de conflits", english: "Conflict resolution", category: "Crise et Résolution" },
    { id: 98, french: "Fonds climatique", english: "Climate fund", category: "Crise et Résolution" },
    { id: 99, french: "Sanctions environnementales", english: "Environmental sanctions", category: "Crise et Résolution" },
    { id: 100, french: "Plan d'urgence", english: "Emergency plan", category: "Crise et Résolution" }
  ];

  const mapped = vocabularyData.map(({ category, french, english }) => ({ category, front: french, back: english }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mapped as any}
          title="Géopolitique et Relations internationales (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default GeopoliticsVocabularyPage; 