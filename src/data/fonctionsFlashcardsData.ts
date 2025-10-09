export interface FonctionsFlashcard {
  id: number;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  question: string;
  answer: string;
}

export const fonctionsFlashcards: FonctionsFlashcard[] = [
  // Ensembles
  {
    id: 1,
    category: 'Ensembles',
    difficulty: 'facile',
    question: 'Qu\'est-ce que A⊂B ?',
    answer: 'A est contenu dans B si tout élément de A appartient également à B.'
  },
  {
    id: 2,
    category: 'Ensembles',
    difficulty: 'facile',
    question: 'Comment définit-on l\'égalité entre deux ensembles A et B ?',
    answer: 'A=B si et seulement si A⊂B et B⊂A.'
  },
  {
    id: 3,
    category: 'Ensembles',
    difficulty: 'facile',
    question: 'Définir l\'intersection A∩B',
    answer: 'x∈A∩B ⟺ x∈A et x∈B'
  },
  {
    id: 4,
    category: 'Ensembles',
    difficulty: 'facile',
    question: 'Définir la réunion A∪B',
    answer: 'x∈A∪B ⟺ x∈A ou x∈B'
  },
  {
    id: 5,
    category: 'Ensembles',
    difficulty: 'moyen',
    question: 'Énoncer les lois de Morgan',
    answer: '(A∩B)̄ = Ā∪B̄ et (A∪B)̄ = Ā∩B̄'
  },
  {
    id: 6,
    category: 'Ensembles',
    difficulty: 'moyen',
    question: 'L\'intersection est-elle distributive sur la réunion ?',
    answer: 'Oui : A∩(B∪C) = (A∩B)∪(A∩C)'
  },

  // Applications
  {
    id: 7,
    category: 'Applications',
    difficulty: 'facile',
    question: 'Quelle est la différence entre fonction et application ?',
    answer: 'Une application f:E→F associe à CHAQUE élément de E exactement une image dans F. Une fonction peut ne pas être définie partout.'
  },
  {
    id: 8,
    category: 'Applications',
    difficulty: 'facile',
    question: 'Définir une injection',
    answer: 'f est injective si f(x₁)=f(x₂) ⇒ x₁=x₂ (des images égales impliquent des antécédents égaux)'
  },
  {
    id: 9,
    category: 'Applications',
    difficulty: 'facile',
    question: 'Définir une surjection',
    answer: 'f:E→F est surjective si ∀y∈F, ∃x∈E tel que y=f(x) (tout élément de F a un antécédent)'
  },
  {
    id: 10,
    category: 'Applications',
    difficulty: 'moyen',
    question: 'Qu\'est-ce qu\'une bijection ?',
    answer: 'f est bijective si elle est injective ET surjective. Pour tout y∈F, il existe un unique x∈E tel que y=f(x).'
  },
  {
    id: 11,
    category: 'Applications',
    difficulty: 'moyen',
    question: 'Théorème de la bijection monotone',
    answer: 'Si f est continue et strictement monotone sur I⊂ℝ, alors f est une bijection de I sur J=f(I), et f et f⁻¹ ont les mêmes variations.'
  },

  // Valeur absolue
  {
    id: 12,
    category: 'Valeur absolue',
    difficulty: 'facile',
    question: 'Définir la valeur absolue |x|',
    answer: '|x| = x si x≥0, |x| = -x si x<0'
  },
  {
    id: 13,
    category: 'Valeur absolue',
    difficulty: 'facile',
    question: 'La fonction valeur absolue est-elle paire ou impaire ?',
    answer: 'Paire : |-x| = |x|'
  },
  {
    id: 14,
    category: 'Valeur absolue',
    difficulty: 'moyen',
    question: 'Inégalité triangulaire',
    answer: '∀x,y∈ℝ, |x+y| ≤ |x| + |y|'
  },
  {
    id: 15,
    category: 'Valeur absolue',
    difficulty: 'moyen',
    question: 'Comment résoudre |x| ≤ M ?',
    answer: '|x| ≤ M ⟺ -M ≤ x ≤ M'
  },

  // Parité et périodicité
  {
    id: 16,
    category: 'Propriétés',
    difficulty: 'facile',
    question: 'Définir une fonction paire',
    answer: 'f est paire si f(-x) = f(x). La courbe est symétrique par rapport à l\'axe des ordonnées.'
  },
  {
    id: 17,
    category: 'Propriétés',
    difficulty: 'facile',
    question: 'Définir une fonction impaire',
    answer: 'f est impaire si f(-x) = -f(x). La courbe est symétrique par rapport à l\'origine.'
  },
  {
    id: 18,
    category: 'Propriétés',
    difficulty: 'facile',
    question: 'Définir une fonction T-périodique',
    answer: 'f est T-périodique si ∀x, f(x+T) = f(x)'
  },
  {
    id: 19,
    category: 'Propriétés',
    difficulty: 'moyen',
    question: 'Qu\'est-ce qu\'une fonction majorée ?',
    answer: 'f est majorée sur I s\'il existe M∈ℝ tel que ∀x∈I, f(x) ≤ M'
  },
  {
    id: 20,
    category: 'Propriétés',
    difficulty: 'moyen',
    question: 'Définir le maximum d\'une fonction',
    answer: 'M est le maximum de f sur I si M = f(x₀) pour un x₀∈I et ∀x∈I, f(x) ≤ M'
  },

  // Continuité
  {
    id: 21,
    category: 'Continuité',
    difficulty: 'facile',
    question: 'Définir la continuité en x₀',
    answer: 'f est continue en x₀ si lim(x→x₀) f(x) = f(x₀)'
  },
  {
    id: 22,
    category: 'Continuité',
    difficulty: 'moyen',
    question: 'Théorème des valeurs intermédiaires (TVI)',
    answer: 'Si f est continue sur [a,b], pour toute valeur λ entre f(a) et f(b), ∃c∈[a,b] tel que f(c) = λ'
  },
  {
    id: 23,
    category: 'Continuité',
    difficulty: 'moyen',
    question: 'Corollaire du TVI (théorème de Bolzano)',
    answer: 'Si f est continue sur [a,b] avec f(a)·f(b) < 0, alors ∃c∈]a,b[ tel que f(c) = 0'
  },
  {
    id: 24,
    category: 'Continuité',
    difficulty: 'difficile',
    question: 'Théorème de la bijection continue monotone',
    answer: 'Si f est continue et strictement monotone sur I, alors f est une bijection de I sur J=f(I), et f⁻¹ est continue et de même monotonie.'
  },

  // Limites
  {
    id: 25,
    category: 'Limites',
    difficulty: 'moyen',
    question: 'Définir lim(x→x₀) f(x) = ℓ',
    answer: '∀ε>0, ∃α>0, 0<|x-x₀|<α ⟹ |f(x)-ℓ|<ε'
  },
  {
    id: 26,
    category: 'Limites',
    difficulty: 'moyen',
    question: 'Théorème de composition des limites',
    answer: 'Si lim(x→a) f(x) = b et lim(y→b) g(y) = c, alors lim(x→a) g(f(x)) = c'
  },
  {
    id: 27,
    category: 'Limites',
    difficulty: 'difficile',
    question: 'Théorème des gendarmes',
    answer: 'Si g(x) ≤ f(x) ≤ h(x) et lim g(x) = lim h(x) = ℓ, alors lim f(x) = ℓ'
  },

  // Python
  {
    id: 28,
    category: 'Python',
    difficulty: 'facile',
    question: 'Comment créer un intervalle avec numpy ?',
    answer: 'np.linspace(a, b, n) crée n points uniformément répartis entre a et b'
  },
  {
    id: 29,
    category: 'Python',
    difficulty: 'facile',
    question: 'Comment tracer une courbe avec matplotlib ?',
    answer: 'plt.plot(x, y) pour tracer, plt.show() pour afficher'
  },
  {
    id: 30,
    category: 'Python',
    difficulty: 'moyen',
    question: 'Comment ajouter une grille à un graphique ?',
    answer: 'plt.grid(True) pour afficher la grille'
  },

  // Fonctions mathématiques NumPy
  {
    id: 31,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle fonction NumPy pour calculer la valeur absolue ?',
    answer: 'np.abs(x) pour calculer |x|'
  },
  {
    id: 32,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle fonction NumPy pour calculer la racine carrée ?',
    answer: 'np.sqrt(x) pour calculer √x'
  },
  {
    id: 33,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle fonction NumPy pour calculer l\'exponentielle ?',
    answer: 'np.exp(x) pour calculer e^x'
  },
  {
    id: 34,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle fonction NumPy pour calculer le logarithme népérien ?',
    answer: 'np.log(x) pour calculer ln(x)'
  },
  {
    id: 35,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelles fonctions NumPy pour cosinus et sinus ?',
    answer: 'np.cos(x) pour le cosinus et np.sin(x) pour le sinus'
  },
  {
    id: 36,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle fonction NumPy pour la partie entière ?',
    answer: 'np.floor(x) pour obtenir la partie entière de x'
  },
  {
    id: 37,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle constante NumPy pour π (pi) ?',
    answer: 'np.pi ≈ 3.14159...'
  },
  {
    id: 38,
    category: 'Python',
    difficulty: 'facile',
    question: 'Quelle constante NumPy pour e (nombre d\'Euler) ?',
    answer: 'np.e ≈ 2.71828...'
  }
];

export const getFonctionsFlashcardsByCategory = (category: string): FonctionsFlashcard[] => {
  return fonctionsFlashcards.filter(card => card.category === category);
};

export const getFonctionsFlashcardsByDifficulty = (difficulty: string): FonctionsFlashcard[] => {
  return fonctionsFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleFonctionsFlashcards = (cards: FonctionsFlashcard[]): FonctionsFlashcard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

