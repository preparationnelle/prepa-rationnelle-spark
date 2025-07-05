import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Languages, Globe, Users, ArrowRight } from 'lucide-react';

const FormationOverviewPage = () => {
  const formations = [
    {
      id: 'python',
      title: 'Formation Python',
      icon: Code,
      description: 'Maîtrisez Python pour les concours ECG avec nos modules complets couvrant les fondamentaux, matrices, analyse et probabilités.',
      features: ['Fondamentaux Python', 'Matrices et calculs', 'Analyse de données', 'Probabilités et statistiques'],
      difficulty: 'Intermédiaire',
      duration: '8-10 heures',
      path: '/python-introduction',
      color: 'bg-blue-500'
    },
    {
      id: 'anglais',
      title: 'Formation Anglais',
      icon: Languages,
      description: 'Perfectionnez votre anglais avec notre méthode complète, nos générateurs linguistiques et notre vocabulaire essentiel.',
      features: ['Méthode complète ECG', 'Générateurs de langue', 'Vocabulaire concours', 'Grammaire et thèmes'],
      difficulty: 'Tous niveaux',
      duration: '6-8 heures',
      path: '/formation/anglais',
      color: 'bg-green-500'
    },
    {
      id: 'allemand',
      title: 'Formation Allemand',
      icon: Languages,
      description: 'Formation complète en allemand avec générateurs IA et fiches de grammaire détaillées pour les concours ECG.',
      features: ['Générateurs IA', 'Fiches de grammaire', 'Thèmes grammaticaux', 'Points récurrents'],
      difficulty: 'Niveau prépa',
      duration: '5-7 heures',
      path: '/formation/allemand',
      color: 'bg-red-500'
    },
    {
      id: 'geopolitique',
      title: 'Formation Géopolitique',
      icon: Globe,
      description: 'Développez vos connaissances géopolitiques avec des analyses approfondies et des outils de révision.',
      features: ['Analyses géopolitiques', 'Cartes interactives', 'Actualités mondiales', 'Méthodes de dissertation'],
      difficulty: 'Avancé',
      duration: '10-12 heures',
      path: '/formation/geopolitique',
      color: 'bg-purple-500'
    },
    {
      id: 'entretiens-personnalite',
      title: 'Entretiens de Personnalité',
      icon: Users,
      description: 'Maîtrisez tous les aspects des entretiens de personnalité avec notre méthodologie complète, nos outils IA et notre banque de questions.',
      features: ['Méthodologie complète', 'Outils IA', 'Banque de questions', 'Fiches écoles détaillées'],
      difficulty: 'Tous niveaux',
      duration: '4-6 heures',
      path: '/methodologie/entretiens-personnalite',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Formations Prepa Rationnelle</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos formations complètes conçues spécialement pour réussir les concours des grandes écoles de commerce.
          Chaque formation combine théorie, pratique et outils interactifs.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {formations.map((formation) => (
          <Card key={formation.id} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${formation.color} text-white`}>
                  <formation.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{formation.title}</CardTitle>
              </div>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">{formation.difficulty}</Badge>
                <Badge variant="outline">{formation.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {formation.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {formation.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={formation.path}>
                <Button className="w-full group">
                  Accéder à la formation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir nos formations ?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Méthodes éprouvées</h3>
            <p className="text-sm text-muted-foreground">Développées par des experts ayant réussi les concours</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Outils interactifs</h3>
            <p className="text-sm text-muted-foreground">Générateurs, flashcards et exercices pratiques</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Suivi personnalisé</h3>
            <p className="text-sm text-muted-foreground">Progression adaptée à votre rythme et vos besoins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationOverviewPage;
