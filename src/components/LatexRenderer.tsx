import React from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

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
      strict: false,
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