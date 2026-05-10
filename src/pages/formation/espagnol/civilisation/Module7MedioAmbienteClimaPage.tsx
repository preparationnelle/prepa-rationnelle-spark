import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  TreePine,
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
  Zap,
  Leaf
} from 'lucide-react';

const Module7MedioAmbienteClimaPage = () => {
  return (
    <div className="relative relative overflow-hidden">
      {/* Floating elements - Bubbles like landing page */}
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
            <span className="text-gray-900 font-bold">Medio Ambiente y Clima</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-green-600 text-white">
              <TreePine className="h-9 w-9" />
            </div>
            Medio Ambiente y Clima
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Environnement, justice climatique, peuples autochtones et transition énergétique
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-green-800">
                  <Target className="h-5 w-5" />
                  Contenu du module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">1. Introduction</h4>
                    <p className="text-sm text-green-700">Enjeux environnementaux contemporains</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">2. COP 16 et Gustavo Petro</h4>
                    <p className="text-sm text-green-700">Discours et positions politiques</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">3. Justice sociale et autochtones</h4>
                    <p className="text-sm text-green-700">Droits des peuples autochtones</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">4. Fast-fashion et pollution</h4>
                    <p className="text-sm text-green-700">Décharge au Chili et impacts</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">5. Essai rédigé</h4>
                    <p className="text-sm text-green-700">Transition énergétique espagnole</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Introduction */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <BookOpen className="h-6 w-6" />
                  Introduction - Enjeux environnementaux contemporains
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Contexte général</h3>
                  <p className="leading-relaxed mb-4">
                    Les questions environnementales et climatiques sont devenues centrales dans 
                    le débat public hispanophone. L'Amérique latine, particulièrement vulnérable 
                    aux effets du changement climatique, joue un rôle crucial dans les négociations 
                    internationales.
                  </p>
                  <p className="leading-relaxed">
                    Ce module analyse les positions politiques, les enjeux de justice climatique, 
                    et les défis spécifiques de la transition énergétique dans le monde hispanophone.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 mb-3">🎯 Points clés :</h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Politiques environnementales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Transition énergétique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Droits des peuples autochtones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Industrie textile et pollution</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 mb-3">📚 Pour les concours :</h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Contexte pour versions et thèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Exemples pour essais argumentatifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Vocabulaire environnemental spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                        <span>Actualité environnementale hispanique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section COP 16 et Gustavo Petro */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <Globe className="h-6 w-6" />
                  COP 16 et discours de Gustavo Petro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Le discours de "l'état de mort clinique"</h3>
                  <p className="leading-relaxed mb-4">
                    Lors de la COP 16, le président colombien Gustavo Petro a prononcé un discours 
                    marquant sur "l'état de mort clinique" du monde. Cette intervention a suscité 
                    une attention internationale et a positionné la Colombie comme un acteur 
                    majeur dans la lutte contre le changement climatique.
                  </p>
                  <p className="leading-relaxed">
                    Petro a appelé à une action collective immédiate et à une transformation 
                    profonde du modèle économique mondial pour faire face à l'urgence climatique.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">🌍 Positions clés :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Urgence climatique absolue</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Transformation économique</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Responsabilité historique</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">📢 Impact du discours :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Reconnaissance internationale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Leadership régional</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Mobilisation citoyenne</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Justice sociale et autochtones */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <Users className="h-6 w-6" />
                  Justice sociale et droits des peuples autochtones
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Les peuples autochtones face au changement climatique</h3>
                  <p className="leading-relaxed mb-4">
                    Les peuples autochtones d'Amérique latine sont parmi les plus touchés par 
                    les effets du changement climatique. Leurs territoires traditionnels, 
                    leurs modes de vie et leurs connaissances ancestrales sont menacés par 
                    la dégradation environnementale.
                  </p>
                  <p className="leading-relaxed">
                    La justice climatique implique de reconnaître leurs droits, de protéger 
                    leurs territoires et de valoriser leurs savoirs traditionnels dans la 
                    lutte contre le changement climatique.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">🏛️ Droits fondamentaux :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Territoires ancestraux</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Consultation préalable</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Autodétermination</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">🌱 Savoirs traditionnels :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Gestion durable des ressources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Médecine traditionnelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Agriculture ancestrale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Fast-fashion et pollution */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <Leaf className="h-6 w-6" />
                  Fast-fashion et décharge au Chili
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Le désert d'Atacama transformé en décharge</h3>
                  <p className="leading-relaxed mb-4">
                    Le désert d'Atacama au Chili est devenu le symbole des excès de la fast-fashion. 
                    Des milliers de tonnes de vêtements usagés y sont déversées chaque année, 
                    créant une pollution visuelle et environnementale majeure.
                  </p>
                  <p className="leading-relaxed">
                    Ce phénomène illustre les défis de la gestion des déchets textiles et la 
                    responsabilité des pays développés dans la pollution des pays du Sud.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">📊 Impact environnemental :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Pollution visuelle</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Contamination des sols</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">Dégradation du paysage</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">🔄 Solutions possibles :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Recyclage textile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Économie circulaire</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Consommation responsable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <FileText className="h-6 w-6" />
                  Essai rédigé : Transición energética española: ¿vitrina o espejismo verde?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Introducción</h3>
                  <p className="leading-relaxed mb-4">
                    El PNIEC 2024 fija un 81 % de renovables en 2030 y la Estrategia 2050 prevé 
                    un 97 % de generación limpia en España. Estas metas, únicas en la UE, plantean 
                    un desafío: ¿podrá un país mediterráneo, expuesto a sequías, liderar esta 
                    transición sin descuidar su tejido social?
                  </p>
                  <p className="leading-relaxed">
                    Primero analizaré los avances clave; luego evaluaré los obstáculos hídricos y sociales.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Desarrollo I – Avances y liderazgo</h3>
                  <p className="leading-relaxed mb-4">
                    El Gobierno ha autorizado 28 GW de nueva capacidad: 239 plantas fotovoltaicas 
                    y 43 parques eólicos. Ha arrancado el corredor de hidrógeno verde de Aboño con 
                    1 GW de electrólisis y se prevén 3 GW de eólica marina flotante esta década.
                  </p>
                  <p className="leading-relaxed">
                    Creo que estos proyectos sitúan a España a la cabeza de REPowerEU. Además, 
                    países como Brasil y Chile ya solicitan asesoría española para sus propias 
                    licitaciones de energía, lo que refuerza la proyección internacional.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Desarrollo II – Sequía y cohesión social</h3>
                  <p className="leading-relaxed mb-4">
                    La sequía crónica afecta al 60 % del territorio agrario. Sin almacenamiento 
                    en baterías ni bombeo adecuado, los excedentes solares podrían verterse 3 TWh 
                    en 2027, malgastando producción limpia.
                  </p>
                  <p className="leading-relaxed">
                    A ello se suma el rechazo local a la eólica marina cuando no se comparten 
                    royalties con los pescadores. Estimo que sería pertinente reforzar redes 
                    eléctricas y sistemas de almacenamiento, garantizando además precios estables 
                    y formación técnica en el mundo rural.
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Conclusión</h3>
                  <p className="leading-relaxed">
                    La gran lección es la tensión entre ambición climática y recursos hídricos escasos. 
                    Conviene armonizar la expansión de renovables con políticas de gestión del agua 
                    y refuerzo de la cohesión social. Si España lograra integrar tecnología avanzada, 
                    regulación clara y participación ciudadana, su transición energética brillaría 
                    como modelo en Iberoamérica.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Conseils méthodologiques */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-800">
                  <Lightbulb className="h-6 w-6" />
                  Conseils méthodologiques pour les concours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Comment utiliser ce module aux concours</h3>
                  <p className="leading-relaxed mb-4">
                    Ce module fournit le contexte civilisationnel indispensable pour aborder les épreuves 
                    d'espagnol aux concours ECG. Voici comment l'utiliser efficacement :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Version :</strong> Comprendre le contexte environnemental des textes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Thème :</strong> Maîtriser le vocabulaire environnemental spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Essai :</strong> Utiliser les exemples et arguments développés</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 mb-3">📝 Vocabulaire clé :</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">el cambio climático</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">las emisiones</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">la transición energética</span>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <span className="text-sm font-medium text-green-800">la justicia climática</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 mb-3">🎯 Sujets probables :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Transition énergétique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Justice climatique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        <span className="text-sm text-green-700">Droits autochtones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bouton retour en bas de page */}
        <div className="flex justify-center mt-12 pb-8">
          <Link to="/formation/espagnol/civilisation">
            <Button className="bg-pr-orange-dark hover:bg-pr-orange-dark text-white px-6 py-3 rounded-md font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module7MedioAmbienteClimaPage; 