import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Languages, Globe, GraduationCap, Microscope, Music, Palette, ArrowLeft, Users, Heart, Trophy, Clock, CheckCircle, Star } from 'lucide-react';
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
      color: "emerald",
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
      color: "violet",
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
      nom: "SVT",
      description: "Biologie, géologie, écologie et santé",
      icon: Heart,
      color: "rose",
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
      nom: "EPS",
      description: "Activités physiques variées et éducation à la santé",
      icon: Trophy,
      color: "lime",
      coefficient: "2"
    },
    {
      id: 9,
      nom: "SES",
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
      color: "fuchsia",
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

  /* Modern color palette using Tailwind classes dynamically */
  const colorClasses: Record<string, { bg: string, border: string, text: string, icon: string, shadow: string, gradient: string }> = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-900', icon: 'text-blue-600', shadow: 'shadow-blue-200/50', gradient: 'from-blue-500 to-blue-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-900', icon: 'text-emerald-600', shadow: 'shadow-emerald-200/50', gradient: 'from-emerald-500 to-emerald-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-900', icon: 'text-orange-600', shadow: 'shadow-orange-200/50', gradient: 'from-orange-500 to-orange-600' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-900', icon: 'text-violet-600', shadow: 'shadow-violet-200/50', gradient: 'from-violet-500 to-violet-600' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-100', text: 'text-pink-900', icon: 'text-pink-600', shadow: 'shadow-pink-200/50', gradient: 'from-pink-500 to-pink-600' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-900', icon: 'text-rose-600', shadow: 'shadow-rose-200/50', gradient: 'from-rose-500 to-rose-600' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-900', icon: 'text-cyan-600', shadow: 'shadow-cyan-200/50', gradient: 'from-cyan-500 to-cyan-600' },
    lime: { bg: 'bg-lime-50', border: 'border-lime-100', text: 'text-lime-900', icon: 'text-lime-600', shadow: 'shadow-lime-200/50', gradient: 'from-lime-500 to-lime-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-900', icon: 'text-indigo-600', shadow: 'shadow-indigo-200/50', gradient: 'from-indigo-500 to-indigo-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-900', icon: 'text-amber-600', shadow: 'shadow-amber-200/50', gradient: 'from-amber-500 to-amber-600' },
    fuchsia: { bg: 'bg-fuchsia-50', border: 'border-fuchsia-100', text: 'text-fuchsia-900', icon: 'text-fuchsia-600', shadow: 'shadow-fuchsia-200/50', gradient: 'from-fuchsia-500 to-fuchsia-600' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-900', icon: 'text-teal-600', shadow: 'shadow-teal-200/50', gradient: 'from-teal-500 to-teal-600' }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden font-sans">
        {/* Modern Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 mb-4 animate-fade-in-up">
                <GraduationCap className="h-4 w-4" />
                <span>Niveau Lycée</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                Classe de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Seconde</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Découvrez toutes les matières enseignées en classe de seconde et les stratégies pour bien choisir votre voie.
              </p>

              <div className="pt-4">
                <Link to="/articles/lycee">
                  <Button variant="ghost" className="group text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Matières Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
              {matieres.map((matiere) => {
                const IconComponent = matiere.icon;
                const colors = colorClasses[matiere.color] || colorClasses.blue;

                return (
                  <Link key={matiere.id} to="/contact" className="block h-full group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur-md`}></div>
                    <Card className={`h-full border border-slate-100 ${colors.bg} bg-opacity-40 backdrop-blur-sm hover:bg-white hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start mb-2">
                          <div className={`p-3 rounded-xl bg-white ${colors.text} shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-white ${colors.text} border border-slate-100 shadow-sm`}>
                            Coef. {matiere.coefficient}
                          </span>
                        </div>
                        <CardTitle className={`text-xl font-bold text-slate-800`}>
                          {matiere.nom}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {matiere.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Informations Section */}
            <div className="grid md:grid-cols-12 gap-8 mb-20">
              {/* Detailed Info Card */}
              <div className="md:col-span-8">
                <Card className="h-full border-0 shadow-xl shadow-slate-200/60 overflow-hidden bg-white">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                      <Clock className="h-6 w-6 text-blue-600" />
                      À propos de la classe de seconde
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        Matières obligatoires (9)
                      </h4>
                      <ul className="space-y-3">
                        {[
                          { name: "Français", hours: "3h" },
                          { name: "Mathématiques", hours: "4h" },
                          { name: "Histoire-Géographie", hours: "3h" },
                          { name: "LV1 Anglais", hours: "3h" },
                          { name: "LV2", hours: "3h" },
                          { name: "SVT", hours: "2h" },
                          { name: "Physique-Chimie", hours: "2h" },
                          { name: "EPS", hours: "2h" },
                          { name: "EMC", hours: "0.5h" },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center justify-between text-slate-600 text-sm group hover:bg-slate-50 p-2 rounded-lg transition-colors">
                            <span className="font-medium text-slate-700">{item.name}</span>
                            <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded textxs">{item.hours}/sem</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                        <Star className="h-5 w-5 text-amber-500" />
                        Matières optionnelles
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {[
                          "SES (Sciences Économiques et Sociales)",
                          "Arts Plastiques",
                          "Musique",
                          "Latin/Grec",
                          "Langue régionale",
                          "Section Européenne"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <p className="text-sm text-amber-800 leading-relaxed">
                          <strong>Note :</strong> L'élève choisit généralement 1 matière optionnelle obligatoire et peut en prendre une seconde en option facultative.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action Card */}
              <div className="md:col-span-4 flex flex-col">
                <Card className="flex-1 border-0 shadow-xl shadow-blue-200/50 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <CardContent className="h-full flex flex-col justify-center items-center text-center p-8 relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Besoin d'orientation ?
                    </h3>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                      Nos experts vous accompagnent pour faire les meilleurs choix stratégiques pour votre avenir.
                    </p>
                    <Link to="/contact" className="w-full">
                      <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold border-0 shadow-lg hover:shadow-xl transition-all h-12">
                        Prendre rendez-vous
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LyceeSecondePage;
