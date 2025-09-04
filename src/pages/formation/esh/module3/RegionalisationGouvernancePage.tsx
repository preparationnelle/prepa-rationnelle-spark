import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const RegionalisationGouvernancePage = () => {
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
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-foreground transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Régionalisation, gouvernance et régulations internationales</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Building className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Régionalisation, gouvernance et régulations internationales
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 3.3 - Module 3</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Étudier les accords régionaux et les institutions internationales de gouvernance économique mondiale
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: La régionalisation des échanges */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                La régionalisation des échanges
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Union Européenne (UE)</h3>
                  <p className="text-sm text-gray-600">Marché unique, union douanière, politique agricole commune, fonds structurels</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">ALENA/ACEUM/USMCA</h3>
                  <p className="text-sm text-gray-600">Libre circulation des biens, services, capitaux entre États-Unis, Canada, Mexique</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">ASEAN</h3>
                  <p className="text-sm text-gray-600">Association des nations de l'Asie du Sud-Est, communauté économique en 2015</p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">MERCOSUR</h3>
                  <p className="text-sm text-gray-600">Marché commun du Sud, union douanière entre pays d'Amérique latine</p>
                </div>
              </div>
            </div>

            {/* Section 2: Les institutions de gouvernance internationale */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Les institutions de gouvernance internationale
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Organisation Mondiale du Commerce (OMC) :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Règles multilatérales du commerce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Résolution des différends commerciaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Négociations commerciales (cycles de Doha)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Fonds Monétaire International (FMI) :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Stabilité monétaire internationale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Prêts aux pays en difficulté</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Surveillance des politiques économiques</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Banque Mondiale :</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Prêts pour le développement économique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Aide technique et expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Recherche sur le développement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Les défis de la régulation internationale */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Les défis de la régulation internationale
              </h2>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Multilatéralisme vs bilatéralisme</h3>
                <p className="text-sm text-gray-600">
                  Tension entre règles multilatérales (OMC) et accords bilatéraux ou régionaux plus flexibles
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Protectionnisme latent</h4>
                  <p className="text-xs text-gray-600">Mesures non-tarifaires, subventions, normes techniques</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Inégalités Nord-Sud</h4>
                  <p className="text-xs text-gray-600">Règles défavorables aux pays en développement</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Commerce des services</h4>
                  <p className="text-xs text-gray-600">Difficultés de régulation des services numériques</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Durabilité environnementale</h4>
                  <p className="text-xs text-gray-600">Intégration des enjeux climatiques dans le commerce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/module3/analyse-echanges">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/balance-paiements">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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

export default RegionalisationGouvernancePage;
