import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const OuvertureEconomiesPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formations" className="hover:text-carnet-red transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-carnet-red transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">L'ouverture des économies depuis le XIXe siècle</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
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
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <Globe className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'ouverture des économies depuis le XIXe siècle
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 3.1 - Module 3</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Analyser l'évolution historique de l'ouverture économique et ses acteurs depuis le XIXe siècle
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les phases de l'ouverture économique */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Les phases de l'ouverture économique
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">XIXe siècle : Première mondialisation</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Libre-échange britannique, suppression des barrières douanières, développement des transports (bateaux à vapeur, chemins de fer)</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Entre-deux-guerres : Retour au protectionnisme</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Crise de 1929, montée des nationalismes économiques, guerres commerciales</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Après-guerre : Construction d'un système multilatéral</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Accords du GATT (1947), création de l'OMC (1995), régionalisation (UE, ALENA, ASEAN)</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Fin XXe-début XXIe siècle : Globalisation contemporaine</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Explosion des échanges, multinationales, financiarisation, nouvelles technologies</p>
                </div>
              </div>
            </div>

            {/* Section 2: Les acteurs de l'ouverture économique */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les acteurs de l'ouverture économique
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Acteurs étatiques :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Gouvernements nationaux (politiques commerciales)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Organisations internationales (OMC, FMI, Banque mondiale)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Unions régionales (UE, Mercosur)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Acteurs privés :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Entreprises multinationales (FDI, délocalisations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Banques et institutions financières</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Organisations non-gouvernementales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les formes d'ouverture économique */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Les formes d'ouverture économique
              </h2>

              <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Commerce international</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Échanges de biens et services entre pays : réduction des droits de douane, suppression des quotas,
                  accords de libre-échange bilatéraux et multilatéraux
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Investissements directs étrangers (IDE)</h4>
                  <p className="text-xs text-carnet-ink-soft">Création d'entreprises à l'étranger, acquisitions, fusions</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Investissements de portefeuille</h4>
                  <p className="text-xs text-carnet-ink-soft">Achats d'actions et obligations étrangères</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Migrations internationales</h4>
                  <p className="text-xs text-carnet-ink-soft">Déplacements de travailleurs et compétences</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Transferts de technologie</h4>
                  <p className="text-xs text-carnet-ink-soft">Diffusion des innovations et savoir-faire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
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
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
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
