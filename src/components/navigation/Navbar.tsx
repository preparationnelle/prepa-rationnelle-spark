import React, { useState } from 'react';
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
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => { if (isMenuOpen) setIsMenuOpen(false); };
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

  return (
    <header className="shadow-sm border-b border-blue-100/30" style={{ backgroundColor: '#FAFCFF' }}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo size="sm" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>Accueil</Link>
          {/* Menu déroulant "Formations" */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-foreground hover:text-primary transition flex items-center gap-1 focus:outline-none">
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
          <Link to="/generator" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>Générateur</Link>
          <Link to="/apropos" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>À propos</Link>
          <Link to="/articles" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>Articles</Link>
          <Link to="/contact" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>Contact</Link>
          <Link to="/avis" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}>
            <Star className="h-4 w-4 text-yellow-400" />
            Avis
          </Link>
          <SearchTrigger />
          
          {/* Liens réseaux sociaux */}
          <div className="flex items-center space-x-2">
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
            <div className="flex items-center space-x-3">
              <Link to="/dashboard" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}><BarChart3 className="h-3 w-3" />Dashboard</Link>
              {isProfessor && (
                <Link to="/prof" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}><UserCheck className="h-3 w-3" />Prof</Link>
              )}
              <Button variant="outline" size="sm" onClick={() => { handleLogout(); closeMenu(); }} className="flex items-center h-8 px-3 text-xs" disabled={isLoggingOut}><LogOut className="mr-1 h-3 w-3" />{isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}</Button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm text-foreground hover:text-primary transition" onClick={closeMenu}>Connexion</Link>
              {showSignup !== false && (
                <Link to="/register" onClick={closeMenu}><Button size="sm" className="h-8 px-3 text-xs">S'inscrire</Button></Link>
              )}
            </>
          )}
        </div>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <MobileSearch />
          <ThemeToggle variant="icon" />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
        </div>
      </nav>
      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out pt-20", isMenuOpen ? "translate-x-0" : "translate-x-full")}> <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg py-2 border-b border-border" onClick={closeMenu}>Accueil</Link>
          {/* Menu mobile Formation */}
          <div className="space-y-2 py-2 border-b border-border">
            <h3 className="text-lg font-medium text-primary">Formations</h3>
            <div className="pl-4 flex flex-col space-y-4">
              <Link to="/formation/maths" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"><Calculator className="h-4 w-4 text-yellow-600" /></span><span>🧮 Maths</span></Link>
              <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><Code className="h-4 w-4 text-blue-600" /></span><span>🐍 Python</span></Link>
              <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-green-600" /></span><span>🇬🇧 Anglais</span></Link>
              <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-red-600" /></span><span>🇩🇪 Allemand</span></Link>
              <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><Globe className="h-4 w-4 text-orange-600" /></span><span>🌍 Géopolitique</span></Link>
              <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-orange-600" /></span><span>Entretiens de Personnalité</span></Link>
              <Link to="/entretien-inverse-gem" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-purple-600" /></span><span>Entretien inversé GEM</span></Link>
              <Link to="/cv-projectif" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><FileText className="h-4 w-4 text-blue-600" /></span><span>CV Projectif</span></Link>
              <Link to="/formations" onClick={closeMenu} className="flex items-center gap-3"><span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><BookOpen className="h-4 w-4 text-primary" /></span><span>Toutes nos formations</span></Link>
            </div>
          </div>
          <Link to="/generator" className="text-lg py-2 border-b border-border" onClick={closeMenu}>Générateur</Link>
          <Link to="/apropos" className="text-lg py-2 border-b border-border" onClick={closeMenu}>À propos</Link>
          <Link to="/articles" className="text-lg py-2 border-b border-border" onClick={closeMenu}>Conseils / Articles</Link>
          <Link to="/contact" className="text-lg py-2 border-b border-border" onClick={closeMenu}>Prendre un rendez-vous</Link>
          <Link to="/avis" className="text-lg py-2 border-b border-border flex items-center gap-2" onClick={closeMenu}>
            <Star className="h-5 w-5 text-yellow-400" />
            Avis
          </Link>
          
          {/* Liens réseaux sociaux mobile */}
          <div className="flex items-center space-x-4 py-2 border-b border-border">
            <a 
              href="https://www.instagram.com/prepa_rationnelle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-pink-500 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.tiktok.com/@prepa_rationnelle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-black transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
          
          {currentUser ? (<>
            <Link to="/dashboard" className="text-lg py-2 border-b border-border flex items-center gap-2" onClick={closeMenu}><BarChart3 className="h-4 w-4" />Dashboard</Link>
            {isProfessor && (<Link to="/prof" className="text-lg py-2 border-b border-border flex items-center gap-2" onClick={closeMenu}><UserCheck className="h-4 w-4" />Interface Prof</Link>)}
            <Button variant="outline" onClick={() => { handleLogout(); closeMenu(); }} className="mt-4 w-full flex items-center justify-center" disabled={isLoggingOut}><LogOut className="mr-2 h-4 w-4" />{isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}</Button>
          </>) : (<>
            <Link to="/login" className="text-lg py-2 border-b border-border" onClick={closeMenu}>Connexion</Link>
            {showSignup !== false && (<Link to="/register" onClick={closeMenu} className="mt-4"><Button className="w-full">S'inscrire</Button></Link>)}
          </>)}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 