import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem, CivVocabBox } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const EssayQuestion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-pr-gray-bg border border-pr-gray-light rounded-lg p-4">
    <h4 className="font-dm-serif text-pr-black mb-2">{title}</h4>
    <p className="text-sm text-pr-gray-dark/90">{children}</p>
  </div>
);

const VocabRow: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-pr-gray-light/60 last:border-0">
    <span className="font-dm-sans font-semibold text-pr-orange-dark text-sm sm:w-1/3 shrink-0">{term}</span>
    <span className="text-sm text-pr-gray-dark/90">{definition}</span>
  </div>
);

const EnvironmentPage = () => {
  const keyTopics = [
    { title: 'Climate Change Science', content: 'Global warming, greenhouse gases, carbon emissions, climate modeling, IPCC reports', vocabulary: ['carbon footprint', 'greenhouse effect', 'global warming', 'climate resilience'] },
    { title: 'Environmental Policies', content: 'Paris Agreement, Green New Deal, carbon pricing, environmental regulations, renewable energy targets', vocabulary: ['carbon tax', 'cap and trade', 'environmental protection', 'sustainable development'] },
    { title: 'Green Technology', content: 'Renewable energy, electric vehicles, clean technology, green innovation, energy transition', vocabulary: ['renewable energy', 'solar power', 'wind energy', 'energy efficiency'] },
    { title: 'Environmental Justice', content: 'Environmental racism, climate equity, environmental health disparities, community activism', vocabulary: ['environmental justice', 'environmental racism', 'climate equity', 'toxic exposure'] },
  ];

  const essentialVocabulary = [
    { term: 'sustainability', definition: 'Meeting present needs without compromising future generations\' ability to meet their needs' },
    { term: 'carbon neutral', definition: 'Achieving net-zero carbon emissions by balancing emissions with carbon removal' },
    { term: 'biodiversity', definition: 'The variety of life in ecosystems, crucial for environmental health' },
    { term: 'deforestation', definition: 'The clearing of forests, a major contributor to climate change' },
    { term: 'fossil fuels', definition: 'Coal, oil, and natural gas - major sources of greenhouse gas emissions' },
    { term: 'renewable energy', definition: 'Energy from sources that are naturally replenished (solar, wind, hydro)' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Environment' },
      ]}
      badge="Civilisation · 2025"
      title="Environment"
      titleAccent="& Ecology"
      subtitle="Climate disasters, fossil fuel lobbies, climate justice, and the biodiversity crisis."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Environmental Facts 2025"
          stats={[
            { value: '15M', label: 'Hectares burned' },
            { value: '12%', label: 'Global renewables' },
            { value: '1M', label: 'Species at risk' },
            { value: '75%', label: 'Insect decline' },
          ]}
        />

        <CivAccordion type="single" defaultValue="key-topics">
          <CivItem value="key-topics" title="Key Environmental Topics">
            <div className="grid gap-4">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white border border-pr-gray-light border-l-[3px] border-l-pr-orange rounded-md p-4">
                  <h4 className="font-dm-serif text-pr-black mb-2">{topic.title}</h4>
                  <p className="text-sm text-pr-gray-dark/90 mb-3">{topic.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.vocabulary.map((word, idx) => (
                      <span key={idx} className="text-xs bg-pr-orange-pale text-pr-orange-dark px-2 py-1 rounded">{word}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CivItem>

          <CivItem value="climate-disasters" title="Escalating Climate Disasters">
            <div className="space-y-4">
              <p>
                From unprecedented wildfires to record heatwaves, recent years have underscored the tangible reality of climate change. In 2023, wildfires scorched over 15 million hectares in Canada, more than double the previous record. Similarly, Australia and California have suffered "once-in-a-century" bushfires with alarming frequency.
              </p>
              <p>
                Scientists warn that such events will only intensify unless global carbon emissions are curbed. The human and economic costs are acting as a fiery wake-up call, forcing even critical policymakers to acknowledge that adaptation efforts must accelerate.
              </p>
              <CivVocabBox words="unprecedented; tangible reality; scorched; droughts; mitigate; displaced; wake-up call; adaptation" />
            </div>
          </CivItem>

          <CivItem value="fossil-fuel-lobby" title="Fossil Fuel Lobby vs Climate Action">
            <div className="space-y-4">
              <p>
                Behind the scenes of international climate summits, powerful oil and gas lobbies continue to exert outsized influence. In 2023, the COP28 climate summit faced criticism for being hosted in the oil-rich UAE and led by an oil company CEO, raising doubts about its commitment to phasing out hydrocarbons.
              </p>
              <p>
                Companies like ExxonMobil and Chevron spend millions annually on lobbying. This influence has tangible effects: proposals to aggressively curb emissions are frequently watered down. Meanwhile, low-lying countries such as Bangladesh struggle to be heard, highlighting a critical tension in global climate politics.
              </p>
              <CivVocabBox words="outsized influence; phasing out; hydrocarbons; lobbying; watered down; climate-vulnerable; consensus" />
            </div>
          </CivItem>

          <CivItem value="climate-justice" title="Climate Justice & North-South Divide">
            <div className="space-y-4">
              <p>
                Climate change has laid bare deep global inequities: those who contribute least to the problem often suffer the most. African and South Asian nations experience devastating droughts and floods, despite having minimal per-capita emissions. For example, Pakistan's catastrophic 2022 floods were linked to intensified monsoon rains, yet Pakistan accounts for less than 1% of global emissions.
              </p>
              <p>
                Developing countries have pushed for "loss and damage" funding, arguing that industrialized nations owe a climate debt. A breakthrough came at COP27 with a dedicated fund, but debates over financing continue.
              </p>
              <CivVocabBox words="inequities; per-capita emissions; loss and damage; climate debt; industrialized nations; solidarity" />
            </div>
          </CivItem>

          <CivItem value="biodiversity" title="Biodiversity Crisis">
            <div className="space-y-4">
              <p>
                Scientists warn we are living through a sixth mass extinction, with species disappearing at historic rates. Insects have declined by an estimated 75% in biomass in parts of Europe. This collapse threatens pollination, fisheries, and natural systems essential for human life.
              </p>
              <p>
                Over 190 countries signed the 2022 Montreal agreement pledging to protect 30% of Earth's land and oceans by 2030. However, implementation remains a major challenge against economic pressures.
              </p>
              <CivVocabBox words="mass extinction; linchpins; habitat loss; pollination; degraded ecosystems; coral reefs; wetlands" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Climate Inequities">
                "Climate change reveals deep global inequities." Discuss regarding recent negotiations and climate justice.
              </EssayQuestion>
              <EssayQuestion title="2. Renewable Energy">
                To what extent do renewable energy developments offer realistic solutions to the climate crisis?
              </EssayQuestion>
              <EssayQuestion title="3. Corporate Lobbying">
                How do corporate interests shape environmental policy? Evaluate the role of lobbying.
              </EssayQuestion>
              <EssayQuestion title="4. Biodiversity Crisis">
                "The biodiversity crisis is as urgent as climate change." Assess this claim.
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Contemporary Crises', to: '/formation/anglais/civilisation/contemporary-crises' }} next={{ label: 'Politics', to: '/formation/anglais/civilisation/politics' }} />
      </div>
    </PRFormationLayout>
  );
};

export default EnvironmentPage;
