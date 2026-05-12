import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, GraduationCap, Clock, BookOpen, Users, Calendar, CheckCircle } from 'lucide-react';

const TransitionCollegePage = () => {
    return (
        <>
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
                            <span className="text-gray-900">Transition primaire-collège</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-4">
                            Article vedette
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Août 2024 · 12 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Transition primaire-collège : réussir son adaptation
                        </h1>
                        <p className="text-xl text-gray-600">
                            Guide complet pour aider votre enfant à réussir sa transition vers le collège et s'adapter aux nouvelles méthodes de travail.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            L'entrée en sixième marque un tournant majeur dans la scolarité d'un enfant (et dans la vie de ses parents !). Ce n'est pas seulement un changement d'établissement, c'est un changement de monde. Fini le maître unique et la salle de classe attitrée, bonjour aux emplois du temps fragmentés et aux professeurs multiples.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cette transition peut être source d'excitation comme d'angoisse. Rassurez-vous : avec une bonne préparation et un accompagnement adapté, cette étape se transforme en une formidable opportunité de grandir.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les grands changements de la 6ème</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Comprendre ce qui change est la première étape pour bien s'y préparer. Voici les principales ruptures avec l'école primaire :
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <Users className="h-6 w-6 text-green-600" />
                                    <h3 className="text-lg font-bold text-gray-900 m-0">Multiplicité des professeurs</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Chaque matière a son enseignant, ses exigences et ses méthodes. L'enfant doit apprendre à s'adapter à des personnalités et des attentes variées.
                                </p>
                            </div>

                            <div className="bg-pr-gray-bg p-6 rounded-xl border border-carnet-red/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="h-6 w-6 text-carnet-red" />
                                    <h3 className="text-lg font-bold text-gray-900 m-0">Emploi du temps</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Les journées ne se ressemblent plus. Il faut gérer les changements de salle, les trous dans l'emploi du temps et la fatigue liée aux déplacements.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <BookOpen className="h-6 w-6 text-purple-600" />
                                    <h3 className="text-lg font-bold text-gray-900 m-0">Charge de travail</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Les devoirs sont plus nombreux et demandent plus d'anticipation. On ne travaille plus seulement pour le lendemain, mais parfois pour la semaine suivante.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-orange-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <GraduationCap className="h-6 w-6 text-pr-black" />
                                    <h3 className="text-lg font-bold text-gray-900 m-0">Autonomie</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    C'est le maître-mot. On attend de l'élève qu'il sache noter ses devoirs, gérer son matériel et s'organiser personnellement.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Stratégies pour une rentrée sereine</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Maîtriser l'organisation matérielle</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Beaucoup de stress en 6ème vient de la peur d'oublier ses affaires. Aidez votre enfant à mettre en place des systèmes simples :
                        </p>
                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Le cartable se prépare la veille :</strong> C'est une règle d'or pour éviter la panique du matin.</li>
                            <li><strong>Le code couleur :</strong> Associez une couleur par matière (protège-cahier bleu = maths, vert = SVT). Cela aide à visualiser rapidement ce qu'il faut prendre.</li>
                            <li><strong>L'emploi du temps affiché :</strong> Collez-le au-dessus du bureau et sur le frigo.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Apprivoiser l'agenda</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Le cahier de textes laisse place à l'agenda. C'est souvent difficile au début. Prenez le temps chaque soir, durant le premier trimestre, de vérifier avec lui :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                            <li>Les devoirs sont-ils notés lisiblement ?</li>
                            <li>A-t-il noté la date de rendu ?</li>
                            <li>Y a-t-il des contrôles prévus à l'avance ?</li>
                        </ul>
                        <p className="text-gray-600 italic">
                            💡 Conseil : Encouragez-le à s'avancer. S'il a peu de devoirs le mardi mais beaucoup pour le jeudi, il doit apprendre à en faire une partie dès le mardi.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Créer un espace de travail propice</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Au collège, les devoirs demandent plus de concentration. L'enfant ne peut plus faire ses exercices sur un coin de table pendant que la télé marche. Il lui faut un bureau calme, bien éclairé, sans écrans (sauf pour le travail).
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Le sommeil, allié de la réussite</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Le rythme du collège est fatigant. Les journées sont longues, les transports parfois plus longs. Maintenir un rythme de sommeil régulier (9-10h par nuit) est crucial pour tenir le coup physiquement et intellectuellement.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Le rôle des parents : accompagner sans étouffer</h2>

                        <p className="text-gray-700 leading-relaxed">
                            C'est un équilibre subtil. Votre enfant a besoin de vous pour se structurer, mais il a aussi besoin d'espace pour devenir autonome.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg my-6">
                            <h4 className="font-bold text-gray-900 mb-4">La "Check-list" du parent bienveillant :</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Je vérifie l'agenda tous les soirs (au début), puis une fois par semaine.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Je m'intéresse à ce qu'il apprend ("Qu'est-ce qui t'a intéressé en histoire aujourd'hui ?") plutôt qu'uniquement à ses notes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Je ne fais pas les devoirs à sa place, mais je l'aide à comprendre la consigne si besoin.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Je participe aux réunions parents-professeurs pour montrer mon implication.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed">
                            La 6ème est une année de fondation. On y apprend le "métier d'élève" du secondaire. Ne visez pas la perfection immédiate. Il y aura des oublis de cahiers, des mauvaises notes, des moments de fatigue. C'est normal.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            L'essentiel est de maintenir le dialogue, de valoriser les efforts d'organisation autant que les résultats, et de lui faire confiance. Il grandit, et c'est une belle aventure qui commence !
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

export default TransitionCollegePage;
