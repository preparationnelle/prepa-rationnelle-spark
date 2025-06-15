
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, BookOpen, School } from 'lucide-react';

export interface Answer {
  directAnswer: string;
  storytelling: string;
  schoolLink: string;
  fullText: string;
}

interface ResponseTabsProps {
  answer: Answer;
  language: 'fr' | 'en';
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ResponseTabs = ({ answer, language, activeTab, onTabChange }: ResponseTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="mt-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="response" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          {language === 'fr' ? 'Réponse directe' : 'Direct answer'}
        </TabsTrigger>
        <TabsTrigger value="storytelling" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          {language === 'fr' ? 'Storytelling' : 'Storytelling'}
        </TabsTrigger>
        <TabsTrigger value="school" className="flex items-center gap-2">
          <School className="h-4 w-4" />
          {language === 'fr' ? 'Lien école' : 'School link'}
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="response" className="mt-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-green-800">
              {language === 'fr' ? 'Réponse directe' : 'Direct Answer'}
            </h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {answer.directAnswer}
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="storytelling" className="mt-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-blue-800">
              {language === 'fr' ? 'Storytelling' : 'Storytelling'}
            </h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {answer.storytelling}
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="school" className="mt-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">
              {language === 'fr' ? 'Lien avec l\'école' : 'Link to School'}
            </h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {answer.schoolLink}
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
