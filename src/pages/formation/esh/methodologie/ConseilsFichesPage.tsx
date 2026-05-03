import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, NotebookPen } from 'lucide-react';

const Item: React.FC<{ index: number; title: string; children: React.ReactNode }> = ({ index, title, children }) => (
  <section className="bg-white rounded-xl shadow-sm border p-6 mb-6">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0">{index}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
      </div>
    </div>
  </section>
);

const ConseilsFichesPage: React.FC = () => {
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
            <span className="text-gray-800 font-medium">10 conseils pour mieux ficher ses cours d’ESH</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <NotebookPen className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">10 conseils pour mieux ficher ses cours d’ESH</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L’ESH est vaste et exigeante. Des fiches bien conçues permettent d’aller à l’essentiel et de mobiliser efficacement ses connaissances en dissertation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Item index={1} title="Intégrer la dimension historique">
            <p>Inclure repères (dates, crises, réformes, évolutions de pensée) pour contextualiser les théories et crédibiliser l’argumentation.</p>
          </Item>
          <Item index={2} title="Sélectionner des données essentielles">
            <p>Peu mais très solide: 2–3 chiffres/citations/dates par chapitre valent mieux qu’un catalogue indigeste.</p>
          </Item>
          <Item index={3} title="Utiliser un code couleur">
            <p>Couleur par type d’info (chiffres, auteurs, histoire…). Lisibilité accrue et mémorisation facilitée.</p>
          </Item>
          <Item index={4} title="Mettre en avant les théories-clés">
            <p>Travailler davantage les incontournables (Keynes, Smith, Romer…). Définitions précises, mécanismes expliqués, références exactes.</p>
          </Item>
          <Item index={5} title="Éviter les fiches surchargées">
            <p>La fiche est une synthèse exploitable le jour J. Garde uniquement ce qui est mobilisable en 4 heures.</p>
          </Item>
          <Item index={6} title="Relier théorie et exemple concret">
            <p>Associer systématiquement un concept à une illustration (chiffre, fait historique, politique publique).</p>
          </Item>
          <Item index={7} title="Faire évoluer ses fiches">
            <p>Mise à jour régulière selon devoirs, colles et retours. Épurer ce qui sert peu, renforcer ce qui revient souvent.</p>
          </Item>
          <Item index={8} title="Reformuler plutôt que recopier">
            <p>Écrire avec ses mots pour assimiler. La reformulation entraîne déjà à la clarté attendue en dissertation.</p>
          </Item>
          <Item index={9} title="Intégrer l’actualité économique">
            <p>Ajouter chiffres récents, mesures de politique économique, comparaisons internationales: c’est différenciant aux concours.</p>
          </Item>
          <Item index={10} title="Utiliser ses fiches pour s’entraîner">
            <p>Se tester: restitution masquée, mini-paragraphes, quiz rapides. Plus on manipule ses fiches, plus elles deviennent performantes.</p>
          </Item>

          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h2>
            <p className="text-gray-700">
              Une fiche réussie est courte, lisible et à jour: définitions, auteurs majeurs, chiffres-clés, exemples historiques et actualité. Ce n’est pas une fin en soi mais un outil pour être rapide, précis et pertinent le jour du concours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConseilsFichesPage;


