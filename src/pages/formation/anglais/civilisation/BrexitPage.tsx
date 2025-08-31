import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf, TrendingDown } from 'lucide-react';

const BrexitPage = () => {
  const keyTopics = [
    {
      title: "Economic Impact and Trade Barriers",
      content: "GDP reduction, trade volume decline, customs checks, inflation effects, supply chain costs",
      vocabulary: ["Brexit", "GDP reduction", "trade barriers", "customs checks", "inflation", "supply chain costs"]
    },
    {
      title: "Political Aftermath and Stabilization",
      content: "Government instability, Brexit fatigue, Windsor Framework, Northern Ireland Protocol resolution",
      vocabulary: ["political friction", "Brexit fatigue", "Windsor Framework", "Northern Ireland Protocol", "Stormont Brake"]
    },
    {
      title: "UK Unity and Centrifugal Forces",
      content: "Scottish independence, Northern Ireland border poll, Irish reunification, devolved government",
      vocabulary: ["centrifugal forces", "Scottish independence", "border poll", "Irish reunification", "devolved government"]
    },
    {
      title: "Public Opinion and Bregret",
      content: "57% believe Brexit was mistake, majority would rejoin, tangible downsides, limited benefits",
      vocabulary: ["Bregret", "public opinion", "tangible downsides", "free movement", "sovereignty"]
    }
  ];

  const essentialVocabulary = [
    { term: "Brexit", definition: "Britain's withdrawal from the European Union, completed in 2020" },
    { term: "Windsor Framework", definition: "2023 agreement between UK and EU resolving Northern Ireland Protocol issues" },
    { term: "Northern Ireland Protocol", definition: "Post-Brexit arrangement for trade between Great Britain and Northern Ireland" },
    { term: "Stormont Brake", definition: "Mechanism giving Northern Irish lawmakers say over new EU rules" },
    { term: "Bregret", definition: "Regret over Brexit decision, reflected in public opinion polls" },
    { term: "centrifugal forces", definition: "Forces that pull apart or separate parts of a political entity" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
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
            <span className="text-foreground font-medium">Brexit and its Aftermath</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <Flag className="h-5 w-5" />
                </div>
                <Badge className="bg-blue-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Brexit and its Aftermath</CardTitle>
              <p className="text-muted-foreground">
                Britain's EU withdrawal and its ongoing impact on politics, economy, and society
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Brexit Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm text-blue-100">Brexit completed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">3-4%</div>
                  <div className="text-sm text-blue-100">GDP smaller than if remained in EU</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">15%</div>
                  <div className="text-sm text-blue-100">Lower trade volumes long-term</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">57%</div>
                  <div className="text-sm text-blue-100">Britons believe Brexit was mistake</div>
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
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Brexit Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
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

            {/* Economic Impact and Trade Barriers */}
            <AccordionItem value="economic-impact" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Economic Impact: Slower Growth and Trade Barriers</h3>
                    <p className="text-sm text-muted-foreground">GDP reduction and trade volume decline</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Britain's withdrawal from the EU in 2020 ("Brexit") continues to reshape its politics and economy. Nearly three years on, the verdict is sobering: Brexit has contributed to slower growth, trade barriers, and political friction. Economically, multiple analyses indicate the UK economy is 3–4% smaller than it would have been had Britain remained in the EU. The chairman of the Office for Budget Responsibility – the UK's fiscal watchdog – said in 2023 that Brexit's impact is "of the order of magnitude" of the COVID-19 pandemic in hitting GDP, likely a long-run 4% loss of output.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Trade data back this: UK exports to the EU fell sharply after new customs checks kicked in. The OBR estimated that total UK trade volumes will be 15% lower in the long run due to Brexit's new frictions. By 2022, goods exports to the EU were still 18% below their 2019 (pre-Brexit) level. While Britain has signed new trade deals around the world, most either copy pre-existing EU deals or are too small to offset lost EU commerce. The much-touted UK-Australia free trade agreement, for example, is forecast to add only a 0.1% boost to GDP over 15 years. In short, the promised "Global Britain" boom has yet to materialize. Instead, many businesses (especially small exporters) have struggled with added paperwork, and some have ceased exporting to Europe entirely. Sectors like farming and fishing, which expected gains, have voiced disappointment or harm from new barriers. Even Britain's inflation woes have been aggravated by Brexit: economists note Brexit added to supply chain costs and labor shortages, making the UK's recent inflation spike worse than other G7 countries.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on Brexit's economic consequences, trade policy, or the impact of political decisions on economic performance. It provides concrete data on GDP reduction and can support arguments about the costs of economic nationalism or the importance of trade relationships. It's also useful for analyzing the relationship between political choices and economic outcomes.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      Britain's withdrawal; EU; 2020; Brexit; continues to reshape; politics; economy; nearly three years; verdict; sobering; contributed to; slower growth; trade barriers; political friction; economically; multiple analyses; indicate; UK economy; 3–4% smaller; would have been; remained in EU; chairman; Office for Budget Responsibility; UK's fiscal watchdog; said; 2023; Brexit's impact; order of magnitude; COVID-19 pandemic; hitting GDP; likely; long-run; 4% loss; output; trade data; back this; UK exports; EU; fell sharply; new customs checks; kicked in; OBR estimated; total UK trade volumes; 15% lower; long run; Brexit's new frictions; 2022; goods exports; EU; still; 18% below; 2019; pre-Brexit level; Britain has signed; new trade deals; around the world; most; copy; pre-existing EU deals; too small; offset; lost EU commerce; much-touted; UK-Australia free trade agreement; example; forecast; add only; 0.1% boost; GDP; 15 years; promised; Global Britain boom; yet to materialize; instead; many businesses; small exporters; struggled; added paperwork; ceased exporting; Europe entirely; sectors; farming; fishing; expected gains; voiced disappointment; harm; new barriers; Britain's inflation woes; aggravated; Brexit; economists note; Brexit added; supply chain costs; labor shortages; making; UK's recent inflation spike; worse; other G7 countries
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Political Aftermath and Stabilization */}
            <AccordionItem value="political-aftermath" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Political Aftermath: From Tumult to Gradual Stabilization</h3>
                    <p className="text-sm text-muted-foreground">Government instability and Brexit fatigue</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Politically, Brexit's aftermath has been tumultuous but gradually stabilizing. It initially led to years of bitter division and unstable governments. By 2023–24, a kind of Brexit fatigue set in among the public, and both major parties (Conservatives and Labour) committed to not revisiting EU membership in the near term. However, the question of the UK's relationship with Europe is far from settled. In February 2023, Prime Minister Rishi Sunak negotiated the Windsor Framework with the EU, resolving a major sticking point: the Northern Ireland Protocol.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The deal introduced a "green lane" to reduce checks on goods moving from Great Britain to Northern Ireland (if they are staying in NI) and a "Stormont Brake" giving Northern Irish lawmakers some say over new EU rules. This compromise was aimed at reconciling the need to avoid a hard border on the island of Ireland with unionist concerns about NI's place in the UK internal market. The Windsor Framework largely succeeded in EU-UK diplomacy terms – the EU dropped legal actions, and relations thawed – and by early 2024 it helped facilitate the restoration of Northern Ireland's devolved government. After a two-year paralysis of the NI Assembly (caused by the Democratic Unionist Party's protest over the Protocol), the UK government reached an agreement with the DUP in Jan 2024 that addressed their remaining concerns and included a £3.3 billion support package for Northern Ireland. This paved the way for power-sharing to resume, with Sinn Féin's Michelle O'Neill poised to become First Minister – a historic first for an Irish nationalist in that role.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on post-Brexit politics, diplomatic relations, or the resolution of complex political conflicts. It provides concrete examples of political agreements and can support arguments about the importance of compromise in politics or the challenges of maintaining political stability. It's also useful for analyzing the relationship between political leadership and conflict resolution.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      politically; Brexit's aftermath; tumultuous; gradually stabilizing; initially led to; years; bitter division; unstable governments; 2023–24; Brexit fatigue; set in; public; both major parties; Conservatives; Labour; committed; not revisiting; EU membership; near term; question; UK's relationship; Europe; far from settled; February 2023; Prime Minister; Rishi Sunak; negotiated; Windsor Framework; EU; resolving; major sticking point; Northern Ireland Protocol; deal introduced; green lane; reduce checks; goods moving; Great Britain; Northern Ireland; staying in NI; Stormont Brake; giving; Northern Irish lawmakers; say over; new EU rules; compromise; aimed at; reconciling; need; avoid; hard border; island of Ireland; unionist concerns; NI's place; UK internal market; Windsor Framework; largely succeeded; EU-UK diplomacy terms; EU dropped; legal actions; relations thawed; early 2024; helped facilitate; restoration; Northern Ireland's devolved government; two-year paralysis; NI Assembly; caused by; Democratic Unionist Party's protest; Protocol; UK government; reached agreement; DUP; Jan 2024; addressed; remaining concerns; included; £3.3 billion support package; Northern Ireland; paved the way; power-sharing; resume; Sinn Féin's Michelle O'Neill; poised; become First Minister; historic first; Irish nationalist; role
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK Unity and Centrifugal Forces */}
            <AccordionItem value="uk-unity" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">UK Unity: Brexit's Centrifugal Forces and Constitutional Challenges</h3>
                    <p className="text-sm text-muted-foreground">Scottish independence and Irish reunification</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Yet, Brexit has also fed centrifugal forces within the UK. In Scotland, calls for independence gained strength after Scots' 62% Remain vote was overturned by the overall Leave result. The Scottish government pushed for a second independence referendum, though legal and political hurdles have so far stalled it. In Northern Ireland, there is renewed talk of a future border poll on Irish reunification (especially with a nationalist First Minister), though any such poll likely remains years away. So Brexit has at least reopened debates about the very unity of the "United" Kingdom.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The constitutional implications of Brexit extend beyond immediate economic concerns. The Scottish National Party (SNP) has argued that Brexit represents a "material change of circumstances" that justifies a new independence referendum, as Scotland voted overwhelmingly to remain in the EU. While the UK Supreme Court ruled in 2022 that Scotland cannot unilaterally hold such a referendum, the political pressure continues to build. Similarly, in Northern Ireland, the Good Friday Agreement's delicate balance has been tested by Brexit's border arrangements. The prospect of Irish reunification, while still distant, has gained new relevance as Brexit has highlighted the complex relationship between the UK, Ireland, and the EU. These developments suggest that Brexit's impact on UK constitutional stability may be as significant as its economic consequences.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on constitutional challenges, national identity, or the long-term political consequences of major policy decisions. It provides concrete examples of political developments and can support arguments about the importance of constitutional stability or the challenges of maintaining political unity. It's also useful for analyzing the relationship between political decisions and constitutional change.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      Brexit has also fed; centrifugal forces; within UK; Scotland; calls for independence; gained strength; Scots'; 62% Remain vote; overturned; overall Leave result; Scottish government; pushed for; second independence referendum; legal and political hurdles; so far stalled; Northern Ireland; renewed talk; future border poll; Irish reunification; especially; nationalist First Minister; any such poll; likely remains; years away; Brexit has at least; reopened debates; very unity; United Kingdom; constitutional implications; Brexit; extend beyond; immediate economic concerns; Scottish National Party; SNP; argued; Brexit represents; material change of circumstances; justifies; new independence referendum; Scotland voted; overwhelmingly; remain in EU; UK Supreme Court; ruled; 2022; Scotland cannot; unilaterally hold; such referendum; political pressure; continues to build; similarly; Northern Ireland; Good Friday Agreement's; delicate balance; tested; Brexit's border arrangements; prospect; Irish reunification; while still distant; gained new relevance; Brexit has highlighted; complex relationship; UK; Ireland; EU; developments suggest; Brexit's impact; UK constitutional stability; may be; significant; economic consequences
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Public Opinion and Bregret */}
            <AccordionItem value="public-opinion" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Public Opinion: Bregret and the Shift in British Attitudes</h3>
                    <p className="text-sm text-muted-foreground">57% believe Brexit was a mistake</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Public opinion across Britain has shifted too: by 2023, polls showed 57% of Britons believe Brexit was a mistake, and a majority said they would rejoin the EU if they could. This "Bregret" reflects the palpable lack of tangible benefits for many people. Brexiteers in government attempted to point to newfound "freedoms" – like setting up freeports or reforming regulations – but these have had limited visible impact. Meanwhile, tangible downsides like higher trade costs, travel inconveniences, and worker shortages (exacerbated by the end of free movement) are felt in daily life.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The shift in public sentiment has been particularly pronounced among younger voters and those who initially supported Brexit. Many who voted Leave in 2016 have since changed their minds as the economic realities of Brexit became apparent. The government's attempts to promote "Global Britain" and new trade opportunities have largely failed to convince the public, as the promised benefits have not materialized. Instead, the focus has shifted to managing the practical challenges of Brexit, such as border controls, customs procedures, and regulatory divergence. This pragmatic approach reflects a broader recognition that Brexit is not a one-time event but an ongoing process that requires continuous management and adjustment.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on public opinion, political accountability, or the relationship between political promises and public expectations. It provides concrete data on changing attitudes and can support arguments about the importance of delivering on political promises or the challenges of managing public expectations. It's also useful for analyzing the relationship between policy outcomes and public opinion.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      public opinion; across Britain; shifted; 2023; polls showed; 57% of Britons; believe; Brexit was mistake; majority; would rejoin EU; if they could; Bregret; reflects; palpable lack; tangible benefits; many people; Brexiteers; government; attempted; point to; newfound freedoms; setting up freeports; reforming regulations; limited visible impact; meanwhile; tangible downsides; higher trade costs; travel inconveniences; worker shortages; exacerbated; end of free movement; felt; daily life; shift; public sentiment; particularly pronounced; younger voters; initially supported Brexit; voted Leave; 2016; since changed their minds; economic realities; Brexit became apparent; government's attempts; promote; Global Britain; new trade opportunities; largely failed; convince public; promised benefits; not materialized; focus has shifted; managing; practical challenges; Brexit; border controls; customs procedures; regulatory divergence; pragmatic approach; reflects; broader recognition; Brexit is not; one-time event; ongoing process; requires; continuous management; adjustment
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Long-term Legacy and Future Prospects */}
            <AccordionItem value="long-term-legacy" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Long-term Legacy: Pragmatism and Future Prospects</h3>
                    <p className="text-sm text-muted-foreground">Making Brexit work and cooperative stance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Overall, Brexit's aftermath has Britain in a pragmatic mode: instead of the utopian visions of 2016, leaders now talk of "making Brexit work" by smoothing rough edges with the EU. There's a notable reduction in the combative rhetoric toward Brussels. For instance, the Sunak government reached a quiet deal to cooperate with the EU's Horizon science program and eased migration rules for certain jobs despite earlier pledges. These are signs of Britain inching back to a more cooperative stance, albeit outside the EU.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The long-term legacy of Brexit will depend on whether the UK can carve out a productive new role in Europe and globally, or whether it remains overshadowed by the choice to leave. The challenge for future British governments will be to balance the desire for sovereignty with the practical need for cooperation. This may involve developing new forms of partnership with the EU, strengthening relationships with other global powers, and finding ways to maintain influence in international institutions. The success of this balancing act will determine whether Brexit is remembered as a bold assertion of independence or a costly mistake that weakened Britain's global position.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on Brexit's long-term implications, international relations, or the challenges of post-Brexit governance. It provides insights into future prospects and can support arguments about the importance of pragmatic policymaking or the challenges of maintaining international influence. It's also useful for analyzing the relationship between political decisions and long-term consequences.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      overall; Brexit's aftermath; Britain; pragmatic mode; instead of; utopian visions; 2016; leaders now talk; making Brexit work; smoothing rough edges; EU; notable reduction; combative rhetoric; Brussels; Sunak government; reached; quiet deal; cooperate; EU's Horizon science program; eased; migration rules; certain jobs; despite; earlier pledges; signs; Britain inching back; more cooperative stance; albeit; outside EU; long-term legacy; Brexit; depend on; whether; UK can carve out; productive new role; Europe; globally; remains overshadowed; choice to leave; challenge; future British governments; balance; desire for sovereignty; practical need; cooperation; may involve; developing; new forms; partnership; EU; strengthening relationships; other global powers; finding ways; maintain influence; international institutions; success; balancing act; determine; whether Brexit; remembered; bold assertion; independence; costly mistake; weakened; Britain's global position
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Essential Vocabulary */}
            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Brexit Vocabulary</h3>
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

            {/* Essay Questions */}
            <AccordionItem value="essay-questions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Economic Consequences of Brexit</h4>
                      <p className="text-sm">
                        "Brexit has been economically costly for the UK." Assess this statement with reference to trade, GDP, and business impacts.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Political Stability and Brexit</h4>
                      <p className="text-sm">
                        To what extent has Brexit affected political stability in the UK, both domestically and in relations with the EU?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Constitutional Challenges</h4>
                      <p className="text-sm">
                         "Brexit has reopened fundamental questions about the unity of the United Kingdom." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Public Opinion and Bregret</h4>
                      <p className="text-sm">
                        How has public opinion on Brexit changed since 2016, and what factors explain this shift?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Northern Ireland Protocol</h4>
                      <p className="text-sm">
                        "The Northern Ireland Protocol represents the most complex challenge of Brexit." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Future UK-EU Relations</h4>
                      <p className="text-sm">
                        To what extent can the UK maintain a cooperative relationship with the EU while remaining outside it?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Sovereignty vs. Cooperation</h4>
                      <p className="text-sm">
                        "Brexit delivered sovereignty at the cost of influence." Discuss this statement with reference to international relations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Long-term Legacy of Brexit</h4>
                      <p className="text-sm">
                        How will Brexit be remembered in the long term, and what factors will determine its historical assessment?
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
            <Link to="/formation/anglais/civilisation/commonwealth">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                Next: The Commonwealth and Post-Colonial Legacy
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrexitPage; 