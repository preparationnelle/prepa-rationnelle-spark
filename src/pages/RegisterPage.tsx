
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
    <div className="relative flex items-center justify-center min-h-[calc(100vh-8rem)] py-12 px-4 p-4">

      <Card className="w-full max-w-md relative z-10 bg-carnet-paper-2 border-carnet-red/20 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-carnet-ink mb-2 font-serif">Inscription</CardTitle>
          <CardDescription className="text-carnet-ink-soft">
            Créez un compte pour commencer votre préparation
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
            {/* Sélecteur de profil en premier */}
            <div className="space-y-2">
              <Label htmlFor="profile" className="text-carnet-ink">Je suis...</Label>
              <Select
                value={profileType}
                onValueChange={(value: ProfileType) => setProfileType(value)}
              >
                <SelectTrigger id="profile" className="bg-white border-carnet-rule/40 text-carnet-ink focus:border-pr-black/50 focus:ring-pr-black/20 [&>span]:text-carnet-ink-mute data-[state=open]:border-pr-black/50">
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-white/10">
                  {PROFILE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-carnet-ink focus:bg-pr-black/20 focus:text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-carnet-ink">Nom complet</Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white border-carnet-rule/40 text-carnet-ink placeholder:text-carnet-ink-mute focus:border-pr-black/50 focus:ring-pr-black/20"
              />
            </div>

            {/* Champ téléphone conditionnel - caché pour OTERIA */}
            {requiresPhone && (
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-carnet-ink">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  pattern="^[0-9+\s().-]{6,}$"
                  placeholder="06 12 34 56 78"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={requiresPhone}
                  className="bg-white border-carnet-rule/40 text-carnet-ink placeholder:text-carnet-ink-mute focus:border-pr-black/50 focus:ring-pr-black/20"
                />
              </div>
            )}
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
              <Label htmlFor="password" className="text-carnet-ink">Mot de passe</Label>
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
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-carnet-ink">Confirmer le mot de passe</Label>
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-white border-carnet-rule/40 text-carnet-ink placeholder:text-carnet-ink-mute focus:border-pr-black/50 focus:ring-pr-black/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-pr-black hover:bg-pr-black-dark text-white border-0 shadow-lg shadow-pr-orange/20 transition-all duration-300"
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
        <CardFooter className="flex flex-col border-t border-carnet-rule/30 pt-6 mt-2">
          <div className="text-center text-sm text-carnet-ink-mute">
            Vous avez déjà un compte?{' '}
            <Link to="/login" className="text-pr-black hover:text-pr-black font-medium hover:underline transition-colors">
              Se connecter
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
