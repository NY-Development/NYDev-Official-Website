import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Systems',
      title: 'AI & Machine Learning',
      desc: 'Predictive models & Generative AI integration designed to automate complex workflows.',
      items: ['Fine-tuning & LoRA', 'Semantic Search', 'Agentic Workflows', 'Model Registry'],
      icon: 'psychology',
      tags: ['TensorFlow', 'Python']
    },
    {
      category: 'Product',
      title: 'Web Development',
      desc: 'High-performance React & Next.js architectures built for speed and SEO dominance.',
      items: ['React & Next.js', 'Go & Rust Backend', 'PostgreSQL Scale', 'API Design'],
      icon: 'terminal',
      tags: ['React', 'Next.js']
    },
    {
      category: 'Product',
      title: 'Mobile Apps',
      desc: 'Native iOS & Android experiences and cross-platform solutions using Flutter.',
      items: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin'],
      icon: 'stay_current_portrait',
      tags: ['Swift', 'Kotlin']
    },
    {
      category: 'Infrastructure',
      title: 'Cloud & DevOps',
      desc: 'Scalable infrastructure, serverless computing & CI/CD pipelines for rapid deployment.',
      items: ['Kubernetes & Docker', 'Multi-cloud Strategy', 'CI/CD Pipelines', 'Real-time Monitoring'],
      icon: 'dns',
      tags: ['AWS', 'Docker']
    },
    {
      category: 'Design',
      title: 'UI/UX Design',
      desc: 'Human-centered digital interfaces that are intuitive, accessible, and visually stunning.',
      items: ['User Research', 'Prototyping', 'Design Systems', 'Interactive Motion'],
      icon: 'architecture',
      tags: ['Figma', 'Prototyping']
    },
    {
      category: 'Infrastructure',
      title: 'Backend Systems',
      desc: 'Robust APIs, database architecture, and microservices for enterprise-grade stability.',
      items: ['Distributed Systems', 'Database Tuning', 'GraphQL/gRPC', 'Security Audits'],
      icon: 'database',
      tags: ['Node', 'PostgreSQL']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white transition-colors duration-300">
      <main className="pt-32 pb-20 relative px-6">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Badge (Matching image_32e43a) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now Hiring Engineers
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Engineering the Future
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mb-24">
            Futuristic software engineering and AI solutions tailored for scale. We build modular systems for complex challenges.
          </p>

          {/* Grid Layout (Matching image_32e43a & image_335c23) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left mb-32">
            {services.map((svc, i) => (
              <div key={i} className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-10 rounded-3xl hover:border-blue-500/50 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 group relative">
                <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-8 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined !text-2xl">{svc.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-8">{svc.desc}</p>
                
                {/* Tech Tags */}
                <div className="flex gap-2 mb-8">
                  {svc.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-slate-200 dark:bg-white/5 text-slate-500 text-[9px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4 border-t border-slate-200 dark:border-white/5 pt-8">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs font-medium">
                      <div className="size-1 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action (Matching image_32e43a) */}
          <div className="w-full bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[3rem] p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your vision?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              Let's discuss how our engineering team can help you build the next generation of software.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg">
                Contact Us
              </Link>
              <Link to="/work" className="px-10 py-4 bg-transparent border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold rounded-xl transition-all">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;