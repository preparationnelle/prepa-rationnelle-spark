import React from 'react';
import { BookOpen, BadgeCheck, MessageCircle, Heart, Clock, ListChecks, MessageSquare } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const careSteps = [
  { l: "C", t: "Contexte", role: "Situer le décor", q: "Où ? Quand ? Qui ?", w: "20 %" },
  { l: "C", t: "Conflit", role: "Créer la tension", q: "Quel obstacle inattendu ?", w: "30 %" },
  { l: "A", t: "Actions", role: "Montrer votre part", q: "Qu'avez-vous tenté, décidé, créé ?", w: "25 %" },
  { l: "R", t: "Résultat", role: "Prouver l'impact", q: "Chiffres, reconnaissance, leçon ?", w: "15 %" },
  { l: "E", t: "Émotion", role: "Humaniser", q: "Comment vous sentiez-vous ? Comment ont réagi les autres ?", w: "10 %" },
];

const StorytellingMethodePage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 01"
      icon={MessageSquare}
      titlePrefix="Storytelling"
      titleAccent="d'Entretien"
      intro="Transformez vos expériences passées en émotions convaincantes — guide pratique pour réussir l'entretien de personnalité en école de commerce."
      cta={{
        title: "Travaillons votre storytelling ensemble",
        text: "Construisez vos récits personnels avec nos coachs pour faire de vous le candidat dont on se souvient.",
      }}
    >
      <MethodIntroCard icon={BadgeCheck} title="Pourquoi le storytelling est-il indispensable ?">
        <p className="mb-3">
          Lors d'un entretien, le jury ne se souviendra pas de la liste de vos stages mais des émotions
          qu'il aura ressenties : curiosité, admiration, complicité…
        </p>
        <p className="font-medium text-pr-black mb-2">Le storytelling sert à :</p>
        <ul className="space-y-2">
          {[
            ["Accrocher", "une histoire vivante capte l'attention dès les 30 premières secondes."],
            ["Faire ressentir", "la mémoire humaine retient 6× mieux un fait associé à une émotion."],
            ["Prouver sans se vanter", "un récit montre vos qualités (leadership, résilience) plutôt que de les énoncer platement."],
            ["Différencier", "deux dossiers se ressemblent, deux histoires jamais."],
          ].map(([k, v]) => (
            <li key={k} className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-pr-black mt-1 flex-shrink-0" strokeWidth={1.8} />
              <span><strong className="text-pr-black">{k} :</strong> {v}</span>
            </li>
          ))}
        </ul>
      </MethodIntroCard>

      {/* C-C-A-R-E */}
      <MethodSection label="Section 01" title="Les 5 briques d'un récit efficace · méthode C-C-A-R-E" icon={BookOpen}>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {careSteps.map((s, i) => (
            <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-5 hover:border-pr-black transition-colors">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-dm-serif text-5xl text-pr-black leading-none">{s.l}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-black bg-pr-gray-bg px-2 py-1 rounded">
                  {s.w}
                </span>
              </div>
              <h4 className="font-dm-serif text-lg text-pr-black mt-3">{s.t}</h4>
              <p className="text-xs text-pr-gray-mid mb-2">{s.role}</p>
              <div className="h-px w-6 bg-pr-black mb-3" />
              <p className="text-xs text-pr-gray-dark leading-relaxed italic">{s.q}</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Inventaire */}
      <MethodSection label="Section 02" title="Inventaire d'expériences à convertir en récits" icon={ListChecks}>
        <div className="bg-white border border-pr-gray-light rounded-lg p-7">
          <ul className="space-y-3">
            {[
              "Jobs d'été : vente, restauration, animation.",
              "Projets associatifs : BDE, humanitaire, événement sportif.",
              "Initiatives personnelles : micro-entreprise, blog, podcast.",
              "Échecs : compétition perdue, crowdfunding raté, bug en ligne.",
              "Moments charnières : déménagement, changement d'orientation, rencontre inspirante.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-pr-gray-dark">
                <Clock className="w-4 h-4 text-pr-black mt-1 flex-shrink-0" strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </MethodSection>

      {/* Mauvais exemple */}
      <MethodSection label="Section 03" title="Exemple « factuel » à NE PAS reproduire" icon={MessageCircle}>
        <div className="bg-white border border-pr-gray-light rounded-lg p-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-black bg-pr-gray-bg px-2 py-1 rounded">
            Avant
          </span>
          <p className="italic text-pr-gray-dark mt-4 leading-relaxed">
            « J'ai organisé une course solidaire qui a réuni 200 participants et rapporté 3 000 € à une
            association. J'ai dirigé l'équipe logistique et communiqué sur Instagram. J'ai ainsi montré mon
            leadership et ma capacité à gérer un budget. »
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <div className="bg-pr-gray-bg rounded p-3 flex items-start gap-2">
              <BadgeCheck className="w-4 h-4 text-pr-black mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <p className="text-sm text-pr-gray-dark">Chiffres clairs.</p>
            </div>
            <div className="bg-pr-gray-bg rounded p-3 flex items-start gap-2">
              <span className="font-dm-serif text-pr-black text-base leading-none mt-0.5">×</span>
              <p className="text-sm text-pr-gray-dark">Aucun suspense ; émotions absentes ; on ne VOIT pas la scène.</p>
            </div>
          </div>
        </div>
      </MethodSection>

      {/* Bon exemple */}
      <MethodSection label="Section 04" title="Exemple de storytelling réussi · même expérience" icon={MessageCircle}>
        <div className="bg-pr-gray-bg border-l-4 border-pr-black rounded-r-lg p-7">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-black bg-white px-2 py-1 rounded">
            Après
          </span>
          <div className="space-y-3 text-pr-gray-dark mt-4 leading-relaxed">
            <p>
              <strong className="text-pr-black">Contexte —</strong> « Un vendredi de mars, la météo annonce
              des rafales de 70 km/h ; je suis devant le gymnase, 7 h du matin, carton de dossards sous
              le bras. Ma course solidaire, préparée depuis quatre mois, risque de s'envoler au sens propre… »
            </p>
            <p>
              <strong className="text-pr-black">Conflit —</strong> « À 8 h, le traiteur annule. Sans
              ravitaillement, 200 coureurs peuvent rentrer chez eux. Mes deux co-équipiers me regardent :
              "On fait quoi ?" »
            </p>
            <p>
              <strong className="text-pr-black">Actions —</strong> « Je dégoupille : je publie un SOS
              sur le groupe Facebook des "Mamans sportives" du quartier ; en dix minutes, cinq personnes
              proposent gâteaux et thermos. Je réaffecte le budget traiteur à la sécurité (doubler les
              bénévoles sur le parcours venteux). »
            </p>
            <p>
              <strong className="text-pr-black">Résultat —</strong> « À 10 h, le départ est donné ;
              sur la ligne d'arrivée, les gobelets de chocolat chaud font un tabac. Nous collectons 3 257 €,
              soit +8 % par rapport à l'objectif. L'association finance 130 kits scolaires supplémentaires. »
            </p>
            <p>
              <strong className="text-pr-black">Émotion / Leçon —</strong> « Ce matin-là, j'ai compris
              que le leadership, c'est parfois juste accepter de demander de l'aide et de réécrire le plan
              en 15 minutes. »
            </p>
          </div>
          <p className="italic text-sm text-pr-gray-mid mt-5">
            Effet sur le jury : vous l'avez transporté dans la tempête et il se souvient de votre chocolat chaud.
          </p>
        </div>
      </MethodSection>

      {/* Check-list */}
      <MethodSection label="Section 05" title="Construisez vos histoires · check-list pas à pas" icon={ListChecks}>
        <div className="space-y-3">
          {[
            "Choisissez l'émotion clé : fierté, surprise, détermination…",
            "Dessinez votre ligne de temps (5 points maxi).",
            "Insérez un dialogue ou une phrase entendue ce jour-là : instantanéité garantie.",
            "Mesurez l'impact : chiffre, prix, feedback (« Merci » écrit, mail…).",
            "Formulez la leçon : elle doit servir votre projet en école (apprendre à pivoter, gérer le stress, inspirer une équipe internationale).",
          ].map((step, i) => (
            <div key={i} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-black rounded-r-lg p-4 flex items-baseline gap-4">
              <span className="font-dm-serif text-3xl text-pr-black leading-none">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm text-pr-gray-dark">{step}</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Questions */}
      <MethodSection label="Section 06" title="Votre tour · questions pour aller plus loin" icon={MessageCircle}>
        <div className="bg-white border border-pr-gray-light rounded-lg p-7">
          <ul className="space-y-3">
            {[
              "Quelles expériences hors prépa vous viennent spontanément quand vous pensez « fierté » ou « frisson » ?",
              "Dans ces souvenirs, quel moment précis déclenche l'émotion ? (un regard, une phrase, un son ?)",
              "Quel résultat mesurable pouvez-vous ressortir ? (même un tout petit nombre…)",
              "Quelle compétence transférable vers la vie en école de commerce ressort de cette histoire ?",
              "Souhaitez-vous plutôt un coaching individuel ou un modèle de fiche à remplir pour chaque histoire ?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3 text-pr-gray-dark">
                <MessageCircle className="w-4 h-4 text-pr-black mt-1 flex-shrink-0" strokeWidth={1.8} />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </MethodSection>

      {/* À retenir */}
      <div className="bg-pr-gray-bg border-l-4 border-pr-black rounded-r-lg p-7 mb-8">
        <h3 className="font-dm-serif text-xl text-pr-black mb-4">À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-pr-gray-dark">
            <BadgeCheck className="w-5 h-5 text-pr-black mt-0.5 flex-shrink-0" strokeWidth={1.8} />
            Un bon storytelling = émotion + structure + preuve.
          </li>
          <li className="flex items-start gap-2 text-pr-gray-dark">
            <BadgeCheck className="w-5 h-5 text-pr-black mt-0.5 flex-shrink-0" strokeWidth={1.8} />
            Avec la méthode C-C-A-R-E, chaque expérience devient un film de 90 secondes qui marquera
            votre jury — et fera de vous le candidat dont on se rappelle.
          </li>
        </ul>
      </div>
    </MethodologyShell>
  );
};

export default StorytellingMethodePage;
