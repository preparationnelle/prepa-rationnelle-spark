import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Copy, 
  Check, 
  Calculator, 
  Code, 
  Languages, 
  Globe, 
  GraduationCap,
  BookOpen,
  Users,
  Star,
  TrendingUp,
  Heart,
  Zap,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DesignSystemPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const ColorSwatch = ({ 
    name, 
    hex, 
    tailwind, 
    description 
  }: { 
    name: string; 
    hex: string; 
    tailwind: string; 
    description?: string;
  }) => (
    <div className="group relative">
      <div 
        className="w-full h-32 rounded-xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105 cursor-pointer"
        style={{ backgroundColor: hex }}
        onClick={() => copyToClipboard(hex, `color-${hex}`)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copiedCode === `color-${hex}` ? (
            <Check className="h-6 w-6 text-white" />
          ) : (
            <Copy className="h-6 w-6 text-white" />
          )}
        </div>
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600 font-mono">{hex}</p>
        <p className="text-sm text-gray-500">{tailwind}</p>
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
      </div>
    </div>
  );

  const CodeBlock = ({ code, language = 'tsx', id }: { code: string; language?: string; id: string }) => (
    <div className="relative bg-gray-900 rounded-xl p-6 overflow-x-auto">
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        {copiedCode === id ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <pre className="text-sm text-gray-100 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );

  const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec navigation sticky */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#colors" className="hover:text-orange-600 transition-colors font-medium">Couleurs</a>
            <a href="#typography" className="hover:text-orange-600 transition-colors font-medium">Typographie</a>
            <a href="#buttons" className="hover:text-orange-600 transition-colors font-medium">Boutons</a>
            <a href="#cards" className="hover:text-orange-600 transition-colors font-medium">Cards</a>
            <a href="#icons" className="hover:text-orange-600 transition-colors font-medium">Icônes</a>
            <a href="#gradients" className="hover:text-orange-600 transition-colors font-medium">Gradients</a>
            <a href="#spacing" className="hover:text-orange-600 transition-colors font-medium">Espacements</a>
            <a href="#animations" className="hover:text-orange-600 transition-colors font-medium">Animations</a>
            <a href="#shadows" className="hover:text-orange-600 transition-colors font-medium">Ombres</a>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Design System
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Prépa Rationnelle
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documentation complète de la charte graphique, des composants et des styles utilisés sur le site
          </p>
        </div>

        {/* 1. COULEURS */}
        <Section title="1. Palette de Couleurs" id="colors">
          <p className="text-gray-600 mb-8">
            Notre palette de couleurs est basée sur l'orange vibrant comme couleur principale, associée à des tons neutres pour l'équilibre.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Couleurs Principales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <ColorSwatch 
              name="Primary Orange" 
              hex="#FF6A00" 
              tailwind="bg-primary"
              description="Couleur principale de la marque"
            />
            <ColorSwatch 
              name="Orange 500" 
              hex="#F97316" 
              tailwind="bg-orange-500"
              description="Variante orange"
            />
            <ColorSwatch 
              name="Orange 600" 
              hex="#EA580C" 
              tailwind="bg-orange-600"
              description="Orange foncé"
            />
            <ColorSwatch 
              name="Orange 700" 
              hex="#C2410C" 
              tailwind="bg-orange-700"
              description="Orange très foncé"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Couleurs Neutres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <ColorSwatch 
              name="Blanc" 
              hex="#FFFFFF" 
              tailwind="bg-white"
              description="Fond principal"
            />
            <ColorSwatch 
              name="Noir" 
              hex="#000000" 
              tailwind="bg-black"
              description="Texte principal"
            />
            <ColorSwatch 
              name="Gray 50" 
              hex="#F9FAFB" 
              tailwind="bg-gray-50"
              description="Fond alternatif"
            />
            <ColorSwatch 
              name="Gray 900" 
              hex="#111827" 
              tailwind="bg-gray-900"
              description="Texte foncé"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Couleurs d'Accent</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <ColorSwatch 
              name="Orange 50" 
              hex="#FFF7ED" 
              tailwind="bg-orange-50"
              description="Background hover"
            />
            <ColorSwatch 
              name="Orange 100" 
              hex="#FFEDD5" 
              tailwind="bg-orange-100"
              description="Background icônes"
            />
            <ColorSwatch 
              name="Orange 200" 
              hex="#FED7AA" 
              tailwind="bg-orange-200"
              description="Bordures"
            />
            <ColorSwatch 
              name="Orange 400" 
              hex="#FB923C" 
              tailwind="bg-orange-400"
              description="Hover states"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Utilisation</h3>
            <CodeBlock 
              id="colors-usage"
              code={`// Bouton principal
className="bg-gradient-to-r from-orange-600 to-orange-500"

// Texte gradient
className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"

// Background hover
className="hover:bg-orange-50"

// Icône
className="text-orange-600"`}
            />
          </div>
        </Section>

        {/* 2. TYPOGRAPHIE */}
        <Section title="2. Typographie" id="typography">
          <p className="text-gray-600 mb-8">
            La typographie est claire, moderne et optimisée pour la lisibilité sur tous les appareils.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hiérarchie des Titres</h3>
              <div className="space-y-6 bg-white p-8 rounded-xl border border-gray-200">
                <div>
                  <h1 className="text-6xl font-bold mb-2">Heading 1</h1>
                  <p className="text-sm text-gray-500 font-mono">text-6xl font-bold</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2">Heading 2</h2>
                  <p className="text-sm text-gray-500 font-mono">text-5xl font-bold</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">Heading 3</h3>
                  <p className="text-sm text-gray-500 font-mono">text-4xl font-bold</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">Heading 4</h4>
                  <p className="text-sm text-gray-500 font-mono">text-3xl font-bold</p>
                </div>
                <div>
                  <h5 className="text-2xl font-bold mb-2">Heading 5</h5>
                  <p className="text-sm text-gray-500 font-mono">text-2xl font-bold</p>
                </div>
                <div>
                  <h6 className="text-xl font-bold mb-2">Heading 6</h6>
                  <p className="text-sm text-gray-500 font-mono">text-xl font-bold</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Styles de Corps de Texte</h3>
              <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-200">
                <div>
                  <p className="text-lg mb-2">Large Text - Utilisé pour les sous-titres importants</p>
                  <p className="text-sm text-gray-500 font-mono">text-lg</p>
                </div>
                <div>
                  <p className="text-base mb-2">Base Text - Texte standard du site</p>
                  <p className="text-sm text-gray-500 font-mono">text-base</p>
                </div>
                <div>
                  <p className="text-sm mb-2">Small Text - Pour les détails et descriptions</p>
                  <p className="text-sm text-gray-500 font-mono">text-sm</p>
                </div>
                <div>
                  <p className="text-xs mb-2">Extra Small Text - Pour les notes et légendes</p>
                  <p className="text-sm text-gray-500 font-mono">text-xs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Poids de Police</h3>
              <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-200">
                <div>
                  <p className="font-normal mb-2">Normal Weight - Pour le texte courant</p>
                  <p className="text-sm text-gray-500 font-mono">font-normal</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Medium Weight - Pour les éléments importants</p>
                  <p className="text-sm text-gray-500 font-mono">font-medium</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Semibold Weight - Pour les sous-titres</p>
                  <p className="text-sm text-gray-500 font-mono">font-semibold</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Bold Weight - Pour les titres</p>
                  <p className="text-sm text-gray-500 font-mono">font-bold</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Texte avec Gradient</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
                  Texte Gradient Orange
                </p>
                <CodeBlock 
                  id="gradient-text"
                  code={`className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"`}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 3. BOUTONS */}
        <Section title="3. Boutons" id="buttons">
          <p className="text-gray-600 mb-8">
            Les boutons sont conçus pour être clairs, accessibles et offrir un feedback visuel immédiat.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Bouton Principal (Primary)</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Bouton Large
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Bouton Normal
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-md"
                  >
                    Bouton Small
                  </Button>
                </div>
                <CodeBlock 
                  id="primary-button"
                  code={`<Button 
  size="lg"
  className="bg-gradient-to-r from-orange-600 to-orange-500 
    hover:from-orange-700 hover:to-orange-600 
    text-white font-semibold rounded-xl shadow-lg 
    hover:shadow-2xl transition-all duration-300 
    hover:scale-105"
>
  Bouton Principal
</Button>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Bouton avec Icône</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Avec Icône Gauche
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Avec Icône Droite
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <CodeBlock 
                  id="icon-button"
                  code={`<Button className="...">
  <Zap className="mr-2 h-4 w-4" />
  Avec Icône
</Button>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Bouton Outline</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="outline" size="lg">
                    Outline Large
                  </Button>
                  <Button variant="outline">
                    Outline Normal
                  </Button>
                  <Button variant="outline" size="sm">
                    Outline Small
                  </Button>
                </div>
                <CodeBlock 
                  id="outline-button"
                  code={`<Button variant="outline" size="lg">
  Outline Button
</Button>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Bouton Ghost</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="ghost" size="lg">
                    Ghost Large
                  </Button>
                  <Button variant="ghost">
                    Ghost Normal
                  </Button>
                  <Button variant="ghost" size="sm">
                    Ghost Small
                  </Button>
                </div>
                <CodeBlock 
                  id="ghost-button"
                  code={`<Button variant="ghost">
  Ghost Button
</Button>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">États des Boutons</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl"
                  >
                    Normal
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl"
                    disabled
                  >
                    Désactivé
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl"
                  >
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Chargement...
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. CARDS */}
        <Section title="4. Cards" id="cards">
          <p className="text-gray-600 mb-8">
            Les cards sont utilisées pour organiser le contenu de manière visuellement attrayante.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Card Formation Standard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Maths ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Maîtrisez tout le programme avec des exercices corrigés.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>20 chapitres progressifs</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Exercices type concours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Python ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">4 modules progressifs avec exercices pratiques.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>54 commandes essentielles</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>+3 à 5 points garantis</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Languages className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Anglais ECG</h3>
                  <p className="text-sm text-gray-600 mb-3">Perfectionnez votre anglais avec méthodes ciblées.</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Grammaire systématique</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Thèmes et versions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CodeBlock 
                  id="formation-card"
                  code={`<div className="bg-white rounded-2xl p-6 shadow-lg 
  hover:shadow-2xl hover:scale-105 hover:-translate-y-2 
  transition-all duration-500 border border-gray-100 
  hover:border-orange-400 hover:bg-orange-50/50 
  flex flex-col items-center text-center group">
  <div className="w-16 h-16 bg-orange-100 rounded-2xl 
    flex items-center justify-center mb-4 
    group-hover:scale-110 transition-transform duration-300">
    <Calculator className="h-8 w-8 text-orange-600" />
  </div>
  <h3 className="font-semibold text-xl mb-2 text-gray-900">
    Titre
  </h3>
  <p className="text-sm text-gray-600 mb-3">
    Description
  </p>
</div>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Card Générateur IA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Languages className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Langues</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Générez et corrigez vos textes</p>
                  <div className="space-y-1 text-xs w-full mb-4">
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Correction automatique</span>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <span className="mr-2">✓</span>
                      <span>Génération de paragraphes</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium rounded-xl">
                    <Zap className="mr-2 h-4 w-4" />
                    Utiliser
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <CodeBlock 
                  id="generator-card"
                  code={`<div className="bg-white rounded-2xl p-6 shadow-lg 
  hover:shadow-2xl hover:scale-105 hover:-translate-y-2 
  transition-all duration-500 group 
  flex flex-col items-center text-center 
  border border-gray-100 hover:border-orange-400 
  hover:bg-orange-50/50">
  <div className="w-16 h-16 bg-gradient-to-br 
    from-orange-100 to-orange-200 rounded-2xl 
    flex items-center justify-center mb-4 
    group-hover:scale-110 transition-transform duration-300">
    <Languages className="h-8 w-8 text-orange-600" />
  </div>
  <h3 className="font-bold text-xl mb-3">Titre</h3>
  <Button className="w-full bg-gradient-to-r 
    from-orange-600 to-orange-500">
    <Zap className="mr-2 h-4 w-4" />
    Action
  </Button>
</div>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Card Stats</h3>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-orange-100 max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="h-8 w-8 text-black mr-3" />
                      <div className="text-4xl font-bold text-orange-500">5/5</div>
                    </div>
                    <div className="text-base text-black font-medium">Satisfaction client</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="h-8 w-8 text-black mr-3" />
                      <div className="text-4xl font-bold text-orange-500">+5pts</div>
                    </div>
                    <div className="text-base text-black font-medium">Gain en maths</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="h-8 w-8 text-black mr-3" />
                      <div className="text-4xl font-bold text-orange-500">50+</div>
                    </div>
                    <div className="text-base text-black font-medium">Étudiants</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <div className="flex items-center justify-center mb-3">
                      <div className="text-4xl font-bold text-orange-500">TOP 5</div>
                    </div>
                    <div className="text-base text-black font-medium">80% des étudiants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. ICÔNES */}
        <Section title="5. Icônes" id="icons">
          <p className="text-gray-600 mb-8">
            Nous utilisons la bibliothèque Lucide React pour les icônes, avec des styles cohérents.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Icônes dans des Cercles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Calculator</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Code</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Languages className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Languages</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Globe</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">BookOpen</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">GraduationCap</p>
                </div>
              </div>
              <div className="mt-6">
                <CodeBlock 
                  id="icon-circle"
                  code={`<div className="w-16 h-16 bg-orange-100 rounded-2xl 
  flex items-center justify-center">
  <Calculator className="h-8 w-8 text-orange-600" />
</div>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Icônes avec Gradient</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                    <Languages className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Gradient BG</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-gray-600">Gradient Circle</p>
                </div>
              </div>
              <div className="mt-6">
                <CodeBlock 
                  id="icon-gradient"
                  code={`// Background gradient
<div className="w-16 h-16 bg-gradient-to-br 
  from-orange-100 to-orange-200 rounded-2xl">
  <Languages className="h-8 w-8 text-orange-600" />
</div>

// Circle with gradient
<div className="w-16 h-16 bg-gradient-to-br 
  from-orange-500 to-orange-600 rounded-full 
  shadow-lg">
  <BookOpen className="h-8 w-8 text-white" />
</div>`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tailles d'Icônes</h3>
              <div className="flex flex-wrap items-end gap-8 bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-3 w-3 text-orange-600" />
                  <p className="text-xs text-gray-600">h-3 w-3</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-4 w-4 text-orange-600" />
                  <p className="text-xs text-gray-600">h-4 w-4</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-5 w-5 text-orange-600" />
                  <p className="text-xs text-gray-600">h-5 w-5</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-6 w-6 text-orange-600" />
                  <p className="text-xs text-gray-600">h-6 w-6</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-8 w-8 text-orange-600" />
                  <p className="text-xs text-gray-600">h-8 w-8</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-10 w-10 text-orange-600" />
                  <p className="text-xs text-gray-600">h-10 w-10</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. GRADIENTS */}
        <Section title="6. Gradients" id="gradients">
          <p className="text-gray-600 mb-8">
            Les gradients ajoutent de la profondeur et de l'intérêt visuel à notre design.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Gradients de Fond</h3>
              <div className="space-y-4">
                <div className="h-32 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg"></div>
                <CodeBlock 
                  id="gradient-1"
                  code={`bg-gradient-to-r from-orange-600 to-orange-500`}
                />
                
                <div className="h-32 rounded-xl bg-gradient-to-br from-white via-orange-50/30 to-white shadow-lg"></div>
                <CodeBlock 
                  id="gradient-2"
                  code={`bg-gradient-to-br from-white via-orange-50/30 to-white`}
                />
                
                <div className="h-32 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg"></div>
                <CodeBlock 
                  id="gradient-3"
                  code={`bg-gradient-to-b from-gray-50 to-white`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Gradient Text</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
                  Prépa Rationnelle
                </p>
                <CodeBlock 
                  id="gradient-text-code"
                  code={`className="bg-gradient-to-r from-orange-600 to-orange-500 
  bg-clip-text text-transparent"`}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 7. ESPACEMENTS */}
        <Section title="7. Espacements" id="spacing">
          <p className="text-gray-600 mb-8">
            Espacements cohérents pour une mise en page harmonieuse.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Padding</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-40 text-sm font-mono text-gray-600">p-2 (0.5rem)</div>
                  <div className="flex-1 bg-orange-100 p-2 rounded">
                    <div className="bg-orange-600 h-8 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 text-sm font-mono text-gray-600">p-4 (1rem)</div>
                  <div className="flex-1 bg-orange-100 p-4 rounded">
                    <div className="bg-orange-600 h-8 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 text-sm font-mono text-gray-600">p-6 (1.5rem)</div>
                  <div className="flex-1 bg-orange-100 p-6 rounded">
                    <div className="bg-orange-600 h-8 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 text-sm font-mono text-gray-600">p-8 (2rem)</div>
                  <div className="flex-1 bg-orange-100 p-8 rounded">
                    <div className="bg-orange-600 h-8 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Gap (Espacement entre éléments)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-mono text-gray-600 mb-2">gap-2</p>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 mb-2">gap-4</p>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 mb-2">gap-6</p>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 8. ANIMATIONS */}
        <Section title="8. Animations" id="animations">
          <p className="text-gray-600 mb-8">
            Animations subtiles pour améliorer l'expérience utilisateur.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hover Effects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <p className="text-center font-semibold">Scale on Hover</p>
                  <p className="text-xs text-gray-500 text-center mt-2">hover:scale-105</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                  <p className="text-center font-semibold">Lift on Hover</p>
                  <p className="text-xs text-gray-500 text-center mt-2">hover:-translate-y-2</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <p className="text-center font-semibold">Shadow on Hover</p>
                  <p className="text-xs text-gray-500 text-center mt-2">hover:shadow-2xl</p>
                </div>
              </div>
              <div className="mt-6">
                <CodeBlock 
                  id="hover-effects"
                  code={`// Scale
hover:scale-105 transition-transform duration-300

// Lift
hover:-translate-y-2 transition-transform duration-300

// Shadow
hover:shadow-2xl transition-shadow duration-300

// Combiné
hover:scale-105 hover:-translate-y-2 transition-all duration-500`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Animations de Chargement</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                    <p className="text-xs text-gray-600">Spinner</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="animate-pulse h-8 w-8 bg-orange-600 rounded-full"></div>
                    <p className="text-xs text-gray-600">Pulse</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="animate-bounce h-8 w-8 bg-orange-600 rounded-full"></div>
                    <p className="text-xs text-gray-600">Bounce</p>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock 
                    id="loading-animations"
                    code={`// Spinner
<div className="animate-spin rounded-full h-8 w-8 
  border-b-2 border-orange-600"></div>

// Pulse
<div className="animate-pulse h-8 w-8 
  bg-orange-600 rounded-full"></div>

// Bounce
<div className="animate-bounce h-8 w-8 
  bg-orange-600 rounded-full"></div>`}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Animations Personnalisées</h3>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold mb-2">Float Animation</p>
                    <div className="w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl animate-float"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock 
                    id="custom-animations"
                    code={`@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 9. OMBRES */}
        <Section title="9. Ombres (Shadows)" id="shadows">
          <p className="text-gray-600 mb-8">
            Les ombres ajoutent de la profondeur et hiérarchisent les éléments.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="font-semibold mb-2">Shadow SM</p>
                <p className="text-xs text-gray-500 font-mono">shadow-sm</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <p className="font-semibold mb-2">Shadow MD</p>
                <p className="text-xs text-gray-500 font-mono">shadow-md</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <p className="font-semibold mb-2">Shadow LG</p>
                <p className="text-xs text-gray-500 font-mono">shadow-lg</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <p className="font-semibold mb-2">Shadow XL</p>
                <p className="text-xs text-gray-500 font-mono">shadow-xl</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
                <p className="font-semibold mb-2">Shadow 2XL</p>
                <p className="text-xs text-gray-500 font-mono">shadow-2xl</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ombres Colorées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="bg-white p-6 rounded-xl"
                  style={{ boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)" }}
                >
                  <p className="font-semibold mb-2">Orange Shadow</p>
                  <p className="text-xs text-gray-500 font-mono">box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3)</p>
                </div>
              </div>
              <div className="mt-6">
                <CodeBlock 
                  id="colored-shadow"
                  code={`// Ombre orange pour les boutons
style={{ 
  boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)" 
}}`}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION BONUS: Exemples de Combinaisons */}
        <Section title="10. Exemples de Combinaisons Complètes" id="combinations">
          <p className="text-gray-600 mb-8">
            Exemples de composants complets combinant plusieurs éléments du design system.
          </p>

          <div className="space-y-12">
            {/* Hero CTA */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Hero Call-to-Action</h3>
              <div className="bg-gradient-to-br from-white via-orange-50/30 to-white p-12 rounded-2xl border border-gray-200">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  Ta méthode pour intégrer le <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">TOP 3</span> en prépa <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">ECG</span>
                </h1>
                <p className="text-xl text-center text-gray-600 mb-8">
                  La Méthode <span className="font-bold text-orange-600">RATIONNELLE</span> pour Gagner <span className="font-bold text-orange-600">+5</span> Points
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    style={{ boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)" }}
                  >
                    Réserve ton cours gratuit
                  </Button>
                </div>
              </div>
            </div>

            {/* Feature Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Section Features</h3>
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Nos formations spécialisées
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Cards de formation comme dans l'exemple précédent */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Calculator className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-center mb-2">Maths ECG</h3>
                    <p className="text-sm text-gray-600 text-center">Programme complet avec exercices</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Code className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-center mb-2">Python ECG</h3>
                    <p className="text-sm text-gray-600 text-center">54 commandes essentielles</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Languages className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-center mb-2">Anglais ECG</h3>
                    <p className="text-sm text-gray-600 text-center">Grammaire et méthodes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer du Design System */}
        <div className="mt-24 text-center pb-12">
          <p className="text-gray-500 text-sm">
            Design System • Prépa Rationnelle • Version 1.0
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DesignSystemPage;

