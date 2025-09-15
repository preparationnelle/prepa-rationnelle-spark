import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpenCheck, Lightbulb, Quote } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-white rounded-xl shadow-sm border p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
  </section>
);

const Tip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-3 flex items-start gap-2 text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
    <Lightbulb className="h-4 w-4 mt-0.5" />
    <div>{children}</div>
  </div>
);

const IntroductionDissertationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh" className="hover:text-gray-800 transition-colors">Formation ESH ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/esh/methodologie" className="hover:text-gray-800 transition-colors">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-gray-800 font-medium">Réussir l’introduction de dissertation</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <BookOpenCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Réussir l’introduction d’une dissertation en économie</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            L’introduction donne la première impression au correcteur et structure ta réflexion. Elle suit quatre étapes: accroche, analyse du sujet, problématique, annonce du plan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Section title="1. L’accroche">
            <p>L’accroche capte l’attention et montre ta maîtrise de l’actualité et des concepts. Elle peut s’appuyer sur un fait économique, une statistique, une citation d’économiste, une déclaration d’autorité publique ou une idée reçue à déconstruire.</p>
            <Tip>⚠️ Elle doit être pertinente et crédible: c’est la première phrase lue par le correcteur, elle donne le ton.</Tip>
          </Section>

          <Section title="2. Définir et analyser le sujet">
            <ul>
              <li><strong>Définir les termes</strong> avec des références académiques (instituts, organisations internationales, économistes reconnus).</li>
              <li><strong>Identifier les ambiguïtés</strong> de termes polysémiques (ex: « prix », « concentration »…).</li>
              <li><strong>Préciser le cadre</strong> temporel, spatial et les acteurs concernés, avec justification.</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900 mt-3">
              <div className="font-medium mb-1">Exemple – Sujet: « La concurrence doit-elle être stimulée ? »</div>
              <p>On étudie la concurrence entre entreprises (champ pertinent pour l’action publique) et l’on situe l’analyse de la fin du XIXe siècle à aujourd’hui.</p>
            </div>
          </Section>

          <Section title="3. L’analyse du sujet et les questions clés">
            <p>Formule 2 à 3 questions directrices issues de ton analyse. Elles guident le devoir et ouvrent sur les parties.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900 mt-3">
              <p>La concurrence est-elle toujours bénéfique ? Dans quelles conditions peut-elle être nocive ? Quel rôle doit jouer l’État pour en stimuler ou en limiter les effets ?</p>
            </div>
            <Tip>Utilise des connecteurs logiques clairs: « or », « cependant », « dès lors », etc.</Tip>
          </Section>

          <Section title="4. La place des concepts économiques">
            <ul>
              <li>Appuie-toi sur quelques outils théoriques, avec sobriété.</li>
              <li>Ne cite jamais plus de trois auteurs; privilégie les formes adjectivées (croissance smithienne…).</li>
              <li>Si l’auteur est peu connu, indique nom complet, œuvre et date.</li>
            </ul>
            <Tip>Chaque référence doit être expliquée et reliée au sujet, jamais posée sans lien.</Tip>
          </Section>

          <Section title="5. La problématique">
            <p>Colonne vertébrale de la dissertation, concise (1–2 lignes), assez large pour nourrir trois parties.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900 mt-3">
              <div className="font-medium mb-1">Exemple</div>
              <p>Dans quelle mesure la stimulation de la concurrence contribue-t-elle à la croissance et au bien-être collectif, et quelles limites peut-elle rencontrer ?</p>
            </div>
          </Section>

          <Section title="6. L’annonce du plan">
            <p>Élégante et logique; bannis « dans un premier temps… ». Préfère des enchaînements: « Si…, alors…, cependant… » ou « Après avoir montré que…, il convient d’examiner…, avant de s’interroger sur… ».</p>
            <ul>
              <li><strong>Historique</strong>: évolution dans le temps.</li>
              <li><strong>Dialectique</strong>: thèse, antithèse, conditions d’une synthèse.</li>
              <li><strong>Thématique</strong>: dimensions différentes (nationale, régionale, internationale…).</li>
            </ul>
            <Tip>La troisième partie doit être solide. Si elle est artificielle, mieux vaut trois parties avec deux sous-parties chacune que deux grandes parties.</Tip>
          </Section>

          <section className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2"><Quote className="h-5 w-5 text-blue-600" />Modèle ultra-synthétique</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              <li>Accroche pertinente et factuelle</li>
              <li>Définition précise des termes + cadrage</li>
              <li>2–3 questions clés guidant l’analyse</li>
              <li>Références conceptuelles brèves et utiles</li>
              <li>Problématique claire</li>
              <li>Annonce de plan logique en trois parties</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntroductionDissertationPage;


