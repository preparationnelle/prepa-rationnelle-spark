import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Scale,
  ArrowLeft,
  BookOpen,
  Users,
  TrendingUp,
  MapPin,
  FileText,
  Calendar,
  Target,
  Lightbulb
} from 'lucide-react';

const Module1PoliticaRegimenesPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Bubbles like landing page */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
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
            <span className="text-gray-900 font-bold">Política y Regímenes</span>
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
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <Scale className="h-9 w-9" />
            </div>
            Política y Regímenes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crises démocratiques, extrême droite/gauche, évolution politique en Espagne et Amérique latine
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Module 1</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-blue-600">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-gray-200 bg-white/95 backdrop-blur-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-blue-50/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-orange-600" />
                  </div>
                  Contenu du module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">1. Introduction</h4>
                    <p className="text-sm text-gray-600">Panorama des régimes politiques contemporains</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Crises démocratiques</h4>
                    <p className="text-sm text-gray-600">Fatigue démocratique et montée des populismes</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">3. Extrême droite en Espagne</h4>
                    <p className="text-sm text-gray-600">Vox et ses positions politiques</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">4. Transitions politiques</h4>
                    <p className="text-sm text-gray-600">Évolutions en Amérique latine</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-all duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">5. Essai rédigé</h4>
                    <p className="text-sm text-gray-600">Démocratie et populisme</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Introduction */}
            <Card className="group border-2 border-gray-200 bg-white/95 backdrop-blur-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl flex items-center gap-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  Introduction - Panorama des régimes politiques
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-6 relative z-10">
                <div className="bg-white/70 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">Contexte général</h3>
                  <p className="leading-relaxed mb-4">
                    La question des régimes politiques et de leur évolution constitue un thème central 
                    des concours ECG en espagnol. L'Espagne et l'Amérique latine offrent des exemples 
                    contrastés de transitions démocratiques, de crises institutionnelles et de montée 
                    des populismes.
                  </p>
                  <p className="leading-relaxed">
                    Ce module analyse les défis contemporains de la démocratie représentative, 
                    l'émergence de nouvelles forces politiques et les mécanismes de résilience 
                    démocratique dans le monde hispanophone.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900 mb-3">🎯 Points clés :</h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Évolution des régimes politiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Clivages droite/gauche contemporains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Mouvements contestataires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Populisme et démocratie</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900 mb-3">📚 Pour les concours :</h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Contexte pour versions et thèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Exemples pour essais argumentatifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Vocabulaire politique spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>Actualité politique hispanique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Crises démocratiques */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                  <TrendingUp className="h-6 w-6" />
                  Crises démocratiques et fatigue démocratique
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Le phénomène de "fatigue démocratique"</h3>
                  <p className="leading-relaxed mb-4">
                    Le concept de "fatigue démocratique" décrit la désaffection croissante des citoyens 
                    envers les institutions démocratiques traditionnelles. Cette tendance se manifeste 
                    particulièrement en Amérique latine, où les taux de confiance dans la démocratie 
                    ont chuté de manière significative.
                  </p>
                  <p className="leading-relaxed">
                    Les causes de cette fatigue sont multiples : corruption endémique, inefficacité 
                    gouvernementale, inégalités persistantes et sentiment d'abandon des classes populaires.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">📊 Indicateurs de crise :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">Latinobarómetro 2024</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">52% soutien démocratique</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">33% accepterait autoritarisme</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">🌍 Exemples régionaux :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Colombie : fatigue démocratique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Venezuela : crise institutionnelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Nicaragua : régression autoritaire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Extrême droite en Espagne */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                  <Users className="h-6 w-6" />
                  Vox et l'extrême droite espagnole
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">L'émergence de Vox</h3>
                  <p className="leading-relaxed mb-4">
                    Vox, fondé en 2013, représente la première force d'extrême droite à entrer 
                    au Parlement espagnol depuis la transition démocratique. Le parti a connu 
                    une progression électorale constante, capitalisant sur les questions 
                    identitaires et la critique de l'immigration.
                  </p>
                  <p className="leading-relaxed">
                    Ses positions sur la centralisation, l'unité nationale et la défense 
                    des valeurs traditionnelles espagnoles ont trouvé un écho dans 
                    certaines régions, notamment en Andalousie.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">🗳️ Positions politiques :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">Centralisation étatique</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">Opposition à l'immigration</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">Défense valeurs traditionnelles</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">📈 Évolution électorale :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">2019 : 52 députés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">2023 : 33 députés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Présence régionale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                  <FileText className="h-6 w-6" />
                  Essai rédigé : Democracia y populismo en América hispanohablante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Introduction</h3>
                  <p className="leading-relaxed mb-4">
                    Latinobarómetro 2024 constata un retroceso democrático: solo 52 % de los latinoamericanos 
                    respalda este sistema y 33 % aceptaría un gobierno autoritario siempre que "resuelva problemas", 
                    ocho puntos más que en 2010. Ese vacío propicia el ascenso de Javier Milei, Nayib Bukele y 
                    Nicolás Maduro, líderes cuyo éxito descansa tanto en la narrativa de eficacia como en la 
                    erosión de contrapesos.
                  </p>
                  <p className="leading-relaxed">
                    Cabe preguntarse hasta qué punto tales resultados fortalecen o socavan la arquitectura 
                    institucional. En primer término examinaré los logros que seducen al electorado; 
                    en segundo lugar evidenciaré los costes que amenazan la salud democrática.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Desarrollo I – Logros que seducen al electorado</h3>
                  <p className="leading-relaxed mb-4">
                    Desde mi punto de vista, el populismo conquista voluntades cuando ofrece resultados visibles. 
                    Bukele revalidó su mandato con 85 % de los votos y, bajo el estado de excepción, la tasa 
                    de homicidios descendió a 1,9/100 000 en 2024, la más baja del hemisferio. El mensaje 
                    es nítido: orden antes que derechos.
                  </p>
                  <p className="leading-relaxed">
                    En Argentina, Milei promulgó la Ley Bases (2025) —emergencia económica y vía libre a 
                    privatizaciones—; el "shock de libertad" mantiene su imagen positiva por encima del 55 %. 
                    Si los precios se estabilizaran y los servicios mejorasen, muchos concluirían que la 
                    audacia se justifica.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Desarrollo II – Costes institutionnels</h3>
                  <p className="leading-relaxed mb-4">
                    No obstante, el precio institucional resulta elevado. El Salvador suma más de 87 000 
                    detenidos y la CIDH denuncia arbitrariedades. En Buenos Aires, Milei concentra poderes 
                    delegados y recorta 90 % del presupuesto científico; temo que la investigación pública 
                    dependa pronto de filantropía.
                  </p>
                  <p className="leading-relaxed">
                    Venezuela encarna el desenlace extremo: Maduro "ganó" en 2024 con 51,2 %, sin observar 
                    actas; Freedom House 2025 los ubica como "parcialmente libres" o "no libres". Aunque 
                    parezca tentador aplaudir la eficiencia inmediata, es posible que, de perpetuarse, 
                    el remedio devenga veneno.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Conclusión</h3>
                  <p className="leading-relaxed">
                    Lo que más revela este balance es la tensión entre logros rápidos y contrapesos frágiles; 
                    conviene que se refuercen legislativos y tribunales, pues si cada país consiguiera 
                    equilibrar eficacia y control institucional, demostraría que la democracia puede resolver 
                    problemas sin traicionarse. De lo contrario, la promesa populista acabará socavando 
                    los cimientos que pretendía salvar.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Conseils méthodologiques */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                  <Lightbulb className="h-6 w-6" />
                  Conseils méthodologiques pour les concours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Comment utiliser ce module aux concours</h3>
                  <p className="leading-relaxed mb-4">
                    Ce module fournit le contexte civilisationnel indispensable pour aborder les épreuves 
                    d'espagnol aux concours ECG. Voici comment l'utiliser efficacement :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Version :</strong> Comprendre le contexte politique des textes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Thème :</strong> Maîtriser le vocabulaire politique spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Essai :</strong> Utiliser les exemples et arguments développés</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900 mb-3">📝 Vocabulaire clé :</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">el populismo</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">la democracia</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">el autoritarismo</span>
                      </div>
                      <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                        <span className="text-sm font-medium text-blue-800">los contrapesos</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900 mb-3">🎯 Sujets probables :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Crise démocratique en Amérique latine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Populisme vs démocratie</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-blue-700">Extrême droite en Europe</span>
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

export default Module1PoliticaRegimenesPage; 