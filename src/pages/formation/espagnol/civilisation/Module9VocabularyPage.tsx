import React, { useState } from 'react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module9VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

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
            <Link to="/formation/espagnol/civilisation/module9" className="hover:text-foreground transition-colors">
              Inteligencia Artificial y Transformación Digital
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire de l'Intelligence Artificielle</span>
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
                Vocabulaire de l'Intelligence Artificielle
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for AI vocabulary */}
          <UnifiedFlashcards
            data={aiVocabularyData}
            title="Vocabulaire de l'Intelligence Artificielle espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

const aiVocabularyData = [
  // 1. Intelligence Artificielle - Concepts fondamentaux
  {
    spanish: "Inteligencia Artificial",
    french: "Intelligence Artificielle",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Aprendizaje Automático",
    french: "Apprentissage Automatique",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Aprendizaje Profundo",
    french: "Apprentissage Profond",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Redes Neuronales",
    french: "Réseaux Neuronaux",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Algoritmo",
    french: "Algorithme",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Machine Learning",
    french: "Apprentissage Machine",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },
  {
    spanish: "Big Data",
    french: "Big Data",
    category: "Intelligence Artificielle - Concepts fondamentaux"
  },

  // 2. Intelligence Artificielle - Technologies et applications
  {
    spanish: "Procesamiento de Lenguaje Natural",
    french: "Traitement du Langage Naturel",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Visión por Computadora",
    french: "Vision par Ordinateur",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Reconocimiento de Voz",
    french: "Reconnaissance Vocale",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Robótica",
    french: "Robotique",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Automatización",
    french: "Automatisation",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Chatbot",
    french: "Chatbot",
    category: "Intelligence Artificielle - Technologies et applications"
  },
  {
    spanish: "Asistente Virtual",
    french: "Assistant Virtuel",
    category: "Intelligence Artificielle - Technologies et applications"
  },

  // 3. Intelligence Artificielle - Éthique et société
  {
    spanish: "Ética en IA",
    french: "Éthique en IA",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Privacidad",
    french: "Confidentialité",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Transparencia",
    french: "Transparence",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Sesgo Algorítmico",
    french: "Biais Algorithmique",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Responsabilidad",
    french: "Responsabilité",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Empleo",
    french: "Emploi",
    category: "Intelligence Artificielle - Éthique et société"
  },
  {
    spanish: "Desplazamiento Laboral",
    french: "Déplacement de Main-d'Oeuvre",
    category: "Intelligence Artificielle - Éthique et société"
  },

  // 4. Transformation Digitale - Concepts fondamentaux
  {
    spanish: "Transformación Digital",
    french: "Transformation Digitale",
    category: "Transformation Digitale - Concepts fondamentaux"
  },
  {
    spanish: "Digitalización",
    french: "Numérisation",
    category: "Transformation Digitale - Concepts fondamentaux"
  },
  {
    spanish: "Innovación Tecnológica",
    french: "Innovation Technologique",
    category: "Transformation Digitale - Concepts fondamentaux"
  },
  {
    spanish: "Industria 4.0",
    french: "Industrie 4.0",
    category: "Transformation Digitale - Concepts fondamentaux"
  },
  {
    spanish: "Internet de las Cosas",
    french: "Internet des Objets",
    category: "Transformation Digitale - Concepts fondamentaux"
  },
  {
    spanish: "Cloud Computing",
    french: "Informatique en Nuage",
    category: "Transformation Digitale - Concepts fondamentaux"
  },

  // 5. Transformation Digitale - Technologies
  {
    spanish: "Blockchain",
    french: "Blockchain",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "Criptomonedas",
    french: "Cryptomonnaies",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "Realidad Virtual",
    french: "Réalité Virtuelle",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "Realidad Aumentada",
    french: "Réalité Augmentée",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "5G",
    french: "5G",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "Ciberseguridad",
    french: "Cybersécurité",
    category: "Transformation Digitale - Technologies"
  },
  {
    spanish: "Hacking",
    french: "Piratage",
    category: "Transformation Digitale - Technologies"
  },

  // 6. Transformation Digitale - Impact sur la société
  {
    spanish: "Teletrabajo",
    french: "Télétravail",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "E-commerce",
    french: "Commerce Électronique",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "Plataforma Digital",
    french: "Plateforme Numérique",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "Economía Colaborativa",
    french: "Économie Collaborative",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "Gig Economy",
    french: "Économie des Plateformes",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "Trabajador Independiente",
    french: "Travailleur Indépendant",
    category: "Transformation Digitale - Impact sur la société"
  },
  {
    spanish: "Redes Sociales",
    french: "Réseaux Sociaux",
    category: "Transformation Digitale - Impact sur la société"
  }
];

export default Module9VocabularyPage;
