import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-dm-serif text-2xl text-pr-black mt-12 mb-3">
    {children}
    <div className="w-12 h-[3px] bg-pr-orange mt-2" />
  </h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-dm-sans font-semibold text-pr-black mt-6 mb-2 text-lg">{children}</h3>
);

const LaborPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Labor & Future of Work' },
      ]}
      badge="Civilisation · 2025"
      title="Labor & the Future of Work"
      subtitle="Key information and ideas — labor markets, skills evolution, gig economy, wellbeing, DEI."
    >
      <div className="max-w-3xl mx-auto text-pr-gray-dark/90 leading-relaxed font-dm-sans">
        <SectionTitle>Major Transformation Trends Shaping Work</SectionTitle>
        <p>
          The global labor market is experiencing unprecedented transformation driven by several interconnected forces. According to the World Economic Forum's Future of Jobs Report 2025, <strong>22% of today's total jobs will undergo structural transformation between 2025 and 2030</strong>. This massive shift involves creating 170 million new jobs while displacing 92 million existing positions, resulting in a net growth of 78 million jobs globally.<sup>[1][2]</sup>
        </p>

        <SubTitle>Technology and AI Revolution</SubTitle>
        <p>
          <strong>Artificial intelligence and automation represent the most significant drivers of workplace change</strong>. Broadening digital access is expected to be the most transformative trend, with 60% of employers expecting it to transform their business by 2030. AI could potentially displace the equivalent of 300 million full-time jobs globally, with two-thirds of jobs in the U.S. and Europe "exposed to some degree of AI automation".<sup>[3][1]</sup>
        </p>
        <p>
          However, this disruption comes with significant opportunities. <strong>AI will raise labor productivity in developed markets by around 15% when fully adopted</strong>, and the World Economic Forum estimates that by 2025, AI will have displaced 75 million jobs but created 133 million new ones, resulting in a net gain of 58 million jobs.<sup>[4][5]</sup>
        </p>

        <SubTitle>Hybrid Work as the New Standard</SubTitle>
        <p>
          The pandemic fundamentally reshaped how we work, with <strong>hybrid models now becoming the dominant workplace arrangement</strong>. By 2023, 55% of remote-capable employees in the U.S. were working in hybrid arrangements. Research shows that hybrid work offers optimal balance, with <strong>working from home 2-3 days per week emerging as the ideal ratio</strong>.<sup>[6][7]</sup>
        </p>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Commuting time savings</strong> — the primary reason employees choose hybrid work<sup>[8]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Improved work-life balance</strong> and enhanced job satisfaction<sup>[8]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Access to global talent pools</strong> for employers<sup>[6]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Cost efficiency</strong> through reduced office space requirements<sup>[8]</sup></span></li>
        </ul>

        <SectionTitle>Skills Evolution and Workforce Development</SectionTitle>
        <SubTitle>Critical Future Skills</SubTitle>
        <p>
          The World Economic Forum identifies the top skills needed by 2030, with <strong>39% of workers' core skills expected to change</strong>.
        </p>
        <p className="font-semibold mt-4 text-pr-black">Technology and Data Skills</p>
        <ul className="space-y-1.5 mt-2">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>AI and big data analytics<sup>[9]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Networks and cybersecurity<sup>[9]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Technology design and programming<sup>[10]</sup></span></li>
        </ul>
        <p className="font-semibold mt-4 text-pr-black">Human-Centered Skills</p>
        <ul className="space-y-1.5 mt-2">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Analytical and creative thinking; complex problem-solving<sup>[10]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Leadership and social influence<sup>[9]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Resilience, flexibility, and agility<sup>[9]</sup></span></li>
        </ul>
        <p className="font-semibold mt-4 text-pr-black">Emerging Priority Areas</p>
        <ul className="space-y-1.5 mt-2">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Environmental stewardship<sup>[9]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Talent management and systems thinking<sup>[9]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Curiosity and lifelong learning<sup>[9]</sup></span></li>
        </ul>

        <SubTitle>Addressing the Skills Gap</SubTitle>
        <p>
          The digital skills crisis affects both advanced and developing economies. <strong>90% of jobs in the EU require at least basic digital literacy, yet nearly 42% of EU citizens lack these skills</strong>.<sup>[11]</sup>
        </p>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Digital academies</strong> and comprehensive training programs<sup>[12]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Upskilling and reskilling initiatives</strong> — Walmart, JPMorgan Chase, Siemens lead<sup>[13]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Strategic partnerships</strong> between businesses and educational institutions<sup>[13]</sup></span></li>
        </ul>

        <SectionTitle>Green Transition and Sustainable Employment</SectionTitle>
        <SubTitle>Climate-Driven Job Creation</SubTitle>
        <p>
          By 2030, climate-change adaptation could contribute 5 million net new jobs globally, with mitigation adding another 3 million. Environmental and renewable energy engineers rank among the fastest-growing occupations.<sup>[14]</sup>
        </p>
        <p>
          <strong>Green hiring rates consistently outperform overall labor market trends</strong>, with demand for green skills rising 22% between 2022 and 2023.
        </p>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Sustainability experts and circularity specialists<sup>[15]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Urban farmers and agronomists<sup>[15]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Ecology consultants and eco-builders<sup>[15]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Renewable energy engineers and technicians<sup>[14]</sup></span></li>
        </ul>

        <SectionTitle>Gig Economy and Labor Rights Evolution</SectionTitle>
        <SubTitle>Platform Worker Protections</SubTitle>
        <p>
          The gig economy continues expanding, with <strong>28 million people working for platforms in the EU, expected to reach 43 million by 2025</strong>. Regulatory responses are evolving.<sup>[16]</sup>
        </p>
        <p><strong>European Union</strong> — New directive requires companies to prove workers aren't employees, provides algorithmic transparency, and ensures human oversight in employment decisions.<sup>[17]</sup></p>
        <p><strong>United States</strong> — 2024 Department of Labor policy requires platforms to classify economically dependent workers as employees rather than contractors.<sup>[18]</sup></p>
        <SubTitle>Ongoing Challenges</SubTitle>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Employment misclassification</strong> limiting access to benefits<sup>[19]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Low and fluctuating income</strong> without traditional protections<sup>[19]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Algorithmic management</strong> with limited transparency<sup>[19]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span><strong>Barriers to collective bargaining</strong> and unionization<sup>[18]</sup></span></li>
        </ul>

        <SectionTitle>Workplace Wellbeing and Mental Health</SectionTitle>
        <SubTitle>Strategic Business Priority</SubTitle>
        <p>
          <strong>Workplace wellbeing has evolved from peripheral initiative to core business driver</strong>. Organizations prioritizing wellbeing report up to 20% higher productivity and 10% higher retention. McKinsey estimates that improving global employee wellbeing could create up to $11.7 trillion in economic value.<sup>[20][21]</sup>
        </p>
        <SubTitle>2025 Wellbeing Trends</SubTitle>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Cognitive wellness programs and mental recovery breaks<sup>[20]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Sleep and rest prioritization aligned with natural rhythms<sup>[20]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Neuroscience-driven workplace design<sup>[20]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Integration of mental health with cognitive performance strategies<sup>[20]</sup></span></li>
        </ul>
        <p>Despite increased investment, <strong>38% of workers remain at risk of mental health issues</strong>, indicating the need for more comprehensive approaches.<sup>[21]</sup></p>

        <SectionTitle>Diversity, Equity, and Inclusion Evolution</SectionTitle>
        <SubTitle>Strategic Integration</SubTitle>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Embedding DEI within ESG frameworks<sup>[22]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Aligning DEI with mental health and wellbeing<sup>[22]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Building durable leadership skills for diverse teams<sup>[22]</sup></span></li>
        </ul>
        <SubTitle>Challenges and Opportunities</SubTitle>
        <ul className="space-y-1.5 mt-3">
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Formal mentoring programs across the employee journey<sup>[23]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Inclusive leadership development replacing isolated approaches<sup>[23]</sup></span></li>
          <li className="flex gap-2"><span className="text-pr-orange mt-1">→</span><span>Data-driven methods to improve equity outcomes<sup>[23]</sup></span></li>
        </ul>

        <SectionTitle>Looking Forward — Implications and Opportunities</SectionTitle>
        <ol className="space-y-2 mt-3 list-none counter-reset">
          {[
            'Proactive skills development — invest in continuous learning and reskilling',
            'Adaptive workplace models — flexible hybrid arrangements',
            'Human-AI collaboration — prioritize uniquely human capabilities',
            'Sustainable transition management — support workers through green shifts',
            'Comprehensive wellbeing strategies — mental health as a business imperative',
            'Inclusive growth models — ensure benefits are widely shared',
          ].map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-dm-serif text-2xl text-pr-orange leading-none w-8 flex-shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
              <span className="pt-1.5">{s}</span>
            </li>
          ))}
        </ol>

        <SectionTitle>References</SectionTitle>
        <ol className="space-y-1.5 text-sm">
          {[
            ['WEF Future of Jobs 2025', 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf'],
            ['WEF Digest', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/'],
            ['Nexford: AI and jobs', 'https://www.nexford.edu/insights/how-will-ai-affect-jobs'],
            ['Innopharma: AI impact', 'https://www.innopharmaeducation.com/blog/the-impact-of-ai-on-job-roles-workforce-and-employment-what-you-need-to-know'],
            ['Goldman Sachs: Global workforce', 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce'],
            ['Radancy: Hybrid work', 'https://blog.radancy.com/2025/02/06/the-rise-of-hybrid-work-redesigning-work-life-balance/'],
            ['Deskbird: Trends', 'https://www.deskbird.com/blog/hybrid-work-trends'],
            ['Eurofound', 'https://www.eurofound.europa.eu/en/resources/article/2025/shaping-future-work-inside-europes-hybrid-work-strategies'],
            ['WEF Skills outlook', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/'],
            ['Lepaya: Top skills', 'https://www.lepaya.com/blog/top-10-skills-of-the-future'],
            ['APMG: Digital skills gap', 'https://apmg-international.com/fr/article/what-digital-skills-gap'],
            ['HBR: Digital academies', 'https://hbr.org/2024/01/using-digital-academies-to-close-the-skills-gap'],
            ['Educate360', 'https://educate360.com/blog/digital-skills-gap/'],
            ['EIT: Green transition', 'https://www.eitdeeptechtalent.eu/news-and-events/news-archive/the-future-of-work-the-green-transition-and-its-effect-on-employment/'],
            ['EURES: Green jobs', 'https://eures.europa.eu/green-transition-transforming-jobs-are-you-ready-2024-10-24_en'],
            ['BHRRC: Platform workers', 'https://www.business-humanrights.org/fr/derni%C3%A8res-actualit%C3%A9s/eu-gig-economy-workers-to-get-employee-status-incl-minimum-wage-sick-pay-under-new-law-proposal/'],
            ['EU Parliament: Platform rights', 'https://www.europarl.europa.eu/topics/en/article/20190404STO35070/gig-economy-how-the-eu-improves-platform-workers-rights'],
            ['Global Law Experts', 'https://globallawexperts.com/labour-rights-in-focus-gig-worker-protections/'],
            ['HRW: ILO treaty', 'https://www.hrw.org/news/2025/06/03/ilo-adopt-binding-treaty-protect-gig-workers'],
            ['Global Wellness Institute', 'https://globalwellnessinstitute.org/global-wellness-institute-blog/2025/03/28/workplace-wellbeing-initiative-trends-for-2025/'],
            ['WEF: Wellbeing', 'https://www.weforum.org/stories/2025/03/prioritizing-employee-wellbeing-good-for-business/'],
            ['Catalyst: Inclusive trends', 'https://www.catalyst.org/fr-fr/insights/2025/10-inclusive-workplace-trends'],
            ['Chronus: DEI future', 'https://chronus.com/blog/the-future-diversity-equity-inclusion-in-the-workplace'],
          ].map(([label, href], i) => (
            <li key={i} className="flex gap-2">
              <span className="text-pr-gray-mid w-7 flex-shrink-0 font-mono">[{i + 1}]</span>
              <a className="text-pr-orange-dark hover:text-pr-orange hover:underline" href={href} target="_blank" rel="noreferrer">{label}</a>
            </li>
          ))}
        </ol>

        <CivPageFooterNav />
      </div>
    </PRFormationLayout>
  );
};

export default LaborPage;
