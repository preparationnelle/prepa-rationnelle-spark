import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { isWhitelisted } from '@/hooks/useWhitelistAccess';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { MobileSearch } from '@/components/search/MobileSearch';
import { SearchTrigger } from '@/components/search/SearchTrigger';
import { LogOut, Menu, X, ChevronDown, FileText, Users, User, BookOpen, Package, Radio, Instagram, Linkedin, GraduationCap, Handshake, Code, Languages, Globe, UserCheck, Calculator, Award, Star, Youtube, TrendingUp, Settings, Mail, LayoutDashboard } from 'lucide-react';
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
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const [isStudyLevelOpen, setIsStudyLevelOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { toast } = useToast();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const studyLevelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formationsRef = useRef<HTMLDivElement>(null);
  const studyLevelRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

  // Gestion du hover sur le menu Formations
  const handleFormationsHover = () => {
    if (formationsTimeoutRef.current) {
      clearTimeout(formationsTimeoutRef.current);
    }

    formationsTimeoutRef.current = setTimeout(() => {
      setIsFormationsOpen(true);
    }, 300); // Délai de 300ms avant d'ouvrir
  };

  const handleFormationsLeave = () => {
    if (formationsTimeoutRef.current) {
      clearTimeout(formationsTimeoutRef.current);
    }

    // Délai avant de fermer pour permettre de naviguer vers le menu
    formationsTimeoutRef.current = setTimeout(() => {
      setIsFormationsOpen(false);
    }, 150);
  };

  const handleMenuHover = () => {
    if (formationsTimeoutRef.current) {
      clearTimeout(formationsTimeoutRef.current);
    }
  };

  const handleMenuLeave = () => {
    formationsTimeoutRef.current = setTimeout(() => {
      setIsFormationsOpen(false);
    }, 150);
  };

  // Gestion du hover sur le menu Niveau d'étude
  const handleStudyLevelHover = () => {
    if (studyLevelTimeoutRef.current) {
      clearTimeout(studyLevelTimeoutRef.current);
    }

    studyLevelTimeoutRef.current = setTimeout(() => {
      setIsStudyLevelOpen(true);
    }, 300); // Délai de 300ms avant d'ouvrir
  };

  const handleStudyLevelLeave = () => {
    if (studyLevelTimeoutRef.current) {
      clearTimeout(studyLevelTimeoutRef.current);
    }

    // Délai avant de fermer pour permettre de naviguer vers le menu
    studyLevelTimeoutRef.current = setTimeout(() => {
      setIsStudyLevelOpen(false);
    }, 150);
  };

  const handleStudyLevelMenuHover = () => {
    if (studyLevelTimeoutRef.current) {
      clearTimeout(studyLevelTimeoutRef.current);
    }
  };

  const handleStudyLevelMenuLeave = () => {
    if (studyLevelTimeoutRef.current) {
      clearTimeout(studyLevelTimeoutRef.current);
    }

    studyLevelTimeoutRef.current = setTimeout(() => {
      setIsStudyLevelOpen(false);
    }, 150);
  };

  // Gestion du hover sur le menu Contact
  const handleContactHover = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current);
    }

    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(true);
    }, 300); // Délai de 300ms avant d'ouvrir
  };

  const handleContactLeave = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current);
    }

    // Délai avant de fermer pour permettre de naviguer vers le menu
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false);
    }, 150);
  };

  const handleContactMenuHover = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current);
    }
  };

  const handleContactMenuLeave = () => {
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false);
    }, 150);
  };

  // Nettoyage du timeout à la destruction du composant
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (formationsTimeoutRef.current) {
        clearTimeout(formationsTimeoutRef.current);
      }
      if (studyLevelTimeoutRef.current) {
        clearTimeout(studyLevelTimeoutRef.current);
      }
      if (contactTimeoutRef.current) {
        clearTimeout(contactTimeoutRef.current);
      }
    };
  }, []);

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

  const isWhitelistedUser = isWhitelisted(currentUser?.email || '');

  // Targets for protected sections
  // Navigation: le gating ne s'applique qu'aux pages deep (appro/appli)
  const mathsHref = '/formation/maths';
  // Bouton Python doit toujours pointer vers la page d'entrée Cours Python ECG
  const pythonHref = '/formation';

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 h-14",
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg border-b border-white/20"
          : "bg-white/80 backdrop-blur-xl shadow-md border-b border-white/30"
      )}>
        <nav className="container mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap" onClick={closeMenu}>Accueil</Link>

            {/* Menu déroulant "Formations" avec hover */}
            <div
              className="relative"
              ref={formationsRef}
              onMouseEnter={handleFormationsHover}
              onMouseLeave={handleFormationsLeave}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 focus:outline-none px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap">
                Formations
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isFormationsOpen && "rotate-180")} />
              </button>

              {/* Menu déroulant */}
              <div
                className={cn(
                  "absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg border p-2 transition-all duration-200 z-50",
                  isFormationsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseEnter={handleMenuHover}
                onMouseLeave={handleMenuLeave}
              >
                {/* Maths - visible, redirigé si non whitelist */}
                <Link to={mathsHref} onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Calculator className="h-4 w-4 text-orange-600" /></span>
                  <span>Maths</span>
                </Link>

                {/* Python - visible, redirigé si non whitelist */}
                <Link to={pythonHref} onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Code className="h-4 w-4 text-orange-600" /></span>
                  <span>Python</span>
                </Link>

                {/* Formations publiques - toujours visibles */}
                <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-orange-600" /></span>
                  <span>Anglais</span>
                </Link>
                <Link to="/formation/espagnol" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-orange-600" /></span>
                  <span>Espagnol</span>
                </Link>
                <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Languages className="h-4 w-4 text-orange-600" /></span>
                  <span>Allemand</span>
                </Link>
                <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Globe className="h-4 w-4 text-orange-600" /></span>
                  <span>Géopolitique</span>
                </Link>
                <Link to="/formation/esh" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><GraduationCap className="h-4 w-4 text-orange-600" /></span>
                  <span>ESH</span>
                </Link>
                <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-orange-600" /></span>
                  <span>Entretiens de Personnalité</span>
                </Link>

                <Link to="/generator" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Code className="h-4 w-4 text-orange-600" /></span>
                  <span>Générateur</span>
                </Link>

                <div className="border-t border-gray-200 my-2"></div>
                <Link to="/formations" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><BookOpen className="h-4 w-4 text-orange-600" /></span>
                  <span>Toutes nos formations</span>
                </Link>
                <Link to="/avis" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Star className="h-4 w-4 text-orange-600" /></span>
                  <span>Avis</span>
                </Link>
              </div>
            </div>

            <Link to="/parent" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap" onClick={closeMenu}>Espace Parents</Link>
            <Link to="/nos-profs" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap" onClick={closeMenu}>Professeurs</Link>

            {/* Menu déroulant "Niveau d'étude" avec hover */}
            <div
              className="relative"
              ref={studyLevelRef}
              onMouseEnter={handleStudyLevelHover}
              onMouseLeave={handleStudyLevelLeave}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 focus:outline-none px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap">
                Niveau
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isStudyLevelOpen && "rotate-180")} />
              </button>

              {/* Menu déroulant */}
              <div
                className={cn(
                  "absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg border p-2 transition-all duration-200 z-50",
                  isStudyLevelOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseEnter={handleStudyLevelMenuHover}
                onMouseLeave={handleStudyLevelMenuLeave}
              >
                {/* Primaire */}
                <Link to="/articles/primaire" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><GraduationCap className="h-4 w-4 text-orange-600" /></span>
                  <span>Primaire</span>
                </Link>

                {/* Collège */}
                <Link to="/articles/college" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><GraduationCap className="h-4 w-4 text-orange-600" /></span>
                  <span>Collège</span>
                </Link>

                {/* Lycée */}
                <Link to="/articles/lycee" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><GraduationCap className="h-4 w-4 text-orange-600" /></span>
                  <span>Lycée</span>
                </Link>

                {/* Prépa ECG */}
                <Link to="/articles/prepa-ecg" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Calculator className="h-4 w-4 text-orange-600" /></span>
                  <span>Prépa ECG</span>
                </Link>

                {/* Terminale → Prépa */}
                <Link to="/articles/terminale-prepa" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><TrendingUp className="h-4 w-4 text-orange-600" /></span>
                  <span>Terminale → Prépa</span>
                </Link>

                {/* Concours ACCES/SESAME */}
                <Link to="/articles/concours-acces-sesame" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Award className="h-4 w-4 text-orange-600" /></span>
                  <span>Concours ACCES/SESAME</span>
                </Link>

                {/* OTERIA Cyber School */}
                <Link to="/articles/oteria-cyber-school" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Code className="h-4 w-4 text-orange-600" /></span>
                  <span>OTERIA Cyber School</span>
                </Link>

              </div>
            </div>

            <Link to="/avis" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap" onClick={closeMenu}>Avis</Link>

            {/* Menu déroulant "Contact" avec hover */}
            <div
              className="relative"
              ref={contactRef}
              onMouseEnter={handleContactHover}
              onMouseLeave={handleContactLeave}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 focus:outline-none px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap">
                Contact
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isContactOpen && "rotate-180")} />
              </button>

              {/* Menu déroulant */}
              <div
                className={cn(
                  "absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg border p-2 transition-all duration-200 z-50",
                  isContactOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseEnter={handleContactMenuHover}
                onMouseLeave={handleContactMenuLeave}
              >
                <Link to="/parent" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-orange-600" /></span>
                  <span>Parent</span>
                </Link>

                <Link to="/professeur" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><GraduationCap className="h-4 w-4 text-orange-600" /></span>
                  <span>Devenir Professeur</span>
                </Link>

                <Link to="/professeur-dashboard" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Settings className="h-4 w-4 text-orange-600" /></span>
                  <span>Espace Professeur</span>
                </Link>

                <div className="border-t border-gray-100 my-1"></div>

                <Link to="/design-system" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Package className="h-4 w-4 text-orange-600" /></span>
                  <span>Design System</span>
                </Link>

                <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3 w-full hover:bg-orange-50 rounded-md px-3 py-2 transition-colors">
                  <span className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"><Mail className="h-4 w-4 text-orange-600" /></span>
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>

            <Link to="/stage-accompagnement" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50/50 whitespace-nowrap" onClick={closeMenu}>Offres</Link>
            <SearchTrigger />

            {/* Liens réseaux sociaux */}
            <div className="flex items-center space-x-2 ml-2">
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
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@preparationnelle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            <ThemeToggle variant="icon" />
            {currentUser ? (
              <div className="flex items-center space-x-4 ml-4">
                <Link to="/dashboard" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}>
                  <LayoutDashboard className="h-3 w-3" />Dashboard
                  {isProfessor && (
                    <span className="ml-1 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-bold leading-none">Prof</span>
                  )}
                </Link>
                {isProfessor && (
                  <Link to="/prof" className="text-sm text-foreground hover:text-primary transition flex items-center gap-1" onClick={closeMenu}><UserCheck className="h-3 w-3" />Espace Prof</Link>
                )}
                <Button variant="outline" size="sm" onClick={() => { handleLogout(); closeMenu(); }} className="flex items-center h-8 px-3 text-xs" disabled={isLoggingOut}><LogOut className="mr-1 h-3 w-3" />{isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}</Button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition px-2 py-1 rounded-md hover:bg-gray-50" onClick={closeMenu}>Login</Link>
                {showSignup !== false && (
                  <Link to="/register" onClick={closeMenu}><Button size="sm" className="h-8 px-4 text-xs font-medium">S'inscrire</Button></Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-2">
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
        {/* Barre de progression animée alignée bas navbar, sans recouvrir le bouton S'inscrire */}
        <div className="relative w-full">
          <div className="absolute -z-10 bottom-0 left-0 w-full pr-32 h-1 bg-gray-100 z-30 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${scrollProgress}%` }}
            >
              {/* Effet de brillance animé */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
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
          <Link to="/" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Accueil</Link>
          <Link to="/avis" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Avis</Link>
          <Link to="/parent" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Espace Parents</Link>
          <Link to="/nos-profs" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Professeurs</Link>
          <Link to="/articles/primaire" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Primaire</Link>
          <Link to="/articles/college" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Collège</Link>
          <Link to="/articles/lycee" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Lycée</Link>
          <Link to="/articles/prepa-ecg" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Prépa ECG</Link>
          <Link to="/articles/concours-acces-sesame" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Concours ACCES/SESAME</Link>
          <Link to="/articles/oteria-cyber-school" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>OTERIA Cyber School</Link>

          {/* Menu Contact mobile */}
          <div className="border-b border-gray-200">
            <div className="text-base py-3 px-4 bg-gray-50 font-medium text-gray-700">Contact</div>
            <Link to="/parent" className="text-base py-3 border-b border-gray-200 bg-white px-6 rounded-md transition-colors duration-200 hover:bg-orange-50 min-h-[44px] flex items-center gap-3" onClick={closeMenu}>
              <Users className="h-5 w-5 text-orange-600" />
              Parent
            </Link>
            <Link to="/professeur" className="text-base py-3 border-b border-gray-200 bg-white px-6 rounded-md transition-colors duration-200 hover:bg-orange-50 min-h-[44px] flex items-center gap-3" onClick={closeMenu}>
              <GraduationCap className="h-5 w-5 text-orange-600" />
              Devenir Professeur
            </Link>
            <Link to="/professeur-dashboard" className="text-base py-3 border-b border-gray-200 bg-white px-6 rounded-md transition-colors duration-200 hover:bg-orange-50 min-h-[44px] flex items-center gap-3" onClick={closeMenu}>
              <Settings className="h-5 w-5 text-orange-600" />
              Espace Professeur
            </Link>
            <Link to="/design-system" className="text-base py-3 border-b border-gray-200 bg-white px-6 rounded-md transition-colors duration-200 hover:bg-orange-50 min-h-[44px] flex items-center gap-3" onClick={closeMenu}>
              <Package className="h-5 w-5 text-orange-600" />
              Design System
            </Link>
            <Link to="/contact" className="text-base py-3 border-b border-gray-200 bg-white px-6 rounded-md transition-colors duration-200 hover:bg-orange-50 min-h-[44px] flex items-center gap-3" onClick={closeMenu}>
              <Mail className="h-5 w-5 text-orange-600" />
              Nous contacter
            </Link>
          </div>

          <Link to="/stage-accompagnement" className="text-base py-3 border-b border-gray-200 bg-white px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-center" onClick={closeMenu}>Offres</Link>
        </div>

        {/* Liens réseaux sociaux mobiles */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <a
            href="https://www.instagram.com/prepa_rationnelle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-foreground hover:text-pink-500 transition-colors rounded-full hover:bg-gray-50"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@prepa_rationnelle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-foreground hover:text-black transition-colors rounded-full hover:bg-gray-50"
            aria-label="TikTok"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@preparationnelle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-foreground hover:text-red-500 transition-colors rounded-full hover:bg-gray-50"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        {/* Titre formations */}
        <h3 className="text-lg font-medium text-primary px-3 mb-3">Formations</h3>

        {/* Formations en deux colonnes */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link to={mathsHref} onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Calculator className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Maths</span>
          </Link>
          <Link to={pythonHref} onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
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
          <Link to="/formation/espagnol" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Languages className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Espagnol</span>
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
          <Link to="/formation/esh" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-blue-600" />
            </span>
            <span className="text-sm text-center">ESH</span>
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
          <Link to="/generator" onClick={closeMenu} className="flex flex-col items-center gap-2 bg-white p-2 rounded-md shadow-sm">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Code className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm text-center">Générateur</span>
          </Link>
        </div>

        <div className="mt-4">
          {currentUser ? (
            <div className="grid grid-cols-2 gap-4">
              <Link to="/dashboard" className="text-base py-2 border-b border-gray-200 flex items-center gap-2 bg-white px-3 rounded-md" onClick={closeMenu}>
                <LayoutDashboard className="h-5 w-5 text-blue-600" />
                Dashboard
                {isProfessor && (
                  <span className="ml-1 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-bold leading-none">Prof</span>
                )}
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
              <Link to="/login" className="text-base py-2 border-b border-gray-200 bg-white px-3 rounded-md" onClick={closeMenu}>Login</Link>
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