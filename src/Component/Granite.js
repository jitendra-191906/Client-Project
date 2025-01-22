// import React from 'react'
// import '../Style/granite.css'
// import GraniteImage from '../Images/Granite_im.png';
// import Featureimage1 from '../Images/Feature_img1.png';
// import Featureimage2 from '../Images/Feature_img2.png';
// import Featureimage3 from '../Images/Feature_img3.png';
// import Featureimage4 from '../Images/Feature_img4.png';
// import GraniteTypeImage1 from '../Images/granite_type_1.png';
// import GraniteTypeImage2 from '../Images/granite_type_2.png';
// import GraniteTypeImage3 from '../Images/granite_type_3.png';
// import GraniteTypeImage4 from '../Images/granite_type_4.png';
// import { GRANITES } from '../constants';
// import { useNavigate } from "react-router-dom";

// const graniteTypesExample = [
//       {
//             image: GraniteTypeImage1,
//             name: "Absolute Black",
//       },
//       {
//             image: GraniteTypeImage2,
//             name: "Majestic lappato granite",
//       },
//       {
//             image: GraniteTypeImage3,
//             name: "Red Pearl granite",
//       },
//       {
//             image: GraniteTypeImage4,
//             name: "Rajasthan Black Granite",
//       },
// ]


// function Granite() {

//       const navigate = useNavigate();
//       const handleClick = () => {
//             window.scrollTo(0, 0);
//             navigate("/granite");

//       };

//       return (
//             <>
//                   <div
//                         id={GRANITES}
//                         className="granite_main_container"
//                   >
//                         <div className="granite_main_inner">
//                               <div className="grantie_text website_heading_text">
//                                     <h2>Explore our Granite</h2>
//                               </div>
                             
//                               <div className="granite_inner_types_sec">
//                                     {
//                                           graniteTypesExample.map((type, index) => {
//                                                 return (
//                                                       <React.Fragment key={index}>
//                                                             <div
//                                                                   className="granite_type_deatils"
//                                                                   onClick={() => handleClick()}
//                                                             >
//                                                                   <div className="granite_type_img">
//                                                                         <img
//                                                                               src={type.image}
//                                                                               alt=""
//                                                                               className='granite_type_image'
//                                                                         />
//                                                                   </div>
//                                                                   <div className="granite_type_text">
//                                                                         {type.name}
//                                                                   </div>
//                                                             </div>
//                                                       </React.Fragment>
//                                                 )
//                                           })
//                                     }
//                               </div>

//                               <div className="granite_inner_bottom">
//                                     <button
//                                           className='granite_explore_button'
//                                           onClick={() => handleClick()}
//                                     >
//                                           Show More
//                                     </button>
//                               </div>
//                         </div>

//                   </div>



//             </>
//       )
// }

// export default Granite
