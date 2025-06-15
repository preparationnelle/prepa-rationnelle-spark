import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "maths", label: "Maths", link: "/methodologie/maths" },
  { id: "geopolitique", label: "Géopolitique", link: "/methodologie/geopolitique" },
  { id: "anglais", label: "Anglais", link: "/methodologie/anglais" },
  { id: "culturegenerale", label: "Culture Générale", link: "/methodologie/culture-generale" },
  { id: "allemand", label: "Allemand", link: "/methodologie/allemand" }, // bien la route vers allemand
  { id: "python", label: "Module Python (bonus)", link: "/methodologie/python" }
];

export default function MethodologiePage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Prépa ECG
      </h1>
      <nav className="mb-10 flex flex-wrap justify-center gap-4">
        {sections.map(section => (
          <Link
            key={section.id}
            to={section.link}
            className="border-2 border-[#ff9100] text-[#ff9100] bg-white font-semibold px-5 py-2 rounded-lg transition hover:bg-[#ff9100] hover:text-white hover:shadow"
            style={section.id === "python" ? { marginTop: "8px" } : {}}
          >
            {section.label}
          </Link>
        ))}
      </nav>
      {/* Aperçus */}
      <div className="space-y-7">
        {/* Maths */}
        <Card>
          <CardHeader>
            <CardTitle>Maths</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Module en préparation – la méthodologie complète pour réussir en maths sera bientôt disponible ici !</p>
            <Link to="/methodologie/maths">
              <Button variant="outline">Aperçu Maths</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Géopolitique */}
        <Card>
          <CardHeader>
            <CardTitle>Géopolitique</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Module à venir – conseils méthodologiques, plans et astuces pour la géopolitique arriveront très bientôt !</p>
            <Link to="/methodologie/geopolitique">
              <Button variant="outline">Aperçu Géopolitique</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Langues – Anglais */}
        <Card>
          <CardHeader>
            <CardTitle>Langues – Aperçu Méthode Anglais ECG</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 font-semibold">Prépa Rationnelle : Méthode complète d’anglais en prépa ECG</p>
            <p className="mb-2">Attention, ceci n’est pas une méthode pour apprendre l’anglais, c’est une méthode pour réussir les épreuves d’anglais en prépa HEC.</p>
            <Link to="/methodologie/anglais">
              <Button variant="outline">Découvrir la méthode anglaise</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Allemand */}
        <Card>
          <CardHeader>
            <CardTitle>Allemand – Essai parfait</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Retrouve la structure complète de l’essai « parfait » pour l’allemand ECG : accroche, plan, exemples et toutes les formulations prêtes à l’emploi !</p>
            <Link to="/methodologie/allemand">
              <Button variant="outline">Découvrir la méthode Allemand</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Culture générale */}
        <Card>
          <CardHeader>
            <CardTitle>Culture Générale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              Pourquoi les conseils classiques en Culture Générale sont inadaptés ?<br />
              La plupart des cours de CG noient sous la masse d’informations… Cette méthode vise à te donner les clés pour trier et réussir !
            </p>
            <Link to="/methodologie/culture-generale">
              <Button variant="outline">Découvrir la méthode CG</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Python */}
        <Card>
          <CardHeader>
            <CardTitle>Python (bonus)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Ce module bonus sur Python pour les prépas ECG sera prochainement disponible ici !</p>
            <Link to="/methodologie/python">
              <Button variant="outline">Aperçu Python</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
