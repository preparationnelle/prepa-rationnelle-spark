import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const PoliticsVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "Système politique", english: "Political system", category: "Political System" },
    { id: 2, french: "Démocratie", english: "Democracy", category: "Political System" },
    { id: 3, french: "République", english: "Republic", category: "Political System" },
    { id: 4, french: "Monarchie constitutionnelle", english: "Constitutional monarchy", category: "Political System" },
    { id: 5, french: "Séparation des pouvoirs", english: "Separation of powers", category: "Political System" },
    { id: 6, french: "Checks and balances", english: "Checks and balances", category: "Political System" },
    { id: 7, french: "Fédéralisme", english: "Federalism", category: "Political System" },
    { id: 8, french: "Décentralisation", english: "Decentralization", category: "Political System" },
    { id: 9, french: "État de droit", english: "Rule of law", category: "Political System" },
    { id: 10, french: "Constitution", english: "Constitution", category: "Political System" },

    { id: 11, french: "Parti politique", english: "Political party", category: "Political Parties" },
    { id: 12, french: "Parti démocrate", english: "Democratic Party", category: "Political Parties" },
    { id: 13, french: "Parti républicain", english: "Republican Party", category: "Political Parties" },
    { id: 14, french: "Parti travailliste", english: "Labour Party", category: "Political Parties" },
    { id: 15, french: "Parti conservateur", english: "Conservative Party", category: "Political Parties" },
    { id: 16, french: "Parti libéral-démocrate", english: "Liberal Democrats", category: "Political Parties" },
    { id: 17, french: "Parti vert", english: "Green Party", category: "Political Parties" },
    { id: 18, french: "Parti indépendant", english: "Independent Party", category: "Political Parties" },
    { id: 19, french: "Coalition", english: "Coalition", category: "Political Parties" },
    { id: 20, french: "Opposition", english: "Opposition", category: "Political Parties" },

    { id: 21, french: "Élection", english: "Election", category: "Elections" },
    { id: 22, french: "Élection présidentielle", english: "Presidential election", category: "Elections" },
    { id: 23, french: "Élection législative", english: "Legislative election", category: "Elections" },
    { id: 24, french: "Élection locale", english: "Local election", category: "Elections" },
    { id: 25, french: "Référendum", english: "Referendum", category: "Elections" },
    { id: 26, french: "Primaire", english: "Primary", category: "Elections" },
    { id: 27, french: "Caucus", english: "Caucus", category: "Elections" },
    { id: 28, french: "Suffrage universel", english: "Universal suffrage", category: "Elections" },
    { id: 29, french: "Bureau de vote", english: "Polling station", category: "Elections" },
    { id: 30, french: "Urne", english: "Ballot box", category: "Elections" },

    { id: 31, french: "Gouvernement", english: "Government", category: "Government Institutions" },
    { id: 32, french: "Parlement", english: "Parliament", category: "Government Institutions" },
    { id: 33, french: "Congrès", english: "Congress", category: "Government Institutions" },
    { id: 34, french: "Sénat", english: "Senate", category: "Government Institutions" },
    { id: 35, french: "Chambre des représentants", english: "House of Representatives", category: "Government Institutions" },
    { id: 36, french: "Chambre des communes", english: "House of Commons", category: "Government Institutions" },
    { id: 37, french: "Chambre des lords", english: "House of Lords", category: "Government Institutions" },
    { id: 38, french: "Cour suprême", english: "Supreme Court", category: "Government Institutions" },
    { id: 39, french: "Cabinet", english: "Cabinet", category: "Government Institutions" },
    { id: 40, french: "Ministère", english: "Ministry", category: "Government Institutions" },

    { id: 41, french: "Président", english: "President", category: "Political Functions" },
    { id: 42, french: "Premier ministre", english: "Prime Minister", category: "Political Functions" },
    { id: 43, french: "Vice-président", english: "Vice President", category: "Political Functions" },
    { id: 44, french: "Ministre", english: "Minister", category: "Political Functions" },
    { id: 45, french: "Secrétaire d'État", english: "Secretary of State", category: "Political Functions" },
    { id: 46, french: "Député", english: "Member of Parliament", category: "Political Functions" },
    { id: 47, french: "Sénateur", english: "Senator", category: "Political Functions" },
    { id: 48, french: "Gouverneur", english: "Governor", category: "Political Functions" },
    { id: 49, french: "Maire", english: "Mayor", category: "Political Functions" },
    { id: 50, french: "Conseiller municipal", english: "City Councilor", category: "Political Functions" },

    { id: 51, french: "Politique publique", english: "Public policy", category: "Public Policies" },
    { id: 52, french: "Politique sociale", english: "Social policy", category: "Public Policies" },
    { id: 53, french: "Politique économique", english: "Economic policy", category: "Public Policies" },
    { id: 54, french: "Politique étrangère", english: "Foreign policy", category: "Public Policies" },
    { id: 55, french: "Politique de défense", english: "Defense policy", category: "Public Policies" },
    { id: 56, french: "Politique environnementale", english: "Environmental policy", category: "Public Policies" },
    { id: 57, french: "Politique d'immigration", english: "Immigration policy", category: "Public Policies" },
    { id: 58, french: "Politique de santé", english: "Health policy", category: "Public Policies" },
    { id: 59, french: "Politique d'éducation", english: "Education policy", category: "Public Policies" },
    { id: 60, french: "Politique fiscale", english: "Fiscal policy", category: "Public Policies" },

    { id: 61, french: "Lobbying", english: "Lobbying", category: "Lobbying and Influence" },
    { id: 62, french: "Groupe de pression", english: "Pressure group", category: "Lobbying and Influence" },
    { id: 63, french: "Intérêt particulier", english: "Special interest", category: "Lobbying and Influence" },
    { id: 64, french: "Corruption", english: "Corruption", category: "Lobbying and Influence" },
    { id: 65, french: "Transparence", english: "Transparency", category: "Lobbying and Influence" },
    { id: 66, french: "Responsabilité", english: "Accountability", category: "Lobbying and Influence" },
    { id: 67, french: "Éthique", english: "Ethics", category: "Lobbying and Influence" },
    { id: 68, french: "Conflit d'intérêt", english: "Conflict of interest", category: "Lobbying and Influence" },
    { id: 69, french: "Financement des campagnes", english: "Campaign financing", category: "Lobbying and Influence" },
    { id: 70, french: "Reform", english: "Reform", category: "Lobbying and Influence" },

    { id: 71, french: "Mouvement social", english: "Social movement", category: "Social Movements" },
    { id: 72, french: "Manifestation", english: "Protest", category: "Social Movements" },
    { id: 73, french: "Grève", english: "Strike", category: "Social Movements" },
    { id: 74, french: "Désobéissance civile", english: "Civil disobedience", category: "Social Movements" },
    { id: 75, french: "Activisme", english: "Activism", category: "Social Movements" },
    { id: 76, french: "Mobilisation", english: "Mobilization", category: "Social Movements" },
    { id: 77, french: "Résistance", english: "Resistance", category: "Social Movements" },
    { id: 78, french: "Révolution", english: "Revolution", category: "Social Movements" },
    { id: 79, french: "Réforme", english: "Reform", category: "Social Movements" },
    { id: 80, french: "Changement social", english: "Social change", category: "Social Movements" },

    { id: 81, french: "Médias", english: "Media", category: "Media and Politics" },
    { id: 82, french: "Presse", english: "Press", category: "Media and Politics" },
    { id: 83, french: "Télévision", english: "Television", category: "Media and Politics" },
    { id: 84, french: "Radio", english: "Radio", category: "Media and Politics" },
    { id: 85, french: "Internet", english: "Internet", category: "Media and Politics" },
    { id: 86, french: "Réseaux sociaux", english: "Social media", category: "Media and Politics" },
    { id: 87, french: "Journalisme", english: "Journalism", category: "Media and Politics" },
    { id: 88, french: "Liberté de la presse", english: "Freedom of the press", category: "Media and Politics" },
    { id: 89, french: "Désinformation", english: "Disinformation", category: "Media and Politics" },
    { id: 90, french: "Fact-checking", english: "Fact-checking", category: "Media and Politics" },

    { id: 91, french: "Liberté", english: "Freedom", category: "Political Concepts" },
    { id: 92, french: "Égalité", english: "Equality", category: "Political Concepts" },
    { id: 93, french: "Justice", english: "Justice", category: "Political Concepts" },
    { id: 94, french: "Droits de l'homme", english: "Human rights", category: "Political Concepts" },
    { id: 95, french: "Citoyenneté", english: "Citizenship", category: "Political Concepts" },
    { id: 96, french: "Souveraineté", english: "Sovereignty", category: "Political Concepts" },
    { id: 97, french: "Légitimité", english: "Legitimacy", category: "Political Concepts" },
    { id: 98, french: "Autorité", english: "Authority", category: "Political Concepts" },
    { id: 99, french: "Pouvoir", english: "Power", category: "Political Concepts" },
    { id: 100, french: "Gouvernance", english: "Governance", category: "Political Concepts" }
  ];

  const mapped = vocabularyData.map(({ category, french, english }) => ({ category, front: french, back: english }));

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <UnifiedFlashcards
            data={mapped as any}
            title="Vocabulaire Politique (FR → EN)"
            frontKey="front"
            backKey="back"
            frontLabel="Français"
            backLabel="Anglais"
          />
        </div>
      </div>
    </div>
  );
};

export default PoliticsVocabularyPage; 