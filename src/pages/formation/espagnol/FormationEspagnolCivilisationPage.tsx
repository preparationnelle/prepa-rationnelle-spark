import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, X, Home, ChevronRight, ArrowRight, Briefcase, FileText } from 'lucide-react';

interface RedactedSubject {
  title: string;
  content: string;
}

type Module = {
  number: number;
  title: string;
  description: string;
  moduleTo?: string;
  vocabularyTo: string;
  redactedSubject?: RedactedSubject;
};

const democracySubject: RedactedSubject = {
  title: 'Democracia y populismo en América hispanohablante',
  content: `Introducción – Latinobarómetro 2024 constata un retroceso democrático: solo 52 % de los latinoamericanos respalda este sistema y 33 % aceptaría un gobierno autoritario siempre que "resuelva problemas", ocho puntos más que en 2010.

Desarrollo I – Desde mi punto de vista, el populismo conquista voluntades cuando ofrece resultados visibles. Bukele revalidó su mandato con 85 % de los votos.

Desarrollo II – No obstante, el precio institucional resulta elevado. El Salvador suma más de 87 000 detenidos y la CIDH denuncia arbitrariedades.

Conclusión – Lo que más revela este balance es la tensión entre logros rápidos y contrapesos frágiles; conviene que se refuercen legislativos y tribunales.`,
};

const womenSubject: RedactedSubject = {
  title: 'Derechos de las mujeres y movimientos sociales',
  content: `Introducción
En 2024, España obtuvo 76,7 puntos en el Gender Equality Index (4.º de la UE), mientras Argentina suprimió el Ministerio de las Mujeres tras el decreto de Javier Milei.

Desarrollo I – Resistencia ciudadana
La experiencia argentina ilustra el poder de la movilización. Tras cerrar el Ministerio de las Mujeres, se despidió al 55 % del personal.

Desarrollo II – Liderazgo normativo y respaldo ciudadano
En España, la Ley Orgánica 10/2022 ("solo sí es sí") unificó delitos de violencia sexual y estableció planes de reeducación para agresores.

Conclusión
Los casos de Argentina y España evidencian que la igualdad progresa cuando convergen sociedad y normativa.`,
};

const migrationSubject: RedactedSubject = {
  title: 'Migración y control fronterizo',
  content: `Introducción
En 2024, la ruta atlántica hacia Canarias registró 46 843 llegadas —un aumento del 17 %— y más de 10 450 muertes, consolidándose como la frontera más mortífera de Europa.

Desarrollo I – Desproporción de la carga insular
Los centros de acogida de Canarias albergan a más de 4 000 menores, cifra que colapsa sus recursos.

Desarrollo II – Hacia una regularización eficaz y corresponsable
El Gobierno ha lanzado un reglamento de arraigo que concederá 300 000 permisos anuales entre 2025 y 2027.

Conclusión
La gestión de la crisis demuestra que la respuesta aislada no basta; es necesario un enfoque colectivo.`,
};

const narcoSubject: RedactedSubject = {
  title: 'Narcotráfico 4.0 en el mundo hispanohablante',
  content: `Introducción – En noviembre 2024 la Armada colombiana interceptó un semisumergible no tripulado con Starlink y cinco toneladas de cocaína rumbo a Australia.

Desarrollo I – Innovación criminal – Los narcos invierten en I+D. El nuevo "narco-sub" reduciría costes y burlaría radares.

Desarrollo II – Puertos vigilados para frenar el tráfico – Para una lucha efectiva, los puertos deben estar vigilados y seguros.

Conclusión – En definitiva, la creciente brecha entre la invención criminal y la respuesta institucional revela la urgencia de consolidar una estrategia común.`,
};

const memorySubject: RedactedSubject = {
  title: 'Memoria histórica y reconciliación democrática',
  content: `Introducción
La Ley 20/2022 de Memoria Democrática, vigente desde octubre de 2022, permite a los descendientes de exilio republicano solicitar la nacionalidad española.

Desarrollo I – Medidas de reparación y educación cívica
España exhumó restos de José Antonio Primo de Rivera en abril de 2023, concluyendo una etapa iniciada en 2019 con la salida de Franco de Cuelgamuros.

Desarrollo II – Resistencias y desafíos
Sin embargo, surgen obstáculos. Gobiernos autonómicos del PP y Vox intentaron derogar normas de memoria.

Conclusión
La conmemoración del 50.º aniversario ofrece una oportunidad única.`,
};

const chinaSubject: RedactedSubject = {
  title: 'China y América Latina hispanohablante: ¿alianza estratégica o dependencia 2.0?',
  content: `Introducción – El intercambio comercial entre China y América Latina hispanohablante alcanzó en 2024 unos 370 000 M US$.

Desarrollo I – Beneficios económicos y logísticos
El megapuerto de Chancay (Perú) recibió 1 300 M US$ de COSCO.

Desarrollo II – Riesgos de dependencia y tensiones
Sin embargo, la dependencia crediticia crece. Entre 2008 y 2023, China otorgó 110 000 M US$ a Argentina, Ecuador y Venezuela.

Conclusión – La principal lección es la tensión entre ganancias rápidas y autonomía estratégica.`,
};

const iaSubject: RedactedSubject = {
  title: 'Inteligencia artificial y transformación digital',
  content: `Introducción
Las herramientas generativas han pasado, en apenas tres años, de curiosidad académica a motor económico.

Desarrollo I: Avances normativos y de innovación
Madrid impulsa un sandbox ético y armoniza su ley con el AI Act.

Desarrollo II: Desafíos de infraestructura y equidad
La CEPAL advierte que solo el 38 % de los hogares rurales andinos dispone de banda ancha.

Conclusión
Conviene que se comparta la inversión en infraestructuras y se coordinen políticas educativas.`,
};

const energiaSubject: RedactedSubject = {
  title: 'Transición energética española: ¿vitrina o espejismo verde?',
  content: `Introducción
El PNIEC 2024 fija un 81 % de renovables en 2030 y la Estrategia 2050 prevé un 97 % de generación limpia en España.

Desarrollo I – Avances y liderazgo
El Gobierno ha autorizado 28 GW de nueva capacidad.

Desarrollo II – Sequía y cohesión social
La sequía crónica afecta al 60 % del territorio agrario.

Conclusión
La gran lección es la tensión entre ambición climática y recursos hídricos escasos.`,
};

const modules: Module[] = [
  { number: 1, title: 'Política y Regímenes', description: 'Crises démocratiques, extrême droite/gauche, évolution politique', moduleTo: '/formation/espagnol/civilisation/module1', vocabularyTo: '/formation/espagnol/civilisation/module1/vocabulaire', redactedSubject: democracySubject },
  { number: 2, title: 'Mujeres y Violencia de Género', description: 'Féminisme et égalité', moduleTo: '/formation/espagnol/civilisation/module2', vocabularyTo: '/formation/espagnol/civilisation/module2/vocabulaire', redactedSubject: womenSubject },
  { number: 3, title: 'Educación y Desigualdades', description: 'Système éducatif et inégalités', vocabularyTo: '/formation/espagnol/civilisation/module3/vocabulaire' },
  { number: 4, title: 'Migraciones y Desplazamientos', description: 'Flux migratoires, caravanes, politique américaine, transit', moduleTo: '/formation/espagnol/civilisation/module4', vocabularyTo: '/formation/espagnol/civilisation/module4/vocabulaire', redactedSubject: migrationSubject },
  { number: 5, title: 'Violencia y Narcotráfico', description: "Violence chronique, cartels, sécurité, maintien de l'ordre", moduleTo: '/formation/espagnol/civilisation/module5', vocabularyTo: '/formation/espagnol/civilisation/module5/vocabulaire', redactedSubject: narcoSubject },
  { number: 6, title: 'Pobreza y Dependencia Económica', description: 'Pauvreté et travail des enfants', vocabularyTo: '/formation/espagnol/civilisation/module6/vocabulaire' },
  { number: 7, title: 'Medio Ambiente y Clima', description: 'COP 16, Gustavo Petro, fast-fashion, peuples autochtones', moduleTo: '/formation/espagnol/civilisation/module7', vocabularyTo: '/formation/espagnol/civilisation/module7/vocabulaire' },
  { number: 8, title: 'Historia y Memoria', description: 'Histoire et mémoire collective', vocabularyTo: '/formation/espagnol/civilisation/module8/vocabulaire', redactedSubject: memorySubject },
  { number: 9, title: 'Inteligencia Artificial y Transformación Digital', description: 'Soberanía tecnológica e inclusión digital', moduleTo: '/formation/espagnol/civilisation/module9', vocabularyTo: '/formation/espagnol/civilisation/module9/vocabulaire', redactedSubject: iaSubject },
  { number: 10, title: 'China y Geopolítica Global', description: 'Alianza estratégica vs dependencia 2.0', moduleTo: '/formation/espagnol/civilisation/module10', vocabularyTo: '/formation/espagnol/civilisation/module10/vocabulaire', redactedSubject: chinaSubject },
  { number: 11, title: 'Transición Energética Española', description: 'Vitrina o espejismo verde', vocabularyTo: '/formation/espagnol/civilisation/module11/vocabulaire', redactedSubject: energiaSubject },
  { number: 12, title: 'Desigualdades y Pobreza', description: 'Inégalités et pauvreté en Ibéroamérique', vocabularyTo: '/formation/espagnol/civilisation/module12/vocabulaire' },
];

const FormationEspagnolCivilisationPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<RedactedSubject | null>(null);

  return (
    <div className="carnet-paper min-h-screen">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Civilisation</span>
          </div>
        </div>
      </nav>

      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-[820px]">
            <div className="carnet-eyebrow mb-6">Espagnol · Module 03</div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Civilisation <em className="font-lora italic text-carnet-red">hispanique</em>.
            </h1>
            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-6">
              Maîtrisez les enjeux contemporains d'Espagne et d'Amérique latine pour exceller aux concours ECG.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">10 thématiques</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Actualisé 2025</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <span className="carnet-eyebrow text-[11px]">Niveau Prépa</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4">
            {modules.map((m, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                  className={tilt}
                >
                  <div className="carnet-card group p-6 sm:p-7 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                    <div className="flex items-start gap-5">
                      <span className="carnet-hand text-[42px] text-carnet-red leading-none font-semibold flex-shrink-0">
                        {String(m.number).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-lora text-[22px] sm:text-[24px] leading-[1.2] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
                          {m.title}
                        </h3>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mb-3" />
                        <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.6] mb-4">
                          {m.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {m.moduleTo ? (
                            <Link to={m.moduleTo}>
                              <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-10 px-5 text-[13px] border-0 transition-colors">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Accéder au module
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </Link>
                          ) : (
                            <Button variant="outline" className="bg-carnet-paper-2 border-dashed border-[rgba(78,55,30,0.18)] text-carnet-ink-mute font-instrument font-semibold rounded-full h-10 px-5 text-[13px] cursor-not-allowed opacity-70" disabled>
                              Bientôt disponible
                            </Button>
                          )}
                          <Link to={m.vocabularyTo}>
                            <Button variant="outline" className="bg-carnet-paper-2 border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:border-carnet-red hover:text-carnet-red font-instrument font-semibold rounded-full h-10 px-5 text-[13px]">
                              <Briefcase className="mr-2 h-4 w-4" />
                              Vocabulaire
                            </Button>
                          </Link>
                          {m.redactedSubject ? (
                            <Button
                              variant="outline"
                              className="bg-carnet-paper-2 border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:border-carnet-red hover:text-carnet-red font-instrument font-semibold rounded-full h-10 px-5 text-[13px]"
                              onClick={() => setSelectedSubject(m.redactedSubject!)}
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              Sujets rédigés
                            </Button>
                          ) : (
                            <Button variant="outline" className="bg-carnet-paper-2 border-dashed border-[rgba(78,55,30,0.18)] text-carnet-ink-mute font-instrument font-semibold rounded-full h-10 px-5 text-[13px] cursor-not-allowed opacity-70" disabled>
                              <FileText className="mr-2 h-4 w-4" />
                              Sujets rédigés
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedSubject && (
        <div className="fixed inset-0 bg-carnet-ink/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="carnet-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-carnet-paper-2 border-b border-dashed border-[rgba(78,55,30,0.18)] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-carnet-red" />
                </div>
                <div>
                  <h2 className="font-lora text-[20px] text-carnet-ink leading-tight">{selectedSubject.title}</h2>
                  <p className="font-instrument text-[13px] text-carnet-ink-mute mt-0.5">Sujet rédigé · Formation Espagnol</p>
                </div>
              </div>
              <Button onClick={() => setSelectedSubject(null)} variant="ghost" size="sm" className="text-carnet-ink-mute hover:text-carnet-red">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.75] whitespace-pre-wrap">
                {selectedSubject.content}
              </div>
            </div>

            <div className="sticky bottom-0 bg-carnet-paper-plain border-t border-dashed border-[rgba(78,55,30,0.18)] p-4 flex justify-end">
              <Button
                onClick={() => setSelectedSubject(null)}
                className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-10 px-6 text-[13px] border-0 transition-colors"
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
