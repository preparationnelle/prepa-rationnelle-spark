import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, Quote, AlertTriangle, Lightbulb } from 'lucide-react';

const ContinentAfricainPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Continent Africain</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">L'Afrique et la mondialisation</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Entre dépendance et émancipation : enjeux géopolitiques et perspectives d'avenir
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-blue-700 border-blue-200">
              États et territoires africains
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-200">
              Cultures et sociétés
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-200">
              Développement et enjeux
            </Badge>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Introduction */}
          <Card className="border border-gray-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="accroches">
                  <AccordionTrigger className="text-lg font-semibold">1. Accroches rédigées</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Accroche historique</h4>
                        <p className="text-gray-700">
                          The Economist titrait en 2013 "The New Scramble for Africa", faisant écho au partage colonial du continent à la fin du XIXᵉ siècle. Cette nouvelle ruée vers l'Afrique traduit une reconfiguration des influences internationales, où les anciennes puissances coloniales doivent composer avec des acteurs émergents comme la Chine, la Russie ou la Turquie.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Accroche géopolitique</h4>
                        <p className="text-gray-700">
                          Lors du Forum Russie-Afrique de Sotchi en 2019, Vladimir Poutine déclarait : "La Russie et l'Afrique sont liées par des liens traditionnellement amicaux. Notre pays a constamment soutenu les mouvements de libération nationale des peuples d'Afrique". Cet exemple illustre le regain d'intérêt des puissances étrangères pour le continent, devenu un enjeu stratégique majeur dans un monde multipolaire.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Accroche économique</h4>
                        <div className="flex items-start gap-3">
                          <Quote className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 italic">
                            "L'Afrique est un continent riche, mais peuplé de pauvres", constatait l'ancien Premier ministre togolais Kodjo. Cette contradiction résume bien le paradoxe africain : un continent aux ressources abondantes, mais où le développement économique reste limité par des dépendances structurelles et une faible intégration régionale.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Accroche démographique</h4>
                        <p className="text-gray-700">
                          Le Nigeria devrait devenir le troisième pays le plus peuplé du monde d'ici 2050, avec plus de 400 millions d'habitants. Cette explosion démographique constitue à la fois un défi et une opportunité pour l'Afrique : un dividende démographique à exploiter ou une bombe sociale en gestation ?
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="definitions">
                  <AccordionTrigger className="text-lg font-semibold">2. Définition des termes</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Afrique</h4>
                        <p className="text-gray-700">
                          Il s'agit ici principalement de l'Afrique subsaharienne, qui partage des défis communs en matière de développement, de gouvernance et d'intégration à la mondialisation. Toutefois, il est essentiel de ne pas homogénéiser le continent, qui se caractérise par une grande diversité économique, politique et culturelle.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Dépendance</h4>
                        <p className="text-gray-700">
                          Situation où un acteur (pays ou région) est fortement influencé par des forces extérieures, que ce soit sur le plan économique (matières premières, commerce), politique (ingérences, relations internationales) ou sécuritaire (interventions militaires étrangères).
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Mondialisation</h4>
                        <p className="text-gray-700">
                          Processus d'interconnexion croissante entre les économies, les cultures et les institutions politiques à l'échelle mondiale. L'Afrique y est intégrée de manière asymétrique, souvent en tant que fournisseur de ressources brutes et marché de consommation, mais sans poids réel dans la gouvernance économique globale.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Ingérence</h4>
                        <p className="text-gray-700">
                          Intervention d'une puissance étrangère dans les affaires internes d'un État, souvent perçue comme une atteinte à la souveraineté nationale. Elle peut être économique (imposition de politiques libérales via le FMI), militaire (interventions directes ou soutien à des régimes) ou diplomatique (influence sur les décisions politiques des États africains).
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Leapfrog</h4>
                        <p className="text-gray-700">
                          Concept de "saut de grenouille", où un pays contourne certaines étapes du développement classique pour adopter directement des technologies avancées. L'Afrique illustre ce phénomène dans les télécommunications (adoption massive du mobile sans passage par le téléphone fixe) ou les énergies renouvelables.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ouvrages">
                  <AccordionTrigger className="text-lg font-semibold">3. Ouvrages de référence</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-gray-800">Bertrand Badie, L'État importé (1992)</h5>
                          <p className="text-sm text-gray-600">Montre comment les structures politiques africaines ont été calquées sur des modèles occidentaux, souvent inadaptés aux réalités locales.</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-gray-800">Sylvie Brunel, L'Afrique est-elle si bien partie ? (2014)</h5>
                          <p className="text-sm text-gray-600">Analyse des inégalités de développement sur le continent, illustrées par la métaphore de la "peau de léopard".</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400/70">
                          <h5 className="font-semibold text-gray-800">Pierre Jacquemot, L'Afrique des possibles (2014)</h5>
                          <p className="text-sm text-gray-600">Réflexion sur les trajectoires possibles pour le continent, entre émergence et marginalisation.</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-blue-300">
                          <h5 className="font-semibold text-gray-800">Philippe Hugon, La Géopolitique de l'Afrique (2006)</h5>
                          <p className="text-sm text-gray-600">Propose trois scénarios d'évolution du continent (largage, rattrapage, éclatement en archipels).</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-300/80">
                          <h5 className="font-semibold text-gray-800">Pierre-Noël Giraud, La mondialisation, émergences et fragmentations (2012)</h5>
                          <p className="text-sm text-gray-600">Prédit que l'Afrique pourrait devenir une terre de délocalisation grâce à sa transition démographique.</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400/60">
                          <h5 className="font-semibold text-gray-800">Antoine Glaser, AfricaFrance (2014)</h5>
                          <p className="text-sm text-gray-600">Analyse comment les élites africaines ont progressivement inversé le rapport de dépendance avec la France.</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="citations">
                  <AccordionTrigger className="text-lg font-semibold">4. Citations clés</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"L'Afrique est un continent riche, mais peuplé de pauvres" – Edem Kodjo.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"L'État en Afrique est une greffe qui n'a pas pris" – Bertrand Badie, L'État importé (1992).</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"Les lumières de la nuit ne scintillent pas pour tout le monde en Afrique" – Émilie Aubry, Le Dessous des Cartes.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"Ce qui est bon pour la France est bon pour l'Afrique" – Jacques Foccart, architecte de la "Françafrique".</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"L'Afrique est en train de devenir un laboratoire du futur" – Pierre Jacquemot.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg italic border-l-4 border-blue-200">
                        <Quote className="h-4 w-4 text-gray-500 mb-2" />
                        <p>"L'Afrique n'a jamais été un angle mort géopolitique" – Philippe Hugon.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="paradoxes">
                  <AccordionTrigger className="text-lg font-semibold">5. Les paradoxes de l'Afrique</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">1. Richesse naturelle vs pauvreté humaine</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> L'Afrique possède 40 % des réserves mondiales de métaux rares, 60 % des terres arables non exploitées, et de vastes ressources énergétiques (pétrole, gaz, uranium). Pourtant, elle reste le continent le plus pauvre et le moins industrialisé.</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Ces richesses, au lieu d'être un moteur de développement, deviennent une source de dépendance et de conflits (économie de rente, corruption, exploitation étrangère).</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> Comment transformer ces atouts en véritable levier de croissance et non en facteur de stagnation ?</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">2. Croissance démographique vs sous-développement économique</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> L'Afrique connaît une explosion démographique (âge médian de 23 ans, taux de fécondité record au Niger : 7,4 enfants par femme), et devrait représenter 40 % de la population mondiale d'ici 2100. Pourtant, le marché du travail ne suit pas et les infrastructures sont insuffisantes pour absorber cette jeunesse.</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Une main-d'œuvre abondante, mais sans qualification ni débouchés → chômage massif, migrations, instabilité sociale.</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> La démographie africaine sera-t-elle un atout pour le développement ou une bombe sociale ?</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">3. Mégapoles globalisées vs enclavement rural</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> Des villes comme Johannesburg, Lagos, Nairobi, Le Caire sont pleinement intégrées à la mondialisation, accueillant des sièges de multinationales et des hubs financiers. Mais 63 % des Subsahariens vivent encore en milieu rural, sans accès aux services essentiels (eau, électricité, éducation).</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Une urbanisation rapide, mais sans développement structuré → bidonvilles, précarité, congestion urbaine (ex. Kibera à Nairobi, plus grand bidonville d'Afrique de l'Est).</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> L'urbanisation africaine peut-elle être un facteur de croissance ou aggravera-t-elle les inégalités internes ?</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">4. Dépendance extérieure vs volonté d'autonomie</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> L'Afrique revendique une émancipation des puissances occidentales, dénonçant le néocolonialisme et cherchant à diversifier ses partenaires (Chine, Russie, Turquie). Mais elle reste dépendante des aides internationales, des investissements étrangers et des cours des matières premières.</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Un discours d'indépendance politique et économique, mais des choix stratégiques qui renforcent la dépendance (endettement massif envers la Chine, contrats léonins sur les ressources naturelles).</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> L'Afrique peut-elle réellement s'émanciper des influences extérieures ou est-elle condamnée à une dépendance renouvelée sous d'autres formes ?</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">5. Leapfrog technologique vs fracture numérique</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> L'Afrique a sauté certaines étapes du développement classique (ex. adoption massive du mobile sans téléphone fixe, services bancaires via M-Pesa au Kenya). Mais elle reste le continent le moins électrifié, avec une fracture numérique profonde entre les zones urbaines et rurales.</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Un progrès technologique rapide, mais incapable de compenser les inégalités structurelles → innovation sans infrastructure.</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> Le leapfrog peut-il être une solution viable pour le développement de l'Afrique ou restera-t-il un phénomène limité aux élites et aux grandes villes ?</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">6. L'intervention étrangère : stabilisation ou chaos ?</h4>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Constat :</strong> Les interventions étrangères sont souvent perçues comme facteurs de déstabilisation, comme en Libye (2011) où la chute de Kadhafi a plongé le pays et le Sahel dans l'instabilité. À l'inverse, l'absence d'intervention en Centrafrique a laissé place à une guerre civile incontrôlée.</p>
                        <p className="text-gray-700 mb-2"><strong>Paradoxe :</strong> Intervenir ou ne pas intervenir, dans les deux cas, la région plonge dans le chaos.</p>
                        <p className="text-gray-700"><strong>Problématique :</strong> L'Afrique est-elle intrinsèquement instable, indépendamment des ingérences extérieures ?</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="problematiques">
                  <AccordionTrigger className="text-lg font-semibold">6. Problématiques et enjeux principaux</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-blue-900 mb-3">Problématiques</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>L'Afrique peut-elle s'émanciper de sa dépendance aux puissances extérieures pour devenir un acteur stratégique autonome ?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Comment surmonter les défis structurels (économie extractive, gouvernance, instabilité) pour enclencher un développement durable ?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Le "leapfrog" technologique et énergétique peut-il permettre à l'Afrique de contourner certains obstacles classiques du développement ?</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-blue-900 mb-3">Enjeux</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded border-l-4 border-blue-300/80">
                              <h5 className="font-semibold text-gray-800">Géopolitique</h5>
                              <p className="text-sm text-gray-600">Reconfiguration des alliances, influence croissante des puissances émergentes (Chine, Russie, Turquie).</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                              <h5 className="font-semibold text-gray-800">Économique</h5>
                              <p className="text-sm text-gray-600">Diversification indispensable pour sortir du modèle extractif et créer de la valeur ajoutée locale.</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded border-l-4 border-blue-300/80">
                              <h5 className="font-semibold text-gray-800">Démographique et social</h5>
                              <p className="text-sm text-gray-600">Explosion démographique à maîtriser, nécessité de créer des millions d'emplois par an.</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-blue-300/80">
                              <h5 className="font-semibold text-gray-800">Environnemental</h5>
                              <p className="text-sm text-gray-600">L'Afrique sera l'un des continents les plus touchés par le réchauffement climatique.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="plan">
                  <AccordionTrigger className="text-lg font-semibold">7. Plan de la dissertation</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <p className="text-gray-700 mb-4">
                        Cette dissertation s'articulera autour de trois axes majeurs pour analyser la position complexe de l'Afrique dans la mondialisation contemporaine, entre héritages historiques, défis structurels et perspectives d'avenir.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Partie I */}
          <Card className="border border-gray-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                I. L'Afrique, un espace marqué par des ingérences historiques et contemporaines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="i1">
                  <AccordionTrigger className="text-lg">
                    I.1. Un continent convoité depuis des siècles
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction contextuelle */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-2">Historique qui retrace les 3 mondialisations</h4>
                        <p className="text-gray-700 text-sm">
                          Dans son ouvrage <em>Atlas de la mondialisation</em>, Laurent Carroué identifie trois phases majeures de la mondialisation qui ont toutes intégré l'Afrique de manière asymétrique dans les dynamiques mondiales.
                        </p>
                      </div>

                      {/* Contenu développé - Les trois phases détaillées */}
                      <div className="space-y-4">
                        
                        {/* A. Première mondialisation */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                            La traite négrière et les grandes découvertes
                          </h4>
                          
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>• Vasco de Gama (1498) :</strong> Route maritime vers les Indes → commerce européen renforcé</p>
                            <p><strong>• Traite négrière (XVe-XIXe) :</strong> 12+ millions d'esclaves déportés → économie de plantation</p>
                            <p><strong>• Commerce triangulaire :</strong> Afrique (esclaves) ↔ Europe (manufacturés) ↔ Amériques (matières premières)</p>
                            <p><strong>• Conséquences :</strong> Désorganisation sociétale, effondrement démographique</p>
                            <div className="bg-blue-50 p-3 rounded">
                              <strong>Exemple :</strong> Gorée (Sénégal) - Port majeur de la traite, rôle des élites africaines collaboratrices
                            </div>
                          </div>
                        </div>

                        {/* B. Deuxième mondialisation */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                            Les empires coloniaux et la révolution industrielle
                          </h4>
                          
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>• Berlin (1885) :</strong> Partage colonial sans concertation africaine</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-blue-50 p-3 rounded">
                                <strong>🇬🇧 "Cap au Caire"</strong> (Cecil Rhodes) - Axe oriental britannique
                              </div>
                              <div className="bg-slate-50 p-3 rounded">
                                <strong>🇫🇷 "Dakar-Djibouti"</strong> - Axe ouest-est français
                              </div>
                            </div>
                            <p><strong>• Modèle centre-périphérie :</strong> Infrastructures pour exportation, pas d'industrie locale</p>
                            <div className="bg-blue-50 p-3 rounded">
                              <strong>Fachoda (1898) :</strong> Crise France-UK au Soudan → rivalités stratégiques
                            </div>
                            <div className="bg-slate-50 p-3 rounded border-l-4 border-red-400">
                              <strong>Génocide Herrero-Nama (1904-1908) :</strong> Namibie allemande, 1er génocide du XXe siècle
                            </div>
                            <div className="bg-teal-50 p-3 rounded">
                              <strong>Débat :</strong> Paul Bairoch (coût élevé) vs Jules Ferry (débouchés coloniaux)
                            </div>
                          </div>
                        </div>

                        {/* C. Guerre froide */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                            La guerre froide : rivalités entre blocs
                          </h4>
                          
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>• Décolonisation (1960s) :</strong> Afrique = champ de bataille USA-URSS</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-red-100 p-3 rounded border border-red-300">
                                <strong>🚩 URSS :</strong> Mouvements marxistes, troupes cubaines, armements
                              </div>
                              <div className="bg-blue-100 p-3 rounded border border-blue-300">
                                <strong>🇺🇸 USA :</strong> Régimes anticommunistes, guérillas, gouvernements alliés
                              </div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded">
                              <strong>Angola (1975-2002) :</strong> MPLA vs UNITA → 50k Cubains → Guerre par procuration
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <strong>• Portugal (1974) :</strong> Chute Salazar → guerres Angola, Mozambique, Guinée-Bissau
                            </div>
                            <p><strong>• Héritage :</strong> Conflits post-1991, dépendance militaire, nouvelles ingérences (Russie-Wagner, Chine)</p>
                          </div>
                        </div>

                        {/* Transition */}
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-blue-800 mb-2">Transition vers la mondialisation contemporaine</h4>
                          <p className="text-gray-700 text-sm">
                            Après la guerre froide, l'Afrique reste stratégique : nouveaux acteurs émergents (Chine, Russie, Turquie, Inde), lutte pour les ressources, reconfiguration économique mondiale.
                          </p>
                        </div>

                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="i2">
                  <AccordionTrigger className="text-lg">
                    I.2. Le "New Scramble for Africa" : une reconfiguration des influences
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                        <h4 className="font-semibold text-orange-800 mb-2">Recomposition des influences et ingérences étrangères</h4>
                        <p className="text-gray-700 text-sm">
                          <em>The Economist</em> (2013) : "New Scramble for Africa" → nouvelle compétition internationale pour les ressources et marchés africains.
                        </p>
                      </div>

                      {/* A. Territoire stratégique */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          L'Afrique, territoire stratégique convoité
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded italic">
                            "Un continent riche, peuplé de pauvres" – Edem Kodjo
                          </div>
                          <p><strong>• Transition acteurs :</strong> Guerre froide (USA-URSS) → Post-1991 (Chine, Russie, Turquie, Inde)</p>
                          <div className="grid md:grid-cols-3 gap-2">
                            <div className="bg-slate-50 p-2 rounded text-center">
                              <strong>5%</strong> pétrole mondial
                            </div>
                            <div className="bg-slate-50 p-2 rounded text-center">
                              <strong>40%</strong> terres arables
                            </div>
                            <div className="bg-slate-50 p-2 rounded text-center">
                              Coltan, lithium, uranium
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* B. L'Occident */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          L'Occident : héritages et remise en question
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>🇺🇸 USA - AGOA (2000) :</strong> 39 États, accès marchés US → exports textiles/agricoles, expire 2025
                          </div>
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🇫🇷 France - Françafrique :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Réseaux Foccart (1960-1990) → influence clandestine</li>
                              <li>• Retrait Mali (2022), Burkina (2023) → fin Barkhane</li>
                              <li>• Thomas Sankara → anti-impérialisme, Verschave → critique</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* C. Puissances révisionnistes */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Puissances révisionnistes : Russie et Chine
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🇷🇺 Russie :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Wagner + "sharp power" (désinformation anti-occidentale)</li>
                              <li>• Mali : retrait France (2022) → substitution Wagner</li>
                              <li>• Forum Sotchi (2019), levier céréalier Ukraine</li>
                            </ul>
                          </div>
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🇨🇳 Chine :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Investissements massifs depuis 2000 → infrastructures, mines</li>
                              <li>• Angola : 3,5% dette nationale, Liberia : 40% terres arables</li>
                              <li>• 30+ Instituts Confucius, échanges ×18 depuis 2000</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Bilan</h4>
                        <p className="text-gray-700 text-sm">
                          Confrontation anciens acteurs occidentaux vs nouvelles puissances. Recul France-USA face à Chine-Russie. 
                          Défi africain : sortir des logiques de dépendance et renforcer l'autonomie stratégique.
                        </p>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="i3">
                  <AccordionTrigger className="text-lg">
                    I.3. Ingérences et coopération : entre dépendance et opportunité
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Au-delà des ingérences : coopération et opportunités pour l'Afrique</h4>
                        <p className="text-gray-700 text-sm">
                          L'Afrique n'est pas qu'une victime passive des ingérences : elle bénéficie aussi de coopérations essentielles et apprend à tirer parti des rivalités entre puissances.
                        </p>
                      </div>

                      {/* A. Domaine médical */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          Apport essentiel dans le domaine médical
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>🇮🇳 Médicaments génériques et l'Inde :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• 2003 : Contournement brevets pharmaceutiques → baisse drastique coût traitements</li>
                              <li>• VIH/SIDA, tuberculose, paludisme → accessibilité accrue</li>
                              <li>• Cipla, Ranbaxy → 80% traitements VIH africains viennent d'Inde</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>COVID-19 et programme COVAX :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• 2020 : OMS, Gavi, CEPI, UNICEF → accès équitable vaccins</li>
                              <li>• BioNTech : laboratoires Rwanda, Sénégal → production locale</li>
                              <li>• Limites : retards distribution, répartition inégale, hésitation vaccinale</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* B. Coopération économique */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          Coopération économique : dette et développement
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>NEPAD et initiatives G8 :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• 2005 Gleneagles : Annulation dette 14 pays africains (PPTE)</li>
                              <li>• FMI/Banque Mondiale (1996) → allègement sous conditions</li>
                              <li>• Résultats : réduction poids dette, mais dépendance aide persistante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-slate-50 p-3 rounded border-l-4 border-slate-400">
                            <strong>Malédiction des matières premières :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Paradoxe richesse : forte croissance mais dépendance exports</li>
                              <li>• Angola, Gabon, Nigeria → croissance en dents de scie (pétrole)</li>
                              <li>• Vulnérabilité fluctuations prix mondiaux</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* C. Assistance militaire */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Assistance militaire : stabilisation et lutte antiterroriste
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Opérations extérieures :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Mali : Serval (2013) → Barkhane (2014-2022)</li>
                              <li>• Coalitions : ONU (MINUSMA), USA (AFRICOM)</li>
                              <li>• Résultats mitigés : gains territoriaux mais instabilité persistante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>Inversion rapports de force :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Antoine Glaser (2014) : "dirigeants africains maîtres du jeu"</li>
                              <li>• Multiplication partenaires : Chine, Turquie, Inde vs Occident</li>
                              <li>• Nigeria : navigue USA-Chine-Russie, joue la concurrence</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Transition vers partie II */}
                      <div className="bg-white p-5 rounded-lg border-l-4 border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-3">Transition vers la deuxième partie</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>• Bilan du I :</strong> L'Afrique au centre des relations internationales, à la fois cible d'ingérences et bénéficiaire de coopération essentielle</p>
                          <p><strong>• Évolution récente :</strong> Les dirigeants africains ont désormais plus d'options et savent tirer parti des rivalités entre puissances pour maximiser leurs intérêts</p>
                          <p><strong>• Vers la partie II :</strong> Malgré ces opportunités, l'Afrique reste confrontée à des défis structurels profonds qui entravent son développement autonome</p>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Partie II */}
          <Card className="border border-gray-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
                II. L'Afrique face à ses propres défis : une vulnérabilité structurelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ii1">
                  <AccordionTrigger className="text-lg">
                    II.1. Un continent pris dans un enchevêtrement de crises
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">L'Afrique, un continent sous multiples dépendances</h4>
                        <p className="text-gray-700 text-sm">
                          Malgré ses richesses, l'Afrique reste structurellement dépendante des fluctuations économiques mondiales et des tensions géopolitiques, héritant d'un modèle extractif colonial.
                        </p>
                      </div>

                      {/* A. Dépendance aux matières premières */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          Dépendance structurelle aux matières premières
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Modèle économique extractif hérité :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Dépendance exports matières premières → absence industrialisation locale</li>
                              <li>• Supercycle MP : croissance africaine corrélée prix mondiaux</li>
                              <li>• Chute cours = crises économiques automatiques</li>
                            </ul>
                            <div className="bg-blue-50 p-2 rounded mt-2">
                              <strong>Exemple :</strong> Zambie → 50% exports liées au cuivre, vulnérabilité demande chinoise
                            </div>
                          </div>
                          
                          <div className="bg-slate-50 p-3 rounded border-l-4 border-red-400">
                            <strong>Rente fragile et endettement croissant :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Crises 1970-1990 : chute cours → surendettement États africains</li>
                              <li>• Post-Guerre froide : retrait soutiens financiers → décennie perdue</li>
                              <li>• 24 pays plans ajustement structurel FMI → affaiblissement étatique</li>
                              <li>• Joseph Stiglitz : critique du modèle libéral</li>
                            </ul>
                          </div>

                          <div className="bg-gray-50 p-3 rounded">
                            <strong>Faible poids institutions internationales :</strong>
                            <p className="mt-1">Incapacité bloquer démantèlement accords Lomé (1975) → OMC 2000</p>
                          </div>
                        </div>
                      </div>

                      {/* B. Dépendance alimentaire */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          Dépendance alimentaire aggravée par les crises mondiales
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🌾 L'Afrique importe plus qu'elle ne produit :</strong>
                            <div className="grid md:grid-cols-2 gap-3 mt-2">
                              <div className="bg-white p-2 rounded text-center border border-yellow-200">
                                <strong className="text-yellow-700">80%</strong><br/>
                                <span className="text-gray-600">Imports blé Russie-Ukraine</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-yellow-200">
                                <strong className="text-yellow-700">63,4%</strong><br/>
                                <span className="text-gray-600">Blé importé prévu 2025</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-red-100 p-3 rounded border border-red-300">
                            <strong>Impact guerre Ukraine :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Hausse prix denrées alimentaires + carburants → inflation, instabilité</li>
                              <li>• Pays touchés : Égypte, Algérie, Nigeria, Soudan, Afrique du Sud</li>
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🌺 Paradoxe horticulture :</strong>
                            <div className="mt-1">
                              <p>Kenya-Éthiopie : 600k emplois fleurs coupées → export Europe</p>
                              <p className="text-red-600 font-medium">Aucun impact sécurité alimentaire locale</p>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Dépendance intrants :</strong>
                            <p className="mt-1">Engrais, pesticides importés → choc prix COVID-19 + Ukraine</p>
                          </div>
                        </div>
                      </div>

                      {/* C. Dépendance cycles économiques */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Dépendance aux cycles économiques mondiaux
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>Croissance liée cours matières premières :</strong>
                            <p className="mt-1">2014 : "L'Afrique est-elle si bien partie ?" → fin supercycle MP = réévaluation perspectives</p>
                          </div>
                          
                          <div className="border-l-4 border-slate-400 bg-slate-50 p-3">
                            <h6 className="font-semibold text-orange-800 mb-2">Exemple : Crise carburant Nigeria</h6>
                            <ul className="space-y-1">
                              <li>• 6ᵉ producteur mondial pétrole, mais dépendant imports raffinés</li>
                              <li>• 2022 : pénurie généralisée → files attente, hausse coûts transports</li>
                              <li>• Espoir : raffinerie Dangote (18 md$), production 2023</li>
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-3 rounded border border-red-300">
                            <strong>Impact COVID + guerre Ukraine :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Inflation record denrées alimentaires + hydrocarbures</li>
                              <li>• Sahel + Corne Afrique : régions plus vulnérables</li>
                              <li>• Insécurité alimentaire amplifiée conflits + sécheresses</li>
                              <li>• Chocs aggravés faiblesse infrastructures logistiques</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-red-50 to-purple-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-semibold text-red-800 mb-2">Conclusion</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>• Constat :</strong> L'Afrique reste tributaire des fluctuations économiques mondiales et tensions géopolitiques</p>
                          <p><strong>• Nécessité :</strong> Diversification économique pour limiter l'impact des crises extérieures</p>
                          <p><strong>• Perspectives :</strong> Remise en question du modèle extractif et montée des initiatives d'industrialisation locale</p>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ii2">
                  <AccordionTrigger className="text-lg">
                    II.2. Faiblesses institutionnelles et difficultés de coopération
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-2">La faiblesse des institutions et le manque de coopération en Afrique</h4>
                        <p className="text-gray-700 text-sm">
                          L'intégration régionale limitée et la marginalisation dans la gouvernance mondiale freinent l'émancipation du continent, malgré des tentatives d'organisation croissantes.
                        </p>
                      </div>

                      {/* A. Intégration régionale limitée */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          Intégration régionale limitée par des obstacles structurels
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🚫 Coopération économique entravée :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Manque complémentarité économies → spécialisation identique (exports MP)</li>
                              <li>• Empêche échanges intra-africains dynamiques</li>
                              <li>• Infrastructure tournée vers extérieur : ports/voies ferrées pour exports</li>
                              <li>• Très peu de connexions internes continentales</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded">
                            <strong>Chiffre clé - Faiblesse échanges intra-africains :</strong>
                            <div className="grid md:grid-cols-3 gap-3 mt-2">
                              <div className="bg-white p-2 rounded text-center border border-slate-200">
                                <strong className="text-red-600">14%</strong><br/>
                                <span className="text-gray-600">Exports intra-Afrique</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-blue-200">
                                <strong className="text-blue-600">60%</strong><br/>
                                <span className="text-gray-600">Exports intra-Europe</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-blue-200">
                                <strong className="text-green-600">40%</strong><br/>
                                <span className="text-gray-600">Exports intra-Asie</span>
                              </div>
                            </div>
                          </div>

                          <div className="border-l-4 border-blue-400 bg-blue-50 p-3">
                            <strong>Exemple :</strong> Corridor de Maputo → développement logistique Mozambique-Afrique du Sud-Zimbabwe, mais encore peu de projets intégrés à grande échelle
                          </div>
                        </div>
                      </div>

                      {/* B. Marginalisation dans gouvernance mondiale */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          L'Afrique marginalisée dans la gouvernance mondiale
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-gray-50 p-3 rounded">
                            <strong>Influence politique limitée sur la scène internationale :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Exclusion grands forums mondiaux</li>
                              <li>• Absence membre permanent africain Conseil sécurité ONU</li>
                              <li>• Nigeria réclame place → revendications croissantes continent</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>🤝 "Diplomatie de la connivence" (Bertrand Badie) :</strong>
                            <p className="mt-1">L'Afrique souvent reléguée à un rôle d'allié secondaire dans les relations internationales</p>
                          </div>
                        </div>
                      </div>

                      {/* C. Tentatives d'organisation */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Tentatives d'organisation et affirmation progressive
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Vers une autonomie sécuritaire :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Union africaine (UA) et CEDEAO → gestion conflits régionaux</li>
                              <li>• Capacités militaires encore limitées</li>
                            </ul>
                            <div className="bg-blue-50 p-2 rounded mt-2">
                              <strong>Exemple :</strong> Intervention CEDEAO Gambie (2017) → forcer Yahya Jammeh à quitter le pouvoir
                            </div>
                          </div>
                          
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Dynamique de croissance change l'image :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Depuis 2000 : croissance moyenne 5%/an</li>
                              <li>• Efface partiellement problématique termes échange</li>
                              <li>• Afrique du Sud reconnue pays émergent (BRICS)</li>
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Initiatives intégration régionale :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• ZLECA (Zone libre-échange continentale, 2020)</li>
                              <li>• Objectif : réduire barrières commerciales intra-africaines</li>
                              <li>• Mais obstacles logistiques et bureaucratiques → difficulté mise en œuvre</li>
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-3 rounded border-l-4 border-red-400">
                            <strong>"État importé, modèle politique inadapté" (Bertrand Badie) :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• États africains fondés sur modèles institutionnels occidentaux</li>
                              <li>• Souvent peu adaptés aux réalités locales</li>
                              <li>• Panafricanisme et Tiers-mondisme → tentatives unité africaine indépendante</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 mb-2">Conclusion</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>• Constat :</strong> Manque de coopération intra-africaine et faiblesse institutions limitent l'intégration continentale</p>
                          <p><strong>• En construction :</strong> UA, ZLECA témoignent d'une volonté d'émancipation progressive</p>
                          <p><strong>• Paradoxe persistant :</strong> L'Afrique revendique un rôle plus important dans la gouvernance mondiale, mais reste dépendante des influences extérieures et structures coloniales héritées</p>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ii3">
                  <AccordionTrigger className="text-lg">
                    II.3. Les facteurs explicatifs du retard africain
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-800 mb-2">Les facteurs explicatifs des crises et du sous-développement en Afrique</h4>
                        <p className="text-gray-700 text-sm">
                          L'Afrique fait face à une polycrise résultant de facteurs internes et externes interdépendants, hérités du colonialisme et aggravés par des institutions inadaptées.
                        </p>
                      </div>

                      {/* A. Polycrise */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          Une polycrise : facteurs internes et externes
                        </h4>
                        
                        <div className="space-y-4 text-sm text-gray-700">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                              <strong>Facteurs endogènes (internes) :</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• Fragmentation ethnique</li>
                                <li>• Faiblesse institutionnelle</li>
                                <li>• Crise de gouvernance</li>
                                <li>• Enclavement économique</li>
                                <li>• Instabilité politique</li>
                              </ul>
                            </div>
                            <div className="bg-blue-50 p-3 rounded border border-blue-200">
                              <strong>Facteurs exogènes (externes) :</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• Mondialisation inégalitaire</li>
                                <li>• Extraction ressources par acteurs étrangers</li>
                                <li>• Concurrence déloyale marchés mondiaux</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded">
                            <strong>Typologie des crises en Afrique :</strong>
                            <div className="grid md:grid-cols-2 gap-2 mt-2">
                              <div className="space-y-1">
                                <div className="bg-brown-100 p-2 rounded"><strong>Écologique :</strong> désertification, déforestation, eau</div>
                                <div className="bg-orange-100 p-2 rounded"><strong>Économique :</strong> dépendance exports, vulnérabilité cours MP</div>
                                <div className="bg-yellow-100 p-2 rounded"><strong>Énergétique :</strong> sous-électrification, pas d'autonomie</div>
                              </div>
                              <div className="space-y-1">
                                <div className="bg-green-100 p-2 rounded">🌾 <strong>Alimentaire :</strong> insécurité, dépendance imports agricoles</div>
                                <div className="bg-red-100 p-2 rounded">🚨 <strong>Sécuritaire :</strong> conflits internes, terrorisme (Sahel)</div>
                                <div className="bg-purple-100 p-2 rounded"><strong>Institutionnelle :</strong> États fragiles, corruption</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* B. Structure économique héritée */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-orange-700 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          Structure économique héritée du colonialisme
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🔗 Économie tournée vers l'extérieur :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Pacte colonial : infrastructures pour exports MP vers Europe</li>
                              <li>• Peu de connexions intra-africaines</li>
                              <li>• 14% exports intra-continentales vs 60% Europe</li>
                            </ul>
                            <div className="bg-blue-50 p-2 rounded mt-2">
                              <strong>Exemple :</strong> Nigeria géant pétrolier mais importateur carburant → crise raffinage
                            </div>
                          </div>
                          
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>🏭 Industrie faible et secteur informel dominant :</strong>
                            <div className="grid md:grid-cols-3 gap-2 mt-2">
                              <div className="bg-white p-2 rounded text-center border border-yellow-200">
                                <strong>Primaire</strong><br/>
                                <span className="text-xs">Surdominant<br/>Agriculture rente + mines</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-yellow-200">
                                <strong>Secondaire</strong><br/>
                                <span className="text-xs">Limité<br/>Pas d'industrialisation</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-yellow-200">
                                <strong>Tertiaire</strong><br/>
                                <span className="text-xs">Informel dominant<br/>Précarité emplois</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3 rounded border-l-4 border-red-400">
                            <strong>Mal hollandais :</strong> Impact négatif exports MP sur diversification économique
                          </div>

                          <div className="bg-blue-50 p-3 rounded">
                            <strong>🧠 Fuite des cerveaux :</strong>
                            <p className="mt-1">Exode massif élites vers Europe/Amérique Nord → impact formation locale et développement compétences</p>
                          </div>
                        </div>
                      </div>

                      {/* C. Institutions faibles */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Institutions faibles et gouvernance inadaptée
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400">
                            <strong>"État importé" (Bertrand Badie) :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Modèles administratifs/politiques calqués sur Occident</li>
                              <li>• Inadaptés aux sociétés africaines</li>
                              <li>• États-nations artificiels : autorité centrale vs pouvoirs locaux</li>
                              <li>• Difficultés face aux chefferies, groupes communautaires</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>🤝 Manque coopération régionale :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• ZLECA (2020) : projet ambitieux mais confronté aux réalités</li>
                              <li>• UA et CEDEAO développent capacités, mais restent limitées</li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 bg-slate-50 p-3">
                            <h6 className="font-semibold text-green-800 mb-2">Exemple de résilience : Liberia</h6>
                            <div className="space-y-1">
                              <p><strong>• Guerres civiles (1989-2003) :</strong> Centaines milliers morts, pays ravagé</p>
                              <p><strong>• Retour paix (2003-2018) :</strong> Ellen Johnson Sirleaf (Nobel paix)</p>
                              <p><strong>• Alternance démocratique :</strong> George Weah (2018)</p>
                              <p><strong>• Cas d'exception :</strong> Reconstruction possible malgré passif conflictuel</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion et perspectives */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-800 mb-3">Conclusion et perspectives</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>• Constat :</strong> L'Afrique confrontée à des crises multiples et interdépendantes (politiques, économiques, écologiques, sécuritaires)</p>
                          <p><strong>• Héritage :</strong> Modèle économique et institutionnel colonial freine développement et favorise dépendance extérieure</p>
                          <p><strong>• Émergence :</strong> Initiatives coopération et gouvernance émergent, mais restent limitées face aux défis</p>
                          <p><strong>• Perspectives avenir :</strong> Renforcer infrastructures intra-africaines, diversifier économies, encourager innovations locales, redéfinir gouvernance selon modèles adaptés aux réalités africaines</p>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Partie III */}
          <Card className="border border-gray-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                III. Perspectives : quel avenir pour l'Afrique ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="iii1">
                  <AccordionTrigger className="text-lg">
                    III.1. Une Afrique plurielle et inégalement intégrée à la mondialisation
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Introduction */}
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Une Afrique plurielle : diversité, inégalités et intégration différenciée</h4>
                        <p className="text-gray-700 text-sm">
                          Refuser une vision homogène de l'Afrique : le continent se caractérise par une diversité géographique, culturelle et socio-économique remarquable, avec une intégration inégale à la mondialisation.
                        </p>
                      </div>

                      {/* A. Afrique fragmentée */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
                          Une Afrique fragmentée : intégration différenciée à la mondialisation
                        </h4>
                        
                        <div className="space-y-4 text-sm text-gray-700">
                          <div className="bg-white p-3 rounded border border-blue-200">
                            <strong>Sylvie Brunel, "L'Afrique est-elle si bien partie ?" (2014) :</strong>
                            <p className="mt-1">Métaphore de la "peau de léopard" → développement en taches, inégalement réparti</p>
                            <p className="mt-1">Inégalités territoriales : grandes villes globalisées vs espaces ruraux marginalisés</p>
                          </div>

                          <div className="bg-white p-3 rounded border border-gray-200">
                            <strong>Pôles urbains dynamiques, interfaces avec le monde :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Concentration infrastructures, services, réseaux numériques/financiers</li>
                              <li>• 63% Subsahariens ruraux, mais plus de 50% citadins vivent en bidonvilles</li>
                            </ul>
                            <div className="bg-blue-50 p-2 rounded mt-2 border border-blue-200">
                              <strong>Exemple :</strong> Johannesburg → 1ère bourse financière Afrique, ville connectée flux mondiaux
                            </div>
                          </div>

                          <div className="border border-blue-200 bg-white p-3">
                            <h6 className="font-semibold text-slate-800 mb-2">Étude de cas : Nairobi et Kibera</h6>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-2 rounded border border-blue-200">
                                <strong className="text-blue-700">Nairobi</strong><br/>
                                <span className="text-xs">Capitale économique Kenya<br/>Hub technologique + centre financier</span>
                              </div>
                              <div className="bg-white p-2 rounded border border-slate-200">
                                <strong className="text-slate-700">Kibera</strong><br/>
                                <span className="text-xs">255 ha, +1M habitants<br/>Espérance vie : 35 ans vs 54 Kenya</span>
                              </div>
                            </div>
                            <p className="text-xs mt-2 text-gray-600">Plus grand bidonville Afrique Est → pauvreté extrême, absence services de base</p>
                          </div>

                          <div className="bg-white p-3 rounded border border-gray-200">
                            <strong>Autres études de cas urbaines :</strong>
                            <div className="grid md:grid-cols-3 gap-2 mt-2">
                              <div className="bg-white p-2 rounded text-center border border-gray-200">
                                <strong>Lagos</strong><br/>
                                <span className="text-xs">+20M habitants<br/>Explosion démographique</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-gray-200">
                                <strong>Le Caire</strong><br/>
                                <span className="text-xs">Exode rural massif<br/>Développement anarchique</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-gray-200">
                                <strong>Cape Town</strong><br/>
                                <span className="text-xs">Inégalités post-apartheid<br/>Fracture socio-spatiale</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Espaces marginalisés :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Zones conflit paralysées économiquement</li>
                              <li>• Niger : AREVA vs problèmes sécurité uranium → impact insécurité sur investissement</li>
                              <li>• Diaspora : transferts de fonds essentiels, mais conditions précaires migrants</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* B. Diversité culturelle */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
                          Une diversité culturelle et linguistique exceptionnelle
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-3 rounded">
                            <strong>L'Afrique, continent de la diversité linguistique :</strong>
                            <div className="grid md:grid-cols-3 gap-3 mt-2">
                              <div className="bg-white p-2 rounded text-center border border-purple-200">
                                <strong className="text-blue-700">2000+</strong><br/>
                                <span className="text-xs">Langues parlées</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-blue-200">
                                <strong className="text-blue-700">70M</strong><br/>
                                <span className="text-xs">Locuteurs Swahili</span>
                              </div>
                              <div className="bg-white p-2 rounded text-center border border-blue-200">
                                <strong className="text-blue-700">150M+</strong><br/>
                                <span className="text-xs">Arabophones</span>
                              </div>
                            </div>
                            <p className="mt-2 text-xs">Du Mbugu (Tanzanie, quelques centaines) au Swahili (Afrique de l'Est)</p>
                          </div>

                          <div className="border-l-4 border-green-400 bg-slate-50 p-3">
                            <h6 className="font-semibold text-green-800 mb-2">Étude de cas : Nigeria, pays aux identités multiples</h6>
                            <div className="space-y-2">
                              <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-white p-2 rounded border border-orange-200">
                                  <strong>Diversité :</strong> 700 langues, 250 ethnies
                                </div>
                                <div className="bg-white p-2 rounded border border-blue-200">
                                  <strong>3 grandes langues :</strong> Haoussa (Nord), Yoruba (SO), Igbo (SE)
                                </div>
                              </div>
                              <p className="text-xs text-gray-600">Facteur de richesse, mais aussi tensions intercommunautaires → conflits religieux, Biafra (1967-1970)</p>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Culture africaine et mondialisation :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Influence grandissante musique africaine (Afrobeats, Amapiano)</li>
                              <li>• Exportation cinéma : Nollywood, 2ème industrie cinématographique mondiale</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* C. Développement en taches */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">C</span>
                          Un développement en taches : des contrastes profonds
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Écarts de développement majeurs :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Entre États : Afrique du Sud (émergent) vs Niger (PMA)</li>
                              <li>• Intra-pays : Fracture rurale/urbaine, modernité métropoles vs précarité campagnes</li>
                              <li>• Intra-urbaine : Quartiers d'affaires vs bidonvilles</li>
                            </ul>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                              <strong>Kibera (bidonville) :</strong>
                              <p className="text-xs mt-1">Quartier informel sans accès services de base, économie de subsistance</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded border border-blue-200">
                              <strong>Le Caire (urbanisation) :</strong>
                              <p className="text-xs mt-1">Capitale pays émergent, mais expansion anarchique, marginalisation populations</p>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3 rounded">
                            <strong>Enjeu panafricanisme et intégration régionale :</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• L'Afrique tente organisation politique/économique, mais divisions internes fortes</li>
                              <li>• ZLECA (2020) : libre-échange continental, mais mise en œuvre lente et inégale</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 mb-2">Conclusion</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>• Diversité :</strong> L'Afrique loin d'être un bloc homogène → diversité géographique, culturelle et économique</p>
                          <p><strong>• Inégalités :</strong> Mondialisation bénéficie surtout aux grandes villes et pôles économiques, laissant une partie du continent en marge</p>
                          <p><strong>• Défi majeur :</strong> Combler les inégalités intra-africaines et favoriser une intégration économique et politique plus inclusive</p>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="iii2">
                  <AccordionTrigger className="text-lg">
                    III.2. Démographie et migrations : une bombe à retardement ou un levier de développement ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      
                      {/* Introduction */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-2">Développement, démographie et migrations</h4>
                        <p className="text-gray-700 text-sm">Situation démographique : cause du retard ET opportunité potentielle</p>
                      </div>

                      {/* A. Développement */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold">A</span>
                          Le développement en Afrique
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Définitions :</strong> Truman (1949), Rostow → 5 stades | Badie "État importé" | Brunel → capacité organiser avenir
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Côte d'Ivoire :</strong> 1960 top 20 mondial → aujourd'hui écart x30 avec Corée Sud (matières premières vs high-tech)
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Défis :</strong> Éducation 6 ans moyenne, infrastructures eau insuffisantes, gouvernance fragile
                          </div>
                        </div>
                      </div>

                      {/* B. Démographie */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">B</span>
                          Démographie explosive
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-2 rounded">
                            <strong>Données :</strong> Population x7 depuis 1950 | Niger 7,4 enfants/femme | Âge médian 23 ans | 3% +65 ans
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Fardeau :</strong> 12M jeunes/an marché travail vs 3M emplois créés | 30% analphabétisme Somalie
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Opportunité :</strong> "Dividende démographique" si bien gérée | Pierre-Noël Giraud : plus grande population active mondiale en 20 ans
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <strong>Exemples :</strong> Éthiopie (textile), Île Maurice (sucre→tech), Nigeria (220M → 3ème pays 2050)
                          </div>
                        </div>
                      </div>

                      {/* C. Migrations */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold">C</span>
                          Migrations africaines
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Réalité :</strong> 80% migrations internes au continent | Exode rural → bidonvilles | Nairobi/Kibera
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Déstabilisation :</strong> Tensions ethniques villes saturées | États débordés | Lagos surpeuplée
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Opportunité :</strong> Transferts de fonds (10% PIB Sénégal) | Diaspora → investissements, retour compétences
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 mb-1">Conclusion</h4>
                        <p className="text-sm text-gray-700">Démographie explosive = défis + levier potentiel | Intégration économique cruciale | Migrations = réalité à gérer | Réformes majeures nécessaires</p>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="iii3">
                  <AccordionTrigger className="text-lg">
                    III.3. Scénarios prospectifs : vers quelle trajectoire l'Afrique se dirige-t-elle ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      
                      {/* Introduction */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-2">L'avenir de l'Afrique : leapfrog, résilience et scénarios</h4>
                        <p className="text-gray-700 text-sm">Tournant historique entre marginalisation et intégration accélérée</p>
                      </div>

                      {/* A. Leapfrog */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">A</span>
                          Le Leapfrog
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-2 rounded">
                            <strong>Définition :</strong> "Saut grenouille" → contourner étapes développement classique pour technologies avancées
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Télécoms réussi :</strong> 90% population mobile vs électrification incomplète | Direct GPS/mobile sans fixe
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Énergie potentiel :</strong> Hydroélectricité (Nil, Grand Inga RDC) | Solaire Sahara | Projet Sun 10x plus performant qu'Allemagne
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Défi :</strong> Continent moins électrifié mais plus innovant | "Lumières nuit scintillent pas pour tous" (É. Aubry)
                          </div>
                        </div>
                      </div>

                      {/* B. Résilience */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold">B</span>
                          Résilience climatique
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Première victime :</strong> Sécheresses Sahel, désertification, cyclones (Mozambique, Madagascar)
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Grande Muraille Verte :</strong> 2007, 15km x 8000km Sénégal→Djibouti | 2025 pôles développement durable | Macron 12 milliards € (2021)
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>Défis :</strong> Manque financement, lenteur, instabilité sécuritaire
                          </div>
                        </div>
                      </div>

                      {/* C. Scénarios */}
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">C</span>
                          Scénarios prospectifs
                        </h4>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="bg-blue-50 p-2 rounded">
                            <strong>3 scénarios Philippe Hugon (2006) :</strong>
                            <div className="grid grid-cols-3 gap-1 mt-1 text-xs">
                              <div className="bg-red-100 p-1 rounded text-center"><strong>Largage</strong><br/>Marginalisation</div>
                              <div className="bg-green-100 p-1 rounded text-center"><strong>Rattrapage</strong><br/>Intégration progressive</div>
                              <div className="bg-orange-100 p-1 rounded text-center"><strong>Archipels</strong><br/>Développement inégal</div>
                            </div>
                          </div>
                          <div className="bg-slate-50 p-2 rounded">
                            <strong>2023 - Archipels en cours :</strong>
                            <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                              <div className="bg-green-100 p-1 rounded"><strong>Dynamiques :</strong> Lagos, Nairobi, Kigali, Le Cap</div>
                              <div className="bg-red-100 p-1 rounded"><strong>Crises :</strong> Sahel, Corne Afrique, RDC</div>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-2 rounded">
                            <strong>Pierre Jacquemot (2014) :</strong> "Afrique trajectoires multiples, tout reste ouvert"
                          </div>
                        </div>
                      </div>

                      {/* Conclusion finale */}
                      <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 mb-1">L'avenir incertain</h4>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p><strong>• Tournant :</strong> Marginalisation vs intégration accélérée</p>
                          <p><strong>• Leapfrog :</strong> Prometteur mais freiné instabilité</p>
                          <p><strong>• Résilience :</strong> Cruciale face crises environnementales</p>
                          <p><strong>• Choix :</strong> Fragmentation vs émergence vs dépendance</p>
                          <div className="bg-yellow-100 p-1 rounded mt-1">
                            <strong>The Economist :</strong> Continent où "tout peut se passer"
                          </div>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-gray-600" />
                Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg text-center border border-yellow-200">
                <p className="text-gray-600 italic">
                  [Contenu en attente - Veuillez fournir la conclusion de la dissertation]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Études de cas */}
          <Card className="border border-gray-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                Études de cas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                
                {/* Étude de cas 1 : La démocratie en Afrique */}
                <AccordionItem value="democratie-afrique">
                  <AccordionTrigger className="text-lg font-semibold text-blue-900">
                    La démocratie en Afrique : progrès et défis
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* 1. Instabilité politique vs alternances démocratiques */}
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          1. Instabilité politique vs alternances démocratiques
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-800 font-semibold">Données alarmantes (1960-2005) :</p>
                            <ul className="mt-2 text-gray-700 space-y-1">
                              <li><strong>107 chefs d'État africains</strong> renversés par des coups d'État</li>
                              <li>Seulement <strong>19 alternances démocratiques</strong> observées</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-800 font-semibold">Évolution récente (depuis 2000) :</p>
                            <p className="mt-2 text-gray-700">
                              Une dynamique démocratique s'amorce dans certaines régions, mais reste fragile et inégale selon les pays.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. L'indice Mo Ibrahim */}
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          2. L'indice Mo Ibrahim : un baromètre de la gouvernance en Afrique
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <p className="text-gray-800 font-semibold mb-2">Créé en 2007, évalue 4 composantes :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Sécurité et État de droit</li>
                              <li>• Participation électorale et respect des droits humains</li>
                              <li>• Développement économique durable</li>
                              <li>• Développement humain</li>
                            </ul>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <p className="text-green-800 font-semibold mb-2">5 pays les plus démocratiques :</p>
                              <ol className="text-gray-700 space-y-1">
                                <li>1. Île Maurice</li>
                                <li>2. Seychelles</li>
                                <li>3. Botswana</li>
                                <li>4. Namibie</li>
                                <li>5. Cap-Vert</li>
                              </ol>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <p className="text-red-800 font-semibold mb-2">5 pays les moins démocratiques :</p>
                              <ol className="text-gray-700 space-y-1">
                                <li>1. Somalie</li>
                                <li>2. Soudan du Sud</li>
                                <li>3. Érythrée</li>
                                <li>4. République Centrafricaine</li>
                                <li>5. Soudan</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. Ingérences extérieures : Burundi */}
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          3. Démocratie et ingérences extérieures : le consensus de Washington vs le modèle chinois
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-800 font-semibold">Cas du Burundi (2015-présent)</p>
                            <p className="mt-2 text-gray-700">
                              Opposition entre vision occidentale et modèle autoritaire.
                            </p>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <p className="text-gray-800 font-semibold mb-2">Chronologie de la crise :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>Pierre Nkurunziza</strong> : élu en 2005, 2010 et 2015</li>
                              <li><strong>2015</strong> : contestation de son troisième mandat → tentative de coup d'État</li>
                              <li><strong>Réactions internationales :</strong>
                                <ul className="ml-4 mt-1 space-y-1">
                                  <li>→ Obama demande la suspension du Burundi de l'AGOA</li>
                                  <li>→ L'ONU renvoyée du pays en 2018</li>
                                  <li>→ La CPI ouvre une enquête (crimes contre l'humanité)</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <p className="text-red-800 font-semibold">Conséquences dramatiques :</p>
                            <ul className="mt-2 text-gray-700 space-y-1">
                              <li>• <strong>500 000 Burundais</strong> fuient le pays depuis 2015</li>
                              <li>• Effondrement économique et crise politique</li>
                              <li>• Meurtres, tortures, camps de détention pour opposants</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 4. Cas du Libéria */}
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          4. Cas du Libéria : un exemple de résilience démocratique
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-gray-800 font-semibold">Passé tragique :</p>
                            <ul className="mt-2 text-gray-700 space-y-1">
                              <li>• <strong>Deux guerres civiles</strong> (1989-1997 et 1999-2003)</li>
                              <li>• Plusieurs centaines de milliers de morts</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-gray-800 font-semibold mb-2">Renaissance démocratique :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>2003</strong> : fin du conflit</li>
                              <li><strong>Ellen Johnson Sirleaf</strong> : première femme africaine présidente, prix Nobel de la paix (2011)</li>
                              <li><strong>2017</strong> : Premières élections entièrement organisées par le Libéria</li>
                              <li><strong>Alternance démocratique</strong> avec l'élection de George Weah</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4">Conclusion</h4>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            La démocratie progresse en Afrique, mais de manière <strong>inégale</strong> selon les pays et les régions.
                          </p>
                          <p>
                            Si certains États consolident leurs institutions démocratiques <em>(Botswana, Île Maurice, Cap-Vert)</em>, 
                            d'autres s'enfoncent dans l'autoritarisme et l'instabilité <em>(Burundi, Soudan, Érythrée)</em>.
                          </p>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mt-4">
                            <p className="font-semibold text-purple-800">Question prospective :</p>
                            <p className="text-gray-700 italic">
                              L'opposition entre modèle occidental et influence chinoise pose la question de l'avenir de la démocratie en Afrique : 
                              la trajectoire suivie sera-t-elle celle du renforcement des institutions ou celle d'un modèle hybride 
                              alliant autoritarisme et développement économique ?
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Étude de cas 2 : La malédiction des matières premières */}
                <AccordionItem value="malediction-matieres-premieres">
                  <AccordionTrigger className="text-lg font-semibold text-purple-800">
                    La malédiction des matières premières et la guerre économique en Afrique
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Utilisation en copie */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-blue-800 font-semibold mb-2">Utilisation de l'étude de cas dans une copie</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• <strong>Expliquer</strong> le concept de la "malédiction des matières premières" (Richard Auty, 1990)</li>
                          <li>• <strong>Montrer</strong> le rôle des grands groupes pétroliers dans l'exploitation des ressources africaines</li>
                          <li>• <strong>Illustrer</strong> les stratégies de contournement → exemple du Gabon et des royalties pétrolières</li>
                          <li>• <strong>Analyser</strong> la guerre économique autour du pétrole → influence des puissances mondiales</li>
                        </ul>
                      </div>

                      {/* 1. La malédiction des matières premières */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          1. La malédiction des matières premières : un frein au développement
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
                            <p className="text-gray-800 font-semibold mb-2">Concept de "Resource Curse" (Richard Auty, 1990)</p>
                            <p className="text-gray-700">
                              Les pays riches en ressources naturelles ont paradoxalement une croissance économique plus faible 
                              et des institutions plus fragiles.
                            </p>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <p className="text-red-800 font-semibold mb-2">Problèmes liés à l'exploitation des ressources en Afrique :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>Dépendance aux exportations</strong> → forte vulnérabilité aux variations des prix des matières premières</li>
                              <li><strong>Économie de rente</strong> → faible diversification industrielle et manque d'innovation</li>
                              <li><strong>Corruption et instabilité politique</strong> → l'abondance de ressources favorise l'autoritarisme et le clientélisme</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Guerre économique en Afrique */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          2. Guerre économique en Afrique : accaparement des ressources par les grands groupes
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-gray-800 font-semibold mb-3">Les majors pétrolières contrôlent une grande partie des ressources africaines :</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-blue-800 font-semibold mb-2">Occidentaux :</p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                  <li>• ExxonMobil, Chevron</li>
                                  <li>• Royal Dutch Shell, BP</li>
                                  <li>• Total, ENI</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-red-800 font-semibold mb-2">Autres puissances :</p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                  <li>• <strong>Russie :</strong> Gazprom, Rosneft</li>
                                  <li>• <strong>Chine :</strong> CNPC, Sinopec</li>
                                  <li>• <strong>Moyen-Orient :</strong> Saudi Aramco, ADNOC</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-gray-800 font-semibold mb-2">Exemple du pétrole africain : une ressource convoitée</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>Pays stratégiques :</strong> Nigeria, Angola, Gabon, Libye, Algérie</li>
                              <li><strong>Méthodes d'influence :</strong> Interventions militaires et soutien à des régimes favorables</li>
                              <li><strong>Cas historique :</strong> Elf et la Françafrique → financement d'élites locales en échange d'accès privilégiés</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Étude de cas : Le Gabon */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          3. Étude de cas : Le Gabon et sa stratégie face à la rente pétrolière
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-gray-800 font-semibold mb-2">Le Gabon, un cas particulier en Afrique :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Pays d'Afrique de l'Ouest avec des réserves importantes de pétrole et de gaz</li>
                              <li>• <strong>Stratégie d'indépendance :</strong> taxation plus stricte des majors pétrolières via les royalties</li>
                              <li>• Émergence de petits acteurs comme <em>Kosmos Energy</em> contestant la mainmise des grands groupes</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-gray-800 font-semibold mb-2">Problèmes internes persistants :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>2016 :</strong> Tentative de coup d'État, crise économique liée à la chute des prix du pétrole</li>
                              <li><strong>Défis structurels :</strong> Corruption et tensions sociales malgré les ressources abondantes</li>
                              <li><strong>COVID-19 (2020) :</strong> Ralentissement économique, aggravation des tensions politiques</li>
                              <li><strong>Résultat :</strong> Inégalités profondes persistent malgré la richesse pétrolière</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-gray-800 font-semibold mb-2">Atouts et perspectives :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Position géographique stratégique :</strong> Partenaire privilégié des pays occidentaux</li>
                              <li>• <strong>Politique d'équilibre :</strong> Attirer de nouveaux investisseurs tout en gardant une indépendance relative</li>
                              <li>• <strong>Stabilité relative :</strong> Évite les conflits majeurs qui touchent d'autres pays producteurs</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Bilan */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4">Bilan</h4>
                        <div className="space-y-3 text-gray-700">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>L'Afrique est un <strong>terrain de rivalité</strong> entre grandes puissances économiques, notamment pour le contrôle de ses ressources naturelles.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>La <strong>malédiction des matières premières</strong> freine le développement économique et favorise la corruption et l'instabilité politique.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Des pays comme le <strong>Gabon</strong> tentent d'échapper à cette fatalité en diversifiant leur économie et en encadrant mieux les multinationales, mais ces efforts restent <em>fragiles</em>.</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mt-4">
                            <p className="font-semibold text-purple-800">Question ouverte :</p>
                            <p className="text-gray-700 italic">
                              L'Afrique peut-elle vraiment transformer ses ressources naturelles en un moteur de développement 
                              ou restera-t-elle piégée dans une logique de dépendance ?
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Étude de cas 3 : Kibera */}
                <AccordionItem value="kibera-bidonville">
                  <AccordionTrigger className="text-lg font-semibold text-purple-800">
                    Kibera, le plus grand bidonville de Nairobi : défis de l'urbanisation africaine
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Utilisation en copie */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-blue-800 font-semibold mb-2">Utilisation de l'étude de cas dans une copie</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• <strong>Illustrer</strong> la transition urbaine inachevée en Afrique → urbanisation rapide mais non maîtrisée</li>
                          <li>• <strong>Montrer</strong> les inégalités intra-urbaines → coexistence quartiers modernes et bidonvilles</li>
                          <li>• <strong>Souligner</strong> les défis des infrastructures → absence de services de base, maladies, insécurité</li>
                          <li>• <strong>Mettre en avant</strong> la précarité sanitaire → conditions dégradées et vulnérabilité aux crises</li>
                        </ul>
                      </div>

                      {/* Informations clés sur Kibera */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Informations clés sur Kibera
                        </h4>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                              <p className="text-gray-800 font-semibold mb-2">Localisation et ampleur</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Pays :</strong> Kenya</li>
                                <li><strong>Ville :</strong> Nairobi</li>
                                <li><strong>Nom :</strong> Kibera</li>
                                <li><strong>Population :</strong> 700 000 à 1 000 000 habitants</li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                              <p className="text-red-800 font-semibold mb-2">Disparités d'espérance de vie</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Dans le bidonville :</strong> 35 ans</li>
                                <li><strong>Reste du Kenya :</strong> 54 ans</li>
                                <li><strong>Écart :</strong> <span className="text-red-600 font-bold">-19 ans</span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Problèmes sanitaires majeurs */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Problèmes sanitaires majeurs
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-gray-800 font-semibold mb-2">Défaillances infrastructurelles critiques :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>Absence de système d'évacuation des eaux usées</strong> → propagation rapide des maladies</li>
                              <li><strong>Aucune eau courante</strong> → accès limité à l'hygiène de base</li>
                              <li><strong>Surpopulation</strong> → promiscuité favorisant la transmission de pathologies</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-red-800 font-semibold mb-2">Maladies endémiques :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Malaria</strong> : eaux stagnantes et manque de prévention</li>
                              <li>• <strong>Choléra</strong> : insalubrité et contamination des sources d'eau</li>
                              <li>• <strong>Infections respiratoires</strong> : logements précaires et pollution</li>
                              <li>• <strong>Malnutrition infantile</strong> : insécurité alimentaire chronique</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Défis du développement urbain */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Kibera : miroir des défis urbains africains
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-gray-800 font-semibold mb-2">Transition urbaine inachevée :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Croissance démographique</strong> : 4% par an à Nairobi</li>
                              <li>• <strong>Capacité d'absorption limitée</strong> : infrastructures insuffisantes</li>
                              <li>• <strong>Exode rural massif</strong> : fuite vers les villes sans planification</li>
                              <li>• <strong>Emploi informel dominant</strong> : 80% de l'économie urbaine</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <p className="text-blue-800 font-semibold mb-2">Inégalités spatiales extrêmes :</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div>
                                <p className="text-sm font-semibold text-green-700 mb-1">Nairobi moderne :</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  <li>• Centres d'affaires (CBD)</li>
                                  <li>• Quartiers résidentiels aisés</li>
                                  <li>• Infrastructure développée</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-red-700 mb-1">Kibera et bidonvilles :</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  <li>• 60% de la population urbaine</li>
                                  <li>• 5% de la surface de la ville</li>
                                  <li>• Services publics quasi-inexistants</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Perspective comparative mondiale */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Perspective comparative mondiale
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="text-gray-800 font-semibold mb-2">Comparaison avec d'autres mégabidonvilles :</p>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="text-center">
                                <p className="font-semibold text-sm text-blue-700">Dharavi (Inde)</p>
                                <p className="text-xs text-gray-600">1 million d'habitants</p>
                                <p className="text-xs text-gray-600">Mumbai</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold text-sm text-green-700">Kibera (Kenya)</p>
                                <p className="text-xs text-gray-600">700k-1M habitants</p>
                                <p className="text-xs text-gray-600">Nairobi</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold text-sm text-yellow-700">Rocinha (Brésil)</p>
                                <p className="text-xs text-gray-600">200 000 habitants</p>
                                <p className="text-xs text-gray-600">Rio de Janeiro</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-gray-800 font-semibold mb-2">Défis urbains globaux communs :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Croissance urbaine</strong> non planifiée dans les pays du Sud</li>
                              <li>• <strong>Inégalités socio-spatiales</strong> croissantes</li>
                              <li>• <strong>Déficit d'infrastructures</strong> publiques</li>
                              <li>• <strong>Vulnérabilité</strong> aux crises sanitaires et climatiques</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Bilan */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4">Bilan</h4>
                        <div className="space-y-3 text-gray-700">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Kibera est un <strong>exemple frappant</strong> de la transition urbaine incomplète en Afrique, où la croissance démographique urbaine dépasse largement la capacité des infrastructures.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Un <strong>cas d'école</strong> pour illustrer les défis du développement urbain en Afrique : besoin urgent d'investissements en services publics et en assainissement.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Mettre en perspective avec d'autres bidonvilles mondiaux <em>(Dharavi en Inde, Rocinha au Brésil)</em> pour une <strong>analyse comparative</strong> des défis urbains globaux.</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mt-4">
                            <p className="font-semibold text-purple-800">Enjeu prospectif :</p>
                            <p className="text-gray-700 italic">
                              Comment l'Afrique peut-elle maîtriser son explosion urbaine pour éviter la multiplication de mégabidonvilles 
                              et transformer ses villes en moteurs de développement durable ?
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Étude de cas 4 : États faillis */}
                <AccordionItem value="etats-faillis">
                  <AccordionTrigger className="text-lg font-semibold text-purple-800">
                    Le "Fail State" : Somalie et Soudan – Deux États en déliquescence
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      
                      {/* Utilisation en copie */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="text-blue-800 font-semibold mb-2">Utilisation des études de cas dans une copie</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• <strong>Illustrer</strong> la notion d'État failli (Fail State) → incapacité du gouvernement à assurer l'ordre, l'administration et les services publics</li>
                          <li>• <strong>Montrer</strong> l'impact des conflits internes et des interventions extérieures → anarchie prolongée en Somalie, partition du Soudan</li>
                          <li>• <strong>Analyser</strong> la recomposition des frontières en Afrique → non-reconnaissance du Somaliland, indépendance du Soudan du Sud</li>
                          <li>• <strong>Mettre en lumière</strong> les enjeux géopolitiques et humanitaires → crise alimentaire, déplacements massifs, terrorisme</li>
                        </ul>
                      </div>

                      {/* 1. La Somalie : l'archétype de l'État failli */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          1. La Somalie : l'archétype de l'État failli
                        </h4>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                              <p className="text-gray-800 font-semibold mb-2">Données de base</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Pays :</strong> Somalie</li>
                                <li><strong>Capitale :</strong> Mogadiscio</li>
                                <li><strong>Population :</strong> 11 millions d'habitants</li>
                                <li><strong>Statut :</strong> État failli depuis 1991</li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                              <p className="text-red-800 font-semibold mb-2">Contrôle territorial</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Gouvernement central :</strong> 2% du territoire</li>
                                <li><strong>Al-Shebab :</strong> ~30% du territoire</li>
                                <li><strong>Clans locaux :</strong> Reste fragmenté</li>
                                <li><strong>Services publics :</strong> Quasi-inexistants</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-gray-800 font-semibold mb-2">Chronologie de l'effondrement :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>1991 :</strong> Renversement du dictateur Siad Barre → anarchie et guerre entre clans</li>
                              <li><strong>1992-1995 :</strong> Interventions internationales (ONU, USA – Opération Restore Hope) → échec après lynchage de 18 Rangers américains</li>
                              <li><strong>2006 :</strong> Prise de contrôle par l'Union des tribunaux islamiques → intervention éthiopienne → guérilla des Shebabs</li>
                              <li><strong>Aujourd'hui :</strong> Gouvernement fantoche, anarchie généralisée</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-red-800 font-semibold mb-2">Conséquences dramatiques :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Piraterie maritime :</strong> 100 bateaux attaqués en 2008</li>
                              <li>• <strong>Crise humanitaire :</strong> 3,5 millions de déplacés</li>
                              <li>• <strong>Famine récurrente :</strong> Insécurité alimentaire chronique</li>
                              <li>• <strong>Terrorisme :</strong> Al-Shebab, attentats régionaux (Kenya, Ouganda)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-gray-800 font-semibold mb-2">Cas du Somaliland :</p>
                            <p className="text-gray-700">
                              <strong>Territoire autoproclamé indépendant</strong> en 1991, fonctionnant comme un État de facto 
                              (gouvernement, monnaie, armée) mais <em>non reconnu internationalement</em>. 
                              Paradoxe : plus stable que la Somalie officielle.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Le Soudan : des guerres civiles à la fragmentation */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          2. Le Soudan : des guerres civiles à la fragmentation
                        </h4>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                              <p className="text-gray-800 font-semibold mb-2">Soudan</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Capitale :</strong> Khartoum</li>
                                <li><strong>Population :</strong> 45 millions d'habitants</li>
                                <li><strong>Composition :</strong> Arabes musulmans (Nord)</li>
                                <li><strong>Statut :</strong> État fragile, instabilité</li>
                              </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <p className="text-gray-800 font-semibold mb-2">Soudan du Sud</p>
                              <ul className="text-gray-700 space-y-1">
                                <li><strong>Capitale :</strong> Djouba</li>
                                <li><strong>Population :</strong> 11 millions d'habitants</li>
                                <li><strong>Composition :</strong> Chrétiens animistes</li>
                                <li><strong>Indépendance :</strong> 2011, guerre civile dès 2013</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-gray-800 font-semibold mb-2">Histoire marquée par des conflits constants :</p>
                            <ul className="text-gray-700 space-y-2">
                              <li><strong>1956 :</strong> Indépendance du Soudan → tensions Nord-Sud (arabes musulmans vs chrétiens animistes)</li>
                              <li><strong>1956-1972 :</strong> Première guerre civile → accord de paix mais tensions persistantes</li>
                              <li><strong>1983-2005 :</strong> Deuxième guerre civile → <span className="text-red-600 font-semibold">2 millions de morts, 4 millions de déplacés</span></li>
                              <li><strong>2003 :</strong> Guerre du Darfour → "quasi-génocide" selon l'ONU, 300 000 morts, 1,5 million de réfugiés</li>
                              <li><strong>2011 :</strong> Indépendance du Soudan du Sud → nouvelle guerre civile interne dès 2013</li>
                              <li><strong>2019 :</strong> Renversement d'Omar el-Béchir après 30 ans au pouvoir → instabilité persistante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <p className="text-red-800 font-semibold mb-2">Conséquences de la fragmentation :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Faillite économique :</strong> Crises alimentaires récurrentes, réfugiés massifs</li>
                              <li>• <strong>Conflits ethniques :</strong> Lutte pour les ressources (pétrole, terres agricoles)</li>
                              <li>• <strong>Interventions inefficaces :</strong> Impuissance de l'ONU et des puissances occidentales</li>
                              <li>• <strong>Effet domino :</strong> Déstabilisation des pays voisins (Tchad, RCA, Éthiopie)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Analyse comparative et enjeux géopolitiques */}
                      <div className="bg-white p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Analyse comparative : facteurs communs d'échec étatique
                        </h4>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                              <p className="text-gray-800 font-semibold mb-2">Facteurs internes :</p>
                              <ul className="text-gray-700 space-y-1 text-sm">
                                <li>• <strong>Divisions ethniques/religieuses</strong> profondes</li>
                                <li>• <strong>Faiblesse institutionnelle</strong> héritée</li>
                                <li>• <strong>Économie de rente</strong> (pétrole au Soudan)</li>
                                <li>• <strong>Système clanique</strong> (Somalie)</li>
                                <li>• <strong>Géographie difficile</strong> (déserts, enclaves)</li>
                              </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <p className="text-gray-800 font-semibold mb-2">Facteurs externes :</p>
                              <ul className="text-gray-700 space-y-1 text-sm">
                                <li>• <strong>Interventions militaires</strong> extérieures</li>
                                <li>• <strong>Soutien international</strong> à des factions rivales</li>
                                <li>• <strong>Frontières artificielles</strong> coloniales</li>
                                <li>• <strong>Guerre froide</strong> (proxy wars)</li>
                                <li>• <strong>Échec du peacekeeping</strong> international</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-gray-800 font-semibold mb-2">Enjeux géopolitiques contemporains :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• <strong>Terrorisme régional :</strong> Al-Shebab (Somalie), instabilité sahélienne</li>
                              <li>• <strong>Flux migratoires :</strong> Réfugiés vers l'Europe, déstabilisation régionale</li>
                              <li>• <strong>Ressources stratégiques :</strong> Pétrole soudanais, position géographique (Corne de l'Afrique)</li>
                              <li>• <strong>Rivalités internationales :</strong> Chine-USA-UE, influence au Moyen-Orient</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Bilan */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-purple-800 mb-4">Bilan</h4>
                        <div className="space-y-3 text-gray-700">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>La Somalie et le Soudan illustrent les <strong>échecs des processus de stabilisation post-coloniaux</strong> et les difficultés à maintenir des États viables dans des contextes de divisions ethniques et de conflits d'intérêts.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Des <strong>interventions internationales inefficaces</strong> et une communauté internationale incapable de gérer ces crises prolongées.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-lg">→</span>
                            <p>Ces cas illustrent aussi le <strong>risque d'éclatement des États africains</strong> et la difficulté d'une gouvernance unifiée face aux tensions internes et aux enjeux géopolitiques.</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mt-4">
                            <p className="font-semibold text-purple-800">Question cruciale :</p>
                            <p className="text-gray-700 italic">
                              Comment reconstruire des États viables en Afrique quand les structures héritées de la colonisation 
                              se révèlent inadaptées aux réalités ethniques, religieuses et géographiques locales ?
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
                
              </Accordion>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default ContinentAfricainPage;