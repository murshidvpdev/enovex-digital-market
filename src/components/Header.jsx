import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'SEO', path: '/services/seo' },
                { name: 'Social Media', path: '/services/social-media' },
                { name: 'PPC', path: '/services/ppc' },
                { name: 'Web Design', path: '/services/web-design' },
            ]
        },
        { name: 'Industries', path: '/industries' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className={cn(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/enovex_logo_transparent.png"
                        alt="Enovex Digital Marketing"
                        className={cn(
                            "h-16 w-auto md:h-20 transition-all",
                            !scrolled && "brightness-0 invert"
                        )}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors flex items-center gap-1",
                                    isActive(link.path) ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                                )}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2">
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/contact" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "block text-lg font-medium py-2 transition-colors",
                                            isActive(link.path) ? "text-blue-600" : "text-slate-900"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className={cn(
                                                        "block text-sm py-1 transition-colors",
                                                        isActive(subItem.path) ? "text-blue-600 font-medium" : "text-slate-600"
                                                    )}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link to="/contact" className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
