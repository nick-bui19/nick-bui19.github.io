import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  previewImage: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'sole-survivor',
    title: 'Building Sole Survivor: A Multiplayer VR Wave Defense Game',
    description: 'From VR physics nightmares to networked alien invasions: how we built a virtual reality cooperative Mars survival game in one semester',
    date: 'December 10, 2025',
    readTime: '10 min read',
    previewImage: '/sole-survivor-logo.png',
  },
  {
    id: 'morgen-calendar-app',
    title: 'How I went from Calendar Chaos to Calendar Clarity',
    description: 'How I found the perfect balance between automation and control in calendar management',
    date: 'July 27, 2025',
    readTime: '6 min read',
    previewImage: '/morgen.jpg',
  },
  {
    id: 'mcdonalds-survey-solver',
    title: 'I Tried to Automate McDonald\'s Surveys (And It Spectacularly Failed 😐)',
    description: 'Ambitious automation, modern web security, and learning when to pivot',
    date: 'July 18, 2025',
    readTime: '5 min read',
    previewImage: '/mcdonalds_generated_banner.png',
  }
];

const Blog: React.FC = () => {
  return (
    <section className="blog-container" id="blog">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-card-image">
              <img src={post.previewImage} alt={post.title} />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-separator">•</span>
                <span className="blog-card-read-time">{post.readTime}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="blog-card-button"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;