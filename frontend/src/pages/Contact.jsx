import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Music } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../mockData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Frontend-only mock submission
    if (formData.name && formData.email && formData.message) {
      // Store in localStorage as mock backend
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Konjofoods. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="section-container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-text">
                Feel free to reach out through any of the following methods:
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="contact-detail-title">Phone</h3>
                    <p className="contact-detail-text">{companyInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="contact-detail-title">Email</h3>
                    <p className="contact-detail-text">{companyInfo.contact.email}</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="contact-detail-title">Address</h3>
                    <p className="contact-detail-text">{companyInfo.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Facebook size={24} />
                  </a>
                  <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Instagram size={24} />
                  </a>
                  <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Music size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="contact-form-title">Send Us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                  />
                </div>

                <Button type="submit" className="btn-primary full-width">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
