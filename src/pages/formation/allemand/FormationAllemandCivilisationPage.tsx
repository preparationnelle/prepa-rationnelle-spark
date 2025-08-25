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

  const getThemeColors = (theme: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100/50",
        border: "border-blue-200",
        text: "text-blue-800",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        tag: "bg-blue-50 text-blue-700 border-blue-200"
      },
      green: {
        bg: "from-green-50 to-green-100/50",
        border: "border-green-200",
        text: "text-green-800",
        accent: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        tag: "bg-green-50 text-green-700 border-green-200"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100/50",
        border: "border-emerald-200",
        text: "text-emerald-800",
        accent: "text-emerald-600",
        button: "bg-emerald-600 hover:bg-emerald-700",
        tag: "bg-emerald-50 text-emerald-700 border-emerald-200"
      },
      orange: {
        bg: "from-orange-50 to-orange-100/50",
        border: "border-orange-200",
        text: "text-orange-800",
        accent: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        tag: "bg-orange-50 text-orange-700 border-orange-200"
      },
      purple: {
        bg: "from-purple-50 to-purple-100/50",
        border: "border-purple-200",
        text: "text-purple-800",
        accent: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        tag: "bg-purple-50 text-purple-700 border-purple-200"
      },
      indigo: {
        bg: "from-indigo-50 to-indigo-100/50",
        border: "border-indigo-200",
        text: "text-indigo-800",
        accent: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        tag: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      teal: {
        bg: "from-teal-50 to-teal-100/50",
        border: "border-teal-200",
        text: "text-teal-800",
        accent: "text-teal-600",
        button: "bg-teal-600 hover:bg-teal-700",
        tag: "bg-teal-50 text-teal-700 border-teal-200"
      },
      cyan: {
        bg: "from-cyan-50 to-cyan-100/50",
        border: "border-cyan-200",
        text: "text-cyan-800",
        accent: "text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700",
        tag: "bg-cyan-50 text-cyan-700 border-cyan-200"
      },
      pink: {
        bg: "from-pink-50 to-pink-100/50",
        border: "border-pink-200",
        text: "text-pink-800",
        accent: "text-pink-600",
        button: "bg-pink-600 hover:bg-pink-700",
        tag: "bg-pink-50 text-pink-700 border-pink-200"
      },
      slate: {
        bg: "from-slate-50 to-slate-100/50",
        border: "border-slate-200",
        text: "text-slate-800",
        accent: "text-slate-600",
        button: "bg-slate-600 hover:bg-slate-700",
        tag: "bg-slate-50 text-slate-700 border-slate-200"
      }
    };
    return colors[theme as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-12">
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
              const themeColors = getThemeColors(module.theme);
              return (
                <Card key={module.id} className={`bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl ${module.color} text-white shadow-lg`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-3xl font-bold ${themeColors.text} mb-2 flex items-center gap-3`}>
                          <span className={`${module.color} text-white px-3 py-1 rounded-full text-xl font-bold`}>
                            {module.id}
                          </span>
                          {module.title}
                        </CardTitle>
                        <p className={`${themeColors.accent} text-lg font-medium`}>{module.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <TrendingUp className="h-4 w-4" />
                          Wesentliche Punkte
                        </h4>
                        <div className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <div key={index} className={`p-3 rounded-lg border ${themeColors.tag}`}>
                              <span className="text-sm font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <MapPin className="h-4 w-4" />
                          Vertiefungen
                        </h4>
                        <div className="space-y-2">
                          {module.detailedTopics.map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${module.color.replace('bg-', 'bg-')}`}></div>
                              <span className={`text-sm ${themeColors.accent}`}>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {module.id === 1 ? (
                        <Link to="/formation/allemand/politik" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 2 ? (
                        <Link to="/formation/allemand/demographie" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 3 ? (
                        <Link to="/formation/allemand/ecologie" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 4 ? (
                        <Link to="/formation/allemand/geopolitique" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 5 ? (
                        <Link to="/formation/allemand/industrie" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 6 ? (
                        <Link to="/formation/allemand/culture" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 7 ? (
                        <Link to="/formation/allemand/education" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 8 ? (
                        <Link to="/formation/allemand/technologie" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 9 ? (
                        <Link to="/formation/allemand/femmes" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : module.id === 10 ? (
                        <Link to="/formation/allemand/geschichte" className="flex-1">
                          <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                        </Link>
                      ) : (
                        <Button className={`flex-1 ${themeColors.button} text-white font-semibold py-3`}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Accéder au module
                        </Button>
                      )}
                      <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
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
                            className="px-6 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 rounded-lg transition-all duration-200"
                          >
                            Vocabulaire
                          </Button>
                        </Link>
                      )}
                      {module.id === 5 && (
                        <Link to="/formation/allemand/vocabulaire-wirtschaft">
                          <Button 
                            variant="outline"
                            className="px-6 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 rounded-lg transition-all duration-200"
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

        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
              <Globe className="h-5 w-5" />
              Pourquoi étudier la Civilisation Allemande ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-4">
            <p className="leading-relaxed">
              La connaissance de la civilisation allemande contemporaine est indispensable pour comprendre les enjeux 
              européens et internationaux actuels. L'Allemagne, première puissance économique européenne, 
              joue un rôle central dans les décisions politiques et économiques continentales.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-900 mb-2">Objectifs pédagogiques :</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Comprendre les institutions allemandes</li>
                  <li>• Analyser les défis sociétaux contemporains</li>
                  <li>• Maîtriser les enjeux environnementaux</li>
                  <li>• Situer l'Allemagne dans l'Europe</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-900 mb-2">Pour les concours :</h3>
                <ul className="text-sm text-blue-700 space-y-1">
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