import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const MathsLudiquesPage = () => {
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
                            <span className="text-gray-900">Maths ludiques</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Juillet 2024 · 10 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Mathématiques ludiques au primaire
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comment rendre les maths attrayantes grâce à des méthodes ludiques et des jeux adaptés
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            « Je suis nul en maths » — cette phrase, entendue si souvent, traduit un blocage qui se construit souvent dès le primaire. Pourtant, les mathématiques peuvent être passionnantes lorsqu'elles sont présentées autrement que comme une suite d'exercices répétitifs.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            <strong>La clé ?</strong> Transformer l'apprentissage en jeu. Un enfant qui s'amuse avec les maths développe une relation positive avec cette discipline et progresse naturellement.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Pourquoi le jeu fonctionne-t-il si bien ?</h2>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Motivation intrinsèque</strong> — L'enfant veut jouer, donc il s'investit naturellement.</li>
                            <li><strong>Droit à l'erreur</strong> — Dans un jeu, se tromper fait partie du processus.</li>
                            <li><strong>Répétition inconsciente</strong> — Il répète les calculs sans s'en rendre compte.</li>
                            <li><strong>Moments partagés</strong> — Jouer en famille crée des souvenirs positifs liés aux maths.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Jeux pour le calcul mental</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Le jeu du compte est bon</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Tirez 6 nombres au hasard et un nombre cible. L'enfant doit atteindre le nombre cible en combinant les 6 nombres avec +, -, × et ÷.
                        </p>

                        <p className="text-gray-700 my-4">
                            <strong>Exemple :</strong> Nombres : 2, 5, 7, 10, 25, 50 — Cible : 347<br />
                            Solution possible : (50 × 7) - (5 - 2) = 350 - 3 = 347
                        </p>

                        <p className="text-gray-600 italic my-4">
                            Adaptez la difficulté : petits nombres et cible simple pour les débutants.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Les tables de multiplication en jeu</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Dé × Dé</strong> — Lancez deux dés, multipliez les résultats. Premier à 100 points gagne.</li>
                            <li><strong>Bataille multiplication</strong> — Chacun retourne 2 cartes, multiplie. Le plus grand produit remporte le pli.</li>
                            <li><strong>Chrono tables</strong> — Combien de bonnes réponses en 1 minute ? Battez votre record !</li>
                            <li><strong>Chansons</strong> — Des comptines pour retenir les tables (cherchez sur YouTube !).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Jeux du quotidien</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>En voiture :</strong> additions avec les plaques d'immatriculation</li>
                            <li><strong>Au supermarché :</strong> estimer le total du caddie, calculer les promotions</li>
                            <li><strong>En cuisine :</strong> multiplier ou diviser les quantités d'une recette</li>
                            <li><strong>Argent de poche :</strong> gérer un budget, rendre la monnaie</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Géométrie et logique par le jeu</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Jeux de construction et puzzles</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>LEGO / Kapla</strong> — Volumes, symétrie, construction</li>
                            <li><strong>Tangram</strong> — Formes géométriques, aires</li>
                            <li><strong>Puzzles</strong> — Observation, repérage spatial</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Jeux de logique recommandés</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Rush Hour</strong> — Déplacer des véhicules pour débloquer la voiture rouge. Raisonnement séquentiel.</li>
                            <li><strong>Mastermind</strong> — Deviner un code secret par déduction logique.</li>
                            <li><strong>Sudoku (enfant)</strong> — Grilles 4×4 ou 6×6 avec images ou chiffres.</li>
                            <li><strong>Blokus</strong> — Placer des pièces géométriques sur un plateau. Stratégie et géométrie.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Applications éducatives recommandées</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Le numérique peut être un allié, utilisé avec modération (15-20 min/jour max) :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Dragon Box</strong> — Algèbre ludique dès 5 ans</li>
                            <li><strong>Mathador</strong> — Calcul mental gamifié</li>
                            <li><strong>Khan Academy Kids</strong> — Parcours complet gratuit</li>
                        </ul>

                        <p className="text-gray-600 italic my-4">
                            ⚠️ Le numérique ne remplace pas les jeux physiques et les échanges avec les parents !
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Adapter les jeux selon l'âge</h2>

                        <div className="my-6 space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900">CP-CE1 (6-7 ans)</p>
                                <p className="text-gray-600">Jeux de dés, dominos, Memory des nombres, compter des objets concrets, petits puzzles.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">CE2-CM1 (8-9 ans)</p>
                                <p className="text-gray-600">Bataille multiplication, tangram, Rush Hour, jeux de plateau avec calculs (Uno, Monopoly...).</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">CM2 (10-11 ans)</p>
                                <p className="text-gray-600">Compte est bon, Sudoku 9×9, problèmes de logique, énigmes mathématiques, introduction aux échecs.</p>
                            </div>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conseils pour réussir</h2>

                        <div className="my-6">
                            <p className="text-gray-700 mb-2"><strong>À faire :</strong></p>
                            <ul className="text-gray-700 space-y-1 mb-4">
                                <li>Jouer régulièrement (10-15 min/jour)</li>
                                <li>Laisser gagner parfois pour encourager</li>
                                <li>Valoriser le raisonnement, pas que le résultat</li>
                                <li>Montrer que vous aimez les maths</li>
                            </ul>

                            <p className="text-gray-700 mb-2"><strong>À éviter :</strong></p>
                            <ul className="text-gray-600 space-y-1">
                                <li>Dire « je suis nul en maths » devant lui</li>
                                <li>Transformer le jeu en contrainte</li>
                                <li>S'énerver s'il se trompe</li>
                                <li>Comparer avec ses frères/sœurs</li>
                            </ul>
                        </div>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les mathématiques ne sont pas une torture mais une formidable aventure intellectuelle ! En intégrant le jeu dans l'apprentissage, vous aidez votre enfant à construire des bases solides tout en développant une relation positive avec les maths.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Le secret ?</strong> Régularité, plaisir et bienveillance. Un enfant qui joue avec les maths est un enfant qui réussira en maths !
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

export default MathsLudiquesPage;
