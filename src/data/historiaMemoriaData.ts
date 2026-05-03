export interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

export const historiaMemoriaData: VocabularyItem[] = [
  // MEMORIA COLECTIVA
  { id: 1, french: "mémoire collective", spanish: "memoria colectiva", category: "Memoria colectiva" },
  { id: 2, french: "transmission intergénérationnelle", spanish: "transmisión intergeneracional", category: "Memoria colectiva" },
  { id: 3, french: "trauma historique", spanish: "trauma histórico", category: "Memoria colectiva" },
  { id: 4, french: "récit national", spanish: "relato nacional", category: "Memoria colectiva" },
  { id: 5, french: "identité culturelle", spanish: "identidad cultural", category: "Memoria colectiva" },
  { id: 6, french: "héritage historique", spanish: "patrimonio histórico", category: "Memoria colectiva" },
  { id: 7, french: "mémoire traumatique", spanish: "memoria traumática", category: "Memoria colectiva" },
  { id: 8, french: "réconciliation nationale", spanish: "reconciliación nacional", category: "Memoria colectiva" },
  { id: 9, french: "amnésie collective", spanish: "amnesia colectiva", category: "Memoria colectiva" },
  { id: 10, french: "résilience culturelle", spanish: "resiliencia cultural", category: "Memoria colectiva" },

  // HISTORIA ORAL
  { id: 11, french: "histoire orale", spanish: "historia oral", category: "Historia oral" },
  { id: 12, french: "témoignage vivant", spanish: "testimonio vivo", category: "Historia oral" },
  { id: 13, french: "tradition orale", spanish: "tradición oral", category: "Historia oral" },
  { id: 14, french: "mémoire des survivants", spanish: "memoria de los sobrevivientes", category: "Historia oral" },
  { id: 15, french: "récit de vie", spanish: "relato de vida", category: "Historia oral" },
  { id: 16, french: "archive vivante", spanish: "archivo vivo", category: "Historia oral" },
  { id: 17, french: "transmission familiale", spanish: "transmisión familiar", category: "Historia oral" },
  { id: 18, french: "mémoire populaire", spanish: "memoria popular", category: "Historia oral" },
  { id: 19, french: "témoignage historique", spanish: "testimonio histórico", category: "Historia oral" },
  { id: 20, french: "narration autobiographique", spanish: "narración autobiográfica", category: "Historia oral" },

  // DERECHOS HUMANOS Y MEMORIA
  { id: 21, french: "vérité historique", spanish: "verdad histórica", category: "Derechos humanos y memoria" },
  { id: 22, french: "justice transitionnelle", spanish: "justicia transicional", category: "Derechos humanos y memoria" },
  { id: 23, french: "réparation symbolique", spanish: "reparación simbólica", category: "Derechos humanos y memoria" },
  { id: 24, french: "reconnaissance officielle", spanish: "reconocimiento oficial", category: "Derechos humanos y memoria" },
  { id: 25, french: "mémoire des victimes", spanish: "memoria de las víctimas", category: "Derechos humanos y memoria" },
  { id: 26, french: "lutte contre l'impunité", spanish: "lucha contra la impunidad", category: "Derechos humanos y memoria" },
  { id: 27, french: "commission de vérité", spanish: "comisión de la verdad", category: "Derechos humanos y memoria" },
  { id: 28, french: "réparation collective", spanish: "reparación colectiva", category: "Derechos humanos y memoria" },
  { id: 29, french: "mémoire institutionnelle", spanish: "memoria institucional", category: "Derechos humanos y memoria" },
  { id: 30, french: "politique mémorielle", spanish: "política de la memoria", category: "Derechos humanos y memoria" },

  // DESAPARICIONES Y MEMORIA
  { id: 31, french: "disparition forcée", spanish: "desaparición forzada", category: "Desapariciones y memoria" },
  { id: 32, french: "familles de disparus", spanish: "familias de desaparecidos", category: "Desapariciones y memoria" },
  { id: 33, french: "exhumation de fosses", spanish: "exhumación de fosas", category: "Desapariciones y memoria" },
  { id: 34, french: "mémoire des disparus", spanish: "memoria de los desaparecidos", category: "Desapariciones y memoria" },
  { id: 35, french: "association de victimes", spanish: "asociación de víctimas", category: "Desapariciones y memoria" },
  { id: 36, french: "enquête judiciaire", spanish: "investigación judicial", category: "Desapariciones y memoria" },
  { id: 37, french: "banque génétique", spanish: "banco genético", category: "Desapariciones y memoria" },
  { id: 38, french: "identification des corps", spanish: "identificación de cuerpos", category: "Desapariciones y memoria" },
  { id: 39, french: "mémoire familiale", spanish: "memoria familiar", category: "Desapariciones y memoria" },
  { id: 40, french: "traumatisme transgénérationnel", spanish: "trauma transgeneracional", category: "Desapariciones y memoria" },

  // MUSEOS Y LUGARES DE MEMORIA
  { id: 41, french: "musée de la mémoire", spanish: "museo de la memoria", category: "Museos y lugares de memoria" },
  { id: 42, french: "site mémoriel", spanish: "sitio de memoria", category: "Museos y lugares de memoria" },
  { id: 43, french: "monument commémoratif", spanish: "monumento conmemorativo", category: "Museos y lugares de memoria" },
  { id: 44, french: "centre de documentation", spanish: "centro de documentación", category: "Museos y lugares de memoria" },
  { id: 45, french: "archive historique", spanish: "archivo histórico", category: "Museos y lugares de memoria" },
  { id: 46, french: "collection de témoignages", spanish: "colección de testimonios", category: "Museos y lugares de memoria" },
  { id: 47, french: "exposition permanente", spanish: "exposición permanente", category: "Museos y lugares de memoria" },
  { id: 48, french: "visite guidée mémorielle", spanish: "visita guiada de memoria", category: "Museos y lugares de memoria" },
  { id: 49, french: "parcours historique", spanish: "recorrido histórico", category: "Museos y lugares de memoria" },
  { id: 50, french: "commémoration annuelle", spanish: "conmemoración anual", category: "Museos y lugares de memoria" },

  // EDUCACIÓN Y MEMORIA
  { id: 51, french: "éducation à la mémoire", spanish: "educación para la memoria", category: "Educación y memoria" },
  { id: 52, french: "programme scolaire", spanish: "programa escolar", category: "Educación y memoria" },
  { id: 53, french: "curriculum historique", spanish: "currículo histórico", category: "Educación y memoria" },
  { id: 54, french: "formation citoyenne", spanish: "formación ciudadana", category: "Educación y memoria" },
  { id: 55, french: "sensibilité historique", spanish: "sensibilidad histórica", category: "Educación y memoria" },
  { id: 56, french: "culture démocratique", spanish: "cultura democrática", category: "Educación y memoria" },
  { id: 57, french: "valeurs républicaines", spanish: "valores republicanos", category: "Educación y memoria" },
  { id: 58, french: "tolérance historique", spanish: "tolerancia histórica", category: "Educación y memoria" },
  { id: 59, french: "mémoire inclusive", spanish: "memoria inclusiva", category: "Educación y memoria" },
  { id: 60, french: "enseignement critique", spanish: "enseñanza crítica", category: "Educación y memoria" },

  // ARTES Y EXPRESIÓN MEMORIAL
  { id: 61, french: "art commémoratif", spanish: "arte conmemorativo", category: "Artes y expresión memorial" },
  { id: 62, french: "théâtre documentaire", spanish: "teatro documental", category: "Artes y expresión memorial" },
  { id: 63, french: "cinéma de mémoire", spanish: "cine de memoria", category: "Artes y expresión memorial" },
  { id: 64, french: "photographie historique", spanish: "fotografía histórica", category: "Artes y expresión memorial" },
  { id: 65, french: "littérature testimoniale", spanish: "literatura testimonial", category: "Artes y expresión memorial" },
  { id: 66, french: "poésie de résistance", spanish: "poesía de resistencia", category: "Artes y expresión memorial" },
  { id: 67, french: "graffiti mémoriel", spanish: "grafiti memorial", category: "Artes y expresión memorial" },
  { id: 68, french: "performance artistique", spanish: "performance artística", category: "Artes y expresión memorial" },
  { id: 69, french: "installation commémorative", spanish: "instalación conmemorativa", category: "Artes y expresión memorial" },
  { id: 70, french: "œuvre interactive", spanish: "obra interactiva", category: "Artes y expresión memorial" },

  // POLÍTICAS PÚBLICAS DE MEMORIA
  { id: 71, french: "politique publique", spanish: "política pública", category: "Políticas públicas de memoria" },
  { id: 72, french: "loi mémorielle", spanish: "ley de memoria", category: "Políticas públicas de memoria" },
  { id: 73, french: "budget mémoriel", spanish: "presupuesto de memoria", category: "Políticas públicas de memoria" },
  { id: 74, french: "institut national de mémoire", spanish: "instituto nacional de memoria", category: "Políticas públicas de memoria" },
  { id: 75, french: "commission historique", spanish: "comisión histórica", category: "Políticas públicas de memoria" },
  { id: 76, french: "programme gouvernemental", spanish: "programa gubernamental", category: "Políticas públicas de memoria" },
  { id: 77, french: "initiative parlementaire", spanish: "iniciativa parlamentaria", category: "Políticas públicas de memoria" },
  { id: 78, french: "décret présidentiel", spanish: "decreto presidencial", category: "Políticas públicas de memoria" },
  { id: 79, french: "plan national", spanish: "plan nacional", category: "Políticas públicas de memoria" },
  { id: 80, french: "stratégie institutionnelle", spanish: "estrategia institucional", category: "Políticas públicas de memoria" },

  // SOCIEDAD CIVIL Y MEMORIA
  { id: 81, french: "société civile", spanish: "sociedad civil", category: "Sociedad civil y memoria" },
  { id: 82, french: "organisation non gouvernementale", spanish: "organización no gubernamental", category: "Sociedad civil y memoria" },
  { id: 83, french: "mouvement social", spanish: "movimiento social", category: "Sociedad civil y memoria" },
  { id: 84, french: "collectif de victimes", spanish: "colectivo de víctimas", category: "Sociedad civil y memoria" },
  { id: 85, french: "association mémorielle", spanish: "asociación memorial", category: "Sociedad civil y memoria" },
  { id: 86, french: "réseau citoyen", spanish: "red ciudadana", category: "Sociedad civil y memoria" },
  { id: 87, french: "plateforme numérique", spanish: "plataforma digital", category: "Sociedad civil y memoria" },
  { id: 88, french: "campagne de sensibilisation", spanish: "campaña de sensibilización", category: "Sociedad civil y memoria" },
  { id: 89, french: "mobilisation populaire", spanish: "movilización popular", category: "Sociedad civil y memoria" },
  { id: 90, french: "engagement communautaire", spanish: "compromiso comunitario", category: "Sociedad civil y memoria" },

  // MEMORIA DIGITAL Y TECNOLOGÍA
  { id: 91, french: "mémoire numérique", spanish: "memoria digital", category: "Memoria digital y tecnología" },
  { id: 92, french: "archive numérique", spanish: "archivo digital", category: "Memoria digital y tecnología" },
  { id: 93, french: "base de données", spanish: "base de datos", category: "Memoria digital y tecnología" },
  { id: 94, french: "plateforme interactive", spanish: "plataforma interactiva", category: "Memoria digital y tecnología" },
  { id: 95, french: "application mobile", spanish: "aplicación móvil", category: "Memoria digital y tecnología" },
  { id: 96, french: "réalité virtuelle", spanish: "realidad virtual", category: "Memoria digital y tecnología" },
  { id: 97, french: "intelligence artificielle", spanish: "inteligencia artificial", category: "Memoria digital y tecnología" },
  { id: 98, french: "big data historique", spanish: "big data histórico", category: "Memoria digital y tecnología" },
  { id: 99, french: "préservation numérique", spanish: "preservación digital", category: "Memoria digital y tecnología" },
  { id: 100, french: "accessibilité universelle", spanish: "accesibilidad universal", category: "Memoria digital y tecnología" }
];
