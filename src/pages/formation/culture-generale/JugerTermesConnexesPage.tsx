import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Scale, Gavel, Landmark, Home, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const JugerTermesConnexesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating orange/blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse" />

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/culture-generale" className="hover:text-foreground transition-colors">Culture générale</Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Juger</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-8 px-4 sm:px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Juger — termes connexes et définitions</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cartographie claire du verbe « juger » : distinctions, éléments intrinsèques, grands types de jugements, attitudes et concepts clés.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">Culture générale</span>
              <span className="px-4 py-2 border border-blue-200 text-blue-700 rounded-full text-sm font-medium">Fiche notion</span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-10">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-blue-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-xl text-orange-800">Pourquoi cartographier « juger » ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              <p>« Juger » est un acte transversal. Cette fiche organise les notions pour gagner en clarté et éviter les confusions fréquentes.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clarifier les distinctions clés (juger, jugement, justice, opinion, condamner).</li>
                <li>Identifier les pôles internes : sujet, objet, norme, finalité.</li>
                <li>Parcourir les principaux contextes (droit, morale, art, science, pratique, politique, religion).</li>
                <li>Mettre en lumière attitudes, biais et enjeux de pouvoir.</li>
              </ul>
            </CardContent>
          </Card>

          <div>
            <SectionHeader title="Distinctions fondamentales" subtitle="Les confusions à éviter d’emblée" />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Juger vs Jugement</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Juger = <strong>processus</strong> ; jugement = <strong>résultat</strong>. Penser l’acte plutôt que le seul produit.</CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-400">
                <CardHeader><CardTitle>Juger vs Justice</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">La justice est une <strong>norme</strong> et une <strong>institution</strong>. On peut juger hors du juridique : la justice est un cas particulier.</CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Juger est-il condamner ?</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Condamner est un <strong>type</strong> de jugement. Juger peut aussi <strong>approuver</strong>, <strong>absoudre</strong> ou <strong>consacrer</strong>.</CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-400">
                <CardHeader><CardTitle>Opinion/Avis vs Jugement</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">L’opinion est souvent <strong>non justifiée</strong>. Le jugement exige <strong>critères</strong> et <strong>arguments</strong>.</CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Critique, Évaluer, Apprécier</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">La critique est un <strong>jugement argumenté</strong>. Évaluer mesure; apprécier/estimer portent une valeur globale.</CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-400">
                <CardHeader><CardTitle>Décider/Arbitrer/Trancher — Préjuger</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Juger aboutit à une <strong>décision</strong>. Le <em>préjugé</em> est un jugement <strong>prématuré</strong>.</CardContent>
              </Card>
            </div>
          </div>

          <div>
            <SectionHeader title="Éléments intrinsèques de l’acte de juger" subtitle="Sujet, objet, norme, finalité" />
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="sujet">
                <AccordionTrigger>Le sujet qui juge</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">Individu, expert, juge, collectif… Enjeux: <strong>légitimité</strong>, <strong>compétence</strong>, <strong>impartialité</strong>.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="objet">
                <AccordionTrigger>L’objet du jugement</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">Acte, personne, œuvre, thèse. Distinguer <strong>fait</strong> et <strong>valeur</strong>; fidélité à l’objet vs projection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="norme">
                <AccordionTrigger>La norme et les critères</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">Référent explicite/implicite; <strong>validité</strong> des normes; création de norme (jurisprudence).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="finalite">
                <AccordionTrigger>La finalité</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700">Connaître (vérité), sanctionner (justice), décider (pratique), communiquer (sens commun).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <SectionHeader title="Types de jugements" subtitle="Domaines d’application" />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-orange-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5 text-orange-600" /> Juridique</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">Procès, verdict, preuve, présomption d’innocence. Application de normes; part d’interprétation.</CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Scale className="h-5 w-5 text-blue-600" /> Moral</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">Bien/mal, responsabilité, conscience; universalismes vs relativismes.</CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Esthétique</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Beau/laid, goût, canon; universalité subjective (Kant), facteurs sociaux (Bourdieu).</CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-400">
                <CardHeader><CardTitle>Connaissance</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Vrai/faux, preuve, inférence; jugements de fait vs de valeur.</CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Pratique (prudence)</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Phronèsis: décision contextuelle juste; articulation principes/circonstances.</CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-400">
                <CardHeader><CardTitle>Politique</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Opinion publique, décision collective, responsabilité; jugement de l’Histoire.</CardContent>
              </Card>
              <Card className="md:col-span-2 hover:shadow-lg transition-all border-l-4 border-l-orange-400">
                <CardHeader><CardTitle>Religieux</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">Jugement divin, salut/damnation, pardon; horizon eschatologique.</CardContent>
              </Card>
            </div>
          </div>

          <div>
            <SectionHeader title="Attitudes, biais et enjeux" />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-blue-400"><CardHeader><CardTitle>Impartialité vs Partialité</CardTitle></CardHeader><CardContent className="text-sm text-gray-700">Idéal régulateur; dispositifs anti-biais (double anonymat, contradictoire).</CardContent></Card>
              <Card className="border-l-4 border-l-orange-400"><CardHeader><CardTitle>Biais cognitifs et erreurs</CardTitle></CardHeader><CardContent className="text-sm text-gray-700">Confirmation, ancrage, halo; valeur de la suspension provisoire et du doute méthodique.</CardContent></Card>
              <Card className="border-l-4 border-l-blue-400"><CardHeader><CardTitle>Tolérance et compréhension</CardTitle></CardHeader><CardContent className="text-sm text-gray-700">Comprendre n’est pas excuser; juger avec écoute et mesure.</CardContent></Card>
              <Card className="border-l-4 border-l-orange-400"><CardHeader><CardTitle>Pouvoir, identité, liberté de juger</CardTitle></CardHeader><CardContent className="text-sm text-gray-700">Le jugement façonne les personnes et soi-même (reconnaissance, stigmatisation, autonomie).</CardContent></Card>
            </div>
          </div>

          <div>
            <SectionHeader title="Concepts philosophiques (aperçu)" />
            <Accordion type="multiple" className="max-w-4xl mx-auto">
              <AccordionItem value="kant"><AccordionTrigger>Faculté de juger (Kant)</AccordionTrigger><AccordionContent className="text-sm text-gray-700">Déterminant (appliquer une règle) vs réfléchissant (chercher la règle). Pont universel/particulier.</AccordionContent></AccordionItem>
              <AccordionItem value="apories"><AccordionTrigger>Apories et dilemmes</AccordionTrigger><AccordionContent className="text-sm text-gray-700">Juste vs vrai; équité vs loi; comprendre vs juger; temps du jugement.</AccordionContent></AccordionItem>
              <AccordionItem value="auto"><AccordionTrigger>« Tout jugement est autoportrait »</AccordionTrigger><AccordionContent className="text-sm text-gray-700">Le jugement révèle le juge (valeurs, goûts, projections); appel à la réflexivité.</AccordionContent></AccordionItem>
              <AccordionItem value="epoche"><AccordionTrigger>Suspension du jugement (épochè)</AccordionTrigger><AccordionContent className="text-sm text-gray-700">Méthode sceptique/cartésienne pour éviter la précipitation; équilibre avec l’action.</AccordionContent></AccordionItem>
            </Accordion>
          </div>

          <div>
            <SectionHeader title="Sources" />
            <Card className="max-w-4xl mx-auto">
              <CardHeader><CardTitle>Pour aller plus loin</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analyses Mister Prépa (Coline Faivre, Iliane Chikhaoui).</li>
                  <li>Major-Prépa — Présentation du programme « Juger ».</li>
                  <li>CNRTL — Définitions « juger », « critique ».</li>
                  <li>Nietzsche — Le Crépuscule des idoles; Bourdieu — La Distinction; Kant — CFJ.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JugerTermesConnexesPage;


