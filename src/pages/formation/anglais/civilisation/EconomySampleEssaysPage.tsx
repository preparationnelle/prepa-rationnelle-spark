import React from 'react';
import { DollarSign } from 'lucide-react';
import { EnglishSampleEssayTemplate, EssaySection } from '@/components/formation/anglais/EnglishSampleEssayTemplate';

const sections: EssaySection[] = [
  {
    heading: 'Introduction',
    paragraphs: [
      `Conventional wisdom usually points out that globalization has lifted billions out of poverty, integrated markets, and accelerated technological diffusion. One may jump to the conclusion that openness to trade, capital flows, and migration would create broad-based prosperity, benefiting workers and consumers through efficiency gains and competitive pressure. Obviously, there is more than meets the eye. As far as I am concerned, while globalization has increased aggregate wealth in the US, UK, and Australia, it has simultaneously hollowed out middle-class employment, concentrated gains among capital owners, and eroded worker bargaining power through offshoring threats. This raises the question of whether globalization can be restructured to deliver inclusive growth or whether its current form inevitably produces winner-take-all outcomes.`,
    ],
  },
  {
    heading: 'I. Recognising the gains and their expected distribution',
    paragraphs: [
      `To begin with, trade liberalization and capital mobility have driven impressive macroeconomic growth. US GDP grew from $5.9 trillion in 1990 to $25.5 trillion in 2023, with trade as a share of GDP rising from 20% to 27%. The UK's financial services sector—globally integrated through deregulation—contributes £173 billion annually (8.3% of GDP), supporting 2.3 million jobs. Australia's integration with Asian markets, particularly China, fueled a 28-year growth streak (1991-2019), with exports rising from 17% to 26% of GDP and driving mining booms that created 250,000 jobs and generated $300 billion in export earnings.`,
      `Moreover, consumers have benefited from lower prices. Walmart's global supply chains reduced US clothing prices by 8% and electronics by 30% between 1995 and 2020, effectively raising real incomes for low-income households who spend larger shares on tradable goods. The UK's food import diversification lowered grocery bills by 15%, while Australia's tariff reductions saved households $2,500 annually through cheaper appliances, vehicles, and consumer electronics. These gains appear to validate the comparative advantage theory: specialization increases efficiency and living standards.`,
    ],
  },
  {
    heading: 'II. Explaining why it misses the point',
    paragraphs: [
      `Nevertheless, this aggregate prosperity conceals profound distributional failures. First of all, manufacturing employment collapsed under import competition. The US lost 5.8 million manufacturing jobs (33%) between 2000 and 2020, concentrated in the Rust Belt—Detroit, Cleveland, Pittsburgh—where single-industry towns saw unemployment spike to 18% and median incomes fall by 27%. The UK's deindustrialization accelerated post-1990: manufacturing employment dropped from 5.1 million (22% of jobs) to 2.6 million (8%), gutting northern regions like Yorkshire and the North East. Australia's car industry—employing 50,000 in 2008—completely shut down by 2017, unable to compete with Southeast Asian production costs that were 40% lower due to wage differentials and automation advantages.`,
      `However, it is short-sighted to attribute job losses solely to trade when, in reality, automation and labor market deregulation compound the damage. Research shows that 85% of US manufacturing job losses stem from productivity gains (robotics, AI) rather than offshoring, but globalization enabled firms to replace workers at home with cheaper alternatives abroad, weakening union leverage. The UK's zero-hour contracts and gig economy proliferation (5.1 million workers in precarious employment) reflect employers' ability to offshore credible threats, depressing wages even in non-tradable sectors like hospitality and logistics. Australia's casualization (now 25% of workforce) similarly reflects power shifts toward capital.`,
      `Furthermore, gains accrue overwhelmingly to top earners and capital owners. In the US, the top 1% captured 54% of income growth between 1993 and 2023, while the bottom 50% saw real wage stagnation—median hourly earnings grew just 0.3% annually adjusted for inflation, versus 4.5% for the top 10%. The UK shows similar patterns: FTSE 100 CEO pay rose 940% since 1990, while median worker pay increased 58%, creating a pay ratio of 120:1 (versus 47:1 in 1990). Australia's wealth Gini coefficient reached 0.61, with the top 20% holding 62% of wealth, driven by property and stock market gains inaccessible to wage earners.`,
      `Additionally, tax competition and profit-shifting erode public revenue needed for adjustment support. US multinational corporations hold $2.1 trillion in offshore accounts to avoid taxation, costing the Treasury $100 billion annually. The UK loses £35 billion per year to corporate tax avoidance through schemes like the "Double Irish Dutch Sandwich" (before reforms) and transfer pricing manipulation. Australia foregoes $50 billion annually as mining companies pay less than 1% effective tax rates despite massive profits, using offshore entities in Singapore and tax havens. This starves social programs—job retraining, infrastructure investment—that could cushion globalization's losers.`,
      `Moreover, financialization has decoupled real economy performance from worker welfare. The UK's finance sector grew from 5% to 8.3% of GDP while manufacturing shrank, but finance employs far fewer people (2.3 million versus 8 million in 1980s manufacturing) and concentrates rewards in London's Square Mile, leaving 60% of regions worse off. The US stock market reached record highs in 2023, yet only 56% of households own stocks (down from 65% in 2007), meaning half the population is excluded from capital gains. Australia's superannuation system, while broad, still leaves 30% with balances under $50,000 at retirement—insufficient for security.`,
    ],
  },
  {
    heading: 'III. Advocating for a more ambitious and systemic solution',
    paragraphs: [
      `Therefore, a real shift is required to grapple with the issue: move from market fundamentalism to embedded liberalism with robust redistribution and industrial strategy. Not only would comprehensive reform sustain openness; it would also ensure gains are broadly shared and losers are compensated. Concretely, implement minimum global corporate tax rates (the OECD's 15% deal is a start but insufficient—raise to 25% for multinationals) and country-by-country reporting to prevent profit-shifting. Earmark recovered revenues for transition assistance: wage insurance programs (Denmark's flexicurity pays 90% of previous earnings for two years during retraining), relocation subsidies for displaced workers, and pension top-ups for early retirees from shuttered industries.`,
      `Simultaneously, pursue active industrial policy to build comparative advantages in future sectors. Invest $200 billion annually (US equivalent) in green technology R&D, advanced manufacturing, and digital infrastructure, creating high-wage jobs in batteries, hydrogen, semiconductors, and biotech—sectors where first-mover advantages matter. The UK should replicate Germany's Fraunhofer model: applied research institutes embedded in regions, linking universities to local firms, preventing brain drain to London. Australia must diversify beyond mining: fund sovereign manufacturing in critical minerals processing, renewable energy equipment, and defense technologies, reducing dependence on Chinese supply chains.`,
      `On labor markets, strengthen worker bargaining power through sectoral union agreements (covering entire industries, not firm-by-firm) and co-determination mandates requiring 40% worker representation on corporate boards (German model). This prevents race-to-the-bottom wage competition and ensures productivity gains are shared. Establish labor standards in trade agreements with enforceable penalties—the USMCA's rapid response mechanism, which sanctions Mexican factories violating rights, provides a template. Ban non-compete clauses and mandatory arbitration that suppress mobility and wage growth.`,
      `Fundamentally, redesign tax systems to capture globalization's gains. Implement wealth taxes on net worth above $10 million (2-3% annually), financial transaction taxes (0.5% on stock trades, 0.1% on bonds) to curb speculation, and higher capital gains rates equalizing with earned income. Use revenues to fund universal basic services—free childcare, eldercare, public transport, broadband—that reduce cost-of-living pressures and decouple welfare from employment status. Norway's sovereign wealth fund, capitalizing resource rents for public benefit, demonstrates feasible models.`,
      `Regionally, address geography-of-opportunity divides through targeted investment. Establish regional development banks (like Germany's KfW) offering subsidized loans for businesses locating in left-behind areas. Build innovation clusters around anchor institutions—universities, research labs—in former industrial towns, replicating Pittsburgh's transformation from steel city to robotics hub. Improve interregional transport—high-speed rail, digital connectivity—to prevent talent concentration in superstar cities.`,
    ],
  },
  {
    heading: 'Conclusion',
    paragraphs: [
      `All things considered, globalization's current trajectory generates aggregate growth while fracturing societies and concentrating power. Ultimately, what is needed is not protectionist retreat but progressive globalization: open markets paired with strong labor protections, aggressive redistribution, and strategic industrial policy. A real watershed—global tax coordination, worker empowerment, and regional investment—would transform globalization from an elite project into shared prosperity. The current approach may boost GDP, but it erodes social cohesion and political stability. It is high time to address the issue in its full complexity.`,
    ],
  },
];

const EconomySampleEssaysPage = () => (
  <EnglishSampleEssayTemplate
    themeLabel="Economy"
    themeSlug="economy"
    essayTitle="Globalization's Inequality Engine"
    Icon={DollarSign}
    sections={sections}
  />
);

export default EconomySampleEssaysPage;
