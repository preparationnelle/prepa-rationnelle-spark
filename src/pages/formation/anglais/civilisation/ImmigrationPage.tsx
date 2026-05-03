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
    { title: 'US Border Crisis and Policy Shifts', content: '2.4M encounters 2023, Title 42 end, asylum backlog, Republican vs Democratic approaches', vocabulary: ['Title 42', 'asylum seekers', 'border encounters', 'migration surge', 'asylum backlog', 'border facilities'] },
    { title: 'UK Immigration Post-Brexit', content: '606K net migration 2022, Channel crossings, Rwanda deal, Illegal Migration Act 2023', vocabulary: ['net migration', 'Channel crossings', 'Rwanda deal', 'Illegal Migration Act', 'asylum system', 'Brexit control'] },
    { title: 'Political and Humanitarian Challenges', content: 'Xenophobia vs openness, public opinion splits, economic needs vs political rhetoric', vocabulary: ['xenophobia', 'public opinion', 'economic needs', 'political rhetoric', 'humanitarian crisis', 'sovereignty'] },
    { title: 'Global Migration Pressures', content: 'Climate migrants, conflicts, economic disparities, interdependence, future challenges', vocabulary: ['climate migrants', 'conflicts', 'economic disparities', 'interdependence', 'globalization', 'future challenges'] },
  ];

  const essentialVocabulary = [
    { term: 'Title 42', definition: 'US public health order that allowed rapid expulsion of migrants without normal asylum processing' },
    { term: 'asylum seekers', definition: 'People seeking protection in another country due to persecution or danger in their home country' },
    { term: 'net migration', definition: 'Difference between the number of immigrants entering and emigrants leaving a country' },
    { term: 'Channel crossings', definition: 'Dangerous boat journeys across the English Channel from France to England' },
    { term: 'Rwanda deal', definition: 'Controversial UK policy to deport asylum seekers to Rwanda for processing' },
    { term: 'xenophobia', definition: 'Fear, hatred, or prejudice against people from other countries or cultures' },
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
      subtitle="US border crisis, UK post-Brexit migration, asylum policy, and global migration pressures."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Immigration Facts 2025"
          stats={[
            { value: '2.4M', label: 'US border encounters 2023' },
            { value: '606K', label: 'UK net migration 2022' },
            { value: '1.5M', label: 'US asylum backlog cases' },
            { value: '45K', label: 'Channel crossings 2022' },
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

          <CivItem value="us-border-crisis" title="US Border Crisis: Record Crossings and Policy Challenges">
            <div className="space-y-4">
              <p>
                Immigration has been a defining political flashpoint in recent years, with debates intensifying over how to manage borders humanely yet securely. The United States has experienced historically high levels of unauthorized migration at its southern border, driven by instability and economic hardship in Latin America. In fiscal year 2023, U.S. authorities recorded over 2.4 million encounters at the Southwest border – a new record, slightly above the prior year. This surge has strained border facilities and the asylum system. Images of tens of thousands of migrants – families with children, single adults, unaccompanied teens – arriving at the Rio Grande created a sense of crisis. The drivers include poverty and violence in countries like Venezuela, Haiti, Cuba, Nicaragua, Honduras, and Guatemala, as well as perceptions (or misperceptions) of U.S. policy changes.
              </p>
              <p>
                The Biden administration, which took office in 2021, initially struck a more compassionate tone than the hardline Trump era, ending practices like family separation. However, record crossings quickly posed practical and political challenges. By late 2022, Republican governors in Texas and Arizona, accusing the federal government of inaction, started busing thousands of migrants to Democratic-run cities like New York, Washington D.C., and Chicago – a move critics called a stunt using human beings as pawns. Those destination cities then also struggled with shelter space and social services, leading even liberal mayors to plead for federal help. A major inflection point came in May 2023, when the U.S. ended the "Title 42" public health order that for two years had allowed rapid expulsion of migrants without normal asylum processing (purportedly due to COVID-19).
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on immigration policy, border management, or the challenges of humanitarian border control. It provides concrete data on migration flows and can support arguments about the complexity of immigration policy or the need for comprehensive reform. It's also useful for analyzing the relationship between political rhetoric and practical challenges.
              </EssayBox>
              <CivVocabBox words="defining political flashpoint; manage borders; humanely; securely; unauthorized migration; southern border; instability; economic hardship; Latin America; fiscal year 2023; 2.4 million encounters; Southwest border; new record; surge; strained; border facilities; asylum system; Rio Grande; sense of crisis; poverty; violence; Venezuela; Haiti; Cuba; Nicaragua; Honduras; Guatemala; Biden administration; compassionate tone; hardline Trump era; family separation; record crossings; Republican governors; Texas; Arizona; busing migrants; Democratic-run cities; pawns; shelter space; social services; inflection point; May 2023; Title 42; public health order; rapid expulsion; normal asylum processing" />
            </div>
          </CivItem>

          <CivItem value="uk-immigration-brexit" title="UK Immigration Post-Brexit: Paradox of Control and Record Numbers">
            <div className="space-y-4">
              <p>
                In the United Kingdom, immigration has likewise been heated, especially since Brexit was in part a referendum on "taking back control" of borders. While Brexit ended free movement of EU citizens into Britain, overall net migration to the UK paradoxically soared to record levels after Brexit. In 2022, net migration hit an estimated +606,000 (later revised even higher) – the highest ever annual figure. This was driven by several factors: a post-pandemic rebound in work and student visas, a surge of skilled workers from outside Europe filling labor shortages, and the UK's generous schemes welcoming refugees from Ukraine's war (about 114,000 Ukrainians) and Hong Kong (over 50,000 arrivals under a BN(O) visa).
              </p>
              <p>
                The Conservative government found itself in a dilemma – needing immigrants to staff industries and the NHS, but politically beholden to an anti-immigration base. Prime Minister Rishi Sunak acknowledged the numbers are "too high" and vowed to reduce them, introducing measures like restricting foreign students from bringing families. Yet simultaneously, they had to ease rules in critical sectors (issuing more visas for care workers, seasonal farm laborers, even fishermen) because Brexit and an aging workforce created shortages. The situation underlines that Britain's economy, like many, actually needs migrants – even as public sentiment, stoked by tabloids, often perceives immigration as out of control.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on Brexit consequences, immigration policy, or the relationship between political promises and economic reality. It provides concrete examples of policy contradictions and can support arguments about the complexity of immigration control or the economic necessity of migration. It's also useful for analyzing the relationship between political rhetoric and practical needs.
              </EssayBox>
              <CivVocabBox words="taking back control; borders; free movement; EU citizens; net migration; paradoxically soared; record levels; 606,000; highest ever; post-pandemic rebound; work visas; student visas; skilled workers; outside Europe; labor shortages; generous schemes; refugees; Ukraine's war; 114,000 Ukrainians; Hong Kong; 50,000 arrivals; BN(O) visa; Conservative government; dilemma; staff industries; NHS; anti-immigration base; Rishi Sunak; too high; vowed reduce; foreign students; care workers; seasonal farm laborers; fishermen; aging workforce; shortages; needs migrants; tabloids; out of control" />
            </div>
          </CivItem>

          <CivItem value="channel-crossings-rwanda" title="Channel Crossings and the Controversial Rwanda Deal">
            <div className="space-y-4">
              <p>
                The most contentious aspect in the UK has been the rise in asylum seekers crossing the English Channel in small boats. These dangerous crossings – smuggling people on dinghies from France to England's southern coast – numbered around 45,000 people in 2022, and while slightly fewer (~33,000) in 2023, they remain a focus of intense media coverage and political rhetoric. Many boat migrants are refugees from countries like Syria, Iran, Eritrea, and increasingly Afghanistan – but because they arrive irregularly, the government labels them "illegal migrants". Britain's asylum system backlog ballooned, with over 150,000 people awaiting decisions and many placed in hotels at taxpayer expense, which became another controversy.
              </p>
              <p>
                In response, the government under Boris Johnson and then Sunak took a hardline turn. In 2022 they announced the highly controversial Rwanda deal: a policy to deport certain asylum seekers 4,000 miles away to Rwanda, where they would either seek asylum there or potentially be sent elsewhere, with the idea that this deterrent would stop the small boats. The plan faced immediate legal challenges and outcry from human rights groups and the UN. In June 2023, the Court of Appeal ruled the Rwanda scheme unlawful, finding that Rwanda's asylum system did not meet proper safety standards. The government appealed, but in November 2023 the UK Supreme Court unanimously struck down the Rwanda plan as unlawful, upholding that Rwanda is not a reliably "safe" destination for refugees. This was a severe blow to the government's flagship immigration policy.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on asylum policy, international law, or the challenges of deterring irregular migration. It provides concrete examples of controversial policies and can support arguments about the importance of international cooperation or the limitations of deterrence strategies. It's also useful for analyzing the relationship between political promises and legal reality.
              </EssayBox>
              <CivVocabBox words="contentious aspect; asylum seekers; English Channel; small boats; dangerous crossings; smuggling; dinghies; France; England's southern coast; 45,000 people; 33,000; intense media coverage; political rhetoric; refugees; Syria; Iran; Eritrea; Afghanistan; arrive irregularly; illegal migrants; asylum system backlog; 150,000 people; hotels; taxpayer expense; hardline turn; Boris Johnson; Sunak; Rwanda deal; deport; 4,000 miles away; deterrent; legal challenges; outcry; human rights groups; UN; Court of Appeal; Rwanda scheme unlawful; safety standards; UK Supreme Court; unanimously struck down; reliably safe destination; severe blow; flagship immigration policy" />
            </div>
          </CivItem>

          <CivItem value="political-humanitarian-challenges" title="Political and Humanitarian Challenges: Xenophobia vs Openness">
            <div className="space-y-4">
              <p>
                Immigration controversies also extend beyond the border. Internally, there's a debate about what to do with millions of undocumented immigrants already living in the U.S. (approx 11 million). Comprehensive immigration reform bills have repeatedly failed in Congress amid partisan deadlock. Meanwhile, some states passed their own measures: e.g., Florida in 2023 enacted strict requirements for employers to verify immigration status and made transporting undocumented people a felony in some cases, causing fear in immigrant communities. Conversely, states like California expanded social services to undocumented residents. This patchwork reflects the absence of a national consensus. Public opinion polls show Americans broadly support legal immigration (and are sympathetic to migrants fleeing persecution) but also want stronger border enforcement; they support giving "Dreamers" (those brought illegally as children) a path to citizenship, but are split on broader amnesty.
              </p>
              <p>
                The immigration debate in Britain, as elsewhere, also carries an undercurrent of xenophobia versus openness. Brexit, for example, dramatically reduced EU immigration (down to a trickle of a few thousand net from hundreds of thousands before 2016), but at the cost of staffing shortages. Now the majority of migrants are from Asia and Africa, which in some ways has shifted the discourse – one might observe there is less political agitation about Polish or Romanian workers, but more about those arriving illegally or those from culturally different backgrounds. The government talks about attracting "the brightest and best" while cracking down on "illegal" entrants. Public opinion in the UK is somewhat split: a sizable segment is sympathetic to refugees (especially after seeing tragedies like migrants drowning in the Channel), yet many also demand stronger enforcement and think the country has limited capacity.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on immigration politics, public opinion, or the challenges of balancing humanitarian concerns with political realities. It provides concrete examples of policy contradictions and can support arguments about the importance of comprehensive reform or the challenges of state-level policymaking. It's also useful for analyzing the relationship between public opinion and policy outcomes.
              </EssayBox>
              <CivVocabBox words="immigration controversies; undocumented immigrants; 11 million; comprehensive immigration reform bills; partisan deadlock; Florida 2023; verify immigration status; transporting; felony; fear; immigrant communities; California; expanded social services; patchwork; national consensus; legal immigration; sympathetic; fleeing persecution; stronger border enforcement; Dreamers; path to citizenship; broader amnesty; xenophobia; openness; Brexit; reduced EU immigration; trickle; hundreds of thousands; staffing shortages; Asia; Africa; political agitation; Polish; Romanian workers; arriving illegally; culturally different backgrounds; brightest and best; illegal entrants; sizable segment; refugees; tragedies; migrants drowning; stronger enforcement; limited capacity" />
            </div>
          </CivItem>

          <CivItem value="global-migration-pressures" title="Global Migration Pressures: Future Challenges and Interdependence">
            <div className="space-y-4">
              <p>
                Across both the US and UK, immigration remains a "major contemporary crisis" in the sense of being a persistent policy challenge and political flashpoint. The humanitarian element is significant – how to handle large flows of desperate people – and so is the sovereignty element – how to maintain an orderly system and public consent. Neither country has found a silver-bullet solution. The U.S., under a divided Congress, is stuck with patchwork executive actions and overwhelmed systems. The UK, after Brexit, has more nominal control, yet finds itself arguably more inundated by asylum claims and reliant on foreign labor than before, highlighting the interdependence globalization brings.
              </p>
              <p>
                Going forward, pressures will likely continue due to global factors (climate migrants, conflicts like Ukraine, economic disparities). The test for these democracies will be whether they can devise immigration systems that are fair, efficient, and aligned with their values – and whether leaders can engage the public on the issue without demonizing migrants or stoking fear. At present, it's a delicate balance, and immigration keeps roiling the politics of both nations, reminding us that how we treat "the stranger at our gate" is a core question of national character. The challenge is to create policies that respect human dignity while maintaining public confidence in the system's integrity and effectiveness.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on global migration challenges, democratic governance, or the future of immigration policy. It provides insights into long-term challenges and can support arguments about the importance of international cooperation or the need for sustainable solutions. It's also useful for analyzing the relationship between global pressures and national responses.
              </EssayBox>
              <CivVocabBox words="major contemporary crisis; persistent policy challenge; political flashpoint; humanitarian element; large flows; desperate people; sovereignty element; orderly system; public consent; silver-bullet solution; divided Congress; patchwork executive actions; overwhelmed systems; nominal control; inundated; asylum claims; foreign labor; interdependence; globalization; pressures continue; global factors; climate migrants; conflicts; Ukraine; economic disparities; democracies; fair; efficient; aligned values; engage public; demonizing migrants; stoking fear; delicate balance; politics; both nations; how we treat the stranger at our gate; national character; respect; human dignity; public confidence; system's integrity; effectiveness" />
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
