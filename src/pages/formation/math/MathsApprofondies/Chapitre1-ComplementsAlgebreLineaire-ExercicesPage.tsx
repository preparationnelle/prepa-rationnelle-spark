import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen, Eye, EyeOff, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Chapitre1ComplementsAlgebreLineaireExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const downloadExercisesPDF = async () => {
    try {
      // Créer un élément temporaire avec tout le contenu des exercices (incluant les corrections)
      const exercisesContent = document.querySelector('.exercises-content');
      if (!exercisesContent) return;

      // Créer un clone pour éviter de modifier le DOM original
      const clone = exercisesContent.cloneNode(true) as HTMLElement;

      // Supprimer les boutons d'affichage/masquage des corrections du clone
      const correctionButtons = clone.querySelectorAll('[data-correction-button]');
      correctionButtons.forEach(button => button.remove());

      // Afficher TOUTES les sections de corrections dans le clone (au lieu de les masquer)
      const corrections = clone.querySelectorAll('[data-correction]');
      corrections.forEach(correction => {
        (correction as HTMLElement).style.display = 'block';
      });

      // Ajouter le clone au body temporairement
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.width = '800px';
      clone.style.backgroundColor = 'white';
      clone.style.padding = '40px';
      clone.style.fontFamily = 'Arial, sans-serif';
      document.body.appendChild(clone);

      // Générer le canvas
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 800,
        height: clone.offsetHeight
      });

      // Supprimer le clone
      document.body.removeChild(clone);

      // Créer le PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Calculer les dimensions pour adapter l'image au PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30; // Laisser de l'espace en haut pour le titre

      // Ajouter un titre
      pdf.setFontSize(20);
      pdf.text('Chapitre 1 : Compléments d\'algèbre linéaire - Exercices & Corrigés', pdfWidth / 2, 20, { align: 'center' });

      // Ajouter l'image
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

      // Ajouter le filigrane "PREPA RATIONNELLE" au centre, plus petit
      pdf.saveGraphicsState();
      pdf.setTextColor(150, 150, 150); // Gris plus clair et subtil
      pdf.setFontSize(30); // Taille réduite de 60 à 30

      // Positionnement au centre exact du PDF
      const centerX = pdfWidth / 2;
      const centerY = pdfHeight / 2;
      pdf.text('PREPA RATIONNELLE', centerX, centerY, {
        align: 'center',
        angle: 45
      });

      pdf.restoreGraphicsState();

      // Télécharger le PDF
      pdf.save('Chapitre1_Complements_Algebre_Lineaure_Exercices_Corriges.pdf');

    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors de la génération du PDF.');
    }
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
            <Link to="/formations" className="hover:text-blue-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-blue-700 transition-colors">
              Choix parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-approfondies-2e-annee" className="hover:text-blue-700 transition-colors">
              Maths Approfondies - 2ème année
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-orange-600 font-medium">Chapitre 1 : Compléments d'algèbre linéaire - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-8">Chapitre 1 : Compléments d'algèbre linéaire - Exercices</h1>
          <p className="text-lg text-gray-600 mb-8">
            Endomorphismes, matrices de passage et propriétés de la trace
          </p>

          <div className="flex justify-center gap-6 mb-6">
            <Link to="/formation/maths-complements-algebre-lineaire">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
            <Button
              onClick={downloadExercisesPDF}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger PDF
            </Button>
          </div>
        </div>

        <div className="exercises-content">

        {/* Exercice 1 - Polynômes de Lagrange et matrice de passage */}
        <Card className="mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Exercice 1 : Polynômes de Lagrange et matrice de passage (HEC 2017)</h3>

            <div className="mb-6">
              <LatexRenderer latex={"\\text{Soient } n \\geq 1 \\text{ et } x_0, x_1, \\ldots, x_n \\text{ des réels deux à deux distincts.}"} />
              <LatexRenderer latex={"\\text{On note } \\mathcal{C} \\text{ la base canonique de } \\mathbb{R}_n[X]."} />
              <br />
              <LatexRenderer latex={"\\text{Pour } i \\in \\llbracket 0,n \\rrbracket, \\text{ on note}"} />
              <div className="text-center my-4">
                <LatexRenderer latex={"L_i = \\prod_{k=0, k \\neq i}^{n} \\frac{X - x_k}{x_i - x_k}."} block />
              </div>
              <LatexRenderer latex={"\\text{On admet que } \\mathcal{B} = (L_0, L_1, \\ldots, L_n) \\text{ est une base de } \\mathbb{R}_n[X]."} />

              <ol className="list-decimal list-inside space-y-2 pl-4 mt-4">
                <li>
                  <LatexRenderer latex={"\\text{Déterminer } L_i(x_j) \\text{ pour } (i,j) \\in \\llbracket 0,n \\rrbracket^2."} />
                </li>
                <li>
                  <LatexRenderer latex={"\\text{Expliciter la matrice de passage de } \\mathcal{B} \\text{ à } \\mathcal{C}."} />
                </li>
              </ol>
            </div>

            <Button
              data-correction-button
              onClick={() => toggleCorrection('1')}
              variant={visibleCorrections['1'] ? "secondary" : "default"}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium"
            >
              {visibleCorrections['1'] ? "Masquer la correction" : "Afficher la correction"}
            </Button>

            {visibleCorrections['1'] && (
              <div data-correction className="mt-6 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Corrigé détaillé</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-700 font-semibold">
                      <LatexRenderer latex={"\\text{1) Calcul de } L_i(x_j)"} />
                    </div>
                    <br />
                    <LatexRenderer latex={"\\text{Soit } (i,j) \\in (\\llbracket 0,n \\rrbracket)^2."} />
                    <br />
                    <div className="text-gray-600 font-semibold">
                      <LatexRenderer latex={"\\text{Cas 1 : } i = j."} />
                    </div>
                    <div className="text-center my-4">
                      <LatexRenderer latex={"L_i(x_i) = \\prod_{k=0, k \\neq i}^{n} \\frac{x_i - x_k}{x_i - x_k} = \\prod_{k=0, k \\neq i}^{n} 1 = 1."} block />
                    </div>
                    <div className="text-gray-600 font-semibold">
                      <LatexRenderer latex={"\\text{Cas 2 : } i \\neq j."} />
                    </div>
                    <div className="text-center my-4">
                      <LatexRenderer latex={"L_i(x_j) = \\prod_{k=0, k \\neq i}^{n} \\frac{x_j - x_k}{x_i - x_k} = \\frac{x_j - x_j}{x_i - x_j} \\prod_{\\substack{k=0 \\\\ k \\neq i, k \\neq j}}^{n} \\frac{x_j - x_k}{x_i - x_k} = 0."} block />
                    </div>
                    <LatexRenderer latex={"\\text{Donc : } \\forall (i,j) \\in (\\llbracket 0,n \\rrbracket)^2, \\quad L_i(x_j) = \\begin{cases} 1 & \\text{si } i = j, \\\\ 0 & \\text{si } i \\neq j. \\end{cases}"} />
                  </div>

                  <div>
                    <div className="text-gray-700 font-semibold">
                      <LatexRenderer latex={"\\text{2) Matrice de passage}"} />
                    </div>
                    <br />
                    <LatexRenderer latex={"\\text{Soit } P \\in \\mathbb{R}_n[X]. \\text{ Comme } (L_0, \\ldots, L_n) \\text{ est une base de } \\mathbb{R}_n[X],"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"\\exists (a_0, \\ldots, a_n) \\in \\mathbb{R}^{n+1}, \\quad P = \\sum_{i=0}^n a_i L_i."} block />
                    </div>
                    <LatexRenderer latex={"\\text{Pour } j \\in \\llbracket 0,n \\rrbracket,"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"P(x_j) = \\sum_{i=0}^n a_i L_i(x_j) = a_j."} block />
                    </div>
                    <LatexRenderer latex={"\\text{Ainsi, } \\forall j \\in \\llbracket 0,n \\rrbracket, \\quad a_j = P(x_j)."} />
                    <br />
                    <LatexRenderer latex={"\\text{Posons } P = X^k \\text{ avec } k \\in \\llbracket 0,n \\rrbracket. \\text{ Alors :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"X^k = \\sum_{i=0}^n x_i^k L_i."} block />
                    </div>
                    <LatexRenderer latex={"\\text{Ainsi, la matrice de passage de } \\mathcal{B} \\text{ à } \\mathcal{C} \\text{ est :}"} />
                    <div className="text-center my-4">
                      <LatexRenderer latex={"P_{\\mathcal{B},\\mathcal{C}} = \\begin{pmatrix} 1 & x_0 & x_0^2 & \\cdots & x_0^n \\\\ 1 & x_1 & x_1^2 & \\cdots & x_1^n \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & x_n & x_n^2 & \\cdots & x_n^n \\end{pmatrix}."} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 2 - Endomorphisme et matrice représentative */}
        <Card className="mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Exercice 2 : Endomorphisme et matrice représentative (EM Lyon 2018)</h3>

            <div className="mb-6">
              <LatexRenderer latex={"\\text{Soit } n \\geq 2. \\text{ Soit } \\varphi \\in \\mathcal{L}(\\mathbb{R}_n[X]) \\text{ définie par :}"} />
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall P \\in \\mathbb{R}_n[X], \\quad \\varphi(P) = \\frac{1}{n} X(1 - X) P' + X P."} />
              </div>
              <LatexRenderer latex={"\\text{Déterminer sa matrice représentative } A \\text{ dans la base canonique } \\mathcal{C} \\text{ de } \\mathbb{R}_n[X]."} />
            </div>

            <Button
              data-correction-button
              onClick={() => toggleCorrection('2')}
              variant={visibleCorrections['2'] ? "secondary" : "default"}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium"
            >
              {visibleCorrections['2'] ? "Masquer la correction" : "Afficher la correction"}
            </Button>

            {visibleCorrections['2'] && (
              <div data-correction className="mt-6 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Corrigé détaillé</h4>
                <div className="space-y-4">
                  <LatexRenderer latex={"\\text{Calculons } \\varphi \\text{ sur la base canonique :}"} />
                  <br />
                  <LatexRenderer latex={"\\text{Si } P = 1, P' = 0, \\text{ donc}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\varphi(1) = \\tfrac{1}{n} X(1 - X) \\cdot 0 + X \\cdot 1 = X."} />
                  </div>
                  <LatexRenderer latex={"\\text{Si } P = X^n, P' = n X^{n-1}, \\text{ donc}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\varphi(X^n) = \\tfrac{1}{n} X(1 - X) n X^{n-1} + X \\cdot X^n = X^n."} />
                  </div>
                  <LatexRenderer latex={"\\text{Si } P = X^k \\text{ avec } k \\in [\\![1,n-1]\\!],"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\varphi(X^k) = \\tfrac{k}{n} X^k - \\tfrac{k}{n} X^{k+1} + X^{k+1} = \\tfrac{k}{n} X^k + \\tfrac{n-k}{n} X^{k+1}."} />
                  </div>
                  <LatexRenderer latex={"\\text{Donc la matrice de } \\varphi \\text{ dans } \\mathcal{C} \\text{ est :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"A = \\begin{pmatrix} 0 & 0 & 0 & \\cdots & 0 \\\\ 1 & \\tfrac{1}{n} & 0 & \\cdots & 0 \\\\ 0 & \\tfrac{n-1}{n} & \\tfrac{2}{n} & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & \\cdots & & \\tfrac{1}{n} & 1 \\end{pmatrix}."} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Exercice 3 - Propriété de la trace */}
        <Card className="mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Exercice 3 : Propriété de la trace (EM Lyon 2013)</h3>

            <div className="mb-6">
              <LatexRenderer latex={"\\text{Montrer que } \\forall (A,B) \\in \\mathcal{M}_n(\\mathbb{R})^2, \\ \\mathrm{Tr}(AB) = \\mathrm{Tr}(BA)."} />
            </div>

            <Button
              data-correction-button
              onClick={() => toggleCorrection('3')}
              variant={visibleCorrections['3'] ? "secondary" : "default"}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium"
            >
              {visibleCorrections['3'] ? "Masquer la correction" : "Afficher la correction"}
            </Button>

            {visibleCorrections['3'] && (
              <div data-correction className="mt-6 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Corrigé détaillé</h4>
                <div className="space-y-4">
                  <LatexRenderer latex={"\\text{Soient } A \\text{ et } B \\text{ deux matrices de } \\mathcal{M}_n(\\mathbb{R})."} />
                  <LatexRenderer latex={"\\text{On pose } C = AB \\text{ et } D = BA."} />
                  <br />
                  <LatexRenderer latex={"\\text{On note :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"A = (a_{i,j})_{1 \\leq i,j \\leq n}, \\quad B = (b_{i,j})_{1 \\leq i,j \\leq n}, \\quad C = (c_{i,j})_{1 \\leq i,j \\leq n}, \\quad D = (d_{i,j})_{1 \\leq i,j \\leq n}."} />
                  </div>
                  <LatexRenderer latex={"\\text{Par la formule du produit de matrices :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"c_{i,j} = \\sum_{k=1}^n a_{i,k} b_{k,j}, \\quad d_{i,j} = \\sum_{k=1}^n b_{i,k} a_{k,j}."} block />
                  </div>
                  <LatexRenderer latex={"\\text{Donc :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\mathrm{Tr}(AB) = \\sum_{i=1}^n c_{i,i} = \\sum_{i=1}^n \\sum_{k=1}^n a_{i,k} b_{k,i}."} block />
                  </div>
                  <LatexRenderer latex={"\\text{Or par symétrie :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\mathrm{Tr}(BA) = \\sum_{i=1}^n d_{i,i} = \\sum_{i=1}^n \\sum_{k=1}^n b_{i,k} a_{k,i}."} block />
                  </div>
                  <LatexRenderer latex={"\\text{En réindexant la dernière somme (en échangeant } i \\text{ et } k\\text{) :}"} />
                  <div className="text-center my-4">
                    <LatexRenderer latex={"\\mathrm{Tr}(BA) = \\sum_{k=1}^n \\sum_{i=1}^n b_{k,i} a_{i,k} = \\sum_{i=1}^n \\sum_{k=1}^n a_{i,k} b_{k,i} = \\mathrm{Tr}(AB)."} block />
                  </div>
                  <LatexRenderer latex={"\\text{Donc } \\mathrm{Tr}(AB) = \\mathrm{Tr}(BA)."} />
                </div>
              </div>
            )}
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Chapitre1ComplementsAlgebreLineaireExercicesPage;
