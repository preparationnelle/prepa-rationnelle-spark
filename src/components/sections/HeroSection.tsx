import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, TrendingUp, Users, Award, Star, BookOpen } from 'lucide-react';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleWhatsAppJoin = () => {
    // Lien vers WhatsApp avec message prédéfini
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    setShowWhatsAppModal(false);
  };

  return (
    <section className="min-h-[90vh] w-full flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      
      <div className="w-full max-w-[1200px] flex flex-col items-center relative z-10">
        {/* Main Heading with improved typography */}
        <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold text-center mb-8 leading-[1.1] w-full max-w-[900px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent" style={{
          wordBreak: 'keep-all'
        }}>
          Prêt à intégrer le <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top 3</span> avec méthode ?
        </h1>

        {/* Enhanced Triptyque with icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 w-full max-w-[900px]">
          <Link to="/formations" className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Une prépa exigeante</h3>
            <p className="text-gray-600">Excellence académique et rigueur méthodologique</p>
          </Link>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-orange-200 to-transparent"></div>
          <Link to="/apropos" className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Un suivi humain</h3>
            <p className="text-gray-600">Accompagnement personnalisé et bienveillant</p>
          </Link>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-orange-200 to-transparent"></div>
          <Link to="/avis" className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Des résultats concrets</h3>
            <p className="text-gray-600">Progression mesurable et objectifs atteints</p>
          </Link>
        </div>

        {/* Enhanced message with gradient */}
        <p className="text-lg sm:text-xl text-center font-medium leading-[1.4] mb-6 max-w-[800px] bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Gagne +5 points avec nos formations maths et python
        </p>

        {/* Enhanced Statistics Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-orange-100 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50"></div>
          
          <div className="relative z-10">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               <div className="group">
                 <div className="flex items-center justify-center mb-2">
                   <Star className="h-6 w-6 text-orange-500 mr-2" />
                   <div className="text-3xl font-bold text-orange-500">5/5</div>
                 </div>
                 <div className="text-sm text-gray-600">Note moyenne</div>
               </div>
               <div className="group">
                 <div className="flex items-center justify-center mb-2">
                   <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                   <div className="text-3xl font-bold text-orange-500">+5pts</div>
                 </div>
                 <div className="text-sm text-gray-600">Gain en maths</div>
               </div>
               <div className="group">
                 <div className="flex items-center justify-center mb-2">
                   <Users className="h-6 w-6 text-orange-500 mr-2" />
                   <div className="text-3xl font-bold text-orange-500">50+</div>
                 </div>
                 <div className="text-sm text-gray-600">Étudiants accompagnés</div>
               </div>
               <div className="group">
                 <div className="flex items-center justify-center mb-2">
                   <Award className="h-6 w-6 text-orange-500 mr-2" />
                   <div className="text-3xl font-bold text-orange-500">Top 5</div>
                 </div>
                 <div className="text-sm text-gray-600">Écoles intégrées</div>
               </div>
             </div>
            
            {/* Enhanced schools logos */}
            <div className="text-center mt-8 pt-6 border-t border-orange-100">
              <p className="text-sm text-gray-600 mb-4 font-medium">Nos étudiants intègrent :</p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {['HEC', 'ESSEC', 'ESCP', 'EDHEC', 'EM Lyon'].map((school, index) => (
                  <span 
                    key={school}
                    className="font-bold text-gray-700 text-lg px-4 py-2 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#fef3c7' : '#dbeafe'} 0%, white 100%)`
                    }}
                  >
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-[600px]">
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-10 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden group" 
            style={{
              boxShadow: "0 8px 25px rgba(243,108,0,0.3)"
            }}
            onClick={() => setShowWhatsAppModal(true)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Groupe WhatsApp ECO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Link to="/formations" className="flex-1 sm:flex-none">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-6 text-orange-600 border-2 border-orange-500 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group" 
              style={{
                boxShadow: "0 4px 15px rgba(243,108,0,0.1)"
              }}
            >
              <span className="flex items-center gap-2">
                Découvre nos formations
                <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Enhanced Modal WhatsApp */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-orange-50">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
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
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
              >
                Contacter WhatsApp
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
