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

const HumainLangagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humain et le langage&nbsp;: un être qui parle, ou un être parlé&nbsp;?
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Saussure, Benveniste, Wittgenstein. Trois façons de penser ce que signifie
              «&nbsp;être l&apos;animal qui a le logos&nbsp;».
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Aristote disait l&apos;humain «&nbsp;animal doué de logos&nbsp;» — la parole et la
                raison à la fois. Cette définition a tenu deux mille ans. Mais les
                sciences du langage du XX<sup>e</sup> siècle ont retourné le rapport.
                Nous croyions parler le langage&nbsp;: il s&apos;avère que c&apos;est le langage qui
                nous parle.
              </p>
              <p>
                Le découpage du réel, l&apos;émergence du «&nbsp;Je&nbsp;», les limites de ce que
                nous pouvons penser&nbsp;: tout cela dépend du système linguistique dans
                lequel nous sommes nés. Le langage n&apos;est pas un outil neutre&nbsp;: il est
                la matrice même de l&apos;humanité.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  Le langage est-il un <em>outil</em> que l&apos;humain utilise pour
                  exprimer une pensée déjà là, ou la <em>condition</em> même par laquelle
                  l&apos;humain devient sujet pensant&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Saussure — la langue découpe le monde">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le <em>Cours de linguistique générale</em> (publié en 1916, à partir des
                cours dispensés par Ferdinand de Saussure entre 1907 et 1911) fonde la
                linguistique moderne en renversant l&apos;intuition la plus simple sur le
                langage.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Le signe linguistique</strong>. Tout signe associe un signifiant (l&apos;image acoustique du mot) et un signifié (le concept). Cette association est <em>arbitraire</em>&nbsp;: rien dans le son /a/-/r/-/b/-/r/-/e/ n&apos;impose le concept «&nbsp;arbre&nbsp;».</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Langue vs parole</strong>. La langue est un système social partagé. La parole est l&apos;acte individuel par lequel on l&apos;actualise. La linguistique étudie la première, qui rend la seconde possible.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Valeur différentielle</strong>. Un signe ne se définit pas en lui-même, mais par opposition aux autres signes du système. «&nbsp;Mouton&nbsp;» en français recouvre l&apos;animal et la viande&nbsp;; l&apos;anglais distingue <em>sheep</em> et <em>mutton</em>. Mêmes choses, découpages différents.</li>
              </ul>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;La langue est un système où tout se tient.&nbsp;»
              </p>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Le langage n&apos;est pas une
                nomenclature plaquée sur des choses préexistantes. Il <em>découpe</em>
                le réel. Chaque langue propose une cartographie du monde — et l&apos;humain
                qui parle hérite de cette cartographie avant même d&apos;y penser.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Benveniste — le langage fonde le sujet">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Émile Benveniste, dans les <em>Problèmes de linguistique générale</em>
                (1966), notamment le chapitre «&nbsp;De la subjectivité dans le langage&nbsp;»,
                pousse Saussure plus loin&nbsp;: ce n&apos;est pas seulement le monde que la
                langue découpe, c&apos;est le sujet qu&apos;elle constitue.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;C&apos;est dans et par le langage que l&apos;homme se constitue comme
                sujet.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Le «&nbsp;Je&nbsp;»</strong>. Ce mot ne désigne aucune réalité fixe. Il ne renvoie qu&apos;à <em>celui qui dit «&nbsp;Je&nbsp;»</em>, dans l&apos;instant où il le dit. Il est purement performatif.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Pas de Je sans Tu</strong>. Le sujet n&apos;émerge que dans le dialogue. Sans interlocuteur possible, pas de subjectivité. L&apos;humain est dialogique avant d&apos;être individuel.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Temps, espace, personne</strong>. C&apos;est le langage qui rend possibles les déictiques (ici, maintenant, hier, demain). Sans langue, pas de temporalité humaine.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> L&apos;humain n&apos;est pas un sujet
                qui se mettrait à parler. Il devient sujet <em>en parlant</em>. Cette
                thèse subvertit Descartes&nbsp;: le <em>cogito</em> lui-même suppose une
                langue dans laquelle se dire.
              </p>
              <p>
                <strong>Conséquence.</strong> Toute la psychanalyse lacanienne et le
                structuralisme français en hériteront. L&apos;inconscient, dira Lacan, «&nbsp;est
                structuré comme un langage&nbsp;».
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Wittgenstein — les limites de mon monde">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Ludwig Wittgenstein offre deux moments de pensée, en apparence opposés,
                en réalité solidaires.
              </p>
              <p>
                <strong>Le premier Wittgenstein.</strong> Le <em>Tractatus
                logico-philosophicus</em> (1921) propose une thèse vertigineuse&nbsp;: le
                langage figure le monde. Ce qui peut être dit clairement le peut&nbsp;; ce
                qui ne peut pas l&apos;être (l&apos;éthique, l&apos;esthétique, le mystique) doit
                être tu.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Les limites de mon langage signifient les limites de mon monde.&nbsp;»
                <br />«&nbsp;Ce dont on ne peut parler, il faut le taire.&nbsp;»
              </p>
              <p>
                <strong>Le second Wittgenstein.</strong> Dans les <em>Recherches
                philosophiques</em> (1953, posthumes), il abandonne ce modèle figuratif.
                Le sens d&apos;un mot, ce n&apos;est pas une image du monde&nbsp;: c&apos;est son
                <em> usage</em> dans une «&nbsp;forme de vie&nbsp;».
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Jeux de langage</strong>. Promettre, ordonner, prier, plaisanter, mentir&nbsp;: autant de pratiques irréductibles. Comprendre une expression, c&apos;est savoir y jouer.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Forme de vie</strong>. Le langage n&apos;est pas séparable des activités humaines qui lui donnent sens. Apprendre un langage, c&apos;est apprendre à vivre avec d&apos;autres.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>«&nbsp;Si un lion pouvait parler, nous ne pourrions pas le comprendre&nbsp;»</strong>. Sa forme de vie nous est trop étrangère.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Pour Wittgenstein, le langage
                n&apos;est pas un instrument qui désigne des choses indépendantes. C&apos;est une
                pratique enracinée dans une vie partagée. L&apos;humain est cet animal qui
                parle parce qu&apos;il vit en commun.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  Le langage, matrice de l&apos;humanité
                </h3>
                <p className="text-xs italic mb-3">
                  (le langage non comme outil de l&apos;humain, mais comme condition de
                  l&apos;humain)
                </p>
                <div className="space-y-3">
                  <p>
                    Aristote définissait l&apos;humain comme «&nbsp;animal doué de
                    logos&nbsp;». Cette formule a longtemps été comprise comme&nbsp;:
                    l&apos;humain est un animal qui possède un outil supplémentaire, le
                    langage. Or les sciences du langage du XX<sup>e</sup> siècle ont
                    retourné cette idée. Le langage n&apos;est pas un outil que l&apos;humain
                    utilise. Il est la matrice par laquelle il devient humain.
                  </p>
                  <p>
                    Ferdinand de Saussure, dans son <em>Cours de linguistique
                    générale</em>, 1916, montre que la langue est un système où les
                    signes ne valent que par leurs différences. «&nbsp;Mouton&nbsp;» et
                    <em> sheep</em> ne désignent pas la même chose, parce que l&apos;anglais
                    distingue <em>sheep</em> et <em>mutton</em>. Chaque langue propose
                    un découpage du réel. L&apos;humain qui parle hérite donc d&apos;une
                    cartographie du monde avant même d&apos;y penser.
                  </p>
                  <p>
                    Émile Benveniste, dans les <em>Problèmes de linguistique
                    générale</em>, 1966, va plus loin&nbsp;: «&nbsp;c&apos;est dans et par le
                    langage que l&apos;homme se constitue comme sujet&nbsp;». Le mot
                    «&nbsp;Je&nbsp;» ne renvoie à aucune entité fixe, mais à celui qui
                    parle, dans l&apos;instant où il parle. Pas de subjectivité possible
                    sans langue. L&apos;humanité ne précède pas le langage&nbsp;: elle en
                    naît. Le <em>cogito</em> cartésien, à son insu, supposait une langue
                    dans laquelle se dire.
                  </p>
                  <p>
                    Wittgenstein, dans les <em>Recherches philosophiques</em>, 1953,
                    enracine cette intuition dans la pratique. Le sens d&apos;un mot ne
                    réside pas dans une définition abstraite, mais dans son usage au
                    sein d&apos;une «&nbsp;forme de vie&nbsp;». Apprendre une langue, c&apos;est
                    apprendre à vivre avec d&apos;autres. Ainsi, l&apos;humanité n&apos;est pas
                    cet être solitaire qui se serait donné un langage&nbsp;: elle est cet
                    animal pour qui parler et vivre ensemble sont indissociables.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le langage</strong>&nbsp;» — sujet frontal classique.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Sommes-nous parlés ou parlons-nous&nbsp;?</strong>&nbsp;» — Benveniste central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le langage est-il propre à l&apos;humain&nbsp;?</strong>&nbsp;» — articulation avec l&apos;article «&nbsp;humain et animal&nbsp;».</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Penser, est-ce parler&nbsp;?</strong>&nbsp;» — Saussure, Benveniste.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le silence</strong>&nbsp;» — Wittgenstein du <em>Tractatus</em>, ce dont on ne peut parler.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;intelligence artificielle peut-elle parler&nbsp;?</strong>&nbsp;» — Wittgenstein sur la forme de vie.</li>
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

export default HumainLangagePage;
