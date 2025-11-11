import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap, Star, Award, Calendar, BarChart3, Brain, PenTool, Timer, ExternalLink } from 'lucide-react';

const MethodologiePage: React.FC = () => {
  const planType = {
    titre: "Manifestations / Facteurs / Limites ou conséquences ou solution",
    description: "90% des synthèses reposent sur ce plan type plus ou moins maquillé",
    parties: [
      {
        numero: "I",
        titre: "Manifestations",
        description: "Comment le phénomène se manifeste",
        exemples: [
          "Place donné à […]",
          "Comment […] est perçu",
          "Quel est le rapport du […] à la […] dans les sociétés modernes ?",
          "De quelles mutations s'agit-il ?"
        ]
      },
      {
        numero: "II",
        titre: "Facteurs",
        description: "Comment expliquer le phénomène",
        exemples: [
          "Comment expliquer […]",
          "Raison de […]",
          "La […] s'impose-t-elle comme un besoin ?",
          "Quels facteurs sont à l'origine de […] ?"
        ]
      },
      {
        numero: "III",
        titre: "Limites ou Conséquences ou Solution",
        description: "Quelles sont les limites, conséquences ou solutions",
        exemples: [
          "Effets : Conséquences de […] sur […]",
          "Dès lors… / Qu'induit cette domination de la […] sur […] ?",
          "Solution : Peut-on dépasser […] / […] peut-il être endigué ?",
          "Limite : Mais […]"
        ]
      }
    ]
  };

  const problematiques = [
    {
      exemple: "Le politique disparaît-il des sociétés modernes au profit de la technique ?",
      type: "Fermée (oui/non possible)"
    },
    {
      exemple: "La communication politique est-elle vouée à se dénaturer en mensonge dans les démocraties ?",
      type: "Fermée avec nuance"
    },
    {
      exemple: "Structures profondes ou initiative humaine : à qui convient-il sérieusement d'attribuer la dynamique des mutations politiques et civilisationnelles ?",
      type: "Ouverte avec choix"
    }
  ];

  const exemplesCorriges = [
    {
      titre: "La nature est-elle passée sous l'emprise de l'homme ? (ESCP 2020)",
      lien: "https://urlz.fr/iLXT",
      parties: [
        {
          numero: "I",
          titre: "(Manifestations)",
          contenu: "Comment l'homme affirme-t-il son emprise sur la nature ? Pour Michel Serres, il s'approprie son environnement en y imprimant sa marque, avec les déchets qu'il y rejette comme avec les messages publicitaires qu'il y inscrit. Plus largement, Christian Godin constate que la nature n'est plus l'objet de l'admiration esthétique de l'homme, qui veut à présent la transformer à sa guise. Selon Francis Wolff, ce fantasme prométhéen rêve même de modifier la nature humaine : l'utopie transhumaniste cherche ainsi à supprimer les processus du vivant – naissance, maladie, mort – auxquels elle est soumise."
        },
        {
          numero: "II",
          titre: "(Facteurs)",
          contenu: "Faut-il imputer ce rapport de force à la modernité ? Assurément, pour Christian Godin : si l'affirmation d'une toute-puissance de l'homme trouve sa source dans l'éloge humaniste de la volonté, elle culmine dans la modernité industrielle et athée. Francis Wolff souligne lui aussi l'importance de l'athéisme, mais enracine ce rapport dans les années 1970 et 1980, où les biotechnologies, adossées à une idéologie hédoniste et individualiste, ont conduit à réduire la nature humaine à un pur mécanisme. Pour Michel Serres au contraire, cela relève d'une volonté ancestrale de marquer son territoire en plaçant une frontière entre soi et les autres, volonté cependant amplifiée par le capitalisme moderne."
        },
        {
          numero: "III",
          titre: "(Conséquences)",
          contenu: "Cette emprise de l'homme sur la nature est-elle donc sans limite ? Non, pour Francis Wolff, car la nature résiste en l'homme : celui-ci n'étant ni un pur esprit, ni un simple corps, il ne pourra jamais être considéré comme une machine intelligente. Michel Serres est moins optimiste : les défenseurs de l'environnement semblent bien faibles face aux puissances capitalistes. Christian Godin est le plus pessimiste : la religion et la morale étant désormais considérées comme aliénantes, il n'y a plus aucun frein à la volonté humaine, dont les dérives apparaissent aussi bien dans le communisme soviétique que dans le libéralisme américain."
        }
      ],
      mots: 320
    },
    {
      titre: "Quel est le rôle des sociétés dans les grandes mutations historiques ? (ESCP 2018)",
      lien: "https://urlz.fr/iLXP",
      parties: [
        {
          numero: "I",
          titre: "(Manifestations)",
          contenu: "De quelles mutations s'agit-il ? Allant du général au particulier, Todd interroge en anthropologue les mutations socio-politiques pour rendre compte par exemple de l'avènement du communisme dans les pays de l'Est. Latour se place sur un terrain géopolitique pour constater que notre rapport à la notion de sol connaît actuellement une révolution consécutive à une double crise écologique et migratoire. Debray enfin porte son regard sur la France de mai 68 qui, loin des idéaux soixante-huitards, a surtout donné lieu à une modernisation du capitalisme traditionnel et de la vie politique."
        },
        {
          numero: "II",
          titre: "(Facteurs)",
          contenu: "Ces mutations sont-elles imputables à des causes identifiables ? Latour invoque des causes conjoncturelles, politiques et économiques, en l'occurrence la tendance au repli égoïste des anciennes puissances impérialistes (États-Unis et Grande-Bretagne). Todd et Debray mettent en avant des causes bien moins immédiatement perceptibles. Todd mobilise le modèle freudien pour montrer que les mutations historiques résultent de strates de déterminations plus ou moins conscientes et admises : l'économie et la politique certes, mais aussi l'éducation et les structures familiales. Pour Debray, la seule cause identifiable est l'air du temps, qui en mai 68 était au mouvement. Le capitalisme n'a fait que lui emboiter le pas pour se moderniser."
        },
        {
          numero: "III",
          titre: "(Conséquences)",
          contenu: "Les sociétés ont-elles dès lors une emprise sur les mouvements de l'histoire ? Pour Latour, les grandes puissances ont les cartes en main : ou bien réinventer les conditions d'une terre habitable pour tous, ou bien rester dans le déni. Todd et Debray sont plus fatalistes. Todd distingue deux types de sociétés : celles qui admettent leur déterminisme et celles qui, au nom d'un idéal volontariste, refusent de voir que ce rapport à la liberté est lui-même déterminé. Pour Debray, la raison de l'histoire est cynique et échappe à la volonté de ses acteurs : de fait, les militants de mai 68 ont ouvert la voie au capitalisme moderne, bien malgré eux."
        }
      ],
      mots: 329
    }
  ];

  const remarquesImportantes = [
    {
      titre: "La synthèse doit mettre en avant l'idée générale",
      contenu: "« La bonne synthèse est celle qui a repéré l'essentiel de la pensée de chaque auteur et qui parvient à confronter les trois réflexions tout en conservant l'axe majeur propre à chacun. »"
    },
    {
      titre: "Attention aux interprétations",
      contenu: "Ce n'est pas parce qu'un auteur parle de quelque chose, qu'il le soutient. Pour pallier ce problème : « Francis Wolff, bien que réticent quant à la question du transhumanisme témoigne de… »"
    },
    {
      titre: "Style clair et précis",
      contenu: "« La meilleure voie demeure celle d'un lexique simple, l'emploi de termes plus recherchés n'étant appréciable qu'à la condition d'une parfaite maîtrise de leur signification »"
    },
    {
      titre: "Nature des liens entre idées",
      contenu: "Il faut établir la nature du lien entre les idées des textes pour pouvoir utiliser le lexique qui convient : convergence, divergence, opposition, nuance, désaccord partiel"
    }
  ];

  const vocabulaireEssentiel = [
    "Se réfère", "Estime", "Affirme", "Questionne", "Justifie", "Témoigne", "S'inquiète de", "Rappelle", "C'est pourquoi, ajoute…",
    "Les auteurs s'accordent sur…", "Mais il ne faut pas considérer – dit [auteur] -", "Déclare", "Juge", "Moins affirmatif",
    "Mais", "À l'inverse", "Pourtant", "Au contraire", "Insiste sur le caractère polémique", "Ironique", "Humoristique", "Acerbe"
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/synthese-texte">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent font-bold">
                Le Secret de la Synthèse
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              90% des synthèses reposent sur un même plan type : Manifestations / Facteurs / Limites ou conséquences ou solution
            </p>
          </div>
        </div>

        {/* Introduction au secret */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              🔓 Laissez-moi vous révéler l'un des plus grands secrets de la synthèse
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              90% des synthèses excellentes reposent sur un même plan type plus ou moins maquillé :
              <span className="font-bold text-orange-600"> Manifestations / Facteurs / Limites ou conséquences ou solution</span>
            </p>
          </div>
        </div>

        {/* La problématisation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            🎯 La Problématique Générale
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Règles essentielles</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">C'est une question <strong>ouverte</strong> ou <strong>fermée</strong> (je vous conseille une question fermée i.e. on peut y répondre par oui/non)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Elle doit <strong>impliquer les 3 sous-questions</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Elle doit donner une <strong>réelle direction</strong> et être <strong>engagée</strong></span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {problematiques.map((prob, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{prob.type}</h4>
                  <p className="text-sm text-gray-600 italic">"{prob.exemple}"</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800">
                <strong>Remarque :</strong> Remarquer l'emploi de ces mots « forts » qui permettent d'orienter et d'engager la question
              </p>
            </div>
          </div>
        </div>

        {/* Le plan type */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📋 Le Plan Type : Manifestations / Facteurs / LCS
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Le plan <strong>Manifestations / Facteurs / Limites ou conséquences ou solution</strong> à l'avantage de proposer une véritable progression recherchée des correcteurs.
              <span className="text-orange-600 font-medium">Attention, votre plan type doit être déguisé.</span> Évitez donc un plan : quelles manifestations ? quels facteurs ? quelles limites ?
            </p>
          </div>

          <div className="space-y-6">
            {planType.parties.map((partie, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                    <span className="font-bold text-orange-600">{partie.numero}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{partie.titre}</h3>
                    <p className="text-sm text-gray-600">{partie.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {partie.exemples.map((exemple, exIndex) => (
                    <div key={exIndex} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800 italic">"{exemple}"</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exemples de corrigés */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📖 Exemples issus de rapports de jury
          </h2>

          <div className="space-y-8">
            {exemplesCorriges.map((exemple, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{exemple.titre}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{exemple.mots} mots</Badge>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Voir source
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {exemple.parties.map((partie, partieIndex) => (
                      <div key={partieIndex} className="border-l-4 border-orange-400 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {partie.numero} {partie.titre}
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{partie.contenu}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Remarques importantes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            ⚠️ Remarques ultérieures
          </h2>

          <div className="space-y-4">
            {remarquesImportantes.map((remarque, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{remarque.titre}</h3>
                <p className="text-gray-700 leading-relaxed italic">"{remarque.contenu}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vocabulaire essentiel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📝 Vocabulaire à utiliser
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Lexique essentiel pour exprimer avec précision les idées des auteurs :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {vocabulaireEssentiel.map((mot, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                  <span className="text-sm text-blue-800 font-medium">{mot}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="border border-orange-200 rounded-lg p-6 mb-8 bg-gradient-to-r from-orange-50 to-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            🎯 Vous ne me croyez pas ?
          </h3>
          <p className="text-gray-700 mb-6 text-center leading-relaxed">
            Ce plan type, convenablement maquillé, constitue la base de la plupart des synthèses excellentes.
            Il offre une structure logique et une progression naturelle qui plaît aux correcteurs.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Voir le travail annuel
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Accéder aux ressources
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/synthese-texte">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation synthèse de texte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MethodologiePage;
