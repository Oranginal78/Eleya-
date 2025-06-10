import React from 'react';
import BasePage from './BasePage';
import { GlobeAltIcon, LanguageIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const FranceGPTPage = () => {
    return (
        <BasePage>
            <section className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            FranceGPT
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                            Advanced French language AI model specifically designed for the French market, culture, and business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                                Get Started
                            </button>
                            <button className="border border-[#194471]/20 hover:border-[#194471]/50 text-gray-600 hover:text-[#194471] px-8 py-4 rounded-lg font-display font-medium transition-all duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20" style={{
                backgroundColor: '#FFF4E6',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.1) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <LanguageIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Native French Understanding
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Trained specifically on French language nuances, cultural context, and market-specific terminology.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <GlobeAltIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Local Market Focus
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Designed for French businesses with deep understanding of local regulations and market dynamics.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <AcademicCapIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Advanced Analytics
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Powerful analytical capabilities tailored for French data sources and business intelligence needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default FranceGPTPage; 