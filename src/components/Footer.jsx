import React from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Instagram, href: profileData.socialLinks.instagram, label: 'Instagram' },
        { icon: Linkedin, href: profileData.socialLinks.linkedin, label: 'LinkedIn' },
    ];

    return (
        <footer className="relative bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#hero" className="font-display text-2xl font-bold text-white tracking-wider">
                            ARUN<span className="text-[#e63946]">.</span>
                        </a>
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} Arun Rawat. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-[#e63946] hover:text-white transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-white/40 hover:text-[#e63946] transition-colors"
                    >
                        <span className="text-sm tracking-wider uppercase">Back to Top</span>
                        <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#e63946]/20 transition-colors">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Large Background Text */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
                <div className="font-display text-[15vw] font-bold text-white/[0.02] leading-none text-center whitespace-nowrap">
                    ARUN RAWAT
                </div>
            </div>
        </footer>
    );
};

export default Footer;
