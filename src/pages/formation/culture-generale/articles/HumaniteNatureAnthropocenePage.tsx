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
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black flex items-baseline gap-3">
        <span className="font-dm-serif text-pr-orange text-3xl leading-none">{number}</span>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

const HumaniteNatureAnthropocenePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Article
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              L&apos;humanité face à la nature&nbsp;: l&apos;anthropocène et la fin du grand partage
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Jonas, Descola, Latour. Trois manières de défaire le grand partage moderne
              entre l&apos;humain et la nature.
            </p>
          </div>

          <PRCard number="01" title="Le problème">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                L&apos;humanité moderne s&apos;est définie <em>contre</em> la nature. Descartes&nbsp;:
                il faut nous rendre «&nbsp;comme maîtres et possesseurs de la nature&nbsp;»
                (<em>Discours de la méthode</em>, 1637). Le sujet pensant d&apos;un côté,
                l&apos;objet inerte de l&apos;autre. La science, la technique, l&apos;industrie ont
                construit leur succès sur ce partage.
              </p>
              <p>
                L&apos;anthropocène brise cette architecture. Le terme, popularisé par Paul
                Crutzen en 2000, désigne une époque géologique où l&apos;humanité est devenue
                une force comparable aux grandes forces telluriques. Climat, espèces,
                océans, atmosphère&nbsp;: la planète porte désormais notre signature. La
                nature n&apos;est plus un décor. Elle riposte.
              </p>
              <div className="bg-pr-orange-pale rounded-xl p-4">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">Tension à retenir</h3>
                <p>
                  L&apos;humanité est-elle <em>face à</em> la nature comme à un objet, ou
                  est-elle <em>dans</em> la nature comme une espèce parmi d&apos;autres&nbsp;?
                  Le grand partage moderne est-il encore tenable&nbsp;?
                </p>
              </div>
            </div>
          </PRCard>

          <PRCard number="02" title="Jonas — une éthique pour les générations futures">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Hans Jonas publie <em>Le Principe responsabilité</em>
                (<em>Das Prinzip Verantwortung</em>, 1979) à un moment décisif&nbsp;: la
                puissance technique moderne dépasse l&apos;échelle de toute éthique
                traditionnelle.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Inadéquation des éthiques classiques</strong>. Aristote et Kant pensaient l&apos;action morale entre contemporains. La technique moderne agit sur des siècles, sur des écosystèmes, sur des humains à venir.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Nouvelle responsabilité</strong>. Le pouvoir crée le devoir. Si nous pouvons détruire les conditions de la vie humaine sur Terre, nous sommes responsables de la protéger pour ceux qui ne sont pas encore nés.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Heuristique de la peur</strong>. Pour penser les conséquences à long terme, il faut donner plus de poids aux scénarios catastrophiques qu&apos;aux scénarios optimistes. Le pire est plus instructif que le meilleur.</li>
              </ul>
              <p className="italic pl-4 border-l-2 border-pr-orange">
                «&nbsp;Agis de telle sorte que les effets de ton action soient compatibles
                avec la permanence d&apos;une vie authentiquement humaine sur terre.&nbsp;»
              </p>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Jonas reformule l&apos;impératif
                kantien à l&apos;échelle planétaire. La responsabilité n&apos;est plus seulement
                envers autrui&nbsp;: elle s&apos;étend aux générations futures et à la biosphère.
              </p>
              <p>
                <strong>Limite.</strong> Critiqué pour son conservatisme (Jonas
                privilégie la prudence sur l&apos;innovation), il reste l&apos;une des sources
                majeures du principe de précaution.
              </p>
            </div>
          </PRCard>

          <PRCard number="03" title="Descola — il n'y a pas de Nature">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Dans <em>Par-delà nature et culture</em> (2005), l&apos;anthropologue Philippe
                Descola attaque la racine du problème. Le partage nature/culture n&apos;est
                pas universel&nbsp;: il est l&apos;invention propre à la modernité occidentale.
              </p>
              <p>
                À partir de ses enquêtes chez les Achuar d&apos;Amazonie, Descola montre que
                d&apos;autres sociétés organisent le monde tout autrement.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Animisme</strong>. Mêmes intériorités (esprits, intentions), corps différents. Plantes et animaux ont une «&nbsp;personne&nbsp;» comme l&apos;humain.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Totémisme</strong>. Mêmes intériorités et mêmes corps&nbsp;: humains et certains non-humains sont parents.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Analogisme</strong>. Tous les êtres sont singuliers, reliés par des correspondances (Chine ancienne, Renaissance européenne).</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Naturalisme</strong>. La nôtre. Mêmes corps physiques, mais l&apos;intériorité (raison, conscience) est réservée à l&apos;humain.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Le naturalisme moderne est une
                <em> ontologie parmi d&apos;autres</em>, non une vérité éternelle. Le grand
                partage humain/non-humain est récent (XVII<sup>e</sup> siècle) et
                provincial. La crise écologique est aussi une crise de notre ontologie.
              </p>
              <p>
                <strong>Conséquence.</strong> Penser autrement la nature, c&apos;est apprendre
                des cosmologies non occidentales — non pour les imiter, mais pour
                provincialiser la nôtre.
              </p>
            </div>
          </PRCard>

          <PRCard number="04" title="Latour — atterrir sur Terre">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Bruno Latour, dans <em>Face à Gaïa</em> (2015) et <em>Où atterrir&nbsp;?</em>
                (2017), prolonge Descola dans une direction politique. La modernité
                touche à sa fin. L&apos;humanité doit «&nbsp;atterrir&nbsp;» — apprendre à
                nouveau ce que c&apos;est qu&apos;habiter la Terre.
              </p>
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span><strong>Gaïa</strong>. Reprenant l&apos;hypothèse de James Lovelock, Latour parle de Gaïa non comme d&apos;une mère nourricière, mais comme d&apos;un système qui réagit. Le climat n&apos;est pas un décor&nbsp;: il agit, il punit, il négocie.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Le sol se dérobe</strong>. La géopolitique moderne supposait un globe neutre. L&apos;anthropocène fait découvrir que le sol lui-même change. Il n&apos;y a plus de territoire à conquérir, mais une planète à habiter.</li>
                <li><span className="text-pr-orange mr-2">→</span><strong>Nouveau régime climatique</strong>. Notre époque inaugure un rapport politique inédit&nbsp;: la lutte de classes redevient une lutte pour les conditions matérielles d&apos;existence — air, eau, sol, espèces.</li>
              </ul>
              <p>
                <strong>Ce qu&apos;il faut retenir.</strong> Latour articule diagnostic
                ontologique (Descola) et urgence politique. L&apos;humanité ne peut plus se
                penser comme «&nbsp;sortie&nbsp;» de la nature&nbsp;: elle doit s&apos;y réinscrire,
                reconnaître ses dépendances, négocier avec les puissances de la
                biosphère.
              </p>
              <p>
                <strong>Boussole.</strong> Le rapport du GIEC (depuis 1990) et l&apos;accord
                de Paris (2015) sont les premières tentatives institutionnelles de
                penser cette nouvelle condition. Insuffisantes — mais elles existent.
              </p>
            </div>
          </PRCard>

          <PRCard number="05" title="Paraperso prêt à l'emploi">
            <div className="space-y-4 text-sm md:text-base">
              <div className="bg-pr-orange-pale rounded-xl p-5">
                <h3 className="font-dm-serif text-base text-pr-orange-dark mb-1">
                  L&apos;humanité réinscrite dans la Terre
                </h3>
                <p className="text-xs italic mb-3">
                  (l&apos;anthropocène comme sortie du grand partage moderne nature/culture)
                </p>
                <div className="space-y-3">
                  <p>
                    L&apos;humanité moderne s&apos;était construite contre la nature. Descartes
                    en faisait un domaine d&apos;objets dont il fallait devenir «&nbsp;maître
                    et possesseur&nbsp;». L&apos;anthropocène — terme popularisé par Paul
                    Crutzen en 2000 — brise ce partage. L&apos;humanité est devenue une
                    force géologique. Elle imprime sa signature dans les sédiments, les
                    glaces, le climat. Le décor riposte.
                  </p>
                  <p>
                    Hans Jonas, dans <em>Le Principe responsabilité</em>, 1979, fut
                    parmi les premiers à tirer les conséquences morales de cette
                    bascule. Si nous pouvons détruire les conditions de la vie humaine
                    sur Terre, nous sommes responsables de les protéger. Son impératif&nbsp;:
                    «&nbsp;Agis de telle sorte que les effets de ton action soient
                    compatibles avec la permanence d&apos;une vie authentiquement humaine
                    sur terre.&nbsp;» La responsabilité s&apos;étend aux générations futures
                    et à la biosphère.
                  </p>
                  <p>
                    Cette urgence éthique exige de revoir nos cadres de pensée. Philippe
                    Descola, dans <em>Par-delà nature et culture</em>, 2005, montre que
                    le partage nature/culture n&apos;est pas universel&nbsp;: il est
                    l&apos;ontologie particulière du naturalisme moderne. D&apos;autres
                    sociétés — animistes, totémistes, analogistes — habitent un monde
                    où les frontières humain/non-humain se distribuent autrement. La
                    crise écologique est aussi une crise de notre cosmologie.
                  </p>
                  <p>
                    Bruno Latour, dans <em>Face à Gaïa</em>, 2015, donne à cette
                    intuition une portée politique. L&apos;humanité doit «&nbsp;atterrir&nbsp;»&nbsp;:
                    apprendre à nouveau ce que c&apos;est qu&apos;habiter la Terre, négocier
                    avec un sol qui se dérobe et un climat qui agit. L&apos;humanité ne se
                    définit plus par sa sortie de la nature, mais par sa capacité à
                    s&apos;y réinscrire avec lucidité.
                  </p>
                </div>
              </div>
            </div>
          </PRCard>

          <PRCard number="06" title="Où mobiliser ces références ?">
            <div className="space-y-4 text-sm md:text-base">
              <ul className="space-y-1.5">
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité et la nature</strong>&nbsp;» — sujet frontal.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Sommes-nous responsables de l&apos;avenir&nbsp;?</strong>&nbsp;» — Jonas central.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humain est-il maître de la nature&nbsp;?</strong>&nbsp;» — Descartes vs anthropocène.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Le progrès technique a-t-il des limites&nbsp;?</strong>&nbsp;» — Jonas sur la précaution.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>Y a-t-il une nature&nbsp;?</strong>&nbsp;» — Descola comme déconstruction.</li>
                <li><span className="text-pr-orange mr-2">→</span>«&nbsp;<strong>L&apos;humanité au péril d&apos;elle-même</strong>&nbsp;» — anthropocène comme catastrophe et chance.</li>
              </ul>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/articles">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumaniteNatureAnthropocenePage;
