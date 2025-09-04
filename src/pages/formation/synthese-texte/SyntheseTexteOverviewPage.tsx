import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, AlertCircle, BookOpen, Brain, Calendar, BarChart3 } from 'lucide-react';

const SyntheseTexteOverviewPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <div className="h-3 w-3">🏠</div>
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/synthese-texte" className="hover:text-foreground transition-colors">
              Formation Synthèse de Texte
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Guide Complet</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/synthese-texte">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Guide Complet de la Synthèse de Texte ECG
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Méthodologie complète pour maîtriser l'épreuve de synthèse
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="space-y-8">
          {/* Section 1 - Importance stratégique */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                L'importance stratégique de la synthèse de texte
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              La synthèse de texte représente l'une des épreuves les plus exigeantes des concours ECG.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• Coefficient élevé : épreuve déterminante</div>
              <div className="text-sm text-gray-700">• Temps limité : 4 heures sous pression</div>
              <div className="text-sm text-gray-700">• Méthodologie rigoureuse requise</div>
            </div>
          </div>

          {/* Section 2 - L'épreuve aux concours */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                L'épreuve de synthèse aux concours ECG
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Format général</h4>
                <p className="text-sm text-gray-700">4 heures - épreuve commune</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Sujet type</h4>
                <p className="text-sm text-gray-700">2-3 textes à analyser</p>
              </div>
            </div>
          </div>

          {/* Section 3 - Types de sujets */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                Les types de sujets aux concours ECG
              </h2>
            </div>
            <div className="space-y-4">
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Économie et société</h4>
                <p className="text-sm text-gray-700">Mondialisation, croissance, emploi</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Géopolitique</h4>
                <p className="text-sm text-gray-700">Conflits, intégration européenne</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Environnement</h4>
                <p className="text-sm text-gray-700">Transition énergétique, développement durable</p>
              </div>
            </div>
          </div>

          {/* Section 4 - Méthodologie */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                Méthodologie de l'épreuve
              </h2>
            </div>
            <div className="space-y-4">
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 1 : Lecture et analyse (60 min)</h4>
                <p className="text-sm text-gray-700">Lire les textes, identifier les idées principales</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 2 : Structuration (45 min)</h4>
                <p className="text-sm text-gray-700">Organiser les idées, établir le plan</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 3 : Rédaction (90 min)</h4>
                <p className="text-sm text-gray-700">Rédiger la synthèse de manière claire</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Phase 4 : Relecture (45 min)</h4>
                <p className="text-sm text-gray-700">Vérifier et finaliser le travail</p>
              </div>
            </div>
          </div>

          {/* Section 5 - Travail annuel */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                Organisation du travail annuel
              </h2>
            </div>
            <div className="space-y-4">
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Septembre - Novembre</h4>
                <p className="text-sm text-gray-700">Acquisition des bases et méthodologie</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Décembre - Mars</h4>
                <p className="text-sm text-gray-700">Entraînement intensif et perfectionnement</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Avril - Concours</h4>
                <p className="text-sm text-gray-700">Maintien du niveau et préparation mentale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prêt à maîtriser la synthèse de texte ?</h3>
            <p className="text-gray-700 mb-6">
              Cette méthodologie vous donne toutes les clés pour réussir l'épreuve de synthèse de texte aux concours ECG.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Commencer l'entraînement
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/synthese-texte">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation synthèse de texte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SyntheseTexteOverviewPage;
