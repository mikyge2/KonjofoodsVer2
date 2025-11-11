import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../mockData';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="section-container">
          <div className="about-header-content">
            <h1 className="page-title">About Konjofoods</h1>
            <p className="page-subtitle">{companyInfo.tagline}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1675654871683-abf6524f68c6" 
                alt="Ethiopian Spices" 
              />
              <div className="story-image-overlay"></div>
            </div>
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">{companyInfo.story}</p>
              <div className="mission-box">
                <Heart className="mission-icon" size={24} />
                <div>
                  <h3 className="mission-title">Our Mission</h3>
                  <p className="mission-text">{companyInfo.mission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-detail-section">
        <div className="section-container">
          <h2 className="section-title centered">Our Core Values</h2>
          <div className="values-detail-grid">
            <div className="value-detail-card">
              <div className="value-detail-icon">
                <Award size={32} />
              </div>
              <h3 className="value-detail-title">Authenticity</h3>
              <p className="value-detail-text">
                Traditional recipes and preparation methods passed down through generations
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">
                <Leaf size={32} />
              </div>
              <h3 className="value-detail-title">Quality</h3>
              <p className="value-detail-text">
                Carefully selected, premium ingredients that meet our highest standards
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">
                <Users size={32} />
              </div>
              <h3 className="value-detail-title">Sustainability</h3>
              <p className="value-detail-text">
                Supporting local farmers and ethical sourcing practices for a better future
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">
                <Heart size={32} />
              </div>
              <h3 className="value-detail-title">Heritage</h3>
              <p className="value-detail-text">
                Preserving and celebrating Ethiopian culinary traditions worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="sourcing-section">
        <div className="section-container">
          <div className="sourcing-grid">
            <div className="sourcing-content">
              <h2 className="section-title">How We Source & Produce</h2>
              <div className="sourcing-steps">
                <div className="sourcing-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3 className="step-title">Direct Partnership</h3>
                    <p className="step-text">
                      We work directly with Ethiopian farmers who have cultivated these spices for generations
                    </p>
                  </div>
                </div>
                <div className="sourcing-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3 className="step-title">Quality Selection</h3>
                    <p className="step-text">
                      Each batch is carefully inspected to ensure only the finest ingredients make it to production
                    </p>
                  </div>
                </div>
                <div className="sourcing-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3 className="step-title">Traditional Processing</h3>
                    <p className="step-text">
                      Using time-honored methods to preserve authentic flavors and nutritional value
                    </p>
                  </div>
                </div>
                <div className="sourcing-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h3 className="step-title">Premium Packaging</h3>
                    <p className="step-text">
                      Sealed fresh to maintain peak flavor and quality from our facility to your kitchen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sourcing-image">
              <img 
                src="https://images.unsplash.com/flagged/photo-1553617569-8ef7a8da3146" 
                alt="Traditional Spice Market" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Authentic Ethiopian Flavors</h2>
            <p className="cta-text">
              Explore our premium selection of traditionally prepared spices and grains
            </p>
            <Link to="/products">
              <Button className="btn-primary large">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
