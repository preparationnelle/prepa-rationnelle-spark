import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Users, Clock, Award, CheckCircle, XCircle, Lightbulb,
  Globe, Home, ChevronRight, GraduationCap, MessageSquare,
} from 'lucide-react';

const traps = [
  ['Réciter un discours appris par cœur', 'Le jury perçoit immédiatement le candidat qui "débite". Audencia valorise l\'échange naturel avant tout.'],
  ['Parler d\'Audencia de façon générique', '"Bonne réputation, bonne école" sans mentionner Gaïa, le WWF, le plan ECOS ou Nantes = signal d\'un candidat qui n\'a pas fait ses recherches.'],
  ['Projet professionnel trop vague', '"Je veux travailler dans le business international" ne suffit pas. Il faut un secteur, une fonction cible et un lien logique avec votre parcours.'],
  ['Ignorer la dimension RSE', 'Ne montrer aucun engagement citoyen ni réflexion sur la responsabilité du manager peut nuire — c\'est au cœur de l\'identité Audencia.'],
  ['Dans "Regards croisés" : profil extrême', 'Monopoliser la parole ou rester passif — les deux sont pénalisés. Le jury évalue l\'écoute ET la prise de parole.'],
  ['Ne pas connaître Nantes', 'Le jury peut demander ce qui vous attire dans la ville (entreprises locales, culture, atouts). Ne pas avoir préparé = mauvais signal.'],
  ['Paraphraser le texte anglais', 'Le jury veut une problématique dégagée, pas une traduction. Structure attendue : synthèse + prise de position + discussion.'],
];

const AudenciaPage = () => (
  <div className="relative carnet-paper min-h-screen overflow-hidden">
    <div className="carnet-margin-line" />
    <div className="carnet-hole" style={{ top: 80 }} />
    <div className="carnet-hole" style={{ top: 220 }} />
    <div className="carnet-hole" style={{ top: 360 }} />

    <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-10">
      <nav className="mb-10">
        <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute gap-2">
          <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors"><Home className="h-3.5 w-3.5" /><span>Accueil</span></Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <Link to="/methodologie/entretiens-personnalite" className="hover:text-carnet-red transition-colors">Entretiens</Link>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <span className="carnet-eyebrow text-[11px]">Audencia</span>
        </div>
      </nav>

      <div className="mb-10">
        <Link to="/methodologie/entretiens-personnalite">
          <Button variant="ghost" className="group text-carnet-ink-soft hover:text-carnet-red px-3 font-instrument text-[13px] font-semibold uppercase tracking-[0.1em]">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />Retour aux fiches écoles
          </Button>
        </Link>
      </div>

      <div className="mb-16 max-w-[760px]">
        <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6"><Award className="h-3.5 w-3.5" />Fiche école · Ecricome</span>
        <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
          Audencia <em className="text-carnet-red not-italic">Business School</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft mb-8">
          Un format rénové en 2025 : débat collectif "Regards croisés" + entretien individuel + oral d'anglais — tout en une seule journée à Nantes.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock, label: 'Durée totale', value: '≈ 1h (3 épreuves)' },
            { icon: Award, label: 'Coefficient entretien', value: '13 (coeff. 5 + 8)' },
            { icon: Users, label: 'Format', value: '6-8 candidats + jury' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="carnet-card px-5 py-3 flex items-center gap-3">
              <Icon className="h-4 w-4 text-carnet-red flex-shrink-0" strokeWidth={1.8} />
              <div>
                <div className="font-instrument text-[11px] text-carnet-ink-mute uppercase tracking-[0.1em]">{label}</div>
                <div className="font-lora text-[17px] text-carnet-ink">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nouveau format 2025 */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 01 · Format 2025</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Nouveau format — 3 blocs distincts</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="carnet-card p-7 mb-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-carnet-red flex-shrink-0 mt-0.5" strokeWidth={1.8} />
            <div>
              <h3 className="font-lora text-[18px] text-carnet-ink mb-3">Refonte majeure depuis 2025 : le "Regards croisés"</h3>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Avant 2025, l'entretien débutait par un exposé individuel de 5 min sur une citation tirée au sort.
                Ce format a été <strong className="text-carnet-ink">entièrement remplacé</strong> par l'épreuve collective "Regards croisés".
                Audencia a voulu évaluer de nouvelles compétences : coopération, écoute active, leadership collaboratif, diplomatie relationnelle.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {[
            {
              n: '01', label: 'Regards croisés · Coeff. 5', title: 'Débat collectif de culture générale',
              content: '20 minutes de préparation individuelle : le groupe de 6 à 8 candidats découvre une citation ou une expression d\'un grand auteur tirée au sort. Chaque candidat note ses arguments. Répartition : une moitié défend la thèse, l\'autre l\'antithèse. 15 minutes de débat structuré devant le jury — 2 jurés observent sans intervenir. Chaque candidat reçoit une note individuelle (coeff. 5) malgré l\'exercice collectif.',
              items: ['Exemples de sujets : "La patience est-elle une vertu ?", "Peut-on rêver d\'être éternel ?"', 'Le jury observe sans intervenir', 'Note individuelle dans un exercice collectif'],
            },
            {
              n: '02', label: 'Entretien individuel · Coeff. 8', title: 'Questions motivation & projet',
              content: 'Sans exposé préalable (supprimé en 2025). Questions sur les motivations, le projet professionnel, la cohérence du parcours, les engagements extra-scolaires, et l\'intérêt pour Audencia et Nantes. La dimension RSE est intégrée naturellement à travers les questions — pas comme une rubrique séparée.',
              items: ['Questions sur Gaïa et le partenariat WWF attendues', 'Connaissance de Nantes et ses entreprises valorisée', 'Cohérence entre engagement et valeurs Audencia'],
            },
            {
              n: '03', label: 'Oral anglais · Coeff. 7', title: 'Texte de presse + discussion',
              content: '20 minutes de préparation (prise de notes autorisée) + ~20 minutes face au jury. Phase 1 : compte-rendu synthétique d\'un article de presse anglophone avec dégagement de la problématique (pas de paraphrase). Phase 2 : prise de position personnelle. Phase 3 : discussion avec le jury sur le sujet et des thèmes connexes.',
              items: ['Sources : The Guardian, Financial Times, The Economist', 'Niveau requis : B2 solide à C1', 'Discussion sur implications pour la France / l\'Europe attendue'],
            },
          ].map((ph) => (
            <div key={ph.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-lora text-[30px] text-carnet-red leading-none">{ph.n}</span>
                <div>
                  <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.15em] text-carnet-ink-mute">{ph.label}</span>
                  <h4 className="font-lora text-[19px] text-carnet-ink">{ph.title}</h4>
                </div>
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-4">{ph.content}</p>
              <ul className="space-y-1.5">
                {ph.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                    <CheckCircle className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RSE */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 02 · Valeurs RSE</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Audencia — la grande école RSE par excellence</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { t: 'Première école à signer le Global Compact ONU (2004)', d: 'Pionnière RSE depuis plus de 20 ans — avant que ce soit tendance.' },
            { t: 'Partenariat stratégique avec WWF France depuis 2010', d: 'Renouvelé plusieurs fois — engagement institutionnel fort et durable.' },
            { t: 'Gaïa — école interne transition écologique', d: 'Passage obligatoire pour tous les étudiants, condition d\'obtention du diplôme.' },
            { t: 'Plan ECOS', d: '100% des apprenants formés sur les ODD d\'ici 2025. Valeurs officielles : Innovation · Coopération · Responsabilité.' },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white border border-carnet-rule/30 rounded-lg p-5">
              <h4 className="font-lora text-[16px] text-carnet-ink mb-2">{t}</h4>
              <p className="font-instrument text-[13px] text-carnet-ink-soft">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-carnet-red rounded-r-lg p-6">
          <h4 className="font-lora text-[17px] text-carnet-ink mb-3">Questions RSE types à préparer</h4>
          <ul className="space-y-2">
            {[
              '"Connaissez-vous Gaïa ? Qu\'attendez-vous de ce parcours ?"',
              '"Avez-vous un engagement associatif ou citoyen ? Qu\'en avez-vous retiré ?"',
              '"Que pensez-vous du partenariat d\'Audencia avec le WWF ?"',
              '"Pouvez-vous citer une initiative RSE d\'une entreprise que vous admirez ?"',
              '"Qu\'est-ce que signifie pour vous être un manager responsable ?"',
            ].map((q) => (
              <li key={q} className="flex items-start gap-2 font-instrument text-[13.5px] text-carnet-ink-soft italic">
                <MessageSquare className="w-3.5 h-3.5 text-carnet-red mt-0.5 flex-shrink-0" strokeWidth={1.8} />{q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pièges */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">Section 03 · Pièges</span>
          <h2 className="font-lora text-[26px] sm:text-[32px] text-carnet-ink leading-tight">Les 7 erreurs spécifiques à Audencia</h2>
          <hr className="carnet-divider mt-4" />
        </div>
        <div className="space-y-3">
          {traps.map(([titre, raison], i) => (
            <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
              <div className="font-lora text-[28px] text-carnet-red leading-none flex-shrink-0 w-10 text-center">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-carnet-red flex-shrink-0" strokeWidth={1.8} />
                  <h5 className="font-lora text-[16px] text-carnet-ink">{titre}</h5>
                </div>
                <p className="font-instrument text-[13.5px] text-carnet-ink-soft">{raison}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 carnet-card px-8 py-10 flex flex-col items-start">
        <span className="carnet-eyebrow mb-4"><GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />Accompagnement</span>
        <h3 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink mb-3">Préparez vos oraux Audencia</h3>
        <hr className="carnet-divider w-full mb-5" />
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
          Nos coachs vous préparent au débat collectif, à l'entretien individuel RSE et à l'oral d'anglais avec des simulations en conditions réelles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/methodologie/entretiens-personnalite">
            <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">Voir toutes les fiches</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="font-instrument font-semibold text-carnet-ink hover:text-carnet-red py-6 px-8">Coaching personnalisé →</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AudenciaPage;
