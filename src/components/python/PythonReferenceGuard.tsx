import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle } from 'lucide-react';

interface PythonReferenceGuardProps {
  children: React.ReactNode;
}

export const PythonReferenceGuard: React.FC<PythonReferenceGuardProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà l'accès
    const referenceAccess = localStorage.getItem('python_reference_access');
    if (referenceAccess === 'granted') {
      setHasAccess(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleWhatsAppRedirect = () => {
    const message = "Je veux gratuitement la liste de toutes les commandes.";
    const phoneNumber = "33609164668"; // Numéro de Dimitar
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Donner l'accès et fermer la modal
    localStorage.setItem('python_reference_access', 'granted');
    setHasAccess(true);
    setShowModal(false);
  };

  // Si l'utilisateur a l'accès, afficher le contenu
  if (hasAccess) {
    return <>{children}</>;
  }

  // Sinon, afficher la modal
  return (
    <>
      {/* Contenu flouté en arrière-plan */}
      <div className="filter blur-sm pointer-events-none">
        {children}
      </div>

      {/* Modal obligatoire */}
      <Dialog open={showModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center space-y-6">
            {/* Icône */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>

            {/* Titre */}
            <h2 className="text-2xl font-bold text-gray-900">
              Accès gratuit aux commandes Python
            </h2>

            {/* Message */}
            <div className="space-y-4">
              <p className="text-gray-600">
                Pour accéder gratuitement à la liste complète des commandes Python, merci de cliquer sur le bouton ci-dessous et d'envoyer ce message WhatsApp :
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-medium text-green-800">
                  "Je veux gratuitement la liste de toutes les commandes."
                </p>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <Button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Discuter avec Dimitar
            </Button>

            {/* Note informative */}
            <p className="text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 inline mr-1" />
              Une fois le message envoyé, l'accès sera débloqué définitivement
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};