import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';


const AvisPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

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
      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
    ));
  };

  const getColorClasses = (color: string) => {
    if (color === "orange") {
      return {
        avatar: "bg-gradient-to-br from-orange-500 to-orange-600",
        glow: "shadow-orange-500/20"
      };
    }
    return {
      avatar: "bg-gradient-to-br from-orange-400 to-orange-500",
      glow: "shadow-orange-400/20"
    };
  };

  return (

    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[160px]"></div>

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        {/* Back Button */}
        <div className="fade-in-up mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-orange-400 transition-colors duration-300 group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="fade-in-up inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            5.0/5 sur Superprof
          </div>
          <h1 className="fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ animationDelay: '0.05s' }}>
            Tous les <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">avis</span>
          </h1>
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6" style={{ animationDelay: '0.1s' }}>
            {renderStars()}
            <span className="text-lg font-semibold text-white/90 ml-2">5.0/5</span>
          </div>
          <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.15s' }}>
            Découvrez tous les témoignages de mes élèves satisfaits
          </p>
        </div>

        {/* Stats Section */}
        <div className="fade-in-up max-w-4xl mx-auto mb-16" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 border-white/10 hover:border-orange-400/30 transition-all duration-500 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  +50
                </div>
                <div className="text-white/70 font-medium">Étudiants accompagnés</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-white/70 font-medium">Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  +5
                </div>
                <div className="text-white/70 font-medium">Points de progression</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {reviews.map((review, index) => {
            const colors = getColorClasses(review.color);
            return (
              <div
                key={index}
                className="scale-in group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-orange-400/50 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
                style={{ animationDelay: `${0.05 * (index % 9)}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${colors.avatar} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg ${colors.glow} group-hover:scale-110 transition-transform duration-300`}>
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{review.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars()}
                    </div>
                    <p className="text-sm text-orange-400 font-medium">{review.subject}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-4 w-4 text-orange-400/40 absolute -top-1 -left-1" />
                  <p className="text-sm text-white/70 leading-relaxed pl-4">
                    {review.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-3xl border-2 border-white/10 hover:border-orange-400/30 transition-all duration-500 max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-orange-500/10 px-5 py-3 rounded-full border border-orange-500/20">
                {renderStars()}
                <span className="text-2xl font-bold text-white">5.0</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.superprof.fr/maths-cours-particuliers-maths-colleur-grandes-prepas-parisiennes.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 px-8 text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  Voir sur Superprof
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-orange-400/50 text-white hover:bg-white/20 font-bold py-6 px-8 text-lg shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  Me contacter
                  <Star className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .fade-in-up, .scale-in {
            opacity: 0;
          }

          .fade-in-up.animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .scale-in.animate-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
        `}</style>
    </div>

  );
};

export default AvisPage;