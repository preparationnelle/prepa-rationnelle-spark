import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Home,
  ChevronRight,
  FileText,
  Link as LinkIcon,
  Shield,
  Layout,
  RotateCcw,
  Zap,
  Briefcase,
  Split,
  Clock,
  Users,
  Target,
  CheckCircle,
  FileQuestion,
  X,
  HelpCircle,
  TrendingUp
} from 'lucide-react';

const FormationAllemandGrammairePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">



        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Grammaire Allemande
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les structures grammaticales complexes pour exceller aux épreuves d'allemand ECG
          </p>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {/* Module 1 - Déclinaisons */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Déclinaisons</h3>
                  <p className="text-gray-600 mb-4">Les déclinaisons de l'adjectif et leurs cas en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-declinaisons">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileText className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-declinaisons/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Target className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 - Proposition Relative */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proposition Relative</h3>
                  <p className="text-gray-600 mb-4">Les propositions relatives et leurs pronoms en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-relatives">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileText className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-relative/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Target className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 - Structure de la Phrase */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Structure de la Phrase</h3>
                  <p className="text-gray-600 mb-4">L'ordre des mots et la structure des phrases allemandes</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-structure">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileText className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-structure/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Target className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 - Le Passif */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Le Passif</h3>
                  <p className="text-gray-600 mb-4">Formation et utilisation du passif en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-passif">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileText className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-passif/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Target className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 5 - Points Récurrents */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Points Récurrents</h3>
                  <p className="text-gray-600 mb-4">Les règles de grammaire les plus fréquemment testées</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-recurrents">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileText className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-recurrents/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Target className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>



            {/* Module 2 - Proposition Relative */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proposition Relative</h3>
                  <p className="text-gray-600 mb-4">Formation et utilisation des propositions relatives</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-relatives">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-relative/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 - Le Passif */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Le Passif</h3>
                  <p className="text-gray-600 mb-4">Formation et utilisation du passif en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-passif">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Shield className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-passif/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
            </div>
          </div>
        </div>

            {/* Module 4 - Structure de la Phrase */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Structure de la Phrase</h3>
                  <p className="text-gray-600 mb-4">Ordre des mots et structure des phrases allemandes</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-structure">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Layout className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-structure/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
          </div>

            {/* Module 5 - Points Récurrents */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Points Récurrents</h3>
                  <p className="text-gray-600 mb-4">Les règles de grammaire les plus fréquemment testées</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-recurrents">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-recurrents/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>



            {/* Module 6 - Verbes à Particule Séparable */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Verbes à Particule Séparable</h3>
                  <p className="text-gray-600 mb-4">Maîtriser les verbes à particule séparable et leur séparation</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/verbes-particules">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Split className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/verbes-particules/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 7 - Formation des Temps Composés */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">7</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formation des Temps Composés</h3>
                  <p className="text-gray-600 mb-4">Maîtriser haben/sein et la formation des temps composés</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-temps-composes">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Clock className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-temps-composes/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
              </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 8 - Verbes Modaux Complexes */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">8</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Verbes Modaux Complexes</h3>
                  <p className="text-gray-600 mb-4">Les six verbes modaux et leurs particularités aux temps composés</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-verbes-modaux">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Users className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-verbes-modaux/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
              </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 9 - Règle de Position V2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">9</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Règle de Position V2</h3>
                  <p className="text-gray-600 mb-4">La position rigide du verbe en allemand (Verbe Zweite Position)</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-position-v2">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Target className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-position-v2/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
              </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 10 - Choix de l'Auxiliaire au Parfait */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">10</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Choix de l'Auxiliaire au Parfait</h3>
                  <p className="text-gray-600 mb-4">Maîtriser haben vs sein pour former le parfait allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-auxiliaire-parfait">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-auxiliaire-parfait/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
              </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

                        {/* Module 11 - Formation du Génitif */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">11</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formation du Génitif</h3>
                  <p className="text-gray-600 mb-4">Maîtriser l'usage complexe du génitif pour exprimer la possession</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-genitif">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <FileQuestion className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-genitif/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 12 - La Négation */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">12</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">La Négation et les Particules de Négation</h3>
                  <p className="text-gray-600 mb-4">Maîtriser nicht, kein et les autres particules de négation allemande</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-negation">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <X className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-negation/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 13 - Les Phrases Interrogatives */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">13</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Les Phrases Interrogatives</h3>
                  <p className="text-gray-600 mb-4">Maîtriser les différents types de questions en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-phrases-interrogatives">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-phrases-interrogatives/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 14 - Comparatif et Superlatif */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">14</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Les Formes du Comparatif et du Superlatif</h3>
                  <p className="text-gray-600 mb-4">Maîtriser la comparaison des adjectifs et adverbes en allemand</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand-comparatif-superlatif">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                    </Link>
                    <Link to="/formation/allemand-comparatif-superlatif/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
              </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="text-center mt-12">
            <Link
              to="/formation/allemand"
            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all duration-300"
            >
              Retour à la formation Allemand
            </Link>
          </div>
        </div>
    </div>
  );
};

export default FormationAllemandGrammairePage;