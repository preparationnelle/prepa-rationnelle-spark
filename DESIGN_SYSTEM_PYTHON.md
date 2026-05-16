# Charte « Carnet Python »

Source de vérité du design de **toute la formation Python** (modules classiques + Oteria Python).
Objectif : un seul langage visuel, identique à la landing page et au design type du site.

> Règle d'or : **aucune couleur en dehors des tokens carnet/pr ci-dessous. Jamais d'accordéon, jamais de menu déroulant, jamais de contenu replié.** L'élève scrolle ; tout est visible.

---

## 1. Palette autorisée (et elle seule)

On n'utilise **que** les tokens définis dans `tailwind.config.ts`. Interdiction stricte des
couleurs Tailwind brutes (`slate-*`, `gray-*`, `blue-*`, `emerald-*`, `green-*`, `sky-*`,
`indigo-*`, `purple-*`, hex/rgb en dur).

| Rôle | Token | Valeur |
|---|---|---|
| Fond papier | `carnet-paper` | `#FBF6EA` (ligné) |
| Surface carte | `carnet-paper-2` | `#FFFEF8` |
| Encre titre | `carnet-ink` | `#1F1714` |
| Encre corps | `carnet-ink-soft` | `#4A3D30` |
| Encre méta | `carnet-ink-mute` | `#8A7864` |
| Accent / annotation | `carnet-red` | `#C1443A` |
| Accent foncé (hover) | `carnet-red-deep` | `#9E342B` |
| Filet pointillé | `border-[rgba(78,55,30,0.18)]` | — |
| Surligneur | `.carnet-hl` | jaune translucide |

Code : fond `carnet-ink`, texte `text-carnet-paper` / `text-carnet-paper/80`, mono.
**Pas de vert fluo** (`emerald-400` proscrit) — le code se lit en crème sur encre.

Sémantique correct/incorrect (QCM) : ✓ = `carnet-red` + `.carnet-hl` ; ✗ = `carnet-ink-mute`
barré. On ne réintroduit pas de vert/rouge Tailwind.

## 2. Typographie

| Usage | Police | Classe |
|---|---|---|
| Titres, italiques d'emphase | Lora | `font-lora` |
| Corps, labels, UI, eyebrows | Instrument Sans | `font-instrument` |
| Annotations manuscrites, chiffres | Caveat | `carnet-hand` |
| Code | JetBrains Mono | `font-mono` |

Échelle : H1 `text-[40px]→[64px] font-lora` · H2 section `text-[30px]→[34px] font-lora` ·
corps `text-[15px] leading-[1.7] font-instrument` · eyebrow `carnet-eyebrow` (11–12px,
uppercase, `tracking-[0.12em]`, `carnet-red`).

## 3. Format pédagogique standard (remplace les accordéons)

Une page = un long déroulé scrollable. Aucun contenu caché.

**Page Cours :**
1. `PythonModuleLayout` (fond papier, fil d'Ariane, nav modules en bas).
2. `CarnetHero` : eyebrow `NN · Module · Titre`, titre Lora + accent rouge, tagline, note manuscrite.
3. Encart objectifs (`carnet-card` + `carnet-eyebrow` + `carnet-divider`).
4. Suite de `CarnetSection` numérotées (`01`, `02`…), chacune contenant : prose →
   `CarnetCallout` (`definition` / `exemple` / `propriete` / `piege`) → `CarnetCodeBlock` →
   tableau carnet → `ComparisonCard/Grid` si pertinent.
5. Quiz pratique inline (questions toujours visibles, correction affichée après réponse).
6. `ModuleNavigationCards`.

**Page Exercices :** pour chaque exercice, dans l'ordre, **toujours visibles** :
`PythonExerciseDetailHeader` → `PythonStatementCard` (énoncé) → **`PythonCorrectionPanel`
(corrigé) directement en dessous, sans bouton, sans repli**. Séparation visuelle nette
(filet pointillé + label `CORRIGÉ` en `carnet-red`). Puis exercice suivant. Navigation
précédent/suivant + retour grille en pied.

**Flashcards :** le retournement carte recto/verso reste (c'est l'essence d'une flashcard),
mais restylé carnet ; pas d'autre contenu masqué.

## 4. Composants canoniques

- Layout : `PythonModuleLayout` (+ `PythonCarnetChapterLayout` pour Oteria Python).
- Contenu cours : `src/components/carnet/*` (`CarnetHero`, `CarnetSection`, `CarnetCallout`,
  `CarnetCodeBlock`, `ComparisonCard/Grid`).
- Exercices : `src/components/formation/python/PythonExercisePage.tsx`
  (`PythonExerciseHero`, `PythonExerciseDetailHeader`, `PythonStatementCard`,
  `PythonCorrectionPanel`, `PythonCodeBlock`, `PythonExerciseGrid`, `PythonSectionHeading`).
  → `PythonCorrectionToggle` **supprimé**.
- QCM : `PythonQCMPanel` (carnet, options toujours visibles).
- Référence : cartes commande carnet, recherche live, **pas** de repli par catégorie.

Composants proscrits dans le périmètre Python : `@/components/ui/accordion`,
`@/components/ui/collapsible`, `AcademicBlocks` (slate) pour les pages Oteria Python.

## 5. Motifs réutilisables

- Carte : `carnet-card p-6 sm:p-8` (+ `carnet-tilt-l/r` avec parcimonie, 1 sur 4 max).
- Filet : `<hr className="carnet-divider" />` ou `border-dashed border-[rgba(78,55,30,0.18)]`.
- Bouton primaire : `bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full font-instrument font-semibold`.
- Bouton secondaire : `bg-transparent border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red rounded-full`.
- Eyebrow : `<span className="carnet-eyebrow">…</span>`.
- Annotation : `<span className="carnet-hand text-carnet-red" style={{transform:'rotate(-3deg)'}}>…</span>`.
- Animations : `framer-motion` discret (`opacity/y`, `duration 0.35–0.6`). Pas d'`animate-accordion`.

## 6. Checklist de conformité (à passer sur chaque fichier)

- [ ] 0 occurrence de `slate-/gray-[0-9]/blue-/emerald-/green-[0-9]/sky-/indigo-/purple-` et de hex/rgb en dur hors `rgba(78,55,30,*)` / `rgba(193,68,58,*)`.
- [ ] 0 `Accordion`, `Collapsible`, `<details>`, état `show*`/`isOpen` masquant du contenu pédagogique.
- [ ] Corrigés d'exercices rendus en dur sous chaque énoncé.
- [ ] Polices = Lora / Instrument / Caveat / JetBrains uniquement.
- [ ] Layout = `PythonModuleLayout` (ou `PythonCarnetChapterLayout` pour Oteria).
- [ ] `tsc --noEmit` vert.
