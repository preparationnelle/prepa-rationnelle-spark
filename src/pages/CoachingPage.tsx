import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MessageSquare, Users, Sparkles } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

const CoachingPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('coaching');
  }, [trackPageVisit]);

  return (
    <div className="relative">
      <div className="container mx-auto py-16 px-4 max-w-3xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-carnet-red mb-4">
            Coaching · 30 minutes en tête-à-tête
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl text-carnet-ink mb-6 leading-tight">
            On débriefe ta prépa,
            <br />
            <span className="text-carnet-red italic">en vrai.</span>
          </h1>
          <p className="text-lg text-carnet-ink-soft max-w-xl mx-auto leading-relaxed">
            Une session avec un coach Prépa Rationnelle, sur ton sujet du moment.
            Pas de présentation commerciale&nbsp;: on travaille.
          </p>
        </div>

        {/* What you get — narrative list, not 3-col card grid */}
        <div className="border-y border-carnet-rule/40 py-12 mb-16">
          <h2 className="font-serif text-2xl text-carnet-ink mb-8">
            Ce qu'on fait pendant la session.
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MessageSquare className="h-5 w-5 mt-1 text-carnet-red shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-carnet-ink">Un point précis sur ton dossier.</p>
                <p className="text-sm text-carnet-ink-soft mt-1">
                  Tu nous montres ce qui coince — un chapitre, une copie, un planning, un entretien à préparer. On creuse.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Sparkles className="h-5 w-5 mt-1 text-carnet-red shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-carnet-ink">Un retour direct, sans langue de bois.</p>
                <p className="text-sm text-carnet-ink-soft mt-1">
                  Ce qui est bien, ce qui ne l'est pas, ce qu'il faut corriger d'ici la prochaine échéance.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Users className="h-5 w-5 mt-1 text-carnet-red shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-carnet-ink">Un plan d'action écrit, à toi.</p>
                <p className="text-sm text-carnet-ink-soft mt-1">
                  En fin de session, tu repars avec une note récapitulative et 3 actions concrètes pour la semaine.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <a href="https://calendly.com/prepa-rationnelle" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-carnet-ink hover:bg-carnet-ink-soft text-white px-8 h-14 text-base shadow-lg"
            >
              <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
              Réserver un créneau
            </Button>
          </a>
          <p className="text-sm text-carnet-ink-mute mt-4">
            <Clock className="h-4 w-4 inline mr-1 -mt-0.5" aria-hidden="true" />
            30 minutes — disponibilités 7j/7 — premier rendez-vous offert
          </p>
        </div>

        {/* How it works — keeps the existing 4-step list, restyled */}
        <div>
          <h2 className="font-serif text-2xl text-carnet-ink mb-6">
            Comment ça se passe.
          </h2>
          <ol className="space-y-4 max-w-2xl">
            <li className="flex">
              <span className="font-serif text-xl text-carnet-red w-8 shrink-0">1.</span>
              <span className="text-carnet-ink-soft pt-0.5">Tu réserves un créneau via le calendrier.</span>
            </li>
            <li className="flex">
              <span className="font-serif text-xl text-carnet-red w-8 shrink-0">2.</span>
              <span className="text-carnet-ink-soft pt-0.5">Tu reçois un email avec le lien Zoom et un petit formulaire (deux questions, deux minutes).</span>
            </li>
            <li className="flex">
              <span className="font-serif text-xl text-carnet-red w-8 shrink-0">3.</span>
              <span className="text-carnet-ink-soft pt-0.5">Pendant la session, on travaille sur ce que tu as remonté. Pas de slides.</span>
            </li>
            <li className="flex">
              <span className="font-serif text-xl text-carnet-red w-8 shrink-0">4.</span>
              <span className="text-carnet-ink-soft pt-0.5">Tu repars avec une synthèse écrite et des recommandations à appliquer cette semaine.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
