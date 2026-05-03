import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const ImmigrationSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Immigration · Sample Essays</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Immigration Policy Paradox</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: Immigration Restriction in Aging Democracies—Economic Need vs. Political Fear</p>
                            <h3>Introduction</h3>
                            <p>
                                Conventional wisdom usually points out that Western democracies need immigration to sustain economic growth and address demographic decline. One may jump to the conclusion that rational policy would expand immigration pathways given severe labor shortages, aging populations, and fiscal pressures on pension systems. Obviously, there is more than meets the eye. As far as I am concerned, the United States, United Kingdom, and Australia have simultaneously tightened immigration controls while facing acute worker shortages—a paradox driven by political populism, identity anxieties, and institutional dysfunction. This raises the question of whether restrictive immigration policies can coexist with long-term economic vitality and social cohesion.
                            </p>
                            <h3>I. Recognising the economic imperative and its expected benefits</h3>
                            <p>
                                To begin with, demographic and economic data overwhelmingly support immigration expansion. The UK's Office for National Statistics projects that without immigration, the working-age population would shrink by 4 million by 2050, collapsing the tax base supporting the NHS and state pensions. In the United States, the Congressional Budget Office estimates that immigration added $7 trillion to GDP between 2000 and 2020, while immigrants founded 55% of billion-dollar startups. Australia's Productivity Commission demonstrates that skilled migration increased GDP per capita by 0.6% annually over the past decade, driving innovation sectors from mining automation to fintech.
                            </p>
                            <p>
                                Moreover, targeted programs appear to work. Canada's Express Entry system prioritizes language proficiency, education, and job offers, achieving 80% employment rates within the first year. Germany's Blue Card attracted 56,000 highly skilled workers in 2022, filling critical gaps in engineering and healthcare. These examples suggest that well-designed immigration systems can align economic needs with integration outcomes, benefiting both host countries and newcomers.
                            </p>
                            <h3>II. Explaining why it misses the point</h3>
                            <p>
                                Nevertheless, this technocratic optimism ignores deeper political and social realities. First of all, populist backlash has hardened against immigration across the Anglo-American world. Brexit was fundamentally driven by immigration concerns—the Leave campaign's "Take Back Control" slogan centered on ending EU free movement, even though economic modelling predicted GDP losses. In the US, Trump's 2016 victory exploited anti-immigrant sentiment, leading to the Muslim travel ban, family separations, and a 65% drop in refugee admissions. Australia's offshore detention on Nauru and Manus Island—condemned by the UN as cruel and inhumane—persists because both major parties fear electoral punishment for appearing "soft" on boat arrivals.
                            </p>
                            <p>
                                However, it is short-sighted to believe that cultural anxiety alone explains restrictionism when, in reality, policy failures compound distrust. Integration programs remain chronically underfunded—the UK cut ESOL (English for Speakers of Other Languages) funding by 60% between 2010 and 2020, creating 10-year waiting lists in some regions. This prevents language acquisition, employment, and social mixing, perpetuating segregation and fueling resentment. In the US, pathways to citizenship take decades for legal applicants, pushing many into irregular status and exploitable situations. Australia's temporary visa system leaves 2 million people—one in twelve residents—in perpetual limbo without permanent rights, creating a precarious underclass.
                            </p>
                            <p>
                                Furthermore, media narratives and political discourse distort reality. Immigration is consistently framed as a "crisis" despite net migration being historically moderate. The UK saw 745,000 net arrivals in 2022, but 40% were international students (who typically leave) and 25% were Ukrainians and Hong Kongers fleeing violence (temporary humanitarian schemes). Tabloid headlines amplify isolated incidents—a single migrant crime dominates coverage while the £26 billion annual tax contribution of immigrants goes unreported. This asymmetric information environment shapes public perceptions far more than lived experience, since most anti-immigration voters live in areas with the lowest immigrant populations.
                            </p>
                            <h3>III. Advocating for a more ambitious and systemic solution</h3>
                            <p>
                                Therefore, a real shift is required to grapple with the issue: move from crisis management to strategic integration architecture. Not only would comprehensive reform improve economic outcomes; it would also rebuild public trust through transparency and reciprocity. Concretely, governments should establish clear annual immigration targets based on transparent economic modelling, published and debated in parliament to depoliticize numbers and anchor expectations. Create fast-track pathways for critical sectors—NHS workers, engineers, social care staff—with guaranteed permanent residency after three years to reduce exploitation and churn.
                            </p>
                            <p>
                                On integration, massively expand language and civic education funding: free, universal ESOL with childcare provision; mandatory but paid civic orientation covering legal rights, labor protections, and democratic participation. Implement regional distribution schemes with enhanced support—Canada's Atlantic Immigration Program places newcomers in declining regions with wraparound services (housing, job placement, community mentorship), achieving 93% retention rates. This simultaneously addresses regional inequality and prevents urban concentration that fuels local tensions.
                            </p>
                            <p>
                                Sectorally, replace temporary visa schemes with clearer permanent/temporary tracks: high-skill permanent from day one (like talent visas); seasonal agriculture explicitly time-limited with enforced returns to prevent shadow populations. Crucially, couple immigration expansion with credible enforcement—prosecute exploitative employers, not workers; enforce minimum wages to prevent undercutting; and establish independent labor inspectorates with whistleblower protections to prevent migrant worker abuse that undermines native workers and fuels backlash.
                            </p>
                            <p>
                                Politically, reframe the narrative through data transparency and local empowerment. Publish granular, real-time immigration statistics with economic contribution metrics (tax paid, jobs created, patents filed) to counter disinformation. Establish community integration councils in high-immigration areas, co-designed by residents and newcomers, with budgets for shared infrastructure (language cafes, job fairs, cultural festivals) to build social capital across divides. Guarantee local government additional funding proportional to immigration inflows to ensure services keep pace and prevent resource competition.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                All things considered, the immigration paradox—economic need colliding with political restriction—reflects institutional failure more than irreconcilable values. Ultimately, what is needed is not choosing between openness and control, but building systems that deliver both: orderly, transparent, and economically aligned immigration paired with robust, funded integration that produces genuine social cohesion. A real watershed—strategic immigration architecture backed by community investment—would replace culture-war deadlock with mutual prosperity. The current approach may be politically expedient, but it is economically irrational and socially corrosive. It is high time to address the issue in its full complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImmigrationSampleEssaysPage;
