
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Share2, MousePointer, PenTool, Video, BarChart2, Lightbulb, ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        End-to-end digital marketing solutions designed to scale your business.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 space-y-24">
                    {/* Digital Marketing */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-slate-200 flex-grow"></div>
                            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Digital Marketing</h2>
                            <div className="h-px bg-slate-200 flex-grow"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceItem
                                icon={<Search className="text-blue-500" />}
                                title="SEO Optimization"
                                desc="Dominate search results and drive organic traffic."
                                link="/services/seo"
                            />
                            <ServiceItem
                                icon={<Share2 className="text-purple-500" />}
                                title="Social Media Marketing"
                                desc="Build a brand voice that resonates across platforms."
                                link="/services/social-media"
                            />
                            <ServiceItem
                                icon={<MousePointer className="text-pink-500" />}
                                title="PPC Advertising"
                                desc="Immediate visibility and high-intent lead generation."
                                link="/services/ppc"
                            />
                        </div>
                    </div>

                    {/* Creative & Dev */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-slate-200 flex-grow"></div>
                            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Web & Creative</h2>
                            <div className="h-px bg-slate-200 flex-grow"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceItem
                                icon={<Lightbulb className="text-yellow-500" />}
                                title="Branding & Identity"
                                desc="Logos and brand guidelines that tell your story."
                                link="/services/branding"
                            />
                            <ServiceItem
                                icon={<GlobeIcon className="text-indigo-500" />}
                                title="Web Design & Dev"
                                desc="Responsive, fast, and conversion-optimized websites."
                                link="/services/web-design"
                            />
                            <ServiceItem
                                icon={<Video className="text-red-500" />}
                                title="Video Marketing"
                                desc="Engaging video content for ads and social media."
                                link="/services/video"
                            />
                        </div>
                    </div>

                    {/* Performance */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-slate-200 flex-grow"></div>
                            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Performance</h2>
                            <div className="h-px bg-slate-200 flex-grow"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceItem
                                icon={<BarChart2 className="text-teal-500" />}
                                title="Analytics & Reporting"
                                desc="Deep dive into data to optimize performance."
                                link="/services/analytics"
                            />
                            {/* Add more performance services if needed */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

import { Globe as GlobeIcon } from 'lucide-react';

const ServiceItem = ({ icon, title, desc, link }) => (
    <Link to={link} className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="text-blue-500" />
        </div>
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600">{desc}</p>
    </Link>
);

import React from 'react';

export default Services;
