import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Languages, Globe, GraduationCap, Microscope, Music, Palette, ArrowLeft, Users, Heart, Trophy, Target, Atom, Award, Briefcase } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeTerminalePage = () => {

  const matieresCommunes = [
    {
      id: 1,
      nom: "Philosophie",
      description: "Réflexion sur les grands problèmes de l'existence et de la connaissance",
      icon: GraduationCap,
      color: "blue",
      coefficient: "3",
      heures: "3h/semaine"
    },
    {
      id: 2,
      nom: "Histoire-Géographie",
      description: "Histoire moderne et contemporaine, géographie humaine et physique",
      icon: Globe,
      color: "blue",
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
      color: "blue",
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
      nom: "Grand Oral",
      description: "Épreuve orale préparatoire au baccalauréat",
      icon: Award,
      color: "blue",
      coefficient: "5",
      heures: "préparation"
    },
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

  const epreuvesAnticipation = [
    {
      nom: "Français",
      description: "Écrit et oral anticipés en fin de première",
      coefficient: "5"
    },
    {
      nom: "Sciences",
      description: "SVT ou Physique-Chimie selon la série",
      coefficient: "5"
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
        {/* Floating elements - Orange theme for terminale */}
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
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Classe de </span>
                <span className="text-orange-600">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Maîtrisez toutes les matières de terminale et préparez-vous efficacement aux épreuves du bac.
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
                    <Card key={matiere.id} className={`bg-white border-2 ${colors.border} hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full flex flex-col`}>
                      <CardHeader className="flex-shrink-0">
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
                              {matiere.heures !== 'préparation' && (
                                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                  {matiere.heures}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 flex-grow">
                          {matiere.description}
                        </p>
                        <div className="mt-auto pt-4">
                          {matiere.nom === "Philosophie" && (
                            <Link to="/articles/lycee/terminale/philosophie">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                          {matiere.nom === "Histoire-Géographie" && (
                            <Link to="/articles/lycee/terminale/histoire-geographie">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                          {matiere.nom === "Langue Vivante 2" && (
                            <Link to="/articles/lycee/terminale/espagnol">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                          {matiere.nom === "Éducation Physique et Sportive" && (
                            <Link to="/articles/lycee/terminale/eps">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                          {matiere.nom === "Langue Vivante 1" && (
                            <Link to="/articles/lycee/terminale/anglais">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                          {matiere.nom === "Grand Oral" && (
                            <Link to="/articles/lycee/terminale/grand-oral">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Lire l'article détaillé
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Épreuves anticipées */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Épreuves anticipées (passées en première)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {epreuvesAnticipation.map((epreuve, index) => (
                  <Card key={index} className="bg-white border-2 border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-orange-700 group-hover:text-orange-800 transition-colors duration-300">
                            {epreuve.nom}
                          </CardTitle>
                          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 mt-1">
                            Coef. {epreuve.coefficient}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300">
                        {epreuve.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Spécialités maintenues */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Enseignements de spécialité maintenus</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specialites.map((specialite, index) => {
                  const IconComponent = specialite.icon;
                  const colors = colorClasses[specialite.color as keyof typeof colorClasses];

                  return (
                    <Card key={index} className={`bg-white border-2 ${colors.border} hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full flex flex-col`}>
                      <CardHeader className="flex-shrink-0">
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
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300">
                          {specialite.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>


            {/* Informations sur le baccalauréat */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Le baccalauréat : épreuves et calendrier</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Épreuves écrites (Juin)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Philosophie (4h)</li>
                    <li>• Histoire-Géographie (4h)</li>
                    <li>• Spécialité 1 (4h)</li>
                    <li>• Spécialité 2 (4h)</li>
                    <li>• Grand Oral (20 min préparation + 20 min passage)</li>
                    <li>• Épreuves de LV1 et LV2 (2h30 + 2h)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Épreuves anticipées (Fin de première)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Français - Écrit (4h)</li>
                    <li>• Français - Oral (20 min)</li>
                    <li>• Sciences - Écrit (2h)</li>
                    <li>• Sciences - Oral (30 min)</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Note :</strong> Les épreuves anticipées comptent pour 30% de la note finale du baccalauréat.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Award className="h-8 w-8 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-700 group-hover:text-blue-800 transition-colors duration-300">
                    Préparation intensive au baccalauréat
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                    Nos experts vous accompagnent pour réussir votre bac et préparer votre avenir.
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

export default LyceeTerminalePage;
