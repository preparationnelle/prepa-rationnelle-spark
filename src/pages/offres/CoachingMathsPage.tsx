
import React from "react";
import { Button } from "@/components/ui/button";

const CoachingMathsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Coaching en Mathématiques</h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground">
          <div className="flex items-start gap-2 mb-4">
            <span className="text-4xl">📊</span>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Tu souhaites bénéficier d'un coaching en Maths ?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Un accompagnement personnalisé en mathématiques pour maîtriser les concepts clés et exceller dans cette matière fondamentale.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-primary">Programme d'accompagnement :</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Révision des fondamentaux et consolidation des bases</li>
                  <li>Méthodes de résolution d'exercices et de problèmes</li>
                  <li>Entraînement aux épreuves de concours</li>
                  <li>Suivi personnalisé et adaptation du rythme</li>
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

export default CoachingMathsPage;
