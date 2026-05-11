import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Home, ChevronRight } from 'lucide-react';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';

const GeopoliticsParadoxGeneratorPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
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
            <span className="carnet-eyebrow text-[11px]">Paradoxes Géopo</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Analyse IA · Noté sur 20</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Paradoxes <em className="font-lora italic text-carnet-red">géopolitiques</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Construis et fais évaluer tes <span className="carnet-hl font-lora italic">problématiques paradoxales</span> — clarté, paradoxe, ancrage, ouverture, pertinence.
          </p>
        </header>

        <GeopoliticsParadoxGenerator />

        {/* Critères — carnet card */}
        <div className="mt-10 carnet-card p-6 sm:p-8">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[32px] text-carnet-red leading-none font-semibold">+</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h3 className="font-lora text-[24px] text-carnet-ink leading-tight">
              Critères <em className="font-lora italic text-carnet-red">d'évaluation</em>
              <span className="text-carnet-ink-mute font-instrument text-sm font-normal ml-2">(sur 20 points)</span>
            </h3>
          </div>
          <div className="space-y-3 font-instrument">
            {[
              ['Clarté (4 pts)', 'Question compréhensible et bien posée'],
              ['Paradoxe explicite (4 pts)', "Présence d'une contradiction féconde"],
              ['Ancrage géopolitique (4 pts)', "Mention d'acteurs, d'espaces ou de puissances"],
              ['Ouverture analytique (4 pts)', 'Question ouverte, non descriptive'],
              ['Pertinence stratégique (4 pts)', 'Enjeux stratégiques majeurs et profondeur'],
            ].map(([label, desc]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                <span className="font-semibold text-carnet-red sm:min-w-[210px]">{label}</span>
                <span className="text-carnet-ink-soft">{desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[rgba(193,68,58,0.06)] border-l-2 border-carnet-red p-4 rounded-r">
            <p className="text-sm text-carnet-red font-instrument">
              <strong>Note :</strong> l'IA est sévère et honnête. Si la réponse ne fait pas sens, elle peut noter 0/20.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopoliticsParadoxGeneratorPage;
