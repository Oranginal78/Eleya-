import React from 'react';
import BasePage from './BasePage';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
    return (
        <BasePage>
            <section className="py-20 bg-gradient-to-br from-primary-50/30 to-primary-100/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
                            Get in touch with our team to learn more about how Intelly can transform your analytics.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                                Send us a message
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="Company Inc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                                Get in touch
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <EnvelopeIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">Email</h3>
                                        <p className="text-gray-500 font-sans">contact@intelly.ai</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <PhoneIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">Phone</h3>
                                        <p className="text-gray-500 font-sans">+33 1 23 45 67 89</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                                        <MapPinIcon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-gray-800 mb-2">Office</h3>
                                        <p className="text-gray-500 font-sans">
                                            123 Avenue des Champs-Élysées<br />
                                            75008 Paris, France
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default ContactPage; 