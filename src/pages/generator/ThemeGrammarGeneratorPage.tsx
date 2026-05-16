import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { Home, ChevronRight, PlayCircle } from 'lucide-react';

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane + accès tutoriel */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-2.5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Thème grammatical</span>
            </div>
            <a
              href="#tuto-video"
              className="flex items-center gap-1.5 text-[12px] font-instrument text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              <PlayCircle className="h-3.5 w-3.5" />
              <span>Tutoriel vidéo</span>
            </a>
          </div>
        </div>
      </nav>

      <ThemeGrammaticalGenerator />

      {/* Tutoriel vidéo (chargé seulement si l'utilisateur l'ouvre via la barre du haut) */}
      <details id="tuto-video" className="mx-auto max-w-3xl px-6 pb-10 group">
        <summary className="list-none cursor-pointer flex items-center gap-2 py-2 text-[12px] font-instrument text-carnet-ink-mute hover:text-carnet-red transition-colors">
          <PlayCircle className="h-4 w-4" />
          <span>Voir le tutoriel vidéo</span>
          <ChevronRight className="h-3 w-3 opacity-60 transition-transform group-open:rotate-90" />
        </summary>
        <div className="mt-3 carnet-card overflow-hidden">
          <div className="p-3">
            <div className="relative w-full rounded-md overflow-hidden bg-carnet-paper-2" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Tutoriel Thème Grammatical"
              />
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default ThemeGrammarGeneratorPage;
