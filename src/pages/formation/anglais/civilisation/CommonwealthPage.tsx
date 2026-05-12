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

const CommonwealthPage = () => {
  const keyTopics = [
    { title: 'Commonwealth Realms to Republics', content: 'Barbados transition, Jamaica referendum, Caribbean republic movements, constitutional changes', vocabulary: ['Commonwealth realms', 'republics', 'Barbados', 'Jamaica', 'referendum', 'constitutional changes'] },
    { title: 'Historical Justice and Reparations', content: 'CARICOM reparations, slavery apologies, royal archives research, colonial crimes acknowledgment', vocabulary: ['reparations', 'CARICOM', 'slavery', 'colonial crimes', 'royal archives', 'apologies'] },
    { title: 'Decolonization Movements', content: 'Museum artifacts return, university debates, statue removals, British public opinion shifts', vocabulary: ['decolonization', 'artifacts return', 'statue removals', 'public opinion', 'imperial figures'] },
    { title: 'Commonwealth Future and Relevance', content: '56 member countries, expansion beyond British sphere, influence limitations, reform discussions', vocabulary: ['Commonwealth', 'voluntary association', 'cooperation', 'relevance', 'reforms'] },
  ];

  const essentialVocabulary = [
    { term: 'Commonwealth realms', definition: 'Countries that share the British monarch as head of state' },
    { term: 'reparatory justice', definition: 'Compensation and acknowledgment for historical wrongs and injustices' },
    { term: 'decolonization', definition: 'Process of removing colonial influences and restoring indigenous control' },
    { term: 'CARICOM', definition: 'Caribbean Community organization representing 15 Caribbean governments' },
    { term: 'Empire preferences', definition: 'Historical trade advantages given to Commonwealth countries over others' },
    { term: 'Commonwealth of Nations', definition: 'Voluntary association of 56 independent countries, mostly former British territories' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Commonwealth' },
      ]}
      badge="Civilisation · 2025"
      title="The Commonwealth"
      titleAccent="& Post-Colonial Legacy"
      subtitle="British Empire legacy, Commonwealth evolution, decolonization movements, and reparatory justice."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Commonwealth Facts 2025"
          stats={[
            { value: '56', label: 'Commonwealth member countries' },
            { value: '2021', label: 'Barbados became republic' },
            { value: '15', label: 'CARICOM governments' },
            { value: '2025', label: 'Jamaica republic referendum target' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Commonwealth Topics">
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

          <CivItem value="realms-to-republics" title="From Commonwealth Realms to Republics: Constitutional Transitions">
            <div className="space-y-4">
              <p>
                The legacy of the British Empire and the future of the Commonwealth have come under increasing scrutiny. Many nations are re-evaluating constitutional and symbolic ties to the UK monarchy, alongside demands for acknowledgment of colonial injustices. In recent years, a string of Commonwealth realms – countries that share the British monarch as head of state – have signaled moves to become republics. In November 2021, Barbados made headlines by formally removing Queen Elizabeth II (now King Charles III) as head of state and inaugurating its own president. The transition was celebrated in Bridgetown and marked the first time in nearly three decades a realm became a republic (the last had been Mauritius in 1992).
              </p>
              <p>
                Barbados's decision has inspired debate in other Caribbean states. Jamaica in particular is on the path to republic status: the Jamaican government introduced a bill in 2024 to amend its constitution and oust King Charles as head of state, with the goal of holding a referendum on becoming a republic by 2025. Jamaican leaders framed it as the logical completion of independence – "closing the full circle" of decolonization. Jamaica's opposition is broadly on board, though they urge also cutting ties with the UK's Privy Council (still Jamaica's top court) to "fully decolonise" the judicial system. Other Caribbean nations like Belize, the Bahamas, St. Kitts & Nevis, and Grenada have also discussed republic referendums, especially after controversial royal visits in 2022 provoked public protests. The trend is clear: the British monarchy's role abroad is fading. These countries intend to remain in the Commonwealth of Nations (as Barbados did) – an indication that they seek a friendly post-colonial partnership, but without the colonial-era constitutional link of a foreign monarch.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on decolonization, constitutional change, or the evolution of post-colonial relationships. It provides concrete examples of political transitions and can support arguments about the importance of symbolic independence or the changing nature of Commonwealth ties. It's also useful for analyzing the relationship between constitutional change and national identity.
              </EssayBox>
              <CivVocabBox words="legacy; British Empire; Commonwealth; increasing scrutiny; re-evaluating; constitutional ties; symbolic ties; UK monarchy; acknowledgment; colonial injustices; string; Commonwealth realms; British monarch; head of state; signaled moves; become republics; Barbados; formally removing; Queen Elizabeth II; King Charles III; inaugurating; own president; Bridgetown; nearly three decades; realm became republic; Mauritius; 1992; inspired debate; Caribbean states; Jamaica; path; republic status; Jamaican government; bill; 2024; amend constitution; oust King Charles; referendum; closing the full circle; decolonization; Privy Council; fully decolonise; Belize; Bahamas; St. Kitts & Nevis; Grenada; royal visits; public protests; British monarchy fading; remain in Commonwealth; friendly post-colonial partnership; foreign monarch" />
            </div>
          </CivItem>

          <CivItem value="historical-justice" title="Historical Justice: Demands for Reparations and Acknowledgment">
            <div className="space-y-4">
              <p>
                At the same time, conversations about historical justice have grown louder. Former colonies are demanding apologies and reparations for the atrocities of slavery and colonialism. Caribbean nations, through the CARICOM Reparations Commission (representing 15 governments), have put forward a formal call for reparatory justice – including debt forgiveness, development programs, and a full apology from European powers. So far, Britain's response has stopped short of official apology or compensation, but there have been symbolic steps. King Charles III has notably shown a greater willingness to address this painful history.
              </p>
              <p>
                In April 2023, Buckingham Palace announced it would support independent research into the monarchy's ties to the transatlantic slave trade, granting scholars access to royal archives. This came after revelations of historical documents showing British monarchs (like King William III) personally invested in slave-trading companies. Charles said he takes this issue "profoundly seriously" and expressed "deep sorrow" for slavery's enduring impact. However, he has not issued a direct apology on behalf of the Crown or Empire. During a 2023 visit to Kenya, for instance, King Charles condemned the "abhorrent" violence Britain committed during Kenya's Mau Mau rebellion and spoke of his "deepest regret". Kenyan leaders appreciated his words but also pointedly noted that "much remains to be done" to achieve full reparations for colonial-era crimes. Human rights groups in Kenya had urged an unequivocal public apology, which Charles did not give. This measured approach reflects the royal family's cautious line – acknowledging suffering but stopping short of taking full culpability or discussing material reparations, likely to avoid legal liability and political controversy back home.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on historical justice, reparations, or the role of apologies in post-colonial reconciliation. It provides concrete examples of royal responses and can support arguments about the importance of acknowledging historical wrongs or the challenges of addressing colonial legacies. It's also useful for analyzing the relationship between symbolic gestures and material justice.
              </EssayBox>
              <CivVocabBox words="historical justice; grown louder; former colonies; demanding; apologies; reparations; atrocities; slavery; colonialism; Caribbean nations; CARICOM Reparations Commission; 15 governments; reparatory justice; debt forgiveness; development programs; full apology; European powers; stopped short; official apology; compensation; symbolic steps; King Charles III; willingness; painful history; April 2023; Buckingham Palace; independent research; monarchy's ties; transatlantic slave trade; royal archives; revelations; King William III; slave-trading companies; profoundly seriously; deep sorrow; enduring impact; abhorrent violence; Mau Mau rebellion; deepest regret; unequivocal public apology; cautious line; full culpability; material reparations; legal liability; political controversy" />
            </div>
          </CivItem>

          <CivItem value="decolonization-movements" title="Decolonization Movements: Institutional and Public Opinion Shifts">
            <div className="space-y-4">
              <p>
                Meanwhile, within the UK there's a growing movement to "decolonize" British institutions and narratives. Museums are under pressure to return looted artifacts – for example, the Horniman Museum in London agreed in 2022 to return Benin Bronzes to Nigeria. Universities have debated statues and building names honoring imperial figures; Oxford's Oriel College decided in principle to remove a statue of Cecil Rhodes after student protests (though as of 2025 it has not yet done so). The British public's view of the Empire is gradually shifting: while older generations were taught mostly about its glories, younger people are more aware of its exploitative aspects.
              </p>
              <p>
                By 2023, polls showed more Britons agreeing that Britain's colonial history is "something to be ashamed of" rather than proud of – a reversal from two decades ago. This reassessment has been contentious, with some conservatives decrying it as "erasing history" or fomenting unnecessary guilt. Yet historians argue that confronting the full truth – including Britain's role in the slave trade, famines in colonized lands, or brutal repression of uprisings (like the Amritsar massacre in India or the Mau Mau in Kenya) – is necessary for an honest national identity. The debate has extended to school curricula, with calls to teach a more balanced view of British history that acknowledges both achievements and atrocities. This represents a fundamental challenge to traditional narratives of British exceptionalism and imperial benevolence.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on decolonization, historical memory, or the challenges of confronting difficult national histories. It provides concrete examples of institutional changes and can support arguments about the importance of honest historical education or the need to reassess national narratives. It's also useful for analyzing the relationship between historical truth and national identity.
              </EssayBox>
              <CivVocabBox words="decolonize; British institutions; narratives; museums; under pressure; looted artifacts; Horniman Museum; Benin Bronzes; Nigeria; universities; statues; building names; imperial figures; Oxford's Oriel College; remove statue; Cecil Rhodes; student protests; British public's view; gradually shifting; older generations; glories; younger people; exploitative aspects; polls; ashamed of; reversal; reassessment; contentious; conservatives; erasing history; fomenting; unnecessary guilt; historians; full truth; slave trade; famines; colonized lands; brutal repression; uprisings; Amritsar massacre; India; Mau Mau; Kenya; honest national identity; school curricula; balanced view; achievements; atrocities; British exceptionalism; imperial benevolence" />
            </div>
          </CivItem>

          <CivItem value="commonwealth-future" title="Commonwealth Future: Relevance and Reform in a Changing World">
            <div className="space-y-4">
              <p>
                The Commonwealth itself, a voluntary association of 56 independent countries (most former empire territories), faces questions about its relevance. It still provides a platform for cooperation in areas like education, sport, and democracy promotion. For example, Commonwealth observer missions monitor elections, and programs exist for youth exchanges and climate change initiatives. Notably, the Commonwealth has expanded beyond the British colonial sphere: nations with no historical ties to Britain have joined (Mozambique in 1995, Rwanda in 2009, and recently even Togo and Gabon – former French colonies – in 2022). This shows a certain appeal in the organization's ideals of shared values.
              </p>
              <p>
                However, the Commonwealth's influence is limited – it's more a symbolic family of nations than a power bloc. Some in Britain long nostalgically for Commonwealth trade to replace EU trade (the old "Empire preferences" idea), but geography and economics make that difficult. Moreover, within member countries, especially in Africa and the Caribbean, there is some cynicism that the Commonwealth has not sufficiently addressed past injustices or current inequities (for instance, on COVID vaccine access or climate finance). The organization's effectiveness in addressing contemporary challenges like climate change, economic inequality, and human rights violations remains a subject of debate among member states and observers.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on international organizations, post-colonial cooperation, or the challenges of maintaining relevance in a changing world. It provides concrete examples of Commonwealth activities and can support arguments about the importance of international cooperation or the limitations of symbolic associations. It's also useful for analyzing the relationship between historical ties and contemporary relevance.
              </EssayBox>
              <CivVocabBox words="voluntary association; 56 independent countries; former empire territories; relevance; platform for cooperation; education; sport; democracy promotion; Commonwealth observer missions; monitor elections; youth exchanges; climate change initiatives; expanded beyond; British colonial sphere; Mozambique 1995; Rwanda 2009; Togo; Gabon; former French colonies; 2022; appeal; shared values; influence limited; symbolic family; power bloc; nostalgically; Commonwealth trade; replace EU trade; Empire preferences idea; geography; economics; cynicism; past injustices; current inequities; COVID vaccine access; climate finance; effectiveness; contemporary challenges; climate change; economic inequality; human rights violations; member states; observers" />
            </div>
          </CivItem>

          <CivItem value="royal-transition" title="Royal Transition: Queen Elizabeth's Passing and King Charles's New Era">
            <div className="space-y-4">
              <p>
                In 2022, the passing of Queen Elizabeth II – who was greatly revered across the Commonwealth – and the accession of King Charles III marked a turning point. The Queen had been a stabilizing figure and a personal link to the World War II generation. With Charles, who does not command the same automatic respect, some realms accelerated republic plans (as discussed). Charles, to his credit, has signaled he understands that to keep the Commonwealth together, he must show humility and a listening ear.
              </p>
              <p>
                At the 2022 Commonwealth summit in Rwanda, he acknowledged the issue of slavery and colonization, stating it's up to member countries to decide on their constitutional relations and that addressing the past is imperative. This represents a significant shift from the traditional royal approach of avoiding controversial topics. Charles has also shown willingness to modernize the monarchy's relationship with Commonwealth countries, recognizing that the institution must evolve to remain relevant. However, the challenge remains: can a hereditary monarchy truly represent the democratic aspirations of modern Commonwealth nations, especially as more become republics? The answer to this question will likely determine the Commonwealth's future structure and the monarchy's role within it.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on constitutional monarchy, institutional change, or the challenges of maintaining traditional institutions in modern contexts. It provides insights into royal leadership and can support arguments about the importance of institutional adaptation or the challenges of symbolic leadership. It's also useful for analyzing the relationship between tradition and modernity.
              </EssayBox>
              <CivVocabBox words="2022; passing; Queen Elizabeth II; greatly revered; Commonwealth; accession; King Charles III; turning point; stabilizing figure; personal link; World War II generation; same automatic respect; some realms; accelerated; republic plans; signaled; humility; listening ear; 2022 Commonwealth summit; Rwanda; acknowledged; slavery; colonization; member countries; constitutional relations; addressing past; imperative; traditional royal approach; avoiding controversial topics; modernize; monarchy's relationship; institution must evolve; remain relevant; hereditary monarchy; democratic aspirations; more become republics; Commonwealth's future structure; monarchy's role" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Commonwealth Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Commonwealth Realms to Republics">
                "The transition from Commonwealth realms to republics represents the final stage of decolonization." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="2. Historical Justice and Reparations">
                To what extent should former colonial powers provide reparations for historical injustices?
              </EssayQuestion>
              <EssayQuestion title="3. Decolonization Movements">
                "Decolonizing institutions is necessary for honest national identity." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="4. Commonwealth Relevance">
                How relevant is the Commonwealth in the 21st century, and what reforms are needed?
              </EssayQuestion>
              <EssayQuestion title="5. Royal Apologies and Historical Responsibility">
                "Royal apologies for colonial wrongs are symbolic but insufficient." Discuss this statement.
              </EssayQuestion>
              <EssayQuestion title="6. Post-Colonial Identity">
                To what extent can nations maintain both their colonial heritage and their independent identity?
              </EssayQuestion>
              <EssayQuestion title="7. Museum Artifacts and Cultural Return">
                "Museums should return all artifacts acquired during colonial periods." Assess this claim.
              </EssayQuestion>
              <EssayQuestion title="8. Future of the Commonwealth">
                How will the Commonwealth evolve as more nations become republics?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Brexit', to: '/formation/anglais/civilisation/brexit' }} next={{ label: 'Civil Religion', to: '/formation/anglais/civilisation/civil-religion' }} />
      </div>
    </PRFormationLayout>
  );
};

export default CommonwealthPage;
