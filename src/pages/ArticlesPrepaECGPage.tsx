import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesPrepaECGPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Purple theme for ECG */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-purple-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-purple-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-purple-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Prépa </span>
                <span className="text-purple-600">ECG</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Préparation intensive aux concours d'entrée aux écoles de commerce (PASS, AST1, AST2).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:border-purple-700 hover:text-purple-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:border-purple-700 hover:text-purple-700">
                    ← Retour aux niveaux
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Prépa ECG */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-purple-700 mb-2">Préparation ECG - Écoles de Commerce</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                  Article détaillé - Prépa ECG
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-8">
                  <p className="text-purple-800 font-medium text-lg">
                    La Prépa ECG (Économique et Commerciale) prépare aux concours d'entrée des meilleures écoles de commerce françaises (HEC, ESSEC, ESCP, EDHEC, etc.). Cette formation intensive d'un an combine excellence académique et préparation stratégique aux épreuves.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Le concours ECG en détail</h4>

                <h5 className="text-xl font-semibold text-purple-600 mb-3">Les épreuves écrites (PASS)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Mathématiques</strong> : 4h - Analyse, algèbre, probabilités (coefficient 6)</li>
                  <li><strong>Économie</strong> : 4h - Microéconomie, macroéconomie (coefficient 5)</li>
                  <li><strong>Histoire-Géographie</strong> : 4h - Dissertation et analyse de documents (coefficient 4)</li>
                  <li><strong>Langues vivantes</strong> : Anglais 2h + LV2 2h (coefficient 3 chacune)</li>
                  <li><strong>Philosophie</strong> : 4h - Dissertation (coefficient 3)</li>
                  <li><strong>Épreuve de synthèse</strong> : 4h - Analyse interdisciplinaire (coefficient 2)</li>
                </ul>

                <h5 className="text-xl font-semibold text-purple-600 mb-3">Les épreuves orales (AST1 & AST2)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Entretien de personnalité</strong> : 30 min - Projet professionnel, motivations</li>
                  <li><strong>Épreuve orale d'anglais</strong> : 30 min - Conversation sur un thème général</li>
                  <li><strong>Épreuve optionnelle</strong> : 30 min - Selon spécialité choisie (arts, sport, etc.)</li>
                  <li><strong>Grand oral</strong> : 30 min - Présentation d'un dossier personnel</li>
                </ul>

                <h4 className="text-2xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Programme de la prépa ECG</h4>

                <h5 className="text-xl font-semibold text-purple-600 mb-3">Première année (PASS)</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Mathématiques approfondies (analyse, algèbre, statistiques)</li>
                  <li>Économie (micro/macro, mondialisation, politiques économiques)</li>
                  <li>Histoire-Géographie (questions contemporaines, géopolitique)</li>
                  <li>Anglais intensif et LV2</li>
                  <li>Philosophie (dissertation et réflexion critique)</li>
                  <li>Méthodologie et préparation aux concours</li>
                </ul>

                <h5 className="text-xl font-semibold text-purple-600 mb-3">Deuxième année (AST)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Spécialisation selon l'école visée</li>
                  <li>Préparation intensive aux oraux</li>
                  <li>Travail sur le projet professionnel</li>
                  <li>Simulations d'entretiens</li>
                  <li>Stage en entreprise obligatoire</li>
                </ul>

                <h4 className="text-2xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Les meilleures écoles ECG</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">HEC Paris</h6>
                    <p className="text-sm text-gray-600">École n°1 du classement, très sélective</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">ESSEC</h6>
                    <p className="text-sm text-gray-600">Excellence académique et internationale</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">ESCP Europe</h6>
                    <p className="text-sm text-gray-600">Triple accréditation internationale</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">EDHEC</h6>
                    <p className="text-sm text-gray-600">Focus sur l'entrepreneuriat</p>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Conseils pour réussir</h4>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Travail régulier</strong> : 60-70h/semaine minimum</li>
                  <li><strong>Méthode</strong> : S'entraîner aux concours dès la première année</li>
                  <li><strong>Équilibre</strong> : Alterner travail intellectuel et activités physiques</li>
                  <li><strong>Orientation</strong> : Bien choisir ses écoles selon son profil</li>
                  <li><strong>Persévérance</strong> : La prépa ECG demande une implication totale</li>
                </ul>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-800 font-medium">
                    La prépa ECG représente un investissement personnel intense mais offre des débouchés exceptionnels. Avec une préparation rigoureuse et une motivation sans faille, l'accès aux meilleures écoles de commerce devient réalité.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-purple-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700 group-hover:text-blue-800 transition-colors duration-300">
                  Besoin d'aide pour votre prépa ECG ?
                </h3>
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                  Nos professeurs spécialisés en prépa ECG vous accompagnent pour réussir vos concours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-purple-600 hover:bg-blue-600 text-white transition-all duration-300">
                      Nous contacter
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

export default ArticlesPrepaECGPage;

