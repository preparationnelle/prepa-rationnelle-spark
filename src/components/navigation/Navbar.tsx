import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { MobileSearch } from '@/components/search/MobileSearch';
import { SearchTrigger } from '@/components/search/SearchTrigger';
import { LogOut, Menu, X, ChevronDown, FileText, Users, User, BookOpen, Package, Radio, Instagram, Linkedin, GraduationCap, Handshake, BarChart3, Code, Languages, Globe, UserCheck, Calculator, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import Logo from '@/components/Logo';

export interface NavbarProps {
  showSignup?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showSignup = true }) => {
  const { currentUser, logout } = useAuth();
  const { isProfessor } = useRoleAccess();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScrollProgress);
    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => { 
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      toast({
        title: "Problème de déconnexion",
        description: "Veuillez réessayer. Si le problème persiste, rafraîchissez la page.",
        variant: "destructive"
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Style pour le menu mobile
  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 10000,
    paddingTop: '80px',
    paddingLeft: '20px',
    paddingRight: '20px',
    overflowY: 'auto',
    display: isMenuOpen ? 'block' : 'none'
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-white border-b border-gray-200",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-sm shadow-sm border-b border-blue-100/30"
      )}>
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between min-h-[64px] bg-white">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo size="sm" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Accueil</Link>
            
            {/* Menu déroulant "Formations" */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-1 focus:outline-none px-2 py-1 rounded-md hover:bg-gray-50">
                Formations
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 bg-popover rounded-lg shadow-lg border p-2">
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/formation/maths" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"><Calculator className="h-4 w-4 text-yellow-600" /></span>
                    <span>Maths</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><Code className="h-4 w-4 text-blue-600" /></span>
                    <span>Python</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-green-600" /></span>
                    <span>Anglais</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-red-600" /></span>
                    <span>Allemand</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><Globe className="h-4 w-4 text-orange-600" /></span>
                    <span>Géopolitique</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-orange-600" /></span>
                    <span>Entretiens de Personnalité</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                  <Link to="/formations" onClick={closeMenu} className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><BookOpen className="h-4 w-4 text-primary" /></span>
                    <span>Toutes nos formations</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/generator" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Générateur</Link>
            <Link to="/apropos" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>À propos</Link>
            <Link to="/articles" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Articles</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Contact</Link>
            <Link to="/avis" className="text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>
              <Star className="h-4 w-4 text-yellow-400" />
              Avis
            </Link>
            <SearchTrigger />
            
            {/* Liens réseaux sociaux */}
            <div className="flex items-center space-x-3 ml-4">
              <a 
                href="https://www.instagram.com/prepa_rationnelle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@prepa_rationnelle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            
            <ThemeToggle variant="icon" />
            {currentUser ? (
              <div className="flex items-center space-x-4 ml-4">
                <Link to="/dashboard" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}><BarChart3 className="h-3 w-3" />Dashboard</Link>
                {isProfessor && (
                  <Link to="/prof" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}><UserCheck className="h-3 w-3" />Prof</Link>
                )}
                <Button variant="outline" size="sm" onClick={() => { handleLogout(); closeMenu(); }} className="flex items-center h-8 px-3 text-xs" disabled={isLoggingOut}><LogOut className="mr-1 h-3 w-3" />{isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}</Button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition px-3 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Connexion</Link>
                {showSignup !== false && (
                  <Link to="/register" onClick={closeMenu}><Button size="sm" className="h-8 px-4 text-xs font-medium">S'inscrire</Button></Link>
                )}
              </>
            )}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <MobileSearch />
            <ThemeToggle variant="icon" />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
        
        {/* Barre de progression animée */}
        <div className="fixed top-12 left-0 w-full h-1 bg-gray-100 z-50">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
      </header>
      
      {/* Menu mobile simplifié avec style inline pour éviter les erreurs */}
      <div style={mobileMenuStyle}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeMenu} 
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Menu principal en deux colonnes */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link to="/" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Accueil</Link>
          <Link to="/generator" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Générateur</Link>
          <Link to="/apropos" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>À propos</Link>
          <Link to="/articles" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Articles</Link>
          <Link to="/contact" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Contact</Link>
          <Link to="/avis" className="text-base py-2 border-b border-gray-200 flex items-center gap-2 bg-white px-3 rounded-md" onClick={closeMenu}>
            <Star className="h-4 w-4 text-primary" />
            Avis
          </Link>
        </div>
        
        {/* Titre formations */}
        <h3 className="text-lg font-medium text-primary px-3 mb-3">Formations</h3>
        
        {/* Formations en deux colonnes */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link to="/formation/maths" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Calculator className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Maths</span>
          </Link>
          <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Code className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Python</span>
          </Link>
          <Link to="/formation/anglais" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Languages className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Anglais</span>
          </Link>
          <Link to="/formation/allemand" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Languages className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Allemand</span>
          </Link>
          <Link to="/formation/geopolitique" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Géopolitique</span>
          </Link>
          <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Entretiens</span>
          </Link>
          <Link to="/entretien-inverse-gem" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">GEM inversé</span>
          </Link>
          <Link to="/cv-projectif" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">CV Projectif</span>
          </Link>
        </div>
        
        <div className="mt-4">
          {currentUser ? (
            <div className="grid grid-cols-2 gap-4">
              <Link to="/dashboard" className="text-base py-2 border-b border-gray-200 flex items-center gap-2 bg-white px-3 rounded-md" onClick={closeMenu}>
                <BarChart3 className="h-5 w-5 text-primary" />
                Dashboard
              </Link>
              {isProfessor && (
                <Link to="/prof" className="text-base py-2 border-b border-gray-200 flex items-center gap-2 bg-white px-3 rounded-md" onClick={closeMenu}>
                  <UserCheck className="h-5 w-5 text-primary" />
                  Interface Prof
                </Link>
              )}
              <Button variant="outline" onClick={() => { handleLogout(); closeMenu(); }} className="mt-4 w-full col-span-2">
                <LogOut className="mr-2 h-4 w-4" />
                {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Link to="/login" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Connexion</Link>
              {showSignup !== false && (
                <Link to="/register" onClick={closeMenu} className="mt-0">
                  <Button className="w-full">S'inscrire</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar; 