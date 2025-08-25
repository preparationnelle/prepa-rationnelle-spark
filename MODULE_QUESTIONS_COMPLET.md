# Module 5 : Questions et Interrogatifs - Structure Complète

## Vue d'ensemble

Le module Questions et Interrogatifs a été entièrement créé pour offrir une approche pédagogique complète de la formulation et de la compréhension des questions en espagnol, un aspect essentiel pour communiquer efficacement dès les premiers niveaux. Ce module couvre tous les aspects des questions, des bases simples aux structures complexes, avec une attention particulière aux différences avec le français.

## Architecture Technique

### 1. **Structure des Données** (`src/data/spanishQuestionsData.ts`)

#### Interfaces TypeScript
```typescript
interface QuestionSection {
  id: string;
  title: string;
  description: string;
  level: string;
  content: {
    rules: string[];
    examples: Array<{
      spanish: string;
      french: string;
      explanation: string;
    }>;
    irregularities?: Array<{
      pattern: string;
      examples: string[];
      notes: string;
    }>;
    tips: string[];
  };
}
```

#### Données Structurées
- **12 sections théoriques** couvrant tous les points essentiels
- **4 exercices pratiques** de différents types
- **3 tableaux de référence** pour la mémorisation

### 2. **Composants Réutilisables**

#### `QuestionSection.tsx`
- Sections expansibles/rétractables pour la théorie
- Organisation par couleurs thématiques selon le type de contenu
- Interface interactive avec icônes contextuelles

#### `ConjugationTable.tsx` (réutilisé)
- Affiche les tableaux de référence de manière claire et sobre
- Design responsive avec alternance de couleurs

## Contenu Pédagogique

### **Section 1 : Poser une Question**
- **Niveau** : Débutant
- **Règles** : Ajouter ¿ au début et ? à la fin, inversion optionnelle, intonation montante
- **Exemples** : Tú comes → ¿Comes tú?, ¿Cómo estás?, ¿Qué hora es?
- **Conseils** : Pratiquer l'intonation, pas d'inversion obligatoire comme en français

### **Section 2 : Les Mots de Questionnement**
- **Niveau** : Débutant
- **Règles** : Placés au début, accents obligatoires, remplacent l'information recherchée
- **Exemples** : ¿Qué?, ¿Quién?, ¿Cómo?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, ¿Cuánto?
- **Organisation** : Avec prépositions (¿De dónde?, ¿Con quién?, ¿Para qué?)

### **Section 3 : Retrouver la Question**
- **Niveau** : Intermédiaire
- **Règles** : Identifier l'élément manquant, utiliser le bon mot interrogatif
- **Exemples** : Voy al cine → ¿Dónde vas?, Llego a las tres → ¿Cuándo llegas?
- **Conseils** : Analyser le type d'information (lieu, temps, personne)

### **Section 4 : Dialogue: Demander un Renseignement**
- **Niveau** : Intermédiaire
- **Règles** : Questions fermées (oui/non) vs ouvertes, adapter la réponse
- **Exemples** : ¿Vas al supermercado?, ¿Dónde vas?, ¿Cómo llego a la estación?
- **Conseils** : Utiliser pour scénarios réels, réponses doivent matcher le mot interrogatif

### **Section 5 : Structures Interrogatives avec Verbes et Prépositions**
- **Niveau** : Intermédiaire
- **Règles** : Verbes influencent la préposition, inversion pour le formel
- **Exemples** : ¿En qué piensas?, ¿Adónde va usted?, ¿Para qué sirve esto?
- **Conseils** : Intégrer prépositions tôt, attention aux prépositions obligatoires

### **Section 6 : Questions Ouvertes vs. Fermées**
- **Niveau** : Intermédiaire
- **Règles** : Ouvertes avec mot interrogatif, fermées pour oui/non
- **Exemples** : ¿Quieres café? (fermée), ¿Qué quieres beber? (ouverte)
- **Conseils** : Ouvertes pour conversations, fermées pour confirmations

### **Section 7 : Interrogatifs dans des Dialogues Quotidiens**
- **Niveau** : Intermédiaire
- **Règles** : Situations personnelles et d'apprentissage, adapter le ton
- **Exemples** : ¿Cuántos años tienes?, ¿Cómo se dice...?, ¿Dónde está el baño?
- **Conseils** : Pratiquer des rôle-plays, ton poli avec usted

### **Section 8 : Erreurs Courantes dans la Formulation des Questions**
- **Niveau** : Intermédiaire
- **Règles** : Vérifier signes ¿?, accents, éviter inversion forcée
- **Exemples** : Que haces? → ¿Qué haces?, ¿Dónde vienes? → ¿De dónde vienes?
- **Conseils** : Vérifier systématiquement, pas de "est-ce que" en espagnol

### **Section 9 : Questions sur le Temps et la Fréquence**
- **Niveau** : Intermédiaire
- **Règles** : Cuándo pour moment précis, cuánto tiempo pour durée
- **Exemples** : ¿Cuándo empieza la película?, ¿Cuánto tiempo dura?
- **Conseils** : Distinguer moment précis et durée, utiliser desde pour le début

### **Section 10 : Questions sur la Quantité et la Mesure**
- **Niveau** : Intermédiaire
- **Règles** : Cuánto indénombrable, cuántos/cuántas dénombrables
- **Exemples** : ¿Cuánto cuesta?, ¿Cuántos estudiantes hay?, ¿Cuánto mide?
- **Conseils** : Accord en genre et nombre, cuánto reste invariable

### **Section 11 : Questions sur la Raison et le But**
- **Niveau** : Avancé
- **Règles** : Por qué pour cause, para qué pour but, registres formels
- **Exemples** : ¿Por qué no viniste?, ¿Para qué sirve?, ¿A causa de qué?
- **Conseils** : Distinguer cause et but, registres soutenus

### **Section 12 : Questions Hypothétiques et Conditionnelles**
- **Niveau** : Avancé
- **Règles** : Subjonctif pour hypothèses, si + condition, concordance des temps
- **Exemples** : ¿Qué harías si ganaras la lotería?, ¿Cómo sería el mundo sin internet?
- **Conseils** : Utiliser subjonctif, attention à la concordance, situations imaginaires

## Tableaux de Référence

### **1. Mots Interrogatifs - Usages Principaux**
- Mots : ¿Qué?, ¿Quién?, ¿Cómo?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, ¿Cuánto?
- Sens et exemples concrets avec traductions françaises
- Structure claire pour la mémorisation

### **2. Types de Questions - Ouvertes vs Fermées**
- Types : Ouverte, Fermée, Alternative, Rhétorique
- Caractéristiques et exemples pour chaque type
- Types de réponses attendues

### **3. Erreurs Courantes à Éviter**
- Erreurs : Oubli des signes ¿?, prépositions manquantes, accents manquants
- Corrections avec explications
- Conseils pratiques pour éviter ces erreurs

## Exercices Pratiques

### **Exercice 1 : Former des questions**
- **Type** : Formation
- **Niveau** : Intermédiaire
- **Objectif** : Transformer des affirmations en questions appropriées
- **Contexte** : Identification de l'élément à interroger et utilisation du bon mot interrogatif

### **Exercice 2 : Répondre à des interrogatifs**
- **Type** : Réponse
- **Niveau** : Intermédiaire
- **Objectif** : Fournir des réponses appropriées aux questions
- **Contexte** : Structure de réponse selon le type de question

### **Exercice 3 : Créer un dialogue**
- **Type** : Dialogue
- **Niveau** : Avancé
- **Objectif** : Créer un dialogue complet demandant des renseignements
- **Contexte** : 5 échanges avec salutation, demande, directions, confirmation et remerciements

### **Exercice 4 : Identifier et corriger des erreurs**
- **Type** : Correction
- **Niveau** : Avancé
- **Objectif** : Identifier et corriger les erreurs courantes
- **Contexte** : Signes d'interrogation, accents, prépositions

## Design et UX

### **Principes de Design**
- **Clarté** : Interface sobre et lisible
- **Hiérarchie** : Organisation logique du contenu
- **Interactivité** : Sections expansibles, exercices interactifs
- **Responsive** : Adaptation à tous les écrans

### **Palette de Couleurs Thématiques**
- **Poser/Question** : Bleu (fondamentaux)
- **Mots/Questionnement** : Vert (bases)
- **Retrouver/Question** : Violet (logique)
- **Dialogue/Renseignements** : Orange (communication)
- **Structures/Verbes** : Indigo (complexité)
- **Ouvertes/Fermées** : Jaune (distinction)
- **Interrogatifs/Dialogues** : Rose (quotidien)
- **Erreurs/Courantes** : Rouge (attention)
- **Temps/Fréquence** : Teal (chronologie)
- **Quantité/Mesure** : Cyan (numérique)
- **Raison/But** : Amber (logique)
- **Hypothétiques/Conditionnelles** : Emerald (imagination)

### **Navigation**
- Fil d'Ariane complet
- Sections organisées logiquement
- Boutons de retour et navigation
- Liens vers les autres modules

## Fonctionnalités Techniques

### **État Local**
- Gestion des sections expansibles
- Affichage/masquage des indices et corrections
- Navigation entre exercices

### **Composants React**
- Hooks personnalisés pour la gestion d'état
- Composants réutilisables
- Props typées avec TypeScript

### **Performance**
- Lazy loading des composants
- Optimisation des re-renders
- Gestion efficace de l'état

## Utilisation Pédagogique

### **Pour les Étudiants**
1. **Commencez** par les mots interrogatifs de base
2. **Pratiquez** l'intonation montante
3. **Mémorisez** les signes ¿? obligatoires
4. **Pratiquez** avec des dialogues réels

### **Pour les Enseignants**
1. **Utilisez** les sections comme support de cours
2. **Projetez** les tableaux pour la classe
3. **Assignez** des exercices spécifiques
4. **Suivez** la progression des étudiants

### **Progression Recommandée**
1. **Bases** : Mots interrogatifs et signes ¿?
2. **Intermédiaire** : Types de questions et dialogues
3. **Avancé** : Questions avec prépositions et verbes
4. **Expert** : Questions hypothétiques et conditionnelles

## Extensions Futures

### **Modules à Ajouter**
- [ ] Questions indirectes et discours rapporté
- [ ] Questions rhétoriques et stylistiques
- [ ] Questions dans la littérature espagnole
- [ ] Traduction avancée de questions complexes

### **Fonctionnalités Techniques**
- [ ] Système de suivi de progression
- [ ] Quiz d'évaluation avec questions
- [ ] Mode hors ligne
- [ ] Intégration avec l'authentification

## Conclusion

Ce module Questions et Interrogatifs offre une approche complète et structurée de la formulation et de la compréhension des questions en espagnol, avec :

- **Contenu pédagogique** riche et progressif
- **Interface utilisateur** claire et intuitive
- **Architecture technique** robuste et extensible
- **Design** sobre et professionnel

La structure modulaire permet une évolution continue et l'ajout de nouveaux contenus selon les besoins pédagogiques, formant une base solide pour maîtriser les questions et interrogatifs, éléments essentiels pour la communication efficace en espagnol dès les premiers niveaux d'apprentissage. 