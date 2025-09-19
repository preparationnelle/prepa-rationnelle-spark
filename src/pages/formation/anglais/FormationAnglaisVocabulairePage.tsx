import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight, Leaf, Users, DollarSign, Heart, GraduationCap, Newspaper, Globe, UserCheck, Scale, Briefcase, Zap, Split, Cpu, Flag, Shield, Church, Crown, AlertTriangle } from 'lucide-react';
import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const FormationAnglaisVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
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
              Formation <span className="text-blue-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">
              <span className="text-blue-600">Vocabulaire Anglais</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-lg">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-blue-700 font-bold">
                Vocabulaire Anglais
              </span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Maîtrisez le lexique essentiel pour vos concours ECG - Plus de 1000 mots
          </p>

        </div>


        {/* Main Flashcards Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-blue-100 shadow-xl">
            <CardContent className="p-6">
              <VocabularyFlashcards language={language} />
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vocabulaire par Thème</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez le vocabulaire spécialisé par domaine de civilisation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <Link to="/formation/anglais/civilisation/environment/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <Leaf className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">Environnement</h3>
                  <p className="text-xs text-gray-500">Écologie & Climat</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/politics/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Politique</h3>
                  <p className="text-xs text-gray-500">Institutions & Pouvoir</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/economy/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-green-300 bg-white hover:bg-green-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <DollarSign className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">Économie</h3>
                  <p className="text-xs text-gray-500">Finance & Commerce</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/health/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-red-300 bg-white hover:bg-red-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Heart className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">Santé</h3>
                  <p className="text-xs text-gray-500">Médecine & Bien-être</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/education/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-purple-300 bg-white hover:bg-purple-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <GraduationCap className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">Éducation</h3>
                  <p className="text-xs text-gray-500">Apprentissage & Formation</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/media/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <Newspaper className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">Médias</h3>
                  <p className="text-xs text-gray-500">Information & Communication</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/geopolitics/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Globe className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors">Géopolitique</h3>
                  <p className="text-xs text-gray-500">Relations Internationales</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/immigration/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-cyan-300 bg-white hover:bg-cyan-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors duration-300">
                    <UserCheck className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors">Immigration</h3>
                  <p className="text-xs text-gray-500">Migration & Intégration</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/justice/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-amber-300 bg-white hover:bg-amber-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Scale className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">Justice</h3>
                  <p className="text-xs text-gray-500">Droit & Équité</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/labor/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-slate-300 bg-white hover:bg-slate-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                    <Briefcase className="h-7 w-7 text-slate-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-slate-700 transition-colors">Travail</h3>
                  <p className="text-xs text-gray-500">Emploi & Syndicalisme</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/polarization/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-rose-300 bg-white hover:bg-rose-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                    <Split className="h-7 w-7 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-rose-700 transition-colors">Polarisation</h3>
                  <p className="text-xs text-gray-500">Division Sociale</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/ai-technology/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-violet-300 bg-white hover:bg-violet-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors duration-300">
                    <Cpu className="h-7 w-7 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-violet-700 transition-colors">IA & Tech</h3>
                  <p className="text-xs text-gray-500">Innovation Numérique</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/brexit/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-teal-300 bg-white hover:bg-teal-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Flag className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">Brexit</h3>
                  <p className="text-xs text-gray-500">Europe & Royaume-Uni</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/civil-rights/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-lime-300 bg-white hover:bg-lime-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors duration-300">
                    <Shield className="h-7 w-7 text-lime-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-lime-700 transition-colors">Droits Civils</h3>
                  <p className="text-xs text-gray-500">Libertés & Égalité</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/civil-religion/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-yellow-300 bg-white hover:bg-yellow-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <Church className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-yellow-700 transition-colors">Religion Civile</h3>
                  <p className="text-xs text-gray-500">Valeurs & Société</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/commonwealth/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-pink-300 bg-white hover:bg-pink-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <Crown className="h-7 w-7 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors">Commonwealth</h3>
                  <p className="text-xs text-gray-500">Nations Unies</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/formation/anglais/civilisation/crises/vocabulary" className="group">
              <Card className="h-full border border-gray-200 hover:border-stone-300 bg-white hover:bg-stone-50/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-stone-200 transition-colors duration-300">
                    <AlertTriangle className="h-7 w-7 text-stone-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-stone-700 transition-colors">Crises</h3>
                  <p className="text-xs text-gray-500">Urgences & Défis</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisVocabulairePage;
