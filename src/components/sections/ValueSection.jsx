import React, { useEffect, useRef, useState } from 'react';
import {
    CurrencyDollarIcon,
    ClockIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

const ValueCard = ({ icon: Icon, number, title, description, delay = 0 }) => {
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
            className={`group bg-blue-50 rounded-xl p-8 shadow-sm border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Icon className="w-6 h-6 text-blue-600" />
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

const ValueSection = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const values = [
        {
            icon: CurrencyDollarIcon,
            number: "1",
            title: "Up to 90% cost reduction",
            description: "Access niche audiences at a fraction of the cost"
        },
        {
            icon: ClockIcon,
            number: "2",
            title: "<1h",
            description: "Get results in real-time"
        },
        {
            icon: UsersIcon,
            number: "3",
            title: "100,000",
            description: "More than 100,000 digital twins already simulated"
        }
    ];

    return (
        <section className="relative py-20" style={{
            backgroundColor: 'transparent'
        }}>
            {/* Dégradé de transition du haut */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/40 via-white/70 to-white/90 z-10"></div>

            {/* Contenu principal avec fond semi-transparent */}
            <div className="relative z-20" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backgroundImage: 'radial-gradient(rgba(147, 197, 253, 0.06) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                margin: '20px 0'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Header */}
                    <div
                        ref={titleRef}
                        className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                            Skip recruitment, test ideas on{' '}
                            <span className="text-blue-600">AI-mirrored audiences</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
                            Finally conduct large-scale surveys on rare populations with our Digital Twins.
                            Ignore panel fatigue and launch follow-up studies to dig further.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <ValueCard
                                key={index}
                                icon={value.icon}
                                number={value.number}
                                title={value.title}
                                description={value.description}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dégradé de transition du bas */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 via-white/70 to-white/90 z-10"></div>
        </section>
    );
};

export default ValueSection; 