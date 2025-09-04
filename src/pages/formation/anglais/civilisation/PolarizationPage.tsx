import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h2 className="text-xl font-semibold text-black mt-8 mb-3 pb-2 border-b-2 border-orange-500">{children}</h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }>=({ children }) => (
  <h3 className="text-lg font-semibold text-black mt-6 mb-2">{children}</h3>
);

const PolarizationPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal breadcrumb */}
      <nav className="sticky top-0 z-40 bg-white border-b border-orange-200">
        <div className="container mx-auto px-4 py-2 text-xs">
          <div className="flex items-center gap-1 text-black/70">
            <Link to="/" className="hover:text-black">
              <span className="inline-flex items-center gap-1"><Home className="h-3 w-3 text-orange-600"/>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <Link to="/formation/anglais" className="hover:text-black">Formation <span className="text-orange-600">Anglais</span></Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <Link to="/formation/anglais/civilisation" className="hover:text-black">Civilisation</Link>
            <ChevronRight className="h-3 w-3 text-black/40" />
            <span className="font-medium">Political and Social Polarization</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black">Political and Social Polarization in the United States</h1>
            <p className="text-sm text-black/70 mt-1">Minimal design • Orange accents only</p>
          </div>

          <SectionTitle>Overview: A Nation Increasingly Divided</SectionTitle>
          <p className="leading-relaxed">
            The United States faces unprecedented levels of political and social polarization that threaten the foundations of its democratic system. <strong>Around 80% of Americans say the nation is greatly divided on core values</strong>, while only a small minority see the country as united.<sup>[1]</sup>
          </p>

          <SectionTitle>The Scale and Nature of Political Polarization</SectionTitle>
          <SubTitle>Record Levels of Ideological Division</SubTitle>
          <p className="leading-relaxed">
            Political moderation is at historic lows: <strong>only about one‑third of Americans identify as moderate</strong>. Partisan self‑sorting keeps rising—<strong>77% of Republicans identify as conservative</strong> and <strong>over half of Democrats as liberal</strong>—with unfavorable views of the other party reaching record highs.<sup>[2]</sup>
          </p>
          <SubTitle>Affective Polarization</SubTitle>
          <p className="leading-relaxed">
            Beyond policy differences, <strong>affective polarization</strong>—dislike of the opposing side—has deepened. Large shares report
            social circles composed mainly of like‑minded friends, creating echo chambers amplified by social media where cross‑party interactions are disproportionately negative.<sup>[2][3][4]</sup>
          </p>

          <SectionTitle>Geographic and Demographic Foundations</SectionTitle>
          <SubTitle>The Urban–Rural Divide</SubTitle>
          <p className="leading-relaxed">
            Political geography sorts the country into <strong>urban Democratic</strong> and <strong>rural/exurban Republican</strong> strongholds—“two nations uneasily sharing the same geographic space.” This concentration also generates systematic representational effects in Congress.<sup>[5][6]</sup>
          </p>
          <SubTitle>Historical Roots and Intensification</SubTitle>
          <p className="leading-relaxed">
            From New Deal coalitions to culture‑war issues since the 1980s, successive cleavages (civil rights, abortion, immigration) reinforced urban vs rural alignments and cemented the present polarization.<sup>[6]</sup>
          </p>

          <SectionTitle>Media Landscapes and Information Echo Chambers</SectionTitle>
          <p className="leading-relaxed">
            Fragmented media ecosystems expose citizens to <strong>parallel information universes</strong>. Cable news and algorithmic feeds reward outrage; polarized contexts also foster <strong>higher misinformation spread</strong>, particularly when it benefits one’s in‑group.<sup>[3][7][8][9]</sup>
          </p>

          <SectionTitle>Consequences for Democratic Governance</SectionTitle>
          <SubTitle>Institutional Trust Crisis</SubTitle>
          <p className="leading-relaxed">
            Trust has declined across most institutions in the last five decades and now varies sharply by party identity; only the military retains broad confidence. When legitimacy is polarized, collective action becomes harder.<sup>[10][11]</sup>
          </p>
          <SubTitle>Gridlock and Policy Instability</SubTitle>
          <p className="leading-relaxed">
            Polarization drives legislative stalemate, delayed fiscal choices, and higher market uncertainty—undermining investor confidence and long‑term planning.<sup>[12]</sup>
          </p>

          <SectionTitle>Threats to Democratic Norms and Institutions</SectionTitle>
          <p className="leading-relaxed">
            Support for guardrails weakens when partisan stakes are high; willingness to endorse unilateral executive action rises on both sides.
            The <strong>January 6, 2021</strong> attack illustrated how political conflict can escalate into violence, injuring over a hundred officers and disrupting the vote count.<sup>[13][14][15]</sup>
          </p>

          <SectionTitle>Social, Cultural, and Economic Dimensions</SectionTitle>
          <p className="leading-relaxed">
            Political identity increasingly overlaps with race, religion, and lifestyle. People choose partners, neighborhoods, brands, and social ties that mirror partisan identity. Economic inequality and the urban–rural prosperity gap further fuel resentment and sorting.<sup>[7][19][3][20][21]</sup>
          </p>

          <SectionTitle>Solutions and Mitigation Strategies</SectionTitle>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Reduce echo chambers</strong>: platform accountability, diverse media diets, and misinformation literacy.<sup>[7][22]</sup></li>
            <li><strong>Institutional reforms</strong>: electoral rules that incentivize coalition‑building, campaign‑finance and redistricting reforms, stronger civic education.<sup>[6]</sup></li>
            <li><strong>Cross‑partisan contact</strong> in structured, deliberative settings to humanize opponents and lower hostility.<sup>[22]</sup></li>
          </ul>

          <SectionTitle>Long‑term Outlook</SectionTitle>
          <p className="leading-relaxed">
            Trajectories range from continued intensification (risking competitive authoritarianism) to institutional adaptation or
            crisis‑driven reunification. Outcomes will hinge on elite behavior, media responsibility, institutional resilience, and the capacity to build cross‑partisan coalitions.<sup>[16][17][23]</sup>
          </p>

          <SectionTitle>References</SectionTitle>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li><a className="text-orange-600 hover:underline" href="https://news.gallup.com/poll/650828/americans-agree-nation-divided-key-values.aspx" target="_blank" rel="noreferrer">Gallup</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://en.wikipedia.org/wiki/Political_polarization_in_the_United_States" target="_blank" rel="noreferrer">Political polarization (overview)</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.facinghistory.org/resource-library/political-polarization-united-states" target="_blank" rel="noreferrer">Facing History</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.nature.com/articles/s44260-024-00008-w" target="_blank" rel="noreferrer">Nature: affective polarization</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.theatlantic.com/politics/archive/2022/06/red-and-blue-state-divide-is-growing-michael-podhorzer-newsletter/661377/" target="_blank" rel="noreferrer">The Atlantic</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://news.stanford.edu/stories/2019/06/urban-rural-divide-shapes-elections" target="_blank" rel="noreferrer">Stanford: urban–rural divide</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://sites.bu.edu/pardeeatlas/advancing-human-progress-initiative/back2school/how-the-american-media-landscape-is-polarizing-the-country/" target="_blank" rel="noreferrer">BU Pardee Atlas</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://escholarship.org/content/qt7619722z/qt7619722z.pdf" target="_blank" rel="noreferrer">Polarization & misinformation</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://journals.sagepub.com/doi/10.1177/00222429241264997" target="_blank" rel="noreferrer">Misinformation dynamics</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://direct.mit.edu/daed/article/151/4/43/113715/Fifty-Years-of-Declining-Confidence-amp-Increasing" target="_blank" rel="noreferrer">Daedalus: trust decline</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.amacad.org/publication/daedalus/fifty-years-declining-confidence-increasing-polarization-trust-american-institutions" target="_blank" rel="noreferrer">American Academy</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.specialeurasia.com/2025/03/24/united-states-polarisation/" target="_blank" rel="noreferrer">SpecialEurasia</a></li>
            <li><a className="text-orange-600 hover:underline" href="http://newamerica.org/the-thread/politics-democracy-authoritarian-2024/" target="_blank" rel="noreferrer">New America</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://en.wikipedia.org/wiki/January_6_United_States_Capitol_attack" target="_blank" rel="noreferrer">Jan 6 (overview)</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.npr.org/2025/01/05/nx-s1-5200594/jan-6-attack-capitol-riot-victims-violence" target="_blank" rel="noreferrer">NPR</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.npr.org/2025/04/22/nx-s1-5340753/trump-democracy-authoritarianism-competive-survey-political-scientist" target="_blank" rel="noreferrer">Survey of political scientists</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.prio.org/2025/03/american-democracy-is-in-danger-but-not-dead/" target="_blank" rel="noreferrer">PRIO</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://natcen.ac.uk/news/identity-issues-now-key-dividing-line-britains-politics" target="_blank" rel="noreferrer">NatCen</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://encompass-europe.com/comment/the-ripple-effects-of-brexit" target="_blank" rel="noreferrer">Encompass Europe</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://llyc.global/en/ideas/political-polarization-in-the-2024-u-s-presidential-election/" target="_blank" rel="noreferrer">LLYC</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://en.wikipedia.org/wiki/Urban%E2%80%93rural_political_divide" target="_blank" rel="noreferrer">Urban–rural divide (overview)</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://www.cambridge.org/core/journals/american-political-science-review/article/polarizing-effect-of-partisan-echo-chambers/5044B63A13A458A97CA747E9DCA07228" target="_blank" rel="noreferrer">APSR: echo chambers</a></li>
            <li><a className="text-orange-600 hover:underline" href="https://democratic-erosion.org/2025/04/20/americas-political-polarization-problem/" target="_blank" rel="noreferrer">Democratic Erosion</a></li>
          </ol>

          <div className="mt-10">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="border-orange-500 text-black hover:bg-orange-50"><ArrowLeft className="h-4 w-4 mr-2"/>Back to Civilization</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarizationPage;


