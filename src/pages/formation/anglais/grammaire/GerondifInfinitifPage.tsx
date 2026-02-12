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
}   Brain,
  Layers
} from 'lucide-react';

const GerondifInfinitifPage = () => {
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
            <span className="text-gray-900 font-bold">Gérondif & Infinitif</span>
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
            Fiche de Grammaire : Gérondif et Infinitif en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les gérondifs (verb + -ing) et infinitifs (to + verb) sont des formes verbales pouvant fonctionner comme noms, compléments ou pour marquer le but.
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
            <p>Leur usage dépend du verbe, de la structure et du sens recherché.</p>
          </CardContent>
        </Card>

        {/* 1. Formes de base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Formes de base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Gérondif</span> : base + -ing (e.g., <span className="italic">swimming</span>) → l’action comme concept.</li>
              <li><span className="text-orange-700 font-semibold">Infinitif</span> : to + base (e.g., <span className="italic">to swim</span>) → potentialité/intention.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. Suite de certains verbes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Suite de certains verbes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">2.1 Verbes suivis uniquement d’un gérondif</h3>
              <p>admit, avoid, enjoy, finish, keep (on), mention, mind, miss, postpone, practise, suggest.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>She enjoys <span className="text-orange-700 font-semibold">reading</span>.</li>
                <li>They postponed <span className="text-orange-700 font-semibold">taking</span> the test.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">2.2 Verbes suivis uniquement d’un infinitif</h3>
              <p>afford, agree, decide, expect, hope, learn, manage, offer, plan, promise, refuse, want.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>He decided <span className="text-orange-700 font-semibold">to leave</span>.</li>
                <li>She hopes <span className="text-orange-700 font-semibold">to win</span>.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">2.3 Verbes pouvant prendre gérondif ou infinitif</h3>
              <p><span className="text-orange-700 font-semibold">Sans changement de sens</span> : begin, continue, hate, like, love, prefer, start.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I began <span className="text-orange-700 font-semibold">to learn</span> / <span className="text-orange-700 font-semibold">learning</span> Spanish.</li>
              </ul>
              <p className="mt-2"><span className="text-orange-700 font-semibold">Avec changement de sens</span> : forget, remember, regret, go on, stop.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I stopped <span className="text-orange-700 font-semibold">smoking</span> vs I stopped <span className="text-orange-700 font-semibold">to smoke</span>.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Autres contextes d’usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Autres Contextes d’usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">3.1 Après prépositions → Gérondif</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>I’m good at <span className="text-orange-700 font-semibold">cooking</span>.</li>
                <li>Before <span className="text-orange-700 font-semibold">going</span> to bed, brush your teeth.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">3.2 Après adjectifs → Infinitif</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>It’s easy <span className="text-orange-700 font-semibold">to understand</span>.</li>
                <li>She’s happy <span className="text-orange-700 font-semibold">to help</span>.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">3.3 Pour exprimer le but → Infinitif</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>He works hard <span className="text-orange-700 font-semibold">to succeed</span>.</li>
                <li>I opened the window <span className="text-orange-700 font-semibold">to let</span> fresh air in.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">3.4 Après certains modaux → Infinitif sans "to"</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>She <span className="text-orange-700 font-semibold">can</span> swim.</li>
                <li>We <span className="text-orange-700 font-semibold">must</span> leave.</li>
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
                    <th className="border px-3 py-2 text-left text-orange-700">Contexte</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Gérondif (–ing)</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Infinitif (to + verb)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2">Verbe unique</td><td className="border px-3 py-2">enjoy <span className="whitespace-nowrap">reading</span></td><td className="border px-3 py-2">decide <span className="whitespace-nowrap">to go</span></td></tr>
                  <tr><td className="border px-3 py-2">Verbe double (sans sens divers)</td><td className="border px-3 py-2">begin <span className="whitespace-nowrap">reading</span></td><td className="border px-3 py-2">begin <span className="whitespace-nowrap">to read</span></td></tr>
                  <tr><td className="border px-3 py-2">Verbe double (sens différent)</td><td className="border px-3 py-2">stop <span className="whitespace-nowrap">smoking</span></td><td className="border px-3 py-2">stop <span className="whitespace-nowrap">to smoke</span></td></tr>
                  <tr><td className="border px-3 py-2">Après préposition</td><td className="border px-3 py-2">good at <span className="whitespace-nowrap">working</span></td><td className="border px-3 py-2"></td></tr>
                  <tr><td className="border px-3 py-2">Après adjectif</td><td className="border px-3 py-2"></td><td className="border px-3 py-2">easy <span className="whitespace-nowrap">to learn</span></td></tr>
                  <tr><td className="border px-3 py-2">But</td><td className="border px-3 py-2"></td><td className="border px-3 py-2">to improve skills</td></tr>
                  <tr><td className="border px-3 py-2">Après modal</td><td className="border px-3 py-2"></td><td className="border px-3 py-2">can do, must go</td></tr>
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
              <li>Omettre <span className="text-orange-700 font-semibold">to</span> après les verbes exigeant l’infinitif.</li>
              <li>Ajouter <span className="text-orange-700 font-semibold">to</span> après les verbes exigeant le gérondif.</li>
              <li>Confondre les sens pour <span className="text-orange-700 font-semibold">forget/remember/regret/stop/go on</span>.</li>
              <li>Usage incorrect après prépositions/adjectifs.</li>
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
            <p className="text-lg text-orange-700 mb-6">
              Après avoir étudié la fiche, lancez-vous dans les exercices pour consolider vos acquis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/formation/anglais/grammaire/gerondif-infinitif/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/gerondif-infinitif/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/gerondif-infinitif/flashcards">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Layers className="h-5 w-5 mr-2" />
                  Flashcards
                </Button>
              </Link>
            </div>
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

export default GerondifInfinitifPage;


