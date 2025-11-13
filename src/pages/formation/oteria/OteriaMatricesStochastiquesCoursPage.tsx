import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, Network, Lock, Calculator, Key, Cpu } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaMatricesStochastiquesCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 12 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 12 : Arithmétique modulaire et Cryptographie affine</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Prépa / Informatique – Prépa Rationnelle
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">12</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Informations de cours */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Informations du cours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">
                Professeur : Dimitar Dimitrov
              </p>
              <p className="text-blue-800">
                Oteria Cyber School, Bachelor 1 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Divisibilité et nombres premiers */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              1. Divisibilité et nombres premiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  <strong>Définition :</strong> On dit que <LatexRenderer latex="a" block={false} /> <strong>divise</strong> <LatexRenderer latex="b" block={false} />, noté <LatexRenderer latex="a \mid b" block={false} />, s'il existe un entier <LatexRenderer latex="k" block={false} /> tel que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="b = a \times k" block={true} />
                </div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-2 mb-4">
                  <p>• <LatexRenderer latex="3 \mid 12" block={false} /> car <LatexRenderer latex="12 = 3 \times 4" block={false} /></p>
                  <p>• <LatexRenderer latex="7 \mid 21" block={false} /> car <LatexRenderer latex="21 = 7 \times 3" block={false} /></p>
                  <p>• <LatexRenderer latex="5 \nmid 13" block={false} /> car 13 n'est pas divisible par 5 (reste 3)</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Division euclidienne</p>
                <p className="mb-3">
                  Pour tout entier <LatexRenderer latex="a" block={false} /> et tout <LatexRenderer latex="b > 0" block={false} />, il existe des entiers uniques <LatexRenderer latex="q, r" block={false} /> tels que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-3">
                  <LatexRenderer latex="a = bq + r \quad \text{avec} \quad 0 \leq r < b" block={true} />
                </div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-2 mb-4">
                  <p>• <LatexRenderer latex="17 \div 5 = 3" block={false} /> reste <LatexRenderer latex="2" block={false} /> : <LatexRenderer latex="17 = 5 \times 3 + 2" block={false} /></p>
                  <p>• <LatexRenderer latex="28 \div 6 = 4" block={false} /> reste <LatexRenderer latex="4" block={false} /> : <LatexRenderer latex="28 = 6 \times 4 + 4" block={false} /></p>
                  <p>• <LatexRenderer latex="45 \div 7 = 6" block={false} /> reste <LatexRenderer latex="3" block={false} /> : <LatexRenderer latex="45 = 7 \times 6 + 3" block={false} /></p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Nombres premiers</p>
                <p className="mb-3">
                  Un entier <LatexRenderer latex="p > 1" block={false} /> est premier s'il n'est divisible que par 1 et lui-même.
                </p>
                <p className="mb-3">
                  Si <LatexRenderer latex="p" block={false} /> est premier et <LatexRenderer latex="p \mid ab" block={false} />, alors <LatexRenderer latex="p \mid a" block={false} /> ou <LatexRenderer latex="p \mid b" block={false} />.
                </p>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-2 mb-4">
                  <p>• Nombres premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23...</p>
                  <p>• 15 n'est pas premier car <LatexRenderer latex="15 = 3 \times 5" block={false} /></p>
                  <p>• 29 est premier (testez la divisibilité par 2, 3, 5, 7...)</p>
                  <p>• Théorème : si 7 divise 14×21 = 294, alors 7 divise 14 ou 21</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">Rappel clé</p>
                <p className="mb-2">
                  <LatexRenderer latex="\gcd(a,b)" block={false} /> : plus grand commun diviseur de <LatexRenderer latex="a" block={false} /> et <LatexRenderer latex="b" block={false} />.
                </p>
                <p className="mb-2">
                  Deux entiers sont <strong>premiers entre eux</strong> si <LatexRenderer latex="\gcd(a,b) = 1" block={false} />.
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-medium">Exemples :</p>
                  <p className="text-sm">• <LatexRenderer latex="\gcd(12, 18) = 6" block={false} /> (diviseurs communs : 1, 2, 3, 6)</p>
                  <p className="text-sm">• <LatexRenderer latex="\gcd(15, 28) = 1" block={false} /> (15 et 28 sont premiers entre eux)</p>
                  <p className="text-sm">• <LatexRenderer latex="\gcd(24, 36) = 12" block={false} /></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Arithmétique modulaire */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              2. Arithmétique modulaire
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  <strong>Définition :</strong> On dit que <LatexRenderer latex="a" block={false} /> est <strong>congru à</strong> <LatexRenderer latex="b" block={false} /> <strong>modulo n</strong> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="a \equiv b \pmod{n} \quad \Longleftrightarrow \quad n \mid (a - b)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p><LatexRenderer latex="17 \equiv 5 \pmod{12}" block={false} />, car <LatexRenderer latex="17 - 5 = 12" block={false} /> et <LatexRenderer latex="12 \mid 12" block={false} /></p>
                    <p className="text-sm text-blue-600 mt-1">Calcul : <LatexRenderer latex="17 \div 12 = 1" block={false} /> reste <LatexRenderer latex="5" block={false} /></p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p><LatexRenderer latex="10 \equiv 1 \pmod{3}" block={false} />, car <LatexRenderer latex="10 - 1 = 9" block={false} /> et <LatexRenderer latex="3 \mid 9" block={false} /></p>
                    <p className="text-sm text-blue-600 mt-1">Calcul : <LatexRenderer latex="10 \div 3 = 3" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p><LatexRenderer latex="25 \equiv 2 \pmod{7}" block={false} />, car <LatexRenderer latex="25 - 2 = 23" block={false} /> et <LatexRenderer latex="7 \mid 23" block={false} /></p>
                    <p className="text-sm text-blue-600 mt-1">Calcul : <LatexRenderer latex="25 \div 7 = 3" block={false} /> reste <LatexRenderer latex="4" block={false} /> ? Attendez, erreur !</p>
                    <p className="text-sm text-blue-800 mt-1">Correction : <LatexRenderer latex="25 \div 7 = 3" block={false} /> reste <LatexRenderer latex="4" block={false} />, donc <LatexRenderer latex="25 \equiv 4 \pmod{7}" block={false} /></p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Propriétés</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="a \equiv b \pmod{n}" block={false} /> et <LatexRenderer latex="c \equiv d \pmod{n}" block={false} />, alors :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-4">
                  <LatexRenderer latex="\begin{cases} a + c \equiv b + d \pmod{n} \\ a \times c \equiv b \times d \pmod{n} \\ a^k \equiv b^k \pmod{n} \end{cases}" block={true} />
                </div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-medium">Addition :</p>
                    <p><LatexRenderer latex="7 \equiv 2 \pmod{5}" block={false} /> et <LatexRenderer latex="11 \equiv 1 \pmod{5}" block={false} /></p>
                    <p>Alors <LatexRenderer latex="7 + 11 = 18 \equiv 2 + 1 = 3 \pmod{5}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="18 \div 5 = 3" block={false} /> reste <LatexRenderer latex="3" block={false} /></p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-medium">Multiplication :</p>
                    <p><LatexRenderer latex="8 \equiv 3 \pmod{5}" block={false} /> et <LatexRenderer latex="12 \equiv 2 \pmod{5}" block={false} /></p>
                    <p>Alors <LatexRenderer latex="8 \times 12 = 96 \equiv 3 \times 2 = 6 \equiv 1 \pmod{5}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="96 \div 5 = 19" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-medium">Puissance :</p>
                    <p><LatexRenderer latex="6 \equiv 1 \pmod{5}" block={false} /></p>
                    <p>Alors <LatexRenderer latex="6^3 = 216 \equiv 1^3 = 1 \pmod{5}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="216 \div 5 = 43" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Inverses mod n et algorithme d'Euclide étendu */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              3. Inverses mod n et algorithme d'Euclide étendu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  <strong>Définition :</strong> <LatexRenderer latex="a" block={false} /> a un <strong>inverse modulo n</strong> s'il existe <LatexRenderer latex="b" block={false} /> tel que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="a \times b \equiv 1 \pmod{n}" block={true} />
                </div>
                <p>Cet inverse existe ssi <LatexRenderer latex="\gcd(a,n) = 1" block={false} />.</p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples concrets</p>
                <div className="space-y-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium">Mod 7 :</p>
                    <p>L'inverse de 3 est 5 car <LatexRenderer latex="3 \times 5 = 15 \equiv 1 \pmod{7}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="15 \div 7 = 2" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium">Mod 5 :</p>
                    <p>L'inverse de 2 est 3 car <LatexRenderer latex="2 \times 3 = 6 \equiv 1 \pmod{5}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="6 \div 5 = 1" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium">Mod 9 :</p>
                    <p>L'inverse de 2 est 5 car <LatexRenderer latex="2 \times 5 = 10 \equiv 1 \pmod{9}" block={false} /></p>
                    <p className="text-sm text-blue-700 mt-1">Vérification : <LatexRenderer latex="10 \div 9 = 1" block={false} /> reste <LatexRenderer latex="1" block={false} /></p>
                  </div>
                  <div className="bg-blue-200 p-3 rounded">
                    <p className="font-medium text-blue-900">Contre-exemple :</p>
                    <p>4 n'a pas d'inverse mod 6 car <LatexRenderer latex="\gcd(4,6) = 2 \neq 1" block={false} /></p>
                    <p className="text-sm text-blue-800 mt-1">Aucun entier k tel que <LatexRenderer latex="4k \equiv 1 \pmod{6}" block={false} /></p>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 4: Cryptographie affine */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Key className="h-6 w-6" />
              4. Cryptographie affine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Principe</p>
                <p className="mb-3">
                  Le chiffrement affine est un chiffrement <strong>monoalphabétique par substitution</strong> qui transforme chaque lettre en une autre selon une fonction mathématique linéaire :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="E(x) = (a x + b) \bmod{26}" block={true} />
                </div>
                <p className="mb-3">avec <LatexRenderer latex="\gcd(a, 26) = 1" block={false} /> (pour garantir la réversibilité).</p>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-blue-900 mb-2">Pourquoi ça marche ?</p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• <strong>Linéaire :</strong> combine multiplication par a et addition de b</li>
                    <li>• <strong>Modulo 26 :</strong> ramène toujours le résultat entre 0 et 25</li>
                    <li>• <strong>Inversible :</strong> a doit être premier avec 26 pour avoir un inverse</li>
                    <li>• <strong>Déterministe :</strong> même lettre → même résultat (faiblesse !)</li>
                  </ul>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-blue-900 mb-2">Avantages & Inconvénients</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-green-700 mb-1">Avantages :</p>
                      <ul className="space-y-1 text-green-700">
                        <li>• Très rapide à calculer</li>
                        <li>• Mathématiquement propre</li>
                        <li>• Facile à implémenter</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700 mb-1">Inconvénients :</p>
                      <ul className="space-y-1 text-red-700">
                        <li>• Vulnérable aux attaques fréquentielles</li>
                        <li>• Même lettre → même chiffrement</li>
                        <li>• Cassable avec peu de texte</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Condition mathématique</p>
                  <p className="text-sm text-blue-800 mb-2">
                    Pourquoi <LatexRenderer latex="\gcd(a, 26) = 1" block={false} /> ?
                  </p>
                  <p className="text-sm">
                    Pour déchiffrer, on doit résoudre <LatexRenderer latex="y = a x + b \pmod{26}" block={false} /> en x.
                    Cela nécessite l'inverse de a modulo 26, qui n'existe que si a et 26 sont premiers entre eux.
                    Cette condition garantit que chaque lettre a une unique correspondance.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Déchiffrement</p>
                <p className="mb-3">
                  Pour retrouver la lettre originale, on inverse le processus :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="D(y) = a^{-1} (y - b) \bmod{26}" block={true} />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Comment ça marche ?</p>
                  <p className="text-sm text-blue-800 mb-2">
                    Si on a chiffré avec <LatexRenderer latex="E(x) = a x + b \pmod{26}" block={false} />, alors :
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>• On soustrait d'abord b : <LatexRenderer latex="y - b \pmod{26}" block={false} /></p>
                    <p>• On multiplie par l'inverse de a : <LatexRenderer latex="a^{-1} (y - b) \pmod{26}" block={false} /></p>
                    <p>• Le modulo 26 ramène dans l'alphabet</p>
                  </div>
                  <p className="text-sm mt-2 italic text-blue-700">
                    Exemple : avec a=5, b=8, a⁻¹=21. Pour déchiffrer Q(16) :
                    21×(16-8) mod 26 = 21×8 mod 26 = 168 mod 26 = 12 → M ✓
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples complets</p>
                <div className="space-y-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Exemple 1 : Clé (5, 8)</p>
                    <p className="mb-2">Chiffrement de "BONJOUR" :</p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm mb-2">
                      <p>B(1) → (5×1+8) mod 26 = 13 → N</p>
                      <p>O(14) → (5×14+8) mod 26 = 78 mod 26 = 0 → A</p>
                      <p>N(13) → (5×13+8) mod 26 = 73 mod 26 = 21 → V</p>
                      <p>J(9) → (5×9+8) mod 26 = 53 mod 26 = 1 → B</p>
                      <p>O(14) → (5×14+8) mod 26 = 78 mod 26 = 0 → A</p>
                      <p>U(20) → (5×20+8) mod 26 = 108 mod 26 = 4 → E</p>
                      <p>R(17) → (5×17+8) mod 26 = 93 mod 26 = 15 → P</p>
                    </div>
                    <p className="text-sm text-blue-700">Résultat : "BONJOUR" → "NAVBAEP"</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Exemple 2 : Clé (7, 3)</p>
                    <p className="mb-2">Vérifions que 7 et 26 sont premiers entre eux : <LatexRenderer latex="\gcd(7,26)=1" block={false} /> ✓</p>
                    <p className="mb-2">Inverse de 7 mod 26 = 15 (car 7×15=105≡1 mod 26)</p>
                    <p className="mb-2">Chiffrement de "A" (0) :</p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm mb-2">
                      <p>E(0) = (7×0 + 3) mod 26 = 3 → D</p>
                    </div>
                    <p className="mb-2">Déchiffrement de "D" (3) :</p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                      <p>D(3) = 15×(3-3) mod 26 = 0 → A</p>
                    </div>
                  </div>

                  <div className="bg-blue-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-blue-900">Clé invalide : (4, 5)</p>
                    <p className="mb-2"><LatexRenderer latex="\gcd(4,26)=2 \neq 1" block={false} /> : clé interdite !</p>
                    <p className="text-sm text-blue-800">4 n'a pas d'inverse modulo 26.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Table de correspondance A=0, B=1, ..., Z=25</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>A=0, B=1, C=2, D=3, E=4, F=5</div>
                      <div>G=6, H=7, I=8, J=9, K=10, L=11</div>
                      <div>M=12, N=13, O=14, P=15, Q=16, R=17</div>
                      <div>S=18, T=19, U=20, V=21, W=22, X=23</div>
                      <div>Y=24, Z=25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Liens avec la cybersécurité */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              5. Liens avec la cybersécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <p className="mb-3">
                L'arithmétique modulaire est le <strong>langage fondamental de la cryptographie moderne</strong>.
              </p>

              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-3">Applications directes</p>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>RSA :</strong> repose sur l'exponentiation modulaire <LatexRenderer latex="C \equiv M^e \pmod{n}" block={false} /> où :
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li><LatexRenderer latex="M" block={false} /> = message à chiffrer (converti en nombre)</li>
                      <li><LatexRenderer latex="C" block={false} /> = message chiffré (résultat)</li>
                      <li><LatexRenderer latex="e" block={false} /> = exposant public (petit nombre premier avec <LatexRenderer latex="\varphi(n)" block={false} />)</li>
                      <li><LatexRenderer latex="n" block={false} /> = module (produit de deux grands nombres premiers)</li>
                    </ul>
                    <p className="mt-2 text-sm italic">Cette opération élève M à la puissance e, puis prend le reste de la division par n.</p>
                  </li>
                  <li>• <strong>Diffie-Hellman :</strong> échange de clés via puissances mod un grand nombre premier :
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>Alice et Bob conviennent d'un nombre premier <LatexRenderer latex="p" block={false} /> et d'une base <LatexRenderer latex="g" block={false} /></li>
                      <li>Alice choisit <LatexRenderer latex="a" block={false} /> secret, calcule <LatexRenderer latex="A = g^a \pmod{p}" block={false} /></li>
                      <li>Bob choisit <LatexRenderer latex="b" block={false} /> secret, calcule <LatexRenderer latex="B = g^b \pmod{p}" block={false} /></li>
                      <li>La clé partagée est <LatexRenderer latex="K = B^a \pmod{p} = A^b \pmod{p}" block={false} /></li>
                    </ul>
                    <p className="mt-2 text-sm italic">L'exponentiation modulaire rend le calcul de la clé partagée facile, mais sa découverte impossible.</p>
                  </li>
                  <li>• <strong>Hachage et intégrité :</strong> opérations mod <LatexRenderer latex="2^n" block={false} /> dans les fonctions SHA :
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>SHA-256 utilise des additions et rotations modulo <LatexRenderer latex="2^{32}" block={false} /></li>
                      <li>Les opérations <code>AND</code>, <code>XOR</code>, <code>ROTATE</code> sont modulaires</li>
                      <li>Cela garantit que le hash est toujours sur 256 bits, quelle que soit la taille des données</li>
                      <li>La modularité crée l'effet "avalanche" : petit changement → hash complètement différent</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple complet : RSA</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-4">
                  <LatexRenderer latex="\begin{aligned} n &= p \times q \\ \varphi(n) &= (p-1)(q-1) \\ e &: \gcd(e,\varphi(n))=1 \\ d &\equiv e^{-1} \pmod{\varphi(n)} \\[0.3em] C &\equiv M^e \pmod{n} \quad \text{(chiffrement)} \\ M &\equiv C^d \pmod{n} \quad \text{(déchiffrement)} \end{aligned}" block={true} />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-blue-900 mb-3">RSA avec p=5, q=11 (exemple pédagogique)</p>
                  <div className="space-y-2 text-sm">
                    <p>• <LatexRenderer latex="n = 5 \times 11 = 55" block={false} /></p>
                    <p>• <LatexRenderer latex="\varphi(55) = (5-1)(11-1) = 4 \times 10 = 40" block={false} /></p>
                    <p>• Choisissons <LatexRenderer latex="e = 7" block={false} /> (car <LatexRenderer latex="\gcd(7,40)=1" block={false} />)</p>
                    <p>• Inverse de 7 mod 40 : <LatexRenderer latex="7 \times 23 = 161 \equiv 1 \pmod{40}" block={false} />, donc <LatexRenderer latex="d = 23" block={false} /></p>
                  </div>

                  <div className="mt-3 p-3 bg-gray-900 text-gray-100 rounded text-sm">
                    <p className="font-medium mb-2">Chiffrement du message M=8 :</p>
                    <p><LatexRenderer latex="C \equiv 8^7 \pmod{55}" block={false} /></p>
                    <p>Calcul : <LatexRenderer latex="8^2 = 64 \equiv 9 \pmod{55}" block={false} /></p>
                    <p><LatexRenderer latex="9 \times 8 = 72 \equiv 17 \pmod{55}" block={false} /></p>
                    <p><LatexRenderer latex="17 \times 8 = 136 \equiv 26 \pmod{55}" block={false} /></p>
                    <p><LatexRenderer latex="26 \times 8 = 208 \equiv 43 \pmod{55}" block={false} /></p>
                    <p className="text-blue-400">Résultat : C = 43</p>
                  </div>

                  <div className="mt-3 p-3 bg-gray-900 text-gray-100 rounded text-sm">
                    <p className="font-medium mb-2">Déchiffrement de C=43 :</p>
                    <p><LatexRenderer latex="M \equiv 43^{23} \pmod{55}" block={false} /></p>
                    <p>Utilisant l'exponentiation modulaire rapide...</p>
                    <p className="text-blue-400">Résultat : M = 8 ✓</p>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Pourquoi c'est sûr ?</p>
                  <p className="text-sm text-blue-800">
                    Avec des nombres premiers de 1024 bits, <LatexRenderer latex="n" block={false} /> a ~300 chiffres décimaux.
                    Factoriser un tel nombre prendrait des milliards d'années avec les ordinateurs actuels !
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-3">Sécurité</p>
                <p>
                  la difficulté de factoriser <LatexRenderer latex="n" block={false} /> rend le calcul de <LatexRenderer latex="d" block={false} /> pratiquement impossible sans connaître <LatexRenderer latex="p" block={false} /> et <LatexRenderer latex="q" block={false} />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: À retenir */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              6. À retenir
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-4">
                <p className="font-semibold text-blue-900 mb-4">Résumé</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-slate-200 bg-white shadow-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-200 px-4 py-2 font-semibold text-blue-900">Concept</th>
                        <th className="border border-slate-200 px-4 py-2 font-semibold text-blue-900">Formule / Idée clé</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-800">
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-semibold">Congruence</td>
                        <td className="border border-slate-200 px-4 py-3"><LatexRenderer latex="a \equiv b \pmod{n}" block={false} /> si <LatexRenderer latex="n|(a-b)" block={false} /></td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-semibold">Inverse mod n</td>
                        <td className="border border-slate-200 px-4 py-3"><LatexRenderer latex="a^{-1}" block={false} /> existe ssi <LatexRenderer latex="\gcd(a,n)=1" block={false} /></td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-semibold">Chiffrement affine</td>
                        <td className="border border-slate-200 px-4 py-3"><LatexRenderer latex="E(x) = (a x + b) \bmod{26}" block={false} /></td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-semibold">Déchiffrement affine</td>
                        <td className="border border-slate-200 px-4 py-3"><LatexRenderer latex="D(y) = a^{-1}(y - b) \bmod{26}" block={false} /></td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-semibold">RSA</td>
                        <td className="border border-slate-200 px-4 py-3"><LatexRenderer latex="C = M^e \bmod{n}" block={false} /> ; <LatexRenderer latex="M = C^d \bmod{n}" block={false} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-4">Exercices d'application rapide</p>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium mb-2">1. Congruence</p>
                    <p className="text-sm mb-2">Résoudre : <LatexRenderer latex="3x \equiv 6 \pmod{9}" block={false} /></p>
                    <p className="text-sm text-blue-700">Solution : Diviser par 3 : <LatexRenderer latex="x \equiv 2 \pmod{3}" block={false} />, donc <LatexRenderer latex="x = 2 + 3k" block={false} /></p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-medium mb-2">2. Inverse modulaire</p>
                    <p className="text-sm mb-2">Trouver l'inverse de 4 modulo 7</p>
                    <p className="text-sm text-blue-700">Solution : Tester : 4×2=8≡1 mod 7, donc inverse = 2</p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-medium mb-2">3. Chiffrement affine</p>
                    <p className="text-sm mb-2">Clé (3,7), chiffrer "A" (0)</p>
                    <p className="text-sm text-blue-700">Solution : E(0) = (3×0 + 7) mod 26 = 7 → "H"</p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-medium mb-2">4. PGCD étendu</p>
                    <p className="text-sm mb-2"><LatexRenderer latex="\gcd(30, 42)" block={false} /></p>
                    <p className="text-sm text-blue-700">Solution : 30=1×30, 42=1×30+12, 30=2×12+6, 12=2×6+0 → PGCD=6</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6.1: Implémentation Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              6.1. Implémentation Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-4">Commandes essentielles à connaître</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded text-sm">
                    <p className="font-medium mb-2">• Opération modulo :</p>
                    <div className="bg-gray-900 text-gray-100 p-2 rounded font-mono text-xs">
                      a % n  # reste de la division de a par n
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded text-sm">
                    <p className="font-medium mb-2">• Puissance modulaire :</p>
                    <div className="bg-gray-900 text-gray-100 p-2 rounded font-mono text-xs">
                      pow(a, b, n)  # a^b mod n (très efficace)
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded text-sm">
                    <p className="font-medium mb-2">• PGCD :</p>
                    <div className="bg-gray-900 text-gray-100 p-2 rounded font-mono text-xs">
                      from math import gcd<br/>
                      gcd(a, b)
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Fonctions Python essentielles</p>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="font-semibold mb-3">1. Calcul du PGCD</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`from math import gcd

# Exemple
print(gcd(12, 18))  # 6
print(gcd(15, 28))  # 1`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="font-semibold mb-3">2. Algorithme d'Euclide étendu</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`def extended_gcd(a, b):
    """Retourne (pgcd, x, y) tel que a*x + b*y = pgcd"""
    if a == 0:
        return b, 0, 1
    pgcd, x1, y1 = extended_gcd(b % a, a)
    x = y1 - (b // a) * x1
    y = x1
    return pgcd, x, y

# Exemple : inverse de 3 mod 26
pgcd, x, y = extended_gcd(3, 26)
print(f"Inverse de 3 mod 26 : {x % 26}")  # 9`}
                      </pre>
                    </div>
                  </div>



                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 7: Vision d'avenir */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Network className="h-6 w-6" />
              7. Vision d'avenir
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-900 mb-3">Cryptographies post-quantiques (NIST 2022-2024)</p>
                <div className="space-y-2 text-sm">
                  <p>• <strong>KYBER (Lattice-based)</strong> : cryptographie sur réseaux, utilise <LatexRenderer latex="\mathbb{Z}_q" block={false} /> (anneaux modulaires)</p>
                  <p>• <strong>Dilithium (Lattice-based)</strong> : signatures utilisant l'arithmétique modulaire</p>
                  <p>• <strong>FALCON</strong> : signatures basées sur les fonctions hash mod <LatexRenderer latex="2^n" block={false} /></p>
                  <p>• <strong>SPHINCS+</strong> : signatures utilisant des arbres de Merkle avec hash modulaires</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-900 mb-3">Exemple concret : Cryptographie sur réseaux</p>
                <p className="text-sm text-blue-800 mb-2">
                  Problème dur : trouver un petit vecteur dans un réseau généré par une matrice modulaire.
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p><strong>Clé publique :</strong> Matrice <LatexRenderer latex="A \in \mathbb{Z}_q^{m \times n}" block={false} /> et vecteur <LatexRenderer latex="t = A \cdot s + e \pmod{q}" block={false} /></p>
                  <p><strong>Chiffrement :</strong> <LatexRenderer latex="c = A^T \cdot r + \mu \cdot t \pmod{q}" block={false} /></p>
                  <p><strong>Sécurité :</strong> basée sur la difficulté du LWE (Learning With Errors)</p>
                </div>
              </div>

              <p className="mb-3">
                Même avec l'informatique quantique, l'arithmétique modulaire reste <strong>le langage fondamental</strong> de la cybersécurité — elle évolue simplement vers des structures plus complexes.
              </p>

              <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <p className="text-lg font-semibold text-blue-900 italic">
                  L'arithmétique modulaire est la langue universelle de la cybersécurité.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retour */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg">
              <ArrowLeft className="h-5 w-5" />
              Retour au programme OTERIA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaMatricesStochastiquesCoursPage;

