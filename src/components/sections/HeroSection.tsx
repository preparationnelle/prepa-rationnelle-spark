import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Flame, ChevronRight } from 'lucide-react';
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
      <section className="relative overflow-hidden">
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
            Cours · Mathématiques & Python Prépa ECG
          </motion.p>



          {/* Titre principal — centré, grand, avec rature/correction sémantique */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-lora text-[48px] sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.98] tracking-[-0.022em] text-carnet-ink mx-auto max-w-[1100px]"
            style={{ textWrap: 'balance' }}
          >
            La méthode pour rendre la prépa ECG{' '}
            <span className="relative inline-block whitespace-nowrap" aria-label="logique">
              <span
                aria-hidden="true"
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
                aria-hidden="true"
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
            Une <span className="font-lora italic text-carnet-red">bonne méthode</span> rend la progression inévitable.<br />
            La rigueur d'un correcteur, la bienveillance d'un grand frère.
          </motion.p>

          {/* CTAs — centrés */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            {/* Annotation + bouton dans un groupe aligné */}
            <div className="flex items-center gap-5">
              {/* "ici, le déclic" à gauche, pointant → vers le bouton */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="carnet-hand hidden lg:flex flex-col items-end pointer-events-none leading-[1.2] text-right"
                style={{ fontSize: 20, color: '#C1443A', transform: 'rotate(-4deg)' }}
              >
                <span>ici,</span>
                <span>le déclic →</span>
              </motion.div>

              <Button
                asChild
                className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[18px] py-[22px] px-10 rounded-full transition-all hover:-translate-y-0.5 border-0 h-auto"
              >
                <a href="https://calendly.com/preparationnelle/30min" target="_blank" rel="noopener noreferrer">
                  Réserver un cours gratuit
                </a>
              </Button>
            </div>
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
