
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Clipboard, Key, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type ApiKey = {
  id: string;
  name: string;
  created_at: string;
  last_used?: string | null;
};

export const ApiKeyManager = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [generatingKey, setGeneratingKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
  const [keyDialogOpen, setKeyDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Fetch API keys
  const fetchKeys = async () => {
    if (!currentUser) return;
    
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('api-keys', {
        body: { action: 'list' }
      });

      if (error) throw error;
      setKeys(data.keys || []);
    } catch (error) {
      console.error('Error fetching API keys:', error);
      toast({
        title: "Erreur",
        description: "Impossible de récupérer vos clés API",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Generate a new API key
  const generateNewKey = async () => {
    if (!currentUser) return;
    
    try {
      setGeneratingKey(true);
      const { data, error } = await supabase.functions.invoke('api-keys', {
        body: { 
          action: 'generate',
          name: newKeyName || `Clé API ${new Date().toLocaleDateString('fr-FR')}`
        }
      });

      if (error) throw error;
      
      setNewApiKey(data.key);
      setKeyDialogOpen(true);
      setNewKeyName('');
      fetchKeys(); // Refresh the key list
    } catch (error) {
      console.error('Error generating API key:', error);
      toast({
        title: "Erreur",
        description: "Impossible de générer une nouvelle clé API",
        variant: "destructive"
      });
    } finally {
      setGeneratingKey(false);
    }
  };

  // Revoke an API key
  const revokeKey = async (keyId: string) => {
    if (!currentUser) return;
    
    if (!confirm('Êtes-vous sûr de vouloir révoquer cette clé API ? Cette action est irréversible.')) {
      return;
    }
    
    try {
      const { data, error } = await supabase.functions.invoke('api-keys', {
        body: { 
          action: 'revoke',
          keyId
        }
      });

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "La clé API a été révoquée avec succès",
      });
      fetchKeys(); // Refresh the key list
    } catch (error) {
      console.error('Error revoking API key:', error);
      toast({
        title: "Erreur",
        description: "Impossible de révoquer la clé API",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = () => {
    if (newApiKey) {
      navigator.clipboard.writeText(newApiKey);
      setCopied(true);
      toast({
        title: "Copié !",
        description: "Clé API copiée dans le presse-papier",
      });
      
      setTimeout(() => setCopied(false), 3000);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchKeys();
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p>Vous devez être connecté pour gérer vos clés API.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Générer une nouvelle clé API</CardTitle>
          <CardDescription>
            Les clés API vous permettent d'accéder à nos services depuis des applications externes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Input
              placeholder="Nom de la clé (optionnel)"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={generateNewKey} 
              disabled={generatingKey}
              className="whitespace-nowrap"
            >
              <Key className="mr-2 h-4 w-4" /> Générer une clé API
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={keyDialogOpen} onOpenChange={setKeyDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nouvelle clé API générée</DialogTitle>
            <DialogDescription>
              Copiez votre clé API maintenant. Pour des raisons de sécurité, elle ne sera plus jamais affichée.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                value={newApiKey || ''}
                readOnly
                className="font-mono"
              />
            </div>
            <Button 
              size="icon" 
              variant="outline" 
              onClick={copyToClipboard}
              className={copied ? "text-green-500" : ""}
            >
              <Clipboard className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button 
              variant="default" 
              onClick={() => setKeyDialogOpen(false)}
              className="w-full"
            >
              J'ai copié ma clé
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>Vos clés API</CardTitle>
          <CardDescription>
            Gérez les clés API que vous avez générées. Révoquez les clés qui ne sont plus nécessaires.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Chargement des clés API...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              Vous n'avez pas encore généré de clé API.
            </div>
          ) : (
            <div className="divide-y">
              {keys.map((key) => (
                <div key={key.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{key.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Créée le {format(new Date(key.created_at), 'dd MMM yyyy', { locale: fr })}
                    </p>
                    {key.last_used && (
                      <p className="text-xs text-muted-foreground">
                        Dernière utilisation: {format(new Date(key.last_used), 'dd MMM yyyy HH:mm', { locale: fr })}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-primary/10">
                      {key.id.slice(0, 8)}...
                    </Badge>
                    <Button 
                      size="icon" 
                      variant="destructive"
                      onClick={() => revokeKey(key.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
