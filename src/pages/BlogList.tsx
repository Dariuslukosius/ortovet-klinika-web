import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function BlogList() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="gradient-hero pt-28 pb-12">
          <div className="container-custom">
            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-semibold mb-4">Blogas</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Veterinarijos straipsniai</h1>
            <p className="text-primary-foreground/70 text-lg">Naudinga informacija augintinių šeimininkams</p>
          </div>
        </div>
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                <div className="h-3 gradient-primary" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">{post.category}</span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} /><span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="font-bold text-foreground text-base mb-3 leading-snug group-hover:text-primary transition-colors flex-1">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" })}</time>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">Skaityti <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
