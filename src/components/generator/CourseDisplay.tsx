import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, BookOpen } from 'lucide-react';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';

interface CourseDisplayProps {
  structuredCourse: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const CourseDisplay = ({ structuredCourse, language, onRegenerate }: CourseDisplayProps) => {
  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    await downloadAsPDF(
      structuredCourse,
      `cours-geopolitique-${timestamp}`,
      language === 'fr' ? 'Cours de Géopolitique Structuré' : 'Structured Geopolitics Course'
    );
  };

  const handleDownloadText = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsText(structuredCourse, `cours-geopolitique-${timestamp}`);
  };

  const formatCourseContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (/^[IVX]+\.\s/.test(trimmedLine)) {
        return (
          <h2 key={index} className="font-dm-serif text-xl text-pr-black mt-6 mb-3 border-b border-pr-gray-light/30 pb-2">
            {trimmedLine}
          </h2>
        );
      }

      if (/^[A-Z]\.\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine)) {
        return (
          <h3 key={index} className="font-dm-serif text-lg text-pr-black mt-4 mb-2">
            {trimmedLine}
          </h3>
        );
      }

      if (trimmedLine.toLowerCase().includes('définition')) {
        return (
          <div key={index} className="bg-pr-gray-bg border-l-4 border-pr-black p-3 my-3 rounded-r-lg">
            <p className="text-pr-black font-medium font-dm-sans">{trimmedLine}</p>
          </div>
        );
      }

      if (trimmedLine.toLowerCase().includes('exemple')) {
        return (
          <div key={index} className="bg-pr-gray-bg border-l-4 border-pr-gray-mid p-3 my-3 rounded-r-lg">
            <p className="text-pr-gray-dark font-dm-sans">{trimmedLine}</p>
          </div>
        );
      }

      if (trimmedLine === '') {
        return <div key={index} className="h-2"></div>;
      }

      return (
        <p key={index} className="text-pr-gray-dark mb-2 leading-relaxed font-dm-sans">
          {trimmedLine}
        </p>
      );
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-black" />
      <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h3 className="flex items-center gap-3 font-dm-serif text-xl text-pr-black">
            <BookOpen className="h-5 w-5 text-pr-black" />
            {language === 'fr' ? 'Fiche de cours structurée' : 'Structured course sheet'}
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
                ? "Cours structuré avec plan hiérarchisé, points-clés et exemples. Idéal pour révision et compréhension."
                : "Structured course with hierarchical plan, key points and examples. Ideal for revision and understanding."
              }
            </p>
          </div>

          <div className="prose max-w-none bg-white p-6 rounded-xl border border-pr-gray-light">
            {formatCourseContent(structuredCourse)}
          </div>
        </div>
      </div>
    </div>
  );
};
