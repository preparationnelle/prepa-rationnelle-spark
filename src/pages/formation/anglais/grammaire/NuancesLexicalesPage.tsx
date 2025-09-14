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

const pairs: Array<[string, string, string]> = [
  ['affect vs effect', 'affect (verbe): influencer; effect (nom): effet', 'The news affected him; the effect was obvious.'],
  ['advice vs advise', 'advice (nom): conseil; advise (verbe): conseiller', 'She gave me good advice; I advise you to rest.'],
  ['compliment vs complement', 'compliment: éloge; complement: compléter/aller avec', 'He paid her a compliment; Wine complements cheese.'],
  ['practice vs practise (BrE)', 'practice (nom); practise (verbe) | AmE: practice pour les deux', 'He needs more practice; She practises every day.'],
  ['historic vs historical', 'historic: marquant; historical: relatif à l’histoire', 'a historic event; historical documents'],
  ['economic vs economical', 'economic: lié à l’économie; economical: économe', 'economic growth; an economical car'],
  ['sensible vs sensitive', 'sensible: raisonnable; sensitive: sensible/fragile', 'a sensible choice; sensitive skin'],
  ['principal vs principle', 'principal: principal/proviseur; principle: principe', 'the principal reason; moral principles'],
  ['stationary vs stationery', 'stationary: immobile; stationery: papeterie', 'a stationary car; buy stationery'],
  ['fewer vs less', 'fewer: plurielles comptables; less: non comptables', 'fewer people; less time']
];

const NuancesLexicalesPage = () => {
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
            <span className="text-gray-900 font-bold">Nuances Lexicales</span>
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
            Fiche : Nuances Lexicales (Mots Fréquemment Confondus)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguez les paires piégeuses pour éviter les contresens dans les copies et améliorer la précision.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Tous niveaux</Badge>
            <Badge variant="outline">45-90 min</Badge>
            <Badge className="bg-orange-600">Haute précision</Badge>
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
            <p>Apprenez les <span className="font-semibold">définitions</span>, <span className="font-semibold">contextes</span> et <span className="font-semibold">exemples</span> pour chaque paire, puis entraînez-vous à les utiliser.</p>
          </CardContent>
        </Card>

        {/* 1. Tableau des paires */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              1. Paires courantes à ne pas confondre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Paire</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Nuance</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  {pairs.map(([pair, nuance, ex]) => (
                    <tr key={pair}>
                      <td className="border px-3 py-2 text-orange-700 font-medium">{pair}</td>
                      <td className="border px-3 py-2">{nuance}</td>
                      <td className="border px-3 py-2">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. Conseils */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Conseils & Stratégies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Créer des <span className="text-orange-700 font-semibold">mnémotechniques</span> (ex: effect → résultat « E »).</li>
              <li>Repérer les <span className="text-orange-700 font-semibold">contextes typiques</span> (historic event vs historical figure).</li>
              <li>Vérifier le <span className="text-orange-700 font-semibold">type de mot</span> (nom vs verbe).</li>
            </ul>
          </CardContent>
        </Card>

        {/* Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Erreurs Courantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Employer « less » avec pluriel comptable (préférer <span className="text-orange-700 font-semibold">fewer</span>).</li>
              <li>Confondre advice/advise (nom vs verbe).</li>
              <li>Utiliser « so » au lieu de « such » devant un nom.</li>
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
            <p className="text-lg text-orange-700 mb-6">Choisissez la bonne forme selon le contexte.</p>
            <Link to="/formation/anglais/grammaire/nuances-lexicales/exercices">
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

export default NuancesLexicalesPage;


