import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, ChevronRight } from 'lucide-react';
import { MathGenerator } from '@/components/generator/MathGenerator';

const MathGeneratorPage = () => {
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
            <span className="carnet-eyebrow text-[11px]">Maths IA</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Maths Approfondies</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Calculator className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Maths IA</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Posez vos questions sur les théorèmes du programme{' '}
            <span className="carnet-hl font-lora italic">Maths Approfondies</span> 1ère et 2ème année — réponses en LaTeX.
          </p>
        </header>

        <MathGenerator />
      </div>
    </div>
  );
};

export default MathGeneratorPage;
