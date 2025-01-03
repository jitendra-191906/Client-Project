import React from "react";
import "../Style/Categories.css";

// Sample images
import bathroomTile from "../Images/bathroom-tile.jpg";
import kitchenTile from "../Images/kitchen-tile.jpg";
import outdoorTile from "../Images/outdoor-tile.jpg";
import flooringMarble from "../Images/flooring-marble.jpg";
import wallMarble from "../Images/wall-marble.jpg";
import decorativeMarble from "../Images/decorative-marble.jpg";
import countertopGranite from "../Images/countertop-granite.jpg";
import outdoorGranite from "../Images/outdoor-granite.jpg";
import decorativeGranite from "../Images/decorative-granite.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Tiles",
      description: "Explore a wide range of stylish tiles for every space.",
      varieties: [
        {
          name: "Bathroom Tiles",
          image: bathroomTile,
          description: "Waterproof and elegant tiles perfect for bathrooms.",
        },
        {
          name: "Kitchen Tiles",
          image: kitchenTile,
          description: "Durable and stain-resistant tiles for kitchens.",
        },
        {
          name: "Outdoor Tiles",
          image: outdoorTile,
          description: "Weather-resistant tiles for outdoor spaces.",
        },
      ],
    },
    {
      id: 2,
      name: "Marble",
      description:
        "Add a touch of luxury with our premium marble collections.",
      varieties: [
        {
          name: "Flooring Marble",
          image: flooringMarble,
          description: "Durable and elegant marble for flooring.",
        },
        {
          name: "Wall Marble",
          image: wallMarble,
          description: "Stylish marble to enhance your walls.",
        },
        {
          name: "Decorative Marble",
          image: decorativeMarble,
          description: "Specially designed marble for decorative purposes.",
        },
      ],
    },
    {
      id: 3,
      name: "Granite",
      description:
        "Discover versatile and durable granites for all applications.",
      varieties: [
        {
          name: "Countertop Granite",
          image: countertopGranite,
          description: "Strong and elegant granite for countertops.",
        },
        {
          name: "Outdoor Granite",
          image: outdoorGranite,
          description: "Granite ideal for outdoor applications.",
        },
        {
          name: "Decorative Granite",
          image: decorativeGranite,
          description: "Granite designed for decorative elements.",
        },
      ],
    },
  ];

  return (
    <section className="categories">
      <h2>Explore Our Product Categories</h2>
      {categories.map((category) => (
        <div className="category-section" key={category.id}>
          {/* Category Header */}
          <div className="category-header">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>

          {/* Variety Grid */}
          <div className="variety-grid">
            {category.varieties.map((variety, index) => (
              <div className="variety-card" key={index}>
                <img src={variety.image} alt={variety.name} />
                <h4>{variety.name}</h4>
                <p>{variety.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
