import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Leaf, Globe, TrendingUp, AlertTriangle, MapPin, Trees } from 'lucide-react';

const ForetPage = () => {
  const forestStats = [
    { label: 'Couverture forestière', value: '30%', note: 'Terres mondiales' },
    { label: 'Concentration', value: '65%', note: '10 pays principaux' },
    { label: 'Perte forestière', value: '5%', period: '2000-2024' },
    { label: 'Déforestation annuelle', value: '6,6 millions ha', trend: 'Stable' }
  ];

  const topForestCountries = [
    { country: 'Russie', coverage: '815 millions ha', share: '20% mondial' },
    { country: 'Brésil', coverage: '497 millions ha', note: 'Amazonie' },
    { country: 'Canada', coverage: '347 millions ha', type: 'Boréale' },
    { country: 'États-Unis', coverage: '310 millions ha', management: 'Gestion durable' },
    { country: 'Chine', coverage: '220 millions ha', trend: 'Reforestation' }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
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
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique/etudes-de-cas" className="hover:text-foreground transition-colors">
              Thèmes centraux essentiels
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Forêt</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Trees className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Ressources forestières mondiales</CardTitle>
                <p className="text-emerald-100 mt-2">
                  Déforestation, reforestation et enjeux climatiques
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm text-emerald-100">Terres mondiales</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-emerald-100">Pays = 65%</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">-5%</div>
                <div className="text-sm text-emerald-100">Perte 2000-2024</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">6,6M</div>
                <div className="text-sm text-emerald-100">ha/an déforestation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vue d'ensemble */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-600" />
              Situation forestière mondiale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les forêts couvrent <strong>30% des terres mondiales</strong>, avec une concentration dans 10 pays 
              qui détiennent <strong>65% de la superficie forestière</strong>. Depuis 2000, le monde a perdu 
              <strong>5% de sa couverture forestière</strong> malgré les efforts de reforestation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-3">Principaux enjeux</h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Déforestation : -6,6 millions ha/an</li>
                  <li>• Feux records 2024 (Brésil, Indonésie)</li>
                  <li>• Changement climatique : sécheresses</li>
                  <li>• Conversion agricole : soja, huile palme</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Initiatives positives</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Chine : Great Green Wall</li>
                  <li>• Restoration : 350M ha engagés</li>
                  <li>• REDD+ : Paiements carbone</li>
                  <li>• Certification FSC, PEFC</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pays forestiers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              Top 5 pays forestiers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topForestCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <div className="font-semibold text-green-800">{country.country}</div>
                    <div className="text-sm text-green-600">
                      {country.note || country.type || country.management || country.trend}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700">{country.coverage}</div>
                    <div className="text-xs text-green-600">{country.share}</div>
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
              Enjeux géopolitiques forestiers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="deforestation">
                <AccordionTrigger className="text-lg">
                  I. Déforestation vs. développement économique
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Amazonie brésilienne</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Déforestation :</strong> +75% sous Bolsonaro (2019-2022)</li>
                        <li><strong>Causes :</strong> Élevage bovin (80%), soja, exploitation illégale</li>
                        <li><strong>Point de bascule :</strong> 20-25% déforestés = effondrement écosystème</li>
                        <li><strong>Géopolitique :</strong> Souveraineté vs. bien commun mondial</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Asie du Sud-Est</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li><strong>Huile de palme :</strong> Indonésie, Malaisie leaders mondiaux</li>
                        <li><strong>Feux :</strong> Brûlis illégaux, pollution transfrontalière</li>
                        <li><strong>Biodiversité :</strong> Habitat orangs-outans, tigres menacé</li>
                        <li><strong>Économie :</strong> 15M emplois, pression sociale forte</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="restoration">
                <AccordionTrigger className="text-lg">
                  II. Reforestation et restauration
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-3">
                        <Leaf className="inline h-4 w-4 mr-2" />
                        Great Green Wall - Chine
                      </h4>
                      <div className="text-sm text-green-700 space-y-2">
                        <p><strong>Objectif :</strong> 66 millions ha reforestés d'ici 2050</p>
                        <p><strong>Lutte :</strong> Désertification, tempêtes de sable vers Pékin</p>
                        <p><strong>Résultats :</strong> +20% couverture forestière depuis 1980</p>
                        <p><strong>Critiques :</strong> Monocultures, impact biodiversité</p>
                        <p><strong>Géopolitique :</strong> Image verte, leadership climatique</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        <Globe className="inline h-4 w-4 mr-2" />
                        Initiative Bonn Challenge
                      </h4>
                      <div className="text-sm text-blue-700 space-y-2">
                        <p><strong>Engagement :</strong> 350 millions ha restaurés d'ici 2030</p>
                        <p><strong>Participants :</strong> 80+ pays, initiative ONU</p>
                        <p><strong>Financement :</strong> REDD+, crédits carbone, fonds climat</p>
                        <p><strong>Bénéfices :</strong> 1,7T$ retombées économiques estimées</p>
                        <p><strong>Défis :</strong> Monitoring, durabilité long terme</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="climate">
                <AccordionTrigger className="text-lg">
                  III. Forêts et géopolitique climatique
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Puits de carbone</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li><strong>Absorption :</strong> 2,6 GtCO2/an par les forêts</li>
                        <li><strong>Stockage :</strong> 861 GtCO2 dans biomasse forestière</li>
                        <li><strong>REDD+ :</strong> Mécanisme paiement déforestation évitée</li>
                        <li><strong>Article 6 Accord Paris :</strong> Marchés carbone internationaux</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Tensions Nord-Sud</h4>
                      <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                        <li><strong>Souveraineté :</strong> "Amazonie patrimoine humanité" contesté</li>
                        <li><strong>Financement :</strong> 100Md$/an promis, 80Md$ manquants</li>
                        <li><strong>Conditionnalité :</strong> Aide liée performance environnementale</li>
                        <li><strong>Commerce :</strong> Boycotts produits déforestation</li>
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
              <p><strong>FAO</strong> : Global Forest Resources Assessment 2024</p>
              <p><strong>Global Forest Watch</strong> : Données déforestation temps réel</p>
              <p><strong>UNEP</strong> : State of the World's Forests 2024</p>
              <p><strong>WRI</strong> (World Resources Institute) : Restoration diagnostics</p>
              <p><strong>IPCC</strong> : Rapport spécial Terres et climat</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ForetPage;