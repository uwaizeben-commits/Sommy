import React, { useState } from 'react';
import '../styles/Careers.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Customer Service Representative',
      department: 'Customer Support',
      location: 'Lagos',
      type: 'Full-time',
      description: 'We\'re looking for friendly and efficient customer service professionals to join our growing team.',
      responsibilities: [
        'Handle customer inquiries via email, phone, and chat',
        'Process orders and manage returns',
        'Resolve customer issues with professionalism',
        'Maintain detailed customer records'
      ]
    },
    {
      id: 2,
      title: 'Product Curator',
      department: 'Merchandising',
      location: 'Lagos',
      type: 'Full-time',
      description: 'Join our team to discover and curate amazing products for our customers.',
      responsibilities: [
        'Source and evaluate product suppliers',
        'Analyze market trends and customer preferences',
        'Manage product inventory and quality control',
        'Collaborate with marketing team on product launches'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Lagos',
      type: 'Full-time',
      description: 'Help us grow our online presence and reach more customers across Nigeria.',
      responsibilities: [
        'Develop and implement digital marketing strategies',
        'Manage social media accounts and campaigns',
        'Create engaging content for various platforms',
        'Analyze marketing metrics and optimize campaigns'
      ]
    },
    {
      id: 4,
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Lagos',
      type: 'Full-time',
      description: 'Ensure smooth and timely delivery of our products to customers.',
      responsibilities: [
        'Coordinate with shipping partners',
        'Track orders and manage shipments',
        'Handle logistics planning and optimization',
        'Resolve delivery issues promptly'
      ]
    },
    {
      id: 5,
      title: 'Web Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our e-commerce platform to provide the best user experience.',
      responsibilities: [
        'Develop and maintain web applications',
        'Fix bugs and implement new features',
        'Optimize website performance',
        'Ensure website security and data protection'
      ]
    },
    {
      id: 6,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create engaging content and manage our social media community.',
      responsibilities: [
        'Create and schedule social media posts',
        'Engage with followers and build community',
        'Develop social media strategy',
        'Monitor trends and competitor activity'
      ]
    }
  ];

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>Be part of a growing fashion and lifestyle brand</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join">
        <div className="careers-container">
          <h2>Why Join SOMMY'S PLACE?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌟</div>
              <h3>Growth Opportunities</h3>
              <p>Develop your skills and advance your career with us</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Professional Environment</h3>
              <p>Work with a dedicated and talented team</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Meaningful Work</h3>
              <p>Make a real impact on our customers and business</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and supportive work culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions">
        <div className="careers-container">
          <h2>Open Positions</h2>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`job-card ${selectedJob?.id === job.id ? 'active' : ''}`}
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="type">{job.type}</span>
                  </div>
                </div>
                <p className="location">📍 {job.location}</p>
                <p className="description">{job.description}</p>
                
                {selectedJob?.id === job.id && (
                  <div className="job-details">
                    <h4>Responsibilities:</h4>
                    <ul>
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="application-section">
        <div className="careers-container">
          <h2>Ready to Apply?</h2>
          <p>Submit your resume and cover letter to: <strong>careers@sommysplace.com</strong></p>
          <p className="apply-note">We review all applications and will contact candidates who match our requirements.</p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
