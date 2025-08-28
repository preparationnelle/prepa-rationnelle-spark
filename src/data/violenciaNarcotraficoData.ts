export interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

export const violenciaNarcotraficoData: VocabularyItem[] = [
  // VIOLENCIA CRÓNICA
  { id: 1, french: "violence chronique", spanish: "violencia crónica", category: "Violencia crónica" },
  { id: 2, french: "cycle de violence", spanish: "ciclo de violencia", category: "Violencia crónica" },
  { id: 3, french: "impunité généralisée", spanish: "impunidad generalizada", category: "Violencia crónica" },
  { id: 4, french: "climat d'insécurité", spanish: "clima de inseguridad", category: "Violencia crónica" },
  { id: 5, french: "culture de la peur", spanish: "cultura del miedo", category: "Violencia crónica" },
  { id: 6, french: "traumatisme collectif", spanish: "trauma colectivo", category: "Violencia crónica" },
  { id: 7, french: "violence structurelle", spanish: "violencia estructural", category: "Violencia crónica" },
  { id: 8, french: "normalisation de la violence", spanish: "normalización de la violencia", category: "Violencia crónica" },
  { id: 9, french: "violence endémique", spanish: "violencia endémica", category: "Violencia crónica" },
  { id: 10, french: "société fracturée", spanish: "sociedad fracturada", category: "Violencia crónica" },

  // CARTELS Y ORGANIZACIONES CRIMINELLES
  { id: 11, french: "cartel de drogue", spanish: "cartel de la droga", category: "Cartels y organizaciones criminales" },
  { id: 12, french: "organisation criminelle", spanish: "organización criminal", category: "Cartels y organizaciones criminales" },
  { id: 13, french: "trafiquant de drogue", spanish: "narcotraficante", category: "Cartels y organizaciones criminales" },
  { id: 14, french: "réseau de distribution", spanish: "red de distribución", category: "Cartels y organizaciones criminales" },
  { id: 15, french: "guerre des cartels", spanish: "guerra de carteles", category: "Cartels y organizaciones criminales" },
  { id: 16, french: "alliance criminelle", spanish: "alianza criminal", category: "Cartels y organizaciones criminales" },
  { id: 17, french: "structure hiérarchique", spanish: "estructura jerárquica", category: "Cartels y organizaciones criminales" },
  { id: 18, french: "financement illicite", spanish: "financiamiento ilícito", category: "Cartels y organizaciones criminales" },
  { id: 19, french: "blanchiment d'argent", spanish: "lavado de dinero", category: "Cartels y organizaciones criminales" },
  { id: 20, french: "corruption systémique", spanish: "corrupción sistémica", category: "Cartels y organizaciones criminales" },

  // SEGURIDAD PÚBLICA
  { id: 21, french: "sécurité publique", spanish: "seguridad pública", category: "Seguridad pública" },
  { id: 22, french: "forces de l'ordre", spanish: "fuerzas del orden", category: "Seguridad pública" },
  { id: 23, french: "police nationale", spanish: "policía nacional", category: "Seguridad pública" },
  { id: 24, french: "garde nationale", spanish: "guardia nacional", category: "Seguridad pública" },
  { id: 25, french: "armée fédérale", spanish: "ejército federal", category: "Seguridad pública" },
  { id: 26, french: "opération spéciale", spanish: "operación especial", category: "Seguridad pública" },
  { id: 27, french: "contrôle territorial", spanish: "control territorial", category: "Seguridad pública" },
  { id: 28, french: "présence militaire", spanish: "presencia militar", category: "Seguridad pública" },
  { id: 29, french: "stratégie de sécurité", spanish: "estrategia de seguridad", category: "Seguridad pública" },
  { id: 30, french: "plan d'urgence", spanish: "plan de emergencia", category: "Seguridad pública" },

  // MANTENIMIENTO DEL ORDEN
  { id: 31, french: "maintien de l'ordre", spanish: "mantenimiento del orden", category: "Mantenimiento del orden" },
  { id: 32, french: "état d'urgence", spanish: "estado de emergencia", category: "Mantenimiento del orden" },
  { id: 33, french: "loi martiale", spanish: "ley marcial", category: "Mantenimiento del orden" },
  { id: 34, french: "couvre-feu", spanish: "toque de queda", category: "Mantenimiento del orden" },
  { id: 35, french: "contrôle des foules", spanish: "control de multitudes", category: "Mantenimiento del orden" },
  { id: 36, french: "dispersion des manifestants", spanish: "dispersión de manifestantes", category: "Mantenimiento del orden" },
  { id: 37, french: "intervention policière", spanish: "intervención policial", category: "Mantenimiento del orden" },
  { id: 38, french: "usage de la force", spanish: "uso de la fuerza", category: "Mantenimiento del orden" },
  { id: 39, french: "proportionnalité de la réponse", spanish: "proporcionalidad de la respuesta", category: "Mantenimiento del orden" },
  { id: 40, french: "protocole d'intervention", spanish: "protocolo de intervención", category: "Mantenimiento del orden" },

  // TRÁFICO DE DROGAS
  { id: 41, french: "trafic de drogue", spanish: "tráfico de drogas", category: "Tráfico de drogas" },
  { id: 42, french: "production de cocaïne", spanish: "producción de cocaína", category: "Tráfico de drogas" },
  { id: 43, french: "récolte de pavot", spanish: "cosecha de amapola", category: "Tráfico de drogas" },
  { id: 44, french: "laboratoire clandestin", spanish: "laboratorio clandestino", category: "Tráfico de drogas" },
  { id: 45, french: "route de contrebande", spanish: "ruta de contrabando", category: "Tráfico de drogas" },
  { id: 46, french: "passage frontalier", spanish: "paso fronterizo", category: "Tráfico de drogas" },
  { id: 47, french: "cache de drogue", spanish: "escondite de droga", category: "Tráfico de drogas" },
  { id: 48, french: "chargement aérien", spanish: "cargamento aéreo", category: "Tráfico de drogas" },
  { id: 49, french: "submersible", spanish: "submarino", category: "Tráfico de drogas" },
  { id: 50, french: "narco-submersible", spanish: "narcosubmarino", category: "Tráfico de drogas" },

  // IMPACTOS SOCIALES
  { id: 51, french: "victime collatérale", spanish: "víctima colateral", category: "Impactos sociales" },
  { id: 52, french: "orphelin de guerre", spanish: "huérfano de guerra", category: "Impactos sociales" },
  { id: 53, french: "déplacement forcé", spanish: "desplazamiento forzado", category: "Impactos sociales" },
  { id: 54, french: "famille monoparentale", spanish: "familia monoparental", category: "Impactos sociales" },
  { id: 55, french: "enfant soldat", spanish: "niño soldado", category: "Impactos sociales" },
  { id: 56, french: "traumatisme infantile", spanish: "trauma infantil", category: "Impactos sociales" },
  { id: 57, french: "résilience communautaire", spanish: "resiliencia comunitaria", category: "Impactos sociales" },
  { id: 58, french: "solidarité locale", spanish: "solidaridad local", category: "Impactos sociales" },
  { id: 59, french: "réseau d'entraide", spanish: "red de apoyo", category: "Impactos sociales" },
  { id: 60, french: "reconstruction sociale", spanish: "reconstrucción social", category: "Impactos sociales" },

  // ECONOMÍA DEL NARCOTRÁFICO
  { id: 61, french: "économie souterraine", spanish: "economía subterránea", category: "Economía del narcotráfico" },
  { id: 62, french: "lavage d'argent", spanish: "lavado de dinero", category: "Economía del narcotráfico" },
  { id: 63, french: "investissement illicite", spanish: "inversión ilícita", category: "Economía del narcotráfico" },
  { id: 64, french: "économie parallèle", spanish: "economía paralela", category: "Economía del narcotráfico" },
  { id: 65, french: "corruption institutionnelle", spanish: "corrupción institucional", category: "Economía del narcotráfico" },
  { id: 66, french: "trafic d'influence", spanish: "tráfico de influencias", category: "Economía del narcotráfico" },
  { id: 67, french: "évasion fiscale", spanish: "evasión fiscal", category: "Economía del narcotráfico" },
  { id: 68, french: "paradis fiscal", spanish: "paraíso fiscal", category: "Economía del narcotráfico" },
  { id: 69, french: "banque offshore", spanish: "banco offshore", category: "Economía del narcotráfico" },
  { id: 70, french: "circuit financier", spanish: "circuito financiero", category: "Economía del narcotráfico" },

  // DERECHOS HUMANOS Y VIOLENCIA
  { id: 71, french: "droits de l'homme", spanish: "derechos humanos", category: "Derechos humanos y violencia" },
  { id: 72, french: "protection des civils", spanish: "protección de civiles", category: "Derechos humanos y violencia" },
  { id: 73, french: "enquête indépendante", spanish: "investigación independiente", category: "Derechos humanos y violencia" },
  { id: 74, french: "commission d'enquête", spanish: "comisión investigadora", category: "Derechos humanos y violencia" },
  { id: 75, french: "rapport d'experts", spanish: "informe de expertos", category: "Derechos humanos y violencia" },
  { id: 76, french: "témoin protégé", spanish: "testigo protegido", category: "Derechos humanos y violencia" },
  { id: 77, french: "programme de protection", spanish: "programa de protección", category: "Derechos humanos y violencia" },
  { id: 78, french: "asile politique", spanish: "asilo político", category: "Derechos humanos y violencia" },
  { id: 79, french: "droit d'asile", spanish: "derecho de asilo", category: "Derechos humanos y violencia" },
  { id: 80, french: "statut de réfugié", spanish: "estatus de refugiado", category: "Derechos humanos y violencia" },

  // POLÍTICAS PÚBLICAS
  { id: 81, french: "politique de sécurité", spanish: "política de seguridad", category: "Políticas públicas" },
  { id: 82, french: "stratégie nationale", spanish: "estrategia nacional", category: "Políticas públicas" },
  { id: 83, french: "plan gouvernemental", spanish: "plan gubernamental", category: "Políticas públicas" },
  { id: 84, french: "initiative présidentielle", spanish: "iniciativa presidencial", category: "Políticas públicas" },
  { id: 85, french: "réforme institutionnelle", spanish: "reforma institucional", category: "Políticas públicas" },
  { id: 86, french: "renforcement des institutions", spanish: "fortalecimiento institucional", category: "Políticas públicas" },
  { id: 87, french: "transparence gouvernementale", spanish: "transparencia gubernamental", category: "Políticas públicas" },
  { id: 88, french: "responsabilité politique", spanish: "responsabilidad política", category: "Políticas públicas" },
  { id: 89, french: "dialogue social", spanish: "diálogo social", category: "Políticas públicas" },
  { id: 90, french: "consensus national", spanish: "consenso nacional", category: "Políticas públicas" },

  // COOPERACIÓN INTERNACIONAL
  { id: 91, french: "coopération internationale", spanish: "cooperación internacional", category: "Cooperación internacional" },
  { id: 92, french: "assistance technique", spanish: "asistencia técnica", category: "Cooperación internacional" },
  { id: 93, french: "partenariat bilatéral", spanish: "asociación bilateral", category: "Cooperación internacional" },
  { id: 94, french: "aide internationale", spanish: "ayuda internacional", category: "Cooperación internacional" },
  { id: 95, french: "mission diplomatique", spanish: "misión diplomática", category: "Cooperación internacional" },
  { id: 96, french: "représentation consulaire", spanish: "representación consular", category: "Cooperación internacional" },
  { id: 97, french: "accord d'extradition", spanish: "acuerdo de extradición", category: "Cooperación internacional" },
  { id: 98, french: "traité d'assistance", spanish: "tratado de asistencia", category: "Cooperación internacional" },
  { id: 99, french: "partage d'informations", spanish: "compartición de información", category: "Cooperación internacional" },
  { id: 100, french: "coordination régionale", spanish: "coordinación regional", category: "Cooperación internacional" }
];
