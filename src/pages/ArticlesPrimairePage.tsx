import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle, BookOpen, Brain, Sparkles, MessageCircle, Heart, ShieldAlert, BookOpenCheck, BellOff, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

import SEO from '@/components/SEO';

const ArticlesPrimairePage = () => {
  const articles = [
    {
      id: 1,
      question: "Comment rendre mon enfant autonome ?",
      title: "Développer l'autonomie en primaire",
      description: "L'autonomie est la clé de la réussite scolaire et personnelle. Découvrez comment accompagner votre enfant étape par étape.",
      icon: Sparkles,
      link: "/articles/primaire/autonomie"
    },
    {
      id: 2,
      question: "Mon enfant a du mal à lire, que faire ?",
      title: "Méthodes de lecture efficace",
      description: "Les stratégies éprouvées pour débloquer la lecture, améliorer la fluidité et la compréhension de texte.",
      icon: BookOpen,
      link: "/articles/primaire/lecture"
    },
    {
      id: 3,
      question: "Comment lui faire aimer les maths ?",
      title: "Mathématiques ludiques au primaire",
      description: "Transformez les corvées de calcul en défis amusants grâce à une approche concrète.",
      icon: Brain,
      link: "/articles/primaire/maths-ludiques"
    },
    {
      id: 4,
      question: "Il a peur d'aller à l'école, est-ce normal ?",
      title: "Anxiété Scolaire : rassurer sans culpabiliser",
      description: "Tout savoir sur les peurs scolaires fréquentes et les stratégies bienveillantes pour les surmonter.",
      icon: Heart,
      link: "/articles/primaire/anxiete-scolaire"
    },
    {
      id: 5,
      question: "Harcelé ou juste disputé ? Comment savoir ?",
      title: "Harcèlement Scolaire : repérer et agir",
      description: "Apprenez à distinguer un simple conflit d'une situation de harcèlement et découvrez le protocole.",
      icon: ShieldAlert,
      link: "/articles/primaire/harcelement"
    },
    {
      id: 6,
      question: "Comment l'aider à lire sans crise ?",
      title: "Accompagner la Lecture : Plaisir, pas Devoir",
      description: "Découvrez comment faire du moment des devoirs un temps de connexion positive.",
      icon: BookOpenCheck,
      link: "/articles/primaire/accompagnement-lecture"
    },
    {
      id: 7,
      question: "Faut-il surveiller ses notes tous les jours ?",
      title: "ENT : Outil de suivi ou source de stress ?",
      description: "Comment gérer l'ENT pour rester informé sans devenir un parent-hélicoptère anxieux.",
      icon: BellOff,
      link: "/articles/primaire/gestion-ent"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": articles.map(article => ({
      "@type": "Question",
      "name": article.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": article.description
      }
    }))
  };

  return (
    <>
      <SEO
        title="Espace Parents Primaire : Conseils et Guides"
        description="Guides pratiques pour les parents d'élèves en primaire : autonomie, lecture, mathématiques, et gestion du stress scolaire. Retrouvez nos conseils d'experts."
        structuredData={structuredData}
      />
      <Navigation />
      <div className="min-h-screen bg-white font-sans">

        {/* Header Section */}
        <div className="bg-slate-50 border-b border-slate-100 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Espace Parents • Primaire
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Vos questions, <br className="hidden sm:block" />
                <span className="text-slate-600">nos réponses d'experts.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Des guides pratiques, concrets et bienveillants pour accompagner la scolarité de votre enfant sans stress.
              </p>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <Link key={article.id} to={article.link} className="group block h-full">
                  <article className="bg-white border border-slate-200 rounded-xl p-6 h-full transition-all duration-200 hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 flex flex-col">

                    {/* Icon & Question */}
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100 mb-4 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                        {article.question}
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="mt-auto">
                      <div className="w-8 h-px bg-orange-200 my-4 transition-colors"></div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1 text-[11px]">
                        Sur le sujet
                      </h3>
                      <p className="font-medium text-slate-700 mb-3">
                        {article.title}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.description}
                      </p>

                      <div className="flex items-center text-orange-600 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1">
                        Lire l'article <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-20">
            <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <HelpCircle className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vous ne trouvez pas votre réponse ?
                </h3>
                <p className="text-slate-300 mb-8">
                  Notre équipe pédagogique est là pour vous aider. N'hésitez pas à nous poser vos questions directement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-xl">
                      Poser ma question
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesPrimairePage;
