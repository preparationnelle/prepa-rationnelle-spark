import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Users, Shield, Building2, ArrowLeft, ArrowRight, AlertTriangle, Globe, Target, Zap, Crown, Lock, TrendingUp, TrendingDown } from 'lucide-react';

const InequalitiesPage = () => {
  const keyTopics = [
    {
      title: "Wealth and Income Disparities",
      content: "Racial wealth gaps, income inequality, Fortune 500 representation, minimum wage workforce",
      vocabulary: ["wealth gap", "racial lines", "disproportionate share", "median net worth", "income disparities", "low-wage jobs", "Fortune 500 CEOs"]
    },
    {
      title: "Health and Education Inequalities",
      content: "Life expectancy gaps, school resources, healthcare access, COVID-19 impact, child poverty rates",
      vocabulary: ["life expectancy", "school resources", "healthcare access", "infection rates", "mortality rates", "child poverty", "pandemic relief"]
    },
    {
      title: "Structural Racism and Discrimination",
      content: "Systemic exclusion, police treatment, workplace discrimination, educational attainment gaps",
      vocabulary: ["structural racism", "systemic exclusion", "stop-and-search", "workplace discrimination", "attainment gaps", "racial abuse"]
    },
    {
      title: "Regional and Socioeconomic Disparities",
      content: "North-South divide UK, regional lag, housing inequality, employment gaps, living costs",
      vocabulary: ["regional disparities", "Northern England", "Midlands", "Wales", "London", "Southeast", "housing inequality", "employment gaps"]
    }
  ];

  const essentialVocabulary = [
    { term: "wealth gap", definition: "The difference in wealth between different groups, often measured by race, class, or region" },
    { term: "structural racism", definition: "Systemic patterns of discrimination and inequality embedded in social institutions and policies" },
    { term: "median net worth", definition: "The middle value of household wealth, with half above and half below this amount" },
    { term: "K-shaped recovery", definition: "Economic recovery where different groups recover at different rates, creating diverging outcomes" },
    { term: "systemic exclusion", definition: "Long-term patterns that prevent certain groups from accessing opportunities and resources" },
    { term: "racial inequality", definition: "Disparities in outcomes and opportunities based on racial or ethnic background" }
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
            <span className="text-foreground font-medium">Social and Racial Inequalities</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-500/30 mb-8">
            <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-500 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <Badge className="bg-red-500">Civilization</Badge>
                <span className="text-sm text-muted-foreground">Updated 2025</span>
              </div>
              <CardTitle className="text-2xl">Social and Racial Inequalities</CardTitle>
              <p className="text-muted-foreground">
                Wealth gaps, racial disparities, and systemic inequalities in contemporary society
              </p>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-gradient-to-r from-red-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Key Inequality Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">84.2%</div>
                  <div className="text-sm text-red-100">White households wealth share US</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">3.4%</div>
                  <div className="text-sm text-red-100">Black families wealth share US</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm text-red-100">Top 1% wealth share US</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">12.4%</div>
                  <div className="text-sm text-red-100">US child poverty rate 2022</div>
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
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Inequality Topics</h3>
                    <p className="text-sm text-muted-foreground">Essential themes and concepts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4">
                  {keyTopics.map((topic, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500">
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

            {/* US Wealth and Racial Disparities */}
            <AccordionItem value="us-wealth-disparities" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">US Wealth Gap: Racial Disparities and Economic Inequality</h3>
                    <p className="text-sm text-muted-foreground">Centuries of exclusion and systemic racism</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Despite some social progress, deep economic and racial inequalities persist in both the US and UK, often highlighted and exacerbated by recent crises. In the United States, the wealth gap remains enormous – especially along racial lines. White households control a vastly disproportionate share of wealth: as of late 2023, white Americans (about 66% of households) held 84.2% of total U.S. wealth. By contrast, Black families (11.4% of households) owned only 3.4% of wealth, and Hispanic families (9.6% of households) just 2.3%. The median Black family's net worth (around $44,100) is barely 16% of the median white family's wealth – a gap reflective of centuries of exclusion and systemic racism.
                  </p>
                  <p className="text-justify leading-relaxed">
                    This racial wealth divide has seen only marginal improvement over decades. Income disparities, too, persist: for example, Black workers and other minorities are overrepresented in low-wage jobs and underrepresented at the top. By one count, as of 2023 only 4% of Fortune 500 CEOs were Black or Latino, even though those groups comprise 43% of the low-wage workforce that would benefit from a higher minimum wage. Social inequalities also manifest in health and education – gaps in life expectancy and school resources – often tracking race and class.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on wealth inequality, racial disparities, or systemic racism. It provides concrete statistics on wealth distribution and can support arguments about the persistence of racial inequality or the need for economic reforms. It's also useful for analyzing the relationship between race, class, and economic outcomes in contemporary America.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      social progress; deep economic inequalities; racial inequalities; highlighted; exacerbated; recent crises; wealth gap; enormous; racial lines; white households; control; vastly disproportionate share; total U.S. wealth; Black families; Hispanic families; median Black family's net worth; median white family's wealth; gap reflective; centuries of exclusion; systemic racism; racial wealth divide; marginal improvement; decades; income disparities; persist; Black workers; minorities; overrepresented; low-wage jobs; underrepresented; Fortune 500 CEOs; low-wage workforce; benefit; higher minimum wage; social inequalities; manifest; health; education; gaps; life expectancy; school resources; tracking race and class
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* COVID-19 Impact and Pandemic Relief */}
            <AccordionItem value="covid-19-impact" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">COVID-19 Pandemic: Exacerbating Inequalities and Uneven Recovery</h3>
                    <p className="text-sm text-muted-foreground">Health disparities and economic fallout</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The COVID-19 pandemic threw these inequities into stark relief. In the pandemic's initial waves, Black and Latino Americans suffered higher infection and mortality rates, partly due to crowded housing and frontline jobs, as well as disparities in healthcare access. Economic fallout hit low-income workers hardest. Pandemic relief measures did temporarily narrow some gaps – for instance, stimulus payments and an expanded Child Tax Credit in 2021 briefly cut U.S. child poverty to a record low. But once those supports expired, poverty rebounded.
                  </p>
                  <p className="text-justify leading-relaxed">
                    In 2022, the child poverty rate more than doubled from 5.2% to 12.4%, erasing those gains. Overall U.S. poverty in 2022 (12.4%) marked the first increase in 13 years, driven largely by the end of pandemic aid. This reversal highlighted how many families remain one policy change away from hardship – and how uneven the recovery was. Meanwhile, the top end of the spectrum largely prospered through the past few years: billionaire wealth and corporate profits soared, contributing to perceptions of a "K-shaped" recovery where the affluent thrived even as many struggled. The richest 1% of Americans now own roughly 30% of the nation's wealth, a share not seen in living memory.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on the impact of crises on inequality, pandemic relief policies, or economic recovery patterns. It provides concrete data on poverty rates and can support arguments about the effectiveness of government interventions or the nature of economic recovery. It's also useful for analyzing how external shocks can both reveal and exacerbate existing inequalities.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      COVID-19 pandemic; threw; inequities; stark relief; initial waves; Black and Latino Americans; suffered; higher infection rates; mortality rates; crowded housing; frontline jobs; disparities; healthcare access; economic fallout; hit hardest; low-income workers; pandemic relief measures; temporarily narrow; gaps; stimulus payments; expanded Child Tax Credit; briefly cut; child poverty; record low; supports expired; poverty rebounded; more than doubled; erasing gains; overall U.S. poverty; first increase; 13 years; driven largely; end of pandemic aid; reversal; highlighted; families remain; policy change away; hardship; uneven recovery; top end of spectrum; largely prospered; billionaire wealth; corporate profits; soared; contributing; perceptions; K-shaped recovery; affluent thrived; struggled; richest 1%; roughly 30%; nation's wealth; share not seen; living memory
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* UK Regional and Racial Inequalities */}
            <AccordionItem value="uk-inequalities" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">UK Inequalities: Regional Disparities and Racial Discrimination</h3>
                    <p className="text-sm text-muted-foreground">North-South divide and ethnic inequalities</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    In the UK, socioeconomic and racial inequalities are likewise entrenched. Regional disparities mean that parts of Northern England, the Midlands, and Wales lag well behind London and the Southeast in income and health outcomes. A 2023 survey – the largest on UK racial equality in decades – concluded Britain is "not close to being a racially just society," finding "substantial ethnic inequalities" across education, employment, housing and policing. More than a third of ethnic minority Britons reported experiencing racially motivated abuse. Unemployment and poverty rates are higher among Black, Pakistani, and Bangladeshi Britons compared to white Britons.
                  </p>
                  <p className="text-justify leading-relaxed">
                    There is a 10-fold gap in median wealth between Black African families and White British families, according to one analysis. These disparities fuel ongoing debates about structural racism. The 2020–21 Black Lives Matter protests in the UK shone a light on issues like disproportionate police stop-and-search of Black youths and the underrepresentation of minorities in positions of power. In response, some government-commissioned reports (like the 2021 Sewell report) controversially downplayed structural racism, but grassroots research and lived experiences strongly contradict that rosy view. For instance, one in four minority respondents say they faced discrimination in education or the workplace. In policing, over 40% of Black Caribbean people report unfair treatment by police, far above the average. These statistics underscore that racial inequality remains a day-to-day reality for millions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on UK inequalities, regional disparities, or structural racism. It provides concrete examples of discrimination and can support arguments about the persistence of racial inequality in the UK or the need for institutional reforms. It's also useful for analyzing the relationship between regional development and social inequality.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      socioeconomic inequalities; racial inequalities; entrenched; regional disparities; Northern England; Midlands; Wales; lag well behind; London; Southeast; income; health outcomes; survey; largest; UK racial equality; decades; concluded; not close; racially just society; substantial ethnic inequalities; education; employment; housing; policing; ethnic minority Britons; reported; experiencing; racially motivated abuse; unemployment rates; poverty rates; Black; Pakistani; Bangladeshi Britons; compared to; white Britons; 10-fold gap; median wealth; Black African families; White British families; analysis; disparities fuel; ongoing debates; structural racism; Black Lives Matter protests; shone a light; issues; disproportionate police stop-and-search; Black youths; underrepresentation; minorities; positions of power; government-commissioned reports; Sewell report; controversially downplayed; structural racism; grassroots research; lived experiences; strongly contradict; rosy view; minority respondents; faced discrimination; education; workplace; policing; Black Caribbean people; report; unfair treatment; police; far above; average; statistics underscore; racial inequality; day-to-day reality; millions
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Social Movements and Advocacy */}
            <AccordionItem value="social-movements" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Social Movements and Advocacy: Pushing for Reforms</h3>
                    <p className="text-sm text-muted-foreground">Grassroots activism and institutional change</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Social movements and advocacy groups continue to push for reforms – whether it's closing school attainment gaps, ensuring fair wages (as the UK experiences a wave of strikes over pay not keeping up with living costs), or diversifying leadership in institutions. The Black Lives Matter movement, which gained global prominence in 2020, has continued to highlight issues of police brutality, racial profiling, and systemic discrimination. These movements have succeeded in bringing issues of racial inequality to the forefront of public discourse and have pressured institutions to implement diversity and inclusion initiatives.
                  </p>
                  <p className="text-justify leading-relaxed">
                    However, the effectiveness of these reforms remains debated. While some companies and institutions have made progress in diversifying their leadership and addressing workplace discrimination, critics argue that many changes are superficial and don't address the root causes of inequality. The ongoing cost-of-living crisis in the UK, which has disproportionately affected low-income and minority communities, has further highlighted the need for systemic change. Strikes across various sectors – from healthcare workers to teachers to transport workers – have brought attention to issues of fair pay and working conditions, particularly for those in essential but often undervalued roles.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is valuable for discussions on social movements, advocacy, or institutional reform. It provides concrete examples of activism and can support arguments about the effectiveness of grassroots movements or the need for systemic change. It's also useful for analyzing the relationship between social activism and institutional responses.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      social movements; advocacy groups; push for reforms; closing school attainment gaps; ensuring fair wages; wave of strikes; pay not keeping up; living costs; diversifying leadership; institutions; Black Lives Matter movement; gained global prominence; highlight issues; police brutality; racial profiling; systemic discrimination; succeeded; bringing issues; racial inequality; forefront; public discourse; pressured institutions; implement; diversity and inclusion initiatives; effectiveness; reforms; debated; companies; institutions; made progress; diversifying leadership; addressing workplace discrimination; critics argue; changes; superficial; root causes; inequality; ongoing cost-of-living crisis; disproportionately affected; low-income; minority communities; highlighted; need for systemic change; strikes; various sectors; healthcare workers; teachers; transport workers; brought attention; fair pay; working conditions; essential; undervalued roles
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Health and Educational Inequalities */}
            <AccordionItem value="health-education-inequalities" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Health and Educational Inequalities: Interconnected Challenges</h3>
                    <p className="text-sm text-muted-foreground">Life expectancy gaps and school resource disparities</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Health and educational inequalities are deeply interconnected and often reinforce each other, creating cycles of disadvantage that persist across generations. In the United States, racial and ethnic minorities face significant disparities in healthcare access, quality, and outcomes. Black Americans, for example, have lower life expectancy than white Americans, with the gap widening in recent years. These health disparities are linked to various factors including limited access to quality healthcare, environmental factors like air pollution and food deserts, and the stress of experiencing discrimination and economic insecurity.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Educational inequalities similarly reflect and perpetuate broader social disparities. Schools in low-income and minority communities often receive less funding, have fewer resources, and employ less experienced teachers compared to schools in wealthier areas. This resource gap contributes to achievement gaps, which in turn affect future employment opportunities and income potential. The COVID-19 pandemic further exposed these educational inequalities, as students from disadvantaged backgrounds were less likely to have access to reliable internet, computers, or quiet study spaces for remote learning. These challenges highlight how inequalities in one area can compound and create barriers in others, making it difficult for individuals and communities to break out of cycles of disadvantage.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-blue-700">
                      This paragraph is excellent for discussions on health disparities, educational inequality, or the interconnected nature of social problems. It provides concrete examples of how different forms of inequality reinforce each other and can support arguments about the need for comprehensive approaches to social reform. It's also useful for analyzing the long-term consequences of inequality.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Vocabulary:</h4>
                    <p className="text-sm text-green-700">
                      health inequalities; educational inequalities; deeply interconnected; reinforce each other; cycles of disadvantage; persist; generations; racial and ethnic minorities; face; significant disparities; healthcare access; quality; outcomes; Black Americans; lower life expectancy; white Americans; gap widening; recent years; health disparities; linked; various factors; limited access; quality healthcare; environmental factors; air pollution; food deserts; stress; experiencing discrimination; economic insecurity; educational inequalities; reflect; perpetuate; broader social disparities; low-income; minority communities; receive less funding; fewer resources; less experienced teachers; compared to; wealthier areas; resource gap; contributes to; achievement gaps; affect; future employment opportunities; income potential; COVID-19 pandemic; exposed; educational inequalities; disadvantaged backgrounds; less likely; access; reliable internet; computers; quiet study spaces; remote learning; challenges highlight; inequalities; compound; create barriers; difficult; individuals; communities; break out; cycles of disadvantage
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
                    <h3 className="text-lg font-semibold">Essential Inequality Vocabulary</h3>
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
                  <div className="p-2 rounded-lg bg-red-500 text-white">
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
                      <h4 className="font-semibold mb-2">1. Wealth Inequality and Race</h4>
                      <p className="text-sm">
                        "Racial wealth gaps in the US reflect centuries of systemic exclusion." Discuss this statement with reference to contemporary data and policies.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">2. COVID-19 and Inequality</h4>
                      <p className="text-sm">
                        To what extent did the COVID-19 pandemic both reveal and exacerbate existing social inequalities?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Regional Disparities in the UK</h4>
                      <p className="text-sm">
                         "The North-South divide in the UK represents more than just economic inequality." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Structural Racism and Institutions</h4>
                      <p className="text-sm">
                        How do institutions perpetuate racial inequalities, and what reforms are needed to address them?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">5. Social Movements and Change</h4>
                      <p className="text-sm">
                        "Social movements are more effective at raising awareness than achieving lasting change." Discuss this statement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">6. Education and Social Mobility</h4>
                      <p className="text-sm">
                        To what extent can education overcome social and economic inequalities?
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">7. Health Inequalities and Social Determinants</h4>
                      <p className="text-sm">
                        "Health outcomes are determined more by social factors than by medical care." Assess this claim.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">8. Future of Inequality</h4>
                      <p className="text-sm">
                        How can societies address persistent inequalities while maintaining economic growth and social cohesion?
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
            <Link to="/formation/anglais/civilisation/civil-rights">
              <Button className="flex items-center gap-2 bg-red-500 hover:bg-red-600">
                Next: Civil Rights and Social Movements
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InequalitiesPage; 