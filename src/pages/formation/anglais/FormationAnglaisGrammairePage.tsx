import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe,
  Calendar,
  Briefcase
} from 'lucide-react';

const FormationAnglaisGrammairePage = () => {

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
            Grammaire Anglaise
          </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Formation complète de grammaire anglaise pour maîtriser les épreuves des concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            
            {/* Module 1 - Temps Verbaux */}
            <Link to="/formation/anglais/grammaire/temps-verbaux" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Temps Verbaux</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez tous les temps verbaux anglais essentiels pour les concours</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/temps-verbaux/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 2 - Conditionnels */}
            <Link to="/formation/anglais/grammaire/conditionnels" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conditionnels</h3>
                    <p className="text-gray-600 mb-4">Les structures conditionnelles et leur utilisation en contexte</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/conditionnels/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 3 - Voix Passives */}
            <Link to="/formation/anglais/grammaire/voix-passives" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Voix Passives</h3>
                    <p className="text-gray-600 mb-4">Formation et utilisation des voix passives en anglais</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/voix-passives/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 4 - Discours Indirect */}
            <Link to="/formation/anglais/grammaire/discours-indirect" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Discours Indirect</h3>
                    <p className="text-gray-600 mb-4">Transformation du discours direct en discours indirect</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/discours-indirect/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 5 - Modaux et Auxiliaires */}
            <Link to="/formation/anglais/grammaire/modaux" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modaux et Auxiliaires</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez can, could, may, might, must, should, will, would et leurs nuances</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/modaux/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 6 - Prépositions et Particules */}
            <Link to="/formation/anglais/grammaire/prepositions" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prépositions et Particules</h3>
                    <p className="text-gray-600 mb-4">Emploi des prépositions et phrasal verbs essentiels pour les concours</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/prepositions/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 7 - Articles et Déterminants */}
            <Link to="/formation/anglais/grammaire/articles" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Articles et Déterminants</h3>
                    <p className="text-gray-600 mb-4">Usage des articles a/an/the et déterminants some, any, much, many</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/articles/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 8 - Subordonnées Relatives */}
            <Link to="/formation/anglais/grammaire/relatives" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Subordonnées Relatives</h3>
                    <p className="text-gray-600 mb-4">Propositions relatives avec who, which, that, whose, where, when</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/relatives/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 9 - Gérondif et Infinitif */}
            <Link to="/formation/anglais/grammaire/gerondif-infinitif" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">9</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gérondif et Infinitif</h3>
                    <p className="text-gray-600 mb-4">Quand utiliser -ing ou to + infinitif selon les verbes et contextes</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                      <Link to="/formation/anglais/grammaire/gerondif-infinitif/exercices">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Exercices
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 10 - Comparatifs et Superlatifs */}
            <Link to="/formation/anglais/grammaire/comparatifs" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">10</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comparatifs et Superlatifs</h3>
                    <p className="text-gray-600 mb-4">Formation et usage des degrés de comparaison en anglais</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 11 - Questions et Interrogatifs */}
            <Link to="/formation/anglais/grammaire/questions" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">11</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Questions et Interrogatifs</h3>
                    <p className="text-gray-600 mb-4">Formation des questions avec who, what, where, when, why, how</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 12 - Expressions de Temps */}
            <Link to="/formation/anglais/grammaire/expressions-temps" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">12</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expressions de Temps</h3>
                    <p className="text-gray-600 mb-4">Since, for, ago, already, yet, still, just et autres marqueurs temporels</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 13 - Concordance des Temps */}
            <Link to="/formation/anglais/grammaire/concordance" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">13</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Concordance des Temps</h3>
                    <p className="text-gray-600 mb-4">Règles de concordance dans les subordonnées et le discours indirect</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 14 - Quantifieurs */}
            <Link to="/formation/anglais/grammaire/quantifieurs" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">14</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quantifieurs</h3>
                    <p className="text-gray-600 mb-4">Much, many, little, few, a lot of, plenty of et expressions de quantité</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 15 - Subjunctif et Structures Subjectives */}
            <Link to="/formation/anglais/grammaire/subjunctif" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">15</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Subjunctif et Structures Subjectives</h3>
                    <p className="text-gray-600 mb-4">I suggest that he be, If I were you, et structures hypothétiques</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 16 - Inversions et Emphase */}
            <Link to="/formation/anglais/grammaire/inversions" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">16</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inversions et Emphase</h3>
                    <p className="text-gray-600 mb-4">Never have I seen, So beautiful was she, structures emphatiques</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 17 - Connecteurs Logiques */}
            <Link to="/formation/anglais/grammaire/connecteurs" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">17</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Connecteurs Logiques</h3>
                    <p className="text-gray-600 mb-4">However, therefore, nevertheless, furthermore pour structurer vos idées</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 18 - Verbes Irréguliers */}
            <Link to="/formation/anglais/grammaire/verbes-irreguliers" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">18</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Verbes Irréguliers</h3>
                    <p className="text-gray-600 mb-4">Liste complète des verbes irréguliers essentiels avec exercices</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 19 - Structures Causatives */}
            <Link to="/formation/anglais/grammaire/causatives" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">19</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Structures Causatives</h3>
                    <p className="text-gray-600 mb-4">Have something done, get someone to do, make/let structures</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 20 - Nuances Lexicales */}
            <Link to="/formation/anglais/grammaire/nuances-lexicales" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">20</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nuances Lexicales</h3>
                    <p className="text-gray-600 mb-4">Confusions fréquentes : affect/effect, advice/advise, complement/compliment</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisGrammairePage;