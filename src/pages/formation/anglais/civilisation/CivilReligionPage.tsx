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

const CivilReligionPage = () => {
  const keyTopics = [
    { title: 'American Civil Religion', content: 'Constitution reverence, flag veneration, two civil religions, multicultural vs conservative values', vocabulary: ['civil religion', 'Constitution', 'flag', 'One Nation under God', 'American Dream', 'patriotism'] },
    { title: 'British National Identity', content: 'Multi-national state, monarchy, Church of England, royal rituals, generational divides', vocabulary: ['multi-national state', 'monarchy', 'Church of England', 'royal rituals', 'Union Jack', 'NHS'] },
    { title: 'Identity Contests and Polarization', content: 'January 6 Capitol riot, Brexit identity crisis, culture wars, history curricula debates', vocabulary: ['polarization', 'culture wars', 'identity crisis', 'history curricula', 'memory politics'] },
    { title: 'Future of Civil Religion', content: 'Civic values, democracy, rule of law, diversity inclusion, generational understanding', vocabulary: ['civic values', 'democracy', 'rule of law', 'diversity', 'inclusion', 'national unity'] },
  ];

  const essentialVocabulary = [
    { term: 'civil religion', definition: 'Set of rituals, symbols, and shared values that create a quasi-sacred sense of national identity' },
    { term: 'culture wars', definition: 'Conflicts over cultural values, history education, and national identity narratives' },
    { term: 'memory politics', definition: 'Political struggles over how historical events and figures are remembered and taught' },
    { term: 'Christian nationalism', definition: 'Movement seeking to fuse national identity with conservative Christian values' },
    { term: 'pluralist civil religion', definition: 'Civil religion that embraces secular governance and diversity of faith' },
    { term: 'identity crisis', definition: 'Period of uncertainty about personal or national identity and values' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Civil Religion' },
      ]}
      badge="Civilisation · 2025"
      title="Civil Religion"
      titleAccent="& National Identity"
      subtitle="Civic faith, national symbols, monarchy, and the contested narratives of the US and UK."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Identity Facts 2025"
          stats={[
            { value: '2', label: 'Civil religions in US (liberal vs conservative)' },
            { value: '29%', label: 'Britons view monarchy as very important' },
            { value: '12%', label: 'Young Britons (18-34) value monarchy' },
            { value: '25%', label: 'UK support for monarchy abolition' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Civil Religion Topics">
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

          <CivItem value="american-civil-religion" title="American Civil Religion: Fractured Faith and Competing Visions">
            <div className="space-y-4">
              <p>
                Both the United States and United Kingdom exhibit forms of "civil religion" – a set of rituals, symbols, and shared values that create a quasi-sacred sense of national identity – and both are experiencing shifts in what that identity means. In the United States, civil religion has traditionally revolved around reverence for the Constitution, the flag, and the idea of America as a promised land of freedom. Phrases like "One Nation under God" or the veneration of presidents and war heroes reflect this civic faith. However, America's civil religion is increasingly fractured. Scholars speak of "two civil religions" now: one espoused by the multicultural, liberal segment that emphasizes America's ideals of inclusion and equality ("a nation of immigrants," the legacy of Martin Luther King Jr., etc.), and another by conservative or Christian nationalist groups that focus on traditional patriotism, military strength, and often a belief in America's divine favor.
              </p>
              <p>
                These divisions were stark on January 6, 2021, when rioters – some carrying crosses or "Jesus Saves" signs alongside American flags – stormed the Capitol to overturn an election result they falsely believed was illegitimate. In their minds, they were acting out of patriotic (even religious) duty to "Save America," while to others they were betraying the very democratic principles the flag and Constitution stand for. This clash showed how the same national symbols can be claimed for opposing causes. Patriotic rituals remain strong in the U.S. – from standing for the national anthem to massive celebrations of Independence Day – but debates simmer beneath. The act of kneeling during the anthem, pioneered by NFL player Colin Kaepernick to protest racial injustice, was seen as virtuous free expression by some and sacrilegious by others.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on civil religion, national identity, or the challenges of maintaining unity in diverse societies. It provides concrete examples of symbolic conflicts and can support arguments about the importance of shared values or the challenges of symbolic politics. It's also useful for analyzing the relationship between national symbols and political meaning.
              </EssayBox>
              <CivVocabBox words="civil religion; rituals; symbols; shared values; quasi-sacred sense; national identity; reverence; Constitution; flag; promised land; freedom; One Nation under God; veneration; presidents; war heroes; civic faith; fractured; two civil religions; multicultural liberal segment; ideals; inclusion; equality; nation of immigrants; Martin Luther King Jr.; conservative; Christian nationalist groups; traditional patriotism; military strength; divine favor; January 6 2021; rioters; crosses; Jesus Saves signs; American flags; stormed Capitol; falsely; illegitimate; patriotic duty; Save America; betraying; democratic principles; opposing causes; patriotic rituals; national anthem; Independence Day; kneeling; Colin Kaepernick; racial injustice; sacrilegious" />
            </div>
          </CivItem>

          <CivItem value="british-national-identity" title="British National Identity: Multi-National State and Royal Traditions">
            <div className="space-y-4">
              <p>
                In the United Kingdom, national identity has its own complexities. The UK is a multi-national state (English, Scottish, Welsh, Northern Irish identities all under one umbrella) and has an official state religion (the monarch is head of the Church of England) – yet it is also highly secular and increasingly diverse. Civil religion in Britain historically was centered on the monarchy, the Church, and institutions like Parliament and the military. Royal rituals – coronations, jubilees, royal weddings, state funerals – have served as focal points for national togetherness. We saw this vividly in 2022 when Queen Elizabeth II died after 70 years on the throne: an outpouring of national grief and nostalgia ensued, with an estimated quarter million people queueing for miles in London to pay respects as she lay in state, and billions watching the funeral worldwide.
              </p>
              <p>
                It was a profound civil religious moment, where even secular Britons felt a sense of collective loss and reflection on British identity and continuity. In May 2023, the coronation of King Charles III was another such occasion – steeped in ancient pageantry and Anglican liturgy, yet attempting to adapt (for instance, by involving other faith representatives in the ceremony for the first time). Still, these royal occasions also highlighted generational and societal divides. Polling around the coronation showed only 29% of Britons viewed the monarchy as "very important," the lowest level recorded. Among young adults (18–34), a mere 12% said the monarchy is very important, compared to 42% of those over 55. This suggests the quasi-religious awe once surrounding the Crown is fading, especially among youth and in an increasingly multicultural society that may not see themselves reflected in centuries-old royal traditions.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on constitutional monarchy, national identity, or the challenges of maintaining traditional institutions in modern societies. It provides concrete examples of royal events and can support arguments about the importance of symbolic leadership or the challenges of generational change. It's also useful for analyzing the relationship between tradition and modernity.
              </EssayBox>
              <CivVocabBox words="multi-national state; English; Scottish; Welsh; Northern Irish identities; one umbrella; official state religion; monarch; head; Church of England; highly secular; increasingly diverse; civil religion; Britain; historically centered; monarchy; Church; Parliament; military; royal rituals; coronations; jubilees; royal weddings; state funerals; focal points; national togetherness; 2022; Queen Elizabeth II died; 70 years on throne; outpouring; national grief; nostalgia; quarter million people; queueing; pay respects; lay in state; billions; coronation King Charles III; pageantry; Anglican liturgy; other faith representatives; generational divides; societal divides; 29% Britons; very important; 12% young adults; 42% over 55; quasi-religious awe; Crown fading; multicultural society; centuries-old royal traditions" />
            </div>
          </CivItem>

          <CivItem value="identity-contests" title="Identity Contests: Polarization and the Battle for National Symbols">
            <div className="space-y-4">
              <p>
                British national identity is also pulled in different directions by the constituent nations. Scots have a strong separate national story (tied to notions of sovereignty and Presbyterian Kirk, etc.), and many in Scotland no longer emotionally invest in UK-wide symbols like the Westminster Parliament or even the British (as opposed to Scottish) flag. English identity has, if anything, grown more pronounced post-Brexit – some analyses find that English nationalism (St. George's flag, celebration of England's patron saint day, etc.) is filling a gap as British identity fragments. Sporting events like the England football team's matches become surrogate expressions of national pride, especially for England – during the Euros or World Cup, you'll see a sea of red-and-white St. George flags.
              </p>
              <p>
                Meanwhile, Northern Ireland's identity splits between those who see themselves as British and those who are Irish; the fragile equilibrium set by the Good Friday Agreement is part of the UK's national tapestry now. Events like Brexit were partly driven by English nationalist sentiment (the Leave campaign often invoked the trope of Britain standing alone, sovereign – very much a Churchillian wartime nostalgia, which is a kind of civil religious memory in the UK). For Remainers, conversely, European integration had become part of their identity, so Brexit's outcome felt like an identity crisis – prompting some to wrap themselves in EU flags in protests, a novel sight in Britain. One could argue the UK is searching for a new shared narrative. "Civil religion" in Britain might need to evolve from Empire and Monarchy towards something more inclusive of modern values.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on national identity, political polarization, or the challenges of maintaining unity in multi-national states. It provides concrete examples of identity conflicts and can support arguments about the importance of inclusive narratives or the challenges of political change. It's also useful for analyzing the relationship between political decisions and identity formation.
              </EssayBox>
              <CivVocabBox words="British national identity; pulled in different directions; constituent nations; Scots; separate national story; sovereignty; Presbyterian Kirk; Scotland; emotionally invest; UK-wide symbols; Westminster Parliament; British flag; Scottish flag; English identity; pronounced; post-Brexit; English nationalism; St. George's flag; patron saint day; British identity fragments; sporting events; England football team; surrogate expressions; national pride; Euros; World Cup; sea of red-and-white St. George flags; Northern Ireland; British; Irish; fragile equilibrium; Good Friday Agreement; UK national tapestry; Brexit; English nationalist sentiment; Leave campaign; Britain standing alone; Churchillian wartime nostalgia; civil religious memory; Remainers; European integration; identity crisis; EU flags; protests; new shared narrative; Empire; Monarchy; modern values" />
            </div>
          </CivItem>

          <CivItem value="education-memory" title="Education and Memory Politics: The Battle for Historical Narratives">
            <div className="space-y-4">
              <p>
                In both countries, education and "memory politics" play a role in shaping national identity. The "culture war" over history curricula – whether to teach Britain's colonial misdeeds or America's racial injustices versus portraying heroic national narratives – is essentially a battle over civil religion and collective memory. In the US, laws in some states restricting teaching about systemic racism or critical race theory reflect a desire to preserve a traditional, triumphalist civil religion, whereas those pushing for a more unvarnished history (like the 1619 Project's emphasis on slavery's role) seek a reformed civil religion acknowledging past sins as part of national growth. In the UK, similar debates occur over how much the school syllabus should emphasize British achievements versus the suffering caused by imperialism.
              </p>
              <p>
                The late Queen in a way served as a living symbol of unity; with her passing, some worry if the glue will hold. King Charles has a tougher job to embody national unity, given he's less popular and ascended at a time of socio-economic strain. So far, there hasn't been a surge of republicanism in terms of majority wanting to abolish the monarchy (support for abolition holds around 25% in polls). But as noted, apathy or indifference is rising – which itself might erode the civil religious fervour over time. The challenge for both nations is finding ways to honor their historic symbols and narratives while adapting to contemporary values of diversity and inclusion.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on education policy, historical memory, or the challenges of teaching controversial history. It provides concrete examples of curriculum debates and can support arguments about the importance of honest historical education or the challenges of political influence on education. It's also useful for analyzing the relationship between education and national identity.
              </EssayBox>
              <CivVocabBox words="education; memory politics; shaping national identity; culture war; history curricula; Britain's colonial misdeeds; America's racial injustices; heroic national narratives; civil religion; collective memory; US; laws; restricting teaching; systemic racism; critical race theory; preserve; traditional triumphalist civil religion; unvarnished history; 1619 Project; slavery's role; reformed civil religion; past sins; national growth; UK; school syllabus; British achievements; suffering; imperialism; late Queen; living symbol of unity; passing; glue; King Charles; embody national unity; less popular; socio-economic strain; surge of republicanism; abolish monarchy; abolition; 25%; apathy; indifference; civil religious fervour; honor historic symbols; contemporary values; diversity; inclusion" />
            </div>
          </CivItem>

          <CivItem value="future-civil-religion" title="Future of Civil Religion: Reimagining National Unity">
            <div className="space-y-4">
              <p>
                Ultimately, national identity in 2025 is in flux. The ideals at the heart of American civil religion – freedom, equality, the "American Dream" – still inspire many, including immigrants who swear the Oath of Citizenship. But polarization has meant that even the flag can be seen as partisan (some associate it with one political faction waving oversized flags on pickup trucks, while others try to reclaim it for all Americans). In Britain, the Union Jack likewise swings between being a unifying emblem (like during Queen Elizabeth's jubilees) and a contested one (Scottish independence supporters prefer the Saltire, and some people of colour feel uneasy about the flag due to far-right groups co-opting it in the past).
              </p>
              <p>
                Both societies are wrestling with how to honor their historic symbols and narratives while adapting to contemporary values of diversity and inclusion. The concept of civil religion might need reimagining – perhaps focusing on civic values like democracy, rule of law, and mutual respect rather than ethnic or religious heritage. If a new consensus can form around those civic ideals, national identity could be a source of unity again rather than division. Achieving that will require dialogue, generational understanding, and leadership that appeals to the "better angels" of the national character. The future of civil religion in both countries may depend on their ability to create inclusive narratives that honor the past while embracing the diversity of the present.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on the future of national identity, civic values, or the challenges of creating inclusive societies. It provides insights into future prospects and can support arguments about the importance of civic values or the challenges of maintaining national unity. It's also useful for analyzing the relationship between tradition and progress.
              </EssayBox>
              <CivVocabBox words="national identity; in flux; ideals; American civil religion; freedom; equality; American Dream; immigrants; Oath of Citizenship; polarization; flag; partisan; political faction; oversized flags; pickup trucks; reclaim; all Americans; Britain; Union Jack; unifying emblem; Queen Elizabeth's jubilees; contested; Scottish independence supporters; Saltire; people of colour; uneasy; far-right groups; co-opting; honor historic symbols; contemporary values; diversity; inclusion; civic values; democracy; rule of law; mutual respect; ethnic heritage; religious heritage; new consensus; civic ideals; source of unity; division; dialogue; generational understanding; leadership; better angels; national character; inclusive narratives; honor the past; embracing diversity" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Civil Religion Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Civil Religion and National Unity">
                "Civil religion is essential for maintaining national unity in diverse societies." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="2. American Civil Religion Division">
                To what extent has American civil religion become polarized between liberal and conservative visions?
              </EssayQuestion>
              <EssayQuestion title="3. British Monarchy and National Identity">
                "The British monarchy remains central to national identity despite declining support." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="4. National Symbols and Political Meaning">
                How do national symbols acquire political meaning, and what happens when they become contested?
              </EssayQuestion>
              <EssayQuestion title="5. Education and Memory Politics">
                "History education is a battleground for national identity." Discuss this statement with examples.
              </EssayQuestion>
              <EssayQuestion title="6. Multi-National State Challenges">
                To what extent can a multi-national state maintain a unified national identity?
              </EssayQuestion>
              <EssayQuestion title="7. Future of National Identity">
                "National identity must evolve to embrace diversity and inclusion." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="8. Civic Values vs. Cultural Heritage">
                How can nations balance honoring their cultural heritage with embracing modern civic values?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Commonwealth', to: '/formation/anglais/civilisation/commonwealth' }} next={{ label: 'Immigration', to: '/formation/anglais/civilisation/immigration' }} />
      </div>
    </PRFormationLayout>
  );
};

export default CivilReligionPage;
