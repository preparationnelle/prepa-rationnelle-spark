import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-black">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
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
            <span className="text-foreground font-medium">Environment and Ecology</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3 tracking-tight">Environment and Ecology</h1>
          <p className="text-lg text-gray-600">Key concepts, vocabulary, and contemporary issues for 2025.</p>
        </div>

        {/* Minimal Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-gray-100 py-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">15M</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Hectares burned</div>
          </div>
          <div className="text-center border-l border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">12%</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Global renewables</div>
          </div>
          <div className="text-center border-l border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">1M</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Species at risk</div>
          </div>
          <div className="text-center border-l border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">75%</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Insect decline</div>
          </div>
        </div>

        {/* Main Content */}
        <Accordion type="single" collapsible className="w-full space-y-6">

          <AccordionItem value="key-topics" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Key Environmental Topics
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <div className="grid gap-6">
                {keyTopics.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-base">{topic.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{topic.content}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {topic.vocabulary.map((word, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                          {word}
                        </span>
                      ))}
                    </div>
                    {index < keyTopics.length - 1 && <div className="h-px bg-gray-100 my-4" />}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="climate-disasters" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Escalating Climate Disasters
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                From unprecedented wildfires to record heatwaves, recent years have underscored the tangible reality of climate change. In 2023, wildfires scorched over 15 million hectares in Canada, more than double the previous record. Similarly, Australia and California have suffered "once-in-a-century" bushfires with alarming frequency.
              </p>
              <p>
                Scientists warn that such events will only intensify unless global carbon emissions are curbed. The human and economic costs are acting as a fiery wake-up call, forcing even critical policymakers to acknowledge that adaptation efforts must accelerate.
              </p>
              <div className="bg-gray-50 p-4 rounded mt-4 border-l-2 border-orange-500">
                <p className="text-sm text-gray-600 italic">
                  <strong>Key Vocabulary:</strong> unprecedented, tangible reality, scorched, droughts, mitigate, displaced, wake-up call, adaptation.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fossil-fuel-lobby" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Fossil Fuel Lobby vs Climate Action
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Behind the scenes of international climate summits, powerful oil and gas lobbies continue to exert outsized influence. In 2023, the COP28 climate summit faced criticism for being hosted in the oil-rich UAE and led by an oil company CEO, raising doubts about its commitment to phasing out hydrocarbons.
              </p>
              <p>
                Companies like ExxonMobil and Chevron spend millions annually on lobbying. This influence has tangible effects: proposals to aggressively curb emissions are frequently watered down. Meanwhile, low-lying countries such as Bangladesh struggle to be heard, highlighting a critical tension in global climate politics.
              </p>
              <div className="bg-gray-50 p-4 rounded mt-4 border-l-2 border-orange-500">
                <p className="text-sm text-gray-600 italic">
                  <strong>Key Vocabulary:</strong> outsized influence, phasing out, hydrocarbons, lobbying, watered down, climate-vulnerable, consensus.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="climate-justice" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Climate Justice & North-South Divide
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Climate change has laid bare deep global inequities: those who contribute least to the problem often suffer the most. African and South Asian nations experience devastating droughts and floods, despite having minimal per-capita emissions. For example, Pakistan's catastrophic 2022 floods were linked to intensified monsoon rains, yet Pakistan accounts for less than 1% of global emissions.
              </p>
              <p>
                Developing countries have pushed for "loss and damage" funding, arguing that industrialized nations owe a climate debt. A breakthrough came at COP27 with a dedicated fund, but debates over financing continue.
              </p>
              <div className="bg-gray-50 p-4 rounded mt-4 border-l-2 border-orange-500">
                <p className="text-sm text-gray-600 italic">
                  <strong>Key Vocabulary:</strong> inequities, per-capita emissions, loss and damage, climate debt, industrialized nations, solidarity.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="biodiversity" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Biodiversity Crisis
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Scientists warn we are living through a sixth mass extinction, with species disappearing at historic rates. Insects have declined by an estimated 75% in biomass in parts of Europe. This collapse threatens pollination, fisheries, and natural systems essential for human life.
              </p>
              <p>
                Over 190 countries signed the 2022 Montreal agreement pledging to protect 30% of Earth's land and oceans by 2030. However, implementation remains a major challenge against economic pressures.
              </p>
              <div className="bg-gray-50 p-4 rounded mt-4 border-l-2 border-orange-500">
                <p className="text-sm text-gray-600 italic">
                  <strong>Key Vocabulary:</strong> mass extinction, linchpins, habitat loss, pollination, degraded ecosystems, coral reefs, wetlands.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vocabulary" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Essential Vocabulary
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <div className="grid gap-3">
                {essentialVocabulary.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-2 border-b border-gray-50 last:border-0 pt-2 first:pt-0">
                    <span className="font-mono text-sm font-semibold text-orange-700 w-1/3 shrink-0">{item.term}</span>
                    <span className="text-sm text-gray-600">{item.definition}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="essay-questions" className="border-b border-gray-200">
            <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline hover:text-orange-600 transition-colors">
              Sample Essay Questions
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <ul className="space-y-4 list-decimal list-outside ml-4 text-gray-700">
                <li className="pl-2">"Climate change reveals deep global inequities." Discuss regarding recent negotiations and climate justice.</li>
                <li className="pl-2">To what extent do renewable energy developments offer realistic solutions to the climate crisis?</li>
                <li className="pl-2">How do corporate interests shape environmental policy? Evaluate the role of lobbying.</li>
                <li className="pl-2">"The biodiversity crisis is as urgent as climate change." Assess this claim.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-100 text-sm font-medium">
          <Link to="/formation/anglais/civilisation" className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Overview
          </Link>
          <Link to="/formation/anglais/civilisation/politics" className="flex items-center gap-2 text-black hover:text-orange-600 transition-colors">
            Next: Politics
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentPage;