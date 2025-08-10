import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowLeft } from 'lucide-react';

const AnnalesStrategiePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FFF9]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-green-700">
            <Link to="/" className="flex items-center gap-1 hover:text-green-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-green-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-green-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <span className="font-bold text-green-900">Dompter les annales</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : dompter les annales — quand, pourquoi, comment (sous contrainte de temps)</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h3>Introduction</h3>
            <p>« Faire des annales sans chrono, c'est s'entraîner sans adversaire. » Les annales ne sont pas de simples sujets "en plus" : elles font passer votre préparation du laboratoire à l'arène. Mal utilisées, elles épuisent et découragent ; exploitées au bon moment, elles transforment vos acquis en points réels.</p>

            <h3>Le problème : annales mal utilisées, un gaspillage</h3>
            <p>En prépa ECG, l'envie de "s'entraîner pour de vrai" pousse à enchaîner annales BCE dès la première année, souvent sans fondations. Vous donnez tout en colle ou DS, bachotez des sujets complexes, mais progressez peu — pourquoi ? Sans continuité dans la difficulté, vous ratez attentes jury : rigueur, gestion temps, et priorisation questions.</p>

            <h3>La solution : quand, pourquoi et comment travailler les annales</h3>
            <p>Intégrez annales BCE progressivement, comme continuité après cours et exos. Focalisez sur attentes exactes, préparation mentale, chrono réel, et gestion épreuve — toujours noter erreurs dans un carnet.</p>

            <h3>1. Quand commencer : pas trop tôt, pour une progression logique</h3>
            <p>Évitez annales en début prépa ECG ; priorisez exos classiques pour bases. Fin première année : après assimilation cours et exercices d'application, débutez avec accessibles : EDHEC (moyenne 10–11/20, questions standard). Deuxième année, dès février : intensifiez : passez à EM Lyon (équilibrée, moyenne 10,4/20), puis parisiennes (HEC-ESSEC, 40–54% suffit pour 20/20).</p>

            <h3>2. Pourquoi les travailler : quatre bénéfices clés</h3>
            <ul>
              <li><strong>Voir attentes exactes</strong> : format questions, thèmes récurrents (algèbre linéaire, probas ECG), et rigueur jury.</li>
              <li><strong>Être prêt mentalement</strong> : habituez à pression ; apprenez réfléchir long (HEC) ou multi-exercices (EDHEC).</li>
              <li><strong>Se chronométrer en temps réel</strong> : gérez 3–4h ; traitez beaucoup questions sans bloquer.</li>
              <li><strong>Apprendre gérer épreuve</strong> : survol rapide pour prioriser.</li>
            </ul>
            <p>Toujours noter erreurs : carnet pour éviter répétitions, crucial BCE.</p>

            <h3>3. Comment les travailler : sous contrainte temps, efficacement</h3>
            <p>Simulez conditions : calme, chrono strict. Pas de groupe au début — solo pour autonomie. Commencez accessibles : EDHEC pour questions classiques ; analysez corrigés profs. Passez progressif : EM Lyon pour équilibre ; parisiennes pour réflexion poussée. Survol épreuve (5–10 min) : identifiez faciles/chronophages, priorisez. Pour difficiles : listez "ce qu'on a" (données), "ce qu'on veut" (résultat) ; rédigez clair.</p>

            <h3>Conclusion</h3>
            <p>Travailler annales BCE en prépa ECG exige timing précis : fin première année pour accessibles (EDHEC), intensification deuxième pour difficiles (parisiennes). Pourquoi ? Pour attentes jury, préparation temps réel, lacunes corrigées, confiance gagnée. Comment ? Survol priorisation, rédaction rigoureuse, analyse erreurs — toujours carnet à jour.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Retour à la méthodologie</Button></Link>
      </div>
    </div>
  );
};

export default AnnalesStrategiePage;