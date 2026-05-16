
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <div className="relative w-full group font-instrument">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors group-focus-within:text-carnet-red text-carnet-ink-mute">
      <Search className="h-5 w-5" />
    </div>
    <Input
      placeholder="Rechercher une commande, une fonction..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="pl-12 h-12 rounded-full border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 hover:border-[rgba(193,68,58,0.3)] focus:border-carnet-red transition-colors duration-300 text-base text-carnet-ink font-instrument placeholder:text-carnet-ink-mute"
    />
  </div>
);

export default SearchBar;
