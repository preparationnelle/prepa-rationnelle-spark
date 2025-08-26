import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

const FormationEspagnolMethodologiePage: React.FC = () => {
  const examTypes = [
    {
      id: 1,
      title: "Épreuves Écrites",
      icon: <FileText className="w-6 h-6" />,
      description: "Maîtriser les différentes épreuves écrites des concours ECG",
      content: {
        theme: {
          title: "Thème grammatical",
          description: "Traduction du français vers l'espagnol avec correction grammaticale",
          tips: [
            "Analyser le texte source en détail",
            "Identifier les difficultés grammaticales",
            "Appliquer les règles de concordance",
            "Vérifier la syntaxe et la ponctuation"
          ]
        },
        version: {
          title: "Version espagnole",
          description: "Traduction de l'espagnol vers le français",
          tips: [
            "Comprendre le contexte culturel",
            "Maîtriser le vocabulaire spécifique",
            "Respecter le niveau de langue",
            "Rendre fidèlement le sens original"
          ]
        }
      }
    },
    {
      id: 2,
      title: "Épreuves Orales",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Préparation aux colles et entretiens oraux",
      content: {
        colle: {
          title: "La Colle",
          description: "Présentation orale sur un sujet de civilisation hispanique",
          preparation: [
            "15 minutes de préparation",
            "10 minutes de passage",
            "Être capable d'improviser",
            "Maîtriser son sujet parfaitement"
          ]
        },
        entretien: {
          title: "L'Entretien",
          description: "Discussion approfondie avec le jury",
          tips: [
            "Préparer des exemples personnels",
            "Montrer sa motivation",
            "Démontrer ses connaissances",
            "Communiquer efficacement"
          ]
        }
      }
    },
    {
      id: 3,
      title: "Synthèse de Texte",
      icon: <Target className="w-6 h-6" />,
      description: "Méthodologie pour réussir l'épreuve de synthèse",
      content: {
        method: {
          title: "Méthode pas à pas",
          steps: [
            "Lecture active et annotation",
            "Identification des idées principales",
            "Structure argumentative",
            "Rédaction en espagnol"
          ]
        },
        skills: {
          title: "Compétences requises",
          list: [
            "Compréhension approfondie",
            "Capacité de synthèse",
            "Expression écrite claire",
            "Maîtrise de l'espagnol académique"
          ]
        }
      }
    }
  ];

  const keyTips = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Gestion du temps",
      description: "Organisez votre temps efficacement lors des épreuves"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Préparation mentale",
      description: "Développez la confiance et la concentration"
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Gestion du stress",
      description: "Techniques pour rester calme sous pression"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Entraînement régulier",
      description: "Pratiquez régulièrement pour améliorer vos performances"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-80 left-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/espagnol">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Méthodologie des Épreuves
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stratégies et techniques pour réussir les épreuves d'espagnol aux concours des Grandes Écoles de Commerce
            </p>
          </div>
        </div>

        {/* Statistiques clés */}
        <Card className="mb-8 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Objectifs des Épreuves ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">15-20 min</div>
                <div className="text-orange-100">Temps par épreuve</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50-70%</div>
                <div className="text-orange-100">Coefficient LV2</div>
              </div>
              <div>
                <div className="text-3xl font-bold">C1-C2</div>
                <div className="text-orange-100">Niveau requis</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types d'épreuves */}
        <div className="space-y-6 mb-12">
          {examTypes.map((exam, index) => (
            <Card key={exam.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {exam.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {exam.title}
                  </CardTitle>
                </div>
                <p className="text-gray-600">{exam.description}</p>
              </CardHeader>
              <CardContent>
                {exam.id === 1 && (
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">{exam.content.theme.title}</h4>
                      <p className="text-orange-700 mb-3">{exam.content.theme.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.theme.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-center text-sm text-orange-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">{exam.content.version.title}</h4>
                      <p className="text-blue-700 mb-3">{exam.content.version.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.version.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-center text-sm text-blue-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {exam.id === 2 && (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">{exam.content.colle.title}</h4>
                      <p className="text-green-700 mb-3">{exam.content.colle.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.colle.preparation.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm text-green-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">{exam.content.entretien.title}</h4>
                      <p className="text-purple-700 mb-3">{exam.content.entretien.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.entretien.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-center text-sm text-purple-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {exam.id === 3 && (
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 mb-2">{exam.content.method.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.method.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center text-sm text-indigo-600">
                            <Badge variant="outline" className="mr-2 text-xs">{idx + 1}</Badge>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">{exam.content.skills.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exam.content.skills.list.map((skill, idx) => (
                          <div key={idx} className="flex items-center text-sm text-pink-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-pink-500" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conseils clés */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Conseils Clés pour la Réussite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/espagnol">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationEspagnolMethodologiePage;