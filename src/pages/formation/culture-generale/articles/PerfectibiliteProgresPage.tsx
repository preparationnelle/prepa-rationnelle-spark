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

const PerfectibiliteProgresPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              La perfectibilité et l&apos;idée de progrès&nbsp;: l&apos;humain, un être en devenir
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Rousseau, Kant, Condorcet. Trois manières de penser que l&apos;humain n&apos;est pas
              ce qu&apos;il est, mais ce qu&apos;il peut devenir.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Penser l&apos;humain comme un <em>être de progrès</em> est une nouveauté
                relative. Avant les Lumières, les sociétés se pensaient cycliques, ou en
                déclin depuis un âge d&apos;or perdu. C&apos;est au XVIII<sup>e</sup> siècle que
                s&apos;invente l&apos;idée moderne&nbsp;: l&apos;humanité progresse, et son progrès est
                inscrit dans sa nature.
              </p>
              <p>
                Cette idée a fait la grandeur du projet moderne&nbsp;: éducation universelle,
                droits de l&apos;homme, sciences. Mais le XX<sup>e</sup> siècle l&apos;a brisée.
                Auschwitz, Hiroshima, l&apos;effondrement écologique ont rendu suspecte
                l&apos;idée même que l&apos;humanité va «&nbsp;mieux&nbsp;» en avançant.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  La perfectibilité humaine est-elle une <em>promesse</em> qui définit
                  notre dignité (Kant, Condorcet) ou une <em>malédiction</em> qui nous a
                  arrachés à notre nature (Rousseau)&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Rousseau — la perfectibilité, don ambigu">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans le <em>Discours sur l&apos;origine et les fondements de l&apos;inégalité
                parmi les hommes</em> (1755), Rousseau forge le mot
                <strong> «&nbsp;perfectibilité&nbsp;»</strong>. Pour lui, c&apos;est ce qui
                distingue véritablement l&apos;humain de l&apos;animal — bien plus que la
                raison ou le langage.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Faculté qui, à l&apos;aide des circonstances, développe successivement
                toutes les autres, et réside parmi nous tant dans l&apos;espèce que dans
                l&apos;individu.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Définition</strong>. La perfectibilité est la capacité à se transformer indéfiniment, à apprendre, à se modifier en fonction du milieu. L&apos;animal, lui, reste ce qu&apos;il est&nbsp;: au bout de quelques mois, il a atteint sa nature.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Une faculté de toutes les facultés</strong>. C&apos;est la perfectibilité qui produit la raison, le langage, la technique, la société. Elle est leur condition, non leur conséquence.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Ambivalence radicale</strong>. Cette faculté qui élève est aussi celle qui dégrade. C&apos;est elle qui a fait sortir l&apos;humain de l&apos;état de nature, inventé la propriété, créé l&apos;inégalité, multiplié les besoins artificiels.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Rousseau invente le concept
                moderne de <em>plasticité</em> humaine. Mais il refuse l&apos;optimisme&nbsp;:
                pour un être perfectible, le progrès est aussi un risque permanent. Le
                progrès n&apos;est pas inscrit dans la nature comme une orientation positive.
              </p>
              <p>
                <strong>Limite.</strong> Rousseau ne propose pas un retour à la nature,
                qu&apos;il sait impossible. Il appelle à <em>civiliser la civilisation</em>,
                via le contrat social et l&apos;éducation négative.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Kant — l'insociable sociabilité">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans l&apos;<em>Idée d&apos;une histoire universelle au point de vue
                cosmopolitique</em> (1784), Kant donne au progrès humain un fondement
                anthropologique inattendu. Le moteur de l&apos;histoire n&apos;est pas la
                bienveillance&nbsp;: c&apos;est l&apos;<strong>insociable sociabilité</strong>.
              </p>
              <p>
                L&apos;humain a besoin de la société, mais il y résiste. C&apos;est cette
                tension — vouloir vivre avec les autres tout en cherchant à les dominer —
                qui pousse à développer ses talents, à inventer des institutions, à
                penser la justice.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>La nature est rusée</strong>. Elle utilise la discorde des humains pour faire émerger l&apos;ordre. Le mal lui-même travaille au progrès.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;humanité progresse, pas l&apos;individu</strong>. La 8<sup>e</sup> proposition est claire&nbsp;: c&apos;est dans l&apos;espèce que les dispositions naturelles se développent pleinement, sur des générations.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Horizon cosmopolitique</strong>. La 9<sup>e</sup> proposition annonce une «&nbsp;société des nations&nbsp;» (préfiguration de la SDN, puis de l&apos;ONU). Le progrès achevé serait une humanité juridiquement unifiée, en paix.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Kant articule progrès moral et
                progrès politique. Il ne dit pas que les humains deviennent meilleurs&nbsp;:
                il dit que les institutions, en canalisant leur insociabilité, peuvent
                rendre la guerre moins probable et la liberté plus réelle.
              </p>
              <p>
                <strong>Limite.</strong> Cet optimisme téléologique a été ébranlé par
                l&apos;histoire. Adorno et Horkheimer, dans <em>Dialectique de la raison</em>
                (1944), montreront que la raison-même peut produire la barbarie.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Condorcet — la foi républicaine dans le progrès">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                L&apos;<em>Esquisse d&apos;un tableau historique des progrès de l&apos;esprit
                humain</em> (1795) est l&apos;un des testaments philosophiques les plus
                bouleversants de la modernité. Condorcet l&apos;écrit en se cachant sous la
                Terreur, dans les derniers mois avant sa mort. Son thème&nbsp;: la foi
                inébranlable dans le progrès humain.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Dix époques</strong>. Condorcet découpe l&apos;histoire en dix âges, du clan tribal à l&apos;avenir où l&apos;humanité saura enfin gouverner par la raison.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Trois inégalités à abolir</strong>&nbsp;: entre les nations, entre les classes, entre les sexes. Condorcet plaide explicitement pour l&apos;égalité politique des femmes — geste rare et décisif au XVIII<sup>e</sup>.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;instruction publique</strong>. Le moteur du progrès est l&apos;éducation universelle. Tant que les humains ignorent, ils sont manipulables. Tant qu&apos;ils savent, ils sont libres.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Condorcet incarne la version la
                plus pure de l&apos;optimisme des Lumières. Le progrès n&apos;est pas seulement
                possible, il est <em>indéfini</em>&nbsp;: il n&apos;a pas de point final
                assignable.
              </p>
              <p>
                <strong>Mise en perspective.</strong> Au XX<sup>e</sup> siècle, les
                catastrophes industrielles, totalitaires et écologiques ont brisé cet
                optimisme linéaire. <em>Dialectique de la raison</em> (Adorno-Horkheimer,
                1944) interroge la rationalité même comme productrice de domination. Il
                reste à savoir si l&apos;on peut sauver l&apos;idée de progrès en la rendant
                plus modeste — ou s&apos;il faut renoncer à elle.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  L&apos;humain comme être en devenir
                </h3>
                <p className="text-xs italic mb-3">
                  (la perfectibilité comme essence paradoxale de l&apos;humanité)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité ne se définit pas par ce qu&apos;elle est, mais par sa
                    capacité à devenir autre. Cette intuition, Rousseau l&apos;a formulée
                    dans le <em>Discours sur l&apos;origine de l&apos;inégalité</em>, 1755, en
                    forgeant le concept de <em>perfectibilité</em>. L&apos;humain est cette
                    «&nbsp;faculté qui, à l&apos;aide des circonstances, développe
                    successivement toutes les autres&nbsp;». Là où l&apos;animal est ce
                    qu&apos;il est, l&apos;humain est ce qu&apos;il peut devenir.
                  </p>
                  <p>
                    Pour Rousseau, ce don est ambivalent. La perfectibilité produit la
                    raison et la justice, mais aussi l&apos;inégalité et la guerre. Le
                    progrès n&apos;est pas une orientation naturelle&nbsp;: il est un risque.
                    Kant, dans l&apos;<em>Idée d&apos;une histoire universelle au point de vue
                    cosmopolitique</em>, 1784, transforme ce risque en moteur. C&apos;est
                    l&apos;«&nbsp;insociable sociabilité&nbsp;» qui pousse les humains à
                    inventer des institutions. La nature se sert même de leurs vices
                    pour faire avancer l&apos;humanité vers la paix cosmopolitique.
                  </p>
                  <p>
                    Cette foi atteint son sommet chez Condorcet. Dans
                    l&apos;<em>Esquisse d&apos;un tableau historique des progrès de l&apos;esprit
                    humain</em>, 1795, écrite alors qu&apos;il se cache sous la Terreur, il
                    annonce un progrès <em>indéfini</em>, fondé sur l&apos;instruction
                    publique et l&apos;abolition des inégalités, y compris entre les sexes.
                    L&apos;humanité serait moins une condition figée qu&apos;un programme
                    inachevé.
                  </p>
                  <p>
                    Le XX<sup>e</sup> siècle a brisé cette téléologie. Adorno et
                    Horkheimer, dans <em>Dialectique de la raison</em>, 1944, ont montré
                    que la raison elle-même produit la barbarie. Reste alors à imaginer
                    un progrès plus modeste, conscient de ses risques, mais sans lequel
                    l&apos;humanité renonce à sa spécificité&nbsp;: être l&apos;animal qui peut
                    encore se transformer.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité progresse-t-elle&nbsp;?</strong>&nbsp;» — sujet frontal.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le progrès est-il une illusion&nbsp;?</strong>&nbsp;» — Adorno-Rousseau contre Condorcet.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humain est-il un être de nature ou de culture&nbsp;?</strong>&nbsp;» — perfectibilité comme charnière.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;histoire a-t-elle un sens&nbsp;?</strong>&nbsp;» — Kant central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Faut-il croire au progrès&nbsp;?</strong>&nbsp;» — articulation Lumières / XX<sup>e</sup> siècle.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;éducation</strong>&nbsp;» — Condorcet et l&apos;instruction publique comme moteur.</li>
              </ul>
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

export default PerfectibiliteProgresPage;
