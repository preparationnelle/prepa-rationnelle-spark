import React, { useState } from 'react';
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
  Calendar,
  X,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Professor {
  id: string;
  name: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  specialties: string[];
  achievements: string[];
  email?: string;
  phone?: string;
  location?: string;
  experience: string;
  image?: string;
  isFounder?: boolean;
  mainSubjects: string[];
}

const NosProfsPage = () => {
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (professor: Professor) => {
    setSelectedProfessor(professor);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfessor(null);
    document.body.style.overflow = 'unset';
  };

  // Composant carte compacte
  const ProfessorCardCompact = ({ professor }: { professor: Professor }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border ${professor.isFounder ? 'border-orange-300 ring-2 ring-orange-100' : 'border-gray-100'} cursor-pointer group relative overflow-hidden`}>
      {/* Header avec gradient pour le fondateur */}
      {professor.isFounder && (
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-t-2xl absolute top-0 left-0 right-0"></div>
      )}

      {/* Photo et infos principales */}
      <div className={`text-center mb-4 ${professor.isFounder ? 'pt-2' : ''}`}>
        <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${professor.isFounder ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
          {professor.name.split(' ').map(n => n[0]).join('')}
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{professor.name}</h3>
          {professor.isFounder && (
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Fondateur
            </div>
          )}
        </div>
        <p className="text-lg text-orange-600 font-semibold mb-3">{professor.role}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{professor.shortDescription}</p>
      </div>

      {/* Domaines principaux */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {professor.mainSubjects.slice(0, 2).map((subject, index) => (
            <span key={index} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
              {subject}
            </span>
          ))}
          {professor.mainSubjects.length > 2 && (
            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
              +{professor.mainSubjects.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Bouton contacter */}
      <Button
        onClick={(e) => {
          e.stopPropagation();
          openModal(professor);
        }}
        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-xl"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Contacter
      </Button>
    </div>
  );

  // Modal des détails
  const ProfessorModal = () => {
    if (!selectedProfessor || !isModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          {/* Bouton fermer */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="p-8">
            {/* Header avec gradient pour le fondateur */}
            {selectedProfessor.isFounder && (
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-t-3xl absolute top-0 left-0 right-0"></div>
            )}

            {/* Photo et infos principales */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 pt-4">
              <div className={`w-32 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-lg ${selectedProfessor.isFounder ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
                {selectedProfessor.name.split(' ').map(n => n[0]).join('')}
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="text-4xl font-bold text-gray-900">{selectedProfessor.name}</h3>
                  {selectedProfessor.isFounder && (
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Fondateur
                    </div>
                  )}
                </div>
                <p className="text-2xl text-orange-600 font-semibold mb-3">{selectedProfessor.role}</p>
                <p className="text-gray-600 leading-relaxed text-lg">{selectedProfessor.fullDescription}</p>
              </div>
            </div>

            {/* Spécialités */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-orange-600" />
                Domaines d'expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProfessor.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Réalisations */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-orange-600" />
                Réalisations & Succès
              </h4>
              <div className="space-y-4">
                {selectedProfessor.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations de contact et expérience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Expérience
                </h4>
                <p className="text-gray-600 text-lg">{selectedProfessor.experience}</p>
              </div>

              {(selectedProfessor.email || selectedProfessor.phone || selectedProfessor.location) && (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Contact</h4>
                  <div className="space-y-3">
                    {selectedProfessor.email && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail className="h-5 w-5" />
                        <span className="text-lg">{selectedProfessor.email}</span>
                      </div>
                    )}
                    {selectedProfessor.phone && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="h-5 w-5" />
                        <span className="text-lg">{selectedProfessor.phone}</span>
                      </div>
                    )}
                    {selectedProfessor.location && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">{selectedProfessor.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bouton de contact en bas */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-lg py-6 rounded-xl">
                <Mail className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Données des professeurs
  const professors: Professor[] = [
    {
      id: 'dimitar',
      name: 'Dimitar Dimitrov',
      role: 'Fondateur & Professeur de Mathématiques',
      shortDescription: 'Passionné par l\'enseignement des mathématiques, Dimitar a fondé Prépa Rationnelle avec une vision claire.',
      fullDescription: 'Passionné par l\'enseignement des mathématiques, Dimitar a fondé Prépa Rationnelle avec une vision claire : rendre les maths accessibles et passionnantes pour tous les élèves. Son approche pédagogique innovante combine rigueur scientifique et pédagogie moderne.',
      mainSubjects: ['Maths', 'Algorithmique', 'Concours'],
      specialties: [
        'Mathématiques Prépa ECG (MPSI, MP, PC, PT)',
        'Préparation aux concours (CCINP, Mines, Centrale)',
        'Algorithmique et Programmation',
        'Préparation aux Olympiades Mathématiques',
        'Accompagnement personnalisé'
      ],
      achievements: [
        'Fondateur de Prépa Rationnelle en 2020',
        '+500 élèves accompagnés vers la réussite',
        'Méthode pédagogique reconnue pour son efficacité',
        'Développement de plateformes éducatives innovantes',
        'Expert en préparation aux concours d\'entrée'
      ],
      experience: '15+ années d\'enseignement des mathématiques, dont 8 ans en classes préparatoires',
      email: 'dimitar@preparationnelle.fr',
      location: 'Paris, France',
      isFounder: true
    },
    {
      id: 'juliette',
      name: 'Juliette Fornas',
      role: 'Professeur de Mathématiques - Collège',
      shortDescription: 'Spécialiste de l\'enseignement des mathématiques au collège, Juliette excelle dans l\'accompagnement des élèves.',
      fullDescription: 'Spécialiste de l\'enseignement des mathématiques au collège, Juliette excelle dans l\'accompagnement des élèves de la 6ème à la 3ème. Son approche bienveillante et structurée permet à chaque élève de développer confiance en soi et compétences solides.',
      mainSubjects: ['Maths Collège', 'Soutien scolaire'],
      specialties: [
        'Mathématiques Collège (6ème à 3ème)',
        'Préparation au Brevet des Collèges',
        'Soutien scolaire personnalisé',
        'Méthodes d\'apprentissage adaptées',
        'Accompagnement des difficultés scolaires'
      ],
      achievements: [
        '10 ans d\'expérience en enseignement collège',
        'Spécialiste du soutien scolaire personnalisé',
        'Méthodes pédagogiques adaptées à tous les profils',
        'Accompagnement réussi de centaines d\'élèves',
        'Formation continue en pédagogie moderne'
      ],
      experience: '10 années d\'enseignement au collège et en soutien scolaire',
      email: 'juliette@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'marie',
      name: 'Marie Dubois',
      role: 'Professeur de Français - Lycée',
      shortDescription: 'Enseignante de lettres passionnée, Marie aide les élèves à maîtriser l\'expression écrite et orale.',
      fullDescription: 'Enseignante de lettres passionnée, Marie aide les élèves à maîtriser l\'expression écrite et orale. Spécialiste de la préparation aux épreuves de français du baccalauréat, elle accompagne également les élèves en difficulté.',
      mainSubjects: ['Français', 'Philosophie', 'Littérature'],
      specialties: [
        'Français Lycée (Seconde, Première, Terminale)',
        'Préparation aux épreuves du Bac Français',
        'Méthodologie de dissertation et commentaire',
        'Préparation aux concours littéraires',
        'Accompagnement personnalisé'
      ],
      achievements: [
        '12 ans d\'enseignement en lycée',
        'Spécialiste des épreuves écrites du bac',
        'Ancienne correctrice d\'épreuves du baccalauréat',
        'Méthodes éprouvées pour réussir les dissertations',
        'Accompagnement de plus de 300 élèves'
      ],
      experience: '12 années d\'enseignement des lettres en lycée',
      email: 'marie@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'thomas',
      name: 'Thomas Martin',
      role: 'Professeur d\'Histoire-Géographie',
      shortDescription: 'Historien passionné, Thomas rend l\'histoire et la géographie vivantes et accessibles.',
      fullDescription: 'Historien passionné, Thomas rend l\'histoire et la géographie vivantes et accessibles. Ancien élève de Sciences Po, il maîtrise parfaitement les exigences des épreuves de sciences sociales.',
      mainSubjects: ['Histoire', 'Géographie', 'SES'],
      specialties: [
        'Histoire-Géographie Lycée',
        'Sciences Économiques et Sociales (SES)',
        'Préparation aux épreuves du Bac',
        'Méthodologie de l\'étude de documents',
        'Préparation aux concours administratifs'
      ],
      achievements: [
        '8 ans d\'enseignement en lycée',
        'Ancien élève de Sciences Po Paris',
        'Spécialiste des sciences sociales',
        'Méthodes innovantes pour mémoriser l\'histoire',
        'Taux de réussite de 95% aux épreuves'
      ],
      experience: '8 années d\'enseignement de l\'histoire-géographie',
      email: 'thomas@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'sarah',
      name: 'Sarah Cohen',
      role: 'Professeur d\'Anglais',
      shortDescription: 'Native speaker, Sarah enseigne l\'anglais avec authenticité et efficacité.',
      fullDescription: 'Native speaker originaire de Londres, Sarah enseigne l\'anglais avec authenticité et efficacité. Elle prépare les élèves aux examens Cambridge et au TOEFL avec des méthodes immersives.',
      mainSubjects: ['Anglais', 'Conversation', 'Examens'],
      specialties: [
        'Anglais général et littéraire',
        'Préparation aux examens Cambridge',
        'Préparation au TOEFL/TOEIC',
        'Méthodes d\'apprentissage immersives',
        'Perfectionnement de la prononciation'
      ],
      achievements: [
        '15 ans d\'expérience en enseignement',
        'Native speaker britannique',
        'Certifiée Cambridge English',
        'Méthodes immersives éprouvées',
        'Accompagnement de 400+ élèves'
      ],
      experience: '15 années d\'enseignement de l\'anglais',
      email: 'sarah@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'luc',
      name: 'Luc Bernard',
      role: 'Professeur de Physique-Chimie',
      shortDescription: 'Ingénieur physicien, Luc explique les sciences avec clarté et rigueur.',
      fullDescription: 'Ingénieur physicien diplômé de CentraleSupélec, Luc explique les sciences avec clarté et rigueur. Il aide les élèves à développer une véritable compréhension des phénomènes physiques et chimiques.',
      mainSubjects: ['Physique', 'Chimie', 'Sciences'],
      specialties: [
        'Physique-Chimie Lycée',
        'Préparation aux classes préparatoires',
        'Méthodologie scientifique',
        'Résolution de problèmes complexes',
        'Préparation aux concours scientifiques'
      ],
      achievements: [
        '10 ans en enseignement scientifique',
        'Diplômé de CentraleSupélec',
        'Ancien ingénieur R&D',
        'Méthodes pédagogiques innovantes',
        'Taux de réussite de 92% en prépa'
      ],
      experience: '10 années d\'enseignement des sciences physiques',
      email: 'luc@preparationnelle.fr',
      location: 'Paris, France'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header avec navigation sticky */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="#equipe" className="hover:text-orange-600 transition-colors font-medium">Notre équipe</a>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Nos Professeurs
          </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez l'équipe pédagogique passionnée qui accompagne vos enfants vers la réussite
            </p>
          </div>

          {/* Section Toute l'équipe */}
          <section id="equipe" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Notre équipe pédagogique
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez tous nos professeurs experts, chacun spécialisé dans son domaine d'excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professors.map((professor) => (
                <ProfessorCardCompact key={professor.id} professor={professor} />
              ))}
            </div>
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
            Nos Professeurs • Prépa Rationnelle • Excellence pédagogique depuis 2023
          </p>
          </div>
        </div>
      </div>

      {/* Modal pour les détails */}
      <ProfessorModal />
    </>
  );
};

export default NosProfsPage;
