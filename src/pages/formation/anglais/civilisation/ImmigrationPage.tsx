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

const ImmigrationPage = () => {
  const keyTopics = [
    { title: 'Trump 2.0 and the Border', content: 'January 2025 executive order seeking to end birthright citizenship, the largest deportation operation in US history, and the targeting of sanctuary policies.', vocabulary: ['birthright citizenship', 'the 14th Amendment', 'mass deportations', 'an executive order', 'sanctuary policies'] },
    { title: 'UK Post-Brexit Paradox', content: '"Take back control" promised tighter borders, yet net migration hit a record 728,000 in 2024 — driven by India, Nigeria, the Philippines and Hong Kong.', vocabulary: ['to take back control', 'record net migration', 'a paradox of populism', 'the points-based system', 'visa routes'] },
    { title: 'The Rwanda Saga', content: 'Sunak\'s flagship plan unveiled in 2022, struck down by the UK Supreme Court in November 2023, scrapped by Starmer\'s Labour government in July 2024.', vocabulary: ['outsourcing migration management', 'to scrap a scheme', 'human rights commitments', 'a deterrent', 'flagship policy'] },
    { title: 'Emblematic Cases: Windrush, Australia', content: 'The 2018 Windrush scandal exposing the "hostile environment"; Australia\'s indefinite offshore detention on Nauru and Manus.', vocabulary: ['the hostile environment', 'wrongly classified as illegal', 'Operation Sovereign Borders', 'indefinite detention', 'people-smugglers'] },
  ];

  const essentialVocabulary = [
    { term: 'birthright citizenship', definition: 'Citizenship granted automatically to anyone born on a country\'s soil — protected in the US by the 14th Amendment (1868), challenged by Trump\'s January 2025 executive order.' },
    { term: 'the hostile environment', definition: 'UK policy designed by Theresa May as Home Secretary, requiring landlords, employers and the NHS to check immigration status — at the heart of the 2018 Windrush scandal.' },
    { term: 'to scrap a scheme', definition: 'To abolish or abandon a policy. Used of the Rwanda plan, scrapped by Keir Starmer in July 2024.' },
    { term: 'a deterrent', definition: 'A measure designed to discourage a behaviour — the official rationale of both the Rwanda plan and Australia\'s offshore model.' },
    { term: 'an asylum seeker / a refugee', definition: 'Someone who applies for / has been granted protection from persecution.' },
    { term: 'a sanctuary city', definition: 'A US city limiting cooperation with federal immigration enforcement — increasingly under pressure from Trump\'s second term.' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Immigration' },
      ]}
      badge="Civilisation · 2025"
      title="Immigration"
      titleAccent="& Border Control"
      subtitle="Trump 2.0 and the 14th Amendment, Britain's post-Brexit migration paradox, the rise and fall of the Rwanda plan, the Windrush scandal and Australia's offshore model."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Immigration Facts 2025"
          stats={[
            { value: 'Jan 2025', label: 'Trump\'s executive order targeting birthright citizenship' },
            { value: '728k', label: 'record UK net migration in 2024 (3× the figure on referendum day)' },
            { value: '£700m+', label: 'cost of the Rwanda plan — zero migrants ever flown' },
            { value: '2018', label: 'the Windrush scandal exposes the "hostile environment"' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Immigration Topics">
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

          <CivItem value="us-border-crisis" title="Trump 2.0 and the End of Birthright Citizenship">
            <div className="space-y-4">
              <p>
                Within hours of returning to office in January 2025, Donald Trump signed an executive order seeking to end birthright citizenship for children of undocumented migrants and temporary visa holders. The move directly targets the 14th Amendment, ratified in 1868 to protect the citizenship of formerly enslaved Americans, and was immediately challenged in federal courts. Whatever its legal fate, the order signals a radical break with a century and a half of American constitutional tradition. Combined with the largest deportation operation in US history — ICE raids reaching workplaces, schools and even churches once shielded by sanctuary policies — it reframes immigration not as a question of integration but as a matter of national identity to be defended. The new administration has also reinstated the "Remain in Mexico" rule and ended catch-and-release, turning the southern border into the central stage of Trump's second-term agenda.
              </p>
              <EssayBox>
                Mobilisable on: "Is national identity compatible with mass migration?"; the constitutional limits of executive power in the US; the rise of nativism in Western democracies; the politicisation of citizenship.
              </EssayBox>
              <CivVocabBox words="an executive order; to end birthright citizenship; undocumented migrants; the 14th Amendment; formerly enslaved Americans; to be challenged in federal courts; a radical break with constitutional tradition; the largest deportation operation in US history; ICE raids; sanctuary policies; the Remain in Mexico rule; catch-and-release; a matter of national identity" />
            </div>
          </CivItem>

          <CivItem value="uk-immigration-brexit" title="Britain's Post-Brexit Immigration Paradox">
            <div className="space-y-4">
              <p>
                Brexit was sold to many British voters as a way to "take back control" of the country's borders. Yet by 2024, net migration to the UK had reached an all-time record of 728,000 people — more than three times the figure on referendum day. The shift came almost entirely from outside the EU: students from India and Nigeria, NHS staff from the Philippines, Hong Kongers fleeing Chinese repression, and Ukrainians displaced by Russia's war. Successive Conservative governments alternated between symbolic crackdowns and pragmatic concessions, opening visa routes for care workers, seasonal pickers and even fishermen because Brexit and an ageing workforce had created chronic shortages. The episode illustrates a deeper irony of populist politics: the policies adopted in the name of restoring control often produce outcomes their advocates never anticipated, and economies eventually impose their own logic, regardless of campaign slogans.
              </p>
              <EssayBox>
                Mobilisable on: the gap between political promises and economic reality; the unintended consequences of Brexit; "Should liberal democracies have open borders?"; the paradoxes of populism.
              </EssayBox>
              <CivVocabBox words="to take back control of one's borders; an all-time record; three times the figure on referendum day; outside the EU; NHS staff from the Philippines; Hong Kongers fleeing repression; symbolic crackdowns; pragmatic concessions; visa routes for care workers; seasonal pickers; an ageing workforce; chronic shortages; the deeper irony of populist politics; campaign slogans" />
            </div>
          </CivItem>

          <CivItem value="channel-crossings-rwanda" title="The Rise and Fall of the Rwanda Plan">
            <div className="space-y-4">
              <p>
                In April 2022, the British government unveiled one of the most controversial migration policies in recent European history: deporting asylum seekers who had arrived irregularly in the UK — many on small boats across the English Channel — to Rwanda, 4,000 miles away, for processing and resettlement. Despite costing taxpayers more than £700 million in setup fees and "support" payments to Kigali, the scheme never sent a single migrant onto a plane: in November 2023, the UK Supreme Court unanimously ruled it unlawful on the grounds that Rwanda was not a reliably safe destination, and in July 2024 the incoming Labour government under Keir Starmer scrapped it within days of taking office. The episode illustrates the political appeal — and policy failure — of outsourcing migration management. It also raises a deeper question: how can liberal democracies reconcile their human rights commitments with a growing electoral demand for tighter borders?
              </p>
              <EssayBox>
                Mobilisable on: the limits of deterrence; "Should liberal democracies have open borders?"; the externalisation of migration management; the tension between popular demand and human rights law.
              </EssayBox>
              <CivVocabBox words="to unveil a controversial policy; an asylum seeker; to arrive irregularly; small boats across the English Channel; 4,000 miles away; setup fees; the UK Supreme Court ruled it unlawful; a reliably safe destination; the incoming Labour government; to scrap a scheme within days; outsourcing migration management; human rights commitments; electoral demand for tighter borders" />
            </div>
          </CivItem>

          <CivItem value="windrush-scandal" title="The Windrush Scandal: When the Hostile Environment Turns on Its Own Citizens">
            <div className="space-y-4">
              <p>
                In 2018, the United Kingdom was shaken by the Windrush scandal, named after the ship that brought Caribbean migrants to Britain after the Second World War to help rebuild the country. Decades later, hundreds of these legal residents — many in their seventies — were wrongly classified as illegal immigrants, denied healthcare, dismissed from their jobs and, in dozens of documented cases, deported to islands they had not seen since childhood. The scandal exposed the brutality of the "hostile environment" policy designed by Theresa May as Home Secretary, which had shifted the burden of proof from the state to the individual and conscripted landlords, employers and NHS staff into immigration enforcement. It forced Britain to confront an uncomfortable truth: bureaucratic cruelty toward migrants can extend to its own citizens, and the line between "deserving" and "undeserving" residents is far more arbitrary than political rhetoric suggests.
              </p>
              <EssayBox>
                Mobilisable on: the human cost of bureaucratic cruelty; "Is multiculturalism in crisis?"; the moral risks of anti-immigration politics; race, citizenship and the British state.
              </EssayBox>
              <CivVocabBox words="the Windrush scandal; Caribbean migrants; legal residents wrongly classified as illegal; to be denied healthcare; to be dismissed from one's job; to be deported; the hostile environment policy; the Home Secretary; to shift the burden of proof; to conscript landlords into immigration enforcement; bureaucratic cruelty; deserving and undeserving residents" />
            </div>
          </CivItem>

          <CivItem value="australia-offshore" title="Australia's Offshore Model: A Contested Template">
            <div className="space-y-4">
              <p>
                Australia has long pursued one of the world's harshest migration policies. Since 2013, the country's "Operation Sovereign Borders" has turned back boats and detained asylum seekers indefinitely on the remote islands of Nauru and Manus, often for years at a time. Successive governments — Labor and Liberal alike — have defended the policy as a deterrent against people-smugglers, crediting it with virtually halting maritime arrivals. Critics, including the United Nations, have denounced conditions amounting to indefinite detention and have documented serious mental health crises, suicides and child abuse among detainees. The Australian model has become a contested template: admired in private by several European governments faced with their own boat arrivals, condemned in public by human rights organisations. It captures the central dilemma of border policy in liberal democracies — what level of cruelty are voters willing to tolerate in the name of order?
              </p>
              <EssayBox>
                Mobilisable on: the externalisation of migration; "Should liberal democracies have open borders?"; the moral cost of deterrence; comparative migration policy in the English-speaking world.
              </EssayBox>
              <CivVocabBox words="one of the world's harshest migration policies; Operation Sovereign Borders; to turn back boats; to detain asylum seekers indefinitely; the remote islands of Nauru and Manus; a deterrent against people-smugglers; to virtually halt maritime arrivals; the United Nations; conditions amounting to indefinite detention; serious mental health crises; a contested template; the central dilemma of border policy" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Immigration Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Border Management and Humanitarian Concerns">
                "Border control must balance security with humanitarian obligations." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="2. Immigration Policy and Economic Needs">
                To what extent do economic needs conflict with political rhetoric on immigration?
              </EssayQuestion>
              <EssayQuestion title="3. Brexit and Immigration Control">
                "Brexit has complicated rather than simplified UK immigration control." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="4. Asylum Systems and International Law">
                How should countries balance domestic immigration control with international refugee obligations?
              </EssayQuestion>
              <EssayQuestion title="5. Public Opinion and Immigration Policy">
                "Public opinion on immigration is often misinformed and manipulated." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="6. Climate Migration and Future Challenges">
                To what extent will climate change reshape global migration patterns?
              </EssayQuestion>
              <EssayQuestion title="7. State vs Federal Immigration Policy">
                "Immigration policy should be uniform across all states." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="8. Immigration and National Identity">
                How does immigration challenge and enrich national identity?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Civil Religion', to: '/formation/anglais/civilisation/civil-religion' }} next={{ label: 'Contemporary Crises', to: '/formation/anglais/civilisation/contemporary-crises' }} />
      </div>
    </PRFormationLayout>
  );
};

export default ImmigrationPage;
