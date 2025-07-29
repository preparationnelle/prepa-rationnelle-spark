
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Calculator, 
  Code, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star
} from "lucide-react";

export const OffersSection = () => (
  <section className="py-16 px-4" style={{ backgroundColor: '#F0F8FF' }}>
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Quelle est ta situation <span className="text-[#F36C00]">actuellement</span> ?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvre nos solutions personnalisées pour t'accompagner dans ta réussite
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Colonne principale - Questions */}
        <div className="space-y-6">
          <Link to="/offre/organisation-ete" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors mb-2">
                      Tu veux profiter de l'été pour t'organiser au mieux ?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Planning personnalisé • Méthodes d'organisation • Préparation rentrée
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/coaching-maths" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">
                      Tu souhaites bénéficier d'un coaching en Maths ?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Suivi personnalisé • Méthodes efficaces • Progression garantie
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/coaching-python" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-2">
                      Tu souhaites bénéficier d'un coaching en Python ?
                    </h3>
                    <p className="text-sm text-gray-600">
                      54 commandes essentielles • Exercices type concours • +3 à 5 points garantis
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/preparation-cube" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors mb-2">
                      Tu veux aborder sereinement ta rentrée en prépa et bien démarrer ta "cube" ?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Méthodes de prépa • Organisation efficace • Démarrage optimal
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Colonne latérale - Informations */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pourquoi nous choisir ?</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Accompagnement personnalisé adapté à ton niveau</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Méthodes éprouvées par des étudiants qui ont réussi</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Suivi régulier et ajustements en cours de route</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Résultats garantis avec nos programmes structurés</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-800">Témoignage client</span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Grâce à l'accompagnement personnalisé, j'ai gagné +5 points en maths et intégré ESCP !"
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/nos-offres">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos offres détaillées
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OffersSection;
