
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getGrammarExplanation } from "./grammarExplanations";

interface ThemeGrammarTipsProps {
  tips: string[];
}

const ThemeGrammarTips: React.FC<ThemeGrammarTipsProps> = ({ tips }) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="mt-2 text-sm text-gray-600">
      <b>Conseils :</b>
      <TooltipProvider>
        <ul className="list-disc ml-8">
          {tips.map((t, i) => (
            <li key={i} className="inline-block mr-2 mb-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="underline text-blue-700 hover:text-blue-900 transition-colors rounded-md px-2 py-0.5"
                    type="button"
                  >
                    {t}
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <span dangerouslySetInnerHTML={{ __html: getGrammarExplanation(t) }} />
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </div>
  );
};

export default ThemeGrammarTips;
