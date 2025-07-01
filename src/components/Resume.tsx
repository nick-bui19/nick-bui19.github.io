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
        'Engineered user authentication, driver-rider matching, and real-time ride-tracking features in React Native & Node.js, cutting average booking time by 35s.',
        'Integrated Paystack with a ledger micro-service that processed N4M ($2.6K) in secure in-app transactions with 0 payment failures during internship.',
        'Designed and built scalable backend endpoints in NodeJS for ride scheduling, transaction history, user account management.'
      ]
    },
    {
      company: 'Vanderbilt Medical Center - Jump-Start Tech',
      role: 'Machine Learning Intern',
      date: 'May 2023 - August 2023',
      location: 'Nashville, TN',
      duties: [
        'Built multi-modal TensorFlow models to assess patient mental states from intake responses, incorporating NLP and behavioral signals.',
        'Packaged the model inside a Dockerised FastAPI micro-service and deployed to AWS Fargate (ECS) behind an ALB, delivering ¡200ms p99 latency while serving 300+ mental-health assessments/week for 20 psychiatrists.',
        'Implemented SHAP explainability dashboards visualising top-influencing symptoms & lab results; clinician feedback on these insights cut false positives 18 % after two refinement cycles.'
      ]
    },
    {
        company: 'Yu Huang Lab, Vanderbilt University',
        role: 'Research Assistant',
        date: 'January 2023 - May 2024',
        location: 'Nashville, TN',
        duties: [
          'Developed an algorithm for email malware detection, achieving a 95% detection rate in preliminary tests using ensemble learning and XGBoost and utilized by 10+ Vanderbilt students.',
          'Spearheaded a project focused on the application of deep learning and AI in software testing, optimizing the identification of bugs and vulnerabilities by 30 %, which significantly accelerated the software development life cycle.',
          'Annotated and labeled 5k+ data points for classification of cybersecurity messages and published dataset to enable transfer-learning research.'
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