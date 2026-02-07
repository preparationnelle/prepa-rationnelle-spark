import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, TrendingUp, Users, Award, Star, BookOpen, ChevronRight, Sparkles, Calendar, ArrowRight, Flame } from 'lucide-react';
import { HeroContactForm } from '@/components/HeroContactForm';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Animation states for sequential reveal
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Sequential animation on mount - Smoother & Faster
  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 100);
    const timer2 = setTimeout(() => setShowSubtitle(true), 600);
    const timer3 = setTimeout(() => setShowTagline(true), 1200);
    const timer4 = setTimeout(() => setShowContent(true), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleWhatsAppJoin = () => {
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    setShowWhatsAppModal(false);
  };

  const joinWhatsAppGroup = () => {
    window.open('https://calendly.com/preparationnelle/30min?month=2025-09&date=2025-09-16', '_blank');
  };

  return (
    <>
      {/* Dark Hero Section - Premium & Impactful */}
      <section className="hero-dark-section relative overflow-hidden">
        {/* Deep gradient background with more contrast */}
        <div className="absolute inset-0 bg-[#0a0f1a]">
          {/* Vibrant animated glow effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[100px] animate-pulse-slow-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/10 via-orange-600/5 to-transparent rounded-full"></div>
          {/* Extra ambient glow */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-orange-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-500/25 rounded-full blur-2xl"></div>
        </div>

        {/* Top Banner - Urgency with vibrant orange */}
        <div className="relative z-20 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 py-3 px-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-center gap-2 text-white">
            <Flame className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-bold tracking-wide">Dernières places ! Stages intensifs de Février</span>
            <Link to="/stages" className="font-bold underline hover:no-underline ml-1 flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs">
              S'inscrire <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-28">
          {/* Google Rating Badge - More prominent */}
          <div className={`flex justify-end mb-8 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link to="/avis" className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-orange-400/30 shadow-lg shadow-orange-500/10 hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0 sur Google</span>
            </Link>
          </div>

          {/* Scarcity Badge - Brighter green */}
          <div className={`flex justify-center mb-10 transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500/25 to-green-500/25 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-400/40 shadow-lg shadow-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-300 text-sm font-bold tracking-wide">3 créneaux restants cette semaine</span>
            </div>
          </div>

          {/* Main Title - ANIMATED SEQUENTIAL REVEAL */}
          <div className="text-center max-w-5xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
              {/* Prepa Rationnelle - Appears first */}
              <span
                className={`inline-block text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-1000 ease-out ${showTitle ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  }`}
              >
                Prepa Rationnelle
              </span>
              <br />
              {/* Ta méthode pour réussir - Appears second */}
              <span
                className={`inline-block text-white transition-all duration-700 ease-out ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                L'app qui va révolutionner
              </span>
              <br />
              {/* ta prépa - Part of second phrase */}
              <span
                className={`inline-block text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-700 ease-out delay-150 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                ta prépa
              </span>
            </h1>

            {/* Tagline - Appears third */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 ease-out ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              Une <span className="text-orange-400 font-bold">bonne méthode</span> rend la <span className="text-white font-bold">progression inévitable</span>.
            </p>
            <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-500 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-8 px-10 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all transform hover:scale-105 cursor-pointer border-none"
              >
                <Link to="/dashboard">
                  Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Value Props - Integrated in dark theme */}
          <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <Link
                to="/formations"
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    +250 exercices
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Exercices ultra-classiques type concours
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <div
                onClick={joinWhatsAppGroup}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    1er cours offert
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Accompagnement sur-mesure avec des profs d'excellence
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <Link
                to="/avis"
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    100% TOP 5
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Nos élèves intègrent HEC, ESSEC, ESCP
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal WhatsApp */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md bg-[#0a0f1a] border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-orange-400">
              Demander mon coaching gratuit
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-white/70">
              Je suis en prépa ECG et je veux mon premier coaching gratuit.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={handleWhatsAppJoin}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Contacter WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 border-white/20 text-white/70 hover:bg-white/10"
              >
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Styles */}
      <style>{`
        .hero-dark-section {
          min-height: 100vh;
        }

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

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }

        @keyframes pulseSlowDelayed {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
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

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulseSlowDelayed 5s ease-in-out infinite 1s;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </>
  );
};
