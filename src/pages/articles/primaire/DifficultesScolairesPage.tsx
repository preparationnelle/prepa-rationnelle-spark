import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const DifficultesScolairesPage = () => {
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
                            <span className="text-gray-900">Difficultés scolaires</span>
                        </div>
                    </div>
                </nav>

                {/* Contenu principal */}
                <article className="container mx-auto px-4 py-12 max-w-3xl">
                    {/* En-tête */}
                    <header className="mb-12">
                        <p className="text-sm text-gray-500 mb-4">Équipe Prépa Rationnelle · Décembre 2024 · 9 min de lecture</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Accompagner un enfant en difficulté scolaire : reconnaître les signes et agir
                        </h1>
                        <p className="text-xl text-gray-600">
                            Guide pour les parents qui souhaitent aider leur enfant à surmonter ses difficultés à l'école
                        </p>
                    </header>

                    {/* Corps de l'article */}
                    <div className="prose prose-lg prose-gray max-w-none">

                        <p className="text-gray-700 leading-relaxed">
                            Voir son enfant en difficulté à l'école est une source d'inquiétude pour tous les parents. Mauvaises notes, démotivation, conflits autour des devoirs... Ces signaux ne doivent ni être ignorés, ni dramatisés. Avec le bon accompagnement, la grande majorité des difficultés scolaires peuvent être surmontées.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Reconnaître les signes de difficulté</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les difficultés scolaires peuvent se manifester de différentes manières :
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Signes liés aux apprentissages</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Baisse des résultats dans une ou plusieurs matières</li>
                            <li>Difficultés persistantes en lecture, écriture ou calcul</li>
                            <li>Lenteur excessive dans le travail</li>
                            <li>Incompréhension des consignes</li>
                            <li>Devoirs qui prennent beaucoup trop de temps</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Signes comportementaux</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Refus d'aller à l'école ou maux de ventre le matin</li>
                            <li>Démotivation, phrases comme « je suis nul »</li>
                            <li>Agitation ou au contraire repli sur soi</li>
                            <li>Anxiété à l'approche des contrôles</li>
                            <li>Conflits répétés autour des devoirs</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Signes relationnels</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Difficultés avec les camarades</li>
                            <li>Relation compliquée avec l'enseignant</li>
                            <li>Isolement ou rejet par les pairs</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les causes possibles des difficultés</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Avant d'agir, il est important d'identifier la cause :
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Causes ponctuelles</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Événement familial</strong> — Déménagement, divorce, naissance, deuil...</li>
                            <li><strong>Problème relationnel</strong> — Conflit avec un camarade ou l'enseignant</li>
                            <li><strong>Fatigue ou maladie</strong> — Manque de sommeil, problème de santé</li>
                            <li><strong>Lacunes accumulées</strong> — Des bases non acquises qui bloquent les apprentissages suivants</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Causes durables nécessitant un diagnostic</h3>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Troubles « dys »</strong> — Dyslexie, dyspraxie, dyscalculie, dysorthographie...</li>
                            <li><strong>Trouble de l'attention (TDAH)</strong> — Difficultés de concentration, impulsivité</li>
                            <li><strong>Précocité intellectuelle</strong> — Parfois source d'ennui ou de décalage</li>
                            <li><strong>Trouble anxieux</strong> — Anxiété de performance, phobie scolaire</li>
                            <li><strong>Problème sensoriel</strong> — Vue ou audition déficiente non détectée</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Comment réagir en tant que parent ?</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Ne pas dramatiser, ne pas ignorer</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Une mauvaise note n'est pas une catastrophe, mais une série de signaux d'alerte mérite attention. Gardez votre calme et restez à l'écoute de votre enfant.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Dialoguer avec l'enfant</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Demandez-lui comment il vit l'école, ce qu'il aime, ce qu'il trouve difficile. Écoutez sans juger. Souvent, l'enfant sait ce qui ne va pas mais n'ose pas en parler.
                        </p>

                        <p className="text-gray-700 my-4"><strong>Questions à poser :</strong></p>
                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>« Comment ça se passe en classe ? »</li>
                            <li>« Qu'est-ce que tu trouves difficile en ce moment ? »</li>
                            <li>« Y a-t-il quelque chose qui te tracasse ? »</li>
                            <li>« Comment je peux t'aider ? »</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Rencontrer l'enseignant</h3>

                        <p className="text-gray-700 leading-relaxed">
                            L'enseignant observe votre enfant quotidiennement. Demandez un rendez-vous pour :
                        </p>

                        <ul className="text-gray-700 space-y-1 my-4">
                            <li>Avoir son point de vue objectif</li>
                            <li>Comprendre où se situent les difficultés</li>
                            <li>Définir ensemble des pistes d'action</li>
                            <li>Assurer un suivi régulier</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Consulter si nécessaire</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Si les difficultés persistent malgré le soutien, un bilan peut être utile :
                        </p>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li><strong>Orthophoniste</strong> — Pour les troubles du langage, lecture, écriture</li>
                            <li><strong>Psychomotricien</strong> — Pour les troubles de la motricité et de l'écriture</li>
                            <li><strong>Psychologue / Neuropsychologue</strong> — Pour évaluer le fonctionnement cognitif et émotionnel</li>
                            <li><strong>Orthoptiste</strong> — Pour les problèmes visuels</li>
                            <li><strong>Médecin</strong> — Pour éliminer une cause physique</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Comment aider au quotidien ?</h2>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Valoriser les réussites</strong> — Même petites, elles construisent la confiance.</li>
                            <li><strong>Éviter les comparaisons</strong> — Chaque enfant a son propre rythme.</li>
                            <li><strong>Adapter les attentes</strong> — Des objectifs trop élevés découragent.</li>
                            <li><strong>Créer un cadre rassurant</strong> — Routine, calme, bienveillance.</li>
                            <li><strong>Limiter les écrans</strong> — Ils peuvent aggraver les difficultés d'attention.</li>
                            <li><strong>Veiller au sommeil</strong> — Un enfant fatigué ne peut pas apprendre.</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Les aides disponibles</h2>

                        <ul className="text-gray-700 space-y-3 my-6">
                            <li><strong>Aide personnalisée à l'école</strong> — APC (Activités Pédagogiques Complémentaires)</li>
                            <li><strong>PPRE</strong> — Programme Personnalisé de Réussite Éducative</li>
                            <li><strong>PAP</strong> — Plan d'Accompagnement Personnalisé (troubles dys)</li>
                            <li><strong>PPS</strong> — Projet Personnalisé de Scolarisation (handicap reconnu)</li>
                            <li><strong>Soutien scolaire</strong> — CNED, cours particuliers, associations...</li>
                            <li><strong>RASED</strong> — Réseau d'Aides Spécialisées aux Élèves en Difficulté</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Ce qu'il faut éviter</h2>

                        <ul className="text-gray-700 space-y-2 my-4">
                            <li>Punir pour les mauvaises notes</li>
                            <li>Dire « tu es nul » ou « tu ne fais pas d'efforts »</li>
                            <li>Comparer avec les frères, sœurs ou camarades</li>
                            <li>Surcharger de travail supplémentaire</li>
                            <li>Ignorer les signaux d'alerte par peur du diagnostic</li>
                            <li>Porter seul le poids de l'accompagnement</li>
                        </ul>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les difficultés scolaires ne sont pas une fatalité. Avec de la patience, un accompagnement adapté et une collaboration entre parents, enseignants et professionnels, la grande majorité des enfants peuvent progresser et retrouver confiance en leurs capacités.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>N'oubliez pas :</strong> votre enfant est bien plus que ses notes. Son bien-être émotionnel et sa confiance en lui sont les fondations de sa réussite future, scolaire et personnelle.
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

export default DifficultesScolairesPage;
