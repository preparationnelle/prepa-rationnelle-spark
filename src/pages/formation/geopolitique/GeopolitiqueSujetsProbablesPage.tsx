import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Target, TrendingUp, AlertCircle, Clock, CheckCircle, Lock, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopolitiqueSujetsProbablesPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const pronostics2025 = [
    {
      thematique: "Migrations internationales",
      frequence: "Jamais tombé seul",
      dernierSujet: "Frontières (2022-2024)",
      urgence: 9,
      commentaire: "Très probable car jamais traité de façon centrale malgré son importance actuelle (Ukraine, Afrique, climat)",
      sujets: [
        "Les migrations internationales bouleversent-elles les rapports de puissance ?",
        "Les États peuvent-ils encore contrôler les mobilités humaines ?"
      ],
      color: "red"
    },
    {
      thematique: "Désoccidentalisation / Nouvel ordre mondial",
      frequence: "Jamais tombé",
      dernierSujet: "-",
      urgence: 10,
      commentaire: "Sujet \"tendance\", traité indirectement via Chine/USA. L'expression \"désoccidentalisation\" devient centrale dans les discours stratégiques (BRICS, Global South, guerre en Ukraine).",
      sujets: [
        "La désoccidentalisation du monde signe-t-elle la fin de l'ordre international libéral ?",
        "Les puissances émergentes imposent-elles un nouvel ordre mondial ?"
      ],
      color: "red"
    },
    {
      thematique: "Guerre",
      frequence: "Jamais directement",
      dernierSujet: "Jamais",
      urgence: 10,
      commentaire: "Très probable avec le retour des conflictualités majeures",
      sujets: [
        "La puissance militaire fait-elle son retour dans les relations internationales ?"
      ],
      color: "red"
    },
    {
      thematique: "Transition énergétique / Ressources",
      frequence: "Jamais traité frontalement",
      dernierSujet: "2008 (pétrole), 2019 (matières premières)",
      urgence: 8,
      commentaire: "Actualité brûlante : guerre en Ukraine, minerais rares, dépendances européennes. Une vision systémique est probable (pas que pétrole).",
      sujets: [
        "Qui contrôle les ressources contrôle-t-il le monde ?",
        "La transition énergétique est-elle facteur de conflit ou de coopération ?"
      ],
      color: "orange"
    },
    {
      thematique: "Ordre mondial et puissances",
      frequence: "Fréquent mais sous différentes formes",
      dernierSujet: "2023 (France), 2022 (routes stratégiques)",
      urgence: 8,
      commentaire: "Retour cyclique du thème du leadership mondial, souvent tourné autour de la Chine et des USA.",
      sujets: [
        "Un nouvel ordre mondial est-il en train d'émerger ?",
        "Les grandes puissances ont-elles encore les moyens d'imposer l'ordre ?"
      ],
      color: "orange"
    },
    {
      thematique: "France / Europe",
      frequence: "Tombe tous les 4-5 ans",
      dernierSujet: "2023 (France), 2018 (UE)",
      urgence: 8,
      commentaire: "Peut revenir via Europe-puissance, défense, autonomie stratégique, mais peu probable deux ans après France.",
      sujets: [
        "L'Union européenne face aux nouvelles conflictualités mondiales."
      ],
      color: "orange"
    },
    {
      thematique: "Chine Indo-Pacifique",
      frequence: "Tombé récemment",
      dernierSujet: "2023, 2022, 2019",
      urgence: 8,
      commentaire: "À travailler",
      sujets: [
        "L'Indo-Pacifique est-il devenu le centre stratégique du monde ?"
      ],
      color: "orange"
    },
    {
      thematique: "Espaces maritimes",
      frequence: "Souvent tombé",
      dernierSujet: "2022, 2021",
      urgence: 7,
      commentaire: "Toujours possible",
      sujets: [
        "Les espaces maritimes sont-ils au cœur des rivalités de puissance ?",
        "Contrôler la mer, est-ce encore dominer le monde ?"
      ],
      color: "yellow"
    },
    {
      thematique: "États-Unis",
      frequence: "Souvent",
      dernierSujet: "Souvent",
      urgence: 7,
      commentaire: "Probable",
      sujets: [
        "Les États-Unis peuvent-ils encore imposer leur leadership ?",
        "Les États-Unis face à la contestation de leur hégémonie."
      ],
      color: "yellow"
    },
    {
      thematique: "L'industrie (en France)",
      frequence: "Jamais",
      dernierSujet: "Jamais",
      urgence: 7,
      commentaire: "Probable",
      sujets: [
        "L'industrie est-elle encore un levier de puissance pour la France ?",
        "Réindustrialiser la France (Europe) : enjeu économique ou géopolitique ?"
      ],
      color: "yellow"
    },
    {
      thematique: "Mondialisation / démondialisation",
      frequence: "Fréquent",
      dernierSujet: "2024 (climat et mondialisation)",
      urgence: 7,
      commentaire: "Sujet déjà tombé en 2024, à éviter.",
      sujets: [
        "La Chine redéfinit-elle l'ordre mondial ?"
      ],
      color: "yellow"
    },
    {
      thematique: "Cyber / IA / numérique",
      frequence: "Jamais tombé",
      dernierSujet: "2021 (espaces communs incluant numérique)",
      urgence: 6,
      commentaire: "Sujet original, d'actualité, monté en puissance depuis 2020 (cyberattaques, souveraineté numérique, IA). Sujet possible à l'ESSEC.",
      sujets: [
        "Le cyberespace est-il devenu un espace stratégique comme les autres ?"
      ],
      color: "green"
    },
    {
      thematique: "Frontières",
      frequence: "Sujet déjà tombé",
      dernierSujet: "2022, 2024",
      urgence: 6,
      commentaire: "Sujet épuisé sur les 3 dernières années : très peu probable en 2025 sauf par ricochet (migration)",
      sujets: [
        "Vers un retour des frontières ?"
      ],
      color: "green"
    }
  ];

  const getUrgenceColor = (urgence: number) => {
    if (urgence >= 9) return "text-red-700 bg-red-100";
    if (urgence >= 7) return "text-orange-700 bg-orange-100";
    return "text-green-700 bg-green-100";
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "red": return "border-red-500";
      case "orange": return "border-orange-500"; 
      case "yellow": return "border-yellow-500";
      case "green": return "border-green-500";
      default: return "border-gray-500";
    }
  };

  const handleSubjectClick = (sujet: string) => {
    setSelectedSubject(sujet);
  };

  const SubjectModal = ({ sujet, onClose }: { sujet: string; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{sujet}</h3>
            <Button onClick={onClose} variant="ghost" size="sm">✕</Button>
          </div>
        </div>
        <div className="p-6 space-y-6">
          {/* Introduction - Bloquée */}
          <div className="border rounded-lg p-4 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-red-600" />
              Introduction
            </h4>
            <div className="text-center py-6">
              <Lock className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <p className="text-red-800 font-medium mb-1">Contenu Premium</p>
              <p className="text-red-700 text-sm">
                Introduction complète avec analyse du sujet, définitions et problématique
              </p>
            </div>
          </div>

          {/* Plan détaillé - Bloqué */}
          <div className="border rounded-lg p-4 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-red-600" />
              Plan détaillé
            </h4>
            <div className="text-center py-6">
              <Lock className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <p className="text-red-800 font-medium mb-1">Contenu Premium</p>
              <p className="text-red-700 text-sm">
                Plan structuré en 3 parties avec sous-parties et transitions
              </p>
            </div>
          </div>

          {/* Développement complet - Bloqué */}
          <div className="border rounded-lg p-4 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-red-600" />
              Développement complet
            </h4>
            <div className="text-center py-8">
              <Lock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <p className="text-red-800 font-medium mb-2">Contenu Premium</p>
              <p className="text-red-700 text-sm mb-4">
                Accédez au développement complet avec exemples, transitions et arguments détaillés
              </p>
              <div className="space-y-2">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Débloquer le contenu premium
                </Button>
                <p className="text-xs text-red-600">
                  Inclus : introduction + plan détaillé + développement + exemples + conseils méthodologiques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
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
            <span className="text-gray-900 font-bold">Pronostics 2025</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Pronostics géopolitiques 2025</h1>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-blue-200 bg-blue-50/50">
            <CardContent className="p-6">
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-700 mb-4">
                  Cette liste recense les <strong>sujets géopolitiques les plus probables pour les concours 2025</strong>. 
                  L'objectif est de vous entraîner à construire rapidement un plan, à mobiliser les bons exemples, 
                  et à vérifier que vous êtes prêts sur les thématiques les plus centrales et actuelles.
                </p>
                <p className="text-gray-700 mb-4">
                  Je ne prétends évidemment pas savoir quel sujet tombera le jour J. En revanche, j'ai eu la chance 
                  d'échanger avec plusieurs <strong>professeurs correcteurs et concepteurs de sujets</strong>, qui ont une 
                  connaissance fine des logiques de sélection et des tendances du moment.
                </p>
                <p className="text-gray-700 mb-4">
                  Cette liste est le fruit de nos discussions, croisée avec l'actualité stratégique, 
                  les sujets tombés les années précédentes, et les grandes dynamiques du monde contemporain.
                </p>
                <p className="text-blue-800 font-semibold">
                  Utilisez-la comme un support d'entraînement, comme une checklist : demandez-vous si vous 
                  sauriez traiter ces sujets aujourd'hui. Bonne chance à tous ! 
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Légende */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Légende du niveau d'urgence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm">9-10/10 : Très élevée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">7-8/10 : Élevée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm">5-6/10 : Moyenne</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pronostics par thématique */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Pronostics détaillés par thématique</h2>
          <div className="grid gap-6">
            {pronostics2025.map((theme, index) => (
              <Card key={index} className={`border-l-4 ${getBorderColor(theme.color)} hover:shadow-lg transition-all duration-200`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{theme.thematique}</CardTitle>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgenceColor(theme.urgence)}`}>
                          Urgence: {theme.urgence}/10
                        </span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Calendar className="h-3 w-3" />
                          {theme.dernierSujet}
                        </div>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {theme.frequence}
                        </span>
                      </div>
                    </div>
                    <TrendingUp className={`h-6 w-6 ${theme.color === 'red' ? 'text-red-600' : theme.color === 'orange' ? 'text-orange-600' : theme.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <strong>Commentaire stratégique :</strong> {theme.commentaire}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Sujets probables :</h4>
                    <div className="space-y-2">
                      {theme.sujets.map((sujet, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-2 flex-1">
                            <Eye className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">"{sujet}"</span>
                          </div>
                          <Button
                            onClick={() => handleSubjectClick(sujet)}
                            size="sm"
                            variant="outline"
                            className="ml-4 hover:bg-blue-50 hover:border-blue-300"
                          >
                            Découvrir le sujet
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Besoin d'aide sur ces thématiques ?</h3>
              <p className="text-green-700 mb-4">
                Contactez-moi si vous voulez des fiches sur les différentes notions ! Bon courage !
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Me contacter pour des fiches détaillées
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal pour les sujets */}
      {selectedSubject && (
        <SubjectModal 
          sujet={selectedSubject} 
          onClose={() => setSelectedSubject(null)} 
        />
      )}
    </div>
  );
};

export default GeopolitiqueSujetsProbablesPage;