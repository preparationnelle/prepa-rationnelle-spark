import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ArticleAllemandEssaiIntroduction from "./ArticleAllemandEssaiIntroduction";
import ArticleAllemandEssaiTeil1 from "./ArticleAllemandEssaiTeil1";
import ArticleAllemandEssaiTeil2 from "./ArticleAllemandEssaiTeil2";
import ArticleAllemandEssaiExemples from "./ArticleAllemandEssaiExemples";
import ArticleAllemandEssaiKritik from "./ArticleAllemandEssaiKritik";
import ArticleAllemandEssaiConclusion from "./ArticleAllemandEssaiConclusion";
import ArticleAllemandAnalyseLexique from "./ArticleAllemandAnalyseLexique";

const articles = [
  { id: "article-1", title: "EINLEITUNG / INTRODUCTION" },
  { id: "article-2", title: "TEIL I: Kritik an der Gegenthese" },
  { id: "article-3", title: "TEIL II: Eigene Meinung entwickeln" },
  { id: "article-4", title: "BEISPIELE UND ZAHLEN" },
  { id: "article-5", title: "KRITIK UND KOMMENTAR" },
  { id: "article-6", title: "SCHLUSS / CONCLUSION" },
  { id: "article-7", title: "ANALYSE D’ARTICLE — LEXIQUE" }
];

export default function MethodAllemandPage() {
  // Scroll vers la bonne section
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
        <h2 className="text-lg font-bold mb-2 text-primary">Sommaire – Essai Parfait (Allemand)</h2>
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

      <Card id="article-1">
        <CardHeader>
          <CardTitle>EINLEITUNG / INTRODUCTION</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiIntroduction />
        </CardContent>
      </Card>

      <Card id="article-2">
        <CardHeader>
          <CardTitle>TEIL I: Kritik an der Gegenthese</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiTeil1 />
        </CardContent>
      </Card>

      <Card id="article-3">
        <CardHeader>
          <CardTitle>TEIL II: Eigene Meinung entwickeln</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiTeil2 />
        </CardContent>
      </Card>

      <Card id="article-4">
        <CardHeader>
          <CardTitle>BEISPIELE UND ZAHLEN</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiExemples />
        </CardContent>
      </Card>

      <Card id="article-5">
        <CardHeader>
          <CardTitle>KRITIK UND KOMMENTAR</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiKritik />
        </CardContent>
      </Card>

      <Card id="article-6">
        <CardHeader>
          <CardTitle>SCHLUSS / CONCLUSION</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAllemandEssaiConclusion />
        </CardContent>
      </Card>

      <Card id="article-7">
        <CardHeader>
          <CardTitle>ANALYSE D’ARTICLE — LEXIQUE</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Nouvelle section lexique */}
          {/** @ts-ignore  */}
          {/** Voir src/pages/methodologie/ArticleAllemandAnalyseLexique.tsx */}
          <React.Suspense fallback={<span>Chargement…</span>}>
            <ArticleAllemandAnalyseLexique />
          </React.Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
