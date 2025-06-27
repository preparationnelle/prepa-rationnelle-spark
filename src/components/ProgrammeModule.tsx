
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface ProgrammeModuleProps {
  programmeName: string;
  videoUrl: string;
  corrige: string;
  explication: string;
  autresVersions: string[];
  outils: string[];
}

export const ProgrammeModule: React.FC<ProgrammeModuleProps> = ({
  programmeName,
  videoUrl,
  corrige,
  explication,
  autresVersions,
  outils,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="text-2xl">📚</span>
          {programmeName}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Video Section */}
        <div className="w-full">
          <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title={`Formation - ${programmeName}`}
            />
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="w-full">
          {/* Corrigé Section */}
          <AccordionItem value="corrige">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  ✅ Corrigé
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{corrige}</code>
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Explication Section */}
          <AccordionItem value="explication">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  💡 Explication
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap bg-blue-50 p-4 rounded-lg text-sm">
                  {explication}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Autres Versions Section */}
          <AccordionItem value="versions">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  🔄 Autres versions
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {autresVersions.map((version, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">{version}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Boîte à Outils Section */}
          <AccordionItem value="outils">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  🛠️ Boîte à outils
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {outils.map((outil, index) => (
                  <div key={index} className="bg-muted p-3 rounded-lg">
                    <code className="text-sm font-mono text-foreground">
                      {outil}
                    </code>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
