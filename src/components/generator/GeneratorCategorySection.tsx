
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from "@/lib/utils";

type AutomationKey =
  | 'answer'
  | 'flashcards'
  | 'languages'
  | 'geopolitics'
  | 'case-study'
  | 'emlyon'
  | 'edhec'
  | 'theme-grammar'
  | 'school-profile'
  | 'math-tutor'
  | 'python-tutor'
  | 'python-exercises'
  | 'prepa-chatbot';

interface Automation {
  key: AutomationKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  automations: Automation[];
  gradient: string;
}

interface GeneratorCategorySectionProps {
  categories: Category[];
  onSelect: (key: AutomationKey) => void;
}

export const GeneratorCategorySection: React.FC<GeneratorCategorySectionProps> = ({
  categories,
  onSelect,
}) => (
  <div className="space-y-12">
    {categories.map((category, index) => (
      <div key={index} className="space-y-6">
        <Card className={cn("overflow-hidden border-0 shadow-lg", category.gradient)}>
          <CardHeader className="text-center py-6">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                {category.icon}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              {category.title}
            </CardTitle>
            <p className="text-white/90 text-base">
              {category.description}
            </p>
          </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.automations.map(auto => (
            <button
              key={auto.key}
              onClick={() => onSelect(auto.key)}
              className={cn(
                "group flex flex-col items-start p-6 rounded-lg bg-white hover:shadow-xl hover:bg-primary/5 transition-all border border-border/40 relative ring-0 focus-visible:ring-2 focus-visible:ring-primary outline-none text-left",
              )}
              style={{ minHeight: 170 }}
              tabIndex={0}
              aria-label={auto.title}
            >
              <div className="flex items-center gap-3 mb-3">
                {auto.icon}
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {auto.badge}
                </span>
              </div>
              <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{auto.title}</div>
              <div className="text-sm text-muted-foreground">{auto.description}</div>
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);
