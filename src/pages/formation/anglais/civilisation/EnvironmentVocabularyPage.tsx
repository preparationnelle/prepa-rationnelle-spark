import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const EnvironmentVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "Changement climatique", english: "Climate Change", category: "Climate Change" },
    { id: 2, french: "Réchauffement climatique", english: "Global warming", category: "Climate Change" },
    { id: 3, french: "Effet de serre", english: "Greenhouse effect", category: "Climate Change" },
    { id: 4, french: "Gaz à effet de serre", english: "Greenhouse gas", category: "Climate Change" },
    { id: 5, french: "Dioxyde de carbone", english: "Carbon dioxide", category: "Climate Change" },
    { id: 6, french: "Méthane", english: "Methane", category: "Climate Change" },
    { id: 7, french: "Émissions", english: "Emissions", category: "Climate Change" },
    { id: 8, french: "Carbone neutre", english: "Carbon neutral", category: "Climate Change" },
    { id: 9, french: "Empreinte carbone", english: "Carbon footprint", category: "Climate Change" },
    { id: 10, french: "Dérèglement climatique", english: "Climate disruption", category: "Climate Change" },
    { id: 11, french: "Atténuation", english: "Mitigation", category: "Climate Change" },

    { id: 12, french: "Énergie renouvelable", english: "Renewable energy", category: "Energy" },
    { id: 13, french: "Énergie fossile", english: "Fossil fuel", category: "Energy" },
    { id: 14, french: "Énergie solaire", english: "Solar energy", category: "Energy" },
    { id: 15, french: "Énergie éolienne", english: "Wind energy", category: "Energy" },
    { id: 16, french: "Hydroélectricité", english: "Hydropower", category: "Energy" },
    { id: 17, french: "Biomasse", english: "Biomass", category: "Energy" },
    { id: 18, french: "Géothermie", english: "Geothermal energy", category: "Energy" },
    { id: 19, french: "Efficacité énergétique", english: "Energy efficiency", category: "Energy" },
    { id: 20, french: "Transition énergétique", english: "Energy transition", category: "Energy" },
    { id: 21, french: "Combustible", english: "Fuel", category: "Energy" },

    { id: 22, french: "Biodiversité", english: "Biodiversity", category: "Biodiversity" },
    { id: 23, french: "Écosystème", english: "Ecosystem", category: "Biodiversity" },
    { id: 24, french: "Espèce menacée", english: "Endangered species", category: "Biodiversity" },
    { id: 25, french: "Extinction", english: "Extinction", category: "Biodiversity" },
    { id: 26, french: "Habitat", english: "Habitat", category: "Biodiversity" },
    { id: 27, french: "Conservation", english: "Conservation", category: "Biodiversity" },
    { id: 28, french: "Réserve naturelle", english: "Nature reserve", category: "Biodiversity" },
    { id: 29, french: "Déforestation", english: "Deforestation", category: "Biodiversity" },
    { id: 30, french: "Reforstation", english: "Reforestation", category: "Biodiversity" },
    { id: 31, french: "Faune", english: "Wildlife", category: "Biodiversity" },

    { id: 32, french: "Pollution", english: "Pollution", category: "Pollution" },
    { id: 33, french: "Déchet", english: "Waste", category: "Pollution" },
    { id: 34, french: "Plastique à usage unique", english: "Single-use plastic", category: "Pollution" },
    { id: 35, french: "Recyclage", english: "Recycling", category: "Pollution" },
    { id: 36, french: "Pollution atmosphérique", english: "Air pollution", category: "Pollution" },
    { id: 37, french: "Pollution de l'eau", english: "Water pollution", category: "Pollution" },
    { id: 38, french: "Contamination", english: "Contamination", category: "Pollution" },
    { id: 39, french: "Microplastique", english: "Microplastic", category: "Pollution" },
    { id: 40, french: "Décharge", english: "Landfill", category: "Pollution" },
    { id: 41, french: "Incinération", english: "Incineration", category: "Pollution" },

    { id: 42, french: "Ressource naturelle", english: "Natural resource", category: "Natural Resources" },
    { id: 43, french: "Eau potable", english: "Drinking water", category: "Natural Resources" },
    { id: 44, french: "Sol", english: "Soil", category: "Natural Resources" },
    { id: 45, french: "Érosion", english: "Erosion", category: "Natural Resources" },
    { id: 46, french: "Surexploitation", english: "Overexploitation", category: "Natural Resources" },
    { id: 47, french: "Pénurie", english: "Scarcity", category: "Natural Resources" },
    { id: 48, french: "Gestion durable", english: "Sustainable management", category: "Natural Resources" },
    { id: 49, french: "Forêt", english: "Forest", category: "Natural Resources" },
    { id: 50, french: "Minerai", english: "Mineral", category: "Natural Resources" },
    { id: 51, french: "Pétrole", english: "Oil", category: "Natural Resources" },

    { id: 52, french: "Développement durable", english: "Sustainable development", category: "Sustainable Development" },
    { id: 53, french: "Économie circulaire", english: "Circular economy", category: "Sustainable Development" },
    { id: 54, french: "Consommation responsable", english: "Responsible consumption", category: "Sustainable Development" },
    { id: 55, french: "Éco-responsabilité", english: "Eco-responsibility", category: "Sustainable Development" },
    { id: 56, french: "Durabilité", english: "Sustainability", category: "Sustainable Development" },
    { id: 57, french: "Écologie", english: "Ecology", category: "Sustainable Development" },
    { id: 58, french: "Équité", english: "Equity", category: "Sustainable Development" },
    { id: 59, french: "Empreinte écologique", english: "Ecological footprint", category: "Sustainable Development" },
    { id: 60, french: "Sobriété", english: "Sobriety", category: "Sustainable Development" },
    { id: 61, french: "Résilience", english: "Resilience", category: "Sustainable Development" },

    { id: 62, french: "Agriculture biologique", english: "Organic farming", category: "Agriculture" },
    { id: 63, french: "Agriculture intensive", english: "Intensive farming", category: "Agriculture" },
    { id: 64, french: "Pesticide", english: "Pesticide", category: "Agriculture" },
    { id: 65, french: "Engrais", english: "Fertilizer", category: "Agriculture" },
    { id: 66, french: "Dégradation des sols", english: "Soil degradation", category: "Agriculture" },
    { id: 67, french: "Agroécologie", english: "Agroecology", category: "Agriculture" },
    { id: 68, french: "Permaculture", english: "Permaculture", category: "Agriculture" },
    { id: 69, french: "Irrigation", english: "Irrigation", category: "Agriculture" },
    { id: 70, french: "Monoculture", english: "Monoculture", category: "Agriculture" },
    { id: 71, french: "Biodiversité agricole", english: "Agricultural biodiversity", category: "Agriculture" },

    { id: 72, french: "Urbanisation", english: "Urbanization", category: "Urbanization" },
    { id: 73, french: "Ville durable", english: "Sustainable city", category: "Urbanization" },
    { id: 74, french: "Mobilité verte", english: "Green mobility", category: "Urbanization" },
    { id: 75, french: "Transport en commun", english: "Public transport", category: "Urbanization" },
    { id: 76, french: "Pollution sonore", english: "Noise pollution", category: "Urbanization" },
    { id: 77, french: "Îlot de chaleur", english: "Urban heat island", category: "Urbanization" },
    { id: 78, french: "Espaces verts", english: "Green spaces", category: "Urbanization" },
    { id: 79, french: "Éco-quartier", english: "Eco-district", category: "Urbanization" },
    { id: 80, french: "Aménagement", english: "Planning", category: "Urbanization" },
    { id: 81, french: "Densification", english: "Densification", category: "Urbanization" },

    { id: 82, french: "Accord de Paris", english: "Paris Agreement", category: "Environmental Policies" },
    { id: 83, french: "Protocole de Kyoto", english: "Kyoto Protocol", category: "Environmental Policies" },
    { id: 84, french: "Réglementation", english: "Regulation", category: "Environmental Policies" },
    { id: 85, french: "Taxe carbone", english: "Carbon tax", category: "Environmental Policies" },
    { id: 86, french: "Subvention", english: "Subsidy", category: "Environmental Policies" },
    { id: 87, french: "Accord international", english: "International agreement", category: "Environmental Policies" },
    { id: 88, french: "Neutralité carbone", english: "Carbon neutrality", category: "Environmental Policies" },
    { id: 89, french: "Législation", english: "Legislation", category: "Environmental Policies" },
    { id: 90, french: "Objectifs climatiques", english: "Climate goals", category: "Environmental Policies" },
    { id: 91, french: "Coopération", english: "Cooperation", category: "Environmental Policies" },

    { id: 92, french: "Sécheresse", english: "Drought", category: "Natural Phenomena" },
    { id: 93, french: "Inondation", english: "Flood", category: "Natural Phenomena" },
    { id: 94, french: "Ouragan", english: "Hurricane", category: "Natural Phenomena" },
    { id: 95, french: "Canicule", english: "Heatwave", category: "Natural Phenomena" },
    { id: 96, french: "Fonte des glaces", english: "Ice melting", category: "Natural Phenomena" },
    { id: 97, french: "Élévation du niveau de la mer", english: "Sea level rise", category: "Natural Phenomena" },
    { id: 98, french: "Désertification", english: "Desertification", category: "Natural Phenomena" },
    { id: 99, french: "Tempête", english: "Storm", category: "Natural Phenomena" },
    { id: 100, french: "Glissement de terrain", english: "Landslide", category: "Natural Phenomena" },
    { id: 101, french: "Catastrophe naturelle", english: "Natural disaster", category: "Natural Phenomena" }
  ];

  const mapped = vocabularyData.map(({ category, french, english }) => ({ category, front: french, back: english }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mapped as any}
          title="Vocabulaire Environnement (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default EnvironmentVocabularyPage; 