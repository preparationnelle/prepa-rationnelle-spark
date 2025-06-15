
import React from "react";

export const OffersSection = () => (
  <section className="my-8 md:my-12">
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-primary flex items-center gap-2">
        <span>Nos offres</span>
      </h2>
      <div className="space-y-8 text-base md:text-lg">
        <div>
          <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
            <span className="text-xl md:text-2xl">🎯</span> 
            <span>1. Préparation aux entretiens de personnalité</span>
          </div>
          <div className="ml-7 mb-2 text-muted-foreground">
            Accompagnement sur mesure pour réussir les entretiens oraux des concours (écoles de commerce, Sciences Po, etc.).
          </div>
          <ul className="ml-10 list-disc text-sm md:text-base space-y-1">
            <li>Structurer son discours</li>
            <li>Gagner en confiance</li>
            <li>Maîtriser les attentes des jurys</li>
            <li>S’entraîner en conditions réelles</li>
          </ul>
        </div>
        <div>
          <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
            <span className="text-xl md:text-2xl">🚀</span>
            <span>2. Prépa à la prépa</span>
          </div>
          <div className="ml-7 mb-2 text-muted-foreground">
            Un programme d’accompagnement dédié aux élèves de Terminale qui s’apprêtent à intégrer une classe préparatoire (CPGE).
          </div>
          <ul className="ml-10 list-disc text-sm md:text-base space-y-1">
            <li>Prendre de l’avance sur les exigences de la prépa</li>
            <li>Adopter une méthode de travail efficace</li>
            <li>Gagner en sérénité pour bien démarrer l’année</li>
          </ul>
        </div>
        <div>
          <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
            <span className="text-xl md:text-2xl">🔄</span>
            <span>3. Réussir la transition entre la 1re et la 2e année de prépa</span>
          </div>
          <div className="ml-7 mb-2 text-muted-foreground">
            Un accompagnement pour aborder sereinement la deuxième année, souvent plus exigeante et plus stratégique.
          </div>
          <ul className="ml-10 list-disc text-sm md:text-base space-y-1">
            <li>Consolider les acquis de première année</li>
            <li>Gagner en efficacité méthodologique</li>
            <li>Se projeter dans la préparation des concours</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default OffersSection;
