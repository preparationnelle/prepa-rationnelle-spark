import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Calendar,
  Briefcase,
  BookOpen,
  Home,
  ChevronRight
} from 'lucide-react';

const FormationEspagnolGrammairePage = () => {

  return (
    <div className="min-h-screen bg-white">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
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
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Grammaire Espagnole</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
            Grammaire Espagnole
          </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les structures grammaticales complexes pour exceller aux épreuves d'espagnol ECG
          </p>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {/* Module 1 - Conjugaison et Temps Verbaux */}
            <Link to="/formation/espagnol/grammaire/conjugaison" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conjugaison et Temps Verbaux</h3>
                    <p className="text-gray-600 mb-4">Temps complexes : subjonctif, conditionnel, impératif et tous les temps de l'indicatif</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/conjugaison/exercices">
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

            {/* Module 2 - Syntaxe et Structures Complexes */}
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Syntaxe et Structures Complexes</h3>
                    <p className="text-gray-600 mb-4">Structures syntaxiques sophistiquées pour enrichir l'expression écrite et orale</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes/exercices">
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

            {/* Module 3 - Ser vs Estar et Constructions */}
            <Link to="/formation/espagnol/grammaire/ser-estar" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ser vs Estar et Constructions</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez les nuances entre ser et estar, constructions spéciales et verbes d'état</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/ser-estar/exercices">
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

            {/* Module 4 - Prépositions et Locutions */}
            <Link to="/formation/espagnol/grammaire/prepositions" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prépositions et Locutions</h3>
                    <p className="text-gray-600 mb-4">Emploi précis des prépositions et locutions prépositionnelles en espagnol</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/prepositions/exercices">
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

            {/* Module 5 - Questions et Interrogatifs */}
            <Link to="/formation/espagnol/grammaire/questions" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Questions et Interrogatifs</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez la formulation des questions et l'usage des mots interrogatifs</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/questions/exercices">
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

            {/* Module 6 - Négations */}
            <Link to="/formation/espagnol/grammaire/negations" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Négations</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez les formes négatives et leurs emplois en espagnol</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/negations/exercices">
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

            {/* Module 7 - Vocabulaire Temporel : Dates et Heures */}
            <Link to="/formation/espagnol/grammaire/temporal" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vocabulaire Temporel : Dates et Heures</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez l'expression du temps, des dates et des heures en espagnol</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/temporal/exercices">
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

            {/* Module 8 - Pronoms */}
            <Link to="/formation/espagnol/grammaire/pronouns" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pronoms</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez l'usage des pronoms personnels, possessifs et démonstratifs</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/pronouns/exercices">
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

            {/* Module 9 - Verbes Particuliers et Tournures Affectives */}
            <Link to="/formation/espagnol/grammaire/affective-verbs" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">9</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Verbes Particuliers et Tournures Affectives</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez les verbes comme gustar et les constructions affectives</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/affective-verbs/exercices">
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

            {/* Module 10 - Adjectifs et Adverbes */}
            <Link to="/formation/espagnol/grammaire/adjectives-adverbs" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">10</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adjectifs et Adverbes</h3>
                    <p className="text-gray-600 mb-4">Maîtrisez l'accord des adjectifs, les adverbes et leurs emplois</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/grammaire/adjectives-adverbs/exercices">
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

            {/* Module 11 - Thème Grammatical */}
            <Link to="/formation/espagnol/grammaire/theme" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">11</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thème Grammatical</h3>
                    <p className="text-gray-600 mb-4">Techniques de traduction français → espagnol avec pièges classiques et méthodologie</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
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

export default FormationEspagnolGrammairePage;