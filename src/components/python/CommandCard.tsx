
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
  <div className="carnet-card p-5 hover:border-carnet-red transition-colors duration-300 group flex flex-col h-full font-instrument">
    <div className="flex justify-between items-start gap-4 mb-3">
      <div className="relative flex-1 group/code">
        <code className="block bg-carnet-ink text-carnet-paper/90 px-3 py-2.5 rounded text-sm font-mono border border-[rgba(78,55,30,0.18)] overflow-x-auto">
          {command}
        </code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-carnet-ink-mute hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] opacity-0 group-hover:opacity-100 transition-all duration-200"
        onClick={() => onCopy(command)}
      >
        {copiedCommand === command ? (
          <span className="text-carnet-red text-xs font-semibold">✓</span>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
    <div className="flex-1">
      <p className="text-sm text-carnet-ink-soft leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default CommandCard;
