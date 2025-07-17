import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Youtube,
  Target,
  TrendingUp,
  Brain,
  Code,
  Star,
  Users,
  Calendar,
  CheckCircle,
  BookOpen,
  Play,
  Home,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Pourquoi travailler Python en prépa ECG</h1>
          <p className="text-xl text-muted-foreground mb-6">(et pourquoi mon coaching est ta meilleure option)</p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Vidéo Loom - L'importance de Python aux concours */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-blue-600" /> L'importance de Python aux concours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Accès direct à la formation */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-8 w-8 text-blue-600" /> Accédez directement à la formation Python ECG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-blue-800 text-lg mb-6">
              Découvrez notre formation complète Python structurée en 4 modules progressifs avec exercices pratiques :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Module Links */}
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 1: Fondamentaux</h4>
                  <p className="text-blue-700 mb-3">Variables, boucles, conditions, fonctions</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-matrices" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 2: Matrices & Numpy</h4>
                  <p className="text-blue-700 mb-3">Algèbre linéaire, résolution de systèmes</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w