import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Target, Heart, CheckCircle, ArrowRight, Phone, Calendar, School } from 'lucide-react';

const WHATSAPP_MESSAGE = "Bonjour Prépa Rationnelle, je souhaite réserver un accompagnement personnalisé pour mon enfant. Pouvez-vous me donner plus d'informations ?";
const WHATSAPP_URL = `https://wa.me/33609164668?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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

    const elements = document.querySelectorAll('.fade-in-up, .scale-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div style={{ '--animate-duration': '0.8s' } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="fade-in-up text-sm font-medium tracking-widest uppercase text-carnet-red mb-6">
              Espace Parents · du collège à la prépa
            </p>

            <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-carnet-ink mb-6" style={{ animationDelay: '0.1s' }}>
              Prépa Rationnelle accompagne <span className="text-carnet-red">votre enfant</span>.
            </h1>

            <p className="fade-in-up text-lg sm:text-xl text-carnet-ink-soft max-w-3xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Un accompagnement personnalisé, par des professeurs issus des meilleures écoles, adapté à chaque étape du parcours scolaire.
            </p>

            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="bg-carnet-red hover:bg-carnet-red-deep text-white px-8 py-6 text-lg rounded-xl"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Réserver un accompagnement
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-carnet-rule/40 hover:border-carnet-red text-carnet-ink hover:bg-pr-gray-bg px-8 py-6 text-lg rounded-xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { value: '100+', label: 'Élèves accompagnés' },
                { value: '+20', label: 'Professeurs experts' },
                { value: '95%', label: 'Taux de satisfaction' },
                { value: '10+', label: 'Matières proposées' },
              ].map((stat, i) => (
                <div key={stat.label} className="scale-in text-center" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <div className="text-3xl font-bold text-carnet-red mb-2">{stat.value}</div>
                  <div className="text-sm text-carnet-ink-mute">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Niveaux */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-center text-carnet-ink mb-4">
            Tous les niveaux
          </h2>
          <p className="fade-in-up text-center text-carnet-ink-soft mb-12 max-w-2xl mx-auto text-lg" style={{ animationDelay: '0.1s' }}>
            Un accompagnement adapté à chaque étape du parcours scolaire
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                to: '/articles/primaire',
                icon: School,
                title: 'Primaire',
                blurb: 'Acquérir les fondamentaux',
                bullets: ['Lecture & Écriture', 'Calcul & Logique'],
                delay: 0.1,
              },
              {
                to: '/articles/college',
                icon: BookOpen,
                title: 'Collège',
                blurb: 'Consolider les bases et préparer le brevet',
                bullets: ['Toutes les matières', 'Méthodologie'],
                delay: 0.2,
              },
              {
                to: '/articles/lycee',
                icon: GraduationCap,
                title: 'Lycée',
                blurb: 'Réussir le bac et préparer le supérieur',
                bullets: ['Préparation bac', 'Spécialités'],
                delay: 0.3,
              },
            ].map((niveau) => {
              const Icon = niveau.icon;
              return (
                <Link
                  key={niveau.to}
                  to={niveau.to}
                  className="fade-in-up bg-white rounded-2xl p-6 border border-carnet-rule/30 hover:border-carnet-red transition-all duration-300 hover:shadow-lg hover:shadow-carnet-red/20 group block"
                  style={{ animationDelay: `${niveau.delay}s` }}
                >
                  <div className="w-14 h-14 bg-pr-gray-bg rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-carnet-red" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-carnet-ink">{niveau.title}</h3>
                  <p className="text-sm text-carnet-ink-soft mb-4">{niveau.blurb}</p>
                  <ul className="space-y-2 text-sm text-carnet-ink-soft">
                    {niveau.bullets.map((b) => (
                      <li key={b} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-carnet-red mr-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-center text-carnet-ink mb-4">
            Pourquoi choisir Prépa Rationnelle ?
          </h2>
          <p className="fade-in-up text-center text-carnet-ink-soft mb-12 max-w-2xl mx-auto text-lg" style={{ animationDelay: '0.1s' }}>
            Un accompagnement qui fait la différence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Professeurs d'élite",
                body: "Tous nos professeurs sont issus des meilleures écoles (HEC, Polytechnique, ENS…) et maîtrisent parfaitement les programmes.",
                delay: 0.2,
              },
              {
                icon: Target,
                title: 'Suivi sur-mesure',
                body: "Chaque élève bénéficie d'un plan d'accompagnement adapté à son niveau, ses besoins et ses objectifs.",
                delay: 0.3,
              },
              {
                icon: Heart,
                title: 'Résultats prouvés',
                body: '95 % de nos élèves constatent une amélioration significative de leurs notes et de leur confiance.',
                delay: 0.4,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="fade-in-up bg-white rounded-2xl p-8 border border-carnet-rule/30 group"
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="w-16 h-16 bg-pr-gray-bg rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-carnet-red" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-center text-carnet-ink">{card.title}</h3>
                  <p className="text-carnet-ink-soft text-center leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final + témoignage */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-carnet-ink mb-6">
            Prêt à accompagner votre enfant <br />
            <span className="text-carnet-red">vers la réussite ?</span>
          </h2>

          <p className="fade-in-up text-lg sm:text-xl text-carnet-ink-soft mb-10 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            Réservez dès maintenant un accompagnement personnalisé ou contactez-nous pour en savoir plus sur nos offres.
          </p>

          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="bg-carnet-red hover:bg-carnet-red-deep text-white px-10 py-7 text-xl rounded-xl"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <Calendar className="h-6 w-6 mr-3" />
              Réserver un accompagnement
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </div>

          <div className="fade-in-up mt-16 bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-carnet-rule/30" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-carnet-red fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-carnet-ink-soft italic mb-4 leading-relaxed">
              « Excellent professeur, très investi et toujours à l'écoute, qui m'a permis de vraiment progresser en maths pendant mes deux années de prépa. Grâce à un accompagnement hebdomadaire pendant plusieurs mois, j'ai pu consolider et améliorer mes connaissances et méthodes en mathématiques ce qui m'a permis d'aborder un peu plus sereinement mes concours. Je le recommande fortement ! »
            </p>
            <p className="font-semibold text-carnet-ink">— Élève de prépa ECG</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-in-up, .scale-in { opacity: 0; }
        .fade-in-up.animate-in { animation: fadeInUp 0.8s ease-out forwards; }
        .scale-in.animate-in { animation: scaleIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ParentPage;
