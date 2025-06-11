import React from 'react';

const ScrollingQuestionsSection = () => {
    const questions = {
        row1: [
            "Which areas of my website are underperforming?",
            "How can I improve user engagement?",
            "What's causing my page load speed to drop?",
            "Why isn't my traffic converting?",
            "What needs to be optimized first?",
            "How can I detach this problem?",
            "Where am I losing potential leads in my funnel?",
            "What factors are affecting my bounce rate?"
        ],
        row2: [
            "How can I detach this problem?",
            "Why isn't my traffic converting?",
            "What needs to be optimized first?",
            "Where am I losing potential leads in my funnel?",
            "Which areas of my website are underperforming?",
            "How can I improve user engagement?",
            "What's causing my page load speed to drop?",
            "What factors are affecting my bounce rate?"
        ],
        row3: [
            "What factors are affecting my bounce rate?",
            "Where am I losing potential leads in my funnel?",
            "Which areas of my website are underperforming?",
            "How can I improve user engagement?",
            "What's causing my page load speed to drop?",
            "Why isn't my traffic converting?",
            "What needs to be optimized first?",
            "How can I detach this problem?"
        ]
    };

    return (
        <section className="py-16 overflow-hidden bg-gray-50">
            <div className="space-y-6">
                {/* Row 1 - Scrolls from left to right */}
                <div className="relative">
                    <div className="flex animate-scroll-right">
                        {[...questions.row1, ...questions.row1].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scrolls from right to left */}
                <div className="relative">
                    <div className="flex animate-scroll-left">
                        {[...questions.row2, ...questions.row2].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3 - Scrolls from left to right */}
                <div className="relative">
                    <div className="flex animate-scroll-right-slow">
                        {[...questions.row3, ...questions.row3].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollingQuestionsSection; 