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

const PlanJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Construire le plan : thème « L&apos;humanité »
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Modèle de plan détaillé sur « <em>Qu&apos;est-ce qui fait l&apos;humanité ?</em> »
              et outillage lexical pour structurer efficacement vos dissertations.
            </p>
          </div>

          <PRCard number="01" title="Rappel de la logique du plan">
            <ul className="space-y-2 text-sm md:text-base">
              <li><span className="text-pr-orange mr-2">→</span><strong>Partie I</strong> : analyser le sujet sous l&apos;angle du <em>premier membre</em> du paradoxe (la face « positive » ou « évidente »).</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Partie II</strong> : examiner le sujet sous l&apos;angle du <em>second membre</em> (les limites, dangers, contradictions).</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Partie III</strong> : dépasser l&apos;opposition par la question <em>« sous quelles conditions ? »</em> (fondation, légitimité, possibilité d&apos;une humanité véritable).</li>
            </ul>
          </PRCard>

          <PRCard number="02" title="Champ lexical utile pour trouver les titres">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1.5 text-sm">
                <li><span className="text-pr-orange mr-2">→</span>Humain, humanité, humanisme, humanitaire.</li>
                <li><span className="text-pr-orange mr-2">→</span>Nature, essence, propre de l&apos;homme.</li>
                <li><span className="text-pr-orange mr-2">→</span>Animalité, bestialité, sauvagerie.</li>
                <li><span className="text-pr-orange mr-2">→</span>Dignité, fraternité, hospitalité.</li>
                <li><span className="text-pr-orange mr-2">→</span>Barbarie, cruauté, déshumanisation.</li>
              </ul>
              <ul className="space-y-1.5 text-sm">
                <li><span className="text-pr-orange mr-2">→</span>Technique, machine, intelligence artificielle.</li>
                <li><span className="text-pr-orange mr-2">→</span>Transhumanisme, posthumain, augmentation.</li>
                <li><span className="text-pr-orange mr-2">→</span>Anthropocène, vivant, écologie.</li>
                <li><span className="text-pr-orange mr-2">→</span>Universel, pluriel, altérité, étranger.</li>
                <li><span className="text-pr-orange mr-2">→</span>Perfectibilité, progrès, émancipation.</li>
              </ul>
            </div>
          </PRCard>

          <PRCard number="03" title="Exemple de plan détaillé : « Qu'est-ce qui fait l'humanité ? »">
            <div className="space-y-5 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Paradoxe de départ</h3>
                <p>L&apos;humanité semble une donnée évidente, partagée par tous les <em>Homo sapiens</em>. Pourtant, l&apos;histoire montre que des humains ont été privés d&apos;humanité (esclavage, génocides), tandis que d&apos;autres êtres (animaux, peut-être machines) revendiquent une part d&apos;humanité.</p>
                <h3 className="font-dm-serif text-base text-pr-orange-dark mt-4 mb-1">Problématique</h3>
                <p>L&apos;humanité est-elle une donnée naturelle ou une construction toujours fragile ? Sous quelles conditions reconnaît-on, fonde-t-on et préserve-t-on l&apos;humanité de l&apos;humain ?</p>
              </div>

              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Partie I — L&apos;humanité comme donnée naturelle</h3>
                <ul className="space-y-1.5">
                  <li><span className="text-pr-orange mr-2">→</span>Une espèce biologique unifiée : <em>Homo sapiens</em>, génome partagé, propre de l&apos;homme (langage, raison, technique).</li>
                  <li><span className="text-pr-orange mr-2">→</span>Une dignité universelle : Kant, fondement des droits humains, déclaration de 1948.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Une essence reconnue : Aristote, l&apos;humain comme animal politique et rationnel.</li>
                </ul>
                <p className="mt-2 text-pr-gray-mid text-sm italic">Idée centrale : l&apos;humanité serait inscrite dans la nature même de l&apos;espèce, partageable et reconnaissable.</p>
              </div>

              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Partie II — L&apos;humanité comme construction fragile</h3>
                <ul className="space-y-1.5">
                  <li><span className="text-pr-orange mr-2">→</span>Une indétermination radicale : Pic de la Mirandole, Sartre, l&apos;humain n&apos;a pas d&apos;essence donnée.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Une histoire d&apos;hominisation : Leroi-Gourhan, Mauss, l&apos;humanité se fait par la technique, le langage, la culture.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Une humanité menacée par l&apos;inhumain : Arendt et la banalité du mal, Levi et la zone grise, génocides.</li>
                </ul>
                <p className="mt-2 text-pr-gray-mid text-sm italic">Idée centrale : l&apos;humanité n&apos;est jamais acquise. Elle se construit, se trahit, se reperd.</p>
              </div>

              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Partie III — L&apos;humanité comme tâche éthique et politique</h3>
                <ul className="space-y-1.5">
                  <li><span className="text-pr-orange mr-2">→</span>Reconnaître l&apos;humain dans l&apos;autre : Levinas et le visage d&apos;autrui, hospitalité kantienne.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Préserver l&apos;humanité face à la technique : Anders, Heidegger, vigilance contre l&apos;arraisonnement.</li>
                  <li><span className="text-pr-orange mr-2">→</span>Penser une humanité élargie : éthique animale (Singer), responsabilité écologique (Jonas), perfectibilité morale (Condorcet).</li>
                </ul>
                <p className="mt-2 text-pr-gray-mid text-sm italic">Idée centrale : l&apos;humanité n&apos;est ni un fait ni un destin. C&apos;est une promesse à honorer collectivement.</p>
              </div>
            </div>
          </PRCard>

          <PRCard number="04" title="Résumé">
            <ul className="space-y-1.5 text-sm md:text-base">
              <li><span className="text-pr-orange mr-2">→</span>I : L&apos;humanité comme donnée naturelle (espèce, dignité, essence).</li>
              <li><span className="text-pr-orange mr-2">→</span>II : L&apos;humanité comme construction fragile (indétermination, hominisation, inhumain).</li>
              <li><span className="text-pr-orange mr-2">→</span>III : L&apos;humanité comme tâche éthique (reconnaissance, vigilance, élargissement).</li>
            </ul>
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

export default PlanJugerPage;
