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

  const joinWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/Lx0UqZQY0607ZeRLGrCY9N?mode=ac_t', '_blank');
  };

  return (
    <section className="min-h-[90vh] w-full flex flex-col justify-center items-center py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Floating elements - Enhanced with more bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      
      {/* Additional bubbles */}
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
      
      <div className="w-full max-w-[1200px] flex flex-col items-center relative z-10">
        {/* Main Heading with improved typography */}
        <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold text-center mb-6 sm:mb-8 leading-[1.1] w-full max-w-[900px] px-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Prepa Rationnelle</span> la méthode pour intégrer le <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Top 3</span>
        </h1>

        {/* Enhanced Triptyque with icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8 w-full max-w-[900px] px-4">
          <Link to="/formations" className="text-center group cursor-pointer relative">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors relative z-10">Une prépa exigeante</h3>
            <p className="text-gray-600 relative z-10">Excellence académique et rigueur méthodologique</p>
          </Link>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-orange-200 to-transparent"></div>
          <Link to="/apropos" className="text-center group cursor-pointer relative">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors relative z-10">Un suivi humain</h3>
            <p className="text-gray-600 relative z-10">Accompagnement personnalisé et bienveillant</p>
          </Link>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-orange-200 to-transparent"></div>
          <Link to="/avis" className="text-center group cursor-pointer relative">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors relative z-10">Des résultats concrets</h3>
            <p className="text-gray-600 relative z-10">Progression mesurable et objectifs atteints</p>
          </Link>
        </div>

        {/* Enhanced message with gradient */}
        <p className="text-lg sm:text-xl text-center font-medium leading-[1.4] mb-6 max-w-[800px] bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Gagne +5 points avec nos formations maths et python
        </p>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-[600px] mb-6 sm:mb-8 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden group min-w-fit whitespace-nowrap z-10" 
            style={{
              boxShadow: "0 8px 25px rgba(37, 211, 102, 0.3)"
            }}
            onClick={joinWhatsAppGroup}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.5 0C5.149 0 0 5.148 0 11.5c0 2.532.81 4.863 2.175 6.772L.751 23.25l5.159-1.352A11.468 11.468 0 0011.5 23c6.351 0 11.5-5.149 11.5-11.5C23 5.148 17.851 0 11.5 0zm0 21c-2.173 0-4.193-.626-5.9-1.704L2.75 20.25l.943-2.836A9.439 9.439 0 012 11.5C2 6.262 6.262 2 11.5 2S21 6.262 21 11.5 16.738 21 11.5 21z" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
              Groupe WhatsApp ECG
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Link to="/formations" className="flex-1 sm:flex-none">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-6 text-orange-600 border-2 border-orange-500 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white font-bold text-base sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative z-10" 
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

        {/* Enhanced Statistics Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl border border-orange-100 relative overflow-hidden z-10">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50"></div>
          
          {/* Additional decorative bubbles inside the stats section */}
          <div className="absolute top-5 right-5 w-20 h-20 bg-orange-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-5 left-5 w-16 h-16 bg-blue-100 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-50 rounded-full opacity-20"></div>
          
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
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#ffedd5' : '#fff7ed'} 0%, white 100%)`
                    }}
                  >
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
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
    </section>
  );
};
