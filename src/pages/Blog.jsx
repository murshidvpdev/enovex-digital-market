
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "5 SEO Trends That Will Dominate 2024",
            excerpt: "Discover the latest changes in search algorithms and how strict adherence to E-E-A-T principles is more important than ever.",
            category: "SEO",
            author: "Sarah Johnson",
            date: "Jan 12, 2024",
            image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "The Ultimate Guide to Meta Ads in the UAE",
            excerpt: "How to craft high-converting campaigns specifically for the diverse audience in Dubai and Abu Dhabi.",
            category: "PPC",
            author: "Ahmed Ali",
            date: "Jan 08, 2024",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Why Your Website isn't Converting (And How to Fix It)",
            excerpt: "Common UX mistakes that drive customers away and simple tweaks to boost your conversion rate immediately.",
            category: "Web Design",
            author: "Mike Chen",
            date: "Jan 05, 2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Insights & News</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Latest updates, strategies, and tips from the world of digital marketing.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 mb-6 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <Link to={`/blog/${post.id}`} className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
