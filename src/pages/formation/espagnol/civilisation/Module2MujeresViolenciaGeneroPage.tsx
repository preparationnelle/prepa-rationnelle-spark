import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Heart,
  ArrowLeft,
  BookOpen,
  Shield,
  TrendingUp,
  Scale,
  FileText,
  Calendar,
  Target,
  Lightbulb
} from 'lucide-react';

const Module2MujeresViolenciaGeneroPage = () => {
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
            <span className="text-gray-900 font-bold">Mujeres y Violencia de Género</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Heart className="h-9 w-9" />
            </div>
            Mujeres y Violencia de Género
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Féminisme, égalité, lutte contre les violences faites aux femmes en Espagne et Amérique latine
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border-orange-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                <CardTitle className="text-orange-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Navigation du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Link to="/formation/espagnol/civilisation/module2/vocabulaire">
                    <Button variant="outline" className="w-full justify-start border-orange-200 hover:bg-orange-50 text-orange-700">
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
                  <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Ressources complémentaires
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                      <span>Loi Organique 1/2004 (Espagne)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                      <span>Mouvement Ni Una Menos (2015)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                      <span>Claudia Sheinbaum - Mexique 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale et droite - Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Problématique */}
            <Card className="border-orange-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-orange-900 flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Problématique du module
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">
                    ¿Cómo el mundo hispanohablante concilia avances legales y persistencia de las violencias de género?
                  </h3>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4 rounded-r">
                    <p className="text-sm text-orange-900 leading-relaxed">
                      <strong>Comment le monde hispanophone concilie-t-il les avancées légales et la persistance des violences de genre ?</strong>
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        1) Panorama général
                      </h4>
                      <p className="text-sm">
                        Depuis le début du siècle, l'espace public s'est féminisé, mais l'égalité réelle reste fragile. En Espagne, la <strong>Loi Organique 1/2004</strong> fut pionnière en créant des tribunaux spécifiques et un système intégral (prévention, protection, poursuite). En Amérique latine, <strong>Ni Una Menos (2015)</strong> a transformé la dénonciation en agenda public. Malgré tout, les chiffres de féminicides persistent : après deux décennies d'enregistrement officiel, le total dépasse largement le millier. Ainsi, si les avancées normatives existent, il est impératif que l'égalité se traduise en sécurité effective.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        2) Violences de genre et réponse de l'État
                      </h4>
                      <p className="text-sm">
                        La violence machiste ne se limite pas aux coups : elle inclut le contrôle économique, la maltraitance psychologique et la <strong>violence vicaire</strong> (faire du mal aux enfants pour punir la mère). Depuis 2013, des dizaines de mineurs ont été assassinés. C'est pourquoi, en 2025, le gouvernement a présenté un avant-projet de loi pour typifier explicitement la violence vicaire et renforcer la protection de l'enfance (garde, régime de visites et mesures conservatoires). 
                      </p>
                      <p className="text-sm mt-2">
                        <em>Important :</em> en août 2025, ce n'est pas encore une loi, elle est toujours en cours d'examen aux Cortes. La LO 1/2004 reste la base (tribunaux spécialisés, ordres de protection, coordination), mais son efficacité dépend de l'application de ressources et de protocoles homogènes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        3) Parité et leadership
                      </h4>
                      <p className="text-sm">
                        La représentation s'est améliorée : après 2023, le Congrès espagnol compte environ <strong>44% de députées</strong> et une loi de parité (40%) oblige à équilibrer les listes et les directions. Néanmoins, les plafonds de verre persistent dans l'entreprise et l'administration. En 2024, <strong>Claudia Sheinbaum</strong> est devenue la première présidente du Mexique : étape symbolique qui, bien qu'historique, ne garantit pas à elle seule des politiques transformatrices sans coalitions et budget. Par conséquent, la parité légale doit s'accompagner de mérites évaluables et de sanctions si les quotas n'étaient pas respectés.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        4) Économie du soin et écarts
                      </h4>
                      <p className="text-sm">
                        L'égalité formelle n'élimine pas l'<strong>écart salarial</strong> (environ 17% en Espagne dans les dernières données consolidées) ni la ségrégation sectorielle. Les femmes concentrent les bas salaires, les contrats à temps partiel et une charge disproportionnée de soins ; d'où la nécessité d'avancer sur la coresponsabilité et les congés équilibrés. Si la coresponsabilité progressait, l'écart de revenus et de pensions diminuerait plus rapidement. De plus, la hausse du SMI a surtout bénéficié aux femmes, mais sans carrière professionnelle et sans temps pour se former, il leur serait difficile d'accéder à des postes mieux rémunérés.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        5) Culture, éducation et horizon 2030
                      </h4>
                      <p className="text-sm">
                        L'égalité nécessite de changer les mentalités : combattre les stéréotypes à l'école, dans les médias et dans la justice. Début 2025, les femmes occupaient un peu plus d'un quart des sièges dans le monde et de nombreux pays n'ont jamais eu de chef d'État femme : signe que l'écart symbolique persiste. Pour que les lois ne restent pas lettre morte, il faut une éducation affective et sexuelle, des données publiques et une évaluation indépendante. En définitive, le mot d'ordre est double : <strong>tolérance zéro avec la violence</strong> et <strong>mérite avec parité au pouvoir</strong>. Ce n'est qu'ainsi que l'égalité cessera d'être une promesse pour devenir réalité.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-blue-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Essai rédigé - Exemple type concours
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    Sujet : Mujeres, igualdad y violencias de género en el mundo hispano
                  </Badge>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p className="text-sm">
                    No cabe duda de que el mundo hispanohablante ha avanzado en materia de igualdad de género, pero la realidad sigue marcada por desigualdades y violencias. En España, la <strong>Ley Orgánica 1/2004</strong> fue pionera en Europa: creó juzgados especializados y apostó por la prevención, protección y persecución del delito. Sin embargo, veinte años después, <strong>45 mujeres fueron asesinadas por sus parejas en 2024</strong> y el balance asciende a <strong>1 290 víctimas desde 2003</strong>. Estos datos muestran que la impunidad persiste a pesar de las normas.
                  </p>

                  <p className="text-sm">
                    En representación política se observan avances notables aunque insuficientes. Tras las elecciones de 2023, el Congreso español cuenta con cerca del <strong>44 % de diputadas</strong>. A nivel internacional, la elección de <strong>Claudia Sheinbaum en 2024</strong> como primera presidenta de México simboliza un hito. No obstante, es imprescindible que este liderazgo femenino no se quede en la anécdota: aunque Sheinbaum sea científica y ecologista, aún debe enfrentar la violencia de los cárteles y la desigualdad estructural. Además, en 2024 se aprobó una <strong>ley de paridad</strong> que exige una representación equilibrada en los órganos de decisión, lo que demuestra que la igualdad se legisla pero aún debe aplicarse.
                  </p>

                  <p className="text-sm">
                    La igualdad económica constituye otro desafío. La <strong>brecha salarial en España</strong> ha disminuido, pero en 2022 todavía alcanzaba un <strong>17,09 %</strong>. Si las tareas de cuidados se repartieran equitativamente, la brecha disminuiría más rápido. Por consiguiente, es urgente que gobiernos, empresas y hombres se impliquen en la corresponsabilidad familiar.
                  </p>

                  <p className="text-sm">
                    Finalmente, queda pendiente un cambio cultural profundo. Movimientos como <strong>#NiUnaMenos</strong> visibilizan los feminicidios y exigen que cada vida cuente. Es necesario que se deconstruyan los estereotipos machistas y se eduque en igualdad desde la infancia. Solo así la paridad y la erradicación de la violencia de género dejarán de ser un horizonte lejano y se convertirán en una realidad tangible.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Points clés de l'essai
                  </h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                      <span><strong>Introduction :</strong> Tension entre avancées légales et persistance des violences</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                      <span><strong>§1 :</strong> Cadre juridique (LO 1/2004) mais chiffres alarmants (1290 victimes)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                      <span><strong>§2 :</strong> Représentation politique (44% députées, Claudia Sheinbaum, loi de parité)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                      <span><strong>§3 :</strong> Écart salarial (17%) et nécessité de coresponsabilité</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                      <span><strong>Conclusion :</strong> Changement culturel (#NiUnaMenos) et éducation à l'égalité</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">🎯 Sujets probables :</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-blue-700">Violences de genre en Espagne et Amérique latine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-blue-700">Parité politique : avancées et limites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-blue-700">Égalité économique et écart salarial</span>
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
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module2MujeresViolenciaGeneroPage;

