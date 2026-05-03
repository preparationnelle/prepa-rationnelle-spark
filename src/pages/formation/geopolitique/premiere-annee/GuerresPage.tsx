import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const GuerresPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-800 font-medium">Les guerres</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Les guerres</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="italic">« Soumettre l’ennemi par la force n’est pas le summum de l’art de la guerre, le summum de cet art est de soumettre l’ennemi sans verser une seule goutte de sang » — Sun Tzu, L’Art de la guerre.</p>
              <p className="italic">« La guerre, c’est la guerre des hommes ; la paix, c’est la guerre des idées » — Victor Hugo.</p>
              <p className="italic">« La guerre n’est que la continuation de la politique par d’autres moyens » — Carl von Clausewitz.</p>
              <p className="mt-2">Étymologie: conflit ← <em>confligere</em> (heurter), <em>conflictus</em> (choc). La guerre est une forme armée de conflit, encadrée par un corpus juridique (déclaration formelle, traité de paix).</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. Les guerres actuelles reprennent les logiques des guerres passées…</h2>
              <h3 className="text-xl font-semibold mb-2">A. Un droit de la guerre défini sur le temps long</h3>
              <p>Grotius et l’École de Salamanque (XVIe‑XVIIe) posent les bases du droit international : <em>jus ad bellum</em> (raisons de faire la guerre) et <em>jus in bello</em> (manière de la faire). Traités de Westphalie (1648) : souveraineté étatique, droit de s’allier.</p>
              <p>Après 1918/1945 : SDN puis ONU — légitimité de l’usage de la force par approbation de la communauté. Conflits interétatiques devenus exceptionnels.</p>
              <p>Conventions de Genève (1949) et Protocoles : socle du DIH (protection civils/prisonniers; interdiction torture/armes).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Héritages de la Seconde Guerre mondiale et de la guerre froide</h3>
              <p>Arme nucléaire : inhibition de l’affrontement direct; conflits de basse intensité. Paradoxe stabilité/instabilité (G. Snyder). Déplacement des guerres vers le Sud, avec ou sans grandes puissances.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Les États restent des acteurs centraux</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Financement/maîtrise du complexe militaro‑industriel; interventions directes/indirectes (proxies).</li>
                <li>« Guerre par procuration » (Brzezinski) : affrontement via acteurs soutenus (États, groupes armés…).</li>
                <li>USA : 650 Mds$ (2018); DARPA; Lockheed/Northrop (marché intérieur); 36% des exportations d’armement (2014‑2018).</li>
                <li>Chine : 2e puissance militaire (≈250 Mds$ en 2018).</li>
                <li>Dilemme de sécurité : plus de sécurité nationale ⇒ insécurité globale accrue.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. … mais s’en écartent par ce qu’elles mettent en œuvre…</h2>
              <h3 className="text-xl font-semibold mb-2">A. Après la guerre froide : nouvelles violences et dissémination</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Coûts financiers, rejet des valeurs guerrières, dissuasion nucléaire.</li>
                <li>Théorie de la paix démocratique (M. Doyle).</li>
                <li>Terrorisme international (11/09 : 2 977 victimes); dissémination d’armes post‑URSS; TNP (Ukraine se dénucléarise).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Nouvelles notions et brouillage des catégories</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Guerres intra‑étatiques; asymétriques; facteurs enchevêtrés (straddling).</li>
                <li>Violences dépolitisées, économies de guerre, trafics; armes légères; limites des embargos.</li>
                <li>Impuissance internationale face aux groupes non étatiques; reconstruction longue (État, institutions, lien social).</li>
              </ul>
              <p className="mt-2">Générations de guerre : 1) masse; 2) puissance de feu; 3) manœuvre (blitzkrieg); 4) « guerre de 4e génération » (W. S. Lind) — information et mobilisation de tous les domaines.</p>
              <p>Guerres asymétriques/dissymétriques; guerres hybrides; « Netwar » (Arquilla & Ronfeldt).</p>
              <p>Préventive (illégale) vs préemptive (légitime défense) : Irak 2003 présentée comme préemptive; exemple Israël 1967 (préemptive).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Évolutions des moyens et objectifs</h3>
              <p>Doctrine « zéro mort »/« guerre propre »; drones et robotisation ⇒ monde post‑héroïque (E. Luttwak, 1995). RMA (révolution des affaires militaires) — NTIC, « gap technologique »; limites en contexte de guérilla.</p>
              <p>Privatisation : SMP (DynCorp, Academi/Blackwater), Groupe Wagner (paramilitaire, Ukraine/Syrie, ressources en Afrique).</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">III. … rendant la guerre polysémique et aux contours flous</h2>
              <h3 className="text-xl font-semibold mb-2">A. Guerre économique</h3>
              <p>Ali Laïdi (2016) : l’économie de marché comme espace de confrontation — géoéconomie, contrôle des ressources rares; transposition au niveau des entreprises (avantage concurrentiel).</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Cyberconflits</h3>
              <p>Le cyberespace, 5e domaine : de la propagande au sabotage industriel.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Menaces : malwares, spywares, botnets, rançongiciels, social engineering, manipulation de l’information (fake news).</li>
                <li>Stuxnet (2010) : ver visant systèmes industriels; Pegasus (NSO Group) : espionnage de smartphones.</li>
                <li>Wannacry/NotPetya (2017) : impacts planétaires.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Risques interétatiques et retours conventionnels</h3>
              <p>Espace extra‑atmosphérique : militarisation (programmes Helios, Skynet, FSW, Yaogan…).</p>
              <p>Nouveau cycle nucléaire : essais nord‑coréens, retrait US du JCPoA; égalisation des arsenaux (B. Tertrais); instabilités accrues vs guerre froide.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Conclusion</h3>
              <p className="italic">« La guerre est semblable au feu, lorsqu’elle se prolonge, elle met en péril ceux qui l’ont provoqué » — Sun Tzu.</p>
              <p className="italic">« Être inerte, c’est être battu. » — Charles de Gaulle.</p>
              <p className="italic">« Le révolutionnaire doit être dans la population comme un poisson dans l’eau » — Mao Zedong.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuerresPage;


