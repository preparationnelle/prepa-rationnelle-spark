import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const GeopoliticsSampleEssaysPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Home className="h-3 w-3" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
                            Formation <span className="text-orange-600">Anglais</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/anglais/civilisation" className="hover:text-foreground transition-colors">
                            Civilisation
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <span className="text-foreground font-medium">Geopolitics · Sample Essays</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
                    <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-orange-100">
                                <BookOpen className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">The Special Relationship Under Strain</h2>
                                <p className="text-sm text-gray-600">Sample Essay - English Civilization</p>
                            </div>
                        </div>
                        <Link to="/formation/anglais/civilisation">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back
                            </Button>
                        </Link>
                    </div>

                    <div className="p-6">
                        <div className="prose max-w-none text-gray-800 leading-relaxed">
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: The US-UK "Special Relationship"—Strategic Asset or Diplomatic Illusion?</p>
                            <h3>Introduction</h3>
                            <p>
                                Conventional wisdom usually points out that the US-UK "special relationship" remains the cornerstone of Western security and transatlantic cooperation. One may jump to the conclusion that shared language, historical ties, and intelligence partnership guarantee automatic alignment on global issues. Obviously, there is more than meets the eye. As far as I am concerned, while institutional links persist—especially through NATO and Five Eyes—strategic divergence has widened significantly since Brexit and Trump's presidency. This raises the question of whether symbolic partnership can compensate for structural drift in interests and capabilities.
                            </p>
                            <h3>I. Recognising the enduring foundations and their expected benefits</h3>
                            <p>
                                To begin with, the relationship rests on unique institutional architecture. The Five Eyes intelligence network, established in 1946, enables real-time sharing across signals intelligence, cyber threats, and counterterrorism. The UK and US exchange officers at the highest levels—British liaison staff work inside the Pentagon, while GCHQ and NSA maintain integrated operations. Defence-industrial cooperation runs deep: the UK is the sole Tier 1 partner on the F-35 programme, contributing design expertise and securing £35 billion in contracts. Diplomatically, London and Washington coordinate within the UN Security Council, share atomic weapons technology under the 1958 Mutual Defence Agreement, and recently expanded partnership through AUKUS to counter China in the Indo-Pacific. At first sight, this dense web of cooperation appears irreplaceable and mutually beneficial.
                            </p>
                            <h3>II. Explaining why it misses the point</h3>
                            <p>
                                Nevertheless, this apparent unity conceals growing structural divergence. First of all, Britain's geopolitical weight has declined relative to American global ambitions. The UK defence budget represents 2.3% of GDP—adequate for NATO commitments but insufficient to project power independently. Washington increasingly partners with larger economies (India, Japan) or regional coalitions rather than relying on a single junior ally. Brexit compounded this asymmetry: London lost its role as America's gateway to the European market and voice inside Brussels, diminishing its utility as a diplomatic bridge.
                            </p>
                            <p>
                                However, it is short-sighted to believe that shared values automatically produce aligned interests. The Iraq War exposed fault lines—though Blair joined Bush in 2003, the Chilcot Inquiry later revealed that intelligence was "sexed up" under American pressure, poisoning public trust in future interventions. More recently, Trump's withdrawal from the Iran nuclear deal and Paris Climate Agreement forced the UK to choose between Atlantic loyalty and European partnerships. The chaotic Afghanistan exit in 2021 underscored Washington's unilateral decision-making: Parliament recalled, MPs criticized American abandonment of coordinated strategy, yet London had no leverage to influence US timing. Even within NATO, burden-sharing disputes persist—Trump repeatedly demanded higher European spending while threatening to "go it alone," treating alliances as transactional rather than foundational.
                            </p>
                            <h3>III. Advocating for a more ambitious and systemic solution</h3>
                            <p>
                                Therefore, a real shift is required to grapple with the issue: move from nostalgic symbolism to operational realism. Not only would adaptive partnership rebuild credibility; it would also anchor both nations in effective multilateralism. Concretely, the UK should deepen European defence cooperation through permanent structured cooperation (PESCO), joint procurement, and integrated rapid-reaction forces—reducing unilateral dependence on Washington while strengthening NATO's European pillar. Simultaneously, formalize AUKUS into a standing Indo-Pacific council with regular ministerial consultations, defence-industrial roadmaps, and technology-transfer protocols to institutionalize strategic coordination beyond ad-hoc summits.
                            </p>
                            <p>
                                On intelligence, expand Five Eyes into a broader democratic intelligence alliance—invite trusted partners like France, Germany, and Japan for specific threat streams (cyber, climate security) to build collective capacity without compromising core signals intelligence. Diplomatically, establish a US-UK-EU trilateral on China policy, climate finance, and tech regulation to harmonize approaches and prevent regulatory arbitrage. Domestically, the UK must invest in sovereign capabilities—cyber defence, satellite systems, naval shipbuilding—to ensure that partnership reflects mutual strength rather than asymmetric dependency. Crucially, codify partnership principles in a public charter: consultation before major interventions, burden-sharing formulas, and dispute-resolution mechanisms to replace ad-hoc crisis management with predictable governance.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                All things considered, the US-UK relationship retains unique institutional depth but suffers from strategic divergence and capability imbalance. Ultimately, what is needed is not abandoning historic ties nor clinging to outdated narratives, but a structural upgrade that matches institutional intimacy with operational realism. A real watershed—plurilateral partnerships anchored in credible European defence and formalized Indo-Pacific cooperation—would transform the "special relationship" from a diplomatic slogan into a strategic asset. The current approach may be well-intentioned, but it falls short. It is high time to address the issue in its full complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeopoliticsSampleEssaysPage;
