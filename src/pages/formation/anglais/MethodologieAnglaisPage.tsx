import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Target } from 'lucide-react';

const MethodologieAnglaisPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/anglais" className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4" />
              Retour à la formation
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Target className="h-9 w-9" />
            </div>
            Méthode Complète d'Anglais en Prépa ECG
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-orange-800 font-semibold">
                ⚠️ <strong>Attention :</strong> Ceci n'est pas une méthode pour apprendre l'anglais, c'est une méthode pour réussir les épreuves d'anglais en prépa HEC.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 : Traduction et Grammaire */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              Traduction et Grammaire
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Pourquoi est-ce crucial ?</h3>
              <p className="text-gray-700">
                La traduction est non seulement une épreuve des concours, c'est aussi un moyen efficace de maîtriser la grammaire anglaise !
              </p>
            </div>
            
            <div className="bg-blue-50/50 p-4 rounded-lg mb-4 border border-blue-200/50">
              <h3 className="font-semibold text-blue-800 mb-2">Comment s'y prendre efficacement ?</h3>
              <p className="text-gray-700">
                Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou disponibles dans les annales des concours comme Ecricome LV2. Les corrigés sont détaillés et présentent souvent plein d'options de traduction.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Exemples ECRICOME 2008 LV2 :</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded border-l-4 border-orange-600">
                  <p className="text-gray-700 mb-1">
                    <strong>1.</strong> Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.
                  </p>
                  <p className="text-orange-700 font-medium">
                    → Since the early 90s, Japan has been combatting deflation and sluggish growth.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-orange-600">
                  <p className="text-gray-700 mb-1">
                    <strong>2.</strong> Si la reprise économique n'avait pas été si timide, il n'y aurait pas eu tant de fermetures d'usines.
                  </p>
                  <p className="text-orange-700 font-medium">
                    → Had the economic recovery not been so modest, there would not have been so many factory closures.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-orange-600">
                  <p className="text-gray-700 mb-1">
                    <strong>3.</strong> Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.
                  </p>
                  <p className="text-orange-700 font-medium">
                    → The less time you spend on social networks, the closer you will get to your true friends.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-200/50">
              <p className="text-orange-800 font-semibold">
                🚀 Ce que je propose : Vous pouvez accéder à mon fichier Quizlet avec des centaines de phrases de thème corrigées.
              </p>
              <div className="mt-3">
                <a
                  href="https://www.ecricome.org/wp-content/uploads/2021/01/ANNALE-LV2-ANGLAISALLEMAND-ESPAGNOL-PRE%CC%81PA-2018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 font-medium text-sm"
                >
                  → Lien vers le corrigé complet ECRICOME 2008 LV2
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 : Gestion des erreurs */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              Gérer vos erreurs
            </h2>

            <div className="bg-blue-50/50 p-4 rounded-lg mb-4 border border-blue-200/50">
              <h3 className="font-semibold text-blue-800 mb-2">Pourquoi ?</h3>
              <p className="text-gray-700">
                Prendre des notes structurées sur vos erreurs, vocabulaire et nouvelles structures rencontrées vous aide à progresser plus vite. Cela vous permet aussi de réviser efficacement sans repartir de zéro. Ceci est valable pour la traduction, et aussi pour les essais.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">1. Gérer vos erreurs en Trois Points</h3>
              <p className="text-gray-700 mb-3">
                Identifiez vos erreurs fréquentes : par exemple un problème d'accord ("The informations are not reliable" au lieu de "The information is not reliable").
              </p>
              
              <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                <h4 className="font-semibold text-gray-800 mb-2">Carnet d'erreurs :</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-red-600"><strong>Erreur :</strong> "She suggested me to work harder."</p>
                  <p className="text-green-600"><strong>Correction :</strong> "She suggested that I should work harder."</p>
                  <p className="text-blue-600"><strong>Explication :</strong> Le verbe suggest ne prend pas d'objet direct.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Répétez cette structure pour toutes les erreurs</strong> que vous faites et vous verrez vos progrès arriver très vite.
                </p>
              </div>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/50">
              <h3 className="font-semibold text-blue-800 mb-3">2. Vocabulaire</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Créer un carnet thématique :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Classez les mots par thèmes (environnement, économie, politique, société…)</li>
                    <li>• Ajoutez des synonymes et des exemples</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-gray-800 mb-1"><strong>"Sluggish growth"</strong> → synonymes : weak growth</p>
                  <p className="text-gray-600 italic">Exemple : "Japan has struggled with sluggish growth for decades."</p>
                </div>

                <div>
                  <p className="text-blue-800"><strong>Focus sur l'orthographe :</strong> accommodation, environment, indispensable.</p>
                  <p className="text-blue-800"><strong>Flashcards :</strong> Utilisez une appli comme Anki pour mémoriser vos mots clés.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Annonce des sections suivantes */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">📖 Contenu complet de la méthode</h3>
            <div className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <p><strong>✅ Sections déjà disponibles :</strong></p>
              <p>• 1. Traduction et Grammaire</p>
              <p>• 2. Gérer vos erreurs</p>

              <p className="pt-2"><strong>🔄 Sections à venir :</strong></p>
              <p>• 3. Approfondir les Thèmes qui tombent aux concours</p>
              <p>• 4. Préparation Structurée des Colles</p>
              <p>• 5. Réussir Essais et Synthèses</p>
              <p>• 6. Maximiser le travail à l'approche des concours</p>
              <p>• 7. Organisation du temps</p>
              <p>• Conclusion et bonus</p>
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-800 font-semibold">
                📚 Le contenu complet sera ajouté progressivement pour garantir la stabilité
              </p>
            </div>
          </div>

          {/* Bonus temporaire */}
          <div className="bg-orange-50/50 rounded-lg p-6 border border-orange-200/50">
            <h3 className="text-xl font-bold text-orange-800 mb-3">🎁 Bonus</h3>
            <p className="text-orange-700 mb-4">Pour te récompenser d'être arrivé jusqu'ici, je te propose aussi :</p>
            <ul className="text-orange-600 space-y-2">
              <li>• La méthode pour traduire de manière efficace</li>
              <li>• La méthode de l'essai</li>
              <li>• La méthode pour faire une synthèse réussie</li>
              <li>• Méthodologie de la Colle d'anglais : comment faire une colle d'anglais</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg border border-orange-200/50">
              <p className="text-orange-800 font-semibold text-center">💬 Envoie moi un message pour en savoir plus !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologieAnglaisPage;