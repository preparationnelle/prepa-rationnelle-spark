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

const CorpsHumainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Le corps humain&nbsp;: entre objet biologique, sujet vécu et construction sociale
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Mauss, Merleau-Ponty, Foucault. Trois manières de défaire l&apos;évidence
              cartésienne&nbsp;: le corps n&apos;est pas une chose qu&apos;on a, c&apos;est ce qu&apos;on est.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le corps semble la part la plus naturelle de nous-mêmes. Il est notre
                socle biologique, l&apos;animal qui marche, mange, dort. Et pourtant, dès
                qu&apos;on le regarde de près, tout en lui s&apos;avère appris, situé,
                politiquement codé. La manière de marcher, de dormir, de pleurer, de
                manger&nbsp;: rien d&apos;universel, tout culturel.
              </p>
              <p>
                Le dualisme cartésien (l&apos;esprit qui possède un corps comme une chose)
                a longtemps occulté cette dimension. La pensée du XX<sup>e</sup> siècle
                — anthropologique, phénoménologique, foucaldienne — l&apos;a remise au
                centre. Elle a montré que penser l&apos;humain, c&apos;est d&apos;abord penser ce
                corps qu&apos;on n&apos;a pas&nbsp;: qu&apos;on est.
              </p>
              <div className="bg-pr-gray-bg rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">Tension à retenir</h3>
                <p>
                  Avons-nous un corps comme on possède une chose, ou <em>sommes-nous</em>
                  notre corps&nbsp;? Et si nous le sommes, qui en décide&nbsp;: la nature, la
                  culture, le pouvoir&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Mauss — le corps appris">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Marcel Mauss publie en 1934 un texte court mais décisif&nbsp;:
                <em> Les Techniques du corps</em>. Sa thèse renverse le sens commun.
                Le corps n&apos;est pas un donné biologique sur lequel s&apos;ajouterait la
                culture. C&apos;est <strong>le premier objet et moyen technique</strong>
                de l&apos;humain.
              </p>
              <p>
                Mauss raconte avoir observé pendant la guerre de 1914 que les soldats
                anglais ne pouvaient pas creuser avec des pelles françaises&nbsp;: même geste
                technique, mais habitudes corporelles différentes. La marche des marins,
                la nage des Polynésiens, l&apos;accouchement vertical, la manière de dormir
                des Maoris&nbsp;: tout est appris.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Trois plans</strong>. Toute technique du corps articule un dressage biologique (le potentiel anatomique), un apprentissage psychologique (l&apos;imitation prestigieuse), et une norme sociale (ce que la société attend).</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Habitus</strong>. Mauss propose ce mot latin pour désigner les manières corporelles incorporées par l&apos;éducation. Bourdieu le reprendra pour penser la reproduction sociale.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Pas d&apos;humain sans culture corporelle</strong>. L&apos;enfant qui pleure le fait selon les codes de sa culture. La nature humaine n&apos;est jamais à l&apos;état pur.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Mauss inaugure une
                anthropologie du corps. Il n&apos;y a pas de «&nbsp;corps universel&nbsp;» qui
                serait pure biologie. Toute culture est aussi une manière d&apos;avoir un
                corps.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Merleau-Ponty — je suis mon corps">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Maurice Merleau-Ponty, dans la <em>Phénoménologie de la perception</em>
                (1945), attaque le dualisme cartésien sous l&apos;angle philosophique. Le
                corps n&apos;est ni un objet (Descartes), ni un instrument que la conscience
                utiliserait. Il est ce par quoi je suis au monde.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Le corps propre</strong>. Mon corps n&apos;est pas l&apos;un des objets que je perçois&nbsp;: il est l&apos;origine de toute perception. Je ne le vois pas, je vois <em>par</em> lui.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Le schéma corporel</strong>. Je sais où sont mes mains sans les regarder. Le corps est une unité vécue, pas un assemblage de parties — et il s&apos;étend même à mes outils (la canne du non-voyant, le clavier du musicien).</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Chair</strong>. Dans <em>Le Visible et l&apos;invisible</em> (1964, posthume), Merleau-Ponty parle de «&nbsp;chair&nbsp;» pour dire le tissu commun entre mon corps et le monde. Voir, c&apos;est aussi être visible.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Le sujet n&apos;est pas une
                conscience désincarnée qui surplomberait un corps-objet. Il <em>est</em>
                un corps incarné, ouvert au monde. Cette incarnation n&apos;est pas une
                limite à la pensée&nbsp;: elle en est la condition.
              </p>
              <p>
                <strong>Conséquence.</strong> Toute la phénoménologie ultérieure
                (Levinas, Henry, Marion) puisera dans cette thèse. La médecine
                contemporaine, en redécouvrant la centralité du «&nbsp;vécu&nbsp;» du patient,
                aussi.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Foucault — le corps comme effet du pouvoir">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Michel Foucault, dans <em>Surveiller et punir</em> (1975) puis
                <em> La Volonté de savoir</em> (1976), attaque par un troisième angle&nbsp;:
                politique. Le corps n&apos;est pas seulement appris (Mauss) ou vécu
                (Merleau-Ponty). Il est <strong>produit</strong> par des dispositifs de
                pouvoir.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Disciplines</strong>. Au tournant des XVII<sup>e</sup>-XVIII<sup>e</sup> siècles, école, caserne, hôpital, prison, usine inventent des techniques de dressage&nbsp;: emplois du temps, postures, examens, cellules. Le corps moderne devient «&nbsp;docile et utile&nbsp;».</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Biopolitique</strong>. À côté du pouvoir sur les corps individuels, l&apos;État moderne invente une gestion des <em>populations</em>&nbsp;: natalité, santé publique, hygiène, statistiques. Faire vivre devient le grand projet politique.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Dispositifs de sexualité</strong>. Loin d&apos;être réprimée, la sexualité est <em>produite</em> par les discours médicaux, religieux, scolaires. Le corps désirant est un effet de ces dispositifs, non leur source naturelle.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Le corps que nous habitons est
                historiquement situé. Le sportif moderne, le malade, le travailleur, le
                citoyen sont des corps fabriqués. Reprendre la maîtrise de son corps,
                c&apos;est aussi un geste politique.
              </p>
              <p>
                <strong>Prolongement.</strong> David Le Breton, dans
                <em> Anthropologie du corps et modernité</em> (1990), montre comment la
                modernité a produit un corps individualisé, séparé du monde, instrument
                à entretenir.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">
                  Le corps comme condition de l&apos;humanité
                </h3>
                <p className="text-xs italic mb-3">
                  (le corps n&apos;est pas un avoir, c&apos;est un être — et il est politique)
                </p>
                <div className="space-y-3">
                  <p>
                    Le corps semble la part la plus naturelle de l&apos;humain. Il est en
                    réalité ce qui se laisse le moins penser comme «&nbsp;nature&nbsp;».
                    Marcel Mauss, dans <em>Les Techniques du corps</em>, 1934, observe
                    qu&apos;aucun geste n&apos;est universel&nbsp;: marcher, nager, accoucher,
                    dormir varient d&apos;une société à l&apos;autre. Le corps est notre
                    «&nbsp;premier objet et moyen technique&nbsp;»&nbsp;: il est appris, et
                    cet apprentissage forge un <em>habitus</em>, terme que Bourdieu
                    reprendra pour penser la reproduction sociale.
                  </p>
                  <p>
                    Mais ce corps appris n&apos;est pas un objet posé devant moi. Maurice
                    Merleau-Ponty, dans la <em>Phénoménologie de la perception</em>,
                    1945, en fait l&apos;origine même de la perception. Je ne <em>perçois
                    pas</em> mon corps&nbsp;: je perçois <em>par</em> lui. Le sujet
                    n&apos;est pas une conscience qui aurait un corps comme une chose. Il
                    <em> est</em> un corps incarné, ouvert au monde. L&apos;incarnation
                    n&apos;est pas la limite de la pensée&nbsp;: elle en est la condition.
                  </p>
                  <p>
                    Michel Foucault, dans <em>Surveiller et punir</em>, 1975, ajoute la
                    dimension politique. Le corps moderne — discipliné, productif,
                    examiné, mesuré — est l&apos;effet des dispositifs nés au tournant des
                    XVII<sup>e</sup>-XVIII<sup>e</sup> siècles. École, caserne, hôpital,
                    usine fabriquent des corps «&nbsp;dociles et utiles&nbsp;». À côté de
                    cette discipline individuelle, la biopolitique étend son emprise sur
                    les <em>populations</em>&nbsp;: santé publique, natalité, hygiène. Faire
                    vivre devient une affaire d&apos;État.
                  </p>
                  <p>
                    Ainsi, l&apos;humanité ne se laisse pas penser sans son corps, et son
                    corps ne se laisse pas penser comme simple nature. Il est à la fois
                    notre condition d&apos;existence, notre apprentissage culturel, et
                    l&apos;objet d&apos;un pouvoir. Reprendre la maîtrise de son corps, dans
                    une société qui le fabrique, est l&apos;un des combats les plus actuels
                    de l&apos;humanité.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Le corps</strong>&nbsp;» — sujet frontal classique.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Avons-nous un corps ou sommes-nous un corps&nbsp;?</strong>&nbsp;» — Merleau-Ponty contre Descartes.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La nature humaine</strong>&nbsp;» — Mauss sur l&apos;impossibilité d&apos;un corps purement naturel.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La médecine et l&apos;humanité</strong>&nbsp;» — biopolitique, dignité du patient.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Le sport</strong>&nbsp;» — Mauss sur les techniques, Foucault sur le dressage.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Le genre, la beauté, la norme</strong>&nbsp;» — Foucault et la fabrication du corps désirant.</li>
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

export default CorpsHumainPage;
