import React from 'react';
import './Resume.css';

const resumeData = {
  education: [
    {
      university: 'Vanderbilt University',
      location: 'Nashville, TN',
      degree: 'B.Sc. in Computer Science & Mathematics, Minor in Engineering Management',
      date: 'May 2026',
      courses: [
        'Operating Systems', 'Artificial Intelligence', 'Software Design', 'Programming Languages',
        'Machine Learning', 'Algorithms', 'Data Structures', 'Discrete Structures', 'Digital Systems', 'Statistics'
      ],
      involvements: ['Vanderbilt Squash Vice President', 'Beta Theta Pi Fraternity']
    }
  ],
  experience: [
    {
      company: 'TransAstra',
      role: 'Software Engineer Intern',
      date: 'May 2025 - August 2025',
      location: 'Los Angeles, CA',
      duties: ["Currently working this role."]
    },
    {
      company: 'Karpool',
      role: 'Software Engineer Intern',
      date: 'May 2024 - August 2024',
      location: 'Cape Town, South Africa',
      duties: [
        'Engineered driver–rider matching & real-time ride-tracking in React Native & Node.js, cutting avg booking time by 35s.',
        'Integrated Paystack with a ledger micro-service that processed $2.6K in secure in-app transactions.',
        'Implemented scalable backend endpoints in NodeJS for ride scheduling, transaction history, and account management.'
      ]
    },
    {
      company: 'Vanderbilt Medical Center - Jump-Start Tech',
      role: 'Machine Learning Intern',
      date: 'May 2023 - August 2023',
      location: 'Nashville, TN',
      duties: [
        'Built TensorFlow ensemble learning models to assess patient mental states from intake responses & behavioral signals.',
        'Prototype full-stack mobile application that provides psychiatrists at Vanderbilt University Medical Center with real-time patient feedback, containerized with Docker Compose.',
        'Designed and implemented a secure sign-up page and email verification with AWS Amplify.'
      ]
    },
    {
        company: 'Yu Huang Lab, Vanderbilt University',
        role: 'Research Assistant',
        date: 'January 2023 - May 2024',
        location: 'Nashville, TN',
        duties: [
          'Developed ensemble learning email malware detection algorithm with 95 % detection rate in preliminary testing.',
          'Spearheaded project on the application of AI in software testing, optimizing the identification of bugs and vulnerabilities by 30 %, utilized by 10+ Vanderbilt students.',
          'Annotated 5K+ data points for cybersecurity message classification and published dataset.'
        ]
      }
  ],
  certifications: [
    {
      name: 'AWS Solutions Architect - Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'In Progress'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued Jul 2025',
      credentialId: ''
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford | Coursera',
      date: 'Issued Jun 2023',
      credentialId: 'D8YHKEYMQNX4'
    },
    {
      name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'Stanford | Coursera',
      date: 'Issued Jun 2023',
      credentialId: '4C2F9DQ6P5EQ'
    },
    {
        name: 'Advanced Learning Algorithms',
        issuer: 'Stanford | Coursera',
        date: 'Issued May 2023',
        credentialId: 'LVEH4JFDN3R'
    },
    {
        name: 'Supervised Machine Learning: Regression and Classification',
        issuer: 'Stanford | Coursera',
        date: 'Issued May 2023',
        credentialId: 'BVDXAHJUY7EN'
    }
  ]
};

const Resume: React.FC = () => {
  return (
    <section className="resume-container" id="resume">
      <div className="resume-content">
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-header">
                <h3>{edu.university}</h3>
                <span>{edu.date}</span>
              </div>
              <p className="degree">{edu.degree}</p>
              <p><strong>Relevant Courses:</strong> {edu.courses.join(', ')}</p>
              <p><strong>Leadership/Involvements:</strong> {edu.involvements.join(', ')}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
            <h2 className="resume-section-title">Certifications</h2>
            {resumeData.certifications.map((cert, index) => (
                <div key={index} className="resume-item">
                    <div className="resume-item-header">
                        <h3>{cert.name}</h3>
                        <span>{cert.date}</span>
                    </div>
                    <p className="issuer">{cert.issuer}</p>
                    {cert.credentialId && <p className="credential-id">Credential ID: {cert.credentialId}</p>}
                </div>
            ))}
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-header">
                <h3>{exp.role} @ {exp.company}</h3>
                <span>{exp.date}</span>
              </div>
              <ul>
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume; 