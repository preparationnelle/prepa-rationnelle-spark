import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronRight, Map, Target, Coins, Shield, AlertTriangle, Globe } from 'lucide-react';

const FrontieresPage = () => {
  const globalBorders = [
    { region: 'US-Mexique', type: 'Immigration', description: 'Mur frontalier renforcé' },
    { region: 'Israël-Palestine', type: 'Sécuritaire', description: 'Barrière de séparation' },
    { region: 'Inde-Bangladesh', type: 'Contrôle', description: 'Frontière surveillée' },
    { region: 'Chine-Corée Nord', type: 'Politique', description: 'Contrôle des flux' },
    { region: 'Espagne-Maroc', type: 'Immigration', description: 'Ceuta/Melilla fortifiées' },
    { region: 'Israël-Egypte', type: 'Sécuritaire', description: 'Barrière anti-infiltration' },
    { region: 'Afrique Sud-Zimbabwe', type: 'Immigration', description: 'Contrôle migratoire' }
  ];

  const borderMotifs = [
    { motif: 'Sécurité', examples: 'Immigration, terrorisme', regions: 'US-Mexique, Europe-Afrique' },
    { motif: 'Identité', examples: 'Kosovo (2008), Soudan Sud (2011)', impact: 'Nouvelles frontières étatiques' },
    { motif: 'Protectionnisme', examples: 'Inde hausse douanes soja 2024', trend: 'Retour barrières commerciales' },
    { motif: 'Ressources', examples: 'Thaïlande-Cambodge (pétrole Golfe)', competition: 'Contrôle énergétique' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
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
            <span className="text-foreground font-medium">Frontières contemporaines</span>
          </div>
        </div>
      </nav>

        {/* Header */}
        <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Map className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl font-bold">Géopolitique des frontières contemporaines</CardTitle>
                <p className="text-green-100 mt-2">
                  Renaissance des frontières dans un monde globalisé
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">35K km</div>
                <div className="text-sm text-green-100">Frontières créées</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">20K km</div>
                <div className="text-sm text-green-100">Murs construits</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">1991</div>
                <div className="text-sm text-green-100">Depuis fin URSS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2000Md$</div>
                <div className="text-sm text-green-100">IDE records 2024</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analyse géopolitique */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="renaissance">
            <AccordionTrigger className="text-xl text-green-700">
              I. Renaissance des frontières (Michel Foucher)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Target className="h-5 w-5" />
                      Dynamique contemporaine des frontières
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">Le paradoxe frontalier</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li><strong>35 000 km</strong> de frontières créées depuis 1991</li>
                        <li><strong>20 000 km</strong> de murs construits</li>
                        <li><strong>Paradoxe :</strong> Mondialisation ≠ effacement frontières</li>
                        <li><strong>Michel Foucher :</strong> "Insertion mondialisation liée relations voisines"</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">Motifs de fermeture</h4>
                        <div className="space-y-3">
                          {borderMotifs.map((motif, index) => (
                            <div key={index} className="p-3 bg-green-100 rounded-lg border border-green-300">
                              <div className="font-semibold text-green-800 mb-1">{motif.motif}</div>
                              <div className="text-sm text-green-700">
                                <div><strong>Exemples :</strong> {motif.examples}</div>
                                {motif.regions && <div><strong>Régions :</strong> {motif.regions}</div>}
                                {motif.impact && <div><strong>Impact :</strong> {motif.impact}</div>}
                                {motif.trend && <div><strong>Tendance :</strong> {motif.trend}</div>}
                                {motif.competition && <div><strong>Enjeu :</strong> {motif.competition}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">Principaux murs frontaliers</h4>
                        <div className="space-y-2">
                          {globalBorders.map((border, index) => (
                            <div key={index} className="p-2 bg-green-100 rounded text-xs border border-green-300">
                              <div className="font-semibold text-green-800">{border.region}</div>
                              <div className="text-green-700">
                                <Badge className="bg-green-600 text-white text-xs mr-2">{border.type}</Badge>
                                {border.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Théorie de J-P. Renard (1997)
                      </h4>
                      <blockquote className="text-sm text-yellow-700 italic">
                        "Espace profondeur liée ligne-frontière" - Les frontières créent des espaces 
                        d'interaction complexes qui dépassent la simple ligne de démarcation.
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cooperation">
            <AccordionTrigger className="text-xl text-blue-700">
              II. Coopérations frontalières et flux économiques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Coins className="h-5 w-5" />
                      IDE et intégration économique frontalière
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-100 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">Records d'investissements 2024</h4>
                      <ul className="text-sm text-blue-700 space-y-2">
                        <li><strong>IDE mondiaux :</strong> 2 000 milliards $ (record historique)</li>
                        <li><strong>Croissance :</strong> +15% par rapport à 2023</li>
                        <li><strong>Principaux flux :</strong> Asie-Pacifique, Europe, Amérique Nord</li>
                        <li><strong>Secteurs dominants :</strong> Technologies, énergies renouvelables, infrastructures</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Zones d'intégration</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <div className="font-semibold text-blue-800 mb-1">Union Européenne</div>
                            <div className="text-sm text-blue-700">
                              Libre circulation des capitaux, biens, services et personnes. 
                              Suppression frontières internes, renforcement externes.
                            </div>
                          </div>
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <div className="font-semibold text-blue-800 mb-1">ASEAN</div>
                            <div className="text-sm text-blue-700">
                              Intégration économique progressive, maintien souveraineté nationale. 
                              Corridors économiques transfrontaliers.
                            </div>
                          </div>
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <div className="font-semibold text-blue-800 mb-1">ALENA/USMCA</div>
                            <div className="text-sm text-blue-700">
                              Intégration commerciale malgré renforcement frontière US-Mexique. 
                              Paradoxe ouverture économique/fermeture migratoire.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Défis contemporains</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-orange-100 rounded-lg border border-orange-200">
                            <div className="font-semibold text-orange-800 mb-1">Brexit</div>
                            <div className="text-sm text-orange-700">
                              Retour frontières économiques UK-UE. Nouveaux contrôles douaniers, 
                              impact chaînes logistiques.
                            </div>
                          </div>
                          <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                            <div className="font-semibold text-red-800 mb-1">Guerre Ukraine</div>
                            <div className="text-sm text-red-700">
                              Fermeture frontières Russie-Occident. Sanctions économiques, 
                              rupture chaînes d'approvisionnement énergétique.
                            </div>
                          </div>
                          <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                            <div className="font-semibold text-yellow-800 mb-1">Tensions US-Chine</div>
                            <div className="text-sm text-yellow-700">
                              "Guerre commerciale", découplage technologique. 
                              Nouvelles barrières malgré interdépendance économique.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="geopolitics">
            <AccordionTrigger className="text-xl text-purple-700">
              III. Enjeux géopolitiques des frontières modernes
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Shield className="h-5 w-5" />
                      Sécurisation vs. ouverture : le dilemme contemporain
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Défis sécuritaires</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-purple-100 rounded-lg">
                            <div className="font-semibold text-purple-800 mb-1">Migrations climatiques</div>
                            <div className="text-sm text-purple-700">
                              1 milliard de migrants climatiques attendus d'ici 2050. 
                              Pressions nouvelles sur frontières Nord-Sud.
                            </div>
                          </div>
                          <div className="p-3 bg-purple-100 rounded-lg">
                            <div className="font-semibold text-purple-800 mb-1">Terrorisme transnational</div>
                            <div className="text-sm text-purple-700">
                              Réseaux dépassent frontières étatiques. Coordination 
                              internationale vs. souveraineté nationale.
                            </div>
                          </div>
                          <div className="p-3 bg-purple-100 rounded-lg">
                            <div className="font-semibold text-purple-800 mb-1">Cybersécurité</div>
                            <div className="text-sm text-purple-700">
                              Frontières numériques émergentes. Contrôle flux de données, 
                              souveraineté digitale (Chine, Russie).
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Innovations frontalières</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                            <div className="font-semibold text-green-800 mb-1">Frontières intelligentes</div>
                            <div className="text-sm text-green-700">
                              Biométrie, reconnaissance faciale, IA. Accélération flux 
                              légitimes, détection menaces.
                            </div>
                          </div>
                          <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                            <div className="font-semibold text-blue-800 mb-1">Coopération régionale</div>
                            <div className="text-sm text-blue-700">
                              Schengen, CARICOM, Union africaine. Mutualisation 
                              contrôles, harmonisation procédures.
                            </div>
                          </div>
                          <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                            <div className="font-semibold text-yellow-800 mb-1">Zones spéciales</div>
                            <div className="text-sm text-yellow-700">
                              Zones économiques spéciales, ports francs. Régimes 
                              dérogatoires pour attirer investissements.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-indigo-100 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">
                        <Globe className="inline h-4 w-4 mr-2" />
                        Vision prospective
                      </h4>
                      <p className="text-sm text-indigo-700">
                        Les frontières du XXIe siècle évoluent vers un modèle hybride : 
                        <strong>perméables aux flux économiques</strong> légitimes grâce aux technologies, 
                        mais <strong>sélectives face aux défis sécuritaires</strong> (migrations, terrorisme, criminalité). 
                        L'enjeu géopolitique majeur réside dans l'équilibre entre ouverture nécessaire 
                        à la prospérité et contrôle indispensable à la sécurité.
                      </p>
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
              <p><strong>Michel Foucher</strong> : <em>"L'Obsession des frontières"</em> - Renaissance frontières contemporaines</p>
              <p><strong>J-P. Renard (1997)</strong> : <em>"Théorie espaces frontaliers"</em> - Espace profondeur ligne-frontière</p>
              <p><strong>CNUCED</strong> : Rapport Investissements Directs Étrangers 2024</p>
              <p><strong>OIM</strong> : Organisation Internationale pour les Migrations</p>
              <p><strong>OCDE</strong> : Flux migratoires et contrôles frontaliers</p>
              <p><strong>Think tanks sécuritaires</strong> : CSIS, IISS, SIPRI</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default FrontieresPage;