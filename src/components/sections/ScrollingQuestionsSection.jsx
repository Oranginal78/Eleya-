import React from 'react';

const ScrollingQuestionsSection = () => {
    const questions = {
        row1: [
            "How often do you use meal kit delivery services?",
            "How appealing is this claim?",
            "When you think of luxury skincare brands, which names come to mind first?",
            "Which brands of electric toothbrushes have you used in the past 3 months?",
            "How likely are you to repurchase Dyson vacuum cleaners?",
            "Which claim conveys the most innovative message?",
            "How unique is this statement?",
            "On a 0-10 scale, how likely are you to recommend Spotify Premium to a friend?"
        ],
        row2: [
            "If available today at $299, how likely would you be to buy...?",
            "What is your biggest frustration with mobile banking apps?",
            "How satisfied are you with your Amazon Prime membership?",
            "How appealing is this claim?",
            "Which of these sports drink brands are you aware of?",
            "What are the top 3 factors you consider when choosing a project management software?",
            "How well does innovative describe Tesla electric vehicles?",
            "How would you describe this product concept...?"
        ],
        row3: [
            "Compared to Samsung, how would you rate Apple smartphones on battery life?",
            "Where am I losing potential leads in my funnel?",
            "If Nike were a person, which personality traits would best describe them?",
            "How believable is this statement...?",
            "What is the primary reason for your Netflix recommendation score?",
            "What concerns you about a ring that monitors blood pressure?",
            "Rank all claims from the most to the less convincing",
            "Which one brand of athletic sneakers do you use most often?"
        ]
    };

    return (
        <section className="py-16 overflow-hidden" style={{
            backgroundColor: '#FFFBF7'
        }}>
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