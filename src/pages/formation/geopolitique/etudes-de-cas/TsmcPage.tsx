import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Cpu, Globe, Users, Calendar, TrendingUp, DollarSign, Shield } from 'lucide-react';

const TsmcPage = () => {
    return (
        <div className="relative">
            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm mb-6">
                    <Link to="/" className="flex items-center text-carnet-ink-soft hover:text-carnet-ink">
                        <Home className="h-4 w-4 mr-1" />
                        Accueil
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <Link to="/formation/geopolitique" className="text-carnet-ink-soft hover:text-carnet-ink">
                        Géopolitique
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <Link to="/formation/geopolitique/cas-pratiques" className="text-carnet-ink-soft hover:text-carnet-ink">
                        Cas Pratiques
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="text-carnet-ink-soft">TSMC - Bouclier de Silicium</span>
                </nav>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Cpu className="h-8 w-8 text-red-600" />
                        <h1 className="text-4xl font-bold text-carnet-ink">
                            TSMC - Bouclier de Silicium
                        </h1>
                    </div>
                    <p className="text-lg text-carnet-ink-soft max-w-4xl">
                        L'entreprise la plus indispensable au monde. 90% des puces avancées, "Silicon Shield" protégeant Taïwan, enjeux de sécurité nationale US et Chine.
                    </p>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne principale */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Présentation */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-red-600" />
                                    Présentation géopolitique
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-carnet-ink leading-relaxed">
                                    Taiwan Semiconductor Manufacturing Company (TSMC) incarne le concept de "Silicon Shield" : sa domination absolue dans la production de semi-conducteurs avancés (90 % du marché mondial des puces de moins de 7 nm) rend Taïwan indispensable à l'économie mondiale, dissuadant théoriquement une invasion chinoise par le risque de destruction mutuelle économique assurée (scénario "terre brûlée"). Les enjeux incluent la dépendance critique des géants technologiques (Apple, Nvidia, AMD), les pressions américaines pour délocaliser la production (usines en Arizona subventionnées par le CHIPS Act), et la volonté de la Chine d'atteindre l'autosuffisance technologique malgré les sanctions. Les acteurs clés sont Morris Chang (fondateur), les gouvernements US (Biden/Trump et restrictions d'export), et Pékin. Des chiffres clés : 60 % de part de marché totale de la fonderie, 600 milliards USD de capitalisation, et des investissements de 65 milliards USD aux USA. Dates clés : 1987 (fondation), 2020 (arrêt des ventes à Huawei), 2024 (ouverture usine Kumamoto Japon). Cette étude est centrale pour : technologie, sécurité nationale, guerre commerciale, et dissuasion militaire.
                                </p>
                                <p className="text-sm text-carnet-ink-soft mt-3">
                                    <strong>Source :</strong> major-prepa.com, cio-online.com
                                </p>
                            </CardContent>
                        </Card>

                        {/* Acteurs clés */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-carnet-red" />
                                    Acteurs clés
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-carnet-ink">Morris Chang & TSMC</h4>
                                        <p className="text-carnet-ink">
                                            Fondateur visionnaire ayant créé le modèle "pure-play foundry".
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-carnet-ink">États-Unis</h4>
                                        <p className="text-carnet-ink">
                                            Poussent à la diversification (CHIPS Act, usines Arizona) pour sécuriser la supply chain.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-carnet-ink">Chine</h4>
                                        <p className="text-carnet-ink">
                                            Cherche à réduire sa dépendance tout en maintenant la pression militaire sur Taïwan.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Dates importantes */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-pr-black" />
                                    Dates importantes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pr-black-dark rounded-full mt-2"></div>
                                        <div>
                                            <div className="font-semibold">1987</div>
                                            <div className="text-carnet-ink">Fondation de TSMC par Morris Chang</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pr-black-dark rounded-full mt-2"></div>
                                        <div>
                                            <div className="font-semibold">2020</div>
                                            <div className="text-carnet-ink">Arrêt des ventes à Huawei sous pression US</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pr-black-dark rounded-full mt-2"></div>
                                        <div>
                                            <div className="font-semibold">2024</div>
                                            <div className="text-carnet-ink">Ouverture de l'usine de Kumamoto (Japon)</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Colonne latérale */}
                    <div className="space-y-6">
                        {/* Chiffres clés */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-red-600" />
                                    Chiffres clés
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <div className="text-2xl font-bold text-red-600">90%</div>
                                        <div className="text-sm text-carnet-ink-soft">Part de marché puces avancées</div>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <div className="text-2xl font-bold text-red-600">60%</div>
                                        <div className="text-sm text-carnet-ink-soft">Marché mondial de la fonderie</div>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <div className="text-2xl font-bold text-red-600">65Md$</div>
                                        <div className="text-sm text-carnet-ink-soft">Investissements aux USA</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Thématiques pertinentes */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-carnet-red" />
                                    Thématiques pertinentes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-carnet-red rounded-full"></div>
                                        <span>Technologie et puissance</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-carnet-red rounded-full"></div>
                                        <span>Sécurité nationale</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-carnet-red rounded-full"></div>
                                        <span>Dissuasion (Silicon Shield)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-carnet-red rounded-full"></div>
                                        <span>Guerre commerciale US-Chine</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-carnet-red rounded-full"></div>
                                        <span>Mondialisation des chaînes de valeur</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sources */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <DollarSign className="h-5 w-5 text-carnet-ink-soft" />
                                    Sources
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-carnet-ink-soft">
                                    major-prepa.com<br />
                                    cio-online.com
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TsmcPage;
