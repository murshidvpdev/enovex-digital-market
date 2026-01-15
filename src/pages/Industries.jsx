
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ShoppingBag, Building2, GraduationCap, Stethoscope, Plane, Home } from 'lucide-react';

const Industries = () => {
    const industries = [
        { name: 'Startups & SMEs', icon: <Briefcase />, desc: 'Growth-focused strategies for scaling businesses.' },
        { name: 'E-Commerce', icon: <ShoppingBag />, desc: 'Drive sales and maximize ROAS.' },
        { name: 'Corporate', icon: <Building2 />, desc: 'B2B lead generation and brand authority.' },
        { name: 'Education', icon: <GraduationCap />, desc: 'Student enrollment and institutional branding.' },
        { name: 'Healthcare', icon: <Stethoscope />, desc: 'Patient acquisition and trust building.' },
        { name: 'Travel & Hospitality', icon: <Plane />, desc: 'Booking maximization and destination marketing.' },
        { name: 'Real Estate', icon: <Home />, desc: 'High-quality lead generation for property sales.' },
    ];

    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Industries We Serve</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Tailored strategies for diverse market sectors.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind) => (
                            <div key={ind.name} className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group bg-white">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {ind.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{ind.name}</h3>
                                <p className="text-slate-600 mb-6">{ind.desc}</p>
                                <Link to="/contact" className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700">
                                    Get Strategy <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
