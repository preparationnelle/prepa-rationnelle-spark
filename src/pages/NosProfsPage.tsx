import React from 'react';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Heart,
  Star,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

const NosProfsPage = () => {
  const ProfessorCard = ({
    name,
    role,
    description,
    specialties,
    achievements,
    email,
    phone,
    location,
    experience,
    image,
    isFounder = false
  }: {
    name: string;
    role: string;
    description: string;
    specialties: string[];
    achievements: string[];
    email?: string;
    phone?: string;
    location?: string;
    experience: string;
    image?: string;
    isFounder?: boolean;
  }) => (
    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${isFounder ? 'border-orange-200' : 'border-gray-100'}`}>
      {/* Header avec gradient pour le fondateur */}
      {isFounder && (
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-2"></div>
      )}

      <div className="p-8">
        {/* Photo et infos principales */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <div className={`w-32 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-lg ${isFounder ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
            {name.split(' ').map(n => n[0]).join('')}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h3 className="text-3xl font-bold text-gray-900">{name}</h3>
              {isFounder && (
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Fondateur
                </div>
              )}
            </div>
            <p className="text-xl text-orange-600 font-semibold mb-2">{role}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Spécialités */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-orange-600" />
            Domaines d'expertise
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Réalisations */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-orange-600" />
            Réalisations & Succès
          </h4>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Informations de contact et expérience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              Expérience
            </h4>
            <p className="text-gray-600">{experience}</p>
          </div>

          {(email || phone || location) && (
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <div className="space-y-2">
                {email && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{email}</span>
                  </div>
                )}
                {phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{phone}</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{location}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec navigation sticky */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#dimitar" className="hover:text-orange-600 transition-colors font-medium">Dimitar</a>
            <a href="#juliette" className="hover:text-orange-600 transition-colors font-medium">Juliette</a>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Nos
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Professeurs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'équipe pédagogique passionnée qui accompagne vos enfants vers la réussite
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-sm text-gray-600">Professeurs experts</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Années d'expérience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Élèves accompagnés</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Taux de satisfaction</div>
          </div>
        </div>

        {/* Section Dimitar */}
        <section id="dimitar" className="mb-16 scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Dimitar Dimitrov
            </h2>
            <p className="text-lg text-gray-600">Fondateur & Professeur Principal</p>
          </div>

          <ProfessorCard
            name="Dimitar Dimitrov"
            role="Fondateur & Professeur de Mathématiques"
            description="Passionné par l'enseignement des mathématiques, Dimitar a fondé Prépa Rationnelle avec une vision claire : rendre les maths accessibles et passionnantes pour tous les élèves. Son approche pédagogique innovante combine rigueur scientifique et pédagogie moderne."
            specialties={[
              "Mathématiques Prépa ECG (MPSI, MP, PC, PT)",
              "Préparation aux concours (CCINP, Mines, Centrale)",
              "Algorithmique et Programmation",
              "Préparation aux Olympiades Mathématiques",
              "Accompagnement personnalisé"
            ]}
            achievements={[
              "Fondateur de Prépa Rationnelle en 2020",
              "+500 élèves accompagnés vers la réussite",
              "Méthode pédagogique reconnue pour son efficacité",
              "Développement de plateformes éducatives innovantes",
              "Expert en préparation aux concours d'entrée"
            ]}
            experience="15+ années d'enseignement des mathématiques, dont 8 ans en classes préparatoires"
            email="dimitar@preparationnelle.fr"
            location="Paris, France"
            isFounder={true}
          />
        </section>

        {/* Section Juliette */}
        <section id="juliette" className="mb-16 scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Juliette Fornas
            </h2>
            <p className="text-lg text-gray-600">Professeur de Collège</p>
          </div>

          <ProfessorCard
            name="Juliette Fornas"
            role="Professeur de Mathématiques - Collège"
            description="Spécialiste de l'enseignement des mathématiques au collège, Juliette excelle dans l'accompagnement des élèves de la 6ème à la 3ème. Son approche bienveillante et structurée permet à chaque élève de développer confiance en soi et compétences solides."
            specialties={[
              "Mathématiques Collège (6ème à 3ème)",
              "Préparation au Brevet des Collèges",
              "Soutien scolaire personnalisé",
              "Méthodes d'apprentissage adaptées",
              "Accompagnement des difficultés scolaires"
            ]}
            achievements={[
              "10 ans d'expérience en enseignement collège",
              "Spécialiste du soutien scolaire personnalisé",
              "Méthodes pédagogiques adaptées à tous les profils",
              "Accompagnement réussi de centaines d'élèves",
              "Formation continue en pédagogie moderne"
            ]}
            experience="10 années d'enseignement au collège et en soutien scolaire"
            email="juliette@preparationnelle.fr"
            location="Paris, France"
            isFounder={false}
          />
        </section>

        {/* Section Valeurs */}
        <section className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Nos Valeurs Pédagogiques
            </h2>
            <p className="text-gray-600">Ce qui guide notre enseignement au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bienveillance</h3>
              <p className="text-gray-600">Un accompagnement respectueux où chaque élève se sent valorisé et soutenu dans sa progression.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Des méthodes éprouvées et une exigence de qualité pour des résultats durables.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personnalisation</h3>
              <p className="text-gray-600">Chaque élève est unique. Nos cours s'adaptent aux besoins spécifiques de chacun.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-12 border border-orange-200">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer l'aventure ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez nos cours et bénéficiez de l'expertise de nos professeurs passionnés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Réserver un cours d'essai gratuit
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Footer de la page */}
        <div className="mt-24 text-center pb-12">
          <p className="text-gray-500 text-sm">
            Nos Professeurs • Prépa Rationnelle • Excellence pédagogique depuis 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default NosProfsPage;
