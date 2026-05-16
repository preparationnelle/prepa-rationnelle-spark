import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { downloadAsText, downloadAsPDF } from '@/utils/downloadUtils';

interface CaseStudyDisplayProps {
  caseStudy: string;
  wordCount: number;
  language: 'fr' | 'en';
}

export const CaseStudyDisplay = ({ caseStudy, wordCount, language }: CaseStudyDisplayProps) => {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(caseStudy);
      toast({
        title: language === 'fr' ? "Copié !" : "Copied!",
        description: language === 'fr' ? "Le thème central a été copié" : "Central theme has been copied",
      });
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Impossible de copier" : "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const handleDownloadTxt = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = language === 'fr' ? `etude-cas-${timestamp}` : `case-study-${timestamp}`;
    downloadAsText(caseStudy, filename);
  };

  const handleDownloadPdf = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = language === 'fr' ? `etude-cas-${timestamp}` : `case-study-${timestamp}`;
    const title = language === 'fr' ? 'Étude de Cas Géopolitique' : 'Geopolitical Case Study';
    await downloadAsPDF(caseStudy, filename, title);
  };

  return (
    <div className="mt-8 bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-black" />
      <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-carnet-paper-2 border border-pr-black-soft rounded-xl">
              <FileText className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                {language === 'fr' ? 'Étude de cas' : 'Case study'}
              </div>
              <h3 className="font-dm-serif text-2xl text-pr-black leading-none">
                {language === 'fr' ? 'Étude de cas générée' : 'Generated case study'}
              </h3>
              <div className="text-pr-gray-mid text-[13px] mt-1 font-dm-sans">
                {wordCount} {language === 'fr' ? 'mots' : 'words'}
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft"
            >
              <Copy className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Copier' : 'Copy'}
            </Button>
            <Button
              onClick={handleDownloadTxt}
              variant="outline"
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft"
            >
              <Download className="h-4 w-4 mr-2" />
              TXT
            </Button>
            <Button
              onClick={handleDownloadPdf}
              size="sm"
              className="bg-pr-black hover:bg-pr-black-dark text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="prose max-w-none font-dm-sans">
          <div className="whitespace-pre-wrap text-pr-gray-dark leading-relaxed">
            {caseStudy}
          </div>
        </div>
      </div>
    </div>
  );
};
