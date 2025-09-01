import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module1VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const democracyVocabularyData = [
    // 1. Concepts fondamentaux de la démocratie
    {
      spanish: "Democracia",
      french: "Démocratie",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Ciudadanía",
      french: "Citoyenneté",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Voto",
      french: "Vote",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Elecciones",
      french: "Élections",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Sufragio",
      french: "Suffrage",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Libertad",
      french: "Liberté",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Igualdad",
      french: "Égalité",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Participación",
      french: "Participation",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Representación",
      french: "Représentation",
      category: "Concepts fondamentaux de la démocratie"
    },
    {
      spanish: "Constitución",
      french: "Constitution",
      category: "Concepts fondamentaux de la démocratie"
    },

    // 2. Principes démocratiques
    {
      spanish: "Transparencia",
      french: "Transparence",
      category: "Principes démocratiques"
    },
    {
      spanish: "Pluralismo",
      french: "Pluralisme",
      category: "Principes démocratiques"
    },
    {
      spanish: "Justicia",
      french: "Justice",
      category: "Principes démocratiques"
    },
    {
      spanish: "Derechos",
      french: "Droits",
      category: "Principes démocratiques"
    },
    {
      spanish: "Deberes",
      french: "Devoirs",
      category: "Principes démocratiques"
    },
    {
      spanish: "Soberanía",
      french: "Souveraineté",
      category: "Principes démocratiques"
    },
    {
      spanish: "Gobernanza",
      french: "Gouvernance",
      category: "Principes démocratiques"
    },
    {
      spanish: "Legitimidad",
      french: "Légitimité",
      category: "Principes démocratiques"
    },
    {
      spanish: "Estabilidad",
      french: "Stabilité",
      category: "Principes démocratiques"
    },
    {
      spanish: "Progreso",
      french: "Progrès",
      category: "Principes démocratiques"
    },

    // 3. Pouvoirs publics
    {
      spanish: "Legislativo",
      french: "Législatif",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Ejecutivo",
      french: "Exécutif",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Judicial",
      french: "Judiciaire",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Parlamentarismo",
      french: "Parlementarisme",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Consensus",
      french: "Consensus",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Debate",
      french: "Débat",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Deliberación",
      french: "Délibération",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Autonomía",
      french: "Autonomie",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Instituciones",
      french: "Institutions",
      category: "Pouvoirs publics"
    },
    {
      spanish: "Bienestar",
      french: "Bien-être",
      category: "Pouvoirs publics"
    },

    // 4. Participation citoyenne
    {
      spanish: "Tolerancia",
      french: "Tolérance",
      category: "Participation citoyenne"
    },
    {
      spanish: "Diversidad",
      french: "Diversité",
      category: "Participation citoyenne"
    },
    {
      spanish: "Inclusión",
      french: "Inclusion",
      category: "Participation citoyenne"
    },
    {
      spanish: "Equidad",
      french: "Équité",
      category: "Participation citoyenne"
    },
    {
      spanish: "Accountability",
      french: "Responsabilité (reddition de comptes)",
      category: "Participation citoyenne"
    },
    {
      spanish: "Responsabilidad",
      french: "Responsabilité",
      category: "Participation citoyenne"
    },
    {
      spanish: "Civismo",
      french: "Civisme",
      category: "Participation citoyenne"
    },
    {
      spanish: "Sociedad",
      french: "Société",
      category: "Participation citoyenne"
    },
    {
      spanish: "Comunidad",
      french: "Communauté",
      category: "Participation citoyenne"
    },
    {
      spanish: "Solidaridad",
      french: "Solidarité",
      category: "Participation citoyenne"
    },

    // 5. Éthique et valeurs démocratiques
    {
      spanish: "Ética",
      french: "Éthique",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Federalismo",
      french: "Fédéralisme",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Decentralización",
      french: "Décentralisation",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Referéndum",
      french: "Référendum",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Plebiscito",
      french: "Plébiscite",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Candidatura",
      french: "Candidature",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Campaña",
      french: "Campagne",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Escrutinio",
      french: "Scrutin",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Militancia",
      french: "Militantisme",
      category: "Éthique et valeurs démocratiques"
    },
    {
      spanish: "Activismo",
      french: "Activisme",
      category: "Éthique et valeurs démocratiques"
    },

    // 6. Corruption et mal gouvernance
    {
      spanish: "Corrupción",
      french: "Corruption",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Desigualdad",
      french: "Inégalité",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Populismo",
      french: "Populisme",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Autoritarismo",
      french: "Autoritarisme",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Manipulación",
      french: "Manipulation",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Clientelismo",
      french: "Clientélisme",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Desinformación",
      french: "Désinformation",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Polarización",
      french: "Polarisation",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Censura",
      french: "Censure",
      category: "Corruption et mal gouvernance"
    },
    {
      spanish: "Opacidad",
      french: "Opacité",
      category: "Corruption et mal gouvernance"
    },

    // 7. Fraude et déviances institutionnelles
    {
      spanish: "Apatía",
      french: "Apathie",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Fraude",
      french: "Fraude",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Nepotismo",
      french: "Népotisme",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Demagogia",
      french: "Démagogie",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Exclusión",
      french: "Exclusion",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Injusticia",
      french: "Injustice",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Represión",
      french: "Répression",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Totalitarismo",
      french: "Totalitarisme",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Oligarquía",
      french: "Oligarchie",
      category: "Fraude et déviances institutionnelles"
    },
    {
      spanish: "Elitismo",
      french: "Élitisme",
      category: "Fraude et déviances institutionnelles"
    },

    // 8. Désengagement citoyen et défiance
    {
      spanish: "Abstención",
      french: "Abstention",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Desconfianza",
      french: "Méfiance",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Propaganda",
      french: "Propagande",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Cooptación",
      french: "Cooptation",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Soborno",
      french: "Corruption (pot-de-vin)",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Impunidad",
      french: "Impunité",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Discriminación",
      french: "Discrimination",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Marginación",
      french: "Marginalisation",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Centralización",
      french: "Centralisation",
      category: "Désengagement citoyen et défiance"
    },
    {
      spanish: "Deslegitimación",
      french: "Délégitimation",
      category: "Désengagement citoyen et défiance"
    },

    // 9. Violence et instabilité
    {
      spanish: "Instabilidad",
      french: "Instabilité",
      category: "Violence et instabilité"
    },
    {
      spanish: "Violencia",
      french: "Violence",
      category: "Violence et instabilité"
    },
    {
      spanish: "Intimidación",
      french: "Intimidation",
      category: "Violence et instabilité"
    },
    {
      spanish: "Subversión",
      french: "Subversion",
      category: "Violence et instabilité"
    },
    {
      spanish: "Partidismo",
      french: "Partisanerie",
      category: "Violence et instabilité"
    },
    {
      spanish: "Fanatismo",
      french: "Fanatisme",
      category: "Violence et instabilité"
    },
    {
      spanish: "Radicalización",
      french: "Radicalisation",
      category: "Violence et instabilité"
    },
    {
      spanish: "Burocracia",
      french: "Bureaucratie",
      category: "Violence et instabilité"
    },
    {
      spanish: "Ineficiencia",
      french: "Inefficacité",
      category: "Violence et instabilité"
    },
    {
      spanish: "Despotismo",
      french: "Despotisme",
      category: "Violence et instabilité"
    },

    // 10. Pouvoir et domination
    {
      spanish: "Monopolio",
      french: "Monopole",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Hegemonía",
      french: "Hégémonie",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Coerción",
      french: "Coercition",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Persecución",
      french: "Persécution",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Silenciamiento",
      french: "Mise au silence",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Desmovilización",
      french: "Démobilisation",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Privatización",
      french: "Privatisation",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Mercantilización",
      french: "Marchandisation",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Deshumanización",
      french: "Déshumanisation",
      category: "Pouvoir et domination"
    },
    {
      spanish: "Crisis",
      french: "Crise",
      category: "Pouvoir et domination"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Subtle bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

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
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/espagnol/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Hispanique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/espagnol/civilisation/module1" className="hover:text-foreground transition-colors">
              Política y Regímenes
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Démocratique</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-blue-700 font-bold">
                Vocabulaire Démocratique
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for democracy vocabulary */}
          <UnifiedFlashcards
            data={democracyVocabularyData}
            title="Vocabulaire démocratique espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

export default Module1VocabularyPage;
