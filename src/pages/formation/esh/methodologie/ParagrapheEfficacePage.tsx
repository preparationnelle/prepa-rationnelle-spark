import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Target, CheckCircle2 } from 'lucide-react';

const ParagrapheEfficacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh" className="hover:text-gray-800 transition-colors">Formation ESH ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh/methodologie" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Rédiger efficacement un paragraphe</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Comment rédiger efficacement un paragraphe en ESH</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En ESH, un bon paragraphe combine clarté, rigueur et concret. Utilisez la structure Idée – Argumentation – Appui concret pour éviter la récitation et organiser votre raisonnement.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <section className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. L’Idée directrice</h2>
            <p className="text-gray-700 mb-3">
              La première phrase annonce l'idée principale. Formulez-la simplement, sans citation ni auteur, et reliez-la clairement au sujet.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
              <div className="font-medium mb-1">Exemple (sujet fictif : « La mondialisation favorise-t-elle la croissance économique ? »)</div>
              <p>
                La mondialisation constitue un moteur de croissance en permettant une meilleure allocation des ressources et une ouverture des marchés.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. L’Argumentation</h2>
            <p className="text-gray-700 mb-3">
              Développez le mécanisme économique ou social qui justifie l'idée. Ensuite seulement, mobilisez un auteur ou une théorie pour renforcer la démonstration.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
              <div className="font-medium mb-1">Exemple</div>
              <p>
                En ouvrant les frontières, les pays peuvent se spécialiser dans les productions où ils sont les plus efficaces, ce qui accroît la productivité globale. Adam Smith soulignait déjà en 1776 que la division du travail et l’échange international favorisent l’enrichissement mutuel. Ainsi, la mondialisation stimule la croissance en exploitant les avantages comparatifs.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. L’Appui concret</h2>
            <p className="text-gray-700 mb-3">
              Concluez avec un exemple précis, une donnée chiffrée ou un fait historique pour crédibiliser l'argument.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
              <div className="font-medium mb-1">Exemple</div>
              <p>
                La Chine, en s’intégrant progressivement dans le commerce mondial depuis les années 1980, a vu son PIB multiplié par plus de 20 en quatre décennies.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h3>
            <p className="text-gray-700">
              La structure <span className="font-medium">Idée – Argumentation – Appui concret</span> est un outil simple et puissant pour donner de la force à vos copies d’ESH. Entraînez-vous à l’appliquer systématiquement : une idée claire, un raisonnement solide et une illustration pertinente suffisent à construire un paragraphe efficace.
            </p>
            <div className="mt-4 flex items-center gap-2 text-green-700">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm">Astuce: rédigez d'abord l'idée, vérifiez la logique, puis cherchez l'appui le plus précis possible.</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ParagrapheEfficacePage;


