import React from 'react';
import {
  Accordion as ShadAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * Charter-styled accordion for civilisation pages.
 * - Trigger: DM Serif title, hover orange
 * - Item: white card, border PR gray-light, rounded
 */

type CivAccordionProps = {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: React.ReactNode;
};

export const CivAccordion: React.FC<CivAccordionProps> = ({
  type = 'multiple',
  defaultValue,
  children,
}) => {
  if (type === 'single') {
    return (
      <ShadAccordion type="single" collapsible defaultValue={defaultValue as string} className="w-full space-y-4">
        {children}
      </ShadAccordion>
    );
  }
  return (
    <ShadAccordion type="multiple" defaultValue={defaultValue as string[]} className="w-full space-y-4">
      {children}
    </ShadAccordion>
  );
};

type CivItemProps = {
  value: string;
  title: string;
  children: React.ReactNode;
};

export const CivItem: React.FC<CivItemProps> = ({ value, title, children }) => {
  return (
    <AccordionItem
      value={value}
      className="bg-white border border-pr-gray-light rounded-xl px-6 hover:border-pr-orange/60 transition-colors"
    >
      <AccordionTrigger className="font-dm-serif text-lg sm:text-xl text-pr-black hover:text-pr-orange-dark hover:no-underline py-5 [&[data-state=open]]:text-pr-orange-dark">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pt-2 pb-6 text-pr-gray-dark/90 leading-relaxed font-dm-sans">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

/**
 * Inline vocabulary box used inside accordion content.
 */
type CivVocabBoxProps = {
  label?: string;
  words: string;
};

export const CivVocabBox: React.FC<CivVocabBoxProps> = ({ label = 'Key Vocabulary', words }) => {
  return (
    <div className="bg-pr-orange-pale border-l-[3px] border-pr-orange p-4 rounded-r-md mt-4">
      <p className="text-sm text-pr-orange-dark italic">
        <strong className="font-dm-sans font-semibold uppercase tracking-[0.08em] text-[11px] not-italic mr-2">
          {label} ·
        </strong>
        <span className="text-pr-gray-dark">{words}</span>
      </p>
    </div>
  );
};

export default CivAccordion;
