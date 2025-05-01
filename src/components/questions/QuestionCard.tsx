
import React, { useState } from 'react';
import { Question } from '../../data/questionCards';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <Card className="h-full flex flex-col transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {isAnswerVisible ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="example">
              <AccordionTrigger className="text-primary font-medium">
                Exemple de réponse structurée
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-accent/50 rounded-md mb-4">
                  {question.exampleAnswer}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tips">
              <AccordionTrigger className="text-primary font-medium">
                Conseils pour répondre
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-muted rounded-md">
                  {question.tips}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Button 
              onClick={() => setIsAnswerVisible(true)} 
              variant="outline" 
              className="border-dashed border-2 hover:border-primary hover:bg-primary/5"
            >
              Voir la structure de réponse
            </Button>
          </div>
        )}
      </CardContent>
      {isAnswerVisible && (
        <CardFooter className="border-t pt-4 flex justify-end">
          <Button 
            variant="ghost" 
            onClick={() => setIsAnswerVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            Masquer
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
