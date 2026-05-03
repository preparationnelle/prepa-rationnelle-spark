import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, Calendar, Clock, MapPin, Users, Coins, Shield } from 'lucide-react';

const AmeriqueLatineChronologiePage = () => {
  const events = [
    { year: "1810-1821", event: "Révolte au Mexique : Guerre d’Indépendance" },
    { year: "1813", event: "Convention de Carthagène, contre la présence des européens et espagnols" },
    { year: "1823", event: "Doctrine Monroe formulée par les US" },
    { year: "1903", event: "Quasi mise sous tutelle de la République Dominicaine par les US" },
    { year: "1912", event: "Occupation des US au Honduras" },
    { year: "1914", event: "Traité Bryan-Chamorro : Quasi protectorat du Nicaragua par les US" },
    { year: "1917", event: "Télégramme Zimmerman pour l’entrée en guerre du Mexique aux côtés de l’Allemagne" },
    { year: "1926", event: "Après le coup d’Etat de Vargas, les US interviennent au Nicaragua" },
    { year: "1930", event: "Coup d'État de Getúlio Vargas au Brésil" },
    { year: "1933", event: "Les US interviennent à Cuba pour rétablir l’ordre, après un coup d’Etat" },
    { year: "1934", event: "Traité de réciprocité US-Cuba qui supprime l’amendement Platt" },
    { year: "1934", event: "Défaite du mouvement sandiniste au Nicaragua par Somoza" },
    { year: "1936", event: "Conférence interaméricaine de consolidation de la paix à Buenos Aires, les US s’engagent « directement ou indirectement pour quelque mesure que ce soit à ne pas intervenir dans les affaires intérieures et extérieures » des pays d’Amérique Latine. Début de la politique de « bon voisinage »" },
    { year: "1937", event: "Getúlio Vargas met en place l’Estado Novo au Brésil" },
    { year: "1939", event: "Bataille du Rio de la Plata, unique opération militaire d’envergure dans le cadre de la seconde GM" },
    { year: "1945", event: "Conférence de Chapultepec : Prévoit l’instauration d’un traité commun entre les pays américains sur l’égalité des Hommes" },
    { year: "1948", event: "Loi Chilienne sur la défense permanente de la démocratie" },
    { year: "1948-1958", event: "Guerre Civile en Colombie (La Violencia)" },
    { year: "1954", event: "La CIA organise un coup d’Etat contre Arbenz au Guatemala pour défendre les intérêts américains" },
    { year: "1960-1996", event: "Guerre civile et guérilla au Guatemala" },
    { year: "1955", event: "Le président élu Kubitschek au Brésil engage un programme d’industrialisation au prix d’un endettement qui dépasse les 10%" },
    { year: "1956", event: "Tentative de coup d’Etat à Cuba contre Batista" },
    { year: "1958", event: "Siège de Santiago à Cuba par les Guérilleros. Les US reconnaissent Castro" },
    { year: "1959", event: "Castro confisque 400 000 hectares de terres aux entreprises américaines présentes à Cuba" },
    { year: "1960", event: "Création du MCCA : Marché commun centre américain" },
    { year: "1961", event: "Episode de la Baie des Cochons, les US soutiennent le débarquement d’opposants, c’est un échec" },
    { year: "1962", event: "Retour de la Guérilla au Nicaragua" },
    { year: "1964", event: "Emeutes anti-américaines au Panama" },
    { year: "1964-2016", event: "Guérilla des FARC en Colombie" },
    { year: "1966-1967", event: "Guérilla Cheguevariste en Bolivie" },
    { year: "1969", event: "Création du Pacte Andin, Communauté Andine des Nations (CAN)" },
    { year: "1973", event: "Retour des Péronistes en Argentine, inquiétude américaine" },
    { year: "1973", event: "La CIA conduit un coup d’Etat contre Allende au Chili, remplacé par Pinochet" },
    { year: "1977", event: "Présidence Carter, politique de bon voisinage, restitution du Canal de Panama" },
    { year: "1978", event: "Conflit du Beagle entre le Chili et l’Argentine, avec l’opération Soberania : les Argentins prévoient une intervention sur le territoire Chilien. Jean Paul II envoie un cardinal en médiateur. L’intervention est annulée, mais on a frôlé la guerre." },
    { year: "1979", event: "Prise de pouvoir des Sandinistes sous l’égide de Daniel Ortega, favorables au communisme." },
    { year: "1979-1992", event: "Guerre civile du Salvador" },
    { year: "1980", event: "Transition démocratique au Brésil" },
    { year: "1980", event: "Guérilla du Sentier Lumineux au Pérou (1980 à nos jours)" },
    { year: "1981", event: "Guerre du Paquisha pour les frontières entre le Pérou et l’Equateur" },
    { year: "1982", event: "Rébellion des Contras au Nicaragua avec l’appui des US contre le régime sandiniste d’Ortega" },
    { year: "1982", event: "Guerre des Malouines entre l’Argentine et l’Angleterre. Les forces argentines débarquent, les anglais ripostent. Les Argentins coulent un navire Britannique. La France déclare un embargo militaire contre l’Argentine, interdit l’exportation de ses missiles EXOCETS. S’en suit la défaite argentine." },
    { year: "1982", event: "Le Mexique annonce l'insolvabilité de la dette. Début du moratoire" },
    { year: "1983", event: "Création du Groupe de Contadora" },
    { year: "1983", event: "Opération Urgent Fury Américaine sur l’île de Grenade, menée en dehors de tout mandat de l’ONU, contre Maurice Bishop" },
    { year: "1984", event: "Création du Mouvement des paysans sans Terre" },
    { year: "1985", event: "Plan Baker" },
    { year: "1986", event: "Création du Groupe de Rio" },
    { year: "1986", event: "Fin de la dictature de Baby Doc, Jean Claude Duvalier en Haïti" },
    { year: "1989", event: "Fin de la dictature d’Alfredo Stroessner au Paraguay" },
    { year: "1989", event: "Opération Just Cause : invasion du Panama par les US après la déclaration de guerre de Manuel Noriega. L’opération dure plus d’un mois" },
    { year: "1989", event: "Plan Brady" },
    { year: "1991", event: "Traité d’Asuncion qui créé le Mercosur" },
    { year: "1992", event: "Accords de paix au Salvador" },
    { year: "1994", event: "Intervention Américaine en Haïti, débarquement pour restaurer la démocratie" },
    { year: "1994", event: "Révolte néo zapatiste au Mexique, principalement dans la région du Chiapas" },
    { year: "1995", event: "Guerre du Cenepa entre le Pérou et l’Equateur" },
    { year: "1999", event: "Election de Chavez au Venezuela" },
    { year: "2003", event: "Lancement de la Bolsa Familia au Brésil" },
    { year: "2004", event: "Création de l’ALBA (alliance bolivarienne pour les Amériques)" },
    { year: "2006", event: "Discours de Chavez à l’ONU : « Les US sont le diable incarné »" },
    { year: "2007", event: "Chavez nationalise le pétrole" },
    { year: "2006", event: "Crise de la Tortilla au Mexique" },
    { year: "2007", event: "Chavez propose dans le cadre de l’ALBA, une union militaire" },
    { year: "2014", event: "Massacre de quarante-trois étudiants mexicains à Iguala" },
    { year: "2014", event: "Récession du Brésil de 3,4%" },
    { year: "2016", event: "Récession du Venezuela de 8%, grave crise politique" },
    { year: "2016", event: "Accord de paix entre le gouvernement colombien et les FARC, mettant fin à 52 ans de conflit" },
    { year: "2016", event: "Dilma Rousseff est destituée de la présidence du Brésil pour corruption" },
    { year: "2017", event: "Prison riots au Brésil tuent plus de 130 détenus" },
    { year: "2017", event: "Landslides tuent environ 300 personnes à Mocoa en Colombie" },
    { year: "2017", event: "L'ancien président de la Chambre brésilienne Eduardo Cunha est condamné à 15 ans pour corruption liée à Petrobras" },
    { year: "2017", event: "Lenin Moreno est élu président de l'Équateur" },
    { year: "2017", event: "Plus de 23 000 meurtres au Mexique, record historique" },
    { year: "2017", event: "Le taux d'homicide en Colombie chute à 24 pour 100 000, le plus bas en 42 ans" },
    { year: "2017", event: "L'Amérique latine a le taux de meurtre le plus élevé au monde, représentant 38 % des homicides criminels globaux" },
    { year: "2017", event: "El Salvador, Honduras, Venezuela, Jamaïque et Belize ont les taux d'homicide les plus élevés au monde" },
    { year: "2017", event: "63 880 meurtres au Brésil, plus de 30 pour 100 000 habitants" },
    { year: "2018", event: "Le Venezuela lance la cryptomonnaie petro pour contourner les sanctions US" },
    { year: "2018", event: "La Chine inaugure une station de contrôle spatial en Argentine" },
    { year: "2018", event: "Pedro Pablo Kuczynski démissionne de la présidence du Pérou pour corruption, remplacé par Martín Vizcarra" },
    { year: "2018", event: "Carlos Alvarado est élu président du Costa Rica" },
    { year: "2018", event: "Plus de 30 morts dans des manifestations antigouvernementales au Nicaragua" },
    { year: "2018", event: "Miguel Díaz-Canel devient président de Cuba, succédant à Raúl Castro" },
    { year: "2018", event: "Luiz Inácio Lula da Silva est arrêté pour corruption au Brésil" },
    { year: "2018", event: "Iván Duque est élu président de la Colombie" },
    { year: "2018", event: "Premier cas de polio depuis 1991 au Venezuela" },
    { year: "2018", event: "Andrés Manuel López Obrador (AMLO) est élu président du Mexique après une campagne marquée par plus de 130 assassinats politiques" },
    { year: "2018", event: "Plus de 14 morts dans de nouvelles manifestations au Nicaragua" },
    { year: "2018", event: "Mandat d'arrêt contre l'ancien président équatorien Rafael Correa pour corruption" },
    { year: "2019", event: "Juan Guaidó se déclare président par intérim du Venezuela, reconnu par de nombreux pays" },
    { year: "2019", event: "Manifestations antigouvernementales en Haïti contre la corruption" },
    { year: "2019", event: "Le président guatémaltèque expulse la commission anticorruption CICIG" },
    { year: "2019", event: "Rupture d'un barrage à Brumadinho au Brésil tue plus de 120 personnes" },
    { year: "2019", event: "Nayib Bukele est élu président du Salvador" },
    { year: "2019", event: "Témoignages au procès d'El Chapo révèlent des pots-de-vin à des officiels mexicains" },
    { year: "2019", event: "Émeutes en prisons brésiliennes tuent 40 détenus à Manaus" },
    { year: "2019", event: "Inflation en Argentine atteint 57 %" },
    { year: "2019", event: "Émeute en prison brésilienne à Altamira tue 52 détenus" },
    { year: "2019", event: "Le peso argentin perd 25 % en un jour, chute boursière record" },
    { year: "2019", event: "Incendies records en Amazonie brésilienne dus aux politiques de Bolsonaro" },
    { year: "2019", event: "Crise politique au Pérou : Vizcarra dissout le Congrès, qui le suspend temporairement" },
    { year: "2019", event: "Révélation de pots-de-vin d'El Chapo au président hondurien" },
    { year: "2019", event: "Manifestations contre le gouvernement en Équateur mènent à un couvre-feu" },
    { year: "2019", event: "Cartel Jalisco tue 13 policiers au Mexique" },
    { year: "2019", event: "Bataille à Culiacán au Mexique lors de l'arrestation du fils d'El Chapo" },
    { year: "2019", event: "Violentes manifestations contre le gouvernement au Chili contre le coût de la vie" },
    { year: "2019", event: "Alberto Fernández est élu président de l'Argentine" },
    { year: "2019", event: "Evo Morales démissionne de la présidence bolivienne après des manifestations" },
    { year: "2019", event: "Lula est libéré de prison au Brésil" },
    { year: "2019", event: "Le Chili accepte un référendum sur une nouvelle constitution après des manifestations" },
    { year: "2019", event: "Luis Lacalle Pou est élu président de l'Uruguay" },
    { year: "2019", event: "Le real brésilien atteint un record bas" },
    { year: "2019", event: "Accusations contre un ancien officiel mexicain pour liens avec cartel Sinaloa" },
    { year: "2019", event: "35 588 meurtres au Mexique, record" },
    { year: "2020", event: "Élections parlementaires au Pérou : Parti Fuerza Popular chute après scandale" },
    { year: "2020", event: "Alejandro Giammattei est élu président du Guatemala" },
    { year: "2020", event: "Pandémie de COVID-19 frappe l'Amérique latine durement" },
    { year: "2020", event: "Rafael Correa condamné pour corruption en Équateur, fuit le pays" },
    { year: "2020", event: "Le parti de Keiko Fujimori perd massivement aux élections péruviennes" },
    { year: "2020", event: "Manuel Merino devient président intérimaire du Pérou après la destitution de Vizcarra, mais démissionne après manifestations" },
    { year: "2020", event: "Francisco Sagasti devient président intérimaire du Pérou" },
    { year: "2020", event: "Luis Arce est élu président de la Bolivie" },
    { year: "2021", event: "Maduro reprend le contrôle du parlement vénézuélien après élections boycottées" },
    { year: "2021", event: "Cuba ouvre son économie au privé" },
    { year: "2021", event: "Émeutes en prisons équatoriennes tuent 62 détenus" },
    { year: "2021", event: "Manifestations antigouvernementales en Colombie" },
    { year: "2021", event: "Guillermo Lasso élu président de l'Équateur" },
    { year: "2021", event: "Arrestation de l'ex-présidente intérimaire bolivienne Jeanine Áñez pour coup d'État" },
    { year: "2021", event: "Démission des chefs militaires brésiliens contre la gestion COVID de Bolsonaro" },
    { year: "2021", event: "Sentier Lumineux tue 16 personnes au Pérou" },
    { year: "2021", event: "Manifestations anti-Bolsonaro au Brésil" },
    { year: "2021", event: "Arrestations d'opposants au Nicaragua avant élections" },
    { year: "2021", event: "Pedro Castillo élu président du Pérou" },
    { year: "2021", event: "Assassinat du président haïtien Jovenel Moïse" },
    { year: "2021", event: "Manifestations antigouvernementales à Cuba" },
    { year: "2021", event: "Mexique abandonne l'initiative Mérida contre les narcotrafiquants" },
    { year: "2021", event: "Séisme tue plus de 2 000 en Haïti" },
    { year: "2021", event: "El Salvador adopte le bitcoin comme monnaie légale" },
    { year: "2021", event: "Émeutes en prisons équatoriennes tuent plus de 100 détenus" },
    { year: "2021", event: "Capture du narcotrafiquant Otoniel en Colombie" },
    { year: "2021", event: "Xiomara Castro élue présidente du Honduras" },
    { year: "2021", event: "Accident de camion tue plus de 50 migrants au Mexique" },
    { year: "2021", event: "Gabriel Boric élu président du Chili" },
    { year: "2021", event: "Explosion de camion-citerne tue plus de 50 en Haïti" },
    { year: "2021", event: "Inflation au Brésil dépasse 10 %" },
    { year: "2021", event: "Près de 100 000 disparus au Mexique dus aux cartels" },
    { year: "2022", event: "République dominicaine construit un mur frontalier avec Haïti" },
    { year: "2022", event: "Arrestation de l'ex-président hondurien Juan Orlando Hernández pour narcotrafic" },
    { year: "2022", event: "États d'urgence au Salvador après 62 meurtres de gangs en un jour" },
    { year: "2022", event: "Manifestations au Pérou contre l'inflation et le gouvernement Castillo" },
    { year: "2022", event: "Gustavo Petro élu président de la Colombie, premier de gauche" },
    { year: "2022", event: "Assassinat de deux journalistes et un écologiste en Amazonie brésilienne" },
    { year: "2022", event: "Tentative de coup d'État au Pérou, Castillo arrêté, Dina Boluarte devient présidente" },
    { year: "2022", event: "Lula da Silva réélu président du Brésil contre Bolsonaro" },
    { year: "2023", event: "Manifestations au Pérou contre Boluarte font des dizaines de morts" },
    { year: "2023", event: "Bernardo Arévalo élu président du Guatemala malgré tentatives de blocage" },
    { year: "2023", event: "Javier Milei élu président de l'Argentine avec un programme ultralibéral" },
    { year: "2023", event: "Daniel Noboa élu président de l'Équateur" },
    { year: "2023", event: "L'Équateur déclare l'état d'urgence face à la violence des gangs" },
    { year: "2023", event: "Record de meurtres au Mexique, plus de 30 000" },
    { year: "2023", event: "L'Équateur a le taux de meurtre le plus élevé d'Amérique latine" },
    { year: "2024", event: "Violence en Équateur : gangs attaquent une station TV, état de guerre déclaré" },
    { year: "2024", event: "Claudia Sheinbaum élue présidente du Mexique, première femme" },
    { year: "2024", event: "José Raúl Mulino élu président du Panama" },
    { year: "2024", event: "Nicolás Maduro réélu au Venezuela, résultats contestés menant à des manifestations" },
    { year: "2024", event: "Inondations catastrophiques au Brésil tuent plus de 150 personnes" },
    { year: "2024", event: "Haïti : gangs contrôlent 80 % de Port-au-Prince, mission kenyane pour stabiliser" },
    { year: "2025", event: "Sommet BRICS au Brésil, focus sur coopération économique" },
    { year: "2025", event: "Élections au Chili, retour possible de la droite" },
    { year: "2025", event: "Crise persistante au Venezuela, sanctions US renforcées" },
    { year: "2025", event: "Croissance économique régionale prévue à 2,1 % selon la Banque mondiale, avec défis climatiques" },
    { year: "2025", event: "Intensification de la violence des gangs en Équateur et au Salvador, malgré états d'urgence" },
    { year: "2025", event: "Mouvements de mères des disparus en Amérique latine gagnent en visibilité internationale" },
  ];

  const groupEventsByDecade = (events: typeof events) => {
    const grouped: { [key: string]: typeof events } = {};
    events.forEach(event => {
      const yearNum = parseInt(event.year.substring(0, 4)); // Get the start year for grouping
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
        
        {/* En-tête */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de l'Amérique Latine
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Une chronologie complète des événements marquants de l'histoire contemporaine de l'Amérique Latine, 
            des luttes pour l'indépendance aux défis actuels du XXIe siècle.
          </p>
        </div>

        {Object.entries(groupedEvents).map(([decade, decadeEvents]) => (
          <div key={decade} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-300 pb-2">
              {decade}
            </h2>
            <div className="space-y-6">
              {decadeEvents.map((item, index) => (
                <Card key={index} className="border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-24 text-lg font-semibold text-yellow-700 mr-4">
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
      </div>
    </div>
  );
};

export default AmeriqueLatineChronologiePage;