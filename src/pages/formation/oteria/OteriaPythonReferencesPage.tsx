import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Target, Calculator, Zap, BarChart3, Database } from 'lucide-react';
import { OteriaPythonChapterTemplate } from '@/components/formation/OteriaPythonChapterTemplate';

interface RefItem {
  code: string;
  desc: string;
}

const RefCard: React.FC<{ item: RefItem; small?: boolean }> = ({ item, small }) => (
  <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
    <code className={`font-mono text-carnet-red font-semibold ${small ? 'text-xs' : 'text-sm'}`}>
      {item.code}
    </code>
    <p className="font-instrument text-xs mt-1 text-carnet-ink-soft">{item.desc}</p>
  </div>
);

const Section: React.FC<{
  title: string;
  Icon: typeof Code;
  children: React.ReactNode;
}> = ({ title, Icon, children }) => (
  <section className="carnet-card p-6 sm:p-8">
    <h2 className="font-lora text-[26px] text-carnet-ink flex items-center gap-2 mb-2">
      <Icon className="h-5 w-5 text-carnet-red" />
      {title}
    </h2>
    <hr className="carnet-divider mb-5" />
    {children}
  </section>
);

const importItems: RefItem[] = [
  { code: 'import numpy as np', desc: 'NumPy principal pour le calcul mathématique' },
  { code: 'import numpy.linalg as al', desc: 'Sous-module algèbre linéaire' },
  { code: 'import numpy.random as rd', desc: 'Génération de nombres aléatoires' },
  { code: 'import matplotlib.pyplot as plt', desc: 'Tracé de courbes et graphiques' },
];

const mathItems: RefItem[] = [
  { code: 'np.abs()', desc: 'Valeur absolue' },
  { code: 'np.cos()', desc: 'Cosinus' },
  { code: 'np.sin()', desc: 'Sinus' },
  { code: 'np.log()', desc: 'Logarithme népérien' },
  { code: 'np.exp()', desc: 'Exponentielle' },
  { code: 'np.sqrt()', desc: 'Racine carrée' },
  { code: 'np.floor()', desc: 'Partie entière' },
];

const constItems: RefItem[] = [
  { code: 'np.pi', desc: 'π (pi)' },
  { code: 'np.e', desc: "e (nombre d'Euler)" },
];

const vectorItems: RefItem[] = [
  { code: 'np.array([u1,...,un])', desc: 'Créer un vecteur-ligne' },
  { code: 'np.arange(a,b,r)', desc: 'Progression arithmétique de raison r' },
  { code: 'np.linspace(a,b,n)', desc: 'n éléments équirépartis de a à b' },
  { code: 'np.ones(n)', desc: 'Vecteur de n éléments égaux à 1' },
  { code: 'np.zeros(n)', desc: 'Vecteur de n éléments égaux à 0' },
];

const matrixSubItems: RefItem[] = [
  { code: 'np.ones((n,p))', desc: 'Matrice n×p de 1' },
  { code: 'np.zeros((n,p))', desc: 'Matrice n×p de 0' },
  { code: 'np.eye(n,p)', desc: 'Matrice avec 1 sur la diagonale' },
];

const opItems: RefItem[] = [
  { code: 'np.shape(A)', desc: 'Dimensions de la matrice A' },
  { code: 'np.dot(A,B)', desc: 'Produit matriciel' },
  { code: 'np.transpose(A)', desc: 'Transposée de A' },
  { code: 'np.sum(A)', desc: 'Somme de tous les éléments' },
  { code: 'np.mean(A)', desc: 'Moyenne de tous les éléments' },
  { code: 'np.min(A)', desc: 'Minimum des éléments' },
  { code: 'np.max(A)', desc: 'Maximum des éléments' },
  { code: 'np.cumsum(A)', desc: 'Sommes cumulées' },
];

const algebraItems: RefItem[] = [
  { code: 'al.inv(A)', desc: 'Inverse de la matrice A' },
  { code: 'al.matrix_rank(A)', desc: 'Rang de la matrice A' },
  { code: 'al.matrix_power(A,n)', desc: 'Puissance n-ième de A' },
  { code: 'al.solve(A,b)', desc: 'Résolution du système Ax = b' },
  { code: 'al.eig(A)', desc: 'Valeurs propres et vecteurs propres' },
];

const randomItems: RefItem[] = [
  { code: 'rd.uniform(a,b)', desc: 'Loi uniforme sur [a,b]' },
  { code: 'rd.randint(a,b)', desc: 'Entier uniforme sur [a,b-1]' },
  { code: 'rd.binomial(n,p)', desc: 'Loi binomiale B(n,p)' },
  { code: 'rd.geometric(p)', desc: 'Loi géométrique de paramètre p' },
  { code: 'rd.exponential(1/lambda)', desc: 'Loi exponentielle' },
  { code: 'rd.normal(m,sigma)', desc: 'Loi normale N(m,σ²)' },
  { code: 'rd.poisson(lambda)', desc: 'Loi de Poisson P(λ)' },
  { code: 'rd.gamma(nu)', desc: 'Loi gamma de paramètre ν' },
];

const graphItems: RefItem[] = [
  { code: 'plt.plot(x,y)', desc: 'Tracer une courbe' },
  { code: "plt.plot(x,y,'x')", desc: 'Nuage de points avec des croix' },
  { code: 'plt.show()', desc: 'Afficher le graphique' },
  { code: 'plt.figure(n)', desc: 'Créer une nouvelle figure' },
  { code: 'plt.clf()', desc: 'Effacer le contenu' },
  { code: "plt.axis('scaled')", desc: 'Repère orthonormé' },
  { code: 'plt.grid()', desc: 'Ajouter une grille' },
  { code: "plt.xlabel('texte')", desc: 'Légende axe x' },
  { code: "plt.ylabel('texte')", desc: 'Légende axe y' },
  { code: "plt.title('texte')", desc: 'Titre du graphique' },
  { code: 'plt.hist(data)', desc: 'Histogramme' },
  { code: 'plt.scatter(x,y)', desc: 'Nuage de points' },
];

const OteriaPythonReferencesPage = () => {
  return (
    <OteriaPythonChapterTemplate
      sessionNumber={2}
      sessionTitle="Références Python"
      description="Guide complet des fonctions et modules NumPy, Matplotlib essentiels pour le programme Bachelor 2"
      slug="python-bases"
      activeSection="course"
      previousSession={{ slug: 'logique-fondamentale', title: 'Logique' }}
      nextSession={{ slug: 'recurrence-recursivite', title: 'Récurrence' }}
    >
      <div className="space-y-8 max-w-none">

        {/* Compteurs */}
        <div className="carnet-card p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="carnet-eyebrow mb-1">Modules</span>
              <span className="font-lora text-[28px] text-carnet-ink">10</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="carnet-eyebrow mb-1">Fonctions</span>
              <span className="font-lora text-[28px] text-carnet-ink">50+</span>
            </div>
          </div>
        </div>

        <Section title="Importation des modules" Icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Fonctions mathématiques de base" Icon={Calculator}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {mathItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Constantes" Icon={Target}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {constItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Création de vecteurs" Icon={Database}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {vectorItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Création de matrices" Icon={Database}>
          <div className="grid grid-cols-1 gap-4">
            <RefCard
              item={{
                code: 'np.array([[a1,1,...,a1,p],...,[an,1,...,an,p]])',
                desc: "Création d'une matrice",
              }}
              small
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {matrixSubItems.map((item) => <RefCard key={item.code} item={item} />)}
            </div>
          </div>
        </Section>

        <Section title="Opérations sur matrices/vecteurs" Icon={Zap}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {opItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Algèbre linéaire" Icon={Calculator}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {algebraItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Variables aléatoires" Icon={Target}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {randomItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Représentations graphiques" Icon={BarChart3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {graphItems.map((item) => <RefCard key={item.code} item={item} />)}
          </div>
        </Section>

        <Section title="Conseils d'utilisation" Icon={BookOpen}>
          <div className="space-y-4">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-6">
              <div className="carnet-eyebrow mb-3">Bonnes pratiques</div>
              <ul className="font-instrument text-sm text-carnet-ink-soft space-y-2">
                <li>• <strong>Importez toujours</strong> numpy as np en début de programme</li>
                <li>• <strong>Vérifiez les dimensions</strong> des matrices avec np.shape()</li>
                <li>• <strong>Utilisez des graines</strong> (np.random.seed()) pour la reproductibilité</li>
                <li>• <strong>Documentez vos graphiques</strong> avec des légendes et titres</li>
                <li>• <strong>Testez vos fonctions</strong> avec des exemples simples</li>
              </ul>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-6">
              <div className="carnet-eyebrow mb-3">Erreurs communes à éviter</div>
              <ul className="font-instrument text-sm text-carnet-ink-soft space-y-2">
                <li>• Confusion entre <strong>*</strong> (produit terme à terme) et <strong>np.dot()</strong> (produit matriciel)</li>
                <li>• Oublier que <strong>np.random</strong> génère des nombres pseudo-aléatoires</li>
                <li>• Ne pas gérer les <strong>dimensions incompatibles</strong> dans les opérations</li>
                <li>• Oublier <strong>plt.show()</strong> pour afficher les graphiques</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Lien vers le QCM */}
        <div className="text-center pt-2">
          <Link
            to="/formation/oteria/python-bases-qcm"
            className="inline-flex items-center gap-2 bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full font-instrument font-semibold px-5 h-10 text-[14px] transition-colors"
          >
            <Target className="h-4 w-4" />
            Testez vos connaissances
          </Link>
        </div>
      </div>
    </OteriaPythonChapterTemplate>
  );
};

export default OteriaPythonReferencesPage;
