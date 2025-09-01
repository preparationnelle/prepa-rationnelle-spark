import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap, Star, Award, Calendar, BarChart3, Brain, PenTool, Timer, Download, ExternalLink, Play } from 'lucide-react';

const RessourcesPage: React.FC = () => {
  const annalesBCE = [
    {
      annee: "2025",
      titre: "Nature et environnement",
      description: "Épreuve de synthèse sur la relation homme-nature",
      lien: "https://www.concours-bce.com/sites/default/files/2025-04/304.pdf",
      textes: 3
    },
    {
      annee: "2024",
      titre: "Économie et société",
      description: "Analyse des transformations économiques contemporaines",
      lien: "https://www.concours-bce.com/sites/default/files/2024-04/304.pdf",
      textes: 3
    },
    {
      annee: "2023",
      titre: "Politique et société",
      description: "Synthèse sur les enjeux sociétaux contemporains",
      lien: "https://www.concours-bce.com/sites/default/files/2023-05/304.pdf",
      textes: 3
    },
    {
      annee: "2022",
      titre: "Culture et identité",
      description: "Réflexion sur les mutations culturelles",
      lien: "https://www.concours-bce.com/sites/default/files/2023-05/304.pdf",
      textes: 3
    },
    {
      annee: "2021",
      titre: "Technologie et société",
      description: "Impact des nouvelles technologies sur la société",
      lien: "https://www.concours-bce.com/sites/default/files/2021-05/304.pdf",
      textes: 3
    },
    {
      annee: "2020",
      titre: "Écologie et développement",
      description: "Enjeux environnementaux et développement durable",
      lien: "https://www.concours-bce.com/sites/default/files/2020-07/304.pdf",
      textes: 3
    },
    {
      annee: "2019",
      titre: "Économie mondiale",
      description: "Transformations de l'économie globale",
      lien: "https://www.concours-bce.com/sites/default/files/importcsv/304_2019_Sujet.pdf",
      textes: 3
    }
  ];

  const annalesCorrigees = [
    {
      titre: "BCE 2024 - Économie numérique",
      description: "Sujet complet avec corrigé détaillé et grille d'évaluation",
      niveau: "Avancé",
      duree: "4h00",
      points: "16/20",
      tags: ["économie", "numérique", "innovation"]
    },
    {
      titre: "ECRICOME 2023 - Géopolitique énergétique",
      description: "Analyse de 3 textes sur les enjeux énergétiques mondiaux",
      niveau: "Intermédiaire",
      duree: "4h00",
      points: "14/20",
      tags: ["géopolitique", "énergie", "environnement"]
    },
    {
      titre: "BCE 2023 - Société et technologie",
      description: "Synthèse sur l'impact des réseaux sociaux",
      niveau: "Débutant",
      duree: "4h00",
      points: "12/20",
      tags: ["société", "technologie", "réseaux sociaux"]
    }
  ];

  const exercicesPratiques = [
    {
      titre: "Exercice 1 : Lecture analytique",
      description: "Apprendre à identifier les idées principales et secondaires",
      objectifs: ["Annotation efficace", "Hiérarchisation des idées", "Repérage des arguments"],
      duree: "45 min",
      difficulte: "Débutant"
    },
    {
      titre: "Exercice 2 : Structuration du plan",
      description: "Organiser les idées en parties cohérentes",
      objectifs: ["Plan thématique", "Progression logique", "Équilibre des parties"],
      duree: "60 min",
      difficulte: "Intermédiaire"
    },
    {
      titre: "Exercice 3 : Reformulation fidèle",
      description: "Maîtriser l'art de la synthèse sans dénaturer les idées",
      objectifs: ["Vocabulaire précis", "Neutralité objective", "Concision"],
      duree: "90 min",
      difficulte: "Avancé"
    }
  ];

  const grillesEvaluation = [
    {
      categorie: "Contenu (8 points)",
      criteres: [
        "Fidélité aux textes sources (3 pts)",
        "Pertinence des idées sélectionnées (2 pts)",
        "Cohérence de la progression (2 pts)",
        "Équilibre des parties (1 pt)"
      ]
    },
    {
      categorie: "Forme (6 points)",
      criteres: [
        "Clarté de l'expression (2 pts)",
        "Richesse du vocabulaire (2 pts)",
        "Correction de la langue (2 pts)"
      ]
    },
    {
      categorie: "Structure (4 points)",
      criteres: [
        "Respect du plan annoncé (2 pts)",
        "Qualité des transitions (2 pts)"
      ]
    },
    {
      categorie: "Respect des consignes (2 points)",
      criteres: [
        "Nombre de mots respecté (1 pt)",
        "Format et présentation (1 pt)"
      ]
    }
  ];

  const outilsPratiques = [
    {
      nom: "Chronomètre intelligent",
      description: "Application pour respecter le timing de chaque phase",
      avantages: ["Alertes programmées", "Statistiques de progression", "Rappels personnalisés"],
      utilisation: "Utiliser pendant chaque entraînement"
    },
    {
      nom: "Grille d'auto-évaluation",
      description: "Outil pour s'évaluer objectivement",
      avantages: ["Critères précis", "Progression visible", "Points d'amélioration"],
      utilisation: "Après chaque synthèse réalisée"
    },
    {
      nom: "Banque de vocabulaire",
      description: "Lexique spécialisé pour la synthèse",
      avantages: ["Mots de liaison", "Expressions précises", "Termes techniques"],
      utilisation: "Révision quotidienne de 15 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/synthese-texte">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ressources & Exercices Pratiques
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Outils, annales et exercices pour s'entraîner efficacement à l'épreuve de synthèse
            </p>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                Ressources : Annales, exercices, outils pratiques
              </p>
              <p className="text-sm text-gray-600">
                Mise à jour : Continuellement enrichie
              </p>
            </div>
          </div>
        </div>

        {/* Annales BCE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📋 Annales BCE (Épreuves officielles)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Accédez aux épreuves officielles de synthèse de texte du concours BCE des années précédentes.
              Ces documents sont essentiels pour comprendre le format exact, le niveau d'exigence et les thèmes abordés.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>💡 Conseil :</strong> Commencez par les années récentes (2023-2025) pour vous familiariser avec le format actuel,
                puis explorez les années plus anciennes pour voir l'évolution des sujets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annalesBCE.map((annale, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">BCE {annale.annee}</CardTitle>
                    <Badge className="bg-blue-600">
                      {annale.textes} textes
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{annale.titre}</h4>
                  <p className="text-sm text-gray-600 mb-4">{annale.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-gray-500">Épreuve officielle BCE</span>
                  </div>
                  <Button size="sm" className="w-full" variant="outline" asChild>
                    <a
                      href={annale.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir l'épreuve {annale.annee}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">🎯 Comment utiliser ces annales ?</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>Étape 1 :</strong> Lisez les textes sans regarder le temps</li>
              <li>• <strong>Étape 2 :</strong> Chronométrez-vous en conditions réelles (4h)</li>
              <li>• <strong>Étape 3 :</strong> Comparez avec les corrigés types</li>
              <li>• <strong>Étape 4 :</strong> Identifiez vos points d'amélioration</li>
            </ul>
          </div>
        </div>

        {/* Annales corrigées */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📚 Annales corrigées (avec solutions)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annalesCorrigees.map((annale, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {annale.niveau}
                    </Badge>
                    <Badge className="bg-green-600 text-xs">
                      {annale.points}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{annale.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{annale.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{annale.duree}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {annale.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            🎯 Exercices pratiques
          </h2>

          <div className="space-y-6">
            {exercicesPratiques.map((exercice, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{exercice.titre}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{exercice.difficulte}</Badge>
                    <Badge variant="secondary">{exercice.duree}</Badge>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{exercice.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Objectifs :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {exercice.objectifs.map((objectif, objIdx) => (
                      <div key={objIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{objectif}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Grille d'évaluation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📊 Grille d'évaluation détaillée
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grillesEvaluation.map((categorie, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{categorie.categorie}</h3>
                <div className="space-y-3">
                  {categorie.criteres.map((critere, critIdx) => (
                    <div key={critIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{critere}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note :</strong> Cette grille est basée sur les critères officiels des concours ECG.
              Utilisez-la pour vous auto-évaluer et identifier vos points d'amélioration.
            </p>
          </div>
        </div>

        {/* Outils pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            🛠️ Outils pratiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outilsPratiques.map((outil, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{outil.nom}</h3>
                <p className="text-sm text-gray-600 mb-4">{outil.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Avantages :</h4>
                  <div className="space-y-1">
                    {outil.avantages.map((avantage, avIdx) => (
                      <div key={avIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
                        <span className="text-xs text-gray-700">{avantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-4">{outil.utilisation}</p>

                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Découvrir
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Ressources complémentaires */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📖 Ressources complémentaires
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📝 Modèles de synthèse</h3>
              <p className="text-sm text-gray-600 mb-4">
                Exemples de synthèses excellentes avec analyse détaillée
              </p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Télécharger les modèles
              </Button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Vocabulaire spécialisé</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lexique complet pour la synthèse de texte
              </p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Télécharger le lexique
              </Button>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prêt à utiliser ces ressources ?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Toutes ces ressources sont conçues pour vous accompagner dans votre progression et maximiser vos chances de réussite.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Voir la méthode détaillée
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Planning annuel
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/synthese-texte">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation synthèse de texte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RessourcesPage;
