import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const HarcelementPrimairePage = () => {
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
                            <span className="text-gray-900">Harcèlement</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · 2024 · 8 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Harcèlement en Primaire : Reconnaître les Signaux et Agir Rapidement
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comprendre la différence entre conflit et harcèlement, et savoir comment intervenir efficacement pour protéger son enfant.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                            <h3 className="text-orange-900 font-bold text-lg mt-0">Le saviez-vous ?</h3>
                            <p className="text-orange-800 mb-0">
                                <strong>56% des parents</strong> se posent régulièrement la question de savoir si leur enfant est victime de harcèlement ou de simples conflits. La distinction est cruciale pour apporter la bonne réponse.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Introduction</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Votre enfant rentre de l'école plus silencieux qu'habitude. Il ne parle plus de ses copains. Il refuse d'aller à l'école. Ou au contraire, il revient énervé, agressif, avec des histoires bizarres sur ce que les autres lui font.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            C'est la question que beaucoup de parents se posent : <strong>est-ce du harcèlement ou juste des conflits d'enfants normaux ?</strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Cet article vous aide à reconnaître les signes, documenter les faits, communiquer avec l'école et surtout, soutenir votre enfant.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Première Distinction Essentielle : Conflit Normal vs Harcèlement</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h4 className="text-blue-800 font-bold mb-3 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                    Conflit Normal
                                </h4>
                                <ul className="text-sm text-blue-900 space-y-2">
                                    <li>• <strong>Fréquence</strong> : Occasionnel, incident isolé</li>
                                    <li>• <strong>Raison</strong> : Dispute jeu, malentendu</li>
                                    <li>• <strong>Symétrie</strong> : Les deux peuvent avoir tort</li>
                                    <li>• <strong>Résolution</strong> : Rapide, avec excuses ou temps</li>
                                    <li>• <strong>Impact</strong> : Frustration temporaire, pas de peur durable</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h4 className="text-red-800 font-bold mb-3 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                    Harcèlement (Bullying)
                                </h4>
                                <ul className="text-sm text-red-900 space-y-2">
                                    <li>• <strong>Répétition</strong> : Systématique, dure dans le temps</li>
                                    <li>• <strong>Intention</strong> : Volonté de nuire</li>
                                    <li>• <strong>Déséquilibre</strong> : Victime ne peut pas se défendre</li>
                                    <li>• <strong>Ciblage</strong> : Souvent lié à une différence</li>
                                    <li>• <strong>Impact</strong> : Peur, anxiété, isolement, maux physiques</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Signes d'Alerte : Déterminer Si C'est du Harcèlement</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Signes Émotionnels & Comportementaux</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>✅ Refus soudain d'aller à l'école (pleurs, crises)</li>
                            <li>✅ Changement d'humeur radical (triste, agressif, anxieux)</li>
                            <li>✅ Retrait social ("Personne ne m'aime", "Je n'ai pas d'amis")</li>
                            <li>✅ Paroles dévalorisantes ("Je suis nul", "C'est ma faute")</li>
                            <li>✅ Perte d'appétit ou troubles du sommeil (cauchemars)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Signes Physiques & Matériels</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>✅ Bleus, égratignures inexpliqués</li>
                            <li>✅ Vêtements déchirés ou affaires perdues fréquemment</li>
                            <li>✅ Maux de ventre/tête récurrents (surtout le matin ou dimanche soir)</li>
                        </ul>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                            <h4 className="font-bold text-yellow-900 mb-2">Attention au Cyberharcèlement</h4>
                            <p className="text-yellow-800 mb-0 text-sm">
                                Même en primaire, via TikTok, Roblox ou WhatsApp : soyez vigilant si votre enfant cache son écran, semble anxieux après une notification ou est exclu de groupes en ligne.
                            </p>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Actions Immédiates : Protocole Parent</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Étape 1 : Documenter (Semaine 1)</h3>
                        <p className="text-gray-700">
                            Créez un journal simple. Date, Faits rapportés (citations exactes), Personnes impliquées, Contexte, Impact sur votre enfant. Cela transforme des "on dit" en <strong>faits établis</strong>.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Étape 2 : Communiquer avec l'École</h3>
                        <p className="text-gray-700 mb-4">
                            Privilégiez l'email ou le RDV formel. Restez factuel et calme.
                        </p>
                        <div className="bg-gray-100 p-4 rounded-lg italic text-gray-700 text-sm mb-4">
                            "Bonjour, notre enfant mentionne que [X] le taquine régulièrement [détails]. Nous observons chez nous [symptômes : peur, sommeil]. Pouvons-nous nous rencontrer pour mettre en place un soutien ?"
                        </div>
                        <p className="text-gray-700">
                            <strong>Réponse acceptable de l'école :</strong> "On va observer", "On va en parler aux élèves", "On surveille les récrés".<br />
                            <strong>Inacceptable :</strong> "C'est juste un jeu", "Il faut qu'il s'endurcisse".
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Étape 3 : Soutenir votre Enfant (Les 5 Piliers)</h3>
                        <ol className="list-decimal pl-5 text-gray-700 space-y-3">
                            <li><strong>Validation</strong> : "Ce n'est pas ta faute. Tu n'y es pour rien."</li>
                            <li><strong>Sécurité</strong> : Renforcez ses amitiés extérieures (sport, art, cousins). Une seule amitié solide protège énormément.</li>
                            <li><strong>Réaction (pas vengeance)</strong> : Apprenez-lui à ne pas montrer d'émotion devant le harceleur ("Je m'en fous") et à aller voir un adulte.</li>
                            <li><strong>Routine</strong> : Maintenez un cadre rassurant à la maison (repas, sommeil, jeux).</li>
                            <li><strong>Aide Pro</strong> : Si les symptômes (angoisse, phobie) persistent, un psychologue peut aider à déconstruire le trauma.</li>
                        </ol>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Ressources & Numéros Utiles</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900">3020</h4>
                                <p className="text-sm text-gray-600">Numéro national "Non au harcèlement" (gratuit)</p>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900">3018</h4>
                                <p className="text-sm text-gray-600">Numéro national pour le cyberharcèlement</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg mt-8 text-sm text-gray-600">
                            <strong>Références :</strong><br />
                            [1] Ministère de l'Éducation - Non au harcèlement<br />
                            [2] Olweus, D. (2023). Bullying at school: What we know and what we can do.<br />
                            [3] Phobie Scolaire France - Guide complet<br />
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

export default HarcelementPrimairePage;
