
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[72vh] flex flex-col items-center justify-center"
      style={{ background: "#FCF6E7" }}
    >
      <div className="w-full flex flex-col items-center justify-center py-10 px-4">
        {/* Lignes infos : alignées au centre et larges */}
        <div className="mb-7 flex flex-col gap-2 items-center">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-[#F36C00] mr-2" />
            <Link
              to="/calendar"
              className="text-base font-semibold text-[#F36C00] uppercase tracking-wider hover:underline"
            >
              PRÉPAREZ VOTRE ENTRETIEN
            </Link>
          </div>
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-[#F36C00] mr-2" />
            <Link
              to="/generator"
              className="text-base font-semibold text-[#F36C00] uppercase tracking-wider hover:underline"
            >
              PRÉPAREZ VOS ÉCRITS AVEC IA
            </Link>
          </div>
        </div>

        <h1
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight text-[#F36C00] text-center mb-6"
          style={{ lineHeight: 1.07 }}
        >
          Je vous aide à intégrer <br className="hidden md:block" />
          l&apos;école de vos rêves
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-[#252523] text-center mb-12 font-normal">
          Vous avez bossé 2&nbsp;ans. Maintenant, il faut{" "}
          <span className="font-bold text-[#252523]">convaincre</span>.{" "}
          Une plateforme qui combine{" "}
          <Link
            to="/calendar"
            className="font-bold underline text-[#F36C00] hover:text-[#c95400] transition"
          >
            coaching sur‑mesure
          </Link>{" "}
          et{" "}
          <Link
            to="/generator"
            className="font-bold underline text-[#F36C00] hover:text-[#c95400] transition"
          >
            automatisations IA
          </Link>{" "}
          pour réussir son entretien.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-2xl">
          <Link to="/register" className="flex-1 md:flex-none">
            <Button
              size="lg"
              className="w-full md:w-auto px-7 py-5 bg-[#F36C00] text-white font-semibold text-lg rounded-lg shadow-none hover:bg-[#e66200] transition border-0"
              style={{
                boxShadow: "0 2px 8px rgba(243,108,0,0.06)",
              }}
            >
              Commencer gratuitement
            </Button>
          </Link>
          <Link to="/login" className="flex-1 md:flex-none">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto px-7 py-5 text-[#F36C00] border border-[#F8B96A] bg-white hover:bg-[#FFF4E7] hover:border-[#F36C00] hover:text-[#db5e00] font-semibold text-lg rounded-lg shadow-none transition"
              style={{
                boxShadow: "0 2px 8px rgba(243,108,0,0.04)",
              }}
            >
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
