import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, BarChart3, Heart } from 'lucide-react';

const TransformationsDemographiquesPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Transformations démographiques</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
              <BarChart3 className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="text-4xl font-bold text-carnet-ink">
              Transformations démographiques et évolution des modes de vie
            </h1>
          </div>
          <p className="text-xl text-carnet-ink-soft max-w-3xl mx-auto leading-relaxed">
            Comprendre les changements démographiques et leurs impacts profonds sur la société et les modes de vie
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-carnet-paper-2 rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Les grandes mutations démographiques</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-carnet-ink-soft leading-relaxed mb-4">
                    Depuis le XIXe siècle, les sociétés occidentales ont connu des transformations démographiques
                    majeures qui ont profondément modifié les structures familiales, les modes de vie et
                    l'organisation sociale.
                  </p>
                </div>
              </section>

              {/* Transition démographique */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">La transition démographique</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Phase 1</h3>
                    <p className="text-carnet-red text-sm">
                      Haute natalité et mortalité. Société à dominante rurale avec familles nombreuses.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Phase 2</h3>
                    <p className="text-carnet-red text-sm">
                      Baisse de la mortalité, natalité élevée. Croissance démographique rapide et exode rural.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Phase 3</h3>
                    <p className="text-carnet-red text-sm">
                      Baisse de la natalité. Vieillissement de la population et société urbaine.
                    </p>
                  </div>
                </div>
              </section>

              {/* Vieillissement de la population */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Le vieillissement démographique</h2>
                <div className="space-y-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Causes du vieillissement</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Allongement de l'espérance de vie</li>
                      <li>• Baisse de la fécondité</li>
                      <li>• Baby-boom des années 1945-1975</li>
                      <li>• Amélioration des conditions de vie</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Conséquences socio-économiques</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Pression sur les systèmes de retraite</li>
                      <li>• Réduction de la population active</li>
                      <li>• Augmentation des dépenses de santé</li>
                      <li>• Transformation des marchés du travail</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Évolution des structures familiales */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Évolution des structures familiales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Famille traditionnelle</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Familles nombreuses et étendues</li>
                      <li>• Autorité patriarcale</li>
                      <li>• Rôles familiaux définis</li>
                      <li>• Solidarité intergénérationnelle</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Famille contemporaine</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Familles nucléaires réduites</li>
                      <li>• Égalité homme-femme</li>
                      <li>• Diversité des formes familiales</li>
                      <li>• Individualisation des choix</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Changements dans les modes de vie */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Évolution des modes de vie</h2>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Urbanisation et mobilité</h3>
                    <p className="text-teal-700">
                      L'exode rural massif a transformé les modes de vie : concentration urbaine,
                      développement des transports, évolution des rythmes de vie et des pratiques sociales.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Numérisation et nouvelles technologies</h3>
                    <p className="text-carnet-red">
                      La révolution digitale transforme les relations sociales, le travail,
                      les loisirs et les modes de consommation avec l'essor des réseaux sociaux
                      et du commerce en ligne.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Évolution des valeurs et aspirations</h3>
                    <p className="text-carnet-red">
                      Changement des priorités individuelles : quête de bien-être, développement personnel,
                      conscience environnementale, diversité culturelle et ouverture internationale.
                    </p>
                  </div>
                </div>
              </section>

              {/* Défis démographiques contemporains */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Défis démographiques contemporains</h2>
                <div className="bg-carnet-paper p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-carnet-ink mb-3">Enjeux majeurs pour les sociétés modernes</h3>
                  <ul className="space-y-2 text-carnet-ink-soft">
                    <li>• Gestion du vieillissement et politiques familiales</li>
                    <li>• Intégration des migrants et diversité culturelle</li>
                    <li>• Équilibre entre vie professionnelle et vie privée</li>
                    <li>• Adaptation des systèmes sociaux aux nouvelles structures familiales</li>
                    <li>• Préparation aux transitions démographiques régionales</li>
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
              <Heart className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default TransformationsDemographiquesPage;
