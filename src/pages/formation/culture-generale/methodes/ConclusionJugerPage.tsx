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

const ConclusionJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              La conclusion en dissertation
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Rôle, structure en trois temps et exemple appliqué au sujet «&nbsp;<em>Qu&apos;est-ce qui fait l&apos;humanité&nbsp;?</em>&nbsp;»
            </p>
          </div>

          <PRCard number="01" title="Rôle de la conclusion">
            <div className="space-y-2 text-sm md:text-base">
              <p>La conclusion n&apos;est pas un résumé mécanique. Elle doit :</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>montrer la <strong>cohérence du raisonnement</strong> (enchaînement parties et sous-parties) ;</li>
                <li><span className="text-pr-orange mr-2">→</span>reformuler la <strong>réponse à la problématique</strong> clairement ;</li>
                <li><span className="text-pr-orange mr-2">→</span>réactiver les <strong>concepts clés</strong> (dignité, indétermination, banalité du mal, perfectibilité, hospitalité) ;</li>
                <li><span className="text-pr-orange mr-2">→</span>ouvrir intelligemment (retour à l&apos;accroche ou élargissement contemporain).</li>
              </ul>
            </div>
          </PRCard>

          <PRCard number="02" title="Structure de la conclusion">
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1">Bilan argumentatif</h3>
                <p>Reformuler le cheminement intellectuel sans énumérer les auteurs. Connecteurs : « Ainsi », « Dès lors », « En définitive ».</p>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1">Réponse à la problématique</h3>
                <p>Répondre à la question centrale et montrer la nuance ou la condition dégagée en III.</p>
              </div>
              <div>
                <h3 className="font-dm-serif text-pr-black text-lg mb-1">Ouverture</h3>
                <p>Pas de question artificielle. Revenir à l&apos;accroche ou élargir élégamment vers un enjeu actuel (anthropocène, intelligence artificielle, droits humains).</p>
              </div>
            </div>
          </PRCard>

          <PRCard number="03" title="Exemple : « Qu'est-ce qui fait l'humanité ? »">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-lg p-4">
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Bilan</h3>
                <p>En définitive, nous avons montré que l&apos;humanité ne peut se réduire ni à l&apos;espèce biologique, ni à une essence préfixée. Elle se présente d&apos;abord comme une donnée naturelle (raison, dignité, droits universels), mais cette base se révèle insuffisante : l&apos;humanité est aussi une construction historique, traversée par la possibilité permanente de l&apos;inhumain. La banalité du mal mise en lumière par Hannah Arendt et la zone grise décrite par Primo Levi ont rappelé que l&apos;humain biologique peut, à tout moment, défaillir moralement.</p>
              </div>
              <div className="bg-pr-orange-pale rounded-lg p-4">
                <h3 className="font-dm-serif text-pr-orange-dark text-lg mb-2">Réponse à la problématique</h3>
                <p>Ce qui fait l&apos;humanité n&apos;est donc ni un fait ni un destin, mais une tâche : reconnaître l&apos;autre comme semblable (Levinas), résister à l&apos;arraisonnement technique (Anders), élargir le cercle moral aux vivants et aux générations futures (Jonas). L&apos;humanité ne se constate pas, elle se cultive.</p>
              </div>
              <div className="bg-pr-gray-bg rounded-lg p-4">
                <h3 className="font-dm-serif text-pr-black text-lg mb-2">Ouverture</h3>
                <p>C&apos;est peut-être ce que pressentait Pic de la Mirandole, cité en introduction, lorsqu&apos;il faisait dire à Dieu qu&apos;Adam était libre de se modeler lui-même. À l&apos;heure où l&apos;intelligence artificielle et les biotechnologies redessinent les frontières du vivant, la question redevient brûlante : que voulons-nous faire de l&apos;humanité que nous sommes en train de devenir ?</p>
              </div>
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

export default ConclusionJugerPage;
