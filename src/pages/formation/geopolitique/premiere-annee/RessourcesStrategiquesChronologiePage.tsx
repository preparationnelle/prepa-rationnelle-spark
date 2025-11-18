import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const RessourcesStrategiquesChronologiePage = () => {
  const events = [
    { year: "-5000 à -3000", event: "Premières exploitations de minerais : cuivre, bronze et or dans le Proche-Orient" },
    { year: "-2500", event: "Exploitation du sel en Mésopotamie : première ressource stratégique alimentaire" },
    { year: "-2000 à -1500", event: "Âge du bronze : contrôle des gisements de cuivre et étain" },
    { year: "-1000", event: "Fer : révolution métallurgique et contrôle des ressources de fer" },
    { year: "-500", event: "Soie : route de la soie et monopole chinois sur la production" },
    { year: "476", event: "Chute de Rome : dispersion des ressources minières européennes" },
    { year: "1200-1300", event: "Or africain : commerce transsaharien et contrôle portugais" },
    { year: "1492", event: "Découverte des Amériques : accès aux ressources minérales du Nouveau Monde" },
    { year: "1571", event: "Argent du Potosí : exploitation massive des mines d'argent en Bolivie" },
    { year: "1700-1800", event: "Charbon : révolution industrielle britannique et contrôle des bassins houillers" },
    { year: "1859", event: "Pétrole : découverte du premier puits de pétrole commercial aux États-Unis" },
    { year: "1860-1880", event: "Caoutchouc : boom amazonien et exploitation coloniale" },
    { year: "1867", event: "Diamants sud-africains : découverte des Kimberley et ruée vers les diamants" },
    { year: "1885", event: "Conférence de Berlin : partage colonial africain et contrôle des ressources" },
    { year: "1895", event: "Or du Klondike : ruée vers l'or au Yukon" },
    { year: "1902", event: "Création d'Anglo American : monopole sud-africain sur les diamants" },
    { year: "1908", event: "Découverte du pétrole au Moyen-Orient : gisement de Masjed Soleyman en Iran" },
    { year: "1914-1918", event: "Première Guerre mondiale : contrôle des ressources allemandes (minerais)" },
    { year: "1920", event: "Accords de San Remo : partage pétrolier du Moyen-Orient" },
    { year: "1922", event: "Découverte du pétrole en Arabie Saoudite : gisement de Dammam" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : contrôle des ressources japonaises (caoutchouc)" },
    { year: "1945", event: "Découverte d'uranium : exploitation pour l'énergie nucléaire" },
    { year: "1952", event: "Découverte du gaz naturel aux Pays-Bas : Groningen field" },
    { year: "1956", event: "Nationalisation du canal de Suez : crise pétrolière et contrôle des routes" },
    { year: "1960", event: "Création de l'OPEP : cartel pétrolier et contrôle des prix" },
    { year: "1971", event: "Découverte du pétrole de la mer du Nord : ressources européennes" },
    { year: "1973", event: "Premier choc pétrolier : embargo arabe et dépendance énergétique" },
    { year: "1978", event: "Découverte du pétrole en Alaska : Prudhoe Bay field" },
    { year: "1979", event: "Deuxième choc pétrolier : révolution iranienne" },
    { year: "1980", event: "Découverte du cobalt en République démocratique du Congo" },
    { year: "1982", event: "Convention des Nations Unies sur le droit de la mer : ressources océaniques" },
    { year: "1989", event: "Chute du mur de Berlin : accès aux ressources soviétiques" },
    { year: "1991", event: "Guerre du Golfe : contrôle pétrolier du Koweït et de l'Irak" },
    { year: "1996", event: "Découverte du pétrole au Kazakhstan : Tengiz field" },
    { year: "1997", event: "Crise asiatique : contrôle des ressources financières" },
    { year: "2000", event: "Découverte du gaz en Russie : Sibérie orientale" },
    { year: "2001", event: "Découverte du pétrole en Angola : bloc 17" },
    { year: "2003", event: "Guerre d'Irak : contrôle des ressources pétrolières" },
    { year: "2006", event: "Découverte du lithium en Bolivie : Salar de Uyuni" },
    { year: "2007", event: "Pic pétrolier : débat sur l'épuisement des ressources" },
    { year: "2008", event: "Crise financière : contrôle des ressources financières mondiales" },
    { year: "2010", event: "Découverte du gaz de schiste aux États-Unis : révolution énergétique" },
    { year: "2011", event: "Découverte du pétrole au Brésil : pré-sal" },
    { year: "2012", event: "Découverte des terres rares en Australie : Mount Weld" },
    { year: "2014", event: "Chute des prix du pétrole : guerre des prix entre OPEP et Russie" },
    { year: "2015", event: "Accord de Paris : ressources énergétiques et transition" },
    { year: "2016", event: "Découverte du cobalt en Australie : alternative africaine" },
    { year: "2018", event: "Guerre commerciale sino-américaine : contrôle des terres rares" },
    { year: "2019", event: "Découverte du lithium en Argentine : Salar del Hombre Muerto" },
    { year: "2020", event: "Pandémie COVID-19 : crise des chaînes d'approvisionnement" },
    { year: "2021", event: "Découverte du gaz en Méditerranée orientale : Leviathan field" },
    { year: "2022", event: "Invasion russe de l'Ukraine : crise énergétique et contrôle des ressources" },
    { year: "2023", event: "Découverte du cuivre au Chili : mine Ministro Hales" },
    { year: "2024", event: "Accords sur les minerais critiques : Initiative européenne pour les matières premières" },
    { year: "2025", event: "Ressources spatiales : exploitation des ressources lunaires et astéroïdales" }
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
          <span className="text-gray-900 font-medium">Chronologie - Ressources stratégiques</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie des ressources stratégiques
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De l'âge du bronze aux ressources spatiales, l'évolution des ressources stratégiques,
            des métaux rares aux énergies fossiles et aux nouveaux matériaux critiques.
          </p>
        </div>

        {/* Events by decade */}
        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-teal-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-teal-700 mr-4">
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

export default RessourcesStrategiquesChronologiePage;
