import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Sparkles, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

interface VideoItem {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: 'conseils' | 'live' | 'organisation';
}

const videos: VideoItem[] = [
    {
        id: 'prepa-chez-toi',
        title: 'Prépare-toi chez toi',
        description: "Découvre comment organiser ta préparation efficacement depuis chez toi avec les bonnes méthodes et les bons outils.",
        youtubeId: 'vPlRUX1OfiQ',
        category: 'organisation',
    },
    {
        id: 'live-conseils',
        title: 'Live Conseils',
        description: "Session live avec mes meilleurs conseils pour réussir en prépa ECG. Questions / réponses en direct.",
        youtubeId: 'GEI6T4SMRDw',
        category: 'live',
    },
    {
        id: 'conseils-1',
        title: 'Conseils #1',
        description: "Premier épisode de ma série de conseils : les fondamentaux pour bien démarrer ta prépa et éviter les erreurs classiques.",
        youtubeId: 'Bg2SLzqfpfM',
        category: 'conseils',
    },
    {
        id: 'conseils-2',
        title: 'Conseils #2',
        description: "Deuxième épisode : comment optimiser tes révisions et construire une routine de travail solide.",
        youtubeId: '0KxgQGnk_1s',
        category: 'conseils',
    },
    {
        id: 'conseils-3',
        title: 'Conseils #3',
        description: "Troisième épisode : stratégies avancées pour progresser rapidement et gagner des points aux concours.",
        youtubeId: 'TyFQkWizJF8',
        category: 'conseils',
    },
    {
        id: 'conseils-4',
        title: 'Conseils #4',
        description: "Quatrième épisode : les derniers conseils indispensables pour maximiser tes résultats et rester motivé.",
        youtubeId: 'a0rp4iCyDgU',
        category: 'conseils',
    },
    {
        id: 'gestion-temps',
        title: 'Gestion du temps de travail',
        description: "Comment gérer ton temps de travail efficacement en prépa ? Méthodes concrètes, planning, et astuces pour ne rien laisser au hasard.",
        youtubeId: '6hZVGoSB5ts',
        category: 'organisation',
    },
];

const categoryLabels: Record<string, string> = {
    conseils: 'Conseils',
    live: 'Live',
    organisation: 'Organisation',
};

const VideoCard: React.FC<{ video: VideoItem; index: number }> = ({ video, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const categoryLabel = categoryLabels[video.category];
    const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

    return (
        <div
            className="scale-in group"
            style={{ animationDelay: `${0.08 * index}s` }}
        >
            <div className="bg-white border border-[#D8D6CE] rounded-xl hover:border-[#F4845F] transition-colors duration-300 overflow-hidden h-full flex flex-col">
                <div className="h-[3px] w-full bg-[#F4845F]" />

                {/* Vignette / lecteur */}
                <div className="relative aspect-video bg-[#F7F6F3] overflow-hidden">
                    {isPlaying ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    ) : (
                        <>
                            <img
                                src={thumbnailUrl}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                loading="lazy"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-[#1A1A18]/20 group-hover:bg-[#1A1A18]/10 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F4845F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white ml-1" fill="white" />
                                </div>
                            </div>
                            <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#C45A35] bg-[#FDF0EC] border border-[#F9C4B0]">
                                    {categoryLabel}
                                </span>
                            </div>
                        </>
                    )}
                </div>

                {/* Corps */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl text-[#1A1A18] mb-2 group-hover:text-[#F4845F] transition-colors duration-300">
                        {video.title}
                    </h3>
                    <p className="text-sm text-[#1A1A18] leading-relaxed mb-5 flex-1">
                        {video.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#D8D6CE]">
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="inline-flex items-center gap-2 text-[#F4845F] hover:text-[#C45A35] font-semibold text-sm transition-colors duration-300"
                        >
                            <Play className="h-4 w-4" />
                            Regarder la vidéo
                        </button>
                        <a
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1A1A18]/60 hover:text-[#1A1A18] text-xs transition-colors duration-300"
                        >
                            YouTube ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConseilsVideosPage: React.FC = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );

        const elements = document.querySelectorAll('.fade-in-up, .scale-in');
        elements.forEach((el) => {
            observerRef.current?.observe(el);
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('animate-in');
            }
        });

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F6F3]">
            <SEOHead
                title="Conseils en vidéo — Prépa Rationnelle | Tous mes conseils pour réussir en prépa ECG"
                description="Retrouvez tous mes conseils en vidéo pour réussir en prépa ECG : méthodes de travail, gestion du temps, astuces pour progresser et sessions live."
                canonical="/conseils-videos"
            />

            <div className="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
                {/* Retour */}
                <div className="fade-in-up mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#1A1A18] hover:text-[#F4845F] transition-colors duration-300 group text-sm font-medium"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                    </Link>
                </div>

                {/* Hero */}
                <div className="text-center mb-14 sm:mb-20">
                    <div className="fade-in-up inline-flex items-center gap-2 bg-[#FDF0EC] text-[#C45A35] border border-[#F9C4B0] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                        <Video className="h-3.5 w-3.5" />
                        {videos.length} vidéos disponibles
                    </div>

                    <h1 className="fade-in-up font-serif text-5xl sm:text-6xl lg:text-7xl mb-5 text-[#1A1A18] leading-tight" style={{ animationDelay: '0.05s' }}>
                        Tous mes <span className="text-[#F4845F]">conseils en vidéo</span>
                    </h1>

                    <div className="fade-in-up flex justify-center mb-5" style={{ animationDelay: '0.07s' }}>
                        <div className="h-[2px] w-16 bg-[#F4845F]" />
                    </div>

                    <p className="fade-in-up text-base sm:text-lg text-[#1A1A18] max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.1s' }}>
                        Méthodes de travail, gestion du temps, astuces pour progresser. Toutes mes vidéos pour réussir ta prépa ECG.
                    </p>
                </div>

                {/* Stats */}
                <div className="fade-in-up max-w-3xl mx-auto mb-16" style={{ animationDelay: '0.15s' }}>
                    <div className="bg-white border border-[#D8D6CE] rounded-xl overflow-hidden">
                        <div className="h-[3px] w-full bg-[#F4845F]" />
                        <div className="grid grid-cols-3 divide-x divide-[#D8D6CE]">
                            <div className="text-center p-6 sm:p-8">
                                <div className="font-serif text-4xl sm:text-5xl text-[#F4845F] mb-2 leading-none">
                                    {videos.length}
                                </div>
                                <div className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wider">Vidéos</div>
                            </div>
                            <div className="text-center p-6 sm:p-8">
                                <div className="font-serif text-4xl sm:text-5xl text-[#F4845F] mb-2 leading-none">
                                    4
                                </div>
                                <div className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wider">Séries de conseils</div>
                            </div>
                            <div className="text-center p-6 sm:p-8">
                                <div className="font-serif text-4xl sm:text-5xl text-[#F4845F] mb-2 leading-none">
                                    100<span className="text-2xl">%</span>
                                </div>
                                <div className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wider">Gratuit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grille vidéos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
                    {videos.map((video, index) => (
                        <VideoCard key={video.id} video={video} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-white border border-[#D8D6CE] rounded-xl overflow-hidden">
                        <div className="h-[3px] w-full bg-[#F4845F]" />
                        <div className="p-10 sm:p-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-[#FDF0EC] text-[#C45A35] border border-[#F9C4B0] px-4 py-1.5 rounded-full mb-6">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span className="font-semibold text-xs uppercase tracking-wider">Envie d'aller plus loin ?</span>
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] mb-4 leading-tight">
                                Rejoins les <span className="text-[#F4845F]">formations complètes</span>
                            </h2>
                            <p className="text-[#1A1A18] mb-8 max-w-lg mx-auto">
                                Accède à toutes les formations : cours, exercices, flashcards, quiz et coaching personnalisé pour réussir tes concours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link to="/formations">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto bg-[#F4845F] hover:bg-[#C45A35] text-white font-semibold py-6 px-7 text-base rounded-lg shadow-none transition-colors"
                                    >
                                        Voir les formations
                                        <Sparkles className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto bg-white hover:bg-[#F7F6F3] text-[#1A1A18] border border-[#D8D6CE] font-semibold py-6 px-7 text-base rounded-lg shadow-none transition-colors"
                                    >
                                        Me contacter
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .fade-in-up, .scale-in {
                    opacity: 0;
                }

                .fade-in-up.animate-in {
                    animation: fadeInUp 0.7s ease-out forwards;
                }

                .scale-in.animate-in {
                    animation: scaleIn 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ConseilsVideosPage;
