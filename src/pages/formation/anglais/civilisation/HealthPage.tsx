import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem, CivVocabBox } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const EssayBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-pr-gray-bg border-l-[3px] border-pr-black p-4 rounded-r-md mt-4">
    <h4 className="font-dm-serif text-pr-black mb-2">Use in essays</h4>
    <p className="text-pr-gray-dark text-sm leading-relaxed">{children}</p>
  </div>
);

const EssayQuestion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-pr-gray-bg border border-pr-gray-light rounded-lg p-4">
    <h4 className="font-dm-serif text-pr-black mb-2">{title}</h4>
    <p className="text-sm text-pr-gray-dark/90">{children}</p>
  </div>
);

const VocabRow: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-pr-gray-light/60 last:border-0">
    <span className="font-dm-sans font-semibold text-pr-black text-sm sm:w-1/3 shrink-0">{term}</span>
    <span className="text-sm text-pr-gray-dark/90">{definition}</span>
  </div>
);

const HealthPage = () => {
  const keyTopics = [
    { title: 'Healthcare Systems', content: 'NHS crisis, public vs private models, universal coverage, healthcare funding', vocabulary: ['NHS', 'universal coverage', 'single-payer', 'healthcare funding', 'waiting lists'] },
    { title: 'Mental Health', content: 'Youth mental health crisis, anxiety, depression, social media impact, stigma', vocabulary: ['mental health', 'anxiety', 'depression', 'stigma', 'counseling'] },
    { title: 'Public Health Crises', content: 'Opioid epidemic, COVID-19 legacy, pandemic preparedness, vaccine equity', vocabulary: ['opioid epidemic', 'pandemic', 'vaccine equity', 'public health', 'preparedness'] },
    { title: 'Healthcare Access', content: 'Health inequalities, insurance coverage, medical tourism, healthcare innovation', vocabulary: ['health inequalities', 'insurance', 'medical tourism', 'innovation', 'access'] },
  ];

  const essentialVocabulary = [
    { term: 'NHS (National Health Service)', definition: 'The UK\'s publicly funded healthcare system providing universal coverage' },
    { term: 'universal coverage', definition: 'Healthcare system that provides medical care to all citizens regardless of ability to pay' },
    { term: 'single-payer', definition: 'Healthcare system where the government pays for all healthcare costs' },
    { term: 'mental health', definition: 'A person\'s psychological and emotional well-being' },
    { term: 'opioid epidemic', definition: 'Widespread addiction to and overdose deaths from opioid drugs' },
    { term: 'pandemic preparedness', definition: 'Planning and preparation for large-scale disease outbreaks' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Health' },
      ]}
      badge="Civilisation · 2025"
      title="Health"
      titleAccent="& Healthcare Systems"
      subtitle="NHS crisis, mental health, opioid epidemic, and pandemic preparedness in the UK and US."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Health Facts 2025"
          stats={[
            { value: '7M+', label: 'NHS waiting list UK' },
            { value: '1.2M', label: 'Youth mental health referrals' },
            { value: '500K', label: 'Opioid deaths US (20 years)' },
            { value: '17%', label: 'US healthcare GDP share' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Health Topics">
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

          <CivItem value="nhs-crisis" title="The NHS in Crisis: A Turning Point for UK Healthcare">
            <div className="space-y-4">
              <p>
                Few institutions are as beloved in Britain as the National Health Service (NHS), but by 2025 it faces a breaking point that has triggered urgent calls for reform. Years of underinvestment, an aging population, and pandemic aftershocks have led to record-high waiting lists: over 7 million patients in England are awaiting elective treatments, and it's not uncommon for people to wait 12+ hours in A&E (emergency rooms) for acute care. In social care, about 300,000 individuals are stuck waiting for assessments or care packages, often languishing in hospital beds because there's nowhere to discharge them.
              </p>
              <p>
                These strains have spurred many who can afford it to seek private alternatives or even "medical tourism" trips abroad for faster treatment—some Britons fly to countries like Estonia or India for surgeries to escape the wait. Scandalously, doctors and nurses warn that avoidable patient deaths are occurring due to delays. The situation has sparked a national debate: remain loyal to the tax-funded, free-at-point-of-use NHS model and fix it, or consider radical change. Solutions under discussion include boosting preventive care ("prevention is better than cure" as the mantra goes) to keep people healthier and out of hospitals, embracing technology (for instance, using AI to handle administrative tasks—since doctors reportedly spend 60% of their time on paperwork), and restructuring funding. Politically, all parties pledge to "save the NHS," but consensus is elusive on how. What's clear is that without bold action to add capacity, retain staff (after waves of strikes over pay), and modernize services, the NHS's proud promise of cradle-to-grave care risks slipping away. The next few years may well decide whether the NHS can sustain its founding principles in the 21st century or if a different path will be forced by sheer necessity.
              </p>
              <EssayBox>
                This is prime material for healthcare or social policy essays, especially those asking about challenges in public services. It provides data and vivid detail about NHS problems to illustrate issues in a welfare state. It can support arguments about the importance of investment in public goods, or be contrasted against private healthcare models. Also useful for discussing how COVID has long-term effects on systems.
              </EssayBox>
              <CivVocabBox words="beloved; breaking point; aftershocks; elective treatments; languishing; discharge; spurred; medical tourism; scandalously; radical change; preventive care; mantra; embrace technology; administrative tasks; capacity; retain staff; cradle-to-grave; founding principles; sheer necessity" />
            </div>
          </CivItem>

          <CivItem value="public-vs-private" title="Public vs Private Healthcare: Contrasting the UK and US">
            <div className="space-y-4">
              <p>
                The United Kingdom and the United States offer a study in contrasts when it comes to healthcare systems—each with strengths, each with glaring weaknesses. The UK's National Health Service (NHS) is a single-payer, tax-funded system that provides universal coverage: no British citizen worries about medical bills or insurance networks when seeing a doctor. This fosters a sense of equity and social solidarity; even in times of crisis (like the COVID-19 pandemic), everyone is guaranteed treatment. However, the NHS often struggles with limited resources, resulting in long waits and rationed care as demand outstrips supply.
              </p>
              <p>
                By 2025, as discussed, it's not unusual for non-urgent surgeries to be delayed for months due to backlogs. In the U.S., by contrast, healthcare is largely a market-driven patchwork of private insurers, employer plans, and government programs like Medicare/Medicaid. The upside is innovation and choice: top U.S. hospitals offer cutting-edge treatments with minimal waiting times for those who can pay, and competition can spur efficiencies. But the downsides are severe: 27.5 million Americans (about 8.5% of the population) had no health insurance as of 2018, and many more are underinsured, meaning a serious illness could lead to bankruptcy. The U.S. spends a staggering 17% of GDP on healthcare—far more than the UK's ~10%—yet achieves worse overall health outcomes like life expectancy, in part because access is so uneven. Essentially, the UK prioritizes coverage at the expense of convenience, whereas the U.S. prioritizes innovation and speed at the expense of universal access. Policymakers in both countries debate hybrids: Should the NHS allow more private sector involvement to ease burden? Should the U.S. expand public options or even adopt "Medicare for All"? The comparison highlights that healthcare involves trade-offs, and societies must choose which values to emphasize in designing their systems.
              </p>
              <EssayBox>
                This comparative paragraph is handy for questions on health systems, or more broadly on public vs private provision of services. It draws a direct comparison that can be used to argue for or against either model, depending on the angle—just pick the parts that support your thesis. It's also useful evidence in discussions of how cultural values shape policy (equity vs individualism, etc.).
              </EssayBox>
              <CivVocabBox words="study in contrasts; single-payer; universal coverage; equity; solidarity; rationed care; outstrips supply; backlogs; patchwork; upside; spur efficiencies; downside; underinsured; bankruptcy; staggering; life expectancy; uneven; convenience; burden; trade-offs; emphasize" />
            </div>
          </CivItem>

          <CivItem value="mental-health-crisis" title="Mental Health Crisis Among Youth">
            <div className="space-y-4">
              <p>
                Across Western countries, mental health issues—especially among children and adolescents—have surged to alarming levels, amounting to a silent epidemic that could have long-term societal costs. In the UK, an NHS report in 2024 found that over 1.2 million young people (under 18) were referred for mental health support in just one year, a number far exceeding available services. Conditions like anxiety, depression, self-harm, and eating disorders have spiked, with experts partly blaming factors from social media pressures to academic stress to pandemic disruptions in routine and socialization.
              </p>
              <p>
                The system is overwhelmed: it's not uncommon for teens in crisis to wait months for an initial appointment with a psychologist or psychiatrist. Many schools lack the counselors to address problems early, and specialist clinics are forced to triage only the most severe cases (often those involving risk of suicide). The economic and human toll of inaction is huge—a study by the London School of Economics estimated the lifetime cost of one cohort's childhood mental issues could reach into the trillions in lost productivity and health expenses if untreated. Other countries echo similar patterns: in the U.S., emergency visits for suspected teen suicide attempts jumped nearly 40% in 2021 compared to pre-pandemic times. Policymakers are starting to respond. Some call for embedding mental health education and screenings in schools, training more clinicians, and using digital tools (like therapy apps or text support lines) to expand reach. There's also a push to view mental health as equal to physical health, ending the stigma that often prevents discussion or early help. The crisis serves as a wake-up call that the well-being of the next generation needs urgent, sustained attention—because today's anxious 15-year-old could become tomorrow's struggling adult if nothing changes.
              </p>
              <EssayBox>
                This paragraph is useful for social issues, public health, or education topics. It provides statistics and cross-national context. It can support arguments about the impact of modern life on youth or the need for policy intervention. It could also be used to critique government spending priorities (like "we spend on X but neglect youth mental health"). It's emotive but backed by data.
              </EssayBox>
              <CivVocabBox words="alarming; silent epidemic; long-term societal costs; referred; exceeding; self-harm; spiked; disruptions; overwhelmed; psychologist/psychiatrist; triage; cohort; productivity; echo; embed; clinicians; stigma; well-being; sustained attention; wake-up call" />
            </div>
          </CivItem>

          <CivItem value="opioid-epidemic" title="The Opioid Epidemic: Profit and Public Health">
            <div className="space-y-4">
              <p>
                The United States continues to reel from an opioid overdose epidemic that has killed half a million people over two decades—a crisis born at the nexus of corporate greed and regulatory failure. It began in the late 1990s when pharmaceutical companies like Purdue Pharma aggressively marketed opioid painkillers (e.g., OxyContin) to doctors, falsely downplaying addiction risks. By the 2010s, waves of addiction to prescription opioids gave way to heroin use, and more recently to fentanyl—a synthetic opioid 50-100 times more potent than morphine.
              </p>
              <p>
                Fentanyl, often illicitly manufactured and mixed into other drugs, has driven overdose deaths to record highs; in 2021, over 100,000 Americans died of drug overdoses in a single year, two-thirds from synthetic opioids. Some cities report more fatalities from opioid overdoses than from the COVID-19 pandemic over similar periods. The crisis has laid bare the imbalance in healthcare: corporate interests were able to exploit vulnerable patients for profit, as seen in revelations that companies incentivized sales reps to flood communities with pills even as overdose rates climbed. Litigation has led to multibillion-dollar settlements against drug makers and distributors, but critics note much of the money is delayed or tied up in legal battles. Meanwhile, public health authorities have shifted to treating addiction as a medical issue rather than a moral failing. Harm reduction strategies—like making the antidote naloxone widely available, opening supervised injection sites, and providing medication-assisted treatment (e.g., methadone)—are expanding, though not without controversy. The opioid saga is a cautionary tale for other countries now facing increased painkiller use. It underscores the need for vigilant drug regulation, better mental health and pain management services, and the imperative of prioritizing patients' welfare over corporate profit.
              </p>
              <EssayBox>
                This paragraph is rich for any essay on public health, ethics in business, or regulatory oversight. It gives the chronology and scope of a major social issue, plus policy responses. You can use it to argue about the consequences of weak regulation or to emphasize treating social issues with compassion vs punishment. Also, it can serve as a case study of how multiple systems (healthcare, legal, corporate) intersect.
              </EssayBox>
              <CivVocabBox words="reel from; nexus; greed; regulatory failure; marketed; downplaying; gave way to; potent; illicitly; fatalities; exploit; incentivized; flood (with pills); litigation; settlements; moral failing; harm reduction; antidote; supervised injection sites; methadone; saga; cautionary tale; vigilant; imperative; welfare; profit" />
            </div>
          </CivItem>

          <CivItem value="pandemic-preparedness" title="Pandemic Preparedness and the Legacy of COVID-19">
            <div className="space-y-4">
              <p>
                The COVID-19 pandemic, which began in 2020, exposed both the strengths and weaknesses of global health systems and left a complicated legacy that is shaping future preparedness. On one hand, it was a triumph of science: within a year, multiple effective vaccines were developed, an unprecedented feat that saved millions of lives and proved the power of global collaboration in research. mRNA vaccine technology in particular has opened new frontiers for other diseases like cancer and HIV. On the other hand, COVID revealed glaring inequities.
              </p>
              <p>
                Wealthy nations bought up early vaccine supplies and administered boosters while poorer countries waited—an outcome that World Health Organization officials decried as "vaccine apartheid." This wasn't just a moral failing but a strategic one, as low vaccination rates in parts of Africa and Asia allowed the virus to keep circulating and mutating, spawning new variants that threatened everyone. Economically, the pandemic's disruption of supply chains and labor markets contributed to the inflation and workforce shifts we see in 2023–2025 (e.g., the "Great Resignation" where workers re-evaluated jobs). Education suffered a setback too: school closures widened learning gaps, which some studies estimate could reduce future earnings for this generation. Now, countries are applying lessons learned. Many have set up domestic vaccine manufacturing to avoid reliance on imports. There's renewed investment in public health infrastructure: stockpiling protective gear, funding genomic surveillance to detect new pathogens, and formalizing plans for rapid lockdowns or travel screens if needed. Internationally, proposals circulate for a pandemic treaty to ensure data sharing and equitable access to tools when the next big one hits. COVID-19, in effect, served as a stress test. Whether the world truly heeds its warnings—"never again" to being caught unprepared—remains to be seen, but the experiences of 2020–2022 will undoubtedly inform how we confront public health threats going forward.
              </p>
              <EssayBox>
                This is useful for topics on global cooperation, lessons from crises, or science and society. It shows both positive and negative outcomes from a major event. You could use it to argue for more funding of global institutions, or to highlight how crises accelerate innovation. Also good for discussing inequality. It's broad, so it can be trimmed or focused on depending on the angle.
              </EssayBox>
              <CivVocabBox words="legacy; preparedness; feat; collaboration; glaring inequities; boosters; decried; apartheid; circulating; mutating; variants; disruption; workforce shifts; Great Resignation; widened learning gaps; stockpiling; genomic surveillance; pathogens; treaty; stress test; heeds; warnings; unprepared; public health threats" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Health Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. NHS Crisis and Reform">
                "The NHS has reached a breaking point and requires radical reform." Discuss this statement with reference to current challenges and potential solutions.
              </EssayQuestion>
              <EssayQuestion title="2. Healthcare System Models">
                Compare and contrast the UK's NHS with the US healthcare system. Which model better serves the needs of its population?
              </EssayQuestion>
              <EssayQuestion title="3. Youth Mental Health Crisis">
                "Mental health issues among young people represent a silent epidemic with long-term societal costs." Assess this claim and discuss policy responses.
              </EssayQuestion>
              <EssayQuestion title="4. Opioid Epidemic and Regulation">
                How has the opioid epidemic in the United States exposed the relationship between corporate interests and public health? What lessons can be learned?
              </EssayQuestion>
              <EssayQuestion title="5. Pandemic Preparedness">
                "COVID-19 served as a stress test for global health systems." Discuss the lessons learned and their implications for future pandemic preparedness.
              </EssayQuestion>
              <EssayQuestion title="6. Healthcare Inequalities">
                To what extent do healthcare systems reflect broader social inequalities? Discuss with reference to access, quality, and outcomes.
              </EssayQuestion>
              <EssayQuestion title="7. Technology in Healthcare">
                "Technology will solve the healthcare crisis." Assess this claim by examining current challenges and technological solutions.
              </EssayQuestion>
              <EssayQuestion title="8. Global Health Cooperation">
                How effectively has the international community responded to global health challenges? Discuss with reference to recent crises and cooperation.
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Economy', to: '/formation/anglais/civilisation/economy' }} next={{ label: 'Education', to: '/formation/anglais/civilisation/education' }} />
      </div>
    </PRFormationLayout>
  );
};

export default HealthPage;
