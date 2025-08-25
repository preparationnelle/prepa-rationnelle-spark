import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Globe, Leaf, Factory, Thermometer, Zap, Users, Building2, ArrowLeft, ArrowRight } from 'lucide-react';

const EnvironmentPage = () => {
  const keyTopics = [
    {
      title: "Climate Change Science",
      content: "Global warming, greenhouse gases, carbon emissions, climate modeling, IPCC reports",
      vocabulary: ["carbon footprint", "greenhouse effect", "global warming", "climate resilience"]
    },
    {
      title: "Environmental Policies", 
      content: "Paris Agreement, Green New Deal, carbon pricing, environmental regulations, renewable energy targets",
      vocabulary: ["carbon tax", "cap and trade", "environmental protection", "sustainable development"]
    },
    {
      title: "Green Technology",
      content: "Renewable energy, electric vehicles, clean technology, green innovation, energy transition",
      vocabulary: ["renewable energy", "solar power", "wind energy", "energy efficiency"]
    },
    {
      title: "Environmental Justice",
      content: "Environmental racism, climate equity, environmental health disparities, community activism",
      vocabulary: ["environmental justice", "environmental racism", "climate equity", "toxic exposure"]
    }
  ];

  const essentialVocabulary = [
    { term: "sustainability", definition: "Meeting present needs without compromising future generations' ability to meet their needs" },
    { term: "carbon neutral", definition: "Achieving net-zero carbon emissions by balancing emissions with carbon removal" },
    { term: "biodiversity", definition: "The variety of life in ecosystems, crucial for environmental health" },
    { term: "deforestation", definition: "The clearing of forests, a major contributor to climate change" },
    { term: "fossil fuels", definition: "Coal, oil, and natural gas - major sources of greenhouse gas emissions" },
    { term: "renewable energy", definition: "Energy from sources that are naturally replenished (solar, wind, hydro)" }
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
            <span className="text-foreground font-medium">Environment and Ecology</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-500 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <Badge className="bg-green-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Environment and Ecology</CardTitle>
              <p className="text-muted-foreground">
                Climate change, green policies, and environmental challenges in the English-speaking world
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Environmental Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">15M</div>
                  <div className="text-sm text-green-100">Hectares burned Canada 2023</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">12%</div>
                  <div className="text-sm text-green-100">Global renewable electricity</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">1M</div>
                  <div className="text-sm text-green-100">Species at risk extinction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">75%</div>
                  <div className="text-sm text-green-100">Insect decline Europe</div>
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
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Environmental Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
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

            {/* Escalating Climate Disasters */}
            <AccordionItem value="climate-disasters" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Thermometer className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Escalating Climate Disasters: A New Normal of Extremes</h3>
                    <p className="text-sm text-muted-foreground">Record-breaking climate events and their implications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    From unprecedented wildfires to record heatwaves, recent years have underscored the tangible reality of climate change. In 2023, wildfires scorched over 15 million hectares in Canada, more than double the previous record, blanketing cities as far as New York in smoke. Similarly, Australia and California have suffered "once-in-a-century" bushfires with alarming frequency, and Europe saw its hottest summer on record in 2022 with droughts disrupting agriculture. These disasters are no longer isolated incidents but part of a pattern of extremes.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Scientists warn that such events will only intensify unless global carbon emissions are curbed. The human and economic costs—from displaced communities to billions in damage—are acting as a fiery wake-up call. Increasingly, even skeptical policymakers are acknowledging that adaptation and mitigation efforts must accelerate. The question remains whether this urgency will translate into effective global action or if catastrophic events will simply become the new normal.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can be used to illustrate the concrete impacts of climate change and the urgency for action. It is useful in discussions about environmental policy, international climate agreements, or the cost of inaction. It provides current examples (2022–2023) to show that climate disasters are happening now, strengthening arguments for sustainability or against climate skepticism.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      unprecedented; tangible reality; scorched; droughts; mitigate; displaced; wake-up call; adaptation; mitigation; catastrophic
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Fossil Fuel Lobby */}
            <AccordionItem value="fossil-fuel-lobby" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-700 text-white">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Fossil Fuel Lobby vs Climate Action: The COP Controversies</h3>
                    <p className="text-sm text-muted-foreground">Corporate influence on international climate negotiations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Behind the scenes of international climate summits, powerful oil and gas lobbies continue to exert outsized influence. Fossil fuel representatives have often outnumbered some national delegations at recent COP conferences, reflecting their deep pockets and political clout. In 2023, the COP28 climate summit faced criticism for being hosted in the oil-rich UAE and led by an oil company CEO, Sultan Al Jaber, raising doubts about its commitment to phasing out hydrocarbons.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Companies like ExxonMobil, Chevron, and Saudi Aramco collectively spend hundreds of millions annually on lobbying and advertising to protect their interests, frequently branding themselves as part of the "energy transition" while expanding oil production. This influence has tangible effects: proposals to aggressively curb emissions or eliminate coal subsidies are frequently watered down or stalled. Meanwhile, voices from climate-vulnerable nations struggle to be heard. Low-lying countries such as Bangladesh and Pacific Island states, which bear the brunt of climate change through floods and rising seas, often lack comparable representation. The imbalance highlights a critical tension in global climate politics: even as scientific consensus calls for urgent action, economic interests tied to fossil fuels work to slow the pace of change.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph when discussing why climate policy progress is slow or uneven. It exemplifies how corporate lobbying and political interests can undermine environmental agreements, which is relevant in essays about international relations, the role of capitalism in climate change, or environmental ethics. It also introduces the contrast between big emitters and vulnerable nations, useful for arguments on climate justice.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      outsized influence; delegations; clout; phasing out; hydrocarbons; lobbying; branding; emissions; watered down; climate-vulnerable; representation; consensus; fossil fuels
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Climate Justice */}
            <AccordionItem value="climate-justice" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Climate Justice and the Global North-South Divide</h3>
                    <p className="text-sm text-muted-foreground">Inequities in climate impacts and responsibilities</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Climate change has laid bare deep global inequities: those who contribute least to the problem often suffer the most from its effects. African and South Asian nations experience devastating droughts, floods, and heatwaves that derail development and endanger lives, even though their per-capita carbon emissions are a fraction of those in North America or Europe. For example, Pakistan's catastrophic 2022 floods—submerging a third of the country—were linked to intensified monsoon rains, yet Pakistan accounts for less than 1% of global emissions.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In response, developing countries have increasingly pushed for "loss and damage" funding, arguing that industrialized nations owe a climate debt. A breakthrough came at the 2022 UN climate conference (COP27) where a dedicated loss-and-damage fund was agreed upon, acknowledging the principle that rich nations should help pay for climate-inflicted harm. However, debates over how to structure and finance this fund continue, reflecting ongoing North-South tensions. At heart is a moral question: can a form of global solidarity emerge to address climate injustice, or will the chasm between emitters and sufferers widen further?
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is useful in discussions of global justice, international aid, or environmental ethics. It provides a concrete example (Pakistan's floods) and references an actual policy development (loss-and-damage fund) to argue how climate change intersects with issues of equity and responsibility. It helps substantiate points about the responsibility of developed nations or the need for global cooperation.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      inequities; per-capita emissions; development; loss and damage; climate debt; industrialized nations; breakthrough; finance; North-South tensions; solidarity; climate injustice
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Renewable Energy Transition */}
            <AccordionItem value="renewable-energy" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Renewable Energy Transition: Progress and Challenges</h3>
                    <p className="text-sm text-muted-foreground">The global shift toward clean energy</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The global shift toward renewable energy has accelerated, but it faces both remarkable successes and stubborn hurdles. On one hand, renewables are breaking records: in 2023 wind and solar combined provided around 12% of global electricity—double their share from five years prior—as costs for solar panels and wind turbines continue to fall. Countries like Denmark and Uruguay at times generate virtually 100% of their electricity from wind or solar, showcasing the potential of clean power. Major economies are also investing heavily: the United States' Inflation Reduction Act of 2022 earmarked $369 billion for green subsidies, spurring a wave of new solar farms, battery factories, and EV production.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Yet significant challenges remain. Renewable deployment is uneven worldwide; developing nations often lack the grid infrastructure or financing to expand clean energy. Intermittency issues (the sun doesn't always shine, nor the wind blow) mean grids need upgrades and storage solutions to maintain reliability. Moreover, political resistance and bureaucratic delays—like lengthy permitting processes for new wind farms—slow progress even where economics are favorable. The next few years will test whether the world can overcome these obstacles to truly transform its energy systems and meet climate targets.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph to highlight both optimism and realism about the clean energy transition. It's relevant in essays on sustainable development, energy policy, or technological innovation. The paragraph balances positive data (increased renewable share, policy support) with challenges (infrastructure and intermittency), which can strengthen arguments that acknowledge complexity rather than just advocating idealistically.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      renewable energy; hurdles; wind turbines; clean power; subsidies; deployment; grid infrastructure; intermittency; storage solutions; permitting; transform; energy systems
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Biodiversity Crisis */}
            <AccordionItem value="biodiversity" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Biodiversity and Ecology: The Other Environmental Crisis</h3>
                    <p className="text-sm text-muted-foreground">The sixth mass extinction and ecological collapse</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    While climate change dominates headlines, the planet's biodiversity crisis is equally urgent. Scientists warn we are living through a sixth mass extinction, with species disappearing at a rate not seen since the dinosaurs died out. Insects, the tiny linchpins of ecosystems, have declined by an estimated 75% in biomass in parts of Europe over the past 30 years. Iconic animals face peril as well: Africa's elephant populations have plummeted due to poaching and habitat loss, and roughly one million species worldwide are at risk of extinction, according to a 2019 UN report.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This collapse of wildlife is not just a moral tragedy but a direct threat to humanity—jeopardizing pollination of crops, fisheries, and natural systems that purify air and water. Efforts to address the crisis have gathered steam: over 190 countries signed the 2022 Montreal agreement pledging to protect 30% of Earth's land and oceans by 2030 (the "30x30" target) and restore degraded ecosystems. However, implementation remains a major challenge, often colliding with economic pressures and land-use conflicts. The fate of the world's forests, coral reefs, and wetlands will depend on whether global promises translate into local action in time to halt the unraveling of nature's web.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can support arguments about environmental preservation, the importance of biodiversity, or the scope of human impact on the planet. It's useful for broad environment-themed essays that should go beyond climate change. It offers concrete data and agreements (UN report, Montreal pact) to lend credibility when emphasizing that ecological health is crucial for human well-being.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      biodiversity; mass extinction; linchpins; habitat loss; pollination; fisheries; gathered steam; degraded ecosystems; implementation; land-use conflicts; coral reefs; wetlands; unraveling
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
                    <h3 className="text-lg font-semibold">Essential Environmental Vocabulary</h3>
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
                      <h4 className="font-semibold mb-2">1. Climate Policy and Justice</h4>
                      <p className="text-sm">
                        "Climate change reveals deep global inequities." Discuss this statement with reference to recent international climate negotiations and the concept of climate justice.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Energy Transition</h4>
                      <p className="text-sm">
                        To what extent do renewable energy developments offer realistic solutions to the climate crisis? Analyze both the potential and the challenges.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Corporate Influence</h4>
                      <p className="text-sm">
                        How do corporate interests shape environmental policy? Evaluate the role of fossil fuel lobbying in international climate negotiations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Biodiversity Crisis</h4>
                      <p className="text-sm">
                        "The biodiversity crisis is as urgent as climate change." Assess this claim and discuss potential solutions to halt species extinction.
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
            <Link to="/formation/anglais/civilisation/politics">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                Next: Politics (US & UK)
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentPage;