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

const HumainAnimalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humain et l&apos;animal&nbsp;: où passe la frontière&nbsp;?
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Descartes, Montaigne, Derrida. Trois manières de tracer (ou d&apos;effacer) la
              ligne qui sépare l&apos;humain de la bête.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Définir l&apos;humain par opposition à l&apos;animal est le geste le plus ancien
                de la philosophie occidentale. Aristote en parle déjà comme d&apos;un
                «&nbsp;animal raisonnable&nbsp;», c&apos;est-à-dire d&apos;un animal pas comme les
                autres. Tout le problème est dans cette nuance&nbsp;: l&apos;humain reste un
                animal, mais on le distingue par un trait censé creuser un abîme.
              </p>
              <p>
                Or chaque trait avancé pour fonder cette frontière s&apos;est trouvé contesté.
                La raison&nbsp;? Les corbeaux résolvent des problèmes, les pieuvres planifient.
                Le langage&nbsp;? Les bonobos manient des signes. La technique&nbsp;? Les chimpanzés
                fabriquent des outils. Reste à se demander si la frontière est une donnée
                de nature, une décision philosophique, ou une construction historique
                fragile.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  La frontière humain/animal est-elle une <em>évidence biologique</em>
                  (Descartes), une <em>illusion d&apos;orgueil</em> (Montaigne) ou une
                  <em> fiction métaphysique</em> qu&apos;il faut déconstruire (Derrida)&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Descartes — l'animal-machine">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans le <em>Discours de la méthode</em> (1637, V<sup>e</sup> partie) et la
                <em> Lettre au marquis de Newcastle</em> (1646), Descartes pose la
                rupture la plus radicale de la modernité.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;animal est une machine</strong>. Ses mouvements s&apos;expliquent par les rouages du corps, comme une horloge. Il n&apos;a pas d&apos;âme, pas de pensée intérieure.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Le langage est le critère décisif</strong>. Aucun animal ne combine des signes pour exprimer une pensée nouvelle. La parole témoigne d&apos;un esprit, pas d&apos;un automatisme.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;humain seul possède la</strong> <em>res cogitans</em>. Une substance pensante distincte du corps-machine. C&apos;est elle qui le rend libre, responsable, susceptible de salut.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Descartes fonde la modernité
                scientifique en désenchantant l&apos;animal. La nature devient un domaine
                d&apos;objets sans intériorité, sur lequel l&apos;humain peut exercer son
                «&nbsp;empire&nbsp;» en se rendant «&nbsp;comme maître et possesseur&nbsp;».
              </p>
              <p>
                <strong>Limite.</strong> La thèse paraît contre-intuitive&nbsp;: comment
                expliquer la souffrance, le jeu, le deuil chez les animaux&nbsp;? L&apos;éthologie
                contemporaine (Frans de Waal) et le droit (article 515-14 du Code civil
                français, 2015&nbsp;: l&apos;animal est «&nbsp;un être vivant doué de sensibilité&nbsp;»)
                ont rendu intenable l&apos;animal-machine.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Montaigne — l'orgueil humain destitué">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Cinquante ans avant Descartes, Montaigne propose dans l&apos;
                <em>Apologie de Raimond Sebond</em> (Essais, II, 12, 1580) une thèse
                exactement inverse. La frontière humain/animal n&apos;existe pas dans la
                nature&nbsp;: elle est inventée par notre orgueil.
              </p>
              <p>
                Sa formule la plus célèbre&nbsp;: «&nbsp;Quand je me joue à ma chatte, qui sçait
                si elle ne se passe plus de moy que je ne fay d&apos;elle&nbsp;?&nbsp;». Le
                renversement de perspective est total. Et si c&apos;était l&apos;animal qui nous
                regardait jouer, et non l&apos;inverse&nbsp;?
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Continuité, pas rupture</strong>. Les animaux raisonnent, communiquent, organisent leurs sociétés, soignent leurs malades. La différence est de degré, pas de nature.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Critique de la</strong> <em>présomption</em>. Se croire supérieur à l&apos;animal, c&apos;est céder à la pire des passions, l&apos;orgueil. Montaigne y voit la racine de la sottise humaine.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sagesse animale</strong>. Les bêtes ignorent l&apos;ambition, l&apos;avarice, la guerre froide&nbsp;: elles vivent selon leur nature, là où l&apos;humain s&apos;invente des malheurs.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Montaigne inaugure une lignée
                qui traversera Rousseau (le primitif proche de l&apos;animal) jusqu&apos;à
                l&apos;éthologie contemporaine. La frontière n&apos;est pas une évidence&nbsp;: elle
                est un effet de notre besoin de nous distinguer.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Derrida — la fin de « l'Animal » au singulier">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>L&apos;animal que donc je suis</em> (séminaire 1997, publication
                2006), Jacques Derrida radicalise l&apos;intuition montaignienne. La scène
                inaugurale est célèbre&nbsp;: Derrida sort nu de sa douche et croise le
                regard de son chat. Honte. Pourquoi cette honte devant un animal&nbsp;?
              </p>
              <p>
                Cette gêne révèle une vérité refoulée&nbsp;: l&apos;animal nous regarde, et nous
                ne savons pas ce qu&apos;il pense. Toute la philosophie occidentale, de
                Descartes à Heidegger, a fait l&apos;impasse sur ce regard.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Le mot «&nbsp;l&apos;Animal&nbsp;» est une violence</strong>. Mettre dans un même sac la limace et le chimpanzé, le moustique et le dauphin, c&apos;est nier les différences réelles entre les espèces.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Carno-phallogocentrisme</strong>. Derrida forge ce néologisme pour dire que la pensée occidentale est structurée par le sacrifice de l&apos;animal, par le primat du mâle et par celui du logos.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Ouvrir la question</strong>. Il ne s&apos;agit pas de nier la différence humain/animal mais de cesser de la penser comme un trait unique et de prendre en compte la pluralité des vivants.</li>
              </ul>
              <p>
                <strong>Continuité avec Montaigne.</strong> Le geste est le même&nbsp;:
                déloger l&apos;humain de sa position de surplomb. Mais Derrida ajoute une
                dimension éthique et politique&nbsp;: l&apos;élevage industriel, la disparition
                des espèces, la violence ordinaire faite aux vivants posent désormais la
                question de la responsabilité.
              </p>
              <p>
                <strong>Prolongement.</strong> Peter Singer, <em>La Libération animale</em>
                (1975), et le mouvement des droits des animaux radicaliseront cette
                exigence en termes utilitaristes.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  La frontière humain/animal comme construction culturelle
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;animal n&apos;est pas un donné naturel mais une figure inventée par l&apos;humain)
                </p>
                <div className="space-y-3">
                  <p>
                    La frontière entre l&apos;humain et l&apos;animal paraît une donnée
                    biologique évidente. Elle est en réalité le produit d&apos;une longue
                    décision philosophique. Descartes, dans le <em>Discours de la
                    méthode</em>, 1637, fait de cette frontière l&apos;un des piliers de la
                    modernité scientifique. L&apos;animal est une machine, l&apos;humain seul
                    possède une âme pensante. Cette rupture rend possible l&apos;empire
                    technique sur la nature, mais elle réduit le vivant à un domaine
                    d&apos;objets.
                  </p>
                  <p>
                    Bien avant lui, Montaigne avait pourtant alerté contre cet orgueil.
                    Dans l&apos;<em>Apologie de Raimond Sebond</em>, 1580, il écrit&nbsp;:
                    «&nbsp;Quand je me joue à ma chatte, qui sçait si elle ne se passe plus
                    de moy que je ne fay d&apos;elle&nbsp;?&nbsp;». Le renversement est
                    saisissant. Et si c&apos;était l&apos;animal qui nous observait, et non
                    l&apos;inverse&nbsp;? La différence entre humain et bête, conclut-il, est
                    de degré, non de nature. La supériorité humaine est une présomption.
                  </p>
                  <p>
                    Derrida, dans <em>L&apos;animal que donc je suis</em>, 2006, pousse
                    plus loin encore. Il dénonce la violence du mot même
                    «&nbsp;l&apos;Animal&nbsp;» au singulier, qui efface la pluralité des
                    vivants pour mieux fonder la suprématie humaine. Cette
                    déconstruction n&apos;est pas un jeu&nbsp;: elle ouvre la question éthique
                    de l&apos;élevage industriel, de la disparition des espèces, de la
                    responsabilité du vivant. L&apos;humanité ne peut plus se définir
                    contre l&apos;animal sans payer un prix éthique.
                  </p>
                  <p>
                    Ainsi, la frontière humain/animal est moins un mur naturel qu&apos;un
                    seuil que chaque civilisation redessine. La penser, c&apos;est sans
                    cesse demander&nbsp;: qu&apos;est-ce que nous gagnons, et que
                    sacrifions-nous, à la tracer ainsi&nbsp;?
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Qu&apos;est-ce qui distingue l&apos;humain de l&apos;animal&nbsp;?</strong>&nbsp;» — sujet frontal.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humain est-il un animal comme les autres&nbsp;?</strong>&nbsp;» — Montaigne en pivot, Descartes en repoussoir.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Avons-nous des devoirs envers les animaux&nbsp;?</strong>&nbsp;» — Singer, Derrida, droit contemporain.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>La nature humaine</strong>&nbsp;» — frontière comme test de l&apos;essence.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité et la barbarie</strong>&nbsp;» — la violence faite à l&apos;animal interroge la nôtre.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>La technique et le vivant</strong>&nbsp;» — Descartes fonde l&apos;empire sur le vivant que l&apos;anthropocène conteste.</li>
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

export default HumainAnimalPage;
