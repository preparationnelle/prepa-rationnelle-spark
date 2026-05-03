
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
  <div className="bg-white rounded-2xl border border-pr-gray-light p-4 hover:shadow-md hover:border-pr-orange-soft transition-all duration-300 group flex flex-col h-full font-dm-sans">
    <div className="flex justify-between items-start gap-4 mb-3">
      <div className="relative flex-1 group/code">
        <code className="block bg-[#1A1A18] text-pr-orange-pale px-3 py-2.5 rounded-lg text-sm font-mono border border-pr-black/40 shadow-inner overflow-x-auto">
          {command}
        </code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-pr-gray-mid hover:text-pr-orange-dark hover:bg-pr-orange-pale opacity-0 group-hover:opacity-100 transition-all duration-200"
        onClick={() => onCopy(command)}
      >
        {copiedCommand === command ? (
          <span className="text-pr-orange-dark text-xs font-bold">✓</span>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
    <div className="flex-1">
      <p className="text-sm text-pr-gray-dark leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default CommandCard;
