import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Calculator, FunctionSquare, Database } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaRecurrenceRecursiviteCoursPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 3 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <FunctionSquare className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 3 : Sommes, produits et coefficients binomiaux</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Maîtrise des techniques de calcul des sommes et produits, manipulation des indices et coefficients binomiaux
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                  <span className="text-2xl font-bold text-blue-900">3</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟠 Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/recurrence-recursivite-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Sommes et produits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              1. Sommes et produits
            </h2>

            {/* Somme d'une suite constante */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Somme d'une suite constante</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">
                  Pour <LatexRenderer latex="m \leq n" /> et <LatexRenderer latex="c \in \mathbb{R}" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=m}^n c = (n-m+1)c" block />
                </div>
              </div>
            </div>

            {/* Sommes des puissances des premiers entiers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Sommes des puissances des premiers entiers</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="text-center space-y-4">
                  <div>
                    <LatexRenderer latex="\sum_{i=1}^n i = \frac{n(n+1)}{2}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="\sum_{i=1}^n i^3 = \left(\frac{n(n+1)}{2}\right)^2" block />
                  </div>
                </div>
              </div>
            </div>

            {/* Sommes géométriques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Sommes géométriques</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">
                  Pour <LatexRenderer latex="q \in \mathbb{R}" /> et <LatexRenderer latex="n \geq 0" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=0}^n q^i = \begin{cases} n+1 & \text{si } q=1 \\ \dfrac{1-q^{n+1}}{1-q} & \text{si } q \neq 1 \end{cases}" block />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Plus généralement, pour <LatexRenderer latex="m \leq n" /> et <LatexRenderer latex="q \neq 1" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=m}^n q^i = q^m \cdot \frac{1-q^{n-m+1}}{1-q}" block />
                </div>
              </div>
            </div>

            {/* Propriétés algébriques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Propriétés algébriques</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Pour deux suites <LatexRenderer latex="(x_i)" /> et <LatexRenderer latex="(y_i)" /> et <LatexRenderer latex="\lambda \in \mathbb{R}" /> :
                </p>
                <div className="text-center space-y-3">
                  <div>
                    <LatexRenderer latex="\sum_{i=1}^n (x_i + y_i) = \sum_{i=1}^n x_i + \sum_{i=1}^n y_i" block />
                  </div>
                  <div>
                    <LatexRenderer latex="\sum_{i=1}^n \lambda x_i = \lambda \sum_{i=1}^n x_i" block />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Techniques de manipulation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              2. Techniques de manipulation
            </h2>

            {/* Changement d'indice */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Changement d'indice</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">
                  Si <LatexRenderer latex="j = i + r" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=m}^n x_{i+r} = \sum_{j=m+r}^{n+r} x_j" block />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si <LatexRenderer latex="\ell = r-i" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=m}^n x_{r-i} = \sum_{\ell=r-n}^{r-m} x_\ell" block />
                </div>
              </div>
            </div>

            {/* Sommes télescopiques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Sommes télescopiques</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Pour toute suite <LatexRenderer latex="(u_i)_{i \geq 0}" /> :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=0}^n (u_{i+1} - u_i) = u_{n+1} - u_0" block />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Sommes doubles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              3. Sommes doubles
            </h2>

            {/* Indices indépendants */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Indices indépendants</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex="\sum_{i=1}^n \sum_{j=1}^n x_{i,j} = \sum_{j=1}^n \sum_{i=1}^n x_{i,j}" block />
                </div>
              </div>
            </div>

            {/* Indices dépendants */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Indices dépendants</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex="\sum_{1 \leq i \leq j \leq n} x_{i,j} = \sum_{j=1}^n \sum_{i=1}^j x_{i,j}" block />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Lien entre somme simple et double */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              4. Lien entre somme simple et double
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center">
                <LatexRenderer latex="\left( \sum_{i=1}^n x_i \right)^2 = \sum_{i=1}^n x_i^2 + 2 \sum_{1 \leq i < j \leq n} x_i x_j" block />
              </div>
            </div>
          </div>

          {/* Section 5: Produits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              5. Produits
            </h2>

            {/* Factorielle */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Factorielle</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center space-y-3">
                  <div>
                    <LatexRenderer latex="n! = \prod_{i=1}^n i" block />
                  </div>
                  <div>
                    <LatexRenderer latex="0! = 1" block />
                  </div>
                </div>
              </div>
            </div>

            {/* Produit constant */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Produit constant</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex="\prod_{i=1}^n \lambda = \lambda^n" block />
                </div>
              </div>
            </div>

            {/* Compatibilités algébriques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Compatibilités algébriques</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex="\prod_{i=1}^n (x_i y_i) = \left(\prod_{i=1}^n x_i\right)\left(\prod_{i=1}^n y_i\right)" block />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si aucun <LatexRenderer latex="y_i" /> n'est nul :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\prod_{i=1}^n \frac{x_i}{y_i} = \frac{\prod_{i=1}^n x_i}{\prod_{i=1}^n y_i}" block />
                </div>
              </div>
            </div>

            {/* Produit télescopique */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Produit télescopique</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Pour <LatexRenderer latex="(z_i)" /> non nuls :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\prod_{i=0}^n \frac{z_i}{z_{i+1}} = \frac{z_0}{z_{n+1}}" block />
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Coefficients binomiaux */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              6. Coefficients binomiaux
            </h2>

            {/* Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Définition</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Pour <LatexRenderer latex="0 \leq p \leq n" /> :
                </p>
                <div className="text-center space-y-3">
                  <div>
                    <LatexRenderer latex="\binom{n}{p} = \frac{n!}{p!(n-p)!}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="\binom{n}{p} = 0 \text{ si } p>n" block />
                  </div>
                </div>
              </div>
            </div>

            {/* Exemples pratiques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Exemples pratiques</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center space-y-3">
                  <div>
                    <LatexRenderer latex="\binom{n}{2} = \frac{n(n-1)}{2}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="\binom{n}{3} = \frac{n(n-1)(n-2)}{6}" block />
                  </div>
                </div>
              </div>
            </div>

            {/* Propriétés */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Propriétés</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center space-y-3">
                  <div>
                    <LatexRenderer latex="\binom{n}{p} = \binom{n}{n-p}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="p\binom{n}{p} = n \binom{n-1}{p-1}" block />
                  </div>
                  <div>
                    <LatexRenderer latex="p(p-1)\binom{n}{p} = n(n-1)\binom{n-2}{p-2}" block />
                  </div>
                </div>
              </div>
            </div>

            {/* Triangle de Pascal */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Triangle de Pascal</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex="\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}" block />
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Binôme de Newton */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              7. Binôme de Newton
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 mb-3">
                Pour <LatexRenderer latex="a,b \in \mathbb{R}" /> et <LatexRenderer latex="n \in \mathbb{N}" /> :
              </p>
              <div className="text-center">
                <LatexRenderer latex="(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}" block />
              </div>
            </div>

            {/* Cas particuliers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Cas particuliers</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    Avec <LatexRenderer latex="a=b=1" /> :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k} = 2^n" block />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    Avec <LatexRenderer latex="a=1" />, <LatexRenderer latex="b=-1" /> :
                  </p>
                  <div className="text-center">
                    <LatexRenderer latex="\sum_{k=0}^n (-1)^k \binom{n}{k} = 0" block />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                ← Chapitre 2
              </button>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/recurrence-recursivite-exercices">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Target className="h-4 w-4" />
                  Exercices
                </button>
              </Link>
              <Link to="/formation/oteria/recurrence-recursivite-flashcards">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <BookOpen className="h-4 w-4" />
                  Flashcards
                </button>
              </Link>
              <Link to="/formation/oteria/recurrence-recursivite-qcm">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Zap className="h-4 w-4" />
                  QCM
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Chapitre suivant →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteCoursPage;
