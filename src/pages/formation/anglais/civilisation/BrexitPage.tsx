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
    { title: 'The Economic Verdict', content: 'OBR estimate of a 4% long-run GDP loss (~£100bn/year), 18% drop in goods exports to the EU, €1.5tn in assets relocated from London.', vocabulary: ['OBR', 'long-run GDP loss', 'regulatory divergence', 'financial hub', 'Global Britain'] },
    { title: 'Northern Ireland & the Windsor Framework', content: 'Sunak\'s February 2023 deal: green lane, Stormont Brake, end of the DUP boycott, Michelle O\'Neill as First Minister.', vocabulary: ['Windsor Framework', 'green lane', 'Stormont Brake', 'DUP boycott', 'First Minister'] },
    { title: 'Centrifugal Forces', content: 'Scotland\'s 62% Remain vote, the 2022 Supreme Court ruling on independence, the prospect of an Irish border poll.', vocabulary: ['centrifugal forces', 'a second independence referendum', 'a border poll', 'Irish reunification'] },
    { title: 'Bregret & the Immigration Paradox', content: '57% of Britons see Brexit as a mistake, yet net migration hit a record 728,000 in 2024 — control of borders on paper, openness in practice.', vocabulary: ['Bregret', 'to take back control', 'record net migration', 'a paradox of populism'] },
    { title: 'Starmer\'s European Reset', content: 'July 2024: Labour returns to power and pursues targeted cooperation with the EU on defence, energy and youth mobility, culminating in the May 2025 "reset" summit.', vocabulary: ['a reset summit', 'targeted cooperation', 'a red line', 'to repair frayed ties'] },
  ];

  const essentialVocabulary = [
    { term: 'to take back control', definition: 'Slogan emblématique de la campagne Leave (2016) — emblem of the populist rhetoric of sovereignty.' },
    { term: 'the Windsor Framework', definition: 'Pragmatic 2023 deal between Sunak and the EU resolving the Northern Ireland Protocol — green lane + Stormont Brake.' },
    { term: 'Bregret', definition: 'Public regret over Brexit. By 2024, 57% of Britons see leaving the EU as a mistake.' },
    { term: 'centrifugal forces', definition: 'Pressures pulling Scotland and Northern Ireland away from the Union — fuelled by Brexit.' },
    { term: 'Global Britain', definition: 'Post-Brexit slogan promising an outward-looking trading nation. Largely fell short of expectations.' },
    { term: 'a reset summit', definition: 'May 2025 meeting between Starmer and the EU — symbolic of a more transactional UK-EU relationship.' },
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
      titleAccent="& Post-Brexit Britain"
      subtitle="Eight years on : the economic toll, the Northern Irish puzzle, Bregret, centrifugal forces and Starmer's quiet reset with Brussels."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Brexit Facts 2025"
          stats={[
            { value: '−4%', label: 'long-run GDP loss (OBR estimate)' },
            { value: '728k', label: 'record net migration in 2024' },
            { value: '57%', label: 'of Britons see Brexit as a mistake' },
            { value: 'May 2025', label: 'UK-EU "reset" summit under Starmer' },
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

          <CivItem value="economic-impact" title="The Economic Verdict: A Costly Divorce">
            <div className="space-y-4">
              <p>
                Eight years after the 2016 referendum, the economic verdict on Brexit is clearer — and largely negative. The Office for Budget Responsibility estimates that leaving the EU will reduce UK GDP by around 4% in the long run, the equivalent of roughly £100 billion a year. Trade with the European Union, still Britain's largest commercial partner, has been hit by paperwork, customs checks and regulatory divergence: by 2022, goods exports to the EU were still 18% below their pre-Brexit level. London, once Europe's leading financial hub, has lost ground as more than €1.5 trillion in assets relocated to Paris, Frankfurt and Dublin. The much-trumpeted UK-Australia free trade deal, by contrast, is forecast to add a meagre 0.1% to GDP over fifteen years. The promised "Global Britain" boom has yet to materialise.
              </p>
              <EssayBox>
                Mobilisable on: the economic cost of populist policymaking; the limits of "Global Britain"; the trade-off between sovereignty and prosperity; whether a mid-sized economy can thrive outside its regional bloc.
              </EssayBox>
              <CivVocabBox words="the economic verdict; the Office for Budget Responsibility (OBR); to reduce GDP by 4% in the long run; regulatory divergence; goods exports below their pre-Brexit level; Europe's leading financial hub; to lose ground; to relocate assets; the much-trumpeted trade deal; a meagre 0.1% boost; the Global Britain boom; to materialise" />
            </div>
          </CivItem>

          <CivItem value="political-aftermath" title="Northern Ireland: The Windsor Framework">
            <div className="space-y-4">
              <p>
                The thorniest puzzle left by Brexit was always Northern Ireland — how to leave the EU without re-erecting a hard border on the island of Ireland. In February 2023, Rishi Sunak unveiled the Windsor Framework, a pragmatic compromise built around a "green lane" for goods staying in the province and a "Stormont Brake" giving Northern Irish lawmakers a say over new EU rules. The deal thawed UK-EU relations, prompted Brussels to drop legal action and, crucially, paved the way for the restoration of Stormont in early 2024, after a two-year DUP boycott — a £3.3 billion package sealing the bargain. Months later, Sinn Féin's Michelle O'Neill became the first Irish nationalist First Minister of Northern Ireland, a historic shift that crowned the post-Brexit reconfiguration of Belfast's politics.
              </p>
              <EssayBox>
                Mobilisable on: the resilience of the Good Friday settlement; pragmatic compromise as a tool of conflict resolution; the unintended consequences of Brexit on Northern Ireland; the politics of borders.
              </EssayBox>
              <CivVocabBox words="the thorniest puzzle; to re-erect a hard border; to unveil a framework; a pragmatic compromise; a green lane for goods; the Stormont Brake; to thaw UK-EU relations; to drop legal action; to pave the way for; the restoration of Stormont; the DUP boycott; to seal a bargain; a historic shift" />
            </div>
          </CivItem>

          <CivItem value="uk-unity" title="Centrifugal Forces: Has Brexit Weakened the Union?">
            <div className="space-y-4">
              <p>
                Brexit has reopened a question many believed settled: the very unity of the United Kingdom. Scotland, where 62% of voters had backed Remain, found itself dragged out of the EU against its will, fuelling the Scottish National Party's case for a second independence referendum. In November 2022, the UK Supreme Court ruled unanimously that Holyrood could not call one without Westminster's consent — a legal win for the Union, but a political wound that has not healed. In Northern Ireland, the Good Friday Agreement's delicate balance has been tested by post-Brexit trade arrangements, and the once-unthinkable prospect of a future border poll on Irish reunification now features in serious political conversation. Brexit may have restored Westminster's sovereignty over Brussels, yet it has loosened its grip over the nations of the Union itself.
              </p>
              <EssayBox>
                Mobilisable on: "Has Brexit weakened the United Kingdom?"; the tension between popular and parliamentary sovereignty; the unintended constitutional costs of major referendums; the future of multinational states.
              </EssayBox>
              <CivVocabBox words="centrifugal forces; to reopen a question; to be dragged out against one's will; to fuel a case for; to back Remain / Leave; the UK Supreme Court ruled unanimously; a legal win; a political wound; the delicate balance of the Good Friday Agreement; a border poll on Irish reunification; once-unthinkable; to loosen one's grip" />
            </div>
          </CivItem>

          <CivItem value="public-opinion" title="Bregret and the Immigration Paradox">
            <div className="space-y-4">
              <p>
                By 2024, polls consistently showed that 57% of Britons believed leaving the EU had been a mistake, with a clear majority saying they would vote to rejoin if given the chance — a phenomenon dubbed "Bregret". The promised dividends had failed to materialise: freeports and bonfires of regulation produced little visible impact, while higher trade costs, travel hassles and chronic worker shortages were felt in daily life. The deepest irony, however, lay in immigration. Sold to many voters as a way to "take back control" of Britain's borders, Brexit was followed by a record net migration of 728,000 in 2024 — more than three times the figure on referendum day. The composition shifted from EU citizens to students from India and Nigeria, NHS staff from the Philippines and Hong Kongers fleeing Chinese repression: control of borders on paper, an open economy in practice.
              </p>
              <EssayBox>
                Mobilisable on: the gap between political promises and outcomes; "Was Brexit a victory or a defeat for democracy?"; the paradoxes of populism; immigration policy and its unintended consequences.
              </EssayBox>
              <CivVocabBox words="to be dubbed Bregret; the promised dividends; to fail to materialise; freeports and bonfires of regulation; chronic worker shortages; the deepest irony lay in; to take back control of one's borders; record net migration; three times the figure; the composition shifted; to flee repression; on paper / in practice" />
            </div>
          </CivItem>

          <CivItem value="long-term-legacy" title="Starmer's European Reset">
            <div className="space-y-4">
              <p>
                Within months of taking office in July 2024, Keir Starmer began repairing the UK's frayed ties with the European Union. While ruling out any return to the single market or customs union — a red line set by Brexit's enduring weight in British politics — his government pursued targeted cooperation on defence, energy and youth mobility, culminating in a "reset" summit with the EU in May 2025. The shift reflects a colder strategic reading of the world: with war in Ukraine, an unpredictable American ally under a second Trump administration and a more assertive China, Britain cannot afford to remain at arm's length from its closest neighbours. Brexit, once framed as a sweeping rupture, is gradually being reabsorbed into a more pragmatic, transactional relationship with Brussels — sovereignty preserved on paper, interdependence quietly restored in practice.
              </p>
              <EssayBox>
                Mobilisable on: the limits of geopolitical autonomy in a turbulent world; can a country reinvent itself outside its regional bloc?; pragmatism vs. ideology in foreign policy; the long shadow of the Trump years on UK strategy.
              </EssayBox>
              <CivVocabBox words="to repair frayed ties; to rule out any return to; the single market and customs union; a red line; targeted cooperation on defence and energy; a reset summit; a colder strategic reading; an unpredictable American ally; a more assertive China; to remain at arm's length; a sweeping rupture; to be reabsorbed into; sovereignty on paper, interdependence in practice" />
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
