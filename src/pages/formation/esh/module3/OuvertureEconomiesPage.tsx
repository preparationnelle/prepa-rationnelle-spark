import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const OuvertureEconomiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-foreground transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">L'ouverture des économies depuis le XIXe siècle</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Globe className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  L'ouverture des économies depuis le XIXe siècle
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 3.1 - Module 3</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Analyser l'évolution historique de l'ouverture économique et ses acteurs depuis le XIXe siècle
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les phases de l'ouverture économique */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Les phases de l'ouverture économique
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">XIXe siècle : Première mondialisation</h3>
                  <p className="text-sm text-gray-600">Libre-échange britannique, suppression des barrières douanières, développement des transports (bateaux à vapeur, chemins de fer)</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Entre-deux-guerres : Retour au protectionnisme</h3>
                  <p className="text-sm text-gray-600">Crise de 1929, montée des nationalismes économiques, guerres commerciales</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Après-guerre : Construction d'un système multilatéral</h3>
                  <p className="text-sm text-gray-600">Accords du GATT (1947), création de l'OMC (1995), régionalisation (UE, ALENA, ASEAN)</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Fin XXe-début XXIe siècle : Globalisation contemporaine</h3>
                  <p className="text-sm text-gray-600">Explosion des échanges, multinationales, financiarisation, nouvelles technologies</p>
                </div>
              </div>
            </div>

            {/* Section 2: Les acteurs de l'ouverture économique */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Les acteurs de l'ouverture économique
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Acteurs étatiques :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Gouvernements nationaux (politiques commerciales)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Organisations internationales (OMC, FMI, Banque mondiale)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Unions régionales (UE, Mercosur)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Acteurs privés :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Entreprises multinationales (FDI, délocalisations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Banques et institutions financières</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Organisations non-gouvernementales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les formes d'ouverture économique */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Les formes d'ouverture économique
              </h2>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Commerce international</h3>
                <p className="text-sm text-gray-600">
                  Échanges de biens et services entre pays : réduction des droits de douane, suppression des quotas,
                  accords de libre-échange bilatéraux et multilatéraux
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Investissements directs étrangers (IDE)</h4>
                  <p className="text-xs text-gray-600">Création d'entreprises à l'étranger, acquisitions, fusions</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Investissements de portefeuille</h4>
                  <p className="text-xs text-gray-600">Achats d'actions et obligations étrangères</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Migrations internationales</h4>
                  <p className="text-xs text-gray-600">Déplacements de travailleurs et compétences</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Transferts de technologie</h4>
                  <p className="text-xs text-gray-600">Diffusion des innovations et savoir-faire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/analyse-echanges">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuvertureEconomiesPage;
