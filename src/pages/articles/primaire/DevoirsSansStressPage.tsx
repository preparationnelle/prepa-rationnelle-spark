import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const DevoirsSansStressPage = () => {
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
                            <span className="text-gray-900">Devoirs sans stress</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Novembre 2024 · 8 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Gérer les devoirs sans stress : guide pratique pour les parents
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comment transformer le moment des devoirs en une expérience positive pour toute la famille
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            Les devoirs sont souvent source de tension dans les familles. Cris, pleurs, négociations interminables... Ce qui devrait être un moment d'apprentissage devient parfois un conflit quotidien. Pourtant, avec les bonnes stratégies, les devoirs peuvent devenir un moment serein et même agréable.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Pourquoi les devoirs génèrent-ils du stress ?</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Comprendre les causes du stress permet de mieux les résoudre :
                        </p>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Fatigue accumulée</strong> — L'enfant a déjà fourni des efforts toute la journée à l'école.</li>
                            <li><strong>Manque de temps</strong> — Entre les activités extra-scolaires et le dîner, le créneau est limité.</li>
                            <li><strong>Pression parentale</strong> — La peur de l'échec scolaire crée une anxiété qui se transmet.</li>
                            <li><strong>Difficultés scolaires</strong> — Un enfant qui ne comprend pas se décourage vite.</li>
                            <li><strong>Conflits de pouvoir</strong> — Les devoirs deviennent un terrain de négociation entre parents et enfants.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les règles d'or pour des devoirs sereins</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Établir une routine fixe</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Les enfants ont besoin de prévisibilité. Fixez un horaire régulier pour les devoirs et tenez-vous-y. Vous éviterez ainsi les négociations quotidiennes sur « quand » faire les devoirs.
                        </p>

                        <p className="text-gray-700 my-4"><strong>Horaire idéal :</strong></p>
                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>Pas juste après l'école (laisser un temps de décompression)</li>
                            <li>Pas juste avant le coucher (fatigue maximale)</li>
                            <li>Le même horaire chaque jour</li>
                            <li>Durée adaptée à l'âge (15-45 min max en primaire)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Préparer les conditions de réussite</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Goûter pris avant de commencer</li>
                            <li>Passage aux toilettes fait</li>
                            <li>Bureau rangé, matériel prêt</li>
                            <li>Écrans éteints et hors de portée</li>
                            <li>Environnement calme</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Laisser l'enfant en autonomie progressive</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Votre rôle n'est pas de faire les devoirs avec votre enfant, mais de l'aider à devenir autonome. Commencez par lire ensemble les consignes, puis laissez-le travailler seul. Restez disponible pour les questions, mais résistez à la tentation de surveiller en permanence.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Fractionner les tâches</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Face à une liste de devoirs qui semble interminable, aidez votre enfant à diviser le travail :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>Lister tous les devoirs à faire</li>
                            <li>Estimer le temps pour chaque tâche</li>
                            <li>Commencer par une tâche courte pour entrer dans le travail</li>
                            <li>Alterner tâches faciles et difficiles</li>
                            <li>Faire des mini-pauses entre les matières</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Valoriser l'effort, pas seulement le résultat</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Félicitez votre enfant pour son travail et sa persévérance, pas uniquement pour ses bonnes notes. Un enfant qui a fait des efforts mais se trompe a autant besoin d'encouragements qu'un enfant qui réussit facilement.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Gérer les situations difficiles</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">L'enfant qui refuse de faire ses devoirs</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Cherchez la cause : fatigue, difficulté, conflit...</li>
                            <li>Proposez un choix : « Tu veux commencer par les maths ou le français ? »</li>
                            <li>Fixez une règle non négociable : « Les devoirs sont faits avant le dîner »</li>
                            <li>Évitez les menaces et les punitions liées aux devoirs</li>
                            <li>En cas de blocage persistant, faites une pause et revenez-y plus tard</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">L'enfant qui met des heures</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Utilisez un minuteur visible pour cadrer le temps</li>
                            <li>Réduisez les distractions (pas de téléphone, pas de passage de la famille)</li>
                            <li>Vérifiez qu'il comprend les consignes</li>
                            <li>Parlez à l'enseignant si le volume de devoirs semble excessif</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">L'enfant qui ne comprend pas</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Reformulez la consigne avec vos propres mots</li>
                            <li>Donnez un exemple concret avant l'exercice</li>
                            <li>Évitez de donner la réponse : posez des questions pour le guider</li>
                            <li>Si le blocage persiste, signalez-le à l'enseignant</li>
                            <li>Un accompagnement scolaire peut être nécessaire</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les erreurs à éviter</h2>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Faire les devoirs à sa place</strong> — L'enfant n'apprend rien et l'enseignant pense que tout est compris.</li>
                            <li><strong>Crier ou s'énerver</strong> — La peur et le stress bloquent l'apprentissage.</li>
                            <li><strong>Comparer avec les autres</strong> — « Ton frère n'avait jamais de problème » est destructeur.</li>
                            <li><strong>Transformer les devoirs en punition</strong> — Le travail scolaire ne doit pas être associé à quelque chose de négatif.</li>
                            <li><strong>Être présent en permanence</strong> — L'enfant doit apprendre à travailler seul.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Quand demander de l'aide ?</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Parfois, malgré tous vos efforts, les devoirs restent un cauchemar. N'hésitez pas à demander de l'aide si :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Les conflits sont quotidiens et intenses</li>
                            <li>L'enfant a des difficultés persistantes dans une matière</li>
                            <li>Le temps passé sur les devoirs est excessif</li>
                            <li>L'enfant développe une anxiété scolaire</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed my-4">
                            Les recours possibles : rendez-vous avec l'enseignant, soutien scolaire, orthophoniste, psychologue scolaire...
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les devoirs ne doivent pas être un combat quotidien. Avec une routine bien établie, un environnement favorable et une posture bienveillante, vous pouvez transformer ce moment en une expérience positive qui renforce l'autonomie de votre enfant.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Rappelez-vous :</strong> votre calme est contagieux. Si vous abordez les devoirs avec sérénité, votre enfant suivra votre exemple.
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

export default DevoirsSansStressPage;
