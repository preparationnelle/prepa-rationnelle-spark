import React from 'react';
import { BookOpen } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-dm-serif text-2xl text-pr-black mt-10 mb-3 leading-tight">{children}</h2>
);

const Accent = () => <div className="w-10 h-[2px] bg-pr-black mb-5" />;

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-dm-serif text-lg text-pr-black mt-7 mb-3 leading-tight">{children}</h3>
);

const P = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-pr-gray-dark/90 leading-relaxed mb-4 ${className}`}>{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2 text-pr-gray-dark/90 leading-relaxed">
    <span className="text-pr-black mt-[2px]">→</span>
    <span>{children}</span>
  </li>
);

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-pr-gray-bg/30 border border-pr-black-pale rounded-xl p-5 my-4 text-pr-gray-dark/90">
    {children}
  </div>
);

const CollesAnglaisPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Méthodologie', to: '/formation/anglais/methodologie-complete' },
        { label: 'Les Colles' },
      ]}
      badge="Méthodologie · Colles"
      title="Les Colles"
      titleAccent="d'Anglais"
      subtitle="Style sobre et efficace : un résumé clair, puis un commentaire structuré pour réussir l'oral."
      Icon={BookOpen}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden p-6 sm:p-8">
          <SectionTitle>Le résumé</SectionTitle>
          <Accent />
          <ul className="space-y-2 mb-4">
            <LI>Commencer par une accroche : date, citation ou événement en lien.</LI>
            <LI>
              Annoncer la nature du document, sa date et son enjeu :{' '}
              <em>This article taken from…, was published in… and deals with the issue of…</em>
            </LI>
            <LI>Mentionner l'orientation politique du journal si elle transparaît.</LI>
          </ul>
          <P>Les articles anglais hiérarchisent leurs informations. Suivre un plan type aide à rester clair :</P>
          <Box>
            <P className="mb-2">
              <strong className="text-pr-black">Plan type 1</strong> : What? → Why? → Consequences / solutions?
            </P>
            <P className="mb-0">
              <strong className="text-pr-black">Plan type 2</strong> : What? → Reactions? → Consequences / solutions?
            </P>
          </Box>
          <P>Piocher dans le texte les éléments pour remplir le plan.</P>

          <SubTitle>Phrases utiles</SubTitle>
          <ul className="space-y-2 mb-4">
            <LI>The article starts off by explaining…</LI>
            <LI>As the article goes on, we learn that…</LI>
            <LI>Eventually, …</LI>
          </ul>
          <P>
            Terminer par une phrase qui condense l'idée centrale :{' '}
            <em>So the main idea that this article brings up is that…</em>
          </P>

          <SectionTitle>Le commentaire</SectionTitle>
          <Accent />
          <P>Ouvrir par une question (parfois précédée d'un paradoxe) qui fait la transition avec le résumé.</P>
          <P>
            On distingue deux catégories : <strong className="text-pr-black">news article</strong> et{' '}
            <strong className="text-pr-black">opinion piece</strong>.
          </P>

          <SubTitle>I — Les articles d'opinion</SubTitle>
          <P>Comme l'auteur défend un point de vue, il faut peser les biais, le ton, et d'éventuels partis pris.</P>
          <ul className="space-y-2 mb-4">
            <LI>
              <em>In focusing too much on… the article is ignoring…; this is however half of the equation!</em>
            </LI>
            <LI>
              <em>The article mocks… and turns it into something ridiculous.</em>
            </LI>
          </ul>

          <SubTitle>II — Les autres articles</SubTitle>
          <P>
            La plupart traitent d'un sujet inscrit dans un thème plus large (environnement, inégalités, technologie…).
            Voici une démarche :
          </P>
          <ol className="list-decimal pl-6 text-pr-gray-dark/90 space-y-2 mb-4">
            <li>
              Traquer les éléments vraiment nouveaux de l'article. Repérer 2–3 points atypiques pour un commentaire
              distinctif.
            </li>
          </ol>
          <Box>
            <P className="mb-0">
              <strong className="text-pr-black">Exemple</strong> : à partir de l'article « Canadian inferno… »,
              éviter un topo général sur le climat et discuter plutôt de la difficulté à penser hors des modèles
              préexistants (cf. Taleb, <em>The Black Swan</em>).
            </P>
          </Box>
          <ol className="list-decimal pl-6 text-pr-gray-dark/90 space-y-2 mb-4" start={2}>
            <li>
              Si peu d'axes atypiques, traiter les causes structurelles avec une argumentation serrée et, si possible,
              un auteur de référence.
            </li>
            <li>Mobiliser des repères historiques quand c'est pertinent.</li>
            <li>Conclure par conséquences ou solutions, en citant des références originales (films, séries, œuvres…).</li>
          </ol>
          <P>
            Donner explicitement votre avis dans une partie dédiée ou une courte conclusion qui ferme l'oral. La
            question directrice doit englober l'ensemble ; annoncez ensuite le plan :{' '}
            <em>
              I would first argue/illustrate that (…) then show in a second part that (…), therefore (…) in a final
              part.
            </em>
          </P>

          <SubTitle>Ressource utile</SubTitle>
          <P>
            7 références à connaître pour argumenter en colle :{' '}
            <a
              className="text-pr-black hover:text-pr-black underline underline-offset-2"
              href="https://urlz.fr/iMuo"
              target="_blank"
              rel="noreferrer"
            >
              ouvrir le lien
            </a>
          </P>
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default CollesAnglaisPage;
