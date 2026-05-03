import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wand2, MessageSquare, Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const PR = {
  orange: '#F4845F',
  orangeLight: '#FDF0EC',
  orangeDark: '#C45A35',
  text: '#1A1A18',
  grayDark: '#3A3A38',
  grayMid: '#888880',
  grayBorder: '#D8D6CE',
  grayBg: '#F7F6F3',
};

const FormationEspagnolGenerateursPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      number: '01',
      title: 'Générateur de Paragraphes',
      description: "Créez des paragraphes argumentatifs en espagnol basés sur des articles de presse.",
      icon: MessageSquare,
      component: <LanguageParagraphGenerator language={language} selectedLanguage="espagnol" />,
    },
    {
      id: 'grammar',
      number: '02',
      title: 'Générateur de Thèmes',
      description: "Entraînez-vous aux thèmes grammaticaux avec correction automatique.",
      icon: Wand2,
      component: <ThemeGrammaticalGenerator />,
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: PR.grayBg, color: PR.text, fontFamily: "'DM Sans', sans-serif" }}
    >
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#FFFFFF', borderColor: PR.grayBorder }}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center text-xs" style={{ color: PR.grayMid }}>
            <Link to="/" className="flex items-center gap-1 hover:opacity-80">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <Link to="/formations" className="hover:opacity-80">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <Link to="/formation/espagnol" className="hover:opacity-80">Formation Espagnol ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <span style={{ color: PR.text, fontWeight: 500 }}>Générateurs IA</span>
          </div>
        </div>
      </nav>

      <header className="container mx-auto px-6 pt-16 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block mb-6 px-3 py-1 rounded"
            style={{
              backgroundColor: PR.orangeLight,
              color: PR.orangeDark,
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Espagnol · Outils IA
          </div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              color: PR.text,
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            Générateurs IA
          </h1>
          <div className="flex justify-center mb-6">
            <span style={{ display: 'inline-block', width: '56px', height: '3px', backgroundColor: PR.orange }} />
          </div>
          <p className="max-w-2xl mx-auto" style={{ color: PR.grayDark, fontSize: '16px', lineHeight: 1.65 }}>
            Outils IA pour l'entraînement pratique et la correction automatique.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {generatorTools.map((tool) => (
            <Card
              key={tool.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: `0.5px solid ${PR.grayBorder}`,
                borderTop: `3px solid ${PR.orange}`,
                borderRadius: '6px',
                boxShadow: '0 1px 2px rgba(26,26,24,0.04)',
              }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-5 mb-5">
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 400,
                      color: PR.orange,
                      fontSize: '40px',
                      lineHeight: 1,
                    }}
                  >
                    {tool.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          fontWeight: 400,
                          color: PR.text,
                          fontSize: '24px',
                          lineHeight: 1.2,
                        }}
                      >
                        {tool.title}
                      </h2>
                      <span
                        style={{
                          backgroundColor: PR.orangeLight,
                          color: PR.orangeDark,
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '3px 8px',
                          borderRadius: '3px',
                        }}
                      >
                        IA
                      </span>
                    </div>
                    <div style={{ width: '24px', height: '2px', backgroundColor: PR.orange, marginBottom: '12px' }} />
                    <p style={{ color: PR.grayDark, fontSize: '14px', lineHeight: 1.6 }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
                {tool.component}
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center pt-4">
            <Link to="/formation/espagnol">
              <button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: PR.orangeDark,
                  border: `1px solid ${PR.orange}`,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = PR.orangeLight;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FFFFFF';
                }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à la formation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolGenerateursPage;
