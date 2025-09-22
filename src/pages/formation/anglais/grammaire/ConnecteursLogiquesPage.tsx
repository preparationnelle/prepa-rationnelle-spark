import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  Table,
  HelpCircle,
  Target,
  Calendar
} from 'lucide-react';

const ConnecteursLogiquesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-900 transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Connecteurs Logiques</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Fiche de Grammaire : Connecteurs Logiques
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez les connecteurs pour structurer idées et arguments : addition, opposition, cause/conséquence, concession, illustration, conclusion.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <HelpCircle className="h-6 w-6" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-3">
            <p>Les connecteurs logiques améliorent la cohérence du discours et aident le lecteur à suivre le raisonnement.</p>
          </CardContent>
        </Card>

        {/* 1. Tableaux par fonction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              1. Connecteurs par fonction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Fonction</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Connecteurs</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Addition</td><td className="border px-3 py-2">moreover, furthermore, in addition, also</td><td className="border px-3 py-2">Moreover, the results are clear.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Opposition</td><td className="border px-3 py-2">however, nevertheless, yet, whereas, while</td><td className="border px-3 py-2">However, the trend is uncertain.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Cause</td><td className="border px-3 py-2">because, since, as, due to, owing to</td><td className="border px-3 py-2">Due to the delay, we canceled.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Conséquence</td><td className="border px-3 py-2">therefore, thus, hence, as a result</td><td className="border px-3 py-2">Therefore, we must adapt.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Concession</td><td className="border px-3 py-2">although, though, even though, despite, in spite of</td><td className="border px-3 py-2">Although it was late, we stayed.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Illustration</td><td className="border px-3 py-2">for instance, for example, namely</td><td className="border px-3 py-2">For instance, consider AI risks.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">But</td><td className="border px-3 py-2">to, in order to, so as to; so that</td><td className="border px-3 py-2">We trained so that we could win.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Comparaison</td><td className="border px-3 py-2">similarly, likewise, whereas</td><td className="border px-3 py-2">Similarly, sales increased.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Conclusion</td><td className="border px-3 py-2">to conclude, in conclusion, ultimately</td><td className="border px-3 py-2">In conclusion, the plan works.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. Ponctuation et registre */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Ponctuation & Registre</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adverbes conjonctifs (however, therefore...) entre deux phrases : point/point-virgule + virgule.</li>
              <li>Because vs since/as : because = cause forte; since/as = contexte.</li>
              <li>Formel: moreover, furthermore, thus. Familier/neutre: also, so.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accumuler trop de connecteurs (lourdeur). Préférer la clarté.</li>
              <li>Confondre despite/in spite of (suivis d’un nom/ing) et although (suivi d’une proposition).</li>
              <li>Employer however comme conjonction de subordination (éviter « however + sujet + verbe » sans ponctuation adéquate).</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA exercices */}
        <Card className="mt-2 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Prêt à mettre en pratique ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-orange-700 mb-6">Après avoir étudié la fiche, lancez-vous dans les exercices pour consolider vos acquis.</p>
            <Link to="/formation/anglais/grammaire/connecteurs/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Étudier ce chapitre
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Bouton retour en bas */}
        <div className="flex justify-center mt-12">
          <Link to="/formation/anglais/grammaire">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à la grammaire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnecteursLogiquesPage;


