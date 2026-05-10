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
  AlertTriangle,
  TrendingUp,
  Scale,
  FileText,
  Calendar,
  Target,
  Lightbulb,
  Radio
} from 'lucide-react';

const Module5NarcotráficoSeguridadPage = () => {
  return (
    <div className="relative relative overflow-hidden">
      {/* Floating elements - Bubbles like landing page */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-red-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-red-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-orange-50 rounded-full opacity-5 animate-pulse"></div>
      
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
            <span className="text-gray-900 font-bold">Narcotráfico y Seguridad</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-red-600 text-white">
              <AlertTriangle className="h-9 w-9" />
            </div>
            Narcotráfico y Seguridad
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Violence chronique, cartels 4.0, sécurité, logistique criminelle et gouvernance locale
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border-red-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Navigation du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Link to="/formation/espagnol/civilisation/module5/vocabulaire">
                    <Button variant="outline" className="w-full justify-start border-red-200 hover:bg-red-50 text-red-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Vocabulaire thématique
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                    <FileText className="mr-2 h-4 w-4" />
                    Fiches de révision
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                    <Calendar className="mr-2 h-4 w-4" />
                    Actualités clés
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Innovations criminelles
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                      <span>Semisumergibles avec connectivité satellite</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                      <span>Drones et spoofing AIS</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                      <span>Conteneurs "gemelos" pour confondre</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                      <span>Recrutement via TikTok/Telegram</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale et droite - Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Problématique */}
            <Card className="border-red-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-red-50 to-white">
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Problématique du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">
                    ¿Puede la región frenar un negocio que fusiona ingeniería naval, logística portuaria y redes sociales sin desbordar el Estado de derecho?
                  </h3>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r">
                    <p className="text-sm text-red-900 leading-relaxed">
                      <strong>La région peut-elle stopper un business qui fusionne ingénierie navale, logistique portuaire et réseaux sociaux sans déborder l'État de droit ?</strong>
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        1) Panorama : du business local à la logistique globale
                      </h4>
                      <p className="text-sm">
                        Dans la dernière décennie, le narcotrafic hispanique est passé d'une production andine + routes classiques à une <strong>logistique transnationale</strong> qui connecte jungle, mer et ports européens. D'un côté, la mer concentre les grands envois ; de l'autre, la fragmentation des charges et la sous-traitance criminelle diluent les responsabilités. En somme, même si la pression policière augmentait sur un couloir, les réseaux déplaceraient leurs routes : c'est un <strong>marché adaptatif</strong>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        2) Innovation criminelle 4.0 : mer, hardware et satellites
                      </h4>
                      <p className="text-sm">
                        Les cartels investissent en R&D : <strong>semisumergibles</strong> (même non pilotés), bateaux rapides, spoofing de l'AIS et communications satellitales pour éviter les radars. Sur terre, drones pour surveillance/livraison et "conteneurs jumeaux" pour confondre les inspections. Ainsi, même si le radar côtier s'améliore, si on ne croise pas les données de risque tout au long de la chaîne logistique, l'envoi passe. 
                      </p>
                      <p className="text-sm mt-2">
                        <strong>Idée clé :</strong> traiter l'interdiction comme de la <em>cybersécurité flottante</em>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        3) Ports et chaîne logistique : le vrai goulot d'étranglement
                      </h4>
                      <p className="text-sm">
                        La majorité de la cocaïne traverse par conteneurs : dissimulations dans fruits, charbon ou plastiques ; terminaux avec contrôles laxistes ; et <strong>corruption comme lubrifiant</strong>. Les villes portuaires souffrent de violence et de cooptation d'acteurs locaux. 
                      </p>
                      <p className="text-sm mt-2">
                        Par conséquent, pour que les ports cessent d'être le maillon faible, il faut une inspection 24/7, des scanners non intrusifs, une analytique de risque et des audits anticorruption.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        4) Réseaux sociaux, recrutement et commandement "dans le cloud"
                      </h4>
                      <p className="text-sm">
                        Le <strong>"narco-glam"</strong> recruterait des mineurs sur TikTok/Telegram avec des promesses d'argent facile ; des manuels de drones circuleraient dans des canaux fermés ; paiements fractionnés et entreprises écrans masquent la route de l'argent. 
                      </p>
                      <p className="text-sm mt-2">
                        Bien qu'on parle de "guerre" au crime, le vrai levier est de suivre l'argent et les précurseurs : si les parquets traçaient mieux ces transactions, la technologie du narco se renchérirait.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        5) Impact social et gouvernance locale
                      </h4>
                      <p className="text-sm">
                        Le business étend homicides, extorsions ("cobro de piso"), déplacements internes et usure institutionnelle. Des quartiers entiers tombent sous contrôle des gangs et la peur fait taire la citoyenneté. Si l'État abandonnait les services de base et l'emploi formel, la fenêtre de recrutement s'ouvrirait encore plus. C'est pourquoi <strong>sécurité et développement local doivent marcher ensemble</strong>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        6) Réponse étatique et coopération qui fonctionnent
                      </h4>
                      <p className="text-sm">
                        Premièrement, <strong>ports intelligents</strong> : compliance privée, listes blanches/noires, analyse de routes et croisement de bases (douanes-parquets-police). Ensuite, <strong>mer coordonnée</strong> : patrouilles combinées, recherche et sauvetage, échange en temps réel (pas seulement des opérations ponctuelles). Enfin, <strong>argent et précurseurs</strong> : anti-blanchiment sérieux, licences et quotas vérifiables, laboratoires qui certifient la chaîne de garde. 
                      </p>
                      <p className="text-sm mt-2">
                        Si ces couches s'intégraient, le coût criminel augmenterait et la route perdrait son attrait.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        7) Prévention : emploi, formation et alternative pour les jeunes
                      </h4>
                      <p className="text-sm">
                        Sans emploi formel, formation technique et programmes pour jeunes, la répression seule ne suffit pas. Il convient de lier permis et contrats à des parcours de formation dans les ports, la logistique et la maintenance, pour que l'inclusion soit réelle et non cyclique. 
                      </p>
                      <p className="text-sm mt-2">
                        En définitive, <strong>sécurité + développement + données publiques évaluables</strong> est la seule triade qui évite que les promesses restent lettre morte.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-orange-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-orange-900 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Essai rédigé - Exemple type concours
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                    Sujet : Narcotráfico 4.0 y respuesta estatal
                  </Badge>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                  <div>
                    <h4 className="font-semibold text-pr-orange-dark mb-2">Introducción</h4>
                    <p className="text-sm">
                      En 2024 la <strong>Armada colombiana</strong> interceptó un semisumergible con conectividad satelital y varias toneladas de cocaína; semanas después, una operación multinacional decomisó cientos de toneladas en alta mar. En 2025 surgieron pruebas con <strong>vectores no tripulados</strong> y creció el uso de contenedores «limpios» para llegar a Europa. 
                    </p>
                    <p className="text-sm mt-2">
                      ¿Puede la región frenar un negocio que fusiona ingeniería naval, logística portuaria y redes sociales sin desbordar el Estado de derecho? Sostengo que sí, si la respuesta combina <strong>tecnología pública, cooperación y control del dinero</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pr-orange-dark mb-2">Desarrollo I — Innovación criminal 4.0</h4>
                    <p className="text-sm">
                      Los cárteles invierten en I+D: <strong>semisumergibles con piloto automático</strong>, navegación satelital, drones y spoofing del AIS. En tierra, eligen terminales con controles laxos y subcontratan la violencia a pandillas locales; en la nube, captan a menores con «narco-glam» y cierran tratos cifrados. 
                    </p>
                    <p className="text-sm mt-2">
                      Aunque mejore el radar costero, si los puertos no cruzan datos de riesgo y cadena logística, el contenedor pasa. Si los grupos invirtieran aún más en prototipos autónomos, la interdicción debería tratarse como <strong>ciberseguridad flotante</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pr-orange-dark mb-2">Desarrollo II — Respuesta estatal y cooperación</h4>
                    <p className="text-sm">
                      Para que los puertos dejen de ser el eslabón débil, hace falta <strong>inspección continua</strong> con escáneres no intrusivos, analítica de riesgo y auditorías anticorrupción robustas. En el mar, conviene mantener patrullas combinadas, búsqueda y rescate, e intercambio de inteligencia en tiempo real. 
                    </p>
                    <p className="text-sm mt-2">
                      Además, es imprescindible que fiscalías y aduanas integren <strong>trazabilidad de precursores y antilavado</strong>, a fin de encarecer cada fase del envío. Si se reforzaran consulados, laboratorios y unidades de cadena de custodia, la regularidad del flujo se quebraría.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pr-orange-dark mb-2">Conclusión</h4>
                    <p className="text-sm">
                      Más que golpes de efecto, la región necesita una <strong>arquitectura común</strong> que vuelva carísima cada etapa: puertos inteligentes, control marítimo coordinado y dinero trazable. Si se integraran satélites, puertos y fiscalías con métricas públicas claras, verificables e independientes y sanciones por incumplimiento, el «narcotráfico 4.0» perdería su ventaja tecnológica sin sacrificar garantías, y el Estado de derecho saldría fortalecido.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Points clés de l'essai
                  </h4>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pr-orange-dark mt-1.5"></div>
                      <span><strong>Introduction :</strong> Semisumergibles satellitaires (2024) + drones non pilotés (2025) → Réponse via tech publique + coopération</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pr-orange-dark mt-1.5"></div>
                      <span><strong>§1 :</strong> Innovation criminelle 4.0 (pilote auto, AIS spoofing, narco-glam TikTok) → Traiter comme cybersécurité</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pr-orange-dark mt-1.5"></div>
                      <span><strong>§2 :</strong> Ports intelligents + patrouilles mer + traçabilité précurseurs/argent → Renforcer consulats et laboratoires</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pr-orange-dark mt-1.5"></div>
                      <span><strong>Conclusion :</strong> Architecture commune (satellites + ports + fiscalités) avec métriques publiques = Défaite du narco 4.0</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    🎯 Sujets probables
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pr-orange-dark"></div>
                      <span className="text-sm text-pr-orange-dark">Narcotrafic 4.0 : innovations technologiques et réponse étatique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pr-orange-dark"></div>
                      <span className="text-sm text-pr-orange-dark">Ports et corruption : le maillon faible de la lutte antidrogue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pr-orange-dark"></div>
                      <span className="text-sm text-pr-orange-dark">Réseaux sociaux et recrutement criminel des jeunes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pr-orange-dark"></div>
                      <span className="text-sm text-pr-orange-dark">Coopération régionale face au narcotrafic transnational</span>
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
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module5NarcotráficoSeguridadPage;

