import re

file_path = '/Users/dimitardimitrov/prepa-rationnelle-spark-18/src/pages/formation/oteria/OteriaLogiqueFondamentaleExercicesPage.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Supprimer les lignes vides excessives (plus de 2 lignes vides consécutives)
content = re.sub(r'\n\n\n+', '\n\n', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Nettoyage terminé")
