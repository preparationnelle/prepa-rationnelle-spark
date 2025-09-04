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

const PolarizationVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Polarisation politique / Political Polarization
    { id: 1, french: "Polarisation", english: "Polarization", category: "Polarisation politique" },
    { id: 2, french: "Polarisation politique", english: "Political polarization", category: "Polarisation politique" },
    { id: 3, french: "Division", english: "Division", category: "Polarisation politique" },
    { id: 4, french: "Clivage", english: "Divide / Cleavage", category: "Polarisation politique" },
    { id: 5, french: "Fracture sociale", english: "Social fracture", category: "Polarisation politique" },
    { id: 6, french: "Extrémisme", english: "Extremism", category: "Polarisation politique" },
    { id: 7, french: "Radicalisation", english: "Radicalization", category: "Polarisation politique" },
    { id: 8, french: "Fanatisme", english: "Fanaticism", category: "Polarisation politique" },
    { id: 9, french: "Idéologie", english: "Ideology", category: "Polarisation politique" },
    { id: 10, french: "Partisanerie", english: "Partisanship", category: "Polarisation politique" },

    // 2. Médias et désinformation / Media and Disinformation
    { id: 11, french: "Désinformation", english: "Disinformation", category: "Médias et désinformation" },
    { id: 12, french: "Fausses nouvelles", english: "Fake news", category: "Médias et désinformation" },
    { id: 13, french: "Propagande", english: "Propaganda", category: "Médias et désinformation" },
    { id: 14, french: "Manipulation", english: "Manipulation", category: "Médias et désinformation" },
    { id: 15, french: "Bulle informationnelle", english: "Information bubble", category: "Médias et désinformation" },
    { id: 16, french: "Chambre d'écho", english: "Echo chamber", category: "Médias et désinformation" },
    { id: 17, french: "Biais de confirmation", english: "Confirmation bias", category: "Médias et désinformation" },
    { id: 18, french: "Algorithme", english: "Algorithm", category: "Médias et désinformation" },
    { id: 19, french: "Réseaux sociaux", english: "Social media", category: "Médias et désinformation" },
    { id: 20, french: "Vérification des faits", english: "Fact-checking", category: "Médias et désinformation" },

    // 3. Identité et culture / Identity and Culture
    { id: 21, french: "Identité", english: "Identity", category: "Identité et culture" },
    { id: 22, french: "Identité nationale", english: "National identity", category: "Identité et culture" },
    { id: 23, french: "Identité culturelle", english: "Cultural identity", category: "Identité et culture" },
    { id: 24, french: "Multiculturalisme", english: "Multiculturalism", category: "Identité et culture" },
    { id: 25, french: "Assimilation", english: "Assimilation", category: "Identité et culture" },
    { id: 26, french: "Intégration", english: "Integration", category: "Identité et culture" },
    { id: 27, french: "Diversité", english: "Diversity", category: "Identité et culture" },
    { id: 28, french: "Inclusion", english: "Inclusion", category: "Identité et culture" },
    { id: 29, french: "Exclusion", english: "Exclusion", category: "Identité et culture" },
    { id: 30, french: "Marginalisation", english: "Marginalization", category: "Identité et culture" },

    // 4. Inégalités et justice sociale / Inequalities and Social Justice
    { id: 31, french: "Inégalités", english: "Inequalities", category: "Inégalités et justice sociale" },
    { id: 32, french: "Justice sociale", english: "Social justice", category: "Inégalités et justice sociale" },
    { id: 33, french: "Discrimination", english: "Discrimination", category: "Inégalités et justice sociale" },
    { id: 34, french: "Racisme", english: "Racism", category: "Inégalités et justice sociale" },
    { id: 35, french: "Sexisme", english: "Sexism", category: "Inégalités et justice sociale" },
    { id: 36, french: "Privilège", english: "Privilege", category: "Inégalités et justice sociale" },
    { id: 37, french: "Oppression", english: "Oppression", category: "Inégalités et justice sociale" },
    { id: 38, french: "Émancipation", english: "Emancipation", category: "Inégalités et justice sociale" },
    { id: 39, french: "Égalité des chances", english: "Equal opportunity", category: "Inégalités et justice sociale" },
    { id: 40, french: "Équité", english: "Equity", category: "Inégalités et justice sociale" },

    // 5. Populisme et nationalisme / Populism and Nationalism
    { id: 41, french: "Populisme", english: "Populism", category: "Populisme et nationalisme" },
    { id: 42, french: "Nationalisme", english: "Nationalism", category: "Populisme et nationalisme" },
    { id: 43, french: "Patriotisme", english: "Patriotism", category: "Populisme et nationalisme" },
    { id: 44, french: "Souveraineté", english: "Sovereignty", category: "Populisme et nationalisme" },
    { id: 45, french: "Élite", english: "Elite", category: "Populisme et nationalisme" },
    { id: 46, french: "Anti-élitisme", english: "Anti-elitism", category: "Populisme et nationalisme" },
    { id: 47, french: "Peuple", english: "People", category: "Populisme et nationalisme" },
    { id: 48, french: "Masse", english: "Mass", category: "Populisme et nationalisme" },
    { id: 49, french: "Démagogie", english: "Demagogy", category: "Populisme et nationalisme" },
    { id: 50, french: "Rhétorique", english: "Rhetoric", category: "Populisme et nationalisme" },

    // 6. Institutions démocratiques / Democratic Institutions
    { id: 51, french: "Démocratie", english: "Democracy", category: "Institutions démocratiques" },
    { id: 52, french: "Institutions", english: "Institutions", category: "Institutions démocratiques" },
    { id: 53, french: "Gouvernance", english: "Governance", category: "Institutions démocratiques" },
    { id: 54, french: "Légitimité", english: "Legitimacy", category: "Institutions démocratiques" },
    { id: 55, french: "Confiance", english: "Trust", category: "Institutions démocratiques" },
    { id: 56, french: "Défiance", english: "Distrust", category: "Institutions démocratiques" },
    { id: 57, french: "Transparence", english: "Transparency", category: "Institutions démocratiques" },
    { id: 58, french: "Responsabilité", english: "Accountability", category: "Institutions démocratiques" },
    { id: 59, french: "Corruption", english: "Corruption", category: "Institutions démocratiques" },
    { id: 60, french: "État de droit", english: "Rule of law", category: "Institutions démocratiques" },

    // 7. Mouvements sociaux / Social Movements
    { id: 61, french: "Mouvement social", english: "Social movement", category: "Mouvements sociaux" },
    { id: 62, french: "Activisme", english: "Activism", category: "Mouvements sociaux" },
    { id: 63, french: "Protestation", english: "Protest", category: "Mouvements sociaux" },
    { id: 64, french: "Manifestation", english: "Demonstration", category: "Mouvements sociaux" },
    { id: 65, french: "Mobilisation", english: "Mobilization", category: "Mouvements sociaux" },
    { id: 66, french: "Résistance", english: "Resistance", category: "Mouvements sociaux" },
    { id: 67, french: "Révolution", english: "Revolution", category: "Mouvements sociaux" },
    { id: 68, french: "Réforme", english: "Reform", category: "Mouvements sociaux" },
    { id: 69, french: "Changement social", english: "Social change", category: "Mouvements sociaux" },
    { id: 70, french: "Contre-mouvement", english: "Counter-movement", category: "Mouvements sociaux" },

    // 8. Violence politique / Political Violence
    { id: 71, french: "Violence politique", english: "Political violence", category: "Violence politique" },
    { id: 72, french: "Terrorisme", english: "Terrorism", category: "Violence politique" },
    { id: 73, french: "Insurrection", english: "Insurrection", category: "Violence politique" },
    { id: 74, french: "Sédition", english: "Sedition", category: "Violence politique" },
    { id: 75, french: "Coup d'État", english: "Coup d'état", category: "Violence politique" },
    { id: 76, french: "Émeute", english: "Riot", category: "Violence politique" },
    { id: 77, french: "Milice", english: "Militia", category: "Violence politique" },
    { id: 78, french: "Extrémisme violent", english: "Violent extremism", category: "Violence politique" },
    { id: 79, french: "Intimidation", english: "Intimidation", category: "Violence politique" },
    { id: 80, french: "Harcèlement", english: "Harassment", category: "Violence politique" },

    // 9. Économie et classes sociales / Economy and Social Classes
    { id: 81, french: "Inégalités économiques", english: "Economic inequalities", category: "Économie et classes sociales" },
    { id: 82, french: "Classes sociales", english: "Social classes", category: "Économie et classes sociales" },
    { id: 83, french: "Classe ouvrière", english: "Working class", category: "Économie et classes sociales" },
    { id: 84, french: "Classe moyenne", english: "Middle class", category: "Économie et classes sociales" },
    { id: 85, french: "Bourgeoisie", english: "Bourgeoisie", category: "Économie et classes sociales" },
    { id: 86, french: "Prolétariat", english: "Proletariat", category: "Économie et classes sociales" },
    { id: 87, french: "Pauvreté", english: "Poverty", category: "Économie et classes sociales" },
    { id: 88, french: "Richesse", english: "Wealth", category: "Économie et classes sociales" },
    { id: 89, french: "Redistribution", english: "Redistribution", category: "Économie et classes sociales" },
    { id: 90, french: "Mondialisation", english: "Globalization", category: "Économie et classes sociales" },

    // 10. Réconciliation et dialogue / Reconciliation and Dialogue
    { id: 91, french: "Réconciliation", english: "Reconciliation", category: "Réconciliation et dialogue" },
    { id: 92, french: "Dialogue", english: "Dialogue", category: "Réconciliation et dialogue" },
    { id: 93, french: "Consensus", english: "Consensus", category: "Réconciliation et dialogue" },
    { id: 94, french: "Compromis", english: "Compromise", category: "Réconciliation et dialogue" },
    { id: 95, french: "Négociation", english: "Negotiation", category: "Réconciliation et dialogue" },
    { id: 96, french: "Médiation", english: "Mediation", category: "Réconciliation et dialogue" },
    { id: 97, french: "Tolérance", english: "Tolerance", category: "Réconciliation et dialogue" },
    { id: 98, french: "Respect", english: "Respect", category: "Réconciliation et dialogue" },
    { id: 99, french: "Coexistence", english: "Coexistence", category: "Réconciliation et dialogue" },
    { id: 100, french: "Unité", english: "Unity", category: "Réconciliation et dialogue" },

    // 11. Géographie politique / Political Geography
    { id: 101, french: "États rouges", english: "Red states", category: "Géographie politique" },
    { id: 102, french: "États bleus", english: "Blue states", category: "Géographie politique" },
    { id: 103, french: "États pivots", english: "Swing states", category: "Géographie politique" },
    { id: 104, french: "Zones rurales", english: "Rural areas", category: "Géographie politique" },
    { id: 105, french: "Zones urbaines", english: "Urban areas", category: "Géographie politique" },
    { id: 106, french: "Banlieues", english: "Suburbs", category: "Géographie politique" },
    { id: 107, french: "Ceinture de rouille", english: "Rust Belt", category: "Géographie politique" },
    { id: 108, french: "Ceinture du soleil", english: "Sun Belt", category: "Géographie politique" },
    { id: 109, french: "Côtes", english: "Coasts", category: "Géographie politique" },
    { id: 110, french: "Heartland", english: "Heartland", category: "Géographie politique" },

    // 12. Technologie et société / Technology and Society
    { id: 111, french: "Fracture numérique", english: "Digital divide", category: "Technologie et société" },
    { id: 112, french: "Intelligence artificielle", english: "Artificial intelligence", category: "Technologie et société" },
    { id: 113, french: "Automatisation", english: "Automation", category: "Technologie et société" },
    { id: 114, french: "Surveillance", english: "Surveillance", category: "Technologie et société" },
    { id: 115, french: "Vie privée", english: "Privacy", category: "Technologie et société" },
    { id: 116, french: "Liberté d'expression", english: "Freedom of speech", category: "Technologie et société" },
    { id: 117, french: "Censure", english: "Censorship", category: "Technologie et société" },
    { id: 118, french: "Déplatformage", english: "Deplatforming", category: "Technologie et société" },
    { id: 119, french: "Modération de contenu", english: "Content moderation", category: "Technologie et société" },
    { id: 120, french: "Cybersécurité", english: "Cybersecurity", category: "Technologie et société" }
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
            <span className="text-foreground font-medium">Polarisation aux États-Unis</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mappedData}
          title="Vocabulaire Polarisation aux États-Unis (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default PolarizationVocabularyPage;
