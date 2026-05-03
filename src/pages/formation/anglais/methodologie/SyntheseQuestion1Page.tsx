import React from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, FileText } from 'lucide-react';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-3">{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 text-gray-700 leading-relaxed">{children}</li>
);

const SyntheseQuestion1Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-800 transition-colors">Formation Anglais ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/anglais/methodologie-complete" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span>Synthèse – Question 1</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Partie synthèse (question 1)</h1>
          </div>

          <H2>Question sur les textes</H2>
          <P>
            Deux cas typiques :
          </P>
          <ul className="list-disc pl-6">
            <LI>Les éléments de réponse sont nombreux : il suffit de les reprendre et de les hiérarchiser en trois parties.</LI>
            <LI>La question est pointue : peu d’éléments directs. Il faut alors repérer dans le texte de quoi approfondir la réponse (développer un exemple, préciser une cause, expliciter une conséquence).</LI>
          </ul>

          <H2>Méthode</H2>
          <ul className="list-disc pl-6">
            <LI>Accroche brève qui introduit le texte et son enjeu.</LI>
            <LI>Trois paragraphes répondant à la question à partir d’éléments du texte.</LI>
            <LI>Si possible, phrase de conclusion qui répond clairement à la question.</LI>
            <LI>Employer des expressions idiomatiques avec mesure (liste à connaître).</LI>
            <LI>Entre les paragraphes, privilégier des connecteurs logiques de cause/opposition/conséquence (<em>however, yet, therefore…</em>) plutôt que temporels (<em>firstly, secondly…</em>).</LI>
            <LI>Viser zéro faute de grammaire.</LI>
            <LI>Indiquer le nombre de mots en fin d’essai.</LI>
          </ul>

          <H2>Structure de synthèse – Question 1</H2>
          <H3>Introduction</H3>
          <H3>1) Contexte général</H3>
          <ul className="list-disc pl-6">
            <LI>In the wake of…</LI>
            <LI>Following the growing concerns over…</LI>
            <LI>Amid rising public awareness of…</LI>
            <LI>In response to increasing dissatisfaction regarding…</LI>
            <LI>In a bid to express the growing disgruntlement of…</LI>
          </ul>
          <H3>2) Présentation des documents et de leur positionnement</H3>
          <H3 className="mt-4">a) Si les deux documents convergent</H3>
          <ul className="list-disc pl-6">
            <LI>Both articles highlight the issue of […] as a major social/political/economic concern.</LI>
            <LI>These two documents lay the stress on […] and emphasize its long-term consequences.</LI>
            <LI>The two articles under study denounce […] and call for urgent action.</LI>
            <LI>Both authors champion the same idea that […].</LI>
            <LI>One can draw a parallel between the two texts, as they both focus on […].</LI>
          </ul>
          <H3 className="mt-4">b) Si les documents sont opposés ou contrastés</H3>
          <ul className="list-disc pl-6">
            <LI>The two texts offer radically different perspectives on the issue of […].</LI>
            <LI>While the first text warns against […], the second puts forward a more optimistic view.</LI>
            <LI>The two documents contrast sharply in their approach to […].</LI>
            <LI>Text 1 debunks the idea that […], whereas Text 2 supports it.</LI>
            <LI>Contrary to what is stated in the first article, the second one sheds a different light on […].</LI>
          </ul>
          <H3>3) Formulation de la problématique</H3>
          <ul className="list-disc pl-6">
            <LI>This raises the question of whether […].</LI>
            <LI>One may thus wonder to what extent […].</LI>
            <LI>How come such a situation has become the norm?</LI>
            <LI>To what extent are current responses effective?</LI>
            <LI>Is it likely that this trend will intensify in the coming years?</LI>
          </ul>

          <H3 className="mt-6">Exemples d’introduction</H3>
          <div className="bg-white border rounded-md p-4 space-y-3">
            <P className="mb-0">For the past few years, the lack of renewal of the political class in the United States has gradually become more apparent to the public and the rest of the world. The two articles under study, from the New York Times (doc 1) and the New Statesman (doc 2), both present the issue of age in politics as a growing major issue, highlighting the various reasons why the problem may be more than anecdotal and actually reveal a deepening generational gap for the years to come in a context of political conflicts. To what extent is it a hindrance to have old generation people in charge of politics? To what extent is it the sign of a political crisis?</P>
          </div>
          <div className="bg-white border rounded-md p-4 mt-4 space-y-3">
            <P className="mb-0">The two texts presented offer the reader radically different approaches and visions of the prospects opening up to electric cars. Indeed, while the second text, recently taken from the Guardian, is relatively enthusiastic and tries to sell its readers on the idea that the electric car costs less, the first article, from the Wall Street Journal, starts from the simple observation that the electric car is unattractive for consumers.</P>
          </div>

          <H2>Exemple d’application</H2>
          <P>
            <strong>Why could tech giants have to alter their business models?</strong> – d’après l’article de Renaud Foucart (<a className="text-blue-600 underline" href="https://urlz.fr/iLRv" target="_blank" rel="noreferrer">lien</a>)
          </P>
          <P className="italic text-gray-700">Essay (≈500 words)</P>
          <div className="prose prose-neutral max-w-none text-[15.5px] leading-7">
            <p>The rise of technology giants has fundamentally reshaped the way people communicate, work, and even think. However, with their unprecedented influence comes increased scrutiny. In recent years, governments and regulators have started to challenge the once untouchable business practices of firms such as Google, Amazon, Meta, or Apple. As Renaud Foucart points out in his article for The Conversation, the decision by the European Union to fine Google more than two billion dollars illustrates that a change of paradigm is underway. The issue at stake is whether tech giants can continue operating under the same rules or whether they will be forced to alter their business models to comply with new expectations regarding competition, transparency, and user protection.</p>
            <p>First and foremost, tech giants have built their empires on data-driven advertising. Google, for instance, offers its products for free, yet collects vast amounts of personal information across interconnected platforms such as Gmail, YouTube, and Maps. This data is then monetized through targeted advertising, which constitutes the bulk of the company’s revenue. As the old adage goes, “if you are not paying for the product, you are the product.” While this model has proven extremely profitable, it is also increasingly controversial. Regulators argue that users are not fully aware of how their data is being exploited and that such practices raise concerns over privacy, manipulation, and market dominance. Therefore, pressure is mounting for tech firms to become more transparent and perhaps shift toward models where users pay directly for services, rather than being silently monetized through surveillance capitalism.</p>
            <p>Moreover, these companies have been accused of anti-competitive behavior, which undermines fair market dynamics. Google, for example, has been criticized for privileging its own services in search results, thereby stifling rivals. Apple and Amazon have also faced accusations of exploiting their gatekeeping power by imposing restrictive conditions on app developers or third-party sellers. As a result, both European and American authorities are introducing stricter competition laws, such as the EU’s Digital Markets Act. If properly enforced, these laws could compel tech giants to dismantle practices that grant them unfair advantages, and to open their ecosystems to rivals. This shift could force them to redesign their business models in ways that do not rely on monopolistic strategies but on genuine innovation and value creation. In other words, regulators are sending a clear message: no company, no matter how powerful, is above the law.</p>
            <p>Finally, tech giants face growing societal and ethical expectations. Public opinion has evolved significantly over the past decade: once admired as symbols of progress, firms like Facebook (now Meta) are increasingly perceived as threats to democracy, mental health, or even childhood development. Scandals such as Cambridge Analytica revealed how personal data could be weaponized for political manipulation. Similarly, controversies over TikTok highlight fears of foreign influence and cultural homogenization. These developments suggest that if tech companies wish to preserve their legitimacy, they must integrate stronger ethical commitments into their business practices. This might involve limiting harmful content, improving data protection, and taking responsibility for the social consequences of their platforms. In this sense, the evolution of business models is not merely a legal necessity but a moral imperative.</p>
            <p>In conclusion, the need for tech giants to alter their business models arises from a triple pressure: economic, legal, and societal. Data exploitation, anti-competitive practices, and lack of ethical accountability are no longer tolerated in the same way they once were. While firms may initially resist these changes, the tide is clearly turning. Either they proactively adapt by diversifying their sources of revenue and demonstrating greater transparency, or they risk being constrained by regulators and abandoned by users. At the end of the day, the survival of these companies depends on their capacity to reconcile profit with responsibility, and innovation with fairness.</p>
            <p><em>Word count: 503</em></p>
          </div>

          <H2 className="mt-10">Outils de commentaire pour le développement d’une synthèse (Q1)</H2>
          <H3>1) Introduire ou commenter un document</H3>
          <ul className="list-disc pl-6">
            <LI>The article published in The Wall Street Journal opens with a striking observation: […]</LI>
            <LI>In contrast, the piece from The Guardian (doc 1) puts forward the idea that […]</LI>
            <LI>The author contends that […] / suggests that […] / questions the notion that […]</LI>
            <LI>The document argues in favour of […] / highlights the importance of […]</LI>
            <LI>As noted by the columnist in The Times, […]</LI>
          </ul>
          <H3>2) Exprimer une opposition entre les textes</H3>
          <ul className="list-disc pl-6">
            <LI>There is a clear discrepancy between the two perspectives offered.</LI>
            <LI>Text 2 challenges the assumptions made in Text 1.</LI>
            <LI>Contrary to what is asserted in the first article, the second piece insists that […]</LI>
            <LI>Unlike the first document, which adopts a critical stance, the second takes a more optimistic view.</LI>
            <LI>While the first article views […] as a threat, the second sees it as an opportunity.</LI>
          </ul>
          <H3>3) Exprimer un accord ou un rapprochement</H3>
          <ul className="list-disc pl-6">
            <LI>Both documents converge on the idea that […]</LI>
            <LI>The two authors see eye to eye on the need for […]</LI>
            <LI>One can draw a parallel between the way both texts address the issue of […]</LI>
            <LI>In both articles, the issue of […] is portrayed as a pressing concern.</LI>
            <LI>Similarly, the second text echoes the concerns raised in the first.</LI>
            <LI>The argument developed in Text 2 closely mirrors the reasoning in Text 1.</LI>
          </ul>
          <H3>4) Introduire un exemple ou un chiffre</H3>
          <ul className="list-disc pl-6">
            <LI>To illustrate this point, one can refer to the example of […]</LI>
            <LI>This is exemplified by the case of […]</LI>
            <LI>A case in point is the reference to […] in the second document.</LI>
            <LI>As shown in the first article, where it is stated that “[quote]”, […]</LI>
            <LI>The use of statistics—such as the claim that […]—underscores the gravity of the situation.</LI>
          </ul>
          <H3>5) Introduire un point ou une idée majeure</H3>
          <ul className="list-disc pl-6">
            <LI>According to the first article, the root cause of the issue lies in […]</LI>
            <LI>The second document advocates for a different approach, stressing that […]</LI>
            <LI>A central claim made by both texts is that […]</LI>
            <LI>What emerges from both pieces is a shared concern over […]</LI>
          </ul>
          <H3>6) Exprimer une nuance ou une hiérarchie entre les idées</H3>
          <ul className="list-disc pl-6">
            <LI>Though they agree on […], the texts differ in how they assess its consequences.</LI>
            <LI>The second article provides a more nuanced view of […]</LI>
            <LI>The contrast between short-term measures in one article and long-term strategies in the other is telling.</LI>
          </ul>
          <H3>7) Conclure une comparaison ou synthétiser un axe</H3>
          <ul className="list-disc pl-6">
            <LI>Ultimately, the contrast between the two perspectives reflects deeper ideological differences.</LI>
            <LI>What both texts reveal is a shared awareness of the urgency of the problem, yet they diverge in the proposed solutions.</LI>
            <LI>The confrontation between both viewpoints sheds light on the complexity of […].</LI>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SyntheseQuestion1Page;


