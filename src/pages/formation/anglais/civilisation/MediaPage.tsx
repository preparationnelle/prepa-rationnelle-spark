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

const MediaPage = () => {
  const keyTopics = [
    { title: 'Digital Media Influence', content: 'Social networks in politics, information amplification, misinformation spread, trust erosion', vocabulary: ['digital media', 'social networks', 'information amplification', 'misinformation', 'trust erosion'] },
    { title: 'Social Media Polarization', content: 'Echo chambers, algorithms, polarization, disinformation campaigns, fake content', vocabulary: ['echo chambers', 'algorithms', 'polarization', 'disinformation', 'fake content'] },
    { title: 'Regulatory Responses', content: 'Digital Services Act, Online Safety Act, content moderation, platform obligations', vocabulary: ['Digital Services Act', 'Online Safety Act', 'content moderation', 'platform obligations', 'regulation'] },
    { title: 'Platform Upheavals', content: 'Twitter/X changes, content moderation rules, alternative platforms, digital media literacy', vocabulary: ['platform upheavals', 'content moderation', 'alternative platforms', 'digital media literacy', 'fake news'] },
  ];

  const essentialVocabulary = [
    { term: 'digital media', definition: 'Electronic media that can be created, viewed, distributed, and modified on digital devices' },
    { term: 'social networks', definition: 'Online platforms that allow users to create and share content and connect with others' },
    { term: 'misinformation', definition: 'False or misleading information spread unintentionally' },
    { term: 'disinformation', definition: 'False information deliberately spread to deceive people' },
    { term: 'echo chambers', definition: 'Environments where people only encounter information that confirms their existing beliefs' },
    { term: 'content moderation', definition: 'The practice of monitoring and regulating user-generated content on online platforms' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Media' },
      ]}
      badge="Civilisation · 2025"
      title="Media"
      titleAccent="& Digital Communication"
      subtitle="Social media, journalism, fake news, regulation, and the future of information democracy."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Media Facts 2025"
          stats={[
            { value: '40%', label: 'Global news trust' },
            { value: '32%', label: 'US news trust' },
            { value: '20%', label: '18-24s use TikTok for news' },
            { value: '56%', label: 'Worry about fake vs real info' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Media Topics">
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

          <CivItem value="digital-media-influence" title="Digital Media Influence: The New Information Landscape">
            <div className="space-y-4">
              <p>
                Digital media and social networks are now influential forces in politics – amplifying information, but also misinformation, at unprecedented scale. Trust in traditional news media has eroded in recent years, and more people (especially the young) rely on social platforms for information. A 2023 Reuters Institute report found global news trust fell to ~40%, and in the US trust stood at only 32%, among the lowest levels.
              </p>
              <p>
                At the same time, younger audiences are turning to social media influencers and sites like TikTok for news; about 20% of 18–24 year-olds used TikTok for news in 2023. These trends point to a fragmentation of the information landscape, with algorithms often funneling users into echo chambers. Indeed, social media's role in fueling polarization and spreading disinformation has become a major concern. During the 2024 U.S. election cycle, organized misinformation campaigns flourished on social networks – fake videos and rumors (even one fabricated in Russia of a non-citizen claiming to have voted) circulated widely, influencing perceptions of candidates and issues.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on media trust, information consumption patterns, or the impact of social media on democracy. It provides concrete statistics on trust levels and specific examples of misinformation campaigns, making it useful for arguments about the decline of traditional media or the dangers of social media reliance. It can also support points about generational differences in news consumption.
              </EssayBox>
              <CivVocabBox words="influential forces; amplifying; unprecedented scale; eroded; rely on; fragmentation; information landscape; algorithms; funneling; echo chambers; fueling polarization; disinformation; flourished; fabricated; circulated; influencing perceptions" />
            </div>
          </CivItem>

          <CivItem value="social-media-polarization" title="Social Media Polarization: Echo Chambers and Disinformation">
            <div className="space-y-4">
              <p>
                The role of social media in fueling polarization and spreading disinformation has become a major concern in contemporary society. Algorithms designed to maximize engagement often funnel users into echo chambers, where they only encounter information that confirms their existing beliefs and biases. This creates a feedback loop that reinforces political and social divisions, making it increasingly difficult for people to find common ground or consider alternative perspectives.
              </p>
              <p>
                Generative AI has made doctored images and videos easier to produce, further blurring the line between truth and falsehood online. During major political events like the 2024 U.S. election cycle, organized misinformation campaigns flourished on social networks. Fake videos and rumors circulated widely, including one fabricated in Russia of a non-citizen claiming to have voted. Polling data suggest these false narratives had real effects on voters' views about the economy, crime, and immigration. The challenge of distinguishing between authentic and manipulated content has become a critical issue for democratic societies, as the quality of public discourse depends on access to reliable information.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on social media's impact on democracy, political polarization, or the challenges of the digital information age. It provides specific examples of AI-generated content and misinformation campaigns, making it useful for arguments about the need for media literacy or the dangers of algorithmic echo chambers. It can also support points about the importance of fact-checking in the digital era.
              </EssayBox>
              <CivVocabBox words="fueling polarization; disinformation; algorithms; maximize engagement; echo chambers; feedback loop; reinforces; divisions; common ground; alternative perspectives; doctored; blurring; falsehood; flourished; circulated; fabricated; false narratives; authentic; manipulated content; public discourse; reliable information" />
            </div>
          </CivItem>

          <CivItem value="regulatory-responses" title="Regulatory Responses: Balancing Safety and Free Speech">
            <div className="space-y-4">
              <p>
                Governments around the world are grappling with how to rein in online harms without stifling free speech. In the European Union, the Digital Services Act took effect in 2023, imposing new obligations on big tech companies to police illegal content and be transparent about their algorithms. This landmark legislation represents one of the most comprehensive attempts to regulate social media platforms, requiring them to take responsibility for the content they host while maintaining user rights and freedoms.
              </p>
              <p>
                The UK followed with its sweeping Online Safety Act in late 2023, aiming to make the internet "the safest place in the world". The law requires platforms to curb everything from child sexual abuse material and terrorist content to fraud and harassment. It also controversially pressures companies to address encrypted messages – a provision critics argue endangers privacy and could undermine the security of legitimate communications. These regulatory approaches reflect the complex challenge of protecting users from harm while preserving the open nature of the internet and fundamental rights like privacy and free expression.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on internet regulation, the balance between safety and free speech, or international approaches to platform governance. It provides concrete examples of recent legislation and can support arguments about the need for regulation or the risks of over-regulation. It's also useful for analyzing how different jurisdictions approach similar challenges.
              </EssayBox>
              <CivVocabBox words="grappling; rein in; online harms; stifling; free speech; obligations; police illegal content; transparent; algorithms; landmark legislation; comprehensive; regulate; take responsibility; host; user rights; freedoms; sweeping; curb; controversial; pressures; encrypted messages; provision; endangers privacy; undermine; legitimate communications; fundamental rights; free expression" />
            </div>
          </CivItem>

          <CivItem value="big-tech-regulation-essay" title="Big Tech Regulation Essay">
            <div className="space-y-4">
              <div className="bg-pr-gray-bg p-6 rounded-lg border-l-[3px] border-pr-black">
                <h4 className="font-dm-serif text-pr-black mb-4">Essay: Big Tech Regulation Debate</h4>
                <div className="text-sm leading-relaxed space-y-4 text-pr-gray-dark">
                  <p>
                    Considering the potential or actual harm Big Tech companies may do, to what extent would you say they need regulation?
                  </p>
                  <p>
                    While the big five tech giants (Google, Amazon, Meta, Apple, Microsoft) account for 22% of the SNP500 (stock market index), they turn out to be increasingly looked down on by their own consumers. Indeed, however well-meaning theses companies seem to be, they also prove to make many people's lives harder to cope with.
                  </p>
                  <p>
                    Some thus argue the government should kick off ruling Big Tech firms to set safeguards up. In fact, in the wake of Molly Russell's suicide (a 14-year-old teenager) that overwhelmed Britons in 2017 for instance, Instagram was taken to court for exposing the adolescent to images of self-harm that must have spurred Molly to kill herself. This has led the British Parliament to discuss our exposure to this kind of negative online message, which undoubtedly should have been done earlier. Moreover, not only are Big Tech companies blighted by appalling content, but they also fail to tackle cyberbullying. Having been told how awful it is to be endlessly put down on the internet, I genuinely agree with activists who fight for change.
                  </p>
                  <p>
                    Yet most of these people turn a blind eye to the fact that Big Tech companies bear the brunt of these misuses, too. Admittedly, they often balk at curbing their users 'rights, but they are still well advised both to improve their services and to muzzle hateful speeches. Therefore, as banning cocaine did not prevent addicts from snorting it, I believe laws will not solve any issue I mentioned in the long run. Instead of forcing Big Tech companies to moderate every disturbing thing about their service, which is impractical in real life and inauspicious for free speech, we should use technology more carefully.
                  </p>
                  <p>
                    One may legitimately object that Big Tech companies still bring about economic and political harms we should legally fight against.
                  </p>
                  <p>
                    Firstly, these behemoths often nip their competitors in the bud by eventually taking them over. If they do not, they usually have no qualms about wiping them out given that they outcompete newcomers. This cannot last any longer as it threatens fair competition which is key in a capitalist economy. States ergo should step in by preventing Big Tech companies from being in a monopolistic position.
                  </p>
                  <p>
                    Secondly, western democracies 'breakdowns partly stem from Tech giants. They can indeed bias their users in favor of the political parties they lean toward. The 2016's presidential election for example pointed out how influential Big Tech firms have become. Likewise, we should not sit on our hands, and we must penalize disinformation and protect citizens 'privacy.
                  </p>
                  <p>
                    Big Tech companies thus need regulation but not for the reasons many assert. We should rather focus on broader harms Tech giants are directly causing. It will not be undemanding to do so, yet it is paramount to make capitalism and democracy thrive.
                  </p>
                  <p className="text-right font-medium">464 words</p>
                </div>
              </div>
              <EssayBox>
                This essay provides a nuanced perspective on Big Tech regulation, balancing concerns about content moderation and free speech with arguments for regulating economic and political harms. It includes specific examples like the Molly Russell case and references to real legislation. The essay can be used as a model for discussing the complex trade-offs involved in regulating technology companies.
              </EssayBox>
              <CivVocabBox words="looked down on; well-meaning; harder to cope with; kick off ruling; set safeguards up; overwhelmed; exposing; self-harm; spurred; blighted by appalling content; tackle cyberbullying; put down; turn a blind eye; bear the brunt; balk at curbing; muzzle hateful speeches; snorting; impractical; inauspicious; legitimately object; bring about; nip in the bud; no qualms; wiping them out; outcompete; newcomers; monopolistic position; breakdowns; bias; lean toward; influential; sit on our hands; penalize disinformation; thrive" />
            </div>
          </CivItem>

          <CivItem value="platform-upheavals" title="Platform Upheavals: Twitter/X Changes and Alternative Platforms">
            <div className="space-y-4">
              <p>
                Even as these regulations roll out, platforms themselves have seen significant upheaval in their policies and user experiences. Twitter, for instance, loosened many content moderation rules under new owner Elon Musk (renaming the platform "X"), leading to concerns about a surge in hate speech and misinformation. The platform's approach to content moderation became more permissive, with many users reporting increased exposure to harmful content and a decline in the overall quality of discourse.
              </p>
              <p>
                Rival networks and decentralized platforms sprang up in response to these changes (e.g., Meta's "Threads"), highlighting public demand for healthier online discourse. Meanwhile, the prevalence of "fake news" and conspiracy theories on Facebook, YouTube, and TikTok has spurred initiatives to improve digital media literacy. Surveys show 56% of people now worry about distinguishing real versus fake information on the internet. Taken together, the media environment in 2025 is one of democratized content creation but also chaotic information quality. Ensuring that factual, responsible journalism stands out – and that social networks become less prone to abuse – remains an urgent challenge in combating polarization and maintaining healthy democratic discourse.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on platform competition, content moderation policies, or the evolution of social media. It provides specific examples of platform changes and their consequences, making it useful for arguments about the importance of content moderation or the role of competition in improving platform quality. It can also support points about the need for media literacy education.
              </EssayBox>
              <CivVocabBox words="upheaval; policies; loosened; content moderation rules; permissive; surge; hate speech; harmful content; decline; quality of discourse; rival networks; decentralized platforms; sprang up; healthier online discourse; prevalence; conspiracy theories; spurred initiatives; digital media literacy; democratized content creation; chaotic information quality; factual; responsible journalism; prone to abuse; combating polarization; democratic discourse" />
            </div>
          </CivItem>

          <CivItem value="future-challenges" title="Future Challenges: Privacy, Security, and Information Quality">
            <div className="space-y-4">
              <p>
                The rapid evolution of digital media and social networks presents ongoing challenges that require careful consideration of competing interests. On one hand, there's a need to protect users from harmful content, misinformation, and privacy violations. On the other hand, there's a desire to maintain the open, innovative nature of the internet that has enabled unprecedented access to information and opportunities for expression. This tension is particularly evident in debates over encryption, where law enforcement agencies seek access to encrypted communications for security purposes, while privacy advocates argue that such access would undermine the security of all users.
              </p>
              <p>
                The rise of generative AI adds another layer of complexity, as the technology that can create convincing fake content also has legitimate uses in creative industries, education, and research. Developing effective strategies to combat AI-generated misinformation while preserving the benefits of the technology will require collaboration between governments, tech companies, civil society organizations, and individual users. The future of digital media depends on finding the right balance between regulation and innovation, between safety and freedom, and between global standards and local needs.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on the future of digital media, the balance between innovation and regulation, or the challenges of emerging technologies. It provides a framework for thinking about competing interests and can support arguments about the need for balanced approaches to digital governance. It's also useful for analyzing the role of different stakeholders in shaping the future of online spaces.
              </EssayBox>
              <CivVocabBox words="rapid evolution; competing interests; harmful content; privacy violations; innovative nature; unprecedented access; opportunities for expression; tension; encryption; law enforcement agencies; security purposes; privacy advocates; undermine; generative AI; layer of complexity; convincing fake content; legitimate uses; creative industries; effective strategies; combat; collaboration; stakeholders; global standards; local needs" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Media Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-4">
              <div className="p-6 bg-pr-gray-bg rounded-lg border-l-[3px] border-pr-black">
                <h4 className="font-dm-serif text-pr-black mb-4">1. US Polarization Essay Sample</h4>
                <div className="text-sm leading-relaxed space-y-4 text-pr-gray-dark">
                  <p>
                    <strong>Question:</strong> How would you explain the increasing polarization in the USA? In your opinion, can the risk of "greater disunion" be averted?
                  </p>
                  <p>
                    While the US Supreme Court broke off the legal precedent that gave women the constitutional right to an abortion (Roe v Wade, 1973) last year, the country turned out to split even more. Indeed, some red States like Texas forbade termination right away unlike blue ones that kept on fighting for feminist ideas. This example shows how politically polarized American society gradually becomes. Yet, this phenomenon which results in both the proliferation of the extremes and their relentless showdowns, is also to be considered from an economic and cultural perspective in order perhaps to bring it to an end.
                  </p>
                  <p>
                    In fact, the USA faces its growing disunion because the federal government does not unify the States as it used to. Nowadays, not only can the States run their own tax system, but they also get to opt for legislations as regards global issues like the rights to possess a gun. But even though it seems more democratic to let them pick out what they want to authorize, it deepens polarization as Americans aim to live in areas where their opinions are shared. Had the federal government been more powerful in US politics, the States could not be so opposed to each other, and policies would be more moderate as being made in a consensus. Thus, Americans could potentially shrink the risk of greater disunion by getting involved in national debates.
                  </p>
                  <p>
                    However frightening this may be, polarization also reflects democracy's dysfunction. Indeed, if Americans aim at staying united, they will have to dismantle political monopolies, too, as this situation often leads the party in charge of the State to gag its opposition. Admittedly, seeking to silence your opponents helps you win votes but, at the end of the day, political diversity plummets, which brings about polarization. For instance, the Republicans are trying to sap voter franchise by making your identity card compulsory to vote. On top of that, they redraw electoral maps (gerrymandering) in the States they won so as not to lose them in the next polls. Consequently, blocking theses strategies would surely enable American to avert its political disunion.
                  </p>
                  <p>
                    Nevertheless, we should not turn a blind eye to the growing cultural polarization that occurs on the other side of the Atlantic. Indeed, although the US based itself on immigration in the 19th century, melting pots are rarer and rarer these days. This is because economic inequalities spiked in a society where the rich (often white people) and the poor (often African American individuals) do not mix. These economic and cultural divisions might get even worse than the political ones given that disparities will soar if nothing changes with upcoming energy and food shortages.
                  </p>
                  <p>
                    Americans ergo can tackle polarization by strengthening their political and economic system. It will not be easy, but reforms will have to be made to unify the current disunited states. More than that, the country must pull itself together to
                  </p>
                  <p className="text-right font-medium">478 words</p>
                </div>
              </div>
              <EssayQuestion title="2. Social Media and Democracy">
                "Social media has become a threat to democratic discourse." Assess this claim by examining the spread of misinformation and polarization.
              </EssayQuestion>
              <EssayQuestion title="3. Media Trust and Information Quality">
                To what extent has the decline in trust in traditional media contributed to the rise of misinformation on social platforms?
              </EssayQuestion>
              <EssayQuestion title="4. Platform Regulation">
                "Governments should regulate social media platforms to protect users from harm." Discuss this statement with reference to recent legislative efforts.
              </EssayQuestion>
              <EssayQuestion title="5. AI and Misinformation">
                How has the development of generative AI changed the nature of online misinformation and what challenges does this pose for society?
              </EssayQuestion>
              <EssayQuestion title="6. Privacy vs Security">
                "The need to combat online harms justifies restrictions on digital privacy." Assess this claim by examining the balance between safety and freedom.
              </EssayQuestion>
              <EssayQuestion title="7. Media Literacy">
                56% of people worry about distinguishing real from fake information online. How can digital media literacy be improved to address this concern?
              </EssayQuestion>
              <EssayQuestion title="8. Platform Competition">
                To what extent does competition between social media platforms lead to better content moderation and user experience?
              </EssayQuestion>
              <EssayQuestion title="9. Future of Digital Media">
                How can the digital media environment be structured to maximize the benefits of democratized content creation while minimizing the spread of harmful content?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Education', to: '/formation/anglais/civilisation/education' }} next={{ label: 'Justice', to: '/formation/anglais/civilisation/justice' }} />
      </div>
    </PRFormationLayout>
  );
};

export default MediaPage;
