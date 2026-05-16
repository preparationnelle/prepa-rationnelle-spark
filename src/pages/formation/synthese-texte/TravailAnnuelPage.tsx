import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Target,
  BookOpen,
  TrendingUp,
  Award,
  Calendar,
  Timer,
} from 'lucide-react';

const TravailAnnuelPage: React.FC = () => {
  const travailAnnuel = [
    {
      title: "Septembre — Novembre · Acquisition des bases",
      icon: Calendar,
      objectifs: [
        "Maîtriser la méthodologie de base",
        "Développer les automatismes de lecture analytique",
        "Apprendre à identifier les idées principales",
      ],
      activites: [
        "2 synthèses par semaine sur des sujets simples",
        "Étude des corrigés types et analyse des erreurs",
        "Mémorisation du vocabulaire spécifique de la synthèse",
      ],
      evaluation: "Test de validation : réussir 3 synthèses sur 5 avec méthode correcte",
      outils: [
        "Annales de l'année précédente (niveau lycée)",
        "Sujets d'entraînement progressifs",
        "Chronomètre pour respecter le timing",
      ],
    },
    {
      title: "Décembre — Janvier · Perfectionnement technique",
      icon: TrendingUp,
      objectifs: [
        "Améliorer la qualité de l'expression écrite",
        "Maîtriser la gestion du temps",
        "Développer la capacité de synthèse",
      ],
      activites: [
        "3 synthèses par semaine avec chronométrage",
        "Travail sur la reformulation précise",
        "Entraînement aux différents types de sujets",
      ],
      evaluation: "Test intermédiaire : synthèse complète en 4h avec corrigé détaillé",
      outils: [
        "Sujets de concours passés",
        "Grille d'auto-évaluation",
        "Enregistrement audio des phases",
      ],
    },
    {
      title: "Février — Mars · Préparation intensive",
      icon: Timer,
      objectifs: [
        "Simuler les conditions réelles d'examen",
        "Maîtriser tous les types de sujets",
        "Optimiser la gestion du stress",
      ],
      activites: [
        "1 DS blanc complet par semaine",
        "Analyse comparative des performances",
        "Travail sur les points faibles identifiés",
      ],
      evaluation: "Évaluation finale : moyenne ≥ 14/20 sur 3 DS blancs consécutifs",
      outils: [
        "Sujets de concours récents",
        "Caméra pour analyser les gestes",
        "Journal de progression détaillé",
      ],
    },
    {
      title: "Avril — Concours · Maintien du niveau",
      icon: Award,
      objectifs: [
        "Préserver les acquis",
        "Gérer le stress des concours",
        "Maintenir la confiance",
      ],
      activites: [
        "Révision des méthodes et automatismes",
        "Entraînement léger pour maintenir le rythme",
        "Préparation mentale et gestion du stress",
      ],
      evaluation: "Objectif : maintenir le niveau acquis lors des épreuves",
      outils: [
        "Fiches de révision synthétiques",
        "Exercices de respiration",
        "Visualisation mentale positive",
      ],
    },
  ];

  const planningHebdomadaire = [
    {
      periode: "Septembre — Novembre",
      jours: [
        { jour: "Lundi", task: "Lecture analytique (1h)" },
        { jour: "Mardi", task: "Vocabulaire synthèse (45 min)" },
        { jour: "Mercredi", task: "Synthèse courte (2h)" },
        { jour: "Jeudi", task: "Correction & analyse (1h)" },
        { jour: "Vendredi", task: "Révision méthodes (30 min)" },
        { jour: "Week-end", task: "Synthèse complète (3h)" },
      ],
    },
    {
      periode: "Décembre — Janvier",
      jours: [
        { jour: "Lundi", task: "Lecture rapide (45 min)" },
        { jour: "Mardi", task: "Expression écrite (1h)" },
        { jour: "Mercredi", task: "Synthèse chronométrée (3h)" },
        { jour: "Jeudi", task: "Auto-correction (1h30)" },
        { jour: "Vendredi", task: "Types de sujets (1h)" },
        { jour: "Week-end", task: "DS blanc partiel (4h)" },
      ],
    },
    {
      periode: "Février — Mars",
      jours: [
        { jour: "Lundi", task: "Simulation conditions (2h)" },
        { jour: "Mardi", task: "Analyse erreurs (1h)" },
        { jour: "Mercredi", task: "DS blanc complet (4h)" },
        { jour: "Jeudi", task: "Débriefing détaillé (2h)" },
        { jour: "Vendredi", task: "Travail points faibles (1h30)" },
        { jour: "Week-end", task: "Révision & détente (3h)" },
      ],
    },
  ];

  const ressourcesRecommandees = [
    {
      categorie: "Annales et sujets",
      ressources: [
        "Annales BCE des 5 dernières années",
        "Sujets ECRICOME corrigés",
        "Banque de sujets thématiques",
        "Sujets d'entraînement progressifs",
      ],
    },
    {
      categorie: "Outils pédagogiques",
      ressources: [
        "Chronomètre précis pour les phases",
        "Grilles d'évaluation détaillées",
        "Modèles de synthèses excellentes",
        "Fiches de vocabulaire spécialisé",
      ],
    },
    {
      categorie: "Matériel technique",
      ressources: [
        "Copies doubles pour brouillon",
        "Stylo rouge pour annotations",
        "Marqueurs pour soulignements",
        "Classeur d'organisation",
      ],
    },
  ];

  const motivation = [
    {
      titre: "Célébrer les progrès",
      items: [
        "Noter chaque amélioration",
        "Comparer avec les premières synthèses",
        "Valoriser les efforts fournis",
        "Se récompenser régulièrement",
      ],
    },
    {
      titre: "Fixer des objectifs réalistes",
      items: [
        "Objectifs quotidiens atteignables",
        "Progression par paliers",
        "Ajustement selon les résultats",
        "Focus sur le processus",
      ],
    },
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
            <span className="text-pr-black font-medium">Travail annuel</span>
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
            Planning · 9 mois
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black mt-6 mb-5 leading-tight">
            Organisation du travail annuel
          </h1>
          <div className="w-16 h-[3px] bg-pr-black mx-auto mb-6" />
          <p className="font-dm-sans text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Planning complet sur 9 mois pour maîtriser l'épreuve de synthèse de texte.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm font-dm-sans text-pr-gray-mid">
            <span>Septembre → Avril</span>
            <span className="text-pr-gray-light">·</span>
            <span>8 à 12 h / semaine</span>
          </div>
        </div>

        {/* Périodes */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Planning annuel détaillé
            </h2>
          </div>

          <div className="space-y-5">
            {travailAnnuel.map((periode, index) => {
              const Icon = periode.icon;
              return (
                <article
                  key={index}
                  className="border border-pr-gray-light rounded-lg p-7"
                >
                  <header className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-pr-gray-bg rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-pr-black" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-dm-serif text-xl text-pr-black leading-tight">
                        {periode.title}
                      </h3>
                    </div>
                    <Badge className="bg-pr-gray-bg text-pr-black hover:bg-pr-gray-bg font-dm-sans text-[10px] uppercase tracking-wider">
                      {periode.objectifs.length} objectifs
                    </Badge>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                    <div>
                      <h4 className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-black mb-3">
                        Objectifs
                      </h4>
                      <ul className="space-y-2">
                        {periode.objectifs.map((objectif, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 font-dm-sans text-sm text-pr-gray-dark"
                          >
                            <span className="text-pr-black mt-0.5">→</span>
                            <span>{objectif}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-black mb-3">
                        Activités
                      </h4>
                      <ul className="space-y-2">
                        {periode.activites.map((activite, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 font-dm-sans text-sm text-pr-gray-dark"
                          >
                            <span className="text-pr-black mt-0.5">→</span>
                            <span>{activite}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-black mb-3">
                      Outils recommandés
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {periode.outils.map((outil, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 font-dm-sans text-sm text-pr-gray-dark"
                        >
                          <span className="text-pr-black mt-0.5">→</span>
                          <span>{outil}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-[3px] border-pr-black bg-pr-gray-bg/40 rounded-r px-4 py-3">
                    <p className="font-dm-sans text-sm text-pr-gray-dark">
                      <strong className="text-pr-black">Évaluation —</strong> {periode.evaluation}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Planning hebdo */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Planning hebdomadaire par période
            </h2>
          </div>

          <div className="space-y-5">
            {planningHebdomadaire.map((periode, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <h3 className="font-dm-serif text-lg text-pr-black mb-5">
                  {periode.periode}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {periode.jours.map((jour) => (
                    <div
                      key={jour.jour}
                      className="bg-pr-gray-bg/50 border border-pr-gray-light/60 rounded-md px-4 py-3"
                    >
                      <div className="font-dm-sans text-[10px] uppercase tracking-wider font-semibold text-pr-black mb-1">
                        {jour.jour}
                      </div>
                      <div className="font-dm-sans text-sm text-pr-gray-dark">
                        {jour.task}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ressources */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Ressources recommandées
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ressourcesRecommandees.map((categorie, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <h3 className="font-dm-sans font-semibold text-pr-black mb-4 text-sm uppercase tracking-wider">
                  {categorie.categorie}
                </h3>
                <ul className="space-y-2">
                  {categorie.ressources.map((ressource, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-dm-sans text-sm text-pr-gray-dark"
                    >
                      <span className="text-pr-black mt-0.5">→</span>
                      <span>{ressource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Suivi */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Suivi de progression
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-pr-gray-light rounded-lg p-6">
              <h3 className="font-dm-sans font-semibold text-pr-black mb-4">
                Journal de bord
              </h3>
              <ul className="space-y-2 font-dm-sans text-sm text-pr-gray-dark">
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Date et durée de chaque séance</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Sujets travaillés</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Points forts et difficultés rencontrées</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Objectifs pour la séance suivante</span></li>
              </ul>
            </div>

            <div className="border border-pr-gray-light rounded-lg p-6">
              <h3 className="font-dm-sans font-semibold text-pr-black mb-4">
                Métriques à suivre
              </h3>
              <ul className="space-y-2 font-dm-sans text-sm text-pr-gray-dark">
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Temps moyen par synthèse</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Nombre de mots respecté</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Qualité de la structure</span></li>
                <li className="flex items-start gap-2.5"><span className="text-pr-black mt-0.5">→</span><span>Fidélité aux textes sources</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motivation */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-pr-black rounded-full" />
            <h2 className="font-dm-serif text-2xl text-pr-black">
              Maintenir la motivation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {motivation.map((bloc, index) => (
              <div
                key={index}
                className="border border-pr-gray-light rounded-lg p-6"
              >
                <h3 className="font-dm-sans font-semibold text-pr-black mb-4">
                  {bloc.titre}
                </h3>
                <ul className="space-y-2 font-dm-sans text-sm text-pr-gray-dark">
                  {bloc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-pr-black mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-pr-gray-bg border border-pr-gray-light rounded-lg p-10 text-center mb-10">
          <h3 className="font-dm-serif text-2xl text-pr-black mb-3">
            Prêt à commencer votre planning&nbsp;?
          </h3>
          <div className="w-12 h-[2px] bg-pr-black mx-auto mb-4" />
          <p className="font-dm-sans text-pr-gray-dark mb-6 max-w-xl mx-auto leading-relaxed">
            Cette organisation structurée vous garantit une progression régulière et efficace tout au long de l'année.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/formation/synthese-texte/methode">
              <Button
                variant="outline"
                className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-carnet-paper-2 hover:border-pr-black hover:text-pr-black gap-2"
              >
                <Target className="w-4 h-4" />
                Voir la méthode
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

export default TravailAnnuelPage;
