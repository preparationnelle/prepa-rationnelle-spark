import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const HealthSystemsSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Healthcare Systems · Sample Essays</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Healthcare Systems Under Strain</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: NHS vs. Private Healthcare—Universal Access, Unequal Outcomes</p>
                            <h3>Introduction</h3>
                            <p>
                                Conventional wisdom usually points out that universal healthcare systems like the UK's NHS provide equitable access superior to market-based models like the US system. One may jump to the conclusion that tax-funded, free-at-point-of-use care would guarantee both efficiency and equality, contrasting favorably with America's fragmented insurance landscape. Obviously, there is more than meets the eye. As far as I am concerned, while the NHS achieves universal coverage, it suffers from chronic underfunding, workforce crises, and widening health inequalities, while the US system delivers innovation and immediate access for the insured but bankrupts millions and leaves 27 million uninsured. This raises the question of whether either model can sustain population health in aging societies without fundamental restructuring.
                            </p>
                            <h3>I. Recognising the NHS model's achievements and its expected benefits</h3>
                            <p>
                                To begin with, the NHS's founding principle—care based on clinical need, not ability to pay—has delivered remarkable equity compared to market systems. Since 1948, the NHS has eliminated financial barriers to primary care, emergency treatment, and specialist services. Life expectancy rose from 66 years (1948) to 81 years (2023), infant mortality fell by 94%, and communicable disease deaths declined by 87%. Universal vaccination programs eradicated polio and measles, while cancer survival rates improved dramatically—breast cancer five-year survival reached 86%, up from 52% in 1970.
                            </p>
                            <p>
                                Moreover, the NHS achieves this with remarkable cost-efficiency. The UK spends 12.4% of GDP on healthcare versus 17.8% in the US, yet achieves lower infant mortality (3.8 per 1,000 versus 5.4), higher life expectancy (81 versus 78.9 years), and universal coverage. Administrative costs consume just 2% of NHS budgets compared to 25% in the US system, where insurance bureaucracy, billing complexity, and profit extraction drain resources. The Commonwealth Fund consistently ranks the NHS first globally on equity and access, validating the universal model's superiority.
                            </p>
                            <h3>II. Explaining why it misses the point</h3>
                            <p>
                                Nevertheless, this narrative of NHS excellence obscures deepening systemic crises. First of all, underfunding has created unsustainable backlogs and workforce attrition. NHS England's waiting list reached 7.6 million in 2023 (13% of the population), with 400,000 waiting over one year for treatment—up from 1,600 pre-pandemic. A&E departments breach the four-hour target 75% of the time, with patients waiting 12+ hours on trolleys. Cancer treatment delays cause 10,000 avoidable deaths annually due to late diagnosis. This reflects austerity cuts: real-terms per-capita spending grew just 1.2% annually 2010-2020 versus 3.7% historically required, creating a £30 billion deficit.
                            </p>
                            <p>
                                However, it is short-sighted to blame funding alone when, in reality, workforce burnout compounds capacity shortages. The NHS has 132,000 vacancies (12% of positions), including 47,000 nurses and 12,000 doctors. Junior doctors' real wages fell 26% since 2008, driving emigration to Australia and Gulf states offering triple salaries. Nurse retention rates dropped to 83%, with 40,000 leaving annually due to workload stress and poor conditions. Social care underfunding worsens bed-blocking: 13,000 patients medically fit for discharge remain hospitalized daily (costing £1.6 billion annually) because community care collapsed—local authority cuts eliminated 500,000 social care places since 2010.
                            </p>
                            <p>
                                Furthermore, health inequalities have widened despite universal access. Life expectancy in Glasgow's poorest neighborhoods is 54 years versus 82 in wealthy London boroughs—a 28-year gap driven by poverty, housing, and employment conditions the NHS cannot address. Infant mortality in Blackpool (6.1 per 1,000) is triple that in Westminster (2.0). COVID-19 deaths were twice as high in the most deprived decile, exposing how social determinants—poor housing, frontline jobs, chronic stress—undermine health regardless of free access to doctors. Racialized minorities face worse outcomes: Black women are four times more likely to die in childbirth than white women, reflecting structural discrimination in care delivery.
                            </p>
                            <p>
                                Additionally, the US system—while inefficient—demonstrates advantages that universal models struggle to replicate. American hospitals lead globally in cancer treatment innovation, clinical trials, and surgical techniques due to competitive funding and research investment ($200 billion annually versus £2 billion in the UK). Wait times for elective procedures are minimal for insured patients—hip replacements average three weeks versus six months in the UK. Private insurance enables consumer choice and provider accountability that monopoly systems lack.
                            </p>
                            <p>
                                Nevertheless, US

                                healthcare remains profoundly unjust. 27.5 million Americans lack insurance, foregoing preventive care until emergencies become crises. Medical debt drives 66% of personal bankruptcies, totaling $195 billion owed. Insulin costs $300+ monthly (versus £9 prescription charge in UK), forcing diabetics to ration life-saving medication. Maternal mortality—23.8 deaths per 100,000 births—is the worst among developed nations, with Black women dying at 2.9 times the rate of white women. Life expectancy fell three consecutive years (2015-2017), driven by opioid overdoses, obesity, and "deaths of despair" concentrated in underinsured communities.
                            </p>
                            <h3>III. Advocating for a more ambitious and systemic solution</h3>
                            <p>
                                Therefore, a real shift is required to grapple with the issue: move from crisis management to preventive infrastructure and hybrid public-private innovation. Not only would comprehensive reform improve health outcomes; it would also reduce long-term costs and enhance system resilience. Concretely, the UK must increase NHS funding to OECD average (11.5% GDP versus current 12.4% but accounting for aging demographics requires 13-14%), with long-term guaranteed budgets (five-year cycles) to enable workforce planning and capital investment. Build 40 new hospitals and 500 diagnostic centers to eliminate backlogs, funded through progressive taxation on wealth (0.5% annual levy on assets over £10 million raises £10 billion).
                            </p>
                            <p>
                                Simultaneously, address workforce crises through comprehensive retention strategies: 15% real-terms pay restoration over three years, capped working hours (48-hour maximum weeks enforced), and pension reform reversing punitive tax treatments that force senior doctors into early retirement. Expand medical school places by 50% (from 7,500 to 11,200 annually), with fast-tracked recognition for international qualifications to fill immediate gaps. Crucially, integrate social care funding—establish universal free social care for over-65s, funded through National Insurance increases (1% levy raises £10 billion), to prevent hospital bed-blocking and enable "aging in place" dignity.
                            </p>
                            <p>
                                On inequality, implement "health in all policies" frameworks: require impact assessments on housing, employment, and transport decisions to prevent health harms. Establish £5 billion Healthy Communities Fund for deprived areas—subsidized healthy food (fruit and vegetable prescription programs), free gym memberships, housing insulation to prevent respiratory illness, and mental health support embedded in schools and workplaces. Address occupational health by mandating paid sick leave from day one (currently requires three days' waiting period, forcing contagious workers to attend), preventing disease transmission and enabling early treatment.
                            </p>
                            <p>
                                For the US, pursue incremental universalization: lower Medicare eligibility to 50 (from 65), auto-enroll children in Medicaid, and establish a public option—government-run insurance competing with private plans. Cap out-of-pocket spending at $2,000 annually (versus current $9,100 average) and regulate pharmaceutical pricing through Medicare negotiation (Inflation Reduction Act's limited provisions should expand to all drugs). Crucially, decouple insurance from employment—portable, subsidized coverage regardless of job status prevents coverage gaps during unemployment and reduces employer control over workers.
                            </p>
                            <p>
                                Structurally, both systems require hybrid models balancing public funding with private innovation. The UK should expand NHS-commissioned private provision for elective surgeries, using spare capacity to clear backlogs while maintaining universal entitlement and price controls. The US should adopt German-style sickness funds—non-profit insurers competing on quality, regulated for universal coverage and community rating (no discrimination by health status). Establish global pharmaceutical pooling—combine UK, EU, and Commonwealth purchasing power to negotiate lower drug prices, reducing US costs by 40%.
                            </p>
                            <p>
                                Fundamentally, invest in prevention and public health: ban junk food advertising to children, implement sugar taxes (UK's soft drink levy reduced child obesity by 8%), mandate food reformulation to reduce salt and trans fats, and subsidize healthy alternatives. Expand mental health services—parity of esteem means 15% of NHS budgets (currently 8%) should fund psychological therapies, school counselors, and crisis intervention to prevent suicide (UK's 16th leading cause of death). Address environmental determinants: clean air zones, active travel infrastructure (cycling lanes, pedestrian zones), and green space provision to reduce cardiovascular and respiratory disease.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                All things considered, neither the NHS's universal model nor America's market system delivers optimal health in their current forms. Ultimately, what is needed is not ideological purity but pragmatic hybridity: universal coverage paired with innovation incentives, public funding combined with private efficiency, and clinical care integrated with social determinants. A real watershed—adequately funded NHS combined with social care, or universal US coverage with regulated competition—would transform healthcare from political battleground to shared prosperity. The current approach in both countries fails rising demand and growing inequality. It is high time to address the issue in its full complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSystemsSampleEssaysPage;
