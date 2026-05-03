import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PRCard: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <Card className="relative bg-white rounded-2xl border border-pr-gray-light overflow-hidden mt-6 first:mt-0">
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black flex items-baseline gap-3">
        <span className="font-dm-serif text-pr-orange text-3xl leading-none">{number}</span>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

const AnalyseSujetJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Analyse d&apos;un sujet : thème « L&apos;humanité »
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Grille de lecture rapide pour définir, contextualiser et décoder les formulations
              de sujet autour de <em>l&apos;humanité</em>.
            </p>
          </div>

          <PRCard number="01" title="Définition">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                <strong>L&apos;humanité</strong> : trois sens à toujours distinguer.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Sens biologique</strong> : l&apos;ensemble des êtres appartenant à l&apos;espèce <em>Homo sapiens</em>.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sens collectif</strong> : la communauté de tous les humains, présents, passés et à venir.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sens moral</strong> : la qualité qui distingue l&apos;humain (dignité, bienveillance, respect du semblable).</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-dm-serif text-pr-black text-base mb-1">Synonymes</h3>
                  <p>genre humain, espèce humaine, hommes, dignité, bienveillance, fraternité.</p>
                </div>
                <div>
                  <h3 className="font-dm-serif text-pr-black text-base mb-1">Antonymes</h3>
                  <p>inhumanité, barbarie, animalité, déshumanisation, posthumain, surhomme.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-dm-serif text-pr-black text-base mb-1">Famille de mots</h3>
                  <p>humain, humanisme, humaniste, humanitaire, humaniser, humanités.</p>
                </div>
                <div>
                  <h3 className="font-dm-serif text-pr-black text-base mb-1">Polysémie</h3>
                  <ul className="space-y-1">
                    <li><span className="text-pr-orange mr-2">→</span>Espèce biologique (anthropologie).</li>
                    <li><span className="text-pr-orange mr-2">→</span>Communauté politique mondiale (droit international).</li>
                    <li><span className="text-pr-orange mr-2">→</span>Vertu morale (« faire preuve d&apos;humanité »).</li>
                    <li><span className="text-pr-orange mr-2">→</span>Idéal de progrès (les Lumières, Condorcet).</li>
                    <li><span className="text-pr-orange mr-2">→</span>Construction historique (l&apos;humanité s&apos;invente).</li>
                  </ul>
                </div>
              </div>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Connotations</h3>
                <p>Souvent positives (chaleur, fraternité), mais le mot peut aussi renvoyer à l&apos;abstraction creuse (« crime contre l&apos;humanité » sans visage concret) ou à la fiction (l&apos;humanité a-t-elle jamais existé comme sujet unifié ?).</p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Filtres">
            <div className="space-y-5 text-sm md:text-base">
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1">Modernité</h3>
                <p>Anthropocène, intelligence artificielle, transhumanisme, génocides du XX<sup>e</sup> siècle, crise migratoire, éthique animale, biotechnologies. Le thème est saturé d&apos;enjeux contemporains : il faut savoir les mobiliser.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h3 className="font-dm-serif text-pr-black text-lg mb-2">Implications</h3>
                  <ul className="space-y-1.5">
                    <li><span className="text-pr-orange mr-2">→</span>Causes : nature ou histoire ? L&apos;humain a-t-il une essence ?</li>
                    <li><span className="text-pr-orange mr-2">→</span>Conséquences : droits humains, devoirs envers les générations futures, statut des animaux et des machines.</li>
                    <li><span className="text-pr-orange mr-2">→</span>Moyens : éducation, langage, technique, droit, art comme vecteurs d&apos;humanisation.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-dm-serif text-pr-black text-lg mb-2">Dimensions</h3>
                  <ul className="space-y-1.5">
                    <li><span className="text-pr-orange mr-2">→</span>Métaphysique : qu&apos;est-ce que l&apos;humain ?</li>
                    <li><span className="text-pr-orange mr-2">→</span>Anthropologique : nature ou culture ?</li>
                    <li><span className="text-pr-orange mr-2">→</span>Politique : universalisme ou pluralisme ?</li>
                    <li><span className="text-pr-orange mr-2">→</span>Morale : dignité, fraternité, hospitalité.</li>
                    <li><span className="text-pr-orange mr-2">→</span>Technique : augmentation, hybridation, machines.</li>
                    <li><span className="text-pr-orange mr-2">→</span>Écologique : place de l&apos;humain dans le vivant.</li>
                    <li><span className="text-pr-orange mr-2">→</span>Historique : barbarie, génocides, progrès moral.</li>
                    <li><span className="text-pr-orange mr-2">→</span>Esthétique : représentations de l&apos;humain dans l&apos;art.</li>
                  </ul>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="03" title="Forme du sujet">
            <div className="space-y-5 text-sm md:text-base">
              {[
                { t: 'Qu\'est-ce que l\'humanité ?', items: [
                  'Essence : existe-t-il une nature humaine universelle ?',
                  'Construction : l\'humanité s\'invente-t-elle dans l\'histoire ?',
                ] },
                { t: 'Peut-on être inhumain ?', items: [
                  'Sens moral : la cruauté est-elle une trahison de l\'humanité ?',
                  'Sens anthropologique : l\'inhumain est-il une possibilité interne de l\'humain ?',
                ] },
                { t: 'L\'humanité face à la technique', items: [
                  'Promesse : la technique nous augmente-t-elle ?',
                  'Menace : nous fait-elle perdre ce qui constitue notre humanité ?',
                ] },
                { t: 'Qu\'est-ce qui fait le propre de l\'homme ?', items: [
                  'Différences avec l\'animal : raison, langage, conscience, technique.',
                  'Différences avec la machine : émotion, mortalité, responsabilité.',
                ] },
                { t: 'L\'humanité est-elle une ou plusieurs ?', items: [
                  'Universalisme : tous les humains sont égaux en dignité.',
                  'Pluralisme : les cultures sont irréductibles, l\'humanité est plurielle.',
                ] },
                { t: 'L\'humanité a-t-elle un avenir ?', items: [
                  'Anthropocène : sommes-nous en train de précipiter notre disparition ?',
                  'Posthumain : l\'humanité comme nous la connaissons est-elle dépassable ?',
                ] },
              ].map((b) => (
                <div key={b.t}>
                  <h3 className="font-dm-serif text-pr-black text-lg mb-1.5">{b.t}</h3>
                  <ul className="space-y-1">
                    {b.items.map((it) => (
                      <li key={it}><span className="text-pr-orange mr-2">→</span>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/articles">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyseSujetJugerPage;
