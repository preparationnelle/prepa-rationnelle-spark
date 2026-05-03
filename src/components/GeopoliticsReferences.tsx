import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import { geopoliticsThemedReferences, type ThemedReferences } from '@/data/geopoliticsReferences';

const StatusBadge: React.FC<{ status?: string }> = ({ status }) => {
  if (status !== 'must') return null;
  return <Badge className="bg-green-600 text-white">Indispensable</Badge>;
};

export const GeopoliticsReferences: React.FC = () => {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-orange-600" />
          Références de géopolitique (par thèmes)
        </CardTitle>
        <div className="text-sm text-muted-foreground">Légende: <span className="font-medium">Indispensable</span></div>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          {geopoliticsThemedReferences.map((group: ThemedReferences, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold">{group.theme}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  {group.items.map((it, i) => (
                    <li key={i} className="flex items-start justify-between gap-3">
                      <div className="flex-1 font-medium">{it.ref}</div>
                      <StatusBadge status={it.status} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

