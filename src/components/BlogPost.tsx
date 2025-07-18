import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

interface BlogPostData {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: React.ReactElement;
}

const blogPosts: Record<string, BlogPostData> = {
  'mcdonalds-survey-solver': {
    id: 'mcdonalds-survey-solver',
    title: 'I Tried to Automate McDonald\'s Surveys (And It Spectacularly Failed :||)',
    description: 'Ambitious automation, modern web security, and learning when to pivot',
    date: 'July 18, 2025',
    readTime: '5 min read',
    heroImage: '/mcdonalds.png',
    content: (
      <div className="blog-post-content">
        <h3>The Daily Panda Express Routine</h3>
        <p>This summer, I'm working in San Fernando, and there's a Panda Express just a 5-minute walk from my office. After the first week of going there every day for lunch (and still do), I mentioned it to my friend Timmy. "Wait," he said, "you should check out this website pandasurveysolver.com. I got it from DHan."</p>
        
        <p>The Survey Solver for Panda Express gives you a free small entree on top of a two-plate purchase. Instead of paying $17 for my usual order, I was suddenly paying just $11 for what became both my lunch and dinner – it's honestly a lot of food.</p>
        
        <h3>The McDonald's Epiphany</h3>
        <p>Here's the thing about my mornings: I'm terrible at waking up early. I always end up rushing and grabbing McDonald's for breakfast because I need something warm and filling. Cereal, milk, and fruits just don't cut it for me.</p>
        
        <p>So naturally, seeing the Panda Express hack work so well, I thought: "What if I could do the same thing for McDonald's?" I noticed McDonald's also has a survey system on their receipts, and a weekend project idea was born.</p>
        
        <h3>Building the Perfect Survey Bot</h3>
        <p>I dove into this project over the weekend with Next.js 15, React 19, TypeScript, Tailwind CSS, and Playwright for browser automation. I went all-in with the modern web development stack and even deployed it to both Vercel and Railway.</p>
        
        <p>The UI turned out surprisingly polished. I recreated McDonald's visual design so accurately that the completion page looked exactly like the real thing. Six input fields for the receipt code, auto-advancing between fields, copy-paste support – all the UX details you'd expect.</p>
        
        <p>The automation logic was elegant:</p>
        <ul>
          <li>Navigate to mcdvoice.com</li>
          <li>Enter the receipt code in the correct format</li>
          <li>Detect different question types and select optimal responses</li>
          <li>Generate randomized positive text responses</li>
          <li>Extract the validation code</li>
        </ul>
        
        <p>I implemented anti-detection measures: random delays between actions, realistic viewport sizes, human-like user agents. I thought I was being clever.</p>
        
        <h3>The Reality Check</h3>
        <p>Then I tried to actually use it, and McDonald's security shut me down fast.</p>
        
        <p>Turns out McDonald's isn't messing around. Their bot detection includes:</p>
        
        <p><strong>Behavioral Analysis:</strong> They detect when clicks happen too perfectly, when typing is too consistent, when navigation is suspiciously efficient.</p>
        
        <p><strong>Device Fingerprinting:</strong> Headless browsers have telltale signs like missing plugins, unusual canvas fingerprints, and the dreaded <code>navigator.webdriver</code> property.</p>
        
        <p><strong>Network Intelligence:</strong> They likely flag entire IP ranges from cloud providers and analyze request patterns.</p>
        
        <h3>The Quick Pivot</h3>
        <p>After a weekend of hitting this digital wall, I realized the journey was more valuable than the destination. McDonald's pays their software developers around $100k/year, and it's always been my dream job to say I work at McDonald's (while not actually making pennies, nickels, and dimes). Now I know what they pay those devs for!</p>
        
        <p>I pivoted the project into an educational demo:</p>
        <ul>
          <li>Created test receipt codes that generate realistic mock validation codes</li>
          <li>Made the limitations crystal clear in the UI</li>
          <li>Focused on demonstrating automation concepts rather than actual circumvention</li>
          <li>Turned it into a portfolio piece showcasing modern web development</li>
        </ul>
        
        <h3>What I Actually Built</h3>
        <p><strong>Frontend:</strong> A responsive React app with McDonald's-accurate styling and smooth animations.</p>
        
        <p><strong>Backend:</strong> A Next.js API with intelligent routing between demo mode and real automation attempts, plus proper error handling and environment detection.</p>
        
        <p><strong>Deployment:</strong> Successfully deployed to multiple platforms, learning the differences between serverless (Vercel) and container (Railway) architectures.</p>
        
        <h3>Technical Lessons</h3>
        <p><strong>Next.js 15 is fantastic</strong> – The App Router provides an excellent developer experience once you get used to it.</p>
        
        <p><strong>Browser automation is an arms race</strong> – For every automation technique, there's a detection method. Modern companies invest heavily in anti-bot systems.</p>
        
        <p><strong>Security matters</strong> – McDonald's clearly invests in protecting their systems, and it shows. Their security team knows what they're doing.</p>
        
        <h3>The Real Success</h3>
        <p>This weekend project taught me that sometimes the best projects are the ones that don't work exactly as planned. I built a professional-quality web application that demonstrates modern development practices, handles edge cases gracefully, and provides genuine educational value.</p>
        
        <p>Did I build a working McDonald's survey bot? No. Did I learn about advanced web security, deployment strategies, and the realities of automation detection? Absolutely.</p>
        
        <p>Plus, I've got a pretty cool demo to show in interviews – and now I have a deeper appreciation for the engineers protecting these systems.</p>
        
        <h3>Try It Yourself</h3>
        <p>The project is live and open source. Use one of the test codes displayed on the homepage to see the full experience. Just don't expect it to actually get you free McNuggets – McDonald's is smarter than that.</p>
        
        <p><strong>Test it out:</strong> <a href="https://mcdonalds-survey-solver.vercel.app" target="_blank" rel="noopener noreferrer">mcdonalds-survey-solver.vercel.app</a></p>
        <p><strong>Source code:</strong> <a href="https://github.com/nick-bui19/mcdonalds-survey-solver" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        
        <p><strong>P.S.</strong> – If you work at McDonald's security and are reading this: excellent work. Please don't sue me, I just wanted free breakfast.</p>
      </div>
    )
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug || !blogPosts[slug]) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-error">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const post = blogPosts[slug];

  return (
    <div className="blog-post-container">
      <div className="blog-post-wrapper">
        {/* Post Header */}
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-description">{post.description}</p>
          <div className="blog-post-meta">
            <span className="blog-post-author">By Nick Bui</span>
            <span className="blog-post-separator">•</span>
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-separator">•</span>
            <span className="blog-post-read-time">{post.readTime}</span>
          </div>
        </header>

        {/* Post Content */}
        <article className="blog-post-article">
          {post.content}
        </article>

        {/* Back to Blog */}
        <div className="blog-post-footer">
          <Link to="/#blog" className="back-to-blog">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;