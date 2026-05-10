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

const Paraperso: React.FC<{
  num: string;
  title: string;
  author: string;
  oeuvre: string;
  date: string;
  body: React.ReactNode;
}> = ({ num, title, author, oeuvre, date, body }) => (
  <div className="border-l-2 border-pr-orange pl-4 py-2">
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-dm-serif text-pr-orange text-base">{num}</span>
      <h4 className="font-dm-serif text-base text-pr-black">{title}</h4>
    </div>
    <p className="text-xs text-pr-orange-dark mb-1">
      {author}, <em>{oeuvre}</em>, {date}
    </p>
    <p className="text-sm leading-relaxed">{body}</p>
  </div>
);

const Axis: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="font-dm-serif text-lg text-pr-black border-b border-pr-gray-light pb-1">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const UtiliserExemplesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Utiliser efficacement les exemples
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Constituer un stock de 30 parapersos sur <em>l&apos;humanité</em> et les
              mobiliser avec précision le jour J.
            </p>
          </div>

          <PRCard number="01" title="Pourquoi un stock de parapersos ?">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le jour du concours, vous disposez de quatre heures et d&apos;un sujet
                inconnu. La différence entre une copie 8/20 et une copie 16/20 ne tient
                presque jamais à l&apos;intelligence du candidat. Elle tient à la qualité
                des exemples mobilisés et à la précision avec laquelle ils sont
                articulés à l&apos;argument.
              </p>
              <p>
                Les jurys d&apos;HEC, ESSEC, ESCP, EM Lyon et EDHEC sont unanimes sur ce
                point&nbsp;: ils veulent des références <strong>précises</strong> (auteur,
                œuvre, date) et <strong>mobilisées</strong> (expliquées, articulées),
                pas de l&apos;érudition floue ni des noms jetés en l&apos;air.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">L&apos;intuition centrale</h3>
                <p>
                  Improviser des exemples le jour J est une stratégie perdante. Préparer
                  un <em>stock</em> de 30 parapersos rédigés à l&apos;avance, appris,
                  mobilisables, transforme la dissertation en exercice d&apos;assemblage
                  contrôlé.
                </p>
              </div>
              <p>
                Un paraperso est un paragraphe autonome de 250 à 300 mots, organisé
                autour d&apos;<strong>une idée directrice</strong> et d&apos;
                <strong>une à deux références sourcées</strong>, prêt à être inséré
                presque tel quel dans une copie. La méthode est dite des
                <em> parapersos</em>&nbsp;: c&apos;est l&apos;une des trois grandes méthodes
                de dissertation enseignées en prépa.
              </p>
            </div>
          </PRCard>

          <PRCard number="02" title="La règle des 30 — densité, variété, transversalité">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Pourquoi 30, et pas 10 ni 50&nbsp;? Le calcul est pragmatique. Une
                dissertation de quatre heures mobilise en moyenne <strong>6 à 8
                parapersos</strong> (un par sous-partie, plus l&apos;introduction et la
                conclusion). Un stock de 30 garantit une marge de sécurité&nbsp;: même
                si la moitié de votre stock ne colle pas au sujet tombé, il vous reste
                de quoi traiter chaque sous-partie.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Densité</strong>. Chaque paraperso doit valoir un point sur 20. Pas d&apos;exemples mous, pas de paraphrase de manuel. Une référence puissante, expliquée jusqu&apos;à sa thèse.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Variété des registres</strong>. Mélanger philosophie classique (Aristote, Kant, Rousseau), littérature (Pascal, Montaigne, Levi), sciences humaines (Arendt, Foucault, Lévi-Strauss), arts (Goya, films), actualité contemporaine (anthropocène, IA, biotech).</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Transversalité</strong>. Couvrir les 8 sous-axes du programme «&nbsp;humanité&nbsp;»&nbsp;: essence, construction, inhumanité, nature, technique, solidarité, frontières, idéal. Un paraperso bien construit doit pouvoir resservir sur plusieurs sujets.</li>
              </ul>
              <p>
                Astuce de tri&nbsp;: classez vos 30 parapersos par sous-axe, puis dans
                chaque sous-axe par <em>force argumentative</em>. Les 10 plus forts
                doivent être sur-appris (vous les ressortez au mot près). Les 20 autres
                sont des compléments, mémorisés à 80%.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Anatomie d'un paraperso efficace">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Un bon paraperso obéit à une structure stable en
                <strong> cinq temps</strong>. Cette régularité est ce qui le rend
                <em> apprenable</em> et <em> reconnaissable</em> par le correcteur.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Phrase d&apos;annonce</strong>. Une à deux phrases qui posent l&apos;idée directrice, ton affirmatif. Pas de question rhétorique d&apos;ouverture.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Développement de l&apos;idée</strong>. 3 à 5 phrases courtes qui déroulent l&apos;argument. Définir, opposer, graduer.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Introduction de la référence</strong>. Une transition naturelle&nbsp;: «&nbsp;cette intuition trouve son écho chez…&nbsp;», «&nbsp;à cette question, X répond…&nbsp;».</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Référence expliquée</strong>. Auteur + <em>œuvre en italiques</em> + date. 4 à 6 phrases pour exposer la thèse, sa logique, et la relier à l&apos;idée directrice. Citation courte autorisée, en français, moins de 15 mots.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Phrase de conclusion</strong>. Reformule l&apos;idée directrice, légèrement déplacée par la référence. On doit sentir qu&apos;on a <em>gagné un cran</em>.</li>
              </ul>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Règles de style non négociables</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Phrases courtes ou moyennes (5 à 25 mots). Aucune phrase de plus de 30 mots.</li>
                  <li>• 1 à 2 références par paraperso. Si 2, elles dialoguent (s&apos;opposent, se complètent).</li>
                  <li>• Citation toujours sourcée, courte, en français.</li>
                  <li>• 270 à 300 mots maximum. Au-delà, couper.</li>
                </ul>
              </div>
            </div>
          </PRCard>

          <PRCard number="04" title="Apprendre 30 parapersos en 4 semaines">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                La rédaction prend du temps (1 à 2h par paraperso bien fait). Mais c&apos;est
                <strong> l&apos;apprentissage</strong> qui décide de la valeur jour J. Un
                paraperso non sur-appris s&apos;effondre sous la pression. Voici la méthode
                en quatre semaines.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Semaine 1 — Rédaction</strong>. Écrire les 30 parapersos en suivant la structure des 5 temps. Une fiche par paraperso&nbsp;: titre, auteur+œuvre+date, mots-clés, citation courte.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Semaine 2 — Récitation orale</strong>. Réciter chaque paraperso à voix haute, fiche cachée. Repérer les trous. Reformuler avec ses mots avant de remettre la version finale.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Semaine 3 — Espacement (Ebbinghaus)</strong>. Réviser à J+1, J+3, J+7. Un paraperso revu trois fois espacées tient en mémoire long terme.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Semaine 4 — Mise en situation</strong>. Tirer un sujet au hasard, choisir 6 parapersos pertinents, écrire l&apos;intro et un paragraphe en conditions réelles. Chronomètre&nbsp;: 12 minutes par paraperso à l&apos;écrit.</li>
              </ul>
              <p>
                <strong>Test ultime.</strong> Vous pouvez restituer le paraperso au mot
                près, sans support, en moins de 90 secondes à l&apos;oral. Si oui&nbsp;: il
                est dans votre stock actif. Si non&nbsp;: revenez à la fiche.
              </p>
              <p>
                Astuce&nbsp;: travaillez en binôme. À deux, vous vous interrogez
                mutuellement, ce qui simule la pression et révèle les paraphrases
                molles.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Le stock de 30 parapersos sur l'humanité">
            <div className="space-y-6 text-sm md:text-base">
              <p>
                Voici 30 parapersos condensés (idée directrice + référence + fil
                argumentatif), classés par sous-axe. Chaque entrée est la version
                <em> graine</em>&nbsp;: à vous de la déployer en paraperso complet de
                270 à 300 mots, en suivant la structure de la carte 03.
              </p>

              <Axis title="A. Définir l'humanité (essence et indétermination)">
                <Paraperso
                  num="01"
                  title="L'humain comme animal politique"
                  author="Aristote"
                  oeuvre="Politique"
                  date="IVe siècle av. J.-C."
                  body={<>L&apos;humain ne réalise pleinement sa nature que dans la cité, par le <em>logos</em> qui distingue le juste de l&apos;injuste. Hors de la communauté délibérante, on n&apos;est «&nbsp;qu&apos;une bête ou un dieu&nbsp;». L&apos;humanité est ici une essence dotée de fins propres.</>}
                />
                <Paraperso
                  num="02"
                  title="L'indétermination comme fondement de la dignité"
                  author="Pic de la Mirandole"
                  oeuvre="Discours de la dignité de l'homme"
                  date="1486"
                  body={<>Dieu n&apos;a donné à Adam «&nbsp;ni place déterminée, ni visage propre&nbsp;»&nbsp;: à lui de se modeler. La nature humaine consiste à n&apos;avoir pas de nature fixe. Cette plasticité radicale fonde la dignité.</>}
                />
                <Paraperso
                  num="03"
                  title="L'existence précède l'essence"
                  author="Sartre"
                  oeuvre="L'existentialisme est un humanisme"
                  date="1946"
                  body={<>L&apos;humain surgit dans le monde sans définition, puis se définit par ses choix. «&nbsp;L&apos;homme est condamné à être libre.&nbsp;» L&apos;humanité est un projet à inventer, jamais une donnée à recevoir.</>}
                />
              </Axis>

              <Axis title="B. L'humain et l'animal">
                <Paraperso
                  num="04"
                  title="L'animal-machine, fondement de la modernité scientifique"
                  author="Descartes"
                  oeuvre="Discours de la méthode, V"
                  date="1637"
                  body={<>L&apos;animal n&apos;a pas d&apos;âme, ses mouvements s&apos;expliquent comme ceux d&apos;une horloge. Le langage articulé est le critère décisif. L&apos;humain devient «&nbsp;maître et possesseur&nbsp;» de la nature.</>}
                />
                <Paraperso
                  num="05"
                  title="L'orgueil humain destitué"
                  author="Montaigne"
                  oeuvre="Essais, II, 12 (Apologie de Raimond Sebond)"
                  date="1580"
                  body={<>«&nbsp;Quand je me joue à ma chatte, qui sçait si elle ne se passe plus de moy que je ne fay d&apos;elle&nbsp;?&nbsp;» La frontière humain/animal est une présomption, non une donnée naturelle. La différence est de degré, non de nature.</>}
                />
              </Axis>

              <Axis title="C. L'humanité face à la technique">
                <Paraperso
                  num="06"
                  title="La technique comme arraisonnement du réel"
                  author="Heidegger"
                  oeuvre="La Question de la technique"
                  date="1953"
                  body={<>La technique moderne ne se contente pas d&apos;outiller&nbsp;: elle met le réel en demeure de se livrer comme «&nbsp;fonds disponible&nbsp;». L&apos;humain risque d&apos;y perdre son rapport au monde et à lui-même.</>}
                />
                <Paraperso
                  num="07"
                  title="La honte prométhéenne"
                  author="Günther Anders"
                  oeuvre="L'Obsolescence de l'homme"
                  date="1956"
                  body={<>L&apos;humain rougit devant ses machines. Bombe atomique et automatisation creusent un «&nbsp;décalage prométhéen&nbsp;» entre ce qu&apos;il fabrique et ce qu&apos;il peut imaginer. La technique nous dépasse.</>}
                />
              </Axis>

              <Axis title="D. La dignité humaine">
                <Paraperso
                  num="08"
                  title="L'humanité comme fin en soi"
                  author="Kant"
                  oeuvre="Fondements de la métaphysique des mœurs"
                  date="1785"
                  body={<>«&nbsp;Agis de telle sorte que tu traites l&apos;humanité, dans ta personne comme dans celle d&apos;autrui, toujours comme une fin, jamais simplement comme un moyen.&nbsp;» La dignité s&apos;oppose au prix.</>}
                />
                <Paraperso
                  num="09"
                  title="La dignité comme rempart juridique post-Auschwitz"
                  author="ONU"
                  oeuvre="Déclaration universelle des droits de l'homme, art. 1"
                  date="10 décembre 1948"
                  body={<>«&nbsp;Tous les êtres humains naissent libres et égaux en dignité et en droits.&nbsp;» Après la déchéance industrielle des humains, la dignité quitte le terrain métaphysique pour devenir le socle non négociable du droit.</>}
                />
              </Axis>

              <Axis title="E. L'altérité et la rencontre de l'autre">
                <Paraperso
                  num="10"
                  title="Le barbare est celui qui croit à la barbarie"
                  author="Lévi-Strauss"
                  oeuvre="Race et histoire"
                  date="1952"
                  body={<>L&apos;ethnocentrisme prend son particulier pour l&apos;universel. La diversité des cultures n&apos;est pas une hiérarchie. Les cultures sont incomparables, comme des langues, et chacune répond à sa manière aux problèmes de l&apos;existence.</>}
                />
                <Paraperso
                  num="11"
                  title="Le visage d'autrui m'oblige"
                  author="Levinas"
                  oeuvre="Totalité et infini"
                  date="1961"
                  body={<>Avant tout choix, le visage du prochain me dit «&nbsp;tu ne tueras point&nbsp;». L&apos;éthique précède l&apos;ontologie. L&apos;humanité commence dans l&apos;exposition à l&apos;autre, irréductible à mes catégories.</>}
                />
              </Axis>

              <Axis title="F. La perfectibilité et le progrès">
                <Paraperso
                  num="12"
                  title="La perfectibilité, don ambigu"
                  author="Rousseau"
                  oeuvre="Discours sur l'origine de l'inégalité"
                  date="1755"
                  body={<>L&apos;humain est cette «&nbsp;faculté qui développe successivement toutes les autres&nbsp;». Mais cette plasticité élève autant qu&apos;elle dégrade&nbsp;: la civilisation produit aussi l&apos;inégalité et la guerre.</>}
                />
                <Paraperso
                  num="13"
                  title="La foi républicaine dans le progrès indéfini"
                  author="Condorcet"
                  oeuvre="Esquisse d'un tableau historique des progrès de l'esprit humain"
                  date="1795"
                  body={<>Écrit caché sous la Terreur. Le progrès est sans terme assignable. L&apos;instruction publique est son moteur. Trois inégalités à abolir&nbsp;: entre nations, entre classes, entre sexes.</>}
                />
              </Axis>

              <Axis title="G. L'humanité face à la nature (anthropocène)">
                <Paraperso
                  num="14"
                  title="Une éthique pour les générations futures"
                  author="Hans Jonas"
                  oeuvre="Le Principe responsabilité"
                  date="1979"
                  body={<>«&nbsp;Agis de telle sorte que les effets de ton action soient compatibles avec la permanence d&apos;une vie authentiquement humaine sur terre.&nbsp;» Le pouvoir technique exige une éthique élargie au futur.</>}
                />
                <Paraperso
                  num="15"
                  title="Apprendre à atterrir"
                  author="Bruno Latour"
                  oeuvre="Face à Gaïa"
                  date="2015"
                  body={<>Gaïa n&apos;est pas une mère nourricière mais un système qui réagit. L&apos;anthropocène brise le grand partage moderne nature/culture. L&apos;humanité doit «&nbsp;atterrir&nbsp;»&nbsp;: réapprendre ce que c&apos;est qu&apos;habiter la Terre.</>}
                />
              </Axis>

              <Axis title="H. Le corps humain">
                <Paraperso
                  num="16"
                  title="Le corps appris"
                  author="Marcel Mauss"
                  oeuvre="Les Techniques du corps"
                  date="1934"
                  body={<>Marcher, dormir, accoucher&nbsp;: aucun geste n&apos;est universel. Le corps est notre «&nbsp;premier objet et moyen technique&nbsp;». Il est culturel avant d&apos;être biologique. Naissance du concept d&apos;<em>habitus</em>.</>}
                />
                <Paraperso
                  num="17"
                  title="Le corps comme effet du pouvoir"
                  author="Michel Foucault"
                  oeuvre="Surveiller et punir"
                  date="1975"
                  body={<>L&apos;école, la caserne, l&apos;usine produisent un corps «&nbsp;docile et utile&nbsp;». La biopolitique étend cette emprise aux populations. Le corps moderne est l&apos;effet de dispositifs, non un donné naturel.</>}
                />
              </Axis>

              <Axis title="I. L'humain et le langage">
                <Paraperso
                  num="18"
                  title="La langue découpe le monde"
                  author="Saussure"
                  oeuvre="Cours de linguistique générale"
                  date="1916"
                  body={<>Le signe linguistique est arbitraire. Chaque langue propose un découpage du réel («&nbsp;mouton&nbsp;» recouvre <em>sheep</em> et <em>mutton</em>). L&apos;humain qui parle hérite d&apos;une cartographie du monde avant de penser.</>}
                />
                <Paraperso
                  num="19"
                  title="Le langage fonde le sujet"
                  author="Émile Benveniste"
                  oeuvre="Problèmes de linguistique générale"
                  date="1966"
                  body={<>«&nbsp;C&apos;est dans et par le langage que l&apos;homme se constitue comme sujet.&nbsp;» Pas de «&nbsp;Je&nbsp;» sans «&nbsp;Tu&nbsp;»&nbsp;: la subjectivité est dialogique. Le <em>cogito</em> lui-même suppose une langue.</>}
                />
              </Axis>

              <Axis title="J. L'humain face à la mort">
                <Paraperso
                  num="20"
                  title="La mort n'est rien pour nous"
                  author="Épicure"
                  oeuvre="Lettre à Ménécée"
                  date="vers 300 av. J.-C."
                  body={<>«&nbsp;Quand nous sommes, la mort n&apos;est pas&nbsp;; quand la mort est, nous ne sommes plus.&nbsp;» La peur de la mort est un mal surajouté que la raison peut dissoudre. Sagesse de la finitude, pas désir d&apos;immortalité.</>}
                />
                <Paraperso
                  num="21"
                  title="La mort de l'autre, scandale absolu"
                  author="Vladimir Jankélévitch"
                  oeuvre="La Mort"
                  date="1966"
                  body={<>Trois personnes de la mort. La mort à la troisième personne (statistique) est lointaine. Ma mort est indicible. La mort du proche, à la deuxième personne, est l&apos;événement qu&apos;aucune philosophie ne console.</>}
                />
              </Axis>

              <Axis title="K. L'humanisme et ses critiques">
                <Paraperso
                  num="22"
                  title="L'humain à dépasser"
                  author="Nietzsche"
                  oeuvre="Ainsi parlait Zarathoustra"
                  date="1883"
                  body={<>«&nbsp;L&apos;homme est quelque chose qui doit être surmonté.&nbsp;» L&apos;humanisme moderne sacralise la faiblesse, prolonge la morale chrétienne. La mort de Dieu doit emporter «&nbsp;l&apos;Homme&nbsp;» comme dernière idole.</>}
                />
                <Paraperso
                  num="23"
                  title="L'homme, invention récente"
                  author="Michel Foucault"
                  oeuvre="Les Mots et les Choses"
                  date="1966"
                  body={<>«&nbsp;L&apos;homme est une invention dont l&apos;archéologie de notre pensée montre aisément la date récente. Et peut-être la fin prochaine.&nbsp;» «&nbsp;L&apos;Homme&nbsp;» comme catégorie est née au XVIIIe siècle.</>}
                />
              </Axis>

              <Axis title="L. Devenir humain (éducation et culture)">
                <Paraperso
                  num="24"
                  title="Apprendre à vivre"
                  author="Rousseau"
                  oeuvre="Émile, ou De l'éducation"
                  date="1762"
                  body={<>Trois maîtres&nbsp;: la nature, les choses, les hommes. Éducation négative avant 12 ans. «&nbsp;Vivre est le métier que je veux lui apprendre.&nbsp;» Faire un humain avant de faire un savant ou un citoyen.</>}
                />
                <Paraperso
                  num="25"
                  title="Aimer le monde assez pour le transmettre"
                  author="Hannah Arendt"
                  oeuvre="La Crise de la culture, « La crise de l'éducation »"
                  date="1961"
                  body={<>«&nbsp;L&apos;éducation est le point où se décide si nous aimons assez le monde pour en assumer la responsabilité.&nbsp;» Transmettre n&apos;est pas figer&nbsp;: c&apos;est offrir un monde aux nouveaux venus.</>}
                />
              </Axis>

              <Axis title="M. L'inhumain au cœur de l'humain (barbarie, totalitarismes)">
                <Paraperso
                  num="26"
                  title="La banalité du mal"
                  author="Hannah Arendt"
                  oeuvre="Eichmann à Jérusalem"
                  date="1963"
                  body={<>Eichmann n&apos;est pas un sadique. C&apos;est un fonctionnaire ordinaire. Le mal radical ne suppose pas la perversité. Il suffit d&apos;une absence de pensée, d&apos;un refus de juger par soi-même.</>}
                />
                <Paraperso
                  num="27"
                  title="La zone grise"
                  author="Primo Levi"
                  oeuvre="Si c'est un homme"
                  date="1947"
                  body={<>Le camp ne se réduit pas à l&apos;opposition bourreau/victime. Une «&nbsp;zone grise&nbsp;» de complicités contraintes (kapos, Sonderkommando) brouille la frontière morale. L&apos;humanité s&apos;effrite par compromis.</>}
                />
                <Paraperso
                  num="28"
                  title="L'obéissance et la cruauté ordinaire"
                  author="Stanley Milgram"
                  oeuvre="Soumission à l'autorité"
                  date="1974"
                  body={<>Deux tiers des sujets ordinaires acceptent d&apos;infliger des décharges potentiellement mortelles à un inconnu, sur simple injonction d&apos;une autorité. La cruauté ne demande pas de cruels. Elle demande des conformistes.</>}
                />
              </Axis>

              <Axis title="N. La solidarité et le commun">
                <Paraperso
                  num="29"
                  title="L'hospitalité universelle"
                  author="Kant"
                  oeuvre="Vers la paix perpétuelle"
                  date="1795"
                  body={<>Tout étranger qui arrive sur un sol étranger a droit à n&apos;être pas traité en ennemi. La Terre étant ronde et finie, les humains se rencontreront nécessairement. L&apos;hospitalité est le fondement du droit cosmopolitique.</>}
                />
                <Paraperso
                  num="30"
                  title="Je me révolte, donc nous sommes"
                  author="Albert Camus"
                  oeuvre="L'Homme révolté"
                  date="1951"
                  body={<>La révolte est l&apos;acte par lequel je découvre que ma dignité n&apos;est pas seulement la mienne&nbsp;: en disant non, je porte la dignité de tous. La solidarité naît de la révolte assumée, non d&apos;une bienveillance abstraite.</>}
                />
              </Axis>

              <div className="bg-pr-orange-pale rounded-xl p-4 mt-4">
                <p className="text-sm">
                  <strong>Mémo.</strong> Ces 30 entrées sont des <em>graines</em>. Pour
                  chacune, écrivez le paraperso complet de 270 à 300 mots en suivant la
                  structure de la carte 03. C&apos;est cette version déployée et apprise
                  qui sera mobilisable le jour J.
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Mobiliser le jour J — précision et timing">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Le sujet tombe à 8h. Vous avez quatre heures. Voici la séquence.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>0 à 30 min</strong>. Analyse du sujet, problématique, plan détaillé. <em>Sélection</em> de 6 à 8 parapersos parmi vos 30, un par sous-partie. Notez les numéros de votre stock dans la marge.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>30 à 50 min</strong>. Rédaction de l&apos;introduction au propre (5 temps&nbsp;: accroche, définitions, paradoxe, problématique, annonce du plan).</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>50 min à 3h30</strong>. Rédaction des sous-parties. <strong>Comptez 12 minutes par paraperso</strong>, soit environ 25 à 30 minutes par sous-partie (paraperso + transition + analyse).</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>3h30 à 4h</strong>. Conclusion (bilan + ouverture) et relecture orthographique.</li>
              </ul>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Éviter le plaquage</h3>
                <p>
                  Un paraperso plaqué se reconnaît à la rupture stylistique entre lui et
                  le reste. Solution&nbsp;: <strong>reformulez la phrase d&apos;annonce</strong>
                  pour relier explicitement au sujet, et soignez la <strong>transition
                  d&apos;entrée</strong> (« on retrouve cette tension chez… »,
                  «&nbsp;l&apos;objection trouve un écho dans… »).
                </p>
              </div>
              <p>
                <strong>Règle d&apos;or.</strong> Un paraperso non mobilisé est mieux
                qu&apos;un paraperso mal mobilisé. Si une référence ne sert pas
                l&apos;argument, supprimez-la, même si vous l&apos;avez mémorisée. Le jury
                sanctionne le hors-sujet plus durement que la sobriété.
              </p>
              <p>
                <strong>Garde-fou.</strong> Mobilisez deux références par sous-partie
                quand l&apos;argument l&apos;exige (deux thèses qui se complètent ou
                s&apos;opposent). Mais jamais trois&nbsp;: la copie devient un catalogue,
                plus une démonstration.
              </p>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/methodes">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des méthodes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtiliserExemplesPage;
