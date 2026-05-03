
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useSearch } from '@/hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { searchCategories } from '@/data/searchData';

interface GlobalSearchProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const GlobalSearch = ({ isOpen: controlledOpen, onOpenChange }: GlobalSearchProps = {}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const { searchTerm, setSearchTerm, resultsByCategory } = useSearch();
  const navigate = useNavigate();

  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  const handleSelect = (url: string) => {
    navigate(url);
    setOpen(false);
    setSearchTerm('');
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Méthodologie': '📚',
      'Formation': '🎓',
      'Écoles': '🏫',
      'Questions': '❓',
      'Générateurs': '🤖',
      'Services': '💼',
      'Informations': 'ℹ️'
    };
    return icons[category as keyof typeof icons] || '📄';
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Rechercher des cours, écoles, questions..." 
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>
            <div className="text-center py-6">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground">
                {searchTerm ? "Aucun résultat trouvé." : "Tapez pour rechercher du contenu..."}
              </p>
            </div>
          </CommandEmpty>
          
          {Object.entries(resultsByCategory).map(([category, results]) => (
            <CommandGroup key={category} heading={`${getCategoryIcon(category)} ${category}`}>
              {results.slice(0, 5).map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.title}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
  );
};
