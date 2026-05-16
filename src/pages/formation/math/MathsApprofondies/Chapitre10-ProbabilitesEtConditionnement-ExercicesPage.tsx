import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold text-red-800 uppercase tracking-widest mb-2 mt-4 first:mt-0">
    {children}
  </p>
);

const PointMethodo = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Méthode</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const Astuce = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Astuce</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const ConclusionBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">
    <SectionLabel>Conclusion</SectionLabel>
    <div className="text-stone-800 leading-relaxed">{children}</div>
  </div>
);

const difficultyLabel: Record<string, string> = {
  'Niveau: Facile': 'FACILE',
  'Niveau: Intermédiaire': 'MOYEN',
  'Niveau: Concours': 'DIFFICILE',
  'Niveau: Concours (Classique)': 'DIFFICILE',
  'Niveau: Difficile': 'HEC',
};

const Chapitre10ProbabilitesEtConditionnementExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ level }: { level: string }) => (
    <div className="flex items-center gap-3 mb-4 mt-10">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
        {level}
      </span>
      <div className="flex-1 border-t border-stone-200" />
    </div>
  );

  const ExerciseCard = ({
    id, title, content, correction, difficulty,
  }: {
    id: string; title: string; content: React.ReactNode;
    correction: React.ReactNode; difficulty: string;
  }) => {
    const num = id.replace(/[^0-9]/g, '').padStart(2, '0');
    const badge = difficultyLabel[difficulty] ?? difficulty.replace('Niveau: ', '').toUpperCase();
    const isOpen = visibleCorrections[id];
    return (
      <div className="mb-6 border border-stone-200 rounded-xl bg-carnet-paper-2 shadow-sm p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold italic text-red-800 leading-none">{num}</span>
            <span className="text-stone-300 font-light text-xl leading-none">—</span>
            <h3 className="font-medium text-stone-900 text-base leading-snug">
              {title.replace(/^Exercice \d+ - /, '')}
            </h3>
          </div>
          <span className="shrink-0 text-[11px] font-semibold text-red-800 border border-red-200 rounded-full px-3 py-0.5 tracking-wider">
            {badge}
          </span>
        </div>
        <div className="text-stone-700 leading-relaxed mb-6">{content}</div>
        <button
          onClick={() => toggleCorrection(id)}
          className="flex items-center gap-2 text-sm text-stone-600 border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-50 transition-colors"
        >
          {isOpen ? (<><EyeOff className="w-4 h-4" /> Masquer la correction</>) : (<><Eye className="w-4 h-4" /> Afficher la correction</>)}
        </button>
        {isOpen && (
          <div className="mt-5 border border-dashed border-stone-300 border-l-[3px] border-l-red-800 rounded-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-red-800" />
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Corrigé détaillé</span>
            </div>
            <div className="text-stone-700 leading-relaxed space-y-2">{correction}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Probabilités et Conditionnement"
      description="Exercices sur les espaces probabilisés, le conditionnement et l'indépendance."
      slug="probabilites-conditionnement"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Réduction des matrices symétriques"
      }}
      nextChapter={{
        slug: "applications-lineaires-structures-vectorielles",
        title: "Applications Linéaires & Structures"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Dénombrement et conditionnement de base" />

          <ExerciseCard
            id="ex1"
            title="Urne avec remise et sans remise"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Une urne contient 2 boules jaunes et 7 boules noires. On effectue <LatexRenderer latex="n" /> tirages.</p>
                <p>1. Avec remise : calculer <LatexRenderer latex="P(A)" /> où <LatexRenderer latex="A" /> = « tous les tirages sont jaunes », et <LatexRenderer latex="P(B_k)" /> où <LatexRenderer latex="B_k" /> = « la première boule jaune apparaît au tirage <LatexRenderer latex="k" /> ».</p>
                <p>2. Sans remise (<LatexRenderer latex="n=2" />) : calculer la probabilité d'obtenir 2 boules jaunes aux deux premiers tirages.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Avec remise, les tirages sont indépendants et la probabilité se multiplie. Sans remise, on utilise la formule des probabilités composées : <LatexRenderer latex="P(A\cap B)=P(A)\cdot P(B|A)" />.
                </PointMethodo>
                <p><strong>Avec remise.</strong> Soit <LatexRenderer latex="p_J=2/9" /> la probabilité de tirer jaune à chaque tirage. Les <LatexRenderer latex="n" /> tirages sont indépendants. Donc <LatexRenderer latex="P(A)=(2/9)^n" />.</p>
                <p>Or l'événement <LatexRenderer latex="B_k" /> correspond à <LatexRenderer latex="k-1" /> tirages noirs puis 1 tirage jaune. D'où, par indépendance :</p>
                <p><LatexRenderer latex="P(B_k)=\left(\frac{7}{9}\right)^{k-1}\times\frac{2}{9}" />.</p>
                <Astuce>La loi de <LatexRenderer latex="k" /> (rang du premier succès) est une loi géométrique de paramètre <LatexRenderer latex="p=2/9" />.</Astuce>
                <p><strong>Sans remise.</strong> Soit <LatexRenderer latex="J_1" /> = « 1re boule jaune » et <LatexRenderer latex="J_2" /> = « 2e boule jaune ». Par la formule des probabilités composées :</p>
                <p><LatexRenderer latex="P(J_1\cap J_2)=P(J_1)\cdot P(J_2|J_1)=\frac{2}{9}\times\frac{1}{8}=\frac{1}{36}" />.</p>
                <ConclusionBox>
                  Avec remise : <LatexRenderer latex="P(A)=(2/9)^n" />, <LatexRenderer latex="P(B_k)=(7/9)^{k-1}\cdot(2/9)" />. Sans remise : <LatexRenderer latex="P(J_1\cap J_2)=1/36" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Lancer de n dés — au moins un 6"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>On lance <LatexRenderer latex="n" /> dés équilibrés. Soit <LatexRenderer latex="A_n" /> l'événement « obtenir au moins un 6 ».</p>
                <p>Calculer <LatexRenderer latex="P(A_n)" /> et déterminer sa limite quand <LatexRenderer latex="n\to+\infty" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour « au moins un », on passe au complémentaire : <LatexRenderer latex="P(A_n)=1-P(\overline{A_n})" />. L'événement complémentaire est « aucun 6 », ce qui se traite facilement par indépendance.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\overline{A_n}" /> = « aucun des <LatexRenderer latex="n" /> dés ne donne 6 ». Les lancers sont indépendants, donc :</p>
                <p><LatexRenderer latex="P(\overline{A_n})=\left(\frac{5}{6}\right)^n" />.</p>
                <p>Ainsi <LatexRenderer latex="P(A_n)=1-\left(\frac{5}{6}\right)^n" />.</p>
                <p>Or <LatexRenderer latex="(5/6)^n\to 0" /> quand <LatexRenderer latex="n\to+\infty" />, donc <LatexRenderer latex="P(A_n)\to 1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="P(A_n)=1-(5/6)^n \;\longrightarrow\; 1" /> quand <LatexRenderer latex="n\to+\infty" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Formules de Bayes et probabilités totales" />

          <ExerciseCard
            id="ex3"
            title="Contrôle qualité — théorème de Bayes"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>5 % des pièces produites sont défectueuses. Un test de contrôle accepte une bonne pièce avec proba 0,96, et rejette une mauvaise pièce avec proba 0,98.</p>
                <p>1. Calculer la probabilité d'erreur de contrôle.</p>
                <p>2. Calculer <LatexRenderer latex="P(M|A)" /> : probabilité qu'une pièce acceptée soit défectueuse.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On applique la formule des probabilités totales pour calculer les probabilités d'erreur, puis le théorème de Bayes pour inverser le conditionnement.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="M" /> = « pièce mauvaise » (<LatexRenderer latex="P(M)=0{,}05" />) et <LatexRenderer latex="B" /> = « bonne pièce » (<LatexRenderer latex="P(B)=0{,}95" />).</p>
                <p>Soit <LatexRenderer latex="A" /> = « pièce acceptée ». Par la formule des probabilités totales :</p>
                <p><LatexRenderer latex="P(A)=P(A|B)\cdot P(B)+P(A|M)\cdot P(M)=0{,}96\times 0{,}95+0{,}02\times 0{,}05" />.</p>
                <p>D'où <LatexRenderer latex="P(A)=0{,}9120+0{,}0010=0{,}9130" />.</p>
                <p>L'erreur de contrôle est <LatexRenderer latex="P(E)=P(\text{bonne rejetée})+P(\text{mauvaise acceptée})=0{,}04\times 0{,}95+0{,}02\times 0{,}05=0{,}0390" />.</p>
                <Astuce>Le théorème de Bayes donne <LatexRenderer latex="P(M|A)=P(A|M)\cdot P(M)/P(A)" />.</Astuce>
                <p>Ainsi <LatexRenderer latex="P(M|A)=\dfrac{0{,}02\times 0{,}05}{0{,}9130}=\dfrac{0{,}001}{0{,}9130}\approx\dfrac{1}{913}" />.</p>
                <ConclusionBox>
                  Probabilité d'erreur : <LatexRenderer latex="\approx 3{,}9\%" />. Probabilité qu'une pièce acceptée soit mauvaise : <LatexRenderer latex="P(M|A)\approx 1/913" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Suite arithmético-géométrique — probabilités de tirage"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>On dispose de deux pièces A (P(pile) = 1/2) et B (P(pile) = 1/3). On change de pièce selon une règle déterministe.</p>
                <p>Soit <LatexRenderer latex="a_n" /> la probabilité d'utiliser la pièce A au rang <LatexRenderer latex="n" />. Exprimer <LatexRenderer latex="a_{n+1}" /> en fonction de <LatexRenderer latex="a_n" />, puis déterminer la limite.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On applique la formule des probabilités totales sur l'événement « utiliser A au rang <LatexRenderer latex="n+1" /> » en conditionnant par la pièce utilisée au rang <LatexRenderer latex="n" />.
                </PointMethodo>
                <p>Soit la règle : on change de pièce si on obtient pile. Conditionnant sur la pièce au rang <LatexRenderer latex="n" /> :</p>
                <p><LatexRenderer latex="a_{n+1}=P(\text{A au rang }n+1|A_n)\cdot a_n + P(\text{A au rang }n+1|B_n)\cdot(1-a_n)" />.</p>
                <p>Or on passe de A à B avec proba 1/2 (pile avec A), et de B à A avec proba 1/3 (pile avec B). D'où :</p>
                <p><LatexRenderer latex="a_{n+1}=\frac{1}{2}\,a_n+\frac{1}{3}(1-a_n)=-\frac{1}{6}\,a_n+\frac{1}{3}" />.</p>
                <p>C'est une suite arithmético-géométrique. Le point fixe est <LatexRenderer latex="\ell=-\frac{1}{6}\ell+\frac{1}{3}" />, soit <LatexRenderer latex="\ell=\frac{2}{7}" />.</p>
                <p>Ainsi <LatexRenderer latex="a_n-\frac{2}{7}=\left(-\frac{1}{6}\right)^n\left(a_0-\frac{2}{7}\right)\to 0" />, donc <LatexRenderer latex="a_n\to\frac{2}{7}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="a_{n+1}=-\tfrac{1}{6}\,a_n+\tfrac{1}{3}" /> et <LatexRenderer latex="a_n\xrightarrow[n\to\infty]{}\dfrac{2}{7}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Formule de Poincaré et indépendance" />

          <ExerciseCard
            id="ex5"
            title="Reconstitution de paires — principe des tiroirs"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>On dispose de 3 paires de chaussures (6 chaussures distinctes). On tire 4 chaussures au hasard sans remise.</p>
                <p>Calculer la probabilité d'avoir au moins une paire complète.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On passe au complémentaire : calculer d'abord la probabilité de n'avoir aucune paire, puis soustraire de 1.
                </PointMethodo>
                <p>L'espace total est <LatexRenderer latex="\binom{6}{4}=15" /> tirages possibles.</p>
                <p>Pour « aucune paire » : chaque chaussure tirée doit être la seule de sa paire. On choisit 4 paires parmi 3 — impossible (il n'y a que 3 paires et on tire 4 chaussures). Par le principe des tiroirs, avec 4 chaussures tirées parmi 3 paires, au moins deux chaussures appartiennent à la même paire.</p>
                <p>Ainsi <LatexRenderer latex="P(\text{aucune paire})=0" />, donc :</p>
                <ConclusionBox>
                  <LatexRenderer latex="P(\text{au moins une paire})=1" />. C'est une conséquence directe du principe des tiroirs.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Indépendance min/max dés"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-2">
                <p>On lance 3 dés équilibrés <LatexRenderer latex="D_1, D_2, D_3" />. On définit <LatexRenderer latex="M_i=\{\max(D_1,D_2)\leq i\}" /> et <LatexRenderer latex="m_i=\{\min(D_2,D_3)\geq i\}" />.</p>
                <p>Pour quelles valeurs de <LatexRenderer latex="i" /> les événements <LatexRenderer latex="M_i" /> et <LatexRenderer latex="m_i" /> sont-ils indépendants ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On calcule <LatexRenderer latex="P(M_i)" />, <LatexRenderer latex="P(m_i)" /> et <LatexRenderer latex="P(M_i\cap m_i)" /> explicitement, puis on teste l'égalité <LatexRenderer latex="P(M_i\cap m_i)=P(M_i)\cdot P(m_i)" /> pour chaque valeur de <LatexRenderer latex="i\in\{1,\ldots,6\}" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="P(M_i)=P(\max(D_1,D_2)\leq i)=(i/6)^2" /> et <LatexRenderer latex="P(m_i)=P(\min(D_2,D_3)\geq i)=((7-i)/6)^2" />.</p>
                <p>Or <LatexRenderer latex="P(M_i\cap m_i)=P(\max(D_1,D_2)\leq i,\,\min(D_2,D_3)\geq i)" />. La contrainte porte sur <LatexRenderer latex="D_2" /> qui doit vérifier <LatexRenderer latex="D_2\leq i" /> et <LatexRenderer latex="D_2\geq i" />, donc <LatexRenderer latex="D_2=i" />.</p>
                <p>D'où <LatexRenderer latex="P(M_i\cap m_i)=P(D_1\leq i)\cdot P(D_2=i)\cdot P(D_3\geq i)=\tfrac{i}{6}\cdot\tfrac{1}{6}\cdot\tfrac{7-i}{6}=\frac{i(7-i)}{216}" />.</p>
                <p>L'indépendance requiert <LatexRenderer latex="\frac{i(7-i)}{216}=\frac{i^2}{36}\cdot\frac{(7-i)^2}{36}=\frac{i^2(7-i)^2}{1296}" />.</p>
                <p>Ainsi <LatexRenderer latex="1296\,i(7-i)=216\,i^2(7-i)^2" />, soit <LatexRenderer latex="6=i(7-i)" />, ce qui donne <LatexRenderer latex="i=1" /> ou <LatexRenderer latex="i=6" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="M_i" /> et <LatexRenderer latex="m_i" /> sont indépendants si et seulement si <LatexRenderer latex="i\in\{1,6\}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 4 — Système complet et formule des probabilités totales" />

          <ExerciseCard
            id="ex10"
            title="Système complet d'événements"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-2">
                <p>Trois machines A, B, C produisent respectivement 30 %, 50 % et 20 % de la production totale. Les taux de défaut sont 4 %, 2 %, 5 %.</p>
                <p>Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour calculer la probabilité d'un événement <LatexRenderer latex="D" /> via un système complet d'événements <LatexRenderer latex="(A, B, C)" />, on applique la formule des probabilités totales : <LatexRenderer latex="P(D) = \sum_i P(D \mid A_i) P(A_i)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(A, B, C)" /> un système complet d'événements (les 3 machines partitionnent la production). On a :</p>
                <LatexRenderer latex="P(A) = 0{,}30, \quad P(B) = 0{,}50, \quad P(C) = 0{,}20." />
                <LatexRenderer latex="P(D \mid A) = 0{,}04, \quad P(D \mid B) = 0{,}02, \quad P(D \mid C) = 0{,}05." />
                <p className="mt-2">D'où, par la formule des probabilités totales :</p>
                <LatexRenderer latex="P(D) = 0{,}04 \cdot 0{,}30 + 0{,}02 \cdot 0{,}50 + 0{,}05 \cdot 0{,}20 = 0{,}012 + 0{,}010 + 0{,}010 = 0{,}032." />
                <Astuce>
                  Vérification : <LatexRenderer latex="P(A) + P(B) + P(C) = 1" />. ✓ Le système est bien complet.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="P(D) = 3{,}2\%" />. La pièce a une probabilité de 3,2 % d'être défectueuse.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Indépendance d'événements" />

          <ExerciseCard
            id="ex11"
            title="Indépendance mutuelle versus deux à deux"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>On lance deux pièces équilibrées. Soient les événements <LatexRenderer latex="A" /> = "la première donne pile", <LatexRenderer latex="B" /> = "la seconde donne pile", <LatexRenderer latex="C" /> = "les deux pièces donnent le même résultat".</p>
                <p>1. Démontrer que <LatexRenderer latex="A, B, C" /> sont deux à deux indépendants.</p>
                <p>2. Vérifier que <LatexRenderer latex="A, B, C" /> ne sont pas mutuellement indépendants.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Trois événements sont indépendants deux à deux si <LatexRenderer latex="P(A \cap B) = P(A) P(B)" /> pour chaque paire. Ils sont mutuellement indépendants si en plus <LatexRenderer latex="P(A \cap B \cap C) = P(A) P(B) P(C)" />. La distinction est subtile : l'indépendance deux à deux n'implique pas l'indépendance mutuelle.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\Omega = \{PP, PF, FP, FF\}" /> équiprobable.</p>
                <p>Or <LatexRenderer latex="A = \{PP, PF\}" />, <LatexRenderer latex="B = \{PP, FP\}" />, <LatexRenderer latex="C = \{PP, FF\}" />, et <LatexRenderer latex="P(A) = P(B) = P(C) = 1/2" />.</p>
                <p className="mt-2"><strong>1. Indépendance deux à deux.</strong></p>
                <LatexRenderer latex="P(A \cap B) = P(\{PP\}) = 1/4 = (1/2)(1/2) = P(A) P(B). \;\checkmark" />
                <LatexRenderer latex="P(A \cap C) = P(\{PP\}) = 1/4 = P(A) P(C). \;\checkmark" />
                <LatexRenderer latex="P(B \cap C) = P(\{PP\}) = 1/4 = P(B) P(C). \;\checkmark" />
                <p className="mt-2">Donc <LatexRenderer latex="A, B, C" /> sont deux à deux indépendants.</p>
                <p className="mt-2"><strong>2. Indépendance mutuelle.</strong> Or <LatexRenderer latex="A \cap B \cap C = \{PP\}" />, donc <LatexRenderer latex="P(A \cap B \cap C) = 1/4" />. Mais <LatexRenderer latex="P(A) P(B) P(C) = 1/8" />.</p>
                <Astuce>
                  Ce contre-exemple classique montre que l'indépendance mutuelle est strictement plus forte que l'indépendance deux à deux.
                </Astuce>
                <p className="mt-2">D'où <LatexRenderer latex="P(A \cap B \cap C) = 1/4 \ne 1/8 = P(A) P(B) P(C)" />. Donc <LatexRenderer latex="A, B, C" /> ne sont <strong>pas</strong> mutuellement indépendants.</p>
                <ConclusionBox>
                  <LatexRenderer latex="A, B, C" /> sont deux à deux indépendants mais pas mutuellement indépendants.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Théorème de Bayes — diagnostic médical"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Une maladie touche 1 % de la population. Un test de dépistage est positif chez 99 % des malades et chez 5 % des non-malades.</p>
                <p>Quelle est la probabilité d'être malade sachant que le test est positif ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le théorème de Bayes inverse le conditionnement : <LatexRenderer latex="P(M \mid T) = P(T \mid M) P(M) / P(T)" />, où <LatexRenderer latex="P(T)" /> se calcule par la formule des probabilités totales.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="M" /> = "malade", <LatexRenderer latex="T" /> = "test positif". Données :</p>
                <LatexRenderer latex="P(M) = 0{,}01, \quad P(\overline{M}) = 0{,}99, \quad P(T \mid M) = 0{,}99, \quad P(T \mid \overline{M}) = 0{,}05." />
                <p className="mt-2"><strong>Probabilité totale.</strong> Or :</p>
                <LatexRenderer latex="P(T) = P(T \mid M) P(M) + P(T \mid \overline{M}) P(\overline{M}) = 0{,}99 \cdot 0{,}01 + 0{,}05 \cdot 0{,}99 = 0{,}0099 + 0{,}0495 = 0{,}0594." />
                <p className="mt-2"><strong>Bayes.</strong> D'où :</p>
                <LatexRenderer latex="P(M \mid T) = \frac{P(T \mid M) P(M)}{P(T)} = \frac{0{,}0099}{0{,}0594} \approx 0{,}167 = 16{,}7\%." />
                <Astuce>
                  Résultat contre-intuitif : malgré un test fiable à 99%, la probabilité d'être réellement malade quand le test est positif n'est que de 17%. C'est dû à la rareté de la maladie (1%) qui domine la précision du test.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="P(M \mid T) \approx 16{,}7\%" />. La précision du test seule ne suffit pas : la prévalence est cruciale dans l'interprétation d'un dépistage.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Formule des probabilités composées" />

          <ExerciseCard
            id="ex13"
            title="Tirages sans remise — formule des probabilités composées"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Une urne contient 3 boules blanches et 5 boules noires. On tire successivement 3 boules sans remise.</p>
                <p>Calculer la probabilité d'obtenir exactement 2 boules blanches.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour des tirages sans remise, on utilise la formule des probabilités composées <LatexRenderer latex="P(A_1 \cap \cdots \cap A_n) = P(A_1) P(A_2 \mid A_1) \cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1})" />. On somme ensuite sur tous les arrangements possibles donnant le résultat souhaité.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="B_i" /> = "la <LatexRenderer latex="i" />-ème boule est blanche" et <LatexRenderer latex="N_i" /> = "noire". On veut <LatexRenderer latex="P(\text{exactement 2 blanches sur 3})" />.</p>
                <p className="mt-2">Cet événement correspond à 3 cas disjoints : <LatexRenderer latex="BBN" />, <LatexRenderer latex="BNB" />, <LatexRenderer latex="NBB" />.</p>
                <p className="mt-2"><strong>Cas BBN.</strong> Par la formule des probabilités composées :</p>
                <LatexRenderer latex="P(B_1 \cap B_2 \cap N_3) = P(B_1) P(B_2 \mid B_1) P(N_3 \mid B_1 \cap B_2) = \frac{3}{8} \cdot \frac{2}{7} \cdot \frac{5}{6} = \frac{30}{336}." />
                <p className="mt-2"><strong>Symétrie des cas.</strong> Par calcul analogue, <LatexRenderer latex="P(BNB) = P(NBB) = 30/336" />. (Le numérateur reste <LatexRenderer latex="3 \cdot 2 \cdot 5 = 30" /> dans chaque cas.)</p>
                <Astuce>
                  C'est une caractéristique des tirages sans remise : la probabilité d'une séquence ne dépend que de la composition finale, pas de l'ordre. (En probabilité de séquence.)
                </Astuce>
                <p className="mt-2">D'où, par sommation :</p>
                <LatexRenderer latex="P(\text{2 blanches}) = 3 \cdot \frac{30}{336} = \frac{90}{336} = \frac{15}{56}." />
                <ConclusionBox>
                  <LatexRenderer latex="P(\text{exactement 2 blanches sur 3 tirages sans remise}) = 15/56 \approx 26{,}8\%" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 7 — Limites de suites d'événements" />

          <ExerciseCard
            id="ex14"
            title="Continuité monotone et limite d'événements"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-2">
                <p>Soit <LatexRenderer latex="(A_n)_{n \in \mathbb{N}}" /> une suite croissante d'événements (i.e. <LatexRenderer latex="A_n \subset A_{n+1}" />). Posons <LatexRenderer latex="A = \bigcup_{n \in \mathbb{N}} A_n" />.</p>
                <p>Démontrer que <LatexRenderer latex="P(A) = \lim_{n \to +\infty} P(A_n)" /> (continuité monotone de la probabilité).</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La continuité monotone se démontre en décomposant <LatexRenderer latex="A" /> en une union disjointe de "couches" <LatexRenderer latex="B_n = A_n \setminus A_{n-1}" />, et en appliquant la sigma-additivité. C'est l'analogue probabiliste du théorème de convergence monotone.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(A_n)" /> croissante. Posons <LatexRenderer latex="B_0 = A_0" /> et <LatexRenderer latex="B_n = A_n \setminus A_{n-1}" /> pour <LatexRenderer latex="n \ge 1" />.</p>
                <p className="mt-2"><strong>Propriétés des <LatexRenderer latex="B_n" />.</strong> Or les <LatexRenderer latex="B_n" /> sont 2 à 2 disjoints (puisque <LatexRenderer latex="A_n" /> est croissante). De plus :</p>
                <LatexRenderer latex="A_n = \bigsqcup_{k=0}^n B_k \quad \text{et} \quad A = \bigsqcup_{k=0}^{+\infty} B_k." />
                <p className="mt-2"><strong>Application de la sigma-additivité.</strong> Par la sigma-additivité de <LatexRenderer latex="P" /> :</p>
                <LatexRenderer latex="P(A) = \sum_{k=0}^{+\infty} P(B_k) = \lim_{n \to +\infty} \sum_{k=0}^n P(B_k) = \lim_{n \to +\infty} P(A_n)." />
                <Astuce>
                  L'analogue pour les suites décroissantes : si <LatexRenderer latex="A_n \supset A_{n+1}" />, alors <LatexRenderer latex="P(\bigcap_n A_n) = \lim_n P(A_n)" />. Cette propriété s'appelle la "continuité décroissante" de la probabilité.
                </Astuce>
                <ConclusionBox>
                  Continuité monotone croissante : si <LatexRenderer latex="A_n \uparrow A" />, alors <LatexRenderer latex="P(A_n) \to P(A)" />. Ce résultat est crucial pour passer à la limite dans les calculs probabilistes.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ProbabilitesEtConditionnementExercicesPage;
