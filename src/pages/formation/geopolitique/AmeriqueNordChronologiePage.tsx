import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, Calendar, Clock, MapPin, Users, Coins, Shield } from 'lucide-react';

const AmeriqueNordChronologiePage = () => {
  const events = [
    { year: "1492", event: "Christophe Colomb découvre les Amériques, marquant le début de l'exploration européenne en Amérique du Nord" },
    { year: "1534", event: "Jacques Cartier explore le fleuve Saint-Laurent et revendique le territoire pour la France" },
    { year: "1607", event: "Fondation de Jamestown, première colonie anglaise permanente en Amérique du Nord" },
    { year: "1608", event: "Samuel de Champlain fonde Québec, établissant la Nouvelle-France" },
    { year: "1620", event: "Arrivée du Mayflower et fondation de Plymouth par les Pèlerins" },
    { year: "1756-1763", event: "Guerre de Sept Ans (French and Indian War) en Amérique du Nord" },
    { year: "1763", event: "Traité de Paris : la France cède la Nouvelle-France à la Grande-Bretagne" },
    { year: "1773", event: "Boston Tea Party, protestation contre la taxation britannique" },
    { year: "1775-1783", event: "Guerre d'Indépendance américaine" },
    { year: "1776", event: "Déclaration d'Indépendance des États-Unis" },
    { year: "1783", event: "Traité de Paris : reconnaissance de l'indépendance américaine" },
    { year: "1787", event: "Convention de Philadelphie et rédaction de la Constitution américaine" },
    { year: "1803", event: "Achat de la Louisiane par les États-Unis à la France" },
    { year: "1812-1815", event: "Guerre anglo-américaine de 1812" },
    { year: "1845", event: "Annexion du Texas par les États-Unis" },
    { year: "1846-1848", event: "Guerre américano-mexicaine" },
    { year: "1848", event: "Découverte d'or en Californie, début de la ruée vers l'or" },
    { year: "1861-1865", event: "Guerre de Sécession américaine" },
    { year: "1867", event: "Achat de l'Alaska aux Russes par les États-Unis" },
    { year: "1867", event: "Création de la Confédération canadienne (Acte de l'Amérique du Nord britannique)" },
    { year: "1869", event: "Achèvement du premier chemin de fer transcontinental américain" },
    { year: "1885", event: "Achèvement du chemin de fer Canadien Pacifique" },
    { year: "1898", event: "Guerre hispano-américaine, annexion de Porto Rico et des Philippines" },
    { year: "1898", event: "Annexion d'Hawaï par les États-Unis" },
    { year: "1903", event: "Création de la province d'Alberta et de Saskatchewan au Canada" },
    { year: "1914-1918", event: "Première Guerre mondiale : participation des États-Unis et du Canada" },
    { year: "1917", event: "Entrée des États-Unis dans la Première Guerre mondiale" },
    { year: "1920", event: "19e amendement : droit de vote des femmes aux États-Unis" },
    { year: "1929", event: "Krach boursier de Wall Street, début de la Grande Dépression" },
    { year: "1933-1939", event: "New Deal de Franklin D. Roosevelt" },
    { year: "1939-1945", event: "Seconde Guerre mondiale : participation des États-Unis et du Canada" },
    { year: "1941", event: "Attaque de Pearl Harbor, entrée des États-Unis dans la Seconde Guerre mondiale" },
    { year: "1945", event: "Fin de la Seconde Guerre mondiale, émergence des États-Unis comme superpuissance" },
    { year: "1947-1991", event: "Guerre froide entre les États-Unis et l'URSS" },
    { year: "1949", event: "Création de l'OTAN avec participation américaine et canadienne" },
    { year: "1950-1953", event: "Guerre de Corée avec participation américaine et canadienne" },
    { year: "1957", event: "Création de NORAD (défense aérienne conjointe USA-Canada)" },
    { year: "1960", event: "Élection de John F. Kennedy à la présidence américaine" },
    { year: "1962", event: "Crise des missiles de Cuba" },
    { year: "1963", event: "Assassinat de John F. Kennedy" },
    { year: "1964-1975", event: "Guerre du Vietnam avec participation américaine" },
    { year: "1968", event: "Assassinats de Martin Luther King Jr. et Robert Kennedy" },
    { year: "1969", event: "Premier alunissage d'Apollo 11" },
    { year: "1970", event: "Crise d'Octobre au Québec" },
    { year: "1972", event: "Watergate : scandale politique américain" },
    { year: "1974", event: "Démission du président Nixon" },
    { year: "1980", event: "Référendum sur la souveraineté du Québec (Non : 60%)" },
    { year: "1988", event: "Accord de libre-échange Canada-États-Unis" },
    { year: "1989", event: "Chute du mur de Berlin, fin symbolique de la Guerre froide" },
    { year: "1991", event: "Fin officielle de la Guerre froide" },
    { year: "1991", event: "Guerre du Golfe avec participation américaine et canadienne" },
    { year: "1994", event: "Entrée en vigueur de l'ALÉNA (NAFTA)" },
    { year: "1995", event: "Second référendum sur la souveraineté du Québec (Non : 50,58%)" },
    { year: "2001", event: "Attentats du 11 septembre aux États-Unis" },
    { year: "2001-2021", event: "Guerre en Afghanistan avec participation américaine et canadienne" },
    { year: "2003-2011", event: "Guerre d'Irak dirigée par les États-Unis" },
    { year: "2008", event: "Crise financière mondiale initiée aux États-Unis" },
    { year: "2009", event: "Élection de Barack Obama, premier président afro-américain" },
    { year: "2016", event: "Élection de Donald Trump à la présidence américaine" },
    { year: "2017", event: "Retrait des États-Unis de l'Accord de Paris sur le climat" },
    { year: "2018", event: "Renégociation de l'ALÉNA, création de l'ACEUM (USMCA)" },
    { year: "2020", event: "Pandémie de COVID-19, impact majeur sur l'Amérique du Nord" },
    { year: "2020", event: "Élection de Joe Biden à la présidence américaine" },
    { year: "2021", event: "Retour des États-Unis dans l'Accord de Paris" },
    { year: "2021", event: "Fin de la guerre en Afghanistan" },
    { year: "2022", event: "Invasion de l'Ukraine par la Russie : réponse occidentale coordonnée" },
    { year: "2023", event: "Sommet des leaders nord-américains (États-Unis, Canada, Mexique)" },
    { year: "2024", event: "Élections présidentielles américaines avec retour de Donald Trump" },
    { year: "2025", event: "Jeux olympiques d'hiver à Salt Lake City (préparations), retour aux États-Unis" }
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
          <span className="text-gray-900 font-medium">Chronologie - Amérique du Nord</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de l'Amérique du Nord
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Une chronologie complète des événements marquants de l'histoire de l'Amérique du Nord, 
            de la découverte des Amériques aux défis contemporains du XXIe siècle.
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
            to="/formation/geopolitique" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Retour à la formation géopolitique
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmeriqueNordChronologiePage;