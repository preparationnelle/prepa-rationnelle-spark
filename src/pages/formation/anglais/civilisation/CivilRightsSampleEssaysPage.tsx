import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const CivilRightsSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Gender Equality · Sample Essays</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Gender Equality's Unfinished Revolution</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: Gender Equality in the Workplace—Legal Progress, Structural Stagnation</p>
                            <h3>Introduction</h3>
                            <p>
                                Conventional wisdom usually points out that women's rights have advanced steadily in Western democracies, with equal pay legislation, anti-discrimination laws, and boardroom quotas signaling irreversible progress. One may jump to the conclusion that formal legal equality would translate into substantive workplace parity, closing pay gaps and achieving balanced representation in leadership. Obviously, there is more than meets the eye. As far as I am concerned, despite decades of legislation in the US, UK, and Australia, gender inequality persists through structural mechanisms—unpaid care work, occupational segregation, and motherhood penalties—that legal frameworks fail to address. This raises the question of whether rights-based approaches can deliver equality without transforming labor markets and social norms around care.
                            </p>
                            <h3>I. Recognising legal progress and its expected benefits</h3>
                            <p>
                                To begin with, Anglo-American democracies have enacted comprehensive anti-discrimination frameworks. The UK's Equality Act 2010 consolidated nine separate pieces of legislation, prohibiting discrimination based on sex, pregnancy, and maternity across employment, education, and services. The United States broadened Title VII protections through Supreme Court rulings, most notably Bostock v. Clayton County (2020), which extended workplace protections to LGBTQ+ individuals. Australia's Sex Discrimination Act 1984, amended multiple times, now covers sexual harassment, family responsibilities, and gender identity.
                            </p>
                            <p>
                                Moreover, transparency and quota mechanisms appear to drive change. The UK's mandatory gender pay gap reporting (companies over 250 employees) exposed embarrassing disparities—the BBC's 9.3% median gap triggered union action and targeted salary reviews. Norway's 40% boardroom quota, introduced in 2003, increased female board representation from 6% to 44% within five years, with studies showing improved governance and risk management. California's SB 826 mandated similar quotas for publicly traded companies, accelerating female director appointments by 31% between 2018 and 2020.
                            </p>
                            <h3>II. Explaining why it misses the point</h3>
                            <p>
                                Nevertheless, these legal victories mask persistent structural barriers. First of all, pay gaps remain entrenched despite equal pay laws dating back decades (the UK's Equal Pay Act passed in 1970). The UK's current full-time median gender pay gap stands at 14.9%, rising to 40% for women over 50 due to career interruptions. In the US, women earn 82 cents per dollar compared to men, with Black women earning 63 cents and Latinas 55 cents—gaps widening at intersections of race and gender. Australia's gap reached 21.7% in 2023, the worst in a decade, driven by male-dominated industries (mining, construction) paying premium wages while female-concentrated sectors (education, healthcare) face chronic underfunding.
                            </p>
                            <p>
                                However, it is short-sighted to blame discrimination alone when, in reality, the penalty falls on motherhood. US research shows mothers earn 71 cents per dollar compared to childless women (the "motherhood penalty"), while fathers earn 21% more than childless men (the "fatherhood premium"). The UK sees similar patterns: mothers' hourly wages drop 33% after the first child, compounding with each additional child. This reflects part-time work traps—70% of UK part-time workers are women, earning 34% less per hour than full-timers due to occupational downgrading and lack of progression. Australia's superannuation (pension) system exacerbates this: women retire with 47% less savings than men due to career breaks and lower lifetime earnings, creating gendered poverty in old age.
                            </p>
                            <p>
                                Furthermore, occupational segregation persists, concentrating women in lower-paid sectors. In the UK, 82% of care workers and 78% of teaching assistants are women, earning £9-£12 per hour, while male-dominated engineering and tech roles pay £25+ per hour. Horizontal segregation (different sectors) combines with vertical segregation (glass ceilings): women hold only 23% of FTSE 100 CEO positions, 10% of Fortune 500 CEOs, and 18% of ASX 200 board chairs. Boardroom quotas, while symbolic, do not trickle down—executive pipeline remains male-dominated due to informal mentorship networks, "culture fit" biases, and long-hours norms incompatible with primary caregiving.
                            </p>
                            <p>
                                Additionally, unpaid care work remains unequally distributed, undermining labor market participation. UK women perform 74% more unpaid work than men (26 hours weekly versus 15 hours), including childcare, eldercare, and domestic labor—equivalent to £140 billion in unpaid GDP contribution annually. The US shows similar patterns, with women spending twice as long on housework and childcare, constraining career investment and availability for promotion-seeking behaviors (networking, travel, overtime). This "second shift" persists despite dual-earner households becoming the norm, revealing stalled gender revolutions at home.
                            </p>
                            <h3>III. Advocating for a more ambitious and systemic solution</h3>
                            <p>
                                Therefore, a real shift is required to grapple with the issue: move from individual rights enforcement to structural labor market transformation and care redistribution. Not only would comprehensive reform improve women's outcomes; it would also benefit families and economic productivity. Concretely, implement universal, free, high-quality childcare from ages 0-5, modeled on Nordic systems where 90% enrollment enables maternal employment rates above 80%. In the UK, this would replace the current £14,000 annual childcare costs per child (highest in OECD), which force mothers—especially lower-earners—out of work since wages cannot cover fees.
                            </p>
                            <p>
                                Simultaneously, introduce non-transferable parental leave quotas: reserve equal months for each parent (e.g., 6 months each), paid at 90% of salary up to median wage, with "use it or lose it" provisions to prevent transfer to mothers. Iceland's system achieves 90% paternal uptake, normalizing father caregiving and preventing motherhood employment penalties. Crucially, protect against "flexibility stigma" by making flexible work the default—statutory right to request part-time, job-share, or compressed hours from day one, with employer burden to justify refusals based on operational need, not assumptions about commitment.
                            </p>
                            <p>
                                Sectorally, revalue feminized professions through pay restructuring. Establish independent pay review bodies to assess comparable worth—care workers performing emotionally demanding labor with safety responsibilities should earn equivalently to similarly skilled male trades. Fund this through progressive taxation and wealth taxes on top 1%, redistributing from over-rewarded finance and tech sectors toward essential services. In Australia, this would address the aged care crisis where 98% female workforce earns poverty wages despite critical social function.
                            </p>
                            <p>
                                On corporate governance, extend quotas beyond boards to executive committees and senior management, with penalties for non-compliance (Norway fines and delists violators). Mandate transparent promotion criteria and blind recruitment to reduce bias. Regulate working-time norms—cap weekly hours at 40, ban "always-on" email cultures, and require core hours (10am-3pm) to enable school drop-offs and pickups, making intensive face-time cultures unsustainable. Germany's "right to disconnect" laws provide templates.
                            </p>
                            <p>
                                Fundamentally, collectivize care through public investment. Universal eldercare with professional, well-paid staff would relieve the "sandwich generation" burden disproportionately borne by women aged 45-60. Community meal programs, laundry services, and domestic support (like Singapore's subsidized helper schemes) would socialize household labor currently privatized within families. This requires recognizing care as public infrastructure—like roads or broadband—essential for economic functioning and deserving public funding.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                All things considered, legal equality without structural change leaves gender hierarchies intact, shifting from overt discrimination to subtler mechanisms of exclusion. Ultimately, what is needed is not merely enforcing equal treatment in unequal structures, but redesigning work and care around principles of genuine equity. A real watershed—universal childcare, equitable parental leave, revalued care professions, and working-time regulation—would transform labor markets from male breadwinner models to dual-earner/dual-carer realities. The current approach may satisfy legislative checklists, but it fails to deliver substantive equality. It is high time to address the issue in its full complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CivilRightsSampleEssaysPage;
