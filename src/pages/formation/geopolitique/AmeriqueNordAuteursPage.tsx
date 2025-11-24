import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle, Book, List } from 'lucide-react';

const AmeriqueNordAuteursPage = () => {
  const auteurs = [
    // Liste vide pour le moment - à remplir par l'utilisateur
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/amerique-nord" className="hover:text-gray-900 transition-colors">
              Amérique du Nord
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Auteurs et ouvrages</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <Book className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Auteurs et ouvrages - Amérique du Nord
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bibliographie essentielle pour l'étude géopolitique du Amérique du Nord.
          </p>

          {/* Navigation rapide */}
          <div className="bg-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Navigation rapide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/geopolitique/amerique-nord" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                Accéder au cours
              </Link>
              <Link to="/formation/geopolitique/amerique-nord/chronologie" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                Chronologie
              </Link>
              <Link to="/formation/geopolitique/amerique-nord/flashcards" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                <Target className="w-4 h-4" />
                Flash cards
              </Link>
              <Link to="/formation/geopolitique/amerique-nord/etudes-de-cas" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                <List className="w-4 h-4" />
                Études de cas
              </Link>
            </div>
          </div>
        </div>

        {/* Message en développement */}
        <Card className="max-w-4xl mx-auto bg-yellow-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <h3 className="text-xl font-semibold text-yellow-800">Page en développement</h3>
            </div>
            <p className="text-yellow-700 text-lg mb-6">
              La bibliographie pour l'Union européenne est en cours de constitution.
            </p>
            <p className="text-yellow-600">
              Cette page sera bientôt remplie avec les auteurs et ouvrages essentiels pour l'étude géopolitique de l'Union européenne.
            </p>
          </CardContent>
        </Card>

        {/* Liste des auteurs par thème (vide pour le moment) */}
        {auteurs.length > 0 && (
          <div className="space-y-8 max-w-6xl mx-auto mt-12">
            {auteurs.map((auteur, index) => (
              <Card key={index} className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {auteur.auteur}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-1 gap-4">
                    {auteur.ouvrages.map((ouvrage, ouvrageIndex) => (
                      <div key={ouvrageIndex} className="bg-white p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          {ouvrage.important ? (
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                  "{ouvrage.titre}"
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {ouvrage.annee}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                  {ouvrage.theme}
                                </Badge>
                                {ouvrage.important && (
                                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                                    Essentiel
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Statistiques (masquées si vide) */}
        {auteurs.length > 0 && (
          <Card className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 border-green-300">
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">{auteurs.length}</div>
                  <div className="text-green-700">Auteurs référencés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    {auteurs.reduce((total, auteur) => total + auteur.ouvrages.length, 0)}
                  </div>
                  <div className="text-green-700">Ouvrages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    {auteurs.reduce((total, auteur) => total + auteur.ouvrages.filter(o => o.important).length, 0)}
                  </div>
                  <div className="text-green-700">Ouvrages essentiels</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Note méthodologique */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-blue-800 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-semibold">Conseils méthodologiques</h3>
            </div>
            <div className="text-blue-700 space-y-2">
              <p>• <strong>Approche historique :</strong> Privilégiez les ouvrages sur l'Empire ottoman et les décolonisations.</p>
              <p>• <strong>Regards croisés :</strong> Comparez les analyses occidentales et locales sur le conflit israélo-palestinien.</p>
              <p>• <strong>Actualité :</strong> Les ouvrages récents permettent d'analyser les Printemps arabes et le terrorisme islamiste.</p>
              <p>• <strong>Géopolitique énergétique :</strong> Comprendre l'importance du pétrole et du gaz dans les rivalités régionales.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AmeriqueNordAuteursPage;
