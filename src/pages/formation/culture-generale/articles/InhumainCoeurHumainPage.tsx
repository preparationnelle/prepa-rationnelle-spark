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

const InhumainCoeurHumainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;inhumain au cœur de l&apos;humain
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Banalité du mal, zone grise, soumission à l&apos;autorité. Arendt, Levi, Milgram&nbsp;:
              trois enquêtes qui montrent que la barbarie n&apos;est pas l&apos;autre de l&apos;humain.
              Elle en est la possibilité interne.
            </p>
          </div>

          <PRCard number="01" title="Le retournement">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Pendant des siècles, la pensée occidentale a placé l&apos;inhumain à
                l&apos;extérieur de l&apos;humain. La barbarie, c&apos;était l&apos;autre&nbsp;: l&apos;étranger, le
                primitif, le sauvage, le monstre. La civilisation, elle, était supposée
                immunisée contre ce qui la nie.
              </p>
              <p>
                Le XX<sup>e</sup> siècle ruine cette tranquillité. Les génocides, les
                camps, les massacres de masse ne sont pas commis par des barbares venus
                d&apos;ailleurs. Ils sont organisés par des sociétés industrielles avancées,
                exécutés par des fonctionnaires zélés, acceptés par des populations
                entières. Le scandale est là&nbsp;: la barbarie ne vient pas du dehors.
                <strong> Elle gît au cœur même de l&apos;humain.</strong>
              </p>
              <div className="bg-pr-gray-bg rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">Thèse-clé</h3>
                <p>
                  L&apos;inhumain n&apos;est pas l&apos;envers extérieur de l&apos;humain. C&apos;est sa
                  possibilité ordinaire, qui ne réclame pour s&apos;actualiser que la
                  démission du jugement. Trois penseurs en font la démonstration&nbsp;:
                  Arendt, Levi, Milgram.
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Hannah Arendt — la banalité du mal">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                En 1961, Hannah Arendt couvre pour le <em>New Yorker</em> le procès
                d&apos;Adolf Eichmann à Jérusalem. Eichmann, l&apos;un des principaux organisateurs
                de la déportation des Juifs, vient d&apos;être enlevé en Argentine et jugé en
                Israël. Tout le monde s&apos;attend à voir un monstre.
              </p>
              <p>
                Arendt voit autre chose. Un fonctionnaire médiocre. Un homme qui parle en
                clichés administratifs, soucieux de bien faire son travail, fier de ses
                «&nbsp;réussites&nbsp;» professionnelles. Pas de haine particulière, pas
                d&apos;idéologie ardente. Juste l&apos;obéissance et le souci de la carrière.
              </p>
              <p>
                Dans <em>Eichmann à Jérusalem</em>, 1963, elle forge alors la formule
                décisive&nbsp;: la <strong>«&nbsp;banalité du mal&nbsp;»</strong>. Le mal radical, montre-t-elle,
                ne suppose ni perversité exceptionnelle ni cruauté sadique. Il suffit
                d&apos;une <em>absence de pensée</em>. D&apos;un refus de juger par soi-même les
                ordres reçus, les normes en vigueur, les routines de l&apos;institution.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Ce que la formule ne dit pas&nbsp;:</strong> que le mal serait sans gravité. Le mal reste monstrueux dans ses effets.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Ce qu&apos;elle dit&nbsp;:</strong> que ses agents peuvent être affreusement ordinaires. Et que l&apos;humanité est toujours à un pas de la démission qui rend la barbarie possible.</li>
              </ul>
              <p>
                Arendt prolonge cette thèse dans <em>Les Origines du totalitarisme</em>,
                1951. Le totalitarisme ne fonctionne pas par contrainte permanente. Il
                fonctionne en transformant les humains en rouages, incapables de
                s&apos;arrêter pour penser ce qu&apos;ils font.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Primo Levi — la zone grise">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Primo Levi survit à Auschwitz. Il publie en 1947 <em>Si c&apos;est un homme</em>.
                Le titre dit déjà l&apos;essentiel&nbsp;: au camp, l&apos;humanité elle-même est mise
                en question. Des hommes en réduisent d&apos;autres à des numéros, des choses,
                des cadavres en sursis.
              </p>
              <p>
                Mais Levi refuse l&apos;explication facile, celle du Bien et du Mal séparés
                par une frontière nette. Quarante ans plus tard, dans
                <em> Les Naufragés et les Rescapés</em>, 1986, il forge le concept de
                <strong> «&nbsp;zone grise&nbsp;»</strong>.
              </p>
              <p>
                Le camp ne sépare pas simplement les bourreaux SS et les victimes juives.
                Il fabrique une <em>zone intermédiaire</em>, peuplée de prisonniers
                privilégiés, kapos, membres des Sonderkommandos, qui ont échangé un peu
                de survie contre un peu de pouvoir sur d&apos;autres détenus. Ni innocents ni
                coupables au sens ordinaire. Pris dans un dispositif qui détruit la
                possibilité même du choix moral.
              </p>
              <p>
                <strong>Pourquoi cette idée est cruciale.</strong> Elle interdit le
                jugement rapide. Elle montre que la machine concentrationnaire ne se
                contente pas de tuer. Elle <em>contamine</em> ceux qu&apos;elle laisse vivre,
                en les forçant à participer marginalement à leur propre destruction.
              </p>
              <p>
                Levi finira sa vie en 1987, hanté par ce qu&apos;il a vu et par la culpabilité
                d&apos;avoir survécu. La zone grise dit qu&apos;à l&apos;extrême, l&apos;humanité ne se
                préserve pas par des gestes héroïques mais à l&apos;intérieur d&apos;un effondrement
                général des repères.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Stanley Milgram — la soumission à l'autorité">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Au début des années 1960, à Yale, le psychologue Stanley Milgram lance
                une expérience devenue célèbre. Il veut tester une hypothèse&nbsp;: les
                Allemands ordinaires qui ont participé à la Shoah étaient-ils
                particulièrement obéissants, ou n&apos;importe qui ferait-il pareil&nbsp;?
              </p>
              <p>
                Le dispositif&nbsp;: un sujet, recruté dans la population, doit administrer
                des décharges électriques à un autre individu (en réalité un complice qui
                simule la douleur), au nom d&apos;une étude sur l&apos;apprentissage. Les
                décharges montent. Le complice crie, supplie, finit par se taire. Un
                expérimentateur en blouse blanche, calme, demande au sujet de continuer.
              </p>
              <p>
                <strong>Le résultat est terrifiant.</strong> Les deux tiers des sujets
                vont jusqu&apos;au bout, infligeant des décharges présentées comme
                potentiellement mortelles. Pas par cruauté. Par déférence à l&apos;autorité.
              </p>
              <p>
                Milgram publie ces résultats dans <em>Soumission à l&apos;autorité</em>, 1974.
                La leçon rejoint exactement Arendt&nbsp;: la cruauté de masse ne demande pas
                des cruels, elle demande des conformistes. Placer un humain dans une
                hiérarchie, lui faire endosser un rôle, légitimer la violence par une
                apparente compétence scientifique&nbsp;: il suffit souvent de ces conditions
                pour qu&apos;il fasse l&apos;impensable.
              </p>
              <p>
                <strong>Limite à connaître.</strong> Des relectures récentes ont nuancé
                les chiffres et la mise en scène de Milgram. La leçon centrale tient
                pourtant&nbsp;: la résistance à l&apos;autorité est rare, fragile, coûteuse, et
                dépend largement du contexte, pas seulement de la «&nbsp;qualité morale&nbsp;»
                des personnes.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">
                  La barbarie comme possibilité ordinaire de l&apos;humain
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;inhumanité ne vient pas du dehors, elle gît au cœur même de l&apos;humain)
                </p>
                <div className="space-y-3">
                  <p>
                    La barbarie n&apos;est pas l&apos;envers extérieur de la civilisation. Elle
                    en est la possibilité interne. Longtemps, on a pensé que le monstre
                    nazi devait être un fanatique extraordinaire, un démon. Comme si la
                    cruauté de masse exigeait une nature exceptionnelle. Cette intuition
                    rassurante s&apos;effondre au procès de Jérusalem en 1961.
                  </p>
                  <p>
                    Hannah Arendt, dans <em>Eichmann à Jérusalem</em>, 1963, forge alors
                    la formule décisive&nbsp;: la «&nbsp;banalité du mal&nbsp;». Eichmann n&apos;est pas un
                    sadique. C&apos;est un fonctionnaire médiocre, ponctuel, soucieux de bien
                    faire son travail. Il a organisé la déportation de millions de Juifs
                    sans haine particulière, simplement en obéissant. Le mal radical,
                    montre Arendt, ne suppose ni perversité ni idéologie ardente. Il
                    suffit d&apos;une absence de pensée, d&apos;un refus de juger par soi-même.
                  </p>
                  <p>
                    Cette thèse sera tragiquement confirmée par l&apos;expérience de Stanley
                    Milgram, publiée en 1974 dans <em>Soumission à l&apos;autorité</em>.
                    Placés en situation, deux tiers des sujets ordinaires acceptent
                    d&apos;infliger des décharges électriques pouvant tuer un inconnu. Sur
                    simple injonction d&apos;un homme en blouse blanche. La cruauté ne
                    demande pas de cruels. Elle demande des conformistes.
                  </p>
                  <p>
                    L&apos;humanité porte donc en elle, en permanence, ce point de bascule où
                    l&apos;obéissance dévore la conscience. Ainsi l&apos;inhumain n&apos;est pas un
                    monstre tapi à l&apos;extérieur de la cité. C&apos;est une potentialité
                    ordinaire, qui ne réclame pour s&apos;actualiser que la démission du
                    jugement.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Peut-on être inhumain&nbsp;?</strong>&nbsp;» — sujet directement traité par Arendt et Levi.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La barbarie est-elle une régression ou une possibilité moderne&nbsp;?</strong>&nbsp;» — totalitarisme + Shoah.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humanité a-t-elle progressé&nbsp;?</strong>&nbsp;» — contre-exemple massif au mythe du progrès moral.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Obéir, est-ce abdiquer son humanité&nbsp;?</strong>&nbsp;» — Milgram + Arendt.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Faut-il juger&nbsp;?</strong>&nbsp;» — la zone grise de Levi complique tout jugement rapide.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Qu&apos;est-ce qu&apos;un crime contre l&apos;humanité&nbsp;?</strong>&nbsp;» — Eichmann fonde la catégorie juridique moderne.</li>
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

export default InhumainCoeurHumainPage;
