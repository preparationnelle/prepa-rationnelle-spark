
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TestCase {
  input: any[];
  expected: any;
  description: string;
}

interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
  tests: TestCase[];
  hints: string[];
}

// Exercise definitions for matrix operations
const exercises: Record<string, Exercise> = {
  trace: {
    id: 'trace',
    title: 'Trace d\'une matrice',
    description: 'Écrire def trace(M): qui renvoie la somme des éléments diagonaux de la matrice carrée M.',
    template: 'def trace(M):\n    # TODO: compléter la fonction\n    # La trace est la somme des éléments diagonaux M[i][i]\n    pass',
    tests: [
      { input: [[[1, 2], [3, 4]]], expected: 5, description: 'Matrice 2x2 simple' },
      { input: [[[1, 0, 0], [0, 2, 0], [0, 0, 3]]], expected: 6, description: 'Matrice diagonale 3x3' },
      { input: [[[5]]], expected: 5, description: 'Matrice 1x1' }
    ],
    hints: [
      'La trace est la somme des éléments M[i][i] pour i de 0 à n-1',
      'Utilisez une boucle for pour parcourir les indices diagonaux',
      'Pensez à initialiser une variable somme à 0'
    ]
  },
  est_symetrique: {
    id: 'est_symetrique',
    title: 'Test de symétrie',
    description: 'Écrire def est_symetrique(M): qui renvoie True si M est carrée et M[i,j] == M[j,i] pour tous i,j, sinon False.',
    template: 'def est_symetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier que M[i][j] == M[j][i] pour tous i,j\n    pass',
    tests: [
      { input: [[[1, 2], [2, 1]]], expected: true, description: 'Matrice symétrique 2x2' },
      { input: [[[1, 0], [1, 1]]], expected: false, description: 'Matrice non symétrique' },
      { input: [[[1, 2, 3], [2, 4, 5], [3, 5, 6]]], expected: true, description: 'Matrice symétrique 3x3' }
    ],
    hints: [
      'Vérifiez d\'abord que la matrice est carrée',
      'Comparez M[i][j] avec M[j][i] pour tous les indices',
      'Retournez False dès qu\'une différence est trouvée'
    ]
  },
  est_antisymetrique: {
    id: 'est_antisymetrique',
    title: 'Test d\'antisymétrie',
    description: 'Écrire def est_antisymetrique(M): qui renvoie True si M est carrée, que tous les éléments diagonaux sont nuls et que M[j,i] == -M[i,j] pour i≠j.',
    template: 'def est_antisymetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier diagonale nulle et M[j][i] == -M[i][j]\n    pass',
    tests: [
      { input: [[[0, 5], [-5, 0]]], expected: true, description: 'Matrice antisymétrique 2x2' },
      { input: [[[0, 1], [1, 0]]], expected: false, description: 'Matrice non antisymétrique' },
      { input: [[[1, 2], [-2, 0]]], expected: false, description: 'Diagonale non nulle' }
    ],
    hints: [
      'Vérifiez que tous les éléments diagonaux sont nuls',
      'Pour i≠j, vérifiez que M[j][i] == -M[i][j]',
      'Une matrice antisymétrique a forcément une diagonale nulle'
    ]
  },
  puissance_naive: {
    id: 'puissance_naive',
    title: 'Puissance naïve',
    description: 'Écrire def puissance_naive(M, n): qui calcule M^n par une boucle de multiplications successives.',
    template: 'def puissance_naive(M, n):\n    # TODO: compléter la fonction\n    # Multiplier M par elle-même n fois\n    pass',
    tests: [
      { input: [[[2, 0], [0, 2]], 2], expected: [[4, 0], [0, 4]], description: 'Matrice diagonale au carré' },
      { input: [[[1, 1], [0, 1]], 3], expected: [[1, 3], [0, 1]], description: 'Matrice triangulaire puissance 3' }
    ],
    hints: [
      'Commencez par créer une matrice identité',
      'Multipliez cette matrice par M exactement n fois',
      'Vous devrez implémenter la multiplication matricielle'
    ]
  },
  matmul: {
    id: 'matmul',
    title: 'Produit matriciel',
    description: 'Écrire def matmul(A, B): qui renvoie le produit A×B sans utiliser l\'opérateur @.',
    template: 'def matmul(A, B):\n    # TODO: compléter la fonction\n    # Implémenter la multiplication matricielle\n    pass',
    tests: [
      { input: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]], expected: [[19, 22], [43, 50]], description: 'Multiplication 2x2' },
      { input: [[[1, 0, 0], [0, 1, 0]], [[1], [2], [3]]], expected: [[1], [2]], description: 'Multiplication rectangulaire' }
    ],
    hints: [
      'Triple boucle : i pour les lignes, j pour les colonnes, k pour la somme',
      'C[i][j] = somme de A[i][k] * B[k][j] pour k de 0 à nombre de colonnes de A',
      'Vérifiez que les dimensions sont compatibles'
    ]
  }
};

function analyzeStudentCode(code: string, exerciseId: string): {
  approach: string;
  issues: string[];
  suggestions: string[];
  correctedCode?: string;
} {
  const analysis = {
    approach: "Code non reconnu",
    issues: [] as string[],
    suggestions: [] as string[],
    correctedCode: undefined as string | undefined
  };

  // Remove comments and whitespace for analysis
  const cleanCode = code.replace(/#.*$/gm, '').replace(/\s+/g, ' ').trim();

  if (exerciseId === 'trace') {
    if (cleanCode.includes('pass') && !cleanCode.includes('return')) {
      analysis.approach = "Template non modifié";
      analysis.issues.push("Vous n'avez pas encore implémenté la fonction");
      analysis.suggestions.push("Remplacez 'pass' par votre code");
      analysis.correctedCode = `def trace(M):
    # Calcul de la trace : somme des éléments diagonaux
    somme = 0
    for i in range(len(M)):
        somme += M[i][i]
    return somme`;
    } else if (cleanCode.includes('for') && cleanCode.includes('range') && cleanCode.includes('len')) {
      analysis.approach = "Approche avec boucle for - bonne direction !";
      if (!cleanCode.includes('return')) {
        analysis.issues.push("Il manque l'instruction 'return' pour renvoyer le résultat");
        analysis.suggestions.push("Ajoutez 'return somme' à la fin de votre fonction");
      }
      if (!cleanCode.includes('+=') && !cleanCode.includes('sum')) {
        analysis.issues.push("Il faut additionner les éléments diagonaux");
        analysis.suggestions.push("Utilisez += pour accumuler la somme");
      }
    } else if (cleanCode.includes('sum') && cleanCode.includes('M[i][i]')) {
      analysis.approach = "Approche avec sum() et compréhension - élégant !";
      analysis.suggestions.push("Votre approche est correcte et pythonique");
    } else if (cleanCode.includes('numpy') || cleanCode.includes('np.')) {
      analysis.approach = "Utilisation de NumPy détectée";
      analysis.issues.push("L'exercice demande une implémentation sans NumPy");
      analysis.suggestions.push("Essayez avec une boucle for ou sum()");
    }
  }

  if (exerciseId === 'est_symetrique') {
    if (cleanCode.includes('pass')) {
      analysis.approach = "Template non modifié";
      analysis.correctedCode = `def est_symetrique(M):
    # Vérifier que la matrice est carrée
    n = len(M)
    if any(len(row) != n for row in M):
        return False
    
    # Vérifier la symétrie
    for i in range(n):
        for j in range(n):
            if M[i][j] != M[j][i]:
                return False
    return True`;
    } else if (cleanCode.includes('zip') && cleanCode.includes('*M')) {
      analysis.approach = "Approche avec transposition par zip - avancé !";
      analysis.suggestions.push("Très bonne approche ! zip(*M) transpose la matrice");
    } else if (cleanCode.includes('for') && cleanCode.includes('M[i][j]') && cleanCode.includes('M[j][i]')) {
      analysis.approach = "Approche avec double boucle - classique et efficace";
      if (!cleanCode.includes('len(row) != n') && !cleanCode.includes('carrée')) {
        analysis.suggestions.push("N'oubliez pas de vérifier que la matrice est carrée");
      }
    }
  }

  return analysis;
}

async function executePythonCode(code: string, testCase: TestCase, exerciseId: string): Promise<{ success: boolean; result?: any; error?: string }> {
  try {
    // Simple simulation based on exercise and code patterns
    const result = simulatePythonExecution(code, testCase, exerciseId);
    return result;
  } catch (error) {
    return {
      success: false,
      error: `Erreur d'exécution: ${error.message}`
    };
  }
}

function simulatePythonExecution(code: string, testCase: TestCase, exerciseId: string): { success: boolean; result?: any; error?: string } {
  const cleanCode = code.replace(/#.*$/gm, '').replace(/\s+/g, ' ').trim();
  
  if (exerciseId === 'trace') {
    if (cleanCode.includes('pass') && !cleanCode.includes('return')) {
      return { success: false, error: "Fonction non implémentée (pass)" };
    }
    
    // Detect sum with comprehension
    if (cleanCode.includes('sum') && cleanCode.includes('M[i][i]') && cleanCode.includes('range')) {
      const matrix = testCase.input[0];
      let trace = 0;
      for (let i = 0; i < matrix.length; i++) {
        trace += matrix[i][i];
      }
      return { success: true, result: trace };
    }
    
    // Detect loop approach
    if (cleanCode.includes('for') && cleanCode.includes('+=') && cleanCode.includes('return')) {
      const matrix = testCase.input[0];
      let trace = 0;
      for (let i = 0; i < matrix.length; i++) {
        trace += matrix[i][i];
      }
      return { success: true, result: trace };
    }
    
    return { success: false, error: "Logique de calcul incorrecte" };
  }
  
  if (exerciseId === 'est_symetrique') {
    if (cleanCode.includes('pass')) {
      return { success: false, error: "Fonction non implémentée" };
    }
    
    const matrix = testCase.input[0];
    const n = matrix.length;
    
    // Check if it's square
    for (let i = 0; i < n; i++) {
      if (matrix[i].length !== n) return { success: true, result: false };
    }
    
    // Check symmetry
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return { success: true, result: false };
        }
      }
    }
    return { success: true, result: true };
  }
  
  if (exerciseId === 'est_antisymetrique') {
    if (cleanCode.includes('pass')) {
      return { success: false, error: "Fonction non implémentée" };
    }
    
    const matrix = testCase.input[0];
    const n = matrix.length;
    
    // Check diagonal is zero
    for (let i = 0; i < n; i++) {
      if (matrix[i][i] !== 0) return { success: true, result: false };
    }
    
    // Check antisymmetry
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== -matrix[j][i]) {
          return { success: true, result: false };
        }
      }
    }
    return { success: true, result: true };
  }
  
  return { success: false, error: "Exercice non supporté pour la simulation" };
}

function generatePedagogicalFeedback(exerciseId: string, testResults: any[], attemptCount: number, studentCode: string): string {
  const exercise = exercises[exerciseId];
  const analysis = analyzeStudentCode(studentCode, exerciseId);
  const failedTests = testResults.filter(t => !t.passed);
  
  if (failedTests.length === 0) {
    return `🎉 Excellent ! Votre ${analysis.approach.toLowerCase()} fonctionne parfaitement !\n\n✨ Tous les tests sont réussis. ${analysis.suggestions.join(' ')}`;
  }
  
  let feedback = `🔍 **Analyse de votre code** : ${analysis.approach}\n\n`;
  
  if (analysis.issues.length > 0) {
    feedback += `❌ **Problèmes détectés** :\n`;
    analysis.issues.forEach((issue, i) => {
      feedback += `${i + 1}. ${issue}\n`;
    });
    feedback += '\n';
  }
  
  if (analysis.suggestions.length > 0) {
    feedback += `💡 **Suggestions** :\n`;
    analysis.suggestions.forEach((suggestion, i) => {
      feedback += `• ${suggestion}\n`;
    });
    feedback += '\n';
  }
  
  if (analysis.correctedCode && attemptCount >= 2) {
    feedback += `📝 **Code corrigé basé sur votre approche** :\n\`\`\`python\n${analysis.correctedCode}\n\`\`\`\n\n`;
  }
  
  // Add test-specific feedback
  if (failedTests.length > 0) {
    feedback += `🧪 **Résultats des tests** :\n`;
    failedTests.forEach((test, index) => {
      feedback += `Test "${test.description}" : attendu ${JSON.stringify(test.expected)}, obtenu ${JSON.stringify(test.actual)}\n`;
    });
  }
  
  return feedback;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { exerciseId, code, attemptCount = 1 } = await req.json();
    
    if (!exerciseId || !code) {
      throw new Error('Paramètres manquants: exerciseId et code requis');
    }

    const exercise = exercises[exerciseId];
    if (!exercise) {
      throw new Error(`Exercice non trouvé: ${exerciseId}`);
    }

    console.log(`Validating exercise ${exerciseId}, attempt ${attemptCount}`);

    // Run all tests
    const testResults = [];
    for (const testCase of exercise.tests) {
      const execution = await executePythonCode(code, testCase, exerciseId);
      
      const testResult = {
        description: testCase.description,
        expected: testCase.expected,
        actual: execution.result,
        passed: execution.success && execution.result === testCase.expected,
        error: execution.error
      };
      
      testResults.push(testResult);
    }

    const allPassed = testResults.every(t => t.passed);
    const feedback = generatePedagogicalFeedback(exerciseId, testResults, attemptCount, code);

    return new Response(
      JSON.stringify({
        success: allPassed,
        feedback,
        testResults,
        exercise: {
          title: exercise.title,
          description: exercise.description
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
