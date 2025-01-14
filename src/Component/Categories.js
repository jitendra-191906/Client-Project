import React from 'react';
import '../Style/categories.css';

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
    <section className="categories-section">
      <div className='categories-inner'>

        <h2 className='website_heading_text'>
          Our Categories
        </h2>

        <div className="categories-section-bottom">
          {
            categories.map((category, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="category-card-layout"
                  >

                    <div className="category-card-image-container">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="category-card-image"
                      />
                    </div>

                    <p className="category-card-name">
                      {category.name}
                    </p>

                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Categories;
