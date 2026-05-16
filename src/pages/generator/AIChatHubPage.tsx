import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Calculator, Globe, Sparkles, ChevronRight, Home } from 'lucide-react';
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
        <div className="h-[calc(100vh-4rem)] flex flex-col carnet-paper overflow-hidden">
            {/* Mobile : Tab bar horizontale */}
            <div className="md:hidden flex-shrink-0 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
                <div className="px-4 pt-4 pb-3">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-8 w-8 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                            <Sparkles className="h-4 w-4 text-carnet-red" />
                        </div>
                        <h2 className="font-lora text-[20px] text-carnet-ink">
                            AI Chat <em className="font-lora italic text-carnet-red">Hub</em>
                        </h2>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {agents.map((agent) => {
                            const isSelected = selectedAgentId === agent.id;
                            return (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgentId(agent.id)}
                                    className={cn(
                                        'flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 font-instrument uppercase tracking-[0.1em]',
                                        isSelected
                                            ? 'bg-carnet-red text-carnet-paper'
                                            : 'bg-[rgba(193,68,58,0.06)] text-carnet-red border border-[rgba(193,68,58,0.25)] hover:bg-[rgba(193,68,58,0.12)]'
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
                <div className="hidden md:flex w-80 flex-col carnet-paper-plain border-r border-dashed border-[rgba(78,55,30,0.18)] shrink-0">
                    {/* Header sidebar */}
                    <div className="p-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
                        <nav className="flex items-center font-instrument text-[11px] text-carnet-ink-mute mb-3 flex-wrap">
                            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                                <Home className="h-3 w-3" />
                                <span>Accueil</span>
                            </Link>
                            <ChevronRight className="h-3 w-3 mx-1.5 opacity-50" />
                            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
                        </nav>
                        <div className="carnet-eyebrow text-[11px] mb-3">AI Chat Hub</div>
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="h-10 w-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                                <Sparkles className="h-5 w-5 text-carnet-red" />
                            </div>
                            <h2 className="font-lora text-[24px] text-carnet-ink leading-tight">
                                Assistants <em className="font-lora italic text-carnet-red">IA</em>
                            </h2>
                        </div>
                        <div className="h-[2px] w-10 bg-carnet-ink rounded-full mb-3" />
                        <p className="font-instrument text-[13px] text-carnet-ink-soft leading-relaxed">
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
                                        'w-full text-left p-3.5 rounded-md transition-all duration-200 flex items-center gap-3 group relative overflow-hidden font-instrument',
                                        isSelected
                                            ? 'bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]'
                                            : 'hover:bg-carnet-paper-2 border border-transparent'
                                    )}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeAgent"
                                            className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-carnet-red"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    <div
                                        className={cn(
                                            'h-11 w-11 rounded-full flex items-center justify-center shrink-0 transition-colors border',
                                            isSelected
                                                ? 'bg-carnet-red text-carnet-paper border-carnet-red'
                                                : 'bg-[rgba(193,68,58,0.08)] text-carnet-red border-[rgba(193,68,58,0.2)] group-hover:bg-[rgba(193,68,58,0.12)]'
                                        )}
                                    >
                                        <agent.icon className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={cn(
                                                'font-semibold text-sm truncate transition-colors font-instrument',
                                                isSelected ? 'text-carnet-ink' : 'text-carnet-ink-soft group-hover:text-carnet-ink'
                                            )}
                                        >
                                            {agent.name}
                                        </h3>
                                        <p
                                            className={cn(
                                                'text-xs truncate mt-0.5',
                                                isSelected ? 'text-carnet-red' : 'text-carnet-ink-mute'
                                            )}
                                        >
                                            {agent.description}
                                        </p>
                                    </div>

                                    <ChevronRight
                                        className={cn(
                                            'h-4 w-4 shrink-0 transition-all duration-200',
                                            isSelected
                                                ? 'text-carnet-red translate-x-0'
                                                : 'text-carnet-ink-mute/0 -translate-x-2 group-hover:text-carnet-ink-mute group-hover:translate-x-0'
                                        )}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Info bas */}
                    <div className="p-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                        <div className="bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-md p-3 text-xs text-carnet-ink-soft leading-relaxed font-instrument">
                            <p className="flex items-center gap-1.5 mb-1">
                                <Sparkles className="h-3 w-3 text-carnet-red" />
                                <span className="carnet-eyebrow text-[10px]">
                                    Bientôt
                                </span>
                            </p>
                            ESH, Lettres, Espagnol...
                        </div>
                    </div>
                </div>

                {/* Zone chat principale — papier visible en arrière-plan, chatbot centré */}
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAgentId}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="w-full h-full flex items-stretch justify-center px-4 py-5 md:px-10 md:py-8 overflow-hidden"
                        >
                            <div className="w-full max-w-3xl h-full">
                                {selectedAgent.component}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AIChatHubPage;
