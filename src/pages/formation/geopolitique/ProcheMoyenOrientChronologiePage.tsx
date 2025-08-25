import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, Calendar, Clock, MapPin, Users, Coins, Shield } from 'lucide-react';

const ProcheMoyenOrientChronologiePage = () => {
  const events = [
    { year: "1906", event: "Incident d'Aqaba. Crise diplomatique quant au tracé du chemin de fer dans la région du Hedjaz." },
    { year: "1914", event: "Les Britanniques placent le Koweït sous protectorat, prennent la ville de Bassorah" },
    { year: "1915", event: "Génocide Arménien : entre 800 000 et 1 200 000 morts" },
    { year: "1915", event: "Opération Navale contre les Dardanelles de la part des Britanniques, premier échec dans la région pour les occidentaux" },
    { year: "1916", event: "Protectorat Britannique sur le Qatar." },
    { year: "1916", event: "Accords de Sykes-Picot qui partage la région en zones d'occupations et confère des mandats aux puissances occidentales" },
    { year: "1917", event: "Déclaration de Balfour : l'Angleterre est favorable à la création d'un Etat hébreu en Palestine" },
    { year: "1920", event: "Conférence de San Remo, puis traité de Sèvres pour fixer le sort des provinces de l'Empire Ottoman" },
    { year: "1922", event: "Indépendance de l'Egypte" },
    { year: "1927", event: "Traité de Djeddah, La Grande Bretagne reconnait l'indépendance de l'Arabie Saoudite" },
    { year: "1928", event: "Accords d'Achnacarry de la ligne rouge, accords de cartellisation et de redistribution du Proche et Moyen Orient entre les Majors, les « sept sœurs pétrolières »." },
    { year: "1932", event: "Le Royaume-Uni reconnait l'indépendance de l'Irak" },
    { year: "1945", event: "Création de la Ligue Arabe" },
    { year: "1945", event: "Pacte du Quincy : Alliance de Washington et de l'Arabie Saoudite" },
    { year: "1948", event: "L'ONU déclare la création de l'Etat d'Israël en Palestine" },
    { year: "1948-1949", event: "Guerre Israélo-Arabe suite à la déclaration de l'ONU" },
    { year: "1952", event: "La Turquie intègre l'Otan" },
    { year: "1952", event: "Nationalisation du Pétrole par Mossadegh en Iran" },
    { year: "1955", event: "Pacte de Bagdad signé par l'Irak, la Turquie, le Pakistan, l'Iran et le Royaume-Uni. Les États-Unis rejoignent le comité militaire de l'alliance en 1958. Il a pour but de limiter la montée en puissance communiste soviétique dans la région, avec la mise en place d'un « Cordon sanitaire »" },
    { year: "1956", event: "Nationalisation de la compagnie gérant le Canal de Suez par Nasser : « Le canal est désormais à nous, bien à nous » (Nasser)." },
    { year: "1956", event: "Guerre de Suez en réponse à la nationalisation du canal, Opération Kadesh qui oppose l'Egypte à l'alliance du Protocole de Sèvres (Israël (guerre préventive), France, GB). Malgré la victoire de l'alliance, la pression des US et de l'URSS les poussent à battre en retraite. Les soviétiques menacent d'une frappe nucléaire et d'une intervention militaire. Cet évènement montre que l'impératif d'une relative stabilité de l'ordre mondial entre les deux « géants » ne peut être remis en cause, même par d'anciennes grandes puissances comme la France et le Royaume-Uni. Véritable tournant dans la position d'ingérence occidentale." },
    { year: "1958", event: "La République Arabe Unie est créée sous l'égide du parti Baas et de son fondateur Michel Aflak ainsi que de Nasser, alors président de l'Egypte. Cet immense territoire de plus d'un million de km² naît de l'union de l'Egypte et de la Syrie, notamment pour parer à la menace communiste et à l'influence américaine. Nasser annonce la dissolution de la RAU en 1961" },
    { year: "1958", event: "Ephémère union hachémite de la Jordanie et de l'Irak" },
    { year: "1959", event: "1er congrès du Pétrole au Caire sur la concertation des pays producteurs de pétrole, acte de naissance de l'OPEP" },
    { year: "1960", event: "Création de l'OPEP" },
    { year: "1960", event: "Coup d'Etat militaire avec l'arrivée au pouvoir du général Gürsel qui fixe la Turquie dans le camp américain/occidental. Défend l'héritage Kémaliste, d'un Etat dirigiste, laïque." },
    { year: "1961", event: "Indépendance du Koweït. L'Irak masse son armée à la frontière et veut s'emparer de sa « 19ème province ». Les Britanniques envoient des troupes pour protéger cette indépendance." },
    { year: "1964", event: "Création de l'OLP, Organisation de Libération de la Palestine qui fédère autour du FATAH les forces palestiniennes. Revendique la « Destruction d'Israël » comme un objectif fondamental." },
    { year: "1967", event: "Guerre des Six jours qui oppose Israël à l'Egypte, la Jordanie et la Syrie. Les Israéliens s'emparent du Sinaï, du Golan, de la Bande de Gaza et de la Cisjordanie. Seulement 300 morts Israéliens contre 6000 Égyptiens, Jordaniens et Syriens." },
    { year: "1967", event: "La Résolution 242 qui prévoit l'évacuation des territoires occupés par Israël est rejetée par le pays" },
    { year: "1968", event: "Création de l'OPAEP, l'Organisation des pays arabes exportateurs de pétrole" },
    { year: "1973", event: "Guerre du Kippour : L'Egypte et la Syrie attaquent par surprise Israël, en lançant l'opération Badr dans la région du Canal de Suez. La ligne Bar-Lev est détruite. Soviétiques et Américains fournissent les armes à leurs alliés respectifs." },
    { year: "1973", event: "Premier choc pétrolier" },
    { year: "1975", event: "Début de la Guerre Civile au Liban. Elle est le fruit de la non résolution Israélo-Palestinienne. C'est un conflit autour de la place des Palestiniens au Liban." },
    { year: "1978", event: "Accords de Camp David : Accords-cadres signés à Washington par Jimmy Carter, président des États-Unis, Anouar el-Sadate, chef de l'État égyptien, et Menahem Begin, Premier ministre d'Israël, qui prévoit la restitution du Sinaï à L'Egypte." },
    { year: "1979", event: "Chute du Shah d'Iran , remplacé par Khomeini, révolution islamiste" },
    { year: "1979", event: "L'URSS envahit l'Afghanistan, occupation qui dure jusqu'en 1989. Elle a le sentiment de perdre la zone face à l'Islamisme." },
    { year: "1979", event: "2ème choc pétrolier" },
    { year: "1979", event: "Soulèvement de la Mecque" },
    { year: "1980-1988", event: "Guerre Iran-Irak : Saddam Hussein déclare la guerre à l'Iran, soutenu par les US et la France qui financent l'effort de guerre Irakien. Guerre de front et d'usure, apogée en 1986 lorsque l'Iran s'empare de Fao, port d'embarquement de pétrole et commence l'offensive sur Bassora. La guerre a renforcé l'importance du régime khomeynisme en Iran" },
    { year: "1987", event: "Première Intifada : Jets de pierre sur l'armée Tsahal, début de l'insurrection Palestinienne. Médiatisation du conflit par l'OLP. De cet évènement découle la création du HAMAS." },
    { year: "1990", event: "Invasion du Koweït par l'Irak : 1ère guerre du Golfe (Koweït : 9% des réserves mondiales de pétrole)" },
    { year: "1991", event: "Opération Tempête du désert menée par les US dans le cadre de l'ONU au Koweït face à l'invasion de l'Irak. Lancement de missiles SCUD par Saddam Hussein, missiles soviétiques. Début de la stratégie Shock & Awe américain : prise de contrôle de l'espace aérien et destruction des capacités de l'adversaire avant toute intervention sur le terrain." },
    { year: "1993", event: "Accords d'Oslo : Négociations pour la paix entre Arafat et Rabin. L'OLP reconnait Israël et son droit à l'existence. Reconnaissance de l'OLP comme représentant légitime du peuple Palestinien" },
    { year: "1994", event: "Création des QIZ (Qualified Industrial Zones) par les US en Egypte, des zones franches favorisant l'ouverture de la région et l'instauration du libre-échange." },
    { year: "1996", event: "Loi D'Amato Kennedy qui sanctionne toute firme américaine travaillant en relation avec le nucléaire iranien" },
    { year: "1996", event: "Mise en place à Kaboul d'un régime Taliban." },
    { year: "1998", event: "Netanyahou annonce le retrait des forces Israéliennes du Liban." },
    { year: "1999", event: "Mort du roi Hussein, remplacé par son fils Abdallah en Jordanie." },
    { year: "2000", event: "Seconde Intifada" },
    { year: "2000", event: "Attentat du USS Cole dans le Golfe d'Aden" },
    { year: "2001", event: "Intervention Américaine en Afghanistan pour rechercher Oussama Ben Laden, le commanditaire du 11 Septembre." },
    { year: "2002", event: "Boom des matières premières" },
    { year: "2003", event: "Les US interviennent en IRAK. Guerre contre le terrorisme et ses effets." },
    { year: "2007", event: "Crise navale majeure entre l'Iran et les Etats-Unis : cinq patrouilleurs des pasdarans (gardiens de la révolution) et trois navires américains menacent de s'affronter" },
    { year: "2008", event: "Le prix du pétrole dépasse les 147$ le baril" },
    { year: "2008-2009", event: "Israël envahit la bande de Gaza dans le cadre de l'opération Plomb Durci" },
    { year: "2009", event: "Grandes émeutes étudiantes Iraniennes contre le régime en place. Riposte du premier ministre Ahmadinejad" },
    { year: "2011", event: "Début des Printemps Arabes : Situations de guerres civiles d'intensité variable en Afrique du Nord, avec des changements de régimes plus ou moins crédibles (Tunisie, Libye et Egypte), au Moyen-Orient (Syrie, Yémen). En Arabie saoudite, au Koweït comme à Oman, les mouvements de contestation sont rapidement désamorcés" },
    { year: "2011", event: "Chute de Moubarak en Egypte (Mohammed Morsi est élu en 2012)" },
    { year: "2011", event: "Début de la guerre civile en Syrie" },
    { year: "2012", event: "Israël envahit à nouveau la bande de Gaza dans le cadre de l'opération Pilier de Défense" },
    { year: "2013", event: "Coup d'État en Égypte, Abdel Fattah al-Sissi prend le pouvoir après la destitution de Morsi" },
    { year: "2014", event: "Montée en puissance de l'État islamique (EI) en Irak et en Syrie, proclamation du califat" },
    { year: "2014", event: "Intervention de la coalition internationale contre l'EI en Syrie et en Irak" },
    { year: "2015", event: "Guerre au Yémen, Opération Tempête décisive menée par l'Arabie saoudite contre les Houthis" },
    { year: "2015", event: "Accords Américains avec l'Iran sur le nucléaire (JCPOA)" },
    { year: "2017", event: "L'Arabie saoudite, les Emirats arabes unis, Bahreïn, le Yémen, les Maldives et l'Egypte rompent leurs relations avec le Qatar, jugé trop près de la Russie et de l'Iran" },
    { year: "2017", event: "Trump annonce le déplacement de l'ambassade d'Israël à Jérusalem" },
    { year: "2018", event: "Les États-Unis se retirent de l'accord sur le nucléaire iranien (JCPOA) et réimposent des sanctions" },
    { year: "2018", event: "Assassinat du journaliste saoudien Jamal Khashoggi dans le consulat saoudien à Istanbul" },
    { year: "2019", event: "Grandes manifestations antigouvernementales en Irak, au Liban et en Iran, réprimées violemment" },
    { year: "2019", event: "Attaques contre des installations pétrolières saoudiennes, attribuées à l'Iran ou aux Houthis" },
    { year: "2020", event: "Assassinat du général iranien Qasem Soleimani par un drone américain à Bagdad" },
    { year: "2020", event: "Accords d'Abraham : Normalisation des relations entre Israël et les Émirats arabes unis, Bahreïn, Soudan et Maroc" },
    { year: "2020", event: "Explosion massive au port de Beyrouth au Liban, causant plus de 200 morts et des dégâts massifs" },
    { year: "2021", event: "Retrait des troupes américaines d'Afghanistan, prise de Kaboul par les Talibans" },
    { year: "2021", event: "Conflit de 11 jours entre Israël et le Hamas à Gaza" },
    { year: "2021", event: "Élection d'Ebrahim Raisi comme président de l'Iran" },
    { year: "2022", event: "Grandes manifestations en Iran suite à la mort de Mahsa Amini en détention, mouvement pour les droits des femmes" },
    { year: "2022", event: "Guerre Russie-Ukraine impacte les prix de l'énergie et renforce le rôle des pays du Golfe dans l'approvisionnement mondial" },
    { year: "2023", event: "Séisme dévastateur en Turquie et en Syrie, tuant plus de 50 000 personnes" },
    { year: "2023", event: "Attaque du Hamas contre Israël le 7 octobre, tuant environ 1 200 personnes et prenant des otages, début de la guerre à Gaza" },
    { year: "2023", event: "Négociations pour une normalisation entre l'Arabie saoudite et Israël, interrompues par le conflit à Gaza" },
    { year: "2023", event: "Restauration des relations diplomatiques entre l'Arabie saoudite et l'Iran, négociée par la Chine" },
    { year: "2024", event: "Guerre à Gaza se poursuit, avec plus de 40 000 morts palestiniens selon les autorités locales, et escalade avec le Hezbollah au Liban" },
    { year: "2024", event: "Échanges directs de missiles entre l'Iran et Israël, première confrontation ouverte" },
    { year: "2024", event: "Chute du régime de Bachar al-Assad en Syrie, prise de Damas par les rebelles en décembre" },
    { year: "2024", event: "Israël frappe plus de cibles en Iran, incluant des sites nucléaires suspects" },
    { year: "2025", event: "Ceasefire entre Israël et le Hamas à Gaza, négocié avec la médiation des États-Unis et de l'Égypte, mais fragile avec des violations sporadiques" },
    { year: "2025", event: "Retour de Donald Trump à la présidence des États-Unis, renforçant les alliances avec Israël et les pays du Golfe contre l'Iran" },
    { year: "2025", event: "Syrie post-Assad : Formation d'un gouvernement de transition, avec influence accrue de la Turquie et des groupes islamistes" },
    { year: "2025", event: "Israël et États-Unis lancent des frappes aériennes sur des sites nucléaires iraniens en juin, menant à des échanges de missiles et un bref conflit direct" },
    { year: "2025", event: "Crises économiques persistantes dans la région, exacerbées par les conflits, avec haute inflation et chômage en Égypte, Liban et Irak" },
    { year: "2025", event: "Intensification des tensions régionales avec l'Iran, qui accélère son programme nucléaire en réponse aux sanctions américaines renouvelées" },
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
          <span className="text-gray-900 font-medium">Chronologie - Proche et Moyen-Orient</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Chronologie du Proche et Moyen-Orient
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Une chronologie complète des événements marquants de l'histoire contemporaine du Proche et Moyen-Orient, 
            de l'incident d'Aqaba aux conflits actuels du XXIe siècle.
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
            to="/formation/geopolitique" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
          >
            ← Retour à la formation géopolitique
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcheMoyenOrientChronologiePage;