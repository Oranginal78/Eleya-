import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';

const OpinionPage = () => {
    return (
        <BasePage>
            <section className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#194471] text-sm font-medium uppercase tracking-wide mb-4 font-sans">
                            Solutions - By Use Case
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            Opinion
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
                            Reliably analyze underrepresented groups and gather comprehensive opinion data from diverse audiences.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/demo"
                                className="inline-block bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default OpinionPage; 