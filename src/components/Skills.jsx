import React from 'react';
import { Camera } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            name: "Adobe Premiere Pro",
            icon: (
                <img
                    src="https://customer-assets.emergentagent.com/job_96aa1ae0-ce99-4689-833a-0757f765f761/artifacts/e48yolut_premeir.png"
                    alt="Adobe Premiere Pro"
                    className="w-16 h-16 object-contain"
                />
            )
        },
        {
            name: "DaVinci Resolve",
            icon: (
                <img
                    src="https://customer-assets.emergentagent.com/job_96aa1ae0-ce99-4689-833a-0757f765f761/artifacts/quctthvn_davinci.png"
                    alt="DaVinci Resolve"
                    className="w-16 h-16 object-contain"
                />
            )
        },
        {
            name: "After Effects",
            icon: (
                <img
                    src="https://customer-assets.emergentagent.com/job_96aa1ae0-ce99-4689-833a-0757f765f761/artifacts/bwvj0wpj_adobe-after-effects-logo.png"
                    alt="After Effects"
                    className="w-16 h-16 object-contain"
                />
            )
        },
        {
            name: "Cinematography",
            icon: (
                <div className="w-16 h-16 bg-[#e63946]/20 rounded-xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-[#e63946]" />
                </div>
            )
        }
    ];

    return (
        <section id="skills" className="relative py-24 bg-[#0a0a0a]">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-[#e63946]" />
                        <span className="text-[#e63946] text-sm tracking-[0.3em] uppercase font-medium">
                            Expertise
                        </span>
                        <div className="w-8 h-[2px] bg-[#e63946]" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Tools & <span className="text-[#e63946]">Skills</span>
                    </h2>

                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Professional software and techniques I use to bring your vision to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-[#141414] border border-white/5 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#e63946]/50 hover:bg-[#1a1a1a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(230,57,70,0.15)]"
                        >
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 bg-white/5 p-4 rounded-2xl group-hover:bg-[#e63946]/10">
                                {skill.icon}
                            </div>
                            <h3 className="text-white font-display text-xl font-medium tracking-wide group-hover:text-[#e63946] transition-colors">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
