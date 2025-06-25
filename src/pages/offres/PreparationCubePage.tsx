
import React from "react";
import { Button } from "@/components/ui/button";

const PreparationCubePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Préparation à la "Cube"</h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground">
          <div className="flex items-start gap-2 mb-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Tu veux aborder sereinement ta rentrée en prépa et bien démarrer ta "cube" ?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                La deuxième année de prépa est cruciale. Notre accompagnement te permet d'aborder cette étape avec confiance et méthode.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-primary">Notre accompagnement :</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Consolider les acquis de première année</li>
                  <li>Gagner en efficacité méthodologique</li>
                  <li>Se projeter dans la préparation des concours</li>
                  <li>Développer une stratégie de révision optimale</li>
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

export default PreparationCubePage;
