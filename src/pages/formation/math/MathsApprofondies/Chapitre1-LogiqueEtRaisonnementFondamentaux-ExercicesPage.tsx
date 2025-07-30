import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 1</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 1 : Logique & raisonnement fondamentaux
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices sur les propositions, connecteurs logiques et démonstrations
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
              <h2 className="text-2xl font-bold text-gray-800">Rappels : Quatre types de raisonnement</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Direct
                </h4>
                <p className="text-sm text-gray-600">On part des hypothèses, on enchaîne des implications justifiées jusqu'à la conclusion.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Contraposée
                </h4>
                <p className="text-sm text-gray-600">Pour « <LatexRenderer latex="P \Rightarrow Q" /> », on démontre « <LatexRenderer latex="\lnot Q \Rightarrow \lnot P" /> ».</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Par l'absurde
                </h4>
                <p className="text-sm text-gray-600">On suppose la proposition fausse, puis on obtient une contradiction.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Récurrence
                </h4>
                <p className="text-sm text-gray-600">Initialisation (<LatexRenderer latex="n_0" />) puis hérédité (<LatexRenderer latex="P(n) \Rightarrow P(n+1)" />) <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="P(n)" /> pour tout <LatexRenderer latex="n \geq n_0" />.</p>
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
          title="Exercice 1 - Négation de phrases"
          difficulty="Niveau: Facile"
          content={
            <div>
              <p className="mb-2">Donner la négation :</p>
              <p className="ml-4 mb-1">a) « Tous les élèves de la classe ECG sont grands. »</p>
              <p className="ml-4">b) « Il existe un mouton écossais dont au moins un côté est noir. »</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-3">Pour nier une proposition, on inverse les quantificateurs et on nie le prédicat.</p>
              <p className="mb-2"><strong>a)</strong> La proposition est : <LatexRenderer latex="\forall" /> élèves en ECG, grand. Négation : <LatexRenderer latex="\exists" /> un élève en ECG qui n'est pas grand.</p>
              <p className="mb-3">Donc : « Il existe au moins un élève de la classe ECG qui n'est pas grand. »</p>
              <p className="mb-2"><strong>b)</strong> La proposition est : <LatexRenderer latex="\exists" /> mouton écossais tel que au moins un côté noir. Négation : <LatexRenderer latex="\forall" /> moutons écossais, aucun côté noir.</p>
              <p>Donc : « Pour tout mouton écossais, aucun de ses côtés n'est noir. »</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-2"
          title="Exercice 2 - Nécessaire / suffisante"
          difficulty="Niveau: Facile"
          content={
            <div>
              <p className="mb-2">Soit <LatexRenderer latex="n \in \mathbb{N}^*" />.</p>
              <p className="mb-1"><LatexRenderer latex="P" /> : « <LatexRenderer latex="n" /> est multiple de 6 », <LatexRenderer latex="Q" /> : « <LatexRenderer latex="n" /> est pair ».</p>
              <p>Indiquer si <LatexRenderer latex="P" /> est nécessaire, suffisante ou équivalente à <LatexRenderer latex="Q" />.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2">Rappel : <LatexRenderer latex="P" /> est suffisante pour <LatexRenderer latex="Q" /> si <LatexRenderer latex="P \Rightarrow Q" />. Nécessaire si <LatexRenderer latex="Q \Rightarrow P" />. Équivalente si les deux.</p>
              <p className="mb-2">Ici, si <LatexRenderer latex="n" /> multiple de 6 (ex: 6,12,...), alors pair (divisible par 2). Donc <LatexRenderer latex="P \Rightarrow Q" /> : suffisante.</p>
              <p>Réciproque : si pair (ex: 2), pas forcément multiple de 6 (2 non divisible par 3). Donc pas <LatexRenderer latex="Q \Rightarrow P" /> : non nécessaire. Pas équivalente.</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-3"
          title="Exercice 3 - Négation simple avec connecteurs"
          difficulty="Niveau: Facile"
          content={
            <p>Nier : « 136 est multiple de 17 et 2 divise 167. »</p>
          }
          correction={
            <div>
              <p className="mb-2">La proposition est <LatexRenderer latex="A \land B" />, où <LatexRenderer latex="A" /> : 136 multiple de 17, <LatexRenderer latex="B" /> : 2 divise 167. Négation : <LatexRenderer latex="\lnot A \lor \lnot B" />.</p>
              <p className="mb-2">Vérifions : 136 / 17 = 8, vrai ; 167 impair, non divisible par 2. Donc <LatexRenderer latex="\lnot B" /> vrai.</p>
              <p>Négation : 136 n'est pas multiple de 17 ou 2 ne divise pas 167 (vrai car second terme).</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-4"
          title="Exercice 4 - Traduction basique"
          difficulty="Niveau: Facile"
          content={
            <p>Traduire en français : <LatexRenderer latex="\forall x \in \mathbb{R}, x^2 \geq 0" />. Puis nier.</p>
          }
          correction={
            <div>
              <p className="mb-2">Traduction : Pour tout réel <LatexRenderer latex="x" />, <LatexRenderer latex="x^2" /> est supérieur ou égal à 0 (positif ou nul).</p>
              <p className="mb-2">Négation : Inverser quantificateur : <LatexRenderer latex="\exists x \in \mathbb{R}, x^2 < 0" />.</p>
              <p>C'est faux car tout carré réel est <LatexRenderer latex="\geq 0" />, mais la négation formelle est ainsi.</p>
            </div>
          }
        />

        <ExerciseCard
          id="facile-5"
          title="Exercice 5 - Implication simple"
          difficulty="Niveau: Facile"
          content={
            <p>Montrer par contraposée : Si <LatexRenderer latex="n^2" /> est pair, alors <LatexRenderer latex="n" /> est pair (<LatexRenderer latex="n" /> entier).</p>
          }
          correction={
            <div>
              <p className="mb-2">Contraposée : Si <LatexRenderer latex="n" /> impair, alors <LatexRenderer latex="n^2" /> impair.</p>
              <p>Preuve : Si <LatexRenderer latex="n" /> impair, <LatexRenderer latex="n = 2k + 1" /> pour <LatexRenderer latex="k \in \mathbb{Z}" />. Alors <LatexRenderer latex="n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1" />, impair. Donc contraposée vraie, implication vraie.</p>
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
          title="Exercice 6 - Quantificateurs imbriqués"
          difficulty="Niveau: Intermédiaire"
          content={
            <div>
              <p className="mb-2">Décider la vérité de :</p>
              <p className="text-center mb-2"><LatexRenderer latex="\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x^2 - y^2 = 1" /></p>
              <p>Si elle est fausse, écrire sa négation.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2">La proposition dit : Pour tout <LatexRenderer latex="x" /> réel, il existe <LatexRenderer latex="y" /> réel tel que <LatexRenderer latex="x^2 - y^2 = 1" />, i.e. <LatexRenderer latex="(x-y)(x+y) = 1" />.</p>
              <p className="mb-2">Testons <LatexRenderer latex="x = 0" /> : <LatexRenderer latex="-y^2 = 1 \Rightarrow y^2 = -1" />, impossible dans <LatexRenderer latex="\mathbb{R}" />. Donc fausse.</p>
              <p>Négation : Inverser quantificateurs : <LatexRenderer latex="\exists x_0 \in \mathbb{R}, \forall y \in \mathbb{R}, x_0^2 - y^2 \neq 1" /> (ex: <LatexRenderer latex="x_0 = 0" />).</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-2"
          title="Exercice 7 - Implication et contraposée"
          difficulty="Niveau: Intermédiaire"
          content={
            <p>Prouver l'équivalence <LatexRenderer latex="\lnot(P \Rightarrow Q) \Longleftrightarrow P \land \lnot Q" />.</p>
          }
          correction={
            <div>
              <p className="mb-2">Rappel : <LatexRenderer latex="P \Rightarrow Q \equiv \lnot P \lor Q" /> (loi logique).</p>
              <p className="mb-3">Négation : <LatexRenderer latex="\lnot(P \Rightarrow Q) = \lnot(\lnot P \lor Q) = P \land \lnot Q" /> (De Morgan).</p>
              <p className="mb-2">Vérification par table de vérité :</p>
              <div className="bg-white p-3 rounded border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-1">P</th>
                      <th className="text-left p-1">Q</th>
                      <th className="text-left p-1">P⇒Q</th>
                      <th className="text-left p-1">¬(P⇒Q)</th>
                      <th className="text-left p-1">P∧¬Q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-1">V</td><td className="p-1">V</td><td className="p-1">V</td><td className="p-1">F</td><td className="p-1">F</td></tr>
                    <tr><td className="p-1">V</td><td className="p-1">F</td><td className="p-1">F</td><td className="p-1">V</td><td className="p-1">V</td></tr>
                    <tr><td className="p-1">F</td><td className="p-1">V</td><td className="p-1">V</td><td className="p-1">F</td><td className="p-1">F</td></tr>
                    <tr><td className="p-1">F</td><td className="p-1">F</td><td className="p-1">V</td><td className="p-1">F</td><td className="p-1">F</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2">Colonnes 4 et 5 identiques : équivalence.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-3"
          title="Exercice 8 - Preuve directe vs contraposée"
          difficulty="Niveau: Intermédiaire"
          content={
            <div>
              <p className="mb-2">Montrer : <LatexRenderer latex="x^2 \geq 4 \Rightarrow |x| \geq 2" />.</p>
              <p>a) par raisonnement direct ;</p>
              <p>b) par contraposée.</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a) Direct :</strong> Si <LatexRenderer latex="x^2 \geq 4" />, alors comme <LatexRenderer latex="|x| = \sqrt{x^2}" /> (définition), et <LatexRenderer latex="\sqrt{}" /> croissante, <LatexRenderer latex="\sqrt{x^2} \geq \sqrt{4} = 2" />. Donc <LatexRenderer latex="|x| \geq 2" />.</p>
              <p><strong>b) Contraposée :</strong> Si <LatexRenderer latex="|x| < 2" />, alors <LatexRenderer latex="-2 < x < 2" />. Carré : <LatexRenderer latex="x^2 < 4" /> (car max à extrémités). Donc vraie, implication vraie.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-4"
          title="Exercice 9 - Ordre des quantificateurs"
          difficulty="Niveau: Intermédiaire"
          content={
            <div>
              <p className="mb-2">Comparer :</p>
              <p className="mb-1">a) <LatexRenderer latex="\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x + y = 0" /></p>
              <p className="mb-2">b) <LatexRenderer latex="\exists y \in \mathbb{R}, \forall x \in \mathbb{R}, x + y = 0" /></p>
              <p>Décider la vérité de a) et b).</p>
            </div>
          }
          correction={
            <div>
              <p className="mb-2"><strong>a)</strong> Pour tout <LatexRenderer latex="x" />, existe <LatexRenderer latex="y = -x" /> tel que <LatexRenderer latex="x + (-x) = 0" />. Vrai, <LatexRenderer latex="y" /> dépend de <LatexRenderer latex="x" />.</p>
              <p><strong>b)</strong> Existe <LatexRenderer latex="y" /> fixe tel que pour tout <LatexRenderer latex="x" />, <LatexRenderer latex="x + y = 0 \Rightarrow y = -x" /> pour tous <LatexRenderer latex="x" />, impossible (ex: pour <LatexRenderer latex="x = 0" />, <LatexRenderer latex="y = 0" />; pour <LatexRenderer latex="x = 1" />, <LatexRenderer latex="y = -1" />, contradiction). Faux.</p>
            </div>
          }
        />

        <ExerciseCard
          id="inter-5"
          title="Exercice 10 - Récurrence avec inégalité"
          difficulty="Niveau: Intermédiaire"
          content={
            <p>Prouver par récurrence : <LatexRenderer latex="\forall n \geq 0, 2^n \geq 1 + n" /> (Bernoulli simple).</p>
          }
          correction={
            <div>
              <p className="mb-2">Propriété <LatexRenderer latex="P(n)" /> : <LatexRenderer latex="2^n \geq 1 + n" />.</p>
              <p className="mb-2"><strong>Init :</strong> <LatexRenderer latex="n = 0" />, <LatexRenderer latex="2^0 = 1 \geq 1 + 0 = 1" />. Vrai.</p>
              <p className="mb-2"><strong>Hérédité :</strong> Assume <LatexRenderer latex="P(n)" /> : <LatexRenderer latex="2^n \geq 1 + n" />. Alors <LatexRenderer latex="2^{n+1} = 2 \cdot 2^n \geq 2(1 + n) = 2 + 2n" />.</p>
              <p className="mb-2">Or <LatexRenderer latex="2 + 2n = (1 + (n+1)) + (n+1) > 1 + (n+1)" /> pour <LatexRenderer latex="n \geq 0" />. Donc <LatexRenderer latex="P(n+1)" />.</p>
              <p>Par récurrence, vrai pour tout <LatexRenderer latex="n \geq 0" />.</p>
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
          title="Exercice 11 - Absurdum : irrationnel classique"
          difficulty="Niveau: Concours (Inspiré d'annales classiques BCE)"
          content={
            <p>Montrer qu'il n'existe pas de rationnel <LatexRenderer latex="q" /> tel que <LatexRenderer latex="q^2 = 2" />.</p>
          }
          correction={
            <div>
              <p className="mb-2">Par absurde : Suppose <LatexRenderer latex="\exists q = p/r \in \mathbb{Q}" />, fraction irréductible (pgcd(p,r)=1), avec <LatexRenderer latex="q^2 = 2" />.</p>
              <p className="mb-2">Alors <LatexRenderer latex="p^2 = 2r^2" />. Donc <LatexRenderer latex="p^2" /> pair <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="p" /> pair (si impair, <LatexRenderer latex="p^2" /> impair). <LatexRenderer latex="p = 2k" />.</p>
              <p className="mb-2">Substitue : <LatexRenderer latex="(2k)^2 = 2r^2 \Rightarrow 4k^2 = 2r^2 \Rightarrow r^2 = 2k^2 \Rightarrow r^2" /> pair <LatexRenderer latex="\Rightarrow r" /> pair.</p>
              <p>Mais <LatexRenderer latex="p" /> et <LatexRenderer latex="r" /> pairs : divisibles par 2, contradiction avec irréductible. Donc pas de tel <LatexRenderer latex="q" />.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-2"
          title="Exercice 12 - Récurrence « puissance vs carré »"
          difficulty="Niveau: Concours"
          content={
            <p>Prouver : <LatexRenderer latex="\forall n \geq 4, 2^n \geq n^2" />.</p>
          }
          correction={
            <div>
              <p className="mb-2"><LatexRenderer latex="P(n)" /> : <LatexRenderer latex="2^n \geq n^2" />.</p>
              <p className="mb-2"><strong>Init :</strong> <LatexRenderer latex="n = 4" />, <LatexRenderer latex="16 = 16" />. Vrai.</p>
              <p className="mb-2"><strong>Hérédité :</strong> Assume <LatexRenderer latex="P(n)" /> pour <LatexRenderer latex="n \geq 4" />. Alors <LatexRenderer latex="2^{n+1} = 2 \cdot 2^n \geq 2n^2" />.</p>
              <p className="mb-2">Montrer <LatexRenderer latex="2n^2 \geq (n+1)^2 = n^2 + 2n + 1 \Leftrightarrow n^2 - 2n - 1 \geq 0" />.</p>
              <p className="mb-2">Racines de <LatexRenderer latex="n^2 - 2n - 1 = 0" /> : <LatexRenderer latex="1 \pm \sqrt{2} \approx -0.41, 2.41" />. Pour <LatexRenderer latex="n \geq 4 > 2.41" />, positif. Vrai.</p>
              <p>Par récurrence, vrai pour tout <LatexRenderer latex="n \geq 4" />.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-3"
          title="Exercice 13 - Récurrence multiple"
          difficulty="Niveau: Concours (Inspiré d'annales HEC)"
          content={
            <p>Prouver <LatexRenderer latex="\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" /> par récurrence.</p>
          }
          correction={
            <div>
              <p className="mb-2"><LatexRenderer latex="P(n)" /> : somme = <LatexRenderer latex="\frac{n(n+1)(2n+1)}{6}" />.</p>
              <p className="mb-2"><strong>Init :</strong> <LatexRenderer latex="n = 1" />, <LatexRenderer latex="1 = \frac{1 \times 2 \times 3}{6} = 1" />. Vrai.</p>
              <p className="mb-2"><strong>Hérédité :</strong> Assume <LatexRenderer latex="P(n)" />. Pour <LatexRenderer latex="n+1" /> : somme jusqu'à <LatexRenderer latex="n+1" /> = somme <LatexRenderer latex="n" /> + <LatexRenderer latex="(n+1)^2" /> = <LatexRenderer latex="\frac{n(n+1)(2n+1)}{6} + (n+1)^2" />.</p>
              <p className="mb-2">Facteur commun <LatexRenderer latex="(n+1)" /> : <LatexRenderer latex="(n+1)\left[\frac{n(2n+1)}{6} + (n+1)\right] = (n+1)\frac{2n^2 + 7n + 6}{6}" />.</p>
              <p className="mb-2"><LatexRenderer latex="2n^2 + 7n + 6 = (2n+3)(n+2)" />. Donc <LatexRenderer latex="\frac{(n+1)(2n+3)(n+2)}{6} = \frac{(n+1)(n+2)(2(n+1)+1)}{6}" />, forme pour <LatexRenderer latex="n+1" />. Vrai.</p>
            </div>
          }
        />

        <ExerciseCard
          id="concours-4"
          title="Exercice 14 - Quantificateurs dans fonctions"
          difficulty="Niveau: Concours (Inspiré d'annales Ecricome)"
          content={
            <p>Nier : <LatexRenderer latex="\forall \varepsilon > 0, \exists A > 0, \forall x \geq A, f(x) > \varepsilon" /> (limite à +∞).</p>
          }
          correction={
            <div>
              <p className="mb-2">Cette proposition est la définition de <LatexRenderer latex="\lim f(x) = +\infty" /> quand <LatexRenderer latex="x \to +\infty" />.</p>
              <p className="mb-2">Négation : Inverser quantificateurs étape par étape : <LatexRenderer latex="\exists \varepsilon > 0" /> tel que <LatexRenderer latex="\forall A > 0" />, <LatexRenderer latex="\exists x \geq A" /> tel que <LatexRenderer latex="f(x) \leq \varepsilon" />.</p>
              <p>C'est : la fonction est bornée supérieurement par <LatexRenderer latex="\varepsilon" /> sur des intervalles infinis, ou ne tend pas à +∞.</p>
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
          title="Exercice 15 - Analyse-synthèse existence"
          difficulty="Niveau: Dur (Inspiré d'annales HEC)"
          content={
            <p>Déterminer applications <LatexRenderer latex="f: \mathbb{R} \to \mathbb{R}" /> tel que <LatexRenderer latex="f(x+y) = f(x) + f(y)" /> (Cauchy simple).</p>
          }
          correction={
            <div>
              <p className="mb-2"><strong>Analyse :</strong> Suppose <LatexRenderer latex="f" /> telle. Alors <LatexRenderer latex="f(0+0) = f(0) + f(0) \Rightarrow f(0) = 0" />.</p>
              <p className="mb-2"><LatexRenderer latex="f(x) + f(-x) = f(0) = 0 \Rightarrow f(-x) = -f(x)" /> : impaire.</p>
              <p className="mb-2">Pour rationnels : <LatexRenderer latex="f(nx) = nf(x)" /> par induction, <LatexRenderer latex="f(qx) = qf(x)" /> pour <LatexRenderer latex="q" /> rationnel.</p>
              <p className="mb-2"><strong>Synthèse :</strong> Si <LatexRenderer latex="f" /> continue (ou mesurable, en ECG assume), alors <LatexRenderer latex="f(x) = kx" /> avec <LatexRenderer latex="k = f(1)" />. Vérif : <LatexRenderer latex="k(x+y) = kx + ky" />.</p>
              <p>Sans continuité, solutions pathologiques existent (base Hamel), mais en ECG, on s'arrête aux linéaires.</p>
            </div>
          }
        />

        <ExerciseCard
          id="dur-2"
          title="Exercice 16 - Récurrence forte"
          difficulty="Niveau: Dur (Inspiré d'annales Henri-IV)"
          content={
            <p>Prouver tout entier {'>'} 1 a diviseur premier (récurrence forte sur facteurs).</p>
          }
          correction={
            <div>
              <p className="mb-2"><LatexRenderer latex="P(n)" /> : Si <LatexRenderer latex="n > 1" />, alors <LatexRenderer latex="n" /> a un diviseur premier.</p>
              <p className="mb-2"><strong>Init :</strong> Pour <LatexRenderer latex="n = 2" />, 2 premier, div lui-même.</p>
              <p className="mb-2"><strong>Hérédité forte :</strong> Assume <LatexRenderer latex="P(k)" /> vrai pour tout <LatexRenderer latex="k = 2" /> à <LatexRenderer latex="n" />. Pour <LatexRenderer latex="n+1 > 2" />.</p>
              <p className="mb-2">Si <LatexRenderer latex="n+1" /> premier, ok. Sinon composite : <LatexRenderer latex="\exists d" /> tel que <LatexRenderer latex="1 < d < n+1" />, <LatexRenderer latex="d" /> div <LatexRenderer latex="n+1" />.</p>
              <p>Puisque <LatexRenderer latex="d > 1" /> et <LatexRenderer latex="d \leq n" />, par hypo <LatexRenderer latex="P(d)" /> : <LatexRenderer latex="d" /> a div premier <LatexRenderer latex="p" />. Alors <LatexRenderer latex="p" /> div <LatexRenderer latex="d" /> div <LatexRenderer latex="n+1 \Rightarrow p" /> div <LatexRenderer latex="n+1" />. Vrai.</p>
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
              <p className="text-center text-gray-700 font-medium">
                Pour tout raisonnement à rédiger :
              </p>
              <div className="text-center mt-2 p-3 bg-blue-100 rounded-lg border-2 border-blue-300">
                <span className="font-bold text-blue-800">
                  Annonce du plan → chaîne logique justifiée → conclusion explicite
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage; 