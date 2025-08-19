import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Mail, AlertTriangle } from 'lucide-react';

const AccesRestreintPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const next = params.get('next') || '/formation/maths';
  const section = params.get('section') || 'maths'; // python ou maths
  const safeNext = next.startsWith('/') ? next : '/formation/maths';
  const loginHref = `/login?next=${encodeURIComponent(safeNext)}`;

  const isPythonSection = section === 'python';

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-orange-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isPythonSection ? 'Connexion requise' : 'Accès restreint'}
          </CardTitle>
          <p className="text-gray-600 mt-2">
            {isPythonSection 
              ? 'Connectez-vous pour accéder aux formations Python'
              : 'Cette section est réservée aux utilisateurs autorisés'
            }
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-orange-800 mb-1">
                  {isPythonSection ? 'Formation Python' : 'Section protégée'}
                </p>
                <p className="text-orange-700">
                  {isPythonSection 
                    ? 'Les formations Python sont accessibles gratuitement à tous les utilisateurs connectés.'
                    : 'Les formations Maths ne sont accessibles qu\'aux utilisateurs inscrits sur la liste blanche.'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Pour accéder à cette section :
            </h3>
            <ul className="text-sm text-gray-600 space-y-2 ml-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Connectez-vous avec votre compte
              </li>
              {!isPythonSection && (
                <>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Votre email doit être dans la liste autorisée
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Contactez l'équipe pour demander l'accès
                  </li>
                </>
              )}
              {isPythonSection && (
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Accès libre après inscription !
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
              <Link to={loginHref}>Se connecter</Link>
            </Button>
            {!isPythonSection && (
              <Button asChild variant="outline" className="flex-1">
                <a href="mailto:preparationnelle@gmail.com">Demander l'accès</a>
              </Button>
            )}
            {isPythonSection && (
              <Button asChild variant="outline" className="flex-1">
                <Link to={`/register?next=${encodeURIComponent(safeNext)}`}>S'inscrire</Link>
              </Button>
            )}
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
              <Link to="/">← Retour à l'accueil</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccesRestreintPage;

