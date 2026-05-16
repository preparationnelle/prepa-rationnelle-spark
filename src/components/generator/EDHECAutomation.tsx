import React from "react";
import { Dices } from "lucide-react";
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

export const EDHECAutomation: React.FC = () => (
  <div className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
    <div className="h-[3px] w-full bg-pr-black" />
    <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-carnet-paper-2 border border-pr-black-soft rounded-xl">
          <Dices className="h-5 w-5 text-pr-black" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
            EDHEC
          </div>
          <h3 className="font-dm-serif text-2xl text-pr-black leading-none">
            Générateur de mots EDHEC
          </h3>
          <p className="text-pr-gray-mid text-[13px] mt-1 font-dm-sans">
            Générateur de mots aléatoires pour ta présentation EDHEC.
          </p>
        </div>
      </div>
    </div>
    <div className="p-6 sm:p-8">
      <RandomWordGenerator type="word" />
    </div>
  </div>
);
