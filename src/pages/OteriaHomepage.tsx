import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Code2, Shield, Binary, Network, BarChart3, Target, Brain, GraduationCap, BookOpen, ArrowRight, Zap, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OteriaHomepage = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Fil d'Ariane - Dark Mode */}
      <nav className="sticky top-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs text-pink-500">
            <Link to="/" className="flex items-center gap-1 hover:text-pink-400 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-pink-500/50 mx-1" />
            <span className="text-white font-medium">OTERIA Cyber School</span>
          </div>
        </div>
      </nav>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-80 right-20 w-80 h-80 bg-pink-500/8 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto py-12 px-4 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 bg-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/40 rotate-3 hover:rotate-6 transition-all duration-300">
              <Code2 className="h-12 w-12 text-white" />
              <div className="absolute inset-0 bg-pink-400/20 rounded-2xl"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            OTERIA Cyber School
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            Formation intensive en <span className="text-pink-500 font-semibold">mathématiques</span>, <span className="text-pink-500 font-semibold">logique</span> et <span className="text-pink-500 font-semibold">programmation</span> pour l'informatique et la cybersécurité
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="group px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300">
              <Shield className="h-4 w-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-white/90 font-medium text-sm">Cybersécurité</span>
            </div>
            <div className="group px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300">
              <Code2 className="h-4 w-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-white/90 font-medium text-sm">Programmation</span>
            </div>
            <div className="group px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300">
              <Brain className="h-4 w-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-white/90 font-medium text-sm">Algorithmique</span>
            </div>
          </div>
        </div>

        {/* Titre Section Formations */}
        <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-pink-500">
            Nos formations Post-bac à Bac+5
          </h2>
          <p className="text-white/60 text-lg">
            OTERIA délivre son titre RNCP de Niveau 7 « Expert en Cybersécurité » (#39999)
          </p>
        </div>

        {/* Bachelor 2 Card - Modern Glassmorphic */}
        <div className="flex justify-center mb-20 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-full max-w-2xl">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20">
              {/* Animated background */}
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glow effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px] group-hover:bg-pink-500/30 transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center shadow-xl shadow-pink-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Bachelor 2</h3>
                  <div className="inline-flex px-4 py-1.5 bg-pink-500/20 border border-pink-500/30 rounded-full">
                    <span className="text-pink-400 font-semibold text-sm">Niveau Fondamental</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-center mb-8 leading-relaxed text-lg">
                  Initiation aux bases des mathématiques, logique et programmation Python. Programme structuré en <span className="text-pink-500 font-semibold">14 séances intensives</span> couvrant les concepts fondamentaux nécessaires à l'informatique et la cybersécurité.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Binary className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-white/90 font-medium">Logique</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-white/90 font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-white/90 font-medium">Mathématiques</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Network className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-white/90 font-medium">Probabilités</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/articles/oteria-cyber-school/bachelor-1">
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg py-6 rounded-xl shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 group border-0">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Accéder au Programme Bachelor 2
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>



        {/* Méthodologie Pédagogique */}
        <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Méthodologie Pédagogique
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Cours Théoriques', desc: 'Apprentissage structuré des concepts fondamentaux' },
              { icon: Target, title: 'Exercices Pratiques', desc: 'Mise en application immédiate des connaissances' },
              { icon: Brain, title: 'Flashcards', desc: 'Révision interactive et mémorisation efficace' },
              { icon: Zap, title: 'Évaluations', desc: 'QCM et tests pour valider les acquis' }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-white/60 text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations CSS */}
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
            transform: scale(0.95);
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

export default OteriaHomepage;
