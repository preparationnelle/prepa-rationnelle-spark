import React from 'react';
import { Users, CheckCircle, AlertTriangle, Target, Lightbulb, MessageCircle, Star } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const AssociationsEcolePage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 17"
      icon={Users}
      titlePrefix="Associations"
      titleAccent="de l'école"
      intro="Comment parler des associations de l'école de manière concrète et différenciante — au lieu de réciter une brochure, montrez que vous vous êtes vraiment renseigné."
      cta={{
        title: "Prêt à préparer vos oraux ?",
        text: "Travaillez votre connaissance des associations et votre projection dans l'école avec nos coachs spécialisés en entretiens de personnalité.",
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="Pourquoi cette question est-elle une opportunité ?">
        <p className="mb-3">
          La question sur les associations n'est pas la plus déterminante de l'entretien. Les jurys
          sont souvent des professeurs qui ne connaissent pas forcément les associations dans le détail.
          Mais c'est précisément pour cela que c'est une <strong className="text-carnet-ink">belle
          opportunité de vous différencier</strong>.
        </p>
        <p className="font-medium text-carnet-ink mb-2">Tout le monde va parler des associations. Pour sortir du lot, il faut :</p>
        <ul className="space-y-2">
          {[
            ["Aller au-delà des brochures", "ne pas réciter ce que tout le monde peut lire sur le site de l'école."],
            ["Parler à des étudiants actuels", "c'est le seul moyen d'avoir des informations concrètes et différenciantes."],
            ["Montrer une projection réelle", "citer un aspect précis de l'association qui vous correspond, pas juste son nom."],
          ].map(([k, v]) => (
            <li key={k} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
              <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
            </li>
          ))}
        </ul>
      </MethodIntroCard>

      {/* Structure */}
      <MethodSection label="Section 01" title="Les 4 éléments d'une réponse réussie" icon={Target}>
        <p className="text-carnet-ink-soft mb-6">Structurez votre réponse autour de ces quatre piliers.</p>
        <div className="space-y-4">
          {[
            {
              n: "01",
              t: "Nommer une association précise",
              d: "Citez le nom exact de l'association, pas juste une catégorie. « Le Bureau des Arts » plutôt que « les associations artistiques ».",
            },
            {
              n: "02",
              t: "Montrer votre lien personnel",
              d: "Expliquez pourquoi cette association vous parle : un intérêt, une compétence, une expérience passée qui crée un pont naturel.",
            },
            {
              n: "03",
              t: "Citer un aspect concret après enquête",
              d: "Mentionnez un détail précis appris en échangeant avec un étudiant actuel — un projet mené, un fonctionnement interne, une dimension que la brochure ne dit pas.",
            },
            {
              n: "04",
              t: "Formuler une contribution",
              d: "Exprimez ce que vous pourrez apporter à l'association, pas seulement ce qu'elle vous apportera.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-carnet-paper-2 border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4"
            >
              <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
              <div>
                <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
                <p className="text-sm text-carnet-ink-soft">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* L'arme secrète */}
      <MethodSection label="Section 02" title="L'arme secrète : parler à des étudiants actuels" icon={MessageCircle}>
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-7 mb-6">
          <p className="font-instrument text-[15px] text-carnet-ink leading-[1.7]">
            Après avoir échangé avec un étudiant de la promo 2024, j'ai découvert que le club voile
            de l'école organise chaque année une régate inter-écoles entièrement gérée par les étudiants.
            Ce n'est pas juste un club sportif, c'est un vrai projet événementiel — c'est exactement
            ce que je cherche pour combiner ma passion pour la voile et développer mes compétences
            en gestion de projet.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white px-2 py-1 rounded">
              Exemple de formulation avec sourcing étudiant
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              t: "Où trouver des étudiants ?",
              l: [
                "LinkedIn (filtrer par école + promo récente)",
                "Forums étudiants et Discord de prépa",
                "Journées portes ouvertes",
                "Anciens élèves de votre lycée dans l'école",
              ],
            },
            {
              t: "Quoi leur demander ?",
              l: [
                "Comment fonctionne l'asso concrètement ?",
                "Quel est le projet le plus marquant ?",
                "Combien de temps ça prend par semaine ?",
                "Quelles compétences ça développe ?",
              ],
            },
            {
              t: "Comment l'utiliser à l'oral ?",
              l: [
                "Citer le prénom et la promo de la personne",
                "Mentionner un détail précis appris",
                "Ne pas réciter : intégrer naturellement",
                "Montrer que vous avez vraiment cherché",
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-red-600 mb-4" />
              <ul className="space-y-2 text-sm text-carnet-ink-soft">
                {g.l.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Erreurs */}
      <MethodSection label="Section 03" title="Erreurs à éviter" icon={AlertTriangle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "Réponses trop génériques",
              l: [
                '"J\'aime le sport donc je rejoindrai le BDS"',
                '"Je veux m\'impliquer dans la vie associative"',
                "Citer l'association sans aucun détail concret",
                "Réciter mot pour mot la description du site",
              ],
            },
            {
              t: "Mauvais positionnement",
              l: [
                "Prétendre être passionné d'une asso par défaut",
                "Dire que vous voulez TOUT rejoindre",
                "Oublier de mentionner votre contribution",
                "Confondre des associations de deux écoles différentes",
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-700" strokeWidth={1.8} />
                {g.t}
              </h4>
              <ul className="space-y-2 text-sm text-carnet-ink-soft">
                {g.l.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Exemple complet */}
      <MethodSection label="Section 04" title="Exemple de réponse différenciante" icon={Star}>
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-7">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white px-2 py-1 rounded">
              Exemple — Club Entrepreneuriat
            </span>
          </div>
          <div className="space-y-4 text-carnet-ink-soft italic leading-relaxed font-instrument text-[15px]">
            <p>
              « Ce qui m'attire particulièrement, c'est le Junior Entreprise de l'école. J'ai pu
              échanger avec Thomas, étudiant en deuxième année, qui m'a expliqué qu'ils mènent
              des missions de conseil pour de vraies PME — pas des études fictives. »
            </p>
            <p>
              « Ce qui m'a marqué, c'est qu'il m'a dit que la première mission qu'il a gérée lui a
              appris plus en trois mois que n'importe quel cours sur la gestion de projet. Ayant
              déjà animé une association dans mon lycée, je pense pouvoir contribuer dès la première
              année sur la coordination des missions. »
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Asso nommée", ok: true },
              { label: "Lien personnel", ok: true },
              { label: "Détail concret", ok: true },
              { label: "Contribution", ok: true },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-700 bg-white px-3 py-2 rounded"
              >
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default AssociationsEcolePage;
