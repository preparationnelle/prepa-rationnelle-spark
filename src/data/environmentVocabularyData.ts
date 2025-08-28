export interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

export const environmentVocabularyData: VocabularyItem[] = [
  // 1. Changement climatique et réchauffement
  {
    spanish: "Cambio climático",
    french: "Changement climatique",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Calentamiento global",
    french: "Réchauffement global",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Efecto invernadero",
    french: "Effet de serre",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Gases de efecto invernadero",
    french: "Gaz à effet de serre",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Emisiones de carbono",
    french: "Émissions de carbone",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Huella de carbono",
    french: "Empreinte carbone",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Aumento del nivel del mar",
    french: "Élévation du niveau de la mer",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Sequía",
    french: "Sécheresse",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Olas de calor",
    french: "Vagues de chaleur",
    category: "Changement climatique et réchauffement"
  },
  {
    spanish: "Derretimiento de glaciares",
    french: "Fonte des glaciers",
    category: "Changement climatique et réchauffement"
  },

  // 2. Biodiversité et conservation
  {
    spanish: "Biodiversidad",
    french: "Biodiversité",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Especies en peligro",
    french: "Espèces en danger",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Extinción",
    french: "Extinction",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Hábitat natural",
    french: "Habitat naturel",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Reserva natural",
    french: "Réserve naturelle",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Parque nacional",
    french: "Parc national",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Especies invasoras",
    french: "Espèces invasives",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Deforestación",
    french: "Déforestation",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Reforestación",
    french: "Reboisement",
    category: "Biodiversité et conservation"
  },
  {
    spanish: "Corredor biológico",
    french: "Couloir biologique",
    category: "Biodiversité et conservation"
  },

  // 3. Pollution et environnement urbain
  {
    spanish: "Contaminación",
    french: "Pollution",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Contaminación del aire",
    french: "Pollution de l'air",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Contaminación del agua",
    french: "Pollution de l'eau",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Residuos tóxicos",
    french: "Déchets toxiques",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Plásticos",
    french: "Plastiques",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Microplásticos",
    french: "Microplastiques",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Reciclaje",
    french: "Recyclage",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Economía circular",
    french: "Économie circulaire",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Vertedero",
    french: "Décharge",
    category: "Pollution et environnement urbain"
  },
  {
    spanish: "Tratamiento de aguas",
    french: "Traitement des eaux",
    category: "Pollution et environnement urbain"
  },

  // 4. Énergie renouvelable et transition
  {
    spanish: "Energías renovables",
    french: "Énergies renouvelables",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Energía solar",
    french: "Énergie solaire",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Energía eólica",
    french: "Énergie éolienne",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Energía hidroeléctrica",
    french: "Énergie hydroélectrique",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Paneles solares",
    french: "Panneaux solaires",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Turbinas eólicas",
    french: "Éoliennes",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Transición energética",
    french: "Transition énergétique",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Eficiencia energética",
    french: "Efficacité énergétique",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Almacenamiento de energía",
    french: "Stockage d'énergie",
    category: "Énergie renouvelable et transition"
  },
  {
    spanish: "Red eléctrica inteligente",
    french: "Réseau électrique intelligent",
    category: "Énergie renouvelable et transition"
  },

  // 5. Agriculture durable et alimentation
  {
    spanish: "Agroecología",
    french: "Agroécologie",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Agricultura sostenible",
    french: "Agriculture durable",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Alimentos orgánicos",
    french: "Aliments biologiques",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Seguridad alimentaria",
    french: "Sécurité alimentaire",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Huerta urbana",
    french: "Jardin urbain",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Permacultura",
    french: "Permaculture",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Pesticidas",
    french: "Pesticides",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Fertilizantes",
    french: "Engrais",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Cadena alimentaria",
    french: "Chaîne alimentaire",
    category: "Agriculture durable et alimentation"
  },
  {
    spanish: "Malnutrición",
    french: "Malnutrition",
    category: "Agriculture durable et alimentation"
  },

  // 6. Peuples autochtones et droits environnementaux
  {
    spanish: "Pueblos indígenas",
    french: "Peuples autochtones",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Derechos territoriales",
    french: "Droits territoriaux",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Saberes ancestrales",
    french: "Savoirs ancestraux",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Cosmovisión",
    french: "Cosmovision",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Conservación comunitaria",
    french: "Conservation communautaire",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Gestión sostenible",
    french: "Gestion durable",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Minería ilegal",
    french: "Exploitation minière illégale",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Desplazamiento forzado",
    french: "Déplacement forcé",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Autonomía territorial",
    french: "Autonomie territoriale",
    category: "Peuples autochtones et droits environnementaux"
  },
  {
    spanish: "Convención 169 OIT",
    french: "Convention 169 OIT",
    category: "Peuples autochtones et droits environnementaux"
  },

  // 7. Politique environnementale et accords
  {
    spanish: "Acuerdo de París",
    french: "Accord de Paris",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "COP",
    french: "COP (Conférence des Parties)",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Protocolo de Kioto",
    french: "Protocole de Kyoto",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Objetivos de Desarrollo Sostenible",
    french: "Objectifs de Développement Durable",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Agenda 2030",
    french: "Agenda 2030",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Política ambiental",
    french: "Politique environnementale",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Regulación climática",
    french: "Régulation climatique",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Impuestos verdes",
    french: "Taxes vertes",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Subvenciones ambientales",
    french: "Subventions environnementales",
    category: "Politique environnementale et accords"
  },
  {
    spanish: "Cumplimiento internacional",
    french: "Conformité internationale",
    category: "Politique environnementale et accords"
  },

  // 8. Mode et fast fashion
  {
    spanish: "Fast fashion",
    french: "Fast fashion",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Industria textil",
    french: "Industrie textile",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Consumo excesivo",
    french: "Consommation excessive",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Residuos textiles",
    french: "Déchets textiles",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Microfibras",
    french: "Microfibres",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Producción sostenible",
    french: "Production durable",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Moda ética",
    french: "Mode éthique",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Trazabilidad",
    french: "Traçabilité",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Economía colaborativa",
    french: "Économie collaborative",
    category: "Mode et fast fashion"
  },
  {
    spanish: "Upcycling",
    french: "Upcycling",
    category: "Mode et fast fashion"
  }
];

export const getCategorizedEnvironmentVocabulary = () => {
  const categories = [...new Set(environmentVocabularyData.map(item => item.category))];

  return categories.map(category => ({
    category,
    items: environmentVocabularyData.filter(item => item.category === category)
  }));
};
