import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, Zap, Eye, EyeOff, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaDenombrementExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 7 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 7 : Dénombrement & paradoxes - Exercices</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Exercices progressifs pour maîtriser les coefficients binomiaux, le binôme de Newton et les paradoxes probabilistes
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">7</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Nombre d'exercices</span>
                  <span className="text-2xl font-bold text-blue-900">11</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Coefficients binomiaux, binôme de Newton, Paradoxe des anniversaires
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/denombrement-paradoxes-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <Link to="/formation/oteria/denombrement-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/denombrement-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Rappels */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              Rappels (très concis)
            </h2>
            <div className="space-y-3 text-gray-800">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-semibold text-blue-800 mb-2">Permutation de n éléments :</p>
                <p className="mb-2">L'ordre compte, on prend tout.</p>
                <LatexRenderer latex="P_n = n!" block={true} />
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <p className="font-semibold text-green-800 mb-2">Arrangement de p parmi n :</p>
                <p className="mb-2">L'ordre compte, on ne prend pas tout.</p>
                <LatexRenderer latex="A_n^p = \frac{n!}{(n-p)!}" block={true} />
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                <p className="font-semibold text-purple-800 mb-2">Combinaison de p parmi n :</p>
                <p className="mb-2">L'ordre ne compte pas.</p>
                <LatexRenderer latex="C_n^p = \binom{n}{p} = \frac{n!}{p!(n-p)!}" block={true} />
              </div>
            </div>
          </div>

          {/* Exercice 1 - Codes PIN */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 1 : Codes PIN et permutations</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un téléphone utilise un <strong>code PIN à 4 chiffres</strong>.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien de codes si <em>tous les chiffres sont distincts</em> (choix dans {'{0, ..., 9}'}) ?</div>
                <div><strong>2.</strong> Combien de codes si <em>la répétition est autorisée</em> ?</div>
                <div><strong>3.</strong> Parmi ces codes, combien <em>commencent par un chiffre pair</em> (répétition autorisée) ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex_pin')}
              variant={visibleCorrections['ex_pin'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex_pin'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex_pin'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Chiffres distincts</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Chiffres distincts et ordre sur 4 positions :</p>
                      <LatexRenderer latex="A_{10}^4 = 10 \times 9 \times 8 \times 7 = \boxed{5040}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Répétition autorisée</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Répétition autorisée sur 4 positions :</p>
                      <LatexRenderer latex="10^4 = \boxed{10\,000}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Commence par un chiffre pair</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Premier chiffre pair : 5 choix (0, 2, 4, 6, 8), puis 3 positions libres avec répétition : 10³</p>
                      <LatexRenderer latex="5 \times 10^3 = \boxed{5000}" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 2 - Mots de passe */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 2 : Mots de passe (lettres + chiffres)</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un mot de passe est formé de <strong>3 lettres majuscules distinctes</strong> suivies de <strong>2 chiffres distincts</strong>.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien de mots de passe différents (ordre des 3 lettres et des 2 chiffres pris en compte) ?</div>
                <div><strong>2.</strong> Si <em>l'ordre entre les 3 lettres n'a pas d'importance</em> (on ne regarde que l'ensemble de lettres utilisées), combien de possibilités ?</div>
                <div><strong>3.</strong> Quelle proportion (cas 2 / cas 1) ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex_password')}
              variant={visibleCorrections['ex_password'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex_password'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex_password'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Avec ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Lettres : <LatexRenderer latex="A_{26}^3 = 26 \cdot 25 \cdot 24 = 15\,600" block={false} /></p>
                      <p className="mb-2">Chiffres : <LatexRenderer latex="A_{10}^2 = 10 \cdot 9 = 90" block={false} /></p>
                      <LatexRenderer latex="\text{Total} = 15\,600 \times 90 = \boxed{1\,404\,000}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Lettres sans ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Lettres sans ordre : <LatexRenderer latex="\binom{26}{3} = \frac{26 \cdot 25 \cdot 24}{3!} = 2\,600" block={false} /></p>
                      <p className="mb-2">Chiffres : <LatexRenderer latex="A_{10}^2 = 90" block={false} /></p>
                      <LatexRenderer latex="\text{Total} = 2\,600 \times 90 = \boxed{234\,000}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Proportion</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\frac{234\,000}{1\,404\,000} = \frac{1}{6} \approx \boxed{16{,}7\%}" block={true} />
                      <p className="text-sm mt-2 text-gray-600">Normal : on a divisé par 3! en "oubliant" l'ordre des 3 lettres.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 3 - Clés de chiffrement */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 3 : Clés de chiffrement</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Une clé est composée de <strong>5 symboles</strong> choisis parmi <strong>12 caractères</strong> possibles.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Si l'<strong>ordre compte</strong>, combien de clés ?</div>
                <div><strong>2.</strong> Si l'<strong>ordre ne compte pas</strong>, combien de clés uniques ?</div>
                <div><strong>3.</strong> Quel est le facteur entre les deux situations ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex_keys')}
              variant={visibleCorrections['ex_keys'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex_keys'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex_keys'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Avec ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="A_{12}^5 = 12 \cdot 11 \cdot 10 \cdot 9 \cdot 8 = \boxed{95\,040}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Sans ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{12}{5} = \frac{12!}{5! \cdot 7!} = \boxed{792}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Facteur</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\frac{95\,040}{792} = \boxed{120} = 5!" block={true} />
                      <p className="text-sm mt-2 text-gray-600">Généralement, <LatexRenderer latex="A_n^p = \binom{n}{p} \cdot p!" block={false} /></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 4 - Accès multi-facteurs */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 4 : Accès multi-facteurs</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On choisit <strong>2 dispositifs</strong> parmi <strong>5</strong> (smartphone, clé USB, QR code, SMS, email), puis on les utilise dans un <strong>ordre précis</strong>.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Avec ordre, combien de façons ?</div>
                <div><strong>2.</strong> Sans ordre, combien ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex_mfa')}
              variant={visibleCorrections['ex_mfa'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex_mfa'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex_mfa'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Avec ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="A_5^2 = 5 \cdot 4 = \boxed{20}" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Sans ordre</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{5}{2} = \frac{5 \cdot 4}{2} = \boxed{10}" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 5 - Génération de mots de passe contraints */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 5 : Génération de mots de passe contraints</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Expert
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Un administrateur crée un mot de passe de <strong>8 caractères</strong> contenant exactement <strong>3 majuscules distinctes</strong>, <strong>3 minuscules distinctes</strong>, <strong>2 chiffres distincts</strong>.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> En supposant que l'<strong>ordre importe</strong> (toutes les permutations des positions comptent), combien de mots de passe ?</div>
                <div><strong>2.</strong> Quelle est la <strong>probabilité</strong> de le deviner du premier coup (choix uniforme) ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex_complex')}
              variant={visibleCorrections['ex_complex'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex_complex'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex_complex'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Nombre de mots de passe</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2"><strong>Choix des caractères (sans positions) :</strong></p>
                      <LatexRenderer latex="A_{26}^3 \times A_{26}^3 \times A_{10}^2 = (26 \cdot 25 \cdot 24) \times (26 \cdot 25 \cdot 24) \times (10 \cdot 9)" block={true} />
                      <LatexRenderer latex="= 15\,600^2 \times 90 = 243\,360\,000 \times 90 = 21\,902\,400\,000" block={true} />
                      
                      <p className="mt-3 mb-2"><strong>Placement des types (3 majuscules, 3 minuscules, 2 chiffres) parmi 8 positions :</strong></p>
                      <LatexRenderer latex="\frac{8!}{3! \cdot 3! \cdot 2!} = \frac{40\,320}{6 \cdot 6 \cdot 2} = \boxed{560}" block={true} />
                      
                      <p className="mt-3 mb-2"><strong>Total :</strong></p>
                      <LatexRenderer latex="N = 21\,902\,400\,000 \times 560 = \boxed{12\,265\,344\,000\,000}" block={true} />
                      <p className="text-sm mt-2 text-blue-600">Plus de 12 mille milliards de possibilités !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité de deviner du premier coup</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\boxed{\frac{1}{12\,265\,344\,000\,000}} \approx 8{,}15 \times 10^{-14}" block={true} />
                      <p className="text-sm mt-2 text-gray-600">Une chance sur 12 mille milliards - pratiquement impossible !</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                    <p className="font-semibold text-blue-800 mb-2">🔐 Remarques pédagogiques</p>
                    <ul className="text-sm space-y-1 list-disc ml-5">
                      <li>Quand l'ordre est rendu "invisible", on divise par la factorielle de la taille du groupe concerné (ex. 3! pour 3 lettres).</li>
                      <li>Les placements de types se gèrent par un coefficient multinomial (ici 8!/(3!·3!·2!)).</li>
                      <li>Préciser <em>avec ou sans répétition</em> évite 90% des erreurs de modèle de comptage.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 6 : Calculs de factorielles</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Facile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Calculer les valeurs suivantes :
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> <LatexRenderer latex="6!" block={false} /></div>
                <div><strong>2.</strong> <LatexRenderer latex="\frac{10!}{8!}" block={false} /></div>
                <div><strong>3.</strong> <LatexRenderer latex="\frac{7!}{4! \times 3!}" block={false} /></div>
                <div><strong>4.</strong> Combien de permutations différentes peut-on former avec les lettres du mot "OTERIA" ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex6')}
              variant={visibleCorrections['ex6'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex6'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex6'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Calcul de 6!</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="6! = 1 \times 2 \times 3 \times 4 \times 5 \times 6 = 720" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Calcul de 10!/8!</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\frac{10!}{8!} = \frac{10 \times 9 \times 8!}{8!} = 10 \times 9 = 90" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Calcul de 7!/(4! × 3!)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\frac{7!}{4! \times 3!} = \frac{5040}{24 \times 6} = \frac{5040}{144} = 35" block={true} />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Note : Cette expression correspond au coefficient binomial <LatexRenderer latex="\binom{7}{3}" block={false} />
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Permutations du mot "OTERIA"</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Le mot "OTERIA" contient 6 lettres distinctes.</p>
                      <LatexRenderer latex="\text{Nombre de permutations} = 6! = 720" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 7 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 7 : Coefficients binomiaux</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Calculer les coefficients binomiaux suivants :
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> <LatexRenderer latex="\binom{5}{2}" block={false} /></div>
                <div><strong>2.</strong> <LatexRenderer latex="\binom{10}{3}" block={false} /></div>
                <div><strong>3.</strong> <LatexRenderer latex="\binom{8}{5}" block={false} /></div>
                <div><strong>4.</strong> Vérifier que <LatexRenderer latex="\binom{8}{5} = \binom{8}{3}" block={false} /></div>
                <div><strong>5.</strong> Vérifier la formule de Pascal : <LatexRenderer latex="\binom{7}{3} = \binom{6}{2} + \binom{6}{3}" block={false} /></div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex7')}
              variant={visibleCorrections['ex7'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex7'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex7'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Calcul de C(5,2)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5!}{2! \times 3!} = \frac{5 \times 4}{2 \times 1} = 10" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Calcul de C(10,3)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{10}{3} = \frac{10!}{3! \times 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = \frac{720}{6} = 120" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Calcul de C(8,5)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{8}{5} = \frac{8!}{5! \times 3!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Vérification de la symétrie</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{8}{3} = \frac{8!}{3! \times 5!} = \frac{8 \times 7 \times 6}{6} = 56 = \binom{8}{5}" block={true} />
                      <p className="mt-2">La propriété de symétrie est vérifiée : <LatexRenderer latex="\binom{n}{p} = \binom{n}{n-p}" block={false} /></p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">5. Vérification de la formule de Pascal</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Calculons les deux termes :</p>
                      <LatexRenderer latex="\binom{6}{2} = \frac{6 \times 5}{2} = 15" block={true} />
                      <LatexRenderer latex="\binom{6}{3} = \frac{6 \times 5 \times 4}{6} = 20" block={true} />
                      <LatexRenderer latex="\binom{6}{2} + \binom{6}{3} = 15 + 20 = 35 = \binom{7}{3}" block={true} />
                      <p className="mt-2 text-sm">La formule de Pascal est vérifiée !</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 8 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 8 : Binôme de Newton</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Moyen
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Développer les expressions suivantes en utilisant le binôme de Newton :
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> <LatexRenderer latex="(a+b)^3" block={false} /></div>
                <div><strong>2.</strong> <LatexRenderer latex="(x+1)^4" block={false} /></div>
                <div><strong>3.</strong> <LatexRenderer latex="(2x-1)^3" block={false} /></div>
                <div><strong>4.</strong> Calculer <LatexRenderer latex="\sum_{k=0}^{5} \binom{5}{k}" block={false} /></div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex8')}
              variant={visibleCorrections['ex8'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex8'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex8'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Développement de (a+b)³</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="(a+b)^3 = \sum_{k=0}^3 \binom{3}{k} a^k b^{3-k}" block={true} />
                      <LatexRenderer latex="= \binom{3}{0}b^3 + \binom{3}{1}ab^2 + \binom{3}{2}a^2b + \binom{3}{3}a^3" block={true} />
                      <LatexRenderer latex="= b^3 + 3ab^2 + 3a^2b + a^3" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Développement de (x+1)⁴</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="(x+1)^4 = \sum_{k=0}^4 \binom{4}{k} x^k \times 1^{4-k}" block={true} />
                      <LatexRenderer latex="= 1 + 4x + 6x^2 + 4x^3 + x^4" block={true} />
                      <p className="text-sm mt-2">Coefficients : 1, 4, 6, 4, 1 (ligne 4 du triangle de Pascal)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Développement de (2x-1)³</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="(2x-1)^3 = \sum_{k=0}^3 \binom{3}{k} (2x)^k (-1)^{3-k}" block={true} />
                      <LatexRenderer latex="= (-1)^3 + 3(2x)(-1)^2 + 3(2x)^2(-1) + (2x)^3" block={true} />
                      <LatexRenderer latex="= -1 + 6x - 12x^2 + 8x^3" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Somme des coefficients binomiaux</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">D'après la formule du binôme avec a=b=1 :</p>
                      <LatexRenderer latex="\sum_{k=0}^{5} \binom{5}{k} = 2^5 = 32" block={true} />
                      <p className="text-sm mt-2">Un ensemble de 5 éléments possède 32 sous-ensembles.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 9 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 9 : Problèmes de dénombrement</h2>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Résoudre les problèmes suivants :
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien de mots de passe de 8 caractères peut-on former avec les 26 lettres de l'alphabet (minuscules uniquement) ?</div>
                <div><strong>2.</strong> Dans une classe de 30 élèves, combien de façons différentes peut-on choisir un groupe de 3 délégués ?</div>
                <div><strong>3.</strong> Un jeu de cartes contient 52 cartes. Combien de mains de 5 cartes différentes peut-on former ?</div>
                <div><strong>4.</strong> Combien de sous-ensembles d'un ensemble à 10 éléments contiennent exactement 4 éléments ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex9')}
              variant={visibleCorrections['ex9'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex9'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex9'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Mots de passe de 8 caractères</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Chaque position peut contenir l'une des 26 lettres. Par le principe multiplicatif :</p>
                      <LatexRenderer latex="\text{Nombre de mots de passe} = 26^8 = 208\,827\,064\,576" block={true} />
                      <p className="text-sm mt-2 text-orange-600">⚠️ Environ 209 milliards de possibilités !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Choix de 3 délégués parmi 30</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">L'ordre n'a pas d'importance, on utilise les combinaisons :</p>
                      <LatexRenderer latex="\binom{30}{3} = \frac{30!}{3! \times 27!} = \frac{30 \times 29 \times 28}{6} = 4\,060" block={true} />
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Mains de 5 cartes parmi 52</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{52}{5} = \frac{52!}{5! \times 47!} = \frac{52 \times 51 \times 50 \times 49 \times 48}{120}" block={true} />
                      <LatexRenderer latex="= 2\,598\,960" block={true} />
                      <p className="text-sm mt-2">Plus de 2,5 millions de mains différentes au poker !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Sous-ensembles de 4 éléments parmi 10</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="\binom{10}{4} = \frac{10!}{4! \times 6!} = \frac{10 \times 9 \times 8 \times 7}{24} = 210" block={true} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 10 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 10 : Paradoxe des anniversaires</h2>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                Difficile
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                On considère un groupe de personnes et on suppose qu'il y a 365 jours dans l'année.
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Pour un groupe de 2 personnes, quelle est la probabilité qu'elles aient le même anniversaire ?</div>
                <div><strong>2.</strong> Pour un groupe de 2 personnes, quelle est la probabilité qu'elles aient des anniversaires différents ?</div>
                <div><strong>3.</strong> Pour un groupe de 3 personnes, quelle est la probabilité que toutes aient des anniversaires différents ?</div>
                <div><strong>4.</strong> Pour un groupe de 23 personnes, calculer approximativement la probabilité qu'au moins deux personnes aient le même anniversaire (on pourra donner une formule puis une valeur numérique approximative).</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex10')}
              variant={visibleCorrections['ex10'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex10'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex10'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Probabilité d'anniversaire commun (2 personnes)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">La première personne choisit un jour quelconque, la deuxième doit avoir le même :</p>
                      <LatexRenderer latex="P(\text{même jour}) = \frac{1}{365} \approx 0.00274" block={true} />
                      <p className="text-sm mt-2">Environ 0,27%</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité d'anniversaires différents (2 personnes)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <LatexRenderer latex="P(\text{jours différents}) = 1 - \frac{1}{365} = \frac{364}{365} \approx 0.99726" block={true} />
                      <p className="text-sm mt-2">Environ 99,73%</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Anniversaires différents (3 personnes)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">La première personne choisit un jour, la deuxième doit éviter ce jour (364/365), la troisième doit éviter les deux (363/365) :</p>
                      <LatexRenderer latex="P(\text{tous différents}) = 1 \times \frac{364}{365} \times \frac{363}{365}" block={true} />
                      <LatexRenderer latex="= \frac{364 \times 363}{365^2} \approx 0.9918" block={true} />
                      <p className="text-sm mt-2">Environ 99,18%</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">4. Paradoxe des anniversaires (23 personnes)</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Probabilité que tous aient des dates différentes :</p>
                      <LatexRenderer latex="P(\text{tous différents}) = \frac{365 \times 364 \times 363 \times \cdots \times 343}{365^{23}}" block={true} />
                      <LatexRenderer latex="\approx 0.493" block={true} />
                      <p className="mb-2 mt-3">Probabilité qu'au moins deux personnes aient le même anniversaire :</p>
                      <LatexRenderer latex="P(\text{collision}) = 1 - 0.493 \approx 0.507" block={true} />
                      <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                        <p className="font-semibold text-blue-800">🎉 Le paradoxe !</p>
                        <p className="text-sm mt-1">Avec seulement 23 personnes, il y a plus de 50% de chances que deux personnes aient le même anniversaire !</p>
                        <p className="text-sm mt-1 text-gray-600">Application en cryptographie : attaques par collision sur les fonctions de hachage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exercice 11 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-900">Exercice 11 : Application en cryptographie</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Expert
              </span>
            </div>

            <div className="mb-6">
              <p className="text-blue-800 mb-4">
                Une fonction de hachage produit des codes de 64 bits (chaque bit peut valoir 0 ou 1).
              </p>
              <div className="space-y-3 ml-4">
                <div><strong>1.</strong> Combien de codes différents cette fonction peut-elle produire ?</div>
                <div><strong>2.</strong> Si on génère au hasard 2³² codes (environ 4,3 milliards), quelle est approximativement la probabilité d'obtenir au moins une collision (deux codes identiques) ?</div>
                <div><strong>3.</strong> Pourquoi ce résultat est-il important pour la sécurité des fonctions de hachage ?</div>
              </div>
            </div>

            <Button
              onClick={() => toggleCorrection('ex11')}
              variant={visibleCorrections['ex11'] ? "secondary" : "default"}
              className="mb-4"
            >
              {visibleCorrections['ex11'] ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Masquer la correction</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Afficher la correction</>
              )}
            </Button>

            {visibleCorrections['ex11'] && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Corrigé détaillé</h4>
                
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">1. Nombre de codes possibles</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">Avec 64 bits, chaque bit ayant 2 valeurs possibles :</p>
                      <LatexRenderer latex="\text{Nombre de codes} = 2^{64} \approx 1.84 \times 10^{19}" block={true} />
                      <p className="text-sm mt-2">Environ 18,4 quintillions de codes différents !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">2. Probabilité de collision</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <p className="mb-2">C'est une application du paradoxe des anniversaires avec :</p>
                      <ul className="list-disc ml-5 mb-2">
                        <li>N = 2⁶⁴ "jours" possibles</li>
                        <li>k = 2³² codes générés</li>
                      </ul>
                      <p className="mb-2">Approximation (formule de l'approximation du paradoxe) :</p>
                      <LatexRenderer latex="P(\text{collision}) \approx 1 - e^{-\frac{k^2}{2N}} = 1 - e^{-\frac{2^{64}}{2 \times 2^{64}}}" block={true} />
                      <LatexRenderer latex="= 1 - e^{-\frac{2^{32}}{2}} \approx 1 - e^{-2^{31}}" block={true} />
                      <p className="mt-2">Cette probabilité est très proche de 1, donc la collision est quasi certaine !</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">3. Importance pour la sécurité</p>
                    <div className="bg-white p-3 rounded border border-green-200">
                      <div className="space-y-2">
                        <p><strong>🔒 Attaque par collision :</strong></p>
                        <p className="text-sm">Un attaquant peut trouver deux messages différents produisant le même hash avec environ √N tentatives (√2⁶⁴ = 2³² tentatives).</p>
                        
                        <p className="mt-3"><strong>⚠️ Conséquence :</strong></p>
                        <p className="text-sm">Pour une fonction de hachage de 64 bits, 2³² essais suffisent pour trouver une collision avec haute probabilité.</p>
                        
                        <p className="mt-3"><strong>✅ Solution :</strong></p>
                        <p className="text-sm">Les fonctions de hachage modernes utilisent au moins 256 bits (SHA-256), nécessitant 2¹²⁸ essais pour une collision - pratiquement impossible !</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Retour au programme */}
        <div className="text-center mt-12">
          <Link to="/articles/oteria-cyber-school">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Retour au programme OTERIA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaDenombrementExercicesPage;

