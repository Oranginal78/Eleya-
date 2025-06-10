import React, { useEffect, useRef, useState } from 'react';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BlogCard = ({ title, excerpt, date, readTime, image, delay = 0 }) => {
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
        <article
            ref={cardRef}
            className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                            <CalendarIcon className="w-8 h-8 text-primary-500" />
                        </div>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 font-sans">
                    <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {date}
                    </span>
                    <span>{readTime} min read</span>
                </div>

                <h3 className="text-xl font-display font-semibold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-200">
                    {title}
                </h3>

                <p className="text-gray-500 mb-4 line-clamp-3 font-sans">
                    {excerpt}
                </p>

                <button className="flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all duration-200 font-display">
                    Read more
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
        </article>
    );
};

const BlogSection = () => {
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

    const blogPosts = [
        {
            title: "The Future of AI-Powered Analytics",
            excerpt: "Discover how artificial intelligence is revolutionizing the way businesses analyze data and make decisions. Learn about the latest trends and technologies shaping the analytics landscape.",
            date: "Dec 15, 2024",
            readTime: 5,
            image: null
        },
        {
            title: "10 Essential Metrics Every Business Should Track",
            excerpt: "From conversion rates to customer lifetime value, explore the key performance indicators that can drive your business growth and help you make informed decisions.",
            date: "Dec 12, 2024",
            readTime: 7,
            image: null
        },
        {
            title: "How to Optimize Your Website Performance",
            excerpt: "Learn practical strategies to improve your website's speed, user experience, and search engine rankings. Get actionable tips from industry experts.",
            date: "Dec 10, 2024",
            readTime: 6,
            image: null
        }
    ];

    return (
        <section className="py-20 bg-gray-25">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <p className="text-primary-500 text-sm font-medium uppercase tracking-wide mb-4 font-sans">
                        Latest Insights
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                        Stay ahead with our blog
                    </h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto font-sans">
                        Get the latest insights, tips, and best practices for analytics,
                        performance optimization, and business growth.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            readTime={post.readTime}
                            image={post.image}
                            delay={index * 200}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-1000 delay-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <button className="inline-flex items-center gap-2 bg-[#194471] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors duration-200 font-display">
                        View all articles
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection; 