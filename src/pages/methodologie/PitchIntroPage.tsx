import React from 'react';
import { Presentation, CheckCircle, AlertCircle, Lightbulb, Clock, Target, Star } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const passSteps = [
  { l: "P", t: "Parcours", time: "30 s", d: "Présentez votre parcours académique en quelques mots, en mettant l'accent sur les choix marquants et les transitions importantes." },
  { l: "A", t: "Atouts", time: "60 s", d: "Mettez en avant 2-3 expériences clés qui révèlent vos qualités principales : stage, projet, responsabilités, réalisations concrètes." },
  { l: "S", t: "Spécificité", time: "30 s", d: "Révélez votre élément différenciant : une passion, une compétence rare, une expérience atypique qui vous rend unique." },
  { l: "S", t: "Suite", time: "30 s", d: "Concluez par votre projet professionnel et le lien avec l'école, créant une transition naturelle vers la suite de l'entretien." },
];

const examples = [
  {
    label: "Profil scientifique vers business",
    parts: [
      ["Parcours", "Bonjour, je suis Marie. Après un bac S, j'ai intégré une prépa ECE où j'ai découvert ma passion pour l'économie et la gestion, en complément de mes bases scientifiques."],
      ["Atouts", "Cette double compétence m'a permis de décrocher un stage chez Capgemini Consulting où j'ai travaillé sur la transformation digitale d'une banque. En parallèle, j'ai créé une association de tutorat en mathématiques qui accompagne aujourd'hui 200 lycéens et m'a appris à manager une équipe de 15 bénévoles."],
      ["Spécificité", "Ce qui me caractérise, c'est ma capacité à vulgariser des concepts complexes, que ce soit en maths avec mes élèves ou en tech avec les équipes business chez Capgemini."],
      ["Suite", "Mon objectif est de devenir consultante en innovation, en utilisant mes compétences techniques pour accompagner les entreprises traditionnelles. C'est pourquoi votre école m'attire particulièrement avec son programme Innovation & Entrepreneurship."],
    ],
  },
  {
    label: "Profil international",
    parts: [
      ["Parcours", "Bonjour, je suis Thomas. Franco-allemand, j'ai grandi entre Paris et Berlin avant d'intégrer une prépa ECE, attiré par l'ouverture internationale du programme."],
      ["Atouts", "Mon stage chez BMW à Munich m'a permis de travailler sur l'expansion européenne de leurs modèles électriques. Cette expérience a confirmé ma passion pour les enjeux de mobilité durable. En parallèle, j'ai organisé un programme d'échange entre ma prépa et une école berlinoise, accueillant 30 étudiants allemands."],
      ["Spécificité", "Ma spécificité réside dans ma compréhension fine des marchés européens et ma capacité à naviguer entre différentes cultures business, notamment française et allemande."],
      ["Suite", "Je souhaite me spécialiser dans le conseil en stratégie internationale, particulièrement dans l'automobile et les nouvelles mobilités. Votre partenariat avec Singapour et vos cours en anglais correspondent parfaitement à cette ambition."],
    ],
  },
  {
    label: "Profil reconversion",
    parts: [
      ["Parcours", "Bonjour, je suis Sarah. Après un Master en droit et trois ans comme juriste d'entreprise, j'ai pris la décision de me réorienter vers le business en intégrant une prépa ECG."],
      ["Atouts", "Mon expérience juridique m'a donné une vision globale des enjeux d'entreprise et une rigueur dans l'analyse. Mon stage chez Deloitte en M&A m'a confirmé que ma place était plutôt côté business. J'ai aussi créé un blog juridique pour entrepreneurs qui compte 10 000 lecteurs mensuels."],
      ["Spécificité", "Ma valeur ajoutée réside dans cette double compétence juridique-business et ma maturité professionnelle qui me permet d'appréhender les enjeux avec recul."],
      ["Suite", "Mon objectif est le conseil en fusions-acquisitions où ma formation juridique sera un atout précieux. Le programme Corporate Finance de votre école et vos partenariats avec les grands cabinets correspondent exactement à mon projet."],
    ],
  },
];

const PitchIntroPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 08"
      icon={Presentation}
      titlePrefix="Pitch"
      titleAccent="d'Introduction"
      intro="Créez une première impression mémorable avec un pitch d'introduction percutant qui capte l'attention du jury dès les premières secondes."
      cta={{
        title: "Perfectionnez votre pitch d'introduction",
        text: "Créez un pitch percutant qui marque les esprits dès les premières secondes avec notre accompagnement personnalisé.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="L'importance cruciale des premières minutes">
        Le pitch d'introduction est votre première impression. En 2-3 minutes, vous devez présenter qui vous êtes,
        d'où vous venez et où vous allez de manière à marquer positivement les esprits. Un bon pitch donne le ton
        de tout l'entretien et crée un élan favorable.
      </MethodIntroCard>

      {/* Structure PASS */}
      <MethodSection label="Section 01" title="Structure PASS pour un pitch efficace" icon={Target}>
        <div className="grid md:grid-cols-2 gap-5">
          {passSteps.map((s, i) => (
            <div key={i} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6 hover:border-carnet-red transition-colors">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-dm-serif text-5xl text-red-600 leading-none">{s.l}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
                  {s.time}
                </span>
              </div>
              <h4 className="font-dm-serif text-xl text-carnet-ink mt-3 mb-2">{s.t}</h4>
              <div className="h-px w-8 bg-red-600 mb-3" />
              <p className="text-sm text-carnet-ink-soft leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Timing */}
      <MethodSection label="Section 02" title="Chronométrage optimal : 2-3 minutes" icon={Clock}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { t: "0-30s", k: "Parcours", d: "Bac, prépa, années marquantes" },
            { t: "30s-1m30", k: "Atouts", d: "Expériences clés et qualités" },
            { t: "1m30-2m", k: "Spécificité", d: "Élément différenciant unique" },
            { t: "2m-2m30", k: "Suite", d: "Projet et motivation école" },
          ].map((c) => (
            <div key={c.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-5 text-center">
              <div className="font-dm-serif text-2xl text-red-600 mb-1">{c.t}</div>
              <div className="h-px w-6 bg-red-600 mx-auto mb-3" />
              <div className="font-medium text-carnet-ink mb-1">{c.k}</div>
              <p className="text-xs text-carnet-ink-mute">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-red-700" strokeWidth={1.6} />
            <h4 className="font-dm-serif text-lg text-carnet-ink">Règles de timing</h4>
          </div>
          <ul className="space-y-2 text-sm text-carnet-ink-soft">
            <li>— <strong className="text-carnet-ink">Minimum 1m30 :</strong> sinon vous paraissez trop concis et peu développé.</li>
            <li>— <strong className="text-carnet-ink">Maximum 3 minutes :</strong> au-delà, vous monopolisez trop la parole.</li>
            <li>— <strong className="text-carnet-ink">Optimal 2-2m30 :</strong> temps parfait pour un contenu riche sans lassitude.</li>
            <li>— <strong className="text-carnet-ink">Adaptabilité :</strong> préparez des versions courte (1m30) et longue (3m).</li>
          </ul>
        </div>
      </MethodSection>

      {/* Exemples */}
      <MethodSection label="Section 03" title="Exemples de pitch d'introduction réussis" icon={Star}>
        <div className="space-y-5">
          {examples.map((ex, i) => (
            <div key={i} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
                  Exemple {i + 1}
                </span>
                <h4 className="font-dm-serif text-lg text-carnet-ink">{ex.label}</h4>
              </div>
              <div className="space-y-3">
                {ex.parts.map(([k, v]) => (
                  <p key={k} className="text-sm text-carnet-ink-soft leading-relaxed">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-red-700 mr-2">[{k}]</span>
                    {v}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Erreurs */}
      <MethodSection label="Section 04" title="Erreurs fatales dans le pitch d'introduction" icon={AlertCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "Erreurs de contenu",
              l: [
                ["CV chronologique", "« En 2020 j'ai fait ci, en 2021 j'ai fait ça… »"],
                ["Trop personnel", "Parler de sa famille, ses hobbies, sa ville natale."],
                ["Pas d'originalité", "Parcours banal sans élément différenciant."],
                ["Incohérence", "Pitch déconnecté du projet professionnel."],
              ],
            },
            {
              t: "Erreurs de forme",
              l: [
                ["Trop long", "Plus de 4 minutes = monopolisation excessive."],
                ["Trop court", "Moins d'1 minute = impression de manquer de contenu."],
                ["Pas de structure", "Discours décousu sans fil conducteur."],
                ["Récité", "Ton mécanique qui trahit l'apprentissage par cœur."],
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-700" strokeWidth={1.8} />
                {g.t}
              </h4>
              <ul className="space-y-3">
                {g.l.map(([s, d]) => (
                  <li key={s} className="bg-carnet-paper border-l-4 border-red-600 rounded-r p-3 text-sm text-carnet-ink-soft">
                    <strong className="text-carnet-ink">{s} :</strong> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Méthode de préparation */}
      <MethodSection label="Section 05" title="Méthode de préparation du pitch parfait" icon={Lightbulb}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Écriture", l: ["Listez vos expériences marquantes", "Identifiez votre élément différenciant", "Rédigez selon la structure PASS", "Chronométrez et ajustez"] },
            { t: "Répétition", l: ["Répétez devant un miroir", "Enregistrez-vous en vidéo", "Testez avec vos proches", "Travaillez la gestuelle"] },
            { t: "Naturalisation", l: ["Intériorisez sans réciter", "Préparez des variantes", "Adaptez selon l'école", "Restez spontané"] },
          ].map((step, i) => (
            <div key={step.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <span className="font-dm-serif text-3xl text-red-600">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-dm-serif text-lg text-carnet-ink mt-1">Étape — {step.t}</h4>
              <div className="h-px w-8 bg-red-600 mb-4 mt-2" />
              <ul className="space-y-2 text-sm text-carnet-ink-soft">
                {step.l.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Checklist */}
      <MethodSection label="Section 06" title="Checklist du pitch d'introduction parfait" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Contenu validé", l: ["Structure PASS respectée", "Timing entre 2 et 3 minutes", "Élément différenciant mis en avant", "Lien clair avec le projet professionnel", "Cohérence avec le CV"] },
            { t: "Présentation maîtrisée", l: ["Ton naturel et enthousiaste", "Contact visuel maintenu", "Gestuelle appropriée", "Débit adapté et articulé", "Conclusion qui ouvre sur la suite"] },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-red-600 mb-4" />
              <ul className="space-y-3">
                {g.l.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-carnet-ink-soft">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default PitchIntroPage;
