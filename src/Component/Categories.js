// Categories.js
import React from 'react';
import '../Style/categories.css'; // Link to the CSS file for styling

import marbleImage from '../Images/Marbel1.jpeg';
import graniteImage from '../Images/Granite.jpeg';
import bathroomTilesImage from '../Images/bathroom-tile.jpg';
import kitchenTilesImage from '../Images/kitchen-tile.jpg';
import floorTilesImage from '../Images/flooring-marble.jpg';

const Categories = () => {
  const categories = [
    {
      name: "Marble",
      image: marbleImage,
      description: "Elegant and luxurious stone for high-end interiors."
    },
    {
      name: "Granite",
      image: graniteImage,
      description: "Durable and strong stone perfect for kitchens and countertops."
    },
    {
      name: "Bathroom Tiles",
      image: bathroomTilesImage,
      description: "Waterproof and stylish tiles for your bathroom."
    },
    {
      name: "Kitchen Tiles",
      image: kitchenTilesImage,
      description: "Stylish and easy-to-clean tiles for the kitchen."
    },
    {
      name: "Floor Tiles",
      image: floorTilesImage,
      description: "Durable tiles for any flooring requirement."
    }
  ];

  return (
    <section className="categories">
      <h2>Our Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
