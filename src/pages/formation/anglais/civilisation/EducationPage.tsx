import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, GraduationCap, BookOpen, Users, Building2, ArrowLeft, ArrowRight, AlertTriangle, Shield, Globe, Target, Scale } from 'lucide-react';

const EducationPage = () => {
  const keyTopics = [
    {
      title: "Culture Wars in Education",
      content: "School boards as battlegrounds, political campaigns, curriculum controversies, ideological conflicts",
      vocabulary: ["culture wars", "school boards", "indoctrination", "curriculum", "ideological conflicts"]
    },
    {
      title: "Curriculum Content Debates",
      content: "Race, history, gender, sexuality, critical race theory, decolonization, diverse histories",
      vocabulary: ["critical race theory", "decolonization", "diverse histories", "traditional narratives", "inclusive values"]
    },
    {
      title: "Book Bans and Censorship",
      content: "Library restrictions, banned books, LGBTQ+ issues, censorship, freedom of expression",
      vocabulary: ["book bans", "censorship", "freedom of expression", "library restrictions", "LGBTQ+ issues"]
    },
    {
      title: "Special Education Controversies",
      content: "Autism/ADHD diagnoses, neurodivergent students, support services, cost-cutting reforms",
      vocabulary: ["neurodivergent", "autism", "ADHD", "special needs", "support services"]
    }
  ];

  const essentialVocabulary = [
    { term: "culture wars", definition: "Intense conflicts over cultural values, beliefs, and social issues in society" },
    { term: "school boards", definition: "Elected bodies that govern local school districts and make educational policy decisions" },
    { term: "critical race theory", definition: "Academic framework examining how race and racism intersect with law and society" },
    { term: "decolonization", definition: "Process of challenging colonial perspectives and incorporating diverse cultural viewpoints" },
    { term: "indoctrination", definition: "Teaching someone to accept beliefs uncritically, often used as a political accusation" },
    { term: "neurodivergent", definition: "Having neurological differences such as autism, ADHD, or other developmental conditions" }
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
            <span className="text-foreground font-medium">Education and Culture Wars</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <Badge className="bg-blue-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Education and Culture Wars</CardTitle>
              <p className="text-muted-foreground">
                Educational institutions as battlegrounds in broader cultural and ideological conflicts
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Education Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">$3.2B</div>
                  <div className="text-sm text-blue-100">Diverted to security/legal costs</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2023-24</div>
                  <div className="text-sm text-blue-100">School year of major conflicts</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm text-blue-100">Labour government elected UK</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">Conservative</div>
                  <div className="text-sm text-blue-100">Previous UK government</div>
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
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Education Topics</h3>
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

            {/* US Education Culture Wars */}
            <AccordionItem value="us-education-culture-wars" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">US Education Culture Wars: School Boards as Battlegrounds</h3>
                    <p className="text-sm text-muted-foreground">Political campaigns and curriculum conflicts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Educational institutions have become central battlegrounds in broader culture wars. In the United States, school boards and curricula have faced heated political campaigns over how to teach topics like race, history, gender, and sexuality. After the pandemic, conservative activists targeted public schools with accusations of "indoctrination," leading to efforts to ban books and restrict teaching about racism or LGBTQ+ issues. These conflicts have had tangible costs: one study found schools diverted an estimated $3.2 billion in the 2023–24 year to handle security, legal fees, and PR to counteract such attacks.
                  </p>
                  <p className="text-justify leading-relaxed">
                    School officials report spending countless hours addressing disinformation and even facing harassment and threats amid this "nationalized conflict campaign". In one district, controversies over critical race theory and book bans forced attendees at board meetings to pass through metal detectors and cost hundreds of thousands of dollars in extra security and legal expenses. These education culture wars often invoke charged rhetoric – for example, some officials were baselessly smeared as "pedophiles" or accused of "grooming" children – reflecting how fiercely ideological and divisive school debates have become.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on education policy, political polarization, or freedom of expression in schools. It provides concrete data on financial costs and specific examples of security measures, making it useful for arguments about the real impact of culture wars on education. It can support points about the politicization of education or the challenges of maintaining academic freedom in polarized environments.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      battlegrounds; heated political campaigns; indoctrination; tangible costs; diverted; disinformation; harassment; threats; nationalized conflict campaign; controversies; metal detectors; charged rhetoric; baselessly smeared; grooming; fiercely ideological; divisive
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK Curriculum Debates */}
            <AccordionItem value="uk-curriculum-debates" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">UK Curriculum Debates: Decolonization vs Traditional Narratives</h3>
                    <p className="text-sm text-muted-foreground">Conservative guidance and Labour reforms</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the UK, similar debates are emerging over curriculum content and school policies, though often with a local twist. Disputes have erupted over efforts to "decolonize" the curriculum and teach more diverse histories, versus pushback that schools should focus on traditional narratives. Under the previous Conservative government, guidance was issued to bar teaching "critical" theories of gender and race, which some on the right saw as partisan. The new Labour government elected in late 2024 signaled it would review that guidance, reflecting an opposing view that schools should actively promote inclusive values.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Additionally, the UK's culture wars have extended to special education: commentators and even political figures questioned rising diagnoses of autism/ADHD as possible "scams" fueled by identity politics. This has sowed fear among parents of children with special needs, as the government considers reforms to cut costs in special education – a move critics warn could reduce support for many neurodivergent students. In short, from battles over library books in America to fights over history lessons and services for special-needs students in Britain, education has become a proxy arena for broader ideological conflicts in society.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for comparative education discussions or analysis of how different political systems handle similar cultural conflicts. It shows the evolution of policy under different governments and can be used to argue about the role of politics in education. It's also useful for discussions about special education funding and the intersection of identity politics with educational policy.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      local twist; decolonize; diverse histories; traditional narratives; guidance; partisan; inclusive values; special education; diagnoses; scams; identity politics; sowed fear; reforms; cut costs; neurodivergent; proxy arena; ideological conflicts
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Book Bans and Censorship */}
            <AccordionItem value="book-bans-censorship" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Book Bans and Censorship: Library Restrictions and Freedom of Expression</h3>
                    <p className="text-sm text-muted-foreground">Controversies over reading materials and LGBTQ+ content</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The culture wars in education have manifested most visibly in controversies over book bans and library restrictions. Conservative activists have targeted books dealing with LGBTQ+ issues, critical race theory, and diverse perspectives, arguing that such materials constitute inappropriate content for students. These efforts have led to the removal of hundreds of books from school libraries across the United States, with titles by authors of color and LGBTQ+ authors being particularly vulnerable to challenges.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The book banning movement has sparked intense debates about intellectual freedom, age-appropriate content, and parental rights versus educational autonomy. Proponents of restrictions argue that parents should have control over what their children read in school, while opponents see these actions as censorship that limits students' exposure to diverse viewpoints and real-world issues. The American Library Association has documented a significant increase in book challenges, with many targeting materials that address racism, gender identity, and sexual orientation. These controversies often reflect broader societal divisions and have become rallying points for both conservative and progressive political movements.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on intellectual freedom, censorship, or the role of libraries in education. It provides concrete examples of the book banning movement and can support arguments about the importance of diverse reading materials or the dangers of educational censorship. It's also useful for analyzing the tension between parental rights and educational autonomy.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      manifested; controversies; targeted; inappropriate content; removal; vulnerable; challenges; intellectual freedom; age-appropriate; parental rights; educational autonomy; censorship; diverse viewpoints; real-world issues; documented; rallying points; progressive
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Special Education Controversies */}
            <AccordionItem value="special-education-controversies" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Special Education Controversies: Autism/ADHD Diagnoses and Support Services</h3>
                    <p className="text-sm text-muted-foreground">Political debates over neurodivergent students and funding</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Special education has become another front in the education culture wars, particularly regarding the rising diagnoses of autism and ADHD among students. Some commentators and political figures have questioned whether the increase in diagnoses represents genuine medical need or is driven by identity politics and over-diagnosis. This skepticism has created a challenging environment for parents of children with special needs, who often face long waiting lists and battles with school districts to secure appropriate support services.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The debate over special education funding has intensified as governments seek to control costs. In the UK, the Conservative government's consideration of reforms to reduce special education spending has raised concerns that many neurodivergent students could lose vital support. Critics argue that such cost-cutting measures would disproportionately affect vulnerable students and could lead to increased educational inequality. The politicization of special education has made it difficult to have evidence-based discussions about the best ways to support students with diverse learning needs, as the issue has become entangled with broader ideological battles over education spending and social policy.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on special education policy, educational inequality, or the politicization of disability issues. It shows how funding decisions can impact vulnerable students and can be used to argue about the importance of evidence-based policy in education. It's also useful for analyzing how political ideology can interfere with educational best practices.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      front; diagnoses; genuine medical need; identity politics; over-diagnosis; skepticism; challenging environment; waiting lists; battles; secure; support services; intensified; cost-cutting measures; disproportionately; vulnerable students; educational inequality; politicization; evidence-based; entangled; ideological battles
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Impact on Students and Teachers */}
            <AccordionItem value="impact-students-teachers" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Impact on Students and Teachers: The Human Cost of Culture Wars</h3>
                    <p className="text-sm text-muted-foreground">Stress, uncertainty, and professional challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The education culture wars have taken a significant toll on both students and teachers, creating an environment of stress and uncertainty in schools. Teachers report feeling caught between competing demands from parents, administrators, and political groups, often unsure about what they can safely teach or discuss in their classrooms. Many educators have experienced harassment, threats, or professional consequences for addressing controversial topics, leading to self-censorship and a climate of fear in some school districts.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Students, meanwhile, are caught in the middle of these adult conflicts, with their educational experience becoming politicized. Some students report feeling that their identities or experiences are being debated and potentially invalidated by adults who have never met them. The constant controversy and uncertainty can create anxiety and make it difficult for students to focus on learning. Additionally, the diversion of resources to legal battles and security measures means less funding available for actual educational programs, potentially harming all students regardless of their political views or family background.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussing the human impact of political conflicts in education. It provides insight into how culture wars affect the daily lives of teachers and students, making it useful for arguments about the need to depoliticize education or protect educational professionals from political interference. It can also support points about the importance of stable, supportive learning environments.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      toll; stress; uncertainty; caught between; competing demands; harassment; threats; professional consequences; self-censorship; climate of fear; politicized; debated; invalidated; constant controversy; diversion; legal battles; depoliticize; political interference; stable; supportive learning environments
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
                    <h3 className="text-lg font-semibold">Essential Education Vocabulary</h3>
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
                      <h4 className="font-semibold mb-2">1. Education and Political Polarization</h4>
                      <p className="text-sm">
                        "Education has become a proxy arena for broader ideological conflicts in society." Discuss this statement with reference to recent developments in both the US and UK.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Curriculum Controversies</h4>
                      <p className="text-sm">
                        To what extent should schools be required to teach diverse perspectives on history and social issues? Discuss with reference to debates over decolonization and critical race theory.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Book Bans and Censorship</h4>
                      <p className="text-sm">
                         "Book bans in schools represent a threat to intellectual freedom." Assess this claim by examining recent controversies and their implications for education.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Special Education Funding</h4>
                      <p className="text-sm">
                        How should governments balance the need to control education costs with the responsibility to provide adequate support for students with special needs?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Teacher Autonomy vs Parental Rights</h4>
                      <p className="text-sm">
                        "Parents should have the final say over what their children learn in school." Discuss this statement in light of recent education culture wars.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Impact on Learning Environment</h4>
                      <p className="text-sm">
                        To what extent do political conflicts in education harm the learning experience of students? Analyze the evidence and discuss potential solutions.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. International Comparisons</h4>
                      <p className="text-sm">
                        Compare how the US and UK have handled education culture wars. What factors explain the similarities and differences in their approaches?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of Education Policy</h4>
                      <p className="text-sm">
                        How can education systems navigate cultural and political divisions while maintaining academic standards and supporting all students?
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
            <Link to="/formation/anglais/civilisation/media">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                Next: Media and Social Networks
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage; 