import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MethodesParagraphesJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow" />

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Fiche méthode — Les paragraphes (Juger)</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Construire 30–50 paragraphes autonomes et puissants pour le thème « Juger ».
            </p>
          </div>

          {/* Objectif */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">Objectif</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                Produire <strong>30 à 50 paragraphes</strong>, chacun de <strong>200 à 250 mots</strong>, organisés en <strong>3 à 8 sous‑thèmes</strong>, afin de couvrir le champ sémantique et conceptuel du thème de culture générale.
              </p>
              <p>Chaque paragraphe doit :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Être <strong>autonome</strong> (on peut le lire seul).</li>
                <li>Apporter une <strong>réflexion claire</strong> (sans être une mini‑dissertation).</li>
                <li>Introduire une <strong>connaissance précise</strong> (philosophe, œuvre, fait historique, film, œuvre d’art…).</li>
              </ul>
            </CardContent>
          </Card>

          {/* Structure */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Structure d’un paragraphe (5 étapes fixes)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">1) Phrase d’annonce (argument)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Une seule phrase, claire, avec un <strong>verbe au conditionnel</strong>.</li>
                  <li>Exemple: « Il serait concevable que juger implique parfois de choisir entre deux légitimités contradictoires. »</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2) Développement brut (2–4 phrases)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Expliquer l’idée en langage simple.</li>
                  <li>Ne pas encore citer de référence.</li>
                  <li>Exemple: « L’acte de juger ne consiste pas seulement à appliquer une règle mais à décider de ce qui doit primer. Il arrive que deux normes s’opposent, rendant le jugement périlleux. »</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3) Introduction de la connaissance</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Une question ou une phrase claire qui ouvre vers une référence.</li>
                  <li>Exemple: « À la question : quelles normes président à notre jugement ?, la tragédie antique apporte une réponse radicale. »</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">4) Développement avec connaissance(s) (2–4 phrases)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Philosophe, œuvre littéraire, film, peinture, fait historique…</li>
                  <li>Toujours <strong>lier à l’argument</strong>.</li>
                  <li>Exemple: « Dans Antigone de Sophocle, l’héroïne choisit de suivre les lois divines plutôt que les lois de la cité. Elle incarne l’idée que le jugement véritable n’est pas seulement social mais aussi moral et métaphysique. »</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">5) Phrase de conclusion (reformulation)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Boucler en rappelant l’argument de départ.</li>
                  <li>Exemple: « Ainsi, juger consisterait à arbitrer entre plusieurs ordres de légitimité. »</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Exemple de paragraphe */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Exemple de paragraphe (Antigone)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                Il serait concevable que juger implique parfois de choisir entre deux légitimités contradictoires. Dans la tragédie Antigone de Sophocle, l’héroïne se trouve face à un dilemme : respecter les lois de la cité, édictées par Créon, ou obéir aux lois non écrites des dieux en offrant une sépulture à son frère Polynice. Son jugement intime la conduit à défier l’autorité politique, estimant que la loi divine prime sur la loi humaine. Elle assume ce choix jusqu’au bout, même lorsqu’elle est jugée et condamnée à mort. À la question : quelles normes président à notre jugement ?, la tragédie apporte une réponse radicale. Antigone affirme l’existence de règles supérieures aux conventions humaines, et incarne le courage de juger par soi-même malgré la menace du châtiment. Cette opposition illustre la tension fondamentale entre droit positif et droit naturel, qui demeure une énigme pour toute société confrontée à la hiérarchie des lois. Elle montre aussi que juger ne se réduit pas à appliquer une règle : c’est parfois inventer une hiérarchie, et prendre le risque de s’y tenir. Ainsi, Antigone révèle que juger revient souvent à décider où réside l’autorité ultime : dans la cité, dans les dieux, ou dans la conscience individuelle. Juger consisterait donc à arbitrer entre plusieurs ordres de légitimité.
              </p>
            </CardContent>
          </Card>

          {/* Règles */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Règles à respecter</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Longueur</strong>: 200 à 250 mots par paragraphe.</li>
                <li><strong>Références</strong>: 1 argumentative (philosophe, sociologue, psy…), éventuellement 1 illustrative (film, roman, tableau, événement). Jamais plus de 2 références.</li>
                <li><strong>Style</strong>: pas de tirets, pas de listes; uniquement du texte continu.</li>
                <li><strong>Diversifier</strong> les champs: philosophie, sociologie, anthropologie, psychologie, art, cinéma, histoire.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Organisation */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Organisation — exemples de sous‑thèmes (Juger)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>La logique de juger (processus, critères, subjectivité / objectivité)</li>
                <li>La justice et ses limites (droit, équité, erreurs judiciaires)</li>
                <li>Juger moralement (bien / mal, conscience, préjugés, tolérance)</li>
                <li>Le pouvoir de juger (politique, opinion publique, réseaux sociaux)</li>
                <li>Être jugé (stigmatisation, identité, honte, reconnaissance)</li>
                <li>Suspension et impossibilité de juger (scepticisme, apories, tragédies)</li>
              </ul>
              <div className="pt-4">
                <Link to="/formation/culture-generale/methodes">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des méthodes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MethodesParagraphesJugerPage;


