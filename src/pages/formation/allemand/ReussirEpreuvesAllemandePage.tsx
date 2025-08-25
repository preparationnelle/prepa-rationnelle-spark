import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, MessageSquare, FileText, CheckCircle } from 'lucide-react';

const ReussirEpreuvesAllemandePage: React.FC = () => {
  const epreuvesModules = [
    {
      id: 1,
      title: "Comment réussir le laisser",
      description: "Maîtriser l'art de la rédaction en allemand",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      path: "/formation/allemand/laisser"
    },
    {
      id: 2,
      title: "Comment réussir la colle",
      description: "Excellence dans l'expression orale et la compréhension",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      path: "/formation/allemand/colle"
    },
    {
      id: 3,
      title: "Comment réussir la synthèse de texte",
      description: "Techniques de résumé et d'analyse de documents",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-600 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      path: "/formation/allemand/synthese"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/allemand">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Réussir les épreuves d'allemand
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez les différentes épreuves du concours : laisser, colle et synthèse de texte
            </p>
          </div>
        </div>

        {/* Description générale */}
        <Card className="mb-8 bg-gradient-to-r from-slate-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Les épreuves d'allemand au concours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg">
                Les épreuves d'allemand évaluent votre maîtrise de la langue à travers différents exercices :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Le laisser</h3>
                  <p className="text-sm">Rédaction d'un essai argumenté sur un sujet donné</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">La colle</h3>
                  <p className="text-sm">Épreuve orale de compréhension et d'expression</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">La synthèse</h3>
                  <p className="text-sm">Résumé et analyse de documents en allemand</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules des épreuves */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {epreuvesModules.map((module) => (
            <Card 
              key={module.id} 
              className={`bg-gradient-to-br ${module.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center text-white mb-4`}>
                  {module.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">
                  {module.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Link to={module.path}>
                  <Button 
                    className={`w-full bg-gradient-to-r ${module.color} text-white font-semibold py-3 hover:shadow-lg transition-shadow`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accéder au module
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conseils généraux */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Conseils généraux pour réussir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Préparation</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• Travaillez régulièrement le vocabulaire</li>
                  <li>• Entraînez-vous à la grammaire</li>
                  <li>• Lisez la presse allemande</li>
                  <li>• Écoutez des podcasts en allemand</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Le jour J</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• Restez calme et concentré</li>
                  <li>• Gérez votre temps efficacement</li>
                  <li>• Relisez vos productions</li>
                  <li>• Montrez votre confiance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link to="/formation/allemand">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation allemande
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReussirEpreuvesAllemandePage;
