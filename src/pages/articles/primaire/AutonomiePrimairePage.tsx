import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const AutonomiePrimairePage = () => {
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
                            <span className="text-gray-900">Autonomie</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Septembre 2024 · 6 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Développer l'autonomie en primaire : les bases de l'apprentissage autonome
                        </h1>
                        <p className="text-xl text-gray-600">
                            Guide complet pour aider votre enfant à devenir acteur de sa réussite scolaire
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            L'autonomie est l'une des compétences les plus précieuses que votre enfant puisse développer dès le primaire. Un enfant autonome ne dépend pas constamment de l'adulte pour accomplir ses tâches scolaires : il sait s'organiser, prendre des initiatives et persévérer face aux difficultés.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            <strong>Bonne nouvelle :</strong> l'autonomie n'est pas innée, elle s'acquiert progressivement grâce à un accompagnement bienveillant et des méthodes adaptées à l'âge de votre enfant.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Pourquoi l'autonomie est-elle essentielle dès le primaire ?</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les premières années de scolarité posent les fondations de tout le parcours éducatif. Un enfant qui apprend tôt à travailler de manière autonome développe :
                        </p>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Confiance en soi</strong> — Il se sent capable de réussir par lui-même, ce qui booste sa motivation et son estime personnelle.</li>
                            <li><strong>Responsabilité</strong> — Il comprend que ses résultats dépendent de ses efforts et adopte une attitude proactive.</li>
                            <li><strong>Capacité d'adaptation</strong> — Face à un exercice difficile, il cherche des solutions au lieu d'attendre qu'on lui donne la réponse.</li>
                            <li><strong>Préparation au collège</strong> — L'autonomie acquise en primaire facilite grandement la transition vers le secondaire.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">5 stratégies concrètes pour développer l'autonomie</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Créez un environnement de travail adapté</h3>

                        <p className="text-gray-700 leading-relaxed">
                            L'espace de travail influence directement la capacité de concentration. Aménagez un coin dédié aux devoirs avec :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Un bureau bien éclairé, loin des distractions (TV, téléphone, jouets)</li>
                            <li>Tout le matériel nécessaire à portée de main (crayons, règle, dictionnaire)</li>
                            <li>Un planning visuel où l'enfant peut cocher ses tâches accomplies</li>
                        </ul>

                        <p className="text-gray-600 italic my-4">
                            💡 Astuce : Impliquez votre enfant dans l'organisation de son espace. Il sera plus motivé à l'utiliser s'il a participé à sa création.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Instaurez une routine quotidienne</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Les enfants ont besoin de repères. Une routine régulière pour les devoirs les sécurise et les aide à intégrer le travail scolaire comme une habitude naturelle.
                        </p>

                        <p className="text-gray-700 my-4">
                            <strong>Exemple de routine après l'école :</strong>
                        </p>
                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>16h30 : Goûter et temps libre (30 min)</li>
                            <li>17h00 : Devoirs (45 min max pour le primaire)</li>
                            <li>17h45 : Lecture ou jeu éducatif (15-20 min)</li>
                            <li>18h00 : Activités libres</li>
                        </ul>

                        <p className="text-gray-600 italic my-4">
                            Adaptez les horaires selon le rythme de votre enfant. Certains sont plus efficaces juste après l'école, d'autres ont besoin d'une pause plus longue.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Guidez sans faire à sa place</h3>

                        <p className="text-gray-700 leading-relaxed">
                            C'est le point le plus délicat pour les parents. Il est tentant de donner la réponse pour « aller plus vite », mais cela freine l'apprentissage de l'autonomie.
                        </p>

                        <div className="my-6">
                            <p className="text-gray-700 mb-2"><strong>À éviter :</strong></p>
                            <ul className="text-gray-600 space-y-1 mb-4">
                                <li>Donner directement la réponse</li>
                                <li>Faire l'exercice à sa place</li>
                                <li>Corriger sans explication</li>
                                <li>Montrer de l'impatience</li>
                            </ul>

                            <p className="text-gray-700 mb-2"><strong>À privilégier :</strong></p>
                            <ul className="text-gray-700 space-y-1">
                                <li>Poser des questions : « Qu'est-ce que tu comprends ? »</li>
                                <li>Reformuler la consigne ensemble</li>
                                <li>Proposer un exemple similaire</li>
                                <li>Valoriser l'effort, pas seulement le résultat</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Apprenez-lui à s'auto-évaluer</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Un enfant autonome sait vérifier son travail avant de le considérer comme terminé. Aidez-le à développer cette habitude avec des questions simples :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>□ Ai-je bien lu la consigne ?</li>
                            <li>□ Ai-je répondu à toutes les questions ?</li>
                            <li>□ Ai-je vérifié mon orthographe ?</li>
                            <li>□ Mon écriture est-elle lisible ?</li>
                            <li>□ Ai-je rangé mes affaires dans mon cartable ?</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Célébrez les progrès, acceptez les erreurs</h3>

                        <p className="text-gray-700 leading-relaxed">
                            L'erreur fait partie de l'apprentissage. Un enfant qui a peur de se tromper n'osera pas essayer seul. Créez un climat bienveillant où l'erreur est vue comme une étape vers la réussite.
                        </p>

                        <p className="text-gray-700 my-4">
                            <strong>Phrases à adopter :</strong>
                        </p>
                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>« Tu as fait une erreur, c'est normal ! On apprend comme ça. »</li>
                            <li>« Bravo, tu as essayé tout seul, c'est super ! »</li>
                            <li>« Je vois que tu as progressé sur ce point. »</li>
                            <li>« Qu'est-ce que tu as appris de cette erreur ? »</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">L'autonomie selon l'âge</h2>

                        <div className="my-6 space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900">CP-CE1 (6-7 ans)</p>
                                <p className="text-gray-600">Votre présence est encore nécessaire. L'enfant peut commencer à préparer seul son cartable et à lire les consignes simples. Durée des devoirs : 10-15 min.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">CE2-CM1 (8-9 ans)</p>
                                <p className="text-gray-600">L'enfant peut travailler seul 15-20 minutes avant de demander de l'aide. Il commence à planifier ses devoirs sur la semaine. Durée des devoirs : 20-30 min.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">CM2 (10-11 ans)</p>
                                <p className="text-gray-600">L'enfant devrait pouvoir faire la majorité de ses devoirs seul, vous sollicitant uniquement pour des points de blocage. Durée des devoirs : 30-45 min.</p>
                            </div>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Développer l'autonomie de votre enfant en primaire est un investissement pour son avenir. C'est un processus graduel qui demande patience et constance, mais les bénéfices sont immenses : un enfant confiant, responsable et prêt à relever les défis scolaires à venir.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Rappelez-vous :</strong> votre rôle n'est pas de faire à sa place, mais de lui donner les outils pour réussir par lui-même. Chaque petit pas vers l'autonomie est une victoire !
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

export default AutonomiePrimairePage;
