import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const EspacesMaritimesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-800 transition-colors">Géopolitique</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/geopolitique/premiere-annee" className="hover:text-gray-800 transition-colors">Première année</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Les espaces maritimes</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Les espaces maritimes</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="max-w-none text-gray-900 space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="leading-relaxed">Autrefois vierges, les espaces maritimes font l’objet d’une appropriation croissante par les États. ⇒ territorialisation sans précédent dont l’extension du droit de la mer est la conséquence. Les espaces maritimes apparaissent ainsi comme des espaces à conquérir (fronts) et à délimiter pour exercer pleinement une souveraineté. Leur appropriation les transforme en territoires propices aux rivalités, aux tensions et au jeu des puissances.</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. La territorialisation des espaces maritimes conduit à multiplier les frontières maritimes</h2>
              <h3 className="text-xl font-semibold mb-2">A. Une nouvelle lecture des espaces maritimes appropriés par les États</h3>
              <p>Deux conceptions s’opposent :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Grotius (juriste pour la Compagnie hollandaise des Indes orientales), <em>Mare Liberum</em> (De la liberté des mers), 1609 : affirme que la mer est un espace de liberté ne pouvant être confisqué par quiconque.</li>
                <li>John Selden, <em>Mare Clausum</em> (1635) : affirme la souveraineté britannique sur les mers environnantes.</li>
              </ul>
              <p>La notion juridique de plateau continental trouve son origine dans la déclaration solennelle faite par le président Harry Truman, le 28 septembre 1945. ⇒ cette notion alors inédite fut codifiée en 1958 par la convention de Genève sur le plateau continental.</p>
              <p>Convention de Montego Bay en 1982 (signée par 166 États en 2015) : avec la mer territoriale et la zone contiguë, elle introduit le principe de Zone Économique Exclusive (à 200 milles des lignes de base).</p>
              <p>Résolution de l’ONU fin 2017 (adoptée par 140 pays) : vise à combler le vide juridique de Montego Bay concernant la haute mer (objectif de préserver 45% de la surface du globe considérée comme <em>res nullius</em>).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Une nouvelle géographie des territoires marins</h3>
              <p>Le processus d’expansion juridictionnel n’est pas achevé et des délimitations peuvent former des « frontières chaudes » (Michel Foucher).</p>
              <p>Après 5 sessions de négociations : accord historique du 4 mars 2023 à l’ONU sur la conservation et l'utilisation durable de la biodiversité marine des zones ne relevant pas de la juridiction nationale (haute mer).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. De nouveaux rapports espaces maritimes / sociétés</h3>
              <p>Georges Labrecque, <em>Les frontières maritimes internationales. Essai de classification pour un tour du monde géopolitique</em>, 1998 : recense 450 zones de chevauchement susceptibles de générer toute une gamme de conflits.</p>
              <p>Le droit de la mer est également un marqueur de la socialisation de ces espaces : la dimension écologique nourrit l’argumentaire soutenant l’extension des juridictions en mer.</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. La territorialisation des espaces maritimes s’explique par la maritimisation croissante de l’économie mondiale</h2>
              <h3 className="text-xl font-semibold mb-2">A. Des ressources à exploiter qui les propulsent comme nouvelles frontières de la mondialisation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Ressources halieutiques : 2 100 catégories d’espèces qui font l’objet d’une exploitation commerciale, assurent 10% des exportations agricoles à l’échelle du monde et génèrent 200 millions d’emplois.</li>
                <li>Ressources énergétiques et minérales : 20% des réserves de pétrole et 25% des réserves de gaz. ⇒ l’off‑shore profond représenterait selon Total 7% des réserves mondiales.</li>
                <li>Potentiel des énergies marines renouvelables : 20 à 40 000 TWh/an (≈ 1 à 2 fois la consommation annuelle mondiale d’électricité) — éoliennes off‑shore, hydroliennes.</li>
                <li>Chlorure de sodium et dessalement : 17 000 usines de dessalement dans 120 pays. Granulats marins (sable) de plus en plus recherchés par le BTP.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Maritimité et maritimisation : des données structurantes de l’économie mondiale…</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Circulation marchande par voie maritime : 2,5 milliards de tonnes en 1970 // 8,4 milliards de tonnes en 2012.</li>
                <li>Flottes de commerce : 49 000 navires pour une capacité de 1,6 milliard de tonnes.</li>
              </ul>
              <p><strong>Maritimité</strong> : façons de s'approprier la mer (relations économiques, culturelles… entre les sociétés et la mer). ⇒ nouvelle maritimité fin XXe : sports nautiques et de glisse, tourisme maritime, reconquête urbaine des espaces portuaires.</p>
              <p><strong>Maritimisation</strong> : processus d'accroissement des échanges internationaux par voie maritime qui s'accélère depuis les années 1970 (liée à la littoralisation, elle‑même liée à la mondialisation).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. … qui imposent la recherche d’une gouvernance maritime</h3>
              <p>Dans un cadre libéral (liberté de circulation et du commerce), des règles ont été instaurées : territorialisation des espaces maritimes selon le principe d’une gouvernance mondiale.</p>
              <p>OMI (Organisation maritime internationale) : 160 pays — régulation du commerce maritime.</p>
              <p>Environnement : construction de navires plus sobres (Eco‑Ships).</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Classe Triple E de Maersk (« économie d’échelle, efficacité énergétique et progrès environnementaux ») — contrat Daewoo 2011 pour 20 navires (−37% de fioul lourd et −50% de GES).</li>
                <li>Projet Green Cape (Hong Kong) pour rendre les navires Capesize plus économiques et écologiques.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">III. Dès lors, puissance navale et puissance maritime s’expriment à travers les rivalités inhérentes à la territorialisation des espaces maritimes</h2>
              <h3 className="text-xl font-semibold mb-2">A. Espaces maritimes, commerce et État, creuset de la puissance navale</h3>
              <p>À partir du XVIe siècle, les espaces maritimes deviennent centraux dans le jeu des puissances.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Jan Pieterszoon Coen (VOC) : « nous ne pouvons pas poursuivre notre commerce sans la guerre, pas plus que la guerre sans le commerce ».</li>
                <li>Actes de navigation (1651, Cromwell) : développer une marine de guerre et éliminer la concurrence commerciale française, contribuant à la thalassocratie britannique (renforcée par le <em>two‑power standard</em> en 1889).</li>
                <li>Mahan : nécessité de la suprématie maritime (États‑Unis).</li>
                <li>Mackinder : possible déclin du <em>Seapower</em> face aux puissances terrestres (chemins de fer), mais domination nette de l’US Navy après 1945 (malgré la concurrence soviétique années 1970‑1980, amiral Gorchkov).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Les nouveaux paradigmes de la puissance : de la défense des frontières à la défense sans frontières</h3>
              <p>Passage de la protection du territoire à la projection de puissance. Enjeux liés aux systèmes d’alliance et à la dimension maritime de l’exercice de la puissance.</p>
              <p>Sécurité maritime et sauvetage en mer (Méditerranée) — nouveaux enjeux. Recours à des moyens navals contre des menaces asymétriques (piraterie, trafics, terrorisme…).</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-blue-700 mb-2">Compléments</h4>
                <p><strong>Porte‑avions chinois</strong> : Liaoning (ex‑soviétique, 1er en service 2017), Shandong (1er construit en RPC), Fujian (Type 003, 2022).</p>
                <p><strong>US Navy</strong> : 11 porte‑avions (classe Nimitz puis Gerald Ford). « Atout majeur des grandes puissances maritimes… » (Bernard Prézelin, <em>Flottes de combat</em>, 2016).</p>
                <p><strong>Sous‑marins</strong> : SNA (attaque) — USA 56, Russie 17, Chine 8, Royaume‑Uni 6, France 6. SNLE (dissuasion) — USA 14, Russie 10, Chine 5 (Hainan), Royaume‑Uni 4, France 4, Inde 1.</p>
                <p className="mt-3"><strong>Opérateurs de transport maritime</strong> :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Conteneur inventé par McLean (1956), mesuré en EVP : réduit les temps de rupture de charge.</li>
                  <li>Vraquiers ≈ 40% du commerce maritime / tankers ≈ 32% / porte‑conteneurs ≈ 27%.</li>
                  <li>Transport le moins polluant par tonne (4–5% des émissions mondiales de GES).</li>
                  <li>Classement : MSC, Maersk, CMA‑CGM, Cosco, Hapag‑Lloyd…</li>
                  <li>Croisières : Groupe Carnival (USA) — 102 bateaux.</li>
                  <li>Record porte‑conteneur : Ever Ace (Evergreen, Taïwan) — 400 m pour 24 000 EVP.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspacesMaritimesPage;


