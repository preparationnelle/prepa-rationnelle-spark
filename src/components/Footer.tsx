import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const handleCoachingClick = () => {
    const message = encodeURIComponent("Bonjour Prepa Rationnelle, je veux mon premier coaching gratuit !");
    window.open(`https://wa.me/33609164668?text=${message}`, '_blank');
  };

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

        {/* Coaching gratuit */}
        <div className="mb-6 py-4 border-t border-gray-800">
          <button 
            onClick={handleCoachingClick}
            className="flex items-center justify-center gap-2 mx-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Réserver mon coaching gratuit</span>
          </button>
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
                href="https://www.linkedin.com/in/dimitar-dimitrov-prepa" 
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
              <a 
                href="https://chat.whatsapp.com/Lx0UqZQY0607ZeRLGrCY9N?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp Group"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 0C5.149 0 0 5.148 0 11.5c0 2.532.81 4.863 2.175 6.772L.751 23.25l5.159-1.352A11.468 11.468 0 0011.5 23c6.351 0 11.5-5.149 11.5-11.5C23 5.148 17.851 0 11.5 0zm0 21c-2.173 0-4.193-.626-5.9-1.704L2.75 20.25l.943-2.836A9.439 9.439 0 012 11.5C2 6.262 6.262 2 11.5 2S21 6.262 21 11.5 16.738 21 11.5 21z" fillRule="evenodd" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
