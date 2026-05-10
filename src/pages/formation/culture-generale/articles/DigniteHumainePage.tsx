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

const DigniteHumainePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              La dignité humaine&nbsp;: d&apos;un fondement métaphysique à un principe juridique
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Kant, 1948, Habermas. Trois moments d&apos;un mot omniprésent — et flou —
              dans toutes les constitutions modernes.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le mot «&nbsp;dignité&nbsp;» est partout. Dans la Déclaration universelle, dans
                les constitutions, dans les débats sur la fin de vie, la PMA, la GPA, le
                lancer de nain, le port du voile, l&apos;élevage industriel. Il est devenu
                l&apos;argument final, celui qui clôt toute discussion. Et précisément parce
                qu&apos;il est partout, il dit tout et son contraire.
              </p>
              <p>
                D&apos;où vient cette force&nbsp;? D&apos;une tradition philosophique qui, de
                Cicéron à Pic de la Mirandole, de Kant à 1948, a cherché à nommer ce qui
                fait que l&apos;humain ne peut pas être traité comme une chose. Mais cette
                tradition est ambivalente&nbsp;: la dignité protège-t-elle l&apos;humain ou la
                dignité <em>idéale</em> contre l&apos;humain <em>réel</em>&nbsp;?
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  La dignité est-elle une <em>propriété intrinsèque</em> qu&apos;aucune
                  autorité ne peut retirer (Kant, 1948), ou un <em>statut conféré</em>
                  qui se gagne, se perd et qu&apos;on doit défendre activement (Habermas)&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Kant — l'humanité comme fin en soi">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans les <em>Fondements de la métaphysique des mœurs</em> (1785),
                Emmanuel Kant donne à la dignité sa formulation philosophique la plus
                rigoureuse. Le principe est célèbre&nbsp;:
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Agis de telle sorte que tu traites l&apos;humanité, aussi bien dans ta
                personne que dans la personne de tout autre, toujours en même temps comme
                une fin, et jamais simplement comme un moyen.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Distinction prix / dignité</strong>. «&nbsp;Ce qui a un prix peut être remplacé&nbsp;; ce qui est au-dessus de tout prix, et ne souffre aucun équivalent, a une dignité.&nbsp;» Les choses ont un prix&nbsp;; les personnes ont une dignité.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Fondement&nbsp;: l&apos;autonomie</strong>. La dignité tient à la capacité de l&apos;humain à se donner à lui-même la loi morale. C&apos;est l&apos;autonomie qui le rend respectable.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Inconditionnalité</strong>. La dignité ne dépend ni du mérite, ni de l&apos;utilité, ni du statut social. Tout être humain en est porteur, du seul fait d&apos;être humain.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Kant fait de la dignité un
                concept moral universel et laïc. Elle n&apos;est plus liée à Dieu (Pic) mais
                à la raison pratique. Cette laïcisation prépare le tournant juridique du
                XX<sup>e</sup> siècle.
              </p>
              <p>
                <strong>Limite.</strong> La dignité kantienne suppose l&apos;autonomie
                rationnelle. Que devient-elle pour le nouveau-né, le malade
                d&apos;Alzheimer, l&apos;embryon&nbsp;? La question hantera toute la bioéthique
                contemporaine.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="1948 — la dignité au fondement du droit">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le 10 décembre 1948, l&apos;Assemblée générale des Nations unies adopte la
                <em> Déclaration universelle des droits de l&apos;homme</em>. Le texte,
                rédigé sous la conduite d&apos;Eleanor Roosevelt et de René Cassin, s&apos;ouvre
                par une formule décisive.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Tous les êtres humains naissent libres et égaux en dignité et en
                droits.&nbsp;» (Article 1)
              </p>
              <p>
                Le contexte change tout. L&apos;humanité vient de découvrir Auschwitz. La
                déchéance industrielle de millions d&apos;êtres humains a montré qu&apos;un État
                pouvait, en toute légalité, traiter des humains comme des choses. La
                dignité quitte le terrain métaphysique pour devenir un <strong>rempart
                juridique</strong>.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>La Loi fondamentale allemande</strong> (Grundgesetz, 23 mai 1949), article 1&nbsp;: «&nbsp;La dignité de l&apos;être humain est intangible. Tous les pouvoirs publics ont l&apos;obligation de la respecter et de la protéger.&nbsp;»</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Charte des droits fondamentaux de l&apos;UE</strong> (2000), article 1&nbsp;: «&nbsp;La dignité humaine est inviolable.&nbsp;»</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Conseil constitutionnel français</strong>, décision du 27 juillet 1994&nbsp;: la sauvegarde de la dignité humaine est un principe à valeur constitutionnelle.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Après 1945, la dignité devient
                le concept-pivot du droit international. Elle ne se prouve plus, elle se
                postule. C&apos;est le socle non négociable sur lequel toute la construction
                des droits humains repose.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Habermas — la dignité face aux biotechnologies">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>L&apos;Avenir de la nature humaine. Vers un eugénisme libéral&nbsp;?</em>
                (2001), Jürgen Habermas tente de penser la dignité à l&apos;ère de la
                génétique. La question n&apos;est plus seulement&nbsp;: que doit-on aux humains&nbsp;?
                Mais&nbsp;: a-t-on le droit de fabriquer des humains à façon&nbsp;?
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;eugénisme libéral</strong>. Lorsque des parents choisissent les caractères génétiques de leur enfant, ils inscrivent dans son patrimoine biologique une décision irrévocable. L&apos;enfant ne peut plus se dire l&apos;auteur de sa propre vie.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>L&apos;autonomie comme condition de la dignité</strong>. Pour pouvoir mener une «&nbsp;vie qui soit la sienne&nbsp;», l&apos;humain doit avoir hérité de sa nature comme d&apos;un donné, pas d&apos;un projet parental.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>La nature humaine comme limite</strong>. Habermas plaide pour une «&nbsp;auto-compréhension éthique de l&apos;espèce&nbsp;»&nbsp;: tracer une ligne au-delà de laquelle la biotechnologie attaque la dignité elle-même.</li>
              </ul>
              <p>
                <strong>Continuité avec Kant.</strong> Habermas reprend la formule de
                l&apos;humanité comme fin&nbsp;: l&apos;enfant designed cesse d&apos;être traité comme
                fin pour devenir un moyen au service du désir parental.
              </p>
              <p>
                <strong>Critique.</strong> Le philosophe Ruwen Ogien, dans <em>La vie,
                la mort, l&apos;État</em> (2009), répond que la dignité sert souvent
                d&apos;argument paternaliste pour interdire ce qui dérange. La dignité
                deviendrait alors le nom moderne d&apos;une morale conservatrice.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  La dignité comme socle de l&apos;humanité moderne
                </h3>
                <p className="text-xs italic mb-3">
                  (la dignité, du concept moral kantien au principe juridique post-1945)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité contemporaine se définit moins par une essence que par
                    un statut juridique&nbsp;: celui de la dignité. Cette idée, devenue
                    l&apos;article 1 de la Déclaration universelle de 1948, plonge ses
                    racines dans Kant. Dans les <em>Fondements de la métaphysique des
                    mœurs</em>, 1785, le philosophe distingue ce qui a un prix et ce qui
                    a une dignité&nbsp;: «&nbsp;ce qui est au-dessus de tout prix, et ne
                    souffre aucun équivalent, a une dignité&nbsp;». L&apos;humain, parce
                    qu&apos;il est capable d&apos;autonomie morale, ne peut être traité
                    simplement comme un moyen.
                  </p>
                  <p>
                    Mais c&apos;est l&apos;histoire qui transforme cette idée philosophique en
                    principe politique. Après Auschwitz, l&apos;humanité a vu jusqu&apos;où une
                    légalité peut aller dans la déchéance des humains. La Déclaration
                    universelle des droits de l&apos;homme du 10 décembre 1948 fait alors
                    de la dignité un <em>rempart</em>&nbsp;: «&nbsp;Tous les êtres humains
                    naissent libres et égaux en dignité et en droits.&nbsp;» La Loi
                    fondamentale allemande du 23 mai 1949 ira plus loin encore en
                    déclarant la dignité «&nbsp;intangible&nbsp;».
                  </p>
                  <p>
                    Cette dignité-rempart est aujourd&apos;hui mise à l&apos;épreuve par les
                    biotechnologies. Habermas, dans <em>L&apos;Avenir de la nature
                    humaine</em>, 2001, met en garde&nbsp;: lorsque les parents
                    pré-déterminent le patrimoine génétique de leur enfant, ils
                    l&apos;empêchent de se vivre comme l&apos;auteur de sa propre vie. La
                    dignité exige une nature humaine reçue comme donnée, non comme
                    projet d&apos;autrui.
                  </p>
                  <p>
                    Ainsi la dignité humaine n&apos;est plus seulement une propriété
                    métaphysique&nbsp;: elle est devenue une promesse politique et un
                    chantier permanent. À chaque progrès technique, à chaque crise, il
                    revient aux sociétés de la redessiner — sans jamais l&apos;abandonner.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Qu&apos;est-ce que la dignité humaine&nbsp;?</strong>&nbsp;» — sujet frontal.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Toute vie humaine est-elle digne d&apos;être vécue&nbsp;?</strong>&nbsp;» — fin de vie, euthanasie.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Faut-il limiter le progrès technique au nom de l&apos;humanité&nbsp;?</strong>&nbsp;» — Habermas central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité a-t-elle des droits&nbsp;?</strong>&nbsp;» — articulation 1948 et droits humains.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le respect</strong>&nbsp;» — Kant, formule de l&apos;humanité.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Faut-il toujours respecter l&apos;autre&nbsp;?</strong>&nbsp;» — dignité comme limite à toute action.</li>
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

export default DigniteHumainePage;
