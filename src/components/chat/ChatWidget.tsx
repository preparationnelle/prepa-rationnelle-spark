
import React from 'react';
import { Button } from '@/components/ui/button';
import { Puzzle } from 'lucide-react';

const ChatWidget = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/33609164668?text=Bonjour%2C+j%27ai+une+question+sur+les+oraux+Prépa+Rationnelle', '_blank');
  };

  return (
    <Button 
      className="fixed bottom-4 right-4 z-50 premium-button flex items-center gap-2 pr-4 animate-glow"
      onClick={handleWhatsAppRedirect}
    >
      <Puzzle className="h-5 w-5" />
      <span className="hidden sm:inline">Une question sur les oraux ? Pose-la ici 👇</span>
      <span className="inline sm:hidden">Une question ? 👇</span>
    </Button>
  );
};

export default ChatWidget;
