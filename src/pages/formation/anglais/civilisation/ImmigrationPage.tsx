import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf, TrendingDown, Gavel, Church, MapPin } from 'lucide-react';

const ImmigrationPage = () => {
  const keyTopics = [
    {
      title: "US Border Crisis and Policy Shifts",
      content: "2.4M encounters 2023, Title 42 end, asylum backlog, Republican vs Democratic approaches",
      vocabulary: ["Title 42", "asylum seekers", "border encounters", "migration surge", "asylum backlog", "border facilities"]
    },
    {
      title: "UK Immigration Post-Brexit",
      content: "606K net migration 2022, Channel crossings, Rwanda deal, Illegal Migration Act 2023",
      vocabulary: ["net migration", "Channel crossings", "Rwanda deal", "Illegal Migration Act", "asylum system", "Brexit control"]
    },
    {
      title: "Political and Humanitarian Challenges",
      content: "Xenophobia vs openness, public opinion splits, economic needs vs political rhetoric",
      vocabulary: ["xenophobia", "public opinion", "economic needs", "political rhetoric", "humanitarian crisis", "sovereignty"]
    },
    {
      title: "Global Migration Pressures",
      content: "Climate migrants, conflicts, economic disparities, interdependence, future challenges",
      vocabulary: ["climate migrants", "conflicts", "economic disparities", "interdependence", "globalization", "future challenges"]
    }
  ];

  const essentialVocabulary = [
    { term: "Title 42", definition: "US public health order that allowed rapid expulsion of migrants without normal asylum processing" },
    { term: "asylum seekers", definition: "People seeking protection in another country due to persecution or danger in their home country" },
    { term: "net migration", definition: "Difference between the number of immigrants entering and emigrants leaving a country" },
    { term: "Channel crossings", definition: "Dangerous boat journeys across the English Channel from France to England" },
    { term: "Rwanda deal", definition: "Controversial UK policy to deport asylum seekers to Rwanda for processing" },
    { term: "xenophobia", definition: "Fear, hatred, or prejudice against people from other countries or cultures" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation <span className="text-orange-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Immigration and Border Control</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-orange-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-orange-500 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <Badge className="bg-orange-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Immigration and Border Control</CardTitle>
              <p className="text-muted-foreground">
                Border management, migration policies, and humanitarian challenges in the US and UK
              </p>
            </CardHeader>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Immigration Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2.4M</div>
                  <div className="text-sm text-orange-100">US border encounters 2023</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">606K</div>
                  <div className="text-sm text-orange-100">UK net migration 2022</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">1.5M</div>
                  <div className="text-sm text-orange-100">US asylum backlog cases</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">45K</div>
                  <div className="text-sm text-orange-100">Channel crossings 2022</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="w-full space-y-4">
            
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Immigration Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{topic.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{topic.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.vocabulary.map((word, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {word}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="us-border-crisis" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">US Border Crisis: Record Crossings and Policy Challenges</h3>
                    <p className="text-sm text-muted-foreground">2.4M encounters, Title 42, and asylum system strain</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Immigration has been a defining political flashpoint in recent years, with debates intensifying over how to manage borders humanely yet securely. The United States has experienced historically high levels of unauthorized migration at its southern border, driven by instability and economic hardship in Latin America. In fiscal year 2023, U.S. authorities recorded over 2.4 million encounters at the Southwest border – a new record, slightly above the prior year. This surge has strained border facilities and the asylum system. Images of tens of thousands of migrants – families with children, single adults, unaccompanied teens – arriving at the Rio Grande created a sense of crisis. The drivers include poverty and violence in countries like Venezuela, Haiti, Cuba, Nicaragua, Honduras, and Guatemala, as well as perceptions (or misperceptions) of U.S. policy changes.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The Biden administration, which took office in 2021, initially struck a more compassionate tone than the hardline Trump era, ending practices like family separation. However, record crossings quickly posed practical and political challenges. By late 2022, Republican governors in Texas and Arizona, accusing the federal government of inaction, started busing thousands of migrants to Democratic-run cities like New York, Washington D.C., and Chicago – a move critics called a stunt using human beings as pawns. Those destination cities then also struggled with shelter space and social services, leading even liberal mayors to plead for federal help. A major inflection point came in May 2023, when the U.S. ended the "Title 42" public health order that for two years had allowed rapid expulsion of migrants without normal asylum processing (purportedly due to COVID-19).
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on immigration policy, border management, or the challenges of humanitarian border control. It provides concrete data on migration flows and can support arguments about the complexity of immigration policy or the need for comprehensive reform. It's also useful for analyzing the relationship between political rhetoric and practical challenges.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      immigration; defining political flashpoint; recent years; debates intensifying; manage borders; humanely; securely; United States; experienced; historically high levels; unauthorized migration; southern border; driven by; instability; economic hardship; Latin America; fiscal year 2023; US authorities; recorded; over 2.4 million encounters; Southwest border; new record; slightly above; prior year; surge; strained; border facilities; asylum system; images; tens of thousands; migrants; families with children; single adults; unaccompanied teens; arriving; Rio Grande; created; sense of crisis; drivers include; poverty; violence; countries; Venezuela; Haiti; Cuba; Nicaragua; Honduras; Guatemala; perceptions; misperceptions; US policy changes; Biden administration; took office; 2021; initially struck; more compassionate tone; hardline Trump era; ending practices; family separation; however; record crossings; quickly posed; practical; political challenges; late 2022; Republican governors; Texas; Arizona; accusing; federal government; inaction; started busing; thousands; migrants; Democratic-run cities; New York; Washington DC; Chicago; move; critics called; stunt; using human beings; pawns; destination cities; also struggled; shelter space; social services; leading; even; liberal mayors; plead; federal help; major inflection point; May 2023; US ended; Title 42; public health order; two years; allowed; rapid expulsion; migrants; normal asylum processing; purportedly; COVID-19
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="uk-immigration-brexit" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">UK Immigration Post-Brexit: Paradox of Control and Record Numbers</h3>
                    <p className="text-sm text-muted-foreground">606K net migration, Channel crossings, and Rwanda deal</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the United Kingdom, immigration has likewise been heated, especially since Brexit was in part a referendum on "taking back control" of borders. While Brexit ended free movement of EU citizens into Britain, overall net migration to the UK paradoxically soared to record levels after Brexit. In 2022, net migration hit an estimated +606,000 (later revised even higher) – the highest ever annual figure. This was driven by several factors: a post-pandemic rebound in work and student visas, a surge of skilled workers from outside Europe filling labor shortages, and the UK's generous schemes welcoming refugees from Ukraine's war (about 114,000 Ukrainians) and Hong Kong (over 50,000 arrivals under a BN(O) visa).
                  </p>
                  <p className="text-justify leading-relaxed">
                    The Conservative government found itself in a dilemma – needing immigrants to staff industries and the NHS, but politically beholden to an anti-immigration base. Prime Minister Rishi Sunak acknowledged the numbers are "too high" and vowed to reduce them, introducing measures like restricting foreign students from bringing families. Yet simultaneously, they had to ease rules in critical sectors (issuing more visas for care workers, seasonal farm laborers, even fishermen) because Brexit and an aging workforce created shortages. The situation underlines that Britain's economy, like many, actually needs migrants – even as public sentiment, stoked by tabloids, often perceives immigration as out of control.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on Brexit consequences, immigration policy, or the relationship between political promises and economic reality. It provides concrete examples of policy contradictions and can support arguments about the complexity of immigration control or the economic necessity of migration. It's also useful for analyzing the relationship between political rhetoric and practical needs.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      United Kingdom; immigration; likewise; heated; especially; Brexit; part; referendum; taking back control; borders; while; Brexit ended; free movement; EU citizens; Britain; overall; net migration; UK; paradoxically soared; record levels; after Brexit; 2022; net migration; hit; estimated; 606,000; later revised; higher; highest ever; annual figure; driven by; several factors; post-pandemic rebound; work visas; student visas; surge; skilled workers; outside Europe; filling; labor shortages; UK's generous schemes; welcoming refugees; Ukraine's war; about 114,000; Ukrainians; Hong Kong; over 50,000 arrivals; BN(O) visa; Conservative government; found itself; dilemma; needing immigrants; staff industries; NHS; politically beholden; anti-immigration base; Prime Minister; Rishi Sunak; acknowledged; numbers; too high; vowed; reduce them; introducing measures; restricting; foreign students; bringing families; yet; simultaneously; had to ease rules; critical sectors; issuing more visas; care workers; seasonal farm laborers; fishermen; because; Brexit; aging workforce; created shortages; situation underlines; Britain's economy; like many; actually needs migrants; even as; public sentiment; stoked by; tabloids; often perceives; immigration; out of control
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="channel-crossings-rwanda" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Channel Crossings and the Controversial Rwanda Deal</h3>
                    <p className="text-sm text-muted-foreground">Small boats, asylum system, and offshore processing</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The most contentious aspect in the UK has been the rise in asylum seekers crossing the English Channel in small boats. These dangerous crossings – smuggling people on dinghies from France to England's southern coast – numbered around 45,000 people in 2022, and while slightly fewer (~33,000) in 2023, they remain a focus of intense media coverage and political rhetoric. Many boat migrants are refugees from countries like Syria, Iran, Eritrea, and increasingly Afghanistan – but because they arrive irregularly, the government labels them "illegal migrants". Britain's asylum system backlog ballooned, with over 150,000 people awaiting decisions and many placed in hotels at taxpayer expense, which became another controversy.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In response, the government under Boris Johnson and then Sunak took a hardline turn. In 2022 they announced the highly controversial Rwanda deal: a policy to deport certain asylum seekers 4,000 miles away to Rwanda, where they would either seek asylum there or potentially be sent elsewhere, with the idea that this deterrent would stop the small boats. The plan faced immediate legal challenges and outcry from human rights groups and the UN. In June 2023, the Court of Appeal ruled the Rwanda scheme unlawful, finding that Rwanda's asylum system did not meet proper safety standards. The government appealed, but in November 2023 the UK Supreme Court unanimously struck down the Rwanda plan as unlawful, upholding that Rwanda is not a reliably "safe" destination for refugees. This was a severe blow to the government's flagship immigration policy.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on asylum policy, international law, or the challenges of deterring irregular migration. It provides concrete examples of controversial policies and can support arguments about the importance of international cooperation or the limitations of deterrence strategies. It's also useful for analyzing the relationship between political promises and legal reality.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      most contentious aspect; UK; rise; asylum seekers; crossing; English Channel; small boats; dangerous crossings; smuggling people; dinghies; France; England's southern coast; numbered; around 45,000 people; 2022; while; slightly fewer; 33,000; 2023; remain; focus; intense media coverage; political rhetoric; many boat migrants; refugees; countries; Syria; Iran; Eritrea; increasingly; Afghanistan; because; arrive irregularly; government labels; illegal migrants; Britain's asylum system; backlog ballooned; over 150,000 people; awaiting decisions; many placed; hotels; taxpayer expense; became; another controversy; response; government; Boris Johnson; Sunak; took; hardline turn; 2022; announced; highly controversial; Rwanda deal; policy; deport; certain asylum seekers; 4,000 miles away; Rwanda; where; either seek asylum; potentially sent elsewhere; idea; deterrent; stop; small boats; plan faced; immediate legal challenges; outcry; human rights groups; UN; June 2023; Court of Appeal; ruled; Rwanda scheme; unlawful; finding; Rwanda's asylum system; did not meet; proper safety standards; government appealed; November 2023; UK Supreme Court; unanimously struck down; Rwanda plan; unlawful; upholding; Rwanda; not reliably safe destination; refugees; severe blow; government's flagship immigration policy
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="political-humanitarian-challenges" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Political and Humanitarian Challenges: Xenophobia vs Openness</h3>
                    <p className="text-sm text-muted-foreground">Public opinion splits, economic needs, and political rhetoric</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Immigration controversies also extend beyond the border. Internally, there's a debate about what to do with millions of undocumented immigrants already living in the U.S. (approx 11 million). Comprehensive immigration reform bills have repeatedly failed in Congress amid partisan deadlock. Meanwhile, some states passed their own measures: e.g., Florida in 2023 enacted strict requirements for employers to verify immigration status and made transporting undocumented people a felony in some cases, causing fear in immigrant communities. Conversely, states like California expanded social services to undocumented residents. This patchwork reflects the absence of a national consensus. Public opinion polls show Americans broadly support legal immigration (and are sympathetic to migrants fleeing persecution) but also want stronger border enforcement; they support giving "Dreamers" (those brought illegally as children) a path to citizenship, but are split on broader amnesty.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The immigration debate in Britain, as elsewhere, also carries an undercurrent of xenophobia versus openness. Brexit, for example, dramatically reduced EU immigration (down to a trickle of a few thousand net from hundreds of thousands before 2016), but at the cost of staffing shortages. Now the majority of migrants are from Asia and Africa, which in some ways has shifted the discourse – one might observe there is less political agitation about Polish or Romanian workers, but more about those arriving illegally or those from culturally different backgrounds. The government talks about attracting "the brightest and best" while cracking down on "illegal" entrants. Public opinion in the UK is somewhat split: a sizable segment is sympathetic to refugees (especially after seeing tragedies like migrants drowning in the Channel), yet many also demand stronger enforcement and think the country has limited capacity.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on immigration politics, public opinion, or the challenges of balancing humanitarian concerns with political realities. It provides concrete examples of policy contradictions and can support arguments about the importance of comprehensive reform or the challenges of state-level policymaking. It's also useful for analyzing the relationship between public opinion and policy outcomes.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      immigration controversies; extend beyond; border; internally; debate; what to do; millions; undocumented immigrants; already living; US; approx 11 million; comprehensive immigration reform bills; repeatedly failed; Congress; amid; partisan deadlock; meanwhile; some states; passed; own measures; Florida; 2023; enacted; strict requirements; employers; verify; immigration status; made; transporting; undocumented people; felony; some cases; causing fear; immigrant communities; conversely; states; California; expanded; social services; undocumented residents; patchwork; reflects; absence; national consensus; public opinion polls; show; Americans; broadly support; legal immigration; sympathetic; migrants; fleeing persecution; also want; stronger border enforcement; support; giving; Dreamers; brought illegally; children; path; citizenship; split; broader amnesty; immigration debate; Britain; elsewhere; carries; undercurrent; xenophobia; versus; openness; Brexit; example; dramatically reduced; EU immigration; trickle; few thousand net; hundreds of thousands; before 2016; cost; staffing shortages; now; majority; migrants; Asia; Africa; some ways; shifted; discourse; observe; less political agitation; Polish; Romanian workers; more about; arriving illegally; culturally different backgrounds; government talks; attracting; brightest and best; cracking down; illegal entrants; public opinion; UK; somewhat split; sizable segment; sympathetic; refugees; especially; seeing tragedies; migrants drowning; Channel; yet; many; also demand; stronger enforcement; think; country; limited capacity
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="global-migration-pressures" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Global Migration Pressures: Future Challenges and Interdependence</h3>
                    <p className="text-sm text-muted-foreground">Climate migrants, conflicts, and economic disparities</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Across both the US and UK, immigration remains a "major contemporary crisis" in the sense of being a persistent policy challenge and political flashpoint. The humanitarian element is significant – how to handle large flows of desperate people – and so is the sovereignty element – how to maintain an orderly system and public consent. Neither country has found a silver-bullet solution. The U.S., under a divided Congress, is stuck with patchwork executive actions and overwhelmed systems. The UK, after Brexit, has more nominal control, yet finds itself arguably more inundated by asylum claims and reliant on foreign labor than before, highlighting the interdependence globalization brings.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Going forward, pressures will likely continue due to global factors (climate migrants, conflicts like Ukraine, economic disparities). The test for these democracies will be whether they can devise immigration systems that are fair, efficient, and aligned with their values – and whether leaders can engage the public on the issue without demonizing migrants or stoking fear. At present, it's a delicate balance, and immigration keeps roiling the politics of both nations, reminding us that how we treat "the stranger at our gate" is a core question of national character. The challenge is to create policies that respect human dignity while maintaining public confidence in the system's integrity and effectiveness.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on global migration challenges, democratic governance, or the future of immigration policy. It provides insights into long-term challenges and can support arguments about the importance of international cooperation or the need for sustainable solutions. It's also useful for analyzing the relationship between global pressures and national responses.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      across both; US; UK; immigration remains; major contemporary crisis; sense; persistent policy challenge; political flashpoint; humanitarian element; significant; how to handle; large flows; desperate people; sovereignty element; how to maintain; orderly system; public consent; neither country; found; silver-bullet solution; US; under; divided Congress; stuck; patchwork executive actions; overwhelmed systems; UK; after Brexit; more nominal control; yet; finds itself; arguably; more inundated; asylum claims; reliant; foreign labor; before; highlighting; interdependence; globalization brings; going forward; pressures; likely continue; due to; global factors; climate migrants; conflicts; Ukraine; economic disparities; test; democracies; whether; devise; immigration systems; fair; efficient; aligned; values; leaders; engage; public; issue; without demonizing; migrants; stoking fear; present; delicate balance; immigration keeps; roiling; politics; both nations; reminding; how we treat; stranger at our gate; core question; national character; challenge; create policies; respect; human dignity; maintaining; public confidence; system's integrity; effectiveness
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Immigration Vocabulary</h3>
                    <p className="text-sm text-muted-foreground">Key terms and definitions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-3">
                  {essentialVocabulary.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-cyan-500">
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <div className="sm:w-1/3">
                            <Badge className="bg-cyan-500">{item.term}</Badge>
                          </div>
                          <div className="sm:w-2/3">
                            <p className="text-sm text-muted-foreground">{item.definition}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="essay-questions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Sample Essay Questions</h3>
                    <p className="text-sm text-muted-foreground">Practice topics for examinations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">1. Border Management and Humanitarian Concerns</h4>
                      <p className="text-sm">
                        "Border control must balance security with humanitarian obligations." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Immigration Policy and Economic Needs</h4>
                      <p className="text-sm">
                        To what extent do economic needs conflict with political rhetoric on immigration?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Brexit and Immigration Control</h4>
                      <p className="text-sm">
                         "Brexit has complicated rather than simplified UK immigration control." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Asylum Systems and International Law</h4>
                      <p className="text-sm">
                        How should countries balance domestic immigration control with international refugee obligations?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Public Opinion and Immigration Policy</h4>
                      <p className="text-sm">
                        "Public opinion on immigration is often misinformed and manipulated." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Climate Migration and Future Challenges</h4>
                      <p className="text-sm">
                        To what extent will climate change reshape global migration patterns?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. State vs Federal Immigration Policy</h4>
                      <p className="text-sm">
                        "Immigration policy should be uniform across all states." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Immigration and National Identity</h4>
                      <p className="text-sm">
                        How does immigration challenge and enrich national identity?
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
                            <Link to="/formation/anglais/civilisation/crises">
              <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                Next: Major Contemporary Crises
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPage; 