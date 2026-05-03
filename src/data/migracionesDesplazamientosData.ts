export interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

export const migracionesDesplazamientosData: VocabularyItem[] = [
  // FLUJOS MIGRATORIOS
  { id: 1, french: "flux migratoire", spanish: "flujo migratorio", category: "Flujos migratorios" },
  { id: 2, french: "migration internationale", spanish: "migración internacional", category: "Flujos migratorios" },
  { id: 3, french: "migration forcée", spanish: "migración forzada", category: "Flujos migratorios" },
  { id: 4, french: "migration économique", spanish: "migración económica", category: "Flujos migratorios" },
  { id: 5, french: "migration climatique", spanish: "migración climática", category: "Flujos migratorios" },
  { id: 6, french: "migration saisonnière", spanish: "migración estacional", category: "Flujos migratorios" },
  { id: 7, french: "migration de retour", spanish: "migración de retorno", category: "Flujos migratorios" },
  { id: 8, french: "migration irrégulière", spanish: "migración irregular", category: "Flujos migratorios" },
  { id: 9, french: "migration légale", spanish: "migración legal", category: "Flujos migratorios" },
  { id: 10, french: "migration pendulaire", spanish: "migración pendular", category: "Flujos migratorios" },

  // CARAVANAS Y RUTAS
  { id: 11, french: "caravane migratoire", spanish: "caravana migrante", category: "Caravanas y rutas" },
  { id: 12, french: "route migratoire", spanish: "ruta migratoria", category: "Caravanas y rutas" },
  { id: 13, french: "corridor humanitaire", spanish: "corredor humanitario", category: "Caravanas y rutas" },
  { id: 14, french: "passage frontalier", spanish: "paso fronterizo", category: "Caravanas y rutas" },
  { id: 15, french: "route des Caraïbes", spanish: "ruta del Caribe", category: "Caravanas y rutas" },
  { id: 16, french: "route méditerranéenne", spanish: "ruta mediterránea", category: "Caravanas y rutas" },
  { id: 17, french: "route balkanique", spanish: "ruta balcánica", category: "Caravanas y rutas" },
  { id: 18, french: "route sahélienne", spanish: "ruta saheliana", category: "Caravanas y rutas" },
  { id: 19, french: "caravane hondurienne", spanish: "caravana hondureña", category: "Caravanas y rutas" },
  { id: 20, french: "caravane salvadorienne", spanish: "caravana salvadoreña", category: "Caravanas y rutas" },

  // POLÍTICA MIGRATORIA ESTADOUNIDENSE
  { id: 21, french: "politique migratoire", spanish: "política migratoria", category: "Política migratoria estadounidense" },
  { id: 22, french: "loi sur l'immigration", spanish: "ley de inmigración", category: "Política migratoria estadounidense" },
  { id: 23, french: "visa humanitaire", spanish: "visa humanitaria", category: "Política migratoria estadounidense" },
  { id: 24, french: "asile politique", spanish: "asilo político", category: "Política migratoria estadounidense" },
  { id: 25, french: "refoulement", spanish: "devolución", category: "Política migratoria estadounidense" },
  { id: 26, french: "expulsion", spanish: "expulsión", category: "Política migratoria estadounidense" },
  { id: 27, french: "amnistie migratoire", spanish: "amnistía migratoria", category: "Política migratoria estadounidense" },
  { id: 28, french: "quota d'immigration", spanish: "cupo migratorio", category: "Política migratoria estadounidense" },
  { id: 29, french: "visa de travail", spanish: "visa de trabajo", category: "Política migratoria estadounidense" },
  { id: 30, french: "carte verte", spanish: "tarjeta verde", category: "Política migratoria estadounidense" },

  // TRÁNSITO Y FRONTERAS
  { id: 31, french: "contrôle frontalier", spanish: "control fronterizo", category: "Tránsito y fronteras" },
  { id: 32, french: "point de passage", spanish: "punto de cruce", category: "Tránsito y fronteras" },
  { id: 33, french: "zone tampon", spanish: "zona tampón", category: "Tránsito y fronteras" },
  { id: 34, french: "no man's land", spanish: "tierra de nadie", category: "Tránsito y fronteras" },
  { id: 35, french: "passeport biométrique", spanish: "pasaporte biométrico", category: "Tránsito y fronteras" },
  { id: 36, french: "visa de transit", spanish: "visa de tránsito", category: "Tránsito y fronteras" },
  { id: 37, french: "zone d'attente", spanish: "zona de espera", category: "Tránsito y fronteras" },
  { id: 38, french: "centre de rétention", spanish: "centro de retención", category: "Tránsito y fronteras" },
  { id: 39, french: "procédure accélérée", spanish: "procedimiento acelerado", category: "Tránsito y fronteras" },
  { id: 40, french: "détention administrative", spanish: "detención administrativa", category: "Tránsito y fronteras" },

  // DERECHOS HUMANOS
  { id: 41, french: "droit d'asile", spanish: "derecho de asilo", category: "Derechos humanos" },
  { id: 42, french: "protection internationale", spanish: "protección internacional", category: "Derechos humanos" },
  { id: 43, french: "non-refoulement", spanish: "principio de no devolución", category: "Derechos humanos" },
  { id: 44, french: "traitement inhumain", spanish: "trato inhumano", category: "Derechos humanos" },
  { id: 45, french: "discrimination raciale", spanish: "discriminación racial", category: "Derechos humanos" },
  { id: 46, french: "droits de l'enfant", spanish: "derechos del niño", category: "Derechos humanos" },
  { id: 47, french: "protection des mineurs", spanish: "protección de menores", category: "Derechos humanos" },
  { id: 48, french: "séparation familiale", spanish: "separación familiar", category: "Derechos humanos" },
  { id: 49, french: "réunion familiale", spanish: "reunificación familiar", category: "Derechos humanos" },
  { id: 50, french: "accès aux soins", spanish: "acceso a la atención médica", category: "Derechos humanos" },

  // ECONOMÍA MIGRATORIA
  { id: 51, french: "remise migratoire", spanish: "remesa migratoria", category: "Economía migratoria" },
  { id: 52, french: "économie informelle", spanish: "economía informal", category: "Economía migratoria" },
  { id: 53, french: "marché du travail", spanish: "mercado laboral", category: "Economía migratoria" },
  { id: 54, french: "emploi précaire", spanish: "empleo precario", category: "Economía migratoria" },
  { id: 55, french: "salaire minimum", spanish: "salario mínimo", category: "Economía migratoria" },
  { id: 56, french: "contribution fiscale", spanish: "contribución fiscal", category: "Economía migratoria" },
  { id: 57, french: "développement local", spanish: "desarrollo local", category: "Economía migratoria" },
  { id: 58, french: "investissement étranger", spanish: "inversión extranjera", category: "Economía migratoria" },
  { id: 59, french: "transfert de technologie", spanish: "transferencia tecnológica", category: "Economía migratoria" },
  { id: 60, french: "croissance économique", spanish: "crecimiento económico", category: "Economía migratoria" },

  // INTEGRACIÓN SOCIAL
  { id: 61, french: "intégration sociale", spanish: "integración social", category: "Integración social" },
  { id: 62, french: "acculturation", spanish: "aculturación", category: "Integración social" },
  { id: 63, french: "assimilation culturelle", spanish: "asimilación cultural", category: "Integración social" },
  { id: 64, french: "diversité culturelle", spanish: "diversidad cultural", category: "Integración social" },
  { id: 65, french: "tolérance sociale", spanish: "tolerancia social", category: "Integración social" },
  { id: 66, french: "préjugés sociaux", spanish: "prejuicios sociales", category: "Integración social" },
  { id: 67, french: "stigmatisation", spanish: "estigmatización", category: "Integración social" },
  { id: 68, french: "solidarité communautaire", spanish: "solidaridad comunitaria", category: "Integración social" },
  { id: 69, french: "réseau social", spanish: "red social", category: "Integración social" },
  { id: 70, french: "capital social", spanish: "capital social", category: "Integración social" },

  // DESAFÍOS HUMANITARIOS
  { id: 71, french: "crise humanitaire", spanish: "crisis humanitaria", category: "Desafíos humanitarios" },
  { id: 72, french: "aide humanitaire", spanish: "ayuda humanitaria", category: "Desafíos humanitarios" },
  { id: 73, french: "réfugié climatique", spanish: "refugiado climático", category: "Desafíos humanitarios" },
  { id: 74, french: "déplacement forcé", spanish: "desplazamiento forzado", category: "Desafíos humanitarios" },
  { id: 75, french: "personne déplacée", spanish: "persona desplazada", category: "Desafíos humanitarios" },
  { id: 76, french: "statut d'apatride", spanish: "estatuto de apátrida", category: "Desafíos humanitarios" },
  { id: 77, french: "mineur non accompagné", spanish: "menor no acompañado", category: "Desafíos humanitarios" },
  { id: 78, french: "traite des êtres humains", spanish: "trata de personas", category: "Desafíos humanitarios" },
  { id: 79, french: "exploitation sexuelle", spanish: "explotación sexual", category: "Desafíos humanitarios" },
  { id: 80, french: "travail forcé", spanish: "trabajo forzado", category: "Desafíos humanitarios" },

  // LEGISLACIÓN INTERNACIONAL
  { id: 81, french: "Convention de Genève", spanish: "Convención de Ginebra", category: "Legislación internacional" },
  { id: 82, french: "protocole de Palerme", spanish: "Protocolo de Palermo", category: "Legislación internacional" },
  { id: 83, french: "Convention de Dublin", spanish: "Convenio de Dublín", category: "Legislación internacional" },
  { id: 84, french: "règlement Dublin III", spanish: "Reglamento de Dublín III", category: "Legislación internacional" },
  { id: 85, french: "directive retour", spanish: "Directiva de retorno", category: "Legislación internacional" },
  { id: 86, french: "directive qualification", spanish: "Directiva de calificación", category: "Legislación internacional" },
  { id: 87, french: "accord de Schengen", spanish: "Acuerdo de Schengen", category: "Legislación internacional" },
  { id: 88, french: "espace Schengen", spanish: "espacio Schengen", category: "Legislación internacional" },
  { id: 89, french: "visa Schengen", spanish: "visa Schengen", category: "Legislación internacional" },
  { id: 90, french: "système d'information Schengen", spanish: "Sistema de Información Schengen", category: "Legislación internacional" },

  // IMPACTOS SOCIALES
  { id: 91, french: "choc démographique", spanish: "choque demográfico", category: "Impactos sociales" },
  { id: 92, french: "vieillissement population", spanish: "envejecimiento poblacional", category: "Impactos sociales" },
  { id: 93, french: "renouvellement générationnel", spanish: "renovación generacional", category: "Impactos sociales" },
  { id: 94, french: "diversité ethnique", spanish: "diversidad étnica", category: "Impactos sociales" },
  { id: 95, french: "conflit intergénérationnel", spanish: "conflicto intergeneracional", category: "Impactos sociales" },
  { id: 96, french: "tension sociale", spanish: "tensión social", category: "Impactos sociales" },
  { id: 97, french: "polarisation politique", spanish: "polarización política", category: "Impactos sociales" },
  { id: 98, french: "intégration civique", spanish: "integración cívica", category: "Impactos sociales" },
  { id: 99, french: "cohésion sociale", spanish: "cohesión social", category: "Impactos sociales" },
  { id: 100, french: "développement durable", spanish: "desarrollo sostenible", category: "Impactos sociales" }
];
