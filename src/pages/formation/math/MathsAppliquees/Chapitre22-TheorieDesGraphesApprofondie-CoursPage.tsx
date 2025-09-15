import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { Target, PenTool } from 'lucide-react';

const Chapitre22TheorieDesGraphesApprofondieCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={22}
      chapterTitle="Introduction à la théorie des graphes"
      description="Théorie approfondie et applications pratiques [[memory:6842989]]"
      slug="theorie-des-graphes-approfondie"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-theorie-des-graphes-approfondie-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-theorie-des-graphes-approfondie-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Graphes non orientés */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Graphes non orientés
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe non orienté</p>
              <div className="mt-2 space-y-2">
                <p>
                  Un <strong>graphe non orienté</strong> est un couple <LatexRenderer latex="(S,A)" block={false} /> où <LatexRenderer latex="S" block={false} /> est l'ensemble des sommets, <LatexRenderer latex="A" block={false} /> l'ensemble des <strong>paires</strong> de sommets appelées arêtes.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Terminologie de base</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Extrémités</strong> : sommets d'une arête</li>
                  <li>• <strong>Boucle</strong> : arête reliant un sommet à lui-même</li>
                  <li>• <strong>Graphe simple</strong> : sans boucle ni arêtes multiples</li>
                  <li>• <strong>Sommet isolé</strong> : non relié à d'autres sommets</li>
                  <li>• <strong>Sommets adjacents</strong> : reliés par une arête</li>
                  <li>• <strong>Ordre</strong> : nombre de sommets</li>
                  <li>• <strong>Degré</strong> <LatexRenderer latex="d(s)" block={false} /> : nombre d'arêtes incidentes à <LatexRenderer latex="s" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Formule d'Euler</p>
              <div className="mt-2 space-y-2">
                <p>
                  Dans un graphe à <LatexRenderer latex="n" block={false} /> sommets de degrés <LatexRenderer latex="d_1,\dots,d_n" block={false} /> et <LatexRenderer latex="p" block={false} /> arêtes :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n d_i = 2p" />
                </div>
                <p>En particulier, le nombre de sommets de degré impair est pair.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe complet</p>
              <div className="mt-2 space-y-2">
                <p>Un graphe complet est un graphe simple où tous les sommets sont deux à deux adjacents.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Un graphe complet d'ordre <LatexRenderer latex="n" block={false} /> possède</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\frac{n(n-1)}{2}" />
                </div>
                <p>arêtes.</p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Graphes orientés et pondérés */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Graphes orientés et pondérés
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe orienté</p>
              <div className="mt-2 space-y-2">
                <p>
                  Un graphe orienté est un couple <LatexRenderer latex="(S,A)" block={false} /> où <LatexRenderer latex="A" block={false} /> est un ensemble de <strong>couples</strong> ordonnés de sommets (arcs).
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Degrés entrant et sortant</p>
              <div className="mt-2 space-y-2">
                <p>
                  Le degré <LatexRenderer latex="d(s)" block={false} /> est le nombre d'arcs incident à <LatexRenderer latex="s" block={false} />. On distingue :
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• degré entrant <LatexRenderer latex="d^-(s)" block={false} /> : arcs arrivant en <LatexRenderer latex="s" block={false} /></li>
                  <li>• degré sortant <LatexRenderer latex="d^+(s)" block={false} /> : arcs partant de <LatexRenderer latex="s" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Formule d'Euler orientée</p>
              <div className="mt-2 space-y-2">
                <p>Pour un graphe orienté de <LatexRenderer latex="p" block={false} /> arcs :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n d_i^- = \sum_{i=1}^n d_i^+ = p" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe pondéré</p>
              <div className="mt-2 space-y-2">
                <p>
                  Un graphe est <strong>pondéré</strong> si chaque arête ou arc est muni d'un poids réel positif (ex : distances, probabilités).
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Matrice d'adjacence</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="G=(S,A)" block={false} /> un graphe d'ordre <LatexRenderer latex="n" block={false} />. La matrice d'adjacence est <LatexRenderer latex="M=(m_{ij})" block={false} /> avec :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="m_{ij} = \begin{cases} \text{nombre d'arêtes reliant } s_i \text{ à } s_j & \text{si non orienté}\\\\ \text{nombre d'arcs de } s_i \text{ vers } s_j & \text{si orienté} \end{cases}" />
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Chaînes, cycles, connectivité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Chaînes, cycles, connectivité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Chaînes et cycles</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Chaîne</strong> : suite finie de sommets consécutifs reliés par des arêtes</li>
                  <li>• <strong>Longueur</strong> : nombre d'arêtes</li>
                  <li>• <strong>Chaîne simple</strong> : pas d'arête répétée</li>
                  <li>• <strong>Chaîne eulérienne</strong> : passe par toutes les arêtes exactement une fois</li>
                  <li>• <strong>Cycle</strong> : chaîne simple fermée</li>
                  <li>• <strong>Cycle eulérien</strong> : chaîne eulérienne fermée</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Puissances de la matrice d'adjacence</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="M" block={false} /> est la matrice d'adjacence d'un graphe <LatexRenderer latex="G" block={false} />, alors <LatexRenderer latex="(M^p)_{ij}" block={false} /> est le nombre de chaînes de longueur <LatexRenderer latex="p" block={false} /> reliant <LatexRenderer latex="s_i" block={false} /> à <LatexRenderer latex="s_j" block={false} />.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe connexe</p>
              <div className="mt-2 space-y-2">
                <p>Un graphe non orienté est connexe si tout sommet est relié à tout autre par une chaîne.</p>
                <p>Un graphe orienté est :</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>faiblement connexe</strong> si son graphe non orienté associé est connexe</li>
                  <li>• <strong>fortement connexe</strong> si tout sommet est relié à tout autre par un chemin</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Critère de connectivité</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="M" block={false} /> la matrice d'adjacence d'un graphe d'ordre <LatexRenderer latex="n" block={false} />.</p>
                <ul className="space-y-1 ml-4">
                  <li>• Graphe non orienté : connexe <LatexRenderer latex="\iff" block={false} /> les coefficients de <LatexRenderer latex="I_n+M+\cdots+M^{n-1}" block={false} /> sont strictement positifs</li>
                  <li>• Graphe orienté : fortement connexe <LatexRenderer latex="\iff" block={false} /> les coefficients de <LatexRenderer latex="I_n+M+\cdots+M^{n-1}" block={false} /> sont strictement positifs</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème d'Euler</p>
              <div className="mt-2 space-y-2">
                <p>Un graphe simple, non orienté et connexe :</p>
                <ul className="space-y-1 ml-4">
                  <li>• possède un cycle eulérien <LatexRenderer latex="\iff" block={false} /> tous ses sommets sont de degré pair</li>
                  <li>• possède une chaîne eulérienne <LatexRenderer latex="\iff" block={false} /> il a 0 ou 2 sommets de degré impair</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème de Perron–Frobenius</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" block={false} /> une matrice à coefficients positifs.
                </p>
                <p>
                  Alors <LatexRenderer latex="A" block={false} /> admet une valeur propre réelle maximale <LatexRenderer latex="\lambda>0" block={false} />, associée à un espace propre de dimension 1, engendré par un vecteur à coordonnées strictement positives.
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-appliquees">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-theorie-des-graphes-approfondie-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre22TheorieDesGraphesApprofondieCoursPage;