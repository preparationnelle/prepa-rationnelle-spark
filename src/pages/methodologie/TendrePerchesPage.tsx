import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, HandHeart, AlertCircle, Lightbulb, Target, MessageSquare, Users, type LucideIcon } from 'lucide-react';

const TendrePerchesPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Link
            to="/methodologie/entretiens-personnalite"
            className="inline-flex items-center text-sm text-pr-gray-mid hover:text-pr-orange-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux entretiens de personnalité
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-pr-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
                Méthodologie · Module 07
              </span>
              <span className="h-px w-8 bg-pr-orange" />
            </div>
            <div className="w-16 h-16 bg-pr-orange-pale rounded-full mx-auto mb-6 flex items-center justify-center">
              <HandHeart className="w-8 h-8 text-pr-orange-dark" strokeWidth={1.6} />
            </div>
            <h1 className="font-dm-serif text-4xl sm:text-5xl text-pr-black mb-5 leading-tight">
              Tendre des <span className="text-pr-orange">Perches</span>
            </h1>
            <p className="text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Maîtrisez l'art subtil d'orienter la conversation vers vos points forts
              et de créer des opportunités pour valoriser votre profil.
            </p>
          </div>

          {/* Intro */}
          <Card className="mb-12 bg-pr-orange-pale border-l-4 border-l-pr-orange border-y-0 border-r-0 rounded-l-none rounded-r-lg">
            <CardContent className="p-7">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-7 h-7 text-pr-orange-dark mt-1 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <h3 className="font-dm-serif text-xl text-pr-black mb-3">Qu'est-ce que « tendre des perches » ?</h3>
                  <p className="text-pr-gray-dark leading-relaxed">
                    Tendre des perches consiste à introduire subtilement dans vos réponses des éléments
                    qui incitent le jury à vous poser des questions sur vos points forts. C'est une technique
                    avancée qui vous permet de prendre un contrôle partiel de l'entretien et de mettre en avant
                    vos meilleurs atouts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Principe */}
          <Section label="Section 01" title="Le principe du teasing intelligent" icon={Target}>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { n: "01", t: "Mentionner sans développer", d: "Évoquez brièvement une expérience, un projet ou une compétence intéressante sans entrer dans les détails — créez la curiosité du jury." },
                { n: "02", t: "Créer l'appel d'air", d: "Utilisez des formules qui donnent envie d'en savoir plus : « notamment », « par exemple », « entre autres », « particulièrement »." },
                { n: "03", t: "Rester naturel", d: "La perche doit s'intégrer naturellement dans votre discours. Elle ne doit jamais paraître forcée." },
                { n: "04", t: "Préparer la suite", d: "Ayez toujours une anecdote complète et valorisante prête à développer si le jury mord à l'hameçon." },
              ].map((p) => (
                <div key={p.n} className="bg-white border border-pr-gray-light rounded-lg p-6 hover:border-pr-orange transition-colors">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-dm-serif text-3xl text-pr-orange">{p.n}</span>
                    <h4 className="font-dm-serif text-lg text-pr-black">{p.t}</h4>
                  </div>
                  <div className="h-px w-8 bg-pr-orange mb-3" />
                  <p className="text-sm text-pr-gray-dark leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Types */}
          <Section label="Section 02" title="Types de perches efficaces" icon={MessageSquare}>
            <div className="space-y-5">
              {[
                {
                  t: "Perches d'expérience",
                  forms: ['"Lors de mon stage notamment chez [entreprise prestigieuse]…"', '"Cette expérience m\'a particulièrement marqué…"', '"J\'ai eu la chance de travailler sur un projet innovant…"', '"Une situation complexe que j\'ai dû gérer…"'],
                  qs: ['"Pouvez-vous nous en dire plus sur ce stage ?"', '"Qu\'est-ce qui vous a marqué exactement ?"', '"En quoi ce projet était-il innovant ?"', '"Comment avez-vous géré cette situation ?"'],
                },
                {
                  t: "Perches de compétence",
                  forms: ['"Grâce à mes compétences en [domaine technique]…"', '"Mon expérience en leadership m\'a aidé…"', '"Mes capacités d\'analyse ont été déterminantes…"', '"Ma maîtrise de [langue/outil] s\'est avérée utile…"'],
                  qs: ['"Comment avez-vous développé ces compétences ?"', '"Donnez-nous un exemple de votre leadership"', '"Comment procédez-vous pour analyser ?"', '"À quel niveau maîtrisez-vous [compétence] ?"'],
                },
                {
                  t: "Perches de projet",
                  forms: ['"Dans le cadre de mon projet entrepreneurial…"', '"L\'association que j\'ai créée a permis de…"', '"Le défi que je me suis lancé consistait à…"', '"Mon initiative personnelle a abouti à…"'],
                  qs: ['"Parlez-nous de ce projet entrepreneurial"', '"Comment avez-vous créé cette association ?"', '"Quel était exactement ce défi ?"', '"Quels ont été les résultats de votre initiative ?"'],
                },
              ].map((cat) => (
                <div key={cat.t} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-6">
                  <h4 className="font-dm-serif text-xl text-pr-black mb-5">{cat.t}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                        Formulations
                      </span>
                      <ul className="mt-3 space-y-2 text-sm text-pr-gray-dark">
                        {cat.forms.map((f, i) => <li key={i}>— {f}</li>)}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                        Questions espérées
                      </span>
                      <ul className="mt-3 space-y-2 text-sm text-pr-gray-dark">
                        {cat.qs.map((q, i) => <li key={i}>— {q}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Exemples */}
          <Section label="Section 03" title="Exemples concrets de perches réussies" icon={Users}>
            <div className="space-y-5">
              {[
                {
                  q: "Présentez-nous votre parcours",
                  r: "Après mon bac S, j'ai intégré une prépa ECE où j'ai découvert ma passion pour l'économie. En parallèle, j'ai lancé une **association d'aide aux devoirs qui compte aujourd'hui 50 bénévoles**, ce qui m'a appris beaucoup sur le management. Mon stage chez Deloitte m'a confirmé mon intérêt pour le conseil en stratégie…",
                  next: "Comment avez-vous réussi à développer cette association jusqu'à 50 bénévoles ?",
                },
                {
                  q: "Pourquoi avoir choisi cette école ?",
                  r: "Votre école correspond parfaitement à mon projet de créer une start-up dans la FinTech. L'incubateur et le **programme d'entrepreneuriat que j'ai pu découvrir lors de ma rencontre avec un alumni** m'ont convaincu. De plus, mon expérience en développement web me permettrait d'apporter une expertise technique unique…",
                  next: "Vous avez des compétences en développement web ? Comment les avez-vous acquises ?",
                },
                {
                  q: "Quelles sont vos principales qualités ?",
                  r: "Je dirais d'abord ma persévérance, qui m'a notamment permis d'apprendre le mandarin en autodidacte et d'obtenir le HSK 4. Ensuite, ma capacité d'adaptation, **particulièrement mise à l'épreuve lors de mon séjour humanitaire de 3 mois au Cambodge**. Enfin, mon sens de l'initiative…",
                  next: "Parlez-nous de cette expérience au Cambodge, qu'y avez-vous fait exactement ?",
                },
              ].map((ex, i) => (
                <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                      Exemple {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-pr-gray-mid mb-1 italic">— Question du jury :</p>
                  <p className="font-dm-serif text-lg text-pr-black mb-4">"{ex.q}"</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-2">Réponse avec perche</p>
                  <p className="text-sm text-pr-gray-dark leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ex.r.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pr-black">$1</strong>') }} />
                  <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">Question probable</p>
                    <p className="text-sm text-pr-gray-dark italic">"{ex.next}"</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Pièges */}
          <Section label="Section 04" title="Pièges à éviter avec les perches" icon={AlertCircle}>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  t: "Perches trop évidentes",
                  l: [
                    { s: "Trop direct", d: "« D'ailleurs, j'aimerais vous parler de mon stage chez Google… »" },
                    { s: "Trop insistant", d: "« Ce qui est particulièrement intéressant dans mon parcours, c'est… »" },
                    { s: "Trop répétitif", d: "Utiliser « notamment » dans chaque réponse." },
                  ],
                },
                {
                  t: "Perches non préparées",
                  l: [
                    { s: "Manque de contenu", d: "Tendre une perche sans avoir d'histoire à raconter." },
                    { s: "Incohérence", d: "Perche qui ne colle pas avec le reste du discours." },
                    { s: "Exagération", d: "Survendre une expérience banale." },
                  ],
                },
              ].map((g) => (
                <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
                  <h4 className="font-dm-serif text-lg text-pr-black mb-4">{g.t}</h4>
                  <ul className="space-y-3">
                    {g.l.map((item) => (
                      <li key={item.s} className="bg-pr-gray-bg border-l-4 border-pr-orange rounded-r p-3 text-sm text-pr-gray-dark">
                        <strong className="text-pr-black">{item.s} :</strong> {item.d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Stratégie */}
          <Section label="Section 05" title="Stratégie avancée : la carte de perches" icon={Target}>
            <div className="bg-white border border-pr-gray-light rounded-lg p-7">
              <h4 className="font-dm-serif text-xl text-pr-black mb-2">Préparez votre arsenal de perches</h4>
              <div className="h-px w-12 bg-pr-orange mb-6" />
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                    Étape 1
                  </span>
                  <h5 className="font-medium text-pr-black mt-3 mb-2">Identifiez vos 5 meilleurs atouts</h5>
                  <ul className="text-sm text-pr-gray-dark space-y-1.5">
                    <li>— Expérience la plus impressionnante</li>
                    <li>— Compétence rare ou technique</li>
                    <li>— Projet personnel abouti</li>
                    <li>— Qualité différenciante</li>
                    <li>— Réussite mesurable</li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                    Étape 2
                  </span>
                  <h5 className="font-medium text-pr-black mt-3 mb-2">Préparez les amorces</h5>
                  <ul className="text-sm text-pr-gray-dark space-y-1.5">
                    <li>— Une phrase d'accroche pour chaque atout</li>
                    <li>— L'histoire complète développée</li>
                    <li>— Les chiffres et résultats précis</li>
                    <li>— Le lien avec votre projet/l'école</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r p-4">
                <h5 className="font-dm-serif text-base text-pr-black mb-1">Conseil d'expert</h5>
                <p className="text-sm text-pr-gray-dark">
                  Planifiez dans quel ordre utiliser vos perches selon l'évolution de l'entretien.
                  Gardez votre meilleur atout pour la fin si vous sentez que vous devez marquer des points.
                </p>
              </div>
            </div>
          </Section>

          {/* CTA */}
          <div className="mt-16 text-center bg-white border border-pr-gray-light rounded-xl px-8 py-12">
            <div className="h-1 w-12 bg-pr-orange mx-auto mb-6 rounded-full" />
            <h3 className="font-dm-serif text-2xl sm:text-3xl text-pr-black mb-3">
              Maîtrisez l'art des perches
            </h3>
            <p className="text-base text-pr-gray-mid max-w-xl mx-auto mb-8">
              Apprenez à diriger subtilement vos entretiens vers vos points forts avec nos techniques avancées.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/methodologie/entretiens-personnalite">
                <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6">
                  Voir toutes les méthodologies
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange">
                  Coaching personnalisé
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  label,
  title,
  icon: Icon,
  children,
}: {
  label: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-7 w-1 bg-pr-orange rounded-full" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Icon className="w-7 h-7 text-pr-gray-dark" strokeWidth={1.5} />
        <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black">{title}</h2>
      </div>
    </div>
    {children}
  </section>
);

export default TendrePerchesPage;
