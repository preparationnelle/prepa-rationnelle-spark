import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const EducationVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Système éducatif (général) / Educational System (General)
    { id: 1, french: "Éducation", english: "Education", category: "Système éducatif (général)" },
    { id: 2, french: "Scolarité", english: "Schooling", category: "Système éducatif (général)" },
    { id: 3, french: "Enseignement primaire", english: "Primary education", category: "Système éducatif (général)" },
    { id: 4, french: "Enseignement secondaire", english: "Secondary education", category: "Système éducatif (général)" },
    { id: 5, french: "Enseignement supérieur", english: "Higher education", category: "Système éducatif (général)" },
    { id: 6, french: "Université", english: "University", category: "Système éducatif (général)" },
    { id: 7, french: "École publique", english: "Public school (US) / State school (UK)", category: "Système éducatif (général)" },
    { id: 8, french: "École privée", english: "Private school", category: "Système éducatif (général)" },
    { id: 9, french: "École élitiste", english: "Elite school", category: "Système éducatif (général)" },
    { id: 10, french: "Collège (US: université)", english: "College", category: "Système éducatif (général)" },

    // 2. Acteurs et structures / Actors and Structures
    { id: 11, french: "Enseignant", english: "Teacher", category: "Acteurs et structures" },
    { id: 12, french: "Professeur d'université", english: "Professor", category: "Acteurs et structures" },
    { id: 13, french: "Étudiant", english: "Student", category: "Acteurs et structures" },
    { id: 14, french: "Élève", english: "Pupil", category: "Acteurs et structures" },
    { id: 15, french: "Recteur", english: "Chancellor (UK) / Superintendent (US)", category: "Acteurs et structures" },
    { id: 16, french: "Inspecteur", english: "Inspector", category: "Acteurs et structures" },
    { id: 17, french: "Ministre de l'Éducation", english: "Education Secretary", category: "Acteurs et structures" },
    { id: 18, french: "Académie", english: "Academy / School district", category: "Acteurs et structures" },
    { id: 19, french: "Conseil scolaire", english: "School board", category: "Acteurs et structures" },
    { id: 20, french: "Salles de classe", english: "Classrooms", category: "Acteurs et structures" },

    // 3. Diplômes et examens / Degrees and Exams
    { id: 21, french: "Diplôme", english: "Degree", category: "Diplômes et examens" },
    { id: 22, french: "Baccalauréat", english: "A-levels (UK) / High school diploma (US)", category: "Diplômes et examens" },
    { id: 23, french: "Licence", english: "Bachelor's degree", category: "Diplômes et examens" },
    { id: 24, french: "Master", english: "Master's degree", category: "Diplômes et examens" },
    { id: 25, french: "Doctorat", english: "PhD / Doctorate", category: "Diplômes et examens" },
    { id: 26, french: "Concours", english: "Competitive exam", category: "Diplômes et examens" },
    { id: 27, french: "Notes", english: "Grades / Marks", category: "Diplômes et examens" },
    { id: 28, french: "Moyenne générale", english: "GPA (Grade Point Average)", category: "Diplômes et examens" },
    { id: 29, french: "Classement", english: "Ranking", category: "Diplômes et examens" },
    { id: 30, french: "Ivy League", english: "Ivy League", category: "Diplômes et examens" },

    // 4. Politiques éducatives / Educational Policies
    { id: 31, french: "Égalité des chances", english: "Equal opportunities", category: "Politiques éducatives" },
    { id: 32, french: "Affirmative action", english: "Affirmative action", category: "Politiques éducatives" },
    { id: 33, french: "Discrimination positive", english: "Positive discrimination", category: "Politiques éducatives" },
    { id: 34, french: "Système de bourses", english: "Scholarship system", category: "Politiques éducatives" },
    { id: 35, french: "Frais de scolarité", english: "Tuition fees", category: "Politiques éducatives" },
    { id: 36, french: "Endettement étudiant", english: "Student debt", category: "Politiques éducatives" },
    { id: 37, french: "Prêt étudiant", english: "Student loan", category: "Politiques éducatives" },
    { id: 38, french: "Éducation gratuite", english: "Free education", category: "Politiques éducatives" },
    { id: 39, french: "Privatisation", english: "Privatization", category: "Politiques éducatives" },
    { id: 40, french: "Éducation publique", english: "Public education", category: "Politiques éducatives" },

    // 5. Débats pédagogiques / Pedagogical Debates
    { id: 41, french: "Méthodes pédagogiques", english: "Teaching methods", category: "Débats pédagogiques" },
    { id: 42, french: "Apprentissage à distance", english: "Distance learning", category: "Débats pédagogiques" },
    { id: 43, french: "Télédiffusion des cours", english: "Online classes", category: "Débats pédagogiques" },
    { id: 44, french: "Hybridation", english: "Hybrid learning", category: "Débats pédagogiques" },
    { id: 45, french: "Éducation inclusive", english: "Inclusive education", category: "Débats pédagogiques" },
    { id: 46, french: "Handicap", english: "Disability", category: "Débats pédagogiques" },
    { id: 47, french: "Programme scolaire", english: "Curriculum", category: "Débats pédagogiques" },
    { id: 48, french: "Matières fondamentales", english: "Core subjects", category: "Débats pédagogiques" },
    { id: 49, french: "Compétences transversales", english: "Soft skills", category: "Débats pédagogiques" },
    { id: 50, french: "Évaluation continue", english: "Continuous assessment", category: "Débats pédagogiques" },

    // 6. Culture wars : thèmes de société à l'école / Culture Wars: Social Issues at School
    { id: 51, french: "Guerres culturelles", english: "Culture wars", category: "Culture wars : thèmes de société à l'école" },
    { id: 52, french: "Valeurs traditionnelles", english: "Traditional values", category: "Culture wars : thèmes de société à l'école" },
    { id: 53, french: "Valeurs progressistes", english: "Progressive values", category: "Culture wars : thèmes de société à l'école" },
    { id: 54, french: "Identité de genre", english: "Gender identity", category: "Culture wars : thèmes de société à l'école" },
    { id: 55, french: "Orientation sexuelle", english: "Sexual orientation", category: "Culture wars : thèmes de société à l'école" },
    { id: 56, french: "Mariage homosexuel", english: "Same-sex marriage", category: "Culture wars : thèmes de société à l'école" },
    { id: 57, french: "Théorie du genre", english: "Gender theory", category: "Culture wars : thèmes de société à l'école" },
    { id: 58, french: "LGBTQ+", english: "LGBTQ+", category: "Culture wars : thèmes de société à l'école" },
    { id: 59, french: "Minorités", english: "Minorities", category: "Culture wars : thèmes de société à l'école" },
    { id: 60, french: "Diversité", english: "Diversity", category: "Culture wars : thèmes de société à l'école" },

    // 7. Débats identitaires et historiques / Identity and Historical Debates
    { id: 61, french: "Racisme systémique", english: "Systemic racism", category: "Débats identitaires et historiques" },
    { id: 62, french: "Inégalités raciales", english: "Racial inequalities", category: "Débats identitaires et historiques" },
    { id: 63, french: "Ségrégation", english: "Segregation", category: "Débats identitaires et historiques" },
    { id: 64, french: "Mouvement des droits civiques", english: "Civil rights movement", category: "Débats identitaires et historiques" },
    { id: 65, french: "Black Lives Matter", english: "Black Lives Matter (BLM)", category: "Débats identitaires et historiques" },
    { id: 66, french: "Wokeness", english: "Wokeness", category: "Débats identitaires et historiques" },
    { id: 67, french: "Cancel culture", english: "Cancel culture", category: "Débats identitaires et historiques" },
    { id: 68, french: "Réécriture de l'histoire", english: "Revision of history", category: "Débats identitaires et historiques" },
    { id: 69, french: "Colonisation", english: "Colonization", category: "Débats identitaires et historiques" },
    { id: 70, french: "Mémoire collective", english: "Collective memory", category: "Débats identitaires et historiques" },

    // 8. Religion et valeurs / Religion and Values
    { id: 71, french: "Laïcité (UK/US : liberté religieuse)", english: "Secularism / Religious freedom", category: "Religion et valeurs" },
    { id: 72, french: "Religion à l'école", english: "Religion in schools", category: "Religion et valeurs" },
    { id: 73, french: "Créationnisme", english: "Creationism", category: "Religion et valeurs" },
    { id: 74, french: "Darwinisme", english: "Darwinism", category: "Religion et valeurs" },
    { id: 75, french: "Prières à l'école", english: "School prayer", category: "Religion et valeurs" },
    { id: 76, french: "Neutralité religieuse", english: "Religious neutrality", category: "Religion et valeurs" },
    { id: 77, french: "Valeurs chrétiennes", english: "Christian values", category: "Religion et valeurs" },
    { id: 78, french: "Multiculturalisme", english: "Multiculturalism", category: "Religion et valeurs" },
    { id: 79, french: "Identité nationale", english: "National identity", category: "Religion et valeurs" },
    { id: 80, french: "Patriotisme", english: "Patriotism", category: "Religion et valeurs" },

    // 9. Médias et opinion / Media and Opinion
    { id: 81, french: "Médias conservateurs", english: "Conservative media", category: "Médias et opinion" },
    { id: 82, french: "Médias progressistes", english: "Progressive media", category: "Médias et opinion" },
    { id: 83, french: "Fox News", english: "Fox News", category: "Médias et opinion" },
    { id: 84, french: "CNN", english: "CNN", category: "Médias et opinion" },
    { id: 85, french: "Débat public", english: "Public debate", category: "Médias et opinion" },
    { id: 86, french: "Polarisation", english: "Polarization", category: "Médias et opinion" },
    { id: 87, french: "Opinion publique", english: "Public opinion", category: "Médias et opinion" },
    { id: 88, french: "Manifestation", english: "Demonstration / Protest", category: "Médias et opinion" },
    { id: 89, french: "Controverse", english: "Controversy", category: "Médias et opinion" },
    { id: 90, french: "Liberté académique", english: "Academic freedom", category: "Médias et opinion" },

    // 10. Tendances et perspectives / Trends and Perspectives
    { id: 91, french: "Numérisation de l'éducation", english: "Digitalization of education", category: "Tendances et perspectives" },
    { id: 92, french: "IA dans l'éducation", english: "AI in education", category: "Tendances et perspectives" },
    { id: 93, french: "ChatGPT et les devoirs", english: "ChatGPT and homework", category: "Tendances et perspectives" },
    { id: 94, french: "Plagiat", english: "Plagiarism", category: "Tendances et perspectives" },
    { id: 95, french: "Triche", english: "Cheating", category: "Tendances et perspectives" },
    { id: 96, french: "Compétences du futur", english: "Future skills", category: "Tendances et perspectives" },
    { id: 97, french: "Mobilité sociale", english: "Social mobility", category: "Tendances et perspectives" },
    { id: 98, french: "Ascenseur social", english: "Social elevator", category: "Tendances et perspectives" },
    { id: 99, french: "Méritocratie", english: "Meritocracy", category: "Tendances et perspectives" },
    { id: 100, french: "Élites", english: "Elites", category: "Tendances et perspectives" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  const currentCard = vocabularyData[currentCardIndex];

  const nextCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev + 1) % vocabularyData.length);
    setIsFlipped(false);
  }, [vocabularyData.length]);

  const previousCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev - 1 + vocabularyData.length) % vocabularyData.length);
    setIsFlipped(false);
  }, [vocabularyData.length]);

  const shuffleCards = useCallback(() => {
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);
    vocabularyData.splice(0, vocabularyData.length, ...shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, []);

  const resetCards = useCallback(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    setProgress(((currentCardIndex + 1) / vocabularyData.length) * 100);
  }, [currentCardIndex, vocabularyData.length]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          previousCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case ' ':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'r':
        case 'R':
          resetCards();
          break;
        case 's':
        case 'S':
          shuffleCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [previousCard, nextCard, isFlipped, resetCards, shuffleCards]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Système éducatif (général)': 'bg-blue-500',
      'Acteurs et structures': 'bg-green-500',
      'Diplômes et examens': 'bg-purple-500',
      'Politiques éducatives': 'bg-orange-500',
      'Débats pédagogiques': 'bg-red-500',
      'Culture wars : thèmes de société à l\'école': 'bg-emerald-500',
      'Débats identitaires et historiques': 'bg-teal-500',
      'Religion et valeurs': 'bg-indigo-500',
      'Médias et opinion': 'bg-pink-500',
      'Tendances et perspectives': 'bg-cyan-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/formation/anglais/civilisation" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour à la civilisation anglaise
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                Éducation et Guerres culturelles
              </Badge>
              <span className="text-sm text-gray-600">
                {currentCardIndex + 1} / {vocabularyData.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-indigo-200">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className={`${getCategoryColor(currentCard.category)} text-white`}>
                  {currentCard.category}
                </Badge>
                <span className="text-sm text-gray-600">#{currentCard.id}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHelp(!showHelp)}
              >
                <Keyboard className="h-4 w-4 mr-2" />
                Raccourcis
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative min-h-[300px] flex items-center justify-center cursor-pointer">
              {/* Face avant */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {currentCard.french}
                  </h2>
                  <p className="text-gray-600">Cliquez pour voir la traduction</p>
                </div>
              </div>

              {/* Face arrière */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                    {currentCard.english}
                  </h2>
                  <p className="text-gray-600">Traduction en anglais</p>
                </div>
              </div>

              {/* Zone cliquable */}
              <div 
                className="absolute inset-0 z-10"
                onClick={() => setIsFlipped(!isFlipped)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contrôles */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            onClick={previousCard}
            disabled={currentCardIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Retourner
          </Button>

          <Button
            variant="outline"
            onClick={nextCard}
            disabled={currentCardIndex === vocabularyData.length - 1}
            className="flex items-center gap-2"
          >
            Suivant
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Actions supplémentaires */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            onClick={shuffleCards}
            className="flex items-center gap-2 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
          >
            <Shuffle className="h-4 w-4" />
            Mélanger
          </Button>

          <Button
            variant="outline"
            onClick={resetCards}
            className="flex items-center gap-2 bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
          >
            <RotateCcw className="h-4 w-4" />
            Recommencer
          </Button>
        </div>

        {/* Aide */}
        {showHelp && (
          <Card className="mb-8 border-2 border-yellow-200">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-yellow-600" />
                Raccourcis clavier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Navigation :</p>
                  <p>← → : Carte précédente/suivante</p>
                  <p>Espace : Retourner la carte</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Actions :</p>
                  <p>R : Recommencer</p>
                  <p>S : Mélanger</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Statistiques */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-indigo-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">
                  {Math.round(progress)}%
                </p>
                <p className="text-sm text-gray-600">Progression</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  {currentCardIndex + 1}
                </p>
                <p className="text-sm text-gray-600">Carte actuelle</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationVocabularyPage; 