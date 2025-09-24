import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Calendar, Briefcase, Home, ChevronRight } from 'lucide-react';

type ModuleItem = {
  number: number;
  title: string;
  description: string;
  modulePath: string;
  vocabPath: string;
};

const modules: ModuleItem[] = [
  { number: 1, title: 'Politik', description: 'Système politique, élections, partis et gouvernements', modulePath: '/formation/allemand/politik', vocabPath: '/formation/allemand/vocabulaire-politique' },
  { number: 2, title: 'Démographie', description: 'Évolution, vieillissement, migrations et société', modulePath: '/formation/allemand/demographie', vocabPath: '/formation/allemand/vocabulaire-demographie' },
  { number: 3, title: 'Éducation', description: 'Système éducatif et formation professionnelle', modulePath: '/formation/allemand/education', vocabPath: '/formation/allemand/vocabulaire-bildung' },
  { number: 4, title: 'Culture', description: 'Identité, société moderne et enjeux sociaux', modulePath: '/formation/allemand/culture', vocabPath: '/formation/allemand/vocabulaire-kultur' },
  { number: 5, title: 'Géopolitique', description: 'UE, relations internationales et sécurité', modulePath: '/formation/allemand/geopolitique', vocabPath: '/formation/allemand/vocabulaire-geopolitique' },
  { number: 6, title: 'Technologie & Innovation', description: 'Industrie 4.0, IA et recherche', modulePath: '/formation/allemand/technologie', vocabPath: '/formation/allemand/vocabulaire-innovation' },
  { number: 7, title: 'Écologie', description: 'Transition énergétique et environnement', modulePath: '/formation/allemand/ecologie', vocabPath: '/formation/allemand/vocabulaire-ecologie' },
  { number: 8, title: 'Économie', description: 'Wirtschaft, commerce extérieur, innovation', modulePath: '/formation/allemand/industrie', vocabPath: '/formation/allemand/vocabulaire-wirtschaft' },
  { number: 9, title: 'Femmes et Égalité', description: 'Droits, politiques publiques et société', modulePath: '/formation/allemand/femmes', vocabPath: '/formation/allemand/vocabulaire-frauen' },
  { number: 10, title: 'Histoire et Mémoire', description: 'Mémoire collective et histoire contemporaine', modulePath: '/formation/allemand/geschichte', vocabPath: '/formation/allemand/vocabulaire-geschichte' },
];

const FormationAllemandCivilisationPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground">Civilisation</span>
          </div>
        </div>
      </nav>

      {/* En-tête sobre (aligné avec l'espagnol) */}
      <section className="py-8 px-4 sm:px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Civilisation Allemande</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'Allemagne contemporaine et ses enjeux sociétaux
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">10 thématiques essentielles</span>
              <span className="px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">Actualisé 2024</span>
              <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">Niveau Prépa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Tous les Chapitres</h2>
            <p className="text-lg text-gray-600">Découvrez notre programme complet de civilisation allemande</p>
          </div>

          {/* Liste verticale sobre */}
          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((m) => (
              <div key={m.number} className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">{m.number}</span>
                  </div>
                  <div className="flex-1">
                    <Link to={m.modulePath} className="hover:underline underline-offset-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                    </Link>
                    <Link to={m.modulePath} className="block text-gray-600 mb-4 hover:text-gray-800">
                      {m.description}
                    </Link>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={m.modulePath}>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium w-full sm:w-auto">
                          <Calendar className="mr-2 h-4 w-4" />
                          Accéder au module
                        </Button>
                      </Link>
                      <Link to={m.vocabPath}>
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md w-full sm:w-auto">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md w-full sm:w-auto" disabled>
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ancien grid masqué */}
          <div className="hidden">
            {/* Politique */}
            <Link
              to="/formation/allemand/politik"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Politik</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Système politique allemand, élections, partis politiques et gouvernements</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la politique
              </Button>
            </Link>

            {/* Démographie */}
            <Link
              to="/formation/allemand/demographie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Démographie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Évolution démographique, vieillissement, migration et société allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la démographie
              </Button>
            </Link>

            {/* Écologie */}
            <Link
              to="/formation/allemand/ecologie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Écologie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Transition énergétique, protection de l'environnement et développement durable</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'écologie
              </Button>
            </Link>

            {/* Économie et Industrie */}
            <Link
              to="/formation/allemand/industrie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Économie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Industrie 4.0, économie allemande, commerce international et innovation</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'économie
              </Button>
            </Link>

            {/* Géopolitique */}
            <Link
              to="/formation/allemand/geopolitique"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Géopolitique</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Union européenne, relations internationales et sécurité allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la géopolitique
              </Button>
            </Link>

            {/* Culture et Société */}
            <Link
              to="/formation/allemand/culture"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Culture</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Identité culturelle, diversité, histoire et mémoire collective allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la culture
              </Button>
            </Link>

            {/* Éducation */}
            <Link
              to="/formation/allemand/education"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Éducation</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Système éducatif allemand, formation professionnelle et excellence académique</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'éducation
              </Button>
            </Link>

            {/* Technologie */}
            <Link
              to="/formation/allemand/technologie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Technologie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Innovation technologique, recherche scientifique et start-ups allemandes</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la technologie
              </Button>
            </Link>

            {/* Femmes et Égalité */}
            <Link
              to="/formation/allemand/femmes"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Égalité</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Droits des femmes, égalité des genres et politiques sociales en Allemagne</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'égalité
              </Button>
            </Link>

            {/* Histoire et Mémoire */}
            <Link
              to="/formation/allemand/geschichte"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Histoire</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Mémoire collective, travail de mémoire et histoire contemporaine allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'histoire
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/formation/allemand"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              Retour à la formation Allemand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationAllemandCivilisationPage;