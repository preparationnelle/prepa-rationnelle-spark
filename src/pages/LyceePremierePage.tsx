import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Languages, Globe, GraduationCap, Microscope, Music, Palette, ArrowLeft, Users, Heart, Trophy, Target, Atom } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceePremierePage = () => {
  const matieresCommunes = [
    {
      id: 1,
      nom: "Français",
      description: "Littérature, grammaire, expression écrite et orale",
      icon: BookOpen,
      color: "blue",
      coefficient: "3",
      heures: "4h/semaine"
    },
    {
      id: 2,
      nom: "Histoire-Géographie",
      description: "Histoire moderne et contemporaine, géographie humaine et physique",
      icon: Globe,
      color: "orange",
      coefficient: "3",
      heures: "3h/semaine"
    },
    {
      id: 3,
      nom: "Langue Vivante 1",
      description: "Anglais obligatoire - Communication et culture",
      icon: Languages,
      color: "blue",
      coefficient: "3",
      heures: "3h/semaine"
    },
    {
      id: 4,
      nom: "Langue Vivante 2",
      description: "Allemand, espagnol, italien ou chinois",
      icon: Languages,
      color: "orange",
      coefficient: "3",
      heures: "3h/semaine"
    },
    {
      id: 5,
      nom: "Éducation Physique et Sportive",
      description: "Activités physiques variées et éducation à la santé",
      icon: Trophy,
      color: "blue",
      coefficient: "2",
      heures: "2h/semaine"
    },
    {
      id: 6,
      nom: "Enseignement de Spécialité 1",
      description: "Première spécialité choisie par l'élève",
      icon: Target,
      color: "orange",
      coefficient: "5",
      heures: "4h/semaine"
    },
    {
      id: 7,
      nom: "Enseignement de Spécialité 2",
      description: "Deuxième spécialité choisie par l'élève",
      icon: Target,
      color: "blue",
      coefficient: "5",
      heures: "4h/semaine"
    }
  ];

  const specialites = [
    {
      nom: "Mathématiques",
      description: "Algèbre, géométrie, statistiques et probabilités approfondies",
      icon: Calculator,
      color: "blue"
    },
    {
      nom: "Sciences de la Vie et de la Terre",
      description: "Biologie, géologie, écologie et santé",
      icon: Heart,
      color: "orange"
    },
    {
      nom: "Physique-Chimie",
      description: "Mécanique, électricité, chimie organique et inorganique",
      icon: Atom,
      color: "blue"
    },
    {
      nom: "Sciences Économiques et Sociales",
      description: "Économie, sociologie et droit",
      icon: Users,
      color: "orange"
    },
    {
      nom: "Histoire-Géographie, Géopolitique et Sciences Politiques",
      description: "Histoire, géographie et sciences politiques",
      icon: Globe,
      color: "blue"
    },
    {
      nom: "Langues, Littératures et Cultures Étrangères",
      description: "Littérature et culture en langue étrangère",
      icon: Languages,
      color: "orange"
    },
    {
      nom: "Littérature, Langues et Cultures de l'Antiquité",
      description: "Latin, grec et cultures antiques",
      icon: GraduationCap,
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'text-orange-600' }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Orange theme for première */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Classe de </span>
                <span className="text-orange-600">Première</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explorez les matières de première avec spécialisation progressive selon votre série choisie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Matières communes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Matières communes à toutes les séries</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matieresCommunes.map((matiere) => {
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
                        <CardTitle className={`text-xl ${colors.text} group-hover:text-orange-800 transition-colors duration-300`}>
                          {matiere.nom}
                        </CardTitle>
                            <div className="flex gap-2 mt-1">
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                Coef. {matiere.coefficient}
                              </div>
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                {matiere.heures}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300">
                          {matiere.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Spécialités */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Enseignements de spécialité (au choix)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specialites.map((specialite, index) => {
                  const IconComponent = specialite.icon;
                  const colors = colorClasses[specialite.color as keyof typeof colorClasses];

                  return (
                    <Card key={index} className={`bg-white border-2 ${colors.border} hover:shadow-xl hover:scale-105 transition-all duration-300 group`}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                          </div>
                          <div className="flex-1">
                          <CardTitle className={`text-xl ${colors.text} group-hover:text-orange-800 transition-colors duration-300`}>
                            {specialite.nom}
                          </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300">
                          {specialite.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Informations sur les séries */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Les différentes séries en première</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-orange-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-700 mb-2">Série Générale</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    La plus courante avec 2 enseignements de spécialité au choix parmi 7 disciplines.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3 matières communes</li>
                    <li>• 2 spécialités (4h chacune)</li>
                    <li>• Options possibles</li>
                  </ul>
                </div>
                <div className="border border-orange-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-700 mb-2">Série Technologique</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    4 séries technologiques avec une dominante professionnelle spécifique.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• STI2D</li>
                    <li>• STL</li>
                    <li>• STMG</li>
                    <li>• S2TMD</li>
                  </ul>
                </div>
                <div className="border border-orange-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-700 mb-2">Classe Préparatoire</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Préparation intensive aux concours des grandes écoles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MPSI</li>
                    <li>• PCSI</li>
                    <li>• BCPST</li>
                    <li>• etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-700 group-hover:text-blue-800 transition-colors duration-300">
                    Besoin d'aide pour choisir vos spécialités ?
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                    Nos experts vous accompagnent dans vos choix d'orientation et votre réussite scolaire.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-orange-600 hover:bg-blue-600 text-white transition-all duration-300">
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

export default LyceePremierePage;
