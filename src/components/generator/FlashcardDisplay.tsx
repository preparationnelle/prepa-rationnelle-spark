import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Library } from 'lucide-react';
import { downloadAsCSV, downloadAsPDF } from '@/utils/downloadUtils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface FlashcardDisplayProps {
  flashcards: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const FlashcardDisplay = ({ flashcards, language, onRegenerate }: FlashcardDisplayProps) => {
  const parseFlashcards = (csvContent: string) => {
    const lines = csvContent.trim().split('\n');
    if (lines.length === 0) return [];

    const dataLines = lines[0].includes('|||') ? lines : lines.slice(1);

    return dataLines.map((line, index) => {
      const parts = line.split('|||');
      return {
        id: index,
        front: parts[0] || '',
        back: parts[1] || '',
        type: parts[2] || 'concept'
      };
    });
  };

  const flashcardData = parseFlashcards(flashcards);

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsCSV(flashcards, `flashcards-geopolitique-${timestamp}`);
  };

  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const formattedContent = flashcardData.map((card, index) =>
      `${index + 1}. ${card.front}\n   → ${card.back}\n   [${card.type}]\n`
    ).join('\n');

    await downloadAsPDF(
      formattedContent,
      `flashcards-geopolitique-${timestamp}`,
      language === 'fr' ? 'Flashcards de Géopolitique' : 'Geopolitics Flashcards'
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-orange" />
      <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h3 className="flex items-center gap-3 font-dm-serif text-xl text-pr-black">
            <Library className="h-5 w-5 text-pr-orange" />
            {language === 'fr' ? 'Flashcards (format Anki)' : 'Flashcards (Anki format)'}
            <span className="text-sm font-normal text-pr-gray-mid font-dm-sans">
              ({flashcardData.length} {language === 'fr' ? 'cartes' : 'cards'})
            </span>
          </h3>
          <div className="flex gap-2 flex-wrap">
            {onRegenerate && (
              <Button
                onClick={onRegenerate}
                variant="outline"
                size="sm"
                className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Régénérer' : 'Regenerate'}
              </Button>
            )}
            <Button
              onClick={handleDownloadCSV}
              size="sm"
              className="bg-pr-orange hover:bg-pr-orange-dark text-white"
            >
              <Download className="h-4 w-4 mr-1" />
              CSV
            </Button>
            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              size="sm"
              className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
            >
              <Download className="h-4 w-4 mr-1" />
              PDF
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="space-y-4">
          <div className="bg-pr-orange-pale border-l-4 border-pr-orange p-4 rounded-r-lg">
            <p className="text-sm text-pr-orange-dark font-dm-sans">
              {language === 'fr'
                ? "Ces flashcards sont au format Anki. Vous pouvez importer le fichier CSV directement dans Anki ou utiliser le PDF pour réviser."
                : "These flashcards are in Anki format. You can import the CSV file directly into Anki or use the PDF for review."
              }
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead className="w-[40%]">
                  {language === 'fr' ? 'Question' : 'Question'}
                </TableHead>
                <TableHead className="w-[40%]">
                  {language === 'fr' ? 'Réponse' : 'Answer'}
                </TableHead>
                <TableHead className="w-[20%]">
                  {language === 'fr' ? 'Type' : 'Type'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flashcardData.map((card, index) => (
                <TableRow key={card.id}>
                  <TableCell className="font-medium text-pr-gray-mid">{index + 1}</TableCell>
                  <TableCell className="font-medium text-pr-black font-dm-sans">{card.front}</TableCell>
                  <TableCell className="text-pr-gray-dark font-dm-sans">{card.back}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pr-orange-pale text-pr-orange-dark font-dm-sans uppercase tracking-[0.06em]">
                      {card.type}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
