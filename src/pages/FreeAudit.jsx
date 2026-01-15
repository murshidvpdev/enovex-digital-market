
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

const FreeAudit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
        alert("Thanks! We'll be in touch shortly with your free audit.");
    };

    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Content Side */}
                    <div className="lg:w-1/2 pt-10">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-bold uppercase tracking-wider mb-4 block"
                        >
                            Limited Time Offer
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
                        >
                            Get a Comprehensive Digital Audit for <span className="text-blue-600">Free</span>
                        </motion.h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Unlock your website's potential. Our experts will analyze your SEO, performance, and user experience to find hidden growth opportunities.
                        </p>

                        <div className="space-y-6">
                            <AuditFeature title="SEO Analysis" desc="Find out why you aren't ranking #1." />
                            <AuditFeature title="UX/UI Review" desc="Identify friction points killing conversions." />
                            <AuditFeature title="Performance Check" desc="Speed kills. See how fast your site really is." />
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16"></div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Claim Your Free Audit</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
                                    <input
                                        {...register("url", { required: "Website URL is required" })}
                                        type="url"
                                        placeholder="https://yourwebsite.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                    {errors.url && <span className="text-red-500 text-sm flex items-center gap-1 mt-1"><AlertCircle size={14} /> {errors.url.message}</span>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                        <input
                                            {...register("firstName", { required: "Required" })}
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                        <input
                                            {...register("lastName", { required: "Required" })}
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                                        type="email"
                                        placeholder="you@company.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        {...register("phone", { required: "Phone is required" })}
                                        type="tel"
                                        placeholder="+971 50 000 0000"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/25"
                                >
                                    Get My Free Audit
                                </button>
                                <p className="text-xs text-slate-500 text-center">
                                    No credit card required. Your data is safe with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AuditFeature = ({ title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1">
            <CheckCircle className="text-green-500 w-6 h-6" />
        </div>
        <div>
            <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
            <p className="text-slate-600">{desc}</p>
        </div>
    </div>
);

export default FreeAudit;
