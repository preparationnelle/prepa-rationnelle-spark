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

const JusticePage = () => {
  const keyTopics = [
    { title: 'Rule of Law Principles', content: 'Laws apply equally to all, government power constrained by law, democratic stability', vocabulary: ['rule of law', 'government power', 'constrained by law', 'democratic stability', 'accountability'] },
    { title: 'Judicial Independence', content: 'Court impartiality, prosecutorial independence, separation of powers, checks and balances', vocabulary: ['judicial independence', 'impartiality', 'prosecutorial independence', 'separation of powers', 'checks and balances'] },
    { title: 'Government Overreach', content: 'Executive power expansion, hasty legislation, Henry VIII powers, parliamentary oversight', vocabulary: ['executive power', 'hasty legislation', 'Henry VIII powers', 'parliamentary oversight', 'transparency'] },
    { title: 'Access to Justice', content: 'Legal aid cuts, case backlogs, court delays, equal protection under law', vocabulary: ['legal aid', 'case backlogs', 'court delays', 'equal protection', 'justice system'] },
  ];

  const essentialVocabulary = [
    { term: 'rule of law', definition: 'The principle that laws apply equally to all and government power is constrained by law' },
    { term: 'judicial independence', definition: 'The principle that courts should be free from political interference' },
    { term: 'checks and balances', definition: 'System of controls that limit the power of different branches of government' },
    { term: 'Henry VIII powers', definition: 'Executive powers allowing ministers to change laws by decree with minimal parliamentary oversight' },
    { term: 'separation of powers', definition: 'Division of government responsibilities into distinct branches to prevent concentration of power' },
    { term: 'accountability', definition: 'The obligation to answer for one\'s actions and accept responsibility for them' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Justice' },
      ]}
      badge="Civilisation · 2025"
      title="Justice"
      titleAccent="& the Rule of Law"
      subtitle="Rule of law challenges, judicial independence, government overreach, and democratic accountability."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Justice Facts 2025"
          stats={[
            { value: '2020', label: 'US election certification' },
            { value: '2021', label: 'Capitol riot January 6' },
            { value: '62K+', label: 'Pending Crown Court cases UK' },
            { value: '2023', label: 'Illegal Migration Act UK' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Justice Topics">
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

          <CivItem value="us-justice-challenges" title="US Justice System: Stress-Testing the Rule of Law">
            <div className="space-y-4">
              <p>
                Respect for the rule of law – the principle that laws apply equally to all, and that government power is constrained by law – has been tested in recent years. In the United States, the justice system has been stress-tested by high-profile cases involving political figures. The ongoing prosecutions of former President Donald Trump epitomize this tension. Trump has been indicted in multiple cases on charges ranging from mishandling classified information to conspiring to overturn the 2020 election. The fact that a former president can face trial is itself a statement about rule of law: prosecutors and judges have repeatedly affirmed that no one is above the law, and that even political leaders must be accountable under the same rules as ordinary citizens.
              </p>
              <p>
                Many legal experts hailed these moves as a sign of a healthy democracy, arguing that holding high-ranking officials to account is critical for long-term democratic stability. At the same time, Trump and his allies attacked the legitimacy of the investigations, claiming political bias and even vowing retribution, which has fueled public distrust among his supporters. This has put institutions in a delicate position: they must demonstrate impartial justice in a hyper-partisan environment. Nonetheless, the courts – from trial judges up to the Supreme Court – have so far proceeded methodically, for example repeatedly rejecting claims of "presidential immunity" to prosecution. The U.S. Department of Justice, too, has stressed its independence in these matters. Overall, while American democracy showed its resilience (e.g. courts and Congress certified the 2020 election despite pressure), concerns linger about continued politicization of the judiciary and threats of violence (like the Capitol riot on January 6, 2021) that challenged the peaceful transfer of power.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on the rule of law, judicial independence, or democratic accountability. It provides concrete examples of how the justice system handles high-profile political cases and can support arguments about the strength of democratic institutions or the importance of equal treatment under the law. It's also useful for analyzing the tension between political pressure and judicial independence.
              </EssayBox>
              <CivVocabBox words="rule of law; constrained by law; stress-tested; high-profile cases; epitomize; tension; indicted; mishandling; conspiring; overturn; prosecutors; affirmed; above the law; accountable; hailed; healthy democracy; holding to account; democratic stability; legitimacy; political bias; vowed retribution; fueled distrust; delicate position; impartial justice; hyper-partisan; methodically; presidential immunity; politicization; peaceful transfer of power" />
            </div>
          </CivItem>

          <CivItem value="uk-rule-law-debates" title="UK Rule of Law: Government Overreach and Erosion of Checks">
            <div className="space-y-4">
              <p>
                In the United Kingdom, rule of law debates have centered on government overreach and the erosion of checks and balances. A 2024 report by legal charity JUSTICE warned that the UK's commitment to rule of law has "regressed significantly on multiple fronts," undermining the democratic fabric. The report cited examples: hastily passed legislation with little scrutiny, more frequent use of "Henry VIII powers" (where ministers can change laws by decree with minimal parliamentary oversight), and open disregard for international or human rights obligations.
              </p>
              <p>
                For instance, the Illegal Migration Act 2023 – which aimed to bar asylum seekers arriving irregularly from ever settling in Britain – was pushed through without any public consultation, raising alarms about transparency. Similarly, new anti-protest laws in 2023 gave police sweeping authority to curb demonstrations causing even "more than minor" disruption; judges later struck down these regulations as unlawfully broad, rebuking ministers for exceeding their powers. This judicial pushback – the Court of Appeal ruling that officials cannot simply "step outside" the law – was hailed as a victory for democratic checks and balances. Additionally, years of budget cuts to legal aid and a backlog of cases have effectively limited access to justice for many Britons. As of early 2023, over 62,000 cases were pending in Crown Courts and hundreds of thousands in lower courts, delaying trials for victims and defendants.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on executive power, parliamentary oversight, or the role of courts in maintaining democratic balance. It provides specific examples of legislative overreach and judicial responses, making it useful for arguments about the importance of checks and balances or the need for transparent law-making processes. It can also support points about the impact of budget cuts on access to justice.
              </EssayBox>
              <CivVocabBox words="government overreach; erosion; checks and balances; regressed significantly; democratic fabric; hastily passed legislation; scrutiny; Henry VIII powers; decree; parliamentary oversight; disregard; obligations; bar; asylum seekers; irregularly; pushed through; public consultation; transparency; sweeping authority; curb demonstrations; struck down; unlawfully broad; rebuking; exceeding powers; judicial pushback; step outside; victory; budget cuts; legal aid; backlog; pending; Crown Courts; delaying trials" />
            </div>
          </CivItem>

          <CivItem value="judicial-independence" title="Judicial Independence: Maintaining Impartiality in Political Storms">
            <div className="space-y-4">
              <p>
                The principle of judicial independence – that courts should be free from political interference and make decisions based solely on the law – has faced unprecedented challenges in recent years. In the United States, the Department of Justice has repeatedly stressed its independence in politically sensitive matters, particularly in cases involving former political leaders. Prosecutors have emphasized that their decisions are based on evidence and legal standards, not political considerations. This commitment to impartial justice has been crucial in maintaining public confidence in the legal system during highly partisan times.
              </p>
              <p>
                Courts at all levels have demonstrated their independence by rejecting political pressure and ruling according to established legal principles. For example, multiple courts have rejected claims of "presidential immunity" from prosecution, affirming that no individual, regardless of their position, is above the law. The Supreme Court has maintained its role as a check on executive power, even when its decisions have been politically controversial. This judicial independence has been essential in preserving the separation of powers and ensuring that the rule of law remains the foundation of democratic governance. However, the increasing politicization of judicial appointments and the growing tendency to view court decisions through partisan lenses pose ongoing challenges to maintaining this independence.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on judicial independence, the separation of powers, or the role of courts in democracy. It provides concrete examples of how courts maintain their independence and can support arguments about the importance of an impartial judiciary or the challenges of maintaining judicial independence in polarized environments. It's also useful for analyzing the relationship between courts and other branches of government.
              </EssayBox>
              <CivVocabBox words="judicial independence; political interference; decisions; evidence; legal standards; political considerations; impartial justice; public confidence; legal system; partisan; demonstrated; rejecting; political pressure; established legal principles; presidential immunity; above the law; separation of powers; foundation; democratic governance; politicization; judicial appointments; partisan lenses; ongoing challenges" />
            </div>
          </CivItem>

          <CivItem value="access-justice" title="Access to Justice: Legal Aid Cuts and Court Backlogs">
            <div className="space-y-4">
              <p>
                Equal access to justice – a fundamental principle of the rule of law – has been significantly compromised in recent years, particularly in the United Kingdom. Years of budget cuts to legal aid have created a situation where many individuals cannot afford legal representation, effectively limiting their ability to navigate the justice system. This has created a two-tier system where those with financial resources can access quality legal representation while others are left to represent themselves or forgo their legal rights entirely.
              </p>
              <p>
                The impact of these cuts has been compounded by massive court backlogs that delay justice for everyone. As of early 2023, over 62,000 cases were pending in Crown Courts alone, with hundreds of thousands more in lower courts. These delays affect both victims seeking justice and defendants awaiting trial, creating a situation where justice delayed becomes justice denied. The COVID-19 pandemic further exacerbated these backlogs, as court closures and social distancing measures slowed proceedings to a crawl. While some efforts have been made to address these issues through digital court systems and alternative dispute resolution, the fundamental problem of inadequate funding for the justice system remains. This situation raises serious questions about whether the principle of equal protection under the law can be maintained when access to justice is so clearly dependent on financial resources.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on access to justice, legal aid funding, or the impact of budget cuts on the justice system. It provides concrete data on court backlogs and can support arguments about the importance of adequate funding for justice or the consequences of creating barriers to legal representation. It's also useful for analyzing the relationship between financial resources and access to justice.
              </EssayBox>
              <CivVocabBox words="equal access to justice; fundamental principle; compromised; budget cuts; legal aid; legal representation; navigate; justice system; two-tier system; financial resources; quality legal representation; forgo; legal rights; compounded; massive court backlogs; delay justice; pending; Crown Courts; victims; defendants; justice delayed; justice denied; exacerbated; court closures; social distancing; proceedings; digital court systems; alternative dispute resolution; inadequate funding; equal protection under the law; dependent on" />
            </div>
          </CivItem>

          <CivItem value="international-perspectives" title="International Perspectives: Human Rights and International Law">
            <div className="space-y-4">
              <p>
                The rule of law is not just a domestic concern but also involves compliance with international legal obligations and human rights standards. The UK's approach to international law has come under scrutiny, particularly regarding its treatment of asylum seekers and migrants. The Illegal Migration Act 2023, which aimed to bar irregular arrivals from ever settling in Britain, raised concerns about compliance with international refugee law and human rights obligations. Legal experts and international organizations warned that such measures could violate the principle of non-refoulement and other fundamental human rights protections.
              </p>
              <p>
                Similarly, the UK's approach to international trade agreements and its relationship with the European Court of Human Rights has been questioned. Some government officials have suggested that the UK should consider withdrawing from certain international human rights frameworks, arguing that they limit domestic policy choices. However, others maintain that international legal obligations are essential for maintaining the UK's reputation as a country that respects the rule of law and human rights. This tension between national sovereignty and international legal obligations reflects broader debates about how countries balance domestic interests with global responsibilities. The challenge for the UK and other nations is to find ways to pursue their policy objectives while remaining compliant with international law and maintaining their commitment to human rights standards.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on international law, human rights, or the tension between national sovereignty and global obligations. It provides concrete examples of how domestic policies can conflict with international standards and can support arguments about the importance of international legal frameworks or the challenges of balancing domestic and international interests. It's also useful for analyzing the role of international law in maintaining human rights standards.
              </EssayBox>
              <CivVocabBox words="domestic concern; compliance; international legal obligations; human rights standards; scrutiny; treatment; asylum seekers; migrants; irregular arrivals; international refugee law; human rights obligations; legal experts; international organizations; violate; principle of non-refoulement; fundamental human rights protections; international trade agreements; European Court of Human Rights; withdrawing; international human rights frameworks; limit; domestic policy choices; reputation; rule of law; tension; national sovereignty; global responsibilities; policy objectives; compliant; commitment; human rights standards" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Justice Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Rule of Law and Democracy">
                "The rule of law is the foundation of democratic governance." Discuss this statement with reference to recent challenges in both the US and UK.
              </EssayQuestion>
              <EssayQuestion title="2. Judicial Independence">
                To what extent can judicial independence be maintained in highly politicized environments? Analyze with reference to contemporary examples.
              </EssayQuestion>
              <EssayQuestion title="3. Executive Power and Checks">
                "Government overreach threatens the rule of law." Assess this claim by examining recent developments in executive power expansion.
              </EssayQuestion>
              <EssayQuestion title="4. Access to Justice">
                How do budget cuts to legal aid and court backlogs affect the principle of equal protection under the law?
              </EssayQuestion>
              <EssayQuestion title="5. International Law Compliance">
                "National sovereignty should take precedence over international legal obligations." Discuss this statement with reference to human rights and refugee law.
              </EssayQuestion>
              <EssayQuestion title="6. Political Accountability">
                To what extent should former political leaders be held accountable under the same legal standards as ordinary citizens?
              </EssayQuestion>
              <EssayQuestion title="7. Court Backlogs and Delays">
                "Justice delayed is justice denied." Assess this claim by examining the impact of court backlogs on victims and defendants.
              </EssayQuestion>
              <EssayQuestion title="8. Future of the Rule of Law">
                How can democratic societies maintain robust rule of law while addressing contemporary challenges like political polarization and executive overreach?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav next={{ label: 'Media', to: '/formation/anglais/civilisation/media' }} />
      </div>
    </PRFormationLayout>
  );
};

export default JusticePage;
