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

const CivilRightsPage = () => {
  const keyTopics = [
    { title: 'Racial Justice and BLM', content: 'Police brutality, systemic racism, Confederate monuments, colonial past, police reform', vocabulary: ['Black Lives Matter', 'police brutality', 'systemic racism', 'Confederate monuments', 'colonial past', 'police reform'] },
    { title: 'Women\'s Rights and #MeToo', content: 'Sexual misconduct, workplace policies, Roe v. Wade, abortion rights, Respect for Marriage Act', vocabulary: ['#MeToo', 'sexual misconduct', 'zero-tolerance policies', 'Roe v. Wade', 'abortion rights', 'Respect for Marriage Act'] },
    { title: 'LGBTQ+ Rights and Backlash', content: 'Gender-affirming healthcare, transgender rights, Don\'t Say Gay law, culture wars, acceptance vs backlash', vocabulary: ['LGBTQ+ rights', 'gender-affirming healthcare', 'transgender rights', 'Don\'t Say Gay', 'culture wars', 'acceptance'] },
    { title: 'Climate Activism and Civil Disobedience', content: 'Extinction Rebellion, Just Stop Oil, climate strikers, disruptive tactics, environmental awareness', vocabulary: ['climate activism', 'civil disobedience', 'Extinction Rebellion', 'Just Stop Oil', 'disruptive tactics', 'environmental awareness'] },
  ];

  const essentialVocabulary = [
    { term: 'civil rights', definition: 'Fundamental rights and freedoms that belong to every person, protected by law' },
    { term: 'social movements', definition: 'Organized efforts by large groups to promote or resist social change' },
    { term: 'systemic racism', definition: 'Institutional patterns of discrimination embedded in social structures and policies' },
    { term: 'civil disobedience', definition: 'Peaceful refusal to obey certain laws as a form of political protest' },
    { term: 'culture wars', definition: 'Conflicts between groups with different cultural values and beliefs' },
    { term: 'backlash', definition: 'Strong negative reaction against social or political changes' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Civil Rights' },
      ]}
      badge="Civilisation · 2025"
      title="Civil Rights"
      titleAccent="& Social Movements"
      subtitle="BLM, #MeToo, LGBTQ+ rights, climate activism, and the dynamics of progress and backlash."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Civil Rights Facts 2025"
          stats={[
            { value: '15-26M', label: 'Americans in BLM protests 2020' },
            { value: '2022', label: 'Roe v. Wade overturned' },
            { value: '70%', label: 'US support same-sex marriage' },
            { value: '2023', label: 'Gender recognition law debates UK' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Civil Rights Topics">
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

          <CivItem value="blm-movement" title="Black Lives Matter: The Largest Protest Wave in US History">
            <div className="space-y-4">
              <p>
                The past few years have seen a surge of activism and social movements fighting for civil rights – and in some cases, pushing back against them. In mid-2020, the Black Lives Matter (BLM) movement erupted into what was likely the largest protest wave in U.S. history. An estimated 15 to 26 million Americans participated in racial justice demonstrations after the murder of George Floyd, with rallies spanning all 50 states and even abroad. This unprecedented mobilization forced a national reckoning on police brutality and systemic racism. It led to policy responses in some cities (such as bans on chokeholds, or removing Confederate monuments) and greater corporate and institutional focus on diversity.
              </p>
              <p>
                In the UK too, BLM protests drew tens of thousands; in one iconic incident, demonstrators in Bristol toppled the statue of slave trader Edward Colston and threw it into the harbour. (Those protesters were later acquitted of vandalism, as jurors seemed to agree the statue's presence was offensive and outdated.) The Colston episode sparked a national conversation about how Britain commemorates its colonial past. We've since seen universities and museums re-evaluate symbols of imperialism, and some artefacts – like the Benin Bronzes – returned to their places of origin. Though the initial BLM momentum has slowed, it has left a lasting imprint: terms like "systemic racism" entered mainstream discourse, and communities of color continue to demand police reform and equal treatment.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on social movements, racial justice, or the impact of mass protests. It provides concrete statistics on participation and can support arguments about the effectiveness of grassroots activism or the need for institutional reform. It's also useful for analyzing the relationship between social movements and policy change.
              </EssayBox>
              <CivVocabBox words="surge of activism; social movements; fighting for civil rights; pushing back; Black Lives Matter movement; erupted; largest protest wave; U.S. history; estimated; participated; racial justice demonstrations; murder of George Floyd; rallies spanning; all 50 states; abroad; unprecedented mobilization; forced; national reckoning; police brutality; systemic racism; led to; policy responses; cities; bans on chokeholds; removing Confederate monuments; greater corporate focus; institutional focus; diversity; UK too; drew tens of thousands; iconic incident; demonstrators; Bristol; toppled; statue; slave trader; Edward Colston; threw; harbour; Colston episode; sparked; national conversation; Britain commemorates; colonial past; universities; museums; re-evaluate; symbols of imperialism; artefacts; Benin Bronzes; returned; places of origin; initial BLM momentum; slowed; lasting imprint; mainstream discourse; communities of color; continue to demand; police reform; equal treatment" />
            </div>
          </CivItem>

          <CivItem value="metoo-womens-rights" title="#MeToo Movement and Women's Rights: Advances and Setbacks">
            <div className="space-y-4">
              <p>
                Other social movements have also transformed the landscape. The #MeToo movement, which surged a few years earlier, continues to influence culture by holding powerful men accountable for sexual misconduct and pushing workplaces to enforce zero-tolerance policies. High-profile convictions (Harvey Weinstein, R. Kelly, etc.) and a general increase in awareness around consent and harassment can be traced to #MeToo's impact. Women's rights more broadly saw both advancements and setbacks. In a landmark regression, the U.S. Supreme Court in 2022 overturned Roe v. Wade, ending the federal constitutional right to abortion after nearly 50 years.
              </p>
              <p>
                This galvanized massive protests nationwide – crowds poured into the streets of cities from New York to Los Angeles after the ruling, and many states immediately enacted abortion bans. President Biden and others decried the decision as a huge blow to women's freedom. In the year since, the fight has shifted to the state level: some states have protected abortion access or even enshrined it in law, while others have banned almost all abortions. The Roe reversal also prompted a rare bipartisan action in Congress: fearing that other rights (like same-sex marriage) might be in jeopardy, legislators passed the Respect for Marriage Act (RFMA) in late 2022. This law requires federal and interstate recognition of same-sex and interracial marriages, essentially codifying protections that had relied on Supreme Court precedents. The RFMA's passage – signed by President Biden – was a notable victory for LGBTQ+ rights at a time when other civil rights felt under threat.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on women's rights, reproductive freedom, or the impact of social movements on policy. It provides concrete examples of legal changes and can support arguments about the importance of protecting civil rights or the role of the judiciary in social issues. It's also useful for analyzing the relationship between social movements and legislative responses.
              </EssayBox>
              <CivVocabBox words="social movements; transformed landscape; #MeToo movement; surged; continues to influence; culture; holding powerful men accountable; sexual misconduct; pushing workplaces; enforce; zero-tolerance policies; high-profile convictions; Harvey Weinstein; R. Kelly; awareness; consent; harassment; #MeToo's impact; advancements; setbacks; landmark regression; U.S. Supreme Court; overturned; Roe v. Wade; ending; federal constitutional right; abortion; galvanized; massive protests; crowds poured; states immediately enacted; abortion bans; decried; huge blow; women's freedom; fight has shifted; state level; protected abortion access; enshrined; banned; Roe reversal; rare bipartisan action; Congress; same-sex marriage; jeopardy; legislators passed; Respect for Marriage Act; RFMA; codifying; protections; Supreme Court precedents; RFMA's passage; signed; Biden; notable victory; LGBTQ+ rights; under threat" />
            </div>
          </CivItem>

          <CivItem value="lgbtq-rights-backlash" title="LGBTQ+ Rights: Acceptance vs. Backlash in the Culture Wars">
            <div className="space-y-4">
              <p>
                Indeed, LGBTQ+ rights have themselves become a flashpoint. On one hand, acceptance of LGBTQ people is higher than ever in much of the Western world, and policies like RFMA show institutional support. Pride marches are massive annual events in many cities. Yet there has also been a pronounced backlash, particularly targeting transgender individuals. In the US, numerous states (especially conservative-led ones) have passed laws restricting transgender youth from accessing gender-affirming healthcare or participating in sports, and even laws limiting discussion of gender and sexuality in schools (like Florida's so-called "Don't Say Gay" law).
              </p>
              <p>
                Trans rights activists and major medical organizations oppose these measures as harmful and discriminatory, and protests have occurred in state capitols. This "culture war" over trans rights mirrors a larger pattern: progressive social movements push for inclusion and the expansion of rights, while an opposing movement mobilizes fears and seeks to claw back some of those gains. Similar dynamics are visible in the UK – for example, heated debates over reforming gender recognition laws led to political standoffs between the Scottish and UK governments in 2023. The tension between advancing LGBTQ+ rights and resisting conservative pushback has created a polarized environment where both sides see their fundamental values at stake.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on LGBTQ+ rights, culture wars, or the tension between progress and resistance. It provides concrete examples of legal restrictions and can support arguments about the importance of protecting minority rights or the challenges of advancing social progress. It's also useful for analyzing the dynamics of social change and resistance.
              </EssayBox>
              <CivVocabBox words="LGBTQ+ rights; flashpoint; acceptance; higher than ever; Western world; institutional support; Pride marches; massive annual events; pronounced backlash; targeting; transgender individuals; numerous states; conservative-led; passed laws; restricting; transgender youth; gender-affirming healthcare; participating; sports; limiting discussion; gender; sexuality; schools; Don't Say Gay law; Trans rights activists; medical organizations; oppose; harmful; discriminatory; protests; state capitols; culture war; trans rights; larger pattern; progressive social movements; inclusion; expansion of rights; opposing movement; mobilizes fears; claw back; gains; UK; heated debates; gender recognition laws; political standoffs; Scottish; UK governments; tension; advancing LGBTQ+ rights; resisting; conservative pushback; polarized environment; fundamental values; at stake" />
            </div>
          </CivItem>

          <CivItem value="climate-activism" title="Climate Activism: Civil Disobedience for Environmental Action">
            <div className="space-y-4">
              <p>
                Climate activism is another key social movement of our era. Groups like Extinction Rebellion and Just Stop Oil in the UK, or the youth-led Sunrise Movement and climate strikers internationally, have used civil disobedience to demand urgent action on climate change. Their disruptive tactics (blocking roads, interrupting cultural events) have been polarizing – drawing attention to the climate crisis, but also prompting stricter policing laws. In the UK, as mentioned, new protest laws were introduced partly in response to climate protesters' tactics, raising concerns about curbing civil liberties.
              </p>
              <p>
                Still, climate activists have succeeded in keeping environmental issues in the public eye, especially as real-world extreme weather (heatwaves, wildfires, floods) validates their alarm. The urgency of their message has been reinforced by scientific consensus and increasingly visible climate impacts. While some criticize their methods as too disruptive, others argue that the scale of the climate crisis justifies more aggressive forms of protest. The effectiveness of climate activism lies not just in immediate policy changes, but in shifting public consciousness and making environmental issues impossible to ignore. This has created a complex dynamic where environmental concerns compete with economic interests and public order considerations in policy debates.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on climate activism, civil disobedience, or the effectiveness of protest tactics. It provides concrete examples of activist groups and can support arguments about the importance of environmental awareness or the balance between protest rights and public order. It's also useful for analyzing the relationship between activism and policy responses.
              </EssayBox>
              <CivVocabBox words="climate activism; key social movement; era; Extinction Rebellion; Just Stop Oil; youth-led; Sunrise Movement; climate strikers; internationally; civil disobedience; demand; urgent action; climate change; disruptive tactics; blocking roads; interrupting; cultural events; polarizing; drawing attention; climate crisis; prompting; stricter policing laws; new protest laws; raising concerns; curbing civil liberties; climate activists; succeeded; environmental issues; public eye; real-world extreme weather; heatwaves; wildfires; floods; validates; alarm; urgency; reinforced; scientific consensus; visible climate impacts; criticize methods; too disruptive; argue; scale; justifies; aggressive forms; protest; effectiveness; immediate policy changes; shifting; public consciousness; impossible to ignore; complex dynamic; environmental concerns; compete; economic interests; public order considerations; policy debates" />
            </div>
          </CivItem>

          <CivItem value="civil-society-counter-movements" title="Civil Society Reinvigoration and Counter-Movements">
            <div className="space-y-4">
              <p>
                All these movements – for racial justice, gender equality, LGBTQ+ rights, climate action – reflect a reinvigoration of civil society. They often encounter counter-movements (nationalist, nativist or religiously conservative currents) that portray themselves as defending traditional values. The result is a highly charged atmosphere where competing visions of society clash. These counter-movements often frame progressive social changes as threats to cultural identity, religious values, or national cohesion, creating a polarized environment where compromise becomes difficult.
              </p>
              <p>
                But it's worth noting that public opinion has in many ways shifted towards inclusion: for example, support for same-sex marriage in the US is at an all-time high (~70%), and a majority of Americans also said they support the BLM goals even if they might disagree on tactics. Likewise in Britain, attitudes on race and empire are slowly changing – e.g. more people now acknowledge the negative aspects of colonialism and support teaching that history. Social movements have managed to broaden the conversation, even if the policy outcomes are mixed. The coming years will show whether these civil rights advances can be sustained and expanded, or whether pushback (legal and political) will stall their progress. The tension between advancing rights and maintaining social cohesion remains a central challenge for democratic societies.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on civil society, social change, or the dynamics of progressive and conservative movements. It provides concrete data on public opinion and can support arguments about the direction of social progress or the challenges of maintaining social cohesion. It's also useful for analyzing the long-term impact of social movements.
              </EssayBox>
              <CivVocabBox words="all these movements; racial justice; gender equality; LGBTQ+ rights; climate action; reinvigoration; civil society; counter-movements; nationalist; nativist; religiously conservative currents; defending; traditional values; highly charged atmosphere; competing visions; clash; frame; progressive social changes; threats; cultural identity; religious values; national cohesion; polarized environment; compromise; difficult; public opinion; shifted; inclusion; support; same-sex marriage; all-time high; majority of Americans; BLM goals; tactics; Britain; attitudes; race; empire; slowly changing; acknowledge; negative aspects; colonialism; teaching; history; social movements; broaden; conversation; policy outcomes; mixed; coming years; civil rights advances; sustained; expanded; pushback; legal; political; stall; progress; tension; advancing rights; maintaining; social cohesion; central challenge; democratic societies" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Civil Rights Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Social Movements and Change">
                "Social movements are more effective at raising awareness than achieving lasting change." Discuss this statement with reference to recent examples.
              </EssayQuestion>
              <EssayQuestion title="2. Civil Rights and Backlash">
                To what extent do advances in civil rights inevitably provoke conservative backlash?
              </EssayQuestion>
              <EssayQuestion title="3. Protest Tactics and Effectiveness">
                "Disruptive protest tactics are necessary to achieve social change." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="4. Women's Rights and Reproductive Freedom">
                How has the overturning of Roe v. Wade affected the landscape of women's rights in the US?
              </EssayQuestion>
              <EssayQuestion title="5. LGBTQ+ Rights and Culture Wars">
                "The fight for LGBTQ+ rights has become a central battleground in contemporary culture wars." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="6. Climate Activism and Civil Disobedience">
                To what extent is civil disobedience justified in the fight against climate change?
              </EssayQuestion>
              <EssayQuestion title="7. Social Progress and Social Cohesion">
                "Rapid social change threatens social cohesion." Assess this claim with reference to contemporary examples.
              </EssayQuestion>
              <EssayQuestion title="8. Future of Civil Rights">
                How can societies balance advancing civil rights with maintaining social stability and unity?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav next={{ label: 'Brexit', to: '/formation/anglais/civilisation/brexit' }} />
      </div>
    </PRFormationLayout>
  );
};

export default CivilRightsPage;
