import React from 'react';
import '../Style/categories.css';

import marbleImage from '../Images/Category_Images/Marbel.png';
import graniteImage from '../Images/Category_Images/Granite.png';
import bathroomTilesImage from '../Images/Category_Images/bathroomtile.png';
import kitchenTilesImage from '../Images/Category_Images/kitchentile.png';
import floorTilesImage from '../Images/Category_Images/Floortile.png';
import OutdoorTilesImage from '../Images/Category_Images/outdoor.jpg';

import { CATEGORIES, MARBELS, GRANITES, BATHROOM_TILES, KITCHEN_TILES, FLOOR_TILES, OUTDOOR_TILES } from '../constants';
import { useScrollToComponent } from './helper';

const Categories = () => {

  const scrollToComponent = useScrollToComponent();

  const categories = [
    { name: "Marble", image: marbleImage, scrollTo: MARBELS },
    { name: "Granite", image: graniteImage, scrollTo: GRANITES },
    { name: "Bathroom Tiles", image: bathroomTilesImage, scrollTo: BATHROOM_TILES},
    { name: "Kitchen Tiles", image: kitchenTilesImage, scrollTo: KITCHEN_TILES},
    { name: "Floor Tiles", image: floorTilesImage, scrollTo: FLOOR_TILES},
    { name: "Outdoor Tiles", image: OutdoorTilesImage, scrollTo: OUTDOOR_TILES}

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
                    <div className="category-card-name website_semi_heading_text">
                      <p>
                        {category.name}
                      </p>
                    </div>
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
