import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, Clock, Calendar, CheckSquare, Brain, PhoneOff } from 'lucide-react';
import Navigation from '@/components/Navigation';

const OrganisationCollegePage = () => {
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
                            <span className="text-gray-900">Organisation et méthodes</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Juillet 2024 · 10 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Organisation et méthodes de travail au collège : développer l'autonomie
                        </h1>
                        <p className="text-xl text-gray-600">
                            Les meilleures techniques d'organisation et de gestion du temps pour réussir au collège et préparer l'avenir sans stress.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            "Je n'ai pas le temps", "J'ai oublié", "C'était pour demain ?". Si ces phrases vous sont familières, c'est que la question de l'organisation est au cœur des enjeux de votre collégien.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Au collège, la réussite ne dépend plus uniquement de l'intelligence ou de l'écoute en classe, mais de la capacité à s'organiser. La bonne nouvelle ? L'efficacité n'est pas un don, c'est une compétence qui s'apprend et se travaille.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">1. Le trépied de l'efficacité</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Pour bien travailler, il faut trois conditions réunies : un lieu, un temps et une méthode.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                <div className="mx-auto bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <CheckSquare className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Le Lieu</h3>
                                <p className="text-sm text-gray-600">Un bureau rangé, calme, avec tout le matériel à portée de main. Pas sur le lit, pas devant la télé.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                <div className="mx-auto bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Le Temps</h3>
                                <p className="text-sm text-gray-600">Un créneau dédié, régulier, avant que la fatigue du soir ne soit trop forte. 17h30-19h par exemple.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                <div className="mx-auto bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">La Méthode</h3>
                                <p className="text-sm text-gray-600">Ne pas juste "lire", mais écrire, réciter, refaire. Le cerveau doit être actif pour retenir.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">2. La gestion de l'agenda : anticiper pour ne pas subir</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Le piège classique du collégien est de faire ses devoirs pour le lendemain, point final. C'est la méthode "au jour le jour". Elle fonctionne en 6ème, devient risquée en 4ème et mène à l'échec au lycée.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>La règle d'or : "J'ai fini pour demain, je m'avance pour après-demain."</strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            S'il reste 15 minutes à la fin de l'heure d'étude, on ne ferme pas le cahier. On regarde ce qu'il y a à faire pour la fin de semaine. Un contrôle dans 3 jours se prépare ce soir, pas la veille au soir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">3. Apprendre ses leçons : fini le par cœur bête et méchant</h2>
                        <p className="text-gray-700 leading-relaxed">
                            "J'ai lu ma leçon, je la connais." Non. Lire n'est pas apprendre. Pour mémoriser, le cerveau doit faire un effort de récupération.
                        </p>

                        <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-400">
                            <h4 className="font-bold text-yellow-800 mb-2">Techniques actives de mémorisation :</h4>
                            <ul className="list-disc pl-6 space-y-2 text-yellow-900">
                                <li><strong>La feuille blanche :</strong> Je lis ma leçon, je ferme le cahier, je prends une feuille blanche et j'écris tout ce dont je me souviens. Ensuite je compare.</li>
                                <li><strong>Le professeur imaginaire :</strong> J'explique ma leçon à voix haute à un élève imaginaire (ou à mes parents, ou à mon chat). Si je bafouille, c'est que je ne sais pas.</li>
                                <li><strong>Les flashcards :</strong> Une question au recto, la réponse au verso. Idéal pour les dates d'histoire, le vocabulaire d'anglais ou les formules de maths.</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">4. Hygiène numérique : le téléphone, ennemi n°1</h2>
                        <p className="text-gray-700 leading-relaxed">
                            C'est un combat difficile mais nécessaire. Un devoir qui prend 20 minutes en prendra 60 avec des notifications Snapchat toutes les 3 minutes.
                        </p>
                        <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                            <PhoneOff className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">La règle du sanctuaire</h4>
                                <p className="text-gray-700">
                                    Pendant le temps des devoirs, le téléphone est dans une autre pièce (le salon par exemple), en silencieux. Pas sur le bureau, même retourné. Le simple fait de le voir diminue la concentration cognitive.
                                    Instaurez des "pauses technologiques" : 45 min de travail = 10 min de téléphone autorisé.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">5. L'organisation du week-end</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Le week-end n'est pas fait que pour travailler, mais il ne doit pas être vide de travail.
                        </p>
                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Vendredi soir :</strong> Idéal pour faire les devoirs "rapides" du lundi et avoir l'esprit libre.</li>
                            <li><strong>Samedi ou Dimanche matin :</strong> Le créneau le plus efficace pour le travail de fond (réviser un contrôle, faire un DM de maths). Le cerveau est frais.</li>
                            <li><strong>Dimanche soir :</strong> Juste pour la relecture et la préparation du sac. Évitez les gros devoirs le dimanche soir, source d'angoisse pour la semaine à venir.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed">
                            L'autonomie se construit petit à petit. En 6ème, l'enfant est guidé. En 3ème, il doit être le pilote de sa scolarité. En lui donnant ces méthodes tôt, vous lui offrez des outils qui lui serviront bien au-delà du collège, pour le lycée et ses études supérieures.
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

export default OrganisationCollegePage;
