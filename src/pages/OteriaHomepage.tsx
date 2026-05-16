import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Code2, Shield, Binary, Network, BarChart3, Target, Brain, GraduationCap, BookOpen, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OteriaHomepage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">OTERIA Cyber School</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">OTERIA Cyber School · Formation Post-bac à Bac+5</div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              OTERIA{' '}
              <em className="font-lora italic text-carnet-red">Cyber School</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[680px] mb-8">
              Formation intensive en <span className="carnet-hl font-lora italic">mathématiques, logique et programmation</span> pour l'informatique et la cybersécurité.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Shield className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Cybersécurité</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <Code2 className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">Programmation</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <Brain className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">Algorithmique</span>
              </div>
            </div>

            <p className="font-instrument text-[14px] text-carnet-ink-mute mt-6 max-w-[640px]">
              OTERIA délivre son titre RNCP de Niveau 7 « Expert en Cybersécurité » (#39999).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Bachelor 2 */}
      <section className="relative pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-10"
          >
            <div className="carnet-eyebrow mb-5">Nos formations</div>
            <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
              Bachelor <em className="font-lora italic text-carnet-red">2</em>.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[17px] leading-[1.6] text-carnet-ink-soft mt-4 max-w-[600px]">
              Initiation aux bases des mathématiques, logique et programmation Python en <span className="font-semibold text-carnet-ink">14 séances intensives</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="carnet-tilt-l"
          >
            <div className="carnet-card relative p-7 sm:p-9 overflow-hidden">
              <div className="flex items-start sm:items-center gap-5 mb-7">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="carnet-hand text-[40px] sm:text-[48px] text-carnet-red leading-none font-semibold">
                    B2
                  </span>
                  <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                </div>

                <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-carnet-red" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="carnet-eyebrow text-[11px] mb-1.5">Niveau Fondamental</div>
                  <h3 className="font-lora text-[24px] sm:text-[28px] leading-[1.2] text-carnet-ink">
                    Bachelor 2
                  </h3>
                  <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.55] mt-1">
                    Programme structuré en 14 séances intensives couvrant les concepts fondamentaux nécessaires à l'informatique et la cybersécurité.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {[
                  { icon: Binary, label: 'Logique' },
                  { icon: Code2, label: 'Python' },
                  { icon: BarChart3, label: 'Mathématiques' },
                  { icon: Network, label: 'Probabilités' },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md"
                  >
                    <feature.icon className="h-4 w-4 text-carnet-red flex-shrink-0" />
                    <span className="font-instrument text-[13px] font-medium text-carnet-ink truncate">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/articles/oteria-cyber-school/bachelor-1">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-12 px-6 text-sm border-0 group">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder au Programme Bachelor 2
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthodologie Pédagogique */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-10"
          >
            <div className="carnet-eyebrow mb-5">Notre approche</div>
            <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
              Méthodologie <em className="font-lora italic text-carnet-red">pédagogique</em>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Cours Théoriques', desc: 'Apprentissage structuré des concepts fondamentaux' },
              { icon: Target, title: 'Exercices Pratiques', desc: 'Mise en application immédiate des connaissances' },
              { icon: Brain, title: 'Flashcards', desc: 'Révision interactive et mémorisation efficace' },
              { icon: Zap, title: 'Évaluations', desc: 'QCM et tests pour valider les acquis' },
            ].map((item, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className={tilt}
                >
                  <div className="carnet-card p-6 h-full">
                    <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[18px] leading-[1.25] text-carnet-ink mb-2">
                      {item.title}
                    </h3>
                    <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                    <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OteriaHomepage;
