import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { TrendingUp, Users, Award, Star, BookOpen, ChevronRight, ArrowRight, Flame } from 'lucide-react';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);

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
      <section className="hero-pr-section relative overflow-hidden bg-white">
        {/* Trait orange signature en haut */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange z-30"></div>

        {/* Bandeau urgence - sobre */}
        <div className="relative z-20 bg-pr-orange-pale border-b border-pr-orange-soft py-2.5 px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 text-pr-orange-dark">
            <Flame className="h-3.5 w-3.5" />
            <span className="font-dm-sans text-[13px] font-semibold tracking-wide">
              Dernières places — Stages intensifs de Février
            </span>
            <Link
              to="/stages"
              className="font-dm-sans text-[11px] font-semibold uppercase tracking-[0.08em] bg-pr-orange text-white px-3 py-1 rounded-full hover:bg-pr-orange-dark transition-colors flex items-center gap-1"
            >
              S'inscrire <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20 sm:pb-24">

          {/* Top bar : badge méthode + note Google */}
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 bg-pr-orange-pale border border-pr-orange-soft px-4 py-2 rounded-full">
              <Award className="h-3.5 w-3.5 text-pr-orange-dark" />
              <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark">
                Méthode pour réussir sa prépa ECG
              </span>
            </div>

            <Link
              to="/avis"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-pr-gray-light bg-pr-gray-bg hover:bg-white transition-colors"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-pr-orange fill-pr-orange" />
                ))}
              </div>
              <span className="font-dm-sans text-[12px] font-semibold text-pr-black">5.0</span>
              <span className="font-dm-sans text-[11px] text-pr-gray-mid uppercase tracking-[0.08em]">Google</span>
            </Link>
          </div>

          {/* Titre principal — DM Serif Display */}
          <div className="text-center max-w-5xl mx-auto mb-12">
            <h1 className="font-dm-serif text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-pr-black mb-8">
              <span className={`inline-block transition-all duration-1000 ease-out ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Prépa Rationnelle
              </span>
              <br />
              <span className={`inline-block transition-all duration-700 ease-out ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                la méthode pour vraiment{' '}
              </span>
              <span className={`inline-block text-pr-orange italic transition-all duration-700 ease-out delay-150 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                réussir ta prépa
              </span>
            </h1>

            {/* Trait orange signature sous le titre */}
            <div className={`flex justify-center mb-8 transition-all duration-700 ${showTagline ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
              <div className="h-[2px] w-24 bg-pr-orange"></div>
            </div>

            <p className={`font-dm-sans text-base sm:text-lg md:text-xl text-pr-gray-dark max-w-2xl mx-auto leading-[1.7] transition-all duration-1000 ease-out ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Une <span className="text-pr-orange-dark font-semibold">bonne méthode</span> rend la <span className="text-pr-black font-semibold">progression inévitable</span>.
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-500 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                asChild
                className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold text-base py-6 px-8 rounded-full shadow-sm transition-all border-none"
              >
                <Link to="/dashboard">
                  Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                to="/formations"
                className="font-dm-sans text-sm font-semibold text-pr-gray-dark hover:text-pr-orange-dark transition-colors flex items-center gap-1 underline-offset-4 hover:underline"
              >
                Voir les formations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cartes valeur — style charte (carte blanche + bordure fine + numéro orange + trait) */}
          <div className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  icon: BookOpen,
                  title: '+250 exercices',
                  desc: 'Exercices ultra-classiques type concours, tous corrigés et expliqués.',
                  to: '/formations',
                  isLink: true,
                },
                {
                  num: '02',
                  icon: Users,
                  title: '1er cours offert',
                  desc: 'Accompagnement sur-mesure avec des professeurs d\'excellence.',
                  to: null,
                  onClick: joinWhatsAppGroup,
                  isLink: false,
                },
                {
                  num: '03',
                  icon: TrendingUp,
                  title: '100 % TOP 5',
                  desc: 'Nos élèves intègrent HEC, ESSEC, ESCP grâce à la méthode.',
                  to: '/avis',
                  isLink: true,
                },
              ].map((item) => {
                const inner = (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-baseline justify-between mb-5">
                      <span className="font-dm-serif text-5xl text-pr-orange leading-none">{item.num}</span>
                      <div className="h-[2px] w-8 bg-pr-orange"></div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="h-4 w-4 text-pr-orange-dark" />
                      <h3 className="font-dm-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-dm-sans text-[15px] text-pr-gray-dark leading-[1.6]">
                      {item.desc}
                    </p>
                  </>
                );
                const cls = "group relative bg-white rounded-xl p-6 border border-pr-gray-light hover:border-pr-orange transition-all duration-300 overflow-hidden";
                return item.isLink && item.to ? (
                  <Link key={item.num} to={item.to} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <button key={item.num} onClick={item.onClick} className={`${cls} text-left`}>
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal WhatsApp - charte claire */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md bg-white border border-pr-gray-light">
          <DialogHeader>
            <DialogTitle className="text-center font-dm-serif text-2xl text-pr-black">
              Demander mon coaching gratuit
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center font-dm-sans text-pr-gray-dark">
              Je suis en prépa ECG et je veux mon premier coaching gratuit.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={handleWhatsAppJoin}
                className="flex-1 bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold flex items-center justify-center gap-2"
              >
                Contacter WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 border-pr-gray-light text-pr-gray-dark font-dm-sans hover:bg-pr-gray-bg"
              >
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .hero-pr-section {
          min-height: auto;
        }
      `}</style>
    </>
  );
};
