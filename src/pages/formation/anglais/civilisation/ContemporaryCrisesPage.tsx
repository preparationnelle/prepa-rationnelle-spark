import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf, TrendingDown, Gavel, Church, MapPin, Activity, DollarSign, Flame, Droplets } from 'lucide-react';

const ContemporaryCrisesPage = () => {
  const keyTopics = [
    {
      title: "COVID-19 Pandemic and Long-term Impacts",
      content: "6.9M+ deaths, healthcare system stress, Long COVID, vaccine development, social disruption",
      vocabulary: ["pandemic", "excess mortality", "Long COVID", "vaccine rollout", "healthcare systems", "social disruption"]
    },
    {
      title: "Global Inflation and Economic Crisis",
      content: "9.1% US inflation peak, 11.1% UK inflation, interest rate hikes, cost-of-living crisis, strikes",
      vocabulary: ["inflation", "interest rates", "cost-of-living crisis", "supply chain", "stimulus spending", "industrial strikes"]
    },
    {
      title: "Russia-Ukraine War and Geopolitical Shifts",
      content: "Largest European conflict since WWII, energy crisis, NATO unity, sanctions, global supply disruption",
      vocabulary: ["geopolitical crisis", "sanctions", "energy crisis", "NATO unity", "supply disruption", "military aid"]
    },
    {
      title: "Climate Change and Environmental Disasters",
      content: "Record heatwaves, wildfires, floods, climate investment, COP summits, loss and damage",
      vocabulary: ["climate crisis", "extreme weather", "renewable energy", "climate finance", "loss and damage", "carbon emissions"]
    }
  ];

  const essentialVocabulary = [
    { term: "Long COVID", definition: "Persistent symptoms lasting months after COVID-19 infection, affecting millions globally" },
    { term: "cost-of-living crisis", definition: "Situation where basic living expenses rise faster than wages, reducing real income" },
    { term: "supply chain disruption", definition: "Interruption in the flow of goods and services, often causing shortages and price increases" },
    { term: "geopolitical crisis", definition: "Major international conflict or tension affecting global politics and economics" },
    { term: "climate finance", definition: "Financial support from developed countries to help developing nations address climate change" },
    { term: "black swan events", definition: "Unpredictable, rare events with severe consequences that are often rationalized in hindsight" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Major Contemporary Crises</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-500 text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <Badge className="bg-red-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Major Contemporary Crises</CardTitle>
              <p className="text-muted-foreground">
                Pandemic, inflation, war, and climate change: overlapping global challenges of the 2020s
              </p>
            </CardHeader>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Crisis Statistics 2020-2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">6.9M+</div>
                  <div className="text-sm text-red-100">Official COVID-19 deaths worldwide</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">9.1%</div>
                  <div className="text-sm text-red-100">US inflation peak June 2022</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">11.1%</div>
                  <div className="text-sm text-red-100">UK inflation peak October 2022</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-red-100">Russia invades Ukraine</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="w-full space-y-4">
            
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Crisis Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and overlapping challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500">
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

            <AccordionItem value="covid-pandemic" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">COVID-19 Pandemic: The Defining Crisis of 2020-2021</h3>
                    <p className="text-sm text-muted-foreground">6.9M+ deaths, healthcare stress, and lasting impacts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The mid-2020s have been shaped by a series of overlapping crises that have tested resilience globally. The COVID-19 pandemic was, of course, the defining crisis of 2020–2021. By 2025, the acute phase has receded – life in most countries returned to normal routines, and the World Health Organization declared the emergency over in May 2023. Yet the pandemic's impacts are still felt. Worldwide, officially about 6.9 million people died from COVID-19, but excess mortality estimates suggest the true toll could be two to three times higher. The shock to healthcare systems revealed strengths and weaknesses. In the US and UK, initial responses were criticized (for slow lockdowns or inadequate protective gear), but the rapid development of vaccines was a triumph of science.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Mass vaccination campaigns by 2021 protected the majority of adults in wealthy countries, though uptake lagged in some groups due to misinformation. Booster shots continue to be offered for vulnerable populations as new variants emerge, but thankfully recent variants have been milder. One lasting health concern is Long COVID – millions suffer lingering symptoms months after infection, impacting labor force participation and quality of life, a slow-burning public health issue that governments are only beginning to address. The pandemic's social and economic disruption created unprecedented challenges, from school closures to remote work transitions, while also accelerating digital transformation across sectors.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on public health crises, global governance, or the long-term impacts of major events. It provides concrete data on mortality and can support arguments about healthcare system resilience or the importance of international cooperation. It's also useful for analyzing the relationship between crisis response and long-term consequences.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      mid-2020s; shaped by; series; overlapping crises; tested resilience; globally; COVID-19 pandemic; defining crisis; 2020-2021; 2025; acute phase; receded; life; most countries; returned; normal routines; World Health Organization; declared; emergency over; May 2023; yet; pandemic's impacts; still felt; worldwide; officially; about 6.9 million people; died; COVID-19; excess mortality estimates; suggest; true toll; could be; two to three times higher; shock; healthcare systems; revealed; strengths; weaknesses; US; UK; initial responses; criticized; slow lockdowns; inadequate protective gear; rapid development; vaccines; triumph; science; mass vaccination campaigns; 2021; protected; majority; adults; wealthy countries; though; uptake lagged; some groups; due to; misinformation; booster shots; continue; offered; vulnerable populations; new variants emerge; thankfully; recent variants; milder; lasting health concern; Long COVID; millions suffer; lingering symptoms; months after infection; impacting; labor force participation; quality of life; slow-burning; public health issue; governments; beginning; address; pandemic's social; economic disruption; created; unprecedented challenges; school closures; remote work transitions; while also; accelerating; digital transformation; across sectors
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inflation-crisis" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Global Inflation Crisis: From Pandemic to Cost-of-Living Emergency</h3>
                    <p className="text-sm text-muted-foreground">9.1% US peak, 11.1% UK spike, interest rate hikes, and industrial strikes</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Economically, the pandemic triggered a brief but severe recession in 2020, followed by an unusual rebound that, combined with supply chain disruptions and stimulus spending, led to a global surge in inflation. In 2022, inflation in many countries hit heights not seen since the early 1980s. The US saw consumer prices peak at 9.1% annual inflation (June 2022) – driven by everything from used car shortages to $5/gallon gasoline – before gradually easing to ~3–4% by late 2023. The Federal Reserve responded with aggressive interest rate hikes (from near 0% to over 5% benchmark rate in a year), aiming to cool demand. This raised borrowing costs for consumers and businesses, slowing sectors like housing (home sales dipped as mortgage rates topped 7%).
                  </p>
                  <p className="text-justify leading-relaxed">
                    The UK had an even sharper spike: inflation topped 11.1% in October 2022, a 41-year high. Skyrocketing natural gas prices (due to Russia's war in Ukraine and Europe's energy crunch) fed directly into UK household energy bills, which more than doubled for many. By 2023, Britain's inflation hovered around 7% – still highest in the G7 – forcing the Bank of England to push interest rates up (from 0.1% in 2021 to over 5% in 2023). These inflationary pressures created a cost-of-living crisis. Wages did not keep up, meaning real incomes fell for most workers. In the UK, this led to the largest wave of industrial strikes in decades: rail workers, nurses, teachers, postal workers, university lecturers – all staged strikes in 2022–2023 demanding pay raises to match inflation.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on economic crises, monetary policy, or the relationship between global events and inflation. It provides concrete examples of policy responses and can support arguments about the effectiveness of central bank interventions or the challenges of managing inflation. It's also useful for analyzing the relationship between economic policy and social unrest.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      economically; pandemic triggered; brief; severe recession; 2020; followed by; unusual rebound; combined with; supply chain disruptions; stimulus spending; led to; global surge; inflation; 2022; inflation; many countries; hit heights; not seen; early 1980s; US saw; consumer prices; peak; 9.1% annual inflation; June 2022; driven by; everything; used car shortages; 5/gallon gasoline; before; gradually easing; 3-4%; late 2023; Federal Reserve; responded; aggressive interest rate hikes; near 0%; over 5% benchmark rate; year; aiming; cool demand; raised; borrowing costs; consumers; businesses; slowing sectors; housing; home sales dipped; mortgage rates topped; 7%; UK had; even sharper spike; inflation topped; 11.1%; October 2022; 41-year high; skyrocketing; natural gas prices; due to; Russia's war; Ukraine; Europe's energy crunch; fed directly; UK household energy bills; more than doubled; many; 2023; Britain's inflation; hovered; around 7%; still highest; G7; forcing; Bank of England; push interest rates up; 0.1%; 2021; over 5%; 2023; inflationary pressures; created; cost-of-living crisis; wages; did not keep up; meaning; real incomes fell; most workers; UK; led to; largest wave; industrial strikes; decades; rail workers; nurses; teachers; postal workers; university lecturers; all staged strikes; 2022-2023; demanding; pay raises; match inflation
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="russia-ukraine-war" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Russia-Ukraine War: Geopolitical Crisis and Global Disruption</h3>
                    <p className="text-sm text-muted-foreground">Largest European conflict since WWII, energy crisis, and NATO unity test</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Another crisis layered onto this was Russia's invasion of Ukraine in February 2022, the largest armed conflict in Europe since WWII. Beyond its devastating humanitarian toll on Ukraine, the war roiled global markets – spiking prices for energy, grain, and fertilizer, given Russia's and Ukraine's key exports. Europe, including the UK, scrambled to replace Russian gas (with some success by late 2022 through alternative suppliers and reduced consumption). Western countries imposed heavy sanctions on Moscow, contributing to global supply shifts. The war also prompted a geopolitical crisis: NATO unity was tested but held firm, with the US, UK, and EU supplying billions in military aid to Ukraine.
                  </p>
                  <p className="text-justify leading-relaxed">
                    By 2025, the war is unresolved, but Ukraine's staunch resistance – and Russia's partial setbacks – have become defining elements of the international order. The conflict has to some extent revitalized NATO and focused Western foreign policy, but also has had blowback in higher defense spending (at the cost of other priorities) and strained relations with the Global South (some of whom resent Western singular focus on Ukraine vs issues like hunger or debt relief). The war's economic impact extended beyond energy prices, affecting global food security, disrupting supply chains, and contributing to the inflationary pressures that defined the early 2020s economic landscape.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on international relations, economic sanctions, or the global impact of regional conflicts. It provides concrete examples of geopolitical consequences and can support arguments about the effectiveness of international cooperation or the costs of military conflict. It's also useful for analyzing the relationship between security policy and economic stability.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      another crisis; layered onto; Russia's invasion; Ukraine; February 2022; largest armed conflict; Europe; since WWII; beyond; devastating humanitarian toll; Ukraine; war roiled; global markets; spiking prices; energy; grain; fertilizer; given; Russia's; Ukraine's; key exports; Europe; including; UK; scrambled; replace; Russian gas; some success; late 2022; through; alternative suppliers; reduced consumption; Western countries; imposed; heavy sanctions; Moscow; contributing to; global supply shifts; war also prompted; geopolitical crisis; NATO unity; tested; held firm; US; UK; EU; supplying; billions; military aid; Ukraine; 2025; war; unresolved; Ukraine's staunch resistance; Russia's partial setbacks; become; defining elements; international order; conflict; to some extent; revitalized NATO; focused; Western foreign policy; also had; blowback; higher defense spending; cost; other priorities; strained relations; Global South; some; resent; Western singular focus; Ukraine; vs issues; hunger; debt relief; war's economic impact; extended beyond; energy prices; affecting; global food security; disrupting; supply chains; contributing to; inflationary pressures; defined; early 2020s; economic landscape
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="climate-change" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Climate Change: Slow-Motion Crisis with Acute Effects</h3>
                    <p className="text-sm text-muted-foreground">Record heatwaves, wildfires, floods, and climate investment responses</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Climate change must be mentioned as a slow-motion crisis that showed acute effects in recent years as well. 2023 was globally one of the hottest years on record; the summer saw lethal heatwaves in Europe, China, and the US, with temperatures exceeding 40°C in normally temperate areas. Wildfires raged in unusual places – Canada experienced its worst wildfire season ever, blanketing U.S. cities in smoke; Hawaii saw a freak wildfire destroy the town of Lahaina; and Southern Europe battled blazes in Greece, Spain, Portugal. Floods, too, hit regions from Pakistan (a cataclysmic flood in 2022 submerged a third of the country) to Nigeria to Germany. These disasters underscored the here-and-now nature of the climate crisis.
                  </p>
                  <p className="text-justify leading-relaxed">
                    They also fed into the energy/inflation crisis: 2022's high fossil fuel prices prompted some short-term increases in coal use, but also a redoubled push for renewables and electric vehicles as longer-term solutions. Major economies put forward climate investment packages (e.g., the US Inflation Reduction Act of 2022, which despite its name is a huge climate subsidies law). However, at COP climate summits, there's growing impatience from developing countries for richer nations to deliver promised climate finance and to compensate for "loss and damage" from climate-induced catastrophes. The climate crisis has become increasingly intertwined with economic and social challenges, requiring coordinated global responses.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on environmental policy, global cooperation, or the economic costs of climate change. It provides concrete examples of climate impacts and can support arguments about the urgency of climate action or the need for international climate finance. It's also useful for analyzing the relationship between environmental and economic crises.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      climate change; must be mentioned; slow-motion crisis; showed; acute effects; recent years; 2023; globally; hottest years; record; summer saw; lethal heatwaves; Europe; China; US; temperatures exceeding; 40°C; normally temperate areas; wildfires raged; unusual places; Canada experienced; worst wildfire season; ever; blanketing; US cities; smoke; Hawaii saw; freak wildfire; destroy; town; Lahaina; Southern Europe; battled blazes; Greece; Spain; Portugal; floods; hit regions; Pakistan; cataclysmic flood; 2022; submerged; third; country; Nigeria; Germany; disasters underscored; here-and-now nature; climate crisis; also fed into; energy/inflation crisis; 2022's high fossil fuel prices; prompted; short-term increases; coal use; also; redoubled push; renewables; electric vehicles; longer-term solutions; major economies; put forward; climate investment packages; US Inflation Reduction Act; 2022; despite; name; huge climate subsidies law; however; COP climate summits; growing impatience; developing countries; richer nations; deliver; promised climate finance; compensate; loss and damage; climate-induced catastrophes; climate crisis; become increasingly intertwined; economic; social challenges; requiring; coordinated global responses
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crisis-overlap" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Crisis Overlap and Global Resilience: Lessons Learned</h3>
                    <p className="text-sm text-muted-foreground">Interconnected challenges, policy responses, and future preparedness</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    To sum up, the first half of the 2020s has been a crucible of crises: a pandemic that killed millions and shut down society, an inflationary spike that eroded living standards, a land war in Europe that unsettled geopolitics, and a drumbeat of climate disasters reminding us that the planet's stability is in peril. The silver linings are that these challenges have spurred remarkable responses too – the fastest vaccine rollout in history; international cooperation on some fronts (for example, G7 working to cap Russian oil prices to stabilize markets); renewed social safety nets (as seen in unprecedented stimulus and relief programs during COVID, which kept poverty temporarily low); and technological strides (like mRNA vaccine tech, or progress in renewable energy efficiency).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Societies have, by and large, proven adaptable, but not without costs and contentious debates. In politics, these crises have sometimes strengthened polarization (masks and vaccine mandates became politicized in the US; energy vs climate policy splits in Europe), but they also clarified the stakes of good governance. For instance, countries that managed COVID competently (like South Korea or New Zealand) saved more lives, and those that prepared for energy shocks (like by having gas storage or renewables) weathered the inflation better. As of 2025, the pandemic is mostly behind us, and inflation is gradually easing (central banks predict a return to ~2–3% rates in coming years, barring new shocks). But public debt is much higher after emergency spending, and interest costs are rising – which could constrain future government action.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on crisis management, global governance, or the long-term lessons from major events. It provides insights into policy effectiveness and can support arguments about the importance of preparedness or the value of international cooperation. It's also useful for analyzing the relationship between crisis response and future resilience.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      sum up; first half; 2020s; crucible; crises; pandemic; killed millions; shut down society; inflationary spike; eroded; living standards; land war; Europe; unsettled geopolitics; drumbeat; climate disasters; reminding; planet's stability; peril; silver linings; challenges; spurred; remarkable responses; fastest vaccine rollout; history; international cooperation; some fronts; G7 working; cap; Russian oil prices; stabilize markets; renewed; social safety nets; unprecedented stimulus; relief programs; COVID; kept poverty; temporarily low; technological strides; mRNA vaccine tech; progress; renewable energy efficiency; societies; by and large; proven adaptable; without costs; contentious debates; politics; crises; sometimes strengthened; polarization; masks; vaccine mandates; became politicized; US; energy vs climate policy; splits; Europe; also clarified; stakes; good governance; instance; countries; managed COVID; competently; South Korea; New Zealand; saved; more lives; prepared; energy shocks; gas storage; renewables; weathered; inflation better; 2025; pandemic; mostly behind us; inflation; gradually easing; central banks predict; return; 2-3% rates; coming years; barring; new shocks; public debt; much higher; emergency spending; interest costs; rising; could constrain; future government action
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
                    <h3 className="text-lg font-semibold">Essential Crisis Vocabulary</h3>
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
                      <h4 className="font-semibold mb-2">1. Global Crisis Management and Cooperation</h4>
                      <p className="text-sm">
                        "Global crises require coordinated international responses." Assess this statement with reference to recent events.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Economic Policy During Crisis</h4>
                      <p className="text-sm">
                        To what extent did pandemic responses contribute to the global inflation crisis?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Climate Change and Economic Stability</h4>
                      <p className="text-sm">
                         "Climate change is now an economic crisis, not just an environmental one." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Healthcare Systems Under Stress</h4>
                      <p className="text-sm">
                        How did the COVID-19 pandemic reveal the strengths and weaknesses of healthcare systems?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Social Cohesion During Crisis</h4>
                      <p className="text-sm">
                        "Crises can both unite and divide societies." Discuss with reference to recent global events.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Energy Security and Geopolitics</h4>
                      <p className="text-sm">
                        To what extent has the Russia-Ukraine war reshaped global energy markets?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Central Bank Policy and Inflation</h4>
                      <p className="text-sm">
                        "Central banks were unprepared for the inflation crisis." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future Crisis Preparedness</h4>
                      <p className="text-sm">
                        What lessons should governments learn from the overlapping crises of the early 2020s?
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
            <Link to="/formation/anglais/civilisation/environment">
              <Button className="flex items-center gap-2 bg-red-500 hover:bg-red-600">
                Next: Environment and Ecology
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContemporaryCrisesPage; 