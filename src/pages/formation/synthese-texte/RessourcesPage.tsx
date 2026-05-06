import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Target,
  FileText,
  Clock,
  Calendar,
  Download,
  ExternalLink,
  Play,
} from 'lucide-react';

const RessourcesPage: React.FC = () => {
  const annalesBCE = [
    {
      annee: "2025",
      titre: "Nature et environnement",
      description: "Épreuve de synthèse sur la relation homme-nature",
      lien: "https://www.concours-bce.com/sites/default/files/2025-04/304.pdf",
      textes: 3,
    },
    {
      annee: "2024",
      titre: "Économie et société",
      description: "Analyse des transformations économiques contemporaines",
      lien: "https://www.concours-bce.com/sites/default/files/2024-04/304.pdf",
      textes: 3,
    },
    {
      annee: "2023",
      titre: "Politique et société",
      description: "Synthèse sur les enjeux sociétaux contemporains",
      lien: "https://www.concours-bce.com/sites/default/files/2023-05/304.pdf",
      textes: 3,
    },
    {
      annee: "2022",
      titre: "Culture et identité",
      description: "Réflexion sur les mutations culturelles",
      lien: "https://www.concours-bce.com/sites/default/files/2023-05/304.pdf",
      textes: 3,
    },
    {
      annee: "2021",
      titre: "Technologie et société",
      description: "Impact des nouvelles technologies sur la société",
      lien: "https://www.concours-bce.com/sites/default/files/2021-05/304.pdf",
      textes: 3,
    },
    {
      annee: "2020",
      titre: "Écologie et développement",
      description: "Enjeux environnementaux et développement durable",
      lien: "https://www.concours-bce.com/sites/default/files/2020-07/304.pdf",
      textes: 3,
    },
    {
      annee: "2019",
      titre: "Économie mondiale",
      description: "Transformations de l'économie globale",
      lien: "https://www.concours-bce.com/sites/default/files/importcsv/304_2019_Sujet.pdf",
      textes: 3,
    },
  ];

  const annalesCorrigees = [
    {
      titre: "BCE 2024 — Économie numérique",
      description: "Sujet complet avec corrigé détaillé et grille d'évaluation",
      niveau: "Avancé",
      duree: "4h00",
      points: "16/20",
      tags: ["économie", "numérique", "innovation"],
    },
    {
      titre: "ECRICOME 2023 — Géopolitique énergétique",
      description: "Analyse de 3 textes sur les enjeux énergétiques mondiaux",
      niveau: "Intermédiaire",
      duree: "4h00",
      points: "14/20",
      tags: ["géopolitique", "énergie", "environnement"],
    },
    {
      titre: "BCE 2023 — Société et technologie",
      description: "Synthèse sur l'impact des réseaux sociaux",
      niveau: "Débutant",
      duree: "4h00",
      points: "12/20",
      tags: ["société", "technologie", "réseaux sociaux"],
    },
  ];

  const exercicesPratiques = [
    {
      titre: "Exercice 1 — Lecture analytique",
      description: "Apprendre à identifier les idées principales et secondaires",
      objectifs: ["Annotation efficace", "Hiérarchisation des idées", "Repérage des arguments"],
      duree: "45 min",
      difficulte: "Débutant",
    },
    {
      titre: "Exercice 2 — Structuration du plan",
      description: "Organiser les idées en parties cohérentes",
      objectifs: ["Plan thématique", "Progression logique", "Équilibre des parties"],
      duree: "60 min",
      difficulte: "Intermédiaire",
    },
    {
      titre: "Exercice 3 — Reformulation fidèle",
      description: "Maîtriser l'art de la synthèse sans dénaturer les idées",
      objectifs: ["Vocabulaire précis", "Neutralité objective", "Concision"],
      duree: "90 min",
      difficulte: "Avancé",
    },
  ];

  const grillesEvaluation = [
    {
      categorie: "Contenu (8 points)",
      criteres: [
        "Fidélité aux textes sources (3 pts)",
        "Pertinence des idées sélectionnées (2 pts)",
        "Cohérence de la progression (2 pts)",
        "Équilibre des parties (1 pt)",
      ],
    },
    {
      categorie: "Forme (6 points)",
      criteres: [
        "Clarté de l'expression (2 pts)",
        "Richesse du vocabulaire (2 pts)",
        "Correction de la langue (2 pts)",
      ],
    },
    {
      categorie: "Structure (4 points)",
      criteres: [
        "Respect du plan annoncé (2 pts)",
        "Qualité des transitions (2 pts)",
      ],
    },
    {
      categorie: "Respect des consignes (2 points)",
      criteres: [
        "Nombre de mots respecté (1 pt)",
        "Format et présentation (1 pt)",
      ],
    },
  ];

  const outilsPratiques = [
    {
      nom: "Chronomètre intelligent",
      description: "Application pour respecter le timing de chaque phase",
      avantages: ["Alertes programmées", "Statistiques de progression", "Rappels personnalisés"],
      utilisation: "Utiliser pendant chaque entraînement",
    },
    {
      nom: "Grille d'auto-évaluation",
      description: "Outil pour s'évaluer objectivement",
      avantages: ["Critères précis", "Progression visible", "Points d'amélioration"],
      utilisation: "Après chaque synthèse réalisée",
    },
    {
      nom: "Banque de vocabulaire",
      description: "Lexique spécialisé pour la synthèse",
      avantages: ["Mots de liaison", "Expressions précises", "Termes techniques"],
      utilisation: "Révision quotidienne de 15 minutes",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light">
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
            <span className="text-pr-black font-medium">Ressources</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
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
          <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.18em] text-pr-orange-dark bg-pr-orange-pale px-3 py-1.5 rounded-full">
            Ressources & exercices
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black mt-6 mb-5 leading-tight">
            Ressources & exercices pratiques
          </h1>
          <div className="w-16 h-[3px] bg-pr-orange mx-auto mb-6" />
          <p className="font-dm-sans text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Outils, annales et exercices pour s'entraîner efficacement à l'épreuve de synthèse.
          </p>
        </div>

        {/* Annales BCE */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Annales BCE — épreuves officielles
            </h2>
          </div>

          <p className="font-dm-sans text-pr-gray-dark leading-relaxed mb-5">
            Accédez aux épreuves officielles de synthèse de texte du concours BCE.
            Ces documents sont essentiels pour comprendre le format exact, le niveau d'exigence et les thèmes abordés.
          </p>

          <div className="bg-pr-orange-pale/60 border-l-[3px] border-pr-orange rounded-r-md p-4 mb-7">
            <p className="font-dm-sans text-sm text-pr-gray-dark">
              <strong className="text-pr-orange-dark">Conseil —</strong> commencez par les années récentes (2023-2025) pour vous familiariser avec le format actuel, puis explorez les années plus anciennes pour voir l'évolution des sujets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annalesBCE.map((annale, index) => (
              <article
                key={index}
                className="border border-pr-gray-light rounded-lg overflow-hidden hover:border-pr-orange transition-colors group"
              >
                <header className="bg-pr-gray-bg/60 border-b border-pr-gray-light px-5 py-3 flex items-center justify-between">
                  <span className="font-dm-serif text-lg text-pr-black">BCE {annale.annee}</span>
                  <Badge className="bg-pr-orange-pale text-pr-orange-dark hover:bg-pr-orange-pale font-dm-sans text-[10px] uppercase tracking-wider">
                    {annale.textes} textes
                  </Badge>
                </header>
                <div className="p-5">
                  <h4 className="font-dm-sans font-semibold text-pr-black mb-2 text-sm">
                    {annale.titre}
                  </h4>
                  <p className="font-dm-sans text-sm text-pr-gray-dark mb-4 leading-relaxed">
                    {annale.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4 text-xs font-dm-sans text-pr-gray-mid">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Épreuve officielle BCE</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:border-pr-orange hover:text-pr-orange-dark gap-2"
                    asChild
                  >
                    <a href={annale.lien} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Voir l'épreuve {annale.annee}
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 border border-pr-gray-light rounded-lg p-6 bg-pr-gray-bg/40">
            <h4 className="font-dm-sans font-semibold text-pr-black mb-3">
              Comment utiliser ces annales&nbsp;?
            </h4>
            <ul className="space-y-2 font-dm-sans text-sm text-pr-gray-dark">
              <li className="flex items-start gap-2.5"><span className="text-pr-orange mt-0.5">→</span><span><strong className="text-pr-black">Étape 1 —</strong> Lisez les textes sans regarder le temps</span></li>
              <li className="flex items-start gap-2.5"><span className="text-pr-orange mt-0.5">→</span><span><strong className="text-pr-black">Étape 2 —</strong> Chronométrez-vous en conditions réelles (4h)</span></li>
              <li className="flex items-start gap-2.5"><span className="text-pr-orange mt-0.5">→</span><span><strong className="text-pr-black">Étape 3 —</strong> Comparez avec les corrigés types</span></li>
              <li className="flex items-start gap-2.5"><span className="text-pr-orange mt-0.5">→</span><span><strong className="text-pr-black">Étape 4 —</strong> Identifiez vos points d'amélioration</span></li>
            </ul>
          </div>
        </section>

        {/* Annales corrigées */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Annales corrigées
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annalesCorrigees.map((annale, index) => (
              <article
                key={index}
                className="border border-pr-gray-light rounded-lg p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-gray-mid">
                    {annale.niveau}
                  </span>
                  <Badge className="bg-pr-orange-pale text-pr-orange-dark hover:bg-pr-orange-pale font-dm-sans text-[10px] uppercase tracking-wider">
                    {annale.points}
                  </Badge>
                </div>
                <h3 className="font-dm-serif text-lg text-pr-black mb-2 leading-snug">
                  {annale.titre}
                </h3>
                <p className="font-dm-sans text-sm text-pr-gray-dark mb-3 leading-relaxed">
                  {annale.description}
                </p>
                <div className="flex items-center gap-2 mb-3 text-xs font-dm-sans text-pr-gray-mid">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{annale.duree}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {annale.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-dm-sans text-[10px] uppercase tracking-wider text-pr-gray-mid bg-pr-gray-bg border border-pr-gray-light/60 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="w-full mt-auto bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Télécharger
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* Exercices pratiques */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Exercices pratiques
            </h2>
          </div>

          <div className="space-y-5">
            {exercicesPratiques.map((exercice, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
                  <h3 className="font-dm-serif text-lg text-pr-black">
                    {exercice.titre}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-pr-orange-pale text-pr-orange-dark hover:bg-pr-orange-pale font-dm-sans text-[10px] uppercase tracking-wider">
                      {exercice.difficulte}
                    </Badge>
                    <Badge variant="outline" className="border-pr-gray-light text-pr-gray-mid font-dm-sans text-[10px] uppercase tracking-wider">
                      {exercice.duree}
                    </Badge>
                  </div>
                </div>

                <p className="font-dm-sans text-sm text-pr-gray-dark mb-4 leading-relaxed">
                  {exercice.description}
                </p>

                <div className="mb-5">
                  <h4 className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-orange-dark mb-2">
                    Objectifs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {exercice.objectifs.map((objectif, objIdx) => (
                      <div
                        key={objIdx}
                        className="flex items-start gap-2 font-dm-sans text-sm text-pr-gray-dark"
                      >
                        <span className="text-pr-orange mt-0.5">→</span>
                        <span>{objectif}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans gap-2">
                  <Play className="w-3.5 h-3.5" />
                  Commencer l'exercice
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Grille d'évaluation */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Grille d'évaluation détaillée
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {grillesEvaluation.map((categorie, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <h3 className="font-dm-sans font-semibold text-pr-black mb-4 text-sm uppercase tracking-wider">
                  {categorie.categorie}
                </h3>
                <ul className="space-y-2">
                  {categorie.criteres.map((critere, critIdx) => (
                    <li
                      key={critIdx}
                      className="flex items-start gap-2.5 font-dm-sans text-sm text-pr-gray-dark"
                    >
                      <span className="text-pr-orange mt-0.5">→</span>
                      <span>{critere}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-pr-orange-pale/60 border-l-[3px] border-pr-orange rounded-r-md p-4">
            <p className="font-dm-sans text-sm text-pr-gray-dark">
              <strong className="text-pr-orange-dark">Note —</strong> cette grille est basée sur les critères officiels des concours ECG. Utilisez-la pour vous auto-évaluer et identifier vos points d'amélioration.
            </p>
          </div>
        </section>

        {/* Outils pratiques */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Outils pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {outilsPratiques.map((outil, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6 flex flex-col"
              >
                <h3 className="font-dm-serif text-lg text-pr-black mb-2">
                  {outil.nom}
                </h3>
                <p className="font-dm-sans text-sm text-pr-gray-dark mb-4 leading-relaxed">
                  {outil.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-orange-dark mb-2">
                    Avantages
                  </h4>
                  <ul className="space-y-1.5">
                    {outil.avantages.map((avantage, avIdx) => (
                      <li
                        key={avIdx}
                        className="flex items-start gap-2 font-dm-sans text-xs text-pr-gray-dark"
                      >
                        <span className="text-pr-orange mt-0.5">→</span>
                        <span>{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-dm-sans text-xs text-pr-gray-mid italic mb-4">
                  {outil.utilisation}
                </p>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full mt-auto font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:border-pr-orange hover:text-pr-orange-dark gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Découvrir
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Ressources complémentaires */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-orange rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Ressources complémentaires
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-pr-gray-light rounded-lg p-6">
              <h3 className="font-dm-serif text-lg text-pr-black mb-2">
                Modèles de synthèse
              </h3>
              <p className="font-dm-sans text-sm text-pr-gray-dark mb-4 leading-relaxed">
                Exemples de synthèses excellentes avec analyse détaillée.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:border-pr-orange hover:text-pr-orange-dark gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                Télécharger les modèles
              </Button>
            </div>

            <div className="border border-pr-gray-light rounded-lg p-6">
              <h3 className="font-dm-serif text-lg text-pr-black mb-2">
                Vocabulaire spécialisé
              </h3>
              <p className="font-dm-sans text-sm text-pr-gray-dark mb-4 leading-relaxed">
                Lexique complet pour la synthèse de texte.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:border-pr-orange hover:text-pr-orange-dark gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                Télécharger le lexique
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-pr-gray-bg border border-pr-gray-light rounded-lg p-10 text-center mb-10">
          <h3 className="font-dm-serif text-2xl text-pr-black mb-3">
            Prêt à utiliser ces ressources&nbsp;?
          </h3>
          <div className="w-12 h-[2px] bg-pr-orange mx-auto mb-4" />
          <p className="font-dm-sans text-pr-gray-dark mb-6 max-w-xl mx-auto leading-relaxed">
            Toutes ces ressources sont conçues pour vous accompagner dans votre progression et maximiser vos chances de réussite.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/formation/synthese-texte/methode">
              <Button
                variant="outline"
                className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-white hover:border-pr-orange hover:text-pr-orange-dark gap-2"
              >
                <Target className="w-4 h-4" />
                Voir la méthode détaillée
              </Button>
            </Link>
            <Link to="/formation/synthese-texte/travail-annuel">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans gap-2">
                <Calendar className="w-4 h-4" />
                Planning annuel
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

export default RessourcesPage;
