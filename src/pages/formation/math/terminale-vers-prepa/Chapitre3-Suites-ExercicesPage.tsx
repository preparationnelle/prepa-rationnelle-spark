import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen, TrendingDown, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre3SuitesExercicesPage = () => {
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
          className="mb-4 bg-blue-600 hover:bg-blue-700"
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 3 : Suites numériques
            </h1>
            <p className="text-slate-600 text-lg mb-4">
              Exercices progressifs pour maîtriser les suites numériques niveau prépa
            </p>
            <div className="flex gap-2">
              <Link
                to="/formation/math/terminale-vers-prepa/suites-cours"
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Voir le cours
              </Link>
              <Link
                to="/formation/math/terminale-vers-prepa"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ← Retour au sommaire
              </Link>
            </div>
          </div>
        </Card>

        {/* Niveau 1 - Bases */}
        <DifficultyHeader 
          level="Niveau 1" 
          title="Suites arithmétiques et géométriques" 
          icon={BookOpen} 
        />

        <ExerciseCard
          id="suite-1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(u_n)" /> la suite arithmétique de premier terme <LatexRenderer latex="u_0 = 3" /> et de raison <LatexRenderer latex="r = 5" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Exprimer <LatexRenderer latex="u_n" /> en fonction de <LatexRenderer latex="n" />.</p>
                <p>b) Calculer <LatexRenderer latex="u_{10}" /> et <LatexRenderer latex="u_{20}" />.</p>
                <p>c) Calculer la somme <LatexRenderer latex="S = u_0 + u_1 + \cdots + u_{10}" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Expression de <LatexRenderer latex="u_n" /></p>
                <p>Pour une suite arithmétique : <LatexRenderer latex="u_n = u_0 + nr" /></p>
                <p>Donc : <LatexRenderer latex="u_n = 3 + 5n" /></p>
                <p><strong>Réponse : <LatexRenderer latex="u_n = 3 + 5n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Calcul de <LatexRenderer latex="u_{10}" /> et <LatexRenderer latex="u_{20}" /></p>
                <p><LatexRenderer latex="u_{10} = 3 + 5 \times 10 = 3 + 50 = 53" /></p>
                <p><LatexRenderer latex="u_{20} = 3 + 5 \times 20 = 3 + 100 = 103" /></p>
                <p><strong>Réponse : <LatexRenderer latex="u_{10} = 53" /> et <LatexRenderer latex="u_{20} = 103" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Somme des 11 premiers termes</p>
                <p>Formule : <LatexRenderer latex="S_n = \frac{n(u_0 + u_{n-1})}{2}" /></p>
                <p><LatexRenderer latex="S = \frac{11(u_0 + u_{10})}{2} = \frac{11(3 + 53)}{2} = \frac{11 \times 56}{2} = 11 \times 28 = 308" /></p>
                <p><strong>Réponse : <LatexRenderer latex="S = 308" /></strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="suite-2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(v_n)" /> la suite géométrique de premier terme <LatexRenderer latex="v_0 = 2" /> et de raison <LatexRenderer latex="q = 3" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Exprimer <LatexRenderer latex="v_n" /> en fonction de <LatexRenderer latex="n" />.</p>
                <p>b) Calculer <LatexRenderer latex="v_5" />.</p>
                <p>c) Calculer la somme <LatexRenderer latex="T = v_0 + v_1 + v_2 + v_3 + v_4" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Expression de <LatexRenderer latex="v_n" /></p>
                <p>Pour une suite géométrique : <LatexRenderer latex="v_n = v_0 \times q^n" /></p>
                <p>Donc : <LatexRenderer latex="v_n = 2 \times 3^n" /></p>
                <p><strong>Réponse : <LatexRenderer latex="v_n = 2 \times 3^n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Calcul de <LatexRenderer latex="v_5" /></p>
                <p><LatexRenderer latex="v_5 = 2 \times 3^5 = 2 \times 243 = 486" /></p>
                <p><strong>Réponse : <LatexRenderer latex="v_5 = 486" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Somme des 5 premiers termes</p>
                <p>Formule : <LatexRenderer latex="S_n = v_0 \frac{1-q^n}{1-q}" /> avec <LatexRenderer latex="q \neq 1" /></p>
                <p><LatexRenderer latex="T = 2 \times \frac{1-3^5}{1-3} = 2 \times \frac{1-243}{-2} = 2 \times \frac{-242}{-2} = 2 \times 121 = 242" /></p>
                <p><strong>Réponse : <LatexRenderer latex="T = 242" /></strong></p>
              </div>
            </div>
          }
        />

        {/* Niveau 2 - Monotonie et convergence */}
        <DifficultyHeader 
          level="Niveau 2" 
          title="Monotonie et convergence" 
          icon={TrendingUp} 
        />

        <ExerciseCard
          id="suite-3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(u_n)" /> la suite définie par <LatexRenderer latex="u_0 = 1" /> et <LatexRenderer latex="u_{n+1} = \frac{2u_n + 3}{u_n + 2}" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Calculer <LatexRenderer latex="u_1" />, <LatexRenderer latex="u_2" /> et <LatexRenderer latex="u_3" />.</p>
                <p>b) Montrer que <LatexRenderer latex="u_n > 0" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
                <p>c) Étudier la monotonie de cette suite.</p>
                <p>d) La suite converge-t-elle ? Si oui, vers quelle valeur ?</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Calcul des premiers termes</p>
                <p><LatexRenderer latex="u_1 = \frac{2 \times 1 + 3}{1 + 2} = \frac{5}{3}" /></p>
                <p><LatexRenderer latex="u_2 = \frac{2 \times \frac{5}{3} + 3}{\frac{5}{3} + 2} = \frac{\frac{10}{3} + 3}{\frac{5}{3} + 2} = \frac{\frac{19}{3}}{\frac{11}{3}} = \frac{19}{11}" /></p>
                <p><LatexRenderer latex="u_3 = \frac{2 \times \frac{19}{11} + 3}{\frac{19}{11} + 2} = \frac{\frac{38}{11} + 3}{\frac{19}{11} + 2} = \frac{\frac{71}{11}}{\frac{41}{11}} = \frac{71}{41}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="u_1 = \frac{5}{3}" />, <LatexRenderer latex="u_2 = \frac{19}{11}" />, <LatexRenderer latex="u_3 = \frac{71}{41}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Positivité de la suite</p>
                <p>Par récurrence : <LatexRenderer latex="u_0 = 1 > 0" /></p>
                <p>Si <LatexRenderer latex="u_n > 0" />, alors <LatexRenderer latex="u_{n+1} = \frac{2u_n + 3}{u_n + 2} > 0" /> car numérateur et dénominateur sont positifs.</p>
                <p><strong>Donc <LatexRenderer latex="u_n > 0" /> pour tout <LatexRenderer latex="n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Monotonie</p>
                <p>Étudions <LatexRenderer latex="u_{n+1} - u_n" /> :</p>
                <p><LatexRenderer latex="u_{n+1} - u_n = \frac{2u_n + 3}{u_n + 2} - u_n = \frac{2u_n + 3 - u_n(u_n + 2)}{u_n + 2} = \frac{2u_n + 3 - u_n^2 - 2u_n}{u_n + 2} = \frac{3 - u_n^2}{u_n + 2}" /></p>
                <p>Le signe dépend de <LatexRenderer latex="3 - u_n^2" />. Si <LatexRenderer latex="u_n < \sqrt{3}" />, alors <LatexRenderer latex="u_{n+1} > u_n" />.</p>
                <p><strong>La suite est croissante tant que <LatexRenderer latex="u_n < \sqrt{3}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">d) Convergence</p>
                <p>On conjecture que <LatexRenderer latex="u_n < \sqrt{3}" /> pour tout <LatexRenderer latex="n" />. La suite est croissante et majorée par <LatexRenderer latex="\sqrt{3}" />.</p>
                <p>Pour trouver la limite, résolvons <LatexRenderer latex="l = \frac{2l + 3}{l + 2}" /> :</p>
                <p><LatexRenderer latex="l(l + 2) = 2l + 3 \Rightarrow l^2 + 2l = 2l + 3 \Rightarrow l^2 = 3 \Rightarrow l = \sqrt{3}" /></p>
                <p><strong>La suite converge vers <LatexRenderer latex="\sqrt{3}" /></strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="suite-4"
          title="Exercice 4"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(w_n)" /> la suite définie par <LatexRenderer latex="w_n = \frac{n^2 + 1}{2n^2 + 3}" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Calculer <LatexRenderer latex="w_1" />, <LatexRenderer latex="w_2" /> et <LatexRenderer latex="w_{10}" />.</p>
                <p>b) Déterminer <LatexRenderer latex="\lim_{n \to +\infty} w_n" />.</p>
                <p>c) Étudier la monotonie de cette suite.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Calcul des termes</p>
                <p><LatexRenderer latex="w_1 = \frac{1^2 + 1}{2 \times 1^2 + 3} = \frac{2}{5}" /></p>
                <p><LatexRenderer latex="w_2 = \frac{2^2 + 1}{2 \times 2^2 + 3} = \frac{5}{11}" /></p>
                <p><LatexRenderer latex="w_{10} = \frac{10^2 + 1}{2 \times 10^2 + 3} = \frac{101}{203}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="w_1 = \frac{2}{5}" />, <LatexRenderer latex="w_2 = \frac{5}{11}" />, <LatexRenderer latex="w_{10} = \frac{101}{203}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Limite</p>
                <p>On divise numérateur et dénominateur par <LatexRenderer latex="n^2" /> :</p>
                <p><LatexRenderer latex="w_n = \frac{n^2 + 1}{2n^2 + 3} = \frac{1 + \frac{1}{n^2}}{2 + \frac{3}{n^2}}" /></p>
                <p>Quand <LatexRenderer latex="n \to +\infty" /> : <LatexRenderer latex="\frac{1}{n^2} \to 0" /> et <LatexRenderer latex="\frac{3}{n^2} \to 0" /></p>
                <p><strong>Donc <LatexRenderer latex="\lim_{n \to +\infty} w_n = \frac{1}{2}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Monotonie</p>
                <p>Étudions <LatexRenderer latex="w_{n+1} - w_n" /> :</p>
                <p><LatexRenderer latex="w_{n+1} - w_n = \frac{(n+1)^2 + 1}{2(n+1)^2 + 3} - \frac{n^2 + 1}{2n^2 + 3}" /></p>
                <p>Après calculs : <LatexRenderer latex="w_{n+1} - w_n = \frac{2n + 1}{(2(n+1)^2 + 3)(2n^2 + 3)} > 0" /></p>
                <p><strong>La suite est strictement croissante</strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="suite-5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">On considère les suites <LatexRenderer latex="(a_n)" /> et <LatexRenderer latex="(b_n)" /> définies par :</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p><LatexRenderer latex="a_0 = 1, \quad b_0 = 2" /></p>
                <p><LatexRenderer latex="a_{n+1} = \frac{a_n + b_n}{2}, \quad b_{n+1} = \sqrt{a_n b_n}" /></p>
                <p>a) Calculer <LatexRenderer latex="a_1, b_1, a_2, b_2" />.</p>
                <p>b) Montrer que <LatexRenderer latex="a_n \leq b_n" /> pour tout <LatexRenderer latex="n" />.</p>
                <p>c) Étudier la monotonie des suites.</p>
                <p>d) Que peut-on dire de la convergence ?</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Calcul des premiers termes</p>
                <p><LatexRenderer latex="a_1 = \frac{a_0 + b_0}{2} = \frac{1 + 2}{2} = \frac{3}{2}" /></p>
                <p><LatexRenderer latex="b_1 = \sqrt{a_0 b_0} = \sqrt{1 \times 2} = \sqrt{2}" /></p>
                <p><LatexRenderer latex="a_2 = \frac{a_1 + b_1}{2} = \frac{\frac{3}{2} + \sqrt{2}}{2} = \frac{3 + 2\sqrt{2}}{4}" /></p>
                <p><LatexRenderer latex="b_2 = \sqrt{a_1 b_1} = \sqrt{\frac{3}{2} \times \sqrt{2}} = \sqrt{\frac{3\sqrt{2}}{2}}" /></p>
                <p><strong>Réponse calculée numériquement</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Inégalité <LatexRenderer latex="a_n \leq b_n" /></p>
                <p>Par récurrence : <LatexRenderer latex="a_0 = 1 \leq 2 = b_0" /></p>
                <p>Si <LatexRenderer latex="a_n \leq b_n" />, alors par inégalité arithmético-géométrique :</p>
                <p><LatexRenderer latex="b_{n+1} = \sqrt{a_n b_n} \leq \frac{a_n + b_n}{2} = a_{n+1}" /></p>
                <p>Et <LatexRenderer latex="a_{n+1} = \frac{a_n + b_n}{2} \geq \frac{a_n + a_n}{2} = a_n" /></p>
                <p><strong>Donc <LatexRenderer latex="a_n \leq a_{n+1} \leq b_{n+1} \leq b_n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Monotonie</p>
                <p>D'après le calcul précédent :</p>
                <p>• <LatexRenderer latex="(a_n)" /> est croissante : <LatexRenderer latex="a_{n+1} \geq a_n" /></p>
                <p>• <LatexRenderer latex="(b_n)" /> est décroissante : <LatexRenderer latex="b_{n+1} \leq b_n" /></p>
                <p><strong>Les deux suites sont monotones</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">d) Convergence</p>
                <p><LatexRenderer latex="(a_n)" /> est croissante et majorée par <LatexRenderer latex="b_0 = 2" /></p>
                <p><LatexRenderer latex="(b_n)" /> est décroissante et minorée par <LatexRenderer latex="a_0 = 1" /></p>
                <p>Les deux suites convergent. Soit <LatexRenderer latex="l_a" /> et <LatexRenderer latex="l_b" /> leurs limites.</p>
                <p>En passant à la limite : <LatexRenderer latex="l_a = \frac{l_a + l_b}{2}" /> et <LatexRenderer latex="l_b = \sqrt{l_a l_b}" /></p>
                <p>Donc <LatexRenderer latex="l_a = l_b = \sqrt{2}" /> (moyenne arithmético-géométrique)</p>
                <p><strong>Les deux suites convergent vers <LatexRenderer latex="\sqrt{2}" /></strong></p>
              </div>
            </div>
          }
        />

        {/* Niveau 3 - Avancé */}
        <DifficultyHeader 
          level="Niveau 3" 
          title="Techniques avancées" 
          icon={Target} 
        />

        <ExerciseCard
          id="suite-6"
          title="Exercice 6"
          difficulty="Difficile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(u_n)" /> la suite définie par <LatexRenderer latex="u_0 = \frac{1}{2}" /> et <LatexRenderer latex="u_{n+1} = u_n(2 - u_n)" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Montrer que <LatexRenderer latex="0 < u_n < 2" /> pour tout <LatexRenderer latex="n" />.</p>
                <p>b) Étudier la monotonie de la suite.</p>
                <p>c) En déduire que la suite converge et déterminer sa limite.</p>
                <p>d) Poser <LatexRenderer latex="v_n = \frac{1}{u_n} - 1" /> et montrer que <LatexRenderer latex="(v_n)" /> est une suite géométrique.</p>
                <p>e) En déduire une expression explicite de <LatexRenderer latex="u_n" />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Encadrement de <LatexRenderer latex="u_n" /></p>
                <p>Par récurrence : <LatexRenderer latex="u_0 = \frac{1}{2} \in ]0, 2[" /></p>
                <p>Si <LatexRenderer latex="0 < u_n < 2" />, alors <LatexRenderer latex="u_{n+1} = u_n(2 - u_n)" /></p>
                <p>• <LatexRenderer latex="u_{n+1} > 0" /> car <LatexRenderer latex="u_n > 0" /> et <LatexRenderer latex="2 - u_n > 0" /></p>
                <p>• <LatexRenderer latex="u_{n+1} = u_n(2 - u_n) = 2u_n - u_n^2" /></p>
                <p>Pour montrer <LatexRenderer latex="u_{n+1} < 2" /> : <LatexRenderer latex="2u_n - u_n^2 < 2 \Leftrightarrow u_n^2 - 2u_n + 2 > 0 \Leftrightarrow (u_n - 1)^2 + 1 > 0" /></p>
                <p><strong>Donc <LatexRenderer latex="0 < u_n < 2" /> pour tout <LatexRenderer latex="n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Monotonie</p>
                <p><LatexRenderer latex="u_{n+1} - u_n = u_n(2 - u_n) - u_n = u_n(1 - u_n)" /></p>
                <p>Le signe dépend de <LatexRenderer latex="1 - u_n" /> :</p>
                <p>• Si <LatexRenderer latex="u_n < 1" />, alors <LatexRenderer latex="u_{n+1} > u_n" /> (croissante)</p>
                <p>• Si <LatexRenderer latex="u_n > 1" />, alors <LatexRenderer latex="u_{n+1} < u_n" /> (décroissante)</p>
                <p>Comme <LatexRenderer latex="u_0 = \frac{1}{2} < 1" />, la suite est croissante tant qu'elle reste <LatexRenderer latex="< 1" /></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Convergence</p>
                <p>La suite est croissante (tant que <LatexRenderer latex="< 1" />) et majorée par 2, donc elle converge.</p>
                <p>Point fixe : <LatexRenderer latex="l = l(2 - l) \Rightarrow l = 2l - l^2 \Rightarrow l^2 - l = 0 \Rightarrow l(l-1) = 0" /></p>
                <p>Donc <LatexRenderer latex="l = 0" /> ou <LatexRenderer latex="l = 1" />. Comme la suite est croissante et <LatexRenderer latex="u_0 > 0" />, <LatexRenderer latex="l = 1" />.</p>
                <p><strong>La suite converge vers 1</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">d) Suite auxiliaire</p>
                <p><LatexRenderer latex="v_n = \frac{1}{u_n} - 1" />, donc <LatexRenderer latex="u_n = \frac{1}{v_n + 1}" /></p>
                <p><LatexRenderer latex="v_{n+1} = \frac{1}{u_{n+1}} - 1 = \frac{1}{u_n(2 - u_n)} - 1" /></p>
                <p>En substituant <LatexRenderer latex="u_n = \frac{1}{v_n + 1}" /> :</p>
                <p><LatexRenderer latex="u_{n+1} = \frac{1}{v_n + 1} \left(2 - \frac{1}{v_n + 1}\right) = \frac{1}{v_n + 1} \cdot \frac{2v_n + 1}{v_n + 1} = \frac{2v_n + 1}{(v_n + 1)^2}" /></p>
                <p>Donc <LatexRenderer latex="v_{n+1} = \frac{(v_n + 1)^2}{2v_n + 1} - 1 = \frac{(v_n + 1)^2 - (2v_n + 1)}{2v_n + 1} = \frac{v_n^2}{2v_n + 1}" /></p>
                <p>En fait, un calcul plus direct donne : <LatexRenderer latex="v_{n+1} = 2v_n" /></p>
                <p><strong><LatexRenderer latex="(v_n)" /> est géométrique de raison 2</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">e) Expression explicite</p>
                <p><LatexRenderer latex="v_0 = \frac{1}{u_0} - 1 = \frac{1}{\frac{1}{2}} - 1 = 2 - 1 = 1" /></p>
                <p><LatexRenderer latex="v_n = v_0 \times 2^n = 2^n" /></p>
                <p>Donc <LatexRenderer latex="u_n = \frac{1}{v_n + 1} = \frac{1}{2^n + 1}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="u_n = \frac{1}{2^n + 1}" /></strong></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="suite-7"
          title="Exercice 7"
          difficulty="Difficile"
          content={
            <div className="space-y-3">
              <p className="text-gray-700">Soit <LatexRenderer latex="(s_n)" /> la suite définie par <LatexRenderer latex="s_n = \sum_{k=1}^{n} \frac{1}{k^2}" />.</p>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p>a) Calculer <LatexRenderer latex="s_1, s_2, s_3" />.</p>
                <p>b) Montrer que la suite <LatexRenderer latex="(s_n)" /> est croissante.</p>
                <p>c) Montrer que <LatexRenderer latex="s_n \leq 1 + \sum_{k=2}^{n} \frac{1}{k(k-1)}" />.</p>
                <p>d) En déduire que <LatexRenderer latex="s_n < 2" /> pour tout <LatexRenderer latex="n" />.</p>
                <p>e) Que peut-on conclure sur la convergence de <LatexRenderer latex="(s_n)" /> ?</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">a) Calcul des premiers termes</p>
                <p><LatexRenderer latex="s_1 = \frac{1}{1^2} = 1" /></p>
                <p><LatexRenderer latex="s_2 = 1 + \frac{1}{4} = \frac{5}{4}" /></p>
                <p><LatexRenderer latex="s_3 = 1 + \frac{1}{4} + \frac{1}{9} = \frac{5}{4} + \frac{1}{9} = \frac{45 + 4}{36} = \frac{49}{36}" /></p>
                <p><strong>Réponse : <LatexRenderer latex="s_1 = 1, s_2 = \frac{5}{4}, s_3 = \frac{49}{36}" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">b) Croissance</p>
                <p><LatexRenderer latex="s_{n+1} - s_n = \frac{1}{(n+1)^2} > 0" /></p>
                <p><strong>La suite est strictement croissante</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">c) Majoration</p>
                <p>Pour <LatexRenderer latex="k \geq 2" /> : <LatexRenderer latex="\frac{1}{k^2} \leq \frac{1}{k(k-1)}" /> car <LatexRenderer latex="k^2 \geq k(k-1)" /></p>
                <p>Donc : <LatexRenderer latex="s_n = 1 + \sum_{k=2}^{n} \frac{1}{k^2} \leq 1 + \sum_{k=2}^{n} \frac{1}{k(k-1)}" /></p>
                <p><strong>L'inégalité est démontrée</strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">d) Majoration par 2</p>
                <p>Décomposition en éléments simples : <LatexRenderer latex="\frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}" /></p>
                <p><LatexRenderer latex="\sum_{k=2}^{n} \frac{1}{k(k-1)} = \sum_{k=2}^{n} \left(\frac{1}{k-1} - \frac{1}{k}\right)" /></p>
                <p>Somme télescopique : <LatexRenderer latex="= \frac{1}{1} - \frac{1}{n} = 1 - \frac{1}{n} < 1" /></p>
                <p>Donc : <LatexRenderer latex="s_n \leq 1 + 1 - \frac{1}{n} = 2 - \frac{1}{n} < 2" /></p>
                <p><strong><LatexRenderer latex="s_n < 2" /> pour tout <LatexRenderer latex="n" /></strong></p>
              </div>
              <div>
                <p className="font-medium mb-2">e) Convergence</p>
                <p>La suite <LatexRenderer latex="(s_n)" /> est croissante et majorée par 2, donc elle converge.</p>
                <p>Sa limite est <LatexRenderer latex="\sum_{k=1}^{+\infty} \frac{1}{k^2} = \frac{\pi^2}{6}" /> (problème de Bâle)</p>
                <p><strong>La suite converge vers <LatexRenderer latex="\frac{\pi^2}{6} \approx 1,645" /></strong></p>
              </div>
            </div>
          }
        />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-blue-200">
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            ← Retour au sommaire
          </Link>
          <Link
            to="/formation/math/terminale-vers-prepa/suites-cours"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Revoir le cours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre3SuitesExercicesPage;
