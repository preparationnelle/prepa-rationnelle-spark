
import React from 'react';
import CommandCard from './CommandCard';
import { PythonCommand } from '@/data/pythonCommands';

interface CommandSectionProps {
  title: string;
  commands: PythonCommand[];
  copiedCommand: string | null;
  onCopy: (command: string) => void;
}

const CommandSection = ({ title, commands, copiedCommand, onCopy }: CommandSectionProps) => (
  <div className="mb-12 font-instrument">
    <div className="flex items-center gap-3 mb-6 pl-3 border-l-[3px] border-carnet-red">
      <h2 className="font-lora text-2xl text-carnet-ink tracking-tight">{title}</h2>
      <span className="font-instrument inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-2.5 py-1">
        {commands.length}
      </span>
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
