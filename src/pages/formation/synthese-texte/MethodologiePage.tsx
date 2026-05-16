import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Calendar, ExternalLink } from 'lucide-react';

const MethodologiePage: React.FC = () => {
  const planType = {
    parties: [
      {
        numero: "I",
        titre: "Manifestations",
        description: "Comment le phénomène se manifeste",
        exemples: [
          "Place donnée à […]",
          "Comment […] est perçu",
          "Quel est le rapport du […] à la […] dans les sociétés modernes ?",
          "De quelles mutations s'agit-il ?",
        ],
      },
      {
        numero: "II",
        titre: "Facteurs",
        description: "Comment expliquer le phénomène",
        exemples: [
          "Comment expliquer […]",
          "Raison de […]",
          "La […] s'impose-t-elle comme un besoin ?",
          "Quels facteurs sont à l'origine de […] ?",
        ],
      },
      {
        numero: "III",
        titre: "Limites ou Conséquences ou Solution",
        description: "Quelles sont les limites, conséquences ou solutions",
        exemples: [
          "Effets : Conséquences de […] sur […]",
          "Dès lors… / Qu'induit cette domination de la […] sur […] ?",
          "Solution : Peut-on dépasser […] / […] peut-il être endigué ?",
          "Limite : Mais […]",
        ],
      },
    ],
  };

  const problematiques = [
    {
      exemple: "Le politique disparaît-il des sociétés modernes au profit de la technique ?",
      type: "Fermée (oui/non possible)",
    },
    {
      exemple: "La communication politique est-elle vouée à se dénaturer en mensonge dans les démocraties ?",
      type: "Fermée avec nuance",
    },
    {
      exemple:
        "Structures profondes ou initiative humaine : à qui convient-il sérieusement d'attribuer la dynamique des mutations politiques et civilisationnelles ?",
      type: "Ouverte avec choix",
    },
  ];

  const exemplesCorriges = [
    {
      titre: "La nature est-elle passée sous l'emprise de l'homme ? (ESCP 2020)",
      lien: "https://urlz.fr/iLXT",
      parties: [
        {
          numero: "I",
          titre: "(Manifestations)",
          contenu:
            "Comment l'homme affirme-t-il son emprise sur la nature ? Pour Michel Serres, il s'approprie son environnement en y imprimant sa marque, avec les déchets qu'il y rejette comme avec les messages publicitaires qu'il y inscrit. Plus largement, Christian Godin constate que la nature n'est plus l'objet de l'admiration esthétique de l'homme, qui veut à présent la transformer à sa guise. Selon Francis Wolff, ce fantasme prométhéen rêve même de modifier la nature humaine : l'utopie transhumaniste cherche ainsi à supprimer les processus du vivant – naissance, maladie, mort – auxquels elle est soumise.",
        },
        {
          numero: "II",
          titre: "(Facteurs)",
          contenu:
            "Faut-il imputer ce rapport de force à la modernité ? Assurément, pour Christian Godin : si l'affirmation d'une toute-puissance de l'homme trouve sa source dans l'éloge humaniste de la volonté, elle culmine dans la modernité industrielle et athée. Francis Wolff souligne lui aussi l'importance de l'athéisme, mais enracine ce rapport dans les années 1970 et 1980, où les biotechnologies, adossées à une idéologie hédoniste et individualiste, ont conduit à réduire la nature humaine à un pur mécanisme. Pour Michel Serres au contraire, cela relève d'une volonté ancestrale de marquer son territoire en plaçant une frontière entre soi et les autres, volonté cependant amplifiée par le capitalisme moderne.",
        },
        {
          numero: "III",
          titre: "(Conséquences)",
          contenu:
            "Cette emprise de l'homme sur la nature est-elle donc sans limite ? Non, pour Francis Wolff, car la nature résiste en l'homme : celui-ci n'étant ni un pur esprit, ni un simple corps, il ne pourra jamais être considéré comme une machine intelligente. Michel Serres est moins optimiste : les défenseurs de l'environnement semblent bien faibles face aux puissances capitalistes. Christian Godin est le plus pessimiste : la religion et la morale étant désormais considérées comme aliénantes, il n'y a plus aucun frein à la volonté humaine, dont les dérives apparaissent aussi bien dans le communisme soviétique que dans le libéralisme américain.",
        },
      ],
      mots: 320,
    },
    {
      titre: "Quel est le rôle des sociétés dans les grandes mutations historiques ? (ESCP 2018)",
      lien: "https://urlz.fr/iLXP",
      parties: [
        {
          numero: "I",
          titre: "(Manifestations)",
          contenu:
            "De quelles mutations s'agit-il ? Allant du général au particulier, Todd interroge en anthropologue les mutations socio-politiques pour rendre compte par exemple de l'avènement du communisme dans les pays de l'Est. Latour se place sur un terrain géopolitique pour constater que notre rapport à la notion de sol connaît actuellement une révolution consécutive à une double crise écologique et migratoire. Debray enfin porte son regard sur la France de mai 68 qui, loin des idéaux soixante-huitards, a surtout donné lieu à une modernisation du capitalisme traditionnel et de la vie politique.",
        },
        {
          numero: "II",
          titre: "(Facteurs)",
          contenu:
            "Ces mutations sont-elles imputables à des causes identifiables ? Latour invoque des causes conjoncturelles, politiques et économiques, en l'occurrence la tendance au repli égoïste des anciennes puissances impérialistes (États-Unis et Grande-Bretagne). Todd et Debray mettent en avant des causes bien moins immédiatement perceptibles. Todd mobilise le modèle freudien pour montrer que les mutations historiques résultent de strates de déterminations plus ou moins conscientes et admises : l'économie et la politique certes, mais aussi l'éducation et les structures familiales. Pour Debray, la seule cause identifiable est l'air du temps, qui en mai 68 était au mouvement. Le capitalisme n'a fait que lui emboiter le pas pour se moderniser.",
        },
        {
          numero: "III",
          titre: "(Conséquences)",
          contenu:
            "Les sociétés ont-elles dès lors une emprise sur les mouvements de l'histoire ? Pour Latour, les grandes puissances ont les cartes en main : ou bien réinventer les conditions d'une terre habitable pour tous, ou bien rester dans le déni. Todd et Debray sont plus fatalistes. Todd distingue deux types de sociétés : celles qui admettent leur déterminisme et celles qui, au nom d'un idéal volontariste, refusent de voir que ce rapport à la liberté est lui-même déterminé. Pour Debray, la raison de l'histoire est cynique et échappe à la volonté de ses acteurs : de fait, les militants de mai 68 ont ouvert la voie au capitalisme moderne, bien malgré eux.",
        },
      ],
      mots: 329,
    },
  ];

  const remarquesImportantes = [
    {
      titre: "La synthèse doit mettre en avant l'idée générale",
      contenu:
        "« La bonne synthèse est celle qui a repéré l'essentiel de la pensée de chaque auteur et qui parvient à confronter les trois réflexions tout en conservant l'axe majeur propre à chacun. »",
    },
    {
      titre: "Attention aux interprétations",
      contenu:
        "Ce n'est pas parce qu'un auteur parle de quelque chose, qu'il le soutient. Pour pallier ce problème : « Francis Wolff, bien que réticent quant à la question du transhumanisme, témoigne de… »",
    },
    {
      titre: "Style clair et précis",
      contenu:
        "« La meilleure voie demeure celle d'un lexique simple, l'emploi de termes plus recherchés n'étant appréciable qu'à la condition d'une parfaite maîtrise de leur signification. »",
    },
    {
      titre: "Nature des liens entre idées",
      contenu:
        "Il faut établir la nature du lien entre les idées des textes pour pouvoir utiliser le lexique qui convient : convergence, divergence, opposition, nuance, désaccord partiel.",
    },
  ];

  const vocabulaireEssentiel = [
    "Se réfère", "Estime", "Affirme", "Questionne", "Justifie", "Témoigne",
    "S'inquiète de", "Rappelle", "C'est pourquoi, ajoute…",
    "Les auteurs s'accordent sur…", "Mais il ne faut pas considérer – dit [auteur] –",
    "Déclare", "Juge", "Moins affirmatif", "Mais", "À l'inverse",
    "Pourtant", "Au contraire", "Insiste sur le caractère polémique",
    "Ironique", "Humoristique", "Acerbe",
  ];

  return (
    <div className="relative">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/95 backdrop-blur border-b border-carnet-rule/60">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-xs text-pr-gray-mid font-dm-sans">
            <Link to="/" className="hover:text-pr-black transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-pr-gray-light">›</span>
            <Link to="/formation/synthese-texte" className="hover:text-pr-black transition-colors">
              Synthèse de Texte
            </Link>
            <span className="mx-2 text-pr-gray-light">›</span>
            <span className="text-pr-black font-medium">Méthode</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back link */}
        <div className="mb-8">
          <Link to="/formation/synthese-texte">
            <Button
              variant="ghost"
              size="sm"
              className="font-dm-sans text-pr-gray-dark hover:text-pr-black hover:bg-pr-gray-bg gap-2 px-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.18em] text-pr-black bg-pr-gray-bg px-3 py-1.5 rounded-full">
            Méthode · Plan type
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black mt-6 mb-5 leading-tight">
            Le secret de la synthèse
          </h1>
          <div className="w-16 h-[3px] bg-pr-black mx-auto mb-6" />
          <p className="font-dm-sans text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
            90&nbsp;% des synthèses reposent sur un même plan type :
            <span className="text-pr-black font-medium"> Manifestations / Facteurs / Limites ou conséquences ou solution.</span>
          </p>
        </div>

        {/* Encadré secret */}
        <section className="mb-14 bg-pr-gray-bg/60 border-l-[3px] border-pr-black rounded-r-md p-7">
          <h2 className="font-dm-serif text-xl text-pr-black mb-3">
            Le plus grand secret de la synthèse
          </h2>
          <p className="font-dm-sans text-pr-gray-dark leading-relaxed">
            90&nbsp;% des synthèses excellentes reposent sur un même plan type plus ou moins maquillé&nbsp;:
            <span className="font-medium text-pr-black"> Manifestations / Facteurs / Limites ou conséquences ou solution.</span>
          </p>
        </section>

        {/* Problématique */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              La problématique générale
            </h2>
          </div>

          <div className="border border-pr-gray-light rounded-lg p-6 mb-5 bg-pr-gray-bg/40">
            <h3 className="font-dm-sans font-semibold text-pr-black mb-4 text-sm uppercase tracking-wider">
              Règles essentielles
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-dm-sans text-pr-gray-dark">
                <span className="text-pr-black mt-1">→</span>
                <span>
                  C'est une question <strong className="text-pr-black">ouverte</strong> ou <strong className="text-pr-black">fermée</strong> (je conseille une question fermée, à laquelle on peut répondre par oui/non).
                </span>
              </li>
              <li className="flex items-start gap-3 font-dm-sans text-pr-gray-dark">
                <span className="text-pr-black mt-1">→</span>
                <span>
                  Elle doit <strong className="text-pr-black">impliquer les 3 sous-questions</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3 font-dm-sans text-pr-gray-dark">
                <span className="text-pr-black mt-1">→</span>
                <span>
                  Elle doit donner une <strong className="text-pr-black">réelle direction</strong> et être <strong className="text-pr-black">engagée</strong>.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {problematiques.map((prob, index) => (
              <div
                key={index}
                className="bg-carnet-paper-2 border border-pr-gray-light rounded-md p-4"
              >
                <p className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-black mb-2">
                  {prob.type}
                </p>
                <p className="font-dm-sans text-sm text-pr-gray-dark italic leading-relaxed">
                  « {prob.exemple} »
                </p>
              </div>
            ))}
          </div>

          <div className="bg-pr-gray-bg/60 border-l-[3px] border-pr-black rounded-r-md p-4">
            <p className="font-dm-sans text-sm text-pr-gray-dark">
              <strong className="text-pr-black">Remarque —</strong> noter l'emploi de mots « forts » qui permettent d'orienter et d'engager la question.
            </p>
          </div>
        </section>

        {/* Plan type */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Le plan type — Manifestations / Facteurs / LCS
            </h2>
          </div>

          <div className="border border-pr-gray-light rounded-lg p-6 mb-6 bg-pr-gray-bg/40">
            <p className="font-dm-sans text-pr-gray-dark leading-relaxed">
              Le plan <strong className="text-pr-black">Manifestations / Facteurs / Limites ou conséquences ou solution</strong> a l'avantage de proposer une véritable progression, recherchée par les correcteurs.
              <span className="text-pr-black font-medium"> Attention, votre plan type doit être déguisé.</span> Évitez donc un plan : « quelles manifestations ? quels facteurs ? quelles limites ? ».
            </p>
          </div>

          <div className="space-y-5">
            {planType.parties.map((partie, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="font-dm-serif text-4xl text-pr-black leading-none">
                    {partie.numero}
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-pr-black mb-1">
                      {partie.titre}
                    </h3>
                    <p className="font-dm-sans text-sm text-pr-gray-mid">
                      {partie.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {partie.exemples.map((exemple, exIndex) => (
                    <div
                      key={exIndex}
                      className="bg-pr-gray-bg/60 border-l-[2px] border-pr-black/60 rounded-r px-4 py-2.5"
                    >
                      <p className="font-dm-sans text-sm text-pr-gray-dark italic">
                        « {exemple} »
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exemples corrigés */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Exemples issus de rapports de jury
            </h2>
          </div>

          <div className="space-y-6">
            {exemplesCorriges.map((exemple, index) => (
              <article
                key={index}
                className="border border-pr-gray-light rounded-lg overflow-hidden"
              >
                <header className="bg-pr-gray-bg/60 border-b border-pr-gray-light px-6 py-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="font-dm-serif text-lg text-pr-black leading-snug">
                      {exemple.titre}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-pr-gray-bg text-pr-black hover:bg-pr-gray-bg font-dm-sans text-[10px] uppercase tracking-wider">
                        {exemple.mots} mots
                      </Badge>
                      <a
                        href={exemple.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm-sans text-xs text-pr-black hover:text-pr-black flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Source
                      </a>
                    </div>
                  </div>
                </header>
                <div className="p-6 space-y-5">
                  {exemple.parties.map((partie, partieIndex) => (
                    <div
                      key={partieIndex}
                      className="border-l-[3px] border-pr-black pl-5"
                    >
                      <h4 className="font-dm-sans font-semibold text-pr-black mb-2 text-sm">
                        {partie.numero} {partie.titre}
                      </h4>
                      <p className="font-dm-sans text-sm text-pr-gray-dark leading-relaxed">
                        {partie.contenu}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Remarques */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Remarques importantes
            </h2>
          </div>

          <div className="space-y-4">
            {remarquesImportantes.map((remarque, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <h3 className="font-dm-sans font-semibold text-pr-black mb-2.5">
                  {remarque.titre}
                </h3>
                <p className="font-dm-sans text-sm text-pr-gray-dark leading-relaxed italic">
                  {remarque.contenu}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vocabulaire */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Vocabulaire à utiliser
            </h2>
          </div>

          <div className="border border-pr-gray-light rounded-lg p-6">
            <p className="font-dm-sans text-sm text-pr-gray-dark mb-5">
              Lexique essentiel pour exprimer avec précision les idées des auteurs&nbsp;:
            </p>
            <div className="flex flex-wrap gap-2">
              {vocabulaireEssentiel.map((mot, index) => (
                <span
                  key={index}
                  className="font-dm-sans text-sm text-pr-black bg-pr-gray-bg px-3 py-1.5 rounded-full"
                >
                  {mot}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-pr-gray-bg border border-pr-gray-light rounded-lg p-10 text-center mb-10">
          <h3 className="font-dm-serif text-2xl text-pr-black mb-3">
            Vous ne me croyez pas&nbsp;?
          </h3>
          <div className="w-12 h-[2px] bg-pr-black mx-auto mb-4" />
          <p className="font-dm-sans text-pr-gray-dark mb-6 max-w-xl mx-auto leading-relaxed">
            Ce plan type, convenablement maquillé, constitue la base de la plupart des synthèses excellentes.
            Il offre une structure logique et une progression naturelle qui plaît aux correcteurs.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/formation/synthese-texte/travail-annuel">
              <Button
                variant="outline"
                className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-carnet-paper-2 hover:border-pr-black hover:text-pr-black gap-2"
              >
                <Calendar className="w-4 h-4" />
                Voir le travail annuel
              </Button>
            </Link>
            <Link to="/formation/synthese-texte/ressources">
              <Button className="bg-pr-black hover:bg-pr-black-dark text-white font-dm-sans gap-2">
                <BookOpen className="w-4 h-4" />
                Accéder aux ressources
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/synthese-texte">
            <Button
              variant="ghost"
              className="font-dm-sans text-pr-gray-dark hover:text-pr-black hover:bg-pr-gray-bg gap-2"
            >
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
