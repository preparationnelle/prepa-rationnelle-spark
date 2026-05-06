import React from 'react';
import { School, CheckCircle, AlertTriangle, Target, Lightbulb } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const MotivationEcolePage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 02"
      icon={School}
      titlePrefix="Motivation"
      titleAccent="École"
      intro="Maîtrisez l'art de présenter votre motivation pour une école de commerce — convaincre les jurys de votre engagement authentique."
      cta={{
        title: "Prêt à perfectionner votre motivation ?",
        text: "Travaillez votre motivation école avec nos coachs spécialisés en entretiens de personnalité.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="Pourquoi la motivation école est-elle cruciale ?">
        <p className="mb-3">
          La question de motivation école est l'une des plus fréquentes en entretien. Elle permet
          au jury d'évaluer votre connaissance de l'école, la cohérence de votre projet et votre
          capacité à vous projeter.
        </p>
        <p className="font-medium text-pr-black mb-2">Une motivation bien préparée permet de :</p>
        <ul className="space-y-2">
          {[
            ["Montrer votre connaissance", "démontrer que vous vous êtes renseigné sur l'école."],
            ["Révéler votre cohérence", "lier votre projet à ce que propose l'école."],
            ["Prouver votre engagement", "montrer que ce n'est pas un choix par défaut."],
          ].map(([k, v]) => (
            <li key={k} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-pr-orange mt-1 flex-shrink-0" strokeWidth={1.8} />
              <span><strong className="text-pr-black">{k} :</strong> {v}</span>
            </li>
          ))}
        </ul>
      </MethodIntroCard>

      {/* Structure */}
      <MethodSection label="Section 01" title="Structure d'une motivation école efficace" icon={Target}>
        <p className="text-pr-gray-dark mb-6">Structurez votre motivation en 4 étapes logiques.</p>
        <div className="space-y-4">
          {[
            { n: "01", t: "Votre projet professionnel", d: "Rappel bref de votre objectif pour créer le lien avec l'école." },
            { n: "02", t: "Spécificités de l'école", d: "2-3 éléments précis qui vous attirent dans cette école particulière." },
            { n: "03", t: "Adéquation projet-école", d: "En quoi cette école vous permettra de réaliser votre projet." },
            { n: "04", t: "Votre contribution", d: "Ce que vous pourrez apporter à l'école et à la communauté." },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-5 flex items-baseline gap-4">
              <span className="font-dm-serif text-3xl text-pr-orange leading-none">{s.n}</span>
              <div>
                <h4 className="font-dm-serif text-lg text-pr-black mb-1">{s.t}</h4>
                <p className="text-sm text-pr-gray-dark">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Éléments clés */}
      <MethodSection label="Section 02" title="Éléments clés à connaître sur l'école" icon={School}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Programme pédagogique", l: ["Spécialisations proposées", "Méthodes pédagogiques", "Partenariats universitaires", "Double-diplômes"] },
            { t: "International", l: ["Partenariats internationaux", "Campus à l'étranger", "Programmes d'échange", "Cours en anglais"] },
            { t: "Professionnalisation", l: ["Réseau d'alumni", "Partenariats entreprises", "Incubateur / start-up studio", "Stages obligatoires"] },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-pr-orange mb-4" />
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Erreurs */}
      <MethodSection label="Section 03" title="Erreurs à éviter absolument" icon={AlertTriangle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Motivations génériques", l: ['"C\'est une grande école"', '"Elle a une bonne réputation"', '"Pour avoir un bon salaire"', '"Mes parents m\'ont conseillé"'] },
            { t: "Manque de préparation", l: ["Ne pas connaître le programme", "Confondre avec une autre école", "Ne pas mentionner de spécificités", "Réponse trop courte ou trop longue"] },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-pr-orange-dark" strokeWidth={1.8} />
                {g.t}
              </h4>
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Exemple */}
      <MethodSection label="Section 04" title="Exemple de motivation réussie" icon={CheckCircle}>
        <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r-lg p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-white px-2 py-1 rounded">
              Exemple HEC Paris
            </span>
          </div>
          <div className="space-y-3 text-pr-gray-dark italic leading-relaxed">
            <p>
              « Mon projet professionnel étant de créer une start-up dans la FinTech, HEC m'attire
              particulièrement pour trois raisons. »
            </p>
            <p>
              « D'abord, le programme <strong className="not-italic text-pr-black">Innovation &amp; Entrepreneurship</strong>
              {' '}me permettra d'acquérir les compétences nécessaires en création d'entreprise.
              Ensuite, l'écosystème HEC Station F offre un environnement unique pour développer mon projet. »
            </p>
            <p>
              « Enfin, le réseau d'alumni dans la finance et la tech me donnera accès à des mentors
              et investisseurs. En retour, je pourrai partager mon expérience en développement web
              avec les autres étudiants. »
            </p>
          </div>
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default MotivationEcolePage;
