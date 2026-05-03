import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Target, Heart, CheckCircle, ArrowRight, Phone, Calendar, School } from 'lucide-react';

const ParentPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      style={{
        '--animate-duration': '0.8s',
      } as React.CSSProperties}
    >
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
        {/* Bulles décoratives animées */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full opacity-10 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300 rounded-full opacity-5 blur-2xl animate-float-slow"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center">

            {/* Titre principal */}
            <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Prépa Rationnelle
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8" style={{ animationDelay: '0.2s' }}>
              Vous accompagne du collège à la prépa
            </p>

            {/* Description */}
            <p className="fade-in-up text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Offrez à votre enfant un accompagnement personnalisé et de qualité pour réussir son parcours scolaire.
            </p>

            {/* CTA principal */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                onClick={() => {
                  const message = encodeURIComponent("Bonjour Prépa Rationnelle, je souhaite réserver un accompagnement personnalisé pour mon enfant. Pouvez-vous me donner plus d'informations ?");
                  window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
                }}
              >
                <Calendar className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Réserver un accompagnement
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-600 px-8 py-6 text-lg rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <Phone className="h-5 w-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="scale-in text-center" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Élèves accompagnés</div>
              </div>
              <div className="scale-in text-center" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">+20</div>
                <div className="text-sm text-gray-600">Professeurs experts</div>
              </div>
              <div className="scale-in text-center" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Taux de satisfaction</div>
              </div>
              <div className="scale-in text-center" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Matières proposées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Niveaux */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-10 w-40 h-40 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-gray-900">Tous les niveaux</span>
          </h2>
          <p className="fade-in-up text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ animationDelay: '0.1s' }}>
            Un accompagnement adapté à chaque étape du parcours scolaire
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primaire */}
            <Link to="/articles/primaire" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-orange-400 group block" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <School className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Primaire</h3>
              <p className="text-sm text-gray-600 mb-4">
                Acquérir les fondamentaux
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Lecture & Écriture
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Calcul & Logique
                </li>
              </ul>
            </Link>
            {/* Collège */}
            <Link to="/articles/college" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-orange-400 group block" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Collège</h3>
              <p className="text-sm text-gray-600 mb-4">
                Consolider les bases et préparer le brevet
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Toutes les matières
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Méthodologie
                </li>
              </ul>
            </Link>

            {/* Lycée */}
            <Link to="/articles/lycee" className="fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-orange-400 group block" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">Lycée</h3>
              <p className="text-sm text-gray-600 mb-4">
                Réussir le bac et préparer le supérieur
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Préparation bac
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Spécialités
                </li>
              </ul>
            </Link>


          </div>
        </div>
      </section>

      {/* Section: Pourquoi nous choisir */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-gray-900">Pourquoi choisir Prépa Rationnelle ?</span>
          </h2>
          <p className="fade-in-up text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ animationDelay: '0.1s' }}>
            Un accompagnement qui fait la différence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professeurs qualifiés */}
            <div className="fade-in-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Professeurs d'élite</h3>
              <p className="text-gray-600 text-center">
                Tous nos professeurs sont issus des meilleures écoles (HEC, Polytechnique, ENS...) et maîtrisent parfaitement les programmes.
              </p>
            </div>

            {/* Suivi personnalisé */}
            <div className="fade-in-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Suivi sur-mesure</h3>
              <p className="text-gray-600 text-center">
                Chaque élève bénéficie d'un plan d'accompagnement adapté à son niveau, ses besoins et ses objectifs.
              </p>
            </div>

            {/* Résultats garantis */}
            <div className="fade-in-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center text-gray-900">Résultats prouvés</h3>
              <p className="text-gray-600 text-center">
                95% de nos élèves constatent une amélioration significative de leurs notes et de leur confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Prêt à accompagner votre enfant
            </span>
            <br />
            <span className="text-gray-900">vers la réussite ?</span>
          </h2>

          <p className="fade-in-up text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            Réservez dès maintenant un accompagnement personnalisé ou contactez-nous pour en savoir plus sur nos offres.
          </p>

          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-7 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              onClick={() => {
                const message = encodeURIComponent("Bonjour Prépa Rationnelle, je souhaite réserver un accompagnement personnalisé pour mon enfant. Pouvez-vous me donner plus d'informations ?");
                window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
              }}
            >
              <Calendar className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              Réserver un accompagnement
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Témoignage rapide */}
          <div className="fade-in-up mt-16 bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-orange-100" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-orange-500 fill-current animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "Excellent professeur, très investi et toujours à l'écoute, qui m'a permis de vraiment progresser en maths pendant mes deux années de prépa. Grâce à un accompagnement hebdomadaire pendant plusieurs mois, j'ai pu consolider et améliorer mes connaissances et méthodes en mathématiques ce qui m'a permis d'aborder un peu plus sereinement mes concours. Je le recommande fortement !"
            </p>
            <p className="font-semibold text-gray-900">— Élève de prépa ECG</p>
          </div>
        </div>
      </section>

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
        }

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ParentPage;