
export const pythonCommands = {
  lists: {
    title: "Listes",
    commands: [
      { command: "[]", description: "Créer une liste vide" },
      { command: "[a]*n", description: "Créer une liste avec n fois l'élément a" },
      { command: "L.append(a)", description: "Ajoute l'élément a à la fin de la liste L" },
      { command: "L1 + L2", description: "Concatène les deux listes L1 et L2" },
      { command: "len(L)", description: "Renvoie le nombre d'éléments de la liste L" },
      { command: "L.pop(k)", description: "Renvoie le k-ième élément de la liste L et l'enlève de L" },
      { command: "L.count(a)", description: "Renvoie le nombre d'occurrences de a dans la liste L" },
      { command: "L.remove(a)", description: "Enlève une fois la valeur a de la liste L" },
      { command: "max(L)", description: "Renvoie le plus grand élément de la liste L" },
      { command: "min(L)", description: "Renvoie le plus petit élément de la liste L" },
      { command: "sum(L)", description: "Renvoie la somme de tous les éléments de la liste L" },
      { command: "del(L)", description: "Supprime la liste L de la mémoire" },
      { command: "a in L", description: "Vaut True si a se trouve au moins une fois dans L et False sinon" }
    ]
  },
  imports: {
    title: "Modules mathématiques",
    commands: [
      { command: "import numpy as np", description: "Importation de Numpy avec l'alias np" },
      { command: "import math as m", description: "Importation de Math avec l'alias m" },
      { command: "import numpy.linalg as al", description: "Importation d'algèbre linéaire avec l'alias al" },
      { command: "import numpy.random as rd", description: "Importation de random avec l'alias rd" },
      { command: "import matplotlib.pyplot as plt", description: "Importation de pyplot avec l'alias plt" },
      { command: "import pandas as pd", description: "Importation de pandas avec l'alias pd" }
    ]
  },
  arrays_matrices: {
    title: "Vecteurs et Matrices (Numpy)",
    commands: [
      { command: "np.array(L)", description: "Transforme la liste L en vecteur ou matrice numpy" },
      { command: "np.linspace(a,b,n)", description: "Crée un vecteur de n valeurs uniformément réparties entre a et b (inclus)" },
      { command: "np.zeros([n,m])", description: "Crée la matrice nulle de taille n × m" },
      { command: "np.ones([n,m])", description: "Crée la matrice de taille n × m dont tous les coefficients valent 1" },
      { command: "np.eye(n)", description: "Crée la matrice identité de taille n" },
      { command: "np.diag(L)", description: "Crée la matrice diagonale dont les termes diagonaux sont les éléments de la liste L" },
      { command: "np.arange(a,b,eps)", description: "Renvoie la liste des flottants de a à b de pas constant eps" }
    ]
  },
  operations: {
    title: "Opérations sur Matrices",
    commands: [
      { command: "np.transpose(M)", description: "Renvoie la transposée de M" },
      { command: "np.dot(M,P)", description: "Renvoie le produit matriciel MP" },
      { command: "np.sum(M)", description: "Renvoie la somme de tous les éléments de M" },
      { command: "np.prod(M)", description: "Renvoie le produit de tous les éléments de M" },
      { command: "np.max(M)", description: "Renvoie le plus grand élément de M" },
      { command: "np.min(M)", description: "Renvoie le plus petit élément de M" },
      { command: "np.shape(M)", description: "Renvoie dans un couple le format de la matrice M" },
      { command: "np.mean(M)", description: "Renvoie la moyenne des éléments de M" },
      { command: "np.var(M)", description: "Renvoie la variance des éléments de M" },
      { command: "np.std(M)", description: "Renvoie l'écart-type des éléments de M" },
      { command: "np.median(M)", description: "Renvoie la médiane des éléments de M" },
      { command: "np.cumsum(M)", description: "Renvoie la matrice des sommes cumulées" }
    ]
  },
  math_functions: {
    title: "Fonctions Mathématiques",
    commands: [
      { command: "np.abs(x)", description: "Renvoie |x|" },
      { command: "np.floor(x)", description: "Renvoie partie entière de x" },
      { command: "np.sqrt(x)", description: "Renvoie racine carrée de x (si x ≥ 0)" },
      { command: "np.log(x)", description: "Renvoie ln(x) (si x > 0)" },
      { command: "np.exp(x)", description: "Renvoie e^x" },
      { command: "np.e", description: "Renvoie la constante e" },
      { command: "np.pi", description: "Renvoie la constante π" },
      { command: "m.factorial(k)", description: "Renvoie k! (module math)" }
    ]
  },
  linalg: {
    title: "Algèbre Linéaire (linalg)",
    commands: [
      { command: "al.inv(M)", description: "Renvoie l'inverse de la matrice carrée M si elle est inversible" },
      { command: "al.eig(M)", description: "Renvoie (D, P) où D est le vecteur des valeurs propres et P la matrice de passage" },
      { command: "al.matrix_power(M,n)", description: "Renvoie la puissance n-ième de la matrice carrée M" },
      { command: "al.matrix_rank(M)", description: "Renvoie le rang de la matrice M" }
    ]
  },
  random: {
    title: "Simulation Probabiliste (random)",
    commands: [
      { command: "rd.random([r,s])", description: "Matrice (r,s) de coefficients suivant la loi uniforme U([0, 1])" },
      { command: "rd.randint(a,b,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi uniforme discrète U([[a, b-1]])" },
      { command: "rd.binomial(n,p,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi binomiale B(n, p)" },
      { command: "rd.geometric(p,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi géométrique G(p)" },
      { command: "rd.poisson(a,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi de Poisson P(a)" },
      { command: "rd.exponential(a,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi exponentielle E(1/a)" },
      { command: "rd.normal(m,d,[r,s])", description: "Matrice (r,s) de coefficients suivant la loi normale N(m, d²)" }
    ]
  },
  plotting: {
    title: "Graphiques (pyplot)",
    commands: [
      { command: "plt.plot(X,Y,options)", description: "Crée la courbe des points définis par X et Y" },
      { command: "plt.bar(X,Y)", description: "Crée le diagramme en bâtons défini par X et Y" },
      { command: "plt.hist(X,Y)", description: "Crée l'histogramme des valeurs X (Y classes/bornes)" },
      { command: "plt.boxplot(X)", description: "Génère le diagramme en boîte basé sur X" },
      { command: "plt.axis('equal')", description: "Rend le repère orthonormé" },
      { command: "plt.xlim(xmin,xmax)", description: "Fixe les bornes de l'axe des abscisses" },
      { command: "plt.ylim(ymin,ymax)", description: "Fixe les bornes de l'axe des ordonnées" },
      { command: "plt.show()", description: "Affiche le graphique" }
    ]
  },
  pandas: {
    title: "Traitement de données (pandas)",
    commands: [
      { command: "pd.read_csv('data.csv')", description: "Crée un tableau Pandas à partir d'un fichier CSV" },
      { command: "df.head(n)", description: "Renvoie les n premières lignes du tableau df" },
      { command: "df.shape", description: "Renvoie le couple (nombre de lignes, nombre de colonnes)" },
      { command: "df.mean", description: "Désigne le vecteur des moyennes de chaque colonne" },
      { command: "df.std", description: "Désigne le vecteur des écart-types de chaque colonne" },
      { command: "df.median", description: "Désigne le vecteur des médianes de chaque colonne" },
      { command: "df.count()", description: "Renvoie les effectifs de chaque colonne" },
      { command: "len(df)", description: "Renvoie le nombre de lignes du tableau df" },
      { command: "df.describe()", description: "Renvoie un tableau statistique complet (moyennes, écart-types, etc.)" },
      { command: "df.sort_values(by='col')", description: "Trie le tableau suivant la colonne 'col' (croissant)" },
      { command: "df.sort_values(by='col', ascending=False)", description: "Trie le tableau suivant la colonne 'col' (décroissant)" }
    ]
  },
  sql_queries: {
    title: "SQL - Requêtes",
    commands: [
      { command: "CREATE TABLE table", description: "Crée la table nommée table" },
      { command: "SELECT col1, col2 FROM table", description: "Renvoie un tableau formé des colonnes spécifiées (* pour tout)" },
      { command: "INSERT INTO table(...) VALUES (...)", description: "Ajoute un nouvel enregistrement dans la table" },
      { command: "UPDATE table SET col=val WHERE cond", description: "Met à jour les colonnes vérifiant la condition" },
      { command: "SELECT ... JOIN table2 ON ...", description: "Réalisation d'une jointure entre deux tables" },
      { command: "SELECT ... UNION SELECT ...", description: "Combine les résultats (sans doublons)" },
      { command: "SELECT ... INTERSECT SELECT ...", description: "Sélectionne les enregistrements communs" },
      { command: "SELECT ... EXCEPT SELECT ...", description: "Sélectionne les résultats de T1 sans ceux de T2" }
    ]
  },
  sql_commands: {
    title: "SQL - Commandes & Opérateurs",
    commands: [
      { command: "WHERE condition", description: "Filtre les enregistrements respectant une condition" },
      { command: "ORDER BY col ASC/DESC", description: "Trie les résultats (ASC=croissant, DESC=décroissant)" },
      { command: "DISTINCT", description: "Sélectionne uniquement des enregistrements distincts" },
      { command: "AND, OR, NOT", description: "Opérateurs logiques pour les conditions" }
    ]
  },
  sql_aggregation: {
    title: "SQL - Fonctions d'agrégation",
    commands: [
      { command: "MAX(col)", description: "Retourne la valeur maximale d'une colonne" },
      { command: "MIN(col)", description: "Retourne la valeur minimale d'une colonne" },
      { command: "SUM(col)", description: "Retourne la somme des valeurs d'une colonne" },
      { command: "AVG(col)", description: "Retourne la moyenne des valeurs d'une colonne" },
      { command: "COUNT(*)", description: "Retourne le nombre d'enregistrements" }
    ]
  }
};

export type PythonCommand = {
  command: string;
  description: string;
};

export type PythonCommandSection = {
  title: string;
  commands: PythonCommand[];
};
