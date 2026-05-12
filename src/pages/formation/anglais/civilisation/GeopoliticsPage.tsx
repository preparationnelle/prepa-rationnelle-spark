import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem, CivVocabBox } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const EssayBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-pr-gray-bg border-l-[3px] border-pr-black p-4 rounded-r-md mt-4">
    <h4 className="font-dm-serif text-pr-black mb-2">Use in essays</h4>
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
    <span className="font-dm-sans font-semibold text-pr-black text-sm sm:w-1/3 shrink-0">{term}</span>
    <span className="text-sm text-pr-gray-dark/90">{definition}</span>
  </div>
);

const GeopoliticsPage = () => {
  const keyTopics = [
    { title: 'Great Power Competition', content: 'US-China rivalry, Russia\'s role, multipolar world order, alliance systems', vocabulary: ['great power', 'multipolar', 'alliance', 'rivalry', 'hegemony'] },
    { title: 'International Security', content: 'NATO expansion, military alliances, arms control, regional conflicts', vocabulary: ['NATO', 'deterrence', 'arms control', 'military alliance', 'security'] },
    { title: 'Economic Geopolitics', content: 'Trade wars, sanctions, supply chains, energy security, globalization', vocabulary: ['trade war', 'sanctions', 'supply chains', 'energy security', 'globalization'] },
    { title: 'Regional Dynamics', content: 'Middle East realignments, Asia-Pacific tensions, African agency, European unity', vocabulary: ['realignment', 'proxy conflict', 'détente', 'agency', 'unity'] },
  ];

  const essentialVocabulary = [
    { term: 'geopolitics', definition: 'The study of how geography and politics interact in international relations' },
    { term: 'multipolar', definition: 'A world order with multiple centers of power rather than one dominant force' },
    { term: 'détente', definition: 'A relaxation of tensions between nations, especially during the Cold War' },
    { term: 'proxy conflict', definition: 'A war fought between groups that represent the interests of other powers' },
    { term: 'sanctions', definition: 'Economic or political penalties imposed by one country on another' },
    { term: 'hegemony', definition: 'Dominance of one country or group over others in international affairs' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Geopolitics' },
      ]}
      badge="Civilisation · 2025"
      title="Geopolitics"
      titleAccent="& International Relations"
      subtitle="Great power competition, alliances, energy, and regional dynamics shaping the world order."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Geopolitical Facts 2025"
          stats={[
            { value: '2022', label: 'Russian invasion of Ukraine' },
            { value: '2023', label: 'Finland joins NATO' },
            { value: '2018', label: 'US-China trade war begins' },
            { value: '2020', label: 'Abraham Accords signed' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Geopolitical Topics">
            <div className="grid gap-4">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white border border-pr-gray-light border-l-[3px] border-l-pr-black rounded-md p-4">
                  <h4 className="font-dm-serif text-pr-black mb-2">{topic.title}</h4>
                  <p className="text-sm text-pr-gray-dark/90 mb-3">{topic.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.vocabulary.map((word, idx) => (
                      <span key={idx} className="text-xs bg-pr-gray-bg text-pr-black px-2 py-1 rounded">{word}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CivItem>

          <CivItem value="russia-ukraine" title="Russia's War in Ukraine: Western Unity and Strategic Winds">
            <div className="space-y-4">
              <p>
                The Russian invasion of Ukraine in February 2022 sent shockwaves through global geopolitics, realigning alliances and priorities. In the immediate aftermath, Western countries responded with unprecedented unity: the U.S., UK, and EU imposed sweeping sanctions on Moscow, cutting off Russian banks, oligarchs, and key exports, while also supplying billions of dollars in advanced weapons to help Ukraine resist. NATO, rejuvenated after years of drift, found a renewed sense of purpose in deterring Russia—so much so that historically neutral Finland and Sweden applied to join the alliance (with Finland becoming a member in 2023).
              </p>
              <p>
                Yet the war also laid bare divergent strategic interests. European nations, heavily reliant on Russian energy, scrambled to find new gas sources; Germany reversed decades of pacifist policy to boost defense spending, while Hungary under Viktor Orbán proved a semi-ally for the Kremlin by obstructing some EU measures. The conflict has had paradoxical economic effects: Russia's cut-off from Europe spurred it to deepen ties with China, India, and others, selling oil at discounts and forging a "no limits" partnership with Beijing. Meanwhile, the U.S.—though firmly backing Ukraine—benefited in one aspect: as Europe weaned off Russian gas, it pivoted to importing American LNG, giving U.S. energy producers a lucrative new market. The war's progression (a grinding attritional fight with no clear end by 2025) continues to shape the world order. It has strengthened the Western bloc but also accelerated a budding East-West bifurcation, with democracies on one side and authoritarian regimes on the other testing the resolve of the post-Cold War international system.
              </p>
              <EssayBox>
                This paragraph is versatile for discussions on international security, alliance politics, or energy geopolitics. It shows how a single conflict can influence many domains: NATO expansion, energy markets, global alignments. Use it to argue about the resilience or strains of Western unity, the emergence of a new Cold War-like division, or the unintended consequences of war in a globalized economy.
              </EssayBox>
              <CivVocabBox words="invasion; shockwaves; sweeping sanctions; oligarchs; rejuvenated; deterrence; pacifist policy; semi-ally; obstructing; paradoxical; weaned off; LNG (liquefied natural gas); lucrative; attritional; world order; bifurcation; resolve" />
            </div>
          </CivItem>

          <CivItem value="china-rise" title="The Rise of China and the New Cold War Dynamics">
            <div className="space-y-4">
              <p>
                China's ascent to superpower status has increasingly defined global geopolitics, often in adversarial contrast with the United States. Under President Xi Jinping, China has grown more assertive both regionally and globally. In Asia, Beijing's sweeping territorial claims in the South China Sea led it to build militarized artificial islands, despite an international tribunal ruling against those claims in 2016. It has also ramped up military pressure on Taiwan—frequently sending fighter jets into Taiwan's air defense zone and staging large-scale naval exercises that simulate a blockade or invasion.
              </p>
              <p>
                The U.S., which views Taiwan's security as vital, has responded by strengthening Indo-Pacific alliances: revitalizing the "Quad" partnership with Japan, India, and Australia, and in 2021 forming AUKUS (a security pact to help Australia acquire nuclear-powered submarines). Economically, a tit-for-tat trade war that began in 2018 has evolved into broader competition over technology and supply chains. Washington has banned cutting-edge semiconductor exports to China, aiming to cripple Chinese advancements in AI and supercomputing, while China has sought to reduce dependence on American tech by developing its own chip industry. Many countries feel caught in between—benefiting from Chinese investment and trade, but wary of its growing influence and authoritarian model. This dynamic has sparked talk of a "new Cold War," though it differs from the 20th-century U.S.–Soviet rivalry: today's U.S.–China competition is as much about technological supremacy and economic power as it is about military might or ideology. How this relationship unfolds will likely be the central strategic question of the 21st century.
              </p>
              <EssayBox>
                Use this paragraph to illustrate contemporary great power rivalry, especially in questions about U.S. foreign policy or global stability. It covers concrete actions (island-building, trade war, alliances) that provide evidence in arguments about whether conflict with China is inevitable or how countries should navigate Sino-American tensions. It's also good for technology-related international issues or comparisons between old and new Cold Wars.
              </EssayBox>
              <CivVocabBox words="ascent; adversarial; assertive; territorial claims; militarized; air defense zone; blockade; Indo-Pacific; tit-for-tat; supply chains; semiconductor; cripple; dependence; authoritarian model; supremacy; rivalry" />
            </div>
          </CivItem>

          <CivItem value="globalization-retreat" title="Globalization's Retreat and the Supply Chain Reordering">
            <div className="space-y-4">
              <p>
                The era of hyper-globalization that defined the late 20th and early 21st centuries has entered a period of reassessment, as nations rethink economic interdependence in light of recent shocks. The U.S.–China trade war, the COVID-19 pandemic, and Russia's Ukraine invasion each exposed vulnerabilities in far-flung supply chains. Shortages of everything from medical masks to microchips made clear the risks of over-reliance on single foreign suppliers. In response, a trend toward "decoupling" or "friend-shoring" has gained momentum. Companies and governments are diversifying supply sources and bringing production closer to home or to trusted partners.
              </p>
              <p>
                For instance, Japan set up incentives for firms to relocate factories out of China after pandemic disruptions. The European Union launched its "CHIPS Act" to boost domestic semiconductor manufacturing, aiming to double its global market share by 2030. The United States, through the 2022 CHIPS and Science Act, similarly poured subsidies into American chip plants and restricted exports of advanced chips to rival nations. This pullback from unfettered free trade is also evident in the proliferation of regional trade blocs and tariff walls. While globalization is far from dead, its nature is changing: efficiency at all costs is yielding to a calculus that weighs resilience and national security. Emerging economies worry this shift could leave them sidelined, while consumers in wealthy countries may face higher prices. The big question is whether the world can strike a new balance—maintaining the gains of global integration while safeguarding against its downsides.
              </p>
              <EssayBox>
                This paragraph is useful in economic globalization debates or discussions on how recent events are reshaping world trade. It shows concrete policy responses to supply chain issues, giving weight to arguments about the end of an era of globalization or the transition to something new. It would support points about protectionism, the impact of COVID-19 on global systems, or the future of trade.
              </EssayBox>
              <CivVocabBox words="hyper-globalization; interdependence; shocks; far-flung; over-reliance; decoupling; friend-shoring; diversify; incentives; relocate; manufacturing; subsidies; unfettered; proliferation; tariff walls; resilience; sidelined; integration; downsides" />
            </div>
          </CivItem>

          <CivItem value="middle-east" title="Middle East Realignments: New Alliances and Old Conflicts">
            <div className="space-y-4">
              <p>
                The Middle East's geopolitical landscape has been shifting in unexpected ways, as longtime adversaries open dialogues and external powers recalibrate their roles. One striking development was the 2023 China-brokered agreement between Saudi Arabia and Iran to restore diplomatic relations after years of proxy conflict. This détente between the leading Sunni and Shia powers raised hopes for easing regional tensions—from Yemen's civil war to Lebanon's instability—though deep rivalries remain. Meanwhile, the Abraham Accords of 2020, in which Israel normalized relations with several Arab states (UAE, Bahrain, Morocco, and Sudan), have upended traditional fault lines.
              </p>
              <p>
                Shared concern over Iran has quietly aligned Israel with Gulf Arab monarchies, even as the Israeli-Palestinian conflict simmers on with periodic violence in Gaza and the West Bank. The United States, once the unchallenged broker in the region, finds its influence challenged by Russia's and China's forays—Russia via military involvement in Syria, and China via economic investment and diplomatic ventures like the Saudi-Iran deal. Yet the U.S. remains deeply engaged, maintaining troops in Syria, Iraq, and the Persian Gulf and acting as Israel's key ally. Another realignment has occurred in energy: after the shock of Russia's war in Europe, Gulf oil producers like Saudi found themselves courted by both East and West, their OPEC+ decisions capable of roiling global markets. The Middle East thus stands at a crossroads: old enmities haven't vanished, but pragmatic interests are forging new alignments, suggesting a region in flux where the next decade could defy conventional expectations.
              </p>
              <EssayBox>
                Use this paragraph to provide a nuanced update on the Middle East. It's great for essays on international relations, showing how alliances are not static. It demonstrates multipolarity (China's role) and can be used to argue about the decline of U.S. hegemony or the interplay of conflict and diplomacy. Also handy for discussions of energy politics.
              </EssayBox>
              <CivVocabBox words="landscape; adversaries; recalibrate; brokered; restore diplomatic relations; proxy conflict; détente; normalize relations; fault lines; simmers; broker; forays; ventures; engaged; realignment; courted; roiling; enmities; pragmatic; in flux; conventional expectations" />
            </div>
          </CivItem>

          <CivItem value="africa-role" title="Africa's Emerging Role and Great Power Competition">
            <div className="space-y-4">
              <p>
                Long viewed through a lens of aid and instability, Africa is increasingly becoming a stage for great power competition and asserting its own agency. China has entrenched itself as Africa's biggest trading partner and a major investor in infrastructure via its Belt and Road Initiative—building railways, ports, and highways in exchange for access to resources and markets. Beijing's economic heft has won it influence: many African governments praise Chinese financing for being fast and less conditional than Western aid, even as critics warn of "debt traps" and loss of sovereignty. Russia, too, has sought a foothold: beyond arms sales and security contractors (like the Wagner Group active in countries from Mali to the Central African Republic), Moscow has courted African leaders diplomatically, emphasizing Soviet-era ties and anti-colonial solidarity.
              </p>
              <p>
                This bore fruit in 2023 when numerous African nations remained neutral on UN resolutions condemning Russia's invasion of Ukraine. The United States and European powers, meanwhile, are trying to re-engage, pitching initiatives on clean energy, public health, and digital investment, partly to counter China's narrative. African states themselves are not just pawns; they have shown growing unity in forums like the African Union and are leveraging competition between outsiders to their benefit. For example, Zambia and Ghana have renegotiated Chinese loans while also getting IMF support, playing both sides. With one-fifth of the world's population and vast untapped economic potential, Africa's stance on global issues—from climate change to internet governance—will carry more weight. The continent's future may well be defined by how skillfully it navigates external interests while pursuing its own development path.
              </p>
              <EssayBox>
                This paragraph can appear in essays about global power shifts, development, or neo-colonialism. It demonstrates how Africa is not monolithic and how global players engage there, which is great for arguments about multipolar world structures or the legacy of colonialism. It provides specifics (China's Belt and Road, Wagner Group, UN votes) to back up points on influence and strategy.
              </EssayBox>
              <CivVocabBox words="stage (for competition); entrenched; Belt and Road Initiative; conditional; debt traps; foothold; contractors; courted; solidarity; bore fruit; condemning; re-engage; pitching initiatives; narrative; pawns; unity; leveraging; renegotiated; untapped; governance; navigate; external interests" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Geopolitical Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Great Power Competition">
                "The 21st century will be defined by US-China rivalry." Discuss this statement with reference to contemporary geopolitical developments and their global implications.
              </EssayQuestion>
              <EssayQuestion title="2. Alliance Politics">
                To what extent has Russia's invasion of Ukraine strengthened or weakened Western unity? Analyze the impact on NATO and transatlantic relations.
              </EssayQuestion>
              <EssayQuestion title="3. Globalization's Future">
                "Globalization is in retreat." Assess this claim by examining recent trends in supply chains, trade policies, and international economic relations.
              </EssayQuestion>
              <EssayQuestion title="4. Middle East Dynamics">
                How have recent diplomatic developments in the Middle East challenged traditional regional alignments? Evaluate the role of external powers in shaping these changes.
              </EssayQuestion>
              <EssayQuestion title="5. African Agency">
                "Africa is no longer just a pawn in great power games." Discuss this statement with reference to contemporary African diplomacy and strategic positioning.
              </EssayQuestion>
              <EssayQuestion title="6. Energy Geopolitics">
                How has the Ukraine war transformed global energy markets and what does this reveal about the relationship between energy security and international relations?
              </EssayQuestion>
              <EssayQuestion title="7. Technology Competition">
                "The new Cold War is about technological supremacy, not ideology." Assess this claim by examining US-China competition in areas like semiconductors and AI.
              </EssayQuestion>
              <EssayQuestion title="8. Multipolar World">
                To what extent is the world becoming truly multipolar? Analyze the evidence for and against the decline of US hegemony in contemporary international relations.
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Politics', to: '/formation/anglais/civilisation/politics' }} next={{ label: 'AI & Technology', to: '/formation/anglais/civilisation/technology' }} />
      </div>
    </PRFormationLayout>
  );
};

export default GeopoliticsPage;
