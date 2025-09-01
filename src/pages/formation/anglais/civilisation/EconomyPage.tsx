import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, TrendingUp, DollarSign, Building2, ArrowLeft, ArrowRight, Globe, Users, Shield, Leaf, Factory } from 'lucide-react';

const EconomyPage = () => {
  const keyTopics = [
    {
      title: "Inflation and Cost of Living",
      content: "Price surges, supply chain chaos, central bank responses, household impact, labor unrest",
      vocabulary: ["price surges", "supply chain chaos", "monetary policy", "real wages", "labor unrest"]
    },
    {
      title: "Trade and Protectionism",
      content: "Inflation Reduction Act, transatlantic tensions, subsidies, Buy American policies",
      vocabulary: ["protectionism", "subsidies", "trade war", "geoeconomics", "industrial strategy"]
    },
    {
      title: "Tax Systems and Justice",
      content: "Global minimum tax, tax havens, UK offshore finance, corporate tax avoidance",
      vocabulary: ["tax havens", "race to the bottom", "profit-shifting", "offshore finance", "tax avoidance"]
    },
    {
      title: "Labor and Corporate Power",
      content: "Union resurgence, corporate activism, greenwashing, business ethics, stakeholder pressure",
      vocabulary: ["unionization", "corporate activism", "greenwashing", "stakeholder", "business ethics"]
    }
  ];

  const essentialVocabulary = [
    { term: "inflation", definition: "A general increase in prices and fall in the purchasing value of money" },
    { term: "globalization", definition: "The process by which businesses or other organizations develop international influence" },
    { term: "protectionism", definition: "The theory or practice of shielding a country's domestic industries from foreign competition" },
    { term: "tax havens", definition: "Countries or territories with very low tax rates for foreign businesses" },
    { term: "greenwashing", definition: "Making misleading claims about environmental benefits of products or practices" },
    { term: "stakeholder", definition: "A person or group with an interest or concern in a business or organization" }
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
            <span className="text-foreground font-medium">Economy and Globalization</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 mb-8">
            <CardHeader className="bg-gray-50/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-orange-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <Badge className="bg-orange-600">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Economy and Globalization</CardTitle>
              <p className="text-muted-foreground">
                Global economic challenges, trade dynamics, and the future of international cooperation
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Economic Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">9.1%</div>
                  <div className="text-sm text-blue-100">US inflation peak 2022</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">$369B</div>
                  <div className="text-sm text-blue-100">US Inflation Reduction Act</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">15%</div>
                  <div className="text-sm text-blue-100">Global minimum tax rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">$245B</div>
                  <div className="text-sm text-blue-100">Annual tax avoidance</div>
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
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Economic Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-600">
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

            {/* Inflation and Cost of Living */}
            <AccordionItem value="inflation-cost-living" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Inflation and the Cost-of-Living Squeeze</h3>
                    <p className="text-sm text-muted-foreground">Global price surges and their socio-economic impact</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    After a long period of low inflation, the world was hit in the early 2020s by the sharpest price surges in a generation, squeezing household budgets and testing policymakers. A perfect storm of factors drove prices up: supply chain chaos from the COVID-19 pandemic, government stimulus spending, and then Russia's war in Ukraine which spiked energy and grain prices. In the U.S., inflation peaked at 9.1% in June 2022, the highest since 1981, before moderating to around 3–4% by 2023 as the Federal Reserve hiked interest rates aggressively (from near zero to over 5%) to cool the economy.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Europe felt it even more acutely; the Eurozone hit double-digit inflation (10.6% in Oct 2022) and the UK reached 11.1%, a 41-year high. Central banks, once worried about deflation, scrambled to tighten monetary policy, even at risk of inducing recessions. The human impact has been profound. Families faced soaring bills for essentials: fuel, electricity, and food (with staples like cooking oil and bread up 30–50% in some countries). Real wages lagged behind, effectively amounting to pay cuts for many. This fueled labor unrest, such as strikes in the UK and protests in countries from Chile to Egypt. Politically, the cost-of-living crisis dented incumbent governments' popularity worldwide. While inflation has started to ease by 2024 as supply shocks resolved and demand cooled, it remains above pre-pandemic norms. The episode has served as a reminder that price stability—often taken for granted—can unravel quickly, and that inequality worsens when inflation bites since the poorest struggle the most with pricier basics.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Employ this paragraph to underscore the socio-economic impact of inflation or to discuss economic policy. It provides data on inflation rates and responses, useful for arguing about the effectiveness of central banks or the causes of public discontent. It can also bolster a point on how global crises (pandemic, war) directly affect domestic economics and politics.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      price surges; household budgets; perfect storm; supply chain chaos; stimulus; spiked; hiked interest rates; cool the economy; acutely; central banks; deflation; monetary policy; inducing recessions; profound; essentials; staples; real wages; unrest; incumbent; dented; price stability; unravel; inequality; inflation bites
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* US Inflation Reduction Act */}
            <AccordionItem value="us-inflation-reduction-act" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">The U.S. Inflation Reduction Act and Transatlantic Trade Tensions</h3>
                    <p className="text-sm text-muted-foreground">Climate policy, protectionism, and international relations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In August 2022, President Joe Biden signed into law the Inflation Reduction Act (IRA)—a sweeping climate and industrial policy billed as America's boldest effort yet to fight climate change. The act earmarks $369 billion for clean energy subsidies, electric vehicle (EV) credits, and other green investments. While the IRA was hailed domestically for jump-starting green tech and jobs, it caused consternation among European allies who saw it as brazenly protectionist. A particular sticking point is the law's provision of a $7,500 tax credit for EVs only if they are assembled in North America with North American-made batteries.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This would effectively exclude European-made electric cars from the U.S. subsidy, putting firms like Volkswagen or Renault at a disadvantage in the huge American market. EU leaders complained this "Buy American" tilt violates World Trade Organization rules and threatens their own green industries. Some likened it to a new trade war in green clothing. In response, Europe scrambled to formulate its own subsidies and loosen state-aid limits—unveiling plans like the EU Green Deal Industrial Plan—to keep investment from fleeing across the Atlantic. The IRA episode highlights how the climate fight is intersecting with geoeconomics: countries want to build domestic clean-energy industries, but that risks conflict with free trade principles. It also reflects a shift in U.S. policy toward economic nationalism and industrial strategy, even under a relatively pro-alliance administration like Biden's. Finding a cooperative approach that addresses climate change without triggering tit-for-tat protectionism remains an unresolved challenge between Western partners.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can bolster discussions on international trade, climate policy, or US-EU relations. It offers a concrete example of how good intentions (climate action) can cause diplomatic friction. Use it to illustrate the complexity of balancing domestic interests with global cooperation, or as evidence in arguments about rising protectionism and the future of globalization.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      sweeping; hailed; consternation; brazenly; sticking point; provision; disadvantage; tilt; violates; trade war; subsidies; state-aid limits; geoeconomics; free trade principles; economic nationalism; industrial strategy; tit-for-tat protectionism; unresolved
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Global Minimum Tax */}
            <AccordionItem value="global-minimum-tax" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Global Minimum Tax: Toward a Fairer Corporate Tax System</h3>
                    <p className="text-sm text-muted-foreground">International cooperation and tax justice</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In a landmark step for tax justice, over 130 countries agreed in principle in 2021 to implement a 15% global minimum corporate tax rate, aiming to end the "race to the bottom" where multinational companies shift profits to tax havens to avoid taxes. The European Union reached unanimous agreement on this minimum tax in December 2022, committing all EU members to enact it, and other economies like the UK, Japan, and Canada are moving forward as well. The idea, strongly championed by the Biden administration and OECD, is that if a company pays below 15% in any country, its home country will collect a top-up tax to reach that rate—removing the incentive to route profits to zero-tax jurisdictions.
                  </p>
                  <p className="text-justify leading-relaxed">
                    U.S. officials have argued that America must adopt the global minimum too, or else U.S.-based multinationals (think Apple, Google) will simply end up paying that difference to European treasuries. However, as of 2024, the U.S. Congress has yet to align fully with the plan, due to partisan gridlock. Supporters say a minimum tax will raise billions in revenue that can fund public services and level the playing field for domestic businesses and workers. They also contend it restores a sense of fairness—making global capitalism work for average citizens, not just for footloose capital. Skeptics worry it could dull countries' competitive edge or that loopholes will undermine it in practice. Nonetheless, the momentum behind the agreement marks a turning point in global tax cooperation. If broadly enacted, it will be one of the biggest reforms to international tax rules in a century, signalling that the world's major economies can coordinate for greater equity in globalization.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph for topics on globalization, inequality, or international cooperation. It provides a positive example of collective action and can support arguments about curbing corporate power or ensuring fairness. It's useful for economic justice discussions or when highlighting contrasts between unilateral and multilateral approaches.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      landmark; race to the bottom; tax havens; unanimous; enact; championed; OECD; top-up tax; incentive; jurisdictions; treasuries; gridlock; level the playing field; footloose capital; dull (competitive edge); loopholes; turning point; coordinate; equity; globalization
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Tax Havens and UK Role */}
            <AccordionItem value="tax-havens-uk" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Tax Havens and the UK's Role in Global Tax Avoidance</h3>
                    <p className="text-sm text-muted-foreground">Offshore finance and international hypocrisy</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Despite high-profile promises to crack down on tax avoidance, the United Kingdom remains at the heart of the global offshore finance system that enables multinational companies and the ultra-wealthy to minimize taxes. The Tax Justice Network's research shows that the "UK spider's web" of crown dependencies and overseas territories (places like the Cayman Islands, Bermuda, Jersey, and the British Virgin Islands) collectively is responsible for around one-third of all corporate tax avoidance risks in the world. An estimated $245 billion in global corporate tax is lost to profit-shifting each year, and the UK-linked havens are major facilitators of that drain by offering near-zero tax rates and secrecy.
                  </p>
                  <p className="text-justify leading-relaxed">
                    For example, a tech giant might register its intellectual property in a Bermuda shell company to funnel royalties there tax-free, eroding tax bases of higher-tax countries. Successive British governments have faced criticism for this arrangement: while the UK enforces taxes at home, it simultaneously provides international shelters for avoidance. In recent years, international efforts—like the G20/OECD minimum tax and EU blacklists—have increased pressure on havens. The UK has sometimes taken steps (such as a public register of offshore companies owning UK property to curb dirty money), but critics say these measures are half-hearted. London's powerful financial lobby and concerns about sovereignty over territories make reform politically delicate. The situation highlights a moral quandary: Britain preaches fairness and austere budgets at home, yet its own network fuels a system where global elites and corporations sidestep paying their due. Meaningful change may require both domestic political will in the UK and sustained international coordination to shut down the escape routes in the "second empire" of tax havens.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph provides a case study of hypocrisy in policy and the complexity of global finance. It's great for arguments about inequality, explaining why developing countries lose revenue, or critiquing powerful nations' double standards. It supplies hard data (one-third of avoidance, $245b lost) useful for highlighting scale. It can also support a point on the challenges of reforming entrenched systems due to vested interests.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      offshore finance; ultra-wealthy; minimize taxes; spider's web; crown dependencies; profit-shifting; drain; secrecy; shell company; funnel; eroding; facilitators; criticism; shelters; blacklist; half-hearted; lobby; sovereignty; moral quandary; austere; elites; sidestep; political will; escape routes
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Labor Movements and Union Resurgence */}
            <AccordionItem value="labor-movements" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Labor Movements and Union Resurgence in the US</h3>
                    <p className="text-sm text-muted-foreground">Worker organizing and changing labor dynamics</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    After decades of decline, labor unions in the United States have shown surprising new momentum in the 2020s amid a tight labor market and changing public opinion. High-profile unionization drives at corporate behemoths grabbed headlines: in 2022, Amazon warehouse workers on Staten Island defied the odds to win the first-ever union at the trillion-dollar company, and over 300 Starbucks coffee shops nationwide voted to unionize despite fierce resistance from management. Even tech and white-collar sectors saw stirrings, with employees at companies like Apple and Google organizing unprecedented protests and some forming unions to demand better conditions.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Public support for unions has climbed to its highest level since the mid-1960s—71% approval in a 2022 Gallup poll—driven perhaps by growing awareness of income inequality and worker precarity. This has coincided with a post-pandemic labor shortage that gave workers more leverage to push for raises and respect. The Biden administration has positioned itself as the most pro-union in decades, quickly rolling back Trump-era rules that weakened unions and appointing union-friendly figures to federal labor boards. Yet significant challenges remain. U.S. labor laws still tilt heavily in favor of employers; companies often deploy aggressive tactics (sometimes illegal) to delay recognizing unions or to bust them outright—such as captive-audience meetings and firings of organizers. Additionally, union membership as a share of the workforce (around 10%) is still near historic lows, concentrated in the public sector. Whether the recent wins signal a lasting turning point or just a blip will depend on if unions can convert public goodwill into broader gains, adapt to new industries, and achieve tangible improvements that inspire more workers to organize.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is apt for discussions on labor rights, social change, or economic inequality. It provides concrete examples of union activity and polling data, which can support arguments about rising worker consciousness or the impact of COVID on labor. Use it to argue that social movements can wax and wane with broader conditions, or to compare labor relations internationally.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      momentum; tight labor market; decline; high-profile; behemoths; grabbed headlines; defied the odds; unionize; fierce resistance; unprecedented; protests; approval; precarity; leverage; pro-union; rolling back; labor boards; tilt (in favor); deploy; captive-audience meetings; bust (a union); organizers; workforce; turning point; blip; goodwill; tangible
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Corporate Activism */}
            <AccordionItem value="corporate-activism" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Corporate Activism: The Case of Ben & Jerry's</h3>
                    <p className="text-sm text-muted-foreground">Business ethics and political engagement</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Global corporations are increasingly being drawn into social and political issues, sometimes taking stands that court controversy. A notable example is Ben & Jerry's, the Vermont-based ice cream company known for its progressive ethos. In 2021, Ben & Jerry's announced it would stop selling ice cream in Israeli-occupied Palestinian territories, saying that continuing to do so was inconsistent with the company's values. This decision—essentially a boycott of West Bank settlements—sparked a firestorm. Pro-Palestinian activists praised it as a principled stance against occupation, aligning corporate practice with human rights.
                  </p>
                  <p className="text-justify leading-relaxed">
                    But Israeli politicians and some American lawmakers blasted the move as unfairly singling out Israel and accused the company of antisemitism or aiding the Boycott, Divestment, Sanctions (BDS) movement. The backlash was so strong that Ben & Jerry's parent company, Unilever, intervened: by 2022, Unilever sold the Israeli Ben & Jerry's business to a local licensee so that the ice cream could return to shelves in those areas, effectively circumventing the boycott. Ben & Jerry's independent board publicly criticized that step, insisting it stood by its social mission. The episode highlights the tightrope corporations walk when wading into international politics—balancing values, stakeholder pressure, and legal constraints. It also raises questions about corporate personhood: should companies leverage their brand power to advance social causes, and if so, who gets to decide which causes? In an age where consumers increasingly expect brands to have a conscience, the line between doing good and disrupting business is not always clear-cut.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can be used in discussions about business ethics, globalization, or the role of private companies in politics. It gives a concrete scenario that can be analyzed for arguments about corporate responsibility vs shareholder duty, or free speech vs consequences in commerce. It's also a good cultural example to bring in for essays on activism.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      drawn into; court controversy; ethos; inconsistent; values; boycott; firestorm; principled stance; occupation; human rights; blasted; singling out; antisemitism; backlash; licensee; circumventing; tightrope; wading into; stakeholder; personhood; leverage; conscience; clear-cut
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Greenwashing */}
            <AccordionItem value="greenwashing" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Greenwashing and Corporate Image</h3>
                    <p className="text-sm text-muted-foreground">Misleading sustainability claims and corporate responsibility</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    As environmental awareness grows, many companies have tried to rebrand themselves as part of the solution—but not all their claims stand up to scrutiny. "Greenwashing," the practice of making misleading sustainability claims, has become a target of regulators and activists alike. A vivid case is oil giant BP (British Petroleum), which in the late 2000s famously adopted the tagline "Beyond Petroleum" and a sunburst logo to suggest a pivot to clean energy. In reality, more than 96% of its capital expenditures still go into oil and gas. In 2022, it emerged that BP had spent over £800,000 on social media "influence ads" in the UK touting its investments in renewables—a sum exceeding what some critics noted BP actually spends on certain climate initiatives.
                  </p>
                  <p className="text-justify leading-relaxed">
                    These ads conveyed a "clean, green" image while BP simultaneously scaled back its emission reduction targets and enjoyed windfall profits from spiking fossil fuel prices. Such dissonance is not unique to BP: carmakers have advertised bogus "clean diesel," and plastic producers have run campaigns about recycling while lobbying against plastic waste regulations. However, the backlash is growing. Watchdogs file complaints about greenwashing with consumer protection agencies, and some jurisdictions (like the EU) are moving to ban generic environmental claims ("eco-friendly," "carbon neutral") unless backed by detailed proof. The reputational risk for companies is rising, too—getting labeled as a greenwasher can damage brand value in an era when consumers, especially younger ones, prize authenticity. Ultimately, the greenwashing phenomenon underscores the importance of independently verified action over slick PR. As the climate crisis intensifies, businesses will be expected to put real money and effort where their mouth is, or face public ire and legal consequences.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this in essays on corporate social responsibility, marketing ethics, or climate change. It provides a critical perspective that can support arguments about needing regulation or skepticism of corporate motives. The BP example with numbers makes the point tangible. It's also a nice counterpoint if discussing positive corporate efforts, to show not all that glitters is green.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      scrutiny; claims; target (as verb); regulators; rebrand; sustainability claims; pivot (to clean energy); expenditures; touting; renewables; windfall profits; dissonance; backlash; watchdogs; complaints; generic; ban; reputational risk; authenticity; slick PR; intensifies; put money and effort where their mouth is; public ire
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
                    <Factory className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Economic Vocabulary</h3>
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
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Factory className="h-5 w-5" />
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
                      <h4 className="font-semibold mb-2">1. Inflation and Economic Policy</h4>
                      <p className="text-sm">
                        "The cost-of-living crisis of the 2020s has exposed the fragility of global economic systems." Discuss this statement with reference to recent inflation trends and policy responses.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Trade and Protectionism</h4>
                      <p className="text-sm">
                        To what extent has the US Inflation Reduction Act undermined transatlantic cooperation? Analyze the balance between climate action and free trade principles.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Global Tax Cooperation</h4>
                      <p className="text-sm">
                        "The 15% global minimum tax represents a turning point in international economic governance." Assess this claim by examining the agreement's implementation and challenges.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Tax Havens and Inequality</h4>
                      <p className="text-sm">
                        How does the UK's network of tax havens contribute to global inequality and what challenges exist in reforming this system?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Labor Movement Revival</h4>
                      <p className="text-sm">
                        "The 2020s have witnessed a resurgence of labor organizing in the United States." Discuss the factors driving this change and its implications for workers' rights.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Corporate Social Responsibility</h4>
                      <p className="text-sm">
                         "Companies should stay out of politics." Assess this statement with reference to cases like Ben & Jerry's and the role of corporate activism in contemporary society.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Greenwashing and Regulation</h4>
                      <p className="text-sm">
                        How effective are current measures in combating corporate greenwashing, and what additional regulation might be needed?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Globalization's Future</h4>
                      <p className="text-sm">
                        "Globalization is in retreat." Assess this claim by examining recent trends in trade policy, tax cooperation, and corporate behavior.
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
            <Link to="/formation/anglais/civilisation/health">
              <Button className="flex items-center gap-2 bg-orange-600 hover:bg-green-600">
                Next: Health and Healthcare Systems
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomyPage; 