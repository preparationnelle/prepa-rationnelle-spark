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

const RelativesPage = () => {
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
            <span className="text-gray-900 font-bold">Subordonnées Relatives</span>
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
            Fiche de Grammaire : Subordonnées Relatives en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les subordonnées relatives enrichissent vos écrits en ajoutant des informations sur un nom (antécédent) sans démarrer une nouvelle phrase.
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
          <CardContent className="text-orange-700">
            <p>Les relatives (relative clauses) permettent d'éviter les répétitions en ajoutant des précisions à propos d'un antécédent.</p>
          </CardContent>
        </Card>

        {/* 1. Pronoms relatifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              1. Pronoms Relatifs Principaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Pronom</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Antécédent</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Usage principal</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Restrictive vs Non-restrictive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">who</td><td className="border px-3 py-2">personnes</td><td className="border px-3 py-2">sujet/objet</td><td className="border px-3 py-2">Both</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">whom</td><td className="border px-3 py-2">personnes</td><td className="border px-3 py-2">objet (formel)</td><td className="border px-3 py-2">Souvent non-restrictif</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">which</td><td className="border px-3 py-2">choses/animaux</td><td className="border px-3 py-2">sujet/objet</td><td className="border px-3 py-2">Both</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">that</td><td className="border px-3 py-2">personnes/choses</td><td className="border px-3 py-2">relatif général</td><td className="border px-3 py-2">Restrictive only</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">whose</td><td className="border px-3 py-2">personnes/choses</td><td className="border px-3 py-2">possession</td><td className="border px-3 py-2">Both</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">where</td><td className="border px-3 py-2">lieux</td><td className="border px-3 py-2">lieu</td><td className="border px-3 py-2">Both</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">when</td><td className="border px-3 py-2">moments/dates</td><td className="border px-3 py-2">temps</td><td className="border px-3 py-2">Both</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. Restrictives vs non-restrictives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Clauses Restrictives vs Non-Restrictives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Restrictive (sans virgules)</h3>
              <p>Identifient précisément l’antécédent. Pronoms possibles : <span className="text-orange-700 font-semibold">that</span>, <span className="text-orange-700 font-semibold">who</span>, <span className="text-orange-700 font-semibold">which</span>.</p>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 mt-2">
                <p>Ex : The book <span className="text-orange-700 font-semibold">that</span> I borrowed was fascinating.</p>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Non-Restrictive (avec virgules)</h3>
              <p>Apportent une information supplémentaire. Pronoms possibles : <span className="text-orange-700 font-semibold">who</span>, <span className="text-orange-700 font-semibold">which</span>, <span className="text-orange-700 font-semibold">whose</span>, <span className="text-orange-700 font-semibold">where</span>, <span className="text-orange-700 font-semibold">when</span> (pas <span className="text-orange-700 font-semibold">that</span>).</p>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 mt-2">
                <p>Ex : My car, <span className="text-orange-700 font-semibold">which</span> is red, is parked outside.</p>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 3. Exemples détaillés */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Exemples détaillés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Who / Whom</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The woman <span className="text-orange-700 font-semibold">who</span> lives next door is a doctor. (sujet)</li>
                <li>The man <span className="text-orange-700 font-semibold">whom</span> I met yesterday is an artist. (objet, formel)</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Which</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The cake <span className="text-orange-700 font-semibold">which</span> she baked was delicious.</li>
                <li>My laptop, <span className="text-orange-700 font-semibold">which</span> I bought last year, is already broken.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">That</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The student <span className="text-orange-700 font-semibold">that</span> got the highest score will receive a prize.</li>
                <li>The house <span className="text-orange-700 font-semibold">that</span> Jack built is now a museum.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Whose</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The girl <span className="text-orange-700 font-semibold">whose</span> mother is a teacher won the prize.</li>
                <li>I met a man <span className="text-orange-700 font-semibold">whose</span> car broke down on the highway.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Where</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>This is the restaurant <span className="text-orange-700 font-semibold">where</span> we first met.</li>
                <li>The village <span className="text-orange-700 font-semibold">where</span> I grew up has changed a lot.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">When</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>I remember the day <span className="text-orange-700 font-semibold">when</span> we first met.</li>
                <li>Do you know a time <span className="text-orange-700 font-semibold">when</span> phones were not common?</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Pièges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Pièges à éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pas de <span className="text-orange-700 font-semibold">that</span> dans les non-restrictives.</li>
              <li><span className="text-orange-700 font-semibold">who</span> pour les personnes, <span className="text-orange-700 font-semibold">which</span> pour les choses.</li>
              <li>Omission possible de <span className="text-orange-700 font-semibold">who/that</span> quand ils sont objets (The book (that) I read...).</li>
              <li>Ne pas confondre <span className="text-orange-700 font-semibold">where/when</span> avec <span className="text-orange-700 font-semibold">which</span>.</li>
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
            <Link to="/formation/anglais/grammaire/relatives/exercices">
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

export default RelativesPage;


