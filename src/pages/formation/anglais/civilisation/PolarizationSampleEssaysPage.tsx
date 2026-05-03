import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const PolarizationSampleEssaysPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
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
            <span className="text-foreground font-medium">Polarization · Sample Essays</span>
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
                <h2 className="text-xl font-bold text-gray-900">US Political Polarization</h2>
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
              <p className="italic">Question: How would you explain the increasing polarization in the USA? In your opinion, can the risk of “greater disunion” be averted?</p>

              <h3>Introduction (74 words)</h3>
              <p>
                Conventional wisdom usually points out that the United States is the “land of democracy,” suggesting that diversity of opinion strengthens rather than weakens the nation. It is often assumed that polarization is simply a reflection of free debate. Yet, there is more than meets the eye: polarization has reached unprecedented levels, threatening national unity. As far as I am concerned, the risk of disunion can be averted only if both political and economic reforms are undertaken.
              </p>

              <h3>I. Recognising the reality of growing polarization</h3>
              <p>
                To begin with, polarization has clearly intensified over the past years. The Supreme Court’s decision to overturn Roe v. Wade in 2022 still fuels sharp divisions between conservative States, which banned abortion outright, and progressive ones, which enshrined its protection. Similarly, debates around gun rights, LGBTQ+ protections, and even Covid-era health policies have turned States into ideological strongholds. Migration within the country increasingly reflects this divide, as Americans seek communities that share their values. At first sight, such polarization seems the inevitable consequence of federalism.
              </p>

              <h3>II. Explaining why this trend is dangerous</h3>
              <p>
                However, this apparent vitality of democracy actually hides a structural dysfunction. Politically, polarization deepens because parties manipulate the system. Gerrymandering, voter ID restrictions, and efforts to contest the 2024 presidential election results have eroded trust. Many Republican-led States have tightened electoral rules, while Democrats have entrenched their positions in urban strongholds. This zero-sum game stifles pluralism and leaves little room for compromise.
              </p>
              <p>
                Culturally and economically, polarization is even more alarming. Income inequality has widened since the pandemic, and inflation in 2022–23 worsened the gap between wealthy elites and precarious workers. This divide often overlaps with racial and geographic lines, leaving minorities and rural areas feeling excluded. Moreover, immigration debates, once central to America’s identity, now fuel resentment. Instead of being a melting pot, the US risks becoming a patchwork of hostile communities.
              </p>

              <h3>III. Advocating for systemic reforms to avert disunion</h3>
              <p>
                Therefore, I believe a real shift is required. Strengthening federal guarantees for voting rights would prevent States from manipulating the democratic process. Likewise, reforming campaign finance and reducing partisan gerrymandering would help restore trust. On the economic side, investing in education, healthcare, and clean energy is essential to reduce inequalities and offer a common ground for unity. Beyond institutions, fostering civic dialogue is also crucial: social media regulation and civic education could limit echo chambers and create spaces for real debate.
              </p>

              <h3>Conclusion (68 words)</h3>
              <p>
                All things considered, polarization in the US is no longer a simple political rivalry; it has become a structural threat to national cohesion. Symbols like the flag or the presidency can no longer guarantee unity. Ultimately, only deep reforms in politics, the economy, and culture can avert greater disunion. The United States must choose whether to remain a patchwork of divided States or to reinvent itself as truly united again.
              </p>

              <p className="text-right text-sm text-gray-500">Word count: 542</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarizationSampleEssaysPage;

