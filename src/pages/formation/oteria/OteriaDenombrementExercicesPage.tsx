import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaDenombrementExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Codes PIN et permutations",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Un téléphone utilise un <strong>code PIN à 4 chiffres</strong>.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien de codes si <em>tous les chiffres sont distincts</em> (choix dans {'{0, ..., 9}'}) ?</li>
            <li>Combien de codes si <em>la répétition est autorisée</em> ?</li>
            <li>Parmi ces codes, combien <em>commencent par un chiffre pair</em> (répétition autorisée) ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Chiffres distincts</p>
            <p className="mb-2">Chiffres distincts et ordre sur 4 positions :</p>
            <LatexRenderer latex="A_{10}^4 = 10 \times 9 \times 8 \times 7 = \boxed{5040}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Répétition autorisée</p>
            <p className="mb-2">Répétition autorisée sur 4 positions :</p>
            <LatexRenderer latex="10^4 = \boxed{10\,000}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Commence par un chiffre pair</p>
            <p className="mb-2">Premier chiffre pair : 5 choix (0, 2, 4, 6, 8), puis 3 positions libres avec répétition : 10³</p>
            <LatexRenderer latex="5 \times 10^3 = \boxed{5000}" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Mots de passe (lettres + chiffres)",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Un mot de passe est formé de <strong>3 lettres majuscules distinctes</strong> suivies de <strong>2 chiffres distincts</strong>.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien de mots de passe différents (ordre des 3 lettres et des 2 chiffres pris en compte) ?</li>
            <li>Si <em>l'ordre entre les 3 lettres n'a pas d'importance</em> (on ne regarde que l'ensemble de lettres utilisées), combien de possibilités ?</li>
            <li>Quelle proportion (cas 2 / cas 1) ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Avec ordre</p>
            <p className="mb-2">Lettres : <LatexRenderer latex="A_{26}^3 = 26 \cdot 25 \cdot 24 = 15\,600" inline /></p>
            <p className="mb-2">Chiffres : <LatexRenderer latex="A_{10}^2 = 10 \cdot 9 = 90" inline /></p>
            <LatexRenderer latex="\text{Total} = 15\,600 \times 90 = \boxed{1\,404\,000}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Lettres sans ordre</p>
            <p className="mb-2">Lettres sans ordre : <LatexRenderer latex="\binom{26}{3} = \frac{26 \cdot 25 \cdot 24}{3!} = 2\,600" inline /></p>
            <p className="mb-2">Chiffres : <LatexRenderer latex="A_{10}^2 = 90" inline /></p>
            <LatexRenderer latex="\text{Total} = 2\,600 \times 90 = \boxed{234\,000}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Proportion</p>
            <LatexRenderer latex="\frac{234\,000}{1\,404\,000} = \frac{1}{6} \approx \boxed{16{,}7\%}" block={true} />
            <p className="text-sm mt-2 text-slate-600">Normal : on a divisé par 3! en "oubliant" l'ordre des 3 lettres.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Clés de chiffrement",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Une clé est composée de <strong>5 symboles</strong> choisis parmi <strong>12 caractères</strong> possibles.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Si l'<strong>ordre compte</strong>, combien de clés ?</li>
            <li>Si l'<strong>ordre ne compte pas</strong>, combien de clés uniques ?</li>
            <li>Quel est le facteur entre les deux situations ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Avec ordre</p>
            <LatexRenderer latex="A_{12}^5 = 12 \cdot 11 \cdot 10 \cdot 9 \cdot 8 = \boxed{95\,040}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Sans ordre</p>
            <LatexRenderer latex="\binom{12}{5} = \frac{12!}{5! \cdot 7!} = \boxed{792}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Facteur</p>
            <LatexRenderer latex="\frac{95\,040}{792} = \boxed{120} = 5!" block={true} />
            <p className="text-sm mt-2 text-slate-600">Généralement, <LatexRenderer latex="A_n^p = \binom{n}{p} \cdot p!" inline /></p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Accès multi-facteurs",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>On choisit <strong>2 dispositifs</strong> parmi <strong>5</strong> (smartphone, clé USB, QR code, SMS, email), puis on les utilise dans un <strong>ordre précis</strong>.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Avec ordre, combien de façons ?</li>
            <li>Sans ordre, combien ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Avec ordre</p>
            <LatexRenderer latex="A_5^2 = 5 \cdot 4 = \boxed{20}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Sans ordre</p>
            <LatexRenderer latex="\binom{5}{2} = \frac{5 \cdot 4}{2} = \boxed{10}" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Génération de mots de passe contraints",
      difficulty: "Expert",
      statement: (
        <div className="space-y-4">
          <p>Un administrateur crée un mot de passe de <strong>8 caractères</strong> contenant exactement <strong>3 majuscules distinctes</strong>, <strong>3 minuscules distinctes</strong>, <strong>2 chiffres distincts</strong>.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>En supposant que l'<strong>ordre importe</strong> (toutes les permutations des positions comptent), combien de mots de passe ?</li>
            <li>Quelle est la <strong>probabilité</strong> de le deviner du premier coup (choix uniforme) ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Nombre de mots de passe</p>
            <p className="mb-2"><strong>Choix des caractères (sans positions) :</strong></p>
            <LatexRenderer latex="A_{26}^3 \times A_{26}^3 \times A_{10}^2 = (26 \cdot 25 \cdot 24) \times (26 \cdot 25 \cdot 24) \times (10 \cdot 9)" block={true} />
            <LatexRenderer latex="= 15\,600^2 \times 90 = 243\,360\,000 \times 90 = 21\,902\,400\,000" block={true} />

            <p className="mt-3 mb-2"><strong>Placement des types (3 majuscules, 3 minuscules, 2 chiffres) parmi 8 positions :</strong></p>
            <LatexRenderer latex="\frac{8!}{3! \cdot 3! \cdot 2!} = \frac{40\,320}{6 \cdot 6 \cdot 2} = \boxed{560}" block={true} />

            <p className="mt-3 mb-2"><strong>Total :</strong></p>
            <LatexRenderer latex="N = 21\,902\,400\,000 \times 560 = \boxed{12\,265\,344\,000\,000}" block={true} />
            <p className="text-sm mt-2 text-carnet-red">Plus de 12 mille milliards de possibilités !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité de deviner du premier coup</p>
            <LatexRenderer latex="\boxed{\frac{1}{12\,265\,344\,000\,000}} \approx 8{,}15 \times 10^{-14}" block={true} />
            <p className="text-sm mt-2 text-slate-600">Une chance sur 12 mille milliards - pratiquement impossible !</p>
          </div>
          <div className="bg-pr-gray-bg border border-carnet-red/30 rounded p-4 mt-4">
            <p className="font-semibold text-carnet-red-deep mb-2">🔐 Remarques pédagogiques</p>
            <ul className="text-sm space-y-1 list-disc ml-5 text-slate-700">
              <li>Quand l'ordre est rendu "invisible", on divise par la factorielle de la taille du groupe concerné (ex. 3! pour 3 lettres).</li>
              <li>Les placements de types se gèrent par un coefficient multinomial (ici 8!/(3!·3!·2!)).</li>
              <li>Préciser <em>avec ou sans répétition</em> évite 90% des erreurs de modèle de comptage.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Calculs de factorielles",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>Calculer les valeurs suivantes :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><LatexRenderer latex="6!" inline /></li>
            <li><LatexRenderer latex="\frac{10!}{8!}" inline /></li>
            <li><LatexRenderer latex="\frac{7!}{4! \times 3!}" inline /></li>
            <li>Combien de permutations différentes peut-on former avec les lettres du mot "OTERIA" ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Calcul de 6!</p>
            <LatexRenderer latex="6! = 1 \times 2 \times 3 \times 4 \times 5 \times 6 = 720" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Calcul de 10!/8!</p>
            <LatexRenderer latex="\frac{10!}{8!} = \frac{10 \times 9 \times 8!}{8!} = 10 \times 9 = 90" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Calcul de 7!/(4! × 3!)</p>
            <LatexRenderer latex="\frac{7!}{4! \times 3!} = \frac{5040}{24 \times 6} = \frac{5040}{144} = 35" block={true} />
            <p className="text-sm text-slate-600 mt-2">
              Note : Cette expression correspond au coefficient binomial <LatexRenderer latex="\binom{7}{3}" inline />
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Permutations du mot "OTERIA"</p>
            <p className="mb-2">Le mot "OTERIA" contient 6 lettres distinctes.</p>
            <LatexRenderer latex="\text{Nombre de permutations} = 6! = 720" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Coefficients binomiaux",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Calculer les coefficients binomiaux suivants :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><LatexRenderer latex="\binom{5}{2}" inline /></li>
            <li><LatexRenderer latex="\binom{10}{3}" inline /></li>
            <li><LatexRenderer latex="\binom{8}{5}" inline /></li>
            <li>Vérifier que <LatexRenderer latex="\binom{8}{5} = \binom{8}{3}" inline /></li>
            <li>Vérifier la formule de Pascal : <LatexRenderer latex="\binom{7}{3} = \binom{6}{2} + \binom{6}{3}" inline /></li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Calcul de C(5,2)</p>
            <LatexRenderer latex="\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5!}{2! \times 3!} = \frac{5 \times 4}{2 \times 1} = 10" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Calcul de C(10,3)</p>
            <LatexRenderer latex="\binom{10}{3} = \frac{10!}{3! \times 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = \frac{720}{6} = 120" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Calcul de C(8,5)</p>
            <LatexRenderer latex="\binom{8}{5} = \frac{8!}{5! \times 3!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Vérification de la symétrie</p>
            <LatexRenderer latex="\binom{8}{3} = \frac{8!}{3! \times 5!} = \frac{8 \times 7 \times 6}{6} = 56 = \binom{8}{5}" block={true} />
            <p className="mt-2 text-slate-600">La propriété de symétrie est vérifiée : <LatexRenderer latex="\binom{n}{p} = \binom{n}{n-p}" inline /></p>
          </div>
          <div>
            <p className="font-semibold mb-2">5. Vérification de la formule de Pascal</p>
            <p className="mb-2">Calculons les deux termes :</p>
            <LatexRenderer latex="\binom{6}{2} = \frac{6 \times 5}{2} = 15" block={true} />
            <LatexRenderer latex="\binom{6}{3} = \frac{6 \times 5 \times 4}{6} = 20" block={true} />
            <LatexRenderer latex="\binom{6}{2} + \binom{6}{3} = 15 + 20 = 35 = \binom{7}{3}" block={true} />
            <p className="mt-2 text-sm text-slate-600">La formule de Pascal est vérifiée !</p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Binôme de Newton",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Développer les expressions suivantes en utilisant le binôme de Newton :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><LatexRenderer latex="(a+b)^3" inline /></li>
            <li><LatexRenderer latex="(x+1)^4" inline /></li>
            <li><LatexRenderer latex="(2x-1)^3" inline /></li>
            <li>Calculer <LatexRenderer latex="\sum_{k=0}^{5} \binom{5}{k}" inline /></li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Développement de (a+b)³</p>
            <LatexRenderer latex="(a+b)^3 = \sum_{k=0}^3 \binom{3}{k} a^k b^{3-k}" block={true} />
            <LatexRenderer latex="= \binom{3}{0}b^3 + \binom{3}{1}ab^2 + \binom{3}{2}a^2b + \binom{3}{3}a^3" block={true} />
            <LatexRenderer latex="= b^3 + 3ab^2 + 3a^2b + a^3" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Développement de (x+1)⁴</p>
            <LatexRenderer latex="(x+1)^4 = \sum_{k=0}^4 \binom{4}{k} x^k \times 1^{4-k}" block={true} />
            <LatexRenderer latex="= 1 + 4x + 6x^2 + 4x^3 + x^4" block={true} />
            <p className="text-sm mt-2 text-slate-600">Coefficients : 1, 4, 6, 4, 1 (ligne 4 du triangle de Pascal)</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Développement de (2x-1)³</p>
            <LatexRenderer latex="(2x-1)^3 = \sum_{k=0}^3 \binom{3}{k} (2x)^k (-1)^{3-k}" block={true} />
            <LatexRenderer latex="= (-1)^3 + 3(2x)(-1)^2 + 3(2x)^2(-1) + (2x)^3" block={true} />
            <LatexRenderer latex="= -1 + 6x - 12x^2 + 8x^3" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Somme des coefficients binomiaux</p>
            <p className="mb-2">D'après la formule du binôme avec a=b=1 :</p>
            <LatexRenderer latex="\sum_{k=0}^{5} \binom{5}{k} = 2^5 = 32" block={true} />
            <p className="text-sm mt-2 text-slate-600">Un ensemble de 5 éléments possède 32 sous-ensembles.</p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Problèmes de dénombrement",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Résoudre les problèmes suivants :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien de mots de passe de 8 caractères peut-on former avec les 26 lettres de l'alphabet (minuscules uniquement) ?</li>
            <li>Dans une classe de 30 élèves, combien de façons différentes peut-on choisir un groupe de 3 délégués ?</li>
            <li>Un jeu de cartes contient 52 cartes. Combien de mains de 5 cartes différentes peut-on former ?</li>
            <li>Combien de sous-ensembles d'un ensemble à 10 éléments contiennent exactement 4 éléments ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Mots de passe de 8 caractères</p>
            <p className="mb-2">Chaque position peut contenir l'une des 26 lettres. Par le principe multiplicatif :</p>
            <LatexRenderer latex="\text{Nombre de mots de passe} = 26^8 = 208\,827\,064\,576" block={true} />
            <p className="text-sm mt-2 text-amber-600">⚠️ Environ 209 milliards de possibilités !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Choix de 3 délégués parmi 30</p>
            <p className="mb-2">L'ordre n'a pas d'importance, on utilise les combinaisons :</p>
            <LatexRenderer latex="\binom{30}{3} = \frac{30!}{3! \times 27!} = \frac{30 \times 29 \times 28}{6} = 4\,060" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Mains de 5 cartes parmi 52</p>
            <LatexRenderer latex="\binom{52}{5} = \frac{52!}{5! \times 47!} = \frac{52 \times 51 \times 50 \times 49 \times 48}{120}" block={true} />
            <LatexRenderer latex="= 2\,598\,960" block={true} />
            <p className="text-sm mt-2 text-slate-600">Plus de 2,5 millions de mains différentes au poker !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Sous-ensembles de 4 éléments parmi 10</p>
            <LatexRenderer latex="\binom{10}{4} = \frac{10!}{4! \times 6!} = \frac{10 \times 9 \times 8 \times 7}{24} = 210" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Paradoxe des anniversaires",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>On considère un groupe de personnes et on suppose qu'il y a 365 jours dans l'année.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Pour un groupe de 2 personnes, quelle est la probabilité qu'elles aient le même anniversaire ?</li>
            <li>Pour un groupe de 2 personnes, quelle est la probabilité qu'elles aient des anniversaires différents ?</li>
            <li>Pour un groupe de 3 personnes, quelle est la probabilité que toutes aient des anniversaires différents ?</li>
            <li>Pour un groupe de 23 personnes, calculer approximativement la probabilité qu'au moins deux personnes aient le même anniversaire.</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Probabilité d'anniversaire commun (2 personnes)</p>
            <p className="mb-2">La première personne choisit un jour quelconque, la deuxième doit avoir le même :</p>
            <LatexRenderer latex="P(\text{même jour}) = \frac{1}{365} \approx 0.00274" block={true} />
            <p className="text-sm mt-2 text-slate-600">Environ 0,27%</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité d'anniversaires différents (2 personnes)</p>
            <LatexRenderer latex="P(\text{jours différents}) = 1 - \frac{1}{365} = \frac{364}{365} \approx 0.99726" block={true} />
            <p className="text-sm mt-2 text-slate-600">Environ 99,73%</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Anniversaires différents (3 personnes)</p>
            <p className="mb-2">La première personne choisit un jour, la deuxième doit éviter ce jour (364/365), la troisième doit éviter les deux (363/365) :</p>
            <LatexRenderer latex="P(\text{tous différents}) = 1 \times \frac{364}{365} \times \frac{363}{365}" block={true} />
            <LatexRenderer latex="= \frac{364 \times 363}{365^2} \approx 0.9918" block={true} />
            <p className="text-sm mt-2 text-slate-600">Environ 99,18%</p>
          </div>
          <div>
            <p className="font-semibold mb-2">4. Paradoxe des anniversaires (23 personnes)</p>
            <p className="mb-2">Probabilité que tous aient des dates différentes :</p>
            <LatexRenderer latex="P(\text{tous différents}) = \frac{365 \times 364 \times 363 \times \cdots \times 343}{365^{23}}" block={true} />
            <LatexRenderer latex="\approx 0.493" block={true} />
            <p className="mb-2 mt-3">Probabilité qu'au moins deux personnes aient le même anniversaire :</p>
            <LatexRenderer latex="P(\text{collision}) = 1 - 0.493 \approx 0.507" block={true} />
            <div className="bg-pr-gray-bg border border-carnet-red/30 rounded p-3 mt-3">
              <p className="font-semibold text-carnet-red-deep">🎉 Le paradoxe !</p>
              <p className="text-sm mt-1 text-slate-700">Avec seulement 23 personnes, il y a plus de 50% de chances que deux personnes aient le même anniversaire !</p>
              <p className="text-sm mt-1 text-slate-500">Application en cryptographie : attaques par collision sur les fonctions de hachage.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Application en cryptographie",
      difficulty: "Expert",
      statement: (
        <div className="space-y-4">
          <p>Une fonction de hachage produit des codes de 64 bits (chaque bit peut valoir 0 ou 1).</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien de codes différents cette fonction peut-elle produire ?</li>
            <li>Si on génère au hasard 2³² codes (environ 4,3 milliards), quelle est approximativement la probabilité d'obtenir au moins une collision (deux codes identiques) ?</li>
            <li>Pourquoi ce résultat est-il important pour la sécurité des fonctions de hachage ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Nombre de codes possibles</p>
            <p className="mb-2">Avec 64 bits, chaque bit ayant 2 valeurs possibles :</p>
            <LatexRenderer latex="\text{Nombre de codes} = 2^{64} \approx 1.84 \times 10^{19}" block={true} />
            <p className="text-sm mt-2 text-slate-600">Environ 18,4 quintillions de codes différents !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité de collision</p>
            <p className="mb-2">C'est une application du paradoxe des anniversaires avec :</p>
            <ul className="list-disc ml-5 mb-2">
              <li>N = 2⁶⁴ "jours" possibles</li>
              <li>k = 2³² codes générés</li>
            </ul>
            <p className="mb-2">Approximation (formule de l'approximation du paradoxe) :</p>
            <LatexRenderer latex="P(\text{collision}) \approx 1 - e^{-\frac{k^2}{2N}} = 1 - e^{-\frac{2^{64}}{2 \times 2^{64}}}" block={true} />
            <LatexRenderer latex="= 1 - e^{-\frac{2^{32}}{2}} \approx 1 - e^{-2^{31}}" block={true} />
            <p className="mt-2 text-slate-600">Cette probabilité est très proche de 1, donc la collision est quasi certaine !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Importance pour la sécurité</p>
            <div className="space-y-2 text-slate-700">
              <p><strong>🔒 Attaque par collision :</strong></p>
              <p className="text-sm">Un attaquant peut trouver deux messages différents produisant le même hash avec environ √N tentatives (√2⁶⁴ = 2³² tentatives).</p>

              <p className="mt-3"><strong>⚠️ Conséquence :</strong></p>
              <p className="text-sm">Pour une fonction de hachage de 64 bits, 2³² essais suffisent pour trouver une collision avec haute probabilité.</p>

              <p className="mt-3"><strong>✅ Solution :</strong></p>
              <p className="text-sm">Les fonctions de hachage modernes utilisent au moins 256 bits (SHA-256), nécessitant 2¹²⁸ essais pour une collision - pratiquement impossible !</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={7}
      sessionTitle="Dénombrement & paradoxes"
      description="Exercices progressifs pour maîtriser les coefficients binomiaux, le binôme de Newton et les paradoxes probabilistes"
      slug="denombrement"
      duration="4h"
      level="Intermédiaire"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/polynomes-exercices"
      nextChapterLink="/formation/oteria/probabilites-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Maîtriser les permutations et arrangements (avec et sans ordre)</li>
            <li>Calculer et utiliser les coefficients binomiaux</li>
            <li>Appliquer la formule du binôme de Newton</li>
            <li>Comprendre le paradoxe des anniversaires et ses applications</li>
            <li>Résoudre des problèmes de dénombrement complexes</li>
          </ul>
        </div>

        {/* ─── RAPPELS ────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-pr-orange-pale to-indigo-50 rounded-xl shadow-sm p-8 border border-carnet-red/20">
          <h2 className="text-xl font-bold text-carnet-red-deep mb-4 flex items-center gap-2">
            Rappels (très concis)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-800">
            <div className="bg-white p-4 rounded-lg border-l-4 border-carnet-red/40 shadow-sm">
              <p className="font-semibold text-carnet-red-deep mb-2">Permutation de n :</p>
              <p className="mb-2 text-sm">L'ordre compte, on prend tout.</p>
              <LatexRenderer latex="P_n = n!" block={true} />
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-400 shadow-sm">
              <p className="font-semibold text-emerald-800 mb-2">Arrangement p parmi n :</p>
              <p className="mb-2 text-sm">L'ordre compte, partie avec répétition possible.</p>
              <LatexRenderer latex="A_n^p = \frac{n!}{(n-p)!}" block={true} />
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 shadow-sm">
              <p className="font-semibold text-purple-800 mb-2">Combinaison p parmi n :</p>
              <p className="mb-2 text-sm">L'ordre ne compte pas.</p>
              <LatexRenderer latex="C_n^p = \binom{n}{p} = \frac{n!}{p!(n-p)!}" block={true} />
            </div>
          </div>
        </div>

        {/* ─── EXERCICES ────────────────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={exercise.solution}
          >
            <div className="mb-4">
              <Badge
                className={`${exercise.difficulty === 'Facile' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                  exercise.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                    'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  } mb-2`}
                variant="secondary"
              >
                {exercise.difficulty}
              </Badge>
              <div className="text-slate-700 leading-relaxed">
                {exercise.statement}
              </div>
            </div>
          </ExerciseBlock>
        ))}

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaDenombrementExercicesPage;
