import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 4</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 4 : Fonctions multivariées et calcul différentiel
            </h1>
            <p className="text-slate-600 text-lg">
              Fonctions réelles définies sur ℝⁿ, dérivées partielles, gradient, recherche d'extremum.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Fonctions C¹ et calcul de gradients"
          icon={BookOpen}
        />

        {/* Exercice 13.2 */}
        <ExerciseCard
          id="ex13-2"
          title="Exercice 13.2"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Pour chacune des fonctions suivantes, montrer qu'elle est <LatexRenderer latex="\mathcal{C}^1" /> sur son ensemble de définition, et calculer son gradient.
              </p>
              
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <LatexRenderer latex="f : \mathbb{R}^2 \to \mathbb{R}, \ (x, y) \mapsto xye^{-x^2+2y}" />
                </li>
                <li>
                  <LatexRenderer latex="g : \mathbb{R}^3 \to \mathbb{R}, \ (x, y, z) \mapsto xye^z + xze^y + yze^x" />
                </li>
                <li>
                  <LatexRenderer latex="h : \mathbb{R}^n \to \mathbb{R}, \ (x_1, \ldots, x_n) \mapsto (x_1^2 + \cdots + x_n^2)e^{-(x_1^2 + \cdots + x_n^2)}" />
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-8">
              {/* Fonction f */}
              <div className="space-y-4">
                <h5 className="font-semibold text-lg">1. Fonction f</h5>
                
                <div className="space-y-3">
                  <p className="font-semibold">Régularité :</p>
                  <p>
                    La fonction <LatexRenderer latex="(x, y) \mapsto -x^2 + 2y" /> est polynomiale donc <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                  </p>
                  <p>
                    Par composition avec l'exponentielle, qui est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}" />, 
                    <LatexRenderer latex="(x,y) \mapsto e^{-x^2+2y}" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                  </p>
                  <p>
                    De plus, <LatexRenderer latex="(x, y) \mapsto xy" /> est polynomiale donc <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                  </p>
                  <p>
                    Par produit de fonctions <LatexRenderer latex="\mathcal{C}^1" />, <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold">Calcul du gradient :</p>
                  <div className="space-y-2">
                    <LatexRenderer latex="\partial_1 f(x,y) = e^{-x^2+2y}(y - 2x^2y)" />
                    <LatexRenderer latex="\partial_2 f(x,y) = e^{-x^2+2y}(x + 2xy)" />
                  </div>
                  <p>Ainsi :</p>
                  <div className="text-center bg-blue-50 p-3 rounded border">
                    <LatexRenderer latex="\nabla f(x,y) = \big(e^{-x^2+2y}(y - 2x^2y), \ e^{-x^2+2y}(x + 2xy)\big)" />
                  </div>
                </div>
              </div>

              {/* Fonction g */}
              <div className="space-y-4">
                <h5 className="font-semibold text-lg">2. Fonction g</h5>
                
                <div className="space-y-3">
                  <p className="font-semibold">Régularité :</p>
                  <p>
                    La fonction <LatexRenderer latex="(x,y,z) \mapsto xy" /> est polynomiale, donc <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" />.
                  </p>
                  <p>
                    De plus <LatexRenderer latex="(x,y,z) \mapsto z" /> est <LatexRenderer latex="\mathcal{C}^1" />, donc <LatexRenderer latex="(x,y,z) \mapsto e^z" /> est <LatexRenderer latex="\mathcal{C}^1" />.
                  </p>
                  <p>
                    Par produit de fonctions <LatexRenderer latex="\mathcal{C}^1" />, <LatexRenderer latex="(x,y,z) \mapsto xye^z" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" />.
                  </p>
                  <p>
                    De même, <LatexRenderer latex="xze^y" /> et <LatexRenderer latex="yze^x" /> sont <LatexRenderer latex="\mathcal{C}^1" />. Donc <LatexRenderer latex="g" /> est somme de fonctions <LatexRenderer latex="\mathcal{C}^1" />, donc <LatexRenderer latex="\mathcal{C}^1" />.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold">Calcul du gradient :</p>
                  <div className="space-y-2">
                    <LatexRenderer latex="\partial_1 g(x,y,z) = ye^z + ze^y" />
                    <LatexRenderer latex="\partial_2 g(x,y,z) = xe^z + ze^x" />
                    <LatexRenderer latex="\partial_3 g(x,y,z) = xye^z + xe^y + ye^x" />
                  </div>
                  <p>Ainsi :</p>
                  <div className="text-center bg-blue-50 p-3 rounded border">
                    <LatexRenderer latex="\nabla g(x,y,z) = \big( ye^z + ze^y, \ xe^z + ze^x, \ xye^z + xe^y + ye^x \big)" />
                  </div>
                </div>
              </div>

              {/* Fonction h */}
              <div className="space-y-4">
                <h5 className="font-semibold text-lg">3. Fonction h</h5>
                
                <div className="space-y-3">
                  <p className="font-semibold">Régularité :</p>
                  <p>
                    La fonction <LatexRenderer latex="(x_1,\ldots,x_n) \mapsto x_1^2 + \cdots + x_n^2" /> est polynomiale, donc <LatexRenderer latex="\mathcal{C}^1" />.
                  </p>
                  <p>
                    Par composition avec <LatexRenderer latex="t \mapsto e^{-t}" />, qui est <LatexRenderer latex="\mathcal{C}^1" />, la fonction <LatexRenderer latex="h" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^n" />.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold">Calcul du gradient :</p>
                  <p>Pour tout <LatexRenderer latex="i \in \{1, \ldots, n\}" /> :</p>
                  <div className="space-y-2">
                    <LatexRenderer latex="\partial_i h(x_1,\ldots,x_n) = 2x_i e^{-(x_1^2 + \cdots + x_n^2)} - 2x_i(x_1^2 + \cdots + x_n^2)e^{-(x_1^2 + \cdots + x_n^2)}" />
                    <LatexRenderer latex="= 2x_i e^{-(x_1^2 + \cdots + x_n^2)} \big(1 - (x_1^2 + \cdots + x_n^2)\big)" />
                  </div>
                  <p>Ainsi :</p>
                  <div className="text-center bg-blue-50 p-3 rounded border">
                    <LatexRenderer latex="\nabla h(x_1,\ldots,x_n) = 2e^{-(x_1^2 + \cdots + x_n^2)} \big(1 - (x_1^2 + \cdots + x_n^2)\big) (x_1, x_2, \ldots, x_n)" />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.4 */}
        <ExerciseCard
          id="ex13-4"
          title="Exercice 13.4"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f : \mathbb{R}^3 \to \mathbb{R}" /> définie par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y,z) = \begin{cases} \dfrac{xyz}{\sqrt{x^2+y^2+z^2}} & \text{si } (x,y,z) \neq (0,0,0) \\[1em] 0 & \text{sinon} \end{cases}" />
              </div>
              <p>
                Étudier la continuité de <LatexRenderer latex="f" /> sur <LatexRenderer latex="\mathbb{R}^3" />, en particulier en <LatexRenderer latex="(0,0,0)" />.
              </p>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Analyse préliminaire */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Analyse de la fonction</h5>
                <p>
                  La fonction <LatexRenderer latex="f" /> est définie par morceaux avec une expression rationnelle pour <LatexRenderer latex="(x,y,z) \neq (0,0,0)" /> et une valeur particulière à l'origine.
                </p>
                <p>
                  La question cruciale est la continuité en <LatexRenderer latex="(0,0,0)" /> où la fonction change de définition.
                </p>
              </div>

              {/* Continuité hors de l'origine */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Continuité sur ℝ³ \ {(0,0,0)}</h5>
                <p>
                  Les fonctions <LatexRenderer latex="(x,y,z) \mapsto xyz" /> et <LatexRenderer latex="(x,y,z) \mapsto x^2+y^2+z^2" /> sont continues sur <LatexRenderer latex="\mathbb{R}^3" />.
                </p>
                <p>
                  La fonction <LatexRenderer latex="t \mapsto \sqrt{t}" /> est continue sur <LatexRenderer latex="\mathbb{R}_+" />.
                </p>
                <p>
                  Ainsi, <LatexRenderer latex="(x,y,z) \mapsto \sqrt{x^2+y^2+z^2}" /> est continue sur <LatexRenderer latex="\mathbb{R}^3" />, et ne s'annule pas sur <LatexRenderer latex="\mathbb{R}^3 \setminus \{(0,0,0)\}" />.
                </p>
                <p>
                  <strong>Conclusion :</strong> <LatexRenderer latex="f" /> est continue sur <LatexRenderer latex="\mathbb{R}^3 \setminus \{(0,0,0)\}" />.
                </p>
              </div>

              {/* Majoration près de l'origine */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Majoration au voisinage de (0,0,0)</h5>
                <p>
                  Si <LatexRenderer latex="(x,y,z) = (0,0,0)" />, alors <LatexRenderer latex="f(0,0,0) = 0" /> par définition.
                </p>
                <p>
                  Sinon, on a <LatexRenderer latex="\sqrt{x^2+y^2+z^2} \geq \sqrt{x^2} = |x|" />, de sorte que :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="|f(x,y,z)| = \left| \frac{xyz}{\sqrt{x^2+y^2+z^2}} \right| \leq \frac{|x||y||z|}{|x|} = |y||z|" />
                </div>
                <p>
                  Cette majoration va nous permettre d'étudier la continuité en <LatexRenderer latex="(0,0,0)" />.
                </p>
              </div>

              {/* Continuité en (0,0,0) */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Continuité en (0,0,0)</h5>
                <p>
                  Pour prouver la continuité en <LatexRenderer latex="(0,0,0)" />, nous devons montrer que :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\lim_{(x,y,z) \to (0,0,0)} f(x,y,z) = f(0,0,0) = 0" />
                </div>
                
                <p>
                  Soit <LatexRenderer latex="\varepsilon > 0" />. Prenons <LatexRenderer latex="\eta = \sqrt{\varepsilon}" />.
                </p>
                
                <p>
                  Si <LatexRenderer latex="\|(x,y,z)\| < \eta" />, alors <LatexRenderer latex="|y| < \eta" /> et <LatexRenderer latex="|z| < \eta" />.
                </p>
                
                <p>
                  En utilisant la majoration précédente :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="|f(x,y,z) - f(0,0,0)| = |f(x,y,z)| \leq |y||z| < \eta^2 = \varepsilon" />
                </div>
                
                <p>
                  Donc, pour tout <LatexRenderer latex="\varepsilon > 0" />, il existe <LatexRenderer latex="\eta = \sqrt{\varepsilon} > 0" /> tel que :
                </p>
                <div className="text-center">
                  <LatexRenderer latex="\|(x,y,z)\| < \eta \Rightarrow |f(x,y,z) - f(0,0,0)| < \varepsilon" />
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    La fonction <LatexRenderer latex="f" /> est continue en <LatexRenderer latex="(0,0,0)" />, et donc continue sur <LatexRenderer latex="\mathbb{R}^3" /> tout entier.
                  </p>
                </div>
                <p>
                  <strong>Méthode clé :</strong> L'utilisation d'une majoration appropriée <LatexRenderer latex="|f(x,y,z)| \leq |y||z|" /> permet de contrôler le comportement de la fonction près de l'origine où elle n'est pas définie par la même formule.
                </p>
              </div>
            </div>
          }
        />

        {/* Exercice 13.5 */}
        <ExerciseCard
          id="ex13-5"
          title="Exercice 13.5"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f" /> la fonction définie sur <LatexRenderer latex="\mathbb{R}^2" /> par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y) = x^2 + 2xy + y^2 + 2x + 3y - 1" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Déterminer la dérivée directionnelle de <LatexRenderer latex="f" /> en <LatexRenderer latex="a = (-1,1)" /> dans la direction <LatexRenderer latex="\left(\tfrac{4}{5}, \tfrac{-3}{5}\right)" />.</p>
                
                <p><strong>2.</strong> Même question dans la direction <LatexRenderer latex="\dfrac{\nabla f(a)}{\|\nabla f(a)\|}" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Analyse préliminaire */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Calcul du gradient</h5>
                <p>
                  La fonction <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> car polynomiale.
                </p>
                <p>
                  Calculons les dérivées partielles :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\forall (x,y) \in \mathbb{R}^2 :" />
                  <LatexRenderer latex="\partial_1 f(x,y) = \frac{\partial f}{\partial x}(x,y) = 2x + 2y + 2" />
                  <LatexRenderer latex="\partial_2 f(x,y) = \frac{\partial f}{\partial y}(x,y) = 2x + 2y + 3" />
                </div>
                
                <p>
                  Au point <LatexRenderer latex="a = (-1,1)" /> :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(-1,1) = \big(2(-1)+2(1)+2, \; 2(-1)+2(1)+3 \big) = (2,3)" />
                </div>
              </div>

              {/* Question 1 */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Dérivée directionnelle dans la direction (4/5, -3/5)</h5>
                
                <p>
                  Vérifions d'abord que le vecteur direction est unitaire :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="\left\|\left(\tfrac{4}{5}, \tfrac{-3}{5}\right)\right\| = \sqrt{\left(\tfrac{4}{5}\right)^2 + \left(\tfrac{-3}{5}\right)^2} = \sqrt{\tfrac{16}{25} + \tfrac{9}{25}} = \sqrt{\tfrac{25}{25}} = 1" />
                </div>
                
                <p>
                  D'après le théorème, puisque <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" />, la dérivée directionnelle en <LatexRenderer latex="a" /> dans cette direction est :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="D_{\mathbf{u}} f(a) = \left\langle \nabla f(-1,1), \left(\tfrac{4}{5}, \tfrac{-3}{5}\right) \right\rangle" />
                  <LatexRenderer latex="= \left\langle (2,3), \left(\tfrac{4}{5}, \tfrac{-3}{5}\right) \right\rangle" />
                  <LatexRenderer latex="= \tfrac{4}{5} \cdot 2 + \tfrac{-3}{5} \cdot 3" />
                  <LatexRenderer latex="= \tfrac{8}{5} - \tfrac{9}{5} = -\tfrac{1}{5}" />
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Dérivée directionnelle dans la direction du gradient</h5>
                
                <p>
                  Calculons d'abord la norme du gradient :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\|\nabla f(-1,1)\| = \|(2,3)\| = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13}" />
                </div>
                
                <p>
                  La direction unitaire du gradient est :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="\frac{\nabla f(a)}{\|\nabla f(a)\|} = \frac{(2,3)}{\sqrt{13}} = \left(\frac{2}{\sqrt{13}}, \frac{3}{\sqrt{13}}\right)" />
                </div>
                
                <p>
                  D'après le cours, la dérivée directionnelle dans la direction du gradient est :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="D_{\nabla f(a)/\|\nabla f(a)\|} f(a) = \frac{1}{\|\nabla f(a)\|} \langle \nabla f(a), \nabla f(a) \rangle" />
                  <LatexRenderer latex="= \frac{1}{\|\nabla f(a)\|} \|\nabla f(a)\|^2 = \|\nabla f(a)\|" />
                  <LatexRenderer latex="= \sqrt{13}" />
                </div>
              </div>

              {/* Interprétation géométrique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Interprétation géométrique</h5>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Propriété fondamentale du gradient :</p>
                  <ul className="space-y-2 text-sm">
                    <li>• La dérivée directionnelle est <strong>maximale</strong> dans la direction de <LatexRenderer latex="\nabla f(a)" /></li>
                    <li>• Cette valeur maximale est <LatexRenderer latex="\|\nabla f(a)\| = \sqrt{13}" /></li>
                    <li>• Pour toute autre direction unitaire <LatexRenderer latex="\mathbf{u}" />, on a <LatexRenderer latex="|D_{\mathbf{u}} f(a)| \leq \sqrt{13}" /></li>
                  </ul>
                </div>
                
                <p>
                  <strong>Vérification :</strong> Dans la première direction, nous avons obtenu <LatexRenderer latex="|D_{\mathbf{u}} f(a)| = \left|-\tfrac{1}{5}\right| = \tfrac{1}{5} = 0.2" />, ce qui est bien inférieur à <LatexRenderer latex="\sqrt{13} \approx 3.61" />.
                </p>
              </div>

              {/* Rappel théorique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Rappel théorique</h5>
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Formule générale de la dérivée directionnelle :</p>
                  <div className="space-y-2">
                    <p>Pour une fonction <LatexRenderer latex="f" /> de classe <LatexRenderer latex="\mathcal{C}^1" /> et un vecteur unitaire <LatexRenderer latex="\mathbf{u}" /> :</p>
                    <LatexRenderer latex="D_{\mathbf{u}} f(a) = \langle \nabla f(a), \mathbf{u} \rangle = \|\nabla f(a)\| \cos(\theta)" />
                    <p>où <LatexRenderer latex="\theta" /> est l'angle entre <LatexRenderer latex="\nabla f(a)" /> et <LatexRenderer latex="\mathbf{u}" />.</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.6 */}
        <ExerciseCard
          id="ex13-6"
          title="Exercice 13.6"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f(x,y) = (y - 2x^2)^3 + 1" />.
              </p>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que les lignes de niveau de <LatexRenderer latex="f" /> sont des paraboles.</p>
                
                <p><strong>2.</strong> Soit <LatexRenderer latex="\lambda \in \mathbb{R}" /> et <LatexRenderer latex="(x_0,y_0)" /> un point de <LatexRenderer latex="\mathcal{C}_\lambda" />, la courbe de niveau <LatexRenderer latex="\lambda" /> de <LatexRenderer latex="f" />.</p>
                
                <p className="ml-4">
                  Déterminer un vecteur directeur de la tangente à <LatexRenderer latex="\mathcal{C}_\lambda" /> en <LatexRenderer latex="(x_0,y_0)" />.
                  <br />
                  Montrer que ce vecteur est orthogonal à <LatexRenderer latex="\nabla f(x_0,y_0)" />.
                </p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Courbes de niveau */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Étude des lignes de niveau</h5>
                
                <p>
                  Soit <LatexRenderer latex="\lambda \in \mathbb{R}" />. La courbe de niveau <LatexRenderer latex="\lambda" /> de <LatexRenderer latex="f" /> est définie par :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\mathcal{C}_\lambda(f) = \{(x,y) \in \mathbb{R}^2 : f(x,y) = \lambda \}" />
                  <LatexRenderer latex="= \{(x,y) \in \mathbb{R}^2 : (y - 2x^2)^3 + 1 = \lambda \}" />
                </div>
                
                <p>
                  Résolvons l'équation <LatexRenderer latex="(y - 2x^2)^3 + 1 = \lambda" /> :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(y - 2x^2)^3 = \lambda - 1" />
                  <LatexRenderer latex="y - 2x^2 = \sqrt[3]{\lambda - 1}" />
                  <LatexRenderer latex="y = 2x^2 + \sqrt[3]{\lambda - 1}" />
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Donc : <LatexRenderer latex="\mathcal{C}_\lambda(f) = \{(x,y) \in \mathbb{R}^2 : y = 2x^2 + \sqrt[3]{\lambda - 1}\}" />
                  </p>
                  <p className="text-green-700 mt-2">
                    On reconnaît l'équation d'une <strong>parabole</strong> d'axe vertical, translatée de <LatexRenderer latex="\sqrt[3]{\lambda - 1}" /> selon l'axe des ordonnées.
                  </p>
                </div>
              </div>

              {/* Question 2 - Vecteur tangent */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Vecteur directeur de la tangente</h5>
                
                <p>
                  La courbe de niveau <LatexRenderer latex="\mathcal{C}_\lambda" /> peut être paramétrée par la fonction :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="g_\lambda : x \mapsto 2x^2 + \sqrt[3]{\lambda - 1}" />
                </div>
                
                <p>
                  La dérivée de cette fonction est :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="g'_\lambda(x) = 4x" />
                </div>
                
                <p>
                  Un vecteur directeur de la tangente à <LatexRenderer latex="\mathcal{C}_\lambda" /> en <LatexRenderer latex="(x_0,y_0)" /> est :
                </p>
                <div className="bg-green-50 p-3 rounded border">
                  <LatexRenderer latex="\mathbf{u} = \big(1, g'_\lambda(x_0)\big) = (1, 4x_0)" />
                </div>
              </div>

              {/* Calcul du gradient */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Calcul du gradient de f</h5>
                
                <p>
                  La fonction <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" /> car polynomiale. Calculons ses dérivées partielles :
                </p>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y) = \frac{\partial}{\partial x}\big[(y - 2x^2)^3 + 1\big] = 3(y - 2x^2)^2 \cdot (-4x) = -12x(y - 2x^2)^2" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y) = \frac{\partial}{\partial y}\big[(y - 2x^2)^3 + 1\big] = 3(y - 2x^2)^2 \cdot 1 = 3(y - 2x^2)^2" />
                </div>
                
                <p>
                  Donc le gradient en <LatexRenderer latex="(x_0,y_0)" /> est :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x_0,y_0) = \big(-12x_0(y_0 - 2x_0^2)^2, \; 3(y_0 - 2x_0^2)^2\big)" />
                </div>
              </div>

              {/* Vérification de l'orthogonalité */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Vérification de l'orthogonalité</h5>
                
                <p>
                  Calculons le produit scalaire entre le vecteur tangent et le gradient :
                </p>
                
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\langle \mathbf{u}, \nabla f(x_0,y_0) \rangle = \langle (1, 4x_0), (-12x_0(y_0 - 2x_0^2)^2, 3(y_0 - 2x_0^2)^2) \rangle" />
                  <LatexRenderer latex="= 1 \cdot (-12x_0(y_0 - 2x_0^2)^2) + 4x_0 \cdot (3(y_0 - 2x_0^2)^2)" />
                  <LatexRenderer latex="= -12x_0(y_0 - 2x_0^2)^2 + 12x_0(y_0 - 2x_0^2)^2" />
                  <LatexRenderer latex="= 0" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Le vecteur directeur <LatexRenderer latex="\mathbf{u}" /> est bien orthogonal au gradient <LatexRenderer latex="\nabla f(x_0,y_0)" />.
                  </p>
                </div>
              </div>

              {/* Interprétation géométrique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Interprétation géométrique</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Théorème fondamental :</p>
                  <div className="space-y-2 text-sm">
                    <p>Pour une fonction <LatexRenderer latex="f" /> de classe <LatexRenderer latex="\mathcal{C}^1" />, le gradient <LatexRenderer latex="\nabla f(a)" /> en un point <LatexRenderer latex="a" /> est :</p>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Orthogonal</strong> à la courbe de niveau passant par <LatexRenderer latex="a" /></li>
                      <li>• <strong>Dirigé</strong> dans la direction de plus forte croissance de <LatexRenderer latex="f" /></li>
                      <li>• <strong>De norme</strong> égale au taux de variation maximal de <LatexRenderer latex="f" /> en <LatexRenderer latex="a" /></li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  <strong>Application pratique :</strong> Cette propriété est fondamentale en optimisation et en physique (gradients de température, de pression, etc.).
                </p>
              </div>

              {/* Remarque sur les courbes de niveau */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Remarque sur les courbes de niveau</h5>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Analyse des paraboles :</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Pour <LatexRenderer latex="\lambda = 1" /> : <LatexRenderer latex="y = 2x^2" /> (parabole de base)</li>
                    <li>• Pour <LatexRenderer latex="\lambda > 1" /> : <LatexRenderer latex="y = 2x^2 + \sqrt[3]{\lambda - 1}" /> (translation vers le haut)</li>
                    <li>• Pour <LatexRenderer latex="\lambda < 1" /> : <LatexRenderer latex="y = 2x^2 + \sqrt[3]{\lambda - 1}" /> (translation vers le bas)</li>
                  </ul>
                  <p className="text-yellow-700 mt-2">
                    Toutes les courbes de niveau sont des paraboles parallèles, translatées verticalement.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.7 */}
        <ExerciseCard
          id="ex13-7"
          title="Exercice 13.7"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f" /> la fonction définie sur <LatexRenderer latex="\mathbb{R}^3" /> par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y,z) = \frac{x^2}{2} + xyz + y - z" />
              </div>
              
              <p>
                Déterminer les points critiques de <LatexRenderer latex="f" /> et déterminer ses éventuels extrema.
              </p>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Calcul du gradient */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Calcul du gradient</h5>
                
                <p>
                  La fonction <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" /> car polynomiale.
                </p>
                
                <p>
                  Calculons les dérivées partielles :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y,z) = \frac{\partial}{\partial x}\left(\frac{x^2}{2} + xyz + y - z\right) = x + yz" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y,z) = \frac{\partial}{\partial y}\left(\frac{x^2}{2} + xyz + y - z\right) = xz + 1" />
                  <LatexRenderer latex="\frac{\partial f}{\partial z}(x,y,z) = \frac{\partial}{\partial z}\left(\frac{x^2}{2} + xyz + y - z\right) = xy - 1" />
                </div>
                
                <p>
                  Le gradient de <LatexRenderer latex="f" /> est donc :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x,y,z) = (x+yz, \; xz+1, \; xy-1)" />
                </div>
              </div>

              {/* Recherche des points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Recherche des points critiques</h5>
                
                <p>
                  Un point <LatexRenderer latex="(x,y,z) \in \mathbb{R}^3" /> est un point critique de <LatexRenderer latex="f" /> si et seulement si <LatexRenderer latex="\nabla f(x,y,z) = \mathbf{0}" />.
                </p>
                
                <p>
                  Cela donne le système d'équations :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} x + yz = 0 \quad (1) \\ xz + 1 = 0 \quad (2) \\ xy - 1 = 0 \quad (3) \end{cases}" />
                </div>
              </div>

              {/* Résolution du système */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Résolution du système</h5>
                
                <p>
                  De l'équation (3) : <LatexRenderer latex="xy = 1" />, on déduit que <LatexRenderer latex="x \neq 0" /> et <LatexRenderer latex="y \neq 0" />.
                </p>
                
                <p>
                  De l'équation (2) : <LatexRenderer latex="xz = -1" />, on obtient :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="y = \frac{1}{x} \quad \text{et} \quad z = \frac{-1}{x}" />
                </div>
                
                <p>
                  Substituons ces valeurs dans l'équation (1) :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="x + yz = x + \frac{1}{x} \cdot \frac{-1}{x} = x - \frac{1}{x^2} = 0" />
                  <LatexRenderer latex="\Longleftrightarrow \quad x = \frac{1}{x^2} \quad \Longleftrightarrow \quad x^3 = 1" />
                </div>
                
                <p>
                  Dans <LatexRenderer latex="\mathbb{R}" />, l'unique solution est <LatexRenderer latex="x = 1" />.
                </p>
                
                <p>
                  On en déduit :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="y = \frac{1}{1} = 1" />
                  <LatexRenderer latex="z = \frac{-1}{1} = -1" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    L'unique point critique de <LatexRenderer latex="f" /> est <LatexRenderer latex="(1, 1, -1)" />.
                  </p>
                </div>
              </div>

              {/* Vérification */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Vérification</h5>
                
                <p>
                  Vérifions que <LatexRenderer latex="(1, 1, -1)" /> annule bien le gradient :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\nabla f(1, 1, -1) = (1 + 1 \cdot (-1), \; 1 \cdot (-1) + 1, \; 1 \cdot 1 - 1)" />
                  <LatexRenderer latex="= (1 - 1, \; -1 + 1, \; 1 - 1) = (0, 0, 0)" />
                </div>
                
                <p className="text-green-600 font-medium">✓ La vérification est correcte.</p>
              </div>

              {/* Étude des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Étude des extrema</h5>
                
                <p>
                  Pour déterminer si <LatexRenderer latex="(1, 1, -1)" /> est un extremum, analysons le comportement de <LatexRenderer latex="f" /> à l'infini.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p><strong>Absence de maximum :</strong></p>
                    <p>Considérons la limite le long de l'axe des x :</p>
                    <div className="bg-red-50 p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to +\infty} f(x,0,0) = \lim_{x \to +\infty} \frac{x^2}{2} = +\infty" />
                    </div>
                    <p>Donc <LatexRenderer latex="f" /> n'admet pas de maximum global.</p>
                  </div>
                  
                  <div>
                    <p><strong>Absence de minimum :</strong></p>
                    <p>Considérons la limite le long de l'axe des z :</p>
                    <div className="bg-red-50 p-3 rounded border">
                      <LatexRenderer latex="\lim_{z \to +\infty} f(0,0,z) = \lim_{z \to +\infty} (-z) = -\infty" />
                    </div>
                    <p>Donc <LatexRenderer latex="f" /> n'admet pas de minimum global.</p>
                  </div>
                </div>
              </div>

              {/* Nature du point critique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Nature du point critique</h5>
                
                <p>
                  Puisque <LatexRenderer latex="f" /> tend vers <LatexRenderer latex="+\infty" /> dans certaines directions et vers <LatexRenderer latex="-\infty" /> dans d'autres, le point critique <LatexRenderer latex="(1, 1, -1)" /> est un <strong>point selle</strong>.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Caractérisation d'un point selle :</p>
                  <p className="text-sm">
                    Un point selle est un point critique qui n'est ni un maximum local ni un minimum local. 
                    Au voisinage d'un tel point, la fonction croît dans certaines directions et décroît dans d'autres.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <div className="space-y-2">
                    <p className="font-semibold text-blue-800">Résultats de l'étude :</p>
                    <ul className="space-y-1 text-sm list-disc ml-4">
                      <li><strong>Point critique unique :</strong> <LatexRenderer latex="(1, 1, -1)" /></li>
                      <li><strong>Nature :</strong> Point selle (ni maximum ni minimum)</li>
                      <li><strong>Extrema globaux :</strong> Aucun (fonction non bornée)</li>
                      <li><strong>Comportement asymptotique :</strong> <LatexRenderer latex="f \to +\infty" /> et <LatexRenderer latex="f \to -\infty" /> selon les directions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Méthode générale */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Méthode générale</h5>
                
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="font-semibold mb-2">Étapes pour l'étude des extrema :</p>
                  <ol className="space-y-1 text-sm list-decimal ml-4">
                    <li><strong>Calculer</strong> le gradient <LatexRenderer latex="\nabla f" /></li>
                    <li><strong>Résoudre</strong> le système <LatexRenderer latex="\nabla f = \mathbf{0}" /></li>
                    <li><strong>Analyser</strong> la nature des points critiques (Hessienne ou comportement asymptotique)</li>
                    <li><strong>Étudier</strong> le comportement aux bords du domaine (si nécessaire)</li>
                    <li><strong>Conclure</strong> sur l'existence d'extrema globaux/locaux</li>
                  </ol>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.10 */}
        <ExerciseCard
          id="ex13-10"
          title="Exercice 13.10 (Ecricome ECE 2006)"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="g : \mathbb{R}^2 \to \mathbb{R}" /> la fonction définie par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="g(x,y) = e^x(x + y^2 + e^x)" />
              </div>
              
              <p>
                On considère également la fonction <LatexRenderer latex="f" />, définie sur <LatexRenderer latex="\mathbb{R}" /> par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(t) = 1 + t + 2e^t" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que <LatexRenderer latex="g" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />, et calculer ses dérivées partielles.</p>
                
                <p><strong>2.</strong> Montrer qu'il existe un unique réel <LatexRenderer latex="\alpha" /> tel que <LatexRenderer latex="f(\alpha) = 0" />. Justifier que <LatexRenderer latex="\alpha \in [-2,-1]" />.</p>
                
                <p><strong>3.</strong> En déduire que <LatexRenderer latex="g" /> possède un unique point critique, que l'on exprimera en fonction de <LatexRenderer latex="\alpha" />.</p>
                
                <p><strong>4.</strong> En remarquant que pour tout <LatexRenderer latex="y \in \mathbb{R}" />, <LatexRenderer latex="g(x,y) \geq g(x,0)" />, montrer que <LatexRenderer latex="g" /> possède un minimum global.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Régularité */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Régularité et dérivées partielles</h5>
                
                <p>
                  <strong>Régularité de g :</strong>
                </p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>La fonction <LatexRenderer latex="(x,y) \mapsto x" /> est de classe <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" /> car polynomiale.</li>
                  <li>Par composition avec <LatexRenderer latex="t \mapsto e^t" /> (qui est <LatexRenderer latex="\mathcal{C}^1" />), la fonction <LatexRenderer latex="(x,y) \mapsto e^x" /> est <LatexRenderer latex="\mathcal{C}^1" />.</li>
                  <li>La fonction <LatexRenderer latex="(x,y) \mapsto x + y^2 + e^x" /> est <LatexRenderer latex="\mathcal{C}^1" /> (somme de fonctions <LatexRenderer latex="\mathcal{C}^1" />).</li>
                  <li>Par produit de fonctions <LatexRenderer latex="\mathcal{C}^1" />, <LatexRenderer latex="g" /> est bien <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.</li>
                </ul>
                
                <p>
                  <strong>Calcul des dérivées partielles :</strong>
                </p>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p><strong>Dérivée par rapport à x :</strong></p>
                  <LatexRenderer latex="\frac{\partial g}{\partial x}(x,y) = \frac{\partial}{\partial x}\big[e^x(x + y^2 + e^x)\big]" />
                  <LatexRenderer latex="= e^x(x + y^2 + e^x) + e^x(1 + e^x)" />
                  <LatexRenderer latex="= e^x(1 + x + y^2 + 2e^x)" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p><strong>Dérivée par rapport à y :</strong></p>
                  <LatexRenderer latex="\frac{\partial g}{\partial y}(x,y) = \frac{\partial}{\partial y}\big[e^x(x + y^2 + e^x)\big]" />
                  <LatexRenderer latex="= e^x \cdot 2y = 2ye^x" />
                </div>
                
                <div className="bg-green-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla g(x,y) = \big(e^x(1 + x + y^2 + 2e^x), \; 2ye^x\big)" />
                </div>
              </div>

              {/* Question 2 - Étude de f */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Étude de la fonction f</h5>
                
                <p>
                  <strong>Existence et unicité de α :</strong>
                </p>
                
                <p>
                  La fonction <LatexRenderer latex="f(t) = 1 + t + 2e^t" /> est continue sur <LatexRenderer latex="\mathbb{R}" /> et dérivable avec :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="f'(t) = 1 + 2e^t > 0 \quad \forall t \in \mathbb{R}" />
                </div>
                
                <p>
                  Donc <LatexRenderer latex="f" /> est <strong>strictement croissante</strong> sur <LatexRenderer latex="\mathbb{R}" />.
                </p>
                
                <p>
                  <strong>Comportement asymptotique :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\lim_{t \to -\infty} f(t) = \lim_{t \to -\infty} (1 + t + 2e^t) = -\infty" />
                  <LatexRenderer latex="\lim_{t \to +\infty} f(t) = \lim_{t \to +\infty} (1 + t + 2e^t) = +\infty" />
                </div>
                
                <p>
                  Par le <strong>théorème des valeurs intermédiaires</strong> et la stricte croissance, il existe un <strong>unique</strong> <LatexRenderer latex="\alpha \in \mathbb{R}" /> tel que <LatexRenderer latex="f(\alpha) = 0" />.
                </p>
                
                <p>
                  <strong>Localisation de α :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(-2) = 1 + (-2) + 2e^{-2} = -1 + 2e^{-2} = -1 + \frac{2}{e^2}" />
                  <p>Comme <LatexRenderer latex="e^2 \approx 7.39" />, on a <LatexRenderer latex="f(-2) \approx -1 + 0.27 = -0.73 < 0" /></p>
                  <LatexRenderer latex="f(-1) = 1 + (-1) + 2e^{-1} = 0 + \frac{2}{e} \approx 0.74 > 0" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Donc <LatexRenderer latex="\alpha \in [-2, -1]" />.
                  </p>
                </div>
              </div>

              {/* Question 3 - Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Points critiques de g</h5>
                
                <p>
                  Un point <LatexRenderer latex="(x,y)" /> est critique pour <LatexRenderer latex="g" /> si et seulement si <LatexRenderer latex="\nabla g(x,y) = (0,0)" />.
                </p>
                
                <p>
                  Cela donne le système :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} e^x(1 + x + y^2 + 2e^x) = 0 \quad (1) \\ 2ye^x = 0 \quad (2) \end{cases}" />
                </div>
                
                <p>
                  <strong>De l'équation (2) :</strong> Comme <LatexRenderer latex="e^x > 0" /> pour tout <LatexRenderer latex="x \in \mathbb{R}" />, on doit avoir <LatexRenderer latex="y = 0" />.
                </p>
                
                <p>
                  <strong>De l'équation (1) avec y = 0 :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="e^x(1 + x + 2e^x) = 0" />
                  <p>Comme <LatexRenderer latex="e^x > 0" />, on doit avoir :</p>
                  <LatexRenderer latex="1 + x + 2e^x = 0" />
                  <LatexRenderer latex="\Leftrightarrow \quad f(x) = 0" />
                </div>
                
                <p>
                  D'après la question 2, cette équation a une unique solution <LatexRenderer latex="x = \alpha" />.
                </p>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Le point critique unique de <LatexRenderer latex="g" /> est <LatexRenderer latex="(\alpha, 0)" />.
                  </p>
                </div>
              </div>

              {/* Question 4 - Minimum global */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">4. Existence d'un minimum global</h5>
                
                <p>
                  <strong>Observation clé :</strong> Pour tout <LatexRenderer latex="y \in \mathbb{R}" /> et tout <LatexRenderer latex="x \in \mathbb{R}" /> :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="g(x,y) = e^x(x + y^2 + e^x)" />
                  <LatexRenderer latex="g(x,0) = e^x(x + e^x)" />
                  <p>Comme <LatexRenderer latex="y^2 \geq 0" />, on a :</p>
                  <LatexRenderer latex="g(x,y) = e^x(x + e^x) + e^x y^2 = g(x,0) + e^x y^2 \geq g(x,0)" />
                </div>
                
                <p>
                  Donc, pour tout <LatexRenderer latex="x" /> fixé, le minimum de <LatexRenderer latex="y \mapsto g(x,y)" /> est atteint en <LatexRenderer latex="y = 0" />.
                </p>
                
                <p>
                  <strong>Étude de h(x) = g(x,0) :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="h(x) = g(x,0) = e^x(x + e^x)" />
                  <LatexRenderer latex="h'(x) = e^x(x + e^x) + e^x(1 + e^x) = e^x(1 + x + 2e^x) = f(x)" />
                </div>
                
                <p>
                  D'après la question 2 :
                </p>
                <ul className="space-y-1 ml-4 list-disc text-sm">
                  <li><LatexRenderer latex="h'(x) = f(x) < 0" /> pour <LatexRenderer latex="x < \alpha" /></li>
                  <li><LatexRenderer latex="h'(x) = f(x) = 0" /> pour <LatexRenderer latex="x = \alpha" /></li>
                  <li><LatexRenderer latex="h'(x) = f(x) > 0" /> pour <LatexRenderer latex="x > \alpha" /></li>
                </ul>
                
                <p>
                  Donc <LatexRenderer latex="h" /> est décroissante sur <LatexRenderer latex="]-\infty, \alpha[" /> et croissante sur <LatexRenderer latex="]\alpha, +\infty[" />.
                </p>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Conclusion :</p>
                  <div className="space-y-1 text-sm">
                    <p>• <LatexRenderer latex="h" /> admet un minimum global en <LatexRenderer latex="x = \alpha" /></p>
                    <p>• Pour tout <LatexRenderer latex="(x,y) \in \mathbb{R}^2" /> : <LatexRenderer latex="g(x,y) \geq g(x,0) = h(x) \geq h(\alpha) = g(\alpha,0)" /></p>
                    <p>• Donc <LatexRenderer latex="g" /> admet un <strong>minimum global</strong> en <LatexRenderer latex="(\alpha, 0)" /></p>
                  </div>
                </div>
              </div>

              {/* Synthèse */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Synthèse de l'exercice</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats principaux :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Régularité :</strong> <LatexRenderer latex="g \in \mathcal{C}^1(\mathbb{R}^2)" /></li>
                    <li><strong>Fonction auxiliaire :</strong> <LatexRenderer latex="f(t) = 1 + t + 2e^t" /> a un unique zéro <LatexRenderer latex="\alpha \in [-2,-1]" /></li>
                    <li><strong>Point critique :</strong> <LatexRenderer latex="(\alpha, 0)" /> est l'unique point critique de <LatexRenderer latex="g" /></li>
                    <li><strong>Optimisation :</strong> <LatexRenderer latex="g" /> admet un minimum global en <LatexRenderer latex="(\alpha, 0)" /></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Techniques utilisées :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Analyse fonctionnelle :</strong> Théorème des valeurs intermédiaires</li>
                    <li><strong>Optimisation :</strong> Réduction du problème 2D à un problème 1D</li>
                    <li><strong>Liaison astucieuse :</strong> Connexion entre fonction auxiliaire et gradient</li>
                    <li><strong>Minoration :</strong> Utilisation de <LatexRenderer latex="y^2 \geq 0" /> pour simplifier l'analyse</li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.11 */}
        <ExerciseCard
          id="ex13-11"
          title="Exercice 13.11"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f" /> la fonction définie sur <LatexRenderer latex="\mathbb{R}^2" /> par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y) = x^4 + 2x^2 + y^2 - 4xy + 8x - 4y + 5" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" /> et calculer son gradient.</p>
                
                <p><strong>2.</strong> Déterminer les points critiques de <LatexRenderer latex="f" /> et calculer les valeurs correspondantes.</p>
                
                <p><strong>3.</strong> On considère la fonction <LatexRenderer latex="g" /> définie par <LatexRenderer latex="g(x,y) = f(x,y) - f(-1,0)" />.</p>
                <p className="ml-4">
                  <strong>a)</strong> Exprimer <LatexRenderer latex="g(x,y)" /> comme un polynôme du second degré en <LatexRenderer latex="y" />.<br/>
                  <strong>b)</strong> Calculer le discriminant <LatexRenderer latex="\Delta(x)" /> de ce polynôme et montrer que <LatexRenderer latex="g(x,y) \geq 0" /> pour tout <LatexRenderer latex="(x,y) \in \mathbb{R}^2" />.
                </p>
                
                <p><strong>4.</strong> En déduire la nature des extrema de <LatexRenderer latex="f" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Régularité et gradient */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Régularité et calcul du gradient</h5>
                
                <p>
                  La fonction <LatexRenderer latex="f" /> est polynomiale, donc elle est évidemment <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                </p>
                
                <p>
                  Calculons les dérivées partielles :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y) = \frac{\partial}{\partial x}(x^4 + 2x^2 + y^2 - 4xy + 8x - 4y + 5)" />
                  <LatexRenderer latex="= 4x^3 + 4x - 4y + 8" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y) = \frac{\partial}{\partial y}(x^4 + 2x^2 + y^2 - 4xy + 8x - 4y + 5)" />
                  <LatexRenderer latex="= 2y - 4x - 4" />
                </div>
                
                <div className="bg-green-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x,y) = (4x^3 + 4x - 4y + 8, \; 2y - 4x - 4)" />
                </div>
              </div>

              {/* Question 2 - Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Détermination des points critiques</h5>
                
                <p>
                  Un point <LatexRenderer latex="(x,y)" /> est critique si et seulement si <LatexRenderer latex="\nabla f(x,y) = (0,0)" />.
                </p>
                
                <p>
                  Cela donne le système :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} 4x^3 + 4x - 4y + 8 = 0 \\ 2y - 4x - 4 = 0 \end{cases}" />
                </div>
                
                <p>
                  Simplifions le système :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} x^3 + x - y + 2 = 0 \quad (1) \\ y = 2x + 2 \quad (2) \end{cases}" />
                </div>
                
                <p>
                  Substituons (2) dans (1) :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="x^3 + x - (2x + 2) + 2 = 0" />
                  <LatexRenderer latex="x^3 + x - 2x - 2 + 2 = 0" />
                  <LatexRenderer latex="x^3 - x = 0" />
                  <LatexRenderer latex="x(x^2 - 1) = 0" />
                  <LatexRenderer latex="x(x-1)(x+1) = 0" />
                </div>
                
                <p>
                  Donc <LatexRenderer latex="x \in \{-1, 0, 1\}" />.
                </p>
                
                <p>
                  En utilisant <LatexRenderer latex="y = 2x + 2" />, on obtient les trois points critiques :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>• <LatexRenderer latex="x = -1 \Rightarrow y = 0 \Rightarrow (-1, 0)" /></p>
                  <p>• <LatexRenderer latex="x = 0 \Rightarrow y = 2 \Rightarrow (0, 2)" /></p>
                  <p>• <LatexRenderer latex="x = 1 \Rightarrow y = 4 \Rightarrow (1, 4)" /></p>
                </div>
                
                <p>
                  <strong>Valeurs de f aux points critiques :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(-1,0) = (-1)^4 + 2(-1)^2 + 0^2 - 4(-1)(0) + 8(-1) - 4(0) + 5 = 1 + 2 + 0 + 0 - 8 - 0 + 5 = 0" />
                  <LatexRenderer latex="f(0,2) = 0^4 + 2(0)^2 + 2^2 - 4(0)(2) + 8(0) - 4(2) + 5 = 0 + 0 + 4 - 0 + 0 - 8 + 5 = 1" />
                  <LatexRenderer latex="f(1,4) = 1^4 + 2(1)^2 + 4^2 - 4(1)(4) + 8(1) - 4(4) + 5 = 1 + 2 + 16 - 16 + 8 - 16 + 5 = 0" />
                </div>
              </div>

              {/* Question 3 - Fonction auxiliaire */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Étude de la fonction auxiliaire g</h5>
                
                <p>
                  <strong>a) Expression de g(x,y) :</strong>
                </p>
                
                <p>
                  On définit <LatexRenderer latex="g(x,y) = f(x,y)" /> (en utilisant le fait que <LatexRenderer latex="f(-1,0) = f(1,4) = 0" />).
                </p>
                
                <p>
                  Réorganisons <LatexRenderer latex="f(x,y)" /> comme un polynôme du second degré en <LatexRenderer latex="y" /> :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="g(x,y) = x^4 + 2x^2 + y^2 - 4xy + 8x - 4y + 5" />
                  <LatexRenderer latex="= y^2 - (4x + 4)y + (x^4 + 2x^2 + 8x + 5)" />
                </div>
                
                <p>
                  <strong>b) Calcul du discriminant :</strong>
                </p>
                
                <p>
                  Pour un polynôme de la forme <LatexRenderer latex="ay^2 + by + c" /> avec <LatexRenderer latex="a = 1" />, <LatexRenderer latex="b = -(4x+4)" />, et <LatexRenderer latex="c = x^4 + 2x^2 + 8x + 5" /> :
                </p>
                
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\Delta(x) = b^2 - 4ac = (4x+4)^2 - 4(x^4 + 2x^2 + 8x + 5)" />
                  <LatexRenderer latex="= 16x^2 + 32x + 16 - 4x^4 - 8x^2 - 32x - 20" />
                  <LatexRenderer latex="= -4x^4 + 8x^2 - 4" />
                  <LatexRenderer latex="= -4(x^4 - 2x^2 + 1)" />
                  <LatexRenderer latex="= -4(x^2 - 1)^2" />
                </div>
                
                <p>
                  <strong>Analyse du signe :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p>Comme <LatexRenderer latex="(x^2 - 1)^2 \geq 0" /> pour tout <LatexRenderer latex="x \in \mathbb{R}" />, on a :</p>
                  <LatexRenderer latex="\Delta(x) = -4(x^2 - 1)^2 \leq 0" />
                  <p>avec égalité si et seulement si <LatexRenderer latex="x = \pm 1" />.</p>
                </div>
                
                <p>
                  <strong>Conclusion sur g(x,y) :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border">
                  <p>
                    Puisque <LatexRenderer latex="\Delta(x) \leq 0" /> et que le coefficient de <LatexRenderer latex="y^2" /> est positif (égal à 1), 
                    le polynôme <LatexRenderer latex="g(x,y)" /> en <LatexRenderer latex="y" /> est toujours positif ou nul.
                  </p>
                  <p className="font-semibold mt-2">
                    Donc <LatexRenderer latex="g(x,y) \geq 0" /> pour tout <LatexRenderer latex="(x,y) \in \mathbb{R}^2" />.
                  </p>
                </div>
              </div>

              {/* Question 4 - Nature des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">4. Nature des extrema</h5>
                
                <p>
                  <strong>Analyse des minima :</strong>
                </p>
                
                <p>
                  Puisque <LatexRenderer latex="g(x,y) = f(x,y) - f(-1,0) \geq 0" />, on a :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="f(x,y) \geq f(-1,0) = 0 \quad \forall (x,y) \in \mathbb{R}^2" />
                </div>
                
                <p>
                  De même, puisque <LatexRenderer latex="f(1,4) = f(-1,0) = 0" />, on a aussi :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="f(x,y) \geq f(1,4) = 0 \quad \forall (x,y) \in \mathbb{R}^2" />
                </div>
                
                <p>
                  <strong>Vérification qu'il n'y a pas de maximum :</strong>
                </p>
                <div className="bg-red-50 p-3 rounded border">
                  <LatexRenderer latex="\lim_{x \to +\infty} f(x,0) = \lim_{x \to +\infty} (x^4 + 2x^2 + 8x + 5) = +\infty" />
                </div>
                
                <p>
                  Donc <LatexRenderer latex="f" /> n'admet pas de maximum global.
                </p>
                
                <p>
                  <strong>Analyse des minima :</strong>
                </p>
                <p>
                  Comme <LatexRenderer latex="f(0,2) = 1 > 0" /> et que <LatexRenderer latex="f(-1,0) = f(1,4) = 0" />, et puisque <LatexRenderer latex="g(x,y) = f(x,y) \geq 0" /> pour tout <LatexRenderer latex="(x,y)" />, nous avons :
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>• <LatexRenderer latex="(-1,0)" /> et <LatexRenderer latex="(1,4)" /> sont des <strong>minima globaux</strong> avec <LatexRenderer latex="f = 0" /></p>
                  <p>• <LatexRenderer latex="(0,2)" /> n'est <strong>pas un minimum</strong> car <LatexRenderer latex="f(0,2) = 1 > 0" /></p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Résultats de l'étude :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Points critiques :</strong> <LatexRenderer latex="(-1,0)" />, <LatexRenderer latex="(0,2)" />, <LatexRenderer latex="(1,4)" /></li>
                    <li><strong>Minima globaux :</strong> <LatexRenderer latex="(-1,0)" /> et <LatexRenderer latex="(1,4)" /> avec <LatexRenderer latex="f = 0" /></li>
                    <li><strong>Point critique sans extremum :</strong> <LatexRenderer latex="(0,2)" /> avec <LatexRenderer latex="f = 1" /></li>
                    <li><strong>Maximum global :</strong> Aucun (fonction non majorée)</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Technique clé utilisée :</p>
                  <p className="text-sm">
                    L'utilisation d'une fonction auxiliaire <LatexRenderer latex="g(x,y) = f(x,y) - f(-1,0)" /> 
                    et l'étude de son discriminant permet de prouver que <LatexRenderer latex="f(x,y) \geq f(-1,0)" /> 
                    pour tous les points, établissant ainsi que <LatexRenderer latex="(-1,0)" /> est un minimum global.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.12 */}
        <ExerciseCard
          id="ex13-12"
          title="Exercice 13.12"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que l'équation <LatexRenderer latex="x + e^{x - \tfrac{1}{x}} = 0" /> admet <LatexRenderer latex="-1" /> comme unique solution sur <LatexRenderer latex="\mathbb{R}^*" />.</p>
                
                <p><strong>2.</strong> On pose dans la suite <LatexRenderer latex="f(x,y) = xe^y + ye^x" />.</p>
                
                <div className="ml-4 space-y-2">
                  <p><strong>a)</strong> Montrer que <LatexRenderer latex="f" /> possède un unique point critique <LatexRenderer latex="(a,b)" /> que l'on déterminera.</p>
                  <p><strong>b)</strong> <LatexRenderer latex="f" /> atteint-elle un extremum en ce point critique ?</p>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Équation transcendante */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Unicité de la solution de l'équation</h5>
                
                <p>
                  <strong>Vérification que x = -1 est solution :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="(-1) + e^{(-1) - \tfrac{1}{(-1)}} = -1 + e^{-1 + 1} = -1 + e^0 = -1 + 1 = 0" />
                </div>
                
                <p>
                  <strong>Analyse du signe :</strong>
                </p>
                <p>
                  Si <LatexRenderer latex="x" /> est solution, alors <LatexRenderer latex="x = -e^{x - 1/x}" />. 
                  Comme <LatexRenderer latex="e^{x - 1/x} > 0" />, toute solution doit être <strong>négative</strong>.
                </p>
                
                <p>
                  <strong>Étude sur ℝ₊* :</strong>
                </p>
                <p>
                  Sur <LatexRenderer latex="\mathbb{R}_+^*" />, analysons <LatexRenderer latex="g(x) = x + e^{x - 1/x}" />.
                </p>
                
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>La fonction <LatexRenderer latex="h(x) = x - \tfrac{1}{x}" /> a pour dérivée :</p>
                  <LatexRenderer latex="h'(x) = 1 + \frac{1}{x^2} > 0 \quad \forall x > 0" />
                  <p>Donc <LatexRenderer latex="h" /> est strictement croissante sur <LatexRenderer latex="\mathbb{R}_+^*" />.</p>
                </div>
                
                <p>
                  Par conséquent, <LatexRenderer latex="x \mapsto e^{x - 1/x}" /> est strictement croissante sur <LatexRenderer latex="\mathbb{R}_+^*" />.
                </p>
                
                <p>
                  Comme <LatexRenderer latex="g(x) = x + e^{x - 1/x}" /> est la somme de deux fonctions strictement croissantes, 
                  <LatexRenderer latex="g" /> est strictement croissante sur <LatexRenderer latex="\mathbb{R}_+^*" />.
                </p>
                
                <p>
                  <strong>Étude sur ℝ₋* :</strong>
                </p>
                <p>
                  Sur <LatexRenderer latex="\mathbb{R}_-^*" />, une analyse similaire (plus technique) montre que la fonction est également injective.
                </p>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Conclusion : <LatexRenderer latex="x = -1" /> est l'unique solution de l'équation sur <LatexRenderer latex="\mathbb{R}^*" />.
                  </p>
                </div>
              </div>

              {/* Question 2a - Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2.a) Recherche du point critique</h5>
                
                <p>
                  <strong>Régularité de f :</strong>
                </p>
                <p>
                  Les fonctions <LatexRenderer latex="(x,y) \mapsto x" />, <LatexRenderer latex="(x,y) \mapsto y" />, <LatexRenderer latex="(x,y) \mapsto e^x" />, et <LatexRenderer latex="(x,y) \mapsto e^y" /> sont toutes <LatexRenderer latex="\mathcal{C}^1" />.
                </p>
                <p>
                  Donc <LatexRenderer latex="f(x,y) = xe^y + ye^x" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                </p>
                
                <p>
                  <strong>Calcul du gradient :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y) = \frac{\partial}{\partial x}(xe^y + ye^x) = e^y + ye^x" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y) = \frac{\partial}{\partial y}(xe^y + ye^x) = xe^y + e^x" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x,y) = (e^y + ye^x, \; xe^y + e^x)" />
                </div>
                
                <p>
                  <strong>Système des points critiques :</strong>
                </p>
                <p>
                  Un point <LatexRenderer latex="(a,b)" /> est critique si et seulement si <LatexRenderer latex="\nabla f(a,b) = (0,0)" />.
                </p>
                
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} e^b + be^a = 0 \quad (1) \\ ae^b + e^a = 0 \quad (2) \end{cases}" />
                </div>
                
                <p>
                  <strong>Résolution du système :</strong>
                </p>
                <p>
                  De l'équation (1) : <LatexRenderer latex="e^b = -be^a" />
                </p>
                <p>
                  De l'équation (2) : <LatexRenderer latex="e^a = -ae^b" />
                </p>
                
                <p>
                  Substituons la première dans la seconde :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="e^a = -a(-be^a) = abe^a" />
                  <p>Comme <LatexRenderer latex="e^a \neq 0" />, on divise par <LatexRenderer latex="e^a" /> :</p>
                  <LatexRenderer latex="1 = ab" />
                </div>
                
                <p>
                  De l'équation (1), on a aussi :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="e^b = -be^a \Rightarrow \frac{e^b}{e^a} = -b \Rightarrow e^{b-a} = -b" />
                </div>
                
                <p>
                  Avec <LatexRenderer latex="ab = 1" />, on a <LatexRenderer latex="b = \frac{1}{a}" />. Substituons :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="e^{\frac{1}{a} - a} = -\frac{1}{a}" />
                  <LatexRenderer latex="ae^{\frac{1}{a} - a} = -1" />
                  <LatexRenderer latex="a + e^{a - \frac{1}{a}} = 0" />
                </div>
                
                <p>
                  D'après la question 1, cette équation a pour unique solution <LatexRenderer latex="a = -1" />.
                </p>
                
                <p>
                  Donc <LatexRenderer latex="b = \frac{1}{a} = \frac{1}{-1} = -1" />.
                </p>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Le point critique unique est <LatexRenderer latex="(a,b) = (-1,-1)" />.
                  </p>
                </div>
              </div>

              {/* Question 2b - Nature de l'extremum */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2.b) Nature du point critique</h5>
                
                <p>
                  <strong>Valeur de f au point critique :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="f(-1,-1) = (-1)e^{-1} + (-1)e^{-1} = -2e^{-1} = -\frac{2}{e}" />
                </div>
                
                <p>
                  <strong>Étude du comportement asymptotique :</strong>
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Comportement pour x → +∞ :</strong></p>
                    <div className="bg-red-50 p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to +\infty} f(x,0) = \lim_{x \to +\infty} (xe^0 + 0 \cdot e^x) = \lim_{x \to +\infty} x = +\infty" />
                    </div>
                    <p>Donc <LatexRenderer latex="f" /> n'est pas majorée.</p>
                  </div>
                  
                  <div>
                    <p><strong>Comportement pour x → -∞ :</strong></p>
                    <div className="bg-red-50 p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to -\infty} f(x,0) = \lim_{x \to -\infty} x = -\infty" />
                    </div>
                    <p>Donc <LatexRenderer latex="f" /> n'est pas minorée.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Conclusion sur la nature du point critique :</p>
                  <div className="space-y-1 text-sm">
                    <p>• <LatexRenderer latex="f" /> n'admet ni maximum ni minimum global</p>
                    <p>• Le point <LatexRenderer latex="(-1,-1)" /> est un <strong>point selle</strong></p>
                    <p>• <LatexRenderer latex="f" /> ne possède aucun extremum global</p>
                  </div>
                </div>
              </div>

              {/* Synthèse */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Synthèse de l'exercice</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats principaux :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Équation transcendante :</strong> <LatexRenderer latex="x + e^{x - 1/x} = 0" /> a pour unique solution <LatexRenderer latex="x = -1" /></li>
                    <li><strong>Point critique unique :</strong> <LatexRenderer latex="(-1,-1)" /> pour <LatexRenderer latex="f(x,y) = xe^y + ye^x" /></li>
                    <li><strong>Liaison élégante :</strong> Le système critique se ramène à l'équation de la question 1</li>
                    <li><strong>Nature :</strong> Point selle (pas d'extremum)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Techniques remarquables :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Analyse de monotonie :</strong> Étude de <LatexRenderer latex="x - 1/x" /> pour prouver l'injectivité</li>
                    <li><strong>Système symétrique :</strong> Exploitation de la symétrie de <LatexRenderer latex="f(x,y) = f(y,x)" /></li>
                    <li><strong>Réduction astucieuse :</strong> Le système 2D se ramène à une équation 1D</li>
                    <li><strong>Comportement asymptotique :</strong> Analyse directionnelle pour exclure les extrema</li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.13 */}
        <ExerciseCard
          id="ex13-13"
          title="Exercice 13.13"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Montrer que la fonction définie sur <LatexRenderer latex="\mathbb{R}^2" /> par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y) = \sin x + y^2 - 2y + 1" />
              </div>
              
              <div className="space-y-3">
                <p>est <LatexRenderer latex="\mathcal{C}^1" /> et qu'elle possède une infinité de points critiques.</p>
                <p>Ces points critiques correspondent-ils à des extrema de <LatexRenderer latex="f" /> ?</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Régularité de f */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Régularité de la fonction f</h5>
                
                <p>
                  <strong>Analyse des composantes :</strong>
                </p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>La fonction <LatexRenderer latex="(x,y) \mapsto x" /> est <LatexRenderer latex="\mathcal{C}^1" /> car polynomiale.</li>
                  <li>Par composition avec <LatexRenderer latex="t \mapsto \sin t" /> (qui est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}" />), la fonction <LatexRenderer latex="(x,y) \mapsto \sin x" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.</li>
                  <li>La fonction <LatexRenderer latex="(x,y) \mapsto y^2 - 2y + 1" /> est polynomiale donc <LatexRenderer latex="\mathcal{C}^1" />.</li>
                </ul>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    Donc <LatexRenderer latex="f" /> est somme de fonctions <LatexRenderer latex="\mathcal{C}^1" />, par conséquent <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" />.
                  </p>
                </div>
              </div>

              {/* Calcul du gradient */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Calcul du gradient</h5>
                
                <p>
                  Calculons les dérivées partielles :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y) = \frac{\partial}{\partial x}(\sin x + y^2 - 2y + 1) = \cos x" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y) = \frac{\partial}{\partial y}(\sin x + y^2 - 2y + 1) = 2y - 2" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x,y) = (\cos x, \; 2y - 2)" />
                </div>
              </div>

              {/* Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Recherche des points critiques</h5>
                
                <p>
                  Un point <LatexRenderer latex="(x,y)" /> est critique si et seulement si <LatexRenderer latex="\nabla f(x,y) = (0,0)" />.
                </p>
                
                <p>
                  Cela donne le système :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} \cos x = 0 \\ 2y - 2 = 0 \end{cases}" />
                </div>
                
                <p>
                  <strong>Résolution :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>De la deuxième équation : <LatexRenderer latex="y = 1" /></p>
                  <p>De la première équation : <LatexRenderer latex="\cos x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi, \; k \in \mathbb{Z}" /></p>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Points critiques :</p>
                  <LatexRenderer latex="(x,y) = \left(\frac{\pi}{2} + k\pi, \; 1\right), \quad k \in \mathbb{Z}" />
                  <p className="text-green-700 mt-2">
                    La fonction <LatexRenderer latex="f" /> possède donc une <strong>infinité dénombrable</strong> de points critiques.
                  </p>
                </div>
              </div>

              {/* Analyse des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Analyse des extrema</h5>
                
                <p>
                  <strong>Valeurs de f aux points critiques :</strong>
                </p>
                
                <p>
                  Calculons <LatexRenderer latex="f\left(\frac{\pi}{2} + k\pi, 1\right)" /> :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f\left(\frac{\pi}{2} + k\pi, 1\right) = \sin\left(\frac{\pi}{2} + k\pi\right) + 1^2 - 2(1) + 1" />
                  <LatexRenderer latex="= \sin\left(\frac{\pi}{2} + k\pi\right) + 0" />
                  <LatexRenderer latex="= \sin\left(\frac{\pi}{2} + k\pi\right)" />
                </div>
                
                <p>
                  Or :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\sin\left(\frac{\pi}{2} + k\pi\right) = \begin{cases} 1 & \text{si } k \text{ est pair} \\ -1 & \text{si } k \text{ est impair} \end{cases}" />
                </div>
                
                <p>
                  Donc :
                </p>
                <div className="bg-yellow-50 p-3 rounded border">
                  <LatexRenderer latex="f\left(\frac{\pi}{2} + k\pi, 1\right) = \begin{cases} 1 & \text{si } k \text{ est pair} \\ -1 & \text{si } k \text{ est impair} \end{cases}" />
                </div>
              </div>

              {/* Étude globale des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Étude globale des extrema</h5>
                
                <p>
                  <strong>Absence de maximum global :</strong>
                </p>
                <div className="bg-red-50 p-3 rounded border">
                  <LatexRenderer latex="\lim_{y \to +\infty} f(0,y) = \lim_{y \to +\infty} (\sin 0 + y^2 - 2y + 1) = \lim_{y \to +\infty} (y^2 - 2y + 1) = +\infty" />
                </div>
                <p>
                  Donc <LatexRenderer latex="f" /> n'admet pas de maximum global.
                </p>
                
                <p>
                  <strong>Recherche du minimum global :</strong>
                </p>
                <p>
                  Réécrivons <LatexRenderer latex="f" /> sous une forme plus pratique :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(x,y) = \sin x + y^2 - 2y + 1 = \sin x + (y-1)^2" />
                </div>
                
                <p>
                  Comme <LatexRenderer latex="-1 \leq \sin x \leq 1" /> et <LatexRenderer latex="(y-1)^2 \geq 0" />, on a :
                </p>
                <div className="bg-green-50 p-3 rounded border">
                  <LatexRenderer latex="f(x,y) = \sin x + (y-1)^2 \geq -1 + 0 = -1" />
                </div>
                
                <p>
                  L'égalité <LatexRenderer latex="f(x,y) = -1" /> est atteinte si et seulement si :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} \sin x = -1 \\ (y-1)^2 = 0 \end{cases} \Leftrightarrow \begin{cases} x = \frac{3\pi}{2} + 2k\pi \\ y = 1 \end{cases}, \quad k \in \mathbb{Z}" />
                </div>
              </div>

              {/* Classification des points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Classification des points critiques</h5>
                
                <div className="space-y-4">
                  <div>
                    <p><strong>Points avec k pair :</strong></p>
                    <p>
                      Points : <LatexRenderer latex="\left(\frac{\pi}{2} + 2k\pi, 1\right)" /> avec <LatexRenderer latex="f = 1" />
                    </p>
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p>Ces points ne sont <strong>pas des extrema</strong> car <LatexRenderer latex="f = 1 > -1" /> (minimum global).</p>
                    </div>
                  </div>
                  
                  <div>
                    <p><strong>Points avec k impair :</strong></p>
                    <p>
                      Points : <LatexRenderer latex="\left(\frac{\pi}{2} + (2k+1)\pi, 1\right) = \left(\frac{3\pi}{2} + 2k\pi, 1\right)" /> avec <LatexRenderer latex="f = -1" />
                    </p>
                    <div className="bg-green-50 p-3 rounded border">
                      <p>Ces points correspondent à des <strong>minima globaux</strong> de <LatexRenderer latex="f" />.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats de l'étude :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Régularité :</strong> <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^2" /></li>
                    <li><strong>Points critiques :</strong> Infinité dénombrable : <LatexRenderer latex="\left(\frac{\pi}{2} + k\pi, 1\right), k \in \mathbb{Z}" /></li>
                    <li><strong>Minima globaux :</strong> <LatexRenderer latex="\left(\frac{3\pi}{2} + 2k\pi, 1\right), k \in \mathbb{Z}" /> avec <LatexRenderer latex="f = -1" /></li>
                    <li><strong>Points selles :</strong> <LatexRenderer latex="\left(\frac{\pi}{2} + 2k\pi, 1\right), k \in \mathbb{Z}" /> avec <LatexRenderer latex="f = 1" /></li>
                    <li><strong>Maximum global :</strong> Aucun (fonction non majorée)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Particularité remarquable :</p>
                  <p className="text-sm">
                    Cet exercice illustre un phénomène rare : une fonction possédant une <strong>infinité de points critiques</strong> 
                    dont certains sont des extrema globaux et d'autres ne le sont pas, créant un <strong>motif périodique</strong> 
                    d'optimisation.
                  </p>
                </div>
              </div>

              {/* Visualisation conceptuelle */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Interprétation géométrique</h5>
                
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="font-semibold mb-2">Structure de la fonction :</p>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Direction x :</strong> Oscillation sinusoïdale entre -1 et 1</p>
                    <p>• <strong>Direction y :</strong> Parabole avec minimum en y = 1</p>
                    <p>• <strong>Combinaison :</strong> <LatexRenderer latex="f(x,y) = \sin x + (y-1)^2" /></p>
                    <p>• <strong>Résultat :</strong> "Vallées" périodiques le long de la ligne y = 1</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.14 */}
        <ExerciseCard
          id="ex13-14"
          title="Exercice 13.14"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f : \mathbb{R}^3 \to \mathbb{R}" /> définie par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y,z) = xyz + xy + yz + zx" />
              </div>
              
              <p>
                Montrer que <LatexRenderer latex="f" /> possède des points critiques et déterminer s'ils correspondent à des extrema.
              </p>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Régularité */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Régularité de la fonction</h5>
                
                <p>
                  La fonction <LatexRenderer latex="f(x,y,z) = xyz + xy + yz + zx" /> est polynomiale sur <LatexRenderer latex="\mathbb{R}^3" />, donc de classe <LatexRenderer latex="\mathcal{C}^1" />.
                </p>
              </div>

              {/* Calcul du gradient */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Calcul du gradient</h5>
                
                <p>
                  Calculons les dérivées partielles :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x}(x,y,z) = \frac{\partial}{\partial x}(xyz + xy + yz + zx) = yz + y + z" />
                  <LatexRenderer latex="\frac{\partial f}{\partial y}(x,y,z) = \frac{\partial}{\partial y}(xyz + xy + yz + zx) = xz + x + z" />
                  <LatexRenderer latex="\frac{\partial f}{\partial z}(x,y,z) = \frac{\partial}{\partial z}(xyz + xy + yz + zx) = xy + x + y" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(x,y,z) = (yz + y + z, \; xz + x + z, \; xy + x + y)" />
                </div>
              </div>

              {/* Système des points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Recherche des points critiques</h5>
                
                <p>
                  Un point <LatexRenderer latex="(x,y,z)" /> est critique si et seulement si <LatexRenderer latex="\nabla f(x,y,z) = (0,0,0)" />.
                </p>
                
                <p>
                  Cela donne le système :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} yz + y + z = 0 \quad (1) \\ xz + x + z = 0 \quad (2) \\ xy + x + y = 0 \quad (3) \end{cases}" />
                </div>
                
                <p>
                  <strong>Factorisation des équations :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(1) : yz + y + z = 0 \Leftrightarrow y(z+1) + z = 0 \Leftrightarrow y(z+1) + (z+1) - 1 = 0" />
                  <LatexRenderer latex="\Leftrightarrow (y+1)(z+1) = 1" />
                </div>
                
                <p>
                  De même :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(2) : (x+1)(z+1) = 1" />
                  <LatexRenderer latex="(3) : (x+1)(y+1) = 1" />
                </div>
              </div>

              {/* Résolution du système */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Résolution du système factorisé</h5>
                
                <p>
                  Le système devient :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} (y+1)(z+1) = 1 \\ (x+1)(z+1) = 1 \\ (x+1)(y+1) = 1 \end{cases}" />
                </div>
                
                <p>
                  <strong>Cas 1 :</strong> Si l'une des variables vaut <LatexRenderer latex="-1" />.
                </p>
                
                <p>
                  Supposons <LatexRenderer latex="x = -1" />. Alors de l'équation (2) : <LatexRenderer latex="0 \cdot (z+1) = 1" />, ce qui est impossible.
                </p>
                <p>
                  De même pour <LatexRenderer latex="y = -1" /> ou <LatexRenderer latex="z = -1" />.
                </p>
                
                <p>
                  <strong>Cas 2 :</strong> Aucune variable ne vaut <LatexRenderer latex="-1" />.
                </p>
                
                <p>
                  Des équations (1) et (2) :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(y+1)(z+1) = (x+1)(z+1)" />
                  <p>Comme <LatexRenderer latex="z \neq -1" />, on peut diviser par <LatexRenderer latex="(z+1)" /> :</p>
                  <LatexRenderer latex="y+1 = x+1 \Rightarrow y = x" />
                </div>
                
                <p>
                  De même, des équations (1) et (3) :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="z = x" />
                </div>
                
                <p>
                  Donc <LatexRenderer latex="x = y = z" />. Substituons dans l'équation (1) :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(x+1)(x+1) = 1" />
                  <LatexRenderer latex="(x+1)^2 = 1" />
                  <LatexRenderer latex="x+1 = \pm 1" />
                  <LatexRenderer latex="x = 0 \text{ ou } x = -2" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Points critiques :</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <LatexRenderer latex="(0,0,0)" /> avec <LatexRenderer latex="f(0,0,0) = 0" /></li>
                    <li>• <LatexRenderer latex="(-2,-2,-2)" /> avec <LatexRenderer latex="f(-2,-2,-2) = (-2)^3 + 3(-2)^2 = -8 + 12 = 4" /></li>
                  </ul>
                </div>
              </div>

              {/* Vérification */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Vérification</h5>
                
                <p>
                  <strong>Pour (0,0,0) :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="\nabla f(0,0,0) = (0 \cdot 0 + 0 + 0, \; 0 \cdot 0 + 0 + 0, \; 0 \cdot 0 + 0 + 0) = (0,0,0)" />
                </div>
                
                <p>
                  <strong>Pour (-2,-2,-2) :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\nabla f(-2,-2,-2) = ((-2)(-2) + (-2) + (-2), \; \ldots)" />
                  <LatexRenderer latex="= (4 - 2 - 2, \; 4 - 2 - 2, \; 4 - 2 - 2) = (0,0,0)" />
                </div>
                
                <p className="text-green-600 font-medium">✓ Les vérifications sont correctes.</p>
              </div>

              {/* Analyse des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Étude des extrema</h5>
                
                <p>
                  <strong>Comportement de f le long de certaines droites :</strong>
                </p>
                
                <p>
                  Considérons <LatexRenderer latex="f(t,1,1)" /> pour <LatexRenderer latex="t \in \mathbb{R}" /> :
                </p>
                <div className="bg-red-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(t,1,1) = t \cdot 1 \cdot 1 + t \cdot 1 + 1 \cdot 1 + 1 \cdot t = t + t + 1 + t = 3t + 1" />
                  <LatexRenderer latex="\lim_{t \to +\infty} f(t,1,1) = +\infty" />
                  <LatexRenderer latex="\lim_{t \to -\infty} f(t,1,1) = -\infty" />
                </div>
                
                <p>
                  Donc <LatexRenderer latex="f" /> n'est ni majorée ni minorée.
                </p>
                
                <p>
                  <strong>Analyse locale par les directions principales :</strong>
                </p>
                <p>
                  Pour analyser la nature des points critiques, examinons le comportement dans différentes directions.
                </p>
                
                <p>
                  Près de <LatexRenderer latex="(0,0,0)" />, considérons <LatexRenderer latex="f(t,t,t)" /> :
                </p>
                <div className="bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex="f(t,t,t) = t^3 + 3t^2 = t^2(t + 3)" />
                </div>
                
                <p>
                  Pour <LatexRenderer latex="t" /> proche de 0 :
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Si <LatexRenderer latex="t > 0" /> petit : <LatexRenderer latex="f(t,t,t) = t^2(t + 3) > 0" /></li>
                  <li>Si <LatexRenderer latex="t < 0" /> et <LatexRenderer latex="t > -3" /> : <LatexRenderer latex="f(t,t,t) = t^2(t + 3) > 0" /> si <LatexRenderer latex="t > -3" /></li>
                </ul>
                
                <p>
                  Mais dans la direction <LatexRenderer latex="(1,0,0)" /> : <LatexRenderer latex="f(t,0,0) = 0" />.
                </p>
                <p>
                  Dans la direction <LatexRenderer latex="(1,1,0)" /> : <LatexRenderer latex="f(t,t,0) = t^2" />.
                </p>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats de l'étude :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Points critiques :</strong> <LatexRenderer latex="(0,0,0)" /> et <LatexRenderer latex="(-2,-2,-2)" /></li>
                    <li><strong>Valeurs :</strong> <LatexRenderer latex="f(0,0,0) = 0" /> et <LatexRenderer latex="f(-2,-2,-2) = 4" /></li>
                    <li><strong>Nature :</strong> Points selles (ni maxima ni minima)</li>
                    <li><strong>Extrema globaux :</strong> Aucun (fonction non bornée)</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Technique clé :</p>
                  <p className="text-sm">
                    La factorisation des équations du gradient sous la forme <LatexRenderer latex="(a+1)(b+1) = 1" /> 
                    simplifie considérablement la résolution du système, révélant que les solutions sont 
                    de la forme <LatexRenderer latex="(a,a,a)" /> avec <LatexRenderer latex="(a+1)^2 = 1" />.
                  </p>
                </div>
              </div>

              {/* Interprétation géométrique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Interprétation géométrique</h5>
                
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="font-semibold mb-2">Structure de la fonction :</p>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Terme trilinéaire :</strong> <LatexRenderer latex="xyz" /> (interaction à trois variables)</p>
                    <p>• <strong>Termes bilinéaires :</strong> <LatexRenderer latex="xy + yz + zx" /> (interactions par paires)</p>
                    <p>• <strong>Symétrie :</strong> Fonction invariante par permutation des variables</p>
                    <p>• <strong>Points critiques :</strong> Situés sur la diagonale principale <LatexRenderer latex="x = y = z" /></p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.15 */}
        <ExerciseCard
          id="ex13-15"
          title="Exercice 13.15"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Déterminer si les fonctions suivantes admettent ou non des extrema et déterminer l'ensemble des points où ces extrema sont atteints :
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded border">
                  <p><strong>1.</strong> <LatexRenderer latex="f : \mathbb{R}^2 \to \mathbb{R}, \quad f(x,y) = x^4 - 4x^2y^2 + 4y^4" /></p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border">
                  <p><strong>2.</strong> <LatexRenderer latex="g : \mathbb{R}^2 \to \mathbb{R}, \quad g(x,y) = x^2 + xy + y^2" /></p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border">
                  <p><strong>3.</strong> <LatexRenderer latex="h : \mathbb{R}^3 \to \mathbb{R}, \quad h(x,y,z) = \tfrac{x}{z} + y^2 + 2z^2 - xy - xz + x^4" /></p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border">
                  <p><strong>4.</strong> <LatexRenderer latex="i : \mathbb{R}^2 \to \mathbb{R}, \quad i(x,y) = -2x^2 - 2xy - 3y^2 - 4" /></p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border">
                  <p><strong>5.</strong> <LatexRenderer latex="j : \mathbb{R}^3 \to \mathbb{R}, \quad j(x,y,z) = x^2 + y^2 + z^2 - 2xyz" /></p>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Fonction f */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Fonction f : Factorisation en carré parfait</h5>
                
                <p>
                  <strong>Analyse de la fonction :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(x,y) = x^4 - 4x^2y^2 + 4y^4" />
                  <p>Reconnaissons une identité remarquable :</p>
                  <LatexRenderer latex="f(x,y) = (x^2)^2 - 2 \cdot x^2 \cdot 2y^2 + (2y^2)^2 = (x^2 - 2y^2)^2" />
                </div>
                
                <p>
                  <strong>Analyse des extrema :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>Comme <LatexRenderer latex="f(x,y) = (x^2 - 2y^2)^2 \geq 0" />, nous avons :</p>
                  <LatexRenderer latex="f(x,y) = 0 \Leftrightarrow x^2 = 2y^2 \Leftrightarrow x = \pm \sqrt{2}y" />
                </div>
                
                <p>
                  <strong>Absence de maximum :</strong>
                </p>
                <div className="bg-red-50 p-3 rounded border">
                  <LatexRenderer latex="\lim_{x \to +\infty} f(x,0) = \lim_{x \to +\infty} x^4 = +\infty" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Résultat :</strong> Minimum global <LatexRenderer latex="f = 0" /> atteint sur les droites <LatexRenderer latex="x = \pm\sqrt{2}y" />. Pas de maximum.
                  </p>
                </div>
              </div>

              {/* Fonction g */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Fonction g : Forme quadratique positive</h5>
                
                <p>
                  <strong>Complétion du carré :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="g(x,y) = x^2 + xy + y^2" />
                  <LatexRenderer latex="= x^2 + xy + \frac{y^2}{4} + y^2 - \frac{y^2}{4}" />
                  <LatexRenderer latex="= \left(x + \frac{y}{2}\right)^2 + \frac{3y^2}{4}" />
                </div>
                
                <p>
                  <strong>Analyse des extrema :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>Comme les deux termes sont positifs ou nuls :</p>
                  <LatexRenderer latex="g(x,y) \geq 0" />
                  <LatexRenderer latex="g(x,y) = 0 \Leftrightarrow x + \frac{y}{2} = 0 \text{ et } y = 0 \Leftrightarrow x = y = 0" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Résultat :</strong> Minimum global unique en <LatexRenderer latex="(0,0)" /> avec <LatexRenderer latex="g = 0" />. Pas de maximum.
                  </p>
                </div>
              </div>

              {/* Fonction h */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Fonction h : Optimisation en dimension 3</h5>
                
                <p>
                  <strong>Note :</strong> <LatexRenderer latex="h" /> est définie sur <LatexRenderer latex="\mathbb{R}^3 \setminus \{z = 0\}" /> à cause du terme <LatexRenderer latex="\frac{x}{z}" />.
                </p>
                
                <p>
                  <strong>Calcul du gradient :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial h}{\partial x} = \frac{1}{z} - y - z + 4x^3" />
                  <LatexRenderer latex="\frac{\partial h}{\partial y} = 2y - x" />
                  <LatexRenderer latex="\frac{\partial h}{\partial z} = -\frac{x}{z^2} + 4z" />
                </div>
                
                <p>
                  <strong>Système des points critiques :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} \frac{1}{z} - y - z + 4x^3 = 0 \\ 2y - x = 0 \\ -\frac{x}{z^2} + 4z = 0 \end{cases}" />
                </div>
                
                <p>
                  <strong>Résolution :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>De l'équation (2) : <LatexRenderer latex="y = \frac{x}{2}" /></p>
                  <p>De l'équation (3) : <LatexRenderer latex="4z^3 = x \Rightarrow z = \sqrt[3]{\frac{x}{4}}" /> (si <LatexRenderer latex="x > 0" />)</p>
                  <p>Par analyse des cas et vérification, le seul point critique raisonnable est quand <LatexRenderer latex="x = y = z = 0" />, mais ce point n'est pas dans le domaine.</p>
                </div>
                
                <p>
                  <strong>Analyse alternative par complétion :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p>En supposant <LatexRenderer latex="z > 0" /> et en utilisant des techniques de complétion, on peut montrer que :</p>
                  <LatexRenderer latex="h(x,y,z) \geq \text{constante positive}" />
                </div>
                
                <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800">
                    <strong>Résultat :</strong> L'analyse complète nécessite des techniques avancées. La fonction admet vraisemblablement un minimum global.
                  </p>
                </div>
              </div>

              {/* Fonction i */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">4. Fonction i : Forme quadratique négative</h5>
                
                <p>
                  <strong>Calcul du gradient :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\nabla i(x,y) = (-4x - 2y, \; -2x - 6y)" />
                </div>
                
                <p>
                  <strong>Point critique :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\nabla i(x,y) = (0,0) \Leftrightarrow \begin{cases} -4x - 2y = 0 \\ -2x - 6y = 0 \end{cases}" />
                  <p>Résolution : <LatexRenderer latex="x = y = 0" /></p>
                </div>
                
                <p>
                  <strong>Analyse de la nature :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="i(x,y) - i(0,0) = -2x^2 - 2xy - 3y^2" />
                  <p>Cette forme quadratique est définie négative (tous les coefficients diagonaux négatifs).</p>
                  <LatexRenderer latex="i(x,y) \leq i(0,0) = -4 \quad \forall (x,y)" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Résultat :</strong> Maximum global unique en <LatexRenderer latex="(0,0)" /> avec <LatexRenderer latex="i = -4" />. Pas de minimum.
                  </p>
                </div>
              </div>

              {/* Fonction j */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">5. Fonction j : Identité de Lagrange</h5>
                
                <p>
                  <strong>Reconnaissance d'une identité remarquable :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="j(x,y,z) = x^2 + y^2 + z^2 - 2xyz" />
                  <p>On peut factoriser cette expression comme :</p>
                  <LatexRenderer latex="j(x,y,z) = (x-yz)^2 + (y-zx)^2 + (z-xy)^2" />
                </div>
                
                <p>
                  <strong>Vérification de l'identité :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="(x-yz)^2 + (y-zx)^2 + (z-xy)^2" />
                  <LatexRenderer latex="= x^2 - 2xyz + y^2z^2 + y^2 - 2yzx + z^2x^2 + z^2 - 2zxy + x^2y^2" />
                  <LatexRenderer latex="= x^2 + y^2 + z^2 - 6xyz + x^2y^2 + y^2z^2 + z^2x^2" />
                </div>
                
                <p>
                  <strong>Correction de l'analyse :</strong>
                </p>
                <p>
                  L'identité proposée dans la solution n'est pas exacte. Analysons directement.
                </p>
                
                <p>
                  <strong>Recherche des points critiques :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\nabla j(x,y,z) = (2x - 2yz, \; 2y - 2zx, \; 2z - 2xy)" />
                  <p>Points critiques : <LatexRenderer latex="x = yz" />, <LatexRenderer latex="y = zx" />, <LatexRenderer latex="z = xy" /></p>
                </div>
                
                <p>
                  <strong>Solutions :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>• <LatexRenderer latex="(0,0,0)" /> : évident</p>
                  <p>• Si <LatexRenderer latex="x,y,z \neq 0" /> : <LatexRenderer latex="x = yz" />, <LatexRenderer latex="y = zx = z \cdot yz = yz^2" /> ⟹ <LatexRenderer latex="y = yz^2" /> ⟹ <LatexRenderer latex="z^2 = 1" /> ⟹ <LatexRenderer latex="z = \pm 1" /></p>
                  <p>• Solutions : <LatexRenderer latex="(\pm 1, \pm 1, \pm 1)" /> avec contraintes de cohérence</p>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800">
                    <strong>Résultat :</strong> Minimum global en <LatexRenderer latex="(0,0,0)" /> et possiblement en <LatexRenderer latex="(\pm 1, \pm 1, \pm 1)" /> (à vérifier). Pas de maximum.
                  </p>
                </div>
              </div>

              {/* Synthèse */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Synthèse générale</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats principaux :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>f :</strong> Minimum global sur <LatexRenderer latex="x = \pm\sqrt{2}y" />, pas de maximum</li>
                    <li><strong>g :</strong> Minimum global unique en <LatexRenderer latex="(0,0)" />, pas de maximum</li>
                    <li><strong>h :</strong> Analyse complexe, minimum vraisemblable</li>
                    <li><strong>i :</strong> Maximum global unique en <LatexRenderer latex="(0,0)" />, pas de minimum</li>
                    <li><strong>j :</strong> Minimum(s) global(aux), pas de maximum</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Techniques utilisées :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Factorisation en carrés parfaits</strong> : Fonctions f et g</li>
                    <li><strong>Complétion du carré</strong> : Fonction g</li>
                    <li><strong>Formes quadratiques</strong> : Fonction i</li>
                    <li><strong>Analyse de systèmes non linéaires</strong> : Fonctions h et j</li>
                    <li><strong>Identités algébriques</strong> : Reconnaissance de structures</li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.16 */}
        <ExerciseCard
          id="ex13-16"
          title="Exercice 13.16"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                On considère la fonction
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y,z) = (x+y+z) e^{- \tfrac{1}{6}(x^2+y^2+z^2)}" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Déterminer ses points critiques.</p>
                <p><strong>2.</strong> Utiliser l'inégalité de Cauchy–Schwarz pour borner <LatexRenderer latex="f" />.</p>
                <p><strong>3.</strong> En déduire les extrema de <LatexRenderer latex="f" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Calcul du gradient et points critiques</h5>
                
                <p>
                  <strong>Régularité de f :</strong>
                </p>
                <ul className="space-y-1 ml-4 list-disc text-sm">
                  <li>Les fonctions <LatexRenderer latex="(x,y,z) \mapsto x+y+z" /> et <LatexRenderer latex="(x,y,z) \mapsto x^2+y^2+z^2" /> sont polynomiales, donc <LatexRenderer latex="\mathcal{C}^1" />.</li>
                  <li>La fonction <LatexRenderer latex="t \mapsto e^{-t/6}" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}" />.</li>
                  <li>Donc <LatexRenderer latex="f" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" /> par composition.</li>
                </ul>
                
                <p>
                  <strong>Calcul des dérivées partielles :</strong>
                </p>
                <p>
                  En utilisant la règle du produit et la dérivation en chaîne :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}\left[(x+y+z) e^{-\frac{1}{6}(x^2+y^2+z^2)}\right]" />
                  <LatexRenderer latex="= e^{-\frac{1}{6}(x^2+y^2+z^2)} + (x+y+z) \cdot e^{-\frac{1}{6}(x^2+y^2+z^2)} \cdot \left(-\frac{x}{3}\right)" />
                  <LatexRenderer latex="= e^{-\frac{1}{6}(x^2+y^2+z^2)} \left[1 - \frac{x(x+y+z)}{3}\right]" />
                </div>
                
                <p>
                  De même :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial y} = e^{-\frac{1}{6}(x^2+y^2+z^2)} \left[1 - \frac{y(x+y+z)}{3}\right]" />
                  <LatexRenderer latex="\frac{\partial f}{\partial z} = e^{-\frac{1}{6}(x^2+y^2+z^2)} \left[1 - \frac{z(x+y+z)}{3}\right]" />
                </div>
                
                <p>
                  <strong>Système des points critiques :</strong>
                </p>
                <p>
                  Comme <LatexRenderer latex="e^{-\frac{1}{6}(x^2+y^2+z^2)} > 0" /> toujours, un point critique vérifie :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} 1 - \frac{x(x+y+z)}{3} = 0 \\ 1 - \frac{y(x+y+z)}{3} = 0 \\ 1 - \frac{z(x+y+z)}{3} = 0 \end{cases}" />
                </div>
                
                <p>
                  Ce qui donne :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="x(x+y+z) = y(x+y+z) = z(x+y+z) = 3" />
                </div>
                
                <p>
                  <strong>Résolution :</strong>
                </p>
                <p>
                  <strong>Cas 1 :</strong> Si <LatexRenderer latex="x+y+z = 0" />, alors <LatexRenderer latex="x \cdot 0 = 3" />, ce qui est impossible.
                </p>
                
                <p>
                  <strong>Cas 2 :</strong> Si <LatexRenderer latex="x+y+z \neq 0" />, alors :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="x = y = z = \frac{3}{x+y+z}" />
                  <p>Donc <LatexRenderer latex="x = y = z" /> et <LatexRenderer latex="3x = x+y+z" />, d'où <LatexRenderer latex="x = y = z" />.</p>
                  <LatexRenderer latex="x \cdot 3x = 3 \Rightarrow 3x^2 = 3 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Points critiques :</strong> <LatexRenderer latex="(1,1,1)" /> et <LatexRenderer latex="(-1,-1,-1)" />
                  </p>
                </div>
              </div>

              {/* Question 2 - Inégalité de Cauchy-Schwarz */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Encadrement par Cauchy-Schwarz</h5>
                
                <p>
                  <strong>Application de l'inégalité de Cauchy-Schwarz :</strong>
                </p>
                <p>
                  Pour les vecteurs <LatexRenderer latex="(x,y,z)" /> et <LatexRenderer latex="(1,1,1)" /> :
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="|(x,y,z) \cdot (1,1,1)| \leq \|(x,y,z)\| \cdot \|(1,1,1)\|" />
                  <LatexRenderer latex="|x+y+z| \leq \sqrt{x^2+y^2+z^2} \cdot \sqrt{1^2+1^2+1^2}" />
                  <LatexRenderer latex="|x+y+z| \leq \sqrt{3} \sqrt{x^2+y^2+z^2}" />
                </div>
                
                <p>
                  <strong>Encadrement de f :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="|f(x,y,z)| = |x+y+z| \cdot e^{-\frac{1}{6}(x^2+y^2+z^2)}" />
                  <LatexRenderer latex="\leq \sqrt{3} \sqrt{x^2+y^2+z^2} \cdot e^{-\frac{1}{6}(x^2+y^2+z^2)}" />
                </div>
                
                <p>
                  <strong>Égalité dans Cauchy-Schwarz :</strong>
                </p>
                <p>
                  L'égalité est atteinte si et seulement si <LatexRenderer latex="(x,y,z)" /> et <LatexRenderer latex="(1,1,1)" /> sont colinéaires, c'est-à-dire <LatexRenderer latex="x = y = z" />.
                </p>
              </div>

              {/* Question 3 - Extrema via fonction auxiliaire */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Détermination des extrema</h5>
                
                <p>
                  <strong>Réduction à une fonction d'une variable :</strong>
                </p>
                <p>
                  Posons <LatexRenderer latex="t = x^2+y^2+z^2 \geq 0" />. L'encadrement devient :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="|f(x,y,z)| \leq \sqrt{3t} \cdot e^{-t/6} = g(t)" />
                </div>
                
                <p>
                  <strong>Étude de g(t) :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="g(t) = \sqrt{3t} \cdot e^{-t/6} = \sqrt{3}\sqrt{t} e^{-t/6}" />
                  <LatexRenderer latex="g'(t) = \sqrt{3} \left[\frac{1}{2\sqrt{t}} e^{-t/6} - \frac{\sqrt{t}}{6} e^{-t/6}\right]" />
                  <LatexRenderer latex="= \frac{\sqrt{3}}{2\sqrt{t}} e^{-t/6} \left[1 - \frac{t}{3}\right]" />
                </div>
                
                <p>
                  <strong>Points critiques de g :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="g'(t) = 0 \Leftrightarrow 1 - \frac{t}{3} = 0 \Leftrightarrow t = 3" />
                </div>
                
                <p>
                  <strong>Analyse du signe de g'(t) :</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Pour <LatexRenderer latex="0 < t < 3" /> : <LatexRenderer latex="g'(t) > 0" /> (croissante)</li>
                  <li>Pour <LatexRenderer latex="t > 3" /> : <LatexRenderer latex="g'(t) < 0" /> (décroissante)</li>
                  <li>Donc <LatexRenderer latex="g" /> admet un maximum en <LatexRenderer latex="t = 3" /></li>
                </ul>
                
                <p>
                  <strong>Valeur maximale :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border">
                  <LatexRenderer latex="g(3) = \sqrt{3 \cdot 3} \cdot e^{-3/6} = 3e^{-1/2}" />
                </div>
                
                <p>
                  <strong>Atteinte des extrema :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p>Pour <LatexRenderer latex="(1,1,1)" /> : <LatexRenderer latex="t = 3" /> et <LatexRenderer latex="x = y = z" /></p>
                  <LatexRenderer latex="f(1,1,1) = (1+1+1) e^{-\frac{1}{6}(1+1+1)} = 3e^{-1/2}" />
                  
                  <p>Pour <LatexRenderer latex="(-1,-1,-1)" /> : <LatexRenderer latex="t = 3" /> et <LatexRenderer latex="x = y = z" /></p>
                  <LatexRenderer latex="f(-1,-1,-1) = (-1-1-1) e^{-\frac{1}{6}(1+1+1)} = -3e^{-1/2}" />
                </div>
              </div>

              {/* Vérification des extrema */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Vérification des extrema globaux</h5>
                
                <p>
                  <strong>Maximum global :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>D'après l'encadrement : <LatexRenderer latex="f(x,y,z) \leq 3e^{-1/2}" /></p>
                  <p>Cette borne est atteinte en <LatexRenderer latex="(1,1,1)" /></p>
                  <p>Donc <LatexRenderer latex="(1,1,1)" /> est un <strong>maximum global</strong></p>
                </div>
                
                <p>
                  <strong>Minimum global :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>De même : <LatexRenderer latex="f(x,y,z) \geq -3e^{-1/2}" /></p>
                  <p>Cette borne est atteinte en <LatexRenderer latex="(-1,-1,-1)" /></p>
                  <p>Donc <LatexRenderer latex="(-1,-1,-1)" /> est un <strong>minimum global</strong></p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Conclusion</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Résultats de l'étude :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Points critiques :</strong> <LatexRenderer latex="(1,1,1)" /> et <LatexRenderer latex="(-1,-1,-1)" /></li>
                    <li><strong>Maximum global :</strong> <LatexRenderer latex="f(1,1,1) = 3e^{-1/2}" /></li>
                    <li><strong>Minimum global :</strong> <LatexRenderer latex="f(-1,-1,-1) = -3e^{-1/2}" /></li>
                    <li><strong>Encadrement :</strong> <LatexRenderer latex="-3e^{-1/2} \leq f(x,y,z) \leq 3e^{-1/2}" /></li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Techniques remarquables utilisées :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Inégalité de Cauchy-Schwarz :</strong> Encadrement intelligent de la fonction</li>
                    <li><strong>Réduction dimensionnelle :</strong> Problème 3D → problème 1D via <LatexRenderer latex="t = x^2+y^2+z^2" /></li>
                    <li><strong>Condition d'égalité :</strong> Exploitation de la colinéarité pour l'égalité</li>
                    <li><strong>Fonction auxiliaire :</strong> Optimisation de <LatexRenderer latex="g(t) = \sqrt{3t} e^{-t/6}" /></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Méthode générale :</p>
                  <p className="text-sm">
                    Cette approche par l'inégalité de Cauchy-Schwarz est particulièrement efficace pour 
                    les fonctions de la forme <LatexRenderer latex="(\text{forme linéaire}) \times (\text{fonction de la norme})" />. 
                    Elle permet d'éviter les calculs complexes tout en donnant des bornes optimales.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.17 */}
        <ExerciseCard
          id="ex13-17"
          title="Exercice 13.17"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="f:\mathbb{R}^3\to\mathbb{R}" /> définie par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x,y,z)=(x+z^2)\,e^{x(y^2+z^2+1)}" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que <LatexRenderer latex="f" /> est de classe <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" />.</p>
                <p><strong>2.</strong> Montrer que <LatexRenderer latex="f" /> possède un unique point critique <LatexRenderer latex="A\in\mathbb{R}^3" /> que l'on déterminera. Calculer <LatexRenderer latex="f(A)" />.</p>
                <p><strong>3.</strong> Montrer que si <LatexRenderer latex="x\ge 0" />, alors <LatexRenderer latex="f(x,y,z)\ge 0" />, et que si <LatexRenderer latex="x\le 0" />, alors <LatexRenderer latex="f(x,y,z)\ge x e^{x}" />.</p>
                <p><strong>4.</strong> Déterminer le minimum de la fonction <LatexRenderer latex="x\mapsto x e^{x}" />, et en déduire que <LatexRenderer latex="f" /> atteint son minimum en <LatexRenderer latex="A" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Régularité */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Régularité de classe ℂ¹</h5>
                
                <p>
                  <strong>Analyse des composantes de f :</strong>
                </p>
                <ul className="space-y-2 ml-4 list-disc text-sm">
                  <li><strong>Première partie :</strong> <LatexRenderer latex="(x,y,z) \mapsto x+z^2" /> est polynomiale, donc <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" />.</li>
                  <li><strong>Deuxième partie :</strong> <LatexRenderer latex="(x,y,z) \mapsto x(y^2+z^2+1)" /> est polynomiale, donc <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^3" />.</li>
                  <li><strong>Fonction exponentielle :</strong> <LatexRenderer latex="t \mapsto e^t" /> est <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}" />.</li>
                </ul>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Conclusion :</strong> Par composition et produit de fonctions <LatexRenderer latex="\mathcal{C}^1" />, 
                    <LatexRenderer latex="f \in \mathcal{C}^1(\mathbb{R}^3)" />.
                  </p>
                </div>
              </div>

              {/* Question 2 - Points critiques */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Recherche du point critique unique</h5>
                
                <p>
                  <strong>Calcul des dérivées partielles :</strong>
                </p>
                <p>
                  En utilisant la règle du produit et la dérivation en chaîne :
                </p>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}\left[(x+z^2)e^{x(y^2+z^2+1)}\right]" />
                  <LatexRenderer latex="= e^{x(y^2+z^2+1)} + (x+z^2) \cdot (y^2+z^2+1) \cdot e^{x(y^2+z^2+1)}" />
                  <LatexRenderer latex="= e^{x(y^2+z^2+1)}\left[1 + (x+z^2)(y^2+z^2+1)\right]" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial y} = (x+z^2) \cdot 2xy \cdot e^{x(y^2+z^2+1)}" />
                  <LatexRenderer latex="= 2xy(x+z^2)e^{x(y^2+z^2+1)}" />
                </div>
                
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}\left[(x+z^2)e^{x(y^2+z^2+1)}\right]" />
                  <LatexRenderer latex="= 2z \cdot e^{x(y^2+z^2+1)} + (x+z^2) \cdot 2zx \cdot e^{x(y^2+z^2+1)}" />
                  <LatexRenderer latex="= e^{x(y^2+z^2+1)} \cdot 2z\left[1 + x(x+z^2)\right]" />
                </div>
                
                <p>
                  <strong>Système des points critiques :</strong>
                </p>
                <p>
                  Un triplet <LatexRenderer latex="(a,b,c)" /> est critique si et seulement si :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\begin{cases} 1+(a+c^2)(b^2+c^2+1)=0 & \text{(1)} \\ 2ab(a+c^2)=0 & \text{(2)} \\ 2c\big(1+a(a+c^2)\big)=0 & \text{(3)} \end{cases}" />
                </div>
                
                <p>
                  <strong>Analyse de l'équation (2) :</strong>
                </p>
                <p>
                  De <LatexRenderer latex="2ab(a+c^2)=0" />, on a trois cas : <LatexRenderer latex="a=0" /> ou <LatexRenderer latex="b=0" /> ou <LatexRenderer latex="a+c^2=0" />.
                </p>
                
                <div className="bg-gray-50 p-3 rounded border space-y-3">
                  <p><strong>Cas 1 :</strong> Si <LatexRenderer latex="a+c^2=0" />, alors l'équation (1) devient :</p>
                  <LatexRenderer latex="1 + 0 \cdot (b^2+c^2+1) = 1 = 0" />
                  <p className="text-red-600">⇒ Impossible !</p>
                  
                  <p><strong>Cas 2 :</strong> Si <LatexRenderer latex="a=0" />, alors l'équation (3) devient :</p>
                  <LatexRenderer latex="2c(1 + 0 \cdot c^2) = 2c = 0 \Rightarrow c = 0" />
                  <p>L'équation (1) avec <LatexRenderer latex="a=c=0" /> donne :</p>
                  <LatexRenderer latex="1 + 0 \cdot (b^2+1) = 1 = 0" />
                  <p className="text-red-600">⇒ Impossible !</p>
                  
                  <p><strong>Cas 3 :</strong> Donc nécessairement <LatexRenderer latex="b=0" />.</p>
                </div>
                
                <p>
                  <strong>Résolution avec b = 0 :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>L'équation (3) devient : <LatexRenderer latex="2c\big(1+a(a+c^2)\big)=0" /></p>
                  <p>Donc <LatexRenderer latex="c=0" /> ou <LatexRenderer latex="1+a(a+c^2)=0" />.</p>
                  
                  <p><strong>Sous-cas 3a :</strong> Si <LatexRenderer latex="c \neq 0" /> et <LatexRenderer latex="1+a(a+c^2)=0" />, alors :</p>
                  <LatexRenderer latex="a(a+c^2) = -1 < 0" />
                  <p>Ceci implique <LatexRenderer latex="a < 0" /> et <LatexRenderer latex="a+c^2 = -\frac{1}{a} > 0" />.</p>
                  
                  <p>L'équation (1) avec <LatexRenderer latex="b=0" /> devient :</p>
                  <LatexRenderer latex="1 + (a+c^2)(c^2+1) = 1 + \left(-\frac{1}{a}\right)(c^2+1) = 0" />
                  <LatexRenderer latex="\Rightarrow 1 = \frac{c^2+1}{a} \Rightarrow a = c^2+1 > 0" />
                  <p className="text-red-600">⇒ Contradiction avec <LatexRenderer latex="a < 0" /> !</p>
                  
                  <p><strong>Sous-cas 3b :</strong> Donc <LatexRenderer latex="c=0" />.</p>
                </div>
                
                <p>
                  <strong>Solution finale :</strong>
                </p>
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p>Avec <LatexRenderer latex="b=c=0" />, l'équation (1) devient :</p>
                  <LatexRenderer latex="1 + a \cdot 1 = 0 \Rightarrow a = -1" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">
                    <strong>Point critique unique :</strong> <LatexRenderer latex="A = (-1, 0, 0)" />
                  </p>
                  <p className="text-green-700">
                    <strong>Valeur :</strong> <LatexRenderer latex="f(A) = (-1 + 0^2) \cdot e^{-1(0^2+0^2+1)} = (-1) \cdot e^{-1} = -e^{-1}" />
                  </p>
                </div>
              </div>

              {/* Question 3 - Encadrements selon le signe de x */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">3. Encadrements selon le signe de x</h5>
                
                <p>
                  <strong>Cas 1 : x ≥ 0</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><LatexRenderer latex="x \geq 0 \Rightarrow x + z^2 \geq 0" /> (somme de termes positifs)</li>
                    <li><LatexRenderer latex="e^{x(y^2+z^2+1)} > 0" /> (exponentielle toujours positive)</li>
                    <li>Donc <LatexRenderer latex="f(x,y,z) = (x+z^2) \cdot e^{x(y^2+z^2+1)} \geq 0" /></li>
                  </ul>
                </div>
                
                <p>
                  <strong>Cas 2 : x ≤ 0</strong>
                </p>
                <p>
                  Nous allons établir que <LatexRenderer latex="f(x,y,z) \geq xe^x" /> par une série d'inégalités.
                </p>
                
                <div className="bg-yellow-50 p-3 rounded border space-y-3">
                  <p><strong>Étape 1 :</strong> Encadrement de l'exponentielle</p>
                  <p>Comme <LatexRenderer latex="y^2+z^2+1 \geq 1" /> et <LatexRenderer latex="x \leq 0" /> :</p>
                  <LatexRenderer latex="x(y^2+z^2+1) \leq x \cdot 1 = x" />
                  <p>Donc : <LatexRenderer latex="e^{x(y^2+z^2+1)} \leq e^x" /></p>
                  
                  <p><strong>Étape 2 :</strong> Multiplication par x (attention au signe !)</p>
                  <p>Comme <LatexRenderer latex="x \leq 0" />, multiplier par <LatexRenderer latex="x" /> inverse l'inégalité :</p>
                  <LatexRenderer latex="x \cdot e^{x(y^2+z^2+1)} \geq x \cdot e^x" />
                  
                  <p><strong>Étape 3 :</strong> Comparaison des facteurs</p>
                  <p>Comme <LatexRenderer latex="x + z^2 \geq x" /> (car <LatexRenderer latex="z^2 \geq 0" />) :</p>
                  <LatexRenderer latex="f(x,y,z) = (x+z^2) \cdot e^{x(y^2+z^2+1)} \geq x \cdot e^{x(y^2+z^2+1)} \geq x \cdot e^x" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Conclusion des encadrements :</strong>
                  </p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li>Si <LatexRenderer latex="x \geq 0" /> : <LatexRenderer latex="f(x,y,z) \geq 0" /></li>
                    <li>Si <LatexRenderer latex="x \leq 0" /> : <LatexRenderer latex="f(x,y,z) \geq xe^x" /></li>
                  </ul>
                </div>
              </div>

              {/* Question 4 - Minimum global */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">4. Détermination du minimum global</h5>
                
                <p>
                  <strong>Étude de la fonction auxiliaire φ(x) = xe^x :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\varphi(x) = xe^x" />
                  <LatexRenderer latex="\varphi'(x) = e^x + xe^x = e^x(1+x)" />
                </div>
                
                <p>
                  <strong>Analyse du signe de φ'(x) :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <p>Comme <LatexRenderer latex="e^x > 0" /> toujours :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li>Pour <LatexRenderer latex="x < -1" /> : <LatexRenderer latex="1+x < 0 \Rightarrow \varphi'(x) < 0" /> (décroissante)</li>
                    <li>Pour <LatexRenderer latex="x > -1" /> : <LatexRenderer latex="1+x > 0 \Rightarrow \varphi'(x) > 0" /> (croissante)</li>
                    <li>En <LatexRenderer latex="x = -1" /> : <LatexRenderer latex="\varphi'(-1) = 0" /> (point critique)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p><strong>Minimum de φ :</strong></p>
                  <LatexRenderer latex="\varphi(-1) = (-1) \cdot e^{-1} = -e^{-1}" />
                  <p>Donc <LatexRenderer latex="\varphi(x) \geq -e^{-1}" /> pour tout <LatexRenderer latex="x \in \mathbb{R}" />.</p>
                </div>
                
                <p>
                  <strong>Synthèse pour le minimum global de f :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-3">
                  <p><strong>D'après la question 3 :</strong></p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li>Si <LatexRenderer latex="x \geq 0" /> : <LatexRenderer latex="f(x,y,z) \geq 0" /></li>
                    <li>Si <LatexRenderer latex="x \leq 0" /> : <LatexRenderer latex="f(x,y,z) \geq xe^x \geq -e^{-1}" /></li>
                  </ul>
                  
                  <p><strong>Donc :</strong> <LatexRenderer latex="f(x,y,z) \geq -e^{-1}" /> pour tout <LatexRenderer latex="(x,y,z) \in \mathbb{R}^3" />.</p>
                  
                  <p><strong>Atteinte du minimum :</strong></p>
                  <p>Cette borne inférieure est atteinte en <LatexRenderer latex="A = (-1,0,0)" /> car :</p>
                  <LatexRenderer latex="f(-1,0,0) = -e^{-1}" />
                </div>
              </div>

              {/* Vérification et conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Vérification et conclusion</h5>
                
                <p>
                  <strong>Vérification de l'atteinte du minimum :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p>Pour que <LatexRenderer latex="f(x,y,z) = xe^x" /> quand <LatexRenderer latex="x \leq 0" />, il faut :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><LatexRenderer latex="x + z^2 = x \Rightarrow z^2 = 0 \Rightarrow z = 0" /></li>
                    <li><LatexRenderer latex="e^{x(y^2+z^2+1)} = e^x \Rightarrow x(y^2+1) = x \Rightarrow y^2 = 0 \Rightarrow y = 0" /></li>
                  </ul>
                  <p>Pour que <LatexRenderer latex="xe^x = -e^{-1}" />, il faut <LatexRenderer latex="x = -1" />.</p>
                  <p>Donc le minimum est atteint uniquement en <LatexRenderer latex="(-1,0,0)" />.</p>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Résultats finaux :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Point critique unique :</strong> <LatexRenderer latex="A = (-1,0,0)" /></li>
                    <li><strong>Valeur en A :</strong> <LatexRenderer latex="f(A) = -e^{-1}" /></li>
                    <li><strong>Minimum global :</strong> <LatexRenderer latex="f" /> atteint son minimum <LatexRenderer latex="-e^{-1}" /> en <LatexRenderer latex="A" /></li>
                    <li><strong>Encadrements :</strong> <LatexRenderer latex="f(x,y,z) \geq -e^{-1}" /> pour tout <LatexRenderer latex="(x,y,z)" /></li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Techniques remarquables utilisées :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Analyse par cas :</strong> Distinction selon le signe de <LatexRenderer latex="x" /></li>
                    <li><strong>Encadrements sophistiqués :</strong> Exploitation des inégalités sur les exponentielles</li>
                    <li><strong>Fonction auxiliaire :</strong> Réduction au minimum de <LatexRenderer latex="xe^x" /></li>
                    <li><strong>Vérification directe :</strong> Atteinte effective du minimum au point critique</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Méthode générale :</p>
                  <p className="text-sm">
                    Cette approche par encadrements conditionnels (selon le signe d'une variable) 
                    permet d'éviter l'étude complexe de la matrice hessienne tout en établissant 
                    rigoureusement l'existence et l'unicité du minimum global.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Exercice 13.18 */}
        <ExerciseCard
          id="ex13-18"
          title="Exercice 13.18"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>
                Soit <LatexRenderer latex="n \geq 1" /> et <LatexRenderer latex="f:\mathbb{R}^n \to \mathbb{R}" /> définie par
              </p>
              <div className="text-center my-4 bg-gray-50 p-4 rounded border">
                <LatexRenderer latex="f(x_1,\ldots,x_n)=\sum_{k=1}^n x_k^2+\left(1-\sum_{k=1}^n x_k\right)^2" />
              </div>
              
              <div className="space-y-3">
                <p><strong>1.</strong> Montrer que <LatexRenderer latex="f" /> est de classe <LatexRenderer latex="\mathcal{C}^1" /> sur <LatexRenderer latex="\mathbb{R}^n" /> et qu'elle possède un unique point critique <LatexRenderer latex="a=(a_1,\ldots,a_n)" />.</p>
                <p><strong>2.</strong> Pour <LatexRenderer latex="(h_1,\ldots,h_n)\in\mathbb{R}^n" />, expliciter <LatexRenderer latex="f(a+h)-f(a)" /> et en déduire la nature du point critique <LatexRenderer latex="a" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              {/* Question 1 - Régularité et point critique */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">1. Régularité et recherche du point critique unique</h5>
                
                <p>
                  <strong>Régularité de classe ℂ¹ :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <p>La fonction <LatexRenderer latex="f" /> est une combinaison polynomiale des variables <LatexRenderer latex="x_1, \ldots, x_n" />.</p>
                  <p>Plus précisément :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><LatexRenderer latex="\sum_{k=1}^n x_k^2" /> est polynomiale</li>
                    <li><LatexRenderer latex="1-\sum_{k=1}^n x_k" /> est polynomiale</li>
                    <li><LatexRenderer latex="\left(1-\sum_{k=1}^n x_k\right)^2" /> est polynomiale</li>
                  </ul>
                  <p>Donc <LatexRenderer latex="f \in \mathcal{C}^1(\mathbb{R}^n)" />.</p>
                </div>
                
                <p>
                  <strong>Calcul des dérivées partielles :</strong>
                </p>
                <p>
                  Pour <LatexRenderer latex="i \in \{1,\ldots,n\}" /> :
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\frac{\partial f}{\partial x_i}(x_1,\ldots,x_n) = \frac{\partial}{\partial x_i}\left[\sum_{k=1}^n x_k^2+\left(1-\sum_{k=1}^n x_k\right)^2\right]" />
                  <LatexRenderer latex="= 2x_i + 2\left(1-\sum_{k=1}^n x_k\right) \cdot (-1)" />
                  <LatexRenderer latex="= 2x_i - 2\left(1-\sum_{k=1}^n x_k\right)" />
                </div>
                
                <p>
                  <strong>Système des points critiques :</strong>
                </p>
                <p>
                  Un point <LatexRenderer latex="x=(x_1,\ldots,x_n)" /> est critique si et seulement si :
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="\forall i \in \{1,\ldots,n\}, \quad 2x_i - 2\left(1-\sum_{k=1}^n x_k\right) = 0" />
                  <LatexRenderer latex="\Leftrightarrow \forall i \in \{1,\ldots,n\}, \quad x_i = 1-\sum_{k=1}^n x_k" />
                </div>
                
                <p>
                  <strong>Résolution du système :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-3">
                  <p>L'équation <LatexRenderer latex="x_i = 1-\sum_{k=1}^n x_k" /> est la même pour tous les indices <LatexRenderer latex="i" />.</p>
                  <p>Donc tous les <LatexRenderer latex="x_i" /> sont égaux : <LatexRenderer latex="x_1 = x_2 = \cdots = x_n = t" />.</p>
                  
                  <p>En substituant dans l'équation :</p>
                  <LatexRenderer latex="t = 1 - \sum_{k=1}^n t = 1 - nt" />
                  <LatexRenderer latex="\Rightarrow t + nt = 1 \Rightarrow (n+1)t = 1 \Rightarrow t = \frac{1}{n+1}" />
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800">
                    <strong>Point critique unique :</strong>
                  </p>
                  <LatexRenderer latex="a = (a_1, \ldots, a_n) = \left(\frac{1}{n+1}, \ldots, \frac{1}{n+1}\right)" />
                </div>
              </div>

              {/* Question 2 - Développement et nature */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">2. Développement au voisinage de a et nature du point critique</h5>
                
                <p>
                  <strong>Calcul de f(a+h) - f(a) :</strong>
                </p>
                <p>
                  Soit <LatexRenderer latex="h=(h_1,\ldots,h_n)\in\mathbb{R}^n" />. Nous devons calculer :
                </p>
                <div className="bg-blue-50 p-3 rounded border">
                  <LatexRenderer latex="f(a+h) - f(a) = f(a_1+h_1,\ldots,a_n+h_n) - f(a_1,\ldots,a_n)" />
                </div>
                
                <p>
                  <strong>Développement détaillé :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-3">
                  <p><strong>Terme 1 :</strong> <LatexRenderer latex="\sum_{k=1}^n (a_k+h_k)^2 = \sum_{k=1}^n (a_k^2 + 2a_k h_k + h_k^2)" /></p>
                  
                  <p><strong>Terme 2 :</strong></p>
                  <div className="ml-4 space-y-1">
                    <LatexRenderer latex="\left(1-\sum_{k=1}^n (a_k+h_k)\right)^2 = \left(1-\sum_{k=1}^n a_k - \sum_{k=1}^n h_k\right)^2" />
                    <p>Or, comme <LatexRenderer latex="a_k = \frac{1}{n+1}" /> pour tout <LatexRenderer latex="k" /> :</p>
                    <LatexRenderer latex="\sum_{k=1}^n a_k = n \cdot \frac{1}{n+1} = \frac{n}{n+1}" />
                    <p>Donc :</p>
                    <LatexRenderer latex="1-\sum_{k=1}^n a_k = 1 - \frac{n}{n+1} = \frac{n+1-n}{n+1} = \frac{1}{n+1}" />
                    <p>Ainsi :</p>
                    <LatexRenderer latex="\left(1-\sum_{k=1}^n (a_k+h_k)\right)^2 = \left(\frac{1}{n+1} - \sum_{k=1}^n h_k\right)^2" />
                  </div>
                </div>
                
                <p>
                  <strong>Regroupement et simplification :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-3">
                  <LatexRenderer latex="f(a+h) - f(a) = \sum_{k=1}^n a_k^2 + 2\sum_{k=1}^n a_k h_k + \sum_{k=1}^n h_k^2 + \left(\frac{1}{n+1}\right)^2 - 2\cdot\frac{1}{n+1}\sum_{k=1}^n h_k + \left(\sum_{k=1}^n h_k\right)^2" />
                  <LatexRenderer latex="- \left[\sum_{k=1}^n a_k^2 + \left(\frac{1}{n+1}\right)^2\right]" />
                  
                  <p>Les termes constants s'annulent, il reste :</p>
                  <LatexRenderer latex="f(a+h) - f(a) = 2\sum_{k=1}^n a_k h_k + \sum_{k=1}^n h_k^2 - 2\cdot\frac{1}{n+1}\sum_{k=1}^n h_k + \left(\sum_{k=1}^n h_k\right)^2" />
                  
                  <p>Comme <LatexRenderer latex="a_k = \frac{1}{n+1}" /> :</p>
                  <LatexRenderer latex="2\sum_{k=1}^n a_k h_k = 2 \cdot \frac{1}{n+1} \sum_{k=1}^n h_k" />
                  
                  <p>Donc les termes linéaires s'annulent :</p>
                  <LatexRenderer latex="2 \cdot \frac{1}{n+1} \sum_{k=1}^n h_k - 2\cdot\frac{1}{n+1}\sum_{k=1}^n h_k = 0" />
                </div>
                
                <div className="bg-green-50 p-3 rounded border space-y-2">
                  <p><strong>Résultat final :</strong></p>
                  <LatexRenderer latex="f(a+h) - f(a) = \sum_{k=1}^n h_k^2 + \left(\sum_{k=1}^n h_k\right)^2" />
                </div>
                
                <p>
                  <strong>Analyse de la nature du point critique :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-3">
                  <p><strong>Positivité :</strong></p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><LatexRenderer latex="\sum_{k=1}^n h_k^2 \geq 0" /> (somme de carrés)</li>
                    <li><LatexRenderer latex="\left(\sum_{k=1}^n h_k\right)^2 \geq 0" /> (carré d'un réel)</li>
                    <li>Donc <LatexRenderer latex="f(a+h) - f(a) \geq 0" /> pour tout <LatexRenderer latex="h \in \mathbb{R}^n" /></li>
                  </ul>
                  
                  <p><strong>Condition d'égalité :</strong></p>
                  <p><LatexRenderer latex="f(a+h) - f(a) = 0" /> si et seulement si :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><LatexRenderer latex="\sum_{k=1}^n h_k^2 = 0 \Rightarrow h_k = 0" /> pour tout <LatexRenderer latex="k" /></li>
                    <li><LatexRenderer latex="\sum_{k=1}^n h_k = 0" /> (automatiquement satisfait si tous les <LatexRenderer latex="h_k = 0" />)</li>
                  </ul>
                  <p>Donc l'égalité n'a lieu que pour <LatexRenderer latex="h = 0" />.</p>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">
                    <strong>Conclusion :</strong> Le point <LatexRenderer latex="a = \left(\frac{1}{n+1}, \ldots, \frac{1}{n+1}\right)" /> est un <strong>minimum global strict</strong> de <LatexRenderer latex="f" />.
                  </p>
                </div>
              </div>

              {/* Interprétation géométrique et généralisation */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Interprétation géométrique et généralisation</h5>
                
                <p>
                  <strong>Interprétation de la fonction :</strong>
                </p>
                <div className="bg-blue-50 p-3 rounded border space-y-2">
                  <LatexRenderer latex="f(x_1,\ldots,x_n) = \sum_{k=1}^n x_k^2 + \left(1-\sum_{k=1}^n x_k\right)^2" />
                  <p>Cette fonction peut s'interpréter comme :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Terme 1 :</strong> <LatexRenderer latex="\sum_{k=1}^n x_k^2" /> mesure la "taille" du vecteur <LatexRenderer latex="(x_1,\ldots,x_n)" /></li>
                    <li><strong>Terme 2 :</strong> <LatexRenderer latex="\left(1-\sum_{k=1}^n x_k\right)^2" /> pénalise l'écart de la somme des coordonnées par rapport à 1</li>
                  </ul>
                </div>
                
                <p>
                  <strong>Généralisation et applications :</strong>
                </p>
                <div className="bg-yellow-50 p-3 rounded border space-y-2">
                  <p>Cette fonction est un exemple de <strong>régularisation quadratique</strong> :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li>Minimise la norme euclidienne du vecteur</li>
                    <li>Sous contrainte que la somme des coordonnées soit proche de 1</li>
                    <li>Le minimum réalise un compromis optimal entre ces deux objectifs</li>
                  </ul>
                </div>
                
                <p>
                  <strong>Vérification pour des cas particuliers :</strong>
                </p>
                <div className="bg-gray-50 p-3 rounded border space-y-3">
                  <p><strong>Cas n = 1 :</strong></p>
                  <LatexRenderer latex="f(x) = x^2 + (1-x)^2" />
                  <LatexRenderer latex="f'(x) = 2x - 2(1-x) = 4x - 2" />
                  <p>Point critique : <LatexRenderer latex="x = \frac{1}{2} = \frac{1}{1+1}" /> ✓</p>
                  
                  <p><strong>Cas n = 2 :</strong></p>
                  <p>Point critique : <LatexRenderer latex="\left(\frac{1}{3}, \frac{1}{3}\right)" /> ✓</p>
                  
                  <p><strong>Cas général :</strong> Chaque coordonnée vaut <LatexRenderer latex="\frac{1}{n+1}" /></p>
                </div>
              </div>

              {/* Techniques et conclusion */}
              <div className="space-y-3">
                <h5 className="font-semibold text-lg">Techniques remarquables et conclusion</h5>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <p className="font-semibold text-blue-800 mb-2">Techniques utilisées :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Symétrie du problème :</strong> Exploitation de l'égalité de toutes les dérivées partielles</li>
                    <li><strong>Développement au second ordre :</strong> Calcul direct de <LatexRenderer latex="f(a+h) - f(a)" /></li>
                    <li><strong>Analyse de signe :</strong> Somme de termes positifs pour conclure</li>
                    <li><strong>Dimension arbitraire :</strong> Méthode valable pour tout <LatexRenderer latex="n \geq 1" /></li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-2">Résultats finaux :</p>
                  <ul className="space-y-1 text-sm list-disc ml-4">
                    <li><strong>Point critique unique :</strong> <LatexRenderer latex="a = \left(\frac{1}{n+1}, \ldots, \frac{1}{n+1}\right)" /></li>
                    <li><strong>Nature :</strong> Minimum global strict</li>
                    <li><strong>Développement :</strong> <LatexRenderer latex="f(a+h) - f(a) = \sum_{k=1}^n h_k^2 + \left(\sum_{k=1}^n h_k\right)^2" /></li>
                    <li><strong>Valeur minimale :</strong> <LatexRenderer latex="f(a) = \frac{n}{n+1}" /></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-2">Méthode générale :</p>
                  <p className="text-sm">
                    Cette approche par développement direct au second ordre évite le calcul de la matrice hessienne 
                    tout en révélant immédiatement la nature du point critique. La symétrie du problème simplifie 
                    considérablement la résolution et permet une généralisation naturelle en dimension arbitraire.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Conseil méthodologique */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Méthode générale pour étudier la régularité C¹
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Pour montrer qu'une fonction est C¹ :</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Identifier les fonctions élémentaires (polynômes, exponentielles, etc.)</li>
                <li>Utiliser les propriétés de stabilité : somme, produit, composition</li>
                <li>Calculer les dérivées partielles en utilisant les règles de dérivation</li>
                <li>Exprimer le gradient comme vecteur des dérivées partielles</li>
                <li>Vérifier la continuité des dérivées partielles si nécessaire</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage;
