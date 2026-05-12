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

const HumanismeCritiquesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humanisme et ses critiques&nbsp;: naissance, apogée, déconstruction
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Renaissance, Nietzsche, Foucault. L&apos;humanisme noble a fait l&apos;objet des
              critiques les plus radicales — qui n&apos;en ont pas eu raison.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                L&apos;humanisme paraît une évidence. Faire confiance à l&apos;humain, à sa
                raison, à sa capacité de progrès&nbsp;: qui voudrait s&apos;y opposer&nbsp;?
                L&apos;histoire des idées montre pourtant que les attaques les plus
                ambitieuses du XIX<sup>e</sup> et du XX<sup>e</sup> siècles ont visé
                exactement cela. Pour Nietzsche, l&apos;humanisme est une morale d&apos;esclaves.
                Pour Foucault, «&nbsp;l&apos;homme&nbsp;» est une figure historique appelée à
                disparaître.
              </p>
              <p>
                Comprendre l&apos;humanité contemporaine suppose de prendre au sérieux ce
                paradoxe&nbsp;: un même siècle a écrit la Déclaration universelle des droits
                de l&apos;homme (1948) et déclaré la «&nbsp;mort de l&apos;homme&nbsp;» (Foucault,
                1966). Comment articuler les deux sans renoncer à aucun&nbsp;?
              </p>
              <div className="bg-pr-gray-bg rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">Tension à retenir</h3>
                <p>
                  L&apos;humanisme <em>protège</em>-t-il l&apos;humain en le plaçant au centre,
                  ou l&apos;<em>enferme</em>-t-il dans une fiction qui le coupe du reste du
                  vivant et de lui-même&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Renaissance — l'humain au centre">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                L&apos;humanisme naît au XV<sup>e</sup>-XVI<sup>e</sup> siècle, en Italie
                d&apos;abord (Pétrarque, Pic), puis dans le Nord (Érasme, More, Montaigne).
                Le geste fondateur est un retour aux sources&nbsp;: les <em>humanités</em>,
                ces disciplines (grammaire, rhétorique, poétique, histoire, philosophie
                morale) qui supposent une fréquentation directe des Anciens.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Érasme</strong>, <em>Éloge de la folie</em> (1511)&nbsp;: critique des dogmatismes, ironie contre les théologiens, pari pédagogique sur la liberté de l&apos;humain.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Montaigne</strong>, <em>Essais</em> (1580-1592)&nbsp;: «&nbsp;Que sais-je&nbsp;?&nbsp;», primat de l&apos;expérience, tolérance face à la diversité (les «&nbsp;cannibales&nbsp;» plus humains que les conquérants), refus de la cruauté.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Le programme</strong>. L&apos;humain n&apos;est plus défini par sa place dans une hiérarchie céleste, mais par sa capacité à se cultiver, à choisir, à faire usage de sa raison. La dignité tient à cette autonomie naissante.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> L&apos;humanisme renaissant n&apos;est
                pas une théorie achevée, c&apos;est une <em>posture</em>&nbsp;: confiance
                critique dans l&apos;humain. Cette posture irriguera Descartes, les
                Lumières, jusqu&apos;à la déclaration de 1948.
              </p>
              <p>
                <strong>Limite déjà visible.</strong> L&apos;«&nbsp;humain&nbsp;» de la
                Renaissance est européen, masculin, lettré. L&apos;universel proclamé est
                socialement très situé. Cette fragilité interne sera l&apos;objet de toutes
                les critiques ultérieures.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Nietzsche — l'humain à dépasser">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Friedrich Nietzsche, dans <em>Ainsi parlait Zarathoustra</em>
                (1883-1885) puis <em>La Généalogie de la morale</em> (1887), porte la
                première grande attaque contre l&apos;humanisme. Sa thèse&nbsp;: l&apos;humanisme
                moderne est une survivance déguisée de la morale chrétienne, qui érige
                la faiblesse en vertu.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-black">
                «&nbsp;L&apos;homme est quelque chose qui doit être surmonté.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Le surhomme</strong> (<em>Übermensch</em>). Non un tyran biologique, mais une figure éthique&nbsp;: celui qui assume la disparition de Dieu et invente ses propres valeurs, au lieu de pleurer la perte du sens.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Critique de la pitié</strong>. La compassion humaniste, dit Nietzsche, est l&apos;arme des faibles contre les forts. Elle nivelle, elle écrase ce qui veut s&apos;élever. Sous le masque de la bonté, du ressentiment.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Mort de Dieu</strong>. Nietzsche en tire une conclusion peu commentée&nbsp;: la disparition du fondement divin entraîne celle du fondement humain. L&apos;humain ne peut plus se penser comme «&nbsp;créature à l&apos;image de Dieu&nbsp;». Il devient lui-même la dernière idole à briser.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Nietzsche ne déteste pas
                l&apos;humain&nbsp;: il refuse qu&apos;on en fasse un absolu. La mort de Dieu n&apos;a
                de sens que si l&apos;humain consent à se dépasser lui-même.
              </p>
              <p>
                <strong>Limite et danger.</strong> Cette pensée a été instrumentalisée
                par le fascisme. Elle reste pourtant inentamée comme critique des
                humanismes mous, qui célèbrent l&apos;humain sans plus rien lui demander.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Foucault — l'homme, invention récente">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>Les Mots et les Choses</em> (1966), Michel Foucault porte la
                seconde grande attaque, sur un terrain différent&nbsp;: archéologique. Sa
                thèse n&apos;est pas morale (Nietzsche), mais épistémologique. «&nbsp;L&apos;homme&nbsp;»
                est une <strong>figure historique</strong>, née à la fin du
                XVIII<sup>e</sup> siècle.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-black">
                «&nbsp;L&apos;homme est une invention dont l&apos;archéologie de notre pensée
                montre aisément la date récente. Et peut-être la fin prochaine.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Naissance des sciences humaines</strong>. Économie, biologie, philologie inventent au XIX<sup>e</sup> siècle un objet inédit&nbsp;: «&nbsp;l&apos;homme&nbsp;» comme être qui parle, qui travaille et qui vit. Avant cela, on étudiait les richesses, les langues, les vivants — pas «&nbsp;l&apos;homme&nbsp;».</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Pli épistémologique</strong>. L&apos;humain devient à la fois sujet et objet de la connaissance, ce qui produit des paradoxes (penser, c&apos;est être pensé&nbsp;; vouloir, c&apos;est être déterminé). Cette tension n&apos;est pas éternelle&nbsp;: elle date.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Mort annoncée</strong>. Foucault prédit que «&nbsp;l&apos;homme&nbsp;» se dissoudra «&nbsp;comme à la limite de la mer un visage de sable&nbsp;». Ce que les structures (langue, parenté, pouvoir) montrent, c&apos;est que «&nbsp;l&apos;homme&nbsp;» n&apos;est pas premier.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Foucault ne nie pas les humains
                concrets. Il refuse «&nbsp;l&apos;Homme&nbsp;» comme catégorie philosophique
                absolue. À ses yeux, ce qui est humaniste, c&apos;est de cesser de croire
                qu&apos;on a déjà saisi ce qu&apos;est l&apos;humain.
              </p>
              <p>
                <strong>Filiation.</strong> Lévi-Strauss, dans <em>Tristes Tropiques</em>
                (1955), avait écrit que «&nbsp;le but des sciences humaines n&apos;est pas de
                constituer l&apos;homme, mais de le dissoudre&nbsp;». Heidegger, dans la
                <em> Lettre sur l&apos;humanisme</em> (1946), refusait déjà toute définition
                métaphysique de l&apos;humain.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">
                  L&apos;humanisme à l&apos;épreuve de ses propres critiques
                </h3>
                <p className="text-xs italic mb-3">
                  (la grandeur de l&apos;humanisme tient peut-être à sa capacité à se laisser
                  contester)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanisme paraît un programme noble. Né à la Renaissance, avec
                    Érasme (<em>Éloge de la folie</em>, 1511) et Montaigne
                    (<em>Essais</em>, 1580-1592), il fait confiance à l&apos;humain, à sa
                    raison, à sa capacité de se cultiver. La dignité y est posée comme
                    autonomie&nbsp;: «&nbsp;Que sais-je&nbsp;?&nbsp;» plutôt que la soumission
                    au dogme. C&apos;est cette posture qui irriguera Descartes, les Lumières
                    et, finalement, la Déclaration universelle de 1948.
                  </p>
                  <p>
                    Pourtant, deux grands soupçons ont visé l&apos;humanisme. Le premier
                    vient de Nietzsche. Dans <em>Ainsi parlait Zarathoustra</em>,
                    1883-1885, il proclame&nbsp;: «&nbsp;L&apos;homme est quelque chose qui
                    doit être surmonté.&nbsp;» L&apos;humanisme moderne, selon lui, prolonge
                    secrètement la morale chrétienne&nbsp;: il sacralise la faiblesse, la
                    pitié, le ressentiment. La mort de Dieu doit emporter aussi
                    «&nbsp;l&apos;Homme&nbsp;» comme dernière idole.
                  </p>
                  <p>
                    Le second soupçon est foucaldien. Dans <em>Les Mots et les
                    Choses</em>, 1966, Michel Foucault montre que «&nbsp;l&apos;homme&nbsp;»,
                    objet privilégié des sciences humaines, est une invention récente,
                    datant de la fin du XVIII<sup>e</sup> siècle. Il prédit sa
                    disparition «&nbsp;comme à la limite de la mer un visage de
                    sable&nbsp;». Ce que les structures révèlent, c&apos;est que l&apos;humain
                    n&apos;est pas premier — il est l&apos;effet d&apos;histoires, de langues, de
                    pouvoirs.
                  </p>
                  <p>
                    Faut-il pour autant abandonner l&apos;humanisme&nbsp;? Sans doute pas. La
                    grandeur de la posture humaniste tient peut-être à sa capacité à se
                    laisser contester. Un humanisme honnête n&apos;est plus la célébration
                    naïve de l&apos;«&nbsp;Homme&nbsp;» avec majuscule, mais l&apos;exigence
                    obstinée de protéger les humains concrets, dans toute leur
                    pluralité, contre les pouvoirs qui les fabriquent.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humanisme est-il dépassé&nbsp;?</strong>&nbsp;» — Nietzsche, Foucault.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humain au centre</strong>&nbsp;» — Renaissance comme programme.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Faut-il dépasser l&apos;humain&nbsp;?</strong>&nbsp;» — articulation transhumanisme/Nietzsche.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Les droits de l&apos;homme</strong>&nbsp;» — humanisme juridique post-1948.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;universel</strong>&nbsp;» — humanisme et son provincialisme.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;humanité a-t-elle une essence&nbsp;?</strong>&nbsp;» — Foucault et la dissolution.</li>
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

export default HumanismeCritiquesPage;
