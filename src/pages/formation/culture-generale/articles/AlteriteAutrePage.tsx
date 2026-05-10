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

const AlteriteAutrePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;altérité et la rencontre de l&apos;autre&nbsp;: l&apos;humanité au miroir de l&apos;étranger
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Lévi-Strauss, Todorov, Levinas. Trois penseurs de la rencontre — et de
              l&apos;échec à voir vraiment l&apos;autre.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                L&apos;humanité ne se rencontre jamais que comme <em>plurielle</em>. Chaque
                humain n&apos;existe qu&apos;à travers une langue, une culture, une histoire qui
                le précèdent. Or l&apos;histoire des civilisations est largement celle d&apos;une
                difficulté massive&nbsp;: voir dans l&apos;autre un humain.
              </p>
              <p>
                Conquête de l&apos;Amérique en 1492, traite atlantique, colonisations,
                génocides du XX<sup>e</sup> siècle, fermeture des frontières
                contemporaines&nbsp;: à chaque fois, c&apos;est la qualité d&apos;humain qui
                vacille à la frontière de la culture, de la couleur de peau, de la
                religion. Reconnaître l&apos;autre comme humain n&apos;est pas un acquis&nbsp;: c&apos;est
                un combat permanent.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  L&apos;altérité est-elle une <em>menace pour l&apos;identité</em> dont il
                  faut se protéger, ou la <em>condition même de l&apos;humanité</em>, sans
                  laquelle aucun «&nbsp;nous&nbsp;» n&apos;a de sens&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Lévi-Strauss — il n'y a pas de barbares">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>Race et histoire</em> (1952, commande de l&apos;UNESCO), Claude
                Lévi-Strauss attaque le racisme par un détour anthropologique. Sa thèse&nbsp;:
                il n&apos;y a pas de hiérarchie naturelle entre les cultures, et croire le
                contraire est précisément la marque du barbare.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Le barbare, c&apos;est d&apos;abord l&apos;homme qui croit à la barbarie.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Critique de l&apos;ethnocentrisme</strong>. Toute société tend à mesurer les autres à son aune et à voir dans la différence une infériorité. C&apos;est une erreur de méthode autant qu&apos;une faute morale.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Diversité, pas inégalité</strong>. Les cultures sont incomparables, comme des langues. Aucune n&apos;est plus «&nbsp;avancée&nbsp;» qu&apos;une autre&nbsp;: chacune est une réponse cohérente aux problèmes de l&apos;existence.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Faux universalisme</strong>. L&apos;Occident a souvent confondu son particulier avec l&apos;universel. La vraie universalité passe par la reconnaissance des différences.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> L&apos;humanité est plurielle par
                nature. Penser l&apos;humain, c&apos;est penser la diversité, non l&apos;uniformité.
                <em>Tristes Tropiques</em> (1955) prolonge cette intuition par une
                méditation sur la disparition des cultures.
              </p>
              <p>
                <strong>Limite.</strong> Le relativisme culturel pose alors la question
                des droits universels&nbsp;: peut-on tolérer toute pratique au nom de la
                diversité culturelle&nbsp;? Lévi-Strauss lui-même resta prudent.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Todorov — voir l'autre, ou le nier">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>La Conquête de l&apos;Amérique. La question de l&apos;autre</em> (1982),
                Tzvetan Todorov relit la rencontre Cortés-Moctezuma de 1519 comme la
                scène inaugurale de la modernité. L&apos;événement n&apos;est pas militaire&nbsp;: il
                est <strong>épistémique</strong>.
              </p>
              <p>
                Cortés gagne parce qu&apos;il comprend l&apos;Aztèque mieux que l&apos;Aztèque ne le
                comprend. Mais cette compréhension est un instrument de domination, non
                de reconnaissance.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Plan axiologique</strong>&nbsp;: l&apos;autre est-il bon ou mauvais, mon égal ou mon inférieur&nbsp;?</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Plan praxéologique</strong>&nbsp;: quelle conduite ai-je vis-à-vis de lui — assimilation, ségrégation, indifférence&nbsp;?</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Plan épistémique</strong>&nbsp;: que sais-je de lui, et veux-je vraiment le connaître&nbsp;?</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Plan individuel</strong>&nbsp;: ma rencontre est-elle prise dans une histoire déjà écrite, ou puis-je la laisser me transformer&nbsp;?</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Reconnaître l&apos;autre comme
                humain n&apos;est pas un acte simple. Il faut conjoindre l&apos;égalité (le voir
                comme un égal) et la différence (ne pas le réduire à mon modèle). Las
                Casas l&apos;a mieux compris que Sepúlveda&nbsp;: «&nbsp;tous les hommes du monde
                sont des hommes&nbsp;».
              </p>
              <p>
                <strong>Actualité.</strong> La grille de Todorov fonctionne encore
                aujourd&apos;hui — pour penser l&apos;immigration, l&apos;intégration, le
                multiculturalisme.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Levinas — le visage d'autrui m'oblige">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Emmanuel Levinas, rescapé d&apos;une famille décimée par la Shoah, fait dans
                <em> Totalité et infini</em> (1961) de l&apos;altérité <strong>la</strong>
                question philosophique première. Avant l&apos;ontologie, avant la
                connaissance, il y a la rencontre éthique avec autrui.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Le visage</strong>. Le visage d&apos;autrui n&apos;est pas une chose à connaître&nbsp;: il est une <em>épiphanie</em>. Il dit, sans bouche&nbsp;: «&nbsp;tu ne tueras point&nbsp;».</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Altérité absolue</strong>. L&apos;autre n&apos;est pas une variation du Même. Il déborde tous mes concepts. Le réduire à une catégorie («&nbsp;l&apos;étranger&nbsp;», «&nbsp;le migrant&nbsp;»), c&apos;est déjà le tuer.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Responsabilité infinie</strong>. Avant tout choix, je suis déjà obligé par autrui. Sa nudité, sa fragilité, font de moi un otage de sa misère. L&apos;éthique précède la liberté.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Levinas renverse la philosophie
                occidentale, qui pensait l&apos;humain à partir du <em>cogito</em> ou du
                «&nbsp;Je&nbsp;». Pour lui, l&apos;humain commence dans l&apos;exposition au visage de
                l&apos;autre. L&apos;humanité, c&apos;est répondre à cet appel.
              </p>
              <p>
                <strong>Continuité avec Todorov.</strong> Là où Todorov montre comment
                l&apos;Occident a manqué l&apos;autre, Levinas dit ce qu&apos;est, en droit, une
                rencontre&nbsp;: une obligation, pas une connaissance.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  L&apos;humanité comme reconnaissance de l&apos;autre
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;altérité non comme menace, mais comme condition de l&apos;humain)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité ne se découvre jamais seule. Elle se révèle dans la
                    rencontre de l&apos;étranger. Or cette rencontre, la philosophie l&apos;a
                    longtemps pensée comme un risque pour le «&nbsp;nous&nbsp;». Lévi-Strauss,
                    dans <em>Race et histoire</em>, 1952, retourne le problème&nbsp;:
                    «&nbsp;le barbare, c&apos;est d&apos;abord l&apos;homme qui croit à la
                    barbarie&nbsp;». L&apos;ethnocentrisme — confondre son particulier avec
                    l&apos;universel — est l&apos;obstacle premier à toute pensée de
                    l&apos;humanité.
                  </p>
                  <p>
                    Cette difficulté à voir l&apos;autre, Tzvetan Todorov en a fait le cœur
                    de <em>La Conquête de l&apos;Amérique</em>, 1982. La rencontre
                    Cortés-Moctezuma de 1519 montre, à l&apos;échelle d&apos;un continent,
                    comment l&apos;Europe peut comprendre sans reconnaître. Cortés
                    instrumentalise sa connaissance des Aztèques pour les détruire. Las
                    Casas, contre Sepúlveda, formule la seule réponse juste&nbsp;: «&nbsp;tous
                    les hommes du monde sont des hommes&nbsp;».
                  </p>
                  <p>
                    Levinas, dans <em>Totalité et infini</em>, 1961, fonde
                    philosophiquement cette intuition. L&apos;altérité n&apos;est pas une
                    propriété de l&apos;autre&nbsp;: elle est l&apos;événement par lequel je
                    deviens moi-même humain. Le visage d&apos;autrui me dit, en sa nudité&nbsp;:
                    «&nbsp;tu ne tueras point&nbsp;». Avant tout choix, je suis déjà
                    responsable de lui. L&apos;humanité commence là.
                  </p>
                  <p>
                    Ainsi l&apos;humanité n&apos;est pas une essence partagée par avance entre
                    semblables. Elle est une exigence&nbsp;: celle d&apos;accueillir, dans
                    chaque rencontre, ce qui m&apos;échappe. Une humanité qui se prétendrait
                    homogène ne serait plus une humanité.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;étranger</strong>&nbsp;» — Todorov, Levinas, sujet classique.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le barbare</strong>&nbsp;» — Lévi-Strauss en pivot.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;hospitalité</strong>&nbsp;» — Levinas, Derrida en appui.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Y a-t-il un universel humain&nbsp;?</strong>&nbsp;» — articulation Lévi-Strauss / 1948.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le racisme</strong>&nbsp;» — Lévi-Strauss central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Soi et l&apos;autre</strong>&nbsp;» — la subjectivité comme constituée par autrui.</li>
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

export default AlteriteAutrePage;
