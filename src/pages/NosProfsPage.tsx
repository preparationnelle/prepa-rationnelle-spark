import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
  const ProfessorCardCompact = ({ professor, index }: { professor: Professor; index: number }) => (
    <div className={`professor-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border ${professor.isFounder ? 'border-orange-300 ring-2 ring-orange-100' : 'border-gray-100'} cursor-pointer group relative overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col h-full`}
         style={{ transitionDelay: `${index * 150}ms` }}>
      {/* Effet shimmer au hover */}
      <div className="card-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
      {/* Header avec gradient pour le fondateur */}
      {professor.isFounder && (
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-t-2xl absolute top-0 left-0 right-0 animate-pulse"></div>
      )}

      {/* Contenu principal - flexible pour pousser le bouton en bas */}
      <div className="flex-1">
        {/* Photo et infos principales */}
        <div className={`text-center mb-4 ${professor.isFounder ? 'pt-2' : ''}`}>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${professor.isFounder ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-gray-600 to-gray-800'} group-hover:shadow-2xl`}>
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
      </div>

      {/* Bouton contacter - aligné en bas */}
      <div className="mt-auto">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            openModal(professor);
          }}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
          Contacter
        </Button>
      </div>
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
        'Fondateur de Prépa Rationnelle en 2023',
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
      id: 'dimitar-maxime',
      name: 'Dimitar Maxime Parent',
      role: 'Professeur de Mathématiques',
      shortDescription: 'Expert en mathématiques appliquées, Maxime excelle dans l\'enseignement des concepts complexes.',
      fullDescription: 'Mathématicien spécialisé dans les applications pratiques, Maxime Parent maîtrise parfaitement les programmes de mathématiques des classes préparatoires. Il aide les élèves à développer une intuition profonde des concepts mathématiques.',
      mainSubjects: ['Maths', 'Analyse', 'Algèbre'],
      specialties: [
        'Mathématiques MPSI/MP/PC',
        'Analyse fonctionnelle et complexe',
        'Algèbre linéaire et géométrie',
        'Préparation aux concours scientifiques',
        'Méthodologie de résolution de problèmes'
      ],
      achievements: [
        '5 ans d\'enseignement en classes préparatoires',
        'Spécialiste des maths appliquées',
        'Méthodes pédagogiques éprouvées',
        'Taux de réussite de 88% aux concours',
        'Auteur d\'exercices originaux'
      ],
      experience: '8 années d\'enseignement des mathématiques',
      email: 'maxime@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'william',
      name: 'William Zhou',
      role: 'Professeur de Physique-Chimie',
      shortDescription: 'Physicien passionné, William explique les phénomènes complexes avec une grande pédagogie.',
      fullDescription: 'Docteur en physique des particules, William Zhou enseigne la physique-chimie avec passion et rigueur. Il aide les élèves à comprendre les concepts fondamentaux et à développer leur esprit scientifique.',
      mainSubjects: ['Physique', 'Chimie', 'Sciences'],
      specialties: [
        'Physique-Chimie Terminale',
        'Mécanique et thermodynamique',
        'Chimie organique et inorganique',
        'Préparation aux classes préparatoires',
        'Méthodologie expérimentale'
      ],
      achievements: [
        'Doctorat en physique des particules',
        '6 ans d\'enseignement scientifique',
        'Méthodes pédagogiques innovantes',
        'Spécialiste des sciences expérimentales',
        'Accompagnement personnalisé efficace'
      ],
      experience: '6 années d\'enseignement des sciences physiques',
      email: 'william@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'enzo',
      name: 'Enzo Dubonnet',
      role: 'Professeur de Français',
      shortDescription: 'Littéraire passionné, Enzo aide les élèves à maîtriser l\'expression écrite et l\'analyse littéraire.',
      fullDescription: 'Agrégé de lettres modernes, Enzo Dubonnet est un spécialiste de l\'enseignement du français. Il guide les élèves dans leur compréhension des œuvres littéraires et dans l\'acquisition d\'une expression écrite élégante.',
      mainSubjects: ['Français', 'Littérature', 'Dissertation'],
      specialties: [
        'Français Terminale L/ES/S',
        'Méthodologie de la dissertation',
        'Analyse littéraire et stylistique',
        'Préparation à l\'oral du bac',
        'Entraînement aux concours'
      ],
      achievements: [
        'Agrégé de lettres modernes',
        '7 ans d\'enseignement littéraire',
        'Spécialiste de l\'expression écrite',
        'Méthodes d\'analyse littéraire éprouvées',
        'Taux de réussite de 92% aux épreuves'
      ],
      experience: '7 années d\'enseignement du français',
      email: 'enzo@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'raquel',
      name: 'Raquel Folbaum',
      role: 'Professeur d\'Espagnol',
      shortDescription: 'Native speaker espagnole, Raquel enseigne sa langue maternelle avec authenticité.',
      fullDescription: 'Originaire d\'Espagne, Raquel Folbaum est une native speaker passionnée par l\'enseignement de sa langue. Elle transmet l\'espagnol de manière vivante et culturelle, préparant les élèves aux certifications et aux échanges internationaux.',
      mainSubjects: ['Espagnol', 'Culture hispanique', 'Conversation'],
      specialties: [
        'Espagnol LV1/LV2/LV3',
        'Préparation au DELF/DALF espagnol',
        'Grammaire et conjugaison espagnoles',
        'Civilisation et littérature hispaniques',
        'Perfectionnement oral et écrit'
      ],
      achievements: [
        'Native speaker espagnole',
        '9 ans d\'enseignement des langues',
        'Certifiée DELE',
        'Méthodes d\'immersion culturelle',
        'Préparation réussie aux certifications'
      ],
      experience: '9 années d\'enseignement de l\'espagnol',
      email: 'raquel@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'taha',
      name: 'Taha Dourasse',
      role: 'Professeur d\'Anglais',
      shortDescription: 'Spécialiste de l\'anglais académique, Taha prépare les élèves aux examens internationaux.',
      fullDescription: 'Professeur d\'anglais expérimenté, Taha Dourasse maîtrise parfaitement les exigences des examens Cambridge et TOEFL. Il aide les élèves à développer leurs compétences linguistiques et culturelles.',
      mainSubjects: ['Anglais', 'Examens', 'Conversation'],
      specialties: [
        'Anglais général et littéraire',
        'Préparation Cambridge FCE/CAE/CPE',
        'Préparation TOEFL/TOEIC',
        'Méthodologie d\'examen',
        'Perfectionnement linguistique'
      ],
      achievements: [
        '8 ans d\'enseignement de l\'anglais',
        'Spécialiste des examens internationaux',
        'Méthodes d\'apprentissage efficaces',
        'Taux de réussite de 95% aux examens',
        'Accompagnement personnalisé'
      ],
      experience: '8 années d\'enseignement de l\'anglais',
      email: 'taha@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'joana',
      name: 'Joana Gomes Menezes',
      role: 'Professeur d\'Histoire-Géographie',
      shortDescription: 'Historienne passionnée, Joana rend l\'histoire vivante et accessible à tous.',
      fullDescription: 'Docteure en histoire contemporaine, Joana Gomes Menezes enseigne l\'histoire-géographie avec passion. Elle aide les élèves à comprendre les enjeux contemporains et à développer leur esprit critique.',
      mainSubjects: ['Histoire', 'Géographie', 'Géopolitique'],
      specialties: [
        'Histoire-Géographie Terminale',
        'Géopolitique internationale',
        'Histoire contemporaine',
        'Méthodologie de l\'étude de documents',
        'Préparation aux épreuves orales'
      ],
      achievements: [
        'Docteure en histoire contemporaine',
        '6 ans d\'enseignement en lycée',
        'Spécialiste de la géopolitique',
        'Méthodes d\'analyse documentaire',
        'Accompagnement vers l\'excellence'
      ],
      experience: '6 années d\'enseignement de l\'histoire-géographie',
      email: 'joana@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'thomas-y',
      name: 'Thomas Yilmaz',
      role: 'Professeur de SES',
      shortDescription: 'Économiste spécialisé, Thomas enseigne les sciences économiques et sociales.',
      fullDescription: 'Économiste de formation, Thomas Yilmaz maîtrise parfaitement les programmes de sciences économiques et sociales. Il aide les élèves à comprendre les mécanismes économiques et sociaux contemporains.',
      mainSubjects: ['SES', 'Économie', 'Sociologie'],
      specialties: [
        'Sciences Économiques et Sociales',
        'Économie et sociologie',
        'Méthodologie SES',
        'Préparation aux épreuves terminales',
        'Analyse de documents économiques'
      ],
      achievements: [
        'Master en économie',
        '5 ans d\'enseignement des SES',
        'Spécialiste de l\'économie contemporaine',
        'Méthodes pédagogiques efficaces',
        'Résultats excellents aux épreuves'
      ],
      experience: '5 années d\'enseignement des sciences économiques',
      email: 'thomas.y@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'josephine',
      name: 'Josephine Hall',
      role: 'Professeur de Philosophie',
      shortDescription: 'Philosophe engagée, Josephine guide les élèves dans leur réflexion philosophique.',
      fullDescription: 'Agrégée de philosophie, Josephine Hall accompagne les élèves dans leur découverte de la pensée philosophique. Elle développe leur capacité d\'analyse et d\'argumentation tout en les aidant à construire leur propre réflexion.',
      mainSubjects: ['Philosophie', 'Pensée critique', 'Éthique'],
      specialties: [
        'Philosophie Terminale',
        'Méthodologie de la dissertation',
        'Préparation à l\'oral de philosophie',
        'Histoire de la philosophie',
        'Développement de la pensée critique'
      ],
      achievements: [
        'Agrégée de philosophie',
        '8 ans d\'enseignement philosophique',
        'Spécialiste de la dissertation philosophique',
        'Méthodes d\'argumentation éprouvées',
        'Accompagnement personnalisé réussi'
      ],
      experience: '8 années d\'enseignement de la philosophie',
      email: 'josephine@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'audrey',
      name: 'Audrey Sambot',
      role: 'Professeur d\'Allemand',
      shortDescription: 'Native speaker allemande, Audrey enseigne l\'allemand avec méthode et passion.',
      fullDescription: 'Originaire d\'Allemagne, Audrey Sambot est une native speaker qui enseigne l\'allemand de manière structurée et culturelle. Elle prépare les élèves aux certifications Goethe et aux échanges germanophones.',
      mainSubjects: ['Allemand', 'Culture germanique', 'Linguistique'],
      specialties: [
        'Allemand LV1/LV2/LV3',
        'Préparation au Goethe-Zertifikat',
        'Grammaire et conjugaison allemandes',
        'Civilisation germanophone',
        'Perfectionnement linguistique'
      ],
      achievements: [
        'Native speaker allemande',
        '7 ans d\'enseignement des langues',
        'Certifiée Goethe-Institut',
        'Méthodes d\'immersion culturelle',
        'Préparation réussie aux certifications'
      ],
      experience: '7 années d\'enseignement de l\'allemand',
      email: 'audrey@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'guillaume',
      name: 'Guillaume Grimaud',
      role: 'Professeur de Mathématiques',
      shortDescription: 'Mathématicien rigoureux, Guillaume maîtrise tous les aspects des maths prépa.',
      fullDescription: 'Docteur en mathématiques appliquées, Guillaume Grimaud enseigne les mathématiques avec une rigueur scientifique exceptionnelle. Il aide les élèves à développer une compréhension profonde des concepts mathématiques.',
      mainSubjects: ['Maths', 'Analyse', 'Probabilités'],
      specialties: [
        'Mathématiques MPSI/MP/PC/PT',
        'Analyse réelle et complexe',
        'Probabilités et statistiques',
        'Préparation aux concours',
        'Méthodologie mathématique'
      ],
      achievements: [
        'Docteur en mathématiques appliquées',
        '6 ans en classes préparatoires',
        'Spécialiste des maths avancées',
        'Méthodes pédagogiques rigoureuses',
        'Taux de réussite élevé aux concours'
      ],
      experience: '6 années d\'enseignement des mathématiques',
      email: 'guillaume@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'amaury',
      name: 'Amaury De Balladre',
      role: 'Professeur de Physique',
      shortDescription: 'Physicien théoricien, Amaury explique les concepts physiques avec clarté.',
      fullDescription: 'Physicien spécialisé en physique théorique, Amaury De Balladre enseigne la physique avec une approche conceptuelle approfondie. Il aide les élèves à comprendre les lois fondamentales de la physique.',
      mainSubjects: ['Physique', 'Mécanique', 'Électromagnétisme'],
      specialties: [
        'Physique Terminale et Prépa',
        'Mécanique classique et relativiste',
        'Électromagnétisme et optique',
        'Préparation aux concours scientifiques',
        'Résolution de problèmes physiques'
      ],
      achievements: [
        'Master en physique théorique',
        '5 ans d\'enseignement scientifique',
        'Spécialiste de la physique fondamentale',
        'Méthodes d\'apprentissage conceptuelles',
        'Résultats excellents en prépa'
      ],
      experience: '5 années d\'enseignement de la physique',
      email: 'amaury@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'paul',
      name: 'Paul Syruce',
      role: 'Professeur de Chimie',
      shortDescription: 'Chimiste passionné, Paul rend la chimie accessible et fascinante.',
      fullDescription: 'Docteur en chimie organique, Paul Syruce enseigne la chimie avec enthousiasme et pédagogie. Il aide les élèves à comprendre les réactions chimiques et les mécanismes moléculaires.',
      mainSubjects: ['Chimie', 'Réactions', 'Molécules'],
      specialties: [
        'Chimie Terminale et Prépa',
        'Chimie organique et inorganique',
        'Thermodynamique chimique',
        'Préparation aux TP de chimie',
        'Méthodologie expérimentale'
      ],
      achievements: [
        'Docteur en chimie organique',
        '4 ans d\'enseignement scientifique',
        'Spécialiste des réactions chimiques',
        'Méthodes pédagogiques innovantes',
        'Accompagnement réussi en prépa'
      ],
      experience: '4 années d\'enseignement de la chimie',
      email: 'paul@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'charlotte',
      name: 'Charlotte Princen',
      role: 'Professeur de SVT',
      shortDescription: 'Biologiste enthousiaste, Charlotte fait découvrir les sciences de la vie.',
      fullDescription: 'Docteure en biologie moléculaire, Charlotte Princen enseigne les sciences de la vie avec passion. Elle aide les élèves à comprendre les mécanismes biologiques et l\'évolution du vivant.',
      mainSubjects: ['SVT', 'Biologie', 'Écologie'],
      specialties: [
        'Sciences de la Vie et de la Terre',
        'Biologie cellulaire et moléculaire',
        'Écologie et évolution',
        'Préparation aux épreuves pratiques',
        'Méthodologie scientifique'
      ],
      achievements: [
        'Docteure en biologie moléculaire',
        '5 ans d\'enseignement des SVT',
        'Spécialiste de la biologie moderne',
        'Méthodes pédagogiques engageantes',
        'Résultats excellents au bac'
      ],
      experience: '5 années d\'enseignement des sciences de la vie',
      email: 'charlotte@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'leandre',
      name: 'Léandre Passoire',
      role: 'Professeur d\'Informatique',
      shortDescription: 'Informaticien passionné, Léandre enseigne la programmation et l\'algorithmique.',
      fullDescription: 'Ingénieur en informatique, Léandre Passoire est un expert en programmation et algorithmique. Il initie les élèves aux langages de programmation et à la résolution informatique de problèmes.',
      mainSubjects: ['Informatique', 'Python', 'Algorithmique'],
      specialties: [
        'Informatique pour Prépa ECG',
        'Programmation Python avancée',
        'Algorithmique et structures de données',
        'Résolution de problèmes informatiques',
        'Préparation aux TP d\'informatique'
      ],
      achievements: [
        'Ingénieur en informatique',
        '4 ans d\'enseignement de l\'informatique',
        'Expert en programmation Python',
        'Méthodes pédagogiques modernes',
        'Accompagnement réussi des débutants'
      ],
      experience: '4 années d\'enseignement de l\'informatique',
      email: 'leandre@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'pierre-antoine',
      name: 'Pierre-Antoine Blonsard',
      role: 'Professeur de Géopolitique',
      shortDescription: 'Géopolitologue expérimenté, Pierre-Antoine analyse les grands enjeux mondiaux.',
      fullDescription: 'Docteur en sciences politiques, Pierre-Antoine Blonsard est un spécialiste de la géopolitique internationale. Il aide les élèves à comprendre les dynamiques mondiales et les enjeux contemporains.',
      mainSubjects: ['Géopolitique', 'Relations internationales', 'Stratégie'],
      specialties: [
        'Géopolitique internationale',
        'Relations internationales',
        'Stratégies géopolitiques',
        'Analyse des conflits mondiaux',
        'Préparation aux épreuves orales'
      ],
      achievements: [
        'Docteur en sciences politiques',
        '6 ans d\'enseignement supérieur',
        'Spécialiste de la géopolitique',
        'Méthodes d\'analyse géopolitique',
        'Publications académiques'
      ],
      experience: '6 années d\'enseignement de la géopolitique',
      email: 'pierre-antoine@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'valentin',
      name: 'Valentin Ganne',
      role: 'Professeur de Mathématiques',
      shortDescription: 'Mathématicien créatif, Valentin développe l\'intuition mathématique des élèves.',
      fullDescription: 'Mathématicien spécialisé dans l\'enseignement, Valentin Ganne aide les élèves à développer leur intuition mathématique. Il combine rigueur et créativité pour rendre les maths accessibles.',
      mainSubjects: ['Maths', 'Géométrie', 'Calcul'],
      specialties: [
        'Mathématiques lycée et prépa',
        'Géométrie et trigonométrie',
        'Calcul intégral et différentiel',
        'Méthodologie de résolution',
        'Préparation aux olympiades'
      ],
      achievements: [
        '7 ans d\'enseignement mathématique',
        'Spécialiste des maths créatives',
        'Méthodes d\'intuition mathématique',
        'Succès aux compétitions mathématiques',
        'Accompagnement personnalisé'
      ],
      experience: '7 années d\'enseignement des mathématiques',
      email: 'valentin@preparationnelle.fr',
      location: 'Paris, France'
    },
    {
      id: 'charlie',
      name: 'Charlie Demule',
      role: 'Professeur d\'Arts',
      shortDescription: 'Artiste et pédagogue, Charlie développe la sensibilité artistique des élèves.',
      fullDescription: 'Artiste plasticien et historien de l\'art, Charlie Demule enseigne les arts avec passion. Il aide les élèves à développer leur sensibilité artistique et leur capacité d\'analyse esthétique.',
      mainSubjects: ['Arts plastiques', 'Histoire de l\'art', 'Créativité'],
      specialties: [
        'Arts plastiques lycée',
        'Histoire de l\'art',
        'Analyse d\'œuvres d\'art',
        'Techniques artistiques',
        'Préparation à l\'option arts'
      ],
      achievements: [
        'Artiste plasticien reconnu',
        '8 ans d\'enseignement artistique',
        'Expositions personnelles',
        'Méthodes créatives d\'enseignement',
        'Accompagnement artistique personnalisé'
      ],
      experience: '8 années d\'enseignement des arts',
      email: 'charlie@preparationnelle.fr',
      location: 'Paris, France'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .professor-card:hover .card-shimmer {
          opacity: 1;
        }
      `}</style>
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
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Nos Professeurs
          </h1>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Découvrez l'équipe pédagogique passionnée qui accompagne vos enfants vers la réussite
            </p>
          </div>

          {/* Section Toute l'équipe */}
          <section id="equipe" className="mb-16 scroll-mt-24">
            <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Notre équipe pédagogique
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez tous nos professeurs experts, chacun spécialisé dans son domaine d'excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professors.map((professor, index) => (
                <ProfessorCardCompact key={professor.id} professor={professor} index={index} />
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
