import React from 'react';

interface CarnetCodeBlockProps {
  label?: string;
  language?: string;
  children: string;
  className?: string;
}

const PY_KEYWORDS = new Set([
  'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'not', 'and', 'or',
  'is', 'None', 'True', 'False', 'import', 'from', 'as', 'class', 'try', 'except',
  'finally', 'raise', 'with', 'lambda', 'pass', 'break', 'continue', 'global',
  'nonlocal', 'yield', 'assert', 'del',
]);

const PY_BUILTINS = new Set([
  'print', 'len', 'range', 'int', 'float', 'str', 'list', 'tuple', 'dict', 'set',
  'bool', 'abs', 'min', 'max', 'sum', 'sorted', 'reversed', 'enumerate', 'zip',
  'map', 'filter', 'type', 'isinstance', 'input', 'open', 'round',
]);

const highlightPython = (code: string): React.ReactNode[] => {
  const tokens: React.ReactNode[] = [];
  const regex =
    /(#[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_][A-Za-z_0-9]*\b)|(\s+)|([^\s\w])/g;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(code)) !== null) {
    const [, comment, str, num, ident, ws, sym] = match;
    if (comment) {
      tokens.push(<span key={key++} style={{ color: '#8A7864', fontStyle: 'italic' }}>{comment}</span>);
    } else if (str) {
      tokens.push(<span key={key++} style={{ color: '#E8B97A' }}>{str}</span>);
    } else if (num) {
      tokens.push(<span key={key++} style={{ color: '#E8B97A' }}>{num}</span>);
    } else if (ident) {
      if (PY_KEYWORDS.has(ident)) {
        tokens.push(<span key={key++} style={{ color: '#E8857A', fontWeight: 600 }}>{ident}</span>);
      } else if (PY_BUILTINS.has(ident)) {
        tokens.push(<span key={key++} style={{ color: '#A8C8E8' }}>{ident}</span>);
      } else {
        tokens.push(<span key={key++}>{ident}</span>);
      }
    } else if (ws) {
      tokens.push(<span key={key++}>{ws}</span>);
    } else if (sym) {
      tokens.push(<span key={key++} style={{ color: '#C8B89A' }}>{sym}</span>);
    }
  }
  return tokens;
};

export const CarnetCodeBlock: React.FC<CarnetCodeBlockProps> = ({
  label = 'Code Python',
  language = 'python',
  children,
  className = '',
}) => {
  const code = (children ?? '').replace(/^\n/, '').replace(/\n$/, '');
  const highlighted = language === 'python' ? highlightPython(code) : code;

  return (
    <div className={`relative my-4 ${className}`}>
      <div
        className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[15px] font-semibold z-10"
        style={{ transform: 'rotate(-3deg)' }}
      >
        {label}
      </div>
      <pre
        className="bg-carnet-ink rounded-md p-6 pt-7 overflow-x-auto border border-[rgba(78,55,30,0.25)]"
        style={{
          color: '#FBF6EA',
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        <code>{highlighted}</code>
      </pre>
    </div>
  );
};

export default CarnetCodeBlock;
