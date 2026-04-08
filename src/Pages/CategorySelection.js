import React from 'react';
import { categories } from '../quizData';

function CategorySelection({ onSelectCategory }) {
  return (
    <div className="glass-card" style={{ maxWidth: '1000px' }}>
      <h2>Select Your Arena</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <button 
            key={index} 
            className="category-btn"
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySelection;