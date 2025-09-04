import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Heart, Shield, Users, Building2, ArrowLeft, ArrowRight, AlertTriangle, Brain, Pill, Stethoscope, Virus, TrendingUp, Globe, Activity } from 'lucide-react';

const HealthSystemsPage = () => {
  const keyTopics = [
    {
      title: "Healthcare System Models",
      content: "NHS vs US system, universal coverage, private insurance, structural differences",
      vocabulary: ["NHS", "universal healthcare", "single-payer", "private insurance", "Medicare", "Medicaid"]
    },
    {
      title: "Health Outcomes & Spending",
      content: "Comparative outcomes, spending disparities, health inequalities, life expectancy",
      vocabulary: ["health outcomes", "cardiovascular health", "maternal mortality", "health disparities", "GDP spending"]
    },
    {
      title: "Policy Reforms 2025",
      content: "Drug price negotiations, workforce restructuring, financial crises, policy shifts",
      vocabulary: ["Inflation Reduction Act", "Medicare negotiations", "workforce gap", "financial deficit"]
    },
    {
      title: "Workforce & Mental Health",
      content: "Staff shortages, burnout, mental health crisis, treatment gaps",
      vocabulary: ["workforce shortage", "physician burnout", "mental health crisis", "treatment gap", "waiting times"]
    }
  ];

  const essentialVocabulary = [
    { term: "NHS (National Health Service)", definition: "The UK's universal healthcare system funded through taxation" },
    { term: "single-payer system", definition: "Healthcare system where the government is the sole insurer" },
    { term: "health disparities", definition: "Differences in health outcomes between different population groups" },
    { term: "Medicare drug negotiations", definition: "Government program to negotiate lower prescription drug prices" },
    { term: "workforce shortage", definition: "Insufficient number of healthcare workers to meet population needs" },
    { term: "telehealth", definition: "Remote healthcare delivery using digital technologies" }
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
            <span className="font-medium">Health and Healthcare Systems: US and UK Policy Challenges</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header minimaliste + stats sobres */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Health and Healthcare Systems: US and UK Policy Challenges and Crises</h1>
            <p className="text-sm text-black/70 mt-1">Comparative analysis • Policy reforms • 2025 challenges</p>
          </div>
          <Card className="mb-8 border border-orange-200">
            <CardHeader className="py-3">
              <CardTitle className="text-xl">Key Healthcare Facts 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">£6.6bn</div>
                  <div className="text-sm text-black/70">NHS deficit 2025/26</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">3.2M</div>
                  <div className="text-sm text-black/70">US healthcare worker shortage</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">28M</div>
                  <div className="text-sm text-black/70">Uninsured Americans</div>
                </div>
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="text-2xl font-bold">2.78x</div>
                  <div className="text-sm text-black/70">US drug spending vs others</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Accordion type="multiple" className="w-full space-y-4">

            {/* Overview: Two Systems Under Pressure */}
            <AccordionItem value="overview" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Overview: Two Systems Under Pressure</h3>
                    <p className="text-sm text-muted-foreground">Fundamental differences and shared challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    Both the United States and United Kingdom face unprecedented healthcare challenges in 2025, though manifesting in different ways due to their fundamentally distinct healthcare models. <strong>The UK's National Health Service (NHS) represents universal healthcare funded through taxation, while the US operates a hybrid system mixing private insurance, employer-based coverage, and government programs</strong> serving distinct populations. Despite these structural differences, both systems confront similar pressures: workforce shortages, financial constraints, mental health crises, and the lasting impacts of COVID-19.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Insight:</h4>
                    <p className="text-sm text-orange-700">
                      Despite fundamentally different approaches to healthcare delivery and financing, both systems face remarkably similar challenges in 2025, highlighting universal pressures on modern healthcare systems.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Healthcare System Foundations and Performance */}
            <AccordionItem value="foundations" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Healthcare System Foundations and Performance</h3>
                    <p className="text-sm text-muted-foreground">Structural differences, outcomes, and inequalities</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Structural Differences</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>The NHS operates as a universal system where healthcare is considered a human right</strong>, providing comprehensive coverage to all UK residents without direct charges at the point of care. In contrast, <strong>the US system relies heavily on private insurance and employer-sponsored plans</strong>, with Medicare and Medicaid serving specific populations while leaving approximately 28 million Americans uninsured.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Comparative Outcomes and Spending</h4>
                    <p className="text-justify leading-relaxed">
                      Despite spending significantly more per capita, <strong>the US system underperforms the UK across multiple health outcomes</strong>. Research from UCL demonstrates that <strong>British adults in their 30s and 40s have better cardiovascular health than their US counterparts</strong>, with lower rates of obesity (34.5% vs 40.4%), hypertension (19.3% vs 30.4%), and high cholesterol.
                    </p>
                    <p className="text-justify leading-relaxed">
                      <strong>Healthcare spending disparities are dramatic</strong>: the US spends nearly 2.78 times more than other developed countries on prescription drugs, while <strong>UK healthcare spending as a percentage of GDP remains significantly lower than US levels</strong>. Yet <strong>British adults consistently report longer life expectancy and lower maternal mortality rates</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Health Inequalities</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>Socioeconomic health disparities are markedly wider in the US than the UK</strong>. Research published in JAMA Internal Medicine found that <strong>across every income group, Americans had worse health outcomes than their British counterparts of similar incomes</strong>. Most striking, <strong>middle-aged UK residents in the bottom 20% income bracket enjoyed better health across multiple measures than the poorest Americans</strong>.
                    </p>
                    <p className="text-justify leading-relaxed">
                      The <strong>NHS has been associated with reduced inequality among all groups, while the US healthcare system exacerbates existing disparities</strong>. Low-income Americans face dramatically higher rates of diabetes, heart disease, mental health conditions, and chronic diseases compared to low-income Britons, even after accounting for demographic differences.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      This section provides comprehensive comparative data for essays on healthcare systems, social inequality, or public policy effectiveness. The statistics on health outcomes despite spending differences offer powerful evidence for arguments about healthcare system design and social justice.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Current Policy Landscape and Reforms */}
            <AccordionItem value="policy-reforms" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Current Policy Landscape and Reforms</h3>
                    <p className="text-sm text-muted-foreground">2025 policy shifts and reform attempts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">United States: Major Policy Shifts in 2025</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>The Trump administration's return has initiated significant healthcare policy reversals</strong>, with Republicans controlling the White House, Senate, and House for the first time since 2018. Key policy directions include:
                    </p>
                    
                    <div className="ml-4 space-y-2">
                      <p><strong>Drug Price Negotiations</strong>: Despite political changes, <strong>Medicare drug price negotiations continue under the Inflation Reduction Act</strong>, representing the first time Medicare can directly negotiate pharmaceutical prices. The program's second round targets <strong>15 additional drugs including Ozempic and Otezla</strong>, with negotiations occurring throughout 2025 and new prices taking effect in 2027.</p>
                      
                      <p><strong>Healthcare System Transformation</strong>: The administration promotes a shift <strong>"from western medicine to whole person wellbeing"</strong> under RFK Jr.'s "Make America Healthy Again" initiative. This includes challenging conventional medicine, reducing reliance on ultra-processed foods, and expanding access to non-traditional treatments.</p>
                      
                      <p><strong>Federal vs. State Control</strong>: Following the Dobbs Supreme Court decision, <strong>states increasingly lead healthcare policy development</strong>, particularly regarding reproductive rights, scope of practice expansions, and insurance regulations.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">United Kingdom: NHS Crisis and Reform Attempts</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>The NHS faces its most severe financial crisis in decades</strong>, with <strong>initial 2025/26 spending plans showing a £6.6 billion deficit for integrated care systems and trusts</strong>. This represents a deterioration from the 2024/25 estimated overspend of £604 million.
                    </p>
                    
                    <div className="ml-4 space-y-2">
                      <p><strong>Workforce Restructuring</strong>: The government <strong>rejects the 2023 Long Term Workforce Plan projections</strong>, stating that <strong>staff numbers in 2035 will be lower than previously planned</strong>. Key changes include:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li><strong>International recruitment will be reduced to under 10% by 2035</strong></li>
                        <li><strong>Agency staffing is expected to end by the end of this parliament</strong></li>
                        <li><strong>1,000 new specialty training posts will be created over three years</strong></li>
                      </ul>
                      
                      <p><strong>Financial Pressures</strong>: NHS organizations face multiple cost pressures, including <strong>unplanned pay settlements, industrial action costs, and inflation</strong>. Staff costs represent <strong>49% of day-to-day NHS spending</strong>, with any additional 0.5% pay increase costing approximately £0.7 billion.</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Essential for current affairs essays on healthcare policy, political economy, or comparative government. The specific policy details and financial figures provide concrete evidence for arguments about healthcare reform, political priorities, and fiscal sustainability.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Workforce Crises */}
            <AccordionItem value="workforce-crisis" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Workforce Crises</h3>
                    <p className="text-sm text-muted-foreground">Critical shortages and staffing challenges</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">United States: Critical Shortages Across Disciplines</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>The US faces a projected shortage of up to 3.2 million healthcare workers by 2026</strong>, including <strong>approximately 86,000 physicians by 2036</strong>. The nursing shortage is particularly severe, with <strong>over 193,000 RN openings projected annually through 2032</strong> and an estimated shortfall exceeding 500,000 nurses by 2030.
                    </p>
                    
                    <p><strong>Root Causes Include</strong>:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Physician burnout rates have skyrocketed</strong>, costing the healthcare system $4.6 billion annually through turnover and reduced hours</li>
                      <li><strong>100,000 nurses left the profession during the pandemic</strong>, with another 610,000 planning to exit by 2027</li>
                      <li><strong>Nearly 50% of nurses are over age 50</strong>, creating an impending retirement wave</li>
                      <li><strong>Nursing faculty vacancy rates of 8.8%</strong> limit educational capacity</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">United Kingdom: NHS Staffing Paradox</h4>
                    <p className="text-justify leading-relaxed">
                      Despite employing <strong>1,544,417 staff as of March 2025 (2.5% annual increase)</strong>, the NHS projects <strong>a workforce gap of 260,000-360,000 staff by 2036/37</strong> without immediate intervention.
                    </p>
                    
                    <p><strong>Staffing Challenges</strong>:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>NHS payroll is projected to grow from £71 billion to £120 billion by 2036-37</strong></li>
                      <li><strong>34.9% of NHS doctors are internationally trained</strong>, with only 57.2% UK-trained</li>
                      <li>Organizations are <strong>freezing recruitment, reducing overtime, and cutting staff</strong> to manage costs</li>
                      <li><strong>Redundancies across NHS organizations nearly doubled between 2019/20 and 2023/24</strong></li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Critical for essays on labor economics, public sector management, or healthcare sustainability. The workforce data illustrates broader themes about aging populations, professional burnout, and the challenges of maintaining public services.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Mental Health Crises */}
            <AccordionItem value="mental-health" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Mental Health Crises</h3>
                    <p className="text-sm text-muted-foreground">Overwhelming demand and treatment gaps</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">United Kingdom: Overwhelming Demand</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>At least one in four Britons will face a significant mental health challenge in 2025</strong>, with demand drastically outpacing NHS capacity. Key statistics include:
                    </p>
                    
                    <p><strong>Rising Prevalence</strong>:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Generalized Anxiety Disorder</strong>: increased from 6 per 100 people (2019) to 9 per 100 (2025)</li>
                      <li><strong>Depression</strong>: rose from 3 per 100 to 5 per 100 people</li>
                      <li><strong>PTSD</strong>: increased from 4 per 100 to 6 per 100 people</li>
                    </ul>
                    
                    <p className="text-justify leading-relaxed">
                      <strong>Treatment Gaps</strong>: NHS Talking Therapies faces <strong>average waiting times of 8-30 weeks</strong>, with rural areas experiencing delays up to 18 months. This creates a "treatment gap" where only 3-4 out of every 10 people needing help receive timely care.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">United States: Global Mental Health Crisis</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>More than 1 billion people globally live with mental health disorders</strong>, with the US contributing significantly to this burden. The WHO reports that <strong>conditions such as anxiety and depression inflict immense human and economic tolls</strong>.
                    </p>
                    
                    <p><strong>US-Specific Challenges</strong>:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Youth mental health referrals for anxiety more than doubled</strong> since the pandemic began</li>
                      <li><strong>Only 27.6% of people with anxiety disorders receive treatment</strong>, despite availability</li>
                      <li><strong>Work-related stress affects 875,000 workers</strong>, making it a leading cause of work-related illness</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Valuable for essays on public health, social policy, or the impact of modern life on wellbeing. The statistics demonstrate the scale of mental health challenges and can support arguments about healthcare priorities and resource allocation.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Healthcare Technology and Innovation */}
            <AccordionItem value="technology" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Healthcare Technology and Innovation</h3>
                    <p className="text-sm text-muted-foreground">Digital transformation and policy innovation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Digital Health Transformation</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>COVID-19 accelerated telehealth adoption dramatically</strong>. In the US, <strong>Medicare primary care visits via telemedicine jumped from less than 1% in February 2020 to 43.5% in April 2020</strong>. This transformation has proven lasting:
                    </p>
                    
                    <p className="text-justify leading-relaxed">
                      <strong>Sustained Adoption</strong>: Research indicates <strong>increased telemedicine "stickiness"</strong> post-pandemic, with adoption rates remaining significantly above pre-COVID levels. <strong>Five years after the pandemic's declaration, telehealth has evolved from emergency solution to essential service</strong>.
                    </p>
                    
                    <p className="text-justify leading-relaxed">
                      <strong>Technology Integration</strong>: Modern healthcare increasingly relies on <strong>wearable devices, AI, cloud computing, IoT sensors, and electronic health records</strong> to create comprehensive Smart Healthcare Systems. These systems proved crucial for <strong>contact tracing, remote patient monitoring, and reducing hospital overcrowding</strong> during the pandemic.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Prescription Drug Policy Innovation</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>Medicare drug price negotiations represent the most significant US pharmaceutical policy change in decades</strong>. The <strong>Inflation Reduction Act's negotiation program achieved 38-79% price reductions</strong> for the first 10 negotiated drugs, with <strong>Medicare saving $6 billion and beneficiaries saving $1.5 billion when new prices take effect in 2026</strong>.
                    </p>
                    
                    <p className="text-justify leading-relaxed">
                      <strong>Second Round Negotiations</strong>: The program's expansion to <strong>15 additional drugs, including blockbuster diabetes and weight-loss medications</strong>, could save <strong>$41 billion annually (14% of Part D spending)</strong>. The Congressional Budget Office projects <strong>$98.5 billion in Medicare savings over the coming decade</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Use in essays:</h4>
                    <p className="text-sm text-orange-700">
                      Perfect for essays on technological innovation, healthcare policy, or the impact of COVID-19. The telehealth statistics and drug pricing data provide concrete examples of policy innovation and technological adaptation in healthcare.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Future Challenges and Projections */}
            <AccordionItem value="future-challenges" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Future Challenges and Projections</h3>
                    <p className="text-sm text-muted-foreground">Demographic pressures and sustainability concerns</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Demographic Pressures</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>Both countries face aging populations requiring increased healthcare services</strong>. The NHS projects that <strong>without intervention, demand will outstrip capacity significantly by 2036/37</strong>. Similarly, <strong>US healthcare demand continues rising</strong> as baby boomers age while workforce supply struggles to keep pace.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">System Sustainability</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>Financial sustainability concerns mount in both systems</strong>. The NHS faces <strong>unprecedented deficits requiring fundamental reform</strong>, while <strong>US healthcare costs continue rising faster than economic growth</strong>. Both systems must <strong>balance quality care delivery with fiscal responsibility</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Innovation and Adaptation</h4>
                    <p className="text-justify leading-relaxed">
                      <strong>Digital health solutions offer promise but require significant infrastructure investment</strong>. <strong>Telehealth has proven effective for routine care</strong>, but comprehensive implementation requires <strong>addressing digital divides, privacy concerns, and regulatory frameworks</strong>.
                    </p>
                    
                    <p className="text-justify leading-relaxed">
                      <strong>Policy coordination across federal, state, and local levels</strong> remains crucial for effective health system performance, particularly as <strong>political polarization affects healthcare policy development</strong> in both countries.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-2">Conclusion:</h4>
                    <p className="text-sm text-orange-700">
                      The healthcare challenges facing the US and UK reflect broader societal pressures around inequality, demographic change, and resource allocation. <strong>Both systems require significant reform to address workforce shortages, improve access, and maintain financial sustainability</strong> while delivering quality care to increasingly diverse and complex patient populations.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Key Topics Summary */}
            <AccordionItem value="key-topics" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Key Topics Summary</h3>
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

            {/* Essential Vocabulary */}
            <AccordionItem value="vocabulary" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-600 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Essential Healthcare Vocabulary</h3>
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

          </Accordion>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2 border-orange-500 text-black hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4" />
                Back to Civilization Overview
              </Button>
            </Link>
            <Link to="/formation/anglais/civilisation/media">
              <Button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700">
                Next: Media and Digital Communication
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSystemsPage;
