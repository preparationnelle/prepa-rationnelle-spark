import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Heart, Users, ArrowLeft } from 'lucide-react';

const GenderEqualityPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="sticky top-0 z-50 bg-white border-b border-pink-200">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-black/70">
                        <Link to="/" className="flex items-center gap-1 hover:text-black transition-colors">
                            <Home className="h-3 w-3 text-pink-600" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <Link to="/formation/anglais" className="hover:text-black transition-colors">
                            Formation <span className="text-pink-600">Anglais</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <span className="font-medium">Gender Equality and Social Movements</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold">Gender Equality and Social Movements</h1>
                        <p className="text-sm text-black/70 mt-1">Women's rights, LGBTQ+ issues, and contemporary social movements</p>
                    </div>

                    <Card className="mb-8 border border-pink-200">
                        <CardHeader className="py-3">
                            <CardTitle className="text-xl text-black">Chapter Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                This chapter explores the evolution of gender equality and social movements in the English-speaking world.
                                From the suffragette movement to #MeToo and modern LGBTQ+ rights, we analyze the shifting landscape of civil rights and identity politics.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-pink-600">Feminism</Badge>
                                <Badge className="bg-pink-600">LGBTQ+ Rights</Badge>
                                <Badge className="bg-pink-600">Intersectionality</Badge>
                                <Badge className="bg-pink-600">Social Justice</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-between items-center mt-8">
                        <Link to="/formation/anglais/civilisation">
                            <Button variant="outline" className="flex items-center gap-2 border-pink-500 text-black hover:bg-pink-50">
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

export default GenderEqualityPage;
