import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

const PRCard: React.FC<{ number?: string; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <Card className="relative bg-white rounded-2xl border border-pr-gray-light overflow-hidden mt-6 first:mt-0">
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-black" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black flex items-baseline gap-3">
        {number && <span className="font-dm-serif text-pr-black text-3xl leading-none">{number}</span>}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

type ParapersoProps = {
  sousTheme: string;
  titre: string;
  glose: string;
  refs: string;
  motCount: string;
  children: React.ReactNode;
};

const Paraperso: React.FC<ParapersoProps> = ({ sousTheme, titre, glose, refs, motCount, children }) => (
  <div className="bg-pr-gray-bg rounded-xl p-5 text-sm md:text-base leading-relaxed">
    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black mb-2">
      {sousTheme}
    </p>
    <p className="font-dm-serif text-pr-black text-base mb-1">
      <strong>{titre}</strong>
      <span className="italic font-dm-sans text-pr-gray-dark"> ({glose})</span>
    </p>
    <p>{children}</p>
    <p className="text-pr-gray-mid text-xs mt-3 italic">{motCount} · {refs}</p>
  </div>
);

const MethodesParagraphesJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Fiche méthode : les paragraphes (Humanité)
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Construire 30 à 50 parapersos autonomes et puissants pour le thème <em>l&apos;humanité</em>.
            </p>
          </div>

          <PRCard title="Objectif">
            <div className="space-y-3 text-sm md:text-base">
              <p>Produire <strong>30 à 50 paragraphes</strong>, chacun de <strong>270 à 300 mots maximum</strong>, organisés selon les <strong>8 sous-thèmes du programme</strong>, afin de couvrir tout le champ sémantique et conceptuel du thème.</p>
              <p>Chaque paragraphe doit :</p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>Être <strong>autonome</strong> (lisible seul, sans contexte de dissertation).</li>
                <li><span className="text-pr-black mr-2">→</span>Avancer une <strong>thèse-titre claire</strong> (idée directrice annoncée en haut).</li>
                <li><span className="text-pr-black mr-2">→</span>Mobiliser <strong>1 ou 2 références bien expliquées</strong>, jamais plaquées (philosophe, œuvre, fait historique, film).</li>
              </ul>
            </div>
          </PRCard>

          <PRCard title="Règles de style non négociables">
            <ul className="space-y-1.5 text-sm md:text-base">
              <li><span className="text-pr-black mr-2">→</span><strong>Jamais de tirets longs</strong> dans le corps. Utiliser points, virgules, deux-points, parenthèses.</li>
              <li><span className="text-pr-black mr-2">→</span><strong>Jamais de termes techniques en langue étrangère</strong> non traduits. Tout doit être en français.</li>
              <li><span className="text-pr-black mr-2">→</span><strong>Jamais plus de 300 mots</strong>. La limite est dure.</li>
              <li><span className="text-pr-black mr-2">→</span><strong>Phrases courtes ou moyennes</strong> (5 à 25 mots). Pas de phrase-fleuve au-delà de 30.</li>
              <li><span className="text-pr-black mr-2">→</span><strong>Ton affirmatif</strong>. Pas de conditionnel systématique.</li>
              <li><span className="text-pr-black mr-2">→</span><strong>Œuvres soulignées ou en italique</strong> avec auteur et date : Hannah Arendt, <em>Eichmann à Jérusalem</em>, 1963.</li>
            </ul>
          </PRCard>

          <PRCard title="Structure d'un paragraphe (5 étapes fixes)">
            <div className="space-y-5 text-sm md:text-base">
              {[
                { t: '1) Phrase d\'annonce (argument)', items: [
                  'Une à deux phrases qui posent l\'idée centrale. Ton affirmatif et clair.',
                  'Exemple : « L\'humanité ne se définit pas par une essence donnée. Elle se définit par sa capacité indéfinie à se transformer elle-même. »',
                ] },
                { t: '2) Développement de l\'idée (3 à 5 phrases courtes)', items: [
                  'Dérouler l\'argument en posant les concepts un à un.',
                  'Définir si besoin. Avancer par paliers.',
                  'Possible : oppositions, questions rhétoriques, gradations.',
                ] },
                { t: '3) Introduction de la référence', items: [
                  'Une transition naturelle vers la référence.',
                  'Formules : « comme l\'évoque… », « ainsi que le montre… », « à la question X, Y apporte une réponse… ».',
                ] },
                { t: '4) Référence bien expliquée (4 à 6 phrases)', items: [
                  'C\'est le cœur du paragraphe. Sourcer précisément (auteur + œuvre + date).',
                  'Expliquer en français : dérouler la thèse, le raisonnement, la scène, l\'expérience.',
                  'Articuler à l\'argument : montrer pourquoi cette référence prouve l\'idée.',
                  'Citation courte autorisée (moins de 15 mots, en français).',
                ] },
                { t: '5) Phrase de conclusion (reformulation enrichie)', items: [
                  'Boucler en reformulant l\'idée directrice, légèrement déplacée par le travail des références.',
                  'Donner l\'impression que quelque chose a été gagné.',
                ] },
              ].map((b) => (
                <div key={b.t}>
                  <h3 className="font-dm-serif text-pr-black text-lg mb-2">{b.t}</h3>
                  <ul className="space-y-1.5">
                    {b.items.map((it) => <li key={it}><span className="text-pr-black mr-2">→</span>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </PRCard>

          <PRCard title="Avant les exemples : un paragraphe, deux mouvements">
            <p className="mb-4 text-pr-gray-dark">
              Un plan dialectique repose souvent sur deux paragraphes qui se répondent. Voici, en miniature, ce que signifie opposer une <strong>thèse</strong> et une <strong>antithèse</strong> sur l&apos;humanité — avant de dérouler les exemples rédigés ci-dessous.
            </p>
            <ComparisonGrid>
              <ComparisonCard label="Thèse">
                <p className="mb-2">
                  <strong>L&apos;humain se définit par sa liberté radicale.</strong>
                </p>
                <p>
                  Sans essence donnée d&apos;avance, il s&apos;invente lui-même par ses choix. Pic de la Mirandole, puis Sartre, en font la condition même de la dignité humaine&nbsp;: «&nbsp;l&apos;existence précède l&apos;essence&nbsp;».
                </p>
              </ComparisonCard>
              <ComparisonCard label="Antithèse">
                <p className="mb-2">
                  <strong>Cette liberté ouvre la possibilité de l&apos;inhumain.</strong>
                </p>
                <p>
                  Pouvoir tout devenir, c&apos;est aussi pouvoir devenir bourreau. Arendt (banalité du mal) et Milgram (soumission à l&apos;autorité) montrent que l&apos;humanité porte la barbarie comme l&apos;une de ses potentialités ordinaires.
                </p>
              </ComparisonCard>
            </ComparisonGrid>
          </PRCard>

          <PRCard title="Exemple 1 : « L'humanité comme indétermination radicale »">
            <div className="bg-pr-gray-bg rounded-xl p-5 text-sm md:text-base leading-relaxed">
              <p className="font-dm-serif text-pr-black text-base mb-1">
                <strong>L&apos;humanité comme indétermination radicale</strong>
                <span className="italic font-dm-sans text-pr-gray-dark"> (l&apos;humain défini par l&apos;absence même d&apos;essence fixe)</span>
              </p>
              <p>
                L&apos;humanité ne se définit pas par une essence donnée. Elle se définit par sa capacité indéfinie à se transformer elle-même. Contrairement aux animaux, dont la nature est fixée par l&apos;instinct, l&apos;être humain se caractérise par une plasticité radicale. Il peut se faire bête ou ange, selon les choix qu&apos;il opère. Cette indétermination n&apos;est pas une faiblesse. Elle est le fondement même de sa dignité. À la question : qu&apos;est-ce qui fait de nous des humains ?, la Renaissance apporte une réponse audacieuse. Dans son <em>Discours de la dignité de l&apos;homme</em>, 1486, Pic de la Mirandole imagine Dieu s&apos;adressant à Adam. Ne lui ayant donné ni forme ni fonction propre, il lui offre la liberté de se modeler lui-même. L&apos;humain est le seul être sans place assignée dans la création. Et c&apos;est précisément cette absence de nature qui constitue sa nature. Cette thèse trouvera un écho saisissant chez Sartre dans <em>L&apos;existentialisme est un humanisme</em>, 1946. « L&apos;existence précède l&apos;essence », écrit-il : l&apos;homme se définit après avoir existé, et non avant. L&apos;humain est donc condamné à être libre, condamné à se choisir. Cette liberté pose alors une question vertigineuse. Si l&apos;humanité peut tout devenir, comment éviter qu&apos;elle ne devienne inhumaine ? Ainsi l&apos;humanité serait moins une donnée qu&apos;un projet. Une promesse que chaque individu et chaque civilisation doivent sans cesse honorer ou trahir.
              </p>
              <p className="text-pr-gray-mid text-xs mt-3 italic">≈ 250 mots, 2 références qui dialoguent (Pic de la Mirandole + Sartre).</p>
            </div>
          </PRCard>

          <PRCard title="Exemple 2 : « La barbarie comme possibilité ordinaire de l'humain »">
            <div className="bg-pr-gray-bg rounded-xl p-5 text-sm md:text-base leading-relaxed">
              <p className="font-dm-serif text-pr-black text-base mb-1">
                <strong>La barbarie comme possibilité ordinaire de l&apos;humain</strong>
                <span className="italic font-dm-sans text-pr-gray-dark"> (l&apos;inhumanité ne vient pas du dehors, elle gît au cœur même de l&apos;humain)</span>
              </p>
              <p>
                La barbarie n&apos;est pas l&apos;envers extérieur de la civilisation. Elle en est la possibilité interne. Longtemps on a pensé que le monstre nazi devait être un fanatique extraordinaire, un démon. Comme si la cruauté de masse exigeait une nature exceptionnelle. Cette intuition rassurante s&apos;effondre au procès de Jérusalem en 1961. Hannah Arendt, dans <em>Eichmann à Jérusalem</em>, 1963, forge alors la formule décisive : la « banalité du mal ». Eichmann n&apos;est pas un sadique. C&apos;est un fonctionnaire médiocre, ponctuel, soucieux de bien faire son travail. Il a organisé la déportation de millions de Juifs sans haine particulière, simplement en obéissant. Le mal radical, montre Arendt, ne suppose ni perversité ni idéologie ardente. Il suffit d&apos;une absence de pensée, d&apos;un refus de juger par soi-même. Cette thèse sera tragiquement confirmée par l&apos;expérience de Stanley Milgram, publiée en 1974 dans <em>Soumission à l&apos;autorité</em>. Placés en situation, deux tiers des sujets ordinaires acceptent d&apos;infliger des décharges électriques pouvant tuer un inconnu. Sur simple injonction d&apos;un homme en blouse blanche. La cruauté ne demande pas de cruels. Elle demande des conformistes. L&apos;humanité porte donc en elle, en permanence, ce point de bascule où l&apos;obéissance dévore la conscience. Ainsi l&apos;inhumain n&apos;est pas un monstre tapi à l&apos;extérieur de la cité. C&apos;est une potentialité ordinaire, qui ne réclame pour s&apos;actualiser que la démission du jugement.
              </p>
              <p className="text-pr-gray-mid text-xs mt-3 italic">≈ 270 mots, 2 références qui dialoguent (Arendt + Milgram).</p>
            </div>
          </PRCard>

          <PRCard title="Banque de parapersos prêts à apprendre">
            <div className="space-y-5">
              <p className="text-sm md:text-base">
                Six paragraphes supplémentaires couvrant les autres sous-thèmes du programme.
                Chacun mobilise deux références qui dialoguent et respecte les règles de style :
                pas de tirets longs en corps, pas de termes étrangers non traduits, phrases courtes,
                ton affirmatif, moins de 300 mots.
              </p>

              <Paraperso
                sousTheme="Sous-thème 2 · L'humanité comme construction"
                titre="L'humanité s'invente par la technique"
                glose="l'humain n'a pas de nature donnée, il se fait par les outils qu'il fabrique"
                refs="Leroi-Gourhan + Mauss"
                motCount="≈ 250 mots"
              >
                L&apos;humain n&apos;est pas humain par sa biologie seule. Il le devient par les gestes qu&apos;il invente.
                Avant d&apos;être un être pensant, il est un être qui taille, attache, cuit, transmet. La main et l&apos;outil
                libèrent la bouche, qui se met à parler. Le geste ouvre la pensée, et non l&apos;inverse.
                Cette intuition se trouve magnifiquement déployée dans <em>Le Geste et la parole</em>, 1964-1965, du
                paléoanthropologue André Leroi-Gourhan. Il y montre que l&apos;hominisation n&apos;est pas un saut soudain
                de l&apos;animal à l&apos;homme. C&apos;est un long processus où la station debout libère les mains, où les mains
                taillent les outils, où les outils prolongent le geste, où le geste extériorise la mémoire.
                Chaque innovation technique est aussi une innovation cognitive. L&apos;humain ne précède pas ses outils :
                il se construit avec eux.
                Marcel Mauss avait pressenti cette idée dès <em>Les Techniques du corps</em>, 1934. Marcher, nager,
                dormir, accoucher : aucune de ces conduites n&apos;est purement naturelle. Toutes sont apprises, transmises,
                codées culturellement. Le corps lui-même est une œuvre de civilisation.
                Ainsi l&apos;humanité n&apos;est pas un fait que l&apos;on hérite. C&apos;est un répertoire de gestes que l&apos;on apprend.
                Et chaque génération doit, pour se faire humaine, hériter du long travail de celles qui l&apos;ont précédée.
              </Paraperso>

              <Paraperso
                sousTheme="Sous-thème 4 · L'humanité face à la nature"
                titre="L'humanité responsable des générations à venir"
                glose="l'éthique classique, fondée sur le présent, ne suffit plus à l'âge de la puissance technique"
                refs="Jonas + Latour"
                motCount="≈ 270 mots"
              >
                Pendant des millénaires, la morale s&apos;est construite à hauteur d&apos;humain. Mes actes engagent ceux qui
                m&apos;entourent, ici et maintenant. Mais la puissance technique a tout changé. Mes choix d&apos;aujourd&apos;hui peuvent
                rendre la Terre invivable pour des humains qui ne sont pas encore nés. L&apos;espace de mes responsabilités
                s&apos;est démesurément élargi.
                Cette mutation impose une refondation de la morale. C&apos;est ce que tente le philosophe Hans Jonas dans
                <em> Le Principe responsabilité</em>, 1979. Il y propose un nouvel impératif moral, formulé pour notre âge :
                agis de telle sorte que les effets de ton action soient compatibles avec la permanence d&apos;une vie
                authentiquement humaine sur Terre. Là où Kant pensait l&apos;individu face à sa loi intérieure, Jonas pense
                l&apos;humanité entière face à son avenir biologique.
                Cette pensée s&apos;éclaire dans le miroir contemporain de l&apos;écologie. Bruno Latour, dans
                <em> Face à Gaïa</em>, 2015, montre que la Terre n&apos;est plus le décor neutre de l&apos;histoire humaine.
                Elle est devenue un acteur, qui réagit, qui se rétracte, qui menace. La modernité reposait sur la
                séparation nature et culture. L&apos;anthropocène la rend intenable.
                Ainsi l&apos;humanité du XXI<sup>e</sup> siècle ne peut plus se penser comme cette communauté autonome,
                indifférente au vivant qui l&apos;entoure. Elle doit devenir gardienne, non plus seulement de ses semblables,
                mais de l&apos;habitat même qui rend possible toute humanité future.
              </Paraperso>

              <Paraperso
                sousTheme="Sous-thème 5 · L'humanité à l'épreuve de la technique"
                titre="La honte prométhéenne face aux machines"
                glose="l'humain se sent diminué par la perfection de ses propres créations"
                refs="Anders + Blade Runner (Ridley Scott)"
                motCount="≈ 265 mots"
              >
                L&apos;humain a longtemps été fier de ses outils. Il en allait de sa supériorité sur l&apos;animal et de sa
                domination du monde. Mais quelque chose a basculé au XX<sup>e</sup> siècle. Les machines sont devenues plus
                puissantes, plus précises, plus rapides que l&apos;humain qui les a faites. Et l&apos;humain, soudain, se sent
                inférieur à ce qu&apos;il fabrique.
                Le philosophe Günther Anders a saisi ce renversement avec une formule fulgurante. Dans
                <em> L&apos;Obsolescence de l&apos;homme</em>, 1956, il l&apos;appelle la « honte prométhéenne ». L&apos;humain a honte
                d&apos;être né et non fabriqué, fragile et non parfait, mortel et non remplaçable. Il se mesure à ses produits,
                et ne se trouve plus à la hauteur. Le rapport classique se renverse : l&apos;humain devient le maillon faible,
                le résidu archaïque d&apos;un monde devenu machinique.
                Cette intuition se vérifie dans les imaginaires contemporains. Le film <em>Blade Runner</em> de Ridley
                Scott, 1982, met en scène des « répliquants », androïdes plus humains que les humains. Plus intenses,
                plus émus, plus désirants. La question devient vertigineuse : qu&apos;est-ce qui distingue encore l&apos;humain de
                ce qu&apos;il a fabriqué pour le surpasser ?
                Ainsi la technique ne menace pas seulement nos emplois ou notre environnement. Elle menace notre estime
                de nous-mêmes. Elle nous oblige à redéfinir ce qui mérite encore d&apos;être appelé humain, à l&apos;heure où les
                machines empruntent nos visages.
              </Paraperso>

              <Paraperso
                sousTheme="Sous-thème 6 · La solidarité et le commun"
                titre="Le visage d'autrui comme commencement de l'humanité"
                glose="l'humanité ne commence pas dans la pensée, mais dans la rencontre éthique d'un autre"
                refs="Levinas + Kant"
                motCount="≈ 265 mots"
              >
                L&apos;humanité ne se découvre pas dans un raisonnement abstrait. Elle s&apos;éprouve dans une rencontre.
                Avant de réfléchir à ce qui m&apos;unit aux autres, je rencontre quelqu&apos;un. Un visage me regarde. Et ce
                regard m&apos;oblige, avant tout discours, à le reconnaître comme semblable.
                C&apos;est l&apos;intuition fondatrice de la philosophie d&apos;Emmanuel Levinas. Dans <em>Totalité et infini</em>, 1961,
                il propose une éthique radicale, fondée non sur les principes mais sur la rencontre. Le visage de
                l&apos;autre, pour lui, n&apos;est pas un objet que je perçois. C&apos;est une présence qui m&apos;interpelle. Sans dire un
                mot, le visage me dit : « Tu ne tueras pas. » Cette injonction précède toute morale réfléchie. Elle est
                l&apos;acte de naissance même de l&apos;humanité en moi.
                Cette pensée a une portée politique immédiate. Elle se prolonge chez Kant qui, dans
                <em> Vers la paix perpétuelle</em>, 1795, théorise l&apos;hospitalité universelle. Tout étranger, dit-il, a le
                droit de ne pas être traité en ennemi à son arrivée sur le sol d&apos;un autre. L&apos;humanité n&apos;est pas une
                affinité de proximité. Elle est cette obligation envers celui qui vient de loin et que je ne connais pas.
                Ainsi l&apos;humanité ne se conjugue pas au pluriel des mêmes. Elle se conjugue au singulier de la rencontre
                avec celui qui n&apos;est pas moi. Et c&apos;est précisément dans cet écart que naît, à chaque fois, le devoir
                d&apos;être humain.
              </Paraperso>

              <Paraperso
                sousTheme="Sous-thème 7 · Les frontières de l'humanité"
                titre="La déshumanisation comme préalable à la violence de masse"
                glose="rendre l'autre non humain est la condition rendue nécessaire à la cruauté à grande échelle"
                refs="Levi + Fanon"
                motCount="≈ 290 mots"
              >
                On ne peut tuer en masse des semblables. Il faut d&apos;abord cesser de les voir comme tels. Toutes les
                violences collectives historiques ont été précédées d&apos;un même travail symbolique : transformer l&apos;autre
                en figure non humaine. En vermine, en bête, en chiffre, en déchet. La déshumanisation n&apos;est pas une
                conséquence de la violence. Elle en est la condition.
                Cette mécanique a été décrite avec une lucidité bouleversante par Primo Levi dans
                <em> Si c&apos;est un homme</em>, 1947. Dès l&apos;arrivée à Auschwitz, le numéro tatoué remplace le nom.
                Les vêtements identiques effacent les visages. Le langage allemand devient impossible à apprendre, donc
                à comprendre, donc à parler. Tout est conçu pour que les déportés ne soient plus, aux yeux des bourreaux
                comme aux leurs, des humains. Le titre même du livre, sous forme de question retournée au lecteur, expose
                cette dissolution organisée.
                Le mécanisme se retrouve dans les paroles coloniales étudiées par Frantz Fanon dans
                <em> Les Damnés de la terre</em>, 1961. Le colonisé est décrit comme animal, primitif, hors langage,
                hors temps. Cette grammaire raciste rend possible l&apos;exploitation, la torture, le meurtre. Elle prépare
                la conscience à ne plus se révolter contre le sort de l&apos;autre.
                Ainsi la frontière entre humain et inhumain n&apos;est pas un fait. C&apos;est une construction politique. Et
                chaque fois que cette frontière est tracée pour exclure une catégorie, l&apos;humanité tout entière s&apos;amincit.
                Elle ne se réduit pas à ceux qu&apos;on chasse hors de son cercle. Elle se diminue chez ceux qui les en
                chassent.
              </Paraperso>

              <Paraperso
                sousTheme="Sous-thème 8 · L'humanité comme idéal"
                titre="La perfectibilité, grandeur et danger de l'humain"
                glose="la capacité de progresser indéfiniment est aussi celle de se corrompre indéfiniment"
                refs="Rousseau + Condorcet"
                motCount="≈ 285 mots"
              >
                L&apos;humain n&apos;est pas figé dans une nature. Il peut se transformer, apprendre, se cultiver, se dépasser.
                Cette capacité distingue son histoire de celle de toutes les autres espèces. Mais elle a un revers.
                Si l&apos;humain peut s&apos;élever sans limite, il peut aussi se dégrader sans limite. La perfectibilité n&apos;est pas
                seulement la promesse du progrès. Elle est aussi la possibilité permanente de la chute.
                Jean-Jacques Rousseau a forgé ce concept décisif dans
                <em> le Discours sur l&apos;origine de l&apos;inégalité parmi les hommes</em>, 1755. Il y nomme « perfectibilité »
                cette « faculté qui développe successivement toutes les autres » et qui distingue radicalement l&apos;humain
                de l&apos;animal. Mais Rousseau, contrairement aux Lumières optimistes, refuse de la célébrer naïvement.
                Cette même faculté qui a permis la civilisation, l&apos;art, la science, est aussi celle qui a engendré la
                propriété, l&apos;inégalité, la domination, la guerre. La perfectibilité n&apos;est pas neutre. Elle dépend des
                conditions sociales dans lesquelles elle s&apos;exerce.
                Une lecture plus confiante reprendra cette intuition à la fin du XVIII<sup>e</sup> siècle. Condorcet,
                dans <em>l&apos;Esquisse d&apos;un tableau historique des progrès de l&apos;esprit humain</em>, 1795, écrite sous la
                Terreur alors qu&apos;il est traqué, fait de la perfectibilité le moteur d&apos;une marche inéluctable vers
                l&apos;émancipation. La science, la raison, l&apos;éducation feront, à terme, reculer l&apos;ignorance et l&apos;oppression.
                Ainsi l&apos;humanité se définit par cette possibilité ouverte. Mais aucune perfection ne lui est promise.
                Tout reste à conquérir, et tout peut se perdre.
              </Paraperso>
            </div>
          </PRCard>

          <PRCard title="Organisation : les 8 sous-thèmes pour vos parapersos">
            <ol className="space-y-1.5 text-sm md:text-base list-decimal list-inside marker:text-pr-black marker:font-dm-serif">
              <li>Définir l&apos;humanité (essence, nature, propre de l&apos;homme)</li>
              <li>L&apos;humanité comme construction (culture, langage, technique, hominisation)</li>
              <li>L&apos;inhumanité au cœur de l&apos;humain (barbarie, totalitarismes, banalité du mal)</li>
              <li>L&apos;humanité face à la nature (écologie, anthropocène, animalité)</li>
              <li>L&apos;humanité à l&apos;épreuve de la technique (transhumanisme, IA, posthumanisme)</li>
              <li>La solidarité et le commun (droits humains, hospitalité, fraternité)</li>
              <li>Les frontières de l&apos;humanité (déshumanisation, racisme, altérité)</li>
              <li>L&apos;humanité comme idéal (perfectibilité, progrès moral, émancipation)</li>
            </ol>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/methodes">
              <Button className="bg-pr-black hover:bg-pr-black-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des méthodes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodesParagraphesJugerPage;
