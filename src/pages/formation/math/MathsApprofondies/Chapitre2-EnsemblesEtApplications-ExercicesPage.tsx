import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre2EnsemblesEtApplicationsExercicesPage = () => {
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
    stars, 
    color = "blue" 
  }: { 
    level: string; 
    title: string; 
    icon: any; 
    stars: number; 
    color?: string; 
  }) => (
    <div className={`bg-gradient-to-r from-${color}-100 to-${color}-50 border-l-4 border-${color}-500 p-6 mb-6 rounded-r-lg shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 bg-${color}-500 text-white rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
          <div className="flex gap-1 mt-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 fill-${color}-500 text-${color}-500`} />
            ))}
            {[...Array(4-stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
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
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 2 : Ensembles & applications
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices sur les opérations ensemblistes, applications et bijections
            </p>
          </div>
        </Card>

        {/* Section Rappels */}
        <Card className="mb-8 border-0 shadow-md">
          <div className="bg-gradient-to-r from-indigo-100 to-blue-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500 text-white rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Rappels : Ensembles et applications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Inclusion
                </h4>
                <p className="text-sm text-gray-600"><LatexRenderer latex="A \subset B" /> : tout élément de <LatexRenderer latex="A" /> appartient à <LatexRenderer latex="B" /></p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Opérations
                </h4>
                <p className="text-sm text-gray-600">Intersection <LatexRenderer latex="\cap" />, réunion <LatexRenderer latex="\cup" />, complémentaire <LatexRenderer latex="\overline{A}" /></p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Applications
                </h4>
                <p className="text-sm text-gray-600">Injection, surjection, bijection et fonction réciproque</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Lois de Morgan
                </h4>
                <p className="text-sm text-gray-600"><LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" /> et <LatexRenderer latex="\overline{A \cap B} = \overline{A} \cup \overline{B}" /></p>
              </div>
            </div>
          </div>
        </Card>

        {/* Niveau Facile */}
        <DifficultyHeader 
          level="Niveau Facile" 
          title="Application directe" 
          icon={Lightbulb} 
          stars={1} 
          color="green"
        />

        <ExerciseCard
          id="facile-1"
          title="Exercice 1 - Inclusion et parties"
          difficulty="Niveau: Facile"
          content={
            <div>
              <p className="mb-2">Soient <LatexRenderer latex="A = \{2, 4, 6\}" /> et <LatexRenderer latex="B = \{2, 3, 4, 5\}" />.</p>
              <p className="mb-1">a) Vérifier si <LatexRenderer latex="A" /> est inclus dans <LatexRenderer latex="B" /> et si <LatexRenderer latex="B" /> est inclus dans <LatexRenderer latex="A" />.</p>
              <p>b) Donner l'ensemble des parties de <LatexRenderer latex="A" />.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-3">Nous rappelons qu'un ensemble A est inclus dans un ensemble B si chaque élément de A appartient également à B.</p>
              <p className="mb-2"><strong>a)</strong> Pour vérifier si A est inclus dans B, nous examinons chaque élément de A :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li>L'élément 2 appartient à B ✓</li>
                <li>L'élément 4 appartient à B ✓</li>
                <li>L'élément 6 n'appartient pas à B ✗</li>
              </ul>
              <p className="mb-3">Par conséquent, A n'est pas inclus dans B.</p>
              <p className="mb-2">Pour B inclus dans A : 3 et 5 n'appartiennent pas à A, donc B n'est pas inclus dans A.</p>
              <p className="mb-2"><strong>b)</strong> L'ensemble des parties de A (avec 3 éléments, donc <LatexRenderer latex="2^3 = 8" /> parties) :</p>
              <ul className="ml-4 list-disc">
                <li><LatexRenderer latex="\varnothing" /></li>
                <li><LatexRenderer latex="\{2\}" />, <LatexRenderer latex="\{4\}" />, <LatexRenderer latex="\{6\}" /></li>
                <li><LatexRenderer latex="\{2,4\}" />, <LatexRenderer latex="\{2,6\}" />, <LatexRenderer latex="\{4,6\}" /></li>
                <li><LatexRenderer latex="\{2,4,6\}" /></li>
              </ul>
            </div>
          }
        />

        <ExerciseCard
          id="facile-2"
          title="Exercice 2 - Égalité ensembles"
          difficulty="Niveau: Facile"
          content={
            <div>
              <p className="mb-2">Soient <LatexRenderer latex="C = \{x \in \mathbb{N} : x^2 \leq 9\}" /> et <LatexRenderer latex="D = \{0, 1, 2, 3\}" />.</p>
              <p className="mb-1">a) Écrire explicitement C et comparer avec D.</p>
              <p>b) Ces ensembles sont-ils égaux ?</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a)</strong> Pour déterminer les éléments de C, nous résolvons <LatexRenderer latex="x^2 \leq 9" /> où <LatexRenderer latex="x \in \mathbb{N}" /> :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="x = 0" /> : <LatexRenderer latex="0^2 = 0 \leq 9" /> ✓</li>
                <li><LatexRenderer latex="x = 1" /> : <LatexRenderer latex="1^2 = 1 \leq 9" /> ✓</li>
                <li><LatexRenderer latex="x = 2" /> : <LatexRenderer latex="2^2 = 4 \leq 9" /> ✓</li>
                <li><LatexRenderer latex="x = 3" /> : <LatexRenderer latex="3^2 = 9 \leq 9" /> ✓</li>
                <li><LatexRenderer latex="x = 4" /> : <LatexRenderer latex="4^2 = 16 > 9" /> ✗</li>
              </ul>
              <p className="mb-3">Par conséquent, <LatexRenderer latex="C = \{0, 1, 2, 3\}" />.</p>
              <p><strong>b)</strong> Deux ensembles sont égaux s'ils contiennent exactement les mêmes éléments. Puisque C et D ont les mêmes éléments, ils sont égaux : <LatexRenderer latex="C = D" />.</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-3"
          title="Exercice 3 - Opérations basiques"
          difficulty="Niveau: Facile"
          content={
            <div>
              <p className="mb-2">Soient <LatexRenderer latex="A = \{1, 3, 5\}" /> et <LatexRenderer latex="B = \{3, 4, 5, 6\}" />.</p>
              <p className="mb-1">a) Calculer <LatexRenderer latex="A \cap B" />, <LatexRenderer latex="A \cup B" />, et <LatexRenderer latex="A \setminus B" />.</p>
              <p>b) Calculer le complémentaire de A dans <LatexRenderer latex="E = \{1,2,3,4,5,6\}" />.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a)</strong></p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="A \cap B = \{3, 5\}" /> (éléments communs)</li>
                <li><LatexRenderer latex="A \cup B = \{1, 3, 4, 5, 6\}" /> (tous les éléments)</li>
                <li><LatexRenderer latex="A \setminus B = \{1\}" /> (éléments de A non dans B)</li>
              </ul>
              <p className="mb-2"><strong>b)</strong> Le complémentaire de A dans E :</p>
              <p><LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4, 6\}" /></p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-4"
          title="Exercice 4 - Produit cartésien simple"
          difficulty="Niveau: Facile"
          content={
            <p>Soient <LatexRenderer latex="X = \{a, b\}" /> et <LatexRenderer latex="Y = \{1, 2, 3\}" />. Lister les éléments de <LatexRenderer latex="X \times Y" /> et donner son cardinal.</p>
          }
          correction={
            <div>
              <p className="mb-2">Le produit cartésien <LatexRenderer latex="X \times Y" /> est l'ensemble de tous les couples ordonnés <LatexRenderer latex="(x, y)" /> où <LatexRenderer latex="x \in X" /> et <LatexRenderer latex="y \in Y" />.</p>
              <p className="mb-2">Éléments de <LatexRenderer latex="X \times Y" /> :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="(a, 1)" />, <LatexRenderer latex="(a, 2)" />, <LatexRenderer latex="(a, 3)" /></li>
                <li><LatexRenderer latex="(b, 1)" />, <LatexRenderer latex="(b, 2)" />, <LatexRenderer latex="(b, 3)" /></li>
              </ul>
              <p>Le cardinal est <LatexRenderer latex="|X| \times |Y| = 2 \times 3 = 6" />.</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-5"
          title="Exercice 5 - Complémentaire basique"
          difficulty="Niveau: Facile"
          content={
            <p>Dans l'ensemble <LatexRenderer latex="E = \{1, 2, 3, 4\}" />, avec <LatexRenderer latex="A = \{1, 3\}" />. Calculer le complémentaire de A.</p>
          }
          correction={
            <div>
              <p className="mb-2">Le complémentaire de A dans E est l'ensemble des éléments de E qui ne sont pas dans A.</p>
              <p><LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4\}" /></p>
            </div>
          }
        />

        {/* Niveau Intermédiaire */}
        <DifficultyHeader 
          level="Niveau Intermédiaire" 
          title="Techniques combinées" 
          icon={Target} 
          stars={2} 
          color="blue"
        />

        <ExerciseCard
          id="inter-1"
          title="Exercice 6 - Distributivité"
          difficulty="Niveau: Intermédiaire"
          content={
            <p>Montrer que <LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />.</p>
          }
          correction={
            <div>
              <p className="mb-3">Nous prouvons cette égalité par double inclusion.</p>
              <p className="mb-2"><strong>1) Montrons que <LatexRenderer latex="A \cap (B \cup C) \subset (A \cap B) \cup (A \cap C)" /></strong></p>
              <p className="mb-3">Soit <LatexRenderer latex="x \in A \cap (B \cup C)" />. Alors <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B \cup C" />. Donc <LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />. Si <LatexRenderer latex="x \in B" />, alors <LatexRenderer latex="x \in A \cap B" />. Si <LatexRenderer latex="x \in C" />, alors <LatexRenderer latex="x \in A \cap C" />. Dans les deux cas, <LatexRenderer latex="x \in (A \cap B) \cup (A \cap C)" />.</p>
              <p className="mb-2"><strong>2) Montrons que <LatexRenderer latex="(A \cap B) \cup (A \cap C) \subset A \cap (B \cup C)" /></strong></p>
              <p className="mb-3">Soit <LatexRenderer latex="x \in (A \cap B) \cup (A \cap C)" />. Alors <LatexRenderer latex="x \in A \cap B" /> ou <LatexRenderer latex="x \in A \cap C" />. Dans les deux cas, <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />, donc <LatexRenderer latex="x \in B \cup C" />. Par conséquent, <LatexRenderer latex="x \in A \cap (B \cup C)" />.</p>
              <p>Les deux inclusions étant démontrées, l'égalité est établie.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-2"
          title="Exercice 7 - Applications basiques"
          difficulty="Niveau: Intermédiaire"
          content={
            <div>
              <p className="mb-2">Soit la fonction <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = 3x + 2" />.</p>
              <p className="mb-1">a) Calculer <LatexRenderer latex="f(-1)" />, <LatexRenderer latex="f(0)" /> et <LatexRenderer latex="f(2)" />.</p>
              <p>b) Montrer que f est injective et surjective.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a)</strong> Calculs :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="f(-1) = 3(-1) + 2 = -3 + 2 = -1" /></li>
                <li><LatexRenderer latex="f(0) = 3(0) + 2 = 2" /></li>
                <li><LatexRenderer latex="f(2) = 3(2) + 2 = 8" /></li>
              </ul>
              <p className="mb-2"><strong>b) Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" />. Alors <LatexRenderer latex="3x + 2 = 3y + 2" />, donc <LatexRenderer latex="3x = 3y" />, d'où <LatexRenderer latex="x = y" />. Donc f est injective.</p>
              <p><strong>Surjectivité :</strong> Soit <LatexRenderer latex="y \in \mathbb{R}" /> quelconque. Résolvons <LatexRenderer latex="f(x) = y" /> : <LatexRenderer latex="3x + 2 = y" />, donc <LatexRenderer latex="x = \frac{y-2}{3} \in \mathbb{R}" />. Tout y a un antécédent, donc f est surjective.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-3"
          title="Exercice 8 - Composition"
          difficulty="Niveau: Intermédiaire"
          content={
            <div>
              <p className="mb-2">Soient <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = x + 2" />, et <LatexRenderer latex="g : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="g(x) = 2x - 1" />.</p>
              <p className="mb-1">a) Calculer <LatexRenderer latex="f \circ g" /> et <LatexRenderer latex="g \circ f" />.</p>
              <p>b) Ces compositions sont-elles égales ?</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a)</strong> Calculs des compositions :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="(f \circ g)(x) = f(g(x)) = f(2x-1) = (2x-1) + 2 = 2x + 1" /></li>
                <li><LatexRenderer latex="(g \circ f)(x) = g(f(x)) = g(x+2) = 2(x+2) - 1 = 2x + 3" /></li>
              </ul>
              <p><strong>b)</strong> Les expressions obtenues sont <LatexRenderer latex="2x + 1" /> et <LatexRenderer latex="2x + 3" />. Pour <LatexRenderer latex="x = 0" /> par exemple : <LatexRenderer latex="f \circ g(0) = 1" /> et <LatexRenderer latex="g \circ f(0) = 3" />. Par conséquent, elles ne sont pas égales.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-4"
          title="Exercice 9 - Lois de Morgan"
          difficulty="Niveau: Intermédiaire"
          content={
            <p>Montrer que <LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" />.</p>
          }
          correction={
            <div>
              <p className="mb-3">Nous supposons un univers E fixe. Nous prouvons par double inclusion.</p>
              <p className="mb-2"><strong>1) Montrons que <LatexRenderer latex="\overline{A \cup B} \subset \overline{A} \cap \overline{B}" /></strong></p>
              <p className="mb-3">Soit <LatexRenderer latex="x \in \overline{A \cup B}" />. Alors <LatexRenderer latex="x \notin A \cup B" />, donc <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />. Par conséquent, <LatexRenderer latex="x \in \overline{A}" /> et <LatexRenderer latex="x \in \overline{B}" />, soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />.</p>
              <p className="mb-2"><strong>2) Montrons que <LatexRenderer latex="\overline{A} \cap \overline{B} \subset \overline{A \cup B}" /></strong></p>
              <p className="mb-3">Soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />. Alors <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />, donc <LatexRenderer latex="x \notin A \cup B" />, soit <LatexRenderer latex="x \in \overline{A \cup B}" />.</p>
              <p>Les deux inclusions démontrent l'égalité.</p>
            </div>
          }
        />

        {/* Niveau Concours */}
        <DifficultyHeader 
          level="Niveau Concours" 
          title="Type concours BCE/Ecricome" 
          icon={Target} 
          stars={3} 
          color="orange"
        />

        <ExerciseCard
          id="concours-1"
          title="Exercice 10 - Cardinal applications"
          difficulty="Niveau: Concours (Inspiré d'annales Ecricome)"
          content={
            <p>Soient <LatexRenderer latex="E = \{1,2\}" /> et <LatexRenderer latex="F = \{a,b,c\}" />. Quel est le nombre d'applications de E dans F ? Quel est le nombre d'injections ?</p>
          }
          correction={
            <div>
              <p className="mb-2"><strong>Applications :</strong> Le nombre d'applications de E dans F est le nombre de façons d'assigner à chaque élément de E un élément de F. Pour chaque élément de E (2 éléments), nous avons 3 choix dans F.</p>
              <p className="mb-3">Total : <LatexRenderer latex="3^2 = 9" /> applications.</p>
              <p className="mb-2"><strong>Injections :</strong> Pour les injections, les images doivent être distinctes. Pour l'image de 1 : 3 choix. Pour l'image de 2 : 2 choix restants.</p>
              <p>Total : <LatexRenderer latex="3 \times 2 = 6" /> injections.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-2"
          title="Exercice 11 - Bijection dénombrable"
          difficulty="Niveau: Concours"
          content={
            <p>Montrer qu'il existe une bijection entre <LatexRenderer latex="\mathbb{N}" /> et l'ensemble des multiples de 4 dans <LatexRenderer latex="\mathbb{N}" />. Donner un exemple.</p>
          }
          correction={
            <div>
              <p className="mb-2">Soit <LatexRenderer latex="f : \mathbb{N} \to 4\mathbb{N}" /> définie par <LatexRenderer latex="f(n) = 4n" />.</p>
              <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="4n = 4m" />. Cela implique <LatexRenderer latex="n = m" />.</p>
              <p className="mb-2"><strong>Surjectivité :</strong> Soit <LatexRenderer latex="y" /> un multiple de 4, soit <LatexRenderer latex="y = 4k" /> pour <LatexRenderer latex="k \in \mathbb{N}" />. Alors <LatexRenderer latex="f(k) = y" />.</p>
              <p className="mb-2">Par conséquent, f est bijective.</p>
              <p><strong>Exemple :</strong> <LatexRenderer latex="f(0) = 0" />, <LatexRenderer latex="f(1) = 4" />, <LatexRenderer latex="f(2) = 8" />, <LatexRenderer latex="f(3) = 12" />, etc.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-3"
          title="Exercice 12 - Bijection monotone"
          difficulty="Niveau: Concours (Inspiré BCE)"
          content={
            <p>Montrer que si f est continue et strictement monotone sur un intervalle I, alors f est une bijection sur son image <LatexRenderer latex="f(I)" />.</p>
          }
          correction={
            <div>
              <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" /> avec <LatexRenderer latex="x \neq y" />. Sans perte de généralité, supposons <LatexRenderer latex="x < y" />. Puisque f est strictement monotone (supposons croissante), <LatexRenderer latex="f(x) < f(y)" />, contradiction avec l'égalité. Donc <LatexRenderer latex="x = y" />.</p>
              <p className="mb-2"><strong>Surjectivité sur <LatexRenderer latex="f(I)" /> :</strong> L'image de f est un intervalle car f est continue et monotone. Par le théorème des valeurs intermédiaires, pour tout <LatexRenderer latex="z" /> entre <LatexRenderer latex="f(a)" /> et <LatexRenderer latex="f(b)" /> où <LatexRenderer latex="a < b" /> dans I, il existe <LatexRenderer latex="c \in I" /> tel que <LatexRenderer latex="f(c) = z" />.</p>
              <p>Par conséquent, f est surjective sur son image.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-4"
          title="Exercice 13 - Dénombrabilité Q"
          difficulty="Niveau: Concours"
          content={
            <p>Montrer que l'ensemble des rationnels <LatexRenderer latex="\mathbb{Q}" /> est dénombrable, c'est-à-dire qu'il existe une bijection avec <LatexRenderer latex="\mathbb{N}" />.</p>
          }
          correction={
            <div>
              <p className="mb-2">Les rationnels sont l'union des positifs, négatifs et zéro. Nous construisons une énumération :</p>
              <p className="mb-2"><strong>1) Rationnels positifs :</strong> Listons par fractions irréductibles avec somme numérateur + dénominateur croissante :</p>
              <p className="mb-2">Somme 2 : <LatexRenderer latex="\frac{1}{1}" /></p>
              <p className="mb-2">Somme 3 : <LatexRenderer latex="\frac{1}{2}, \frac{2}{1}" /></p>
              <p className="mb-2">Somme 4 : <LatexRenderer latex="\frac{1}{3}, \frac{3}{1}" /> (on exclut <LatexRenderer latex="\frac{2}{2}" /> car non irréductible)</p>
              <p className="mb-2"><strong>2) Extension :</strong> Incluons 0, puis alternons avec les négatifs correspondants.</p>
              <p>Cela définit une bijection entre <LatexRenderer latex="\mathbb{Q}" /> et <LatexRenderer latex="\mathbb{N}" />.</p>
            </div>
          }
        />

        {/* Niveau Dur */}
        <DifficultyHeader 
          level="Niveau Dur" 
          title="Niveau parisienne" 
          icon={Crown} 
          stars={4} 
          color="purple"
        />

        <ExerciseCard
          id="dur-1"
          title="Exercice 14 - Non-dénombrable R"
          difficulty="Niveau: Dur (Inspiré parisiennes)"
          content={
            <p>Montrer qu'il n'existe pas de bijection entre <LatexRenderer latex="\mathbb{N}" /> et <LatexRenderer latex="\mathbb{R}" />, en utilisant l'argument de la diagonale de Cantor.</p>
          }
          correction={
            <div>
              <p className="mb-2">Supposons par absurde qu'il existe une bijection <LatexRenderer latex="f : \mathbb{N} \to (0,1)" />. Chaque <LatexRenderer latex="f(n)" /> s'écrit en décimale <LatexRenderer latex="f(n) = 0.d_{n1} d_{n2} d_{n3} \ldots" /> où <LatexRenderer latex="d_{ni}" /> sont des chiffres.</p>
              <p className="mb-2">Construisons <LatexRenderer latex="r = 0.r_1 r_2 r_3 \ldots" /> où :</p>
              <ul className="mb-3 ml-4 list-disc">
                <li><LatexRenderer latex="r_k = d_{kk} + 1" /> si <LatexRenderer latex="d_{kk} < 9" /></li>
                <li><LatexRenderer latex="r_k = 0" /> si <LatexRenderer latex="d_{kk} = 9" /></li>
              </ul>
              <p className="mb-2">Alors <LatexRenderer latex="r \in (0,1)" /> mais <LatexRenderer latex="r" /> diffère de tout <LatexRenderer latex="f(n)" /> au <LatexRenderer latex="n" />-ième chiffre, contradiction avec la surjectivité.</p>
              <p>Par conséquent, <LatexRenderer latex="\mathbb{R}" /> n'est pas dénombrable.</p>
            </div>
          }
        />

        <ExerciseCard
          id="dur-2"
          title="Exercice 15 - Puissance P(N)"
          difficulty="Niveau: Dur"
          content={
            <p>Montrer que le cardinal de l'ensemble des parties de <LatexRenderer latex="\mathbb{N}" /> est strictement supérieur au cardinal de <LatexRenderer latex="\mathbb{N}" />.</p>
          }
          correction={
            <div>
              <p className="mb-2">Supposons par absurde une bijection <LatexRenderer latex="f : \mathbb{N} \to \mathcal{P}(\mathbb{N})" />.</p>
              <p className="mb-2">Construisons <LatexRenderer latex="S = \{k \in \mathbb{N} : k \notin f(k)\}" />.</p>
              <p className="mb-2"><LatexRenderer latex="S" /> est une partie de <LatexRenderer latex="\mathbb{N}" />. Supposons <LatexRenderer latex="S = f(m)" /> pour un <LatexRenderer latex="m \in \mathbb{N}" />.</p>
              <p className="mb-2">Si <LatexRenderer latex="m \in S" />, alors par définition <LatexRenderer latex="m \notin f(m) = S" />, contradiction.</p>
              <p className="mb-2">Si <LatexRenderer latex="m \notin S" />, alors <LatexRenderer latex="m \in f(m) = S" />, contradiction.</p>
              <p>Par conséquent, <LatexRenderer latex="S" /> n'est l'image d'aucun <LatexRenderer latex="m" />, contradiction avec la surjectivité. Le cardinal de <LatexRenderer latex="\mathcal{P}(\mathbb{N})" /> est strictement supérieur.</p>
            </div>
          }
        />

        {/* Conseil méthodologique */}
        <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conseil méthodologique
            </h3>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="text-center text-gray-700 font-medium mb-2">
                Pour les preuves sur ensembles et applications :
              </p>
              <div className="text-center">
                <span className="font-bold text-blue-800">
                  Utilisez la double inclusion pour les égalités d'ensembles • Fournissez des contre-exemples pour les propriétés non vérifiées • Construisez explicitement les bijections lorsque possible
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre2EnsemblesEtApplicationsExercicesPage; 