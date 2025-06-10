import React from 'react';
import BasePage from './BasePage';
import { CalendarDaysIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const DemoPage = () => {
    return (
        <BasePage>
            <section className="py-20 bg-gradient-to-br from-primary-50/30 to-primary-100/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            Request a Demo
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
                            See Intelly in action. Book a personalized demo with our team and discover how our AI-powered analytics can transform your business.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Demo Form */}
                        <div>
                            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                                Book your demo
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="Company Inc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="e.g. Data Analyst, Marketing Manager"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Company Size
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans">
                                        <option>Select company size</option>
                                        <option>1-10 employees</option>
                                        <option>11-50 employees</option>
                                        <option>51-200 employees</option>
                                        <option>201-1000 employees</option>
                                        <option>1000+ employees</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        What would you like to see in the demo?
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="Tell us about your specific use case or questions..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Request Demo
                                </button>
                            </form>
                        </div>

                        {/* Demo Info */}
                        <div>
                            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                                What to expect
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <ClockIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">30-minute session</h3>
                                        <p className="text-gray-500 font-sans">
                                            A focused demo tailored to your specific needs and use cases.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <UserGroupIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">Expert guidance</h3>
                                        <p className="text-gray-500 font-sans">
                                            Our AI specialists will show you exactly how Intelly can solve your challenges.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <CalendarDaysIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">Flexible scheduling</h3>
                                        <p className="text-gray-500 font-sans">
                                            Available times from Monday to Friday, across all time zones.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-gray-25 rounded-xl border border-gray-100">
                                <h3 className="font-display font-semibold text-gray-800 mb-3">
                                    Popular demo topics:
                                </h3>
                                <ul className="space-y-2 text-gray-500 font-sans">
                                    <li>• Real-time analytics dashboard</li>
                                    <li>• AI-powered insights generation</li>
                                    <li>• Custom reporting and visualization</li>
                                    <li>• Data integration and setup</li>
                                    <li>• ROI calculation and business impact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default DemoPage; 