// import React, { useState } from "react";
// import "../Style/products.css";
// import marbelImage from '../Images/Marbel1.jpeg';
// import TileImage from '../Images/Tile.jpeg';
// import GraImage from '../Images/Granite.jpeg';
// import MarFlo from '../Images/Marbelflooring.jpeg';
// import TilFlo from '../Images/TileFlooring.jpg';
// import GraFlo from '../Images/GraniteFlooring.jpeg';

// function Product(){
//   const [expandedProduct, setExpandedProduct] = useState(null);

//   const toggleDetails = (productName) => {
//     setExpandedProduct(expandedProduct === productName ? null : productName);
//   };

//   const products = [
//     {
//       name: "Marble",
//       description:
//         "Luxurious and timeless, marble adds sophistication to any space. Perfect for high-end flooring, countertops, and walls.",
//       img: marbelImage,
//       keyFeatures: [
//         "Unmatched elegance with natural veining patterns.",
//         "Durable and long-lasting for everyday use.",
//         "Heat-resistant, ideal for kitchens and fireplaces.",
//         "Available in a variety of colors and finishes.",
//       ],
//       whyChoose: [
//         { icon: "🏆", title: "Timeless Beauty", description: "Adds luxury and elegance to any room." },
//         { icon: "🔥", title: "Heat Resistance", description: "Perfect for kitchen counters and fireplaces." },
//         { icon: "🌍", title: "Sustainable", description: "Made from natural stone, eco-friendly." },
//         { icon: "💎", title: "Durable", description: "Lasts a lifetime with minimal maintenance." },
//       ],
//       details: (
//         <>
//           <h4>Why Choose Marble?</h4>
//           <div className="why-choose-container">
//             {[
//               { icon: "🏆", title: "Timeless Beauty", description: "Adds luxury and elegance to any room." },
//               { icon: "🔥", title: "Heat Resistance", description: "Perfect for kitchen counters and fireplaces." },
//               { icon: "🌍", title: "Sustainable", description: "Made from natural stone, eco-friendly." },
//               { icon: "💎", title: "Durable", description: "Lasts a lifetime with minimal maintenance." },
//             ].map((item, index) => (
//               <div className="why-choose-item" key={index}>
//                 <div className="why-choose-icon">{item.icon}</div>
//                 <h5>{item.title}</h5>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//           <img
//             src={MarFlo}
//             alt="Living Room with Marble Flooring"
//             className="room-example"
//           />
//         </>
//       ),
//     },
//     {
//       name: "Tiles",
//       description:
//         "Tiles offer versatility, durability, and a wide range of designs. Perfect for kitchens, bathrooms, and outdoor spaces.",
//       img: TileImage,
//       keyFeatures: [
//         "Wide range of designs and patterns.",
//         "Durable and water-resistant for bathrooms and kitchens.",
//         "Easy to clean and maintain.",
//         "Perfect for both residential and commercial spaces.",
//       ],
//       whyChoose: [
//         { icon: "🎨", title: "Versatile Designs", description: "Available in endless patterns and colors." },
//         { icon: "💧", title: "Water-resistant", description: "Ideal for wet areas like kitchens and bathrooms." },
//         { icon: "🧼", title: "Easy Maintenance", description: "Simple to clean and resistant to stains." },
//         { icon: "🏠", title: "Perfect for Any Space", description: "Can be used in homes or commercial settings." },
//       ],
//       details: (
//         <>
//           <h4>Why Choose Tiles?</h4>
//           <div className="why-choose-container">
//             {[
//               { icon: "🎨", title: "Versatile Designs", description: "Available in endless patterns and colors." },
//               { icon: "💧", title: "Water-resistant", description: "Ideal for wet areas like kitchens and bathrooms." },
//               { icon: "🧼", title: "Easy Maintenance", description: "Simple to clean and resistant to stains." },
//               { icon: "🏠", title: "Perfect for Any Space", description: "Can be used in homes or commercial settings." },
//             ].map((item, index) => (
//               <div className="why-choose-item" key={index}>
//                 <div className="why-choose-icon">{item.icon}</div>
//                 <h5>{item.title}</h5>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//           <img
//             src={TilFlo}
//             alt="Bathroom with Tiles"
//             className="room-example"
//           />
//         </>
//       ),
//     },
//     {
//       name: "Granite",
//       description:
//         "Granite is a durable, natural stone perfect for countertops and flooring. Available in various colors and patterns.",
//       img: GraImage,
//       keyFeatures: [
//         "Heat-resistant and scratch-resistant.",
//         "Ideal for countertops, floors, and even outdoor areas.",
//         "Low maintenance and easy to clean.",
//         "Available in a wide range of colors and patterns.",
//       ],
//       whyChoose: [
//         { icon: "🔥", title: "Heat Resistance", description: "Perfect for high-traffic areas and kitchens." },
//         { icon: "🛠️", title: "Scratch-resistant", description: "Durable and long-lasting." },
//         { icon: "✨", title: "Elegant Look", description: "Adds a polished, luxurious feel to any space." },
//         { icon: "🧹", title: "Low Maintenance", description: "Easy to clean and resistant to stains." },
//       ],
//       details: (
//         <>
//           <h4>Why Choose Granite?</h4>
//           <div className="why-choose-container">
//             {[
//               { icon: "🔥", title: "Heat Resistance", description: "Perfect for high-traffic areas and kitchens." },
//               { icon: "🛠️", title: "Scratch-resistant", description: "Durable and long-lasting." },
//               { icon: "✨", title: "Elegant Look", description: "Adds a polished, luxurious feel to any space." },
//               { icon: "🧹", title: "Low Maintenance", description: "Easy to clean and resistant to stains." },
//             ].map((item, index) => (
//               <div className="why-choose-item" key={index}>
//                 <div className="why-choose-icon">{item.icon}</div>
//                 <h5>{item.title}</h5>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//           <img
//             src={GraFlo}
//             alt="Kitchen with Granite Countertop"
//             className="room-example"
//           />
//         </>
//       ),
//     },
//   ];

//   return (
//     <section id="products" className="products">
//       <h2>Our Products</h2>
//       {products.map((product) => (
//         <div className="product" key={product.name}>
//           <h3>{product.name}</h3>
//           <img src={product.img} alt={product.name} />
//           <p>{product.description}</p>
//           <div className="key-features-container">
//             {product.keyFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`key-feature ${
//                   index % 2 === 0 ? "feature-left" : "feature-right"
//                 }`}
//               >
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//           {expandedProduct === product.name ? (
//             <>
//               {product.details}
//               <button
//                 className="toggle-details-btn"
//                 onClick={() => toggleDetails(product.name)}
//               >
//                 Hide Details
//               </button>
//             </>
//           ) : (
//             <button
//               className="toggle-details-btn"
//               onClick={() => toggleDetails(product.name)}
//             >
//               Show Details
//             </button>
//           )}
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Product;

import React, { useState } from "react";
import "../Style/products.css";
import marbleImage from "../Images/Marbel.jpeg";
import tileImage from "../Images/Tile.jpeg";
import graniteImage from "../Images/Granite.jpeg";
import { FaGem, FaLayerGroup, FaBox } from "react-icons/fa";
import { MdOutlineAutoFixHigh, MdOutlineWaterDrop, MdOutlineShield } from "react-icons/md";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Marble",
      description: "Elegant and timeless stone for luxurious interiors.",
      image: marbleImage,
      category: "Luxury Stones",
      colors: [
        { name: "White", code: "#f8f8f8" },
        { name: "Black", code: "#2e2e2e" },
        { name: "Beige", code: "#d8c3a5" },
      ],
      keyFeatures: [
        { icon: <MdOutlineAutoFixHigh />, text: "Premium Finish" },
        { icon: <MdOutlineShield />, text: "Scratch Resistant" },
        { icon: <FaGem />, text: "Luxurious Appearance" },
        { icon: <MdOutlineWaterDrop />, text: "Moisture Resistant" },
      ],
      icon: <FaGem />,
    },
    {
      id: 2,
      name: "Tiles",
      description: "Durable and stylish tiles for floors and walls.",
      image: tileImage,
      category: "Modern Surfaces",
      colors: [
        { name: "Grey", code: "#9e9e9e" },
        { name: "Blue", code: "#3b5998" },
        { name: "Brown", code: "#6f4e37" },
      ],
      keyFeatures: [
        { icon: <FaLayerGroup />, text: "Wide Variety" },
        { icon: <MdOutlineWaterDrop />, text: "Waterproof" },
        { icon: <MdOutlineShield />, text: "Durable Material" },
        { icon: <MdOutlineAutoFixHigh />, text: "Stylish Patterns" },
      ],
      icon: <FaLayerGroup />,
    },
    {
      id: 3,
      name: "Granite",
      description: "Strong and versatile stone for countertops and floors.",
      image: graniteImage,
      category: "Natural Surfaces",
      colors: [
        { name: "Red", code: "#c0392b" },
        { name: "Black", code: "#2c3e50" },
        { name: "Green", code: "#27ae60" },
      ],
      keyFeatures: [
        { icon: <FaBox />, text: "Heat Resistant" },
        { icon: <MdOutlineShield />, text: "Sturdy Material" },
        { icon: <FaGem />, text: "Elegant Polished Look" },
        { icon: <MdOutlineWaterDrop />, text: "Low Maintenance" },
      ],
      icon: <FaBox />,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="products">
      <h2>Our Products</h2>

      {/* Category Filter */}
      <div className="categories">
        {["All", "Luxury Stones", "Modern Surfaces", "Natural Surfaces"].map(
          (category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-icon">{product.icon}</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {/* Key Features with Icons */}
            <h4>Key Features:</h4>
            <ul className="key-features">
              {product.keyFeatures.map((feature, index) => (
                <li key={index} className="key-feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Available Colors */}
            <h4>Available Colors:</h4>
            <div className="color-palette">
              {product.colors.map((color, index) => (
                <div
                  className="color-box"
                  key={index}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;


