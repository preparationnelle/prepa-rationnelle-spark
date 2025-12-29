import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, TrendingUp, Users, Award, Star, BookOpen } from 'lucide-react';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
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
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleWhatsAppJoin = () => {
    // Lien vers WhatsApp avec message prédéfini
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    setShowWhatsAppModal(false);
  };

  const handleReservationClick = () => {
    // Lien vers WhatsApp pour réserver le premier cours gratuit
    const message = encodeURIComponent("Bonjour, je souhaite réserver mon premier cours gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
  };

  const joinWhatsAppGroup = () => {
    window.open('https://calendly.com/preparationnelle/30min?month=2025-09&date=2025-09-16', '_blank');
  };

  return (
    <section className="min-h-[95vh] w-full flex flex-col justify-center items-center pt-16 sm:pt-20 pb-10 sm:pb-16 md:pb-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-white"></div>

      {/* Floating elements - Enhanced with animated orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>

      {/* Additional bubbles */}
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-300 rounded-full opacity-5 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-100 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-300 rounded-full opacity-5 blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-orange-200 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>

      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        {/* Main Heading with improved typography - ZOOMED & SINGLE LINE */}
        <h1 className="fade-in-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center pt-6 sm:pt-8 md:pt-10 mb-8 sm:mb-10 md:mb-12 leading-[1.1] w-full max-w-[1000px] px-4 whitespace-normal md:whitespace-nowrap break-words">
          Ta méthode pour intégrer le <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent uppercase">TOP 3</span> en prépa <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent uppercase">ECG</span>
        </h1>

        {/* Enhanced Triptyque with icons - Uniform sizing */}
        <div className="fade-in-up flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 sm:gap-8 md:gap-12 mb-2 sm:mb-3 md:mb-4 w-full max-w-[1100px] px-2 sm:px-4" style={{ animationDelay: '0.1s' }}>
          <div className="text-center group cursor-pointer relative flex-1 max-w-[300px] min-h-[12rem]" onClick={() => window.location.href = '/formations'}>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors relative z-10 text-center leading-tight">Exercices<br />incontournables</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10 px-2 flex items-center justify-center h-16">On s'entraîne avec ce qui a de plus classique.</p>
            <div className="mt-0.5 px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 text-orange-700 rounded-lg text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 shadow-md whitespace-nowrap">
              Découvre nos formations →
            </div>
          </div>
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-orange-200 to-transparent self-center"></div>
          <div className="text-center group cursor-pointer relative flex-1 max-w-[300px] min-h-[12rem]" onClick={() => window.open('https://calendly.com/preparationnelle/30min', '_blank')}>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors relative z-10 text-center">Cours particuliers</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10 px-2 flex items-center justify-center h-16">Réserve ta première séance gratuitement.</p>
            <div className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 text-orange-700 rounded-lg text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 shadow-md whitespace-nowrap">
              Réserve un cours gratuit →
            </div>
          </div>
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-orange-200 to-transparent self-center"></div>
          <div className="text-center group cursor-pointer relative flex-1 max-w-[300px] min-h-[12rem]" onClick={() => window.location.href = '/avis'}>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors relative z-10 text-center leading-tight">Résultats<br />Concrets</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10 px-2 flex items-center justify-center h-16">Une progression mesurable et objectifs atteints dès 1 mois.</p>
            <div className="mt-0.5 px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 text-orange-700 rounded-lg text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 shadow-md whitespace-nowrap">
              Les avis →
            </div>
          </div>
        </div>

        {/* Enhanced message with selective orange highlighting */}
        <p className="fade-in-up text-xl sm:text-2xl md:text-3xl text-center font-semibold leading-[1.3] mb-8 sm:mb-10 max-w-[1200px] mx-auto px-4 text-gray-800" style={{ animationDelay: '0.2s' }}>
          La Méthode <span className="font-bold text-orange-600">RATIONNELLE</span> pour Gagner <span className="font-bold text-orange-600">+5</span> Points en <span className="font-bold text-orange-600">Maths</span> et <span className="font-bold text-orange-600">Python</span>
        </p>

        {/* Enhanced Statistics Section */}
        <div className="fade-in-up bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-6 sm:mb-8 shadow-2xl border border-orange-100 relative overflow-hidden z-10" style={{ animationDelay: '0.3s' }}>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-orange-100/30"></div>

          {/* Additional decorative bubbles inside the stats section */}
          <div className="absolute top-5 right-5 w-20 h-20 bg-orange-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-5 left-5 w-16 h-16 bg-orange-200 rounded-full opacity-15 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-50 rounded-full opacity-20 blur-xl"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <Link to="/avis" className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-black mr-3 group-hover:text-gray-800 transition-colors" />
                  <div className="text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">5/5</div>
                </div>
                <div className="text-base text-black font-medium group-hover:text-gray-800 transition-colors">Satisfaction client</div>
              </Link>
              <Link to="/avis" className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="h-8 w-8 text-black mr-3 group-hover:text-gray-800 transition-colors" />
                  <div className="text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">+5pts</div>
                </div>
                <div className="text-base text-black font-medium group-hover:text-gray-800 transition-colors">Gain en maths</div>
              </Link>
              <Link to="/avis" className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-black mr-3 group-hover:text-gray-800 transition-colors" />
                  <div className="text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">50+</div>
                </div>
                <div className="text-base text-black font-medium group-hover:text-gray-800 transition-colors">Étudiants accompagnés</div>
              </Link>
              <Link to="/avis" className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">TOP 5</div>
                </div>
                <div className="text-base text-black font-medium group-hover:text-gray-800 transition-colors">80% des étudiants en 2025</div>
              </Link>
            </div>


          </div>
        </div>

        {/* Enhanced Buttons - Déplacé après les statistiques */}
        <div className="fade-in-up flex flex-col items-center justify-center gap-4 w-full max-w-[1000px] px-4" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="animate-pulse-subtle w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-base sm:text-lg leading-snug rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0 relative overflow-hidden group break-words whitespace-normal sm:whitespace-nowrap text-center z-10"
            style={{
              boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)"
            }}
            onClick={joinWhatsAppGroup}
          >
            <span className="relative z-10 flex items-center justify-center text-center">
              Réserve ton cours gratuit
            </span>
          </Button>
        </div>
      </div>

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

      {/* Styles pour les animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 12px 35px rgba(249, 115, 22, 0.5);
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

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
