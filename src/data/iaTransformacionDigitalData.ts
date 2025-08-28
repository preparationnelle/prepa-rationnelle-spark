export interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

export const iaTransformacionDigitalData: VocabularyItem[] = [
  // INTELIGENCIA ARTIFICIAL
  { id: 1, french: "intelligence artificielle", spanish: "inteligencia artificial", category: "Inteligencia artificial" },
  { id: 2, french: "algorithme d'apprentissage", spanish: "algoritmo de aprendizaje", category: "Inteligencia artificial" },
  { id: 3, french: "réseau neuronal", spanish: "red neuronal", category: "Inteligencia artificial" },
  { id: 4, french: "apprentissage automatique", spanish: "aprendizaje automático", category: "Inteligencia artificial" },
  { id: 5, french: "apprentissage profond", spanish: "aprendizaje profundo", category: "Inteligencia artificial" },
  { id: 6, french: "traitement automatique du langage", spanish: "procesamiento automático del lenguaje", category: "Inteligencia artificial" },
  { id: 7, french: "vision par ordinateur", spanish: "visión por computadora", category: "Inteligencia artificial" },
  { id: 8, french: "reconnaissance faciale", spanish: "reconocimiento facial", category: "Inteligencia artificial" },
  { id: 9, french: "analyse prédictive", spanish: "análisis predictivo", category: "Inteligencia artificial" },
  { id: 10, french: "système expert", spanish: "sistema experto", category: "Inteligencia artificial" },

  // TRANSFORMACIÓN DIGITAL
  { id: 11, french: "transformation numérique", spanish: "transformación digital", category: "Transformación digital" },
  { id: 12, french: "numérisation des processus", spanish: "digitalización de procesos", category: "Transformación digital" },
  { id: 13, french: "automatisation intelligente", spanish: "automatización inteligente", category: "Transformación digital" },
  { id: 14, french: "cloud computing", spanish: "computación en la nube", category: "Transformación digital" },
  { id: 15, french: "big data", spanish: "big data", category: "Transformación digital" },
  { id: 16, french: "internet des objets", spanish: "internet de las cosas", category: "Transformación digital" },
  { id: 17, french: "réalité augmentée", spanish: "realidad aumentada", category: "Transformación digital" },
  { id: 18, french: "réalité virtuelle", spanish: "realidad virtual", category: "Transformación digital" },
  { id: 19, french: "twin numérique", spanish: "gemelo digital", category: "Transformación digital" },
  { id: 20, french: "plateforme numérique", spanish: "plataforma digital", category: "Transformación digital" },

  // SOBERANÍA TECNOLÓGICA
  { id: 21, french: "souveraineté technologique", spanish: "soberanía tecnológica", category: "Soberanía tecnológica" },
  { id: 22, french: "indépendance numérique", spanish: "independencia digital", category: "Soberanía tecnológica" },
  { id: 23, french: "sécurité des données", spanish: "seguridad de datos", category: "Soberanía tecnológica" },
  { id: 24, french: "protection des données", spanish: "protección de datos", category: "Soberanía tecnológica" },
  { id: 25, french: "gouvernance algorithmique", spanish: "gobernanza algorítmica", category: "Soberanía tecnológica" },
  { id: 26, french: "régulation technologique", spanish: "regulación tecnológica", category: "Soberanía tecnológica" },
  { id: 27, french: "dépendance technologique", spanish: "dependencia tecnológica", category: "Soberanía tecnológica" },
  { id: 28, french: "autonomie stratégique", spanish: "autonomía estratégica", category: "Soberanía tecnológica" },
  { id: 29, french: "sécurité nationale", spanish: "seguridad nacional", category: "Soberanía tecnológica" },
  { id: 30, french: "résilience numérique", spanish: "resiliencia digital", category: "Soberanía tecnológica" },

  // INCLUSIÓN DIGITAL
  { id: 31, french: "inclusion numérique", spanish: "inclusión digital", category: "Inclusión digital" },
  { id: 32, french: "fracture numérique", spanish: "brecha digital", category: "Inclusión digital" },
  { id: 33, french: "accès aux technologies", spanish: "acceso a las tecnologías", category: "Inclusión digital" },
  { id: 34, french: "alphabétisation numérique", spanish: "alfabetización digital", category: "Inclusión digital" },
  { id: 35, french: "compétences numériques", spanish: "competencias digitales", category: "Inclusión digital" },
  { id: 36, french: "formation professionnelle", spanish: "formación profesional", category: "Inclusión digital" },
  { id: 37, french: "développement des compétences", spanish: "desarrollo de competencias", category: "Inclusión digital" },
  { id: 38, french: "employabilité numérique", spanish: "empleabilidad digital", category: "Inclusión digital" },
  { id: 39, french: "éducation technologique", spanish: "educación tecnológica", category: "Inclusión digital" },
  { id: 40, french: "citoyenneté numérique", spanish: "ciudadanía digital", category: "Inclusión digital" },

  // ÉTICA ET INTELLIGENCE ARTIFICIELLE
  { id: 41, french: "éthique algorithmique", spanish: "ética algorítmica", category: "Ética e IA" },
  { id: 42, french: "biais algorithmique", spanish: "sesgo algorítmico", category: "Ética e IA" },
  { id: 43, french: "transparence algorithmique", spanish: "transparencia algorítmica", category: "Ética e IA" },
  { id: 44, french: "responsabilité artificielle", spanish: "responsabilidad artificial", category: "Ética e IA" },
  { id: 45, french: "gouvernance éthique", spanish: "gobernanza ética", category: "Ética e IA" },
  { id: 46, french: "intelligence artificielle responsable", spanish: "inteligencia artificial responsable", category: "Ética e IA" },
  { id: 47, french: "droits des données", spanish: "derechos de los datos", category: "Ética e IA" },
  { id: 48, french: "consentement éclairé", spanish: "consentimiento informado", category: "Ética e IA" },
  { id: 49, french: "impact social", spanish: "impacto social", category: "Ética e IA" },
  { id: 50, french: "justice algorithmique", spanish: "justicia algorítmica", category: "Ética e IA" },

  // IMPACTS ÉCONOMIQUES
  { id: 51, french: "transformation économique", spanish: "transformación económica", category: "Impactos económicos" },
  { id: 52, french: "économie numérique", spanish: "economía digital", category: "Impactos económicos" },
  { id: 53, french: "marché du travail", spanish: "mercado laboral", category: "Impactos económicos" },
  { id: 54, french: "création d'emplois", spanish: "creación de empleo", category: "Impactos económicos" },
  { id: 55, french: "destruction d'emplois", spanish: "destrucción de empleo", category: "Impactos económicos" },
  { id: 56, french: "formation continue", spanish: "formación continua", category: "Impactos económicos" },
  { id: 57, french: "compétences transversales", spanish: "competencias transversales", category: "Impactos económicos" },
  { id: 58, french: "productivité accrue", spanish: "productividad aumentada", category: "Impactos económicos" },
  { id: 59, french: "innovation technologique", spanish: "innovación tecnológica", category: "Impactos económicos" },
  { id: 60, french: "développement durable", spanish: "desarrollo sostenible", category: "Impactos económicos" },

  // RÉGLEMENTATION INTERNATIONALE
  { id: 61, french: "réglementation internationale", spanish: "regulación internacional", category: "Regulación internacional" },
  { id: 62, french: "droit international", spanish: "derecho internacional", category: "Regulación internacional" },
  { id: 63, french: "normes internationales", spanish: "normas internacionales", category: "Regulación internacional" },
  { id: 64, french: "coopération internationale", spanish: "cooperación internacional", category: "Regulación internacional" },
  { id: 65, french: "traités bilatéraux", spanish: "tratados bilaterales", category: "Regulación internacional" },
  { id: 66, french: "accords multilatéraux", spanish: "acuerdos multilaterales", category: "Regulación internacional" },
  { id: 67, french: "organisation internationale", spanish: "organización internacional", category: "Regulación internacional" },
  { id: 68, french: "gouvernance mondiale", spanish: "gobernanza mundial", category: "Regulación internacional" },
  { id: 69, french: "politique internationale", spanish: "política internacional", category: "Regulación internacional" },
  { id: 70, french: "diplomatie numérique", spanish: "diplomacia digital", category: "Regulación internacional" },

  // CYBERSÉCURITÉ
  { id: 71, french: "cybersécurité", spanish: "ciberseguridad", category: "Ciberseguridad" },
  { id: 72, french: "attaque informatique", spanish: "ataque informático", category: "Ciberseguridad" },
  { id: 73, french: "piratage informatique", spanish: "piratería informática", category: "Ciberseguridad" },
  { id: 74, french: "protection des données", spanish: "protección de datos", category: "Ciberseguridad" },
  { id: 75, french: "cryptographie", spanish: "criptografía", category: "Ciberseguridad" },
  { id: 76, french: "authentification", spanish: "autenticación", category: "Ciberseguridad" },
  { id: 77, french: "autorisation d'accès", spanish: "autorización de acceso", category: "Ciberseguridad" },
  { id: 78, french: "pare-feu", spanish: "cortafuegos", category: "Ciberseguridad" },
  { id: 79, french: "détection d'intrusion", spanish: "detección de intrusiones", category: "Ciberseguridad" },
  { id: 80, french: "réponse aux incidents", spanish: "respuesta a incidentes", category: "Ciberseguridad" },

  // INNOVATION TECHNOLOGIQUE
  { id: 81, french: "innovation technologique", spanish: "innovación tecnológica", category: "Innovación tecnológica" },
  { id: 82, french: "recherche et développement", spanish: "investigación y desarrollo", category: "Innovación tecnológica" },
  { id: 83, french: "transfert technologique", spanish: "transferencia tecnológica", category: "Innovación tecnológica" },
  { id: 84, french: "propriété intellectuelle", spanish: "propiedad intelectual", category: "Innovación tecnológica" },
  { id: 85, french: "brevets technologiques", spanish: "patentes tecnológicas", category: "Innovación tecnológica" },
  { id: 86, french: "licences technologiques", spanish: "licencias tecnológicas", category: "Innovación tecnológica" },
  { id: 87, french: "collaboration internationale", spanish: "colaboración internacional", category: "Innovación tecnológica" },
  { id: 88, french: "écosystème d'innovation", spanish: "ecosistema de innovación", category: "Innovación tecnológica" },
  { id: 89, french: "startup technologique", spanish: "startup tecnológica", category: "Innovación tecnológica" },
  { id: 90, french: "centre de recherche", spanish: "centro de investigación", category: "Innovación tecnológica" },

  // ÉDUCATION ET FORMATION
  { id: 91, french: "éducation numérique", spanish: "educación digital", category: "Educación y formación" },
  { id: 92, french: "formation en ligne", spanish: "formación en línea", category: "Educación y formación" },
  { id: 93, french: "apprentissage adaptatif", spanish: "aprendizaje adaptativo", category: "Educación y formación" },
  { id: 94, french: "évaluation automatisée", spanish: "evaluación automatizada", category: "Educación y formación" },
  { id: 95, french: "personnalisation éducative", spanish: "personalización educativa", category: "Educación y formación" },
  { id: 96, french: "intelligence pédagogique", spanish: "inteligencia pedagógica", category: "Educación y formación" },
  { id: 97, french: "gamification éducative", spanish: "gamificación educativa", category: "Educación y formación" },
  { id: 98, french: "apprentissage mixte", spanish: "aprendizaje mixto", category: "Educación y formación" },
  { id: 99, french: "formation continue", spanish: "formación continua", category: "Educación y formación" },
  { id: 100, french: "développement professionnel", spanish: "desarrollo profesional", category: "Educación y formación" }
];
