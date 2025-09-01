import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre11OptimisationMultivarieeAvanceeExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ 
    level, 
    title, 
    icon: Icon, 
  }: { 
    level: string; 
    title: string; 
    icon: any; 
  }) => (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({ 
    id, 
    title, 
    content, 
    correction, 
    difficulty 
  }: { 
    id: string; 
    title: string; 
    content: React.ReactNode; 
    correction: React.ReactNode; 
    difficulty: string; 
  }) => (
    <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
            {difficulty}
          </div>
        </div>
        
        <div className="mb-4">
          {content}
        </div>
        
        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? "secondary" : "default"}
          className="mb-4"
        >
          {visibleCorrections[id] ? "Masquer la correction" : "Afficher la correction"}
        </Button>
        
        {visibleCorrections[id] && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Corrigé détaillé</h4>
            <div className="text-green-800">
              {correction}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-deuxieme-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies 2ème année
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 11</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 11 : Optimisation multivariée avancée
            </h1>
            <p className="text-slate-600 text-lg">
              Fonctions de plusieurs variables, propriétés différentielles, recherche d'extrema, conditions d'ordre 1 et 2, contraintes linéaires et multiplicateurs de Lagrange.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Convexité et optimisation sans contrainte"
          icon={BookOpen}
        />

        {/* Exercice 17.3 - Optimisation multivariée */}
        <ExerciseCard
          id="ex17-3"
          title="Exercice 17.3"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f : \mathbb{R}^2 \to \mathbb{R}" /> définie par
              </p>
              <div className="text-center my-4">
                <LatexRenderer latex="f(x,y) = e^{x^2 + y^2}" />
              </div>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Calculer le gradient <LatexRenderer latex="\nabla f" /> et le Hessien <LatexRenderer latex="H_f" /> de <LatexRenderer latex="f" />.
                </li>
                <li>
                  Vérifier que <LatexRenderer latex="H_f" /> est définie positive.
                </li>
                <li>
                  En déduire que <LatexRenderer latex="f" /> est convexe. Est-elle strictement convexe ?
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Gradient et Hessien</p>
                <p>On calcule les dérivées partielles :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y) = 2x e^{x^2+y^2}" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y) = 2y e^{x^2+y^2}" />
                </div>
                <p>Ainsi :</p>
                <div className="text-center">
                  <LatexRenderer latex="\nabla f(x,y) = \big( 2x e^{x^2+y^2}, \, 2y e^{x^2+y^2} \big)" />
                </div>
                
                <p>Pour le Hessien, on calcule les dérivées secondes :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x^2}(x,y) = (4x^2+2) e^{x^2+y^2}" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial y^2}(x,y) = (4y^2+2) e^{x^2+y^2}" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x \partial y}(x,y) = 4xy \, e^{x^2+y^2}" />
                </div>
                
                <p>Donc :</p>
                <div className="text-center">
                  <LatexRenderer latex="H_f(x,y) = e^{x^2+y^2} \begin{pmatrix} 4x^2+2 & 4xy \\ 4xy & 4y^2+2 \end{pmatrix}" />
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Hessien définie positive</p>
                <p>Le déterminant du Hessien est :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\det H_f(x,y) = e^{2(x^2+y^2)} \big( (4x^2+2)(4y^2+2) - (4xy)^2 \big)" />
                </div>
                
                <p>On développe :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="(4x^2+2)(4y^2+2) - (4xy)^2 = 16x^2y^2 + 8x^2 + 8y^2 + 4 - 16x^2y^2" />
                  <LatexRenderer latex="= 8x^2 + 8y^2 + 4" />
                </div>
                
                <p>Ainsi :</p>
                <div className="text-center">
                  <LatexRenderer latex="\det H_f(x,y) = e^{2(x^2+y^2)} (8x^2+8y^2+4) > 0" />
                </div>
                
                <p>De plus, la trace est :</p>
                <div className="text-center">
                  <LatexRenderer latex="\text{tr}(H_f(x,y)) = e^{x^2+y^2}(4x^2+4y^2+4) > 0" />
                </div>
                
                <p>Donc <LatexRenderer latex="H_f(x,y)" /> est définie positive en tout point <LatexRenderer latex="(x,y)" />.</p>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Convexité de f</p>
                <p>
                  Puisque le Hessien est définie positive en tout point, <LatexRenderer latex="f" /> est convexe.
                </p>
                <p>
                  Comme <LatexRenderer latex="\det H_f(x,y) > 0" /> partout, <LatexRenderer latex="H_f" /> est définie positive stricte.
                </p>
                <p>
                  <strong>Conclusion :</strong> <LatexRenderer latex="f" /> est strictement convexe.
                </p>
              </div>
            </div>
          }
        />

        {/* Exercice 17.4 - Multiplicateurs de Lagrange */}
        <ExerciseCard
          id="ex17-4"
          title="Exercice 17.4"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                On cherche à optimiser la fonction <LatexRenderer latex="f(x,y) = x^2 + 2y^2" /> sous la contrainte <LatexRenderer latex="g(x,y) = x + y - 1 = 0" />.
              </p>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Utiliser la méthode des multiplicateurs de Lagrange pour déterminer les points critiques.
                </li>
                <li>
                  Vérifier que la contrainte de qualification est satisfaite.
                </li>
                <li>
                  Déterminer la nature du point critique trouvé.
                </li>
                <li>
                  Calculer la valeur minimale de <LatexRenderer latex="f" /> sous contrainte.
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Méthode des multiplicateurs de Lagrange</p>
                <p>On forme le Lagrangien :</p>
                <div className="text-center">
                  <LatexRenderer latex="L(x,y,\lambda) = x^2 + 2y^2 - \lambda(x + y - 1)" />
                </div>
                
                <p>Les conditions de Karush-Kuhn-Tucker donnent :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial L}{\partial x} = 2x - \lambda = 0" />
                  <LatexRenderer latex="\frac{\partial L}{\partial y} = 4y - \lambda = 0" />
                  <LatexRenderer latex="\frac{\partial L}{\partial \lambda} = -(x + y - 1) = 0" />
                </div>
                
                <p>De la première équation : <LatexRenderer latex="x = \frac{\lambda}{2}" /></p>
                <p>De la deuxième équation : <LatexRenderer latex="y = \frac{\lambda}{4}" /></p>
                <p>En substituant dans la contrainte :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\lambda}{2} + \frac{\lambda}{4} - 1 = 0" />
                  <LatexRenderer latex="\frac{3\lambda}{4} = 1 \Rightarrow \lambda = \frac{4}{3}" />
                </div>
                
                <p>Donc :</p>
                <div className="text-center">
                  <LatexRenderer latex="x = \frac{2}{3}, \quad y = \frac{1}{3}" />
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Contrainte de qualification</p>
                <p>On calcule :</p>
                <div className="text-center">
                  <LatexRenderer latex="\nabla g(x,y) = (1, 1)" />
                </div>
                <p>Comme <LatexRenderer latex="\nabla g \neq 0" /> partout, la contrainte de qualification (LICQ) est satisfaite.</p>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Nature du point critique</p>
                <p>On calcule la Hessienne bordée du Lagrangien :</p>
                <div className="text-center">
                  <LatexRenderer latex="H_L = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 4 \end{pmatrix}" />
                </div>
                
                <p>Le déterminant est :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\det H_L = 0 \cdot (2 \cdot 4 - 0) - 1 \cdot (1 \cdot 4 - 0) + 1 \cdot (1 \cdot 0 - 2)" />
                  <LatexRenderer latex="= -4 - 2 = -6 < 0" />
                </div>
                
                <p>Comme le déterminant est négatif, le point est un <strong>minimum local</strong>.</p>
              </div>

              {/* Question 4 */}
              <div className="space-y-3">
                <p className="font-semibold">4) Valeur minimale</p>
                <p>La valeur minimale est :</p>
                <div className="text-center">
                  <LatexRenderer latex="f\left(\frac{2}{3}, \frac{1}{3}\right) = \left(\frac{2}{3}\right)^2 + 2\left(\frac{1}{3}\right)^2 = \frac{4}{9} + \frac{2}{9} = \frac{6}{9} = \frac{2}{3}" />
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 17.5 - Optimisation sous contraintes d'inégalité */}
        <ExerciseCard
          id="ex17-5"
          title="Exercice 17.5"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Résoudre le problème d'optimisation suivant :
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="\min_{(x,y)} \quad x^2 + y^2" />
                <br />
                <LatexRenderer latex="\text{s.c.} \quad x + 2y \geq 2" />
                <br />
                <LatexRenderer latex="\phantom{\text{s.c.}} \quad x, y \geq 0" />
              </div>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Écrire les conditions de Karush-Kuhn-Tucker (KKT).
                </li>
                <li>
                  Résoudre le système en considérant tous les cas possibles.
                </li>
                <li>
                  Déterminer la solution optimale et sa valeur.
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Conditions KKT</p>
                <p>On réécrit le problème sous forme standard :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="g_1(x,y) = -x - 2y + 2 \leq 0" />
                  <LatexRenderer latex="g_2(x,y) = -x \leq 0" />
                  <LatexRenderer latex="g_3(x,y) = -y \leq 0" />
                </div>
                
                <p>Le Lagrangien est :</p>
                <div className="text-center">
                  <LatexRenderer latex="L(x,y,\lambda_1,\lambda_2,\lambda_3) = x^2 + y^2 + \lambda_1(-x-2y+2) + \lambda_2(-x) + \lambda_3(-y)" />
                </div>
                
                <p>Les conditions KKT sont :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\nabla_x L = 2x - \lambda_1 - \lambda_2 = 0" />
                  <LatexRenderer latex="\nabla_y L = 2y - 2\lambda_1 - \lambda_3 = 0" />
                  <LatexRenderer latex="\lambda_1(-x-2y+2) = 0, \quad \lambda_2(-x) = 0, \quad \lambda_3(-y) = 0" />
                  <LatexRenderer latex="\lambda_1, \lambda_2, \lambda_3 \geq 0" />
                  <LatexRenderer latex="-x-2y+2 \leq 0, \quad -x \leq 0, \quad -y \leq 0" />
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Résolution par cas</p>
                
                <p><strong>Cas 1 :</strong> Contrainte 1 inactive (<LatexRenderer latex="\lambda_1 = 0" />)</p>
                <p>Alors <LatexRenderer latex="x = \frac{\lambda_2}{2}" /> et <LatexRenderer latex="y = \frac{\lambda_3}{2}" />.</p>
                <p>Si <LatexRenderer latex="x, y > 0" />, alors <LatexRenderer latex="\lambda_2 = \lambda_3 = 0" />, donc <LatexRenderer latex="x = y = 0" />.</p>
                <p>Mais <LatexRenderer latex="0 + 2 \cdot 0 = 0 < 2" />, donc la contrainte 1 est violée.</p>
                
                <p><strong>Cas 2 :</strong> Contrainte 1 active (<LatexRenderer latex="x + 2y = 2" />)</p>
                <p>On distingue les sous-cas :</p>
                
                <div className="ml-4 space-y-3">
                  <p><strong>Sous-cas 2a :</strong> <LatexRenderer latex="x, y > 0" /> (donc <LatexRenderer latex="\lambda_2 = \lambda_3 = 0" />)</p>
                  <div className="space-y-2">
                    <LatexRenderer latex="2x = \lambda_1, \quad 2y = 2\lambda_1 \Rightarrow y = 2x" />
                    <LatexRenderer latex="x + 2y = x + 4x = 5x = 2 \Rightarrow x = \frac{2}{5}, \, y = \frac{4}{5}" />
                  </div>
                  <p>Vérifions : <LatexRenderer latex="x = \frac{2}{5} > 0" /> et <LatexRenderer latex="y = \frac{4}{5} > 0" /> ✓</p>
                  
                  <p><strong>Sous-cas 2b :</strong> <LatexRenderer latex="x = 0, y > 0" /> (donc <LatexRenderer latex="\lambda_3 = 0" />)</p>
                  <p>Contrainte : <LatexRenderer latex="0 + 2y = 2 \Rightarrow y = 1" /></p>
                  <p>KKT : <LatexRenderer latex="-\lambda_1 - \lambda_2 = 0" /> et <LatexRenderer latex="2 = 2\lambda_1" /></p>
                  <p>Donc <LatexRenderer latex="\lambda_1 = 1" /> et <LatexRenderer latex="\lambda_2 = -1 < 0" /> ✗</p>
                  
                  <p><strong>Sous-cas 2c :</strong> <LatexRenderer latex="x > 0, y = 0" /> (donc <LatexRenderer latex="\lambda_2 = 0" />)</p>
                  <p>Contrainte : <LatexRenderer latex="x + 0 = 2 \Rightarrow x = 2" /></p>
                  <p>KKT : <LatexRenderer latex="4 = \lambda_1" /> et <LatexRenderer latex="0 = 2\lambda_1 - \lambda_3" /></p>
                  <p>Donc <LatexRenderer latex="\lambda_1 = 4" /> et <LatexRenderer latex="\lambda_3 = 8 > 0" /> ✓</p>
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Solution optimale</p>
                <p>On compare les deux candidats :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="f\left(\frac{2}{5}, \frac{4}{5}\right) = \left(\frac{2}{5}\right)^2 + \left(\frac{4}{5}\right)^2 = \frac{4}{25} + \frac{16}{25} = \frac{20}{25} = \frac{4}{5}" />
                  <LatexRenderer latex="f(2, 0) = 2^2 + 0^2 = 4" />
                </div>
                
                <p>Comme <LatexRenderer latex="\frac{4}{5} < 4" />, la solution optimale est :</p>
                <div className="text-center bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="(x^*, y^*) = \left(\frac{2}{5}, \frac{4}{5}\right) \text{ avec valeur optimale } \frac{4}{5}" />
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 17.6 - Convexité et extrema globaux */}
        <ExerciseCard
          id="ex17-6"
          title="Exercice 17.6"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f : \mathbb{R}^2 \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x,y) = x^4 + y^4 - 2x^2y^2" />.
              </p>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Calculer le gradient de <LatexRenderer latex="f" /> et déterminer ses points critiques.
                </li>
                <li>
                  Calculer la matrice Hessienne de <LatexRenderer latex="f" />.
                </li>
                <li>
                  Étudier la nature des points critiques.
                </li>
                <li>
                  La fonction <LatexRenderer latex="f" /> est-elle convexe ? Justifier.
                </li>
                <li>
                  Déterminer les extrema globaux de <LatexRenderer latex="f" />.
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Gradient et points critiques</p>
                <p>Calcul du gradient :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x} = 4x^3 - 4xy^2 = 4x(x^2 - y^2)" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y} = 4y^3 - 4x^2y = 4y(y^2 - x^2)" />
                </div>
                
                <p>Points critiques : <LatexRenderer latex="\nabla f = 0" /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="4x(x^2 - y^2) = 0" />
                  <LatexRenderer latex="4y(y^2 - x^2) = 0" />
                </div>
                
                <p>Analyse des cas :</p>
                <div className="ml-4 space-y-2">
                  <p>• Si <LatexRenderer latex="x = 0" /> : <LatexRenderer latex="y(y^2 - 0) = 0 \Rightarrow y = 0" /></p>
                  <p>• Si <LatexRenderer latex="y = 0" /> : <LatexRenderer latex="x(x^2 - 0) = 0 \Rightarrow x = 0" /></p>
                  <p>• Si <LatexRenderer latex="x^2 = y^2" /> : <LatexRenderer latex="y(y^2 - y^2) = 0" /> (toujours vrai)</p>
                </div>
                
                <p>Points critiques : <LatexRenderer latex="(0,0)" /> et tous les points de la forme <LatexRenderer latex="(t, t)" /> et <LatexRenderer latex="(t, -t)" /> avec <LatexRenderer latex="t \in \mathbb{R}" />.</p>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Matrice Hessienne</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x^2} = 12x^2 - 4y^2" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial y^2} = 12y^2 - 4x^2" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x \partial y} = -8xy" />
                </div>
                
                <p>Donc :</p>
                <div className="text-center">
                  <LatexRenderer latex="H_f(x,y) = \begin{pmatrix} 12x^2-4y^2 & -8xy \\ -8xy & 12y^2-4x^2 \end{pmatrix}" />
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Nature des points critiques</p>
                
                <p><strong>En (0,0) :</strong></p>
                <div className="space-y-2">
                  <LatexRenderer latex="H_f(0,0) = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}" />
                  <p>Matrice nulle : le test du second ordre n'est pas concluant.</p>
                </div>
                
                <p><strong>Sur les droites <LatexRenderer latex="y = x" /> et <LatexRenderer latex="y = -x" /> :</strong></p>
                <p>Pour <LatexRenderer latex="(t,t)" /> avec <LatexRenderer latex="t \neq 0" /> :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="H_f(t,t) = \begin{pmatrix} 8t^2 & -8t^2 \\ -8t^2 & 8t^2 \end{pmatrix}" />
                  <LatexRenderer latex="\det H_f(t,t) = 64t^4 - 64t^4 = 0" />
                </div>
                <p>Le test du second ordre n'est pas concluant non plus.</p>
              </div>

              {/* Question 4 */}
              <div className="space-y-3">
                <p className="font-semibold">4) Convexité</p>
                <p>Pour qu'une fonction soit convexe, sa Hessienne doit être semi-définie positive partout.</p>
                <p>Testons en <LatexRenderer latex="(1,0)" /> :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="H_f(1,0) = \begin{pmatrix} 12 & 0 \\ 0 & -4 \end{pmatrix}" />
                  <p>Cette matrice a une valeur propre négative (-4), donc n'est pas semi-définie positive.</p>
                </div>
                <p><strong>Conclusion :</strong> <LatexRenderer latex="f" /> n'est pas convexe.</p>
              </div>

              {/* Question 5 */}
              <div className="space-y-3">
                <p className="font-semibold">5) Extrema globaux</p>
                <p>On remarque que <LatexRenderer latex="f(x,y) = (x^2 - y^2)^2" />.</p>
                <p>Donc <LatexRenderer latex="f(x,y) \geq 0" /> pour tout <LatexRenderer latex="(x,y)" />, avec égalité ssi <LatexRenderer latex="x^2 = y^2" />.</p>
                
                <p><strong>Minimum global :</strong> <LatexRenderer latex="f(x,y) = 0" /> atteint sur les droites <LatexRenderer latex="y = x" /> et <LatexRenderer latex="y = -x" />.</p>
                <p><strong>Maximum global :</strong> <LatexRenderer latex="f" /> n'est pas majorée (tend vers <LatexRenderer latex="+\infty" /> quand <LatexRenderer latex="|(x,y)| \to \infty" />).</p>
              </div>
            </div>
          }
        />

        {/* Exercice 17.7 - Points de selle */}
        <ExerciseCard
          id="ex17-7"
          title="Exercice 17.7"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f : \mathbb{R}^2 \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x,y) = x^3 - 3xy^2" />.
              </p>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Déterminer les points critiques de <LatexRenderer latex="f" />.
                </li>
                <li>
                  Calculer la Hessienne et classifier la nature de chaque point critique.
                </li>
                <li>
                  Montrer que <LatexRenderer latex="f" /> n'admet ni maximum ni minimum global.
                </li>
                <li>
                  Représenter les courbes de niveau autour du point critique non trivial.
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Points critiques</p>
                <p>Calcul du gradient :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x} = 3x^2 - 3y^2" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y} = -6xy" />
                </div>
                
                <p>Points critiques : <LatexRenderer latex="\nabla f = 0" /></p>
                <div className="space-y-2">
                  <LatexRenderer latex="3x^2 - 3y^2 = 0 \Rightarrow x^2 = y^2" />
                  <LatexRenderer latex="-6xy = 0 \Rightarrow x = 0 \text{ ou } y = 0" />
                </div>
                
                <p>Si <LatexRenderer latex="x = 0" /> : <LatexRenderer latex="y^2 = 0 \Rightarrow y = 0" /></p>
                <p>Si <LatexRenderer latex="y = 0" /> : <LatexRenderer latex="x^2 = 0 \Rightarrow x = 0" /></p>
                
                <p><strong>Point critique unique :</strong> <LatexRenderer latex="(0,0)" /></p>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Classification via la Hessienne</p>
                <p>Calcul de la Hessienne :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x^2} = 6x" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial y^2} = -6x" />
                  <LatexRenderer latex="\frac{\partial^2 f}{\partial x \partial y} = -6y" />
                </div>
                
                <p>En <LatexRenderer latex="(0,0)" /> :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="H_f(0,0) = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}" />
                  <p>Le test du second ordre n'est pas concluant.</p>
                </div>
                
                <p><strong>Analyse directionnelle :</strong></p>
                <p>Le long de l'axe <LatexRenderer latex="x" /> (<LatexRenderer latex="y = 0" />) : <LatexRenderer latex="f(x,0) = x^3" /></p>
                <p>• Pour <LatexRenderer latex="x > 0" /> : <LatexRenderer latex="f(x,0) > 0" /></p>
                <p>• Pour <LatexRenderer latex="x < 0" /> : <LatexRenderer latex="f(x,0) < 0" /></p>
                
                <p>Le long de l'axe <LatexRenderer latex="y" /> (<LatexRenderer latex="x = 0" />) : <LatexRenderer latex="f(0,y) = 0" /></p>
                
                <p><strong>Conclusion :</strong> <LatexRenderer latex="(0,0)" /> est un <strong>point de selle</strong>.</p>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Absence d'extrema globaux</p>
                <p><strong>Pas de maximum :</strong></p>
                <p>Sur l'axe <LatexRenderer latex="x" /> positif : <LatexRenderer latex="f(x,0) = x^3 \to +\infty" /> quand <LatexRenderer latex="x \to +\infty" /></p>
                
                <p><strong>Pas de minimum :</strong></p>
                <p>Sur l'axe <LatexRenderer latex="x" /> négatif : <LatexRenderer latex="f(x,0) = x^3 \to -\infty" /> quand <LatexRenderer latex="x \to -\infty" /></p>
                
                <p><strong>Conclusion :</strong> <LatexRenderer latex="f" /> n'admet ni maximum ni minimum global.</p>
              </div>

              {/* Question 4 */}
              <div className="space-y-3">
                <p className="font-semibold">4) Courbes de niveau</p>
                <p>Les courbes de niveau sont définies par <LatexRenderer latex="f(x,y) = c" />, soit :</p>
                <div className="text-center">
                  <LatexRenderer latex="x^3 - 3xy^2 = c" />
                </div>
                
                <p>On peut factoriser : <LatexRenderer latex="x(x^2 - 3y^2) = c" /></p>
                
                <p><strong>Pour <LatexRenderer latex="c = 0" /> :</strong> <LatexRenderer latex="x = 0" /> ou <LatexRenderer latex="x^2 = 3y^2" /></p>
                <p>• Axe <LatexRenderer latex="y" /> : <LatexRenderer latex="x = 0" /></p>
                <p>• Droites <LatexRenderer latex="x = \pm\sqrt{3}y" /></p>
                
                <p><strong>Comportement autour de (0,0) :</strong></p>
                <p>Les courbes de niveau forment un motif en "selle de cheval" avec trois branches se rencontrant à l'origine.</p>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 2"
          title="Optimisation sous contraintes et applications"
          icon={BookOpen}
        />

        {/* Exercice 17.8 - Problème d'optimisation économique */}
        <ExerciseCard
          id="ex17-8"
          title="Exercice 17.8"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Une entreprise produit deux biens <LatexRenderer latex="x" /> et <LatexRenderer latex="y" /> avec une fonction de coût 
                <LatexRenderer latex="C(x,y) = x^2 + y^2 + xy" /> et une contrainte de production <LatexRenderer latex="x + 2y = 100" />.
              </p>
              
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Déterminer les quantités optimales à produire pour minimiser le coût.
                </li>
                <li>
                  Interpréter économiquement le multiplicateur de Lagrange.
                </li>
                <li>
                  Calculer l'effet d'une augmentation de 1% de la contrainte de production.
                </li>
                <li>
                  Vérifier que la solution est bien un minimum.
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="space-y-3">
                <p className="font-semibold">1) Quantités optimales</p>
                <p>Lagrangien :</p>
                <div className="text-center">
                  <LatexRenderer latex="L(x,y,\lambda) = x^2 + y^2 + xy - \lambda(x + 2y - 100)" />
                </div>
                
                <p>Conditions du premier ordre :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\frac{\partial L}{\partial x} = 2x + y - \lambda = 0" />
                  <LatexRenderer latex="\frac{\partial L}{\partial y} = 2y + x - 2\lambda = 0" />
                  <LatexRenderer latex="\frac{\partial L}{\partial \lambda} = -(x + 2y - 100) = 0" />
                </div>
                
                <p>De la première équation : <LatexRenderer latex="\lambda = 2x + y" /></p>
                <p>De la deuxième : <LatexRenderer latex="2\lambda = 2y + x \Rightarrow \lambda = y + \frac{x}{2}" /></p>
                
                <p>Égalisant : <LatexRenderer latex="2x + y = y + \frac{x}{2} \Rightarrow \frac{3x}{2} = 0 \Rightarrow x = 0" /></p>
                
                <p>De la contrainte : <LatexRenderer latex="0 + 2y = 100 \Rightarrow y = 50" /></p>
                
                <p><strong>Solution optimale :</strong> <LatexRenderer latex="x^* = 0, y^* = 50" /></p>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <p className="font-semibold">2) Interprétation du multiplicateur</p>
                <p>Calcul de <LatexRenderer latex="\lambda^*" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="\lambda^* = 2(0) + 50 = 50" />
                </div>
                
                <p><strong>Interprétation économique :</strong></p>
                <p>Le multiplicateur <LatexRenderer latex="\lambda^* = 50" /> représente le coût marginal de la contrainte de production.</p>
                <p>Si la contrainte passe de 100 à 101, le coût minimal augmentera approximativement de 50 unités.</p>
              </div>

              {/* Question 3 */}
              <div className="space-y-3">
                <p className="font-semibold">3) Effet d'une augmentation de 1%</p>
                <p>Une augmentation de 1% correspond à :</p>
                <div className="text-center">
                  <LatexRenderer latex="\Delta b = 100 \times 0.01 = 1" />
                </div>
                
                <p>Variation approximative du coût :</p>
                <div className="text-center">
                  <LatexRenderer latex="\Delta C \approx \lambda^* \times \Delta b = 50 \times 1 = 50" />
                </div>
                
                <p>Nouvelle contrainte : <LatexRenderer latex="x + 2y = 101" /></p>
                <p>En refaisant le calcul : <LatexRenderer latex="x = 0, y = 50.5" /></p>
                <p>Nouveau coût : <LatexRenderer latex="C(0, 50.5) = 50.5^2 = 2550.25" /></p>
                <p>Ancien coût : <LatexRenderer latex="C(0, 50) = 50^2 = 2500" /></p>
                <p>Variation réelle : <LatexRenderer latex="2550.25 - 2500 = 50.25 \approx 50" /> ✓</p>
              </div>

              {/* Question 4 */}
              <div className="space-y-3">
                <p className="font-semibold">4) Vérification du minimum</p>
                <p>Hessienne bordée :</p>
                <div className="text-center">
                  <LatexRenderer latex="H = \begin{pmatrix} 0 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 2 \end{pmatrix}" />
                </div>
                
                <p>Déterminant :</p>
                <div className="space-y-2">
                  <LatexRenderer latex="\det H = 0 - 1(2 - 2) + 2(1 - 4) = -6 < 0" />
                </div>
                
                <p>Comme le déterminant est négatif, le point est bien un <strong>minimum</strong>.</p>
              </div>
            </div>
          }
        />

        {/* Conseil méthodologique */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Méthode générale pour l'optimisation sans contrainte
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Pour étudier l'optimisation d'une fonction multivariée :</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Calculer le gradient et déterminer les points critiques (∇f = 0)</li>
                <li>Calculer la matrice Hessienne</li>
                <li>Vérifier la nature de la Hessienne (définie positive, négative, etc.)</li>
                <li>Conclure sur la nature des points critiques (minimum, maximum, point-selle)</li>
                <li>Pour la convexité : Hessienne définie positive ⟹ fonction strictement convexe</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeExercicesPage;
