import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/products.css';
import { homeProductsList } from './Data.js';

const ProductSection = (props) => {

  const { title, products, onNavigate, id } = props;

  return (
    <div
      id={id}
      className="home_product_section"
    >

      <div className="home_product_title website_heading_text">
        <h2>
          {title}
        </h2>
      </div>

      <div className="home_product_grid">
        {
          products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className="home_product_card"
                  onClick={() => onNavigate()}
                >
                  <div className="home_product_image">
                    <img
                      className='home_product_card_img'
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="home_product_container">
                    <p className="home_product_name">
                      {product.name}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>

      <div className="home_product_show_more">
        <button
          className="home_explore_button"
          onClick={() => onNavigate()}
        >
          Show More... 
        </button>
      </div>

    </div>
  );
};

function Products() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="home_products_main">
      <div className='home_products_inner'>
        {
          homeProductsList.map((section, index) => {
            return (
              <React.Fragment key={index}>
                <ProductSection
                  key={index}
                  title={section.title}
                  products={section.data}
                  id={section.id}
                  onNavigate={() => handleNavigate(section.path)}
                />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;
