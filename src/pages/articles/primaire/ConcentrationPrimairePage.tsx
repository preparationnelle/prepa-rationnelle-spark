import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ConcentrationPrimairePage = () => {
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
                            <span className="text-gray-900">Concentration</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Octobre 2024 · 7 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Concentration et attention en primaire : comment aider son enfant à se concentrer
                        </h1>
                        <p className="text-xl text-gray-600">
                            Techniques pratiques pour améliorer l'attention et la concentration des enfants de 6 à 11 ans
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            « Il n'arrive pas à rester concentré plus de 5 minutes ! » Cette plainte, entendue dans la bouche de nombreux parents, traduit une réalité : la concentration est un défi majeur pour les enfants d'aujourd'hui. Entre les écrans, les sollicitations multiples et un rythme de vie effréné, nos enfants peinent parfois à fixer leur attention.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            <strong>Bonne nouvelle :</strong> la concentration n'est pas un don inné. C'est une compétence qui s'entraîne et se développe avec les bonnes méthodes.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Comprendre la concentration chez l'enfant</h2>

                        <p className="text-gray-700 leading-relaxed">
                            La capacité de concentration évolue avec l'âge. Il est important d'avoir des attentes réalistes :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-6">
                            <li><strong>6-7 ans (CP-CE1)</strong> — 10 à 15 minutes d'attention soutenue</li>
                            <li><strong>8-9 ans (CE2-CM1)</strong> — 15 à 25 minutes d'attention soutenue</li>
                            <li><strong>10-11 ans (CM2)</strong> — 25 à 35 minutes d'attention soutenue</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            Au-delà de ces durées, le cerveau a besoin d'une pause pour rester efficace. Vouloir forcer la concentration au-delà de ces limites est contre-productif.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les ennemis de la concentration</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Avant d'améliorer la concentration, il faut éliminer ce qui la perturbe :
                        </p>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Les écrans avant les devoirs</strong> — Les stimulations rapides des jeux vidéo et vidéos rendent le travail scolaire fade en comparaison. Pas d'écran 30 min avant les devoirs.</li>
                            <li><strong>Le bruit de fond</strong> — Télévision allumée, conversations, musique avec paroles... Tout cela sollicite l'attention.</li>
                            <li><strong>La faim et la fatigue</strong> — Un cerveau mal nourri ou fatigué ne peut pas se concentrer. Le goûter avant les devoirs est essentiel.</li>
                            <li><strong>Le stress et les émotions</strong> — Un enfant inquiet ou contrarié aura du mal à fixer son attention sur les devoirs.</li>
                            <li><strong>Le multitâche</strong> — Faire les devoirs tout en écoutant de la musique divise l'attention et réduit l'efficacité.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Techniques pour améliorer la concentration</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Créer un environnement propice</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Bureau rangé avec uniquement le matériel nécessaire</li>
                            <li>Bonne luminosité (lumière naturelle idéalement)</li>
                            <li>Température agréable (18-20°C)</li>
                            <li>Téléphone et tablette hors de portée</li>
                            <li>Porte fermée pour limiter les distractions</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. La technique Pomodoro adaptée</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Cette technique consiste à alterner concentration et pauses :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li><strong>CP-CE1 :</strong> 10 min de travail → 3 min de pause</li>
                            <li><strong>CE2-CM1 :</strong> 15 min de travail → 5 min de pause</li>
                            <li><strong>CM2 :</strong> 20 min de travail → 5 min de pause</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            Pendant les pauses : pas d'écran ! Mouvement, étirements, verre d'eau...
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Les rituels de mise en concentration</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Un rituel avant les devoirs aide le cerveau à « basculer » en mode travail :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Ranger le bureau</li>
                            <li>Sortir tout le matériel</li>
                            <li>3 grandes respirations profondes</li>
                            <li>Lire la liste des devoirs à faire</li>
                            <li>Choisir par quoi commencer</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Exercices de pleine conscience</h3>

                        <p className="text-gray-700 leading-relaxed">
                            5 minutes de respiration consciente avant les devoirs peuvent grandement améliorer la concentration :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>S'asseoir confortablement, fermer les yeux</li>
                            <li>Inspirer en comptant jusqu'à 4</li>
                            <li>Retenir sa respiration en comptant jusqu'à 4</li>
                            <li>Expirer en comptant jusqu'à 4</li>
                            <li>Répéter 5 fois</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. L'activité physique</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Le mouvement améliore la concentration. Un enfant qui a fait du sport ou joué dehors avant les devoirs sera plus concentré. Si ce n'est pas possible, 5 minutes de mouvements (sauter, courir sur place, danser) font déjà la différence.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Jeux pour entraîner la concentration</h2>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Jeu des différences</strong> — Trouver les différences entre deux images</li>
                            <li><strong>Memory</strong> — Retenir l'emplacement des cartes</li>
                            <li><strong>Puzzle</strong> — Maintenir l'attention sur une tâche longue</li>
                            <li><strong>Lecture à voix haute</strong> — Suivre un texte sans décrocher</li>
                            <li><strong>Coloriage de mandalas</strong> — Calme et concentration</li>
                            <li><strong>Dictée muette</strong> — Épeler des mots de tête</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Quand s'inquiéter ?</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Des difficultés de concentration ponctuelles sont normales. Mais consultez un professionnel si :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Les difficultés persistent malgré les aménagements</li>
                            <li>L'enfant a du mal à se concentrer dans TOUTES les activités (y compris les jeux)</li>
                            <li>L'enseignant signale régulièrement des problèmes d'attention</li>
                            <li>L'enfant est très agité ou impulsif</li>
                            <li>Les résultats scolaires chutent significativement</li>
                        </ul>

                        <p className="text-gray-600 italic my-4">
                            Un bilan orthophonique ou neuropsychologique peut identifier un trouble de l'attention (TDAH) ou d'autres difficultés nécessitant un accompagnement spécifique.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            La concentration est comme un muscle : elle se travaille et se renforce avec le temps et la pratique. En mettant en place un environnement favorable, des routines adaptées et des techniques de concentration, vous aiderez votre enfant à développer cette compétence essentielle pour sa réussite scolaire.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Patience et régularité</strong> sont vos meilleurs alliés. Les progrès ne sont pas toujours immédiats, mais ils viendront !
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

export default ConcentrationPrimairePage;
