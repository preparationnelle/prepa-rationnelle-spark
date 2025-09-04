import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const BrexitVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Brexit et référendum / Brexit and Referendum
    { id: 1, french: "Brexit", english: "Brexit", category: "Brexit et référendum" },
    { id: 2, french: "Référendum", english: "Referendum", category: "Brexit et référendum" },
    { id: 3, french: "Vote", english: "Vote", category: "Brexit et référendum" },
    { id: 4, french: "Campagne", english: "Campaign", category: "Brexit et référendum" },
    { id: 5, french: "Opinion publique", english: "Public opinion", category: "Brexit et référendum" },
    { id: 6, french: "Soutien public", english: "Public support", category: "Brexit et référendum" },
    { id: 7, french: "Opposition", english: "Opposition", category: "Brexit et référendum" },
    { id: 8, french: "Polarisation", english: "Polarization", category: "Brexit et référendum" },
    { id: 9, french: "Médias", english: "Media", category: "Brexit et référendum" },
    { id: 10, french: "Partis politiques", english: "Political parties", category: "Brexit et référendum" },

    // 2. Négociations et accords / Negotiations and Agreements
    { id: 11, french: "Négociation", english: "Negotiation", category: "Négociations et accords" },
    { id: 12, french: "Accord de retrait", english: "Withdrawal agreement", category: "Négociations et accords" },
    { id: 13, french: "Accord de transition", english: "Transition agreement", category: "Négociations et accords" },
    { id: 14, french: "Accord commercial", english: "Trade deal", category: "Négociations et accords" },
    { id: 15, french: "Accord futur", english: "Future agreement", category: "Négociations et accords" },
    { id: 16, french: "Négociations commerciales", english: "Trade negotiations", category: "Négociations et accords" },
    { id: 17, french: "Négociations post-Brexit", english: "Post-Brexit negotiations", category: "Négociations et accords" },
    { id: 18, french: "Protocole", english: "Protocol", category: "Négociations et accords" },
    { id: 19, french: "Désaccord", english: "Disagreement", category: "Négociations et accords" },
    { id: 20, french: "Traités", english: "Treaties", category: "Négociations et accords" },

    // 3. Union européenne et relations / European Union and Relations
    { id: 21, french: "Union européenne", english: "European Union (EU)", category: "Union européenne et relations" },
    { id: 22, french: "Relations UK-EU", english: "UK-EU relations", category: "Union européenne et relations" },
    { id: 23, french: "Relations bilatérales", english: "Bilateral relations", category: "Union européenne et relations" },
    { id: 24, french: "Relations transatlantiques", english: "Transatlantic relations", category: "Union européenne et relations" },
    { id: 25, french: "Relations avec l'Irlande", english: "Relations with Ireland", category: "Union européenne et relations" },
    { id: 26, french: "Coopération", english: "Cooperation", category: "Union européenne et relations" },
    { id: 27, french: "Coopération scientifique", english: "Scientific cooperation", category: "Union européenne et relations" },
    { id: 28, french: "Coopération militaire", english: "Military cooperation", category: "Union européenne et relations" },
    { id: 29, french: "Coopération transfrontalière", english: "Cross-border cooperation", category: "Union européenne et relations" },
    { id: 30, french: "Alliance", english: "Alliance", category: "Union européenne et relations" },

    // 4. Commerce et économie / Trade and Economy
    { id: 31, french: "Commerce", english: "Trade", category: "Commerce et économie" },
    { id: 32, french: "Marché unique", english: "Single market", category: "Commerce et économie" },
    { id: 33, french: "Marché commun", english: "Common market", category: "Commerce et économie" },
    { id: 34, french: "Marché intérieur", english: "Internal market", category: "Commerce et économie" },
    { id: 35, french: "Exportation", english: "Export", category: "Commerce et économie" },
    { id: 36, french: "Importation", english: "Import", category: "Commerce et économie" },
    { id: 37, french: "Douane", english: "Customs", category: "Commerce et économie" },
    { id: 38, french: "Tarif", english: "Tariff", category: "Commerce et économie" },
    { id: 39, french: "Barrière commerciale", english: "Trade barrier", category: "Commerce et économie" },
    { id: 40, french: "Économie", english: "Economy", category: "Commerce et économie" },

    // 5. Impact économique / Economic Impact
    { id: 41, french: "Impact économique", english: "Economic impact", category: "Impact économique" },
    { id: 42, french: "Investissement", english: "Investment", category: "Impact économique" },
    { id: 43, french: "Investissement étranger", english: "Foreign investment", category: "Impact économique" },
    { id: 44, french: "Dévaluation", english: "Devaluation", category: "Impact économique" },
    { id: 45, french: "Inflation", english: "Inflation", category: "Impact économique" },
    { id: 46, french: "Chômage", english: "Unemployment", category: "Impact économique" },
    { id: 47, french: "Croissance", english: "Growth", category: "Impact économique" },
    { id: 48, french: "Stabilité économique", english: "Economic stability", category: "Impact économique" },
    { id: 49, french: "Productivité", english: "Productivity", category: "Impact économique" },
    { id: 50, french: "Délocalisation", english: "Offshoring", category: "Impact économique" },

    // 6. Secteurs économiques / Economic Sectors
    { id: 51, french: "Secteur financier", english: "Financial sector", category: "Secteurs économiques" },
    { id: 52, french: "Industrie", english: "Industry", category: "Secteurs économiques" },
    { id: 53, french: "Agriculture", english: "Agriculture", category: "Secteurs économiques" },
    { id: 54, french: "Pêche", english: "Fishing", category: "Secteurs économiques" },
    { id: 55, french: "Emploi", english: "Employment", category: "Secteurs économiques" },
    { id: 56, french: "Régulation financière", english: "Financial regulation", category: "Secteurs économiques" },
    { id: 57, french: "Sécurité alimentaire", english: "Food security", category: "Secteurs économiques" },
    { id: 58, french: "Politique énergétique", english: "Energy policy", category: "Secteurs économiques" },
    { id: 59, french: "Recherche", english: "Research", category: "Secteurs économiques" },
    { id: 60, french: "Éducation", english: "Education", category: "Secteurs économiques" },

    // 7. Frontières et territoires / Borders and Territories
    { id: 61, french: "Frontière", english: "Border", category: "Frontières et territoires" },
    { id: 62, french: "Frontière irlandaise", english: "Irish border", category: "Frontières et territoires" },
    { id: 63, french: "Irlande du Nord", english: "Northern Ireland", category: "Frontières et territoires" },
    { id: 64, french: "Écosse", english: "Scotland", category: "Frontières et territoires" },
    { id: 65, french: "Pays de Galles", english: "Wales", category: "Frontières et territoires" },
    { id: 66, french: "Décentralisation", english: "Devolution", category: "Frontières et territoires" },
    { id: 67, french: "Indépendance régionale", english: "Regional independence", category: "Frontières et territoires" },
    { id: 68, french: "Union politique", english: "Political union", category: "Frontières et territoires" },
    { id: 69, french: "Séparation", english: "Separation", category: "Frontières et territoires" },
    { id: 70, french: "Stabilité régionale", english: "Regional stability", category: "Frontières et territoires" },

    // 8. Immigration et citoyenneté / Immigration and Citizenship
    { id: 71, french: "Immigration", english: "Immigration", category: "Immigration et citoyenneté" },
    { id: 72, french: "Citoyenneté", english: "Citizenship", category: "Immigration et citoyenneté" },
    { id: 73, french: "Liberté de mouvement", english: "Freedom of movement", category: "Immigration et citoyenneté" },
    { id: 74, french: "Passeport", english: "Passport", category: "Immigration et citoyenneté" },
    { id: 75, french: "Mobilité étudiante", english: "Student mobility", category: "Immigration et citoyenneté" },
    { id: 76, french: "Identité nationale", english: "National identity", category: "Immigration et citoyenneté" },
    { id: 77, french: "Identité européenne", english: "European identity", category: "Immigration et citoyenneté" },
    { id: 78, french: "Nationalisme", english: "Nationalism", category: "Immigration et citoyenneté" },
    { id: 79, french: "Populisme", english: "Populism", category: "Immigration et citoyenneté" },
    { id: 80, french: "Souveraineté", english: "Sovereignty", category: "Immigration et citoyenneté" },

    // 9. Politique et institutions / Politics and Institutions
    { id: 81, french: "Parlement", english: "Parliament", category: "Politique et institutions" },
    { id: 82, french: "Législation", english: "Legislation", category: "Politique et institutions" },
    { id: 83, french: "Réglementation", english: "Regulation", category: "Politique et institutions" },
    { id: 84, french: "Réforme", english: "Reform", category: "Politique et institutions" },
    { id: 85, french: "Crise politique", english: "Political crisis", category: "Politique et institutions" },
    { id: 86, french: "Stabilité politique", english: "Political stability", category: "Politique et institutions" },
    { id: 87, french: "Indépendance", english: "Independence", category: "Politique et institutions" },
    { id: 88, french: "Diplomatie", english: "Diplomacy", category: "Politique et institutions" },
    { id: 89, french: "Sécurité", english: "Security", category: "Politique et institutions" },
    { id: 90, french: "Défense", english: "Defense", category: "Politique et institutions" },

    // 10. Conséquences et héritage / Consequences and Legacy
    { id: 91, french: "Conséquences", english: "Consequences", category: "Conséquences et héritage" },
    { id: 92, french: "Héritage du Brexit", english: "Brexit legacy", category: "Conséquences et héritage" },
    { id: 93, french: "Transition", english: "Transition", category: "Conséquences et héritage" },
    { id: 94, french: "Influence internationale", english: "International influence", category: "Conséquences et héritage" },
    { id: 95, french: "Influence globale", english: "Global influence", category: "Conséquences et héritage" },
    { id: 96, french: "Renseignement", english: "Intelligence", category: "Conséquences et héritage" },
    { id: 97, french: "Santé", english: "Health", category: "Conséquences et héritage" },
    { id: 98, french: "Environnement", english: "Environment", category: "Conséquences et héritage" },
    { id: 99, french: "Réglementations environnementales", english: "Environmental regulations", category: "Conséquences et héritage" },
    { id: 100, french: "Changement climatique", english: "Climate change", category: "Conséquences et héritage" },

    // 11. Souveraineté économique / Economic Sovereignty
    { id: 101, french: "Souveraineté économique", english: "Economic sovereignty", category: "Souveraineté économique" },
    { id: 102, french: "Indépendance commerciale", english: "Trade independence", category: "Souveraineté économique" },
    { id: 103, french: "Contrôle des frontières", english: "Border control", category: "Souveraineté économique" },
    { id: 104, french: "Politique monétaire", english: "Monetary policy", category: "Souveraineté économique" },
    { id: 105, french: "Politique fiscale", english: "Fiscal policy", category: "Souveraineté économique" },
    { id: 106, french: "Autonomie réglementaire", english: "Regulatory autonomy", category: "Souveraineté économique" },
    { id: 107, french: "Compétitivité", english: "Competitiveness", category: "Souveraineté économique" },
    { id: 108, french: "Protectionnisme", english: "Protectionism", category: "Souveraineté économique" },
    { id: 109, french: "Libre-échange", english: "Free trade", category: "Souveraineté économique" },
    { id: 110, french: "Accords bilatéraux", english: "Bilateral agreements", category: "Souveraineté économique" },

    // 12. Commerce international / International Trade
    { id: 111, french: "Commerce international", english: "International trade", category: "Commerce international" },
    { id: 112, french: "Chaînes d'approvisionnement", english: "Supply chains", category: "Commerce international" },
    { id: 113, french: "Logistique", english: "Logistics", category: "Commerce international" },
    { id: 114, french: "Formalités douanières", english: "Customs procedures", category: "Commerce international" },
    { id: 115, french: "Contrôles frontaliers", english: "Border checks", category: "Commerce international" },
    { id: 116, french: "Certificats d'origine", english: "Certificates of origin", category: "Commerce international" },
    { id: 117, french: "Normes techniques", english: "Technical standards", category: "Commerce international" },
    { id: 118, french: "Barrières non tarifaires", english: "Non-tariff barriers", category: "Commerce international" },
    { id: 119, french: "Quotas d'importation", english: "Import quotas", category: "Commerce international" },
    { id: 120, french: "Partenariats commerciaux", english: "Trade partnerships", category: "Commerce international" }
  ];

  const mappedData = vocabularyData.map(({ category, french, english }) => ({ 
    category, 
    front: french, 
    back: english 
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation Anglais ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Anglaise
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Brexit et Commerce International</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mappedData}
          title="Vocabulaire Brexit et Commerce International (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default BrexitVocabularyPage;