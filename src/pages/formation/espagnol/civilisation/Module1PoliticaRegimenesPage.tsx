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
    <div className="carnet-paper min-h-screen relative overflow-hidden font-instrument text-carnet-ink">
      {/* Floating elements - Bubbles like landing page */}
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/civilisation" className="hover:text-carnet-red transition-colors">
              Civilisation
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <span className="text-carnet-ink font-semibold">Política y Regímenes</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête du module */}
        <div className="text-center mb-10">
          
          <h1 className="text-4xl font-lora text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red text-carnet-paper">
              <Scale className="h-9 w-9" />
            </div>
            Política y Regímenes
          </h1>
          <p className="text-xl text-carnet-ink-mute max-w-3xl mx-auto">
            Crises démocratiques, extrême droite/gauche, évolution politique en Espagne et Amérique latine
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Navigation du module */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 hover:shadow-2xl hover:border-[rgba(193,68,58,0.25)] transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[rgba(193,68,58,0.05)] to-[rgba(193,68,58,0.05)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-lora flex items-center gap-2 text-carnet-ink">
                  <div className="w-6 h-6 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-carnet-red" />
                  </div>
                  Contenu du module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200">
                    <h4 className="font-lora text-carnet-ink mb-2">1. Introduction</h4>
                    <p className="text-sm text-carnet-ink-mute">Panorama des régimes politiques contemporains</p>
                  </div>
                  <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200">
                    <h4 className="font-lora text-carnet-ink mb-2">2. Crises démocratiques</h4>
                    <p className="text-sm text-carnet-ink-mute">Fatigue démocratique et montée des populismes</p>
                  </div>
                  <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200">
                    <h4 className="font-lora text-carnet-ink mb-2">3. Extrême droite en Espagne</h4>
                    <p className="text-sm text-carnet-ink-mute">Vox et ses positions politiques</p>
                  </div>
                  <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200">
                    <h4 className="font-lora text-carnet-ink mb-2">4. Transitions politiques</h4>
                    <p className="text-sm text-carnet-ink-mute">Évolutions en Amérique latine</p>
                  </div>
                  <Link to="/formation/espagnol/civilisation/module1/vocabulaire">
                    <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200 cursor-pointer">
                      <h4 className="font-lora text-carnet-ink mb-2">5. Vocabulaire démocratique</h4>
                      <p className="text-sm text-carnet-ink-mute">50 termes clés de la démocratie</p>
                    </div>
                  </Link>
                  <div className="p-3 rounded-lg carnet-paper-plain border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.05)] hover:border-[rgba(193,68,58,0.25)] transition-all duration-200">
                    <h4 className="font-lora text-carnet-ink mb-2">6. Essai rédigé</h4>
                    <p className="text-sm text-carnet-ink-mute">Démocratie et populisme</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne centrale - Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Introduction */}
            <Card className="group border border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 hover:shadow-2xl hover:border-[rgba(193,68,58,0.25)] transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[rgba(193,68,58,0.05)] to-[rgba(193,68,58,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-lora flex items-center gap-2 text-carnet-ink group-hover:text-carnet-red transition-colors">
                  <div className="w-8 h-8 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-carnet-red" />
                  </div>
                  Introduction - Panorama des régimes politiques
                </CardTitle>
              </CardHeader>
              <CardContent className="text-carnet-ink-soft space-y-6 relative z-10">
                <div className="bg-white/70 rounded-lg p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
                  <h3 className="font-bold text-carnet-ink mb-3">Contexte général</h3>
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
                    <h3 className="font-semibold text-carnet-red-deep mb-3">🎯 Points clés :</h3>
                    <ul className="text-sm text-carnet-red space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Évolution des régimes politiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Clivages droite/gauche contemporains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Mouvements contestataires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Populisme et démocratie</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-carnet-red-deep mb-3">📚 Pour les concours :</h3>
                    <ul className="text-sm text-carnet-red space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Contexte pour versions et thèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Exemples pour essais argumentatifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Vocabulaire politique spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                        <span>Actualité politique hispanique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Crises démocratiques */}
            <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
                  <TrendingUp className="h-6 w-6" />
                  Crises démocratiques et fatigue démocratique
                </CardTitle>
              </CardHeader>
              <CardContent className="text-carnet-red space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Le phénomène de "fatigue démocratique"</h3>
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
                    <h4 className="font-semibold text-carnet-red-deep mb-3">📊 Indicateurs de crise :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">Latinobarómetro 2024</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">52% soutien démocratique</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">33% accepterait autoritarisme</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-carnet-red-deep mb-3">🌍 Exemples régionaux :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Colombie : fatigue démocratique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Venezuela : crise institutionnelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Nicaragua : régression autoritaire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Extrême droite en Espagne */}
            <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
                  <Users className="h-6 w-6" />
                  Vox et l'extrême droite espagnole
                </CardTitle>
              </CardHeader>
              <CardContent className="text-carnet-red space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">L'émergence de Vox</h3>
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
                    <h4 className="font-semibold text-carnet-red-deep mb-3">🗳️ Positions politiques :</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">Centralisation étatique</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">Opposition à l'immigration</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">Défense valeurs traditionnelles</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-carnet-red-deep mb-3">📈 Évolution électorale :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">2019 : 52 députés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">2023 : 33 députés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Présence régionale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Essai rédigé */}
            <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
                  <FileText className="h-6 w-6" />
                  Essai rédigé : Democracia y populismo en América hispanohablante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-carnet-red space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Introduction</h3>
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

                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Desarrollo I – Logros que seducen al electorado</h3>
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

                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Desarrollo II – Costes institutionnels</h3>
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

                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Conclusión</h3>
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
            <Card className="border-2 border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-carnet-red-deep">
                  <Lightbulb className="h-6 w-6" />
                  Conseils méthodologiques pour les concours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-carnet-red space-y-6">
                <div className="bg-white/70 rounded-lg p-6 border border-[rgba(193,68,58,0.25)]">
                  <h3 className="font-bold text-carnet-red-deep mb-3">Comment utiliser ce module aux concours</h3>
                  <p className="leading-relaxed mb-4">
                    Ce module fournit le contexte civilisationnel indispensable pour aborder les épreuves 
                    d'espagnol aux concours ECG. Voici comment l'utiliser efficacement :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                      <span><strong>Version :</strong> Comprendre le contexte politique des textes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                      <span><strong>Thème :</strong> Maîtriser le vocabulaire politique spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-carnet-red mt-1.5 flex-shrink-0"></span>
                      <span><strong>Essai :</strong> Utiliser les exemples et arguments développés</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-carnet-red-deep mb-3">📝 Vocabulaire clé :</h3>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">el populismo</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">la democracia</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">el autoritarismo</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[rgba(193,68,58,0.25)] bg-[rgba(193,68,58,0.05)]">
                        <span className="text-sm font-medium text-carnet-red-deep">los contrapesos</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-carnet-red-deep mb-3">🎯 Sujets probables :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Crise démocratique en Amérique latine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Populisme vs démocratie</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-carnet-red"></div>
                        <span className="text-sm text-carnet-red">Extrême droite en Europe</span>
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
            <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper px-6 py-3 rounded-md font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module1PoliticaRegimenesPage; 