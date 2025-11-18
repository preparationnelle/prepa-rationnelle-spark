import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Calendar } from 'lucide-react';

const GouvernanceMondialeChronologiePage = () => {
  const events = [
    { year: "1648", event: "Traités de Westphalie : naissance du système westphalien d'États souverains" },
    { year: "1815", event: "Congrès de Vienne : premier système de sécurité collective européen" },
    { year: "1919", event: "Création de la Société des Nations (SDN) : première tentative d'organisation internationale" },
    { year: "1929", event: "Grande Dépression : échec de la gouvernance économique internationale" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : faillite totale du système international" },
    { year: "1944", event: "Conférence de Bretton Woods : création du FMI et de la Banque mondiale" },
    { year: "1945", event: "Charte des Nations Unies : fondation de l'ONU et du système onusien" },
    { year: "1946", event: "Première Assemblée générale de l'ONU et création du Conseil de sécurité" },
    { year: "1947", event: "Plan Marshall : reconstruction économique de l'Europe" },
    { year: "1948", event: "Déclaration universelle des droits de l'homme" },
    { year: "1949", event: "Création de l'OTAN : premier traité d'alliance militaire multilatérale" },
    { year: "1950-1953", event: "Guerre de Corée : première intervention collective sous l'égide de l'ONU" },
    { year: "1956", event: "Crise du canal de Suez : échec de l'intervention franco-britannique" },
    { year: "1957", event: "Traité de Rome : création de la CEE (Communauté économique européenne)" },
    { year: "1960", event: "Année de l'Afrique : décolonisation et admission de 17 nouveaux États à l'ONU" },
    { year: "1961", event: "Création de l'OCDE (remplace l'OECE du plan Marshall)" },
    { year: "1963", event: "Traité de Moscou : premier traité de non-prolifération nucléaire" },
    { year: "1964", event: "Création de la CNUCED (Conférence des Nations Unies sur le commerce et le développement)" },
    { year: "1972", event: "Conférence de Stockholm : première grande conférence sur l'environnement" },
    { year: "1973", event: "Premier choc pétrolier : crise énergétique mondiale" },
    { year: "1974", event: "Charte des droits économiques des États : réforme de la gouvernance économique" },
    { year: "1975", event: "Conférence d'Helsinki : Acte final sur la sécurité et la coopération en Europe" },
    { year: "1979", event: "Deuxième choc pétrolier : aggravation de la crise économique mondiale" },
    { year: "1980", event: "Création de la Banque mondiale pour le développement" },
    { year: "1982", event: "Convention des Nations Unies sur le droit de la mer (Montego Bay)" },
    { year: "1987", event: "Rapport Brundtland : concept de développement durable" },
    { year: "1989", event: "Chute du mur de Berlin : fin de la bipolarité et effondrement du bloc soviétique" },
    { year: "1990-1991", event: "Guerre du Golfe : intervention internationale sous mandat de l'ONU" },
    { year: "1992", event: "Sommet de Rio : Conférence des Nations Unies sur l'environnement et le développement" },
    { year: "1994", event: "Création de l'OMC (Organisation mondiale du commerce)" },
    { year: "1995", event: "Conférence de Pékin sur les femmes : quatrième conférence mondiale des Nations Unies" },
    { year: "1997", event: "Protocole de Kyoto : premier accord international contraignant sur le climat" },
    { year: "1999", event: "Intervention au Kosovo : première intervention de l'OTAN sans mandat de l'ONU" },
    { year: "2000", event: "Objectifs du millénaire pour le développement (OMD)" },
    { year: "2001", event: "Attentats du 11 septembre : impact sur la sécurité internationale" },
    { year: "2002", event: "Création de la Cour pénale internationale (CPI)" },
    { year: "2003", event: "Invasion de l'Irak : division du Conseil de sécurité de l'ONU" },
    { year: "2005", event: "Rapport Blair : réforme du Conseil de sécurité de l'ONU" },
    { year: "2007", event: "Création du G20 : réponse à la crise financière asiatique de 1997" },
    { year: "2008", event: "Crise financière mondiale : réforme du système monétaire international" },
    { year: "2009", event: "Sommet de Copenhague : échec des négociations climatiques" },
    { year: "2012", event: "Conférence Rio+20 : développement durable et économie verte" },
    { year: "2013", event: "Création de l'Union africaine (remplacement de l'OUA)" },
    { year: "2015", event: "Accord de Paris sur le climat : engagement universel contre le changement climatique" },
    { year: "2015", event: "Objectifs de développement durable (ODD) pour remplacer les OMD" },
    { year: "2016", event: "Accord de Paris sur le climat entre en vigueur" },
    { year: "2017", event: "Sommet de Paris pour le climat : réaffirmation des engagements" },
    { year: "2019", event: "Création de l'Alliance solaire internationale (ISA)" },
    { year: "2020", event: "Pandémie de COVID-19 : réponse internationale coordonnée (COVAX, OMS)" },
    { year: "2021", event: "Sommet des Nations Unies sur les systèmes alimentaires" },
    { year: "2022", event: "Invasion russe de l'Ukraine : sanctions internationales coordonnées" },
    { year: "2023", event: "Accord de Nouakchott : création d'une zone de libre-échange continentale africaine" },
    { year: "2024", event: "Sommet sur la paix en Ukraine : négociations multilatérales" },
    { year: "2025", event: "Réforme des institutions internationales : vers une gouvernance plus inclusive" }
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
          <span className="text-gray-900 font-medium">Chronologie - Gouvernance mondiale</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de la gouvernance mondiale
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            De Westphalie aux défis contemporains, l'évolution des institutions internationales,
            des crises globales et des réponses collectives aux enjeux mondiaux.
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

export default GouvernanceMondialeChronologiePage;
