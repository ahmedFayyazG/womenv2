'use client';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Chip from '@/components/ui/Chip';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BlogSection() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="blog-heading">
      <div className="section-shell">
        <div className="text-center mb-10">
          <Eyebrow className="justify-center">WHAT&apos;S NEW</Eyebrow>
          <SectionHeading id="blog-heading" className="text-center mb-0">From Our Blog</SectionHeading>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" style={{ background: post.gradient }}/>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {post.categories.map((cat) => (
                    <Chip key={cat} variant={cat === 'mental health' ? 'magenta' : 'dark'}>{cat}</Chip>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <p className="text-[#35C3D6] text-[11px] font-bold uppercase tracking-wider mb-2">{post.date}</p>
                <h3 className="text-[#2D2A35] font-bold text-sm leading-snug group-hover:text-[#E5097F] transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline-magenta" href="/blog">ALL NEWS</Button>
        </div>
      </div>
    </section>
  );
}
