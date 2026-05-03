import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Youtube,
  Target,
  TrendingUp,
  Brain,
  Code,
  Star,
  Users,
  Calendar,
  CheckCircle,
  BookOpen,
  Play,
  Home,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/60">
        <div className="h-[2px] w-full bg-pr-orange" />
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-[11px] uppercase tracking-wider text-pr-gray-mid">
            <Link to="/" className="flex items-center gap-1.5 hover:text-pr-orange-dark transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
            <Link to="/formation" className="hover:text-pr-orange-dark transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
            <span className="text-pr-black font-semibold normal-case tracking-normal">
              Formation <span className="text-pr-orange">Python</span> ECG
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-pr-orange-pale border border-pr-orange-soft/60">
            <Brain className="h-3.5 w-3.5 text-pr-orange-dark" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
              Article · Stratégie
            </span>
          </div>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black tracking-tight leading-tight mb-4">
            Pourquoi travailler <span className="text-pr-orange">Python</span> en prépa ECG
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-14 bg-pr-orange" />
          </div>
          <p className="text-lg text-pr-gray-dark/80 italic">
            (et pourquoi mon coaching est ta meilleure option)
          </p>
        </header>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Vidéo Loom - L'importance de Python aux concours */}
        <Card className="mb-10 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pr-orange-dark">
              <Youtube className="h-5 w-5 text-pr-orange" /> L'importance de Python aux concours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Accès direct à la formation */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-pr-orange-dark">
              <BookOpen className="h-8 w-8 text-pr-orange" /> Accédez directement à la formation Python ECG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-pr-orange-dark text-lg mb-6">
              Découvrez notre formation complète Python structurée en 4 modules progressifs avec exercices pratiques :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Module Links */}
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft hover:shadow-sm transition-all group-hover:border-pr-orange-soft">
                  <h4 className="font-bold text-pr-orange-dark mb-2 text-lg">Module 0: Fondamentaux</h4>
                  <p className="text-pr-orange-dark mb-3">Variables, boucles, conditions, fonctions</p>
                  <div className="flex items-center text-pr-orange group-hover:text-pr-orange-dark">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-matrices" className="group">
                <div className="bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft hover:shadow-sm transition-all group-hover:border-pr-orange-soft">
                  <h4 className="font-bold text-pr-orange-dark mb-2 text-lg">Module 1: Matrices & Numpy</h4>
                  <p className="text-pr-orange-dark mb-3">Algèbre linéaire, résolution de systèmes</p>
                  <div className="flex items-center text-pr-orange group-hover:text-pr-orange-dark">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-analyse" className="group">
                <div className="bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft hover:shadow-sm transition-all group-hover:border-pr-orange-soft">
                  <h4 className="font-bold text-pr-orange-dark mb-2 text-lg">Module 2: Analyse & Graphiques</h4>
                  <p className="text-pr-orange-dark mb-3">Matplotlib, tracer des fonctions, suites</p>
                  <div className="flex items-center text-pr-orange group-hover:text-pr-orange-dark">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-probabilites" className="group">
                <div className="bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft hover:shadow-sm transition-all group-hover:border-pr-orange-soft">
                  <h4 className="font-bold text-pr-orange-dark mb-2 text-lg">Module 3: Probabilités</h4>
                  <p className="text-pr-orange-dark mb-3">Simulations, lois, statistiques</p>
                  <div className="flex items-center text-pr-orange group-hover:text-pr-orange-dark">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link to="/formation">
                <Button size="lg" className="bg-pr-orange hover:bg-pr-orange-dark text-white px-8 py-4 text-lg shadow-sm">
                  <BookOpen className="h-5 w-5 mr-2" /> Voir toute la formation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Témoignage en vedette */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-pr-orange-dark mb-4">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions Python ! »
            </blockquote>
            <cite className="text-pr-orange font-semibold">— Léa, 2ᵉ année ECG</cite>
          </CardContent>
        </Card>

        {/* Section 1 - Le vrai poids de Python */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Target className="h-6 w-6 text-pr-orange" /> 1. Le vrai poids de Python aux concours : un gisement de points sous-estimé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme approfondies. Résultat :</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-pr-orange mt-0.5 flex-shrink-0" />
                <span>
                  <strong>10 à 20 %</strong> selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC, etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-pr-orange mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-pr-orange mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Questions souvent "cadeaux" :</strong> analyser un script, compléter une fonction, traduire une somme ou un raisonnement en code
                </span>
              </li>
            </ul>
            <div className="bg-pr-orange-pale/50 p-4 rounded-lg border-l-4 border-pr-orange">
              <p className="text-pr-orange-dark">
                <strong>Moralité :</strong> même si tu n'es « pas fan d'info », ignorer Python revient à laisser jusqu'à 5 points sur la table. Dans une filière où chaque demi-point se paie d'heures de calcul intégral, c'est un luxe que tu ne peux pas te permettre.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Pourquoi la plupart passent à côté */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <TrendingUp className="h-6 w-6 text-pr-orange" /> 2. Pourquoi la plupart des préparationnaires passent à côté
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-pr-orange font-bold">•</span>{' '}
                <span>
                  <strong>Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → donc personne ne l'approfondit vraiment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pr-orange font-bold">•</span>{' '}
                <span>
                  <strong>Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pr-orange font-bold">•</span>{' '}
                <span>
                  <strong>Stress de l'install :</strong> certains n'ont jamais réussi à faire tourner Numpy sur leur PC ; d'autres découvrent Colab la veille du DS
                </span>
              </li>
            </ul>
            <div className="bg-pr-orange-pale p-4 rounded-lg border-l-4 border-pr-orange-soft">
              <p className="text-pr-orange">
                <strong>Résultat :</strong> le jour J, 80 % des candidats trébuchent sur trois erreurs classiques : indices hors liste, confusion entre print et return, boucle mal initialisée.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - La stratégie gagnante */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Brain className="h-6 w-6 text-pr-orange" /> 3. La stratégie gagnante : régularité + feedback immédiat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour engranger les +3 à +5 pts sûrs, il suffit de :</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-pr-orange-pale p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-pr-orange mb-2">1</div>
                <p className="text-sm">
                  Mémoriser les <strong>54 commandes clés</strong> (import, boucles, Numpy, random, matplotlib)
                </p>
              </div>
              <div className="bg-pr-orange-pale p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-pr-orange mb-2">2</div>
                <p className="text-sm">
                  S'entraîner <strong>1 h par semaine</strong> sur des questions type-concours
                </p>
              </div>
              <div className="bg-pr-orange-pale p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-pr-orange mb-2">3</div>
                <p className="text-sm">
                  Recevoir un <strong>feedback instantané</strong> qui corrige tes erreurs
                </p>
              </div>
            </div>
            <p className="text-center font-semibold">
              C'est exactement ce que j'ai empaqueté dans mon coaching Python « premium mais pas trop cher ».
            </p>
          </CardContent>
        </Card>

        {/* Section 4 - Ce que tu vas maîtriser */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Code className="h-6 w-6 text-pr-orange" /> 4. Ce que tu vas maîtriser (et comment)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-pr-orange-soft">
                <thead>
                  <tr className="bg-pr-orange-pale">
                    <th className="border border-pr-orange-soft p-3 text-left text-pr-orange-dark font-semibold">Bloc</th>
                    <th className="border border-pr-orange-soft p-3 text-left text-pr-orange-dark font-semibold">Objectif concret</th>
                    <th className="border border-pr-orange-soft p-3 text-left text-pr-orange-dark font-semibold">Outil d'apprentissage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-pr-orange-soft p-3 font-semibold text-pr-orange-dark">Bases Python</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Entrées/sorties, boucles, conditions, fonctions</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Vidéos « micro-concepts » + quiz « 54 commandes »</td>
                  </tr>
                  <tr className="bg-pr-orange-pale/50">
                    <td className="border border-pr-orange-soft p-3 font-semibold text-pr-orange-dark">Algèbre & Numpy</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Inverser une matrice, résoudre Ax = b</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">TP guidé sur Colab</td>
                  </tr>
                  <tr>
                    <td className="border border-pr-orange-soft p-3 font-semibold text-pr-orange-dark">Analyse</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Tracer f(x), suite (uₙ) et chercher une racine</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Notebook interactif + corrigé vidéo</td>
                  </tr>
                  <tr className="bg-pr-orange-pale/50">
                    <td className="border border-pr-orange-soft p-3 font-semibold text-pr-orange-dark">Probas/Stats</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Simuler loi binomiale, moyenne, médiane</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">20 exos progressifs</td>
                  </tr>
                  <tr>
                    <td className="border border-pr-orange-soft p-3 font-semibold text-pr-orange-dark">Exos concours</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">50 questions récurrentes (BCE/Ecricome)</td>
                    <td className="border border-pr-orange-soft p-3 text-pr-orange-dark">Plateforme IA qui corrige ton code en direct</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-pr-orange-pale/50 p-4 rounded-lg mt-4 border-l-4 border-pr-orange-soft">
              <p className="text-pr-orange-dark">
                <strong>USP :</strong> l'évaluation interactive. Tu colles ton script → l'IA lance les tests → elle t'indique exactement où ça bloque et te propose un indice. Tu corriges → tu relances → tu valides. Boucle <em>Lire → Coder → Tester → Corriger</em>, jusqu'à la réussite complète.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - L'offre en détail */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Star className="h-6 w-6 text-pr-orange" /> 5. L'offre en détail
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Produit cœur */}
            <div className="bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft">
              <h4 className="font-bold text-lg text-pr-orange-dark mb-3">Produit cœur</h4>
              <p className="text-pr-orange-dark mb-2">
                <strong>6 h de coaching individuel</strong> (visioconf, colab partagé)
              </p>
              <ul className="text-pr-orange-dark space-y-1">
                <li>– Analyse d'extraits de sujets 2021-2024</li>
                <li>– Algorithmes « à connaître par cœur » expliqués pas à pas</li>
              </ul>
            </div>
            {/* Bonus */}
            <div>
              <h4 className="font-bold text-lg mb-4">Bonus</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-pr-orange-pale/50 p-4 rounded-lg border border-pr-orange-soft">
                  <h5 className="font-semibold text-pr-orange-dark">1. Pack 50 exercices</h5>
                  <p className="text-sm text-pr-orange">À maîtriser avant les concours (avec corrigés vidéo)</p>
                </div>
                <div className="bg-pr-orange-pale/50 p-4 rounded-lg border border-pr-orange-soft">
                  <h5 className="font-semibold text-pr-orange-dark">2. Cheatsheet PDF</h5>
                  <p className="text-sm text-pr-orange-dark">La fiche « 54 commandes » à coller sur ton bureau</p>
                </div>
                <div className="bg-pr-orange-pale/50 p-4 rounded-lg border border-pr-orange-soft">
                  <h5 className="font-semibold text-pr-orange-dark">3. WhatsApp privé 30 jours</h5>
                  <p className="text-sm text-pr-orange">Questions illimitées, réponse en –24 h</p>
                </div>
                <div className="bg-pr-orange-pale/50 p-4 rounded-lg border border-pr-orange-soft">
                  <h5 className="font-semibold text-pr-orange-dark">4. 1 h de contenu vidéo</h5>
                  <p className="text-sm text-pr-orange">Optimisations & pièges classiques</p>
                </div>
              </div>
            </div>
            {/* Lead magnet */}
            <div className="bg-pr-orange-pale/50 p-4 rounded-lg border border-pr-orange-soft">
              <h4 className="font-bold text-lg text-pr-orange-dark mb-2">Lead magnet gratuit</h4>
              <p className="text-pr-orange-dark">
                Quiz interactif « Commandes Python essentielles » – 15 questions chronométrées pour évaluer ton niveau immédiatement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Prix */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Star className="h-6 w-6 text-pr-orange" /> 6. Combien ça coûte ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center bg-pr-orange-pale/50 p-6 rounded-lg border border-pr-orange-soft">
              <div className="text-3xl font-bold text-pr-orange-dark mb-2">297 €</div>
              <p className="text-lg text-pr-orange-dark">Coaching 6 h + 4 bonus</p>
              <p className="text-sm text-pr-orange">≈ 50 € l'heure, soit le tarif d'un cours particulier standard… avec tout le contenu numérique en prime.</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-pr-orange" /> <span>Paiement en 2 x sans frais disponible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pr-orange mt-0.5" />{' '}
                <span>
                  Pas de garantie ? Exact : tu payes si – et seulement si – tu veux ce résultat. (J'assume : mon taux de satisfaction est supérieur à 95 %, inutile de mettre un filet de sécurité artificiel.)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 7 - Témoignage détaillé */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Users className="h-6 w-6 text-pr-orange" /> 7. Témoignage éclair – Léa, 2ᵉ année ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic text-pr-orange-dark mb-4">
              « Dimitar a démystifié Python ; je partais de zéro. Résultat : sur mon dernier DS, j'ai réussi toutes les questions Python. Je me sens enfin sereine pour le concours. »
            </blockquote>
            <p className="text-pr-orange-dark font-semibold">Si Léa peut le faire en quelques semaines, tu le peux aussi.</p>
          </CardContent>
        </Card>

        {/* Section 8 - Appel à l'action */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Calendar className="h-6 w-6 text-pr-orange" /> 8. OK, mais comment passer à l'action ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-pr-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span>
                  <strong>Commence par la formation :</strong> accède directement aux modules de cours et d'exercices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-pr-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span>Pratique avec nos outils : flashcards et commandes de référence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-pr-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span>
                  <strong>Besoin d'un accompagnement personnalisé ?</strong> Réserve ton coaching individuel
                </span>
              </li>
            </ol>
            <div className="text-center mt-6 space-y-4">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/python-flashcards">
                  <Button variant="outline" size="lg" className="text-base px-6 py-3 border-pr-orange-soft text-pr-orange-dark hover:bg-pr-orange-pale">
                    Flashcards Python
                  </Button>
                </Link>
                <Link to="/python-reference">
                  <Button variant="outline" size="lg" className="text-base px-6 py-3 border-pr-orange-soft text-pr-orange-dark hover:bg-pr-orange-pale">
                    Toutes les commandes
                  </Button>
                </Link>
              </div>
              <Link to="/offre/coaching-python">
                <Button size="lg" className="text-lg px-8 py-4 bg-pr-orange hover:bg-pr-orange-dark shadow-sm">
                  Coaching personnalisé
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section 9 - FAQ */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-pr-orange-dark">
              <Users className="h-6 w-6 text-pr-orange" /> 9. FAQ express
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-pr-orange-soft pl-4">
                <p className="font-semibold text-pr-orange-dark">Q : Et si je n'ai jamais installé Python ?</p>
                <p className="text-pr-orange-dark">R : On travaillera directement sur Google Colab : aucune installation, juste un navigateur.</p>
              </div>
              <div className="border-l-4 border-pr-orange-soft pl-4">
                <p className="font-semibold text-pr-orange">Q : Je vise HEC, pas EM Lyon ; c'est assez pointu ?</p>
                <p className="text-pr-orange">R : Oui : on décortique les sujets HEC 2022-2024 et on pousse jusqu'aux pièges d'oraux.</p>
              </div>
              <div className="border-l-4 border-pr-orange-soft pl-4">
                <p className="font-semibold text-pr-orange-dark">Q : 297 € pour 6 h, c'est vraiment « premium mais pas trop cher » ?</p>
                <p className="text-pr-orange-dark">
                  R : Regarde les prépas privées : 90 € l'heure, sans quiz, sans PDF, sans suivi WhatsApp. À toi de voir.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vidéo YouTube - Pourquoi Python est essentiel */}
        <Card className="mb-8 border-2 border-pr-orange-soft bg-pr-orange-pale/30 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pr-orange-dark">
              <Youtube className="h-5 w-5 text-pr-orange" /> Pourquoi Python est essentiel en ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/cBG8EJsHkwA"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default PourquoiPythonPrepaECGPage;
