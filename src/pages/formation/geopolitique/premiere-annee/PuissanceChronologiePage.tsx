import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const PuissanceChronologiePage = () => {
  const events = [
    { year: "-3000 à -2000", event: "Puissance des premiers empires : Égypte, Mésopotamie et Indus" },
    { year: "-776 à -146", event: "Puissance grecque : Athènes et Sparte, naissance de la stratégie militaire" },
    { year: "-146", event: "Puissance romaine : Pax Romana et contrôle du monde méditerranéen" },
    { year: "476", event: "Chute de Rome : fragmentation du pouvoir en Europe" },
    { year: "800", event: "Empire carolingien : tentative de restauration de l'unité occidentale" },
    { year: "1096-1291", event: "Puissance chrétienne : Croisades et contrôle des lieux saints" },
    { year: "1206-1368", event: "Empire mongol : plus vaste empire terrestre de l'histoire" },
    { year: "1453", event: "Puissance ottomane : chute de Constantinople et contrôle des détroits" },
    { year: "1492", event: "Puissance maritime portugaise et espagnole : âge des découvertes" },
    { year: "1588", event: "Puissance anglaise : défaite de l'Invincible Armada" },
    { year: "1648", event: "Traité de Westphalie : souveraineté des États-nations" },
    { year: "1756-1763", event: "Puissance britannique : victoire de la Guerre de Sept Ans" },
    { year: "1789", event: "Révolution française : puissance idéologique et militaire" },
    { year: "1805", event: "Puissance napoléonienne : victoire de Trafalgar et Austerlitz" },
    { year: "1815", event: "Congrès de Vienne : équilibre européen des puissances" },
    { year: "1853-1856", event: "Puissance russe : victoire de la Guerre de Crimée" },
    { year: "1861-1865", event: "Puissance nordiste : victoire de la Guerre de Sécession" },
    { year: "1870-1871", event: "Puissance allemande : unification et victoire sur la France" },
    { year: "1898", event: "Puissance américaine : victoire de la Guerre hispano-américaine" },
    { year: "1904-1905", event: "Puissance japonaise : victoire contre la Russie" },
    { year: "1914-1918", event: "Puissance alliée : victoire de la Première Guerre mondiale" },
    { year: "1917", event: "Puissance bolchevique : Révolution russe et naissance du communisme" },
    { year: "1939-1945", event: "Puissance alliée : victoire de la Seconde Guerre mondiale" },
    { year: "1945", event: "Puissance atomique : bombes d'Hiroshima et Nagasaki" },
    { year: "1945-1991", event: "Puissance bipolaire : Guerre froide États-Unis/URSS" },
    { year: "1949", event: "Puissance chinoise : victoire communiste et naissance de la RPC" },
    { year: "1950-1953", event: "Puissance américaine : victoire de la Guerre de Corée" },
    { year: "1956", event: "Puissance soviétique : intervention en Hongrie" },
    { year: "1957", event: "Puissance spatiale soviétique : Spoutnik 1" },
    { year: "1962", event: "Puissance nucléaire : crise des missiles de Cuba" },
    { year: "1967", event: "Puissance israélienne : victoire de la Guerre des Six Jours" },
    { year: "1971", event: "Puissance chinoise : siège permanent au Conseil de sécurité" },
    { year: "1973", event: "Puissance pétrolière : embargo arabe et chocs pétroliers" },
    { year: "1979", event: "Puissance iranienne : Révolution islamique" },
    { year: "1980-1988", event: "Puissance iranienne et irakienne : guerre du Golfe" },
    { year: "1989", event: "Puissance américaine : fin de la Guerre froide" },
    { year: "1990-1991", event: "Puissance américaine : intervention au Koweït" },
    { year: "1991", event: "Puissance russe : dissolution de l'URSS" },
    { year: "1997-1998", event: "Puissance asiatique : crise financière et récupération" },
    { year: "2001", event: "Puissance américaine : intervention en Afghanistan" },
    { year: "2003", event: "Puissance américaine : intervention en Irak" },
    { year: "2008", event: "Puissance financière : crise des subprimes" },
    { year: "2010", event: "Puissance émergente : BRICS et nouveaux acteurs" },
    { year: "2011", event: "Puissance arabe : Printemps arabe" },
    { year: "2012", event: "Puissance chinoise : dépassement économique des États-Unis" },
    { year: "2014", event: "Puissance russe : annexion de la Crimée" },
    { year: "2015", event: "Puissance chinoise : création de la Banque asiatique d'investissement" },
    { year: "2016", event: "Puissance britannique : Brexit et sortie de l'UE" },
    { year: "2017", event: "Puissance cybernétique : attaques russes aux États-Unis" },
    { year: "2018", event: "Puissance commerciale : guerre commerciale sino-américaine" },
    { year: "2019", event: "Puissance technologique : domination américaine du numérique" },
    { year: "2020", event: "Puissance sanitaire : gestion de la pandémie COVID-19" },
    { year: "2021", event: "Puissance vaccinale : diplomatie des vaccins" },
    { year: "2022", event: "Puissance énergétique : guerre en Ukraine et crise énergétique" },
    { year: "2023", event: "Puissance artificielle : course à l'IA entre États-Unis et Chine" },
    { year: "2024", event: "Puissance spatiale : retour des Américains sur la Lune" },
    { year: "2025", event: "Puissance climatique : leadership dans la transition énergétique" }
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
          <span className="text-gray-900 font-medium">Chronologie - La puissance</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de la puissance
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De l'Antiquité aux nouvelles formes de puissance contemporaine, l'évolution des critères,
            ressources et technologies qui définissent la puissance des acteurs internationaux.
          </p>
        </div>

        {/* Events by decade */}
        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-purple-700 mr-4">
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

export default PuissanceChronologiePage;

