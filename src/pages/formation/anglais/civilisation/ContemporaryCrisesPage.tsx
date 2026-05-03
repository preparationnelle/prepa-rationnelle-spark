import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem, CivVocabBox } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const EssayBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-pr-orange-pale border-l-[3px] border-pr-orange p-4 rounded-r-md mt-4">
    <h4 className="font-dm-serif text-pr-orange-dark mb-2">Use in essays</h4>
    <p className="text-pr-gray-dark text-sm leading-relaxed">{children}</p>
  </div>
);

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

const ContemporaryCrisesPage = () => {
  const keyTopics = [
    { title: 'COVID-19 Pandemic and Long-term Impacts', content: '6.9M+ deaths, healthcare system stress, Long COVID, vaccine development, social disruption', vocabulary: ['pandemic', 'excess mortality', 'Long COVID', 'vaccine rollout', 'healthcare systems', 'social disruption'] },
    { title: 'Global Inflation and Economic Crisis', content: '9.1% US inflation peak, 11.1% UK inflation, interest rate hikes, cost-of-living crisis, strikes', vocabulary: ['inflation', 'interest rates', 'cost-of-living crisis', 'supply chain', 'stimulus spending', 'industrial strikes'] },
    { title: 'Russia-Ukraine War and Geopolitical Shifts', content: 'Largest European conflict since WWII, energy crisis, NATO unity, sanctions, global supply disruption', vocabulary: ['geopolitical crisis', 'sanctions', 'energy crisis', 'NATO unity', 'supply disruption', 'military aid'] },
    { title: 'Climate Change and Environmental Disasters', content: 'Record heatwaves, wildfires, floods, climate investment, COP summits, loss and damage', vocabulary: ['climate crisis', 'extreme weather', 'renewable energy', 'climate finance', 'loss and damage', 'carbon emissions'] },
  ];

  const essentialVocabulary = [
    { term: 'Long COVID', definition: 'Persistent symptoms lasting months after COVID-19 infection, affecting millions globally' },
    { term: 'cost-of-living crisis', definition: 'Situation where basic living expenses rise faster than wages, reducing real income' },
    { term: 'supply chain disruption', definition: 'Interruption in the flow of goods and services, often causing shortages and price increases' },
    { term: 'geopolitical crisis', definition: 'Major international conflict or tension affecting global politics and economics' },
    { term: 'climate finance', definition: 'Financial support from developed countries to help developing nations address climate change' },
    { term: 'black swan events', definition: 'Unpredictable, rare events with severe consequences that are often rationalized in hindsight' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Contemporary Crises' },
      ]}
      badge="Civilisation · 2025"
      title="Major Contemporary"
      titleAccent="Crises"
      subtitle="Pandemic, inflation, war, and climate change: overlapping global challenges of the 2020s."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Crisis Statistics 2020-2025"
          stats={[
            { value: '6.9M+', label: 'Official COVID-19 deaths worldwide' },
            { value: '9.1%', label: 'US inflation peak June 2022' },
            { value: '11.1%', label: 'UK inflation peak October 2022' },
            { value: '2022', label: 'Russia invades Ukraine' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Crisis Topics">
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

          <CivItem value="covid-pandemic" title="COVID-19 Pandemic: The Defining Crisis of 2020-2021">
            <div className="space-y-4">
              <p>
                The mid-2020s have been shaped by a series of overlapping crises that have tested resilience globally. The COVID-19 pandemic was, of course, the defining crisis of 2020–2021. By 2025, the acute phase has receded – life in most countries returned to normal routines, and the World Health Organization declared the emergency over in May 2023. Yet the pandemic's impacts are still felt. Worldwide, officially about 6.9 million people died from COVID-19, but excess mortality estimates suggest the true toll could be two to three times higher. The shock to healthcare systems revealed strengths and weaknesses. In the US and UK, initial responses were criticized (for slow lockdowns or inadequate protective gear), but the rapid development of vaccines was a triumph of science.
              </p>
              <p>
                Mass vaccination campaigns by 2021 protected the majority of adults in wealthy countries, though uptake lagged in some groups due to misinformation. Booster shots continue to be offered for vulnerable populations as new variants emerge, but thankfully recent variants have been milder. One lasting health concern is Long COVID – millions suffer lingering symptoms months after infection, impacting labor force participation and quality of life, a slow-burning public health issue that governments are only beginning to address. The pandemic's social and economic disruption created unprecedented challenges, from school closures to remote work transitions, while also accelerating digital transformation across sectors.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on public health crises, global governance, or the long-term impacts of major events. It provides concrete data on mortality and can support arguments about healthcare system resilience or the importance of international cooperation. It's also useful for analyzing the relationship between crisis response and long-term consequences.
              </EssayBox>
              <CivVocabBox words="mid-2020s; overlapping crises; tested resilience; COVID-19 pandemic; defining crisis; 2020-2021; acute phase; receded; normal routines; World Health Organization; emergency over; May 2023; pandemic's impacts; 6.9 million people died; excess mortality estimates; true toll; two to three times higher; shock; healthcare systems; strengths; weaknesses; initial responses; criticized; slow lockdowns; inadequate protective gear; rapid development; vaccines; triumph of science; mass vaccination campaigns; uptake lagged; misinformation; booster shots; vulnerable populations; new variants; milder; Long COVID; lingering symptoms; labor force participation; quality of life; slow-burning; public health issue; school closures; remote work transitions; digital transformation" />
            </div>
          </CivItem>

          <CivItem value="inflation-crisis" title="Global Inflation Crisis: From Pandemic to Cost-of-Living Emergency">
            <div className="space-y-4">
              <p>
                Economically, the pandemic triggered a brief but severe recession in 2020, followed by an unusual rebound that, combined with supply chain disruptions and stimulus spending, led to a global surge in inflation. In 2022, inflation in many countries hit heights not seen since the early 1980s. The US saw consumer prices peak at 9.1% annual inflation (June 2022) – driven by everything from used car shortages to $5/gallon gasoline – before gradually easing to ~3–4% by late 2023. The Federal Reserve responded with aggressive interest rate hikes (from near 0% to over 5% benchmark rate in a year), aiming to cool demand. This raised borrowing costs for consumers and businesses, slowing sectors like housing (home sales dipped as mortgage rates topped 7%).
              </p>
              <p>
                The UK had an even sharper spike: inflation topped 11.1% in October 2022, a 41-year high. Skyrocketing natural gas prices (due to Russia's war in Ukraine and Europe's energy crunch) fed directly into UK household energy bills, which more than doubled for many. By 2023, Britain's inflation hovered around 7% – still highest in the G7 – forcing the Bank of England to push interest rates up (from 0.1% in 2021 to over 5% in 2023). These inflationary pressures created a cost-of-living crisis. Wages did not keep up, meaning real incomes fell for most workers. In the UK, this led to the largest wave of industrial strikes in decades: rail workers, nurses, teachers, postal workers, university lecturers – all staged strikes in 2022–2023 demanding pay raises to match inflation.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on economic crises, monetary policy, or the relationship between global events and inflation. It provides concrete examples of policy responses and can support arguments about the effectiveness of central bank interventions or the challenges of managing inflation. It's also useful for analyzing the relationship between economic policy and social unrest.
              </EssayBox>
              <CivVocabBox words="pandemic triggered; severe recession; unusual rebound; supply chain disruptions; stimulus spending; global surge; inflation; 2022; many countries; early 1980s; US; consumer prices; peak 9.1%; June 2022; used car shortages; $5/gallon gasoline; gradually easing; 3-4%; late 2023; Federal Reserve; aggressive interest rate hikes; near 0%; over 5%; benchmark rate; cool demand; borrowing costs; consumers; businesses; slowing sectors; housing; home sales dipped; mortgage rates; 7%; UK; sharper spike; 11.1%; October 2022; 41-year high; skyrocketing; natural gas prices; Russia's war; Ukraine; Europe's energy crunch; UK household energy bills; doubled; Britain's inflation; around 7%; G7; Bank of England; 0.1%; 2021; 5%; 2023; inflationary pressures; cost-of-living crisis; wages; real incomes fell; UK; largest wave; industrial strikes; decades; rail workers; nurses; teachers; postal workers; university lecturers; pay raises; match inflation" />
            </div>
          </CivItem>

          <CivItem value="russia-ukraine-war" title="Russia-Ukraine War: Geopolitical Crisis and Global Disruption">
            <div className="space-y-4">
              <p>
                Another crisis layered onto this was Russia's invasion of Ukraine in February 2022, the largest armed conflict in Europe since WWII. Beyond its devastating humanitarian toll on Ukraine, the war roiled global markets – spiking prices for energy, grain, and fertilizer, given Russia's and Ukraine's key exports. Europe, including the UK, scrambled to replace Russian gas (with some success by late 2022 through alternative suppliers and reduced consumption). Western countries imposed heavy sanctions on Moscow, contributing to global supply shifts. The war also prompted a geopolitical crisis: NATO unity was tested but held firm, with the US, UK, and EU supplying billions in military aid to Ukraine.
              </p>
              <p>
                By 2025, the war is unresolved, but Ukraine's staunch resistance – and Russia's partial setbacks – have become defining elements of the international order. The conflict has to some extent revitalized NATO and focused Western foreign policy, but also has had blowback in higher defense spending (at the cost of other priorities) and strained relations with the Global South (some of whom resent Western singular focus on Ukraine vs issues like hunger or debt relief). The war's economic impact extended beyond energy prices, affecting global food security, disrupting supply chains, and contributing to the inflationary pressures that defined the early 2020s economic landscape.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on international relations, economic sanctions, or the global impact of regional conflicts. It provides concrete examples of geopolitical consequences and can support arguments about the effectiveness of international cooperation or the costs of military conflict. It's also useful for analyzing the relationship between security policy and economic stability.
              </EssayBox>
              <CivVocabBox words="another crisis; layered onto; Russia's invasion; Ukraine; February 2022; largest armed conflict; Europe; since WWII; devastating humanitarian toll; war roiled; global markets; spiking prices; energy; grain; fertilizer; key exports; Europe; UK; scrambled; replace Russian gas; alternative suppliers; reduced consumption; Western countries; heavy sanctions; Moscow; global supply shifts; geopolitical crisis; NATO unity; tested; held firm; US; UK; EU; billions; military aid; 2025; war unresolved; Ukraine's staunch resistance; Russia's partial setbacks; international order; revitalized NATO; Western foreign policy; blowback; higher defense spending; other priorities; strained relations; Global South; resent; Ukraine; hunger; debt relief; war's economic impact; energy prices; global food security; disrupting supply chains; inflationary pressures; early 2020s; economic landscape" />
            </div>
          </CivItem>

          <CivItem value="climate-change" title="Climate Change: Slow-Motion Crisis with Acute Effects">
            <div className="space-y-4">
              <p>
                Climate change must be mentioned as a slow-motion crisis that showed acute effects in recent years as well. 2023 was globally one of the hottest years on record; the summer saw lethal heatwaves in Europe, China, and the US, with temperatures exceeding 40°C in normally temperate areas. Wildfires raged in unusual places – Canada experienced its worst wildfire season ever, blanketing U.S. cities in smoke; Hawaii saw a freak wildfire destroy the town of Lahaina; and Southern Europe battled blazes in Greece, Spain, Portugal. Floods, too, hit regions from Pakistan (a cataclysmic flood in 2022 submerged a third of the country) to Nigeria to Germany. These disasters underscored the here-and-now nature of the climate crisis.
              </p>
              <p>
                They also fed into the energy/inflation crisis: 2022's high fossil fuel prices prompted some short-term increases in coal use, but also a redoubled push for renewables and electric vehicles as longer-term solutions. Major economies put forward climate investment packages (e.g., the US Inflation Reduction Act of 2022, which despite its name is a huge climate subsidies law). However, at COP climate summits, there's growing impatience from developing countries for richer nations to deliver promised climate finance and to compensate for "loss and damage" from climate-induced catastrophes. The climate crisis has become increasingly intertwined with economic and social challenges, requiring coordinated global responses.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on environmental policy, global cooperation, or the economic costs of climate change. It provides concrete examples of climate impacts and can support arguments about the urgency of climate action or the need for international climate finance. It's also useful for analyzing the relationship between environmental and economic crises.
              </EssayBox>
              <CivVocabBox words="climate change; slow-motion crisis; acute effects; 2023; globally; hottest years on record; summer; lethal heatwaves; Europe; China; US; temperatures exceeding 40°C; normally temperate areas; wildfires raged; unusual places; Canada; worst wildfire season; blanketing US cities; smoke; Hawaii; freak wildfire; town of Lahaina; Southern Europe; battled blazes; Greece; Spain; Portugal; floods; Pakistan; cataclysmic flood; 2022; submerged a third; Nigeria; Germany; here-and-now nature; climate crisis; energy/inflation crisis; 2022's high fossil fuel prices; short-term increases; coal use; redoubled push; renewables; electric vehicles; longer-term solutions; major economies; climate investment packages; US Inflation Reduction Act; 2022; climate subsidies law; COP climate summits; growing impatience; developing countries; richer nations; promised climate finance; loss and damage; climate-induced catastrophes; intertwined; economic; social challenges; coordinated global responses" />
            </div>
          </CivItem>

          <CivItem value="crisis-overlap" title="Crisis Overlap and Global Resilience: Lessons Learned">
            <div className="space-y-4">
              <p>
                To sum up, the first half of the 2020s has been a crucible of crises: a pandemic that killed millions and shut down society, an inflationary spike that eroded living standards, a land war in Europe that unsettled geopolitics, and a drumbeat of climate disasters reminding us that the planet's stability is in peril. The silver linings are that these challenges have spurred remarkable responses too – the fastest vaccine rollout in history; international cooperation on some fronts (for example, G7 working to cap Russian oil prices to stabilize markets); renewed social safety nets (as seen in unprecedented stimulus and relief programs during COVID, which kept poverty temporarily low); and technological strides (like mRNA vaccine tech, or progress in renewable energy efficiency).
              </p>
              <p>
                Societies have, by and large, proven adaptable, but not without costs and contentious debates. In politics, these crises have sometimes strengthened polarization (masks and vaccine mandates became politicized in the US; energy vs climate policy splits in Europe), but they also clarified the stakes of good governance. For instance, countries that managed COVID competently (like South Korea or New Zealand) saved more lives, and those that prepared for energy shocks (like by having gas storage or renewables) weathered the inflation better. As of 2025, the pandemic is mostly behind us, and inflation is gradually easing (central banks predict a return to ~2–3% rates in coming years, barring new shocks). But public debt is much higher after emergency spending, and interest costs are rising – which could constrain future government action.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on crisis management, global governance, or the long-term lessons from major events. It provides insights into policy effectiveness and can support arguments about the importance of preparedness or the value of international cooperation. It's also useful for analyzing the relationship between crisis response and future resilience.
              </EssayBox>
              <CivVocabBox words="sum up; first half; 2020s; crucible; crises; pandemic; killed millions; shut down society; inflationary spike; eroded living standards; land war; Europe; unsettled geopolitics; drumbeat; climate disasters; planet's stability; peril; silver linings; remarkable responses; fastest vaccine rollout; international cooperation; G7; cap Russian oil prices; stabilize markets; renewed social safety nets; unprecedented stimulus; relief programs; COVID; poverty; technological strides; mRNA vaccine tech; renewable energy efficiency; societies; proven adaptable; contentious debates; politics; strengthened polarization; masks; vaccine mandates; politicized; US; energy vs climate policy; Europe; clarified stakes; good governance; South Korea; New Zealand; saved more lives; energy shocks; gas storage; renewables; weathered inflation; 2025; pandemic mostly behind us; inflation gradually easing; central banks; 2-3% rates; coming years; new shocks; public debt; emergency spending; interest costs rising; constrain future government action" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Crisis Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Global Crisis Management and Cooperation">
                "Global crises require coordinated international responses." Assess this statement with reference to recent events.
              </EssayQuestion>
              <EssayQuestion title="2. Economic Policy During Crisis">
                To what extent did pandemic responses contribute to the global inflation crisis?
              </EssayQuestion>
              <EssayQuestion title="3. Climate Change and Economic Stability">
                "Climate change is now an economic crisis, not just an environmental one." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="4. Healthcare Systems Under Stress">
                How did the COVID-19 pandemic reveal the strengths and weaknesses of healthcare systems?
              </EssayQuestion>
              <EssayQuestion title="5. Social Cohesion During Crisis">
                "Crises can both unite and divide societies." Discuss with reference to recent global events.
              </EssayQuestion>
              <EssayQuestion title="6. Energy Security and Geopolitics">
                To what extent has the Russia-Ukraine war reshaped global energy markets?
              </EssayQuestion>
              <EssayQuestion title="7. Central Bank Policy and Inflation">
                "Central banks were unprepared for the inflation crisis." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="8. Future Crisis Preparedness">
                What lessons should governments learn from the overlapping crises of the early 2020s?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav next={{ label: 'Environment', to: '/formation/anglais/civilisation/environment' }} />
      </div>
    </PRFormationLayout>
  );
};

export default ContemporaryCrisesPage;
