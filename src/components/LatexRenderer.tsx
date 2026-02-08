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
  // Config for KaTeX
  const katexConfig = {
    throwOnError: false,
    output: 'html' as 'html',
    strict: 'ignore',
    macros: {
      "\\RR": "\\mathbb{R}",
      "\\NN": "\\mathbb{N}",
      "\\ZZ": "\\mathbb{Z}",
      "\\QQ": "\\mathbb{Q}",
      "\\CC": "\\mathbb{C}",
    },
    trust: false,
  };

  const renderMathToString = (math: string, isBlock: boolean) => {
    try {
      return katex.renderToString(math, {
        ...katexConfig,
        displayMode: isBlock,
      });
    } catch (e) {
      console.error('Erreur LaTeX:', e, 'pour le contenu:', math);
      return `<span style="color:red">Erreur: ${math}</span>`;
    }
  };

  // If the content doesn't contain $, we assume it's pure LaTeX if block/inline props are set,
  // or if it's acting as a legacy math renderer.
  // However, specifically to fix the issue where text is passed but treated as math,
  // we should be careful. 
  // If it's pure math (no text), it usually won't have spaces (except inside \text{}).
  // But to be safe and backward compatible with existing valid usage:
  if (!latex.includes('$')) {
    // If no $ delimiters, check if it looks like LaTeX (has backslashes or command symbols)
    // Otherwise treat as plain text to avoid stripping spaces in sentences
    const isLatexCommand = /[\\^_{}]/.test(latex);

    if (!isLatexCommand) {
      return <span className={className}>{latex}</span>;
    }

    // Default behavior: render as math if it looks like latex
    const html = renderMathToString(latex, block || (!inline && !block ? false : block));

    // Check if it rendered to something valid (not just the string itself, though katex usually outputs HTML)
    return (
      <span
        className={`katex-renderer ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Mixed content parsing
  // Split by $$...$$ or $...$
  // Regex captures separators so they are included in the result
  const parts = latex.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g);

  return (
    <span className={`katex-renderer ${className}`}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math
          const content = part.slice(2, -2);
          const html = renderMathToString(content, true);
          return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math
          const content = part.slice(1, -1);
          const html = renderMathToString(content, false);
          return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
        } else {
          // Text content
          if (!part) return null;
          return <span key={index}>{part}</span>;
        }
      })}
    </span>
  );
};

export default LatexRenderer;