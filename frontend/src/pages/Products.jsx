import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { products } from '../mockData';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'spice', label: 'Spices' },
    { value: 'powder', label: 'Powders' },
    { value: 'grain', label: 'Grains' }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      {/* Header Section */}
      <section className="products-header">
        <div className="section-container">
          <h1 className="page-title">Our Premium Products</h1>
          <p className="page-subtitle">
            Discover our authentic Ethiopian spices, powders, and grains
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="products-filter">
        <div className="section-container">
          <div className="filter-container">
            {/* Search */}
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((category) => (
                <Badge
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  className={`category-badge ${selectedCategory === category.value ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="section-container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-card-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.nameEn} 
                      className="product-card-image"
                    />
                    <div className="product-card-overlay"></div>
                    <Badge className="product-category-badge">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-subtitle">{product.nameEn}</p>
                    <p className="product-card-description">{product.description}</p>
                    <button className="product-learn-more">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p className="no-results-text">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="products-info-section">
        <div className="section-container">
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">Premium Quality</h3>
              <p className="info-text">
                All our products are carefully selected and processed using traditional methods to ensure authentic taste and maximum freshness.
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-title">Ethically Sourced</h3>
              <p className="info-text">
                We partner directly with Ethiopian farmers, ensuring fair trade practices and supporting sustainable agriculture.
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-title">Natural & Pure</h3>
              <p className="info-text">
                No additives, preservatives, or artificial ingredients. Just pure, authentic Ethiopian spices and grains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
