import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Globe, AlertTriangle, Lightbulb, Shield, Users, BookOpen, Flag, Heart, Coins, Target, List } from 'lucide-react';

const UnionEuropeennePageSimple = () => {
  return (
    <div className="relative">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Union européenne</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Union européenne
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-3">
            Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.
          </p>

          {/* Plan de la dissertation */}
          <Card className="mt-8 bg-white border border-gray-200 shadow-none">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900 text-center">
                Plan de la dissertation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="inline-block text-left space-y-4 max-w-2xl">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    I. Historique de la construction européenne
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>I.1 - L'idée de la construction européenne</li>
                    <li>I.2 - Coopération, rivalités et ingérences</li>
                    <li>I.3 - Modèle et puissance de l'Europe</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    II. Les défis contemporains de l'Union européenne
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>II.1 - Les dépendances de l'Europe</li>
                    <li>II.2 - Une polycrise : typologie des défis</li>
                    <li>II.3 - Désillusions européennes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    III. Les voies de l'avenir et la réinvention de l'Europe
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>III.1 - Une Europe plurielle : confrontée aux crises</li>
                    <li>III.2 - La stratégie de l'UE : le tournant actuel</li>
                    <li>III.3 - L'UE, groupement supranational de 27 pays</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenu détaillé - Partie I */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 bg-white shadow-none mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="h-6 w-6 text-gray-600" />
                I. Historique de la construction européenne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* I.1. L'idée de la construction européenne */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">I.1. L'idée de la construction européenne</h3>
                  <div className="space-y-6">

                    {/* 1/ La nécessité d'établir la paix */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        1. La nécessité d'établir la paix fait émerger l'idée d'une Europe unie
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Une idée ancienne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Emmanuel Kant (1795)</strong> - <em>Vers la paix perpétuelle</em></p>
                              <p className="text-gray-600 italic">Projet de paix perpétuelle</p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Coudenhove Kalergi (1923)</strong> - <em>Paneuropa</em></p>
                              <p className="text-gray-600 italic">Un projet européen, s'unir pour éviter la guerre</p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Stefan Zweig (1941)</strong> - <em>Le monde d'hier, souvenirs d'un Européen</em></p>
                              <p className="text-gray-600 italic">Un regard rétrospectif sur l'Europe : Excès de puissance en Europe en 1913 cause de la PGM</p>
                              <blockquote className="bg-gray-100 p-3 rounded italic text-gray-700 mt-2">
                                « Les États, les villes avaient acquis trop vite leur puissance, et le sentiment de leur force incite toujours les hommes, comme les États, à en user ou en abuser. »
                              </blockquote>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Héritage d'un passé récent de guerres et destructions</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Robert Kagan (2002)</strong> - <em>La puissance et la faiblesse</em></p>
                              <p className="text-gray-600">Pour les Européens : volonté de puissance = porteuse de chaos → « longue guerre civile européenne »</p>
                              <p className="text-xs text-gray-500 mt-1">
                                <em>La guerre civile européenne est une construction historique a posteriori selon laquelle les conflits européens de la première moitié du XXe siècle sont en réalité un seul et même conflit</em>
                              </p>
                            </div>

                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic text-gray-700">Abdiquer de la puissance militaire, Europe paradis, grâce aux USA...</p>
                              <p className="font-medium text-gray-800 mt-2">« Les Européens sont de Vénus, les Américains de Mars »</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Émergence de l'idée de gouvernance européenne/mondiale</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <h6 className="font-semibold mb-2">Étude de cas : La Société des Nations (SDN)</h6>
                              <ul className="list-disc list-inside text-xs">
                                <li>• Proposée par W. Wilson : les 14 points</li>
                                <li>• Refus par le sénat américain</li>
                                <li>• <em>« La SDN est très efficace quand les moineaux crient, mais plus du tout quand les aigles attaquent »</em> - Mussolini, 1935</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Ce que l'Europe permet aux États */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        2. Construire l'Europe : ce que l'Europe permet aux États
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">La réincarnation de la France, rédemption de l'Allemagne</h5>
                          <blockquote className="bg-white p-3 rounded italic text-gray-700 border-l-2 border-gray-300">
                            « À travers l'Europe, la France vise la réincarnation, l'Allemagne la rédemption »
                            <footer className="text-sm text-gray-600 mt-1">— Zbigniew Brzezinski</footer>
                          </blockquote>
                          <p className="text-sm text-gray-700 mt-2">
                            Le projet européen représente effectivement, pour les Allemands, une formidable opportunité de se donner une deuxième chance en se construisant une nouvelle identité.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Réponse au déclin relatif des puissances européennes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-gray-300">
                              « L'Allemagne est trop grande pour l'Europe, trop petite pour le monde »
                              <footer className="text-sm text-gray-600 mt-1">— Henry Kissinger</footer>
                            </blockquote>

                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-gray-300">
                              « La France est une grande puissance moyenne »
                            </blockquote>

                            <p className="font-medium">L'Europe, quel numéro ?</p>

                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <h6 className="font-semibold mb-2">Étude de cas : Le canal de Suez</h6>
                              <p className="text-xs text-gray-600">Voir le livre de Mathieu pour une synthèse sur l'établissement relatif de l'Europe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Différentes visions */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        3. Différentes visions sur l'Europe en fonction des pères fondateurs
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Chacun a sa propre vision de l'Europe</h5>
                          <p className="text-sm text-gray-700 mb-3">Projet de paix et de prospérité de l'Europe</p>

                          <blockquote className="bg-white p-3 rounded italic text-gray-700 border-l-2 border-gray-300">
                            « On ne sort de l'ambiguïté qu'à son détriment »
                            <footer className="text-sm text-gray-600 mt-1">— Cardinal de Retz</footer>
                          </blockquote>

                          <p className="text-sm text-gray-700 mt-2 font-medium">
                            La construction européenne serait-elle finalement l'histoire d'un malentendu ?
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Étude de cas : Le couple franco-allemand</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>La construction européenne : histoire d'un malentendu ? (2019)</strong></p>

                            <p>Des divergences au sein du couple franco-allemand :</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>Sur le plafonnement des prix du gaz</li>
                              <li>Sur diverses politiques européennes</li>
                            </ul>

                            <div className="border border-gray-200 p-3 rounded bg-white">
                              <p><strong>Hirschman</strong> - <em>Exit, Voice, and Loyalty</em> (1970)</p>
                            </div>

                            <p className="font-medium text-gray-900">
                              Une vision pragmatique des pères fondateurs que l'on retrouve de nos jours face à des ennemis communs fédérateurs :
                              L'Europe, in fine n'a-t-elle pas besoin d'un ennemi commun fédérateur pour exister ?
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-3">Les trois approches des pères fondateurs</h5>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">1. Pragmatisme</h6>
                              <p className="text-xs text-gray-600">Par des réalisations concrètes et le functional spillover, paix et fédération créées</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">2. Fédéralisme</h6>
                              <p className="text-xs text-gray-600">Pro-européen, vision ambitieuse d'intégration</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">3. Unionisme</h6>
                              <p className="text-xs text-gray-600">Coopération intergouvernementale</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">9 mai 1950 : Discours de l'horloge</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p className="text-xs text-gray-600">(Lendemain de la commémoration de l'armistice, aujourd'hui journée de l'Europe)</p>

                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-gray-300">
                              « L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle ne se fera par des réalisations concrètes créant d'abord une solidarité de fait. »
                              <footer className="text-sm text-gray-600 mt-1">— Robert Schuman</footer>
                            </blockquote>

                            <div className="space-y-2">
                              <p><strong>Schuman</strong> : Européen par sa biographie, expérience des 2 guerres mondiales</p>
                              <p><strong>Monnet</strong> : Commissaire au Plan, qui souffle à Schuman l'idée d'une coopération ambitieuse de planification des industries du charbon et de l'acier pour la France et l'Allemagne</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium">Une Europe à petits pas : Maastricht et la réunification (Mitterrand)</p>
                              <p className="text-xs">Maastricht et le compromis sur l'Europe</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Synthèse</h5>
                          <p className="text-sm text-gray-700">
                            <strong>L'Europe est une oscillation entre fédéralisme et unionisme</strong> : les événements historiques importants permettent de faire la salve de dates historiques et d'illustrer les réalisations concrètes : « l'Europe à petits pas » (Monnet).
                          </p>
                          <p className="text-sm text-gray-700 mt-2">
                            Par des réalisations concrètes et le <em>functional spillover</em>, paix et fédération créées.
                          </p>
                          <p className="text-sm text-gray-700 mt-2">
                            Pères fondateurs = hommes marqués par les 2 guerres mondiales et extrêmement ambitieux dans le fédéralisme (vu comme la voie de la paix).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* I.2. Coopération, rivalités et ingérences */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">I.2. Coopération, rivalités et ingérences</h3>
                  <div className="space-y-6">

                    {/* 1/ Les échecs de la stabilisation des marges de l'UE */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        1. Les échecs de la stabilisation des marges de l'UE
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">"Ring of Fire" - L'anneau de feu européen</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>The Economist (2014)</strong> - <em>"Ring of Fire"</em></p>
                              <p className="text-gray-600 italic">Échec des politiques de voisinage, anneau de feu autour de l'Europe</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold mb-2 text-gray-900">Carte du voisinage instable de l'Europe</h6>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-gray-100 p-2 rounded">
                                  <p><strong>Guerre en Syrie</strong> (2014-...)</p>
                                </div>
                                <div className="bg-gray-100 p-2 rounded">
                                  <p><strong>Haut-Karabakh</strong> (2020)</p>
                                </div>
                                <div className="bg-gray-100 p-2 rounded">
                                  <p><strong>Révolutions arabes</strong> (2011)</p>
                                </div>
                                <div className="bg-gray-100 p-2 rounded">
                                  <p><strong>Ukraine</strong> (2014-... 2022-...)</p>
                                </div>
                              </div>
                              <div className="mt-2 bg-gray-100 p-2 rounded">
                                <p className="text-xs"><strong>Crise des réfugiés</strong> - Conséquence directe de l'instabilité</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Stratégies de l'UE pour pacifier son voisinage</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>PEV (Politique Européenne de Voisinage)</strong> : Stratégie de l'Union Européenne pour pacifier et gérer son voisinage</p>

                              <div className="border border-gray-200 p-3 rounded bg-white">
                                <p><strong>UPM (Union pour la Méditerranée)</strong></p>
                                <p className="text-xs text-gray-600">Voisinage crisogène, suite de la conférence de Barcelone</p>
                              </div>

                              <div className="space-y-1">
                                <p><strong>Autres stratégies :</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                  <li>Élargissements successifs</li>
                                  <li>Décarbonation des économies</li>
                                  <li>Coopération sécuritaire</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Dépendance sécuritaire aux États-Unis</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-900">70%</p>
                                <p className="text-xs">des coûts de la guerre Ukraine financés par les USA</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-900">70%</p>
                                <p className="text-xs">du financement de l'OTAN par les USA</p>
                              </div>
                            </div>
                            <p className="font-medium text-gray-900">
                              Hausse stratégique des budgets de défense : l'Europe ne peut plus se contenter d'être sous le parapluie américain
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Focus : Le programme Frontex</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p className="italic">Montre que l'UE veut mettre un terme aux migrations illégales (fait partie de l'Europe forteresse)</p>

                            <div className="space-y-2">
                              <div className="bg-white p-3 rounded border">
                                <p><strong>2005</strong> : Entrée en fonction, siège à Varsovie</p>
                                <p className="text-xs text-gray-600">Mise en commun des moyens policiers pour contrôler les frontières</p>
                              </div>

                              <div className="bg-white p-3 rounded border">
                                <p><strong>2020</strong> : Garde-côtes et garde-frontières européens renforcés</p>
                                <p className="text-xs text-gray-600">Budget multiplié par 5, corps permanent de 10 000 agents d'ici 2027</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* I.3. Modèle et puissance de l'Europe */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">I.3. Modèle et puissance de l'Europe</h3>
                  <div className="space-y-6">

                    {/* 1/ Mythe / réalité */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        1. Le modèle de puissance de l'Europe : mythe / réalité
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Mythe : l'Europe puissance</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Zaki Laïdi (1998)</strong> : La Norme sans la Force</p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>François Hollande</strong> : l'Europe est une puissance</p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p>
                                <strong>Mathieu</strong> : pas tous les leviers de la puissance : faiblesse dans la guerre économique
                              </p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ali Laïdi</strong> : Puissance civile / normative / tranquille / au-delà de la puissance</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Limites économiques du modèle</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Mouhoub Mouhoud</strong> : Artefacte statistique</p>
                              <p className="text-gray-600">1% PIB, PAC, secteurs stratégiques sous-investis</p>
                            </div>

                            <p>Mise en place de stratégies seulement au moment des crises</p>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>Macron</strong> - <em>"Pour une renaissance de l'Europe"</em></p>
                              <p className="text-xs text-gray-600">Lettre ouverte pour une Europe puissance militaire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Incompatibilité avec le contexte actuel */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        2. Une incompatibilité avec le contexte actuel (réalité)
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">L'exception française dans un ensemble fragile</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              <strong>Bastien Nivet</strong> : Une exception française, un véritable acteur sur la scène internationale,
                              c'est le seul pays [européen avec cette ambition]
                            </p>

                            <div className="space-y-2">
                              <p className="font-medium">Dépendances structurelles :</p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Dépendance aux USA</li>
                                <li>Pas les moyens du choix de la puissance</li>
                                <li>Dépendances technologique, énergétique, financière</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-gray-700">
                                Incapacité d'atteindre l'Europe puissance : plus on mobilise ce concept, moins la notion est précise
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Incompatibilité du modèle avec les rivalités actuelles</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p className="font-medium text-gray-900 mb-1">Question centrale :</p>
                              <p className="italic">
                                Le modèle de puissance de l'UE est-il compatible avec la nature des rivalités et rapports de force actuels ?
                              </p>
                            </div>

                            <p><strong>Transition :</strong> Un retour à la géopolitique devient nécessaire</p>

                            <div className="bg-gray-100 p-3 rounded">
                              <p className="font-semibold mb-2">Paradoxe du modèle de puissance de l'UE :</p>
                              <div className="space-y-1 text-xs">
                                <p>• Manifestement l'UE est créée dans la quête d'un abandon de la puissance traditionnelle</p>
                                <p>• Un « empire de la paix » fondé sur un rejet de la puissance</p>
                                <p>• Constat : atouts majeurs pour diffuser sa puissance, originale mais des atouts</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Obstacles internes et externes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Désunion interne :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Pas le pouvoir d'agir en temps de paix</li>
                                <li>Difficultés à agir face aux crises (exogènes, endogènes)</li>
                                <li>Obstacles de tout type</li>
                                <li>Interroge l'idée même d'une puissance européenne</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-gray-700">
                                Cependant ce modèle de puissance n'est pas viable dans un monde avec un retour indéniable des rapports de force
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Désillusion et retour à la géopolitique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              La désillusion de l'Europe : pas le pouvoir de poursuivre le projet de paix,
                              mais retour à la géopolitique, pas de paix perpétuelle
                            </p>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Soderborn</strong> - <em>"Soft imperialism"</em></p>
                              <p className="text-gray-600">Renonce à la puissance, mais une quête dans certains points de puissance</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>Partage du fardeau :</strong></p>
                              <p className="text-xs">2% est l'objectif, sauf la Hongrie, rupture attentiste F35 POLOGNE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Réorientation stratégique */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        3. Une réorientation stratégique inéluctable
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Vers une boussole stratégique</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>Une boussole stratégique, un réveil stratégique, un type de puissance nouvelle</p>
                            <p className="font-medium">Carrefour entre deux modèles, nouveaux domaines stratégiques :</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-900">💻 Numérique</p>
                                <p className="text-xs">Cloud européen, souveraineté avec RGPD</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-900">⚔️ Militaire</p>
                                <p className="text-xs">Défense européenne autonome</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-900">🌱 Environnement</p>
                                <p className="text-xs">Transition écologique comme levier</p>
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="italic text-gray-700">
                                Si bien que l'UE doit se montrer résiliente et se réinventer pour être une puissance globale
                                dans le monde et défendre ses intérêts.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Études de cas (EDC) */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-3">Études de cas (EDC)</h5>

                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">EDC 1 : Paix ou faiblesse ? Prix Nobel de la paix</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p>
                                  <strong>2012</strong> : Europe prix Nobel de la paix, qui couronne un demi-siècle d'action de paix
                                  dans le monde et la réconciliation des peuples d'Europe.
                                </p>
                                <p>
                                  L'UE préfère influencer par l'exemple et les valeurs plutôt que par le hard power
                                </p>
                                <div className="bg-gray-100 p-2 rounded">
                                  <p className="italic text-xs">
                                    Question : Signe d'impuissance ou rétablissement de la paix ?
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">EDC 2 : L'Europe garde un normative power (écologie) dans la mondialisation</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-medium">Montrer que les intérêts économiques priment sur la puissance normative UE</p>

                                <div className="bg-gray-100 p-3 rounded border border-gray-300">
                                  <p><strong>Novembre 2017</strong> : La Commission européenne autorise le renouvellement de l'utilisation du glyphosate, herbicide cancérigène, pour les 5 prochaines années.</p>
                                </div>

                                <div className="space-y-1">
                                  <p>• Dilution du modèle avec les USA</p>
                                  <p>• Viande bovine USA, hormones...</p>
                                  <p>• Oppositions internes (seuls 18 pays votent contre, passe très mal en France)</p>
                                </div>

                                <div className="bg-gray-100 p-2 rounded">
                                  <p className="italic text-xs">
                                    Enjeu : puissance normative ou compétitivité dans la mondialisation ?
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded border">
                              <h6 className="font-semibold text-gray-900 mb-2">EDC 3 : Changement de paradigme - Allemagne</h6>
                              <div className="space-y-2 text-sm text-gray-700">
                                <p>
                                  Plus de certitude de vivre dans un monde post-stratégique et post-conflictuel (post-Clausewitzian)
                                </p>

                                <div className="border-l-2 border-gray-300 pl-3">
                                  <p><strong>"Wandel Durch Handel"</strong> (Changement par le commerce)</p>
                                  <p className="text-xs text-gray-600">Doctrine allemande traditionnelle</p>
                                </div>

                                <div className="space-y-1 text-xs">
                                  <p>• Le dialogue avec la Russie avant la guerre en Ukraine (Merkel)</p>
                                  <p>• Étude de cas Schröder : son retrait et l'image pour le SPD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partie II - Les défis contemporains de l'Union européenne */}
          <Card className="border border-gray-200 bg-white shadow-none mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-gray-600" />
                II. Les défis contemporains de l'Union européenne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* II.1. Les dépendances de l'Europe */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">II.1. Les dépendances de l'Europe</h3>
                  <div className="space-y-6">

                    {/* 1/ Dépendance énergétique */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        1. Une dépendance énergétique
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Dépendance historique au gaz russe</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-700">55%</p>
                                <p className="text-xs">du gaz venait de Russie</p>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <p className="font-semibold text-gray-700 mb-1">🇺🇸 Dépendance militaire</p>
                                <p className="text-xs">Sous-investissement depuis la SGM</p>
                              </div>
                            </div>

                            <div className="bg-gray-100 p-3 rounded">
                              <p className="font-semibold text-gray-800 mb-1">Réponses allemandes :</p>
                              <div className="space-y-1 text-xs">
                                <li>• <strong>100 milliards €</strong> pour l'armée</li>
                                <li>• Piège de l'Allemagne : exportations vers la Chine</li>
                                <li>• Gaz russe (55% des besoins énergétiques)</li>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Géopolitique des tubes</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Philippe Rekacewicz</strong> - Géopolitique des tubes</p>
                              <p className="text-gray-600 italic">Importance des sources d'approvisionnement d'hydrocarbures dans les rapports de force mondiaux</p>
                            </div>

                            <div className="space-y-2">
                              <p><strong>Enjeux des gazoducs :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li>Tracé des gazoducs</li>
                                <li>Les clients et destinations</li>
                                <li>Force de Sibérie</li>
                                <li>La Russie est obligée de suivre le tracé des gazoducs</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>55%</strong> des besoins énergétiques européens venaient de Russie</p>
                              <p className="text-xs text-gray-600 mt-1">Nécessité de diversification énergétique et développement durable</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Fin de la culture de la retenue</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ampelkoalition</strong> (Coalition feu tricolore allemande)</p>
                              <p className="text-gray-600">Réarmer alors que Verts au pouvoir, une Realpolitik</p>
                            </div>

                            <p>Prise de conscience que la Chine est un <strong>rival systémique</strong></p>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>L'Europe dans la guerre économique mondiale</strong></p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">📋 Étude de cas : KUKA AG</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>Rachat du fleuron allemand de la robotique par la Chine</p>
                            <p className="text-xs text-gray-600 italic">
                              Exemple emblématique de la dépendance économique et technologique européenne
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Dépendance militaire */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        3. Une dépendance militaire des États-Unis
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Dépendance structurelle à l'OTAN</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Hausse du budget dédié à l'armement</strong></p>
                              <p>Une dépendance de l'OTAN, des USA</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="font-semibold text-gray-700">70%</p>
                              <p className="text-xs">des dépenses de l'OTAN sont financées par les USA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Dépendance technologique */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        4. Une dépendance technologique
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">L'Europe n'est pas Schumpeterienne</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Daniel Cohen</strong> - Article Le Monde (2002)</p>
                              <p className="text-gray-600 italic">Analyse du retard technologique européen</p>
                            </div>

                            <p className="italic">
                              L'Europe manque d'innovation destructrice et de dynamisme entrepreneurial à la Schumpeter
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-3">📋 Études de cas technologiques</h5>

                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-700 mb-1">KUKA AG</h6>
                              <p className="text-xs text-gray-600">
                                Rachat du leader allemand de la robotique par la Chine - Perte d'un champion technologique
                              </p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <h6 className="font-semibold text-gray-700 mb-1">Photovoltaïque</h6>
                              <p className="text-xs text-gray-600">
                                Concurrence déloyale de la Chine, l'Europe n'est plus price maker mais price taker
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Synthèse */}
                    <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-500">
                      <h5 className="font-semibold text-gray-800 mb-2">💡 Synthèse des dépendances européennes</h5>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p>
                          L'Europe fait face à un <strong>quadruple défi de dépendance</strong> qui fragilise sa souveraineté :
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                          <li><strong>Énergétique</strong> : 55% du gaz russe, géopolitique des tubes</li>
                          <li><strong>Économique</strong> : Guerre économique mondiale, rachat d'actifs stratégiques</li>
                          <li><strong>Militaire</strong> : 70% OTAN financé par les USA, sous-investissement chronique</li>
                          <li><strong>Technologique</strong> : Retard innovation, perte de champions (KUKA, photovoltaïque)</li>
                        </ul>
                        <p className="italic text-gray-600 mt-2">
                          Ces dépendances croisées appellent une réorientation stratégique pour reconquérir l'autonomie européenne.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* II.2. Une polycrise : typologie des défis de l'Europe */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">II.2. Une polycrise : typologie des défis de l'Europe</h3>
                  <div className="space-y-6">

                    {/* Référence polycrise */}
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5" />
                        <h5 className="font-semibold text-gray-800">Concept de « Polycrise »</h5>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Guy Verhofstadt</strong> - Député européen belge, <em>Le mal européen</em> (2016)
                      </p>
                      <p className="text-xs text-gray-600 mt-1 italic">
                        Une crise dans tous les domaines, une crise complexe et globale
                      </p>
                    </div>

                    {/* Typologie des 6 crises */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">💰 1. Économique</h5>
                        <p className="text-xs text-gray-700">Crise de la dette souveraine, Grexit</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">🏛️ 2. Identitaire</h5>
                        <p className="text-xs text-gray-700">Désunion Ouest/Est, singularités nationales</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">🚶‍♂️ 3. Migratoire</h5>
                        <p className="text-xs text-gray-700">Voisinage instable, 1,5M en 2015</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">⚡ 4. Énergétique</h5>
                        <p className="text-xs text-gray-700">Dépendance gaz russe, diversification</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">⚔️ 5. Guerre</h5>
                        <p className="text-xs text-gray-700">Ukraine, retour de la géopolitique</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h5 className="font-semibold text-gray-800 mb-2">👥 6. Démographique</h5>
                        <p className="text-xs text-gray-700">"Suicide démographique" (Godet)</p>
                      </div>
                    </div>

                    {/* Étude de cas : Crise migratoire */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        📋 Étude de cas : La crise migratoire (2015-2017)
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Origines et ampleur</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>La crise migratoire prend racine dans :</p>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                              <li>Les printemps arabes de 2011</li>
                              <li>La fragilité des États africains</li>
                              <li>Les conflits au Proche et Moyen-Orient</li>
                            </ul>

                            <div className="bg-white p-3 rounded border mt-3">
                              <p><strong>Routes migratoires :</strong></p>
                              <p className="text-xs">Route marocaine, route libyenne, route turque</p>
                            </div>

                            <div className="bg-gray-100 p-3 rounded border border-gray-300">
                              <p><strong>2015 :</strong> 1,5 million de personnes pénétrant l'espace Schengen</p>
                              <p className="text-xs">Intensification due à la guerre civile syrienne</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Groupe de Visegrád (V4)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>Pologne (2016) :</strong> 586 000 permis de résidence</p>
                              <p className="text-xs text-gray-600">Soit 20% du total de l'Union européenne</p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>V4</strong> - Formé en 1991 (Hongrie, Pologne, République tchèque, Slovaquie)</p>
                              <p className="text-xs text-gray-600">Initialement pour faciliter l'intégration OTAN</p>
                              <p className="text-xs mt-1">Maintenant : défense de la souveraineté face à « Bruxelles »</p>
                            </div>

                            <blockquote className="bg-gray-100 p-3 rounded italic text-gray-700">
                              « Ils n'ont pas confiance dans le modèle occidental d'une société multiculturelle »
                              <footer className="text-xs text-gray-600 mt-1">— Jacques Rupnik</footer>
                            </blockquote>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Conséquences : Montée de l'extrême-droite</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p><strong>Pays touchés :</strong> Espagne, Autriche, Finlande, Pays-Bas</p>

                            <div className="space-y-2">
                              <p><strong>Mesures restrictives :</strong></p>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                                <li><strong>2018 - Danemark :</strong> Loi « anti-ghettos »</li>
                                <li><strong>2021 - Suède :</strong> Réduction durée permis de séjour</li>
                                <li>Construction de murs aux frontières</li>
                                <li>Camps « fermés et à accès contrôlé »</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>Fractures interétatiques :</strong></p>
                              <p className="text-xs">Tensions France-Italie (Ocean Viking), V4 vs règlement Dublin III</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* II.3. Désillusions européennes */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">II.3. Désillusions européennes</h3>
                  <div className="space-y-6">

                    {/* 1/ La désunion européenne : l'Europe, un artefact statistique ? */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        1. La désunion européenne : l'Europe, un artefact statistique ?
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Une harmonie impossible ?</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Henry Kissinger</strong> (1970), Secrétaire d'État américain :</p>
                              <blockquote className="bg-white p-3 rounded italic border-l-2 border-gray-300 mt-2">
                                « When I want to call Europe, what number do I dial? »<br/>
                                <span className="text-xs">(« Quand je veux appeler l'Europe, quel numéro dois-je composer ? »)</span>
                              </blockquote>
                              <p className="text-xs text-gray-600 mt-1">
                                Critique du manque d'unité et de la difficulté à parler d'une seule voix
                              </p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>El Mouhoub Mouhoud</strong> :</p>
                              <p className="italic">"L'UE est un artefact statistique : sans crise, pas de fédéralisme européen"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2/ Euroscepticisme */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        2. L'euroscepticisme : le moment critique de l'UE
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Définition et portée</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <p>
                              <strong>L'euroscepticisme</strong> est un courant de pensée qui critique l'Union européenne
                              et ses institutions, et qui remet en question la pertinence de l'intégration européenne.
                            </p>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Régis Debray :</strong></p>
                              <p className="italic">"Plus l'économie se globalise, plus le politique se provincialise"</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Partis eurosceptiques en Europe</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇫🇷 France :</strong> Rassemblement National (RN)</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇩🇪 Allemagne :</strong> Alternative für Deutschland (AfD)</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇮🇹 Italie :</strong> Mouvement 5 étoiles, Ligue du Nord (Salvini)</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇬🇧 Royaume-Uni :</strong> UKIP</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>🇦🇹 Autriche :</strong> FPÖ</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Groupe V4 :</strong> Opposition systématique</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Moments clés de l'euroscepticisme</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-white p-3 rounded border">
                              <p><strong>2005 :</strong> Non au traité constitutionnel par référendum</p>
                              <p className="text-xs text-gray-600">France et Pays-Bas - Distance entre populations et construction européenne</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>"Opting out" :</strong> Europe à géométrie variable</p>
                              <p className="text-xs text-gray-600">Certaines politiques ne s'appliquent pas dans tous les pays</p>
                            </div>

                            <div className="bg-gray-100 p-3 rounded">
                              <p className="italic text-gray-700">
                                Une Europe difficile à percevoir de l'extérieur
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3/ Populisme en Europe */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        📋 Étude de cas : Populisme en Europe
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Héritages et divergences</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Ivan Krastev et Stephen Holmes</strong> - <em>Le moment illibéral</em> (2020)</p>
                              <p className="text-gray-600 italic">
                                L'histoire des PECO, longtemps sous le giron d'empires, se traduit par une volonté
                                accrue d'indépendance alors que celle-ci reste fraîchement acquise
                              </p>
                            </div>

                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>Pierre Rosanvallon</strong> - <em>Le Siècle du populisme</em> (2020)</p>
                              <p className="text-gray-600 italic">
                                L'illibéralisme est « une culture politique qui disqualifie en son principe la vision libérale »
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Cas Viktor Orbán (Hongrie)</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <blockquote className="bg-white p-3 rounded italic border-l-2 border-gray-300">
                              « Bâtir un État non libéral... Il ne fait pas de cette idéologie un élément central de l'organisation de l'État. Il applique une approche spécifique et nationale. »
                            </blockquote>
                            <p className="text-xs text-gray-600">
                              Discours à l'université de Baile Tusnad - Référence aux modèles de Singapour, Chine, Inde, Turquie, Russie
                            </p>

                            <div className="bg-gray-100 p-3 rounded border border-gray-300">
                              <p><strong>Conséquences :</strong></p>
                              <ul className="list-disc list-inside text-xs space-y-1">
                                <li>Article 7 par le Parlement européen contre la Hongrie (procédure d'exclusion)</li>
                                <li>Critiques contre la Pologne et la Roumanie</li>
                                <li>Fragmentations politiques nombreuses en Europe</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4/ Facteurs de déclin */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        4. Facteurs de déclin européen
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Typologie du déclin</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Démographie :</strong> "Suicide démographique"</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Désindustrialisation :</strong> Perte de compétitivité</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Déclin géopolitique :</strong> Marginalisation</p>
                              </div>
                              <div className="bg-white p-2 rounded border">
                                <p><strong>Désunion :</strong> Absence d'unité stratégique</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Le "Temps des prédateurs"</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="border-l-2 border-gray-300 pl-4">
                              <p><strong>François Heisbourg</strong> - "Tiersmondialisation de l'UE"</p>
                              <p className="text-gray-600 italic">L'Europe risque de devenir un acteur de second plan</p>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p><strong>Colonisation numérique :</strong></p>
                              <div className="grid grid-cols-2 gap-2 mt-2">
                                <p className="text-xs"><strong>GAFAM</strong> (Google, Apple, Facebook, Amazon, Microsoft)</p>
                                <p className="text-xs"><strong>BATX</strong> (Baidu, Alibaba, Tencent, Xiaomi)</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <p><strong>Découplage USA-Europe :</strong> Années Trump</p>
                              <p><strong>Pascal Duchamps :</strong> Pas d'armée EU mais des progrès (SCARF MALE, 100M ALL)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Atouts européens restants</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="space-y-2">
                              <p><strong>Green Power :</strong> Originalité européenne dans la transition écologique</p>
                              <p><strong>Todorov :</strong> "Puissance tranquille de l'UE"</p>
                              <p><strong>Bela Balassa :</strong> "La ZIR (Zone d'Intégration Régionale) la plus intégrée au monde"</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">Déficits structurels</h5>
                          <div className="space-y-3 text-sm text-gray-700">
                            <ul className="list-disc list-inside space-y-1 text-xs">
                              <li>Divisions internes, pas d'unité stratégique</li>
                              <li>Pas de politique stratégique commune</li>
                              <li>Manque de récit de l'UE</li>
                              <li>Pas de liens entre récit, légitimité et puissance</li>
                              <li>Structure hybride, pas de réalité hors de l'économie</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partie III - Les voies de l'avenir et la réinvention de l'Europe */}
          <Card className="border border-gray-200 bg-white shadow-none mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Flag className="h-6 w-6 text-gray-600" />
                III. Les voies de l'avenir et la réinvention de l'Europe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* III.1. Une Europe plurielle : confrontée aux crises de différentes dans une ampleur différente */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">III.1. Une Europe plurielle : confrontée aux crises de différentes dans une ampleur différente</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Flag className="h-5 w-5" />
                        <span>A. Des périphéries exposées</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Périphéries Est :</strong> Confrontées à la Russie</p>
                        <p><strong>Périphéries Sud :</strong> Confrontées aux crises migratoires et au terrorisme</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <span>B. L'intégration européenne, facteur de tensions</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Crise de l'Euro :</strong> 2010-2012, divergences économiques</p>
                        <p><strong>Brexit :</strong> Retrait du Royaume-Uni, tensions</p>
                        <p><strong>Crise migratoire :</strong> 2015, divisions profondes</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        <span>C. Des divergences persistantes</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Modèles sociaux :</strong> Nord vs Sud, libéralisme vs protectionnisme</p>
                        <p><strong>Modèles politiques :</strong> Fédéralistes vs intergouvernementalistes</p>
                        <p><strong>Économies :</strong> Allemagne (excédentaire) vs Italie (déficitaire)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* III.2. La stratégie de l'UE : le tournant actuel */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">III.2. La stratégie de l'UE : le tournant actuel</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        <span>A. Le réarmement de l'Europe : vers une autonomie stratégique</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Hausse des budgets de défense :</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Allemagne : "Zietenwende" (changement d'époque), 100 milliards d'euros pour l'armée</li>
                          <li>France : Loi de programmation militaire (LPM)</li>
                        </ul>
                        <p><strong>Coopération européenne :</strong> Programmes comme PESCO (Coopération structurée permanente)</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Coins className="h-5 w-5" />
                        <span>B. L'affirmation économique et technologique</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Politique industrielle :</strong> Soutien aux secteurs stratégiques (batteries, semi-conducteurs)</p>
                        <p><strong>Souveraineté numérique :</strong> RGPD, projets de cloud européen</p>
                        <p><strong>Commerce :</strong> Accords bilatéraux (ex: Japon, Canada)</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        <span>C. Une politique étrangère plus unie</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Haut représentant de l'Union pour les affaires étrangères et la politique de sécurité :</strong> Plus de cohérence</p>
                        <p><strong>Diplomatie :</strong> Rôle accru dans les négociations internationales (ex: accord nucléaire iranien)</p>
                        <p><strong>Sanctions :</strong> Utilisation des sanctions économiques comme outil diplomatique</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* III.3. L'Union Européenne est un groupement supranational formé de 27 pays... */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">III.3. L'Union Européenne est un groupement supranational formé de 27 pays...</h3>
                  <div className="space-y-6">
                    {/* 1/ L'UE, un acteur international */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        <span>A. L'UE, un acteur international unique</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Puissance normative :</strong> Influence par les valeurs et les règles (RGPD, critères de Copenhague)</p>
                        <p><strong>Puissance commerciale :</strong> Premier bloc commercial mondial</p>
                        <p><strong>Soft power :</strong> Attractivité du modèle européen, culture, éducation (Erasmus)</p>
                      </div>
                    </div>

                    {/* 2/ Défis internes et externes */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        <span>B. Défis et limites de l'action de l'UE</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Fragmentations internes :</strong> Désaccords entre États membres, égoïsmes nationaux</p>
                        <p><strong>Montée des populismes :</strong> Remise en question du projet européen</p>
                        <p><strong>Compétition géopolitique :</strong> Face à la Chine, aux États-Unis, à la Russie</p>
                      </div>
                    </div>

                    {/* 3/ Scénarios d'avenir */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        <span>C. Scénarios d'avenir pour l'Europe</span>
                      </h4>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p><strong>Fédéralisme accru :</strong> Plus d'intégration, une véritable puissance européenne</p>
                        <p><strong>Europe à plusieurs vitesses :</strong> Intégration différenciée selon les domaines et les pays</p>
                        <p><strong>Désintégration :</strong> Scénario du pire, retour aux nationalismes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        {/* Note */}
        <Card className="mt-8 bg-gray-50 border border-gray-200">
          <CardContent className="p-6">
            <p className="text-gray-700 text-sm">
              Cette page présente maintenant tout le contenu détaillé de l'Union européenne de manière linéaire,
              sans menus déroulants mais avec un style monochrome sobre pour une meilleure lisibilité.
            </p>
          </CardContent>
        </Card>

        {/* Navigation vers ressources */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Link to="/formation/geopolitique/chronologie-europe">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-carnet-red/40">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">Chronologie</h3>
                <p className="text-sm text-gray-600">Histoire européenne</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/union-europeenne/flashcards">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-orange-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-pr-orange-dark" />
                </div>
                <h3 className="font-semibold mb-2">Flashcards</h3>
                <p className="text-sm text-gray-600">Révision interactive</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/union-europeenne/etudes-de-cas">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-green-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <List className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Études de cas</h3>
                <p className="text-sm text-gray-600">Sujets de dissertation</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/union-europeenne/auteurs">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-purple-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Auteurs</h3>
                <p className="text-sm text-gray-600">Bibliographie essentielle</p>
              </CardContent>
            </Card>
          </Link>
        </div>

      </div>
    </div>
    </div>
  );
};
export default UnionEuropeennePageSimple;
