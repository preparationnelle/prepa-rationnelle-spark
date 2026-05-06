import re

file_path = 'src/pages/formation/Python/PythonProbabilitesExercicesPage.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix \textbf{1.}, \textbf{2.}, etc.
content = re.sub(r'\\textbf\{(\d+)\.\}', r'**\1.**', content)

# Fix \textbf{sans remise}
content = content.replace(r'\textbf{sans remise}', '**sans remise**')

# Fix \textbf{Méthode du rejet :}
content = content.replace(r'\textbf{Méthode du rejet :}', '**Méthode du rejet :**')

# Fix $\texttt{something}$
def replace_math_texttt(m):
    inner = m.group(1)
    inner = inner.replace('\\_', '_')
    return f'`{inner}`'
content = re.sub(r'\$\s*\\texttt\{([^}]+)\}\s*\$', replace_math_texttt, content)

# Fix \texttt{something} outside math
def replace_texttt(m):
    inner = m.group(1)
    inner = inner.replace('\\_', '_')
    return f'`{inner}`'
content = re.sub(r'\\texttt\{([^}]+)\}', replace_texttt, content)

# Fix objectives that have \text{...}
def clean_objective_text(m):
    text = m.group(0)
    text = re.sub(r'\\text\{([^}]+)\}', r'\1', text)
    return text
content = re.sub(r'objective:\s*"[^"]+"', clean_objective_text, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixes applied.")
