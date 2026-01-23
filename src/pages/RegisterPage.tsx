
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
    <div className="min-h-screen flex items-center justify-center bg-accent p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Inscription</CardTitle>
          <CardDescription>
            Créez un compte pour commencer votre préparation
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}


          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sélecteur de profil en premier */}
            <div className="space-y-2">
              <Label htmlFor="profile">Je suis...</Label>
              <Select
                value={profileType}
                onValueChange={(value: ProfileType) => setProfileType(value)}
              >
                <SelectTrigger id="profile">
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent>
                  {PROFILE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Champ téléphone conditionnel - caché pour OTERIA */}
            {requiresPhone && (
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  pattern="^[0-9+\s().-]{6,}$"
                  placeholder="06 12 34 56 78"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={requiresPhone}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
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
              <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Inscription en cours..." : "S'inscrire"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm">
            Vous avez déjà un compte?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Se connecter
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
