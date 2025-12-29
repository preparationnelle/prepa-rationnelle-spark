import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Copy, Check, Calculator, Code, Languages, Globe, GraduationCap,
  BookOpen, Users, Star, TrendingUp, Zap, ChevronRight, Sparkles,
  Palette, Box, Type, Layers, Heart
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

  const ColorSwatch = ({ name, hex, tailwind, description }: {
    name: string; hex: string; tailwind: string; description?: string;
  }) => (
    <div className="group relative overflow-hidden">
      <div
        className="w-full h-32 rounded-2xl shadow-lg border border-white/20 transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer relative overflow-hidden"
        style={{ backgroundColor: hex }}
        onClick={() => copyToClipboard(hex, `color-${hex}`)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          {copiedCode === `color-${hex}` ? (
            <div className="bg-white/90 rounded-full p-3">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          ) : (
            <div className="bg-white/90 rounded-full p-3">
              <Copy className="h-6 w-6 text-orange-600" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600 font-mono">{hex}</p>
        <p className="text-xs text-orange-600 font-medium">{tailwind}</p>
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
      </div>
    </div>
  );

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 overflow-x-auto border border-orange-500/20 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-orange-600 backdrop-blur-md rounded-xl transition-all duration-300 border border-white/10 hover:scale-110"
      >
        {copiedCode === id ? (
          <Check className="h-5 w-5 text-green-400" />
        ) : (
          <Copy className="h-5 w-5 text-gray-300" />
        )}
      </button>
      <pre className="text-sm text-gray-100 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );

  const Section = ({ title, children, id, icon }: {
    title: string; children: React.ReactNode; id?: string; icon?: React.ReactNode;
  }) => (
    <section id={id} className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        {icon && (
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            {icon}
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );

  const navItems = [
    { id: 'colors', label: 'Couleurs', icon: <Palette className="h-4 w-4" /> },
    { id: 'typography', label: 'Typo', icon: <Type className="h-4 w-4" /> },
    { id: 'buttons', label: 'Boutons', icon: <Box className="h-4 w-4" /> },
    { id: 'cards', label: 'Cards', icon: <Layers className="h-4 w-4" /> },
    { id: 'icons', label: 'Icônes', icon: <Sparkles className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg"
                )}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24 relative">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 rounded-full border border-orange-200">
              <Sparkles className="h-5 w-5 text-orange-600 animate-pulse" />
              <span className="text-orange-700 font-semibold">Design System v2.0</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="block text-gray-900">Design System</span>
            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Prépa Rationnelle
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Une charte graphique moderne et dynamique pour créer des expériences
            <span className="font-bold text-orange-600"> exceptionnelles</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 px-8 py-6"
            >
              <Zap className="mr-2 h-5 w-5" />
              Explorer le système
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold text-lg rounded-full shadow-lg px-8 py-6"
            >
              <Heart className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>
        </div>

        {/* 1. COULEURS */}
        <Section
          title="Palette de Couleurs"
          id="colors"
          icon={<Palette className="h-7 w-7 text-white" />}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-orange-100 shadow-2xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre palette vibrante est construite autour de l'<span className="font-bold text-orange-600">orange dynamique</span>,
              symbolisant l'<span className="font-bold">énergie</span> et la <span className="font-bold">passion</span> de l'apprentissage.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-600 to-orange-500 rounded-full" />
            Couleurs Principales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <ColorSwatch name="Primary" hex="#FF6A00" tailwind="bg-primary" description="Couleur signature" />
            <ColorSwatch name="Orange 500" hex="#F97316" tailwind="bg-orange-500" description="Standard" />
            <ColorSwatch name="Orange 600" hex="#EA580C" tailwind="bg-orange-600" description="Foncé" />
            <ColorSwatch name="Orange 700" hex="#C2410C" tailwind="bg-orange-700" description="Très foncé" />
          </div>

          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-gray-600 to-gray-500 rounded-full" />
            Couleurs Neutres
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <ColorSwatch name="Blanc" hex="#FFFFFF" tailwind="bg-white" description="Fond principal" />
            <ColorSwatch name="Noir" hex="#000000" tailwind="bg-black" description="Texte principal" />
            <ColorSwatch name="Gray 50" hex="#F9FAFB" tailwind="bg-gray-50" description="Fond doux" />
            <ColorSwatch name="Gray 900" hex="#111827" tailwind="bg-gray-900" description="Texte intense" />
          </div>

          <CodeBlock
            id="colors-usage"
            code={`// Gradient de bouton principal
className="bg-gradient-to-r from-orange-600 to-orange-500"

// Texte avec gradient
className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"

// Background hover fluide
className="hover:bg-orange-50 transition-colors duration-300"`}
          />
        </Section>

        {/* 2. TYPOGRAPHIE */}
        <Section
          title="Typographie"
          id="typography"
          icon={<Type className="h-7 w-7 text-white" />}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-orange-50/50 p-10 rounded-3xl border border-orange-100 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Hiérarchie des Titres</h3>
              <div className="space-y-8">
                {[
                  { size: 'text-6xl', label: 'H1 - Heading 1', weight: 'font-black' },
                  { size: 'text-5xl', label: 'H2 - Heading 2', weight: 'font-bold' },
                  { size: 'text-4xl', label: 'H3 - Heading 3', weight: 'font-bold' },
                  { size: 'text-3xl', label: 'H4 - Heading 4', weight: 'font-semibold' },
                  { size: 'text-2xl', label: 'H5 - Heading 5', weight: 'font-semibold' },
                  { size: 'text-xl', label: 'H6 - Heading 6', weight: 'font-medium' },
                ].map((heading, idx) => (
                  <div key={idx} className="group hover:translate-x-2 transition-transform duration-300">
                    <p className={`${heading.size} ${heading.weight} mb-2 text-gray-900`}>{heading.label}</p>
                    <p className="text-sm text-gray-500 font-mono">{heading.size} {heading.weight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
              <p className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Texte Gradient Dynamique
              </p>
              <CodeBlock
                id="gradient-text"
                code={`className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 
  bg-clip-text text-transparent"`}
              />
            </div>
          </div>
        </Section>

        {/* 3. BOUTONS */}
        <Section
          title="Boutons"
          id="buttons"
          icon={<Box className="h-7 w-7 text-white" />}
        >
          <div className="bg-gradient-to-br from-white via-orange-50/30 to-white p-12 rounded-3xl border border-orange-100 shadow-2xl space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Boutons Principaux</h3>
              <div className="flex flex-wrap gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 px-8"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Grand Bouton
                </Button>
                <Button
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-full shadow-xl"
                >
                  Bouton Normal
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-full shadow-lg"
                >
                  Petit Bouton
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-700">Boutons Outline</h3>
              <div className="flex flex-wrap gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Outline Large
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full shadow-md"
                >
                  Outline Normal
                </Button>
              </div>
            </div>

            <CodeBlock
              id="button-code"
              code={`<Button 
  size="lg"
  className="bg-gradient-to-r from-orange-600 to-orange-500 
    hover:from-orange-700 hover:to-orange-600 
    text-white font-bold rounded-full shadow-2xl 
    hover:shadow-orange-500/50 transition-all duration-300 
    hover:scale-110"
>
  <Sparkles className="mr-2 h-5 w-5" />
  Bouton Premium
</Button>`}
            />
          </div>
        </Section>

        {/* 4. CARDS */}
        <Section
          title="Cards"
          id="cards"
          icon={<Layers className="h-7 w-7 text-white" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Calculator, title: 'Maths ECG', desc: 'Programme complet', color: 'from-orange-500 to-orange-600' },
              { icon: Code, title: 'Python ECG', desc: '54 commandes', color: 'from-orange-600 to-orange-700' },
              { icon: Languages, title: 'Anglais ECG', desc: 'Grammaire & méthodes', color: 'from-orange-400 to-orange-500' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 border border-gray-100 hover:border-orange-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                    <card.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-center text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 text-center">{card.desc}</p>
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl hover:shadow-lg transition-all">
                    <ChevronRight className="ml-auto h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <CodeBlock
            id="card-code"
            code={`<div className="group relative bg-white rounded-3xl p-8 
  shadow-xl hover:shadow-2xl transition-all duration-500 
  hover:scale-105 hover:-translate-y-3 border border-gray-100 
  hover:border-orange-300 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br 
    from-orange-50/0 to-orange-100/50 opacity-0 
    group-hover:opacity-100 transition-opacity duration-500" />
  {/* Votre contenu */}
</div>`}
          />
        </Section>

        {/* 5. ICÔNES */}
        <Section
          title="Icônes"
          id="icons"
          icon={<Sparkles className="h-7 w-7 text-white" />}
        >
          <div className="bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl border border-orange-100 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-orange-600">Collection d'Icônes</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {[Calculator, Code, Languages, Globe, BookOpen, GraduationCap, Users, Star, Heart, Zap, Sparkles, TrendingUp].map((Icon, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer">
                    <Icon className="h-10 w-10 text-orange-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-32 text-center pb-16">
          <div className="inline-block bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-orange-100">
            <p className="text-gray-600 font-semibold">
              Design System <span className="text-orange-600">•</span> Prépa Rationnelle <span className="text-orange-600">•</span> v2.0
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default DesignSystemPage;
