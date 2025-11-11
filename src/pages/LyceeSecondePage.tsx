import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Languages, Globe, GraduationCap, Microscope, Music, Palette, ArrowLeft, Users, Heart, Trophy } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeSecondePage = () => {
  const matieres = [
    {
      id: 1,
      nom: "Français",
      description: "Littérature, grammaire, expression écrite et orale",
      icon: BookOpen,
      color: "blue",
      coefficient: "3"
    },
    {
      id: 2,
      nom: "Mathématiques",
      description: "Algèbre, géométrie, statistiques et probabilités",
      icon: Calculator,
      color: "green",
      coefficient: "3"
    },
    {
      id: 3,
      nom: "Histoire-Géographie",
      description: "Histoire moderne et contemporaine, géographie humaine et physique",
      icon: Globe,
      color: "orange",
      coefficient: "3"
    },
    {
      id: 4,
      nom: "Langue Vivante 1",
      description: "Anglais obligatoire - Communication et culture",
      icon: Languages,
      color: "purple",
      coefficient: "3"
    },
    {
      id: 5,
      nom: "Langue Vivante 2",
      description: "Allemand, espagnol, italien ou chinois",
      icon: Languages,
      color: "pink",
      coefficient: "3"
    },
    {
      id: 6,
      nom: "Sciences de la Vie et de la Terre",
      description: "Biologie, géologie, écologie et santé",
      icon: Heart,
      color: "red",
      coefficient: "2"
    },
    {
      id: 7,
      nom: "Physique-Chimie",
      description: "Mécanique, électricité, chimie organique et inorganique",
      icon: Microscope,
      color: "cyan",
      coefficient: "2"
    },
    {
      id: 8,
      nom: "Éducation Physique et Sportive",
      description: "Activités physiques variées et éducation à la santé",
      icon: Trophy,
      color: "lime",
      coefficient: "2"
    },
    {
      id: 9,
      nom: "Sciences Économiques et Sociales",
      description: "Économie, sociologie et droit (option)",
      icon: Users,
      color: "indigo",
      coefficient: "option"
    },
    {
      id: 10,
      nom: "Arts Plastiques",
      description: "Dessin, peinture et histoire des arts",
      icon: Palette,
      color: "amber",
      coefficient: "option"
    },
    {
      id: 11,
      nom: "Musique",
      description: "Pratique instrumentale et histoire de la musique",
      icon: Music,
      color: "rose",
      coefficient: "option"
    },
    {
      id: 12,
      nom: "Latin/Grec",
      description: "Langues anciennes et cultures antiques",
      icon: GraduationCap,
      color: "teal",
      coefficient: "option"
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'text-orange-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-600' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: 'text-pink-600' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'text-red-600' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', icon: 'text-cyan-600' },
    lime: { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-700', icon: 'text-lime-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', icon: 'text-indigo-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'text-amber-600' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', icon: 'text-rose-600' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'text-teal-600' }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for seconde */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Classe de </span>
                <span className="text-blue-600">Seconde</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Découvrez toutes les matières enseignées en classe de seconde et les stratégies pour bien choisir votre voie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Matières Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {matieres.map((matiere) => {
                const IconComponent = matiere.icon;
                const colors = colorClasses[matiere.color as keyof typeof colorClasses];

                return (
                  <Card key={matiere.id} className={`bg-white border-2 ${colors.border} hover:shadow-xl hover:scale-105 transition-all duration-300 group`}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`text-xl ${colors.text} group-hover:text-blue-800 transition-colors duration-300`}>
                            {matiere.nom}
                          </CardTitle>
                          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 mt-1">
                            Coef. {matiere.coefficient}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">
                        {matiere.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Informations complémentaires */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">À propos de la classe de seconde</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Matières obligatoires (9)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Français (3h/semaine)</li>
                    <li>• Mathématiques (4h/semaine)</li>
                    <li>• Histoire-Géographie (3h/semaine)</li>
                    <li>• LV1 Anglais (3h/semaine)</li>
                    <li>• LV2 (3h/semaine)</li>
                    <li>• SVT (2h/semaine)</li>
                    <li>• Physique-Chimie (2h/semaine)</li>
                    <li>• EPS (2h/semaine)</li>
                    <li>• Enseignement moral et civique (0.5h/semaine)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Matières optionnelles</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SES (Sciences Économiques et Sociales)</li>
                    <li>• Arts Plastiques</li>
                    <li>• Musique</li>
                    <li>• Latin/Grec</li>
                    <li>• Langue régionale</li>
                    <li>• Section Européenne</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Note :</strong> L'élève choisit généralement 1 matière optionnelle obligatoire et peut en prendre une seconde en option facultative.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                    Besoin d'aide pour votre orientation ?
                  </h3>
                  <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6">
                    Nos experts vous accompagnent dans vos choix d'orientation et votre réussite scolaire.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-blue-600 hover:bg-orange-600 text-white transition-all duration-300">
                        Nous contacter
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LyceeSecondePage;
