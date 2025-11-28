import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Calendar,
  Briefcase,
  BookOpen,
  X
} from 'lucide-react';

interface RedactedSubject {
  title: string;
  content: string;
}

const FormationAnglaisCivilisationPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<RedactedSubject | null>(null);

  const climateSubject: RedactedSubject = {
    title: "Climate change and environmental policies in the English-speaking world",
    content: `Introduction
The COP28 summit in Dubai marked a historic turning point with the first global agreement to "transition away from fossil fuels." However, the implementation of this commitment varies significantly across English-speaking nations. While the UK leads with ambitious net-zero targets, the United States faces political polarization, and Australia struggles with its coal dependency. How can these diverse approaches converge to address the climate crisis effectively?

Development I – Leadership and innovation
The United Kingdom has demonstrated remarkable leadership in renewable energy transition. The country generated 50.9% of its electricity from renewables in 2023, with offshore wind capacity reaching 14.2 GW. The Net Zero Strategy allocates £26 billion for green investments, creating 440,000 jobs by 2030. Similarly, California's cap-and-trade program has reduced emissions by 15% since 2013 while generating $20 billion for climate projects. These successes prove that environmental policies can drive economic growth and technological innovation.

Development II – Challenges and resistance
However, significant obstacles remain. Australia's reliance on coal exports—worth $54 billion annually—creates political resistance to transition policies. The recent federal election saw climate action become a divisive issue, with rural constituencies opposing renewable projects. In the United States, the Inflation Reduction Act faces implementation challenges in Republican-controlled states, where fossil fuel industries remain politically influential. These examples highlight how economic interests and regional politics can undermine climate commitments.

Conclusion
The English-speaking world's climate response reveals both the potential and limitations of democratic environmental governance. Success requires aligning economic incentives with environmental goals while addressing legitimate concerns about job losses and regional development. If these nations can harmonize their approaches through technology sharing and coordinated policies, they could accelerate global climate action and demonstrate that democratic societies can effectively tackle long-term challenges.`
  };

  const democracySubject: RedactedSubject = {
    title: "Democratic institutions under pressure: UK, US, and Commonwealth perspectives",
    content: `Introduction
Recent years have witnessed unprecedented challenges to democratic institutions across the English-speaking world. From Brexit's constitutional crisis in the UK to the January 6th Capitol attack in the US, and from media concentration in Australia to constitutional debates in Canada, democratic norms face mounting pressure. These developments raise fundamental questions about the resilience of Westminster-style democracy and its American variant in the 21st century.

Development I – Institutional stress and adaptation
The UK's constitutional system faced severe testing during the Brexit process. Parliament's sovereignty clashed with referendum democracy, creating a legitimacy crisis that required Speaker Bercow's unprecedented interventions and ultimately triggered three general elections. Similarly, the US experienced constitutional stress when President Trump's election challenges tested the limits of executive power. However, both systems demonstrated resilience: the UK's unwritten constitution proved flexible enough to accommodate crisis, while America's federal structure and independent judiciary ultimately preserved electoral integrity.

Development II – Emerging threats and vulnerabilities
Nevertheless, deeper structural problems persist. Media ownership concentration threatens informed democratic debate—Rupert Murdoch's News Corporation controls 60% of newspaper circulation in Australia and significant portions in the UK and US. Social media algorithms create echo chambers that polarize public opinion, as evidenced by the role of Facebook in Brexit and Trump campaigns. Additionally, growing wealth inequality undermines democratic equality, with political access increasingly determined by financial resources rather than popular support.

Conclusion
While English-speaking democracies have survived recent crises, they require fundamental reforms to thrive in the digital age. Campaign finance reform, media diversity protection, and civic education investments are essential to restore public trust and ensure democratic vitality. The challenge is implementing these reforms through the very democratic processes that face criticism, requiring both institutional innovation and renewed civic commitment.`
  };

  const techSubject: RedactedSubject = {
    title: "AI revolution and digital transformation in English-speaking societies",
    content: `Introduction
The artificial intelligence revolution is reshaping English-speaking societies at an unprecedented pace. Silicon Valley's tech giants control global AI development, while London positions itself as Europe's AI hub and Toronto emerges as a research powerhouse. However, this technological transformation raises critical questions about employment, privacy, and democratic governance. How can English-speaking nations harness AI's benefits while mitigating its societal risks?

Development I – Innovation leadership and economic opportunity
The United States maintains technological supremacy through massive private investment—venture capitalists invested $67 billion in AI startups in 2023 alone. Silicon Valley companies like OpenAI, Google, and Meta drive global AI standards, creating significant economic advantages for the US economy. The UK leverages its financial sector expertise to become Europe's AI capital, with London hosting 2,500 AI companies generating £16.8 billion annually. Canada's research excellence, particularly at the Vector Institute and Mila, attracts top talent and positions the country as an AI research leader.

Development II – Societal challenges and governance dilemmas
However, AI adoption creates significant challenges. Oxford economists estimate that 47% of US jobs face automation risk within two decades, particularly affecting manufacturing communities already struggling with globalization. Privacy concerns mount as surveillance capitalism expands—Cambridge Analytica's Facebook data harvesting influenced both Brexit and Trump elections, highlighting AI's potential for democratic manipulation. Additionally, algorithmic bias perpetuates discrimination, as demonstrated by facial recognition systems' poor performance on minorities and hiring algorithms' gender bias.

Conclusion
The AI revolution presents English-speaking nations with both unprecedented opportunities and fundamental challenges. Success requires balancing innovation leadership with responsible governance, ensuring that technological progress serves democratic values and social inclusion. International cooperation on AI ethics and regulation could establish global standards that protect human rights while fostering continued innovation.`
  };

  const handleShowSubject = (subject: RedactedSubject) => {
    setSelectedSubject(subject);
  };

  const closeSubjectModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Civilisation Anglaise
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les enjeux contemporains du monde anglophone pour exceller aux concours ECG
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">16 chapitres</span>
            <span className="px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">Actualisé 2025</span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Niveau Prépa</span>
          </div>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tous les Chapitres</h2>
            <p className="text-gray-600">Découvrez notre programme complet de civilisation anglophone</p>
          </div>

          <div className="space-y-4">

            {/* Module 1 - Environment and Ecology */}
            <Link to="/formation/anglais/civilisation/environment" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Environment and Ecology</h3>
                    <p className="text-gray-600 mb-4">Climate change, green policies, and environmental challenges in the English-speaking world</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/environment">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/environment/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowSubject(climateSubject);
                        }}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sample Essays
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 2 - Politics */}
            <Link to="/formation/anglais/civilisation/politics" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Politics (United States & United Kingdom)</h3>
                    <p className="text-gray-600 mb-4">Political systems, elections, and contemporary political developments</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/politics">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/politics/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowSubject(democracySubject);
                        }}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sample Essays
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 3 - Geopolitics */}
            <Link to="/formation/anglais/civilisation/geopolitics" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Geopolitics and International Relations</h3>
                    <p className="text-gray-600 mb-4">Anglo-American foreign policy, international alliances, and global influence</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/geopolitics">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/geopolitics/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/geopolitics/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 4 - Immigration and Social Issues */}
            <Link to="/formation/anglais/civilisation/immigration" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Immigration and Social Integration</h3>
                    <p className="text-gray-600 mb-4">Migration policies, multiculturalism, and social cohesion challenges</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/immigration">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/immigration/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/immigration/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 5 - Education Systems */}
            <Link to="/formation/anglais/civilisation/education" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Education Systems and Inequalities</h3>
                    <p className="text-gray-600 mb-4">Educational policies, university access, and social mobility</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/education">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/education/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/education/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 6 - Gender and Society */}
            <Link to="/formation/anglais/civilisation/civil-rights" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gender Equality and Social Movements</h3>
                    <p className="text-gray-600 mb-4">Women's rights, LGBTQ+ issues, and contemporary social movements</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/civil-rights">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/civil-rights/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/civil-rights/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 7 - AI and Technology */}
            <Link to="/formation/anglais/civilisation/ai-technology" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence and Technology</h3>
                    <p className="text-gray-600 mb-4">Tech revolution, AI ethics, and the digital transformation of society</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/ai-technology">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/ai-technology/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowSubject(techSubject);
                        }}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sample Essays
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 8 - Economy and Globalization */}
            <Link to="/formation/anglais/civilisation/economy" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Economy and Globalization</h3>
                    <p className="text-gray-600 mb-4">Economic systems, trade, and the impact of globalization</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/economy">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/economy/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/economy/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 9 - Brexit and Trade */}
            <Link to="/formation/anglais/civilisation/brexit" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">9</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brexit and International Trade</h3>
                    <p className="text-gray-600 mb-4">Post-Brexit Britain, trade deals, and economic sovereignty</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/brexit">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/brexit/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/brexit/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>



            {/* Module 11 - Labor and Employment */}
            <Link to="/formation/anglais/civilisation/labor" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">11</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Labor Markets and Future of Work</h3>
                    <p className="text-gray-600 mb-4">Employment trends, gig economy, and workplace transformation</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/labor">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/labor/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/labor/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 12 - Media and Communication */}
            <Link to="/formation/anglais/civilisation/media" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">12</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Media and Digital Communication</h3>
                    <p className="text-gray-600 mb-4">Social media, journalism, fake news, and information democracy</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/media">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/media/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/media/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 13 - Polarization */}
            <Link to="/formation/anglais/civilisation/polarization" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">13</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Polarization</h3>
                    <p className="text-gray-600 mb-4">Causes, consequences, and remedies for political and cultural divides</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/polarization">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/polarization/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/polarization/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 14 - Health and Healthcare Systems: US and UK Policy Challenges and Crises */}
            <Link to="/formation/anglais/civilisation/health-systems" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">14</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Health and Healthcare Systems: US and UK Policy Challenges and Crises</h3>
                    <p className="text-gray-600 mb-4">Comparative analysis of healthcare systems, policy reforms, workforce crises, and crisis management in 2025</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Link to="/formation/anglais/civilisation/health-systems">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          Explore Chapter
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/health/vocabulary">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                      <Link to="/formation/anglais/civilisation/health-systems/sample-essays">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Sample Essays
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Modal pour afficher le sujet rédigé */}
      {selectedSubject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedSubject.title}</h2>
                  <p className="text-sm text-gray-600">Sample Essay - English Civilization</p>
                </div>
              </div>
              <Button onClick={closeSubjectModal} variant="ghost" size="sm">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed font-medium">
                  {selectedSubject.content}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end">
              <Button onClick={closeSubjectModal} className="bg-blue-600 hover:bg-blue-700 text-white">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationAnglaisCivilisationPage;