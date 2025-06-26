
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
}

// Exercise definitions for matrix operations
const exercises: Record<string, Exercise> = {
  trace: {
    id: 'trace',
    title: 'Trace d\'une matrice',
    description: 'Écrire def trace(M): qui renvoie la somme des éléments diagonaux de la matrice carrée M.',
    template: 'def trace(M):\n    # TODO: compléter la fonction\n    # La trace est la somme des éléments diagonaux M[i][i]\n    pass',
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
    hints: [
      'Triple boucle : i pour les lignes, j pour les colonnes, k pour la somme',
      'C[i][j] = somme de A[i][k] * B[k][j] pour k de 0 à nombre de colonnes de A',
      'Vérifiez que les dimensions sont compatibles'
    ]
  }
};

// Fonction de détection et correction d'indentation
function analyzeIndentation(code: string): {
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

async function generateFeedbackWithOpenAI(exerciseId: string, studentCode: string, attemptCount: number, indentationAnalysis?: any): Promise<string> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const exercise = exercises[exerciseId];
  if (!exercise) {
    throw new Error(`Exercise not found: ${exerciseId}`);
  }

  const indentationContext = indentationAnalysis?.hasIndentationIssues 
    ? `

PROBLEMES D'INDENTATION DETECTES:
${indentationAnalysis.issues.join('\n')}

CODE CORRIGE SUGGERE:
\`\`\`python
${indentationAnalysis.correctedCode}
\`\`\`

IMPORTANT: Explique l'importance de l'indentation en Python et guide l'étudiant.`
    : '';

  const systemPrompt = `Tu es un professeur de Python qui aide les étudiants avec leurs exercices de programmation.

RÈGLES IMPORTANTES:
- Pas d'emojis dans tes réponses
- Pas de texte en gras
- Sois constructif et pédagogique
- Analyse le code de l'étudiant et propose des améliorations
- Si le code est incomplet, guide l'étudiant vers la solution
- Si le code a des erreurs, explique-les clairement
- Propose du code corrigé quand c'est nécessaire

FOCUS SPECIAL SUR L'INDENTATION:
- L'indentation en Python n'est pas du style mais de la SYNTAXE
- 4 espaces par niveau (PEP 8), jamais de tabulations
- Chaque bloc après ':' doit être indenté
- L'IA utilise des jetons <indent>/<dedent> pour comprendre la structure
- Une erreur d'indentation = IndentationError

Exercice: ${exercise.title}
Description: ${exercise.description}

Tentative numéro: ${attemptCount}${indentationContext}`;

  const userPrompt = `Voici le code de l'étudiant:

\`\`\`python
${studentCode}
\`\`\`

Analyse ce code en te concentrant particulièrement sur:
1. L'indentation (très important en Python)
2. La logique algorithmique
3. Les erreurs potentielles
4. Les améliorations possibles

Donne un feedback constructif et propose une correction si nécessaire.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 1000,
        temperature: 0.3
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return `Erreur lors de l'analyse du code: ${error.message}`;
  }
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

    console.log(`Analyzing exercise ${exerciseId}, attempt ${attemptCount}`);

    // Analyser l'indentation avant l'envoi à OpenAI
    const indentationAnalysis = analyzeIndentation(code);

    // Generate feedback using OpenAI with indentation context
    const feedback = await generateFeedbackWithOpenAI(exerciseId, code, attemptCount, indentationAnalysis);

    return new Response(
      JSON.stringify({
        success: false, // We'll let OpenAI determine if it's successful
        feedback,
        indentationAnalysis,
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
