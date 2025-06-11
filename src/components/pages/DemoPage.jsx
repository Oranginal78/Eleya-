import React, { useState, useEffect } from 'react';
import BasePage from './BasePage';

const DemoPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <BasePage>
            {/* Hero Section with exact dotted background from landing page */}
            <section className="relative min-h-screen overflow-hidden flex items-center justify-center -mt-16" style={{
                backgroundColor: 'transparent',
                backgroundImage: 'radial-gradient(rgba(254, 195, 147, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                {/* Background Images - same as landing page */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://framerusercontent.com/images/lysrb9oLsW8SXarkxi4Kp9N2FM.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-transparent"></div>
                </div>

                {/* Light Flare Overlay - same as landing page */}
                <div className="absolute inset-0 z-10">
                    <img
                        src="https://framerusercontent.com/images/xdIsSG8TXSulnA0CMVea6YY2Q.png"
                        alt="Light Flare"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Main content */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                                Request a Demo
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-sans max-w-2xl mx-auto">
                                See Intelly in action. Book a personalized demo and discover how our AI-powered analytics can transform your business.
                            </p>
                        </div>

                        {/* Form Card - Made wider */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12 lg:p-16">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-8 text-center">
                                    Book your demo
                                </h2>

                                <form className="space-y-6 max-w-3xl mx-auto">
                                    {/* Name fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm"
                                            placeholder="Company Inc."
                                        />
                                    </div>

                                    {/* Job Title */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm"
                                            placeholder="e.g. Data Analyst, Marketing Manager"
                                        />
                                    </div>

                                    {/* Demo interests */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            What would you like to see in the demo?
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm resize-none"
                                            placeholder="Tell us about your specific use case or questions..."
                                        ></textarea>
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-xl font-display font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                                    >
                                        Request Demo
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade - same as landing page */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/40 via-orange-50/30 to-transparent z-30"></div>
            </section>
        </BasePage>
    );
};

export default DemoPage; 