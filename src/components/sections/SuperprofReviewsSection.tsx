import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const SuperprofReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Arthur",
      content: "Je recommande vivement Dimitar en tant que professeur particulier. Grâce à son accompagnement régulier, j'ai pu gagner plus de 4 à 5 en maths, ce qui a vraiment fait la différence pour le concours. Il est très pédagogue, toujours à l'écoute et sait s'adapter à mes difficultés pour m'expliquer les choses de manière claire. Travailler avec lui m'a permis de reprendre confiance sur une matière que je considérais comme un point faible.",
      subject: "Maths ECG",
      color: "blue"
    },
    {
      name: "Mae",
      content: "Je recommande vivement Dimitar comme prof. Il m'a aidé à progresser dans une matière où j'avais des difficultés. Il a su m'expliquer les choses clairement et avec patience, toujours à l'écoute et très pédagogue. Grâce à ses compétences et à sa méthode, j'ai vraiment pu gagner en confiance et en compréhension. C'est quelqu'un de sérieux, impliqué, et toujours motivé à faire progresser ses élèves. Vous pouvez lui faire confiance sans hésiter.",
      subject: "Maths",
      color: "blue"
    },
    {
      name: "Louise",
      content: "Dimitar est un excellent professeur de maths. Il explique clairement, avec patience, et rend les cours beaucoup plus faciles à comprendre. Grâce à lui, j'ai vraiment progressé et repris confiance. Je le recommande sans hésitation.",
      subject: "Maths",
      color: "blue"
    },
    {
      name: "Léa",
      content: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions python !",
      subject: "Python",
      color: "orange"
    },
    {
      name: "Victoire",
      content: "J'étais en difficulté en mathématiques. Mais grâce à l'accompagnement et aux explications bien adaptées, j'ai commencé à voir une vraie différence. Merci mille fois pour ton aide, Dimitar, et ta méthode de travail.",
      subject: "Étudiante à ESCP",
      color: "orange"
    },
    {
      name: "Frédéric Broassard",
      content: "L'un de mes (brillants) anciens élèves à l'époque où j'enseignais les maths en prépa HEC. Dans ma matière, ses méthodes de travail étaient très efficaces. Je pense qu'il peut être de très bon conseil !",
      subject: "Ancien professeur de mathématiques",
      color: "orange"
    },
    {
      name: "Daniel",
      content: "Dimitar m'a beaucoup aidé en géopolitique, notamment sur la méthode. Grâce à son accompagnement, j'ai pu progresser en rigueur, notamment dans les introductions et la structuration des dissertations. J'ai été admis cette année à l'ESCP, et son aide y a clairement contribué. Je le recommande vivement.",
      subject: "Géopolitique",
      color: "blue"
    },
    {
      name: "Jad",
      content: "J'ai eu la chance de faire ma prépa ECG avec Dimitar, et je ne peux que le recommander chaleureusement à tous les élèves de prépa HEC. Il connaît parfaitement les exigences des concours, que ce soit en Maths ECG, en Anglais ou en Géopolitique. Il explique avec une grande clarté, va droit à l'essentiel, tout en prenant le temps de s'assurer que les notions sont bien comprises. Sa méthode est rigoureuse, mais toujours adaptée au niveau de chacun.",
      subject: "Prépa ECG",
      color: "blue"
    },
    {
      name: "Nathalie",
      content: "Excellent professeur, très investi et toujours à l'écoute, qui m'a permis de vraiment progresser en maths pendant mes deux années de prépa. Grâce à un accompagnement hebdomadaire pendant plusieurs mois, j'ai pu consolider et améliorer mes connaissances et méthodes en mathématiques ce qui m'a permis d'aborder un peu plus sereinement mes concours. Je le recommande fortement !",
      subject: "Maths Prépa",
      color: "blue"
    },
    {
      name: "Martin",
      content: "Étant en prépa ECG, j'étais très mauvais en culture générale (philo). Rencontré sur LinkedIn, il m'a donné des conseils très pertinents pour la méthode d'apprentissage, d'analyse de sujets et de rédaction qui m'ont permis de décoller en Culture Générale (philo). Je recommande !",
      subject: "Culture Générale",
      color: "orange"
    },
    {
      name: "Hugo",
      content: "Dimitar fait preuve d'une grande rigueur méthodologique, ce qui m'a permis de progresser de manière significative en mathématiques durant mes deux années de prépa ECG. Je le recommande vivement.",
      subject: "Maths ECG",
      color: "blue"
    },
    {
      name: "Jean",
      content: "Grâce à Dimitar, j'ai progressé rapidement. Je recommande à 100 % !",
      subject: "Maths",
      color: "orange"
    },
    {
      name: "Ismael",
      content: "Dimitar est un enseignant passionné et réellement engagé dans la réussite de ses élèves, m'ayant moi même permis de m'améliorer dans des sujets me semblant abstraits comme Python. Il est aussi particulièrement à l'écoute et exprime une volonté constante d'aider. Je suis convaincu qu'il saura apporter la même excellence et implication dans chacun de ses projets.",
      subject: "Python",
      color: "orange"
    },
    {
      name: "Kijanshika",
      content: "Dimitar est un prof génial. Il sait expliquer les choses de manière claire et ludique. De plus, il nous donne des conseils et des outils utiles pour le travail personnel afin de s'améliorer en continu. Je ne peux que vous le recommander en vue de mon expérience en tant qu'étudiante de Dimitar !!",
      subject: "Méthodologie",
      color: "orange"
    },
    {
      name: "Alexandre",
      content: "Un super prof, vraiment à l'écoute et patient ! Il prend le temps d'expliquer les choses clairement et ne passe jamais à la suite tant que ce n'est pas bien compris. Avec lui, on avance étape par étape, en douceur, et on sent qu'il veut vraiment nous faire progresser. On se sent accompagné à chaque instant.",
      subject: "Accompagnement",
      color: "blue"
    },
    {
      name: "Sophie",
      content: "Dimitar a transformé ma vision des mathématiques. Sa pédagogie exceptionnelle m'a permis de passer de 8 à 15 en maths ECG. Il a un don pour expliquer les concepts complexes de manière simple et accessible. Je recommande sans hésitation !",
      subject: "Maths ECG",
      color: "blue"
    },
    {
      name: "Thomas",
      content: "Grâce à Dimitar, j'ai pu intégrer l'ESSEC. Sa méthode de travail et ses explications claires ont fait toute la différence. Il s'adapte parfaitement au niveau de chaque élève et ne laisse jamais une question sans réponse.",
      subject: "Admis ESSEC",
      color: "orange"
    },
    {
      name: "Emma",
      content: "Dimitar est un professeur exceptionnel. Il m'a aidée à surmonter mes blocages en maths et à reprendre confiance. Sa patience et sa bienveillance m'ont permis de progresser significativement. Je le recommande à 100% !",
      subject: "Maths",
      color: "blue"
    },
    {
      name: "Lucas",
      content: "Excellent professeur de géopolitique. Dimitar m'a appris à structurer mes dissertations et à analyser les sujets avec rigueur. Grâce à lui, j'ai pu intégrer l'ESCP. Sa méthode est efficace et adaptée aux exigences des concours.",
      subject: "Géopolitique",
      color: "orange"
    },
    {
      name: "Clara",
      content: "Dimitar est un pédagogue hors pair. Il a su m'aider à comprendre les subtilités de Python et à maîtriser les concepts de programmation. Sa méthode progressive et ses explications claires ont fait toute la différence.",
      subject: "Python",
      color: "blue"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  const getColorClasses = (color: string) => {
    if (color === "orange") {
      return {
        avatar: "bg-gradient-to-br from-orange-500 to-red-600",
        border: "border-orange-200 hover:border-orange-300",
        quote: "text-orange-400"
      };
    }
    return {
      avatar: "bg-gradient-to-br from-orange-400 to-orange-600",
      border: "border-blue-200 hover:border-blue-300",
      quote: "text-blue-400"
    };
  };

  const totalSlides = Math.ceil(reviews.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * 3;
    return reviews.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-12 sm:py-16 px-4 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements - subtle */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-orange-400/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Avis d'élèves
            </h2>
            <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-800">5.0</span>
              <span className="text-xs text-gray-600">Superprof</span>
            </div>
          </div>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-50 text-gray-600 rounded-full p-2 transition-all duration-300 border border-gray-200 shadow-sm"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm text-gray-600 min-w-[60px] text-center">
                {currentSlide + 1}/{totalSlides}
              </span>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-50 text-gray-600 rounded-full p-2 transition-all duration-300 border border-gray-200 shadow-sm"
                aria-label="Avis suivant"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <Link to="/avis" className="hidden sm:block">
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30">
                Voir +20 avis
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Reviews Grid - Light theme cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {getCurrentReviews().map((review, index) => {
            const colors = getColorClasses(review.color);
            return (
              <Link key={index} to="/avis" className="block group">
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${colors.avatar} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm truncate">{review.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                        <span className="text-xs text-orange-600 font-medium">{review.subject}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    "{review.content}"
                  </p>
                  <div className="mt-3 text-xs text-orange-500 font-medium group-hover:text-orange-600 transition-colors flex items-center gap-1">
                    Lire la suite <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dots + Mobile CTA */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-orange-500 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
          <Link to="/avis" className="sm:hidden">
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-lg text-xs">
              Tous les avis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperprofReviewsSection; 