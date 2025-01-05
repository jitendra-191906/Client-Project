import React from 'react';
import '../Style/Categories.css'; // Link to the CSS file for styling

import marbleImage from '../Images/Marbel.png';
import graniteImage from '../Images/Granite.png';
import bathroomTilesImage from '../Images/bathroomtile.png';
import kitchenTilesImage from '../Images/kitchentile.png';
import floorTilesImage from '../Images/Floortile.png';

const Categories = () => {
  const categories = [
    { name: "Marble", image: marbleImage },
    { name: "Granite", image: graniteImage },
    { name: "Bathroom Tiles", image: bathroomTilesImage },
    { name: "Kitchen Tiles", image: kitchenTilesImage },
    { name: "Floor Tiles", image: floorTilesImage }
  ];

  return (
    <section className="categories">
      <h2>Our Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="image-container">
              <img src={category.image} alt={category.name} className="category-image" />
            </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
