import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeEPSPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for EPS */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">EPS - </span>
                <span className="text-blue-600">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Programme complet de l'épreuve d'EPS au baccalauréat en Terminale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee/terminale">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à Terminale
                  </Button>
                </Link>
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    ← Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article EPS - Programme */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Programme de l'épreuve d'EPS en Terminale</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Article détaillé - Éducation Physique et Sportive Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-green-400 mb-8">
                  <p className="text-blue-800 font-medium text-lg">
                    <strong>Principale caractéristique :</strong> l'épreuve d'éducation physique et sportive (EPS) au baccalauréat se déroule en contrôle continu (CCF) durant l'année de terminale, avec trois évaluations portant sur trois activités physiques, sportives et artistiques (APSA), dont au moins une collective, choisies par l'établissement en lien avec les cinq champs d'apprentissage du cycle terminal.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Objectifs de l'enseignement en Terminale</h4>

                <p className="mb-4">
                  Dès la classe de Terminale, les apprentissages de Première sont complétés selon deux niveaux de compétences :
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Niveau 1 : socle commun minimal exigible</h5>
                <p className="mb-6">
                  Pour l'ensemble du cycle terminal, devant être atteint et évalué au baccalauréat.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Niveau 2 : approfondissement libre encouragé</h5>
                <p className="mb-6">
                  Pour les lycéens les plus engagés, selon un projet personnalisé d'entraînement et d'analyse réflexive.
                </p>

                <p className="mb-6">
                  Au-delà de la réussite à l'examen, l'EPS en Terminale vise à rendre les élèves capables de :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Maintenir une pratique physique autonome et responsable après le lycée</li>
                  <li>Gérer leur santé et leurs risques corporels</li>
                  <li>Développer un esprit critique et citoyen face aux enjeux sociaux et culturels du sport contemporain</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Contenus et APSA programmées</h4>

                <p className="mb-4">
                  Chaque année de Terminale comprend la programmation de trois APSA :
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Deux APSA issues de l'ensemble commun (ex. volley-ball, badminton, natation, acrosport, course d'orientation, rugby, danse, etc.)</li>
                  <li>Une APSA dite collective, impliquant une collaboration obligatoire (ex. sports collectifs, acrosport, chorégraphie)</li>
                </ul>

                <p className="mb-6">
                  Pour chaque APSA, sont définis :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Des situations caractéristiques de pratique (mise en situation en cours de formation)</li>
                  <li>Des compétences attendues (culturelles et méthodologiques) aux niveaux 1 et 2</li>
                  <li>Des connaissances techniques, tactiques et procédurales (savoirs et savoir-faire) à acquérir et évaluer</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Modalités d'évaluation</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Contrôle continu (CCF)</h5>
                <p className="mb-6">
                  Trois évaluations distinctes durant l'année, notées sur 20 ; la moyenne constitue la note finale d'EPS au bac.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Référentiel national</h5>
                <p className="mb-6">
                  Pour chaque APSA, un référentiel précise les critères de réussite (performance motrice, tactique, réflexivité et respect des règles collectives).
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Suivi individualisé</h5>
                <p className="mb-6">
                  Une fiche de bilan accompagne l'élève, récapitulant les APSA pratiquées, les compétences travaillées et le niveau atteint (de « niveau de seconde » à « niveau 2 »).
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-green-400 mb-8">
                  <p className="text-blue-800 font-medium mb-4">
                    Ainsi, l'épreuve d'EPS en Terminale repose sur une évaluation formative et certificative de la maîtrise des compétences motrices, tactiques, artistiques et méthodologiques, avec un accent sur l'engagement, l'analyse réflexive et l'autonomie.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Trois évaluations notées sur 20</h4>

                <p className="mb-6">
                  Chaque élève participe à trois situations d'évaluation (trois APSA) durant l'année de Terminale.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Au moins une des APSA doit être collective (sport co., acrosport, chorégraphie…) et au moins deux prises dans la liste nationale ou académique (volley-ball, natation, course d'orientation, danse, musculation, etc.)</li>
                  <li>Pour chaque APSA, l'élève obtient une note sur 20</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Moyenne simple pour la note finale</h5>
                <p className="mb-6">
                  La moyenne arithmétique des trois notes sur 20 constitue la note finale d'EPS au baccalauréat (sur 20).
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Répartition des critères d'évaluation</h5>
                <p className="mb-4">
                  Pour chaque APSA, le référentiel national fixe quatre grands critères de notation :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Performance motrice (technique, efficacité)</li>
                  <li>Choix et mise en œuvre tactique ou méthodologique</li>
                  <li>Capacité d'analyse et réflexivité (justification des choix, auto-évaluation)</li>
                  <li>Respect des règles et attitudes individuelles ou collectives</li>
                </ul>

                <p className="mb-8">
                  Le barème détaillé (pondération de chaque critère) est élaboré par l'équipe pédagogique en référence aux attendus de fin de lycée pour le champ d'apprentissage concerné.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Trophy className="h-8 w-8 text-blue-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  Besoin d'aide personnalisée en EPS ?
                </h3>
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser vos APSA et réussir votre épreuve d'EPS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-600 text-white transition-all duration-300">
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

export default LyceeEPSPage;
