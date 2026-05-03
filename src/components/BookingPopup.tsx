import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Phone } from 'lucide-react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Réserver un appel avec Dimitar
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Découvrez toutes nos formations avec un appel personnalisé gratuit avec Dimitar, fondateur de Prépa Rationnelle.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Ce que vous découvrirez :
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Présentation complète de nos formations</li>
              <li>• Conseils personnalisés pour votre réussite</li>
              <li>• Réponses à toutes vos questions</li>
              <li>• Plan d'étude adapté à votre niveau</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <a 
              href="https://calendly.com/dimitar-dimitrov-prepa-rationnelle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver maintenant
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingPopup;