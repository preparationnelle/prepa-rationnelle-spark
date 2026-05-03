import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight, ArrowLeft, Users, CheckCircle, TrendingUp, DollarSign, PieChart, Target } from 'lucide-react';

const CourantsSociologiquesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Les grands courants de la pensée sociologique depuis le XIXe siècle</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Les grands courants de la pensée sociologique depuis le XIXe siècle
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.9 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explorer l'évolution historique de la pensée sociologique et ses principales écoles de pensée
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: La sociologie naissante (XIXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                La sociologie naissante (XIXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Contexte historique</h3>
                  <p className="text-sm text-gray-600">
                    La sociologie émerge au XIXe siècle dans un contexte de profondes transformations sociales :
                    Révolution industrielle, urbanisation massive, constitution des États-nations,
                    développement du capitalisme et apparition du prolétariat.
                  </p>
                </div>

                <div className="border-l-4 border-blue-200 pl-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Auguste Comte (1798-1857)</h3>
                  <p className="text-sm text-gray-600">
                    Père fondateur de la sociologie. Il forge le terme "sociologie" (1838) et propose
                    la loi des trois états : théologique, métaphysique et positif (scientifique).
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Méthode positive : observation, expérimentation, comparaison</li>
                    <li>• Statique sociale : étude des conditions d'équilibre social</li>
                    <li>• Dynamique sociale : étude des lois de l'évolution sociale</li>
                    <li>• Religion de l'Humanité : substitut laïque à la religion</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Herbert Spencer (1820-1903)</h4>
                  <p className="text-sm text-gray-600">
                    Penseur évolutionniste britannique. Applique la théorie darwinienne à la société.
                    Développe l'idée d'évolution sociale progressive et défend le laissez-faire.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• "Survival of the fittest" appliqué à la société</li>
                    <li>• Opposition à l'intervention étatique</li>
                    <li>• Critique du socialisme et des politiques sociales</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Le fonctionnalisme (début XXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                Le fonctionnalisme (début XXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Émile Durkheim (1858-1917)</h3>
                  <p className="text-sm text-gray-600">
                    Figure majeure de la sociologie française. Étudie les faits sociaux comme des réalités
                    objectives, extérieures aux individus et contraignantes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Méthode : observation objective, rejet de l'introspection</li>
                    <li>• Division du travail social : source de solidarité organique</li>
                    <li>• Suicide : phénomène social, non individuel</li>
                    <li>• Religion : fonction de cohésion sociale</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Talcott Parsons (1902-1979)</h3>
                  <p className="text-sm text-gray-600">
                    Sociologue américain. Développe une théorie fonctionnaliste systémique.
                    Analyse la société comme un système en équilibre où chaque institution
                    remplit des fonctions essentielles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Système social : AGIL (Adaptation, Goal-attainment, Integration, Latency)</li>
                    <li>• Équilibre social : autorégulation par des mécanismes de contrôle</li>
                    <li>• Changement social : évolution progressive et fonctionnelle</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Robert Merton (1910-2003)</h4>
                  <p className="text-sm text-gray-600">
                    Élève de Parsons, critique le fonctionnalisme excessif. Introduit les concepts
                    de fonctions manifestes/latentes et de dysfonctions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Fonctions manifestes : conséquences voulues et reconnues</li>
                    <li>• Fonctions latentes : conséquences non voulues</li>
                    <li>• Dysfonctions : effets négatifs sur le système social</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Le conflit social (XIXe-XXe siècles) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                Le conflit social (XIXe-XXe siècles)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-red-200 pl-4">
                  <h3 className="font-semibold text-red-700 mb-2">Karl Marx (1818-1883)</h3>
                  <p className="text-sm text-gray-600">
                    Philosophe et économiste allemand. Analyse la société capitaliste comme un système
                    de classes antagonistes. Le conflit entre bourgeoisie et prolétariat est le moteur de l'histoire.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Matérialisme historique : infrastructure économique détermine superstructure</li>
                    <li>• Lutte des classes : bourgeoisie vs prolétariat</li>
                    <li>• Aliénation : séparation de l'homme de son travail</li>
                    <li>• Plus-value : exploitation du travail salarié</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-200 pl-4">
                  <h3 className="font-semibold text-red-700 mb-2">Max Weber (1864-1920)</h3>
                  <p className="text-sm text-gray-600">
                    Sociologue allemand. Critique de Marx, insiste sur le rôle des idées et des valeurs
                    dans l'explication des phénomènes sociaux. Développe une sociologie compréhensive.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Action sociale : orientée par le sens subjectif des acteurs</li>
                    <li>• Types d'action : traditionnelle, affective, rationnelle en valeur, rationnelle en finalité</li>
                    <li>• Bureaucratie : forme rationnelle d'organisation moderne</li>
                    <li>• Éthique protestante : origine spirituelle du capitalisme</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Georg Wilhelm Friedrich Hegel (1770-1831)</h4>
                  <p className="text-sm text-gray-600">
                    Philosophe allemand dont l'influence se retrouve dans les théories du conflit.
                    Dialectique : thèse → antithèse → synthèse comme moteur du progrès historique.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: L'interactionnisme symbolique (XXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                L'interactionnisme symbolique (XXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">George Herbert Mead (1863-1931)</h3>
                  <p className="text-sm text-gray-600">
                    Psychologue et sociologue américain. Fondateur de l'interactionnisme symbolique.
                    Étudie comment les individus construisent leur identité à travers les interactions sociales.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Self : distinction entre "I" (soi spontané) et "Me" (soi social)</li>
                    <li>• Autrui significatif : rôle des proches dans la formation de l'identité</li>
                    <li>• Autrui généralisé : intériorisation des normes sociales</li>
                    <li>• Jeu : apprentissage des rôles sociaux</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Herbert Blumer (1900-1987)</h3>
                  <p className="text-sm text-gray-600">
                    Élève de Mead. Formalise l'interactionnisme symbolique comme approche sociologique.
                    Insiste sur l'importance des significations subjectives dans l'action sociale.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Signification subjective des objets sociaux</li>
                    <li>• Processus d'interprétation continu</li>
                    <li>• Construction sociale de la réalité</li>
                    <li>• Méthode qualitative et ethnographique</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Erving Goffman (1922-1982)</h4>
                  <p className="text-sm text-gray-600">
                    Sociologue canadien. Analyse la vie quotidienne comme un théâtre où les individus
                    jouent des rôles et gèrent leur image sociale.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Théorie dramaturgique : société = théâtre</li>
                    <li>• Face-work : gestion de l'image de soi</li>
                    <li>• Stigmate : déviance et discrimination sociale</li>
                    <li>• Institutions totales : prisons, casernes, asiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Le structuralisme fonctionnaliste (milieu XXe siècle) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">5</span>
                </div>
                Le structuralisme fonctionnaliste (milieu XXe siècle)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-200 pl-4">
                  <h3 className="font-semibold text-orange-700 mb-2">Claude Lévi-Strauss (1908-2009)</h3>
                  <p className="text-sm text-gray-600">
                    Anthropologue français. Applique le structuralisme à l'étude des sociétés primitives.
                    Recherche les structures inconscientes qui organisent la pensée et les sociétés humaines.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Structures inconscientes de l'esprit humain</li>
                    <li>• Analyse structurale des mythes et des systèmes de parenté</li>
                    <li>• Universalisme culturel malgré la diversité apparente</li>
                    <li>• Opposition nature/culture comme structure fondamentale</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-200 pl-4">
                  <h3 className="font-semibold text-orange-700 mb-2">Pierre Bourdieu (1930-2002)</h3>
                  <p className="text-sm text-gray-600">
                    Sociologue français. Théorie de la reproduction sociale et du capital culturel.
                    Analyse les mécanismes de domination symbolique et de reproduction des inégalités.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Habitus : dispositions durables acquises par socialisation</li>
                    <li>• Capital : économique, culturel, social, symbolique</li>
                    <li>• Champ : espace de luttes pour la domination</li>
                    <li>• Violence symbolique : domination par les représentations</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Fernand Braudel (1902-1985)</h4>
                  <p className="text-sm text-gray-600">
                    Historien français. Introduit la longue durée en sciences sociales.
                    Distingue trois temporalités : événementielle, conjoncturelle, structurelle.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Histoire immobile : structures géographiques et mentales</li>
                    <li>• Histoire lentement rythmée : cycles économiques</li>
                    <li>• Histoire événementielle : faits ponctuels</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Les théories contemporaines (fin XXe-XXIe siècles) */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">6</span>
                </div>
                Les théories contemporaines (fin XXe-XXIe siècles)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">La théorie des choix rationnels</h3>
                  <p className="text-sm text-gray-600">
                    Approche micro-économique appliquée à la sociologie. Les individus sont des acteurs
                    rationnels qui maximisent leur utilité dans leurs décisions sociales.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Modèle de l'homo oeconomicus étendu à la sociologie</li>
                    <li>• Analyse coûts/avantages des comportements sociaux</li>
                    <li>• Théorie des jeux appliquée aux interactions sociales</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Le constructivisme social</h3>
                  <p className="text-sm text-gray-600">
                    La réalité sociale est construite par les acteurs à travers leurs interactions
                    et leurs interprétations. Le savoir scientifique lui-même est une construction sociale.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Réalité sociale comme construction intersubjective</li>
                    <li>• Rôle des institutions dans la définition de la réalité</li>
                    <li>• Déconstruction des catégories sociales naturalisées</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-700 mb-2">Féminisme sociologique</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Genre comme construction sociale</li>
                      <li>• Patriarcat et domination masculine</li>
                      <li>• Intersectionnalité (race/classe/genre)</li>
                      <li>• Simone de Beauvoir, Judith Butler</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-700 mb-2">Sociologie postmoderne</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fragmentation sociale</li>
                      <li>• Diversité et pluralisme</li>
                      <li>• Subjectivité et relativisme</li>
                      <li>• Zygmunt Bauman, Ulrich Beck</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Globalisation et transnationalisme</h4>
                  <p className="text-sm text-gray-600">
                    Étude des phénomènes sociaux à l'échelle mondiale. Transformations des identités,
                    migrations internationales, interdépendances économiques et culturelles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Sociétés en réseaux (Manuel Castells)</li>
                    <li>• Mondes multiples (Arjun Appadurai)</li>
                    <li>• Cosmopolitisme et multiculturalisme</li>
                    <li>• Effets de la globalisation sur les identités locales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module1/methodes-sociologiques">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourantsSociologiquesPage;
