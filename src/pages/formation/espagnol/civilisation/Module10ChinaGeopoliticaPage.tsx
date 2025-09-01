import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Calendar, Briefcase, BookOpen, X } from 'lucide-react';

interface RedactedSubject {
  title: string;
  content: string;
}

const Module10ChinaGeopoliticaPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<RedactedSubject | null>(null);

  const chinaSubject: RedactedSubject = {
    title: "China y América Latina hispanohablante: ¿alianza estratégica o dependencia 2.0?",
    content: `Introducción – El intercambio comercial entre China y América Latina hispanohablante alcanzó en 2024 unos 370 000 M US$, casi el doble que en 2014, y veintidós países se adhirieron a la Franja y la Ruta. Podemos preguntarnos si este flujo masivo de capital y proyectos impulsará un desarrollo sostenible o afianzará la histórica dependencia primaria. Primero, analizaré los beneficios económicos y logísticos; luego, evaluaré los riesgos financieros y geopolíticos.

Desarrollo I – Beneficios económicos y logísticos
El megapuerto de Chancay (Perú) recibió 1 300 M US$ de COSCO para reducir en veinte días la travesía entre Asia y América Latina. La terminal incrementará la capacidad de exportación del país y creará 15 000 empleos directos e indirectos en los próximos cinco años. Asimismo, en el triángulo del litio, CATL y YPF planean invertir 1 400 M US$para producir 30 000 t anuales de carbonato de litio en Catamarca desde 2028, asegurando materia prima para baterías. Creo que estas inversiones mejoran la inserción de la región en cadenas globales y fomentan la transferencia tecnológica. México también se beneficia: Chirey inaugurará este año una planta de vehículos eléctricos en Nuevo León con 5 000empleos y apoyo de Huawei para sistemas de conectividad a bordo.

Desarrollo II – Riesgos de dependencia y tensiones
Sin embargo, la dependencia crediticia crece. Entre 2008 y 2023, China otorgó 110 000 M US$ a Argentina, Ecuador y Venezuela a través de préstamos ligados al petróleo y al cobre. Estimo que sería esencial diversificar socios y fuentes de financiamiento: de lo contrario, la vulnerabilidad fiscal aumentará y el servicio de la deuda consumirá más del 10 % del PIB. La estación espacial de Neuquén, gestionada por el Ejército Popular, abre dudas sobre posible uso militar dual y soberanía nacional. Además, Washington impuso aranceles "anti-dumping" a acero mexicano y restrictivos al cobre chileno, lo que obliga a varios países a redefinir sus alianzas comerciales.

Conclusión – La principal lección es la tensión entre ganancias rápidas y autonomía estratégica. Conviene que América Latina negocie cláusulas de contenido local y transparencia financiera. Si los gobiernos lograran reinvertir la renta del litio en I+D y abrir nuevos mercados, la relación con China podría transformarse en alianza equilibrada; de lo contrario, el dragón reemplazará al tío Sam sin cambiar la asimetría histórica ni fortalecer la soberanía regional.`
  };

  const handleShowSubject = (subject: RedactedSubject) => {
    setSelectedSubject(subject);
  };

  const closeSubjectModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
            China y Geopolítica Global
          </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alianza estratégica vs dependencia 2.0 - Análisis de las relaciones sino-latinoamericanas
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">10 thématiques clés</span>
            <span className="px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">Actualisé 2024</span>
            <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">Niveau Prépa</span>
          </div>
        </div>

        {/* Module Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contenido del Módulo</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Dépendance commerciale latino-américaine</h3>
                <p className="text-gray-600">Analyse des échanges commerciaux asymétriques et de la balance commerciale négative chronique</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Dette et investissements chinois</h3>
                <p className="text-gray-600">Prêts conditionnés, infrastructure stratégique et dépendance financière croissante</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Initiatives chinoises en Amérique latine</h3>
                <p className="text-gray-600">Belt and Road Initiative, Nouvelle Route de la Soie et projets d'infrastructure</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Géopolitique et influence chinoise</h3>
                <p className="text-gray-600">Soft power, diplomatie des chèques et rivalité avec les États-Unis</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">5. Impact économique sur l'Amérique latine</h3>
                <p className="text-gray-600">Croissance économique, emplois générés et développement industriel</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Risques et vulnérabilités</h3>
                <p className="text-gray-600">Souveraineté en risque, capture institutionnelle et dépendance stratégique</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">7. Réponses et stratégies latino-américaines</h3>
                <p className="text-gray-600">Diversification commerciale, intégration régionale et autonomie stratégique</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">8. Perspectives d'avenir</h3>
                <p className="text-gray-600">Transition énergétique, économie verte et coopération triangulaire</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                <Link to="/formation/espagnol/civilisation/module10/vocabulaire">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Vocabulaire Géopolitique Chinois
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
    </div>
  );
};

export default Module10ChinaGeopoliticaPage;
