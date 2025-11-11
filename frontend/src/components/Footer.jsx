import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo-section">
              <img 
                src="https://customer-assets.emergentagent.com/job_a2474130-0ea5-49e7-bc11-eaac74a33658/artifacts/isxrmbob_KonjoFoodsLogo.jpg" 
                alt="Konjofoods Logo" 
                className="footer-logo"
              />
              <p className="footer-tagline">{companyInfo.tagline}</p>
              <p className="footer-description">
                Bringing authentic Ethiopian flavors to kitchens worldwide through premium, traditionally prepared spices.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>{companyInfo.contact.phone}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>{companyInfo.contact.email}</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>{companyInfo.contact.address}</span>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Follow Us</h3>
            <p className="footer-social-text">Stay connected for updates and recipes</p>
            <div className="footer-social">
              <a 
                href={companyInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={companyInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={companyInfo.social.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Konjofoods. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <span className="heart">♥</span> for authentic Ethiopian cuisine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
