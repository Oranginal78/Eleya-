import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
import { CloudArrowUpIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const EleyaTwinPage = () => {
    return (
        <BasePage>
            <section className="relative h-[36rem] overflow-hidden -mt-16" style={{
                backgroundColor: 'transparent',
                backgroundImage: 'radial-gradient(rgba(254, 195, 147, 0.5) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://framerusercontent.com/images/lysrb9oLsW8SXarkxi4Kp9N2FM.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 via-orange-300/40 to-transparent"></div>
                </div>

                {/* Light Flare Overlay */}
                <div className="absolute inset-0 z-10">
                    <img
                        src="https://framerusercontent.com/images/xdIsSG8TXSulnA0CMVea6YY2Q.png"
                        alt="Light Flare"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-[#194471] leading-tight mb-6">
                            EleyaTwin
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                            EleyaTwin is an AI-powered research platform. Our customers conduct their surveys on Digital Twins of their target population on EleyaTwin.
                        </p>
                        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                            Augment your survey data with AI to multiply insights and boost your customer understanding to deliver them more value.
                        </p>
                    </div>
                </div>

                {/* Bottom Fade - jonction dégradée vers la section suivante */}
                <div className="absolute bottom-0 left-0 right-0 h-80 z-30 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, #FFF4E6 100%)'
                    }}
                ></div>
            </section>

            <section className="pt-2 pb-20" style={{
                backgroundColor: '#FFF4E6',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.1) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-800 mb-4">
                            How EleyaTwin Works
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
                            Three simple steps to revolutionize your research process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <CloudArrowUpIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <div className="w-8 h-8 bg-[#194471] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Upload your Dataset
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Upload quantitative or qualitative data to create your Digital Twins and build accurate virtual representations of your target population.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <UserGroupIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <div className="w-8 h-8 bg-[#194471] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Survey your Virtual Audience
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Design your next survey on your Virtual Audience with intuitive tools and conduct research at scale without traditional limitations.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <ChartBarIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <div className="w-8 h-8 bg-[#194471] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Extract Results in Your Format
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Analyze survey results directly on our platform and extract the data in your preferred format for seamless integration with your workflow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default EleyaTwinPage; 