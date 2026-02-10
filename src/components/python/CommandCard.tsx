
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface CommandCardProps {
  command: string;
  description: string;
  copiedCommand: string | null;
  onCopy: (command: string) => void;
}

const CommandCard = ({ command, description, copiedCommand, onCopy }: CommandCardProps) => (
  <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:border-emerald-200/50 transition-all duration-300 group flex flex-col h-full">
    <div className="flex justify-between items-start gap-4 mb-3">
      <div className="relative flex-1 group/code">
        <code className="block bg-[#1e1e1e] text-emerald-400 px-3 py-2.5 rounded-lg text-sm font-mono border border-slate-800 shadow-inner overflow-x-auto">
          {command}
        </code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 opacity-0 group-hover:opacity-100 transition-all duration-200"
        onClick={() => onCopy(command)}
      >
        {copiedCommand === command ? (
          <span className="text-emerald-600 text-xs font-bold">✓</span>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
    <div className="flex-1">
      <p className="text-sm text-slate-600 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </div>
);

export default CommandCard;
