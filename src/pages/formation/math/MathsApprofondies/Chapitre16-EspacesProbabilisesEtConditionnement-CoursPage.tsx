
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsProbabilitesUniversPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={16}
      chapterTitle="Espaces probabilisés & conditionnement"
      description="Axiomes et espaces probabilisés ; opérations sur les probabilités (crible, propriétés, équiprobabilité) ; probabilités composées et totales, formule de Bayes ; indépendance (paire et mutuelle) ; théorèmes de limite monotone (croissante/décroissante)"
    
      
    >
      {/* Section 1: Espaces probabilisés et événements */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            1. Espaces probabilisés et événements
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions fondamentales</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                Une <em>épreuve aléatoire</em> a un univers <span className="inline-block align-middle"><LatexRenderer latex="\Omega" /></span> d'issues possibles
              </li
      
    >
              <li
      
    >
                Un <em>système d'événements</em> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{A} \subset \mathcal{P}(\Omega)" /></span> satisfait :
                <ul className="list-disc list-inside ml-6 mt-2"
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\Omega \in \mathcal{A}" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="A \in \mathcal{A} \Rightarrow A^{\complement} \in \mathcal{A}" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\bigcup_{k \in I} A_k \in \mathcal{A}" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="(A_k)_{k \in I} \subset \mathcal{A}" /></span></li
      
    >
                </ul
      
    >
              </li
      
    >
              <li
      
    >
                Événements particuliers :
                <ul className="list-disc list-inside ml-6 mt-2"
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\Omega" /></span> (certain)</li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\varnothing" /></span> (impossible)</li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\{\omega\}" /></span> (élémentaire)</li
      
    >
                </ul
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3
      
    >
            <div className="space-y-4"
      
    >
              <div
      
    >
                <p className="font-medium mb-2">Limite monotone (croissante)</p
      
    >
                <div className="my-4 flex justify-center"
      
    >
                  <LatexRenderer latex="\mathbb{P}\!\left(\bigcup_{k=0}^{\infty} A_k\right) = \lim_{n \to \infty} \mathbb{P}(A_n)" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <p className="font-medium mb-2">Limite monotone (décroissante)</p
      
    >
                <div className="my-4 flex justify-center"
      
    >
                  <LatexRenderer latex="\mathbb{P}\!\left(\bigcap_{k=0}^{\infty} A_k\right) = \lim_{n \to \infty} \mathbb{P}(A_n)" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 2: Probabilités et opérations */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            2. Probabilités et opérations
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions et formules</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                <strong>Formule du crible</strong> :
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                Une <em>probabilité</em> <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}: \mathcal{A} \to [0, 1]" /></span> satisfait :
                <ul className="list-disc list-inside ml-6 mt-2"
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\Omega) = 1" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}\!\left(\bigcup_{i \in I} A_i\right) = \sum_{i \in I} \mathbb{P}(A_i)" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="(A_i)" /></span> incompatibles</li
      
    >
                </ul
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Équiprobabilité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\Omega" /></span> fini et <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\{\omega\}) = \frac{1}{|\Omega|}" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(A) = \frac{|A|}{|\Omega|}" /></span
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                <strong>Propriétés</strong> :
                <ul className="list-disc list-inside ml-6 mt-2"
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(A^{\complement}) = 1 - \mathbb{P}(A)" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(\varnothing) = 0" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="0 \le \mathbb{P}(A) \le 1" /></span></li
      
    >
                  <li><span className="inline-block align-middle"><LatexRenderer latex="A \subset B \Rightarrow \mathbb{P}(A) \le \mathbb{P}(B)" /></span></li
      
    >
                </ul
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 3: Conditionnement et indépendance */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            3. Conditionnement et indépendance
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                <strong>Probabilité conditionnelle</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(B) > 0" /></span
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Indépendance</strong> : Deux événements <span className="inline-block align-middle"><LatexRenderer latex="A, B" /></span> sont indépendants si
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}(A \cap B) = \mathbb{P}(A) \mathbb{P}(B)" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Indépendance mutuelle</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="(E_k)_{k \in I}" /></span
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}\!\left(\bigcap_{j=1}^{k} E_{i_j}\right) = \prod_{j=1}^{k} \mathbb{P}(E_{i_j})" /
      
    >
                </div
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Formules essentielles</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                <strong>Probabilités composées</strong> :
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}\!\left(\bigcap_{k=1}^{n} A_k\right) = \mathbb{P}(A_1) \mathbb{P}_{A_1}(A_2) \mathbb{P}_{A_1 \cap A_2}(A_3) \cdots \mathbb{P}_{A_1 \cap \dots \cap A_{n-1}}(A_n)" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Probabilités totales</strong> :
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}(C) = \sum_{k \in I} \mathbb{P}(B_k) \mathbb{P}_{B_k}(C)" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Formule de Bayes</strong> :
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\mathbb{P}_B(A) = \frac{\mathbb{P}(A) \mathbb{P}_A(B)}{\mathbb{P}(B)}" /
      
    >
                </div
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >
    </MathChapterTemplate
      
    >
  );
};

export default MathsProbabilitesUniversPage;
