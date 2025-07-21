
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { MobileSearch } from '@/components/search/MobileSearch';
import { LogOut, Menu, X, ChevronDown, FileText, Users, User, BookOpen, Package, Radio, Instagram, Linkedin, GraduationCap, Handshake, BarChart3, Code, Languages, Globe, UserCheck, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const {
    currentUser,
    logout
  } = useAuth();
  const { isProfessor } = useRoleAccess();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const {
    toast
  } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fermer le menu mobile lors du clic sur un lien
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    if (isLoggingOut) return; // Prevent multiple clicks

    setIsLoggingOut(true);
    try {
      console.log("Logging out user:", currentUser?.id);
      await logout();
      console.log("Logout successful, navigating to login page");
      navigate('/login');
    } catch (error) {
      console.error('Logout error in Navigation:', error);
      toast({
        title: "Problème de déconnexion",
        description: "Veuillez réessayer. Si le problème persiste, rafraîchissez la page.",
        variant: "destructive"
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Fonction pour naviguer vers une section spécifique
  const navigateToSection = (path, sectionId) => {
    closeMenu();
    navigate(path);
    // Donner le temps à la page de se charger avant de défiler vers la section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return <header className="bg-background shadow-sm border-b border-border">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src="/lovable-uploads/73c4719b-7030-411f-8d46-20d32035daba.png" alt="Prepa Rationnelle Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition" onClick={closeMenu}>
            Accueil
          </Link>
          
          {/* Menu déroulant "Formations" */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition flex items-center gap-1 focus:outline-none text-sm">
              Formations
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-popover rounded-lg shadow-lg border p-2">
              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-blue-600" />
                  </span>
                  <span>Python</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Languages className="h-4 w-4 text-green-600" />
                  </span>
                  <span>Anglais</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Languages className="h-4 w-4 text-red-600" />
                  </span>
                  <span>Allemand</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-orange-600" />
                  </span>
                  <span>Géopolitique</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-orange-600" />
                  </span>
                  <span>Entretiens de Personnalité</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-2" />

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formations" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </span>
                  <span>Toutes nos formations</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/generator" className="text-foreground hover:text-primary transition text-sm" onClick={closeMenu}>
            Générateur
          </Link>

          <Link to="/apropos" className="text-foreground hover:text-primary transition text-sm" onClick={closeMenu}>
            À propos
          </Link>

          <Link to="/articles" className="text-foreground hover:text-primary transition text-sm" onClick={closeMenu}>
            Conseils / Articles
          </Link>

          <Link to="/contact" className="text-foreground hover:text-primary transition text-sm" onClick={closeMenu}>
            Prendre un rendez-vous
          </Link>

          {/* Search Icon - Desktop */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
                <GlobalSearch />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute top-2 right-2 p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <ThemeToggle variant="icon" />

          {currentUser ? <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-foreground hover:text-primary transition flex items-center gap-2 text-sm" onClick={closeMenu}>
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              {isProfessor && (
                <Link to="/prof" className="text-foreground hover:text-primary transition flex items-center gap-2 text-sm" onClick={closeMenu}>
                  <UserCheck className="h-4 w-4" />
                  Interface Prof
                </Link>
              )}
              <Button variant="outline" size="sm" onClick={() => {
            handleLogout();
            closeMenu();
          }} className="flex items-center" disabled={isLoggingOut}>
                <LogOut className="mr-2 h-4 w-4" /> 
                {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
              </Button>
            </div> : <>
              <Link to="/login" className="text-foreground hover:text-primary transition text-sm" onClick={closeMenu}>
                Connexion
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button>S'inscrire</Button>
              </Link>
            </>}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <MobileSearch />
          <ThemeToggle variant="icon" />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out pt-20", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Accueil
          </Link>

          {/* Menu mobile Formation */}
          <div className="space-y-2 py-2 border-b border-border">
            <h3 className="text-lg font-medium text-primary">Formations</h3>
            <div className="pl-4 flex flex-col space-y-4">
              <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="h-4 w-4 text-blue-600" />
                </span>
                <span>🐍 Python</span>
              </Link>
              
              <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Languages className="h-4 w-4 text-green-600" />
                </span>
                <span>🇬🇧 Anglais</span>
              </Link>

              <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Languages className="h-4 w-4 text-red-600" />
                </span>
                <span>🇩🇪 Allemand</span>
              </Link>

              <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-orange-600" />
                </span>
                <span>🌍 Géopolitique</span>
              </Link>

              <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-orange-600" />
                </span>
                <span>Entretiens de Personnalité</span>
              </Link>

              <Link to="/entretien-inverse-gem" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-purple-600" />
                </span>
                <span>Entretien inversé GEM</span>
              </Link>

              <Link to="/cv-projectif" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </span>
                <span>CV Projectif</span>
              </Link>

              <Link to="/formations" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </span>
                <span>Toutes nos formations</span>
              </Link>
            </div>
          </div>

          <Link to="/generator" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Générateur
          </Link>

          <Link to="/apropos" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            À propos
          </Link>

          <Link to="/articles" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Conseils / Articles
          </Link>

          <Link to="/contact" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Prendre un rendez-vous
          </Link>
          
          {currentUser ? <>
              <Link to="/dashboard" className="text-lg py-2 border-b border-border flex items-center gap-2 text-sm" onClick={closeMenu}>
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              {isProfessor && (
                <Link to="/prof" className="text-lg py-2 border-b border-border flex items-center gap-2 text-sm" onClick={closeMenu}>
                  <UserCheck className="h-4 w-4" />
                  Interface Prof
                </Link>
              )}
              <Button variant="outline" onClick={() => {
            handleLogout();
            closeMenu();
          }} className="mt-4 w-full flex items-center justify-center" disabled={isLoggingOut}>
                <LogOut className="mr-2 h-4 w-4" /> 
                {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
              </Button>
            </> : <>
              <Link to="/login" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
                Connexion
              </Link>
              <Link to="/register" onClick={closeMenu} className="mt-4">
                <Button className="w-full">S'inscrire</Button>
              </Link>
            </>}
        </div>
      </div>
    </header>;
};

export default Navigation;
