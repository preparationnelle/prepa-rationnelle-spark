import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Coins, Globe, TrendingUp, AlertTriangle, MapPin, Battery, Cpu } from 'lucide-react';

const MetauxPage = () => {
  const metalStats = [
    { metal: 'Fer', production: '3,2 milliards tonnes', evolution: 'x3 depuis 2000', share: 'Chine 40%' },
    { metal: 'Cuivre', production: '22 millions tonnes', share: 'Chili 28%', consumption: 'Chine 45%' },
    { metal: 'Nickel', production: '3 millions tonnes', use: 'Batteries, acier', growth: 'VE +15%/an' },
    { metal: 'Or', evolution: 'x1.5 depuis 2010', trend: 'Réserves banques centrales', note: 'Valeur refuge' }
  ];

  const ironProducers = [
    { country: 'Chine', share: '40%', note: 'Production et consommation' },
    { country: 'Australie', share: '20%', note: 'Premier exportateur' },
    { country: 'Brésil', share: '15%', note: 'Vale, Rio Tinto' },
    { country: 'Inde', share: '8%', note: 'Croissance rapide' },
    { country: 'Russie', share: '6%', note: 'Réserves importantes' }
  ];

  const criticalMetals = [
    { metal: 'Lithium', leader: 'Bolivie (70% réserves)', use: 'Batteries EV', enjeu: 'Triangle ABC' },
    { metal: 'Cobalt', leader: 'RDC (70% production)', issue: 'Travail enfants', strategic: 'Batteries' },
    { metal: 'Terres rares', leader: 'Chine (70% production)', control: 'Monopole', use: 'Tech, défense' },
    { metal: 'Graphite', leader: 'Chine (80%)', application: 'Anodes batteries', substitute: 'Synthétique' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-gray-600 hover:text-gray-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-gray-600 hover:text-gray-800">
            Études de cas
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Métaux</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Coins className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Métaux et ressources critiques</CardTitle>
                <p className="text-gray-100 mt-2">
                  Géopolitique des métaux stratégiques et transition énergétique
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">3,2Md t</div>
                <div className="text-sm text-gray-100">Production fer</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-gray-100">Terres rares Chine</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">22M t</div>
                <div className="text-sm text-gray-100">Production cuivre</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">45%</div>
                <div className="text-sm text-gray-100">Consommation Chine</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vue d'ensemble */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-600" />
              Production métallique mondiale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              La production de <strong>fer a triplé depuis 2000</strong> pour atteindre 3,2 milliards de tonnes en 2024. 
              La Chine domine avec <strong>45% de la consommation mondiale</strong> de fer et cuivre, 
              reflétant son industrialisation massive et sa position centrale dans les chaînes de valeur.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Métaux traditionnels</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Fer : Construction, infrastructure</li>
                  <li>• Cuivre : Électricité, télécommunications</li>
                  <li>• Aluminium : Transport, emballage</li>
                  <li>• Zinc : Galvanisation, alliages</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Métaux critiques</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Lithium : Batteries véhicules électriques</li>
                  <li>• Cobalt : Batteries haute performance</li>
                  <li>• Terres rares : Technologies avancées</li>
                  <li>• Graphite : Anodes de batteries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Production métaux de base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gray-600" />
              Production des métaux de base 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metalStats.map((metal, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-gray-800 mb-1">{metal.metal}</div>
                  <div className="text-sm font-medium text-gray-700 mb-2">{metal.production}</div>
                  <div className="text-xs text-gray-600">
                    {metal.evolution && <div>{metal.evolution}</div>}
                    {metal.share && <div>{metal.share}</div>}
                    {metal.consumption && <div>{metal.consumption}</div>}
                    {metal.trend && <div>{metal.trend}</div>}
                    {metal.note && <div>{metal.note}</div>}
                    {metal.use && <div>{metal.use}</div>}
                    {metal.growth && <div>{metal.growth}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Producteurs fer par pays (2024)</h4>
              <div className="grid md:grid-cols-5 gap-3">
                {ironProducers.map((producer, index) => (
                  <div key={index} className="text-center">
                    <div className="font-bold text-gray-700">{producer.country}</div>
                    <div className="text-sm text-blue-600">{producer.share}</div>
                    <div className="text-xs text-gray-600">{producer.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métaux critiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5 text-blue-600" />
              Course aux métaux critiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalMetals.map((metal, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 mb-1">{metal.metal}</div>
                      <div className="text-sm text-blue-700 mb-2">
                        <strong>Leader :</strong> {metal.leader}
                      </div>
                      <div className="text-xs text-blue-600">
                        {metal.use && <span><strong>Usage :</strong> {metal.use} • </span>}
                        {metal.enjeu && <span><strong>Enjeu :</strong> {metal.enjeu} • </span>}
                        {metal.issue && <span><strong>Problème :</strong> {metal.issue} • </span>}
                        {metal.strategic && <span><strong>Stratégique :</strong> {metal.strategic} • </span>}
                        {metal.control && <span><strong>Contrôle :</strong> {metal.control} • </span>}
                        {metal.application && <span><strong>Application :</strong> {metal.application} • </span>}
                        {metal.substitute && <span><strong>Alternative :</strong> {metal.substitute}</span>}
                      </div>
                    </div>
                    <div className="ml-4">
                      {(metal.metal === 'Lithium' || metal.metal === 'Cobalt') && <Battery className="h-5 w-5 text-blue-600" />}
                      {metal.metal === 'Terres rares' && <Cpu className="h-5 w-5 text-blue-600" />}
                      {metal.metal === 'Graphite' && <Coins className="h-5 w-5 text-blue-600" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analyse géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Enjeux géopolitiques des métaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="concentration">
                <AccordionTrigger className="text-lg">
                  I. Concentration géographique et vulnérabilités
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Monopoles de fait</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Terres rares :</strong> Chine 70% production mondiale, quasi-monopole raffinage</li>
                        <li><strong>Cobalt :</strong> RDC 70% production, instabilité politique</li>
                        <li><strong>Lithium :</strong> Triangle ABC (Argentine-Bolivie-Chili) 70% réserves</li>
                        <li><strong>Graphite :</strong> Chine 80% production, contrôle chaîne batteries</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Risques d'approvisionnement</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Tensions géopolitiques :</strong> Guerre commerciale, sanctions</li>
                        <li><strong>Instabilité politique :</strong> Coups d'État (Mali, Niger, uranium)</li>
                        <li><strong>Conflits armés :</strong> RDC, Myanmar (étain, tungstène)</li>
                        <li><strong>Nationalisation :</strong> Bolivie (lithium), Chili (cuivre)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transition">
                <AccordionTrigger className="text-lg">
                  II. Transition énergétique et nouveaux besoins
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Boom des batteries</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li><strong>Véhicules électriques :</strong> Croissance +15%/an, Tesla, BYD</li>
                        <li><strong>Stockage réseau :</strong> Intermittence renouvelables</li>
                        <li><strong>Lithium :</strong> Demande x10 d'ici 2030 (AIE)</li>
                        <li><strong>Nickel :</strong> Batteries haute densité, autonomie VE</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Technologies émergentes</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>Éoliennes :</strong> Terres rares (néodyme) pour aimants permanents</li>
                        <li><strong>Panneaux solaires :</strong> Argent, indium, tellure</li>
                        <li><strong>Hydrogène :</strong> Platine pour électrolyseurs, piles combustible</li>
                        <li><strong>Défense :</strong> Gallium, germanium pour semiconducteurs</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="strategies">
                <AccordionTrigger className="text-lg">
                  III. Stratégies de sécurisation et alternatives
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Triangle du lithium (Bolivie)
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>Réserves :</strong> Salar d'Uyuni (Bolivie) = 70% réserves mondiales</p>
                        <p><strong>Enjeu :</strong> Extraction vs. préservation environnementale</p>
                        <p><strong>Géopolitique :</strong> Chine, Russie courtisent Bolivie</p>
                        <p><strong>Alternative :</strong> Australie, Canada développent mines</p>
                        <p><strong>Innovation :</strong> Extraction saumures, recyclage batteries</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-3">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Cobalt RDC et enjeux éthiques
                      </h4>
                      <div className="text-sm text-red-700 space-y-2">
                        <p><strong>Production :</strong> 70% mondiale, mines Katanga</p>
                        <p><strong>Problème :</strong> Travail enfants, conditions dangereuses</p>
                        <p><strong>Contrôle :</strong> Firmes chinoises (CMOC, Zijin)</p>
                        <p><strong>Certification :</strong> Cobalt for Development, traçabilité blockchain</p>
                        <p><strong>Alternative :</strong> Batteries LFP sans cobalt, recyclage</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-3">
                        <Cpu className="inline h-4 w-4 mr-2" />
                        Souveraineté européenne et américaine
                      </h4>
                      <div className="text-sm text-green-700 space-y-2">
                        <p><strong>Critical Raw Materials Act (UE) :</strong> Réduire dépendance chinoise</p>
                        <p><strong>Inflation Reduction Act (USA) :</strong> Crédits mines domestiques</p>
                        <p><strong>Recyclage :</strong> Économie circulaire, urban mining</p>
                        <p><strong>Substitution :</strong> R&D alternatives, matériaux synthétiques</p>
                        <p><strong>Diversification :</strong> Partenariats Afrique, Amérique latine</p>
                      </div>
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
              <p><strong>AIE</strong> (Agence internationale de l'énergie) : Critical Minerals Report 2024</p>
              <p><strong>USGS</strong> (United States Geological Survey) : Mineral Commodity Summaries</p>
              <p><strong>Commission européenne</strong> : Critical Raw Materials List 2024</p>
              <p><strong>IEA</strong> : Global EV Outlook 2024</p>
              <p><strong>Wood Mackenzie</strong> : Metals & Mining Research</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default MetauxPage;