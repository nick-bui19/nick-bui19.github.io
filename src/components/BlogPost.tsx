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
    title: 'I Tried to Automate McDonald\'s Surveys (And It Spectacularly Failed 😐)',
    description: 'Ambitious automation, modern web security, and learning when to pivot',
    date: 'July 18, 2025',
    readTime: '5 min read',
    heroImage: '/mcdonalds_generated_banner.png',
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
  },
  'morgen-calendar-app': {
    id: 'morgen-calendar-app',
    title: 'How I went from Calendar Chaos to Calendar Clarity',
    description: 'How I found the perfect balance between automation and control in calendar management',
    date: 'July 27, 2025',
    readTime: '6 min read',
    heroImage: '/morgen.jpg',
    content: (
      <div className="blog-post-content">
        <p><em>Note: This isn't an ad, but if you want to try Morgen, here's my referral link: <a href="https://morgen.so/?ref=mor-w84p498" target="_blank" rel="noopener noreferrer">https://morgen.so/?ref=mor-w84p498</a></em></p>
        
        <p>It all started with a conversation with my girlfriend. She thinks Google Calendar is enough. And honestly? For most people, maybe it is. But here's the thing – I never thought a calendar actually helped me that much.</p>
        
        <p>I wanted my calendar to be a source of truth. You know, you look at your calendar and you know exactly what you're doing. But that's not really possible with Google Calendar because you can plan your day as much as you want, but things don't always go to plan.</p>
        
        <h3>The Morning Scramble Problem</h3>
        <p>What happens if you wake up at 8 instead of 7? You miss an hour. Now what? Now you have to reschedule all the things that you had planned before, right? And I like to pack my schedule too, so everything would get moved back one hour.</p>
        
        <p>But then the problem is some things can't be moved. For example, my class or a meeting that has been pre-scheduled at that time. What happens then?</p>
        
        <h3>My Journey Through Calendar AI Tools</h3>
        <p>This frustration led me to explore calendar AI tools. Out of all of them, Motion AI, Clockwise, and Reclaim (I think it was called Reclaim?) stood out the most. I even input my card info to try Motion AI and Clockwise. But for me, it was just too much.</p>
        
        <p>The biggest issue? They always schedule things instead of me scheduling it, which wasn't great. I wanted control with intelligence, not a robot running my life.</p>
        
        <h3>Rediscovering Morgen</h3>
        <p>Then I tested out Morgen again. I don't know why I stopped using Morgen, but I think it was because I only used it before because it was a recommendation from my friend. I knew it was slightly more powerful than Google Calendar, but realistically I only used it because it had better UI than my Google Calendar with pastel colors.</p>
        
        <p>But Morgen now? It's a completely different beast.</p>
        
        <h3>The Game-Changing Features</h3>
        
        <h4>1. Calendar Shortcuts That Feel Like Magic</h4>
        <p>I have five different calendars on my personal account: personal/social, classes, projects, interview prep, and manual. Plus my work calendar. That's so many calendars to sync, and sometimes it gets very overwhelming.</p>
        
        <p>But with Morgen:</p>
        <ul>
          <li>Press 8: See all my personal/social events for the week</li>
          <li>Press 1: See all my classes</li>
          <li>Press 2: See all my projects</li>
          <li>Press 3: See all my interview prep</li>
          <li>Press 9: See classes, projects, AND interview prep all at once</li>
        </ul>
        
        <p>It felt like a Porsche compared to a Toyota of Google Calendar. So many shortcuts.</p>
        
        <h4>2. Smart Frames & Energy Management</h4>
        <p>This solved my key issue. In my deep focus time slots, I was doing admin work where I shouldn't be doing admin work. Then when my energy is low, I'd try to do deep work and it just doesn't work because my energy is not good and I can't focus.</p>
        
        <p>With Morgen's Smart Frames:</p>
        <ul>
          <li>Morning "Deep Work" blocks (9-11 AM) only get complex tasks</li>
          <li>Afternoon "Admin" blocks (2-3 PM) only get low-energy tasks</li>
          <li>The AI respects these boundaries and schedules accordingly</li>
        </ul>
        
        <h4>3. Calendar Propagation</h4>
        <p>Since I manage everything from my personal calendar, I need my work meetings to show up there too. Calendar propagation lets me:</p>
        <ul>
          <li>Sync work meetings to my personal calendar as "Private Event (from Morgen)"</li>
          <li>Keep personal events synced to work calendar for availability</li>
          <li>Avoid double-booking across all my calendars</li>
        </ul>
        
        <h4>4. The Task List Integration</h4>
        <p>When you delete a task off your schedule, it goes back into the task list. You can drag tasks from your task list onto your calendar. It's intuitive and actually works the way your brain works.</p>
        
        <h3>The Perfect Balance</h3>
        <p>Morgen was just the right amount. Not too automated like Motion AI, not too manual like Google Calendar. It offers AI planners and task lists that are really useful and intuitive without taking away your control.</p>
        
        <h3>The Reality Check</h3>
        <p>Morgen is still a work in progress. I've had to ask in forums how to do certain things. The AI doesn't automatically adjust when your meeting ends 30 minutes early – you still need to manually trigger replanning.</p>
        
        <p>But that's actually fine by me. I want assistance, not automation.</p>
        
        <h3>Is It Worth It?</h3>
        <p>If you're like me and you:</p>
        <ul>
          <li>Juggle multiple calendars</li>
          <li>Struggle with energy management</li>
          <li>Want smart assistance without losing control</li>
          <li>Need better task-to-calendar integration</li>
        </ul>
        
        <p>Then yes, Morgen is worth the upgrade from Google Calendar.</p>
        
        <p>If you're happy with Google Calendar and don't have these specific pain points? Stick with what works.</p>
        
        <p>For me, Morgen turned my calendar from a wishful thinking document into an actual source of truth. And that's worth way more than $15 a month.</p>
        
        <p><em>Again, not an ad – but if you're curious, my referral link is: <a href="https://morgen.so/?ref=mor-w84p498" target="_blank" rel="noopener noreferrer">https://morgen.so/?ref=mor-w84p498</a></em></p>
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

        {/* Hero Image */}
        {post.heroImage && (
          <div className="blog-post-hero">
            <img src={post.heroImage} alt={post.title} />
          </div>
        )}

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