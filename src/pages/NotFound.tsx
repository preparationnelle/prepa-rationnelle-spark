
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page introuvable | Prepa Rationnelle</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        <meta httpEquiv="status" content="404" />
        <link rel="canonical" href="https://www.preparationnelle.com/" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-carnet-ink mb-4">404</h1>
          <p className="text-xl text-carnet-ink-soft mb-8">Oops ! Page non trouvée.</p>
          <Button asChild className="bg-carnet-red hover:bg-carnet-red-deep text-white">
            <Link to="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
