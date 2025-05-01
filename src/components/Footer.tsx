
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Prepa Rationnelle</h3>
            <p className="text-gray-300">
              Accompagnement pour les entretiens de personnalité des concours.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prepa Rationnelle. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
