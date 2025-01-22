// import React from 'react'
// import '../Style/marble.css'
// import image1 from '../Images/marble_image.png'
// import image2 from '../Images/white_marble.png'
// import image3 from '../Images/red_marble.png'
// import image4 from '../Images/black_marble.png'
// import { MARBELS } from '../constants'
// import { useNavigate } from 'react-router-dom'

// const marbleTypeExample = [
//       {
//             image: image2,
//             name: "White Marble",
//       },
//       {
//             image: image3,
//             name: "Black Marble",
//       },
//       {
//             image: image4,
//             name: "Red Marble",
//       },
    
// ]

// function Marble() {
//       const navigate = useNavigate();
//       const handleClick = () => {
//             window.scrollTo(0, 0);
//             navigate("/marbel");

//       };
//       return (
//             <>
//                   <div
//                         id={MARBELS}
//                         className="marble_main"
//                   >
//                         <div className='marble_main_inner'>
//                               <div className="marble_text website_heading_text">
//                                     <h2>Explore our Marble Stone</h2>
//                               </div>
//                               {/* <div className="marble_details"> */}
//                               {/* <div className="marble_1"> */}
//                               {/* <p>We provide wide range of marble stone <br />including marble for flooring, roofing and for <br />other purpose.</p> */}
//                               {/* </div> */}
//                               {/* <div className="marble_2">
//                                                 <ul>
//                                                       <li>Durable and long lasting</li>
//                                                       <li>Heat Resistance suitable for kitchen <br />countertops</li>
//                                                       <li>Natural material no harmful chemical</li>
//                                                       <li>Resists erosion and footprints, making it a good choice for flooring</li>
//                                                 </ul>
//                                           </div> */}
//                               {/* </div> */}
//                               {/* <div className="marble_image_section">
//                                           <img
//                                                 src={image1}
//                                                 alt=""
//                                                 className='marble_image'
//                                           />
//                                     </div> */}
//                               <div className="marble_inner_type_sec">
//                                     {
//                                           marbleTypeExample.map((type, index) => {
//                                                 return (
//                                                       <React.Fragment key={index}>
//                                                             <div
//                                                                   className="marble_type_deatils"
//                                                                   onClick={() => handleClick()}
//                                                             >
//                                                                   <div className="marble_type_img">
//                                                                         <img
//                                                                               src={type.image}
//                                                                               alt=""
//                                                                               className='marble_type_image'
//                                                                         />
//                                                                   </div>
//                                                                   <div className="marble_type_text">
//                                                                         {type.name}
//                                                                   </div>
//                                                             </div>
//                                                       </React.Fragment>
//                                                 )
//                                           })
//                                     }
//                               </div>

//                               <div className="marble_inner_bottom">
//                                     <button
//                                           className='marble_explore_button'
//                                           onClick={() => handleClick() }
//                                     >
//                                           Show More
//                                     </button>
//                               </div>
//                         </div>
//                   </div>
//             </>
//       )
// }

// export default Marble
