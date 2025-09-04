import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Crown, Flag, Scale, Users, Building2, ArrowLeft, ArrowRight, Vote, Shield } from 'lucide-react';

const PoliticsPage = () => {
  const keyTopics = [
    {
      title: "Democratic Systems",
      content: "Constitutional frameworks, separation of powers, checks and balances, electoral systems",
      vocabulary: ["democracy", "constitution", "separation of powers", "checks and balances"]
    },
    {
      title: "Political Parties",
      content: "Two-party system in US, multi-party system in UK, party platforms, political ideologies",
      vocabulary: ["political parties", "platforms", "ideologies", "partisan politics"]
    },
    {
      title: "Elections and Voting",
      content: "Electoral processes, voting rights, campaign finance, electoral integrity",
      vocabulary: ["elections", "voting rights", "campaign finance", "electoral integrity"]
    },
    {
      title: "Government Institutions",
      content: "Executive, legislative, judicial branches, federal vs state powers, parliamentary system",
      vocabulary: ["executive", "legislative", "judicial", "federalism", "parliamentary"]
    }
  ];

  const essentialVocabulary = [
    { term: "democracy", definition: "A system of government by the whole population through elected representatives" },
    { term: "constitution", definition: "A body of fundamental principles according to which a state is governed" },
    { term: "separation of powers", definition: "Division of government responsibilities into distinct branches" },
    { term: "checks and balances", definition: "System ensuring no branch of government becomes too powerful" },
    { term: "federalism", definition: "System of government with power divided between central and regional authorities" },
    { term: "parliamentary system", definition: "System where the executive derives legitimacy from the legislature" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-orange-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-black/70">
            <Link to="/" className="flex items-center gap-1 hover:text-black transition-colors">
              <Home className="h-3 w-3 text-orange-600" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
            <Link to="/formation/anglais" className="hover:text-black transition-colors">
              Formation <span className="text-orange-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
            <span className="font-medium">Politics (US & UK)</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header minimaliste + stats sobres */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Politics (United States & United Kingdom)</h1>
            <p className="text-sm text-black/70 mt-1">Minimal design • Orange accents only</p>
          </div>
          <Card className="mb-8 border border-orange-200">
            <CardHeader className="py-3">
              <CardTitle className="text-xl">Key Political Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">6-3</div>
                  <div className="text-sm text-black/70">US Supreme Court majority</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">11%</div>
                  <div className="text-sm text-black/70">UK inflation peak 2022</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">70-100K</div>
                  <div className="text-sm text-black/70">UK HGV driver shortage</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">4%</div>
                  <div className="text-sm text-black/70">UK GDP hit from Brexit</div>
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
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Political Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-600">
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

            {/* Democratic Backsliding */}
            <AccordionItem value="democratic-backsliding" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Democratic Backsliding and the January 6 Legacy</h3>
                    <p className="text-sm text-muted-foreground">Threats to democratic norms and institutional fragility</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The United States has grappled with unprecedented threats to its democratic norms in recent years. After losing the 2020 election, former President Donald Trump refused to concede, falsely claiming the vote was "stolen" through massive fraud. This culminated in the January 6, 2021 storming of the U.S. Capitol, where a mob of his supporters—incited by Trump's rhetoric—attempted to disrupt the certification of results. The insurrection shocked the world: scenes of rioters in the Capitol's halls, five deaths, and dozens of injured officers underscored the fragility of American institutions.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In the aftermath, over 1,000 participants have been charged and congressional investigations exposed a concerted effort to overturn the election. Yet political rifts remain deep. Many Republican voters still believe the "Big Lie" of a stolen election, and some involved in the events have been hailed as martyrs on the far right. This episode has become a litmus test for U.S. democracy—prompting reforms to electoral count laws and greater scrutiny of extremist movements. It also serves as a warning: even long-established democracies are not immune to backsliding, and the peaceful transfer of power cannot be taken for granted.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is apt for essays on threats to democracy, political polarization, or the resilience of institutions. It provides a concrete example (Capitol riot) with consequences, illustrating how misinformation and populism can undermine democratic processes. Use it to argue about the importance of rule of law, the impact of leadership on democratic norms, or to compare with historical incidents of democratic crisis.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      concede; fraud; culminated; incited; insurrection; fragility; aftermath; concerted effort; rifts; Big Lie; litmus test; peaceful transfer of power
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Supreme Court Shift */}
            <AccordionItem value="supreme-court" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Supreme Court Shift and the Future of U.S. Law</h3>
                    <p className="text-sm text-muted-foreground">Conservative transformation and landmark decisions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    One of the most enduring impacts of the Trump presidency has been the transformation of the U.S. Supreme Court. With three appointments (Neil Gorsuch, Brett Kavanaugh, and Amy Coney Barrett) between 2017 and 2020, conservatives secured a 6–3 majority on the bench—the most right-leaning Court in nearly a century. This reshaped judiciary has already delivered landmark decisions reflecting that shift. In 2022, it overturned Roe v. Wade, ending the federal constitutional right to abortion after nearly 50 years. It also expanded gun rights by striking down century-old firearms restrictions and limited the government's power to address climate change via regulatory agencies.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Supporters of these rulings applaud a return to "originalist" interpretations of the Constitution and states' rights. Critics argue the Court is out of step with public opinion and is eroding fundamental rights. The appointment process itself has grown more politicized, as seen in the rushed confirmation of Justice Barrett days before the 2020 election and bitter Senate battles. Looking ahead, this conservative super-majority is poised to influence American law for decades on issues ranging from voting rights and affirmative action to executive power. The Supreme Court's rightward turn exemplifies how electoral outcomes can swiftly upend legal precedents and why judicial nominations have become a central focus of U.S. politics.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Use this paragraph in discussions of the U.S. political system, checks and balances, or social policy. It links political events (Trump's presidency) to long-term legal consequences (Court decisions), which is useful in arguments about how leaders can have lasting influence. It's particularly relevant to topics like abortion rights, the role of the judiciary, or the politicization of institutions.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      enduring; bench; right-leaning; landmark decisions; overturned; federal constitutional right; originalist; out of step; eroding; politicized; confirmation; precedents; nominations
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Polarization and Policy */}
            <AccordionItem value="polarization" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Polarization and the Pendulum of Policy</h3>
                    <p className="text-sm text-muted-foreground">Policy whiplash and partisan governance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The past decade in U.S. politics has been marked by seesaw shifts in policy as power alternates between parties, highlighting a growing fragility in consensus-building. Barack Obama's administration expanded healthcare with the Affordable Care Act, advanced environmental regulations, and protected young undocumented immigrants (DACA). However, his successor Donald Trump worked to undo many of these measures: attempting to repeal Obamacare, dismantling climate policies (withdrawing from the Paris Agreement, nixing the Clean Power Plan), and ending DACA protections. Then, with Joe Biden's victory in 2020, the pendulum swung back.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Biden rejoined the Paris Agreement on day one, passed laws investing in green energy and infrastructure, and sought to restore Obama-era labor and civil rights policies. Yet a potential return of Trump or a similar figure in 2025 raises the prospect of another reversal—overturning Biden's initiatives and reinstating hardline stances on immigration, trade, and more. This whiplash governance, where each presidency cancels out the last, reveals a deeper problem: an absence of durable bipartisan agreement on major issues. It underscores that many U.S. policies today rest on precarious executive actions rather than settled law, making them vulnerable to the outcome of each election.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph works well in essays about political polarization, governance, or the stability of policy. It provides specific examples of policy whiplash (climate, healthcare, immigration) to argue that U.S. politics is deeply divided. This can support a point about the challenges of long-term planning in a polarized democracy or the importance of institutional safeguards that outlast individual administrations.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      seesaw shifts; consensus-building; repeal; dismantling; withdrew; nixing; pendulum swung; hardline stances; whiplash governance; bipartisan; precarious; settled law
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Voting Rights */}
            <AccordionItem value="voting-rights" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Vote className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Voting Rights and Electoral Integrity</h3>
                    <p className="text-sm text-muted-foreground">Ballot access, security, and democratic representation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    American elections have come under the microscope as debates rage over how to balance ballot access with security. In recent years, numerous Republican-led states have passed laws tightening voting rules—such as stricter ID requirements, reduced early voting windows, and limitations on mail-in ballots—arguing these measures prevent fraud and boost public trust. Democrats and civil rights groups, however, decry these moves as "Jim Crow 2.0," designed to suppress turnout among minorities and young voters who tend to vote Democrat. For instance, Georgia's 2021 voting law cut back on absentee voting and even made it illegal to offer food or water to voters waiting in long lines, prompting national controversy.
                  </p>
                  <p className="text-justify leading-relaxed">
                    At the same time, fights over redistricting (redrawing electoral maps) have intensified. The Supreme Court in 2019 declined to set limits on partisan gerrymandering, effectively permitting state legislatures to draw districts favoring the party in power. Some progress emerged in 2022 as several states implemented independent redistricting commissions, leading to fairer maps and more competitive races. The stakes are enormous: these structural rules can tilt election outcomes and policy for years. The ongoing tug-of-war in the U.S. over voting rights and electoral rules reflects a democracy grappling with questions of fairness, representation, and the legacy of past disenfranchisement.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Deploy this paragraph for topics concerning democratic systems, civil rights, or comparisons between countries' electoral practices. It provides concrete legislative examples and the historical analogy to Jim Crow, which is powerful for arguing how current events echo past injustices. It can support points about how democracies must constantly work to ensure free and fair elections, or how partisan interests can conflict with democratic principles.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      ballot access; security; ID requirements; mail-in ballots; suppress turnout; Jim Crow 2.0; absentee voting; redistricting; partisan gerrymandering; independent commissions; competitive races; disenfranchisement
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Inclusion and Representation */}
            <AccordionItem value="inclusion" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Inclusion and Representation in the Biden Era</h3>
                    <p className="text-sm text-muted-foreground">Diversity in government and symbolic representation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The Biden administration has made a visibly deliberate effort to form a government that "looks like America" in terms of diversity. This represents a sharp turn from previous eras and is often cited as a restoration of inclusive values after the divisive rhetoric of Trump. Vice President Kamala Harris shattered multiple glass ceilings in 2021 as the first woman, first Black person, and first South Asian American to hold the office. Biden's cabinet appointments also set milestones: the first Native American cabinet secretary (Deb Haaland at Interior), the first openly gay cabinet member confirmed by the Senate (Pete Buttigieg at Transportation), and the first openly transgender federal official confirmed (Dr. Rachel Levine as Assistant Secretary of Health).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Such representation is more than symbolic. Supporters argue it brings a wider range of perspectives to policymaking and signals to minority communities that they have a stake and voice at the highest levels. For example, the presence of Black leaders in justice and defense roles or LGBTQ officials in public health can influence priorities on civil rights enforcement or healthcare for marginalized groups. While critics claim identity should not trump merit, the Biden team contends that expanding the face of leadership enhances legitimacy and trust in government. This emphasis on inclusion suggests that representation itself is now a key policy goal, underlining a broader societal shift toward valuing diversity in public life.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is useful when writing about social progress, government policy on diversity, or contrasting political philosophies. It provides factual examples of representation that can bolster arguments about why diversity matters (or, if taking the opposite stance, can be critiqued as identity politics). It fits well in discussions about meritocracy vs representation, or the impact of role models in leadership.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      deliberate effort; looks like America; shattered glass ceilings; milestones; openly transgender; perspectives; stake; voice; symbolic; policymaking; marginalized; legitimacy; identity politics
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK Politics Section Header */}
            <AccordionItem value="uk-politics-header" className="border rounded-lg bg-gradient-to-r from-red-50 to-blue-50">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-blue-800">United Kingdom Politics</h3>
                    <p className="text-sm text-blue-700">Contemporary political developments and challenges in the UK</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-center py-4">
                  <p className="text-muted-foreground">
                    Explore the sections below for detailed analysis of UK political issues including Brexit fallout, immigration policy, cost-of-living crisis, Labour Party resurgence, and devolution challenges.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brexit Fallout */}
            <AccordionItem value="brexit-fallout" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Flag className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Brexit Fallout: Labor Shortages and Economic Strains</h3>
                    <p className="text-sm text-muted-foreground">Economic consequences and labor market challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    More than three years after Britain's withdrawal from the EU, Brexit's economic aftershocks are still being felt on the ground. One acute issue has been labor shortages in sectors that previously relied on EU workers—from agriculture to trucking to healthcare. Stricter immigration rules and an exodus of EU nationals created gaps that proved hard to fill domestically. At one point, the UK faced an estimated shortfall of 70,000–100,000 HGV (heavy goods vehicle) drivers, contributing to supply chain disruptions and empty shelves in supermarkets. In late 2021, petrol stations ran dry in parts of the country partly due to a lack of tanker drivers.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Iconic British retailer Marks & Spencer had to close all 11 of its French stores, blaming the "near impossible" post-Brexit trade rules that hampered fresh food deliveries. Meanwhile, British fishermen—once held up as Brexit's big winners—faced new export red tape that hurt sales to Europe. By 2025, some adjustments have been made (for instance, new visa schemes for seasonal farm workers and lorry drivers), but many businesses report ongoing headaches in moving goods and hiring staff. The UK's GDP growth also lagged behind G7 peers, with the Office for Budget Responsibility calculating a 4% long-term hit due to Brexit. All of this underscores how redefining a nation's trading relationships can have complex, lasting consequences—benefiting some sectors while straining others and testing the country's vaunted economic resilience.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph to provide a nuanced view of Brexit's impact beyond the political slogans. It helps ground an argument about economic consequences, labor market issues, or the challenges of de-globalization. The specific examples (drivers, M&S in France, fishing, GDP impact) add credibility to points about unintended outcomes of policy choices or the complexity of reversing integration.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      aftershocks; labor shortages; exodus; shortfall; HGV drivers; supply chain; disruptions; hampered; red tape; visa schemes; GDP growth; resilience
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK-Rwanda Asylum Plan */}
            <AccordionItem value="uk-rwanda-asylum" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">The UK–Rwanda Asylum Plan: Controversy in Immigration Policy</h3>
                    <p className="text-sm text-muted-foreground">Offshore asylum processing and legal challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The British government's hardline approach to curbing irregular immigration reached a flashpoint with its plan to offshore asylum processing to Rwanda. Originally signed in 2022 as a response to record small-boat Channel crossings, the scheme proposes that asylum seekers arriving illegally in Britain be flown 4,000 miles away to East Africa for their claims to be assessed. Ministers argue this bold step is necessary to "break the business model" of human smugglers and deter dangerous boat journeys. However, the policy has been mired in legal challenges and moral outrage.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The UK Supreme Court ruled in late 2023 that Rwanda could not be deemed a sufficiently safe third country, calling the plan unlawful. In defiance, Rishi Sunak's government pushed emergency legislation – the 2024 "Safety of Rwanda" Act – explicitly declaring Rwanda a safe destination, though critics note this doesn't change conditions on the ground. Human rights organizations have lambasted the plan for potentially violating international refugee conventions, especially given Rwanda's patchy record on human rights (for instance, concerns over treatment of LGBTQ+ individuals). By 2025, not a single migrant flight has taken off, yet the issue remains politically potent. The Rwanda scheme exemplifies the lengths to which a country might go to assert border control in a polarized climate, and it raises fundamental questions about responsibility-sharing and the ethics of asylum in the modern world.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is useful for debates on immigration policy, ethics in government policy, or international law. It gives a concrete case study of an unusual policy, including both the government's justification and the legal/moral pushback. It can support arguments about how democracies handle migration crises, or the tension between national sovereignty and human rights.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      hardline; offshore asylum processing; small-boat crossings; business model (of smugglers); deter; mired; outrage; deemed; lawful/unlawful; emergency legislation; patchy record; responsibility-sharing; asylum
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cost-of-Living Crisis */}
            <AccordionItem value="cost-of-living" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Cost-of-Living Crisis and Industrial Unrest</h3>
                    <p className="text-sm text-muted-foreground">Inflation, strikes, and social unrest</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    By the mid-2020s, the UK was grappling with a severe cost-of-living crisis that sparked the most widespread industrial unrest the country had seen in decades. Inflation surged to 40-year highs (peaking above 11% in October 2022) amid soaring energy bills and food prices, but wages failed to keep up. As households struggled to afford basic necessities, frustration spilled into the workplace. In 2023, Britain witnessed strikes across sectors: railway workers, school teachers, university lecturers, postal employees, and even nurses and junior doctors all walked off the job demanding pay rises that at least match inflation.
                  </p>
                  <p className="text-justify leading-relaxed">
                    It was a throwback to the 1970s-era "winter of discontent," except this time nurses and ambulance staff—groups who rarely strike—joined the picket lines. The National Health Service strikes were especially poignant, with junior doctors pointing out that their real-terms pay had fallen around 25% since 2010, contributing to burnout and an exodus of staff. The government, facing tight public finances, argued that excessive raises would further fuel inflation, and it initially held a hard line. Over time, some deals were reached (for example, rail workers secured improved offers after months of disruption), but many disputes dragged on. The turmoil has tested public sympathy: polls showed considerable support for NHS workers' cause, yet patience wore thin during prolonged train and postal shutdowns. Overall, the cost-of-living squeeze has not only hurt living standards but also driven a reawakening of union activism in the UK, forcing uncomfortable choices upon a government balancing economic stability with social cohesion.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can be used in essays about economic policy, social unrest, or contemporary British society. It provides concrete data on inflation and real pay, and links those to tangible events (strikes), which is useful for arguments about government responsibility or the social contract. It could also support a point about parallels between past and present (alluding to the 1970s), or about how economic stress translates into political pressure.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      cost-of-living crisis; industrial unrest; soaring; basic necessities; walked off the job; pay rises; winter of discontent; picket lines; real-terms pay; burnout; exodus; tight public finances; hard line; disruption; living standards; social cohesion
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Labour Party Resurgence */}
            <AccordionItem value="labour-resurgence" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">The Resurgence of the Labour Party</h3>
                    <p className="text-sm text-muted-foreground">Political revival and changing electoral dynamics</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    After over a decade in opposition, Britain's Labour Party has experienced a notable revival heading toward the next general election. Under the steady leadership of Sir Keir Starmer, Labour has sought to rebuild public trust by moving toward the political center and purging the party of the antisemitism and infighting that marred it during Jeremy Corbyn's left-wing tenure. By 2023, opinion polls consistently showed Labour leading the governing Conservatives by double digits, fueled by voter discontent over economic woes and Conservative scandals. In local elections that year, Labour made significant gains, even in areas of northern England that had turned Tory during the 2019 "Brexit" realignment.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Key policy pledges—such as green investment to create jobs, strengthening the National Health Service, and raising tax on the very wealthy—have been calibrated to appear both progressive and fiscally responsible. Meanwhile, Prime Minister Rishi Sunak's government has been struggling with internal division and the baggage of 13 years in power, including Boris Johnson's tumultuous legacy and Liz Truss's short-lived economic experiment that rattled markets. Though nothing is guaranteed, Labour's recent momentum suggests Britain may be on the cusp of a political changing of the guard. Starmer frames his potential government as one of "competence and compassion," implicitly contrasting it with what he calls Conservative mismanagement—a message that seems to be resonating as the country looks for fresh leadership to navigate post-Brexit challenges and a strained economy.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can support discussions about political change, leadership, or party strategy. It's useful for illustrating how opposition parties can reinvent themselves and regain popularity, as well as highlighting the impact of leadership style (Starmer vs Corbyn). It provides context about current UK political dynamics, which can bolster points about the consequences of long governance (Conservative fatigue) or the role of public opinion in democracies.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      revival; moving toward the center; purging; marred; tenure; voter discontent; woes; calibrated; fiscally responsible; baggage (of years in power); tumultuous legacy; momentum; cusp; changing of the guard; competence; mismanagement; fresh leadership
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Devolution and Union */}
            <AccordionItem value="devolution-union" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-600 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Devolution and the Question of Union</h3>
                    <p className="text-sm text-muted-foreground">Regional autonomy and national unity challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The unity of the United Kingdom itself faces renewed examination as different nations push for greater autonomy. Scotland, in particular, has kept the prospect of independence alive. The Scottish National Party (SNP) remains a dominant force in Edinburgh and continually pressures for a second referendum, arguing that Brexit happened against Scotland's will (62% of Scots voted "Remain" in 2016) and thus materially changed the union's terms. Though a 2014 referendum resulted in 55% voting to stay in the UK, circumstances have shifted. In 2023, longtime SNP leader Nicola Sturgeon stepped down, but her successors maintain the goal of independence—even as legal rulings (like a UK Supreme Court decision forbidding Scotland from unilaterally holding a new vote) have stalled the path.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Meanwhile, Northern Ireland's politics have been upended by Brexit-related arrangements. The Northern Ireland Protocol—now modified by 2023's Windsor Framework—keeps the region aligned with many EU trade rules to avoid a hard border with Ireland. This has stirred unionist anger over an "Irish Sea border" between Northern Ireland and Great Britain, contributing to a political impasse in Stormont (Northern Ireland's devolved assembly). On the flip side, the Catholic nationalist Sinn Féin party made history in the 2022 elections by becoming the largest party in Northern Ireland for the first time, a symbolic boost for those envisioning a future united Ireland. These developments underscore how devolution and divergent political identities have complicated governance in the UK. The central government now must navigate a delicate balance: granting enough local power to satisfy regional aspirations without accelerating a breakup of the union.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this paragraph for topics on national identity, decentralization, or contemporary challenges to nation-states. It provides concrete examples from Scotland and Northern Ireland, which help arguments about how globalization (or Brexit) can revive separatist sentiments. It's also useful when comparing different countries' approaches to federalism or devolution, or discussing the impact of supranational entities (EU) on domestic unity.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      autonomy; dominant force; referendum; materially changed; successors; unilaterally; upended; Protocol; hard border; impasse; nationalist; symbolic boost; envisioning; devolution; divergent; breakup of the union
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Essential Vocabulary */}
            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Political Vocabulary</h3>
                    <p className="text-sm text-muted-foreground">Key terms and definitions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-3">
                  {essentialVocabulary.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-600">
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <div className="sm:w-1/3">
                            <Badge className="bg-orange-600">{item.term}</Badge>
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
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
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
                      <h4 className="font-semibold mb-2">1. Democratic Resilience</h4>
                      <p className="text-sm">
                        "Even established democracies are vulnerable to backsliding." Discuss this statement with reference to recent events in the United States and the challenges facing democratic institutions.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Judicial Independence</h4>
                      <p className="text-sm">
                        To what extent has the politicization of the Supreme Court undermined its role as an independent check on government power? Analyze recent developments and their implications.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Electoral Integrity</h4>
                      <p className="text-sm">
                        How do voting rights and electoral rules shape democratic representation? Evaluate the balance between ballot access and electoral security in contemporary American politics.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Political Polarization</h4>
                      <p className="text-sm">
                        "Policy whiplash undermines effective governance." Assess this claim by examining how political polarization affects policy stability and long-term planning in the United States.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Brexit Consequences</h4>
                      <p className="text-sm">
                        To what extent have the economic consequences of Brexit matched the promises made during the 2016 referendum campaign? Analyze both the intended and unintended outcomes.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. UK Immigration Policy</h4>
                      <p className="text-sm">
                        "The UK-Rwanda asylum plan represents a new low in immigration policy." Discuss this statement with reference to legal, ethical, and practical considerations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Cost-of-Living Crisis</h4>
                      <p className="text-sm">
                        How has the cost-of-living crisis in the UK affected industrial relations and what does this reveal about contemporary British society?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. UK Devolution</h4>
                      <p className="text-sm">
                        "Brexit has accelerated the breakup of the United Kingdom." Assess this claim by examining developments in Scotland and Northern Ireland since 2016.
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
              <Button variant="outline" className="flex items-center gap-2 border-orange-500 text-black hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
            <Link to="/formation/anglais/civilisation/geopolitics">
              <Button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700">
                Next: Geopolitics and International Relations
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsPage; 