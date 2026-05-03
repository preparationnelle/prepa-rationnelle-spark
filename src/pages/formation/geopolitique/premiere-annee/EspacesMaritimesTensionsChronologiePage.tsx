import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const EspacesMaritimesTensionsChronologiePage = () => {
  const events = [
    { year: "1588", event: "Défaite de l'Invincible Armada espagnole face à la flotte anglaise : déclin de la puissance navale espagnole" },
    { year: "1652-1654", event: "Première guerre anglo-néerlandaise : rivalité commerciale maritime en Europe du Nord" },
    { year: "1665-1667", event: "Deuxième guerre anglo-néerlandaise : conflit pour le contrôle du commerce asiatique" },
    { year: "1672-1674", event: "Troisième guerre anglo-néerlandaise : apogée des tensions maritimes européennes" },
    { year: "1702-1713", event: "Guerre de Succession d'Espagne : batailles navales décisives pour le contrôle des colonies" },
    { year: "1739-1748", event: "Guerre de l'oreille de Jenkins : conflit anglo-espagnol pour le contrôle des Caraïbes" },
    { year: "1756-1763", event: "Guerre de Sept Ans : lutte pour l'hégémonie maritime entre France et Grande-Bretagne" },
    { year: "1778", event: "Alliance franco-américaine : soutien naval français à l'indépendance américaine" },
    { year: "1780", event: "Bataille de Cape Saint Vincent : victoire britannique sur l'Espagne" },
    { year: "1798", event: "Bataille d'Aboukir : destruction de la flotte française par Nelson" },
    { year: "1805", event: "Bataille de Trafalgar : suprématie navale britannique établie" },
    { year: "1807", event: "Blocus continental napoléonien : tentative française de contrôle des échanges maritimes" },
    { year: "1812-1815", event: "Guerre anglo-américaine : conflit pour la liberté des mers" },
    { year: "1840-1842", event: "Première guerre de l'opium : ouverture forcée des ports chinois par la Grande-Bretagne" },
    { year: "1853-1856", event: "Guerre de Crimée : conflit pour l'accès aux détroits turcs" },
    { year: "1856-1860", event: "Deuxième guerre de l'opium : nouvelle défaite chinoise et traités inégaux" },
    { year: "1894-1895", event: "Guerre sino-japonaise : première victoire d'une puissance asiatique sur une occidentale" },
    { year: "1898", event: "Guerre hispano-américaine : émergence des États-Unis comme puissance navale mondiale" },
    { year: "1904-1905", event: "Guerre russo-japonaise : contrôle de la Mandchourie et de la Corée en jeu" },
    { year: "1911-1912", event: "Guerre italo-turque : conquête de la Libye par l'Italie" },
    { year: "1914-1918", event: "Première Guerre mondiale : guerre sous-marine allemande contre le commerce allié" },
    { year: "1917", event: "Entrée des États-Unis dans la guerre : blocus naval allemand" },
    { year: "1932", event: "Incident de Mukden : invasion japonaise de la Mandchourie" },
    { year: "1937", event: "Incident du pont Marco Polo : début de la guerre sino-japonaise" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : batailles navales décisives dans le Pacifique" },
    { year: "1941", event: "Attaque japonaise sur Pearl Harbor : entrée des États-Unis dans la guerre" },
    { year: "1942", event: "Bataille de la mer de Corail : première bataille aéronavale de l'histoire" },
    { year: "1944", event: "Bataille du golfe de Leyte : plus grande bataille navale de l'histoire" },
    { year: "1950-1953", event: "Guerre de Corée : intervention navale américaine et chinoise" },
    { year: "1956", event: "Crise du canal de Suez : intervention militaire anglo-franco-israélienne" },
    { year: "1962", event: "Crise des missiles de Cuba : tension maximale entre États-Unis et URSS" },
    { year: "1965", event: "Guerre indo-pakistanaise : conflit pour le contrôle du Cachemire" },
    { year: "1967", event: "Guerre des Six Jours : conquête du Sinaï et de Gaza par Israël" },
    { year: "1971", event: "Guerre indo-pakistanaise : création du Bangladesh, tensions dans le golfe du Bengale" },
    { year: "1973", event: "Guerre du Kippour : fermeture du canal de Suez par l'Égypte" },
    { year: "1974", event: "Invasion turque de Chypre : partition de l'île méditerranéenne" },
    { year: "1980-1988", event: "Guerre Iran-Irak : conflit pour le contrôle du golfe Persique" },
    { year: "1982", event: "Guerre des Malouines : conflit anglo-argentin pour les îles Falkland" },
    { year: "1990-1991", event: "Guerre du Golfe : coalition internationale contre l'Irak" },
    { year: "1991", event: "Guerre du Golfe : libération du Koweït par la coalition internationale" },
    { year: "1995-1996", event: "Crise du détroit de Taïwan : démonstration de force chinoise" },
    { year: "1999", event: "Guerre du Kosovo : intervention de l'OTAN contre la Serbie" },
    { year: "2008", event: "Guerre russo-géorgienne : conflit pour l'Abkhazie et l'Ossétie du Sud" },
    { year: "2014", event: "Crise de Crimée : annexion russe de la péninsule ukrainienne" },
    { year: "2016", event: "Arrêt de la CPI sur la mer de Chine méridionale : Philippines contre Chine" },
    { year: "2018", event: "Incident du détroit de Kertch : confrontation navale russo-ukrainienne" },
    { year: "2019", event: "Attaque sur les installations pétrolières saoudiennes : revendication houthie" },
    { year: "2020", event: "Conflit arméno-azerbaïdjanais : guerre du Haut-Karabagh" },
    { year: "2021", event: "Blocage du canal de Suez : perturbation mondiale du commerce maritime" },
    { year: "2022", event: "Invasion russe de l'Ukraine : impact sur les routes commerciales maritimes" },
    { year: "2023", event: "Rébellion houthie au Yémen : attaques sur la navigation commerciale" },
    { year: "2024", event: "Tensions sino-taïwanaises : augmentation des patrouilles navales chinoises" },
    { year: "2025", event: "Nouvelles tensions dans le détroit d'Ormuz : impact sur les prix du pétrole" }
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
          <span className="text-gray-900 font-medium">Chronologie - Espaces maritimes : tensions et conflits</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie des tensions et conflits maritimes
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            L'histoire des rivalités maritimes, des grandes batailles navales aux conflits territoriaux
            contemporains pour le contrôle des espaces océaniques.
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

export default EspacesMaritimesTensionsChronologiePage;

