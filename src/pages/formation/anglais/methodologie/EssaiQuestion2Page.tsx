import React from 'react';
import { PenTool } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="font-dm-serif text-2xl text-pr-black mt-10 mb-3 leading-tight">{children}</h2>
    <div className="w-10 h-[2px] bg-pr-black mb-5" />
  </>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-dm-serif text-lg text-pr-black mt-7 mb-3 leading-tight">{children}</h3>
);

const P = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-pr-gray-dark/90 leading-relaxed mb-4 ${className}`}>{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2 text-pr-gray-dark/90 leading-relaxed">
    <span className="text-pr-black mt-[2px]">→</span>
    <span>{children}</span>
  </li>
);

const Connector = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.08em] font-dm-sans font-semibold text-pr-black mb-4">
    {children}
  </p>
);

const EssaiQuestion2Page = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Méthodologie', to: '/formation/anglais/methodologie-complete' },
        { label: 'Essai · Question 2' },
      ]}
      badge="Méthodologie · Essai (Q2)"
      title="Question de"
      titleAccent="réflexion personnelle"
      subtitle="Plan en 4 temps : opinion commune, contre-argument, solution personnelle, réponse finale."
      Icon={PenTool}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden p-6 sm:p-8">
          <H2>Avant d'écrire</H2>
          <P>
            Toujours commencer par chercher des synonymes des mots-clés de la question. Ils serviront à reformuler la
            question dans l'introduction.
          </P>

          <H2>Plan type efficace</H2>
          <ol className="list-decimal pl-6 text-pr-gray-dark/90 space-y-2 mb-4">
            <li>
              Opinion commune (<em>At first blush…</em>)
            </li>
            <li>
              Pourquoi l'argument inverse est plus pertinent (<em>However / On second thoughts…</em>)
            </li>
            <li>
              Ma propre solution (<em>Eventually, I think… / Lastly I am among those who think…</em>)
            </li>
            <li>
              Phrase finale courte qui répond à la question (<em>Therefore, …</em>)
            </li>
          </ol>

          <H2>Q2 — Structure de l'essai d'anglais</H2>
          <H3>Introduction</H3>
          <H3>1) Accroche paradoxale / critique de la doxa</H3>
          <ul className="space-y-2 mb-4">
            <LI>Conventional wisdom usually points out that […], suggesting that […].</LI>
            <LI>It is often assumed that […] leads to […], and that the system in place works effectively.</LI>
            <LI>Public opinion tends to believe that […], as if the issue had already been solved.</LI>
          </ul>
          <H3>2) Analyse critique de l'idée reçue</H3>
          <ul className="space-y-2 mb-4">
            <LI>One may jump to the conclusion that […], simply because […].</LI>
            <LI>Thus, [the policy / the situation] is said to have successfully addressed […].</LI>
            <LI>Seemingly, this approach is working well.</LI>
          </ul>
          <H3>3) Réfutation / bascule critique</H3>
          <ul className="space-y-2 mb-4">
            <LI>Obviously, there is more than meets the eye, since […].</LI>
            <LI>These assumptions seem rather misguided to me, as they fail to address […] in a meaningful way.</LI>
            <LI>Indeed, it may sound naive to argue that […], while the underlying problem remains unsolved.</LI>
          </ul>
          <H3>4) Thèse personnelle</H3>
          <ul className="space-y-2 mb-4">
            <LI>As far as I am concerned, I believe that […].</LI>
            <LI>I would argue that […], not only because […], but also because […].</LI>
            <LI>However, it seems to me that the current approach is deeply flawed and insufficient.</LI>
          </ul>
          <H3>5) Optionnel — reformulation originale</H3>
          <ul className="space-y-2 mb-4">
            <LI>I see [the policy / the issue] as […] rather than […].</LI>
            <LI>
              [Equality / success / sustainability…] should be the result of a fair system, not a tool used to mask
              deeper failures.
            </LI>
          </ul>
          <H3>6) Problématique</H3>
          <ul className="space-y-2 mb-4">
            <LI>This raises the question of whether […].</LI>
            <LI>One may thus wonder to what extent […].</LI>
            <LI>How come such a situation has become the norm?</LI>
            <LI>To what extent are current responses effective?</LI>
            <LI>Is it likely that this trend will intensify in the coming years?</LI>
          </ul>

          <H3>Développement — Plan type 1 : Oui — mais — mieux</H3>
          <H3>I. Recognising the intention and its expected effects</H3>
          <P>
            In the first place, [the policy / reform / decision] was implemented in order to […]. The aim was to tackle
            […], and at first sight, it seemed to produce some positive outcomes. For instance, […].
          </P>
          <Connector>Connecteurs : To begin with · Initially · At first</Connector>

          <H3>II. Explaining why it misses the point</H3>
          <P>
            However, this apparent success hides deeper structural issues. The limitations of this approach are
            numerous. First of all, it […]. It is short-sighted to believe that […], when in reality […].
          </P>
          <Connector>Connecteurs : Nevertheless · However · Yet · Although · Still</Connector>

          <H3>III. Advocating for a more ambitious and systemic solution</H3>
          <P>
            That is why I believe a real shift is required to grapple with the issue. Not only would [a new approach]
            address the roots of the problem, but it would also […]. Such a solution may look complex or idealistic, but
            it is the only way to achieve long-term results.
          </P>
          <Connector>Connecteurs : Therefore · As a result · All in all · Consequently</Connector>

          <H3>Conclusion</H3>
          <ul className="space-y-2 mb-4">
            <LI>All things considered, it seems clear that […].</LI>
            <LI>Ultimately, what is needed is not a superficial response but a structural change.</LI>
            <LI>A real watershed is needed to turn intentions into tangible and fair results.</LI>
            <LI>
              The current approach may be well-intentioned, but it falls short. It is high time we addressed the issue
              in its full complexity.
            </LI>
          </ul>

          <H2>Exemple</H2>
          <P className="font-medium text-pr-black">
            Do you think that companies should take public stances and act in the public sphere?
          </P>
          <div className="bg-pr-gray-bg/30 border border-pr-black-pale rounded-xl p-5 my-4 text-pr-gray-dark/90 leading-relaxed space-y-3 text-[15px]">
            <p>
              In February 2018 US retailer Walmart decided to stop selling guns after a mass school shooting in Florida.
              Such stance taking might seem detrimental to their bottom line and not in keeping with their core selling
              business. Should they — and other firms in general — get out of their business tracks and venture into
              the political arena?
            </p>
            <p>
              At first sight corporate activism — be it soft with tweets and press releases or hard with lobbying and
              contributions — sounds bad for business and literally none of any company's business. For instance, when
              US football quarterback Colin Kaepernick began taking a knee to protest against police brutality and
              racial injustice most people, firms and investors shied away from him deeming such a behavior improper
              and unpatriotic.
            </p>
            <p>
              On second thoughts many will not give such a clear-cut negative answer but be no less harsh on companies
              calling them callous and hypocritical for merely talking the talk with soft activism to reach their CSR
              goals but getting short of acting on their words. For instance, a number of people reckon companies
              publicly claiming they support Black Lives Matter is nothing but a marketing ploy to tick their corporate
              social responsibility box and thereby boost their sales.
            </p>
            <p>
              Lastly, I am among those who think hard corporate activism should be the right and proper ethical path to
              be trodden by companies as their stances and actions are very likely to wield some sway over legislative
              and executive decision-makers. What is more, some cases evidence how beneficial for business it can turn
              out to be while remaining passive may have your company end up on the wrong side of both staff and
              customers. Nike's taking on Kaepernick as its brand ambassador showcases how a company can tread the path
              of the righteous, be rewarded for it with extra customers and a halo round its reputation and get other
              companies and political leaders jump on the same bandwagon.
            </p>
            <p>
              <strong className="text-pr-black">Therefore, companies should definitely be true activists.</strong>
            </p>
          </div>

          <H2>Petit glossaire des expressions idiomatiques</H2>
          <P>
            Associer un mot simple en français à des tournures soutenues en anglais permet d'éviter les calques. Exemple :
            « ils sont dans une situation compliquée » → « they are facing a <em>catch-22</em> situation ».
          </P>
          <P>
            Consulter le glossaire :{' '}
            <a
              className="text-pr-black hover:text-pr-black underline underline-offset-2"
              href="https://urlz.fr/iLTN"
              target="_blank"
              rel="noreferrer"
            >
              ouvrir le lien
            </a>
          </P>

          <H2>Civilisation</H2>
          <P>
            Pour enrichir vos essais, fichez des phrases complètes issues d'articles (presse de qualité) classées par
            grands thèmes de l'année. Apprenez-les par cœur pour éviter les fautes et gagner en vitesse.
          </P>

          <H2>Ressources</H2>
          <ul className="space-y-2 mb-4">
            <LI>
              Grammarly (extension) :{' '}
              <a
                className="text-pr-black hover:text-pr-black underline underline-offset-2"
                href="https://www.grammarly.com/"
                target="_blank"
                rel="noreferrer"
              >
                grammarly.com
              </a>{' '}
              — la version gratuite suffit
            </LI>
            <LI>
              Hemingway App :{' '}
              <a
                className="text-pr-black hover:text-pr-black underline underline-offset-2"
                href="https://hemingwayapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                hemingwayapp.com
              </a>{' '}
              — 100% gratuit
            </LI>
          </ul>
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default EssaiQuestion2Page;
