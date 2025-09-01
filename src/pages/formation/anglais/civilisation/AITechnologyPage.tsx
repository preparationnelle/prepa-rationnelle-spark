import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Cpu, Brain, Shield, Users, Building2, ArrowLeft, ArrowRight, Zap, Globe, Lock, Smartphone } from 'lucide-react';

const AITechnologyPage = () => {
  const keyTopics = [
    {
      title: "Artificial Intelligence",
      content: "Generative AI, ChatGPT, automation, job displacement, AI race, ethical challenges",
      vocabulary: ["generative AI", "automation", "strategic asset", "ethical challenges", "guardrails"]
    },
    {
      title: "Big Tech Regulation",
      content: "Antitrust laws, monopoly power, Digital Markets Act, competition policy, corporate power",
      vocabulary: ["antitrust", "gatekeepers", "monopoly", "competition", "regulation"]
    },
    {
      title: "Social Media & Misinformation",
      content: "Platform power, content moderation, Cambridge Analytica, disinformation, free speech",
      vocabulary: ["misinformation", "content moderation", "whistleblower", "censorship", "platform power"]
    },
    {
      title: "Cybersecurity",
      content: "Cybercrime, ransomware, digital policing, privacy vs security, dark web",
      vocabulary: ["cybercrime", "ransomware", "encryption", "surveillance", "dark web"]
    }
  ];

  const essentialVocabulary = [
    { term: "AI (Artificial Intelligence)", definition: "Computer systems that can perform tasks typically requiring human intelligence" },
    { term: "generative AI", definition: "AI systems that can create new content like text, images, or code" },
    { term: "antitrust", definition: "Laws designed to promote competition and prevent monopolies" },
    { term: "gatekeepers", definition: "Large platforms that control access to digital markets" },
    { term: "misinformation", definition: "False or misleading information spread unintentionally" },
    { term: "cybercrime", definition: "Criminal activities carried out using computers or the internet" }
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
            <span className="text-foreground font-medium">AI and Technology</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <Cpu className="h-5 w-5" />
                </div>
                <Badge className="bg-blue-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Artificial Intelligence and Technology</CardTitle>
              <p className="text-muted-foreground">
                The digital revolution, AI breakthroughs, and the challenges of our technological age
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Tech Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-blue-100">ChatGPT launched</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">100M+</div>
                  <div className="text-sm text-blue-100">ChatGPT users in 2 months</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">300M</div>
                  <div className="text-sm text-blue-100">Jobs at risk from AI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm text-blue-100">UK crime is cybercrime</div>
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
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Technology Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
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

            {/* AI Revolution */}
            <AccordionItem value="ai-revolution" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">AI Revolution: ChatGPT and the Race for Digital Dominance</h3>
                    <p className="text-sm text-muted-foreground">The generative AI breakthrough and its global impact</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The late 2020s have witnessed a quantum leap in artificial intelligence capabilities, epitomized by the debut of ChatGPT and similar "generative AI" models. When OpenAI released ChatGPT in November 2022, its uncanny ability to produce human-like text and answer complex questions stunned the public—gathering over 100 million users in just two months. Tech giants scrambled to respond. Google, caught off-guard by the AI's popularity, declared a "code red" and accelerated work on its own chatbots. An early misstep in Google's rollout of its Bard AI wiped a staggering $100 billion off Alphabet's market value in a single day after the bot made a factual error, underscoring the high stakes.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Beyond Big Tech rivalry, the implications of these AI tools are seismic. They threaten to upend industries by automating white-collar work—from drafting legal contracts to writing computer code—at a scope previously unimaginable. Goldman Sachs estimated that AI could expose 300 million jobs to automation worldwide. At the same time, AI is becoming a strategic asset in national competitions: countries worry about falling behind in the AI race, likening it to the space race of the 1960s. The United States still leads in cutting-edge AI research, but China is pouring massive investments into AI development, aiming for global leadership by 2030. Society, too, is grappling with AI's ethical challenges: bias in algorithms, misinformation bots, and potential loss of creative human roles. The emergence of such powerful AI has ignited debates about regulation, with some experts calling for guardrails or even pauses in development. What's clear is that the AI revolution has begun, and it is redefining both economic paradigms and the boundaries of what machines can do.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is useful for tech-focused prompts or any discussion of innovation and its impact on society. It blends specific events (ChatGPT's release, Google's reaction, a stat on jobs) with broader context, which can support arguments about technological disruption, the need for regulation, or global competition. Use it to illustrate the pace of change and why AI is such a hot topic.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      quantum leap; epitomized; generative AI; uncanny; stunned; scrambled; code red; rollout; high stakes; upend; automation; scope; strategic asset; space race; pouring investments; ethical challenges; guardrails; paradigms
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Big Tech and Monopoly Power */}
            <AccordionItem value="big-tech-monopoly" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Big Tech and Monopoly Power: The Antitrust Wars</h3>
                    <p className="text-sm text-muted-foreground">Regulatory battles and competition policy</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the 2020s, governments around the world have intensified scrutiny of Big Tech companies amid growing fears that these corporate titans wield too much power over markets, data, and public discourse. The European Union has led the regulatory charge: its landmark Digital Markets Act (DMA) and Digital Services Act (DSA), enacted in 2022, impose strict rules on tech "gatekeepers" to ensure fair competition and oblige platforms to police harmful content. The EU has slapped multi-billion-euro fines on firms like Google, Amazon, and Meta (Facebook) for antitrust violations ranging from self-preferencing in search results to anti-competitive use of data.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Across the Atlantic, U.S. regulators and lawmakers—historically more hands-off—have also toughened their stance. The Federal Trade Commission under Lina Khan, a noted critic of Big Tech, has filed lawsuits seeking to unwind Facebook's acquisitions of Instagram and WhatsApp, arguing that they were meant to stifle competition. In another high-profile case, the U.S. Justice Department took Google to court (in the first monopoly trial of the internet era) over its dominance in online search and advertising. Meanwhile, tech companies insist that their size enables consumer benefits like integrated services and robust R&D spending, warning that overregulation could hamper innovation. A notable example of industry pushback was Apple's argument that allowing third-party app stores (a DMA requirement) could undermine user security. As antitrust battles play out, one consequential outcome may be a forced unbundling or behavioral change in how these giants operate—steps not seen since Microsoft's antitrust showdown in the 1990s. The tussle highlights a core dilemma of the digital age: how to foster innovation and growth while reining in the winner-takes-all tendencies of online markets.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      Use this when talking about regulation, corporate power, or market economics. It gives concrete regulatory examples (EU acts, U.S. lawsuits) which support arguments about government intervention in tech. It's helpful in discussions of whether Big Tech should be broken up or how to balance innovation with competition. It also works for questions about privacy or free speech indirectly, since those are tied to platform power.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      scrutiny; titans; discourse; gatekeepers; oblige; harmful content; self-preferencing; hands-off; toughened their stance; unwind (an acquisition); stifle competition; high-profile; dominance; integrated services; R&D (research and development); hamper; pushback; unbundling; showdown; tussle; winner-takes-all
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Social Media and Misinformation */}
            <AccordionItem value="social-media-misinformation" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Social Media, Misinformation, and Regulation</h3>
                    <p className="text-sm text-muted-foreground">Platform power and content moderation challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The influence of social media on politics and society has prompted intense debate and a push for stricter regulation. Platforms like Facebook (now Meta), Twitter (now rebranded as X), YouTube, and TikTok have been accused of enabling the rapid spread of misinformation, hate speech, and extremist content—sometimes with deadly consequences. One notorious example was the role of Facebook in the spread of false claims during the 2016 U.S. election and the Brexit referendum, amplified further by the Cambridge Analytica scandal in which data from 87 million Facebook users was harvested to micro-target political ads, some of which trafficked in conspiracy theories and divisive rhetoric.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Whistleblower Frances Haugen's 2021 revelations underscored that Facebook's own research knew its algorithms could amplify harmful but legal content—ranging from pro-anorexia posts to election disinformation—yet the company often kept engagement high at the expense of safety. In response, jurisdictions are taking action. The European Union's Digital Services Act (DSA) now forces big tech platforms to assess and mitigate systemic risks on their sites, and labels them "Very Large Online Platforms" with heightened duties. In the UK, an Online Safety Bill has been debated to hold companies accountable for protecting users (especially minors) from harmful content. Even the U.S., traditionally protective of free speech online, saw congressional hearings grilling tech CEOs about content moderation and Section 230 immunity. At the same time, free speech advocates caution that overzealous moderation or government mandates could lead to censorship and stifle legitimate discourse. Striking the right balance remains a challenge: how to ensure online ecosystems are safe and truthful without undermining the open internet. As democracies navigate this, authoritarian regimes have taken a simpler route—state censorship—highlighting that whatever path is chosen will deeply shape the future of global information flows.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This fits topics on media, democracy, or digital ethics. It provides evidence of problems (Cambridge Analytica, Haugen's testimony) and regulatory responses, useful in arguing either side of the regulation vs free speech debate. It's good for illustrating the real impact of social media on society (elections, youth, etc.), or the differences between democratic and authoritarian approaches to controlling information.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      prompted; misinformation; extremist content; deadly consequences; false claims; referendum; harvested; micro-target; conspiracy theories; divisive rhetoric; whistleblower; amplify; mitigate; accountable; minors; hearings; content moderation; immunity; overzealous; censorship; legitimate discourse; open internet; information flows
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cybersecurity and Crime */}
            <AccordionItem value="cybersecurity-crime" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Cybersecurity and Crime: Policing in the Digital Age</h3>
                    <p className="text-sm text-muted-foreground">The evolution of crime and law enforcement</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    As societies digitize, crime has increasingly moved online, forcing law enforcement into a paradigm shift. In many developed countries, cybercrime now far outstrips traditional crime in frequency and scale. For example, in England and Wales, fraud and computer misuse offenses accounted for roughly 60% of all crime in 2021, while old-fashioned burglary and car theft have significantly declined since the 1990s. Criminals exploit anonymity and global connectivity: ransomware gangs based in Eastern Europe can cripple a hospital in London or a pipeline in the U.S., demanding millions in cryptocurrency. Child exploitation and drug trafficking have also shifted to dark web platforms, challenging investigators to trace encrypted communications.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This evolution has laid bare a skills and recruitment problem in policing. Hiring 20,000 more street police—as the UK attempted in recent years—does little good if the "wrong sort" of police are recruited to tackle online fraudsters. Agencies find themselves competing with lucrative private tech firms for talent who can write code, analyze malware, or decipher blockchain trails. To adapt, law enforcement is creating specialized cyber units and partnering with tech companies and international bodies, since internet crimes don't respect borders. There's also a preventative angle: governments run public awareness campaigns about phishing scams and weak passwords, akin to "lock your doors" advice of old. Yet concerns abound about privacy and overreach. Measures like mass surveillance or breaking encryption to catch criminals ignite fierce civil liberties debates. The balance between security and privacy in cyberspace is proving as tricky as in the physical realm—if not more so—given the dual role of digital tools as instruments of both liberation and crime.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph can support points about modernization of institutions, the impact of technology on society, or the need for new skills in the workforce. It's great for prompts on security vs privacy or how crime has changed. Use it to illustrate that policy must evolve with technology, or as a comparison between different types of threats (physical vs digital).
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      digitize; paradigm shift; outstrips; offenses; anonymity; connectivity; ransomware; cripple; cryptocurrency; dark web; encrypted; recruitment; fraudsters; malware; decipher; blockchain; partnering; borders; phishing; surveillance; encryption; civil liberties; liberation
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
                    <h3 className="text-lg font-semibold">Essential Technology Vocabulary</h3>
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
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. AI Revolution</h4>
                      <p className="text-sm">
                        "Artificial Intelligence will transform the workplace more than any technology since the Industrial Revolution." Discuss this statement with reference to recent developments and their societal implications.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Big Tech Regulation</h4>
                      <p className="text-sm">
                        To what extent should governments regulate Big Tech companies? Analyze the balance between fostering innovation and preventing monopoly power.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Social Media Impact</h4>
                      <p className="text-sm">
                        "Social media platforms have become a threat to democracy." Assess this claim by examining the spread of misinformation and regulatory responses.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Cybersecurity Challenges</h4>
                      <p className="text-sm">
                        How has the digitalization of society changed the nature of crime and what challenges does this pose for law enforcement and privacy?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Technology and Society</h4>
                      <p className="text-sm">
                        "Technology is neutral, but its impact depends on how it's used." Discuss this statement with reference to AI, social media, and cybersecurity.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Global Tech Competition</h4>
                      <p className="text-sm">
                        To what extent is the AI race between the US and China similar to the space race of the 1960s? Analyze the strategic and economic implications.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Digital Privacy</h4>
                      <p className="text-sm">
                        "Privacy is dead in the digital age." Assess this claim by examining how technology companies collect and use personal data.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of Work</h4>
                      <p className="text-sm">
                        300 million jobs are at risk from AI automation. How should societies prepare for this technological disruption and what policies might mitigate its negative effects?
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
            <Link to="/formation/anglais/civilisation/economy">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                Next: Economy and Globalization
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechnologyPage; 