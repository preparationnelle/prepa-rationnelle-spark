import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  ArrowRight,
  Play,
  Brain,
  Target
} from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  difficulty: 'simple' | 'intermediaire' | 'avance';
  courseUrl: string;
}

interface Semester {
  id: number;
  name: string;
  chapters: Chapter[];
  progress: number;
}

export default function MathsApprofondiessModule() {
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  
  const semesters: Semester[] = [
    {
      id: 1,
      name: "Semestre 1",
      progress: 33,
      chapters: [
        {
          id: 1,
          title: "Éléments de logique",
          description: "Propositions, connecteurs logiques, quantificateurs et méthodes de démonstration",
          duration: "3 semaines",
          completed: true,
          difficulty: 'simple',
          courseUrl: "/cours/elements-logique"
        },
        {
          id: 2,
          title: "Ensembles et applications",
          description: "Théorie des ensembles, relations, applications et bijections",
          duration: "4 semaines",
          completed: true,
          difficulty: 'simple',
          courseUrl: "/cours/ensembles-applications"
        },
        {
          id: 3,
          title: "Entiers",
          description: "Arithmétique et structures algébriques",
          duration: "4 semaines",
          completed: false,
          difficulty: 'intermediaire',
          courseUrl: "/cours/entiers"
        },
        {
          id: 4,
          title: "Réels",
          description: "Propriétés et topologie des nombres réels",
          duration: "3 semaines",
          completed: false,
          difficulty: 'intermediaire',
          courseUrl: "/cours/reels"
        },
        {
          id: 5,
          title: "Suites numériques",
          description: "Convergence, limites et critères de convergence",
          duration: "2 semaines",
          completed: false,
          difficulty: 'avance',
          courseUrl: "/cours/suites-numeriques"
        },
        {
          id: 6,
          title: "Fonctions réelles — continuité",
          description: "Continuité et propriétés des fonctions continues",
          duration: "4 semaines",
          completed: false,
          difficulty: 'intermediaire',
          courseUrl: "/cours/fonctions-variable-reelle"
        }
      ]
    }
  ];

  const currentSemester = semesters.find(s => s.id === selectedSemester)!;
  const totalProgress = Math.round(semesters[0].progress);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'simple': return 'bg-blue-100 text-blue-800';
      case 'intermediaire': return 'bg-blue-500 text-white';
      case 'avance': return 'bg-blue-800 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'simple': return 'Simple';
      case 'intermediaire': return 'Intermédiaire';
      case 'avance': return 'Avancé';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* En-tête du module */}
      <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-white mb-2">
            Mathématiques Approfondies ECG
          </CardTitle>
          <p className="text-blue-100 text-lg">
            Concepts avancés et préparation aux concours
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-blue-100">Chapitres</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">1</div>
              <div className="text-blue-100">Semestre</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{totalProgress}%</div>
              <div className="text-blue-100">Progression</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-blue-100">Progression globale</span>
              <span className="text-white font-medium">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-3 bg-white/20" />
          </div>
        </CardContent>
      </Card>

      {/* Sélection du semestre */}
      <Tabs value={selectedSemester.toString()} onValueChange={(value) => setSelectedSemester(parseInt(value))}>
        <TabsList className="grid w-full grid-cols-1 mb-8 bg-blue-50">
          <TabsTrigger value="1" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <BookOpen className="h-4 w-4" />
            Semestre 1
            <Badge className="ml-auto bg-blue-100 text-blue-800">
              {semesters[0].chapters.filter(c => c.completed).length}/6
            </Badge>
          </TabsTrigger>
        </TabsList>

        {semesters.map((semester) => (
          <TabsContent key={semester.id} value={semester.id.toString()}>
            <div className="space-y-6">
              {/* Progression du semestre */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{semester.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      {semester.chapters.filter(c => c.completed).length} / {semester.chapters.length} chapitres terminés
                    </div>
                  </div>
                  <Progress value={semester.progress} className="h-2 bg-blue-100" />
                </CardContent>
              </Card>

              {/* Liste des chapitres */}
              <div className="grid gap-4">
                {semester.chapters.map((chapter) => (
                  <Card key={chapter.id} className="group hover:shadow-lg transition-all duration-300 border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              chapter.completed ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-800'
                            }`}>
                              {chapter.completed ? (
                                <CheckCircle2 className="h-6 w-6" />
                              ) : (
                                <span className="font-bold">{chapter.id}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                                {chapter.title}
                              </h4>
                              <Badge className={getDifficultyColor(chapter.difficulty)}>
                                {getDifficultyLabel(chapter.difficulty)}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {chapter.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{chapter.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions du chapitre */}
                      <div className="flex flex-wrap gap-3">
                        <Link to={chapter.courseUrl}>
                          <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                            <FileText className="h-4 w-4" />
                            Cours
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                          <Calculator className="h-4 w-4" />
                          Exercices
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                          <Brain className="h-4 w-4" />
                          Flashcards
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                          <Play className="h-4 w-4" />
                          Vidéos
                        </Button>
                        
                        <Button 
                          variant={chapter.completed ? "secondary" : "default"} 
                          size="sm" 
                          className="ml-auto flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          {chapter.completed ? (
                            <>
                              <CheckCircle2 className="h-4 w-4" />
                              Revoir
                            </>
                          ) : (
                            <>
                              <Target className="h-4 w-4" />
                              Commencer
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};