import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  RotateCcw, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight as ChevronRightIcon,
  BookOpen,
  Eye,
  EyeOff,
  Lightbulb
} from 'lucide-react';

interface VocabularyCard {
  id: number;
  french: string;
  german: string;
  category: string;
}

const VocabulaireInnovationFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "l'innovation", german: "die Innovation", category: "Innovation générale" },
    { id: 2, french: "la technologie", german: "die Technologie", category: "Technologie générale" },
    { id: 3, french: "la souveraineté technologique", german: "die technologische Souveränität", category: "Souveraineté technologique" },
    { id: 4, french: "la numérisation", german: "die Digitalisierung", category: "Transformation numérique" },
    { id: 5, french: "l'intelligence artificielle (IA)", german: "die Künstliche Intelligenz (KI)", category: "Intelligence artificielle" },
    { id: 6, french: "la cybersécurité", german: "die Cybersicherheit", category: "Cybersécurité" },
    { id: 7, french: "la protection des données", german: "der Datenschutz", category: "Protection des données" },
    { id: 8, french: "la stratégie IA", german: "die KI-Strategie", category: "Stratégies IA" },
    { id: 9, french: "la concurrence internationale", german: "die internationale Konkurrenz", category: "Concurrence technologique" },
    { id: 10, french: "le retard numérique", german: "der digitale Rückstand", category: "Défis numériques" },
    { id: 11, french: "l'indice DESI (Indice de l'économie et de la société numériques)", german: "der DESI-Index (Digital Economy and Society Index)", category: "Indicateurs numériques" },
    { id: 12, french: "la concurrence avec les USA et la Chine", german: "die Konkurrenz mit USA und China", category: "Géopolitique technologique" },
    { id: 13, french: "le développement de l'IA", german: "die KI-Entwicklung", category: "Développement IA" },
    { id: 14, french: "le RGPD (Règlement général sur la protection des données)", german: "die DSGVO (Datenschutz-Grundverordnung)", category: "Régulation des données" },
    { id: 15, french: "la souveraineté numérique", german: "die digitale Souveränität", category: "Souveraineté numérique" },
    { id: 16, french: "les cyberattaques", german: "die Cyberangriffe", category: "Menaces cybernétiques" },
    { id: 17, french: "la protection des infrastructures critiques", german: "der Schutz kritischer Infrastrukturen", category: "Sécurité des infrastructures" },
    { id: 18, french: "l'éthique de l'IA", german: "die Ethik der KI", category: "Éthique IA" },
    { id: 19, french: "l'approche allemande", german: "der deutsche Ansatz", category: "Approches nationales" },
    { id: 20, french: "les mégadonnées", german: "die Big Data", category: "Données massives" },
    { id: 21, french: "l'apprentissage automatique", german: "das Machine Learning", category: "Technologies IA" },
    { id: 22, french: "l'apprentissage profond", german: "das Deep Learning", category: "Technologies IA" },
    { id: 23, french: "les algorithmes", german: "die Algorithmen", category: "Technologies fondamentales" },
    { id: 24, french: "l'automatisation", german: "die Automatisierung", category: "Automatisation" },
    { id: 25, french: "la robotique", german: "die Robotik", category: "Robotique" },
    { id: 26, french: "l'Industrie 4.0", german: "die Industrie 4.0", category: "Industrie 4.0" },
    { id: 27, french: "l'usine intelligente", german: "die Smart Factory", category: "Manufacturing intelligent" },
    { id: 28, french: "l'Internet des objets (IoT)", german: "das Internet der Dinge (IoT)", category: "IoT et connectivité" },
    { id: 29, french: "l'informatique en nuage", german: "die Cloud-Computing", category: "Cloud et infrastructure" },
    { id: 30, french: "la blockchain", german: "die Blockchain", category: "Technologies émergentes" },
    { id: 31, french: "les cryptomonnaies", german: "die Kryptowährungen", category: "Monnaies numériques" },
    { id: 32, french: "les réseaux 5G", german: "die 5G-Netze", category: "Réseaux télécoms" },
    { id: 33, french: "l'extension du haut débit", german: "die Breitbandausbau", category: "Infrastructure réseau" },
    { id: 34, french: "la stratégie numérique", german: "die Digitalstrategie", category: "Stratégies numériques" },
    { id: 35, french: "la politique numérique de l'UE", german: "die EU-Digitalpolitik", category: "Politiques européennes" },
    { id: 36, french: "GAIA-X (projet de cloud européen)", german: "die GAIA-X", category: "Projets européens" },
    { id: 37, french: "l'open source", german: "die Open Source", category: "Développement logiciel" },
    { id: 38, french: "le développement de logiciels", german: "die Softwareentwicklung", category: "Développement logiciel" },
    { id: 39, french: "le matériel", german: "die Hardware", category: "Matériel informatique" },
    { id: 40, french: "l'informatique quantique", german: "die Quantencomputing", category: "Technologies avancées" },
    { id: 41, french: "la recherche et développement (R&D)", german: "die Forschung und Entwicklung (F&E)", category: "R&D" },
    { id: 42, french: "les dépôts de brevets", german: "die Patentanmeldungen", category: "Propriété intellectuelle" },
    { id: 43, french: "les start-ups", german: "die Start-ups", category: "Écosystème startup" },
    { id: 44, french: "les licornes", german: "die Unicorn", category: "Startups valorisées" },
    { id: 45, french: "le capital-risque", german: "der Risikokapital", category: "Financement innovation" },
    { id: 46, french: "la scène berlinoise", german: "die Berliner Szene", category: "Hubs d'innovation" },
    { id: 47, french: "la société Fraunhofer", german: "die Fraunhofer-Gesellschaft", category: "Organismes de recherche" },
    { id: 48, french: "la société Max-Planck", german: "die Max-Planck-Gesellschaft", category: "Organismes de recherche" },
    { id: 49, french: "la communauté Helmholtz", german: "die Helmholtz-Gemeinschaft", category: "Organismes de recherche" },
    { id: 50, french: "la communauté Leibniz", german: "die Leibniz-Gemeinschaft", category: "Organismes de recherche" },
    { id: 51, french: "les hackers", german: "die Hacker", category: "Acteurs cybersécurité" },
    { id: 52, french: "le phishing", german: "die Phishing", category: "Types d'attaques" },
    { id: 53, french: "les rançongiciels", german: "die Ransomware", category: "Malwares" },
    { id: 54, french: "les attaques DDoS", german: "die DDoS-Angriffe", category: "Types d'attaques" },
    { id: 55, french: "le pare-feu", german: "die Firewall", category: "Protection cybernétique" },
    { id: 56, french: "le chiffrement", german: "die Verschlüsselung", category: "Sécurité cryptographique" },
    { id: 57, french: "l'authentification à deux facteurs", german: "die Zwei-Faktor-Authentifizierung", category: "Authentification" },
    { id: 58, french: "le BND (service de renseignement)", german: "die BND (Bundesnachrichtendienst)", category: "Organismes sécuritaires" },
    { id: 59, french: "le BSI (office fédéral pour la sécurité de l'information)", german: "die BSI (Bundesamt für Sicherheit in der Informationstechnik)", category: "Organismes sécuritaires" },
    { id: 60, french: "les infrastructures critiques", german: "die Kritische Infrastrukturen", category: "Infrastructures stratégiques" },
    { id: 61, french: "l'approvisionnement énergétique", german: "die Energieversorgung", category: "Secteurs critiques" },
    { id: 62, french: "les systèmes de transport", german: "die Verkehrssysteme", category: "Secteurs critiques" },
    { id: 63, french: "le système de santé", german: "die Gesundheitswesen", category: "Secteurs critiques" },
    { id: 64, french: "la commission d'éthique", german: "die Ethikkommission", category: "Instances éthiques" },
    { id: 65, french: "le biais dans l'IA", german: "die Bias in der KI", category: "Problèmes éthiques IA" },
    { id: 66, french: "la transparence", german: "die Transparenz", category: "Principes éthiques" },
    { id: 67, french: "la responsabilité", german: "die Verantwortung", category: "Principes éthiques" },
    { id: 68, french: "la régulation", german: "die Regulierung", category: "Cadre réglementaire" },
    { id: 69, french: "le règlement UE sur l'IA", german: "die EU-KI-Verordnung", category: "Régulation IA" },
    { id: 70, french: "l'IA à haut risque", german: "die Hochrisiko-KI", category: "Classification IA" },
    { id: 71, french: "l'IA générative", german: "die Generative KI", category: "Types d'IA" },
    { id: 72, french: "ChatGPT", german: "die ChatGPT", category: "Applications IA" },
    { id: 73, french: "les deepfakes", german: "die Deepfakes", category: "Technologies controversées" },
    { id: 74, french: "la désinformation", german: "die Desinformation", category: "Risques sociétaux" },
    { id: 75, french: "l'éthique numérique", german: "die Digitale Ethik", category: "Éthique numérique" },
    { id: 76, french: "la politique technologique", german: "die Technologiepolitik", category: "Politiques publiques" },
    { id: 77, french: "la coalition feu tricolore", german: "die Ampel-Koalition", category: "Gouvernement actuel" },
    { id: 78, french: "l'ère Merkel", german: "die Merkel-Ära", category: "Périodes politiques" },
    { id: 79, french: "le ministère de l'Économie", german: "die Wirtschaftsministerium", category: "Institutions gouvernementales" },
    { id: 80, french: "le ministère du Numérique", german: "die Digitalministerium", category: "Institutions gouvernementales" },
    { id: 81, french: "le classement DESI", german: "die DESI-Ranking", category: "Performance numérique" },
    { id: 82, french: "le taux de numérisation", german: "die Digitalisierungsrate", category: "Métriques numériques" },
    { id: 83, french: "le gouvernement électronique", german: "die E-Government", category: "Administration numérique" },
    { id: 84, french: "les services en ligne", german: "die Online-Dienste", category: "Services numériques" },
    { id: 85, french: "la fracture numérique", german: "die Digitale Kluft", category: "Inégalités numériques" },
    { id: 86, french: "la couverture haut débit", german: "die Breitbandabdeckung", category: "Couverture réseau" },
    { id: 87, french: "les réseaux mobiles", german: "die Mobilfunknetze", category: "Télécommunications" },
    { id: 88, french: "la technologie satellite", german: "die Satellitentechnologie", category: "Technologies spatiales" },
    { id: 89, french: "l'aérospatiale", german: "die Raumfahrt", category: "Secteur spatial" },
    { id: 90, french: "l'ESA (Agence spatiale européenne)", german: "die ESA (Europäische Weltraumorganisation)", category: "Organisations spatiales" },
    { id: 91, french: "la dépendance technologique", german: "die Technologische Abhängigkeit", category: "Dépendances stratégiques" },
    { id: 92, french: "Huawei", german: "die Huawei", category: "Entreprises chinoises" },
    { id: 93, french: "ASML", german: "die ASML", category: "Entreprises technologiques" },
    { id: 94, french: "la production de puces", german: "die Chipproduktion", category: "Semiconducteurs" },
    { id: 95, french: "les semi-conducteurs", german: "die Halbleiter", category: "Semiconducteurs" },
    { id: 96, french: "l'EU Chips Act", german: "die EU-Chips Act", category: "Politiques semiconducteurs" },
    { id: 97, french: "la promotion de l'innovation", german: "die Innovationsförderung", category: "Soutien à l'innovation" },
    { id: 98, french: "les clusters", german: "die Cluster", category: "Écosystèmes innovation" },
    { id: 99, french: "la Silicon Valley", german: "die Silicon Valley", category: "Références mondiales" },
    { id: 100, french: "l'initiative allemande sur l'IA", german: "die Deutsche KI-Initiative", category: "Initiatives nationales" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [cards, setCards] = useState(vocabularyData);
  const [progress, setProgress] = useState(0);

  // Calcul du progrès
  useEffect(() => {
    setProgress(((currentIndex + 1) / cards.length) * 100);
  }, [currentIndex, cards.length]);

  // Navigation avec les touches
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
        case 'Enter':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'KeyS':
          event.preventDefault();
          shuffleCards();
          break;
        case 'KeyR':
          event.preventDefault();
          resetCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setCards(vocabularyData);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Innovation générale": "bg-carnet-rule/30 text-carnet-ink",
      "Technologie générale": "bg-carnet-rule/30 text-carnet-ink",
      "Souveraineté technologique": "bg-carnet-red/10 text-carnet-red-deep",
      "Transformation numérique": "bg-carnet-rule/30 text-carnet-ink",
      "Intelligence artificielle": "bg-carnet-rule/30 text-carnet-ink",
      "Cybersécurité": "bg-carnet-rule/30 text-carnet-ink",
      "Protection des données": "bg-carnet-rule/30 text-carnet-ink",
      "Stratégies IA": "bg-carnet-rule/30 text-carnet-ink",
      "Concurrence technologique": "bg-carnet-rule/30 text-carnet-ink",
      "Défis numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Indicateurs numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Géopolitique technologique": "bg-carnet-rule/30 text-carnet-ink",
      "Développement IA": "bg-carnet-rule/30 text-carnet-ink",
      "Régulation des données": "bg-carnet-rule/30 text-carnet-ink",
      "Souveraineté numérique": "bg-carnet-red/10 text-carnet-red-deep",
      "Menaces cybernétiques": "bg-carnet-rule/30 text-carnet-ink",
      "Sécurité des infrastructures": "bg-carnet-rule/30 text-carnet-ink",
      "Éthique IA": "bg-carnet-rule/30 text-carnet-ink",
      "Approches nationales": "bg-carnet-rule/30 text-carnet-ink",
      "Données massives": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies IA": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies fondamentales": "bg-carnet-paper-2 text-carnet-ink",
      "Automatisation": "bg-carnet-paper-2 text-carnet-ink",
      "Robotique": "bg-carnet-paper-2 text-carnet-ink",
      "Industrie 4.0": "bg-carnet-red/10 text-carnet-red-deep",
      "Manufacturing intelligent": "bg-carnet-rule/30 text-carnet-ink",
      "IoT et connectivité": "bg-carnet-rule/30 text-carnet-ink",
      "Cloud et infrastructure": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies émergentes": "bg-carnet-rule/30 text-carnet-ink",
      "Monnaies numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Réseaux télécoms": "bg-carnet-rule/30 text-carnet-ink",
      "Infrastructure réseau": "bg-carnet-rule/30 text-carnet-ink",
      "Stratégies numériques": "bg-carnet-red/10 text-carnet-red-deep",
      "Politiques européennes": "bg-carnet-rule/30 text-carnet-ink",
      "Projets européens": "bg-carnet-rule/30 text-carnet-ink",
      "Développement logiciel": "bg-carnet-rule/30 text-carnet-ink",
      "Matériel informatique": "bg-carnet-paper-2 text-carnet-ink",
      "Technologies avancées": "bg-carnet-rule/30 text-carnet-ink",
      "R&D": "bg-carnet-rule/30 text-carnet-ink",
      "Propriété intellectuelle": "bg-carnet-rule/30 text-carnet-ink",
      "Écosystème startup": "bg-carnet-rule/30 text-carnet-ink",
      "Startups valorisées": "bg-carnet-rule/30 text-carnet-ink",
      "Financement innovation": "bg-carnet-rule/30 text-carnet-ink",
      "Hubs d'innovation": "bg-carnet-rule/30 text-carnet-ink",
      "Organismes de recherche": "bg-carnet-red/10 text-carnet-red-deep",
      "Acteurs cybersécurité": "bg-carnet-rule/30 text-carnet-ink",
      "Types d'attaques": "bg-carnet-rule/30 text-carnet-ink",
      "Malwares": "bg-carnet-rule/30 text-carnet-ink",
      "Protection cybernétique": "bg-carnet-rule/30 text-carnet-ink",
      "Sécurité cryptographique": "bg-carnet-rule/30 text-carnet-ink",
      "Authentification": "bg-carnet-rule/30 text-carnet-ink",
      "Organismes sécuritaires": "bg-carnet-paper-2 text-carnet-ink",
      "Infrastructures stratégiques": "bg-carnet-rule/30 text-carnet-ink",
      "Secteurs critiques": "bg-carnet-rule/30 text-carnet-ink",
      "Instances éthiques": "bg-carnet-rule/30 text-carnet-ink",
      "Problèmes éthiques IA": "bg-carnet-rule/30 text-carnet-ink",
      "Principes éthiques": "bg-carnet-rule/30 text-carnet-ink",
      "Cadre réglementaire": "bg-carnet-rule/30 text-carnet-ink",
      "Régulation IA": "bg-carnet-rule/30 text-carnet-ink",
      "Classification IA": "bg-carnet-red/10 text-carnet-red-deep",
      "Types d'IA": "bg-carnet-rule/30 text-carnet-ink",
      "Applications IA": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies controversées": "bg-carnet-rule/30 text-carnet-ink",
      "Risques sociétaux": "bg-carnet-rule/30 text-carnet-ink",
      "Éthique numérique": "bg-carnet-rule/30 text-carnet-ink",
      "Politiques publiques": "bg-carnet-rule/30 text-carnet-ink",
      "Gouvernement actuel": "bg-carnet-rule/30 text-carnet-ink",
      "Périodes politiques": "bg-carnet-rule/30 text-carnet-ink",
      "Institutions gouvernementales": "bg-carnet-rule/30 text-carnet-ink",
      "Performance numérique": "bg-carnet-rule/30 text-carnet-ink",
      "Métriques numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Administration numérique": "bg-carnet-red/10 text-carnet-red-deep",
      "Services numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Inégalités numériques": "bg-carnet-rule/30 text-carnet-ink",
      "Couverture réseau": "bg-carnet-rule/30 text-carnet-ink",
      "Télécommunications": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies spatiales": "bg-carnet-rule/30 text-carnet-ink",
      "Secteur spatial": "bg-carnet-rule/30 text-carnet-ink",
      "Organisations spatiales": "bg-carnet-rule/30 text-carnet-ink",
      "Dépendances stratégiques": "bg-carnet-rule/30 text-carnet-ink",
      "Entreprises chinoises": "bg-carnet-rule/30 text-carnet-ink",
      "Entreprises technologiques": "bg-carnet-paper-2 text-carnet-ink",
      "Semiconducteurs": "bg-carnet-paper-2 text-carnet-ink",
      "Politiques semiconducteurs": "bg-carnet-paper-2 text-carnet-ink",
      "Soutien à l'innovation": "bg-carnet-rule/30 text-carnet-ink",
      "Écosystèmes innovation": "bg-carnet-rule/30 text-carnet-ink",
      "Références mondiales": "bg-carnet-rule/30 text-carnet-ink",
      "Initiatives nationales": "bg-carnet-red/10 text-carnet-red-deep"
    };
    return colors[category as keyof typeof colors] || "bg-carnet-paper-2 text-carnet-ink";
  };

  return (
    <div className="min-h-screen bg-transparent font-dm-sans">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-carnet-paper-2/90 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper-2/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-carnet-ink-soft">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-ink transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <Link to="/formation/allemand" className="hover:text-carnet-ink transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <Link to="/formation/allemand/civilisation" className="hover:text-carnet-ink transition-colors">
              Civilisation
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <span className="text-carnet-ink font-bold">Vocabulaire Innovation</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -z-10 -top-40 -right-40 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -z-10 -bottom-40 -left-40 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red/10 text-carnet-red-deep">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Innovation et Technologie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire de l'innovation et des technologies allemandes avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 8 - Innovation und Technologie</Badge>
            <Badge className="bg-carnet-red hover:bg-carnet-red-deep text-white border-0">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-carnet-ink-soft">Progression</span>
            <span className="text-sm font-medium text-carnet-red-deep">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-carnet-rule/40 rounded-full h-2.5">
            <div 
              className="bg-carnet-red h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Contrôles principaux */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-center gap-3 mb-4">
            <Button
              onClick={shuffleCards}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger (S)
            </Button>
            <Button
              onClick={resetCards}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer (R)
            </Button>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <Lightbulb className="h-4 w-4" />
              Aide
            </Button>
          </div>

          {/* Aide aux raccourcis */}
          {showHelp && (
            <Card className="mb-4 bg-carnet-paper-2 border-carnet-rule">
              <CardContent className="p-4">
                <h3 className="font-semibold text-carnet-ink mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-carnet-ink-soft">
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-carnet-rule/30 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">←</kbd> <kbd className="bg-carnet-rule/30 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">R</kbd> : Recommencer</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Carte principale */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card 
            className="h-80 cursor-pointer transform transition-all duration-500 hover:scale-105 bg-carnet-paper-2/90 backdrop-blur-sm shadow-xl"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="h-full flex flex-col justify-center items-center p-8 relative">
              {/* Badge catégorie */}
              <div className="absolute -z-10 top-4 right-4">
                <Badge className={getCategoryColor(currentCard.category)} variant="secondary">
                  {currentCard.category}
                </Badge>
              </div>

              {/* Indicateur de face */}
              <div className="absolute -z-10 top-4 left-4 flex items-center gap-2">
                {isFlipped ? (
                  <>
                    <Eye className="h-4 w-4 text-carnet-red-deep" />
                    <span className="text-sm font-medium text-carnet-red-deep">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-carnet-red-deep" />
                    <span className="text-sm font-medium text-carnet-red-deep">Français</span>
                  </>
                )}
              </div>

              {/* Contenu de la carte */}
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-carnet-ink mb-6">
                  {isFlipped ? currentCard.german : currentCard.french}
                </div>
                
                {isFlipped && (
                  <div className="text-lg text-carnet-ink-soft bg-carnet-paper-2 rounded-lg p-4">
                    <strong>Français :</strong> {currentCard.french}
                  </div>
                )}
                
                <div className="text-sm text-carnet-ink-mute text-center">
                  Cliquez ou appuyez sur Espace pour retourner
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Button
              onClick={goToPrevious}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 px-6 py-3"
            >
              <ChevronLeft className="h-5 w-5" />
              Précédent
            </Button>
            
            <div className="text-sm text-carnet-ink-soft bg-carnet-paper-2/80 backdrop-blur-sm rounded-lg px-4 py-2">
              {currentIndex + 1} sur {cards.length}
            </div>
            
            <Button
              onClick={goToNext}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 px-6 py-3"
            >
              Suivant
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Section informative */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border border-carnet-rule bg-carnet-paper-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-carnet-ink mb-4">💡 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Technique de révision :</h4>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Pour les concours :</h4>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    <li>• Vocabulaire essentiel pour l'IA et l'innovation</li>
                    <li>• Termes techniques de la cybersécurité</li>
                    <li>• Base indispensable pour Module 8 - Innovation und Technologie</li>
                    <li>• Révisez par thèmes (IA, cyber, startups, recherche)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VocabulaireInnovationFlashcardsPage;