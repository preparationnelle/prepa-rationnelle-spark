import React from 'react';
import { FileText, User, Target, CheckCircle, Palette, Users, Globe } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const sections = [
  { n: "01", t: "Présentation et informations personnelles", d: "En haut de votre CV, indiquez vos informations personnelles.", l: ["Nom et prénom", "Âge (dans 10 ans)", "Adresse (qui peut être projective si vous envisagez de vivre ailleurs)", "Coordonnées", "Photo professionnelle"] },
  { n: "02", t: "Formation", d: "Cette section doit inclure :", l: ["Votre parcours académique après le bac", "Le diplôme du Programme Grande École de l'école visée", "Les spécialisations ou MSc que vous envisagez de suivre", "Les éventuels échanges universitaires ou doubles diplômes"] },
  { n: "03", t: "Expériences professionnelles", d: "Imaginez les postes que vous occuperez après l'obtention de votre diplôme.", l: ["Première expérience : poste « junior » (1,5 à 2 ans)", "Deuxième expérience : poste « senior » ou avec plus de responsabilités (2 à 3 ans)", "Troisième expérience : poste de direction ou managérial (3 ans ou plus)"], note: "Pour chaque expérience, précisez l'entreprise, le poste occupé, la durée et les principales missions." },
  { n: "04", t: "Compétences et langues", d: "Indiquez les compétences que vous aurez développées dans 10 ans : langues maîtrisées, compétences techniques et soft skills pertinents.", l: [] },
  { n: "05", t: "Centres d'intérêt et engagements", d: "Cette section permet de montrer votre personnalité : activités sportives, engagements associatifs, passions et hobbies.", l: [] },
];

const tips = [
  { icon: Palette, t: "Utiliser un code couleur", d: "Pour les CV projectifs, notamment celui de SKEMA, il est fortement recommandé d'utiliser un code couleur :", l: ["Noir pour les informations actuelles / factuelles", "Couleur (violet, rose, bleu) pour les éléments projectifs"] },
  { icon: Target, t: "Être cohérent dans son parcours", d: "La cohérence est la règle la plus importante. Montrez que votre engagement académique, associatif et professionnel sont liés, et que vous savez comment atteindre vos objectifs grâce à l'école.", l: [] },
  { icon: CheckCircle, t: "Rester réaliste et authentique", d: "Évitez les projections trop ambitieuses. À 28-30 ans, vous ne serez probablement pas directeur général d'une entreprise du CAC 40. Renseignez-vous sur les parcours d'anciens diplômés.", l: [] },
  { icon: User, t: "S'appuyer sur des anecdotes personnelles", d: "Appuyez certains de vos choix de carrière sur des anecdotes ou expériences personnelles passées. Cela montrera que votre projection s'inscrit dans une continuité avec votre parcours actuel.", l: [] },
  { icon: Globe, t: "Connaître l'école et ses programmes", d: "Renseignez-vous en profondeur sur l'école visée, ses spécialisations, ses campus internationaux et ses partenariats. Pour SKEMA, mettez en avant sa dimension internationale avec ses nombreux campus à l'étranger.", l: [] },
  { icon: Users, t: "Préparer des alternatives", d: "Bien que votre CV ne présente qu'un seul parcours, préparez-vous à discuter d'alternatives lors de l'entretien. Cela montrera votre capacité à vous adapter et votre réflexion approfondie.", l: [] },
];

const CVProjectifPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Format spécialisé · SKEMA"
      icon={FileText}
      titlePrefix="CV"
      titleAccent="Projectif"
      intro="Tout ce qu'il faut savoir pour créer un CV projectif convaincant pour SKEMA et les autres écoles qui demandent cet exercice — projetez-vous dans 10 ans."
      cta={{
        title: "Obtenir de l'aide pour votre CV projectif",
        text: "Nos coachs vous accompagnent pour construire un CV projectif réaliste, cohérent et différenciant.",
      }}
    >
      <MethodIntroCard icon={FileText} title="Qu'est-ce qu'un CV projectif ?">
        <p className="mb-3">
          Le CV projectif est un exercice spécifique demandé par certaines écoles de commerce, notamment SKEMA,
          lors des entretiens d'admission. Contrairement au CV traditionnel qui présente votre parcours passé,
          le CV projectif vous invite à vous projeter dans l'avenir, généralement sur une période de 10 ans.
        </p>
        <p>
          Cet exercice permet au jury d'évaluer votre capacité à vous projeter professionnellement et à
          construire un parcours cohérent. L'objectif n'est pas de présenter un CV idéal ou utopique, mais
          plutôt une projection réaliste qui reflète vos aspirations et votre personnalité.
        </p>
      </MethodIntroCard>

      {/* Structure */}
      <MethodSection label="Section 01" title="Structure et contenu du CV projectif" icon={Target}>
        <div className="space-y-4">
          {sections.map((s) => (
            <div key={s.n} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-black rounded-r-lg p-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-dm-serif text-3xl text-pr-black leading-none">{s.n}</span>
                <h4 className="font-dm-serif text-xl text-pr-black">{s.t}</h4>
              </div>
              <p className="text-sm text-pr-gray-dark mb-3">{s.d}</p>
              {s.l.length > 0 && (
                <ul className="space-y-1.5 text-sm text-pr-gray-dark">
                  {s.l.map((item) => <li key={item}>— {item}</li>)}
                </ul>
              )}
              {s.note && (
                <p className="text-sm text-pr-gray-mid italic mt-3">{s.note}</p>
              )}
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Conseils */}
      <MethodSection label="Section 02" title="Conseils pour réussir son CV projectif" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {tips.map((tip, i) => (
            <div key={tip.t} className="bg-white border border-pr-gray-light rounded-lg p-6 hover:border-pr-black transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-md bg-pr-gray-bg flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-5 h-5 text-pr-black" strokeWidth={1.6} />
                </div>
                <h4 className="font-dm-serif text-lg text-pr-black">{tip.t}</h4>
              </div>
              <div className="h-px w-8 bg-pr-black mb-3" />
              <p className="text-sm text-pr-gray-dark leading-relaxed mb-3">{tip.d}</p>
              {tip.l.length > 0 && (
                <ul className="space-y-1.5 text-sm text-pr-gray-dark">
                  {tip.l.map((item) => <li key={item}>— {item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default CVProjectifPage;
