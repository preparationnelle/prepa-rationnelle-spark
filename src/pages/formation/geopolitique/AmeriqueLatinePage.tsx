import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Globe, Quote, AlertTriangle, CheckCircle } from 'lucide-react';

const AmeriqueLatinePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-amber-600 hover:text-amber-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-amber-600 hover:text-amber-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Amérique latine</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8" />
              <div>
                <CardTitle className="text-2xl font-bold">L'Amérique latine</CardTitle>
                <p className="text-amber-100 mt-2">
                  Entre rêve d'unité, influences extérieures et instabilités internes
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">33</div>
                <div className="text-sm text-amber-100">Pays</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">650M</div>
                <div className="text-sm text-amber-100">Habitants</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1810-1825</div>
                <div className="text-sm text-amber-100">Indépendances</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-amber-100">Ans d'histoire</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan de la dissertation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Plan de la dissertation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-800">I</Badge>
                  <span className="font-semibold">Historique de l'Amérique latine : entre rêve d'unité, influences extérieures et instabilités internes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-orange-100 text-orange-800">II</Badge>
                  <span className="font-semibold">Les défis structurels contemporains de l'Amérique latine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">III</Badge>
                  <span className="font-semibold">Perspectives d'avenir et enjeux géopolitiques</span>
                </div>
              </div>
              <div className="ml-6 space-y-2 text-sm text-gray-600">
                <div><strong>I.1</strong> - A. Le rêve d'une Amérique latine unie : l'idéal de Simon Bolivar</div>
                <div><strong>I.1</strong> - B. L'Amérique latine face aux États-Unis : entre autonomie et ingérence</div>
                <div><strong>I.1</strong> - C. Guerre froide et interventions américaines : la déstabilisation</div>
                <div><strong>I.2</strong> - A. Un retour forcé à une stratégie du secteur primaire</div>
                <div><strong>I.2</strong> - B. Ingérences externes et contrôle des infrastructures stratégiques</div>
                <div><strong>I.2</strong> - C. L'Amérique latine, une zone d'interface vulnérable aux influences extérieures</div>
                <div><strong>I.3</strong> - A. Un potentiel économique indéniable mais inexploité de manière durable</div>
                <div><strong>I.3</strong> - B. Des transformations incomplètes et inégalitaires</div>
                <div><strong>I.3</strong> - C. Des succès ponctuels mais jamais durables</div>
                <div><strong>II.1</strong> - A. Une dépendance historique aux matières premières</div>
                <div><strong>II.1</strong> - B. Le supercycle des matières premières : croissance et désillusion</div>
                <div><strong>II.1</strong> - C. La fin du supercycle : crise et virage libéral</div>
                <div><strong>II.2</strong> - A. Facteurs exogènes : influences extérieures sur la région</div>
                <div><strong>II.2</strong> - B. Facteurs endogènes : problèmes structurels internes</div>
                <div><strong>II.3</strong> - A. Une Amérique latine vulnérable aux crises économiques mondiales</div>
                <div><strong>II.3</strong> - B. L'insécurité et le narcotrafic comme obstacles à la stabilité</div>
                <div><strong>II.3</strong> - C. Le populisme et la polarisation politique : un facteur d'instabilité récurrent</div>
                <div><strong>III.1</strong> - A. Des inégalités structurelles marquées malgré des zones d'émergence</div>
                <div><strong>III.1</strong> - B. Étude de cas : Les inégalités urbaines à Rio de Janeiro</div>
                <div><strong>III.1</strong> - C. Rivalité Chine-États-Unis : une influence grandissante sur le développement</div>
                <div><strong>III.2</strong> - A. Les groupements supranationaux : une unité difficile à concrétiser</div>
                <div><strong>III.2</strong> - B. Plans sociaux et politiques pour lutter contre les inégalités</div>
                <div><strong>III.2</strong> - C. Intégration à la mondialisation libérale et ses limites</div>
                <div><strong>III.3</strong> - A. Un défi entre croissance économique et préservation environnementale</div>
                <div><strong>III.3</strong> - B. Démographie et urbanisation : opportunité ou frein au développement durable</div>
                <div><strong>III.3</strong> - C. Quelles stratégies pour un modèle de croissance soutenable</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu de la dissertation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-amber-600" />
              Développement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="i1">
                <AccordionTrigger className="text-lg">
                  I.1. Historique de l'Amérique latine : entre rêve d'unité, influences extérieures et instabilités internes
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction méthodologique */}
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                      <h4 className="font-semibold text-amber-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-amber-700">
                        <p>• Illustrer les aspirations historiques à une Amérique latine unie et souveraine (Bolivar, nationalismes)</p>
                        <p>• Montrer le poids des influences extérieures, notamment des États-Unis (Doctrine Monroe, Big Stick)</p>
                        <p>• Expliquer la déstabilisation causée par la Guerre froide (appui aux dictatures, interventions économiques et militaires)</p>
                        <p>• Analyser l'impact des ingérences américaines et des luttes de pouvoir internes sur le développement et la gouvernance</p>
                      </div>
                    </div>

                    {/* A. Le rêve d'une Amérique latine unie */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        A. Le rêve d'une Amérique latine unie : l'idéal de Simon Bolivar
                      </h4>
                      
                      {/* 1. Contexte historique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">1. Contexte historique</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Indépendances précoces (XIXᵉ siècle)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Figures emblématiques : Simón Bolívar, José de San Martín</li>
                              <li>Libération progressive du joug colonial espagnol et portugais</li>
                              <li>Mouvement d'émancipation continentale</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Rêve bolivarien</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Unir les États d'Amérique latine en une grande république</li>
                              <li>Projet de Grande Colombie (1819-1831)</li>
                              <li>Vision nationaliste et anti-impérialiste</li>
                              <li>Rejet de la domination européenne puis nord-américaine</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Citation emblématique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. Citation emblématique</h5>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <blockquote className="bg-white p-4 rounded border border-yellow-200 italic text-center">
                            <Quote className="h-5 w-5 text-yellow-600 inline mr-2" />
                            "Pauvre Mexique, si loin de Dieu, si près des États-Unis."
                            <footer className="text-sm text-gray-600 mt-2 font-normal">— Porfirio Díaz</footer>
                          </blockquote>
                          <div className="mt-3 text-sm text-gray-700">
                            <p><strong>Analyse :</strong> Cette citation illustre parfaitement la tension permanente entre l'Amérique latine et son voisin du Nord, révélant la contrainte géographique et géopolitique majeure de la région.</p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Échec du rêve d'unité */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">3. Échec du rêve d'unité</h5>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h6 className="font-semibold text-red-700 mb-2">Fragmentation rapide</h6>
                              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Dissolution de la Grande Colombie (1831)</li>
                                <li>Émergence d'États-nations séparés</li>
                                <li>Rivalités territoriales et économiques</li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h6 className="font-semibold text-red-700 mb-2">Causes de l'échec</h6>
                              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Influences extérieures persistantes</li>
                                <li>Querelles internes et élites locales</li>
                                <li>Disparités géographiques et culturelles</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <strong>Conséquence :</strong> Développement d'États-nations autonomes mais fragiles, vulnérables aux pressions extérieures
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. L'Amérique latine face aux États-Unis */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        B. L'Amérique latine face aux États-Unis : entre autonomie et ingérence
                      </h4>
                      
                      {/* 1. Une indépendance fragile */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Une indépendance fragile</h5>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>XIXᵉ siècle :</strong> Création des États-nations, mais souvent marqués par l'instabilité politique. 
                            Faiblesse institutionnelle, coups d'État récurrents, caudillisme.
                          </p>
                        </div>
                      </div>

                      {/* 2. Doctrine Monroe */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. Doctrine Monroe (1823)</h5>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h6 className="font-semibold text-blue-700 mb-2">"L'Amérique aux Américains"</h6>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Rejet officiel des interventions européennes</li>
                            <li>En réalité : ouverture à l'influence des États-Unis</li>
                            <li>Début d'une ingérence structurelle américaine</li>
                            <li>Substitution d'un impérialisme européen par un impérialisme américain</li>
                          </ul>
                        </div>
                      </div>

                      {/* 3. Big Stick Policy */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">3. Big Stick Policy (Corollaire Roosevelt, 1904)</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Renforcement de la domination américaine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Interventions militaires et économiques directes</li>
                              <li>Politique du "gros bâton" en Amérique centrale</li>
                              <li>Contrôle des voies commerciales stratégiques</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Exemples d'interventions</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Occupation de Cuba (1898) - Guerre hispano-américaine</li>
                              <li>Intervention au Nicaragua (1912) - Contrôle du canal</li>
                              <li>Occupation d'Haïti (1915-1934) - Stabilisation financière</li>
                              <li>Intervention en République dominicaine (1916-1924)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 4. Tentatives de résistance */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">4. Tentatives de résistance régionale</h5>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h6 className="font-semibold text-green-700 mb-2">Stratégies de coopération</h6>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Émergence de ZIR (Zones d'intégration régionale)</li>
                            <li>Dirigeants développementalistes</li>
                            <li>Protection des économies locales face aux pressions américaines</li>
                            <li>Nationalisme économique et substitution d'importations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* C. Guerre froide et interventions américaines */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-200 pb-2">
                        C. Guerre froide et interventions américaines : la déstabilisation de l'Amérique latine
                      </h4>
                      
                      {/* 1. Responsabilité des États-Unis */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">1. Responsabilité des États-Unis dans le soutien aux dictatures</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Logique de Guerre froide</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Peur du communisme en Amérique latine</li>
                              <li>Interventions directes et indirectes anti-communistes</li>
                              <li>Renversement systématique des gouvernements de gauche</li>
                              <li>Doctrine de sécurité nationale</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Soutien aux régimes militaires</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Argentine (Videla, 1976-1983)</li>
                              <li>Brésil (dictature militaire, 1964-1985)</li>
                              <li>Chili (Pinochet, 1973-1990)</li>
                              <li>Paraguay (Stroessner, 1954-1989)</li>
                              <li>Uruguay (dictature civico-militaire, 1973-1985)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Cas de Cuba */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">2. Cas de Cuba</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Révolution cubaine (1959)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Che Guevara et la théorie des "Focos"</li>
                              <li>Modèle révolutionnaire exportable</li>
                              <li>Alliance avec l'URSS</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Réaction américaine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Embargo économique (1962, toujours en vigueur)</li>
                              <li>Tentative d'invasion : Baie des Cochons (1961)</li>
                              <li>Opérations de la CIA contre Castro</li>
                              <li>Crise des missiles (1962)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Études de cas */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
                        Études de cas : interventions américaines et déstabilisation
                      </h4>
                      
                      {/* Guatemala 1954 */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">1. Guatemala (1954) : Sharp power, diplomatie du dollar et Républiques bananières</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Contexte</h6>
                            <p className="text-sm text-gray-700">
                              Le président Jacobo Árbenz tente une réforme agraire visant à redistribuer les terres non exploitées 
                              détenues par la United Fruit Company (UFC), une multinationale américaine.
                            </p>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Réaction des États-Unis</h6>
                            <p className="text-sm text-gray-700">
                              Opération PBSUCCESS (CIA, 1954) → coup d'État militaire orchestré contre un gouvernement démocratique.
                            </p>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Conséquences</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Instauration d'une junte militaire pro-américaine</li>
                              <li>Échec des réformes sociales, répression et violences politiques</li>
                              <li>Début d'une longue instabilité (guerre civile, 1960-1996)</li>
                              <li>Plus de 200 000 morts dans le conflit</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h6 className="font-semibold text-gray-700 mb-2">Importance géopolitique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Sharp power :</strong> Usage de la propagande et des élites locales</li>
                              <li><strong>Diplomatie du dollar :</strong> Contrôle via entreprises et prêts internationaux</li>
                              <li><strong>Républiques bananières :</strong> Dépendance totale aux entreprises américaines</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Chili 1973 */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">2. Chili (1973) : un cas emblématique de l'interventionnisme américain</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Contexte</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Élection de Salvador Allende (1970), premier président marxiste élu démocratiquement</li>
                              <li>Programme : nationalisations, réforme agraire, redistribution des richesses</li>
                              <li>Opposition forte des élites locales et des États-Unis</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Intervention américaine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Campagne de déstabilisation économique et sociale (CIA)</li>
                              <li>Sabotage, grèves organisées, pression financière</li>
                              <li>1973 : coup d'État militaire dirigé par Pinochet</li>
                              <li>Soutien logistique et financier américain</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Conséquences</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Mort de Salvador Allende, dictature militaire brutale (1973-1990)</li>
                              <li>Répression massive : plus de 3 000 assassinats, 40 000 prisonniers politiques</li>
                              <li>Choc économique et politiques néolibérales (Chicago Boys)</li>
                              <li>Soutien américain au Plan Condor (coordination des dictatures du Cône Sud)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion : Un continent marqué par l'héritage des ingérences
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine a connu une indépendance précoce, mais elle n'a jamais réellement échappé à l'influence des grandes puissances, notamment des États-Unis.</p>
                        
                        <p>→ Si Simon Bolívar rêvait d'une unité latino-américaine, les divisions internes et les interventions extérieures ont empêché cette vision de se concrétiser.</p>
                        
                        <p>→ La Guerre froide a aggravé cette dépendance en faisant de la région un champ de bataille idéologique entre les États-Unis et le bloc communiste.</p>
                        
                        <p>→ Aujourd'hui encore, l'Amérique latine peine à se détacher de ces héritages, alternant entre tentatives d'émancipation et retour sous influence américaine ou chinoise.</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i2">
                <AccordionTrigger className="text-lg">
                  I.2. Des ingérences extérieures et une économie toujours tournée vers le secteur primaire
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction méthodologique */}
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-orange-700">
                        <p>• Montrer la dépendance structurelle de l'Amérique latine aux matières premières et aux cycles économiques mondiaux</p>
                        <p>• Illustrer comment les ingérences extérieures ont renforcé cette orientation, en maintenant la région dans une logique d'exploitation des ressources plutôt que de diversification économique</p>
                        <p>• Analyser le rôle des puissances étrangères, notamment des États-Unis et de la Chine, dans la consolidation de cette dépendance</p>
                      </div>
                    </div>

                    {/* A. Un retour forcé à une stratégie du secteur primaire */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        A. Un retour forcé à une stratégie du secteur primaire
                      </h4>
                      
                      {/* 1. De l'ISI à la reprimarisation */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. De l'ISI à la reprimarisation de l'économie</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Tentative d'industrialisation par substitution des importations (ISI)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Période : années 1950-1980</li>
                              <li>Objectif : développer une industrie locale pour réduire les importations</li>
                              <li>Soutien étatique et protectionnisme commercial</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Échec relatif de l'ISI</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Manque d'innovation et de compétitivité technologique</li>
                              <li>Industries peu efficaces protégées artificiellement</li>
                              <li>Protectionnisme inefficace face à la concurrence internationale</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Reprimarisation depuis les années 2000</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Concept de José Antonio Ocampo :</strong> "reprimarisation" → retour à une économie fondée sur l'exportation de matières premières.
                            </p>
                            <p className="text-sm text-gray-700">
                              Abandon progressif des politiques industrielles au profit d'une spécialisation dans les ressources naturelles.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Spécialisation dépendante */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. Une spécialisation dépendante des ressources naturelles</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Dominance de l'agriculture et des minerais</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Soja :</strong> Brésil, Argentine</li>
                              <li><strong>Cuivre :</strong> Chili, Pérou</li>
                              <li><strong>Pétrole :</strong> Venezuela, Mexique</li>
                              <li><strong>Lithium :</strong> Bolivie, Argentine, Chili</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Corrélation avec la demande chinoise</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Hausse des exportations agricoles et énergétiques vers la Chine (2000-2015)</li>
                              <li>La Chine devient le premier partenaire commercial de nombreux pays</li>
                              <li>Réorientation des flux commerciaux vers l'Asie</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Dépendance aux cycles économiques mondiaux</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Chute des prix après 2014 :</strong> Crise économique régionale généralisée due à la baisse des cours des matières premières.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Vulnérabilité aux variations */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">3. Illustration de la vulnérabilité aux variations des cours</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Croissance forte des années 2000</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Boom des matières premières grâce à la demande chinoise</li>
                              <li>Croissance du PIB et amélioration des indicateurs sociaux</li>
                              <li>Renforcement des réserves de change</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Choc économique après 2014</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Baisse des prix des hydrocarbures et des métaux</li>
                              <li>Récession dans plusieurs pays de la région</li>
                              <li>Dégradation des comptes publics et externes</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Exemple du Venezuela</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Hyperinflation et effondrement économique</strong> après la chute des prix du pétrole. 
                              Le pays, dépendant à 95% des exportations pétrolières, illustre parfaitement cette vulnérabilité.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Ingérences externes et contrôle des infrastructures */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        B. Ingérences externes et contrôle des infrastructures stratégiques
                      </h4>
                      
                      {/* 1. États-Unis et canaux */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">1. Les États-Unis et le contrôle des canaux interocéaniques</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Canal de Panama (1914)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Enjeu stratégique clé pour Washington</li>
                              <li>Contrôle américain jusqu'en 1999</li>
                              <li>Rétrocession au Panama mais influence persistante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Projet de canal au Nicaragua (2013-2017)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Tentative chinoise pour concurrencer le canal de Panama</li>
                              <li>Projet de canal interocéanique financé par des capitaux chinois</li>
                              <li>Échec du projet : pression américaine, instabilité politique, obstacles environnementaux</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Entrisme chinois */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">2. L'"entrisme" économique et politique de la Chine en Amérique latine</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Rachat et construction d'infrastructures stratégiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Ports : Chancay au Pérou, terminaux au Brésil</li>
                              <li>Routes et chemins de fer : projets d'intégration continentale</li>
                              <li>Centrales électriques et barrages hydroélectriques</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Soutien politique aux régimes anti-américains</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Nicaragua de Daniel Ortega</li>
                              <li>Venezuela de Maduro</li>
                              <li>Bolivie sous Evo Morales</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Prêts massifs et investissements directs</h6>
                            <p className="text-sm text-gray-700">
                              Dépendance accrue des économies latino-américaines à la Chine via les crédits 
                              et les investissements dans les infrastructures et l'extractif.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Cas du Nicaragua */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">3. Le Nicaragua : un cas d'école de la géoéconomie chinoise</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Construction d'infrastructures financées par la Chine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Routes et autoroutes</li>
                              <li>Stades et équipements sportifs</li>
                              <li>Systèmes de transport urbain</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Appui à un régime anti-américain</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Continuité du sandinisme :</strong> Soutien de Pékin à Daniel Ortega 
                              comme contrepoids à l'influence américaine en Amérique centrale.
                            </p>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h6 className="font-semibold text-gray-700 mb-2">Résultat mitigé</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Avantage économique attendu :</strong> Ouverture de nouvelles routes commerciales, 
                              mais projet de canal avorté et retour sur investissement limité.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Zone d'interface vulnérable */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-teal-200 pb-2">
                        C. L'Amérique latine, une zone d'interface vulnérable aux influences extérieures
                      </h4>
                      
                      {/* 1. Espace maritime convoité */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-teal-800 mb-4">1. Un espace maritime convoité : la mer des Caraïbes</h5>
                        <div className="space-y-4">
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-teal-700 mb-2">Une "méditerranée américaine"</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Concept d'Élisée Reclus :</strong> Carrefour des échanges entre Amérique, Europe et Asie</li>
                              <li>Position géostratégique majeure pour le commerce international</li>
                              <li>Contrôle des routes maritimes vers le canal de Panama</li>
                            </ul>
                          </div>
                          
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-teal-700 mb-2">Zone sous influence historique des États-Unis</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Rôle stratégique du contrôle des routes maritimes</li>
                              <li>Bases navales américaines dans la région</li>
                              <li>Surveillance des flux commerciaux et militaires</li>
                            </ul>
                          </div>
                          
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-teal-700 mb-2">Présence de paradis fiscaux</h6>
                            <p className="text-sm text-gray-700">
                              Finance offshore et évasion fiscale favorisées par la multiplication 
                              des centres financiers dans les Caraïbes.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Étude de cas paradis fiscaux */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Étude de cas : paradis fiscaux et flux financiers opaques</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Centres financiers offshore</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Belize :</strong> Juridiction complaisante pour les sociétés offshore</li>
                              <li><strong>Panama :</strong> Zone franche de Colón, secret bancaire</li>
                              <li><strong>République dominicaine :</strong> Facilités pour les investissements étrangers</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Panama Papers (2016)</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Révélations majeures :</strong> Évasion fiscale à grande échelle par des élites internationales 
                              utilisant les services du cabinet Mossack Fonseca. Impact sur la réputation de Panama 
                              comme centre financier offshore.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Domination extérieure */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-gray-800 mb-4">3. Un espace encore largement sous domination extérieure</h5>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-gray-700 mb-2">Économies dépendantes des grandes puissances</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Décisions économiques influencées par les États-Unis, la Chine et l'UE</li>
                              <li>Vulnérabilité aux sanctions et pressions économiques</li>
                              <li>Dépendance technologique et financière</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-gray-700 mb-2">Spécialisation contrainte</h6>
                            <p className="text-sm text-gray-700">
                              Spécialisation économique largement déterminée par les acteurs étrangers, 
                              limitant la souveraineté régionale et les capacités de diversification autonome.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine, malgré ses tentatives d'industrialisation, reste piégée dans une logique d'exportation de matières premières, accentuée par les ingérences étrangères.</p>
                        
                        <p>→ Les États-Unis continuent d'exercer un contrôle stratégique sur certaines infrastructures clés, tandis que la Chine investit massivement pour renforcer son influence.</p>
                        
                        <p>→ Face à ces pressions extérieures et à leur dépendance économique, les États latino-américains peinent à diversifier leurs économies et à réduire leur vulnérabilité aux crises mondiales.</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i3">
                <AccordionTrigger className="text-lg">
                  I.3. Un développement toujours inachevé : les paradoxes de l'émergence en Amérique latine
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction méthodologique */}
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-purple-700">
                        <p>• Illustrer les opportunités naturelles et économiques du continent, mais aussi les limites structurelles qui empêchent un développement durable</p>
                        <p>• Montrer comment l'Amérique latine a adopté des stratégies de développement successives, souvent en réaction à la demande mondiale, sans parvenir à stabiliser un modèle propre</p>
                        <p>• Analyser l'impact des interventions extérieures et de la dépendance aux cycles économiques internationaux sur l'échec relatif de l'industrialisation</p>
                      </div>
                    </div>

                    {/* A. Un potentiel économique indéniable */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        A. Un potentiel économique indéniable mais inexploité de manière durable
                      </h4>
                      
                      {/* 1. Atouts majeurs */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. Des atouts majeurs pour une insertion réussie dans la mondialisation</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Ressources naturelles abondantes</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Pétrole :</strong> Venezuela (premières réserves mondiales), Mexique</li>
                              <li><strong>Minerais :</strong> Chili (cuivre), Pérou (cuivre, or), Bolivie (lithium)</li>
                              <li><strong>Terres agricoles :</strong> Brésil (soja, café), Argentine (blé, bœuf)</li>
                              <li><strong>Forêts tropicales :</strong> Amazonie (biodiversité, régulation climatique)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Avantages géographiques et démographiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Superficie et climat favorables :</strong> Diversité des productions agricoles, potentiel hydroélectrique</li>
                              <li><strong>Population jeune et dynamique :</strong> Potentiel démographique, main-d'œuvre disponible</li>
                              <li><strong>Proximité avec les États-Unis :</strong> Marché gigantesque, opportunités d'exportation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Alternance des modèles */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. Une alternance constante entre différents modèles de développement</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Évolution chronologique des stratégies</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Avant 1950 :</strong> Stratégie d'extraversion fondée sur les matières premières → exportation brute</li>
                              <li><strong>1950-1980 :</strong> Industrialisation par substitution aux importations (ISI) → produire localement</li>
                              <li><strong>1980-2000 :</strong> Tournant libéral imposé par le FMI et le Consensus de Washington → privatisations</li>
                              <li><strong>2000-2010 :</strong> Boom des matières premières grâce à la demande chinoise → reprise sans transformation</li>
                              <li><strong>Depuis 2014 :</strong> Chute des cours, récession et retour à la dépendance aux cycles mondiaux</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Dépendance persistante */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">3. Illustration : une économie toujours dépendante des matières premières</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Théorie de Raúl Prebisch</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Détérioration des termes de l'échange :</strong> L'Amérique latine, spécialisée dans les matières premières, 
                              échange ses ressources contre des produits manufacturés, ce qui freine structurellement son développement.
                            </p>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">"Reprimarisation" de l'économie</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Dès 2004 : retour à une économie fondée sur l'exportation de produits bruts</li>
                              <li>Au XXIe siècle : les exportations de produits bruts représentent encore 2/3 des exportations totales</li>
                              <li>Les cycles économiques façonnent la région → crises récurrentes liées aux fluctuations des prix</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Des transformations incomplètes */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-200 pb-2">
                        B. Des transformations incomplètes et inégalitaires
                      </h4>
                      
                      {/* 1. Industrialisation contrariée */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">1. Une industrialisation contrariée : de l'ISI aux privatisations libérales</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Échec du protectionnisme</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>"Protectionnisme à l'envers" :</strong> Les pays n'ont pas su protéger efficacement leurs industries naissantes</li>
                              <li>Contrairement au "protectionnisme listien" (éducateur), manque de stratégie cohérente</li>
                              <li>Industries peu compétitives face à la concurrence mondiale</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Privatisations massives (1980-1990)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Ouverture brutale aux capitaux étrangers</li>
                              <li>Conséquences sociales souvent désastreuses</li>
                              <li><strong>Exemple :</strong> Argentine et la crise de 2001 → échec des réformes, explosion de la dette, paupérisation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Inégalités sociales */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. Des inégalités sociales et foncières criantes</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Concentration foncière</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Millions de paysans sans terre au Brésil :</strong> 4 grands groupes concentrent l'essentiel des terres</li>
                              <li>Conflits fonciers et mouvements alter-mondialistes → MST (Brésil), Zapatistes (Mexique)</li>
                              <li>Persistance des structures coloniales dans la répartition des richesses</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Structures héritées</h6>
                            <p className="text-sm text-gray-700">
                              Grandes familles et multinationales contrôlent l'essentiel des ressources, 
                              perpétuant les inégalités héritées de la période coloniale.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Problème migratoire */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-teal-800 mb-4">3. L'Amérique latine face aux migrations : un problème historique et actuel</h5>
                        <div className="space-y-4">
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-teal-700 mb-2">Profondeur historique des migrations Mexique-USA</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Programme Bracero (1942) :</strong> Recrutement de travailleurs agricoles mexicains par les États-Unis</li>
                              <li>Besoin de main-d'œuvre durant la Seconde Guerre mondiale</li>
                              <li>Établissement de flux migratoires durables</li>
                            </ul>
                          </div>
                          
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-teal-700 mb-2">Situation contemporaine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Persistance des flux migratoires illégaux → traversée du Rio Grande</li>
                              <li><strong>Durcissement des politiques :</strong> Fence Act sous Bush et Trump, mur à la frontière</li>
                              <li>Crise des enfants migrants sous Biden, tensions politiques persistantes</li>
                              <li>Industrie des Maquiladoras → délocalisation industrielle à la frontière</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Des succès ponctuels mais jamais durables */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        C. Des succès ponctuels mais jamais durables
                      </h4>
                      
                      {/* 1. Espoir d'émancipation géopolitique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Un espoir d'émancipation géopolitique souvent avorté</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Tentatives d'indépendance contrariées</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Interventions directes des États-Unis : Chili (1973), Grenade (1983), Panama (1989)</li>
                              <li>Soutien aux coups d'État et régimes autoritaires</li>
                              <li>Élimination systématique des gouvernements non alignés</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Les guerres de la Guerre froide en Amérique latine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Guatemala (1954) → intervention de la CIA</li>
                              <li>Baie des Cochons (1961) → tentative de renversement de Castro</li>
                              <li>Chili (1973) → coup d'État contre Allende</li>
                              <li>Nicaragua → guerre civile soutenue par les États-Unis</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Isolement de Cuba</h6>
                            <p className="text-sm text-gray-700">
                              La fin de l'URSS plonge Cuba dans l'isolement → embargo américain renforcé, 
                              effondrement économique dans les années 1990.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Modèle dicté par les cycles */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. Un modèle de développement dicté par les cycles économiques mondiaux</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Cycles de crise et adaptation</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>1930 :</strong> Crise de 1929 → nécessité de produire localement, début de l'ISI</li>
                              <li><strong>1960 :</strong> Relative réussite de l'ISI, mais essoufflement progressif</li>
                              <li><strong>1980 :</strong> Crise de la dette → tournant libéral imposé par le FMI et la Banque mondiale</li>
                              <li><strong>2001 :</strong> Effondrement économique en Argentine, cessation de paiement</li>
                              <li><strong>2000-2010 :</strong> Boom des matières premières, croissance rapide</li>
                              <li><strong>2010-2020 :</strong> Nouvelle crise, stagnation des économies</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Espoirs déçus */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">3. Le temps des "pays neufs" et les espoirs d'émergence déçus</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">L'exemple argentin</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Début XXe siècle :</strong> L'Argentine sur la voie du développement, comparable aux économies européennes</li>
                              <li><strong>Trois effondrements majeurs :</strong> Crise de 1929, crise de la dette (1980), crise de 2001</li>
                              <li>Retour systématique à une économie extravertie et dépendante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Crise argentine de 2001</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Cessation de paiement :</strong> Incapacité de rembourser la dette, le peso perd 99% de sa valeur 
                              par rapport à l'euro entre 1998-2002. Retour forcé à une économie non diversifiée.
                            </p>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Tentatives de diversification</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Mercosur-UE :</strong> L'UE devient le 3e partenaire commercial de l'Amérique latine</li>
                              <li><strong>Retrait progressif de l'Europe :</strong> 5% des exportations vers l'Europe vs 80% vers l'Amérique du Nord</li>
                              <li><strong>Accords de Cotonou (2000) :</strong> Les Caraïbes s'affranchissent partiellement avec l'UE-ACP</li>
                              <li><strong>Montée de la Chine :</strong> Nouveau partenaire stratégique pour diminuer la dépendance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine possède des atouts considérables, mais ses choix de développement ont toujours été dictés par les conditions extérieures et non par une stratégie autonome et durable.</p>
                        
                        <p>→ L'alternance constante entre industrialisation et retour aux matières premières a empêché la construction d'un modèle économique stable.</p>
                        
                        <p>→ Les inégalités sociales et foncières, les ingérences extérieures et la dépendance aux cycles mondiaux freinent toute tentative de transformation profonde.</p>
                        
                        <p>→ La région reste à la croisée des chemins : peut-elle enfin s'émanciper de ses dépendances historiques ou restera-t-elle une "perpétuelle promesse" d'émergence ?</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii1">
                <AccordionTrigger className="text-lg">
                  II.1. La dépendance structurelle de l'Amérique latine aux matières premières
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction méthodologique */}
                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-indigo-700">
                        <p>• Illustrer comment l'Amérique latine est historiquement une économie d'exportation dépendante des cycles mondiaux</p>
                        <p>• Montrer l'impact des supercycles des matières premières sur son développement économique et politique</p>
                        <p>• Analyser les limites de cette dépendance : faible industrialisation, instabilité sociale et politique, vulnérabilité aux crises extérieures</p>
                      </div>
                    </div>

                    {/* A. Une dépendance historique aux matières premières */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-brown-200 pb-2">
                        A. Une dépendance historique aux matières premières
                      </h4>
                      
                      {/* 1. Économie extravertie */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-brown-800 mb-4">1. Une économie extravertie depuis le XIXᵉ siècle</h5>
                        <div className="space-y-4">
                          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <h6 className="font-semibold text-amber-800 mb-2">L'Amérique latine devient un "grenier du monde"</h6>
                            <p className="text-sm text-gray-700 mb-3">
                              Dès le XIXᵉ siècle, exportation massive de matières premières vers l'Europe et l'Amérique du Nord :
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Café :</strong> Brésil, Colombie</li>
                              <li><strong>Sucre :</strong> Cuba</li>
                              <li><strong>Bananes :</strong> Guatemala</li>
                              <li><strong>Viande :</strong> Argentine (essor des bateaux frigorifiques)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h6 className="font-semibold text-yellow-800 mb-2">Ouvrage clé : Eduardo Galeano</h6>
                            <div className="space-y-3">
                              <p className="text-sm text-gray-700">
                                <strong>Les Veines ouvertes de l'Amérique latine (1971)</strong>
                              </p>
                              <blockquote className="bg-white p-3 rounded border border-yellow-300 italic text-sm text-gray-700">
                                "Notre partie du monde, appelée aujourd'hui Amérique latine, s'est prématurément consacrée à perdre 
                                depuis les temps lointains où les Européens de la Renaissance s'élancèrent sur l'Océan pour lui rentrer les dents dans la gorge."
                              </blockquote>
                              <p className="text-sm text-gray-700">
                                <strong>Métaphore :</strong> Un continent "vidé de son sang" pour alimenter les économies du Nord.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. Effets pervers */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">2. Les effets pervers de la dépendance aux matières premières</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Conséquences structurelles</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Spécialisation excessive :</strong> Absence de diversification économique</li>
                              <li><strong>Dépendance aux cycles mondiaux :</strong> L'essor et la chute des cours déterminent croissance et récession</li>
                              <li><strong>Faible création d'emplois :</strong> Contrairement au XIXᵉ siècle, les secteurs miniers et agricoles sont mécanisés</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Cercle vicieux</h6>
                            <p className="text-sm text-gray-700">
                              Les secteurs extractifs n'absorbent pas la main-d'œuvre disponible, créant du chômage structurel 
                              et empêchant le développement d'une classe moyenne industrielle.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Le supercycle des matières premières */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        B. Le supercycle des matières premières : croissance et désillusion
                      </h4>
                      
                      {/* 1. L'embellie des années 2000 */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. L'embellie des années 2000 grâce à la demande chinoise</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Supercycle des matières premières (2000-2014)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Hausse des cours du pétrole, des métaux et des produits agricoles</li>
                              <li>Forte demande chinoise en ressources naturelles pour son industrialisation</li>
                              <li>Croissance économique soutenue dans toute la région</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Profiteurs du boom chinois</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Pétrole :</strong> Venezuela, Mexique</li>
                              <li><strong>Cuivre :</strong> Chili, Pérou</li>
                              <li><strong>Soja :</strong> Brésil, Argentine</li>
                              <li><strong>Minerai de fer :</strong> Brésil</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h6 className="font-semibold text-blue-800 mb-2">Ouvrage clé : Georges Couffignal</h6>
                            <div className="space-y-2">
                              <p className="text-sm text-gray-700">
                                <strong>L'Amérique latine est bien partie (2011)</strong>
                              </p>
                              <p className="text-sm text-gray-700">
                                Constat optimiste sur la croissance et les progrès sociaux des années 2000. 
                                L'auteur anticipe une émergence durable de la région.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. L'essor des politiques sociales */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">2. L'essor des politiques sociales grâce aux exportations</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Financement des programmes sociaux</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              Les bénéfices tirés des matières premières permettent aux gouvernements de financer 
                              des programmes sociaux ambitieux.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Investissements dans l'éducation et la santé</li>
                              <li>Programmes de redistribution des richesses</li>
                              <li>Réduction de la pauvreté et des inégalités</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Basculement à gauche dans les années 2000</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>1999 :</strong> Hugo Chávez (Venezuela) - "Révolution bolivarienne"</li>
                              <li><strong>2002 :</strong> Lula (Brésil) - Programmes sociaux massifs (Bolsa Família)</li>
                              <li><strong>2006 :</strong> Evo Morales (Bolivie) - Nationalisation des hydrocarbures</li>
                              <li><strong>2007 :</strong> Rafael Correa (Équateur) - Constitution de Montecristi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. La fin du supercycle */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        C. La fin du supercycle : crise et virage libéral
                      </h4>
                      
                      {/* 1. Chute brutale des cours */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Une chute brutale des cours des matières premières après 2014</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Chronologie de la crise</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>2008 :</strong> Premier ralentissement avec la crise financière mondiale</li>
                              <li><strong>2014-2015 :</strong> Effondrement durable avec la baisse de la demande chinoise</li>
                              <li><strong>2016 :</strong> Aggravation de la crise, récession généralisée</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Conséquences économiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Récession :</strong> Argentine et Brésil entrent en récession profonde</li>
                              <li><strong>Hyperinflation :</strong> Effondrement économique du Venezuela</li>
                              <li><strong>Dévaluation :</strong> Chute des monnaies locales</li>
                              <li><strong>Dette publique :</strong> Hausse brutale des déficits budgétaires</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Retour aux crises politiques */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Un retour aux crises politiques et sociales</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Fragilisation des gouvernements de gauche</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              Le ralentissement économique fragilise les gouvernements de gauche et entraîne des tensions sociales.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li>Fin du financement des programmes sociaux</li>
                              <li>Montée du mécontentement populaire</li>
                              <li>Crise de légitimité des gouvernements</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Exemples de crises</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>2016 :</strong> Destitution de Dilma Rousseff (Brésil) - Crise économique et scandales de corruption</li>
                              <li><strong>Venezuela :</strong> Crise économique et humanitaire → pénuries alimentaires, migrations massives vers la Colombie</li>
                              <li><strong>Argentine :</strong> Retour de la crise de la dette et de l'inflation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Virage libéral */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">3. Un virage libéral dans les années 2015-2020</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Retour de gouvernements pro-marché</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>2015 :</strong> Mauricio Macri (Argentine) - Libéralisation de l'économie</li>
                              <li><strong>2016 :</strong> Michel Temer (Brésil) - Austérité budgétaire</li>
                              <li><strong>2018 :</strong> Sebastián Piñera (Chili), Jair Bolsonaro (Brésil)</li>
                              <li><strong>2019 :</strong> Iván Duque (Colombie)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Politiques néolibérales</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Dérégulation :</strong> Assouplissement des règles du marché du travail</li>
                              <li><strong>Réduction des dépenses sociales :</strong> Coupes dans les programmes sociaux</li>
                              <li><strong>Réformes pro-investissements :</strong> Facilitation des investissements étrangers</li>
                              <li><strong>Privatisations :</strong> Retour au secteur privé d'entreprises publiques</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine reste piégée dans un modèle économique dépendant des matières premières, incapable de développer une industrie compétitive.</p>
                        
                        <p>→ Le supercycle des matières premières a offert une embellie temporaire, mais sans transformation structurelle, ce qui a entraîné une rechute brutale après 2014.</p>
                        
                        <p>→ Les crises politiques et sociales qui en découlent montrent que tant que l'Amérique latine restera dépendante de la demande extérieure, elle restera vulnérable aux fluctuations du marché mondial.</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii2">
                <AccordionTrigger className="text-lg">
                  II.2. Les facteurs qui influencent l'Amérique latine
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction typologie */}
                    <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                      <h4 className="font-semibold text-cyan-800 mb-4">Typologie des facteurs influençant l'Amérique latine</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-700">
                        <div className="bg-white p-3 rounded border border-cyan-200">
                          <h5 className="font-semibold text-cyan-800 mb-2">Facteurs exogènes</h5>
                          <p>Influences extérieures sur la région</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-cyan-200">
                          <h5 className="font-semibold text-cyan-800 mb-2">Facteurs endogènes</h5>
                          <p>Problèmes structurels internes à la région</p>
                        </div>
                      </div>
                    </div>

                    {/* A. Facteurs exogènes */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        A. Facteurs exogènes : influences extérieures sur la région
                      </h4>
                      
                      {/* 1. Ingérences des grandes puissances */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Ingérences des grandes puissances</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Héritage de la domination américaine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Doctrine Monroe (1823) et Big Stick :</strong> Interventions répétées des États-Unis pour contrôler la région</li>
                              <li><strong>Guerre froide :</strong> Soutien aux dictatures militaires pour éviter l'influence communiste</li>
                              <li><strong>Exemples d'interventions :</strong> Guatemala (1954), Chili (1973), Grenade (1983)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Influence économique chinoise croissante</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Investissements massifs :</strong> Infrastructures, ports, routes (Initiative Belt and Road)</li>
                              <li><strong>Extraction de matières premières :</strong> Accords commerciaux privilégiés avec le Brésil, le Chili, le Pérou</li>
                              <li><strong>Concurrence géopolitique :</strong> Alternative au modèle américain, soutien aux régimes anti-occidentaux</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Nouvelles formes d'influence</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Soft power :</strong> Influence culturelle et diplomatique</li>
                              <li><strong>Conditionnalités économiques :</strong> FMI, Banque mondiale, accords commerciaux</li>
                              <li><strong>Pressions migratoires :</strong> Politiques américaines impactant les flux régionaux</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Crises économiques et dépendance */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Crises économiques et dépendance aux cycles mondiaux</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Impact des crises financières mondiales</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>1929 :</strong> Récession brutale, effondrement des exportations agricoles</li>
                              <li><strong>1982 :</strong> Crise de la dette latino-américaine, "décennie perdue"</li>
                              <li><strong>2008 :</strong> Chute des exportations, récession dans toute la région</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Fluctuation des cours des matières premières</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>2014-2015 :</strong> Effondrement des prix du pétrole et du cuivre → récession généralisée</li>
                              <li><strong>Vulnérabilité structurelle :</strong> Économies dépendantes des cours mondiaux</li>
                              <li><strong>Manque de diversification :</strong> Incapacité à amortir les chocs externes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Criminalité transnationale */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">3. Criminalité transnationale et trafic illicite</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Narcotrafic structuré et influent</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Cartels mexicains :</strong> Sinaloa, Jalisco Nueva Generación → contrôle territorial</li>
                              <li><strong>Routes de la cocaïne :</strong> Colombie → États-Unis via l'Amérique centrale</li>
                              <li><strong>Impact économique :</strong> Économie parallèle représentant des milliards de dollars</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Corruption et collusion avec les gouvernements</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Scandale Odebrecht (Brésil) :</strong> Corruption transnationale dans 12 pays</li>
                              <li><strong>Infiltration des cartels :</strong> Police, justice, politiques corrompus</li>
                              <li><strong>État de droit fragilisé :</strong> Institutions publiques délégitimées</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Trafic d'armes et instabilité régionale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Flux d'armes :</strong> Des États-Unis vers l'Amérique centrale</li>
                              <li><strong>Renforcement des gangs :</strong> MS-13, Barrio 18 en Amérique centrale</li>
                              <li><strong>Spirale de violence :</strong> Taux d'homicides parmi les plus élevés au monde</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Facteurs endogènes */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        B. Facteurs endogènes : problèmes structurels internes à la région
                      </h4>
                      
                      {/* 1. Instabilité politique chronique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. Instabilité politique chronique</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Coups d'État et crises institutionnelles</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Bolivie (2019) :</strong> Crise post-électorale, démission d'Evo Morales</li>
                              <li><strong>Pérou (2022) :</strong> Destitution de Pedro Castillo, instabilité chronique</li>
                              <li><strong>Venezuela :</strong> Effondrement démocratique sous Maduro, crise constitutionnelle</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Alternance brutale entre populisme et néolibéralisme</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Brésil :</strong> Lula vs Bolsonaro → polarisation politique extrême</li>
                              <li><strong>Argentine :</strong> Kirchner vs Macri → cycles politiques contradictoires</li>
                              <li><strong>Absence de consensus :</strong> Pas de modèle de développement durable</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Faiblesse des institutions */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. Faiblesse des institutions et corruption systémique</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Gouvernements inefficaces et clientélistes</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Absence de continuité :</strong> Politiques publiques remises en cause à chaque alternance</li>
                              <li><strong>Clientélisme :</strong> Distribution de ressources selon la loyauté politique</li>
                              <li><strong>Bureaucratie inefficace :</strong> Lenteur administrative, manque de transparence</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Corruption massive dans les secteurs publics et privés</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Petrobras et Odebrecht (Brésil) :</strong> Détournements de milliards d'euros</li>
                              <li><strong>Scandale des BTP (Argentine) :</strong> Corruption dans les travaux publics</li>
                              <li><strong>Transparency International (2021) :</strong> L'Amérique latine parmi les régions les plus corrompues</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Inégalités sociales */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">3. Inégalités sociales et tensions ethniques</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Une des régions les plus inégalitaires du monde</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Concentration des richesses :</strong> 10% des plus riches possèdent plus de 50% des ressources</li>
                              <li><strong>Coefficient de Gini :</strong> Parmi les plus élevés au monde</li>
                              <li><strong>Classe moyenne fragile :</strong> Vulnérable aux crises économiques</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Opposition villes/ruralités et tensions ethniques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Marginalisation rurale :</strong> Populations indigènes exclues (Pérou, Équateur, Bolivie)</li>
                              <li><strong>Fracture urbaine :</strong> Bidonvilles vs quartiers riches</li>
                              <li><strong>Conflits fonciers :</strong> Accaparement des terres par les multinationales</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Violences de genre et patriarcat dominant</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Féminicides élevés :</strong> Taux parmi les plus hauts au monde</li>
                              <li><strong>Mouvement Ni Una Menos :</strong> Mobilisation en Argentine et au Mexique</li>
                              <li><strong>Inégalités structurelles :</strong> Accès limité à l'éducation et à l'emploi pour les femmes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 4. Stratégies de rente */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">4. Stratégies de rente et dépendance aux matières premières</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Modèle économique basé sur l'exportation</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Peu d'innovation :</strong> Faibles investissements dans la R&D</li>
                              <li><strong>Industrialisation limitée :</strong> Secteur manufacturier peu développé</li>
                              <li><strong>Éducation technique insuffisante :</strong> Manque de main-d'œuvre qualifiée</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Rente pétrolière et instabilité</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Venezuela :</strong> Effondrement après la chute du pétrole, hyperinflation</li>
                              <li><strong>Mexique :</strong> Pemex en difficulté, réformes énergétiques contestées</li>
                              <li><strong>Malédiction des ressources :</strong> Richesses naturelles = faible développement</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Peu de diversification économique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Agriculture traditionnelle :</strong> Peu de valeur ajoutée, faible productivité</li>
                              <li><strong>Industrie non compétitive :</strong> Protection artificielle, manque d'innovation</li>
                              <li><strong>Services limités :</strong> Secteur tertiaire peu développé sauf dans les grandes villes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine est marquée par un double enchevêtrement de facteurs exogènes et endogènes qui freinent son émergence durable.</p>
                        
                        <p>→ Les ingérences extérieures et la dépendance aux cycles mondiaux fragilisent la région, tandis que la corruption, l'instabilité politique et les inégalités sociales limitent les réformes structurelles.</p>
                        
                        <p>→ Une alternative est-elle possible ? La diversification économique et la consolidation démocratique suffiront-elles à stabiliser la région ?</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii3">
                <AccordionTrigger className="text-lg">
                  II.3. Une typologie des crises en Amérique latine
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* Introduction méthodologique */}
                    <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                      <h4 className="font-semibold text-rose-800 mb-4">Utilisation de cette partie dans une copie</h4>
                      <div className="space-y-3 text-sm text-rose-700">
                        <p>• Illustrer la diversité des crises en Amérique latine, qui vont au-delà des seules difficultés économiques</p>
                        <p>• Analyser l'impact des facteurs structurels et conjoncturels dans l'instabilité régionale</p>
                        <p>• Mettre en évidence les liens entre crise économique, crise politique et insécurité (narcotrafic, corruption, effondrement des États)</p>
                        <p>• Montrer comment les États-Unis et d'autres puissances influencent ces crises, parfois en les amplifiant</p>
                      </div>
                    </div>

                    {/* A. Vulnérabilité aux crises économiques mondiales */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        A. Une Amérique latine vulnérable aux crises économiques mondiales
                      </h4>
                      
                      {/* 1. Dépendance structurelle */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Une dépendance structurelle aux marchés extérieurs</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Mécanismes de vulnérabilité</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              Les crises économiques en Amérique latine sont souvent déclenchées par des facteurs extérieurs :
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Chute des cours des matières premières :</strong> Impact direct sur les recettes d'exportation</li>
                              <li><strong>Retrait des capitaux étrangers :</strong> Fuite des investissements en période d'incertitude</li>
                              <li><strong>Effondrement des exportations :</strong> Réduction de la demande des pays développés</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Crise de 1929 */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Crise de 1929 : une déstabilisation brutale</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Dépendance au marché américain</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              En 1929, les États-Unis étaient le débouché principal de l'Amérique latine :
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>40% des exportations du Brésil</strong> vers les États-Unis</li>
                              <li><strong>60% des exportations du Mexique</strong> vers les États-Unis</li>
                              <li><strong>75% des exportations de la Colombie et de Cuba</strong> vers les États-Unis</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Conséquences dramatiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Chute brutale de la demande américaine</strong> → effondrement économique régional</li>
                              <li><strong>Explosion du chômage :</strong> Mexique passe de 100 000 chômeurs (1928) à 1 million (1930)</li>
                              <li><strong>Crise sociale généralisée :</strong> Pauvreté, tensions politiques, instabilité</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Effet Tequila */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">3. Crise du peso et "Effet Tequila" (Mexique, 1994-1995)</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Contexte et déclenchement</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Décembre 1994 :</strong> Dévaluation brutale du peso mexicain</li>
                              <li><strong>Surévaluation préalable :</strong> Politique de change non soutenable</li>
                              <li><strong>Déficit courant important :</strong> Financement par capitaux courts-termistes</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Conséquences immédiates</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Fuite des capitaux étrangers :</strong> Retrait massif des investisseurs</li>
                              <li><strong>Effondrement du peso :</strong> Dévaluation de plus de 50%</li>
                              <li><strong>Crise bancaire :</strong> Système financier en difficulté</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Propagation régionale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Impact négatif en Amérique du Sud :</strong> Contagion financière</li>
                              <li><strong>Instabilité financière :</strong> Plusieurs pays affectés</li>
                              <li><strong>Perte de confiance :</strong> Marchés émergents latino-américains stigmatisés</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 4. Venezuela */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">4. Le Venezuela : une crise systémique et protéiforme</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Crise économique multidimensionnelle</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Hyperinflation :</strong> Plus de 1 000 000% en 2018</li>
                              <li><strong>Effondrement de la production pétrolière :</strong> Chute de 3,2M à 0,7M barils/jour</li>
                              <li><strong>Pénuries massives :</strong> Alimentation, médicaments, carburant</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Crise politique et institutionnelle</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Opposition chavistes vs anti-chavistes :</strong> Polarisation extrême</li>
                              <li><strong>Contestations violentes :</strong> Manifestations réprimées</li>
                              <li><strong>Crise constitutionnelle :</strong> Légitimité du pouvoir contestée</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Crise migratoire régionale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>1,6 million de Vénézuéliens</strong> ont quitté le pays</li>
                              <li><strong>Destinations principales :</strong> Colombie, Brésil, Pérou, États-Unis</li>
                              <li><strong>Impact régional :</strong> Pression sur les pays d'accueil</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. L'insécurité et le narcotrafic */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-200 pb-2">
                        B. L'insécurité et le narcotrafic comme obstacles à la stabilité
                      </h4>
                      
                      {/* 1. Émergence du narcotrafic */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">1. L'émergence du narcotrafic et son impact géopolitique</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Un État parallèle depuis les années 1980</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              Le narcotrafic est devenu un État parallèle en Amérique latine, contrecarrant l'autorité des gouvernements.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Contrôle territorial :</strong> Zones entières sous autorité des cartels</li>
                              <li><strong>Justice parallèle :</strong> Règlement de conflits par la violence</li>
                              <li><strong>Économie souterraine :</strong> Chiffre d'affaires représentant des % du PIB</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Cas emblématiques par pays</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Colombie :</strong> Montée en puissance des cartels de Medellín et Cali (années 1980-1990)</li>
                              <li><strong>Mexique :</strong> Guerre des cartels → affrontements entre groupes criminels</li>
                              <li><strong>Corruption des élites politiques :</strong> Infiltration à tous les niveaux de l'État</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Criminalisation des économies */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">2. La criminalisation des économies et la fragilisation des États</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Infiltration des institutions politiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Corruption endémique :</strong> Colombie, Mexique, Brésil particulièrement touchés</li>
                              <li><strong>Achat de fonctionnaires :</strong> Police, justice, politiques corrompus</li>
                              <li><strong>Financement politique :</strong> Cartels influençant les élections</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Paralysie des États face à la violence</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Homicides records :</strong> Mexique, Salvador, Honduras parmi les plus violents au monde</li>
                              <li><strong>Zones de non-droit :</strong> Territoires échappant au contrôle étatique</li>
                              <li><strong>Forces de sécurité dépassées :</strong> Moyens insuffisants face aux cartels</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">La "guerre contre la drogue" menée par les États-Unis</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Militarisation des conflits :</strong> Plan Colombie, Initiative Mérida (Mexique)</li>
                              <li><strong>Résultats limités :</strong> Violence accrue, pas de réduction significative du trafic</li>
                              <li><strong>Effets pervers :</strong> Déplacement des routes, fragmentation des cartels</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Cas du Venezuela */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">3. Le cas du Venezuela : une crise sécuritaire en plus de la crise économique</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Effondrement de l'ordre public</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Effondrement des forces de l'ordre :</strong> Police démotivée, mal équipée</li>
                              <li><strong>Prolifération des milices armées :</strong> "Colectivos" pro-gouvernementaux</li>
                              <li><strong>Justice défaillante :</strong> Impunité généralisée</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Criminalité endémique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Taux de criminalité :</strong> Parmi les plus élevés du monde</li>
                              <li><strong>Absence de contrôle étatique :</strong> Nombreuses régions sous contrôle criminel</li>
                              <li><strong>Économie parallèle :</strong> Contrebande, trafics divers</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Le populisme et la polarisation politique */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        C. Le populisme et la polarisation politique : un facteur d'instabilité récurrent
                      </h4>
                      
                      {/* 1. Alternance permanente */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">1. Une alternance permanente entre populisme de gauche et de droite</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Phénomène historique récurrent</h6>
                            <p className="text-sm text-gray-700 mb-2">
                              Le populisme en Amérique latine est un phénomène historique qui répond aux crises sociales et économiques.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Cycles politiques :</strong> Alternance entre modèles opposés</li>
                              <li><strong>Réponse aux crises :</strong> Solutions radicales face aux échecs précédents</li>
                              <li><strong>Absence de continuité :</strong> Remise en cause systématique des politiques</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Populisme de gauche</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Dénonciation du néolibéralisme et des élites :</strong> Discours anti-establishment</li>
                              <li><strong>Exemples historiques :</strong> Vargas (Brésil, 1930), Chávez (Venezuela, 1999)</li>
                              <li><strong>Politiques :</strong> Nationalisations, redistribution, programmes sociaux</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Populisme de droite</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Discours sécuritaire et conservateur :</strong> Ordre et tradition</li>
                              <li><strong>Exemple récent :</strong> Bolsonaro (Brésil, 2018)</li>
                              <li><strong>Politiques :</strong> Répression, libéralisation économique, valeurs traditionnelles</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Influence sur l'économie */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">2. L'influence du populisme sur l'économie et la gouvernance</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Années 2000 : montée d'une gauche sociale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Redistribution des richesses :</strong> Programmes sociaux massifs</li>
                              <li><strong>Nationalisations :</strong> Secteurs stratégiques sous contrôle étatique</li>
                              <li><strong>Figures emblématiques :</strong> Chávez, Morales, Lula</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Années 2010 : crise et retour au libéralisme</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Ajustements budgétaires :</strong> Réduction des dépenses publiques</li>
                              <li><strong>Privatisations :</strong> Retour au secteur privé</li>
                              <li><strong>Exemples :</strong> Macri (Argentine), Temer (Brésil)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Instabilité chronique</h6>
                            <p className="text-sm text-gray-700">
                              <strong>Conséquence :</strong> Chaque cycle politique amène des réformes économiques opposées, 
                              empêchant la construction d'un modèle de développement durable.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Polarisation croissante */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">3. Une polarisation croissante dans un contexte de rejet des élites</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Anti-américanisme persistant</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>70% des Latino-Américains</strong> ont une image défavorable des États-Unis</li>
                              <li><strong>Exemple historique :</strong> Émeutes contre Nixon à Caracas (1958)</li>
                              <li><strong>Mémoire des interventions :</strong> Héritage de la Guerre froide</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Exploitation politique du rejet</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Justification de politiques anti-libérales :</strong> Souveraineté économique</li>
                              <li><strong>Protectionnisme :</strong> Défense contre l'impérialisme économique</li>
                              <li><strong>Nationalisme :</strong> Identité contre l'hégémonie externe</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Contexte mondial de montée du populisme</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>États-Unis :</strong> Trump et mouvements nationalistes</li>
                              <li><strong>Tensions accrues :</strong> Politiques américaines controversées (mur, sanctions)</li>
                              <li><strong>Cercle vicieux :</strong> Populisme alimentant le populisme</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine est confrontée à un enchevêtrement de crises économiques, politiques et sécuritaires, qui s'alimentent mutuellement.</p>
                        
                        <p>→ Les crises économiques récurrentes empêchent la stabilisation de l'économie et favorisent l'émergence de populismes alternant entre interventionnisme et libéralisme.</p>
                        
                        <p>→ Le narcotrafic et la criminalité fragilisent encore davantage les États, contrecarrant leurs efforts de développement.</p>
                        
                        <p>→ L'instabilité persistante de la région pose la question suivante : l'Amérique latine peut-elle un jour surmonter ses divisions et construire un modèle de développement stable et souverain ?</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii1">
                <AccordionTrigger className="text-lg">
                  III.1. L'Amérique latine : un continent inégalitaire mais avec des pôles d'émergence
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* A. Des inégalités structurelles marquées */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        A. Des inégalités structurelles marquées malgré des zones d'émergence
                      </h4>
                      
                      {/* 1. Région la plus inégalitaire */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. L'Amérique latine, la région la plus inégalitaire du monde</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Indicateurs d'inégalité</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Coefficient de Gini :</strong> Autour de 0,5, l'un des plus élevés au monde</li>
                              <li><strong>Classe moyenne :</strong> 30% de la population seulement</li>
                              <li><strong>Fortes disparités sociales :</strong> Écart important entre riches et pauvres</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Conséquences politiques et sociales</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Impossibilité de résoudre la question des inégalités :</strong> Problème structurel persistant</li>
                              <li><strong>Tensions sociales récurrentes :</strong> Manifestations et mouvements sociaux</li>
                              <li><strong>Instabilité politique :</strong> Légitimité des gouvernements contestée</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Pauvreté persistante */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Une pauvreté persistante, exacerbée par la pandémie</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Impact du COVID-19</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Hausse du taux de pauvreté :</strong> 29 millions de personnes supplémentaires sous le seuil de pauvreté</li>
                              <li><strong>Crise sanitaire et sociale :</strong> Systèmes de santé débordés</li>
                              <li><strong>Économie informelle touchée :</strong> Perte de revenus pour les plus vulnérables</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Augmentation des troubles politiques et sociaux</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Mobilisations en Colombie (2021) :</strong> Révoltes contre les réformes fiscales</li>
                              <li><strong>Manifestations au Chili (2019) :</strong> "Estallido social" contre les inégalités</li>
                              <li><strong>Tensions au Brésil :</strong> Polarisation politique et sociale accrue</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Étude de cas : Rio de Janeiro */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        B. Étude de cas : Les inégalités urbaines à Rio de Janeiro
                      </h4>
                      
                      {/* 1. Ville fragmentée */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">1. Une ville fragmentée entre quartiers riches et favelas</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Exclusion socio-spatiale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>20% des habitants</strong> vivent dans des favelas</li>
                              <li><strong>Proximité géographique :</strong> Favelas souvent situées près des quartiers aisés</li>
                              <li><strong>Ségrégation sociale :</strong> Deux mondes qui se côtoient sans se mélanger</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Forte disparité des services publics</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Accès limité à l'eau potable :</strong> Coupures fréquentes dans les favelas</li>
                              <li><strong>Éducation défaillante :</strong> Écoles sous-équipées, décrochage scolaire</li>
                              <li><strong>Santé précaire :</strong> Manque d'hôpitaux et de centres de soins</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Violence et narcotrafic</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Domination des gangs :</strong> Contrôle territorial dans certaines zones</li>
                              <li><strong>Corruption des forces de l'ordre :</strong> Police parfois complice</li>
                              <li><strong>Climat d'insécurité :</strong> Taux de criminalité élevé</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Impact des grands événements */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">2. L'impact des grands événements internationaux</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Jeux Olympiques 2016 et Coupe du Monde 2014</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Politiques d'"embellissement" :</strong> Rénovation des zones touristiques</li>
                              <li><strong>Expulsion de milliers d'habitants :</strong> Déplacement forcé des favelas</li>
                              <li><strong>Gentrification :</strong> Hausse des prix immobiliers</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Persistance des inégalités malgré les investissements</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Retombées économiques limitées :</strong> Bénéfices concentrés sur les élites</li>
                              <li><strong>Infrastructure temporaire :</strong> Peu d'amélioration durable des conditions de vie</li>
                              <li><strong>Endettement public :</strong> Coût élevé pour des bénéfices discutables</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Rivalité Chine-États-Unis */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        C. Rivalité Chine-États-Unis : une influence grandissante sur le développement de la région
                      </h4>
                      
                      {/* 1. États-Unis : acteur historique contesté */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Les États-Unis : un acteur historique, mais contesté</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Influence économique et militaire traditionnelle</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>ALENA (maintenant USMCA) :</strong> Intégration économique avec le Mexique</li>
                              <li><strong>Plan Colombie :</strong> Aide militaire et anti-drogue</li>
                              <li><strong>Sanctions contre le Venezuela :</strong> Pression économique et diplomatique</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Montée de l'anti-américanisme</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Tensions avec les gouvernements de gauche :</strong> Cuba, Venezuela, Bolivie</li>
                              <li><strong>Héritage des interventions :</strong> Mémoire des ingérences passées</li>
                              <li><strong>Politiques controversées :</strong> Mur à la frontière, restrictions migratoires</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Chine : rival stratégique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. La Chine, un rival stratégique en Amérique latine</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Investissements massifs dans les infrastructures</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Routes et ports :</strong> Projets d'intégration continentale</li>
                              <li><strong>Mines et extraction :</strong> Accès aux matières premières</li>
                              <li><strong>Pays cibles :</strong> Brésil, Argentine, Pérou, Chili</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Augmentation des échanges commerciaux</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Premier partenaire commercial :</strong> Du Brésil et du Chili</li>
                              <li><strong>Exportations vers la Chine :</strong> Soja, minerai de fer, cuivre</li>
                              <li><strong>Importations de Chine :</strong> Produits manufacturés, technologie</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Une approche sans condition politique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Contrairement aux États-Unis :</strong> Pékin ne conditionne pas ses aides</li>
                              <li><strong>Pas de réformes démocratiques exigées :</strong> Non-ingérence dans les affaires intérieures</li>
                              <li><strong>Pragmatisme économique :</strong> Relations basées sur les intérêts mutuels</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Impact géopolitique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">3. Conséquences géopolitiques de cette rivalité</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Opportunités pour l'Amérique latine</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Diversification des partenaires :</strong> Réduction de la dépendance aux États-Unis</li>
                              <li><strong>Concurrence entre puissances :</strong> Négociation de meilleures conditions</li>
                              <li><strong>Investissements accrus :</strong> Financement d'infrastructures</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Risques de nouvelle dépendance</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>"Piège de la dette" chinoise :</strong> Endettement excessif envers Pékin</li>
                              <li><strong>Spécialisation renforcée :</strong> Retour au modèle extractif</li>
                              <li><strong>Tensions géopolitiques :</strong> Pression américaine sur les alliés de la Chine</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ Malgré une croissance inégale, certaines zones d'Amérique latine connaissent une émergence économique partielle.</p>
                        
                        <p>→ Les inégalités socio-spatiales restent un obstacle majeur au développement durable de la région.</p>
                        
                        <p>→ La rivalité entre la Chine et les États-Unis joue un rôle structurant dans l'avenir de l'Amérique latine, influençant ses choix économiques et géopolitiques.</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii2">
                <AccordionTrigger className="text-lg">
                  III.2. Les stratégies des pays d'Amérique latine pour émerger
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* A. Les groupements supranationaux */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-200 pb-2">
                        A. Les groupements supranationaux : une unité difficile à concrétiser
                      </h4>
                      
                      {/* 1. Échec des ZIR */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">1. Échec des Zones d'Intégration Régionale (ZIR)</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">MERCOSUR (1991)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Membres fondateurs :</strong> Brésil, Argentine, Paraguay, Uruguay</li>
                              <li><strong>Venezuela :</strong> Suspendu en 2016 suite à la crise politique</li>
                              <li><strong>Objectif :</strong> Marché commun et intégration économique</li>
                              <li><strong>Problèmes :</strong> Tensions politiques Brésil-Argentine, faible coopération économique réelle</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">ALBA (2004)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Initiative vénézuélienne :</strong> Pour contrer l'influence américaine</li>
                              <li><strong>Idéologie anti-impérialiste :</strong> Alternative au libre-échange</li>
                              <li><strong>Échec :</strong> Causé par la crise économique du Venezuela</li>
                              <li><strong>Déclin :</strong> Perte de crédibilité avec l'effondrement vénézuélien</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Alianza del Pacífico (2011)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Membres :</strong> Mexique, Colombie, Pérou, Chili</li>
                              <li><strong>Stratégie libérale :</strong> Ouverture aux marchés</li>
                              <li><strong>Orientation :</strong> Tournée vers l'Asie-Pacifique</li>
                              <li><strong>Résultats :</strong> Intégration limitée, concurrence interne</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">USMCA (ancien ALENA)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Mexique :</strong> Lié aux États-Unis dans une intégration asymétrique</li>
                              <li><strong>Dépendance :</strong> 80% des exportations mexicaines vers les USA</li>
                              <li><strong>Limites :</strong> Transferts technologiques limités, subordination économique</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. BRICS et émergence inégale */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. BRICS et l'émergence inégale des pays d'Amérique latine</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Brésil dans les BRICS</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Seule puissance sud-américaine :</strong> À prétendre à un statut d'émergent global</li>
                              <li><strong>8e économie mondiale :</strong> PIB de 2 000 milliards USD</li>
                              <li><strong>Secteur industriel développé :</strong> Automobiles, acier, agroalimentaire</li>
                              <li><strong>Multinationales brésiliennes :</strong> Embraer, Vale, Petrobras</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Incapacité des autres pays à suivre</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Manque de compétitivité :</strong> Secteurs industriels faibles</li>
                              <li><strong>Forte dépendance aux matières premières :</strong> Vulnérabilité aux cycles</li>
                              <li><strong>Taille des marchés intérieurs :</strong> Insuffisante pour développement autonome</li>
                              <li><strong>Instabilité politique :</strong> Frein aux investissements long terme</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Plans sociaux et politiques */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        B. Plans sociaux et politiques pour lutter contre les inégalités
                      </h4>
                      
                      {/* 1. Plan Oportunidades Mexique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. Plan Oportunidades (Mexique, 2002)</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Objectifs et mécanismes</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Lutte contre la pauvreté :</strong> Via l'éducation, la santé et les transferts conditionnels</li>
                              <li><strong>Transferts conditionnels de revenus :</strong> Aides liées à la scolarisation des enfants</li>
                              <li><strong>Approche holistique :</strong> Santé, éducation, nutrition combinées</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Résultats positifs</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Réduction des inégalités de revenus :</strong> Amélioration conditions de vie</li>
                              <li><strong>Programme reconnu mondialement :</strong> Efficacité saluée par la Banque mondiale</li>
                              <li><strong>Amélioration indicateurs sociaux :</strong> Scolarisation, santé infantile</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Limites structurelles</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Dépendance aux financements publics :</strong> Vulnérabilité budgétaire</li>
                              <li><strong>Impact limité sur la structure économique :</strong> Pas de transformation productive</li>
                              <li><strong>Assistanat :</strong> Risque de dépendance permanente</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Bolsa Familia Brésil */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. Bolsa Família (Brésil, 2003)</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Programme social phare sous Lula</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Lutte contre la pauvreté :</strong> Amélioration des conditions de vie</li>
                              <li><strong>Objectifs :</strong> Revenu minimum, éducation, santé</li>
                              <li><strong>50 millions de bénéficiaires :</strong> Un quart de la population</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Succès reconnus</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Réduction de l'extrême pauvreté :</strong> De 9,7% à 4,3% entre 2003-2014</li>
                              <li><strong>Forte adhésion populaire :</strong> Soutien électoral massif à Lula/Dilma</li>
                              <li><strong>Amélioration indicateurs :</strong> Nutrition, scolarisation, santé</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Critiques et limites</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Effet d'assistanat :</strong> Dépendance des familles aux aides publiques</li>
                              <li><strong>Coût budgétaire :</strong> Pression sur les finances publiques</li>
                              <li><strong>Pas de transformation structurelle :</strong> Inégalités de fond persistantes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Intégration mondialisation libérale */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-red-200 pb-2">
                        C. Intégration à la mondialisation libérale et ses limites
                      </h4>
                      
                      {/* 1. Ajustements structurels */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-red-800 mb-4">1. Ajustements structurels et ouverture forcée</h5>
                        <div className="space-y-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Consensus de Washington (années 1980-90)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Privatisations massives :</strong> Vente des entreprises publiques</li>
                              <li><strong>Ouverture des marchés :</strong> Suppression barrières douanières</li>
                              <li><strong>Réduction des déficits publics :</strong> Austérité budgétaire</li>
                              <li><strong>Déréglementation :</strong> Marchés financiers libéralisés</li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-red-700 mb-2">Impact négatif : désindustrialisation brutale</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Fermetures d'usines :</strong> Concurrence déloyale produits importés</li>
                              <li><strong>Chômage massif :</strong> Secteur industriel décimé</li>
                              <li><strong>Incapacité à développer un tissu productif compétitif :</strong> Spécialisation régressive</li>
                              <li><strong>Perte de savoir-faire :</strong> Destruction capital humain industriel</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Effet Tequila et crises */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">2. Effet Tequila et crises financières en chaîne</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Crise mexicaine de 1994-1995</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Fuite des capitaux :</strong> Après la dévaluation du peso</li>
                              <li><strong>Impact sur toute l'Amérique latine :</strong> Contagion financière</li>
                              <li><strong>Intervention FMI :</strong> Plan de sauvetage de 50 milliards USD</li>
                              <li><strong>Récession :</strong> PIB mexicain -6% en 1995</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Crises répétées</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Argentine (2001) :</strong> Défaut souverain, corralito bancaire</li>
                              <li><strong>Brésil (1999) :</strong> Dévaluation du real, récession</li>
                              <li><strong>Venezuela (à partir de 2014) :</strong> Effondrement économique total</li>
                              <li><strong>Vulnérabilité systémique :</strong> Exposition aux chocs externes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Limites des stratégies */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">3. Les limites des stratégies mises en place</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">ISI (Industrialisation par Substitution aux Importations)</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Marchés intérieurs trop étroits :</strong> Manque d'économies d'échelle</li>
                              <li><strong>Inflation élevée :</strong> Politique monétaire accommodante</li>
                              <li><strong>Explosion de la dette :</strong> Dans les années 1980</li>
                              <li><strong>Inefficacité productive :</strong> Industries protégées non compétitives</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Dépendance aux matières premières</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Primarisation de l'économie :</strong> Fragilité face aux cycles mondiaux</li>
                              <li><strong>Reprise après 2010 :</strong> Avec la montée de la Chine</li>
                              <li><strong>Volatilité des prix :</strong> Instabilité des recettes publiques</li>
                              <li><strong>Absence de diversification :</strong> Économies mono-exportatrices</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Cercle vicieux du sous-développement</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Faible productivité :</strong> → Faibles salaires → Marché intérieur étroit</li>
                              <li><strong>Fuite des capitaux :</strong> Vers pays développés en cas de crise</li>
                              <li><strong>Brain drain :</strong> Émigration des talents vers l'étranger</li>
                              <li><strong>Institutions faibles :</strong> Corruption, instabilité juridique</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Conclusion
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>→ L'Amérique latine a tenté diverses stratégies d'émergence (ZIR, politiques sociales, ouverture économique), mais sans transformation structurelle durable.</p>
                        
                        <p>→ Les crises à répétition, la désindustrialisation et la dépendance aux matières premières freinent la consolidation de son émergence.</p>
                        
                        <p>→ Le continent oscille entre tentatives d'intégration économique et réformes sociales, sans parvenir à bâtir un modèle stable et résilient.</p>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iii3">
                <AccordionTrigger className="text-lg">
                  III.3. Concilier le développement durable et l'émergence en Amérique latine
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8">
                    
                    {/* A. Défi entre croissance et environnement */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                        A. Un défi entre croissance économique et préservation environnementale
                      </h4>
                      
                      {/* 1. Exploitation intensive des ressources */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">1. Une exploitation intensive des ressources naturelles au détriment du développement durable</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Déforestation massive en Amazonie</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>17% de la forêt détruite</strong> en 50 ans</li>
                              <li><strong>Causes principales :</strong> Agriculture (soja, élevage bovin), exploitation forestière</li>
                              <li><strong>Impact climatique :</strong> Réduction capacité absorption CO2</li>
                              <li><strong>Biodiversité menacée :</strong> Destruction de l'écosystème le plus riche du monde</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Exploitation minière et pollution</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Orpaillage illégal au Venezuela :</strong> Contamination mercure des cours d'eau</li>
                              <li><strong>Extraction de lithium :</strong> Bolivie et Argentine → consommation massive d'eau</li>
                              <li><strong>Mines de cuivre :</strong> Chili → pollution sols et nappes phréatiques</li>
                              <li><strong>Conflits sociaux :</strong> Populations locales contre multinationales extractives</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Pollution industrielle et stress hydrique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Manque d'accès à l'eau potable :</strong> Mexique et Bolivie particulièrement touchés</li>
                              <li><strong>Pollution des mégalopoles :</strong> Mexico, São Paulo, Lima → qualité air dégradée</li>
                              <li><strong>Contamination industrielle :</strong> Rejets chimiques dans fleuves</li>
                              <li><strong>Agriculture intensive :</strong> Utilisation massive pesticides</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Transition écologique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">2. Vers une transition écologique et énergétique ?</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Développement des énergies renouvelables</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Barrages hydroélectriques :</strong> Itaipu (Brésil-Paraguay), Belo Monte (Brésil)</li>
                              <li><strong>Potentiel hydroélectrique :</strong> Brésil 80% électricité d'origine hydraulique</li>
                              <li><strong>Géothermie :</strong> Développement au Costa Rica et au Salvador</li>
                              <li><strong>Biomasse :</strong> Utilisation bagasse de canne à sucre</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Exploitation du potentiel solaire et éolien</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Croissance du secteur :</strong> Chili, Uruguay et Brésil leaders</li>
                              <li><strong>Chili :</strong> Désert d'Atacama → potentiel solaire exceptionnel</li>
                              <li><strong>Uruguay :</strong> 95% électricité d'origine renouvelable</li>
                              <li><strong>Brésil :</strong> Parcs éoliens dans le Nordeste</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Résistances et conflits avec les populations locales</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Opposition aux grands projets miniers :</strong> Communautés indigènes vs multinationales</li>
                              <li><strong>Conflits hydroélectriques :</strong> Belo Monte → déplacement populations riveraines</li>
                              <li><strong>Consultation préalable :</strong> Manque de respect des droits indigènes</li>
                              <li><strong>Accaparement des terres :</strong> Projets énergétiques excluant petits agriculteurs</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B. Démographie et urbanisation */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-200 pb-2">
                        B. Démographie et urbanisation : une opportunité ou un frein au développement durable ?
                      </h4>
                      
                      {/* 1. Transition démographique inégale */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-orange-800 mb-4">1. Une transition démographique inégale</h5>
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Vieillissement rapide dans certains pays</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Argentine, Uruguay, Chili :</strong> Transition démographique avancée</li>
                              <li><strong>Taux de fécondité :</strong> Proche du seuil de renouvellement (2,1 enfants/femme)</li>
                              <li><strong>Défis du vieillissement :</strong> Systèmes de retraite sous pression</li>
                              <li><strong>Bonus démographique :</strong> Population active importante mais temporaire</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Maintien d'une forte croissance démographique</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Guatemala, Bolivie, Honduras :</strong> Taux de fécondité élevés</li>
                              <li><strong>Population jeune :</strong> Opportunité si création d'emplois</li>
                              <li><strong>Pression sur ressources :</strong> Besoins éducation, santé, logement</li>
                              <li><strong>Émigration :</strong> Flux migratoires vers pays développés</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-orange-700 mb-2">Urbanisation accélérée et bidonvilisation</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>80% des Latino-Américains</strong> vivent en ville</li>
                              <li><strong>Mégalopoles :</strong> Mexico (22M), São Paulo (22M), Buenos Aires (15M)</li>
                              <li><strong>Bidonvilles :</strong> 25% population urbaine en habitat précaire</li>
                              <li><strong>Exode rural :</strong> Recherche d'opportunités économiques</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Urbanisation durable */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-purple-800 mb-4">2. L'urbanisation durable, un enjeu clé</h5>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Besoin de transport durable et de villes résilientes</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Bogotá :</strong> TransMilenio → système BRT pionnier</li>
                              <li><strong>Medellín :</strong> Métrocable → mobilité verte dans quartiers populaires</li>
                              <li><strong>Curitiba (Brésil) :</strong> Modèle urbanisme durable</li>
                              <li><strong>Vélos en libre-service :</strong> Développement à Mexico, Buenos Aires</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-purple-700 mb-2">Adaptation aux catastrophes climatiques</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Montée des eaux à Buenos Aires :</strong> Inondations récurrentes</li>
                              <li><strong>Ouragans en Amérique centrale :</strong> Vulnérabilité côtes Caraïbes</li>
                              <li><strong>Sécheresses :</strong> São Paulo et Mexico face au stress hydrique</li>
                              <li><strong>Adaptation nécessaire :</strong> Infrastructures résilientes au changement climatique</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* C. Stratégies pour croissance soutenable */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                        C. Quelles stratégies pour un modèle de croissance soutenable ?
                      </h4>
                      
                      {/* 1. Diversification économique */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800 mb-4">1. S'appuyer sur une diversification économique durable</h5>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Réduire la dépendance aux matières premières</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Développement des industries à valeur ajoutée :</strong> Transformation sur place</li>
                              <li><strong>Secteurs d'avenir :</strong> Biotechnologies, technologies vertes</li>
                              <li><strong>Valorisation ressources :</strong> Lithium → batteries, cuivre → électronique</li>
                              <li><strong>Clusters technologiques :</strong> Costa Rica (logiciels), Chili (innovation minière)</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-blue-700 mb-2">Encourager l'économie circulaire et l'innovation</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Initiatives en bioéconomie :</strong> Valorisation biodiversité amazonienne</li>
                              <li><strong>Recyclage :</strong> Programmes gestion déchets urbains</li>
                              <li><strong>Agriculture durable :</strong> Agroécologie, permaculture</li>
                              <li><strong>Éco-innovation :</strong> Startups technologies propres</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Politiques de redistribution */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-yellow-800 mb-4">2. Promouvoir des politiques de redistribution sociale</h5>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Réduire les inégalités pour une croissance inclusive</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Accès à l'éducation :</strong> Formation professionnelle adaptée économie verte</li>
                              <li><strong>Réduction du travail informel :</strong> Intégration circuits économiques formels</li>
                              <li><strong>Santé universelle :</strong> Systèmes publics renforcés</li>
                              <li><strong>Microfinance :</strong> Soutien entrepreneuriat local</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-yellow-700 mb-2">Soutenir les populations rurales et indigènes</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Intégration aux circuits économiques :</strong> Sans destruction de leur environnement</li>
                              <li><strong>Agriculture familiale :</strong> Soutien production locale</li>
                              <li><strong>Écotourisme :</strong> Valorisation patrimoine naturel et culturel</li>
                              <li><strong>Droits fonciers :</strong> Reconnaissance territoires ancestraux</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Gouvernance environnementale */}
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-green-800 mb-4">3. Renforcer la gouvernance environnementale</h5>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Politiques publiques environnementales</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Réglementation renforcée :</strong> Contrôle activités extractives</li>
                              <li><strong>Aires protégées :</strong> Extension réseaux parcs nationaux</li>
                              <li><strong>Fiscalité verte :</strong> Taxes carbone, incitations énergies propres</li>
                              <li><strong>Coopération régionale :</strong> Gestion partagée ressources transfrontalières</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-semibold text-green-700 mb-2">Financement de la transition</h6>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                              <li><strong>Obligations vertes :</strong> Financement projets durables</li>
                              <li><strong>Fonds climatiques internationaux :</strong> Accès facilité pour PED</li>
                              <li><strong>Paiements services écosystémiques :</strong> Rémunération conservation forêts</li>
                              <li><strong>Partenariats public-privé :</strong> Investissements infrastructures vertes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion finale de la dissertation */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-2 border-blue-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Conclusion générale de la dissertation
                      </h4>
                      
                      <div className="space-y-4 text-sm text-gray-700">
                        <p className="font-semibold text-blue-800">
                          → L'Amérique latine est confrontée à un dilemme entre exploitation des ressources et nécessité d'un modèle économique soutenable.
                        </p>
                        
                        <p className="font-semibold text-green-800">
                          → Les opportunités de transition écologique et démographique existent, mais nécessitent des politiques volontaristes et inclusives.
                        </p>
                        
                        <p className="font-semibold text-purple-800">
                          → L'émergence de la région dépendra de sa capacité à concilier croissance économique, justice sociale et préservation de l'environnement.
                        </p>
                        
                        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                          <p className="text-xs text-gray-600 italic">
                            <strong>Problématique finale :</strong> L'Amérique latine pourra-t-elle surmonter ses contradictions historiques pour construire un modèle de développement à la fois prospère, équitable et durable, qui lui permettrait enfin de réaliser son potentiel d'émergence dans le système mondial du XXIe siècle ?
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

        {/* Note de développement */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-yellow-800">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold">Développement en cours</p>
            </div>
            <p className="text-yellow-700 mt-2 text-sm">
              Cette page présente le développement complet de la dissertation sur l'Amérique latine : parties I, II et III entièrement développées. La dissertation couvre l'historique régional, les défis contemporains, et les perspectives d'avenir avec 9 sections détaillées selon le programme de géopolitique de deuxième année.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AmeriqueLatinePage;