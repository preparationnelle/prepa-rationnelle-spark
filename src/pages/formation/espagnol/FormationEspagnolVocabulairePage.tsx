import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

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

const FormationEspagnolVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: PR.grayBg, color: PR.text, fontFamily: "'DM Sans', sans-serif" }}
    >
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#FFFFFF', borderColor: PR.grayBorder }}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center text-xs" style={{ color: PR.grayMid }}>
            <Link to="/" className="flex items-center gap-1 transition-colors hover:opacity-80">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <Link to="/formations" className="transition-colors hover:opacity-80">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <Link to="/formation/espagnol" className="transition-colors hover:opacity-80">Formation Espagnol ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1.5" />
            <span style={{ color: PR.text, fontWeight: 500 }}>Vocabulaire</span>
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
            Espagnol · Module 01
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
            Vocabulaire Espagnol
          </h1>
          <div className="flex justify-center mb-6">
            <span style={{ display: 'inline-block', width: '56px', height: '3px', backgroundColor: PR.orange }} />
          </div>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: PR.grayDark, fontSize: '16px', lineHeight: 1.65 }}
          >
            Lexique thématique et expressions idiomatiques pour l'épreuve de langue aux concours.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card
            style={{
              backgroundColor: '#FFFFFF',
              border: `0.5px solid ${PR.grayBorder}`,
              borderTop: `3px solid ${PR.orange}`,
              borderRadius: '6px',
              boxShadow: '0 1px 2px rgba(26,26,24,0.04)',
            }}
          >
            <CardContent className="p-6 sm:p-8">
              <SpanishVocabularyFlashcards language={language} />
            </CardContent>
          </Card>

          <div className="flex justify-center mt-12">
            <Link to="/formation/espagnol">
              <Button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: PR.orangeDark,
                  border: `1px solid ${PR.orange}`,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  height: 'auto',
                  boxShadow: 'none',
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
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolVocabulairePage;
