import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, CheckCircle, AlertCircle, Lightbulb, Users, Star, Brain, type LucideIcon } from 'lucide-react';

const PersonnalitePage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <div className="container mx-auto py-12 px-4">
        {/* Retour */}
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
                Méthodologie · Module 04
              </span>
              <span className="h-px w-8 bg-pr-orange" />
            </div>
            <div className="w-16 h-16 bg-pr-orange-pale rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-pr-orange-dark" strokeWidth={1.6} />
            </div>
            <h1 className="font-dm-serif text-4xl sm:text-5xl text-pr-black mb-5 leading-tight">
              Questions <span className="text-pr-orange">Personnalité</span>
            </h1>
            <p className="text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Maîtrisez l'art de répondre aux questions personnelles en révélant vos qualités
              et votre authenticité de manière stratégique.
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12 bg-pr-orange-pale border-l-4 border-l-pr-orange border-y-0 border-r-0 rounded-l-none rounded-r-lg">
            <CardContent className="p-7">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-7 h-7 text-pr-orange-dark mt-1 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <h3 className="font-dm-serif text-xl text-pr-black mb-3">Pourquoi les questions de personnalité ?</h3>
                  <p className="text-pr-gray-dark leading-relaxed">
                    Les questions de personnalité permettent au jury d'évaluer votre maturité, votre capacité
                    d'introspection et votre adéquation avec les valeurs de l'école. Elles révèlent votre intelligence
                    émotionnelle et votre potentiel de leadership.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catégories */}
          <Section
            label="Section 01"
            title="Catégories de questions personnelles"
            icon={Brain}
          >
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { n: "01", t: "Qualités et défauts", d: "Questions sur vos forces et faiblesses personnelles.", l: ['"Quelles sont vos 3 principales qualités ?"', '"Quel est votre principal défaut ?"', '"Comment vos amis vous décriraient-ils ?"'] },
                { n: "02", t: "Expériences marquantes", d: "Questions sur vos réussites et échecs personnels.", l: ['"Racontez-moi un échec dont vous êtes fier"', '"Quelle est votre plus grande réussite ?"', '"Décrivez un moment de leadership"'] },
                { n: "03", t: "Valeurs et motivations", d: "Questions sur ce qui vous anime profondément.", l: ['"Quelles sont vos valeurs essentielles ?"', '"Qu\'est-ce qui vous motive au quotidien ?"', '"Quel est votre modèle de réussite ?"'] },
                { n: "04", t: "Situations hypothétiques", d: "Questions sur votre réaction face à des dilemmes.", l: ['"Comment gérez-vous le stress ?"', '"Que feriez-vous face à un conflit ?"', '"Comment prenez-vous vos décisions ?"'] },
              ].map((cat) => (
                <div key={cat.n} className="bg-white border border-pr-gray-light rounded-lg p-6 hover:border-pr-orange transition-colors">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-dm-serif text-3xl text-pr-orange">{cat.n}</span>
                    <h4 className="font-dm-serif text-lg text-pr-black">{cat.t}</h4>
                  </div>
                  <div className="h-px w-8 bg-pr-orange mb-3" />
                  <p className="text-sm text-pr-gray-dark mb-3">{cat.d}</p>
                  <ul className="text-sm text-pr-gray-mid space-y-1">
                    {cat.l.map((q) => <li key={q}>— {q}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* STAR */}
          <Section
            label="Section 02"
            title="Méthode STAR pour structurer vos réponses"
            icon={Star}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { l: "S", t: "Situation", d: "Contexte précis de l'expérience" },
                { l: "T", t: "Tâche", d: "Votre rôle et responsabilités" },
                { l: "A", t: "Action", d: "Ce que vous avez fait concrètement" },
                { l: "R", t: "Résultat", d: "Impact et apprentissages" },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-pr-gray-light rounded-lg p-5 text-center">
                  <div className="font-dm-serif text-4xl text-pr-orange mb-1">{s.l}</div>
                  <div className="h-px w-6 bg-pr-orange mx-auto mb-3" />
                  <div className="font-medium text-pr-black mb-1">{s.t}</div>
                  <p className="text-xs text-pr-gray-mid">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-white px-2 py-1 rounded">
                  Exemple
                </span>
                <h4 className="font-dm-serif text-lg text-pr-black">"Parlez-moi d'un échec"</h4>
              </div>
              <div className="space-y-2 text-sm text-pr-gray-dark leading-relaxed">
                <p><span className="font-semibold text-pr-orange-dark">S :</span> Lors de ma première année associative, j'étais responsable communication pour un événement de 200 personnes.</p>
                <p><span className="font-semibold text-pr-orange-dark">T :</span> Je devais gérer la promotion sur les réseaux sociaux et attirer un maximum d'étudiants.</p>
                <p><span className="font-semibold text-pr-orange-dark">A :</span> J'ai sous-estimé l'importance du timing et lancé la communication trop tard, seulement 1 semaine avant.</p>
                <p><span className="font-semibold text-pr-orange-dark">R :</span> Résultat : seulement 80 participants. Cet échec m'a appris l'importance de la planification — depuis, je prépare toujours mes projets avec 3 semaines d'avance minimum.</p>
              </div>
            </div>
          </Section>

          {/* Qualités */}
          <Section
            label="Section 03"
            title="Qualités les plus valorisées en école de commerce"
            icon={Users}
          >
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { t: "Leadership", l: ["Capacité à fédérer", "Prise d'initiative", "Vision stratégique", "Charisme"] },
                { t: "Relations humaines", l: ["Intelligence émotionnelle", "Empathie", "Travail en équipe", "Communication"] },
                { t: "Adaptabilité", l: ["Résilience", "Créativité", "Curiosité intellectuelle", "Ouverture d'esprit"] },
              ].map((g) => (
                <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
                  <h4 className="font-dm-serif text-lg text-pr-black mb-2">{g.t}</h4>
                  <div className="h-px w-8 bg-pr-orange mb-4" />
                  <ul className="space-y-2.5">
                    {g.l.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-pr-gray-dark">
                        <CheckCircle className="w-4 h-4 text-pr-orange mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Défauts */}
          <Section
            label="Section 04"
            title="Comment parler de vos défauts intelligemment"
            icon={AlertCircle}
          >
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div className="bg-white border border-pr-gray-light rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-pr-orange" strokeWidth={1.8} />
                  <h4 className="font-dm-serif text-lg text-pr-black">Défauts acceptables</h4>
                </div>
                <ul className="space-y-3 text-sm text-pr-gray-dark">
                  <li className="bg-pr-gray-bg p-3 rounded">
                    <strong className="text-pr-black">Perfectionnisme :</strong> "Je peux parfois être trop perfectionniste, ce qui me fait perdre du temps sur des détails."
                  </li>
                  <li className="bg-pr-gray-bg p-3 rounded">
                    <strong className="text-pr-black">Impatience :</strong> "Je suis parfois impatient quand les projets n'avancent pas assez vite."
                  </li>
                  <li className="bg-pr-gray-bg p-3 rounded">
                    <strong className="text-pr-black">Autonomie excessive :</strong> "J'ai tendance à vouloir tout faire moi-même plutôt que de déléguer."
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-pr-gray-light rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-pr-orange-dark" strokeWidth={1.8} />
                  <h4 className="font-dm-serif text-lg text-pr-black">Défauts à éviter</h4>
                </div>
                <ul className="space-y-3 text-sm text-pr-gray-dark">
                  <li className="bg-pr-gray-bg p-3 rounded"><strong className="text-pr-black">Paresse :</strong> incompatible avec l'exigence des études.</li>
                  <li className="bg-pr-gray-bg p-3 rounded"><strong className="text-pr-black">Malhonnêteté :</strong> valeur fondamentale en business.</li>
                  <li className="bg-pr-gray-bg p-3 rounded"><strong className="text-pr-black">Mauvaise communication :</strong> essentiel en management.</li>
                  <li className="bg-pr-gray-bg p-3 rounded"><strong className="text-pr-black">Manque d'ambition :</strong> contraire aux attentes.</li>
                </ul>
              </div>
            </div>

            <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-3">Structure pour parler d'un défaut</h4>
              <ol className="space-y-2 text-sm text-pr-gray-dark">
                <li><span className="font-semibold text-pr-orange-dark">1.</span> Reconnaître le défaut avec sincérité</li>
                <li><span className="font-semibold text-pr-orange-dark">2.</span> Donner un exemple concret de situation</li>
                <li><span className="font-semibold text-pr-orange-dark">3.</span> Expliquer les conséquences que cela a eues</li>
                <li><span className="font-semibold text-pr-orange-dark">4.</span> Présenter vos actions pour vous améliorer</li>
                <li><span className="font-semibold text-pr-orange-dark">5.</span> Montrer les progrès déjà réalisés</li>
              </ol>
            </div>
          </Section>

          {/* Questions pièges */}
          <Section
            label="Section 05"
            title="Questions pièges fréquentes"
            icon={AlertCircle}
          >
            <div className="space-y-4">
              {[
                {
                  q: "Êtes-vous plutôt chef ou exécutant ?",
                  p: "Répondre \"chef\" paraît prétentieux, \"exécutant\" manque d'ambition.",
                  r: "Je suis à l'aise dans les deux rôles selon le contexte. Quand j'ai l'expérience, j'aime prendre des responsabilités de leadership. Quand je découvre un domaine, je préfère d'abord bien comprendre en tant qu'exécutant.",
                },
                {
                  q: "Que pensez-vous de l'argent ?",
                  p: "Dire que c'est important paraît vénal, dire que ce n'est pas important paraît naïf.",
                  r: "L'argent est un moyen, pas une fin. Il représente la reconnaissance du travail accompli et permet la liberté de choix. Mais ce qui me motive vraiment, c'est l'impact de mon travail et l'épanouissement personnel.",
                },
                {
                  q: "Pourquoi vous et pas un autre ?",
                  p: "Dénigrer les autres ou paraître arrogant.",
                  r: "Je ne connais pas les autres candidats et je respecte leurs qualités. Ce que je peux vous dire, c'est que j'apporte une combinaison unique d'expériences, une motivation authentique pour mon projet, et une capacité démontrée à passer à l'action.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-5">
                  <h4 className="font-dm-serif text-lg text-pr-black mb-3">"{item.q}"</h4>
                  <p className="text-sm text-pr-gray-mid mb-2">
                    <span className="font-semibold text-pr-orange-dark uppercase text-[10px] tracking-wider">Piège · </span>
                    {item.p}
                  </p>
                  <p className="text-sm text-pr-gray-dark">
                    <span className="font-semibold text-pr-orange-dark uppercase text-[10px] tracking-wider">Réponse · </span>
                    {item.r}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Conseils */}
          <Section
            label="Section 06"
            title="Conseils pratiques pour exceller"
            icon={Lightbulb}
          >
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { t: "Préparation", l: ["Listez 5-6 expériences marquantes variées", "Préparez des exemples pour chaque qualité", "Identifiez vos valeurs fondamentales", "Travaillez votre introspection"] },
                { t: "Communication", l: ["Soyez authentique et sincère", "Utilisez des exemples concrets", "Montrez votre évolution personnelle", "Gardez un ton positif"] },
              ].map((g) => (
                <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
                  <h4 className="font-dm-serif text-lg text-pr-black mb-2">{g.t}</h4>
                  <div className="h-px w-8 bg-pr-orange mb-4" />
                  <ul className="space-y-3">
                    {g.l.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-pr-gray-dark">
                        <span className="font-dm-serif text-pr-orange text-lg leading-none mt-0.5">{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="mt-16 text-center bg-white border border-pr-gray-light rounded-xl px-8 py-12">
            <div className="h-1 w-12 bg-pr-orange mx-auto mb-6 rounded-full" />
            <h3 className="font-dm-serif text-2xl sm:text-3xl text-pr-black mb-3">
              Prêt à révéler votre personnalité ?
            </h3>
            <p className="text-base text-pr-gray-mid max-w-xl mx-auto mb-8">
              Travaillez vos réponses aux questions personnelles avec nos coachs expérimentés.
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

export default PersonnalitePage;
