import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img
                                src="/enovex_logo_transparent.png"
                                alt="Enovex Digital Marketing"
                                className="h-24 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Empowering businesses with data-driven digital marketing strategies that deliver measurable growth and ROI.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services/seo" className="hover:text-white transition-colors">SEO Optimization</Link></li>
                            <li><Link to="/services/ppc" className="hover:text-white transition-colors">PPC Advertising</Link></li>
                            <li><Link to="/services/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
                            <li><Link to="/services/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
                            <li><Link to="/services/content" className="hover:text-white transition-colors">Content Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                <span>Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="tel:+971543017198" className="hover:text-white transition-colors">+971 54 301 7198</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="mailto:info@enovexholding.com" className="hover:text-white transition-colors">info@enovexholding.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Enovex Digital Marketing. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
