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

const BrexitPage = () => {
  const keyTopics = [
    { title: 'Economic Impact and Trade Barriers', content: 'GDP reduction, trade volume decline, customs checks, inflation effects, supply chain costs', vocabulary: ['Brexit', 'GDP reduction', 'trade barriers', 'customs checks', 'inflation', 'supply chain costs'] },
    { title: 'Political Aftermath and Stabilization', content: 'Government instability, Brexit fatigue, Windsor Framework, Northern Ireland Protocol resolution', vocabulary: ['political friction', 'Brexit fatigue', 'Windsor Framework', 'Northern Ireland Protocol', 'Stormont Brake'] },
    { title: 'UK Unity and Centrifugal Forces', content: 'Scottish independence, Northern Ireland border poll, Irish reunification, devolved government', vocabulary: ['centrifugal forces', 'Scottish independence', 'border poll', 'Irish reunification', 'devolved government'] },
    { title: 'Public Opinion and Bregret', content: '57% believe Brexit was mistake, majority would rejoin, tangible downsides, limited benefits', vocabulary: ['Bregret', 'public opinion', 'tangible downsides', 'free movement', 'sovereignty'] },
  ];

  const essentialVocabulary = [
    { term: 'Brexit', definition: 'Britain\'s withdrawal from the European Union, completed in 2020' },
    { term: 'Windsor Framework', definition: '2023 agreement between UK and EU resolving Northern Ireland Protocol issues' },
    { term: 'Northern Ireland Protocol', definition: 'Post-Brexit arrangement for trade between Great Britain and Northern Ireland' },
    { term: 'Stormont Brake', definition: 'Mechanism giving Northern Irish lawmakers say over new EU rules' },
    { term: 'Bregret', definition: 'Regret over Brexit decision, reflected in public opinion polls' },
    { term: 'centrifugal forces', definition: 'Forces that pull apart or separate parts of a political entity' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Brexit' },
      ]}
      badge="Civilisation · 2025"
      title="Brexit"
      titleAccent="& International Trade"
      subtitle="Post-Brexit Britain, trade deals, economic sovereignty, and the question of UK unity."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Brexit Facts 2025"
          stats={[
            { value: '2020', label: 'Brexit completed' },
            { value: '3-4%', label: 'GDP smaller than if remained in EU' },
            { value: '15%', label: 'Lower trade volumes long-term' },
            { value: '57%', label: 'Britons believe Brexit was mistake' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Brexit Topics">
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

          <CivItem value="economic-impact" title="Economic Impact: Slower Growth and Trade Barriers">
            <div className="space-y-4">
              <p>
                Britain's withdrawal from the EU in 2020 ("Brexit") continues to reshape its politics and economy. Nearly three years on, the verdict is sobering: Brexit has contributed to slower growth, trade barriers, and political friction. Economically, multiple analyses indicate the UK economy is 3–4% smaller than it would have been had Britain remained in the EU. The chairman of the Office for Budget Responsibility – the UK's fiscal watchdog – said in 2023 that Brexit's impact is "of the order of magnitude" of the COVID-19 pandemic in hitting GDP, likely a long-run 4% loss of output.
              </p>
              <p>
                Trade data back this: UK exports to the EU fell sharply after new customs checks kicked in. The OBR estimated that total UK trade volumes will be 15% lower in the long run due to Brexit's new frictions. By 2022, goods exports to the EU were still 18% below their 2019 (pre-Brexit) level. While Britain has signed new trade deals around the world, most either copy pre-existing EU deals or are too small to offset lost EU commerce. The much-touted UK-Australia free trade agreement, for example, is forecast to add only a 0.1% boost to GDP over 15 years. In short, the promised "Global Britain" boom has yet to materialize. Instead, many businesses (especially small exporters) have struggled with added paperwork, and some have ceased exporting to Europe entirely. Sectors like farming and fishing, which expected gains, have voiced disappointment or harm from new barriers. Even Britain's inflation woes have been aggravated by Brexit: economists note Brexit added to supply chain costs and labor shortages, making the UK's recent inflation spike worse than other G7 countries.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on Brexit's economic consequences, trade policy, or the impact of political decisions on economic performance. It provides concrete data on GDP reduction and can support arguments about the costs of economic nationalism or the importance of trade relationships. It's also useful for analyzing the relationship between political choices and economic outcomes.
              </EssayBox>
              <CivVocabBox words="Britain's withdrawal; EU; Brexit; reshape; verdict; sobering; slower growth; trade barriers; political friction; multiple analyses; UK economy 3–4% smaller; OBR; fiscal watchdog; order of magnitude; COVID-19 pandemic; long-run; output; UK exports; new customs checks; kicked in; trade volumes; 15% lower; goods exports; 18% below; new trade deals; UK-Australia free trade agreement; 0.1% boost; Global Britain boom; small exporters; added paperwork; ceased exporting; farming; fishing; voiced disappointment; inflation woes; supply chain costs; labor shortages; inflation spike; G7 countries" />
            </div>
          </CivItem>

          <CivItem value="political-aftermath" title="Political Aftermath: From Tumult to Gradual Stabilization">
            <div className="space-y-4">
              <p>
                Politically, Brexit's aftermath has been tumultuous but gradually stabilizing. It initially led to years of bitter division and unstable governments. By 2023–24, a kind of Brexit fatigue set in among the public, and both major parties (Conservatives and Labour) committed to not revisiting EU membership in the near term. However, the question of the UK's relationship with Europe is far from settled. In February 2023, Prime Minister Rishi Sunak negotiated the Windsor Framework with the EU, resolving a major sticking point: the Northern Ireland Protocol.
              </p>
              <p>
                The deal introduced a "green lane" to reduce checks on goods moving from Great Britain to Northern Ireland (if they are staying in NI) and a "Stormont Brake" giving Northern Irish lawmakers some say over new EU rules. This compromise was aimed at reconciling the need to avoid a hard border on the island of Ireland with unionist concerns about NI's place in the UK internal market. The Windsor Framework largely succeeded in EU-UK diplomacy terms – the EU dropped legal actions, and relations thawed – and by early 2024 it helped facilitate the restoration of Northern Ireland's devolved government. After a two-year paralysis of the NI Assembly (caused by the Democratic Unionist Party's protest over the Protocol), the UK government reached an agreement with the DUP in Jan 2024 that addressed their remaining concerns and included a £3.3 billion support package for Northern Ireland. This paved the way for power-sharing to resume, with Sinn Féin's Michelle O'Neill poised to become First Minister – a historic first for an Irish nationalist in that role.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on post-Brexit politics, diplomatic relations, or the resolution of complex political conflicts. It provides concrete examples of political agreements and can support arguments about the importance of compromise in politics or the challenges of maintaining political stability. It's also useful for analyzing the relationship between political leadership and conflict resolution.
              </EssayBox>
              <CivVocabBox words="Brexit's aftermath; tumultuous; gradually stabilizing; bitter division; unstable governments; Brexit fatigue; both major parties; Conservatives; Labour; not revisiting; EU membership; Rishi Sunak; Windsor Framework; sticking point; Northern Ireland Protocol; green lane; Stormont Brake; Northern Irish lawmakers; reconciling; hard border; unionist concerns; UK internal market; legal actions; relations thawed; restoration; devolved government; NI Assembly; DUP; £3.3 billion support package; power-sharing; Sinn Féin; Michelle O'Neill; First Minister; historic first; Irish nationalist" />
            </div>
          </CivItem>

          <CivItem value="uk-unity" title="UK Unity: Brexit's Centrifugal Forces and Constitutional Challenges">
            <div className="space-y-4">
              <p>
                Yet, Brexit has also fed centrifugal forces within the UK. In Scotland, calls for independence gained strength after Scots' 62% Remain vote was overturned by the overall Leave result. The Scottish government pushed for a second independence referendum, though legal and political hurdles have so far stalled it. In Northern Ireland, there is renewed talk of a future border poll on Irish reunification (especially with a nationalist First Minister), though any such poll likely remains years away. So Brexit has at least reopened debates about the very unity of the "United" Kingdom.
              </p>
              <p>
                The constitutional implications of Brexit extend beyond immediate economic concerns. The Scottish National Party (SNP) has argued that Brexit represents a "material change of circumstances" that justifies a new independence referendum, as Scotland voted overwhelmingly to remain in the EU. While the UK Supreme Court ruled in 2022 that Scotland cannot unilaterally hold such a referendum, the political pressure continues to build. Similarly, in Northern Ireland, the Good Friday Agreement's delicate balance has been tested by Brexit's border arrangements. The prospect of Irish reunification, while still distant, has gained new relevance as Brexit has highlighted the complex relationship between the UK, Ireland, and the EU. These developments suggest that Brexit's impact on UK constitutional stability may be as significant as its economic consequences.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on constitutional challenges, national identity, or the long-term political consequences of major policy decisions. It provides concrete examples of political developments and can support arguments about the importance of constitutional stability or the challenges of maintaining political unity. It's also useful for analyzing the relationship between political decisions and constitutional change.
              </EssayBox>
              <CivVocabBox words="centrifugal forces; within UK; Scotland; calls for independence; gained strength; 62% Remain vote; overturned; overall Leave result; second independence referendum; legal hurdles; political hurdles; stalled; Northern Ireland; renewed talk; future border poll; Irish reunification; nationalist First Minister; United Kingdom; constitutional implications; SNP; material change of circumstances; new independence referendum; Scotland voted; overwhelmingly; remain in EU; UK Supreme Court; unilaterally; Good Friday Agreement; delicate balance; tested; border arrangements; prospect; complex relationship; UK; Ireland; EU; constitutional stability" />
            </div>
          </CivItem>

          <CivItem value="public-opinion" title="Public Opinion: Bregret and the Shift in British Attitudes">
            <div className="space-y-4">
              <p>
                Public opinion across Britain has shifted too: by 2023, polls showed 57% of Britons believe Brexit was a mistake, and a majority said they would rejoin the EU if they could. This "Bregret" reflects the palpable lack of tangible benefits for many people. Brexiteers in government attempted to point to newfound "freedoms" – like setting up freeports or reforming regulations – but these have had limited visible impact. Meanwhile, tangible downsides like higher trade costs, travel inconveniences, and worker shortages (exacerbated by the end of free movement) are felt in daily life.
              </p>
              <p>
                The shift in public sentiment has been particularly pronounced among younger voters and those who initially supported Brexit. Many who voted Leave in 2016 have since changed their minds as the economic realities of Brexit became apparent. The government's attempts to promote "Global Britain" and new trade opportunities have largely failed to convince the public, as the promised benefits have not materialized. Instead, the focus has shifted to managing the practical challenges of Brexit, such as border controls, customs procedures, and regulatory divergence. This pragmatic approach reflects a broader recognition that Brexit is not a one-time event but an ongoing process that requires continuous management and adjustment.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on public opinion, political accountability, or the relationship between political promises and public expectations. It provides concrete data on changing attitudes and can support arguments about the importance of delivering on political promises or the challenges of managing public expectations. It's also useful for analyzing the relationship between policy outcomes and public opinion.
              </EssayBox>
              <CivVocabBox words="public opinion; shifted; polls; 57% Britons; Brexit mistake; majority; rejoin EU; Bregret; palpable lack; tangible benefits; Brexiteers; newfound freedoms; freeports; reforming regulations; limited visible impact; tangible downsides; higher trade costs; travel inconveniences; worker shortages; exacerbated; end of free movement; daily life; public sentiment; younger voters; voted Leave; 2016; changed their minds; economic realities; Brexit became apparent; promote Global Britain; new trade opportunities; convince public; promised benefits; not materialized; managing; practical challenges; border controls; customs procedures; regulatory divergence; pragmatic approach; ongoing process; continuous management; adjustment" />
            </div>
          </CivItem>

          <CivItem value="long-term-legacy" title="Long-term Legacy: Pragmatism and Future Prospects">
            <div className="space-y-4">
              <p>
                Overall, Brexit's aftermath has Britain in a pragmatic mode: instead of the utopian visions of 2016, leaders now talk of "making Brexit work" by smoothing rough edges with the EU. There's a notable reduction in the combative rhetoric toward Brussels. For instance, the Sunak government reached a quiet deal to cooperate with the EU's Horizon science program and eased migration rules for certain jobs despite earlier pledges. These are signs of Britain inching back to a more cooperative stance, albeit outside the EU.
              </p>
              <p>
                The long-term legacy of Brexit will depend on whether the UK can carve out a productive new role in Europe and globally, or whether it remains overshadowed by the choice to leave. The challenge for future British governments will be to balance the desire for sovereignty with the practical need for cooperation. This may involve developing new forms of partnership with the EU, strengthening relationships with other global powers, and finding ways to maintain influence in international institutions. The success of this balancing act will determine whether Brexit is remembered as a bold assertion of independence or a costly mistake that weakened Britain's global position.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on Brexit's long-term implications, international relations, or the challenges of post-Brexit governance. It provides insights into future prospects and can support arguments about the importance of pragmatic policymaking or the challenges of maintaining international influence. It's also useful for analyzing the relationship between political decisions and long-term consequences.
              </EssayBox>
              <CivVocabBox words="Brexit's aftermath; pragmatic mode; utopian visions; making Brexit work; smoothing rough edges; combative rhetoric; Brussels; Sunak government; quiet deal; cooperate; Horizon science program; eased migration rules; certain jobs; earlier pledges; inching back; cooperative stance; outside EU; long-term legacy; UK; productive new role; Europe; globally; overshadowed; choice to leave; future British governments; balance; sovereignty; practical need; cooperation; new forms partnership; strengthening relationships; other global powers; maintain influence; international institutions; balancing act; bold assertion; independence; costly mistake; weakened; Britain's global position" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Brexit Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Economic Consequences of Brexit">
                "Brexit has been economically costly for the UK." Assess this statement with reference to trade, GDP, and business impacts.
              </EssayQuestion>
              <EssayQuestion title="2. Political Stability and Brexit">
                To what extent has Brexit affected political stability in the UK, both domestically and in relations with the EU?
              </EssayQuestion>
              <EssayQuestion title="3. Constitutional Challenges">
                "Brexit has reopened fundamental questions about the unity of the United Kingdom." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="4. Public Opinion and Bregret">
                How has public opinion on Brexit changed since 2016, and what factors explain this shift?
              </EssayQuestion>
              <EssayQuestion title="5. Northern Ireland Protocol">
                "The Northern Ireland Protocol represents the most complex challenge of Brexit." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="6. Future UK-EU Relations">
                To what extent can the UK maintain a cooperative relationship with the EU while remaining outside it?
              </EssayQuestion>
              <EssayQuestion title="7. Sovereignty vs. Cooperation">
                "Brexit delivered sovereignty at the cost of influence." Discuss this statement with reference to international relations.
              </EssayQuestion>
              <EssayQuestion title="8. Long-term Legacy of Brexit">
                How will Brexit be remembered in the long term, and what factors will determine its historical assessment?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Civil Rights', to: '/formation/anglais/civilisation/civil-rights' }} next={{ label: 'Commonwealth', to: '/formation/anglais/civilisation/commonwealth' }} />
      </div>
    </PRFormationLayout>
  );
};

export default BrexitPage;
