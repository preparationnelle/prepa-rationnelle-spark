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

const InversionsEmphasePage = () => {
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
            <span className="text-gray-900 font-bold">Inversions & Emphase</span>
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
            Fiche de Grammaire : Inversions et Emphase
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Donnez du relief à votre expression: inversions négatives/résultatives, emphase stylistique (so/such... that), clivées (it-cleft, wh-cleft) et fronting.
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
            <p>Les inversions et structures emphatiques renforcent une idée, marquent la surprise, la restriction ou l’opposition, et relèvent le style à l’écrit comme à l’oral.</p>
          </CardContent>
        </Card>

        {/* 1. Inversions négatives / restrictives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Inversions après adverbes négatifs/restrictifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Adverbes fréquents</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Never / Rarely / Seldom</span> had I seen such chaos.</li>
                <li><span className="text-orange-700 font-semibold">Hardly / Scarcely / Barely</span> had he arrived when it started to rain.</li>
                <li><span className="text-orange-700 font-semibold">No sooner ... than</span> had we left than it began to snow.</li>
                <li><span className="text-orange-700 font-semibold">Little</span> did he know the truth.</li>
                <li><span className="text-orange-700 font-semibold">Only</span> after/when/if/by ... did he realize...</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Structure</h3>
              <p><span className="text-orange-700 font-semibold">Adverbe en tête</span> + auxiliaire + sujet + verbe.</p>
              <p className="text-sm text-gray-600">No sooner <span className="italic">had</span> we <span className="italic">left</span> than ...</p>
            </section>
          </CardContent>
        </Card>

        {/* 2. Inversion après here/there/so */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Autres inversions courantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Here/There</span> comes the bus. / There goes the sun.</li>
              <li><span className="text-orange-700 font-semibold">So</span> do I. / <span className="text-orange-700 font-semibold">Neither</span> did he.</li>
              <li><span className="text-orange-700 font-semibold">So + adj + be/do + sujet + that</span> : <span className="text-orange-700 font-semibold">So</span> beautiful <span className="text-orange-700 font-semibold">was</span> the view that we stayed.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Emphase: so/such, it-cleft, wh-cleft, fronting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Emphase et mise en relief</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">So / Such ... that</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">So + adj/adverbe + that</span> : It was <span className="text-orange-700 font-semibold">so</span> late that we left.</li>
                <li><span className="text-orange-700 font-semibold">Such + (a/an) + adj + nom + that</span> : It was <span className="text-orange-700 font-semibold">such</span> a mess that we gave up.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Cleft sentences (It-cleft / Wh-cleft)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">It is/was + focus + that/who ...</span> : It was <span className="text-orange-700 font-semibold">John</span> who called.</li>
                <li><span className="text-orange-700 font-semibold">What-clause + be + focus</span> : What I need is <span className="text-orange-700 font-semibold">time</span>.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Fronting (mise en tête)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Up the hill</span> came the soldiers.</li>
                <li><span className="text-orange-700 font-semibold">Into the room</span> walked the manager.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              4. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Structure</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Effet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Never / Hardly ...</td><td className="border px-3 py-2">Never have I seen...</td><td className="border px-3 py-2">Surprise/intensité</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">No sooner ... than</td><td className="border px-3 py-2">No sooner had we left than...</td><td className="border px-3 py-2">Immédiateté</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">So do I / Neither did he</td><td className="border px-3 py-2">So do I.</td><td className="border px-3 py-2">Écho/accord</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">So/Such ... that</td><td className="border px-3 py-2">Such a mess that...</td><td className="border px-3 py-2">Intensité + conséquence</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">It-cleft</td><td className="border px-3 py-2">It was John who...</td><td className="border px-3 py-2">Focalisation</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Wh-cleft</td><td className="border px-3 py-2">What I need is time.</td><td className="border px-3 py-2">Focalisation</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Fronting</td><td className="border px-3 py-2">Into the room walked...</td><td className="border px-3 py-2">Effet stylistique</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 5. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Oublier l’auxiliaire dans l’inversion (❌ Never I saw → ✅ Never <span className="text-orange-700 font-semibold">did</span> I see).</li>
              <li>Employer « so » pour les noms (préférer <span className="text-orange-700 font-semibold">such (a)</span>).</li>
              <li>Confondre it-cleft et wh-cleft.</li>
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
            <Link to="/formation/anglais/grammaire/inversions/exercices">
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

export default InversionsEmphasePage;


