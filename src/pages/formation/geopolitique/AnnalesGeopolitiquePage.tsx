import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Home, ChevronRight } from 'lucide-react';

const AnnalesGeopolitiquePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Annales Géopolitique</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/geopolitique">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la géopolitique
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Annales Géopolitique
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              25 ans de sujets d'annales ESSEC HGG et ESCP HGGMC (2000-2025)
            </p>
          </div>
        </div>

        {/* Premier encadré - Sujets ESSEC HGG 2000-2025 */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                Les sujets ESSEC HGG 2000-2025
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              Analyse des sujets d'épreuves ESSEC Histoire-Géographie-Géopolitique des années 2000 à 2025.
            </p>

            {/* ESSEC */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                ESSEC HGG (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 :</span>
                    <span className="text-gray-700 ml-2">Les arcs de crise dans le monde depuis le début de la guerre froide.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 :</span>
                    <span className="text-gray-700 ml-2">Globalisation et multiplication des frontières depuis les années 90 : un paradoxe ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 :</span>
                    <span className="text-gray-700 ml-2">La France, puissance d'influence mondiale ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 :</span>
                    <span className="text-gray-700 ml-2">Le contrôle des routes stratégiques depuis 1913, vecteur de domination mondiale pour les Etats</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 :</span>
                    <span className="text-gray-700 ml-2">La maîtrise des espaces communs (maritime, aérien, extra-atmosphérique et numérique), enjeu de puissance par les États depuis 1945</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 :</span>
                    <span className="text-gray-700 ml-2">Le bassin méditerranéen : un espace de crises et de rivalités internationales depuis la fin de la guerre froide</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 :</span>
                    <span className="text-gray-700 ml-2">La puissance chinoise en Asie orientale</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 :</span>
                    <span className="text-gray-700 ml-2">La construction européenne confrontée à la question de la nation (1951-2018)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 :</span>
                    <span className="text-gray-700 ml-2">Le développement de l'Afrique à l'épreuve de la guerre (des années 1960 à nos jours)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 :</span>
                    <span className="text-gray-700 ml-2">La construction européenne face aux défis de la Méditerranée et du monde méditerranéen (1957-2016)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 :</span>
                    <span className="text-gray-700 ml-2">Nourrir la planète : exigences paradoxales et nouvelle « géopolitique de la faim » (de la chute du mur de Berlin à nos jours)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 :</span>
                    <span className="text-gray-700 ml-2">L'industrie, un enjeu majeur au carrefour des problématiques de la mondialisation contemporaine</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 :</span>
                    <span className="text-gray-700 ml-2">Les Etats-Unis changent : mutations structurelles de l'économie et de la société américaines et conséquences géopolitiques mondiales (1991 à nos jours)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 :</span>
                    <span className="text-gray-700 ml-2">Croissance, puissance et développement durable : quelles corrélations et implications pour les grands pays et groupes de pays du monde ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 :</span>
                    <span className="text-gray-700 ml-2">La France et les Français face aux grands défis économiques et géopolitiques des trente dernières années</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 :</span>
                    <span className="text-gray-700 ml-2">Quels rôles pour l'Union européenne dans la mondialisation et le jeu des puissances ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 :</span>
                    <span className="text-gray-700 ml-2">L'essor économique et la montée en puissance de la Chine : chances ou menaces pour le reste du monde ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 :</span>
                    <span className="text-gray-700 ml-2">Le pétrole et le gaz naturel, richesses et armes à risques</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 :</span>
                    <span className="text-gray-700 ml-2">L'Afrique, un continent toujours périphérique et en mal développement ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 :</span>
                    <span className="text-gray-700 ml-2">Les enjeux économiques et géopolitiques des flux et de l'organisation du commerce mondial depuis les années 1980</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 :</span>
                    <span className="text-gray-700 ml-2">Les difficultés de la construction européenne : obstacles et désaccords</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 :</span>
                    <span className="text-gray-700 ml-2">L'ouverture de l'économie japonaise sur le monde (période postérieure à 1945)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 :</span>
                    <span className="text-gray-700 ml-2">Deux évolutions du système socialiste : transition en Russie et « voie chinoise » — Comparez et évaluez</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 :</span>
                    <span className="text-gray-700 ml-2">L'industrie a-t-elle encore une place dans l'économie française aujourd'hui ? Ne pas négliger héritages historiques et dimension sociale</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 :</span>
                    <span className="text-gray-700 ml-2">Population, société, économie dans les pays en développement. Insister sur l'actualité du problème, choix d'exemples libres</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 :</span>
                    <span className="text-gray-700 ml-2">Les mutations de l'agriculture française depuis le début des années 1960 s'expliquent-elles par la libéralisation des échanges dans le monde ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCP */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                ESCP HGGMC (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 :</span>
                    <span className="text-gray-700 ml-2">La Chine, puissance rattrapée par ses vulnérabilités.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 :</span>
                    <span className="text-gray-700 ml-2">Le changement climatique, facteur de la recomposition de la mondialisation.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 :</span>
                    <span className="text-gray-700 ml-2">Instabilités et violences en Amérique latine.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 :</span>
                    <span className="text-gray-700 ml-2">Vers un retour des frontières ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 :</span>
                    <span className="text-gray-700 ml-2">Mondialisation et mise en concurrence des pays et des territoires pour attirer les activités économiques.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 :</span>
                    <span className="text-gray-700 ml-2">La France dans la recomposition des puissances dominantes.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 :</span>
                    <span className="text-gray-700 ml-2">Les matières premières dans les stratégies de puissance des États.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 :</span>
                    <span className="text-gray-700 ml-2">États-Unis – Chine : rivalités de pouvoir et d'influence.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 :</span>
                    <span className="text-gray-700 ml-2">L'Union européenne face aux effets déstabilisateurs de la mondialisation.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 :</span>
                    <span className="text-gray-700 ml-2">Influences et ingérences étrangères au Proche et au Moyen-Orient.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 :</span>
                    <span className="text-gray-700 ml-2">Les espaces maritimes, objet de tensions et de conflits entre les États.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 :</span>
                    <span className="text-gray-700 ml-2">L'Afrique subsaharienne est-elle à l'écart du monde ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 :</span>
                    <span className="text-gray-700 ml-2">Les États-Unis et l'exercice de la puissance.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 :</span>
                    <span className="text-gray-700 ml-2">Les zones d'intégration régionale : étape ou alternative au processus de mondialisation ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 :</span>
                    <span className="text-gray-700 ml-2">Rivalités et rapports de puissance en Asie orientale.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 :</span>
                    <span className="text-gray-700 ml-2">Les années 1980-2000 sont-elles en rupture ou en continuité par rapport au processus de mondialisation hérité de la Révolution industrielle ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 :</span>
                    <span className="text-gray-700 ml-2">Les Amériques entre intégrations et fragmentations.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 :</span>
                    <span className="text-gray-700 ml-2">Que reste-t-il aujourd'hui du clivage Nord-Sud ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 :</span>
                    <span className="text-gray-700 ml-2">La Méditerranée, jeux d'interfaces économiques et géopolitiques de 1945 à nos jours.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 :</span>
                    <span className="text-gray-700 ml-2">Les innovations scientifiques et techniques dans l'organisation et la dynamique de la mondialisation.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 :</span>
                    <span className="text-gray-700 ml-2">La mobilité des marchandises, des capitaux et des hommes dans l'espace de l'Europe des 15 de 1945 à nos jours.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 :</span>
                    <span className="text-gray-700 ml-2">Hiérarchies et basculements des rapports de forces mondiaux depuis 1945.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 :</span>
                    <span className="text-gray-700 ml-2">Les problématiques énergétiques de l'Union européenne à 15 de 1945 à nos jours : impacts économiques, technologiques et géopolitiques dans un espace mondialisé.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 :</span>
                    <span className="text-gray-700 ml-2">Transports et mutations économiques de l'espace ouest-européen depuis les années 1920.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 :</span>
                    <span className="text-gray-700 ml-2">L'évolution de l'emploi salarié dans l'espace ouest-européen et aux États-Unis du début des années 1920 au début des années 1970.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 :</span>
                    <span className="text-gray-700 ml-2">Les transformations des industries états-unienne et mexicaine depuis les années 1970 dans le cadre de la mondialisation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnalesGeopolitiquePage;
