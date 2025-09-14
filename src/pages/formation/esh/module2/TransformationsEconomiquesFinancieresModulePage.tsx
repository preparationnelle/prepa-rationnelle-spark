import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const TransformationsEconomiquesFinancieresModulePage = () => {
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
              <span className="text-foreground font-medium">Module – Transformations économiques et financières</span>
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
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Transformations des structures économiques et financières – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.4 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#mutations" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Mutations sectorielles</a>
                <a href="#financement" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Modes de financement</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1) Mutations sectorielles */}
            <div id="mutations" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1) L’essor du capitalisme et les mutations sectorielles</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Progrès agricoles et productivité</h3>
                  <p><strong>1 - Innovations.</strong> Enclosure Acts (GB) → clôture des terres ; capitalisme agraire. Progrès techniques : chimie (engrais, XIXe), tracteur (XXe).</p>
                  <p><strong>2 - Conséquences.</strong> Sécurité alimentaire, libération de main‑d’œuvre : ~70 % actifs dans l’agriculture vers 1700, ~10 % en 1900, &lt; 2 % aujourd’hui. Pour Rostow (1960), la révolution agricole conditionne l’industrialisation (synchronisation en France).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Industrialisation et formes d’organisation</h3>
                  <p><strong>1 - De la proto‑industrialisation aux géants.</strong> Proto‑industrialisation (Mendels, 1969) → besoins d’investissements lourds (textile/sidérurgie) ; taylorisme/fordisme (ex : Peugeot Sochaux). Liberté du commerce (décret d’Allarde, 1791). Sociétés de capitaux (1867) : responsabilité limitée.</p>
                  <p>Naissance de géants (Standard Oil, 1870) → Sherman Act (1890) contre les monopoles.</p>
                  <p><strong>2 - Vagues de révolutions industrielles.</strong> 1ère : machine à vapeur (Watt, 1769), « navette volante » (Kay, 1733). 2e : fer/sidérurgie, rail (1825), convertisseur Bessemer (1856). 3e : automobile, chimie, électricité (Edison, 1879). 4e : informatique/biotech/numérique (microprocesseur 1971).</p>
                  <p><strong>3 - Débats.</strong> Révolution ou transformation progressive ? Rostow (take‑off) vs Braudel (continuités). Désindustrialisation depuis 1970 (poids industrie &lt; 13 % vs &gt; 30 % en 1975) : délocalisations, chaînes globales (Cohen, 2006) ; « China Shock » (Autor, Dorn, Hanson, 2016) : −1 M d’emplois industriels US (1999–2011).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Tertiarisation</h3>
                  <p><strong>1 - Définition.</strong> INSEE : commerce, administrations, transports, finance/immobilier, services aux entreprises/particuliers, éducation, santé, action sociale. Frontières floues : « hyper‑industrie » (Veltz, 2017) et industrialisation des services.</p>
                  <p><strong>2 - Causes.</strong> Déversement (Sauvy, 1980) ; lois d’Engel ; services à la personne (féminisation, vieillissement).</p>
                  <p><strong>3 - Productivité.</strong> Mesure difficile ; Kaldor évoquait un « enlisement » britannique, à nuancer avec l’IT et les méthodes industrielles dans les services ; risques de déshumanisation (Cohen).</p>
                </div>
              </div>
            </div>

            {/* 2) Modes de financement */}
            <div id="financement" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2) Les évolutions des modes de financement</h2>
              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Intermédiation bancaire</h3>
                  <p><strong>1 - Rôle du système financier.</strong> Financer l’économie ; transformation des échéances et des risques.</p>
                  <p><strong>2 - XIXe siècle.</strong> Les banques émettent des billets puis participent aux sociétés industrielles (Rothschild, chemins de fer).</p>
                  <p><strong>3 - Organisations nationales.</strong> Modèle anglais (spécialisé, Joint Stock Banks) ; modèle allemand (banques universelles, ex : Deutsche Bank) ; en France : banques « à tout faire » (Crédit Lyonnais, 1863), puis spécialisation ; nationalisations (après 1945), privatisations (à partir de 1987).</p>
                  <p><strong>4 - Poids variable.</strong> Modeste au début (autofinancement) → central durant les 30G (« économie d’endettement », bancarisation massive : 20 % des ménages en 1967 vs 99 % aujourd’hui). Années 1980 : recul relatif (taux réels élevés, « effet de massue ») → désendettement et recours au marché ; réajustements après 2008.</p>
                  <p><strong>5 - Banques centrales.</strong> Du rôle de confiance (avant 1929) à l’activation conjoncturelle (taux directeurs) ; Fed (1913) : plein emploi et stabilité ; BCE : priorité à la stabilité des prix.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Financement direct / désintermédié</h3>
                  <p><strong>1 - Marchés.</strong> Financement des entreprises et des États dès le XIXe. Avantages/risques pour les rentiers : « emprunts russes » (1917), krach de 1929 → Glass‑Steagall Act (1933).</p>
                  <p><strong>2 - Réformes.</strong> Déréglementation pour intégrer nouveaux produits (dérivés) : MATIF (1986). Désintermédiation (favoriser le financement direct). Décloisonnement (intégration). Financial Services Modernization Act (1999) et réformes Debré‑Haberer (1966–69). Post‑subprimes : Bâle III (2010), règle Volcker (2012) – fonds propres renforcés, limites au trading pour compte propre.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationsEconomiquesFinancieresModulePage;


