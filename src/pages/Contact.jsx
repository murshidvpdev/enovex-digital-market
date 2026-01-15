
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Ready to start your digital transformation? We're here to help.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<Phone className="text-blue-500" />}
                                        title="Phone"
                                        content="+971 54 301 7198"
                                        link="tel:+971543017198"
                                    />
                                    <ContactItem
                                        icon={<Mail className="text-blue-500" />}
                                        title="Email"
                                        content="info@enovexholding.com"
                                        link="mailto:info@enovexholding.com"
                                    />
                                    <ContactItem
                                        icon={<MapPin className="text-blue-500" />}
                                        title="Location"
                                        content="Dubai, United Arab Emirates"
                                    />
                                    <ContactItem
                                        icon={<Clock className="text-blue-500" />}
                                        title="Business Hours"
                                        content="Mon - Fri: 9:00 AM - 6:00 PM"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Need immediate assistance?</h4>
                                <p className="text-slate-600 text-sm mb-4">Chat with us on WhatsApp for quick answers.</p>
                                <a href="https://wa.me/971543017198" target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none">
                                                <option>General Inquiry</option>
                                                <option>Request Quote</option>
                                                <option>Careers</option>
                                                <option>Partnership</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                        <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
                                    </div>

                                    <button type="submit" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactItem = ({ icon, title, content, link }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-slate-900">{title}</h4>
            {link ? (
                <a href={link} className="text-slate-600 hover:text-blue-600 transition-colors">{content}</a>
            ) : (
                <p className="text-slate-600">{content}</p>
            )}
        </div>
    </div>
);

export default Contact;
