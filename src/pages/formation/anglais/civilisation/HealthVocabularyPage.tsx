import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const HealthVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Concepts généraux de santé / General Health Concepts
    { id: 1, french: "Santé", english: "Health", category: "Concepts généraux de santé" },
    { id: 2, french: "Maladie", english: "Disease / Illness", category: "Concepts généraux de santé" },
    { id: 3, french: "Infection", english: "Infection", category: "Concepts généraux de santé" },
    { id: 4, french: "Épidémie", english: "Epidemic", category: "Concepts généraux de santé" },
    { id: 5, french: "Pandémie", english: "Pandemic", category: "Concepts généraux de santé" },
    { id: 6, french: "Virus", english: "Virus", category: "Concepts généraux de santé" },
    { id: 7, french: "Bactérie", english: "Bacterium", category: "Concepts généraux de santé" },
    { id: 8, french: "Symptômes", english: "Symptoms", category: "Concepts généraux de santé" },
    { id: 9, french: "Diagnostic", english: "Diagnosis", category: "Concepts généraux de santé" },
    { id: 10, french: "Traitement", english: "Treatment", category: "Concepts généraux de santé" },

    // 2. Médecine et soins / Medicine and Care
    { id: 11, french: "Médecine", english: "Medicine", category: "Médecine et soins" },
    { id: 12, french: "Médecin généraliste", english: "General practitioner (GP)", category: "Médecine et soins" },
    { id: 13, french: "Spécialiste", english: "Specialist", category: "Médecine et soins" },
    { id: 14, french: "Infirmier / infirmière", english: "Nurse", category: "Médecine et soins" },
    { id: 15, french: "Chirurgien", english: "Surgeon", category: "Médecine et soins" },
    { id: 16, french: "Pharmacien", english: "Pharmacist", category: "Médecine et soins" },
    { id: 17, french: "Consultation", english: "Consultation", category: "Médecine et soins" },
    { id: 18, french: "Ordonnance", english: "Prescription", category: "Médecine et soins" },
    { id: 19, french: "Médicaments", english: "Medicines / Drugs", category: "Médecine et soins" },
    { id: 20, french: "Vaccin", english: "Vaccine", category: "Médecine et soins" },

    // 3. Hôpitaux et infrastructures / Hospitals and Infrastructure
    { id: 21, french: "Hôpital", english: "Hospital", category: "Hôpitaux et infrastructures" },
    { id: 22, french: "Clinique", english: "Clinic", category: "Hôpitaux et infrastructures" },
    { id: 23, french: "Urgences", english: "Emergency room (ER)", category: "Hôpitaux et infrastructures" },
    { id: 24, french: "Salle d'opération", english: "Operating room", category: "Hôpitaux et infrastructures" },
    { id: 25, french: "Soins intensifs", english: "Intensive care unit (ICU)", category: "Hôpitaux et infrastructures" },
    { id: 26, french: "Lit d'hôpital", english: "Hospital bed", category: "Hôpitaux et infrastructures" },
    { id: 27, french: "Service public de santé", english: "Public health service", category: "Hôpitaux et infrastructures" },
    { id: 28, french: "Infrastructure", english: "Infrastructure", category: "Hôpitaux et infrastructures" },
    { id: 29, french: "Équipement médical", english: "Medical equipment", category: "Hôpitaux et infrastructures" },
    { id: 30, french: "Technologie médicale", english: "Medical technology", category: "Hôpitaux et infrastructures" },

    // 4. Systèmes de santé / Healthcare Systems
    { id: 31, french: "Système de santé", english: "Healthcare system", category: "Systèmes de santé" },
    { id: 32, french: "NHS (Service National de Santé)", english: "NHS (National Health Service)", category: "Systèmes de santé" },
    { id: 33, french: "Assurance maladie", english: "Health insurance", category: "Systèmes de santé" },
    { id: 34, french: "Couverture universelle", english: "Universal coverage", category: "Systèmes de santé" },
    { id: 35, french: "Système privé", english: "Private system", category: "Systèmes de santé" },
    { id: 36, french: "Système public", english: "Public system", category: "Systèmes de santé" },
    { id: 37, french: "Medicare", english: "Medicare", category: "Systèmes de santé" },
    { id: 38, french: "Medicaid", english: "Medicaid", category: "Systèmes de santé" },
    { id: 39, french: "Obamacare (ACA)", english: "Obamacare (Affordable Care Act)", category: "Systèmes de santé" },
    { id: 40, french: "Payeur unique", english: "Single-payer", category: "Systèmes de santé" },

    // 5. Politiques de santé / Health Policy
    { id: 41, french: "Politique de santé", english: "Health policy", category: "Politiques de santé" },
    { id: 42, french: "Réforme de la santé", english: "Healthcare reform", category: "Politiques de santé" },
    { id: 43, french: "Financement de la santé", english: "Healthcare funding", category: "Politiques de santé" },
    { id: 44, french: "Budget santé", english: "Health budget", category: "Politiques de santé" },
    { id: 45, french: "Dépenses de santé", english: "Healthcare spending", category: "Politiques de santé" },
    { id: 46, french: "Coût des soins", english: "Cost of care", category: "Politiques de santé" },
    { id: 47, french: "Prix des médicaments", english: "Drug prices", category: "Politiques de santé" },
    { id: 48, french: "Négociation des prix", english: "Price negotiation", category: "Politiques de santé" },
    { id: 49, french: "Réglementation", english: "Regulation", category: "Politiques de santé" },
    { id: 50, french: "Loi sur la réduction de l'inflation", english: "Inflation Reduction Act", category: "Politiques de santé" },

    // 6. Crises de santé publique / Public Health Crises
    { id: 51, french: "Crise de santé publique", english: "Public health crisis", category: "Crises de santé publique" },
    { id: 52, french: "Épidémie d'opioïdes", english: "Opioid epidemic", category: "Crises de santé publique" },
    { id: 53, french: "COVID-19", english: "COVID-19", category: "Crises de santé publique" },
    { id: 54, french: "Héritage de la pandémie", english: "Pandemic legacy", category: "Crises de santé publique" },
    { id: 55, french: "Préparation aux pandémies", english: "Pandemic preparedness", category: "Crises de santé publique" },
    { id: 56, french: "Équité vaccinale", english: "Vaccine equity", category: "Crises de santé publique" },
    { id: 57, french: "Surdose", english: "Overdose", category: "Crises de santé publique" },
    { id: 58, french: "Addiction", english: "Addiction", category: "Crises de santé publique" },
    { id: 59, french: "Dépendance", english: "Dependency", category: "Crises de santé publique" },
    { id: 60, french: "Gestion de crise", english: "Crisis management", category: "Crises de santé publique" },

    // 7. Santé mentale / Mental Health
    { id: 61, french: "Santé mentale", english: "Mental health", category: "Santé mentale" },
    { id: 62, french: "Crise de santé mentale", english: "Mental health crisis", category: "Santé mentale" },
    { id: 63, french: "Santé mentale des jeunes", english: "Youth mental health", category: "Santé mentale" },
    { id: 64, french: "Anxiété", english: "Anxiety", category: "Santé mentale" },
    { id: 65, french: "Dépression", english: "Depression", category: "Santé mentale" },
    { id: 66, french: "Stigmate", english: "Stigma", category: "Santé mentale" },
    { id: 67, french: "Counseling", english: "Counseling", category: "Santé mentale" },
    { id: 68, french: "Thérapie", english: "Therapy", category: "Santé mentale" },
    { id: 69, french: "Psychiatrie", english: "Psychiatry", category: "Santé mentale" },
    { id: 70, french: "Impact des réseaux sociaux", english: "Social media impact", category: "Santé mentale" },

    // 8. Inégalités de santé / Health Inequalities
    { id: 71, french: "Inégalités de santé", english: "Health inequalities", category: "Inégalités de santé" },
    { id: 72, french: "Disparités de santé", english: "Health disparities", category: "Inégalités de santé" },
    { id: 73, french: "Accès aux soins", english: "Healthcare access", category: "Inégalités de santé" },
    { id: 74, french: "Barrières à l'accès", english: "Access barriers", category: "Inégalités de santé" },
    { id: 75, french: "Déserts médicaux", english: "Medical deserts", category: "Inégalités de santé" },
    { id: 76, french: "Tourisme médical", english: "Medical tourism", category: "Inégalités de santé" },
    { id: 77, french: "Justice sanitaire", english: "Health justice", category: "Inégalités de santé" },
    { id: 78, french: "Déterminants sociaux", english: "Social determinants", category: "Inégalités de santé" },
    { id: 79, french: "Mortalité maternelle", english: "Maternal mortality", category: "Inégalités de santé" },
    { id: 80, french: "Espérance de vie", english: "Life expectancy", category: "Inégalités de santé" },

    // 9. Personnel de santé / Healthcare Workforce
    { id: 81, french: "Personnel de santé", english: "Healthcare workforce", category: "Personnel de santé" },
    { id: 82, french: "Pénurie de personnel", english: "Workforce shortage", category: "Personnel de santé" },
    { id: 83, french: "Épuisement professionnel", english: "Physician burnout", category: "Personnel de santé" },
    { id: 84, french: "Restructuration du personnel", english: "Workforce restructuring", category: "Personnel de santé" },
    { id: 85, french: "Formation médicale", english: "Medical training", category: "Personnel de santé" },
    { id: 86, french: "Spécialisation", english: "Specialization", category: "Personnel de santé" },
    { id: 87, french: "Médecine générale", english: "General practice", category: "Personnel de santé" },
    { id: 88, french: "Rétention du personnel", english: "Staff retention", category: "Personnel de santé" },
    { id: 89, french: "Recrutement", english: "Recruitment", category: "Personnel de santé" },
    { id: 90, french: "Conditions de travail", english: "Working conditions", category: "Personnel de santé" },

    // 10. Innovation et technologie / Innovation and Technology
    { id: 91, french: "Innovation en santé", english: "Healthcare innovation", category: "Innovation et technologie" },
    { id: 92, french: "Télémédecine", english: "Telemedicine", category: "Innovation et technologie" },
    { id: 93, french: "Télésanté", english: "Telehealth", category: "Innovation et technologie" },
    { id: 94, french: "Santé numérique", english: "Digital health", category: "Innovation et technologie" },
    { id: 95, french: "Intelligence artificielle médicale", english: "Medical AI", category: "Innovation et technologie" },
    { id: 96, french: "Dossiers médicaux électroniques", english: "Electronic health records", category: "Innovation et technologie" },
    { id: 97, french: "Médecine personnalisée", english: "Personalized medicine", category: "Innovation et technologie" },
    { id: 98, french: "Biotechnologie", english: "Biotechnology", category: "Innovation et technologie" },
    { id: 99, french: "Recherche médicale", english: "Medical research", category: "Innovation et technologie" },
    { id: 100, french: "Essais cliniques", english: "Clinical trials", category: "Innovation et technologie" },

    // 11. Outcomes et performance / Outcomes and Performance
    { id: 101, french: "Résultats de santé", english: "Health outcomes", category: "Outcomes et performance" },
    { id: 102, french: "Indicateurs de performance", english: "Performance indicators", category: "Outcomes et performance" },
    { id: 103, french: "Qualité des soins", english: "Quality of care", category: "Outcomes et performance" },
    { id: 104, french: "Sécurité des patients", english: "Patient safety", category: "Outcomes et performance" },
    { id: 105, french: "Satisfaction des patients", english: "Patient satisfaction", category: "Outcomes et performance" },
    { id: 106, french: "Temps d'attente", english: "Waiting times", category: "Outcomes et performance" },
    { id: 107, french: "Listes d'attente", english: "Waiting lists", category: "Outcomes et performance" },
    { id: 108, french: "Efficacité", english: "Efficiency", category: "Outcomes et performance" },
    { id: 109, french: "Efficience", english: "Effectiveness", category: "Outcomes et performance" },
    { id: 110, french: "Rapport coût-efficacité", english: "Cost-effectiveness", category: "Outcomes et performance" },

    // 12. Défis futurs / Future Challenges
    { id: 111, french: "Vieillissement de la population", english: "Population aging", category: "Défis futurs" },
    { id: 112, french: "Maladies chroniques", english: "Chronic diseases", category: "Défis futurs" },
    { id: 113, french: "Prévention", english: "Prevention", category: "Défis futurs" },
    { id: 114, french: "Promotion de la santé", english: "Health promotion", category: "Défis futurs" },
    { id: 115, french: "Médecine préventive", english: "Preventive medicine", category: "Défis futurs" },
    { id: 116, french: "Santé publique", english: "Public health", category: "Défis futurs" },
    { id: 117, french: "Durabilité", english: "Sustainability", category: "Défis futurs" },
    { id: 118, french: "Résilience du système", english: "System resilience", category: "Défis futurs" },
    { id: 119, french: "Transformation numérique", english: "Digital transformation", category: "Défis futurs" },
    { id: 120, french: "Intégration des soins", english: "Care integration", category: "Défis futurs" }
  ];

  const mappedData = vocabularyData.map(({ category, french, english }) => ({ 
    category, 
    front: french, 
    back: english 
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation Anglais ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/anglais/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Anglaise
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Systèmes de Santé US et UK</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mappedData}
          title="Vocabulaire Systèmes de Santé US et UK (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default HealthVocabularyPage;
