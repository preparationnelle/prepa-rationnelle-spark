import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h2 className="text-xl font-semibold text-black mt-8 mb-3 pb-2 border-b-2 border-orange-500">{children}</h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h3 className="text-lg font-semibold text-black mt-6 mb-2">{children}</h3>
);

const LaborPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal breadcrumb */}
      <nav className="sticky top-0 z-40 bg-white border-b border-orange-200">
        <div className="container mx-auto px-4 py-2 text-xs">
          <div className="flex items-center gap-1 text-black/70">
            <Link to="/" className="hover:text-black">
              <span className="inline-flex items-center gap-1"><Home className="h-3 w-3 text-orange-600"/>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <Link to="/formation/anglais" className="hover:text-black">Formation <span className="text-orange-600">Anglais</span></Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <Link to="/formation/anglais/civilisation" className="hover:text-black">Civilisation</Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <span className="font-medium">Labor and the Future of Work</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black">Labor and the Future of Work: Key Information and Ideas</h1>
            <p className="text-sm text-black/70 mt-1">Minimal design • Orange accents only</p>
          </div>

          <SectionTitle>Major Transformation Trends Shaping Work</SectionTitle>
          <p className="leading-relaxed">
            The global labor market is experiencing unprecedented transformation driven by several interconnected forces. According to the World Economic Forum's Future of Jobs Report 2025, <strong>22% of today's total jobs will undergo structural transformation between 2025 and 2030</strong>. This massive shift involves creating 170 million new jobs while displacing 92 million existing positions, resulting in a net growth of 78 million jobs globally.<sup>[1][2]</sup>
          </p>

          <SubTitle>Technology and AI Revolution</SubTitle>
          <p className="leading-relaxed">
            <strong>Artificial intelligence and automation represent the most significant drivers of workplace change</strong>. Broadening digital access is expected to be the most transformative trend, with 60% of employers expecting it to transform their business by 2030. AI could potentially displace the equivalent of 300 million full-time jobs globally, with two-thirds of jobs in the U.S. and Europe "exposed to some degree of AI automation".<sup>[3][1]</sup>
          </p>
          <p className="leading-relaxed">
            However, this disruption comes with significant opportunities. <strong>AI will raise labor productivity in developed markets by around 15% when fully adopted</strong>, and the World Economic Forum estimates that by 2025, AI will have displaced 75 million jobs but created 133 million new ones, resulting in a net gain of 58 million jobs.<sup>[4][5]</sup>
          </p>

          <SubTitle>Hybrid Work as the New Standard</SubTitle>
          <p className="leading-relaxed">
            The pandemic fundamentally reshaped how we work, with <strong>hybrid models now becoming the dominant workplace arrangement</strong>. By 2023, 55% of remote-capable employees in the U.S. were working in hybrid arrangements. Research shows that hybrid work offers optimal balance, with <strong>working from home 2-3 days per week emerging as the ideal ratio</strong>.<sup>[6][7]</sup>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Commuting time savings</strong> — the primary reason employees choose hybrid work<sup>[8]</sup></li>
            <li><strong>Improved work-life balance</strong> and enhanced job satisfaction<sup>[8]</sup></li>
            <li><strong>Access to global talent pools</strong> for employers<sup>[6]</sup></li>
            <li><strong>Cost efficiency</strong> through reduced office space requirements<sup>[8]</sup></li>
          </ul>

          <SectionTitle>Skills Evolution and Workforce Development</SectionTitle>
          <SubTitle>Critical Future Skills</SubTitle>
          <p className="leading-relaxed">
            The World Economic Forum identifies the top skills needed by 2030, with <strong>39% of workers' core skills expected to change</strong>.
          </p>
          <p className="font-semibold mt-3">Technology and Data Skills:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI and big data analytics<sup>[9]</sup></li>
            <li>Networks and cybersecurity<sup>[9]</sup></li>
            <li>Technology design and programming<sup>[10]</sup></li>
          </ul>
          <p className="font-semibold mt-3">Human-Centered Skills:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Analytical and creative thinking; complex problem-solving<sup>[10]</sup></li>
            <li>Leadership and social influence<sup>[9]</sup></li>
            <li>Resilience, flexibility, and agility<sup>[9]</sup></li>
          </ul>
          <p className="font-semibold mt-3">Emerging Priority Areas:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Environmental stewardship<sup>[9]</sup></li>
            <li>Talent management and systems thinking<sup>[9]</sup></li>
            <li>Curiosity and lifelong learning<sup>[9]</sup></li>
          </ul>

          <SubTitle>Addressing the Skills Gap</SubTitle>
          <p className="leading-relaxed">
            The digital skills crisis affects both advanced and developing economies. <strong>90% of jobs in the EU require at least basic digital literacy, yet nearly 42% of EU citizens lack these skills</strong>.<sup>[11]</sup>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Digital academies</strong> and comprehensive training programs<sup>[12]</sup></li>
            <li><strong>Upskilling and reskilling initiatives</strong> — with companies like Walmart, JPMorgan Chase, and Siemens leading successful programs<sup>[13]</sup></li>
            <li><strong>Strategic partnerships</strong> between businesses and educational institutions<sup>[13]</sup></li>
          </ul>

          <SectionTitle>Green Transition and Sustainable Employment</SectionTitle>
          <SubTitle>Climate-Driven Job Creation</SubTitle>
          <p className="leading-relaxed">
            By 2030, climate-change adaptation could contribute 5 million net new jobs globally, with mitigation adding another 3 million. Environmental and renewable energy engineers rank among the fastest‑growing occupations.<sup>[14]</sup>
          </p>
          <p className="leading-relaxed">
            <strong>Green hiring rates consistently outperform overall labor market trends</strong>, with demand for green skills rising 22% between 2022 and 2023.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sustainability experts and circularity specialists<sup>[15]</sup></li>
            <li>Urban farmers and agronomists<sup>[15]</sup></li>
            <li>Ecology consultants and eco-builders<sup>[15]</sup></li>
            <li>Renewable energy engineers and technicians<sup>[14]</sup></li>
          </ul>

          <SectionTitle>Gig Economy and Labor Rights Evolution</SectionTitle>
          <SubTitle>Platform Worker Protections</SubTitle>
          <p className="leading-relaxed">
            The gig economy continues expanding, with <strong>28 million people working for platforms in the EU, expected to reach 43 million by 2025</strong>. Regulatory responses are evolving.<sup>[16]</sup>
          </p>
          <p className="leading-relaxed"><strong>European Union</strong>: New directive requires companies to prove workers aren't employees, provides algorithmic transparency, and ensures human oversight in employment decisions.<sup>[17]</sup></p>
          <p className="leading-relaxed"><strong>United States</strong>: 2024 Department of Labor policy requires platforms to classify economically dependent workers as employees rather than contractors.<sup>[18]</sup></p>
          <SubTitle>Ongoing Challenges</SubTitle>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Employment misclassification</strong> limiting access to benefits<sup>[19]</sup></li>
            <li><strong>Low and fluctuating income</strong> without traditional protections<sup>[19]</sup></li>
            <li><strong>Algorithmic management</strong> with limited transparency<sup>[19]</sup></li>
            <li><strong>Barriers to collective bargaining</strong> and unionization<sup>[18]</sup></li>
          </ul>

          <SectionTitle>Workplace Wellbeing and Mental Health</SectionTitle>
          <SubTitle>Strategic Business Priority</SubTitle>
          <p className="leading-relaxed">
            <strong>Workplace wellbeing has evolved from peripheral initiative to core business driver</strong>. Organizations prioritizing wellbeing report up to 20% higher productivity and 10% higher retention. McKinsey estimates that improving global employee wellbeing could create up to $11.7 trillion in economic value.<sup>[20][21]</sup>
          </p>
          <SubTitle>2025 Wellbeing Trends</SubTitle>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cognitive wellness programs and mental recovery breaks<sup>[20]</sup></li>
            <li>Sleep and rest prioritization aligned with natural rhythms<sup>[20]</sup></li>
            <li>Neuroscience-driven workplace design<sup>[20]</sup></li>
            <li>Integration of mental health with cognitive performance strategies<sup>[20]</sup></li>
          </ul>
          <p className="leading-relaxed">Despite increased investment, <strong>38% of workers remain at risk of mental health issues</strong>, indicating the need for more comprehensive approaches.<sup>[21]</sup></p>

          <SectionTitle>Diversity, Equity, and Inclusion Evolution</SectionTitle>
          <SubTitle>Strategic Integration</SubTitle>
          <ul className="list-disc pl-6 space-y-1">
            <li>Embedding DEI within ESG frameworks<sup>[22]</sup></li>
            <li>Aligning DEI with mental health and wellbeing<sup>[22]</sup></li>
            <li>Building durable leadership skills for diverse teams<sup>[22]</sup></li>
          </ul>
          <SubTitle>Challenges and Opportunities</SubTitle>
          <ul className="list-disc pl-6 space-y-1">
            <li>Formal mentoring programs across the employee journey<sup>[23]</sup></li>
            <li>Inclusive leadership development replacing isolated approaches<sup>[23]</sup></li>
            <li>Data‑driven methods to improve equity outcomes<sup>[23]</sup></li>
          </ul>

          <SectionTitle>Looking Forward: Implications and Opportunities</SectionTitle>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Proactive skills development</strong> — invest in continuous learning and reskilling</li>
            <li><strong>Adaptive workplace models</strong> — flexible hybrid arrangements</li>
            <li><strong>Human‑AI collaboration</strong> — prioritize uniquely human capabilities</li>
            <li><strong>Sustainable transition management</strong> — support workers through green shifts</li>
            <li><strong>Comprehensive wellbeing strategies</strong> — mental health as a business imperative</li>
            <li><strong>Inclusive growth models</strong> — ensure benefits are widely shared</li>
          </ol>

          <SectionTitle>References</SectionTitle>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li><a className="text-orange-600 hover:underline" href="https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf" target="_blank" rel="noreferrer">WEF Future of Jobs 2025</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/" target="_blank" rel="noreferrer">WEF Digest</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.nexford.edu/insights/how-will-ai-affect-jobs" target="_blank" rel="noreferrer">Nexford: AI and jobs</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.innopharmaeducation.com/blog/the-impact-of-ai-on-job-roles-workforce-and-employment-what-you-need-to-know" target="_blank" rel="noreferrer">Innopharma: AI impact</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce" target="_blank" rel="noreferrer">Goldman Sachs: Global workforce</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://blog.radancy.com/2025/02/06/the-rise-of-hybrid-work-redesigning-work-life-balance/" target="_blank" rel="noreferrer">Radancy: Hybrid work</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.deskbird.com/blog/hybrid-work-trends" target="_blank" rel="noreferrer">Deskbird: Trends</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.eurofound.europa.eu/en/resources/article/2025/shaping-future-work-inside-europes-hybrid-work-strategies" target="_blank" rel="noreferrer">Eurofound</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/" target="_blank" rel="noreferrer">WEF Skills outlook</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.lepaya.com/blog/top-10-skills-of-the-future" target="_blank" rel="noreferrer">Lepaya: Top skills</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://apmg-international.com/fr/article/what-digital-skills-gap" target="_blank" rel="noreferrer">APMG: Digital skills gap</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://hbr.org/2024/01/using-digital-academies-to-close-the-skills-gap" target="_blank" rel="noreferrer">HBR: Digital academies</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://educate360.com/blog/digital-skills-gap/" target="_blank" rel="noreferrer">Educate360</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.eitdeeptechtalent.eu/news-and-events/news-archive/the-future-of-work-the-green-transition-and-its-effect-on-employment/" target="_blank" rel="noreferrer">EIT: Green transition</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://eures.europa.eu/green-transition-transforming-jobs-are-you-ready-2024-10-24_en" target="_blank" rel="noreferrer">EURES: Green jobs</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.business-humanrights.org/fr/derni%C3%A8res-actualit%C3%A9s/eu-gig-economy-workers-to-get-employee-status-incl-minimum-wage-sick-pay-under-new-law-proposal/" target="_blank" rel="noreferrer">BHRRC: Platform workers</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.europarl.europa.eu/topics/en/article/20190404STO35070/gig-economy-how-the-eu-improves-platform-workers-rights" target="_blank" rel="noreferrer">EU Parliament: Platform rights</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://globallawexperts.com/labour-rights-in-focus-gig-worker-protections/" target="_blank" rel="noreferrer">Global Law Experts</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.hrw.org/news/2025/06/03/ilo-adopt-binding-treaty-protect-gig-workers" target="_blank" rel="noreferrer">HRW: ILO treaty</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://globalwellnessinstitute.org/global-wellness-institute-blog/2025/03/28/workplace-wellbeing-initiative-trends-for-2025/" target="_blank" rel="noreferrer">Global Wellness Institute</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.weforum.org/stories/2025/03/prioritizing-employee-wellbeing-good-for-business/" target="_blank" rel="noreferrer">WEF: Wellbeing</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.catalyst.org/fr-fr/insights/2025/10-inclusive-workplace-trends" target="_blank" rel="noreferrer">Catalyst: Inclusive trends</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://chronus.com/blog/the-future-diversity-equity-inclusion-in-the-workplace" target="_blank" rel="noreferrer">Chronus: DEI future</a></li>
          </ol>

          <div className="mt-10">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="border-orange-500 text-black hover:bg-orange-50"><ArrowLeft className="h-4 w-4 mr-2"/>Back to Civilization</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaborPage;


