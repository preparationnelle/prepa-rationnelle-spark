import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LectureEfficacePage = () => {
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
                            <Link to="/articles/primaire" className="hover:text-gray-900">Primaire</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className="text-gray-900">Lecture efficace</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Août 2024 · 8 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Méthodes de lecture efficace : techniques pour améliorer la compréhension
                        </h1>
                        <p className="text-xl text-gray-600">
                            Stratégies éprouvées pour développer la lecture et la compréhension de texte dès le primaire
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            La lecture est la clé de voûte de tous les apprentissages. Un enfant qui lit bien et comprend ce qu'il lit dispose d'un atout majeur pour réussir à l'école et dans la vie. Pourtant, savoir déchiffrer les mots ne suffit pas : il faut aussi comprendre le sens global d'un texte, faire des inférences et développer le plaisir de lire.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les deux dimensions de la lecture</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Pour aider efficacement votre enfant, il est essentiel de distinguer les deux composantes de la lecture :
                        </p>

                        <div className="my-6 space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900">Le décodage</p>
                                <p className="text-gray-600">C'est la capacité à transformer les lettres écrites en sons, puis en mots. C'est la base technique de la lecture. Objectif : automatiser le décodage pour libérer l'attention vers la compréhension.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">La compréhension</p>
                                <p className="text-gray-600">C'est la capacité à saisir le sens d'un texte, à faire des liens entre les informations et à en tirer du sens. Objectif : développer des stratégies actives de lecture.</p>
                            </div>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Techniques pour améliorer le décodage</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. La lecture à voix haute régulière</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Faites lire votre enfant à voix haute pendant 10 à 15 minutes chaque jour. Cette pratique régulière est le meilleur moyen d'automatiser le décodage.
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Choisissez un moment calme, sans distractions</li>
                            <li>Alternez entre vous et votre enfant (lecture partagée)</li>
                            <li>Ne corrigez pas immédiatement chaque erreur : attendez la fin de la phrase</li>
                            <li>Félicitez la fluidité, pas seulement l'exactitude</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Le travail sur les syllabes et sons complexes</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Certains sons donnent du fil à retordre : « oi », « ou », « an », « on », « ch », « gn »... Un travail ciblé sur ces difficultés accélère les progrès.
                        </p>

                        <p className="text-gray-700 my-4"><strong>Jeux utiles :</strong> trouver des mots contenant un son donné, compter les syllabes, Memory des syllabes, dictée de syllabes.</p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Repères de fluence</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Pour les enfants à partir du CE2, mesurer le nombre de mots lus correctement par minute peut être motivant :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>Fin CP : ~50 mots/minute</li>
                            <li>Fin CE1 : ~70 mots/minute</li>
                            <li>Fin CE2 : ~90 mots/minute</li>
                            <li>Fin CM1 : ~110 mots/minute</li>
                            <li>Fin CM2 : ~130 mots/minute</li>
                        </ul>

                        <p className="text-gray-600 italic my-4">Ces repères sont indicatifs. Chaque enfant progresse à son rythme !</p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Techniques pour améliorer la compréhension</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Avant la lecture : activer les connaissances</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Avant de commencer un texte, prenez quelques minutes pour en parler avec votre enfant :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>« D'après le titre et l'illustration, de quoi parle ce texte selon toi ? »</li>
                            <li>« Qu'est-ce que tu sais déjà sur ce sujet ? »</li>
                            <li>« Qu'est-ce que tu aimerais apprendre ? »</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pendant la lecture : les pauses stratégiques</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Au lieu de lire tout le texte d'une traite, faites des pauses régulières pour vérifier la compréhension :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li><strong>Résumer</strong> — « Que s'est-il passé jusqu'ici ? »</li>
                            <li><strong>Prédire</strong> — « Que va-t-il se passer ensuite ? »</li>
                            <li><strong>Questionner</strong> — « Pourquoi le personnage a-t-il fait cela ? »</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Après la lecture : reformuler et discuter</h3>

                        <p className="text-gray-700 leading-relaxed">
                            La discussion après la lecture consolide la compréhension et développe l'esprit critique.
                        </p>

                        <div className="my-6 space-y-3">
                            <div>
                                <p className="font-semibold text-gray-900">Niveau 1 — Explicite</p>
                                <p className="text-gray-600">« Qui sont les personnages ? Où se passe l'histoire ? » (réponse dans le texte)</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Niveau 2 — Implicite</p>
                                <p className="text-gray-600">« Comment le personnage se sent-il ? Comment le sais-tu ? » (déduction nécessaire)</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Niveau 3 — Interprétation</p>
                                <p className="text-gray-600">« Qu'aurais-tu fait à sa place ? As-tu aimé cette histoire ? Pourquoi ? » (opinion personnelle)</p>
                            </div>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Enrichir le vocabulaire</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Un enfant qui comprend plus de mots comprend mieux les textes. Enrichissez son vocabulaire au quotidien :
                        </p>

                        <div className="my-6">
                            <p className="text-gray-700 mb-2"><strong>Méthodes actives :</strong></p>
                            <ul className="text-gray-700 space-y-1 mb-4">
                                <li>Carnet de mots nouveaux avec définitions personnelles</li>
                                <li>Jeu du mot du jour</li>
                                <li>Création de phrases avec les nouveaux mots</li>
                            </ul>

                            <p className="text-gray-700 mb-2"><strong>Méthodes passives :</strong></p>
                            <ul className="text-gray-700 space-y-1">
                                <li>Lire à haute voix à votre enfant (même grand !)</li>
                                <li>Écouter des podcasts adaptés</li>
                                <li>Conversations riches en famille</li>
                            </ul>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">L'essentiel : créer le plaisir de lire</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Toutes les techniques du monde ne remplaceront jamais le plaisir de lire. Un enfant qui aime lire lira davantage, et progressera naturellement.
                        </p>

                        <div className="my-6">
                            <p className="text-gray-700 mb-2"><strong>Ce qui encourage :</strong></p>
                            <ul className="text-gray-700 space-y-1 mb-4">
                                <li>Laisser choisir ses livres (BD, romans, documentaires...)</li>
                                <li>Montrer l'exemple (lire devant lui)</li>
                                <li>Créer un coin lecture cosy</li>
                                <li>Fréquenter la bibliothèque ensemble</li>
                            </ul>

                            <p className="text-gray-700 mb-2"><strong>Ce qui décourage :</strong></p>
                            <ul className="text-gray-600 space-y-1">
                                <li>Forcer à lire un livre qu'il n'aime pas</li>
                                <li>Transformer la lecture en corvée</li>
                                <li>Comparer avec d'autres enfants</li>
                            </ul>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Aider votre enfant à devenir un lecteur efficace est l'un des plus beaux cadeaux que vous puissiez lui faire. En combinant un travail régulier sur le décodage, des stratégies actives de compréhension et surtout en cultivant le plaisir de lire, vous lui donnez les clés de la réussite scolaire.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Rappelez-vous :</strong> la lecture, c'est comme un sport. Plus on s'entraîne, meilleur on devient. Et le meilleur entraînement, c'est celui qu'on fait avec plaisir !
                        </p>
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

export default LectureEfficacePage;
