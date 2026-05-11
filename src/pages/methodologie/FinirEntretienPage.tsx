import React from 'react';
import { CheckCircle, AlertCircle, Lightbulb, Clock, MessageCircle, Handshake, Target } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const phases = [
  { n: "01", t: "Synthèse personnelle", d: "Résumez en 1-2 minutes vos points forts et votre adéquation avec l'école en reprenant les éléments clés de l'entretien." },
  { n: "02", t: "Questions au jury", d: "Posez 2-3 questions intelligentes qui montrent votre intérêt sincère et votre réflexion approfondie sur l'école." },
  { n: "03", t: "Réaffirmation de motivation", d: "Confirmez votre motivation pour l'école de manière authentique et personnalisée." },
  { n: "04", t: "Salutations et remerciements", d: "Terminez par des remerciements sincères et une attitude positive qui laisse une bonne dernière impression." },
];

const goodQs = [
  { t: "Sur l'école et le programme", l: ['"Quels sont les projets innovants en cours dans l\'école ?"', '"Comment l\'école évolue-t-elle face aux défis du digital ?"', '"Quelle est la spécificité pédagogique qui vous tient le plus à cœur ?"'] },
  { t: "Sur la vie étudiante", l: ['"Quels sont les projets associatifs les plus marquants récemment ?"', '"Comment l\'école accompagne-t-elle l\'entrepreneuriat étudiant ?"', '"Quelle est l\'évolution prévue du campus ?"'] },
  { t: "Sur votre profil", l: ['"Quels conseils donneriez-vous pour réussir ma première année ?"', '"Comment puis-je me préparer au mieux avant la rentrée ?"', '"Y a-t-il des aspects de mon profil à développer ?"'] },
];

const badQs = [
  { t: "Questions basiques", l: ['"Combien d\'étudiants y a-t-il dans l\'école ?"', '"Où se trouve le campus ?"', '"Combien coûtent les études ?"', '"Quand sont les vacances ?"'] },
  { t: "Questions inappropriées", l: ['"Quelles sont mes chances d\'être admis ?"', '"Combien gagnent les diplômés ?"', '"Est-ce que l\'école est difficile ?"', '"Y a-t-il beaucoup de travail ?"'] },
  { t: "Questions négatives", l: ['"Quels sont les défauts de l\'école ?"', '"Pourquoi votre école plutôt qu\'HEC ?"', '"Les étudiants sont-ils stressés ?"', '"Y a-t-il beaucoup d\'échecs ?"'] },
];

const FinirEntretienPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 05"
      icon={CheckCircle}
      titlePrefix="Finir un"
      titleAccent="Entretien"
      intro="Maîtrisez l'art de conclure votre entretien sur une note positive et mémorable qui marquera durablement le jury."
      cta={{
        title: "Prêt à maîtriser vos fins d'entretien ?",
        text: "Entraînez-vous à conclure brillamment vos entretiens avec nos simulations personnalisées.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="Pourquoi la fin d'entretien est-elle cruciale ?">
        La fin d'entretien est votre dernière chance de marquer les esprits. C'est le moment où vous laissez
        votre impression finale, posez vos questions stratégiques et montrez votre motivation. Une conclusion
        réussie peut transformer un entretien moyen en succès.
      </MethodIntroCard>

      {/* Phases */}
      <MethodSection label="Section 01" title="Les 4 phases d'une conclusion réussie" icon={Target}>
        <div className="grid md:grid-cols-2 gap-5">
          {phases.map((p) => (
            <div key={p.n} className="bg-white border border-carnet-rule/30 rounded-lg p-6 hover:border-red-600 transition-colors">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-dm-serif text-3xl text-red-600">{p.n}</span>
                <h4 className="font-dm-serif text-lg text-carnet-ink">{p.t}</h4>
              </div>
              <div className="h-px w-8 bg-red-600 mb-3" />
              <p className="text-sm text-carnet-ink-soft leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Questions */}
      <MethodSection label="Section 02" title="Questions stratégiques à poser au jury" icon={MessageCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-red-600" strokeWidth={1.8} />
              <h4 className="font-dm-serif text-lg text-carnet-ink">Questions recommandées</h4>
            </div>
            <div className="space-y-3">
              {goodQs.map((g) => (
                <div key={g.t} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r p-4">
                  <h5 className="font-medium text-carnet-ink mb-2 text-sm">{g.t}</h5>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    {g.l.map((q) => <li key={q}>— {q}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-red-700" strokeWidth={1.8} />
              <h4 className="font-dm-serif text-lg text-carnet-ink">Questions à éviter</h4>
            </div>
            <div className="space-y-3">
              {badQs.map((g) => (
                <div key={g.t} className="bg-carnet-paper rounded p-4">
                  <h5 className="font-medium text-carnet-ink mb-2 text-sm">{g.t}</h5>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    {g.l.map((q) => <li key={q}>— {q}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MethodSection>

      {/* Timing */}
      <MethodSection label="Section 03" title="Gestion du timing en fin d'entretien" icon={Clock}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { t: "5 min restantes", d: "Commencez à synthétiser vos points forts si le jury ne vous l'a pas encore demandé." },
            { t: "3 min restantes", d: "Posez votre première question au jury. Adaptez le nombre selon le temps disponible." },
            { t: "1 min restante", d: "Réaffirmez votre motivation et remerciez chaleureusement le jury." },
          ].map((c) => (
            <div key={c.t} className="bg-white border border-carnet-rule/30 rounded-lg p-6 text-center">
              <div className="font-dm-serif text-2xl text-red-600 mb-1">{c.t}</div>
              <div className="h-px w-6 bg-red-600 mx-auto mb-3" />
              <p className="text-sm text-carnet-ink-soft">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
          <h4 className="font-dm-serif text-lg text-carnet-ink mb-3">Attention aux signaux du jury</h4>
          <ul className="space-y-2 text-sm text-carnet-ink-soft">
            <li>— <strong className="text-carnet-ink">Regarde sa montre :</strong> accélérez votre conclusion.</li>
            <li>— <strong className="text-carnet-ink">Commence à ranger :</strong> terminez rapidement.</li>
            <li>— <strong className="text-carnet-ink">Dit « Bien » :</strong> souvent signal de transition vers la fin.</li>
            <li>— <strong className="text-carnet-ink">Vous demande vos questions :</strong> c'est le moment parfait.</li>
          </ul>
        </div>
      </MethodSection>

      {/* Exemples */}
      <MethodSection label="Section 04" title="Exemples de conclusions réussies" icon={Handshake}>
        <div className="space-y-5">
          {[
            { t: "Synthèse personnelle type", q: "Pour résumer notre échange, je pense que mon profil correspond bien aux valeurs d'[École] grâce à mon expérience en [domaine], ma passion pour [secteur] et ma capacité démontrée à [qualité]. Mon projet de [objectif professionnel] s'aligne parfaitement avec les opportunités offertes par votre programme, notamment [spécificité de l'école]." },
            { t: "Réaffirmation de motivation", q: "Cet échange renforce ma conviction que [École] est l'environnement idéal pour développer mon projet. L'opportunité de [élément spécifique mentionné pendant l'entretien] correspond exactement à ce que je recherche. J'ai vraiment hâte de contribuer à la communauté [École] et d'apprendre aux côtés d'étudiants aussi motivés." },
            { t: "Remerciements finaux", q: "Je vous remercie sincèrement pour cet échange enrichissant. Vous avez confirmé mon impression très positive sur [École] et j'espère avoir l'opportunité de rejoindre votre communauté. Je vous souhaite une excellente continuation de jurys." },
          ].map((ex) => (
            <div key={ex.t} className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white px-2 py-1 rounded">
                  Exemple
                </span>
                <h4 className="font-dm-serif text-lg text-carnet-ink">{ex.t}</h4>
              </div>
              <p className="text-sm text-carnet-ink-soft italic leading-relaxed">« {ex.q} »</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Erreurs */}
      <MethodSection label="Section 05" title="Erreurs fatales en fin d'entretien" icon={AlertCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "Attitudes problématiques",
              l: [
                ["Précipitation", "Partir trop vite sans prendre le temps de conclure."],
                ["Mollesse", "Finir sur une note passive ou désintéressée."],
                ["Insistance", "Redemander ses chances d'admission."],
                ["Négativité", "Critiquer d'autres écoles ou candidats."],
              ],
            },
            {
              t: "Erreurs de communication",
              l: [
                ["Répétition", "Ressasser les mêmes arguments."],
                ["Longueur", "Monopoliser la parole trop longtemps."],
                ["Confusion", "Se contredire ou changer de version."],
                ["Familiarité", "Devenir trop décontracté."],
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-lg p-6">
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

      {/* Checklist */}
      <MethodSection label="Section 06" title="Checklist de fin d'entretien parfaite" icon={CheckCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Contenu", l: ["J'ai synthétisé mes points forts", "J'ai posé 2-3 questions pertinentes", "J'ai réaffirmé ma motivation", "J'ai remercié chaleureusement"] },
            { t: "Attitude", l: ["J'ai gardé un ton positif et énergique", "J'ai respecté le timing du jury", "J'ai maintenu le contact visuel", "J'ai serré la main avec confiance"] },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-lg p-6">
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

export default FinirEntretienPage;
