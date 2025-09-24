import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from 'lucide-react';

const RessourcesESHPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/esh" className="hover:text-foreground transition-colors">
              Formation ESH
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Ressources ESH</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/esh">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation ESH
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ressources ESH
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Ressources complémentaires pour réussir l'épreuve d'économie et sciences humaines
            </p>
          </div>
        </div>

        {/* Premier encadré - Sujets tombés au concours */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                Les sujets tombés au concours en ESH
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              Analyse des sujets d'épreuves ESH des années précédentes pour identifier les thèmes récurrents et les tendances.
            </p>

            {/* ESSEC */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                ESSEC (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 :</span>
                    <span className="text-gray-700 ml-2">Les fractures sociales affectent-elles la réalisation des équilibres économiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 :</span>
                    <span className="text-gray-700 ml-2">Pourquoi et comment évaluer les politiques publiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 :</span>
                    <span className="text-gray-700 ml-2">La décroissance peut-elle être compatible avec l'État-providence ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 :</span>
                    <span className="text-gray-700 ml-2">L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 :</span>
                    <span className="text-gray-700 ml-2">La désindustrialisation : une fatalité ? La réindustrialisation : une utopie ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 :</span>
                    <span className="text-gray-700 ml-2">Le modèle social français est-il à bout de souffle ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 :</span>
                    <span className="text-gray-700 ml-2">Les prélèvements obligatoires nuisent-ils à la croissance et à la compétitivité ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 :</span>
                    <span className="text-gray-700 ml-2">La mondialisation est-elle irréversible ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 :</span>
                    <span className="text-gray-700 ml-2">"Gagnant en extension, l'Europe perd en intensité." Que pensez-vous de cette affirmation de François Perroux ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 :</span>
                    <span className="text-gray-700 ml-2">La guerre des monnaies.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 :</span>
                    <span className="text-gray-700 ml-2">Croissance et inégalités.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 :</span>
                    <span className="text-gray-700 ml-2">Le protectionnisme a-t-il de l'avenir dans une économie de plus en plus internationalisée ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 :</span>
                    <span className="text-gray-700 ml-2">La France face aux mondialisations.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 :</span>
                    <span className="text-gray-700 ml-2">"L'Europe sera monétaire ou ne sera pas". Qu'en pensez-vous ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 :</span>
                    <span className="text-gray-700 ml-2">Faut-il combattre les monopoles ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 :</span>
                    <span className="text-gray-700 ml-2">Le Libre-échange est-il facteur de croissance ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 :</span>
                    <span className="text-gray-700 ml-2">Progrès technique et emploi.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 :</span>
                    <span className="text-gray-700 ml-2">L'État-Nation est-il en crise ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 :</span>
                    <span className="text-gray-700 ml-2">L'évolution de l'organisation du travail et ses liens avec la croissance économique.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 :</span>
                    <span className="text-gray-700 ml-2">Intérêt et limites de l'intervention de l'État.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 :</span>
                    <span className="text-gray-700 ml-2">Unité et diversité du capitalisme.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 :</span>
                    <span className="text-gray-700 ml-2">La croissance des pays en développement nuit-elle à la prospérité des pays industrialisés ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 :</span>
                    <span className="text-gray-700 ml-2">Les conséquences économiques des guerres (vous examinerez cette question en faisant appel à la théorie économique et en faisant référence aux événements historiques depuis 1900).</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 :</span>
                    <span className="text-gray-700 ml-2">Analysez l'évolution du système monétaire international des accords de Bretton-Woods au flottement des monnaies.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 :</span>
                    <span className="text-gray-700 ml-2">Le GATT et la montée des protectionnismes.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 :</span>
                    <span className="text-gray-700 ml-2">Dans quelle mesure la hausse progressive du taux de chômage observée après 1970 résulte-t-elle d'une hausse du taux de chômage d'équilibre ou de la lenteur et de la complexité des dynamiques d'ajustement enclenchées par une succession de chocs négatifs ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESCP */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                ESCP (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 :</span>
                    <span className="text-gray-700 ml-2">Comment la théorie économique appréhende-t-elle l'entreprise ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 :</span>
                    <span className="text-gray-700 ml-2">L'ouverture au commerce international appartient-elle au passé ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 :</span>
                    <span className="text-gray-700 ml-2">"Le premier objectif de la banque centrale est d'assurer la stabilité des prix" - Traité sur le fonctionnement de l'Union européenne</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 :</span>
                    <span className="text-gray-700 ml-2">Comment les révolutions technologiques influent-elles sur la croissance économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 :</span>
                    <span className="text-gray-700 ml-2">Un monde sans inflation</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 :</span>
                    <span className="text-gray-700 ml-2">Faut-il craindre le retour de la concentration industrielle ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 :</span>
                    <span className="text-gray-700 ml-2">Dans quelle mesure la contrainte environnementale peut-elle modifier les conditions de la croissance ? Vous illustrerez votre propos par des exemples historiques empruntés au programme</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 :</span>
                    <span className="text-gray-700 ml-2">Doit-on considérer que la désindustrialisation est un processus inéluctable dans un pays développé ? Vous illustrerez votre propos par des exemples historiques empruntés au programme</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 :</span>
                    <span className="text-gray-700 ml-2">Le bon fonctionnement d'un marché justifie-t-il l'intervention de l'État ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 :</span>
                    <span className="text-gray-700 ml-2">La mondialisation peut-elle expliquer les mauvaises performances économiques et sociales des pays ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 :</span>
                    <span className="text-gray-700 ml-2">Peut-on considérer que la concurrence constitue le véritable moteur de la croissance économique ? Vous illustrerez votre propos à partir des mécanismes économiques et de l'histoire des faits économiques du monde contemporain.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 :</span>
                    <span className="text-gray-700 ml-2">Existe-t-il une fiscalité optimale pour assurer la croissance économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 :</span>
                    <span className="text-gray-700 ml-2">Le taux de change est-il encore aujourd'hui un bon facteur de compétitivité ?</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 :</span>
                    <span className="text-gray-700 ml-2">L'inflation est-elle la meilleure des solutions pour résoudre les crises de la dette publique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 :</span>
                    <span className="text-gray-700 ml-2">La mondialisation explique-t-elle principalement le rattrapage des pays émergents ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 :</span>
                    <span className="text-gray-700 ml-2">Les Unions Économiques Régionales ont-elles été et sont-elles encore le moyen de contourner le libre-échange ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 :</span>
                    <span className="text-gray-700 ml-2">Les banques centrales ont-elles eu et ont-elles aujourd'hui une influence décisive sur l'activité économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 :</span>
                    <span className="text-gray-700 ml-2">L'ouverture internationale a-t-elle modifié fondamentalement la nature des crises financières ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 :</span>
                    <span className="text-gray-700 ml-2">L'inflation est-elle toujours et partout un frein à la croissance économique dans les pays développés ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 :</span>
                    <span className="text-gray-700 ml-2">La concentration industrielle est-elle toujours un obstacle à la concurrence ? (Vous appuierez vos assertions sur des exemples tirés de l'histoire économique depuis 1850)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 :</span>
                    <span className="text-gray-700 ml-2">Les phénomènes de pauvreté peuvent-ils s'expliquer par le développement du libre-échange ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 :</span>
                    <span className="text-gray-700 ml-2">Ouverture commerciale à l'international et croissance économique.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 :</span>
                    <span className="text-gray-700 ml-2">Les rythmes de l'innovation expliquent-ils fondamentalement les rythmes de l'économie ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 :</span>
                    <span className="text-gray-700 ml-2">Les changements démographiques conditionnent-ils le changement social ? (Vous appuierez principalement vos assertions sur des exemples tirés de l'histoire économique et sociale de la France depuis 1945)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 :</span>
                    <span className="text-gray-700 ml-2">Pour favoriser le développement, faut-il plus ou moins d'État ? (prendre l'exemple des PED depuis 1945)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 :</span>
                    <span className="text-gray-700 ml-2">La protection sociale nuit-elle à la compétitivité des nations ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ECRICOME */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                ECRICOME (2000-2025)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 (1) :</span>
                    <span className="text-gray-700 ml-2">"Le pouvoir d'achat, instrument ou objectif ?"</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 (2) :</span>
                    <span className="text-gray-700 ml-2">"Quelles sont les limites de la responsabilité des entreprises"</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 (1) :</span>
                    <span className="text-gray-700 ml-2">"La consommation, moteur principal de la croissance depuis le 19e siècle"</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 (2) :</span>
                    <span className="text-gray-700 ml-2">"Faut il lutter contre les délocalisations ?"</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 (1) :</span>
                    <span className="text-gray-700 ml-2">Dans une large perspective historique, quel est le rôle des banques centrales dans les économies développés ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 (2) :</span>
                    <span className="text-gray-700 ml-2">Qu'est-ce qu'un bon SMI ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 (1) :</span>
                    <span className="text-gray-700 ml-2">Le libre-échange est-il "une théorie sans réalité et le protectionnisme, une réalité sans théorie" ? (citation de Paul Bairoch)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 (2) :</span>
                    <span className="text-gray-700 ml-2">Inégalités et croissance</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 (1) :</span>
                    <span className="text-gray-700 ml-2">La division Internationale des Processus Productifs fragilise-elle les économies nationales ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 (2) :</span>
                    <span className="text-gray-700 ml-2">Les assurances chômage ont-elles de l'influence sur le niveau du chômage</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 (1) :</span>
                    <span className="text-gray-700 ml-2">Les politiques économiques peuvent-elles éviter les crises économiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 (2) :</span>
                    <span className="text-gray-700 ml-2">Peut-on réguler le commerce international ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 (1) :</span>
                    <span className="text-gray-700 ml-2">Qu'est-ce qui a fait et qui fait du dollar une monnaie internationale ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 (2) :</span>
                    <span className="text-gray-700 ml-2">Protection sociale et croissance économique depuis le XIXe siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 (1) :</span>
                    <span className="text-gray-700 ml-2">L'industrialisation est-elle la clé du développement économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 (2) :</span>
                    <span className="text-gray-700 ml-2">A la lumière de l'histoire, un pays doit-il toujours lutter contre son déficit de la balance des paiements des opérations courantes ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 (1) :</span>
                    <span className="text-gray-700 ml-2">Un Etat doit-il s'inquiéter de l'augmentation de sa dette publique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 (2) :</span>
                    <span className="text-gray-700 ml-2">Faut-il lutter contre les inégalités économiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 (1) :</span>
                    <span className="text-gray-700 ml-2">Qu'est-ce qu'une bonne gouvernance d'entreprise ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 (2) :</span>
                    <span className="text-gray-700 ml-2">Depuis les années 1980, la mondialisation est-elle responsable du chômage dans les pays avancés ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 (1) :</span>
                    <span className="text-gray-700 ml-2">L'euro : d'où vient-il ? Où mène-t-il ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 (2) :</span>
                    <span className="text-gray-700 ml-2">La globalisation financière a-t-elle amélioré l'allocation du capital depuis les années 1980 ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 (1) :</span>
                    <span className="text-gray-700 ml-2">A la lumière de l'histoire et de l'analyse économiques, vous vous demanderez s'il est possible d'évaluer l'efficacité des dépenses publiques.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 (2) :</span>
                    <span className="text-gray-700 ml-2">Depuis le XIXe, la réussite des pays émergents s'explique-t-elle principalement par leurs dotations factorielles ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 (1) :</span>
                    <span className="text-gray-700 ml-2">Depuis le début du XXème siècle, qu'est-ce qu'un bon taux de change ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 (2) :</span>
                    <span className="text-gray-700 ml-2">Faut-il souhaiter, ainsi que le soutenait J.-M. KEYNES, l'"euthanasie des rentiers" ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 (1) :</span>
                    <span className="text-gray-700 ml-2">Peut-on toujours parler de classes moyennes ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 (2) :</span>
                    <span className="text-gray-700 ml-2">Le progrès technique peut-il être orienté et conduit par la puissance publique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 (1) :</span>
                    <span className="text-gray-700 ml-2">Le chômage est-il dû à la mise en œuvre de politiques inappropriées ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 (2) :</span>
                    <span className="text-gray-700 ml-2">Les nations ont-elles intérêt à faire appel aux investisseurs étrangers ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 (1) :</span>
                    <span className="text-gray-700 ml-2">Qu'est-ce qu'une répartition équitable des fruits de la croissance ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 (2) :</span>
                    <span className="text-gray-700 ml-2">Commerce international et crises économiques : les enseignements de l'histoire.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 (1) :</span>
                    <span className="text-gray-700 ml-2">Depuis 1945, dans quelle mesure l'endettement des agents économiques a-t-il été facteur de croissance dans les PDEM ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 (2) :</span>
                    <span className="text-gray-700 ml-2">Le progrès économique a-t-il fait reculer l'insécurité sociale depuis la fin du 19eme siècle dans les pays capitalistes ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 (1) :</span>
                    <span className="text-gray-700 ml-2">Quel rôle les institutions doivent-elles jouer dans le développement économique des pays ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 (2) :</span>
                    <span className="text-gray-700 ml-2">Concurrence monétaire et compétitivité des nations.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 (1) :</span>
                    <span className="text-gray-700 ml-2">La dotation en facteurs explique-t-elle l'évolution de la spécialisation internationale des nations ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 (2) :</span>
                    <span className="text-gray-700 ml-2">Les prélèvements obligatoires représentent-ils un frein à la croissance économique dans les PDEM ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 (1) :</span>
                    <span className="text-gray-700 ml-2">A quels changements les grandes entreprises capitalistes ont-elles du procéder pour se développer dans l'économie mondiale ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 (2) :</span>
                    <span className="text-gray-700 ml-2">L'internationalisation financière a-t-elle accru les inégalités de développement ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 (1) :</span>
                    <span className="text-gray-700 ml-2">Système de change et croissance économique au XXème siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 (2) :</span>
                    <span className="text-gray-700 ml-2">La déréglementation des marchés du travail a-t-elle des effets sur l'emploi ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 (1) :</span>
                    <span className="text-gray-700 ml-2">Préserver la concurrence : un facteur de régulation essentiel du capitalisme ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 (2) :</span>
                    <span className="text-gray-700 ml-2">Le libre-échange tel qu'il est conçu par l'Accord général sur les tarifs et le commerce (GATT) est-il un facteur de croissance économique depuis 1947 ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 (1) :</span>
                    <span className="text-gray-700 ml-2">Le financement des économies émergentes depuis le début du XIXè siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 (2) :</span>
                    <span className="text-gray-700 ml-2">Le modèle social européen est-il compatible avec la mondialisation ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 (1) :</span>
                    <span className="text-gray-700 ml-2">Les déséquilibres démographiques mondiaux et leurs conséquences sur le développement.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 (2) :</span>
                    <span className="text-gray-700 ml-2">A la lumière de l'expérience historique, vous vous demanderez si l'équilibre budgétaire est un objectif de politique économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 (1) :</span>
                    <span className="text-gray-700 ml-2">L'euro : étape ou aboutissement ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 (2) :</span>
                    <span className="text-gray-700 ml-2">Mobilité sociale et croissance économique en France depuis 1945</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 (1) :</span>
                    <span className="text-gray-700 ml-2">Le recherche de la grande dimension est-elle inéluctable pour l'entreprise dans le système capitaliste ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 (2) :</span>
                    <span className="text-gray-700 ml-2">Existe-t-il une spécificité économique et sociale française depuis le début de l'industrialisation ?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HEC */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-200 pb-2">
                HEC (2000-2025)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2025 :</span>
                    <span className="text-gray-700 ml-2">Les fractures sociales affectent-elles la réalisation des équilibres économiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2024 :</span>
                    <span className="text-gray-700 ml-2">Pourquoi et comment évaluer les politiques publiques ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2023 :</span>
                    <span className="text-gray-700 ml-2">La décroissance peut-elle être compatible avec l'État-providence ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2022 :</span>
                    <span className="text-gray-700 ml-2">L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2021 :</span>
                    <span className="text-gray-700 ml-2">Toute destruction est-elle créatrice ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2020 :</span>
                    <span className="text-gray-700 ml-2">Le capitalisme est-il soutenable ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2019 :</span>
                    <span className="text-gray-700 ml-2">Performances économiques et justice sociale.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2018 :</span>
                    <span className="text-gray-700 ml-2">En vous plaçant dans une perspective historique (depuis le XIXᵉ siècle), pouvez-vous affirmer comme Paul M. Romer en 1986 que « Les taux de croissance semblent être croissants non seulement en fonction du temps mais aussi en fonction du degré de développement » ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2017 :</span>
                    <span className="text-gray-700 ml-2">L'entreprise (depuis le XIXᵉ siècle) peut-elle se passer de l'entrepreneur ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2016 :</span>
                    <span className="text-gray-700 ml-2">Les États ont-ils encore à arbitrer entre le chômage et l'inflation ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2015 :</span>
                    <span className="text-gray-700 ml-2">Institutions et développement depuis le début du XIXᵉ siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2014 :</span>
                    <span className="text-gray-700 ml-2">Équité et libre-échange depuis le début du XIXᵉ siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2013 :</span>
                    <span className="text-gray-700 ml-2">Administrations publiques et compétitivité depuis le début du XIXᵉ siècle.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2012 :</span>
                    <span className="text-gray-700 ml-2">La crédibilité des accords monétaires.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2011 :</span>
                    <span className="text-gray-700 ml-2">Sorties de crise.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2010 :</span>
                    <span className="text-gray-700 ml-2">Le rôle de l'or dans l'économie mondiale depuis le XIXᵉ siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2009 :</span>
                    <span className="text-gray-700 ml-2">Peut-on parler d'un apprentissage des politiques économiques de la part des gouvernements depuis le début du XXᵉ siècle ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2008 :</span>
                    <span className="text-gray-700 ml-2">Les ressources naturelles : obstacle ou moteur pour la croissance économique ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2007 :</span>
                    <span className="text-gray-700 ml-2">La lutte contre la pauvreté depuis le début du XIXᵉ siècle dans les pays développés.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2006 :</span>
                    <span className="text-gray-700 ml-2">L'efficacité des modes de financement des économies avancées.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2005 :</span>
                    <span className="text-gray-700 ml-2">Causes et conséquences de la tertiarisation des économies avancées.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2004 :</span>
                    <span className="text-gray-700 ml-2">La mondialisation économique est-elle irréversible ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2003 :</span>
                    <span className="text-gray-700 ml-2">En quoi les crises économiques et financières majeures marquent-elles une étape dans le développement économique et social ?</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2002 :</span>
                    <span className="text-gray-700 ml-2">Les rôles respectifs de l'État et du marché dans la répartition et la redistribution des revenus depuis la fin du XIXᵉ siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2001 :</span>
                    <span className="text-gray-700 ml-2">Le rôle de la concentration des entreprises dans le développement depuis le milieu du XIXᵉ siècle.</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-700">2000 :</span>
                    <span className="text-gray-700 ml-2">Le rôle de la concentration des entreprises dans le développement depuis le milieu du XIXᵉ siècle.</span>
                  </div>
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
