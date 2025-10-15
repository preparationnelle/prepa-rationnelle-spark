import React from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, PenTool } from 'lucide-react';

const H2 = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-2xl font-semibold text-gray-900 mt-10 mb-4 ${className}`}>{children}</h2>
);

const H3 = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-xl font-semibold text-gray-800 mt-6 mb-3 ${className}`}>{children}</h3>
);

const P = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-gray-700 leading-relaxed mb-3 ${className}`}>{children}</p>
);

const LI = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <li className={`mb-2 text-gray-700 leading-relaxed ${className}`}>{children}</li>
);

const EssaiQuestion2Page = () => {
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
            <span>Essai – Question 2</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <PenTool className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Question de réflexion personnelle – essai (question 2)</h1>
          </div>

          <H2>Avant d’écrire</H2>
          <P>Toujours commencer par chercher des synonymes des mots clés de la question. Ils serviront à reformuler la question dans l’introduction.</P>

          <H2>Plan type efficace</H2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Opinion commune (<em>At first blush…</em>)</li>
            <li>Pourquoi l’argument inverse est plus pertinent (<em>However / On second thoughts…</em>)</li>
            <li>Ma propre solution (<em>Eventually, I think… / Lastly I am among those who think…</em>)</li>
            <li>Phrase finale courte qui répond à la question (<em>Therefore, …</em>)</li>
          </ol>

          <H2 className="mt-8">Q2 – Structure de l’essai d’anglais</H2>
          <H3>Introduction</H3>
          <H3>1) Accroche paradoxale / critique de la doxa</H3>
          <ul className="list-disc pl-6">
            <LI>Conventional wisdom usually points out that […], suggesting that […].</LI>
            <LI>It is often assumed that […] leads to […], and that the system in place works effectively.</LI>
            <LI>Public opinion tends to believe that […], as if the issue had already been solved.</LI>
          </ul>
          <H3>2) Analyse critique de l’idée reçue</H3>
          <ul className="list-disc pl-6">
            <LI>One may jump to the conclusion that […], simply because […].</LI>
            <LI>Thus, [the policy / the situation] is said to have successfully addressed […].</LI>
            <LI>Seemingly, this approach is working well.</LI>
          </ul>
          <H3>3) Réfutation / bascule critique</H3>
          <ul className="list-disc pl-6">
            <LI>Obviously, there is more than meets the eye, since […].</LI>
            <LI>These assumptions seem rather misguided to me, as they fail to address […] in a meaningful way.</LI>
            <LI>Indeed, it may sound naive to argue that […], while the underlying problem remains unsolved.</LI>
          </ul>
          <H3>4) Thèse personnelle</H3>
          <ul className="list-disc pl-6">
            <LI>As far as I am concerned, I believe that […].</LI>
            <LI>I would argue that […], not only because […], but also because […].</LI>
            <LI>However, it seems to me that the current approach is deeply flawed and insufficient.</LI>
          </ul>
          <H3>5) Optionnel – reformulation originale</H3>
          <ul className="list-disc pl-6">
            <LI>I see [the policy / the issue] as […] rather than […].</LI>
            <LI>[Equality / success / sustainability…] should be the result of a fair system, not a tool used to mask deeper failures.</LI>
          </ul>
          <H3>6) Problématique</H3>
          <ul className="list-disc pl-6">
            <LI>This raises the question of whether […].</LI>
            <LI>One may thus wonder to what extent […].</LI>
            <LI>How come such a situation has become the norm?</LI>
            <LI>To what extent are current responses effective?</LI>
            <LI>Is it likely that this trend will intensify in the coming years?</LI>
          </ul>

          <H3 className="mt-6">Développement – Plan type 1 : Oui – mais – mieux</H3>
          <H3>I. Recognising the intention and its expected effects</H3>
          <P>In the first place, [the policy / reform / decision] was implemented in order to […]. The aim was to tackle […], and at first sight, it seemed to produce some positive outcomes. For instance, […].</P>
          <P className="text-gray-600 italic">Connecteurs : To begin with / Initially / At first</P>
          <H3>II. Explaining why it misses the point</H3>
          <P>However, this apparent success hides deeper structural issues. The limitations of this approach are numerous. First of all, it […]. It is short-sighted to believe that […], when in reality […].</P>
          <P className="text-gray-600 italic">Connecteurs : Nevertheless / However / Yet / Although / Still</P>
          <H3>III. Advocating for a more ambitious and systemic solution</H3>
          <P>That is why I believe a real shift is required to grapple with the issue. Not only would [a new approach] address the roots of the problem, but it would also […]. Such a solution may look complex or idealistic, but it is the only way to achieve long-term results.</P>
          <P className="text-gray-600 italic">Connecteurs : Therefore / As a result / All in all / Consequently</P>

          <H3 className="mt-6">Conclusion</H3>
          <ul className="list-disc pl-6">
            <LI>All things considered, it seems clear that […].</LI>
            <LI>Ultimately, what is needed is not a superficial response but a structural change.</LI>
            <LI>A real watershed is needed to turn intentions into tangible and fair results.</LI>
            <LI>The current approach may be well-intentioned, but it falls short. It is high time we addressed the issue in its full complexity.</LI>
          </ul>

          <H2>Exemple</H2>
          <P className="font-medium">Do you think that companies should take public stances and act in the public sphere?</P>
          <div className="prose prose-neutral max-w-none text-[15.5px] leading-7">
            <p>In February 2018 US retailer Walmart decided to stop selling guns after a mass school shooting in Florida. Such stance taking might seem detrimental to their bottom line and not in keeping with their core selling business. Should they – and other firms in general – get out of their business tracks and venture into the political arena?</p>
            <p>At first sight corporate activism – be it soft with tweets and press releases or hard with lobbying and contributions – sounds bad for business and literally none of any company’s business. For instance, when US football quarterback Colin Kaepernick began taking a knee to protest against police brutality and racial injustice most people, firms and investors shied away from him deeming such a behavior improper and unpatriotic.</p>
            <p>On second thoughts many will not give such a clear-cut negative answer but be no less harsh on companies calling them callous and hypocritical for merely talking the talk with soft activism to reach their CSR goals but getting short of acting on their words. For instance, a number of people reckon companies publicly claiming they support Black Lives Matter is nothing but a marketing ploy to tick their corporate social responsibility box and thereby boost their sales.</p>
            <p>Lastly, I am among those who think hard corporate activism should be the right and proper ethical path to be trodden by companies as their stances and actions are very likely to wield some sway over legislative and executive decision-makers. What is more, some cases evidence how beneficial for business it can turn out to be while remaining passive may have your company end up on the wrong side of both staff and customers. Nike’s taking on Kaepernick as its brand ambassador showcases how a company can tread the path of the righteous, be rewarded for it with extra customers and a halo round its reputation and get other companies and political leaders jump on the same bandwagon.</p>
            <p><strong>Therefore, companies should definitely be true activists.</strong></p>
          </div>

          <H2>Petit glossaire des expressions idiomatiques</H2>
          <P>
            Associer un mot simple en français à des tournures soutenues en anglais permet d’éviter les calques. Exemple : « ils sont dans une situation compliquée » → « they are facing a <em>catch‑22</em> situation ».
          </P>
          <P>
            Consulter le glossaire : <a className="text-blue-600 underline" href="https://urlz.fr/iLTN" target="_blank" rel="noreferrer">lien</a>
          </P>

          <H2>Civilisation</H2>
          <P>
            Pour enrichir vos essais, fichez des phrases complètes issues d’articles (presse de qualité) classées par grands thèmes de l’année. Apprenez-les par cœur pour éviter les fautes et gagner en vitesse.
          </P>

          <H2>Ressources</H2>
          <ul className="list-disc pl-6">
            <LI>Grammarly (extension) : <a className="text-blue-600 underline" href="https://www.grammarly.com/" target="_blank" rel="noreferrer">https://www.grammarly.com/</a> – la version gratuite suffit</LI>
            <LI>Hemingway App : <a className="text-blue-600 underline" href="https://hemingwayapp.com/" target="_blank" rel="noreferrer">https://hemingwayapp.com/</a> – 100% gratuit</LI>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EssaiQuestion2Page;


