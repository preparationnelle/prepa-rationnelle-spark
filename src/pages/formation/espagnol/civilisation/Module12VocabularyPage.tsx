import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module12VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

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
            <Link to="/formation/espagnol/civilisation/module12" className="hover:text-foreground transition-colors">
              Desigualdades y Pobreza
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire des Inégalités</span>
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
                Vocabulaire des Inégalités
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Custom flashcards component for inequalities vocabulary */}
          <InequalitiesVocabularyFlashcards />
        </div>
      </div>
    </div>
  );
};

// Custom flashcards component specifically for inequalities vocabulary
const InequalitiesVocabularyFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Référence pour le focus automatique
  const flashcardsRef = React.useRef<HTMLDivElement>(null);

  const inequalitiesVocabularyData = [
    // 1. Concepts d'inégalités générales
    {
      spanish: "Desigualdad",
      french: "Inégalité",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Inequidad",
      french: "Iniquité",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Disparidad",
      french: "Disparité",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Brecha social",
      french: "Fossé social",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Exclusión social",
      french: "Exclusion sociale",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Marginalización",
      french: "Marginalisation",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Discriminación",
      french: "Discrimination",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Segregación",
      french: "Ségrégation",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Desventaja",
      french: "Désavantage",
      category: "Concepts d'inégalités générales"
    },
    {
      spanish: "Privilegio",
      french: "Privilège",
      category: "Concepts d'inégalités générales"
    },

    // 2. Inégalités économiques
    {
      spanish: "Pobreza",
      french: "Pauvreté",
      category: "Inégalités économiques"
    },
    {
      spanish: "Renta",
      french: "Revenus",
      category: "Inégalités économiques"
    },
    {
      spanish: "Ingreso per cápita",
      french: "Revenu par habitant",
      category: "Inégalités économiques"
    },
    {
      spanish: "Coeficiente de Gini",
      french: "Coefficient de Gini",
      category: "Inégalités économiques"
    },
    {
      spanish: "Distribución de la riqueza",
      french: "Distribution de la richesse",
      category: "Inégalités économiques"
    },
    {
      spanish: "Brecha salarial",
      french: "Écart salarial",
      category: "Inégalités économiques"
    },
    {
      spanish: "Desempleo",
      french: "Chômage",
      category: "Inégalités économiques"
    },
    {
      spanish: "Subempleo",
      french: "Sous-emploi",
      category: "Inégalités économiques"
    },
    {
      spanish: "Trabajo informal",
      french: "Travail informel",
      category: "Inégalités économiques"
    },
    {
      spanish: "Pobreza extrema",
      french: "Pauvreté extrême",
      category: "Inégalités économiques"
    },

    // 3. Inégalités sociales et culturelles
    {
      spanish: "Clase social",
      french: "Classe sociale",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Movilidad social",
      french: "Mobilité sociale",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Capital social",
      french: "Capital social",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Capital cultural",
      french: "Capital culturel",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Redes sociales",
      french: "Réseaux sociaux",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Etnia",
      french: "Ethnie",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Raza",
      french: "Race",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Género",
      french: "Genre",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Orientación sexual",
      french: "Orientation sexuelle",
      category: "Inégalités sociales et culturelles"
    },
    {
      spanish: "Identidad de género",
      french: "Identité de genre",
      category: "Inégalités sociales et culturelles"
    },

    // 4. Inégalités éducatives
    {
      spanish: "Analfabetismo",
      french: "Analphabétisme",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Abandono escolar",
      french: "Abandon scolaire",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Fracaso escolar",
      french: "Échec scolaire",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Brecha educativa",
      french: "Fossé éducatif",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Educación inclusiva",
      french: "Éducation inclusive",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Acceso a la educación",
      french: "Accès à l'éducation",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Calidad educativa",
      french: "Qualité éducative",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Formación docente",
      french: "Formation des enseignants",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Material didáctico",
      french: "Matériel didactique",
      category: "Inégalités éducatives"
    },
    {
      spanish: "Tecnología educativa",
      french: "Technologie éducative",
      category: "Inégalités éducatives"
    },

    // 5. Inégalités de santé
    {
      spanish: "Acceso a la salud",
      french: "Accès à la santé",
      category: "Inégalités de santé"
    },
    {
      spanish: "Cobertura sanitaria",
      french: "Couverture sanitaire",
      category: "Inégalités de santé"
    },
    {
      spanish: "Sistema de salud",
      french: "Système de santé",
      category: "Inégalités de santé"
    },
    {
      spanish: "Esperanza de vida",
      french: "Espérance de vie",
      category: "Inégalités de santé"
    },
    {
      spanish: "Mortalidad infantil",
      french: "Mortalité infantile",
      category: "Inégalités de santé"
    },
    {
      spanish: "Enfermedades crónicas",
      french: "Maladies chroniques",
      category: "Inégalités de santé"
    },
    {
      spanish: "Obesidad",
      french: "Obésité",
      category: "Inégalités de santé"
    },
    {
      spanish: "Malnutrición",
      french: "Malnutrition",
      category: "Inégalités de santé"
    },
    {
      spanish: "Salud mental",
      french: "Santé mentale",
      category: "Inégalités de santé"
    },
    {
      spanish: "Prevención sanitaria",
      french: "Prévention sanitaire",
      category: "Inégalités de santé"
    },

    // 6. Inégalités territoriales
    {
      spanish: "Desarrollo regional",
      french: "Développement régional",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Área urbana",
      french: "Zone urbaine",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Área rural",
      french: "Zone rurale",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Migración interna",
      french: "Migration interne",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Despoblación",
      french: "Dépopulation",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Infraestructuras",
      french: "Infrastructures",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Transporte público",
      french: "Transport public",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Conectividad digital",
      french: "Connectivité numérique",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Servicios básicos",
      french: "Services de base",
      category: "Inégalités territoriales"
    },
    {
      spanish: "Brecha digital",
      french: "Fossé numérique",
      category: "Inégalités territoriales"
    },

    // 7. Politiques de réduction des inégalités
    {
      spanish: "Políticas sociales",
      french: "Politiques sociales",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Redistribución",
      french: "Redistribution",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Impuestos progresivos",
      french: "Impôts progressifs",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Transferencias sociales",
      french: "Transferts sociaux",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Salario mínimo",
      french: "Salaire minimum",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Protección social",
      french: "Protection sociale",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Servicios públicos",
      french: "Services publics",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Educación gratuita",
      french: "Éducation gratuite",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Salud universal",
      french: "Santé universelle",
      category: "Politiques de réduction des inégalités"
    },
    {
      spanish: "Lucha contra la pobreza",
      french: "Lutte contre la pauvreté",
      category: "Politiques de réduction des inégalités"
    },

    // 8. Mesure et évaluation des inégalités
    {
      spanish: "Indicadores sociales",
      french: "Indicateurs sociaux",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Estadísticas oficiales",
      french: "Statistiques officielles",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Encuestas socioeconómicas",
      french: "Enquêtes socio-économiques",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Índice de desarrollo humano",
      french: "Indice de développement humain",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "IDH",
      french: "IDH",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Pobreza multidimensional",
      french: "Pauvreté multidimensionnelle",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Desigualdad de género",
      french: "Inégalité de genre",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Brecha de género",
      french: "Écart de genre",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Monitoreo",
      french: "Suivi",
      category: "Mesure et évaluation des inégalités"
    },
    {
      spanish: "Evaluación de impacto",
      french: "Évaluation d'impact",
      category: "Mesure et évaluation des inégalités"
    }
  ];

  const categorizedData = [
    {
      category: "Concepts d'inégalités générales",
      items: inequalitiesVocabularyData.filter(item => item.category === "Concepts d'inégalités générales")
    },
    {
      category: "Inégalités économiques",
      items: inequalitiesVocabularyData.filter(item => item.category === "Inégalités économiques")
    },
    {
      category: "Inégalités sociales et culturelles",
      items: inequalitiesVocabularyData.filter(item => item.category === "Inégalités sociales et culturelles")
    },
    {
      category: "Inégalités éducatives",
      items: inequalitiesVocabularyData.filter(item => item.category === "Inégalités éducatives")
    },
    {
      category: "Inégalités de santé",
      items: inequalitiesVocabularyData.filter(item => item.category === "Inégalités de santé")
    },
    {
      category: "Inégalités territoriales",
      items: inequalitiesVocabularyData.filter(item => item.category === "Inégalités territoriales")
    },
    {
      category: "Politiques de réduction des inégalités",
      items: inequalitiesVocabularyData.filter(item => item.category === "Politiques de réduction des inégalités")
    },
    {
      category: "Mesure et évaluation des inégalités",
      items: inequalitiesVocabularyData.filter(item => item.category === "Mesure et évaluation des inégalités")
    }
  ];

  const filteredData = selectedCategory === 'all'
    ? inequalitiesVocabularyData
    : inequalitiesVocabularyData.filter(item => item.category === selectedCategory);

  const reviewData = isReviewMode
    ? filteredData.filter((_, index) => reviewCards.has(index))
    : filteredData;

  const totalCards = reviewData.length;
  const currentCard = totalCards > 0 ? reviewData[currentIndex] : null;

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const markAsStudied = () => {
    setStudiedCards(prev => new Set([...prev, currentIndex]));
  };

  const markForReview = () => {
    setReviewCards(prev => new Set([...prev, currentIndex]));
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    setReviewCards(new Set());
    setIsReviewMode(false);
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const handleTouchStart = () => {
    setTouchStartX(0);
  };

  const handleTouchEnd = () => {
    setTouchEndX(0);
  };

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
  };

  // Gestionnaire d'événements clavier
  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        prevCard();
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextCard();
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextCard();
        break;
      case 'ArrowDown':
        event.preventDefault();
        prevCard();
        break;
      case 'Enter':
        event.preventDefault();
        toggleAnswer();
        break;
      case ' ': // Espace aussi pour retourner la carte
        event.preventDefault();
        toggleAnswer();
        break;
      case 'r':
      case 'R':
        event.preventDefault();
        markForReview();
        break;
      default:
        break;
    }
  };

  // Configuration des event listeners du clavier et focus automatique
  useEffect(() => {
    // Donner le focus au composant au montage
    if (flashcardsRef.current) {
      flashcardsRef.current.focus();
    }

    // Ajouter l'event listener
    document.addEventListener('keydown', handleKeyPress);

    // Nettoyer l'event listener lors du démontage du composant
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, showAnswer, totalCards]); // Dépendances pour que les fonctions soient à jour

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <p className="text-gray-600">Aucune carte disponible pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div
      ref={flashcardsRef}
      className="max-w-4xl mx-auto p-4"
      tabIndex={-1}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Vocabulaire des Inégalités espagnol-français
            {isReviewMode && <span className="text-red-600 text-lg">🔄 Mode révision</span>}
          </h2>
          <div className="flex gap-2">
            {reviewCards.size > 0 && (
              <button
                onClick={toggleReviewMode}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  isReviewMode
                    ? 'bg-red-100 hover:bg-red-200 text-red-700'
                    : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
                }`}
              >
                {isReviewMode ? 'Quitter révision' : `À revoir (${reviewCards.size})`}
              </button>
            )}
            <button onClick={resetProgress} className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              Recommencer
            </button>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Toutes ({inequalitiesVocabularyData.length})
            </Badge>
            {categorizedData.map(cat => (
              <Badge
                key={cat.category}
                variant={selectedCategory === cat.category ? 'default' : 'secondary'}
                className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === cat.category ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => handleCategoryChange(cat.category)}
              >
                {cat.category} ({cat.items.length})
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            Carte {currentIndex + 1} sur {totalCards}
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Étudiées : {studiedCards.size} / {totalCards}
          </Badge>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Carte principale */}
      <div
        className="flex justify-center mb-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Card
          className={`w-full max-w-lg h-80 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
            showAnswer ? 'border-orange-300 bg-orange-50' : 'border-blue-300 bg-blue-50'
          }`}
          onClick={toggleAnswer}
        >
          <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
            <Badge variant="outline" className="mb-6">
              {currentCard.category}
            </Badge>

            <h2 className={`text-4xl font-bold mb-6 transition-colors ${
              showAnswer ? 'text-orange-700' : 'text-blue-700'
            }`}>
              {showAnswer ? currentCard.french : currentCard.spanish}
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              {showAnswer ? 'Français' : 'Espagnol'}
            </p>

            <p className="text-sm text-gray-500">
              {showAnswer ? 'Cliquez pour retourner la carte' : 'Cliquez pour voir la traduction française'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={prevCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </button>

        <button
          onClick={toggleAnswer}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {showAnswer ? 'Masquer la traduction' : 'Voir la traduction'}
        </button>

        <button
          onClick={nextCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Boutons d'action */}
      <div className="flex justify-center gap-4">
        <button
          onClick={markAsStudied}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            studiedCards.has(currentIndex)
              ? 'bg-green-100 border-green-300 text-green-700'
              : 'bg-white border-gray-200 hover:bg-gray-50'
          }`}
        >
          {studiedCards.has(currentIndex) ? '✓ Étudié' : 'Marquer comme étudié'}
        </button>

        <button
          onClick={markForReview}
          className="flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
        >
          À revoir plus tard
        </button>
      </div>

      {/* Raccourcis clavier */}
      <div className="text-center text-xs text-gray-500 mt-6">
        <p>Raccourcis clavier : ← → pour naviguer, Entrée/Espace pour retourner la carte, R pour marquer à revoir</p>
      </div>
    </div>
  );
};

export default Module12VocabularyPage;
