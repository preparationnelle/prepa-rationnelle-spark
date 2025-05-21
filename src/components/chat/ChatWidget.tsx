
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Puzzle } from 'lucide-react';
import AIChatOption from './AIChatOption';
import WhatsAppOption from './WhatsAppOption';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'ai':
        return <AIChatOption onBack={handleReset} />;
      case 'whatsapp':
        return <WhatsAppOption />;
      default:
        return (
          <div className="flex flex-col space-y-3 p-1">
            <h3 className="font-medium text-center mb-2">Comment souhaites-tu recevoir ta réponse ?</h3>
            
            <Button 
              variant="outline" 
              className="justify-start"
              onClick={() => handleOptionSelect('ai')}
            >
              🤖 Poser une question à l'assistant IA
            </Button>
            
            <Button 
              variant="outline" 
              className="justify-start"
              onClick={() => handleOptionSelect('whatsapp')}
            >
              📲 Poser ta question directement sur WhatsApp
            </Button>
          </div>
        );
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          className="fixed bottom-4 right-4 z-50 shadow-lg flex items-center gap-2 pr-4"
          onClick={() => setIsOpen(true)}
        >
          <Puzzle className="h-5 w-5" />
          <span className="hidden sm:inline">Une question sur les oraux ? Pose-la ici 👇</span>
          <span className="inline sm:hidden">Une question ? 👇</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 sm:w-96" side="top" align="end">
        {renderOptionContent()}
      </PopoverContent>
    </Popover>
  );
};

export default ChatWidget;
