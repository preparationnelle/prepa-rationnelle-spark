# Design System - Prépa Rationnelle

## 📋 Description

Cette page documente l'ensemble de la charte graphique et des composants utilisés sur le site Prépa Rationnelle. Elle sert de référence unique pour maintenir la cohérence visuelle à travers toute l'application.

## 🌐 Accès

La page Design System est accessible à l'URL : **`/design-system`**

En développement local : `http://localhost:5173/design-system`

## 📚 Contenu de la Documentation

### 1. **Palette de Couleurs**
- Couleurs principales (Orange primary, variantes)
- Couleurs neutres (Blanc, Noir, Gris)
- Couleurs d'accent
- Codes hexadécimaux et classes Tailwind
- Exemples d'utilisation

### 2. **Typographie**
- Hiérarchie des titres (H1 à H6)
- Styles de corps de texte (base, small, large)
- Poids de police (normal, medium, semibold, bold)
- Texte avec gradient
- Codes d'implémentation

### 3. **Boutons**
- Bouton principal (Primary) avec gradient orange
- Boutons avec icônes
- Boutons outline
- Boutons ghost
- États des boutons (normal, désactivé, chargement)
- Variantes de tailles (sm, md, lg)

### 4. **Cards**
- Card Formation Standard
- Card Générateur IA
- Card Stats
- Effets hover (scale, translate, shadow)
- Exemples de code

### 5. **Icônes**
- Icônes dans des cercles
- Icônes avec gradient
- Tailles d'icônes (h-3 à h-10)
- Bibliothèque utilisée : Lucide React

### 6. **Gradients**
- Gradients de fond
- Gradient text
- Directions et combinaisons
- Exemples d'utilisation

### 7. **Espacements**
- Padding (p-2, p-4, p-6, p-8)
- Gap entre éléments
- Marges standardisées

### 8. **Animations**
- Hover effects (scale, translate, shadow)
- Animations de chargement (spinner, pulse, bounce)
- Animations personnalisées (float)
- Transitions et durées

### 9. **Ombres (Shadows)**
- Shadow SM, MD, LG, XL, 2XL
- Ombres colorées (orange pour CTA)
- Cas d'utilisation

### 10. **Exemples de Combinaisons Complètes**
- Hero Call-to-Action
- Section Features
- Composants complets combinant plusieurs éléments

## 🎨 Couleurs Principales

```css
Primary Orange: #FF6A00
Orange 500: #F97316
Orange 600: #EA580C
Orange 700: #C2410C

Blanc: #FFFFFF
Noir: #000000
Gray 50: #F9FAFB
```

## 🔧 Technologies Utilisées

- **React** + **TypeScript**
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **ShadCN UI** pour les composants de base

## 📝 Utilisation

### Copie de Code
Chaque section contient des blocs de code copiables. Cliquez sur l'icône de copie en haut à droite de chaque bloc pour copier le code dans votre presse-papiers.

### Navigation
Une barre de navigation sticky en haut de la page permet de naviguer rapidement entre les différentes sections.

### Exemples Interactifs
Tous les composants sont interactifs et montrent les effets hover en temps réel.

## 🎯 Objectifs

1. **Cohérence** : Assurer une identité visuelle uniforme sur tout le site
2. **Documentation** : Référence unique pour tous les développeurs
3. **Maintenance** : Faciliter les mises à jour et évolutions du design
4. **Onboarding** : Accélérer l'intégration de nouveaux développeurs
5. **Communication** : Faciliter la collaboration entre designers et développeurs

## 🚀 Ajouts Futurs Possibles

- [ ] Composants de formulaires
- [ ] Patterns de navigation
- [ ] États de chargement et erreurs
- [ ] Composants de feedback (toasts, alerts)
- [ ] Composants de données (tables, listes)
- [ ] Responsive breakpoints détaillés
- [ ] Dark mode variants
- [ ] Accessibilité (WCAG guidelines)

## 📱 Responsive Design

Le design system est entièrement responsive et s'adapte à tous les formats :
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

## ✨ Conseils d'Utilisation

1. **Toujours utiliser les classes Tailwind** plutôt que du CSS custom
2. **Respecter la hiérarchie** des couleurs et typographie
3. **Utiliser les gradients** avec parcimonie pour les éléments importants
4. **Préférer les animations subtiles** (duration-300, duration-500)
5. **Maintenir une cohérence** dans les espacements et les ombres

## 🔄 Mise à Jour

Pour mettre à jour le design system :
1. Modifier `/src/pages/DesignSystemPage.tsx`
2. Mettre à jour ce document si nécessaire
3. Communiquer les changements à l'équipe

## 📞 Contact

Pour toute question ou suggestion concernant le design system, contactez l'équipe de développement.

---

**Version** : 1.0  
**Dernière mise à jour** : Octobre 2025  
**Créé par** : Équipe Prépa Rationnelle

