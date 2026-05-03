import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre13EstimationStatistiqueAvanceeExercicesPage = () => {
    const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

    const toggleCorrection = (exerciseId: string) => {
        setVisibleCorrections(prev => ({
            ...prev,
            [exerciseId]: !prev[exerciseId]
        }));
    };

    const DifficultyHeader = ({
        level,
        title,
        icon: Icon,
        stars = 1,
    }: {
        level: string;
        title: string;
        icon: any;
        stars?: number;
    }) => (
        <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
            <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
                <div className="flex gap-1 mt-1">
                    {[...Array(stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    {[...Array(3 - stars > 0 ? 3 - stars : 0)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-slate-200" />
                    ))}
                </div>
            </div>
        </div>
    );

    const ExerciseCard = ({
        id,
        title,
        content,
        correction,
        difficulty
    }: {
        id: string;
        title: string;
        content: React.ReactNode;
        correction: React.ReactNode;
        difficulty: string;
    }) => (
        <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
            <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
                            {id.replace(/[^0-9.]/g, '')}
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {difficulty}
                    </span>
                </div>

                <div className="mb-6 text-slate-700 leading-relaxed pl-1">
                    {content}
                </div>

                <div className="flex flex-col gap-4">
                    <Button
                        onClick={() => toggleCorrection(id)}
                        variant="ghost"
                        size="sm"
                        className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
                    >
                        {visibleCorrections[id] ? (
                            <>
                                <ChevronUp className="mr-2 h-4 w-4" />
                                Masquer la correction
                            </>
                        ) : (
                            <>
                                <ChevronDown className="mr-2 h-4 w-4" />
                                Afficher la correction
                            </>
                        )}
                    </Button>

                    {visibleCorrections[id] && (
                        <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
                            <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
                            <div className="text-slate-700 leading-relaxed space-y-2">
                                {correction}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );

    return (
        <MathChapterTemplate
            chapterNumber={28}
            chapterTitle="Estimation Statistique"
            description="Exercices sur les estimateurs, le biais, le risque et les intervalles de confiance."
            slug="estimation-statistique-avancee"
            activeSection="exercises"
            showNavigation={true}
            previousChapter={{
                slug: "convergences-approximations",
                title: "Convergences (Ch 27)"
            }}
            nextChapter={{
                slug: "theorie-estimation-statistique",
                title: "Théorie de l'Estimation (Ch 31)"
            }}
        >
            <div className="space-y-8">

                {/* Module 1 */}
                <div>
                    <DifficultyHeader
                        level="Module 1"
                        title="Estimation Ponctuelle"
                        icon={Target}
                        stars={1}
                    />

                    <ExerciseCard
                        id="28.1"
                        title="Estimateur sans biais"
                        difficulty="Fondamental"
                        content={
                            <div className="space-y-4">
                                <p>Soit <LatexRenderer latex="X \sim \mathcal{U}([0, \theta])" />. On pose <LatexRenderer latex="M_n = \max(X_1, \dots, X_n)" />.</p>
                                <p>Calculer le biais de <LatexRenderer latex="M_n" /> et corriger pour avoir un estimateur sans biais.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p><LatexRenderer latex="\mathbb{E}(M_n) = \frac{n}{n+1}\theta" />.</p>
                                <p>Estimateur corrigé : <LatexRenderer latex="\hat{\theta} = \frac{n+1}{n} M_n" />.</p>
                            </div>
                        }
                    />
                </div>

                {/* Module 2 */}
                <div>
                    <DifficultyHeader
                        level="Module 2"
                        title="Intervalles de Confiance"
                        icon={BookOpen}
                        stars={2}
                    />
                    <ExerciseCard
                        id="28.2"
                        title="Intervalle asymptotique (Bernoulli)"
                        difficulty="Classique"
                        content={
                            <div className="space-y-4">
                                <p>IC pour une proportion <LatexRenderer latex="p" /> (sondage).</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p><LatexRenderer latex="[\overline{X}_n \pm 1.96 \sqrt{\frac{\overline{X}_n(1-\overline{X}_n)}{n}}]" />.</p>
                            </div>
                        }
                    />
                </div>

                {/* Module 3 */}
                <div>
                    <DifficultyHeader
                        level="Module 3"
                        title="Propriétés Avancées"
                        icon={Crown}
                        stars={3}
                    />
                    <ExerciseCard
                        id="28.3"
                        title="Information de Fisher (Intro)"
                        difficulty="Difficile"
                        content={
                            <div className="space-y-4">
                                <p>Borne de Cramér-Rao pour l'estimateur de la moyenne d'une loi normale.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>La moyenne empirique est un estimateur efficace (atteint la borne).</p>
                            </div>
                        }
                    />
                </div>

            </div>
        </MathChapterTemplate>
    );
};

export default Chapitre13EstimationStatistiqueAvanceeExercicesPage;
