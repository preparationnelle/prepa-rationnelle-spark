import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, ArrowLeft } from 'lucide-react';

export default function CroissanceEconomiqueModulePage() {
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
              <span className="text-foreground font-medium">Module – Croissance économique</span>
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
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">La croissance économique – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 2.1 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#caracteristiques" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Caractéristiques</a>
                <a href="#modeles" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Modèles</a>
                <a href="#sources" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Sources</a>
                <a href="#limites" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) Limites</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1) Caractéristiques */}
            <div id="caracteristiques" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1) Les caractéristiques de la croissance</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Révolutions industrielles et croissance</h3>
                  <p><strong>1 - Définition.</strong> François Perroux : « correspond à l’augmentation soutenue pendant une longue période d’un indicateur de dimension, pour une nation, le produit global net en termes réels ».</p>
                  <p>Depuis le XIXe, la croissance est plus rapide que la population → hausse du niveau de vie. Maddison (2001) : 1820–2008, production mondiale ×73, population ×6, productivité par tête ×11. Le taux de croissance du PIB mesure la croissance.</p>
                  <p><strong>2 - Première révolution industrielle.</strong> Avant 1820, croissance annuelle ~0,33 %. Avec la révolution industrielle, le PIB/hab décolle (innovations : machine à vapeur – Watt, 1769). Secteurs moteurs : textile, sidérurgie.</p>
                  <p><strong>3 - Révolutions successives.</strong> GB → Europe occidentale → US/Japon (Rostow, 1960). 2e RI vers 1880 : pétrole, chimie, automobile, électromécanique. Années 1970 : NTIC, 3e RI.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Croissance inégale dans le temps et l’espace</h3>
                  <p><strong>1 - Faits stylisés.</strong> Kaldor (1961) : 30G, PIB/hab et productivité croissent fortement ; après 1973, ralentissement (productivité travail ~4 % 1974–88 vs 8 % 1960–73). Romer (1989) : long cycle NTIC aux US jusqu’à l’éclatement de la bulle Internet ; mondialisation et rattrapage.</p>
                  <p>Rostow (1960) : 5 étapes (traditionnelle → consommation de masse).</p>
                  <p><strong>2 - Écarts entre pays.</strong> Règle de Lucas (1988) : doublement du PIB/hab tous les 70/x ans. Chine : ~9 % annuels 2001–2008 → doublement en ~8 ans. Easterly (1996) : « grande divergence » ; diffusion depuis le milieu du XXe, surtout en Asie ; inégalités persistantes (ex : Chine 2010, top 10 % = 41 % du revenu national).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Déséquilibres de la croissance</h3>
                  <p><strong>1 - Crises et ralentissements.</strong> Depuis le XIXe : crises variées. Japon/Europe de l’Ouest : rattrapage d’après‑guerre puis stagnation ; PIB/hab ~30 % inférieur aux US. Écart entre croissance effective et potentielle compromet la croissance future.</p>
                  <p><strong>2 - Transition PECO.</strong> Années 1990 : passage à l’économie de marché ; financement par crédit/IDE → inflation élevée (ex : Pologne 70 %/an), déficits courants, déséquilibres transitoires pour l’intégration mondiale.</p>
                </div>
              </div>
            </div>

            {/* 2) Modèles */}
            <div id="modeles" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">2) Les modèles d’Harrod‑Domar et de Solow</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Équilibre de long terme improbable (perspective keynésienne)</h3>
                  <p><strong>1 - Marché rarement à l’équilibre.</strong> Domar (1946) : l’investissement a un effet <em>revenu</em> (demande) et un effet <em>capacité</em> (offre).</p>
                  <p><strong>2 - « Fil du rasoir » (Harrod, 1939).</strong> Croissance équilibrée si I = S, avec S = sY et I = vΔY → ΔY/Y = s/v. Stabilité exige aussi l’équilibre sur le marché du travail (n + a). Variables indépendantes → forte instabilité ; plein emploi rarement acquis. Le plan Marshall a comblé l’insuffisance d’épargne européenne.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Convergence vers un état régulier (Solow, 1956)</h3>
                  <p>Accent sur l’offre ; croissance équilibrée et régulière à long terme ; facteurs : accumulation du capital, croissance de la main‑d’œuvre, progrès technique.</p>
                  <p>À court terme : capital et démographie. Rendements décroissants du capital. Notions usuelles de l’état régulier : R1 (remplacement), k1 (seuil critique), E1 (équilibre long terme), C1 (consommation à l’état régulier).</p>
                  <p>Une économie en‑deçà de l’état régulier converge spontanément (rattrapage rapide, puis ralentissement). Enseignements empiriques : Japon 1950–73 ~8 %/an (rattrapage post‑guerre), France/Allemagne idem ; impact de la démographie et du partage conso/épargne.</p>
                </div>
              </div>
            </div>

            {/* 3) Sources */}
            <div id="sources" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">3) Les sources de la croissance</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Gains de productivité</h3>
                  <p>La croissance soutenue suppose des gains de productivité. Krugman (2000) : au XXe, croissance ~1,9 %/an, productivité du travail ~90 % de cette hausse. Progrès technique (procédés/produits) majeur ; ex : téléphone (Bell, 1876).</p>
                  <p>Schumpeter (1911) : « destruction créatrice » – vagues d’innovation → accélération puis décélération de la croissance.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Résidu et PGF</h3>
                  <p>PGF = PIB − contribution des facteurs (résidu). Abramovitz : « mesure de notre ignorance ». Carré‑Dubois‑Malinvaud (1972) : PGF ≈ 50 % de la croissance française 1951–69 (~2,5 pts sur 5). Depuis les années 1990, divergence liée aux TIC ; résolution du « paradoxe de Solow » avec diffusion massive.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Progrès technique exogène (néoclassiques)</h3>
                  <p>Dans Solow, le PT est exogène ; convergence attendue des niveaux de vie (rendements décroissants). Mais Barro (1991) : pas de convergence inconditionnelle ; elle dépend des institutions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D) Croissance endogène</h3>
                  <p>Romer (1986) : rôle central du capital humain et de la R&D ; rendements croissants ; connaissances partiellement appropriables → diffusion. Aghion & Howitt (1992) : croissance par « destruction créatrice » ; la R&D alimente l’innovation et la PGF. Pouvoirs publics : rôle clé via politiques favorables (éducation, R&D, infrastructures).</p>
                </div>
              </div>
            </div>

            {/* 4) Limites */}
            <div id="limites" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">4) Les limites de la croissance</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Une croissance durable envisageable</h3>
                  <p>Contre Malthus : une croissance pérenne est possible si la taille du marché suit les gains de productivité.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B) Freins : rendements décroissants et ressources</h3>
                  <p>Ricardo (1817) : rendements décroissants. Club de Rome (1972) : rareté des ressources ; GIEC : réchauffement (≈ +0,6°C) lié aux activités humaines depuis la RI.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C) Stagnation séculaire</h3>
                  <p>Hansen (1938) ; Gordon (2016) : potentiel US ≤ 1 % (ralentissement des gains des TIC). Mokyr : effets d’apprentissage et décalages ; questionne l’idée d’une croissance auto‑entretenue ; cycles d’endettement/boom ont artificiellement soutenu la croissance (Grande Modération).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


