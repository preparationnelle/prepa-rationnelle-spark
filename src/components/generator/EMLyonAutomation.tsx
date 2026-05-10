import React from "react";
import { HelpCircle } from "lucide-react";
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

export const EMLyonAutomation: React.FC = () => (
  <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
    <div className="h-[3px] w-full bg-pr-orange" />
    <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white border border-pr-orange-soft rounded-xl">
          <HelpCircle className="h-5 w-5 text-pr-orange-dark" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
            EM Lyon
          </div>
          <h3 className="font-dm-serif text-2xl text-pr-black leading-none">
            Questions d'entretien EM Lyon
          </h3>
          <p className="text-pr-gray-mid text-[13px] mt-1 font-dm-sans">
            Questions aléatoires pour l'entretien « Flash » avec cartes thématiques.
          </p>
        </div>
      </div>
    </div>
    <div className="p-6 sm:p-8">
      <RandomWordGenerator type="emlyon" />
    </div>
  </div>
);
