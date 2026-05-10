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

const HumainMortPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humain face à la mort&nbsp;: la condition mortelle comme épreuve de l&apos;humanité
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Épicure, Heidegger, Jankélévitch. Trois manières d&apos;habiter ce que
              l&apos;humain est seul à savoir&nbsp;: qu&apos;il va mourir.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                On dit l&apos;humain «&nbsp;seul animal qui sait qu&apos;il va mourir&nbsp;». Toute
                une tradition — depuis Pascal et son «&nbsp;roseau pensant&nbsp;» — a fait de
                cette conscience la marque distinctive de l&apos;espèce. La mort serait
                moins un fait biologique qu&apos;un savoir transformateur, qui impose à
                chacun la question du sens.
              </p>
              <p>
                Mais ce savoir, l&apos;humain le supporte mal. Il l&apos;oublie, le déplace, le
                refoule. La modernité occidentale, que Philippe Ariès appellera la
                «&nbsp;mort interdite&nbsp;» (<em>L&apos;Homme devant la mort</em>, 1977), a fait
                de la mort un tabou — la cachant à l&apos;hôpital, l&apos;effaçant des cités. Le
                problème est moins que nous mourions que la manière dont nous refusons
                de le savoir.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  La mort est-elle ce qui <em>dévoile</em> l&apos;humain à lui-même
                  (Heidegger), ce qu&apos;il faut <em>dissoudre</em> par un raisonnement
                  juste (Épicure), ou un <em>scandale</em> qu&apos;aucune philosophie ne
                  console (Jankélévitch)&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Épicure — la mort n'est rien pour nous">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans la <em>Lettre à Ménécée</em> (vers 300 av. J.-C.), Épicure propose
                la consolation philosophique la plus radicale jamais formulée. Sa
                stratégie&nbsp;: dissoudre la peur de la mort par un argument logique.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;La mort n&apos;est rien pour nous&nbsp;: car ce qui est dissous est sans
                sensation, et ce qui est sans sensation n&apos;est rien pour nous. Quand
                nous sommes, la mort n&apos;est pas&nbsp;; quand la mort est, nous ne sommes
                plus.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Fondement atomiste</strong>. L&apos;âme, comme le corps, est faite d&apos;atomes. Quand le corps meurt, ils se dispersent. Il n&apos;y a personne pour souffrir d&apos;être mort.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Le tetrapharmakon</strong>. Le quadruple remède épicurien&nbsp;: les dieux ne sont pas à craindre, la mort ne se fait pas sentir, le bien est facile à obtenir, le mal est facile à supporter.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Sagesse de la finitude</strong>. Le sage ne désire pas l&apos;immortalité (ce serait un faux désir, car l&apos;intensité du plaisir n&apos;est pas dans sa durée). Il cultive l&apos;ataraxie&nbsp;: la tranquillité de l&apos;âme.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Épicure ne nie pas la mort&nbsp;: il
                la sépare de la peur qui l&apos;accompagne. La crainte de mourir est un mal
                <em> en plus</em>, qu&apos;on peut s&apos;épargner par la raison.
              </p>
              <p>
                <strong>Limite.</strong> L&apos;argument soulage de la peur de <em>ma</em>
                mort. Mais que dire de la mort de <em>l&apos;autre</em>, qui me laisse
                vivant et endeuillé&nbsp;? C&apos;est précisément l&apos;objection de Jankélévitch.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Heidegger — l'être-pour-la-mort">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>Être et temps</em> (<em>Sein und Zeit</em>, 1927), Martin
                Heidegger renverse la perspective. La mort n&apos;est pas un événement que
                je rencontrerai un jour. Elle est ma <strong>structure
                ontologique</strong>&nbsp;: je suis, dès maintenant, un être-pour-la-mort
                (<em>Sein-zum-Tode</em>).
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Possibilité la plus propre</strong>. Personne ne peut mourir à ma place. La mort est ce que j&apos;ai de plus singulier, ce qui m&apos;individue absolument.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Indépassable et certaine</strong>. À la différence des autres possibles, la mort ne sera dépassée par aucune autre. Et je ne sais ni quand, ni comment.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Existence inauthentique</strong>. La plupart du temps, je vis dans le «&nbsp;On&nbsp;»&nbsp;: «&nbsp;on meurt&nbsp;», disent les gens, comme si la mort était l&apos;affaire de tout le monde — donc de personne. Le bavardage du quotidien dilue la mort.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Existence authentique</strong>. Devancer sa mort, l&apos;assumer comme <em>mienne</em>, c&apos;est se rendre disponible à l&apos;angoisse — et, par là, à une vie pleinement à soi.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Pour Heidegger, l&apos;humain n&apos;est
                pas «&nbsp;un être qui doit mourir&nbsp;»&nbsp;: il est ce mortel-là, ce
                Dasein dont la finitude structure tout le rapport au monde. La mort
                n&apos;est pas la fin de l&apos;existence&nbsp;: elle est ce qui lui donne forme.
              </p>
              <p>
                <strong>Limite.</strong> Levinas reprochera à Heidegger de penser la
                mort à la première personne (la mienne), au détriment de la mort de
                l&apos;autre, qui m&apos;oblige.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Jankélévitch — la mort de l'autre, scandale absolu">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>La Mort</em> (1966), Vladimir Jankélévitch refuse les
                consolations philosophiques. La mort, pour lui, ne se «&nbsp;pense&nbsp;» pas.
                Elle se subit. Et selon la place qu&apos;elle occupe — la mienne, celle
                d&apos;un proche, celle d&apos;un inconnu — elle change radicalement de visage.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Mort à la troisième personne</strong>. La mort statistique, abstraite&nbsp;: «&nbsp;les gens meurent&nbsp;». Lointaine, étrangère, gérable.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Mort à la première personne</strong>. Ma mort. Indicible, car je ne pourrai jamais la vivre comme expérience. Elle est mon horizon, jamais ma rencontre.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Mort à la deuxième personne</strong>. La mort du proche. C&apos;est elle, dit Jankélévitch, qui est <em>scandale absolu</em>. Elle me laisse vivant et amputé. Aucune philosophie n&apos;en console.</li>
              </ul>
              <p>
                <strong>Critique de la modernité.</strong> Jankélévitch dénonce la
                «&nbsp;mort interdite&nbsp;» de la société contemporaine&nbsp;: hôpital aseptisé,
                cérémonies expéditives, deuil suspect. La modernité a perdu le savoir
                d&apos;accompagner les mourants — et d&apos;être accompagnée. Philippe Ariès
                prolongera ce diagnostic dans <em>L&apos;Homme devant la mort</em> (1977).
              </p>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> La mort n&apos;est pas un concept
                unique mais une famille d&apos;expériences. La nôtre est lointaine, celle
                des proches déchirante. Et c&apos;est précisément dans la mort de l&apos;autre
                que se mesure l&apos;humanité&nbsp;: dans la capacité à pleurer, à veiller, à
                ne pas oublier.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  La mortalité, condition de l&apos;humain
                </h3>
                <p className="text-xs italic mb-3">
                  (la mort non comme fin, mais comme matrice du sens humain)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humain est, dit-on, le seul animal qui sait qu&apos;il va mourir. Ce
                    savoir n&apos;est pas neutre&nbsp;: il fonde la condition humaine
                    elle-même. Mais que faire de lui&nbsp;? Trois grandes réponses
                    structurent la tradition. Épicure, dans la <em>Lettre à
                    Ménécée</em>, vers 300 av. J.-C., propose la dissolution&nbsp;: «&nbsp;la
                    mort n&apos;est rien pour nous, car quand nous sommes, elle n&apos;est
                    pas&nbsp;; et quand elle est, nous ne sommes plus&nbsp;». La peur de la
                    mort serait un mal surajouté que la raison peut effacer.
                  </p>
                  <p>
                    Heidegger renverse la perspective. Dans <em>Être et temps</em>,
                    1927, il fait de la mort la structure même du Dasein&nbsp;: l&apos;humain
                    n&apos;est pas «&nbsp;un être qui mourra&nbsp;», il est, dès maintenant,
                    un <em>être-pour-la-mort</em>. La mort est sa possibilité la plus
                    propre, indépassable, qui l&apos;individue. Vivre dans le «&nbsp;On
                    meurt&nbsp;» du quotidien, c&apos;est fuir cette finitude. L&apos;assumer,
                    c&apos;est accéder à une existence pleinement à soi.
                  </p>
                  <p>
                    Vladimir Jankélévitch, dans <em>La Mort</em>, 1966, refuse ces deux
                    consolations. Il distingue la mort à la troisième personne
                    (statistique, indolore), à la première (la mienne, indicible) et à
                    la deuxième (celle du proche, scandale absolu). C&apos;est cette
                    dernière qu&apos;aucune philosophie ne console. La modernité, avec sa
                    «&nbsp;mort interdite&nbsp;» — hôpital, deuil suspect, cérémonies
                    expéditives — a perdu jusqu&apos;à l&apos;art de pleurer.
                  </p>
                  <p>
                    Ainsi la mort n&apos;est pas un problème à résoudre&nbsp;: elle est ce qui,
                    en creux, dessine les contours de l&apos;humanité. C&apos;est dans la
                    manière dont une civilisation accompagne ses mourants, pleure ses
                    proches et pense sa propre fin que se mesure son humanité.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>La mort</strong>&nbsp;» — sujet frontal classique.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Faut-il craindre la mort&nbsp;?</strong>&nbsp;» — Épicure central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>La finitude</strong>&nbsp;» — Heidegger en pivot.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le sens de la vie</strong>&nbsp;» — la mort comme révélateur.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le deuil</strong>&nbsp;» — Jankélévitch sur la mort de l&apos;autre.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Faut-il vouloir l&apos;immortalité&nbsp;?</strong>&nbsp;» — articulation transhumanisme.</li>
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

export default HumainMortPage;
