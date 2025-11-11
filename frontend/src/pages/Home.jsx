import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Leaf, Mountain, ChefHat, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { heroImages, products } from '../mockData';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-content">
          <div className="hero-logo-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_a2474130-0ea5-49e7-bc11-eaac74a33658/artifacts/isxrmbob_KonjoFoodsLogo.jpg" 
              alt="Konjofoods Logo" 
              className="hero-logo"
            />
          </div>
          <h1 className="hero-title">
            <span className="title-main">Konjofoods</span>
          </h1>
          <p className="hero-tagline">Premium Quality Ethiopian Spices</p>
          <p className="hero-description">
            Bringing authentic Ethiopian flavors to your kitchen through traditionally prepared,
            premium spices and grains sourced directly from local farmers.
          </p>
          <div className="hero-buttons">
            <Link to="/about">
              <Button className="btn-primary">
                <Sparkles className="btn-icon" size={18} />
                Discover Our Story
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="btn-secondary">
                Explore Products
                <ChevronRight className="btn-icon" size={18} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Spices</h2>
            <p className="section-subtitle">
              Discover the authentic taste of Ethiopia through our carefully curated selection
            </p>
          </div>
          <div className="products-preview">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-preview-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.nameEn} className="product-image" />
                  <div className="product-overlay"></div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-name-en">{product.nameEn}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products">
              <Button className="btn-primary">
                View All Products
                <ChevronRight className="btn-icon" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Leaf size={48} strokeWidth={1.5} />
              </div>
              <h3 className="value-title">100% Natural</h3>
              <p className="value-description">
                No additives or preservatives, just pure Ethiopian spices
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Mountain size={48} strokeWidth={1.5} />
              </div>
              <h3 className="value-title">Locally Sourced</h3>
              <p className="value-description">
                Partnering with Ethiopian farmers for the finest ingredients
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <ChefHat size={48} strokeWidth={1.5} />
              </div>
              <h3 className="value-title">Traditional Methods</h3>
              <p className="value-description">
                Time-honored preparation techniques passed through generations
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={48} strokeWidth={1.5} />
              </div>
              <h3 className="value-title">Premium Quality</h3>
              <p className="value-description">
                Rigorous quality control for exceptional flavor and freshness
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
