import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, FileCheck, CreditCard, Mail, Server, BookOpen, GraduationCap, Calculator, Code, TrendingUp, Users, Calendar, Gift } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale avec formations et offres */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Formations */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-400" />
                Nos Formations
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/pourquoi-python-prepa-ecg" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Python ECG
                  </Link>
                </li>
                <li>
                  <Link to="/formation/anglais" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Anglais ECG
                  </Link>
                </li>
                <li>
                  <Link to="/formation/espagnol" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Espagnol ECG
                  </Link>
                </li>
                <li>
                  <Link to="/formation/allemand" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Allemand ECG
                  </Link>
                </li>
                <li>
                  <Link to="/formation/geopolitique" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Géopolitique
                  </Link>
                </li>
                <li>
                  <Link to="/formation/esh" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    ESH ECG
                  </Link>
                </li>
                <li>
                  <Link to="/formation/maths-choix" className="text-orange-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    Mathématiques
                  </Link>
                </li>
              </ul>
            </div>

            {/* Offres spéciales */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Gift className="h-5 w-5 text-orange-400" />
                Offres Spéciales
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/offre/gratuite" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Cours gratuit
                  </Link>
                </li>
                <li>
                  <Link to="/offre/coaching-maths" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    Coaching Maths
                  </Link>
                </li>
                <li>
                  <Link to="/offre/coaching-python" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Coaching Python
                  </Link>
                </li>
                <li>
                  <Link to="/offre/organisation-ete" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Organisation Été
                  </Link>
                </li>
                <li>
                  <Link to="/offre/preparation-cube" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Préparation CUBE
                  </Link>
                </li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Liens Utiles
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/formations" className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Toutes nos formations
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/apropos" className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Articles & Conseils
                  </Link>
                </li>
                <li>
                  <Link to="/avis" className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Avis Superprof
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informations légales */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-400" />
                Informations Légales
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/mentions-legales" className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/cgu" className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                    <FileCheck className="h-4 w-4" />
                    Conditions générales d'utilisation
                  </Link>
                </li>
                <li>
                  <Link to="/cgv" className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Conditions générales de vente
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Call-to-Action */}
        <div className="py-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Prêt à booster votre préparation ECG ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Découvrez nos formations complètes et réservez votre cours découverte gratuit pour évaluer votre niveau et nos méthodes pédagogiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offre/gratuite"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Cours gratuit
              </Link>
              <Link
                to="/formations"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Toutes nos formations
              </Link>
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
