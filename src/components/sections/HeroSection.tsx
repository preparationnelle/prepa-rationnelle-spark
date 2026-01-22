import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, TrendingUp, Users, Award, Star, BookOpen, ChevronRight, Sparkles, Calendar, ArrowRight, Flame } from 'lucide-react';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Animation states for sequential reveal
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Sequential animation on mount
  useEffect(() => {
    // Show "Prepa Rationnelle" first
    const timer1 = setTimeout(() => setShowTitle(true), 200);
    // Show "Ta méthode pour réussir en maths" after
    const timer2 = setTimeout(() => setShowSubtitle(true), 1000);
    // Show "Une bonne méthode rend la progression inévitable" last
    const timer3 = setTimeout(() => setShowTagline(true), 1800);
    // Show the rest of the content
    const timer4 = setTimeout(() => setShowContent(true), 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

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
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleWhatsAppJoin = () => {
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    setShowWhatsAppModal(false);
  };

  const joinWhatsAppGroup = () => {
    window.open('https://calendly.com/preparationnelle/30min?month=2025-09&date=2025-09-16', '_blank');
  };

  const handleFormSubmit = () => {
    const message = encodeURIComponent(`Bonjour ! Je suis ${selectedRole === 'parent' ? 'parent d\'un élève' : 'un élève'} en ${selectedLevel}. Je souhaite avoir plus d'informations sur vos formations.`);
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
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
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-orange-400/30 shadow-lg shadow-orange-500/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0 sur Google</span>
            </div>
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
                className={`inline-block text-white transition-all duration-1000 ease-out ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Ta méthode pour réussir
              </span>
              <br />
              {/* en maths - Part of second phrase */}
              <span
                className={`inline-block text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-1000 ease-out delay-200 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                en maths
              </span>
            </h1>

            {/* Tagline - Appears third */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 ease-out ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              Une <span className="text-orange-400 font-bold">bonne méthode</span> rend la <span className="text-white font-bold">progression inévitable</span>.
            </p>
          </div>

          {/* Form Card - Enhanced with glow */}
          <div className={`max-w-lg mx-auto transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Intense glow effect behind card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/40 via-orange-400/30 to-orange-500/40 rounded-3xl blur-2xl animate-pulse-subtle"></div>

              {/* Card with enhanced shadow */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/30 p-7 sm:p-8 border border-orange-100">
                {/* Progress bar - More vibrant */}
                <div className="mb-6">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500 shadow-sm shadow-orange-400/50"
                      style={{ width: selectedLevel && selectedRole ? '100%' : selectedLevel || selectedRole ? '50%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                  Complétez le formulaire et bénéficiez de nos conseils
                </h3>

                {/* Level Selection - Enhanced buttons */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Niveau de l'élève</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['Prépa', 'Lycée', 'Collège'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${selectedLevel === level
                          ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/40 scale-105 border-2 border-orange-400'
                          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-2 border-gray-100 hover:border-orange-200'
                          }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Role Selection - Enhanced buttons */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Je suis...</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'student', label: 'Un élève' },
                      { id: 'parent', label: 'Un parent' }
                    ].map((role) => (
                      <button
                        key={role.id}
                        onClick={() => setSelectedRole(role.id)}
                        className={`py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${selectedRole === role.id
                          ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/40 scale-105 border-2 border-orange-400'
                          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-2 border-gray-100 hover:border-orange-200'
                          }`}
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Super vibrant */}
                <Button
                  onClick={selectedLevel && selectedRole ? handleFormSubmit : joinWhatsAppGroup}
                  className="w-full py-7 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white rounded-xl shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group border-0 hover:scale-[1.02]"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    Réserver mon cours gratuit
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                {/* Trust indicators */}
                <div className="mt-5 flex items-center justify-center gap-5 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Réponse sous 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Enhanced with gradient background */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-14 sm:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="fade-in-up max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Stat 1 */}
              <Link to="/avis" className="group text-center p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-7 w-7 text-orange-500 fill-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl sm:text-5xl font-bold text-orange-500">5/5</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold">Satisfaction client</p>
              </Link>

              {/* Stat 2 */}
              <Link to="/avis" className="group text-center p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-7 w-7 text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl sm:text-5xl font-bold text-orange-500">+5pts</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold">Gain moyen en maths</p>
              </Link>

              {/* Stat 3 */}
              <Link to="/avis" className="group text-center p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-7 w-7 text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl sm:text-5xl font-bold text-orange-500">50+</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold">Étudiants accompagnés</p>
              </Link>

              {/* Stat 4 */}
              <Link to="/avis" className="group text-center p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-7 w-7 text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-4xl sm:text-5xl font-bold text-orange-500">80%</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold">En TOP 5 en 2025</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards - Premium design */}
      <section className="relative bg-white py-14 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="fade-in-up max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <Link
                to="/formations"
                className="group relative bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Exercices incontournables
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed font-medium">
                    On s'entraîne avec ce qu'il y a de plus classique. +250 exercices ultra-classiques disponibles.
                  </p>
                  <div className="flex items-center text-orange-500 font-bold text-sm">
                    Découvrir nos formations <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <div
                onClick={joinWhatsAppGroup}
                className="group relative bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Cours particuliers
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed font-medium">
                    Réserve ta première séance gratuitement. Accompagnement sur-mesure avec des professeurs d'excellence.
                  </p>
                  <div className="flex items-center text-orange-500 font-bold text-sm">
                    Réserver un cours gratuit <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <Link
                to="/avis"
                className="group relative bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Résultats concrets
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed font-medium">
                    Une progression mesurable et objectifs atteints dès 1 mois. Nos élèves intègrent le TOP 5.
                  </p>
                  <div className="flex items-center text-orange-500 font-bold text-sm">
                    Voir les témoignages <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal WhatsApp */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-green-50">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Demander mon coaching gratuit
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-gray-600">
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
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
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
