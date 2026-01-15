
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, PenTool, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-slate-900 overflow-hidden pt-20 lg:pt-32 pb-20 lg:pb-32">
                <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Digital Marketing Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Scale Your Business with <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Data-Driven Marketing
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Enovex delivers measurable growth through advanced SEO, PPC strategies, and premium web design. Stop guessing, start growing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/free-audit"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
                            >
                                Get Free Consultation <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/case-studies"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-semibold text-lg transition-all border border-white/10"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats or Elements could go here */}
            </section>

            {/* Services Overview */}
            <section className="py-20 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to elevate your brand and drive conversions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<TrendingUp className="w-8 h-8 text-blue-500" />}
                            title="SEO Optimization"
                            description="Rank higher on Google and drive organic traffic with our data-backed SEO strategies."
                        />
                        <ServiceCard
                            icon={<Globe className="w-8 h-8 text-purple-500" />}
                            title="PPC & Advertising"
                            description="Maximize ROI with targeted Google and Meta ad campaigns that convert clicks into customers."
                        />
                        <ServiceCard
                            icon={<PenTool className="w-8 h-8 text-pink-500" />}
                            title="Content Marketing"
                            description="Engage your audience with compelling content that builds authority and trust."
                        />
                        <ServiceCard
                            icon={<BarChart2 className="w-8 h-8 text-indigo-500" />}
                            title="Data Analytics"
                            description="Make informed decisions with deep insights into user behavior and campaign performance."
                        />
                        <ServiceCard
                            icon={<Users className="w-8 h-8 text-teal-500" />}
                            title="Social Media"
                            description="Build a loyal community and boost brand awareness across all major social platforms."
                        />
                        <ServiceCard
                            icon={<Globe className="w-8 h-8 text-orange-500" />}
                            title="Web Development"
                            description="Fast, responsive, and stunning websites designed to convert visitors into clients."
                        />
                    </div>
                </div>
            </section>
            {/* Why Choose Us & Stats */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">WHY CHOOSE ENOVEX?</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We don't just deliver reports; we deliver results. Our data-driven approach ensures every dollar you spend contributes to your bottom line.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
                                    <p className="text-slate-600">Client Retention</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-purple-600 mb-2">250+</h3>
                                    <p className="text-slate-600">Projects Delivered</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-pink-600 mb-2">5M+</h3>
                                    <p className="text-slate-600">Leads Generated</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-orange-600 mb-2">10x</h3>
                                    <p className="text-slate-600">Average ROI</p>
                                </div>
                            </div>

                            <Link to="/about" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group">
                                Learn more about us <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Team working together"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-blue-900/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-16">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Startups & SMEs', 'Corporate', 'Real Estate', 'Education', 'Healthcare', 'E-Commerce', 'Hospitality', 'Travel'].map((industry) => (
                            <span key={industry} className="px-8 py-3 bg-white text-slate-700 rounded-full shadow-sm text-lg font-medium hover:bg-blue-600 hover:text-white transition-all cursor-default border border-slate-100">
                                {industry}
                            </span>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/industries" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                            View All Industries <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Book a free consultation today and let's discuss how we can help you achieve your goals.
                    </p>
                    <Link
                        to="/contact"
                        className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Schedule Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
    >
        <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default Home;
