import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, GraduationCap } from 'lucide-react';
import { PricingSection } from '@/components/PricingSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

const HomePage = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-card to-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading gradient-text mb-6">Préparez-vous aux oraux </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">Développez votre capacité à structurer des arguments pour réussir vos oraux de langue et entretien de personnalité.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto premium-button">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-border hover:bg-secondary/50">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Schools Section - Updated with proper dark mode styling */}
      <section id="schools-section" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-4 text-foreground">
            Fiches écoles
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Découvrez nos analyses des entretiens de personnalité des grandes écoles et préparez-vous efficacement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link to="/ecoles/escp" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">ESCP Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format court (30 min), coefficient 12. Entretien structuré autour d'un questionnaire préalable.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/essec" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">ESSEC Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format long (30-45 min), coefficient 10. Entretien approfondi avec mise en situation initiale.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/edhec" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">EDHEC Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format tripartite (1h30), coefficient 15. Présentation, travail de groupe et entretien de motivation.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/emlyon" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">EM Lyon Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format flash (25 min), coefficient 9. Entretien avec cartes à thèmes et présentation en 1 minute.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/skema" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">SKEMA Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format projectionnel (25 min), coefficient 20. Entretien autour d'un CV fictif à 10 ans.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/audencia" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">Audencia Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Format classique (30 min), coefficient 10. Entretien orienté RSE avec partie en anglais.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/gem" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">Grenoble École de Management</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Entretien multi-parties (30 min), coefficient 10. Format original avec entretien inversé.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/kedge" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">KEDGE Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Entretien classique avec questionnaire 'maison' (30 min), coefficient 14. Approche 'Grow by Doing'.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>

            <Link to="/ecoles/neoma" className="group">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-card-foreground">NEOMA Business School</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Entretien classique avec questionnaire préalable (30 min), coefficient 12. Format bienveillant et structuré.
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:underline hover:bg-primary/10">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-12 text-foreground">
            Comment <span className="gradient-text">Prepa Rationnelle</span> vous aide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/30 p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 7 3 5l2-2" /><path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9" /><path d="M5 19 3 17l2-2" /><path d="M5 5v14" /></svg>
              </div>
              <h3 className="card-heading mb-2 text-card-foreground">Plans structurés</h3>
              <p className="text-muted-foreground">
                Générez des plans argumentés sur des sujets de géopolitique et d'actualité pour mieux structurer vos réponses.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
              </div>
              <h3 className="card-heading mb-2 text-card-foreground">Suivi de progression</h3>
              <p className="text-muted-foreground">
                Suivez votre évolution et identifiez vos points forts et axes d'amélioration grâce à notre tableau de bord.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5.5 20H8" /><path d="M17 9h.01" /><path d="M11 13h.01" /><path d="M13 15h.01" /><path d="M15 11h.01" /><path d="M17 13h.01" /><path d="M9 15h.01" /><path d="M3 3v18h18" /><path d="m3 6 3-3 3 3 3-3 3 3 3-3 3 3" /></svg>
              </div>
              <h3 className="card-heading mb-2 text-card-foreground">Coaching personnalisé</h3>
              <p className="text-muted-foreground">
                Bénéficiez d'un accompagnement individuel pour perfectionner votre préparation aux entretiens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-12 text-foreground">
            Ce que nos étudiants disent
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Grâce à Prepa Rationnelle, j'ai pu structurer mes réponses et développer une argumentation solide qui a impressionné le jury de Sciences Po."
              </p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold">ML</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Marie L.</p>
                  <p className="text-sm text-muted-foreground">Sciences Po Paris, 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Le coaching individuel m'a permis d'identifier mes points faibles et de travailler spécifiquement sur ma capacité à rebondir aux questions complexes."
              </p>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold">TH</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Thomas H.</p>
                  <p className="text-sm text-muted-foreground">HEC, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Using our new component */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à exceller dans vos entretiens ?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont amélioré leur performance aux oraux de personnalité grâce à Prepa Rationnelle.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary">
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card text-foreground border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Prepa Rationnelle</h3>
              <p className="text-muted-foreground">
                Accompagnement pour les entretiens de personnalité des concours.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">À propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Conditions d'utilisation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Prepa Rationnelle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default HomePage;
