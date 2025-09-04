import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const BrexitSampleEssaysPage = () => {
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
            <span className="text-foreground font-medium">Brexit · Sample Essays</span>
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
                <h2 className="text-xl font-bold text-gray-900">Brexit’s Sovereignty Paradox</h2>
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
              <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">THEME: Brexit’s Sovereignty Paradox — Regaining Control, Losing Capacity</p>
              <h3>Introduction</h3>
              <p>
                Conventional wisdom usually points out that Brexit “took back control,” suggesting that restored sovereignty would unlock agility and prosperity. One may jump to the conclusion that formal independence equals practical capacity because Westminster is no longer bound by EU rules. Obviously, there is more than meets the eye. As far as I am concerned, Brexit delivered legal sovereignty but weakened operational capability. This raises the question of whether smart interdependence can reconcile sovereignty with effectiveness.
              </p>
              <h3>I. Recognising the intention and its expected effects</h3>
              <p>
                To begin with, the intent was clear: restore parliamentary supremacy, control borders, and re-globalise Britain. The points-based immigration system treats all non-Britons alike and, at first sight, seemed to realign inflows with skills needs. The UK has also chosen selective cooperation—returning to major European research programmes—showing it can partner on its own terms. Diplomatically, London doubled down on the US alliance, joined AUKUS, and announced an Indo-Pacific tilt to project “Global Britain.” In narrative terms, sovereignty looked revitalised, and the state regained room to manoeuvre.
              </p>
              <h3>II. Explaining why it misses the point</h3>
              <p>
                Nevertheless, this apparent success hides deeper structural issues. First of all, ending EU free movement hollowed out critical labour pipelines. The NHS lost experienced European staff; replacement hiring often clustered in lower bands, with knock-on risks for quality and safety. In higher education, leaving Erasmus ended affordable, reciprocal mobility; EU enrolments fell while fees surged, weakening campus diversity and future ties. Research, unsettled by years of uncertainty before formal re-association, lost momentum and partnerships that are not rebuilt overnight.
              </p>
              <p>
                However, it is short-sighted to believe that sovereignty alone restores influence when, in reality, capacity depends on networks. The UK’s bridge role inside Europe has shrunk; data-sharing and defence-industrial access became more complex; even fisheries turned into recurring diplomatic disputes. At home, the referendum process exposed tensions between popular and parliamentary sovereignty, entrenching durable Leaver/Remainer identities and draining trust. Formal autonomy persists, but effective sovereignty is constrained by treaty obligations, market dependencies, and thinner people-to-people links.
              </p>
              <h3>III. Advocating for a more ambitious and systemic solution</h3>
              <p>
                Therefore, a real shift is required to grapple with the issue: move from symbolic sovereignty to operational competence. Not only would a “smart sovereignty” strategy rebuild capacity; it would also lower polarisation by delivering tangible results. Concretely, the UK should lock in science leadership through deep, multi-year participation in European research frameworks; re-associate with Erasmus+ or fund bilateral mobility corridors; and establish fast-track, mutual-recognition routes for health and research professionals. Sectorally, tighten SPS and data-adequacy cooperation to cut friction for exporters; conclude rolling fisheries and marine-environment MOUs; and create joint UK-EU climate councils on cross-border air, ocean, and biodiversity issues. Domestically, invest in skills pipelines and progression ladders (notably in the NHS), codify clear referendum rules to reconcile popular with parliamentary sovereignty, and sustain civic dialogue to defuse identity fatigue.
              </p>
              <h3>Conclusion</h3>
              <p>
                All things considered, Brexit changed the constitutional form but exposed capacity gaps in people, knowledge, diplomacy, and governance. Ultimately, what is needed is not a nostalgic return to Brussels nor an insular fortress, but a structural upgrade of Britain’s partnerships and institutions. A real watershed—smart sovereignty anchored in credible cooperation—would turn “control” into capability. The current approach may be well-intentioned, but it falls short. It is high time to address the issue in its full complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrexitSampleEssaysPage;

