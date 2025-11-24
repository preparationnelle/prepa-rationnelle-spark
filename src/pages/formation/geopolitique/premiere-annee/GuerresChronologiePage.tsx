import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const GuerresChronologiePage = () => {
  const events = [
    { year: "-3000 à -2000", event: "Premières guerres organisées en Mésopotamie et Égypte ancienne" },
    { year: "-776 à -146", event: "Guerres médiques et du Péloponnèse : naissance de la stratégie militaire occidentale" },
    { year: "-146", event: "Destruction de Carthage par Rome : fin des guerres puniques" },
    { year: "476", event: "Chute de l'Empire romain d'Occident : début du Moyen Âge européen" },
    { year: "1096-1291", event: "Croisades : guerres saintes entre chrétiens et musulmans" },
    { year: "1337-1453", event: "Guerre de Cent Ans : conflit féodal entre France et Angleterre" },
    { year: "1492-1498", event: "Conquête de l'Amérique par Christophe Colomb : début de la colonisation" },
    { year: "1618-1648", event: "Guerre de Trente Ans : guerre de religion en Europe centrale" },
    { year: "1756-1763", event: "Guerre de Sept Ans : premier conflit mondial opposant grandes puissances européennes" },
    { year: "1775-1783", event: "Guerre d'Indépendance américaine : naissance des États-Unis" },
    { year: "1792-1815", event: "Guerres napoléoniennes : conquêtes européennes et coalitions" },
    { year: "1853-1856", event: "Guerre de Crimée : première guerre moderne avec photographie et télégraphe" },
    { year: "1861-1865", event: "Guerre de Sécession américaine : guerre industrielle totale" },
    { year: "1870-1871", event: "Guerre franco-prussienne : unification allemande et chute du Second Empire" },
    { year: "1894-1895", event: "Guerre sino-japonaise : première victoire d'une puissance asiatique sur une occidentale" },
    { year: "1898", event: "Guerre hispano-américaine : émergence des États-Unis comme puissance mondiale" },
    { year: "1899-1902", event: "Guerre des Boers : conflit colonial britannique en Afrique du Sud" },
    { year: "1904-1905", event: "Guerre russo-japonaise : première défaite d'une puissance européenne face à une asiatique" },
    { year: "1912-1913", event: "Guerres balkaniques : prémices de la Première Guerre mondiale" },
    { year: "1914-1918", event: "Première Guerre mondiale : guerre totale impliquant 70 millions de soldats" },
    { year: "1917", event: "Révolution russe : naissance du communisme et guerre civile" },
    { year: "1936-1939", event: "Guerre civile espagnole : répétition générale de la Seconde Guerre mondiale" },
    { year: "1937-1945", event: "Guerre sino-japonaise : plus longue guerre du XXe siècle" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : conflit global impliquant 100 millions de soldats" },
    { year: "1945", event: "Bombardements atomiques d'Hiroshima et Nagasaki : naissance de l'ère nucléaire" },
    { year: "1946-1954", event: "Guerre d'Indochine : décolonisation française en Asie" },
    { year: "1948", event: "Création d'Israël : conflit israélo-arabe permanent" },
    { year: "1950-1953", event: "Guerre de Corée : première guerre de la Guerre froide" },
    { year: "1954-1962", event: "Guerre d'Algérie : fin de l'empire colonial français" },
    { year: "1956", event: "Crise du canal de Suez : dernière intervention militaire britannique au Moyen-Orient" },
    { year: "1959-1975", event: "Guerre du Vietnam : défaite américaine et unification vietnamienne" },
    { year: "1962", event: "Crise des missiles de Cuba : plus proche confrontation nucléaire entre superpuissances" },
    { year: "1967", event: "Guerre des Six Jours : conquête israélienne du Sinaï, Gaza, Cisjordanie et plateau du Golan" },
    { year: "1971", event: "Guerre indo-pakistanaise : création du Bangladesh" },
    { year: "1973", event: "Guerre du Kippour : embargo pétrolier arabe contre les pays soutenant Israël" },
    { year: "1975-1991", event: "Guerre civile cambodgienne : génocide khmer rouge" },
    { year: "1979-1989", event: "Guerre d'Afghanistan : défaite soviétique et montée du fondamentalisme islamique" },
    { year: "1980-1988", event: "Guerre Iran-Irak : conflit le plus meurtrier du Moyen-Orient depuis 1945" },
    { year: "1982", event: "Guerre des Malouines : conflit anglo-argentin pour les îles Falkland" },
    { year: "1989", event: "Chute du mur de Berlin : fin pacifique de la Guerre froide" },
    { year: "1990-1991", event: "Guerre du Golfe : libération du Koweït par la coalition internationale" },
    { year: "1991", event: "Dissolution de l'URSS : fin de la bipolarité mondiale" },
    { year: "1992-1995", event: "Guerre de Bosnie : nettoyage ethnique en Europe" },
    { year: "1994", event: "Génocide rwandais : 800 000 morts en 100 jours" },
    { year: "1995", event: "Accords de Dayton : fin de la guerre en Bosnie" },
    { year: "1999", event: "Guerre du Kosovo : intervention de l'OTAN sans mandat de l'ONU" },
    { year: "2001", event: "Attentats du 11 septembre : début de la guerre contre le terrorisme" },
    { year: "2001-2021", event: "Guerre d'Afghanistan : plus longue guerre de l'histoire américaine" },
    { year: "2003-2011", event: "Guerre d'Irak : invasion américaine et guerre civile" },
    { year: "2006", event: "Guerre du Liban : conflit israélo-hezbollah" },
    { year: "2008", event: "Guerre russo-géorgienne : première guerre postsoviétique" },
    { year: "2011", event: "Guerre civile libyenne : intervention internationale et chaos" },
    { year: "2011-2018", event: "Guerre civile syrienne : plus de 500 000 morts" },
    { year: "2014", event: "Annexion de la Crimée par la Russie : début du conflit ukrainien" },
    { year: "2014-2022", event: "Guerre du Donbass : conflit de basse intensité en Ukraine" },
    { year: "2015", event: "Intervention russe en Syrie : retournement du conflit syrien" },
    { year: "2018-2020", event: "Guerre civile au Yémen : famine et épidémie de choléra" },
    { year: "2020", event: "Conflit arméno-azerbaïdjanais : guerre du Haut-Karabagh" },
    { year: "2021", event: "Chute de Kaboul : retrait américain chaotique d'Afghanistan" },
    { year: "2022", event: "Invasion russe de l'Ukraine : plus grande guerre conventionnelle en Europe depuis 1945" },
    { year: "2023", event: "Rébellion houthie au Yémen : attaques contre la navigation internationale" },
    { year: "2024", event: "Tensions sino-taïwanaises : risque de conflit majeur en Asie" },
    { year: "2025", event: "Guerre hybride et cyberconflits : nouvelle forme de conflictualité mondiale" }
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
          <span className="text-gray-900 font-medium">Chronologie - Les guerres</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie des guerres et conflits
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De l'Antiquité aux cyberconflits contemporains, l'évolution des formes de guerre,
            des batailles décisives aux conflits asymétriques modernes.
          </p>
        </div>

        {/* Events by decade */}
        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-red-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-red-700 mr-4">
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

export default GuerresChronologiePage;

