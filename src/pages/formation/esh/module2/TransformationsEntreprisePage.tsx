import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Building, Users } from 'lucide-react';

const TransformationsEntreprisePage = () => {
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
              <Link to="/formation/esh/premiere-annee" className="hover:text-carnet-red transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Transformations de l'entreprise</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
              <Building className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="text-4xl font-bold text-carnet-ink">
              Les transformations de l'entreprise et de sa gouvernance depuis le XIXe siècle
            </h1>
          </div>
          <p className="text-xl text-carnet-ink-soft max-w-3xl mx-auto leading-relaxed">
            Évolution des formes d'organisation et de management des entreprises modernes
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-carnet-paper-2 rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">L'évolution historique des formes d'organisation</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-carnet-ink-soft leading-relaxed mb-4">
                    Depuis le XIXe siècle, l'entreprise a connu des transformations profondes, passant de la petite
                    entreprise familiale à la grande corporation moderne, en intégrant de nouveaux modes de
                    gouvernance et d'organisation du travail.
                  </p>
                </div>
              </section>

              {/* Grandes phases d'évolution */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Grandes phases d'évolution</h2>
                <div className="space-y-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XIXe siècle : L'entreprise familiale et artisanale</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Propriété et direction réunies en une seule personne</li>
                      <li>• Organisation simple basée sur l'artisanat et le commerce</li>
                      <li>• Capital limité et financement familial</li>
                      <li>• Main-d'œuvre familiale ou locale</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Fin XIXe - début XXe : L'entreprise capitaliste</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Séparation propriété/capital/direction</li>
                      <li>• Développement des sociétés anonymes</li>
                      <li>• Concentration industrielle et cartels</li>
                      <li>• Organisation scientifique du travail (Taylorisme)</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XXe siècle : L'entreprise managériale</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Développement des grandes corporations</li>
                      <li>• Gouvernance par les managers professionnels</li>
                      <li>• Diversification des activités</li>
                      <li>• Internationalisation et globalisation</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XXIe siècle : L'entreprise réseau</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Organisation en réseau et chaînes de valeur</li>
                      <li>• Externalisation et sous-traitance</li>
                      <li>• Numérisation et transformation digitale</li>
                      <li>• Gouvernance responsable et durable</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Évolution de la gouvernance */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Évolution des systèmes de gouvernance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Gouvernance actionnariale</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Primauté des actionnaires</li>
                      <li>• Conseil d'administration</li>
                      <li>• Transparence financière</li>
                      <li>• Création de valeur actionnariale</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Gouvernance partenariale</h3>
                    <ul className="space-y-2 text-teal-700">
                      <li>• Intégration des stakeholders</li>
                      <li>• Développement durable</li>
                      <li>• Responsabilité sociale</li>
                      <li>• Dialogue social</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Transformations organisationnelles */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Transformations organisationnelles</h2>
                <div className="space-y-4">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Du taylorisme au toyotisme</h3>
                    <p className="text-carnet-red">
                      Passage d'une organisation rigide et hiérarchique à des méthodes plus flexibles
                      privilégiant la qualité, la participation des salariés et l'amélioration continue.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">L'entreprise plate et agile</h3>
                    <p className="text-carnet-red">
                      Réduction des niveaux hiérarchiques, développement de l'autonomie des équipes,
                      organisation matricielle et méthodes agiles de management.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">L'impact du numérique</h3>
                    <p className="text-carnet-red">
                      Télétravail, coworking, plateformes collaboratives, intelligence artificielle
                      et transformation digitale qui redessinent l'organisation du travail.
                    </p>
                  </div>
                </div>
              </section>

              {/* Défis contemporains */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Défis contemporains de gouvernance</h2>
                <div className="bg-carnet-paper p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-carnet-ink mb-3">Les enjeux actuels</h3>
                  <ul className="space-y-2 text-carnet-ink-soft">
                    <li>• Équilibre entre performance économique et responsabilité sociale</li>
                    <li>• Gestion des risques globaux (environnementaux, cyber, géopolitiques)</li>
                    <li>• Adaptation aux nouvelles formes de travail (télétravail, gig economy)</li>
                    <li>• Gouvernance internationale et régulation des multinationales</li>
                    <li>• Intégration des critères ESG (Environnement, Social, Gouvernance)</li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Link to="/formation/esh/premiere-annee">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Retour au Module 2
            </Button>
          </Link>
          <Link to="/formation/esh/module2/croissance-economique">
            <Button className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default TransformationsEntreprisePage;
