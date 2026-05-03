import React from 'react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { CivAccordion, CivItem, CivVocabBox } from '@/components/formation/CivAccordion';
import { CivStats } from '@/components/formation/CivStats';
import { CivPageFooterNav } from '@/components/formation/CivPageFooterNav';

const EssayBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-pr-orange-pale border-l-[3px] border-pr-orange p-4 rounded-r-md mt-4">
    <h4 className="font-dm-serif text-pr-orange-dark mb-2">Use in essays</h4>
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
    <span className="font-dm-sans font-semibold text-pr-orange-dark text-sm sm:w-1/3 shrink-0">{term}</span>
    <span className="text-sm text-pr-gray-dark/90">{definition}</span>
  </div>
);

const EducationPage = () => {
  const keyTopics = [
    { title: 'Culture Wars in Education', content: 'School boards as battlegrounds, political campaigns, curriculum controversies, ideological conflicts', vocabulary: ['culture wars', 'school boards', 'indoctrination', 'curriculum', 'ideological conflicts'] },
    { title: 'Curriculum Content Debates', content: 'Race, history, gender, sexuality, critical race theory, decolonization, diverse histories', vocabulary: ['critical race theory', 'decolonization', 'diverse histories', 'traditional narratives', 'inclusive values'] },
    { title: 'Book Bans and Censorship', content: 'Library restrictions, banned books, LGBTQ+ issues, censorship, freedom of expression', vocabulary: ['book bans', 'censorship', 'freedom of expression', 'library restrictions', 'LGBTQ+ issues'] },
    { title: 'Special Education Controversies', content: 'Autism/ADHD diagnoses, neurodivergent students, support services, cost-cutting reforms', vocabulary: ['neurodivergent', 'autism', 'ADHD', 'special needs', 'support services'] },
  ];

  const essentialVocabulary = [
    { term: 'culture wars', definition: 'Intense conflicts over cultural values, beliefs, and social issues in society' },
    { term: 'school boards', definition: 'Elected bodies that govern local school districts and make educational policy decisions' },
    { term: 'critical race theory', definition: 'Academic framework examining how race and racism intersect with law and society' },
    { term: 'decolonization', definition: 'Process of challenging colonial perspectives and incorporating diverse cultural viewpoints' },
    { term: 'indoctrination', definition: 'Teaching someone to accept beliefs uncritically, often used as a political accusation' },
    { term: 'neurodivergent', definition: 'Having neurological differences such as autism, ADHD, or other developmental conditions' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Education' },
      ]}
      badge="Civilisation · 2025"
      title="Education"
      titleAccent="& Culture Wars"
      subtitle="School boards as battlegrounds, curriculum debates, book bans, and special education in the US and UK."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Education Facts 2025"
          stats={[
            { value: '$3.2B', label: 'Diverted to security/legal costs' },
            { value: '2023-24', label: 'School year of major conflicts' },
            { value: '2024', label: 'Labour government elected UK' },
            { value: 'Conservative', label: 'Previous UK government' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Education Topics">
            <div className="grid gap-4">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white border border-pr-gray-light border-l-[3px] border-l-pr-orange rounded-md p-4">
                  <h4 className="font-dm-serif text-pr-black mb-2">{topic.title}</h4>
                  <p className="text-sm text-pr-gray-dark/90 mb-3">{topic.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.vocabulary.map((word, idx) => (
                      <span key={idx} className="text-xs bg-pr-orange-pale text-pr-orange-dark px-2 py-1 rounded">{word}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CivItem>

          <CivItem value="us-education-culture-wars" title="US Education Culture Wars: School Boards as Battlegrounds">
            <div className="space-y-4">
              <p>
                Educational institutions have become central battlegrounds in broader culture wars. In the United States, school boards and curricula have faced heated political campaigns over how to teach topics like race, history, gender, and sexuality. After the pandemic, conservative activists targeted public schools with accusations of "indoctrination," leading to efforts to ban books and restrict teaching about racism or LGBTQ+ issues. These conflicts have had tangible costs: one study found schools diverted an estimated $3.2 billion in the 2023–24 year to handle security, legal fees, and PR to counteract such attacks.
              </p>
              <p>
                School officials report spending countless hours addressing disinformation and even facing harassment and threats amid this "nationalized conflict campaign". In one district, controversies over critical race theory and book bans forced attendees at board meetings to pass through metal detectors and cost hundreds of thousands of dollars in extra security and legal expenses. These education culture wars often invoke charged rhetoric – for example, some officials were baselessly smeared as "pedophiles" or accused of "grooming" children – reflecting how fiercely ideological and divisive school debates have become.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on education policy, political polarization, or freedom of expression in schools. It provides concrete data on financial costs and specific examples of security measures, making it useful for arguments about the real impact of culture wars on education. It can support points about the politicization of education or the challenges of maintaining academic freedom in polarized environments.
              </EssayBox>
              <CivVocabBox words="battlegrounds; heated political campaigns; indoctrination; tangible costs; diverted; disinformation; harassment; threats; nationalized conflict campaign; controversies; metal detectors; charged rhetoric; baselessly smeared; grooming; fiercely ideological; divisive" />
            </div>
          </CivItem>

          <CivItem value="uk-curriculum-debates" title="UK Curriculum Debates: Decolonization vs Traditional Narratives">
            <div className="space-y-4">
              <p>
                In the UK, similar debates are emerging over curriculum content and school policies, though often with a local twist. Disputes have erupted over efforts to "decolonize" the curriculum and teach more diverse histories, versus pushback that schools should focus on traditional narratives. Under the previous Conservative government, guidance was issued to bar teaching "critical" theories of gender and race, which some on the right saw as partisan. The new Labour government elected in late 2024 signaled it would review that guidance, reflecting an opposing view that schools should actively promote inclusive values.
              </p>
              <p>
                Additionally, the UK's culture wars have extended to special education: commentators and even political figures questioned rising diagnoses of autism/ADHD as possible "scams" fueled by identity politics. This has sowed fear among parents of children with special needs, as the government considers reforms to cut costs in special education – a move critics warn could reduce support for many neurodivergent students. In short, from battles over library books in America to fights over history lessons and services for special-needs students in Britain, education has become a proxy arena for broader ideological conflicts in society.
              </p>
              <EssayBox>
                This paragraph is valuable for comparative education discussions or analysis of how different political systems handle similar cultural conflicts. It shows the evolution of policy under different governments and can be used to argue about the role of politics in education. It's also useful for discussions about special education funding and the intersection of identity politics with educational policy.
              </EssayBox>
              <CivVocabBox words="local twist; decolonize; diverse histories; traditional narratives; guidance; partisan; inclusive values; special education; diagnoses; scams; identity politics; sowed fear; reforms; cut costs; neurodivergent; proxy arena; ideological conflicts" />
            </div>
          </CivItem>

          <CivItem value="book-bans-censorship" title="Book Bans and Censorship: Library Restrictions and Freedom of Expression">
            <div className="space-y-4">
              <p>
                The culture wars in education have manifested most visibly in controversies over book bans and library restrictions. Conservative activists have targeted books dealing with LGBTQ+ issues, critical race theory, and diverse perspectives, arguing that such materials constitute inappropriate content for students. These efforts have led to the removal of hundreds of books from school libraries across the United States, with titles by authors of color and LGBTQ+ authors being particularly vulnerable to challenges.
              </p>
              <p>
                The book banning movement has sparked intense debates about intellectual freedom, age-appropriate content, and parental rights versus educational autonomy. Proponents of restrictions argue that parents should have control over what their children read in school, while opponents see these actions as censorship that limits students' exposure to diverse viewpoints and real-world issues. The American Library Association has documented a significant increase in book challenges, with many targeting materials that address racism, gender identity, and sexual orientation. These controversies often reflect broader societal divisions and have become rallying points for both conservative and progressive political movements.
              </p>
              <EssayBox>
                This paragraph is excellent for discussions on intellectual freedom, censorship, or the role of libraries in education. It provides concrete examples of the book banning movement and can support arguments about the importance of diverse reading materials or the dangers of educational censorship. It's also useful for analyzing the tension between parental rights and educational autonomy.
              </EssayBox>
              <CivVocabBox words="manifested; controversies; targeted; inappropriate content; removal; vulnerable; challenges; intellectual freedom; age-appropriate; parental rights; educational autonomy; censorship; diverse viewpoints; real-world issues; documented; rallying points; progressive" />
            </div>
          </CivItem>

          <CivItem value="special-education-controversies" title="Special Education Controversies: Autism/ADHD Diagnoses and Support Services">
            <div className="space-y-4">
              <p>
                Special education has become another front in the education culture wars, particularly regarding the rising diagnoses of autism and ADHD among students. Some commentators and political figures have questioned whether the increase in diagnoses represents genuine medical need or is driven by identity politics and over-diagnosis. This skepticism has created a challenging environment for parents of children with special needs, who often face long waiting lists and battles with school districts to secure appropriate support services.
              </p>
              <p>
                The debate over special education funding has intensified as governments seek to control costs. In the UK, the Conservative government's consideration of reforms to reduce special education spending has raised concerns that many neurodivergent students could lose vital support. Critics argue that such cost-cutting measures would disproportionately affect vulnerable students and could lead to increased educational inequality. The politicization of special education has made it difficult to have evidence-based discussions about the best ways to support students with diverse learning needs, as the issue has become entangled with broader ideological battles over education spending and social policy.
              </p>
              <EssayBox>
                This paragraph is valuable for discussions on special education policy, educational inequality, or the politicization of disability issues. It shows how funding decisions can impact vulnerable students and can be used to argue about the importance of evidence-based policy in education. It's also useful for analyzing how political ideology can interfere with educational best practices.
              </EssayBox>
              <CivVocabBox words="front; diagnoses; genuine medical need; identity politics; over-diagnosis; skepticism; challenging environment; waiting lists; battles; secure; support services; intensified; cost-cutting measures; disproportionately; vulnerable students; educational inequality; politicization; evidence-based; entangled; ideological battles" />
            </div>
          </CivItem>

          <CivItem value="impact-students-teachers" title="Impact on Students and Teachers: The Human Cost of Culture Wars">
            <div className="space-y-4">
              <p>
                The education culture wars have taken a significant toll on both students and teachers, creating an environment of stress and uncertainty in schools. Teachers report feeling caught between competing demands from parents, administrators, and political groups, often unsure about what they can safely teach or discuss in their classrooms. Many educators have experienced harassment, threats, or professional consequences for addressing controversial topics, leading to self-censorship and a climate of fear in some school districts.
              </p>
              <p>
                Students, meanwhile, are caught in the middle of these adult conflicts, with their educational experience becoming politicized. Some students report feeling that their identities or experiences are being debated and potentially invalidated by adults who have never met them. The constant controversy and uncertainty can create anxiety and make it difficult for students to focus on learning. Additionally, the diversion of resources to legal battles and security measures means less funding available for actual educational programs, potentially harming all students regardless of their political views or family background.
              </p>
              <EssayBox>
                This paragraph is excellent for discussing the human impact of political conflicts in education. It provides insight into how culture wars affect the daily lives of teachers and students, making it useful for arguments about the need to depoliticize education or protect educational professionals from political interference. It can also support points about the importance of stable, supportive learning environments.
              </EssayBox>
              <CivVocabBox words="toll; stress; uncertainty; caught between; competing demands; harassment; threats; professional consequences; self-censorship; climate of fear; politicized; debated; invalidated; constant controversy; diversion; legal battles; depoliticize; political interference; stable; supportive learning environments" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Education Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Education and Political Polarization">
                "Education has become a proxy arena for broader ideological conflicts in society." Discuss this statement with reference to recent developments in both the US and UK.
              </EssayQuestion>
              <EssayQuestion title="2. Curriculum Controversies">
                To what extent should schools be required to teach diverse perspectives on history and social issues? Discuss with reference to debates over decolonization and critical race theory.
              </EssayQuestion>
              <EssayQuestion title="3. Book Bans and Censorship">
                "Book bans in schools represent a threat to intellectual freedom." Assess this claim by examining recent controversies and their implications for education.
              </EssayQuestion>
              <EssayQuestion title="4. Special Education Funding">
                How should governments balance the need to control education costs with the responsibility to provide adequate support for students with special needs?
              </EssayQuestion>
              <EssayQuestion title="5. Teacher Autonomy vs Parental Rights">
                "Parents should have the final say over what their children learn in school." Discuss this statement in light of recent education culture wars.
              </EssayQuestion>
              <EssayQuestion title="6. Impact on Learning Environment">
                To what extent do political conflicts in education harm the learning experience of students? Analyze the evidence and discuss potential solutions.
              </EssayQuestion>
              <EssayQuestion title="7. International Comparisons">
                Compare how the US and UK have handled education culture wars. What factors explain the similarities and differences in their approaches?
              </EssayQuestion>
              <EssayQuestion title="8. Future of Education Policy">
                How can education systems navigate cultural and political divisions while maintaining academic standards and supporting all students?
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'Health', to: '/formation/anglais/civilisation/health' }} next={{ label: 'Media', to: '/formation/anglais/civilisation/media' }} />
      </div>
    </PRFormationLayout>
  );
};

export default EducationPage;
