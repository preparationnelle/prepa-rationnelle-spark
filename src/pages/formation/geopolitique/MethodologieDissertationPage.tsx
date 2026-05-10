import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, PenTool, Clock, Target, CheckCircle, AlertTriangle, BookOpen, FileText, Lightbulb, ArrowRight } from 'lucide-react';

const MethodologieDissertationPage = () => {
  const attentesCorrecteur = [
    {
      axe: "Structure visible",
      attente: "Introduction – 3 parties équilibrées – conclusion",
      comment: "Titres clairs, sauts de ligne, numérotation cohérente"
    },
    {
      axe: "Problématisation",
      attente: "Une question centrale pertinente",
      comment: "Formuler la problématique en fin d'introduction et y faire constamment référence"
    },
    {
      axe: "Précision factuelle",
      attente: "Dates, chiffres, noms exacts",
      comment: "Vérifier ses données ; éviter les formules vagues"
    },
    {
      axe: "Argumentation",
      attente: "Raisonnement logique + exemple probant",
      comment: "Un paragraphe = une idée + un exemple précis clairement daté et localisé"
    },
    {
      axe: "Style et langue",
      attente: "Français maîtrisé, vocabulaire disciplinaire",
      comment: "Phrases courtes mais variées, connecteurs logiques, présentation impeccable"
    }
  ];

  const typesPlans = [
    {
      type: "Dialectique",
      structure: "I. Thèse  II. Antithèse  III. Synthèse",
      usage: "Question fermée Oui/Non",
      exemple: "La mondialisation remet-elle en cause les frontières ?"
    },
    {
      type: "Héritages/Facteurs/Bilan",
      structure: "I. Héritages  II. Facteurs  III. Bilan",
      usage: "Sujet évolutif sur le long terme",
      exemple: "Dynamiques territoriales de l'Asie"
    },
    {
      type: "Manifestations/Causes/Limites",
      structure: "I. Manifestations  II. Causes  III. Limites",
      usage: "Phénomène contemporain",
      exemple: "La puissance chinoise en Asie orientale"
    },
    {
      type: "Chronologique",
      structure: "I. Période 1  II. Période 2  III. Période 3",
      usage: "Sujet explicitement daté",
      exemple: "L'Europe depuis 1945"
    },
    {
      type: "Thématique",
      structure: "I. Économie  II. Politique  III. Culture",
      usage: "Sujet pluridimensionnel",
      exemple: "Matières premières et diplomatie des États"
    },
    {
      type: "Scalaire",
      structure: "I. Locale  II. Nationale  III. Mondiale",
      usage: "Sujet géographique pur",
      exemple: "Les espaces maritimes, sources de tensions"
    }
  ];

  const gestionTemps = [
    { phase: "Analyse du sujet & brouillon", duree: "30–45 min" },
    { phase: "Rédaction de l'introduction", duree: "20 min" },
    { phase: "Développement", duree: "2 h 15" },
    { phase: "Conclusion", duree: "10 min" },
    { phase: "Relecture", duree: "10 min" }
  ];

  const checklist = [
    "Accroche liée au sujet",
    "Définitions claires",
    "Problématique unique",
    "Plan annoncé et respecté",
    "Exemple précis par sous-partie",
    "Transitions visibles",
    "Conclusion rédigée",
    "Orthographe relue"
  ];

  return (
    <div className="relative">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/95 backdrop-blur-sm/95 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper/95 backdrop-blur-sm/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique/methodologie" className="hover:text-foreground transition-colors">
              Méthodologie
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Dissertation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header de l'article */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-carnet-red/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-pr-orange-pale to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-carnet-red text-white">
                  <PenTool className="h-5 w-5" />
                </div>
                <Badge className="bg-carnet-red">Méthodologie</Badge>
                <span className="text-sm text-muted-foreground">25 min de lecture</span>
              </div>
              <CardTitle className="text-2xl">Comment construire une dissertation</CardTitle>
              <p className="text-muted-foreground">
                Méthodologie complète de la dissertation en Histoire‑Géographie‑Géopolitique (Prépa ECG)
              </p>
            </CardHeader>
          </Card>

          {/* Contenu de l'article */}
          <Accordion type="multiple" className="w-full space-y-4">
            
            {/* 1. Pourquoi une méthodologie */}
            <AccordionItem value="pourquoi-methodologie" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-carnet-red text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">1. Pourquoi une méthodologie ?</h3>
                    <p className="text-sm text-muted-foreground">L'importance de la structure dans l'évaluation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    La dissertation HGG n'est pas un simple inventaire de connaissances : c'est une démonstration raisonnée 
                    qui répond à une question géopolitique précise.
                  </p>
                  
                  <div className="bg-pr-orange-pale p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Elle évalue votre capacité à :</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5" />
                        <span>Cerner le problème que pose le sujet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5" />
                        <span>Construire une argumentation ordonnée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5" />
                        <span>Mobiliser des faits exacts et actuels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5" />
                        <span>Rédiger clairement et sans fautes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-l-yellow-500">
                    <p className="text-sm">
                      <strong>💡 Point clé :</strong> Maîtriser la méthode vous permet de faire ressortir la valeur de vos idées 
                      plutôt que de laisser le correcteur chercher la logique de votre copie.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Ce que le correcteur attend */}
            <AccordionItem value="attentes-correcteur" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">2. Ce que le correcteur attend</h3>
                    <p className="text-sm text-muted-foreground">Critères d'évaluation et marqueurs recherchés</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">
                      ⏱️ Le jury lit vite (7‑10 min par copie) ; il recherche donc immédiatement certains marqueurs :
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {attentesCorrecteur.map((item, index) => (
                      <Card key={index} className="border-l-4 border-l-orange-500">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h5 className="font-medium text-orange-700">{item.axe}</h5>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{item.attente}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{item.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-l-red-500">
                    <p className="text-sm">
                      <strong>⚠️ Attention :</strong> Chaque élément absent ou négligé entraîne une décote rapide.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Structure générale */}
            <AccordionItem value="structure-generale" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">3. La structure générale de la copie</h3>
                    <p className="text-sm text-muted-foreground">Organisation en trois temps</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">3.1 Introduction (≈ 1 page en moyenne)</h4>
                        <p className="text-sm text-muted-foreground">
                          Elle installe le sujet, en précise les enjeux et annonce votre feuille de route. 
                          Sans introduction solide, le correcteur doute de la suite.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">3.2 Développement (≈ 5 pages)</h4>
                        <p className="text-sm text-muted-foreground">
                          Trois parties équilibrées, chacune composée de 2 ou 3 sous‑parties et clairement séparées 
                          par une transition explicite. Cette symétrie et ces repères garantissent la lisibilité.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">3.3 Conclusion (¼ page)</h4>
                        <p className="text-sm text-muted-foreground">
                          Elle ferme la démonstration, répond explicitement à la problématique et propose, 
                          si le temps le permet, une ouverture.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 4. Analyse préalable du sujet */}
            <AccordionItem value="analyse-sujet" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">4. Analyse préalable du sujet</h3>
                    <p className="text-sm text-muted-foreground">Décortiquer pour éviter le hors-sujet</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Avant de poser une ligne d'introduction, il faut décortiquer le sujet : vous évitez ainsi le hors‑sujet et dégagez la problématique.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-4">4.1 Lecture active du libellé</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Réécriture</p>
                          <p className="text-sm text-muted-foreground">Copiez le sujet au brouillon, lentement, pour ancrer chaque terme</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Soulignage</p>
                          <p className="text-sm text-muted-foreground">Surlignez ou entourez chaque mot clé (concepts, périodes, acteurs, échelles)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Questions immédiates</p>
                          <p className="text-sm text-muted-foreground">Notez en marge : « Qu'est‑ce qu'on entend par… ? », « Quel espace ? », « Quelle période ? »</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">4.2 Analyse lexicale complète</h4>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-3">
                        Exemple avec le sujet : « Les frontières sont‑elles abolies par la mondialisation ? »
                      </p>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium">Définir :</span> Frontière = limite politique/culturelle/numérique ; 
                          Mondialisation = intensification des échanges/interdépendance
                        </div>
                        <div>
                          <span className="font-medium">Dimensionner :</span> Monde, 1970‑2025 (essor échanges + crises migratoires)
                        </div>
                        <div>
                          <span className="font-medium">Forme grammaticale :</span> « Sont‑elles abolies ? » → question fermée → plan dialectique
                        </div>
                        <div>
                          <span className="font-medium">Paradoxe :</span> Intensification des échanges ⇒ frontières plus poreuses mais contrôle accru
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">4.3 Bâtir l'ébauche de plan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Lister toutes les idées/exemples surgis lors de l'analyse lexicale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Regrouper par grandes logiques (économique/politique/culturelle)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Hiérarchiser : quel argument répond le plus directement à la problématique ?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Choisir la matrice de plan (dialectique, chronologique, thématique)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span><strong>Formuler une problématique provisoire</strong> qui articule vos trois futurs arguments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. Introduction pas à pas */}
            <AccordionItem value="introduction" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500 text-white">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">5. L'introduction pas à pas : exemple guidé</h3>
                    <p className="text-sm text-muted-foreground">Sujet fil rouge détaillé</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="font-medium text-indigo-700">
                      Sujet fil rouge : « Les États‑Unis restent‑ils aujourd'hui la seule superpuissance mondiale ? »
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Accroche</h4>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <p className="text-sm"><strong>Rôle :</strong> capter l'attention et cadrer le sujet</p>
                        <p className="text-sm">Formes possibles :</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Événement d'actualité ou fait emblématique récent (prioritaire)</li>
                          <li>• Statistique marquante</li>
                          <li>• Citation courte</li>
                          <li>• Comparaison géographique ou contraste saisissant</li>
                        </ul>
                        <div className="bg-white p-3 rounded border-l-4 border-l-indigo-500">
                          <p className="text-sm italic">
                            <strong>Exemple :</strong> En 2024, les États‑Unis représentent encore 24 % du PIB mondial 
                            et disposent de 11 groupes aéronavals, record inégalé.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Définitions & délimitation</h4>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <p className="text-sm"><strong>Pourquoi ?</strong> Verrouiller le vocabulaire et le cadre spatio‑temporel rassure le correcteur.</p>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded">
                            <p className="text-sm"><strong>Superpuissance :</strong> État capable de projeter durablement sa puissance économique, militaire, technologique et culturelle à l'échelle planétaire, avec une liberté d'action quasi totale.</p>
                          </div>
                          <div className="bg-white p-3 rounded">
                            <p className="text-sm"><strong>Aujourd'hui :</strong> Période allant de l'après‑Guerre froide jusqu'à 2025, marquée par l'essor de la Chine, les crises de 2008 et 2020 et la guerre en Ukraine.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Problématisation</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm mb-3"><strong>Objet :</strong> dégager la tension géopolitique, le paradoxe qui justifie l'analyse.</p>
                        <div className="bg-white p-3 rounded border-l-4 border-l-indigo-500">
                          <p className="text-sm italic">
                            L'ordre international repose encore largement sur la puissance américaine. Pourtant, l'ascension chinoise, 
                            la résilience russe et la montée de puissances régionales érodent cette centralité. 
                            Dès lors, une question se pose : les États‑Unis peuvent‑ils conserver une hégémonie durable 
                            alors qu'un nouvel ordre multipolaire se dessine ?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.4 Problématique</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="bg-white p-3 rounded border-l-4 border-l-indigo-500">
                          <p className="text-sm italic font-medium">
                            Dans quelle mesure les États‑Unis conservent‑ils une suprématie globale 
                            alors que de nouvelles puissances contestent leur leadership ?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.5 Annonce du plan</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="bg-white p-3 rounded border-l-4 border-l-indigo-500">
                          <p className="text-sm italic">
                            (I) Dans un premier temps, nous rappellerons les fondements multidimensionnels de la puissance américaine ; 
                            (II) puis, nous montrerons comment des rivaux émergents en limitent la portée ; 
                            (III) enfin, nous examinerons si ces limites signent la fin de l'unipolarité ou l'adaptation d'une superpuissance en réseau.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 6. Plans classiques */}
            <AccordionItem value="plans-classiques" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">6. Plans classiques : mode d'emploi rapide</h3>
                    <p className="text-sm text-muted-foreground">6 schémas de plan à maîtriser</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {typesPlans.map((plan, index) => (
                      <Card key={index} className="border-l-4 border-l-teal-500">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                              <Badge className="bg-teal-500 mb-2">{plan.type}</Badge>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{plan.structure}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{plan.usage}</p>
                            </div>
                            <div>
                              <p className="text-xs italic">"{plan.exemple}"</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">💡 Plan passe-partout : Héritages/Facteurs/Bilan</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Partie I :</strong> Héritages/Contexte → replacer les origines historiques</p>
                      <p><strong>Partie II :</strong> Situation actuelle/Facteurs → décrire le phénomène aujourd'hui</p>
                      <p><strong>Partie III :</strong> Limites/Prospective → nuancer, montrer les réserves</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Privilégiez ce triptyque quand le libellé n'impose pas explicitement un plan dialectique ou chronologique.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 7. Méthode I.D.E.A. */}
            <AccordionItem value="methode-idea" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">7. Rédaction des parties : méthode « I.D.E.A. »</h3>
                    <p className="text-sm text-muted-foreground">Structure fixe pour chaque sous-partie</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Chaque sous‑partie doit suivre un canevas fixe pour éviter les digressions et guider le lecteur.
                  </p>

                  <div className="grid gap-4">
                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-bold text-red-600">I - Idée directrice</h5>
                          </div>
                          <div>
                            <p className="text-sm">Énoncer l'argument majeur du paragraphe en une phrase claire</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground italic">De quoi veux‑je convaincre ici ?</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-bold text-red-600">D - Développement</h5>
                          </div>
                          <div>
                            <p className="text-sm">Expliquer, contextualiser, nuancer l'idée</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground italic">Quels mécanismes éclairent cette idée ?</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-bold text-red-600">E - Exemple</h5>
                          </div>
                          <div>
                            <p className="text-sm">Illustrer avec une statistique solide, un événement daté ou une thèse d'auteur</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground italic">Quel fait concret rend mon argument incontestable ?</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-bold text-red-600">A - Ancrage</h5>
                          </div>
                          <div>
                            <p className="text-sm">Boucler le paragraphe en montrant la pertinence de l'exemple</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground italic">Comment cet exemple répond‑il à la question centrale ?</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Application au sujet fil rouge</h4>
                    <div className="space-y-3 text-sm">
                      <p><strong>I :</strong> Les États‑Unis conservent une avance technologique décisive dans l'aéronautique.</p>
                      <p><strong>D :</strong> Ils maintiennent une R&D abondamment financée et attirent les talents mondiaux grâce à un écosystème universitaire‑industrie unique.</p>
                      <p><strong>E :</strong> En 2023, Boeing et Lockheed Martin totalisent 42 % des commandes d'avions militaires mondiales (rapport SIPRI, 2024).</p>
                      <p><strong>A :</strong> Cette domination technologique nourrit donc la composante militaire de la superpuissance américaine et conforte sa position hégémonique.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 8. Transitions */}
            <AccordionItem value="transitions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-500 text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">8. Transitions entre les grandes parties</h3>
                    <p className="text-sm text-muted-foreground">Assurer la fluidité du raisonnement</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Une transition ferme la partie exposée et ouvre logiquement la suivante ; 
                    elle aide le correcteur à suivre le raisonnement.
                  </p>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">8.1 Structure d'une transition</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-pink-600">1.</span>
                        <span><strong>Rappel‑bilan :</strong> résumez l'idée maîtresse en une demi‑phrase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-pink-600">2.</span>
                        <span><strong>Pont logique :</strong> annoncez la limite qui justifie la partie suivante</span>
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded border-l-4 border-l-pink-500">
                      <p className="text-sm italic">
                        <strong>Formule générique :</strong> « Cependant, si cet argument souligne X, 
                        il ne saurait occulter Y, qui exige désormais d'être analysé. »
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">8.2 Exemple appliqué</h4>
                    <p className="text-sm mb-2">Fin partie I → ouverture partie II :</p>
                    <div className="bg-white p-3 rounded border-l-4 border-l-pink-500">
                      <p className="text-sm italic">
                        En somme, la puissance américaine repose encore sur un trépied économique, militaire et technologique solide. 
                        Cependant, l'affirmation croissante de puissances concurrentes remet en cause cette suprématie sur plusieurs théâtres, 
                        ce qui nécessite d'évaluer les limites actuelles de l'hégémonie américaine.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 9. Conclusion */}
            <AccordionItem value="conclusion" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">9. La conclusion</h3>
                    <p className="text-sm text-muted-foreground">Clôture et ouverture contrôlée</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Clore la démonstration, répondre explicitement à la problématique et, si le temps le permet, ouvrir sur une perspective plus large.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-emerald-600">1.</span>
                          <span><strong>Bilan synthétique :</strong> Rappeler en trois phrases l'idée directrice de chaque partie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-emerald-600">2.</span>
                          <span><strong>Réponse explicite :</strong> Reformuler la problématique et y répondre sans ambiguïté</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-emerald-600">3.</span>
                          <span><strong>Ouverture contrôlée :</strong> Poser une question connexe (facultatif si le temps manque)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Exemple appliqué au sujet fil rouge</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded">
                          <p className="text-sm"><strong>Bilan :</strong> D'abord, nous avons montré que la puissance américaine repose sur des atouts uniques ; ensuite, nous avons souligné les limites imposées par de nouvelles puissances ; enfin, nous avons examiné les scénarios d'adaptation possibles.</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-sm"><strong>Réponse :</strong> Les États‑Unis ne sont plus la seule superpuissance, mais conservent une prééminence relative grâce à leur capacité d'innovation et à leurs alliances.</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-sm"><strong>Ouverture :</strong> La durabilité de cette prééminence dépendra de la capacité de Washington à amorcer sa réindustrialisation, à partager le leadership dans la régulation de l'IA et à rester compétitif dans la nouvelle course vers l'espace.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 10. Conseils de forme et gestion du temps */}
            <AccordionItem value="conseils-forme" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">10. Conseils de forme et gestion du temps</h3>
                    <p className="text-sm text-muted-foreground">Optimisation et présentation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Conseils de forme</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                        <span><strong>Clarté visuelle :</strong> titres clairement soulignés, alinéas nets, espaces suffisants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                        <span><strong>Présentation :</strong> encre noire ou bleu foncé, numérotation des pages, respect consignes BCE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                        <span><strong>Langue :</strong> phrases courtes, mots précis, connecteurs logiques variés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                        <span><strong>Relecture fractionnée :</strong> relire chaque section dès qu'elle est finie</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Gestion des 4 heures</h4>
                    <div className="grid gap-3">
                      {gestionTemps.map((item, index) => (
                        <Card key={index} className="border-l-4 border-l-yellow-500">
                          <CardContent className="p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{item.phase}</span>
                              <Badge className="bg-yellow-500">{item.duree}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 11. Checklist finale */}
            <AccordionItem value="checklist" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-600 text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">11. Checklist avant de remettre la copie</h3>
                    <p className="text-sm text-muted-foreground">Vérifications essentielles</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {checklist.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MethodologieDissertationPage;