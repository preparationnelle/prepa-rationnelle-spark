import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Crown, Lightbulb, Target, Award } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre15IntegralesImpropresEtCriteresExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
    stars,
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
  }) => (
    <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
      <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
        <div className="flex gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          {[...Array(4 - stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-slate-200" />
          ))}
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => (
    <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
              {id.replace(/[^0-9.]/g, '')}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {difficulty}
          </span>
        </div>

        <div className="mb-6 text-slate-700 leading-relaxed pl-1">
          {content}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => toggleCorrection(id)}
            variant="ghost"
            size="sm"
            className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
          >
            {visibleCorrections[id] ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Masquer la correction
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Afficher la correction
              </>
            )}
          </Button>

          {visibleCorrections[id] && (
            <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {correction}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <MathChapterTemplate
      chapterNumber={15}
      chapterTitle="Intégrales impropres & critères"
      description="Exercices sur la convergence et le calcul d'intégrales sur un intervalle non compact."
      slug="integrales-impropres-criteres-de-convergence"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "developpements-limites-et-taylor",
        title: "DL et Taylor (Ch 14)"
      }}
      nextChapter={{
        slug: "probabilites-generales-variables-discretes",
        title: "Probabilités Générales"
      }}
    >
      <div className="space-y-8">

        {/* Niveau Facile */}
        <section id="facile">
          <DifficultyHeader
            level="Niveau Facile"
            title="Application directe"
            icon={Lightbulb}
            stars={1}
          />

          <div className="space-y-6">
            <ExerciseCard
              id="15.1"
              title="Intégrales de Riemann"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Rappeler la règle de convergence des intégrales de Riemann en <LatexRenderer latex="+\infty" /> et en <LatexRenderer latex="0" />.</p>
                  <p>Déterminer la nature de <LatexRenderer latex="\int_1^{+\infty} \frac{dt}{t^3}" /> et <LatexRenderer latex="\int_0^1 \frac{dt}{\sqrt{t}}" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>En <LatexRenderer latex="+\infty" /> :</strong> <LatexRenderer latex="\int_1^{+\infty} \frac{dt}{t^\alpha}" /> converge si et seulement si <LatexRenderer latex="\alpha > 1" />.</p>
                  <p>Ici <LatexRenderer latex="\alpha = 3 > 1" />, donc l'intégrale converge.</p>
                  <p><strong>En 0 :</strong> <LatexRenderer latex="\int_0^1 \frac{dt}{t^\alpha}" /> converge si et seulement si <LatexRenderer latex="\alpha < 1" />.</p>
                  <p>Ici <LatexRenderer latex="\alpha = 1/2 < 1" />, donc l'intégrale converge.</p>
                </div>
              }
            />

            <ExerciseCard
              id="15.2"
              title="Calcul direct"
              difficulty="Facile"
              content={
                <div className="space-y-4">
                  <p>Calculer l'intégrale suivante après avoir justifié sa convergence :</p>
                  <div className="flex justify-center my-4">
                    <LatexRenderer latex="\int_0^{+\infty} e^{-2t} dt" />
                  </div>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>La fonction <LatexRenderer latex="t \mapsto e^{-2t}" /> est continue sur <LatexRenderer latex="[0, +\infty[" />.</p>
                  <p>Pour <LatexRenderer latex="X > 0" /> :</p>
                  <LatexRenderer latex="\int_0^X e^{-2t} dt = \left[ -\frac{1}{2}e^{-2t} \right]_0^X = -\frac{1}{2}e^{-2X} - (-\frac{1}{2})" />
                  <p>Lorsque <LatexRenderer latex="X \to +\infty" />, <LatexRenderer latex="e^{-2X} \to 0" />.</p>
                  <p>Donc l'intégrale converge et vaut <LatexRenderer latex="\frac{1}{2}" />.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Intermédiaire */}
        <section id="intermediaire">
          <DifficultyHeader
            level="Niveau Intermédiaire"
            title="Classiques & Techniques"
            icon={Target}
            stars={2}
          />

          <div className="space-y-6">
            <ExerciseCard
              id="15.3"
              title="Comparaison usuelle"
              difficulty="Moyen"
              content={
                <div className="space-y-4">
                  <p>Déterminer la nature de :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><LatexRenderer latex="\int_0^{+\infty} \frac{x \ln x}{(1+x^2)^2} dx" /></li>
                    <li><LatexRenderer latex="\int_2^{+\infty} \frac{1}{t (\ln t)^2} dt" /> (Intégrale de Bertrand)</li>
                  </ul>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Première intégrale :</strong></p>
                  <p>En <LatexRenderer latex="+\infty" />, <LatexRenderer latex="f(x) \sim \frac{x \ln x}{x^4} = \frac{\ln x}{x^3} = o\left(\frac{1}{x^{2.5}}\right)" />.</p>
                  <p>D'après le critère de Riemann (<LatexRenderer latex="\alpha = 2.5 > 1" />), l'intégrale converge en <LatexRenderer latex="+\infty" />.</p>
                  <p>En 0, <LatexRenderer latex="f(x) \sim x \ln x \to 0" />. La fonction est prolongeable par continuité, donc pas de problème en 0.</p>
                  <p>Conclusion : <strong>Converge</strong>.</p>

                  <p className="mt-4"><strong>2. Seconde intégrale :</strong></p>
                  <p>Changement de variable <LatexRenderer latex="u = \ln t" />, donc <LatexRenderer latex="du = \frac{dt}{t}" />.</p>
                  <LatexRenderer latex="\int_{\ln 2}^{X} \frac{du}{u^2} = \left[ -\frac{1}{u} \right]_{\ln 2}^X \to \frac{1}{\ln 2}" />
                  <p>Conclusion : <strong>Converge</strong>.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Dur */}
        <section id="dur">
          <DifficultyHeader
            level="Niveau Dur"
            title="Approfondissement"
            icon={Crown}
            stars={3}
          />

          <div className="space-y-6">
            <ExerciseCard
              id="15.4"
              title="Intégrale de Gauss"
              difficulty="Difficile"
              content={
                <div className="space-y-4">
                  <p>On admet que <LatexRenderer latex="\int_{-\infty}^{+\infty} e^{-x^2} dx = \sqrt{\pi}" />.</p>
                  <p>Calculer <LatexRenderer latex="I = \int_0^{+\infty} t^2 e^{-t^2} dt" />.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p>On effectue une intégration par parties (IPP) sur <LatexRenderer latex="[0, X]" />.</p>
                  <p>On pose <LatexRenderer latex="u(t) = t" /> et <LatexRenderer latex="v'(t) = t e^{-t^2}" />.</p>
                  <p>Alors <LatexRenderer latex="u'(t) = 1" /> et <LatexRenderer latex="v(t) = -\frac{1}{2} e^{-t^2}" />.</p>
                  <p>Les fonctions sont <LatexRenderer latex="C^1" />.</p>
                  <LatexRenderer latex="\int_0^X t^2 e^{-t^2} dt = \left[ -\frac{t}{2}e^{-t^2} \right]_0^X + \frac{1}{2} \int_0^X e^{-t^2} dt" />
                  <p>Le terme tout intégré tend vers 0 par croissances comparées.</p>
                  <p>L'intégrale restante tend vers <LatexRenderer latex="\frac{1}{2} \int_0^{+\infty} e^{-t^2} dt = \frac{1}{2} \cdot \frac{\sqrt{\pi}}{2}" /> (par parité de la gaussienne).</p>
                  <p>Finalement : <LatexRenderer latex="I = \frac{\sqrt{\pi}}{4}" />.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Niveau Concours */}
        <section id="concours">
          <DifficultyHeader
            level="Niveau Concours"
            title="Type BCE/Ecricome"
            icon={Award}
            stars={4}
          />

          <div className="space-y-6">
            <ExerciseCard
              id="15.5"
              title="Intégrale de Dirichlet"
              difficulty="Très Difficile"
              content={
                <div className="space-y-4">
                  <p>On considère l'intégrale <LatexRenderer latex="I = \int_0^{+\infty} \frac{\sin t}{t} dt" />.</p>
                  <p>1. Montrer que l'intégrale est impropre en <LatexRenderer latex="+\infty" /> et faussement impropre en 0.</p>
                  <p>2. À l'aide d'une intégration par parties sur <LatexRenderer latex="[1, X]" />, montrer que l'intégrale converge.</p>
                  <p>3. Montrer que l'intégrale ne converge pas absolument (on pourra minorer <LatexRenderer latex="|\sin t|" /> sur des intervalles bien choisis.</p>
                </div>
              }
              correction={
                <div className="space-y-4">
                  <p><strong>1. Nature :</strong></p>
                  <p>En 0, <LatexRenderer latex="\frac{\sin t}{t} \to 1" />, donc prolongeable par continuité (faussement impropre).</p>
                  <p>En <LatexRenderer latex="+\infty" />, c'est une intégrale impropre classique.</p>

                  <p className="mt-4"><strong>2. Convergence (IPP) :</strong></p>
                  <p>Sur <LatexRenderer latex="[1, X]" /> : <LatexRenderer latex="u = \frac{1}{t}, v' = \sin t \implies u' = -\frac{1}{t^2}, v = -\cos t" />.</p>
                  <LatexRenderer latex="\int_1^X \frac{\sin t}{t} dt = \left[ -\frac{\cos t}{t} \right]_1^X - \int_1^X \frac{\cos t}{t^2} dt" />
                  <p>Le crochet tend vers <LatexRenderer latex="\cos(1)" /> quand <LatexRenderer latex="X \to +\infty" />.</p>
                  <p>L'intégrale <LatexRenderer latex="\int_1^{+\infty} \frac{\cos t}{t^2} dt" /> converge absolument (majorée par <LatexRenderer latex="\frac{1}{t^2}" />, Riemann convergent).</p>
                  <p>Donc <LatexRenderer latex="I" /> converge.</p>

                  <p className="mt-4"><strong>3. Non-convergence absolue :</strong></p>
                  <p>On regarde <LatexRenderer latex="\int_0^{+\infty} \frac{|\sin t|}{t} dt" />.</p>
                  <p>Sur <LatexRenderer latex="[k\pi, (k+1)\pi]" />, <LatexRenderer latex="t \le (k+1)\pi" /> donc <LatexRenderer latex="\frac{1}{t} \ge \frac{1}{(k+1)\pi}" />.</p>
                  <p>L'intégrale sur une période est minorée par <LatexRenderer latex="\frac{2}{(k+1)\pi}" />.</p>
                  <p>La série <LatexRenderer latex="\sum \frac{1}{k}" /> diverge, donc l'intégrale ne converge pas absolument.</p>
                </div>
              }
            />
          </div>
        </section>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre15IntegralesImpropresEtCriteresExercicesPage;
