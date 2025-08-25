import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Shield,
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
  AlertTriangle,
  Zap
} from 'lucide-react';

const Module5ViolenciaNarcotraficoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
            <span className="text-gray-900 font-bold">Violencia y Narcotráfico</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
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
            <div className="p-3 rounded-lg bg-red-700 text-white">
              <Shield className="h-9 w-9" />
            </div>
            Violencia y Narcotráfico
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Violence chronique, cartels, sécurité et maintien de l'ordre en Amérique latine
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Module 5</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-red-700">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-red-800">
                  <Target className="h-5 w-5" />
                  Contenu du module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-red-100 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">1. Introduction</h4>
                    <p className="text-sm text-red-700">Panorama de la violence et du narcotrafic</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-100 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">2. Cartels mexicains et colombiens</h4>
                    <p className="text-sm text-red-700">Organisations criminelles principales</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-100 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">3. Impact social de la violence</h4>
                    <p className="text-sm text-red-700">Conséquences sur les sociétés</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-100 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">4. Stratégies anti-narcotrafic</h4>
                    <p className="text-sm text-red-700">Réponses étatiques et internationales</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-100 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">5. Essai rédigé</h4>
                    <p className="text-sm text-red-700">Narcotrafic 4.0 et innovation criminelle</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Introduction */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <BookOpen className="h-6 w-6" />
                  Introduction - Panorama de la violence et du narcotrafic
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Contexte général</h3>
                  <p className="leading-relaxed mb-4">
                    La violence et le narcotrafic constituent des défis majeurs pour la sécurité 
                    et la stabilité en Amérique latine. Les cartels mexicains et colombiens ont 
                    développé des réseaux sophistiqués qui s'étendent bien au-delà de leurs 
                    frontières nationales.
                  </p>
                  <p className="leading-relaxed">
                    Ce module analyse l'évolution des organisations criminelles, l'impact social 
                    de la violence, et les stratégies mises en place pour lutter contre ce fléau.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-red-900 mb-3">🎯 Points clés :</h3>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Cartels mexicains et colombiens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Impact social de la violence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Stratégies anti-narcotrafic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Innovation technologique criminelle</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-red-900 mb-3">📚 Pour les concours :</h3>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Contexte pour versions et thèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Exemples pour essais argumentatifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Vocabulaire sécuritaire spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                        <span>Actualité sécuritaire hispanique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Cartels mexicains et colombiens */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <Globe className="h-6 w-6" />
                  Cartels mexicains et colombiens
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Organisations criminelles principales</h3>
                  <p className="leading-relaxed mb-4">
                    Les cartels mexicains et colombiens représentent les organisations criminelles 
                    les plus puissantes et sophistiquées au monde. Leur influence s'étend sur 
                    l'ensemble du continent américain et au-delà, avec des ramifications en Europe 
                    et en Asie.
                  </p>
                  <p className="leading-relaxed">
                    Ces organisations ont développé des capacités logistiques, technologiques et 
                    financières qui rivalisent avec celles de nombreuses entreprises légitimes, 
                    rendant la lutte anti-narcotrafic particulièrement complexe.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">🇲🇽 Cartels mexicains :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">CJNG (Cartel Jalisco Nueva Generación)</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Sinaloa (El Chapo)</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Gulf Cartel</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">🇨🇴 Cartels colombiens :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Clan del Golfo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Los Pachenca</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Autodefensas Gaitanistas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Impact social de la violence */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-6 w-6" />
                  Impact social de la violence
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Conséquences sur les sociétés</h3>
                  <p className="leading-relaxed mb-4">
                    La violence liée au narcotrafic a des conséquences dévastatrices sur les 
                    sociétés latino-américaines. Elle affecte tous les aspects de la vie quotidienne, 
                    de l'économie à l'éducation, en passant par la santé publique et la cohésion sociale.
                  </p>
                  <p className="leading-relaxed">
                    Les populations les plus vulnérables, notamment les jeunes et les femmes, 
                    sont particulièrement touchées par cette violence endémique.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">📊 Statistiques de violence :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Honduras : 38,6/100k homicides</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">El Salvador : 18,2/100k homicides</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Mexique : 28,4/100k homicides</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">🌍 Impact sur la société :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Déplacement forcé des populations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Corruption des institutions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Déstabilisation économique</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Stratégies anti-narcotrafic */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <Shield className="h-6 w-6" />
                  Stratégies anti-narcotrafic et réponses étatiques
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Réponses étatiques et internationales</h3>
                  <p className="leading-relaxed mb-4">
                    Les gouvernements latino-américains et la communauté internationale ont mis en 
                    place diverses stratégies pour lutter contre le narcotrafic. Ces approches 
                    vont de l'intervention militaire directe à la coopération judiciaire et 
                    financière internationale.
                  </p>
                  <p className="leading-relaxed">
                    Cependant, l'efficacité de ces stratégies reste limitée face à la capacité 
                    d'adaptation et d'innovation des organisations criminelles.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">🔒 Mesures de sécurité :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Intervention militaire</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Coopération internationale</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">Traçabilité financière</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">🌐 Coopération internationale :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">DEA américaine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Interpol</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">ONU Office on Drugs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <FileText className="h-6 w-6" />
                  Essai rédigé : Narcotráfico 4.0 en el mundo hispanohablante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Introducción</h3>
                  <p className="leading-relaxed mb-4">
                    En noviembre 2024 la Armada colombiana interceptó un semisumergible no tripulado 
                    con Starlink y cinco toneladas de cocaína rumbo a Australia. Semanas después, 
                    la Operación Orión XIV —46 países— incautó 225 t de cocaína y 128 t de marihuana 
                    en alta mar.
                  </p>
                  <p className="leading-relaxed">
                    El delito abraza el hardware inteligente mientras crece la cooperación naval 
                    para cortar las rutas del narcotráfico. Cabe preguntarse hasta qué punto la 
                    región podrá frenar un negocio que fusiona ingeniería naval y redes sociales.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Desarrollo I – Innovación criminal</h3>
                  <p className="leading-relaxed mb-4">
                    Los narcos invierten en I+D. El nuevo "narco‑sub" reduciría costes y burlaría 
                    radares. En tierra, el CJNG capta a menores en TikTok con emojis "narco‑glam". 
                    El Clan del Golfo difunde tutoriales de drones en Telegram.
                  </p>
                  <p className="leading-relaxed">
                    EE. UU. declaró terroristas a cinco jefes del CJNG y restringió la venta de 
                    drones al Caribe. Desde mi punto de vista, esta convergencia obliga a tratar 
                    la seguridad marítima como ciberseguridad flotante.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Desarrollo II – Puertos vigilados para frenar el tráfico</h3>
                  <p className="leading-relaxed mb-4">
                    Para una lucha efectiva, los puertos deben estar vigilados y seguros, pues en 
                    ellos circula la mayor parte de la droga. En marzo 2025, una disputa en Guayaquil 
                    provocó 22 muertos, lo que expone la fragilidad de la vigilancia portuaria.
                  </p>
                  <p className="leading-relaxed">
                    Un mes después, Manzanillo decomisó 5,6 t de cocaína ocultas en aguacates, 
                    confirmando que los esfuerzos aislados no bastan. Considero que sería necesario 
                    reforzar escáneres 24/7 y desplegar drones costeros que patrullen las terminales.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Conclusión</h3>
                  <p className="leading-relaxed">
                    En definitiva, la creciente brecha entre la invención criminal y la respuesta 
                    institucional revela la urgencia de consolidar una estrategia común. Conviene 
                    que se integren satélites, puertos vigilados y fiscalías financieras en un 
                    sistema coordinado capaz de rastrear la cocaína en tiempo real.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Conseils méthodologiques */}
            <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-800">
                  <Lightbulb className="h-6 w-6" />
                  Conseils méthodologiques pour les concours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-red-900 mb-3">Comment utiliser ce module aux concours</h3>
                  <p className="leading-relaxed mb-4">
                    Ce module fournit le contexte civilisationnel indispensable pour aborder les épreuves 
                    d'espagnol aux concours ECG. Voici comment l'utiliser efficacement :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Version :</strong> Comprendre le contexte sécuritaire des textes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Thème :</strong> Maîtriser le vocabulaire sécuritaire spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Essai :</strong> Utiliser les exemples et arguments développés</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-red-900 mb-3">📝 Vocabulaire clé :</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">el narcotráfico</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">la violencia</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">el cartel</span>
                      </div>
                      <div className="p-3 rounded-lg border border-red-200 bg-red-50">
                        <span className="text-sm font-medium text-red-800">la seguridad</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-red-900 mb-3">🎯 Sujets probables :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Innovation technologique criminelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Lutte anti-narcotrafic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm text-red-700">Sécurité maritime</span>
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

export default Module5ViolenciaNarcotraficoPage; 