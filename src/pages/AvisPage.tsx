import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowLeft, ExternalLink } from 'lucide-react';


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
    elements.forEach((el) => el.classList.add('animate-in'));

    return () => observerRef.current?.disconnect();
  }, []);

  const reviews = [
    {
      name: "Arthur",
      content: "Je recommande vivement Dimitar en tant que professeur particulier. Grâce à son accompagnement régulier, j'ai pu gagner plus de 4 à 5 en maths, ce qui a vraiment fait la différence pour le concours. Il est très pédagogue, toujours à l'écoute et sait s'adapter à mes difficultés pour m'expliquer les choses de manière claire. Travailler avec lui m'a permis de reprendre confiance sur une matière que je considérais comme un point faible.",
      subject: "Maths ECG",
    },
    {
      name: "Mae",
      content: "Je recommande vivement Dimitar comme prof. Il m'a aidé à progresser dans une matière où j'avais des difficultés. Il a su m'expliquer les choses clairement et avec patience, toujours à l'écoute et très pédagogue. Grâce à ses compétences et à sa méthode, j'ai vraiment pu gagner en confiance et en compréhension. C'est quelqu'un de sérieux, impliqué, et toujours motivé à faire progresser ses élèves. Vous pouvez lui faire confiance sans hésiter.",
      subject: "Maths",
    },
    {
      name: "Louise",
      content: "Dimitar est un excellent professeur de maths. Il explique clairement, avec patience, et rend les cours beaucoup plus faciles à comprendre. Grâce à lui, j'ai vraiment progressé et repris confiance. Je le recommande sans hésitation.",
      subject: "Maths",
    },
    {
      name: "Léa",
      content: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions python !",
      subject: "Python",
    },
    {
      name: "Victoire",
      content: "J'étais en difficulté en mathématiques. Mais grâce à l'accompagnement et aux explications bien adaptées, j'ai commencé à voir une vraie différence. Merci mille fois pour ton aide, Dimitar, et ta méthode de travail.",
      subject: "Étudiante à ESCP",
    },
    {
      name: "Frédéric Broassard",
      content: "L'un de mes (brillants) anciens élèves à l'époque où j'enseignais les maths en prépa HEC. Dans ma matière, ses méthodes de travail étaient très efficaces. Je pense qu'il peut être de très bon conseil !",
      subject: "Ancien professeur de mathématiques",
    },
    {
      name: "Daniel",
      content: "Dimitar m'a beaucoup aidé en géopolitique, notamment sur la méthode. Grâce à son accompagnement, j'ai pu progresser en rigueur, notamment dans les introductions et la structuration des dissertations. J'ai été admis cette année à l'ESCP, et son aide y a clairement contribué. Je le recommande vivement.",
      subject: "Géopolitique",
    },
    {
      name: "Jad",
      content: "J'ai eu la chance de faire ma prépa ECG avec Dimitar, et je ne peux que le recommander chaleureusement à tous les élèves de prépa HEC. Il connaît parfaitement les exigences des concours, que ce soit en Maths ECG, en Anglais ou en Géopolitique. Il explique avec une grande clarté, va droit à l'essentiel, tout en prenant le temps de s'assurer que les notions sont bien comprises. Sa méthode est rigoureuse, mais toujours adaptée au niveau de chacun.",
      subject: "Prépa ECG",
    },
    {
      name: "Nathalie",
      content: "Excellent professeur, très investi et toujours à l'écoute, qui m'a permis de vraiment progresser en maths pendant mes deux années de prépa. Grâce à un accompagnement hebdomadaire pendant plusieurs mois, j'ai pu consolider et améliorer mes connaissances et méthodes en mathématiques ce qui m'a permis d'aborder un peu plus sereinement mes concours. Je le recommande fortement !",
      subject: "Maths Prépa",
    },
    {
      name: "Martin",
      content: "Étant en prépa ECG, j'étais très mauvais en culture générale (philo). Rencontré sur LinkedIn, il m'a donné des conseils très pertinents pour la méthode d'apprentissage, d'analyse de sujets et de rédaction qui m'ont permis de décoller en Culture Générale (philo). Je recommande !",
      subject: "Culture Générale",
    },
    {
      name: "Hugo",
      content: "Dimitar fait preuve d'une grande rigueur méthodologique, ce qui m'a permis de progresser de manière significative en mathématiques durant mes deux années de prépa ECG. Je le recommande vivement.",
      subject: "Maths ECG",
    },
    {
      name: "Jean",
      content: "Grâce à Dimitar, j'ai progressé rapidement. Je recommande à 100 % !",
      subject: "Maths",
    },
    {
      name: "Ismael",
      content: "Dimitar est un enseignant passionné et réellement engagé dans la réussite de ses élèves, m'ayant moi même permis de m'améliorer dans des sujets me semblant abstraits comme Python. Il est aussi particulièrement à l'écoute et exprime une volonté constante d'aider. Je suis convaincu qu'il saura apporter la même excellence et implication dans chacun de ses projets.",
      subject: "Python",
    },
    {
      name: "Kijanshika",
      content: "Dimitar est un prof génial. Il sait expliquer les choses de manière claire et ludique. De plus, il nous donne des conseils et des outils utiles pour le travail personnel afin de s'améliorer en continu. Je ne peux que vous le recommander en vue de mon expérience en tant qu'étudiante de Dimitar !!",
      subject: "Méthodologie",
    },
    {
      name: "Alexandre",
      content: "Un super prof, vraiment à l'écoute et patient ! Il prend le temps d'expliquer les choses clairement et ne passe jamais à la suite tant que ce n'est pas bien compris. Avec lui, on avance étape par étape, en douceur, et on sent qu'il veut vraiment nous faire progresser. On se sent accompagné à chaque instant.",
      subject: "Accompagnement",
    },
    {
      name: "Sophie",
      content: "Dimitar a transformé ma vision des mathématiques. Sa pédagogie exceptionnelle m'a permis de passer de 8 à 15 en maths ECG. Il a un don pour expliquer les concepts complexes de manière simple et accessible. Je recommande sans hésitation !",
      subject: "Maths ECG",
    },
    {
      name: "Thomas",
      content: "Grâce à Dimitar, j'ai pu intégrer l'ESSEC. Sa méthode de travail et ses explications claires ont fait toute la différence. Il s'adapte parfaitement au niveau de chaque élève et ne laisse jamais une question sans réponse.",
      subject: "Admis ESSEC",
    },
    {
      name: "Emma",
      content: "Dimitar est un professeur exceptionnel. Il m'a aidée à surmonter mes blocages en maths et à reprendre confiance. Sa patience et sa bienveillance m'ont permis de progresser significativement. Je le recommande à 100% !",
      subject: "Maths",
    },
    {
      name: "Lucas",
      content: "Excellent professeur de géopolitique. Dimitar m'a appris à structurer mes dissertations et à analyser les sujets avec rigueur. Grâce à lui, j'ai pu intégrer l'ESCP. Sa méthode est efficace et adaptée aux exigences des concours.",
      subject: "Géopolitique",
    },
    {
      name: "Clara",
      content: "Dimitar est un pédagogue hors pair. Il a su m'aider à comprendre les subtilités de Python et à maîtriser les concepts de programmation. Sa méthode progressive et ses explications claires ont fait toute la différence.",
      subject: "Python",
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-carnet-red text-carnet-red" />
    ));
  };

  return (
    <div className="min-h-screen bg-transparent font-dm-sans">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Back Button */}
        <div className="fade-in-up mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-carnet-ink-mute hover:text-carnet-red transition-colors duration-300 group text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Brand label */}
          <div className="fade-in-up flex flex-col items-center gap-3 mb-8">
            <span className="text-[11px] tracking-[0.2em] font-semibold text-carnet-red uppercase">
              Prépa Rationnelle
            </span>
            <div className="h-[2px] w-12 bg-carnet-red" />
          </div>

          {/* Badge */}
          <div
            className="fade-in-up inline-flex items-center gap-2 bg-carnet-paper-2 border border-carnet-rule text-carnet-red-deep px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] mb-6"
            style={{ animationDelay: '0.05s' }}
          >
            <Star className="h-3.5 w-3.5 fill-carnet-red-deep text-carnet-red-deep" />
            5.0 / 5 sur Superprof
          </div>

          <h1
            className="fade-in-up font-dm-serif text-4xl sm:text-5xl lg:text-6xl text-carnet-ink mb-6 leading-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Tous les <span className="text-carnet-red">avis</span>
          </h1>

          <div
            className="fade-in-up flex items-center justify-center gap-2 mb-6"
            style={{ animationDelay: '0.15s' }}
          >
            {renderStars()}
            <span className="text-base font-semibold text-carnet-ink-soft ml-2">5.0/5</span>
          </div>

          <p
            className="fade-in-up text-base sm:text-lg text-carnet-ink-soft max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            Découvrez tous les témoignages de mes élèves satisfaits.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className="fade-in-up max-w-4xl mx-auto mb-20"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="bg-carnet-paper-2 rounded-2xl border border-carnet-rule overflow-hidden">
            {/* trait noir signature en haut */}
            <div className="h-[3px] bg-carnet-red w-full" />
            <div className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
                <div>
                  <div className="font-dm-serif text-5xl sm:text-6xl text-carnet-red mb-2">
                    +50
                  </div>
                  <div className="text-carnet-ink-soft text-sm font-medium">
                    Étudiants accompagnés
                  </div>
                </div>
                <div className="sm:border-x sm:border-carnet-rule">
                  <div className="font-dm-serif text-5xl sm:text-6xl text-carnet-red mb-2">
                    100%
                  </div>
                  <div className="text-carnet-ink-soft text-sm font-medium">
                    Satisfaction
                  </div>
                </div>
                <div>
                  <div className="font-dm-serif text-5xl sm:text-6xl text-carnet-red mb-2">
                    +5
                  </div>
                  <div className="text-carnet-ink-soft text-sm font-medium">
                    Points de progression
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="scale-in group bg-carnet-paper-2 rounded-2xl border border-carnet-rule hover:border-carnet-red/60 transition-all duration-300 overflow-hidden flex flex-col"
              style={{ animationDelay: `${0.05 * (index % 9)}s` }}
            >
              {/* trait noir signature top */}
              <div className="h-[2px] bg-carnet-red w-full opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 bg-carnet-paper-2 border border-carnet-red/30 rounded-full flex items-center justify-center text-carnet-red-deep font-semibold text-base flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-carnet-ink mb-1.5 text-base">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-0.5 mb-2">
                      {renderStars()}
                    </div>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.08em] text-carnet-red-deep bg-carnet-paper-2 border border-carnet-rule px-2 py-0.5 rounded">
                      {review.subject}
                    </span>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-carnet-red/40 mt-2 flex-1">
                  <Quote className="h-4 w-4 text-carnet-red/50 absolute -top-1 -left-[9px] bg-carnet-paper-2" />
                  <p className="text-sm text-carnet-ink-soft leading-relaxed">
                    {review.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
          <div className="bg-carnet-paper-2 rounded-2xl border border-carnet-rule overflow-hidden max-w-2xl mx-auto">
            <div className="h-[3px] bg-carnet-red w-full" />
            <div className="p-10 sm:p-12">
              <div className="flex items-center justify-center gap-3 bg-carnet-paper-2 border border-carnet-rule w-fit mx-auto px-5 py-2.5 rounded-full mb-6">
                {renderStars()}
                <span className="text-lg font-semibold text-carnet-red-deep">5.0</span>
              </div>

              <h2 className="font-dm-serif text-2xl sm:text-3xl text-carnet-ink mb-3">
                Envie de progresser à ton tour&nbsp;?
              </h2>
              <p className="text-carnet-ink-soft text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
                Rejoins les élèves qui ont fait confiance à Prépa Rationnelle pour atteindre leurs objectifs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.superprof.fr/maths-cours-particuliers-maths-colleur-grandes-prepas-parisiennes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-carnet-red hover:bg-carnet-red-deep text-white font-semibold py-6 px-8 text-base rounded-xl transition-colors duration-300"
                  >
                    Voir sur Superprof
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-carnet-paper-2 border border-carnet-rule hover:border-carnet-red hover:text-carnet-red text-carnet-ink font-semibold py-6 px-8 text-base rounded-xl transition-colors duration-300"
                  >
                    Me contacter
                    <Star className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.96);
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
            animation: fadeInUp 0.7s ease-out forwards;
          }

          .scale-in.animate-in {
            animation: scaleIn 0.55s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default AvisPage;
