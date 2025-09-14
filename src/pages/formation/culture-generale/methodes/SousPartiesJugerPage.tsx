import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SousPartiesJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow" />

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Construire et articuler les sous-parties</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Logiques de structuration, transitions efficaces et exemple appliqué au thème « Juger ».
            </p>
          </div>

          {/* 1. Pourquoi penser les sous-parties ? */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Pourquoi penser les sous-parties ?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>
                Une partie ne peut pas être un bloc homogène : elle progresse par <strong>sous-parties</strong>. Celles-ci doivent être
                <strong> équilibrées</strong> (3 en moyenne), suivre une <strong>logique claire</strong> et s’articuler par des <strong>transitions fluides</strong>.
              </p>
              <p>Les sous-parties sont la <em>charpente interne</em> de chaque grande partie.</p>
            </CardContent>
          </Card>

          {/* 2. Logiques possibles */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Logiques possibles pour structurer les sous-parties</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">a) Logique syllogistique (A → B → C)</h3>
                <p className="text-sm">On part d’une affirmation, on en tire une conséquence, puis on conclut provisoirement.</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>A : Juger est nécessaire pour distinguer le bien du mal.</li>
                  <li>B : Mais ce jugement suppose des normes qui varient selon les sociétés.</li>
                  <li>C : Dès lors, juger révèle autant nos valeurs que la réalité jugée.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">b) Distinction conceptuelle / définitoire</h3>
                <p className="text-sm">On éclaire le sujet en séparant plusieurs sens d’un même concept.</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Juger comme connaître (vrai/faux).</li>
                  <li>Juger comme appliquer une norme (droit / justice).</li>
                  <li>Juger comme apprécier une valeur (esthétique / morale).</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">c) Points de vue (collectif vs individuel)</h3>
                <p className="text-sm">Distinguer l’échelle de l’individu et celle de la collectivité.</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Nécessité personnelle : discernement et conscience.</li>
                  <li>Exigence sociale : justice, opinion publique.</li>
                  <li>Tension : conscience vs loi.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">d) Progression dialectique (thèse – antithèse – synthèse)</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Thèse : juger est indispensable pour rendre justice.</li>
                  <li>Antithèse : juger engendre souvent de l’injustice et du préjugé.</li>
                  <li>Synthèse : juger peut être légitime à condition d’être éclairé et impartial.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 3. Relier les sous-parties */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Relier les sous-parties — répertoire de connecteurs</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <div>
                <h4 className="font-semibold">Introduire la première</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>« On peut commencer par avancer que… »</li>
                  <li>« Tout d’abord, il convient de rappeler que… »</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Passer à la deuxième</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>« Il s’agit alors de comprendre que… »</li>
                  <li>« Mais cette analyse ne se limite pas à… »</li>
                  <li>« Toutefois, il faut reconnaître que… »</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Introduire la troisième</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>« Ainsi, il apparaît que… »</li>
                  <li>« Dès lors, on peut considérer que… »</li>
                  <li>« De ce fait, il est possible de montrer que… »</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 4. Exemple appliqué */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">4) Exemple appliqué (Partie I : La nécessité de juger)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Sous-partie 1</strong> : Tout d’abord, juger est indispensable pour distinguer le vrai du faux et ordonner notre rapport au réel.</li>
                <li><strong>Sous-partie 2</strong> : Mais il s’agit aussi de comprendre que juger ne se limite pas à connaître : il fonde l’ordre social en permettant de rendre justice.</li>
                <li><strong>Sous-partie 3</strong> : Ainsi, juger devient une exigence du vivre-ensemble, car il rend possible la reconnaissance mutuelle et le partage de normes communes.</li>
              </ul>
              <p className="text-sm">On retrouve une progression logique (connaissance → justice → société), introduite par des transitions souples.</p>
            </CardContent>
          </Card>

          {/* 5. Résumé pratique */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">5) Résumé pratique</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Chaque grande partie comporte ≈ <strong>3 sous-parties</strong>.</li>
                <li>Les sous-parties suivent une <strong>logique précise</strong> (syllogisme, distinctions, points de vue, dialectique).</li>
                <li>Elles sont <strong>annoncées et reliées</strong> avec des formules claires.</li>
                <li>Donner au correcteur une impression de <strong>progression continue</strong> et maîtrisée.</li>
              </ul>
              <div className="pt-4">
                <Link to="/formation/culture-generale/methodes">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des méthodes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SousPartiesJugerPage;


