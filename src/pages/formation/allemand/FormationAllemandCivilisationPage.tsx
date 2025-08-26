import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Globe, Building, Users, Leaf, Home, ChevronRight, Calendar, TrendingUp, MapPin, Briefcase } from 'lucide-react';

const FormationAllemandCivilisationPage = () => {
  const civilisationModules = [
    {
      id: 1,
      title: "Deutsche Politik",
      description: "Politisches System, Institutionen, Parteien und zeitgenössische politische Entwicklungen Deutschlands.",
      topics: [
        "Deutsches Bundesystem (Bund und Länder)",
        "Aufstieg der AfD und Fragmentierung der Parteienlandschaft",
        "Niedergang der Volksparteien (CDU/CSU, SPD)",
        "Die Grünen als wichtige politische Kraft"
      ],
      detailedTopics: [
        "Verfassung von 1949 (Grundgesetz)",
        "Koalitionsbildung und politische Herausforderungen",
        "Deutsche Wiedervereinigung (1990)",
        "Deutschlands Rolle in der EU und europäische Souveränität"
      ],
      icon: Building,
      color: "bg-blue-600",
      theme: "blue"
    },
    {
      id: 2,
      title: "Demografie und Gesellschaft",
      description: "Demografische Entwicklungen, Migration, Integration und soziale Herausforderungen des modernen Deutschlands.",
      topics: [
        "Bevölkerungsalterung: höchstes Durchschnittsalter weltweit",
        "Bedarf an 6 Millionen ausländischen Arbeitskräften bis 2025",
        "Ost-West-Brüche 25 Jahre nach der Wiedervereinigung",
        "Soziale Ungleichheit und Prekarisierung trotz Vollbeschäftigung"
      ],
      detailedTopics: [
        "Rentenreform und demografische Herausforderungen",
        "Migration und Integration seit 2015",
        "Landflucht und AfD-Erfolg im Osten vs. Grüne im Westen",
        "Reform des Bürgergelds und Arbeitsmarkt"
      ],
      icon: Users,
      color: "bg-green-600",
      theme: "green"
    },
    {
      id: 3,
      title: "Ökologie und Umwelt",
      description: "Energiewende, Umweltpolitik und nachhaltige Entwicklung in Deutschland.",
      topics: [
        "Energiewende und Wettbewerbsfähigkeit",
        "Atomausstieg und hohe Energiekosten",
        "Klimapolitik und Führungsrolle in der EU",
        "Nachhaltige Mobilität und Verkehrswende"
      ],
      detailedTopics: [
        "Kohleausstieg und Investitionen in erneuerbare Energien",
        "Auswirkungen auf die deutsche Industrie",
        "Entwicklung des öffentlichen Verkehrs und Fahrradverkehr",
        "Debatte über Tempolimits auf Autobahnen"
      ],
      icon: Leaf,
      color: "bg-emerald-600",
      theme: "emerald"
    },
    {
      id: 4,
      title: "Europäische Geopolitik",
      description: "Deutschlands Rolle in der EU, internationale Beziehungen und geostrategische Herausforderungen.",
      topics: [
        "Geopolitische Revolution (Zeitenwende) seit 2022",
        "Energieabhängigkeit und nationale Sicherheit",
        "Transatlantische Beziehungen in der Trump-Ära",
        "Deutsch-französische Beziehungen und EU-Führung"
      ],
      detailedTopics: [
        "Radikaler Wandel nach dem Ukraine-Krieg",
        "Aufstockung des Militärbudgets und Neudefinition des Pazifismus",
        "Abkehr vom russischen Gas und Nord Stream-Krise",
        "Strategische Autonomie Europas und NATO"
      ],
      icon: Globe,
      color: "bg-orange-600",
      theme: "orange"
    },
    {
      id: 5,
      title: "Wirtschaft und Industrie",
      description: "Deutsches Wirtschaftsmodell, industrielle Transformation und strukturelle Herausforderungen.",
      topics: [
        "Krise des deutschen Wirtschaftsmodells seit 2019",
        "Industrie 4.0 und digitale Transformation",
        "Deutsche Automobilindustrie vor neuen Herausforderungen",
        "Strukturelle Probleme der exportorientierten Industrie"
      ],
      detailedTopics: [
        "Wirtschaftsstagnation und Nullwachstumsprognose für 2025",
        "260.000 Industrieroboter und Automatisierung",
        "Digitalisierung des Mittelstands",
        "Elektromobilität, chinesische Konkurrenz und Umstrukturierungen"
      ],
      icon: Briefcase,
      color: "bg-purple-600",
      theme: "purple"
    },
    {
      id: 6,
      title: "Kultur und Identität",
      description: "Identitätsfragen, Multikulturalismus und kulturelle Herausforderungen im modernen Deutschland.",
      topics: [
        "Identitätsfragen und Multikulturalismus",
        "Deutsche Laizität und religiöser Pluralismus",
        "Historisches Gedächtnis und Vergangenheitsbewältigung",
        "Digitale Kultur und Informationsgesellschaft"
      ],
      detailedTopics: [
        "Deutsche nationale Identität und Stellung des Islams (3. Religion)",
        "Kirchensteuer und institutionelle Integration des Islams",
        "Verhältnis zur NS-Vergangenheit und Holocaust-Gedächtnis",
        "Digitale Kluft und Datenschutz in Deutschland"
      ],
      icon: Calendar,
      color: "bg-indigo-600",
      theme: "indigo"
    },
    {
      id: 7,
      title: "Bildung und Ausbildung",
      description: "Bildungssystem, berufliche Ausbildung und Hochschulwesen in Deutschland.",
      topics: [
        "Bildungssystem und frühe Orientierung",
        "Berufsausbildung und duales System",
        "Hochschulwesen und Forschung",
        "Bildungsgerechtigkeit und Chancengleichheit"
      ],
      detailedTopics: [
        "Dreigliedriges System (Hauptschule, Realschule, Gymnasium)",
        "Krise des dualen Modells und Rückgang der Auszubildenden",
        "Universitäre Exzellenz und internationale Attraktivität",
        "Konkurrenz zwischen beruflicher und universitärer Ausbildung"
      ],
      icon: TrendingUp,
      color: "bg-teal-600",
      theme: "teal"
    },
    {
      id: 8,
      title: "Innovation und Technologie",
      description: "Technologische Souveränität, Digitalisierung und Innovation in Deutschland.",
      topics: [
        "Künstliche Intelligenz und technologische Souveränität",
        "Cybersicherheit und Datenschutz",
        "Deutsche KI-Strategie und internationale Konkurrenz",
        "Digitaler Rückstand und europäischer DESI-Index"
      ],
      detailedTopics: [
        "Konkurrenz mit USA und China in der KI-Entwicklung",
        "DSGVO und digitale Souveränität",
        "Cyberangriffe und Schutz kritischer Infrastrukturen",
        "Ethik der KI und deutscher Ansatz"
      ],
      icon: MapPin,
      color: "bg-cyan-600",
      theme: "cyan"
    },
    {
      id: 9,
      title: "Frauen in der deutschen Gesellschaft",
      description: "Geschlechtergleichstellung, Frauen in Politik und Wirtschaft, gesellschaftliche Entwicklungen.",
      topics: [
        "Politische Partizipation und weibliche Führung",
        "Frauen in der Wirtschaft und Führungspositionen",
        "Vereinbarkeit von Familie und Beruf",
        "Geschlechtergleichstellung und gesellschaftlicher Wandel"
      ],
      detailedTopics: [
        "Angela Merkels Erbe und weibliche Kanzlerschaft",
        "Frauenquote in Vorständen und DAX-Unternehmen",
        "Elternzeit, Kita-Ausbau und Familienpolitik",
        "Gender Pay Gap und strukturelle Ungleichheiten"
      ],
      icon: Users,
      color: "bg-pink-600",
      theme: "pink"
    },
    {
      id: 10,
      title: "Geschichte und Erinnerungskultur",
      description: "Deutsche Geschichte des 20. Jahrhunderts und die Auseinandersetzung mit der Vergangenheit.",
      topics: [
        "Teilung Deutschlands (1949–1990) und Wiedervereinigung",
        "Erinnerung an den Zweiten Weltkrieg und den Holocaust (Vergangenheitsbewältigung)",
        "Leben in der DDR und Aufarbeitung der SED-Diktatur",
        "Berlin als Symbol deutscher Geschichte"
      ],
      detailedTopics: [
        "Nürnberger Prozesse und \"Nie wieder Krieg\" als Leitmotiv",
        "Denkmäler, Gedenkstätten und Erinnerungspolitik",
        "Unterschiede Ost/West im historischen Gedächtnis",
        "Bedeutung des 3. Oktober (Tag der Deutschen Einheit)"
      ],
      icon: Calendar,
      color: "bg-slate-600",
      theme: "slate"
    }
  ];



  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-80 left-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-amber-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-50 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-amber-50 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-44 h-44 bg-blue-300 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-10 left-1/2 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 left-2/3 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand" className="hover:text-gray-900 transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Civilisation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <Globe className="h-9 w-9" />
            </div>
            Deutsche Landeskunde
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie das zeitgenössische Deutschland durch seine Institutionen, Gesellschaft und aktuellen Herausforderungen
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">10 modules thématiques</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-blue-600">Niveau Prépa</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Landeskundemodule</h2>
          <div className="grid gap-8">
            {civilisationModules.map((module) => {
              return (
                <Card key={module.id} className="group bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-amber-200 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl ${module.color} text-white shadow-lg`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3 relative z-10">
                          <span className={`${module.color} text-white px-3 py-1 rounded-full text-xl font-bold`}>
                            {module.id}
                          </span>
                          {module.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg font-medium relative z-10">{module.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Wesentliche Punkte
                        </h4>
                        <div className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <div key={index} className="p-3 rounded-lg border bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200">
                              <span className="text-sm font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Vertiefungen
                        </h4>
                        <div className="space-y-2">
                          {module.detailedTopics.map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                              <span className="text-sm text-gray-600">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {module.id === 1 ? (
                        <Link to="/formation/allemand/politik" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 2 ? (
                        <Link to="/formation/allemand/demographie" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 3 ? (
                        <Link to="/formation/allemand/ecologie" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 4 ? (
                        <Link to="/formation/allemand/geopolitique" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 5 ? (
                        <Link to="/formation/allemand/industrie" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 6 ? (
                        <Link to="/formation/allemand/culture" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 7 ? (
                        <Link to="/formation/allemand/education" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 8 ? (
                        <Link to="/formation/allemand/technologie" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 9 ? (
                        <Link to="/formation/allemand/femmes" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 10 ? (
                        <Link to="/formation/allemand/geschichte" className="flex-1">
                          <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : (
                        <Button className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3`}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Accéder au module
                        </Button>
                      )}
                      <Button variant="outline" className="px-6 border-gray-200 text-gray-600 hover:bg-gray-50">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Ressources
                      </Button>
                      {module.id === 1 && (
                        <Link to="/formation/allemand/vocabulaire-politique">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 2 && (
                        <Link to="/formation/allemand/vocabulaire-demographie">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 3 && (
                        <Link to="/formation/allemand/vocabulaire-ecologie">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 4 && (
                        <Link to="/formation/allemand/vocabulaire-geopolitique">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 5 && (
                        <Link to="/formation/allemand/vocabulaire-wirtschaft">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 6 && (
                        <Link to="/formation/allemand/vocabulaire-kultur">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-rose-500 text-rose-600 hover:bg-rose-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 7 && (
                        <Link to="/formation/allemand/vocabulaire-bildung">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 8 && (
                        <Link to="/formation/allemand/vocabulaire-innovation">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 9 && (
                        <Link to="/formation/allemand/vocabulaire-frauen">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-lime-500 text-lime-600 hover:bg-lime-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 10 && (
                        <Link to="/formation/allemand/vocabulaire-geschichte">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-slate-500 text-slate-600 hover:bg-slate-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
              <Globe className="h-5 w-5" />
              Pourquoi étudier la Civilisation Allemande ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p className="leading-relaxed">
              La connaissance de la civilisation allemande contemporaine est indispensable pour comprendre les enjeux 
              européens et internationaux actuels. L'Allemagne, première puissance économique européenne, 
              joue un rôle central dans les décisions politiques et économiques continentales.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Objectifs pédagogiques :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comprendre les institutions allemandes</li>
                  <li>• Analyser les défis sociétaux contemporains</li>
                  <li>• Maîtriser les enjeux environnementaux</li>
                  <li>• Situer l'Allemagne dans l'Europe</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Pour les concours :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Exemples concrets pour les dissertations</li>
                  <li>• Actualité européenne et internationale</li>
                  <li>• Comparaisons France-Allemagne</li>
                  <li>• Culture générale indispensable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormationAllemandCivilisationPage;