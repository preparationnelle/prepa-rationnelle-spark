import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

import SEO from '@/components/SEO';

const AccompagnementLecturePage = () => {
    return (
        <>
            <SEO
                title="Accompagner la lecture à la maison"
                description="Conseils pour aider votre enfant en difficulté de lecture : méthodes ludiques et accompagnement bienveillant pour transformer la contrainte en plaisir."
                type="article"
            />
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
                            <Link to="/articles/primaire" className="hover:text-gray-900">Primaire</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className="text-gray-900">Accompagnement Lecture</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · 2024 · 8 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Accompagner la Lecture à la Maison : Plaisir, Pas Devoir
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comment soutenir l'apprentissage de la lecture sans transformer ça en corvée pour vous et votre enfant.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                            <h3 className="text-orange-900 font-bold text-lg mt-0">Note aux parents</h3>
                            <p className="text-orange-800 mb-0">
                                <strong>52% des parents</strong> se disent anxieux concernant les résultats scolaires. En matière de lecture, la différence majeure académique n'est pas la précocité, mais l'amour de la lecture.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Introduction : La Tension Fondamentale</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Vous regardez votre enfant (CP/CE1) qui butte sur les syllabes. Vous sentez l'impatience monter. "Il va prendre du retard ?"
                            Puis, il lit une ligne seul. Ses yeux brillent. C'est ça qu'il faut cultiver.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Cet article vous aide à distinguer "accompagnement bienveillant" et "contrôle stressant".
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Comprendre le Développement Normal (CP-CE2)</h2>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">CP (6-7 ans) : Décodage</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-green-700 uppercase">Ce qui est normal</p>
                                        <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                            <li>Lecture lente, syllabique ("b-a-teau")</li>
                                            <li>Fatigue rapide (10-15 min)</li>
                                            <li>Quelques inversions (b/d)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-orange-700 uppercase">Pas d'inquiétude</p>
                                        <p className="text-sm text-gray-600">C'est du décodage en construction. Compréhension globale souvent décalée.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">CE1 (7-8 ans) : Fluidité Émergeante</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-green-700 uppercase">Ce qui est normal</p>
                                        <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                            <li>Reconnaissance mots entiers</li>
                                            <li>Peut lire phrase simple et comprendre</li>
                                            <li>Commence à lire pour le plaisir</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-orange-700 uppercase">Pas d'inquiétude</p>
                                        <p className="text-sm text-gray-600">Toujours quelques erreurs sur mots nouveaux. Hésite encore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">La Grande Erreur : Comment on Crée des Enfants Qui Détestent Lire</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Erreur #1 : Corriger Chaque Mot</h3>
                        <p className="text-gray-700">
                            Si vous interrompez chaque phrase pour corriger "leu" en "le", l'enfant intègre que lire = examen. Résultat : anxiété et perte de plaisir.
                        </p>
                        <p className="text-gray-700 italic border-l-2 border-gray-300 pl-4 my-2">
                            Mieux faire : Laisser passer les petites erreurs si le sens global est préservé. Valorisez l'effort.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Erreur #2 : Faire Lire Plus Que Voulu</h3>
                        <p className="text-gray-700">
                            Imposer "20 minutes sinon pas de télé" transforme la lecture en punition.
                        </p>
                        <p className="text-gray-700 italic border-l-2 border-gray-300 pl-4 my-2">
                            Mieux faire : Arrêter dès les premiers signes de fatigue réelle. Mieux vaut 5 minutes positives que 20 minutes de conflit.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Erreur #3 : Comparer</h3>
                        <p className="text-gray-700">
                            "Pourquoi tu ne lis pas comme ta cousine ?" crée honte et blocage. Chaque enfant a son déclic lecture à un moment différent (entre 5 et 8 ans).
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les Bonnes Pratiques : Cultiver l'Amour de Lire</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pratique #1 : Lire Ensemble (Le Plus Important)</h3>
                        <p className="text-gray-700">
                            La lecture partagée est magique. Vous lisez un paragraphe, il en lit un court. Vous portez l'histoire quand c'est difficile, il participe quand c'est facile. C'est un moment de connexion, pas de test.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pratique #2 : Lire Pour Lui (Même s'il Sait Lire)</h3>
                        <p className="text-gray-700">
                            Ne cessez pas l'histoire du soir dès qu'il sait déchiffrer ! Lui lire des histoires plus complexes que ce qu'il peut lire seul développe son vocabulaire et son imaginaire sans l'effort du décodage.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pratique #3 : Connecter Lire à ses Intérêts</h3>
                        <p className="text-gray-700">
                            Il aime Minecraft ? Achetez le guide Minecraft. Il aime les dinosaures ? Une encyclopédie dinosaures. Lire pour s'informer sur sa passion crée une motivation intrinsèque puissante.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Signes d'Alerte : Quand Consulter ?</h2>
                        <ul className="text-gray-700 space-y-2">
                            <li>✅ Fin CE1 : confusion de sons simples persiste (&gt;30% temps)</li>
                            <li>✅ CE2 : lecture toujours très laborieuse et hachée</li>
                            <li>✅ Plaintes physiques (maux de tête, yeux) systématiques à la lecture</li>
                            <li>✅ Antécédents familiaux de dyslexie</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Dans ces cas, un bilan orthophonique est recommandé pour éliminer ou traiter un trouble (dyslexie, troubles visuels).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Votre rôle n'est pas de créer un lecteur performant à 6 ans et demi. C'est de créer un enfant qui <strong>aimera lire toute sa vie</strong>. La fluidité viendra. L'amour des livres, lui, se cultive avec patience et douceur.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Relaxez. Célébrez les petits progrès. Et partagez des histoires.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg mt-8 text-sm text-gray-600">
                            <strong>Références :</strong><br />
                            [1] Ministère de l'Éducation (Enquête Parents 2024)<br />
                            [2] Cunningham & Stanovich (Reading Acquisition)<br />
                            [3] Hattie (Visible Learning)<br />
                        </div>

                    </div>
                </article>

                {/* Navigation */}
                <div className="border-t border-gray-100 py-8">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <Link to="/articles/primaire">
                            <Button variant="ghost" className="gap-2 text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="h-4 w-4" />
                                Retour aux articles Primaire
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccompagnementLecturePage;
