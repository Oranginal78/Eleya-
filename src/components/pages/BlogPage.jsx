import React from 'react';
import BasePage from './BasePage';
import BlogSection from '../sections/BlogSection';

const BlogPage = () => {
    return (
        <BasePage>
            <div className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-gray-800 mb-6">
                            Latest Insights & Resources
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-sans">
                            Stay ahead with our latest insights, tips, and best practices for analytics, performance optimization, and business growth.
                        </p>
                    </div>
                </div>
            </div>
            <BlogSection />
        </BasePage>
    );
};

export default BlogPage; 