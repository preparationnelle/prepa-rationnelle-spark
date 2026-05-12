import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PRCard: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <Card className="relative bg-white rounded-2xl border border-pr-gray-light overflow-hidden mt-6 first:mt-0">
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-black" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black flex items-baseline gap-3">
        <span className="font-dm-serif text-pr-black text-3xl leading-none">{number}</span>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

const DevenirHumainEducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Devenir humain&nbsp;: l&apos;éducation et la culture comme seconde naissance
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Rousseau, Kant, Arendt. Trois manières de penser que l&apos;humanité ne se
              donne pas&nbsp;: elle se transmet.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Naît-on humain, ou le devient-on&nbsp;? La biologie tranche en faveur du
                premier&nbsp;: tout petit d&apos;<em>Homo sapiens</em> est, par espèce, un
                humain. Mais la philosophie a toujours soupçonné que ce constat ne
                suffit pas. Le petit humain est l&apos;animal le plus inachevé&nbsp;: incapable
                de marcher, de se nourrir, de parler à la naissance. Pour devenir
                humain, il a besoin d&apos;un long détour&nbsp;: l&apos;éducation, la culture, la
                transmission.
              </p>
              <p>
                Cette intuition donne sa force à l&apos;idée d&apos;humanité comme <em>seconde
                naissance</em>. Sans elle, le programme génétique ne s&apos;achève pas en
                personne humaine. Mais qui éduque, comment, à quelles fins&nbsp;? Et que
                fait-on quand on transmet&nbsp;: répéter le passé, ou ouvrir l&apos;avenir&nbsp;?
              </p>
              <div className="bg-pr-gray-bg rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">Tension à retenir</h3>
                <p>
                  L&apos;humanité est-elle un <em>don de naissance</em> qu&apos;il suffit de
                  laisser éclore, ou le <em>fruit d&apos;une transmission</em> sans laquelle
                  rien d&apos;humain n&apos;advient&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Rousseau — apprendre à vivre">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                <em>Émile, ou De l&apos;éducation</em> (1762) est l&apos;un des livres
                fondateurs de la pédagogie moderne. Rousseau s&apos;y propose de suivre, de
                la naissance à l&apos;âge adulte, l&apos;éducation d&apos;un enfant imaginaire,
                Émile.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-black">
                «&nbsp;Tout est bien, sortant des mains de l&apos;Auteur des choses&nbsp;: tout
                dégénère entre les mains de l&apos;homme.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Trois maîtres</strong>. La nature développe le corps, les choses enseignent l&apos;expérience, les hommes transmettent les habitudes. Une éducation réussie articule ces trois sources sans les laisser se contredire.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Éducation négative</strong>. Avant douze ans, ne rien forcer, ne rien moraliser. Laisser l&apos;enfant rencontrer le monde, faire ses propres erreurs, apprendre par les conséquences. La précipitation pédagogique est la pire ennemie.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Apprendre à vivre</strong>. La fin n&apos;est ni le savoir, ni la carrière, ni la vertu pour la vertu. «&nbsp;Vivre est le métier que je veux lui apprendre.&nbsp;» Faire un humain avant de faire un citoyen ou un savant.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Rousseau invente l&apos;enfance
                moderne comme âge propre, qui n&apos;est ni un adulte miniature ni un être
                à dresser. L&apos;éducation respectueuse est aussi formatrice que
                l&apos;éducation directive — sinon plus.
              </p>
              <p>
                <strong>Limite.</strong> L&apos;Émile rousseauiste est un garçon. Sophie,
                son pendant féminin, reçoit une éducation soumise. Wollstonecraft, dans
                la <em>Défense des droits de la femme</em> (1792), portera la première
                grande critique.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Kant — l'homme ne devient homme que par l'éducation">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Les <em>Réflexions sur l&apos;éducation</em> (publication posthume 1803, à
                partir de cours donnés à Königsberg) condensent la pensée pédagogique
                d&apos;Emmanuel Kant. La formule centrale est limpide.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-black">
                «&nbsp;L&apos;homme est la seule créature qui doive être éduquée. (…) L&apos;homme
                ne peut devenir homme que par l&apos;éducation. Il n&apos;est rien que ce que
                l&apos;éducation fait de lui.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Discipline</strong>. D&apos;abord, contenir l&apos;animalité. L&apos;enfant doit apprendre à différer son désir, sans quoi aucune liberté n&apos;est possible.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Culture</strong>. Ensuite, développer les capacités&nbsp;: raison, langage, savoir-faire. La culture ouvre le champ des possibles.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Civilisation</strong>. Apprendre les usages, savoir vivre avec les autres en société.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Moralisation</strong>. Le sommet&nbsp;: choisir des fins bonnes, pas seulement les moyens efficaces. La moralité est ce que l&apos;éducation peut <em>orienter</em>, jamais imposer.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Pour Kant, l&apos;humanité n&apos;est
                pas un état, c&apos;est une tâche. Elle se déploie sur des générations, et
                chaque génération est responsable de transmettre un peu mieux à la
                suivante. L&apos;éducation est l&apos;un des piliers du progrès cosmopolitique.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Arendt — aimer le monde assez pour le transmettre">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Hannah Arendt, dans «&nbsp;La crise de l&apos;éducation&nbsp;»
                (<em>La Crise de la culture</em>, 1961), porte un regard inquiet sur
                l&apos;école moderne. Sa thèse&nbsp;: la pédagogie progressiste, en abandonnant
                l&apos;autorité, finit par abandonner les enfants au monde tel qu&apos;il est.
              </p>
              <p className="italic pl-4 border-l-2 border-pr-black">
                «&nbsp;L&apos;éducation est le point où se décide si nous aimons assez le
                monde pour en assumer la responsabilité, et de plus, le sauver de cette
                ruine qui serait inévitable sans ce renouvellement et sans cette arrivée
                de jeunes et de nouveaux venus.&nbsp;»
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span><strong>Conservatisme nécessaire</strong>. L&apos;éducation est, par nature, conservatrice — au sens où elle <em>conserve</em> un monde qu&apos;elle transmet. Cela n&apos;empêche pas la révolution&nbsp;: cela la rend possible. On ne change un monde qu&apos;on commence par recevoir.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Autorité</strong>. Sans elle, pas de transmission. L&apos;éducateur n&apos;est pas un tyran, mais quelqu&apos;un qui accepte de répondre du monde devant ceux qui n&apos;y sont pas encore arrivés.</li>
                <li><span className="text-pr-black mr-2">→</span><strong>Critique du pédagogisme</strong>. Refuser à l&apos;enfant la difficulté, la confrontation au passé, la rigueur de l&apos;apprentissage, c&apos;est le priver des outils qui lui permettront de juger un jour le monde — et de le changer.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Pour Arendt, transmettre un
                monde n&apos;est pas s&apos;y soumettre. C&apos;est l&apos;offrir aux nouveaux venus,
                pour qu&apos;ils en deviennent les héritiers libres. L&apos;humanité est cette
                chaîne de transmissions consentantes.
              </p>
              <p>
                <strong>Prolongement.</strong> Boris Cyrulnik, dans <em>Un merveilleux
                malheur</em> (1999), montre comment, même dans l&apos;abandon ou le trauma,
                un tuteur de relation suffit parfois pour rendre possible la résilience.
                L&apos;humain se construit par les liens.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-gray-bg rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-black mb-1">
                  L&apos;humanité comme seconde naissance
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;humain n&apos;est pas un donné biologique mais le produit d&apos;une
                  transmission)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité ne se reçoit pas avec la naissance. Elle se transmet.
                    Le petit d&apos;humain est l&apos;animal le plus inachevé&nbsp;: il faut le
                    faire humain. Cette intuition est au cœur de la pensée pédagogique
                    moderne. Rousseau, dans <em>Émile</em>, 1762, écrit&nbsp;: «&nbsp;Tout
                    est bien, sortant des mains de l&apos;Auteur des choses&nbsp;: tout
                    dégénère entre les mains de l&apos;homme.&nbsp;» Éduquer, ce n&apos;est pas
                    dresser, c&apos;est laisser advenir, dans le respect du temps de
                    l&apos;enfant. «&nbsp;Vivre est le métier que je veux lui apprendre.&nbsp;»
                  </p>
                  <p>
                    Kant, dans ses <em>Réflexions sur l&apos;éducation</em>, 1803, condense
                    cette idée dans une formule décisive&nbsp;: «&nbsp;L&apos;homme ne peut
                    devenir homme que par l&apos;éducation. Il n&apos;est rien que ce que
                    l&apos;éducation fait de lui.&nbsp;» Quatre étapes — discipline, culture,
                    civilisation, moralisation — conduisent le petit d&apos;humain de
                    l&apos;animalité à l&apos;humanité. L&apos;humanité, pour Kant, n&apos;est pas un
                    état acquis&nbsp;: c&apos;est une tâche transmise de génération en
                    génération.
                  </p>
                  <p>
                    Hannah Arendt, dans <em>La Crise de la culture</em>, 1961, ajoute la
                    dimension politique de cette transmission. «&nbsp;L&apos;éducation est le
                    point où se décide si nous aimons assez le monde pour en assumer la
                    responsabilité.&nbsp;» Transmettre, ce n&apos;est pas figer&nbsp;: c&apos;est
                    offrir un monde aux «&nbsp;nouveaux venus&nbsp;» pour qu&apos;ils puissent
                    un jour le juger, le critiquer, le changer. Une éducation qui
                    abandonne l&apos;autorité abandonne aussi l&apos;enfant à un monde dont il
                    ne pourra rien faire.
                  </p>
                  <p>
                    Ainsi, l&apos;humanité n&apos;est pas une essence donnée à la naissance.
                    Elle est le fruit fragile d&apos;une chaîne ininterrompue de
                    transmissions. À chaque génération, l&apos;humanité doit être refaite,
                    ré-aimée, ré-offerte. L&apos;interrompre, c&apos;est briser ce qui fait,
                    précisément, qu&apos;il y a une humanité.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;éducation</strong>&nbsp;» — sujet frontal classique.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>Naît-on humain ou le devient-on&nbsp;?</strong>&nbsp;» — Kant central.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La transmission</strong>&nbsp;» — Arendt, sujet éminemment contemporain.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;enfance</strong>&nbsp;» — Rousseau et l&apos;invention de l&apos;âge propre.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>L&apos;autorité</strong>&nbsp;» — Arendt comme condition de la liberté.</li>
                <li><span className="text-pr-black mr-2">→</span>«&nbsp;<strong>La culture est-elle ce qui fait l&apos;humanité&nbsp;?</strong>&nbsp;» — articulation des trois auteurs.</li>
              </ul>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/articles">
              <Button className="bg-pr-black hover:bg-pr-black-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevenirHumainEducationPage;
