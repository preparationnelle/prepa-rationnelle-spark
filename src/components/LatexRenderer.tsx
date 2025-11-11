import React from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

// Le rendu utilise \limits pour forcer l'affichage des indices au-dessus et en dessous des symboles

interface LatexRendererProps {
  latex: string;
  inline?: boolean;
  block?: boolean;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ latex, inline = false, block = false, className = '' }) => {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: block && !inline,
      output: 'html',
      strict: 'ignore',
      macros: {
        "\\RR": "\\mathbb{R}",
        "\\NN": "\\mathbb{N}",
        "\\ZZ": "\\mathbb{Z}",
        "\\QQ": "\\mathbb{Q}",
        "\\CC": "\\mathbb{C}",
      },
      trust: false,
      minRuleThickness: 0.05,
      maxSize: Infinity,
      maxExpand: 1000,
      fleqn: false,
      leqno: false,
    });
  } catch (e) {
    console.error('Erreur LaTeX:', e, 'pour le contenu:', latex);
    html = `<span style='color:red'>Erreur LaTeX: ${latex}</span>`;
  }
  
  // Si le HTML généré ne contient que du texte sans balises mathématiques, 
  // c'est qu'il y a un problème avec KaTeX
  if (!html.includes('katex') && html === latex) {
    return <span style={{color: 'red'}}>KaTeX non chargé: {latex}</span>;
  }
  
  return (
    <span
      className={`katex-renderer ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default LatexRenderer; 