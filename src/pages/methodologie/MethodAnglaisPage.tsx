import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Youtube } from 'lucide-react';
import ArticleAnglaisOrganisation from './ArticleAnglaisOrganisation';
import ArticleAnglaisThemes from './ArticleAnglaisThemes';
import ArticleAnglaisGrammaire from './ArticleAnglaisGrammaire';
import ArticleAnglaisColles from './ArticleAnglaisColles';
import ArticleAnglaisEssaisSyntheses from './ArticleAnglaisEssaisSyntheses';
import ArticleAnglaisConcours from './ArticleAnglaisConcours';
import ArticleAnglaisProgress from './ArticleAnglaisProgress';
export const MethodAnglaisPage = () => {
  return <div className="relative">
      {/* Floating elements - Blue bubbles */}

      <div className="container max-w-4xl py-10 relative z-10">
        <div className="mb-6">
          <Link to="/methodologie">
            <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold mb-8 text-carnet-red text-center">
          Méthode Complète d'Anglais ECG
        </h1>

        <Card className="mb-8 bg-white border border-carnet-red/20">
          <CardContent className="p-6">
            <p className="text-lg font-semibold mb-2">Prépa Rationnelle : Méthode complète d'anglais en prépa ECG</p>
            <p className="text-gray-600">
              Attention, ceci n'est pas une méthode pour apprendre l'anglais, c'est une méthode pour réussir les épreuves d'anglais en prépa HEC.
            </p>
          </CardContent>
        </Card>

        {/* Video Section */}
        <div className="mb-8">
          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-carnet-red" />
                Vidéo explicative - Méthode complète d'anglais ECG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <iframe src="https://www.loom.com/embed/68e695fb6c1748c39eb045af67f2bae4" frameBorder="0" allowFullScreen className="w-full h-full rounded-lg"></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">1. Organisation et Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisOrganisation />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">2. Maîtriser la civilisation</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisThemes />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">3. Grammaire Essentielle</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisGrammaire />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">4. Préparation des Colles</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisColles />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">5. Essais et Synthèses</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisEssaisSyntheses />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">6. Préparation aux Concours</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisConcours />
            </CardContent>
          </Card>

          <Card className="bg-white border border-carnet-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-carnet-red">7. Suivi des Progrès</CardTitle>
            </CardHeader>
            <CardContent>
              <ArticleAnglaisProgress />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};