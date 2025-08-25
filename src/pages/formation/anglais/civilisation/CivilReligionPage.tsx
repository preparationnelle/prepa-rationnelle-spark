import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf, TrendingDown, Gavel, Church } from 'lucide-react';

const CivilReligionPage = () => {
  const keyTopics = [
    {
      title: "American Civil Religion",
      content: "Constitution reverence, flag veneration, two civil religions, multicultural vs conservative values",
      vocabulary: ["civil religion", "Constitution", "flag", "One Nation under God", "American Dream", "patriotism"]
    },
    {
      title: "British National Identity",
      content: "Multi-national state, monarchy, Church of England, royal rituals, generational divides",
      vocabulary: ["multi-national state", "monarchy", "Church of England", "royal rituals", "Union Jack", "NHS"]
    },
    {
      title: "Identity Contests and Polarization",
      content: "January 6 Capitol riot, Brexit identity crisis, culture wars, history curricula debates",
      vocabulary: ["polarization", "culture wars", "identity crisis", "history curricula", "memory politics"]
    },
    {
      title: "Future of Civil Religion",
      content: "Civic values, democracy, rule of law, diversity inclusion, generational understanding",
      vocabulary: ["civic values", "democracy", "rule of law", "diversity", "inclusion", "national unity"]
    }
  ];

  const essentialVocabulary = [
    { term: "civil religion", definition: "Set of rituals, symbols, and shared values that create a quasi-sacred sense of national identity" },
    { term: "culture wars", definition: "Conflicts over cultural values, history education, and national identity narratives" },
    { term: "memory politics", definition: "Political struggles over how historical events and figures are remembered and taught" },
    { term: "Christian nationalism", definition: "Movement seeking to fuse national identity with conservative Christian values" },
    { term: "pluralist civil religion", definition: "Civil religion that embraces secular governance and diversity of faith" },
    { term: "identity crisis", definition: "Period of uncertainty about personal or national identity and values" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
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
            <span className="text-foreground font-medium">Civil Religion and National Identity</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <Church className="h-5 w-5" />
                </div>
                <Badge className="bg-purple-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Civil Religion and National Identity</CardTitle>
              <p className="text-muted-foreground">
                Civic faith, national symbols, and identity challenges in the US and UK
              </p>
            </CardHeader>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Identity Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-purple-100">Civil religions in US (liberal vs conservative)</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">29%</div>
                  <div className="text-sm text-purple-100">Britons view monarchy as very important</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">12%</div>
                  <div className="text-sm text-purple-100">Young Britons (18-34) value monarchy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-sm text-purple-100">UK support for monarchy abolition</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="w-full space-y-4">
            
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Church className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Civil Religion Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
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

            <AccordionItem value="american-civil-religion" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">American Civil Religion: Fractured Faith and Competing Visions</h3>
                    <p className="text-sm text-muted-foreground">Constitution, flag, and two civil religions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Both the United States and United Kingdom exhibit forms of "civil religion" – a set of rituals, symbols, and shared values that create a quasi-sacred sense of national identity – and both are experiencing shifts in what that identity means. In the United States, civil religion has traditionally revolved around reverence for the Constitution, the flag, and the idea of America as a promised land of freedom. Phrases like "One Nation under God" or the veneration of presidents and war heroes reflect this civic faith. However, America's civil religion is increasingly fractured. Scholars speak of "two civil religions" now: one espoused by the multicultural, liberal segment that emphasizes America's ideals of inclusion and equality ("a nation of immigrants," the legacy of Martin Luther King Jr., etc.), and another by conservative or Christian nationalist groups that focus on traditional patriotism, military strength, and often a belief in America's divine favor.
                  </p>
                  <p className="text-justify leading-relaxed">
                    These divisions were stark on January 6, 2021, when rioters – some carrying crosses or "Jesus Saves" signs alongside American flags – stormed the Capitol to overturn an election result they falsely believed was illegitimate. In their minds, they were acting out of patriotic (even religious) duty to "Save America," while to others they were betraying the very democratic principles the flag and Constitution stand for. This clash showed how the same national symbols can be claimed for opposing causes. Patriotic rituals remain strong in the U.S. – from standing for the national anthem to massive celebrations of Independence Day – but debates simmer beneath. The act of kneeling during the anthem, pioneered by NFL player Colin Kaepernick to protest racial injustice, was seen as virtuous free expression by some and sacrilegious by others.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on civil religion, national identity, or the challenges of maintaining unity in diverse societies. It provides concrete examples of symbolic conflicts and can support arguments about the importance of shared values or the challenges of symbolic politics. It's also useful for analyzing the relationship between national symbols and political meaning.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      both; United States; United Kingdom; exhibit forms; civil religion; set; rituals; symbols; shared values; create; quasi-sacred sense; national identity; experiencing shifts; identity means; United States; civil religion; traditionally revolved; reverence; Constitution; flag; idea; America; promised land; freedom; phrases; One Nation under God; veneration; presidents; war heroes; reflect; civic faith; however; America's civil religion; increasingly fractured; scholars speak; two civil religions; one espoused; multicultural; liberal segment; emphasizes; America's ideals; inclusion; equality; nation of immigrants; legacy; Martin Luther King Jr; another; conservative; Christian nationalist groups; focus; traditional patriotism; military strength; often; belief; America's divine favor
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="british-national-identity" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">British National Identity: Multi-National State and Royal Traditions</h3>
                    <p className="text-sm text-muted-foreground">Monarchy, Church of England, and generational divides</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the United Kingdom, national identity has its own complexities. The UK is a multi-national state (English, Scottish, Welsh, Northern Irish identities all under one umbrella) and has an official state religion (the monarch is head of the Church of England) – yet it is also highly secular and increasingly diverse. Civil religion in Britain historically was centered on the monarchy, the Church, and institutions like Parliament and the military. Royal rituals – coronations, jubilees, royal weddings, state funerals – have served as focal points for national togetherness. We saw this vividly in 2022 when Queen Elizabeth II died after 70 years on the throne: an outpouring of national grief and nostalgia ensued, with an estimated quarter million people queueing for miles in London to pay respects as she lay in state, and billions watching the funeral worldwide.
                  </p>
                  <p className="text-justify leading-relaxed">
                    It was a profound civil religious moment, where even secular Britons felt a sense of collective loss and reflection on British identity and continuity. In May 2023, the coronation of King Charles III was another such occasion – steeped in ancient pageantry and Anglican liturgy, yet attempting to adapt (for instance, by involving other faith representatives in the ceremony for the first time). Still, these royal occasions also highlighted generational and societal divides. Polling around the coronation showed only 29% of Britons viewed the monarchy as "very important," the lowest level recorded. Among young adults (18–34), a mere 12% said the monarchy is very important, compared to 42% of those over 55. This suggests the quasi-religious awe once surrounding the Crown is fading, especially among youth and in an increasingly multicultural society that may not see themselves reflected in centuries-old royal traditions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on constitutional monarchy, national identity, or the challenges of maintaining traditional institutions in modern societies. It provides concrete examples of royal events and can support arguments about the importance of symbolic leadership or the challenges of generational change. It's also useful for analyzing the relationship between tradition and modernity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      United Kingdom; national identity; own complexities; UK; multi-national state; English; Scottish; Welsh; Northern Irish identities; under one umbrella; official state religion; monarch; head; Church of England; yet; also; highly secular; increasingly diverse; civil religion; Britain; historically centered; monarchy; Church; institutions; Parliament; military; royal rituals; coronations; jubilees; royal weddings; state funerals; served; focal points; national togetherness; saw; vividly; 2022; Queen Elizabeth II; died; 70 years; throne; outpouring; national grief; nostalgia; ensued; estimated quarter million people; queueing; miles; London; pay respects; lay in state; billions; watching; funeral; worldwide
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="identity-contests" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Identity Contests: Polarization and the Battle for National Symbols</h3>
                    <p className="text-sm text-muted-foreground">January 6, Brexit, and culture wars</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    British national identity is also pulled in different directions by the constituent nations. Scots have a strong separate national story (tied to notions of sovereignty and Presbyterian Kirk, etc.), and many in Scotland no longer emotionally invest in UK-wide symbols like the Westminster Parliament or even the British (as opposed to Scottish) flag. English identity has, if anything, grown more pronounced post-Brexit – some analyses find that English nationalism (St. George's flag, celebration of England's patron saint day, etc.) is filling a gap as British identity fragments. Sporting events like the England football team's matches become surrogate expressions of national pride, especially for England – during the Euros or World Cup, you'll see a sea of red-and-white St. George flags.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Meanwhile, Northern Ireland's identity splits between those who see themselves as British and those who are Irish; the fragile equilibrium set by the Good Friday Agreement is part of the UK's national tapestry now. Events like Brexit were partly driven by English nationalist sentiment (the Leave campaign often invoked the trope of Britain standing alone, sovereign – very much a Churchillian wartime nostalgia, which is a kind of civil religious memory in the UK). For Remainers, conversely, European integration had become part of their identity, so Brexit's outcome felt like an identity crisis – prompting some to wrap themselves in EU flags in protests, a novel sight in Britain. One could argue the UK is searching for a new shared narrative. "Civil religion" in Britain might need to evolve from Empire and Monarchy towards something more inclusive of modern values.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on national identity, political polarization, or the challenges of maintaining unity in multi-national states. It provides concrete examples of identity conflicts and can support arguments about the importance of inclusive narratives or the challenges of political change. It's also useful for analyzing the relationship between political decisions and identity formation.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      British national identity; also pulled; different directions; constituent nations; Scots; strong separate national story; tied; notions; sovereignty; Presbyterian Kirk; many; Scotland; no longer emotionally invest; UK-wide symbols; Westminster Parliament; even; British flag; opposed to; Scottish flag; English identity; if anything; grown more pronounced; post-Brexit; some analyses find; English nationalism; St. George's flag; celebration; England's patron saint day; filling; gap; British identity fragments; sporting events; England football team's matches; become; surrogate expressions; national pride; especially; England; Euros; World Cup; see; sea; red-and-white St. George flags
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education-memory" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Education and Memory Politics: The Battle for Historical Narratives</h3>
                    <p className="text-sm text-muted-foreground">History curricula, culture wars, and collective memory</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In both countries, education and "memory politics" play a role in shaping national identity. The "culture war" over history curricula – whether to teach Britain's colonial misdeeds or America's racial injustices versus portraying heroic national narratives – is essentially a battle over civil religion and collective memory. In the US, laws in some states restricting teaching about systemic racism or critical race theory reflect a desire to preserve a traditional, triumphalist civil religion, whereas those pushing for a more unvarnished history (like the 1619 Project's emphasis on slavery's role) seek a reformed civil religion acknowledging past sins as part of national growth. In the UK, similar debates occur over how much the school syllabus should emphasize British achievements versus the suffering caused by imperialism.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The late Queen in a way served as a living symbol of unity; with her passing, some worry if the glue will hold. King Charles has a tougher job to embody national unity, given he's less popular and ascended at a time of socio-economic strain. So far, there hasn't been a surge of republicanism in terms of majority wanting to abolish the monarchy (support for abolition holds around 25% in polls). But as noted, apathy or indifference is rising – which itself might erode the civil religious fervour over time. The challenge for both nations is finding ways to honor their historic symbols and narratives while adapting to contemporary values of diversity and inclusion.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on education policy, historical memory, or the challenges of teaching controversial history. It provides concrete examples of curriculum debates and can support arguments about the importance of honest historical education or the challenges of political influence on education. It's also useful for analyzing the relationship between education and national identity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      both countries; education; memory politics; play role; shaping; national identity; culture war; history curricula; whether; teach; Britain's colonial misdeeds; America's racial injustices; versus; portraying; heroic national narratives; essentially; battle; civil religion; collective memory; US; laws; some states; restricting; teaching; systemic racism; critical race theory; reflect; desire; preserve; traditional; triumphalist civil religion; whereas; pushing; more unvarnished history; 1619 Project's emphasis; slavery's role; seek; reformed civil religion; acknowledging; past sins; part; national growth; UK; similar debates; occur; how much; school syllabus; emphasize; British achievements; versus; suffering caused; imperialism
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="future-civil-religion" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Future of Civil Religion: Reimagining National Unity</h3>
                    <p className="text-sm text-muted-foreground">Civic values, democracy, and mutual respect</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Ultimately, national identity in 2025 is in flux. The ideals at the heart of American civil religion – freedom, equality, the "American Dream" – still inspire many, including immigrants who swear the Oath of Citizenship. But polarization has meant that even the flag can be seen as partisan (some associate it with one political faction waving oversized flags on pickup trucks, while others try to reclaim it for all Americans). In Britain, the Union Jack likewise swings between being a unifying emblem (like during Queen Elizabeth's jubilees) and a contested one (Scottish independence supporters prefer the Saltire, and some people of colour feel uneasy about the flag due to far-right groups co-opting it in the past).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Both societies are wrestling with how to honor their historic symbols and narratives while adapting to contemporary values of diversity and inclusion. The concept of civil religion might need reimagining – perhaps focusing on civic values like democracy, rule of law, and mutual respect rather than ethnic or religious heritage. If a new consensus can form around those civic ideals, national identity could be a source of unity again rather than division. Achieving that will require dialogue, generational understanding, and leadership that appeals to the "better angels" of the national character. The future of civil religion in both countries may depend on their ability to create inclusive narratives that honor the past while embracing the diversity of the present.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on the future of national identity, civic values, or the challenges of creating inclusive societies. It provides insights into future prospects and can support arguments about the importance of civic values or the challenges of maintaining national unity. It's also useful for analyzing the relationship between tradition and progress.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      ultimately; national identity; 2025; flux; ideals; heart; American civil religion; freedom; equality; American Dream; still inspire; many; including; immigrants; swear; Oath of Citizenship; polarization; meant; even; flag; seen; partisan; some associate; one political faction; waving; oversized flags; pickup trucks; others; try; reclaim; all Americans; Britain; Union Jack; likewise swings; being; unifying emblem; during; Queen Elizabeth's jubilees; contested one; Scottish independence supporters; prefer; Saltire; some people of colour; feel uneasy; flag; due to; far-right groups; co-opting; past
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Civil Religion Vocabulary</h3>
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

            <AccordionItem value="essay-questions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Civil Religion and National Unity</h4>
                      <p className="text-sm">
                        "Civil religion is essential for maintaining national unity in diverse societies." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. American Civil Religion Division</h4>
                      <p className="text-sm">
                        To what extent has American civil religion become polarized between liberal and conservative visions?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. British Monarchy and National Identity</h4>
                      <p className="text-sm">
                         "The British monarchy remains central to national identity despite declining support." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. National Symbols and Political Meaning</h4>
                      <p className="text-sm">
                        How do national symbols acquire political meaning, and what happens when they become contested?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Education and Memory Politics</h4>
                      <p className="text-sm">
                        "History education is a battleground for national identity." Discuss this statement with examples.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Multi-National State Challenges</h4>
                      <p className="text-sm">
                        To what extent can a multi-national state maintain a unified national identity?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Future of National Identity</h4>
                      <p className="text-sm">
                        "National identity must evolve to embrace diversity and inclusion." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Civic Values vs. Cultural Heritage</h4>
                      <p className="text-sm">
                        How can nations balance honoring their cultural heritage with embracing modern civic values?
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
            <Link to="/formation/anglais/civilisation/immigration">
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
                Next: Immigration and Border Control
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilReligionPage; 