import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const MigrationsPage: React.FC = () => {
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
            <span className="text-gray-800 font-medium">Les migrations</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Les migrations</h1>
            <div className="mt-2 h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div className="space-y-8 text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p>Crise migratoire de 2015 : arrivée incontrôlée d’environ 1,5 M de migrants du Moyen‑Orient et d’Afrique subsaharienne — incapacité des membres de l’UE à adopter une réponse commune (accueil vs murs).</p>
              <p className="mt-2">Migration : internationale (entre pays) ou interne (au sein d’un pays). ≈ 280 M de migrants internationaux (≈3,5% de la population mondiale en 2022). Dans la mondialisation contemporaine : dynamiques push/pull, rejets xénophobes/populistes ou élans de solidarité, rééquilibrages démographiques, main‑d’œuvre, remises…</p>
              <p className="mt-2 font-medium">Problématique : le phénomène migratoire est‑il une expression contestable du désordre mondial ou un palliatif qui l’atténue ?</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">I. Motivées par des raisons économiques ou géopolitiques, les migrations contemporaines prennent de l’ampleur</h2>
              <h3 className="text-xl font-semibold mb-2">A. Migrations issues d’inégalités ou de crises économiques</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Afrique subsaharienne : migrations économiques nombreuses; &gt;80% intra‑africaines (Afrique du Sud, Nigéria, Kenya…).</li>
                <li>Contrastes extrêmes : pauvreté (~40%) vs milliardaires (ex : Aliko Dangote).</li>
                <li className="italic">« Si les richesses ne vont pas là où sont les hommes, les hommes vont là où sont les richesses » — Alfred Sauvy.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Migrations issues de crises politiques et de conflits</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>« Arc de crise » Nouakchott→Mogadiscio : conflits et insécurité.</li>
                <li>Printemps arabes (2011) : aspirations démocratiques vs pouvoirs autoritaires; Syrie : ≈8 M de déplacés/migrants.</li>
                <li>Amérique latine : Venezuela (crise 2019) ≈4 M de migrants (Colombie…). Honduras : violences; caravanes vers USA/Mexique.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Une tendance à la hausse des flux</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Mondialisation : hausse des mobilités (désactivation relative des frontières).</li>
                <li>Chine : système <em>Hukou</em> assoupli avec l’ouverture; &gt;200 M de <em>mingongs</em> vers ZES (Shenzhen, Shantou…).</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">II. Symptômes d’une gouvernance déficiente, des effets contrastés pour pays d’origine et d’accueil</h2>
              <h3 className="text-xl font-semibold mb-2">A. Gouvernance insuffisante → tensions externes et internes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Turquie : hub de transit (Syriens, Afghans, Pakistanais) vers l’Europe (route des Balkans).</li>
                <li>UE : crise politique; défaut de coopération sur régulation et répartition.</li>
                <li>Pacte UE‑Turquie (2016) : contrôle renforcé et reprises contre financement (~6 Mds€/an) pour ~5 M de migrants en Turquie.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Rejets populistes vs perceptions biaisées</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Montée des populismes (Rosanvallon) : USA 2016, Brexit, AfD, Italie…</li>
                <li>P. Sutherland, Project Syndicate (2016) : surestimation massive des parts de migrants (Japon ×5; France ×2).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Opportunités économiques, démographiques, culturelles</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Économie : paradis fiscaux très ouverts (ex : Singapour).</li>
                <li>Culture/formation : Erasmus depuis 1987 (&gt;12 M de personnes; budget 26 Mds€; &gt;1 M de « bébés Erasmus »).</li>
                <li>Innovation : OCDE — +1 à 3% d’immigration aux USA ⇒ +15% de brevets.</li>
                <li>Démographie : Allemagne vieillissante — apports d’Europe de l’Est pour combler tensions sur l’emploi.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">III. Pressions environnementales et démographiques → vers un nouvel ordre multilatéral</h2>
              <h3 className="text-xl font-semibold mb-2">A. Migrations climatiques en hausse</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>+1,2°C vs ère pré‑industrielle (objectif Paris : 1,5°C). Projections ≈ +2,5°C en fin de siècle.</li>
                <li>Eustasie : +20 cm ⇒ +200 M de migrants potentiels; Banque mondiale : 216 M de migrants climatiques d’ici 2050.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">B. Démographies du Sahel : risques d’accroissement des flux</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>« Bombe P » (époux Ehrlich) ; ONU : 9,7 Mds en 2050 (croissance concentrée).</li>
                <li>Dividende démographique vs fardeau selon capacités d’emploi/éducation.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">C. Tentatives de régulation internationale</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Pacte de Marrakech : « migrations sûres, ordonnées et régulières » (≈160 signataires) — renforce UNHCR mais non contraignant.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Éléments complémentaires</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Flux d’info et visibilité — exode rural, métropolisation, littoralisation; nuances conjoncturelles.</li>
                <li>Passeports inégaux : Afghanistan (26 pays sans visa/à l’arrivée) vs Japon/Singapour (192) — Henley 2022.</li>
                <li><em>Harraga</em> (Maghreb) et drames : 2010‑2020 ≈20 000 morts en Méditerranée.</li>
                <li>Bangladesh : &gt;450 000 réfugiés politiques; forte vulnérabilité climatique (moussons, eustasie, fonte himalayenne). Mur indo‑bangladais (3 200 km) — « mur de la peur » (Libération, 2015).</li>
                <li>Diogène le Cynique : « citoyen du monde » — origine du terme « cosmopolite ».</li>
              </ul>

              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Diaspora indienne</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>≈30 M de personnes dans ~130 pays; soft power/lobbying; « Little India » (ex : La Chapelle, Paris).</li>
                <li>Communauté indienne aux USA (~4,5 M) : plus haut PIB/habitant parmi les minorités.</li>
                <li>Retour des talents (brain gain) dans les TIC (Bangalore) malgré la « brain drain » historique.</li>
                <li>Travailleurs peu qualifiés : pays du Golfe (depuis 1970’s) — système de la kafala; régimes circulatoires (ex : Kerala↔Golfo‑Persique).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationsPage;


