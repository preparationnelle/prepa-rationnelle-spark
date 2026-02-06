import { ComponentType, lazy } from 'react';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccesRestreintPage = lazy(() => import('../pages/AccesRestreintPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AdminLeadsPage = lazy(() => import('../pages/AdminLeadsPage'));
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
const FormationAnglaisVocabulairePage = lazy(() => import('../pages/formation/anglais/FormationAnglaisVocabulairePage'));
const FormationAnglaisGrammairePage = lazy(() => import('../pages/formation/anglais/FormationAnglaisGrammairePage'));
const AnglaisTempsVerbauxPage = lazy(() => import('../pages/formation/anglais/grammaire/TempsVerbauxPage'));
const AnglaisTempsVerbauxExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/TempsVerbauxExercicesPage'));
const AnglaisConditionnelsPage = lazy(() => import('../pages/formation/anglais/grammaire/ConditionnelsPage'));
const AnglaisConditionnelsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ConditionnelsExercicesPage'));
const AnglaisVoixPassivesPage = lazy(() => import('../pages/formation/anglais/grammaire/VoixPassivesPage'));
const AnglaisVoixPassivesExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/VoixPassivesExercicesPage'));
const AnglaisDiscoursIndirectPage = lazy(() => import('../pages/formation/anglais/grammaire/DiscoursIndirectPage'));
const AnglaisDiscoursIndirectExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/DiscoursIndirectExercicesPage'));
const AnglaisModauxPage = lazy(() => import('../pages/formation/anglais/grammaire/ModauxPage'));
const AnglaisModauxExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ModauxExercicesPage'));
const AnglaisPrepositionsPhrasalVerbsPage = lazy(() => import('../pages/formation/anglais/grammaire/PrepositionsPhrasalVerbsPage'));
const AnglaisPrepositionsPhrasalVerbsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/PrepositionsPhrasalVerbsExercicesPage'));
const AnglaisArticlesDeterminantsPage = lazy(() => import('../pages/formation/anglais/grammaire/ArticlesDeterminantsPage'));
const AnglaisArticlesDeterminantsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ArticlesDeterminantsExercicesPage'));
const AnglaisRelativesExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/RelativesExercicesPage'));
const AnglaisGerondifInfinitifExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/GerondifInfinitifExercicesPage'));
const AnglaisRelativesPage = lazy(() => import('../pages/formation/anglais/grammaire/RelativesPage'));
const AnglaisGerondifInfinitifPage = lazy(() => import('../pages/formation/anglais/grammaire/GerondifInfinitifPage'));
const AnglaisComparatifsSuperlatifsPage = lazy(() => import('../pages/formation/anglais/grammaire/ComparatifsSuperlatifsPage'));
const AnglaisComparatifsSuperlatifsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ComparatifsSuperlatifsExercicesPage'));
const AnglaisQuestionsInterrogatifsPage = lazy(() => import('../pages/formation/anglais/grammaire/QuestionsInterrogatifsPage'));
const AnglaisQuestionsInterrogatifsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/QuestionsInterrogatifsExercicesPage'));
const AnglaisExpressionsTempsPage = lazy(() => import('../pages/formation/anglais/grammaire/ExpressionsTempsPage'));
const AnglaisExpressionsTempsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ExpressionsTempsExercicesPage'));
const AnglaisConcordanceTempsPage = lazy(() => import('../pages/formation/anglais/grammaire/ConcordanceTempsPage'));
const AnglaisConcordanceTempsExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ConcordanceTempsExercicesPage'));
const AnglaisQuantifieursPage = lazy(() => import('../pages/formation/anglais/grammaire/QuantifieursPage'));
const AnglaisQuantifieursExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/QuantifieursExercicesPage'));
const AnglaisSubjunctifPage = lazy(() => import('../pages/formation/anglais/grammaire/SubjunctifPage'));
const AnglaisSubjunctifExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/SubjunctifExercicesPage'));
const AnglaisInversionsEmphasePage = lazy(() => import('../pages/formation/anglais/grammaire/InversionsEmphasePage'));
const AnglaisInversionsEmphaseExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/InversionsEmphaseExercicesPage'));
const AnglaisConnecteursLogiquesPage = lazy(() => import('../pages/formation/anglais/grammaire/ConnecteursLogiquesPage'));
const AnglaisConnecteursLogiquesExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/ConnecteursLogiquesExercicesPage'));
const AnglaisVerbesIrreguliersPage = lazy(() => import('../pages/formation/anglais/grammaire/VerbesIrreguliersPage'));
const AnglaisVerbesIrreguliersExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/VerbesIrreguliersExercicesPage'));
const AnglaisCausativesPage = lazy(() => import('../pages/formation/anglais/grammaire/CausativesPage'));
const AnglaisCausativesExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/CausativesExercicesPage'));
const AnglaisNuancesLexicalesPage = lazy(() => import('../pages/formation/anglais/grammaire/NuancesLexicalesPage'));
const AnglaisNuancesLexicalesExercicesPage = lazy(() => import('../pages/formation/anglais/grammaire/NuancesLexicalesExercicesPage'));
const FormationAnglaisCivilisationPage = lazy(() => import('../pages/formation/anglais/FormationAnglaisCivilisationPage'));
const AnglaisCivilisationOverviewPage = lazy(() => import('../pages/formation/anglais/CivilisationOverviewPage'));
const AnglaisEnvironmentPage = lazy(() => import('../pages/formation/anglais/civilisation/EnvironmentPage'));
const AnglaisEnvironmentVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EnvironmentVocabularyPage'));
const AnglaisPoliticsPage = lazy(() => import('../pages/formation/anglais/civilisation/PoliticsPage'));
const AnglaisPoliticsVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/PoliticsVocabularyPage'));
const AnglaisGeopoliticsVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/GeopoliticsVocabularyPage'));
const AnglaisAITechnologyVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/AITechnologyVocabularyPage'));
const AnglaisLaborVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/LaborVocabularyPage'));
const AnglaisEconomyVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EconomyVocabularyPage'));
const AnglaisHealthVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthVocabularyPage'));
const AnglaisPolarizationVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/PolarizationVocabularyPage'));
const AnglaisEducationVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationVocabularyPage'));
const AnglaisMediaVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaVocabularyPage'));
const AnglaisJusticeVocabularyPage = lazy(() => import('../pages/formation/anglais/civilisation/JusticeVocabularyPage'));
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
const AnglaisHealthSystemsPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthSystemsPage'));
const AnglaisEducationPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationPage'));
const AnglaisMediaPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaPage'));
const AnglaisMediaSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/MediaSampleEssaysPage'));
const AnglaisPolarizationSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/PolarizationSampleEssaysPage'));
const AnglaisLaborSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/LaborSampleEssaysPage'));
const AnglaisBrexitSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitSampleEssaysPage'));
const AnglaisGeopoliticsSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/GeopoliticsSampleEssaysPage'));
const AnglaisImmigrationSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationSampleEssaysPage'));
const AnglaisEducationSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/EducationSampleEssaysPage'));
const AnglaisCivilRightsSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsSampleEssaysPage'));
const AnglaisEconomySampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/EconomySampleEssaysPage'));
const AnglaisHealthSystemsSampleEssaysPage = lazy(() => import('../pages/formation/anglais/civilisation/HealthSystemsSampleEssaysPage'));
const AnglaisLaborPage = lazy(() => import('../pages/formation/anglais/civilisation/LaborPage'));
const AnglaisPolarizationPage = lazy(() => import('../pages/formation/anglais/civilisation/PolarizationPage'));
const AnglaisJusticePage = lazy(() => import('../pages/formation/anglais/civilisation/JusticePage'));
const AnglaisCivilRightsPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsPage'));
const AnglaisBrexitPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitPage'));
const AnglaisCommonwealthPage = lazy(() => import('../pages/formation/anglais/civilisation/CommonwealthPage'));
const AnglaisCivilReligionPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilReligionPage'));
const AnglaisImmigrationPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationPage'));
const AnglaisContemporaryCrisesPage = lazy(() => import('../pages/formation/anglais/civilisation/ContemporaryCrisesPage'));

const MethodologieAnglaisPage = lazy(() => import('../pages/formation/anglais/MethodologieAnglaisPage'));
const AnglaisCollesMethodologiePage = lazy(() => import('../pages/formation/anglais/methodologie/CollesAnglaisPage'));
const AnglaisSyntheseQuestion1Page = lazy(() => import('../pages/formation/anglais/methodologie/SyntheseQuestion1Page'));
const AnglaisEssaiQuestion2Page = lazy(() => import('../pages/formation/anglais/methodologie/EssaiQuestion2Page'));

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
const Module2MujeresViolenciaGeneroPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module2MujeresViolenciaGeneroPage'));
const Module4MigracionesFronterasPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module4MigracionesFronterasPage'));
const Module5NarcotráficoSeguridadPage = lazy(() => import('../pages/formation/espagnol/civilisation/Module5NarcotráficoSeguridadPage'));
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
const EcologieSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/EcologieSampleEssaysPage'));
const PolitikSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/PolitikSampleEssaysPage'));
const DemographieSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/DemographieSampleEssaysPage'));
const EducationSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/EducationSampleEssaysPage'));
const CultureSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/CultureSampleEssaysPage'));
const GeopolitiqueSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/GeopolitiqueSampleEssaysPage'));
const TechnologieSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/TechnologieSampleEssaysPage'));
const EconomieSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/EconomieSampleEssaysPage'));
const FemmesSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/FemmesSampleEssaysPage'));
const HistoireSampleEssaysPage = lazy(() => import('../pages/formation/allemand/civilisation/HistoireSampleEssaysPage'));
const PolitikAllemandePage = lazy(() => import('../pages/formation/allemand/PolitikAllemandePage'));
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
const EpreuvesOralesPage = lazy(() => import('../pages/formation/allemand/EpreuvesOralesPage'));
const EpreuvesOralesExercicesPage = lazy(() => import('../pages/formation/allemand/EpreuvesOralesExercicesPage'));
const EpreuvesEcritesEssaiPage = lazy(() => import('../pages/formation/allemand/EpreuvesEcritesEssaiPage'));
const EpreuvesEcritesSynthesePage = lazy(() => import('../pages/formation/allemand/EpreuvesEcritesSynthesePage'));
const GrammaireAvanceePage = lazy(() => import('../pages/formation/allemand/GrammaireAvanceePage'));
const MethodologieTravailPage = lazy(() => import('../pages/formation/allemand/MethodologieTravailPage'));
const ReussirSyntheseExercicesPage = lazy(() => import('../pages/formation/allemand/ReussirSyntheseExercicesPage'));
const ReussirEssaiExercicesPage = lazy(() => import('../pages/formation/allemand/ReussirEssaiExercicesPage'));
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

const VerbesAParticulePage = lazy(() => import('../pages/formation/allemand/VerbesAParticulePage'));
const TempsComposesPage = lazy(() => import('../pages/formation/allemand/TempsComposesPage'));
const VerbesModauxComplexesPage = lazy(() => import('../pages/formation/allemand/VerbesModauxComplexesPage'));
const PositionV2Page = lazy(() => import('../pages/formation/allemand/PositionV2Page'));
const AuxiliaireParfaitPage = lazy(() => import('../pages/formation/allemand/AuxiliaireParfaitPage'));
const GenetifPage = lazy(() => import('../pages/formation/allemand/GenetifPage'));
const NegationPage = lazy(() => import('../pages/formation/allemand/NegationPage'));
const PhrasesInterrogativesPage = lazy(() => import('../pages/formation/allemand/PhrasesInterrogativesPage'));
const ComparatifSuperlatifPage = lazy(() => import('../pages/formation/allemand/ComparatifSuperlatifPage'));
const DeclinaisonsExercicesPage = lazy(() => import('../pages/formation/allemand/DeclinaisonsExercicesPage'));
const RelativeExercicesPage = lazy(() => import('../pages/formation/allemand/RelativeExercicesPage'));
const StructureExercicesPage = lazy(() => import('../pages/formation/allemand/StructureExercicesPage'));
const PassifExercicesPage = lazy(() => import('../pages/formation/allemand/PassifExercicesPage'));
const RecurrentsExercicesPage = lazy(() => import('../pages/formation/allemand/RecurrentsExercicesPage'));

const NegationExercicesPage = lazy(() => import('../pages/formation/allemand/NegationExercicesPage'));
const PhrasesInterrogativesExercicesPage = lazy(() => import('../pages/formation/allemand/PhrasesInterrogativesExercicesPage'));
const ComparatifSuperlatifExercicesPage = lazy(() => import('../pages/formation/allemand/ComparatifSuperlatifExercicesPage'));
const GenetifExercicesPage = lazy(() => import('../pages/formation/allemand/GenetifExercicesPage'));
const VerbesAParticuleExercicesPage = lazy(() => import('../pages/formation/allemand/VerbesAParticuleExercicesPage'));
const TempsComposesExercicesPage = lazy(() => import('../pages/formation/allemand/TempsComposesExercicesPage'));
const VerbesModauxComplexesExercicesPage = lazy(() => import('../pages/formation/allemand/VerbesModauxComplexesExercicesPage'));
const PositionV2ExercicesPage = lazy(() => import('../pages/formation/allemand/PositionV2ExercicesPage'));
const AuxiliaireParfaitExercicesPage = lazy(() => import('../pages/formation/allemand/AuxiliaireParfaitExercicesPage'));
const SESAMEAllemandPage = lazy(() => import('../pages/formation/allemand/SESAMEAllemandPage'));
const FormationGeopolitiquePage = lazy(() => import('../pages/FormationGeopolitiquePage'));
const GeopolitiquePremiereAnneePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquePremiereAnneePage'));
const GeopolitiqueDeuxiemeAnneePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiqueDeuxiemeAnneePage'));
const GeopolitiqueSujetsProbablesPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiqueSujetsProbablesPage'));
const ContinentAfricainPage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainPage'));
const ContinentAfricainChronologiePage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainChronologiePage'));
const ContinentAfricainFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainFlashcardsPage'));
const ProcheMoyenOrientPage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientPage'));
const ProcheMoyenOrientChronologiePage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientChronologiePage'));
const ProcheMoyenOrientFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientFlashcardsPage'));
const AmeriqueNordFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueNordFlashcardsPage'));
const AmeriqueLatineFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatineFlashcardsPage'));
const AsieFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/AsieFlashcardsPage'));
const ChronologieEuropePage = lazy(() => import('../pages/formation/geopolitique/ChronologieEuropePage'));
const UnionEuropeennePageSimple = lazy(() => import('../pages/formation/geopolitique/UnionEuropeennePageSimple'));
const UnionEuropeenneFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/UnionEuropeenneFlashcardsPage'));
const UnionEuropeenneSujetsPage = lazy(() => import('../pages/formation/geopolitique/UnionEuropeenneSujetsPage'));
const ContinentAfricainSujetsPage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainSujetsPage'));
const ContinentAfricainAuteursPage = lazy(() => import('../pages/formation/geopolitique/ContinentAfricainAuteursPage'));
const UnionEuropeenneAuteursPage = lazy(() => import('../pages/formation/geopolitique/UnionEuropeenneAuteursPage'));
const ProcheMoyenOrientAuteursPage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientAuteursPage'));
const AmeriqueNordAuteursPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueNordAuteursPage'));
const AmeriqueLatineAuteursPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatineAuteursPage'));
const AsieAuteursPage = lazy(() => import('../pages/formation/geopolitique/AsieAuteursPage'));
const ProcheMoyenOrientSujetsPage = lazy(() => import('../pages/formation/geopolitique/ProcheMoyenOrientSujetsPage'));
const AmeriqueNordSujetsPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueNordSujetsPage'));
const AmeriqueLatineSujetsPage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatineSujetsPage'));
const AsieSujetsPage = lazy(() => import('../pages/formation/geopolitique/AsieSujetsPage'));
const AmeriqueLatinePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatinePage'));
const AsieChronologiePage = lazy(() => import('../pages/formation/geopolitique/AsieChronologiePage'));
const AmeriqueLatineChronologiePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueLatineChronologiePage'));
const AmeriqueNordChronologiePage = lazy(() => import('../pages/formation/geopolitique/AmeriqueNordChronologiePage'));
const SciencesTechnologiesPage = lazy(() => import('../pages/formation/geopolitique/SciencesTechnologiesPage'));
const EtudesDeCasPage = lazy(() => import('../pages/formation/geopolitique/EtudesDeCasPage'));
const GeopolitiqueCasPratiquesPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiqueCasPratiquesPage'));
const ForetAmazoniennePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/ForetAmazoniennePage'));
const AntarctiquePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/AntarctiquePage'));
const CanadaPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/CanadaPage'));
const DubaiPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/DubaiPage'));
const SuezPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/SuezPage'));
const NvidiaPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/NvidiaPage'));
const GuerreEconomiquePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/GuerreEconomiquePage'));
const BricsPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/BricsPage'));
const MigrationsPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/MigrationsPage'));
const TransportsPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/TransportsPage'));
const EnergiePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/EnergiePage'));
const TourismePage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/TourismePage'));
const MetauxPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/MetauxPage'));
const TsmcPage = lazy(() => import('../pages/formation/geopolitique/etudes-de-cas/TsmcPage'));
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
const GeopoliticsMaritimesFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsMaritimesFlashcardsPage'));
const GeopoliticsMaritimesTensionsFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsMaritimesTensionsFlashcardsPage'));
const GeopoliticsEnergiesFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsEnergiesFlashcardsPage'));
const GeopoliticsGouvernanceFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsGouvernanceFlashcardsPage'));
const GeopoliticsGuerresFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsGuerresFlashcardsPage'));
const GeopoliticsMigrationsFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsMigrationsFlashcardsPage'));
const GeopoliticsPuissanceFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsPuissanceFlashcardsPage'));
const GeopoliticsRessourcesFlashcardsPage = lazy(() => import('../pages/formation/geopolitique/GeopoliticsRessourcesFlashcardsPage'));
const GeopolitiquesReferencesPage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquesReferencesPage'));
const GeopolitiquesMethodologiePage = lazy(() => import('../pages/formation/geopolitique/GeopolitiquesMethodologiePage'));
const MethodologieDissertationPage = lazy(() => import('../pages/formation/geopolitique/MethodologieDissertationPage'));
const AnnalesGeopolitiquePage = lazy(() => import('../pages/formation/geopolitique/AnnalesGeopolitiquePage'));
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
const CivilRightsPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilRightsPage'));
const BrexitPage = lazy(() => import('../pages/formation/anglais/civilisation/BrexitPage'));
const CommonwealthPage = lazy(() => import('../pages/formation/anglais/civilisation/CommonwealthPage'));
const CivilReligionPage = lazy(() => import('../pages/formation/anglais/civilisation/CivilReligionPage'));
const ImmigrationPage = lazy(() => import('../pages/formation/anglais/civilisation/ImmigrationPage'));
const ContemporaryCrisesPage = lazy(() => import('../pages/formation/anglais/civilisation/ContemporaryCrisesPage'));
const AnglaisGenderEqualityPage = lazy(() => import('../pages/formation/anglais/civilisation/GenderEqualityPage'));
const AnglaisLaborMarketsPage = lazy(() => import('../pages/formation/anglais/civilisation/LaborMarketsPage'));
const AnglaisCultureWarsPage = lazy(() => import('../pages/formation/anglais/civilisation/CultureWarsPage'));
const FormationCultureGeneralePage = lazy(() => import('../pages/FormationCultureGeneralePage'));
const JugerTermesConnexesPage = lazy(() => import('../pages/formation/culture-generale/JugerTermesConnexesPage'));
const ArticlesCultureGeneralePage = lazy(() => import('../pages/formation/culture-generale/ArticlesCultureGeneralePage'));
const AnalyseSujetJugerPage = lazy(() => import('../pages/formation/culture-generale/articles/AnalyseSujetJugerPage'));
const ParadoxeProblematiquePage = lazy(() => import('../pages/formation/culture-generale/articles/ParadoxeProblematiquePage'));
const PlanJugerPage = lazy(() => import('../pages/formation/culture-generale/articles/PlanJugerPage'));
const MethodesCultureGeneralePage = lazy(() => import('../pages/formation/culture-generale/MethodesCultureGeneralePage'));
const ProgrammeCultureGeneralePage = lazy(() => import('../pages/formation/culture-generale/ProgrammeCultureGeneralePage'));
const TroisMethodesDissertationPage = lazy(() => import('../pages/formation/culture-generale/methodes/TroisMethodesDissertationPage'));
const MethodesParagraphesJugerPage = lazy(() => import('../pages/formation/culture-generale/methodes/MethodesParagraphesJugerPage'));
const IntroductionJugerPage = lazy(() => import('../pages/formation/culture-generale/methodes/IntroductionJugerPage'));
const SousPartiesJugerPage = lazy(() => import('../pages/formation/culture-generale/methodes/SousPartiesJugerPage'));
const TransitionsJugerPage = lazy(() => import('../pages/formation/culture-generale/methodes/TransitionsJugerPage'));
const ConclusionJugerPage = lazy(() => import('../pages/formation/culture-generale/methodes/ConclusionJugerPage'));
const NosOffresPage = lazy(() => import('../pages/NosOffresPage'));
const AproposPage = lazy(() => import('../pages/AproposPage'));
const DesignSystemPage = lazy(() => import('../pages/DesignSystemPage'));
const NosProfsPage = lazy(() => import('../pages/NosProfsPage'));
const ParentPage = lazy(() => import('../pages/ParentPage'));
const ParentFormPage = lazy(() => import('../pages/ParentFormPage'));
const ProfesseurPage = lazy(() => import('../pages/ProfesseurPage'));
const ProfesseurDashboard = lazy(() => import('../pages/ProfesseurDashboard'));
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
// TEMPORARILY DISABLED - FILE CORRUPTED: const MathsLogiquePage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-LogiqueEtRaisonnementFondamentaux-CoursPage'));
const PremiereVersDeuxiemePage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/index'));
const Module1ApplicationsLineairesExercicesPage = lazy(() => import('../pages/formation/math/premiere-vers-deuxieme/Module1-ApplicationsLineaires-ExercicesPage'));

// Math chapter pages - Semester 1
// TEMPORARILY DISABLED - FILE CORRUPTED: const MathsEnsemblesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EnsemblesEtApplications-CoursPage'));
// TEMPORARILY DISABLED - FILE CORRUPTED: const MathsEntiersPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-SommesProduitsEtCoefficientsBinomiaux-CoursPage'));

const MathsSuitesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-SuitesNumeriques-CoursPage'));
const MathsFonctionsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-CoursPage'));
const MathsDerivationPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-CoursPage'));
const MathsIntegrationPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-IntegrationSurUnSegment-CoursPage'));
const MathsPolynomesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-Polynomes-CoursPage'));
const MathsEspacesVectorielsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-CoursPage'));
const MathsProbabilitesFiniesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-CoursPage'));
// Generic Maths approfondies quiz dispatcher
const MathsApprofondiesQuizPage = lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesQuizPage'));
// Generic Maths approfondies flashcards dispatcher
const MathsApprofondiesFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesFlashcardsPage'));

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
const Chapitre2EndomorphismesCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EndomorphismesMatricesAvancees-CoursPage'));
const Chapitre3SommesProduitsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-SommesProduitsEtCoefficientsBinomiaux-ExercicesPage'));
const Chapitre4SuitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-SuitesNumeriques-ExercicesPage'));
const Chapitre5FonctionsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-ExercicesPage'));
const Chapitre6DerivationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-ExercicesPage'));
const Chapitre6DerivationQuizPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-QuizPage'));
const Chapitre6VariablesAleatoiresDensiteCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-VariablesAleatoiresDensite-CoursPage'));
const Chapitre6VariablesAleatoiresDensiteExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-VariablesAleatoiresDensite-ExercicesPage'));
const Chapitre6VariablesAleatoiresDensiteFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-VariablesAleatoiresDensite-FlashcardsPage'));
const Chapitre7IntegrationExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-IntegrationSurUnSegment-ExercicesPage'));
const Chapitre8PolynomesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-Polynomes-ExercicesPage'));
const Chapitre1ComplementsAlgebreLineaireExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-ComplementsAlgebreLineaire-ExercicesPage'));
const Chapitre1ComplementsAlgebreLineaireCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-ComplementsAlgebreLineaire-CoursPage'));
const Chapitre1ComplementsAlgebreLineaireFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre1-ComplementsAlgebreLineaire-FlashcardsPage'));
const Chapitre2EndomorphismesMatricesFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EndomorphismesMatrices-FlashcardsPage'));
const Chapitre3AlgebreBilineaireFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-AlgebreBilineaire-FlashcardsPage'));
const Chapitre4FonctionsMultivarieesCalculDifferentielFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-FonctionsMultivariees-CalculDifferentiel-FlashcardsPage'));
const Chapitre5FonctionsUneVariableReelleFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-FonctionsUneVariableReelle-FlashcardsPage'));
const Chapitre6DerivationFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre6-Derivation-FlashcardsPage'));
const Chapitre7NupletsVariablesAleatoiresFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-NupletsVariablesAleatoires-FlashcardsPage'));
const Chapitre7NupletsVariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-NupletsVariablesAleatoires-ExercicesPage'));
const Chapitre8CoupleVariablesAleatoiresFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-CoupleVariablesAleatoires-FlashcardsPage'));
const Chapitre8CoupleVariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-CoupleVariablesAleatoires-ExercicesPage'));
const Chapitre10ReductionMatricesSymetriquesFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ReductionMatricesSymetriques-FlashcardsPage'));
const Chapitre11OptimisationMultivarieeAvanceeFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-OptimisationMultivarieeAvancee-FlashcardsPage'));
const Chapitre8AlgebreBilineaireEspacesEuclidiensFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-AlgebreBilineaireEspacesEuclidiens-FlashcardsPage'));
const Chapitre9MatricesEtEspacesVectorielsFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-FlashcardsPage'));
const Chapitre10ProbabilitesEtConditionnementFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-FlashcardsPage'));
const Chapitre12ComparaisonNegligeabiliteEquivalenceFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-Comparaison-NegligeabiliteEquivalence-FlashcardsPage'));
const Chapitre12ConvergencesApproximationsFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-ConvergencesApproximations-FlashcardsPage'));
const Chapitre13EstimationStatistiqueAvanceeFlashcardsPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-EstimationStatistiqueAvancee-FlashcardsPage'));
const Chapitre2EndomorphismesMatricesAvanceesCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre2-EndomorphismesMatricesAvancees-CoursPage'));
const Chapitre3AlgebreBilineaireCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-AlgebreBilineaire-CoursPage'));
const Chapitre7NupletsVariablesAleatoiresCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre7-NupletsVariablesAleatoires-CoursPage'));
const Chapitre9AlgebreBilineaireEspacesEuclidiensCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-AlgebreBilineaireEspacesEuclidiens-CoursPage'));
const Chapitre8CoupleVariablesAleatoiresCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre8-CoupleVariablesAleatoires-CoursPage'));
const Chapitre9MatricesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-MatricesEtEspacesVectoriels-ExercicesPage'));
const Chapitre3AlgebreBilineaireExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre3-AlgebreBilineaire-ExercicesPage'));
const Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre9-AlgebreBilineaireEspacesEuclidiens-ExercicesPage'));
const Chapitre10ProbabilitesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ProbabilitesEtConditionnement-ExercicesPage'));
const Chapitre11ApplicationsLineairesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-ApplicationsLineairesEtStructuresVectorielles-ExercicesPage'));
const Chapitre11OptimisationMultivarieeAvanceeExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-OptimisationMultivarieeAvancee-ExercicesPage'));
const Chapitre11OptimisationMultivarieeAvanceeCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-OptimisationMultivarieeAvancee-CoursPage'));
const Chapitre11OptimisationMultivarieeAvanceeQuizPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre11-OptimisationMultivarieeAvancee-QuizPage'));
const Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-FonctionsMultivariees-CalculDifferentiel-ExercicesPage'));
const Chapitre4FonctionsMultivariees_CalculDifferentielCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre4-FonctionsMultivariees-CalculDifferentiel-CoursPage'));
const Chapitre12ComparaisonExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-Comparaison-NegligeabiliteEquivalence-ExercicesPage'));
const Chapitre13SeriesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-SeriesNumeriques-ExercicesPage'));
const Chapitre14DeveloppementsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre14-DeveloppementsLimitesEtTaylor-ExercicesPage'));
const Chapitre15IntegralesImpropresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre15-IntegralesImpropresEtCriteres-ExercicesPage'));
const Chapitre16EspacesProbabilisesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre16-EspacesProbabilisesEtConditionnement-ExercicesPage'));
const Chapitre17VariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre17-VariablesAleatoiresDiscretes-Lois-ExercicesPage'));
const Chapitre18ConvergencesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre18-Convergences-Et-TheoremesLimites-ExercicesPage'));
const Chapitre10ReductionMatricesSymetriquesExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ReductionMatricesSymetriques-ExercicesPage'));
const Chapitre10ReductionMatricesSymetriquesCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre10-ReductionMatricesSymetriques-CoursPage'));
const Chapitre12ConvergencesApproximationsExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-ConvergencesApproximations-ExercicesPage'));
const Chapitre12ConvergencesApproximationsCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre12-ConvergencesApproximations-CoursPage'));
const Chapitre13EstimationStatistiqueAvanceeCoursPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-EstimationStatistiqueAvancee-CoursPage'));
const Chapitre13EstimationStatistiqueAvanceeExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre13-EstimationStatistiqueAvancee-ExercicesPage'));
const Chapitre31TheorieEstimationStatistiqueExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre31-TheorieEstimationStatistique-ExercicesPage'));
const Chapitre5ComplementsVariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/math/MathsApprofondies/Chapitre5-ComplementsVariablesAleatoires-ExercicesPage'));

// Maths Appliquées - Nouveaux chapitres
const Chapitre1ElementsDeLogiqueCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre1-ElementsDeLogique-CoursPage'));
const Chapitre2EnsemblesEtApplicationsCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre2-EnsemblesEtApplications-CoursPage'));
const Chapitre3SommesProduitsCoefficientsCoursPage = lazy(() => import('../pages/formation/math/MathsAppliquees/Chapitre3-SommesProduitsCoefficients-CoursPage'));
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

// Pages légales
const MentionsLegalesPage = lazy(() => import('../pages/MentionsLegalesPage'));
const PolitiqueConfidentialitePage = lazy(() => import('../pages/PolitiqueConfidentialitePage'));
const CGUPage = lazy(() => import('../pages/CGUPage'));
const CGVPage = lazy(() => import('../pages/CGVPage'));

// Pages méthodologie entretiens de personnalité
const MotivationEcolePage = lazy(() => import('../pages/methodologie/MotivationEcolePage'));
const ProjetProfessionnelPage = lazy(() => import('../pages/methodologie/ProjetProfessionnelPage'));
const PersonnalitePage = lazy(() => import('../pages/methodologie/PersonnalitePage'));
const FinirEntretienPage = lazy(() => import('../pages/methodologie/FinirEntretienPage'));
const ErreursEviterPage = lazy(() => import('../pages/methodologie/ErreursEviterPage'));
const TendrePerchesPage = lazy(() => import('../pages/methodologie/TendrePerchesPage'));
const PitchIntroPage = lazy(() => import('../pages/methodologie/PitchIntroPage'));

// Articles pages
const ArticlesPrimairePage = lazy(() => import('../pages/ArticlesPrimairePage'));
const AutonomiePrimairePage = lazy(() => import('../pages/articles/primaire/AutonomiePrimairePage'));
const LectureEfficacePage = lazy(() => import('../pages/articles/primaire/LectureEfficacePage'));
const MathsLudiquesPage = lazy(() => import('../pages/articles/primaire/MathsLudiquesPage'));
const ArticlesCollegePage = lazy(() => import('../pages/ArticlesCollegePage'));
const TransitionCollegePage = lazy(() => import('../pages/articles/college/TransitionCollegePage'));
const OrganisationCollegePage = lazy(() => import('../pages/articles/college/OrganisationCollegePage'));
const ExamensCollegePage = lazy(() => import('../pages/articles/college/ExamensCollegePage'));
const ArticlesLyceePage = lazy(() => import('../pages/ArticlesLyceePage'));
const LyceeSecondePage = lazy(() => import('../pages/LyceeSecondePage'));
const LyceePremierePage = lazy(() => import('../pages/LyceePremierePage'));
const LyceeTerminalePage = lazy(() => import('../pages/LyceeTerminalePage'));
const LyceePhilosophiePage = lazy(() => import('../pages/LyceePhilosophiePage'));
const LyceeHistoireGeographiePage = lazy(() => import('../pages/LyceeHistoireGeographiePage'));
const LyceeEspagnolPage = lazy(() => import('../pages/LyceeEspagnolPage'));
const LyceeEPSPage = lazy(() => import('../pages/LyceeEPSPage'));
const LyceeAnglaisPage = lazy(() => import('../pages/LyceeAnglaisPage'));
const LyceeGrandOralPage = lazy(() => import('../pages/LyceeGrandOralPage'));
const ArticlesPrepaECGPage = lazy(() => import('../pages/ArticlesPrepaECGPage'));
const ArticlesConcoursAccesSesamePage = lazy(() => import('../pages/ArticlesConcoursAccesSesamePage'));
const ArticlesOteriaCyberSchoolPage = lazy(() => import('../pages/ArticlesOteriaCyberSchoolPage'));
const OteriaHomepage = lazy(() => import('../pages/OteriaHomepage'));
const OteriaBachelor1Page = lazy(() => import('../pages/OteriaBachelor1Page'));

const OteriaLogiqueFondamentaleCoursPage = lazy(() => import('../pages/formation/oteria/OteriaLogiqueFondamentaleCoursPage'));
const OteriaLogiqueFondamentaleExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaLogiqueFondamentaleExercicesPage'));
const OteriaLogiqueFondamentaleFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaLogiqueFondamentaleFlashcardsPage'));
const OteriaLogiqueFondamentaleQCMPage = lazy(() => import('../pages/formation/oteria/OteriaLogiqueFondamentaleQCMPage'));

// Chapitre 2 - Bases de Python
const OteriaPythonBasesCoursPage = lazy(() => import('../pages/formation/oteria/OteriaPythonBasesCoursPage'));
const OteriaPythonBasesExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaPythonBasesExercicesPage'));
const OteriaPythonBasesFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaPythonBasesFlashcardsPage'));
const OteriaPythonBasesQCMPage = lazy(() => import('../pages/formation/oteria/OteriaPythonBasesQCMPage'));

// Chapitre 3 - Récurrence & récursivité – sommes / produits
const OteriaRecurrenceRecursiviteCoursPage = lazy(() => import('../pages/formation/oteria/OteriaRecurrenceRecursiviteCoursPage'));

// Chapitre 4 - Suites numériques & modélisation
const OteriaSuitesNumeriquesCoursPage = lazy(() => import('../pages/formation/oteria/OteriaSuitesNumeriquesCoursPage'));
const OteriaSuitesNumeriquesExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaSuitesNumeriquesExercicesPage'));

// Chapitre 5 - Fonctions d'une variable réelle
const OteriaFonctionsVariableReelleCoursPage = lazy(() => import('../pages/formation/oteria/OteriaFonctionsVariableReelleCoursPage'));
const OteriaFonctionsExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaFonctionsExercicesPage'));
const OteriaFonctionsFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaFonctionsFlashcardsPage'));
const OteriaFonctionsQCMPage = lazy(() => import('../pages/formation/oteria/OteriaFonctionsQCMPage'));

// Chapitre 6 - Polynômes et approximation des racines
const OteriaPolynomesApproximationCoursPage = lazy(() => import('../pages/formation/oteria/OteriaPolynomesApproximationCoursPage'));
const OteriaPolynomesExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaPolynomesExercicesPage'));
const OteriaPolynomesDichotomieFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaPolynomesDichotomieFlashcardsPage'));
const OteriaPolynomesQCMPage = lazy(() => import('../pages/formation/oteria/OteriaPolynomesQCMPage'));

// Chapitre 7 - Dénombrement & probas : paradoxes
const OteriaDenombrementParadoxesCoursPage = lazy(() => import('../pages/formation/oteria/OteriaDenombrementParadoxesCoursPage'));
const OteriaDenombrementExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaDenombrementExercicesPage'));
const OteriaDenombrementFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaDenombrementFlashcardsPage'));
const OteriaDenombrementQCMPage = lazy(() => import('../pages/formation/oteria/OteriaDenombrementQCMPage'));

// Chapitre 8 - Introduction aux probabilités
const OteriaProbabilitesIntroductionCoursPage = lazy(() => import('../pages/formation/oteria/OteriaProbabilitesIntroductionCoursPage'));
const OteriaProbabilitesExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaProbabilitesExercicesPage'));
const OteriaProbabilitesFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaProbabilitesFlashcardsPage'));

// Chapitre 9 - Variables aléatoires & histogrammes
const OteriaVariablesAleatoiresCoursPage = lazy(() => import('../pages/formation/oteria/OteriaVariablesAleatoiresCoursPage'));
const OteriaVariablesAleatoiresExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaVariablesAleatoiresExercicesPage'));
const OteriaVariablesAleatoiresFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaVariablesAleatoiresFlashcardsPage'));
const OteriaVariablesAleatoiresQCMPage = lazy(() => import('../pages/formation/oteria/OteriaVariablesAleatoiresQCMPage'));

// Chapitre 10 - Intégrales & π par Monte-Carlo
const OteriaIntegralesMonteCarloCoursPage = lazy(() => import('../pages/formation/oteria/OteriaIntegralesMonteCarloCoursPage'));
const OteriaIntegralesMonteCarloExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaIntegralesMonteCarloExercicesPage'));
const OteriaIntegralesMonteCarloFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaIntegralesMonteCarloFlashcardsPage'));

// Références Python
const OteriaPythonReferencesPage = lazy(() => import('../pages/formation/oteria/OteriaPythonReferencesPage'));

// Chapitre 11 - Matrices & chaînes de Markov
const OteriaMatricesMarkovCoursPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesMarkovCoursPage'));
const OteriaMatricesMarkovExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesMarkovExercicesPage'));
const OteriaMatricesMarkovFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesMarkovFlashcardsPage'));
const OteriaMatricesMarkovQCMPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesMarkovQCMPage'));

// Chapitre 12 - Arithmétique modulaire & crypto affine
const OteriaMatricesStochastiquesCoursPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesStochastiquesCoursPage'));
const OteriaMatricesStochastiquesExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesStochastiquesExercicesPage'));
const OteriaMatricesStochastiquesFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesStochastiquesFlashcardsPage'));
const OteriaMatricesStochastiquesQCMPage = lazy(() => import('../pages/formation/oteria/OteriaMatricesStochastiquesQCMPage'));

// Extraits de sujets
const OteriaExtraitsSujetsQCMPage = lazy(() => import('../pages/formation/oteria/OteriaExtraitsSujetsQCMPage'));

// Évaluation finale - Questions ouvertes
const OteriaEvaluationFinaleQuestionsOuvertesPage = lazy(() => import('../pages/formation/oteria/OteriaEvaluationFinaleQuestionsOuvertesPage'));

const OteriaRecurrenceRecursiviteExercicesPage = lazy(() => import('../pages/formation/oteria/OteriaRecurrenceRecursiviteExercicesPage'));
const OteriaRecurrenceRecursiviteFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaRecurrenceRecursiviteFlashcardsPage'));
const OteriaRecurrenceRecursiviteQCMPage = lazy(() => import('../pages/formation/oteria/OteriaRecurrenceRecursiviteQCMPage'));
const OteriaSuitesNumeriquesQCMPage = lazy(() => import('../pages/formation/oteria/OteriaSuitesNumeriquesQCMPage'));
const OteriaSuitesNumeriquesFlashcardsPage = lazy(() => import('../pages/formation/oteria/OteriaSuitesNumeriquesFlashcardsPage'));

// Évaluation Finale
const OteriaEvaluationFinaleQCMPage = lazy(() => import('../pages/formation/oteria/OteriaEvaluationFinaleQCMPage'));
const OteriaFicheEvaluationFinalePage = lazy(() => import('../pages/formation/oteria/OteriaFicheEvaluationFinalePage'));

// Mini Projet
const OteriaMiniProjetPage = lazy(() => import('../pages/formation/oteria/OteriaMiniProjetPage'));
const OteriaMiniProjetDeroulementPage = lazy(() => import('../pages/formation/oteria/OteriaMiniProjetDeroulementPage'));
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
const CultureGeneraleGeneratorPage = lazy(() => import('../pages/generator/CultureGeneraleGeneratorPage'));

const ThemeGrammarGeneratorPage = lazy(() => import('../pages/generator/ThemeGrammarGeneratorPage'));
const ParagraphGeneratorPage = lazy(() => import('../pages/generator/ParagraphGeneratorPage'));
const GeopoliticsParadoxGeneratorPage = lazy(() => import('../pages/generator/GeopoliticsParadoxGeneratorPage'));
const UnifiedLanguagesGeneratorPage = lazy(() => import('../pages/generator/UnifiedLanguagesGeneratorPage'));
const UnifiedOralGeneratorPage = lazy(() => import('../pages/generator/UnifiedOralGeneratorPage'));
const MathGeneratorPage = lazy(() => import('../pages/generator/MathGeneratorPage'));

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

// Formation ESH pages
const FormationESHPage = lazy(() => import('../pages/formation/esh/FormationESHPage'));
const PremiereAnneeESHPage = lazy(() => import('../pages/formation/esh/PremiereAnneeESHPage'));
const DeuxiemeAnneeESHPage = lazy(() => import('../pages/formation/esh/DeuxiemeAnneeESHPage'));
const MethodologieESHPage = lazy(() => import('../pages/formation/esh/MethodologieESHPage'));
const EtudesCasESHPage = lazy(() => import('../pages/formation/esh/EtudesCasESHPage'));
const RessourcesESHPage = lazy(() => import('../pages/formation/esh/RessourcesESHPage'));

// Module 1 ESH chapters

const ActeursFonctionsEconomiePage = lazy(() => import('../pages/formation/esh/module1/ActeursFonctionsEconomiePage'));
const ActeursFonctionsEconomieModulePage = lazy(() => import('../pages/formation/esh/module1/ActeursFonctionsEconomieModulePage'));
const MonnaieFinancementEconomiePage = lazy(() => import('../pages/formation/esh/module1/MonnaieFinancementEconomiePage'));
const MonnaieFinancementEconomieModulePage = lazy(() => import('../pages/formation/esh/module1/MonnaieFinancementEconomieModulePage'));
const CourantsEconomiquesPage = lazy(() => import('../pages/formation/esh/module1/CourantsEconomiquesPage'));
const CourantsEconomiquesModulePage = lazy(() => import('../pages/formation/esh/module1/CourantsEconomiquesModulePage'));

// Module 3 ESH chapters
const OuvertureEconomiesPage = lazy(() => import('../pages/formation/esh/module3/OuvertureEconomiesPage'));
const AnalyseEchangesInternationauxPage = lazy(() => import('../pages/formation/esh/module3/AnalyseEchangesInternationauxPage'));
const RegionalisationGouvernancePage = lazy(() => import('../pages/formation/esh/module3/RegionalisationGouvernancePage'));
const BalancePaiementsChangePage = lazy(() => import('../pages/formation/esh/module3/BalancePaiementsChangePage'));
const EvolutionSystemeMonetairePage = lazy(() => import('../pages/formation/esh/module3/EvolutionSystemeMonetairePage'));
const MarcheCapitauxPage = lazy(() => import('../pages/formation/esh/module3/MarcheCapitauxPage'));
const ConstructionEuropeennePage = lazy(() => import('../pages/formation/esh/module3/ConstructionEuropeennePage'));
const EuropeEconomiqueMonetairePage = lazy(() => import('../pages/formation/esh/module3/EuropeEconomiqueMonetairePage'));
const EuropeSocialePage = lazy(() => import('../pages/formation/esh/module3/EuropeSocialePage'));

// Module 4 ESH chapters
const InflationChomagePage = lazy(() => import('../pages/formation/esh/module4/InflationChomagePage'));
const EquilibreMacroPage = lazy(() => import('../pages/formation/esh/module4/EquilibreMacroPage'));
const FluctuationsEconomiquesPage = lazy(() => import('../pages/formation/esh/module4/FluctuationsEconomiquesPage'));
const PolitiquesStructurellesPage = lazy(() => import('../pages/formation/esh/module4/PolitiquesStructurellesPage'));
const ContraintesPolitiquesPage = lazy(() => import('../pages/formation/esh/module4/ContraintesPolitiquesPage'));
const JusticeSocialePage = lazy(() => import('../pages/formation/esh/module4/JusticeSocialePage'));
const LutteInegalitesPage = lazy(() => import('../pages/formation/esh/module4/LutteInegalitesPage'));
const EtatProvidencePage = lazy(() => import('../pages/formation/esh/module4/EtatProvidencePage'));

const EquilibreMicroPage = lazy(() => import('../pages/formation/esh/module1/EquilibreMicroPage'));
const EquilibreMicroModulePage = lazy(() => import('../pages/formation/esh/module1/EquilibreMicroModulePage'));
const OffreDemandePage = lazy(() => import('../pages/formation/esh/module1/OffreDemandePage'));
const OffreDemandeModulePage = lazy(() => import('../pages/formation/esh/module1/OffreDemandeModulePage'));
const DefaillancesMarchePage = lazy(() => import('../pages/formation/esh/module1/DefaillancesMarchePage'));
const DefaillancesMarcheModulePage = lazy(() => import('../pages/formation/esh/module1/DefaillancesMarcheModulePage'));

const CourantsSociologiquesPage = lazy(() => import('../pages/formation/esh/module1/CourantsSociologiquesPage'));
const MethodesSociologiquesPage = lazy(() => import('../pages/formation/esh/module1/MethodesSociologiquesPage'));

// Module 2 ESH chapters
const CroissanceEconomiquePage = lazy(() => import('../pages/formation/esh/module2/CroissanceEconomiquePage'));
const CroissanceEconomiqueModulePage = lazy(() => import('../pages/formation/esh/module2/CroissanceEconomiqueModulePage'));
const InegalitesDeveloppementPage = lazy(() => import('../pages/formation/esh/module2/InegalitesDeveloppementPage'));
const SoutenabiliteCroissancePage = lazy(() => import('../pages/formation/esh/module2/SoutenabiliteCroissancePage'));
const SoutenabiliteCroissanceModulePage = lazy(() => import('../pages/formation/esh/module2/SoutenabiliteCroissanceModulePage'));
const TransformationsEconomiquesFinancieresPage = lazy(() => import('../pages/formation/esh/module2/TransformationsEconomiquesFinancieresPage'));
const TransformationsEconomiquesFinancieresModulePage = lazy(() => import('../pages/formation/esh/module2/TransformationsEconomiquesFinancieresModulePage'));
const MobiliteSocialePage = lazy(() => import('../pages/formation/esh/module2/MobiliteSocialePage'));
const TransformationsDemographiquesPage = lazy(() => import('../pages/formation/esh/module2/TransformationsDemographiquesPage'));
const TransformationsEntreprisePage = lazy(() => import('../pages/formation/esh/module2/TransformationsEntreprisePage'));
const TransformationsEntrepriseModulePage = lazy(() => import('../pages/formation/esh/module2/TransformationsEntrepriseModulePage'));
const ConcurrenceImparfaitePage = lazy(() => import('../pages/formation/esh/module2/ConcurrenceImparfaitePage'));
const ConcurrenceImparfaiteModulePage = lazy(() => import('../pages/formation/esh/module2/ConcurrenceImparfaiteModulePage'));
const SociologieTravailPage = lazy(() => import('../pages/formation/esh/module2/SociologieTravailPage'));

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
  { path: '/admin/leads', component: AdminLeadsPage, title: 'Gestion des Leads', protected: true },
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
  { path: '/design-system', component: DesignSystemPage, title: 'Design System' },
  { path: '/nos-profs', component: NosProfsPage, title: 'Nos Professeurs' },
  { path: '/parent', component: ParentPage, title: 'Parent - Accompagnement' },
  { path: '/parent-form', component: ParentFormPage, title: 'Réserver un accompagnement' },
  { path: '/professeur', component: ProfesseurPage, title: 'Professeur - Candidature' },
  { path: '/professeur-dashboard', component: ProfesseurDashboard, title: 'Espace Professeur', protected: true },
  { path: '/coaching', component: CoachingPage, title: 'Coaching individuel' },
  { path: '/partners', component: PartnersPage, title: 'Partenaires' },
  { path: '/methodes/personnalite', component: MethodEntretiensPersonnalitePage, title: 'Méthodes Personnalité' },
  { path: '/articles', component: ArticlesPage, title: 'Conseils & Articles' },
  { path: '/articles/primaire', component: ArticlesPrimairePage, title: 'Articles Primaire' },
  { path: '/articles/primaire/autonomie', component: AutonomiePrimairePage, title: 'Développer l\'autonomie en primaire' },
  { path: '/articles/primaire/lecture', component: LectureEfficacePage, title: 'Méthodes de lecture efficace' },
  { path: '/articles/primaire/maths-ludiques', component: MathsLudiquesPage, title: 'Mathématiques ludiques au primaire' },
  { path: '/articles/primaire/anxiete-scolaire', component: lazy(() => import('../pages/articles/primaire/AnxieteScolairePage')), title: 'Anxiété Scolaire en Primaire' },
  { path: '/articles/primaire/harcelement', component: lazy(() => import('../pages/articles/primaire/HarcelementPrimairePage')), title: 'Harcèlement en Primaire' },
  { path: '/articles/primaire/accompagnement-lecture', component: lazy(() => import('../pages/articles/primaire/AccompagnementLecturePage')), title: 'Accompagner la Lecture' },
  { path: '/articles/primaire/gestion-ent', component: lazy(() => import('../pages/articles/primaire/GestionEntPage')), title: 'Gestion de l\'ENT' },
  { path: '/articles/college', component: ArticlesCollegePage, title: 'Articles Collège' },
  { path: '/articles/college/transition', component: TransitionCollegePage, title: 'Transition primaire-collège' },
  { path: '/articles/college/organisation', component: OrganisationCollegePage, title: 'Organisation au collège' },
  { path: '/articles/college/examens', component: ExamensCollegePage, title: 'Préparation aux examens' },
  { path: '/articles/lycee', component: ArticlesLyceePage, title: 'Articles Lycée' },
  { path: '/articles/lycee/seconde', component: LyceeSecondePage, title: 'Classe de Seconde' },
  { path: '/articles/lycee/premiere', component: LyceePremierePage, title: 'Classe de Première' },
  { path: '/articles/lycee/terminale', component: LyceeTerminalePage, title: 'Classe de Terminale' },
  { path: '/articles/lycee/terminale/philosophie', component: LyceePhilosophiePage, title: 'Philosophie Terminale' },
  { path: '/articles/lycee/terminale/histoire-geographie', component: LyceeHistoireGeographiePage, title: 'Histoire-Géographie Terminale' },
  { path: '/articles/lycee/terminale/espagnol', component: LyceeEspagnolPage, title: 'Espagnol Terminale' },
  { path: '/articles/lycee/terminale/eps', component: LyceeEPSPage, title: 'EPS Terminale' },
  { path: '/articles/lycee/terminale/anglais', component: LyceeAnglaisPage, title: 'Anglais Terminale' },
  { path: '/articles/lycee/terminale/grand-oral', component: LyceeGrandOralPage, title: 'Grand Oral Terminale' },
  { path: '/articles/prepa-ecg', component: ArticlesPrepaECGPage, title: 'Prépa ECG' },
  { path: '/articles/concours-acces-sesame', component: ArticlesConcoursAccesSesamePage, title: 'Concours ACCES/SESAME' },
  { path: '/articles/terminale-prepa', component: lazy(() => import('../pages/ArticlesTerminalePrepaPage')), title: 'Terminale → Prépa' },
  { path: '/articles/oteria-cyber-school', component: OteriaHomepage, title: 'OTERIA Cyber School' },
  { path: '/articles/oteria-cyber-school/bachelor-1', component: OteriaBachelor1Page, title: 'Bachelor 2 - OTERIA Cyber School' },

  { path: '/formation/oteria/logique-fondamentale-cours', component: OteriaLogiqueFondamentaleCoursPage, title: 'Logique Fondamentale - Cours' },
  { path: '/formation/oteria/logique-fondamentale-exercices', component: OteriaLogiqueFondamentaleExercicesPage, title: 'Logique Fondamentale - Exercices' },
  { path: '/formation/oteria/logique-fondamentale-flashcards', component: OteriaLogiqueFondamentaleFlashcardsPage, title: 'Logique Fondamentale - Flashcards' },
  { path: '/formation/oteria/logique-fondamentale-qcm', component: OteriaLogiqueFondamentaleQCMPage, title: 'Logique Fondamentale - QCM', protected: true },

  // Chapitre 2 - Bases de Python
  { path: '/formation/oteria/python-bases-cours', component: OteriaPythonBasesCoursPage, title: 'Bases Python - Cours' },
  { path: '/formation/oteria/python-bases-exercices', component: OteriaPythonBasesExercicesPage, title: 'Bases Python - Exercices' },
  { path: '/formation/oteria/python-bases-flashcards', component: OteriaPythonBasesFlashcardsPage, title: 'Bases Python - Flashcards' },
  { path: '/formation/oteria/python-bases-qcm', component: OteriaPythonBasesQCMPage, title: 'Bases Python - QCM', protected: true },

  // Chapitre 3 - Récurrence & récursivité – sommes / produits
  { path: '/formation/oteria/recurrence-recursivite-cours', component: OteriaRecurrenceRecursiviteCoursPage, title: 'Récurrence & Récursivité - Cours' },

  // Chapitre 4 - Suites numériques & modélisation
  { path: '/formation/oteria/suites-numeriques-cours', component: OteriaSuitesNumeriquesCoursPage, title: 'Suites Numériques - Cours' },
  { path: '/formation/oteria/suites-numeriques-exercices', component: OteriaSuitesNumeriquesExercicesPage, title: 'Suites Numériques - Exercices' },

  // Chapitre 5 - Fonctions d'une variable réelle
  { path: '/formation/oteria/fonctions-variable-reelle-cours', component: OteriaFonctionsVariableReelleCoursPage, title: 'Fonctions Variable Réelle - Cours' },
  { path: '/formation/oteria/fonctions-exercices', component: OteriaFonctionsExercicesPage, title: 'Fonctions - Exercices' },
  { path: '/formation/oteria/fonctions-flashcards', component: OteriaFonctionsFlashcardsPage, title: 'Fonctions - Flashcards' },
  { path: '/formation/oteria/fonctions-qcm', component: OteriaFonctionsQCMPage, title: 'Fonctions - QCM', protected: true },

  // Chapitre 6 - Polynômes et approximation des racines
  { path: '/formation/oteria/polynomes-approximation-cours', component: OteriaPolynomesApproximationCoursPage, title: 'Polynômes & Dichotomie - Cours' },
  { path: '/formation/oteria/polynomes-exercices', component: OteriaPolynomesExercicesPage, title: 'Polynômes & Dichotomie - Exercices' },
  { path: '/formation/oteria/polynomes-flashcards', component: OteriaPolynomesDichotomieFlashcardsPage, title: 'Polynômes & Dichotomie - Flashcards' },
  { path: '/formation/oteria/polynomes-qcm', component: OteriaPolynomesQCMPage, title: 'Polynômes & Dichotomie - QCM', protected: true },

  // Chapitre 7 - Dénombrement & probas : paradoxes
  { path: '/formation/oteria/denombrement-paradoxes-cours', component: OteriaDenombrementParadoxesCoursPage, title: 'Dénombrement & Paradoxes - Cours' },
  { path: '/formation/oteria/denombrement-exercices', component: OteriaDenombrementExercicesPage, title: 'Dénombrement & Paradoxes - Exercices' },
  { path: '/formation/oteria/denombrement-flashcards', component: OteriaDenombrementFlashcardsPage, title: 'Dénombrement & Paradoxes - Flashcards' },
  { path: '/formation/oteria/denombrement-qcm', component: OteriaDenombrementQCMPage, title: 'Dénombrement & Paradoxes - QCM', protected: true },

  // Chapitre 8 - Introduction aux probabilités
  { path: '/formation/oteria/probabilites-introduction-cours', component: OteriaProbabilitesIntroductionCoursPage, title: 'Introduction aux Probabilités - Cours' },
  { path: '/formation/oteria/probabilites-exercices', component: OteriaProbabilitesExercicesPage, title: 'Introduction aux Probabilités - Exercices' },
  { path: '/formation/oteria/probabilites-flashcards', component: OteriaProbabilitesFlashcardsPage, title: 'Introduction aux Probabilités - Flashcards' },

  // Chapitre 9 - Variables aléatoires & histogrammes
  { path: '/formation/oteria/variables-aleatoires-cours', component: OteriaVariablesAleatoiresCoursPage, title: 'Variables Aléatoires & Histogrammes - Cours' },
  { path: '/formation/oteria/variables-aleatoires-exercices', component: OteriaVariablesAleatoiresExercicesPage, title: 'Variables Aléatoires & Histogrammes - Exercices' },
  { path: '/formation/oteria/variables-aleatoires-flashcards', component: OteriaVariablesAleatoiresFlashcardsPage, title: 'Variables Aléatoires & Histogrammes - Flashcards' },
  { path: '/formation/oteria/variables-aleatoires-qcm', component: OteriaVariablesAleatoiresQCMPage, title: 'Variables Aléatoires & Histogrammes - QCM', protected: true },

  // Chapitre 10 - Intégrales & π par Monte-Carlo
  { path: '/formation/oteria/integrales-monte-carlo-cours', component: OteriaIntegralesMonteCarloCoursPage, title: 'Intégrales & π par Monte-Carlo - Cours' },
  { path: '/formation/oteria/integrales-monte-carlo-exercices', component: OteriaIntegralesMonteCarloExercicesPage, title: 'Intégrales & π par Monte-Carlo - Exercices' },
  { path: '/formation/oteria/integrales-monte-carlo-flashcards', component: OteriaIntegralesMonteCarloFlashcardsPage, title: 'Analyse de lois & Monte Carlo - Flashcards' },

  // Références Python
  { path: '/formation/oteria/python-references', component: OteriaPythonReferencesPage, title: 'Références Python - NumPy & Matplotlib' },

  // Chapitre 11 - Matrices & chaînes de Markov
  { path: '/formation/oteria/matrices-markov-cours', component: OteriaMatricesMarkovCoursPage, title: 'Matrices & Chaînes de Markov - Cours' },
  { path: '/formation/oteria/matrices-markov-exercices', component: OteriaMatricesMarkovExercicesPage, title: 'Matrices & Chaînes de Markov - Exercices' },
  { path: '/formation/oteria/matrices-markov-flashcards', component: OteriaMatricesMarkovFlashcardsPage, title: 'Matrices & Chaînes de Markov - Flashcards' },
  { path: '/formation/oteria/matrices-markov-qcm', component: OteriaMatricesMarkovQCMPage, title: 'Matrices & Chaînes de Markov - QCM', protected: true },

  // Chapitre 12 - Arithmétique modulaire & crypto affine
  { path: '/formation/oteria/matrices-stochastiques-cours', component: OteriaMatricesStochastiquesCoursPage, title: 'Arithmétique Modulaire & Crypto - Cours' },
  { path: '/formation/oteria/matrices-stochastiques-exercices', component: OteriaMatricesStochastiquesExercicesPage, title: 'Arithmétique Modulaire & Crypto - Exercices' },
  { path: '/formation/oteria/matrices-stochastiques-flashcards', component: OteriaMatricesStochastiquesFlashcardsPage, title: 'Arithmétique Modulaire & Crypto - Flashcards' },
  { path: '/formation/oteria/matrices-stochastiques-qcm', component: OteriaMatricesStochastiquesQCMPage, title: 'Arithmétique Modulaire & Crypto - QCM', protected: true },

  // Extraits de sujets
  { path: '/formation/oteria/extraits-sujets-qcm', component: OteriaExtraitsSujetsQCMPage, title: 'Extraits de Sujets - QCM de Révision', protected: true },

  // Évaluation finale - Questions ouvertes
  { path: '/formation/oteria/evaluation-finale-questions-ouvertes', component: OteriaEvaluationFinaleQuestionsOuvertesPage, title: 'Évaluation Finale - Questions ouvertes' },

  { path: '/formation/oteria/recurrence-recursivite-exercices', component: OteriaRecurrenceRecursiviteExercicesPage, title: 'Récurrence & Récursivité - Exercices' },
  { path: '/formation/oteria/recurrence-recursivite-flashcards', component: OteriaRecurrenceRecursiviteFlashcardsPage, title: 'Récurrence & Récursivité - Flashcards' },
  { path: '/formation/oteria/recurrence-recursivite-qcm', component: OteriaRecurrenceRecursiviteQCMPage, title: 'Récurrence & Récursivité - QCM', protected: true },
  { path: '/formation/oteria/suites-numeriques-qcm', component: OteriaSuitesNumeriquesQCMPage, title: 'Suites Numériques - QCM', protected: true },
  { path: '/formation/oteria/suites-numeriques-flashcards', component: OteriaSuitesNumeriquesFlashcardsPage, title: 'Suites Numériques - Flashcards' },
  { path: '/formation/oteria/polynomes-dichotomie-flashcards', component: OteriaPolynomesDichotomieFlashcardsPage, title: 'Polynômes & Dichotomie - Flashcards' },

  // Évaluation Finale
  { path: '/formation/oteria/evaluation-finale', component: OteriaEvaluationFinaleQCMPage, title: 'Évaluation Finale - QCM Complet', protected: true },
  { path: '/formation/oteria/fiche-evaluation-finale', component: OteriaFicheEvaluationFinalePage, title: 'Fiche Évaluation Finale - Bachelor 2' },

  // Mini Projet
  { path: '/formation/oteria/mini-projet', component: OteriaMiniProjetPage, title: 'Mini Projet - Ateliers & Répétitions' },
  { path: '/formation/oteria/mini-projet-deroulement', component: OteriaMiniProjetDeroulementPage, title: 'Mini Projet - Déroulement du projet de groupe' },
  { path: '/avis', component: AvisPage, title: 'Avis Superprof' },
  { path: '/methodologie/storytelling', component: StorytellingMethodePage, title: 'Méthodologie Storytelling' },

  // Pages légales
  { path: '/mentions-legales', component: MentionsLegalesPage, title: 'Mentions légales' },
  { path: '/politique-confidentialite', component: PolitiqueConfidentialitePage, title: 'Politique de confidentialité' },
  { path: '/cgu', component: CGUPage, title: 'Conditions générales d\'utilisation' },
  { path: '/cgv', component: CGVPage, title: 'Conditions générales de vente' },

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
  { path: '/formation/anglais/vocabulaire', component: FormationAnglaisVocabulairePage, title: 'Vocabulaire Anglais' },
  { path: '/formation/anglais/grammaire', component: FormationAnglaisGrammairePage, title: 'Grammaire Anglaise' },
  { path: '/formation/anglais/grammaire/conditionnels', component: AnglaisConditionnelsPage, title: 'Structures Conditionnelles' },
  { path: '/formation/anglais/grammaire/conditionnels/exercices', component: AnglaisConditionnelsExercicesPage, title: 'Exercices Structures Conditionnelles' },
  { path: '/formation/anglais/grammaire/temps-verbaux', component: AnglaisTempsVerbauxPage, title: 'Temps verbaux' },
  { path: '/formation/anglais/grammaire/temps-verbaux/exercices', component: AnglaisTempsVerbauxExercicesPage, title: 'Exercices Temps Verbaux' },
  { path: '/formation/anglais/grammaire/voix-passives', component: AnglaisVoixPassivesPage, title: 'Voix passive' },
  { path: '/formation/anglais/grammaire/voix-passives/exercices', component: AnglaisVoixPassivesExercicesPage, title: 'Exercices Voix Passive' },
  { path: '/formation/anglais/grammaire/discours-indirect', component: AnglaisDiscoursIndirectPage, title: 'Discours indirect' },
  { path: '/formation/anglais/grammaire/discours-indirect/exercices', component: AnglaisDiscoursIndirectExercicesPage, title: 'Exercices Discours Indirect' },
  { path: '/formation/anglais/grammaire/modaux', component: AnglaisModauxPage, title: 'Modaux et Auxiliaires' },
  { path: '/formation/anglais/grammaire/modaux/exercices', component: AnglaisModauxExercicesPage, title: 'Exercices Modaux' },
  { path: '/formation/anglais/grammaire/prepositions', component: AnglaisPrepositionsPhrasalVerbsPage, title: 'Prépositions & Phrasal Verbs' },
  { path: '/formation/anglais/grammaire/prepositions/exercices', component: AnglaisPrepositionsPhrasalVerbsExercicesPage, title: 'Exercices Prépositions & Phrasal Verbs' },
  { path: '/formation/anglais/grammaire/articles', component: AnglaisArticlesDeterminantsPage, title: 'Articles & Déterminants' },
  { path: '/formation/anglais/grammaire/articles/exercices', component: AnglaisArticlesDeterminantsExercicesPage, title: 'Exercices Articles & Déterminants' },
  { path: '/formation/anglais/grammaire/relatives/exercices', component: AnglaisRelativesExercicesPage, title: 'Exercices Subordonnées Relatives' },
  { path: '/formation/anglais/grammaire/gerondif-infinitif/exercices', component: AnglaisGerondifInfinitifExercicesPage, title: 'Exercices Gérondif & Infinitif' },
  { path: '/formation/anglais/grammaire/relatives', component: AnglaisRelativesPage, title: 'Subordonnées relatives' },
  { path: '/formation/anglais/grammaire/gerondif-infinitif', component: AnglaisGerondifInfinitifPage, title: 'Gérondif & Infinitif' },
  { path: '/formation/anglais/grammaire/comparatifs', component: AnglaisComparatifsSuperlatifsPage, title: 'Comparatifs & Superlatifs' },
  { path: '/formation/anglais/grammaire/comparatifs/exercices', component: AnglaisComparatifsSuperlatifsExercicesPage, title: 'Exercices Comparatifs & Superlatifs' },
  { path: '/formation/anglais/grammaire/questions', component: AnglaisQuestionsInterrogatifsPage, title: 'Questions & Interrogatifs' },
  { path: '/formation/anglais/grammaire/questions/exercices', component: AnglaisQuestionsInterrogatifsExercicesPage, title: 'Exercices Questions & Interrogatifs' },
  { path: '/formation/anglais/grammaire/expressions-temps', component: AnglaisExpressionsTempsPage, title: 'Expressions de temps' },
  { path: '/formation/anglais/grammaire/expressions-temps/exercices', component: AnglaisExpressionsTempsExercicesPage, title: 'Exercices Expressions de temps' },
  { path: '/formation/anglais/grammaire/concordance', component: AnglaisConcordanceTempsPage, title: 'Concordance des temps' },
  { path: '/formation/anglais/grammaire/concordance/exercices', component: AnglaisConcordanceTempsExercicesPage, title: 'Exercices Concordance des temps' },
  { path: '/formation/anglais/grammaire/quantifieurs', component: AnglaisQuantifieursPage, title: 'Quantifieurs' },
  { path: '/formation/anglais/grammaire/quantifieurs/exercices', component: AnglaisQuantifieursExercicesPage, title: 'Exercices Quantifieurs' },
  { path: '/formation/anglais/grammaire/subjunctif', component: AnglaisSubjunctifPage, title: 'Subjunctif & Structures Subjectives' },
  { path: '/formation/anglais/grammaire/subjunctif/exercices', component: AnglaisSubjunctifExercicesPage, title: 'Exercices Subjunctif' },
  { path: '/formation/anglais/grammaire/inversions', component: AnglaisInversionsEmphasePage, title: 'Inversions & Emphase' },
  { path: '/formation/anglais/grammaire/inversions/exercices', component: AnglaisInversionsEmphaseExercicesPage, title: 'Exercices Inversions & Emphase' },
  { path: '/formation/anglais/grammaire/connecteurs', component: AnglaisConnecteursLogiquesPage, title: 'Connecteurs logiques' },
  { path: '/formation/anglais/grammaire/connecteurs/exercices', component: AnglaisConnecteursLogiquesExercicesPage, title: 'Exercices Connecteurs logiques' },
  { path: '/formation/anglais/grammaire/verbes-irreguliers', component: AnglaisVerbesIrreguliersPage, title: 'Verbes irréguliers' },
  { path: '/formation/anglais/grammaire/verbes-irreguliers/exercices', component: AnglaisVerbesIrreguliersExercicesPage, title: 'Exercices Verbes irréguliers' },
  { path: '/formation/anglais/grammaire/causatives', component: AnglaisCausativesPage, title: 'Structures causatives' },
  { path: '/formation/anglais/grammaire/causatives/exercices', component: AnglaisCausativesExercicesPage, title: 'Exercices Structures causatives' },
  { path: '/formation/anglais/grammaire/nuances-lexicales', component: AnglaisNuancesLexicalesPage, title: 'Nuances lexicales' },
  { path: '/formation/anglais/grammaire/nuances-lexicales/exercices', component: AnglaisNuancesLexicalesExercicesPage, title: 'Exercices Nuances lexicales' },
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
  { path: '/formation/anglais/civilisation/polarization/vocabulary', component: AnglaisPolarizationVocabularyPage, title: 'Polarization Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/health', component: AnglaisHealthPage, title: 'Health and Healthcare' },
  { path: '/formation/anglais/civilisation/health-systems', component: AnglaisHealthSystemsPage, title: 'Health and Healthcare Systems: US and UK Policy Challenges and Crises' },
  { path: '/formation/anglais/civilisation/education/vocabulary', component: AnglaisEducationVocabularyPage, title: 'Education and Culture Wars Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/education', component: AnglaisEducationPage, title: 'Education and Culture Wars' },
  { path: '/formation/anglais/civilisation/media/vocabulary', component: AnglaisMediaVocabularyPage, title: 'Media and Social Networks Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/media', component: AnglaisMediaPage, title: 'Media and Social Networks' },
  { path: '/formation/anglais/civilisation/justice/vocabulary', component: AnglaisJusticeVocabularyPage, title: 'Justice and Rule of Law Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/justice', component: AnglaisJusticePage, title: 'Justice and Rule of Law' },
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
  { path: '/formation/anglais/civilisation/labor/vocabulary', component: AnglaisLaborVocabularyPage, title: 'Labor Markets and Future of Work Vocabulary - Flashcards' },
  { path: '/formation/anglais/civilisation/gender-equality', component: AnglaisGenderEqualityPage, title: 'Gender Equality' },
  { path: '/formation/anglais/civilisation/labor-markets', component: AnglaisLaborMarketsPage, title: 'Labor Markets' },
  { path: '/formation/anglais/civilisation/culture-wars', component: AnglaisCultureWarsPage, title: 'Culture Wars' },
  { path: '/formation/anglais/civilisation/polarization', component: AnglaisPolarizationPage, title: 'Polarization' },

  { path: '/formation/anglais/methodologie-complete', component: MethodologieAnglaisPage, title: 'Méthodologie Complète Anglais' },
  { path: '/formation/anglais/methodologie/colles', component: AnglaisCollesMethodologiePage, title: 'Les Colles d’Anglais' },
  { path: '/formation/anglais/methodologie/synthese-question-1', component: AnglaisSyntheseQuestion1Page, title: 'Synthèse – Question 1' },
  { path: '/formation/anglais/methodologie/essai-question-2', component: AnglaisEssaiQuestion2Page, title: 'Essai – Question 2' },

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
  { path: '/formation/espagnol/civilisation/module2', component: Module2MujeresViolenciaGeneroPage, title: 'Mujeres y Violencia de Género' },
  { path: '/formation/espagnol/civilisation/module4', component: Module4MigracionesFronterasPage, title: 'Migraciones y Fronteras' },
  { path: '/formation/espagnol/civilisation/module5', component: Module5NarcotráficoSeguridadPage, title: 'Narcotráfico y Seguridad' },
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
  { path: '/formation/allemand/civilisation/ecologie-essays', component: EcologieSampleEssaysPage, title: 'Écologie - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/politik-essays', component: PolitikSampleEssaysPage, title: 'Politik - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/demographie-essays', component: DemographieSampleEssaysPage, title: 'Démographie - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/education-essays', component: EducationSampleEssaysPage, title: 'Éducation - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/culture-essays', component: CultureSampleEssaysPage, title: 'Culture - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/geopolitique-essays', component: GeopolitiqueSampleEssaysPage, title: 'Géopolitique - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/technologie-essays', component: TechnologieSampleEssaysPage, title: 'Technologie - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/economie-essays', component: EconomieSampleEssaysPage, title: 'Économie - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/femmes-essays', component: FemmesSampleEssaysPage, title: 'Femmes et Égalité - Sujets rédigés' },
  { path: '/formation/allemand/civilisation/histoire-essays', component: HistoireSampleEssaysPage, title: 'Histoire - Sujets rédigés' },
  { path: '/formation/allemand/epreuves', component: ReussirEpreuvesAllemandePage, title: 'Réussir les épreuves d\'allemand - Allemand' },
  { path: '/formation/allemand/epreuves-orales', component: EpreuvesOralesPage, title: 'Épreuves orales d\'allemand - Méthodologie' },
  { path: '/formation/allemand/epreuves-orales/exercices', component: EpreuvesOralesExercicesPage, title: 'Exercices - Épreuves orales d\'allemand' },
  { path: '/formation/allemand/reussir-essai', component: EpreuvesEcritesEssaiPage, title: 'Réussir l\'essai - Méthodologie' },
  { path: '/formation/allemand/reussir-essai/exercices', component: ReussirEssaiExercicesPage, title: 'Exercices - Réussir l\'essai' },
  { path: '/formation/allemand/reussir-synthese', component: EpreuvesEcritesSynthesePage, title: 'Réussir la synthèse - Méthodologie' },
  { path: '/formation/allemand/reussir-synthese/exercices', component: ReussirSyntheseExercicesPage, title: 'Exercices - Réussir la synthèse' },
  { path: '/formation/allemand/grammaire-avancee', component: GrammaireAvanceePage, title: 'Grammaire avancée - Thèmes grammaticaux' },
  { path: '/formation/allemand/methodologie', component: MethodologieTravailPage, title: 'Méthodologie - Comment travailler l\'allemand en prépa' },
  { path: '/formation/allemand/politik', component: PolitikAllemandePage, title: 'Politik in Deutschland - Allemand' },
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

  { path: '/formation/allemand/verbes-particules', component: VerbesAParticulePage, title: 'Verbes à Particule Séparable' },
  { path: '/formation/allemand-temps-composes', component: TempsComposesPage, title: 'Formation des Temps Composés' },
  { path: '/formation/allemand-verbes-modaux', component: VerbesModauxComplexesPage, title: 'Verbes Modaux Complexes' },
  { path: '/formation/allemand-position-v2', component: PositionV2Page, title: 'Règle de Position V2' },
  { path: '/formation/allemand-auxiliaire-parfait', component: AuxiliaireParfaitPage, title: 'Choix de l\'Auxiliaire au Parfait' },
  { path: '/formation/allemand-genitif', component: GenetifPage, title: 'Formation du Génitif' },
  { path: '/formation/allemand-genitif/exercices', component: GenetifExercicesPage, title: 'Exercices du Génitif' },
  { path: '/formation/allemand-declinaisons/exercices', component: DeclinaisonsExercicesPage, title: 'Exercices de Déclinaisons' },
  { path: '/formation/allemand-relative/exercices', component: RelativeExercicesPage, title: 'Exercices de Propositions Relatives' },
  { path: '/formation/allemand-structure/exercices', component: StructureExercicesPage, title: 'Exercices de Structure de Phrase' },
  { path: '/formation/allemand-passif/exercices', component: PassifExercicesPage, title: 'Exercices du Passif' },
  { path: '/formation/allemand-recurrents/exercices', component: RecurrentsExercicesPage, title: 'Exercices des Points Récurrents' },

  { path: '/formation/allemand-negation/exercices', component: NegationExercicesPage, title: 'Exercices de la Négation' },
  { path: '/formation/allemand-phrases-interrogatives/exercices', component: PhrasesInterrogativesExercicesPage, title: 'Exercices des Phrases Interrogatives' },
  { path: '/formation/allemand-comparatif-superlatif/exercices', component: ComparatifSuperlatifExercicesPage, title: 'Exercices du Comparatif et Superlatif' },
  { path: '/formation/allemand/verbes-particules/exercices', component: VerbesAParticuleExercicesPage, title: 'Exercices des Verbes à Particule Séparable' },
  { path: '/formation/allemand-temps-composes/exercices', component: TempsComposesExercicesPage, title: 'Exercices des Temps Composés' },
  { path: '/formation/allemand-verbes-modaux/exercices', component: VerbesModauxComplexesExercicesPage, title: 'Exercices des Verbes Modaux Complexes' },
  { path: '/formation/allemand-position-v2/exercices', component: PositionV2ExercicesPage, title: 'Exercices de la Position V2' },
  { path: '/formation/allemand-auxiliaire-parfait/exercices', component: AuxiliaireParfaitExercicesPage, title: 'Exercices du Choix de l\'Auxiliaire au Parfait' },
  { path: '/formation/allemand-negation', component: NegationPage, title: 'La Négation et les Particules de Négation' },
  { path: '/formation/allemand-phrases-interrogatives', component: PhrasesInterrogativesPage, title: 'Les Phrases Interrogatives' },
  { path: '/formation/allemand-comparatif-superlatif', component: ComparatifSuperlatifPage, title: 'Comparatif et Superlatif' },
  { path: '/formation/allemand/sesame', component: SESAMEAllemandPage, title: 'Exercices Allemand' },

  // Formation Synthèse de Texte
  { path: '/formation/synthese-texte', component: FormationSyntheseTextePage, title: 'Formation Synthèse de Texte ECG' },
  { path: '/formation/synthese-texte/overview', component: SyntheseTexteOverviewPage, title: 'Guide Complet Synthèse de Texte' },
  { path: '/formation/synthese-texte/methode', component: MethodologiePage, title: 'Méthode de l\'Épreuve de Synthèse' },
  { path: '/formation/synthese-texte/travail-annuel', component: TravailAnnuelPage, title: 'Travail Annuel Synthèse de Texte' },
  { path: '/formation/synthese-texte/ressources', component: RessourcesPage, title: 'Ressources & Exercices Synthèse' },
  { path: '/formation/culture-generale', component: FormationCultureGeneralePage, title: 'Formation Culture Générale' },
  { path: '/formation/culture-generale/articles', component: ArticlesCultureGeneralePage, title: 'CG — Articles' },
  { path: '/formation/culture-generale/articles/analyse-sujet-juger', component: AnalyseSujetJugerPage, title: 'CG — Analyse d\'un sujet (Juger)' },
  { path: '/formation/culture-generale/articles/paradoxe-problematique', component: ParadoxeProblematiquePage, title: 'CG — Paradoxe & Problématique' },
  { path: '/formation/culture-generale/articles/plan-juger', component: PlanJugerPage, title: 'CG — Construire le plan (Juger)' },
  { path: '/formation/culture-generale/methodes', component: MethodesCultureGeneralePage, title: 'CG — Méthodes' },
  { path: '/formation/culture-generale/methodes/trois-approches-dissertation', component: TroisMethodesDissertationPage, title: 'CG — 3 Méthodes de Dissertation' },
  { path: '/formation/culture-generale/methodes/paragraphes-juger', component: MethodesParagraphesJugerPage, title: 'CG — Paragraphes (Juger)' },
  { path: '/formation/culture-generale/methodes/introduction-juger', component: IntroductionJugerPage, title: 'CG — Introduction (Juger)' },
  { path: '/formation/culture-generale/methodes/sous-parties-juger', component: SousPartiesJugerPage, title: 'CG — Sous-parties (Juger)' },
  { path: '/formation/culture-generale/methodes/transitions', component: TransitionsJugerPage, title: 'CG — Transitions' },
  { path: '/formation/culture-generale/methodes/conclusion', component: ConclusionJugerPage, title: 'CG — Conclusion' },
  { path: '/formation/culture-generale/programme', component: ProgrammeCultureGeneralePage, title: 'CG — Programme' },
  { path: '/formation/culture-generale/juger', component: JugerTermesConnexesPage, title: 'Juger — termes et définitions' },
  { path: '/formation/geopolitique', component: FormationGeopolitiquePage, title: 'Formation Géopolitique' },
  { path: '/formation/geopolitique/premiere-annee', component: GeopolitiquePremiereAnneePage, title: 'Géopolitique - Première Année' },
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EspacesMaritimesPage')), title: 'Espaces maritimes' },
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EspacesMaritimesChronologiePage')), title: 'Chronologie - Espaces maritimes' },
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes-tensions', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EspacesMaritimesTensionsPage')), title: 'Espaces maritimes – tensions et conflits' },
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes-tensions/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EspacesMaritimesTensionsChronologiePage')), title: 'Chronologie - Espaces maritimes : tensions et conflits' },
  { path: '/formation/geopolitique/premiere-annee/energies', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EnergiesGeopolitiquePage')), title: 'Géopolitique des énergies' },
  { path: '/formation/geopolitique/premiere-annee/energies/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/EnergiesChronologiePage')), title: 'Chronologie - Géopolitique des énergies' },
  { path: '/formation/geopolitique/premiere-annee/gouvernance-mondiale', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/GouvernanceMondialePage')), title: 'Gouvernance mondiale' },
  { path: '/formation/geopolitique/premiere-annee/gouvernance-mondiale/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/GouvernanceMondialeChronologiePage')), title: 'Chronologie - Gouvernance mondiale' },
  { path: '/formation/geopolitique/premiere-annee/guerres', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/GuerresPage')), title: 'Les guerres' },
  { path: '/formation/geopolitique/premiere-annee/guerres/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/GuerresChronologiePage')), title: 'Chronologie - Les guerres' },
  { path: '/formation/geopolitique/premiere-annee/migrations', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/MigrationsPage')), title: 'Les migrations' },
  { path: '/formation/geopolitique/premiere-annee/migrations/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/MigrationsChronologiePage')), title: 'Chronologie - Les migrations' },
  { path: '/formation/geopolitique/premiere-annee/puissance', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/PuissancePage')), title: 'La puissance' },
  { path: '/formation/geopolitique/premiere-annee/puissance/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/PuissanceChronologiePage')), title: 'Chronologie - La puissance' },
  { path: '/formation/geopolitique/premiere-annee/ressources-strategiques', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/RessourcesStrategiquesPage')), title: 'Ressources stratégiques' },
  { path: '/formation/geopolitique/premiere-annee/ressources-strategiques/chronologie', component: lazy(() => import('../pages/formation/geopolitique/premiere-annee/RessourcesStrategiquesChronologiePage')), title: 'Chronologie - Ressources stratégiques' },
  { path: '/formation/geopolitique/deuxieme-annee', component: GeopolitiqueDeuxiemeAnneePage, title: 'Géopolitique - Deuxième Année' },
  { path: '/formation/geopolitique/sujets-probables', component: GeopolitiqueSujetsProbablesPage, title: 'Pronostics Géopolitiques 2025' },
  { path: '/formation/geopolitique/continent-africain', component: ContinentAfricainPage, title: 'Continent Africain' },
  { path: '/formation/geopolitique/continent-africain/chronologie', component: ContinentAfricainChronologiePage, title: 'Chronologie - Continent Africain' },
  { path: '/formation/geopolitique/continent-africain/flashcards', component: ContinentAfricainFlashcardsPage, title: 'Flashcards - Continent Africain' },
  { path: '/formation/geopolitique/continent-africain/etudes-de-cas', component: ContinentAfricainSujetsPage, title: 'Études de cas - Continent Africain' },
  { path: '/formation/geopolitique/continent-africain/auteurs', component: ContinentAfricainAuteursPage, title: 'Auteurs et ouvrages - Continent Africain' },
  { path: '/formation/geopolitique/proche-moyen-orient/auteurs', component: ProcheMoyenOrientAuteursPage, title: 'Auteurs et ouvrages - Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/amerique-nord/auteurs', component: AmeriqueNordAuteursPage, title: 'Auteurs et ouvrages - Amérique du Nord' },
  { path: '/formation/geopolitique/amerique-latine/auteurs', component: AmeriqueLatineAuteursPage, title: 'Auteurs et ouvrages - Amérique latine' },
  { path: '/formation/geopolitique/asie/auteurs', component: AsieAuteursPage, title: 'Auteurs et ouvrages - Asie' },
  { path: '/formation/geopolitique/proche-moyen-orient', component: ProcheMoyenOrientPage, title: 'Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/proche-moyen-orient/chronologie', component: ProcheMoyenOrientChronologiePage, title: 'Chronologie - Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/proche-moyen-orient/flashcards', component: ProcheMoyenOrientFlashcardsPage, title: 'Flashcards - Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/proche-moyen-orient/etudes-de-cas', component: ProcheMoyenOrientSujetsPage, title: 'Études de cas - Proche et Moyen-Orient' },
  { path: '/formation/geopolitique/amerique-nord/flashcards', component: AmeriqueNordFlashcardsPage, title: 'Flashcards - Amérique du Nord' },
  { path: '/formation/geopolitique/amerique-nord/etudes-de-cas', component: AmeriqueNordSujetsPage, title: 'Études de cas - Amérique du Nord' },
  { path: '/formation/geopolitique/amerique-latine/flashcards', component: AmeriqueLatineFlashcardsPage, title: 'Flashcards - Amérique latine' },
  { path: '/formation/geopolitique/asie/flashcards', component: AsieFlashcardsPage, title: 'Flashcards - Asie' },
  { path: '/formation/geopolitique/asie/etudes-de-cas', component: AsieSujetsPage, title: 'Études de cas - Asie' },
  { path: '/formation/geopolitique/chronologie-europe', component: ChronologieEuropePage, title: 'Chronologie de l\'Europe' },
  { path: '/formation/geopolitique/union-europeenne', component: UnionEuropeennePageSimple, title: 'Union européenne' },
  { path: '/formation/geopolitique/union-europeenne/flashcards', component: UnionEuropeenneFlashcardsPage, title: 'Flashcards - Union européenne' },
  { path: '/formation/geopolitique/union-europeenne/etudes-de-cas', component: UnionEuropeenneSujetsPage, title: 'Études de cas - Union européenne' },
  { path: '/formation/geopolitique/union-europeenne/auteurs', component: UnionEuropeenneAuteursPage, title: 'Auteurs et ouvrages - Union européenne' },
  { path: '/formation/geopolitique/amerique-latine', component: AmeriqueLatinePage, title: 'Amérique latine' },
  { path: '/formation/geopolitique/amerique-latine/chronologie', component: AmeriqueLatineChronologiePage, title: 'Chronologie - Amérique latine' },
  { path: '/formation/geopolitique/amerique-latine/etudes-de-cas', component: AmeriqueLatineSujetsPage, title: 'Études de cas - Amérique latine' },
  { path: '/formation/geopolitique/asie/chronologie', component: AsieChronologiePage, title: 'Chronologie - Asie' },
  { path: '/formation/geopolitique/amerique-nord/chronologie', component: AmeriqueNordChronologiePage, title: 'Chronologie - Amérique du Nord' },
  { path: '/formation/geopolitique/sciences-technologies', component: SciencesTechnologiesPage, title: 'Sciences et Technologies dans le Monde Contemporain' },
  { path: '/formation/geopolitique/etudes-de-cas', component: EtudesDeCasPage, title: 'Thèmes centraux essentiels' },
  { path: '/formation/geopolitique/cas-pratiques', component: GeopolitiqueCasPratiquesPage, title: 'Cas Pratiques Géopolitique' },
  { path: '/formation/geopolitique/etudes-de-cas/tsmc', component: TsmcPage, title: 'TSMC - Bouclier de Silicium' },
  { path: '/formation/geopolitique/etudes-de-cas/foret-amazonienne', component: ForetAmazoniennePage, title: 'Forêt Amazonienne' },
  { path: '/formation/geopolitique/etudes-de-cas/antarctique', component: AntarctiquePage, title: 'Antarctique' },
  { path: '/formation/geopolitique/etudes-de-cas/canada-guerre-economique', component: CanadaPage, title: 'Canada - Guerre économique' },
  { path: '/formation/geopolitique/etudes-de-cas/dubai-the-line', component: DubaiPage, title: 'Dubai / The Line' },
  { path: '/formation/geopolitique/etudes-de-cas/canal-suez', component: SuezPage, title: 'Canal de Suez' },
  { path: '/formation/geopolitique/etudes-de-cas/nvidia-ia', component: NvidiaPage, title: 'NVIDIA - IA' },
  { path: '/formation/geopolitique/etudes-de-cas/guerre-economique', component: GuerreEconomiquePage, title: 'Guerre économique' },
  { path: '/formation/geopolitique/etudes-de-cas/brics', component: BricsPage, title: 'BRICS' },
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
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes/flashcards', component: GeopoliticsMaritimesFlashcardsPage, title: 'Flashcards Espaces Maritimes' },
  { path: '/formation/geopolitique/premiere-annee/espaces-maritimes-tensions/flashcards', component: GeopoliticsMaritimesTensionsFlashcardsPage, title: 'Flashcards Tensions Maritimes' },
  { path: '/formation/geopolitique/premiere-annee/energies/flashcards', component: GeopoliticsEnergiesFlashcardsPage, title: 'Flashcards Géopolitique Énergies' },
  { path: '/formation/geopolitique/premiere-annee/gouvernance-mondiale/flashcards', component: GeopoliticsGouvernanceFlashcardsPage, title: 'Flashcards Gouvernance Mondiale' },
  { path: '/formation/geopolitique/premiere-annee/guerres/flashcards', component: GeopoliticsGuerresFlashcardsPage, title: 'Flashcards Les Guerres' },
  { path: '/formation/geopolitique/premiere-annee/migrations/flashcards', component: GeopoliticsMigrationsFlashcardsPage, title: 'Flashcards Les Migrations' },
  { path: '/formation/geopolitique/premiere-annee/puissance/flashcards', component: GeopoliticsPuissanceFlashcardsPage, title: 'Flashcards La Puissance' },
  { path: '/formation/geopolitique/premiere-annee/ressources-strategiques/flashcards', component: GeopoliticsRessourcesFlashcardsPage, title: 'Flashcards Ressources Stratégiques' },
  { path: '/formation/geopolitique/generateur', component: GeopoliticsUnifiedGeneratorPage, title: 'Générateur Géopolitique' },
  { path: '/formation/geopolitique/references', component: GeopolitiquesReferencesPage, title: 'Références Géopolitiques' },
  { path: '/formation/geopolitique/methodologie', component: GeopolitiquesMethodologiePage, title: 'Méthodologie Géopolitique' },
  { path: '/formation/geopolitique/methodologie/dissertation', component: MethodologieDissertationPage, title: 'Méthodologie Dissertation' },
  { path: '/formation/geopolitique/methodologie/dissertation-a-z', component: lazy(() => import('../pages/formation/geopolitique/DissertationAZPage')), title: 'Dissertation de géopolitique de A à Z' },
  { path: '/formation/geopolitique/annales', component: AnnalesGeopolitiquePage, title: 'Annales Géopolitique' },

  // Formation ESH
  { path: '/formation/esh', component: FormationESHPage, title: 'Formation ESH ECG' },
  { path: '/formation/esh/premiere-annee', component: PremiereAnneeESHPage, title: 'Première année ESH' },
  { path: '/formation/esh/deuxieme-annee', component: DeuxiemeAnneeESHPage, title: 'Deuxième année ESH' },
  { path: '/formation/esh/methodologie', component: MethodologieESHPage, title: 'Méthodologie ESH' },
  { path: '/formation/esh/methodologie/paragraphe-efficace', component: lazy(() => import('../pages/formation/esh/methodologie/ParagrapheEfficacePage')), title: 'Paragraphe efficace en ESH' },
  { path: '/formation/esh/methodologie/introduction-dissertation', component: lazy(() => import('../pages/formation/esh/methodologie/IntroductionDissertationPage')), title: 'Introduction de dissertation en économie' },
  { path: '/formation/esh/methodologie/structure-dissertation', component: lazy(() => import('../pages/formation/esh/methodologie/StructureDissertationPage')), title: 'Structure de dissertation en économie' },
  { path: '/formation/esh/methodologie/fiches-conseils', component: lazy(() => import('../pages/formation/esh/methodologie/ConseilsFichesPage')), title: '10 conseils pour ficher ses cours d’ESH' },
  { path: '/formation/esh/etudes-cas', component: EtudesCasESHPage, title: 'Ressources ESH' },
  { path: '/formation/esh/ressources', component: RessourcesESHPage, title: 'Ressources ESH' },

  // Module 1 ESH chapters
  { path: '/formation/esh/module1/acteurs-fonctions-economie', component: ActeursFonctionsEconomiePage, title: 'Les acteurs et les grandes fonctions de l\'économie' },
  { path: '/formation/esh/module1/acteurs-fonctions-economie/module', component: ActeursFonctionsEconomieModulePage, title: 'Module – Acteurs et fonctions de l\'économie' },
  { path: '/formation/esh/module1/monnaie-financement-economie', component: MonnaieFinancementEconomiePage, title: 'La monnaie et le financement de l\'économie' },
  { path: '/formation/esh/module1/monnaie-financement-economie/module', component: MonnaieFinancementEconomieModulePage, title: 'Module – Monnaie et financement' },
  { path: '/formation/esh/module1/courants-economiques', component: CourantsEconomiquesPage, title: 'Les grands courants de la pensée économique depuis le XVIe siècle' },
  { path: '/formation/esh/module1/courants-economiques/module', component: CourantsEconomiquesModulePage, title: 'Module – Courants de la pensée économique' },

  { path: '/formation/esh/module1/equilibre-micro', component: EquilibreMicroPage, title: 'L\'équilibre micro-économique du producteur et du consommateur' },
  { path: '/formation/esh/module1/equilibre-micro/module', component: EquilibreMicroModulePage, title: 'Module – Équilibre micro-économique' },
  { path: '/formation/esh/module1/offre-demande', component: OffreDemandePage, title: 'L\'offre, la demande et l\'équilibre du marché en concurrence parfaite' },
  { path: '/formation/esh/module1/offre-demande/module', component: OffreDemandeModulePage, title: 'Module – Offre, demande et équilibre' },
  { path: '/formation/esh/module1/defaillances-marche', component: DefaillancesMarchePage, title: 'Les défaillances de marché' },
  { path: '/formation/esh/module1/defaillances-marche/module', component: DefaillancesMarcheModulePage, title: 'Module – Défaillances du marché' },

  { path: '/formation/esh/module1/courants-sociologiques', component: CourantsSociologiquesPage, title: 'Les grands courants de la pensée sociologique depuis le XIXe siècle' },
  { path: '/formation/esh/module1/methodes-sociologiques', component: MethodesSociologiquesPage, title: 'La pluralité des méthodes sociologiques' },

  // Module 3 ESH chapters - La mondialisation économique et financière
  { path: '/formation/esh/module3/ouverture-economies', component: OuvertureEconomiesPage, title: 'L\'ouverture des économies depuis le XIXe siècle : évolution et acteurs' },
  { path: '/formation/esh/module3/analyse-echanges', component: AnalyseEchangesInternationauxPage, title: 'L\'analyse économique des échanges internationaux' },
  { path: '/formation/esh/module3/regionalisation-gouvernance', component: RegionalisationGouvernancePage, title: 'Régionalisation, gouvernance et régulations internationales' },
  { path: '/formation/esh/module3/balance-paiements', component: BalancePaiementsChangePage, title: 'Balance des paiements, cours de change et systèmes de change' },
  { path: '/formation/esh/module3/evolution-systeme-monetaires', component: EvolutionSystemeMonetairePage, title: 'L\'évolution du système monétaire international depuis le XIXe siècle' },
  { path: '/formation/esh/module3/marche-capitaux', component: MarcheCapitauxPage, title: 'Constitution et fonctionnement du marché international des capitaux' },
  { path: '/formation/esh/module3/construction-europeenne', component: ConstructionEuropeennePage, title: 'La dynamique de la construction européenne' },
  { path: '/formation/esh/module3/europe-economique-monetaires', component: EuropeEconomiqueMonetairePage, title: 'L\'Europe économique et monétaire' },
  { path: '/formation/esh/module3/europe-sociale', component: EuropeSocialePage, title: 'L\'Europe sociale' },

  // Module 4 ESH chapters - Déséquilibres, régulation et action publique
  { path: '/formation/esh/module4/inflation-chomage', component: InflationChomagePage, title: 'L\'inflation et le chômage' },
  { path: '/formation/esh/module4/equilibre-macro', component: EquilibreMacroPage, title: 'L\'équilibre macroéconomique à travers les modèles : IS-LM / IS-LM-BP / OGDG' },
  { path: '/formation/esh/module4/fluctuations-economiques', component: FluctuationsEconomiquesPage, title: 'Fluctuations économiques et politiques de régulation des cycles' },
  { path: '/formation/esh/module4/politiques-structurelles', component: PolitiquesStructurellesPage, title: 'Politiques structurelles et interventions de l\'État face aux défaillances de marché' },
  { path: '/formation/esh/module4/contraintes-politiques', component: ContraintesPolitiquesPage, title: 'Les contraintes auxquelles se heurtent les politiques économiques' },
  { path: '/formation/esh/module4/justice-sociale', component: JusticeSocialePage, title: 'Justice sociale et légitimation de l\'intervention publique' },
  { path: '/formation/esh/module4/lutte-inegalites', component: LutteInegalitesPage, title: 'Les politiques de lutte contre les inégalités' },
  { path: '/formation/esh/module4/etat-providence', component: EtatProvidencePage, title: 'État-providence et protection sociale' },

  // Module 2 ESH chapters
  { path: '/formation/esh/module2/croissance-economique', component: CroissanceEconomiquePage, title: 'La croissance économique' },
  { path: '/formation/esh/module2/croissance-economique/module', component: CroissanceEconomiqueModulePage, title: 'Module – Croissance économique' },
  { path: '/formation/esh/module2/inegalites-developpement', component: InegalitesDeveloppementPage, title: 'Inégalités et stratégies de développement' },
  { path: '/formation/esh/module2/soutenabilite-croissance', component: SoutenabiliteCroissancePage, title: 'La soutenabilité de la croissance et du développement' },
  { path: '/formation/esh/module2/soutenabilite-croissance/module', component: SoutenabiliteCroissanceModulePage, title: 'Module – Soutenabilité de la croissance' },
  { path: '/formation/esh/module2/transformations-economiques-financieres', component: TransformationsEconomiquesFinancieresPage, title: 'Les transformations des structures économiques et financières' },
  { path: '/formation/esh/module2/transformations-economiques-financieres/module', component: TransformationsEconomiquesFinancieresModulePage, title: 'Module – Transformations économiques et financières' },
  { path: '/formation/esh/module2/mobilite-sociale', component: MobiliteSocialePage, title: 'Mobilité sociale et transformations des structures sociales' },
  { path: '/formation/esh/module2/transformations-demographiques', component: TransformationsDemographiquesPage, title: 'Transformations démographiques et évolution des modes de vie' },
  { path: '/formation/esh/module2/transformations-entreprise', component: TransformationsEntreprisePage, title: 'Les transformations de l\'entreprise et de sa gouvernance depuis le XIXe siècle' },
  { path: '/formation/esh/module2/transformations-entreprise/module', component: TransformationsEntrepriseModulePage, title: 'Module – Transformations de l\'entreprise' },
  { path: '/formation/esh/module2/concurrence-imparfaite', component: ConcurrenceImparfaitePage, title: 'Concurrence imparfaite et stratégies des firmes' },
  { path: '/formation/esh/module2/concurrence-imparfaite/module', component: ConcurrenceImparfaiteModulePage, title: 'Module – Concurrence imparfaite' },
  { path: '/formation/esh/module2/sociologie-travail', component: SociologieTravailPage, title: 'Éléments de sociologie du travail et des organisations' },
  { path: '/formation/anglais/civilisation', component: CivilisationOverviewPage, title: 'English Civilization - Current Affairs' },
  { path: '/formation/anglais/civilisation/environment', component: EnvironmentPage, title: 'Environment and Ecology - English Civilization' },
  { path: '/formation/anglais/civilisation/politics', component: PoliticsPage, title: 'Politics (US & UK) - English Civilization' },
  { path: '/formation/anglais/civilisation/geopolitics', component: GeopoliticsPage, title: 'Geopolitics and International Relations - English Civilization' },
  { path: '/formation/anglais/civilisation/ai-technology', component: AITechnologyPage, title: 'Artificial Intelligence and Technology - English Civilization' },
  { path: '/formation/anglais/civilisation/economy', component: EconomyPage, title: 'Economy and Globalization - English Civilization' },
  { path: '/formation/anglais/civilisation/health', component: HealthPage, title: 'Health and Healthcare Systems - English Civilization' },
  { path: '/formation/anglais/civilisation/labor', component: AnglaisLaborPage, title: 'Labor and the Future of Work - English Civilization' },
  { path: '/formation/anglais/civilisation/education', component: EducationPage, title: 'Education and Culture Wars - English Civilization' },
  { path: '/formation/anglais/civilisation/media', component: MediaPage, title: 'Media and Social Networks - English Civilization' },
  { path: '/formation/anglais/civilisation/media/sample-essays', component: AnglaisMediaSampleEssaysPage, title: 'Media Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/polarization/sample-essays', component: AnglaisPolarizationSampleEssaysPage, title: 'Polarization Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/labor/sample-essays', component: AnglaisLaborSampleEssaysPage, title: 'Labor Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/polarization', component: AnglaisPolarizationPage, title: 'Polarization - English Civilization' },
  { path: '/formation/anglais/civilisation/justice', component: JusticePage, title: 'Justice and the Rule of Law - English Civilization' },
  { path: '/formation/anglais/civilisation/civil-rights', component: CivilRightsPage, title: 'Civil Rights and Social Movements - English Civilization' },
  { path: '/formation/anglais/civilisation/brexit', component: BrexitPage, title: 'Brexit and its Aftermath - English Civilization' },
  { path: '/formation/anglais/civilisation/brexit/sample-essays', component: AnglaisBrexitSampleEssaysPage, title: 'Brexit Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/geopolitics/sample-essays', component: AnglaisGeopoliticsSampleEssaysPage, title: 'Geopolitics Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/immigration/sample-essays', component: AnglaisImmigrationSampleEssaysPage, title: 'Immigration Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/education/sample-essays', component: AnglaisEducationSampleEssaysPage, title: 'Education Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/civil-rights/sample-essays', component: AnglaisCivilRightsSampleEssaysPage, title: 'Civil Rights Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/economy/sample-essays', component: AnglaisEconomySampleEssaysPage, title: 'Economy Sample Essays - English Civilization' },
  { path: '/formation/anglais/civilisation/health-systems/sample-essays', component: AnglaisHealthSystemsSampleEssaysPage, title: 'Health Systems Sample Essays - English Civilization' },
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
  // { path: '/formation/maths-endomorphismes-matrices-avancees', component: Chapitre2EndomorphismesCoursPage, title: 'Cours - Chapitre 2 : Éléments propres et réduction des endomorphismes' }, // Moved to 2nd year

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

  // Flashcards routes pour les chapitres de 1ère année
  { path: '/formation/maths-elements-de-logique-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Éléments de logique', protected: true },
  { path: '/formation/maths-ensembles-et-applications-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Ensembles et applications', protected: true },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Sommes, produits & coefficients binomiaux', protected: true },
  { path: '/formation/maths-suites-numeriques-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Suites numériques', protected: true },
  { path: "/formation/maths-fonctions-d-une-variable-reelle-flashcards", component: MathsApprofondiesFlashcardsPage, title: "Flashcards - Fonctions d'une variable réelle", protected: true },
  { path: '/formation/maths-derivation-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Dérivation', protected: true },
  { path: '/formation/maths-integration-sur-un-segment-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Intégration sur un segment', protected: true },
  { path: '/formation/maths-polynomes-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Polynômes', protected: true },
  { path: '/formation/maths-matrices-espaces-vectoriels-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Matrices & espaces vectoriels', protected: true },
  { path: '/formation/maths-probabilites-conditionnement-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Probabilités & conditionnement', protected: true },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Applications linéaires & structures vectorielles', protected: true },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Comparaison — négligeabilité & équivalence', protected: true },
  { path: '/formation/maths-series-numeriques-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Séries numériques', protected: true },
  { path: '/formation/maths-developpements-limites-formule-de-taylor-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Développements limités & formule de Taylor', protected: true },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Intégrales impropres & critères de convergence', protected: true },
  { path: '/formation/maths-espaces-probabilises-conditionnement-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Espaces probabilisés & conditionnement', protected: true },
  { path: '/formation/maths-variables-aleatoires-discretes-lois-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Variables aléatoires discrètes & lois', protected: true },
  { path: '/formation/maths-convergences-theoremes-limites-flashcards', component: MathsApprofondiesFlashcardsPage, title: 'Flashcards - Convergences & théorèmes limites', protected: true },

  // Quiz routes pour les chapitres de 2ème année
  { path: '/formation/maths-complements-algebre-lineaire-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Compléments d\'algèbre linéaire', protected: true },
  { path: '/formation/maths-endomorphismes-matrices-avancees-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Éléments propres et réduction des endomorphismes', protected: true },
  { path: '/formation/maths-algebre-bilineaire-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Algèbre bilinéaire', protected: true },
  { path: '/formation/maths-algebre-bilineaire-espaces-euclidiens-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Algèbre bilinéaire et espaces euclidiens', protected: true },
  { path: '/formation/maths-n-uplets-variables-aleatoires-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - n-uplets de variables aléatoires réelles', protected: true },
  { path: '/formation/maths-couple-variables-aleatoires-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Probabilités (Variables aléatoires)', protected: true },
  { path: '/formation/maths-fonctions-multivariees-calcul-differentiel-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Fonctions multivariées et calcul différentiel', protected: true },
  { path: '/formation/maths-optimisation-multivariee-avancee-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Optimisation multivariée avancée', protected: true },
  { path: '/formation/maths-reduction-matrices-symetriques-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Réduction des matrices symétriques', protected: true },
  { path: '/formation/maths-convergences-approximations-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Convergences et approximations', protected: true },
  { path: '/formation/maths-estimation-statistique-avancee-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Estimation statistique avancée', protected: true },
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

  // TEMPORARILY DISABLED DUE TO FILE CORRUPTION: { path: '/formation/maths-elements-de-logique', component: MathsLogiquePage, title: 'Chapitre 1 : Logique & raisonnement fondamentaux' },
  // TEMPORARILY DISABLED DUE TO FILE CORRUPTION: { path: '/formation/maths-ensembles', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  // TEMPORARILY DISABLED DUE TO FILE CORRUPTION: { path: '/formation/maths-ensembles-et-applications', component: MathsEnsemblesPage, title: 'Maths - Ensembles et applications' },
  /* { path: '/formation/maths-suites', component: MathsSuitesPage, title: 'Maths - Suites numériques' }, */
  { path: '/formation/maths-suites-numeriques', component: MathsSuitesPage, title: 'Maths - Suites numériques' },
  { path: '/formation/maths-fonctions', component: MathsFonctionsPage, title: 'Maths - Fonctions réelles — continuité' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle', component: MathsFonctionsPage, title: 'Maths - Fonctions d\'une variable réelle' },
  { path: '/formation/maths-fonctions-une-variable-reelle-flashcards', component: Chapitre5FonctionsUneVariableReelleFlashcardsPage, title: 'Flashcards - Chapitre 5 : Fonctions d\'une variable réelle', protected: true },
  { path: '/formation/maths-derivation', component: MathsDerivationPage, title: 'Maths - Dérivation' },
  { path: '/formation/maths-derivation-flashcards', component: Chapitre6DerivationFlashcardsPage, title: 'Flashcards - Chapitre 6 : Dérivation', protected: true },
  { path: '/formation/maths-integration', component: MathsIntegrationPage, title: 'Maths - Intégration' },
  { path: '/formation/maths-polynomes', component: MathsPolynomesPage, title: 'Maths - Polynômes' },
  { path: '/formation/maths-matrices-espaces-vectoriels', component: MathsEspacesVectorielsPage, title: 'Maths - Matrices & espaces vectoriels' },
  { path: '/formation/maths-matrices-espaces-vectoriels-flashcards', component: Chapitre9MatricesEtEspacesVectorielsFlashcardsPage, title: 'Flashcards - Chapitre 9 : Matrices, systèmes linéaires & espaces vectoriels', protected: true },
  { path: '/formation/maths-espaces-vectoriels', component: MathsEspacesVectorielsPage, title: 'Maths - Matrices & espaces vectoriels' },
  { path: '/formation/maths-probabilites-finies', component: MathsProbabilitesFiniesPage, title: 'Maths - Probabilités sur un univers fini' },
  { path: '/formation/maths-probabilites-conditionnement', component: MathsProbabilitesFiniesPage, title: 'Maths - Probabilités & conditionnement' },
  { path: '/formation/maths-probabilites-conditionnement-flashcards', component: Chapitre10ProbabilitesEtConditionnementFlashcardsPage, title: 'Flashcards - Chapitre 10 : Espaces probabilisés & conditionnement', protected: true },
  // Generic catch-all quiz route for maths approfondies chapters (kept for future)
  { path: '/formation/maths-:slug-quiz', component: MathsApprofondiesQuizPage, title: 'Maths Approfondies - Quiz', protected: true },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles', component: MathsEspacesVectorielsComplementsPage, title: 'Maths - Applications linéaires & structures vectorielles' },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence', component: MathsComparaisonsPage, title: 'Maths - Comparaison — négligeabilité & équivalence' },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-flashcards', component: Chapitre12ComparaisonNegligeabiliteEquivalenceFlashcardsPage, title: 'Flashcards - Chapitre 12 : Comparaison — négligeabilité & équivalence', protected: true },
  { path: '/formation/maths-series-numeriques', component: MathsSeriesPage, title: 'Maths - Séries numériques' },
  { path: '/formation/maths-developpements-limites-formule-de-taylor', component: MathsDeveloppementsLimitesPage, title: 'Maths - Développements limités & formule de Taylor' },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence', component: MathsIntegrationIntervallePage, title: 'Maths - Intégrales impropres & critères de convergence' },
  { path: '/formation/maths-espaces-probabilises-conditionnement', component: MathsProbabilitesUniversPage, title: 'Maths - Espaces probabilisés & conditionnement' },
  { path: '/formation/maths-variables-aleatoires-discretes-lois', component: MathsVariablesAleatoiresPage, title: 'Maths - Variables aléatoires discrètes & lois' },
  { path: '/formation/maths-convergences-theoremes-limites', component: MathsInegalitesPage, title: 'Maths - Convergences & théorèmes limites' },
  { path: '/formation/maths-python', component: FormationPage, title: 'Formation Python ECG' },
  { path: '/formation/maths-elements-de-logique-exercices', component: Chapitre1LogiqueExercicesPage, title: 'Exercices - Chapitre 1 : Logique & raisonnement fondamentaux' },
  { path: '/formation/maths-ensembles-et-applications-exercices', component: Chapitre2EnsemblesExercicesPage, title: 'Exercices - Chapitre 2 : Ensembles et applications' },
  // 2ème année — endomorphismes et matrices avancées
  { path: '/formation/maths-endomorphismes-matrices-avancees', component: Chapitre2EndomorphismesCoursPage, title: 'Cours - Chapitre 2 : Éléments propres et réduction des endomorphismes', protected: true },
  { path: '/formation/maths-endomorphismes-matrices-avancees-exercices', component: Chapitre2EndomorphismesExercicesPage, title: 'Exercices - Chapitre 2 : Éléments propres et réduction des endomorphismes et matrices carrées', protected: true },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux-exercices', component: Chapitre3SommesProduitsExercicesPage, title: 'Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux' },
  { path: '/formation/maths-suites-numeriques-exercices', component: Chapitre4SuitesExercicesPage, title: 'Exercices - Chapitre 4 : Suites numériques' },
  { path: '/formation/maths-fonctions-d-une-variable-reelle-exercices', component: Chapitre5FonctionsExercicesPage, title: 'Exercices - Chapitre 5 : Fonctions d\'une variable réelle' },
  { path: '/formation/maths-derivation-exercices', component: Chapitre6DerivationExercicesPage, title: 'Exercices - Chapitre 6 : Dérivation' },
  { path: '/formation/maths-derivation-quiz', component: Chapitre6DerivationQuizPage, title: 'Quiz - Chapitre 6 : Dérivation' },
  { path: '/formation/maths-variables-aleatoires-densite', component: Chapitre6VariablesAleatoiresDensiteCoursPage, title: 'Cours - Chapitre 6 : Variables aléatoires à densité' },
  { path: '/formation/maths-variables-aleatoires-densite-exercices', component: Chapitre6VariablesAleatoiresDensiteExercicesPage, title: 'Exercices - Chapitre 6 : Variables aléatoires à densité' },
  { path: '/formation/maths-variables-aleatoires-densite-flashcards', component: Chapitre6VariablesAleatoiresDensiteFlashcardsPage, title: 'Flashcards - Chapitre 6 : Variables aléatoires à densité' },
  { path: '/formation/maths-variables-aleatoires-densite-quiz', component: MathsApprofondiesQuizPage, title: 'Quiz - Variables aléatoires à densité', protected: true },
  { path: '/formation/maths-integration-sur-un-segment-exercices', component: Chapitre7IntegrationExercicesPage, title: 'Exercices - Chapitre 7 : Intégration sur un segment' },
  { path: '/formation/maths-polynomes-exercices', component: Chapitre8PolynomesExercicesPage, title: 'Exercices - Chapitre 8 : Polynômes' },
  // 2ème année — compléments d'algèbre linéaire
  { path: '/formation/maths-complements-algebre-lineaire', component: Chapitre1ComplementsAlgebreLineaireCoursPage, title: 'Cours - Chapitre 1 : Compléments d\'algèbre linéaire', protected: true },
  { path: '/formation/maths-complements-algebre-lineaire-exercices', component: Chapitre1ComplementsAlgebreLineaireExercicesPage, title: 'Exercices - Chapitre 1 : Compléments d\'algèbre linéaire', protected: true },
  { path: '/formation/maths-complements-algebre-lineaire-flashcards', component: Chapitre1ComplementsAlgebreLineaireFlashcardsPage, title: 'Flashcards - Chapitre 1 : Compléments d\'algèbre linéaire', protected: true },
  { path: '/formation/maths-endomorphismes-matrices-avancees', component: Chapitre2EndomorphismesMatricesAvanceesCoursPage, title: 'Cours - Chapitre 2 : Éléments propres et réduction des endomorphismes', protected: true },
  { path: '/formation/maths-endomorphismes-matrices-avancees-flashcards', component: Chapitre2EndomorphismesMatricesFlashcardsPage, title: 'Flashcards - Chapitre 2 : Éléments propres et réduction des endomorphismes', protected: true },
  { path: '/formation/maths-algebre-bilineaire', component: Chapitre3AlgebreBilineaireCoursPage, title: 'Cours - Chapitre 3 : Algèbre bilinéaire', protected: true },
  { path: '/formation/maths-algebre-bilineaire-flashcards', component: Chapitre3AlgebreBilineaireFlashcardsPage, title: 'Flashcards - Chapitre 3 : Algèbre bilinéaire', protected: true },
  { path: '/formation/maths-n-uplets-variables-aleatoires', component: Chapitre7NupletsVariablesAleatoiresCoursPage, title: 'Cours - Chapitre 7 : n-uplets de variables aléatoires réelles', protected: true },
  { path: '/formation/maths-n-uplets-variables-aleatoires-flashcards', component: Chapitre7NupletsVariablesAleatoiresFlashcardsPage, title: 'Flashcards - Chapitre 7 : n-uplets de variables aléatoires réelles', protected: true },
  { path: '/formation/maths-n-uplets-variables-aleatoires-exercices', component: Chapitre7NupletsVariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 6 : n-uplets de variables aléatoires réelles', protected: true },
  { path: '/formation/maths-algebre-bilineaire-espaces-euclidiens', component: Chapitre9AlgebreBilineaireEspacesEuclidiensCoursPage, title: 'Cours - Chapitre 25 : Algèbre bilinéaire et espaces euclidiens', protected: true },
  { path: '/formation/maths-algebre-bilineaire-espaces-euclidiens-flashcards', component: Chapitre8AlgebreBilineaireEspacesEuclidiensFlashcardsPage, title: 'Flashcards - Chapitre 8 : Algèbre bilinéaire et espaces euclidiens', protected: true },
  { path: '/formation/maths-couple-variables-aleatoires', component: Chapitre8CoupleVariablesAleatoiresCoursPage, title: 'Cours - Chapitre 8 : Probabilités (Variables aléatoires)', protected: true },
  { path: '/formation/maths-couple-variables-aleatoires-flashcards', component: Chapitre8CoupleVariablesAleatoiresFlashcardsPage, title: 'Flashcards - Chapitre 7 : Cas particulier du couple', protected: true },
  { path: '/formation/maths-couple-variables-aleatoires-exercices', component: Chapitre8CoupleVariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 7 : Cas particulier du couple', protected: true },
  { path: '/formation/maths-matrices-espaces-vectoriels-exercices', component: Chapitre9MatricesExercicesPage, title: 'Exercices - Chapitre 9 : Matrices & espaces vectoriels' },
  { path: '/formation/maths-algebre-bilineaire-exercices', component: Chapitre3AlgebreBilineaireExercicesPage, title: 'Exercices - Chapitre 3 : Algèbre bilinéaire' },
  { path: '/formation/maths-algebre-bilineaire-espaces-euclidiens-exercices', component: Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage, title: 'Exercices - Chapitre 9 : Algèbre bilinéaire et espaces euclidiens' },
  { path: '/formation/maths-probabilites-conditionnement-exercices', component: Chapitre10ProbabilitesExercicesPage, title: 'Exercices - Chapitre 10 : Probabilités & conditionnement' },
  { path: '/formation/maths-applications-lineaires-structures-vectorielles-exercices', component: Chapitre11ApplicationsLineairesExercicesPage, title: 'Exercices - Chapitre 11 : Applications linéaires & structures vectorielles' },
  { path: '/formation/maths-optimisation-multivariee-avancee', component: Chapitre11OptimisationMultivarieeAvanceeCoursPage, title: 'Chapitre 11 : Optimisation multivariée avancée', protected: true },
  { path: '/formation/maths-optimisation-multivariee-avancee-exercices', component: Chapitre11OptimisationMultivarieeAvanceeExercicesPage, title: 'Exercices - Chapitre 11 : Optimisation multivariée avancée' },
  { path: '/formation/maths-optimisation-multivariee-avancee-flashcards', component: Chapitre11OptimisationMultivarieeAvanceeFlashcardsPage, title: 'Flashcards - Chapitre 11 : Optimisation multivariée avancée', protected: true },
  { path: '/formation/maths-optimisation-multivariee-avancee-quiz', component: Chapitre11OptimisationMultivarieeAvanceeQuizPage, title: 'Quiz - Chapitre 11 : Optimisation multivariée avancée', protected: true },
  { path: '/formation/maths-fonctions-multivariees-calcul-differentiel', component: Chapitre4FonctionsMultivariees_CalculDifferentielCoursPage, title: 'Cours - Chapitre 4 : Fonctions multivariées et calcul différentiel' },
  { path: '/formation/maths-fonctions-multivariees-calcul-differentiel-exercices', component: Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage, title: 'Exercices - Chapitre 4 : Fonctions multivariées et calcul différentiel' },
  { path: '/formation/maths-fonctions-multivariees-calcul-differentiel-flashcards', component: Chapitre4FonctionsMultivarieesCalculDifferentielFlashcardsPage, title: 'Flashcards - Chapitre 4 : Fonctions multivariées et calcul différentiel', protected: true },
  { path: '/formation/maths-comparaison-negligeabilite-equivalence-exercices', component: Chapitre12ComparaisonExercicesPage, title: 'Exercices - Chapitre 12 : Comparaison — négligeabilité & équivalence' },
  { path: '/formation/maths-series-numeriques-exercices', component: Chapitre13SeriesExercicesPage, title: 'Exercices - Chapitre 13 : Séries numériques' },
  { path: '/formation/maths-developpements-limites-formule-de-taylor-exercices', component: Chapitre14DeveloppementsExercicesPage, title: 'Exercices - Chapitre 14 : Développements limités & formule de Taylor' },
  { path: '/formation/maths-integrales-impropres-criteres-de-convergence-exercices', component: Chapitre15IntegralesImpropresExercicesPage, title: 'Exercices - Chapitre 15 : Intégrales impropres & critères de convergence' },
  { path: '/formation/maths-espaces-probabilises-conditionnement-exercices', component: Chapitre16EspacesProbabilisesExercicesPage, title: 'Exercices - Chapitre 16 : Espaces probabilisés & conditionnement' },
  { path: '/formation/maths-variables-aleatoires-discretes-lois-exercices', component: Chapitre17VariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 17 : Variables aléatoires discrètes & lois' },
  { path: '/formation/maths-convergences-theoremes-limites-exercices', component: Chapitre18ConvergencesExercicesPage, title: 'Exercices - Chapitre 18 : Convergences & théorèmes limites' },
  { path: '/formation/maths-reduction-matrices-symetriques', component: Chapitre10ReductionMatricesSymetriquesCoursPage, title: 'Chapitre 10 : Réduction des endomorphismes et matrices symétriques', protected: true },
  { path: '/formation/maths-reduction-matrices-symetriques-flashcards', component: Chapitre10ReductionMatricesSymetriquesFlashcardsPage, title: 'Flashcards - Chapitre 9 : Réduction des endomorphismes et des matrices symétriques', protected: true },
  { path: '/formation/maths-reduction-matrices-symetriques-exercices', component: Chapitre10ReductionMatricesSymetriquesExercicesPage, title: 'Exercices - Chapitre 10 : Réduction des endomorphismes et matrices symétriques', protected: true },
  { path: '/formation/maths-convergences-approximations', component: Chapitre12ConvergencesApproximationsCoursPage, title: 'Chapitre 12 : Convergences et approximations', protected: true },
  { path: '/formation/maths-convergences-approximations-flashcards', component: Chapitre12ConvergencesApproximationsFlashcardsPage, title: 'Flashcards - Chapitre 12 : Convergences et approximations', protected: true },
  { path: '/formation/maths-convergences-approximations-exercices', component: Chapitre12ConvergencesApproximationsExercicesPage, title: 'Exercices - Chapitre 12 : Convergences et approximations', protected: true },
  { path: '/formation/maths-estimation-statistique-avancee', component: Chapitre13EstimationStatistiqueAvanceeCoursPage, title: 'Chapitre 13 : Estimation statistique avancée', protected: true },
  { path: '/formation/maths-estimation-statistique-avancee-flashcards', component: Chapitre13EstimationStatistiqueAvanceeFlashcardsPage, title: 'Flashcards - Chapitre 13 : Estimation statistique avancée', protected: true },
  { path: '/formation/maths-intervalles-confiance-exercices', component: Chapitre13EstimationStatistiqueAvanceeExercicesPage, title: 'Exercices - Chapitre 28 : Intervalles de confiance', protected: true },
  // Alias cohérent avec le slug utilisé dans les cartes pour éviter les 404
  { path: '/formation/maths-estimation-statistique-avancee-exercices', component: Chapitre13EstimationStatistiqueAvanceeExercicesPage, title: 'Exercices - Chapitre 28 : Estimation statistique avancée', protected: true },
  { path: '/formation/maths-theorie-estimation-statistique-exercices', component: Chapitre31TheorieEstimationStatistiqueExercicesPage, title: 'Exercices - Chapitre 31 : Théorie de l\'estimation statistique', protected: true },
  { path: '/formation/maths-complements-variables-aleatoires-exercices', component: Chapitre5ComplementsVariablesAleatoiresExercicesPage, title: 'Exercices - Chapitre 5 : Compléments sur les variables aléatoires', protected: true },

  // Maths Appliquées - Nouveaux chapitres
  { path: '/formation/maths-elements-de-logique', component: Chapitre1ElementsDeLogiqueCoursPage, title: 'Chapitre 1 : Éléments de logique', protected: true },
  { path: '/formation/maths-ensembles-et-applications', component: Chapitre2EnsemblesEtApplicationsCoursPage, title: 'Chapitre 2 : Ensembles et applications', protected: true },
  { path: '/formation/maths-sommes-produits-coefficients-binomiaux', component: Chapitre3SommesProduitsCoefficientsCoursPage, title: 'Chapitre 3 : Sommes, produits & coefficients binomiaux', protected: true },
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
  { path: '/generator/culture-generale', component: CultureGeneraleGeneratorPage, title: 'Générateur Culture Générale' },

  { path: '/generator/theme-grammar', component: ThemeGrammarGeneratorPage, title: 'Thème Grammatical' },
  { path: '/generator/paragraph', component: ParagraphGeneratorPage, title: 'Générateur de Paragraphes' },
  { path: '/generator/geopolitics-paradox', component: GeopoliticsParadoxGeneratorPage, title: 'Paradoxes Géopolitiques' },
  { path: '/generator/math', component: MathGeneratorPage, title: 'Générateur Maths' },

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
    path: '/formation/math/terminale-vers-prepa/calculs-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 1 : Calculs',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/calculs-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 1 : Calculs',
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
    path: '/formation/math/terminale-vers-prepa/sommes-suites-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 2 : Sommes, suites et produits',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/sommes-suites-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 2 : Sommes, suites et produits',
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
    path: '/formation/math/terminale-vers-prepa/fonctions-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 3 : Fonctions',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/fonctions-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 3 : Fonctions',
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
    path: '/formation/math/terminale-vers-prepa/derivees-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 4 : Dérivées',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/derivees-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 4 : Dérivées',
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
    path: '/formation/math/terminale-vers-prepa/integrales-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 5 : Intégrales',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/integrales-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 5 : Intégrales',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/limites-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre6-Limites-CoursPage')),
    title: 'Cours - Chapitre 6 : Limites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/limites-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre6-Limites-ExercicesPage')),
    title: 'Exercices - Chapitre 6 : Limites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/limites-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 6 : Limites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/limites-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 6 : Limites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/suites-cours',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre3-Suites-CoursPage')),
    title: 'Cours - Chapitre 3 : Suites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/suites-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre3-Suites-ExercicesPage')),
    title: 'Exercices - Chapitre 3 : Suites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/suites-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 3 : Suites',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/suites-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 3 : Suites',
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
    path: '/formation/math/terminale-vers-prepa/probabilites-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 6 : Probabilités',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/probabilites-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 6 : Probabilités',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/matrice-exercices',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/Chapitre7-Matrice-ExercicesPage')),
    title: 'Exercices - Chapitre 7 : Matrice',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/matrices-quiz',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaQuizPage')),
    title: 'Quiz - Chapitre 7 : Matrices',
    protected: false
  },
  {
    path: '/formation/math/terminale-vers-prepa/matrices-flashcards',
    component: lazy(() => import('../pages/formation/math/terminale-vers-prepa/TerminaleVersPrepaFlashcardsPage')),
    title: 'Flashcards - Chapitre 7 : Matrices',
    protected: false
  },

  // Routes pour les formations mathématiques
  {
    path: '/formation/maths-choix',
    component: lazy(() => import('../pages/formation/math/MathsChoixOptionPage')),
    title: 'Choix option Maths ECG',
    protected: false
  },
  {
    path: '/formation/maths-approfondies',
    component: lazy(() => import('../pages/formation/math/MathsApprofondies/MathsApprofondiesPage')),
    title: 'Mathématiques Approfondies ECG',
    protected: false
  },
  {
    path: '/formation/maths-methodologie',
    component: lazy(() => import('../pages/formation/math/MathsMethodologiePage')),
    title: 'Méthodologie Maths ECG',
    protected: true
  },
  {
    path: '/formation/maths-appliquees',
    component: lazy(() => import('../pages/formation/math/MathsAppliquees/MathsAppliqueesPage')),
    title: 'Mathématiques Appliquées ECG',
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
