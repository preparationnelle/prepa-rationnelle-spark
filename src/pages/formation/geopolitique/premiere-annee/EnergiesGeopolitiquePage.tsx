import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const EnergiesGeopolitiquePage: React.FC = () => {
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
            <span className="text-gray-800 font-medium">Géopolitique des énergies</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Géopolitique des énergies</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="leading-relaxed">Les tensions observées sur les prix des hydrocarbures (gaz et pétrole) depuis la fin de la pandémie ont rappelé l’importance des matières premières énergétiques dans l’économie. Elles marquent également un retour structurel des questions de sécurité et de dépendance énergétiques, notamment en Europe, et accentuent la complexité des enjeux énergétiques mondiaux. Portée en partie par l’innovation technologique, la transition énergétique fait l’objet de nombreuses incertitudes.</p>
              <p className="mt-2">⇒ coûts des technologies (batteries, véhicules électriques…), manque de volontarisme des acteurs pour renforcer la coordination, la justice climatique et la décarbonation.</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Faits et dynamiques récentes</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>LKAB (Suède), 12 janv. 2023 : annonce du « plus grand gisement connu » de terres rares (Per Geijer) — minerais essentiels aux technologies bas carbone; dépendance de l’UE à >98% vis‑à‑vis des importations chinoises.</li>
                <li>Japon : Fumio Kishida favorable à la relance du nucléaire (post‑Fukushima) pour contribuer à la neutralité carbone — opinion publique toujours traversée par un discours anti‑nucléaire.</li>
                <li>Mine de Cobre Panamá (Donoso) : plus grande d’Amérique centrale. Le cuivre, stratégique pour les renouvelables, représentait 75% des exportations du Panama jusqu’à la fermeture de 2022.</li>
                <li>KenGen (Kenya), unité 6 d’Olkaria (juil. 2022) : la géothermie, 2e source d’électricité après l’hydro; Olkaria = 8e centrale géothermique mondiale.</li>
                <li>Lynas (Australie) accuse en 2019 la Chine d’exploiter sa position dominante sur les terres rares comme une arme économique.</li>
                <li>Guerre en Ukraine : nouveaux projets pour acheminer hydrocarbures d’Asie centrale vers l’Europe (gazoduc Turkménistan→Turquie→Europe; Kazakhstan prêt à exporter >20 Mt par la voie transcaspienne).</li>
                <li>Uranium : Kazakhstan = 1er producteur mondial (2019, 42%). Pour la France (≈41% d’électricité nucléaire; +6 EPR2 annoncés), sécurisation stratégique des approvisionnements (FR 2005‑2020 : KAZ 20%, AUS 19%, NIG 18%, UZB 16%). Orano present via KATCO.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">L’Union européenne face à la crise énergétique</h2>
              <p>Crise asymétrique : impact différencié selon mix et dépendances; test d’unité dans un système interconnecté.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Réaction d’urgence : remplissage des cuves de gaz; solidarité via réseaux gaz/élec pour passer l’hiver.</li>
                <li>Mesures nationales de soutien : contenir précarité énergétique, faillites et perte de compétitivité; limiter la pression inflationniste.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Outils européens en appui de la transition</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>RePowerEU (mai 2022) : se passer des fossiles russes d’ici 2027 — sobriété, diversification, renouvelables. Entre août 2022 et janv. 2023 : demande d’électricité −19%.</li>
                <li>Dépendance au gaz russe : ≈40% avant la guerre ⇒ ≈13% en nov. 2022.</li>
                <li>Next Generation EU (750 Mds €) : relance post‑Covid; priorités climat/numérique.</li>
                <li>Paquet « Fit for 55 » : trajectoire −55% GES en 2030 vs 1990 et neutralité 2050.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergiesGeopolitiquePage;


