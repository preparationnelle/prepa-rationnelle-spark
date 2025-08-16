
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Calculator, 
  Code, 
  GraduationCap, 
  ArrowRight,
  Video,
  Gift
} from "lucide-react";

export const OffersSection = () => {
  const [answers, setAnswers] = useState({ objectif: "", matiere: "", niveau: "" });

  const computeLink = (): string => {
    // Simple router based on answers
    if (answers.matiere === "maths") return "/offre/coaching-maths";
    if (answers.matiere === "python") return "/offre/coaching-python";
    if (answers.objectif === "organisation") return "/offre/organisation-ete";
    return "/nos-offres";
  };

  return (
  <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#F0F8FF' }}>
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Quelle Est Ta Situation Actuelle ? <span className="text-[#F36C00]">Trouve la Solution Parfaite</span> pour Booster Ta Prépa
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Réponds à ce Mini‑QCM et reçois des tips personnalisés gratuits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Colonne principale - Questions */}
        <div className="space-y-6">
          <Card className="border-2">
            <CardContent className="p-6 space-y-5">
              <div>
                <Label className="mb-2 block">Quel est ton objectif principal ?</Label>
                <Select onValueChange={(v) => setAnswers(a => ({ ...a, objectif: v }))}>
                  <SelectTrigger><SelectValue placeholder="Choisir…" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organisation">Mieux t'organiser</SelectItem>
                    <SelectItem value="progresser">Gagner des points rapidement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">Quelle matière veux‑tu travailler ?</Label>
                <Select onValueChange={(v) => setAnswers(a => ({ ...a, matiere: v }))}>
                  <SelectTrigger><SelectValue placeholder="Choisir…" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maths">Maths</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="autre">Autres matières</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">Ton niveau actuel</Label>
                <Select onValueChange={(v) => setAnswers(a => ({ ...a, niveau: v }))}>
                  <SelectTrigger><SelectValue placeholder="Choisir…" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debutant">Débutant</SelectItem>
                    <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                    <SelectItem value="avance">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3">
                <Input placeholder="Ton email pour recevoir un plan gratuit" className="flex-1" />
                <Link to={computeLink()}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Voir ma recommandation</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Offres détaillées listées à droite uniquement */}
        </div>

        {/* Colonne droite — Offres listées */}
        <div className="space-y-6">
          {/* Chapitres Libres - Nouvelle offre en premier */}
          <Link to="/chapitres-libres" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm hover:bg-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">LIBRE</span>
                </div>
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Video className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-2">Chapitres Maths Gratuits !</h3>
                    <p className="text-sm text-gray-600">Suites, Séries, Intégrales impropres - Cours + Exercices + Quiz</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Offre Gratuite */}
          <Link to="/offre/gratuite" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm hover:bg-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-2 right-2">
                  <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">GRATUIT</span>
                </div>
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors mb-2">Sessions Live Gratuites !</h3>
                    <p className="text-sm text-gray-600">Préparation rentrée ECG1/ECG2 - 15 & 16 août 2025</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/organisation-ete" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors mb-2">Tu veux t'organiser mieux cet été ?</h3>
                    <p className="text-sm text-gray-600">Planning personnalisé + méthodes pour une rentrée sans stress.</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/coaching-maths" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">Besoin de coaching en Maths ?</h3>
                    <p className="text-sm text-gray-600">Suivi personnalisé pour +5 points — progression garantie.</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offre/coaching-python" className="block">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 bg-white/90 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-2">Coaching Python ?</h3>
                    <p className="text-sm text-gray-600">54 commandes + exercices concours — +3 à 5 points garantis.</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default OffersSection;
