import React from 'react';
import BasePage from './pages/BasePage';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ValueSection from './sections/ValueSection';
import UseCasesSection from './sections/ProblemSection';
import StudyResultsSection from './sections/StudyResultsSection';
import FiguresSection from './sections/FiguresSection';
import ScrollingQuestionsSection from './sections/ScrollingQuestionsSection';
import BlogSection from './sections/BlogSection';

const LandingPage = () => {
    return (
        <BasePage>
            <HeroSection />
            <FeaturesSection />
            <ValueSection />
            <UseCasesSection />
            <FiguresSection />
            <StudyResultsSection />
            <ScrollingQuestionsSection />
            <BlogSection />
        </BasePage>
    );
};

export default LandingPage; 