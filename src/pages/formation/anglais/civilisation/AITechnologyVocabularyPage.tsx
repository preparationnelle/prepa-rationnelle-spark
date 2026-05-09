import React from 'react';
import { Cpu } from 'lucide-react';
import { EnglishVocabularyTemplate, EnglishVocabularyItem } from '@/components/formation/anglais/EnglishVocabularyTemplate';

const vocabularyData: EnglishVocabularyItem[] = [
  // 1. Technologies de base / Basic Technologies
  { french: "Ordinateur", english: "Computer", category: "Technologies de base" },
  { french: "Microprocesseur", english: "Microprocessor", category: "Technologies de base" },
  { french: "Puce électronique", english: "Chip", category: "Technologies de base" },
  { french: "Matériel informatique", english: "Hardware", category: "Technologies de base" },
  { french: "Logiciel", english: "Software", category: "Technologies de base" },
  { french: "Système d'exploitation", english: "Operating system", category: "Technologies de base" },
  { french: "Algorithme", english: "Algorithm", category: "Technologies de base" },
  { french: "Base de données", english: "Database", category: "Technologies de base" },
  { french: "Serveur", english: "Server", category: "Technologies de base" },
  { french: "Réseau", english: "Network", category: "Technologies de base" },

  // 2. Internet et numérique / Internet and Digital
  { french: "Internet", english: "Internet", category: "Internet et numérique" },
  { french: "Moteur de recherche", english: "Search engine", category: "Internet et numérique" },
  { french: "Site web", english: "Website", category: "Internet et numérique" },
  { french: "Plateforme", english: "Platform", category: "Internet et numérique" },
  { french: "Réseaux sociaux", english: "Social media", category: "Internet et numérique" },
  { french: "Cloud computing", english: "Cloud computing", category: "Internet et numérique" },
  { french: "Hébergement", english: "Hosting", category: "Internet et numérique" },
  { french: "Adresse IP", english: "IP address", category: "Internet et numérique" },
  { french: "Navigateur", english: "Browser", category: "Internet et numérique" },
  { french: "Bande passante", english: "Bandwidth", category: "Internet et numérique" },

  // 3. Intelligence artificielle / Artificial Intelligence
  { french: "Intelligence artificielle", english: "Artificial intelligence (AI)", category: "Intelligence artificielle" },
  { french: "Apprentissage automatique", english: "Machine learning", category: "Intelligence artificielle" },
  { french: "Apprentissage profond", english: "Deep learning", category: "Intelligence artificielle" },
  { french: "Réseau de neurones", english: "Neural network", category: "Intelligence artificielle" },
  { french: "Données", english: "Data", category: "Intelligence artificielle" },
  { french: "Données massives", english: "Big data", category: "Intelligence artificielle" },
  { french: "Traitement du langage naturel", english: "Natural language processing (NLP)", category: "Intelligence artificielle" },
  { french: "Vision par ordinateur", english: "Computer vision", category: "Intelligence artificielle" },
  { french: "Robotique", english: "Robotics", category: "Intelligence artificielle" },
  { french: "Automatisation", english: "Automation", category: "Intelligence artificielle" },

  // 4. Outils et usages de l'IA / AI Tools and Applications
  { french: "Chatbot", english: "Chatbot", category: "Outils et usages de l'IA" },
  { french: "Assistant virtuel", english: "Virtual assistant", category: "Outils et usages de l'IA" },
  { french: "Traduction automatique", english: "Machine translation", category: "Outils et usages de l'IA" },
  { french: "Reconnaissance faciale", english: "Facial recognition", category: "Outils et usages de l'IA" },
  { french: "Génération de texte", english: "Text generation", category: "Outils et usages de l'IA" },
  { french: "Synthèse vocale", english: "Speech synthesis", category: "Outils et usages de l'IA" },
  { french: "Voix artificielle", english: "Artificial voice", category: "Outils et usages de l'IA" },
  { french: "Véhicule autonome", english: "Self-driving car", category: "Outils et usages de l'IA" },
  { french: "Drone", english: "Drone", category: "Outils et usages de l'IA" },
  { french: "Robot humanoïde", english: "Humanoid robot", category: "Outils et usages de l'IA" },

  // 5. Sécurité et risques / Security and Risks
  { french: "Cybersécurité", english: "Cybersecurity", category: "Sécurité et risques" },
  { french: "Hameçonnage", english: "Phishing", category: "Sécurité et risques" },
  { french: "Piratage", english: "Hacking", category: "Sécurité et risques" },
  { french: "Cyberattaque", english: "Cyberattack", category: "Sécurité et risques" },
  { french: "Malware", english: "Malware", category: "Sécurité et risques" },
  { french: "Ransomware", english: "Ransomware", category: "Sécurité et risques" },
  { french: "Virus informatique", english: "Computer virus", category: "Sécurité et risques" },
  { french: "Protection des données", english: "Data protection", category: "Sécurité et risques" },
  { french: "Vie privée", english: "Privacy", category: "Sécurité et risques" },
  { french: "Anonymat", english: "Anonymity", category: "Sécurité et risques" },

  // 6. Enjeux économiques / Economic Issues
  { french: "Innovation", english: "Innovation", category: "Enjeux économiques" },
  { french: "Disruption", english: "Disruption", category: "Enjeux économiques" },
  { french: "Start-up", english: "Start-up", category: "Enjeux économiques" },
  { french: "Licorne (entreprise valorisée >1 Md$)", english: "Unicorn", category: "Enjeux économiques" },
  { french: "Capital-risque", english: "Venture capital", category: "Enjeux économiques" },
  { french: "Bourse technologique", english: "Tech stock market", category: "Enjeux économiques" },
  { french: "GAFAM", english: "Big Tech (Google, Apple, Facebook, Amazon, Microsoft)", category: "Enjeux économiques" },
  { french: "Licences", english: "Licenses", category: "Enjeux économiques" },
  { french: "Propriété intellectuelle", english: "Intellectual property", category: "Enjeux économiques" },
  { french: "Brevet", english: "Patent", category: "Enjeux économiques" },

  // 7. Enjeux sociaux / Social Issues
  { french: "Transformation numérique", english: "Digital transformation", category: "Enjeux sociaux" },
  { french: "Télétravail", english: "Remote work", category: "Enjeux sociaux" },
  { french: "Plateformes de streaming", english: "Streaming platforms", category: "Enjeux sociaux" },
  { french: "E-commerce", english: "E-commerce", category: "Enjeux sociaux" },
  { french: "Travail automatisé", english: "Automated work", category: "Enjeux sociaux" },
  { french: "Destruction d'emplois", english: "Job destruction", category: "Enjeux sociaux" },
  { french: "Création d'emplois", english: "Job creation", category: "Enjeux sociaux" },
  { french: "Révolution numérique", english: "Digital revolution", category: "Enjeux sociaux" },
  { french: "Inclusion numérique", english: "Digital inclusion", category: "Enjeux sociaux" },
  { french: "Fracture numérique", english: "Digital divide", category: "Enjeux sociaux" },

  // 8. Éthique et politique / Ethics and Politics
  { french: "Biais algorithmique", english: "Algorithmic bias", category: "Éthique et politique" },
  { french: "Discrimination", english: "Discrimination", category: "Éthique et politique" },
  { french: "Régulation", english: "Regulation", category: "Éthique et politique" },
  { french: "Législation", english: "Legislation", category: "Éthique et politique" },
  { french: "Surveillance de masse", english: "Mass surveillance", category: "Éthique et politique" },
  { french: "Dérive autoritaire", english: "Authoritarian drift", category: "Éthique et politique" },
  { french: "Transparence", english: "Transparency", category: "Éthique et politique" },
  { french: "Responsabilité", english: "Accountability", category: "Éthique et politique" },
  { french: "Confiance", english: "Trust", category: "Éthique et politique" },
  { french: "Protection des mineurs", english: "Child protection", category: "Éthique et politique" },

  // 9. Technologies émergentes / Emerging Technologies
  { french: "Métavers", english: "Metaverse", category: "Technologies émergentes" },
  { french: "Réalité virtuelle", english: "Virtual reality (VR)", category: "Technologies émergentes" },
  { french: "Réalité augmentée", english: "Augmented reality (AR)", category: "Technologies émergentes" },
  { french: "Réalité mixte", english: "Mixed reality", category: "Technologies émergentes" },
  { french: "Internet des objets", english: "Internet of Things (IoT)", category: "Technologies émergentes" },
  { french: "5G", english: "5G", category: "Technologies émergentes" },
  { french: "Informatique quantique", english: "Quantum computing", category: "Technologies émergentes" },
  { french: "Chaîne de blocs", english: "Blockchain", category: "Technologies émergentes" },
  { french: "Cryptomonnaie", english: "Cryptocurrency", category: "Technologies émergentes" },
  { french: "NFT (jeton non fongible)", english: "NFT (Non-Fungible Token)", category: "Technologies émergentes" },

  // 10. Prospective et futur / Future and Prospects
  { french: "Futur du travail", english: "Future of work", category: "Prospective et futur" },
  { french: "Singularité technologique", english: "Technological singularity", category: "Prospective et futur" },
  { french: "Transhumanisme", english: "Transhumanism", category: "Prospective et futur" },
  { french: "Augmentation humaine", english: "Human enhancement", category: "Prospective et futur" },
  { french: "Biotechnologies", english: "Biotechnologies", category: "Prospective et futur" },
  { french: "Génétique", english: "Genetics", category: "Prospective et futur" },
  { french: "Nanotechnologies", english: "Nanotechnologies", category: "Prospective et futur" },
  { french: "Énergie renouvelable", english: "Renewable energy", category: "Prospective et futur" },
  { french: "Ville intelligente", english: "Smart city", category: "Prospective et futur" },
  { french: "Développement durable", english: "Sustainable development", category: "Prospective et futur" },
];

const AITechnologyVocabularyPage = () => (
  <EnglishVocabularyTemplate
    themeLabel="AI & Technology"
    themeSlug="ai-technology"
    title="Vocabulaire IA et Technologie (FR → EN)"
    Icon={Cpu}
    data={vocabularyData}
  />
);

export default AITechnologyVocabularyPage;
