import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, FileText, ArrowLeft, Scale, BookOpen } from 'lucide-react';

const MediaSampleEssaysPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
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
            <Link to="/formation/anglais/civilisation/media" className="hover:text-foreground transition-colors">
              Media and Social Networks
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Sample Essays</span>
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
                <h2 className="text-xl font-bold text-gray-900">How would you explain the increasing polarization in the USA?</h2>
                <p className="text-sm text-gray-600">Sample Essay - English Civilization</p>
              </div>
            </div>
            <Link to="/formation/anglais/civilisation/media">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
            </Link>
          </div>

          <div className="p-6">
            <div className="prose max-w-none text-gray-800 leading-relaxed">
              <p className="italic">Question: How would you explain the increasing polarization in the USA? In your opinion, can the risk of “greater disunion” be averted?</p>
              <h3>Introduction</h3>
              <p>
                While the US Supreme Court broke off the legal precedent that gave women the constitutional right to an abortion (Roe v Wade, 1973) last year, the country turned out to split even more. Indeed, some red States like Texas forbade termination right away unlike blue ones that kept on fighting for feminist ideas. This example shows how politically polarized American society gradually becomes. Yet, this phenomenon which results in both the proliferation of the extremes and their relentless showdowns, is also to be considered from an economic and cultural perspective in order perhaps to bring it to an end.
              </p>
              <h3>Development I – Federal vs state dynamics</h3>
              <p>
                In fact, the USA faces its growing disunion because the federal government does not unify the States as it used to. Nowadays, not only can the States run their own tax system, but they also get to opt for legislations as regards global issues like the rights to possess a gun. But even though it seems more democratic to let them pick out what they want to authorize, it deepens polarization as Americans aim to live in areas where their opinions are shared. Had the federal government been more powerful in US politics, the States could not be so opposed to each other, and policies would be more moderate as being made in a consensus. Thus, Americans could potentially shrink the risk of greater disunion by getting involved in national debates.
              </p>
              <h3>Development II – Democratic dysfunction</h3>
              <p>
                However frightening this may be, polarization also reflects democracy’s dysfunction. Indeed, if Americans aim at staying united, they will have to dismantle political monopolies, too, as this situation often leads the party in charge of the State to gag its opposition. Admittedly, seeking to silence your opponents helps you win votes but, at the end of the day, political diversity plummets, which brings about polarization. For instance, the Republicans are trying to sap voter franchise by making your identity card compulsory to vote. On top of that, they redraw electoral maps (gerrymandering) in the States they won so as not to lose them in the next polls. Consequently, blocking theses strategies would surely enable American to avert its political disunion.
              </p>
              <h3>Development III – Cultural and economic divides</h3>
              <p>
                Nevertheless, we should not turn a blind eye to the growing cultural polarization that occurs on the other side of the Atlantic. Indeed, although the US based itself on immigration in the 19th century, melting pots are rarer and rarer these days. This is because economic inequalities spiked in a society where the rich (often white people) and the poor (often African American individuals) do not mix. These economic and cultural divisions might get even worse than the political ones given that disparities will soar if nothing changes with upcoming energy and food shortages.
              </p>
              <h3>Conclusion</h3>
              <p>
                Americans ergo can tackle polarization by strengthening their political and economic system. It will not be easy, but reforms will have to be made to unify the current disunited states. More than that, the country must pull itself together to
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSampleEssaysPage;
