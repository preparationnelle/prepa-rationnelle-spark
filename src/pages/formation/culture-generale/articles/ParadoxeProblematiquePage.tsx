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

const ParadoxeProblematiquePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Trouver le paradoxe et la problématique d&apos;un sujet
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Méthode opérationnelle pour dégager la tension centrale d&apos;un sujet
              sur <em>l&apos;humanité</em> et la transformer en problématique.
            </p>
          </div>

          <PRCard number="01" title="Pourquoi chercher un paradoxe ?">
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Tout sujet sérieux repose sur une <strong>tension implicite</strong>. S&apos;il n&apos;y avait qu&apos;une évidence, il n&apos;y aurait rien à disserter. Le <strong>paradoxe</strong> met en lumière cette contradiction interne : il révèle ce qui rend le sujet <em>problématique</em> et donc intéressant.
              </p>
              <p>
                Formuler un paradoxe, c&apos;est poser deux poids sur la balance : d&apos;un côté ce qui rend le sujet <strong>évident ou légitime</strong>, de l&apos;autre ce qui le rend <strong>contestable, dangereux ou limité</strong>. Ce déséquilibre oblige à poser une question plus profonde : <strong>la problématique</strong>.
              </p>
            </div>
          </PRCard>

          <PRCard number="02" title="Les étapes pour dégager le paradoxe">
            <div className="space-y-5 text-sm md:text-base">
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1.5">a) Définir les termes</h3>
                <p>Travailler définitions, synonymes, antonymes, connotations et polysémie. On repère ainsi des <strong>sens opposés</strong>.</p>
                <p className="mt-1 text-pr-gray-mid italic">Exemple (humanité) : l&apos;humanité désigne à la fois l&apos;espèce biologique et une qualité morale. Or l&apos;histoire montre que l&apos;humain biologique peut être radicalement inhumain. Tension initiale.</p>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1.5">b) Exploiter la forme du sujet</h3>
                <ul className="space-y-1.5">
                  <li><span className="text-pr-orange mr-2">→</span>« Qu&apos;est-ce que… ? » : essence supposée stable face à une réalité plurielle ou historique.</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Peut-on… ? » : capacité matérielle face à légitimité morale.</li>
                  <li><span className="text-pr-orange mr-2">→</span>« Faut-il… ? » : nécessité face à danger.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Sujet avec « et » : opposition ou fusion (humanité <em>et</em> animalité, humanité <em>et</em> technique).</li>
                  <li><span className="text-pr-orange mr-2">→</span>Article défini (« l&apos;humanité ») : essence présupposée face à pluralité réelle.</li>
                </ul>
                <p className="mt-2 text-pr-gray-mid italic">Exemple : <em>L&apos;humanité existe-t-elle ?</em> Oui biologiquement (espèce), mais non politiquement (jamais unifiée). Donc tension.</p>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1.5">c) Croiser les filtres classiques</h3>
                <p className="mb-2">Analyser par grandes dimensions, chacune ouvrant une tension potentielle :</p>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>Métaphysique (essence ou existence)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Anthropologique (nature ou culture)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Politique (universel ou pluriel)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Morale (dignité ou cruauté)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Technique (augmentation ou perte)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Écologique (humain ou vivant)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Historique (progrès ou barbarie)</li>
                  <li><span className="text-pr-orange mr-2">→</span>Frontières (humain ou animal, humain ou machine)</li>
                </ul>
              </div>
            </div>
          </PRCard>

          <PRCard number="03" title="Les couples paradoxaux">
            <div className="space-y-5 text-sm md:text-base">
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Couples généraux</h3>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>Nature / Culture</li>
                  <li><span className="text-pr-orange mr-2">→</span>Inné / Acquis</li>
                  <li><span className="text-pr-orange mr-2">→</span>Universel / Particulier</li>
                  <li><span className="text-pr-orange mr-2">→</span>Essence / Existence</li>
                  <li><span className="text-pr-orange mr-2">→</span>Individuel / Collectif</li>
                  <li><span className="text-pr-orange mr-2">→</span>En droit / En fait</li>
                  <li><span className="text-pr-orange mr-2">→</span>Idéal / Réel</li>
                  <li><span className="text-pr-orange mr-2">→</span>Possible / Impossible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Couples propres au thème « L&apos;humanité »</h3>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1">
                  <li><span className="text-pr-orange mr-2">→</span>Humanité / Inhumanité</li>
                  <li><span className="text-pr-orange mr-2">→</span>Humain / Animal</li>
                  <li><span className="text-pr-orange mr-2">→</span>Humain / Machine</li>
                  <li><span className="text-pr-orange mr-2">→</span>Dignité / Déshumanisation</li>
                  <li><span className="text-pr-orange mr-2">→</span>Civilisation / Barbarie</li>
                  <li><span className="text-pr-orange mr-2">→</span>Universel / Pluriel</li>
                  <li><span className="text-pr-orange mr-2">→</span>Perfectibilité / Corruption</li>
                  <li><span className="text-pr-orange mr-2">→</span>Promesse / Menace (technique)</li>
                </ul>
              </div>
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-2">Formule type</h3>
                <p>« L&apos;humanité apparaît comme [terme positif], mais force est de constater qu&apos;elle est en même temps [terme contradictoire]. »</p>
                <p className="italic mt-2 text-pr-gray-dark">Ex. « L&apos;humanité se présente comme une communauté universelle de dignité, mais les génocides du XX<sup>e</sup> siècle révèlent qu&apos;elle peut produire la pire barbarie. »</p>
              </div>
            </div>
          </PRCard>

          <PRCard number="04" title="De la contradiction à la problématique">
            <div className="space-y-3 text-sm md:text-base">
              <p>Le paradoxe ouvre sur une question plus profonde, la <strong>problématique</strong>. Formule type :</p>
              <p className="bg-pr-gray-bg rounded-lg p-3 italic">« Comment comprendre alors que…, tandis que… ? »</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>« Comment comprendre alors que l&apos;humanité se proclame fondée sur la dignité, tandis qu&apos;elle a produit Auschwitz, Hiroshima et le Rwanda ? »</li>
                <li><span className="text-pr-orange mr-2">→</span>« Comment comprendre que l&apos;humanité se définisse par sa différence avec l&apos;animal, tandis que l&apos;éthologie révèle que les frontières sont poreuses ? »</li>
                <li><span className="text-pr-orange mr-2">→</span>« Comment comprendre que la technique soit célébrée comme accomplissement de l&apos;humain, tandis qu&apos;elle menace de le rendre obsolète ? »</li>
              </ul>
              <p className="mt-2">On peut rehausser le style par une image :</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>« L&apos;humanité ne serait-elle pas ce roseau pensant que décrit Pascal : à la fois la plus fragile et la plus haute des créations ? »</li>
                <li><span className="text-pr-orange mr-2">→</span>« L&apos;humanité ressemble peut-être à Janus : un visage tourné vers la dignité, l&apos;autre vers la barbarie. »</li>
              </ul>
            </div>
          </PRCard>

          <PRCard number="05" title="Résumé pratique de la méthode">
            <ol className="space-y-1.5 text-sm md:text-base list-decimal list-inside marker:text-pr-orange marker:font-dm-serif">
              <li>Définir les termes de l&apos;humanité (espèce, communauté, qualité morale).</li>
              <li>Exploiter la forme du sujet (qu&apos;est-ce que / peut-on / faut-il / et).</li>
              <li>Passer le sujet au filtre : nature, culture, technique, animal, machine, barbarie, dignité.</li>
              <li>Tester les couples paradoxaux (humain / inhumain, dignité / déshumanisation, etc.).</li>
              <li>Formuler le paradoxe en une phrase.</li>
              <li>Transformer ce paradoxe en problématique claire.</li>
              <li>Si possible, ajouter une image (roseau pensant, Janus, Prométhée, Frankenstein).</li>
            </ol>
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

export default ParadoxeProblematiquePage;
