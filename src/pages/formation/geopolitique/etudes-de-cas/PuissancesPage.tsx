import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Globe, Shield, DollarSign, Building2, Factory, MapPin, Users, TrendingUp } from 'lucide-react';

const PuissancesPage = () => {
  const frenchCompanies = [
    { name: 'LVMH', revenue: '90 Mds €', profit: '10 Mds €', employees: '200 000', sector: '1er luxe mondial' },
    { name: 'TotalEnergies', revenue: '200 Mds €', profit: '20 Mds €', sector: 'Énergie' },
    { name: 'BNP Paribas', revenue: '60 Mds €', sector: 'Banque' },
    { name: 'Sanofi', revenue: '45 Mds €', sector: 'Pharmacie' },
    { name: 'Hermès', revenue: '15 Mds €', sector: 'Luxe' }
  ];

  const frenchDefense = [
    { metric: 'Budget défense', value: '50 Mds € (2025)', detail: '2% PIB objectif OTAN' },
    { metric: 'Personnel', value: '250 000 hommes', detail: 'Forces armées' },
    { metric: 'Équipements', value: '200 chars, 3000 blindés', detail: '50 drones, 200 avions' },
    { metric: 'Industrie', value: '4000 entreprises', detail: '170 000 emplois, 20 Mds € CA' }
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique" className="text-blue-600 hover:text-blue-800">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link to="/formation/geopolitique/etudes-de-cas" className="text-blue-600 hover:text-blue-800">
            Thèmes centraux
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">France</span>
        </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">La France : Puissance mondiale</CardTitle>
                <p className="text-blue-100 mt-2">
                  Économie, hard power, soft power et défis structurels
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2900Md$</div>
                <div className="text-sm text-blue-100">PIB France</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">10e</div>
                <div className="text-sm text-blue-100">Rang PIB PPA</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">50Md€</div>
                <div className="text-sm text-blue-100">Défense 2025</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">5e</div>
                <div className="text-sm text-blue-100">Rang FTN mondial</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analyse géopolitique */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="france-economy">
            <AccordionTrigger className="text-xl text-blue-700">
              I. La France : Puissance économique mondiale
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                
                {/* Position économique */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <DollarSign className="h-5 w-5" />
                      Position économique mondiale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Indicateurs généraux</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li><strong>PIB PPA :</strong> 10e mondial (dépassée par Brésil, Russie)</li>
                          <li><strong>PIB/habitant :</strong> 45 000$ (20e mondial)</li>
                          <li><strong>PIB nominal :</strong> 2 900 Mds$ (7e rang, 3% PIB mondial)</li>
                          <li><strong>IDH :</strong> 0,90 (20e mondial)</li>
                          <li><strong>Compétitivité Davos :</strong> 25e rang</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Performance commerciale</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li><strong>Exportations :</strong> 5e exportateur mondial (600 Mds €)</li>
                          <li><strong>Services :</strong> 3e rang mondial</li>
                          <li><strong>Agriculture :</strong> 1re puissance agricole UE</li>
                          <li><strong>IDE entrants :</strong> 5e rang mondial</li>
                          <li><strong>Déficit commercial :</strong> -50 Mds € (2024)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Citation Hubert Védrine :</strong> <em>"Puissance d'influence mondiale"</em> - 
                        La France compense sa taille par son soft power et sa diplomatie.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Top entreprises françaises */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-green-600" />
                      Top 5 firmes françaises (35 FTN/Fortune 500)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {frenchCompanies.map((company, index) => (
                        <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-green-600 text-white font-semibold">
                                  {company.name}
                                </Badge>
                                <span className="text-sm text-green-700">{company.sector}</span>
                              </div>
                              <div className="text-sm text-green-700">
                                <span><strong>CA :</strong> {company.revenue}</span>
                                {company.profit && <span> • <strong>Bénéfice :</strong> {company.profit}</span>}
                                {company.employees && <span> • <strong>Employés :</strong> {company.employees}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Autres leaders :</strong> Dior, Schneider Electric, Airbus, Carrefour (1000 hypers extérieur), 
                        Renault (150 000 salariés, 60% France), L'Oréal (90% CA extérieur)
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="france-power">
            <AccordionTrigger className="text-xl text-red-700">
              II. Hard Power et Soft Power français
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                {/* Hard Power */}
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <Shield className="h-5 w-5" />
                      Hard Power : Puissance militaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {frenchDefense.map((item, index) => (
                          <div key={index} className="p-3 bg-red-100 rounded-lg">
                            <div className="font-semibold text-red-800">{item.metric}</div>
                            <div className="text-sm text-red-700 mt-1">
                              <div><strong>{item.value}</strong></div>
                              <div className="text-xs text-red-600">{item.detail}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3">Industrie de défense</h4>
                        <ul className="text-sm text-red-700 space-y-2">
                          <li><strong>Exportations :</strong> 4e exportateur armes (30% production)</li>
                          <li><strong>Marchés :</strong> Moyen-Orient/Asie (80%)</li>
                          <li><strong>EADS (Airbus) :</strong> 5e firme armement mondial</li>
                          <li><strong>Thales :</strong> 9e rang mondial</li>
                        </ul>
                        
                        <h4 className="font-semibold text-red-800 mb-3 mt-4">Opérations</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Barkhane (Sahel, fin 2022)</li>
                          <li>• Chammal (Irak/Syrie)</li>
                          <li>• Sentinelle (territoire national)</li>
                          <li>• <strong>Total :</strong> 10 000 militaires déployés</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Soft Power */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Users className="h-5 w-5" />
                      Soft Power : Influence culturelle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Francophonie</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li><strong>280 millions</strong> francophones (5e langue mondiale)</li>
                          <li><strong>Commerce stimulé :</strong> +35% entre pays francophones</li>
                          <li><strong>OIF (1970) :</strong> Promeut paix/démocratie</li>
                          <li><strong>Nobel littérature :</strong> 15 fois français</li>
                        </ul>
                        
                        <h4 className="font-semibold text-blue-800 mb-3 mt-4">Rayonnement</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li><strong>500 établissements</strong> français à l'étranger</li>
                          <li><strong>350 000 élèves</strong> dans réseau français</li>
                          <li><strong>30 centres</strong> de recherche internationaux</li>
                          <li><strong>2,5 millions</strong> expatriés (Suisse, UK)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Outre-mer</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li><strong>DROM-COM :</strong> Guadeloupe, Martinique, Guyane, Réunion, Mayotte</li>
                          <li><strong>ZEE :</strong> 95% en outre-mer (2e mondiale)</li>
                          <li><strong>Présence :</strong> Pacifique, Indien, Atlantique</li>
                          <li><strong>Ressources :</strong> Nickel (Nouvelle-Calédonie), or (Guyane)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="france-economy-structure">
            <AccordionTrigger className="text-xl text-purple-700">
              III. Structure économique et défis français
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                {/* FTN françaises */}
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Factory className="h-5 w-5" />
                      Firmes transnationales françaises
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Poids global</h4>
                        <ul className="text-sm text-purple-700 space-y-2">
                          <li><strong>3 000 groupes,</strong> 35 000 filiales</li>
                          <li><strong>50 millions</strong> salariés extérieurs</li>
                          <li><strong>5e rang</strong> mondial FTN</li>
                          <li><strong>30% PIB</strong> réalisé sur marchés extérieurs</li>
                        </ul>
                        
                        <h4 className="font-semibold text-purple-800 mb-3 mt-4">Répartition géographique</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• UE : 45% effectifs français extérieurs</li>
                          <li>• États-Unis : 12%</li>
                          <li>• Chine : 10%</li>
                          <li>• Flux vers OCDE : 90% (UE 65%)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Structure sectorielle</h4>
                        <ul className="text-sm text-purple-700 space-y-2">
                          <li><strong>Industrie :</strong> 40% des effectifs extérieurs</li>
                          <li><strong>Services :</strong> 30% des effectifs</li>
                          <li><strong>Balance négative :</strong> -60 Mds € IDE</li>
                          <li><strong>CAC40 :</strong> 45% détenu par étrangers</li>
                        </ul>
                        
                        <h4 className="font-semibold text-purple-800 mb-3 mt-4">Secteurs investisseurs</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Finance : 30%</li>
                          <li>• Industrie : 25%</li>
                          <li>• Énergie : 10%</li>
                          <li>• Fonds US : 50% des investissements étrangers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Désindustrialisation */}
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <TrendingUp className="h-5 w-5" />
                      Désindustrialisation et reconversion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-3">Recul industriel</h4>
                        <ul className="text-sm text-orange-700 space-y-2">
                          <li><strong>Part PIB :</strong> 17% (contre 30% en 1970)</li>
                          <li><strong>Emplois :</strong> 3 millions (contre 5M en 1980)</li>
                          <li><strong>Balance :</strong> Déficit manufactures depuis 2005</li>
                          <li><strong>Fermetures :</strong> Arcelor (Lorraine), reconversions</li>
                        </ul>
                        
                        <h4 className="font-semibold text-orange-800 mb-3 mt-4">Secteurs leader UE</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Aéronautique (Airbus)</li>
                          <li>• Nucléaire (EDF 56 réacteurs)</li>
                          <li>• Chimie, Agroalimentaire (Danone)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-3">Pôles d'excellence</h4>
                        <ul className="text-sm text-orange-700 space-y-2">
                          <li><strong>IDF :</strong> 25% PIB, 400 000 emplois industriels</li>
                          <li><strong>Lyon :</strong> Chimie, Part-Dieu (TGV)</li>
                          <li><strong>Toulouse :</strong> Aerospace Valley (150 000 emplois)</li>
                          <li><strong>Jura :</strong> Systèmes locaux mécanique</li>
                        </ul>
                        
                        <h4 className="font-semibold text-orange-800 mb-3 mt-4">Innovation</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Sophia Antipolis (1969)</li>
                          <li>• 70 pôles compétitivité (2004)</li>
                          <li>• 8 000 PME dans les pôles</li>
                          <li>• Reconversions : Saint-Nazaire (croisières)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Services et faiblesses */}
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <MapPin className="h-5 w-5" />
                      Tertiarisation et défis structurels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Tertiarisation</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li><strong>Services :</strong> 80% PIB (contre 70% il y a 20 ans)</li>
                          <li><strong>Emplois :</strong> 80% population active, 90% salariés</li>
                                                      <li><strong>IDF/PACA :</strong> {'>'}80% tertiaire</li>
                          <li><strong>Services marchands :</strong> 50% valeur ajoutée</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-800 mb-3 mt-4">Espaces tertiaires</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• La Défense : 80 tours, 4M m² bureaux</li>
                          <li>• Part-Dieu Lyon dynamisé TGV</li>
                          <li>• 75 pôles compétitivité, 10 000 entreprises</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Faiblesses structurelles</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li><strong>Dette publique :</strong> 110% PIB</li>
                          <li><strong>Chômage :</strong> 8% (persistant)</li>
                          <li><strong>Coût salarial :</strong> UE moyenne +15%</li>
                          <li><strong>Port Marseille :</strong> 40e mondial (100M tonnes)</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-800 mb-3 mt-4">Atouts</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Infrastructures : TGV, autoroutes, fibre</li>
                          <li>• Aquitaine aérospatial</li>
                          <li>• Ouest agroalimentaire</li>
                          <li>• Carrefour géopolitique équipé</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Références */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Références et sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Hubert Védrine</strong> : <em>"Puissance d'influence mondiale"</em> - Concept puissance française</p>
              <p><strong>Davos</strong> : Indice compétitivité mondiale</p>
              <p><strong>INSEE</strong> : Statistiques économiques françaises 2024</p>
              <p><strong>Ministère des Armées</strong> : Budget défense et opérations extérieures</p>
              <p><strong>OECD</strong> : Données FTN et IDE France</p>
              <p><strong>OIF</strong> : Organisation Internationale de la Francophonie</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default PuissancesPage;