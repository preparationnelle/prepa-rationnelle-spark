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

const IntroductionJugerPage: React.FC = () => {
  const steps = [
    {
      title: 'Accroche',
      body: 'Dans son Discours de la dignité de l\'homme, publié en 1486, Pic de la Mirandole imagine Dieu s\'adressant à Adam : ne lui ayant assigné ni nature ni place dans la création, il lui offre la liberté de se modeler lui-même. L\'humain serait donc le seul être sans essence donnée, capable de se faire bête ou ange. Cette intuition renaissante éclaire le paradoxe de notre sujet : si l\'humanité ne nous est pas donnée d\'avance, comment savoir ce qui la fait ?',
    },
    {
      title: 'Analyse des termes',
      body: 'L\'humanité désigne trois choses qu\'il faut soigneusement distinguer. Au sens biologique, elle nomme l\'espèce Homo sapiens. Au sens collectif, elle désigne la communauté de tous les humains. Au sens moral enfin, elle qualifie ce qui rend l\'humain digne de ce nom : la fraternité, la dignité, le respect du semblable. Or l\'expérience montre que ces trois sens ne coïncident jamais parfaitement. Un être appartenant biologiquement à l\'espèce humaine peut être traité, ou se conduire, de manière radicalement inhumaine. La question « qu\'est-ce qui fait l\'humanité ? » revient donc à demander : ce qui définit l\'humain est-il un fait de nature, ou une construction toujours fragile, à conquérir et à préserver ?',
    },
    {
      title: 'Annonce du paradoxe',
      body: 'Ainsi l\'humanité semble une donnée évidente, partagée par tous les membres de l\'espèce. Force est pourtant de constater qu\'elle est constamment trahie, perdue ou déniée : les génocides du XXe siècle, l\'esclavage, la déshumanisation des étrangers en témoignent. L\'humanité serait donc à la fois un fait de nature et une promesse jamais tenue.',
    },
    {
      title: 'Problématique',
      body: 'Comment comprendre alors que l\'humanité se présente comme une essence universelle, tandis qu\'elle se révèle indéterminée, construite et fragile, exposée à sa propre négation ? Sous quelles conditions peut-on dire qu\'un être, ou qu\'une société, fait véritablement humanité ?',
      highlight: true,
    },
    {
      title: 'Annonce du plan',
      body: 'Nous montrerons d\'abord que l\'humanité se présente comme une donnée naturelle, fondée sur l\'espèce, la raison et la dignité (I). Nous verrons ensuite qu\'elle est en réalité une construction fragile, traversée par l\'indétermination, l\'hominisation et la possibilité de l\'inhumain (II). Nous examinerons enfin sous quelles conditions éthiques et politiques l\'humanité peut être pensée comme une tâche partagée, à honorer dans la reconnaissance d\'autrui, la vigilance face à la technique et l\'élargissement aux autres vivants (III).',
    },
  ];

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Rédiger l&apos;introduction : méthode &amp; exemple
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Architecture en 5 temps et modèle appliqué au sujet « <em>Qu&apos;est-ce qui fait l&apos;humanité ?</em> »
            </p>
          </div>

          <PRCard number="01" title="La structure formelle de l'introduction">
            <ul className="space-y-2 text-sm md:text-base">
              <li><span className="text-pr-orange mr-2">→</span><strong>Accroche</strong> : citation, fait historique, référence culturelle qui donne de la profondeur au sujet.</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Analyse des termes</strong> : définir thème et mots clés (synonymes, antonymes, polysémie, connotations).</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Annonce du paradoxe</strong> : mettre au jour la tension qui rend la réflexion nécessaire.</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Problématique</strong> : transformer le paradoxe en question directrice.</li>
              <li><span className="text-pr-orange mr-2">→</span><strong>Annonce du plan</strong> : présenter en une phrase la structure en trois parties.</li>
            </ul>
          </PRCard>

          <PRCard number="02" title="Application : « Qu'est-ce qui fait l'humanité ? »">
            <div className="space-y-4 text-sm md:text-base">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className={`rounded-lg p-4 ${s.highlight ? 'bg-pr-orange-pale' : 'bg-pr-gray-bg'}`}
                >
                  <h3 className={`font-dm-serif text-lg mb-2 ${s.highlight ? 'text-pr-orange-dark' : 'text-pr-black'}`}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
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

export default IntroductionJugerPage;
