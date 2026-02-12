
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ChatWidget = () => {
  const location = useLocation();

  // Hide on geopolitique pages where AtlasECGFloatingWidget is shown instead
  if (location.pathname.startsWith('/formation/geopolitique')) return null;

  const handleWhatsAppRedirect = () => {
    const message = "Bonjour, j'ai une question sur la prépa et j'aimerais échanger avec l'équipe Prépa Rationnelle !";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33609164668?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      className="fixed bottom-4 right-4 z-50 shadow-lg flex items-center gap-2 pr-4 bg-green-500 hover:bg-green-600 text-white"
      onClick={handleWhatsAppRedirect}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Une question sur la prépa ? 👇</span>
      <span className="inline sm:hidden">Question ? 👇</span>
    </Button>
  );
};

export default ChatWidget;
