import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, ArrowRight, Flame, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleWhatsAppJoin = () => {
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    setShowWhatsAppModal(false);
  };

  return (
    <>
      {/* Marge rouge + perforations (desktop) */}
      <div className="carnet-margin-line"></div>
      <div className="carnet-hole" style={{ top: 140 }}></div>
      <div className="carnet-hole" style={{ top: 460 }}></div>
      <div className="carnet-hole" style={{ top: 780 }}></div>
      <div className="carnet-hole" style={{ top: 1100 }}></div>
      <div className="carnet-hole" style={{ top: 1420 }}></div>

      <section className="carnet-paper relative overflow-hidden">
        {/* Bandeau urgence — papier crème */}
        <div className="relative z-20 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-[rgba(251,246,234,0.92)] backdrop-blur-md py-2.5 px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 text-carnet-red">
            <Flame className="h-3.5 w-3.5 animate-pulse" />
            <span className="font-instrument text-[13px] font-semibold tracking-wide text-carnet-ink-soft">
              Dernières places — Stages intensifs de Février
            </span>
            <Link
              to="/stages"
              className="font-instrument text-[11px] font-semibold uppercase tracking-[0.08em] bg-carnet-ink text-carnet-paper px-3 py-1 rounded-full hover:bg-carnet-red transition-all flex items-center gap-1 group"
            >
              S'inscrire <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Contenu hero — centré */}
        <div className="relative z-10 mx-auto max-w-[1280px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 pt-20 pb-24 sm:pt-24 sm:pb-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="carnet-eyebrow mb-8"
          >
            Méthode · Mathématiques & Prépa ECG
          </motion.p>

          {/* Annotation manuscrite hero (desktop) — au-dessus à gauche du mot corrigé */}
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            animate={{ opacity: 1, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: '14%', top: 240, fontSize: 26, maxWidth: 110, lineHeight: 1.1, textAlign: 'left' }}
          >
            ↗ ici,<br/>le déclic
          </motion.div>

          {/* Titre principal — centré, grand, avec rature/correction sémantique */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-lora text-[48px] sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.98] tracking-[-0.022em] text-carnet-ink mx-auto max-w-[1100px]"
            style={{ textWrap: 'balance' }}
          >
            La méthode pour rendre la prépa ECG{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span
                className="text-[#9C8772]"
                style={{
                  textDecoration: 'line-through',
                  textDecorationColor: '#C1443A',
                  textDecorationThickness: '4px',
                }}
              >
                difficile
              </span>
              <span
                className="absolute carnet-hand italic whitespace-nowrap"
                style={{
                  top: '-0.62em',
                  left: '0.2em',
                  fontSize: '0.84em',
                  color: '#C1443A',
                  transform: 'rotate(-4deg)',
                  fontFamily: 'Caveat, cursive',
                  fontWeight: 600,
                }}
              >
                logique
              </span>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-instrument text-[18px] sm:text-[21px] leading-[1.55] text-carnet-ink-soft max-w-[640px] mx-auto mt-14 sm:mt-16"
          >
            Une <span className="font-lora italic text-carnet-red">bonne méthode</span> rend la progression inévitable.
            La rigueur d'un correcteur, la chaleur d'un grand frère.
          </motion.p>

          {/* CTAs — centrés */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Button
              asChild
              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[16px] py-[18px] px-7 rounded-full transition-all hover:-translate-y-0.5 border-0 h-auto"
            >
              <Link to="/dashboard">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Commencer maintenant
              </Link>
            </Button>

            <Link
              to="/formations"
              className="relative font-instrument text-[15px] font-medium text-carnet-ink py-4 px-5 group"
            >
              Voir les formations →
              <svg
                className="absolute -left-2.5 -top-2 w-[220px] h-[50px] pointer-events-none"
                viewBox="0 0 220 50"
              >
                <ellipse cx="110" cy="25" rx="105" ry="20" fill="none" stroke="#C1443A" strokeWidth="2" strokeDasharray="3 4" opacity="0.7" />
              </svg>
            </Link>
          </motion.div>

          {/* Métriques manuscrites — centrées */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 sm:gap-16 mt-16 pt-10 border-t border-dashed border-[rgba(78,55,30,0.18)] max-w-[760px] mx-auto"
          >
            {[
              { num: '+200', lbl: 'Élèves accompagnés' },
              { num: '5.0', lbl: 'Note Google' },
              { num: '100%', lbl: 'Spécialisé prépa ECG' },
            ].map((m) => (
              <div key={m.lbl} className="text-center">
                <div className="carnet-hand text-[48px] font-semibold leading-none">{m.num}</div>
                <div className="font-instrument text-[13px] text-carnet-ink-mute mt-2 tracking-wide">
                  {m.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md carnet-card border-[rgba(78,55,30,0.18)]">
          <DialogHeader>
            <DialogTitle className="text-center font-lora text-2xl text-carnet-ink">
              Demander mon coaching gratuit
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center font-instrument text-carnet-ink-soft">
              Je suis en prépa ECG et je veux mon premier coaching gratuit.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={handleWhatsAppJoin}
                className="flex-1 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold border-0"
              >
                Contacter WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-soft font-instrument hover:bg-carnet-paper"
              >
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
