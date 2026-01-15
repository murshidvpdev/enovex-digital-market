
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Success Stories</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Real results for real businesses. See how we help our clients grow.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 space-y-20">
                    <CaseStudyCard
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        category="SEO & Content"
                        title="300% Traffic Increase for FinTech Startup"
                        stats={[
                            { label: 'Organic Traffic', value: '+300%' },
                            { label: 'Leads generated', value: '1.5k+' },
                            { label: 'Timeframe', value: '6 Months' }
                        ]}
                    />
                    <CaseStudyCard
                        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        category="PPC & CRO"
                        title="Doubling E-Commerce Sales with Meta Ads"
                        stats={[
                            { label: 'ROAS', value: '8.5x' },
                            { label: 'Revenue', value: '$250k+' },
                            { label: 'Cost per Acq.', value: '-40%' }
                        ]}
                        reverse
                    />
                    <CaseStudyCard
                        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        category="Web Design & Branding"
                        title="Rebranding a Real Estate Giant"
                        stats={[
                            { label: 'Conversion Rate', value: '+150%' },
                            { label: 'Bounce Rate', value: '-25%' },
                            { label: 'Brand Lift', value: 'High' }
                        ]}
                    />
                </div>
            </section>
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Have a similar project in mind?</h2>
                    <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-slate-50 transition-colors">
                        Discuss Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

const CaseStudyCard = ({ image, category, title, stats, reverse }) => (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <img src={image} alt={title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
        </div>
        <div className="lg:w-1/2 w-full">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">{category}</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>

            <div className="grid grid-cols-3 gap-6 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                {stats.map((stat, idx) => (
                    <div key={idx}>
                        <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </div>

            <Link to="/case-studies" className="text-slate-900 font-bold inline-flex items-center gap-2 hover:text-blue-600 transition-colors">
                Read Full Story <ArrowUpRight className="w-5 h-5" />
            </Link>
        </div>
    </div>
);

export default CaseStudies;
