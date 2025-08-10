import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';

const ParticipationActivePage = () => {
  return (
    <div className="min-h-screen bg-[#FFF9FD]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-pink-700">
            <Link to="/" className="flex items-center gap-1 hover:text-pink-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-pink-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-pink-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <span className="font-bold text-pink-900">Participation active</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-pink-700" />
              </div>
              <div>
                <Badge className="bg-pink-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : dominer le cours — participation active, notes qui grimpent</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h3>Introduction</h3>
            <p>Imaginez-vous en cours de maths ECG : le prof démontre un théorème complexe, et vous notez frénétiquement sans vraiment capter. À la sortie, vous avez un script parfait, mais zéro compréhension — un piège courant en prépa ECG qui mène à des révisions interminables et des notes moyennes.</p>

            <h3>Le problème : passivité en cours, le frein majeur</h3>
            <p>En prépa ECG, les cours maths filent vite : démonstrations en chaîne, exercices basiques zappés, et vous voilà à scripter sans pause. Résultat ? Vous ne comprenez pas les démos, accumulez des blocages, et perdez du temps précieux sur des exos trop durs non adaptés. Pire, vous n'osez pas poser de questions.</p>

            <h3>La solution : soyez actif en cours pour progresser</h3>
            <p>C'est pas une question de génie, mais de méthode et d'organisation. Tirez le max du cours en arrivant préparé, interagissant, et sortant au niveau des top étudiants.</p>

            <h3>1. Préparez-vous avant le cours pour gagner du temps</h3>
            <p>Arrivez avec vos points de blocage identifiés. Relisez le chapitre précédent : notez 2–3 questions sur les bases ou exos simples. Cela libère du temps en cours pour les démos complexes. Allouez 20–30 min pré-cours ; intégrez à votre routine maths ECG.</p>

            <h3>2. Soyez actif pendant le cours : posez et participez</h3>
            <p>Ne scriptez pas tout — engagez-vous. Posez vos questions : si une démo bloque, levez la main : "Comment relie-t-on ça au théorème précédent ?" Interagissez : reformulez une idée. Évitez le piège : ne copiez pas mécaniquement ; notez clés et liens. Passez de 10% à 50% de maîtrise en une heure.</p>

            <h3>3. Organisez post-cours pour consolider et progresser</h3>
            <p>Après, mettez un temps limite : 45 min pour revoir notes, corriger blocages, et tester un exo simple. Notez erreurs dans un carnet ; reliez aux démos comprises en cours. Visez 15 de moyenne en DS et 18+ aux concours BCE en appliquant ça toute l'année.</p>

            <h3>4. Surmontez les barrières mentales</h3>
            <p>Ne vous sentez pas illégitime — poser questions est pro. C'est une question de méthode : organisez pour avoir le temps, et tout se passe bien. Si frustré par des exos inadaptés, revenez aux bases actives en cours.</p>

            <h3>Conclusion</h3>
            <p>Être actif en cours maths ECG — préparer blocages, poser questions, interagir — transforme passivité en maîtrise. Organisation clé : arrivez prêt, engagez-vous, consolidez post-cours pour passer de 10% à 50% compréhension. Pas de génie requis, juste méthode pour progresser, viser 15 en DS et 18+ aux concours BCE.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Retour à la méthodologie</Button></Link>
      </div>
    </div>
  );
};

export default ParticipationActivePage;