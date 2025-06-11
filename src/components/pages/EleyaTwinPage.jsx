import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
import { CpuChipIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const EleyaTwinPage = () => {
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
                            EleyaTwin
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                            Revolutionary AI-powered digital twin technology that creates virtual representations of your business processes for advanced analytics and optimization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/demo"
                                className="inline-block bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block border border-[#194471]/20 hover:border-[#194471]/50 text-gray-600 hover:text-[#194471] px-8 py-4 rounded-lg font-display font-medium transition-all duration-200"
                            >
                                Learn More
                            </Link>
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
                                <CpuChipIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Digital Twin Technology
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Create accurate virtual models of your business processes and systems for comprehensive analysis.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <LightBulbIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Predictive Insights
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Leverage AI to predict future outcomes and optimize your strategies before implementation.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <ChartBarIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Real-time Optimization
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Monitor and optimize your processes in real-time with continuous feedback loops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default EleyaTwinPage; 