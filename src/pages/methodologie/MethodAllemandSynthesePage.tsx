import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Lexique d’analyse d’article fourni par l’utilisateur
const lexique = [
  {
    section: "EINLEITUNG / INTRODUCTION",
    elements: [
      { label: "Présenter les documents", exemples: [
        "Diese Dokumente geben einen Überblick über...",
        "Diese beiden Texte beschäftigen sich mit...",
        "Beide Texte thematisieren...",
        "In den vorliegenden Artikeln geht es um..."
      ]},
      { label: "Situer le débat / la question", exemples: [
        "Die Frage, ob... wird hier unterschiedlich beantwortet.",
        "In diesem Kontext stellt sich die Frage, ob / inwiefern / warum… ?",
        "Die Texte werfen die Frage auf, ob… ?"
      ]}
    ]
  },
  {
    section: "VERGLEICH DER POSITIONEN / COMPARAISON DES POINTS DE VUE",
    elements: [
      { label: "Accord entre les auteurs", exemples: [
        "Die Autoren sind sich darüber einig, dass...",
        "Beide Autoren vertreten die Meinung, dass...",
        "Ihre Meinungen sind sehr ähnlich.",
        "Beide Artikel betrachten ... als...",
        "Beide Texte unterstreichen / betonen / heben hervor, dass...",
        "Sowohl X als auch Y meinen, dass...",
        "... wird auf die gleiche Weise dargestellt wie in Dokument 2."
      ]},
      { label: "Désaccord entre les auteurs", exemples: [
        "Die Autoren der beiden Texte sind über die Frage (+G) [...] nicht völlig einverstanden.",
        "Die Meinungen gehen über die Frage (+G)... auseinander.",
        "Die Meinungen gehen auseinander, was (+Akk)... betrifft.",
        "Während X großen Wert auf ... legt, vertritt Y eine ganz andere Meinung über...",
        "Der Autor legt Wert auf ..., aber er äußert eine ganz entgegengesetzte Meinung über...",
        "X widerspricht Y, indem er sagt, dass...",
        "Für X hingegen ist es keine gute Idee, ... zu +Inf.",
        "Auch wenn X meint, dass..., glaubt Y, dass..."
      ]}
    ]
  },
  {
    section: "AUFBAU / STRUCTURE (par paragraphes)",
    elements: [
      { label: "Paragraphe 1 : introduction de la première thèse", exemples: [
        "Zuerst wird die Frage (+G)... berücksichtigt.",
        "Zunächst wird auf die Frage (+G)... eingegangen.",
        "Der Autor betrachtet... / zieht eine Parallele mit...",
        "Als Hauptargumente führt (Name) an, dass...",
        "Dokument 1 warnt also vor...",
        "(Name) zufolge sollte man...",
        "X erwähnt, dass... / Laut X...",
        "Er selbst behauptet, dass...",
        "In dieser Hinsicht hat er Recht / Unrecht."
      ]},
      { label: "Transition vers le deuxième texte (opposition ou nuance)", exemples: [
        "Auch wenn X meint, dass...",
        "Jedoch ist es eine Bedingung für... laut der...",
        "Im Gegensatz dazu erklärt Y, dass...",
        "Y widerspricht X, indem er behauptet, dass...",
        "Y vertritt eine entgegengesetzte Meinung: ...",
        "Es besteht ein starker Unterschied zwischen... und...",
        "Hingegen hebt Y hervor, dass..."
      ]},
      { label: "Ajouter un second argument", exemples: [
        "Darüber hinaus wird... betrachtet.",
        "Wegen... wird... betont.",
        "Außerdem bedeutet auch [etwas], dass...",
        "Ebenso ist zu erwähnen, dass..."
      ]}
    ]
  },
  {
    section: "VERBINDUNGEN / LIAISONS UTILES",
    elements: [
      { label: null, exemples: [
        "aufgrund von (+D) = en raison de",
        "es liegt daran, dass... = cela est dû au fait que",
        "deshalb / folglich = par conséquent",
        "hingegen / im Gegensatz dazu = en revanche",
        "ebenso = de même",
        "zwar..., aber... = certes..., mais...",
        "nämlich / in der Tat = en effet",
        "trotzdem / dennoch = néanmoins",
        "darüber hinaus = en outre",
        "nicht nur..., sondern auch... = non seulement..., sondern auch..."
      ]}
    ]
  },
  {
    section: "SCHLUSS / CONCLUSION",
    elements: [
      { label: null, exemples: [
        "Durch den Vergleich dieser Dokumente kann gezeigt werden, dass...",
        "Zusammenfassend lässt sich sagen, dass...",
        "Zusammenfassend kann festgestellt werden, dass...",
        "Alles in allem lässt sich sagen, dass...",
        "Letztendlich zeigt sich, dass..."
      ]}
    ]
  },
];

function LexiqueBlock() {
  return (
    <div className="space-y-8">
      {lexique.map((item, idx) => (
        <section key={item.section || idx}>
          <h3 className="text-xl font-bold text-primary mb-2">{item.section}</h3>
          {item.elements.map((el, i) => (
            <div key={i} className="mb-3">
              {el.label && <b className="block mb-1">{el.label}</b>}
              <ul className="ml-5 list-disc text-base space-y-1">
                {el.exemples.map((ex, j) => (
                  <li key={j}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default function MethodAllemandSynthesePage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Allemand – Synthèse d’Article&nbsp;: Lexique d’Analyse</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Retrouve ci-dessous toutes les expressions utiles pour réussir ta <b>synthèse</b> ou analyse d’article en allemand.&nbsp;
            <span className="italic">Analyse, structure et connecteurs, tout y est !</span>
          </p>
          <LexiqueBlock />
        </CardContent>
      </Card>
    </div>
  );
}
