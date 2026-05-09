import React from 'react';
import { Flag } from 'lucide-react';
import { EnglishSampleEssayTemplate, EssaySection } from '@/components/formation/anglais/EnglishSampleEssayTemplate';

const sections: EssaySection[] = [
  {
    heading: 'Introduction',
    paragraphs: [
      `Conventional wisdom usually points out that Brexit “took back control,” suggesting that restored sovereignty would unlock agility and prosperity. One may jump to the conclusion that formal independence equals practical capacity because Westminster is no longer bound by EU rules. Obviously, there is more than meets the eye. As far as I am concerned, Brexit delivered legal sovereignty but weakened operational capability. This raises the question of whether smart interdependence can reconcile sovereignty with effectiveness.`,
    ],
  },
  {
    heading: 'I. Recognising the intention and its expected effects',
    paragraphs: [
      `To begin with, the intent was clear: restore parliamentary supremacy, control borders, and re-globalise Britain. The points-based immigration system treats all non-Britons alike and, at first sight, seemed to realign inflows with skills needs. The UK has also chosen selective cooperation—returning to major European research programmes—showing it can partner on its own terms. Diplomatically, London doubled down on the US alliance, joined AUKUS, and announced an Indo-Pacific tilt to project “Global Britain.” In narrative terms, sovereignty looked revitalised, and the state regained room to manoeuvre.`,
    ],
  },
  {
    heading: 'II. Explaining why it misses the point',
    paragraphs: [
      `Nevertheless, this apparent success hides deeper structural issues. First of all, ending EU free movement hollowed out critical labour pipelines. The NHS lost experienced European staff; replacement hiring often clustered in lower bands, with knock-on risks for quality and safety. In higher education, leaving Erasmus ended affordable, reciprocal mobility; EU enrolments fell while fees surged, weakening campus diversity and future ties. Research, unsettled by years of uncertainty before formal re-association, lost momentum and partnerships that are not rebuilt overnight.`,
      `However, it is short-sighted to believe that sovereignty alone restores influence when, in reality, capacity depends on networks. The UK’s bridge role inside Europe has shrunk; data-sharing and defence-industrial access became more complex; even fisheries turned into recurring diplomatic disputes. At home, the referendum process exposed tensions between popular and parliamentary sovereignty, entrenching durable Leaver/Remainer identities and draining trust. Formal autonomy persists, but effective sovereignty is constrained by treaty obligations, market dependencies, and thinner people-to-people links.`,
    ],
  },
  {
    heading: 'III. Advocating for a more ambitious and systemic solution',
    paragraphs: [
      `Therefore, a real shift is required to grapple with the issue: move from symbolic sovereignty to operational competence. Not only would a “smart sovereignty” strategy rebuild capacity; it would also lower polarisation by delivering tangible results. Concretely, the UK should lock in science leadership through deep, multi-year participation in European research frameworks; re-associate with Erasmus+ or fund bilateral mobility corridors; and establish fast-track, mutual-recognition routes for health and research professionals. Sectorally, tighten SPS and data-adequacy cooperation to cut friction for exporters; conclude rolling fisheries and marine-environment MOUs; and create joint UK-EU climate councils on cross-border air, ocean, and biodiversity issues. Domestically, invest in skills pipelines and progression ladders (notably in the NHS), codify clear referendum rules to reconcile popular with parliamentary sovereignty, and sustain civic dialogue to defuse identity fatigue.`,
    ],
  },
  {
    heading: 'Conclusion',
    paragraphs: [
      `All things considered, Brexit changed the constitutional form but exposed capacity gaps in people, knowledge, diplomacy, and governance. Ultimately, what is needed is not a nostalgic return to Brussels nor an insular fortress, but a structural upgrade of Britain’s partnerships and institutions. A real watershed—smart sovereignty anchored in credible cooperation—would turn “control” into capability. The current approach may be well-intentioned, but it falls short. It is high time to address the issue in its full complexity.`,
    ],
  },
];

const BrexitSampleEssaysPage = () => (
  <EnglishSampleEssayTemplate
    themeLabel="Brexit"
    themeSlug="brexit"
    essayTitle="Brexit’s Sovereignty Paradox"
    Icon={Flag}
    sections={sections}
  />
);

export default BrexitSampleEssaysPage;
