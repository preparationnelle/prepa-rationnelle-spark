import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wand2, MessageSquare, Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const FormationEspagnolGenerateursPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      number: '01',
      title: 'Générateur de Paragraphes',
      description: 'Créez des paragraphes argumentatifs en espagnol basés sur des articles de presse.',
      Icon: MessageSquare,
      component: <LanguageParagraphGenerator language={language} selectedLanguage="espagnol" />,
    },
    {
      id: 'grammar',
      number: '02',
      title: 'Générateur de Thèmes',
      description: 'Entraînez-vous aux thèmes grammaticaux avec correction automatique.',
      Icon: Wand2,
      component: <ThemeGrammaticalGenerator />,
    },
  ];

  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
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
            <span className="carnet-eyebrow text-[11px]">Générateurs IA</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Espagnol · Outils IA</div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Générateurs <em className="font-lora italic text-carnet-red">IA</em>.
            </h1>
            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              Outils IA pour l'entraînement pratique et la correction automatique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outils */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-5xl mx-auto space-y-8">
            {generatorTools.map((tool, idx) => {
              const tilt = idx % 2 === 1 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={tilt}
                >
                  <Card className="carnet-card border-0">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-5 mb-5">
                        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold flex-shrink-0">
                          {tool.number}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h2 className="font-lora text-[24px] text-carnet-ink leading-tight">
                              {tool.title}
                            </h2>
                            <span className="carnet-eyebrow text-[10px] px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] text-carnet-red">
                              IA
                            </span>
                          </div>
                          <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6]">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      {tool.component}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            <div className="flex justify-center pt-4">
              <Link to="/formation/espagnol">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-11 px-6 text-[14px] border-0 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à la formation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolGenerateursPage;
