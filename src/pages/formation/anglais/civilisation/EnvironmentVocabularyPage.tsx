import React from 'react';
import { Leaf } from 'lucide-react';
import { EnglishVocabularyTemplate, EnglishVocabularyItem } from '@/components/formation/anglais/EnglishVocabularyTemplate';

const vocabularyData: EnglishVocabularyItem[] = [
  { french: "Changement climatique", english: "Climate Change", category: "Climate Change" },
  { french: "Réchauffement climatique", english: "Global warming", category: "Climate Change" },
  { french: "Effet de serre", english: "Greenhouse effect", category: "Climate Change" },
  { french: "Gaz à effet de serre", english: "Greenhouse gas", category: "Climate Change" },
  { french: "Dioxyde de carbone", english: "Carbon dioxide", category: "Climate Change" },
  { french: "Méthane", english: "Methane", category: "Climate Change" },
  { french: "Émissions", english: "Emissions", category: "Climate Change" },
  { french: "Carbone neutre", english: "Carbon neutral", category: "Climate Change" },
  { french: "Empreinte carbone", english: "Carbon footprint", category: "Climate Change" },
  { french: "Dérèglement climatique", english: "Climate disruption", category: "Climate Change" },
  { french: "Atténuation", english: "Mitigation", category: "Climate Change" },

  { french: "Énergie renouvelable", english: "Renewable energy", category: "Energy" },
  { french: "Énergie fossile", english: "Fossil fuel", category: "Energy" },
  { french: "Énergie solaire", english: "Solar energy", category: "Energy" },
  { french: "Énergie éolienne", english: "Wind energy", category: "Energy" },
  { french: "Hydroélectricité", english: "Hydropower", category: "Energy" },
  { french: "Biomasse", english: "Biomass", category: "Energy" },
  { french: "Géothermie", english: "Geothermal energy", category: "Energy" },
  { french: "Efficacité énergétique", english: "Energy efficiency", category: "Energy" },
  { french: "Transition énergétique", english: "Energy transition", category: "Energy" },
  { french: "Combustible", english: "Fuel", category: "Energy" },

  { french: "Biodiversité", english: "Biodiversity", category: "Biodiversity" },
  { french: "Écosystème", english: "Ecosystem", category: "Biodiversity" },
  { french: "Espèce menacée", english: "Endangered species", category: "Biodiversity" },
  { french: "Extinction", english: "Extinction", category: "Biodiversity" },
  { french: "Habitat", english: "Habitat", category: "Biodiversity" },
  { french: "Conservation", english: "Conservation", category: "Biodiversity" },
  { french: "Réserve naturelle", english: "Nature reserve", category: "Biodiversity" },
  { french: "Déforestation", english: "Deforestation", category: "Biodiversity" },
  { french: "Reforstation", english: "Reforestation", category: "Biodiversity" },
  { french: "Faune", english: "Wildlife", category: "Biodiversity" },

  { french: "Pollution", english: "Pollution", category: "Pollution" },
  { french: "Déchet", english: "Waste", category: "Pollution" },
  { french: "Plastique à usage unique", english: "Single-use plastic", category: "Pollution" },
  { french: "Recyclage", english: "Recycling", category: "Pollution" },
  { french: "Pollution atmosphérique", english: "Air pollution", category: "Pollution" },
  { french: "Pollution de l'eau", english: "Water pollution", category: "Pollution" },
  { french: "Contamination", english: "Contamination", category: "Pollution" },
  { french: "Microplastique", english: "Microplastic", category: "Pollution" },
  { french: "Décharge", english: "Landfill", category: "Pollution" },
  { french: "Incinération", english: "Incineration", category: "Pollution" },

  { french: "Ressource naturelle", english: "Natural resource", category: "Natural Resources" },
  { french: "Eau potable", english: "Drinking water", category: "Natural Resources" },
  { french: "Sol", english: "Soil", category: "Natural Resources" },
  { french: "Érosion", english: "Erosion", category: "Natural Resources" },
  { french: "Surexploitation", english: "Overexploitation", category: "Natural Resources" },
  { french: "Pénurie", english: "Scarcity", category: "Natural Resources" },
  { french: "Gestion durable", english: "Sustainable management", category: "Natural Resources" },
  { french: "Forêt", english: "Forest", category: "Natural Resources" },
  { french: "Minerai", english: "Mineral", category: "Natural Resources" },
  { french: "Pétrole", english: "Oil", category: "Natural Resources" },

  { french: "Développement durable", english: "Sustainable development", category: "Sustainable Development" },
  { french: "Économie circulaire", english: "Circular economy", category: "Sustainable Development" },
  { french: "Consommation responsable", english: "Responsible consumption", category: "Sustainable Development" },
  { french: "Éco-responsabilité", english: "Eco-responsibility", category: "Sustainable Development" },
  { french: "Durabilité", english: "Sustainability", category: "Sustainable Development" },
  { french: "Écologie", english: "Ecology", category: "Sustainable Development" },
  { french: "Équité", english: "Equity", category: "Sustainable Development" },
  { french: "Empreinte écologique", english: "Ecological footprint", category: "Sustainable Development" },
  { french: "Sobriété", english: "Sobriety", category: "Sustainable Development" },
  { french: "Résilience", english: "Resilience", category: "Sustainable Development" },

  { french: "Agriculture biologique", english: "Organic farming", category: "Agriculture" },
  { french: "Agriculture intensive", english: "Intensive farming", category: "Agriculture" },
  { french: "Pesticide", english: "Pesticide", category: "Agriculture" },
  { french: "Engrais", english: "Fertilizer", category: "Agriculture" },
  { french: "Dégradation des sols", english: "Soil degradation", category: "Agriculture" },
  { french: "Agroécologie", english: "Agroecology", category: "Agriculture" },
  { french: "Permaculture", english: "Permaculture", category: "Agriculture" },
  { french: "Irrigation", english: "Irrigation", category: "Agriculture" },
  { french: "Monoculture", english: "Monoculture", category: "Agriculture" },
  { french: "Biodiversité agricole", english: "Agricultural biodiversity", category: "Agriculture" },

  { french: "Urbanisation", english: "Urbanization", category: "Urbanization" },
  { french: "Ville durable", english: "Sustainable city", category: "Urbanization" },
  { french: "Mobilité verte", english: "Green mobility", category: "Urbanization" },
  { french: "Transport en commun", english: "Public transport", category: "Urbanization" },
  { french: "Pollution sonore", english: "Noise pollution", category: "Urbanization" },
  { french: "Îlot de chaleur", english: "Urban heat island", category: "Urbanization" },
  { french: "Espaces verts", english: "Green spaces", category: "Urbanization" },
  { french: "Éco-quartier", english: "Eco-district", category: "Urbanization" },
  { french: "Aménagement", english: "Planning", category: "Urbanization" },
  { french: "Densification", english: "Densification", category: "Urbanization" },

  { french: "Accord de Paris", english: "Paris Agreement", category: "Environmental Policies" },
  { french: "Protocole de Kyoto", english: "Kyoto Protocol", category: "Environmental Policies" },
  { french: "Réglementation", english: "Regulation", category: "Environmental Policies" },
  { french: "Taxe carbone", english: "Carbon tax", category: "Environmental Policies" },
  { french: "Subvention", english: "Subsidy", category: "Environmental Policies" },
  { french: "Accord international", english: "International agreement", category: "Environmental Policies" },
  { french: "Neutralité carbone", english: "Carbon neutrality", category: "Environmental Policies" },
  { french: "Législation", english: "Legislation", category: "Environmental Policies" },
  { french: "Objectifs climatiques", english: "Climate goals", category: "Environmental Policies" },
  { french: "Coopération", english: "Cooperation", category: "Environmental Policies" },

  { french: "Sécheresse", english: "Drought", category: "Natural Phenomena" },
  { french: "Inondation", english: "Flood", category: "Natural Phenomena" },
  { french: "Ouragan", english: "Hurricane", category: "Natural Phenomena" },
  { french: "Canicule", english: "Heatwave", category: "Natural Phenomena" },
  { french: "Fonte des glaces", english: "Ice melting", category: "Natural Phenomena" },
  { french: "Élévation du niveau de la mer", english: "Sea level rise", category: "Natural Phenomena" },
  { french: "Désertification", english: "Desertification", category: "Natural Phenomena" },
  { french: "Tempête", english: "Storm", category: "Natural Phenomena" },
  { french: "Glissement de terrain", english: "Landslide", category: "Natural Phenomena" },
  { french: "Catastrophe naturelle", english: "Natural disaster", category: "Natural Phenomena" },
];

const EnvironmentVocabularyPage = () => (
  <EnglishVocabularyTemplate
    themeLabel="Environment"
    themeSlug="environment"
    title="Vocabulaire Environnement (FR → EN)"
    Icon={Leaf}
    data={vocabularyData}
  />
);

export default EnvironmentVocabularyPage;
