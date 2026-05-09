import React from 'react';
import { Flag } from 'lucide-react';
import { EnglishVocabularyTemplate, EnglishVocabularyItem } from '@/components/formation/anglais/EnglishVocabularyTemplate';

const vocabularyData: EnglishVocabularyItem[] = [
  // 1. Brexit et référendum / Brexit and Referendum
  { french: "Brexit", english: "Brexit", category: "Brexit et référendum" },
  { french: "Référendum", english: "Referendum", category: "Brexit et référendum" },
  { french: "Vote", english: "Vote", category: "Brexit et référendum" },
  { french: "Campagne", english: "Campaign", category: "Brexit et référendum" },
  { french: "Opinion publique", english: "Public opinion", category: "Brexit et référendum" },
  { french: "Soutien public", english: "Public support", category: "Brexit et référendum" },
  { french: "Opposition", english: "Opposition", category: "Brexit et référendum" },
  { french: "Polarisation", english: "Polarization", category: "Brexit et référendum" },
  { french: "Médias", english: "Media", category: "Brexit et référendum" },
  { french: "Partis politiques", english: "Political parties", category: "Brexit et référendum" },

  // 2. Négociations et accords / Negotiations and Agreements
  { french: "Négociation", english: "Negotiation", category: "Négociations et accords" },
  { french: "Accord de retrait", english: "Withdrawal agreement", category: "Négociations et accords" },
  { french: "Accord de transition", english: "Transition agreement", category: "Négociations et accords" },
  { french: "Accord commercial", english: "Trade deal", category: "Négociations et accords" },
  { french: "Accord futur", english: "Future agreement", category: "Négociations et accords" },
  { french: "Négociations commerciales", english: "Trade negotiations", category: "Négociations et accords" },
  { french: "Négociations post-Brexit", english: "Post-Brexit negotiations", category: "Négociations et accords" },
  { french: "Protocole", english: "Protocol", category: "Négociations et accords" },
  { french: "Désaccord", english: "Disagreement", category: "Négociations et accords" },
  { french: "Traités", english: "Treaties", category: "Négociations et accords" },

  // 3. Union européenne et relations / European Union and Relations
  { french: "Union européenne", english: "European Union (EU)", category: "Union européenne et relations" },
  { french: "Relations UK-EU", english: "UK-EU relations", category: "Union européenne et relations" },
  { french: "Relations bilatérales", english: "Bilateral relations", category: "Union européenne et relations" },
  { french: "Relations transatlantiques", english: "Transatlantic relations", category: "Union européenne et relations" },
  { french: "Relations avec l'Irlande", english: "Relations with Ireland", category: "Union européenne et relations" },
  { french: "Coopération", english: "Cooperation", category: "Union européenne et relations" },
  { french: "Coopération scientifique", english: "Scientific cooperation", category: "Union européenne et relations" },
  { french: "Coopération militaire", english: "Military cooperation", category: "Union européenne et relations" },
  { french: "Coopération transfrontalière", english: "Cross-border cooperation", category: "Union européenne et relations" },
  { french: "Alliance", english: "Alliance", category: "Union européenne et relations" },

  // 4. Commerce et économie / Trade and Economy
  { french: "Commerce", english: "Trade", category: "Commerce et économie" },
  { french: "Marché unique", english: "Single market", category: "Commerce et économie" },
  { french: "Marché commun", english: "Common market", category: "Commerce et économie" },
  { french: "Marché intérieur", english: "Internal market", category: "Commerce et économie" },
  { french: "Exportation", english: "Export", category: "Commerce et économie" },
  { french: "Importation", english: "Import", category: "Commerce et économie" },
  { french: "Douane", english: "Customs", category: "Commerce et économie" },
  { french: "Tarif", english: "Tariff", category: "Commerce et économie" },
  { french: "Barrière commerciale", english: "Trade barrier", category: "Commerce et économie" },
  { french: "Économie", english: "Economy", category: "Commerce et économie" },

  // 5. Impact économique / Economic Impact
  { french: "Impact économique", english: "Economic impact", category: "Impact économique" },
  { french: "Investissement", english: "Investment", category: "Impact économique" },
  { french: "Investissement étranger", english: "Foreign investment", category: "Impact économique" },
  { french: "Dévaluation", english: "Devaluation", category: "Impact économique" },
  { french: "Inflation", english: "Inflation", category: "Impact économique" },
  { french: "Chômage", english: "Unemployment", category: "Impact économique" },
  { french: "Croissance", english: "Growth", category: "Impact économique" },
  { french: "Stabilité économique", english: "Economic stability", category: "Impact économique" },
  { french: "Productivité", english: "Productivity", category: "Impact économique" },
  { french: "Délocalisation", english: "Offshoring", category: "Impact économique" },

  // 6. Secteurs économiques / Economic Sectors
  { french: "Secteur financier", english: "Financial sector", category: "Secteurs économiques" },
  { french: "Industrie", english: "Industry", category: "Secteurs économiques" },
  { french: "Agriculture", english: "Agriculture", category: "Secteurs économiques" },
  { french: "Pêche", english: "Fishing", category: "Secteurs économiques" },
  { french: "Emploi", english: "Employment", category: "Secteurs économiques" },
  { french: "Régulation financière", english: "Financial regulation", category: "Secteurs économiques" },
  { french: "Sécurité alimentaire", english: "Food security", category: "Secteurs économiques" },
  { french: "Politique énergétique", english: "Energy policy", category: "Secteurs économiques" },
  { french: "Recherche", english: "Research", category: "Secteurs économiques" },
  { french: "Éducation", english: "Education", category: "Secteurs économiques" },

  // 7. Frontières et territoires / Borders and Territories
  { french: "Frontière", english: "Border", category: "Frontières et territoires" },
  { french: "Frontière irlandaise", english: "Irish border", category: "Frontières et territoires" },
  { french: "Irlande du Nord", english: "Northern Ireland", category: "Frontières et territoires" },
  { french: "Écosse", english: "Scotland", category: "Frontières et territoires" },
  { french: "Pays de Galles", english: "Wales", category: "Frontières et territoires" },
  { french: "Décentralisation", english: "Devolution", category: "Frontières et territoires" },
  { french: "Indépendance régionale", english: "Regional independence", category: "Frontières et territoires" },
  { french: "Union politique", english: "Political union", category: "Frontières et territoires" },
  { french: "Séparation", english: "Separation", category: "Frontières et territoires" },
  { french: "Stabilité régionale", english: "Regional stability", category: "Frontières et territoires" },

  // 8. Immigration et citoyenneté / Immigration and Citizenship
  { french: "Immigration", english: "Immigration", category: "Immigration et citoyenneté" },
  { french: "Citoyenneté", english: "Citizenship", category: "Immigration et citoyenneté" },
  { french: "Liberté de mouvement", english: "Freedom of movement", category: "Immigration et citoyenneté" },
  { french: "Passeport", english: "Passport", category: "Immigration et citoyenneté" },
  { french: "Mobilité étudiante", english: "Student mobility", category: "Immigration et citoyenneté" },
  { french: "Identité nationale", english: "National identity", category: "Immigration et citoyenneté" },
  { french: "Identité européenne", english: "European identity", category: "Immigration et citoyenneté" },
  { french: "Nationalisme", english: "Nationalism", category: "Immigration et citoyenneté" },
  { french: "Populisme", english: "Populism", category: "Immigration et citoyenneté" },
  { french: "Souveraineté", english: "Sovereignty", category: "Immigration et citoyenneté" },

  // 9. Politique et institutions / Politics and Institutions
  { french: "Parlement", english: "Parliament", category: "Politique et institutions" },
  { french: "Législation", english: "Legislation", category: "Politique et institutions" },
  { french: "Réglementation", english: "Regulation", category: "Politique et institutions" },
  { french: "Réforme", english: "Reform", category: "Politique et institutions" },
  { french: "Crise politique", english: "Political crisis", category: "Politique et institutions" },
  { french: "Stabilité politique", english: "Political stability", category: "Politique et institutions" },
  { french: "Indépendance", english: "Independence", category: "Politique et institutions" },
  { french: "Diplomatie", english: "Diplomacy", category: "Politique et institutions" },
  { french: "Sécurité", english: "Security", category: "Politique et institutions" },
  { french: "Défense", english: "Defense", category: "Politique et institutions" },

  // 10. Conséquences et héritage / Consequences and Legacy
  { french: "Conséquences", english: "Consequences", category: "Conséquences et héritage" },
  { french: "Héritage du Brexit", english: "Brexit legacy", category: "Conséquences et héritage" },
  { french: "Transition", english: "Transition", category: "Conséquences et héritage" },
  { french: "Influence internationale", english: "International influence", category: "Conséquences et héritage" },
  { french: "Influence globale", english: "Global influence", category: "Conséquences et héritage" },
  { french: "Renseignement", english: "Intelligence", category: "Conséquences et héritage" },
  { french: "Santé", english: "Health", category: "Conséquences et héritage" },
  { french: "Environnement", english: "Environment", category: "Conséquences et héritage" },
  { french: "Réglementations environnementales", english: "Environmental regulations", category: "Conséquences et héritage" },
  { french: "Changement climatique", english: "Climate change", category: "Conséquences et héritage" },

  // 11. Souveraineté économique / Economic Sovereignty
  { french: "Souveraineté économique", english: "Economic sovereignty", category: "Souveraineté économique" },
  { french: "Indépendance commerciale", english: "Trade independence", category: "Souveraineté économique" },
  { french: "Contrôle des frontières", english: "Border control", category: "Souveraineté économique" },
  { french: "Politique monétaire", english: "Monetary policy", category: "Souveraineté économique" },
  { french: "Politique fiscale", english: "Fiscal policy", category: "Souveraineté économique" },
  { french: "Autonomie réglementaire", english: "Regulatory autonomy", category: "Souveraineté économique" },
  { french: "Compétitivité", english: "Competitiveness", category: "Souveraineté économique" },
  { french: "Protectionnisme", english: "Protectionism", category: "Souveraineté économique" },
  { french: "Libre-échange", english: "Free trade", category: "Souveraineté économique" },
  { french: "Accords bilatéraux", english: "Bilateral agreements", category: "Souveraineté économique" },

  // 12. Commerce international / International Trade
  { french: "Commerce international", english: "International trade", category: "Commerce international" },
  { french: "Chaînes d'approvisionnement", english: "Supply chains", category: "Commerce international" },
  { french: "Logistique", english: "Logistics", category: "Commerce international" },
  { french: "Formalités douanières", english: "Customs procedures", category: "Commerce international" },
  { french: "Contrôles frontaliers", english: "Border checks", category: "Commerce international" },
  { french: "Certificats d'origine", english: "Certificates of origin", category: "Commerce international" },
  { french: "Normes techniques", english: "Technical standards", category: "Commerce international" },
  { french: "Barrières non tarifaires", english: "Non-tariff barriers", category: "Commerce international" },
  { french: "Quotas d'importation", english: "Import quotas", category: "Commerce international" },
  { french: "Partenariats commerciaux", english: "Trade partnerships", category: "Commerce international" },
];

const BrexitVocabularyPage = () => (
  <EnglishVocabularyTemplate
    themeLabel="Brexit"
    themeSlug="brexit"
    title="Vocabulaire Brexit et Commerce International (FR → EN)"
    Icon={Flag}
    data={vocabularyData}
  />
);

export default BrexitVocabularyPage;
