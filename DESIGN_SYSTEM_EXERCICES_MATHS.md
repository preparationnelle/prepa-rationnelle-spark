# Design System - Exercices de Maths
## Documentation complète pour reproduire le design des exercices

## 🎨 Structure Générale

### Layout Principal
```tsx
<div className="min-h-screen bg-white">
  {/* Fil d'Ariane */}
  <nav>...</nav>

  {/* Contenu Principal */}
  <div className="container mx-auto py-8 px-4">
    {/* En-tête */}
    <div className="text-center mb-8">...</div>

    {/* Conteneur des exercices */}
    <div className="exercises-content">
      {/* Exercices individuels */}
    </div>
  </div>
</div>
```

## 📋 Fil d'Ariane (Breadcrumb)

### Structure HTML
```tsx
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
  <div className="container mx-auto px-4 py-2">
    <div className="flex items-center text-xs text-blue-600">
      <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
        <Home className="h-3 w-3" />
        <span>Accueil</span>
      </Link>
      <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
      {/* Autres liens... */}
      <span className="text-orange-600 font-medium">Chapitre X : Titre du chapitre - Exercices</span>
    </div>
  </div>
</nav>
```

### Classes CSS utilisées
- `text-xs` : Petite taille de police
- `text-blue-600` : Couleur bleue pour les liens
- `text-orange-600` : Couleur orange pour le titre du chapitre
- `hover:text-blue-700` : Changement de couleur au survol

## 🏷️ En-tête de Page

### Structure HTML
```tsx
<div className="text-center mb-8">
  <h1 className="text-4xl font-bold mb-8">
    Chapitre X : Titre du chapitre - Exercices
  </h1>
  <p className="text-lg text-gray-600 mb-8">
    Description courte du chapitre
  </p>

  <div className="flex justify-center gap-6 mb-6">
    <Link to="/formation/maths-chemin-vers-cours">
      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium">
        <BookOpen className="mr-2 h-4 w-4" />
        Cours
      </Button>
    </Link>
    <Button onClick={downloadExercisesPDF} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium">
      <Download className="mr-2 h-4 w-4" />
      Télécharger PDF
    </Button>
  </div>
</div>
```

### Classes CSS utilisées
- `text-4xl font-bold` : Grand titre principal
- `text-lg text-gray-600` : Description en gris moyen
- `gap-6 mb-6` : Espacement entre les boutons

## 📚 Structure des Exercices

### Conteneur Principal
```tsx
<div className="exercises-content">
  {/* Exercice 1 */}
  <Card className="mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
    {/* Contenu de l'exercice */}
  </Card>

  {/* Exercice 2 */}
  {/* ... */}
</div>
```

### Carte d'Exercice
```tsx
<Card className="mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
  <div className="p-6">
    {/* Contenu de l'exercice */}
  </div>
</Card>
```

### Classes CSS pour les cartes
- `mb-8` : Marge en bas
- `bg-white` : Fond blanc
- `rounded-xl` : Coins très arrondis
- `shadow-md hover:shadow-xl` : Ombres avec effet au survol
- `border-2 border-gray-100 hover:border-blue-200` : Bordure grise qui devient bleue au survol
- `p-6` : Padding interne

## ✏️ Contenu des Exercices

### Titre d'Exercice
```tsx
<h3 className="text-xl font-bold mb-4 text-gray-800">
  Exercice X : Titre de l'exercice (source)
</h3>
```

### Texte d'introduction
```tsx
<div className="mb-6">
  <LatexRenderer latex={"\\text{Soient } n \\geq 1 \\text{ et } x_0, x_1, \\ldots, x_n \\text{ des réels deux à deux distincts.}"} />
</div>
```

### Énoncé de l'exercice
```tsx
<LatexRenderer latex={"\\text{On note } \\mathcal{C} \\text{ la base canonique de } \\mathbb{R}_n[X]."} />
<br />
<LatexRenderer latex={"\\text{Pour } i \\in \\llbracket 0,n \\rrbracket, \\text{ on note}"} />
<div className="text-center my-4">
  <LatexRenderer latex={"L_i = \\prod_{k=0, k \\neq i}^{n} \\frac{X - x_k}{x_i - x_k}."} block />
</div>
```

### Liste des questions
```tsx
<ol className="list-decimal list-inside space-y-2 pl-4 mt-4">
  <li>
    <LatexRenderer latex={"\\text{Déterminer } L_i(x_j) \\text{ pour } (i,j) \\in \\llbracket 0,n \\rrbracket^2."} />
  </li>
  <li>
    <LatexRenderer latex={"\\text{Expliciter la matrice de passage de } \\mathcal{B} \\text{ à } \\mathcal{C}."} />
  </li>
</ol>
```

## 🎯 Boutons d'Affichage des Corrections

### Structure HTML
```tsx
<Button
  data-correction-button
  onClick={() => toggleCorrection('X')}
  variant={visibleCorrections['X'] ? "secondary" : "default"}
  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium"
>
  {visibleCorrections['X'] ? "Masquer la correction" : "Afficher la correction"}
</Button>
```

### Attributs importants
- `data-correction-button` : Pour identifier les boutons dans la génération PDF
- `w-full` : Bouton pleine largeur
- `border-gray-300 text-gray-700 hover:bg-gray-50` : Style outline cohérent

## ✅ Sections de Correction

### Structure HTML
```tsx
{visibleCorrections['X'] && (
  <div data-correction className="mt-6 border-l-4 border-gray-400 p-4 rounded-r-lg">
    <h4 className="font-semibold text-gray-800 mb-2">Corrigé détaillé</h4>
    <div className="space-y-4">
      {/* Contenu de la correction */}
    </div>
  </div>
)}
```

### Attributs importants
- `data-correction` : Pour identifier les sections dans la génération PDF
- `border-l-4 border-gray-400` : Bordure gauche grise épaisse
- `p-4 rounded-r-lg` : Padding et coins arrondis à droite

## 🔧 Contenu des Corrections

### Titre de section
```tsx
<div className="text-gray-700 font-semibold">
  <LatexRenderer latex={"\\text{1) Calcul de } L_i(x_j)"} />
</div>
```

### Formules mathématiques
```tsx
<div className="text-center my-4">
  <LatexRenderer latex={"L_i(x_i) = \\prod_{k=0, k \\neq i}^{n} \\frac{x_i - x_k}{x_i - x_k} = \\prod_{k=0, k \\neq i}^{n} 1 = 1."} block />
</div>
```

### Texte explicatif
```tsx
<LatexRenderer latex={"\\text{Soit } (i,j) \\in (\\llbracket 0,n \\rrbracket)^2."} />
```

## 📄 Fonctionnalité PDF

### Configuration de génération
```tsx
const downloadExercisesPDF = async () => {
  // Clone du contenu
  const exercisesContent = document.querySelector('.exercises-content');
  const clone = exercisesContent.cloneNode(true) as HTMLElement;

  // Suppression des boutons
  const correctionButtons = clone.querySelectorAll('[data-correction-button]');
  correctionButtons.forEach(button => button.remove());

  // Affichage des corrections
  const corrections = clone.querySelectorAll('[data-correction]');
  corrections.forEach(correction => {
    (correction as HTMLElement).style.display = 'block';
  });

  // Configuration html2canvas
  const canvas = await html2canvas(clone, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    width: 800,
    height: clone.offsetHeight
  });

  // Génération PDF avec jsPDF
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Calcul des dimensions
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  const imgX = (pdfWidth - imgWidth * ratio) / 2;
  const imgY = 30;

  // Titre du PDF
  pdf.setFontSize(20);
  pdf.text('Chapitre X : Titre du chapitre - Exercices & Corrigés', pdfWidth / 2, 20, { align: 'center' });

  // Ajout de l'image
  pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

  // Filigrane
  pdf.saveGraphicsState();
  pdf.setTextColor(150, 150, 150);
  pdf.setFontSize(30);
  const centerX = pdfWidth / 2;
  const centerY = pdfHeight / 2;
  pdf.text('PREPA RATIONNELLE', centerX, centerY, {
    align: 'center',
    angle: 45
  });
  pdf.restoreGraphicsState();

  // Téléchargement
  pdf.save('ChapitreX_Titre_Exercices_Corriges.pdf');
};
```

## 🎨 Palette de Couleurs Utilisée

### Couleurs principales
- **Fond principal** : `bg-white` (blanc)
- **Texte principal** : `text-gray-800` (gris foncé)
- **Texte secondaire** : `text-gray-600` (gris moyen)
- **Texte tertiaire** : `text-gray-700` (gris légèrement plus clair)
- **Bordures** : `border-gray-300`, `border-gray-400`
- **États hover** : `hover:bg-gray-50` (gris très pâle)

### Couleurs spécifiques
- **Navigation** : `text-blue-600`, `hover:text-blue-700`
- **Chapitre actif** : `text-orange-600`
- **Cartes au survol** : `hover:border-blue-200`

## 📱 Classes CSS Réutilisables

### Conteneurs
- `container mx-auto py-8 px-4` : Conteneur principal
- `text-center mb-8` : Centrage avec marge
- `space-y-4` : Espacement vertical
- `space-y-2` : Espacement réduit

### Boutons
- `px-4 py-2 rounded-md font-medium` : Style de base des boutons
- `border-gray-300 text-gray-700 hover:bg-gray-50` : Style outline
- `w-full` : Pleine largeur

### Cartes et sections
- `p-6` : Padding standard interne
- `mt-6` : Marge haute
- `mb-4` : Marge basse
- `rounded-xl` : Coins très arrondis
- `rounded-r-lg` : Coins arrondis à droite uniquement

### Formules mathématiques
- `text-center my-4` : Centrage avec marges verticales
- `block` prop sur LatexRenderer : Mode display pour les formules

## 🔄 État et Gestion des Corrections

### State management
```tsx
const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

const toggleCorrection = (exerciseId: string) => {
  setVisibleCorrections(prev => ({
    ...prev,
    [exerciseId]: !prev[exerciseId]
  }));
};
```

### Utilisation dans les boutons
```tsx
variant={visibleCorrections['X'] ? "secondary" : "default"}
{visibleCorrections['X'] ? "Masquer la correction" : "Afficher la correction"}
```

## 📦 Dépendances Requises

### Imports nécessaires
```tsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen, Eye, EyeOff, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
```

### Icônes utilisées
- `Home` : Pour le lien Accueil
- `ChevronRight` : Pour les séparateurs dans le fil d'Ariane
- `BookOpen` : Pour le bouton Cours
- `Download` : Pour le bouton PDF
- `Eye, EyeOff` : Optionnel pour les corrections (non utilisé actuellement)

## 🚀 Guide de Reproduction

### Étapes pour créer un nouveau chapitre :

1. **Copier la structure de base** du fichier Chapitre1
2. **Modifier les chemins** dans le fil d'Ariane
3. **Changer les titres** et descriptions
4. **Adapter le contenu** des exercices et corrections
5. **Mettre à jour les chemins** des boutons (Cours, etc.)
6. **Vérifier les IDs** des exercices dans `toggleCorrection`
7. **Tester la génération PDF**

### Points d'attention :
- Toujours utiliser `data-correction-button` et `data-correction` pour le PDF
- Maintenir la classe `exercises-content` pour le conteneur principal
- Utiliser `block` prop sur les LatexRenderer pour les formules importantes
- Respecter la hiérarchie des couleurs (gris-800, gris-700, gris-600)
- Conserver la structure des cartes avec les effets de survol

Cette documentation permet de reproduire exactement le même design pour tous les chapitres d'exercices de maths.
