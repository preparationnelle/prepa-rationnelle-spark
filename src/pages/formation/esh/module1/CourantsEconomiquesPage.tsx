import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight, ArrowLeft, Users, TrendingUp, DollarSign, PieChart, CheckCircle, Target, Clock } from 'lucide-react';

const CourantsEconomiquesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
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
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Les grands courants de la pensée économique depuis le XVIe siècle</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Clock className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Les grands courants de la pensée économique depuis le XVIe siècle
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.4 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explorer l'évolution historique de la pensée économique et ses principales écoles de pensée
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Le mercantilisme (XVIe-XVIIIe siècles) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Le mercantilisme (XVIe-XVIIIe siècles)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Contexte historique</h3>
                  <p className="text-sm text-gray-600">
                    Doctrine économique dominante pendant l'Ancien Régime, liée au développement du commerce international
                    et à la constitution des États-nations modernes.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Idées principales</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• L'or et l'argent sont les véritables richesses d'une nation</li>
                    <li>• Il faut accumuler les métaux précieux par le commerce extérieur</li>
                    <li>• Politique de balance commerciale excédentaire</li>
                    <li>• Interventionnisme étatique et protectionnisme</li>
                    <li>• Population nombreuse comme source de puissance économique</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Penseurs représentatifs</h4>
                  <p className="text-sm text-gray-600">
                    Jean-Baptiste Colbert (France), Thomas Mun (Angleterre), Antonio Serra (Italie)
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Le libéralisme économique (XVIIIe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Le libéralisme économique (XVIIIe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Adam Smith et la "main invisible"</h3>
                  <p className="text-sm text-gray-600">
                    "Recherches sur la nature et les causes de la richesse des nations" (1776) marque la naissance de l'économie
                    comme discipline scientifique autonome.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Principes fondamentaux</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Division du travail comme source d'efficacité</li>
                    <li>• Libre-échange et suppression des barrières douanières</li>
                    <li>• Rôle régulateur de la "main invisible" du marché</li>
                    <li>• Défense de la propriété privée et de la liberté d'entreprendre</li>
                    <li>• État minimal limité aux fonctions régaliennes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: L'école classique (XIXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                L'école classique (XIXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">David Ricardo et la loi des avantages comparatifs</h3>
                  <p className="text-sm text-gray-600">
                    Théorie expliquant les bénéfices du commerce international même entre pays ayant des niveaux
                    de productivité différents.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">John Stuart Mill et l'utilitarisme</h3>
                  <p className="text-sm text-gray-600">
                    Extension des principes libéraux avec une vision plus sociale de l'économie.
                    Introduction du concept d'utilité marginale décroissante.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Loi de Say</h4>
                    <p className="text-xs text-gray-600">"Toute offre crée sa propre demande"</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Théorie quantitative de la monnaie</h4>
                    <p className="text-xs text-gray-600">Relation entre masse monétaire et niveau des prix</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Le marginalisme et la révolution néoclassique (fin XIXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">4</span>
                </div>
                Le marginalisme et la révolution néoclassique (fin XIXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Révolution méthodologique</h3>
                  <p className="text-sm text-gray-600">
                    Introduction du calcul différentiel en économie et du concept de marginalité.
                    Changement de paradigme : passage de l'étude des grandeurs globales à l'analyse des comportements individuels.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Carl Menger (Autriche)</h4>
                    <p className="text-xs text-gray-600">Fondateur de l'école autrichienne d'économie</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">William Stanley Jevons (Angleterre)</h4>
                    <p className="text-xs text-gray-600">Théorie de l'utilité marginale</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Léon Walras (Suisse)</h4>
                    <p className="text-xs text-gray-600">Équilibre général et tâtonnement</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Apports majeurs</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Théorie de la valeur-utilité (subjective)</li>
                    <li>• Loi de l'utilité marginale décroissante</li>
                    <li>• Analyse des comportements rationnels</li>
                    <li>• Modélisation mathématique des phénomènes économiques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Le keynésianisme (XXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">5</span>
                </div>
                Le keynésianisme (XXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">John Maynard Keynes et la Théorie générale (1936)</h3>
                  <p className="text-sm text-gray-600">
                    Réponse à la Grande Dépression de 1929. Critique des idées classiques sur l'autorégulation des marchés
                    et la nécessité d'une intervention étatique active.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Idées clés</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Les marchés ne s'autorégulent pas toujours spontanément</li>
                    <li>• Rôle actif de l'État en période de crise (politique budgétaire)</li>
                    <li>• Importance de la demande effective et de la consommation</li>
                    <li>• Plein emploi comme objectif de politique économique</li>
                    <li>• Multiplicateur keynésien : impact des dépenses publiques</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Héritage du keynésianisme</h4>
                  <p className="text-sm text-gray-600">
                    Influence majeure sur les politiques économiques du XXe siècle : New Deal (USA),
                    plan Marshall, État-providence européen, politiques de relance économique.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: L'école de Chicago et le monétarisme (XXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">6</span>
                </div>
                L'école de Chicago et le monétarisme (XXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Milton Friedman et la critique du keynésianisme</h3>
                  <p className="text-sm text-gray-600">
                    "La monnaie est la cause principale des variations économiques". Réhabilitation des idées libérales
                    avec une approche monétaire de la régulation économique.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Théories principales</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Règle monétaire fixe (croissance régulière de la masse monétaire)</li>
                    <li>• Théorie des anticipations rationnelles</li>
                    <li>• Critique des politiques discrétionnaires de l'État</li>
                    <li>• Défense du libre-marché et de la concurrence</li>
                    <li>• Natural rate of unemployment (taux de chômage naturel)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module1/comportement-agents">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourantsEconomiquesPage;
