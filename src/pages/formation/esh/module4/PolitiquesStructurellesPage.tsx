import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

const PolitiquesStructurellesPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Politiques structurelles</span>
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
                Retour au Module 4
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <Shield className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  Politiques structurelles et interventions de l'État
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 4.4 - Module 4</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Analyser les interventions publiques face aux défaillances du marché
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les défaillances de marché */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Les défaillances de marché et leur justification
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Définition des défaillances de marché</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Situations où le mécanisme de marché ne conduit pas à une allocation optimale des ressources, justifiant l'intervention publique.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-carnet-red/40 pl-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Défaillances de concurrence</h3>
                    <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Monopoles et oligopoles naturels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Concurrence imparfaite et pouvoir de marché</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Externalités de réseau</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-carnet-red/40 pl-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Défaillances d'information</h3>
                    <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Asymétrie d'information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Risque moral et sélection adverse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Biens d'expérience et de confiance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Biens publics et externalités</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Biens publics : non-rivalité et non-exclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Externalités positives (éducation, santé) et négatives (pollution)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Équité et redistribution sociale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Les politiques structurelles */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les politiques structurelles de régulation
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Politiques de la concurrence</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Autorités de concurrence (DGCCRF, Autorité de la concurrence)</li>
                      <li>• Lutte contre les abus de position dominante</li>
                      <li>• Contrôle des concentrations et fusions</li>
                      <li>• Protection des consommateurs</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Politiques sectorielles</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Régulation des secteurs de réseau (énergie, transports)</li>
                      <li>• Autorités de régulation indépendantes (ARCEP, CRE)</li>
                      <li>• Séparation des activités de production et réseau</li>
                      <li>• Tarification et accès aux infrastructures</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Politiques de l'environnement</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Taxes et permis d'émission (marché du carbone)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Subventions aux énergies renouvelables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Réglementation et normes environnementales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Responsabilité environnementale des entreprises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Interventions face aux défaillances sociales */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Interventions publiques face aux défaillances sociales
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Politiques de l'éducation</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Service public d'éducation gratuit</li>
                      <li>• Externalités positives de l'éducation</li>
                      <li>• Réduction des inégalités d'opportunités</li>
                      <li>• Investissement dans le capital humain</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Politiques de santé</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Assurance maladie universelle</li>
                      <li>• Biens de santé comme biens publics</li>
                      <li>• Régulation des prix des médicaments</li>
                      <li>• Prévention et santé publique</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Politiques sociales et redistribution</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Protection sociale : assurance chômage, retraite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politiques familiales et aides sociales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Impôt progressif et redistribution des revenus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Lutte contre la pauvreté et l'exclusion sociale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Limites et critiques des interventions publiques */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">4</span>
                </div>
                Limites et critiques des interventions publiques
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Risques de dérives étatiques</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Les interventions publiques peuvent créer des inefficacités et des effets pervers qui aggravent les problèmes initiaux.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Critiques libertariennes</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Atteinte aux libertés individuelles</li>
                      <li>• Baisse de l'efficacité économique</li>
                      <li>• Effets d'éviction du secteur privé</li>
                      <li>• Risque de corruption et de rente</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Critiques keynésiennes</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Interventions insuffisantes</li>
                      <li>• Rigidités administratives</li>
                      <li>• Coûts de transaction élevés</li>
                      <li>• Problèmes d'incitation</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Le débat Etat-Marché</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Approches mixtes : régulation sans propriété publique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Partenariats public-privé (PPP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Nouvelles formes de régulation (autorégulation, codes de conduite)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Évaluation des politiques publiques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module4/fluctuations-economiques">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module4/contraintes-politiques">
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

export default PolitiquesStructurellesPage;
