
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <div className="relative w-full group font-dm-sans">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors group-focus-within:text-pr-orange text-pr-gray-mid">
      <Search className="h-5 w-5" />
    </div>
    <Input
      placeholder="Rechercher une commande, une fonction..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="pl-12 h-12 rounded-full border-pr-gray-light bg-white shadow-sm hover:shadow-md focus:shadow-lg focus:border-pr-orange-soft transition-all duration-300 text-base text-pr-gray-dark"
    />
  </div>
);

export default SearchBar;
