import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Palette, BookOpen, ArrowLeft } from 'lucide-react';

const CultureWarsPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="sticky top-0 z-50 bg-white border-b border-fuchsia-200">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-black/70">
                        <Link to="/" className="flex items-center gap-1 hover:text-black transition-colors">
                            <Home className="h-3 w-3 text-fuchsia-600" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <Link to="/formation/anglais" className="hover:text-black transition-colors">
                            Formation <span className="text-fuchsia-600">Anglais</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <span className="font-medium">Culture and Culture Wars</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold">Culture and Culture Wars</h1>
                        <p className="text-sm text-black/70 mt-1">Cultural debates, identity politics, and societal shifts</p>
                    </div>

                    <Card className="mb-8 border border-fuchsia-200">
                        <CardHeader className="py-3">
                            <CardTitle className="text-xl text-black">Chapter Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                This chapter delves into the "Culture Wars" defining contemporary public discourse.
                                Topics include debates over history and education (e.g., CRT), cancel culture, freedom of speech, and the clash between traditional and progressive values.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-fuchsia-600">Cancel Culture</Badge>
                                <Badge className="bg-fuchsia-600">Wokeism</Badge>
                                <Badge className="bg-fuchsia-600">Free Speech</Badge>
                                <Badge className="bg-fuchsia-600">Historical Revisionism</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-between items-center mt-8">
                        <Link to="/formation/anglais/civilisation">
                            <Button variant="outline" className="flex items-center gap-2 border-fuchsia-500 text-black hover:bg-fuchsia-50">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Civilization Overview
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureWarsPage;
