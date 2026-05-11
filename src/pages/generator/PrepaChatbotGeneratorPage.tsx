import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Youtube, Home, ChevronRight } from 'lucide-react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

const PrepaChatbotGeneratorPage = () => {
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
            <span className="carnet-eyebrow text-[11px]">Assistant Prépa</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Assistant IA · Toutes matières</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Heart className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Assistant <em className="font-lora italic text-carnet-red">Prépa Rationnelle</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Ton compagnon d'excellence pour maîtriser <span className="carnet-hl font-lora italic">toutes les matières</span> — méthodologie, concepts, motivation.
          </p>
        </header>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="carnet-card overflow-hidden">
            <div className="px-6 py-4 border-b border-dashed border-[rgba(78,55,30,0.18)] flex items-center gap-2.5">
              <Youtube className="h-4 w-4 text-carnet-red" />
              <span className="carnet-eyebrow text-[11px]">Tutoriel vidéo · utiliser le chatbot</span>
            </div>
            <div className="p-3">
              <div className="aspect-video w-full rounded-md overflow-hidden bg-carnet-paper-2">
                <iframe
                  src="https://www.loom.com/embed/ee8a95eb3d7b475695baf56bf9f29c64"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <PrepaChatbotGenerator />
      </div>
    </div>
  );
};

export default PrepaChatbotGeneratorPage;
