import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, School, CheckCircle, AlertTriangle, Target, Lightbulb } from 'lucide-react';

const MotivationEcolePage = () => {
  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <Link to="/methodologie/entretiens-personnalite" className="text-primary hover:underline mb-4 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Retour aux entretiens de personnalité
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Motivation École : convaincre les jurys de votre engagement authentique
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-6">
              Maîtrisez l'art de présenter votre motivation pour une école de commerce
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          
          {/* Section 1 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">1. Pourquoi la motivation école est-elle cruciale ?</h2>
            </div>
            <p className="mb-4">
              La question de motivation école est l'une des plus fréquentes en entretien. Elle permet au jury d'évaluer votre connaissance de l'école, 
              la cohérence de votre projet et votre capacité à vous projeter.
            </p>
            <p className="mb-2">Une motivation bien préparée permet de :</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Montrer votre connaissance :</strong> démontrer que vous vous êtes renseigné sur l'école.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Révéler votre cohérence :</strong> lier votre projet à ce que propose l'école.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Prouver votre engagement :</strong> montrer que ce n'est pas un choix par défaut.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <Target className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">2. Structure d'une motivation école efficace</h2>
            </div>
            <p className="mb-6">Structurez votre motivation en 4 étapes logiques :</p>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">1. Votre projet professionnel</h4>
                  <p className="text-muted-foreground">Rappel bref de votre objectif pour créer le lien avec l'école.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">2. Spécificités de l'école</h4>
                  <p className="text-muted-foreground">2-3 éléments précis qui vous attirent dans cette école particulière.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">3. Adéquation projet-école</h4>
                  <p className="text-muted-foreground">En quoi cette école vous permettra de réaliser votre projet.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">4. Votre contribution</h4>
                  <p className="text-muted-foreground">Ce que vous pourrez apporter à l'école et à la communauté.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <School className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">3. Éléments clés à connaître sur l'école</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3">📚 Programme pédagogique</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Spécialisations proposées</li>
                  <li>• Méthodes pédagogiques</li>
                  <li>• Partenariats universitaires</li>
                  <li>• Double-diplômes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">🌍 International</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Partenariats internationaux</li>
                  <li>• Campus à l'étranger</li>
                  <li>• Programmes d'échange</li>
                  <li>• Cours en anglais</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">💼 Professionnalisation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Réseau d'alumni</li>
                  <li>• Partenariats entreprises</li>
                  <li>• Incubateur/start-up studio</li>
                  <li>• Stages obligatoires</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-orange-500 h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">4. Erreurs à éviter absolument</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-orange-600 mb-3">❌ Motivations génériques</h4>
                <ul className="space-y-1 text-sm">
                  <li>• "C'est une grande école"</li>
                  <li>• "Elle a une bonne réputation"</li>
                  <li>• "Pour avoir un bon salaire"</li>
                  <li>• "Mes parents m'ont conseillé"</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-orange-600 mb-3">❌ Manque de préparation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Ne pas connaître le programme</li>
                  <li>• Confondre avec une autre école</li>
                  <li>• Ne pas mentionner de spécificités</li>
                  <li>• Réponse trop courte ou trop longue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">5. Exemple de motivation réussie</h2>
            </div>
            
            <Card className="border-l-4 border-primary bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">✅ Exemple pour HEC Paris</h4>
                <p className="italic mb-2">
                  "Mon projet professionnel étant de créer une start-up dans la FinTech, HEC m'attire particulièrement pour trois raisons."
                </p>
                <p className="italic mb-2">
                  "D'abord, le programme Innovation & Entrepreneurship me permettra d'acquérir les compétences nécessaires en création d'entreprise. 
                  Ensuite, l'écosystème HEC Station F offre un environnement unique pour développer mon projet."
                </p>
                <p className="italic">
                  "Enfin, le réseau d'alumni dans la finance et la tech me donnera accès à des mentors et investisseurs. 
                  En retour, je pourrai partager mon expérience en développement web avec les autres étudiants."
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to action */}
          <div className="text-center pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Prêt à perfectionner votre motivation ?</h3>
            <p className="text-muted-foreground mb-6">
              Travaillez votre motivation école avec nos coachs spécialisés en entretiens de personnalité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/methodologie/entretiens-personnalite">
                <Button className="bg-primary hover:bg-primary/90">
                  Voir toutes les méthodologies
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Coaching personnalisé
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationEcolePage;