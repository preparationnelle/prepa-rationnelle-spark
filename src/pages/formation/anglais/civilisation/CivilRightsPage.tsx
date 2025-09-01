import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, Heart, Flag, Leaf } from 'lucide-react';

const CivilRightsPage = () => {
  const keyTopics = [
    {
      title: "Racial Justice and BLM",
      content: "Police brutality, systemic racism, Confederate monuments, colonial past, police reform",
      vocabulary: ["Black Lives Matter", "police brutality", "systemic racism", "Confederate monuments", "colonial past", "police reform"]
    },
    {
      title: "Women's Rights and #MeToo",
      content: "Sexual misconduct, workplace policies, Roe v. Wade, abortion rights, Respect for Marriage Act",
      vocabulary: ["#MeToo", "sexual misconduct", "zero-tolerance policies", "Roe v. Wade", "abortion rights", "Respect for Marriage Act"]
    },
    {
      title: "LGBTQ+ Rights and Backlash",
      content: "Gender-affirming healthcare, transgender rights, Don't Say Gay law, culture wars, acceptance vs backlash",
      vocabulary: ["LGBTQ+ rights", "gender-affirming healthcare", "transgender rights", "Don't Say Gay", "culture wars", "acceptance"]
    },
    {
      title: "Climate Activism and Civil Disobedience",
      content: "Extinction Rebellion, Just Stop Oil, climate strikers, disruptive tactics, environmental awareness",
      vocabulary: ["climate activism", "civil disobedience", "Extinction Rebellion", "Just Stop Oil", "disruptive tactics", "environmental awareness"]
    }
  ];

  const essentialVocabulary = [
    { term: "civil rights", definition: "Fundamental rights and freedoms that belong to every person, protected by law" },
    { term: "social movements", definition: "Organized efforts by large groups to promote or resist social change" },
    { term: "systemic racism", definition: "Institutional patterns of discrimination embedded in social structures and policies" },
    { term: "civil disobedience", definition: "Peaceful refusal to obey certain laws as a form of political protest" },
    { term: "culture wars", definition: "Conflicts between groups with different cultural values and beliefs" },
    { term: "backlash", definition: "Strong negative reaction against social or political changes" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation <span className="text-orange-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Civil Rights and Social Movements</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <Flag className="h-5 w-5" />
                </div>
                <Badge className="bg-purple-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Civil Rights and Social Movements</CardTitle>
              <p className="text-muted-foreground">
                Activism, social change, and the fight for equality in contemporary society
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Civil Rights Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">15-26M</div>
                  <div className="text-sm text-purple-100">Americans in BLM protests 2020</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-purple-100">Roe v. Wade overturned</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">70%</div>
                  <div className="text-sm text-purple-100">US support same-sex marriage</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2023</div>
                  <div className="text-sm text-purple-100">Gender recognition law debates UK</div>
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
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Civil Rights Topics</h3>
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

            {/* Black Lives Matter Movement */}
            <AccordionItem value="blm-movement" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black text-white">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Black Lives Matter: The Largest Protest Wave in US History</h3>
                    <p className="text-sm text-muted-foreground">Racial justice and police reform</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The past few years have seen a surge of activism and social movements fighting for civil rights – and in some cases, pushing back against them. In mid-2020, the Black Lives Matter (BLM) movement erupted into what was likely the largest protest wave in U.S. history. An estimated 15 to 26 million Americans participated in racial justice demonstrations after the murder of George Floyd, with rallies spanning all 50 states and even abroad. This unprecedented mobilization forced a national reckoning on police brutality and systemic racism. It led to policy responses in some cities (such as bans on chokeholds, or removing Confederate monuments) and greater corporate and institutional focus on diversity.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In the UK too, BLM protests drew tens of thousands; in one iconic incident, demonstrators in Bristol toppled the statue of slave trader Edward Colston and threw it into the harbour. (Those protesters were later acquitted of vandalism, as jurors seemed to agree the statue's presence was offensive and outdated.) The Colston episode sparked a national conversation about how Britain commemorates its colonial past. We've since seen universities and museums re-evaluate symbols of imperialism, and some artefacts – like the Benin Bronzes – returned to their places of origin. Though the initial BLM momentum has slowed, it has left a lasting imprint: terms like "systemic racism" entered mainstream discourse, and communities of color continue to demand police reform and equal treatment.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on social movements, racial justice, or the impact of mass protests. It provides concrete statistics on participation and can support arguments about the effectiveness of grassroots activism or the need for institutional reform. It's also useful for analyzing the relationship between social movements and policy change.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      surge of activism; social movements; fighting for civil rights; pushing back; Black Lives Matter movement; erupted; largest protest wave; U.S. history; estimated; participated; racial justice demonstrations; murder of George Floyd; rallies spanning; all 50 states; abroad; unprecedented mobilization; forced; national reckoning; police brutality; systemic racism; led to; policy responses; cities; bans on chokeholds; removing Confederate monuments; greater corporate focus; institutional focus; diversity; UK too; drew tens of thousands; iconic incident; demonstrators; Bristol; toppled; statue; slave trader; Edward Colston; threw; harbour; protesters; later acquitted; vandalism; jurors; agreed; statue's presence; offensive; outdated; Colston episode; sparked; national conversation; Britain commemorates; colonial past; universities; museums; re-evaluate; symbols of imperialism; artefacts; Benin Bronzes; returned; places of origin; initial BLM momentum; slowed; lasting imprint; terms; systemic racism; entered; mainstream discourse; communities of color; continue to demand; police reform; equal treatment
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* #MeToo and Women's Rights */}
            <AccordionItem value="metoo-womens-rights" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">#MeToo Movement and Women's Rights: Advances and Setbacks</h3>
                    <p className="text-sm text-muted-foreground">Sexual misconduct accountability and reproductive rights</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Other social movements have also transformed the landscape. The #MeToo movement, which surged a few years earlier, continues to influence culture by holding powerful men accountable for sexual misconduct and pushing workplaces to enforce zero-tolerance policies. High-profile convictions (Harvey Weinstein, R. Kelly, etc.) and a general increase in awareness around consent and harassment can be traced to #MeToo's impact. Women's rights more broadly saw both advancements and setbacks. In a landmark regression, the U.S. Supreme Court in 2022 overturned Roe v. Wade, ending the federal constitutional right to abortion after nearly 50 years.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This galvanized massive protests nationwide – crowds poured into the streets of cities from New York to Los Angeles after the ruling, and many states immediately enacted abortion bans. President Biden and others decried the decision as a huge blow to women's freedom. In the year since, the fight has shifted to the state level: some states have protected abortion access or even enshrined it in law, while others have banned almost all abortions. The Roe reversal also prompted a rare bipartisan action in Congress: fearing that other rights (like same-sex marriage) might be in jeopardy, legislators passed the Respect for Marriage Act (RFMA) in late 2022. This law requires federal and interstate recognition of same-sex and interracial marriages, essentially codifying protections that had relied on Supreme Court precedents. The RFMA's passage – signed by President Biden – was a notable victory for LGBTQ+ rights at a time when other civil rights felt under threat.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on women's rights, reproductive freedom, or the impact of social movements on policy. It provides concrete examples of legal changes and can support arguments about the importance of protecting civil rights or the role of the judiciary in social issues. It's also useful for analyzing the relationship between social movements and legislative responses.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      social movements; transformed; landscape; #MeToo movement; surged; earlier; continues to influence; culture; holding powerful men accountable; sexual misconduct; pushing workplaces; enforce; zero-tolerance policies; high-profile convictions; Harvey Weinstein; R. Kelly; general increase; awareness; consent; harassment; traced to; #MeToo's impact; women's rights; broadly; saw; advancements; setbacks; landmark regression; U.S. Supreme Court; overturned; Roe v. Wade; ending; federal constitutional right; abortion; nearly 50 years; galvanized; massive protests; nationwide; crowds poured; streets; cities; New York; Los Angeles; ruling; states immediately enacted; abortion bans; President Biden; decried; decision; huge blow; women's freedom; year since; fight has shifted; state level; some states; protected abortion access; enshrined; law; others; banned; almost all abortions; Roe reversal; prompted; rare bipartisan action; Congress; fearing; other rights; same-sex marriage; jeopardy; legislators passed; Respect for Marriage Act; RFMA; late 2022; law requires; federal recognition; interstate recognition; same-sex marriages; interracial marriages; essentially codifying; protections; relied on; Supreme Court precedents; RFMA's passage; signed; President Biden; notable victory; LGBTQ+ rights; time; other civil rights; felt under threat
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* LGBTQ+ Rights and Backlash */}
            <AccordionItem value="lgbtq-rights-backlash" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rainbow-500 text-white">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">LGBTQ+ Rights: Acceptance vs. Backlash in the Culture Wars</h3>
                    <p className="text-sm text-muted-foreground">Transgender rights and gender identity debates</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Indeed, LGBTQ+ rights have themselves become a flashpoint. On one hand, acceptance of LGBTQ people is higher than ever in much of the Western world, and policies like RFMA show institutional support. Pride marches are massive annual events in many cities. Yet there has also been a pronounced backlash, particularly targeting transgender individuals. In the US, numerous states (especially conservative-led ones) have passed laws restricting transgender youth from accessing gender-affirming healthcare or participating in sports, and even laws limiting discussion of gender and sexuality in schools (like Florida's so-called "Don't Say Gay" law).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Trans rights activists and major medical organizations oppose these measures as harmful and discriminatory, and protests have occurred in state capitols. This "culture war" over trans rights mirrors a larger pattern: progressive social movements push for inclusion and the expansion of rights, while an opposing movement mobilizes fears and seeks to claw back some of those gains. Similar dynamics are visible in the UK – for example, heated debates over reforming gender recognition laws led to political standoffs between the Scottish and UK governments in 2023. The tension between advancing LGBTQ+ rights and resisting conservative pushback has created a polarized environment where both sides see their fundamental values at stake.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on LGBTQ+ rights, culture wars, or the tension between progress and resistance. It provides concrete examples of legal restrictions and can support arguments about the importance of protecting minority rights or the challenges of advancing social progress. It's also useful for analyzing the dynamics of social change and resistance.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      LGBTQ+ rights; become; flashpoint; acceptance; higher than ever; Western world; policies; RFMA; show; institutional support; Pride marches; massive annual events; cities; pronounced backlash; particularly targeting; transgender individuals; US; numerous states; conservative-led; passed laws; restricting; transgender youth; accessing; gender-affirming healthcare; participating; sports; laws limiting; discussion; gender; sexuality; schools; Florida; so-called; Don't Say Gay law; Trans rights activists; major medical organizations; oppose; measures; harmful; discriminatory; protests; occurred; state capitols; culture war; trans rights; mirrors; larger pattern; progressive social movements; push for; inclusion; expansion of rights; opposing movement; mobilizes fears; seeks to; claw back; gains; similar dynamics; visible; UK; heated debates; reforming; gender recognition laws; led to; political standoffs; Scottish; UK governments; 2023; tension; advancing LGBTQ+ rights; resisting; conservative pushback; created; polarized environment; both sides; fundamental values; at stake
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Climate Activism and Civil Disobedience */}
            <AccordionItem value="climate-activism" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Climate Activism: Civil Disobedience for Environmental Action</h3>
                    <p className="text-sm text-muted-foreground">Extinction Rebellion and disruptive protest tactics</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Climate activism is another key social movement of our era. Groups like Extinction Rebellion and Just Stop Oil in the UK, or the youth-led Sunrise Movement and climate strikers internationally, have used civil disobedience to demand urgent action on climate change. Their disruptive tactics (blocking roads, interrupting cultural events) have been polarizing – drawing attention to the climate crisis, but also prompting stricter policing laws. In the UK, as mentioned, new protest laws were introduced partly in response to climate protesters' tactics, raising concerns about curbing civil liberties.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Still, climate activists have succeeded in keeping environmental issues in the public eye, especially as real-world extreme weather (heatwaves, wildfires, floods) validates their alarm. The urgency of their message has been reinforced by scientific consensus and increasingly visible climate impacts. While some criticize their methods as too disruptive, others argue that the scale of the climate crisis justifies more aggressive forms of protest. The effectiveness of climate activism lies not just in immediate policy changes, but in shifting public consciousness and making environmental issues impossible to ignore. This has created a complex dynamic where environmental concerns compete with economic interests and public order considerations in policy debates.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on climate activism, civil disobedience, or the effectiveness of protest tactics. It provides concrete examples of activist groups and can support arguments about the importance of environmental awareness or the balance between protest rights and public order. It's also useful for analyzing the relationship between activism and policy responses.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      climate activism; key social movement; era; groups; Extinction Rebellion; Just Stop Oil; UK; youth-led; Sunrise Movement; climate strikers; internationally; used; civil disobedience; demand; urgent action; climate change; disruptive tactics; blocking roads; interrupting; cultural events; polarizing; drawing attention; climate crisis; prompting; stricter policing laws; new protest laws; introduced; partly in response; climate protesters' tactics; raising concerns; curbing civil liberties; climate activists; succeeded; keeping; environmental issues; public eye; especially; real-world extreme weather; heatwaves; wildfires; floods; validates; alarm; urgency; message; reinforced; scientific consensus; increasingly visible; climate impacts; criticize; methods; too disruptive; argue; scale; climate crisis; justifies; aggressive forms; protest; effectiveness; climate activism; lies; immediate policy changes; shifting; public consciousness; making; environmental issues; impossible to ignore; created; complex dynamic; environmental concerns; compete; economic interests; public order considerations; policy debates
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Civil Society and Counter-Movements */}
            <AccordionItem value="civil-society-counter-movements" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Civil Society Reinvigoration and Counter-Movements</h3>
                    <p className="text-sm text-muted-foreground">Progressive vs. conservative social currents</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    All these movements – for racial justice, gender equality, LGBTQ+ rights, climate action – reflect a reinvigoration of civil society. They often encounter counter-movements (nationalist, nativist or religiously conservative currents) that portray themselves as defending traditional values. The result is a highly charged atmosphere where competing visions of society clash. These counter-movements often frame progressive social changes as threats to cultural identity, religious values, or national cohesion, creating a polarized environment where compromise becomes difficult.
                  </p>
                  <p className="text-justify leading-relaxed">
                    But it's worth noting that public opinion has in many ways shifted towards inclusion: for example, support for same-sex marriage in the US is at an all-time high (~70%), and a majority of Americans also said they support the BLM goals even if they might disagree on tactics. Likewise in Britain, attitudes on race and empire are slowly changing – e.g. more people now acknowledge the negative aspects of colonialism and support teaching that history. Social movements have managed to broaden the conversation, even if the policy outcomes are mixed. The coming years will show whether these civil rights advances can be sustained and expanded, or whether pushback (legal and political) will stall their progress. The tension between advancing rights and maintaining social cohesion remains a central challenge for democratic societies.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on civil society, social change, or the dynamics of progressive and conservative movements. It provides concrete data on public opinion and can support arguments about the direction of social progress or the challenges of maintaining social cohesion. It's also useful for analyzing the long-term impact of social movements.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      all these movements; racial justice; gender equality; LGBTQ+ rights; climate action; reflect; reinvigoration; civil society; encounter; counter-movements; nationalist; nativist; religiously conservative currents; portray themselves; defending; traditional values; result; highly charged atmosphere; competing visions; society; clash; counter-movements; frame; progressive social changes; threats; cultural identity; religious values; national cohesion; creating; polarized environment; compromise; becomes difficult; worth noting; public opinion; shifted; inclusion; support; same-sex marriage; all-time high; majority of Americans; support; BLM goals; disagree; tactics; likewise; Britain; attitudes; race; empire; slowly changing; acknowledge; negative aspects; colonialism; support teaching; history; social movements; managed; broaden; conversation; policy outcomes; mixed; coming years; show; civil rights advances; sustained; expanded; pushback; legal; political; stall; progress; tension; advancing rights; maintaining; social cohesion; central challenge; democratic societies
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
                    <h3 className="text-lg font-semibold">Essential Civil Rights Vocabulary</h3>
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
                      <h4 className="font-semibold mb-2">1. Social Movements and Change</h4>
                      <p className="text-sm">
                        "Social movements are more effective at raising awareness than achieving lasting change." Discuss this statement with reference to recent examples.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Civil Rights and Backlash</h4>
                      <p className="text-sm">
                        To what extent do advances in civil rights inevitably provoke conservative backlash?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Protest Tactics and Effectiveness</h4>
                      <p className="text-sm">
                         "Disruptive protest tactics are necessary to achieve social change." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Women's Rights and Reproductive Freedom</h4>
                      <p className="text-sm">
                        How has the overturning of Roe v. Wade affected the landscape of women's rights in the US?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. LGBTQ+ Rights and Culture Wars</h4>
                      <p className="text-sm">
                        "The fight for LGBTQ+ rights has become a central battleground in contemporary culture wars." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Climate Activism and Civil Disobedience</h4>
                      <p className="text-sm">
                        To what extent is civil disobedience justified in the fight against climate change?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Social Progress and Social Cohesion</h4>
                      <p className="text-sm">
                        "Rapid social change threatens social cohesion." Assess this claim with reference to contemporary examples.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of Civil Rights</h4>
                      <p className="text-sm">
                        How can societies balance advancing civil rights with maintaining social stability and unity?
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
            <Link to="/formation/anglais/civilisation/brexit">
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
                Next: Brexit and its Aftermath
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilRightsPage; 