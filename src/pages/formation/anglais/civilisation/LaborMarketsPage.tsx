import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Briefcase, TrendingUp, ArrowLeft } from 'lucide-react';

const LaborMarketsPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-black/70">
                        <Link to="/" className="flex items-center gap-1 hover:text-black transition-colors">
                            <Home className="h-3 w-3 text-slate-600" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <Link to="/formation/anglais" className="hover:text-black transition-colors">
                            Formation <span className="text-slate-600">Anglais</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
                        <span className="font-medium">Labor Markets and Future of Work</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold">Labor Markets and Future of Work</h1>
                        <p className="text-sm text-black/70 mt-1">Employment trends, gig economy, and workplace transformation</p>
                    </div>

                    <Card className="mb-8 border border-slate-200">
                        <CardHeader className="py-3">
                            <CardTitle className="text-xl text-black">Chapter Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                This chapter investigates the changing nature of work in the US and UK. We examine the rise of the gig economy,
                                the impact of automation and AI on jobs, and the evolving relationship between employers and employees, including the "Great Resignation" and remote work trends.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-slate-600">Gig Economy</Badge>
                                <Badge className="bg-slate-600">Remote Work</Badge>
                                <Badge className="bg-slate-600">Automation</Badge>
                                <Badge className="bg-slate-600">Labor Unions</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-between items-center mt-8">
                        <Link to="/formation/anglais/civilisation">
                            <Button variant="outline" className="flex items-center gap-2 border-slate-500 text-black hover:bg-slate-50">
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

export default LaborMarketsPage;
