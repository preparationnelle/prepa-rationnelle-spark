import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, FileText } from 'lucide-react';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';

interface DissertationTopicsDisplayProps {
  dissertationTopics: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const DissertationTopicsDisplay = ({ dissertationTopics, language, onRegenerate }: DissertationTopicsDisplayProps) => {
  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    await downloadAsPDF(
      dissertationTopics,
      `sujets-dissertation-${timestamp}`,
      language === 'fr' ? 'Sujets de Dissertation - Géopolitique' : 'Dissertation Topics - Geopolitics'
    );
  };

  const handleDownloadText = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsText(dissertationTopics, `sujets-dissertation-${timestamp}`);
  };

  const formatTopics = (content: string) => {
    const sections = content.split(/\n\s*\n/);
    let topicNumber = 1;

    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      if (!trimmedSection) return null;

      if (trimmedSection.toLowerCase().includes('sujet') && trimmedSection.length < 200) {
        return (
          <div key={index} className="bg-pr-gray-bg border border-pr-black/20 p-4 rounded-xl mb-4">
            <h3 className="font-dm-serif text-lg text-pr-black mb-2">
              {language === 'fr' ? `Sujet ${topicNumber++}` : `Topic ${topicNumber++}`}
            </h3>
            <p className="text-pr-gray-dark font-medium font-dm-sans">{trimmedSection}</p>
          </div>
        );
      }

      return (
        <div key={index} className="mb-4">
          {trimmedSection.split('\n').map((line, lineIndex) => {
            const trimmedLine = line.trim();

            if (trimmedLine.match(/^[IVX]+\./)) {
              return (
                <h4 key={lineIndex} className="font-semibold text-pr-black mt-3 mb-1 font-dm-sans">
                  {trimmedLine}
                </h4>
              );
            }

            if (trimmedLine.match(/^[A-Z]\./)) {
              return (
                <p key={lineIndex} className="ml-4 text-pr-gray-dark mb-1 font-dm-sans">
                  {trimmedLine}
                </p>
              );
            }

            return (
              <p key={lineIndex} className="text-pr-gray-dark mb-2 leading-relaxed font-dm-sans">
                {trimmedLine}
              </p>
            );
          })}
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <div className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-black" />
      <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h3 className="flex items-center gap-3 font-dm-serif text-xl text-pr-black">
            <FileText className="h-5 w-5 text-pr-black" />
            {language === 'fr' ? 'Sujets de dissertation' : 'Dissertation topics'}
          </h3>
          <div className="flex gap-2 flex-wrap">
            {onRegenerate && (
              <Button
                onClick={onRegenerate}
                variant="outline"
                size="sm"
                className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Régénérer' : 'Regenerate'}
              </Button>
            )}
            <Button
              onClick={handleDownloadText}
              variant="outline"
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft"
            >
              <Download className="h-4 w-4 mr-1" />
              TXT
            </Button>
            <Button
              onClick={handleDownloadPDF}
              size="sm"
              className="bg-pr-black hover:bg-pr-black-dark text-white"
            >
              <Download className="h-4 w-4 mr-1" />
              PDF
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="space-y-4">
          <div className="bg-pr-gray-bg border-l-4 border-pr-black p-4 rounded-r-lg">
            <p className="text-sm text-pr-black font-dm-sans">
              {language === 'fr'
                ? "Sujets d'entraînement adaptés aux exigences des concours ECG avec plans structurés."
                : "Training topics adapted to ECG competition requirements with structured plans."
              }
            </p>
          </div>

          <div className="space-y-4">
            {formatTopics(dissertationTopics)}
          </div>
        </div>
      </div>
    </div>
  );
};
