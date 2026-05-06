import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';
import { SchoolCard } from '@/components/SchoolCard';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { Bot, Users, Puzzle, HelpCircle, Target, FileText, MessageSquare, School, Heart, CheckCircle, AlertTriangle, HandHeart, Presentation } from 'lucide-react';

const MethodEntretiensPersonnalitePage = () => {
  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);

  const schools = [
    { name: "ESSEC Business School", duration: "Entretien de 30-45 minutes, coefficient 10.", feature: "Format approfondi avec mise en situation initiale.", link: "/essec" },
    { name: "ESCP Business School", duration: "Entretien de 30 minutes, coefficient 12.", feature: "Entretien structuré autour d'un questionnaire préalable.", link: "/escp" },
    { name: "EDHEC Business School", duration: "Entretien de 1h30, coefficient 15.", feature: "Format tripartite avec présentation, travail de groupe et entretien.", link: "/edhec" },
    { name: "EM Lyon Business School", duration: "Entretien de 25 minutes, coefficient 9.", feature: "Format ludique avec cartes thématiques et présentation en 1 minute.", link: "/emlyon" },
    { name: "SKEMA Business School", duration: "Entretien de 25 minutes, coefficient 20.", feature: "CV fictif à 10 ans.", link: "/skema" },
    { name: "Audencia Business School", duration: "Entretien de 30 minutes, coefficient 10.", feature: "Forte dimension responsabilité sociétale avec partie en anglais.", link: "/audencia" },
    { name: "Grenoble École de Management", duration: "Entretien de 30 minutes, coefficient 10.", feature: "Format original avec entretien inversé.", link: "/gem" },
    { name: "KEDGE Business School", duration: "Entretien de 30 minutes, coefficient 14.", feature: "Approche 'Grow by Doing' et questionnaire 'maison'.", link: "/kedge" },
    { name: "NEOMA Business School", duration: "Entretien de 30 minutes, coefficient 12.", feature: "Format structuré autour de la 'réussite responsable'.", link: "/neoma" },
  ];

  const methodModules = [
    { to: "/methodologie/storytelling", icon: MessageSquare, label: "Storytelling" },
    { to: "/methodologie/motivation-ecole", icon: School, label: "Motivation école" },
    { to: "/methodologie/projet-professionnel", icon: Target, label: "Projet professionnel" },
    { to: "/methodologie/personnalite", icon: Heart, label: "Questions personnalité" },
    { to: "/methodologie/finir-entretien", icon: CheckCircle, label: "Finir un entretien" },
    { to: "/methodologie/erreur-entretien", icon: AlertTriangle, label: "Erreurs à éviter" },
    { to: "/methodologie/tendre-perches", icon: HandHeart, label: "Tendre des perches" },
    { to: "/methodologie/pitch-intro", icon: Presentation, label: "Pitch d'introduction" },
  ];

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-pr-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                Oraux · Concours BCE & Ecricome
              </span>
              <span className="h-px w-8 bg-pr-orange" />
            </div>

            <h1 className="font-dm-serif text-4xl sm:text-5xl md:text-6xl text-pr-black leading-tight mb-6">
              Entretiens de <span className="text-pr-orange">Personnalité</span>
            </h1>

            <p className="text-lg sm:text-xl text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Toutes les ressources pour réussir vos entretiens : méthodologie structurée,
              outils de préparation et fiches écoles détaillées.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-12">
              {[
                { num: "9", label: "Écoles détaillées" },
                { num: "8", label: "Modules méthodologie" },
                { num: "∞", label: "Questions générées par IA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-pr-gray-light rounded-lg px-6 py-7 hover:border-pr-orange transition-colors duration-300"
                >
                  <div className="font-dm-serif text-4xl text-pr-orange mb-1">{stat.num}</div>
                  <div className="h-px w-6 bg-pr-orange mb-3 mx-auto" />
                  <div className="text-sm text-pr-gray-mid">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* MÉTHODOLOGIE */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-7 w-1 bg-pr-orange rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                  Section 01
                </span>
              </div>
              <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
                Méthodologie générale
              </h2>
              <p className="text-base text-pr-gray-mid max-w-2xl">
                Maîtrisez les techniques essentielles pour briller lors de vos entretiens.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {methodModules.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="group bg-white border border-pr-gray-light rounded-lg p-5 flex flex-col items-center gap-3 text-center hover:border-pr-orange hover:bg-pr-orange-pale transition-all duration-300"
                >
                  <Icon className="h-7 w-7 text-pr-gray-dark group-hover:text-pr-orange transition-colors duration-300" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-pr-gray-dark group-hover:text-pr-orange-dark transition-colors duration-300">
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Formats spécialisés */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-7 w-1 bg-pr-orange rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                  Formats spécialisés
                </span>
              </div>
              <h3 className="font-dm-serif text-2xl sm:text-3xl text-pr-black mb-2">
                Pour les écoles à formats uniques
              </h3>
              <p className="text-base text-pr-gray-mid max-w-2xl">
                Guides détaillés pour les épreuves singulières de certaines écoles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Card className="border-pr-gray-light hover:border-pr-orange transition-colors duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-md bg-pr-orange-pale flex items-center justify-center">
                      <Users className="h-5 w-5 text-pr-orange-dark" strokeWidth={1.6} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                      GEM
                    </span>
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black">
                    Entretien inversé GEM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pr-gray-dark leading-relaxed mb-5">
                    Guide complet pour réussir cette partie unique de l'oral de GEM
                    où vous menez l'entretien.
                  </p>
                  <Link to="/entretien-inverse-gem">
                    <Button variant="outline" className="w-full border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange">
                      Voir le guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-pr-gray-light hover:border-pr-orange transition-colors duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-md bg-pr-orange-pale flex items-center justify-center">
                      <FileText className="h-5 w-5 text-pr-orange-dark" strokeWidth={1.6} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                      SKEMA
                    </span>
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black">
                    CV Projectif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pr-gray-dark leading-relaxed mb-5">
                    Tout savoir pour créer un CV projectif convaincant pour SKEMA
                    et autres écoles.
                  </p>
                  <Link to="/cv-projectif">
                    <Button variant="outline" className="w-full border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange">
                      Voir le guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* OUTILS IA */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-7 w-1 bg-pr-orange rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                  Section 02
                </span>
              </div>
              <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
                Outils IA
              </h2>
              <p className="text-base text-pr-gray-mid max-w-2xl">
                Préparez-vous avec nos générateurs intelligents personnalisés pour chaque école.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Bot,
                  title: "Générateur de réponses",
                  desc: "Générez des réponses structurées pour toutes vos questions d'entretien avec l'IA.",
                  to: "/generator/answer",
                  cta: "Utiliser le générateur",
                },
                {
                  icon: HelpCircle,
                  title: "Questions EM Lyon",
                  desc: "Entraînez-vous avec des questions aléatoires format EM Lyon avec cartes thématiques.",
                  to: "/generator/emlyon",
                  cta: "Questions aléatoires",
                },
                {
                  icon: Puzzle,
                  title: "Mots EDHEC",
                  desc: "Générateur de mots aléatoires pour préparer votre présentation EDHEC.",
                  to: "/generator/edhec",
                  cta: "Mots aléatoires",
                },
              ].map((tool) => (
                <Card key={tool.to} className="border-pr-gray-light hover:border-pr-orange transition-colors duration-300 bg-white">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-md bg-pr-orange-pale flex items-center justify-center mb-3">
                      <tool.icon className="h-5 w-5 text-pr-orange-dark" strokeWidth={1.6} />
                    </div>
                    <CardTitle className="font-dm-serif text-lg text-pr-black">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-pr-gray-dark leading-relaxed mb-5">
                      {tool.desc}
                    </p>
                    <Link to={tool.to}>
                      <Button variant="outline" className="w-full border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange">
                        {tool.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FICHES ÉCOLES */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-7 w-1 bg-pr-orange rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                  Section 03
                </span>
              </div>
              <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
                Fiches écoles
              </h2>
              <p className="text-base text-pr-gray-mid max-w-2xl">
                Découvrez les spécificités de chaque école et leurs attentes pour les entretiens.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {schools.map((school, index) => (
                <SchoolCard
                  key={index}
                  name={school.name}
                  duration={school.duration}
                  feature={school.feature}
                  link={school.link}
                />
              ))}
            </div>
          </section>

          <PodcastSection />
          <TestimonialsSection />

          {/* CTA final */}
          <div className="mt-20 text-center bg-white border border-pr-gray-light rounded-xl px-8 py-12">
            <div className="h-1 w-12 bg-pr-orange mx-auto mb-6 rounded-full" />
            <h3 className="font-dm-serif text-2xl sm:text-3xl text-pr-black mb-3">
              Prêt à préparer vos oraux ?
            </h3>
            <p className="text-base text-pr-gray-mid max-w-xl mx-auto mb-8">
              Découvrez l'accompagnement Prépa Rationnelle pour structurer
              votre préparation aux entretiens de personnalité.
            </p>
            <Link to="/nos-offres">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-8 py-6 text-base">
                Découvrir nos offres
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodEntretiensPersonnalitePage;
