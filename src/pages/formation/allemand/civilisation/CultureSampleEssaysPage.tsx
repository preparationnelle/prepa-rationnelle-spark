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


const CultureSampleEssaysPage = () => {
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
                        <span className="text-foreground font-medium">Culture · Sujets rédigés</span>
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
                                <h2 className="text-xl font-bold text-gray-900">Deutsche Identität im 21. Jahrhundert</h2>
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
                            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500">SUJET: Kann Deutschland eine multikulturelle Identität haben?</p>

                            <h3>Einleitung</h3>
                            <p>
                                Deutschland ist heute ein <VocabWord word="multikulturelles Land" explanation="ein Land mit Menschen aus vielen verschiedenen Kulturen" /> mit über 20 Millionen Menschen mit <VocabWord word="Migrationshintergrund" explanation="Menschen, die selbst oder deren Eltern aus anderen Ländern kommen" />. Das ist etwa 25% der Bevölkerung. Diese <VocabWord word="Vielfalt" explanation="viele verschiedene Arten, Diversität" /> verändert die deutsche Gesellschaft und wirft die Frage auf, was deutsch sein bedeutet. Gibt es eine klare deutsche <VocabWord word="Identität" explanation="wer man ist, die eigenen Werte und Kultur" />, oder ist sie heute multikulturell? Manche sagen, dass die traditionelle deutsche Kultur in Gefahr ist. Andere argumentieren, dass Vielfalt Deutschland <VocabWord word="bereichert" explanation="besser macht, wertvoller macht" />. In diesem Kontext kann man sich fragen, ob Deutschland eine multikulturelle Identität entwickeln kann. Im folgenden Aufsatz werde ich zeigen, dass Deutschland sowohl seine traditionellen Werte <VocabWord word="bewahren" explanation="behalten, schützen" /> als auch offen für neue Kulturen sein kann.
                            </p>

                            <h3>I. Kritik der gegenteiligen These</h3>
                            <p>
                                Für manche Leute ist die Idee einer multikulturellen deutschen Identität ein Widerspruch. Sie sagen, dass man nicht gleichzeitig deutsch und multikulturell sein kann. Ich lehne es ab, diese <VocabWord word="enge" explanation="sehr klein, beschränkt, nicht offen" /> Definition von Identität zu akzeptieren. Es ist fraglich, ob Kultur etwas <VocabWord word="Fixes" explanation="etwas, das sich nie ändert, statisch" /> ist. Ich finde es übertrieben zu sagen, dass Einwanderer die deutsche Kultur zerstören.
                            </p>
                            <p>
                                Allerdings hängt es davon ab, was wir mit Integration meinen. Man sollte zwischen <VocabWord word="Assimilation" explanation="wenn man seine eigene Kultur komplett aufgibt" /> und Integration unterscheiden. Ich muss zugeben, dass es Herausforderungen gibt. Aber ich betrachte es als falsch zu denken, dass Multikulturalismus automatisch <VocabWord word="scheitert" explanation="nicht funktioniert, keinen Erfolg hat" />. Das Paradebeispiel ist Kanada, wo Multikulturalismus Teil der nationalen Identität ist.
                            </p>

                            <h3>II. Deutsche Werte und kulturelle Offenheit</h3>
                            <p>
                                Meiner Meinung nach kann Deutschland eine multikulturelle Identität haben, während es seine <VocabWord word="Grundwerte" explanation="die wichtigsten Werte, auf denen alles basiert" /> behält. Es ist höchste Zeit, dass Deutschland seine Identität neu <VocabWord word="definiert" explanation="erklärt, beschreibt, festlegt" />. Ich bin der Ansicht, dass deutsche Werte wie Demokratie, Rechtsstaatlichkeit und soziale Marktwirtschaft wichtiger sind als <VocabWord word="ethnische" explanation="was mit Herkunft und Rasse zu tun hat" /> Homogenität.
                            </p>
                            <p>
                                Es fällt auf, dass viele erfolgreiche Deutsche einen Migrationshintergrund haben. Laut den Statistiken sind 30% der <VocabWord word="Gründer" explanation="Menschen, die neue Firmen starten" /> von Start-ups in Deutschland Menschen mit ausländischen Wurzeln. Im Vergleich zu früher ist Deutschland viel offener geworden. Heute haben wir türkischstämmige Politiker, asiatische Künstler und afrikanische Wissenschaftler, die alle zur deutschen Gesellschaft beitragen.
                            </p>
                            <p>
                                Außerdem zeigt die Geschichte, dass deutsche Kultur sich immer verändert hat. Im 18. Jahrhundert haben französische Ideen Deutschland <VocabWord word="geprägt" explanation="stark beeinflusst, geformt" />. Nach dem Zweiten Weltkrieg kamen amerikanische Einflüsse. Kultur ist nie statisch.
                            </p>

                            <h3>III. Herausforderungen und Lösungen</h3>
                            <p>
                                Umso wichtiger ist es zu sagen, dass Integration nicht automatisch passiert. Deutschland muss aktiv daran arbeiten. Ein gutes Beispiel sind die <VocabWord word="Integrationskurse" explanation="Kurse, wo Einwanderer Deutsch lernen und über Deutschland lernen" />, wo Migranten Deutsch lernen und deutsche Werte kennenlernen. Etwa 1,5 Millionen Menschen haben seit 2005 solche Kurse besucht.
                            </p>
                            <p>
                                Ein anderes Beispiel ist der Sport. Fußball zeigt perfekt, wie multikulturelle Identität funktioniert. Die deutsche Nationalmannschaft hat heute Spieler mit türkischen, polnischen, afrikanischen und asiatischen Wurzeln. Sie sind alle <VocabWord word="stolz" explanation="haben ein gutes Gefühl über etwas, sind glücklich darüber" /> darauf, Deutschland zu <VocabWord word="vertreten" explanation="für Deutschland spielen, repräsentieren" />.
                            </p>

                            <h3>Schluss</h3>
                            <p>
                                Zusammenfassend lässt sich sagen, dass Deutschland durchaus eine multikulturelle Identität entwickeln kann. Aus diesen Gründen bin ich der Ansicht, dass Vielfalt Deutschland stärker macht. Die deutsche Identität basiert auf Werten, nicht auf Ethnizität. Insgesamt kann man feststellen, dass das moderne Deutschland eine Balance zwischen Tradition und Offenheit findet. Diese Diskussion zeigt, dass kulturelle Identität dynamisch ist und sich entwickeln kann.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vocabulaire utile</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Identité et culture</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Identität</strong> = identité</li>
                                            <li><strong>die Vielfalt</strong> = diversité</li>
                                            <li><strong>der Migrationshintergrund</strong> = origine migratoire</li>
                                            <li><strong>multikulturell</strong> = multiculturel</li>
                                            <li><strong>die Kultur(en)</strong> = culture</li>
                                            <li><strong>die Tradition(en)</strong> = tradition</li>
                                            <li><strong>die Werte</strong> = valeurs</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Integration</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>die Integration</strong> = intégration</li>
                                            <li><strong>die Assimilation</strong> = assimilation</li>
                                            <li><strong>der Integrationskurs</strong> = cours d'intégration</li>
                                            <li><strong>bereichern</strong> = enrichir</li>
                                            <li><strong>prägen</strong> = marquer, influencer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Verbes clés</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>bewahren</strong> = préserver</li>
                                            <li><strong>definieren</strong> = définir</li>
                                            <li><strong>vertreten</strong> = représenter</li>
                                            <li><strong>beitragen zu</strong> = contribuer à</li>
                                            <li><strong>scheitern</strong> = échouer</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Expressions</h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li><strong>stolz sein auf</strong> = être fier de</li>
                                            <li><strong>die Grundwerte</strong> = valeurs fondamentales</li>
                                            <li><strong>eng</strong> = étroit, restrictif</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Chiffres clés à retenir</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• 20+ millions = personnes avec origine migratoire en Allemagne</li>
                                        <li>• 25% = proportion de la population avec origine migratoire</li>
                                        <li>• 30% = fondateurs de start-ups avec origine étrangère</li>
                                        <li>• 1,5 millions = participants aux cours d'intégration depuis 2005</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Idées clés à retenir</h3>
                                <div className="space-y-3 text-sm text-gray-800">
                                    <div>
                                        <p className="font-semibold text-gray-900">1. L'Allemagne est multiculturelle</p>
                                        <p className="ml-4">25% de la population a une origine migratoire (20+ millions). Cette diversité transforme la société.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">2. Identité basée sur les valeurs, pas l'ethnicité</p>
                                        <p className="ml-4">Démocratie, État de droit, économie sociale de marché sont plus importants que l'homogénéité ethnique.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">3. Contributions des immigrants</p>
                                        <p className="ml-4">30% des créateurs de start-ups ont des racines étrangères. Politiciens, artistes, scientifiques enrichissent la société.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">4. La culture allemande a toujours évolué</p>
                                        <p className="ml-4">Influences françaises au 18ème, américaines après 1945. La culture n'est jamais statique.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">5. L'intégration nécessite des efforts</p>
                                        <p className="ml-4">Cours d'intégration (1,5M participants depuis 2005), sport comme vecteur d'unité (équipe nationale multiculturelle).</p>
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

export default CultureSampleEssaysPage;
