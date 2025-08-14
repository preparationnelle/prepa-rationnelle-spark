import { ComponentType, lazy } from 'react';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccesRestreintPage = lazy(() => import('../pages/AccesRestreintPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const GeneratorPage = lazy(() => import('../pages/GeneratorPage'));
const StageAccompagnementPage = lazy(() => import('../pages/StageAccompagnementPage'));
const PreRentreePage = lazy(() => import('../pages/offres/PreRentreePage'));
const PythonArticlePage = lazy(() => import('../pages/formation/Python/PythonArticlePage'));
const FormationPage = lazy(() => import('../pages/formation/Python/FormationPage'));
const FormationsOverviewPage = lazy(() => import('../pages/FormationsOverviewPage'));
const PourquoiPythonPrepaECGPage = lazy(() => import('../pages/formation/Python/PourquoiPythonPrepaECGPage'));
const PythonReferencePage = lazy(() => import('../pages/formation/Python/PythonReferencePage'));
const PythonFlashcardsPage = lazy(() => import('../pages/formation/Python/PythonFlashcardsPage'));
const PythonExercicesPage = lazy(() => import('../pages/formation/Python/PythonExercicesPage'));
const PythonQuizPage = lazy(() => import('../pages/formation/Python/PythonQuizPage'));
const FormationAnglaisPage = lazy(() => import('../pages/FormationAnglaisPage'));
const FormationAllemandPage = lazy(() => import('../pages/FormationAllemandPage'));
const DeclinaisonsPage = lazy(() => import('../pages/formation/allemand/DeclinaisonsPage'));
const RelativePage = lazy(() => import('../pages/formation/allemand/RelativePage'));
const PassifPage = lazy(() => import('../pages/formation/allemand/PassifPage'));
const StructurePage = lazy(() => import('../pages/formation/allemand/StructurePage'));
const RecurrentsPage = lazy(() => import('../pages/formation/allemand/RecurrentsPage'));
const VerbIrregulierPage = lazy(() => import('../pages/formation/allemand/VerbIrregulierPage'));
const FormationGeopolitiquePage = lazy(() => import('../pages/FormationGeopolitiquePage'));
const FormationCultureGeneralePage = lazy(() => import('../pages/FormationCultureGeneralePage.tsx'));
const NosOffresPage = lazy(() => import('../pages/NosOffresPage'));
const AproposPage = lazy(() => import('../pages/AproposPage'));
const CoachingPage = lazy(() => import('../pages/CoachingPage'));
const PartnersPage = lazy(() => import('../pages/PartnersPage'));
const FormationOverviewPage = lazy(() => import('../pages/FormationOverviewPage'));
const ArticlesPage = lazy(() => import('../pages/ArticlesPage'));
const AvisPage = lazy(() => import('../pages/AvisPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Formation pages
const PythonFundamentalsPage = lazy(() => import('../pages/formation/Python/PythonFundamentalsPage'));
const PythonMatricesPage = lazy(() => import('../pages/formation/Python/PythonMatricesPage'));
const PythonAnalysePage = lazy(() => import('../pages/formation/Python/PythonAnalysePage'));
const PythonProbabilitesPage = lazy(() => import('../pages/formation/Python/PythonProbabilitesPage'));
const PythonFondamentauxExercicesPage = lazy(() => import('../pages/formation/Python/PythonFondamentauxExercicesPage'));
const PythonMatricesExercicesPage = lazy(() => import('../pages/formation/Python/PythonMatricesExercicesPage'));
const PythonAnalyseExercicesPage = lazy(() => import('../pages/formation/Python/PythonAnalyseExercicesPage'));
const PythonProbabilitesExercicesPage = lazy(() => import('../pages/formation/Python/PythonProbabilitesExercicesPage'));
const MathsApprofondiesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesPage'));
const MathsMethodologiePage = lazy(() => import('../pages/formation/math/MathsMethodologiePage'));
const MathsChoixOptionPage = lazy(() => import('../pages/formation/math/MathsChoixOptionPage'));
const MathsLogiquePage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-LogiqueEtRaisonnementFondamentaux-CoursPage'));
const PremiereVersDeuxiemePage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/index'));
  const Module1ApplicationsLineairesExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module1-ApplicationsLineaires-ExercicesPage'));
  const Module2VecteurAleatoireExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module2-VecteurAleatoire-ExercicesPage'));
  const Module3IntegraleImpropreExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module3-IntegraleImpropre-ExercicesPage'));
  const Module4ComplementProbabilitesExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module4-ComplementProbabilites-ExercicesPage'));
  const Module5VariableAleatoireExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module5-VariableAleatoire-ExercicesPage'));

// Math chapter pages - Semester 1
const MathsEnsemblesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EnsemblesEtApplications-CoursPage'));
const MathsEntiersPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-SommesProduitsEtCoefficientsBinomiaux-CoursPage'));
const MathsSuitesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-SuitesNumeriques-CoursPage'));
const MathsFonctionsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-CoursPage'));
const MathsDerivationPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-CoursPage'));
const MathsIntegrationPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-IntegrationSurUnSegment-CoursPage'));
const MathsPolynomesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-Polynomes-CoursPage'));
const MathsEspacesVectorielsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-CoursPage'));
const MathsProbabilitesFiniesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-CoursPage'));
// Generic Maths approfondies quiz dispatcher
const MathsApprofondiesQuizPage = lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesQuizPage'));

// Math chapter pages - Semester 2
const MathsEspacesVectorielsComplementsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-ApplicationsLineairesEtStructuresVectorielles-CoursPage'));
const MathsComparaisonsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-Comparaison-NegligeabiliteEquivalence-CoursPage'));
const MathsSeriesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-SeriesNumeriques-CoursPage'));
const MathsDeveloppementsLimitesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre14-DeveloppementsLimitesEtTaylor-CoursPage'));
const MathsIntegrationIntervallePage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre15-IntegralesImpropresEtCriteres-CoursPage'));
const MathsProbabilitesUniversPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre16-EspacesProbabilisesEtConditionnement-CoursPage'));
const MathsVariablesAleatoiresPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre17-VariablesAleatoiresDiscretes-Lois-CoursPage'));
const MathsInegalitesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre18-Convergences-Et-TheoremesLimites-CoursPage'));
// Math exercise pages - New structure
const Chapitre1LogiqueExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-LogiqueEtRaisonnementFondamentaux-ExercicesPage'));
const Chapitre2EnsemblesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EnsemblesEtApplications-ExercicesPage'));
const Chapitre3SommesProduitsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-SommesProduitsEtCoefficientsBinomiaux-ExercicesPage'));
const Chapitre4SuitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-SuitesNumeriques-ExercicesPage'));
const Chapitre5FonctionsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-ExercicesPage'));
const Chapitre6DerivationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-ExercicesPage'));
const Chapitre7IntegrationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-IntegrationSurUnSegment-ExercicesPage'));
const Chapitre8PolynomesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-Polynomes-ExercicesPage'));
const Chapitre9MatricesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-ExercicesPage'));
const Chapitre10ProbabilitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-ExercicesPage'));
const Chapitre11ApplicationsLineairesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-ApplicationsLineairesEtStructuresVectorielles-ExercicesPage'));
const Chapitre12ComparaisonExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-Comparaison-NegligeabiliteEquivalence-ExercicesPage'));
const Chapitre13SeriesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-SeriesNumeriques-ExercicesPage'));
const Chapitre14DeveloppementsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre14-DeveloppementsLimitesEtTaylor-ExercicesPage'));
const Chapitre15IntegralesImpropresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre15-IntegralesImpropresEtCriteres-ExercicesPage'));
const Chapitre16EspacesProbabilisesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre16-EspacesProbabilisesEtConditionnement-ExercicesPage'));
const Chapitre17VariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre17-VariablesAleatoiresDiscretes-Lois-ExercicesPage'));
const Chapitre18ConvergencesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre18-Convergences-Et-TheoremesLimites-ExercicesPage'));

// Offres pages
const CoachingPythonPage = lazy(() => import('../pages/offres/CoachingPythonPage'));
const CoachingMathsPage = lazy(() => import('../pages/offres/CoachingMathsPage'));
const OrganisationEtePage = lazy(() => import('../pages/offres/OrganisationEtePage'));
const PreparationCubePage = lazy(() => import('../pages/offres/PreparationCubePage'));

// Methodologie pages
const MethodEntretiensPersonnalitePage = lazy(() => import('../pages/methodologie/MethodEntretiensPersonnalitePage'));
const StorytellingMethodePage = lazy(() => import('../pages/StorytellingMethodePage'));

// Articles pages
const MathsEteControlePage = lazy(() => import('../pages/articles/MathsEteControlePage'));
const AttentesConcoursPage = lazy(() => import('../pages/articles/AttentesConcoursPage'));
const CollesDsPage = lazy(() => import('../pages/articles/CollesDsPage'));
const CarnetErreursPage = lazy(() => import('../pages/articles/CarnetErreursPage'));
const RoutineMathsBetonPage = lazy(() => import('../pages/articles/RoutineMathsBetonPage'));
const Planning360Page = lazy(() => import('../pages/articles/Planning360Page'));
const PlanAntiDecouragementPage = lazy(() => import('../pages/articles/PlanAntiDecouragementPage'));
const ParticipationActivePage = lazy(() => import('../pages/articles/ParticipationActivePage'));
const CoursMathsMaitrisePage = lazy(() => import('../pages/articles/CoursMathsMaitrisePage'));
const ExosClassiquesPage = lazy(() => import('../pages/articles/ExosClassiquesPage'));
const AnnalesStrategiePage = lazy(() => import('../pages/articles/AnnalesStrategiePage'));
const EntretienInverseGEMPage = lazy(() => import('../pages/EntretienInverseGEMPage'));
const CVProjectifPage = lazy(() => import('../pages/CVProjectifPage'));

// School pages
const ESCPPage = lazy(() => import('../pages/ESCPPage'));
const ESSECPage = lazy(() => import('../pages/ESSECPage'));
const EDHECPage = lazy(() => import('../pages/EDHECPage'));
const EMLyonPage = lazy(() => import('../pages/EMLyonPage'));
const AudenciaPage = lazy(() => import('../pages/AudenciaPage'));
const GEMPage = lazy(() => import('../pages/GEMPage'));
const KEDGEPage = lazy(() => import('../pages/KEDGEPage'));
const NEOMAPage = lazy(() => import('../pages/NEOMAPage'));
const SKEMAPage = lazy(() => import('../pages/SKEMAPage'));

// Generator pages
const FlashcardsGeneratorPage = lazy(() => import('../pages/generator/FlashcardsGeneratorPage'));
const AnswerGeneratorPage = lazy(() => import('../pages/generator/AnswerGeneratorPage'));
const CaseStudyGeneratorPage = lazy(() => import('../pages/generator/CaseStudyGeneratorPage'));
const EDHECGeneratorPage = lazy(() => import('../pages/generator/EDHECGeneratorPage'));
const EMLyonGeneratorPage = lazy(() => import('../pages/generator/EMLyonGeneratorPage'));
const GeopoliticsGeneratorPage = lazy(() => import('../pages/generator/GeopoliticsGeneratorPage'));
const GeopoliticsUnifiedGeneratorPage = lazy(() => import('../pages/generator/GeopoliticsUnifiedGeneratorPage'));
const LanguagesGeneratorPage = lazy(() => import('../pages/generator/LanguagesGeneratorPage'));
const PrepaChatbotGeneratorPage = lazy(() => import('../pages/generator/PrepaChatbotGeneratorPage'));

const ThemeGrammarGeneratorPage = lazy(() => import('../pages/generator/ThemeGrammarGeneratorPage'));
const UnifiedLanguagesGeneratorPage = lazy(() => import('../pages/generator/UnifiedLanguagesGeneratorPage'));
const UnifiedOralGeneratorPage = lazy(() => import('../pages/generator/UnifiedOralGeneratorPage'));

// Teacher pages
const TeacherDashboardPage = lazy(() => import('../pages/teacher/TeacherDashboardPage'));
// User dashboard
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const TeacherCoursesPage = lazy(() => import('../pages/teacher/TeacherCoursesPage'));
const TeacherCourseDetailPage = lazy(() => import('../pages/teacher/TeacherCourseDetailPage'));
const TeacherCourseStudentsPage = lazy(() => import('../pages/teacher/TeacherCourseStudentsPage'));
const TeacherCourseGradesPage = lazy(() => import('../pages/teacher/TeacherCourseGradesPage'));
const TeacherCourseAssignmentPage = lazy(() => import('../pages/teacher/TeacherCourseAssignmentPage'));

export interface RouteConfig {
  path: string;
  component: ComponentType<any>;
  title?: string;
  description?: string;
  protected?: boolean;
  exact?: boolean;
}

// Routes principales pour les formations mathématiques
export const routes: RouteConfig[] = [
  // Main pages
  { path: '/', component: HomePage, title: 'Accueil' },
  { path: '/login', component: LoginPage, title: 'Connexion' },
  { path: '/acces-restreint', component: AccesRestreintPage, title: 'Accès restreint' },
  { path: '/register', component: RegisterPage, title: 'Inscription' },
  { path: '/contact', component: ContactPage, title: 'Contact' },
  { path: '/generator', component: GeneratorPage, title: 'Générateurs IA' },
  { path: '/stage-accompagnement', component: StageAccompagnementPage, title: 'Stage & Accompagnement' },
  { path: '/offres/pre-rentree', component: PreRentreePage, title: 'Stage de Pré-entrée' },
  { path: '/python-article', component: PythonArticlePage, title: 'Article Python' },
  { path: '/formation', component: FormationPage, title: 'Formations' },
  { path: '/formations', component: FormationsOverviewPage, title: 'Toutes nos formations' },
  { path: '/pourquoi-python-prepa-ecg', component: PourquoiPythonPrepaECGPage, title: 'Pourquoi Python en Prépa ECG' },
  { path: '/python-reference', component: PythonReferencePage, title: 'Référence Python' },
  { path: '/python-flashcards', component: PythonFlashcardsPage, title: 'Flashcards Python' },

  { path: '/formation/exercices', component: PythonExercicesPage, title: 'Exercices Python' },
  { path: '/nos-offres', component: NosOffresPage, title: 'Nos Offres' },
  { path: '/apropos', component: AproposPage, title: 'À propos' },
  { path: '/coaching', component: CoachingPage, title: 'Coaching individuel' },
  { path: '/partners', component: PartnersPage, title: 'Partenaires' },
  { path: '/methodes/personnalite', component: MethodEntretiensPersonnalitePage, title: 'Méthodes Personnalité' },
  { path: '/articles', component: ArticlesPage, title: 'Conseils & Articles' },
  { path: '/avis', component: AvisPage, title: 'Avis Superprof' },
  { path: '/methodologie/storytelling', component: StorytellingMethodePage, title: 'Méthodologie Storytelling' },
  { path: '/dashboard', component: DashboardPage, title: 'Mon Tableau de bord', protected: true },
  
  // Protected pages
  
  // Teacher pages
  { path: '/prof', component: TeacherDashboardPage, title: 'Interface Professeur', protected: true },
  { path: '/prof/dashboard', component: TeacherDashboardPage, title: 'Dashboard Professeur', protected: true },
  { path: '/prof/courses', component: TeacherCoursesPage, title: 'Mes Cours', protected: true },
  { path: '/prof/courses/:courseId', component: TeacherCourseDetailPage, title: 'Détails du Cours', protected: true },
  { path: '/prof/courses/:courseId/students', component: TeacherCourseStudentsPage, title: 'Étudiants du Cours', protected: true },
  { path: '/prof/courses/:courseId/grades', component: TeacherCourseGradesPage, title: 'Notes du Cours', protected: true },
  { path: '/prof/courses/:courseId/assignment/:assignmentId', component: TeacherCourseAssignmentPage, title: 'Gestion Devoir', protected: true },
  
  // Formation pages
  { path: '/formation/anglais', component: FormationAnglaisPage, title: 'Formation Anglais' },
  { path: '/formation/allemand', component: FormationAllemandPage, title: 'Formation Allemand' },
  { path: '/formation/allemand-declinaisons', component: DeclinaisonsPage, title: 'Les Déclinaisons de l\'Adjectif' },
  { path: '/formation/allemand-relatives', component: RelativePage, title: 'La Proposition Relative' },
  { path: '/formation/allemand-passif', component: PassifPage, title: 'Le Passif en Allemand' },
  { path: '/formation/allemand-structure', component: StructurePage, title: 'Structure de la Phrase' },
  { path: '/formation/allemand-recurrents', component: RecurrentsPage, title: 'Points de Grammaire Récurrents' },
  { path: '/formation/allemand-verbes', component: VerbIrregulierPage, title: 'Verbes Irréguliers Allemands' },
  { path: '/formation/culture-generale', component: FormationCultureGeneralePage, title: 'Formation Culture Générale' },
  { path: '/formation/geopolitique', component: FormationGeopolitiquePage, title: 'Formation Géopolitique' },
  { path: '/formation/python-fondamentaux', component: PythonFundamentalsPage, title: 'Python Fondamentaux' },
  { path: '/formation/python-matrices', component: PythonMatricesPage, title: 'Python Matrices' },
  { path: '/formation/python-analyse', component: PythonAnalysePage, title: 'Python Analyse' },
  { path: '/formation/python-probabilites', component: PythonProbabilitesPage, title: 'Python Probabilités' },
  { path: '/formation/python-fondamentaux-exercices', component: PythonFondamentauxExercicesPage, title: 'Exercices Python Fondamentaux' },
  { path: '/formation/python-matrices-exercices', component: PythonMatricesExercicesPage, title: 'Exercices Python Matrices' },
  { path: '/formation/python-analyse-exercices', component: PythonAnalyseExercicesPage, title: 'Exercices Python Analyse' },
  { path: '/formation/python-probabilites-exercices', component: PythonProbabilitesExercicesPage, title: 'Exercices Python Probabilités' },
  { path: '/formation/python-quiz', component: PythonQuizPage, title: 'Quiz Python' },
  // Maths approfondies — explicit quiz routes (safer matching than dynamic pattern)
  { path: '/formation/maths-elements-de-logique-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Éléments de logique', protected: true },
  { path: '/formation/maths-ensembles-et-applications-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Ensembles et applications', protected: true },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Sommes, produits & coefficients binomiaux', protected: true },
  { path: '/formation/maths-suites-numeriques-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Suites numériques', protected: true },
  { path: "/formation/maths-fonctions-d-une-variable-reelle-quiz", component: MathsApprofondiesQuizPage, title: "Quiz - Fonctions d'une variable réelle", protected: true },
  { path: '/formation/maths-derivation-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Dérivation', protected: true },
  { path: '/formation/maths-integration-sur-un-segment-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Intégration sur un segment', protected: true },
  { path: '/formation/maths-polynomes-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Polynômes', protected: true },
  { path: '/formation/maths-matrices-espaces-vectoriels-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Matrices & espaces vectoriels', protected: true },
  { path: '/formation/maths-probabilites-conditionnement-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Probabilités & conditionnement', protected: true },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Applications linéaires & structures vectorielles', protected: true },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Comparaison — négligeabilité & équivalence', protected: true },
  { path: '/formation/maths-series-numeriques-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Séries numériques', protected: true },
  { path: '/formation/maths-developpements-limites-formule-de-taylor-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Développements limités & formule de Taylor', protected: true },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Intégrales impropres & critères de convergence', protected: true },
  { path: '/formation/maths-espaces-probabilises-conditionnement-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Espaces probabilisés & conditionnement', protected: true },
  { path: '/formation/maths-variables-aleatoires-discretes-lois-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Variables aléatoires discrètes & lois', protected: true },
  { path: '/formation/maths-convergences-theoremes-limites-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Convergences & théorèmes limites', protected: true },
  { path: '/formation/maths', component: MathsChoixOptionPage, title: 'Choix option Maths ECG' },
  { path: '/formation/math/premiere-vers-deuxieme', component: PremiereVersDeuxiemePage, title: 'Première → Deuxième année' },
  { path: '/formation/math/premiere-vers-deuxieme/module-1-applications-lineaires-exercices', component: Module1ApplicationsLineairesExercicesPage, title: 'Module 1 - Applications linéaires - Exercices' },
  { path: '/formation/math/premiere-vers-deuxieme/module-2-vecteur-aleatoire-exercices', component: Module2VecteurAleatoireExercicesPage, title: 'Module 2 - Vecteur aléatoire - Exercices' },
  { path: '/formation/math/premiere-vers-deuxieme/module-3-integrale-impropre-exercices', component: Module3IntegraleImpropreExercicesPage, title: 'Module 3 - Intégrale impropre - Exercices' },
  { path: '/formation/math/premiere-vers-deuxieme/module-4-complement-probabilites-exercices', component: Module4ComplementProbabilitesExercicesPage, title: 'Module 4 - Complément de probabilités - Exercices' },
  { path: '/formation/math/premiere-vers-deuxieme/module-5-variable-aleatoire-exercices', component: Module5VariableAleatoireExercicesPage, title: 'Module 5 - Variable aléatoire - Exercices' },
  { path: '/formation/maths-elements-de-logique', component: MathsLogiquePage, title: 'Chapitre 1 : Logique & raisonnement fondamentaux' },
  { path: '/formation/maths-ensembles', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  { path: '/formation/maths-ensembles-et-applications', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux', component: MathsEntiersPage, title: 'Maths - Sommes, produits & coefficients binomiaux' },
  { path: '/formation/maths-suites', component: MathsSuitesPage, title: 'Maths - Suites numériques' },
  { path: '/formation/maths-suites-numeriques', component: MathsSuitesPage, title: 'Maths - Suites numériques' },
  { path: '/formation/maths-fonctions', component: MathsFonctionsPage, title: 'Maths - Fonctions réelles — continuité' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle', component: MathsFonctionsPage, title: 'Maths - Fonctions d’une variable réelle' },
  { path: '/formation/maths-derivation', component: MathsDerivationPage, title: 'Maths - Dérivation' },
  { path: '/formation/maths-integration', component: MathsIntegrationPage, title: 'Maths - Intégration' },
  { path: '/formation/maths-polynomes', component: MathsPolynomesPage, title: 'Maths - Polynômes' },
  { path: '/formation/maths-matrices-espaces-vectoriels', component: MathsEspacesVectorielsPage, title: 'Maths - Matrices & espaces vectoriels' },
  { path: '/formation/maths-espaces-vectoriels', component: MathsEspacesVectorielsPage, title: 'Maths - Matrices & espaces vectoriels' },
  { path: '/formation/maths-probabilites-finies', component: MathsProbabilitesFiniesPage, title: 'Maths - Probabilités sur un univers fini' },
  { path: '/formation/maths-probabilites-conditionnement', component: MathsProbabilitesFiniesPage, title: 'Maths - Probabilités & conditionnement' },
  // Generic catch-all quiz route for maths approfondies chapters (kept for future)
  { path: '/formation/maths-:slug-quiz', component: MathsApprofondiesQuizPage, title: 'Maths Approfondies - Quiz', protected: true },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles', component: MathsEspacesVectorielsComplementsPage, title: 'Maths - Applications linéaires & structures vectorielles' },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence', component: MathsComparaisonsPage, title: 'Maths - Comparaison — négligeabilité & équivalence' },
  { path: '/formation/maths-series-numeriques', component: MathsSeriesPage, title: 'Maths - Séries numériques' },
  { path: '/formation/maths-developpements-limites-formule-de-taylor', component: MathsDeveloppementsLimitesPage, title: 'Maths - Développements limités & formule de Taylor' },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence', component: MathsIntegrationIntervallePage, title: 'Maths - Intégrales impropres & critères de convergence' },
  { path: '/formation/maths-espaces-probabilises-conditionnement', component: MathsProbabilitesUniversPage, title: 'Maths - Espaces probabilisés & conditionnement' },
  { path: '/formation/maths-variables-aleatoires-discretes-lois', component: MathsVariablesAleatoiresPage, title: 'Maths - Variables aléatoires discrètes & lois' },
  { path: '/formation/maths-convergences-theoremes-limites', component: MathsInegalitesPage, title: 'Maths - Convergences & théorèmes limites' },
  { path: '/formation/maths-python', component: FormationPage, title: 'Formation Python ECG' },
  { path: '/formation/maths-elements-de-logique-exercices', component: Chapitre1LogiqueExercicesPage, title: 'Exercices - Chapitre 1 : Logique & raisonnement fondamentaux' },
  { path: '/formation/maths-ensembles-et-applications-exercices', component: Chapitre2EnsemblesExercicesPage, title: 'Exercices - Chapitre 2 : Ensembles et applications' },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux-exercices', component: Chapitre3SommesProduitsExercicesPage, title: 'Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux' },
  { path: '/formation/maths-suites-numeriques-exercices', component: Chapitre4SuitesExercicesPage, title: 'Exercices - Chapitre 4 : Suites numériques' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle-exercices', component: Chapitre5FonctionsExercicesPage, title: 'Exercices - Chapitre 5 : Fonctions d\'une variable réelle' },
  { path: '/formation/maths-derivation-exercices', component: Chapitre6DerivationExercicesPage, title: 'Exercices - Chapitre 6 : Dérivation' },
  { path: '/formation/maths-integration-sur-un-segment-exercices', component: Chapitre7IntegrationExercicesPage, title: 'Exercices - Chapitre 7 : Intégration sur un segment' },
  { path: '/formation/maths-polynomes-exercices', component: Chapitre8PolynomesExercicesPage, title: 'Exercices - Chapitre 8 : Polynômes' },
  { path: '/formation/maths-matrices-espaces-vectoriels-exercices', component: Chapitre9MatricesExercicesPage, title: 'Exercices - Chapitre 9 : Matrices & espaces vectoriels' },
  { path: '/formation/maths-probabilites-conditionnement-exercices', component: Chapitre10ProbabilitesExercicesPage, title: 'Exercices - Chapitre 10 : Probabilités & conditionnement' },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles-exercices', component: Chapitre11ApplicationsLineairesExercicesPage, title: 'Exercices - Chapitre 11 : Applications linéaires & structures vectorielles' },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-exercices', component: Chapitre12ComparaisonExercicesPage, title: 'Exercices - Chapitre 12 : Comparaison — négligeabilité & équivalence' },
  { path: '/formation/maths-series-numeriques-exercices', component: Chapitre13SeriesExercicesPage, title: 'Exercices - Chapitre 13 : Séries numériques' },
  { path: '/formation/maths-developpements-limites-formule-de-taylor-exercices', component: Chapitre14DeveloppementsExercicesPage, title: 'Exercices - Chapitre 14 : Développements limités & formule de Taylor' },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence-exercices', component: Chapitre15IntegralesImpropresExercicesPage, title: 'Exercices - Chapitre 15 : Intégrales impropres & critères de convergence' },
  { path: '/formation/maths-espaces-probabilises-conditionnement-exercices', component: Chapitre16EspacesProbabilisesExercicesPage, title: 'Exercices - Chapitre 16 : Espaces probabilisés & conditionnement' },
  { path: '/formation/maths-variables-aleatoires-discretes-lois-exercices', component: Chapitre17VariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 17 : Variables aléatoires discrètes & lois' },
  { path: '/formation/maths-convergences-theoremes-limites-exercices', component: Chapitre18ConvergencesExercicesPage, title: 'Exercices - Chapitre 18 : Convergences & théorèmes limites' },
  
  // Offres pages
  { path: '/offre/coaching-python', component: CoachingPythonPage, title: 'Coaching Python' },
  { path: '/offre/coaching-maths', component: CoachingMathsPage, title: 'Coaching Maths' },
  { path: '/offre/organisation-ete', component: OrganisationEtePage, title: 'Organisation Été' },
  { path: '/offre/preparation-cube', component: PreparationCubePage, title: 'Préparation Cube' },
  
  // Methodologie pages
  { path: '/methodologie/entretiens-personnalite', component: MethodEntretiensPersonnalitePage, title: 'Méthodologie Entretiens Personnalité' },
  
  // Articles pages
  { path: '/articles/maths-ete-controle', component: MathsEteControlePage, title: 'Un été pour (re)prendre le contrôle en maths' },
  { path: '/articles/attentes-concours', component: AttentesConcoursPage, title: 'Les attentes du concours - Décoder les jurys' },
  { path: '/articles/colles-ds', component: CollesDsPage, title: 'Prépa ECG : colles & DS' },
  { path: '/articles/carnet-erreurs', component: CarnetErreursPage, title: 'Carnet d\'erreurs — apprendre de ses erreurs' },
  { path: '/articles/routine-maths-beton', component: RoutineMathsBetonPage, title: 'Routine maths béton' },
  { path: '/articles/planning-360', component: Planning360Page, title: 'Intégrer les maths — méthode 360°' },
  { path: '/articles/plan-anti-decouragement', component: PlanAntiDecouragementPage, title: 'Plan anti‑découragement' },
  { path: '/articles/participation-active', component: ParticipationActivePage, title: 'Participation active' },
  { path: '/articles/cours-maths-maitrise', component: CoursMathsMaitrisePage, title: 'Cours maths maîtrisé' },
  { path: '/articles/exos-classiques', component: ExosClassiquesPage, title: 'Exos classiques' },
  { path: '/articles/annales-strategie', component: AnnalesStrategiePage, title: 'Dompter les annales' },
  { path: '/entretien-inverse-gem', component: EntretienInverseGEMPage, title: 'L\'entretien inversé à GEM' },
  { path: '/cv-projectif', component: CVProjectifPage, title: 'Guide complet pour réaliser son CV projectif' },
  
  // School pages
  { path: '/escp', component: ESCPPage, title: 'ESCP Business School' },
  { path: '/essec', component: ESSECPage, title: 'ESSEC Business School' },
  { path: '/edhec', component: EDHECPage, title: 'EDHEC Business School' },
  { path: '/emlyon', component: EMLyonPage, title: 'EM Lyon Business School' },
  { path: '/audencia', component: AudenciaPage, title: 'Audencia Business School' },
  { path: '/gem', component: GEMPage, title: 'Grenoble École de Management' },
  { path: '/kedge', component: KEDGEPage, title: 'KEDGE Business School' },
  { path: '/neoma', component: NEOMAPage, title: 'NEOMA Business School' },
  { path: '/skema', component: SKEMAPage, title: 'SKEMA Business School' },
  
  // Generator pages
  { path: '/generator/flashcards', component: FlashcardsGeneratorPage, title: 'Générateur de Flashcards' },
  { path: '/generator/answer', component: AnswerGeneratorPage, title: 'Générateur de Réponses' },
  { path: '/generator/case-study', component: CaseStudyGeneratorPage, title: 'Générateur d\'Études de Cas' },
  { path: '/generator/edhec', component: EDHECGeneratorPage, title: 'Générateur EDHEC' },
  { path: '/generator/emlyon', component: EMLyonGeneratorPage, title: 'Générateur EM Lyon' },
  { path: '/generator/geopolitics', component: GeopoliticsGeneratorPage, title: 'Générateur Géopolitique' },
  { path: '/generator/geopolitics-unified', component: GeopoliticsUnifiedGeneratorPage, title: 'Générateur Géopolitique Unifié' },
  { path: '/generator/languages', component: LanguagesGeneratorPage, title: 'Générateur de Langues' },
  { path: '/generator/languages-unified', component: UnifiedLanguagesGeneratorPage, title: 'Générateur Langues Unifié' },
  { path: '/generator/orals-unified', component: UnifiedOralGeneratorPage, title: 'Générateur Oraux Unifié' },
  { path: '/generator/prepa-chatbot', component: PrepaChatbotGeneratorPage, title: 'Chatbot Prépa' },

  { path: '/generator/theme-grammar', component: ThemeGrammarGeneratorPage, title: 'Grammaire Thématique' },
  
  // Routes pour les formations mathématiques
  { 
    path: '/formation/maths-choix', 
    component: lazy(() => import('../pages/formation/math/MathsChoixOptionPage')),
    title: 'Choix option Maths ECG'
  },
  { 
    path: '/formation/maths-approfondies', 
    component: lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesPage')),
    title: 'Maths Approfondies',
    protected: true 
  },
  { 
    path: '/formation/maths-methodologie', 
    component: lazy(() => import('../pages/formation/math/MathsMethodologiePage')),
    title: 'Méthodologie Mathématiques',
    protected: false 
  },
  { 
    path: '/formation/maths-appliquees', 
    component: lazy(() => import('../pages/formation/math/MathsAppliquees/MathsAppliqueesPage')),
    title: 'Maths Appliquées',
    protected: true 
  },
  {
    path: '/formation/maths-integration-sur-un-segment',
    component: MathsIntegrationPage,
    title: 'Maths - Intégration sur un segment',
    protected: true
  },
  {
    path: '/formation/math/terminale-vers-prepa',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/index')),
    title: 'Terminale vers la prépa',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/introduction-bilan',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/IntroductionBilanPage')),
    title: 'Introduction & Bilan - Révisions mathématiques pour la prépa ECG',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/calculs-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre1-Calculs-CoursPage')),
    title: 'Cours - Chapitre 1 : Calculs',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/calculs-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre1-Calculs-ExercicesPage')),
    title: 'Exercices - Chapitre 1 : Calculs',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/sommes-suites-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre2-SommesSuites-CoursPage')),
    title: 'Cours - Chapitre 2 : Sommes, suites et produits',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/sommes-suites-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre2-SommesSuites-ExercicesPage')),
    title: 'Exercices - Chapitre 2 : Sommes, suites et produits',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/fonctions-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre3-Fonctions-CoursPage')),
    title: 'Cours - Chapitre 3 : Fonctions',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/fonctions-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre3-Fonctions-ExercicesPage')),
    title: 'Exercices - Chapitre 3 : Fonctions',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/derivees-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre4-Derivees-CoursPage')),
    title: 'Cours - Chapitre 4 : Dérivées',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/derivees-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre4-Derivees-ExercicesPage')),
    title: 'Exercices - Chapitre 4 : Dérivées',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/integrales-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre5-Integrales-CoursPage')),
    title: 'Cours - Chapitre 5 : Intégrales',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/integrale-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre5-Integrale-ExercicesPage')),
    title: 'Exercices - Chapitre 5 : Intégrale',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/probabilites-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre6-Probabilites-CoursPage')),
    title: 'Cours - Chapitre 6 : Probabilités',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/matrices-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre7-Matrices-CoursPage')),
    title: 'Cours - Chapitre 7 : Matrices',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/probabilites-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre6-Probabilites-ExercicesPage')),
    title: 'Exercices - Chapitre 6 : Probabilités',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/matrice-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre7-Matrice-ExercicesPage')),
    title: 'Exercices - Chapitre 7 : Matrice',
    protected: false
  },


  
  // 404 - Must be last
  { path: '*', component: NotFound, title: 'Page non trouvée' }
];

// Routes pour les formations mathématiques
export const MATHS_ROUTES = [
  {
    path: '/formation/maths-choix',
    component: lazy(() => import('@/pages/formation/math/MathsChoixOptionPage')),
    protected: true
  },
  {
    path: '/formation/maths-approfondies',
    component: lazy(() => import('@/pages/formation/math/MathsApprofondies/MathsApprofondiesPage')),
    protected: true
  },
  {
    path: '/formation/maths-methodologie',
    component: lazy(() => import('@/pages/formation/math/MathsMethodologiePage')),
    protected: false
  },
  {
    path: '/formation/maths-appliquees',
    component: lazy(() => import('@/pages/formation/math/MathsAppliquees/MathsAppliqueesPage')),
    protected: true
  },
];

// Helper functions
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getAllRoutePaths = (): string[] => {
  return routes.filter(route => route.path !== '*').map(route => route.path);
};

export const getProtectedRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.protected);
};

export const getPublicRoutes = (): RouteConfig[] => {
  return routes.filter(route => !route.protected);
};
