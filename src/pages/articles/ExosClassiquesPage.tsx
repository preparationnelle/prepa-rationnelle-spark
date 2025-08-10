import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ExosClassiquesPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF8]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-amber-700">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-amber-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-amber-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <span className="font-bold text-amber-900">Exos classiques</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <Badge className="bg-amber-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : domptez les exos classiques — doublez votre progression</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h3>Introduction</h3>
            <p>Vous tournez en rond sur les sujets d'annales ? Le déclic se joue bien avant. En prépa ECG, les exercices classiques sont la forge où s'acquièrent réflexes, rigueur et créativité. Travaillés dans une boucle d'exos intelligente — chercher, rédiger, corriger, recommencer — ils transforment chaque ligne de calcul en points sûrs au concours BCE.</p>

            <h3>Le problème : exercices négligés, le frein à la progression</h3>
            <p>En prépa ECG, les exercices classiques — ces basiques d'application du cours — sont souvent boudés pour des annales BCE plus "prestigieuses". Vous passez des heures sur un sujet complexe, sans rien retenir, car les fondations manquent. Pire, les calculatoires (dérivées, matrices) paraissent barbants, menant à des erreurs stupides sous pression.</p>

            <h3>La solution : exercices classiques et boucle pour maîtriser</h3>
            <p>Passez à une stratégie gagnante : exercices classiques d'abord, boucle répétitive ensuite. Qualité prime ; développez créativité et rigueur pour concours BCE.</p>

            <h3>1. Priorisez les exercices classiques pour ancrer le cours</h3>
            <p>Commencez par des exos simples liés au chapitre : systèmes linéaires en algèbre, limites en analyse ECG. Ils construisent intuition — apprendre à calculer, réfléchir patterns. Prenez temps : relisez cours, recopiez points clés (théorèmes, hypothèses). Rédigez rigoureusement : une étape par ligne pour automatiser. Pourquoi cruciaux ? Ils évitent illusions ; refaites-les pour voir ce qui cloche.</p>

            <h3>2. Implémentez la boucle des exos : répétez pour progresser</h3>
            <p>La boucle ? Refaites exos classiques plusieurs fois, réfléchies. Vital — c'est là que tout se joue pour automatismes durables. Répétez stratégiquement : première fois recherche solo. Deuxième : analysez erreurs, fiche méthodes. Troisième : sous chrono pour gestion temps. Ne sautez pas dérivées ou intégrales ECG ; pratique régulière gagne vitesse, réduit fautes. Développez créativité : résolvez de multiples façons.</p>

            <h3>3. Travaillez en groupe intelligemment, sans oublier solo</h3>
            <p>Abordez exos ensemble après recherche individuelle — fructueux pour feedback. Phase solo d'abord (conditions réelles). Puis comparez : méthodes, rigueur rédaction, propreté copie. Corrigez mutuellement via profs. À l'approche BCE : intégrez annales en groupe : discutez points manqués, mais finissez seul pour autonomie.</p>

            <h3>4. Évitez pièges : qualité vs quantité, annales au bon moment</h3>
            <p>Ne perdez pas temps sur annales prématurées — hérésie ! Bases d'abord pour progrès durables. Qualité prime : cherchez profondeur ; revenez cours à chaque exo pour mémorisation. Apprenez réfléchir : exercices classiques forgent calcul, réflexion, créativité — essentiels BCE.</p>

            <h3>Conclusion</h3>
            <p>Travailler exercices maths ECG efficacement repose sur classiques pour bases, boucle répétitive pour automatismes, et groupe pour feedback — qualité l'emporte sur quantité. Évitez annales trop tôt ; focalisez rigueur, calcul, créativité pour progrès fous et notes boostées aux concours BCE.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Retour à la méthodologie</Button></Link>
      </div>
    </div>
  );
};

export default ExosClassiquesPage;