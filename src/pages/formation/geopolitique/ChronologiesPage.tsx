import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Clock, Calendar, Globe, MapPin, ExternalLink } from 'lucide-react';

const ChronologiesPage = () => {
  const chronologies = [
    {
      id: 'europe',
      title: 'Chronologie Europe',
      subtitle: 'Histoire européenne contemporaine',
      description: 'Chronologie complète de l\'Europe depuis 1945 : construction européenne, guerres, révolutions et intégration.',
      region: 'Europe',
      color: 'blue',
      route: '/formation/geopolitique/europe/chronologie',
      keyEvents: ['1957 Traité Rome', '1989 Chute Mur', '2016 Brexit']
    },
    {
      id: 'proche-moyen-orient',
      title: 'Chronologie Proche et Moyen-Orient',
      subtitle: 'Enjeux géopolitiques régionaux',
      description: 'Chronologie du Proche et Moyen-Orient depuis 1906 : conflits, pétrole, révolutions et tensions contemporaines.',
      region: 'Moyen-Orient',
      color: 'orange',
      route: '/formation/geopolitique/proche-moyen-orient/chronologie',
      keyEvents: ['1906 Incident Aqaba', '1979 Révolution Iran', '2025 Tensions Iran']
    },
    {
      id: 'amerique-latine',
      title: 'Chronologie Amérique Latine',
      subtitle: 'Indépendances et développement',
      description: 'Chronologie de l\'Amérique Latine depuis 1810 : indépendances, révolutions, démocratisation et défis contemporains.',
      region: 'Amérique Latine',
      color: 'green',
      route: '/formation/geopolitique/amerique-latine/chronologie',
      keyEvents: ['1810-1821 Indépendances', '1959 Révolution Cuba', '2025 Mouvements mères']
    },
    {
      id: 'amerique-nord',
      title: 'Chronologie Amérique du Nord',
      subtitle: 'Puissance américaine',
      description: 'Chronologie de l\'Amérique du Nord depuis 1492 : découverte, colonisation, indépendance et hégémonie mondiale.',
      region: 'Amérique Nord',
      color: 'purple',
      route: '/formation/geopolitique/amerique-nord/chronologie',
      keyEvents: ['1492 Découverte', '1776 Indépendance', '2025 JO Salt Lake']
    },
    {
      id: 'asie',
      title: 'Chronologie Asie',
      subtitle: 'Émergence asiatique',
      description: 'Chronologie de l\'Asie depuis 1842 : colonisation, décolonisation, guerres et miracleéconomique contemporain.',
      region: 'Asie',
      color: 'red',
      route: '/formation/geopolitique/asie/chronologie',
      keyEvents: ['1842 Traité Nankin', '1945 Fin guerre', '2025 Jeux Chengdu']
    },
    {
      id: 'afrique',
      title: 'Chronologie Afrique',
      subtitle: 'Décolonisation et défis',
      description: 'Chronologie de l\'Afrique depuis la décolonisation : indépendances, conflits, développement et enjeux contemporains.',
      region: 'Afrique',
      color: 'yellow',
      route: '/formation/geopolitique/continent-africain/chronologie',
      keyEvents: ['1960 Année Afrique', '1994 Fin apartheid', '2010 Printemps arabe']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; badge: string; border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', hover: 'hover:bg-blue-100', badge: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-700', hover: 'hover:bg-green-100', badge: 'bg-green-100 text-green-700', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', hover: 'hover:bg-purple-100', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-700', hover: 'hover:bg-orange-100', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
      red: { bg: 'bg-red-50', text: 'text-red-700', hover: 'hover:bg-red-100', badge: 'bg-red-100 text-red-700', border: 'border-red-200' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', hover: 'hover:bg-yellow-100', badge: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-indigo-600 hover:text-indigo-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Chronologies</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Chronologies géopolitiques</CardTitle>
                <p className="text-indigo-100 mt-2">
                  Toutes les chronologies régionales pour maîtriser l'histoire contemporaine
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-indigo-100">Régions couvertes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1492</div>
                <div className="text-sm text-indigo-100">Depuis découvertes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm text-indigo-100">Jusqu'à aujourd'hui</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-indigo-100">Événements clés</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              Vue d'ensemble des chronologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Accédez à toutes les chronologies géopolitiques organisées par région. Chaque chronologie 
              présente les événements majeurs depuis les origines jusqu'aux enjeux contemporains de 2025.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-2">Utilisation recommandée :</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• <strong>Révisions :</strong> Mémoriser les dates clés par région</li>
                <li>• <strong>Contextualisation :</strong> Comprendre les enchaînements historiques</li>
                <li>• <strong>Comparaisons :</strong> Analyser les évolutions parallèles entre régions</li>
                <li>• <strong>Actualité :</strong> Mettre en perspective les enjeux contemporains</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Grille des chronologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chronologies.map((chrono) => {
            const colors = getColorClasses(chrono.color);
            return (
              <Link key={chrono.id} to={chrono.route} className="block">
                <Card className={`h-full transition-all duration-200 hover:shadow-lg hover:scale-105 ${colors.bg} ${colors.border} border-2`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className={`h-5 w-5 ${colors.text}`} />
                          <Badge className={`${colors.badge} font-semibold`}>
                            {chrono.region}
                          </Badge>
                        </div>
                        <CardTitle className={`text-lg ${colors.text} mb-2`}>
                          {chrono.title}
                        </CardTitle>
                        <p className={`text-sm ${colors.text} font-medium`}>
                          {chrono.subtitle}
                        </p>
                      </div>
                      <ExternalLink className={`h-4 w-4 ${colors.text} flex-shrink-0 ml-2`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm ${colors.text} mb-4 leading-relaxed`}>
                      {chrono.description}
                    </p>
                    
                    <div>
                      <h4 className={`font-semibold ${colors.text} mb-2 text-xs uppercase tracking-wide`}>
                        Événements marquants
                      </h4>
                      <div className="space-y-1">
                        {chrono.keyEvents.map((event, index) => (
                          <div key={index} className={`text-xs ${colors.text} flex items-center gap-2`}>
                            <div className={`w-1 h-1 rounded-full ${colors.text.replace('text-', 'bg-')} flex-shrink-0`}></div>
                            <span>{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-4 p-2 ${colors.hover} rounded-lg text-center transition-colors`}>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        Accéder à la chronologie →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Conseils méthodologiques */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              Conseils méthodologiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Comment utiliser les chronologies</h4>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li><strong>1. Vision globale :</strong> Parcourir d'abord l'ensemble pour saisir les grandes périodes</li>
                  <li><strong>2. Focus thématique :</strong> Se concentrer sur les domaines clés (conflits, économie, politique)</li>
                  <li><strong>3. Liens causaux :</strong> Identifier les enchaînements entre événements</li>
                  <li><strong>4. Actualisation :</strong> Connecter l'histoire aux enjeux contemporains</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Pour les concours</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li><strong>Repères chronologiques :</strong> Mémoriser les dates clés de chaque région</li>
                  <li><strong>Analyses comparées :</strong> Croiser les évolutions entre régions</li>
                  <li><strong>Contextualisation :</strong> Situer précisément les phénomènes dans le temps</li>
                  <li><strong>Actualité :</strong> Mobiliser l'histoire pour éclairer le présent</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChronologiesPage;