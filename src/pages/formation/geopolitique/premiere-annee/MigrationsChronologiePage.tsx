import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const MigrationsChronologiePage = () => {
  const events = [
    { year: "-3000 à -2000", event: "Premières migrations agricoles : passage de la chasse-cueillette à l'agriculture (Proche-Orient, Asie)" },
    { year: "-1500 à -500", event: "Migrations indo-européennes : expansion des peuples indo-européens vers l'Europe et l'Asie" },
    { year: "-1000 à -500", event: "Migrations grecques : colonisation grecque en Méditerranée (Magna Graecia)" },
    { year: "-500 à -300", event: "Migrations celtiques : expansion celtique en Europe occidentale" },
    { year: "-146", event: "Conquête romaine : migrations forcées et esclavage dans l'Empire romain" },
    { year: "375-568", event: "Invasions barbares : Grandes Migrations germaniques en Europe romaine" },
    { year: "711-718", event: "Conquête arabe : expansion islamique de l'Espagne à l'Inde" },
    { year: "800-1100", event: "Migrations vikings : exploration et colonisation en Europe du Nord et en Amérique" },
    { year: "1096-1291", event: "Croisades : migrations militaires et religieuses vers le Proche-Orient" },
    { year: "1241-1242", event: "Invasion mongole : conquête de l'Asie centrale à l'Europe de l'Est" },
    { year: "1453", event: "Chute de Constantinople : fuite des savants grecs vers l'Italie (Renaissance)" },
    { year: "1492", event: "Découverte de l'Amérique : début de la migration transatlantique forcée (esclavage)" },
    { year: "1607-1776", event: "Colonisation anglaise : migrations européennes vers l'Amérique du Nord" },
    { year: "1789-1815", event: "Révolution industrielle : migrations rurales vers les villes européennes" },
    { year: "1845-1852", event: "Grande Famine irlandaise : migration massive vers les États-Unis et l'Australie" },
    { year: "1848-1852", event: "Révolutions européennes : exil politique des révolutionnaires (Marx, Mazzini)" },
    { year: "1869", event: "Ouverture du canal de Suez : facilitation des migrations entre Europe et colonies" },
    { year: "1880-1914", event: "Grande migration transatlantique : 30 millions d'Européens vers les Amériques" },
    { year: "1914-1918", event: "Première Guerre mondiale : déplacements forcés et réfugié·e·s (Grecs, Arméniens)" },
    { year: "1917", event: "Révolution russe : exil de la noblesse et des intellectuels (diaspora russe)" },
    { year: "1920-1923", event: "Traité de Lausanne : échange forcé de populations entre Grèce et Turquie" },
    { year: "1924", event: "Immigration Act américain : quota par nationalité, fin des grandes migrations européennes" },
    { year: "1933-1945", event: "Exil nazi : fuite des juifs et des opposants (Einstein, Thomas Mann)" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : déplacements massifs (15 millions de déplacé·e·s)" },
    { year: "1945", event: "Fin de la Seconde Guerre mondiale : rapatriement forcé et création de camps de déplacé·e·s" },
    { year: "1947", event: "Partition des Indes : migration forcée de 15 millions de personnes" },
    { year: "1948", event: "Création d'Israël : exode palestinien et migration juive (alyah)" },
    { year: "1951", event: "Convention de Genève : statut juridique des réfugié·e·s" },
    { year: "1956", event: "Crise de Suez : exil des juifs d'Égypte et de Hongrie" },
    { year: "1960-1970", event: "Décolonisation africaine : migrations de retour des Européens (pieds-noirs)" },
    { year: "1962", event: "Indépendance algérienne : exode des pieds-noirs vers la France" },
    { year: "1965", event: "Hart-Celler Act : réforme américaine favorisant les migrations familiales" },
    { year: "1973", event: "Premier choc pétrolier : immigration de travailleurs du Sud vers l'Europe du Nord" },
    { year: "1975", event: "Chute du Vietnam : boat people vietnamiens et exil cambodgien" },
    { year: "1979-1989", event: "Révolution iranienne : exil massif des opposants et des juifs iraniens" },
    { year: "1980", event: "Boat people : crise migratoire en mer de Chine méridionale" },
    { year: "1989", event: "Chute du mur de Berlin : migrations intra-européennes et unification allemande" },
    { year: "1990-1995", event: "Guerre de Yougoslavie : 2 millions de déplacé·e·s et réfugié·e·s" },
    { year: "1991", event: "Dissolution de l'URSS : migrations de retour des Russes d'Asie centrale" },
    { year: "1994", event: "Génocide rwandais : 2 millions de déplacé·e·s vers les pays voisins" },
    { year: "1995", event: "Accords de Schengen : espace européen sans frontières intérieures" },
    { year: "1999", event: "Guerre du Kosovo : exode albanais vers l'Albanie et la Macédoine" },
    { year: "2001", event: "11 septembre : durcissement des politiques migratoires aux États-Unis" },
    { year: "2003", event: "Guerre d'Irak : exil de millions d'Irakiens (diaspora irakienne)" },
    { year: "2008", event: "Crise financière : retour forcé de migrants européens en Afrique" },
    { year: "2011", event: "Printemps arabe : exil massif de Tunisiens, Libyens, Syriens" },
    { year: "2012-2015", event: "Crise des migrants européens : arrivée de plus d'un million de personnes" },
    { year: "2013", event: "Crise de Lampedusa : naufrage faisant plus de 300 morts" },
    { year: "2014", event: "Guerre civile ukrainienne : déplacements internes et exil vers la Russie" },
    { year: "2015", event: "Sommet européen sur la migration : tentative de réponse coordonnée" },
    { year: "2016", event: "Brexit : impact sur les migrations entre UE et Royaume-Uni" },
    { year: "2017", event: "Crise des Rohingya : exode de 700 000 personnes du Myanmar vers le Bangladesh" },
    { year: "2018", event: "Politique zéro tolérance aux États-Unis : séparation des familles migrants" },
    { year: "2019", event: "Crise vénézuélienne : exode de plus de 5 millions de Vénézuéliens" },
    { year: "2020", event: "Pandémie COVID-19 : fermeture des frontières et retour forcé de migrants" },
    { year: "2021", event: "Prise de Kaboul : exil massif des Afghans et retour des troupes occidentales" },
    { year: "2022", event: "Invasion russe de l'Ukraine : 6 millions de déplacé·e·s et réfugié·e·s" },
    { year: "2023", event: "Accord UE-Tunisie : externalisation des contrôles migratoires" },
    { year: "2024", event: "Crise des déportations françaises : tensions avec l'Algérie et le Maroc" },
    { year: "2025", event: "Migrations climatiques : déplacements forcés dus au changement climatique" }
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
          <span className="text-gray-900 font-medium">Chronologie - Les migrations</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie des migrations
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De l'Antiquité aux migrations climatiques contemporaines, l'évolution des mouvements
            de populations, des invasions aux politiques migratoires modernes.
          </p>
        </div>

        {/* Events by decade */}
        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-orange-700 mr-4">
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

export default MigrationsChronologiePage;

