import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dices, Home, ChevronRight } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { useProgress } from '@/context/ProgressContext';

const steps = [
  {
    n: 1,
    label: 'Génère un mot',
    body: 'Clique sur « Générer un mot aléatoire » pour obtenir un mot surprise.',
  },
  {
    n: 2,
    label: 'Présentation 3 minutes',
    body: 'Définition (avec tes mots) → exemples personnels → ouverture sur ton projet pro.',
  },
];

const EDHECGeneratorPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen carnet-paper">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">EDHEC</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Oraux · EDHEC</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Dices className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Mots <em className="font-lora italic text-carnet-red">EDHEC</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Générateur de <span className="carnet-hl font-lora italic">mots aléatoires</span> pour ta présentation EDHEC.
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-10 carnet-card p-6 sm:p-8">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[32px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h3 className="font-lora text-[22px] text-carnet-ink leading-tight">
              Mode <em className="font-lora italic text-carnet-red">d'emploi</em>
            </h3>
          </div>
          <div className="space-y-4 font-instrument">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 carnet-hand text-[22px] text-carnet-red leading-none font-semibold flex items-center justify-center">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-carnet-ink mb-1 font-instrument">{s.label}</p>
                  <p className="text-[14px] text-carnet-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto carnet-card overflow-hidden">
          <div className="px-6 py-5 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                <Dices className="h-5 w-5 text-carnet-red" />
              </div>
              <div>
                <h2 className="font-lora text-[22px] text-carnet-ink">Générateur de mots EDHEC</h2>
                <p className="font-instrument text-[12px] text-carnet-ink-mute mt-0.5">
                  Mots aléatoires pour ta présentation
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <RandomWordGenerator type="word" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDHECGeneratorPage;
