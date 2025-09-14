import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Home, ChevronRight, ArrowLeft } from 'lucide-react';

const MonnaieFinancementEconomieModulePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">Formation ESH ECG</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">Première année</Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Module – Monnaie et financement</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la première année
              </Button>
            </Link>
          </div>

          {/* Hero bleu */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-md">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">La monnaie et le financement de l'économie – Module</h1>
                  <div className="text-sm text-white/90 font-medium mt-1">Chapitre 1.2 • Détail du module</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <a href="#sec1" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">1) Définir le financement</a>
                <a href="#sec2" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">2) Acteurs & instruments</a>
                <a href="#sec3" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">3) Mutations du système</a>
                <a href="#sec4" className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">4) Crises & régulation</a>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* 1 */}
            <div id="sec1" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">1</span>
                Définir le financement de l’économie
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - L’économie a besoin de financement</h3>
                  <p>En france l’ensemble des besoins de financement + des capacités de financement &lt; 0. Donc la france est en besoin de financement (-19,4 milliard en 2019)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Les besoins de financement des uns financent les capacités des autres</h3>
                  <h4 className="font-medium text-gray-900">1 - SNF et APU sont génralement en besoin de financement</h4>
                  <p>APU se répartissent en 3 groupes : Etat, administrations publiques locale, administrations en charge de la sécurité sociale. La hausse des dépenses publiques (ex: alloc chomage) et le ralentissement de l’activité éco entraine une baisse des recette aggrave le déficit publique comme pendant le covid.</p>
                  <p>Pour les SNF, soit autofinancement donc si elles sont en capacités sinon crédit ou émission de titre si elles sont en besoin de fiancement. Selon les Keynésiens c’est la demande anticipée des entreprises qui détermine l’investissement, c’est l’effet d’accélérateur.</p>
                  <h4 className="font-medium text-gray-900 mt-2">2 - Les ménages sont généralement en capacité de financement</h4>
                  <p>Ils ont généralement une épargne supérieur à leurs investissements. Pour les classiques l’épargne est de l’ordre de 15 % en France et est déterminée par le taux d’intéret. Selon Keynes dans Théorie générale de l’emploi, de l’intérêt et de la monnaie de 1936 le niveau d’épargne dépend du revenu courant des ménages.</p>
                  <p>Pour les monétaristes comme Friedman  elle dépend du revenu  permanent des ménage ( revenu futur anticipé a long terme). Inflation a des effets négatif sur l’épargne. L’incertitude également → épargne de précaution comme pendant le COVID.</p>
                  <h4 className="font-medium text-gray-900 mt-2">3 - En économie ouverte</h4>
                  <p>En économie ouverte, le besoin de fiancement d’une économie est financé par le RDM</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div id="sec2" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">2</span>
                Les acteurs et les intruments du financement de l’économie
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A) Les systèmes financiers contribuent au financement de l'économie</h3>
                  <p>Système financier : ensemble des acteurs, des institutions et des instruments qui contribuent au financement de l'économie.</p>
                  <p>Objectif : Mettre en relation agents a besoins et a capacités de financement</p>
                  <p>Certains économistes distinguent : financement direct = émission de titres (par le marché) et indirect = par les banques</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Les banques offrent des crédits et créent la monnaie</h3>
                  <p>« les crédits font les dépots ». Dans la zone euro 90 % de la monnaie est scripturale.</p>
                  <p>Suite au remboursement destruction de la monnaie et garde les intérêts.</p>
                  <h4 className="font-medium text-gray-900 mt-2">2 - On distingue 3 sources de création monétaire</h4>
                  <p>1-avec l’extérieur , 2 avec les APU (ex : achat bon du Trésor), 3 avec l’économie  (entreprises et ménages.)</p>
                  <h4 className="font-medium text-gray-900 mt-2">3 - Les mécanismes de création monétaire par le système bancaire</h4>
                  <p>BC crée monnaie fiduciaire et Banques de second rang la monnaie scripturale</p>
                  <p>La BC régule la création monétaire→ impose aux BSR des réserves obligatoire et détient un stock d’or et de devise qu’elle peut utiliser pour stabiliser le taux de change.</p>
                  <p>Formule du multiplicateur monnétaire : M=1/(r+b-rb)*MC avec réserve obligatoire et b= rôle de la préférence pour la liquidité et MC la monnaie centrale et k=1/r+b-rb multiplicateur de crédit</p>
                  <h4 className="font-medium text-gray-900 mt-2">4 - Deux théorie de l’offre de monnaie</h4>
                  <p>Théorie monétariste:monnaie est exogène la BC contrôle la monnaie en circulation en faisant varier la MC</p>
                  <p>Théorie keynésienne : monnaie est endogène donc déterminée par les besoin de financement de l’économie donc c’est la BC qui s’adapte a la demande de monnaie. Le multiplicateur devient le diviseur et on a :</p>
                  <p>Formule du diviseur monétaire : MC=(r+b-rb)*M avec d=r+b-rb diviseur de crédit</p>
                  <p>Opposition exogène/endogène date du 19ème entre la currency school de Smith et Ricardo (monnaie exo) et la Banking school de Took (monnaie endo). Peel Act (1844) Seule la Banque d'Angleterre était autorisée à émettre des billets, et cela devait être soutenu par des réserves d'or. Aujourd’hui monnaie endogène.</p>
                  <h4 className="font-medium text-gray-900 mt-2">5 - Les agrégats monétaires</h4>
                  <p>Les agrégats monétaires sont des indicateurs statistiques élaborés par les autorités monétaires.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>M1, monnaie fiduciaire et scripturale</li>
                    <li>M2, comprend M1 et compte sur livret comme le livret A</li>
                    <li>M3, comprend M1 et M2 et instruments liquide livret par OPCVM monétaire.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - Les intermédiaires financiers non bancaires</h3>
                  <p>Depuis 2008 le poid des intermédiaires financiers non-bancaire (IFNB) se sont fortement accru et dépasse celui des banques. Selon la banque de France, entre 2008 et 2017 l’IFNB a progressé 1,7 fois plus que l’intermédiation bancaire dans le Monde. Cela s’explique par le développement du « shadow banking » avec par exemple les hedges funds. Et constituent une potentielle menace pour la stabilité du système financier.</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div id="sec3" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">3</span>
                Les mutations profondes du système financier
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - Réformes financières ambitieuse depuis 1980</h3>
                  <p>Depuis 1980,pays emmergents et développés procède a des réformes visant à dérèglementer leurs systèmes financiers sous l’influence de l’idéologie néolibérale.</p>
                  <p>BOURGUINAT, Finance internationale, 1992 les 3D</p>
                  <p>En France : une libéralisation radicale, suppression en 1987 de l’encadrement du crédit et en 1989 du contrôle des changes (Dérèglementation). De plus à partir de 1986 les pouvoirs publiques procèdent à la privatisation des banques  comme BNP Paribas</p>
                  <p>Création d’un marché unique des capitaux, depuis 1980 développement du marché des capitaux</p>
                  <p>Passage d’une finance intermédiée (avec emprunt auprès d'une banque) à une finance désintermédiée (financement par émission de titres directement sur le marché financier) ( Désintermédiation)</p>
                  <p>Suppression des cloisons entre compartiments des marchés financiers</p>
                  <p>1999 aux USA avec Financial Services Modernization Act : fin de la distinction entre banque d’Inv et de dépôt = Glass Steagall) (Décloisonnement)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Le système financier connaît des innovations majeurs</h3>
                  <p>1985-Création d’un marché des titre de créances négociables.</p>
                  <p>Bon du Trésor négociable émis par l’État mis en place pour moderniser la gestion de la dette publique.</p>
                  <p>Dans le même temps, création des marchés de produit dérivés</p>
                  <p>objectif est de se prévenir des risques ( ex : création du MATIF en 1986)</p>
                  <p>La titrisation des créances, lancée aux USA dans les années 1970 consiste à convertir des blocs de crédit consentis par une banque en instrument négociable destiné à des investisseurs généralement non bancaires.</p>
                  <p>Point négatif : incite les banques à prendre des risques sur les crédits susceptibles d’être « titrisés ».</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - La taille des marchés financiers explose</h3>
                  <p>En 1991 marché est en 3 compartiments : 1er marché, 2nd marché, marché hors côte</p>
                  <p>en 2006 fusion entre Euronext et New york Stock Exchange pour créer NYSE Euronext.</p>
                  <p>Résultat : taille marchés monétaires et financiers explose en France : l’encours des titres  monétaire et financier représente 90 % du PIB en 1980 et 582 % du PIB en 2015.</p>
                  <p>La capitalisation boursière de la Place de Paris a atteint 150 % du PIB en 2019.</p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div id="sec4" className="bg-white rounded-xl p-6 shadow-md ring-1 ring-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">4</span>
                Crise et régulation des systèmes financiers
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900">A - Les crises se multiplient à l’ère de la mondialisation</h3>
                  <p>Voir tableau p38</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">B - Un petits nombres de mécanisme à l’origine de la crise financière</h3>
                  <p>Selon CAE dans Les crises financières (2004) ,L’analyse économique a permis de montrer que au-delà de leurs diversités un petits nombres de mécanismes fondamentaux sont à l’origine des crises financières. On retrouve notamment : Contagion d’un marché à l’autre,bulle spéculative, interdépendance des marchés financiers.</p>
                  <p>Marché  instable selon Keynes car acteurs myopes et moutonnier et encore plus depuis libéralisation (1980)</p>
                  <p>Selon Stiglitz dans La grande désillusion (2002) les politiques de libéralisation radicale imposée par le FMI sont une des cause majeurs des crises financières en Russie et en ASIE EN 1997-1998</p>
                  <p>4 dimension pricipale de ces politiques de libéralisation : libéralisation des opérations bancaires , ouverture du marché boursier, ouverture du compte de capital, libéralisation du marché des changes</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">C - Les crises financières sont souvent associées aux innovations</h3>
                  <p>Schumpeter, Théorie de l’évolution économique (1911), les vagues technologiques sont souvent associés à des crises financières de ce point de vue le crack internet qui s'est traduit par un effondrement brutale des cours boursiers en 2000 peut-être comparer aux crises boursières qui ont accompagné le développement des chemins de fer au milieu du 19e siècle. Autre exemple, la titrisation créée dans les années 1970 à jouée un rôle majeur dans la crise des subprimes de 2008. La titrisation permet aux banques une gestion des risques en les transferant au marché mais les incitent à un moindre contrôle de la qualité des emprunteur et diffusent ce risque au marché ce qui engendre un risque systémique. Technique massivement utilisée par les banques Américaines pour se débarasser des crédits immobilier à haut risques (subprimes).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">D - Les banques centrales et la régulation financière ont un rôle essentiel face aux crises</h3>
                  <p>crises de 2008 et 1929 sont liée à des politiques économiques libérales.</p>
                  <p>Le président Hoover déclarait au milieu de la crise des années 1930 : « Prosperity is around the corner » (car confiance dans les marchés)</p>
                  <p>Cependant différence entre les 2 crise par rapport au rôle des BC et de la régulation financière</p>
                  <p>Selon La Documentation francaise dans Quelles leçons de la crise pour les banques centrales ? (2012) une des causes aggravantes de la crise de 1929 a été la politique de la Fed américaine qui a refusé de venir en aide aux banques en difficulté ce qui a aggravé la déflation.A l'inverse lors de la crise des subprimes les banques centrales des pays de la Triade (US,EU,Japon) sont intervenus activement comme prêteur en dernier ressort pour aider les banques piégées par la crise même (si pour certaines→  15 septembre 2008, faillite de Lehman- Brothers.)  notamment à l’aide de politiques «  non-conventionnelles » en rachetant des titres privés et publics.(commence en 2014 pour la BCE et 2008 pour la Fed) et création de la L’Union bancaire européenne en 2012 pour faire face a la crise )</p>
                  <p>Autre avancé, mise en place de politique de réglementation et de supervision « prudentielle »à partir des années 70 dans le cadre du comité de Bâle pour le contrôle bancaire.→ fond propre suffisant pour les banques. Cependant ne concerne pas les activité du « shadow banking ».</p>
                  <p>Sans ces innovation récente F.D.Roosevelt fit voter les Glass-Steagall Act (1933) qui sépare banques de détail et banques d’affaire→ contribue stabilité des 30 glorieuses , remis en cause année 1980.</p>
                  <p className="mt-2">REF en plus :  En 2010, le ministre des finances brésilien , Guido Montega disait que son pays se retrouve au milieu d’une « guerre des monnaie », accusant notamment la politique monétaire américaine d’affaiblir le dollar</p>
                  <p>KRUGMAN, « Competitiveness, a dangerous obsession », 1994 , la course à la compétitivité qui pousse les pays à rentrer dans une guerre des monnaie ( comme le fait la Chine avec le yuan) risque de produire une contrainte de débouché généralisé donc une contraction du commerce mondial et financement d'une déflation et d'une dépression économique touchant tous les pays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonnaieFinancementEconomieModulePage;


