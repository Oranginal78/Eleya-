import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const SyntheticDataReliabilityPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#194471] hover:text-[#194471]/80 transition-colors duration-200 mb-8"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                Dec 8, 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                8 min read
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-display font-semibold text-gray-900 mb-6">
                            Understanding Synthetic Data Reliability: A Complete Guide
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Discover how much data you need to produce reliable synthetic data, explore our model performance achievements, and understand the key terminology in the synthetic data landscape.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl">
                    <img
                        src="/images/illustr2.jpg"
                        alt="Synthetic Data Reliability Analysis"
                        className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-4xl">
                    <div className="prose prose-lg prose-blue max-w-none">
                        <h2>Number of Datapoints Needed for Reliable Synthetic Data</h2>
                        <p>
                            How much data should we have in input to produce reliable synthetic data? That's a question
                            we always get at Eleya, so we wanted to share a few elements on this subject in this comprehensive article.
                        </p>

                        <p>
                            Usually, we observe that the accuracy of our model predictions reaches a good level between
                            20 and 30 input datapoints. The more information we have about a respondent, the more precise
                            its digital twin becomes, answering accurately to a larger range of questions.
                        </p>

                        <h3>Accuracy Per Datapoints in Input</h3>
                        <p>
                            Our research shows a clear correlation between the number of input datapoints and the accuracy
                            of synthetic data generation. The chart above demonstrates how accuracy improves as we increase
                            the amount of input data, with significant improvements visible between 5 and 40 datapoints.
                        </p>

                        <div className="my-8">
                            <img
                                src="/images/illustr1.jpg"
                                alt="Data Spread Analysis"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-gray-600 mt-2 text-center">
                                Distribution analysis showing how data spread varies with the number of questions
                            </p>
                        </div>

                        <h3>Understanding Data Spread and Reliability</h3>
                        <p>
                            The spread analysis reveals important insights about data reliability. As we increase the number
                            of questions from 5 to 40, we observe not only improved accuracy but also more consistent results
                            across different scenarios. This consistency is crucial for reliable synthetic data generation.
                        </p>

                        <p>
                            To help customers assess whether their questions are within the answering capabilities of our
                            digital twins, we've developed a relevance score. That way, we flag their limitations to make
                            sure to always deliver highly reliable synthetic data.
                        </p>

                        <h2>Evaluating Our Model Performance</h2>
                        <p>
                            How did we achieve a 92% similarity between an AI panel and a traditional panel?
                        </p>

                        <p>
                            At Eleya, we replicated a traditional American panel using AI Agents with personalities.
                            The panel was surveyed on global attitudes such as perceptions of foreign powers. Here are
                            the key aspects to achieve such levels of similarity between AI and traditional panels:
                        </p>

                        <div className="my-8">
                            <img
                                src="/images/landscape.jpg"
                                alt="AI Panel vs Traditional Panel Comparison"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-gray-600 mt-2 text-center">
                                Comparison between AI Panel and Traditional Panel responses on international cooperation questions
                            </p>
                        </div>

                        <h3>Key Success Factors</h3>
                        <ol>
                            <li>
                                <strong>Large Amount of High-Quality Data:</strong> We used more than 15 socio-demographic
                                and about 100 opinion datapoints to build the AI Agents profiles
                            </li>
                            <li>
                                <strong>Automated Prompt Engineering:</strong> We implemented automated prompt engineering
                                to rewrite prompts that led to incorrect answers during the training stage
                            </li>
                            <li>
                                <strong>Adapted Use-Case:</strong> We focused on use-cases with most questions demanding
                                a clear position from the respondent rather than highly mitigated answers
                            </li>
                        </ol>

                        <p>
                            The results speak for themselves - achieving 92% similarity demonstrates that synthetic data
                            can be a reliable alternative to traditional panels when properly implemented.
                        </p>

                        <h2>Synthetic Data Glossary</h2>
                        <p>
                            Synthetic Data, Digital Twins, Sample Boosting, Persona Bot… What's behind all those market
                            research buzzwords? Here's a glossary to share our vision at Eleya and clarify the meaning
                            of those catchy words:
                        </p>

                        <h3>Synthetic Data</h3>
                        <p>
                            Data that is created using extrapolation models rather than collected from the real world.
                            It's already been used for a few years in market research, so why all that fuss? Because
                            the latest technological developments such as LLMs pave the way for much more powerful applications.
                        </p>

                        <h3>Digital Twins</h3>
                        <p>
                            Copies of individuals that replicate their behaviors, preferences, and opinions, using real
                            data about each twinned person as input. LLMs are usually used to give life to those digital
                            twins. That's what we do at Eleya.
                        </p>

                        <h3>Fully Synthetic Respondents</h3>
                        <p>
                            Respondents created from scratch using LLMs, without other data in input than the one that
                            has been used in the training phase of the LLM.
                        </p>

                        <h3>Persona Bot</h3>
                        <p>
                            Custom chatbot powered by an LLM that is designed to represent a target segment using
                            aggregated data, thus giving life to a segmentation study.
                        </p>

                        <h3>Sample Boosting</h3>
                        <p>
                            Increase in the size of a sample using a machine-learning model that replicates existing
                            patterns to create new respondents.
                        </p>

                        <h2>Practical Applications and Benefits</h2>

                        <h3>When to Use Synthetic Data</h3>
                        <p>
                            Synthetic data is particularly valuable when:
                        </p>
                        <ul>
                            <li>You need to target specific populations that are hard to reach</li>
                            <li>You want to conduct massive testing without panel fatigue</li>
                            <li>You require consistent data quality across different time periods</li>
                            <li>Privacy concerns limit access to real respondent data</li>
                        </ul>

                        <h3>Quality Assurance</h3>
                        <p>
                            Our relevance scoring system ensures that synthetic data meets quality standards by:
                        </p>
                        <ul>
                            <li>Flagging questions that may be outside the digital twin's capabilities</li>
                            <li>Providing confidence scores for each response</li>
                            <li>Continuously learning from new data to improve accuracy</li>
                            <li>Maintaining transparency about model limitations</li>
                        </ul>

                        <h2>The Future of Synthetic Data</h2>
                        <p>
                            As LLM technology continues to advance, we expect synthetic data to become even more
                            sophisticated and reliable. The key is maintaining a balance between innovation and
                            rigorous validation to ensure that synthetic data serves as a valuable complement to
                            traditional research methods.
                        </p>

                        <p>
                            If you're conducting research and need to target specific populations or conduct massive
                            testing without panel fatigue, we'd love to talk about how synthetic data can enhance
                            your research capabilities.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                            Ready to Explore Synthetic Data?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Discover how EleyaTwin's synthetic data solutions can enhance your research capabilities
                            and provide reliable insights for your business decisions.
                        </p>
                        <Link
                            to="/demo"
                            className="inline-flex items-center gap-2 bg-[#194471] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors duration-200"
                        >
                            Learn More About Synthetic Data
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyntheticDataReliabilityPage; 