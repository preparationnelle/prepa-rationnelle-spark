import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Users, Briefcase } from 'lucide-react';

const SociologieTravailPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Sociologie du travail</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
              <Users className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="text-4xl font-bold text-carnet-ink">
              Éléments de sociologie du travail et des organisations
            </h1>
          </div>
          <p className="text-xl text-carnet-ink-soft max-w-3xl mx-auto leading-relaxed">
            Comprendre les dynamiques sociales au sein des organisations de travail
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-carnet-paper-2 rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Le travail : activité sociale et économique</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-carnet-ink-soft leading-relaxed mb-4">
                    Le travail constitue l'une des activités sociales fondamentales. Au-delà de son aspect
                    économique, il structure les relations sociales, façonne les identités individuelles
                    et organise la vie collective. La sociologie du travail étudie ces dimensions sociales
                    du travail et des organisations.
                  </p>
                </div>
              </section>

              {/* Théories sociologiques du travail */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Grandes théories sociologiques du travail</h2>
                <div className="space-y-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Karl Marx : L'aliénation au travail</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Séparation du travailleur de son produit</li>
                      <li>• Division du travail et spécialisation</li>
                      <li>• Travail comme marchandise</li>
                      <li>• Critique du capitalisme industriel</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Max Weber : La rationalisation</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Bureaucratie et organisation rationnelle</li>
                      <li>• Division technique et hiérarchique du travail</li>
                      <li>• Autorité légale-rationnelle</li>
                      <li>• Désenchantement du monde</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Durkheim : La division sociale du travail</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Passage de la solidarité mécanique à organique</li>
                      <li>• Spécialisation et interdépendance</li>
                      <li>• Régulation sociale du travail</li>
                      <li>• Intégration sociale par le travail</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Organisations et management */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Les organisations : structures et dynamiques</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Théories classiques de l'organisation</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Taylorisme et organisation scientifique</li>
                      <li>• Fayol et principes administratifs</li>
                      <li>• Weber et bureaucratie idéale</li>
                      <li>• Spécialisation et hiérarchie</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Approches contemporaines</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Théorie des organisations</li>
                      <li>• Management participatif</li>
                      <li>• Organisations apprenantes</li>
                      <li>• Cultures organisationnelles</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Relations de travail */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Relations de travail et conflits sociaux</h2>
                <div className="space-y-4">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Le mouvement ouvrier et syndical</h3>
                    <p className="text-carnet-red">
                      Naissance du mouvement ouvrier au XIXe siècle, développement des syndicats,
                      luttes pour les droits sociaux et démocratisation des relations de travail.
                    </p>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg border-l-4 border-carnet-red/40">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Dialogue social et négociation collective</h3>
                    <p className="text-carnet-red">
                      Institutions représentatives du personnel, comités d'entreprise, négociations
                      salariales et accords collectifs comme formes de régulation sociale.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Conflits et régulations</h3>
                    <p className="text-teal-700">
                      Grèves, médiations, arbitrages et droit du travail comme mécanismes
                      de résolution des tensions sociales dans l'entreprise.
                    </p>
                  </div>
                </div>
              </section>

              {/* Transformations contemporaines */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Transformations contemporaines du travail</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Précarisation et flexibilisation</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• CDD et contrats temporaires</li>
                      <li>• Travail indépendant et plateformes</li>
                      <li>• Externalisation et sous-traitance</li>
                      <li>• Zones grises du salariat</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-carnet-ink mb-3">Numérisation et nouvelles formes</h3>
                    <ul className="space-y-2 text-carnet-red">
                      <li>• Télétravail et nomadisme</li>
                      <li>• Coworking et espaces collaboratifs</li>
                      <li>• Intelligence artificielle au travail</li>
                      <li>• Économie collaborative</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Enjeux contemporains */}
              <section>
                <h2 className="text-2xl font-bold text-carnet-ink mb-4">Enjeux contemporains</h2>
                <div className="bg-carnet-paper p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-carnet-ink mb-3">Les défis du travail moderne</h3>
                  <ul className="space-y-2 text-carnet-ink-soft">
                    <li>• Qualité de vie au travail et prévention des risques psychosociaux</li>
                    <li>• Équilibre vie privée/vie professionnelle</li>
                    <li>• Formation tout au long de la vie et employabilité</li>
                    <li>• Diversité et inclusion dans l'entreprise</li>
                    <li>• Responsabilité sociale des entreprises (RSE)</li>
                    <li>• Transition écologique et développement durable</li>
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
              <Briefcase className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default SociologieTravailPage;
