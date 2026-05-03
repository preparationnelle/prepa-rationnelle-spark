import React, { useState } from 'react';
import { Bot, Calculator, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';
import { MathGenerator } from '@/components/generator/MathGenerator';
import { AtlasECGChatbot } from '@/components/generator/AtlasECGChatbot';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type AgentId = 'majora' | 'maths' | 'atlas';

interface Agent {
    id: AgentId;
    name: string;
    shortName: string;
    description: string;
    icon: React.ElementType;
    component: React.ReactNode;
}

export const AIChatHubPage = () => {
    const [selectedAgentId, setSelectedAgentId] = useState<AgentId>('majora');

    const agents: Agent[] = [
        {
            id: 'majora',
            name: 'Majora (Prépa)',
            shortName: 'Majora',
            description: 'Méthode, organisation, soutien',
            icon: Bot,
            component: <PrepaChatbotGenerator variant="embedded" />,
        },
        {
            id: 'maths',
            name: 'Assistant Maths',
            shortName: 'Maths',
            description: 'Cours, exercices, LaTeX',
            icon: Calculator,
            component: <MathGenerator variant="embedded" />,
        },
        {
            id: 'atlas',
            name: 'Atlas ECG',
            shortName: 'Atlas',
            description: 'HGG, histoire, concepts',
            icon: Globe,
            component: <AtlasECGChatbot mode="embedded" />,
        },
    ];

    const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col bg-pr-gray-bg overflow-hidden">
            {/* Mobile : Tab bar horizontale */}
            <div className="md:hidden flex-shrink-0 bg-white border-b border-pr-gray-light">
                <div className="px-4 pt-4 pb-3">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-7 w-7 bg-pr-orange rounded-lg flex items-center justify-center">
                            <Sparkles className="h-3.5 w-3.5 text-white" />
                        </div>
                        <h2 className="font-dm-serif text-lg text-pr-black">AI Chat Hub</h2>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {agents.map((agent) => {
                            const isSelected = selectedAgentId === agent.id;
                            return (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgentId(agent.id)}
                                    className={cn(
                                        'flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 font-dm-sans uppercase tracking-[0.05em]',
                                        isSelected
                                            ? 'bg-pr-orange text-white'
                                            : 'bg-pr-orange-pale text-pr-orange-dark hover:bg-pr-orange-soft'
                                    )}
                                >
                                    <agent.icon className="h-3.5 w-3.5" />
                                    {agent.shortName}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop layout */}
            <div className="flex-1 flex flex-row overflow-hidden">
                {/* Sidebar desktop */}
                <div className="hidden md:flex w-80 flex-col bg-white border-r border-pr-gray-light shrink-0">
                    {/* Header sidebar */}
                    <div className="p-6 border-b border-pr-gray-light">
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="h-8 w-8 bg-pr-orange rounded-lg flex items-center justify-center">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <h2 className="font-dm-serif text-xl text-pr-black">AI Chat Hub</h2>
                        </div>
                        <div className="h-[2px] w-10 bg-pr-orange rounded-full mb-3" />
                        <p className="text-xs text-pr-gray-mid leading-relaxed font-dm-sans">
                            Tes assistants spécialisés, au même endroit.
                        </p>
                    </div>

                    {/* Cartes agents */}
                    <div className="p-3 space-y-2 flex-1 overflow-y-auto">
                        {agents.map((agent) => {
                            const isSelected = selectedAgentId === agent.id;
                            return (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgentId(agent.id)}
                                    className={cn(
                                        'w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center gap-3 group relative overflow-hidden font-dm-sans',
                                        isSelected
                                            ? 'bg-pr-orange-pale border border-pr-orange/40'
                                            : 'hover:bg-pr-gray-bg border border-transparent'
                                    )}
                                >
                                    {/* Indicateur actif — trait orange */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeAgent"
                                            className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-pr-orange"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    {/* Icône */}
                                    <div
                                        className={cn(
                                            'h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition-colors',
                                            isSelected
                                                ? 'bg-pr-orange text-white'
                                                : 'bg-pr-orange-pale text-pr-orange-dark group-hover:bg-pr-orange-soft'
                                        )}
                                    >
                                        <agent.icon className="h-5 w-5" />
                                    </div>

                                    {/* Texte */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={cn(
                                                'font-semibold text-sm truncate transition-colors',
                                                isSelected ? 'text-pr-black' : 'text-pr-gray-dark group-hover:text-pr-black'
                                            )}
                                        >
                                            {agent.name}
                                        </h3>
                                        <p
                                            className={cn(
                                                'text-xs truncate mt-0.5',
                                                isSelected ? 'text-pr-orange-dark' : 'text-pr-gray-mid'
                                            )}
                                        >
                                            {agent.description}
                                        </p>
                                    </div>

                                    <ChevronRight
                                        className={cn(
                                            'h-4 w-4 shrink-0 transition-all duration-200',
                                            isSelected
                                                ? 'text-pr-orange translate-x-0'
                                                : 'text-pr-gray-mid/0 -translate-x-2 group-hover:text-pr-gray-mid group-hover:translate-x-0'
                                        )}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Info bas */}
                    <div className="p-4 border-t border-pr-gray-light">
                        <div className="bg-pr-orange-pale border border-pr-orange/20 rounded-xl p-3 text-xs text-pr-gray-dark leading-relaxed font-dm-sans">
                            <p className="flex items-center gap-1.5 mb-1">
                                <Sparkles className="h-3 w-3 text-pr-orange" />
                                <span className="font-semibold uppercase tracking-[0.06em] text-pr-orange-dark text-[10px]">
                                    Bientôt
                                </span>
                            </p>
                            ESH, Lettres, Espagnol...
                        </div>
                    </div>
                </div>

                {/* Zone chat principale */}
                <div className="flex-1 flex flex-col overflow-hidden relative bg-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAgentId}
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="w-full h-full"
                        >
                            {selectedAgent.component}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AIChatHubPage;
