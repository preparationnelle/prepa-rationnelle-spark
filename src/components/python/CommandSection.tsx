
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CommandCard from './CommandCard';
import { PythonCommand } from '@/data/pythonCommands';

interface CommandSectionProps {
  title: string;
  commands: PythonCommand[];
  copiedCommand: string | null;
  onCopy: (command: string) => void;
}

const CommandSection = ({ title, commands, copiedCommand, onCopy }: CommandSectionProps) => (
  <div className="mb-12 font-dm-sans">
    <div className="flex items-center gap-3 mb-6 pl-3 border-l-[3px] border-pr-orange">
      <h2 className="font-dm-serif text-2xl text-pr-black tracking-tight">{title}</h2>
      <Badge variant="secondary" className="bg-pr-orange-pale text-pr-orange-dark border border-pr-orange-soft/40 font-semibold uppercase text-[10px] tracking-[0.12em]">
        {commands.length}
      </Badge>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {commands.map((cmd, index) => (
        <CommandCard
          key={index}
          command={cmd.command}
          description={cmd.description}
          copiedCommand={copiedCommand}
          onCopy={onCopy}
        />
      ))}
    </div>
  </div>
);

export default CommandSection;
