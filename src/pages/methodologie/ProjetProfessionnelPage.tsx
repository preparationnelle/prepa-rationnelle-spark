import React from 'react';
import { Target, CheckCircle, AlertTriangle, Lightbulb, Briefcase } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const ProjetProfessionnelPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 03"
      icon={Target}
      titlePrefix="Projet"
      titleAccent="Professionnel"
      intro="Le fil conducteur de votre candidature qui révèle votre maturité et votre détermination — construire une vision cohérente et convaincante."
      cta={{
        title: "Besoin d'aide pour clarifier votre projet ?",
        text: "Nos coachs vous accompagnent pour construire un projet professionnel cohérent et convaincant.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="L'importance du projet professionnel">
        <p className="mb-3">
          Le projet professionnel est le fil conducteur de votre candidature. Il révèle votre maturité,
          votre capacité de projection et la cohérence de votre parcours.
        </p>
        <p className="font-medium text-carnet-ink mb-2">Un projet bien construit montre :</p>
        <ul className="space-y-2">
          {[
            ["Votre vision", "vous savez où vous allez à long terme."],
            ["Votre cohérence", "vos expériences alimentent votre réflexion."],
            ["Votre motivation", "l'école vous aidera à atteindre vos objectifs."],
          ].map(([k, v]) => (
            <li key={k} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
              <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
            </li>
          ))}
        </ul>
      </MethodIntroCard>

      {/* Architecture */}
      <MethodSection label="Section 01" title="Architecture d'un projet professionnel solide" icon={Target}>
        <div className="space-y-4">
          {[
            { n: "01", t: "Vision à long terme", d: "Votre objectif à 10-15 ans : quel poste, quel secteur, quelle mission ?" },
            { n: "02", t: "Motivations profondes", d: "Le « pourquoi » : ce qui vous anime, vos valeurs, l'impact souhaité." },
            { n: "03", t: "Étapes intermédiaires", d: "Votre plan d'action : premiers postes, secteurs, compétences à développer." },
            { n: "04", t: "Lien avec vos expériences", d: "Comment vos expériences passées nourrissent et valident votre projet." },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
              <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
              <div>
                <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
                <p className="text-sm text-carnet-ink-soft">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Secteurs */}
      <MethodSection label="Section 02" title="Secteurs et métiers populaires" icon={Briefcase}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Conseil & Finance", l: ["Conseil en stratégie", "Banque d'investissement", "Private equity", "Audit & expertise comptable"] },
            { t: "Innovation & Tech", l: ["Entrepreneuriat", "Product management", "Business development", "Venture capital"] },
            { t: "Impact & Secteurs", l: ["Développement durable", "Santé & biotech", "Luxe & mode", "Économie sociale"] },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-red-600 mb-4" />
              <ul className="space-y-2 text-sm text-carnet-ink-soft">
                {g.l.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Pièges */}
      <MethodSection label="Section 03" title="Pièges à éviter" icon={AlertTriangle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Projets trop vagues", l: ['"Travailler dans le management"', '"Faire du business"', '"Être dans la finance"', '"Diriger une entreprise"'] },
            { t: "Manque de cohérence", l: ["Projet déconnecté du parcours", "Motivations superficielles", "Aucune expérience validante", "Plan irréaliste"] },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-700" strokeWidth={1.8} />
                {g.t}
              </h4>
              <ul className="space-y-2 text-sm text-carnet-ink-soft">
                {g.l.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Exemple */}
      <MethodSection label="Section 04" title="Exemple de projet professionnel réussi" icon={CheckCircle}>
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white px-2 py-1 rounded">
              Exemple
            </span>
            <h4 className="font-dm-serif text-lg text-carnet-ink">Consultant en transformation digitale</h4>
          </div>
          <div className="space-y-3 text-sm text-carnet-ink-soft leading-relaxed">
            <p>
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Vision long terme · </span>
              Dans 10 ans, je souhaite diriger la practice digital d'un cabinet de conseil pour accompagner
              les entreprises traditionnelles dans leur transformation numérique.
            </p>
            <p>
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Motivations · </span>
              Passionné par la tech depuis le lycée, j'ai constaté lors de mon stage en banque le retard
              digital de certains secteurs. Je veux être acteur de cette transition.
            </p>
            <p>
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Plan d'action · </span>
              Après l'école : 2-3 ans en conseil généraliste pour acquérir la méthodologie, puis
              spécialisation digital dans un cabinet comme Sia Partners.
            </p>
            <p>
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Expériences validantes · </span>
              Mon stage en banque, mes projets de développement web et ma participation à des hackathons
              confirment mon intérêt pour ce secteur.
            </p>
          </div>
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default ProjetProfessionnelPage;
