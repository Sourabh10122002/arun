import React, { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/mock';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from './ui/dialog';

const ProjectCard = ({ project, onClick, isLarge = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={`group relative bg-[#141414] rounded-lg overflow-hidden cursor-pointer ${isLarge ? 'aspect-[21/9]' : 'aspect-video'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {/* Video Preview */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent transition-all duration-500 ${isHovered ? 'opacity-40' : 'opacity-80'}`} />

            {/* Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
                <span className="inline-block px-3 py-1 bg-[#e63946] text-white text-[10px] tracking-[0.2em] uppercase font-bold rounded-sm mb-4">
                    {project.category}
                </span>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#e63946] transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2">
                    {project.description}
                </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-white/70" />
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const modalVideoRef = useRef(null);

    const togglePlayPause = () => {
        if (modalVideoRef.current) {
            if (isPlaying) {
                modalVideoRef.current.pause();
            } else {
                modalVideoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleOpenChange = (open) => {
        if (!open) {
            setSelectedProject(null);
            setIsPlaying(true);
        }
    };

    return (
        <section id="projects" className="relative py-32 bg-[#0f0f0f]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-[#e63946]" />
                        <span className="text-[#e63946] text-sm tracking-[0.3em] uppercase font-medium">
                            Portfolio
                        </span>
                        <div className="w-8 h-[2px] bg-[#e63946]" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Selected <span className="text-[#e63946]">Works</span>
                    </h2>

                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        A curated collection of my best cinematography and video editing projects.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={index === 4 ? "md:col-span-2" : ""}
                        >
                            <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                                isLarge={index === 4}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={!!selectedProject} onOpenChange={handleOpenChange}>
                <DialogContent className="max-w-5xl w-[95vw] p-0 bg-[#0a0a0a] border-white/10 overflow-hidden">
                    <DialogTitle className="sr-only">
                        {selectedProject?.title || 'Project Video'}
                    </DialogTitle>
                    {selectedProject && (
                        <div className="relative">
                            {/* Video */}
                            <div className="aspect-video bg-black">
                                <video
                                    ref={modalVideoRef}
                                    className="w-full h-full"
                                    src={selectedProject.videoUrl}
                                    autoPlay
                                    controls
                                    playsInline
                                />
                            </div>

                            {/* Info Bar */}
                            <div className="p-6 bg-[#141414]">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#e63946]/20 text-[#e63946] text-xs tracking-wider uppercase rounded-full mb-3">
                                            {selectedProject.category}
                                        </span>
                                        <h3 className="text-white text-2xl font-medium mb-2">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-white/50">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Projects;
