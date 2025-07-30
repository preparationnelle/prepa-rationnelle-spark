import React from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

interface LatexRendererProps {
  latex: string;
  block?: boolean;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ latex, block = false, className = '' }) => {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: block,
      output: 'html',
    });
  } catch (e) {
    html = `<span style='color:red'>Erreur LaTeX</span>`;
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default LatexRenderer; 