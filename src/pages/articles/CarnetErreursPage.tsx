import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft, HelpCircle } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ Data for structured content and schema
const faqData = [
  {
    question: "Qu'est-ce qu'un carnet d'erreurs en prépa ECG ?",
    answer: "Un carnet d'erreurs est un outil méthodologique personnel où l'étudiant de prépa ECG consigne systématiquement ses erreurs après chaque DS ou colle, les analyse en profondeur, et note la solution correcte. C'est un laboratoire personnel pour transformer ses faux pas en automatismes."
  },
  {
    question: "Combien de points peut-on gagner avec un carnet d'erreurs ?",
    answer: "Les étudiants qui utilisent rigoureusement un carnet d'erreurs constatent généralement un gain de 2 à 3 points sur leurs notes après un mois d'utilisation régulière. Cette progression vient de l'éradication des erreurs répétitives."
  },
  {
    question: "Comment structurer efficacement son carnet d'erreurs ?",
    answer: "La structure optimale comprend 5 éléments : 1) Le problème original avec son contexte, 2) Votre erreur exacte recopiée, 3) La solution correcte détaillée, 4) L'analyse de la cause profonde (lacune, inattention, etc.), 5) Une astuce ou règle pour ne plus refaire cette erreur."
  },
  {
    question: "À quelle fréquence faut-il alimenter son carnet d'erreurs ?",
    answer: "Le carnet doit être alimenté après chaque correction de DS, colle ou exercice. L'idéal est de le compléter dans les 24h suivant la correction, quand l'erreur est encore fraîche dans votre mémoire. Une relecture stratégique avant chaque DS renforce l'apprentissage."
  },
  {
    question: "Le carnet d'erreurs fonctionne-t-il pour toutes les matières ?",
    answer: "Oui, le carnet d'erreurs est efficace pour toutes les matières de prépa ECG : maths (erreurs de calcul, oublis d'hypothèses), ESH (confusions de concepts), langues (fautes de grammaire récurrentes), et même pour les oraux (tics de langage, imprécisions)."
  }
];

// Schema.org structured data for Article + FAQPage
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Carnet d'erreurs : transformer vos erreurs en points en prépa ECG",
      "description": "Méthode complète pour structurer, alimenter et exploiter un carnet d'erreurs efficace en prépa ECG. Gagnez 2-3 points grâce à cette technique.",
      "author": {
        "@type": "Organization",
        "name": "Prépa Rationnelle",
        "url": "https://www.preparationnelle.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Prépa Rationnelle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.preparationnelle.com/lovable-uploads/872bbbcf-a0a0-467c-b349-6aaa9d464253.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2026-01-28",
      "mainEntityOfPage": "https://www.preparationnelle.com/articles/carnet-erreurs"
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const CarnetErreursPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <SEOHead
        title="Carnet d'erreurs en Prépa ECG : Méthode pour Gagner 2-3 Points"
        description="Méthode complète pour structurer un carnet d'erreurs en prépa ECG. Transformez vos erreurs en points au concours BCE. Gain moyen : 2-3 points après 1 mois."
        canonical="/articles/carnet-erreurs"
        ogType="article"
        schemaData={schemaData}
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-amber-700">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formations" className="hover:text-amber-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-amber-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formation/maths-methodologie" className="hover:text-amber-900 transition-colors">
              Méthodologie
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <span className="text-amber-800 font-bold">Carnet d'erreurs</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <Badge className="bg-amber-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Carnet d'erreurs : transformer vos erreurs en points
                </CardTitle>
                <p className="text-lg text-gray-600 mt-2">
                  Méthode et astuces pour structurer, alimenter et exploiter un carnet d'erreurs efficace.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* ANSWER-FIRST: Direct definition for AI extraction */}
              <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h2 className="text-xl font-bold text-amber-900 mt-0 mb-3">Qu'est-ce qu'un carnet d'erreurs ?</h2>
                <p className="text-gray-700 mb-0">
                  <strong>Un carnet d'erreurs est un outil méthodologique personnel</strong> où l'étudiant de prépa ECG
                  consigne systématiquement ses erreurs, les analyse en profondeur, et note la solution correcte.
                  Utilisé après chaque DS ou colle, il agit comme un laboratoire personnel : on y dissèque ses ratés,
                  on en tire une stratégie, puis on convertit la bévue en points au concours BCE.
                  <strong> Les étudiants constatent généralement un gain de 2-3 points après un mois d'utilisation.</strong>
                </p>
              </section>

              {/* Pourquoi c'est essentiel */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi le carnet d'erreurs est-il essentiel ?</h3>
                <p className="text-gray-700">
                  Ignorer les erreurs crée un cercle vicieux : confiance érodée, progression stagnante, frustration.
                  Sans analyse systématique, des heures de bachotage se perdent à répéter les mêmes fautes.
                  Posez-vous la question : combien de points avez-vous perdus pour des erreurs évitables ?
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
                  <li><strong>Erreurs de calcul récurrentes</strong> — Signe d'un manque de rigueur identifiable</li>
                  <li><strong>Oublis d'hypothèses</strong> — Lacune de cours à combler</li>
                  <li><strong>Mauvaise gestion du temps</strong> — Stratégie à ajuster</li>
                </ul>
              </section>

              {/* Méthode en 5 étapes */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Méthode en 5 étapes pour un carnet d'erreurs efficace</h3>
                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                  <li>
                    <strong>Notez le problème original</strong> — Transcrivez l'exercice/la question et le contexte (DS, colle, exercice maison).
                  </li>
                  <li>
                    <strong>Recopiez votre erreur exacte</strong> — Décrivez précisément le faux pas (raisonnement, calcul, hypothèse oubliée).
                  </li>
                  <li>
                    <strong>Inscrivez la solution correcte</strong> — Comparez avec votre version, soulignez les écarts déterminants.
                  </li>
                  <li>
                    <strong>Analysez la cause profonde</strong> — Lacune de cours, manque de rigueur, distraction ? Identifiez les patterns récurrents.
                  </li>
                  <li>
                    <strong>Formulez une règle ou astuce</strong> — Créez un aide-mémoire pour éviter de reproduire l'erreur.
                  </li>
                </ol>
              </section>

              {/* Pourquoi ça marche */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi cette méthode fonctionne</h3>
                <p className="text-gray-700">
                  La réflexion active transforme les lacunes en automatismes, prépare aux pièges des concours BCE et renforce la
                  confiance. Le cerveau retient mieux ce qu'il a analysé que ce qu'il a simplement lu.
                  Cette approche est soutenue par les recherches en sciences cognitives sur l'apprentissage par l'erreur.
                </p>
              </section>

              {/* FAQ Section - Critical for GEO */}
              <section className="mt-12">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-6 w-6 text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-800 m-0">Questions fréquentes sur le carnet d'erreurs</h3>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-amber-200">
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-amber-700">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Conclusion */}
              <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Conclusion</h3>
                <p className="text-amber-800">
                  Le carnet d'erreurs est l'un des outils les plus sous-estimés en prépa ECG. En normalisant les faux pas
                  et en éradiquant les répétitions, vous transformez chaque erreur en ressource.
                  Mettez-le en place dès aujourd'hui, maintenez-le avec rigueur, et observez vos notes progresser.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton retour */}
      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-4 w-4" />
            Retour à la méthodologie
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarnetErreursPage;
