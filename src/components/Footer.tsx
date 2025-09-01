import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, FileCheck, CreditCard, Mail, Server } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-gray-900 border-t border-gray-700">
      <div className="w-full">
        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © Prépa Rationnelle 2025 - Tous droits réservés.
            </div>

            {/* Liens légaux avec icônes */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-400">
              <Link to="/mentions-legales" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <FileText className="h-3 w-3" />
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Politique de confidentialité
              </Link>
              <Link to="/cgu" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <FileCheck className="h-3 w-3" />
                CGU
              </Link>
              <Link to="/cgv" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                CGV
              </Link>
              <Link to="/contact" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <Mail className="h-3 w-3" />
                Contact
              </Link>
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
