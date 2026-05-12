import React from 'react';
import { CheckCircle, AlertCircle, Lightbulb, Users, Star, Brain, Heart } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const PersonnalitePage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 04"
      icon={Heart}
      titlePrefix="Questions"
      titleAccent="Personnalité"
      intro="Maîtrisez l'art de répondre aux questions personnelles en révélant vos qualités et votre authenticité de manière stratégique."
      cta={{
        title: 'Prêt à révéler votre personnalité ?',
        text: 'Travaillez vos réponses aux questions personnelles avec nos coachs expérimentés.',
      }}
    >
      <MethodIntroCard icon={Lightbulb} title="Pourquoi les questions de personnalité ?">
        Les questions de personnalité permettent au jury d'évaluer votre maturité, votre capacité
        d'introspection et votre adéquation avec les valeurs de l'école. Elles révèlent votre intelligence
        émotionnelle et votre potentiel de leadership.
      </MethodIntroCard>

      {/* Catégories */}
      <MethodSection label="Section 01" title="Catégories de questions personnelles" icon={Brain}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { n: '01', t: 'Qualités et défauts', d: 'Questions sur vos forces et faiblesses personnelles.', l: ['"Quelles sont vos 3 principales qualités ?"', '"Quel est votre principal défaut ?"', '"Comment vos amis vous décriraient-ils ?"'] },
            { n: '02', t: 'Expériences marquantes', d: 'Questions sur vos réussites et échecs personnels.', l: ['"Racontez-moi un échec dont vous êtes fier"', '"Quelle est votre plus grande réussite ?"', '"Décrivez un moment de leadership"'] },
            { n: '03', t: 'Valeurs et motivations', d: 'Questions sur ce qui vous anime profondément.', l: ['"Quelles sont vos valeurs essentielles ?"', '"Qu\'est-ce qui vous motive au quotidien ?"', '"Quel est votre modèle de réussite ?"'] },
            { n: '04', t: 'Situations hypothétiques', d: 'Questions sur votre réaction face à des dilemmes.', l: ['"Comment gérez-vous le stress ?"', '"Que feriez-vous face à un conflit ?"', '"Comment prenez-vous vos décisions ?"'] },
          ].map((cat) => (
            <div key={cat.n} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-dm-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black">{cat.n}</span>
                <h4 className="font-dm-serif text-xl text-carnet-ink">{cat.t}</h4>
              </div>
              <div className="h-px w-10 bg-red-500 mb-3" />
              <p className="text-sm text-carnet-ink-soft mb-3 leading-relaxed">{cat.d}</p>
              <ul className="text-sm text-carnet-ink-mute space-y-1">
                {cat.l.map((q) => <li key={q}>— {q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* STAR */}
      <MethodSection label="Section 02" title="Méthode STAR pour structurer vos réponses" icon={Star}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { l: 'S', t: 'Situation', d: "Contexte précis de l'expérience" },
            { l: 'T', t: 'Tâche', d: 'Votre rôle et responsabilités' },
            { l: 'A', t: 'Action', d: 'Ce que vous avez fait concrètement' },
            { l: 'R', t: 'Résultat', d: 'Impact et apprentissages' },
          ].map((s) => (
            <div key={s.l} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 text-center hover:border-red-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="font-dm-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black mb-1 leading-none">{s.l}</div>
              <div className="h-px w-6 bg-red-500 mx-auto mb-3 mt-2" />
              <div className="font-medium text-carnet-ink mb-1">{s.t}</div>
              <p className="text-xs text-carnet-ink-mute">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white border border-red-100 px-2.5 py-1 rounded-full">
              Exemple
            </span>
            <h4 className="font-dm-serif text-lg text-carnet-ink">"Parlez-moi d'un échec"</h4>
          </div>
          <div className="space-y-2 text-sm text-carnet-ink-soft leading-relaxed">
            <p><span className="font-semibold text-red-700">S :</span> Lors de ma première année associative, j'étais responsable communication pour un événement de 200 personnes.</p>
            <p><span className="font-semibold text-red-700">T :</span> Je devais gérer la promotion sur les réseaux sociaux et attirer un maximum d'étudiants.</p>
            <p><span className="font-semibold text-red-700">A :</span> J'ai sous-estimé l'importance du timing et lancé la communication trop tard, seulement 1 semaine avant.</p>
            <p><span className="font-semibold text-red-700">R :</span> Résultat : seulement 80 participants. Cet échec m'a appris l'importance de la planification — depuis, je prépare toujours mes projets avec 3 semaines d'avance minimum.</p>
          </div>
        </div>
      </MethodSection>

      {/* Qualités */}
      <MethodSection label="Section 03" title="Qualités les plus valorisées en école de commerce" icon={Users}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: 'Leadership',         l: ['Capacité à fédérer', "Prise d'initiative", 'Vision stratégique', 'Charisme'] },
            { t: 'Relations humaines', l: ['Intelligence émotionnelle', 'Empathie', 'Travail en équipe', 'Communication'] },
            { t: 'Adaptabilité',       l: ['Résilience', 'Créativité', 'Curiosité intellectuelle', "Ouverture d'esprit"] },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <h4 className="font-dm-serif text-xl text-carnet-ink mb-2">{g.t}</h4>
              <div className="h-px w-10 bg-red-500 mb-4" />
              <ul className="space-y-2.5">
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

      {/* Défauts */}
      <MethodSection label="Section 04" title="Comment parler de vos défauts intelligemment" icon={AlertCircle}>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white border border-carnet-rule/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-emerald-600" strokeWidth={1.8} />
              <h4 className="font-dm-serif text-xl text-carnet-ink">Défauts acceptables</h4>
            </div>
            <ul className="space-y-3 text-sm text-carnet-ink-soft">
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20">
                <strong className="text-carnet-ink">Perfectionnisme :</strong> "Je peux parfois être trop perfectionniste, ce qui me fait perdre du temps sur des détails."
              </li>
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20">
                <strong className="text-carnet-ink">Impatience :</strong> "Je suis parfois impatient quand les projets n'avancent pas assez vite."
              </li>
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20">
                <strong className="text-carnet-ink">Autonomie excessive :</strong> "J'ai tendance à vouloir tout faire moi-même plutôt que de déléguer."
              </li>
            </ul>
          </div>

          <div className="bg-white border border-carnet-rule/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-red-600" strokeWidth={1.8} />
              <h4 className="font-dm-serif text-xl text-carnet-ink">Défauts à éviter</h4>
            </div>
            <ul className="space-y-3 text-sm text-carnet-ink-soft">
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20"><strong className="text-carnet-ink">Paresse :</strong> incompatible avec l'exigence des études.</li>
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20"><strong className="text-carnet-ink">Malhonnêteté :</strong> valeur fondamentale en business.</li>
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20"><strong className="text-carnet-ink">Mauvaise communication :</strong> essentiel en management.</li>
              <li className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20"><strong className="text-carnet-ink">Manque d'ambition :</strong> contraire aux attentes.</li>
            </ul>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-6 shadow-sm">
          <h4 className="font-dm-serif text-xl text-carnet-ink mb-4">Structure pour parler d'un défaut</h4>
          <ol className="space-y-2 text-sm text-carnet-ink-soft">
            {[
              'Reconnaître le défaut avec sincérité',
              'Donner un exemple concret de situation',
              'Expliquer les conséquences que cela a eues',
              'Présenter vos actions pour vous améliorer',
              'Montrer les progrès déjà réalisés',
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="font-dm-serif font-bold text-red-600 text-base leading-none mt-0.5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </MethodSection>

      {/* Questions pièges */}
      <MethodSection label="Section 05" title="Questions pièges fréquentes" icon={AlertCircle}>
        <div className="space-y-4">
          {[
            {
              q: 'Êtes-vous plutôt chef ou exécutant ?',
              p: 'Répondre "chef" paraît prétentieux, "exécutant" manque d\'ambition.',
              r: "Je suis à l'aise dans les deux rôles selon le contexte. Quand j'ai l'expérience, j'aime prendre des responsabilités de leadership. Quand je découvre un domaine, je préfère d'abord bien comprendre en tant qu'exécutant.",
            },
            {
              q: "Que pensez-vous de l'argent ?",
              p: 'Dire que c\'est important paraît vénal, dire que ce n\'est pas important paraît naïf.',
              r: "L'argent est un moyen, pas une fin. Il représente la reconnaissance du travail accompli et permet la liberté de choix. Mais ce qui me motive vraiment, c'est l'impact de mon travail et l'épanouissement personnel.",
            },
            {
              q: 'Pourquoi vous et pas un autre ?',
              p: 'Dénigrer les autres ou paraître arrogant.',
              r: "Je ne connais pas les autres candidats et je respecte leurs qualités. Ce que je peux vous dire, c'est que j'apporte une combinaison unique d'expériences, une motivation authentique pour mon projet, et une capacité démontrée à passer à l'action.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-500 rounded-r-2xl p-5 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-3">"{item.q}"</h4>
              <p className="text-sm text-carnet-ink-mute mb-2">
                <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Piège · </span>
                {item.p}
              </p>
              <p className="text-sm text-carnet-ink-soft leading-relaxed">
                <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Réponse · </span>
                {item.r}
              </p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Conseils */}
      <MethodSection label="Section 06" title="Conseils pratiques pour exceller" icon={Lightbulb}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: 'Préparation',   l: ['Listez 5-6 expériences marquantes variées', 'Préparez des exemples pour chaque qualité', 'Identifiez vos valeurs fondamentales', 'Travaillez votre introspection'] },
            { t: 'Communication', l: ['Soyez authentique et sincère', 'Utilisez des exemples concrets', 'Montrez votre évolution personnelle', 'Gardez un ton positif'] },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <h4 className="font-dm-serif text-xl text-carnet-ink mb-2">{g.t}</h4>
              <div className="h-px w-10 bg-red-500 mb-4" />
              <ul className="space-y-3">
                {g.l.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-carnet-ink-soft">
                    <span className="font-dm-serif text-red-600 text-xl leading-none mt-0.5">{i + 1}</span>
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

export default PersonnalitePage;
