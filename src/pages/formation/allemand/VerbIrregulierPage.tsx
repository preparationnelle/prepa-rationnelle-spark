import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCcw, FlipHorizontal, Search, Keyboard } from 'lucide-react';
import { Input } from "@/components/ui/input";

const VerbIrregulierPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFrench, setShowFrench] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        flipCard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        goToPreviousCard();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        goToNextCard();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Liste complète des verbes irréguliers
  const irregularVerbs = [
    { french: "attraper", german: "fangen", present: "fängt", preterit: "fing", partizip: "gefangen", aux: "hat" },
    { french: "commencer", german: "anfangen", present: "fängt an", preterit: "fing an", partizip: "angefangen", aux: "hat" },
    { french: "accueillir", german: "empfangen", present: "empfängt", preterit: "empfing", partizip: "empfangen", aux: "hat" },
    { french: "être suspendu", german: "hängen", present: "hängt", preterit: "hing", partizip: "gehangen", aux: "hat" },
    { french: "souffler", german: "blasen", present: "bläst", preterit: "blies", partizip: "geblasen", aux: "hat" },
    { french: "tomber", german: "fallen", present: "fällt", preterit: "fiel", partizip: "gefallen", aux: "ist" },
    { french: "plaire", german: "gefallen", present: "gefällt", preterit: "gefiel", partizip: "gefallen", aux: "hat" },
    { french: "tenir", german: "halten", present: "hält", preterit: "hielt", partizip: "gehalten", aux: "hat" },
    { french: "garder, conserver", german: "behalten", present: "behält", preterit: "behielt", partizip: "behalten", aux: "hat" },
    { french: "s'entretenir, discuter (de)", german: "sich unterhalten", present: "unterhält sich", preterit: "unterhielt sich", partizip: "unterhalten", aux: "hat" },
    { french: "laisser", german: "lassen", present: "lässt", preterit: "ließ", partizip: "gelassen", aux: "hat" },
    { french: "conseiller", german: "raten", present: "rät", preterit: "riet", partizip: "geraten", aux: "hat" },
    { french: "deviner", german: "erraten", present: "errät", preterit: "erriet", partizip: "erraten", aux: "hat" },
    { french: "courir, fonctionner", german: "laufen", present: "läuft", preterit: "lief", partizip: "gelaufen", aux: "ist" },
    { french: "dormir", german: "schlafen", present: "schläft", preterit: "schlief", partizip: "geschlafen", aux: "hat" },
    { french: "s'endormir", german: "einschlafen", present: "schläft ein", preterit: "schlief ein", partizip: "eingeschlafen", aux: "ist" },
    { french: "rôtir", german: "braten", present: "brät", preterit: "briet", partizip: "gebraten", aux: "hat" },
    { french: "aller (véhicule)", german: "fahren", present: "fährt", preterit: "fuhr", partizip: "gefahren", aux: "ist" },
    { french: "conduire", german: "fahren", present: "fährt", preterit: "fuhr", partizip: "gefahren", aux: "hat" },
    { french: "partir", german: "abfahren", present: "fährt ab", preterit: "fuhr ab", partizip: "abgefahren", aux: "ist" },
    { french: "apprendre (nouvelle)", german: "erfahren", present: "erfährt", preterit: "erfuhr", partizip: "erfahren", aux: "hat" },
    { french: "creuser", german: "graben", present: "gräbt", preterit: "grub", partizip: "gegraben", aux: "hat" },
    { french: "charger", german: "laden", present: "lädt", preterit: "lud", partizip: "geladen", aux: "hat" },
    { french: "inviter", german: "einladen", present: "lädt ein", preterit: "lud ein", partizip: "eingeladen", aux: "hat" },
    { french: "battre, frapper", german: "schlagen", present: "schlägt", preterit: "schlug", partizip: "geschlagen", aux: "hat" },
    { french: "proposer", german: "vorschlagen", present: "schlägt vor", preterit: "schlug vor", partizip: "vorgeschlagen", aux: "hat" },
    { french: "porter", german: "tragen", present: "trägt", preterit: "trug", partizip: "getragen", aux: "hat" },
    { french: "croître, grandir", german: "wachsen", present: "wächst", preterit: "wuchs", partizip: "gewachsen", aux: "ist" },
    { french: "laver", german: "waschen", present: "wäscht", preterit: "wusch", partizip: "gewaschen", aux: "hat" },
    { french: "créer", german: "schaffen", present: "schafft", preterit: "schuf", partizip: "geschaffen", aux: "hat" },
    { french: "être debout", german: "stehen", present: "steht", preterit: "stand", partizip: "gestanden", aux: "hat" },
    { french: "se lever", german: "aufstehen", present: "steht auf", preterit: "stand auf", partizip: "aufgestanden", aux: "ist" },
    { french: "comprendre", german: "verstehen", present: "versteht", preterit: "verstand", partizip: "verstanden", aux: "hat" },
    { french: "aller", german: "gehen", present: "geht", preterit: "ging", partizip: "gegangen", aux: "ist" },
    { french: "sortir", german: "ausgehen", present: "geht aus", preterit: "ging aus", partizip: "ausgegangen", aux: "ist" },
    { french: "partir, s'en aller", german: "weggehen", present: "geht weg", preterit: "ging weg", partizip: "weggegangen", aux: "ist" },
    { french: "lever, soulever", german: "heben", present: "hebt", preterit: "hob", partizip: "gehoben", aux: "hat" },
    { french: "donner", german: "geben", present: "gibt", preterit: "gab", partizip: "gegeben", aux: "hat" },
    { french: "dépenser", german: "ausgeben", present: "gibt aus", preterit: "gab aus", partizip: "ausgegeben", aux: "hat" },
    { french: "manger", german: "essen", present: "isst", preterit: "aß", partizip: "gegessen", aux: "hat" },
    { french: "manger (animal)", german: "fressen", present: "frisst", preterit: "fraß", partizip: "gefressen", aux: "hat" },
    { french: "mesurer", german: "messen", present: "misst", preterit: "maß", partizip: "gemessen", aux: "hat" },
    { french: "oublier", german: "vergessen", present: "vergisst", preterit: "vergaß", partizip: "vergessen", aux: "hat" },
    { french: "marcher", german: "treten", present: "tritt", preterit: "trat", partizip: "getreten", aux: "ist" },
    { french: "lire", german: "lesen", present: "liest", preterit: "las", partizip: "gelesen", aux: "hat" },
    { french: "voir", german: "sehen", present: "sieht", preterit: "sah", partizip: "gesehen", aux: "hat" },
    { french: "avoir l'air", german: "aussehen", present: "sieht aus", preterit: "sah aus", partizip: "ausgesehen", aux: "hat" },
    { french: "regarder, contempler", german: "(sich) ansehen", present: "sieht (sich) an", preterit: "sah (sich) an", partizip: "angesehen", aux: "hat" },
    { french: "regarder la TV", german: "fernsehen", present: "sieht fern", preterit: "sah fern", partizip: "ferngesehen", aux: "hat" },
    { french: "se passer, arriver", german: "geschehen", present: "geschieht", preterit: "geschah", partizip: "geschehen", aux: "ist" },
    { french: "briser, casser", german: "brechen", present: "bricht", preterit: "brach", partizip: "gebrochen", aux: "hat" },
    { french: "parler", german: "sprechen", present: "spricht", preterit: "sprach", partizip: "gesprochen", aux: "hat" },
    { french: "promettre", german: "versprechen", present: "verspricht", preterit: "versprach", partizip: "versprochen", aux: "hat" },
    { french: "aider", german: "helfen", present: "hilft", preterit: "half", partizip: "geholfen", aux: "hat" },
    { french: "s'effrayer (de)", german: "erschrecken", present: "erschrickt", preterit: "erschrak", partizip: "erschrocken", aux: "ist" },
    { french: "prendre", german: "nehmen", present: "nimmt", preterit: "nahm", partizip: "genommen", aux: "hat" },
    { french: "accepter", german: "annehmen", present: "nimmt an", preterit: "nahm an", partizip: "angenommen", aux: "hat" },
    { french: "participer", german: "teilnehmen", present: "nimmt teil", preterit: "nahm teil", partizip: "teilgenommen", aux: "hat" },
    { french: "mourir", german: "sterben", present: "stirbt", preterit: "starb", partizip: "gestorben", aux: "ist" },
    { french: "rencontrer", german: "treffen", present: "trifft", preterit: "traf", partizip: "getroffen", aux: "hat" },
    { french: "jeter", german: "werfen", present: "wirft", preterit: "warf", partizip: "geworfen", aux: "hat" },
    { french: "reprocher", german: "vorwerfen", present: "wirft vor", preterit: "warf vor", partizip: "vorgeworfen", aux: "hat" },
    { french: "voler, dérober", german: "stehlen", present: "stiehlt", preterit: "stahl", partizip: "gestohlen", aux: "hat" },
    { french: "ordonner, commander", german: "befehlen", present: "befiehlt", preterit: "befahl", partizip: "befohlen", aux: "hat" },
    { french: "recommander", german: "empfehlen", present: "empfiehlt", preterit: "empfahl", partizip: "empfohlen", aux: "hat" },
    { french: "rester", german: "bleiben", present: "bleibt", preterit: "blieb", partizip: "geblieben", aux: "ist" },
    { french: "prêter", german: "leihen", present: "leiht", preterit: "lieh", partizip: "geliehen", aux: "hat" },
    { french: "sembler, luire", german: "scheinen", present: "scheint", preterit: "schien", partizip: "geschienen", aux: "hat" },
    { french: "écrire", german: "schreiben", present: "schreibt", preterit: "schrieb", partizip: "geschrieben", aux: "hat" },
    { french: "copier", german: "abschreiben", present: "schreibt ab", preterit: "schrieb ab", partizip: "abgeschrieben", aux: "hat" },
    { french: "crier", german: "schreien", present: "schreit", preterit: "schrie", partizip: "geschrien", aux: "hat" },
    { french: "se taire", german: "schweigen", present: "schweigt", preterit: "schwieg", partizip: "geschwiegen", aux: "hat" },
    { french: "monter", german: "steigen", present: "steigt", preterit: "stieg", partizip: "gestiegen", aux: "ist" },
    { french: "monter (véhicule)", german: "einsteigen", present: "steigt ein", preterit: "stieg ein", partizip: "eingestiegen", aux: "ist" },
    { french: "descendre (véhicule)", german: "aussteigen", present: "steigt aus", preterit: "stieg aus", partizip: "ausgestiegen", aux: "ist" },
    { french: "changer", german: "umsteigen", present: "steigt um", preterit: "stieg um", partizip: "umgestiegen", aux: "ist" },
    { french: "mordre", german: "beißen", present: "beißt", preterit: "biss", partizip: "gebissen", aux: "hat" },
    { french: "ressembler", german: "gleichen", present: "gleicht", preterit: "glich", partizip: "geglichen", aux: "hat" },
    { french: "tendre la main vers", german: "greifen", present: "greift", preterit: "griff", partizip: "gegriffen", aux: "hat" },
    { french: "saisir", german: "ergreifen", present: "ergreift", preterit: "ergriff", partizip: "ergriffen", aux: "hat" },
    { french: "siffler", german: "pfeifen", present: "pfeift", preterit: "pfiff", partizip: "gepfiffen", aux: "hat" },
    { french: "couper", german: "schneiden", present: "schneidet", preterit: "schnitt", partizip: "geschnitten", aux: "hat" },
    { french: "se disputer", german: "sich streiten", present: "streitet sich", preterit: "stritt sich", partizip: "gestritten", aux: "hat" },
    { french: "souffrir", german: "leiden", present: "leidet", preterit: "litt", partizip: "gelitten", aux: "hat" },
    { french: "s'appeler, vouloir dire", german: "heißen", present: "heißt", preterit: "hieß", partizip: "geheißen", aux: "hat" },
    { french: "trouver", german: "finden", present: "findet", preterit: "fand", partizip: "gefunden", aux: "hat" },
    { french: "attacher", german: "binden", present: "bindet", preterit: "band", partizip: "gebunden", aux: "hat" },
    { french: "réussir", german: "gelingen", present: "gelingt", preterit: "gelang", partizip: "gelungen", aux: "ist" },
    { french: "chanter", german: "singen", present: "singt", preterit: "sang", partizip: "gesungen", aux: "hat" },
    { french: "s'enfoncer, couler", german: "sinken", present: "sinkt", preterit: "sank", partizip: "gesunken", aux: "ist" },
    { french: "sauter", german: "springen", present: "springt", preterit: "sprang", partizip: "gesprungen", aux: "ist" },
    { french: "forcer, contraindre", german: "zwingen", present: "zwingt", preterit: "zwang", partizip: "gezwungen", aux: "hat" },
    { french: "boire", german: "trinken", present: "trinkt", preterit: "trank", partizip: "getrunken", aux: "hat" },
    { french: "disparaître", german: "verschwinden", present: "verschwindet", preterit: "verschwand", partizip: "verschwunden", aux: "ist" },
    { french: "débuter", german: "beginnen", present: "beginnt", preterit: "begann", partizip: "begonnen", aux: "hat" },
    { french: "gagner", german: "gewinnen", present: "gewinnt", preterit: "gewann", partizip: "gewonnen", aux: "hat" },
    { french: "nager", german: "schwimmen", present: "schwimmt", preterit: "schwamm", partizip: "geschwommen", aux: "ist" },
    { french: "prier, demander", german: "bitten", present: "bittet", preterit: "bat", partizip: "gebeten", aux: "hat" },
    { french: "être assis", german: "sitzen", present: "sitzt", preterit: "saß", partizip: "gesessen", aux: "hat" },
    { french: "posséder", german: "besitzen", present: "besitzt", preterit: "besaß", partizip: "besessen", aux: "hat" },
    { french: "être couché, être posé", german: "liegen", present: "liegt", preterit: "lag", partizip: "gelegen", aux: "hat" },
    { french: "tourner, obliquer", german: "abbiegen", present: "biegt ab", preterit: "bog ab", partizip: "abgebogen", aux: "ist" },
    { french: "offrir", german: "bieten", present: "bietet", preterit: "bot", partizip: "geboten", aux: "hat" },
    { french: "voler (air)", german: "fliegen", present: "fliegt", preterit: "flog", partizip: "geflogen", aux: "ist" },
    { french: "fuir", german: "fliehen", present: "flieht", preterit: "floh", partizip: "geflohen", aux: "ist" },
    { french: "couler", german: "fließen", present: "fließt", preterit: "floss", partizip: "geflossen", aux: "ist" },
    { french: "exclure", german: "ausschließen", present: "schließt aus", preterit: "schloss aus", partizip: "ausgeschlossen", aux: "hat" },
    { french: "décider", german: "beschließen", present: "beschließt", preterit: "beschloss", partizip: "beschlossen", aux: "hat" },
    { french: "avoir froid", german: "frieren", present: "friert", preterit: "fror", partizip: "gefroren", aux: "hat" },
    { french: "tirer", german: "ziehen", present: "zieht", preterit: "zog", partizip: "gezogen", aux: "hat" },
    { french: "mettre un habit", german: "anziehen", present: "zieht an", preterit: "zog an", partizip: "angezogen", aux: "hat" },
    { french: "enlever un habit", german: "ausziehen", present: "zieht aus", preterit: "zog aus", partizip: "ausgezogen", aux: "hat" },
    { french: "se changer", german: "sich umziehen", present: "zieht sich um", preterit: "zog sich um", partizip: "umgezogen", aux: "hat" },
    { french: "éduquer", german: "erziehen", present: "erzieht", preterit: "erzog", partizip: "erzogen", aux: "hat" },
    { french: "sentir", german: "riechen", present: "riecht", preterit: "roch", partizip: "gerochen", aux: "hat" },
    { french: "perdre", german: "verlieren", present: "verliert", preterit: "verlor", partizip: "verloren", aux: "hat" },
    { french: "interdire", german: "verbieten", present: "verbietet", preterit: "verbot", partizip: "verboten", aux: "hat" },
    { french: "venir", german: "kommen", present: "kommt", preterit: "kam", partizip: "gekommen", aux: "ist" },
    { french: "arriver", german: "ankommen", present: "kommt an", preterit: "kam an", partizip: "angekommen", aux: "ist" },
    { french: "recevoir", german: "bekommen", present: "bekommt", preterit: "bekam", partizip: "bekommen", aux: "hat" },
    { french: "faire", german: "tun", present: "tut", preterit: "tat", partizip: "getan", aux: "hat" },
    { french: "appeler, crier", german: "rufen", present: "ruft", preterit: "rief", partizip: "gerufen", aux: "hat" },
    { french: "appeler, téléphoner", german: "anrufen", present: "ruft an", preterit: "rief an", partizip: "angerufen", aux: "hat" },
    { french: "mentir", german: "lügen", present: "lügt", preterit: "log", partizip: "gelogen", aux: "hat" }
  ];

  // Filtrer les verbes en fonction de la recherche
  const filteredVerbs = irregularVerbs.filter(verb => 
    verb.french.toLowerCase().includes(searchTerm.toLowerCase()) || 
    verb.german.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Navigation entre les cartes
  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredVerbs.length - 1 ? 0 : prevIndex + 1
    );
    setShowFrench(true);
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredVerbs.length - 1 : prevIndex - 1
    );
    setShowFrench(true);
  };

  // Retourner la carte
  const flipCard = () => {
    setShowFrench(!showFrench);
  };

  // Réinitialiser à la première carte
  const resetToFirst = () => {
    setCurrentIndex(0);
    setShowFrench(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link to="/formation/allemand" className="mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Verbes Irréguliers Allemands</h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
        >
          <Keyboard className="h-4 w-4 mr-2" />
          Raccourcis
        </Button>
      </div>

      {showKeyboardShortcuts && (
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 flex items-center">
            <Keyboard className="h-4 w-4 mr-2" />
            Raccourcis clavier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <kbd className="px-2 py-1 bg-white rounded border shadow-sm">Espace</kbd>
              <span className="ml-2">ou</span>
              <kbd className="px-2 py-1 bg-white rounded border shadow-sm ml-2">Entrée</kbd>
              <span className="ml-2">Retourner la carte</span>
            </div>
            <div className="flex items-center">
              <kbd className="px-2 py-1 bg-white rounded border shadow-sm">←</kbd>
              <span className="ml-2">Carte précédente</span>
            </div>
            <div className="flex items-center">
              <kbd className="px-2 py-1 bg-white rounded border shadow-sm">→</kbd>
              <span className="ml-2">Carte suivante</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <h2 className="font-semibold text-yellow-800 mb-2">Comment utiliser les flashcards</h2>
        <p className="text-yellow-700 text-sm">
          Utilisez les flèches du clavier ou les boutons pour naviguer entre les verbes. 
          Appuyez sur Espace/Entrée ou cliquez sur la carte pour voir la traduction et la conjugaison. 
          Le compteur vous indique votre progression.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher un verbe..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredVerbs.length > 0 ? (
        <div className="max-w-3xl mx-auto">
          <Card 
            className="border-2 hover:border-yellow-300 cursor-pointer transition-all mb-6 transform hover:scale-[1.02] active:scale-[0.98] duration-200"
            onClick={flipCard}
          >
            <CardContent className="p-8">
              <div className="min-h-[300px] flex flex-col items-center justify-center">
                {showFrench ? (
                  <div className="text-center space-y-6">
                    <Badge variant="outline" className="mb-4 text-lg px-4 py-1">Français</Badge>
                    <p className="font-medium text-4xl">{filteredVerbs[currentIndex].french}</p>
                    <p className="text-muted-foreground text-sm mt-8">Cliquez ou appuyez sur Espace pour retourner</p>
                  </div>
                ) : (
                  <div className="text-center w-full">
                    <Badge variant="outline" className="bg-red-50 mb-6 text-lg px-4 py-1">Deutsch</Badge>
                    <div className="space-y-4 text-lg">
                      <p className="font-medium text-2xl mb-6">
                        <span className="text-primary">{filteredVerbs[currentIndex].german}</span>
                      </p>
                      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-500 mb-1">Präsens (er)</p>
                          <p className="text-primary">{filteredVerbs[currentIndex].present}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-500 mb-1">Präteritum (er)</p>
                          <p className="text-primary">{filteredVerbs[currentIndex].preterit}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-500 mb-1">Partizip II</p>
                          <p className="text-primary">{filteredVerbs[currentIndex].partizip}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-500 mb-1">Auxiliaire</p>
                          <p className="text-primary">{filteredVerbs[currentIndex].aux}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={goToPreviousCard}
              className="flex-1 mr-2 border-2"
              size="lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Précédent
            </Button>
            <div className="flex flex-col items-center mx-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetToFirst}
                className="mb-2"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
              <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
                {currentIndex + 1} / {filteredVerbs.length}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={goToNextCard}
              className="flex-1 ml-2 border-2"
              size="lg"
            >
              Suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Aucun verbe trouvé pour cette recherche.</p>
        </div>
      )}
    </div>
  );
};

export default VerbIrregulierPage; 