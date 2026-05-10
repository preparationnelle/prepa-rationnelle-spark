import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Heart, Users, Award, TrendingUp, BookOpen, Home, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: "Mister Prépa",
    logo: "/lovable-uploads/0e2fccc2-ec73-424b-b6c6-bdf1212646fa.png",
    alt: "Logo Mister Prépa",
    url: "https://misterprepa.net"
  },
  {
    name: "Blue Factory x ESCP",
    logo: "/lovable-uploads/dbcafb26-e562-4250-b4c4-25fa9c1e4054.png",
    alt: "Logo Blue Factory x ESCP",
    url: "https://www.blue-factory.eu"
  },
  {
    name: "ESCP Business School",
    logo: "/lovable-uploads/c0bbdb09-51b9-4152-9846-68b665c90f83.png",
    alt: "Logo ESCP Business School",
    url: "https://escp.eu"
  },
  {
    name: "myPREPA",
    logo: "/lovable-uploads/3e5a4535-39d6-4d27-8faa-8b0514725dcb.png",
    alt: "Logo myPREPA",
    url: "https://myprepa.fr"
  },
  {
    name: "Maisons des Jeunes Talents",
    logo: "/lovable-uploads/8a218555-a2b6-4739-88e1-c64dff3c33ea.png",
    alt: "Logo Maisons des Jeunes Talents",
    url: "https://fondation.groupelbpam.com/en/maisons-des-jeunes-talents-about-us/"
  },
  {
    name: "Stéphane Preteseille",
    logo: "/lovable-uploads/d926b01a-e267-4195-955e-938ac3235351.png",
    alt: "Logo Stéphane Preteseille",
    url: "https://stephanepreteseille.com"
  }
];

const AproposPage = () => {
  return (
    <div className="relative">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-16 z-30 bg-carnet-paper/95 backdrop-blur-sm border-b border-carnet-rule/40 relative">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">À propos</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10 mt-8 sm:mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-carnet-red text-white shadow-lg">
              <User className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">À propos de </span>
            <span className="text-carnet-red">Prépa Rationnelle</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Réussir la prépa autrement : une vision, une méthode, des résultats concrets
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Notre Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 group-hover:text-pr-orange-dark leading-relaxed space-y-4 transition-colors duration-300">
              <p>
                <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">Prépa Rationnelle</strong>, c'est bien plus qu'un nom accrocheur : c'est une réponse concrète à un problème que vivent des milliers d'étudiants chaque année. Celui de l'inefficacité, du surmenage et du manque de méthode dans les classes préparatoires.
              </p>
              <p>
                À l'origine du projet, un constat personnel : réussir un concours ne dépend pas uniquement de son intelligence ou de ses connaissances, mais de la <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">capacité à travailler intelligemment</strong>. Et ça, peu de gens l'enseignent.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-black">Nos </span>
              <span className="text-carnet-red">Partenaires</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des institutions prestigieuses qui nous soutiennent dans notre mission
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
              {partners.map((partner, i) => (
                <a
                  key={i}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-40 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 p-4 rounded-xl bg-white border border-carnet-red/20 group"
                  aria-label={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-16 w-auto object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-carnet-red group-hover:text-pr-orange-dark text-center leading-tight transition-colors duration-300">{partner.name}</span>
                </a>
              ))}
            </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group">
            <CardHeader>
              <div className="w-14 h-14 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                <User className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Un Parcours Personnel</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 group-hover:text-pr-orange-dark leading-relaxed space-y-3 transition-colors duration-300">
              <p>
                Je m'appelle <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">Dimitar Dimitrov</strong>. Je suis étudiant à l'ESCP Business School, passé par trois années de classe préparatoire, avec tous les hauts et les bas que cela implique.
              </p>
              <p>
                Issu d'un double parcours franco-bulgare, je suis passé par des débuts très difficiles à mon arrivée en France, sans parler un mot de la langue. Mais c'est cette <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">résilience</strong> que je transmets aujourd'hui dans ma pédagogie.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group">
            <CardHeader>
              <div className="w-14 h-14 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                <Award className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">L'Expérience Terrain</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 group-hover:text-pr-orange-dark leading-relaxed space-y-3 transition-colors duration-300">
              <p>
                <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">Prépa Rationnelle</strong> est né de cette expérience. De cette conviction qu'un accompagnement efficace peut transformer une trajectoire.
              </p>
              <p>
                Pendant deux ans, j'ai donné plus de <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">1000 heures de cours particuliers</strong>, accompagné plus de 50 étudiants, certains allant jusqu'à dépasser mes propres scores aux concours.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Une Pédagogie de l'Efficacité</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 group-hover:text-pr-orange-dark leading-relaxed space-y-4 transition-colors duration-300">
              <p>
                Notre approche est simple : <strong className="text-carnet-red group-hover:text-pr-orange transition-colors duration-300">enseigner les bonnes méthodes avant même les contenus</strong>. Fiches ciblées, répétition espacée, gestion du temps, sélection des exercices vraiment utiles pour les concours...
              </p>
              <p>
                Car oui, le vrai problème n'est pas que les élèves ne travaillent pas. C'est qu'ils ne savent pas comment travailler.
              </p>
              <p>
                Notre objectif : leur faire gagner du temps. J'en ai moi-même perdu énormément pendant mes années de prépa à apprendre des choses inutiles ou à refaire des exercices sans stratégie.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group text-center">
            <CardHeader>
              <div className="w-14 h-14 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Engagement</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 group-hover:text-pr-orange-dark transition-colors duration-300">
              <p>Une start-up engagée et soutenue par l'écosystème entrepreneurial de l'ESCP, avec une vision d'impact social.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group text-center">
            <CardHeader>
              <div className="w-14 h-14 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Accessibilité</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 group-hover:text-pr-orange-dark transition-colors duration-300">
              <p>Rendre la prépa accessible aux lycéens boursiers et mal informés, pour démocratiser l'accès aux grandes écoles.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-carnet-red/20 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300 group text-center">
            <CardHeader>
              <div className="w-14 h-14 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">Innovation</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 group-hover:text-pr-orange-dark transition-colors duration-300">
              <p>Un modèle scalable, humain et technologique, avec une ambition européenne et des outils IA innovants.</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-carnet-paper-2 to-pr-orange-pale rounded-2xl p-8 sm:p-12 shadow-xl border border-carnet-red/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-carnet-red group-hover:bg-pr-orange-dark rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 group-hover:text-pr-orange-dark transition-colors duration-300 mb-4">
              <span className="text-carnet-red group-hover:text-pr-orange font-bold transition-colors duration-300">Prêt à réussir autrement</span> ?
            </h2>
            <p className="text-gray-600 group-hover:text-pr-orange-dark transition-colors duration-300 text-lg mb-8 max-w-2xl mx-auto">
              Découvrez nos formations et notre méthode rationnelle pour intégrer le TOP 3 en prépa ECG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formations">
                <Button size="lg" className="bg-carnet-red hover:bg-pr-orange-dark text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Découvrir nos formations
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="border-2 border-carnet-red/40 hover:border-pr-orange text-carnet-red hover:text-pr-orange px-8 py-3 text-lg font-semibold hover:bg-pr-orange-pale transition-all duration-300">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default AproposPage;

