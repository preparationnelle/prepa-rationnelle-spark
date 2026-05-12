import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Cpu, Leaf, Users, Globe, Home, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="font-dm-serif text-3xl md:text-4xl text-pr-black mb-3">{title}</h2>
    <div className="h-[2px] w-12 bg-pr-black mx-auto mb-4" />
    {subtitle && (
      <p className="text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </div>
);

type FicheCard = { title: string; body: React.ReactNode };

const distinctions: FicheCard[] = [
  {
    title: 'Humanité vs Humain',
    body: <>L&apos;<strong>humain</strong> désigne l&apos;individu de l&apos;espèce ; l&apos;<strong>humanité</strong> désigne à la fois l&apos;ensemble des humains et la qualité morale qui les distingue. On peut être humain biologiquement sans être humain moralement.</>,
  },
  {
    title: 'Humain vs Animal',
    body: <>Frontière classique (langage, raison, conscience, technique) que la biologie contemporaine et l&apos;éthologie n&apos;ont cessé de brouiller. Voir Aristote, Descartes, mais aussi Frans de Waal.</>,
  },
  {
    title: 'Humain vs Machine',
    body: <>Avec l&apos;intelligence artificielle, la frontière s&apos;épaissit autour de la conscience, de l&apos;émotion et de la responsabilité. Voir Anders, <em>L&apos;Obsolescence de l&apos;homme</em>, 1956.</>,
  },
  {
    title: 'Humanité vs Inhumanité',
    body: <>L&apos;inhumanité n&apos;est pas le contraire externe de l&apos;humanité : elle en est une possibilité interne. Voir Arendt sur la banalité du mal.</>,
  },
  {
    title: 'Dignité vs Déshumanisation',
    body: <>La dignité est ce qui n&apos;a pas de prix (Kant). La déshumanisation, c&apos;est précisément traiter l&apos;humain comme un moyen ou un déchet. Voir Levi, <em>Si c&apos;est un homme</em>, 1947.</>,
  },
  {
    title: 'Humanité vs Personne',
    body: <>La personne est l&apos;humain en tant que sujet de droit et de conscience. Distinction utile en bioéthique, droit, débats sur l&apos;animalité ou l&apos;embryon.</>,
  },
];

const sousThemes: { title: string; icon?: React.ReactNode; body: string; wide?: boolean }[] = [
  {
    title: '1. Définir l\'humanité',
    icon: <BookOpen className="h-5 w-5 text-pr-black" />,
    body: 'Essence, nature, propre de l\'homme. Aristote, Pic de la Mirandole, Sartre, Pascal. Question : l\'humain a-t-il une nature, ou seulement une histoire ?',
  },
  {
    title: '2. L\'humanité comme construction',
    icon: <Users className="h-5 w-5 text-pr-black" />,
    body: 'Culture, langage, technique, éducation, hominisation. Hegel, Mauss, Leroi-Gourhan, Vygotski, Norbert Elias.',
  },
  {
    title: '3. L\'inhumanité au cœur de l\'humain',
    body: 'Violence, barbarie, génocides, totalitarismes, banalité du mal. Arendt, Levi, Freud, Milgram, Antelme, Goya.',
  },
  {
    title: '4. L\'humanité face à la nature',
    icon: <Leaf className="h-5 w-5 text-pr-black" />,
    body: 'Écologie, anthropocène, rapport au vivant, animalité. Latour, Jonas, Descola, Rousseau, Aldo Leopold.',
  },
  {
    title: '5. L\'humanité à l\'épreuve de la technique',
    icon: <Cpu className="h-5 w-5 text-pr-black" />,
    body: 'Transhumanisme, IA, posthumanisme, augmentation. Heidegger, Ellul, Anders ; films Her, Blade Runner, 2001.',
  },
  {
    title: '6. La solidarité et le commun',
    body: 'Droits humains, fraternité, universalisme, hospitalité. Kant, Rawls, Simone Weil, Tocqueville, Levinas.',
  },
  {
    title: '7. Les frontières de l\'humanité',
    icon: <Globe className="h-5 w-5 text-pr-black" />,
    body: 'Exclusion, racisme, déshumanisation, altérité, étranger. Fanon, Mbembe, Levinas, Conrad, Montaigne.',
  },
  {
    title: '8. L\'humanité comme idéal',
    icon: <Sparkles className="h-5 w-5 text-pr-black" />,
    body: 'Perfectibilité, progrès moral, utopies, émancipation. Condorcet, Marx, Camus, Kant, Teilhard de Chardin.',
  },
];

const FicheCardBlock: React.FC<{ item: FicheCard; wide?: boolean }> = ({ item, wide }) => (
  <Card
    className={`relative bg-white rounded-2xl p-6 border border-pr-gray-light hover:border-pr-black transition-colors overflow-hidden ${wide ? 'md:col-span-2' : ''}`}
  >
    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-black" />
    <h3 className="font-dm-serif text-lg text-pr-black mb-2">{item.title}</h3>
    <p className="text-sm text-pr-gray-dark leading-relaxed">{item.body}</p>
  </Card>
);

const HumaniteTermesConnexesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <nav className="sticky top-0 z-50 bg-pr-gray-bg/95 backdrop-blur border-b border-pr-gray-light">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-xs text-pr-gray-mid">
            <Link to="/" className="flex items-center gap-1 hover:text-pr-black transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1 opacity-60" />
            <Link to="/formations" className="hover:text-pr-black transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 mx-1 opacity-60" />
            <Link to="/formation/culture-generale" className="hover:text-pr-black transition-colors">Culture générale</Link>
            <ChevronRight className="h-3 w-3 mx-1 opacity-60" />
            <span className="text-pr-black font-medium">L&apos;humanité</span>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 sm:px-6 bg-white border-b border-pr-gray-light">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Fiche notion
            </p>

            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-12 bg-pr-gray-bg rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-pr-black" />
              </div>
              <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight">
                L&apos;humanité — termes connexes &amp; définitions
              </h1>
            </div>

            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />

            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Cartographie complète du thème <em>l&apos;humanité</em> : distinctions fondamentales, 8 sous-thèmes
              du programme, concepts clés et auteurs incontournables.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-7">
              <span className="px-3 py-1 bg-pr-gray-bg text-pr-black rounded-full text-xs font-semibold uppercase tracking-wider">
                Culture générale
              </span>
              <span className="px-3 py-1 bg-white border border-pr-gray-light text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                Thème 2025-2026
              </span>
              <span className="px-3 py-1 bg-pr-black text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                Fiche notion
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          {/* Encadré intro */}
          <Card className="relative max-w-4xl mx-auto bg-pr-gray-bg border-0 rounded-2xl p-7 overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-black" />
            <h3 className="font-dm-serif text-xl text-pr-black mb-3">
              Pourquoi cartographier « l&apos;humanité » ?
            </h3>
            <p className="text-sm text-pr-gray-dark mb-3">
              <em>L&apos;humanité</em> est un mot piège. Il désigne à la fois l&apos;espèce, la communauté
              et une qualité morale. Cette fiche organise les notions pour gagner en clarté et éviter
              les confusions.
            </p>
            <ul className="text-sm text-pr-gray-dark space-y-1.5">
              <li><span className="text-pr-black mr-2">→</span>Distinguer humain, humanité, personne, dignité.</li>
              <li><span className="text-pr-black mr-2">→</span>Cartographier les grandes frontières (humain/animal, humain/machine, humanité/inhumanité).</li>
              <li><span className="text-pr-black mr-2">→</span>Parcourir les 8 sous-thèmes du programme avec leurs auteurs phares.</li>
              <li><span className="text-pr-black mr-2">→</span>Mettre en lumière les enjeux contemporains : technique, écologie, déshumanisation.</li>
            </ul>
          </Card>

          <div>
            <SectionHeader
              title="Distinctions fondamentales"
              subtitle="Les confusions à éviter d'emblée"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {distinctions.map((d) => <FicheCardBlock key={d.title} item={d} />)}
            </div>
          </div>

          <div>
            <SectionHeader
              title="Le triangle de l'humanité"
              subtitle="Les trois pôles entre lesquels l'humain se définit"
            />
            <Accordion type="single" collapsible className="max-w-4xl mx-auto bg-white border border-pr-gray-light rounded-2xl px-6">
              <AccordionItem value="animal" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">L&apos;humain face à l&apos;animal</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">L&apos;humain s&apos;est longtemps défini contre l&apos;animal : raison, langage, conscience de soi, technique, rire. Aujourd&apos;hui, l&apos;éthologie (Frans de Waal) et le tournant animaliste (Singer, Derrida) brouillent cette frontière. L&apos;humain est aussi un animal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="machine" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">L&apos;humain face à la machine</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">La machine prolonge l&apos;humain (outil) puis le concurrence (intelligence artificielle, robotique). Anders parle de la « honte prométhéenne » : l&apos;humain se sent diminué face à ses propres créations. Le transhumanisme propose de fusionner les deux.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="divin" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">L&apos;humain face au divin (ou à l&apos;absolu)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Pascal : l&apos;humain est un « roseau pensant », tendu entre la grandeur et la misère, le tout et le néant. La sécularisation moderne déplace la question : à défaut de Dieu, qui mesure l&apos;humanité de l&apos;humain ?</AccordionContent>
              </AccordionItem>
              <AccordionItem value="autre" className="border-b-0">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">L&apos;humain face à autrui</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Levinas (<em>Totalité et infini</em>, 1961) : l&apos;humain n&apos;advient que dans la rencontre du visage d&apos;autrui, qui m&apos;oblige avant tout discours. Reconnaître l&apos;autre comme humain est le geste fondateur de l&apos;éthique.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <SectionHeader
              title="Les 8 sous-thèmes du programme"
              subtitle="Cartographie complète du thème pour structurer vos parapersos"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {sousThemes.map((t) => (
                <Card
                  key={t.title}
                  className={`relative bg-white rounded-2xl p-6 border border-pr-gray-light hover:border-pr-black hover:shadow-md transition-all overflow-hidden ${t.wide ? 'md:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-black" />
                  <h3 className="font-dm-serif text-lg text-pr-black mb-2 flex items-center gap-2">
                    {t.icon}
                    {t.title}
                  </h3>
                  <p className="text-sm text-pr-gray-dark leading-relaxed">{t.body}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Concepts philosophiques clés" />
            <Accordion type="multiple" className="max-w-4xl mx-auto bg-white border border-pr-gray-light rounded-2xl px-6">
              <AccordionItem value="dignite" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Dignité (Kant)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Ce qui a un prix peut être remplacé. Ce qui a une dignité est sans équivalent. L&apos;humanité est une fin en soi, jamais un simple moyen. Fondement moderne des droits humains.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="perfectibilite" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Perfectibilité (Rousseau)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">L&apos;humain est le seul être capable de progresser <em>et</em> de se corrompre indéfiniment. La perfectibilité fait sa grandeur, mais aussi sa misère.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="banalite" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Banalité du mal (Arendt)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Le mal radical n&apos;exige pas des monstres mais des fonctionnaires médiocres qui refusent de penser. <em>Eichmann à Jérusalem</em>, 1963.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="zonegrise" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Zone grise (Levi)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Dans les camps, la frontière entre victime et bourreau s&apos;effrite. La survie exige des compromissions qui rendent impossible le partage moral net. <em>Si c&apos;est un homme</em>, 1947.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="arraisonnement" className="border-pr-gray-light">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Arraisonnement technique (Heidegger)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">La technique moderne ne se contente pas de produire : elle transforme tout le réel, y compris l&apos;humain, en stock disponible. <em>La Question de la technique</em>, 1953.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="visage" className="border-b-0">
                <AccordionTrigger className="font-dm-serif text-pr-black hover:text-pr-black">Visage d&apos;autrui (Levinas)</AccordionTrigger>
                <AccordionContent className="text-sm text-pr-gray-dark">Le visage de l&apos;autre m&apos;ordonne « tu ne tueras pas » avant même tout discours. L&apos;humanité commence dans cette obligation éthique non choisie. <em>Totalité et infini</em>, 1961.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <SectionHeader title="Sources & références incontournables" />
            <Card className="relative max-w-4xl mx-auto bg-white rounded-2xl p-7 border border-pr-gray-light overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-black" />
              <h3 className="font-dm-serif text-xl text-pr-black mb-3">Pour aller plus loin</h3>
              <ul className="text-sm text-pr-gray-dark space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>Pic de la Mirandole, <em>Discours de la dignité de l&apos;homme</em>, 1486.</li>
                <li><span className="text-pr-black mr-2">→</span>Pascal, <em>Pensées</em>, 1670 : roseau pensant, grandeur et misère.</li>
                <li><span className="text-pr-black mr-2">→</span>Rousseau, <em>Discours sur l&apos;origine de l&apos;inégalité</em>, 1755 : perfectibilité.</li>
                <li><span className="text-pr-black mr-2">→</span>Sartre, <em>L&apos;existentialisme est un humanisme</em>, 1946.</li>
                <li><span className="text-pr-black mr-2">→</span>Hannah Arendt, <em>Eichmann à Jérusalem</em>, 1963.</li>
                <li><span className="text-pr-black mr-2">→</span>Primo Levi, <em>Si c&apos;est un homme</em>, 1947.</li>
                <li><span className="text-pr-black mr-2">→</span>Heidegger, <em>La Question de la technique</em>, 1953.</li>
                <li><span className="text-pr-black mr-2">→</span>Günther Anders, <em>L&apos;Obsolescence de l&apos;homme</em>, 1956.</li>
                <li><span className="text-pr-black mr-2">→</span>Levinas, <em>Totalité et infini</em>, 1961.</li>
                <li><span className="text-pr-black mr-2">→</span>Bruno Latour, <em>Face à Gaïa</em>, 2015.</li>
                <li><span className="text-pr-black mr-2">→</span>Frantz Fanon, <em>Les Damnés de la terre</em>, 1961.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumaniteTermesConnexesPage;
