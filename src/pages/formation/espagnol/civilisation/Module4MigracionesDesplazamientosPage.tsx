import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Plane,
  ArrowLeft,
  BookOpen,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Calendar,
  Target,
  Lightbulb,
  Globe,
  Shield
} from 'lucide-react';

const Module4MigracionesDesplazamientosPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Bubbles like landing page */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/civilisation" className="hover:text-gray-900 transition-colors">
              Civilisation
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Migraciones y Desplazamientos</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/civilisation">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la civilisation
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Plane className="h-9 w-9" />
            </div>
            Migraciones y Desplazamientos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flux migratoires, déplacements forcés, politique américaine et pays de transit
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Module 4</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-orange-600">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
                  <Target className="h-5 w-5" />
                  Contenu du module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">1. Introduction</h4>
                    <p className="text-sm text-orange-700">Panorama des flux migratoires contemporains</p>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">2. Crise vénézuélienne</h4>
                    <p className="text-sm text-orange-700">Exode vers la Colombie et l'Amérique latine</p>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">3. Caravanes d'Amérique centrale</h4>
                    <p className="text-sm text-orange-700">Migrations vers les États-Unis</p>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">4. Politique américaine</h4>
                    <p className="text-sm text-orange-700">Séparation à la frontière et transit</p>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">5. Essai rédigé</h4>
                    <p className="text-sm text-orange-700">Migration et contrôle frontalier</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Introduction */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <BookOpen className="h-6 w-6" />
                  Introduction - Panorama des flux migratoires
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Contexte général</h3>
                  <p className="leading-relaxed mb-4">
                    Les migrations et déplacements forcés constituent un défi majeur du XXIe siècle, 
                    particulièrement dans le monde hispanophone. L'Amérique latine connaît des flux 
                    migratoires sans précédent, principalement dus aux crises politiques, économiques 
                    et humanitaires.
                  </p>
                  <p className="leading-relaxed">
                    Ce module analyse les causes structurelles des migrations, les responsabilités 
                    des pays occidentaux, et les politiques d'asile et d'accueil mises en place 
                    dans la région.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-orange-900 mb-3">🎯 Points clés :</h3>
                    <ul className="text-sm text-orange-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Causes des migrations (pauvreté, violence)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Responsabilité des pays occidentaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Politiques d'asile et d'accueil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Pays de transit</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-orange-900 mb-3">📚 Pour les concours :</h3>
                    <ul className="text-sm text-orange-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Contexte pour versions et thèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Exemples pour essais argumentatifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Vocabulaire migratoire spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                        <span>Actualité migratoire hispanique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Crise vénézuélienne */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <Globe className="h-6 w-6" />
                  Crise vénézuélienne et exode massif
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">L'effondrement vénézuélien</h3>
                  <p className="leading-relaxed mb-4">
                    Le Venezuela connaît depuis 2014 une crise économique et humanitaire sans précédent, 
                    caractérisée par une hyperinflation, des pénuries alimentaires et médicales, 
                    et une répression politique croissante. Cette situation a provoqué l'un des plus 
                    importants exodes de l'histoire récente de l'Amérique latine.
                  </p>
                  <p className="leading-relaxed">
                    Plus de 7 millions de Vénézuéliens ont quitté leur pays, principalement vers 
                    la Colombie, le Pérou, l'Équateur et le Chili, créant des défis majeurs 
                    pour les pays d'accueil.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">📊 Chiffres clés :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">7+ millions d'exilés</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Colombie : 2,5M accueil</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Pérou : 1,5M accueil</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">🌍 Pays d'accueil principaux :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Colombie (2,5 millions)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Pérou (1,5 million)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Équateur (500 000)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Caravanes d'Amérique centrale */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <Users className="h-6 w-6" />
                  Caravanes d'Amérique centrale vers les États-Unis
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Le phénomène des caravanes</h3>
                  <p className="leading-relaxed mb-4">
                    Depuis 2018, des milliers de migrants d'Amérique centrale (Honduras, Salvador, 
                    Guatemala) se regroupent en "caravanes" pour traverser le Mexique et atteindre 
                    la frontière américaine. Ces déplacements massifs sont motivés par la violence 
                    des gangs, la pauvreté extrême et l'espoir d'une vie meilleure aux États-Unis.
                  </p>
                  <p className="leading-relaxed">
                    Les caravanes représentent un défi majeur pour la sécurité et la gestion 
                    migratoire, tant au Mexique qu'aux États-Unis, et soulèvent des questions 
                    complexes sur les droits humains et la responsabilité internationale.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">🚶‍♂️ Composition des caravanes :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Familles avec enfants</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Victimes de violence</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Migrants économiques</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">📈 Évolution du phénomène :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">2018 : Première caravane</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">2020-2021 : Pause COVID</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">2022-2024 : Reprise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Politique américaine */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <Shield className="h-6 w-6" />
                  Politique américaine et séparation à la frontière
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">La politique de "séparation zéro"</h3>
                  <p className="leading-relaxed mb-4">
                    L'administration Trump a mis en place une politique de "séparation zéro" qui 
                    séparait les enfants migrants de leurs parents à la frontière américano-mexicaine. 
                    Cette politique controversée a suscité une condamnation internationale et des 
                    procédures judiciaires.
                  </p>
                  <p className="leading-relaxed">
                    L'administration Biden a tenté de mettre fin à ces pratiques, mais les défis 
                    de gestion migratoire persistent, notamment avec l'augmentation des arrivées 
                    à la frontière sud.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">🔒 Mesures de contrôle :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Murs et barrières</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Détention prolongée</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">Expulsions accélérées</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">📋 Procédures d'asile :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Demandes d'asile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Protection temporaire</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Statut de réfugié</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <FileText className="h-6 w-6" />
                  Essai rédigé : Migración y control fronterizo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Introducción</h3>
                  <p className="leading-relaxed mb-4">
                    En 2024, la ruta atlántica hacia Canarias registró 46 843 llegadas —un aumento 
                    del 17 % respecto al año anterior— y más de 10 450 muertes, consolidándose como 
                    la frontera más mortífera de Europa. Podemos preguntarnos si un país con estas 
                    características geográficas puede gestionar eficazmente la presión migratoria sin 
                    sacrificar vidas ni soberanía.
                  </p>
                  <p className="leading-relaxed">
                    Primero, analizaré la desproporción de la carga insular. Luego, propondré vías 
                    de regularización eficiente y corresponsable.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Desarrollo I – Desproporción de la carga insular</h3>
                  <p className="leading-relaxed mb-4">
                    Los centros de acogida de Canarias albergan a más de 4 000 menores, cifra que 
                    colapsa sus recursos y revela que la solidaridad intra-UE sigue siendo voluntaria. 
                    Salvamento Marítimo rescata cayucos tras trece días a la deriva, mientras la 
                    Comisión Europea no activa un reparto obligatorio de responsabilidades.
                  </p>
                  <p className="leading-relaxed">
                    Cabe matizar que, aunque la externalización de fronteras parezca solución, 
                    el Atlántico —verdadera fosa común— exige más que control remoto y muros inteligentes.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Desarrollo II – Hacia una regularización eficaz y corresponsable</h3>
                  <p className="leading-relaxed mb-4">
                    El Gobierno ha lanzado un reglamento de arraigo que concederá 300 000 permisos 
                    anuales entre 2025 y 2027, cubriendo vacantes agrícolas y reduciendo la economía 
                    sumergida. Sin embargo, temo que, si no se refuerzan los consulados, este esquema 
                    sobrecargue la gestión diplomática.
                  </p>
                  <p className="leading-relaxed">
                    Considero que sería pertinente financiar corredores humanitarios y establecer 
                    cuotas vinculantes. Si España lograse redirigir fondos FEDER a las islas fronterizas, 
                    las mafias perderían influencia y la acogida ganaría profesionalidad.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Conclusión</h3>
                  <p className="leading-relaxed">
                    La gestión de la crisis demuestra que la respuesta aislada no basta; es necesario 
                    un enfoque colectivo. Conviene implementar un sistema de reparto solidario de rescate 
                    y cuotas operativas. Solo mediante la combinación de salvamento marítimo, 
                    regularización ordenada y respaldo europeo conjunto, España podrá convertir su 
                    liderazgo en un ejemplo real de solidaridad.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Conseils méthodologiques */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
                  <Lightbulb className="h-6 w-6" />
                  Conseils méthodologiques pour les concours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Comment utiliser ce module aux concours</h3>
                  <p className="leading-relaxed mb-4">
                    Ce module fournit le contexte civilisationnel indispensable pour aborder les épreuves 
                    d'espagnol aux concours ECG. Voici comment l'utiliser efficacement :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Version :</strong> Comprendre le contexte migratoire des textes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Thème :</strong> Maîtriser le vocabulaire migratoire spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Essai :</strong> Utiliser les exemples et arguments développés</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-orange-900 mb-3">📝 Vocabulaire clé :</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">la migración</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">el desplazamiento</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">la frontera</span>
                      </div>
                      <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
                        <span className="text-sm font-medium text-orange-800">el asilo</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-orange-900 mb-3">🎯 Sujets probables :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Crise migratoire vénézuélienne</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Caravanes d'Amérique centrale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                        <span className="text-sm text-orange-700">Politique migratoire américaine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4MigracionesDesplazamientosPage; 