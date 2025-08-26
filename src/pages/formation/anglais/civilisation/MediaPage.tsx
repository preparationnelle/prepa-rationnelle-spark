import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Smartphone, Globe, Users, Building2, ArrowLeft, ArrowRight, AlertTriangle, Shield, Target, Zap, Scale, Lock } from 'lucide-react';

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
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Media and Social Networks</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <Smartphone className="h-5 w-5" />
                </div>
                <Badge className="bg-purple-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Media and Social Networks</CardTitle>
              <p className="text-muted-foreground">
                Digital media influence, social media polarization, and the future of online information
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Media Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm text-purple-100">Global news trust</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">32%</div>
                  <div className="text-sm text-purple-100">US news trust</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-sm text-purple-100">18-24s use TikTok for news</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">56%</div>
                  <div className="text-sm text-purple-100">Worry about fake vs real info</div>
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

            {/* Digital Media Influence */}
            <AccordionItem value="digital-media-influence" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on media trust, information consumption patterns, or the impact of social media on democracy. It provides concrete statistics on trust levels and specific examples of misinformation campaigns, making it useful for arguments about the decline of traditional media or the dangers of social media reliance. It can also support points about generational differences in news consumption.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
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
                  <div className="p-2 rounded-lg bg-red-500 text-white">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on social media's impact on democracy, political polarization, or the challenges of the digital information age. It provides specific examples of AI-generated content and misinformation campaigns, making it useful for arguments about the need for media literacy or the dangers of algorithmic echo chambers. It can also support points about the importance of fact-checking in the digital era.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
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
                  <div className="p-2 rounded-lg bg-green-500 text-white">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on internet regulation, the balance between safety and free speech, or international approaches to platform governance. It provides concrete examples of recent legislation and can support arguments about the need for regulation or the risks of over-regulation. It's also useful for analyzing how different jurisdictions approach similar challenges.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      grappling; rein in; online harms; stifling; free speech; obligations; police illegal content; transparent; algorithms; landmark legislation; comprehensive; regulate; take responsibility; host; user rights; freedoms; sweeping; curb; controversial; pressures; encrypted messages; provision; endangers privacy; undermine; legitimate communications; fundamental rights; free expression
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Platform Upheavals */}
            <AccordionItem value="platform-upheavals" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on platform competition, content moderation policies, or the evolution of social media. It provides specific examples of platform changes and their consequences, making it useful for arguments about the importance of content moderation or the role of competition in improving platform quality. It can also support points about the need for media literacy education.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
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
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on the future of digital media, the balance between innovation and regulation, or the challenges of emerging technologies. It provides a framework for thinking about competing interests and can support arguments about the need for balanced approaches to digital governance. It's also useful for analyzing the role of different stakeholders in shaping the future of online spaces.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
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
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Social Media and Democracy</h4>
                      <p className="text-sm">
                        "Social media has become a threat to democratic discourse." Assess this claim by examining the spread of misinformation and polarization.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Media Trust and Information Quality</h4>
                      <p className="text-sm">
                        To what extent has the decline in trust in traditional media contributed to the rise of misinformation on social platforms?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Platform Regulation</h4>
                      <p className="text-sm">
                         "Governments should regulate social media platforms to protect users from harm." Discuss this statement with reference to recent legislative efforts.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. AI and Misinformation</h4>
                      <p className="text-sm">
                        How has the development of generative AI changed the nature of online misinformation and what challenges does this pose for society?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Privacy vs Security</h4>
                      <p className="text-sm">
                        "The need to combat online harms justifies restrictions on digital privacy." Assess this claim by examining the balance between safety and freedom.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Media Literacy</h4>
                      <p className="text-sm">
                        56% of people worry about distinguishing real from fake information online. How can digital media literacy be improved to address this concern?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Platform Competition</h4>
                      <p className="text-sm">
                        To what extent does competition between social media platforms lead to better content moderation and user experience?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of Digital Media</h4>
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
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
            <Link to="/formation/anglais/civilisation/justice">
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
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