import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransitionsJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Les transitions en dissertation de culture générale</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Méthode pour articuler logiquement les parties et exemples appliqués au thème « Juger ».
            </p>
          </div>

          {/* 1. Pourquoi essentielles */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Pourquoi les transitions sont essentielles</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>
                Une copie solide ne juxtapose pas trois blocs : chaque étape <strong>appelle la suivante</strong>. La transition :
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>résume ce qui a été établi ;</li>
                <li>met en évidence une <strong>limite</strong> ou une impasse ;</li>
                <li>ouvre logiquement sur la partie suivante en introduisant l’autre face du paradoxe.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. Structure */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Structure d’une transition</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><strong>Rappel</strong> — « Puisque l’on a établi que juger est indispensable pour organiser la société… »</li>
                <li><strong>Limite</strong> — « … force est de constater que ce jugement n’est jamais totalement impartial et peut engendrer des injustices. »</li>
                <li><strong>Ouverture</strong> — « Il convient donc de s’intéresser au risque d’erreur et d’injustice inhérent à tout jugement. »</li>
              </ol>
            </CardContent>
          </Card>

          {/* 3. Schémas types */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Schémas types</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p className="text-sm">Formule générale :</p>
              <p className="text-sm italic">« Puisque nous avons montré [A], mais que cette analyse rencontre la limite de [B], il faut désormais examiner [C]. »</p>
              <p className="text-sm">Connecteurs utiles :</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>« Dès lors… »</li>
                <li>« Toutefois… »</li>
                <li>« Il convient alors de comprendre… »</li>
                <li>« En effet… »</li>
              </ul>
            </CardContent>
          </Card>

          {/* 4. Exemples */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">4) Exemples appliqués au thème « Juger »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Transition I → II (du « nécessaire » au « dangereux »)</h3>
                <p className="text-sm">« Puisque nous avons établi que juger est indispensable pour distinguer le vrai, le juste et pour fonder le lien social, force est de constater que cet acte n’est jamais exempt de subjectivité et peut engendrer les pires injustices. Il convient donc d’examiner les risques et les limites du jugement, qu’il soit moral, juridique ou social. »</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Transition II → III (du « dangereux » aux « conditions de légitimité »)</h3>
                <p className="text-sm">« Si juger comporte toujours le risque de l’erreur et du préjugé, on ne saurait pour autant renoncer à juger, tant l’exigence de justice et de vérité demeure essentielle. Il s’agit alors de comprendre sous quelles conditions juger peut devenir un acte légitime, éclairé et constructif. »</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bouton retour en bas */}
      <div className="flex justify-center mt-12 pb-8">
        <Link to="/formation/culture-generale/methodes">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des méthodes</Button>
        </Link>
      </div>
    </div>
  );
};

export default TransitionsJugerPage;


