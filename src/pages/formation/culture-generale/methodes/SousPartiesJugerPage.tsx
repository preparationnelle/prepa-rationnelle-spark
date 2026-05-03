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

const SousPartiesJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Construire et articuler les sous-parties
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Logiques de structuration, transitions efficaces et exemples appliqués au thème <em>l&apos;humanité</em>.
            </p>
          </div>

          <PRCard number="01" title="Pourquoi penser les sous-parties ?">
            <div className="space-y-2 text-sm md:text-base">
              <p>Une partie ne peut pas être un bloc homogène : elle progresse par <strong>sous-parties</strong>. Celles-ci doivent être <strong>équilibrées</strong> (3 en moyenne), suivre une <strong>logique claire</strong> et s&apos;articuler par des <strong>transitions fluides</strong>.</p>
              <p>Les sous-parties sont la <em>charpente interne</em> de chaque grande partie.</p>
            </div>
          </PRCard>

          <PRCard number="02" title="Logiques possibles pour structurer les sous-parties">
            <div className="space-y-5 text-sm md:text-base">
              {[
                { t: 'a) Logique syllogistique (A → B → C)', desc: 'On part d\'une affirmation, on en tire une conséquence, puis on conclut provisoirement.', items: [
                  'A : L\'humain se distingue de l\'animal par la raison et le langage.',
                  'B : Mais ces facultés s\'apprennent dans une culture, donc elles ne sont pas données.',
                  'C : Dès lors, l\'humanité est moins une nature qu\'une éducation.',
                ] },
                { t: 'b) Distinction conceptuelle ou définitoire', desc: 'On éclaire le sujet en séparant plusieurs sens d\'un même concept.', items: [
                  'L\'humanité comme espèce biologique (Homo sapiens).',
                  'L\'humanité comme communauté politique (genre humain).',
                  'L\'humanité comme qualité morale (dignité, fraternité).',
                ] },
                { t: 'c) Points de vue (collectif vs individuel)', desc: 'Distinguer l\'échelle de l\'individu et celle de la collectivité.', items: [
                  'Échelle individuelle : conscience, responsabilité, dignité.',
                  'Échelle collective : droits humains, solidarité, cosmopolitisme.',
                  'Tension : la conscience individuelle peut résister à la cruauté collective.',
                ] },
                { t: 'd) Progression dialectique (thèse / antithèse / synthèse)', desc: '', items: [
                  'Thèse : l\'humanité est inscrite dans la nature de l\'espèce.',
                  'Antithèse : l\'histoire des génocides montre que cette nature ne suffit pas.',
                  'Synthèse : l\'humanité est une construction éthique à honorer collectivement.',
                ] },
              ].map((b) => (
                <div key={b.t}>
                  <h3 className="font-dm-serif text-pr-black text-lg mb-1.5">{b.t}</h3>
                  {b.desc && <p className="mb-2">{b.desc}</p>}
                  <ul className="space-y-1">
                    {b.items.map((it) => <li key={it}><span className="text-pr-orange mr-2">→</span>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </PRCard>

          <PRCard number="03" title="Relier les sous-parties : répertoire de connecteurs">
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h4 className="font-dm-serif text-pr-black text-base mb-1">Introduire la première</h4>
                <ul className="space-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>« On peut commencer par avancer que… »</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Tout d&apos;abord, il convient de rappeler que… »</li>
                </ul>
              </div>
              <div>
                <h4 className="font-dm-serif text-pr-black text-base mb-1">Passer à la deuxième</h4>
                <ul className="space-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>« Il s&apos;agit alors de comprendre que… »</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Mais cette analyse ne se limite pas à… »</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Toutefois, il faut reconnaître que… »</li>
                </ul>
              </div>
              <div>
                <h4 className="font-dm-serif text-pr-black text-base mb-1">Introduire la troisième</h4>
                <ul className="space-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>« Ainsi, il apparaît que… »</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Dès lors, on peut considérer que… »</li>
                  <li><span className="text-pr-orange mr-2">→</span>« De ce fait, il est possible de montrer que… »</li>
                </ul>
              </div>
            </div>
          </PRCard>

          <PRCard number="04" title="Exemple appliqué : Partie I « L'humanité comme donnée naturelle »">
            <div className="space-y-3 text-sm md:text-base">
              <ul className="space-y-2">
                <li><span className="text-pr-orange mr-2">→</span><strong>Sous-partie 1</strong> : Tout d&apos;abord, l&apos;humanité se présente comme une espèce biologique unifiée, dotée d&apos;un patrimoine génétique commun et de facultés propres (langage, raison, technique).</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sous-partie 2</strong> : Mais il s&apos;agit aussi de comprendre que cette unité biologique se redouble d&apos;une dignité morale universelle, fondée par Kant et inscrite dans la déclaration des droits humains de 1948.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sous-partie 3</strong> : Ainsi l&apos;humanité possède une essence reconnue depuis Aristote, qui fait de l&apos;humain un animal politique et rationnel, irréductible aux autres êtres vivants.</li>
              </ul>
              <p className="text-pr-gray-mid italic">On retrouve une progression logique : du biologique au moral, puis à l&apos;essence philosophique. Les transitions sont souples et hiérarchisées.</p>
            </div>
          </PRCard>

          <PRCard number="05" title="Résumé pratique">
            <ul className="space-y-1.5 text-sm md:text-base">
              <li><span className="text-pr-orange mr-2">→</span>Chaque grande partie comporte environ <strong>3 sous-parties</strong>.</li>
              <li><span className="text-pr-orange mr-2">→</span>Les sous-parties suivent une <strong>logique précise</strong> (syllogisme, distinctions, points de vue, dialectique).</li>
              <li><span className="text-pr-orange mr-2">→</span>Elles sont <strong>annoncées et reliées</strong> avec des formules claires.</li>
              <li><span className="text-pr-orange mr-2">→</span>Donner au correcteur une impression de <strong>progression continue</strong> et maîtrisée.</li>
            </ul>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/methodes">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des méthodes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SousPartiesJugerPage;
