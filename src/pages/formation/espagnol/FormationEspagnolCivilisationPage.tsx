import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  Globe,
  Calendar,
  Briefcase,
  Users,
  Scale,
  GraduationCap,
  Plane,
  Shield,
  DollarSign,
  TreePine,
  BookOpen,
  TrendingUp,
  MapPin,
  X,
  FileText
} from 'lucide-react';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

interface RedactedSubject {
  title: string;
  content: string;
}

interface CivilisationModule {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  theme: string;
  topics: string[];
  detailedTopics: string[];
  importance: string;
  examples: string;
  redactedSubject?: RedactedSubject;
}

const FormationEspagnolCivilisationPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<RedactedSubject | null>(null);
  const [showVocabularyResources, setShowVocabularyResources] = useState(false);
  const [selectedVocabularyModule, setSelectedVocabularyModule] = useState<number | null>(null);

  const handleSubjectClick = (redactedSubject: RedactedSubject) => {
    setSelectedSubject(redactedSubject);
  };

  const closeSubjectModal = () => {
    setSelectedSubject(null);
  };

  const handleResourcesClick = (moduleId: number) => {
    if (moduleId === 4 || moduleId === 5 || moduleId === 6 || moduleId === 7 || moduleId === 11 || moduleId === 12) {
      setSelectedVocabularyModule(moduleId);
      setShowVocabularyResources(true);
    }
  };

  const closeVocabularyResources = () => {
    setShowVocabularyResources(false);
    setSelectedVocabularyModule(null);
  };

  const civilisationModules: CivilisationModule[] = [
    {
      id: 1,
      title: "Política y Regímenes",
      subtitle: "Amérique latine et Espagne",
      description: "Crises démocratiques, extrême droite/gauche, évolution politique",
      icon: Scale,
      color: "bg-red-600",
      theme: "red",
      topics: [
        "Crises démocratiques en Amérique latine",
        "Poids de l'extrême droite (Vox en Espagne)",
        "\"Fatigue démocratique\" (Colombie)",
        "Valle de los Caídos et mémoire franquiste"
      ],
      detailedTopics: [
        "Évolution des régimes politiques",
        "Clivages droite/gauche contemporains",
        "Mouvements contestataires",
        "Populisme et démocratie",
        "Transitions démocratiques"
      ],
      importance: "Thème le plus fréquent dans les annales",
      examples: "IÉNA 2020 (Colombie), débats sur Vox",
      redactedSubject: {
        title: "Democracia y populismo en América hispanohablante",
        content: `Latinobarómetro 2024 constata un retroceso democrático: solo 52 % de los latinoamericanos respalda este sistema y 33 % aceptaría un gobierno autoritario siempre que "resuelva problemas", ocho puntos más que en 2010. Ese vacío propicia el ascenso de Javier Milei, Nayib Bukele y Nicolás Maduro, líderes cuyo éxito descansa tanto en la narrativa de eficacia como en la erosión de contrapesos. Cabe preguntarse hasta qué punto tales resultados fortalecen o socavan la arquitectura institucional. En primer término examinaré los logros que seducen al electorado; en segundo lugar evidenciaré los costes que amenazan la salud democrática.

Desde mi punto de vista, el populismo conquista voluntades cuando ofrece resultados visibles. Bukele revalidó su mandato con 85 % de los votos y, bajo el estado de excepción, la tasa de homicidios descendió a 1,9/100 000en 2024, la más baja del hemisferio. El mensaje es nítido: orden antes que derechos. En Argentina, Milei promulgó la Ley Bases (2025) —emergencia económica y vía libre a privatizaciones—; el "shock de libertad" mantiene su imagen positiva por encima del 55 %. Si los precios se estabilizaran y los servicios mejorasen, muchos concluirían que la audacia se justifica. Conviene que se reconozca que estos líderes canalizan demandas legítimas de seguridad y estabilidad.

No obstante, el precio institucional resulta elevado. El Salvador suma más de 87 000 detenidos y la CIDH denuncia arbitrariedades. En Buenos Aires, Milei concentra poderes delegados y recorta 90 % del presupuesto científico; temo que la investigación pública dependa pronto de filantropía. Venezuela encarna el desenlace extremo: Maduro "ganó" en 2024 con 51,2 %, sin observar actas; Freedom House 2025 los ubica como "parcialmente libres" o "no libres". Aunque parezca tentador aplaudir la eficiencia inmediata, es posible que, de perpetuarse, el remedio devenga veneno.

Lo que más revela este balance es la tensión entre logros rápidos y contrapesos frágiles; conviene que se refuercen legislativos y tribunales, pues si cada país consiguiera equilibrar eficacia y control institucional, demostraría que la democracia puede resolver problemas sin traicionarse. De lo contrario, la promesa populista acabará socavando los cimientos que pretendía salvar.`
      }
    },
    {
      id: 2,
      title: "Mujeres y Violencia de Género",
      subtitle: "Féminisme et égalité",
      description: "Machisme, féminisme, leadership féminin, droits reproductifs",
      icon: Users,
      color: "bg-purple-600",
      theme: "purple",
      topics: [
        "Violence machiste et loi de 2004 (Espagne)",
        "Leadership féminin (Claudia Sheinbaum 2025)",
        "Avortement et droits reproductifs",
        "Féminisme en Amérique latine"
      ],
      detailedTopics: [
        "Analyse de la violence de genre",
        "Politiques publiques d'égalité",
        "Représentation politique des femmes",
        "Mouvements féministes contemporains",
        "Législation sur les droits reproductifs"
      ],
      importance: "Questions d'égalité très récurrentes",
      examples: "IÉNA 2018 (machisme), présidentielles Chili/Mexique"
    },
    {
      id: 3,
      title: "Educación y Desigualdades",
      subtitle: "Système éducatif et inégalités",
      description: "Débat démocratie vs rentabilité, inégalités d'accès à l'emploi",
      icon: GraduationCap,
      color: "bg-blue-600",
      theme: "blue",
      topics: [
        "\"Éduquer pour la démocratie ou la rentabilité\"",
        "Inégalités d'accès à l'emploi",
        "Système éducatif espagnol",
        "Fractures sociales par l'éducation"
      ],
      detailedTopics: [
        "Politiques éducatives comparées",
        "Mobilité sociale et éducation",
        "Formation professionnelle",
        "Universités et recherche",
        "Éducation et développement"
      ],
      importance: "Système éducatif et classes sociales réguliers",
      examples: "IÉNA 2017 (démocratie/rentabilité)"
    },
    {
      id: 4,
      title: "Migraciones y Desplazamientos",
      subtitle: "Flux migratoires et déplacements forcés",
      description: "Venezuela→Colombie, caravanes, politique américaine, transit",
      icon: Plane,
      color: "bg-orange-600",
      theme: "orange",
      topics: [
        "Flux Venezuela → Colombie",
        "Caravanes d'Amérique centrale",
        "Politique de séparation à la frontière",
        "Immigration vers l'Espagne"
      ],
      detailedTopics: [
        "Causes des migrations (pauvreté, violence)",
        "Responsabilité des pays occidentaux",
        "Politiques d'asile et d'accueil",
        "Pays de transit",
        "Intégration et droits humains"
      ],
      importance: "Causes et responsabilités occidentales",
      examples: "Crise vénézuélienne, politique Trump",
      redactedSubject: {
        title: "Migración y control fronterizo",
        content: `En 2024, la ruta atlántica hacia Canarias registró 46 843 llegadas —un aumento del 17 % respecto al año anterior— y más de 10 450 muertes, consolidándose como la frontera más mortífera de Europa. Podemos preguntarnos si un país con estas características geográficas puede gestionar eficazmente la presión migratoria sin sacrificar vidas ni soberanía. Primero, analizaré la desproporción de la carga insular. Luego, propondré vías de regularización eficiente y corresponsable.

Los centros de acogida de Canarias albergan a más de 4 000 menores, cifra que colapsa sus recursos y revela que la solidaridad intra-UE sigue siendo voluntaria. Salvamento Marítimo rescata cayucos tras trece días a la deriva, mientras la Comisión Europea no activa un reparto obligatorio de responsabilidades. Cabe matizar que, aunque la externalización de fronteras parezca solución, el Atlántico —verdadera fosa común— exige más que control remoto y muros inteligentes.

El Gobierno ha lanzado un reglamento de arraigo que concederá 300 000 permisos anuales entre 2025 y 2027, cubriendo vacantes agrícolas y reduciendo la economía sumergida. Sin embargo, temo que, si no se refuerzan los consulados, este esquema sobrecargue la gestión diplomática. Considero que sería pertinente financiar corredores humanitarios y establecer cuotas vinculantes. Si España lograse redirigir fondos FEDER a las islas fronterizas, las mafias perderían influencia y la acogida ganaría profesionalidad. Creo firmemente que la integración laboral solo funciona con formación adecuada y arraigo social.

La gestión de la crisis demuestra que la respuesta aislada no basta; es necesario un enfoque colectivo. Conviene implementar un sistema de reparto solidario de rescate y cuotas operativas. Creo firmemente que solo mediante la combinación de salvamento marítimo, regularización ordenada y respaldo europeo conjunto, España podrá convertir su liderazgo en un ejemplo real de solidaridad, evitando así que sus esfuerzos queden diluidos en meras declaraciones.`
      }
    },
    {
      id: 5,
      title: "Violencia y Narcotráfico",
      subtitle: "Violence chronique et cartels",
      description: "Violence, corruption, cartels, sécurité et maintien de l'ordre",
      icon: Shield,
      color: "bg-red-700",
      theme: "red",
      topics: [
        "Violence chronique en Amérique latine",
        "Corruption et cartels",
        "Sécurité publique",
        "Politiques de maintien de l'ordre"
      ],
      detailedTopics: [
        "Cartels mexicains et colombiens",
        "Impact social de la violence",
        "Stratégies anti-narcotrafic",
        "Justice et impunité",
        "Alternatives à la guerre contre la drogue"
      ],
      importance: "Sujet récurrent lié sécurité/narcotrafic",
      examples: "Honduras, Colombie, Mexique",
      redactedSubject: {
        title: "Narcotráfico 4.0 en el mundo hispanohablante",
        content: `En noviembre 2024 la Armada colombiana interceptó un semisumergible no tripulado con Starlink y cinco toneladas de cocaína rumbo a Australia. Semanas después, la Operación Orión XIV —46 países— incautó 225 tde cocaína y 128 t de marihuana en alta mar. El delito abraza el hardware inteligente mientras crece la cooperación naval para cortar las rutas del narcotráfico. Cabe preguntarse hasta qué punto la región podrá frenar un negocio que fusiona ingeniería naval y redes sociales. Primero mostraré la innovación criminal. Después analizaré los límites de la respuesta estatal.

Los narcos invierten en I+D. El nuevo "narco‑sub" reduciría costes y burlaría radares. En tierra, el CJNG capta a menores en TikTok con emojis "narco‑glam". El Clan del Golfo difunde tutoriales de drones en Telegram. EE. UU. declaró terroristas a cinco jefes del CJNG y restringió la venta de drones al Caribe. Desde mi punto de vista, esta convergencia obliga a tratar la seguridad marítima como ciberseguridad flotante.

Para una lucha efectiva, los puertos deben estar vigilados y seguros, pues en ellos circula la mayor parte de la droga. En marzo 2025, una disputa en Guayaquil provocó 22 muertos, lo que expone la fragilidad de la vigilancia portuaria. Un mes después, Manzanillo decomisó 5,6 t de cocaína ocultas en aguacates, confirmando que los esfuerzos aislados no bastan. Considero que sería necesario reforzar escáneres 24/7 y desplegar drones costeros que patrullen las terminales. Si Colombia, México y Ecuador coordinaran estos recursos, la ruta del Pacífico perdería atractivo y el coste operativo del narco comenzaría a elevarse.

En definitiva, la creciente brecha entre la invención criminal y la respuesta institucional revela la urgencia de consolidar una estrategia común. Conviene que se integren satélites, puertos vigilados y fiscalías financieras en un sistema coordinado capaz de rastrear la cocaína en tiempo real. Si la región lograra blindar el Pacífico con tecnología avanzada y desarrollo local, el narcotráfico vería erosionada su principal ruta, transformando los desafíos de hoy en un precedente de éxito para defender la ley.`
      }
    },
    {
      id: 6,
      title: "Pobreza y Dependencia Económica",
      subtitle: "Pauvreté et travail des enfants",
      description: "Seuil de pauvreté, envois de fonds, travail infantile",
      icon: DollarSign,
      color: "bg-yellow-600",
      theme: "yellow",
      topics: [
        "64% des Honduriens sous le seuil de pauvreté",
        "Dépendance aux envois de fonds (Salvador)",
        "Travail des enfants (Mexique)",
        "Conséquences des crises économiques"
      ],
      detailedTopics: [
        "Mesure et évolution de la pauvreté",
        "Remises et développement",
        "Protection de l'enfance",
        "Politiques sociales",
        "Inégalités régionales"
      ],
      importance: "Conséquences sociales des crises économiques",
      examples: "Honduras, Salvador, Mexique"
    },
    {
      id: 7,
      title: "Medio Ambiente y Clima",
      subtitle: "Environnement et justice climatique",
      description: "COP 16, Gustavo Petro, fast-fashion, peuples autochtones",
      icon: TreePine,
      color: "bg-green-600",
      theme: "green",
      topics: [
        "Discours de Gustavo Petro (COP 16)",
        "\"État de mort clinique\" du monde",
        "Justice sociale et peuples autochtones",
        "Fast-fashion et décharge au Chili"
      ],
      detailedTopics: [
        "Politiques environnementales",
        "Transition énergétique",
        "Droits des peuples autochtones",
        "Industrie textile et pollution",
        "Changement climatique en Amérique latine"
      ],
      importance: "Thème en croissance depuis 2023",
      examples: "COP 16, fast-fashion Chili",
      redactedSubject: {
        title: "Transición energética española: ¿vitrina o espejismo verde?",
        content: `El PNIEC 2024 fija un 81 % de renovables en 2030 y la Estrategia 2050 prevé un 97 % de generación limpia en España. Estas metas, únicas en la UE, plantean un desafío: ¿podrá un país mediterráneo, expuesto a sequías, liderar esta transición sin descuidar su tejido social? Primero analizaré los avances clave; luego evaluaré los obstáculos hídricos y sociales.

El Gobierno ha autorizado 28 GW de nueva capacidad: 239 plantas fotovoltaicas y 43 parques eólicos. Ha arrancado el corredor de hidrógeno verde de Aboño con 1 GW de electrólisis y se prevén 3 GW de eólica marina flotante esta década. Creo que estos proyectos sitúan a España a la cabeza de REPowerEU. Además, países como Brasil y Chile ya solicitan asesoría española para sus propias licitaciones de energía, lo que refuerza la proyección internacional.

La sequía crónica afecta al 60 % del territorio agrario. Sin almacenamiento en baterías ni bombeo adecuado, los excedentes solares podrían verterse 3 TWh en 2027, malgastando producción limpia. A ello se suma el rechazo local a la eólica marina cuando no se comparten royalties con los pescadores. Estimo que sería pertinente reforzar redes eléctricas y sistemas de almacenamiento, garantizando además precios estables y formación técnica en el mundo rural. Si las administraciones articularan estas medidas, la transición ganaría legitimidad y evitaría marginar a las zonas más vulnerables.

La gran lección es la tensión entre ambición climática y recursos hídricos escasos. Conviene armonizar la expansión de renovables con políticas de gestión del agua y refuerzo de la cohesión social. Si España lograra integrar tecnología avanzada, regulación clara y participación ciudadana, su transición energética brillaría como modelo en Iberoamérica; de lo contrario, su liderazgo no pasará de un espejismo técnico.`
      }
    },
    {
      id: 8,
      title: "Historia y Memoria",
      subtitle: "Histoire et mémoire collective",
      description: "Franquisme, transition, guerre civile, colonisation",
      icon: BookOpen,
      color: "bg-indigo-600",
      theme: "indigo",
      topics: [
        "Rappels du franquisme",
        "Transition démocratique espagnole",
        "Débats sur la guerre civile",
        "Peuples autochtones et colonisation"
      ],
      detailedTopics: [
        "Loi de mémoire historique",
        "Exhumations et réconciliation",
        "Colonisation et décolonisation",
        "Film \"También la lluvia\"",
        "Transmission mémorielle"
      ],
      importance: "Repères historiques pour comprendre l'actualité",
      examples: "Valle de los Caídos, También la lluvia",
      redactedSubject: {
        title: "Memoria histórica y reconciliación democrática",
        content: `La Ley 20/2022 de Memoria Democrática, vigente desde octubre de 2022, permite a los descendientes de exilio republicano solicitar la nacionalidad española. Hasta abril de 2025, los consulados tramitaron 678 000 expedientes y el plazo se ha extendido hasta el 22 de octubre de 2025. Con el 50.º aniversario de la muerte de Franco en noviembre de 2025, podemos preguntarnos si España aprovechará este momento simbólico para cerrar heridas. Primero, repasaré las medidas de reparación. Luego, señalaré las tensiones que amenazan su eficacia.

España exhumó restos de José Antonio Primo de Rivera en abril de 2023, concluyendo una etapa iniciada en 2019 con la salida de Franco de Cuelgamuros. El Valle de los Caídos fue rebautizado Valle de Cuelgamuros y resignificado como espacio de memoria. Además, en 2024 se creó un banco estatal de ADN para identificar víctimas de fosas comunes. La LOMLOE integró la memoria democrática en Educación para la Ciudadanía, garantizando que las nuevas generaciones conozcan la dictadura y la Transición. Estimo que, si estas acciones se consolidan, surgiría una cultura cívica que vaya más allá de la mera compensación administrativa.

Sin embargo, surgen obstáculos. Gobiernos autonómicos del PP y Vox intentaron derogar normas de memoria; el Ejecutivo recurrió al Tribunal Constitucional para impedirlo. El aluvión de solicitudes de nacionalidad, sobre todo en Argentina y Cuba, desborda consulados y genera demoras críticas. El censo oficial de 114 226 desaparecidos sigue incompleto y solo el 23 % de fosas ha sido intervenido. Considero que sería necesario garantizar financiación estable y personal técnico en ayuntamientos y diputaciones. Si el Estado asegurara estos recursos, la promesa de verdad y justicia no quedaría a medio camino.

La conmemoración del 50.º aniversario ofrece una oportunidad única. Conviene armonizar recursos técnicos, respaldo jurídico y participación ciudadana. Creo firmemente que solo si la memoria se aplica de forma homogénea y se valora como vínculo social, España logrará transformar el recuerdo en reconciliación duradera; de lo contrario, esta efeméride pasará como un gesto vacío de consecuencias reales.`
      }
    },
    {
      id: 9,
      title: "Inteligencia Artificial y Transformación Digital",
      subtitle: "Soberanía tecnológica e inclusión digital",
      description: "IA generativa, modelos hispanohablantes, brecha digital",
      icon: BookOpen,
      color: "bg-cyan-600",
      theme: "cyan",
      topics: [
        "Plan Nacional de IA español (600 M€)",
        "México: 70% adopción empresarial ChatGPT",
        "Chile: Latam-GPT con corpus latinoamericanos",
        "Sandbox ético y AI Act europeo"
      ],
      detailedTopics: [
        "Corpus panhispánico para asistentes IA",
        "Chatbots médicos en español",
        "Energía solar para centros de datos",
        "Alfabetización digital crítica",
        "Protección de datos sensibles"
      ],
      importance: "Soberanía tecnológica vs dependencia anglosajona",
      examples: "Madrid sandbox ético, México IA médica",
      redactedSubject: {
        title: "Inteligencia artificial y transformación digital",
        content: `Las herramientas generativas han pasado, en apenas tres años, de curiosidad académica a motor económico. España ha destinado 600 M € a su Plan Nacional de IA, México supera el 70 % de adopción empresarial de ChatGPT, y Chile prepara Latam‑GPT, primer modelo abierto entrenado con corpus latinoamericanos. Considero que la gran incógnita es si esta ola logrará reducir la brecha digital o acabará profundizándola. ¿Puede el ecosistema hispanohablante convertir la IA en palanca inclusiva sin ceder su soberanía tecnológica?

En primer término, el entusiasmo es innegable. Madrid impulsa un sandbox ético y armoniza su ley con el AI Act, estableciendo directrices de transparencia y responsabilidad. Pienso que sería pertinente impulsar un corpus panhispánico para que los asistentes reconozcan acentos rioplatenses y giros caribeños, reduciendo así la dependencia anglosajona. En Ciudad de México, el programa «IA para el español» financia chatbots médicos que ya atienden a tres millones de usuarios. Santiago presentará en 2025 Latam‑GPT, entrenado con energía solar del desierto de Atacama y 200 000 libros de dominio público; aunque muchos dudaran de que compitiera con gigantes privados, su mera existencia demuestra que la región puede generar modelos propios.

Ahora bien, la CEPAL advierte que solo el 38 % de los hogares rurales andinos dispone de banda ancha y que cuatro de cada diez internautas no identifican un deepfake. Me parece imprescindible que los gobiernos garanticen conectividady alfabetización crítica; de lo contrario, la IA reproducirá o incluso acrecentará viejas desigualdades. Además, la explotación de datos sensibles exige vigilancia estricta: si no se protegieran la privacidad y los derechos de autor, el entusiasmo se tornaría recelo y la normativa quedaría en papel mojado. Creo firmemente que la formación docente determinará que la IA sirva para personalizar la enseñanza y no para perpetuar sesgos algorítmicos.

En definitiva, lo que más revela este panorama es la distancia entre innovación y acceso real. Sin embargo, conviene que se comparta la inversión en infraestructuras y se coordinen políticas educativas. Desde mi punto de vista, si España, México y Chile consiguieran alinear normativa, adopción y conectividad, la IA serviría de brújula de desarrollo inclusivo para todo el mundo hispano.`
      }
    },
    {
      id: 10,
      title: "China y Geopolítica Global",
      subtitle: "Alianza estratégica vs dependencia 2.0",
      description: "Franja y Ruta, intercambio comercial, soberanía regional",
      icon: Globe,
      color: "bg-amber-600",
      theme: "amber",
      topics: [
        "370 000 M US$ intercambio comercial 2024",
        "22 países adheridos Franja y la Ruta",
        "Megapuerto Chancay (Perú): 1 300 M US$",
        "Triángulo del litio: CATL-YPF 1 400 M US$"
      ],
      detailedTopics: [
        "Transferencia tecnológica vs dependencia",
        "110 000 M US$ préstamos 2008-2023",
        "Estación espacial Neuquén (uso dual)",
        "Aranceles anti-dumping Washington",
        "Cláusulas contenido local"
      ],
      importance: "Tensión ganancias rápidas vs autonomía estratégica",
      examples: "Chancay, litio Argentina, espacial Neuquén",
      redactedSubject: {
        title: "China y América Latina hispanohablante: ¿alianza estratégica o dependencia 2.0?",
        content: `El intercambio comercial entre China y América Latina hispanohablante alcanzó en 2024 unos 370 000 M US$, casi el doble que en 2014, y veintidós países se adhirieron a la Franja y la Ruta. Podemos preguntarnos si este flujo masivo de capital y proyectos impulsará un desarrollo sostenible o afianzará la histórica dependencia primaria. Primero, analizaré los beneficios económicos y logísticos; luego, evaluaré los riesgos financieros y geopolíticos.

El megapuerto de Chancay (Perú) recibió 1 300 M US$ de COSCO para reducir en veinte días la travesía entre Asia y América Latina. La terminal incrementará la capacidad de exportación del país y creará 15 000 empleos directos e indirectos en los próximos cinco años. Asimismo, en el triángulo del litio, CATL y YPF planean invertir 1 400 M US$para producir 30 000 t anuales de carbonato de litio en Catamarca desde 2028, asegurando materia prima para baterías. Creo que estas inversiones mejoran la inserción de la región en cadenas globales y fomentan la transferencia tecnológica. México también se beneficia: Chirey inaugurará este año una planta de vehículos eléctricos en Nuevo León con 5 000empleos y apoyo de Huawei para sistemas de conectividad a bordo.

Sin embargo, la dependencia crediticia crece. Entre 2008 y 2023, China otorgó 110 000 M US$ a Argentina, Ecuador y Venezuela a través de préstamos ligados al petróleo y al cobre. Estimo que sería esencial diversificar socios y fuentes de financiamiento: de lo contrario, la vulnerabilidad fiscal aumentará y el servicio de la deuda consumirá más del 10 % del PIB. La estación espacial de Neuquén, gestionada por el Ejército Popular, abre dudas sobre posible uso militar dual y soberanía nacional. Además, Washington impuso aranceles "anti-dumping" a acero mexicano y restrictivos al cobre chileno, lo que obliga a varios países a redefinir sus alianzas comerciales.

La principal lección es la tensión entre ganancias rápidas y autonomía estratégica. Conviene que América Latina negocie cláusulas de contenido local y transparencia financiera. Si los gobiernos lograran reinvertir la renta del litio en I+D y abrir nuevos mercados, la relación con China podría transformarse en alianza equilibrada; de lo contrario, el dragón reemplazará al tío Sam sin cambiar la asimetría histórica ni fortalecer la soberanía regional.`
      }
    },
    {
      id: 11,
      title: "Derechos de las Mujeres y Movimientos Sociales",
      subtitle: "Luttes féministes et résistance citoyenne",
      description: "Reversibilité des droits, mobilisation sociale, garanties étatiques",
      icon: Users,
      color: "bg-pink-600",
      theme: "pink",
      topics: [
        "España: 76,7 puntos Gender Equality Index (4.º UE)",
        "Argentina: supresión Ministerio de las Mujeres",
        "Ni Una Menos: 150 000 manifestantes",
        "Ley Orgánica 10/2022 'solo sí es sí'"
      ],
      detailedTopics: [
        "Movilización ciudadana y creatividad social",
        "Himno 'Un violador en tu camino' (Las Tesis)",
        "Liderazgo normativo y respaldo ciudadano",
        "Financiación estable políticas igualdad",
        "Procesos judiciales ágiles"
      ],
      importance: "Conquistas feministas y vulnerabilidad institucional",
      examples: "8-M España 650 000 manifestantes, femicidios Argentina",
      redactedSubject: {
        title: "Derechos de las mujeres y movimientos sociales",
        content: `En 2024, España obtuvo 76,7 puntos en el Gender Equality Index (4.º de la UE), mientras Argentina suprimió el Ministerio de las Mujeres tras el decreto de Javier Milei. Podemos preguntarnos si los derechos de las mujeres siguen siendo conquistas reversibles. Primero, examinaré la respuesta de la sociedad civil; luego, analizaré el papel del Estado y sus garantías.

La experiencia argentina ilustra el poder de la movilización. Tras cerrar el Ministerio de las Mujeres, se despidió al 55 %del personal y se recortó presupuesto pese a 252 femicidios en 2023. El 3 de junio, 150 000 personas marcharon bajo Ni Una Menos frente al Congreso. El himno "Un violador en tu camino", creado por Las Tesis en Chile, resonó en más de 400 ciudades, demostrando que la creatividad y la solidaridad pueden sostener la agenda de género cuando el Estado retrocede.

En España, la Ley Orgánica 10/2022 ("solo sí es sí") unificó delitos de violencia sexual y estableció planes de reeducación para agresores. El 8-M 2025 congregó a 650 000 manifestantes, pese a la lluvia, bajo el lema "Feministas antirracistas". Sin embargo, comunidades gobernadas por PP-Vox intentaron derogar normas igualitarias, lo que obligó al Ejecutivo a recurrir ante el Tribunal Constitucional. Considero que sería imprescindible garantizar financiación estable a políticas de igualdad y agilizar los procesos judiciales para proteger los avances.

Los casos de Argentina y España evidencian que la igualdad progresa cuando convergen sociedad y normativa. Estimo que reforzar ambos pilares de modo simultáneo —movilización creativa y liderazgo legislativo— es crucial. Si se blindaran los derechos con recursos sólidos y respuesta judicial rápida, las conquistas feministas dejarían de ser vulnerables y se instaurarían como logros permanentes.`
      }
    },
    {
      id: 12,
      title: "Desigualdades y Pobreza",
      subtitle: "Inégalités et pauvreté en Ibéroamérique",
      description: "Indices, groupes vulnérables, mécanismes et politiques sociales",
      icon: DollarSign,
      color: "bg-yellow-600",
      theme: "yellow",
      topics: [
        "Coeficiente de Gini : América Latina más desigual",
        "40% en pobreza extrema (< 1,9$/día ONU)",
        "Trabajadores pobres : 38% sector informal",
        "Feminización pobreza : +12% mujeres afectadas",
        "Brecha digital : 60% hogares rurales sin acceso"
      ],
      detailedTopics: [
        "Conceptos e indicadores (AROPE, umbral pobreza)",
        "Grupos vulnerables (sin hogar, niños de la calle)",
        "Causes structurelles (desindustrialización, fuga cerebros)",
        "Politiques sociales (renta mínima, microcrédito)",
        "Expressions clés (romper círculo vicioso)"
      ],
      importance: "Défis socio-économiques et cohésion sociale",
      examples: "Plan choque pobreza España, economía informal México"
    }
  ];

  const getThemeColors = (theme: string) => {
    const colors = {
      red: {
        bg: "from-red-50 to-orange-50",
        border: "border-red-200",
        text: "text-red-800",
        accent: "text-red-600",
        button: "bg-red-600 hover:bg-red-700",
        tag: "bg-red-100 border-red-200"
      },
      purple: {
        bg: "from-purple-50 to-orange-50",
        border: "border-purple-200",
        text: "text-purple-800",
        accent: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        tag: "bg-purple-100 border-purple-200"
      },
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        text: "text-blue-800",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        tag: "bg-blue-100 border-blue-200"
      },
      orange: {
        bg: "from-orange-50 to-yellow-50",
        border: "border-orange-200",
        text: "text-orange-800",
        accent: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        tag: "bg-orange-100 border-orange-200"
      },
      yellow: {
        bg: "from-yellow-50 to-orange-50",
        border: "border-yellow-200",
        text: "text-yellow-800",
        accent: "text-yellow-700",
        button: "bg-yellow-600 hover:bg-yellow-700",
        tag: "bg-yellow-100 border-yellow-200"
      },
      green: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200",
        text: "text-green-800",
        accent: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        tag: "bg-green-100 border-green-200"
      },
      indigo: {
        bg: "from-indigo-50 to-purple-50",
        border: "border-indigo-200",
        text: "text-indigo-800",
        accent: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        tag: "bg-indigo-100 border-indigo-200"
      },
      cyan: {
        bg: "from-cyan-50 to-blue-50",
        border: "border-cyan-200",
        text: "text-cyan-800",
        accent: "text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700",
        tag: "bg-cyan-100 border-cyan-200"
      },
      amber: {
        bg: "from-amber-50 to-yellow-50",
        border: "border-amber-200",
        text: "text-amber-800",
        accent: "text-amber-600",
        button: "bg-amber-600 hover:bg-amber-700",
        tag: "bg-amber-100 border-amber-200"
      },
      pink: {
        bg: "from-pink-50 to-rose-50",
        border: "border-pink-200",
        text: "text-pink-800",
        accent: "text-pink-600",
        button: "bg-pink-600 hover:bg-pink-700",
        tag: "bg-pink-100 border-pink-200"
      }
    };
    return colors[theme as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Civilisation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Globe className="h-9 w-9" />
            </div>
            Civilisation Hispanique
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez les enjeux contemporains d'Espagne et d'Amérique latine pour exceller aux concours ECG
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">10 thématiques essentielles</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-orange-600">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Article d'introduction */}
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg mb-10">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Globe className="h-6 w-6" />
              Les enjeux de la civilisation hispanique aux concours
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-6">
            <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
              <h3 className="font-bold text-orange-900 mb-3">Pourquoi étudier la civilisation hispanique ?</h3>
              <p className="leading-relaxed mb-4">
                La civilisation hispanique représente un enjeu majeur des concours ECG. Les épreuves d'espagnol 
                (version, thème, essai) s'appuient systématiquement sur des connaissances civilisationnelles 
                précises concernant l'Espagne et l'Amérique latine contemporaines.
              </p>
              <p className="leading-relaxed">
                Depuis 2018, les annales IÉNA/ELVi/ECRICOME révèlent une forte récurrence de certaines 
                problématiques que nous avons identifiées et organisées en 10 thématiques essentielles, 
                enrichies des nouveaux enjeux technologiques et géopolitiques de 2024-2025.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-orange-900 mb-3">🎯 Objectifs pédagogiques :</h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Maîtriser les enjeux politiques et sociaux contemporains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Comprendre les spécificités régionales (Espagne vs Amérique latine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Analyser les défis démocratiques et les transitions politiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Appréhender les questions migratoires et environnementales</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-orange-900 mb-3">📚 Pour les concours :</h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Contexte indispensable pour comprendre les versions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Exemples concrets pour enrichir les essais argumentatifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Vocabulaire spécialisé par thématique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                    <span>Actualité hispanique jusqu'aux concours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-4 border border-orange-300">
              <h4 className="font-semibold text-orange-900 mb-2">💡 Conseil stratégique :</h4>
              <p className="text-sm text-orange-800 leading-relaxed">
                <strong>Croiser civilisation et vocabulaire</strong> : chaque thème civilisationnel possède un vocabulaire 
                spécialisé (ex: violencia de género + lexique judiciaire) qu'il faut réviser en contexte 
                plutôt qu'en listes isolées. Les sujets sont souvent tirés d'articles récents.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thématiques de Civilisation</h2>
          <div className="grid gap-8">
            {civilisationModules.map((module) => {
              const themeColors = getThemeColors(module.theme);
              return (
                <Card key={module.id} className={`bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl ${module.color} text-white shadow-lg`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-3xl font-bold ${themeColors.text} mb-2 flex items-center gap-3`}>
                          <span className={`${module.color} text-white px-3 py-1 rounded-full text-xl font-bold`}>
                            {module.id}
                          </span>
                          {module.title}
                        </CardTitle>
                        <p className={`${themeColors.accent} text-lg font-medium`}>{module.subtitle}</p>
                        <p className="text-gray-700 mt-1">{module.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <TrendingUp className="h-4 w-4" />
                          Points clés récurrents
                        </h4>
                        <div className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <div key={index} className={`p-3 rounded-lg border ${themeColors.tag}`}>
                              <span className="text-sm font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <MapPin className="h-4 w-4" />
                          Approfondissements
                        </h4>
                        <div className="space-y-2">
                          {module.detailedTopics.map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${module.color.replace('bg-', 'bg-')}`}></div>
                              <span className={`text-sm ${themeColors.accent}`}>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`bg-white/50 rounded-lg p-4 mb-4 border ${themeColors.border}`}>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className={themeColors.text}>Importance :</strong>
                          <p className={themeColors.accent}>{module.importance}</p>
                        </div>
                        <div>
                          <strong className={themeColors.text}>Exemples d'annales :</strong>
                          <p className={themeColors.accent}>{module.examples}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link to={`/formation/espagnol/civilisation/module${module.id}`}>
                        <Button className={`flex-1 ${themeColors.button} text-white font-semibold py-3`}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Accéder au module
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}
                        onClick={() => handleResourcesClick(module.id)}
                      >
                        <Briefcase className="mr-2 h-4 w-4" />
                        {(module.id === 4 || module.id === 5 || module.id === 6 || module.id === 7 || module.id === 11 || module.id === 12) ? 'Vocabulaire spécialisé' : 'Ressources'}
                      </Button>
                      {module.redactedSubject ? (
                        <Button 
                          variant="outline" 
                          className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}
                          onClick={() => handleSubjectClick(module.redactedSubject!)}
                        >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="px-6 border-gray-300 text-gray-400 cursor-not-allowed"
                          disabled
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Bientôt disponible
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section vocabulaire et conseils */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
                <BookOpen className="h-5 w-5" />
                Vocabulaire par thématique
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700 space-y-4">
              <p className="text-sm leading-relaxed">
                Chaque thématique civilisationnelle possède son vocabulaire spécialisé indispensable 
                pour les épreuves de traduction et d'expression.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-900 mb-2">Priorités vocabulaire :</h4>
                <ul className="text-sm space-y-1">
                  <li>🏛️ <strong>Droit et justice</strong> : el proceso, los daños y perjuicios</li>
                  <li>🗳️ <strong>Politique</strong> : las elecciones, el congreso, el partido</li>
                  <li>💰 <strong>Économie</strong> : la inflación, los sobornos, la corrupción</li>
                  <li>🚪 <strong>Migration</strong> : los desplazamientos forzados, la frontera</li>
                  <li>🌱 <strong>Environnement</strong> : el cambio climático, las emisiones</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
                <TrendingUp className="h-5 w-5" />
                Actualité et concours 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700 space-y-4">
              <p className="text-sm leading-relaxed">
                Surveillez l'actualité hispanique jusqu'aux concours : les sujets s'appuient 
                souvent sur des événements récents.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-900 mb-2">Événements à suivre :</h4>
                <ul className="text-sm space-y-1">
                  <li>🇲🇽 <strong>Claudia Sheinbaum</strong> (présidence Mexique)</li>
                  <li>🌍 <strong>COP et environnement</strong> (discours Gustavo Petro)</li>
                  <li>🚶‍♂️ <strong>Migrations vénézuéliennes</strong> (évolution 2024-2025)</li>
                  <li>🏛️ <strong>Élections en Amérique latine</strong> (évolutions démocratiques)</li>
                  <li>📺 <strong>Références culturelles</strong> (films, littérature, arts)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal pour afficher le sujet rédigé */}
      {selectedSubject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-100">
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedSubject.title}</h2>
                  <p className="text-sm text-gray-600">Sujet rédigé - Formation Espagnol</p>
                </div>
              </div>
              <Button onClick={closeSubjectModal} variant="ghost" size="sm">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {selectedSubject.content}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end">
              <Button onClick={closeSubjectModal} className="bg-orange-600 hover:bg-orange-700 text-white">
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour les flashcards de vocabulaire spécialisé */}
      {showVocabularyResources && selectedVocabularyModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  selectedVocabularyModule === 4 ? 'bg-blue-100' :
                  selectedVocabularyModule === 5 ? 'bg-red-100' : 
                  selectedVocabularyModule === 6 ? 'bg-orange-100' :
                  selectedVocabularyModule === 7 ? 'bg-green-100' :
                  selectedVocabularyModule === 11 ? 'bg-pink-100' : 'bg-yellow-100'
                }`}>
                  {selectedVocabularyModule === 4 ? (
                    <Plane className="h-5 w-5 text-blue-600" />
                  ) : selectedVocabularyModule === 5 ? (
                    <Shield className="h-5 w-5 text-red-600" />
                  ) : selectedVocabularyModule === 6 ? (
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                  ) : selectedVocabularyModule === 7 ? (
                    <TreePine className="h-5 w-5 text-green-600" />
                  ) : selectedVocabularyModule === 11 ? (
                    <Users className="h-5 w-5 text-pink-600" />
                  ) : (
                    <DollarSign className="h-5 w-5 text-yellow-600" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedVocabularyModule === 4 
                      ? 'Vocabulaire spécialisé - Migrations et Déplacements'
                      : selectedVocabularyModule === 5 
                        ? 'Vocabulaire spécialisé - Narcotrafic et Violence'
                        : selectedVocabularyModule === 6
                          ? 'Vocabulaire spécialisé - Économie et Finance'
                          : selectedVocabularyModule === 7
                            ? 'Vocabulaire spécialisé - Environnement et Climat'
                            : selectedVocabularyModule === 11
                              ? 'Vocabulaire spécialisé - Condition féminine et Féminisme'
                              : 'Vocabulaire spécialisé - Inégalités et Pauvreté'
                    }
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedVocabularyModule === 4 
                      ? 'Chapitre 4 - Terminologie officielle OIM/ACNUR et expressions clés'
                      : selectedVocabularyModule === 5 
                        ? 'Chapitre 5 - Vocabulaire technique et expressions idiomatiques'
                        : selectedVocabularyModule === 6
                          ? 'Chapitre 6 - Macro-économie, entreprise, finance, politique économique et corruption'
                          : selectedVocabularyModule === 7
                            ? 'Chapitre 7 - Science du climat, phénomènes, solutions et politique climatique'
                            : selectedVocabularyModule === 11
                              ? 'Chapitre 11 - Vocabulaire de la condition féminine et des mouvements sociaux'
                              : 'Chapitre 12 - Indices, groupes vulnérables et politiques sociales'
                    }
                  </p>
                </div>
              </div>
              <Button onClick={closeVocabularyResources} variant="ghost" size="sm">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className={`mb-6 p-4 ${
                selectedVocabularyModule === 4 ? 'bg-blue-50 border-blue-200' :
                selectedVocabularyModule === 5 ? 'bg-red-50 border-red-200' : 
                selectedVocabularyModule === 6 ? 'bg-orange-50 border-orange-200' :
                selectedVocabularyModule === 7 ? 'bg-green-50 border-green-200' :
                selectedVocabularyModule === 11 ? 'bg-pink-50 border-pink-200' : 'bg-yellow-50 border-yellow-200'
              } border rounded-lg`}>
                <h3 className={`font-semibold ${
                  selectedVocabularyModule === 4 ? 'text-blue-800' :
                  selectedVocabularyModule === 5 ? 'text-red-800' : 
                  selectedVocabularyModule === 6 ? 'text-orange-800' :
                  selectedVocabularyModule === 7 ? 'text-green-800' :
                  selectedVocabularyModule === 11 ? 'text-pink-800' : 'text-yellow-800'
                } mb-2`}>📚 Contenu spécialisé</h3>
                <p className={`text-sm ${
                  selectedVocabularyModule === 4 ? 'text-blue-700' :
                  selectedVocabularyModule === 5 ? 'text-red-700' : 
                  selectedVocabularyModule === 6 ? 'text-orange-700' :
                  selectedVocabularyModule === 7 ? 'text-green-700' :
                  selectedVocabularyModule === 11 ? 'text-pink-700' : 'text-yellow-700'
                }`}>
                  {selectedVocabularyModule === 4 
                    ? 'Ce vocabulaire de 47 termes couvre 6 thématiques migratoires : conceptos e indicadores, categorías de personas, procesos y trámites, fronteras y rutas, políticas migratorias, et expressions clés. Terminologie officielle OIM/ACNUR.'
                    : selectedVocabularyModule === 5 
                      ? 'Ce vocabulaire technique couvre 6 thématiques essentielles : types de délits, acteurs du narcotrafic, armes et moyens illicites, substances et jargon, forces de sécurité, et expressions idiomatiques clés. Sources : Memrise, WordReference, Quizlet, NIDA, Reverso.'
                      : selectedVocabularyModule === 6
                        ? 'Ce vocabulaire de 42 termes couvre 6 thématiques économiques : macro-économie & indicateurs (PIB, IPC), empresa & empleo (PYME, CDI), finanzas & inversión (Bourse, prima de riesgo), política económica & crisis (austeridad, rescate bancario), corrupción & gobernanza, et expressions clés.'
                        : selectedVocabularyModule === 7
                          ? 'Ce vocabulaire de 35 termes couvre 5 thématiques climatiques : indicadores y ciencia del clima (GEI, huella carbono), fenómenos e impactos (deshielo, biodiversidad), energía y soluciones (renovables, hidrógeno verde), política climática (Acuerdo París, justicia climática), et expressions utiles.'
                          : selectedVocabularyModule === 11
                            ? 'Ce vocabulaire de 34 termes couvre 5 thématiques féministes : concepts fondamentaux (parité, techo de cristal), droits & lois (IVE, ley violencia género), travail & représentation (conciliación laboral), violence & santé, et expressions idiomatiques clés.'
                        : 'Ce vocabulaire de 50 termes couvre 5 thématiques des inégalités : concepts & indicateurs (Gini, AROPE), groupes & situations (sin hogar, economía sumergida), causes & mécanismes, politiques sociales, et expressions clés. Sources : CLACSO, Observatorio de la Pobreza.'
                  }
                </p>
              </div>
              
              <SpanishVocabularyFlashcards 
                language="fr" 
                filterCategories={
                  selectedVocabularyModule === 4 
                    ? [
                        "Conceptos e indicadores",
                        "Categorías de personas y movilidad",
                        "Procesos, trámites y documentos",
                        "Fronteras, rutas y actores",
                        "Políticas migratorias y protección",
                        "Expresiones y collocations clave (Migration)"
                      ]
                    : selectedVocabularyModule === 5 
                      ? [
                          "Tipos de delitos y actos violentos",
                          "Actores del narcotráfico", 
                          "Armas y medios ilícitos",
                          "Sustancias y jerga de las drogas",
                          "Fuerzas de seguridad y reacción estatal",
                          "Expresiones y modismos clave"
                        ]
                      : selectedVocabularyModule === 6
                        ? [
                            "Macro-économie & indicateurs",
                            "Empresa, empleo & mercado",
                            "Finanzas & inversión",
                            "Política económica & crisis",
                            "Corrupción & gobernanza",
                            "Expresiones clave (Économie)"
                          ]
                        : selectedVocabularyModule === 7
                          ? [
                              "Indicadores y ciencia del clima",
                              "Fenómenos e impactos",
                              "Energía, recursos y soluciones",
                              "Política climática y justicia ambiental",
                              "Expresiones útiles (Medio Ambiente)"
                            ]
                          : selectedVocabularyModule === 11
                            ? [
                                "Concepts fondamentaux (Féminisme)",
                                "Droits, lois & cadres juridiques (Féminisme)",
                                "Travail, économie & représentation (Féminisme)",
                                "Violence de genre & santé (Féminisme)",
                                "Expressions idiomatiques & collocations (Féminisme)"
                              ]
                          : [
                            "Concepts & indicadores (Desigualdades)",
                            "Groupes & situations (Desigualdades)",
                            "Causes & mécanismes (Desigualdades)",
                            "Politiques sociales & aide (Desigualdades)",
                            "Expressions & collocations clés (Desigualdades)"
                          ]
                }
              />
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end">
              <Button 
                onClick={closeVocabularyResources} 
                className={`${
                  selectedVocabularyModule === 4 ? 'bg-blue-600 hover:bg-blue-700' :
                  selectedVocabularyModule === 5 ? 'bg-red-600 hover:bg-red-700' : 
                  selectedVocabularyModule === 6 ? 'bg-orange-600 hover:bg-orange-700' :
                  selectedVocabularyModule === 7 ? 'bg-green-600 hover:bg-green-700' :
                  selectedVocabularyModule === 11 ? 'bg-pink-600 hover:bg-pink-700' : 'bg-yellow-600 hover:bg-yellow-700'
                } text-white`}
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationEspagnolCivilisationPage;