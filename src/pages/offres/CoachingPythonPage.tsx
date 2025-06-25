
import React from "react";
import { Button } from "@/components/ui/button";

const CoachingPythonPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Coaching en Python</h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground">
          <div className="flex items-start gap-2 mb-4">
            <span className="text-4xl">💻</span>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Tu souhaites bénéficier d'un coaching en Python ?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Apprends la programmation Python avec un accompagnement personnalisé, de la découverte aux concepts avancés.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-primary">Ce que tu vas maîtriser :</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Syntaxe et concepts fondamentaux de Python</li>
                  <li>Structures de données et algorithmes</li>
                  <li>Programmation orientée objet</li>
                  <li>Projets pratiques et applications concrètes</li>
                </ul>
              </div>
              
              <div className="text-center">
                <a
                  href="https://calendly.com/preparationnelle/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="default" size="lg" className="px-8 py-3">
                    Réserver mon premier cours
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPythonPage;
