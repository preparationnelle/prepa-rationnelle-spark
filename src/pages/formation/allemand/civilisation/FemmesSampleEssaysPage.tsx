import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

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


const FemmesSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Femmes et Égalité · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Die Frauenquote in der Wirtschaft</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Ist eine Frauenquote in Führungspositionen notwendig?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland hat 2015 eine <VocabWord word="Frauenquote" explanation="eine Regel, dass ein bestimmter Prozentsatz von Positionen für Frauen sein muss" /> für <VocabWord word="Aufsichtsräte" explanation="Gruppen von Menschen, die große Firmen kontrollieren" /> großer Unternehmen eingeführt. Diese Quote verlangt, dass mindestens 30% der Positionen mit Frauen <VocabWord word="besetzt" explanation="gefüllt, gegeben an jemanden" /> werden. Trotzdem sind Frauen in <VocabWord word="Führungspositionen" explanation="wichtige Jobs, wo man anderen sagt, was sie tun sollen" /> noch immer eine Minderheit. Nur 13% der <VocabWord word="Vorstände" explanation="die Chefs der größtenFirmen" /> in DAX-Unternehmen sind Frauen (2023). Die <VocabWord word="Lohnlücke" explanation="der Unterschied, was Männer und Frauen für die gleiche Arbeit verdienen" />, also der Unterschied zwischen Männer- und Frauengehältern, liegt bei 18%. Manche sagen, dass Quoten unfair sind und gegen das <VocabWord word="Leistungsprinzip" explanation="die Idee, dass die besten Leute die Jobs bekommen sollten" /> verstoßen. Andere argumentieren, dass ohne Quoten keine echte Gleichstellung möglich ist. In diesem Kontext kann man sich fragen, ob eine Frauenquote notwendig ist. Im folgenden Aufsatz werde ich zeigen, dass Quoten ein wichtiges Werkzeug sind, aber nicht die einzige Lösung sein können.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute sind Quoten Diskriminierung gegen Männer. Sie sagen, dass nur <VocabWord word="Kompetenz" explanation="Fähigkeit, etwas gut zu machen" /> zählen sollte, nicht das Geschlecht. Ich lehne es ab, diese Argumentation zu akzeptieren. Es ist fraglich, ob das System wirklich fair ist. Ich finde es <VocabWord word="naiv" explanation="zu einfach gedacht, unrealistisch" /> zu glauben, dass Frauen einfach nicht gut genug sind.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, wie Quoten <VocabWord word="umgesetzt" explanation="in die Praxis gebracht, realisiert" /> werden. Man sollte zwischen starren Quoten und flexiblen Zielen unterscheiden. Ich muss zugeben, dass zu strenge Quoten manchmal problematisch sein können. Aber ich betrachte es als notwendig, strukturelle <VocabWord word="Benachteiligung" explanation="wenn jemand unfair schlechtere Chancen hat" /> zu bekämpfen.
                            </p>

                            <h3>II. Notwendigkeit von Quoten</h3>
                            <p>
                                Meiner Meinung nach sind Quoten wichtig, um <VocabWord word="Gleichberechtigung" explanation="wenn alle die gleichen Rechte und Chancen haben" /> zu erreichen. Es ist höchste Zeit, dass mehr Frauen in Führungspositionen kommen. Ich bin der Ansicht, dass der Markt allein das Problem nicht löst.
                            </p>
                            <p>
                                Es fällt auf, dass Länder mit Quoten schneller Fortschritte machen. Laut den Statistiken hat Norwegen seit der Einführung einer 40%-Quote im Jahr 2003 heute die höchste Frauenquote in Aufsichtsräten in Europa. Im Vergleich dazu sind in Deutschland ohne Quote die Zahlen viel niedriger. Seit der deutschen Quote 2015 ist der Frauenanteil in Aufsichtsräten von 20% auf 36% gestiegen – das zeigt, dass Quoten <VocabWord word="wirken" explanation="funktionieren, einen Effekt haben" />.
                            </p>
                            <p>
                                Außerdem ist es nicht wahr, dass es nicht genug qualifizierte Frauen gibt. Über 50% der Hochschulabsolvent sind Frauen. Das Problem ist nicht <VocabWord word="Qualifikation" explanation="Ausbildung, Fähigkeiten" />, sondern <VocabWord word="strukturelle Barrieren" explanation="Hindernisse im System, die schwer zu ändern sind" /> wie fehlende Kinderbetreuung und <VocabWord word="Vorurteile" explanation="negative Meinungen ohne guten Grund" />.
                            </p>

                            <h3>III. Ergänzende Maßnahmen</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass Quoten allein nicht reichen. Das Paradebeispiel ist die <VocabWord word="Vereinbarkeit" explanation="wenn zwei Dinge zusammen möglich sind" /> von Familie und Beruf. Deutschland muss mehr Kinderbetreuung, flexiblere Arbeitszeiten und bessere <VocabWord word="Elternzeit" explanation="Zeit, die Eltern zu Hause mit ihrem Baby verbringen können" /> für Väter <VocabWord word="anbieten" explanation="zur Verfügung stellen, geben" />.
                            </p>
                            <p>
                                Ein gutes Beispiel sind skandinavische Länder wie Schweden. Dort gibt es nicht nur Quoten, sondern auch großzügige Elternzeit für beide Eltern, viele Kindergärten und eine Kultur, die berufstätige Mütter unterstützt. Deutschland sollte dieses Gesamtpaket <VocabWord word="übernehmen" explanation="kopieren, auch machen" />.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Frauenquoten ein notwendiges Werkzeug für Gleichberechtigung sind. Aus diesen Gründen bin ich der Ansicht, dass Deutschland die Quote behalten und sogar ausweiten sollte. Die Zahlen zeigen, dass Quoten wirken. Insgesamt kann man feststellen, dass echte Gleichstellung Quoten plus kulturellen Wandel braucht. Diese Diskussion zeigt, dass Fairness manchmal aktive Maßnahmen erfordert.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Égalité femmes-hommes</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Frauenquote</strong> = quota de femmes</li>
                                            <li><strong>die Gleichberechtigung</strong> = égalité des droits</li>
                                            <li><strong>die Führungsposition(en)</strong> = poste de direction</li>
                                            <li><strong>der Aufsichtsrat</strong> = conseil de surveillance</li>
                                            <li><strong>der Vorstand</strong> = conseil d'administration</li>
                                            <li><strong>die Lohnlücke</strong> = écart salarial</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Travail et famille</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Vereinbarkeit</strong> = compatibilité</li>
                                            <li><strong>die Elternzeit</strong> = congé parental</li>
                                            <li><strong>die Kinderbetreuung</strong> = garde d'enfants</li>
                                            <li><strong>die Kompetenz</strong> = compétence</li>
                                            <li><strong>die Qualifikation</strong> = qualification</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Obstacles et solutions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Benachteiligung</strong> = discrimination</li>
                                            <li><strong>die Vorurteile</strong> = préjugés</li>
                                            <li><strong>strukturelle Barrieren</strong> = barrières structurelles</li>
                                            <li><strong>das Leistungsprinzip</strong> = principe de mérite</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>besetzen</strong> = occuper (un poste)</li>
                                            <li><strong>umsetzen</strong> = mettre en œuvre</li>
                                            <li><strong>wirken</strong> = avoir un effet</li>
                                            <li><strong>anbieten</strong> = offrir</li>
                                            <li><strong>übernehmen</strong> = adopter</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 2015 = introduction du quota en Allemagne</li>
                                        <li>• 30% = quota minimum pour les conseils de surveillance</li>
                                        <li>• 13% = femmes dans les conseils d'administration DAX (2023)</li>
                                        <li>• 18% = écart salarial hommes-femmes</li>
                                        <li>• 50%+ = diplômées universitaires sont des femmes</li>
                                        <li>• 36% = femmes dans conseils de surveillance (2023, vs 20% en 2015)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. Quota allemand de 2015</p>
                                        <p className="ml-4">30% minimum de femmes dans les conseils de surveillance des grandes entreprises. Résultat: 20% → 36%.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Sous-représentation persistante</p>
                                        <p className="ml-4">Seulement 13% de femmes dans les conseils d'administration DAX. Écart salarial de 18%.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Le problème n'est pas la qualification</p>
                                        <p className="ml-4">50%+ des diplômés universitaires sont des femmes. Le problème = barrières structurelles,  préjugés.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. Les quotas fonctionnent</p>
                                        <p className="ml-4">Norvège (40% depuis 2003) = leader européen. Allemagne: progrès nets depuis 2015.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. Mesures complémentaires nécessaires</p>
                                        <p className="ml-4">Garde d'enfants, flexibilité, congé parental pour pères. Modèle scandinave à suivre.</p>
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

export default FemmesSampleEssaysPage;
