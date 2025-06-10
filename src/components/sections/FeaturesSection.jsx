import React, { useEffect, useRef, useState } from 'react';
import {
    UserGroupIcon,
    ClockIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

const FeatureCard = ({ icon: Icon, number, title, description, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className={`group bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <Icon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-display font-bold text-blue-600">({number})</span>
                <h3 className="text-xl font-display font-semibold text-gray-800">
                    {title}
                </h3>
            </div>
            <p className="text-gray-600 leading-relaxed font-sans">
                {description}
            </p>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: UserGroupIcon,
            number: "1",
            title: "Digital Twins",
            description: "Create digital twins that mimic the behavior, preferences, and opinions of your target audience with training data."
        },
        {
            icon: ClockIcon,
            number: "2",
            title: "Real-time interrogation",
            description: "Submit your survey to your AI panel of digital twins. Access hard-to-reach audiences and cut research delays."
        },
        {
            icon: ChartBarIcon,
            number: "3",
            title: "Data Visualization & Extraction",
            description: "Analyze results directly on our platform with intuitive visualization tools or extract the data in your format of choice."
        }
    ];

    return (
        <section className="relative py-20" style={{
            backgroundColor: 'transparent'
        }}>
            {/* Dégradé de transition du haut */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/40 via-white/60 to-white/80 z-10"></div>

            {/* Contenu principal avec fond semi-transparent */}
            <div className="relative z-20" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backgroundImage: 'radial-gradient(rgba(147, 197, 253, 0.04) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                margin: '20px 0',
                borderRadius: '0'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                number={feature.number}
                                title={feature.title}
                                description={feature.description}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dégradé de transition du bas */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 via-white/60 to-white/80 z-10"></div>
        </section>
    );
};

export default FeaturesSection; 