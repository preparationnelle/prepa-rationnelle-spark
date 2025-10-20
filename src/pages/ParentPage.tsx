import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Target, Heart, CheckCircle, ArrowRight, Phone, Calendar, Award } from 'lucide-react';

const ParentPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        {/* Bulles décoratives */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Users className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Espace Parents</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-orange-600">Prépa Rationnelle</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              Vous accompagne du collège à la prépa
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Offrez à votre enfant un accompagnement personnalisé et de qualité pour réussir son parcours scolaire. 
              De la préparation aux concours aux cours de soutien, nos professeurs experts sont là pour l'aider à atteindre ses objectifs.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/parent-form">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Réserver un accompagnement
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-600 px-8 py-6 text-lg rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Élèves accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Professeurs experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Taux de satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Matières proposées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section: Niveaux */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-orange-600">Tous les niveaux</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Un accompagnement adapté à chaque étape du parcours scolaire
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Collège */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Collège</h3>
              <p className="text-sm text-gray-600 mb-4">
                Consolider les bases et préparer le brevet
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Toutes les matières
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Méthodologie
                </li>
              </ul>
            </div>

            {/* Lycée */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Lycée</h3>
              <p className="text-sm text-gray-600 mb-4">
                Réussir le bac et préparer le supérieur
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Préparation bac
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Spécialités
                </li>
              </ul>
            </div>

            {/* Prépa ECG */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Prépa ECG</h3>
              <p className="text-sm text-gray-600 mb-4">
                Intégrer les meilleures écoles
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Maths & Python
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Concours blancs
                </li>
              </ul>
            </div>

            {/* Cube */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Cube</h3>
              <p className="text-sm text-gray-600 mb-4">
                Atteindre le top 3
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Suivi intensif
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Stratégie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section: Pourquoi nous choisir */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-orange-500 rounded-full opacity-5 animate-pulse"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-blue-600">Pourquoi choisir Prépa Rationnelle ?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Un accompagnement qui fait la différence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professeurs qualifiés */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Professeurs d'élite</h3>
              <p className="text-gray-600 text-center">
                Tous nos professeurs sont issus des meilleures écoles (HEC, Polytechnique, ENS...) et maîtrisent parfaitement les programmes.
              </p>
            </div>

            {/* Suivi personnalisé */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Suivi sur-mesure</h3>
              <p className="text-gray-600 text-center">
                Chaque élève bénéficie d'un plan d'accompagnement adapté à son niveau, ses besoins et ses objectifs.
              </p>
            </div>

            {/* Résultats garantis */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Résultats prouvés</h3>
              <p className="text-gray-600 text-center">
                95% de nos élèves constatent une amélioration significative de leurs notes et de leur confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section CTA Final */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-orange-500 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-600">Prêt à accompagner votre enfant</span>
            <br />
            <span className="text-gray-900">vers la réussite ?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Réservez dès maintenant un accompagnement personnalisé ou contactez-nous pour en savoir plus sur nos offres.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/parent-form">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                <Calendar className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                Réserver un accompagnement
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Témoignage rapide */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Grâce à Prépa Rationnelle, mon fils a gagné 4 points de moyenne en maths et a retrouvé confiance en lui. Les professeurs sont excellents et très pédagogues."
            </p>
            <p className="font-semibold text-gray-900">— Marie D., maman d'un élève de 1ère année ECG</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentPage;