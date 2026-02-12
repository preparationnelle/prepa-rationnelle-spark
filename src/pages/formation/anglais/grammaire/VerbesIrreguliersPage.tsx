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

const verbs: Array<[string, string, string, string]> = [
  ['be', 'was/were', 'been', 'être'],
  ['become', 'became', 'become', 'devenir'],
  ['begin', 'began', 'begun', 'commencer'],
  ['break', 'broke', 'broken', 'casser'],
  ['bring', 'brought', 'brought', 'apporter'],
  ['build', 'built', 'built', 'construire'],
  ['buy', 'bought', 'bought', 'acheter'],
  ['catch', 'caught', 'caught', 'attraper'],
  ['come', 'came', 'come', 'venir'],
  ['do', 'did', 'done', 'faire'],
  ['drink', 'drank', 'drunk', 'boire'],
  ['drive', 'drove', 'driven', 'conduire'],
  ['eat', 'ate', 'eaten', 'manger'],
  ['fall', 'fell', 'fallen', 'tomber'],
  ['feel', 'felt', 'felt', 'ressentir'],
  ['find', 'found', 'found', 'trouver'],
  ['get', 'got', 'got/gotten', 'obtenir'],
  ['give', 'gave', 'given', 'donner'],
  ['go', 'went', 'gone', 'aller'],
  ['have', 'had', 'had', 'avoir'],
  ['hear', 'heard', 'heard', 'entendre'],
  ['keep', 'kept', 'kept', 'garder'],
  ['know', 'knew', 'known', 'savoir/connaître'],
  ['leave', 'left', 'left', 'quitter'],
  ['let', 'let', 'let', 'laisser/permettre'],
  ['lose', 'lost', 'lost', 'perdre'],
  ['make', 'made', 'made', 'fabriquer/faire'],
  ['meet', 'met', 'met', 'rencontrer'],
  ['pay', 'paid', 'paid', 'payer'],
  ['put', 'put', 'put', 'mettre'],
  ['read', 'read', 'read', 'lire'],
  ['run', 'ran', 'run', 'courir'],
  ['say', 'said', 'said', 'dire'],
  ['see', 'saw', 'seen', 'voir'],
  ['sit', 'sat', 'sat', 's’asseoir'],
  ['speak', 'spoke', 'spoken', 'parler'],
  ['spend', 'spent', 'spent', 'dépenser/passer'],
  ['take', 'took', 'taken', 'prendre'],
  ['teach', 'taught', 'taught', 'enseigner'],
  ['tell', 'told', 'told', 'raconter/dire à'],
  ['think', 'thought', 'thought', 'penser'],
  ['understand', 'understood', 'understood', 'comprendre'],
  ['write', 'wrote', 'written', 'écrire']
];

const VerbesIrreguliersPage = () => {
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
            <span className="text-gray-900 font-bold">Verbes Irréguliers</span>
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
            Fiche : Verbes Irréguliers (Base, Prétérit, Participe Passé)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Liste essentielle des verbes irréguliers avec traduction pour révision rapide, et conseils de mémorisation par familles sonores.
          </p>
        </div>

        {/* Conseils de mémorisation */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <HelpCircle className="h-6 w-6" />
              Conseils de mémorisation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-2">
            <ul className="list-disc pl-6 space-y-1">
              <li>Regrouper par motifs sonores: drink/drank/drunk; sing/sang/sung.</li>
              <li>Identifier les formes identiques: cut/cut/cut; put/put/put.</li>
              <li>Réviser en colonnes: base → prétérit → participe → traduction.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tableau des verbes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              Liste des verbes irréguliers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Base</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Prétérit</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Participe Passé</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Traduction</th>
                  </tr>
                </thead>
                <tbody>
                  {verbs.map(([base, past, pp, fr]) => (
                    <tr key={base}>
                      <td className="border px-3 py-2 text-orange-700 font-medium">{base}</td>
                      <td className="border px-3 py-2">{past}</td>
                      <td className="border px-3 py-2">{pp}</td>
                      <td className="border px-3 py-2">{fr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Erreurs Courantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confondre prétérit et participe (❌ I have <span className="line-through">wrote</span> → ✅ I have <span className="text-orange-700 font-semibold">written</span>).</li>
              <li>Mélanger les modèles proches (begin/began/begun vs drink/drank/drunk).</li>
              <li>Oublier les formes doubles (learned/learnt; got/gotten en AmE).</li>
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
            <p className="text-lg text-orange-700 mb-6">Entraînez-vous avec des quiz de conversion base ↔ prétérit ↔ participe.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/formation/anglais/grammaire/verbes-irreguliers/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/verbes-irreguliers/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/verbes-irreguliers/flashcards">
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

export default VerbesIrreguliersPage;


