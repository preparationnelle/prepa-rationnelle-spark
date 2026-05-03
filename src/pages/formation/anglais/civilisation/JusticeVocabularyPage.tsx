import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const JusticeVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Système judiciaire / Judicial System
    { id: 1, french: "Justice", english: "Justice", category: "Système judiciaire" },
    { id: 2, french: "État de droit", english: "Rule of law", category: "Système judiciaire" },
    { id: 3, french: "Système juridique", english: "Legal system", category: "Système judiciaire" },
    { id: 4, french: "Tribunal", english: "Court", category: "Système judiciaire" },
    { id: 5, french: "Juge", english: "Judge", category: "Système judiciaire" },
    { id: 6, french: "Avocat", english: "Lawyer", category: "Système judiciaire" },
    { id: 7, french: "Procureur", english: "Prosecutor", category: "Système judiciaire" },
    { id: 8, french: "Prétoire", english: "Courtroom", category: "Système judiciaire" },
    { id: 9, french: "Cour suprême", english: "Supreme court", category: "Système judiciaire" },
    { id: 10, french: "Tribunal international", english: "International court", category: "Système judiciaire" },

    // 2. Droit et législation / Law and Legislation
    { id: 11, french: "Loi", english: "Law", category: "Droit et législation" },
    { id: 12, french: "Règlement", english: "Regulation", category: "Droit et législation" },
    { id: 13, french: "Droit constitutionnel", english: "Constitutional law", category: "Droit et législation" },
    { id: 14, french: "Droit pénal", english: "Criminal law", category: "Droit et législation" },
    { id: 15, french: "Droit civil", english: "Civil law", category: "Droit et législation" },
    { id: 16, french: "Droit international", english: "International law", category: "Droit et législation" },
    { id: 17, french: "Droit administratif", english: "Administrative law", category: "Droit et législation" },
    { id: 18, french: "Droit des affaires", english: "Business law", category: "Droit et législation" },
    { id: 19, french: "Droit commercial", english: "Commercial law", category: "Droit et législation" },
    { id: 20, french: "Droit du travail", english: "Labor law", category: "Droit et législation" },

    // 3. Procédure et procès / Procedure and Trials
    { id: 21, french: "Procédure", english: "Procedure", category: "Procédure et procès" },
    { id: 22, french: "Procès", english: "Trial", category: "Procédure et procès" },
    { id: 23, french: "Audience", english: "Hearing", category: "Procédure et procès" },
    { id: 24, french: "Appel", english: "Appeal", category: "Procédure et procès" },
    { id: 25, french: "Verdict", english: "Verdict", category: "Procédure et procès" },
    { id: 26, french: "Jugement", english: "Judgment", category: "Procédure et procès" },
    { id: 27, french: "Sentence", english: "Sentence", category: "Procédure et procès" },
    { id: 28, french: "Procédure civile", english: "Civil procedure", category: "Procédure et procès" },
    { id: 29, french: "Règles de procédure", english: "Procedural rules", category: "Procédure et procès" },
    { id: 30, french: "Enquête", english: "Investigation", category: "Procédure et procès" },

    // 4. Droits et libertés / Rights and Liberties
    { id: 31, french: "Droits humains", english: "Human rights", category: "Droits et libertés" },
    { id: 32, french: "Liberté individuelle", english: "Individual liberty", category: "Droits et libertés" },
    { id: 33, french: "Droits des minorités", english: "Minority rights", category: "Droits et libertés" },
    { id: 34, french: "Droit des femmes", english: "Women's rights", category: "Droits et libertés" },
    { id: 35, french: "Droit des enfants", english: "Children's rights", category: "Droits et libertés" },
    { id: 36, french: "Droit des réfugiés", english: "Refugee law", category: "Droits et libertés" },
    { id: 37, french: "Droit humanitaire", english: "Humanitarian law", category: "Droits et libertés" },
    { id: 38, french: "Droit de la famille", english: "Family law", category: "Droits et libertés" },
    { id: 39, french: "Droit électoral", english: "Electoral law", category: "Droits et libertés" },
    { id: 40, french: "Propriété intellectuelle", english: "Intellectual property", category: "Droits et libertés" },

    // 5. Justice pénale / Criminal Justice
    { id: 41, french: "Justice pénale", english: "Criminal justice", category: "Justice pénale" },
    { id: 42, french: "Code pénal", english: "Penal code", category: "Justice pénale" },
    { id: 43, french: "Amende", english: "Fine", category: "Justice pénale" },
    { id: 44, french: "Prison", english: "Prison", category: "Justice pénale" },
    { id: 45, french: "Peine", english: "Penalty", category: "Justice pénale" },
    { id: 46, french: "Réhabilitation", english: "Rehabilitation", category: "Justice pénale" },
    { id: 47, french: "Liberté conditionnelle", english: "Parole", category: "Justice pénale" },
    { id: 48, french: "Justice pénitentiaire", english: "Prison justice", category: "Justice pénale" },
    { id: 49, french: "Justice des mineurs", english: "Juvenile justice", category: "Justice pénale" },
    { id: 50, french: "Justice des victimes", english: "Victims' justice", category: "Justice pénale" },

    // 6. Justice sociale et équité / Social Justice and Equity
    { id: 51, french: "Justice sociale", english: "Social justice", category: "Justice sociale et équité" },
    { id: 52, french: "Équité", english: "Equity", category: "Justice sociale et équité" },
    { id: 53, french: "Égalité devant la loi", english: "Equality before the law", category: "Justice sociale et équité" },
    { id: 54, french: "Justice économique", english: "Economic justice", category: "Justice sociale et équité" },
    { id: 55, french: "Justice environnementale", english: "Environmental justice", category: "Justice sociale et équité" },
    { id: 56, french: "Justice climatique", english: "Climate justice", category: "Justice sociale et équité" },
    { id: 57, french: "Justice sociale globale", english: "Global social justice", category: "Justice sociale et équité" },
    { id: 58, french: "Justice équitable", english: "Fair justice", category: "Justice sociale et équité" },
    { id: 59, french: "Justice communautaire", english: "Community justice", category: "Justice sociale et équité" },
    { id: 60, french: "Justice participative", english: "Participatory justice", category: "Justice sociale et équité" },

    // 7. Résolution de conflits / Conflict Resolution
    { id: 61, french: "Arbitrage", english: "Arbitration", category: "Résolution de conflits" },
    { id: 62, french: "Médiation", english: "Mediation", category: "Résolution de conflits" },
    { id: 63, french: "Litige", english: "Dispute", category: "Résolution de conflits" },
    { id: 64, french: "Règlement de conflit", english: "Conflict resolution", category: "Résolution de conflits" },
    { id: 65, french: "Tribunal arbitral", english: "Arbitration court", category: "Résolution de conflits" },
    { id: 66, french: "Justice transitionnelle", english: "Transitional justice", category: "Résolution de conflits" },
    { id: 67, french: "Réparation", english: "Reparation", category: "Résolution de conflits" },
    { id: 68, french: "Amnistie", english: "Amnesty", category: "Résolution de conflits" },
    { id: 69, french: "Justice restaurative", english: "Restorative justice", category: "Résolution de conflits" },
    { id: 70, french: "Défense", english: "Defense", category: "Résolution de conflits" },

    // 8. Contrôle et surveillance / Control and Oversight
    { id: 71, french: "Surveillance", english: "Oversight", category: "Contrôle et surveillance" },
    { id: 72, french: "Prévention", english: "Prevention", category: "Contrôle et surveillance" },
    { id: 73, french: "Sanctions", english: "Sanctions", category: "Contrôle et surveillance" },
    { id: 74, french: "Impunité", english: "Impunity", category: "Contrôle et surveillance" },
    { id: 75, french: "Corruption", english: "Corruption", category: "Contrôle et surveillance" },
    { id: 76, french: "Transparence", english: "Transparency", category: "Contrôle et surveillance" },
    { id: 77, french: "Responsabilité", english: "Accountability", category: "Contrôle et surveillance" },
    { id: 78, french: "Régulation juridique", english: "Legal regulation", category: "Contrôle et surveillance" },
    { id: 79, french: "Révision", english: "Review", category: "Contrôle et surveillance" },
    { id: 80, french: "Justice administrative", english: "Administrative justice", category: "Contrôle et surveillance" },

    // 9. Pouvoirs et indépendance / Powers and Independence
    { id: 81, french: "Pouvoir judiciaire", english: "Judicial power", category: "Pouvoirs et indépendance" },
    { id: 82, french: "Indépendance judiciaire", english: "Judicial independence", category: "Pouvoirs et indépendance" },
    { id: 83, french: "Indépendance du barreau", english: "Bar independence", category: "Pouvoirs et indépendance" },
    { id: 84, french: "Constitution", english: "Constitution", category: "Pouvoirs et indépendance" },
    { id: 85, french: "Amendement", english: "Amendment", category: "Pouvoirs et indépendance" },
    { id: 86, french: "Juridiction", english: "Jurisdiction", category: "Pouvoirs et indépendance" },
    { id: 87, french: "Droit public", english: "Public law", category: "Pouvoirs et indépendance" },
    { id: 88, french: "Droit privé", english: "Private law", category: "Pouvoirs et indépendance" },
    { id: 89, french: "Tribunal spécial", english: "Special court", category: "Pouvoirs et indépendance" },
    { id: 90, french: "Justice internationale", english: "International justice", category: "Pouvoirs et indépendance" },

    // 10. Preuves et témoignages / Evidence and Testimony
    { id: 91, french: "Témoignage", english: "Testimony", category: "Preuves et témoignages" },
    { id: 92, french: "Preuve", english: "Evidence", category: "Preuves et témoignages" },
    { id: 93, french: "Accusation", english: "Prosecution", category: "Preuves et témoignages" },
    { id: 94, french: "Contrat", english: "Contract", category: "Preuves et témoignages" },
    { id: 95, french: "Jurisprudence", english: "Case law", category: "Preuves et témoignages" },
    { id: 96, french: "Législation", english: "Legislation", category: "Preuves et témoignages" },
    { id: 97, french: "Droit des affaires internationales", english: "International business law", category: "Preuves et témoignages" },
    { id: 98, french: "Droit environnemental", english: "Environmental law", category: "Preuves et témoignages" },
    { id: 99, french: "Réforme judiciaire", english: "Judicial reform", category: "Preuves et témoignages" },
    { id: 100, french: "Prétoire", english: "Court of law", category: "Preuves et témoignages" },
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
      'Système judiciaire': 'bg-blue-500',
      'Droit et législation': 'bg-green-500',
      'Procédure et procès': 'bg-red-500',
      'Droits et libertés': 'bg-purple-500',
      'Justice pénale': 'bg-orange-500',
      'Justice sociale et équité': 'bg-emerald-500',
      'Résolution de conflits': 'bg-teal-500',
      'Contrôle et surveillance': 'bg-indigo-500',
      'Pouvoirs et indépendance': 'bg-pink-500',
      'Preuves et témoignages': 'bg-cyan-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-white">
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
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Justice et l'État de droit
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
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
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
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">
                    {currentCard.english}
                  </h2>
                  <p className="text-gray-600">Traduction en anglais</p>
                </div>
              </div>

              {/* Zone cliquable */}
              <div 
                className="absolute -z-10 inset-0 z-10"
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
                <div>
                  <p className="font-semibold mb-2">Actions :</p>
                  <p>R : Recommencer</p>
                  <p>S : Mélanger</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        )}

        {/* Statistiques */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">
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

export default JusticeVocabularyPage; 