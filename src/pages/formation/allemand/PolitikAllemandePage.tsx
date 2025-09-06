import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Flag, Building2, ArrowLeft, ArrowRight, Users, Shield, Globe, Target, Zap, Crown, Lock, Heart, Star, AlertTriangle, TrendingUp, TrendingDown, Clock, Award, BookOpen, Lightbulb, Gavel, MapPin, Scale, Vote, Users2, Globe2, RotateCcw } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h2 className="text-xl font-semibold text-black mt-8 mb-3 pb-2 border-b-2 border-orange-500">{children}</h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h3 className="text-lg font-semibold text-black mt-6 mb-2">{children}</h3>
);

const PolitikAllemandePage = () => {
  // Debug: Vérifier si le composant se charge
  console.log('PolitikAllemandePage: Composant chargé');
  
  const currentPoliticalIssues = [
    {
      title: "Fragmentierung der Parteienlandschaft",
      content: "Die deutsche Parteienlandschaft ist stark fragmentiert. Früher dominierten die Volksparteien CDU/CSU und SPD, heute kämpfen mehrere Parteien um Einfluss.",
      details: "Dieser Trend führt zu komplexen Koalitionen und schwächeren Mehrheiten. Ein aktuelles Beispiel ist die Bundestagswahl vom 23. Februar 2025, bei der CDU/CSU nur 28,5 % der Stimmen erreichten – weit entfernt von früheren Mehrheiten. Die SPD landete sogar nur bei 16,4 %. Die Zersplitterung zwingt Parteien zu komplizierten Verhandlungen, wie die Bildung der Koalition zwischen CDU/CSU und SPD im Mai 2025 zeigt.",
      conclusion: "Diese Entwicklung macht Regierungen instabiler, spiegelt aber auch die Vielfalt der Gesellschaft wider.",
      vocabulary: ["Fragmentierung (fragmentation)", "Koalition (coalition)", "Mehrheit (majorité)", "Verhandlungen (négociations)", "Vielfalt (diversité)"],
      essayUsage: "Einstieg über Krise der Volksparteien und neue Koalitionslogik."
    },
    {
      title: "Aufstieg der AfD und politische Proteste",
      content: "Der Aufstieg der AfD ist eine der auffälligsten Entwicklungen der letzten Jahre. Besonders in Ostdeutschland erzielt sie hohe Ergebnisse.",
      details: "Bei der Wahl 2025 wurde die AfD mit 20,8 % bundesweit zweitstärkste Kraft und stellt nun die größte Oppositionspartei. Parallel dazu kam es zu massiven Demonstrationen im Januar 2025, bei denen Hunderttausende in Berlin und München gegen Rechtsextremismus protestierten. Diese sogenannten Brandmauer-Demos zeigen, dass ein großer Teil der Gesellschaft bereit ist, die Demokratie aktiv zu verteidigen.",
      conclusion: "Das Spannungsfeld zwischen wachsendem Rechtspopulismus und zivilgesellschaftlicher Gegenwehr prägt die deutsche Politik heute.",
      vocabulary: ["Oppositionspartei (parti d'opposition)", "Rechtsextremismus (extrémisme de droite)", "Proteste (manifestations)", "Brandmauer (barrière de feu)"],
      essayUsage: "Beispiel für Demokratiekrise und gesellschaftliche Polarisierung."
    },
    {
      title: "Die Grünen und die ökologische Politik",
      content: "Die Grünen haben sich zu einer festen Kraft im politischen System etabliert. Klimaschutz bleibt eine zentrale Erwartung vieler Wähler.",
      details: "Ein aktuelles Beispiel ist das Heizungsgesetz von 2023, das für viel Kritik sorgte und die Zustimmung zu den Grünen schwächte. Bei der Wahl 2025 erhielten sie nur 11,6 %, deutlich weniger als noch 2021 (14,8 %). Trotz Rückschlägen bleiben die Grünen ein Motor für ökologische Modernisierung: Sie drängen auf den Ausbau erneuerbarer Energien und einen schnelleren Kohleausstieg.",
      conclusion: "Ihr Einfluss zeigt, wie sehr Klima- und Energiefragen inzwischen Teil der politischen Mitte geworden sind.",
      vocabulary: ["Klimaschutz (protection du climat)", "Heizungsgesetz (loi sur le chauffage)", "erneuerbare Energien (énergies renouvelables)", "Kohleausstieg (sortie du charbon)"],
      essayUsage: "Beleg für ökologische Transformation vs. wirtschaftliche Realität."
    },
    {
      title: "Koalitionsprobleme und politische Stabilität",
      content: "Koalitionsregierungen sind typisch für Deutschland, doch sie werden zunehmend instabil. Die aktuelle Regierung unter Friedrich Merz zeigt diese Schwierigkeiten deutlich.",
      details: "Er wurde am 6. Mai 2025 erst in der zweiten Abstimmung zum Kanzler gewählt – ein Hinweis auf die fragile Mehrheit seiner Koalition mit der SPD. Schon kurz nach Amtsantritt kam es zu Streit über Haushaltsfragen und Migrationspolitik. Solche Konflikte verlangsamen notwendige Reformen und schwächen das Vertrauen der Bevölkerung.",
      conclusion: "Dennoch gilt das deutsche System als stabil, weil es Machtmissbrauch verhindert und Kompromisse erzwingt.",
      essayUsage: "Argumentation über Vor- und Nachteile parlamentarischer Demokratie."
    },
    {
      title: "Zeitenwende und internationale Verantwortung",
      content: "Mit dem russischen Angriff auf die Ukraine begann 2022 eine Zeitenwende in der deutschen Außen- und Sicherheitspolitik.",
      details: "Deutschland erhöhte massiv das Verteidigungsbudget und stellte ein Sondervermögen von 100 Milliarden Euro für die Bundeswehr bereit. Aktuell wird über eine Beteiligung an einer Friedensmission in der Ukraine (August 2025) diskutiert. Während 49 % der Deutschen laut Umfragen dafür sind, lehnen 45 % einen solchen Einsatz ab – mit besonders starker Skepsis im Osten.",
      conclusion: "Die Zukunft der deutschen Außenpolitik hängt davon ab, ob Politik und Bevölkerung diesen Spagat bewältigen können.",
      vocabulary: ["Zeitenwende (tournant historique)", "Bundeswehr (armée fédérale)", "Friedensmission (mission de paix)", "Verantwortung (responsabilité)", "Skepsis (scepticisme)"],
      essayUsage: "Beispiel für Wandel der Außenpolitik und deutsche Rolle in Europa."
    }
  ];

  const bundeskanzler = [
    {
      name: "Konrad Adenauer (CDU)",
      period: "1949-1963",
      description: "Erster Kanzler der Nachkriegszeit, bekannt für den Wiederaufbau der Bundesrepublik und die Rolle von Frauen im Aufbau.",
      foreignPolicy: "Besonders wichtige Figur für seine Außenpolitik, insbesondere für die Aussöhnung mit Israel und mit Frankreich (deutsche französische Freundschaft und der Elysee Vertrag 1963).",
      icon: Crown
    },
    {
      name: "Ludwig Erhard (CDU)",
      period: "1963-1966",
      description: "Kanzler des Wirtschaftswunders und der Sozialen Marktwirtschaft.",
      motto: "Sein Motto war 'Wohlstand für alle'.",
      icon: TrendingUp
    },
    {
      name: "Willy Brandt (SPD)",
      period: "1969-1974",
      description: "Einer der beliebtesten Bundeskanzler dank seiner Entspannungspolitik.",
      highlight: "Der Kniefall in Warschau ist ein wichtiger Moment für die Aufarbeitung der Vergangenheit.",
      icon: Heart
    },
    {
      name: "Helmut Kohl (CDU)",
      period: "1982-1998",
      description: "Kanzler der Wiedervereinigung.",
      europeanRole: "Er spielt eine wichtige Rolle für Europa, insofern er den Euro als Währung für Europa akzeptiert.",
      icon: Globe
    },
    {
      name: "Gerhard Schröder (SPD)",
      period: "1998-2005",
      description: "Hat wichtige Arbeitsreformen beschlossen.",
      icon: Users
    },
    {
      name: "Angela Merkel (CDU)",
      period: "2005-2021",
      description: "Erste Bundeskanzlerin Deutschlands und eine der einflussreichsten Politikerinnen der Welt.",
      achievements: "Während ihrer 16-jährigen Amtszeit führte sie Deutschland durch zahlreiche Krisen: Finanzkrise 2008, Eurokrise, Flüchtlingskrise 2015 und COVID-19-Pandemie.",
      policies: "Ihre Politik war geprägt von Pragmatismus und Stabilität, mit Fokus auf Europa und transatlantische Beziehungen. Bekannt für 'Wir schaffen das' (2015) und die Energiewende.",
      icon: Shield
    },
    {
      name: "Olaf Scholz (SPD)",
      period: "2021-2025",
      description: "Übernahm das Amt im Dezember 2021 und führte eine Ampelkoalition aus SPD, Grünen und FDP.",
      challenges: "Seine Kanzlerschaft begann in einer Zeit globaler Herausforderungen, insbesondere durch den russischen Angriffskrieg gegen die Ukraine.",
      policies: "Setzte sich für die Unterstützung der Ukraine ein und kündigte eine 'Zeitenwende' in der deutschen Sicherheitspolitik an. Innenpolitisch verfolgt er Maßnahmen zur sozialen Gerechtigkeit.",
      icon: Target
    },
    {
      name: "Friedrich Merz (CDU)",
      period: "2025–",
      description: "Wurde Kanzler im Mai 2025, übernahm nach einer historischen Ausnahme der zweiten Wahlrunde im Bundestag.",
      program: "EU-Stärkung, 'High-EU-Defence-Community', umfangreiche Investitionen – 500 Mrd. € Infrastruktur und Klimaneutralität, Verteidigungsausgaben über der Schuldenbremse.",
      currentChallenges: "Aktuell ringt er mit ökonomischen Schwierigkeiten: Wirtschaft stagniert, Industrie schrumpft. AfD liegt gleichauf mit CDU/CSU bei etwa 25%, während Merz' Zustimmungswerte fallen – 62% sind unzufrieden mit der Regierung.",
      icon: Zap
    }
  ];

  const currentEvents = [
    {
      title: "Elon Musk und die AfD",
      content: "Elon Musk hat kürzlich mit seinen Aussagen in Deutschland für Aufsehen gesorgt. Er äußerte öffentlich Unterstützung für die AfD, eine umstrittene Partei, die als rechtspopulistisch gilt.",
      impact: "Diese Stellungnahme hat eine heftige Debatte ausgelöst, da viele Politiker und Bürger dies als Einmischung in die deutsche Politik empfinden. Bundeskanzler Olaf Scholz bezeichnete Musks Worte als 'inakzeptabel'.",
      consequences: "Gleichzeitig erlebt die AfD einen Aufschwung in den Umfragen, was die politische Landschaft vor den kommenden Neuwahlen im Februar 2025 weiter polarisiert."
    }
  ];

  const historicalContext = [
    {
      title: "Nachkriegszeit und Alliierte Einflussnahme",
      content: "Die Alliierten haben nach dem Zweiten Weltkrieg entschieden, Deutschlands Politik zu führen. Im Westen wurde ein föderales System nach amerikanischem Vorbild eingeführt, um die Machtkonzentration zu verhindern und Demokratie zu garantieren.",
      system: "Eine Koalition wird mit einigen Parteien gebildet. Ihre Mitglieder müssen immer Kompromisse eingehen, das heißt keine gefährlichen Entscheidungen für Deutschland und seine Demokratie.",
      example: "Heutzutage ist die Ampelkoalition das Paradebeispiel dieses Pragmatismus auf politischer Ebene."
    },
    {
      title: "Die Rolle des Bundespräsidenten in Deutschland",
      content: "Der Bundespräsident hat eine überparteiliche Funktion und verkörpert die Einheit der Nation. Seit 2017 ist Frank-Walter Steinmeier (SPD) der Bundespräsident Deutschlands.",
      currentRole: "Zurzeit spielt Präsident Steinmeier eine Schlüsselrolle für die deutsche Diplomatie. Am 8. Mai 2022 hält Steinmeier eine Rede zum Ende des Zweiten Weltkriegs.",
      significance: "Es war ein besonderer Moment, insofern als es wieder Krieg innerhalb Europas gab. Steinmeier hat der Ukraine die deutsche Unterstützung gegen den russischen Angreifer gezeigt.",
      turningPoint: "Es ist auch ein Wendepunkt für Deutschland, weil es sehr abhängig von Gas aus Russland ist. Es ist ein Kurswechsel für Deutschland - 'Epochbruch' Steinmeier."
    }
  ];

  const keyVocabulary = [
    { term: "Volkspartei", definition: "Parti populaire - parti qui représente une large partie de la population" },
    { term: "Bundestag", definition: "Parlement fédéral allemand - chambre basse du système parlementaire" },
    { term: "Bundeskanzler", definition: "Chancelier fédéral - chef du gouvernement allemand" },
    { term: "Bundespräsident", definition: "Président fédéral - chef de l'État allemand (fonction principalement honorifique)" },
    { term: "Ampelkoalition", definition: "Coalition tricolore - alliance SPD (rouge), Grüne (vert), FDP (jaune)" },
    { term: "Schuldenbremse", definition: "Frein à l'endettement - limite constitutionnelle du déficit public" },
    { term: "Energiewende", definition: "Transition énergétique - passage aux énergies renouvelables" },
    { term: "Ost-West-Gefälle", definition: "Fossé Est-Ouest - différences persistantes entre l'ancienne RDA et RFA" }
  ];

  const essayQuestions = [
    "Inwiefern spiegelt die Fragmentierung der deutschen Parteienlandschaft die gesellschaftlichen Veränderungen wider?",
    "Welche Herausforderungen und Chancen bietet das deutsche Koalitionssystem für die politische Stabilität?",
    "Wie hat sich die deutsche Außenpolitik seit der 'Zeitenwende' 2022 verändert?",
    "Welche Rolle spielt der Bundespräsident im deutschen politischen System?",
    "Wie bewerten Sie die Entwicklung der deutschen Parteien von den Volksparteien zur heutigen Fragmentierung?",
    "Welche Auswirkungen hat der Aufstieg der AfD auf die deutsche Demokratie?",
    "Wie hat sich die Rolle Deutschlands in Europa seit der Wiedervereinigung entwickelt?",
    "Welche Lehren kann man aus der deutschen Nachkriegsgeschichte für die heutige Politik ziehen?"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating elements - Orange and blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Minimal breadcrumb */}
      <nav className="sticky top-0 z-40 bg-white border-b border-orange-200">
        <div className="container mx-auto px-4 py-2 text-xs">
          <div className="flex items-center gap-1 text-black/70">
            <Link to="/" className="hover:text-black">
              <span className="inline-flex items-center gap-1"><Home className="h-3 w-3 text-orange-600"/>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <Link to="/formation/allemand" className="hover:text-black">Formation <span className="text-orange-600">Allemand</span></Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <span className="font-medium">Politik</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black">Politik in Deutschland</h1>
            <p className="text-sm text-black/70 mt-1">Présentation sobre • Mise à jour 2025</p>
          </div>

          {/* Article sobre */}
          <article id="current-issues" className="prose prose-orange max-w-none">
            <h2>Die deutsche Politik seit 2020: Aktueller Überblick und wichtige Entwicklungen</h2>
            <p>Deutschland befindet sich seit 2020 in einer turbulenten politischen Phase, geprägt von zahlreichen Krisen und strukturellen Wandlungsprozessen. Nach der Ära Angela Merkel hat sich das politische Spektrum grundlegend verschoben, und neue Herausforderungen bestimmen die politische Agenda.</p>

            <SectionTitle>Die neue Regierungskoalition unter Friedrich Merz</SectionTitle>
            <p>Nach der vorgezogenen Bundestagswahl im Februar 2025 übernahm <strong>Friedrich Merz (CDU) als zehnter deutscher Bundeskanzler</strong> die Regierungsgeschäfte. Die neue schwarz-rote Koalition aus CDU/CSU und SPD markiert eine deutliche politische Wende nach dem Ende der Ampel-Koalition. Bei der Bundestagswahl erreichte die Union 28,5% der Stimmen und konnte ihr historisch schlechtes Ergebnis von 2021 um gut vier Prozentpunkte verbessern.<sup>[1][2]</sup></p>
            <p>Die ersten hundert Tage der neuen Regierung waren von erheblichen Spannungen geprägt. Besonders kontrovers diskutiert wurden <strong>Sozialstaatsreformen, insbesondere die geplante Bürgergeld-Reform</strong>. Bundeskanzler Merz kündigte bis Ende 2025 Eckpunkte für eine Reform an, die das Bürgergeld zur "neuen Grundsicherung" umgestalten soll. Die Koalitionspartner mussten nach heftigen öffentlichen Auseinandersetzungen ihre Zusammenarbeit neu justieren.<sup>[3][4]</sup></p>

            <SectionTitle>Der dramatische Aufstieg der AfD</SectionTitle>
            <p>Die <strong>Alternative für Deutschland (AfD) verzeichnet einen beispiellosen Wahlerfolg</strong> und stieg zur zweitstärksten politischen Kraft auf. Mit 20,8% der Zweitstimmen bundesweit und dominanten Ergebnissen in Ostdeutschland hat sich die Partei als zentrale politische Macht etabliert. In Brandenburg (36,2%), Mecklenburg-Vorpommern (38%), Sachsen (45,2%), Sachsen-Anhalt (39%) und Thüringen (41%) liegt die AfD deutlich vor allen anderen Parteien.<sup>[5][6][1]</sup></p>
            <p>Besonders bemerkenswert ist, dass die AfD <strong>46 Direktmandate gewinnen konnte</strong> und mit Ausnahme von drei Wahlkreisen um Erfurt, Leipzig und Potsdam alle ostdeutschen Wahlkreise eroberte. Dieser Erfolg reflektiert tieferliegende gesellschaftliche Spannungen, die sich besonders in den strukturschwächeren Regionen manifestieren.<sup>[7][8][1]</sup></p>

            <SectionTitle>Wirtschaftskrise und strukturelle Herausforderungen</SectionTitle>
            <p>Deutschland durchlebt <strong>die längste Wirtschaftskrise seit Gründung der Bundesrepublik</strong>. Seit 2020 hat die deutsche Wirtschaft den langfristigen Wachstumstrend verlassen und verharrt 6% unter dem historischen Wachstumspfad. Dies entspricht einem jährlichen Verlust von über 270 Milliarden Euro oder 3.200 Euro pro Einwohner.<sup>[9][10]</sup></p>
            <p>Für 2025 erwarten Wirtschaftsexperten bestenfalls eine <strong>Stagnation mit 0,1% Wachstum</strong>. Die Gründe für diese Dauerkrise sind vielfältig: hohe Energiekosten, bürokratische Belastungen, Fachkräftemangel und internationale Unsicherheiten. Besonders energieintensive Industrien leiden unter den gestiegenen Strompreisen nach dem Atomausstieg.<sup>[11][9]</sup></p>

            <SectionTitle>Außenpolitische Herausforderungen: Ukraine und Europa</SectionTitle>
            <p>Deutschlands Außenpolitik wird maßgeblich vom <strong>russischen Angriffskrieg gegen die Ukraine</strong> geprägt. Deutschland ist nach den USA der zweitgrößte militärische und finanzielle Unterstützer der Ukraine und zusammen mit Polen das wichtigste Aufnahmeland für ukrainische Geflüchtete. Die bilaterale "Vereinbarung über Sicherheitszusammenarbeit und langfristige Unterstützung" vom Februar 2024 unterstreicht Deutschlands langfristige Unterstützung.<sup>[12]</sup></p>
            <p>Die deutsche Ukraine-Politik steht jedoch vor erheblichen Herausforderungen. Viele Ukrainer kritisieren Deutschland für seine frühere Appeasement-Politik gegenüber Russland, insbesondere die Blockade einer NATO-Mitgliedschaft 2008 und das Festhalten an Nord Stream 2.<sup>[13]</sup></p>

            <SectionTitle>Migrationspolitik im Wandel</SectionTitle>
            <p>Die <strong>Migrationspolitik hat eine deutliche Verschärfung erfahren</strong>. Bundesinnenminister Dobrindt führte verstärkte Grenzkontrollen an allen deutschen Binnengrenzen ein und erhöhte die Zurückweisungen. Zentrale Maßnahmen der "Migrationswende" umfassen:</p>
            <ul className="list-disc pl-6">
              <li>Aussetzung des Familiennachzugs für bestimmte Gruppen</li>
              <li>Abschaffung der "Turboeinbürgerung" nach drei Jahren</li>
              <li>Benennung weiterer sicherer Herkunftsstaaten</li>
              <li>Konsequente Abschiebung von Straftätern</li>
            </ul>
            <p>Die Zahl der Schutzsuchenden blieb 2024 mit rund 3,3 Millionen Menschen hoch, während gleichzeitig die Nettozuwanderung zurückging.<sup>[15][16]</sup></p>

            <SectionTitle>Klimapolitik zwischen Ambition und Realität</SectionTitle>
            <p>Die deutsche <strong>Klimapolitik</strong> steht vor großen Herausforderungen. Während der Klimaschutzbericht 2025 Fortschritte bei der Emissionsminderung verzeichnet, sind zusätzliche Maßnahmen insbesondere in den Sektoren Verkehr und Gebäude erforderlich.<sup>[17]</sup></p>
            <p>Der <strong>vollständige Atomausstieg am 15. April 2023</strong> markierte einen historischen Wendepunkt. Kritiker argumentieren, dass dies die Klimaziele erschwert und Deutschland teurer zu stehen kommt als eine kernkraftbasierte Energiepolitik.<sup>[18][19][20]</sup></p>

            <SectionTitle>Haushaltspolitik und finanzielle Herausforderungen</SectionTitle>
            <p>Der <strong>Bundeshaushalt 2025</strong> mit einem Volumen von 500 Milliarden Euro und 140 Milliarden Euro neuen Schulden steht im Zentrum politischer Kontroversen. Besonders umstritten ist die massive Erhöhung der Verteidigungsausgaben von 90 auf 150 Milliarden Euro, während gleichzeitig bei humanitärer Hilfe gekürzt wird.<sup>[21][22][23]</sup></p>

            <SectionTitle>Gesellschaftliche Polarisierung und demokratische Herausforderungen</SectionTitle>
            <p>Deutschland erlebt eine zunehmende <strong>gesellschaftliche Polarisierung</strong>. Die hohe Wahlbeteiligung von 82,5% bei der Bundestagswahl 2025 zeigt das gesteigerte politische Interesse, aber auch die Spannungen in der Gesellschaft. Besonders in Ostdeutschland manifestiert sich eine tiefe Unzufriedenheit mit der etablierten Politik.<sup>[8][1]</sup></p>
            <p>Die neue Regierung unter Friedrich Merz steht vor der Aufgabe, das Vertrauen der Bürger zurückzugewinnen und Deutschland durch eine komplexe Transformationsphase zu führen.</p>

            <SectionTitle>Quellen (Auswahl)</SectionTitle>
            <ol className="list-decimal pl-6 text-sm">
              <li><a className="text-orange-600 hover:underline" href="https://de.wikipedia.org/wiki/Bundestagswahl_2025" target="_blank" rel="noreferrer">Bundestagswahl 2025</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.deutschlandfunk.de/bundesregierung-100.html" target="_blank" rel="noreferrer">Deutschlandfunk – Bundesregierung</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.faz.net/aktuell/politik/bundestagswahl/liveblog-bundespolitik-merz-klingbeil-und-co-demonstrieren-einigkeit-nach-koalitionsgipfel-faz-110093143.html" target="_blank" rel="noreferrer">FAZ Liveblog</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.bundestag.de/dokumente/textarchiv/2025/kw11-bundeswahlausschuss-1056272" target="_blank" rel="noreferrer">Bundestag – Bundeswahlausschuss</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.spiegel.de/politik/deutschland/bundestagswahl-2025-afd-in-ostdeutschen-flaechenlaendern-weit-vorn-a-475be7b0-6408-4997-a5b1-8c9ef266ffb2" target="_blank" rel="noreferrer">Spiegel – AfD Ergebnisse</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.dihk.de/de/aktuelles-und-presse/aktuelle-informationen/dihk-konjunkturumfrage-2025-droht-drittes-krisenjahr-in-folge-128508" target="_blank" rel="noreferrer">DIHK Konjunktur</a></li>
              <li><a className="text-orange-600 hover:underline" href="https://www.auswaertiges-amt.de/de/service/laender/ukraine-node/bilaterale-beziehungen-202760" target="_blank" rel="noreferrer">AA – Ukraine</a></li>
            </ol>
          </article>

          {/* Bundeskanzler */}
          <Card className="mb-8 border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-3 text-purple-800">
                <Crown className="h-6 w-6" />
                Die deutschen Bundeskanzler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {bundeskanzler.map((kanzler, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-3 text-lg">
                            <div className="p-2 rounded-lg bg-purple-500 text-white">
                              <kanzler.icon className="h-4 w-4" />
                            </div>
                            {kanzler.name}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">
                            {kanzler.period}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-gray-700">{kanzler.description}</p>
                      {kanzler.foreignPolicy && (
                        <p className="text-gray-700"><strong>Außenpolitik:</strong> {kanzler.foreignPolicy}</p>
                      )}
                      {kanzler.motto && (
                        <p className="text-gray-700"><strong>Motto:</strong> {kanzler.motto}</p>
                      )}
                      {kanzler.highlight && (
                        <p className="text-gray-700"><strong>Höhepunkt:</strong> {kanzler.highlight}</p>
                      )}
                      {kanzler.europeanRole && (
                        <p className="text-gray-700"><strong>Europäische Rolle:</strong> {kanzler.europeanRole}</p>
                      )}
                      {kanzler.achievements && (
                        <p className="text-gray-700"><strong>Leistungen:</strong> {kanzler.achievements}</p>
                      )}
                      {kanzler.policies && (
                        <p className="text-gray-700"><strong>Politik:</strong> {kanzler.policies}</p>
                      )}
                      {kanzler.challenges && (
                        <p className="text-gray-700"><strong>Herausforderungen:</strong> {kanzler.challenges}</p>
                      )}
                      {kanzler.program && (
                        <p className="text-gray-700"><strong>Programm:</strong> {kanzler.program}</p>
                      )}
                      {kanzler.currentChallenges && (
                        <p className="text-gray-700"><strong>Aktuelle Herausforderungen:</strong> {kanzler.currentChallenges}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Aktuelle Ereignisse */}
          <Card className="mb-8 border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-3 text-orange-800">
                <Clock className="h-6 w-6" />
                Aktuelle Ereignisse und Debatten
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentEvents.map((event, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 mb-4">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-3">{event.content}</p>
                    <p className="text-gray-700 mb-3"><strong>Auswirkungen:</strong> {event.impact}</p>
                    <p className="text-gray-700"><strong>Folgen:</strong> {event.consequences}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Historischer Kontext */}
          <Card className="mb-8 border-2 border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-indigo-800">
                <BookOpen className="h-6 w-6" />
                Historischer Kontext und System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {historicalContext.map((context, index) => (
                  <Card key={index} className="border-l-4 border-l-indigo-500">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-3">{context.title}</h3>
                      <p className="text-gray-700 mb-3">{context.content}</p>
                      {context.system && (
                        <p className="text-gray-700 mb-3"><strong>System:</strong> {context.system}</p>
                      )}
                      {context.example && (
                        <p className="text-gray-700 mb-3"><strong>Beispiel:</strong> {context.example}</p>
                      )}
                      {context.currentRole && (
                        <p className="text-gray-700 mb-3"><strong>Aktuelle Rolle:</strong> {context.currentRole}</p>
                      )}
                      {context.significance && (
                        <p className="text-gray-700 mb-3"><strong>Bedeutung:</strong> {context.significance}</p>
                      )}
                      {context.turningPoint && (
                        <p className="text-gray-700"><strong>Wendepunkt:</strong> {context.turningPoint}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wichtige Vokabeln */}
          <Card className="mb-8 border-2 border-cyan-200">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-cyan-800">
                <Lightbulb className="h-6 w-6" />
                Wichtige politische Vokabeln
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {keyVocabulary.map((vocab, index) => (
                  <Card key={index} className="border-l-4 border-l-cyan-500">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="sm:w-1/3">
                          <Badge className="bg-cyan-500">{vocab.term}</Badge>
                        </div>
                        <div className="sm:w-2/3">
                          <p className="text-sm text-muted-foreground">{vocab.definition}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Aufsatzfragen */}
          <Card className="mb-8 border-2 border-emerald-200">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="flex items-center gap-3 text-emerald-800">
                <Gavel className="h-6 w-6" />
                Aufsatzfragen zur deutschen Politik
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {essayQuestions.map((question, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">{index + 1}. {question}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/allemand">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Formation Allemand
              </Button>
            </Link>
            <Link to="/formation/allemand">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                Zurück zur Übersicht
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitikAllemandePage; 