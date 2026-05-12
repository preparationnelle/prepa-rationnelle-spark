
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { isWhitelisted, useWhitelistAccess } from '@/hooks/useWhitelistAccess';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { isPythonSection, isMathsSection } = useWhitelistAccess();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);

      // Attendre que l'état utilisateur soit bien disponible
      let tries = 0;
      let userReady = false;
      while (tries < 10 && !userReady) {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
          userReady = true;
          break;
        }
        await new Promise(r => setTimeout(r, 100));
        tries += 1;
      }

      // Récupérer ?next= depuis l'URL
      const params = new URLSearchParams(location.search);
      const next = params.get('next');

      if (next && next.startsWith('/')) {
        // Si nous avons une destination spécifique
        if (isPythonSection(next)) {
          // Pour Python : accès libre après connexion
          navigate(next, { replace: true });
        } else if (isMathsSection(next)) {
          // Pour Maths : vérifier la liste blanche
          const normalizedEmail = email.trim().toLowerCase();
          const hasAccess = isWhitelisted(normalizedEmail);

          if (hasAccess) {
            navigate(next, { replace: true });
          } else {
            navigate(`/acces-restreint?next=${encodeURIComponent(next)}&section=maths`, { replace: true });
          }
        } else {
          // Pour les autres pages, redirection directe
          navigate(next, { replace: true });
        }
      } else {
        // Pas de destination spécifique → rediriger vers l'accueil
        navigate('/', { replace: true });
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-8rem)] py-12 px-4">

      <Card className="w-full max-w-md relative z-10 bg-carnet-paper-2 border-carnet-red/20 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-carnet-ink mb-2 font-serif">Bon retour</CardTitle>
          <CardDescription className="text-carnet-ink-soft">
            Entrez vos identifiants pour accéder à votre espace
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-carnet-red/10 border border-carnet-red/30 text-carnet-red-deep p-3 rounded mb-4 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-carnet-ink">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-carnet-rule/40 text-carnet-ink placeholder:text-carnet-ink-mute focus:border-pr-black/50 focus:ring-pr-black/20"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-carnet-ink">Mot de passe</Label>
                <Link to="/forgot-password" className="text-sm text-pr-black hover:text-pr-black hover:underline transition-colors">
                  Mot de passe oublié?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white border-carnet-rule/40 text-carnet-ink placeholder:text-carnet-ink-mute focus:border-pr-black/50 focus:ring-pr-black/20 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full text-carnet-ink-mute hover:text-white hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-pr-black hover:bg-pr-black-dark text-white border-0 shadow-lg shadow-pr-orange/20 transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Connexion...</span>
                </div>
              ) : "Se connecter"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col border-t border-carnet-rule/30 pt-6 mt-2">
          <div className="text-center text-sm text-carnet-ink-mute">
            Vous n'avez pas de compte?{' '}
            <Link to="/register" className="text-pr-black hover:text-pr-black font-medium hover:underline transition-colors">
              S'inscrire
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
