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

const HumaniteFaceTechniquePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humanité face à la technique
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Heidegger, Anders, transhumanisme. La technique tient-elle sa promesse
              d&apos;augmentation de l&apos;humain&nbsp;? Ou nous fait-elle perdre ce qui constitue
              notre humanité&nbsp;?
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                La technique a longtemps été pensée comme un simple outil. Un moyen
                neutre, à la disposition de l&apos;humain, qui en use selon ses fins. Bonne
                ou mauvaise selon l&apos;usage&nbsp;: ce serait à nous de choisir.
              </p>
              <p>
                Le XX<sup>e</sup> siècle a fait voler cette tranquillité en éclats. Avec
                la bombe atomique, l&apos;extermination industrielle, le réchauffement
                climatique, le numérique généralisé, la technique apparaît moins comme
                un outil que comme un <strong>milieu</strong>, une <strong>logique</strong>, parfois un
                <strong> destin</strong>. Elle ne se contente pas de nous servir. Elle nous transforme.
              </p>
              <p>
                Trois positions structurent le débat contemporain.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Heidegger</strong>&nbsp;: la technique moderne est une manière de regarder le monde qui réduit tout à du disponible, et nous compris.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Anders</strong>&nbsp;: nous avons fabriqué des machines qui nous dépassent, et nous en éprouvons une honte. Nous ne sommes plus à la hauteur de nos propres œuvres.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Transhumanisme</strong>&nbsp;: au lieu de craindre la technique, embrassons-la. Augmentons l&apos;humain, repoussons la mort, fusionnons avec la machine.</li>
              </ul>
              <div className="bg-pr-gray-bg rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">Tension à retenir</h3>
                <p>
                  Promesse d&apos;émancipation ou perte de soi&nbsp;? La technique ne pose pas
                  seulement la question de ce que nous pouvons faire. Elle pose la
                  question de ce que nous restons quand nous l&apos;utilisons.
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Heidegger — l'arraisonnement du monde">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>La Question de la technique</em>, 1953, Martin Heidegger refuse
                la définition courante. La technique moderne, dit-il, n&apos;est pas un
                ensemble d&apos;outils. C&apos;est une <strong>manière de dévoiler</strong> le
                monde, c&apos;est-à-dire une façon de le rendre présent, accessible,
                manipulable.
              </p>
              <p>
                Cette manière, il la nomme l&apos;<strong>arraisonnement</strong>&nbsp;: la mise à
                disposition généralisée du réel. Le fleuve n&apos;est plus un fleuve, il est
                «&nbsp;potentiel hydroélectrique&nbsp;». La forêt n&apos;est plus une forêt, elle est
                «&nbsp;ressource bois&nbsp;». La terre n&apos;est plus la terre, elle est «&nbsp;réserve&nbsp;».
                Tout devient stock, tout devient calculable, tout devient utilisable.
              </p>
              <p>
                <strong>Le danger profond.</strong> L&apos;humain lui-même finit par être pris
                dans ce regard. Il devient «&nbsp;ressource humaine&nbsp;», capital à optimiser,
                temps à rentabiliser. La technique moderne ne menace pas seulement la
                nature. Elle menace la possibilité même que l&apos;humain rencontre quelque
                chose qui ne soit pas réductible à un usage.
              </p>
              <p>
                Heidegger ne propose pas de rejeter la technique. Il y voit un destin
                historique de notre civilisation. Mais il invite à <em>une autre relation</em>
                à elle. Reconnaître que des choses peuvent exister sans être à notre
                disposition. Garder ouvert un espace pour ce qui se donne, plutôt que ce
                qui se prend.
              </p>
              <p>
                <strong>Comment l&apos;utiliser.</strong> Heidegger sert pour tout sujet sur la
                technique comme cadre mental. Il permet de sortir de la question
                «&nbsp;bonne ou mauvaise utilisation&nbsp;?&nbsp;» pour poser la vraie question&nbsp;: que
                fait la technique au regard que nous portons sur le monde et sur nous-mêmes&nbsp;?
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Günther Anders — la honte prométhéenne">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Élève de Heidegger, témoin de Hiroshima, Günther Anders publie en 1956
                <em> L&apos;Obsolescence de l&apos;homme</em>. Le diagnostic est plus glaçant
                encore que celui du maître.
              </p>
              <p>
                Anders forge un concept clé&nbsp;: la <strong>«&nbsp;honte prométhéenne&nbsp;»</strong>.
                Le mythe grec racontait Prométhée volant le feu pour élever l&apos;humanité
                au-dessus de sa misère. Anders renverse l&apos;image. Aujourd&apos;hui, l&apos;humain
                a honte non pas de sa pauvreté technique, mais de son infériorité face à
                ses propres machines.
              </p>
              <p>
                Pourquoi&nbsp;? Parce que nous avons construit des dispositifs (centrales,
                ordinateurs, réseaux, armes nucléaires) dont les effets dépassent
                radicalement ce que nous pouvons imaginer, sentir, ressentir. Nous
                pouvons fabriquer Hiroshima. Mais nous ne pouvons pas <em>imaginer</em>
                Hiroshima au sens fort, à la mesure de ce que cela représente. Notre
                puissance d&apos;agir a explosé. Notre puissance de représenter ce que nous
                faisons, non.
              </p>
              <p>
                Anders parle d&apos;un <strong>décalage prométhéen</strong>. Trois capacités
                humaines se sont désynchronisées&nbsp;:
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>Ce que nous pouvons <strong>fabriquer</strong>&nbsp;: tout, ou presque.</li>
                <li><span className="text-pr-black mr-2">→</span>Ce que nous pouvons <strong>sentir</strong>&nbsp;: bien moins que ce que nous fabriquons.</li>
                <li><span className="text-pr-black mr-2">→</span>Ce que nous pouvons <strong>responsabiliser</strong>&nbsp;: presque rien à l&apos;échelle des effets engendrés.</li>
              </ul>
              <p>
                <strong>Conséquence.</strong> L&apos;humain devient <em>obsolète</em> face à
                ses propres outils. La machine ne nous augmente pas, elle nous éclipse.
                Et nous finissons par préférer ce qu&apos;elle produit à ce que nous sommes.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Le transhumanisme — l'inversion du problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Là où Heidegger et Anders voient une menace, le transhumanisme voit une
                opportunité. Né dans la Silicon Valley à la fin du XX<sup>e</sup> siècle,
                porté par des figures comme Nick Bostrom (Université d&apos;Oxford) ou Ray
                Kurzweil (Google), ce courant inverse la question.
              </p>
              <p>
                <strong>Thèse centrale.</strong> L&apos;humain biologique est imparfait,
                fragile, mortel. Pourquoi accepter ces limites comme un destin&nbsp;? La
                technique nous donne pour la première fois les moyens de
                <em> reconfigurer</em> notre espèce&nbsp;: prothèses cognitives, édition
                génétique, augmentation cérébrale, prolongation indéfinie de la vie,
                fusion possible avec l&apos;intelligence artificielle.
              </p>
              <p>
                Le projet transhumaniste est explicitement un projet d&apos;<strong>auto-dépassement
                de l&apos;humain</strong>. L&apos;humanité, telle que nous la connaissons, ne serait
                qu&apos;une étape. Le posthumain serait une étape supérieure, plus longue,
                plus puissante, plus libre.
              </p>
              <p>
                <strong>Trois critiques majeures.</strong>
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Critique anthropologique</strong>&nbsp;: la finitude (la vulnérabilité, la mort) n&apos;est pas un défaut à corriger. Elle est ce qui donne sens à l&apos;existence humaine. Supprimer la mort, c&apos;est supprimer l&apos;humain qui la pense.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Critique politique</strong>&nbsp;: l&apos;augmentation coûte cher. Elle ne profitera qu&apos;à une élite, fabriquant une humanité à deux vitesses. Le transhumanisme menace l&apos;égalité fondamentale entre humains.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Critique philosophique</strong>&nbsp;: ce projet rejoint exactement ce qu&apos;Anders décrivait. Avoir honte de l&apos;humain ordinaire au point de vouloir le remplacer. Une humanité qui ne se supporte plus elle-même.</li>
              </ul>
              <p>
                <strong>À retenir.</strong> Le transhumanisme n&apos;est pas seulement une
                utopie technologique. C&apos;est une <em>philosophie</em> qui prend position
                sur ce que vaut l&apos;humain actuel. Et qui pour l&apos;essentiel répond&nbsp;:
                pas grand-chose. À comparer à la dignité indéterminée de Pic de la
                Mirandole, qui voyait dans la finitude humaine la condition même de la
                liberté.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">
                  La technique comme honte de l&apos;humain
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;humanité finit par avoir honte d&apos;elle-même devant ses propres machines)
                </p>
                <div className="space-y-3">
                  <p>
                    La technique ne se contente pas de nous augmenter. Elle nous
                    confronte à notre propre infériorité. Plus nos machines deviennent
                    puissantes, plus l&apos;humain ordinaire paraît modeste, lent,
                    périssable, inefficace. Nous finissons par éprouver une honte
                    devant ce que nous avons fabriqué. Cette intuition étrange, un
                    philosophe l&apos;a saisie avant tous les autres.
                  </p>
                  <p>
                    Günther Anders, dans <em>L&apos;Obsolescence de l&apos;homme</em>, 1956, forge
                    le concept de honte prométhéenne. Prométhée, dans le mythe grec,
                    vole le feu pour élever l&apos;humanité. Anders renverse l&apos;image.
                    L&apos;humain contemporain n&apos;a pas honte de sa misère technique. Il a
                    honte d&apos;être inférieur à ses propres outils, eux qui calculent
                    sans se fatiguer, durent sans vieillir, fonctionnent à la vitesse
                    de la lumière. Anders observe ce phénomène dès l&apos;après-guerre, mais
                    il prend tout son sens aujourd&apos;hui.
                  </p>
                  <p>
                    Cette honte explique en grande partie la fascination contemporaine
                    pour le projet transhumaniste. Augmenter le corps, prolonger la
                    vie, fusionner avec l&apos;intelligence artificielle&nbsp;: ce n&apos;est plus
                    refuser la machine, c&apos;est tenter de devenir machine pour cesser
                    d&apos;avoir honte. Le transhumanisme n&apos;est pas l&apos;adversaire de
                    l&apos;humanisme. Il en est la version désespérée.
                  </p>
                  <p>
                    Ainsi la question de la technique cesse d&apos;être une question
                    d&apos;outils. Elle devient une question d&apos;estime de soi de l&apos;espèce.
                    Saurons-nous encore aimer l&apos;humain tel qu&apos;il est&nbsp;? Ou avons-nous
                    déjà commencé, sans le dire, à le congédier&nbsp;?
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La technique nous augmente-t-elle&nbsp;?</strong>&nbsp;» — opposition Heidegger/Anders vs transhumanisme.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Faut-il vouloir dépasser l&apos;humain&nbsp;?</strong>&nbsp;» — sujet typiquement transhumaniste.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humanité est-elle menacée par ses propres œuvres&nbsp;?</strong>&nbsp;» — Anders central.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Sommes-nous encore maîtres de la technique&nbsp;?</strong>&nbsp;» — Heidegger sur l&apos;arraisonnement.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Une humanité augmentée serait-elle encore humaine&nbsp;?</strong>&nbsp;» — convoquer la finitude.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humanité a-t-elle un avenir&nbsp;?</strong>&nbsp;» — articuler anthropocène, IA, posthumain.</li>
              </ul>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/articles">
              <Button className="bg-pr-black hover:bg-pr-black-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumaniteFaceTechniquePage;
