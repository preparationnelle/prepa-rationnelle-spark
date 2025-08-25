import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf, TrendingDown, Gavel } from 'lucide-react';

const CommonwealthPage = () => {
  const keyTopics = [
    {
      title: "Commonwealth Realms to Republics",
      content: "Barbados transition, Jamaica referendum, Caribbean republic movements, constitutional changes",
      vocabulary: ["Commonwealth realms", "republics", "Barbados", "Jamaica", "referendum", "constitutional changes"]
    },
    {
      title: "Historical Justice and Reparations",
      content: "CARICOM reparations, slavery apologies, royal archives research, colonial crimes acknowledgment",
      vocabulary: ["reparations", "CARICOM", "slavery", "colonial crimes", "royal archives", "apologies"]
    },
    {
      title: "Decolonization Movements",
      content: "Museum artifacts return, university debates, statue removals, British public opinion shifts",
      vocabulary: ["decolonization", "artifacts return", "statue removals", "public opinion", "imperial figures"]
    },
    {
      title: "Commonwealth Future and Relevance",
      content: "56 member countries, expansion beyond British sphere, influence limitations, reform discussions",
      vocabulary: ["Commonwealth", "voluntary association", "cooperation", "relevance", "reforms"]
    }
  ];

  const essentialVocabulary = [
    { term: "Commonwealth realms", definition: "Countries that share the British monarch as head of state" },
    { term: "reparatory justice", definition: "Compensation and acknowledgment for historical wrongs and injustices" },
    { term: "decolonization", definition: "Process of removing colonial influences and restoring indigenous control" },
    { term: "CARICOM", definition: "Caribbean Community organization representing 15 Caribbean governments" },
    { term: "Empire preferences", definition: "Historical trade advantages given to Commonwealth countries over others" },
    { term: "Commonwealth of Nations", definition: "Voluntary association of 56 independent countries, mostly former British territories" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">The Commonwealth and Post-Colonial Legacy</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-emerald-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <Badge className="bg-emerald-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">The Commonwealth and Post-Colonial Legacy</CardTitle>
              <p className="text-muted-foreground">
                British Empire legacy, Commonwealth evolution, and decolonization movements
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Commonwealth Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">56</div>
                  <div className="text-sm text-emerald-100">Commonwealth member countries</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2021</div>
                  <div className="text-sm text-emerald-100">Barbados became republic</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-emerald-100">CARICOM governments</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-sm text-emerald-100">Jamaica republic referendum target</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Accordion type="multiple" className="w-full space-y-4">
            
            {/* Key Topics */}
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Commonwealth Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-emerald-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{topic.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{topic.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.vocabulary.map((word, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {word}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Commonwealth Realms to Republics */}
            <AccordionItem value="realms-to-republics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">From Commonwealth Realms to Republics: Constitutional Transitions</h3>
                    <p className="text-sm text-muted-foreground">Barbados, Jamaica, and Caribbean movements</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The legacy of the British Empire and the future of the Commonwealth have come under increasing scrutiny. Many nations are re-evaluating constitutional and symbolic ties to the UK monarchy, alongside demands for acknowledgment of colonial injustices. In recent years, a string of Commonwealth realms – countries that share the British monarch as head of state – have signaled moves to become republics. In November 2021, Barbados made headlines by formally removing Queen Elizabeth II (now King Charles III) as head of state and inaugurating its own president. The transition was celebrated in Bridgetown and marked the first time in nearly three decades a realm became a republic (the last had been Mauritius in 1992).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Barbados's decision has inspired debate in other Caribbean states. Jamaica in particular is on the path to republic status: the Jamaican government introduced a bill in 2024 to amend its constitution and oust King Charles as head of state, with the goal of holding a referendum on becoming a republic by 2025. Jamaican leaders framed it as the logical completion of independence – "closing the full circle" of decolonization. Jamaica's opposition is broadly on board, though they urge also cutting ties with the UK's Privy Council (still Jamaica's top court) to "fully decolonise" the judicial system. Other Caribbean nations like Belize, the Bahamas, St. Kitts & Nevis, and Grenada have also discussed republic referendums, especially after controversial royal visits in 2022 provoked public protests. The trend is clear: the British monarchy's role abroad is fading. These countries intend to remain in the Commonwealth of Nations (as Barbados did) – an indication that they seek a friendly post-colonial partnership, but without the colonial-era constitutional link of a foreign monarch.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on decolonization, constitutional change, or the evolution of post-colonial relationships. It provides concrete examples of political transitions and can support arguments about the importance of symbolic independence or the changing nature of Commonwealth ties. It's also useful for analyzing the relationship between constitutional change and national identity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      legacy; British Empire; future; Commonwealth; come under; increasing scrutiny; nations; re-evaluating; constitutional ties; symbolic ties; UK monarchy; alongside; demands; acknowledgment; colonial injustices; recent years; string; Commonwealth realms; countries; share; British monarch; head of state; signaled moves; become republics; November 2021; Barbados; made headlines; formally removing; Queen Elizabeth II; King Charles III; head of state; inaugurating; own president; transition; celebrated; Bridgetown; marked; first time; nearly three decades; realm became republic; last; Mauritius; 1992; Barbados's decision; inspired debate; other Caribbean states; Jamaica; particular; path; republic status; Jamaican government; introduced; bill; 2024; amend; constitution; oust; King Charles; head of state; goal; holding; referendum; becoming republic; 2025; Jamaican leaders; framed; logical completion; independence; closing the full circle; decolonization; Jamaica's opposition; broadly on board; urge; cutting ties; UK's Privy Council; still; Jamaica's top court; fully decolonise; judicial system; other Caribbean nations; Belize; Bahamas; St. Kitts & Nevis; Grenada; discussed; republic referendums; especially; controversial royal visits; 2022; provoked; public protests; trend; clear; British monarchy's role; abroad; fading; countries intend; remain; Commonwealth of Nations; Barbados did; indication; seek; friendly post-colonial partnership; without; colonial-era constitutional link; foreign monarch
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Historical Justice and Reparations */}
            <AccordionItem value="historical-justice" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Gavel className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Historical Justice: Demands for Reparations and Acknowledgment</h3>
                    <p className="text-sm text-muted-foreground">CARICOM reparations and royal responses</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    At the same time, conversations about historical justice have grown louder. Former colonies are demanding apologies and reparations for the atrocities of slavery and colonialism. Caribbean nations, through the CARICOM Reparations Commission (representing 15 governments), have put forward a formal call for reparatory justice – including debt forgiveness, development programs, and a full apology from European powers. So far, Britain's response has stopped short of official apology or compensation, but there have been symbolic steps. King Charles III has notably shown a greater willingness to address this painful history.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In April 2023, Buckingham Palace announced it would support independent research into the monarchy's ties to the transatlantic slave trade, granting scholars access to royal archives. This came after revelations of historical documents showing British monarchs (like King William III) personally invested in slave-trading companies. Charles said he takes this issue "profoundly seriously" and expressed "deep sorrow" for slavery's enduring impact. However, he has not issued a direct apology on behalf of the Crown or Empire. During a 2023 visit to Kenya, for instance, King Charles condemned the "abhorrent" violence Britain committed during Kenya's Mau Mau rebellion and spoke of his "deepest regret". Kenyan leaders appreciated his words but also pointedly noted that "much remains to be done" to achieve full reparations for colonial-era crimes. Human rights groups in Kenya had urged an unequivocal public apology, which Charles did not give. This measured approach reflects the royal family's cautious line – acknowledging suffering but stopping short of taking full culpability or discussing material reparations, likely to avoid legal liability and political controversy back home.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on historical justice, reparations, or the role of apologies in post-colonial reconciliation. It provides concrete examples of royal responses and can support arguments about the importance of acknowledging historical wrongs or the challenges of addressing colonial legacies. It's also useful for analyzing the relationship between symbolic gestures and material justice.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      same time; conversations; historical justice; grown louder; former colonies; demanding; apologies; reparations; atrocities; slavery; colonialism; Caribbean nations; through; CARICOM Reparations Commission; representing; 15 governments; put forward; formal call; reparatory justice; including; debt forgiveness; development programs; full apology; European powers; so far; Britain's response; stopped short; official apology; compensation; symbolic steps; King Charles III; notably shown; greater willingness; address; painful history; April 2023; Buckingham Palace; announced; support; independent research; monarchy's ties; transatlantic slave trade; granting scholars; access; royal archives; came after; revelations; historical documents; showing; British monarchs; King William III; personally invested; slave-trading companies; Charles said; takes this issue; profoundly seriously; expressed; deep sorrow; slavery's enduring impact; however; not issued; direct apology; behalf; Crown; Empire; during; 2023 visit; Kenya; instance; King Charles; condemned; abhorrent violence; Britain committed; Kenya's Mau Mau rebellion; spoke; deepest regret; Kenyan leaders; appreciated; words; also pointedly noted; much remains to be done; achieve; full reparations; colonial-era crimes; human rights groups; Kenya; urged; unequivocal public apology; Charles did not give; measured approach; reflects; royal family's cautious line; acknowledging suffering; stopping short; taking full culpability; discussing; material reparations; likely; avoid; legal liability; political controversy; back home
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Decolonization Movements */}
            <AccordionItem value="decolonization-movements" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Decolonization Movements: Institutional and Public Opinion Shifts</h3>
                    <p className="text-sm text-muted-foreground">Museum artifacts, university debates, and British attitudes</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Meanwhile, within the UK there's a growing movement to "decolonize" British institutions and narratives. Museums are under pressure to return looted artifacts – for example, the Horniman Museum in London agreed in 2022 to return Benin Bronzes to Nigeria. Universities have debated statues and building names honoring imperial figures; Oxford's Oriel College decided in principle to remove a statue of Cecil Rhodes after student protests (though as of 2025 it has not yet done so). The British public's view of the Empire is gradually shifting: while older generations were taught mostly about its glories, younger people are more aware of its exploitative aspects.
                  </p>
                  <p className="text-justify leading-relaxed">
                    By 2023, polls showed more Britons agreeing that Britain's colonial history is "something to be ashamed of" rather than proud of – a reversal from two decades ago. This reassessment has been contentious, with some conservatives decrying it as "erasing history" or fomenting unnecessary guilt. Yet historians argue that confronting the full truth – including Britain's role in the slave trade, famines in colonized lands, or brutal repression of uprisings (like the Amritsar massacre in India or the Mau Mau in Kenya) – is necessary for an honest national identity. The debate has extended to school curricula, with calls to teach a more balanced view of British history that acknowledges both achievements and atrocities. This represents a fundamental challenge to traditional narratives of British exceptionalism and imperial benevolence.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on decolonization, historical memory, or the challenges of confronting difficult national histories. It provides concrete examples of institutional changes and can support arguments about the importance of honest historical education or the need to reassess national narratives. It's also useful for analyzing the relationship between historical truth and national identity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      meanwhile; within UK; growing movement; decolonize; British institutions; narratives; museums; under pressure; return; looted artifacts; example; Horniman Museum; London; agreed; 2022; return; Benin Bronzes; Nigeria; universities; debated; statues; building names; honoring; imperial figures; Oxford's Oriel College; decided; principle; remove; statue; Cecil Rhodes; after; student protests; though; as of 2025; not yet done; British public's view; Empire; gradually shifting; while; older generations; taught; mostly; glories; younger people; more aware; exploitative aspects; 2023; polls showed; more Britons; agreeing; Britain's colonial history; something to be ashamed of; rather than; proud of; reversal; two decades ago; reassessment; contentious; some conservatives; decrying; erasing history; fomenting; unnecessary guilt; yet; historians argue; confronting; full truth; including; Britain's role; slave trade; famines; colonized lands; brutal repression; uprisings; Amritsar massacre; India; Mau Mau; Kenya; necessary; honest national identity; debate; extended; school curricula; calls; teach; more balanced view; British history; acknowledges; both achievements; atrocities; represents; fundamental challenge; traditional narratives; British exceptionalism; imperial benevolence
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Commonwealth Future and Relevance */}
            <AccordionItem value="commonwealth-future" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Commonwealth Future: Relevance and Reform in a Changing World</h3>
                    <p className="text-sm text-muted-foreground">56 member countries and organizational evolution</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The Commonwealth itself, a voluntary association of 56 independent countries (most former empire territories), faces questions about its relevance. It still provides a platform for cooperation in areas like education, sport, and democracy promotion. For example, Commonwealth observer missions monitor elections, and programs exist for youth exchanges and climate change initiatives. Notably, the Commonwealth has expanded beyond the British colonial sphere: nations with no historical ties to Britain have joined (Mozambique in 1995, Rwanda in 2009, and recently even Togo and Gabon – former French colonies – in 2022). This shows a certain appeal in the organization's ideals of shared values.
                  </p>
                  <p className="text-justify leading-relaxed">
                    However, the Commonwealth's influence is limited – it's more a symbolic family of nations than a power bloc. Some in Britain long nostalgically for Commonwealth trade to replace EU trade (the old "Empire preferences" idea), but geography and economics make that difficult. Moreover, within member countries, especially in Africa and the Caribbean, there is some cynicism that the Commonwealth has not sufficiently addressed past injustices or current inequities (for instance, on COVID vaccine access or climate finance). The organization's effectiveness in addressing contemporary challenges like climate change, economic inequality, and human rights violations remains a subject of debate among member states and observers.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on international organizations, post-colonial cooperation, or the challenges of maintaining relevance in a changing world. It provides concrete examples of Commonwealth activities and can support arguments about the importance of international cooperation or the limitations of symbolic associations. It's also useful for analyzing the relationship between historical ties and contemporary relevance.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      Commonwealth itself; voluntary association; 56 independent countries; most; former empire territories; faces questions; relevance; still provides; platform; cooperation; areas; education; sport; democracy promotion; example; Commonwealth observer missions; monitor elections; programs exist; youth exchanges; climate change initiatives; notably; Commonwealth; expanded; beyond; British colonial sphere; nations; no historical ties; Britain; joined; Mozambique; 1995; Rwanda; 2009; recently; Togo; Gabon; former French colonies; 2022; shows; certain appeal; organization's ideals; shared values; however; Commonwealth's influence; limited; more; symbolic family of nations; power bloc; some; Britain; long nostalgically; Commonwealth trade; replace; EU trade; old; Empire preferences idea; geography; economics; make; difficult; moreover; within member countries; especially; Africa; Caribbean; some cynicism; Commonwealth; not sufficiently addressed; past injustices; current inequities; instance; COVID vaccine access; climate finance; organization's effectiveness; addressing; contemporary challenges; climate change; economic inequality; human rights violations; remains; subject of debate; member states; observers
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Queen Elizabeth's Passing and King Charles's Accession */}
            <AccordionItem value="royal-transition" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Royal Transition: Queen Elizabeth's Passing and King Charles's New Era</h3>
                    <p className="text-sm text-muted-foreground">Commonwealth stability and constitutional changes</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In 2022, the passing of Queen Elizabeth II – who was greatly revered across the Commonwealth – and the accession of King Charles III marked a turning point. The Queen had been a stabilizing figure and a personal link to the World War II generation. With Charles, who does not command the same automatic respect, some realms accelerated republic plans (as discussed). Charles, to his credit, has signaled he understands that to keep the Commonwealth together, he must show humility and a listening ear.
                  </p>
                  <p className="text-justify leading-relaxed">
                    At the 2022 Commonwealth summit in Rwanda, he acknowledged the issue of slavery and colonization, stating it's up to member countries to decide on their constitutional relations and that addressing the past is imperative. This represents a significant shift from the traditional royal approach of avoiding controversial topics. Charles has also shown willingness to modernize the monarchy's relationship with Commonwealth countries, recognizing that the institution must evolve to remain relevant. However, the challenge remains: can a hereditary monarchy truly represent the democratic aspirations of modern Commonwealth nations, especially as more become republics? The answer to this question will likely determine the Commonwealth's future structure and the monarchy's role within it.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on constitutional monarchy, institutional change, or the challenges of maintaining traditional institutions in modern contexts. It provides insights into royal leadership and can support arguments about the importance of institutional adaptation or the challenges of symbolic leadership. It's also useful for analyzing the relationship between tradition and modernity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      2022; passing; Queen Elizabeth II; greatly revered; across Commonwealth; accession; King Charles III; marked; turning point; Queen; stabilizing figure; personal link; World War II generation; Charles; does not command; same automatic respect; some realms; accelerated; republic plans; discussed; Charles; credit; signaled; understands; keep Commonwealth together; must show; humility; listening ear; 2022 Commonwealth summit; Rwanda; acknowledged; issue; slavery; colonization; stating; up to member countries; decide; constitutional relations; addressing past; imperative; represents; significant shift; traditional royal approach; avoiding; controversial topics; Charles; also shown; willingness; modernize; monarchy's relationship; Commonwealth countries; recognizing; institution; must evolve; remain relevant; challenge remains; can; hereditary monarchy; truly represent; democratic aspirations; modern Commonwealth nations; especially; more become republics; answer; question; likely determine; Commonwealth's future structure; monarchy's role; within it
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Essential Vocabulary */}
            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Commonwealth Vocabulary</h3>
                    <p className="text-sm text-muted-foreground">Key terms and definitions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-3">
                  {essentialVocabulary.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-cyan-500">
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <div className="sm:w-1/3">
                            <Badge className="bg-cyan-500">{item.term}</Badge>
                          </div>
                          <div className="sm:w-2/3">
                            <p className="text-sm text-muted-foreground">{item.definition}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Essay Questions */}
            <AccordionItem value="essay-questions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Sample Essay Questions</h3>
                    <p className="text-sm text-muted-foreground">Practice topics for examinations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">1. Commonwealth Realms to Republics</h4>
                      <p className="text-sm">
                        "The transition from Commonwealth realms to republics represents the final stage of decolonization." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Historical Justice and Reparations</h4>
                      <p className="text-sm">
                        To what extent should former colonial powers provide reparations for historical injustices?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Decolonization Movements</h4>
                      <p className="text-sm">
                         "Decolonizing institutions is necessary for honest national identity." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Commonwealth Relevance</h4>
                      <p className="text-sm">
                        How relevant is the Commonwealth in the 21st century, and what reforms are needed?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Royal Apologies and Historical Responsibility</h4>
                      <p className="text-sm">
                        "Royal apologies for colonial wrongs are symbolic but insufficient." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Post-Colonial Identity</h4>
                      <p className="text-sm">
                        To what extent can nations maintain both their colonial heritage and their independent identity?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Museum Artifacts and Cultural Return</h4>
                      <p className="text-sm">
                        "Museums should return all artifacts acquired during colonial periods." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of the Commonwealth</h4>
                      <p className="text-sm">
                        How will the Commonwealth evolve as more nations become republics?
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
            <Link to="/formation/anglais/civilisation/civil-religion">
              <Button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600">
                Next: Civil Religion and National Identity
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonwealthPage; 