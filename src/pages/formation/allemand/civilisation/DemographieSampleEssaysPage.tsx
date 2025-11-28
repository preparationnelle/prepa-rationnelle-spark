import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

// Component for clickable vocabulary words with German explanations
const VocabWord = ({ word, explanation }: { word: string; explanation: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setShowTooltip(false);
            }
        };

        if (showTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTooltip]);

    return (
        <span className="relative inline-block" ref={tooltipRef}>
            <span
                className="font-bold text-orange-700 cursor-pointer hover:text-orange-900 transition-colors"
                onClick={() => setShowTooltip(!showTooltip)}
            >
                {word}
            </span>
            {showTooltip && (
                <span className="absolute z-50 top-full left-0 mt-2 w-72 p-3 bg-white border-2 border-orange-400 rounded-lg shadow-xl text-sm text-gray-700">
                    <span className="font-semibold text-orange-700 block mb-1">Erklärung:</span>
                    <span className="text-gray-800">{explanation}</span>
                    <span className="absolute bottom-full left-4 border-8 border-transparent border-b-orange-400"></span>
                </span>
            )}
        </span>
    );
};


const DemographieSampleEssaysPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Home className="h-3 w-3" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
                            Formation <span className="text-orange-600">Allemand</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/allemand/civilisation" className="hover:text-foreground transition-colors">
                            Civilisation
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <span className="text-foreground font-medium">Démographie · Sujets rédigés</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
                    <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-orange-100">
                                <BookOpen className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Alterung und Zuwanderung in Deutschland</h2>
                                <p className="text-sm text-gray-600">Essai - Civilisation Allemande</p>
                            </div>
                        </div>
                        <Link to="/formation/allemand/civilisation">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Retour
                            </Button>
                        </Link>
                    </div>

                    <div className="p-6">
                        <div className="prose max-w-none text-gray-800 leading-relaxed">
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Kann Zuwanderung das demographische Problem Deutschlands lösen?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland steht vor einem großen <VocabWord word="demografischen Problem" explanation="Probleme mit der Bevölkerung, wie zu wenige junge Menschen" />. Die <VocabWord word="Geburtenrate" explanation="wie viele Babys pro Jahr geboren werden" /> ist sehr niedrig – nur 1,5 Kinder pro Frau. Gleichzeitig wird die Bevölkerung immer älter. Im Jahr 2023 waren 22% der Deutschen über 65 Jahre alt. Diese <VocabWord word="Alterung" explanation="wenn Menschen immer älter werden" /> der Gesellschaft <VocabWord word="bedroht" explanation="macht Probleme, bringt Gefahren" /> das <VocabWord word="Rentensystem" explanation="das System, das Geld an alte Menschen zahlt" /> und die Wirtschaft. Manche Experten sagen, dass mehr <VocabWord word="Zuwanderung" explanation="wenn Menschen aus anderen Ländern nach Deutschland kommen" /> die Lösung ist. Andere warnen vor sozialen Problemen. In diesem Kontext kann man sich fragen, ob Zuwanderung wirklich das demografische Problem Deutschlands lösen kann. Im folgenden Aufsatz werde ich zeigen, dass Zuwanderung wichtig ist, aber allein nicht ausreicht.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute ist Zuwanderung die einfache Antwort auf Deutschlands demografische Probleme. Sie sagen, dass Deutschland einfach mehr Einwanderer braucht. Ich lehne es ab, diese Meinung als zu simpel zu akzeptieren. Es ist fraglich, ob Zuwanderung allein genug ist. Ich finde es <VocabWord word="naiv" explanation="zu einfach gedacht, unrealistisch" />, dass manche glauben, mehr Menschen lösen automatisch alle Probleme.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, welche Art von Zuwanderung wir meinen. Man sollte zwischen <VocabWord word="Fachkräften" explanation="Menschen mit guter Ausbildung oder speziellen Fähigkeiten" /> und anderen Einwanderern unterscheiden. Ich muss zugeben, dass qualifizierte Zuwanderung sehr hilfreich sein kann. Aber ich betrachte es als unrealistisch zu denken, dass Deutschland genug Einwanderer bekommen kann, um die <VocabWord word="schrumpfende" explanation="kleiner werdend, weniger werdend" /> Bevölkerung komplett zu ersetzen.
                            </p>

                            <h3>II. Vorteile der Zuwanderung für die Demografie</h3>
                            <p>
                                Meiner Meinung nach ist Zuwanderung ein wichtiger Teil der Lösung. Es ist höchste Zeit, dass Deutschland seine <VocabWord word="Einwanderungspolitik" explanation="die politischen Regeln für Menschen, die nach Deutschland kommen wollen" /> modernisiert. Ich bin der Ansicht, dass Deutschland ohne Zuwanderung große wirtschaftliche Probleme hätte.
                            </p>
                            <p>
                                Es fällt auf, dass Einwanderer oft jünger sind als die deutsche Bevölkerung. Laut den Statistiken sind etwa 70% der Einwanderer zwischen 20 und 40 Jahre alt. Diese jungen Menschen arbeiten und zahlen in die <VocabWord word="Sozialkassen" explanation="das Geld, das für Rente, Krankenversicherung etc. gesammelt wird" />. Sie helfen, das Rentensystem zu <VocabWord word="finanzieren" explanation="mit Geld bezahlen, unterstützen" />.
                            </p>
                            <p>
                                Außerdem braucht Deutschland <VocabWord word="dringend" explanation="sehr schnell, es ist wichtig und eilig" /> mehr Arbeitskräfte. Die Wirtschaft hat heute etwa 1,5 Millionen offene Stellen. Im Gesundheitssystem fehlen besonders viele Menschen. Ohne Zuwanderung würde die deutsche Wirtschaft <VocabWord word="schrumpfen" explanation="kleiner werden, weniger produzieren" />.
                            </p>

                            <h3>III. Grenzen und zusätzliche Maßnahmen</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass Zuwanderung nicht die einzige Lösung sein kann. Das Paradebeispiel ist Japan, das sehr wenig Einwanderung hat aber trotzdem mit der Alterung <VocabWord word="umgeht" explanation="mit einem Problem leben kann, damit arbeiten kann" />. Deutschland braucht auch andere Politiken.
                            </p>
                            <p>
                                Ein gutes Beispiel ist die <VocabWord word="Familienpolitik" explanation="politische Maßnahmen, um Familien und Kinder zu unterstützen" />. Deutschland muss es für Familien leichter machen, Kinder zu haben. Das bedeutet mehr Kindergarten-Plätze, bessere <VocabWord word="Vereinbarkeit" explanation="wenn zwei Dinge zusammen möglich sind" /> von Familie und Beruf, und finanzielle Unterstützung. Außerdem sollten ältere Menschen länger arbeiten können, wenn sie wollen.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Zuwanderung wichtig für Deutschland ist, aber nicht allein die demografischen Probleme lösen kann. Aus diesen Gründen bin ich der Ansicht, dass Deutschland eine <VocabWord word="umfassende" explanation="komplett, alle Aspekte betreffend" /> Strategie braucht. Diese Strategie muss Zuwanderung, Familienpolitik und eine Reform des Rentensystems kombinieren. Insgesamt kann man feststellen, dass die demografische Herausforderung komplex ist und mehrere Lösungen braucht.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Démographie</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Alterung</strong> = vieillissement</li>
                                            <li><strong>die Bevölkerung</strong> = population</li>
                                            <li><strong>die Geburtenrate</strong> = taux de natalité</li>
                                            <li><strong>die Lebenserwartung</strong> = espérance de vie</li>
                                            <li><strong>schrumpfen</strong> = rétrécir, diminuer</li>
                                            <li><strong>das Rentensystem</strong> = système de retraite</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Immigration</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Zuwanderung</strong> = immigration</li>
                                            <li><strong>der Einwanderer</strong> = immigrant</li>
                                            <li><strong>die Fachkraft(¨e)</strong> = travailleur qualifié</li>
                                            <li><strong>die Integration</strong> = intégration</li>
                                            <li><strong>die Einwanderungspolitik</strong> = politique d'immigration</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Économie et société</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Arbeitskraft(¨e)</strong> = main-d'œuvre</li>
                                            <li><strong>die Sozialkassen</strong> = caisses sociales</li>
                                            <li><strong>die Familienpolitik</strong> = politique familiale</li>
                                            <li><strong>die Vereinbarkeit</strong> = compatibilité</li>
                                            <li><strong>finanzieren</strong> = financer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>Es ist dringend</strong> = C'est urgent</li>
                                            <li><strong>umgehen mit (+Dat)</strong> = gérer, faire face à</li>
                                            <li><strong>bedrohen</strong> = menacer</li>
                                            <li><strong>umfassend</strong> = global, complet</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 1,5 = taux de fécondité en Allemagne (enfants par femme)</li>
                                        <li>• 22% = pourcentage de la population de plus de 65 ans en 2023</li>
                                        <li>• 70% = pourcentage d'immigrants entre 20-40 ans</li>
                                        <li>• 1,5 millions = postes vacants dans l'économie allemande</li>
                                        <li>• 83 millions = population totale de l'Allemagne (2023)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Le défi démographique allemand</p>
                                        <p className="ml-4">Faible taux de natalité (1,5) + vieillissement rapide (22% > 65 ans) = menace pour le système de retraite et l'économie.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. L'immigration comme solution partielle</p>
                                        <p className="ml-4">Les immigrants sont plus jeunes (70% ont 20-40 ans), travaillent et contribuent aux caisses sociales.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Besoin de travailleurs qualifiés</p>
                                        <p className="ml-4">1,5 million de postes vacants. Pénurie particulière dans la santé et les secteurs techniques.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. L'immigration ne suffit pas seule</p>
                                        <p className="ml-4">Nécessité d'une approche globale : politique familiale + réforme des retraites + immigration.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Comparaison internationale</p>
                                        <p className="ml-4">Le Japon montre qu'on peut gérer le vieillissement sans beaucoup d'immigration, mais avec d'autres défis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemographieSampleEssaysPage;
