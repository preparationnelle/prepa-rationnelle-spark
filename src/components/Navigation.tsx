
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        variant: "destructive",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/73c4719b-7030-411f-8d46-20d32035daba.png" 
            alt="Prepa Rationnelle Logo" 
            className="h-10 mr-2"
          />
          <span className="text-xl font-bold text-primary">Prepa Rationnelle</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition">Accueil</Link>
          
          {/* These links will always show, but will show the auth overlay if the user is not logged in */}
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition">
            Tableau de bord
          </Link>
          <Link to="/generator" className="text-gray-700 hover:text-primary transition">
            Générateur
          </Link>

          {currentUser ? (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout} 
              className="flex items-center"
              disabled={isLoggingOut}
            >
              <LogOut className="mr-2 h-4 w-4" /> 
              {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
            </Button>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-primary transition">
                Connexion
              </Link>
              <Link to="/register">
                <Button>S'inscrire</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-lg py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Accueil
          </Link>
          
          {/* These links will always show, but will show the auth overlay if the user is not logged in */}
          <Link 
            to="/dashboard" 
            className="text-lg py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Tableau de bord
          </Link>
          <Link 
            to="/generator" 
            className="text-lg py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Générateur
          </Link>
          
          {currentUser ? (
            <Button 
              variant="outline" 
              onClick={() => {
                handleLogout();
                toggleMenu();
              }} 
              className="mt-4 w-full flex items-center justify-center"
              disabled={isLoggingOut}
            >
              <LogOut className="mr-2 h-4 w-4" /> 
              {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
            </Button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-lg py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Connexion
              </Link>
              <Link 
                to="/register" 
                onClick={toggleMenu}
                className="mt-4"
              >
                <Button className="w-full">S'inscrire</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
