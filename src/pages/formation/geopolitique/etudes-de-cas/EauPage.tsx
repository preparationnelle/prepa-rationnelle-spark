import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Droplets, Globe, TrendingUp, AlertTriangle, Fish, Factory } from 'lucide-react';

const EauPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-cyan-600 hover:text-cyan-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-cyan-600 hover:text-cyan-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-cyan-600 hover:text-cyan-800">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">Eau</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Droplets className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Ressources hydriques mondiales</CardTitle>
                <p className="text-cyan-100 mt-2">
                  Géopolitique de l'eau : conflits, pêche et aquaculture
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">220M t</div>
                <div className="text-sm text-cyan-100">Produits halieutiques</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">55%</div>
                <div className="text-sm text-cyan-100">Aquaculture</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2%</div>
                <div className="text-sm text-cyan-100">Eau dessalement</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">20K</div>
                <div className="text-sm text-cyan-100">Usines dessalement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ressources halieutiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="h-5 w-5 text-blue-600" />
              Ressources halieutiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La production de <strong>produits halieutiques</strong> atteint 220 millions de tonnes en 2024, 
                  dont <strong>55% provient de l'aquaculture</strong> (+5%/an). Cette croissance exponentielle 
                  transforme la géographie maritime mondiale.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Régions de pêche</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Pacifique : 50 millions tonnes</li>
                    <li>• Atlantique : 25 millions tonnes</li>
                    <li>• Chine : 20 millions tonnes (leader)</li>
                    <li>• Indonésie : 8 millions tonnes</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-3">Dessalement mondial</h4>
                <ul className="text-sm text-cyan-700 space-y-2">
                  <li><strong>Part :</strong> 2% eau consommée mondiale</li>
                  <li><strong>Usines :</strong> 20 000 installations</li>
                  <li><strong>Leaders :</strong> Arabie Saoudite, EAU, Israël, Chine</li>
                  <li><strong>Technologie :</strong> Osmose inverse, distillation</li>
                  <li><strong>Coût :</strong> Baisse continue, énergie renouvelable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Géopolitique de l'eau */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Géopolitique de l'eau
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="resources">
                <AccordionTrigger className="text-lg">
                  I. Ressources hydriques : abondance et rareté
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Répartition mondiale</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>71% Terre eau :</strong> 97% océans, 2,5% douce</li>
                        <li><strong>Plus grand fleuve :</strong> Amazone (débits)</li>
                        <li><strong>Plus grand réservoir :</strong> Lac Baïkal (20% eau douce)</li>
                        <li><strong>Eau exploitable :</strong> 40 000 km³/an (5 000 m³/pers/an)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Stress hydrique</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Évolution :</strong> x0,3 disponibilité par personne depuis 1950</li>
                        <li><strong>Régions critiques :</strong> Moyen-Orient, Afrique Nord, Inde</li>
                        <li><strong>Urbanisation :</strong> Concentration demande métropoles</li>
                        <li><strong>Agriculture :</strong> 70% consommation mondiale</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conflicts">
                <AccordionTrigger className="text-lg">
                  II. Conflits hydriques transfrontaliers
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-3">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Euphrate/Tigre : Turquie vs Syrie/Irak
                      </h4>
                      <div className="text-sm text-red-700 space-y-2">
                        <p><strong>Barrages turcs :</strong> Réduction débit 40% en aval</p>
                        <p><strong>Impact :</strong> Agriculture syrienne/irakienne affectée</p>
                        <p><strong>Géopolitique :</strong> Arme hydrique dans conflits régionaux</p>
                        <p><strong>Population :</strong> 70M personnes dépendantes bassin</p>
                        <p><strong>Négociations :</strong> Accords bilatéraux insuffisants</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <Droplets className="inline h-4 w-4 mr-2" />
                        Nil : Barrage éthiopien vs Égypte/Soudan
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>GERD :</strong> Grand barrage Renaissance éthiopien</p>
                        <p><strong>Capacité :</strong> 74 milliards m³, électricité 6000 MW</p>
                        <p><strong>Tensions :</strong> Égypte menace intervention militaire</p>
                        <p><strong>Négociations :</strong> UA, UE, USA médiateurs</p>
                        <p><strong>Enjeu :</strong> 95% eau égyptienne vient du Nil</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maritime">
                <AccordionTrigger className="text-lg">
                  III. Ressources marines et aquaculture
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Boom de l'aquaculture</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li><strong>Croissance :</strong> +5%/an, 55% production halieutique</li>
                        <li><strong>Leaders :</strong> Chine (60%), Asie du Sud-Est</li>
                        <li><strong>Espèces :</strong> Saumon (Norvège), crevettes (Équateur)</li>
                        <li><strong>Défis :</strong> Pollution, maladies, antibiotiques</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Exploitation offshore</h4>
                      <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                        <li><strong>Métaux rares :</strong> 80% océans, nodules polymétalliques</li>
                        <li><strong>Pétrole/gaz :</strong> 30% production offshore</li>
                        <li><strong>Régions :</strong> Moyen-Orient 7M b/j, Asie-Pacifique 5M</li>
                        <li><strong>Technologie :</strong> Plateformes flottantes, eaux profondes</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>

        {/* Références */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Références et sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>FAO</strong> : État des pêches et aquaculture mondiale 2024</p>
              <p><strong>UNESCO</strong> : Rapport mondial sur la mise en valeur des ressources en eau</p>
              <p><strong>IDA</strong> (International Desalination Association) : Global desalination data</p>
              <p><strong>Transboundary Waters Assessment Programme</strong> : Conflits transfrontaliers</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default EauPage;