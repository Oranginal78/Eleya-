import React, { useEffect, useRef, useState } from 'react';

const BarChart = ({ data, title, question, isAnimated = false, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationProgress, setAnimationProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => {
                        setIsVisible(true);
                        if (isAnimated) {
                            setHasAnimated(true);
                            // Animate bars progressively
                            const duration = 1500;
                            const startTime = Date.now();

                            const animate = () => {
                                const elapsed = Date.now() - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                setAnimationProgress(progress);

                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            };

                            animate();
                        }
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, [isAnimated, delay, hasAnimated]);

    // Ajuster les valeurs pour que les barres ne remplissent pas complètement la largeur
    const getBarWidth = (value, maxValue) => {
        const baseWidth = (value / maxValue) * 70; // Réduire de 100% à 70% max
        return baseWidth;
    };

    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-display font-semibold text-gray-800 mb-2">
                    {question}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>COMPLETED</span>
                    <span className="ml-auto">15 AVR., 09:39</span>
                </div>
            </div>

            {/* Filter dropdown placeholder */}
            <div className="mb-6">
                <div className="relative">
                    <button className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg text-gray-500 text-sm">
                        Select filter parameter
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-20 text-right text-sm text-gray-600 font-medium">
                            {item.label}
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-md h-8 relative overflow-hidden">
                            <div
                                className="bg-[#194471] h-full rounded-md transition-all duration-1000 ease-out"
                                style={{
                                    width: isAnimated
                                        ? `${getBarWidth(item.value, maxValue) * animationProgress}%`
                                        : `${getBarWidth(item.value, maxValue)}%`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-24">
                <span>0</span>
                <span>7</span>
                <span>14</span>
                <span>21</span>
                <span>28</span>
            </div>
        </div>
    );
};

const StackedBarChart = ({ data, title, question, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const colors = {
        'Likely cannot cooperate': '#4FC3D7', // Cyan
        'Likely can cooperate': '#6BCF7C', // Green  
        'Not sure': '#A8E6CF', // Light green
        'Definitely cannot cooperate': '#5BC0EB', // Blue
        'Other': '#FFB366' // Orange
    };

    const ageGroups = ['50-64', '65-74', '35-49', '25-34', '75+'];

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-display font-semibold text-gray-800 mb-2">
                    {question}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>COMPLETED</span>
                    <span className="ml-auto">11 JUIN, 14:02</span>
                </div>
            </div>

            {/* Age filter */}
            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Age</span>
                    <button className="ml-auto text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="space-y-3">
                {data.map((item, index) => {
                    const total = Object.values(item.values).reduce((sum, val) => sum + val, 0);
                    // Réduire la largeur totale pour que les barres ne remplissent pas complètement
                    const maxWidth = 75; // Largeur maximum en pourcentage

                    return (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-24 text-right text-sm text-gray-600 font-medium">
                                {item.category}
                            </div>
                            <div className="flex-1 relative">
                                <div className="bg-gray-100 rounded-md h-6 overflow-hidden">
                                    <div className="flex h-full" style={{ width: `${maxWidth}%` }}>
                                        {Object.entries(item.values).map(([key, value], segmentIndex) => (
                                            <div
                                                key={segmentIndex}
                                                className="transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${(value / total) * 100}%`,
                                                    backgroundColor: colors[key] || '#E5E7EB',
                                                    transitionDelay: `${segmentIndex * 100}ms`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-28">
                <span>0</span>
                <span>8</span>
                <span>16</span>
                <span>24</span>
                <span>32</span>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs">
                {Object.entries(colors).map(([key, color]) => (
                    <div key={key} className="flex items-center gap-1">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                        <span className="text-gray-600">{key}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StudyResultsSection = () => {
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

    // Data for first chart (simple bar chart)
    const techAchievementsData = [
        { label: 'The best', value: 25 },
        { label: 'Above average', value: 28 },
        { label: 'Below average', value: 8 }
    ];

    // Data for second chart (stacked bar chart by age)
    const cooperationData = [
        {
            category: 'Likely cannot cooperate',
            values: {
                'Likely cannot cooperate': 14,
                'Likely can cooperate': 8,
                'Not sure': 4,
                'Definitely cannot cooperate': 2
            }
        },
        {
            category: 'Likely can cooperate',
            values: {
                'Likely cannot cooperate': 6,
                'Likely can cooperate': 4,
                'Not sure': 2,
                'Other': 1
            }
        },
        {
            category: 'Not sure',
            values: {
                'Likely cannot cooperate': 3,
                'Likely can cooperate': 2,
                'Not sure': 1
            }
        },
        {
            category: 'Definitely cannot cooperate',
            values: {
                'Likely cannot cooperate': 3,
                'Likely can cooperate': 2
            }
        }
    ];

    return (
        <section className="relative py-20" style={{
            backgroundColor: 'transparent'
        }}>
            {/* Dégradé de transition du haut */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/40 via-white/60 to-white/75 z-10"></div>

            {/* Contenu principal avec fond semi-transparent */}
            <div className="relative z-20" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backgroundImage: 'radial-gradient(rgba(254, 195, 147, 0.06) 1px, transparent 1px)',
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
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-[#194471] rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800">
                                Study Results
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Real-time insights from our AI-powered survey platform
                        </p>
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <BarChart
                            data={techAchievementsData}
                            question="How does the U.S. compare to other wealth nations in Technological achievements?"
                            isAnimated={true}
                            delay={200}
                        />
                        <StackedBarChart
                            data={cooperationData}
                            question="Do you think the U.S. and China can cooperate on Resolving international conflicts?"
                            delay={400}
                        />
                    </div>
                </div>
            </div>

            {/* Dégradé de transition du bas */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 via-white/60 to-white/75 z-10"></div>
        </section>
    );
};

export default StudyResultsSection; 