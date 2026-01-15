#!/usr/bin/env python3
"""
Script amélioré pour convertir les solutions en format déroulant
"""

import re

file_path = '/Users/dimitardimitrov/prepa-rationnelle-spark-18/src/pages/formation/oteria/OteriaLogiqueFondamentaleExercicesPage.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern plus précis pour trouver les blocs de solutions
# On cherche: <div className="bg-green-50 ... jusqu'à </div> (en comptant les niveaux)
pattern = r'(\s*)<div className="bg-green-50 p-4 rounded-lg border border-green-200">\s*<h3 className="font-semibold text-green-900 mb-3">Solution</h3>(.*?)</div>(\s*)</div>'

def create_collapsible(match, ex_num):
    indent = match.group(1)
    solution_content = match.group(2)
    end_indent = match.group(3)
    
    return f'''{indent}<button
{indent}  onClick={{() => toggleSolution('ex{ex_num}')}}
{indent}  className="w-full flex items-center justify-between bg-green-100 hover:bg-green-200 p-4 rounded-lg border border-green-300 transition-colors"
{indent}>
{indent}  <span className="font-semibold text-green-900">
{indent}    {{openSolutions['ex{ex_num}'] ? 'Masquer la solution' : 'Afficher la solution'}}
{indent}  </span>
{indent}  {{openSolutions['ex{ex_num}'] ? (
{indent}    <ChevronUp className="h-5 w-5 text-green-900" />
{indent}  ) : (
{indent}    <ChevronDown className="h-5 w-5 text-green-900" />
{indent}  )}}
{indent}</button>

{indent}{{openSolutions['ex{ex_num}'] && (
{indent}  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
{indent}    <h3 className="font-semibold text-green-900 mb-3">Solution</h3>{solution_content}</div>
{indent})}}
{end_indent}</div>'''

# Trouver toutes les solutions
matches = list(re.finditer(pattern, content, re.DOTALL))
print(f"Trouvé {len(matches)} blocs de solutions")

# Remplacer de la fin vers le début pour ne pas décaler les indices
for i, match in enumerate(reversed(matches), start=1):
    ex_num = len(matches) - i + 1
    replacement = create_collapsible(match, ex_num)
    content = content[:match.start()] + replacement + content[match.end():]
    print(f"Converti exercice {ex_num}")

# Écrire le résultat
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Conversion terminée: {len(matches)} solutions converties")
