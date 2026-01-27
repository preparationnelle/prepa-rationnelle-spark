import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Zap, Users, ArrowLeft } from 'lucide-react';

const PolarizationPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="sticky top-0 z-50 bg-white border-b border-red-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-black/70">
            <Link to="/" className="flex items-center gap-1 hover:text-black transition-colors">
              <Home className="h-3 w-3 text-red-600" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
            <Link to="/formation/anglais" className="hover:text-black transition-colors">
              Formation <span className="text-red-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-black/40 mx-1" />
            <span className="font-medium">Polarization</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Polarization</h1>
            <p className="text-sm text-black/70 mt-1">Causes, consequences, and remedies for political and cultural divides</p>
          </div>

          <Card className="mb-8 border border-red-200">
            <CardHeader className="py-3">
              <CardTitle className="text-xl text-black">Chapter Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This chapter analyzes the deepening political and cultural polarization in Western democracies, particularly the US.
                We look at the role of media bubbles, gerrymandering, and identity politics in creating divided societies, and potential pathways to reconciliation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-600">Political Divide</Badge>
                <Badge className="bg-red-600">Echo Chambers</Badge>
                <Badge className="bg-red-600">Partisanship</Badge>
                <Badge className="bg-red-600">Social Cohesion</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            <Link to="/formation/anglais/civilisation">
              <Button variant="outline" className="flex items-center gap-2 border-red-500 text-black hover:bg-red-50">
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

export default PolarizationPage;
