import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre1LogiqueEtRaisonnementFondamentauxCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Logique & raisonnement fondamentaux"
      description="Propositions, connecteurs, quantificateurs ; disjonction de cas, contraposée, raisonnement par l'absurde"
    >
      {/* Section A - Éléments de logique */}
      <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
              A
            </span>
            <span className="font-semibold">Éléments de logique</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* A.1 Propositions et opérations logiques */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.1. Propositions et opérations logiques
            </h3>

            {/* Définition 1.1 — Proposition */}
            <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Définition 1.1 — Proposition
              </p>
              <p className="text-black leading-relaxed">
                Une <em>proposition</em> est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.
              </p>
            </div>

            {/* Exemples */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-black mb-2">Exemples :</p>
              <ul className="text-black space-y-1 ml-4">
                <li>• « <LatexRenderer latex="2+2=4" /> » est une proposition vraie.</li>
                <li>• « <LatexRenderer latex="5" /> est pair » est une proposition fausse.</li>
                <li>• « <LatexRenderer latex="x+1=3" /> » n'est pas une proposition tant qu'on ne connaît pas la valeur de <LatexRenderer latex="x" />.</li>
              </ul>
            </div>

            {/* Définition 1.2 — Négation */}
            <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Définition 1.2 — Négation
              </p>
              <p className="text-black leading-relaxed">
                Pour une proposition <LatexRenderer latex="P" />, on note <LatexRenderer latex="\neg P" /> la <em>négation</em> de <LatexRenderer latex="P" />, c'est-à-dire la proposition qui est vraie quand <LatexRenderer latex="P" /> est fausse, et fausse quand <LatexRenderer latex="P" /> est vraie.
              </p>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black">
                Si <LatexRenderer latex="P" /> = « <LatexRenderer latex="7" /> est premier », alors <LatexRenderer latex="\neg P" /> = « <LatexRenderer latex="7" /> n'est pas premier ».
              </p>
            </div>

            {/* Opérations logiques */}
            <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Opérations logiques
              </p>
              <div className="text-black space-y-2">
                <p>• <LatexRenderer latex="P \wedge Q" /> : <LatexRenderer latex="P" /> <em>et</em> <LatexRenderer latex="Q" /> sont vraies.</p>
                <p>• <LatexRenderer latex="P \vee Q" /> : au moins l'une des deux est vraie.</p>
              </div>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black mb-2">
                Soit <LatexRenderer latex="P" /> = « <LatexRenderer latex="n" /> est pair », <LatexRenderer latex="Q" /> = « <LatexRenderer latex="n" /> est multiple de 3 ».
              </p>
              <div className="text-black space-y-1 ml-4">
                <p>• <LatexRenderer latex="P \wedge Q" /> : « <LatexRenderer latex="n" /> est pair et multiple de 3 » (exemple <LatexRenderer latex="n=6" />).</p>
                <p>• <LatexRenderer latex="P \vee Q" /> : « <LatexRenderer latex="n" /> est pair ou multiple de 3 » (exemple <LatexRenderer latex="n=4" /> ou <LatexRenderer latex="n=9" />).</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.2 Implication et équivalence */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.2. Implication et équivalence
            </h3>

            {/* Définition 1.3 */}
            <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Définition 1.3 — Implication et équivalence
              </p>
              <div className="text-black space-y-2">
                <p>• <LatexRenderer latex="P \Rightarrow Q" /> : « si <LatexRenderer latex="P" /> est vraie alors <LatexRenderer latex="Q" /> l'est ».</p>
                <p>• <LatexRenderer latex="P \Leftrightarrow Q" /> : équivalence, c'est-à-dire <LatexRenderer latex="P \Rightarrow Q" /> et <LatexRenderer latex="Q \Rightarrow P" />.</p>
              </div>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black">
                <LatexRenderer latex="P" /> = « <LatexRenderer latex="n" /> est multiple de 4 », <LatexRenderer latex="Q" /> = « <LatexRenderer latex="n" /> est pair ». <br />
                Alors <LatexRenderer latex="P \Rightarrow Q" /> est vrai, mais <LatexRenderer latex="Q \Rightarrow P" /> est faux (exemple : <LatexRenderer latex="n=6" />).
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.3 Quantificateurs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.3. Quantificateurs
            </h3>

            <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
              <div className="text-black space-y-2">
                <p className="text-center text-lg mb-4">
                  <LatexRenderer latex="\forall x : \text{pour tout } x \qquad \exists x : \text{il existe un } x \qquad \exists! x : \text{il existe un unique } x" />
                </p>
              </div>
            </div>

            {/* Exemples */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemples :</p>
              <ul className="text-black space-y-1 ml-4">
                <li>• <LatexRenderer latex="\forall n \in \mathbb{N}, \; n^2 \geq 0" /> (toujours vrai).</li>
                <li>• <LatexRenderer latex="\exists x \in \mathbb{R}, \; x^2 = 2" /> (exemple <LatexRenderer latex="x=\sqrt{2}" />).</li>
                <li>• <LatexRenderer latex="\exists! x \in \mathbb{R}, \; x^2=0" /> (solution unique <LatexRenderer latex="x=0" />).</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* A.4 Tables de vérité */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              A.4. Tables de vérité
            </h3>

            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-black leading-relaxed mb-4">
                Une table de vérité donne les valeurs de propositions composées en fonction des valeurs de <LatexRenderer latex="P" /> et <LatexRenderer latex="Q" />.
              </p>

              {/* Table de vérité */}
              <div className="overflow-x-auto">
                <table className="border-collapse border border-gray-300 mx-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-black">P</th>
                      <th className="border border-gray-300 px-4 py-2 text-black">Q</th>
                      <th className="border border-gray-300 px-4 py-2 text-black"><LatexRenderer latex="\neg P" /></th>
                      <th className="border border-gray-300 px-4 py-2 text-black"><LatexRenderer latex="P \wedge Q" /></th>
                      <th className="border border-gray-300 px-4 py-2 text-black"><LatexRenderer latex="P \vee Q" /></th>
                      <th className="border border-gray-300 px-4 py-2 text-black"><LatexRenderer latex="P \Rightarrow Q" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">F</td>
                      <td className="border border-gray-300 px-4 py-2 text-center text-black">V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B - Méthodes de raisonnement */}
      <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardTitle className="text-xl flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
              B
            </span>
            <span className="font-semibold">Méthodes de raisonnement</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {/* B.1 Disjonction de cas */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.1. Disjonction de cas
            </h3>

            <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Principe
              </p>
              <p className="text-black leading-relaxed">
                On divise le problème en plusieurs cas couvrant toutes les possibilités.
              </p>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black mb-3">
                Montrer que <LatexRenderer latex="n^2" /> est pair si et seulement si <LatexRenderer latex="n" /> est pair.
              </p>
              <div className="text-black space-y-2 ml-4">
                <p>• <strong>Cas 1 :</strong> <LatexRenderer latex="n" /> est pair <LatexRenderer latex="\Rightarrow n=2k \Rightarrow n^2=4k^2" />, donc pair.</p>
                <p>• <strong>Cas 2 :</strong> <LatexRenderer latex="n" /> est impair <LatexRenderer latex="\Rightarrow n=2k+1 \Rightarrow n^2=4k^2+4k+1" />, donc impair.</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.2 Contraposée */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.2. Contraposée
            </h3>

            <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Définition
              </p>
              <p className="text-black leading-relaxed">
                La contraposée de <LatexRenderer latex="P \Rightarrow Q" /> est <LatexRenderer latex="\neg Q \Rightarrow \neg P" />.
              </p>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black mb-3">
                Proposition : « si <LatexRenderer latex="n^2" /> est pair, alors <LatexRenderer latex="n" /> est pair ».
              </p>
              <p className="text-black">
                Contraposée : « si <LatexRenderer latex="n" /> est impair, alors <LatexRenderer latex="n^2" /> est impair » (plus simple à démontrer).
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.3 Raisonnement par l'absurde */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.3. Raisonnement par l'absurde
            </h3>

            <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Idée
              </p>
              <p className="text-black leading-relaxed">
                Supposer le contraire de ce que l'on veut prouver, et arriver à une contradiction.
              </p>
            </div>

            {/* Exemple détaillé : Irrationalité de √2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-3">Exemple détaillé : Irrationalité de <LatexRenderer latex="\sqrt{2}" /></p>
              <div className="text-black space-y-3">
                <p>On veut montrer que <LatexRenderer latex="\sqrt{2}" /> n'est pas rationnel.</p>

                <div className="ml-4 space-y-2">
                  <p>1. <em>Supposons par l'absurde</em> que <LatexRenderer latex="\sqrt{2} = \dfrac{p}{q}" /> avec <LatexRenderer latex="p, q \in \mathbb{Z}" />, <LatexRenderer latex="q \neq 0" />, et la fraction irréductible.</p>
                  <p>2. Alors <LatexRenderer latex="2 = \dfrac{p^2}{q^2} \quad \Rightarrow \quad p^2 = 2q^2" />.</p>
                  <p>3. Donc <LatexRenderer latex="p^2" /> est pair <LatexRenderer latex="\Rightarrow p" /> est pair. Écrivons <LatexRenderer latex="p = 2k" />.</p>
                  <p>4. Substituons : <LatexRenderer latex="p^2 = 4k^2 = 2q^2 \quad \Rightarrow \quad q^2 = 2k^2" />.</p>
                  <p>5. Donc <LatexRenderer latex="q^2" /> est pair <LatexRenderer latex="\Rightarrow q" /> est pair.</p>
                  <p>6. On conclut que <LatexRenderer latex="p" /> et <LatexRenderer latex="q" /> sont tous deux pairs, ce qui contredit l'hypothèse d'irréductibilité.</p>
                </div>

                <p className="font-semibold">Conclusion :</p>
                <p>L'hypothèse est impossible, donc <LatexRenderer latex="\sqrt{2}" /> est irrationnel.</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.4 Récurrence */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.4. Récurrence
            </h3>

            <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-orange-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Principe
              </p>
              <p className="text-black leading-relaxed">
                Prouver une formule pour tout entier naturel en vérifiant :
              </p>
              <div className="text-black ml-4 mt-2 space-y-1">
                <p>• <em>Initialisation</em> : elle est vraie pour <LatexRenderer latex="n=0" /> (ou <LatexRenderer latex="n=1" />).</p>
                <p>• <em>Hérédité</em> : si elle est vraie pour <LatexRenderer latex="n" />, elle l'est pour <LatexRenderer latex="n+1" />.</p>
              </div>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black mb-3">
                <LatexRenderer latex="\forall n \in \mathbb{N}, \; 1+2+\cdots+n = \dfrac{n(n+1)}{2}" />.
              </p>
              <div className="text-black space-y-2 ml-4">
                <p>• Cas <LatexRenderer latex="n=1" /> : <LatexRenderer latex="1=\dfrac{1\cdot 2}{2}" />.</p>
                <p>• Supposons vrai pour <LatexRenderer latex="n" />. Alors <LatexRenderer latex="1+2+\cdots+n+(n+1)=\dfrac{n(n+1)}{2}+(n+1)=\dfrac{(n+1)(n+2)}{2}" />.</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* B.5 Analyse–synthèse */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              B.5. Analyse–synthèse
            </h3>

            <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Principe
              </p>
              <div className="text-black space-y-2">
                <p>1. <em>Analyse</em> : on suppose la solution existante et on en déduit des conditions.</p>
                <p>2. <em>Synthèse</em> : on montre qu'une solution vérifiant ces conditions existe.</p>
              </div>
            </div>

            {/* Exemple */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-sm text-black mb-2">Exemple :</p>
              <p className="text-black mb-3">
                Résoudre <LatexRenderer latex="x^2=4" />.
              </p>
              <div className="text-black space-y-2 ml-4">
                <p>• Analyse : si <LatexRenderer latex="x^2=4" />, alors <LatexRenderer latex="x=\pm 2" />.</p>
                <p>• Synthèse : <LatexRenderer latex="2^2=4" /> et <LatexRenderer latex="(-2)^2=4" />. Donc solutions <LatexRenderer latex="x=2" /> ou <LatexRenderer latex="x=-2" />.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxCoursPage; 