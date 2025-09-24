import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesConcoursAccesSesamePage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for ACCES/SESAME Business Schools */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Comment Réussir les Concours </span>
                <span className="text-blue-600">SESAME et ACCÈS</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Les concours SESAME et ACCÈS représentent les deux principales voies d'admission en école de commerce post-bac en France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    ← Retour aux niveaux
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Concours ACCES/SESAME Business Schools */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Concours SESAME et ACCÈS - Écoles de Commerce</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Article détaillé - Concours Commerce
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
                  <p className="text-blue-800 font-medium text-lg">
                    Les concours SESAME et ACCÈS ouvrent les portes respectivement à 16 grandes écoles pour SESAME et 3 écoles prestigieuses pour ACCÈS, toutes reconnues par l'État. Ces concours attirent des milliers de candidats chaque année.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Présentation des Concours</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">Concours SESAME</h5>
                    <p className="mb-3">Le concours SESAME permet d'accéder à 19 programmes dans 16 écoles, dont l'ESSEC, EM Lyon, NEOMA, KEDGE, SKEMA, EM Normandie, EMLV.</p>
                    <p className="text-sm text-gray-600">Plus de 6 000 places • ~11 000 candidats</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">Concours ACCÈS</h5>
                    <p className="mb-3">Le concours ACCÈS donne accès aux trois écoles : IÉSEG, ESSCA et ESDES. Ces établissements sont particulièrement sélectifs.</p>
                    <p className="text-sm text-gray-600">3 écoles prestigieuses • Programme Grande École en 5 ans</p>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Structure et Matières des Épreuves</h4>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
                  <h5 className="text-xl font-semibold text-blue-700 mb-4">Quelles sont les matières des épreuves écrites pour le concours SESAME ?</h5>
                  <p className="text-blue-800 mb-4 font-medium">
                    Toutes les épreuves du concours se déroulent sous la forme de QCU (questions à choix unique)/QCM (questions à choix multiple) et les matières sont :
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Compétences digitales</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Enjeux contemporains</strong> : actualités et grands enjeux sociétaux internationaux des 10 derniers mois précédant le concours
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Mathématiques</strong>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Français</strong> (grammaire, orthographe, vocabulaire, faux-amis, chiffres, dates, etc.)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Anglais</strong> (grammaire, orthographe, vocabulaire, faux-amis, chiffres, dates, etc.)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Autre langue étrangère</strong> au choix parmi l'allemand, l'arabe, le chinois, l'espagnol, l'hébreu, l'italien, le japonais, le néerlandais, le portugais ou le russe (grammaire, orthographe, vocabulaire, faux-amis, chiffres, dates, etc.)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-blue-700">Analyse documentaire</strong> : répondre aux questions sur une problématique issue de plusieurs sources documentaires et reconstituer une synthèse
                      </div>
                    </li>
                  </ul>
                </div>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">SESAME : Organisation en 3 Séquences</h5>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Séquence 1 - "Comprendre" (1h30 max)</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Compétences digitales : 20 ex. en 20 min</li>
                      <li>• Enjeux contemporains : 40 quest. en 30 min</li>
                      <li>• Mathématiques : 20 ex. niveau seconde en 40 min</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Séquence 2 - "Communiquer" (1h30 max)</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Français : 40 quest. expression/compréhension en 30 min</li>
                      <li>• Anglais : 40 quest. niveau B1/B2 en 30 min</li>
                      <li>• Deuxième langue : 40 quest. niveau B1/B2 en 30 min</li>
                </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Séquence 3 - "Analyser" (2h)</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Analyse documentaire : 20 quest. sur un dossier thématique</li>
                </ul>
                  </div>
                </div>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">ACCÈS : 3 Épreuves Écrites</h5>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Synthèse (3 heures)</h6>
                    <p className="text-sm">Synthétiser un ensemble de documents en 350 mots sur un thème d'actualité</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Raisonnement logique et mathématique (2 heures)</h6>
                    <p className="text-sm">QCM évaluant l'aptitude à utiliser les concepts mathématiques du secondaire</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-700 mb-2">Anglais (1 heure)</h6>
                    <p className="text-sm">QCM sur la grammaire, vocabulaire et compréhension</p>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Coefficients par École</h4>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h5 className="text-lg font-semibold text-blue-600 mb-4">Coefficients ACCÈS</h5>
                  <table className="w-full border-collapse border border-blue-200">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-200 p-3 text-left font-semibold text-blue-700">École</th>
                        <th className="border border-blue-200 p-3 text-center font-semibold text-blue-700">Synthèse</th>
                        <th className="border border-blue-200 p-3 text-center font-semibold text-blue-700">Math/Logique</th>
                        <th className="border border-blue-200 p-3 text-center font-semibold text-blue-700">Anglais</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-200 p-3 font-medium text-blue-700">ESDES</td>
                        <td className="border border-blue-200 p-3 text-center">7</td>
                        <td className="border border-blue-200 p-3 text-center">6</td>
                        <td className="border border-blue-200 p-3 text-center">7</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="border border-blue-200 p-3 font-medium text-blue-700">ESSCA</td>
                        <td className="border border-blue-200 p-3 text-center">6</td>
                        <td className="border border-blue-200 p-3 text-center">9</td>
                        <td className="border border-blue-200 p-3 text-center">5</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 p-3 font-medium text-blue-700">IÉSEG</td>
                        <td className="border border-blue-200 p-3 text-center">7</td>
                        <td className="border border-blue-200 p-3 text-center">9</td>
                        <td className="border border-blue-200 p-3 text-center">4</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 mt-3">Pour SESAME, les coefficients varient selon les écoles (total de 40 points)</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h5 className="text-lg font-semibold text-blue-600 mb-4">Coefficients SESAME 2026</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-200 text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-200 p-2 text-left font-semibold text-blue-700 min-w-[200px]">École/Programme</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Compétences<br/>digitales</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Enjeux<br/>contemporains</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Langues</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Mathématiques</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Français</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">LVA</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">LVB</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Analyse<br/>documentaire</th>
                          <th className="border border-blue-200 p-2 text-center font-semibold text-blue-700 min-w-[60px]">Entretien</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ESSEC Global BBA</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">25</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ESSEC IBBA</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">30</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ESSEC Global BBA • Track francophone</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">14</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">25</td>
                          <td className="border border-blue-200 p-2 text-center">17</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ESSEC Global BBA • Track anglophone</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">14</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">25</td>
                          <td className="border border-blue-200 p-2 text-center">17</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ESSEC International BBA</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Lyon International BBA</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Lyon Global BBA • Voie générale</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Lyon Global BBA • Parcours CESEM Global</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Lyon Double degree</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">15</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">NEOMA Global BBA</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">2</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">2</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">40</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">KEDGE Programme Grande École • French track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                          <td className="border border-blue-200 p-2 text-center">-</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">KEDGE Programme Grande École • European track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                          <td className="border border-blue-200 p-2 text-center">-</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">SKEMA Programme Grande École</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">18</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Normandie Programme Grande École • French track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">38</td>
                          <td className="border border-blue-200 p-2 text-center">-</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Normandie Programme Grande École • Luxury management track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">38</td>
                          <td className="border border-blue-200 p-2 text-center">-</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EM Normandie Programme Grande École • International track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">38</td>
                          <td className="border border-blue-200 p-2 text-center">-</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EMLV Programme Grande École • Track francophone</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">(1)</td>
                          <td className="border border-blue-200 p-2 text-center">11</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EMLV Programme Grande École • Track anglophone</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                          <td className="border border-blue-200 p-2 text-center">(1)</td>
                          <td className="border border-blue-200 p-2 text-center">11</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EMLV International track</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">9</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">35</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EMLV Programme Grande École</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">35</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">TBS Programme Grande École • Track management international</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">TBS Programme Grande École • Track sciences Politiques Internationales</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">TBS Programme Grande École • Main track</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">12</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">INSEEC Programme Grande École • American track</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">INSEEC Programme Grande École • Track management & ingénierie</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EBP International</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">EBP TEMA • Innovation et digital management</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">IPAG Programme Grande École • French track</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">(1)</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">IPAG Programme Grande École • English track</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                          <td className="border border-blue-200 p-2 text-center">7</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">(1)</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ISC Paris Programme Grande École • French track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">22</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">23</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">ISC Paris Programme Grande École • English track</td>
                          <td className="border border-blue-200 p-2 text-center">8</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">22</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">23</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">PSB Paris School of Business Programme Grande École • Main track</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">PSB Paris School of Business Programme Grande École • American track</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">3</td>
                          <td className="border border-blue-200 p-2 text-center">20</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">6</td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">Montpellier BS Programme Grande École • French track</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">30</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">25</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 font-medium text-blue-700">Montpellier BS Programme Grande École • English track</td>
                          <td className="border border-blue-200 p-2 text-center">4</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">30</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                          <td className="border border-blue-200 p-2 text-center">25</td>
                          <td className="border border-blue-200 p-2 text-center">*</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">* Coefficient variable selon la langue choisie | (1) Inclus dans le coefficient Langues</p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Calendrier 2025-2026</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">SESAME 2026</h5>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Inscriptions :</strong> 15 janvier au 13 mars 2026 sur Parcoursup</li>
                      <li><strong>Épreuves écrites :</strong> 8 avril 2026</li>
                      <li><strong>Résultats d'admissibilité :</strong> fin avril 2026</li>
                      <li><strong>Épreuves orales :</strong> fin avril à mi-mai 2026</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">ACCÈS 2026</h5>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Inscriptions :</strong> novembre 2025 à mars 2026</li>
                      <li><strong>Épreuves écrites :</strong> 9 avril 2026</li>
                      <li><strong>Résultats d'admissibilité :</strong> 20 avril 2026</li>
                      <li><strong>Épreuves orales :</strong> 25 avril au 13 mai 2026</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Stratégies de Préparation</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Anticipation et Organisation</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Commencer dès le début de terminale est essentiel</li>
                  <li>Établir un planning de révision réaliste et s'y tenir</li>
                  <li>Éviter le rush final en étalant la préparation sur l'année</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Maîtrise des Épreuves</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Annales :</strong> S'entraîner sur les sujets des années précédentes en conditions réelles</li>
                  <li><strong>Méthodologie :</strong> Chaque épreuve a ses codes spécifiques qu'il faut maîtriser</li>
                  <li><strong>Culture générale :</strong> Suivre l'actualité quotidiennement, indispensable pour les enjeux contemporains</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Préparation Ciblée</h5>
                <p className="mb-4">Prioriser selon les coefficients : concentrer ses efforts sur les matières à fort coefficient de ses écoles cibles.</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Pour ACCÈS par exemple, les mathématiques sont cruciales pour l'ESSCA et l'IÉSEG</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Langues Vivantes</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Développer un niveau B1/B2 solide en anglais et deuxième langue</li>
                  <li>Pratiquer régulièrement via la lecture, films, applications, et conversations avec des natifs</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Préparation aux Épreuves Orales</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Types d'Épreuves Orales</h5>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Entretien de motivation individuel</li>
                  <li>Oral d'anglais</li>
                  <li>Entretien collectif (selon les écoles)</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Conseils pour Réussir</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Connaissance des écoles :</strong> maîtriser l'histoire, valeurs, spécificités pédagogiques et projets de chaque école visée</li>
                  <li><strong>S'entraîner régulièrement :</strong> multiplier les entretiens blancs, s'enregistrer, demander des retours</li>
                  <li><strong>Être authentique mais professionnel :</strong> version "premium" de soi-même, sincère mais structuré</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Questions Classiques</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>"Pourquoi notre école et non une autre ?"</li>
                  <li>"Quel est votre projet professionnel ?"</li>
                  <li>"De quoi voudriez-vous parler ?"</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Conseils Pratiques</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Jour J</h5>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Gestion du temps :</strong> 2 minutes par exercice en mathématiques SESAME</li>
                  <li><strong>Pas de points négatifs :</strong> seules les bonnes réponses comptent</li>
                  <li><strong>Matériel :</strong> calculatrice intégrée fournie</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Stratégie d'École</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Diversifier ses choix : la sélectivité varie énormément entre écoles (12% pour le BBA ESSEC vs 47% pour l'EM Normandie)</li>
                  <li>Nouveauté ACCÈS : système des "Grands Admissibles" dispensant les meilleurs dossiers des écrits</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Coûts et Modalités</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-blue-700 mb-2">SESAME</h6>
                    <p className="text-2xl font-bold text-blue-600">295€</p>
                    <p className="text-sm text-gray-600">réduction 50% pour boursiers</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-blue-700 mb-2">ACCÈS</h6>
                    <p className="text-2xl font-bold text-blue-600">210€</p>
                    <p className="text-sm text-gray-600">50€ pour boursiers</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                  <p className="text-blue-800 font-medium">
                    Remboursement en cas d'intégration
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Award className="h-8 w-8 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-indigo-800 transition-colors duration-300">
                  Préparation aux concours SESAME et ACCÈS ?
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-700 transition-colors duration-300 mb-6">
                  Nos professeurs spécialisés vous accompagnent pour réussir vos concours d'entrée en écoles de commerce.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-indigo-600 text-white transition-all duration-300">
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

export default ArticlesConcoursAccesSesamePage;

