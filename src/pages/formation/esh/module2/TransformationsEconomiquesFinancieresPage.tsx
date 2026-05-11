import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, TrendingUp, DollarSign } from 'lucide-react';

const TransformationsEconomiquesFinancieresPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Transformations économiques et financières</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
              <TrendingUp className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="text-4xl font-bold text-carnet-ink">
              Transformations des structures économiques et financières
            </h1>
          </div>
          <p className="text-xl text-carnet-ink-soft max-w-3xl mx-auto leading-relaxed">
            Analyser l'évolution des systèmes économiques et financiers modernes depuis le XIXe siècle
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-carnet-paper-2 rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">L'évolution des structures économiques</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-carnet-ink-soft leading-relaxed mb-4">
                    Depuis le XIXe siècle, les structures économiques ont connu des transformations profondes,
                    passant d'une économie agricole et artisanale à une économie industrielle, puis à une économie
                    de services et enfin à une économie numérique.
                  </p>
                </div>
              </section>

              {/* Grandes phases de transformation */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Grandes phases de transformation</h2>
                <div className="space-y-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XIXe siècle : Révolution industrielle</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Passage de l'économie agricole à l'économie industrielle</li>
                      <li>• Développement du capitalisme et de l'entreprise</li>
                      <li>• Urbanisation massive et exode rural</li>
                      <li>• Naissance du salariat et du mouvement ouvrier</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XXe siècle : Économie de services</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Tertiairisation de l'économie</li>
                      <li>• Développement de l'État-providence</li>
                      <li>• Internationalisation des échanges</li>
                      <li>• Croissance des services financiers</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">XXIe siècle : Économie numérique</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Révolution digitale et transformation numérique</li>
                      <li>• Économie de la connaissance</li>
                      <li>• Plateformes et économie collaborative</li>
                      <li>• Finance digitale et crypto-monnaies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Transformations financières */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Les transformations du système financier</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Banques et institutions financières</h3>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Passage du monopole bancaire à la concurrence</li>
                      <li>• Développement des banques universelles</li>
                      <li>• Réglementation internationale (Bâle)</li>
                      <li>• Crises financières et supervision</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Marchés financiers</h3>
                    <ul className="space-y-2 text-indigo-700">
                      <li>• Globalisation des marchés</li>
                      <li>• Produits dérivés et titrisation</li>
                      <li>• Haute fréquence et algorithmes</li>
                      <li>• Régulation post-crise 2008</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Impact sur l'organisation économique */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Impact sur l'organisation économique</h2>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Nouvelles formes d'organisation</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• De l'entreprise fordiste à l'entreprise lean</li>
                    <li>• Externalisation et chaînes de valeur globales</li>
                    <li>• Économie de plateforme et uberisation</li>
                    <li>• Entrepreneuriat et start-ups</li>
                    <li>• Économie circulaire et développement durable</li>
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
              <DollarSign className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default TransformationsEconomiquesFinancieresPage;
