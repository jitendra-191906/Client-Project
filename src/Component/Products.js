import React, { useState } from "react";
import "../Style/products.css";
import marbelImage from '../Images/Marbel1.jpeg';
import TileImage from '../Images/Tile.jpeg';
import GraImage from '../Images/Granite.jpeg';
import MarFlo from '../Images/Marbelflooring.jpeg';
import TilFlo from '../Images/TileFlooring.jpg';
import GraFlo from '../Images/GraniteFlooring.jpeg';

function Product(){
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleDetails = (productName) => {
    setExpandedProduct(expandedProduct === productName ? null : productName);
  };

  const products = [
    {
      name: "Marble",
      description:
        "Luxurious and timeless, marble adds sophistication to any space. Perfect for high-end flooring, countertops, and walls.",
      img: marbelImage,
      keyFeatures: [
        "Unmatched elegance with natural veining patterns.",
        "Durable and long-lasting for everyday use.",
        "Heat-resistant, ideal for kitchens and fireplaces.",
        "Available in a variety of colors and finishes.",
      ],
      whyChoose: [
        { icon: "🏆", title: "Timeless Beauty", description: "Adds luxury and elegance to any room." },
        { icon: "🔥", title: "Heat Resistance", description: "Perfect for kitchen counters and fireplaces." },
        { icon: "🌍", title: "Sustainable", description: "Made from natural stone, eco-friendly." },
        { icon: "💎", title: "Durable", description: "Lasts a lifetime with minimal maintenance." },
      ],
      details: (
        <>
          <h4>Why Choose Marble?</h4>
          <div className="why-choose-container">
            {[
              { icon: "🏆", title: "Timeless Beauty", description: "Adds luxury and elegance to any room." },
              { icon: "🔥", title: "Heat Resistance", description: "Perfect for kitchen counters and fireplaces." },
              { icon: "🌍", title: "Sustainable", description: "Made from natural stone, eco-friendly." },
              { icon: "💎", title: "Durable", description: "Lasts a lifetime with minimal maintenance." },
            ].map((item, index) => (
              <div className="why-choose-item" key={index}>
                <div className="why-choose-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <img
            src={MarFlo}
            alt="Living Room with Marble Flooring"
            className="room-example"
          />
        </>
      ),
    },
    {
      name: "Tiles",
      description:
        "Tiles offer versatility, durability, and a wide range of designs. Perfect for kitchens, bathrooms, and outdoor spaces.",
      img: TileImage,
      keyFeatures: [
        "Wide range of designs and patterns.",
        "Durable and water-resistant for bathrooms and kitchens.",
        "Easy to clean and maintain.",
        "Perfect for both residential and commercial spaces.",
      ],
      whyChoose: [
        { icon: "🎨", title: "Versatile Designs", description: "Available in endless patterns and colors." },
        { icon: "💧", title: "Water-resistant", description: "Ideal for wet areas like kitchens and bathrooms." },
        { icon: "🧼", title: "Easy Maintenance", description: "Simple to clean and resistant to stains." },
        { icon: "🏠", title: "Perfect for Any Space", description: "Can be used in homes or commercial settings." },
      ],
      details: (
        <>
          <h4>Why Choose Tiles?</h4>
          <div className="why-choose-container">
            {[
              { icon: "🎨", title: "Versatile Designs", description: "Available in endless patterns and colors." },
              { icon: "💧", title: "Water-resistant", description: "Ideal for wet areas like kitchens and bathrooms." },
              { icon: "🧼", title: "Easy Maintenance", description: "Simple to clean and resistant to stains." },
              { icon: "🏠", title: "Perfect for Any Space", description: "Can be used in homes or commercial settings." },
            ].map((item, index) => (
              <div className="why-choose-item" key={index}>
                <div className="why-choose-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <img
            src={TilFlo}
            alt="Bathroom with Tiles"
            className="room-example"
          />
        </>
      ),
    },
    {
      name: "Granite",
      description:
        "Granite is a durable, natural stone perfect for countertops and flooring. Available in various colors and patterns.",
      img: GraImage,
      keyFeatures: [
        "Heat-resistant and scratch-resistant.",
        "Ideal for countertops, floors, and even outdoor areas.",
        "Low maintenance and easy to clean.",
        "Available in a wide range of colors and patterns.",
      ],
      whyChoose: [
        { icon: "🔥", title: "Heat Resistance", description: "Perfect for high-traffic areas and kitchens." },
        { icon: "🛠️", title: "Scratch-resistant", description: "Durable and long-lasting." },
        { icon: "✨", title: "Elegant Look", description: "Adds a polished, luxurious feel to any space." },
        { icon: "🧹", title: "Low Maintenance", description: "Easy to clean and resistant to stains." },
      ],
      details: (
        <>
          <h4>Why Choose Granite?</h4>
          <div className="why-choose-container">
            {[
              { icon: "🔥", title: "Heat Resistance", description: "Perfect for high-traffic areas and kitchens." },
              { icon: "🛠️", title: "Scratch-resistant", description: "Durable and long-lasting." },
              { icon: "✨", title: "Elegant Look", description: "Adds a polished, luxurious feel to any space." },
              { icon: "🧹", title: "Low Maintenance", description: "Easy to clean and resistant to stains." },
            ].map((item, index) => (
              <div className="why-choose-item" key={index}>
                <div className="why-choose-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <img
            src={GraFlo}
            alt="Kitchen with Granite Countertop"
            className="room-example"
          />
        </>
      ),
    },
  ];

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      {products.map((product) => (
        <div className="product" key={product.name}>
          <h3>{product.name}</h3>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <div className="key-features-container">
            {product.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`key-feature ${
                  index % 2 === 0 ? "feature-left" : "feature-right"
                }`}
              >
                <span>{feature}</span>
              </div>
            ))}
          </div>
          {expandedProduct === product.name ? (
            <>
              {product.details}
              <button
                className="toggle-details-btn"
                onClick={() => toggleDetails(product.name)}
              >
                Hide Details
              </button>
            </>
          ) : (
            <button
              className="toggle-details-btn"
              onClick={() => toggleDetails(product.name)}
            >
              Show Details
            </button>
          )}
        </div>
      ))}
    </section>
  )
}

export default Product;
