import React from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">{children}</h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-3">{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 text-gray-700 leading-relaxed">{children}</li>
);

const CollesAnglaisPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-800 transition-colors">Formation Anglais ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/anglais/methodologie-complete" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span>Les Colles d’Anglais</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Les Colles d’Anglais</h1>
          </div>

          <P>Style sobre et efficace. L’objectif est de réussir l’oral en allant à l’essentiel : un résumé clair puis un commentaire structuré.</P>

          <SectionTitle>Le résumé</SectionTitle>
          <ul className="list-disc pl-6">
            <LI>Commencer par une accroche : date / citation / événement en lien.</LI>
            <LI>Annoncer la nature du document, sa date et son enjeu : <em>This article taken from…, was published in… and deals with the issue of…</em></LI>
            <LI>Mentionner l’orientation politique du journal si elle transparaît.</LI>
          </ul>
          <P>Les articles anglais hiérarchisent leurs informations. Suivre un plan type aide à rester clair :</P>
          <div className="bg-white border rounded-md p-4 text-gray-800">
            <P><strong>Plan type 1</strong> : What? → Why? → Consequences / solutions?</P>
            <P className="mb-0"><strong>Plan type 2</strong> : What? → Reactions? → Consequences / solutions?</P>
          </div>
          <P className="mt-4">Piocher dans le texte les éléments pour remplir le plan.</P>
          <SubTitle>Phrases utiles</SubTitle>
          <ul className="list-disc pl-6">
            <LI>The article starts off by explaining…</LI>
            <LI>As the article goes on, we learn that…</LI>
            <LI>Eventually, …</LI>
          </ul>
          <P>Terminer par une phrase qui condense l’idée centrale : <em>So the main idea that this article brings up is that…</em></P>

          <SectionTitle>Le commentaire</SectionTitle>
          <P>Ouvrir par une question (parfois précédée d’un paradoxe) qui fait la transition avec le résumé.</P>
          <P>On distingue deux catégories : <strong>news article</strong> et <strong>opinion piece</strong>.</P>

          <SubTitle>I – Les articles d’opinion</SubTitle>
          <P>Comme l’auteur défend un point de vue, il faut en peser les biais, le ton, et d’éventuels partis pris.</P>
          <ul className="list-disc pl-6">
            <LI><em>In focusing too much on… the article is ignoring…; this is however half of the equation!</em></LI>
            <LI><em>The article mocks… and turn it into something ridiculous.</em></LI>
          </ul>

          <SubTitle>II – Les autres articles</SubTitle>
          <P>La plupart traitent d’un sujet inscrit dans un thème plus large (environnement, inégalités, technologie…). Voici une démarche :</P>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Traquer les éléments vraiment nouveaux de l’article. Repérer 2–3 points atypiques pour un commentaire distinctif.</li>
          </ol>
          <div className="bg-gray-50 border rounded-md p-4">
            <P className="mb-0"><strong>Exemple</strong> : à partir de l’article « Canadian inferno… », éviter un topo général sur le climat et discuter plutôt de la difficulté à penser hors des modèles préexistants (cf. Taleb, <em>The Black Swan</em>).</P>
          </div>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mt-4" start={2}>
            <li>Si peu d’axes atypiques, traiter les causes structurelles avec une argumentation serrée et, si possible, un auteur de référence.</li>
            <li>Mobiliser des repères historiques quand c’est pertinent.</li>
            <li>Conclure par conséquences ou solutions, en citant des références originales (films, séries, œuvres…).</li>
          </ol>

          <P className="mt-4">Donner explicitement votre avis dans une partie dédiée ou une courte conclusion qui ferme l’oral. La question directrice doit englober l’ensemble ; annoncez ensuite le plan : <em>I would first argue/illustrate that (…) then show in a second part that (…), therefore (…) in a final part.</em></P>

          <SubTitle>Ressource utile</SubTitle>
          <P>
            7 références à connaître pour argumenter en colle : <a className="text-blue-600 underline" href="https://urlz.fr/iMuo" target="_blank" rel="noreferrer">Lien</a>
          </P>
        </div>
      </div>
    </div>
  );
};

export default CollesAnglaisPage;


