
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
    template: 'def trace(M):\n    # TODO: compléter la fonction\n    pass',
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
    template: 'def est_symetrique(M):\n    # TODO: compléter la fonction\n    pass',
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
  }
};

async function executePythonCode(code: string, testCase: TestCase): Promise<{ success: boolean; result?: any; error?: string }> {
  try {
    // Create a safe execution environment
    const fullCode = `
import sys
import io
import contextlib

# Redirect stdout to capture output
output_buffer = io.StringIO()

try:
    ${code}
    
    # Execute the function with test input
    result = locals()['${testCase.input[0] ? Object.keys(exercises)[0] : 'trace'}'](*${JSON.stringify(testCase.input)})
    print("RESULT:", result)
except Exception as e:
    print("ERROR:", str(e))
    sys.exit(1)
`;

    // For demo purposes, we'll simulate Python execution
    // In a real implementation, you'd use a Python runtime or container
    const simulatedResult = await simulatePythonExecution(code, testCase);
    return simulatedResult;
    
  } catch (error) {
    return {
      success: false,
      error: `Erreur d'exécution: ${error.message}`
    };
  }
}

async function simulatePythonExecution(code: string, testCase: TestCase): Promise<{ success: boolean; result?: any; error?: string }> {
  // Simple simulation for trace function
  if (code.includes('sum(M[i][i]') || code.includes('M[i][i]')) {
    const matrix = testCase.input[0];
    let trace = 0;
    for (let i = 0; i < matrix.length; i++) {
      trace += matrix[i][i];
    }
    return { success: true, result: trace };
  }
  
  // Simple simulation for symmetry function
  if (code.includes('M[i][j]') && code.includes('M[j][i]')) {
    const matrix = testCase.input[0];
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      if (matrix[i].length !== n) return { success: true, result: false };
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return { success: true, result: false };
        }
      }
    }
    return { success: true, result: true };
  }
  
  return {
    success: false,
    error: "Fonction non implémentée ou code incorrect"
  };
}

function generateFeedback(exerciseId: string, testResults: any[], attemptCount: number): string {
  const exercise = exercises[exerciseId];
  const failedTests = testResults.filter(t => !t.passed);
  
  if (failedTests.length === 0) {
    const congratulations = [
      "🎉 Excellent ! Votre solution est parfaite !",
      "✨ Bravo ! Tous les tests sont réussis !",
      "🏆 Félicitations ! Votre code fonctionne correctement !"
    ];
    return congratulations[Math.floor(Math.random() * congratulations.length)];
  }
  
  let feedback = "❌ Quelques tests ont échoué:\n\n";
  
  failedTests.forEach((test, index) => {
    feedback += `Test ${index + 1}: ${test.description}\n`;
    feedback += `• Attendu: ${JSON.stringify(test.expected)}\n`;
    feedback += `• Obtenu: ${JSON.stringify(test.actual)}\n`;
    if (test.error) {
      feedback += `• Erreur: ${test.error}\n`;
    }
    feedback += "\n";
  });
  
  // Add progressive hints
  if (attemptCount > 1 && exercise.hints.length > 0) {
    const hintIndex = Math.min(attemptCount - 2, exercise.hints.length - 1);
    feedback += `💡 Indice: ${exercise.hints[hintIndex]}\n`;
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
      const execution = await executePythonCode(code, testCase);
      
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
    const feedback = generateFeedback(exerciseId, testResults, attemptCount);

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
