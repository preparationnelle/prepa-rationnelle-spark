
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsEspacesVectorielsComplementsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Chapitre 11 : Applications linéaires & structures vectorielles"
      description="Applications linéaires (noyau, image, rang, théorème du rang) ; espace \mathcal L(E,F), isomorphismes et matrices associées ; sous-espaces, somme directe & projecteurs ; changements de base, matrices semblables & invariants (trace)"
    >
      {/* Section 1: Applications linéaires */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Applications linéaires : bases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Une <em>application linéaire</em> <span className="inline-block align-middle"><LatexRenderer latex="f: E \to F" /></span> satisfait <span className="inline-block align-middle"><LatexRenderer latex="f(\alpha u + v) = \alpha f(u) + f(v)" /></span></li>
              <li><span className="inline-block align-middle"><LatexRenderer latex="\mathcal{L}(E, F)" /></span> est l'espace des applications linéaires, <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{L}(E)" /></span> les endomorphismes</li>
              <li>Un <em>isomorphisme</em> est une application linéaire bijective</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Égalité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="E" /></span> est de dimension finie, <span className="inline-block align-middle"><LatexRenderer latex="f = g \iff f(e_i) = g(e_i)" /></span> pour une base <span className="inline-block align-middle"><LatexRenderer latex="(e_1, \dots, e_n)" /></span></li>
              <li><strong>Composition</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f \in \mathcal{L}(E, F)" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="g \in \mathcal{L}(F, G)" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="g \circ f \in \mathcal{L}(E, G)" /></span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Propriétés et sous-espaces */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Propriétés et sous-espaces
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions fondamentales</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><em>Image</em> : <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{Im}(f) = \{ y \in F \mid \exists x \in E, y = f(x) \}" /></span></li>
              <li><em>Noyau</em> : <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{Ker}(f) = \{ x \in E \mid f(x) = 0_F \}" /></span></li>
              <li>Sous-espace <em>stable</em> : <span className="inline-block align-middle"><LatexRenderer latex="f(F) \subset F" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="f \in \mathcal{L}(E)" /></span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes essentiels</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Injectivité/Surjectivité</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="f \text{ injective} \iff \operatorname{Ker}(f) = \{0_E\}, \quad f \text{ surjective} \iff \operatorname{Im}(f) = F" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Théorème du rang</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\dim E = \operatorname{rg}(f) + \dim \operatorname{Ker}(f)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Matrices et isomorphismes */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Matrices et isomorphismes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Matrice associée : <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{mat}_{\mathcal{B}, \mathcal{B}'}(f)" /></span> a pour colonnes les coordonnées de <span className="inline-block align-middle"><LatexRenderer latex="f(e_s)" /></span> dans <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}'" /></span></li>
              <li><em>Isomorphisme canonique</em> : <span className="inline-block align-middle"><LatexRenderer latex="\Phi: \mathcal{L}(E, F) \to \mathsf{M}_{n,p}(\mathbb{R})" /></span></li>
              <li>Espaces <em>isomorphes</em> : <span className="inline-block align-middle"><LatexRenderer latex="E \simeq F" /></span> si existe un isomorphisme <span className="inline-block align-middle"><LatexRenderer latex="f: E \to F" /></span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Dimension</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\dim \mathcal{L}(E, F) = \dim E \times \dim F" /></span></li>
              <li><strong>Bijectivité</strong> : <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> bijectif <span className="inline-block align-middle"><LatexRenderer latex="\iff \operatorname{rg}(f) = \dim E = \dim F" /></span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Sous-espaces et projecteurs */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Sous-espaces et projecteurs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><em>Somme</em> : <span className="inline-block align-middle"><LatexRenderer latex="F_1 + F_2 = \{ x_1 + x_2 \mid x_1 \in F_1, x_2 \in F_2 \}" /></span></li>
              <li><em>Somme directe</em> : <span className="inline-block align-middle"><LatexRenderer latex="F_1 \oplus F_2" /></span> si <span className="inline-block align-middle"><LatexRenderer latex="F_1 \cap F_2 = \{0_E\}" /></span></li>
              <li><em>Projecteur</em> : <span className="inline-block align-middle"><LatexRenderer latex="p: E \to E" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="p(x) = u" /></span> où <span className="inline-block align-middle"><LatexRenderer latex="x = u + v" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="u \in U" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="v \in V" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="E = U \oplus V" /></span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules clés</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Formule de Grassmann</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="\dim(F_1 + F_2) = \dim F_1 + \dim F_2 - \dim(F_1 \cap F_2)" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Propriétés des projecteurs</p>
                <div className="my-4 flex justify-center">
                  <LatexRenderer latex="p^2 = p, \quad p + q = \operatorname{Id}_E, \quad \operatorname{Im}(p) = U, \quad \operatorname{Ker}(p) = V" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Changement de base */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Changement de base
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions et formules</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><em>Matrice de passage</em> : <span className="inline-block align-middle"><LatexRenderer latex="P" /></span> dont les colonnes sont les coordonnées de <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}'" /></span> dans <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}" /></span></li>
              <li>Matrices <em>semblables</em> : <span className="inline-block align-middle"><LatexRenderer latex="A' = P^{-1} A P" /></span></li>
              <li>Coordonnées : <span className="inline-block align-middle"><LatexRenderer latex="X = P X'" /></span></li>
              <li>Endomorphisme : <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{Mat}_{\mathcal{B}'}(f) = P^{-1} \operatorname{Mat}_{\mathcal{B}}(f) P" /></span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorème important</h3>
            <p className="text-slate-700">
              <strong>Trace</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="A" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="A'" /></span> sont semblables, alors <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{Tr}(A) = \operatorname{Tr}(A')" /></span>
            </p>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsEspacesVectorielsComplementsPage;
