import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const MediaVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "Médias sociaux", english: "Social media", category: "Plateformes et réseaux" },
    { id: 2, french: "Plateforme numérique", english: "Digital platform", category: "Plateformes et réseaux" },
    { id: 3, french: "Réseau social", english: "Social network", category: "Plateformes et réseaux" },
    { id: 4, french: "Réseau global", english: "Global network", category: "Plateformes et réseaux" },
    { id: 5, french: "Réseau de confiance", english: "Trust network", category: "Plateformes et réseaux" },
    { id: 6, french: "Réseaux professionnels", english: "Professional networks", category: "Plateformes et réseaux" },
    { id: 7, french: "Réseaux d'information", english: "Information networks", category: "Plateformes et réseaux" },
    { id: 8, french: "Réseaux éducatifs", english: "Educational networks", category: "Plateformes et réseaux" },
    { id: 9, french: "Réseaux de communication", english: "Communication networks", category: "Plateformes et réseaux" },
    { id: 10, french: "Réseaux globaux d'influence", english: "Global influence networks", category: "Plateformes et réseaux" },

    { id: 11, french: "Influenceur", english: "Influencer", category: "Influence et contenus" },
    { id: 12, french: "Contenu viral", english: "Viral content", category: "Influence et contenus" },
    { id: 13, french: "Influence culturelle", english: "Cultural influence", category: "Influence et contenus" },
    { id: 14, french: "Influence politique", english: "Political influence", category: "Influence et contenus" },
    { id: 15, french: "Influence sociale", english: "Social influence", category: "Influence et contenus" },
    { id: 16, french: "Influence économique", english: "Economic influence", category: "Influence et contenus" },
    { id: 17, french: "Influence mondiale", english: "Global influence", category: "Influence et contenus" },
    { id: 18, french: "Influence psychologique", english: "Psychological influence", category: "Influence et contenus" },
    { id: 19, french: "Influence des algorithmes", english: "Algorithmic influence", category: "Influence et contenus" },
    { id: 20, french: "Influence des tendances", english: "Trend influence", category: "Influence et contenus" },

    { id: 21, french: "Désinformation", english: "Disinformation", category: "Désinformation et fact-checking" },
    { id: 22, french: "Fact-checking", english: "Fact-checking", category: "Désinformation et fact-checking" },
    { id: 23, french: "Fake news", english: "Fake news", category: "Désinformation et fact-checking" },
    { id: 24, french: "Rumeur", english: "Rumor", category: "Désinformation et fact-checking" },
    { id: 25, french: "Réseaux de désinformation", english: "Disinformation networks", category: "Désinformation et fact-checking" },
    { id: 26, french: "Propagande", english: "Propaganda", category: "Désinformation et fact-checking" },
    { id: 27, french: "Bulle informationnelle", english: "Filter bubble", category: "Désinformation et fact-checking" },
    { id: 28, french: "Algorithme", english: "Algorithm", category: "Désinformation et fact-checking" },
    { id: 29, french: "Censure", english: "Censorship", category: "Désinformation et fact-checking" },
    { id: 30, french: "Modération", english: "Moderation", category: "Désinformation et fact-checking" },

    { id: 31, french: "Liberté d'expression", english: "Freedom of speech", category: "Libertés et éthique" },
    { id: 32, french: "Vie privée", english: "Privacy", category: "Libertés et éthique" },
    { id: 33, french: "Éthique numérique", english: "Digital ethics", category: "Libertés et éthique" },
    { id: 34, french: "Éthique des médias", english: "Media ethics", category: "Libertés et éthique" },
    { id: 35, french: "Cyberéthique", english: "Cyberethics", category: "Libertés et éthique" },
    { id: 36, french: "Données personnelles", english: "Personal data", category: "Libertés et éthique" },
    { id: 37, french: "Surveillance numérique", english: "Digital surveillance", category: "Libertés et éthique" },
    { id: 38, french: "Réputation en ligne", english: "Online reputation", category: "Libertés et éthique" },
    { id: 39, french: "Controverse en ligne", english: "Online controversy", category: "Libertés et éthique" },
    { id: 40, french: "Contenu controversé", english: "Controversial content", category: "Libertés et éthique" },

    { id: 41, french: "Engagement", english: "Engagement", category: "Engagement et participation" },
    { id: 42, french: "Engagement civique", english: "Civic engagement", category: "Engagement et participation" },
    { id: 43, french: "Désengagement", english: "Disengagement", category: "Engagement et participation" },
    { id: 44, french: "Débat en ligne", english: "Online debate", category: "Engagement et participation" },
    { id: 45, french: "Communauté virtuelle", english: "Virtual community", category: "Engagement et participation" },
    { id: 46, french: "Réseaux d'opinion", english: "Opinion networks", category: "Engagement et participation" },
    { id: 47, french: "Réseaux militants", english: "Activist networks", category: "Engagement et participation" },
    { id: 48, french: "Réseaux de mobilisation", english: "Mobilization networks", category: "Engagement et participation" },
    { id: 49, french: "Réseaux de débat", english: "Debate networks", category: "Engagement et participation" },
    { id: 50, french: "Réseaux d'entraide", english: "Mutual aid networks", category: "Engagement et participation" },

    { id: 51, french: "Médias traditionnels", english: "Traditional media", category: "Contenu et médias" },
    { id: 52, french: "Médias alternatifs", english: "Alternative media", category: "Contenu et médias" },
    { id: 53, french: "Médias indépendants", english: "Independent media", category: "Contenu et médias" },
    { id: 54, french: "Médias locaux", english: "Local media", category: "Contenu et médias" },
    { id: 55, french: "Médias internationaux", english: "International media", category: "Contenu et médias" },
    { id: 56, french: "Médias de masse", english: "Mass media", category: "Contenu et médias" },
    { id: 57, french: "Médias spécialisés", english: "Specialized media", category: "Contenu et médias" },
    { id: 58, french: "Médias citoyens", english: "Citizen media", category: "Contenu et médias" },
    { id: 59, french: "Médias d'opinion", english: "Opinion media", category: "Contenu et médias" },
    { id: 60, french: "Médias visuels", english: "Visual media", category: "Contenu et médias" },

    { id: 61, french: "Contenu sponsorisé", english: "Sponsored content", category: "Types de contenu" },
    { id: 62, french: "Contenu généré par l'utilisateur", english: "User-generated content", category: "Types de contenu" },
    { id: 63, french: "Contenu éducatif", english: "Educational content", category: "Types de contenu" },
    { id: 64, french: "Contenu satirique", english: "Satirical content", category: "Types de contenu" },
    { id: 65, french: "Contenu politique", english: "Political content", category: "Types de contenu" },
    { id: 66, french: "Contenu interactif", english: "Interactive content", category: "Types de contenu" },
    { id: 67, french: "Contenu informatif", english: "Informative content", category: "Types de contenu" },
    { id: 68, french: "Contenu narratif", english: "Narrative content", category: "Types de contenu" },
    { id: 69, french: "Contenu engagé", english: "Engaged content", category: "Types de contenu" },
    { id: 70, french: "Mèmes", english: "Memes", category: "Types de contenu" },

    { id: 71, french: "Campagne virale", english: "Viral campaign", category: "Campagnes et viralité" },
    { id: 72, french: "Campagne sociale", english: "Social campaign", category: "Campagnes et viralité" },
    { id: 73, french: "Campagne de sensibilisation", english: "Awareness campaign", category: "Campagnes et viralité" },
    { id: 74, french: "Viralité", english: "Virality", category: "Campagnes et viralité" },
    { id: 75, french: "Trending topic", english: "Trending topic", category: "Campagnes et viralité" },
    { id: 76, french: "Buzz", english: "Buzz", category: "Campagnes et viralité" },
    { id: 77, french: "Médiatisation", english: "Media coverage", category: "Campagnes et viralité" },
    { id: 78, french: "Médiatisation politique", english: "Political media coverage", category: "Campagnes et viralité" },
    { id: 79, french: "Médiatisation environnementale", english: "Environmental media coverage", category: "Campagnes et viralité" },
    { id: 80, french: "Influence des hashtags", english: "Hashtag influence", category: "Campagnes et viralité" },

    { id: 81, french: "Cyberespace", english: "Cyberspace", category: "Cyberespace et culture numérique" },
    { id: 82, french: "Cyberculture", english: "Cyberculture", category: "Cyberespace et culture numérique" },
    { id: 83, french: "Cyberinfluence", english: "Cyberinfluence", category: "Cyberespace et culture numérique" },
    { id: 84, french: "Cyberinfluenceurs", english: "Cyberinfluencers", category: "Cyberespace et culture numérique" },
    { id: 85, french: "Cyberactivisme", english: "Cyberactivism", category: "Cyberespace et culture numérique" },
    { id: 86, french: "Cyberdéfense", english: "Cyberdefense", category: "Cyberespace et culture numérique" },
    { id: 87, french: "Cyberharcèlement", english: "Cyberbullying", category: "Cyberespace et culture numérique" },
    { id: 88, french: "Détox numérique", english: "Digital detox", category: "Cyberespace et culture numérique" },
    { id: 89, french: "Réseautage", english: "Networking", category: "Cyberespace et culture numérique" },
    { id: 90, french: "Médias participatifs", english: "Participatory media", category: "Cyberespace et culture numérique" },

    { id: 91, french: "Publicité ciblée", english: "Targeted advertising", category: "Publicité et marketing" },
    { id: 92, french: "Analyse de sentiment", english: "Sentiment analysis", category: "Publicité et marketing" },
    { id: 93, french: "Influence des célébrités", english: "Celebrity influence", category: "Publicité et marketing" },
    { id: 94, french: "Journalisme citoyen", english: "Citizen journalism", category: "Publicité et marketing" },
    { id: 95, french: "Polarisation", english: "Polarization", category: "Publicité et marketing" },
    { id: 96, french: "Influence des réseaux", english: "Network influence", category: "Publicité et marketing" },
    { id: 97, french: "Influence culturelle globale", english: "Global cultural influence", category: "Publicité et marketing" },
    { id: 98, french: "Médias numériques", english: "Digital media", category: "Publicité et marketing" },
    { id: 99, french: "Support networks", english: "Support networks", category: "Publicité et marketing" },
    { id: 100, french: "Réseaux sociaux professionnels", english: "Professional social networks", category: "Publicité et marketing" },

    // 11. Journalisme et rédaction / Journalism and Newsroom
    { id: 101, french: "Salle de rédaction", english: "Newsroom", category: "Journalisme et rédaction" },
    { id: 102, french: "Reportage", english: "Reporting", category: "Journalisme et rédaction" },
    { id: 103, french: "Enquête", english: "Investigative journalism", category: "Journalisme et rédaction" },
    { id: 104, french: "Déontologie", english: "Journalistic ethics", category: "Journalisme et rédaction" },
    { id: 105, french: "Source", english: "Source", category: "Journalisme et rédaction" },
    { id: 106, french: "Biais", english: "Bias", category: "Journalisme et rédaction" },
    { id: 107, french: "Titres accrocheurs", english: "Clickbait", category: "Journalisme et rédaction" },
    { id: 108, french: "Rectificatif", english: "Correction", category: "Journalisme et rédaction" },

    // 12. Modération et sécurité / Moderation and Safety
    { id: 109, french: "Modération de contenu", english: "Content moderation", category: "Modération et sécurité" },
    { id: 110, french: "Discours de haine", english: "Hate speech", category: "Modération et sécurité" },
    { id: 111, french: "Harceleur", english: "Troll", category: "Modération et sécurité" },
    { id: 112, french: "Automodération", english: "Automoderation", category: "Modération et sécurité" },
    { id: 113, french: "Étiquetage", english: "Labeling", category: "Modération et sécurité" },
    { id: 114, french: "Déréférencement", english: "Delisting", category: "Modération et sécurité" },

    // 13. Démocratie et espace public / Democracy and Public Sphere
    { id: 115, french: "Pluralisme", english: "Pluralism", category: "Démocratie et espace public" },
    { id: 116, french: "Débat public", english: "Public debate", category: "Démocratie et espace public" },
    { id: 117, french: "Chambre d'écho", english: "Echo chamber", category: "Démocratie et espace public" },
    { id: 118, french: "Doxa", english: "Doxa", category: "Démocratie et espace public" },
    { id: 119, french: "Censure privée", english: "Private censorship", category: "Démocratie et espace public" },
    { id: 120, french: "Manipulation", english: "Manipulation", category: "Démocratie et espace public" },

    // 14. Outils et formats numériques / Tools and Formats
    { id: 121, french: "Fil d'actualité", english: "News feed", category: "Outils et formats numériques" },
    { id: 122, french: "Filtre", english: "Filter", category: "Outils et formats numériques" },
    { id: 123, french: "Story", english: "Story", category: "Outils et formats numériques" },
    { id: 124, french: "Live", english: "Live stream", category: "Outils et formats numériques" },
    { id: 125, french: "Podcast", english: "Podcast", category: "Outils et formats numériques" },
    { id: 126, french: "Courte vidéo", english: "Short-form video", category: "Outils et formats numériques" },

    // 15. Mesure et algorithmes / Metrics and Algorithms
    { id: 127, french: "Taux d'engagement", english: "Engagement rate", category: "Mesure et algorithmes" },
    { id: 128, french: "Impressions", english: "Impressions", category: "Mesure et algorithmes" },
    { id: 129, french: "Portée", english: "Reach", category: "Mesure et algorithmes" },
    { id: 130, french: "Classement", english: "Ranking", category: "Mesure et algorithmes" },
    { id: 131, french: "Recommandation", english: "Recommendation", category: "Mesure et algorithmes" },
    { id: 132, french: "Optimisation", english: "Optimization", category: "Mesure et algorithmes" },

    // 16. Éducation aux médias / Media Literacy
    { id: 133, french: "Alphabétisation médiatique", english: "Media literacy", category: "Éducation aux médias" },
    { id: 134, french: "Vérification des faits", english: "Fact verification", category: "Éducation aux médias" },
    { id: 135, french: "Esprit critique", english: "Critical thinking", category: "Éducation aux médias" },
    { id: 136, french: "Biais de confirmation", english: "Confirmation bias", category: "Éducation aux médias" },
    { id: 137, french: "Contexte", english: "Context", category: "Éducation aux médias" },
    { id: 138, french: "Source crédible", english: "Credible source", category: "Éducation aux médias" },
    { id: 139, french: "Démystification", english: "Debunking", category: "Éducation aux médias" },
    { id: 140, french: "Renseignement en sources ouvertes", english: "Open-source intelligence (OSINT)", category: "Éducation aux médias" },
  ];

  const mapped = vocabularyData.map(({ category, french, english }) => ({ category, front: french, back: english }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mapped as any}
          title="Vocabulaire Médias et Réseaux (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default MediaVocabularyPage; 