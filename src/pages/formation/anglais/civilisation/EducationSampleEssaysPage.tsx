import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const EducationSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Education · Sample Essays</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Education's Meritocracy Myth</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: Higher Education Access—Rhetoric of Meritocracy, Reality of Stratification</p>
                            <h3>Introduction</h3>
                            <p>
                                Conventional wisdom usually points out that education is the great equalizer, offering pathways to social mobility regardless of background. One may jump to the conclusion that expanding university access—through student loans in the US, widening participation targets in the UK, and means-tested support in Australia—would democratize opportunity and reduce inequality. Obviously, there is more than meets the eye. As far as I am concerned, the higher education systems in these countries simultaneously proclaim meritocracy while entrenching privilege through debt burdens, postcode stratification, and credential inflation. This raises the question of whether mass university expansion can deliver genuine social mobility without structural reforms to funding, selection, and labor markets.
                            </p>
                            <h3>I. Recognising the expansion and its expected benefits</h3>
                            <p>
                                To begin with, university participation has expanded dramatically across the English-speaking world. In the UK, the percentage of 18-year-olds entering higher education rose from 15% in 1980 to 50% today, driven by New Labour's target and maintained through widening participation offices at every institution. The United States now sees 70% of high school graduates enroll in college within two years, supported by $120 billion in federal student aid annually. Australia's demand-driven system, introduced in 2012, removed enrollment caps, allowing universities to admit unlimited domestic students with government-subsidized places.
                            </p>
                            <p>
                                Moreover, targeted programs appear to improve access for disadvantaged groups. The UK's contextual admissions—where universities lower grade requirements for applicants from deprived areas or underperforming schools—helped Russell Group institutions increase low-income student enrollment by 25% between 2010 and 2020. In the US, California's guaranteed transfer pathways from community colleges to UC campuses provide second chances for late bloomers and lower-income students. These initiatives suggest that deliberate intervention can counteract structural disadvantage.
                            </p>
                            <h3>II. Explaining why it misses the point</h3>
                            <p>
                                Nevertheless, this narrative of expanding opportunity obscures deepening stratification. First of all, access and completion are radically unequal by class. In the US, 77% of students from the top income quartile complete bachelor's degrees, compared to just 9% from the bottom quartile—a gap that has widened despite rising overall enrollment. The UK shows similar patterns: students from privately educated backgrounds (7% of the population) capture 39% of Oxbridge places, perpetuating elite reproduction. Australia's Group of Eight universities enroll twice as many students from the wealthiest postcodes as from the poorest, despite equity schemes.
                            </p>
                            <p>
                                However, it is short-sighted to believe that expanding places alone drives mobility when, in reality, funding models create crippling debt. US student loan debt reached $1.7 trillion in 2023, averaging $37,000 per borrower—often forcing graduates into high-paying corporate jobs rather than public service or entrepreneurship. The UK's shift to £9,250 annual fees in 2012 (triple the previous cap) saddled graduates with average debts of £45,000, disproportionately deterring working-class applicants from expensive courses like medicine or architecture with long training periods. Australia's HECS-HELP system, while income-contingent, still leaves graduates with $27,000 average debt, delaying home ownership and family formation.
                            </p>
                            <p>
                                Furthermore, credential inflation undermines the mobility promise. As bachelor's degrees become ubiquitous, their labor market value erodes—29% of US graduates are underemployed in jobs not requiring degrees, while UK data shows 34% of recent graduates in non-graduate roles. This pushes advantage upward: elite students pursue postgraduate credentials (master's, professional degrees) that working-class students cannot afford, recreating hierarchy at higher levels. Meanwhile, non-graduate pathways atrophy—apprenticeships declined by 40% in England between 2017 and 2022, channeling all opportunity through a single, debt-inducing pipeline.
                            </p>
                            <p>
                                Additionally, early-years inequality predetermines outcomes long before university. The UK's Sutton Trust found that by age five, disadvantaged children are already 4.3 months behind in vocabulary development, a gap that compounds through primary and secondary education due to under-resourced state schools, private tutoring markets (£2 billion annually in the UK), and exam coaching inaccessible to poorer families. American SAT scores correlate more strongly with parental income than with student ability, while Australia's NAPLAN results map almost perfectly onto socioeconomic postcodes. University "widening access" thus becomes a late-stage intervention in a rigged race.
                            </p>
                            <h3>III. Advocating for a more ambitious and systemic solution</h3>
                            <p>
                                Therefore, a real shift is required to grapple with the issue: move from expanding access to dysfunctional systems toward restructuring education and labor markets holistically. Not only would comprehensive reform improve mobility; it would also rebuild education's social purpose beyond credential sorting. Concretely, eliminate tuition fees entirely and reintroduce maintenance grants covering living costs, funded through progressive graduate taxes on lifetime earnings above median income—this removes upfront barriers while ensuring high earners contribute proportionally.
                            </p>
                            <p>
                                Simultaneously, diversify pathways by massively expanding high-quality apprenticeships and vocational routes. Germany's dual system—combining workplace training with classroom learning—achieves youth unemployment below 6% (versus 12% in the UK) by valuing technical skills equally. Establish statutory apprenticeship levies (employers contribute 1% of payroll), mandate progression routes from apprentice to technician to engineer with equivalent prestige to academic degrees, and create sector-based skills academies in advanced manufacturing, green energy, and digital sectors with guaranteed job placements.
                            </p>
                            <p>
                                On selection, replace high-stakes exams with holistic portfolios assessed over time, including coursework, practical projects, and teacher assessments, reducing the impact of private tutoring. Ban legacy admissions and preferential treatment for alumni children (still practiced at US elite universities), and implement class-based affirmative action with reserved places for care leavers, first-generation students, and applicants from education deserts. Crucially, regulate private schooling to reduce advantage: cap fees at state school per-pupil funding levels, remove charitable status tax breaks (£1.5 billion subsidy annually in the UK), and integrate private schools into state systems through partnerships and shared resources.
                            </p>
                            <p>
                                Fundamentally, tackle early-years inequality where it originates. Universal free childcare from age one (like Denmark), with graduate early-years educators paid equivalently to schoolteachers, would level developmental starting points. Triple funding for schools serving disadvantaged communities (current UK pupil premium is £1,385 per student—insufficient against £7,000+ private school advantages). Provide free nutritious meals, after-school clubs, music and sports programs, and summer learning to prevent attainment gaps from opening. Invest in parental support programs—literacy classes, parenting workshops, mental health services—to build family capacity across class lines.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                All things considered, higher education expansion without systemic reform entrenches inequality under the guise of opportunity. Ultimately, what is needed is not more graduates burdened by debt and underemployment, but a redesigned education-to-work system that values diverse talents, removes financial barriers, and intervenes early where disadvantage originates. A real watershed—free universal higher education paired with high-quality alternatives and early-years investment—would replace meritocratic mythology with genuine mobility. The current approach may serve political rhetoric, but it fails economic logic and social justice. It is high time to address the issue in its full complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSampleEssaysPage;
