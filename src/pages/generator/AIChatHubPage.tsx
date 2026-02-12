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
    gradient: string;
    shadowColor: string;
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
            gradient: 'from-teal-400 to-emerald-500',
            shadowColor: 'shadow-teal-500/30',
            component: <PrepaChatbotGenerator variant="embedded" />,
        },
        {
            id: 'maths',
            name: 'Assistant Maths',
            shortName: 'Maths',
            description: 'Cours, exercices, LaTeX',
            icon: Calculator,
            gradient: 'from-orange-500 to-red-500',
            shadowColor: 'shadow-orange-500/30',
            component: <MathGenerator variant="embedded" />,
        },
        {
            id: 'atlas',
            name: 'Atlas ECG',
            shortName: 'Atlas',
            description: 'HGG, histoire, concepts',
            icon: Globe,
            gradient: 'from-blue-500 to-indigo-600',
            shadowColor: 'shadow-blue-500/30',
            component: <AtlasECGChatbot mode="embedded" />,
        },
    ];

    const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col bg-[#0a0f1a] overflow-hidden relative">
            {/* Background glows */}
            <div className="absolute top-10 left-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            {/* Mobile: Horizontal Tab Bar */}
            <div className="md:hidden flex-shrink-0 bg-white/5 backdrop-blur-xl border-b border-white/10 relative z-20">
                <div className="px-4 pt-4 pb-2">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                        <Sparkles className="h-4 w-4 text-orange-400" />
                        AI Chat Hub
                    </h2>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {agents.map((agent) => {
                            const isSelected = selectedAgentId === agent.id;
                            return (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgentId(agent.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0",
                                        isSelected
                                            ? "bg-gradient-to-r text-white shadow-lg " + `${agent.gradient} ${agent.shadowColor}`
                                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
                                    )}
                                >
                                    <agent.icon className="h-4 w-4" />
                                    {agent.shortName}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="flex-1 flex flex-row overflow-hidden relative z-10">
                {/* Desktop Sidebar */}
                <div className="hidden md:flex w-80 flex-col bg-white/[0.03] backdrop-blur-xl border-r border-white/10 shrink-0">
                    {/* Sidebar Header */}
                    <div className="p-6 border-b border-white/10">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                            <div className="h-8 w-8 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            AI Chat Hub
                        </h2>
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">
                            Vos assistants spécialisés, au même endroit.
                        </p>
                    </div>

                    {/* Agent Cards */}
                    <div className="p-3 space-y-2 flex-1 overflow-y-auto">
                        {agents.map((agent) => {
                            const isSelected = selectedAgentId === agent.id;
                            return (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgentId(agent.id)}
                                    className={cn(
                                        "w-full text-left p-3.5 rounded-xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden",
                                        isSelected
                                            ? "bg-white/10 border border-white/20 shadow-lg"
                                            : "hover:bg-white/[0.06] border border-transparent hover:border-white/10"
                                    )}
                                >
                                    {/* Active indicator bar */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeAgent"
                                            className={cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b", agent.gradient)}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <div className={cn(
                                        "h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 text-white shadow-lg bg-gradient-to-br",
                                        agent.gradient,
                                        agent.shadowColor,
                                        isSelected ? "scale-105" : "group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    )}>
                                        <agent.icon className="h-5 w-5" />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={cn(
                                            "font-semibold text-sm truncate transition-colors",
                                            isSelected ? "text-white" : "text-white/70 group-hover:text-white/90"
                                        )}>
                                            {agent.name}
                                        </h3>
                                        <p className={cn(
                                            "text-xs truncate mt-0.5 transition-colors",
                                            isSelected ? "text-white/50" : "text-white/30 group-hover:text-white/40"
                                        )}>
                                            {agent.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <ChevronRight className={cn(
                                        "h-4 w-4 shrink-0 transition-all duration-300",
                                        isSelected ? "text-white/50 translate-x-0" : "text-white/0 -translate-x-2 group-hover:text-white/30 group-hover:translate-x-0"
                                    )} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Bottom info */}
                    <div className="p-4 border-t border-white/10">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white/40 leading-relaxed">
                            <p className="flex items-center gap-1.5 mb-1">
                                <Sparkles className="h-3 w-3 text-orange-400/60" />
                                <span className="font-semibold text-white/50">Bientôt</span>
                            </p>
                            ESH, Lettres, Espagnol...
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAgentId}
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
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
