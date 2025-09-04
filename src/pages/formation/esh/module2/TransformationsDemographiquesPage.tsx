import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, BarChart3, Heart } from 'lucide-react';

const TransformationsDemographiquesPage = () => {
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
              <span className="text-foreground font-medium">Transformations démographiques</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
              <BarChart3 className="h-6 w-6 text-blue-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Transformations démographiques et évolution des modes de vie
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprendre les changements démographiques et leurs impacts profonds sur la société et les modes de vie
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Les grandes mutations démographiques</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depuis le XIXe siècle, les sociétés occidentales ont connu des transformations démographiques
                    majeures qui ont profondément modifié les structures familiales, les modes de vie et
                    l'organisation sociale.
                  </p>
                </div>
              </section>

              {/* Transition démographique */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">La transition démographique</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Phase 1</h3>
                    <p className="text-blue-700 text-sm">
                      Haute natalité et mortalité. Société à dominante rurale avec familles nombreuses.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Phase 2</h3>
                    <p className="text-blue-700 text-sm">
                      Baisse de la mortalité, natalité élevée. Croissance démographique rapide et exode rural.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Phase 3</h3>
                    <p className="text-blue-700 text-sm">
                      Baisse de la natalité. Vieillissement de la population et société urbaine.
                    </p>
                  </div>
                </div>
              </section>

              {/* Vieillissement de la population */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Le vieillissement démographique</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Causes du vieillissement</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Allongement de l'espérance de vie</li>
                      <li>• Baisse de la fécondité</li>
                      <li>• Baby-boom des années 1945-1975</li>
                      <li>• Amélioration des conditions de vie</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Conséquences socio-économiques</h3>
                    <ul className="space-y-2 text-blue-700">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Évolution des structures familiales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Famille traditionnelle</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Familles nombreuses et étendues</li>
                      <li>• Autorité patriarcale</li>
                      <li>• Rôles familiaux définis</li>
                      <li>• Solidarité intergénérationnelle</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Famille contemporaine</h3>
                    <ul className="space-y-2 text-blue-700">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Évolution des modes de vie</h2>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Urbanisation et mobilité</h3>
                    <p className="text-teal-700">
                      L'exode rural massif a transformé les modes de vie : concentration urbaine,
                      développement des transports, évolution des rythmes de vie et des pratiques sociales.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Numérisation et nouvelles technologies</h3>
                    <p className="text-blue-700">
                      La révolution digitale transforme les relations sociales, le travail,
                      les loisirs et les modes de consommation avec l'essor des réseaux sociaux
                      et du commerce en ligne.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Évolution des valeurs et aspirations</h3>
                    <p className="text-blue-700">
                      Changement des priorités individuelles : quête de bien-être, développement personnel,
                      conscience environnementale, diversité culturelle et ouverture internationale.
                    </p>
                  </div>
                </div>
              </section>

              {/* Défis démographiques contemporains */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Défis démographiques contemporains</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Enjeux majeurs pour les sociétés modernes</h3>
                  <ul className="space-y-2 text-gray-700">
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

        {/* Navigation */}
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
    </div>
  );
};

export default TransformationsDemographiquesPage;
