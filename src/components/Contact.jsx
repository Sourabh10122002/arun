import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { profileData } from '../data/mock';
import { toast } from 'sonner';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Handle 404 (API not found in local npm run dev)
            if (response.status === 404) {
                throw new Error("API endpoint not found. Are you running 'vercel dev'?");
            }

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                toast.success("Message sent successfully!");
                // Reset success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Failed to send message:', data.error);
                toast.error(`Failed to send message: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 bg-[#0a0a0a]">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#e63946]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#e63946]" />
                            <span className="text-[#e63946] text-sm tracking-[0.3em] uppercase font-medium">
                                Get In Touch
                            </span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Let's Create
                            <br />
                            <span className="text-[#e63946]">Something Great</span>
                        </h2>

                        <p className="text-white/60 text-lg leading-relaxed mb-12">
                            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life through powerful visual storytelling.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center">
                                    <Mail className="text-[#e63946]" size={20} />
                                </div>
                                <div>
                                    <div className="text-white/40 text-sm mb-1">Email</div>
                                    <a href={`mailto:${profileData.email}`} className="text-white hover:text-[#e63946] transition-colors">
                                        {profileData.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-[#e63946]" size={20} />
                                </div>
                                <div>
                                    <div className="text-white/40 text-sm mb-1">Location</div>
                                    <span className="text-white">{profileData.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-[#141414] border border-white/5 rounded-xl p-8">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-[#e63946]/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="text-[#e63946]" size={32} />
                                </div>
                                <h3 className="text-white text-2xl font-medium mb-3">Message Sent!</h3>
                                <p className="text-white/50">Thank you for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-white/70 text-sm mb-2 block">Your Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946] focus:ring-[#e63946]/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/70 text-sm mb-2 block">Your Email</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946] focus:ring-[#e63946]/20"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-white/70 text-sm mb-2 block">Subject</label>
                                    <Input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project Inquiry"
                                        className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946] focus:ring-[#e63946]/20"
                                    />
                                </div>

                                <div>
                                    <label className="text-white/70 text-sm mb-2 block">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#e63946] focus:ring-[#e63946]/20 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#e63946] hover:bg-[#c62836] text-white py-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span className="tracking-wider uppercase text-sm font-medium">Send Message</span>
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
