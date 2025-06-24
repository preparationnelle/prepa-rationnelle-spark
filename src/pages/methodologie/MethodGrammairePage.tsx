
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages, BookOpen, FileText, Layout, Settings, Link as LinkIcon } from "lucide-react";

const grammarSections = [
  { 
    id: "regles-recurrentes", 
    label: "Règles récurrentes", 
    link: "/methodologie/grammaire/regles-recurrentes",
    description: "Points grammaticaux essentiels qui reviennent souvent aux concours"
  },
  { 
    id: "conjugaison-allemande", 
    label: "Conjugaison Allemande", 
    link: "/methodologie/grammaire/conjugaison-allemande",
    description: "Fiche complète de conjugaison allemande avec tableaux de référence"
  },
  { 
    id: "structure-phrase-allemande", 
    label: "Structure de la Phrase Allemande", 
    link: "/methodologie/grammaire/structure-phrase-allemande",
    description: "Guide complet sur l'ordre des mots et la syntaxe allemande"
  },
  { 
    id: "declinaisons-adjectif", 
    label: "Déclinaisons de l'Adjectif", 
    link: "/methodologie/grammaire/declinaisons-adjectif",
    description: "Les trois types de déclinaison de l'adjectif allemand avec tableaux et exemples"
  },
  { 
    id: "passif-allemand", 
    label: "Le Passif en Allemand", 
    link: "/methodologie/grammaire/passif-allemand",
    description: "Passif d'action, d'état et modal avec exercices corrigés"
  },
  { 
    id: "relatives-allemand", 
    label: "La Proposition Relative en Allemand", 
    link: "/methodologie/grammaire/relatives-allemand",
    description: "Maîtrisez les pronoms relatifs, la traduction de 'dont' et les relatives participiales"
  }
];

export default function MethodGrammairePage() {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <Languages className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Fiches de Grammaire
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Maîtrisez les points grammaticaux essentiels pour réussir vos épreuves de langues
        </p>
      </div>

      <nav className="mb-10 flex flex-wrap justify-center gap-4">
        {grammarSections.map(section => (
          <Link
            key={section.id}
            to={section.link}
            className="border-2 border-[#ff9100] text-[#ff9100] bg-white font-semibold px-5 py-2 rounded-lg transition hover:bg-[#ff9100] hover:text-white hover:shadow-md"
          >
            {section.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-6">
        {grammarSections.map((section, index) => (
          <Card key={section.id} className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  {index === 0 ? <FileText className="h-6 w-6 text-orange-600" /> : 
                   index === 1 ? <BookOpen className="h-6 w-6 text-orange-600" /> : 
                   index === 2 ? <Layout className="h-6 w-6 text-orange-600" /> :
                   index === 3 ? <Settings className="h-6 w-6 text-orange-600" /> :
                   index === 4 ? <FileText className="h-6 w-6 text-orange-600" /> :
                   <LinkIcon className="h-6 w-6 text-orange-600" />}
                </div>
                <CardTitle className="text-orange-800">{section.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">{section.description}</p>
              <Link to={section.link}>
                <Button className="bg-gradient-to-r from-[#ff9100] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Consulter la fiche
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/methodologie">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour à la méthodologie
          </Button>
        </Link>
      </div>
    </div>
  );
}
