import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const AnxieteScolairePage = () => {
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
                            <span className="text-gray-900">Anxiété Scolaire</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · 2024 · 7 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Anxiété Scolaire en Primaire : Stratégies pour Rassurer sans Culpabiliser
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comprendre et accompagner la peur de l'école avec bienveillance et efficacité.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                            <h3 className="text-orange-900 font-bold text-lg mt-0">Le saviez-vous ?</h3>
                            <p className="text-orange-800 mb-0">
                                <strong>56% des enfants</strong> vivent une certaine appréhension lors de transitions scolaires majeures. C'est une réaction développementale fréquente et généralement surmontable.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Introduction</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Votre enfant pleurniche à la porte de l'école. Il vous demande de rester en classe. Il prétexte une douleur au ventre le matin avant la rentrée. Vous vous demandez : est-ce normal ? Est-ce grave ? Dois-je le forcer ou être plus patient ?
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Bonne nouvelle : l'anxiété scolaire en primaire est généralement surmontable avec les bonnes stratégies.</strong> Mauvaise nouvelle : vos réactions parentales—bien intentionnées—peuvent accidentellement renforcer la peur plutôt que de la réduire.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Cet article vous aide à comprendre ce phénomène, agir avec des techniques bienveillantes et communiquer efficacement avec l'école.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Première Question : C'est Normal ou Problématique ?</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">La Transition est Naturelle</h3>

                        <p className="text-gray-700 leading-relaxed">
                            L'appréhension est normale lors des changements majeurs comme l'entrée au CP ou un changement d'école. Il est important de distinguer deux cas de figure.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h4 className="text-green-800 font-bold mb-3 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    Anxiété Transitoire
                                </h4>
                                <ul className="text-sm text-green-900 space-y-2">
                                    <li>• Quelques jours/semaines après la rentrée</li>
                                    <li>• Pleurnicherie le matin, "j'ai peur"</li>
                                    <li>• Question répétée : "Tu vas rester ?"</li>
                                    <li>• Amélioration graduelle</li>
                                    <li>• Comportement normal une fois en classe</li>
                                </ul>
                                <p className="text-xs text-green-700 mt-4 font-semibold uppercase tracking-wide">VERDICT : À GÉRER AVEC PATIENCE</p>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h4 className="text-red-800 font-bold mb-3 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                    Anxiété Pathologique
                                </h4>
                                <ul className="text-sm text-red-900 space-y-2">
                                    <li>• Plus de 4-6 semaines sans mieux</li>
                                    <li>• Crises de panique, vomissements</li>
                                    <li>• Refus catégorique, absences</li>
                                    <li>• Douleurs abdominales réelles</li>
                                    <li>• Isolement social, régression</li>
                                </ul>
                                <p className="text-xs text-red-700 mt-4 font-semibold uppercase tracking-wide">VERDICT : BESOIN D'ÉVALUATION</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Comprendre les Vraies Causes (6-11 ans)</h2>

                        <ul className="space-y-4 text-gray-700">
                            <li>
                                <strong>1. La Séparation d'avec Parent(s)</strong> : Fréquente chez les plus jeunes. L'enfant quitte sa figure de sécurité pour un environnement inconnu.
                            </li>
                            <li>
                                <strong>2. Environnement Nouveau</strong> : Nouvelle école, nouvelle classe, nouveau maître... L'inconnu est perçu comme un danger par le cerveau de l'enfant.
                            </li>
                            <li>
                                <strong>3. Difficultés Sociales ou Académiques</strong> : Peur des moqueries, peur de l'échec ("Je suis nul"), sentiment d'exclusion.
                            </li>
                            <li>
                                <strong>4. Événement Marquant</strong> : Une réprimande sévère, un incident dans la cour, ou un événement familial perturbant.
                            </li>
                        </ul>

                        <div className="bg-blue-50 p-6 rounded-xl my-8">
                            <h4 className="font-bold text-blue-900 mb-2">Comment savoir ? Posez les bonnes questions</h4>
                            <p className="text-blue-800 text-sm mb-4">Sur un ton de conversation douce, pas d'interrogatoire :</p>
                            <ul className="space-y-2 text-blue-900 italic">
                                <li>« Qu'est-ce que tu as peur qu'il se passe à l'école ? »</li>
                                <li>« Y a-t-il quelque chose ou quelqu'un qui te fait peur ? »</li>
                                <li>« Si on pouvait enlever une seule chose de l'école, ce serait quoi ? »</li>
                            </ul>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Stratégies Éprouvées pour Aider</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Phase 1 : Avant l'École (Matin et Semaines Précédentes)</h3>

                        <h4 className="font-bold text-gray-900 mt-4">A. Normalisation & Validation</h4>
                        <p className="text-gray-700">
                            Ne niez pas sa peur ("C'est ridicule"). Validez-la : "Je vois que tu as peur, c'est normal quand c'est nouveau. Ta peur va diminuer petit à petit." Valider l'émotion aide à la calmer.
                        </p>

                        <h4 className="font-bold text-gray-900 mt-4">B. Rituel d'Arrivée Simple et Constant</h4>
                        <p className="text-gray-700">
                            Créez un rituel court (30 secondes max) : un câlin, une phrase rassurante ("Je reviens te chercher à 16h30"), un geste spécial. Puis partez SANS regarder en arrière, même s'il pleure.
                        </p>
                        <p className="text-gray-700 italic border-l-2 border-gray-300 pl-4 my-2">
                            Vérité difficile : Repousser le départ parce qu'il pleure renforce le comportement. "Si je pleure, papa/maman reste". Les larmes cessent souvent 5 minutes après votre départ.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Phase 2 : À la Maison (Le Soir)</h3>

                        <h4 className="font-bold text-gray-900 mt-4">Débriefing Positif</h4>
                        <p className="text-gray-700">
                            Évitez l'interrogatoire anxieux ("T'as pleuré ?"). Préférez les questions ouvertes positives : "J'ai entendu dire que vous aviez fait du sport, c'était comment ?". Créez une association positive avec l'école.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Technique Avancée : Exposition Graduée</h3>
                        <p className="text-gray-700">Source d'anxiété persistante ? Créez une "échelle de la peur" et franchissez les étapes calmement :</p>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                            <li>Préparer le cartable la veille</li>
                            <li>Le trajet vers l'école</li>
                            <li>Arriver devant la porte</li>
                            <li>Entrer dans la cour</li>
                        </ol>
                        <p className="text-gray-700 mt-2">L'idée est de rester à chaque étape jusqu'à ce que l'enfant soit calme, sans forcer brutalement.</p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Erreurs Courantes à Éviter</h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm whitespace-nowrap">
                                <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50 text-gray-600">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Erreur</th>
                                        <th scope="col" className="px-6 py-3">Pourquoi c'est piégeux</th>
                                        <th scope="col" className="px-6 py-3">Mieux faire</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-4 font-medium text-gray-900">Rester en classe</td>
                                        <td className="px-6 py-4">Renforce "Parent = seule sécurité"</td>
                                        <td className="px-6 py-4">Partir (court, calme, confiant)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-4 font-medium text-gray-900">Surprotéger / Excuser</td>
                                        <td className="px-6 py-4">Valide "L'école est dangereuse"</td>
                                        <td className="px-6 py-4">Attente claire : on y va.</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-4 font-medium text-gray-900">Comparer ("Ton frère...")</td>
                                        <td className="px-6 py-4">Provoque honte et repli</td>
                                        <td className="px-6 py-4">Valider le ressenti unique</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion : La Permission de l'Imparfait</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les parents cherchent souvent la formule magique pour faire disparaître la peur instantanément. La meilleure approche est d'aider l'enfant à <strong>traverser</strong> la peur.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Votre calme, votre constance et votre absence de "drama" sont vos meilleurs atouts. Si l'anxiété persiste au-delà de 6 semaines avec un impact fort sur la vie de l'enfant (sommeil, appétit, refus total), n'hésitez pas à consulter un professionnel (médecin scolaire, psychologue). Ce n'est pas un échec, c'est du bon sens parental.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg mt-8 text-sm text-gray-600">
                            <strong>Références & Ressources :</strong><br />
                            [1] Ministère de l'Éducation - Bien-être à l'école<br />
                            [2] Phobie Scolaire France - Guide Parents<br />
                            [3] Association Française de Psychologie de l'Enfant (Anxiété de séparation)<br />
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

export default AnxieteScolairePage;
