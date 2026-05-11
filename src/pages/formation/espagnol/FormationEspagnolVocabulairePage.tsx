import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

const FormationEspagnolVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="carnet-paper min-h-screen">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Vocabulaire</span>
          </div>
        </div>
      </nav>

      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-[820px]">
            <div className="carnet-eyebrow mb-6">Espagnol · Module 01</div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Vocabulaire <em className="font-lora italic text-carnet-red">Espagnol</em>.
            </h1>
            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Lexique thématique et expressions idiomatiques pour l'épreuve de langue aux concours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <Card className="carnet-card border-0">
            <CardContent className="p-6 sm:p-8">
              <SpanishVocabularyFlashcards language={language} />
            </CardContent>
          </Card>

          <div className="flex justify-center mt-12">
            <Link to="/formation/espagnol">
              <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-11 px-6 text-[14px] border-0 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à la formation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolVocabulairePage;
