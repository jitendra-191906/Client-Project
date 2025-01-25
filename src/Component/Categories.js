import React from 'react';
import '../Style/categories.css';

import marbleImage from '../Images/Category_Images/Marbel.png';
import graniteImage from '../Images/Category_Images/Granite.png';
import bathroomTilesImage from '../Images/Category_Images/bathroomtile.png';
import kitchenTilesImage from '../Images/Category_Images/kitchentile.png';
import floorTilesImage from '../Images/Category_Images/Floortile.png';
import { CATEGORIES, MARBELS, GRANITES, TILES } from '../constants';
import { useScrollToComponent } from './helper';

const Categories = () => {

  const scrollToComponent = useScrollToComponent();

  const categories = [
    { name: "Marble", image: marbleImage, scrollTo: MARBELS },
    { name: "Granite", image: graniteImage, scrollTo: GRANITES },
    { name: "Bathroom Tiles", image: bathroomTilesImage, scrollTo: TILES },
    { name: "Kitchen Tiles", image: kitchenTilesImage, scrollTo: TILES },
    { name: "Floor Tiles", image: floorTilesImage, scrollTo: TILES }
  ];

  return (
    <section
      id={CATEGORIES}
      className="categories-section"
    >
      <div className='categories-inner'>

        <div className='website_heading_text'>
          <h2 >
            Our Categories
          </h2>
        </div>

        <div className="categories-section-bottom">
          {
            categories.map((category, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="category-card-layout"
                    onClick={() => scrollToComponent(category.scrollTo)}
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
