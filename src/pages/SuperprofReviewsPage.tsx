import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ExternalLink, Quote, ArrowLeft, Home, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const SuperprofReviewsPage = () => {
  const reviews = [
    {
      name: "Arthur",
      content: "Je recommande vivement Dimitar en tant que professeur particulier. Grâce à son accompagnement régulier, j'ai pu gagner plus de 4 à 5 en maths, ce qui a vraiment fait la différence pour le concours. Il est très pédagogue, toujours à l'écoute et sait s'adapter à mes difficultés pour m'expliquer les choses de manière claire. Travailler avec lui m'a permis de reprendre confiance sur une matière que je considérais comme un point faible.",
      subject: "Maths ECG",
      progress: "+4 à 5 points en maths"
    },
    {
      name: "Mae",
      content: "Je recommande vivement Dimitar comme prof. Il m'a aidé à progresser dans une matière où j'avais des difficultés. Il a su m'expliquer les choses clairement et avec patience, toujours à l'écoute et très pédagogue. Grâce à ses compétences et à sa méthode, j'ai vraiment pu gagner en confiance et en compréhension. C'est quelqu'un de sérieux, impliqué, et toujours motivé à faire progresser ses élèves. Vous pouvez lui faire confiance sans hésiter.",
      subject: "Maths",
      progress: "Progression significative"
    },
    {
      name: "Louise",
      content: "Dimitar est un excellent professeur de maths. Il explique clairement, avec patience, et rend les cours beaucoup plus faciles à comprendre. Grâce à lui, j'ai vraiment progressé et repris confiance. Je le recommande sans hésitation.",
      subject: "Maths",
      progress: "Reprise de confiance"
    },
    {
      name: "Daniel",
      content: "Dimitar m'a beaucoup aidé en géopolitique, notamment sur la méthode. Grâce à son accompagnement, j'ai pu progresser en rigueur, notamment dans les introductions et la structuration des dissertations. J'ai été admis cette année à l'ESCP, et son aide y a clairement contribué. Je le recommande vivement.",
      subject: "Géopolitique",
      progress: "Admis à l'ESCP"
    },
    {
      name: "Jad",
      content: "J'ai eu la chance de faire ma prépa ECG avec Dimitar, et je ne peux que le recommander chaleureusement à tous les élèves de prépa HEC. Il connaît parfaitement les exigences des concours, que ce soit en Maths ECG, en Anglais ou en Géopolitique. Il explique avec une grande clarté, va droit à l'essentiel, tout en prenant le temps de s'assurer que les notions sont bien comprises. Sa méthode est rigoureuse, mais toujours adaptée au niveau de chacun. Que vous visiez une progression régulière ou l'excellence dans les matières clés de la prépa ECG, vous serez entre de très bonnes mains. Dimitar est aussi quelqu'un de très bienveillant et pédagogue, avec qui il est facile de progresser sans pression inutile. Il sait ce que c'est que de passer par la prépa, car il l'a vécue, et ça fait toute la différence. Si vous cherchez un prof de prépa ECG compétent, impliqué et humain, je vous recommande Dimitar les yeux fermés.",
      subject: "Prépa ECG",
      progress: "Méthode rigoureuse adaptée"
    },
    {
      name: "Nathalie",
      content: "Excellent professeur, très investi et toujours à l'écoute, qui m'a permis de vraiment progresser en maths pendant mes deux années de prépa. Grâce à un accompagnement hebdomadaire pendant plusieurs mois, j'ai pu consolider et améliorer mes connaissances et méthodes en mathématiques ce qui m'a permis d'aborder un peu plus sereinement mes concours. Un grand merci à lui, je le recommande fortement pour celui qui souhaite s'améliorer en mathématiques !",
      subject: "Maths Prépa",
      progress: "Accompagnement hebdomadaire"
    },
    {
      name: "Martin",
      content: "Étant en prépa ECG, j'étais très mauvais en culture générale (philo). Rencontré sur LinkedIn, il m'a donné des conseils très pertinents pour la méthode d'apprentissage, d'analyse de sujets et de rédaction qui m'ont permis de décoller en Culture Générale (philo). Je recommande !",
      subject: "Culture Générale",
      progress: "Décollage en philo"
    },
    {
      name: "Hugo",
      content: "Dimitar fait preuve d'une grande rigueur méthodologique, ce qui m'a permis de progresser de manière significative en mathématiques durant mes deux années de prépa ECG. Je le recommande vivement.",
      subject: "Maths ECG",
      progress: "Progression significative"
    },
    {
      name: "Jean",
      content: "Grâce à Dimitar, j'ai progressé rapidement. Je recommande à 100 % !",
      subject: "Maths",
      progress: "Progression rapide"
    },
    {
      name: "Ismael",
      content: "Dimitar est un enseignant passionné et réellement engagé dans la réussite de ses élèves, m'ayant moi même permis de m'améliorer dans des sujets me semblant abstraits comme Python. Il est aussi particulièrement à l'écoute et exprime une volonté constante d'aider. Je suis convaincu qu'il saura apporter la même excellence et implication dans chacun de ses projets.",
      subject: "Python",
      progress: "Amélioration en Python"
    },
    {
      name: "Kijanshika",
      content: "Dimitar est un prof génial. Il sait expliquer les choses de manière claire et ludique. De plus, il nous donne des conseils et des outils utiles pour le travail personnel afin de s'améliorer en continu. Je ne peux que vous le recommander en vue de mon expérience en tant qu'étudiante de Dimitar !!",
      subject: "Méthodologie",
      progress: "Outils pour le travail personnel"
    },
    {
      name: "Alexandre",
      content: "Un super prof, vraiment à l'écoute et patient ! Il prend le temps d'expliquer les choses clairement et ne passe jamais à la suite tant que ce n'est pas bien compris. Avec lui, on avance étape par étape, en douceur, et on sent qu'il veut vraiment nous faire progresser. On se sent accompagné à chaque instant.",
      subject: "Accompagnement",
      progress: "Accompagnement personnalisé"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <>
      <Navigation />
      
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Avis Superprof</span>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {renderStars()}
              <span className="text-2xl font-bold text-gray-700 ml-2">5.0/5</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tous mes avis Superprof
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez les témoignages de mes élèves et leurs parcours de réussite
            </p>
            
            {/* Statistiques */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Avis vérifiés</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">+4-5</div>
                <div className="text-gray-600">Points de progression</div>
              </div>
            </div>
          </div>

          {/* Grille des avis */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 mb-2">{review.name}</CardTitle>
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars()}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{review.subject}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {review.progress}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-5 w-5 text-blue-400 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed pl-6 text-sm">
                      {review.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Prêt(e) à rejoindre mes élèves satisfaits ?
              </h2>
              <p className="text-gray-600 mb-8">
                Découvrez tous mes avis vérifiés et commencez votre parcours de réussite
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.superprof.fr/maths-cours-particuliers-maths-colleur-grandes-prepas-parisiennes.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Voir tous les avis sur Superprof
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                
                <Link to="/contact">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 font-semibold py-4 px-8 text-lg"
                  >
                    Me contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperprofReviewsPage; 