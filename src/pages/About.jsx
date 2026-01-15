
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-bold text-white mb-6"
                    >
                        About <span className="text-blue-500">Enovex</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We are a team of digital strategists, creatives, and technologists sharing a single vision: to help businesses grow in the digital age.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Enovex Digital Marketing is not just an agency; we are your growth partners. Founded on the principles of transparency and results, we have helped hundreds of businesses navigate the complex digital landscape.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Based in Dubai, we blend local market insights with global best practices to deliver campaigns that resonate and convert.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team meeting" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Data analysis" className="rounded-2xl shadow-lg w-full h-64 object-cover" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Target className="w-8 h-8 text-blue-500" />}
                            title="Our Mission"
                            description="To empower businesses with innovative digital solutions that drive measurable growth and sustainable success."
                        />
                        <ValueCard
                            icon={<Eye className="w-8 h-8 text-purple-500" />}
                            title="Our Vision"
                            description="To be the leading digital transformation partner for forward-thinking companies in the UAE and beyond."
                        />
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-pink-500" />}
                            title="Our Values"
                            description="Transparency, Integrity, Innovation, and a relentless focus on Client Success define everything we do."
                        />
                    </div>
                </div>
            </section>

            {/* Why Enovex is Different */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-16">Why We Are Different</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={<Zap />} title="Agile Approach" />
                        <FeatureCard icon={<BarChart2 />} title="Data-First" />
                        <FeatureCard icon={<Users />} title="Expert Team" />
                        <FeatureCard icon={<Award />} title="Proven Results" />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="bg-slate-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

import { BarChart2 } from 'lucide-react';

const FeatureCard = ({ icon, title }) => (
    <div className="p-6 bg-slate-50 rounded-xl flex flex-col items-center gap-4 hover:bg-slate-100 transition-colors">
        <div className="text-slate-900 w-10 h-10">{icon}</div>
        <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
    </div>
);

export default About;
