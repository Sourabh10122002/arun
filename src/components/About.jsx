import React from 'react';
import { Film, Camera, Sparkles, Clock } from 'lucide-react';
import { profileData } from '../data/mock';

const About = () => {
    const features = [
        { icon: Film, title: 'Cinematic Editing', desc: 'Creating film-quality edits' },
        { icon: Camera, title: 'Cinematography', desc: 'Visual storytelling mastery' },
        { icon: Sparkles, title: 'Visual Effects', desc: 'Seamless VFX integration' },
        { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround times' },
    ];

    return (
        <section id="about" className="relative py-32 bg-[#0a0a0a]">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e63946]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#e63946]" />
                            <span className="text-[#e63946] text-sm tracking-[0.3em] uppercase font-medium">
                                About Me
                            </span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Turning Footage Into
                            <br />
                            <span className="text-[#e63946]">Cinematic Art</span>
                        </h2>

                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            I'm a cinematographer and video editor who believes every frame should tell a story. From capturing authentic moments behind the camera to shaping powerful narratives in the edit, I focus on visuals that feel real, intentional, and cinematic.
                        </p>

                        <p className="text-white/40 text-base leading-relaxed">
                            Every project is an opportunity to tell a unique story. I believe in the power of visual storytelling to evoke emotions, convey messages, and create memorable experiences that resonate with audiences.
                        </p>
                    </div>

                    {/* Right Content - Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-[#141414] border border-white/5 rounded-lg hover:border-[#e63946]/50 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(230,57,70,0.2)]"
                            >
                                <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                                    <feature.icon className="text-[#e63946] group-hover:text-white" size={24} />
                                </div>
                                <h3 className="text-white font-display text-xl font-medium mb-3 tracking-wide">{feature.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/10">
                    {[
                        { number: '30+', label: 'Projects Completed' },
                        { number: '2+', label: 'Years Experience' },
                        { number: '20+', label: 'Happy Clients' },
                        { number: '100%', label: 'Satisfaction Rate' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#e63946] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-white/50 text-sm tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
