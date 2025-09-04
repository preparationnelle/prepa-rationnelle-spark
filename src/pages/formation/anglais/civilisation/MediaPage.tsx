import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Smartphone, Globe, Users, Building2, ArrowLeft, ArrowRight, AlertTriangle, Shield, Target, Zap, Scale, Lock, Leaf, Thermometer, Factory } from 'lucide-react';

const MediaPage = () => {
  const keyTopics = [
    {
      title: "Digital Media Influence",
      content: "Social networks in politics, information amplification, misinformation spread, trust erosion",
      vocabulary: ["digital media", "social networks", "information amplification", "misinformation", "trust erosion"]
    },
    {
      title: "Social Media Polarization",
      content: "Echo chambers, algorithms, polarization, disinformation campaigns, fake content",
      vocabulary: ["echo chambers", "algorithms", "polarization", "disinformation", "fake content"]
    },
    {
      title: "Regulatory Responses",
      content: "Digital Services Act, Online Safety Act, content moderation, platform obligations",
      vocabulary: ["Digital Services Act", "Online Safety Act", "content moderation", "platform obligations", "regulation"]
    },
    {
      title: "Platform Upheavals",
      content: "Twitter/X changes, content moderation rules, alternative platforms, digital media literacy",
      vocabulary: ["platform upheavals", "content moderation", "alternative platforms", "digital media literacy", "fake news"]
    }
  ];

  const essentialVocabulary = [
    { term: "digital media", definition: "Electronic media that can be created, viewed, distributed, and modified on digital devices" },
    { term: "social networks", definition: "Online platforms that allow users to create and share content and connect with others" },
    { term: "misinformation", definition: "False or misleading information spread unintentionally" },
    { term: "disinformation", definition: "False information deliberately spread to deceive people" },
    { term: "echo chambers", definition: "Environments where people only encounter information that confirms their existing beliefs" },
    { term: "content moderation", definition: "The practice of monitoring and regulating user-generated content on online platforms" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal breadcrumb (orange + noir) */}
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
            <span className="font-medium">Media and Digital Communication</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Minimal header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Media and Digital Communication</h1>
            <p className="text-sm text-black/70 mt-1">Social media, journalism, fake news, and information democracy</p>
          </div>

          {/* Minimal statistics (no gradient) */}
          <Card className="mb-8 border border-orange-200">
            <CardHeader className="py-3">
              <CardTitle className="text-xl text-black">Key Media Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold text-black">40%</div>
                  <div className="text-sm text-black/70">Global news trust</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold text-black">32%</div>
                  <div className="text-sm text-black/70">US news trust</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold text-black">20%</div>
                  <div className="text-sm text-black/70">18-24s use TikTok for news</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold text-black">56%</div>
                  <div className="text-sm text-black/70">Worry about fake vs real info</div>
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
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Media Topics</h3>
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

            {/* Digital Media Influence */}
            <AccordionItem value="digital-media-influence" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Digital Media Influence: The New Information Landscape</h3>
                    <p className="text-sm text-muted-foreground">Trust erosion and social media reliance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Digital media and social networks are now influential forces in politics – amplifying information, but also misinformation, at unprecedented scale. Trust in traditional news media has eroded in recent years, and more people (especially the young) rely on social platforms for information. A 2023 Reuters Institute report found global news trust fell to ~40%, and in the US trust stood at only 32%, among the lowest levels.
                  </p>
                  <p className="text-justify leading-relaxed">
                    At the same time, younger audiences are turning to social media influencers and sites like TikTok for news; about 20% of 18–24 year-olds used TikTok for news in 2023. These trends point to a fragmentation of the information landscape, with algorithms often funneling users into echo chambers. Indeed, social media's role in fueling polarization and spreading disinformation has become a major concern. During the 2024 U.S. election cycle, organized misinformation campaigns flourished on social networks – fake videos and rumors (even one fabricated in Russia of a non-citizen claiming to have voted) circulated widely, influencing perceptions of candidates and issues.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is excellent for discussions on media trust, information consumption patterns, or the impact of social media on democracy. It provides concrete statistics on trust levels and specific examples of misinformation campaigns, making it useful for arguments about the decline of traditional media or the dangers of social media reliance. It can also support points about generational differences in news consumption.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      influential forces; amplifying; unprecedented scale; eroded; rely on; fragmentation; information landscape; algorithms; funneling; echo chambers; fueling polarization; disinformation; flourished; fabricated; circulated; influencing perceptions
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Social Media Polarization */}
            <AccordionItem value="social-media-polarization" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Social Media Polarization: Echo Chambers and Disinformation</h3>
                    <p className="text-sm text-muted-foreground">Algorithmic influence and fake content proliferation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The role of social media in fueling polarization and spreading disinformation has become a major concern in contemporary society. Algorithms designed to maximize engagement often funnel users into echo chambers, where they only encounter information that confirms their existing beliefs and biases. This creates a feedback loop that reinforces political and social divisions, making it increasingly difficult for people to find common ground or consider alternative perspectives.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Generative AI has made doctored images and videos easier to produce, further blurring the line between truth and falsehood online. During major political events like the 2024 U.S. election cycle, organized misinformation campaigns flourished on social networks. Fake videos and rumors circulated widely, including one fabricated in Russia of a non-citizen claiming to have voted. Polling data suggest these false narratives had real effects on voters' views about the economy, crime, and immigration. The challenge of distinguishing between authentic and manipulated content has become a critical issue for democratic societies, as the quality of public discourse depends on access to reliable information.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is valuable for discussions on social media's impact on democracy, political polarization, or the challenges of the digital information age. It provides specific examples of AI-generated content and misinformation campaigns, making it useful for arguments about the need for media literacy or the dangers of algorithmic echo chambers. It can also support points about the importance of fact-checking in the digital era.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      fueling polarization; disinformation; algorithms; maximize engagement; echo chambers; feedback loop; reinforces; divisions; common ground; alternative perspectives; doctored; blurring; falsehood; flourished; circulated; fabricated; false narratives; authentic; manipulated content; public discourse; reliable information
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Regulatory Responses */}
            <AccordionItem value="regulatory-responses" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Regulatory Responses: Balancing Safety and Free Speech</h3>
                    <p className="text-sm text-muted-foreground">EU and UK legislative approaches</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Governments around the world are grappling with how to rein in online harms without stifling free speech. In the European Union, the Digital Services Act took effect in 2023, imposing new obligations on big tech companies to police illegal content and be transparent about their algorithms. This landmark legislation represents one of the most comprehensive attempts to regulate social media platforms, requiring them to take responsibility for the content they host while maintaining user rights and freedoms.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The UK followed with its sweeping Online Safety Act in late 2023, aiming to make the internet "the safest place in the world". The law requires platforms to curb everything from child sexual abuse material and terrorist content to fraud and harassment. It also controversially pressures companies to address encrypted messages – a provision critics argue endangers privacy and could undermine the security of legitimate communications. These regulatory approaches reflect the complex challenge of protecting users from harm while preserving the open nature of the internet and fundamental rights like privacy and free expression.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is excellent for discussions on internet regulation, the balance between safety and free speech, or international approaches to platform governance. It provides concrete examples of recent legislation and can support arguments about the need for regulation or the risks of over-regulation. It's also useful for analyzing how different jurisdictions approach similar challenges.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      grappling; rein in; online harms; stifling; free speech; obligations; police illegal content; transparent; algorithms; landmark legislation; comprehensive; regulate; take responsibility; host; user rights; freedoms; sweeping; curb; controversial; pressures; encrypted messages; provision; endangers privacy; undermine; legitimate communications; fundamental rights; free expression
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Big Tech Regulation Essay */}
            <AccordionItem value="big-tech-regulation-essay" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Big Tech Regulation Essay</h3>
                    <p className="text-sm text-muted-foreground">Considering Big Tech's potential harms and need for regulation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-4">Essay: Big Tech Regulation Debate</h4>
                    <div className="text-justify leading-relaxed space-y-4 text-sm">
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
                      <p className="text-right font-medium">
                        464 words
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This essay provides a nuanced perspective on Big Tech regulation, balancing concerns about content moderation and free speech with arguments for regulating economic and political harms. It includes specific examples like the Molly Russell case and references to real legislation. The essay can be used as a model for discussing the complex trade-offs involved in regulating technology companies.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      looked down on; well-meaning; harder to cope with; kick off ruling; set safeguards up; overwhelmed; exposing; self-harm; spurred; blighted by appalling content; tackle cyberbullying; put down; turn a blind eye; bear the brunt; balk at curbing; muzzle hateful speeches; snorting; impractical; inauspicious; legitimately object; bring about; nip in the bud; no qualms; wiping them out; outcompete; newcomers; monopolistic position; breakdowns; bias; lean toward; influential; sit on our hands; penalize disinformation; thrive
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Platform Upheavals */}
            <AccordionItem value="platform-upheavals" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Platform Upheavals: Twitter/X Changes and Alternative Platforms</h3>
                    <p className="text-sm text-muted-foreground">Content moderation shifts and platform competition</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Even as these regulations roll out, platforms themselves have seen significant upheaval in their policies and user experiences. Twitter, for instance, loosened many content moderation rules under new owner Elon Musk (renaming the platform "X"), leading to concerns about a surge in hate speech and misinformation. The platform's approach to content moderation became more permissive, with many users reporting increased exposure to harmful content and a decline in the overall quality of discourse.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Rival networks and decentralized platforms sprang up in response to these changes (e.g., Meta's "Threads"), highlighting public demand for healthier online discourse. Meanwhile, the prevalence of "fake news" and conspiracy theories on Facebook, YouTube, and TikTok has spurred initiatives to improve digital media literacy. Surveys show 56% of people now worry about distinguishing real versus fake information on the internet. Taken together, the media environment in 2025 is one of democratized content creation but also chaotic information quality. Ensuring that factual, responsible journalism stands out – and that social networks become less prone to abuse – remains an urgent challenge in combating polarization and maintaining healthy democratic discourse.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is valuable for discussions on platform competition, content moderation policies, or the evolution of social media. It provides specific examples of platform changes and their consequences, making it useful for arguments about the importance of content moderation or the role of competition in improving platform quality. It can also support points about the need for media literacy education.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      upheaval; policies; loosened; content moderation rules; permissive; surge; hate speech; harmful content; decline; quality of discourse; rival networks; decentralized platforms; sprang up; healthier online discourse; prevalence; conspiracy theories; spurred initiatives; digital media literacy; democratized content creation; chaotic information quality; factual; responsible journalism; prone to abuse; combating polarization; democratic discourse
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Future Challenges */}
            <AccordionItem value="future-challenges" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Future Challenges: Privacy, Security, and Information Quality</h3>
                    <p className="text-sm text-muted-foreground">Balancing innovation with protection</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The rapid evolution of digital media and social networks presents ongoing challenges that require careful consideration of competing interests. On one hand, there's a need to protect users from harmful content, misinformation, and privacy violations. On the other hand, there's a desire to maintain the open, innovative nature of the internet that has enabled unprecedented access to information and opportunities for expression. This tension is particularly evident in debates over encryption, where law enforcement agencies seek access to encrypted communications for security purposes, while privacy advocates argue that such access would undermine the security of all users.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The rise of generative AI adds another layer of complexity, as the technology that can create convincing fake content also has legitimate uses in creative industries, education, and research. Developing effective strategies to combat AI-generated misinformation while preserving the benefits of the technology will require collaboration between governments, tech companies, civil society organizations, and individual users. The future of digital media depends on finding the right balance between regulation and innovation, between safety and freedom, and between global standards and local needs.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This paragraph is excellent for discussions on the future of digital media, the balance between innovation and regulation, or the challenges of emerging technologies. It provides a framework for thinking about competing interests and can support arguments about the need for balanced approaches to digital governance. It's also useful for analyzing the role of different stakeholders in shaping the future of online spaces.
                    </p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-orange-700">
                      rapid evolution; competing interests; harmful content; privacy violations; innovative nature; unprecedented access; opportunities for expression; tension; encryption; law enforcement agencies; security purposes; privacy advocates; undermine; generative AI; layer of complexity; convincing fake content; legitimate uses; creative industries; effective strategies; combat; collaboration; stakeholders; global standards; local needs
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
                    <h3 className="text-lg font-semibold">Essential Media Vocabulary</h3>
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
                  {/* Featured Essay Sample */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Scale className="h-5 w-5 text-indigo-600" />
                      <span className="text-sm font-semibold text-indigo-700">Featured Essay Sample</span>
                    </div>
                    <p className="text-sm text-indigo-600">
                      Complete model essay analyzing US political polarization and the risk of greater disunion
                    </p>
                  </div>
                  <div className="space-y-3">
                    {/* US Polarization Essay - First Sample */}
                    <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-semibold mb-4 text-indigo-800">1. US Polarization Essay Sample</h4>
                      <div className="text-justify leading-relaxed space-y-4 text-sm mb-4">
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
                        <p className="text-right font-medium text-indigo-600">
                          478 words
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Social Media and Democracy</h4>
                      <p className="text-sm">
                        "Social media has become a threat to democratic discourse." Assess this claim by examining the spread of misinformation and polarization.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Media Trust and Information Quality</h4>
                      <p className="text-sm">
                        To what extent has the decline in trust in traditional media contributed to the rise of misinformation on social platforms?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Platform Regulation</h4>
                      <p className="text-sm">
                         "Governments should regulate social media platforms to protect users from harm." Discuss this statement with reference to recent legislative efforts.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. AI and Misinformation</h4>
                      <p className="text-sm">
                        How has the development of generative AI changed the nature of online misinformation and what challenges does this pose for society?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Privacy vs Security</h4>
                      <p className="text-sm">
                        "The need to combat online harms justifies restrictions on digital privacy." Assess this claim by examining the balance between safety and freedom.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Media Literacy</h4>
                      <p className="text-sm">
                        56% of people worry about distinguishing real from fake information online. How can digital media literacy be improved to address this concern?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Platform Competition</h4>
                      <p className="text-sm">
                        To what extent does competition between social media platforms lead to better content moderation and user experience?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">9. Future of Digital Media</h4>
                      <p className="text-sm">
                        How can the digital media environment be structured to maximize the benefits of democratized content creation while minimizing the spread of harmful content?
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
            <Link to="/formation/anglais/civilisation/justice">
              <Button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700">
                Next: Justice and the Rule of Law
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage; 