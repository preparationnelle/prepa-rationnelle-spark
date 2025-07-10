import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
  hints: string[];
  solution: string;
}

// Exercise definitions for matrix operations with complete solutions
const exercises: Record<string, Exercise> = {
  matrice_z: {
    id: 'matrice_z',
    title: 'Création de matrice Z',
    description: 'D\'après ECE EDHEC 2015. Créer une matrice 5×5 spécifique avec différentes méthodes numpy.',
    template: `import numpy as np

# Question a) Créer Z avec numpy.ones et boucles for
def creer_Z_ones():
    # TODO: Créer la matrice Z avec np.ones et modifier avec des boucles
    pass

# Question b) Créer Z avec numpy.zeros et boucles for  
def creer_Z_zeros():
    # TODO: Créer la matrice Z avec np.zeros et remplir avec des boucles
    pass

# Question c) Créer Z avec numpy.ones puis modifier avec numpy.zeros
def creer_Z_slicing():
    # TODO: Créer Z avec np.ones puis utiliser le slicing pour modifier
    pass`,
    hints: [
      'La matrice Z a des 1 sur les bords et des 0 au centre',
      'Pour la méthode ones: commencez par une matrice de 1, puis soustrayez 1 dans la zone centrale',
      'Pour la méthode zeros: créez une matrice de 0, puis ajoutez 1 sur les bords',
      'Pour le slicing: utilisez Z[1:4, 1:5] pour sélectionner la zone centrale'
    ],
    solution: `import numpy as np

def creer_Z_ones():
    Z = np.ones((5, 5))
    for i in range(1, 4):
        for j in range(1, 5):
            Z[i, j] -= 1
    return Z

def creer_Z_zeros():
    Z = np.zeros((5, 5))
    
    # Remplissage des première et dernière lignes
    for j in range(5):
        Z[0, j] = 1
        Z[4, j] = 1
    
    # Remplissage de la première colonne (hors extrémités déjà traitées)
    for i in range(1, 4):
        Z[i, 0] = 1
    
    return Z

def creer_Z_slicing():
    Z = np.ones((5, 5))
    Z[1:4, 1:5] = np.zeros((3, 4))   # Remplace le sous-bloc central par des zéros
    return Z`
  },
  trace: {
    id: 'trace',
    title: 'Trace d\'une matrice',
    description: 'Écrire def trace(M): qui renvoie la somme des éléments diagonaux de la matrice carrée M.',
    template: 'def trace(M):\n    # TODO: compléter la fonction\n    # La trace est la somme des éléments diagonaux M[i][i]\n    pass',
    hints: [
      'La trace est la somme des éléments M[i][i] pour i de 0 à n-1',
      'Utilisez une boucle for pour parcourir les indices diagonaux',
      'Pensez à initialiser une variable somme à 0'
    ],
    solution: `def trace(M):
    T = 0
    for i in range(len(M)):
        T = T + M[i][i]
    return T`
  },
  est_symetrique: {
    id: 'est_symetrique',
    title: 'Test de symétrie',
    description: 'Écrire def est_symetrique(M): qui renvoie True si M est carrée et M[i,j] == M[j,i] pour tous i,j, sinon False.',
    template: 'def est_symetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier que M[i][j] == M[j][i] pour tous i,j\n    pass',
    hints: [
      'Vérifiez d\'abord que la matrice est carrée',
      'Comparez M[i][j] avec M[j][i] pour tous les indices',
      'Retournez False dès qu\'une différence est trouvée'
    ],
    solution: `def est_symetrique(M):
    n = len(M)
    # Vérifier que la matrice est carrée
    for ligne in M:
        if len(ligne) != n:
            return False
    
    # Vérifier la symétrie
    for i in range(n):
        for j in range(n):
            if M[i][j] != M[j][i]:
                return False
    return True`
  },
  est_antisymetrique: {
    id: 'est_antisymetrique',
    title: 'Test d\'antisymétrie',
    description: 'Écrire def est_antisymetrique(M): qui renvoie True si M est carrée, que tous les éléments diagonaux sont nuls et que M[j,i] == -M[i,j] pour i≠j.',
    template: 'def est_antisymetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier diagonale nulle et M[j][i] == -M[i][j]\n    pass',
    hints: [
      'Vérifiez que tous les éléments diagonaux sont nuls',
      'Pour i≠j, vérifiez que M[j][i] == -M[i][j]',
      'Une matrice antisymétrique a forcément une diagonale nulle'
    ],
    solution: `def est_antisymetrique(M):
    n = len(M)
    # Vérifier que la matrice est carrée
    for ligne in M:
        if len(ligne) != n:
            return False
    
    # Vérifier que la diagonale est nulle
    for i in range(n):
        if M[i][i] != 0:
            return False
    
    # Vérifier l'antisymétrie pour i≠j
    for i in range(n):
        for j in range(n):
            if i != j and M[j][i] != -M[i][j]:
                return False
    return True`
  },
  puissance_naive: {
    id: 'puissance_naive',
    title: 'Puissance naïve',
    description: 'Écrire def puissance_naive(M, n): qui calcule M^n par une boucle de multiplications successives.',
    template: 'def puissance_naive(M, n):\n    # TODO: compléter la fonction\n    # Multiplier M par elle-même n fois\n    pass',
    hints: [
      'Commencez par créer une matrice identité',
      'Multipliez cette matrice par M exactement n fois',
      'Vous devrez implémenter la multiplication matricielle'
    ],
    solution: `def puissance_naive(M, n):
    # Fonction helper pour multiplier deux matrices
    def matmul(A, B):
        rows_A, cols_A = len(A), len(A[0])
        rows_B, cols_B = len(B), len(B[0])
        
        if cols_A != rows_B:
            raise ValueError("Dimensions incompatibles")
        
        result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]
        for i in range(rows_A):
            for j in range(cols_B):
                for k in range(cols_A):
                    result[i][j] += A[i][k] * B[k][j]
        return result
    
    # Créer la matrice identité
    size = len(M)
    result = [[1 if i == j else 0 for j in range(size)] for i in range(size)]
    
    # Multiplier n fois par M
    for _ in range(n):
        result = matmul(result, M)
    
    return result`
  },
  matmul: {
    id: 'matmul',
    title: 'Produit matriciel',
    description: 'Écrire def matmul(A, B): qui renvoie le produit A×B sans utiliser l\'opérateur @.',
    template: 'def matmul(A, B):\n    # TODO: compléter la fonction\n    # Implémenter la multiplication matricielle\n    pass',
    hints: [
      'Triple boucle : i pour les lignes, j pour les colonnes, k pour la somme',
      'C[i][j] = somme de A[i][k] * B[k][j] pour k de 0 à nombre de colonnes de A',
      'Vérifiez que les dimensions sont compatibles'
    ],
    solution: `def matmul(A, B):
    rows_A, cols_A = len(A), len(A[0])
    rows_B, cols_B = len(B), len(B[0])
    
    # Vérifier que les dimensions sont compatibles
    if cols_A != rows_B:
        raise ValueError("Dimensions incompatibles pour la multiplication")
    
    # Créer la matrice résultat
    result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]
    
    # Triple boucle pour la multiplication
    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] += A[i][k] * B[k][j]
    
    return result`
  },
  // Nouveaux exercices de probabilités
  loi_arret_aleatoire: {
    id: 'loi_arret_aleatoire',
    title: 'Loi d\'arrêt aléatoire - Pile consécutifs',
    description: 'Simuler X = rang d\'obtention de deux Pile consécutifs. Compléter la fonction simulX() qui simule les lancers jusqu\'à obtenir deux Pile consécutifs.',
    template: `import random as rd

def simulX():
    # TODO: Compléter la fonction
    # Simuler les lancers jusqu'à obtenir deux Pile consécutifs
    # Retourner le nombre de lancers effectués
    pass`,
    hints: [
      'Utilisez une variable pour compter les Pile consécutifs',
      'Remettez le compteur à 0 si vous obtenez Face',
      'Arrêtez quand vous avez 2 Pile consécutifs',
      'N\'oubliez pas de compter le nombre total de lancers'
    ],
    solution: `import random as rd

def simulX():
    tirs = 0
    pile = 0
    while pile < 2:
        if rd.random() < 1/2:
            pile += 1
        else:
            pile = 0
        tirs += 1
    return tirs`
  },
  processus_renforcement: {
    id: 'processus_renforcement',
    title: 'Processus de renforcement dans une urne',
    description: 'Simuler Y_n = rang d\'obtention de n boules vertes dans un processus de renforcement. Compléter la fonction simulY(n).',
    template: `import random as rd

def simulY(n):
    # TODO: Compléter la fonction
    # Simuler le processus de renforcement
    # Retourner le rang d'obtention de n boules vertes
    pass`,
    hints: [
      'Commencez avec 1 boule rouge et 1 boule verte',
      'Si boule rouge tirée: ajouter 2 rouges',
      'Si boule verte tirée: ajouter 1 rouge et 2 vertes',
      'Arrêter quand on a n boules vertes'
    ],
    solution: `import random as rd

def simulY(n):
    r = 1  # nombre de boules rouges
    v = 1  # nombre de boules vertes
    Y = 0
    while v < n:
        numero_boule = rd.randint(1, r + v)
        if numero_boule <= r:
            r += 2
        else:
            r += 1
            v += 2
        Y += 1
    return Y`
  },
  tirages_urne: {
    id: 'tirages_urne',
    title: 'Tirages dans une urne',
    description: 'Simuler Z = rang d\'apparition de la première boule rouge et Y_n = nombre de boules vertes parmi les n premiers tirages.',
    template: `import random as rd

def simulZ(a, b):
    # TODO: Compléter la fonction
    # Simuler le rang d'apparition de la première boule rouge
    pass

def simulY(n, a, b):
    # TODO: Compléter la fonction
    # Simuler le nombre de boules vertes parmi les n premiers tirages
    pass`,
    hints: [
      'Pour simulZ: continuer tant qu\'on tire des boules vertes',
      'Probabilité de tirer une boule verte = b/(a+b)',
      'Pour simulY: compter les boules vertes sur n tirages',
      'Utiliser rd.random() < probabilité pour simuler un événement'
    ],
    solution: `import random as rd

def simulZ(a, b):
    Z = 1
    while rd.random() < b / (a + b):
        Z += 1
    return Z

def simulY(n, a, b):
    Y = 0
    for k in range(n):
        if rd.random() < b / (a + b):
            Y += 1
    return Y`
  },
  simulation_evenement: {
    id: 'simulation_evenement',
    title: 'Simulation d\'un événement',
    description: 'Simuler la réalisation d\'un événement A de probabilité p. Quelle commande Python utiliser ?',
    template: `import random as rd

def simuler_evenement(p):
    # TODO: Compléter la fonction
    # Retourner True si l'événement A se réalise, False sinon
    pass`,
    hints: [
      'Utiliser rd.random() qui donne un nombre aléatoire entre 0 et 1',
      'Comparer ce nombre avec la probabilité p',
      'Si le nombre est inférieur à p, l\'événement se réalise'
    ],
    solution: `import random as rd

def simuler_evenement(p):
    return rd.random() < p`
  },
  sauts_escalier: {
    id: 'sauts_escalier',
    title: 'Sauts aléatoires dans un escalier',
    description: 'Un animal gravit un escalier de n marches en montant 1 ou 2 marches à chaque bond avec probabilité égale. Simuler le nombre de bonds nécessaires.',
    template: `import numpy.random as rd

def saut_escalier(n):
    # TODO: Compléter la fonction
    # Simuler le comportement de l'animal
    # Retourner le nombre de bonds pour atteindre la dernière marche
    pass`,
    hints: [
      'Commencer à la marche 0',
      'À chaque bond: monter 1 ou 2 marches avec probabilité 1/2 chacune',
      'Continuer tant qu\'on n\'a pas atteint la marche n',
      'Compter le nombre de bonds effectués'
    ],
    solution: `import numpy.random as rd

def saut_escalier(n):
    marches = 0     # nombre de marches montées
    sauts = 0       # nombre de bonds effectués
    
    while marches < n:
        r = rd.random()
        if r < 0.5:
            marches += 1
        else:
            marches += 2
        sauts += 1
    
    return sauts`
  },
  simulation_geometrique: {
    id: 'simulation_geometrique',
    title: 'Simulation de lois géométriques',
    description: 'Estimer P(X = 2Y) où X suit une loi géométrique de paramètre p et Y suit une loi géométrique de paramètre q, par méthode de Monte-Carlo.',
    template: `import numpy.random as rd

def simulation_geom(p, q):
    # TODO: Compléter la fonction
    # Estimer P(X = 2Y) par méthode de Monte-Carlo
    # Retourner l'estimation de la probabilité
    pass`,
    hints: [
      'Utiliser rd.geometric(p) pour simuler une loi géométrique',
      'Effectuer un grand nombre de simulations (ex: 100000)',
      'Compter combien de fois X = 2Y',
      'Retourner la fréquence observée'
    ],
    solution: `import numpy.random as rd

def simulation_geom(p, q):
    compteur = 0
    essais = 100000

    for _ in range(essais):
        X = rd.geometric(p)
        Y = rd.geometric(q)
        if X == 2 * Y:
            compteur += 1

    return compteur / essais`
  }
};

// Fonction de détection et correction d'indentation améliorée
function analyzeAndFixIndentation(code: string): {
  hasIndentationIssues: boolean;
  correctedCode: string;
  issues: string[];
} {
  const lines = code.split('\n');
  const issues: string[] = [];
  let hasIndentationIssues = false;
  const correctedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNumber = i + 1;
    
    // Détecter mélange espaces/tabulations
    if (line.includes('\t') && line.match(/^ +/)) {
      issues.push(`Ligne ${lineNumber}: Mélange espaces et tabulations détecté`);
      hasIndentationIssues = true;
    }
    
    // Convertir les tabulations en espaces (4 espaces par tabulation)
    let correctedLine = line.replace(/\t/g, '    ');
    
    // Vérifier l'indentation par rapport aux mots-clés Python
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const leadingSpaces = (line.match(/^ */)?.[0].length || 0);
      
      // Si la ligne précédente se termine par ':', cette ligne devrait être indentée
      if (i > 0) {
        const prevTrimmed = lines[i-1].trim();
        if (prevTrimmed.endsWith(':') && leadingSpaces === 0 && !trimmed.match(/^(def|class|if|for|while|try|except|finally|with|elif|else)/)) {
          issues.push(`Ligne ${lineNumber}: Indentation manquante après ':'`);
          hasIndentationIssues = true;
          correctedLine = '    ' + correctedLine.trim();
        }
      }
      
      // Vérifier que l'indentation est un multiple de 4
      if (leadingSpaces % 4 !== 0) {
        issues.push(`Ligne ${lineNumber}: Indentation non conforme (utilisez 4 espaces par niveau)`);
        hasIndentationIssues = true;
        const expectedIndent = Math.round(leadingSpaces / 4) * 4;
        correctedLine = ' '.repeat(expectedIndent) + line.trim();
      }
    }
    
    correctedLines.push(correctedLine);
  }

  return {
    hasIndentationIssues,
    correctedCode: correctedLines.join('\n'),
    issues
  };
}

// Auto-formatage simple du code
function autoFormatCode(code: string): string {
  const lines = code.split('\n');
  const formattedLines: string[] = [];
  let indentLevel = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    
    if (!trimmed || trimmed.startsWith('#')) {
      formattedLines.push(line);
      continue;
    }

    // Diminuer l'indentation pour certains mots-clés
    if (trimmed.match(/^(elif|else|except|finally)/)) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // Appliquer l'indentation
    const formattedLine = ' '.repeat(indentLevel * 4) + trimmed;
    formattedLines.push(formattedLine);

    // Augmenter l'indentation après ':'
    if (trimmed.endsWith(':')) {
      indentLevel++;
    }
  }

  return formattedLines.join('\n');
}

async function generateStructuredFeedback(exerciseId: string, studentCode: string, attemptCount: number, indentationAnalysis?: any): Promise<any> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const exercise = exercises[exerciseId];
  if (!exercise) {
    throw new Error(`Exercise not found: ${exerciseId}`);
  }

const systemPrompt = `Tu es un professeur expert en Python pour prépa ECG qui évalue les exercices d'étudiants. Tu dois retourner une réponse JSON strictement structurée selon le template d'évaluation interactive.

COMMANDES PYTHON ECG AUTORISÉES (54 commandes essentielles):

IMPORTATION DES MODULES:
- import numpy as np (calcul mathématique)
- import numpy.linalg as al (algèbre linéaire)  
- import numpy.random as rd (génération nombres aléatoires)
- import matplotlib.pyplot as plt (tracé graphiques)

FONCTIONS MATHÉMATIQUES DE BASE:
- np.abs() (valeur absolue)
- np.cos() (cosinus)
- np.sin() (sinus)
- np.log() (logarithme népérien)
- np.exp() (exponentielle)
- np.sqrt() (racine carrée)
- np.floor() (partie entière)

CONSTANTES:
- np.pi (π)
- np.e (nombre d'Euler)

CRÉATION DE VECTEURS:
- np.array([u1,...,un]) (créer vecteur-ligne)
- np.arange(a,b,r) (progression arithmétique)
- np.linspace(a,b,n) (n éléments équirépartis)
- np.ones(n) (vecteur de 1)
- np.zeros(n) (vecteur de 0)

CRÉATION DE MATRICES:
- np.array([[a1,1,...,a1,p],...]) (création matrice)
- np.ones((n,p)) (matrice n×p de 1)
- np.zeros((n,p)) (matrice n×p de 0)
- np.eye(n,p) (matrice identité)

OPÉRATIONS MATRICES/VECTEURS:
- np.shape(A) (dimensions)
- np.dot(A,B) (produit matriciel)
- np.transpose(A) (transposée)
- np.sum(A) (somme éléments)
- np.mean(A) (moyenne)
- np.min(A) (minimum)
- np.max(A) (maximum)
- np.cumsum(A) (sommes cumulées)

ALGÈBRE LINÉAIRE:
- al.inv(A) (inverse matrice)
- al.matrix_rank(A) (rang matrice)
- al.matrix_power(A,n) (puissance n-ième)
- al.solve(A,b) (résolution système)
- al.eig(A) (valeurs/vecteurs propres)

VARIABLES ALÉATOIRES:
- rd.uniform(a,b) (loi uniforme)
- rd.randint(a,b) (entier uniforme)
- rd.binomial(n,p) (loi binomiale)
- rd.geometric(p) (loi géométrique)
- rd.exponential(1/lambda) (loi exponentielle)
- rd.normal(m,sigma) (loi normale)
- rd.poisson(lambda) (loi de Poisson)
- rd.gamma(nu) (loi gamma)

REPRÉSENTATIONS GRAPHIQUES:
- plt.plot(x,y) (tracer courbe)
- plt.plot(x,y,'x') (nuage de points)
- plt.show() (afficher graphique)
- plt.figure(n) (nouvelle figure)
- plt.clf() (effacer contenu)
- plt.axis('scaled') (repère orthonormé)
- plt.grid() (ajouter grille)
- plt.xlabel('texte') (légende axe x)
- plt.ylabel('texte') (légende axe y)
- plt.title('texte') (titre)
- plt.legend() (afficher légende)

EXERCICE: ${exercise.title}
DESCRIPTION: ${exercise.description}
SOLUTION OFFICIELLE:
${exercise.solution}

TENTATIVE: ${attemptCount}

RÉPONSE REQUISE (JSON uniquement):
{
  "score": [note sur 10 basée sur la correction et la logique],
  "errors": ["liste des erreurs trouvées"],
  "correctedCode": "version corrigée du code étudiant",
  "keyCommands": ["commandes Python essentielles pour cet exercice"],
  "concepts": ["notions importantes à retenir"],
  "detailedFeedback": "feedback détaillé et conseils"
}

RÈGLES:
- Score de 0 à 10 (10 = parfait, 0 = très incorrect)
- Errors: liste concise des problèmes
- CorrectedCode: version fonctionnelle du code (utilise la solution officielle comme référence)
- KeyCommands: 3-5 commandes Python clés
- Concepts: 3-5 notions importantes
- DetailedFeedback: explication pédagogique complète

${indentationAnalysis?.hasIndentationIssues ? `
PROBLÈMES D'INDENTATION DÉTECTÉS:
- ${indentationAnalysis.issues.join('\n- ')}
Intègre ces problèmes dans ton évaluation.` : ''}`;

  const userPrompt = `Code de l'étudiant:
\`\`\`python
${studentCode}
\`\`\`

Évalue ce code et retourne UNIQUEMENT le JSON demandé.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 1500,
        temperature: 0.3
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Tenter de parser le JSON
    try {
      return JSON.parse(content);
    } catch (parseError) {
      // Si le parsing échoue, retourner une structure de base
      return {
        score: 3,
        errors: ["Erreur lors de l'analyse automatique"],
        correctedCode: exercise.solution,
        keyCommands: ["for loop", "if statement", "return"],
        concepts: ["Algorithmique de base"],
        detailedFeedback: content
      };
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { exerciseId, code, attemptCount = 1, action } = await req.json();
    
    if (!exerciseId || !code) {
      throw new Error('Paramètres manquants: exerciseId et code requis');
    }

    const exercise = exercises[exerciseId];
    if (!exercise) {
      throw new Error(`Exercice non trouvé: ${exerciseId}`);
    }

    console.log(`Processing exercise ${exerciseId}, attempt ${attemptCount}, action: ${action || 'validate'}`);

    // Si l'action est "format", retourner le code formaté
    if (action === 'format') {
      const formattedCode = autoFormatCode(code);
      return new Response(
        JSON.stringify({
          success: true,
          formattedCode,
          action: 'format'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      );
    }

    // Si l'action est "getSolution", retourner la solution
    if (action === 'getSolution') {
      return new Response(
        JSON.stringify({
          success: true,
          solution: exercise.solution,
          action: 'getSolution'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      );
    }

    // Analyser l'indentation
    const indentationAnalysis = analyzeAndFixIndentation(code);

    // Générer le feedback structuré avec OpenAI
    const structuredFeedback = await generateStructuredFeedback(exerciseId, code, attemptCount, indentationAnalysis);

    return new Response(
      JSON.stringify({
        success: structuredFeedback.score >= 7,
        structuredFeedback,
        indentationAnalysis,
        exercise: {
          title: exercise.title,
          description: exercise.description,
          solution: exercise.solution
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error in python-exercise-validator:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        feedback: `Erreur: ${error.message}`
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
