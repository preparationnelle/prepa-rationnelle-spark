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

const Module11VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="carnet-paper min-h-screen relative overflow-hidden font-instrument text-carnet-ink">
      {/* Floating elements - Subtle bubbles */}

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Hispanique
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol/civilisation/module11" className="hover:text-foreground transition-colors">
              Transición Energética Española
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Énergétique Espagnol</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-carnet-red text-carnet-paper shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-carnet-red font-bold">
                Vocabulaire Énergétique Espagnol
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Custom flashcards component for energy vocabulary */}
          <EnergyVocabularyFlashcards />
        </div>
      </div>
    </div>
  );
};

// Custom flashcards component specifically for energy vocabulary
const EnergyVocabularyFlashcards: React.FC = () => {
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

  const energyVocabularyData = [
    // 1. Energía renovable y fuentes limpias
    {
      spanish: "Energía renovable",
      french: "Énergie renouvelable",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía solar",
      french: "Énergie solaire",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía eólica",
      french: "Énergie éolienne",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía hidroeléctrica",
      french: "Énergie hydroélectrique",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Paneles solares",
      french: "Panneaux solaires",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Aerogeneradores",
      french: "Éoliennes",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Biomasa",
      french: "Biomasse",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía geotérmica",
      french: "Énergie géothermique",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía mareomotriz",
      french: "Énergie marémotrice",
      category: "Energía renovable y fuentes limpias"
    },
    {
      spanish: "Energía fotovoltaica",
      french: "Énergie photovoltaïque",
      category: "Energía renovable y fuentes limpias"
    },

    // 2. Transición energética y políticas
    {
      spanish: "Transición energética",
      french: "Transition énergétique",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Objetivos climáticos",
      french: "Objectifs climatiques",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Neutralidad carbono",
      french: "Neutralité carbone",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Plan Nacional Integrado de Energía y Clima",
      french: "Plan National Intégré d'Énergie et Climat",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Ley de Cambio Climático",
      french: "Loi sur le changement climatique",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Retirada del carbón",
      french: "Sortie du charbon",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Descarbonización",
      french: "Décarbonisation",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Energía sostenible",
      french: "Énergie durable",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Política energética",
      french: "Politique énergétique",
      category: "Transición energética y políticas"
    },
    {
      spanish: "Transición justa",
      french: "Transition juste",
      category: "Transición energética y políticas"
    },

    // 3. Infraestructuras y redes eléctricas
    {
      spanish: "Red eléctrica",
      french: "Réseau électrique",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Interconexiones",
      french: "Interconnexions",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Almacenamiento de energía",
      french: "Stockage d'énergie",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Baterías de litio",
      french: "Batteries au lithium",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Red de transporte",
      french: "Réseau de transport",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Red de distribución",
      french: "Réseau de distribution",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Smart grids",
      french: "Réseaux intelligents",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Contadores inteligentes",
      french: "Compteurs intelligents",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Electrificación",
      french: "Électrification",
      category: "Infraestructuras y redes eléctricas"
    },
    {
      spanish: "Microredes",
      french: "Microréseaux",
      category: "Infraestructuras y redes eléctricas"
    },

    // 4. Sector industrial y económico
    {
      spanish: "Sector industrial",
      french: "Secteur industriel",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Industria electrointensiva",
      french: "Industrie électro-intensive",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Competitividad energética",
      french: "Compétitivité énergétique",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Coste de la energía",
      french: "Coût de l'énergie",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Empleo verde",
      french: "Emploi vert",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Cadena de valor",
      french: "Chaîne de valeur",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Inversiones verdes",
      french: "Investissements verts",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Economía circular",
      french: "Économie circulaire",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Sostenibilidad",
      french: "Durabilité",
      category: "Sector industrial y económico"
    },
    {
      spanish: "Crecimiento sostenible",
      french: "Croissance durable",
      category: "Sector industrial y económico"
    },

    // 5. Hidrógeno y tecnologías emergentes
    {
      spanish: "Hidrógeno verde",
      french: "Hydrogène vert",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Electrolizadores",
      french: "Électrolyseurs",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Hidrógeno azul",
      french: "Hydrogène bleu",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Vehículos eléctricos",
      french: "Véhicules électriques",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Puntos de recarga",
      french: "Points de recharge",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Tecnologías emergentes",
      french: "Technologies émergentes",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Innovación tecnológica",
      french: "Innovation technologique",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "I+D+i",
      french: "R&D+i",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Captura de carbono",
      french: "Capture de carbone",
      category: "Hidrógeno y tecnologías emergentes"
    },
    {
      spanish: "Almacenamiento de CO2",
      french: "Stockage de CO2",
      category: "Hidrógeno y tecnologías emergentes"
    },

    // 6. Impactos ambientales y sociales
    {
      spanish: "Huella de carbono",
      french: "Empreinte carbone",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Emisiones de CO2",
      french: "Émissions de CO2",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Calentamiento global",
      french: "Réchauffement climatique",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Cambio climático",
      french: "Changement climatique",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Contaminación atmosférica",
      french: "Pollution atmosphérique",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Biodiversidad",
      french: "Biodiversité",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Transición justa",
      french: "Transition juste",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Comunidades locales",
      french: "Communautés locales",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Participación ciudadana",
      french: "Participation citoyenne",
      category: "Impactos ambientales y sociales"
    },
    {
      spanish: "Educación ambiental",
      french: "Éducation environnementale",
      category: "Impactos ambientales y sociales"
    },

    // 7. Gobernanza y regulación
    {
      spanish: "Marco regulatorio",
      french: "Cadre réglementaire",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Autoridad reguladora",
      french: "Autorité de régulation",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Subastas renovables",
      french: "Enchères renouvelables",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Permisos de acceso",
      french: "Autorisations d'accès",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Tarifas eléctricas",
      french: "Tarifs électriques",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Sistema eléctrico",
      french: "Système électrique",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Operador del sistema",
      french: "Opérateur du système",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Mercado eléctrico",
      french: "Marché électrique",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Certificados verdes",
      french: "Certificats verts",
      category: "Gobernanza y regulación"
    },
    {
      spanish: "Auditorías energéticas",
      french: "Audits énergétiques",
      category: "Gobernanza y regulación"
    },

    // 8. Desafíos y oportunidades
    {
      spanish: "Dependencia energética",
      french: "Dépendance énergétique",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Seguridad energética",
      french: "Sécurité énergétique",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Volatilidad de precios",
      french: "Volatilité des prix",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Intermitencia renovable",
      french: "Intermittence renouvelable",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Curva de aprendizaje",
      french: "Courbe d'apprentissage",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Escala económica",
      french: "Échelle économique",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Financiación sostenible",
      french: "Financement durable",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Cooperación internacional",
      french: "Coopération internationale",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Objetivos de desarrollo sostenible",
      french: "Objectifs de développement durable",
      category: "Desafíos y oportunidades"
    },
    {
      spanish: "Agenda 2030",
      french: "Agenda 2030",
      category: "Desafíos y oportunidades"
    }
  ];

  const categorizedData = [
    {
      category: "Energía renovable y fuentes limpias",
      items: energyVocabularyData.filter(item => item.category === "Energía renovable y fuentes limpias")
    },
    {
      category: "Transición energética y políticas",
      items: energyVocabularyData.filter(item => item.category === "Transición energética y políticas")
    },
    {
      category: "Infraestructuras y redes eléctricas",
      items: energyVocabularyData.filter(item => item.category === "Infraestructuras y redes eléctricas")
    },
    {
      category: "Sector industrial y económico",
      items: energyVocabularyData.filter(item => item.category === "Sector industrial y económico")
    },
    {
      category: "Hidrógeno y tecnologías emergentes",
      items: energyVocabularyData.filter(item => item.category === "Hidrógeno y tecnologías emergentes")
    },
    {
      category: "Impactos ambientales y sociales",
      items: energyVocabularyData.filter(item => item.category === "Impactos ambientales y sociales")
    },
    {
      category: "Gobernanza y regulación",
      items: energyVocabularyData.filter(item => item.category === "Gobernanza y regulación")
    },
    {
      category: "Desafíos y oportunidades",
      items: energyVocabularyData.filter(item => item.category === "Desafíos y oportunidades")
    }
  ];

  const filteredData = selectedCategory === 'all'
    ? energyVocabularyData
    : energyVocabularyData.filter(item => item.category === selectedCategory);

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
        <p className="text-carnet-ink-mute">Aucune carte disponible pour cette catégorie.</p>
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
            <BookOpen className="h-6 w-6 text-carnet-red" />
            Vocabulaire énergétique espagnol-français
            {isReviewMode && <span className="text-red-600 text-lg">🔄 Mode révision</span>}
          </h2>
          <div className="flex gap-2">
            {reviewCards.size > 0 && (
              <button
                onClick={toggleReviewMode}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  isReviewMode
                    ? 'bg-red-100 hover:bg-red-200 text-red-700'
                    : 'bg-[rgba(193,68,58,0.08)] hover:bg-[rgba(193,68,58,0.15)] text-carnet-red'
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
            <span className="text-sm font-medium text-carnet-ink-soft">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              className={`cursor-pointer hover:bg-[rgba(193,68,58,0.08)] ${selectedCategory === 'all' ? 'bg-carnet-red text-carnet-paper' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Toutes ({energyVocabularyData.length})
            </Badge>
            {categorizedData.map(cat => (
              <Badge
                key={cat.category}
                variant={selectedCategory === cat.category ? 'default' : 'secondary'}
                className={`cursor-pointer hover:bg-[rgba(193,68,58,0.08)] ${selectedCategory === cat.category ? 'bg-carnet-red text-carnet-paper' : ''}`}
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
            className="bg-carnet-red h-3 rounded-full transition-all duration-300"
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
            showAnswer ? 'border-[rgba(193,68,58,0.35)] bg-[rgba(193,68,58,0.05)]' : 'border-[rgba(193,68,58,0.35)] bg-[rgba(193,68,58,0.05)]'
          }`}
          onClick={toggleAnswer}
        >
          <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
            <Badge variant="outline" className="mb-6">
              {currentCard.category}
            </Badge>

            <h2 className={`text-4xl font-bold mb-6 transition-colors ${
              showAnswer ? 'text-carnet-red' : 'text-carnet-red'
            }`}>
              {showAnswer ? currentCard.french : currentCard.spanish}
            </h2>

            <p className="text-carnet-ink-mute mb-6 text-lg">
              {showAnswer ? 'Français' : 'Espagnol'}
            </p>

            <p className="text-sm text-carnet-ink-mute">
              {showAnswer ? 'Cliquez pour retourner la carte' : 'Cliquez pour voir la traduction française'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={prevCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-dashed border-[rgba(78,55,30,0.18)] hover:carnet-paper-plain transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </button>

        <button
          onClick={toggleAnswer}
          className="px-6 py-3 bg-carnet-red text-carnet-paper rounded-lg hover:bg-carnet-red transition-colors font-medium"
        >
          {showAnswer ? 'Masquer la traduction' : 'Voir la traduction'}
        </button>

        <button
          onClick={nextCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-dashed border-[rgba(78,55,30,0.18)] hover:carnet-paper-plain transition-colors"
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
              ? 'bg-green-100 border-green-300 text-carnet-ink-soft'
              : 'bg-white border-gray-200 hover:carnet-paper-plain'
          }`}
        >
          {studiedCards.has(currentIndex) ? '✓ Étudié' : 'Marquer comme étudié'}
        </button>

        <button
          onClick={markForReview}
          className="flex items-center gap-2 px-4 py-2 bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.35)] text-carnet-red rounded-lg hover:bg-[rgba(193,68,58,0.15)] transition-colors"
        >
          À revoir plus tard
        </button>
      </div>

      {/* Raccourcis clavier */}
      <div className="text-center text-xs text-carnet-ink-mute mt-6">
        <p>Raccourcis clavier : ← → pour naviguer, Entrée/Espace pour retourner la carte, R pour marquer à revoir</p>
      </div>
    </div>
  );
};

export default Module11VocabularyPage;
