import React, { useState } from 'react';

const InsightsPage: React.FC = () => {
  const allPosts = [
    { id: 1, title: 'The Future of LLMs in Enterprise Architecture', date: 'Oct 24, 2023', readTime: '8 min read', tag: 'FEATURED', category: 'AI/ML', author: 'Sarah Jenkins', role: 'Chief Architect', img: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&w=800&q=80', desc: 'How Large Language Models are shifting the paradigm of backend system design from deterministic logic to probabilistic reasoning layers.' },
    { id: 2, title: 'Optimizing React Server Components', date: 'Oct 20, 2023', readTime: '5 min read', tag: 'ENGINEERING', category: 'Engineering', author: 'Mike Chen', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80', desc: 'Deep dive into RSC patterns, common anti-patterns, and strategies for maximizing performance in Next.js.' },
    { id: 3, title: 'Scaling Kubernetes for High-Traffic Startups', date: 'Oct 18, 2023', readTime: '8 min read', tag: 'DEVOPS', category: 'Engineering', author: 'Sarah Jenkins', img: 'https://images.unsplash.com/photo-1667372333374-0bd729938833?auto=format&fit=crop&w=600&q=80', desc: 'Best practices for managing clusters under heavy load, auto-scaling configurations, and cost optimization.' },
    { id: 4, title: 'Ethical AI: Beyond the Buzzwords', date: 'Oct 15, 2023', readTime: '6 min read', tag: 'STRATEGY', category: 'AI/ML', author: 'Alex Rivera', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80', desc: 'Navigating the complexities of AI ethics in product development and how to build trust with your users.' },
    { id: 5, title: 'Rust vs. Go: A 2024 Performance Benchmark', date: 'Oct 10, 2023', readTime: '10 min read', tag: 'ENGINEERING', category: 'Engineering', author: 'Mike Chen', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', desc: 'A comprehensive look at memory safety, concurrency models, and developer ergonomics in systems programming.' },
    { id: 6, title: 'The Rise of Specialized AI Chips', date: 'Oct 05, 2023', readTime: '7 min read', tag: 'HARDWARE', category: 'AI/ML', author: 'Alex Rivera', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', desc: 'Why general purpose GPUs are giving way to TPUs and NPUs in the race for model inference speed.' },
    { id: 7, title: 'Asynchronous Work in 2024', date: 'Sep 28, 2023', readTime: '4 min read', tag: 'CULTURE', category: 'Startups', author: 'Sarah Jenkins', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', desc: 'Tools and mindsets required to build effective distributed engineering teams across multiple timezones.' },
  ];

  const [featuredPost, setFeaturedPost] = useState(allPosts[0]);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = allPosts
    .filter(post => post.id !== featuredPost.id)
    .filter(post => activeFilter === 'All' || post.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* --- FEATURED SECTION (Top Hero) --- */}
          <div 
            className="group cursor-pointer bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 mb-20 flex flex-col lg:flex-row gap-12 items-center hover:border-blue-500/30 transition-all shadow-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
                <span className="bg-blue-600 px-3 py-1 rounded text-white">{featuredPost.tag}</span>
                <span className="text-slate-500 dark:text-slate-400">{featuredPost.date} • {featuredPost.readTime}</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight">{featuredPost.title}</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{featuredPost.desc}</p>
              <div className="flex items-center gap-4 pt-4">
                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold">{featuredPost.author}</p>
                  <button className="text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center gap-1 hover:underline">
                    Read Article <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10">
              <img src={featuredPost.img} className="w-full h-full object-cover" alt="Featured" />
            </div>
          </div>

          {/* --- FILTER BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-2xl font-bold">Latest Insights</h2>
            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
              {['All', 'AI/ML', 'Engineering', 'Startups'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === filter 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* --- INSIGHTS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => {
                    setFeaturedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 mb-6">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 dark:text-blue-500 text-[10px] font-bold uppercase tracking-widest">{post.tag}</span>
                  <span className="text-slate-500 text-[10px]">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-500 text-sm line-clamp-2 mb-6">{post.desc}</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.author}</span>
                </div>
              </div>
            ))}
          </div>

          {/* --- NEWSLETTER SECTION --- */}
          <div className="bg-gradient-to-br from-blue-600/5 to-transparent dark:from-blue-600/10 border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-16 text-center shadow-sm">
            <div className="size-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="material-symbols-outlined text-white">mail</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Engineering insights, straight to your inbox.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10">Join 15,000+ engineers receiving our weekly deep dives into system architecture and AI trends.</p>
            <form className="max-w-md mx-auto flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-md">
                Subscribe Free
              </button>
            </form>
            <p className="text-slate-500 dark:text-slate-600 text-xs mt-6">No spam, unsubscribe at any time.</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default InsightsPage;