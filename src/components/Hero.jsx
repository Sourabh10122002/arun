import React, { useCallback } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { profileData, projectsData } from '../data/mock';

const Hero = () => {
    // Callback ref fires synchronously when the DOM node is created,
    // before the browser starts loading — this is the only reliable way
    // to set the muted attribute on iOS Safari via React.
    const videoCallback = useCallback((node) => {
        if (!node) return;
        node.muted = true;
        node.defaultMuted = true;
        node.setAttribute('muted', '');
        node.load();
        const tryPlay = () => node.play().catch(() => {});
        node.addEventListener('loadedmetadata', tryPlay, { once: true });
        // Also try immediately in case metadata is already loaded
        if (node.readyState >= 1) tryPlay();
    }, []);

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    ref={videoCallback}
                    className="w-full h-full object-cover opacity-40"
                    src={projectsData[0]?.videoUrl}
                    loop
                    playsInline
                    preload="metadata"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />
            </div>

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

            {/* Letterbox Effect */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-[#0a0a0a]" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0a0a0a]" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                <div className="max-w-4xl">
                    {/* Pre-title */}
                    <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
                        <div className="w-12 h-[2px] bg-[#e63946]" />
                        <span className="text-[#e63946] text-sm tracking-[0.3em] uppercase font-medium">
                            Video Editor
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                        {profileData.name.split(' ')[0]}
                        <br />
                        <span className="text-[#e63946]">{profileData.name.split(' ')[1]}</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards">
                        {profileData.tagline}
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={scrollToProjects}
                        className="group flex items-center gap-3 bg-[#e63946] hover:bg-[#c62836] text-white px-8 py-4 rounded-full transition-all duration-300 hover:gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards"
                    >
                        <Play size={20} fill="white" />
                        <span className="text-sm tracking-widest uppercase font-medium">View My Work</span>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
                <button
                    onClick={scrollToProjects}
                    className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown size={20} />
                </button>
            </div>

            {/* Side Text */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                <span className="text-white/20 text-xs tracking-[0.5em] uppercase rotate-90 inline-block origin-center" style={{ writingMode: 'vertical-rl' }}>
                    Crafting Visual Stories
                </span>
            </div>
        </section>
    );
};

export default Hero;
