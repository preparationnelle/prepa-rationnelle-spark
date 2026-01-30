import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle, GraduationCap, Calendar, FileText, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';

const ArticlesCollegePage = () => {
  const articles = [
    {
      id: 1,
      question: "La 6ème fait peur. Comment préparer la transition ?",
      title: "Transition primaire-collège : réussir son adaptation",
      description: "Toutes les stratégies pour aider votre enfant à réussir sa transition vers le collège et s'adapter aux nouvelles méthodes de travail.",
      icon: GraduationCap,
      link: "/articles/college/transition"
    },
    {
      id: 2,
      question: "Mon enfant est désorganisé. Comment l'aider ?",
      title: "Organisation et méthodes de travail au collège",
      description: "Les meilleures techniques d'organisation et de gestion du temps pour réussir au collège et préparer l'avenir.",
      icon: Calendar,
      link: "/articles/college/organisation"
    },
    {
      id: 3,
      question: "Comment réviser efficacement pour les contrôles ?",
      title: "Préparation aux examens : techniques efficaces",
      description: "Méthodes éprouvées pour préparer et réussir les contrôles continus et examens du collège.",
      icon: FileText,
      link: "/articles/college/examens"
    }
  ];

  return (
    <>
      <SEO
        title="Espace Parents Collège : Réussir la Transition"
        description="Conseils pour accompagner votre collégien : organisation, méthodes de travail, transition primaire-collège et préparation aux examens de 6ème et brevet."
      />
      <Navigation />
      <div className="min-h-screen bg-white font-sans">

        {/* Header Section */}
        <div className="bg-slate-50 border-b border-slate-100 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Espace Parents • Collège
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Vos questions, <br className="hidden sm:block" />
                <span className="text-slate-600">nos réponses d'experts.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Des guides pratiques, concrets et bienveillants pour accompagner la scolarité de votre collégien sans stress.
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

export default ArticlesCollegePage;
