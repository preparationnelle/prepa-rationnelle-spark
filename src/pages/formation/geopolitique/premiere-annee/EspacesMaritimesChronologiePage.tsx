import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const EspacesMaritimesChronologiePage = () => {
  const events = [
    { year: "1609", event: "Publication du Mare Liberum par Hugo Grotius, affirmant que les mers sont un bien commun de l'humanité" },
    { year: "1635", event: "Publication du Mare Clausum par John Selden, défendant la souveraineté britannique sur les mers environnantes" },
    { year: "1702-1713", event: "Guerre de Succession d'Espagne : batailles navales décisives en Europe et dans les colonies" },
    { year: "1756-1763", event: "Guerre de Sept Ans : conflits navals entre France et Grande-Bretagne pour le contrôle des mers" },
    { year: "1778-1783", event: "Guerre d'Indépendance américaine : rôle décisif de la marine française" },
    { year: "1798", event: "Bataille d'Aboukir : victoire navale britannique contre la flotte française de Bonaparte" },
    { year: "1805", event: "Bataille de Trafalgar : victoire britannique définitive contre Napoléon" },
    { year: "1815", event: "Congrès de Vienne : confirmation de la suprématie maritime britannique" },
    { year: "1845-1848", event: "Guerre américano-mexicaine : annexion de la Californie côtière par les États-Unis" },
    { year: "1869", event: "Ouverture du canal de Suez : révolution dans les échanges maritimes mondiaux" },
    { year: "1882", event: "Convention internationale sur la protection des câbles sous-marins" },
    { year: "1898", event: "Guerre hispano-américaine : émergence des États-Unis comme puissance navale" },
    { year: "1904-1905", event: "Guerre russo-japonaise : première victoire navale d'une puissance asiatique sur une européenne" },
    { year: "1914-1918", event: "Première Guerre mondiale : guerre sous-marine allemande, blocus britannique" },
    { year: "1916", event: "Bataille du Jutland : plus grande bataille navale de la Première Guerre mondiale" },
    { year: "1919", event: "Traité de Versailles : redistribution des colonies allemandes et ottomanes" },
    { year: "1922", event: "Traité de Lausanne : règlement des détroits turcs et du statut de la mer Noire" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : batailles navales décisives (Pearl Harbor, Midway)" },
    { year: "1941", event: "Attaque de Pearl Harbor : entrée des États-Unis dans la Seconde Guerre mondiale" },
    { year: "1942", event: "Bataille de Midway : tournant de la guerre du Pacifique" },
    { year: "1943", event: "Conférence de Téhéran : discussions sur le partage des zones d'influence en Europe" },
    { year: "1945", event: "Conférence de Yalta : accords sur la division de l'Allemagne et des sphères d'influence" },
    { year: "1945", event: "Déclaration Truman : revendication américaine sur le plateau continental" },
    { year: "1946", event: "Nationalisation du canal de Suez par l'Égypte" },
    { year: "1956", event: "Crise du canal de Suez : intervention militaire anglo-franco-israélienne" },
    { year: "1958", event: "Convention de Genève sur le plateau continental : première codification internationale" },
    { year: "1962", event: "Crise des missiles de Cuba : tension maximale entre États-Unis et URSS" },
    { year: "1964", event: "Décret indonésien sur l'archipel : affirmation de souveraineté sur les détroits" },
    { year: "1971", event: "Décret Nixon sur les ressources marines : extension de la juridiction américaine" },
    { year: "1973", event: "Guerre du Kippour : fermeture du canal de Suez" },
    { year: "1979", event: "Traité de paix égypto-israélien à Camp David : réouverture du canal de Suez" },
    { year: "1982", event: "Convention des Nations Unies sur le droit de la mer (Montego Bay)" },
    { year: "1988", event: "Fin de la guerre Iran-Irak : règlement du conflit du Golfe" },
    { year: "1990-1991", event: "Guerre du Golfe : intervention internationale contre l'Irak" },
    { year: "1991", event: "Dissolution de l'URSS : fin de la bipolarité et émergence de nouveaux acteurs" },
    { year: "1994", event: "Ouverture du tunnel sous la Manche : nouveau lien terrestre transmanche" },
    { year: "1997", event: "Retour de Hong Kong à la Chine : fin de l'empire colonial britannique" },
    { year: "2001", event: "Attentats du 11 septembre : impact sur la sécurité maritime mondiale" },
    { year: "2004", event: "Tsunami dans l'océan Indien : 230 000 morts, prise de conscience internationale" },
    { year: "2013", event: "Accord sino-philippin sur la mer de Chine méridionale : tensions territoriales" },
    { year: "2014", event: "Arrêt de la Cour internationale de justice sur les frontières maritimes" },
    { year: "2015", event: "Ratification universelle de la Convention de Montego Bay" },
    { year: "2016", event: "Arrêt de la Cour permanente d'arbitrage sur la mer de Chine méridionale" },
    { year: "2018", event: "Incident du détroit de Kertch : tensions russo-ukrainiennes" },
    { year: "2019", event: "Ouverture du canal de Panama élargi : augmentation de la capacité maritime" },
    { year: "2021", event: "Blocage du canal de Suez par l'Ever Given : perturbation mondiale du commerce" },
    { year: "2022", event: "Invasion russe de l'Ukraine : impact sur les routes commerciales maritimes" },
    { year: "2023", event: "Accord sino-brunéien sur la mer de Chine méridionale : règlement partiel des tensions" },
    { year: "2024", event: "Augmentation des tensions dans le détroit de Taïwan : risque de conflit maritime" },
    { year: "2025", event: "Accords sur la protection des océans : vers une gouvernance maritime renouvelée" }
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
          <span className="text-gray-900 font-medium">Chronologie - Les espaces maritimes</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie des espaces maritimes
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            L'évolution historique de la territorialisation des espaces maritimes, des théories du XVIe siècle
            aux enjeux contemporains de la gouvernance océanique.
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
                <Card key={index} className="border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-blue-700 mr-4">
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

export default EspacesMaritimesChronologiePage;

