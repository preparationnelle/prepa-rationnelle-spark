import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User } from "lucide-react";
import { useTheme } from "@/components/ui/use-theme";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const { resetProgress } = useProgress();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setTheme } = useTheme();

  const handleLogout = async () => {
    await logout();
    resetProgress();
    navigate("/login");
  };

  const mainNavItems = [
    { title: "Préparer mon entretien", href: "/generator" },
    { title: "Simulateur d'entretien", href: "/interview-simulator" },
    { title: "Les écoles", href: "/questions" },
    { title: "Coaching", href: "/coaching" },
  ];

  const userNavItems = currentUser ? [
    { title: "Mon tableau de bord", href: "/dashboard" },
    { title: "Mes réponses", href: "/dashboard?tab=submissions" },
    { title: "Mes clés API", href: "/api-keys" },
    {
      title: "Se déconnecter",
      href: "#",
      onClick: handleLogout,
    },
  ] : [
    { title: "Se connecter", href: "/login" },
    { title: "S'inscrire", href: "/register" },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="font-bold text-2xl">
          Prepa Rationnelle
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-medium hover:underline">
                {item.title}
              </Link>
            ))}
          </nav>
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.user_metadata?.avatar_url || ""} alt={currentUser?.user_metadata?.full_name || "Profile"} />
                    <AvatarFallback>{currentUser?.user_metadata?.full_name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userNavItems.slice(0, userNavItems.length - 1).map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link to={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Se déconnecter</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium hover:underline">
                Se connecter
              </Link>
              <Link to="/register">
                <Button size="sm">S'inscrire</Button>
              </Link>
            </div>
          )}
           <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme => theme === "light" ? "dark" : "light")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Explorez les différentes sections de Prepa Rationnelle.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {mainNavItems.map((item) => (
                <Link key={item.href} to={item.href} className="block text-sm font-medium py-2 hover:underline">
                  {item.title}
                </Link>
              ))}
              <div className="border-t py-4">
                {currentUser ? (
                  <>
                    {userNavItems.slice(0, userNavItems.length - 1).map((item) => (
                      <Link key={item.title} to={item.href} className="block text-sm font-medium py-2 hover:underline">
                        {item.title}
                      </Link>
                    ))}
                    <Button variant="destructive" size="sm" className="w-full" onClick={handleLogout}>
                      Se déconnecter
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block text-sm font-medium py-2 hover:underline">
                      Se connecter
                    </Link>
                    <Link to="/register">
                      <Button size="sm" className="w-full">S'inscrire</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
