import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Ship,
  ArrowLeft,
  BookOpen,
  Users,
  TrendingUp,
  Scale,
  FileText,
  Calendar,
  Target,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';

const Module4MigracionesFronterasPage = () => {
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
            <span className="text-gray-900 font-bold">Migraciones y Fronteras</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <Ship className="h-9 w-9" />
            </div>
            Migraciones y Fronteras
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flux migratoires, contrôle frontalier, Canarias, asile et intégration en Espagne
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border-blue-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Navigation du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Link to="/formation/espagnol/civilisation/module4/vocabulaire">
                    <Button variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-50 text-blue-700">
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
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Données clés 2024-2025
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>+61 000 arrivées par mer (2024)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>47 000 débarquements aux Canaries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>+5 000 mineurs non accompagnés</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                      <span>~10 000 morts ou disparus en route</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale et droite - Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Problématique */}
            <Card className="border-blue-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Problématique du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    ¿Cómo gestionar la presión migratoria sin sacrificar vidas ni soberanía?
                  </h3>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
                    <p className="text-sm text-blue-900 leading-relaxed">
                      <strong>Comment gérer la pression migratoire sans sacrifier des vies ni la souveraineté ?</strong>
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        1) Panorama 2015–2025 : magnitudes et tendances
                      </h4>
                      <p className="text-sm">
                        Depuis le milieu de la décennie passée, les flux hispano-américains se sont diversifiés : exodes régionaux (Venezuela), caravanes centraméricaines vers les États-Unis et, en Europe, l'essor de la route atlantique vers les Canaries. En 2024, l'Espagne a enregistré plus de <strong>61 000 arrivées par mer</strong>, dont près de <strong>47 000 ont débarqué aux Canaries</strong> ; ce fut, de loin, le principal point d'accès. Au premier semestre 2025, les entrées ont chuté dans l'archipel, mais le risque est resté élevé. En somme, même si la pression migratoire diminuait ponctuellement, le phénomène reste <strong>structurel et multicausal</strong> (violence, pauvreté, réseaux, climat).
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        2) Routes et contrôle frontalier : de l'Atlantique au Détroit
                      </h4>
                      <p className="text-sm">
                        Les Canaries supportent une charge disproportionnée en raison de leur position et de leur distance ; bien que l'externalisation puisse sembler une solution rapide, l'Atlantique est devenu une <strong>fosse commune</strong> qui exige une recherche et un sauvetage coordonnés. Ceuta et Melilla ajoutent une composante terrestre (clôtures, pression sur l'asile) et le Détroit maintient des flux irréguliers constants. 
                      </p>
                      <p className="text-sm mt-2">
                        Pour que la gestion soit crédible, il faut un <strong>partage solidaire interne et européen</strong>, pas seulement du volontariat. Si l'UE activait des quotas stables et un dispositif commun de SAR (Search and Rescue), la pression sur les îles serait allégée.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        3) Asile et mineurs : protection effective
                      </h4>
                      <p className="text-sm">
                        Les <strong>mineurs non accompagnés (MENA)</strong> mettent sous tension les systèmes de tutelle : en 2025, les Canaries ont dépassé les <strong>5 000 mineurs sous tutelle</strong>. La réponse doit être agile et homogène : transferts vers la péninsule, places éducatives et soutien psychologique. En Espagne, la LO 1/2004 a garanti la protection face à la violence ; en 2025, on a cherché à typifier la violence vicaire et à renforcer la voix de l'enfance dans les gardes. 
                      </p>
                      <p className="text-sm mt-2">
                        Il est impératif qu'il y ait des ressources, des professionnels formés et des protocoles communs ; s'ils avaient été appliqués de manière uniforme auparavant, des failles de protection auraient été évitées.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        4) Marché du travail, enracinement et économie souterraine
                      </h4>
                      <p className="text-sm">
                        La <strong>régularisation ordonnée</strong> réduit l'exploitation et correspond à des postes vacants réels (agriculture, soins, hôtellerie). En 2025, la réforme du Règlement des Étrangers est entrée en vigueur, renforçant les voies d'enracinement (emploi + formation) et facilitant l'insertion légale. Cependant, si les consulats et bureaux n'étaient pas renforcés, les goulets d'étranglement se perpétueraient. 
                      </p>
                      <p className="text-sm mt-2">
                        Il convient de lier les permis à des parcours de formation et à l'accréditation de compétences, pour que l'intégration professionnelle soit durable et ne dépende pas uniquement du cycle économique.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        5) Discours public et intégration : cohésion ou fracture
                      </h4>
                      <p className="text-sm">
                        Le langage déshumanisant ("illégaux") alimente la xénophobie et affaiblit la cohésion. C'est pourquoi les médias et les autorités doivent soigner leurs mots et publier des données vérifiables (délais d'asile, emploi, éducation). L'intégration fonctionne quand il y a accès au logement, reconnaissance des diplômes et politiques locales de coexistence. 
                      </p>
                      <p className="text-sm mt-2">
                        Si les villes misaient sur la médiation interculturelle et la formation linguistique, les conflits diminueraient et l'enracinement s'accélérerait. En définitive, <strong>gestion coresponsable, voies sûres et narratif responsable</strong> sont la seule triade qui évite que les promesses restent lettre morte.
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
                    Sujet : Migración y control fronterizo en España
                  </Badge>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Introducción</h4>
                    <p className="text-sm">
                      En 2024 España registró más de <strong>61.000 llegadas por mar</strong>, de las cuales casi <strong>47.000 desembarcaron en Canarias</strong>; ese mismo año se estimaron más de <strong>10.000 personas muertas o desaparecidas en ruta</strong>. En 2025, las entradas por Canarias cayeron de forma notable en el primer semestre, pero el riesgo siguió siendo extremo. ¿Puede un país de frontera gestionar esta presión sin sacrificar vidas ni soberanía? Sostengo que sí, si la respuesta fuera corresponsable y ordenada: apoyo a las islas, vías legales y salvamento eficaz.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Desarrollo I — Desproporción de la carga insular</h4>
                    <p className="text-sm">
                      Canarias concentra una carga desigual, especialmente con menores no acompañados (más de <strong>5.000 bajo tutela en 2025</strong>). Se anunció la redistribución de varios miles a la península, pero la aplicación tropieza con resistencias autonómicas y con una solidaridad intra-UE aún voluntaria. Además, entre enero y mayo de 2025 murieron o desaparecieron casi <strong>1.900 personas rumbo a España</strong>, la mayoría en la ruta atlántica; entre las víctimas hubo mujeres y menores. 
                    </p>
                    <p className="text-sm mt-2">
                      Aunque la externalización parezca solución, el Atlántico —auténtica fosa común— exige búsqueda y rescate coordinados y un mecanismo obligatorio de reparto: si la UE activara cuotas y rescate común, Canarias no cargaría sola con la emergencia.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Desarrollo II — Regularización y gestión ordenada</h4>
                    <p className="text-sm">
                      En 2025 entró en vigor la <strong>reforma del Reglamento de Extranjería</strong>, que refuerza vías de arraigo y empleo (formación, vacantes, reagrupación), para reducir la economía sumergida. Ahora bien, si no se reforzaran consulados y oficinas, los cuellos de botella se perpetuarían. 
                    </p>
                    <p className="text-sm mt-2">
                      Propongo <strong>corredores humanitarios limitados</strong>, cupos vinculantes a escala estatal y UE, e incentivos para profesionalizar la acogida en islas frontera; además, redirigir fondos europeos a refuerzo de tutela de menores, atención psicológica y capacitación laboral. Solo así la regularización sería ordenada y creíble.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Conclusión</h4>
                    <p className="text-sm">
                      La experiencia 2024–2025 demuestra que la respuesta aislada fracasa. Si se consolidaran salvamento robusto, vías seguras y cuotas solidarias bajo estándares comunes, España podría convertir su condición de frontera en un liderazgo europeo eficaz, evitando que los compromisos queden en papel mojado.
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
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5"></div>
                      <span><strong>Introduction :</strong> 61 000 arrivées (2024), 10 000 morts → Gestion possible si coresponsable</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5"></div>
                      <span><strong>§1 :</strong> Canaries surchargées (5 000 MENA), 1 900 morts (jan-mai 2025) → Besoin de quotas UE obligatoires</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5"></div>
                      <span><strong>§2 :</strong> Réforme Règlement 2025 (arraigo + emploi) → Propositions : couloirs humanitaires, quotas, fonds UE</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5"></div>
                      <span><strong>Conclusion :</strong> Sauvetage robuste + voies sûres + quotas solidaires = Leadership européen</span>
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
                      <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                      <span className="text-sm text-orange-700">Crise migratoire aux Canaries : causes et solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                      <span className="text-sm text-orange-700">Mineurs non accompagnés (MENA) : protection et intégration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                      <span className="text-sm text-orange-700">Régularisation vs économie souterraine en Espagne</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                      <span className="text-sm text-orange-700">Solidarité européenne et quotas migratoires</span>
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module4MigracionesFronterasPage;

