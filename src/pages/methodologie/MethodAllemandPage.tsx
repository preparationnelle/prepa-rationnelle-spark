
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ArticleAllemandEssaiIntroduction from './ArticleAllemandEssaiIntroduction';
import ArticleAllemandEssaiTeil1 from './ArticleAllemandEssaiTeil1';
import ArticleAllemandEssaiTeil2 from './ArticleAllemandEssaiTeil2';
import ArticleAllemandEssaiExemples from './ArticleAllemandEssaiExemples';
import ArticleAllemandEssaiKritik from './ArticleAllemandEssaiKritik';
import ArticleAllemandEssaiConclusion from './ArticleAllemandEssaiConclusion';
import ArticleAllemandAnalyseLexique from './ArticleAllemandAnalyseLexique';

export const MethodAllemandPage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Allemand - Essai Parfait
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Structure complète de l'essai et de la synthèse « parfait » pour l'allemand ECG</p>
          <p className="text-muted-foreground">
            Retrouvez ici la structure complète avec accroche, plan, exemples et toutes les formulations prêtes à l'emploi !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiIntroduction />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiTeil1 />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiTeil2 />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiExemples />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiKritik />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiConclusion />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandAnalyseLexique />
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        <Link to="/methodologie/allemand/essai">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Méthodologie Essai</h3>
              <p className="text-sm text-muted-foreground">Guide complet pour l'essai en allemand</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/methodologie/allemand/synthese">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Méthodologie Synthèse</h3>
              <p className="text-sm text-muted-foreground">Guide complet pour la synthèse en allemand</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
