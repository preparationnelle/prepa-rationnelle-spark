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

  const systemPrompt = `Tu es un professeur de Python qui évalue les exercices d'étudiants. Tu dois retourner une réponse JSON strictement structurée.

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
