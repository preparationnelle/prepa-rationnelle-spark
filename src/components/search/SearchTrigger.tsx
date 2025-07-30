import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlobalSearch } from './GlobalSearch';

export const SearchTrigger = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = (open: boolean) => {
    setIsSearchOpen(open);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSearchClick}
        className="h-8 w-8 text-foreground hover:text-primary"
      >
        <Search className="h-4 w-4" />
      </Button>
      
      <GlobalSearch isOpen={isSearchOpen} onOpenChange={handleSearchClose} />
    </>
  );
};