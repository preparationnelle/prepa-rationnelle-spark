import React from 'react';
import { HandHeart, AlertCircle, Lightbulb, Target, MessageSquare, Users } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const TendrePerchesPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Méthodologie · Module 07"
      icon={HandHeart}
      titlePrefix="Tendre des"
      titleAccent="Perches"
      intro="Maîtrisez l'art subtil d'orienter la conversation vers vos points forts et de créer des opportunités pour valoriser votre profil."
      cta={{
        title: "Maîtrisez l'art des perches",
        text: 'Apprenez à diriger subtilement vos entretiens vers vos points forts avec nos techniques avancées.',
      }}
    >
      <MethodIntroCard icon={Lightbulb} title='Qu&rsquo;est-ce que « tendre des perches » ?'>
        Tendre des perches consiste à introduire subtilement dans vos réponses des éléments
        qui incitent le jury à vous poser des questions sur vos points forts. C'est une technique
        avancée qui vous permet de prendre un contrôle partiel de l'entretien et de mettre en avant
        vos meilleurs atouts.
      </MethodIntroCard>

      {/* Principe */}
      <MethodSection label="Section 01" title="Le principe du teasing intelligent" icon={Target}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { n: '01', t: 'Mentionner sans développer', d: 'Évoquez brièvement une expérience, un projet ou une compétence intéressante sans entrer dans les détails — créez la curiosité du jury.' },
            { n: '02', t: "Créer l'appel d'air",        d: "Utilisez des formules qui donnent envie d'en savoir plus : « notamment », « par exemple », « entre autres », « particulièrement »." },
            { n: '03', t: 'Rester naturel',             d: "La perche doit s'intégrer naturellement dans votre discours. Elle ne doit jamais paraître forcée." },
            { n: '04', t: 'Préparer la suite',          d: "Ayez toujours une anecdote complète et valorisante prête à développer si le jury mord à l'hameçon." },
          ].map((p) => (
            <div key={p.n} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-dm-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-orange-dark">{p.n}</span>
                <h4 className="font-dm-serif text-xl text-carnet-ink">{p.t}</h4>
              </div>
              <div className="h-px w-10 bg-red-500 mb-3" />
              <p className="text-sm text-carnet-ink-soft leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Types */}
      <MethodSection label="Section 02" title="Types de perches efficaces" icon={MessageSquare}>
        <div className="space-y-5">
          {[
            {
              t: "Perches d'expérience",
              forms: ['"Lors de mon stage notamment chez [entreprise prestigieuse]…"', '"Cette expérience m\'a particulièrement marqué…"', '"J\'ai eu la chance de travailler sur un projet innovant…"', '"Une situation complexe que j\'ai dû gérer…"'],
              qs:    ['"Pouvez-vous nous en dire plus sur ce stage ?"', '"Qu\'est-ce qui vous a marqué exactement ?"', '"En quoi ce projet était-il innovant ?"', '"Comment avez-vous géré cette situation ?"'],
            },
            {
              t: 'Perches de compétence',
              forms: ['"Grâce à mes compétences en [domaine technique]…"', '"Mon expérience en leadership m\'a aidé…"', '"Mes capacités d\'analyse ont été déterminantes…"', '"Ma maîtrise de [langue/outil] s\'est avérée utile…"'],
              qs:    ['"Comment avez-vous développé ces compétences ?"', '"Donnez-nous un exemple de votre leadership"', '"Comment procédez-vous pour analyser ?"', '"À quel niveau maîtrisez-vous [compétence] ?"'],
            },
            {
              t: 'Perches de projet',
              forms: ['"Dans le cadre de mon projet entrepreneurial…"', '"L\'association que j\'ai créée a permis de…"', '"Le défi que je me suis lancé consistait à…"', '"Mon initiative personnelle a abouti à…"'],
              qs:    ['"Parlez-nous de ce projet entrepreneurial"', '"Comment avez-vous créé cette association ?"', '"Quel était exactement ce défi ?"', '"Quels ont été les résultats de votre initiative ?"'],
            },
          ].map((cat) => (
            <div key={cat.t} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-500 rounded-r-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-dm-serif text-2xl text-carnet-ink mb-5">{cat.t}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                    Formulations
                  </span>
                  <ul className="mt-3 space-y-2 text-sm text-carnet-ink-soft">
                    {cat.forms.map((f, i) => <li key={i}>— {f}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                    Questions espérées
                  </span>
                  <ul className="mt-3 space-y-2 text-sm text-carnet-ink-soft">
                    {cat.qs.map((q, i) => <li key={i}>— {q}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Exemples */}
      <MethodSection label="Section 03" title="Exemples concrets de perches réussies" icon={Users}>
        <div className="space-y-5">
          {[
            {
              q: 'Présentez-nous votre parcours',
              r: "Après mon bac S, j'ai intégré une prépa ECE où j'ai découvert ma passion pour l'économie. En parallèle, j'ai lancé une **association d'aide aux devoirs qui compte aujourd'hui 50 bénévoles**, ce qui m'a appris beaucoup sur le management. Mon stage chez Deloitte m'a confirmé mon intérêt pour le conseil en stratégie…",
              next: "Comment avez-vous réussi à développer cette association jusqu'à 50 bénévoles ?",
            },
            {
              q: 'Pourquoi avoir choisi cette école ?',
              r: "Votre école correspond parfaitement à mon projet de créer une start-up dans la FinTech. L'incubateur et le **programme d'entrepreneuriat que j'ai pu découvrir lors de ma rencontre avec un alumni** m'ont convaincu. De plus, mon expérience en développement web me permettrait d'apporter une expertise technique unique…",
              next: 'Vous avez des compétences en développement web ? Comment les avez-vous acquises ?',
            },
            {
              q: 'Quelles sont vos principales qualités ?',
              r: "Je dirais d'abord ma persévérance, qui m'a notamment permis d'apprendre le mandarin en autodidacte et d'obtenir le HSK 4. Ensuite, ma capacité d'adaptation, **particulièrement mise à l'épreuve lors de mon séjour humanitaire de 3 mois au Cambodge**. Enfin, mon sens de l'initiative…",
              next: "Parlez-nous de cette expérience au Cambodge, qu'y avez-vous fait exactement ?",
            },
          ].map((ex, i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                  Exemple {i + 1}
                </span>
              </div>
              <p className="text-sm text-carnet-ink-mute mb-1 italic">— Question du jury :</p>
              <p className="font-dm-serif text-xl text-carnet-ink mb-4">"{ex.q}"</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">Réponse avec perche</p>
              <p className="text-sm text-carnet-ink-soft leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ex.r.replace(/\*\*(.*?)\*\*/g, '<strong class="text-carnet-ink">$1</strong>') }} />
              <div className="bg-gradient-to-br from-red-50/80 to-orange-50/40 border border-red-100 rounded-xl p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-1">Question probable</p>
                <p className="text-sm text-carnet-ink-soft italic">"{ex.next}"</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Pièges */}
      <MethodSection label="Section 04" title="Pièges à éviter avec les perches" icon={AlertCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: 'Perches trop évidentes',
              l: [
                { s: 'Trop direct',    d: "« D'ailleurs, j'aimerais vous parler de mon stage chez Google… »" },
                { s: 'Trop insistant', d: "« Ce qui est particulièrement intéressant dans mon parcours, c'est… »" },
                { s: 'Trop répétitif', d: 'Utiliser « notamment » dans chaque réponse.' },
              ],
            },
            {
              t: 'Perches non préparées',
              l: [
                { s: 'Manque de contenu', d: "Tendre une perche sans avoir d'histoire à raconter." },
                { s: 'Incohérence',       d: 'Perche qui ne colle pas avec le reste du discours.' },
                { s: 'Exagération',       d: 'Survendre une expérience banale.' },
              ],
            },
          ].map((g) => (
            <div key={g.t} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-dm-serif text-xl text-carnet-ink mb-4">{g.t}</h4>
              <ul className="space-y-3">
                {g.l.map((item) => (
                  <li key={item.s} className="bg-carnet-paper border-l-4 border-red-500 rounded-r-lg p-3 text-sm text-carnet-ink-soft">
                    <strong className="text-carnet-ink">{item.s} :</strong> {item.d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Stratégie */}
      <MethodSection label="Section 05" title="Stratégie avancée : la carte de perches" icon={Target}>
        <div className="bg-white border border-carnet-rule/30 rounded-2xl p-7 hover:shadow-md transition-shadow duration-300">
          <h4 className="font-dm-serif text-2xl text-carnet-ink mb-2">Préparez votre arsenal de perches</h4>
          <div className="h-px w-12 bg-red-500 mb-6" />
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                Étape 1
              </span>
              <h5 className="font-dm-serif text-lg text-carnet-ink mt-3 mb-2">Identifiez vos 5 meilleurs atouts</h5>
              <ul className="text-sm text-carnet-ink-soft space-y-1.5">
                <li>— Expérience la plus impressionnante</li>
                <li>— Compétence rare ou technique</li>
                <li>— Projet personnel abouti</li>
                <li>— Qualité différenciante</li>
                <li>— Réussite mesurable</li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                Étape 2
              </span>
              <h5 className="font-dm-serif text-lg text-carnet-ink mt-3 mb-2">Préparez les amorces</h5>
              <ul className="text-sm text-carnet-ink-soft space-y-1.5">
                <li>— Une phrase d'accroche pour chaque atout</li>
                <li>— L'histoire complète développée</li>
                <li>— Les chiffres et résultats précis</li>
                <li>— Le lien avec votre projet/l'école</li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-4">
            <h5 className="font-dm-serif text-lg text-carnet-ink mb-1">Conseil d'expert</h5>
            <p className="text-sm text-carnet-ink-soft leading-relaxed">
              Planifiez dans quel ordre utiliser vos perches selon l'évolution de l'entretien.
              Gardez votre meilleur atout pour la fin si vous sentez que vous devez marquer des points.
            </p>
          </div>
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default TendrePerchesPage;
