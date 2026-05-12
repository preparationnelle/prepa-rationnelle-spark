import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const NoteBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-pr-gray-bg border-l-[3px] border-pr-black p-4 rounded-r-md mt-4">
    <h4 className="font-dm-serif text-pr-black mb-2">{title}</h4>
    <p className="text-pr-gray-dark text-sm leading-relaxed">{children}</p>
  </div>
);

const VocabRow: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-pr-gray-light/60 last:border-0">
    <span className="font-dm-sans font-semibold text-pr-black text-sm sm:w-1/3 shrink-0">{term}</span>
    <span className="text-sm text-pr-gray-dark/90">{definition}</span>
  </div>
);

const HealthSystemsPage = () => {
  const keyTopics = [
    { title: 'Healthcare System Models', content: 'NHS vs US system, universal coverage, private insurance, structural differences', vocabulary: ['NHS', 'universal healthcare', 'single-payer', 'private insurance', 'Medicare', 'Medicaid'] },
    { title: 'Health Outcomes & Spending', content: 'Comparative outcomes, spending disparities, health inequalities, life expectancy', vocabulary: ['health outcomes', 'cardiovascular health', 'maternal mortality', 'health disparities', 'GDP spending'] },
    { title: 'Policy Reforms 2025', content: 'Drug price negotiations, workforce restructuring, financial crises, policy shifts', vocabulary: ['Inflation Reduction Act', 'Medicare negotiations', 'workforce gap', 'financial deficit'] },
    { title: 'Workforce & Mental Health', content: 'Staff shortages, burnout, mental health crisis, treatment gaps', vocabulary: ['workforce shortage', 'physician burnout', 'mental health crisis', 'treatment gap', 'waiting times'] },
  ];

  const essentialVocabulary = [
    { term: 'NHS (National Health Service)', definition: 'The UK\'s universal healthcare system funded through taxation' },
    { term: 'single-payer system', definition: 'Healthcare system where the government is the sole insurer' },
    { term: 'health disparities', definition: 'Differences in health outcomes between different population groups' },
    { term: 'Medicare drug negotiations', definition: 'Government program to negotiate lower prescription drug prices' },
    { term: 'workforce shortage', definition: 'Insufficient number of healthcare workers to meet population needs' },
    { term: 'telehealth', definition: 'Remote healthcare delivery using digital technologies' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Health Systems' },
      ]}
      badge="Civilisation · 2025"
      title="Health & Healthcare"
      titleAccent="US and UK Policy Challenges"
      subtitle="Comparative analysis of NHS and US systems, policy reforms, workforce crises, and digital health."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Healthcare Facts 2025"
          stats={[
            { value: '£6.6bn', label: 'NHS deficit 2025/26' },
            { value: '3.2M', label: 'US healthcare worker shortage' },
            { value: '28M', label: 'Uninsured Americans' },
            { value: '2.78x', label: 'US drug spending vs others' },
          ]}
        />

        <CivAccordion>
          <CivItem value="overview" title="Overview: Two Systems Under Pressure">
            <div className="space-y-4">
              <p>
                Both the United States and United Kingdom face unprecedented healthcare challenges in 2025, though manifesting in different ways due to their fundamentally distinct healthcare models. <strong>The UK's National Health Service (NHS) represents universal healthcare funded through taxation, while the US operates a hybrid system mixing private insurance, employer-based coverage, and government programs</strong> serving distinct populations. Despite these structural differences, both systems confront similar pressures: workforce shortages, financial constraints, mental health crises, and the lasting impacts of COVID-19.
              </p>
              <NoteBox title="Key Insight">
                Despite fundamentally different approaches to healthcare delivery and financing, both systems face remarkably similar challenges in 2025, highlighting universal pressures on modern healthcare systems.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="foundations" title="Healthcare System Foundations and Performance">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Structural Differences</h4>
                <p>
                  <strong>The NHS operates as a universal system where healthcare is considered a human right</strong>, providing comprehensive coverage to all UK residents without direct charges at the point of care. In contrast, <strong>the US system relies heavily on private insurance and employer-sponsored plans</strong>, with Medicare and Medicaid serving specific populations while leaving approximately 28 million Americans uninsured.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Comparative Outcomes and Spending</h4>
                <p>
                  Despite spending significantly more per capita, <strong>the US system underperforms the UK across multiple health outcomes</strong>. Research from UCL demonstrates that <strong>British adults in their 30s and 40s have better cardiovascular health than their US counterparts</strong>, with lower rates of obesity (34.5% vs 40.4%), hypertension (19.3% vs 30.4%), and high cholesterol.
                </p>
                <p>
                  <strong>Healthcare spending disparities are dramatic</strong>: the US spends nearly 2.78 times more than other developed countries on prescription drugs, while <strong>UK healthcare spending as a percentage of GDP remains significantly lower than US levels</strong>. Yet <strong>British adults consistently report longer life expectancy and lower maternal mortality rates</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Health Inequalities</h4>
                <p>
                  <strong>Socioeconomic health disparities are markedly wider in the US than the UK</strong>. Research published in JAMA Internal Medicine found that <strong>across every income group, Americans had worse health outcomes than their British counterparts of similar incomes</strong>. Most striking, <strong>middle-aged UK residents in the bottom 20% income bracket enjoyed better health across multiple measures than the poorest Americans</strong>.
                </p>
                <p>
                  The <strong>NHS has been associated with reduced inequality among all groups, while the US healthcare system exacerbates existing disparities</strong>. Low-income Americans face dramatically higher rates of diabetes, heart disease, mental health conditions, and chronic diseases compared to low-income Britons, even after accounting for demographic differences.
                </p>
              </div>

              <NoteBox title="Use in essays">
                This section provides comprehensive comparative data for essays on healthcare systems, social inequality, or public policy effectiveness. The statistics on health outcomes despite spending differences offer powerful evidence for arguments about healthcare system design and social justice.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="policy-reforms" title="Current Policy Landscape and Reforms">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">United States: Major Policy Shifts in 2025</h4>
                <p>
                  <strong>The Trump administration's return has initiated significant healthcare policy reversals</strong>, with Republicans controlling the White House, Senate, and House for the first time since 2018. Key policy directions include:
                </p>
                <div className="ml-4 space-y-2 mt-2">
                  <p><strong>Drug Price Negotiations</strong>: Despite political changes, <strong>Medicare drug price negotiations continue under the Inflation Reduction Act</strong>, representing the first time Medicare can directly negotiate pharmaceutical prices. The program's second round targets <strong>15 additional drugs including Ozempic and Otezla</strong>, with negotiations occurring throughout 2025 and new prices taking effect in 2027.</p>
                  <p><strong>Healthcare System Transformation</strong>: The administration promotes a shift <strong>"from western medicine to whole person wellbeing"</strong> under RFK Jr.'s "Make America Healthy Again" initiative. This includes challenging conventional medicine, reducing reliance on ultra-processed foods, and expanding access to non-traditional treatments.</p>
                  <p><strong>Federal vs. State Control</strong>: Following the Dobbs Supreme Court decision, <strong>states increasingly lead healthcare policy development</strong>, particularly regarding reproductive rights, scope of practice expansions, and insurance regulations.</p>
                </div>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">United Kingdom: NHS Crisis and Reform Attempts</h4>
                <p>
                  <strong>The NHS faces its most severe financial crisis in decades</strong>, with <strong>initial 2025/26 spending plans showing a £6.6 billion deficit for integrated care systems and trusts</strong>. This represents a deterioration from the 2024/25 estimated overspend of £604 million.
                </p>
                <div className="ml-4 space-y-2 mt-2">
                  <p><strong>Workforce Restructuring</strong>: The government <strong>rejects the 2023 Long Term Workforce Plan projections</strong>, stating that <strong>staff numbers in 2035 will be lower than previously planned</strong>. Key changes include:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>International recruitment will be reduced to under 10% by 2035</strong></li>
                    <li><strong>Agency staffing is expected to end by the end of this parliament</strong></li>
                    <li><strong>1,000 new specialty training posts will be created over three years</strong></li>
                  </ul>
                  <p><strong>Financial Pressures</strong>: NHS organizations face multiple cost pressures, including <strong>unplanned pay settlements, industrial action costs, and inflation</strong>. Staff costs represent <strong>49% of day-to-day NHS spending</strong>, with any additional 0.5% pay increase costing approximately £0.7 billion.</p>
                </div>
              </div>

              <NoteBox title="Use in essays">
                Essential for current affairs essays on healthcare policy, political economy, or comparative government. The specific policy details and financial figures provide concrete evidence for arguments about healthcare reform, political priorities, and fiscal sustainability.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="workforce-crisis" title="Workforce Crises">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">United States: Critical Shortages Across Disciplines</h4>
                <p>
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
                <h4 className="font-dm-serif text-pr-black mb-2">United Kingdom: NHS Staffing Paradox</h4>
                <p>
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

              <NoteBox title="Use in essays">
                Critical for essays on labor economics, public sector management, or healthcare sustainability. The workforce data illustrates broader themes about aging populations, professional burnout, and the challenges of maintaining public services.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="mental-health" title="Mental Health Crises">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">United Kingdom: Overwhelming Demand</h4>
                <p>
                  <strong>At least one in four Britons will face a significant mental health challenge in 2025</strong>, with demand drastically outpacing NHS capacity. Key statistics include:
                </p>
                <p><strong>Rising Prevalence</strong>:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Generalized Anxiety Disorder</strong>: increased from 6 per 100 people (2019) to 9 per 100 (2025)</li>
                  <li><strong>Depression</strong>: rose from 3 per 100 to 5 per 100 people</li>
                  <li><strong>PTSD</strong>: increased from 4 per 100 to 6 per 100 people</li>
                </ul>
                <p>
                  <strong>Treatment Gaps</strong>: NHS Talking Therapies faces <strong>average waiting times of 8-30 weeks</strong>, with rural areas experiencing delays up to 18 months. This creates a "treatment gap" where only 3-4 out of every 10 people needing help receive timely care.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">United States: Global Mental Health Crisis</h4>
                <p>
                  <strong>More than 1 billion people globally live with mental health disorders</strong>, with the US contributing significantly to this burden. The WHO reports that <strong>conditions such as anxiety and depression inflict immense human and economic tolls</strong>.
                </p>
                <p><strong>US-Specific Challenges</strong>:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Youth mental health referrals for anxiety more than doubled</strong> since the pandemic began</li>
                  <li><strong>Only 27.6% of people with anxiety disorders receive treatment</strong>, despite availability</li>
                  <li><strong>Work-related stress affects 875,000 workers</strong>, making it a leading cause of work-related illness</li>
                </ul>
              </div>

              <NoteBox title="Use in essays">
                Valuable for essays on public health, social policy, or the impact of modern life on wellbeing. The statistics demonstrate the scale of mental health challenges and can support arguments about healthcare priorities and resource allocation.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="technology" title="Healthcare Technology and Innovation">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Digital Health Transformation</h4>
                <p>
                  <strong>COVID-19 accelerated telehealth adoption dramatically</strong>. In the US, <strong>Medicare primary care visits via telemedicine jumped from less than 1% in February 2020 to 43.5% in April 2020</strong>. This transformation has proven lasting:
                </p>
                <p>
                  <strong>Sustained Adoption</strong>: Research indicates <strong>increased telemedicine "stickiness"</strong> post-pandemic, with adoption rates remaining significantly above pre-COVID levels. <strong>Five years after the pandemic's declaration, telehealth has evolved from emergency solution to essential service</strong>.
                </p>
                <p>
                  <strong>Technology Integration</strong>: Modern healthcare increasingly relies on <strong>wearable devices, AI, cloud computing, IoT sensors, and electronic health records</strong> to create comprehensive Smart Healthcare Systems. These systems proved crucial for <strong>contact tracing, remote patient monitoring, and reducing hospital overcrowding</strong> during the pandemic.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Prescription Drug Policy Innovation</h4>
                <p>
                  <strong>Medicare drug price negotiations represent the most significant US pharmaceutical policy change in decades</strong>. The <strong>Inflation Reduction Act's negotiation program achieved 38-79% price reductions</strong> for the first 10 negotiated drugs, with <strong>Medicare saving $6 billion and beneficiaries saving $1.5 billion when new prices take effect in 2026</strong>.
                </p>
                <p>
                  <strong>Second Round Negotiations</strong>: The program's expansion to <strong>15 additional drugs, including blockbuster diabetes and weight-loss medications</strong>, could save <strong>$41 billion annually (14% of Part D spending)</strong>. The Congressional Budget Office projects <strong>$98.5 billion in Medicare savings over the coming decade</strong>.
                </p>
              </div>

              <NoteBox title="Use in essays">
                Perfect for essays on technological innovation, healthcare policy, or the impact of COVID-19. The telehealth statistics and drug pricing data provide concrete examples of policy innovation and technological adaptation in healthcare.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="future-challenges" title="Future Challenges and Projections">
            <div className="space-y-4">
              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Demographic Pressures</h4>
                <p>
                  <strong>Both countries face aging populations requiring increased healthcare services</strong>. The NHS projects that <strong>without intervention, demand will outstrip capacity significantly by 2036/37</strong>. Similarly, <strong>US healthcare demand continues rising</strong> as baby boomers age while workforce supply struggles to keep pace.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">System Sustainability</h4>
                <p>
                  <strong>Financial sustainability concerns mount in both systems</strong>. The NHS faces <strong>unprecedented deficits requiring fundamental reform</strong>, while <strong>US healthcare costs continue rising faster than economic growth</strong>. Both systems must <strong>balance quality care delivery with fiscal responsibility</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-dm-serif text-pr-black mb-2">Innovation and Adaptation</h4>
                <p>
                  <strong>Digital health solutions offer promise but require significant infrastructure investment</strong>. <strong>Telehealth has proven effective for routine care</strong>, but comprehensive implementation requires <strong>addressing digital divides, privacy concerns, and regulatory frameworks</strong>.
                </p>
                <p>
                  <strong>Policy coordination across federal, state, and local levels</strong> remains crucial for effective health system performance, particularly as <strong>political polarization affects healthcare policy development</strong> in both countries.
                </p>
              </div>

              <NoteBox title="Conclusion">
                The healthcare challenges facing the US and UK reflect broader societal pressures around inequality, demographic change, and resource allocation. <strong>Both systems require significant reform to address workforce shortages, improve access, and maintain financial sustainability</strong> while delivering quality care to increasingly diverse and complex patient populations.
              </NoteBox>
            </div>
          </CivItem>

          <CivItem value="key-topics" title="Key Topics Summary">
            <div className="grid gap-4">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white border border-pr-gray-light border-l-[3px] border-l-pr-black rounded-md p-4">
                  <h4 className="font-dm-serif text-pr-black mb-2">{topic.title}</h4>
                  <p className="text-sm text-pr-gray-dark/90 mb-3">{topic.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.vocabulary.map((word, idx) => (
                      <span key={idx} className="text-xs bg-pr-gray-bg text-pr-black px-2 py-1 rounded">{word}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Healthcare Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav next={{ label: 'Media', to: '/formation/anglais/civilisation/media' }} />
      </div>
    </PRFormationLayout>
  );
};

export default HealthSystemsPage;
