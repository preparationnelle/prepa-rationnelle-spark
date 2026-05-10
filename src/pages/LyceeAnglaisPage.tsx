import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Languages, ArrowLeft } from 'lucide-react';

const LyceeAnglaisPage = () => {
  return (
    <>
      <div className="relative py-8 sm:py-8">
        {/* Floating elements - Blue theme for anglais */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center">
                  <Languages className="h-8 w-8 text-carnet-red" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Anglais - </span>
                <span className="text-carnet-red">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Méthodologie complète pour maîtriser l'anglais et réussir les épreuves du baccalauréat en LV1.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee/terminale">
                  <Button variant="outline" className="border-carnet-red text-carnet-red hover:border-carnet-red-deep hover:text-carnet-red">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à Terminale
                  </Button>
                </Link>
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-carnet-red text-carnet-red hover:border-carnet-red-deep hover:text-carnet-red">
                    ← Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Anglais - Méthodologie */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-carnet-red/30">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="h-8 w-8 text-carnet-red" />
                </div>
                <h3 className="text-3xl font-bold text-carnet-red mb-2">Méthodologie pour travailler l'anglais en classe de terminale</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-carnet-red/10 text-carnet-red">
                  Article détaillé - LV1 Anglais Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-pr-orange-pale p-6 rounded-lg border-l-4 border-carnet-red/40 mb-8">
                  <p className="text-carnet-red-deep font-medium text-lg">
                    Réussir en anglais en terminale nécessite une approche structurée et régulière. Cette méthodologie vous aidera à atteindre le niveau B2 requis et à exceller aux épreuves du baccalauréat.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Organisation générale et planification</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Établir un planning de révisions équilibré</h5>
                <p className="mb-4">
                  L'organisation constitue la base de la réussite. Créez un planning mensuel qui inclut :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Les dates des contrôles et évaluations</li>
                  <li>Un temps quotidien dédié à l'anglais (30 minutes minimum)</li>
                  <li>Une alternance entre les différentes compétences</li>
                  <li>Des créneaux spécifiques pour chaque axe culturel du programme</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Varier les activités d'apprentissage</h5>
                <p className="mb-6">
                  Évitez la monotonie en alternant les types d'activités :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>30 minutes de grammaire puis 30 minutes de vocabulaire</li>
                  <li>Lecture d'articles puis écoute de podcasts</li>
                  <li>Expression écrite suivie d'expression orale</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Développer les quatre compétences linguistiques</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Compréhension orale</h5>
                <p className="mb-4">
                  Méthode d'entraînement progressive :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Étape 1 : Films et séries en VO avec sous-titres français</li>
                  <li>Étape 2 : VO avec sous-titres anglais pour associer sons et graphies</li>
                  <li>Étape 3 : VO sans sous-titres (niveau avancé)</li>
                </ul>

                <p className="mb-6">
                  Technique d'écoute efficace :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Prenez des notes directement en anglais</li>
                  <li>Organisez vos notes en trois colonnes (une par écoute)</li>
                  <li>Utilisez des abréviations et codez vos notes</li>
                  <li>Focalisez-vous sur les mots-clés plutôt que sur la transcription complète</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Compréhension écrite</h5>
                <p className="mb-4">
                  Stratégies de lecture :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Lisez régulièrement la presse anglophone (BBC, The Times)</li>
                  <li>Commencez par des textes niveau B2 puis progressez vers C1</li>
                  <li>Pratiquez le repérage des mots-clés et l'analyse de structure</li>
                  <li>Privilégiez les thématiques liées aux axes culturels étudiés</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Expression écrite</h5>
                <p className="mb-4">
                  Entraînement régulier :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Rédigez des essais sur des sujets variés</li>
                  <li>Maîtrisez les connecteurs logiques et les mots de liaison</li>
                  <li>Travaillez la structure : introduction, développement, conclusion</li>
                  <li>Utilisez les annales pour vous entraîner aux formats d'examen</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Expression orale</h5>
                <p className="mb-4">
                  Préparation continue :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Enregistrez-vous en lisant à voix haute des articles</li>
                  <li>Demandez à votre professeur de corriger votre accent</li>
                  <li>Participez activement en cours</li>
                  <li>Échangez avec des correspondants anglophones si possible</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Apprentissage du vocabulaire et de la grammaire</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Constitution d'un glossaire personnel</h5>
                <p className="mb-4">
                  Technique efficace :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Achetez un petit carnet de vocabulaire</li>
                  <li>Notez tous les nouveaux mots rencontrés</li>
                  <li>Ajoutez une définition et un exemple d'usage</li>
                  <li>Révisez régulièrement ce vocabulaire</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Maîtrise des structures grammaticales</h5>
                <p className="mb-4">
                  Les points essentiels à maîtriser pour le niveau B2 :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Les modaux et leur valeur</li>
                  <li>Le discours indirect</li>
                  <li>Les temps du passé et du futur</li>
                  <li>Les connecteurs logiques</li>
                  <li>L'expression de l'opinion et de l'argumentation</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Création de fiches de révision</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Méthode de révision par séquence</h5>
                <p className="mb-4">
                  Révision systématique :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Créez des fiches après chaque séquence</li>
                  <li>Incluez le vocabulaire thématique</li>
                  <li>Notez les structures grammaticales nouvelles</li>
                  <li>Ajoutez les idées liées à la problématique traitée</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Techniques de mémorisation</h5>
                <p className="mb-4">
                  Méthodes d'assimilation :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Écrivez les informations importantes</li>
                  <li>Récitez à voix haute</li>
                  <li>Créez des associations visuelles ou auditives</li>
                  <li>Utilisez la répétition espacée pour ancrer les connaissances</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Préparation spécifique aux épreuves</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Pour l'épreuve orale</h5>
                <p className="mb-4">
                  Structure de présentation :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Introduction : "I'm going to deal with..."</li>
                  <li>Définition du thème : "First of all, I would like to give the definition of..."</li>
                  <li>Annonce du plan : "Firstly... Secondly... Thirdly..."</li>
                  <li>Développement avec références aux documents étudiés</li>
                  <li>Conclusion avec opinion personnelle et ouverture</li>
                </ul>

                <p className="mb-4">
                  Vocabulaire utile :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Pour structurer : "Furthermore", "Moreover", "However", "Therefore"</li>
                  <li>Pour donner son avis : "In my opinion", "I believe that", "I can't deny that"</li>
                  <li>Pour conclure : "To sum up", "To conclude"</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Pour l'épreuve écrite</h5>
                <p className="mb-4">
                  Méthodologie de la synthèse :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Introduction : présentation des documents + thesis statement + annonce du plan</li>
                  <li>Développement : utilisez tous les documents dans chaque paragraphe</li>
                  <li>Conclusion : rappel des idées principales + opinion personnelle</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Immersion et pratique quotidienne</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Intégration de l'anglais dans le quotidien</h5>
                <p className="mb-4">
                  Immersion digitale :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Changez la langue de vos appareils en anglais</li>
                  <li>Suivez des comptes anglophones sur les réseaux sociaux</li>
                  <li>Écoutez des podcasts pendant vos trajets</li>
                  <li>Regardez des vidéos YouTube en anglais</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Ressources recommandées</h5>
                <p className="mb-4">
                  Pour le niveau B2 :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Podcasts : "6-minute English" de la BBC</li>
                  <li>Chaînes YouTube : BBC Learning English</li>
                  <li>Sites d'entraînement : British Council, Franglish, Annabac</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Suivi et évaluation des progrès</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Auto-évaluation régulière</h5>
                <p className="mb-4">
                  Bilan des compétences :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Évaluez vos forces et faiblesses dans chaque compétence</li>
                  <li>Utilisez une notation simple (++, +, -, --)</li>
                  <li>Demandez conseil à votre professeur si nécessaire</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Points d'étape mensuels</h5>
                <p className="mb-8">
                  Effectuez des bilans réguliers pour :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Vérifier l'atteinte de vos objectifs</li>
                  <li>Identifier les lacunes persistantes</li>
                  <li>Réajuster votre méthode de travail</li>
                </ul>

                <div className="bg-pr-orange-pale p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="text-carnet-red-deep font-medium">
                    Cette méthodologie, appliquée avec régularité et détermination, vous permettra d'atteindre le niveau B2 requis en terminale et de réussir brillamment vos épreuves d'anglais au baccalauréat.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-carnet-paper-2 to-orange-50 border-2 border-carnet-red/30 hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-gradient-to-br hover:from-orange-50 hover:to-pr-orange-pale transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-carnet-red/10 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Languages className="h-8 w-8 text-carnet-red group-hover:text-pr-orange transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">
                  Besoin d'aide personnalisée en anglais ?
                </h3>
                <p className="text-gray-600 group-hover:text-pr-orange-dark transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser l'anglais LV1 et atteindre le niveau B2.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-carnet-red hover:bg-pr-orange-dark text-white transition-all duration-300">
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LyceeAnglaisPage;
