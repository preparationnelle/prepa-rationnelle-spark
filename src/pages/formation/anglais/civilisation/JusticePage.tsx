import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Scale, Shield, Users, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock } from 'lucide-react';

const JusticePage = () => {
  const keyTopics = [
    {
      title: "Rule of Law Principles",
      content: "Laws apply equally to all, government power constrained by law, democratic stability",
      vocabulary: ["rule of law", "government power", "constrained by law", "democratic stability", "accountability"]
    },
    {
      title: "Judicial Independence",
      content: "Court impartiality, prosecutorial independence, separation of powers, checks and balances",
      vocabulary: ["judicial independence", "impartiality", "prosecutorial independence", "separation of powers", "checks and balances"]
    },
    {
      title: "Government Overreach",
      content: "Executive power expansion, hasty legislation, Henry VIII powers, parliamentary oversight",
      vocabulary: ["executive power", "hasty legislation", "Henry VIII powers", "parliamentary oversight", "transparency"]
    },
    {
      title: "Access to Justice",
      content: "Legal aid cuts, case backlogs, court delays, equal protection under law",
      vocabulary: ["legal aid", "case backlogs", "court delays", "equal protection", "justice system"]
    }
  ];

  const essentialVocabulary = [
    { term: "rule of law", definition: "The principle that laws apply equally to all and government power is constrained by law" },
    { term: "judicial independence", definition: "The principle that courts should be free from political interference" },
    { term: "checks and balances", definition: "System of controls that limit the power of different branches of government" },
    { term: "Henry VIII powers", definition: "Executive powers allowing ministers to change laws by decree with minimal parliamentary oversight" },
    { term: "separation of powers", definition: "Division of government responsibilities into distinct branches to prevent concentration of power" },
    { term: "accountability", definition: "The obligation to answer for one's actions and accept responsibility for them" }
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
            <span className="text-foreground font-medium">Justice and the Rule of Law</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-indigo-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500 text-white">
                  <Scale className="h-5 w-5" />
                </div>
                <Badge className="bg-indigo-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Justice and the Rule of Law</CardTitle>
              <p className="text-muted-foreground">
                Rule of law challenges, judicial independence, and democratic accountability
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Justice Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm text-indigo-100">US election certification</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2021</div>
                  <div className="text-sm text-indigo-100">Capitol riot January 6</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">62K+</div>
                  <div className="text-sm text-indigo-100">Pending Crown Court cases UK</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">2023</div>
                  <div className="text-sm text-indigo-100">Illegal Migration Act UK</div>
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
                  <div className="p-2 rounded-lg bg-indigo-500 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Justice Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-indigo-500">
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

            {/* US Justice System Challenges */}
            <AccordionItem value="us-justice-challenges" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">US Justice System: Stress-Testing the Rule of Law</h3>
                    <p className="text-sm text-muted-foreground">High-profile cases and political accountability</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Respect for the rule of law – the principle that laws apply equally to all, and that government power is constrained by law – has been tested in recent years. In the United States, the justice system has been stress-tested by high-profile cases involving political figures. The ongoing prosecutions of former President Donald Trump epitomize this tension. Trump has been indicted in multiple cases on charges ranging from mishandling classified information to conspiring to overturn the 2020 election. The fact that a former president can face trial is itself a statement about rule of law: prosecutors and judges have repeatedly affirmed that no one is above the law, and that even political leaders must be accountable under the same rules as ordinary citizens.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Many legal experts hailed these moves as a sign of a healthy democracy, arguing that holding high-ranking officials to account is critical for long-term democratic stability. At the same time, Trump and his allies attacked the legitimacy of the investigations, claiming political bias and even vowing retribution, which has fueled public distrust among his supporters. This has put institutions in a delicate position: they must demonstrate impartial justice in a hyper-partisan environment. Nonetheless, the courts – from trial judges up to the Supreme Court – have so far proceeded methodically, for example repeatedly rejecting claims of "presidential immunity" to prosecution. The U.S. Department of Justice, too, has stressed its independence in these matters. Overall, while American democracy showed its resilience (e.g. courts and Congress certified the 2020 election despite pressure), concerns linger about continued politicization of the judiciary and threats of violence (like the Capitol riot on January 6, 2021) that challenged the peaceful transfer of power.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on the rule of law, judicial independence, or democratic accountability. It provides concrete examples of how the justice system handles high-profile political cases and can support arguments about the strength of democratic institutions or the importance of equal treatment under the law. It's also useful for analyzing the tension between political pressure and judicial independence.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      rule of law; constrained by law; stress-tested; high-profile cases; epitomize; tension; indicted; mishandling; conspiring; overturn; prosecutors; affirmed; above the law; accountable; hailed; healthy democracy; holding to account; democratic stability; legitimacy; political bias; vowed retribution; fueled distrust; delicate position; impartial justice; hyper-partisan; methodically; presidential immunity; politicization; peaceful transfer of power
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK Rule of Law Debates */}
            <AccordionItem value="uk-rule-law-debates" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">UK Rule of Law: Government Overreach and Erosion of Checks</h3>
                    <p className="text-sm text-muted-foreground">Executive power expansion and judicial pushback</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the United Kingdom, rule of law debates have centered on government overreach and the erosion of checks and balances. A 2024 report by legal charity JUSTICE warned that the UK's commitment to rule of law has "regressed significantly on multiple fronts," undermining the democratic fabric. The report cited examples: hastily passed legislation with little scrutiny, more frequent use of "Henry VIII powers" (where ministers can change laws by decree with minimal parliamentary oversight), and open disregard for international or human rights obligations.
                  </p>
                  <p className="text-justify leading-relaxed">
                    For instance, the Illegal Migration Act 2023 – which aimed to bar asylum seekers arriving irregularly from ever settling in Britain – was pushed through without any public consultation, raising alarms about transparency. Similarly, new anti-protest laws in 2023 gave police sweeping authority to curb demonstrations causing even "more than minor" disruption; judges later struck down these regulations as unlawfully broad, rebuking ministers for exceeding their powers. This judicial pushback – the Court of Appeal ruling that officials cannot simply "step outside" the law – was hailed as a victory for democratic checks and balances. Additionally, years of budget cuts to legal aid and a backlog of cases have effectively limited access to justice for many Britons. As of early 2023, over 62,000 cases were pending in Crown Courts and hundreds of thousands in lower courts, delaying trials for victims and defendants.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on executive power, parliamentary oversight, or the role of courts in maintaining democratic balance. It provides specific examples of legislative overreach and judicial responses, making it useful for arguments about the importance of checks and balances or the need for transparent law-making processes. It can also support points about the impact of budget cuts on access to justice.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      government overreach; erosion; checks and balances; regressed significantly; democratic fabric; hastily passed legislation; scrutiny; Henry VIII powers; decree; parliamentary oversight; disregard; obligations; bar; asylum seekers; irregularly; pushed through; public consultation; transparency; sweeping authority; curb demonstrations; struck down; unlawfully broad; rebuking; exceeding powers; judicial pushback; step outside; victory; budget cuts; legal aid; backlog; pending; Crown Courts; delaying trials
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Judicial Independence and Impartiality */}
            <AccordionItem value="judicial-independence" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Judicial Independence: Maintaining Impartiality in Political Storms</h3>
                    <p className="text-sm text-muted-foreground">Court impartiality and prosecutorial independence</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The principle of judicial independence – that courts should be free from political interference and make decisions based solely on the law – has faced unprecedented challenges in recent years. In the United States, the Department of Justice has repeatedly stressed its independence in politically sensitive matters, particularly in cases involving former political leaders. Prosecutors have emphasized that their decisions are based on evidence and legal standards, not political considerations. This commitment to impartial justice has been crucial in maintaining public confidence in the legal system during highly partisan times.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Courts at all levels have demonstrated their independence by rejecting political pressure and ruling according to established legal principles. For example, multiple courts have rejected claims of "presidential immunity" from prosecution, affirming that no individual, regardless of their position, is above the law. The Supreme Court has maintained its role as a check on executive power, even when its decisions have been politically controversial. This judicial independence has been essential in preserving the separation of powers and ensuring that the rule of law remains the foundation of democratic governance. However, the increasing politicization of judicial appointments and the growing tendency to view court decisions through partisan lenses pose ongoing challenges to maintaining this independence.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on judicial independence, the separation of powers, or the role of courts in democracy. It provides concrete examples of how courts maintain their independence and can support arguments about the importance of an impartial judiciary or the challenges of maintaining judicial independence in polarized environments. It's also useful for analyzing the relationship between courts and other branches of government.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      judicial independence; political interference; decisions; evidence; legal standards; political considerations; impartial justice; public confidence; legal system; partisan; demonstrated; rejecting; political pressure; established legal principles; presidential immunity; above the law; separation of powers; foundation; democratic governance; politicization; judicial appointments; partisan lenses; ongoing challenges
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Access to Justice and Legal Aid */}
            <AccordionItem value="access-justice" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Access to Justice: Legal Aid Cuts and Court Backlogs</h3>
                    <p className="text-sm text-muted-foreground">Equal protection and systemic delays</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Equal access to justice – a fundamental principle of the rule of law – has been significantly compromised in recent years, particularly in the United Kingdom. Years of budget cuts to legal aid have created a situation where many individuals cannot afford legal representation, effectively limiting their ability to navigate the justice system. This has created a two-tier system where those with financial resources can access quality legal representation while others are left to represent themselves or forgo their legal rights entirely.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The impact of these cuts has been compounded by massive court backlogs that delay justice for everyone. As of early 2023, over 62,000 cases were pending in Crown Courts alone, with hundreds of thousands more in lower courts. These delays affect both victims seeking justice and defendants awaiting trial, creating a situation where justice delayed becomes justice denied. The COVID-19 pandemic further exacerbated these backlogs, as court closures and social distancing measures slowed proceedings to a crawl. While some efforts have been made to address these issues through digital court systems and alternative dispute resolution, the fundamental problem of inadequate funding for the justice system remains. This situation raises serious questions about whether the principle of equal protection under the law can be maintained when access to justice is so clearly dependent on financial resources.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on access to justice, legal aid funding, or the impact of budget cuts on the justice system. It provides concrete data on court backlogs and can support arguments about the importance of adequate funding for justice or the consequences of creating barriers to legal representation. It's also useful for analyzing the relationship between financial resources and access to justice.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      equal access to justice; fundamental principle; compromised; budget cuts; legal aid; legal representation; navigate; justice system; two-tier system; financial resources; quality legal representation; forgo; legal rights; compounded; massive court backlogs; delay justice; pending; Crown Courts; victims; defendants; justice delayed; justice denied; exacerbated; court closures; social distancing; proceedings; digital court systems; alternative dispute resolution; inadequate funding; equal protection under the law; dependent on
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* International Perspectives and Human Rights */}
            <AccordionItem value="international-perspectives" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">International Perspectives: Human Rights and International Law</h3>
                    <p className="text-sm text-muted-foreground">Global standards and domestic compliance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The rule of law is not just a domestic concern but also involves compliance with international legal obligations and human rights standards. The UK's approach to international law has come under scrutiny, particularly regarding its treatment of asylum seekers and migrants. The Illegal Migration Act 2023, which aimed to bar irregular arrivals from ever settling in Britain, raised concerns about compliance with international refugee law and human rights obligations. Legal experts and international organizations warned that such measures could violate the principle of non-refoulement and other fundamental human rights protections.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Similarly, the UK's approach to international trade agreements and its relationship with the European Court of Human Rights has been questioned. Some government officials have suggested that the UK should consider withdrawing from certain international human rights frameworks, arguing that they limit domestic policy choices. However, others maintain that international legal obligations are essential for maintaining the UK's reputation as a country that respects the rule of law and human rights. This tension between national sovereignty and international legal obligations reflects broader debates about how countries balance domestic interests with global responsibilities. The challenge for the UK and other nations is to find ways to pursue their policy objectives while remaining compliant with international law and maintaining their commitment to human rights standards.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on international law, human rights, or the tension between national sovereignty and global obligations. It provides concrete examples of how domestic policies can conflict with international standards and can support arguments about the importance of international legal frameworks or the challenges of balancing domestic and international interests. It's also useful for analyzing the role of international law in maintaining human rights standards.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      domestic concern; compliance; international legal obligations; human rights standards; approach; scrutiny; treatment; asylum seekers; migrants; irregular arrivals; concerns; compliance; international refugee law; human rights obligations; legal experts; international organizations; violate; principle of non-refoulement; fundamental human rights protections; international trade agreements; European Court of Human Rights; withdrawing; international human rights frameworks; limit; domestic policy choices; international legal obligations; reputation; rule of law; tension; national sovereignty; global responsibilities; policy objectives; compliant; commitment; human rights standards
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
                    <h3 className="text-lg font-semibold">Essential Justice Vocabulary</h3>
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
                  <div className="p-2 rounded-lg bg-indigo-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Rule of Law and Democracy</h4>
                      <p className="text-sm">
                        "The rule of law is the foundation of democratic governance." Discuss this statement with reference to recent challenges in both the US and UK.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Judicial Independence</h4>
                      <p className="text-sm">
                        To what extent can judicial independence be maintained in highly politicized environments? Analyze with reference to contemporary examples.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Executive Power and Checks</h4>
                      <p className="text-sm">
                         "Government overreach threatens the rule of law." Assess this claim by examining recent developments in executive power expansion.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Access to Justice</h4>
                      <p className="text-sm">
                        How do budget cuts to legal aid and court backlogs affect the principle of equal protection under the law?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. International Law Compliance</h4>
                      <p className="text-sm">
                        "National sovereignty should take precedence over international legal obligations." Discuss this statement with reference to human rights and refugee law.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Political Accountability</h4>
                      <p className="text-sm">
                        To what extent should former political leaders be held accountable under the same legal standards as ordinary citizens?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Court Backlogs and Delays</h4>
                      <p className="text-sm">
                        "Justice delayed is justice denied." Assess this claim by examining the impact of court backlogs on victims and defendants.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of the Rule of Law</h4>
                      <p className="text-sm">
                        How can democratic societies maintain robust rule of law while addressing contemporary challenges like political polarization and executive overreach?
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
            <Link to="/formation/anglais/civilisation/inequalities">
              <Button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600">
                Next: Social and Racial Inequalities
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JusticePage; 