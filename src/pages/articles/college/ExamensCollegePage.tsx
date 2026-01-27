import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, PenTool, Timer, CheckCircle, Brain, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ExamensCollegePage = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-white">
                {/* Fil d'Ariane */}
                <nav className="border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-gray-500">
                            <Link to="/" className="flex items-center gap-1 hover:text-gray-900"><Home className="h-4 w-4" />Accueil</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <Link to="/articles" className="hover:text-gray-900">Articles</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <Link to="/articles/college" className="hover:text-gray-900">Collège</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className="text-gray-900">Préparation aux examens</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Juin 2024 · 8 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Préparation aux examens : techniques efficaces pour réussir ses contrôles
                        </h1>
                        <p className="text-xl text-gray-600">
                            Méthodes éprouvées pour préparer et réussir les contrôles continus et le Brevet des collèges sans angoisse.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            Qu'il s'agisse d'une interrogation surprise, d'un devoir commun ou du Brevet en fin de 3ème, l'évaluation fait partie du quotidien du collégien. Pourtant, peu d'élèves savent vraiment <em>comment</em> réviser.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Relire son cours la veille au soir ne suffit pas. Réussir un examen, c'est comme une performance sportive : ça se prépare avec stratégie et entraînements.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">1. Avant la révision : l'écoute active en classe</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                            <p className="text-blue-900 font-medium">
                                Le secret le mieux gardé des bons élèves : 70% du travail d'apprentissage se fait EN CLASSE.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Un élève qui écoute, participe et pose des questions part avec une longueur d'avance immense. Si votre enfant rentre chez lui sans avoir compris le cours du jour, la révision sera une corvée. Encouragez-le à ne jamais quitter la salle de classe avec une incompréhension.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">2. La méthode du rétro-planning (J-7)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Pour un gros contrôle ou un brevet blanc, l'improvisation est l'ennedie. Apprenez-lui à compter à rebours :
                        </p>
                        <ul className="text-gray-700 space-y-3 my-4">
                            <li className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                                <span><strong>J-7 :</strong> Je rassemble mes cours, je vérifie qu'il ne me manque rien. Je fais mes fiches de synthèse.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                                <span><strong>J-5 à J-3 :</strong> J'apprends mes fiches par cœur (dates, définitions, formules). Je récite.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                                <span><strong>J-2 :</strong> Je m'entraîne. Je refais les exercices faits en classe SANS regarder la correction. C'est l'étape cruciale.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                                <span><strong>J-1 :</strong> Relecture légère. Je prépare mes affaires. Je me couche tôt.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">3. Le jour J : gestion du temps et stress</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Devant la copie, beaucoup d'élèves perdent leurs moyens. Voici quelques réflexes de "pro" à lui enseigner :
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">La lecture intégrale</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Avant d'écrire le premier mot, on lit TOUT le sujet. Cela permet au cerveau de s'activer sur les différentes parties et d'éviter les hors-sujets.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Commencer par ce qu'on sait faire</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Ne jamais bloquer 15 minutes sur la première question si elle est dure. Il faut commencer par les exercices où l'on est à l'aise. Cela rassure, met en confiance et garantit des points rapidement.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">La gestion du chrono</h3>
                        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <Timer className="h-8 w-8 text-orange-500" />
                            <p className="text-gray-700 text-sm">
                                Si l'épreuve dure 1h et qu'il y a 4 exercices notés sur 5 points chacun, on doit passer environ 15 minutes par exercice. Si ça dépasse, on passe au suivant et on reviendra plus tard.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">4. La minute de relecture</h2>
                        <p className="text-gray-700 leading-relaxed">
                            C'est souvent l'étape sacrifiée. "J'ai fini, je rends ma copie !" Erreur. Les 5 dernières minutes permettent souvent de sauver 1 ou 2 points bêtement perdus :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                            <li>Vérifier l'accord sujet-verbe.</li>
                            <li>Vérifier les unités (cm, m, km/h...).</li>
                            <li>Vérifier qu'on n'a pas oublié une question au verso de la feuille !</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Un examen n'est pas un piège, c'est une occasion de montrer ce qu'on a appris. Avec une préparation méthodique, le stress diminue et les résultats augmentent.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Apprendre à passer des examens est un savoir-faire qui servira toute la vie. Commencez petit, valorisez les progrès, et dédramatisez les échecs : ils sont souvent les meilleurs professeurs pour l'examen suivant.
                        </p>
                    </div>
                </article>

                {/* Navigation bas */}
                <div className="border-t border-gray-100 py-8">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <Link to="/articles/college">
                            <Button variant="ghost" className="gap-2 text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="h-4 w-4" />
                                Retour aux articles Collège
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamensCollegePage;
