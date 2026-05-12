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

const EconomyPage = () => {
  const keyTopics = [
    { title: 'The Inflation Shock', content: 'US CPI peaks at 9.1% in June 2022, the Eurozone at 10.6%, the UK at 11.1% — Fed funds raised from near-zero to 5.5% in 18 months.', vocabulary: ['headline CPI', 'a four-decade high', 'to hike rates', 'real wages', 'cost-of-living crisis'] },
    { title: 'Green Protectionism: the IRA', content: 'Biden\'s August 2022 jumbo package of $369bn in subsidies — a transatlantic split with Europe.', vocabulary: ['the Inflation Reduction Act', 'corporate subsidies', 'a transatlantic split', 'Buy American', 'geoeconomics'] },
    { title: 'Tax Cooperation & Tax Havens', content: 'OECD 15% global minimum tax (140+ countries) versus the UK "spider\'s web" of offshore territories — $245bn lost each year.', vocabulary: ['a top-up tax', 'a race to the bottom', 'profit-shifting', 'tax havens', 'aggressive tax planning'] },
    { title: 'Labour, Lobbies & Corporate Activism', content: 'Union revival (Amazon, Starbucks, UAW), Ben & Jerry\'s in Israel, BP\'s greenwashing, NRA and Big Oil.', vocabulary: ['unionisation', 'corporate activism', 'greenwashing', 'a windfall profit', 'lobbying'] },
  ];

  const essentialVocabulary = [
    { term: 'a jumbo package', definition: 'A massive piece of legislation — used in the press for the IRA, the CHIPS Act, Biden\'s infrastructure law.' },
    { term: 'a transatlantic split / rift', definition: 'A divergence between US and EU positions — typically on trade, climate or industrial policy.' },
    { term: 'a race to the bottom', definition: 'Competitive deregulation in which countries lower taxes or standards to attract capital — what the 15% global minimum tax aims to end.' },
    { term: 'profit-shifting', definition: 'The practice of routing profits to low-tax jurisdictions to avoid corporate tax. Costs governments around $245bn a year.' },
    { term: 'greenwashing', definition: 'Misleading marketing that exaggerates a company\'s environmental commitments — emblematic case: BP.' },
    { term: 'a windfall profit', definition: 'An unexpectedly large profit, often used in political debate over fossil-fuel companies\' 2022-2023 results.' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: 'Economy' },
      ]}
      badge="Civilisation · 2025"
      title="Economy"
      titleAccent="& Globalisation"
      subtitle="The 2022 inflation shock, transatlantic protectionism, the 15% global tax, the City as the heart of offshore finance, the comeback of US unions and the corporate ethics debate."
    >
      <div className="max-w-4xl mx-auto">
        <CivStats
          title="Key Economic Facts 2025"
          stats={[
            { value: '9.1%', label: 'US inflation peak (June 2022, 41-year high)' },
            { value: '$369bn', label: 'green subsidies in the IRA' },
            { value: '15%', label: 'global minimum corporate tax (OECD)' },
            { value: '$245bn', label: 'lost each year to profit-shifting' },
          ]}
        />

        <CivAccordion>
          <CivItem value="key-topics" title="Key Economic Topics">
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

          <CivItem value="inflation-cost-living" title="The Inflation Shock and the Cost-of-Living Crisis">
            <div className="space-y-4">
              <p>
                After a decade of price stability, the global economy was hit in 2022 by the sharpest inflation surge in forty years. In the United States, headline CPI peaked at 9.1% in June 2022, the highest reading since 1981, prompting the Federal Reserve to lift its policy rate from near-zero to 5.5% in eighteen months. Europe was hit even harder: Eurozone inflation reached 10.6% in October 2022, while the UK touched 11.1%, a 41-year high. The drivers compounded — pandemic-era stimulus, broken supply chains and Russia's invasion of Ukraine, which sent energy and grain prices soaring. Real wages lagged behind, fuelling the largest wave of strikes in Britain since the 1970s and toppling incumbents from London to Buenos Aires. The episode proved a brutal reminder that price stability, often taken for granted, can unravel within a single quarter — and that the poorest always pay the steepest price.
              </p>
              <EssayBox>
                Mobilisable on: the limits of central bank independence; the social cost of monetary tightening; how external shocks reshape domestic politics; whether globalisation imports inflation as well as growth.
              </EssayBox>
              <CivVocabBox words="headline CPI; a 41-year high; to lift the policy rate; near-zero rates; pandemic-era stimulus; broken supply chains; to send prices soaring; to lag behind; the largest wave of strikes; to topple incumbents; to take stability for granted; to unravel within a quarter" />
            </div>
          </CivItem>

          <CivItem value="us-inflation-reduction-act" title="The Inflation Reduction Act and the Transatlantic Split">
            <div className="space-y-4">
              <p>
                For years, Europe had been urging the rest of the world to follow its lead in cutting carbon emissions. Finally, in August 2022, the United States took notice: President Joe Biden signed the Inflation Reduction Act, a jumbo package of green subsidies. Rather than pleasing Europe, the IRA — which provides $369 billion in corporate subsidies — has actually caused a transatlantic split. European leaders accuse Washington of engaging in protectionism that harms the interests of the old continent. The Act grants a tax credit of up to $7,500 for the purchase of a North American electric vehicle with a battery from the same source, excluding European-made models. Brussels claims the scheme breaches international trade rules and has scrambled to retaliate with its own Green Deal Industrial Plan — proof that the climate fight has become a new front in geoeconomics.
              </p>
              <EssayBox>
                Mobilisable on: the return of industrial policy in the West; "Is globalisation in retreat?"; the trade-off between climate ambition and free trade; whether allies can avoid green protectionism.
              </EssayBox>
              <CivVocabBox words="to take notice; a jumbo package of green subsidies; to cause a transatlantic split; to engage in protectionism; the old continent; a tax credit of up to $7,500; to breach international trade rules; the Green Deal Industrial Plan; a new front in geoeconomics; to retaliate" />
            </div>
          </CivItem>

          <CivItem value="global-minimum-tax" title="The 15% Global Minimum Tax">
            <div className="space-y-4">
              <p>
                In a landmark step against fiscal competition, more than 140 countries agreed in 2021, under the banner of the OECD, to a 15% global minimum corporate tax. The deal aims to end a decades-long "race to the bottom" in which multinationals routed profits through zero-tax jurisdictions like Bermuda or the Cayman Islands. Its mechanism is elegant: if a company pays below 15% anywhere in the world, its home state can collect a top-up tax to the threshold, removing the incentive to shift profits offshore. The European Union enacted the rules in December 2022; the United Kingdom, Japan, Canada and South Korea have followed. Yet the United States, despite leading the negotiation under Treasury Secretary Janet Yellen, has so far failed to legislate, paralysed by partisan gridlock — a striking illustration of how international cooperation often founders on the very domestic politics it was designed to bypass.
              </p>
              <EssayBox>
                Mobilisable on: the limits of multilateralism; "Are multinational corporations more powerful than states?"; whether globalisation can be reformed from within; the resilience of nation-state self-interest.
              </EssayBox>
              <CivVocabBox words="a landmark step; the OECD; a 15% global minimum corporate tax; a race to the bottom; zero-tax jurisdictions; a top-up tax; to shift profits offshore; partisan gridlock; to founder on; to bypass domestic politics; an elegant mechanism" />
            </div>
          </CivItem>

          <CivItem value="tax-havens-uk" title="The UK's Spider's Web of Tax Havens">
            <div className="space-y-4">
              <p>
                Despite repeated promises to crack down on tax avoidance, the United Kingdom remains at the heart of the global offshore finance system. According to the Tax Justice Network, the "British spider's web" — Crown Dependencies such as Jersey and Guernsey and Overseas Territories like the Cayman Islands, Bermuda and the British Virgin Islands — accounts for roughly one-third of all corporate tax avoidance risks worldwide. An estimated $245 billion in tax revenue vanishes each year through aggressive profit-shifting by multinationals, eroding the budgets of high-income and developing countries alike. Successive governments have unveiled half-hearted reforms — public registers of beneficial ownership, alignment with EU blacklists — but London's powerful financial lobby has consistently watered them down. Britain thus preaches fiscal rigour at home while quietly bankrolling the very system that drains other nations' treasuries: a textbook case of double standards at the heart of contemporary capitalism.
              </p>
              <EssayBox>
                Mobilisable on: the contradictions of British financial power; how tax havens fuel global inequality; the limits of national sovereignty in fiscal matters; "Should we trust the City to regulate itself?".
              </EssayBox>
              <CivVocabBox words="to crack down on tax avoidance; offshore finance; the British spider's web; Crown Dependencies; Overseas Territories; aggressive profit-shifting; to vanish each year; to erode budgets; half-hearted reforms; the financial lobby; to water down a reform; double standards" />
            </div>
          </CivItem>

          <CivItem value="labor-movements" title="The Quiet Comeback of US Unions">
            <div className="space-y-4">
              <p>
                Trade unionism in the United States has long faced steep obstacles: aggressive anti-union campaigns, restrictive labour laws and a deeply individualistic work culture. Yet support for unions has climbed to its highest level since 1965, with 71% of Americans backing them in a 2022 Gallup poll. The shift has translated into headline-grabbing wins: in April 2022, workers at Amazon's Staten Island warehouse voted to unionise — a historic first at the trillion-dollar company — and Starbucks employees have since followed in more than 400 stores nationwide. The 2023 UAW strike against the Big Three Detroit carmakers ended with double-digit pay rises, while Hollywood writers won AI guardrails after a 148-day walkout. Despite alleged retaliation and union-busting tactics, a quiet but profound shift is reshaping a workplace long thought to be union-proof.
              </p>
              <EssayBox>
                Mobilisable on: the future of work; whether the American social model is being rebalanced; "Is the American dream still alive?"; the political economy of post-pandemic labour markets.
              </EssayBox>
              <CivVocabBox words="trade unionism; an aggressive anti-union campaign; restrictive labour laws; an individualistic work culture; the highest level since 1965; a Gallup poll; to vote to unionise; a historic first; the trillion-dollar company; the UAW strike; double-digit pay rises; AI guardrails; a 148-day walkout; union-busting tactics; union-proof" />
            </div>
          </CivItem>

          <CivItem value="corporate-activism" title="Corporate Activism: Ben & Jerry's vs. Unilever">
            <div className="space-y-4">
              <p>
                In July 2021, Ben & Jerry's announced it would no longer sell its ice cream in the Israeli-occupied Palestinian territories — a striking case of "corporate activism" in the United States. The decision provoked a fierce backlash: several US states, including Florida, Texas and New Jersey, divested from Unilever, Ben & Jerry's parent company, citing anti-boycott laws. By 2022, Unilever defused the crisis by selling its Israeli business to a local licensee, allowing sales to resume despite the original board's public protest. The episode shows how American consumer brands have increasingly become political actors, willingly or not — and exposes the limits of such activism when it collides with state-level legislation, shareholder pressure and the explosive politics of the Boycott, Divestment, Sanctions movement. The line between brand purpose and political stance has rarely been so contested.
              </p>
              <EssayBox>
                Mobilisable on: the politicisation of consumer brands; "Should companies stay out of politics?"; the limits of corporate values when challenged by states; soft power and American capitalism.
              </EssayBox>
              <CivVocabBox words="corporate activism; the Israeli-occupied Palestinian territories; to provoke a fierce backlash; to divest from a company; anti-boycott laws; the parent company; to defuse a crisis; a local licensee; to collide with state legislation; shareholder pressure; the BDS movement; brand purpose" />
            </div>
          </CivItem>

          <CivItem value="greenwashing" title="Greenwashing: The BP Case">
            <div className="space-y-4">
              <p>
                BP's advertising campaign on social media, championing the company's investments in green energy, has come under scrutiny as a textbook case of "greenwashing". The British oil giant spent more than £800,000 on influence ads in the UK alone — a sum exceeding what it actually invested in concrete climate action over the same period. The contradiction was made starker in 2023, when BP quietly scaled back its 2030 emissions targets and posted record windfall profits of nearly $28 billion off the back of soaring oil and gas prices. The controversy highlights the growing tension faced by fossil fuel companies, caught between their financial interests and the urgency of the climate crisis. In an age of corporate communication, can advertising still be trusted as a marker of genuine commitment?
              </p>
              <EssayBox>
                Mobilisable on: corporate ethics and the climate crisis; "Should we trust the market to solve the climate crisis?"; the limits of self-regulation; the politics of advertising and truth.
              </EssayBox>
              <CivVocabBox words="to come under scrutiny; a textbook case of greenwashing; the British oil giant; influence ads; concrete climate action; to scale back emissions targets; windfall profits; soaring oil and gas prices; the urgency of the climate crisis; a marker of genuine commitment" />
            </div>
          </CivItem>

          <CivItem value="vocabulary" title="Essential Economic Vocabulary">
            <div className="grid gap-1">
              {essentialVocabulary.map((item, idx) => (
                <VocabRow key={idx} term={item.term} definition={item.definition} />
              ))}
            </div>
          </CivItem>

          <CivItem value="essay-questions" title="Sample Essay Questions">
            <div className="space-y-3">
              <EssayQuestion title="1. Inflation and Economic Policy">
                "The cost-of-living crisis of the 2020s has exposed the fragility of global economic systems." Discuss this statement with reference to recent inflation trends and policy responses.
              </EssayQuestion>
              <EssayQuestion title="2. Trade and Protectionism">
                To what extent has the US Inflation Reduction Act undermined transatlantic cooperation? Analyze the balance between climate action and free trade principles.
              </EssayQuestion>
              <EssayQuestion title="3. Global Tax Cooperation">
                "The 15% global minimum tax represents a turning point in international economic governance." Assess this claim by examining the agreement's implementation and challenges.
              </EssayQuestion>
              <EssayQuestion title="4. Tax Havens and Inequality">
                How does the UK's network of tax havens contribute to global inequality and what challenges exist in reforming this system?
              </EssayQuestion>
              <EssayQuestion title="5. Labor Movement Revival">
                "The 2020s have witnessed a resurgence of labor organizing in the United States." Discuss the factors driving this change and its implications for workers' rights.
              </EssayQuestion>
              <EssayQuestion title="6. Corporate Social Responsibility">
                "Companies should stay out of politics." Assess this statement with reference to cases like Ben & Jerry's and the role of corporate activism in contemporary society.
              </EssayQuestion>
              <EssayQuestion title="7. Greenwashing and Regulation">
                How effective are current measures in combating corporate greenwashing, and what additional regulation might be needed?
              </EssayQuestion>
              <EssayQuestion title="8. Globalization's Future">
                "Globalization is in retreat." Assess this claim by examining recent trends in trade policy, tax cooperation, and corporate behavior.
              </EssayQuestion>
            </div>
          </CivItem>
        </CivAccordion>

        <CivPageFooterNav prev={{ label: 'AI & Technology', to: '/formation/anglais/civilisation/technology' }} next={{ label: 'Health', to: '/formation/anglais/civilisation/health' }} />
      </div>
    </PRFormationLayout>
  );
};

export default EconomyPage;
