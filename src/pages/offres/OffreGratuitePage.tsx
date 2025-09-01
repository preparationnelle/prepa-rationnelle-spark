import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, Video, CheckCircle, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionnaireState {
  selectedOption: 'ECG1' | 'ECG2' | 'NOT_ECG' | null;
  showResult: boolean;
}

const OffreGratuitePage = () => {
  const [questionnaire, setQuestionnaire] = useState<QuestionnaireState>({
    selectedOption: null,
    showResult: false
  });

  const handleOptionSelection = (option: 'ECG1' | 'ECG2' | 'NOT_ECG') => {
    setQuestionnaire({
      selectedOption: option,
      showResult: option === 'ECG1' || option === 'ECG2'
    });
    
    // Si c'est une sélection ECG1 ou ECG2, scroll vers la section résultat
    if (option === 'ECG1' || option === 'ECG2') {
      setTimeout(() => {
        const resultSection = document.getElementById('result-section');
        if (resultSection) {
          resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const resetQuestionnaire = () => {
    setQuestionnaire({
      selectedOption: null,
      showResult: false
    });
  };

  const getZoomInfo = () => {
    if (questionnaire.selectedOption === 'ECG1') {
      return {
        title: 'LIVE PREPA RATIONNELLE ECG1',
        date: '15 août 2025',
        time: '17h00 (Paris)',
        link: 'https://us06web.zoom.us/j/89904429485?pwd=nfgPsNa3NfToDydFgUK3cVjKa5Smjb.1',
        meetingId: '899 0442 9485',
        passcode: '903709'
      };
    } else {
      return {
        title: 'LIVE PREPA RATIONNELLE ECG2',
        date: '16 août 2025',
        time: '18h00 (Paris)',
        link: 'https://us06web.zoom.us/j/85969711286?pwd=mlybf0LbQyJFt7jS86CEJpYa43KtXY.1',
        meetingId: '859 6971 1286',
        passcode: '092815'
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/nos-offres" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux offres
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Offre <span className="text-orange-500">Gratuite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Participe gratuitement à nos sessions live de préparation à la rentrée !
            </p>
            <div className="mt-4 inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              14 jours pour se préparer à la rentrée !
            </div>
          </div>
        </div>
      </section>

      {/* Programme Details */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white border border-gray-200/50 rounded-2xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Programme des sessions live
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div 
                className="bg-blue-50 rounded-lg p-6 border border-blue-200 cursor-pointer hover:bg-blue-100 hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => handleOptionSelection('ECG1')}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-blue-900">ECG 1ère année</h3>
                    <p className="text-blue-700 text-sm">Session dédiée aux nouveaux arrivants</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    15 août 2025 à 17h00
                  </div>
                  <div className="flex items-center">
                    <Video className="w-4 h-4 mr-2" />
                    Session Zoom interactive
                  </div>
                </div>
                <div className="mt-4 text-xs text-blue-600 font-semibold">
                  👆 Cliquez ici pour accéder à votre session
                </div>
              </div>

              <div 
                className="bg-green-50 rounded-lg p-6 border border-green-200 cursor-pointer hover:bg-green-100 hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => handleOptionSelection('ECG2')}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-green-900">ECG 2ème année</h3>
                    <p className="text-green-700 text-sm">Session pour les carrés</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-green-800">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    16 août 2025 à 18h00
                  </div>
                  <div className="flex items-center">
                    <Video className="w-4 h-4 mr-2" />
                    Session Zoom interactive
                  </div>
                </div>
                <div className="mt-4 text-xs text-green-600 font-semibold">
                  👆 Cliquez ici pour accéder à votre session
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Au programme :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Stratégies de révision pour la rentrée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Planning optimal pour les 14 derniers jours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Points essentiels à revoir en maths</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Q&A en direct avec Dimitri</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Questionnaire */}
          <Card className="p-8 bg-white border border-gray-200/50 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Accéder à votre session
            </h2>

            {!questionnaire.showResult ? (
              <div className="max-w-2xl mx-auto">
                {questionnaire.selectedOption === null && (
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                      Choisissez votre situation :
                    </h3>
                    <div className="space-y-4">
                      <Button 
                        onClick={() => handleOptionSelection('ECG1')}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-lg"
                      >
                        Oui, je rentre en ECG 1
                      </Button>
                      <Button 
                        onClick={() => handleOptionSelection('ECG2')}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg"
                      >
                        Oui, je rentre en ECG 2
                      </Button>
                      <Button 
                        onClick={() => handleOptionSelection('NOT_ECG')}
                        variant="outline"
                        className="w-full py-4"
                      >
                        Non, je ne suis pas en prépa ECG
                      </Button>
                    </div>
                  </div>
                )}

                {questionnaire.selectedOption === 'NOT_ECG' && (
                  <div className="text-center">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Sessions réservées aux étudiants ECG
                      </h3>
                      <p className="text-yellow-700 mb-4">
                        Ces sessions sont spécifiquement conçues pour les étudiants en prépa ECG. 
                        Si vous souhaitez découvrir nos autres formations, consultez notre catalogue complet.
                      </p>
                      <div className="space-y-2">
                        <Link to="/formations">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Découvrir nos formations
                          </Button>
                        </Link>
                        <br />
                        <Button 
                          variant="outline" 
                          onClick={resetQuestionnaire}
                          className="mt-2"
                        >
                          Recommencer
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div id="result-section" className="max-w-2xl mx-auto text-center">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Parfait ! Voici votre session
                  </h3>
                  
                  {(questionnaire.selectedOption === 'ECG1' || questionnaire.selectedOption === 'ECG2') && (
                    <div className="bg-white rounded-lg p-6 mt-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">
                        {getZoomInfo().title}
                      </h4>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-gray-600 mr-2" />
                          <span className="font-semibold">{getZoomInfo().date} à {getZoomInfo().time}</span>
                        </div>
                        
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                          <p className="text-orange-800 font-semibold mb-2">Votre lien de session :</p>
                          <a 
                            href={getZoomInfo().link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 underline text-sm break-all"
                          >
                            {getZoomInfo().link}
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <a 
                          href={getZoomInfo().link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                            <Video className="w-5 h-5 mr-2" />
                            Rejoindre la session Zoom
                          </Button>
                        </a>
                        
                        <Button 
                          variant="outline" 
                          onClick={resetQuestionnaire}
                          className="w-full"
                        >
                          Modifier ma sélection
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    💡 <strong>Conseil :</strong> Ajoutez cet événement à votre calendrier et rejoignez-nous 5 minutes avant le début !
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default OffreGratuitePage;