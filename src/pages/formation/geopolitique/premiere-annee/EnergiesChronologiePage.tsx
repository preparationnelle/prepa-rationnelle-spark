import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const EnergiesChronologiePage = () => {
  const events = [
    { year: "1859", event: "Première découverte de pétrole aux États-Unis à Titusville (Pennsylvanie) par Edwin Drake - début de l'ère pétrolière" },
    { year: "1860", event: "Création de la première raffinerie moderne aux États-Unis par Samuel Kier" },
    { year: "1870", event: "Découverte du premier gisement de pétrole au Moyen-Orient (Masjed Soleyman en Perse)" },
    { year: "1885", event: "Découverte du premier gisement important en Russie (Bakou)" },
    { year: "1892", event: "Première raffinerie en Russie par les frères Nobel" },
    { year: "1901", event: "Découverte du Spindletop aux États-Unis - plus grand gisement de l'époque" },
    { year: "1908", event: "Découverte du pétrole en Perse par William Knox D'Arcy" },
    { year: "1912", event: "Création de la Turkish Petroleum Company (future Iraq Petroleum Company)" },
    { year: "1927", event: "Découverte du pétrole au Venezuela (lac Maracaibo)" },
    { year: "1930", event: "Première crise pétrolière mondiale - surproduction et effondrement des prix" },
    { year: "1932", event: "Création de l'ARAMCO en Arabie Saoudite" },
    { year: "1938", event: "Découverte du pétrole à Hassi Messaoud en Algérie" },
    { year: "1948", event: "Création de l'OPEP (Organisation des Pays Exportateurs de Pétrole)" },
    { year: "1950", event: "Premier choc pétrolier indirect - crise de Suez affecte les approvisionnements" },
    { year: "1956", event: "Crise du canal de Suez - perturbation majeure des flux pétroliers" },
    { year: "1959", event: "Découverte du pétrole en Algérie (Hassi R'Mel)" },
    { year: "1960", event: "Nationalisation du pétrole en Irak par Abdel Karim Kassem" },
    { year: "1967", event: "Guerre des Six Jours - embargo pétrolier arabe contre les pays soutenant Israël" },
    { year: "1970", event: "Création de l'OAPEC (Organisation Arabe des Pays Exportateurs de Pétrole)" },
    { year: "1971", event: "Nationalisation des compagnies pétrolières en Libye par Kadhafi" },
    { year: "1973", event: "Premier choc pétrolier - embargo arabe après la guerre du Kippour, prix multiplié par 4" },
    { year: "1973", event: "Création de l'Agence Internationale de l'Énergie (AIE) par les pays occidentaux" },
    { year: "1975", event: "Accords de Lomé - coopération énergétique Europe-Afrique" },
    { year: "1978", event: "Révolution islamique en Iran - perturbation majeure des marchés pétroliers" },
    { year: "1979", event: "Deuxième choc pétrolier - révolution iranienne, prix multiplié par 2" },
    { year: "1980", event: "Guerre Iran-Irak - nouveau choc sur les marchés pétroliers" },
    { year: "1986", event: "Effondrement des prix du pétrole (de 30$ à 10$ le baril) - crise de surproduction" },
    { year: "1990-1991", event: "Guerre du Golfe - invasion du Koweït par l'Irak, perturbation des approvisionnements" },
    { year: "1991", event: "Dissolution de l'URSS - redistribution des ressources énergétiques" },
    { year: "1998", event: "Prix du pétrole à leur plus bas niveau depuis 1973 (10$ le baril)" },
    { year: "2000", event: "Création de l'EURATOM - coopération énergétique européenne" },
    { year: "2001", event: "Attentats du 11 septembre - impact sur les marchés énergétiques mondiaux" },
    { year: "2003", event: "Invasion de l'Irak par la coalition américaine - enjeux pétroliers majeurs" },
    { year: "2005", event: "Ouragan Katrina - perturbation majeure de la production pétrolière américaine" },
    { year: "2008", event: "Prix record du pétrole (147$ le baril) - pic historique avant la crise financière" },
    { year: "2010", event: "Catastrophe de Deepwater Horizon - marée noire dans le golfe du Mexique" },
    { year: "2011", event: "Printemps arabe - impact sur la production pétrolière en Afrique du Nord" },
    { year: "2014", event: "Chute brutale des prix du pétrole (de 100$ à 30$ le baril) - révolution des schistes" },
    { year: "2014", event: "Crise en Ukraine - sanctions européennes contre la Russie, impact énergétique" },
    { year: "2015", event: "Accord de Paris sur le climat - engagement international pour la transition énergétique" },
    { year: "2016", event: "Découverte de pétrole au Guyana - nouveau gisement majeur en Amérique du Sud" },
    { year: "2018", event: "Embargo pétrolier contre le Venezuela par les États-Unis" },
    { year: "2019", event: "Attaque sur les installations pétrolières saoudiennes - perturbation majeure" },
    { year: "2020", event: "Pandémie de COVID-19 - effondrement historique de la demande pétrolière" },
    { year: "2021", event: "Prix négatifs du pétrole aux États-Unis pour la première fois de l'histoire" },
    { year: "2022", event: "Invasion russe de l'Ukraine - crise énergétique mondiale, embargo européen" },
    { year: "2022", event: "Découverte de pétrole au Brésil (périmètre de Buzios) - plus grand gisement de l'histoire" },
    { year: "2023", event: "Accord OPEP+ pour réduire la production pétrolière face à la surproduction" },
    { year: "2023", event: "Transition énergétique accélérée en Europe - plan REPowerEU" },
    { year: "2024", event: "Prix du pétrole dépassant 100$ le baril - tensions géopolitiques persistantes" },
    { year: "2025", event: "Accords internationaux sur les minerais critiques pour les énergies renouvelables" }
  ];

  const groupEventsByDecade = (events: typeof events) => {
    const grouped: { [key: string]: typeof events } = {};
    events.forEach(event => {
      const yearNum = parseInt(event.year.substring(0, 4));
      const decade = Math.floor(yearNum / 10) * 10;
      const decadeKey = `${decade}s`;

      if (!grouped[decadeKey]) {
        grouped[decadeKey] = [];
      }
      grouped[decadeKey].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByDecade(events);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-gray-900 flex items-center gap-1">
            <Home className="h-4 w-4" />
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/formation/geopolitique" className="hover:text-gray-900">
            Géopolitique
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/formation/geopolitique/premiere-annee" className="hover:text-gray-900">
            Première année
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">Chronologie - Géopolitique des énergies</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de la géopolitique des énergies
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De la découverte du pétrole à Titusville aux enjeux contemporains de la transition énergétique,
            l'évolution historique des ressources énergétiques et de leurs implications géopolitiques.
          </p>
        </div>

        {/* Events by decade */}
        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-green-700 mr-4">
                        {item.year}
                      </span>
                      <p className="flex-grow text-gray-700 leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Back to main page */}
        <div className="mt-12 text-center">
          <Link
            to="/formation/geopolitique/premiere-annee"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Retour à la première année
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnergiesChronologiePage;
