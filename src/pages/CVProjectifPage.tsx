
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, Lightbulb, Target } from 'lucide-react';

const CVProjectifPage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/questions" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Retour à la banque de questions
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Guide complet pour réaliser son CV projectif
            </h1>
            <p className="text-xl text-gray-600">
              Tout ce qu'il faut savoir pour créer un CV projectif convaincant pour SKEMA et autres écoles
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Qu'est-ce qu'un CV projectif ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le CV projectif est un exercice spécifique demandé par certaines écoles de commerce, notamment SKEMA, lors des entretiens d'admission. 
                Contrairement au CV traditionnel qui présente votre parcours passé, le CV projectif vous invite à vous projeter dans l'avenir, 
                généralement sur une période de 10 ans.
              </p>
              <p>
                Cet exercice permet au jury d'évaluer votre capacité à vous projeter professionnellement et à construire un parcours cohérent. 
                L'objectif n'est pas de présenter un "CV idéal" ou utopique, mais plutôt une projection réaliste de votre parcours, 
                qui reflète vos aspirations et votre personnalité.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Structure et contenu du CV projectif
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Présentation et informations personnelles</h3>
                <p className="mb-2">En haut de votre CV, indiquez vos informations personnelles :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Âge (dans 10 ans)</li>
                  <li>Adresse (qui peut être projective si vous envisagez de vivre ailleurs)</li>
                  <li>Coordonnées</li>
                  <li>Photo professionnelle</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">2. Formation</h3>
                <p className="mb-2">Cette section doit inclure :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Votre parcours académique après le bac</li>
                  <li>Le diplôme du Programme Grande École de l'école visée</li>
                  <li>Les spécialisations ou MSc que vous envisagez de suivre</li>
                  <li>Les éventuels échanges universitaires ou doubles diplômes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">3. Expériences professionnelles</h3>
                <p className="mb-2">Pour cette partie, imaginez les postes que vous occuperez après l'obtention de votre diplôme :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Première expérience :</strong> poste "junior" (1,5 à 2 ans)</li>
                  <li><strong>Deuxième expérience :</strong> poste "senior" ou avec plus de responsabilités (2 à 3 ans)</li>
                  <li><strong>Troisième expérience :</strong> poste de direction ou managérial (3 ans ou plus)</li>
                </ul>
                <p className="mt-2">Pour chaque expérience, précisez l'entreprise, le poste occupé, la durée et les principales missions.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">4. Compétences et langues</h3>
                <p>Indiquez les compétences que vous aurez développées dans 10 ans : langues maîtrisées, compétences techniques et soft skills pertinents.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">5. Centres d'intérêt et engagements</h3>
                <p>Cette section permet de montrer votre personnalité : activités sportives, engagements associatifs, passions et hobbies.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Conseils pour réussir son CV projectif
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Utiliser un code couleur
                </h3>
                <p className="mb-2">
                  Pour les CV projectifs, notamment celui de SKEMA, il est fortement recommandé d'utiliser un code couleur :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Noir</strong> pour les informations actuelles/factuelles</li>
                  <li><strong>Couleur</strong> (violet, rose, bleu) pour les éléments projectifs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Être cohérent dans son parcours
                </h3>
                <p>
                  La cohérence est la règle la plus importante. Montrez que votre engagement académique, associatif et professionnel 
                  sont liés et que vous savez comment atteindre vos objectifs grâce à l'école.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Rester réaliste et authentique
                </h3>
                <p>
                  Évitez les projections trop ambitieuses. À 28-30 ans, vous ne serez probablement pas directeur général 
                  d'une entreprise du CAC 40. Renseignez-vous sur les parcours d'anciens diplômés.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  S'appuyer sur des anecdotes personnelles
                </h3>
                <p>
                  Appuyez certains de vos choix de carrière sur des anecdotes ou expériences personnelles passées. 
                  Cela montrera que votre projection s'inscrit dans une continuité avec votre parcours actuel.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Connaître l'école et ses programmes
                </h3>
                <p>
                  Renseignez-vous en profondeur sur l'école visée, ses spécialisations, ses campus internationaux et ses partenariats. 
                  Pour SKEMA, mettez en avant sa dimension internationale avec ses nombreux campus à l'étranger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Préparer des alternatives
                </h3>
                <p>
                  Bien que votre CV ne présente qu'un seul parcours, préparez-vous à discuter d'alternatives lors de l'entretien. 
                  Cela montrera votre capacité à vous adapter et votre réflexion approfondie.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/skema">
              <Button size="lg" className="mr-4">
                Voir la fiche SKEMA
              </Button>
            </Link>
            <Link to="/questions">
              <Button variant="outline" size="lg">
                Retour aux questions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVProjectifPage;
