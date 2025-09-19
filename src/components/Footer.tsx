import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, FileCheck, CreditCard, Mail, Server, BookOpen, GraduationCap, Calculator, Code, TrendingUp, Users, Calendar, Gift } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Call-to-Action - Boutons */}
        <div className="py-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <a
                href="https://calendly.com/preparationnelle/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors font-semibold text-sm flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Réserver mon premier cours gratuit
              </a>
            </div>
            <h3 className="text-lg font-semibold text-white max-w-4xl mx-auto whitespace-nowrap">
              Nous proposons un cours gratuit à tout étudiant en prépa ECG qui nous fait une suggestion utile pour améliorer le site !
            </h3>
          </div>
        </div>

        {/* Section principale avec formations et offres */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Formations */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-0 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-orange-400" />
                Nos Formations
              </h3>
              <ul className="space-y-0">
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <Code className="h-3 w-3" />
                    Python ECG
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <GraduationCap className="h-3 w-3" />
                    Anglais ECG
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <TrendingUp className="h-3 w-3" />
                    Espagnol ECG
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <Users className="h-3 w-3" />
                    Allemand ECG
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <TrendingUp className="h-3 w-3" />
                    Géopolitique
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <GraduationCap className="h-3 w-3" />
                    ESH ECG
                  </a>
                </li>
                <li>
                  <a href="/formations" className="text-orange-400 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-200 text-xs flex items-center gap-1 py-1 px-1 cursor-pointer pointer-events-auto hover:underline rounded block">
                    <Calculator className="h-3 w-3" />
                    Mathématiques
                  </a>
                </li>
              </ul>
            </div>

            {/* Offres spéciales */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Gift className="h-4 w-4 text-orange-400" />
                Offres Spéciales
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/offre/gratuite" className="text-gray-300 hover:text-orange-400 transition-colors text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Cours gratuit
                  </Link>
                </li>
                <li>
                  <Link to="/offre/coaching-maths" className="text-gray-300 hover:text-orange-400 transition-colors text-xs flex items-center gap-1">
                    <Calculator className="h-3 w-3" />
                    Coaching Maths
                  </Link>
                </li>
                <li>
                  <Link to="/offre/coaching-python" className="text-gray-300 hover:text-orange-400 transition-colors text-xs flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    Coaching Python
                  </Link>
                </li>
                <li>
                  <Link to="/offre/organisation-ete" className="text-gray-300 hover:text-orange-400 transition-colors text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Organisation Été
                  </Link>
                </li>
                <li>
                  <Link to="/offre/preparation-cube" className="text-gray-300 hover:text-orange-400 transition-colors text-xs flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    Préparation CUBE
                  </Link>
                </li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-400" />
                Liens Utiles
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/formations" className="text-gray-300 hover:text-green-400 transition-colors text-xs flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    Toutes nos formations
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-xs flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/apropos" className="text-gray-300 hover:text-green-400 transition-colors text-xs flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="text-gray-300 hover:text-green-400 transition-colors text-xs flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    Articles & Conseils
                  </Link>
                </li>
                <li>
                  <Link to="/avis" className="text-gray-300 hover:text-green-400 transition-colors text-xs flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Avis Superprof
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informations légales */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-purple-400" />
                Informations Légales
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/mentions-legales" className="text-gray-300 hover:text-purple-400 transition-colors text-xs flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-gray-300 hover:text-purple-400 transition-colors text-xs flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/cgu" className="text-gray-300 hover:text-purple-400 transition-colors text-xs flex items-center gap-1">
                    <FileCheck className="h-3 w-3" />
                    Conditions générales d'utilisation
                  </Link>
                </li>
                <li>
                  <Link to="/cgv" className="text-gray-300 hover:text-purple-400 transition-colors text-xs flex items-center gap-1">
                    <CreditCard className="h-3 w-3" />
                    Conditions générales de vente
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Pied de page avec copyright et hébergeur */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © Prépa Rationnelle 2025 - Tous droits réservés.
            </div>

            {/* Hébergeur avec icône */}
            <div className="text-xs text-gray-500 text-center md:text-right flex items-center gap-1">
              <Server className="h-3 w-3" />
              Hébergeur : Vercel Inc. - <a 
                href="https://vercel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                vercel.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
