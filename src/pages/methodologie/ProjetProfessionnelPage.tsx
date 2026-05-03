import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, CheckCircle, AlertTriangle, Lightbulb, Briefcase } from 'lucide-react';

const ProjetProfessionnelPage = () => {
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
              Projet Professionnel : construire une vision cohérente et convaincante
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-6">
              Le fil conducteur de votre candidature qui révèle votre maturité et votre détermination
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
              <h2 className="text-2xl font-bold">1. L'importance du projet professionnel</h2>
            </div>
            <p className="mb-4">
              Le projet professionnel est le fil conducteur de votre candidature. Il révèle votre maturité, votre capacité de projection 
              et la cohérence de votre parcours.
            </p>
            <p className="mb-2">Un projet bien construit montre :</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Votre vision :</strong> vous savez où vous allez à long terme.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Votre cohérence :</strong> vos expériences alimentent votre réflexion.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Votre motivation :</strong> l'école vous aidera à atteindre vos objectifs.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <Target className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">2. Architecture d'un projet professionnel solide</h2>
            </div>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">1. Vision à long terme</h4>
                  <p className="text-muted-foreground">Votre objectif à 10-15 ans : quel poste, quel secteur, quelle mission ?</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">2. Motivations profondes</h4>
                  <p className="text-muted-foreground">Le "pourquoi" : ce qui vous anime, vos valeurs, l'impact souhaité.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">3. Étapes intermédiaires</h4>
                  <p className="text-muted-foreground">Votre plan d'action : premiers postes, secteurs, compétences à développer.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">4. Lien avec vos expériences</h4>
                  <p className="text-muted-foreground">Comment vos expériences passées nourrissent et valident votre projet.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <Briefcase className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">3. Secteurs et métiers populaires</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3">💼 Conseil & Finance</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Conseil en stratégie</li>
                  <li>• Banque d'investissement</li>
                  <li>• Private equity</li>
                  <li>• Audit & expertise comptable</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">🚀 Innovation & Tech</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Entrepreneuriat</li>
                  <li>• Product management</li>
                  <li>• Business development</li>
                  <li>• Venture capital</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">🌍 Impact & Secteurs</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Développement durable</li>
                  <li>• Santé & biotech</li>
                  <li>• Luxe & mode</li>
                  <li>• Économie sociale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-orange-500 h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">4. Pièges à éviter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-orange-600 mb-3">❌ Projets trop vagues</h4>
                <ul className="space-y-1 text-sm">
                  <li>• "Travailler dans le management"</li>
                  <li>• "Faire du business"</li>
                  <li>• "Être dans la finance"</li>
                  <li>• "Diriger une entreprise"</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-orange-600 mb-3">❌ Manque de cohérence</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Projet déconnecté du parcours</li>
                  <li>• Motivations superficielles</li>
                  <li>• Aucune expérience validante</li>
                  <li>• Plan irréaliste</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">5. Exemple de projet professionnel réussi</h2>
            </div>
            
            <Card className="border-l-4 border-primary bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">✅ Projet : Consultant en transformation digitale</h4>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Vision long terme :</strong> "Dans 10 ans, je souhaite diriger la practice digital d'un cabinet de conseil 
                    pour accompagner les entreprises traditionnelles dans leur transformation numérique."
                  </p>
                  <p>
                    <strong>Motivations :</strong> "Passionné par la tech depuis le lycée, j'ai constaté lors de mon stage en banque 
                    le retard digital de certains secteurs. Je veux être acteur de cette transition."
                  </p>
                  <p>
                    <strong>Plan d'action :</strong> "Après l'école : 2-3 ans en conseil généraliste pour acquérir la méthodologie, 
                    puis spécialisation digital dans un cabinet comme Sia Partners."
                  </p>
                  <p>
                    <strong>Expériences validantes :</strong> "Mon stage en banque, mes projets de développement web, et ma participation 
                    à des hackathons confirment mon intérêt pour ce secteur."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to action */}
          <div className="text-center pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Besoin d'aide pour clarifier votre projet ?</h3>
            <p className="text-muted-foreground mb-6">
              Nos coachs vous accompagnent pour construire un projet professionnel cohérent et convaincant.
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

export default ProjetProfessionnelPage;