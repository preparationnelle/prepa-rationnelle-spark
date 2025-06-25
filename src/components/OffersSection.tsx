
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const OffersSection = () => (
  <section className="my-8 md:my-12">
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-primary flex items-center gap-2">
        <span>Nos offres</span>
      </h2>
      <div className="flex flex-col gap-6 text-base md:text-lg">
        {/* Questions section */}
        <div className="space-y-4">
          <div className="text-lg font-medium text-foreground">
            <p className="mb-3">🌞 Tu veux profiter de l'été pour t'organiser au mieux ?</p>
            <p className="mb-3">📊 Tu souhaites bénéficier d'un coaching en Maths ?</p>
            <p className="mb-3">💻 Tu souhaites bénéficier d'un coaching en Python ?</p>
            <p className="mb-4">🎯 Tu veux aborder sereinement ta rentrée en prépa et bien démarrer ta "cube" ?</p>
          </div>
          
          <div className="text-center">
            <Link to="/nos-offres">
              <Button variant="default" size="lg" className="px-8 py-3">
                Découvrir nos offres détaillées
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OffersSection;
