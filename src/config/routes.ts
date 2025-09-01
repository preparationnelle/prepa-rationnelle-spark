import { ComponentType, lazy } from 'react';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
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
const FormationAnglaisGrammairePage = lazy(() => import('../pages/formation/anglais/FormationAnglaisGrammairePage'));
const FormationAnglaisCivilisationPage = lazy(() => import('../pages/formation/anglais/FormationAnglaisCivilisationPage'));
const AnglaisCivilisationOverviewPage = lazy(() => import('../pages/formation/anglais/CivilisationOverviewPage'));
const AnglaisEnvironmentPage = lazy(() => import('../pages/formation/anglais/civilisation/EnvironmentPage'));
const AnglaisEnvironmentVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EnvironmentVocabularyPage'));
const AnglaisPoliticsPage = lazy(() => import('../pages/formation/anglais/civilisation/PoliticsPage'));
const AnglaisPoliticsVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/PoliticsVocabularyPage'));
const AnglaisGeopoliticsVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/GeopoliticsVocabularyPage'));
const AnglaisAITechnologyVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/AITechnologyVocabularyPage'));
const AnglaisEconomyVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EconomyVocabularyPage'));
const AnglaisHealthVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthVocabularyPage'));
const AnglaisEducationVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationVocabularyPage'));
const AnglaisMediaVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaVocabularyPage'));
const AnglaisJusticeVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/JusticeVocabularyPage'));
const AnglaisInequalitiesVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/InequalitiesVocabularyPage'));
const AnglaisCivilRightsVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsVocabularyPage'));
const AnglaisBrexitVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitVocabularyPage'));
const AnglaisCommonwealthVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/CommonwealthVocabularyPage'));
const AnglaisCivilReligionVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilReligionVocabularyPage'));
const AnglaisImmigrationVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationVocabularyPage'));
const AnglaisCrisesVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/CrisesVocabularyPage'));
const AnglaisGeopoliticsPage = lazy(() => import('../pages/formation/anglais/civilisation/GeopoliticsPage'));
const AnglaisAITechnologyPage = lazy(() => import('../pages/formation/anglais/civilisation/AITechnologyPage'));
const AnglaisEconomyPage = lazy(() => import('../pages/formation/anglais/civilisation/EconomyPage'));
const AnglaisHealthPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthPage'));
const AnglaisEducationPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationPage'));
const AnglaisMediaPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaPage'));
const AnglaisJusticePage = lazy(() => import('../pages/formation/anglais/civilisation/JusticePage'));
const AnglaisInequalitiesPage = lazy(() => import('../pages/formation/anglais/civilisation/InequalitiesPage'));
const AnglaisCivilRightsPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsPage'));
const AnglaisBrexitPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitPage'));
const AnglaisCommonwealthPage = lazy(() => import('../pages/formation/anglais/civilisation/CommonwealthPage'));
const AnglaisCivilReligionPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilReligionPage'));
const AnglaisImmigrationPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationPage'));
const AnglaisContemporaryCrisesPage = lazy(() => import('../pages/formation/anglais/civilisation/ContemporaryCrisesPage'));

const MethodologieAnglaisPage = lazy(() => import('../pages/formation/anglais/MethodologieAnglaisPage'));

const FormationEspagnolPage = lazy(() => import('../pages/FormationEspagnolPage'));
const FormationEspagnolGrammairePage = lazy(() => import('../pages/formation/espagnol/FormationEspagnolGrammairePage'));
const ThemeGrammaticalPage = lazy(() => import('../pages/formation/espagnol/grammaire/ThemeGrammaticalPage'));
const ConjugaisonPage = lazy(() => import('../pages/formation/espagnol/grammaire/ConjugaisonPage'));
const ConjugaisonExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/ConjugaisonExercicesPage'));
const SerEstarPage = lazy(() => import('../pages/formation/espagnol/grammaire/SerEstarPage'));
const SyntaxePage = lazy(() => import('../pages/formation/espagnol/grammaire/SyntaxePage'));
const SyntaxeExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/SyntaxeExercicesPage'));
const SerEstarExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/SerEstarExercicesPage'));
const PrepositionsPage = lazy(() => import('../pages/formation/espagnol/grammaire/PrepositionsPage'));
const PrepositionsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/PrepositionsExercicesPage'));
const QuestionsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/QuestionsExercicesPage'));
const QuestionsPage = lazy(() => import('../pages/formation/espagnol/grammaire/QuestionsPage'));
const NegationsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/NegationsExercicesPage'));
const TemporalExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/TemporalExercicesPage'));
const PronounsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/PronounsExercicesPage'));
const AffectiveVerbsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/AffectiveVerbsExercicesPage'));
const AdjectivesAdverbsExercicesPage = lazy(() => import('../pages/formation/espagnol/grammaire/AdjectivesAdverbsExercicesPage'));
const NegationsPage = lazy(() => import('../pages/formation/espagnol/grammaire/NegationsPage'));
const TemporalPage = lazy(() => import('../pages/formation/espagnol/grammaire/TemporalPage'));
const PronounsPage = lazy(() => import('../pages/formation/espagnol/grammaire/PronounsPage'));
const AffectiveVerbsPage = lazy(() => import('../pages/formation/espagnol/grammaire/AffectiveVerbsPage'));
const AdjectivesAdverbsPage = lazy(() => import('../pages/formation/espagnol/grammaire/AdjectivesAdverbsPage'));
const FormationEspagnolCivilisationPage = lazy(() => import('../pages/formation/espagnol/FormationEspagnolCivilisationPage'));
const Module1PoliticaRegimenesPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module1PoliticaRegimenesPage'));
const Module1VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module1VocabularyPage'));
const Module2VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module2VocabularyPage'));
const Module3VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module3VocabularyPage'));
const Module6VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module6VocabularyPage'));
const Module7VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module7VocabularyPage'));
const Module8VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module8VocabularyPage'));
const Module9VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module9VocabularyPage'));
const Module4MigracionesDesplazamientosPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module4MigracionesDesplazamientosPage'));
const Module5ViolenciaNarcotraficoPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module5ViolenciaNarcotraficoPage'));
const Module7MedioAmbienteClimaPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module7MedioAmbienteClimaPage'));
const Module10IATransformacionDigitalPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module10IATransformacionDigitalPage'));
const Module10ChinaGeopoliticaPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module10ChinaGeopoliticaPage'));
const Module10VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module10VocabularyPage'));
const Module11VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module11VocabularyPage'));
const Module12VocabularyPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module12VocabularyPage'));
const FormationEspagnolMethodologiePage = lazy(() => import('../pages/formation/espagnol/FormationEspagnolMethodologiePage'));
const FormationAllemandPage = lazy(() => import('../pages/FormationAllemandPage'));
const FormationAllemandGrammairePage = lazy(() => import('../pages/formation/allemand/FormationAllemandGrammairePage'));
const FormationAllemandCivilisationPage = lazy(() => import('../pages/formation/allemand/FormationAllemandCivilisationPage'));
const PolitikAllemandePage = lazy(() => import('../pages/formation/allemand/PolitikAllemandePage'));
const PolitikAllemandeTestPage = lazy(() => import('../pages/formation/allemand/PolitikAllemandeTestPage'));
const PolitikAllemandeMinimalPage = lazy(() => import('../pages/formation/allemand/PolitikAllemandeMinimalPage'));
const DemographieAllemandePage = lazy(() => import('../pages/formation/allemand/DemographieAllemandePage'));
const EcologieAllemandePage = lazy(() => import('../pages/formation/allemand/EcologieAllemandePage'));
const GeopolitiqueEuropeennePage = lazy(() => import('../pages/formation/allemand/GeopolitiqueEuropeennePage'));
const IndustrieAllemandePage = lazy(() => import('../pages/formation/allemand/IndustrieAllemandePage'));
const CultureIdentiteAllemandePage = lazy(() => import('../pages/formation/allemand/CultureIdentiteAllemandePage'));
const EducationAllemandePage = lazy(() => import('../pages/formation/allemand/EducationAllemandePage'));
const TechnologieInnovationAllemandePage = lazy(() => import('../pages/formation/allemand/TechnologieInnovationAllemandePage'));
const FemmesEgaliteAllemandePage = lazy(() => import('../pages/formation/allemand/FemmesEgaliteAllemandePage'));
const HistoireMemoireAllemandePage = lazy(() => import('../pages/formation/allemand/HistoireMemoireAllemandePage'));
const ReussirEpreuvesAllemandePage = lazy(() => import('../pages/formation/allemand/ReussirEpreuvesAllemandePage'));
const ReussirLaisserPage = lazy(() => import('../pages/formation/allemand/ReussirLaisserPage'));
const ReussirCollePage = lazy(() => import('../pages/formation/allemand/ReussirCollePage'));
const ReussirSynthesePage = lazy(() => import('../pages/formation/allemand/ReussirSynthesePage'));
const VocabulairePolitiqueFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulairePolitiqueFlashcardsPage'));
const VocabulaireDemographieFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireDemographieFlashcardsPage'));
const VocabulaireEcologieFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireEcologieFlashcardsPage'));
const VocabulaireGeopolitiqueFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireGeopolitiqueFlashcardsPage'));
const VocabulaireWirtschaftFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireWirtschaftFlashcardsPage'));
const VocabulaireKulturFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireKulturFlashcardsPage'));
const VocabulaireBildungFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireBildungFlashcardsPage'));
const VocabulaireInnovationFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireInnovationFlashcardsPage'));
const VocabulaireFrauenFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireFrauenFlashcardsPage'));
const VocabulaireGeschichteFlashcardsPage = lazy(() => import('../pages/formation/allemand/VocabulaireGeschichteFlashcardsPage'));
const DeclinaisonsPage = lazy(() => import('../pages/formation/allemand/DeclinaisonsPage'));
const RelativePage = lazy(() => import('../pages/formation/allemand/RelativePage'));
const PassifPage = lazy(() => import('../pages/formation/allemand/PassifPage'));
const StructurePage = lazy(() => import('../pages/formation/allemand/StructurePage'));
const RecurrentsPage = lazy(() => import('../pages/formation/allemand/RecurrentsPage'));
const VerbIrregulierPage = lazy(() => import('../pages/formation/allemand/VerbIrregulierPage'));
const FormationGeopolitiquePage = lazy(() => import('../pages/FormationGeopolitiquePage'));
const GeopolitiquePremiereAnneePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquePremiereAnneePage'));
const GeopolitiqueDeuxiemeAnneePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiqueDeuxiemeAnneePage'));
const GeopolitiqueSujetsProbablesPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiqueSujetsProbablesPage'));
const ContinentAfricainPage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainPage'));
const ContinentAfricainChronologiePage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainChronologiePage'));
const ProcheMoyenOrientPage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientPage'));
const ProcheMoyenOrientChronologiePage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientChronologiePage'));
const ChronologieEuropePage = lazy(() => import('../pages/formation/geopolitique/ChronologieEuropePage'));
const UnionEuropeennePageSimple = lazy(() => import('../pages/formation/geopolitique/UnionEuropeennePageSimple'));
const AmeriqueLatinePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatinePage'));
const AsieChronologiePage = lazy(() => import('../pages/formation/geopolitique/AsieChronologiePage'));
const AmeriqueLatineChronologiePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatineChronologiePage'));
const AmeriqueNordChronologiePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueNordChronologiePage'));
const SciencesTechnologiesPage = lazy(() => import('../pages/formation/geopolitique/SciencesTechnologiesPage'));
const EtudesDeCasPage = lazy(() => import('../pages/formation/geopolitique/EtudesDeCasPage'));
const MigrationsPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/MigrationsPage'));
const TransportsPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/TransportsPage'));
const EnergiePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/EnergiePage'));
const TourismePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/TourismePage'));
const MetauxPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/MetauxPage'));
const ForetPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/ForetPage'));
const AgroalimentairePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/AgroalimentairePage'));
const EauPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/EauPage'));
const EconomiePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/EconomiePage'));
const RussiePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/RussiePage'));
const ChinePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/ChinePage'));
const CrisesPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/CrisesPage'));
const UrbanisationPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/UrbanisationPage'));
const PuissancesPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/PuissancesPage'));
const DeveloppementDurablePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/DeveloppementDurablePage'));
const InegalitesPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/InegalitesPage'));
const FrontieresPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/FrontieresPage'));
const CriminalitePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/CriminalitePage'));
const ChronologiesPage = lazy(() => import('../pages/formation/geopolitique/ChronologiesPage'));
const GeopolitiquesFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquesFlashcardsPage'));
const GeopolitiquesReferencesPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquesReferencesPage'));
const GeopolitiquesMethodologiePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquesMethodologiePage'));
const MethodologieDissertationPage = lazy(() => import('../pages/formation/geopolitique/MethodologieDissertationPage'));
const EnvironmentPage = lazy(() => import('../pages/formation/anglais/civilisation/EnvironmentPage'));
const PoliticsPage = lazy(() => import('../pages/formation/anglais/civilisation/PoliticsPage'));
const CivilisationOverviewPage = lazy(() => import('../pages/formation/anglais/CivilisationOverviewPage'));
const GeopoliticsPage = lazy(() => import('../pages/formation/anglais/civilisation/GeopoliticsPage'));
const AITechnologyPage = lazy(() => import('../pages/formation/anglais/civilisation/AITechnologyPage'));
const EconomyPage = lazy(() => import('../pages/formation/anglais/civilisation/EconomyPage'));
const HealthPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthPage'));
const EducationPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationPage'));
const MediaPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaPage'));
const JusticePage = lazy(() => import('../pages/formation/anglais/civilisation/JusticePage'));
const InequalitiesPage = lazy(() => import('../pages/formation/anglais/civilisation/InequalitiesPage'));
const CivilRightsPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsPage'));
const BrexitPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitPage'));
const CommonwealthPage = lazy(() => import('../pages/formation/anglais/civilisation/CommonwealthPage'));
const CivilReligionPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilReligionPage'));
const ImmigrationPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationPage'));
const ContemporaryCrisesPage = lazy(() => import('../pages/formation/anglais/civilisation/ContemporaryCrisesPage'));
const FormationCultureGeneralePage = lazy(() => import('../pages/FormationCultureGeneralePage'));
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
const Chapitre2EndomorphismesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EndomorphismesMatricesAvancees-ExercicesPage'));
const Chapitre3SommesProduitsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-SommesProduitsEtCoefficientsBinomiaux-ExercicesPage'));
const Chapitre4SuitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-SuitesNumeriques-ExercicesPage'));
const Chapitre5FonctionsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-ExercicesPage'));
const Chapitre6DerivationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-ExercicesPage'));
const Chapitre6VariablesAleatoiresDensiteExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-VariablesAleatoiresDensite-ExercicesPage'));
const Chapitre7IntegrationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-IntegrationSurUnSegment-ExercicesPage'));
const Chapitre8PolynomesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-Polynomes-ExercicesPage'));
const Chapitre1ComplementsAlgebreLineaireExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-ComplementsAlgebreLineaire-ExercicesPage'));
const Chapitre9MatricesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-ExercicesPage'));
const Chapitre3AlgebreBilineaireExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-AlgebreBilineaire-ExercicesPage'));
const Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-AlgebreBilineaireEspacesEuclidiens-ExercicesPage'));
const Chapitre10ProbabilitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-ExercicesPage'));
const Chapitre11ApplicationsLineairesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-ApplicationsLineairesEtStructuresVectorielles-ExercicesPage'));
const Chapitre11OptimisationMultivarieeAvanceeExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-OptimisationMultivarieeAvancee-ExercicesPage'));
const Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-FonctionsMultivariees-CalculDifferentiel-ExercicesPage'));
const Chapitre12ComparaisonExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-Comparaison-NegligeabiliteEquivalence-ExercicesPage'));
const Chapitre13SeriesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-SeriesNumeriques-ExercicesPage'));
const Chapitre14DeveloppementsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre14-DeveloppementsLimitesEtTaylor-ExercicesPage'));
const Chapitre15IntegralesImpropresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre15-IntegralesImpropresEtCriteres-ExercicesPage'));
const Chapitre16EspacesProbabilisesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre16-EspacesProbabilisesEtConditionnement-ExercicesPage'));
const Chapitre17VariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre17-VariablesAleatoiresDiscretes-Lois-ExercicesPage'));
const Chapitre18ConvergencesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre18-Convergences-Et-TheoremesLimites-ExercicesPage'));
const Chapitre10ReductionMatricesSymetriquesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ReductionMatricesSymetriques-ExercicesPage'));
const Chapitre12ConvergencesApproximationsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-ConvergencesApproximations-ExercicesPage'));
const Chapitre18EstimationStatistiqueAvanceeExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre18-EstimationStatistiqueAvancee-ExercicesPage'));
const Chapitre14TheorieEstimationStatistiqueExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre14-TheorieEstimationStatistique-ExercicesPage'));
const Chapitre5ComplementsVariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-ComplementsVariablesAleatoires-ExercicesPage'));

// Maths Appliquées - Nouveaux chapitres
const Chapitre19EquationsDifferentiellesCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre19-EquationsDifferentiellesApplicationsConcretes-CoursPage'));
const Chapitre19EquationsDifferentiellesExercicesPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre19-EquationsDifferentiellesApplicationsConcretes-ExercicesPage'));
const Chapitre19EquationsDifferentiellesQuizPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre19-EquationsDifferentiellesApplicationsConcretes-QuizPage'));
const Chapitre21ChainesDeMarkovCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre21-ChainesDeMarkov-CoursPage'));
const Chapitre21ChainesDeMarkovExercicesPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre21-ChainesDeMarkov-ExercicesPage'));
const Chapitre21ChainesDeMarkovQuizPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre21-ChainesDeMarkov-QuizPage'));
const Chapitre22TheorieDesGraphesApprofondieCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre22-TheorieDesGraphesApprofondie-CoursPage'));
const Chapitre22TheorieDesGraphesApprofondieExercicesPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre22-TheorieDesGraphesApprofondie-ExercicesPage'));
const Chapitre22TheorieDesGraphesApprofondieQuizPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre22-TheorieDesGraphesApprofondie-QuizPage'));
const Chapitre23StatistiquesDescriptivesCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre23-StatistiquesDescriptives-CoursPage'));
const Chapitre23StatistiquesDescriptivesExercicesPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre23-StatistiquesDescriptives-ExercicesPage'));
const Chapitre23StatistiquesDescriptivesQuizPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre23-StatistiquesDescriptives-QuizPage'));

// Offres pages
const CoachingPythonPage = lazy(() => import('../pages/offres/CoachingPythonPage'));
const CoachingMathsPage = lazy(() => import('../pages/offres/CoachingMathsPage'));
const OrganisationEtePage = lazy(() => import('../pages/offres/OrganisationEtePage'));
const PreparationCubePage = lazy(() => import('../pages/offres/PreparationCubePage'));
const OffreGratuitePage = lazy(() => import('../pages/offres/OffreGratuitePage'));

// Methodologie pages
const MethodEntretiensPersonnalitePage = lazy(() => import('../pages/methodologie/MethodEntretiensPersonnalitePage'));
const StorytellingMethodePage = lazy(() => import('../pages/StorytellingMethodePage'));

// Pages méthodologie entretiens de personnalité
const MotivationEcolePage = lazy(() => import('../pages/methodologie/MotivationEcolePage'));
const ProjetProfessionnelPage = lazy(() => import('../pages/methodologie/ProjetProfessionnelPage'));
const PersonnalitePage = lazy(() => import('../pages/methodologie/PersonnalitePage'));
const FinirEntretienPage = lazy(() => import('../pages/methodologie/FinirEntretienPage'));
const ErreursEviterPage = lazy(() => import('../pages/methodologie/ErreursEviterPage'));
const TendrePerchesPage = lazy(() => import('../pages/methodologie/TendrePerchesPage'));
const PitchIntroPage = lazy(() => import('../pages/methodologie/PitchIntroPage'));

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

// Formation Synthèse de Texte
const FormationSyntheseTextePage = lazy(() => import('../pages/formation/synthese-texte/FormationSyntheseTextePage'));
const SyntheseTexteOverviewPage = lazy(() => import('../pages/formation/synthese-texte/SyntheseTexteOverviewPage'));
const MethodologiePage = lazy(() => import('../pages/formation/synthese-texte/MethodologiePage'));
const TravailAnnuelPage = lazy(() => import('../pages/formation/synthese-texte/TravailAnnuelPage'));
const RessourcesPage = lazy(() => import('../pages/formation/synthese-texte/RessourcesPage'));

// Teacher pages
const TeacherDashboardPage = lazy(() => import('../pages/teacher/TeacherDashboardPage'));
const TeacherCoursesPage = lazy(() => import('../pages/teacher/TeacherCoursesPage'));
const TeacherCourseDetailPage = lazy(() => import('../pages/teacher/TeacherCourseDetailPage'));
const TeacherCourseStudentsPage = lazy(() => import('../pages/teacher/TeacherCourseStudentsPage'));
const TeacherCourseGradesPage = lazy(() => import('../pages/teacher/TeacherCourseGradesPage'));
const TeacherCourseAssignmentPage = lazy(() => import('../pages/teacher/TeacherCourseAssignmentPage'));
const ChapitresLibresPage = lazy(() => import('../pages/ChapitresLibresPage'));

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
  { path: '/dashboard', component: DashboardPage, title: 'Mon Dashboard', protected: true },
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
  
  // Routes méthodologie entretiens de personnalité
  { path: '/methodologie/motivation-ecole', component: MotivationEcolePage, title: 'Motivation École' },
  { path: '/methodologie/projet-professionnel', component: ProjetProfessionnelPage, title: 'Projet Professionnel' },
  { path: '/methodologie/personnalite', component: PersonnalitePage, title: 'Questions Personnalité' },
  { path: '/methodologie/finir-entretien', component: FinirEntretienPage, title: 'Finir un Entretien' },
  { path: '/methodologie/erreur-entretien', component: ErreursEviterPage, title: 'Erreurs à Éviter' },
  { path: '/methodologie/tendre-perches', component: TendrePerchesPage, title: 'Tendre des Perches' },
  { path: '/methodologie/pitch-intro', component: PitchIntroPage, title: 'Pitch d\'Introduction' },
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
  { path: '/formation/anglais/grammaire', component: FormationAnglaisGrammairePage, title: 'Grammaire Anglaise' },
  { path: '/formation/anglais/civilisation', component: FormationAnglaisCivilisationPage, title: 'Civilisation Anglaise' },
  { path: '/formation/anglais/civilisation/environment', component: AnglaisEnvironmentPage, title: 'Environment and Ecology' },
  { path: '/formation/anglais/civilisation/environment/vocabulary', component: AnglaisEnvironmentVocabularyPage, title: 'Environment Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/politics', component: AnglaisPoliticsPage, title: 'Politics (US & UK)' },
  { path: '/formation/anglais/civilisation/politics/vocabulary', component: AnglaisPoliticsVocabularyPage, title: 'Politics Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/geopolitics/vocabulary', component: AnglaisGeopoliticsVocabularyPage, title: 'Geopolitics Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/geopolitics', component: AnglaisGeopoliticsPage, title: 'Geopolitics and International Relations' },
  { path: '/formation/anglais/civilisation/ai-technology', component: AnglaisAITechnologyPage, title: 'AI and Technology' },
  { path: '/formation/anglais/civilisation/economy/vocabulary', component: AnglaisEconomyVocabularyPage, title: 'Economy and Globalization Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/economy', component: AnglaisEconomyPage, title: 'Economy and Globalization' },
  { path: '/formation/anglais/civilisation/health/vocabulary', component: AnglaisHealthVocabularyPage, title: 'Health and Healthcare Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/health', component: AnglaisHealthPage, title: 'Health and Healthcare' },
  { path: '/formation/anglais/civilisation/education/vocabulary', component: AnglaisEducationVocabularyPage, title: 'Education and Culture Wars Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/education', component: AnglaisEducationPage, title: 'Education and Culture Wars' },
  { path: '/formation/anglais/civilisation/media/vocabulary', component: AnglaisMediaVocabularyPage, title: 'Media and Social Networks Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/media', component: AnglaisMediaPage, title: 'Media and Social Networks' },
  { path: '/formation/anglais/civilisation/justice/vocabulary', component: AnglaisJusticeVocabularyPage, title: 'Justice and Rule of Law Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/justice', component: AnglaisJusticePage, title: 'Justice and Rule of Law' },
  { path: '/formation/anglais/civilisation/inequalities/vocabulary', component: AnglaisInequalitiesVocabularyPage, title: 'Social and Racial Inequalities Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/inequalities', component: AnglaisInequalitiesPage, title: 'Social and Racial Inequalities' },
  { path: '/formation/anglais/civilisation/civil-rights/vocabulary', component: AnglaisCivilRightsVocabularyPage, title: 'Civil Rights and Social Movements Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/civil-rights', component: AnglaisCivilRightsPage, title: 'Civil Rights and Social Movements' },
  { path: '/formation/anglais/civilisation/brexit/vocabulary', component: AnglaisBrexitVocabularyPage, title: 'Brexit and its Aftermath Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/brexit', component: AnglaisBrexitPage, title: 'Brexit and Aftermath' },
  { path: '/formation/anglais/civilisation/commonwealth/vocabulary', component: AnglaisCommonwealthVocabularyPage, title: 'The Commonwealth and Post-Colonial Legacy Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/commonwealth', component: AnglaisCommonwealthPage, title: 'Commonwealth and Post-Colonialism' },
  { path: '/formation/anglais/civilisation/civil-religion/vocabulary', component: AnglaisCivilReligionVocabularyPage, title: 'Civil Religion and National Identity Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/civil-religion', component: AnglaisCivilReligionPage, title: 'Civil Religion and Values' },
  { path: '/formation/anglais/civilisation/immigration/vocabulary', component: AnglaisImmigrationVocabularyPage, title: 'Immigration and Border Control Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/immigration', component: AnglaisImmigrationPage, title: 'Immigration and Integration' },
  { path: '/formation/anglais/civilisation/crises/vocabulary', component: AnglaisCrisesVocabularyPage, title: 'Major Contemporary Crises Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/crises', component: AnglaisContemporaryCrisesPage, title: 'Contemporary Crises' },
  { path: '/formation/anglais/civilisation/ai-technology/vocabulary', component: AnglaisAITechnologyVocabularyPage, title: 'Artificial Intelligence and Technology Vocabulary - Flashcards' },

  { path: '/formation/anglais/methodologie-complete', component: MethodologieAnglaisPage, title: 'Méthodologie Complète Anglais' },

  { path: '/formation/espagnol', component: FormationEspagnolPage, title: 'Formation Espagnol' },
  { path: '/formation/espagnol/grammaire', component: FormationEspagnolGrammairePage, title: 'Grammaire Espagnole' },
  { path: '/formation/espagnol/vocabulaire', component: lazy(() => import('../pages/formation/espagnol/FormationEspagnolVocabulairePage')), title: 'Vocabulaire Espagnol' },
  { path: '/formation/espagnol/sommaire', component: lazy(() => import('../pages/formation/espagnol/FormationEspagnolSommairePage')), title: 'Sommaire Formation Espagnol' },
  { path: '/formation/espagnol/generateurs', component: lazy(() => import('../pages/formation/espagnol/FormationEspagnolGenerateursPage')), title: 'Générateurs IA Formation Espagnol' },
  { path: '/formation/espagnol/grammaire/theme', component: ThemeGrammaticalPage, title: 'Thème Grammatical' },
  { path: '/formation/espagnol/grammaire/conjugaison', component: ConjugaisonPage, title: 'Conjugaison et Temps Verbaux' },
  { path: '/formation/espagnol/grammaire/conjugaison/exercices', component: ConjugaisonExercicesPage, title: 'Exercices de Conjugaison' },
  { path: '/formation/espagnol/grammaire/ser-estar', component: SerEstarPage, title: 'Ser vs Estar et Constructions' },
  { path: '/formation/espagnol/grammaire/ser-estar/exercices', component: SerEstarExercicesPage, title: 'Exercices Ser vs Estar' },
  { path: '/formation/espagnol/grammaire/syntaxe-structures-complexes', component: SyntaxePage, title: 'Syntaxe et Structures Complexes' },
  { path: '/formation/espagnol/grammaire/syntaxe-structures-complexes/exercices', component: SyntaxeExercicesPage, title: 'Exercices de Syntaxe et Structures Complexes' },
  { path: '/formation/espagnol/grammaire/prepositions', component: PrepositionsPage, title: 'Prépositions et Locutions' },
  { path: '/formation/espagnol/grammaire/prepositions/exercices', component: PrepositionsExercicesPage, title: 'Exercices Prépositions et Locutions' },
  { path: '/formation/espagnol/grammaire/questions', component: QuestionsPage, title: 'Questions et Interrogatifs' },
  { path: '/formation/espagnol/grammaire/questions/exercices', component: QuestionsExercicesPage, title: 'Exercices Questions et Interrogatifs' },
  { path: '/formation/espagnol/grammaire/negations', component: NegationsPage, title: 'Négations' },
  { path: '/formation/espagnol/grammaire/negations/exercices', component: NegationsExercicesPage, title: 'Exercices Négations' },
  { path: '/formation/espagnol/grammaire/temporal/exercices', component: TemporalExercicesPage, title: 'Exercices Vocabulaire Temporel' },
  { path: '/formation/espagnol/grammaire/pronouns/exercices', component: PronounsExercicesPage, title: 'Exercices Pronoms' },
  { path: '/formation/espagnol/grammaire/affective-verbs/exercices', component: AffectiveVerbsExercicesPage, title: 'Exercices Verbes Affectifs' },
  { path: '/formation/espagnol/grammaire/adjectives-adverbs/exercices', component: AdjectivesAdverbsExercicesPage, title: 'Exercices Adjectifs et Adverbes' },
  { path: '/formation/espagnol/grammaire/temporal', component: TemporalPage, title: 'Vocabulaire Temporel' },
  { path: '/formation/espagnol/grammaire/pronouns', component: PronounsPage, title: 'Pronoms' },
  { path: '/formation/espagnol/grammaire/affective-verbs', component: AffectiveVerbsPage, title: 'Verbes Affectifs' },
  { path: '/formation/espagnol/grammaire/adjectives-adverbs', component: AdjectivesAdverbsPage, title: 'Adjectifs et Adverbes' },
  { path: '/formation/espagnol/civilisation', component: FormationEspagnolCivilisationPage, title: 'Civilisation Hispanique' },
  { path: '/formation/espagnol/civilisation/module1', component: Module1PoliticaRegimenesPage, title: 'Política y Regímenes' },
  { path: '/formation/espagnol/civilisation/module1/vocabulaire', component: Module1VocabularyPage, title: 'Vocabulaire Démocratique' },
  { path: '/formation/espagnol/civilisation/module2/vocabulaire', component: Module2VocabularyPage, title: 'Vocabulaire Féminin' },
  { path: '/formation/espagnol/civilisation/module3/vocabulaire', component: Module3VocabularyPage, title: 'Vocabulaire Éducatif' },
  { path: '/formation/espagnol/civilisation/module6/vocabulaire', component: Module6VocabularyPage, title: 'Vocabulaire Économique et Social' },
  { path: '/formation/espagnol/civilisation/module7/vocabulaire', component: Module7VocabularyPage, title: 'Vocabulaire Environnemental' },
  { path: '/formation/espagnol/civilisation/module8/vocabulaire', component: Module8VocabularyPage, title: 'Vocabulaire Historique' },
  { path: '/formation/espagnol/civilisation/module10/vocabulaire', component: Module10VocabularyPage, title: 'Vocabulaire Géopolitique Chinois' },
  { path: '/formation/espagnol/civilisation/module11/vocabulaire', component: Module11VocabularyPage, title: 'Vocabulaire Énergétique Espagnol' },
  { path: '/formation/espagnol/civilisation/module12/vocabulaire', component: Module12VocabularyPage, title: 'Vocabulaire des Inégalités' },
  { path: '/formation/espagnol/civilisation/module4', component: Module4MigracionesDesplazamientosPage, title: 'Migraciones y Desplazamientos' },
  { path: '/formation/espagnol/civilisation/module4/vocabulaire', component: Module4MigracionesDesplazamientosPage, title: 'Vocabulaire Migratoire' },
  { path: '/formation/espagnol/civilisation/module5', component: Module5ViolenciaNarcotraficoPage, title: 'Violencia y Narcotráfico' },
  { path: '/formation/espagnol/civilisation/module5/vocabulaire', component: Module5ViolenciaNarcotraficoPage, title: 'Vocabulaire Violence' },
  { path: '/formation/espagnol/civilisation/module7', component: Module7MedioAmbienteClimaPage, title: 'Medio Ambiente y Clima' },
  { path: '/formation/espagnol/civilisation/module9', component: Module10IATransformacionDigitalPage, title: 'Inteligencia Artificial y Transformación Digital' },
  { path: '/formation/espagnol/civilisation/module9/vocabulaire', component: Module10IATransformacionDigitalPage, title: 'Vocabulaire IA' },
  { path: '/formation/espagnol/civilisation/module10', component: Module10ChinaGeopoliticaPage, title: 'China y Geopolítica Global' },
  { path: '/formation/espagnol/methodologie', component: FormationEspagnolMethodologiePage, title: 'Méthodologie des Épreuves Espagnol' },
  { path: '/formation/allemand', component: FormationAllemandPage, title: 'Formation Allemand' },
  { path: '/formation/allemand/grammaire', component: FormationAllemandGrammairePage, title: 'Grammaire Allemande' },
  { path: '/formation/allemand/vocabulaire', component: lazy(() => import('../pages/formation/allemand/FormationAllemandVocabulairePage')), title: 'Vocabulaire Allemand' },
  { path: '/formation/allemand/civilisation', component: FormationAllemandCivilisationPage, title: 'Civilisation Allemande' },
  { path: '/formation/allemand/epreuves', component: ReussirEpreuvesAllemandePage, title: 'Réussir les épreuves d\'allemand - Allemand' },
  { path: '/formation/allemand/politik', component: PolitikAllemandeMinimalPage, title: 'Politik in Deutschland - Allemand' },
  { path: '/formation/allemand/demographie', component: DemographieAllemandePage, title: 'Demographie in Deutschland - Allemand' },
  { path: '/formation/allemand/ecologie', component: EcologieAllemandePage, title: 'Ökologie und Umwelt in Deutschland - Allemand' },
  { path: '/formation/allemand/geopolitique', component: GeopolitiqueEuropeennePage, title: 'Europäische Geopolitik und Verteidigung - Allemand' },
  { path: '/formation/allemand/industrie', component: IndustrieAllemandePage, title: 'Deutsche Industrie und Wirtschaft - Allemand' },
  { path: '/formation/allemand/culture', component: CultureIdentiteAllemandePage, title: 'Deutsche Kultur und Identität - Allemand' },
  { path: '/formation/allemand/education', component: EducationAllemandePage, title: 'Das deutsche Bildungssystem - Allemand' },
  { path: '/formation/allemand/technologie', component: TechnologieInnovationAllemandePage, title: 'Technologie und Innovation in Deutschland - Allemand' },
  { path: '/formation/allemand/femmes', component: FemmesEgaliteAllemandePage, title: 'Frauen und Gleichstellung in Deutschland - Allemand' },
  { path: '/formation/allemand/geschichte', component: HistoireMemoireAllemandePage, title: 'Geschichte und Erinnerungskultur in Deutschland - Allemand' },
  { path: '/formation/allemand/epreuves', component: ReussirEpreuvesAllemandePage, title: 'Réussir les épreuves d\'allemand - Allemand' },
  { path: '/formation/allemand/vocabulaire-politique', component: VocabulairePolitiqueFlashcardsPage, title: 'Vocabulaire Politique - Flashcards' },
  { path: '/formation/allemand/vocabulaire-demographie', component: VocabulaireDemographieFlashcardsPage, title: 'Vocabulaire Démographie - Flashcards' },
  { path: '/formation/allemand/vocabulaire-ecologie', component: VocabulaireEcologieFlashcardsPage, title: 'Vocabulaire Écologie - Flashcards' },
  { path: '/formation/allemand/vocabulaire-geopolitique', component: VocabulaireGeopolitiqueFlashcardsPage, title: 'Vocabulaire Géopolitique - Flashcards' },
  { path: '/formation/allemand/vocabulaire-wirtschaft', component: VocabulaireWirtschaftFlashcardsPage, title: 'Vocabulaire Économie - Flashcards' },
  { path: '/formation/allemand/vocabulaire-kultur', component: VocabulaireKulturFlashcardsPage, title: 'Vocabulaire Culture - Flashcards' },
  { path: '/formation/allemand/vocabulaire-bildung', component: VocabulaireBildungFlashcardsPage, title: 'Vocabulaire Éducation - Flashcards' },
  { path: '/formation/allemand/vocabulaire-innovation', component: VocabulaireInnovationFlashcardsPage, title: 'Vocabulaire Innovation - Flashcards' },
  { path: '/formation/allemand/vocabulaire-frauen', component: VocabulaireFrauenFlashcardsPage, title: 'Vocabulaire Femmes - Flashcards' },
  { path: '/formation/allemand/vocabulaire-geschichte', component: VocabulaireGeschichteFlashcardsPage, title: 'Vocabulaire Histoire - Flashcards' },
  { path: '/formation/allemand-declinaisons', component: DeclinaisonsPage, title: 'Les Déclinaisons de l\'Adjectif' },
  { path: '/formation/allemand-relatives', component: RelativePage, title: 'La Proposition Relative' },
  { path: '/formation/allemand-passif', component: PassifPage, title: 'Le Passif en Allemand' },
  { path: '/formation/allemand-structure', component: StructurePage, title: 'Structure de la Phrase' },
  { path: '/formation/allemand-recurrents', component: RecurrentsPage, title: 'Points de Grammaire Récurrents' },
  { path: '/formation/allemand-verbes', component: VerbIrregulierPage, title: 'Verbes Irréguliers Allemands' },

  // Formation Synthèse de Texte
  { path: '/formation/synthese-texte', component: FormationSyntheseTextePage, title: 'Formation Synthèse de Texte ECG' },
  { path: '/formation/synthese-texte/overview', component: SyntheseTexteOverviewPage, title: 'Guide Complet Synthèse de Texte' },
  { path: '/formation/synthese-texte/methode', component: MethodologiePage, title: 'Méthode de l\'Épreuve de Synthèse' },
  { path: '/formation/synthese-texte/travail-annuel', component: TravailAnnuelPage, title: 'Travail Annuel Synthèse de Texte' },
  { path: '/formation/synthese-texte/ressources', component: RessourcesPage, title: 'Ressources & Exercices Synthèse' },
  { path: '/formation/culture-generale', component: FormationCultureGeneralePage, title: 'Formation Culture Générale' },
  { path: '/formation/geopolitique', component: FormationGeopolitiquePage, title: 'Formation Géopolitique' },
  { path: '/formation/geopolitique/premiere-annee', component: GeopolitiquePremiereAnneePage, title: 'Géopolitique - Première Année' },
  { path: '/formation/geopolitique/deuxieme-annee', component: GeopolitiqueDeuxiemeAnneePage, title: 'Géopolitique - Deuxième Année' },
  { path: '/formation/geopolitique/sujets-probables', component: GeopolitiqueSujetsProbablesPage, title: 'Pronostics Géopolitiques 2025' },
  { path: '/formation/geopolitique/continent-africain', component: ContinentAfricainPage, title: 'Continent Africain' },
  { path: '/formation/geopolitique/continent-africain/chronologie', component: ContinentAfricainChronologiePage, title: 'Chronologie - Continent Africain' },
  { path: '/formation/geopolitique/proche-moyen-orient', component: ProcheMoyenOrientPage, title: 'Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/proche-moyen-orient/chronologie', component: ProcheMoyenOrientChronologiePage, title: 'Chronologie - Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/chronologie-europe', component: ChronologieEuropePage, title: 'Chronologie de l\'Europe' },
  { path: '/formation/geopolitique/union-europeenne', component: UnionEuropeennePageSimple, title: 'Union européenne' },
  { path: '/formation/geopolitique/amerique-latine', component: AmeriqueLatinePage, title: 'Amérique latine' },
  { path: '/formation/geopolitique/amerique-latine/chronologie', component: AmeriqueLatineChronologiePage, title: 'Chronologie - Amérique latine' },
  { path: '/formation/geopolitique/asie/chronologie', component: AsieChronologiePage, title: 'Chronologie - Asie' },
  { path: '/formation/geopolitique/amerique-nord/chronologie', component: AmeriqueNordChronologiePage, title: 'Chronologie - Amérique du Nord' },
  { path: '/formation/geopolitique/sciences-technologies', component: SciencesTechnologiesPage, title: 'Sciences et Technologies dans le Monde Contemporain' },
  { path: '/formation/geopolitique/etudes-de-cas', component: EtudesDeCasPage, title: 'Études de cas essentielles' },
  { path: '/formation/geopolitique/etudes-de-cas/migrations', component: MigrationsPage, title: 'Migrations internationales' },
  { path: '/formation/geopolitique/etudes-de-cas/transports', component: TransportsPage, title: 'Réseaux de transport mondiaux' },
  { path: '/formation/geopolitique/etudes-de-cas/energie', component: EnergiePage, title: 'Géopolitique énergétique' },
  { path: '/formation/geopolitique/etudes-de-cas/tourisme', component: TourismePage, title: 'Industrie touristique mondiale' },
  { path: '/formation/geopolitique/etudes-de-cas/metaux', component: MetauxPage, title: 'Métaux et ressources critiques' },
  { path: '/formation/geopolitique/etudes-de-cas/foret', component: ForetPage, title: 'Ressources forestières mondiales' },
  { path: '/formation/geopolitique/etudes-de-cas/agroalimentaire', component: AgroalimentairePage, title: 'Système agroalimentaire mondial' },
  { path: '/formation/geopolitique/etudes-de-cas/eau', component: EauPage, title: 'Ressources hydriques mondiales' },
  { path: '/formation/geopolitique/etudes-de-cas/economie', component: EconomiePage, title: 'Économie mondiale' },
  { path: '/formation/geopolitique/etudes-de-cas/russie', component: RussiePage, title: 'Russie - Puissance énergétique' },
  { path: '/formation/geopolitique/etudes-de-cas/chine', component: ChinePage, title: 'Chine - Puissance émergente' },
  { path: '/formation/geopolitique/etudes-de-cas/crises', component: CrisesPage, title: 'Crises mondiales contemporaines' },
  { path: '/formation/geopolitique/etudes-de-cas/urbanisation', component: UrbanisationPage, title: 'Urbanisation mondiale' },
  { path: '/formation/geopolitique/etudes-de-cas/puissances', component: PuissancesPage, title: 'Puissances mondiales' },
  { path: '/formation/geopolitique/etudes-de-cas/developpement-durable', component: DeveloppementDurablePage, title: 'Développement durable' },
  { path: '/formation/geopolitique/etudes-de-cas/inegalites', component: InegalitesPage, title: 'Inégalités sociales au monde' },
  { path: '/formation/geopolitique/etudes-de-cas/frontieres', component: FrontieresPage, title: 'Géopolitique des frontières' },
  { path: '/formation/geopolitique/etudes-de-cas/criminalite', component: CriminalitePage, title: 'Criminalité organisée mondiale' },
  { path: '/formation/geopolitique/chronologies', component: ChronologiesPage, title: 'Chronologies géopolitiques' },
  { path: '/formation/geopolitique/flashcards', component: GeopolitiquesFlashcardsPage, title: 'Flashcards Géopolitiques' },
  { path: '/formation/geopolitique/references', component: GeopolitiquesReferencesPage, title: 'Références Géopolitiques' },
  { path: '/formation/geopolitique/methodologie', component: GeopolitiquesMethodologiePage, title: 'Méthodologie Géopolitique' },
  { path: '/formation/geopolitique/methodologie/dissertation', component: MethodologieDissertationPage, title: 'Méthodologie Dissertation' },
  { path: '/formation/anglais/civilisation', component: CivilisationOverviewPage, title: 'English Civilization - Current Affairs' },
  { path: '/formation/anglais/civilisation/environment', component: EnvironmentPage, title: 'Environment and Ecology - English Civilization' },
  { path: '/formation/anglais/civilisation/politics', component: PoliticsPage, title: 'Politics (US & UK) - English Civilization' },
  { path: '/formation/anglais/civilisation/geopolitics', component: GeopoliticsPage, title: 'Geopolitics and International Relations - English Civilization' },
  { path: '/formation/anglais/civilisation/ai-technology', component: AITechnologyPage, title: 'Artificial Intelligence and Technology - English Civilization' },
  { path: '/formation/anglais/civilisation/economy', component: EconomyPage, title: 'Economy and Globalization - English Civilization' },
  { path: '/formation/anglais/civilisation/health', component: HealthPage, title: 'Health and Healthcare Systems - English Civilization' },
  { path: '/formation/anglais/civilisation/education', component: EducationPage, title: 'Education and Culture Wars - English Civilization' },
  { path: '/formation/anglais/civilisation/media', component: MediaPage, title: 'Media and Social Networks - English Civilization' },
  { path: '/formation/anglais/civilisation/justice', component: JusticePage, title: 'Justice and the Rule of Law - English Civilization' },
  { path: '/formation/anglais/civilisation/inequalities', component: InequalitiesPage, title: 'Social and Racial Inequalities - English Civilization' },
  { path: '/formation/anglais/civilisation/civil-rights', component: CivilRightsPage, title: 'Civil Rights and Social Movements - English Civilization' },
  { path: '/formation/anglais/civilisation/brexit', component: BrexitPage, title: 'Brexit and its Aftermath - English Civilization' },
  { path: '/formation/anglais/civilisation/commonwealth', component: CommonwealthPage, title: 'The Commonwealth and Post-Colonial Legacy - English Civilization' },
  { path: '/formation/anglais/civilisation/civil-religion', component: CivilReligionPage, title: 'Civil Religion and National Identity - English Civilization' },
  { path: '/formation/anglais/civilisation/immigration', component: ImmigrationPage, title: 'Immigration and Border Control - English Civilization' },
  { path: '/formation/anglais/civilisation/contemporary-crises', component: ContemporaryCrisesPage, title: 'Major Contemporary Crises - English Civilization' },
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

  // Nouveaux modules de 2ème année
  {
    path: '/formation/maths-premiere-appliquees',
    component: lazy(() => import('../pages/formation/math/MathsAppliquees/MathsAppliqueesPage')),
    title: 'Maths Appliquées - 1ère année',
    protected: true
  },
  {
    path: '/formation/maths-premiere-approfondies',
    component: lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesPage')),
    title: 'Maths Approfondies - 1ère année',
    protected: true
  },
  {
    path: '/formation/maths-deuxieme-appliquees',
    component: lazy(() => import('../pages/formation/math/MathsAppliquees2eAnneePage')),
    title: 'Maths Appliquées - 2ème année',
    protected: true
  },
  {
    path: '/formation/maths-deuxieme-approfondies',
    component: lazy(() => import('../pages/formation/math/MathsApprofondies2eAnneePage')),
    title: 'Maths Approfondies - 2ème année',
    protected: true
  },
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
  { path: '/formation/math/premiere-vers-deuxieme', component: PremiereVersDeuxiemePage, title: 'Première → Deuxième année', protected: false },
  { path: '/formation/math/premiere-vers-deuxieme/module-1-applications-lineaires-exercices', component: Module1ApplicationsLineairesExercicesPage, title: 'Module 1 - Applications linéaires - Exercices', protected: false },
  
  // Page d'accueil des chapitres libres
  { path: '/chapitres-libres', component: ChapitresLibresPage, title: 'Chapitres Libres d\'Accès', protected: false },
  
  // Chapitres libres d'accès issus de Maths Approfondies
  { path: '/chapitres-libres/suites-cours', component: MathsSuitesPage, title: 'Cours - Suites numériques', protected: false },
  { path: '/chapitres-libres/suites-exercices', component: Chapitre4SuitesExercicesPage, title: 'Exercices - Suites numériques', protected: false },
  { path: '/chapitres-libres/suites-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Suites numériques', protected: false },
  { path: '/chapitres-libres/series-cours', component: MathsSeriesPage, title: 'Cours - Séries numériques', protected: false },
  { path: '/chapitres-libres/series-exercices', component: Chapitre13SeriesExercicesPage, title: 'Exercices - Séries numériques', protected: false },
  { path: '/chapitres-libres/series-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Séries numériques', protected: false },
  { path: '/chapitres-libres/integrales-impropres-cours', component: MathsIntegrationIntervallePage, title: 'Cours - Intégrales impropres', protected: false },
  { path: '/chapitres-libres/integrales-impropres-exercices', component: Chapitre15IntegralesImpropresExercicesPage, title: 'Exercices - Intégrales impropres', protected: false },
  { path: '/chapitres-libres/integrales-impropres-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Intégrales impropres', protected: false },

  { path: '/formation/maths-elements-de-logique', component: MathsLogiquePage, title: 'Chapitre 1 : Logique & raisonnement fondamentaux' },
  { path: '/formation/maths-ensembles', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  { path: '/formation/maths-ensembles-et-applications', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux', component: MathsEntiersPage, title: 'Maths - Sommes, produits & coefficients binomiaux' },
  { path: '/formation/maths-suites', component: MathsSuitesPage, title: 'Maths - Suites numériques' },
  { path: '/formation/maths-suites-numeriques', component: MathsSuitesPage, title: 'Maths - Suites numériques' },
  { path: '/formation/maths-fonctions', component: MathsFonctionsPage, title: 'Maths - Fonctions réelles — continuité' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle', component: MathsFonctionsPage, title: 'Maths - Fonctions d\'une variable réelle' },
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
  { path: '/formation/maths-endomorphismes-matrices-avancees-exercices', component: Chapitre2EndomorphismesExercicesPage, title: 'Exercices - Chapitre 2 : Éléments propres et réduction des endomorphismes et matrices carrées' },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux-exercices', component: Chapitre3SommesProduitsExercicesPage, title: 'Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux' },
  { path: '/formation/maths-suites-numeriques-exercices', component: Chapitre4SuitesExercicesPage, title: 'Exercices - Chapitre 4 : Suites numériques' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle-exercices', component: Chapitre5FonctionsExercicesPage, title: 'Exercices - Chapitre 5 : Fonctions d\'une variable réelle' },
  { path: '/formation/maths-derivation-exercices', component: Chapitre6DerivationExercicesPage, title: 'Exercices - Chapitre 6 : Dérivation' },
  { path: '/formation/maths-variables-aleatoires-densite-exercices', component: Chapitre6VariablesAleatoiresDensiteExercicesPage, title: 'Exercices - Chapitre 6 : Variables aléatoires à densité' },
  { path: '/formation/maths-integration-sur-un-segment-exercices', component: Chapitre7IntegrationExercicesPage, title: 'Exercices - Chapitre 7 : Intégration sur un segment' },
  { path: '/formation/maths-polynomes-exercices', component: Chapitre8PolynomesExercicesPage, title: 'Exercices - Chapitre 8 : Polynômes' },
  { path: '/formation/maths-complements-algebre-lineaire-exercices', component: Chapitre1ComplementsAlgebreLineaireExercicesPage, title: 'Exercices - Chapitre 1 : Compléments d\'algèbre linéaire' },
  { path: '/formation/maths-matrices-espaces-vectoriels-exercices', component: Chapitre9MatricesExercicesPage, title: 'Exercices - Chapitre 9 : Matrices & espaces vectoriels' },
  { path: '/formation/maths-algebre-bilineaire-exercices', component: Chapitre3AlgebreBilineaireExercicesPage, title: 'Exercices - Chapitre 3 : Algèbre bilinéaire' },
  { path: '/formation/maths-algebre-bilineaire-espaces-euclidiens-exercices', component: Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage, title: 'Exercices - Chapitre 9 : Algèbre bilinéaire et espaces euclidiens' },
  { path: '/formation/maths-probabilites-conditionnement-exercices', component: Chapitre10ProbabilitesExercicesPage, title: 'Exercices - Chapitre 10 : Probabilités & conditionnement' },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles-exercices', component: Chapitre11ApplicationsLineairesExercicesPage, title: 'Exercices - Chapitre 11 : Applications linéaires & structures vectorielles' },
  { path: '/formation/maths-optimisation-multivariee-avancee-exercices', component: Chapitre11OptimisationMultivarieeAvanceeExercicesPage, title: 'Exercices - Chapitre 11 : Optimisation multivariée avancée' },
  { path: '/formation/maths-fonctions-multivariees-calcul-differentiel-exercices', component: Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage, title: 'Exercices - Chapitre 4 : Fonctions multivariées et calcul différentiel' },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-exercices', component: Chapitre12ComparaisonExercicesPage, title: 'Exercices - Chapitre 12 : Comparaison — négligeabilité & équivalence' },
  { path: '/formation/maths-series-numeriques-exercices', component: Chapitre13SeriesExercicesPage, title: 'Exercices - Chapitre 13 : Séries numériques' },
  { path: '/formation/maths-developpements-limites-formule-de-taylor-exercices', component: Chapitre14DeveloppementsExercicesPage, title: 'Exercices - Chapitre 14 : Développements limités & formule de Taylor' },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence-exercices', component: Chapitre15IntegralesImpropresExercicesPage, title: 'Exercices - Chapitre 15 : Intégrales impropres & critères de convergence' },
  { path: '/formation/maths-espaces-probabilises-conditionnement-exercices', component: Chapitre16EspacesProbabilisesExercicesPage, title: 'Exercices - Chapitre 16 : Espaces probabilisés & conditionnement' },
  { path: '/formation/maths-variables-aleatoires-discretes-lois-exercices', component: Chapitre17VariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 17 : Variables aléatoires discrètes & lois' },
  { path: '/formation/maths-convergences-theoremes-limites-exercices', component: Chapitre18ConvergencesExercicesPage, title: 'Exercices - Chapitre 18 : Convergences & théorèmes limites' },
  { path: '/formation/maths-reduction-matrices-symetriques-exercices', component: Chapitre10ReductionMatricesSymetriquesExercicesPage, title: 'Exercices - Chapitre 10 : Réduction des endomorphismes et matrices symétriques', protected: true },
  { path: '/formation/maths-convergences-approximations-exercices', component: Chapitre12ConvergencesApproximationsExercicesPage, title: 'Exercices - Chapitre 12 : Convergences et approximations', protected: true },
  { path: '/formation/maths-intervalles-confiance-exercices', component: Chapitre18EstimationStatistiqueAvanceeExercicesPage, title: 'Exercices - Chapitre 18 : Intervalles de confiance', protected: true },
  { path: '/formation/maths-theorie-estimation-statistique-exercices', component: Chapitre14TheorieEstimationStatistiqueExercicesPage, title: 'Exercices - Chapitre 14 : Théorie de l\'estimation statistique', protected: true },
  { path: '/formation/maths-complements-variables-aleatoires-exercices', component: Chapitre5ComplementsVariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 5 : Compléments sur les variables aléatoires', protected: true },

  // Maths Appliquées - Nouveaux chapitres
  { path: '/formation/maths-equations-differentielles-applications-concretes', component: Chapitre19EquationsDifferentiellesCoursPage, title: 'Chapitre 19 : Équations différentielles avec applications concrètes', protected: true },
  { path: '/formation/maths-equations-differentielles-applications-concretes-exercices', component: Chapitre19EquationsDifferentiellesExercicesPage, title: 'Exercices - Chapitre 19 : Équations différentielles avec applications concrètes', protected: true },
  { path: '/formation/maths-equations-differentielles-applications-concretes-quiz', component: Chapitre19EquationsDifferentiellesQuizPage, title: 'Quiz - Chapitre 19 : Équations différentielles avec applications concrètes', protected: true },
  { path: '/formation/maths-chaines-de-markov', component: Chapitre21ChainesDeMarkovCoursPage, title: 'Chapitre 21 : Les chaînes de Markov', protected: true },
  { path: '/formation/maths-chaines-de-markov-exercices', component: Chapitre21ChainesDeMarkovExercicesPage, title: 'Exercices - Chapitre 21 : Les chaînes de Markov', protected: true },
  { path: '/formation/maths-chaines-de-markov-quiz', component: Chapitre21ChainesDeMarkovQuizPage, title: 'Quiz - Chapitre 21 : Les chaînes de Markov', protected: true },
  { path: '/formation/maths-theorie-des-graphes-approfondie', component: Chapitre22TheorieDesGraphesApprofondieCoursPage, title: 'Chapitre 22 : La théorie des graphes approfondie', protected: true },
  { path: '/formation/maths-theorie-des-graphes-approfondie-exercices', component: Chapitre22TheorieDesGraphesApprofondieExercicesPage, title: 'Exercices - Chapitre 22 : La théorie des graphes approfondie', protected: true },
  { path: '/formation/maths-theorie-des-graphes-approfondie-quiz', component: Chapitre22TheorieDesGraphesApprofondieQuizPage, title: 'Quiz - Chapitre 22 : La théorie des graphes approfondie', protected: true },
  { path: '/formation/maths-statistiques-descriptives', component: Chapitre23StatistiquesDescriptivesCoursPage, title: 'Chapitre 23 : Les statistiques descriptives', protected: true },
  { path: '/formation/maths-statistiques-descriptives-exercices', component: Chapitre23StatistiquesDescriptivesExercicesPage, title: 'Exercices - Chapitre 23 : Les statistiques descriptives', protected: true },
  { path: '/formation/maths-statistiques-descriptives-quiz', component: Chapitre23StatistiquesDescriptivesQuizPage, title: 'Quiz - Chapitre 23 : Les statistiques descriptives', protected: true },

  // Offres pages
  { path: '/offre/coaching-python', component: CoachingPythonPage, title: 'Coaching Python' },
  { path: '/offre/coaching-maths', component: CoachingMathsPage, title: 'Coaching Maths' },
  { path: '/offre/organisation-ete', component: OrganisationEtePage, title: 'Organisation Été' },
  { path: '/offre/preparation-cube', component: PreparationCubePage, title: 'Préparation Cube' },
  { path: '/offre/gratuite', component: OffreGratuitePage, title: 'Offre Gratuite - Sessions Live' },
  
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
    protected: true 
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
    protected: false
  },
  {
    path: '/formation/maths-approfondies',
    component: lazy(() => import('@/pages/formation/math/MathsApprofondies/MathsApprofondiesPage')),
    protected: false
  },
  {
    path: '/formation/maths-methodologie',
    component: lazy(() => import('@/pages/formation/math/MathsMethodologiePage')),
    protected: true
  },
  {
    path: '/formation/maths-appliquees',
    component: lazy(() => import('@/pages/formation/math/MathsAppliquees/MathsAppliqueesPage')),
    protected: false
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
