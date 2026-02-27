import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Sparkles, Clock, Eye, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

interface VideoItem {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: 'conseils' | 'live' | 'organisation';
    icon: string;
}

const videos: VideoItem[] = [
    {
        id: 'prepa-chez-toi',
        title: 'Prépare-toi chez toi',
        description: "Découvre comment organiser ta préparation efficacement depuis chez toi avec les bonnes méthodes et les bons outils.",
        youtubeId: 'vPlRUX1OfiQ',
        category: 'organisation',
        icon: '🏠',
    },
    {
        id: 'live-conseils',
        title: 'Live Conseils',
        description: "Session live avec mes meilleurs conseils pour réussir en prépa ECG. Questions / réponses en direct.",
        youtubeId: 'GEI6T4SMRDw',
        category: 'live',
        icon: '🔴',
    },
    {
        id: 'conseils-1',
        title: 'Conseils #1',
        description: "Premier épisode de ma série de conseils : les fondamentaux pour bien démarrer ta prépa et éviter les erreurs classiques.",
        youtubeId: 'Bg2SLzqfpfM',
        category: 'conseils',
        icon: '💡',
    },
    {
        id: 'conseils-2',
        title: 'Conseils #2',
        description: "Deuxième épisode : comment optimiser tes révisions et construire une routine de travail solide.",
        youtubeId: '0KxgQGnk_1s',
        category: 'conseils',
        icon: '💡',
    },
    {
        id: 'conseils-3',
        title: 'Conseils #3',
        description: "Troisième épisode : stratégies avancées pour progresser rapidement et gagner des points aux concours.",
        youtubeId: 'TyFQkWizJF8',
        category: 'conseils',
        icon: '💡',
    },
    {
        id: 'conseils-4',
        title: 'Conseils #4',
        description: "Quatrième épisode : les derniers conseils indispensables pour maximiser tes résultats et rester motivé.",
        youtubeId: 'a0rp4iCyDgU',
        category: 'conseils',
        icon: '💡',
    },
    {
        id: 'gestion-temps',
        title: 'Gestion du temps de travail',
        description: "Comment gérer ton temps de travail efficacement en prépa ? Méthodes concrètes, planning, et astuces pour ne rien laisser au hasard.",
        youtubeId: '6hZVGoSB5ts',
        category: 'organisation',
        icon: '⏱️',
    },
];

const categoryLabels: Record<string, { label: string; color: string }> = {
    conseils: { label: 'Conseils', color: 'from-orange-400 to-orange-600' },
    live: { label: 'Live', color: 'from-red-400 to-red-600' },
    organisation: { label: 'Organisation', color: 'from-amber-400 to-orange-500' },
};

const VideoCard: React.FC<{ video: VideoItem; index: number }> = ({ video, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const cat = categoryLabels[video.category];
    const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

    return (
        <div
            className="scale-in group"
            style={{ animationDelay: `${0.08 * index}s` }}
        >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-orange-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-2 overflow-hidden">
                {/* Video Thumbnail / Player */}
                <div className="relative aspect-video bg-black/40 overflow-hidden">
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
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback to hqdefault if maxresdefault fails
                                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                }}
                            />
                            {/* Play overlay */}
                            <div
                                className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-110 transition-all duration-300 group-hover:bg-orange-500">
                                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white ml-1" fill="white" />
                                </div>
                            </div>
                            {/* Category badge */}
                            <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cat.color} shadow-lg`}>
                                    {video.icon} {cat.label}
                                </span>
                            </div>
                        </>
                    )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        {video.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                        {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors duration-300"
                        >
                            <Play className="h-4 w-4" />
                            Regarder la vidéo
                        </button>
                        <a
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/70 text-xs transition-colors duration-300"
                        >
                            Ouvrir sur YouTube ↗
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
        <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
            <SEOHead
                title="Conseils en vidéo — Prépa Rationnelle | Tous mes conseils pour réussir en prépa ECG"
                description="Retrouvez tous mes conseils en vidéo pour réussir en prépa ECG : méthodes de travail, gestion du temps, astuces pour progresser et sessions live."
                canonical="/conseils-videos"
            />

            {/* Decorative background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-400/8 rounded-full blur-[180px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[160px]"></div>
            <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
                {/* Back Button */}
                <div className="fade-in-up mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-orange-400 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="text-center mb-14 sm:mb-20">
                    <div className="fade-in-up inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Video className="h-4 w-4" />
                        {videos.length} vidéos disponibles
                    </div>

                    <h1 className="fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ animationDelay: '0.05s' }}>
                        Tous mes{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                            conseils en vidéo
                        </span>
                    </h1>

                    <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed" style={{ animationDelay: '0.1s' }}>
                        Méthodes de travail, gestion du temps, astuces pour progresser… Retrouve toutes mes vidéos pour réussir ta prépa ECG.
                    </p>
                </div>

                {/* Stats */}
                <div className="fade-in-up max-w-3xl mx-auto mb-16" style={{ animationDelay: '0.15s' }}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-white/10 hover:border-orange-400/30 transition-all duration-500 shadow-2xl">
                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div className="group">
                                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {videos.length}
                                </div>
                                <div className="text-white/70 text-sm font-medium">Vidéos</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    4
                                </div>
                                <div className="text-white/70 text-sm font-medium">Séries de conseils</div>
                            </div>
                            <div className="group">
                                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    100%
                                </div>
                                <div className="text-white/70 text-sm font-medium">Gratuit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
                    {videos.map((video, index) => (
                        <VideoCard key={video.id} video={video} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-3xl border-2 border-white/10 hover:border-orange-400/30 transition-all duration-500 max-w-2xl mx-auto shadow-2xl">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
                            <Sparkles className="h-4 w-4 text-orange-400" />
                            <span className="text-orange-400 font-bold text-sm">Envie d'aller plus loin ?</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Rejoins les formations complètes
                        </h2>
                        <p className="text-white/60 mb-8 max-w-lg mx-auto">
                            Accède à toutes les formations : cours, exercices, flashcards, quiz et coaching personnalisé pour réussir tes concours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/formations">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 px-8 text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 rounded-xl"
                                >
                                    Voir les formations
                                    <Sparkles className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-orange-400/50 text-white hover:bg-white/20 font-bold py-6 px-8 text-lg shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                                >
                                    Me contacter
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default ConseilsVideosPage;
