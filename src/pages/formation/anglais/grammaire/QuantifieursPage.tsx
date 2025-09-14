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

const QuantifieursPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
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
            <span className="text-gray-900 font-bold">Quantifieurs</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/anglais/grammaire">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la grammaire
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Fiche de Grammaire : Quantifieurs en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Much, many, little, few, a lot of, plenty of, some, any… apprenez à choisir le bon quantifieur selon le type de nom, l’affirmation ou la négation, et le registre.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Débutant - Intermédiaire</Badge>
            <Badge variant="outline">1-2 heures</Badge>
            <Badge className="bg-orange-600">Module essentiel</Badge>
          </div>
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
            <p>Les quantifieurs expriment une quantité ou une proportion. Leur choix dépend du caractère <span className="font-semibold">comptable</span> ou <span className="font-semibold">non comptable</span> du nom, de l’affirmation/négation, et du registre (formel/familier).</p>
          </CardContent>
        </Card>

        {/* 1. Comptables vs non comptables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Noms comptables vs non comptables</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Comptables (pluriel)</span> : apples, books, ideas…</li>
              <li><span className="text-orange-700 font-semibold">Non comptables</span> : water, time, information, advice…</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. Tableau des principaux quantifieurs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              2. Principaux quantifieurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Quantifieur</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Type de nom</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Contexte</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">many</td><td className="border px-3 py-2">comptables (pl.)</td><td className="border px-3 py-2">général</td><td className="border px-3 py-2">Many students attended.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">much</td><td className="border px-3 py-2">non comptables</td><td className="border px-3 py-2">nég./interrog.; formel en affirmatif</td><td className="border px-3 py-2">I don’t have much time.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">a lot of / lots of</td><td className="border px-3 py-2">comptables & non comptables</td><td className="border px-3 py-2">affirmatif (familier)</td><td className="border px-3 py-2">We have a lot of work.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">plenty of</td><td className="border px-3 py-2">les deux</td><td className="border px-3 py-2">abondance suffisante</td><td className="border px-3 py-2">There is plenty of space.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">few / a few</td><td className="border px-3 py-2">comptables (pl.)</td><td className="border px-3 py-2">peu / quelques</td><td className="border px-3 py-2">Few people came. / A few people came.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">little / a little</td><td className="border px-3 py-2">non comptables</td><td className="border px-3 py-2">peu / un peu</td><td className="border px-3 py-2">Little time left. / A little time left.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">some / any</td><td className="border px-3 py-2">les deux</td><td className="border px-3 py-2">some: affirmatif/offre/demande; any: ? / nég.</td><td className="border px-3 py-2">Some tea? / Do you have any questions?</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 3. Quantifieurs avancés & degré */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Nuance et registre</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">a great deal of</span> (non comptable, formel), <span className="text-orange-700 font-semibold">a large number of</span> (comptable), <span className="text-orange-700 font-semibold">a large amount of</span> (non comptable).</li>
              <li>Registre soutenu: much/many en affirmatif; neutre/familier: a lot of/lots of.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confondre <span className="text-orange-700 font-semibold">much</span>/<span className="text-orange-700 font-semibold">many</span> (type de nom).</li>
              <li>Oublier l’usage de <span className="text-orange-700 font-semibold">any</span> en questions/négations.</li>
              <li>Employer few/little vs a few/a little (sens positif vs négatif).</li>
              <li>Compter des noms non comptables (informations, meubles → pieces of information, furniture).</li>
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
            <Link to="/formation/anglais/grammaire/quantifieurs/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Étudier ce chapitre
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuantifieursPage;


