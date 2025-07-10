import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MessageCircle, Key, Lock, Loader2 } from 'lucide-react';
import { usePythonAccess } from '@/hooks/usePythonAccess';
import { usePythonModuleAccess } from '@/hooks/usePythonModuleAccess';

interface PythonRestrictedAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleId: number;
  moduleName: string;
}

export const PythonRestrictedAccessModal: React.FC<PythonRestrictedAccessModalProps> = ({ 
  isOpen, 
  onClose, 
  moduleId, 
  moduleName 
}) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { validateAccessCode } = usePythonAccess();
  const { grantModuleAccess } = usePythonModuleAccess();

  const handleWhatsAppClick = async () => {
    const message = encodeURIComponent("Bonjour, je suis intéressé par le module Python. Je souhaiterais obtenir l'accès !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
    
    // Sauvegarder l'accès accordé en base de données après contact WhatsApp
    await grantModuleAccess(moduleId, moduleName, 'WHATSAPP_CONTACT');
    onClose();
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setError('');

    try {
      // Vérifier d'abord si c'est un code d'accès général Python
      try {
        await validateAccessCode(code, email || undefined);
        onClose();
        return;
      } catch (generalError) {
        // Si ce n'est pas un code général, vérifier si c'est un code spécifique au module
        const moduleSpecificCodes = [
          'MATRICES2024',
          'ANALYSE2024', 
          'PROBAS2024',
          'FUNDAMENTALS2024'
        ];

        if (moduleSpecificCodes.includes(code)) {
          // Accorder l'accès spécifiquement à ce module
          const success = await grantModuleAccess(moduleId, moduleName, code);
          if (success) {
            onClose();
            return;
          }
        }
        
        throw generalError;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Code d\'accès invalide');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Lock className="h-6 w-6 text-orange-600" />
            <DialogTitle className="text-xl">Accès restreint - {moduleName}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <Alert>
            <Lock className="h-4 w-4" />
            <AlertDescription>
              Ce module nécessite un accès spécial. Choisissez une option ci-dessous pour continuer.
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Option WhatsApp */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <MessageCircle className="h-5 w-5" />
                  Contacter par WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-600">
                  Contactez notre équipe directement pour obtenir l'accès au module.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ouvrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Option Code d'accès */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Key className="h-5 w-5" />
                  Code d'accès
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email (optionnel)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="code">Code secret *</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Entrez le code d'accès"
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      className="text-center text-lg tracking-wider"
                      maxLength={20}
                      required
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button 
                    type="submit" 
                    disabled={!code.trim() || loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Vérification...
                      </>
                    ) : (
                      <>
                        <Key className="mr-2 h-4 w-4" />
                        Valider le code
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};