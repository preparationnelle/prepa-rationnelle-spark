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
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-black" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black flex items-baseline gap-3">
        <span className="font-dm-serif text-pr-black text-3xl leading-none">{number}</span>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

const TransitionsJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Les transitions en dissertation
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Méthode pour articuler logiquement les parties et exemples appliqués au thème <em>l&apos;humanité</em>.
            </p>
          </div>

          <PRCard number="01" title="Pourquoi les transitions sont essentielles">
            <div className="space-y-2 text-sm md:text-base">
              <p>Une copie solide ne juxtapose pas trois blocs : chaque étape <strong>appelle la suivante</strong>. La transition :</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>résume ce qui a été établi ;</li>
                <li><span className="text-pr-black mr-2">→</span>met en évidence une <strong>limite</strong> ou une impasse ;</li>
                <li><span className="text-pr-black mr-2">→</span>ouvre logiquement sur la partie suivante en introduisant l&apos;autre face du paradoxe.</li>
              </ul>
            </div>
          </PRCard>

          <PRCard number="02" title="Structure d'une transition">
            <ol className="space-y-3 text-sm md:text-base list-decimal list-inside marker:text-pr-black marker:font-dm-serif">
              <li><strong>Rappel</strong> : « Puisque l&apos;on a établi que l&apos;humanité repose sur une dignité universelle inscrite dans la nature de l&apos;espèce… »</li>
              <li><strong>Limite</strong> : « … force est de constater que cette dignité est constamment trahie par l&apos;histoire, depuis l&apos;esclavage jusqu&apos;aux génocides du XXe siècle. »</li>
              <li><strong>Ouverture</strong> : « Il convient donc de comprendre que l&apos;humanité n&apos;est jamais acquise, mais sans cesse construite et menacée. »</li>
            </ol>
          </PRCard>

          <PRCard number="03" title="Schémas types">
            <div className="space-y-3 text-sm md:text-base">
              <p>Formule générale :</p>
              <p className="bg-pr-gray-bg rounded-lg p-3 italic text-pr-black">« Puisque nous avons montré [A], mais que cette analyse rencontre la limite de [B], il faut désormais examiner [C]. »</p>
              <p>Connecteurs utiles :</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>« Dès lors… »</li>
                <li><span className="text-pr-black mr-2">→</span>« Toutefois… »</li>
                <li><span className="text-pr-black mr-2">→</span>« Il convient alors de comprendre… »</li>
                <li><span className="text-pr-black mr-2">→</span>« En effet… »</li>
              </ul>
            </div>
          </PRCard>

          <PRCard number="04" title="Exemples appliqués au thème « L'humanité »">
            <div className="space-y-5 text-sm md:text-base">
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Transition I → II (de la nature à la construction fragile)</h3>
                <p className="bg-pr-gray-bg rounded-lg p-4">« Puisque nous avons établi que l&apos;humanité se présente comme une donnée naturelle, fondée sur l&apos;espèce, la raison et la dignité kantienne, force est de constater que cette unité supposée se révèle fragile dès qu&apos;on la confronte à l&apos;histoire. Les génocides du XXe siècle, la zone grise décrite par Primo Levi dans <em>Si c&apos;est un homme</em>, mais aussi l&apos;indétermination radicale pensée par Pic de la Mirandole, montrent que l&apos;humanité ne se reçoit pas, elle se construit. Il convient donc d&apos;examiner sous quel angle l&apos;humanité doit être pensée comme une élaboration historique toujours menacée. »</p>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Transition II → III (de la construction fragile à la tâche éthique)</h3>
                <p className="bg-pr-gray-bg rounded-lg p-4">« Si l&apos;humanité est une construction fragile, exposée à l&apos;inhumain et à l&apos;arraisonnement technique, on ne saurait pour autant renoncer à la penser. Au contraire, c&apos;est précisément cette fragilité qui en fait une responsabilité. Il s&apos;agit alors de comprendre sous quelles conditions éthiques et politiques l&apos;humanité peut devenir une tâche partagée, dans la reconnaissance d&apos;autrui, la vigilance face à la technique et l&apos;élargissement du cercle moral. »</p>
              </div>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/methodes">
              <Button className="bg-pr-black hover:bg-pr-black-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des méthodes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransitionsJugerPage;
