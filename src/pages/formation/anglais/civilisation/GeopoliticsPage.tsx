import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Globe, Shield, Target, Users, Building2, ArrowLeft, ArrowRight, MapPin, Zap, Crown } from 'lucide-react';

const GeopoliticsPage = () => {
  const keyTopics = [
    {
      title: "Great Power Competition",
      content: "US-China rivalry, Russia's role, multipolar world order, alliance systems",
      vocabulary: ["great power", "multipolar", "alliance", "rivalry", "hegemony"]
    },
    {
      title: "International Security",
      content: "NATO expansion, military alliances, arms control, regional conflicts",
      vocabulary: ["NATO", "deterrence", "arms control", "military alliance", "security"]
    },
    {
      title: "Economic Geopolitics",
      content: "Trade wars, sanctions, supply chains, energy security, globalization",
      vocabulary: ["trade war", "sanctions", "supply chains", "energy security", "globalization"]
    },
    {
      title: "Regional Dynamics",
      content: "Middle East realignments, Asia-Pacific tensions, African agency, European unity",
      vocabulary: ["realignment", "proxy conflict", "détente", "agency", "unity"]
    }
  ];

  const essentialVocabulary = [
    { term: "geopolitics", definition: "The study of how geography and politics interact in international relations" },
    { term: "multipolar", definition: "A world order with multiple centers of power rather than one dominant force" },
    { term: "détente", definition: "A relaxation of tensions between nations, especially during the Cold War" },
    { term: "proxy conflict", definition: "A war fought between groups that represent the interests of other powers" },
    { term: "sanctions", definition: "Economic or political penalties imposed by one country on another" },
    { term: "hegemony", definition: "Dominance of one country or group over others in international affairs" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
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
            <span className="text-foreground font-medium">Geopolitics and International Relations</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <Badge className="bg-purple-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Geopolitics and International Relations</CardTitle>
              <p className="text-muted-foreground">
                Global power dynamics, international alliances, and contemporary geopolitical challenges
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Geopolitical Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-purple-100">Russian invasion of Ukraine</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2023</div>
                  <div className="text-sm text-purple-100">Finland joins NATO</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2018</div>
                  <div className="text-sm text-purple-100">US-China trade war begins</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm text-purple-100">Abraham Accords signed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Accordion type="multiple" className="w-full space-y-4">
            
            {/* Key Topics */}
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Geopolitical Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
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

            {/* Russia's War in Ukraine */}
            <AccordionItem value="russia-ukraine" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Russia's War in Ukraine: Western Unity and Strategic Winds</h3>
                    <p className="text-sm text-muted-foreground">Global realignment and alliance dynamics</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The Russian invasion of Ukraine in February 2022 sent shockwaves through global geopolitics, realigning alliances and priorities. In the immediate aftermath, Western countries responded with unprecedented unity: the U.S., UK, and EU imposed sweeping sanctions on Moscow, cutting off Russian banks, oligarchs, and key exports, while also supplying billions of dollars in advanced weapons to help Ukraine resist. NATO, rejuvenated after years of drift, found a renewed sense of purpose in deterring Russia—so much so that historically neutral Finland and Sweden applied to join the alliance (with Finland becoming a member in 2023).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Yet the war also laid bare divergent strategic interests. European nations, heavily reliant on Russian energy, scrambled to find new gas sources; Germany reversed decades of pacifist policy to boost defense spending, while Hungary under Viktor Orbán proved a semi-ally for the Kremlin by obstructing some EU measures. The conflict has had paradoxical economic effects: Russia's cut-off from Europe spurred it to deepen ties with China, India, and others, selling oil at discounts and forging a "no limits" partnership with Beijing. Meanwhile, the U.S.—though firmly backing Ukraine—benefited in one aspect: as Europe weaned off Russian gas, it pivoted to importing American LNG, giving U.S. energy producers a lucrative new market. The war's progression (a grinding attritional fight with no clear end by 2025) continues to shape the world order. It has strengthened the Western bloc but also accelerated a budding East-West bifurcation, with democracies on one side and authoritarian regimes on the other testing the resolve of the post-Cold War international system.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is versatile for discussions on international security, alliance politics, or energy geopolitics. It shows how a single conflict can influence many domains: NATO expansion, energy markets, global alignments. Use it to argue about the resilience or strains of Western unity, the emergence of a new Cold War-like division, or the unintended consequences of war in a globalized economy.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      invasion; shockwaves; sweeping sanctions; oligarchs; rejuvenated; deterrence; pacifist policy; semi-ally; obstructing; paradoxical; weaned off; LNG (liquefied natural gas); lucrative; attritional; world order; bifurcation; resolve
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* China's Rise */}
            <AccordionItem value="china-rise" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">The Rise of China and the New Cold War Dynamics</h3>
                    <p className="text-sm text-muted-foreground">Great power rivalry and strategic competition</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    China's ascent to superpower status has increasingly defined global geopolitics, often in adversarial contrast with the United States. Under President Xi Jinping, China has grown more assertive both regionally and globally. In Asia, Beijing's sweeping territorial claims in the South China Sea led it to build militarized artificial islands, despite an international tribunal ruling against those claims in 2016. It has also ramped up military pressure on Taiwan—frequently sending fighter jets into Taiwan's air defense zone and staging large-scale naval exercises that simulate a blockade or invasion.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The U.S., which views Taiwan's security as vital, has responded by strengthening Indo-Pacific alliances: revitalizing the "Quad" partnership with Japan, India, and Australia, and in 2021 forming AUKUS (a security pact to help Australia acquire nuclear-powered submarines). Economically, a tit-for-tat trade war that began in 2018 has evolved into broader competition over technology and supply chains. Washington has banned cutting-edge semiconductor exports to China, aiming to cripple Chinese advancements in AI and supercomputing, while China has sought to reduce dependence on American tech by developing its own chip industry. Many countries feel caught in between—benefiting from Chinese investment and trade, but wary of its growing influence and authoritarian model. This dynamic has sparked talk of a "new Cold War," though it differs from the 20th-century U.S.–Soviet rivalry: today's U.S.–China competition is as much about technological supremacy and economic power as it is about military might or ideology. How this relationship unfolds will likely be the central strategic question of the 21st century.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph to illustrate contemporary great power rivalry, especially in questions about U.S. foreign policy or global stability. It covers concrete actions (island-building, trade war, alliances) that provide evidence in arguments about whether conflict with China is inevitable or how countries should navigate Sino-American tensions. It's also good for technology-related international issues or comparisons between old and new Cold Wars.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      ascent; adversarial; assertive; territorial claims; militarized; air defense zone; blockade; Indo-Pacific; tit-for-tat; supply chains; semiconductor; cripple; dependence; authoritarian model; supremacy; rivalry
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Globalization Retreat */}
            <AccordionItem value="globalization-retreat" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Globalization's Retreat and the Supply Chain Reordering</h3>
                    <p className="text-sm text-muted-foreground">Economic decoupling and resilience strategies</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The era of hyper-globalization that defined the late 20th and early 21st centuries has entered a period of reassessment, as nations rethink economic interdependence in light of recent shocks. The U.S.–China trade war, the COVID-19 pandemic, and Russia's Ukraine invasion each exposed vulnerabilities in far-flung supply chains. Shortages of everything from medical masks to microchips made clear the risks of over-reliance on single foreign suppliers. In response, a trend toward "decoupling" or "friend-shoring" has gained momentum. Companies and governments are diversifying supply sources and bringing production closer to home or to trusted partners.
                  </p>
                  <p className="text-justify leading-relaxed">
                    For instance, Japan set up incentives for firms to relocate factories out of China after pandemic disruptions. The European Union launched its "CHIPS Act" to boost domestic semiconductor manufacturing, aiming to double its global market share by 2030. The United States, through the 2022 CHIPS and Science Act, similarly poured subsidies into American chip plants and restricted exports of advanced chips to rival nations. This pullback from unfettered free trade is also evident in the proliferation of regional trade blocs and tariff walls. While globalization is far from dead, its nature is changing: efficiency at all costs is yielding to a calculus that weighs resilience and national security. Emerging economies worry this shift could leave them sidelined, while consumers in wealthy countries may face higher prices. The big question is whether the world can strike a new balance—maintaining the gains of global integration while safeguarding against its downsides.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is useful in economic globalization debates or discussions on how recent events are reshaping world trade. It shows concrete policy responses to supply chain issues, giving weight to arguments about the end of an era of globalization or the transition to something new. It would support points about protectionism, the impact of COVID-19 on global systems, or the future of trade.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      hyper-globalization; interdependence; shocks; far-flung; over-reliance; decoupling; friend-shoring; diversify; incentives; relocate; manufacturing; subsidies; unfettered; proliferation; tariff walls; resilience; sidelined; integration; downsides
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Middle East Realignments */}
            <AccordionItem value="middle-east" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Middle East Realignments: New Alliances and Old Conflicts</h3>
                    <p className="text-sm text-muted-foreground">Regional diplomacy and shifting power dynamics</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The Middle East's geopolitical landscape has been shifting in unexpected ways, as longtime adversaries open dialogues and external powers recalibrate their roles. One striking development was the 2023 China-brokered agreement between Saudi Arabia and Iran to restore diplomatic relations after years of proxy conflict. This détente between the leading Sunni and Shia powers raised hopes for easing regional tensions—from Yemen's civil war to Lebanon's instability—though deep rivalries remain. Meanwhile, the Abraham Accords of 2020, in which Israel normalized relations with several Arab states (UAE, Bahrain, Morocco, and Sudan), have upended traditional fault lines.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Shared concern over Iran has quietly aligned Israel with Gulf Arab monarchies, even as the Israeli-Palestinian conflict simmers on with periodic violence in Gaza and the West Bank. The United States, once the unchallenged broker in the region, finds its influence challenged by Russia's and China's forays—Russia via military involvement in Syria, and China via economic investment and diplomatic ventures like the Saudi-Iran deal. Yet the U.S. remains deeply engaged, maintaining troops in Syria, Iraq, and the Persian Gulf and acting as Israel's key ally. Another realignment has occurred in energy: after the shock of Russia's war in Europe, Gulf oil producers like Saudi found themselves courted by both East and West, their OPEC+ decisions capable of roiling global markets. The Middle East thus stands at a crossroads: old enmities haven't vanished, but pragmatic interests are forging new alignments, suggesting a region in flux where the next decade could defy conventional expectations.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph to provide a nuanced update on the Middle East. It's great for essays on international relations, showing how alliances are not static. It demonstrates multipolarity (China's role) and can be used to argue about the decline of U.S. hegemony or the interplay of conflict and diplomacy. Also handy for discussions of energy politics.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      landscape; adversaries; recalibrate; brokered; restore diplomatic relations; proxy conflict; détente; normalize relations; fault lines; simmers; broker; forays; ventures; engaged; realignment; courted; roiling; enmities; pragmatic; in flux; conventional expectations
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Africa's Emerging Role */}
            <AccordionItem value="africa-role" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Africa's Emerging Role and Great Power Competition</h3>
                    <p className="text-sm text-muted-foreground">Continent as geopolitical stage and strategic actor</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Long viewed through a lens of aid and instability, Africa is increasingly becoming a stage for great power competition and asserting its own agency. China has entrenched itself as Africa's biggest trading partner and a major investor in infrastructure via its Belt and Road Initiative—building railways, ports, and highways in exchange for access to resources and markets. Beijing's economic heft has won it influence: many African governments praise Chinese financing for being fast and less conditional than Western aid, even as critics warn of "debt traps" and loss of sovereignty. Russia, too, has sought a foothold: beyond arms sales and security contractors (like the Wagner Group active in countries from Mali to the Central African Republic), Moscow has courted African leaders diplomatically, emphasizing Soviet-era ties and anti-colonial solidarity.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This bore fruit in 2023 when numerous African nations remained neutral on UN resolutions condemning Russia's invasion of Ukraine. The United States and European powers, meanwhile, are trying to re-engage, pitching initiatives on clean energy, public health, and digital investment, partly to counter China's narrative. African states themselves are not just pawns; they have shown growing unity in forums like the African Union and are leveraging competition between outsiders to their benefit. For example, Zambia and Ghana have renegotiated Chinese loans while also getting IMF support, playing both sides. With one-fifth of the world's population and vast untapped economic potential, Africa's stance on global issues—from climate change to internet governance—will carry more weight. The continent's future may well be defined by how skillfully it navigates external interests while pursuing its own development path.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can appear in essays about global power shifts, development, or neo-colonialism. It demonstrates how Africa is not monolithic and how global players engage there, which is great for arguments about multipolar world structures or the legacy of colonialism. It provides specifics (China's Belt and Road, Wagner Group, UN votes) to back up points on influence and strategy.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      stage (for competition); entrenched; Belt and Road Initiative; conditional; debt traps; foothold; contractors; courted; solidarity; bore fruit; condemning; re-engage; pitching initiatives; narrative; pawns; unity; leveraging; renegotiated; untapped; governance; navigate; external interests
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Essential Vocabulary */}
            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Geopolitical Vocabulary</h3>
                    <p className="text-sm text-muted-foreground">Key terms and definitions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-3">
                  {essentialVocabulary.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <div className="sm:w-1/3">
                            <Badge className="bg-blue-500">{item.term}</Badge>
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

            {/* Essay Questions */}
            <AccordionItem value="essay-questions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Great Power Competition</h4>
                      <p className="text-sm">
                        "The 21st century will be defined by US-China rivalry." Discuss this statement with reference to contemporary geopolitical developments and their global implications.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Alliance Politics</h4>
                      <p className="text-sm">
                        To what extent has Russia's invasion of Ukraine strengthened or weakened Western unity? Analyze the impact on NATO and transatlantic relations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Globalization's Future</h4>
                      <p className="text-sm">
                        "Globalization is in retreat." Assess this claim by examining recent trends in supply chains, trade policies, and international economic relations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Middle East Dynamics</h4>
                      <p className="text-sm">
                        How have recent diplomatic developments in the Middle East challenged traditional regional alignments? Evaluate the role of external powers in shaping these changes.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. African Agency</h4>
                      <p className="text-sm">
                        "Africa is no longer just a pawn in great power games." Discuss this statement with reference to contemporary African diplomacy and strategic positioning.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Energy Geopolitics</h4>
                      <p className="text-sm">
                        How has the Ukraine war transformed global energy markets and what does this reveal about the relationship between energy security and international relations?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Technology Competition</h4>
                      <p className="text-sm">
                        "The new Cold War is about technological supremacy, not ideology." Assess this claim by examining US-China competition in areas like semiconductors and AI.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Multipolar World</h4>
                      <p className="text-sm">
                        To what extent is the world becoming truly multipolar? Analyze the evidence for and against the decline of US hegemony in contemporary international relations.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
                            <Link to="/formation/anglais/civilisation/technology">
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
                Next: AI and Technology
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopoliticsPage; 