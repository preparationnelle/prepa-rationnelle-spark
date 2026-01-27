import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, GraduationCap, School, BookOpen, Target, Sparkles, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesLyceePage = () => {
  const niveaux = [
    {
      id: 1,
      title: "Seconde",
      subtitle: "Classe de détermination",
      description: "Découvrez toutes les matières enseignées en classe de seconde et les stratégies pour bien choisir votre voie.",
      theme: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      icon: School,
      link: "/articles/lycee/seconde",
      matieresCount: 12,
      badge: "Fondations"
    },
    {
      id: 2,
      title: "Première",
      subtitle: "Approfondissement",
      description: "Explorez les matières de première avec spécialisation progressive selon votre série choisie.",
      theme: "orange",
      gradient: "from-orange-500 to-rose-500",
      bgGradient: "from-orange-50 to-rose-50",
      icon: BookOpen,
      link: "/articles/lycee/premiere",
      matieresCount: 10,
      badge: "Spécialisation"
    },
    {
      id: 3,
      title: "Terminale",
      subtitle: "Année du Bac",
      description: "Maîtrisez toutes les matières de terminale et préparez-vous efficacement aux épreuves du bac.",
      theme: "red",
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      icon: GraduationCap,
      link: "/articles/lycee/terminale",
      matieresCount: 9,
      badge: "Excellence"
    }
  ];

  const colorClasses: Record<string, { bg: string, text: string, border: string, shadow: string, button: string }> = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-100',
      shadow: 'shadow-blue-200/50',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-100',
      shadow: 'shadow-orange-200/50',
      button: 'bg-orange-600 hover:bg-orange-700'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-100',
      shadow: 'shadow-red-200/50',
      button: 'bg-red-600 hover:bg-red-700'
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden font-sans">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200 mb-4 animate-fade-in-up">
                <School className="h-4 w-4" />
                <span>Parcours Lycée</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                Articles <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">Lycée</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Conseils, méthodes et programmes détaillés pour réussir vos années lycée et préparer sereinement votre avenir.
              </p>

              <div className="pt-4">
                <Link to="/articles">
                  <Button variant="ghost" className="group text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Retour aux niveaux
                  </Button>
                </Link>
              </div>
            </div>

            {/* Niveaux Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {niveaux.map((niveau) => {
                const IconComponent = niveau.icon;
                const theme = colorClasses[niveau.theme];

                return (
                  <Link key={niveau.id} to={niveau.link} className="group relative block h-full">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${niveau.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}></div>
                    <Card className="h-full relative bg-white border-slate-100 hover:border-transparent transition-all duration-300 overflow-hidden flex flex-col">
                      {/* Card Header Background */}
                      <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${niveau.bgGradient} opacity-50`}></div>

                      <CardHeader className="relative pt-8 px-8 pb-4 flex-grow-0">
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${theme.text} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-7 w-7" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm ${theme.text} shadow-sm`}>
                            {niveau.badge}
                          </span>
                        </div>

                        <CardTitle className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-all">
                          {niveau.title}
                        </CardTitle>
                        <p className={`text-lg font-medium ${theme.text} opacity-90`}>
                          {niveau.subtitle}
                        </p>
                      </CardHeader>

                      <CardContent className="px-8 pb-8 pt-4 flex flex-col flex-grow">
                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                          {niveau.description}
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 px-3 py-2 rounded-lg w-fit">
                            <BookOpen className="h-4 w-4" />
                            {niveau.matieresCount} matières détaillées
                          </div>

                          <div className={`w-full py-3 px-4 rounded-xl flex items-center justify-center font-bold text-white transition-all duration-300 ${theme.button} shadow-lg shadow-blue-900/5 group-hover:shadow-xl translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100`}>
                            Explorer le programme
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-200/50">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10 p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/20">
                  <Sparkles className="h-10 w-10 text-yellow-300" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Besoin d'un accompagnement sur-mesure ?
                </h3>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Que ce soit pour le choix des spécialités, la préparation du Bac ou l'orientation post-bac, nos experts sont là pour vous guider vers l'excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 hover:text-blue-700 font-bold px-8 h-14 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Prendre un premier RDV gratuit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesLyceePage;
