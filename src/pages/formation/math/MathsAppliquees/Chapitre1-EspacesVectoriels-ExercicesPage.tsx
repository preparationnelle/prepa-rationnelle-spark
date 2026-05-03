
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre1EspacesVectorielsExercicesPage = () => {
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
        stars,
    }: {
        level: string;
        title: string;
        icon: any;
        stars: number;
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
                    {[...Array(4 - stars)].map((_, i) => (
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
                            {id.replace(/[^0-9]/g, '')}
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
            chapterNumber={1}
            chapterTitle="Espaces Vectoriels"
            description="Définitions, sous-espaces vectoriels, familles libres, génératrices et bases en dimension finie."
            slug="espaces-vectoriels"
            activeSection="exercises"
            titleClassName="text-slate-800"
            showNavigation={true}
            previousChapter={{
                slug: "",
                title: "Retour au sommaire"
            }}
            nextChapter={{
                slug: "complements-suites-series",
                title: "Compléments : suites et séries numériques"
            }}
        >
            <div className="space-y-8">

                {/* Module 1 */}
                <div>
                    <DifficultyHeader
                        level="Module 1"
                        title="Sous-espaces vectoriels & Familles"
                        icon={BookOpen}
                        stars={1}
                    />

                    <ExerciseCard
                        id="ex1"
                        title="Exercice 1 : Vérification de SEV"
                        difficulty="Facile"
                        content={
                            <div>
                                <p>Parmi les ensembles suivants, lesquels sont des sous-espaces vectoriels de <LatexRenderer latex="\mathbb{R}^3" /> ?</p>
                                <ul className="list-disc ml-6 mt-2 space-y-2">
                                    <li><LatexRenderer latex="E_1 = \{ (x,y,z) \in \mathbb{R}^3 \mid 2x - y + 3z = 0 \}" /></li>
                                    <li><LatexRenderer latex="E_2 = \{ (x,y,z) \in \mathbb{R}^3 \mid x + y = 1 \}" /></li>
                                    <li><LatexRenderer latex="E_3 = \{ (x,y,z) \in \mathbb{R}^3 \mid x \geq 0 \}" /></li>
                                </ul>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p><strong><LatexRenderer latex="E_1" /> : OUI.</strong> C'est l'ensemble des solutions d'une équation linéaire homogène (c'est un plan passant par l'origine). Le vecteur nul <LatexRenderer latex="(0,0,0)" /> vérifie l'équation, et toute combinaison linéaire de solutions reste solution.</p>
                                <p><strong><LatexRenderer latex="E_2" /> : NON.</strong> Le vecteur nul <LatexRenderer latex="(0,0,0)" /> n'appartient pas à <LatexRenderer latex="E_2" /> car <LatexRenderer latex="0+0 \neq 1" />.</p>
                                <p><strong><LatexRenderer latex="E_3" /> : NON.</strong> Ce n'est pas stable par multiplication par un scalaire négatif. Si <LatexRenderer latex="u=(1,0,0) \in E_3" />, alors <LatexRenderer latex="-1 \cdot u = (-1,0,0) \notin E_3" />.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex2"
                        title="Exercice 2 : Combinaison Linéaire"
                        difficulty="Moyen"
                        content={
                            <div>
                                <p>Dans <LatexRenderer latex="\mathbb{R}^3" />, on considère les vecteurs <LatexRenderer latex="u = (1, 2, -1)" /> et <LatexRenderer latex="v = (3, 1, 0)" />.</p>
                                <p>Le vecteur <LatexRenderer latex="w = (2, -4, 3)" /> est-il combinaison linéaire de <LatexRenderer latex="u" /> et <LatexRenderer latex="v" /> ?</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>On cherche s'il existe des réels <LatexRenderer latex="\alpha, \beta" /> tels que <LatexRenderer latex="w = \alpha u + \beta v" />.</p>
                                <p>Cela revient à résoudre le système :</p>
                                <p><LatexRenderer latex="\begin{cases} \alpha + 3\beta = 2 \\ 2\alpha + \beta = -4 \\ -\alpha = 3 \end{cases}" /></p>
                                <p>De la dernière ligne, on tire <LatexRenderer latex="\alpha = -3" />.</p>
                                <p>En remplaçant dans la première : <LatexRenderer latex="-3 + 3\beta = 2 \implies 3\beta = 5 \implies \beta = 5/3" />.</p>
                                <p>Vérifions la deuxième équation : <LatexRenderer latex="2(-3) + 5/3 = -6 + 1.66... \neq -4" />.</p>
                                <p>Le système n'a pas de solution. Donc <strong><LatexRenderer latex="w" /> n'est pas combinaison linéaire de <LatexRenderer latex="u" /> et <LatexRenderer latex="v" /></strong>.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex3"
                        title="Exercice 3 : Liberté d'une famille"
                        difficulty="Facile"
                        content={
                            <div>
                                <p>La famille de vecteurs <LatexRenderer latex="\mathcal{F} = \{ (1,0,1), (0,1,1), (1,1,0) \}" /> est-elle libre dans <LatexRenderer latex="\mathbb{R}^3" /> ?</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>Soient <LatexRenderer latex="a, b, c" /> des réels tels que <LatexRenderer latex="a(1,0,1) + b(0,1,1) + c(1,1,0) = (0,0,0)" />.</p>
                                <p>Cela donne le système :</p>
                                <p><LatexRenderer latex="\begin{cases} a + c = 0 \quad (1) \\ b + c = 0 \quad (2) \\ a + b = 0 \quad (3) \end{cases}" /></p>
                                <p>De (1) on a <LatexRenderer latex="c = -a" />.</p>
                                <p>De (2) on a <LatexRenderer latex="b = -c = a" />.</p>
                                <p>On remplace dans (3) : <LatexRenderer latex="a + a = 0 \implies 2a = 0 \implies a = 0" />.</p>
                                <p>Comme <LatexRenderer latex="a = 0" />, alors <LatexRenderer latex="b = 0" /> et <LatexRenderer latex="c = 0" />.</p>
                                <p>La seule solution est la solution triviale. La famille est donc <strong>libre</strong>.</p>
                            </div>
                        }
                    />
                </div>

                {/* Module 2 */}
                <div>
                    <DifficultyHeader
                        level="Module 2"
                        title="Bases et Dimension"
                        icon={Lightbulb}
                        stars={2}
                    />

                    <ExerciseCard
                        id="ex4"
                        title="Exercice 4 : Base et dimension de SEV"
                        difficulty="Moyen"
                        content={
                            <div>
                                <p>Soit <LatexRenderer latex="F = \{ (x,y,z,t) \in \mathbb{R}^4 \mid x+y+z+t=0 \text{ et } x-y+z-t=0 \}" />.</p>
                                <p>Déterminer une base et la dimension de <LatexRenderer latex="F" />.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>On résout le système :</p>
                                <p><LatexRenderer latex="\begin{cases} x+y+z+t=0 \\ x-y+z-t=0 \end{cases}" /></p>
                                <p>En sommant les deux équations : <LatexRenderer latex="2x + 2z = 0 \implies z = -x" />.</p>
                                <p>En soustrayant : <LatexRenderer latex="2y + 2t = 0 \implies t = -y" />.</p>
                                <p>Les vecteurs de <LatexRenderer latex="F" /> s'écrivent : <LatexRenderer latex="(x, y, -x, -y) = x(1,0,-1,0) + y(0,1,0,-1)" />.</p>
                                <p>La famille <LatexRenderer latex="\mathcal{B} = \{ (1,0,-1,0), (0,1,0,-1) \}" /> est génératrice de <LatexRenderer latex="F" /> et libre (vecteurs non colinéaires).</p>
                                <p>C'est donc une <strong>base</strong> de <LatexRenderer latex="F" />.</p>
                                <p>La dimension de <LatexRenderer latex="F" /> est <strong>2</strong>.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex5"
                        title="Exercice 5 : Polynômes et Bases"
                        difficulty="Moyen"
                        content={
                            <div>
                                <p>Dans <LatexRenderer latex="\mathbb{R}_2[X]" />, montrer que la famille <LatexRenderer latex="\mathcal{B} = \{ X^2+1, X+1, 1 \}" /> est une base.</p>
                                <p>Déterminer les coordonnées de <LatexRenderer latex="P = 2X^2 - X + 3" /> dans cette base.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>La dimension de <LatexRenderer latex="\mathbb{R}_2[X]" /> est 3. La famille <LatexRenderer latex="\mathcal{B}" /> a 3 vecteurs.</p>
                                <p>Il suffit de montrer qu'elle est libre. Soit <LatexRenderer latex="a(X^2+1) + b(X+1) + c(1) = 0" />.</p>
                                <p><LatexRenderer latex="aX^2 + bX + (a+b+c) = 0" />.</p>
                                <p>Par identification : <LatexRenderer latex="a=0" />, <LatexRenderer latex="b=0" />, <LatexRenderer latex="a+b+c=0 \implies c=0" />.</p>
                                <p>La famille est libre et a le bon cardinal, c'est une base.</p>
                                <hr className="border-slate-200" />
                                <p>Pour les coordonnées : <LatexRenderer latex="2X^2 - X + 3 = \alpha(X^2+1) + \beta(X+1) + \gamma" />.</p>
                                <p><LatexRenderer latex="\alpha X^2 + \beta X + (\alpha+\beta+\gamma)" />.</p>
                                <p>Identification : <LatexRenderer latex="\alpha=2" />, <LatexRenderer latex="\beta=-1" />, <LatexRenderer latex="\alpha+\beta+\gamma = 3 \implies 2-1+\gamma=3 \implies \gamma=2" />.</p>
                                <p>Coordonnées : <LatexRenderer latex="(2, -1, 2)" />.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex6"
                        title="Exercice 6 : Rang d'une famille"
                        difficulty="Difficile"
                        content={
                            <div>
                                <p>Calculer le rang de la famille de vecteurs suivante dans <LatexRenderer latex="\mathbb{R}^3" /> :</p>
                                <p><LatexRenderer latex="u_1=(1,2,3), u_2=(2,4,6), u_3=(0,0,1)" />.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>On remarque que <LatexRenderer latex="u_2 = 2u_1" />. Donc <LatexRenderer latex="u_1" /> et <LatexRenderer latex="u_2" /> sont colinéaires.</p>
                                <p>Le sous-espace engendré est le même que celui engendré par <LatexRenderer latex="\{ u_1, u_3 \}" />.</p>
                                <p><LatexRenderer latex="u_1" /> et <LatexRenderer latex="u_3" /> ne sont pas colinéaires (clairement, à cause de la coordonnée selon x).</p>
                                <p>Donc la famille <LatexRenderer latex="\{ u_1, u_3 \}" /> est libre.</p>
                                <p>Le rang de la famille est <strong>2</strong>.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex7"
                        title="Exercice 7 : Supplémentaire"
                        difficulty="Difficile"
                        content={
                            <div>
                                <p>Soit <LatexRenderer latex="F = \text{Vect}(u)" /> avec <LatexRenderer latex="u=(1,1,1)" /> dans <LatexRenderer latex="\mathbb{R}^3" />.</p>
                                <p>Déterminer un supplémentaire de <LatexRenderer latex="F" /> dans <LatexRenderer latex="\mathbb{R}^3" />.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>On cherche un plan <LatexRenderer latex="G" /> tel que <LatexRenderer latex="\mathbb{R}^3 = F \oplus G" />.</p>
                                <p>Il suffit de compléter la base <LatexRenderer latex="(u)" /> en une base de <LatexRenderer latex="\mathbb{R}^3" />. Prenons <LatexRenderer latex="e_1=(1,0,0)" /> et <LatexRenderer latex="e_2=(0,1,0)" />.</p>
                                <p>Vérifions que <LatexRenderer latex="(u, e_1, e_2)" /> est libre :</p>
                                <p><LatexRenderer latex="\det(u, e_1, e_2) = \begin{vmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & 0 & 0 \end{vmatrix} = 1 \neq 0" /> (développement dernière ligne).</p>
                                <p>Donc <LatexRenderer latex="G = \text{Vect}(e_1, e_2) = \{ (x,y,0) \mid x,y \in \mathbb{R} \}" /> convient.</p>
                                <p>C'est le plan <LatexRenderer latex="z=0" />.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex8"
                        title="Exercice 8 : Rang avec paramètre"
                        difficulty="Difficile"
                        content={
                            <div>
                                <p>Soit <LatexRenderer latex="m \in \mathbb{R}" />. Déterminer le rang de la famille <LatexRenderer latex="\mathcal{F}_m = \{ (1,1,1), (1,m,1), (1,1,m) \}" />.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>Étudions l'indépendance linéaire en résolvant le système homogène ou en calculant le déterminant de la matrice formée par les vecteurs (en colonnes).</p>
                                <p><LatexRenderer latex="\det(M) = \begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix}" />.</p>
                                <p><LatexRenderer latex="L_2 \leftarrow L_2 - L_1" /> et <LatexRenderer latex="L_3 \leftarrow L_3 - L_1" /> :</p>
                                <p><LatexRenderer latex="\det(M) = \begin{vmatrix} 1 & 1 & 1 \\ 0 & m-1 & 0 \\ 0 & 0 & m-1 \end{vmatrix} = (m-1)^2" />.</p>
                                <p><strong>1er cas : <LatexRenderer latex="m \neq 1" />.</strong> Le déterminant est non nul, la famille est libre. Le rang est <strong>3</strong>.</p>
                                <p><strong>2ème cas : <LatexRenderer latex="m = 1" />.</strong> Tous les vecteurs sont égaux à <LatexRenderer latex="(1,1,1)" />. Le rang est <strong>1</strong>.</p>
                            </div>
                        }
                    />

                    <ExerciseCard
                        id="ex9"
                        title="Exercice 9 : Intersection de SEV"
                        difficulty="Difficile"
                        content={
                            <div>
                                <p>Soient <LatexRenderer latex="F = \{ P \in \mathbb{R}_2[X] \mid P(0) = 0 \}" /> et <LatexRenderer latex="G = \{ P \in \mathbb{R}_2[X] \mid P'(1) = 0 \}" />.</p>
                                <p>Determiner une base de <LatexRenderer latex="F \cap G" />.</p>
                            </div>
                        }
                        correction={
                            <div className="space-y-4">
                                <p>Un polynôme <LatexRenderer latex="P = aX^2 + bX + c" /> appartient à <LatexRenderer latex="F \cap G" /> si :</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li><LatexRenderer latex="P(0) = 0 \implies c = 0" />.</li>
                                    <li><LatexRenderer latex="P'(X) = 2aX + b" />. <LatexRenderer latex="P'(1) = 0 \implies 2a + b = 0 \implies b = -2a" />.</li>
                                </ul>
                                <p>Donc <LatexRenderer latex="P = aX^2 - 2aX = a(X^2 - 2X)" />.</p>
                                <p><LatexRenderer latex="F \cap G = \text{Vect}(X^2 - 2X)" />.</p>
                                <p>Une base est <LatexRenderer latex="(X^2 - 2X)" /> (dimension 1).</p>
                            </div>
                        }
                    />

                </div>
            </div>
        </MathChapterTemplate>
    );
};

export default Chapitre1EspacesVectorielsExercicesPage;
