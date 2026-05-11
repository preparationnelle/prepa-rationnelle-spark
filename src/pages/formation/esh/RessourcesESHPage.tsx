import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Home, ChevronRight } from 'lucide-react';

const RessourcesESHPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">
              ESH ECG
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Ressources</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        {/* Header */}
        <Link
          to="/formation/esh"
          className="inline-flex items-center gap-2 mb-8 font-instrument text-[13px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à la formation ESH
        </Link>

        <header className="max-w-[820px] mb-12">
          <div className="carnet-eyebrow mb-6">ESH · Ressources</div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-carnet-ink tracking-tight">
              Ressources <em className="font-lora italic text-carnet-red">ESH</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
            Ressources complémentaires pour réussir l'épreuve d'<span className="carnet-hl font-lora italic">économie et sciences humaines</span>.
          </p>
        </header>

        {/* Sujets tombés au concours */}
        <div className="rounded-2xl border border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 p-8 sm:p-10 shadow-[0_1px_2px_rgba(78,55,30,0.04)]">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
              <h2 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink leading-tight">
                Les sujets tombés au concours en ESH
              </h2>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                Analyse des sujets d'épreuves ESH des années précédentes pour identifier les thèmes récurrents et les tendances.
              </p>
            </div>
          </div>

            {/* ESSEC */}
            <div className="mb-8">
              <h3 className="font-lora italic text-[22px] text-carnet-ink-soft mb-5 pb-3 border-b border-dashed border-[rgba(193,68,58,0.3)]">
                ESSEC (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2025 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les fractures sociales affectent-elles la réalisation des équilibres économiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2024 :</span>
                    <span className="text-carnet-ink-soft ml-2">Pourquoi et comment évaluer les politiques publiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2023 :</span>
                    <span className="text-carnet-ink-soft ml-2">La décroissance peut-elle être compatible avec l'État-providence ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2022 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2021 :</span>
                    <span className="text-carnet-ink-soft ml-2">La désindustrialisation : une fatalité ? La réindustrialisation : une utopie ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2020 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le modèle social français est-il à bout de souffle ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2019 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les prélèvements obligatoires nuisent-ils à la croissance et à la compétitivité ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2018 :</span>
                    <span className="text-carnet-ink-soft ml-2">La mondialisation est-elle irréversible ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2017 :</span>
                    <span className="text-carnet-ink-soft ml-2">"Gagnant en extension, l'Europe perd en intensité." Que pensez-vous de cette affirmation de François Perroux ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2016 :</span>
                    <span className="text-carnet-ink-soft ml-2">La guerre des monnaies.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2015 :</span>
                    <span className="text-carnet-ink-soft ml-2">Croissance et inégalités.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2014 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le protectionnisme a-t-il de l'avenir dans une économie de plus en plus internationalisée ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2013 :</span>
                    <span className="text-carnet-ink-soft ml-2">La France face aux mondialisations.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2012 :</span>
                    <span className="text-carnet-ink-soft ml-2">"L'Europe sera monétaire ou ne sera pas". Qu'en pensez-vous ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2011 :</span>
                    <span className="text-carnet-ink-soft ml-2">Faut-il combattre les monopoles ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2010 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le Libre-échange est-il facteur de croissance ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2009 :</span>
                    <span className="text-carnet-ink-soft ml-2">Progrès technique et emploi.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2008 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'État-Nation est-il en crise ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2007 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'évolution de l'organisation du travail et ses liens avec la croissance économique.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2006 :</span>
                    <span className="text-carnet-ink-soft ml-2">Intérêt et limites de l'intervention de l'État.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2005 :</span>
                    <span className="text-carnet-ink-soft ml-2">Unité et diversité du capitalisme.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2004 :</span>
                    <span className="text-carnet-ink-soft ml-2">La croissance des pays en développement nuit-elle à la prospérité des pays industrialisés ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2003 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les conséquences économiques des guerres (vous examinerez cette question en faisant appel à la théorie économique et en faisant référence aux événements historiques depuis 1900).</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2002 :</span>
                    <span className="text-carnet-ink-soft ml-2">Analysez l'évolution du système monétaire international des accords de Bretton-Woods au flottement des monnaies.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2001 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le GATT et la montée des protectionnismes.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2000 :</span>
                    <span className="text-carnet-ink-soft ml-2">Dans quelle mesure la hausse progressive du taux de chômage observée après 1970 résulte-t-elle d'une hausse du taux de chômage d'équilibre ou de la lenteur et de la complexité des dynamiques d'ajustement enclenchées par une succession de chocs négatifs ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCP */}
            <div className="mb-8">
              <h3 className="font-lora italic text-[22px] text-carnet-ink-soft mb-5 pb-3 border-b border-dashed border-[rgba(193,68,58,0.3)]">
                ESCP (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2025 :</span>
                    <span className="text-carnet-ink-soft ml-2">Comment la théorie économique appréhende-t-elle l'entreprise ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2024 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'ouverture au commerce international appartient-elle au passé ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2023 :</span>
                    <span className="text-carnet-ink-soft ml-2">"Le premier objectif de la banque centrale est d'assurer la stabilité des prix" - Traité sur le fonctionnement de l'Union européenne</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2022 :</span>
                    <span className="text-carnet-ink-soft ml-2">Comment les révolutions technologiques influent-elles sur la croissance économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2021 :</span>
                    <span className="text-carnet-ink-soft ml-2">Un monde sans inflation</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2020 :</span>
                    <span className="text-carnet-ink-soft ml-2">Faut-il craindre le retour de la concentration industrielle ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2019 :</span>
                    <span className="text-carnet-ink-soft ml-2">Dans quelle mesure la contrainte environnementale peut-elle modifier les conditions de la croissance ? Vous illustrerez votre propos par des exemples historiques empruntés au programme</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2018 :</span>
                    <span className="text-carnet-ink-soft ml-2">Doit-on considérer que la désindustrialisation est un processus inéluctable dans un pays développé ? Vous illustrerez votre propos par des exemples historiques empruntés au programme</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2017 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le bon fonctionnement d'un marché justifie-t-il l'intervention de l'État ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2016 :</span>
                    <span className="text-carnet-ink-soft ml-2">La mondialisation peut-elle expliquer les mauvaises performances économiques et sociales des pays ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2015 :</span>
                    <span className="text-carnet-ink-soft ml-2">Peut-on considérer que la concurrence constitue le véritable moteur de la croissance économique ? Vous illustrerez votre propos à partir des mécanismes économiques et de l'histoire des faits économiques du monde contemporain.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2014 :</span>
                    <span className="text-carnet-ink-soft ml-2">Existe-t-il une fiscalité optimale pour assurer la croissance économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2013 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le taux de change est-il encore aujourd'hui un bon facteur de compétitivité ?</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2012 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'inflation est-elle la meilleure des solutions pour résoudre les crises de la dette publique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2011 :</span>
                    <span className="text-carnet-ink-soft ml-2">La mondialisation explique-t-elle principalement le rattrapage des pays émergents ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2010 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les Unions Économiques Régionales ont-elles été et sont-elles encore le moyen de contourner le libre-échange ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2009 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les banques centrales ont-elles eu et ont-elles aujourd'hui une influence décisive sur l'activité économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2008 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'ouverture internationale a-t-elle modifié fondamentalement la nature des crises financières ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2007 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'inflation est-elle toujours et partout un frein à la croissance économique dans les pays développés ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2006 :</span>
                    <span className="text-carnet-ink-soft ml-2">La concentration industrielle est-elle toujours un obstacle à la concurrence ? (Vous appuierez vos assertions sur des exemples tirés de l'histoire économique depuis 1850)</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2005 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les phénomènes de pauvreté peuvent-ils s'expliquer par le développement du libre-échange ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2004 :</span>
                    <span className="text-carnet-ink-soft ml-2">Ouverture commerciale à l'international et croissance économique.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2003 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les rythmes de l'innovation expliquent-ils fondamentalement les rythmes de l'économie ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2002 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les changements démographiques conditionnent-ils le changement social ? (Vous appuierez principalement vos assertions sur des exemples tirés de l'histoire économique et sociale de la France depuis 1945)</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2001 :</span>
                    <span className="text-carnet-ink-soft ml-2">Pour favoriser le développement, faut-il plus ou moins d'État ? (prendre l'exemple des PED depuis 1945)</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2000 :</span>
                    <span className="text-carnet-ink-soft ml-2">La protection sociale nuit-elle à la compétitivité des nations ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ECRICOME */}
            <div className="mb-8">
              <h3 className="font-lora italic text-[22px] text-carnet-ink-soft mb-5 pb-3 border-b border-dashed border-[rgba(193,68,58,0.3)]">
                ECRICOME (2000-2025)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2025 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">"Le pouvoir d'achat, instrument ou objectif ?"</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2025 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">"Quelles sont les limites de la responsabilité des entreprises"</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2024 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">"La consommation, moteur principal de la croissance depuis le 19e siècle"</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2024 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">"Faut il lutter contre les délocalisations ?"</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2023 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Dans une large perspective historique, quel est le rôle des banques centrales dans les économies développés ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2023 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Qu'est-ce qu'un bon SMI ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2022 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le libre-échange est-il "une théorie sans réalité et le protectionnisme, une réalité sans théorie" ? (citation de Paul Bairoch)</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2022 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Inégalités et croissance</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2021 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">La division Internationale des Processus Productifs fragilise-elle les économies nationales ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2021 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Les assurances chômage ont-elles de l'influence sur le niveau du chômage</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2020 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Les politiques économiques peuvent-elles éviter les crises économiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2020 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Peut-on réguler le commerce international ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2019 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Qu'est-ce qui a fait et qui fait du dollar une monnaie internationale ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2019 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Protection sociale et croissance économique depuis le XIXe siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2018 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">L'industrialisation est-elle la clé du développement économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2018 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">A la lumière de l'histoire, un pays doit-il toujours lutter contre son déficit de la balance des paiements des opérations courantes ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2017 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Un Etat doit-il s'inquiéter de l'augmentation de sa dette publique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2017 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Faut-il lutter contre les inégalités économiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2016 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Qu'est-ce qu'une bonne gouvernance d'entreprise ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2016 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Depuis les années 1980, la mondialisation est-elle responsable du chômage dans les pays avancés ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2015 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">L'euro : d'où vient-il ? Où mène-t-il ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2015 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">La globalisation financière a-t-elle amélioré l'allocation du capital depuis les années 1980 ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2014 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">A la lumière de l'histoire et de l'analyse économiques, vous vous demanderez s'il est possible d'évaluer l'efficacité des dépenses publiques.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2014 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Depuis le XIXe, la réussite des pays émergents s'explique-t-elle principalement par leurs dotations factorielles ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2013 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Depuis le début du XXème siècle, qu'est-ce qu'un bon taux de change ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2013 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Faut-il souhaiter, ainsi que le soutenait J.-M. KEYNES, l'"euthanasie des rentiers" ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2012 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Peut-on toujours parler de classes moyennes ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2012 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le progrès technique peut-il être orienté et conduit par la puissance publique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2011 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le chômage est-il dû à la mise en œuvre de politiques inappropriées ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2011 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Les nations ont-elles intérêt à faire appel aux investisseurs étrangers ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2010 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Qu'est-ce qu'une répartition équitable des fruits de la croissance ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2010 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Commerce international et crises économiques : les enseignements de l'histoire.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2009 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Depuis 1945, dans quelle mesure l'endettement des agents économiques a-t-il été facteur de croissance dans les PDEM ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2009 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le progrès économique a-t-il fait reculer l'insécurité sociale depuis la fin du 19eme siècle dans les pays capitalistes ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2008 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Quel rôle les institutions doivent-elles jouer dans le développement économique des pays ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2008 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Concurrence monétaire et compétitivité des nations.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2007 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">La dotation en facteurs explique-t-elle l'évolution de la spécialisation internationale des nations ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2007 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Les prélèvements obligatoires représentent-ils un frein à la croissance économique dans les PDEM ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2006 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">A quels changements les grandes entreprises capitalistes ont-elles du procéder pour se développer dans l'économie mondiale ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2006 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">L'internationalisation financière a-t-elle accru les inégalités de développement ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2005 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Système de change et croissance économique au XXème siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2005 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">La déréglementation des marchés du travail a-t-elle des effets sur l'emploi ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2004 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Préserver la concurrence : un facteur de régulation essentiel du capitalisme ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2004 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le libre-échange tel qu'il est conçu par l'Accord général sur les tarifs et le commerce (GATT) est-il un facteur de croissance économique depuis 1947 ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2003 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le financement des économies émergentes depuis le début du XIXè siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2003 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le modèle social européen est-il compatible avec la mondialisation ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2002 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Les déséquilibres démographiques mondiaux et leurs conséquences sur le développement.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2002 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">A la lumière de l'expérience historique, vous vous demanderez si l'équilibre budgétaire est un objectif de politique économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2001 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">L'euro : étape ou aboutissement ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2001 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Mobilité sociale et croissance économique en France depuis 1945</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2000 (1) :</span>
                    <span className="text-carnet-ink-soft ml-2">Le recherche de la grande dimension est-elle inéluctable pour l'entreprise dans le système capitaliste ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2000 (2) :</span>
                    <span className="text-carnet-ink-soft ml-2">Existe-t-il une spécificité économique et sociale française depuis le début de l'industrialisation ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HEC */}
            <div className="mb-4">
              <h3 className="font-lora italic text-[22px] text-carnet-ink-soft mb-5 pb-3 border-b border-dashed border-[rgba(193,68,58,0.3)]">
                HEC (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2025 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les fractures sociales affectent-elles la réalisation des équilibres économiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2024 :</span>
                    <span className="text-carnet-ink-soft ml-2">Pourquoi et comment évaluer les politiques publiques ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2023 :</span>
                    <span className="text-carnet-ink-soft ml-2">La décroissance peut-elle être compatible avec l'État-providence ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2022 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2021 :</span>
                    <span className="text-carnet-ink-soft ml-2">Toute destruction est-elle créatrice ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2020 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le capitalisme est-il soutenable ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2019 :</span>
                    <span className="text-carnet-ink-soft ml-2">Performances économiques et justice sociale.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2018 :</span>
                    <span className="text-carnet-ink-soft ml-2">En vous plaçant dans une perspective historique (depuis le XIXᵉ siècle), pouvez-vous affirmer comme Paul M. Romer en 1986 que « Les taux de croissance semblent être croissants non seulement en fonction du temps mais aussi en fonction du degré de développement » ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2017 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'entreprise (depuis le XIXᵉ siècle) peut-elle se passer de l'entrepreneur ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2016 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les États ont-ils encore à arbitrer entre le chômage et l'inflation ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2015 :</span>
                    <span className="text-carnet-ink-soft ml-2">Institutions et développement depuis le début du XIXᵉ siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2014 :</span>
                    <span className="text-carnet-ink-soft ml-2">Équité et libre-échange depuis le début du XIXᵉ siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2013 :</span>
                    <span className="text-carnet-ink-soft ml-2">Administrations publiques et compétitivité depuis le début du XIXᵉ siècle.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2012 :</span>
                    <span className="text-carnet-ink-soft ml-2">La crédibilité des accords monétaires.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2011 :</span>
                    <span className="text-carnet-ink-soft ml-2">Sorties de crise.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2010 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le rôle de l'or dans l'économie mondiale depuis le XIXᵉ siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2009 :</span>
                    <span className="text-carnet-ink-soft ml-2">Peut-on parler d'un apprentissage des politiques économiques de la part des gouvernements depuis le début du XXᵉ siècle ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2008 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les ressources naturelles : obstacle ou moteur pour la croissance économique ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2007 :</span>
                    <span className="text-carnet-ink-soft ml-2">La lutte contre la pauvreté depuis le début du XIXᵉ siècle dans les pays développés.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2006 :</span>
                    <span className="text-carnet-ink-soft ml-2">L'efficacité des modes de financement des économies avancées.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2005 :</span>
                    <span className="text-carnet-ink-soft ml-2">Causes et conséquences de la tertiarisation des économies avancées.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2004 :</span>
                    <span className="text-carnet-ink-soft ml-2">La mondialisation économique est-elle irréversible ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2003 :</span>
                    <span className="text-carnet-ink-soft ml-2">En quoi les crises économiques et financières majeures marquent-elles une étape dans le développement économique et social ?</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2002 :</span>
                    <span className="text-carnet-ink-soft ml-2">Les rôles respectifs de l'État et du marché dans la répartition et la redistribution des revenus depuis la fin du XIXᵉ siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2001 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le rôle de la concentration des entreprises dans le développement depuis le milieu du XIXᵉ siècle.</span>
                  </div>
                  <div className="font-instrument text-[13px] leading-[1.55]">
                    <span className="font-semibold text-carnet-red">2000 :</span>
                    <span className="text-carnet-ink-soft ml-2">Le rôle de la concentration des entreprises dans le développement depuis le milieu du XIXᵉ siècle.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default RessourcesESHPage;
