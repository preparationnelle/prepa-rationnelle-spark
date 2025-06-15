import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MethodAllemandPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Allemand – Choisissez votre méthodologie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
            <Link to="/methodologie/allemand/essai" className="w-full md:w-auto">
              <Button className="w-full md:w-48">Essai</Button>
            </Link>
            <Link to="/methodologie/allemand/synthese" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-48">Synthèse</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
