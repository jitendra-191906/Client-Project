// Testimonials.js
import React from "react";
import "../Style/testimonials.css"; 
import customer1 from '../Images/cus1.jpg';
import customer2 from '../Images/cus2.jpeg';
import customer3 from '../Images/cust3.jpg';

function Testimonials ()  {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      message:
        "The marble flooring I got transformed my living room. The elegance and quality are unmatched. Highly recommend it!",
      image: customer1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "I used these tiles in my bathroom, and the design options were endless. The quality is superb, and cleaning is a breeze!",
      image: customer2, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Mike Johnson",
      message:
        "The granite countertops are perfect for my kitchen. They're durable, elegant, and easy to maintain. 10/10 would recommend!",
      image: customer3, // Replace with actual image URL
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Are Saying</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-card">
              <div className="testimonial-image-container">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              </div>
              <div className="testimonial-content">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
