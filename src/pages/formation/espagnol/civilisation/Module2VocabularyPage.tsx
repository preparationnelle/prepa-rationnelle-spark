import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module2VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const womenFeminismVocabularyData = [
    // 1. Condition féminine et société
    {
      spanish: "Mujer",
      french: "Femme",
      category: "Condition féminine et société"
    },
    {
      spanish: "Feminidad",
      french: "Féminité",
      category: "Condition féminine et société"
    },
    {
      spanish: "Género",
      french: "Genre",
      category: "Condition féminine et société"
    },
    {
      spanish: "Matriarcado",
      french: "Matriarcat",
      category: "Condition féminine et société"
    },
    {
      spanish: "Patriarcado",
      french: "Patriarcat",
      category: "Condition féminine et société"
    },
    {
      spanish: "Empoderamiento",
      french: "Autonomisation",
      category: "Condition féminine et société"
    },
    {
      spanish: "Autonomía",
      french: "Autonomie",
      category: "Condition féminine et société"
    },
    {
      spanish: "Igualdad",
      french: "Égalité",
      category: "Condition féminine et société"
    },
    {
      spanish: "Equidad",
      french: "Équité",
      category: "Condition féminine et société"
    },
    {
      spanish: "Discriminación",
      french: "Discrimination",
      category: "Condition féminine et société"
    },

    // 2. Vie familiale et maternité
    {
      spanish: "Madre",
      french: "Mère",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Maternidad",
      french: "Maternité",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Embarazo",
      french: "Grossesse",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Parto",
      french: "Accouchement",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Lactancia",
      french: "Allaitement",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Familia",
      french: "Famille",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Matrimonio",
      french: "Mariage",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Divorcio",
      french: "Divorce",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Custodia",
      french: "Garde (des enfants)",
      category: "Vie familiale et maternité"
    },
    {
      spanish: "Conciliación",
      french: "Conciliation (vie pro/vie perso)",
      category: "Vie familiale et maternité"
    },

    // 3. Violence et sécurité
    {
      spanish: "Violencia",
      french: "Violence",
      category: "Violence et sécurité"
    },
    {
      spanish: "Violencia de género",
      french: "Violence de genre",
      category: "Violence et sécurité"
    },
    {
      spanish: "Maltrato",
      french: "Maux traitements",
      category: "Violence et sécurité"
    },
    {
      spanish: "Abuso",
      french: "Abus",
      category: "Violence et sécurité"
    },
    {
      spanish: "Acoso",
      french: "Harcèlement",
      category: "Violence et sécurité"
    },
    {
      spanish: "Acoso sexual",
      french: "Harcèlement sexuel",
      category: "Violence et sécurité"
    },
    {
      spanish: "Agresión",
      french: "Agression",
      category: "Violence et sécurité"
    },
    {
      spanish: "Amenaza",
      french: "Menace",
      category: "Violence et sécurité"
    },
    {
      spanish: "Intimidación",
      french: "Intimidation",
      category: "Violence et sécurité"
    },
    {
      spanish: "Protección",
      french: "Protection",
      category: "Violence et sécurité"
    },

    // 4. Identité et droits
    {
      spanish: "Identidad",
      french: "Identité",
      category: "Identité et droits"
    },
    {
      spanish: "Derechos",
      french: "Droits",
      category: "Identité et droits"
    },
    {
      spanish: "Libertad",
      french: "Liberté",
      category: "Identité et droits"
    },
    {
      spanish: "Autonomía",
      french: "Autonomie",
      category: "Identité et droits"
    },
    {
      spanish: "Cuerpo",
      french: "Corps",
      category: "Identité et droits"
    },
    {
      spanish: "Salud",
      french: "Santé",
      category: "Identité et droits"
    },
    {
      spanish: "Sexualidad",
      french: "Sexualité",
      category: "Identité et droits"
    },
    {
      spanish: "Orientación sexual",
      french: "Orientation sexuelle",
      category: "Identité et droits"
    },
    {
      spanish: "Género",
      french: "Genre",
      category: "Identité et droits"
    },
    {
      spanish: "Expresión",
      french: "Expression",
      category: "Identité et droits"
    },

    // 5. Santé et bien-être
    {
      spanish: "Salud",
      french: "Santé",
      category: "Santé et bien-être"
    },
    {
      spanish: "Bienestar",
      french: "Bien-être",
      category: "Santé et bien-être"
    },
    {
      spanish: "Prevención",
      french: "Prévention",
      category: "Santé et bien-être"
    },
    {
      spanish: "Cuidados",
      french: "Soins",
      category: "Santé et bien-être"
    },
    {
      spanish: "Mental",
      french: "Mental",
      category: "Santé et bien-être"
    },
    {
      spanish: "Emocional",
      french: "Émotionnel",
      category: "Santé et bien-être"
    },
    {
      spanish: "Físico",
      french: "Physique",
      category: "Santé et bien-être"
    },
    {
      spanish: "Reproductivo",
      french: "Reproductif",
      category: "Santé et bien-être"
    },
    {
      spanish: "Ginecológico",
      french: "Gynécologique",
      category: "Santé et bien-être"
    },
    {
      spanish: "Psicológico",
      french: "Psychologique",
      category: "Santé et bien-être"
    },

    // 6. Féminisme et mouvement social
    {
      spanish: "Feminismo",
      french: "Féminisme",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Movimiento",
      french: "Mouvement",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Activismo",
      french: "Activisme",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Lucha",
      french: "Lutte",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Reivindicación",
      french: "Revendication",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Movilización",
      french: "Mobilisation",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Conciencia",
      french: "Conscience",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Solidaridad",
      french: "Solidarité",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Hermandad",
      french: "Sororité",
      category: "Féminisme et mouvement social"
    },
    {
      spanish: "Alianza",
      french: "Alliance",
      category: "Féminisme et mouvement social"
    },

    // 7. Parité et représentativité
    {
      spanish: "Paridad",
      french: "Parité",
      category: "Parité et représentativité"
    },
    {
      spanish: "Representación",
      french: "Représentation",
      category: "Parité et représentativité"
    },
    {
      spanish: "Visibilidad",
      french: "Visibilité",
      category: "Parité et représentativité"
    },
    {
      spanish: "Participación",
      french: "Participation",
      category: "Parité et représentativité"
    },
    {
      spanish: "Acceso",
      french: "Accès",
      category: "Parité et représentativité"
    },
    {
      spanish: "Oportunidad",
      french: "Opportunité",
      category: "Parité et représentativité"
    },
    {
      spanish: "Liderazgo",
      french: "Leadership",
      category: "Parité et représentativité"
    },
    {
      spanish: "Poder",
      french: "Pouvoir",
      category: "Parité et représentativité"
    },
    {
      spanish: "Influencia",
      french: "Influence",
      category: "Parité et représentativité"
    },
    {
      spanish: "Decisión",
      french: "Décision",
      category: "Parité et représentativité"
    },

    // 8. Oppression et résistance
    {
      spanish: "Opresión",
      french: "Oppression",
      category: "Oppression et résistance"
    },
    {
      spanish: "Resistencia",
      french: "Résistance",
      category: "Oppression et résistance"
    },
    {
      spanish: "Lucha",
      french: "Lutte",
      category: "Oppression et résistance"
    },
    {
      spanish: "Liberación",
      french: "Libération",
      category: "Oppression et résistance"
    },
    {
      spanish: "Rebelión",
      french: "Rébellion",
      category: "Oppression et résistance"
    },
    {
      spanish: "Desobediencia",
      french: "Désobéissance",
      category: "Oppression et résistance"
    },
    {
      spanish: "Protesta",
      french: "Protestation",
      category: "Oppression et résistance"
    },
    {
      spanish: "Manifestación",
      french: "Manifestation",
      category: "Oppression et résistance"
    },
    {
      spanish: "Boicot",
      french: "Boycott",
      category: "Oppression et résistance"
    },
    {
      spanish: "Desafío",
      french: "Défi",
      category: "Oppression et résistance"
    },

    // 9. Cadre légal et institutionnel
    {
      spanish: "Ley",
      french: "Loi",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Constitución",
      french: "Constitution",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Derecho",
      french: "Droit",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Justicia",
      french: "Justice",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Institución",
      french: "Institution",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Política",
      french: "Politique",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Gobierno",
      french: "Gouvernement",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Administración",
      french: "Administration",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Público",
      french: "Public",
      category: "Cadre légal et institutionnel"
    },
    {
      spanish: "Privado",
      french: "Privé",
      category: "Cadre légal et institutionnel"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Subtle bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

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
            <Link to="/formation/espagnol/civilisation/module2" className="hover:text-foreground transition-colors">
              Mujeres y Violencia de Género
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Féminin</span>
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
                Vocabulaire Féminin
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for women/feminism vocabulary */}
          <UnifiedFlashcards
            data={womenFeminismVocabularyData}
            title="Vocabulaire féminin espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

// Component migrated to use UnifiedFlashcards
export default Module2VocabularyPage;
