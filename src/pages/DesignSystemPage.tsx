import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Copy, Check, Calculator, Code, Languages, Globe, GraduationCap,
  BookOpen, Users, Star, TrendingUp, Zap, ChevronRight, Sparkles,
  Palette, Box, Type, Layers, Heart, Play, ArrowRight, Pencil, Highlighter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DesignSystemPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('colors');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ─────────────────────────────────────────────────────────────────
  //  Composants internes — style carnet
  // ─────────────────────────────────────────────────────────────────
  const ColorSwatch = ({ name, hex, token, description, light = false }: {
    name: string; hex: string; token: string; description?: string; light?: boolean;
  }) => (
    <div className="group relative">
      <div
        className="w-full h-32 rounded-md border border-[rgba(78,55,30,0.18)] cursor-pointer relative overflow-hidden transition-shadow hover:shadow-[0_8px_24px_rgba(78,55,30,0.10)]"
        style={{ backgroundColor: hex }}
        onClick={() => copyToClipboard(hex, `color-${hex}`)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copiedCode === `color-${hex}` ? (
            <div className="bg-carnet-paper-2 rounded-full p-2.5 shadow-md">
              <Check className="h-5 w-5 text-carnet-red" />
            </div>
          ) : (
            <div className="bg-carnet-paper-2 rounded-full p-2.5 shadow-md">
              <Copy className="h-5 w-5 text-carnet-ink" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <div className="font-lora text-[18px] text-carnet-ink leading-tight">{name}</div>
        <div className="font-mono-jb text-[12px] text-carnet-ink-mute mt-0.5">{hex}</div>
        <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mt-1">{token}</div>
        {description && <div className="font-instrument text-[12px] text-carnet-ink-soft mt-1 italic">{description}</div>}
      </div>
    </div>
  );

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative bg-carnet-ink rounded-md p-7 overflow-x-auto border border-[rgba(78,55,30,0.18)]">
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-2 bg-[rgba(251,246,234,0.08)] hover:bg-carnet-red rounded transition-colors"
        aria-label="Copier le code"
      >
        {copiedCode === id ? (
          <Check className="h-4 w-4 text-carnet-paper" />
        ) : (
          <Copy className="h-4 w-4 text-[rgba(251,246,234,0.7)]" />
        )}
      </button>
      <pre className="font-mono-jb text-[13px] text-[rgba(251,246,234,0.95)] leading-relaxed whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );

  const SectionHead = ({ title, id, eyebrow, anno }: {
    title: React.ReactNode; id?: string; eyebrow: string; anno?: string;
  }) => (
    <div id={id} className="scroll-mt-32 mb-10 relative">
      <div className="carnet-eyebrow mb-4">{eyebrow}</div>
      <h2 className="font-lora text-[40px] md:text-[52px] leading-[1.05] tracking-[-0.022em] text-carnet-ink">
        {title}
      </h2>
      {anno && (
        <div
          className="carnet-hand absolute hidden md:block pointer-events-none"
          style={{ right: 0, top: 32, fontSize: 26, transform: 'rotate(-3deg)', maxWidth: 180, lineHeight: 1.1, textAlign: 'right' }}
        >
          {anno}
        </div>
      )}
      <div className="mt-4 h-[1px] w-16 bg-carnet-red"></div>
    </div>
  );

  const navItems = [
    { id: 'colors', label: 'Couleurs', icon: <Palette className="h-3.5 w-3.5" /> },
    { id: 'typography', label: 'Typo', icon: <Type className="h-3.5 w-3.5" /> },
    { id: 'buttons', label: 'Boutons', icon: <Box className="h-3.5 w-3.5" /> },
    { id: 'cards', label: 'Cards', icon: <Layers className="h-3.5 w-3.5" /> },
    { id: 'icons', label: 'Icônes', icon: <Sparkles className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="min-h-screen carnet-paper relative">
      {/* Marge rouge + perforations (desktop) */}
      <div className="carnet-margin-line"></div>
      {[140, 460, 780, 1100, 1420, 1740, 2060, 2380, 2700, 3020, 3340, 3660, 3980, 4300, 4620].map((top) => (
        <div key={top} className="carnet-hole" style={{ top }}></div>
      ))}

      {/* Sticky nav — pilules style carnet */}
      <div className="sticky top-16 z-40 bg-[rgba(251,246,234,0.92)] backdrop-blur-md border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-3.5">
          <nav className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-instrument font-semibold text-[13px] transition-all",
                  activeSection === item.id
                    ? "bg-carnet-ink text-carnet-paper"
                    : "bg-carnet-paper-2 text-carnet-ink-soft hover:bg-carnet-paper hover:text-carnet-red border border-[rgba(78,55,30,0.18)]"
                )}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-16 relative z-10">

        {/* ─────────────────────────────────────────────
             HERO
           ───────────────────────────────────────────── */}
        <div className="text-center mb-24 relative pt-8">
          <div className="carnet-eyebrow mb-6">Charte graphique · v3 — Carnet</div>

          {/* Annotation manuscrite */}
          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ left: '12%', top: 100, fontSize: 28, transform: 'rotate(-8deg)', maxWidth: 130, lineHeight: 1.1, textAlign: 'left' }}
          >
            ↘ comme une<br/>copie de prépa
          </div>

          <h1 className="font-lora text-[56px] sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.98] tracking-[-0.022em] text-carnet-ink max-w-[1100px] mx-auto" style={{ textWrap: 'balance' as never }}>
            La charte{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span
                className="text-[#9C8772]"
                style={{ textDecoration: 'line-through', textDecorationColor: '#C1443A', textDecorationThickness: '4px' }}
              >
                système
              </span>
              <span
                className="absolute carnet-hand italic whitespace-nowrap"
                style={{ top: '-0.62em', left: '0.2em', fontSize: '0.84em', color: '#C1443A', transform: 'rotate(-4deg)', fontWeight: 600 }}
              >
                cahier
              </span>
            </span>
            <br/>
            <em className="font-lora italic text-carnet-red">Prépa Rationnelle</em>.
          </h1>

          <p className="font-instrument text-[18px] sm:text-[21px] text-carnet-ink-soft max-w-[640px] mx-auto leading-[1.55] mt-12">
            Un design qui parle de pédagogie : <span className="carnet-hl font-lora italic">papier crème</span>,
            ratures rouges, annotations à la main et italiques en marge.
            La rigueur d'un correcteur, la chaleur d'un grand frère.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#colors">
              <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] py-[18px] px-7 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto">
                <Pencil className="mr-2 h-4 w-4" /> Explorer le système
              </Button>
            </a>
            <a href="#typography" className="relative font-instrument text-[15px] font-medium text-carnet-ink py-4 px-5">
              Voir la typo →
              <svg className="absolute -left-2.5 -top-2 w-[180px] h-[50px] pointer-events-none" viewBox="0 0 180 50">
                <ellipse cx="90" cy="25" rx="85" ry="20" fill="none" stroke="#C1443A" strokeWidth="2" strokeDasharray="3 4" opacity="0.7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
             1. COULEURS
           ───────────────────────────────────────────── */}
        <section id="colors" className="mb-28 scroll-mt-32 relative">
          <SectionHead
            eyebrow="01 · Palette"
            title={<>Les couleurs du <em className="font-lora italic text-carnet-red">cahier</em>.</>}
            anno={"↘ chaque couleur\na un rôle précis"}
          />

          <p className="font-instrument text-[17px] text-carnet-ink-soft leading-[1.6] max-w-[640px] mb-10">
            Une palette inspirée d'une copie de prépa : <span className="carnet-hl font-lora italic">papier crème</span> en fond,
            encre brune pour le texte, rouge correcteur pour l'accent, surlignage stabilo jaune pour les phrases-clés.
          </p>

          <h3 className="font-lora text-[24px] text-carnet-ink mb-5 flex items-center gap-3">
            <span className="carnet-hand text-carnet-red text-[28px]">A.</span>
            Couleurs du papier
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12">
            <ColorSwatch name="Paper" hex="#FBF6EA" token="bg-carnet-paper" description="Fond principal — papier crème ligné" />
            <ColorSwatch name="Paper 2" hex="#FFFEF8" token="bg-carnet-paper-2" description="Cards — légèrement plus claires" />
            <ColorSwatch name="Highlight" hex="#FFE178" token="carnet-hl" description="Stabilo jaune sur phrases-clés" />
            <ColorSwatch name="Rule" hex="rgba(78,55,30,0.18)" token="border-dashed" description="Filet pointillé entre sections" />
          </div>

          <h3 className="font-lora text-[24px] text-carnet-ink mb-5 flex items-center gap-3">
            <span className="carnet-hand text-carnet-red text-[28px]">B.</span>
            Encre &amp; correcteur
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12">
            <ColorSwatch name="Ink" hex="#1F1714" token="text-carnet-ink" description="Texte principal — encre brune" />
            <ColorSwatch name="Ink Soft" hex="#4A3D30" token="text-carnet-ink-soft" description="Texte secondaire" />
            <ColorSwatch name="Ink Mute" hex="#8A7864" token="text-carnet-ink-mute" description="Légendes, labels" />
            <ColorSwatch name="Red" hex="#C1443A" token="text-carnet-red" description="Stylo correcteur, accents" />
          </div>

          <CodeBlock
            id="colors-usage"
            code={`/* Tokens carnet — tailwind.config.ts */
carnet: {
  paper:    '#FBF6EA',  // fond papier crème
  'paper-2':'#FFFEF8',  // cards
  ink:      '#1F1714',  // texte principal
  'ink-soft':'#4A3D30', // texte secondaire
  red:      '#C1443A',  // accent / correcteur
  highlight:'rgba(255,225,120,0.55)',
}

/* Usage */
className="bg-carnet-paper text-carnet-ink"
className="text-carnet-red font-lora italic"  // accent
<span className="carnet-hl">phrase-clé</span>  // stabilo`}
          />
        </section>

        {/* ─────────────────────────────────────────────
             2. TYPOGRAPHIE
           ───────────────────────────────────────────── */}
        <section id="typography" className="mb-28 scroll-mt-32 relative">
          <SectionHead
            eyebrow="02 · Typographie"
            title={<>Quatre familles, <em className="font-lora italic text-carnet-red">une voix</em>.</>}
            anno={"↗ Lora pour\nles titres"}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
            {/* Lora */}
            <div className="carnet-card p-8 carnet-tilt-l">
              <div className="carnet-eyebrow text-[10px] mb-3">Serif éditoriale</div>
              <div className="font-lora text-[56px] leading-[1] text-carnet-ink mb-2">Lora</div>
              <div className="font-lora italic text-[28px] text-carnet-red leading-[1.1] mb-4">en italique</div>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                <strong>Titres</strong>, accents éditoriaux, citations.
                L'italique rouge sert à mettre en valeur une notion-clé — comme une note dans la marge.
              </p>
              <div className="mt-4 font-mono-jb text-[11px] text-carnet-ink-mute">font-lora · 400/500/600</div>
            </div>

            {/* Instrument Sans */}
            <div className="carnet-card p-8 carnet-tilt-r">
              <div className="carnet-eyebrow text-[10px] mb-3">Sans-serif lecture</div>
              <div className="font-instrument text-[56px] leading-[1] text-carnet-ink mb-2 font-semibold">Instrument</div>
              <div className="font-instrument text-[24px] text-carnet-ink-soft mb-4">Sans</div>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                <strong>Corps de texte</strong>, paragraphes, labels.
                Une sans-serif neutre qui laisse le serif briller dans les titres.
              </p>
              <div className="mt-4 font-mono-jb text-[11px] text-carnet-ink-mute">font-instrument · 400/500/600/700</div>
            </div>

            {/* Caveat */}
            <div className="carnet-card p-8 carnet-tilt-r">
              <div className="carnet-eyebrow text-[10px] mb-3">Manuscrite</div>
              <div className="carnet-hand text-[64px] leading-[1] mb-2">Caveat</div>
              <div className="carnet-hand text-[28px] mb-4" style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}>
                ↗ ici, le déclic
              </div>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                <strong>Annotations manuscrites</strong>, notes en marge, chiffres-clés,
                corrections au stylo rouge. Toujours en rouge correcteur.
              </p>
              <div className="mt-4 font-mono-jb text-[11px] text-carnet-ink-mute">font-hand · 400/600/700</div>
            </div>

            {/* JetBrains Mono */}
            <div className="carnet-card p-8 carnet-tilt-l">
              <div className="carnet-eyebrow text-[10px] mb-3">Mono</div>
              <div className="font-mono-jb text-[44px] leading-[1] text-carnet-ink mb-2 font-medium">JetBrains</div>
              <div className="font-mono-jb text-[22px] text-carnet-ink-soft mb-4">Mono</div>
              <hr className="carnet-divider mb-4" />
              <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                <strong>Code, formules, matrices</strong>. Réservé aux blocs techniques —
                Hadamard, démonstrations, exemples Python.
              </p>
              <div className="mt-4 font-mono-jb text-[11px] text-carnet-ink-mute">font-mono-jb · 400/500/600</div>
            </div>
          </div>

          {/* Échelle des titres */}
          <div className="carnet-card p-10">
            <div className="carnet-eyebrow mb-6">Échelle des titres — Lora</div>
            <div className="space-y-7">
              {[
                { size: 'text-[112px]', label: 'H1 — Hero', leading: 'leading-[0.98]', mono: 'lg:text-[112px]' },
                { size: 'text-[64px]', label: 'H1 — section', leading: 'leading-[1.05]', mono: 'text-[64px]' },
                { size: 'text-[52px]', label: 'H2 — section', leading: 'leading-[1.1]', mono: 'text-[52px]' },
                { size: 'text-[36px]', label: 'H3 — sous-section', leading: 'leading-[1.15]', mono: 'text-[36px]' },
                { size: 'text-[24px]', label: 'H4 — card', leading: 'leading-[1.25]', mono: 'text-[24px]' },
              ].map((h, idx) => (
                <div key={idx} className="border-b border-dashed border-[rgba(78,55,30,0.10)] pb-5 last:border-0 last:pb-0">
                  <div className={`font-lora ${h.size} ${h.leading} text-carnet-ink`}>
                    Aa <em className="font-lora italic text-carnet-red">éditorial</em>
                  </div>
                  <div className="font-mono-jb text-[11px] text-carnet-ink-mute mt-2">{h.label} · {h.mono}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
             3. BOUTONS
           ───────────────────────────────────────────── */}
        <section id="buttons" className="mb-28 scroll-mt-32 relative">
          <SectionHead
            eyebrow="03 · Boutons"
            title={<>CTAs <em className="font-lora italic text-carnet-red">au stylo</em>.</>}
            anno={"↘ entouré au\nfeutre rouge"}
          />

          <div className="carnet-card p-10 space-y-12">
            {/* Primary */}
            <div>
              <div className="carnet-eyebrow text-[10px] mb-5">A · Primaire — encre noire pleine</div>
              <div className="flex flex-wrap items-center gap-5">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[16px] py-[20px] px-8 rounded-full border-0 hover:-translate-y-0.5 transition-all h-auto">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Regarder la vidéo
                </Button>
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[14px] py-[14px] px-6 rounded-full border-0 h-auto">
                  Bouton normal
                </Button>
                <Button size="sm" className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[12px] rounded-full border-0">
                  Petit
                </Button>
              </div>
            </div>

            <hr className="carnet-divider" />

            {/* Red CTA */}
            <div>
              <div className="carnet-eyebrow text-[10px] mb-5">B · CTA rouge — sur fond sombre</div>
              <div className="bg-carnet-ink rounded-md p-8 flex flex-wrap items-center gap-4">
                <Button className="bg-carnet-red hover:bg-[#9E342B] text-carnet-paper font-instrument font-semibold text-[16px] py-[20px] px-8 rounded-full border-0 h-auto">
                  <ArrowRight className="mr-2 h-4 w-4" /> Réserver mon premier cours
                </Button>
                <span className="carnet-hand text-[24px]" style={{ color: '#C1443A', transform: 'rotate(-4deg)', display: 'inline-block' }}>
                  ↗ par ici !
                </span>
              </div>
            </div>

            <hr className="carnet-divider" />

            {/* Ghost cerclé */}
            <div>
              <div className="carnet-eyebrow text-[10px] mb-5">C · Ghost — entouré au stylo rouge</div>
              <div className="flex flex-wrap items-center gap-10">
                <a href="#" className="relative font-instrument text-[15px] font-medium text-carnet-ink py-4 px-5 inline-block">
                  Découvrir la méthode →
                  <svg className="absolute -left-2.5 -top-2 w-[220px] h-[50px] pointer-events-none" viewBox="0 0 220 50">
                    <ellipse cx="110" cy="25" rx="105" ry="20" fill="none" stroke="#C1443A" strokeWidth="2" strokeDasharray="3 4" opacity="0.7" />
                  </svg>
                </a>
                <Button variant="outline" className="border-carnet-red text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument font-semibold py-5 px-7 rounded-full">
                  Bouton outline
                </Button>
              </div>
            </div>
          </div>

          <CodeBlock
            id="button-code"
            code={`{/* Primaire — encre noire → rouge au survol */}
<Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper
  font-instrument font-semibold text-[16px] py-[20px] px-8 rounded-full
  border-0 hover:-translate-y-0.5 transition-all h-auto">
  <Play className="mr-2 h-4 w-4 fill-current" />
  Regarder la vidéo
</Button>

{/* Ghost — cerclé au feutre rouge en pointillés */}
<a className="relative font-instrument text-[15px] py-4 px-5">
  Découvrir →
  <svg className="absolute -left-2.5 -top-2 w-[220px] h-[50px]"
    viewBox="0 0 220 50">
    <ellipse cx="110" cy="25" rx="105" ry="20" fill="none"
      stroke="#C1443A" strokeWidth="2" strokeDasharray="3 4"
      opacity="0.7" />
  </svg>
</a>`}
          />
        </section>

        {/* ─────────────────────────────────────────────
             4. CARDS
           ───────────────────────────────────────────── */}
        <section id="cards" className="mb-28 scroll-mt-32 relative">
          <SectionHead
            eyebrow="04 · Cards"
            title={<>Comme des copies <em className="font-lora italic text-carnet-red">posées sur le bureau</em>.</>}
            anno={"↗ légèrement\ninclinées"}
          />

          {/* Pillars — méthode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {[
              { num: '01', title: 'Comprendre, puis automatiser.', desc: 'Démonter chaque chapitre jusqu\'à la logique.', icon: BookOpen },
              { num: '02', title: 'Travailler comme en concours.', desc: 'Sujets-types et conditions réelles dès la séance 1.', icon: Calculator, anno: '↑ vital' },
              { num: '03', title: 'Un suivi mesurable.', desc: 'Bilans hebdo, points faibles identifiés.', icon: TrendingUp },
            ].map((p, i) => (
              <div key={i} className={cn('carnet-card relative p-8', i === 1 && 'carnet-tilt-l', i === 2 && 'carnet-tilt-r')}>
                <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">{p.num}</div>
                <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink mb-3">{p.title}</h3>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">{p.desc}</p>
                {p.anno && (
                  <div className="carnet-hand absolute" style={{ top: 28, right: 22, fontSize: 18, transform: 'rotate(-4deg)' }}>
                    {p.anno}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Témoignage / copie corrigée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
            <div className="bg-carnet-ink text-carnet-paper rounded-md p-9 relative carnet-tilt-l border border-carnet-ink shadow-[0_8px_16px_rgba(78,55,30,0.06)]">
              <div className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                18/20 — TB
              </div>
              <p className="font-lora italic text-[20px] leading-[1.45] text-carnet-paper">
                « J'ai commencé l'année à 6/20. À la fin du semestre, je passais à 13. Pas magique — on m'a juste appris à <span className="carnet-hl text-carnet-ink not-italic font-instrument font-semibold">travailler les maths</span>. »
              </p>
              <div className="carnet-hand text-[22px] mt-4" style={{ color: '#C1443A', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                ↗ +7 pts en 4 mois
              </div>
              <hr className="my-5 border-0 border-t border-dashed border-[rgba(251,246,234,0.18)]" />
              <div className="font-instrument text-[12px] text-[rgba(251,246,234,0.5)]">
                <span className="text-carnet-paper font-semibold">Léa M.</span> — ECG2 · Saint-Louis
              </div>
            </div>

            <div className="carnet-card p-9 relative carnet-tilt-r">
              <div className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                17/20
              </div>
              <p className="font-lora italic text-[19px] leading-[1.5] text-carnet-ink">
                « En tant que parent, j'avais besoin d'un suivi structuré. Le <span className="carnet-hl">bilan hebdomadaire</span> fait toute la différence. »
              </p>
              <hr className="carnet-divider my-5" />
              <div className="font-instrument text-[12px] text-carnet-ink-mute">
                <span className="text-carnet-ink font-semibold">Caroline D.</span> — Maman d'élève ECG2
              </div>
            </div>
          </div>

          <CodeBlock
            id="card-code"
            code={`{/* Card carnet de base */}
<div className="carnet-card p-8 carnet-tilt-l">
  <div className="carnet-hand text-[44px] text-carnet-red mb-3">01</div>
  <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
  <h3 className="font-lora text-[22px] text-carnet-ink mb-3">
    Comprendre, puis automatiser.
  </h3>
  <p className="font-instrument text-[14px] text-carnet-ink-soft">
    Démonter chaque chapitre jusqu'à ce que la logique soit claire.
  </p>
</div>

{/* Card témoignage avec note rouge */}
<div className="carnet-card p-9 relative carnet-tilt-r">
  <div className="absolute -top-4 left-7 bg-carnet-red text-carnet-paper-2
    px-3.5 py-1 carnet-hand text-[20px]"
    style={{ transform: 'rotate(-3deg)' }}>
    18/20 — TB
  </div>
  <p className="font-lora italic">«&nbsp;<span className="carnet-hl">phrase-clé</span>&nbsp;»</p>
</div>`}
          />
        </section>

        {/* ─────────────────────────────────────────────
             5. ICÔNES & ANNOTATIONS
           ───────────────────────────────────────────── */}
        <section id="icons" className="mb-28 scroll-mt-32 relative">
          <SectionHead
            eyebrow="05 · Icônes & annotations"
            title={<>Petits <em className="font-lora italic text-carnet-red">griffonnages</em>.</>}
            anno={"↘ feutre rouge\nuniquement"}
          />

          {/* Annotations manuscrites */}
          <div className="carnet-card p-10 mb-7">
            <div className="carnet-eyebrow mb-6">A · Annotations Caveat — toujours en rouge</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { txt: '↗ ici,\nle déclic', rot: -8 },
                { txt: '↘ regarde\njusqu\'au bout', rot: 6 },
                { txt: '↑ vital', rot: -4 },
                { txt: 'c\'est par ici !', rot: 6 },
                { txt: '+7 pts en\n4 mois', rot: -2 },
                { txt: '— sans\nengagement', rot: -4 },
                { txt: 'Major\nen colle', rot: -3 },
                { txt: 'à retenir', rot: 8 },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-center h-[110px] border border-dashed border-[rgba(78,55,30,0.18)] rounded-md bg-carnet-paper-2">
                  <div className="carnet-hand text-[24px] text-center leading-[1.15] whitespace-pre-line" style={{ transform: `rotate(${a.rot}deg)` }}>
                    {a.txt}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Icônes Lucide — usage */}
          <div className="carnet-card p-10 mb-7">
            <div className="carnet-eyebrow mb-6">B · Icônes Lucide — encre brune ou rouge</div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[Calculator, Code, Languages, Globe, BookOpen, GraduationCap, Users, Star, Heart, Play, ArrowRight, Sparkles].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-2.5">
                  <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-carnet-red" />
                  </div>
                  <span className="font-mono-jb text-[10px] text-carnet-ink-mute">{Icon.displayName || 'Icon'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Surlignage stabilo */}
          <div className="carnet-card p-10">
            <div className="carnet-eyebrow mb-6">C · Surlignage stabilo</div>
            <p className="font-lora italic text-[22px] text-carnet-ink leading-[1.55]">
              « Le passage du lycée à la prépa ECG est <span className="carnet-hl">brutal</span>.
              La bonne nouvelle : <span className="carnet-hl">il s'anticipe</span>.
              Méthode, organisation, bases mathématiques solides. »
            </p>
            <div className="mt-6 flex items-center gap-2.5 font-instrument text-[12px] text-carnet-ink-mute">
              <Highlighter className="h-3.5 w-3.5 text-[#E5C84A]" />
              <span><code className="font-mono-jb text-[11px] bg-carnet-paper px-1.5 py-0.5 rounded">.carnet-hl</code> — sur les phrases clés uniquement, max. 2 par paragraphe.</span>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
             FOOTER
           ───────────────────────────────────────────── */}
        <div className="mt-20 pt-12 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-instrument text-[12px] uppercase tracking-[0.18em] text-carnet-ink-mute">
            Charte v3 · Carnet · 2026
          </div>
          <div className="carnet-hand text-[28px] text-carnet-red" style={{ transform: 'rotate(-3deg)' }}>
            — Prépa Rationnelle
          </div>
          <a href="#colors" className="font-instrument text-[12px] uppercase tracking-[0.18em] text-carnet-red hover:text-carnet-ink transition-colors">
            ↑ retour palette
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemPage;
