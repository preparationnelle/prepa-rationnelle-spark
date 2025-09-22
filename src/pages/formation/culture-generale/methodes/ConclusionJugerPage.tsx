import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ConclusionJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">La conclusion en dissertation de culture générale</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Rôle, structure en trois temps et exemple appliqué au sujet « Peut‑on juger sans condamner ? »
            </p>
          </div>

          {/* 1. Rôle */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Rôle de la conclusion</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>La conclusion n’est pas un résumé mécanique. Elle doit :</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>montrer la <strong>cohérence du raisonnement</strong> (enchaînement parties/sous‑parties) ;</li>
                <li>reformuler la <strong>réponse à la problématique</strong> clairement ;</li>
                <li>réactiver les <strong>concepts clés</strong> (objectivité, préjugé, droit positif, jugement esthétique, etc.) ;</li>
                <li>ouvrir intelligemment (retour à l’accroche ou élargissement).</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. Structure */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Structure de la conclusion</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Bilan argumentatif</h3>
                <p className="text-sm">Reformuler le cheminement intellectuel (pas l’énumération d’auteurs). Connecteurs : « Ainsi », « Dès lors », « En définitive ».</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Réponse à la problématique</h3>
                <p className="text-sm">Répondre à la question centrale et montrer la nuance/condition dégagée en III.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ouverture</h3>
                <p className="text-sm">Pas de question artificielle. Revenir à l’accroche ou élargir élégamment pour « boucler la boucle ».</p>
              </div>
            </CardContent>
          </Card>

          {/* 3. Exemple */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Exemple — « Peut‑on juger sans condamner ? »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold mb-1">Bilan</h3>
                <p className="text-sm">En définitive, nous avons montré que juger, au sens large, est bien plus qu’une condamnation : il est à la fois connaissance, discernement, critique et reconnaissance. Pourtant, juger est aussi exposé au danger du préjugé, de la subjectivité et de l’injustice. La réflexion a donc conduit à penser que juger ne peut être légitime qu’à certaines conditions : prudence (Aristote), impartialité (Kant), lucidité face aux pulsions et aux évaluations implicites (Nietzsche).</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Réponse à la problématique</h3>
                <p className="text-sm">On peut donc juger sans condamner, mais à condition de comprendre que juger ne signifie pas seulement punir : il s’agit d’un acte critique et constructif qui peut consacrer autant qu’il peut disqualifier.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ouverture</h3>
                <p className="text-sm">C’est peut‑être ce qui pousse Pascal, cité en introduction, à écrire que « l’homme n’aime point à être jugé ». Non pas parce que juger se réduit à condamner, mais parce que tout jugement, même positif, révèle à chacun qu’il n’échappe jamais au regard d’autrui.</p>
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

export default ConclusionJugerPage;


