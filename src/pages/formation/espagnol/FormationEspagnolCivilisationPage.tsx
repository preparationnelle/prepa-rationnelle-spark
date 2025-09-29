import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe,
  Calendar,
  Briefcase,
  BookOpen,
  X,
  Home,
  ChevronRight
} from 'lucide-react';

interface RedactedSubject {
  title: string;
  content: string;
}

const FormationEspagnolCivilisationPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<RedactedSubject | null>(null);

  const democracySubject: RedactedSubject = {
    title: "Democracia y populismo en América hispanohablante",
    content: `Introducción – Latinobarómetro 2024 constata un retroceso democrático: solo 52 % de los latinoamericanos respalda este sistema y 33 % aceptaría un gobierno autoritario siempre que "resuelva problemas", ocho puntos más que en 2010. Ese vacío propicia el ascenso de Javier Milei, Nayib Bukele y Nicolás Maduro, líderes cuyo éxito descansa tanto en la narrativa de eficacia como en la erosión de contrapesos. Cabe preguntarse hasta qué punto tales resultados fortalecen o socavan la arquitectura institucional. En primer término examinaré los logros que seducen al electorado; en segundo lugar evidenciaré los costes que amenazan la salud democrática.

Desarrollo I – Desde mi punto de vista, el populismo conquista voluntades cuando ofrece resultados visibles. Bukele revalidó su mandato con 85 % de los votos y, bajo el estado de excepción, la tasa de homicidios descendió a 1,9/100 000en 2024, la más baja del hemisferio. El mensaje es nítido: orden antes que derechos. En Argentina, Milei promulgó la Ley Bases (2025) —emergencia económica y vía libre a privatizaciones—; el "shock de libertad" mantiene su imagen positiva por encima del 55 %. Si los precios se estabilizaran y los servicios mejorasen, muchos concluirían que la audacia se justifica. Conviene que se reconozca que estos líderes canalizan demandas legítimas de seguridad y estabilidad.

Desarrollo II – No obstante, el precio institucional resulta elevado. El Salvador suma más de 87 000 detenidos y la CIDH denuncia arbitrariedades. En Buenos Aires, Milei concentra poderes delegados y recorta 90 % del presupuesto científico; temo que la investigación pública dependa pronto de filantropía. Venezuela encarna el desenlace extremo: Maduro "ganó" en 2024 con 51,2 %, sin observar actas; Freedom House 2025 los ubica como "parcialmente libres" o "no libres". Aunque parezca tentador aplaudir la eficiencia inmediata, es posible que, de perpetuarse, el remedio devenga veneno.

Conclusión – Lo que más revela este balance es la tensión entre logros rápidos y contrapesos frágiles; conviene que se refuercen legislativos y tribunales, pues si cada país consiguiera equilibrar eficacia y control institucional, demostraría que la democracia puede resolver problemas sin traicionarse. De lo contrario, la promesa populista acabará socavando los cimientos que pretendía salvar.`
  };

  const migrationSubject: RedactedSubject = {
    title: "Migración y control fronterizo",
    content: `Introducción
En 2024, la ruta atlántica hacia Canarias registró 46 843 llegadas —un aumento del 17 % respecto al año anterior— y más de 10 450 muertes, consolidándose como la frontera más mortífera de Europa. Podemos preguntarnos si un país con estas características geográficas puede gestionar eficazmente la presión migratoria sin sacrificar vidas ni soberanía. Primero, analizaré la desproporción de la carga insular. Luego, propondré vías de regularización eficiente y corresponsable.

Desarrollo I – Desproporción de la carga insular
Los centros de acogida de Canarias albergan a más de 4 000 menores, cifra que colapsa sus recursos y revela que la solidaridad intra-UE sigue siendo voluntaria. Salvamento Marítimo rescata cayucos tras trece días a la deriva, mientras la Comisión Europea no activa un reparto obligatorio de responsabilidades. Cabe matizar que, aunque la externalización de fronteras parezca solución, el Atlántico —verdadera fosa común— exige más que control remoto y muros inteligentes.

Desarrollo II – Hacia una regularización eficaz y corresponsable
El Gobierno ha lanzado un reglamento de arraigo que concederá 300 000 permisos anuales entre 2025 y 2027, cubriendo vacantes agrícolas y reduciendo la economía sumergida. Sin embargo, temo que, si no se refuerzan los consulados, este esquema sobrecargue la gestión diplomática. Considero que sería pertinente financiar corredores humanitarios y establecer cuotas vinculantes. Si España lograse redirigir fondos FEDER a las islas fronterizas, las mafias perderían influencia y la acogida ganaría profesionalidad. Creo firmemente que la integración laboral solo funciona con formación adecuada y arraigo social.

Conclusión
La gestión de la crisis demuestra que la respuesta aislada no basta; es necesario un enfoque colectivo. Conviene implementar un sistema de reparto solidario de rescate y cuotas operativas. Creo firmemente que solo mediante la combinación de salvamento marítimo, regularización ordenada y respaldo europeo conjunto, España podrá convertir su liderazgo en un ejemplo real de solidaridad, evitando así que sus esfuerzos queden diluidos en meras declaraciones.`
  };

  const iaSubject: RedactedSubject = {
    title: "Inteligencia artificial y transformación digital",
    content: `Introducción
Las herramientas generativas han pasado, en apenas tres años, de curiosidad académica a motor económico. España ha destinado 600 M € a su Plan Nacional de IA, México supera el 70 % de adopción empresarial de ChatGPT, y Chile prepara Latam‑GPT, primer modelo abierto entrenado con corpus latinoamericanos. Considero que la gran incógnita es si esta ola logrará reducir la brecha digital o acabará profundizándola. ¿Puede el ecosistema hispanohablante convertir la IA en palanca inclusiva sin ceder su soberanía tecnológica?

Desarrollo I: Avances normativos y de innovación
En primer término, el entusiasmo es innegable. Madrid impulsa un sandbox ético y armoniza su ley con el AI Act, estableciendo directrices de transparencia y responsabilidad. Pienso que sería pertinente impulsar un corpus panhispánico para que los asistentes reconozcan acentos rioplatenses y giros caribeños, reduciendo así la dependencia anglosajona. En Ciudad de México, el programa «IA para el español» financia chatbots médicos que ya atienden a tres millones de usuarios. Santiago presentará en 2025 Latam‑GPT, entrenado con energía solar del desierto de Atacama y 200 000 libros de dominio público; aunque muchos dudaran de que compitiera con gigantes privados, su mera existencia demuestra que la región puede generar modelos propios.

Desarrollo II: Desafíos de infraestructura y equidad
Ahora bien, la CEPAL advierte que solo el 38 % de los hogares rurales andinos dispone de banda ancha y que cuatro de cada diez internautas no identifican un deepfake. Me parece imprescindible que los gobiernos garanticen conectividady alfabetización crítica; de lo contrario, la IA reproducirá o incluso acrecentará viejas desigualdades. Además, la explotación de datos sensibles exige vigilancia estricta: si no se protegieran la privacidad y los derechos de autor, el entusiasmo se tornaría recelo y la normativa quedaría en papel mojado. Creo firmemente que la formación docente determinará que la IA sirva para personalizar la enseñanza y no para perpetuar sesgos algorítmicos.

Conclusión
En definitiva, lo que más revela este panorama es la distancia entre innovación y acceso real. Sin embargo, conviene que se comparta la inversión en infraestructuras y se coordinen políticas educativas. Desde mi punto de vista, si España, México y Chile consiguieran alinear normativa, adopción y conectividad, la IA serviría de brújula de desarrollo inclusivo para todo el mundo hispano.`
  };

  const chinaSubject: RedactedSubject = {
    title: "China y América Latina hispanohablante: ¿alianza estratégica o dependencia 2.0?",
    content: `Introducción – El intercambio comercial entre China y América Latina hispanohablante alcanzó en 2024 unos 370 000 M US$, casi el doble que en 2014, y veintidós países se adhirieron a la Franja y la Ruta. Podemos preguntarnos si este flujo masivo de capital y proyectos impulsará un desarrollo sostenible o afianzará la histórica dependencia primaria. Primero, analizaré los beneficios económicos y logísticos; luego, evaluaré los riesgos financieros y geopolíticos.

Desarrollo I – Beneficios económicos y logísticos
El megapuerto de Chancay (Perú) recibió 1 300 M US$ de COSCO para reducir en veinte días la travesía entre Asia y América Latina. La terminal incrementará la capacidad de exportación del país y creará 15 000 empleos directos e indirectos en los próximos cinco años. Asimismo, en el triángulo del litio, CATL y YPF planean invertir 1 400 M US$para producir 30 000 t anuales de carbonato de litio en Catamarca desde 2028, asegurando materia prima para baterías. Creo que estas inversiones mejoran la inserción de la región en cadenas globales y fomentan la transferencia tecnológica. México también se beneficia: Chirey inaugurará este año una planta de vehículos eléctricos en Nuevo León con 5 000empleos y apoyo de Huawei para sistemas de conectividad a bordo.

Desarrollo II – Riesgos de dependencia y tensiones
Sin embargo, la dependencia crediticia crece. Entre 2008 y 2023, China otorgó 110 000 M US$ a Argentina, Ecuador y Venezuela a través de préstamos ligados al petróleo y al cobre. Estimo que sería esencial diversificar socios y fuentes de financiamiento: de lo contrario, la vulnerabilidad fiscal aumentará y el servicio de la deuda consumirá más del 10 % del PIB. La estación espacial de Neuquén, gestionada por el Ejército Popular, abre dudas sobre posible uso militar dual y soberanía nacional. Además, Washington impuso aranceles "anti-dumping" a acero mexicano y restrictivos al cobre chileno, lo que obliga a varios países a redefinir sus alianzas comerciales.

Conclusión – La principal lección es la tensión entre ganancias rápidas y autonomía estratégica. Conviene que América Latina negocie cláusulas de contenido local y transparencia financiera. Si los gobiernos lograran reinvertir la renta del litio en I+D y abrir nuevos mercados, la relación con China podría transformarse en alianza equilibrada; de lo contrario, el dragón reemplazará al tío Sam sin cambiar la asimetría histórica ni fortalecer la soberanía regional.`
  };

  const energiaSubject: RedactedSubject = {
    title: "Transición energética española: ¿vitrina o espejismo verde?",
    content: `Introducción
El PNIEC 2024 fija un 81 % de renovables en 2030 y la Estrategia 2050 prevé un 97 % de generación limpia en España. Estas metas, únicas en la UE, plantean un desafío: ¿podrá un país mediterráneo, expuesto a sequías, liderar esta transición sin descuidar su tejido social? Primero analizaré los avances clave; luego evaluaré los obstáculos hídricos y sociales.

Desarrollo I – Avances y liderazgo
El Gobierno ha autorizado 28 GW de nueva capacidad: 239 plantas fotovoltaicas y 43 parques eólicos. Ha arrancado el corredor de hidrógeno verde de Aboño con 1 GW de electrólisis y se prevén 3 GW de eólica marina flotante esta década. Creo que estos proyectos sitúan a España a la cabeza de REPowerEU. Además, países como Brasil y Chile ya solicitan asesoría española para sus propias licitaciones de energía, lo que refuerza la proyección internacional.

Desarrollo II – Sequía y cohesión social
La sequía crónica afecta al 60 % del territorio agrario. Sin almacenamiento en baterías ni bombeo adecuado, los excedentes solares podrían verterse 3 TWh en 2027, malgastando producción limpia. A ello se suma el rechazo local a la eólica marina cuando no se comparten royalties con los pescadores. Estimo que sería pertinente reforzar redes eléctricas y sistemas de almacenamiento, garantizando además precios estables y formación técnica en el mundo rural. Si las administraciones articularan estas medidas, la transición ganaría legitimidad y evitaría marginar a las zonas más vulnerables.

Conclusión
La gran lección es la tensión entre ambición climática y recursos hídricos escasos. Conviene armonizar la expansión de renovables con políticas de gestión del agua y refuerzo de la cohesión social. Si España lograra integrar tecnología avanzada, regulación clara y participación ciudadana, su transición energética brillaría como modelo en Iberoamérica; de lo contrario, su liderazgo no pasará de un espejismo técnico.`
  };

  const narcoSubject: RedactedSubject = {
    title: "Narcotráfico 4.0 en el mundo hispanohablante",
    content: `Introducción – En noviembre 2024 la Armada colombiana interceptó un semisumergible no tripulado con Starlink y cinco toneladas de cocaína rumbo a Australia. Semanas después, la Operación Orión XIV —46 países— incautó 225 tde cocaína y 128 t de marihuana en alta mar. El delito abraza el hardware inteligente mientras crece la cooperación naval para cortar las rutas del narcotráfico. Cabe preguntarse hasta qué punto la región podrá frenar un negocio que fusiona ingeniería naval y redes sociales. Primero mostraré la innovación criminal. Después analizaré los límites de la respuesta estatal.

Desarrollo I – Innovación criminal – Los narcos invierten en I+D. El nuevo "narco‑sub" reduciría costes y burlaría radares. En tierra, el CJNG capta a menores en TikTok con emojis "narco‑glam". El Clan del Golfo difunde tutoriales de drones en Telegram. EE. UU. declaró terroristas a cinco jefes del CJNG y restringió la venta de drones al Caribe. Desde mi punto de vista, esta convergencia obliga a tratar la seguridad marítima como ciberseguridad flotante.

Desarrollo II – Puertos vigilados para frenar el tráfico – Para una lucha efectiva, los puertos deben estar vigilados y seguros, pues en ellos circula la mayor parte de la droga. En marzo 2025, una disputa en Guayaquil provocó 22 muertos, lo que expone la fragilidad de la vigilancia portuaria. Un mes después, Manzanillo decomisó 5,6 t de cocaína ocultas en aguacates, confirmando que los esfuerzos aislados no bastan. Considero que sería necesario reforzar escáneres 24/7 y desplegar drones costeros que patrullen las terminales. Si Colombia, México y Ecuador coordinaran estos recursos, la ruta del Pacífico perdería atractivo y el coste operativo del narco comenzaría a elevarse.

Conclusión – En definitiva, la creciente brecha entre la invención criminal y la respuesta institucional revela la urgencia de consolidar una estrategia común. Conviene que se integren satélites, puertos vigilados y fiscalías financieras en un sistema coordinado capaz de rastrear la cocaína en tiempo real. Si la región lograra blindar el Pacífico con tecnología avanzada y desarrollo local, el narcotráfico vería erosionada su principal ruta, transformando los desafíos de hoy en un precedente de éxito para defender la ley.`
  };

  const womenSubject: RedactedSubject = {
    title: "Derechos de las mujeres y movimientos sociales",
    content: `Introducción
En 2024, España obtuvo 76,7 puntos en el Gender Equality Index (4.º de la UE), mientras Argentina suprimió el Ministerio de las Mujeres tras el decreto de Javier Milei. Podemos preguntarnos si los derechos de las mujeres siguen siendo conquistas reversibles. Primero, examinaré la respuesta de la sociedad civil; luego, analizaré el papel del Estado y sus garantías.

Desarrollo I – Resistencia ciudadana
La experiencia argentina ilustra el poder de la movilización. Tras cerrar el Ministerio de las Mujeres, se despidió al 55 %del personal y se recortó presupuesto pese a 252 femicidios en 2023. El 3 de junio, 150 000 personas marcharon bajo Ni Una Menos frente al Congreso. El himno "Un violador en tu camino", creado por Las Tesis en Chile, resonó en más de 400 ciudades, demostrando que la creatividad y la solidaridad pueden sostener la agenda de género cuando el Estado retrocede.

Desarrollo II – Liderazgo normativo y respaldo ciudadano
En España, la Ley Orgánica 10/2022 ("solo sí es sí") unificó delitos de violencia sexual y estableció planes de reeducación para agresores. El 8-M 2025 congregó a 650 000 manifestantes, pese a la lluvia, bajo el lema "Feministas antirracistas". Sin embargo, comunidades gobernadas por PP-Vox intentaron derogar normas igualitarias, lo que obligó al Ejecutivo a recurrir ante el Tribunal Constitucional. Considero que sería imprescindible garantizar financiación estable a políticas de igualdad y agilizar los procesos judiciales para proteger los avances.

Conclusión
Los casos de Argentina y España evidencian que la igualdad progresa cuando convergen sociedad y normativa. Estimo que reforzar ambos pilares de modo simultáneo —movilización creativa y liderazgo legislativo— es crucial. Si se blindaran los derechos con recursos sólidos y respuesta judicial rápida, las conquistas feministas dejarían de ser vulnerables y se instaurarían como logros permanentes.`
  };

  const memorySubject: RedactedSubject = {
    title: "Memoria histórica y reconciliación democrática",
    content: `Introducción
La Ley 20/2022 de Memoria Democrática, vigente desde octubre de 2022, permite a los descendientes de exilio republicano solicitar la nacionalidad española. Hasta abril de 2025, los consulados tramitaron 678 000 expedientes y el plazo se ha extendido hasta el 22 de octubre de 2025. Con el 50.º aniversario de la muerte de Franco en noviembre de 2025, podemos preguntarnos si España aprovechará este momento simbólico para cerrar heridas. Primero, repasaré las medidas de reparación. Luego, señalaré las tensiones que amenazan su eficacia.

Desarrollo I – Medidas de reparación y educación cívica
España exhumó restos de José Antonio Primo de Rivera en abril de 2023, concluyendo una etapa iniciada en 2019 con la salida de Franco de Cuelgamuros. El Valle de los Caídos fue rebautizado Valle de Cuelgamuros y resignificado como espacio de memoria. Además, en 2024 se creó un banco estatal de ADN para identificar víctimas de fosas comunes. La LOMLOE integró la memoria democrática en Educación para la Ciudadanía, garantizando que las nuevas generaciones conozcan la dictadura y la Transición. Estimo que, si estas acciones se consolidan, surgiría una cultura cívica que vaya más allá de la mera compensación administrativa.

Desarrollo II – Resistencias y desafíos
Sin embargo, surgen obstáculos. Gobiernos autonómicos del PP y Vox intentaron derogar normas de memoria; el Ejecutivo recurrió al Tribunal Constitucional para impedirlo. El aluvión de solicitudes de nacionalidad, sobre todo en Argentina y Cuba, desborda consulados y genera demoras críticas. El censo oficial de 114 226 desaparecidos sigue incompleto y solo el 23 % de fosas ha sido intervenido. Considero que sería necesario garantizar financiación estable y personal técnico en ayuntamientos y diputaciones. Si el Estado asegurara estos recursos, la promesa de verdad y justicia no quedaría a medio camino.

Conclusión
La conmemoración del 50.º aniversario ofrece una oportunidad única. Conviene armonizar recursos técnicos, respaldo jurídico y participación ciudadana. Creo firmemente que solo si la memoria se aplica de forma homogénea y se valora como vínculo social, España logrará transformar el recuerdo en reconciliación duradera; de lo contrario, esta efeméride pasará como un gesto vacío de consecuencias reales.`
  };

  const handleShowSubject = (subject: RedactedSubject) => {
    setSelectedSubject(subject);
  };

  const closeSubjectModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Civilisation Hispanique</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
            Civilisation Hispanique
          </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les enjeux contemporains d'Espagne et d'Amérique latine pour exceller aux concours ECG
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">10 thématiques essentielles</span>
            <span className="px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">Actualisé 2025</span>
            <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">Niveau Prépa</span>
          </div>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tous les Chapitres</h2>
            <p className="text-gray-600">Découvrez notre programme complet de civilisation hispanique</p>
            </div>

              <div className="space-y-4">
            {/* Module 1 - Política y Regímenes */}
            <Link to="/formation/espagnol/civilisation/module1" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Política y Regímenes</h3>
                    <p className="text-gray-600 mb-4">Crises démocratiques, extrême droite/gauche, évolution politique</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module1/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={() => handleShowSubject(democracySubject)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 2 - Mujeres y Violencia de Género */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">2</span>
                </div>
                      <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mujeres y Violencia de Género</h3>
                  <p className="text-gray-600 mb-4">Féminisme et égalité</p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <Link to="/formation/espagnol/civilisation/module2/vocabulaire">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Vocabulaire
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                      onClick={() => handleShowSubject(womenSubject)}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Sujets rédigés
                    </Button>
                      </div>
                    </div>
                        </div>
                      </div>

            {/* Module 3 - Educación y Desigualdades */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Educación y Desigualdades</h3>
                  <p className="text-gray-600 mb-4">Système éducatif et inégalités</p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <Link to="/formation/espagnol/civilisation/module3/vocabulaire">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Vocabulaire
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-300 text-gray-400 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Sujets rédigés
                    </Button>
                        </div>
                        </div>
                      </div>
                    </div>

                        {/* Module 4 - Migraciones y Desplazamientos */}
            <Link to="/formation/espagnol/civilisation/module4" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Migraciones y Desplazamientos</h3>
                    <p className="text-gray-600 mb-4">Flux migratoires, caravanes, politique américaine, transit</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module4/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={() => handleShowSubject(migrationSubject)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 5 - Violencia y Narcotráfico */}
            <Link to="/formation/espagnol/civilisation/module5" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Violencia y Narcotráfico</h3>
                    <p className="text-gray-600 mb-4">Violence chronique, cartels, sécurité, maintien de l'ordre</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module5/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={() => handleShowSubject(narcoSubject)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 6 - Pobreza y Dependencia Económica */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pobreza y Dependencia Económica</h3>
                  <p className="text-gray-600 mb-4">Pauvreté et travail des enfants</p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <Link to="/formation/espagnol/civilisation/module6/vocabulaire">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Vocabulaire
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-300 text-gray-400 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Sujets rédigés
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Module 7 - Medio Ambiente y Clima */}
            <Link to="/formation/espagnol/civilisation/module7" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Medio Ambiente y Clima</h3>
                    <p className="text-gray-600 mb-4">COP 16, Gustavo Petro, fast-fashion, peuples autochtones</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module7/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 8 - Historia y Memoria */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">8</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Historia y Memoria</h3>
                  <p className="text-gray-600 mb-4">Histoire et mémoire collective</p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <Link to="/formation/espagnol/civilisation/module8/vocabulaire">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Vocabulaire
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                      onClick={() => handleShowSubject(memorySubject)}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Sujets rédigés
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 10 - China y Geopolítica Global */}
            <Link to="/formation/espagnol/civilisation/module10" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">10</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">China y Geopolítica Global</h3>
                    <p className="text-gray-600 mb-4">Alianza estratégica vs dependencia 2.0</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module10/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={() => handleShowSubject(chinaSubject)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 9 - Inteligencia Artificial y Transformación Digital */}
            <Link to="/formation/espagnol/civilisation/module9" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                    <span className="font-bold text-orange-600 text-lg">9</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inteligencia Artificial y Transformación Digital</h3>
                    <p className="text-gray-600 mb-4">Soberanía tecnológica e inclusión digital</p>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module9/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                        onClick={() => handleShowSubject(iaSubject)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Module 11 - Transición Energética Española */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">11</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transición Energética Española</h3>
                  <p className="text-gray-600 mb-4">Vitrina o espejismo verde</p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <Link to="/formation/espagnol/civilisation/module11/vocabulaire">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Vocabulaire
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                      onClick={() => handleShowSubject(energiaSubject)}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Sujets rédigés
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 12 - Desigualdades y Pobreza */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">12</span>
                </div>
                  <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Desigualdades y Pobreza</h3>
                  <p className="text-gray-600 mb-4">Inégalités et pauvreté en Ibéroamérique</p>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-gray-300 text-gray-500 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                        <Calendar className="mr-2 h-4 w-4" />
                        Bientôt disponible
                      </Button>
                      <Link to="/formation/espagnol/civilisation/module12/vocabulaire">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Vocabulaire
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gray-300 text-gray-400 cursor-not-allowed px-4 py-2 rounded-md" disabled>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sujets rédigés
                      </Button>
            </div>
          </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Modal pour afficher le sujet rédigé */}
      {selectedSubject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200 transition-colors">
                  <BookOpen className="h-5 w-5 text-orange-600" />
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
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed font-medium">
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
    </div>
  );
};

export default FormationEspagnolCivilisationPage;