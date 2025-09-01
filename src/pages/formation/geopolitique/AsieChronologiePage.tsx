import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, Calendar, Clock, MapPin, Users, Coins, Shield } from 'lucide-react';

const AsieChronologiePage = () => {
  const events = [
    { year: "1842", event: "Traité de Nankin, La Chine cède Hong Kong aux Britanniques" },
    { year: "1854", event: "Traité de Kanagawa qui ouvre l'économie japonaise aux marchés occidentaux (suite à l'ouverture des ports de commerce par le Commodore Matthew Perry. Le shogun est contraint de signer le traité de Kanagawa qui permet aux Américains de débarquer dans plusieurs ports et de se rendre à Osaka et à Edo" },
    { year: "1860", event: "Saccage du Palais d’été de Pékin par les occidentaux" },
    { year: "1868", event: "Restauration de Meiji au Japon" },
    { year: "1876-1879", event: "Famine en Chine qui fait plus de 9 millions de morts" },
    { year: "1894-1895", event: "1ère Guerre sino-japonaise, défaite de la Chine, qui cède Formose (Taïwan), les îles Pescadores, le Liaodong" },
    { year: "1898", event: "Les Etats-Unis occupent les Philippines" },
    { year: "1904-1905", event: "Lourde défaite de la Russie dans la guerre Russo-japonaise" },
    { year: "1900", event: "Révolte des Boxeurs menée en Chine contre l'influence commerciale et politique occidentale dans l'Empire du milieu" },
    { year: "1910", event: "Le Japon annexe la Corée qui devient une colonie Japonaise" },
    { year: "1931", event: "Annexion de la Manchourie (région de charbon) par le Japon" },
    { year: "1941", event: "Raid militaire Japonais sur Pearl Harbour le 7 décembre, entrée en guerre des US" },
    { year: "1945", event: "Bombes nucléaires le 6 et 9 août sur Hiroshima et Nagasaki" },
    { year: "1947", event: "Indépendance de l’Inde. Deux États indépendants naissent de l'éclatement de l'Empire britannique des Indes : l'Union indienne à majorité hindoue et le Pakistan. 12 millions de personnes déplacées." },
    { year: "1948", event: "Guerre Indo-Pakistanaise au Cachemire" },
    { year: "1946-1954", event: "La Guerre d’Indochine entre la France et le Vietminh (Communistes). Echec de la France à Dien Bien Phu. La France donne l’indépendance dans les accords de Genève en 1954. La partition entre les 2 Vietnam contribue au déclenchement de la guerre du Vietnam" },
    { year: "1949", event: "Arrivée au pouvoir de Mao en Chine, instauration de la République Populaire de Chine. Les nationalistes de Tchang Kai-Shek se réfugient à Taïwan." },
    { year: "1949", event: "Indépendance de l’Indonésie sous Soekarno" },
    { year: "1949", event: "Plan Dodge au Japon sur la restructuration économique du pays." },
    { year: "1950-1953", event: "Guerre de Corée" },
    { year: "1951", event: "Annexion du Tibet par la Chine" },
    { year: "1951", event: "Accords de San Francisco de paix avec le Japon. Le Japon reconnaît l’indépendance de la Corée, renonce à Taïwan, aux Pescadores, aux Kouriles, au sud de Sakhaline, à tout droit sur la zone antarctique et aux îles Spratley et Paracel" },
    { year: "1951", event: "Signature de l'ANZUS (Australia, New Zealand, United States Security Treaty) se dressant contre l'éventuelle renaissance du militarisme japonais." },
    { year: "1954", event: "Accords de Genève qui mettent fin à la Première Guerre d’Indochine. Le secrétaire d’Etat Américain John Foster Dulles refuse de serrer la main à son homologue Zhou Enlai" },
    { year: "1954", event: "Création de l’OTASE, L'Organisation du Traité de l'Asie du Sud-Est, ou Pacte de Manille, pacte militaire pro occidental sous l’impulsion américaine contre le communisme, réunissant les US, la GB, la FR, l’Australie, le Pakistan, les Philippines, la Thaïlande et la Nouvelle Zélande. Dissout en 1977, son action est limité et son poids relatif." },
    { year: "1955", event: "Conférence de Bandung, mouvement des non-alignés autour de l’Inde" },
    { year: "1956", event: "Mouvement des Cents Fleurs, le gouvernement Chinois demande aux élites de s’exprimer sur le gouvernement." },
    { year: "1958", event: "Début de la grande famine de Chine qui durera jusqu’en 1962 (+20M de morts). Début du Grand bond en avant de modernisation des appareils de productions chinois." },
    { year: "1960", event: "Rupture des relations de la Chine avec l’URSS" },
    { year: "1960s", event: "Début de l’essor des Dragons : Taiwan, Corée, HK, Singapour, aussi appelés NPIA, Nouveaux pays industrialisés d’Asie" },
    { year: "1964-1975", event: "Guerre du Vietnam" },
    { year: "1964", event: "Les Jeux olympiques de Tokyo marquent le retour du Japon sur la scène internationale en tant que grande puissance." },
    { year: "1965", event: "Indépendance de Singapour" },
    { year: "1967", event: "Création de l’ASEAN par les US pendant la guerre Froide pour créer un pôle fort face au communisme. 1992 : Accords de libre-échange Asiatique dans le cadre de l’ASEAN, qui s’est ouverte à la Chine, au Japon et à la Corée du Sud pour devenir l’ASEAN+3 en 1997. 1998 : libre-circulation des IDE dans l'industrie et l'agriculture." },
    { year: "1971", event: "Création du Bangladesh" },
    { year: "1971", event: "La Chine est reconnue à l’ONU à la place de Taïwan" },
    { year: "1972", event: "Visite de Nixon en Chine qui ouvre la voie de la normalisation des US" },
    { year: "1973", event: "Accords de Paris, fin de la guerre du Vietnam et de la démilitarisation" },
    { year: "1975-1979", event: "Génocide Cambodgien sous l’égide de Pol Pot, leader des Khmers rouges, qui fait 1,7M morts." },
    { year: "1976", event: "Mort de Mao, période de transition en Chine" },
    { year: "1978", event: "Deng Xiaoping mène les 4 modernisations" },
    { year: "1978", event: "Traité de paix et d’amitié entre le Japon et la Chine" },
    { year: "1979", event: "Ouverture des ZES destinées à attirer les investissements étrangers L’importation des technologies étrangères (la « copie créatrice ») est au cœur du processus d’industrialisation" },
    { year: "1979", event: "Début de la politique de l’enfant unique en Chine" },
    { year: "1980s", event: "Essor des Tigres : « nouveaux pays exportateurs » (NPE) : la Thaïlande, la Malaisie, l’Indonésie, le Viêt Nam et les Philippines." },
    { year: "1981", event: "Accords VRA d’autolimitation entre le Japon et les US sur l’automobile" },
    { year: "1982", event: "Accords VRA d’autolimitation entre la Corée du Sud et les US sur la sidérurgie." },
    { year: "1984", event: "Explosion dans une usine de pesticides à Bhopal en Inde : 2 600 morts, 20 000 handicapés à vie" },
    { year: "1985", event: "Les échanges transpacifiques dépassent les échanges transatlantiques" },
    { year: "1985", event: "SAARC (South Asia Association for Regional Cooperation), créé sous l’égide de l’Inde. Mais aujourd’hui, L'Inde ne réalise que 1% de ses IDE dans la SAARC. L'Inde pèse plus de 80% du PIB de la zone ce qui limite la dynamique économique." },
    { year: "1988", event: "Jeux Olympiques en Corée du Sud" },
    { year: "1989", event: "Révolution étudiante en Chine, massacres et répressions. Image de la place Tiananmen" },
    { year: "1989", event: "Le Japon est l’un des douze États membres fondateurs de l’APEC (Asia-Pacific Economic Cooperation), forum de coopération économique des pays de l’Asie et du pacifique. pour créer une vaste zone de libre-échange. 21 pays membres." },
    { year: "1990-1991", event: "Crise Japonaise liée à l’éclatement de la bulle spéculative autour de l’immobilier principalement. Effondrement des valeurs de la bourse de Tokyo, faillite des sociétés de courtage" },
    { year: "1993", event: "L'ASEAN Regional Forum (ARF) est le premier grand forum multilatéral de la région pour des consultations officielles sur les questions de sécurité en Asie Pacifique. Il regroupe désormais 26 membres." },
    { year: "1996", event: "Création de l'organisation de Shanghai, regroupant Chine, Russie, Kazakhstan, Kirghizstan et Tadjikistan." },
    { year: "1997", event: "Crise financière en Asie du Sud-Est" },
    { year: "1997", event: "Premier sommet de l’ASEAN+3 (Association des nations de l’Asie du Sud-Est, plus la Chine, la Corée du Sud et le Japon)." },
    { year: "1997", event: "Hong Kong est rétrocédé à la Chine, colonie Britannique depuis le traité de Nankin de 1842" },
    { year: "1999", event: "Rétrocession de Macao, colonie portugaise, à la Chine" },
    { year: "2001", event: "La Chine intègre l’OMC" },
    { year: "2007", event: "Le Vietnam intègre l’OMC" },
    { year: "2008", event: "Jeux olympiques de Pékin" },
    { year: "2010", event: "Mise en place du Fond Monétaire Asiatique en cas de crise. 100 milliards de dollars de fonds de réserves" },
    { year: "2011", event: "Séisme, Tsunami et Désastre Nucléaire au Japon (Fukushima)" },
    { year: "2013", event: "Mise en place des Abenomics, politique des 3 flèches, pour sortir de 2 décennies de déflation. Une politique monétaire non orthodoxe (assouplissement monétaire), Une politique de relance budgétaire (investissement dans les infrastructures, plan d’une ampleur de quelque 2 % du PIB, augmentation de la TVA), Des réformes structurelles (lutte contre le chômage, création d’emplois)" },
    { year: "2013", event: "Au Bangladesh. 1 127 morts dans l’effondrement du Rana Plaza, qui abritait plusieurs ateliers de confection travaillant pour diverses marques internationales de vêtements." },
    { year: "2014", event: "Banque Asiatique pour les infrastructures AIIB (Asian Infrastructure Investment Bank), stratégie développée par la Chine, structurer la région. 57 membres actuels." },
    { year: "2015", event: "Abandon de la politique de l’enfant unique en Chine" },
    { year: "2017", event: "Destitution de Park Geun-Hye, présidente de Corée du Sud" },
    { year: "2017", event: "Montée des tensions entre les US et la Corée du Nord suite aux essais nucléaires de Kim Jong-un" },
    { year: "2018", event: "Mars : Trump bloque l’OPA hostile de Broadcom, fabriquant de semi-conducteurs basé en partie à Singapour sur Qualcomm." },
    { year: "2018", event: "Début de la guerre commerciale sino-américaine, avec imposition de tarifs douaniers par les États-Unis sur les importations chinoises" },
    { year: "2018", event: "Sommets intercoréens et sommet Trump-Kim à Singapour, visant la dénucléarisation de la Corée du Nord" },
    { year: "2019", event: "Grandes manifestations pro-démocratie à Hong Kong contre une loi d'extradition vers la Chine continentale" },
    { year: "2019", event: "L'Inde révoque le statut spécial du Cachemire, menant à des tensions avec le Pakistan" },
    { year: "2019", event: "Attentats de Pâques au Sri Lanka, tuant plus de 250 personnes, revendiqués par l'État islamique" },
    { year: "2020", event: "Pandémie de COVID-19 émerge à Wuhan en Chine, se propageant mondialement et causant des confinements massifs en Asie" },
    { year: "2020", event: "Affrontements frontaliers sino-indiens dans la vallée de Galwan, tuant des dizaines de soldats" },
    { year: "2020", event: "Signature du Partenariat régional économique global (RCEP), la plus grande zone de libre-échange au monde, impliquant 15 pays asiatiques" },
    { year: "2021", event: "Coup d'État militaire au Myanmar, renversant Aung San Suu Kyi et menant à des protestations massives et une répression violente" },
    { year: "2021", event: "Jeux olympiques de Tokyo, reportés de 2020 en raison de la pandémie" },
    { year: "2021", event: "Prise de Kaboul par les Talibans en Afghanistan, fin de la présence américaine après 20 ans de guerre" },
    { year: "2022", event: "Jeux olympiques d'hiver à Pékin, marqués par des boycotts diplomatiques occidentaux" },
    { year: "2022", event: "Assassinat de l'ancien Premier ministre japonais Shinzo Abe lors d'un discours de campagne" },
    { year: "2022", event: "Visite de Nancy Pelosi à Taïwan, provoquant des exercices militaires chinois massifs autour de l'île" },
    { year: "2023", event: "L'Inde dépasse la Chine en tant que pays le plus peuplé du monde" },
    { year: "2023", event: "Le Japon annonce un doublement de son budget de défense d'ici 2027, marquant un tournant dans sa politique militaire" },
    { year: "2023", event: "Réconciliation entre le Japon et la Corée du Sud sur les questions historiques de la Seconde Guerre mondiale" },
    { year: "2024", event: "Élections présidentielles à Taïwan, victoire de Lai Ching-te du Parti démocrate progressiste, accentuant les tensions avec la Chine" },
    { year: "2024", event: "Élections générales en Inde, Narendra Modi remporte un troisième mandat malgré une performance plus faible de son parti BJP" },
    { year: "2024", event: "Protestations au Bangladesh contre les quotas dans les emplois publics, menant à la démission du gouvernement et à une instabilité politique" },
    { year: "2024", event: "Renforcement des liens entre la Corée du Nord et la Russie, avec des livraisons d'armes pour la guerre en Ukraine" },
    { year: "2025", event: "Congrès national du peuple en Chine, avec annonces potentielles sur la relance économique face au ralentissement" },
    { year: "2025", event: "Élections en Thaïlande, marquées par des débats sur la réforme constitutionnelle et les droits humains" },
    { year: "2025", event: "Poursuite des conflits au Myanmar, avec avancées de l'Armée d'Arakan et violence anti-Hindu au Bangladesh" },
    { year: "2025", event: "Intensification des tensions en mer de Chine méridionale, avec incidents impliquant les Philippines et la Chine" },
    { year: "2025", event: "Jeux mondiaux à Chengdu en Chine, soulignant la diplomatie sportive de Pékin" },
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
            <Calendar className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie de l'Asie
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Une chronologie complète des événements marquants de l'histoire contemporaine de l'Asie, 
            de l'ouverture des économies aux défis actuels du XXIe siècle.
          </p>
        </div>

        {/* Légende des catégories */}
        {/* <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Catégories d'événements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Politique</Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Économique</Badge>
              <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">Conflit</Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">Culturel</Badge>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Social</Badge>
            </div>
          </CardContent>
        </Card> */}

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
      </div>
    </div>
  );
};

export default AsieChronologiePage;