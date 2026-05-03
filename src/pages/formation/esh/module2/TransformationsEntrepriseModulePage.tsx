import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const TransformationsEntrepriseModulePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">Formation ESH ECG</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">Première année</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Module – Transformations de l'entreprise et de sa gouvernance</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la première année
              </Button>
            </Link>
          </div>

          {/* Hero */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Transformations de l’entreprise et de sa gouvernance depuis le XIXe siècle – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.7 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#preindus" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Pré‑industriel → 1ère industrialisation</a>
                <a href="#grandes" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Naissance de la grande entreprise</a>
                <a href="#apresguerre" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Après‑guerre → aujourd’hui</a>
                <a href="#theories" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) Théories de la firme</a>
                <a href="#gouvernance" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">5) Gouvernance</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1 */}
            <div id="preindus" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1) De l’âge pré‑industriel à la première industrialisation</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Tissu pré‑industriel et proto‑industrie</h3>
                  <p><strong>1 - Artisanat urbain et proto‑industrie.</strong> « Proto‑industrie » (Mendels, 1972) : division du travail smithienne à l’échelle nationale ; artisans urbains qualifiés et travaux ruraux. Cette phase fournit des entrepreneurs à l’industrie moderne.</p>
                  <p><strong>2 - Proto‑fabrique.</strong> Concentration des machines et de la main‑d’œuvre (ex : Schneider au Creusot, ~10 000 salariés fin XIXe) ; reste marginale mais annonce la grande usine.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Première industrialisation (1780–1880)</h3>
                  <p><strong>1 - Nouveau tissu industriel.</strong> Coexistence PME traditionnelles et grandes usines (factory system) ; concentrations horizontales/verticales hétérogènes (coton, sidérurgie). En France, « marche sur deux jambes » (dualisme technique).</p>
                  <p><strong>2 - Financement et management.</strong> Autofinancement et capitaux familiaux dominent ; banques/marchés prennent le relais au milieu du XIXe (Rothschild et le rail). L’ingénieur remplace l’autodidacte aux postes clés.</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div id="grandes" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2) Naissance de la grande entreprise moderne (milieu XIXe – années 1930)</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Seconde industrialisation</h3>
                  <p>Électricité et nouvelles industries. Grandes entreprises s’affirment 1880–1930 (US, Allemagne – automobile). Apparition de trusts (Krupp). Recherche/ingénieurs (Grandes Écoles). Taylor (1911) et « révolution managériale » (Berle & Means, 1932) : séparation propriété/direction – émergence des managers.</p>
                  <p><strong>Multinationales.</strong> 2e moitié XIXe : filiales à l’étranger ; Singer (1870) ; pays de petite taille (Nestlé). En 1913 : ~350 filiales (2/3 Europe, 1/3 US).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Spécificités françaises</h3>
                  <p>Grandes entreprises moins puissantes ; retard technique puis rattrapage (après 1900). Résilience des petites entreprises ; proto‑industrie rurale persistante ; artisanat mis en difficulté par les nouvelles exigences.</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div id="apresguerre" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">3) De l’après‑guerre à nos jours</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) FMN, moteur de la mondialisation</h3>
                  <p><strong>1 - Essor des FMN.</strong> 7 000 en 1970 → 83 000 en 2019 ; concentration : top 100 non financières = 0,1 % des FMN mais ~60 % de la VA mondiale.</p>
                  <p><strong>2 - IDE.</strong> Stock d’IDE/PIB mondial &gt; 32 % en 2014 ; depuis 1980, PED de plus en plus récepteurs (Chine). Stock d’IDE FR/DE : 10 % du PIB (1980) → 50 % (2010). Part des services dans IDE : 60 % (vs 30 % industrie).</p>
                  <p><strong>3 - Firme réseau et DIPP.</strong> IDE horizontaux (Toyota) → verticaux ; fragmentation des chaînes de valeur (Nike) – « designed in California, assembled in Shenzhen ». OCDE : 70 % des échanges liés aux chaînes globales.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Structure européenne : prédominance des PME</h3>
                  <p>PME = 58,6 % de la VA de l’UE ; désindustrialisation ; poids des services ; France = 2e exportateur mondial de services.</p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div id="theories" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">4) Évolutions des formes organisationnelles et théories de la firme</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Genèse</h3>
                  <p><strong>1 - « Boîte noire » néoclassique.</strong> G. Debreu (1959) : maximisation du profit et combinaison efficace des facteurs.</p>
                  <p><strong>2 - Entrepreneur schumpetérien.</strong> Say/Mill : 4e facteur ; Schumpeter (1911) : l’entrepreneur innove et porte la dynamique ; état transitoire remplacé par le patron routinier.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Paradigmes contractuel et transactionnel</h3>
                  <p><strong>1 - Coûts de transaction.</strong> Berle & Means (1932) : révolution managériale (séparation propriété/contrôle). Coase/Williamson (1985) : arbitrage marché/firme (faire ou faire‑faire ?), spécificité des actifs, opportunisme, coûts ex‑ante/ex‑post.</p>
                  <p><strong>2 - Nœud de contrats et agence.</strong> Alchian & Demsetz (1972) : équipe, passagers clandestins, rôle du « monitor ». Jensen & Meckling (1976) : théorie de l’agence – principal/agent, coûts d’agence, incitations (stock‑options).</p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div id="gouvernance" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">5) Transformations des modes de gouvernance</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Théories managériales</h3>
                  <p>Galbraith (1967) : technostructure dans les grandes firmes. Chandler (1977) : formes « U » (unitaire, centralisée) et « M » (multidivisionnelle, décentralisée).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Shareholders → Stakeholders</h3>
                  <p>Équilibre des pouvoirs et objectifs ; RSE et responsabilité vis‑à‑vis des parties prenantes (ex : Deepwater Horizon, 2010) – nécessité d’une gouvernance responsable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationsEntrepriseModulePage;


