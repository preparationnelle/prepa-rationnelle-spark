
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
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
      <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium border-slate-200">
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
