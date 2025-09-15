import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const DissertationAZPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link to="/formation/geopolitique/methodologie" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Dissertation de géopolitique de A à Z</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-4">Dissertation</h1>

          <h2 className="text-xl font-semibold mb-2">Gestion du temps en épreuve</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <tbody>
                <tr><td className="py-1 pr-4 align-top">0-20min</td><td>Premières réflexions sur le sujet et recherche de la problématique</td></tr>
                <tr><td className="py-1 pr-4 align-top">20-1h00</td><td>Réalisation du plan détaillé (3x3 : 3 parties, 3 sous-parties)</td></tr>
                <tr><td className="py-1 pr-4 align-top">1h00-1h20</td><td>Rédaction de l’introduction (au propre) de la conclusion (au brouillon)</td></tr>
                <tr><td className="py-1 pr-4 align-top">1h20-2h05</td><td>Rédaction 1ère partie (I) – Environ 10min pour chaque sous-partie</td></tr>
                <tr><td className="py-1 pr-4 align-top">2h05-2h10</td><td>Relecture 1ère partie (I)</td></tr>
                <tr><td className="py-1 pr-4 align-top">2h10-2h55</td><td>Rédaction 2ème partie (II) – Environ 10min pour chaque sous-partie</td></tr>
                <tr><td className="py-1 pr-4 align-top">2h55-3h00</td><td>Relecture 2ème partie (II)</td></tr>
                <tr><td className="py-1 pr-4 align-top">3h00-3h45</td><td>Rédaction 3ème partie (III) + conclusion – Environ 10min pour chaque sous-partie</td></tr>
                <tr><td className="py-1 pr-4 align-top">3h45-3h50</td><td>Relecture 3ème partie (III)</td></tr>
                <tr><td className="py-1 pr-4 align-top">3h50-4h</td><td>Relecture complète</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mb-2">Le travail sur le brouillon</h2>
          <div className="prose prose-sm max-w-none text-gray-800">
            <p><strong>Analyse des termes du sujet</strong></p>
            <ol>
              <li>
                <p><strong>Identifier la période</strong> : intersection entre moment où les termes prennent sens et les bornes du programme. Quelles sont les grandes ruptures au sein de la période ?</p>
                <ul>
                  <li>Réaliser une très courte chronologie du sujet avec bornes et principales ruptures</li>
                  <li>S’il n’y a pas de borne de fin, le sujet s’arrête aujourd’hui</li>
                  <li>Toujours définir la période en introduction même si elle n’apparaît pas dans le sujet</li>
                  <li>Se demander : à partir de quand ce sujet prend du sens ? Si la période est longue ou indéterminée, s’interroger sur les dates clés : 1913, 1939, 1945, guerre froide, 1991, 2001</li>
                </ul>
                <p>Exemple 1 : L'Union Européenne depuis le traité de Lisbonne. (1992 ∩ 2007) — on prend 2007.</p>
                <p>Exemple 2 : Les hydrocarbures, armes et richesses à risques — à partir de quand deviennent‑ils des armes et des richesses à risques ?</p>
              </li>
              <li>
                <p><strong>Identifier l’espace</strong> : définir dans l’introduction (surtout si les frontières géographiques sont incertaines/ambigües). Comment le sujet varie selon les espaces ? Atout/vulnérabilité géographique en lien avec le sujet.</p>
              </li>
              <li>
                <p><strong>Les autres termes</strong> : chercher des synonymes et voir comment ils se différencient.</p>
                <p>Exemple 1 : Rivalités et rapports de puissance en Asie‑Orientale — Rivalités (porte sur un 3e objet) ≠ tensions (désaccord, prêt à agir).</p>
                <p>Exemple 2 : Le monde vu de Washington — Vision = représentation ⇒ guide politique étrangère ≠ action réelle menée par Washington.</p>
              </li>
              <li>
                <p><strong>Toujours évoquer et réfléchir sur toutes les dimensions du sujet</strong> :</p>
                <ul>
                  <li>Historique</li>
                  <li>Économique : flux (compétition, coopération)</li>
                  <li>Géopolitique : rapports de force; Historique : rupture/continuité</li>
                  <li>Géographique / Territorial : centre/périphérie</li>
                  <li>Géoéconomie : interaction économie, espace et puissance</li>
                  <li>Politique & militaire : politique intérieure & extérieure</li>
                  <li>Social; Culturel; Environnemental</li>
                  <li>Démographique/Sanitaire; Énergétique; Numérique (cyber)</li>
                </ul>
                <p>Mnémotechnique : Depeche nsggg</p>
              </li>
              <li>
                <p><strong>Trouver le paradoxe et la problématique</strong></p>
                <p>Paradoxe = ce qui est frappant/nouveau. Types : temporel, spatial, notionnel.</p>
                <p><strong>Soumettre le sujet à 4 mots clefs</strong> : mondialisation, puissance, modèle, émergence/développement.</p>
                <p><strong>Filtres conceptuels</strong> : Acemoglu (développement), Nye (puissance; hard/soft; diffusion/transition), Walt (IR: anarchie, équilibre des puissances, représentations…)</p>
                <p><strong>Filtres antinomiques</strong> : Acteurs ? Rythme ? Héritages ? Manifestations ? Facteurs ? Conséquences ? Limites ? Résistances ? Stratégies ? Recentrage ? Cause/conséquence ? Voulu/contraint ? Conjoncturel/structurel ? Organisé/désorganisé ? Contrôlé/incontrôlable ? Levier/obstacle ? Rare/courant ? Nombreux/peu ? Sur le papier/sur le terrain ? Suffisant/incomplet ?</p>
                <p>Objectif : faire émerger un couple contradictoire simple; la problématique élève ce paradoxe (modèle : « Comment comprendre alors que… tandis que… ? »). Possibilité de double problématique (niveau 1 / niveau 2).</p>
              </li>
              <li>
                <p><strong>Façonner le plan</strong> : règle absolue — les termes du sujet doivent apparaître dans les titres des parties.</p>
              </li>
            </ol>

            <h3 className="text-lg font-semibold mt-6">Les plans types</h3>
            <ul>
              <li>Plan n°1 : Manifestations‑Aspects / Facteurs / Bilan ou Limites (CPJ)</li>
              <li>Plan 1bis : Facteurs / Manifestations‑Aspects / Bilan ou Limites (PCJ)</li>
              <li>Plan n°2 : Héritages / Facteurs / Bilan (situation initiale, facteurs de transformation, bilan)</li>
              <li>Plan n°3 : Dialectique — Certes / mais / dépassement (ou Certes / pourquoi / mais)</li>
            </ul>
            <h4 className="font-medium mt-4">Remarques importantes</h4>
            <ol>
              <li>Ne jamais écrire « il semble » dans le grand I</li>
              <li>Ne pas faire de partie prospective en grand III (sauf référence ponctuelle en sous‑partie)</li>
              <li>PCJ ou CPJ ? placer l’info clé en II) 2)</li>
              <li>Possibles mix (1+3 ou 2+3)</li>
              <li>III) c) peut ouvrir une perspective nouvelle</li>
              <li>Le plan (2) valorise une forte dimension historique en I</li>
            </ol>

            <h3 className="text-lg font-semibold mt-6">Le cas des sujets avec « ? »</h3>
            <p>Ne pas faire OUI/NON. Construire autour d’un couple contradictoire; la question suggère la problématique.</p>

            <h3 className="text-lg font-semibold mt-6">Cas des sujets en « et », « dans », « face à », « à l’épreuve de »</h3>
            <ul>
              <li>« et » : préciser la relation (copulative/adversative/identitaire)</li>
              <li>« dans » : place (passif) / rôle (actif)</li>
              <li>« face à » : subir (passif) / faire face (actif)</li>
              <li>« à l’épreuve de » : passif / actif</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Cas des sujets atypiques</h3>
            <p>Accepter un plan atypique mais rigoureux (ex : « Le monde vu de Washington »).</p>

            <h3 className="text-lg font-semibold mt-6">Trouver les sous‑parties</h3>
            <p>Hiérarchies possibles : typologique (changement d’échelle), chronologique, thématique, dialectique, géographique.</p>

            <h3 className="text-lg font-semibold mt-6">Relecture du plan</h3>
            <ol>
              <li>Répond‑on bien au sujet (et pas à un autre) ?</li>
              <li>Les mots du sujet sont‑ils dans les titres des grandes parties ?</li>
              <li>Est‑ce valable à toutes les bornes chrono et à toutes les échelles ?</li>
            </ol>

            <h2 className="text-xl font-semibold mt-8">La rédaction</h2>
            <h3 className="text-lg font-semibold mt-4">L’introduction</h3>
            <ol>
              <li>Accroche</li>
              <li>Définition des termes</li>
              <li>Paradoxe</li>
              <li>Problématique</li>
              <li>Annonce de plan</li>
            </ol>
            <p className="text-sm mt-2">Règle : les mots du sujet dans les trois premières phrases.</p>

            <h3 className="text-lg font-semibold mt-6">La conclusion</h3>
            <ol>
              <li>Somme des conclusions partielles</li>
              <li>Réponse à la problématique (1‑2 phrases)</li>
              <li>Ouverture (temps, espace, référence)</li>
            </ol>

            <h3 className="text-lg font-semibold mt-6">Les paragraphes</h3>
            <p>Idée (1 phrase) + Argument + Exemple. Varier les exemples; appuyer avec chiffres, dates, ouvrages reconnus.</p>

            <h3 className="text-lg font-semibold mt-6">Fautes à éviter</h3>
            <ul>
              <li>Une périphérie n’est pas marginale mais dépendante</li>
              <li>Éviter : « rayonner », « statut de puissance », « s’imposer », « domination » (hors cadre marxiste)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">Réussir sa colle</h3>
            <p>Méthode similaire à l’écrit mais accélérée. Trois types (récitation organisée; argumentatif ciblé; hors programme).</p>

            <h3 className="text-lg font-semibold mt-6">Orthographe et style</h3>
            <p>Ficher expressions et fautes récurrentes. Si besoin : entraînement Projet Voltaire.</p>

            <h3 className="text-lg font-semibold mt-6">Ressources complémentaires</h3>
            <ul>
              <li>France : Interview Hubert Védrine (Thinkerview)</li>
              <li>Climat : Interview JM Jancovici (Thinkerview)</li>
              <li>Asie : Reportage Xi Jinping (Arte)</li>
              <li>Chaîne : Le dessous des cartes</li>
              <li>Capsules : Lumni enseignants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DissertationAZPage;


