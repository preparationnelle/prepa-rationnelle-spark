import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Calculator, FunctionSquare, CheckCircle, AlertCircle, Code } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const exercises = [
  {
    id: 1,
    title: "Sommes des puissances",
    difficulty: "Facile",
    points: 3,
    enonce: "Calculer les sommes suivantes :",
    questions: [
      {
        question: "\\sum_{k=1}^{10} k",
        solution: "\\frac{10 \\times 11}{2} = 55",
        explanation: "\\text{On utilise la formule } \\sum_{k=1}^n k = \\frac{n(n+1)}{2} \\text{ avec } n=10",
        pythonCode: `# Méthode 1 : Avec une boucle
n = 10
somme = 0
for k in range(1, n+1):
    somme += k
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([k for k in range(1, n+1)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule mathématique
somme = n * (n + 1) // 2
print(f"Somme avec formule : {somme}")

# Résultat : 55`
      },
      {
        question: "\\sum_{k=1}^{5} k^2",
        solution: "\\frac{5 \\times 6 \\times 11}{6} = 55",
        explanation: "\\text{On utilise la formule } \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} \\text{ avec } n=5",
        pythonCode: `# Méthode 1 : Avec une boucle
n = 5
somme = 0
for k in range(1, n+1):
    somme += k**2
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([k**2 for k in range(1, n+1)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule mathématique
somme = n * (n + 1) * (2*n + 1) // 6
print(f"Somme avec formule : {somme}")

# Résultat : 55`
      },
      {
        question: "\\sum_{k=1}^{4} k^3",
        solution: "\\left(\\frac{4 \\times 5}{2}\\right)^2 = 100",
        explanation: "\\text{On utilise la formule } \\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 \\text{ avec } n=4",
        pythonCode: `# Méthode 1 : Avec une boucle
n = 4
somme = 0
for k in range(1, n+1):
    somme += k**3
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([k**3 for k in range(1, n+1)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule mathématique
somme = (n * (n + 1) // 2) ** 2
print(f"Somme avec formule : {somme}")

# Résultat : 100`
      }
    ]
  },
  {
    id: 2,
    title: "Sommes géométriques",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les sommes géométriques suivantes :",
    questions: [
      {
        question: "\\sum_{k=0}^{6} 2^k",
        solution: "\\frac{1-2^7}{1-2} = 2^7 - 1 = 127",
        explanation: "\\text{Somme géométrique de raison } q=2\\text{, avec } n=6 \\text{ termes : } \\displaystyle\\frac{1-q^{n+1}}{1-q}",
        pythonCode: `# Méthode 1 : Avec une boucle
n = 6
somme = 0
for k in range(0, n+1):
    somme += 2**k
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([2**k for k in range(0, n+1)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule géométrique
q = 2
somme = (1 - q**(n+1)) // (1 - q)
print(f"Somme avec formule : {somme}")

# Ou plus simplement : 2^(n+1) - 1
somme = 2**(n+1) - 1
print(f"Formule simplifiée : {somme}")

# Résultat : 127`
      },
      {
        question: "\\sum_{k=2}^{5} 3^k",
        solution: "3^2 \\cdot \\frac{1-3^4}{1-3} = 9 \\cdot \\frac{80}{2} = 360",
        explanation: "\\text{Somme géométrique décalée : } q^m \\cdot \\displaystyle\\frac{1-q^{n-m+1}}{1-q} \\text{ avec } m=2, n=5, q=3",
        pythonCode: `# Méthode 1 : Avec une boucle
somme = 0
for k in range(2, 6):
    somme += 3**k
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([3**k for k in range(2, 6)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule géométrique décalée
m, n, q = 2, 5, 3
somme = q**m * (1 - q**(n-m+1)) // (1 - q)
print(f"Somme avec formule : {somme}")

# Vérification du calcul
# 3^2 + 3^3 + 3^4 + 3^5 = 9 + 27 + 81 + 243 = 360
print(f"Vérification : {3**2 + 3**3 + 3**4 + 3**5}")

# Résultat : 360`
      },
      {
        question: "\\sum_{k=0}^{n} \\left(\\frac{1}{2}\\right)^k",
        solution: "\\frac{1-(1/2)^{n+1}}{1-1/2} = 2\\left(1-\\frac{1}{2^{n+1}}\\right)",
        explanation: "\\text{Somme géométrique de raison } q=\\displaystyle\\frac{1}{2}",
        pythonCode: `# Exemple avec n=10
n = 10

# Méthode 1 : Avec une boucle
somme = 0
for k in range(0, n+1):
    somme += (1/2)**k
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec sum() et liste
somme = sum([(1/2)**k for k in range(0, n+1)])
print(f"Somme avec liste : {somme}")

# Méthode 3 : Avec la formule géométrique
q = 1/2
somme = (1 - q**(n+1)) / (1 - q)
print(f"Somme avec formule : {somme}")

# Formule simplifiée : 2(1 - 1/2^(n+1))
somme = 2 * (1 - 1/(2**(n+1)))
print(f"Formule simplifiée : {somme}")

# Note : quand n → ∞, la somme tend vers 2`
      }
    ]
  },
  {
    id: 3,
    title: "Changements d'indices",
    difficulty: "Moyen",
    points: 5,
    enonce: "Effectuer les changements d'indices demandés :",
    questions: [
      {
        question: "\\text{Réécrire } \\displaystyle\\sum_{k=2}^{8} (k+1)^2 \\text{ avec l'indice } j = k-1",
        solution: "\\sum_{j=1}^{7} (j+2)^2",
        explanation: "\\text{Si } j = k-1\\text{, alors } k = j+1\\text{. Quand } k=2\\text{, } j=1 \\text{ et quand } k=8\\text{, } j=7"
      },
      {
        question: "\\text{Réécrire } \\displaystyle\\sum_{i=1}^{n} x_{i+2} \\text{ avec l'indice } m = i+2",
        solution: "\\sum_{m=3}^{n+2} x_m",
        explanation: "\\text{Si } m = i+2\\text{, quand } i=1\\text{, } m=3 \\text{ et quand } i=n\\text{, } m=n+2"
      },
      {
        question: "\\text{Réécrire } \\displaystyle\\sum_{k=0}^{n} x_{n-k} \\text{ avec l'indice } \\ell = n-k",
        solution: "\\sum_{\\ell=0}^{n} x_\\ell",
        explanation: "\\text{Si } \\ell = n-k\\text{, quand } k=0\\text{, } \\ell=n \\text{ et quand } k=n\\text{, } \\ell=0\\text{. L'ordre est inversé.}"
      }
    ]
  },
  {
    id: 4,
    title: "Sommes télescopiques",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les sommes télescopiques suivantes :",
    questions: [
      {
        question: "\\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)",
        solution: "1 - \\frac{1}{n+1} = \\frac{n}{n+1}",
        explanation: "\\text{Somme télescopique : la plupart des termes s'annulent, il reste } u_1 - u_{n+1}",
        pythonCode: `# Exemple avec n=10
n = 10

# Méthode 1 : Calcul direct avec boucle
somme = 0
for k in range(1, n+1):
    somme += (1/k - 1/(k+1))
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec la formule télescopique
# Seuls le premier et dernier terme restent
somme = 1 - 1/(n+1)
print(f"Somme avec formule : {somme}")
print(f"= {n}/{n+1} = {n/(n+1)}")

# Affichage des termes pour comprendre
print(f"\\nDétail des premiers termes :")
for k in range(1, min(6, n+1)):
    print(f"k={k}: 1/{k} - 1/{k+1} = {1/k:.4f} - {1/(k+1):.4f} = {1/k - 1/(k+1):.4f}")

# Résultat pour n=10 : 10/11 ≈ 0.9091`
      },
      {
        question: "\\sum_{k=1}^{5} (k^2 - (k-1)^2)",
        solution: "5^2 - 0^2 = 25",
        explanation: "\\text{Forme télescopique : } \\displaystyle\\sum_{k=1}^n (u_{k+1} - u_k) = u_{n+1} - u_1",
        pythonCode: `n = 5

# Méthode 1 : Calcul direct avec boucle
somme = 0
for k in range(1, n+1):
    somme += (k**2 - (k-1)**2)
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec la formule télescopique
# La somme se simplifie : dernier terme - premier terme
somme = n**2 - 0**2
print(f"Somme télescopique : {n}² - 0² = {somme}")

# Affichage détaillé des termes
print(f"\\nDétail de chaque terme :")
for k in range(1, n+1):
    terme = k**2 - (k-1)**2
    print(f"k={k}: {k}² - {k-1}² = {k**2} - {(k-1)**2} = {terme}")
    
# On observe que k² - (k-1)² = 2k - 1
print(f"\\nRemarque : chaque terme vaut 2k-1")
print(f"Somme = {sum([2*k-1 for k in range(1, n+1)])}")

# Résultat : 25`
      },
      {
        question: "\\sum_{k=2}^{n} \\left(\\sqrt{k} - \\sqrt{k-1}\\right)",
        solution: "\\sqrt{n} - \\sqrt{1} = \\sqrt{n} - 1",
        explanation: "\\text{Somme télescopique avec } u_k = \\sqrt{k}",
        pythonCode: `import math

# Exemple avec n=100
n = 100

# Méthode 1 : Calcul direct avec boucle
somme = 0
for k in range(2, n+1):
    somme += (math.sqrt(k) - math.sqrt(k-1))
print(f"Somme avec boucle : {somme}")

# Méthode 2 : Avec la formule télescopique
somme = math.sqrt(n) - math.sqrt(1)
print(f"Somme télescopique : √{n} - 1 = {somme}")

# Affichage des premiers termes
print(f"\\nDétail des premiers termes :")
for k in range(2, min(7, n+1)):
    terme = math.sqrt(k) - math.sqrt(k-1)
    print(f"k={k}: √{k} - √{k-1} = {math.sqrt(k):.4f} - {math.sqrt(k-1):.4f} = {terme:.4f}")

# Résultat pour n=100 : √100 - 1 = 10 - 1 = 9`
      }
    ]
  },
  {
    id: 5,
    title: "Coefficients binomiaux",
    difficulty: "Difficile",
    points: 6,
    enonce: "Calculer et démontrer les relations suivantes :",
    questions: [
      {
        question: "\\text{Calculer } \\binom{7}{3}",
        solution: "\\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35",
        explanation: "\\text{Application directe de la définition des coefficients binomiaux}",
        pythonCode: `from math import factorial, comb

n, k = 7, 3

# Méthode 1 : Avec factorielles
resultat = factorial(n) // (factorial(k) * factorial(n - k))
print(f"Avec factorielles : C({n},{k}) = {resultat}")

# Méthode 2 : Avec math.comb (Python 3.8+)
resultat = comb(n, k)
print(f"Avec math.comb : C({n},{k}) = {resultat}")

# Méthode 3 : Calcul détaillé
numerateur = n * (n-1) * (n-2)  # 7 × 6 × 5
denominateur = factorial(k)      # 3!
resultat = numerateur // denominateur
print(f"\\nCalcul détaillé :")
print(f"Numérateur : {n} × {n-1} × {n-2} = {numerateur}")
print(f"Dénominateur : {k}! = {denominateur}")
print(f"Résultat : {numerateur}/{denominateur} = {resultat}")

# Résultat : 35`
      },
      {
        question: "\\text{Vérifier que } \\binom{6}{2} = \\binom{6}{4}",
        solution: "\\binom{6}{2} = 15 = \\binom{6}{4}",
        explanation: "\\text{Propriété de symétrie : } \\binom{n}{k} = \\binom{n}{n-k}",
        pythonCode: `from math import comb

n = 6

# Calcul des deux coefficients
c_6_2 = comb(6, 2)
c_6_4 = comb(6, 4)

print(f"C(6,2) = {c_6_2}")
print(f"C(6,4) = {c_6_4}")
print(f"\\nSont-ils égaux ? {c_6_2 == c_6_4}")

# Démonstration de la propriété générale
print(f"\\nPropriété de symétrie : C(n,k) = C(n,n-k)")
print(f"\\nVérification pour différentes valeurs :")
for n in range(3, 8):
    for k in range(n+1):
        c_n_k = comb(n, k)
        c_n_nk = comb(n, n-k)
        print(f"C({n},{k}) = {c_n_k}, C({n},{n-k}) = {c_n_nk} → {'✓' if c_n_k == c_n_nk else '✗'}")

# Résultat : C(6,2) = C(6,4) = 15`
      },
      {
        question: "\\text{Démontrer que } \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}",
        solution: "\\text{Relation de Pascal (triangle de Pascal)}",
        explanation: "\\text{Cette relation permet de construire le triangle de Pascal ligne par ligne}",
        pythonCode: `from math import comb

# Vérifions la relation de Pascal pour plusieurs valeurs
print("Relation de Pascal : C(n,k) = C(n-1,k-1) + C(n-1,k)\\n")

for n in range(3, 8):
    for k in range(1, n):
        c_n_k = comb(n, k)
        c_n1_k1 = comb(n-1, k-1)
        c_n1_k = comb(n-1, k)
        somme = c_n1_k1 + c_n1_k
        
        print(f"C({n},{k}) = {c_n_k}")
        print(f"C({n-1},{k-1}) + C({n-1},{k}) = {c_n1_k1} + {c_n1_k} = {somme}")
        print(f"Vérification : {c_n_k == somme} {'✓' if c_n_k == somme else '✗'}\\n")

# Construction du triangle de Pascal avec cette relation
print("\\nTriangle de Pascal (5 premières lignes) :")
lignes = 6
for n in range(lignes):
    ligne = []
    for k in range(n+1):
        if k == 0 or k == n:
            ligne.append(1)
        else:
            # Utilisation de la relation de Pascal
            ligne.append(triangle[n-1][k-1] + triangle[n-1][k])
    print(' '.join(str(x).center(3) for x in ligne).center(lignes*4))
    if n == 0:
        triangle = [ligne]
    else:
        triangle.append(ligne)`
      }
    ]
  },
  {
    id: 6,
    title: "Binôme de Newton",
    difficulty: "Difficile",
    points: 7,
    enonce: "Applications de la formule du binôme de Newton :",
    questions: [
      {
        question: "\\text{Développer } (x+2)^4",
        solution: "x^4 + 8x^3 + 24x^2 + 32x + 16",
        explanation: "\\text{Application du binôme : } \\displaystyle\\sum_{k=0}^4 \\binom{4}{k} x^k 2^{4-k}",
        pythonCode: `from math import comb

n = 4
a_val = 2  # Coefficient de la deuxième partie (x+2)

print(f"Développement de (x+{a_val})^{n} :\\n")

# Calcul de chaque terme
termes = []
for k in range(n+1):
    coef = comb(n, k)
    puissance_a = n - k
    puissance_x = k
    
    # Coefficient numérique du terme
    coef_numerique = coef * (a_val ** puissance_a)
    
    # Construction de la chaîne du terme
    if k == 0:
        terme_str = f"{coef_numerique}"
    elif k == 1:
        terme_str = f"{coef_numerique}x"
    else:
        terme_str = f"{coef_numerique}x^{k}"
    
    termes.append(terme_str)
    
    print(f"k={k}: C({n},{k}) × x^{k} × {a_val}^{puissance_a} = {coef} × x^{k} × {a_val**puissance_a} = {terme_str}")

print(f"\\nRésultat : {' + '.join(termes)}")
print(f"= x^4 + 8x^3 + 24x^2 + 32x + 16")

# Vérification numérique avec x=1
x = 1
resultat_direct = (x + a_val)**n
resultat_developpe = sum([comb(n, k) * (x**k) * (a_val**(n-k)) for k in range(n+1)])
print(f"\\nVérification avec x=1 : ({x}+{a_val})^{n} = {resultat_direct}")
print(f"Avec la formule développée : {resultat_developpe}")`
      },
      {
        question: "\\text{Calculer } \\displaystyle\\sum_{k=0}^{5} \\binom{5}{k}",
        solution: "2^5 = 32",
        explanation: "\\text{En posant } a=b=1 \\text{ dans } (a+b)^n\\text{, on obtient } \\displaystyle\\sum_{k=0}^n \\binom{n}{k} = 2^n",
        pythonCode: `from math import comb

n = 5

# Méthode 1 : Calcul direct de la somme
somme = sum([comb(n, k) for k in range(n+1)])
print(f"Somme directe : Σ C({n},k) = {somme}")

# Méthode 2 : Avec la formule (a+b)^n avec a=b=1
resultat_formule = 2**n
print(f"Avec la formule : 2^{n} = {resultat_formule}")

# Détail de chaque terme
print(f"\\nDétail des termes :")
for k in range(n+1):
    c = comb(n, k)
    print(f"C({n},{k}) = {c}")

print(f"\\nPropriété : la somme des coefficients binomiaux de la ligne n")
print(f"du triangle de Pascal vaut 2^n")

# Vérification pour plusieurs valeurs de n
print(f"\\nVérification pour d'autres valeurs :")
for n_test in range(1, 8):
    somme_test = sum([comb(n_test, k) for k in range(n_test+1)])
    print(f"n={n_test}: Σ C({n_test},k) = {somme_test} = 2^{n_test} = {2**n_test}")`
      },
      {
        question: "\\text{Calculer } \\displaystyle\\sum_{k=0}^{4} (-1)^k \\binom{4}{k}",
        solution: "0",
        explanation: "\\text{En posant } a=1, b=-1 \\text{ dans } (a+b)^n\\text{, on obtient } \\displaystyle\\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0",
        pythonCode: `from math import comb

n = 4

# Méthode 1 : Calcul direct de la somme
somme = sum([(-1)**k * comb(n, k) for k in range(n+1)])
print(f"Somme directe : Σ (-1)^k × C({n},k) = {somme}")

# Méthode 2 : Avec la formule (a+b)^n avec a=1, b=-1
a, b = 1, -1
resultat_formule = (a + b)**n
print(f"Avec la formule : ({a}+({b}))^{n} = {resultat_formule}")

# Détail de chaque terme
print(f"\\nDétail des termes (alternés) :")
for k in range(n+1):
    c = comb(n, k)
    signe = (-1)**k
    terme = signe * c
    print(f"k={k}: (-1)^{k} × C({n},{k}) = {signe} × {c} = {terme:+d}")

print(f"\\nObservation : les termes positifs et négatifs s'annulent")

# Vérification pour plusieurs valeurs de n
print(f"\\nVérification pour d'autres valeurs :")
for n_test in range(1, 8):
    somme_test = sum([(-1)**k * comb(n_test, k) for k in range(n_test+1)])
    print(f"n={n_test}: Σ (-1)^k × C({n_test},k) = {somme_test}")
    
print(f"\\nPropriété : cette somme vaut toujours 0 car (1-1)^n = 0^n = 0")`
      }
    ]
  },
  {
    id: 7,
    title: "Produits et factorielles",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les produits suivants :",
    questions: [
      {
        question: "\\prod_{k=1}^{5} (2k+1)",
        solution: "3 \\times 5 \\times 7 \\times 9 \\times 11 = 10395",
        explanation: "\\text{Produit des premiers nombres impairs} \\geq 3",
        pythonCode: `import numpy as np

n = 5

# Méthode 1 : Avec une boucle
produit = 1
for k in range(1, n+1):
    produit *= (2*k + 1)
print(f"Produit avec boucle : {produit}")

# Méthode 2 : Avec numpy.prod
valeurs = [2*k + 1 for k in range(1, n+1)]
produit = np.prod(valeurs)
print(f"Produit avec numpy : {produit}")

# Affichage détaillé
print(f"\\nDétail du calcul :")
termes = [2*k + 1 for k in range(1, n+1)]
print(f"Termes : {termes}")
print(f"{' × '.join(map(str, termes))} = {np.prod(termes)}")

# Vérification manuelle
print(f"\\nVérification : 3 × 5 × 7 × 9 × 11 = {3*5*7*9*11}")

# Résultat : 10395`
      },
      {
        question: "\\prod_{k=2}^{n} \\frac{k}{k-1}",
        solution: "\\frac{n}{1} = n",
        explanation: "\\text{Produit télescopique : } \\displaystyle\\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{n}{n-1}",
        pythonCode: `# Exemple avec n=10
n = 10

# Méthode 1 : Calcul direct avec boucle
produit = 1
for k in range(2, n+1):
    produit *= k / (k-1)
print(f"Produit avec boucle : {produit}")

# Méthode 2 : Observation télescopique
# Les termes s'annulent : 2/1 × 3/2 × 4/3 × ... × n/(n-1)
# Il reste seulement n/1
produit_simple = n / 1
print(f"Avec simplification télescopique : {n}/1 = {produit_simple}")

# Affichage détaillé des premiers termes
print(f"\\nDétail du produit télescopique :")
for k in range(2, min(7, n+1)):
    print(f"k={k}: {k}/{k-1} = {k/(k-1):.4f}")

print(f"\\nObservation : le numérateur de chaque fraction")
print(f"annule le dénominateur de la suivante.")
print(f"Résultat : n = {n}")

# Résultat pour n=10 : 10`
      },
      {
        question: "\\text{Simplifier } \\displaystyle\\frac{n!}{(n-3)!}",
        solution: "n(n-1)(n-2)",
        explanation: "\\displaystyle\\frac{n!}{(n-3)!} = \\frac{n \\cdot (n-1) \\cdot (n-2) \\cdot (n-3)!}{(n-3)!}",
        pythonCode: `from math import factorial

# Exemple avec n=10
n = 10

# Méthode 1 : Calcul avec factorielles
resultat_fact = factorial(n) // factorial(n-3)
print(f"Avec factorielles : {n}! / {n-3}! = {resultat_fact}")

# Méthode 2 : Simplification directe
resultat_simple = n * (n-1) * (n-2)
print(f"Formule simplifiée : {n} × {n-1} × {n-2} = {resultat_simple}")

# Vérification qu'ils sont égaux
print(f"\\nVérification : {resultat_fact} == {resultat_simple} ? {resultat_fact == resultat_simple}")

# Explication de la simplification
print(f"\\nExplication :")
print(f"{n}! = {n} × {n-1} × {n-2} × {n-3}!")
print(f"Donc : {n}! / {n-3}! = ({n} × {n-1} × {n-2} × {n-3}!) / {n-3}!")
print(f"     = {n} × {n-1} × {n-2}")

# Fonction générale
def simplifier_factorielle(n, k):
    """Calcule n! / (n-k)!"""
    if k == 0:
        return 1
    resultat = 1
    for i in range(k):
        resultat *= (n - i)
    return resultat

print(f"\\nAvec fonction : {n}! / {n-3}! = {simplifier_factorielle(n, 3)}")

# Résultat pour n=10 : 10 × 9 × 8 = 720`
      }
    ]
  },
  {
    id: 8,
    title: "Problème de synthèse",
    difficulty: "Très difficile",
    points: 10,
    enonce: "Problème combinant plusieurs notions :",
    questions: [
      {
        question: "\\text{Démontrer que } \\displaystyle\\sum_{k=0}^{n} k \\binom{n}{k} = n \\cdot 2^{n-1}",
        solution: "\\text{Utiliser la propriété } k\\binom{n}{k} = n\\binom{n-1}{k-1} \\text{ et la formule du binôme}",
        explanation: "\\displaystyle\\sum_{k=0}^{n} k \\binom{n}{k} = n \\sum_{k=1}^{n} \\binom{n-1}{k-1} = n \\sum_{j=0}^{n-1} \\binom{n-1}{j} = n \\cdot 2^{n-1}",
        pythonCode: `from math import comb

# Exemple avec n=6
n = 6

# Méthode 1 : Calcul direct de la somme
somme_directe = sum([k * comb(n, k) for k in range(n+1)])
print(f"Calcul direct : Σ k×C({n},k) = {somme_directe}")

# Méthode 2 : Avec la formule
resultat_formule = n * (2 ** (n-1))
print(f"Avec la formule : {n} × 2^{n-1} = {resultat_formule}")

print(f"\\nVérification : {somme_directe} == {resultat_formule} ? {somme_directe == resultat_formule}")

# Détail des termes
print(f"\\nDétail de chaque terme k×C({n},k) :")
for k in range(n+1):
    terme = k * comb(n, k)
    print(f"k={k}: {k} × C({n},{k}) = {k} × {comb(n,k)} = {terme}")

print(f"\\nSomme totale : {sum([k * comb(n, k) for k in range(n+1)])}")

# Démonstration avec la propriété
print(f"\\nDémonstration avec la propriété k×C(n,k) = n×C(n-1,k-1) :")
somme_avec_propriete = 0
for k in range(1, n+1):
    terme = n * comb(n-1, k-1)
    somme_avec_propriete += terme
    print(f"k={k}: {n} × C({n-1},{k-1}) = {n} × {comb(n-1,k-1)} = {terme}")

print(f"\\nSomme = {somme_avec_propriete} = {n} × 2^{n-1} = {n * (2**(n-1))}")

# Vérification pour plusieurs valeurs de n
print(f"\\nVérification pour différentes valeurs de n :")
for n_test in range(2, 10):
    gauche = sum([k * comb(n_test, k) for k in range(n_test+1)])
    droite = n_test * (2 ** (n_test-1))
    print(f"n={n_test}: Σ k×C(n,k) = {gauche}, n×2^(n-1) = {droite} → {gauche == droite}")`
      },
      {
        question: "\\text{Calculer } \\displaystyle\\sum_{k=0}^{n} \\binom{n}{k}^2",
        solution: "\\binom{2n}{n}",
        explanation: "\\text{Identité de Vandermonde : cette somme compte le nombre de façons de choisir } n \\text{ objets parmi } 2n",
        pythonCode: `from math import comb

# Exemple avec n=5
n = 5

# Méthode 1 : Calcul direct de la somme des carrés
somme_carres = sum([comb(n, k)**2 for k in range(n+1)])
print(f"Calcul direct : Σ C({n},k)² = {somme_carres}")

# Méthode 2 : Avec l'identité de Vandermonde
resultat_vandermonde = comb(2*n, n)
print(f"Identité de Vandermonde : C({2*n},{n}) = {resultat_vandermonde}")

print(f"\\nVérification : {somme_carres} == {resultat_vandermonde} ? {somme_carres == resultat_vandermonde}")

# Détail des termes
print(f"\\nDétail de chaque terme C({n},k)² :")
for k in range(n+1):
    c = comb(n, k)
    carre = c ** 2
    print(f"k={k}: C({n},{k})² = {c}² = {carre}")

print(f"\\nSomme totale : {somme_carres}")

# Explication de l'identité de Vandermonde
print(f"\\nInterprétation combinatoire :")
print(f"Choisir {n} objets parmi {2*n} = choisir k objets dans le groupe 1")
print(f"et {n}-k objets dans le groupe 2, pour tout k de 0 à {n}")
print(f"C({2*n},{n}) = Σ C({n},k) × C({n},{n}-k) = Σ C({n},k)²")

# Vérification pour plusieurs valeurs de n
print(f"\\nVérification pour différentes valeurs de n :")
for n_test in range(1, 8):
    gauche = sum([comb(n_test, k)**2 for k in range(n_test+1)])
    droite = comb(2*n_test, n_test)
    print(f"n={n_test}: Σ C(n,k)² = {gauche}, C(2n,n) = {droite} → {gauche == droite}")`
      },
      {
        question: "\\text{Prouver que } \\left(\\displaystyle\\sum_{k=1}^{n} k\\right)^2 = \\displaystyle\\sum_{k=1}^{n} k^3",
        solution: "\\left(\\frac{n(n+1)}{2}\\right)^2 = \\sum_{k=1}^{n} k^3",
        explanation: "\\text{Les deux membres valent } \\displaystyle\\frac{n^2(n+1)^2}{4}",
        pythonCode: `# Exemple avec n=10
n = 10

# Membre de gauche : (Σ k)²
somme_k = sum([k for k in range(1, n+1)])
membre_gauche = somme_k ** 2
print(f"Membre de gauche : (Σ k)² = ({somme_k})² = {membre_gauche}")

# Avec la formule de la somme
somme_formule = n * (n + 1) // 2
membre_gauche_formule = somme_formule ** 2
print(f"Avec formule : (n(n+1)/2)² = ({somme_formule})² = {membre_gauche_formule}")

# Membre de droite : Σ k³
membre_droite = sum([k**3 for k in range(1, n+1)])
print(f"\\nMembre de droite : Σ k³ = {membre_droite}")

# Avec la formule de la somme des cubes
somme_cubes_formule = (n * (n + 1) // 2) ** 2
print(f"Avec formule : (n(n+1)/2)² = {somme_cubes_formule}")

# Vérification
print(f"\\nVérification : {membre_gauche} == {membre_droite} ? {membre_gauche == membre_droite}")

# Détail pour les petites valeurs
print(f"\\nDétail pour n={n} :")
print(f"Somme 1 à {n} : {' + '.join(str(k) for k in range(1, min(6, n+1)))}... = {somme_k}")
print(f"Carrés : {' + '.join(str(k**3) for k in range(1, min(6, n+1)))}... = {membre_droite}")

# Démonstration étape par étape
print(f"\\nDémonstration :")
print(f"(Σ k)² = (n(n+1)/2)² = n²(n+1)²/4")
print(f"     = {n**2} × {(n+1)**2} / 4 = {n**2 * (n+1)**2} / 4 = {n**2 * (n+1)**2 // 4}")
print(f"\\nΣ k³ = (n(n+1)/2)² = n²(n+1)²/4")
print(f"    = {somme_cubes_formule}")

# Vérification pour plusieurs valeurs de n
print(f"\\nVérification pour différentes valeurs de n :")
for n_test in range(1, 12):
    gauche = (sum([k for k in range(1, n_test+1)])) ** 2
    droite = sum([k**3 for k in range(1, n_test+1)])
    formule = (n_test * (n_test + 1) // 2) ** 2
    print(f"n={n_test:2d}: (Σk)²={gauche:6d}, Σk³={droite:6d}, formule={formule:6d} → {gauche == droite == formule}")

# Illustration visuelle
print(f"\\nFormule générale : (1+2+...+n)² = 1³ + 2³ + ... + n³")`
      }
    ]
  }
];

const OteriaRecurrenceRecursiviteExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(1);
  const [showSolutions, setShowSolutions] = useState({});

  const toggleSolution = (exerciseId, questionIndex) => {
    const key = `${exerciseId}-${questionIndex}`;
    setShowSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentExercise = exercises.find(ex => ex.id === selectedExercise);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800";
      case "Moyen": return "bg-orange-100 text-orange-800";
      case "Difficile": return "bg-red-100 text-red-800";
      case "Très difficile": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 3 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 3 : Exercices - Sommes, produits et coefficients binomiaux</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Maîtrisez les techniques de calcul avec des exercices progressifs et détaillés
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/recurrence-recursivite-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Calculator className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Liste des exercices */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-teal-900">Exercices</h3>
                <div className="space-y-2">
                  {exercises.map((exercise) => (
                    <button
                      key={exercise.id}
                      onClick={() => setSelectedExercise(exercise.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedExercise === exercise.id
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="font-medium text-sm">Exercice {exercise.id}</div>
                      <div className="text-xs opacity-80">{exercise.title}</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs">{exercise.points} pts</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu de l'exercice */}
            <div className="lg:col-span-3">
              {currentExercise && (
                <Card className="bg-white shadow-lg border border-blue-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-teal-900">
                        Exercice {currentExercise.id} : {currentExercise.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm px-3 py-1 rounded-full ${getDifficultyColor(currentExercise.difficulty)}`}>
                          {currentExercise.difficulty}
                        </span>
                        <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                          {currentExercise.points} points
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Énoncé :</h4>
                      <p className="text-blue-800">{currentExercise.enonce}</p>
                    </div>

                    <div className="space-y-6">
                      {currentExercise.questions.map((question, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="mb-3">
                            <h5 className="font-medium text-blue-900 mb-2">
                              Question {index + 1} :
                            </h5>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <LatexRenderer latex={question.question} block />
                            </div>
                          </div>

                          <Button
                            onClick={() => toggleSolution(currentExercise.id, index)}
                            variant="outline"
                            className="mb-3"
                          >
                            {showSolutions[`${currentExercise.id}-${index}`] ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Masquer la solution
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-4 w-4 mr-2" />
                                Voir la solution
                              </>
                            )}
                          </Button>

                          {showSolutions[`${currentExercise.id}-${index}`] && (
                            <div className="space-y-4">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h6 className="font-medium text-green-900 mb-2">Solution mathématique :</h6>
                                <div className="mb-3">
                                  <LatexRenderer latex={question.solution} block />
                                </div>
                                <h6 className="font-medium text-green-900 mb-2">Explication :</h6>
                                <p className="text-green-800">
                                  <LatexRenderer latex={question.explanation} />
                                </p>
                              </div>
                              
                              {question.pythonCode && (
                                <div className="bg-white border border-blue-300 rounded-lg p-4">
                                  <h6 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
                                    <Code className="h-5 w-5" />
                                    Solution en Python :
                                  </h6>
                                  <div className="bg-blue-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                                    <pre className="whitespace-pre-wrap">{question.pythonCode}</pre>
                                  </div>
                                  <p className="text-sm text-blue-700 mt-2 italic">
                                    Ce code Python implémente la solution mathématique et permet de vérifier les résultats.
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-6xl mx-auto">
          <Link to="/formation/oteria/recurrence-recursivite-cours">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Retour au cours
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Calculator className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">Flashcards →</div>
        </div>
      </div>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteExercicesPage;
