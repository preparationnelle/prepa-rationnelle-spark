import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AtlasECGChatbot } from '@/components/generator/AtlasECGChatbot';
import { useLocation } from 'react-router-dom';

const AtlasECGFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const shouldShow = location.pathname.startsWith('/formation/geopolitique') && location.pathname !== '/formation/geopolitique/atlas-ecg';
  if (!shouldShow) return null;

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/30 p-0 transition-all duration-300 hover:scale-110"
        >
          <Globe className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className={isExpanded
          ? "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          : "fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)]"
        }>
          <div className={isExpanded ? "w-full max-w-5xl h-full max-h-[800px]" : "w-full"}>
            <AtlasECGChatbot
              mode="widget"
              onClose={() => setIsOpen(false)}
              isExpanded={isExpanded}
              onExpand={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AtlasECGFloatingWidget;
