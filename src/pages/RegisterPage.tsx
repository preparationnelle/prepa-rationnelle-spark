
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useWhitelistAccess, isWhitelisted } from '@/hooks/useWhitelistAccess';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff } from 'lucide-react';

// Types de profils disponibles
type ProfileType = 'prepa-ecg' | 'prepa-autre' | 'lycee' | 'parent' | 'oteria' | 'autre' | '';

const PROFILE_OPTIONS = [
  { value: 'prepa-ecg', label: 'Prépa ECG' },
  { value: 'prepa-autre', label: 'Prépa autre' },
  { value: 'lycee', label: 'Lycée' },
  { value: 'parent', label: 'Parent' },
  { value: 'oteria', label: 'OTERIA' },
  { value: 'autre', label: 'Autre' },
];

const RegisterPage = () => {
  const [profileType, setProfileType] = useState<ProfileType>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const { isPythonSection, isMathsSection } = useWhitelistAccess();
  const navigate = useNavigate();
  const location = useLocation();

  // Les étudiants OTERIA n'ont pas besoin de fournir leur téléphone
  const isOteria = profileType === 'oteria';
  const requiresPhone = !isOteria;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation: profil requis
    if (!profileType) {
      setError('Veuillez sélectionner votre profil.');
      return;
    }

    // Validation: champs requis (téléphone optionnel pour OTERIA)
    if (!name || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Téléphone requis seulement pour les non-OTERIA
    if (requiresPhone && !phone) {
      setError('Veuillez renseigner votre numéro de téléphone.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    try {
      setLoading(true);
      // Pour OTERIA, on passe une chaîne vide pour le téléphone
      await register(email, password, name, isOteria ? '' : phone);

      // Récupérer ?next= depuis l'URL pour rediriger vers la page d'origine
      const params = new URLSearchParams(location.search);
      const next = params.get('next');

      if (next && next.startsWith('/')) {
        // Si nous avons une destination spécifique
        if (isPythonSection(next)) {
          // Pour Python : accès libre après inscription
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
      setError(err.message || "Une erreur est survenue lors de l'inscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0f1a] p-4">
      {/* Background Effects - Same as Login */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/10 via-orange-600/5 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 bg-white/10 backdrop-blur-xl border-white/10 shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-white mb-2">Inscription</CardTitle>
          <CardDescription className="text-gray-300">
            Créez un compte pour commencer votre préparation
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded mb-4 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sélecteur de profil en premier */}
            <div className="space-y-2">
              <Label htmlFor="profile" className="text-gray-200">Je suis...</Label>
              <Select
                value={profileType}
                onValueChange={(value: ProfileType) => setProfileType(value)}
              >
                <SelectTrigger id="profile" className="bg-black/20 border-white/10 text-white focus:border-orange-500/50 focus:ring-orange-500/20 [&>span]:text-gray-400 data-[state=open]:border-orange-500/50">
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-white/10">
                  {PROFILE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-gray-200 focus:bg-orange-500/20 focus:text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">Nom complet</Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20"
              />
            </div>

            {/* Champ téléphone conditionnel - caché pour OTERIA */}
            {requiresPhone && (
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  pattern="^[0-9+\s().-]{6,}$"
                  placeholder="06 12 34 56 78"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={requiresPhone}
                  className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full text-gray-400 hover:text-white hover:bg-transparent"
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
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-200">Confirmer le mot de passe</Label>
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50 focus:ring-orange-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-0 shadow-lg shadow-orange-500/20 transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Inscription en cours...</span>
                </div>
              ) : "S'inscrire"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col border-t border-white/5 pt-6 mt-2">
          <div className="text-center text-sm text-gray-400">
            Vous avez déjà un compte?{' '}
            <Link to="/login" className="text-orange-400 hover:text-orange-300 font-medium hover:underline transition-colors">
              Se connecter
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
