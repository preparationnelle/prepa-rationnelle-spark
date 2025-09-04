import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const LaborSampleEssaysPage = () => {
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
            <span className="text-foreground font-medium">Labor · Sample Essays</span>
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
                <h2 className="text-xl font-bold text-gray-900">Future of Work</h2>
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
              <p className="italic">Question: What is the future of work? Discuss opportunities and risks in the transformation of labor.</p>

              <h3>Introduction (71 words)</h3>
              <p>
                Conventional wisdom suggests that work is simply evolving as it always has, with technology creating new opportunities as others disappear. At first sight, today’s changes might appear to follow this natural cycle. Yet, the current transformations are deeper, faster, and more disruptive than anything witnessed before. As far as I am concerned, the future of work can only be sustainable if technology, skills development, and wellbeing evolve together.
              </p>

              <h3>I. Recognising major drivers of change</h3>
              <p>
                To begin with, the scale of today’s labor transformation is unprecedented. According to the World Economic Forum, 22% of jobs will undergo structural change by 2030, with 170 million created and 92 million displaced. Artificial intelligence and automation stand at the center of this disruption, potentially impacting 300 million full-time jobs worldwide. However, AI also promises significant productivity gains and could generate more jobs than it destroys.
              </p>
              <p>
                The pandemic has further reshaped work by normalizing hybrid models. In the United States, more than half of remote-capable employees already work in hybrid arrangements, balancing flexibility and collaboration. Meanwhile, the green transition opens new opportunities: renewable energy engineers, sustainability experts, and eco-builders are among the fastest-growing occupations. From this perspective, the future of work seems full of opportunities for both individuals and societies.
              </p>

              <h3>II. Explaining why these opportunities are not enough</h3>
              <p>
                However, this apparent optimism hides deeper risks. AI-driven disruption will not affect everyone equally: advanced economies may benefit from productivity gains, while developing countries risk falling further behind due to limited digital access. Even in Europe, 42% of citizens lack basic digital skills, exposing a growing divide.
              </p>
              <p>
                Politically and socially, workers are vulnerable to instability. Gig economy platforms already employ tens of millions, but many workers face misclassification, low wages, and little protection. Despite new regulations in the EU and US, collective bargaining remains difficult, and algorithmic management reduces transparency.
              </p>
              <p>
                Moreover, cultural and human aspects cannot be ignored. Mental health issues affect nearly 40% of workers, even as investment in wellbeing rises. Without more comprehensive support, workplace burnout could undermine productivity gains. Similarly, diversity and inclusion progress remains fragile: while inclusive companies outperform their peers, some organizations are retreating from DEI commitments under political or economic pressure. In short, without systemic reforms, transformation risks exacerbating inequalities rather than reducing them.
              </p>

              <h3>III. Advocating for a more ambitious and systemic response</h3>
              <p>
                Therefore, I believe the future of work requires coordinated strategies beyond technology adoption. First, proactive skills development is essential: by 2030, nearly 40% of workers’ core skills will change, requiring continuous learning, reskilling, and partnerships between companies and educational institutions. Second, organizations must embrace adaptive workplace models: hybrid work, if managed effectively, can balance productivity, cost efficiency, and employee satisfaction.
              </p>
              <p>
                Third, human-AI collaboration must be prioritized. Instead of focusing only on job losses, societies should highlight the uniquely human skills—creativity, problem-solving, resilience—that machines cannot replace. Fourth, sustainable transition management is imperative: as green jobs expand, workers must be supported through training and social protections. Finally, wellbeing and inclusion should become business imperatives, not optional programs. Companies that integrate mental health, DEI, and environmental responsibility into their strategy will build resilience and legitimacy in the long run.
              </p>

              <h3>Conclusion (65 words)</h3>
              <p>
                All things considered, the future of work represents both a risk and an opportunity. If left unmanaged, polarization, inequality, and insecurity could dominate the labor market. Yet, with forward-looking reforms in skills, technology, sustainability, and wellbeing, societies can turn disruption into progress. Ultimately, the challenge is not merely to adapt to change but to steer it toward inclusive and sustainable prosperity.
              </p>

              <p className="text-right text-sm text-gray-500">Word count: 503</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaborSampleEssaysPage;

