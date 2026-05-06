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

const DefinirHumanitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Définir l&apos;humanité : entre essence et indétermination
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Aristote, Pic de la Mirandole, Sartre. Trois réponses au sujet le plus
              vertigineux du programme : <em>qu&apos;est-ce qui fait de nous des humains&nbsp;?</em>
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Définir l&apos;humanité paraît évident. Nous sommes des <em>Homo sapiens</em>,
                membres d&apos;une espèce biologique reconnaissable. Et pourtant, dès qu&apos;on
                cherche un critère, tout vacille. La raison&nbsp;? Des animaux résolvent des
                problèmes. Le langage&nbsp;? D&apos;autres espèces communiquent. La technique&nbsp;? Les
                corbeaux fabriquent des outils. La conscience de la mort, la culture, la
                politique&nbsp;: chaque candidat se voit contesté.
              </p>
              <p>
                Deux grandes voies se sont alors dessinées dans la philosophie occidentale.
                La première, classique, cherche une <strong>essence</strong> de l&apos;humain&nbsp;:
                une nature stable qui le distingue des autres êtres. La seconde, moderne,
                soutient que l&apos;humain n&apos;a précisément <strong>pas d&apos;essence</strong>&nbsp;: il se
                définit par son indétermination, sa liberté, sa capacité à se faire
                lui-même.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  L&apos;humanité est-elle une <em>nature donnée</em> (Aristote) ou un
                  <em> projet à inventer</em> (Pic de la Mirandole, Sartre)&nbsp;? Toute la
                  question est là.
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Aristote — l'animal politique et raisonnable">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Aristote, dans la <em>Politique</em> (IV<sup>e</sup> siècle avant J.-C.),
                propose la première grande définition de l&apos;humain par sa nature. Trois
                marqueurs en font une espèce à part.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Animal raisonnable</strong>&nbsp;: l&apos;humain est doué de <em>logos</em>, qu&apos;Aristote pense comme la parole et la raison à la fois. Il ne crie pas, il argumente. Il ne ressent pas seulement, il distingue le juste de l&apos;injuste.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Animal politique</strong>&nbsp;: l&apos;humain n&apos;atteint sa pleine humanité que dans la cité, c&apos;est-à-dire dans une communauté délibérante. Hors de la cité, dit Aristote, on n&apos;est qu&apos;une bête ou un dieu.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Animal en quête de bonheur</strong>&nbsp;: la nature humaine se réalise par la vertu et l&apos;activité contemplative.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> L&apos;humanité, ici, est une essence.
                Une nature dotée de fins propres. L&apos;humain est humain parce qu&apos;il
                <em> doit</em> devenir ce qu&apos;il est selon sa nature. Cette définition
                fondera deux mille ans de pensée occidentale.
              </p>
              <p>
                <strong>Limite.</strong> Aristote exclut de cette humanité pleine les
                esclaves, les femmes, les barbares. La définition par essence porte donc
                en elle un risque permanent&nbsp;: trier ceux qui «&nbsp;méritent&nbsp;» d&apos;être humains.
                Ce risque resurgira tragiquement dans l&apos;histoire moderne.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Pic de la Mirandole — l'humain comme indétermination">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Au cœur de la Renaissance, en 1486, un jeune philosophe italien renverse
                la définition aristotélicienne. Dans son <em>Discours de la dignité de
                l&apos;homme</em>, Pic de la Mirandole imagine Dieu s&apos;adressant à Adam au
                moment de la création.
              </p>
              <p>
                À tous les autres êtres, Dieu a donné une nature fixe. La pierre est une
                pierre, la plante est une plante, l&apos;animal est régi par son instinct. À
                l&apos;humain seul, il dit en substance&nbsp;: «&nbsp;Je ne t&apos;ai donné ni place
                déterminée, ni visage propre, ni fonction particulière. Tu te modèleras
                toi-même.&nbsp;»
              </p>
              <p>
                <strong>Le retournement est radical.</strong> L&apos;humain n&apos;a pas d&apos;essence
                fixe. Sa nature est précisément de <em>ne pas avoir de nature</em>. Il
                peut se faire bête ou ange, dégrader son humanité ou la sublimer. Cette
                plasticité n&apos;est pas une faiblesse&nbsp;: elle est le fondement de sa dignité.
              </p>
              <p>
                <strong>Conséquence majeure.</strong> Si l&apos;humanité est indétermination,
                alors elle n&apos;est jamais acquise. Elle se gagne ou se perd à chaque acte.
                C&apos;est aussi cela qui la rend universelle&nbsp;: aucun humain n&apos;est exclu
                a priori, puisque aucun n&apos;a une nature qui le définirait avant même qu&apos;il
                ait choisi.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Sartre — l'existence précède l'essence">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Sartre radicalise l&apos;intuition de Pic de la Mirandole. Dans
                <em> L&apos;existentialisme est un humanisme</em>, 1946, il pose une formule
                devenue célèbre&nbsp;: «&nbsp;l&apos;existence précède l&apos;essence&nbsp;».
              </p>
              <p>
                Pour un objet fabriqué, c&apos;est l&apos;inverse&nbsp;: un coupe-papier existe parce
                qu&apos;un artisan a d&apos;abord conçu son essence (à quoi il sert, quelle forme
                lui donner). Pour l&apos;humain, il n&apos;y a pas d&apos;artisan divin qui aurait
                pré-écrit ce qu&apos;il est. L&apos;humain surgit dans le monde, sans définition,
                puis se définit par ses choix.
              </p>
              <p>
                <strong>Trois conséquences.</strong>
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>L&apos;humain est <strong>liberté</strong>. Il est «&nbsp;condamné à être libre&nbsp;», dit Sartre&nbsp;: il ne peut pas ne pas choisir.</li>
                <li><span className="text-pr-orange mr-2">→</span>L&apos;humain est <strong>responsable</strong>. Choisir pour soi, c&apos;est aussi proposer un modèle d&apos;humanité aux autres.</li>
                <li><span className="text-pr-orange mr-2">→</span>L&apos;humain est <strong>angoisse</strong>. Sans essence pour le guider, il porte le poids de ses décisions.</li>
              </ul>
              <p>
                <strong>Continuité avec Pic.</strong> Sartre laïcise la thèse renaissante.
                Pic disait&nbsp;: Dieu t&apos;a fait sans nature pour que tu te modèles. Sartre
                dit&nbsp;: Dieu n&apos;est pas, et c&apos;est précisément pourquoi tu te modèles. Mais
                la conséquence est la même. L&apos;humain est un projet, pas une donnée.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  L&apos;humanité comme indétermination radicale
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;humain défini par l&apos;absence même d&apos;essence fixe)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité ne se définit pas par une essence donnée. Elle se définit
                    par sa capacité indéfinie à se transformer elle-même. Contrairement
                    aux animaux, dont la nature est fixée par l&apos;instinct, l&apos;être humain
                    se caractérise par une plasticité radicale. Il peut se faire bête ou
                    ange, selon les choix qu&apos;il opère. Cette indétermination n&apos;est pas
                    une faiblesse. Elle est le fondement même de sa dignité.
                  </p>
                  <p>
                    À la question&nbsp;: qu&apos;est-ce qui fait de nous des humains, la
                    Renaissance apporte une réponse audacieuse. Dans son
                    <em> Discours de la dignité de l&apos;homme</em>, 1486, Pic de la
                    Mirandole imagine Dieu s&apos;adressant à Adam. Ne lui ayant donné ni
                    forme ni fonction propre, il lui offre la liberté de se modeler
                    lui-même. L&apos;humain est le seul être sans place assignée dans la
                    création. C&apos;est précisément cette absence de nature qui constitue sa
                    nature.
                  </p>
                  <p>
                    Cette thèse trouvera un écho saisissant chez Sartre dans
                    <em> L&apos;existentialisme est un humanisme</em>, 1946.
                    «&nbsp;L&apos;existence précède l&apos;essence&nbsp;», écrit-il&nbsp;: l&apos;homme se définit
                    après avoir existé, et non avant. L&apos;humain est donc condamné à être
                    libre, condamné à se choisir. Cette liberté pose alors une question
                    vertigineuse. Si l&apos;humanité peut tout devenir, comment éviter qu&apos;elle
                    ne devienne inhumaine&nbsp;?
                  </p>
                  <p>
                    Ainsi l&apos;humanité serait moins une donnée qu&apos;un projet. Une promesse
                    que chaque individu et chaque civilisation doivent sans cesse honorer
                    ou trahir.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Qu&apos;est-ce que l&apos;humanité&nbsp;?</strong>&nbsp;» — sujet d&apos;essence par excellence.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Naît-on humain ou le devient-on&nbsp;?</strong>&nbsp;» — l&apos;humanité comme projet.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité est-elle une donnée ou une construction&nbsp;?</strong>&nbsp;» — Aristote vs Pic/Sartre.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Y a-t-il une nature humaine&nbsp;?</strong>&nbsp;» — convoquer la rupture renaissante.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humain peut-il se choisir&nbsp;?</strong>&nbsp;» — Sartre central, Pic en amont.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>La dignité humaine</strong>&nbsp;» — Pic fonde la dignité moderne.</li>
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

export default DefinirHumanitePage;
