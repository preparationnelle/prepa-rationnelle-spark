import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const GestionEntPage = () => {
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
                            <span className="text-gray-900">Gestion de l'ENT</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · 2025 · 7 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            L'ENT à l'École : Outil de Suivi ou Source de Stress ?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Transformer la surveillance numérique anxiogène en une relation saine et utile avec l'école.
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                            <h3 className="text-orange-900 font-bold text-lg mt-0">Le paradoxe 2025</h3>
                            <p className="text-orange-800 mb-0">
                                Un outil créé pour améliorer la communication a transformé la relation école-famille en source d'anxiété pour <strong>62% des parents</strong>.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            19h. Notification : "Nouvelle note en maths". Votre cœur s'accélère. C'est 12/20. Est-ce grave ?
                            21h. Notification : "Devoir pour demain". Panique à bord.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            L'accès 24/7 à la scolarité de votre enfant a créé, malgré de bonnes intentions, une <strong>surveillance permanente</strong> qui génère du stress pour toute la famille. Cet article vous aide à reprendre le contrôle.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Le Problème : Comment l'ENT Crée du Stress</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. La Disponibilité 24/7 vs La Paix des Familles</h3>
                        <p className="text-gray-700">
                            Une note qui tombe à 20h ou un message le weekend parasite votre temps de repos. Cette vigilance perpétuelle ("Ai-je manqué une info ?") crée une fatigue mentale chronique.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. L'Illusion de Contrôle</h3>
                        <p className="text-gray-700">
                            Penser que surveiller l'ENT vous donne le contrôle est un piège. Voir une note (12/20) sans contexte (était-ce un exercice difficile ? une surprise ?) génère une inquiétude souvent infondée. Plus d'infos <span className="italic">brute</span> ne signifie pas meilleure compréhension.
                        </p>

                        <div className="bg-red-50 p-6 rounded-xl my-8 border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2">Êtes-vous en surcharge ENT ? CHECK-LIST</h4>
                            <ul className="text-red-800 space-y-2 text-sm">
                                <li>☐ Vous consultez l'ENT plus de 3 fois/jour</li>
                                <li>☐ Vous stressez si une notif arrive le soir</li>
                                <li>☐ Vous vérifiez les notes avant même que l'enfant rentre</li>
                                <li>☐ Votre enfant vous demande avec anxiété "T'as vu ma note ?"</li>
                            </ul>
                            <p className="text-red-900 text-sm mt-3 font-semibold">Si vous cochez 3 cases, il est temps de changer d'approche.</p>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Vos Droits : Le "Droit à la Déconnexion" (2024-2025)</h2>
                        <p className="text-gray-700">
                            La loi protège désormais le temps familial.
                        </p>
                        <ul className="text-gray-700 list-disc pl-5 space-y-2 mt-4">
                            <li>Vous avez le droit de <strong>ne pas</strong> consulter l'ENT le soir (après 20h) et le weekend.</li>
                            <li>Vous pouvez demander à désactiver les notifications push.</li>
                            <li>Vous n'êtes <strong>pas</strong> un mauvais parent si vous ne répondez pas dans l'heure.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">6 Bonnes Pratiques pour une Relation Saine</h2>

                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-green-900 mb-2">Pratique #1 : La Règle du "2 fois par semaine"</h3>
                                <p className="text-green-800 text-sm">
                                    Ne consultez l'ENT que le <strong>Lundi</strong> et le <strong>Jeudi</strong> (par exemple). Cela suffit amplement pour suivre les infos importantes sans obsession. Le reste attendra.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-green-900 mb-2">Pratique #2 : Notifications "Résumé Hebdo"</h3>
                                <p className="text-green-800 text-sm">
                                    Dans les paramètres de l'ENT, désactivez les notifs instantanées et optez pour un résumé par mail. Vous passez d'un flux anxiogène à une info maîtrisée.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-green-900 mb-2">Pratique #3 : Parler à l'Enfant AVANT de Réagir</h3>
                                <p className="text-green-800 text-sm">
                                    Si vous voyez une mauvaise note, attendez 24h. Laissez le temps à votre enfant de vous en parler (ou pas). Ne l'accueillez pas avec "J'ai vu ton 8/20 !!". Cela brise la confiance.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion : Rétablir l'Équilibre</h2>
                        <p className="text-gray-700 leading-relaxed">
                            L'ENT est un outil, pas un maître. C'est vous qui décidez de sa place dans votre vie.
                            En limitant votre connexion, vous ne démissionnez pas de votre rôle de parent : vous protégez votre santé mentale et celle de votre enfant.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Moins de surveillance, plus de confiance. C'est ça, le vrai secret de la réussite.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg mt-8 text-sm text-gray-600">
                            <strong>Références :</strong><br />
                            [1] Ministère de l'Éducation (Rapport 2024 sur les ENT)<br />
                            [2] Inspection Générale (Impact numérique famille)<br />
                            [3] Dr Sonia Lupien (Stress humain)<br />
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

export default GestionEntPage;
