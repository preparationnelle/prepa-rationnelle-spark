
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ArticleAnglaisGrammaire from "./ArticleAnglaisGrammaire";
import ArticleAnglaisProgress from "./ArticleAnglaisProgress";
import ArticleAnglaisThemes from "./ArticleAnglaisThemes";
import ArticleAnglaisColles from "./ArticleAnglaisColles";
import ArticleAnglaisEssaisSyntheses from "./ArticleAnglaisEssaisSyntheses";
import ArticleAnglaisConcours from "./ArticleAnglaisConcours";
import ArticleAnglaisOrganisation from "./ArticleAnglaisOrganisation";
import React from "react";

const articles = [
  {
    id: "article-1",
    title: "Traduction et Grammaire",
  },
  {
    id: "article-2",
    title: "Garder une trace de vos progrès : un point essentiel",
  },
  {
    id: "article-3",
    title: "Approfondir les Thèmes qui tombent aux concours et l’actualité",
  },
  {
    id: "article-4",
    title: "Préparation Structurée des Colles",
  },
  {
    id: "article-5",
    title: "Réussir Essais et Synthèses",
  },
  {
    id: "article-6",
    title: "Maximisez Votre Travail à l’Approche des Concours",
  },
  {
    id: "article-7",
    title: "Organisation du temps",
  },
];

export default function MethodAnglaisPage() {
  // Scroll vers l’ancre correspondante
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      {/* Table des matières */}
      <nav className="bg-accent/40 border border-accent rounded-lg p-4 mb-8 shadow-sm">
        <h2 className="text-lg font-bold mb-2 text-primary">Sommaire de la méthode</h2>
        <ol className="list-decimal ml-6 space-y-1">
          {articles.map((article, idx) => (
            <li key={article.id}>
              <button
                className="text-left hover:underline text-primary/90 font-medium focus:outline-none transition"
                onClick={() => handleScrollTo(article.id)}
                type="button"
              >
                {idx + 1}. {article.title}
              </button>
            </li>
          ))}
        </ol>
      </nav>
      {/* Articles */}
      <Card id="article-1">
        <CardHeader>
          <CardTitle>Traduction et Grammaire</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisGrammaire />
        </CardContent>
      </Card>

      <Card id="article-2">
        <CardHeader>
          <CardTitle>Garder une trace de vos progrès : un point essentiel</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisProgress />
        </CardContent>
      </Card>

      <Card id="article-3">
        <CardHeader>
          <CardTitle>Approfondir les Thèmes qui tombent aux concours et l’actualité</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisThemes />
        </CardContent>
      </Card>

      <Card id="article-4">
        <CardHeader>
          <CardTitle>Préparation Structurée des Colles</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisColles />
        </CardContent>
      </Card>

      <Card id="article-5">
        <CardHeader>
          <CardTitle>Réussir Essais et Synthèses</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisEssaisSyntheses />
        </CardContent>
      </Card>

      <Card id="article-6">
        <CardHeader>
          <CardTitle>Maximisez Votre Travail à l’Approche des Concours</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisConcours />
        </CardContent>
      </Card>

      <Card id="article-7">
        <CardHeader>
          <CardTitle>Organisation du temps</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisOrganisation />
        </CardContent>
      </Card>
    </div>
  );
}
