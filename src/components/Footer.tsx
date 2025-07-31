import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        {/* Logo et description */}
        <div className="flex items-center gap-3 mb-6">
          <div className="font-bold text-lg text-orange-500">PREPA RATIONNELLE</div>
          <div>
            <p className="text-sm text-gray-300">
              Accompagnement personnalisé pour intégrer le top 5 des écoles de commerce
            </p>
          </div>
        </div>

        {/* Navigation principale */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-white mb-3">La plateforme</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/formations" className="hover:text-orange-600 transition-colors">
                  Nos formations
                </Link>
              </li>
              <li>
                <Link to="/formation/maths" className="hover:text-orange-600 transition-colors">
                  Maths ECG
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-python-prepa-ecg" className="hover:text-orange-600 transition-colors">
                  Python ECG
                </Link>
              </li>
              <li>
                <Link to="/formation/anglais" className="hover:text-orange-600 transition-colors">
                  Anglais ECG
                </Link>
              </li>
              <li>
                <Link to="/generator" className="hover:text-orange-600 transition-colors">
                  Générateurs IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Concours</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/articles" className="hover:text-orange-600 transition-colors">
                  Conseils concours
                </Link>
              </li>
              <li>
                <Link to="/methodologie/entretiens-personnalite" className="hover:text-orange-600 transition-colors">
                  Entretiens de personnalité
                </Link>
              </li>
              <li>
                <Link to="/entretien-inverse-gem" className="hover:text-orange-600 transition-colors">
                  Entretien inversé GEM
                </Link>
              </li>
              <li>
                <Link to="/cv-projectif" className="hover:text-orange-600 transition-colors">
                  CV Projectif
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Écoles</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/hec" className="hover:text-orange-600 transition-colors">
                  HEC
                </Link>
              </li>
              <li>
                <Link to="/essec" className="hover:text-orange-600 transition-colors">
                  ESSEC
                </Link>
              </li>
              <li>
                <Link to="/escp" className="hover:text-orange-600 transition-colors">
                  ESCP
                </Link>
              </li>
              <li>
                <Link to="/edhec" className="hover:text-orange-600 transition-colors">
                  EDHEC
                </Link>
              </li>
              <li>
                <Link to="/em-lyon" className="hover:text-orange-600 transition-colors">
                  EM Lyon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Ressources</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/articles" className="hover:text-orange-600 transition-colors">
                  Articles et conseils
                </Link>
              </li>
              <li>
                <Link to="/avis" className="hover:text-orange-600 transition-colors">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="hover:text-orange-600 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © Copyright 2025. Tous droits réservés.
            </div>

            {/* Liens légaux */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/cgu" className="hover:text-orange-600 transition-colors">
                CGU/CGV
              </Link>
              <Link to="/mentions-legales" className="hover:text-orange-600 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-orange-600 transition-colors">
                Politique de confidentialité
              </Link>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/prepa_rationnelle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dimitar-dimitrov-372348200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@prepa_rationnelle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
