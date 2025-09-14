import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const ActeursFonctionsEconomieModulePage = () => {
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
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Module – Acteurs et fonctions de l'économie</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la première année
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">
                    Les acteurs et les grandes fonctions de l'économie – Module
                  </h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.1 • Détail du module</div>
                </div>
              </div>
              {/* Quick navigation */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#sec1" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Acteurs & fonctions</a>
                <a href="#sec2" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Comptes des secteurs</a>
                <a href="#sec3" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Agrégats & opérations</a>
                <a href="#sec4" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) TES</a>
              </div>
            </div>
          </div>

          {/* Contenu détaillé (sobre) */}
          <div className="space-y-8">
            {/* 1 */}
            <div id="sec1" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">1</span>
                Les acteurs et les grandes fonctions de l’économie
              </h2>
              <div className="bg-blue-50 border border-blue-100 text-blue-900 rounded-lg p-4 mb-4 text-sm">Comptabilité nationale : représentation synthétique et chiffrée de l’activité économique nationale dans un cadre comptable rigoureux.</div>
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">1/ Les fondements de l’économie et de la sociologie</h3>
                  <h4 className="font-medium text-gray-900">1 - Fonction ressources, secteurs institutionnels</h4>
                  <p>
                    Comptabilité nationale : représentation synthétique et chiffrée de l’activité économique nationale dans un cadre comptable rigoureux.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">A - Secteurs institutionnels</h5>
                    <p>
                      Elle classe les acteurs de la vie économique en cinq secteurs institutionnels (SNF, SF, APU, ISBLSM, RDM) qui sont, d’après l’INSEE,
                      « des ensembles considérés comme pertinents » car « ayant des comportements économiques similaires ».
                    </p>
                    <p>La comptabilité nationale distingue trois axes : production, répartition, dépense. Logique de circuit / équilibre.</p>
                    <p>A partir de ces flux la comptabilité nationale définit des agrégats (logique de synthèse).</p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">B - Ménages, SNF, APU</h5>
                    <p>
                      INSEE, définition des ménages : l’ensemble des individus occupant le même logement sans que ces individus aient nécessairement de liens de parenté.
                    </p>
                    <p>
                      La consommation effective des ménages représente, en 2019, 69 % du PIB (dont 63 % sont des services). Modification de la structure de la consommation :
                      Alimentation 27 % en 1960 / 12,8 % en 2019 – Logement 9,6 % en 1960 / 19,9 % en 2019, résultat de l’amélioration du niveau de vie depuis 50 ans.
                    </p>
                    <h6 className="font-medium text-gray-900">2 - Production marchande, fonction principale des SNF</h6>
                    <p>
                      Les sociétés non financières (SNF) regroupent l’ensemble des sociétés ayant le statut d’entreprise. INSEE, définition d’entreprise :
                      regroupement économique pertinent d’unités légales (entreprises individuelles et sociétés) appartenant à un même groupe et ayant une autonomie de décision.
                    </p>
                    <p>Y → production → vente. 50 % des entreprises ne sont pas des sociétés mais des entreprises individuelles classées avec les ménages.</p>
                    <p>Part des SNF dans la production totale en 2019 : 71 %.</p>
                    <p>
                      Pour l’INSEE : -10 salariés = microentreprises (96 %), -250 = PME, -5000 = ETI, +5000 et CA &gt; 1500 millions = grandes entreprises (287).
                    </p>
                    <h6 className="font-medium text-gray-900">3 - APU : production de services non marchands</h6>
                    <p>Poids des APU → dépenses publiques : 55,6 % du PIB en 2019.</p>
                    <p>
                      Rôle des APU : jusqu’à l’entre-deux-guerres, fonctions régaliennes (justice, armée, police). Crise de 1929 → développement de l’État providence sous l’influence des idées keynésiennes.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Allocation des ressources (remédier aux défaillances de marché)</li>
                      <li>Répartition / redistribution des revenus (réduire les inégalités)</li>
                      <li>Stabilisation de l’activité (lutter contre les déséquilibres macroéconomiques)</li>
                    </ul>
                    <h6 className="font-medium text-gray-900">C - Autres secteurs</h6>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>SF : banques, sociétés d’assurance</li>
                      <li>ISBLSM : syndicats, clubs de sport</li>
                      <li>
                        RDM : opérations entre résidents et non-résidents ; reflète le taux d’ouverture = (importations + exportations) / 2PIB. Taux d’ouverture : 14 % en 1950 et 23,6 % en 2024 en France.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div id="sec2" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">2</span>
                Les comptes des secteurs institutionnels
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - Équilibre comptable et logique de circuit</h3>
                  <p>
                    1 - Les comptes des secteurs sont présentés en équilibre. Le compte de chaque secteur institutionnel est présenté sous la forme emplois / ressources (deux fois chacune car l’emploi de l’un est la ressource de l’autre).
                  </p>
                  <p>2 - Logique de circuit : production → répartition primaire du revenu → prélèvements obligatoires → répartition secondaire → dépense en biens et services → production.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Les soldes des comptes</h3>
                  <p>
                    La valeur de la production ne permet pas de mesurer la contribution de chaque secteur à la richesse créée. Il est nécessaire de calculer la valeur ajoutée. En 2019, la valeur ajoutée des SNF représente 59 % de la valeur ajoutée totale.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - Ratios des secteurs institutionnels</h3>
                  <h4 className="font-medium text-gray-900">1 - Principaux ratios des SNF</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Taux de marge : indicateur de profit brut, partage de la VA. Rémunération des salariés 64 % en 2019 et 2,7 % pour les APU.</li>
                    <li>Taux d’investissement : signe de l’activité économique et des anticipations des SNF</li>
                    <li>Taux d’autofinancement : 95,3 % des SNF en France en 2023</li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-3">2 - Principaux ratios des ménages</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Taux d’épargne</li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-3">3 - Principaux ratios des APU</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Taux de PO : 30,6 % en 1960 et 43,2 % en 2023</li>
                    <li>Déficit public : 73 Md€ en 2019 et 173 Md€ en 2023</li>
                    <li>Dette publique : 112 % du PIB en 2023 (plus de 3000 Md€)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div id="sec3" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">3</span>
                Les agrégats et les opérations économiques de la nation
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - Les agrégats</h3>
                  <h4 className="font-medium text-gray-900">1 - PIB, agrégat central</h4>
                  <p>
                    INSEE, définition du PIB : « Le produit intérieur brut (PIB) est le principal agrégat mesurant l'activité économique. Il correspond à la somme des valeurs ajoutées brutes nouvellement créées par les unités productrices résidentes une année donnée, évaluées au prix du marché ».
                  </p>
                  <p>PIB = somme des valeurs ajoutées. En 2023, le PIB s’élève à 2 565,3 Md€.</p>
                  <p>Trois façons de le calculer : approche de la production, de la demande, des revenus.</p>
                  <h4 className="font-medium text-gray-900 mt-2">2 - Autres agrégats</h4>
                  <p>RNB : somme des revenus primaires reçus par les unités résidentes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Opérations sur biens et services et équilibre emplois-ressources</h3>
                  <p className="mb-1">1 - Les ressources en biens et services sont égales aux emplois.</p>
                  <div className="space-y-1">
                    <p className="text-[13px]">
                      Ressources : production intérieure (PIB) + importations. Emplois : consommation (ménages, APU), investissement (FBCF, variations de stocks), exportations, et consommations intermédiaires.
                    </p>
                    <p>En France en 2019, le total des emplois (égal aux ressources) était de 3 220,1 Md€.</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - Double répartition du revenu</h3>
                  <p>
                    1 - Répartition primaire : résulte de la participation des agents à la production. En 2019, la rémunération primaire des salariés représente 76 % du revenu total, 7 % revenus mixtes, 17 % du patrimoine (5 % en 1960) — « société de l’héritage ».
                  </p>
                  <p>
                    2 - Répartition secondaire : grâce aux impôts et cotisations sociales, les APU versent des prestations sociales. Deux logiques :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Logique d’assurance : protections financées par cotisations et CSG (redistribution horizontale)</li>
                    <li>Logique d’assistance : aide aux plus démunis, financée par l’impôt (redistribution verticale)</li>
                  </ul>
                  <p>
                    Revenu disponible brut des ménages = revenu primaire + prestations sociales – PO. Les prestations sociales représentent 35 % du RDB en 2019 (15 % en 1950). Selon l’INSEE, en 2019, le niveau de vie moyen des 20 % les plus aisés est 8,8 fois celui des 20 % les plus pauvres ; après redistribution, 4.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D - Capacité / besoin de financement</h3>
                  <p>
                    En économie fermée I = S. En économie ouverte, un pays peut avoir une capacité ou un besoin de financement ; le reste du monde (RDM) a symétriquement un besoin ou une capacité de financement. Capacité / besoin de financement d’une nation = solde extérieur = besoin / capacité de financement du RDM.
                  </p>
                  <p>
                    En 2019, la France est en besoin de financement de 19,4 Md€ (surtout à cause du déficit des APU) et s’est endettée de cette somme au RDM (correct car la France emprunte à taux bas).
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div id="sec4" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">4</span>
                Le tableau entrées-sorties (TES)
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Il permet de mieux comprendre la VA de chaque branche et son équilibre emplois-ressources et met en évidence l’interdépendance des agents économiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActeursFonctionsEconomieModulePage;
